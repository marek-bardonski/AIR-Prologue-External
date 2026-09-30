#!/usr/bin/env python3
"""Vehicle part fitting (29.09.2026): every enabled vehicle part item gets a slot it fits.

Extends game-data/vehicles.json in place (idempotent): adds the CDDA part definitions for the parts that had no slot,
gives every part a `fit` (slot role, the vehicle mounts it fits, AIR effect dials) and rebuilds the vehicle types with
their optional slots. Part operations (install/removal/repair requirements, time, skills) are resolved from the
attributed CDDA JSON exactly like scripts/expand-roadside.py. Cargo volumes come from the CDDA part `size`. Speed,
terrain, wear, fuel, energy and encounter factors are AIR adaptations, not CDDA physics.
"""
import json, pathlib, re, copy
ROOT = pathlib.Path(__file__).resolve().parents[1]
def read(p): return json.loads((ROOT / p).read_text())
def write(p, v): (ROOT / p).write_text(json.dumps(v, indent=2) + '\n')

parts, requirements = {}, {}
for f in sorted((ROOT / 'cdda/data/json').rglob('*.json')):
    try: data = json.loads(f.read_text())
    except Exception: continue
    if not isinstance(data, list): continue
    for raw in data:
        if not isinstance(raw, dict): continue
        id = raw.get('id', raw.get('abstract'))
        if not isinstance(id, str): continue
        if raw.get('type') == 'vehicle_part': parts[id] = (raw, str(f.relative_to(ROOT)))
        if raw.get('type') == 'requirement': requirements[id] = raw

def resolve(id):
    raw, path = parts[id]; base = resolve(raw['copy-from'])[0] if raw.get('copy-from') in parts else {}
    out = copy.deepcopy(base); out.update(raw)
    if raw.get('extend', {}).get('flags'): out['flags'] = base.get('flags', []) + raw['extend']['flags']
    return out, path

def minutes(s):
    return sum(float(n) * {'s': 1 / 60, 'm': 1, 'h': 60, 'd': 1440}.get(u, 1) for n, u in re.findall(r'([\d.]+)\s*([smhd])', str(s))) or 1

def req(raw, factor=1, seen=()):
    out = {'components': [], 'tools': [], 'qualities': []}
    for kind in out:
        for row in raw.get(kind, []):
            if kind == 'qualities': out[kind].append([copy.deepcopy(q) for q in (row if isinstance(row, list) else [row])]); continue
            alternatives = []
            for e in row:
                id, n = e[:2]
                if len(e) > 2 and e[2] == 'LIST':
                    nested = req(requirements[id], factor * max(1, n), seen + (id,))
                    if len(nested[kind]) == 1: alternatives += nested[kind][0]
                    else: out[kind] += nested[kind]
                else: alternatives.append({'id': id, ('count' if kind == 'components' else 'charges'): n * factor if n > 0 else n})
            if alternatives: out[kind].append(alternatives)
    using = raw.get('using', [])
    if isinstance(using, str): using = [[using, 1]]
    for u in using:
        id, n = (u, 1) if isinstance(u, str) else (u[0], u[1] if len(u) > 1 else 1)
        assert id not in seen, id
        sub = req(requirements[id], factor * n, seen + (id,))
        for kind in out: out[kind] += sub[kind]
    return out

def operation(raw, path):
    out = req(raw); out.update(minutes=minutes(raw.get('time', '1 m')), skills=[{'skill': s, 'level': v} for s, v in raw.get('skills', [])], source=path)
    return out

def litres(size):
    if size is None: return 0
    m = re.match(r'([\d.]+)\s*(ml|L)', str(size))
    return round(float(m.group(1)) / (1000 if m.group(2) == 'ml' else 1), 1) if m else 0

v = read('game-data/vehicles.json')
catalog = v['parts']
STEEL = re.compile(r'(^|_)(mc|hc|ch|qt)_')

def add_part(id):
    p, path = resolve(id)
    ops = {k: operation(r, path) for k, r in (p.get('requirements') or {}).items() if k in ['install', 'removal', 'repair']}
    if 'install' in ops:
        ops['install']['components'].append([{'id': p['item'], 'count': 1}])
    for op in ops.values():  # the Prologue has one steel (CLAUDE.md rule 9): drop tiered alternatives, keep the rest
        for kind in ('components', 'tools'):
            op[kind] = [[e for e in row if not STEEL.search(e['id'])] for row in op[kind]]
            op[kind] = [row for row in op[kind] if row]
    catalog[id] = {'item': p['item'], 'flags': p.get('flags', []), 'durability': p.get('durability', 100), 'operations': ops, 'source': path}
    return p

# CDDA part ids whose items had no slot before. hand_controls has no CDDA requirements: it gets AIR ones below.
NEW = ('wheel_motorbike wheel_motorbike_or wheel_wood wheel_wood_b engine_1cyl_small engine_electric_tiny '
       'engine_electric_small engine_electric engine_electric_large battery_motorbike battery_motorbike_small '
       'small_storage_battery medium_storage_battery storage_battery large_storage_battery alternator_bicycle '
       'alternator_motorbike hdframe folding_frame frame_wood_light seat_back seat_back_leather controls_electronic '
       'hand_controls motorcycle_headlight floodlight directed_floodlight horn_car horn_bicycle muffler basketlg '
       'basketlg_folding basketsm mountable_cooler plating_steel plating_hard plating_spiked plating_wood '
       'plating_superalloy storage_battery_mount handheld_battery_mount').split()
sizes = {}
for id in NEW + list(catalog):
    p = add_part(id) if id in NEW else resolve(id)[0]
    sizes[id] = litres(p.get('size'))
# Hand controls: CDDA lists no requirements. AIR: a wrench and half an hour, like the other bolted controls.
catalog['hand_controls']['operations'] = {
    'install': {'components': [[{'id': 'hand_controls', 'count': 1}]], 'tools': [], 'qualities': [[{'id': 'WRENCH', 'level': 1}]], 'minutes': 30.0, 'skills': [{'skill': 'mechanics', 'level': 1}], 'source': 'air:hand_controls'},
    'removal': {'components': [], 'tools': [], 'qualities': [[{'id': 'WRENCH', 'level': 1}]], 'minutes': 15.0, 'skills': [{'skill': 'mechanics', 'level': 0}], 'source': 'air:hand_controls'}}
# A battery mount makes the battery a quick, tool-free swap (CDDA storage_battery_removable).
swap = resolve('storage_battery_removable')
quick = {k: operation(r, swap[1]) for k, r in swap[0]['requirements'].items() if k in ['install', 'removal']}

# role, mounts, effects. Mounts: cycle = bicycle, moto = motorbike, car = car and sports car.
C, M, B = 'car', 'moto', 'cycle'
def fit(role, mounts, **fx): return {'role': role, 'mounts': mounts, **fx}
FITS = {
    'frame': fit('frame', [B, M, C], speed=1, wear=1),
    'hdframe': fit('frame', [C], speed=.92, wear=.6),
    'folding_frame': fit('frame', [B], speed=1.05, wear=1.4),
    'frame_wood': fit('frame', [B], speed=.95, wear=1.5),
    'frame_wood_light': fit('frame', [B], speed=1, wear=1.8),
    # engines: `speed` is one scale for every mount (pedals 1, a 1.6 L four 6); a vehicle's rated speeds are for
    # the engine it was built with, and another engine scales them by the ratio.
    'foot_pedals': fit('engine', [B], power='muscle', speed=1),
    'engine_1cyl_small': fit('engine', [B], power='combustion', speed=1.6, fuel=.12, startsInstantly=True),
    'engine_electric_tiny': fit('engine', [B], power='electric', speed=1.4, kjPerHex=20, quiet=.85),
    'engine_electric_small': fit('engine', [B, M], power='electric', speed=1.8, kjPerHex=40, quiet=.85),
    'engine_electric': fit('engine', [M, C], power='electric', speed=5.4, kjPerHex=300, quiet=.85),
    'engine_electric_large': fit('engine', [C], power='electric', speed=7.2, kjPerHex=450, quiet=.85),
    'engine_inline4': fit('engine', [M, C], power='combustion', speed=6, fuel=1),
    'engine_v6': fit('engine', [C], power='combustion', speed=6.9, fuel=1.25),
    'engine_v8': fit('engine', [C], power='combustion', speed=7.8, fuel=1.5),
    'engine_v12': fit('engine', [C], power='combustion', speed=8.4, fuel=2),
    'battery_car': fit('battery', [M, C]),
    'battery_motorbike': fit('battery', [B, M]),
    'battery_motorbike_small': fit('battery', [B, M]),
    'small_storage_battery': fit('battery', [B, M]),
    'medium_storage_battery': fit('battery', [M, C]),
    'storage_battery': fit('battery', [C]),
    'large_storage_battery': fit('battery', [C]),
    'alternator_bicycle': fit('alternator', [B], kjPerHex=1),
    'alternator_motorbike': fit('alternator', [M], kjPerHex=3),
    'alternator_car': fit('alternator', [M, C], kjPerHex=5),
    'alternator_truck': fit('alternator', [C], kjPerHex=8),
    'tank': fit('tank', [C]),
    'tank_small': fit('tank', [B, M, C]),
    'controls': fit('controls', [M, C]),
    'controls_electronic': fit('dashboard', [B, M, C], electronics=True),
    'dashboard': fit('dashboard', [C], electronics=True),
    'hand_controls': fit('aid', [M, C], handControls=True),
    'seat': fit('seat', [C], cargoL=sizes['seat']),
    'seat_leather': fit('seat', [C], cargoL=sizes['seat_leather']),
    'seat_back': fit('seat', [C], cargoL=sizes['seat_back']),
    'seat_back_leather': fit('seat', [C], cargoL=sizes['seat_back_leather']),
    'saddle': fit('seat', [B, M], cargoL=sizes['saddle']),
    'wheel': fit('wheel', [C], terrain={'road': 1, 'field': 1, 'hills': 1}, wear=1),
    'wheel_slick': fit('wheel', [C], terrain={'road': 1.1, 'field': .85, 'hills': .8}, wear=1.3),
    'wheel_wide': fit('wheel', [C], terrain={'road': 1, 'field': 1.1, 'hills': 1.1}, wear=.8),
    'wheel_wide_or': fit('wheel', [C], terrain={'road': .95, 'field': 1.25, 'hills': 1.3}, wear=.9),
    'wheel_bicycle': fit('wheel', [B], terrain={'road': 1, 'field': 1, 'hills': 1}, wear=1),
    'wheel_bicycle_or': fit('wheel', [B], terrain={'road': .95, 'field': 1.2, 'hills': 1.3}, wear=.9),
    'wheel_wood': fit('wheel', [B], terrain={'road': .6, 'field': .8, 'hills': .8}, wear=2),
    'wheel_wood_b': fit('wheel', [B], terrain={'road': .65, 'field': .85, 'hills': .85}, wear=1.5),
    'wheel_motorbike': fit('wheel', [M], terrain={'road': 1, 'field': 1, 'hills': 1}, wear=1),
    'wheel_motorbike_or': fit('wheel', [M], terrain={'road': .95, 'field': 1.2, 'hills': 1.3}, wear=.9),
    'headlight': fit('light', [C], light=True, kjPerHex=2),
    'wide_headlight': fit('light', [C], light=True, kjPerHex=3),
    'floodlight': fit('light', [C], light=True, kjPerHex=5),
    'directed_floodlight': fit('light', [C], light=True, kjPerHex=4),
    'motorcycle_headlight': fit('light', [B, M], light=True, kjPerHex=1),
    'horn_car': fit('horn', [M, C], encounter=.9),
    'horn_bicycle': fit('horn', [B], encounter=.95),
    'muffler': fit('exhaust', [M, C], encounter=.85),
    'stereo': fit('radio', [C]),
    'trunk': fit('cargo', [C], cargoL=sizes['trunk']),
    'trunk_floor': fit('cargo', [C], cargoL=sizes['trunk_floor']),
    'cargo_space_external': fit('cargo', [C], cargoL=sizes['cargo_space_external']),
    'mountable_cooler': fit('cargo', [C], cargoL=50),
    'basketlg': fit('cargo', [B, M], cargoL=sizes['basketlg']),
    'basketlg_folding': fit('cargo', [B, M], cargoL=sizes['basketlg_folding']),
    'basketsm': fit('cargo', [B, M], cargoL=sizes['basketsm']),
    'bike_rack': fit('rack', [C], bikeRack=1),
    'mounted_spare_tire': fit('spare', [C]),
    'plating_steel': fit('armor', [M, C], speed=.95, shield=.75),
    'plating_hard': fit('armor', [M, C], speed=.93, shield=.65),
    'plating_spiked': fit('armor', [M, C], speed=.95, shield=.75),
    'plating_wood': fit('armor', [M, C], speed=.97, shield=.85),
    'plating_superalloy': fit('armor', [M, C], speed=.97, shield=.6),
    'storage_battery_mount': fit('mount', [M, C], quickBattery=True),
    'handheld_battery_mount': fit('mount', [B, M], quickBattery=True),
}
# Left out on purpose: a second copy of the stereo (appliance) and the old unused cargo_box.
for id in ['ap_stereo', 'cargo_box']: catalog.pop(id, None)
missing = [id for id in catalog if id not in FITS]; assert not missing, missing
for id, p in catalog.items(): p['fit'] = FITS[id]

def slot(part, role, required=True, spawn=None):
    s = {'part': part, 'role': role, 'required': required}
    if spawn is not None: s['spawn'] = spawn
    return s
# The first slots of every older type keep their order, so saved vehicles (indexed jobs) stay valid; new optional
# slots are appended and filled in on saved vehicles as empty.
car = [slot('frame', 'frame'), slot('engine_inline4', 'engine'), slot('battery_car', 'battery'), slot('tank', 'tank'),
       slot('controls', 'controls'), slot('seat', 'seat'), slot('alternator_car', 'alternator', False)] + \
      [slot('wheel', 'wheel') for _ in range(4)] + [slot('stereo', 'radio', False)] + \
      [slot('seat_back', 'seat', False, .7), slot('dashboard', 'dashboard', False, .8), slot('headlight', 'light', False, .75),
       slot('headlight', 'light', False, .75), slot('horn_car', 'horn', False, .85), slot('muffler', 'exhaust', False, .8),
       slot('trunk', 'cargo', False, .9), slot('cargo_space_external', 'cargo', False, .08), slot('bike_rack', 'rack', False, .08),
       slot('mounted_spare_tire', 'spare', False, .25), slot('hand_controls', 'aid', False, .03),
       slot('plating_steel', 'armor', False, 0), slot('storage_battery_mount', 'mount', False, 0)]
sports = copy.deepcopy(car)
for s in sports:
    if s['part'] == 'engine_inline4': s['part'] = 'engine_v8'
    if s['part'] == 'wheel': s['part'] = 'wheel_slick'
    if s['part'] == 'seat_back': s['spawn'] = .3
    if s['part'] == 'trunk': s['spawn'] = .6
bicycle = [slot('frame', 'frame'), slot('foot_pedals', 'engine'), slot('saddle', 'seat'), slot('wheel_bicycle', 'wheel'), slot('wheel_bicycle', 'wheel'),
           slot('basketsm', 'cargo', False, .4), slot('motorcycle_headlight', 'light', False, .1), slot('horn_bicycle', 'horn', False, .3),
           slot('small_storage_battery', 'battery', False, 0), slot('tank_small', 'tank', False, 0), slot('alternator_bicycle', 'alternator', False, 0),
           slot('controls_electronic', 'dashboard', False, 0), slot('handheld_battery_mount', 'mount', False, 0)]
motorbike = [slot('frame', 'frame'), slot('engine_inline4', 'engine'), slot('battery_motorbike', 'battery'), slot('tank_small', 'tank'),
             slot('controls', 'controls'), slot('saddle', 'seat'), slot('alternator_motorbike', 'alternator', False),
             slot('wheel_motorbike', 'wheel'), slot('wheel_motorbike', 'wheel'), slot('motorcycle_headlight', 'light', False, .8),
             slot('horn_car', 'horn', False, .6), slot('muffler', 'exhaust', False, .8), slot('controls_electronic', 'dashboard', False, .5),
             slot('basketsm', 'cargo', False, .15), slot('hand_controls', 'aid', False, 0), slot('plating_steel', 'armor', False, 0),
             slot('handheld_battery_mount', 'mount', False, 0)]
old = {k: {kk: vv for kk, vv in t.items() if kk != 'muscle'} for k, t in v['types'].items()}
v['types'] = {
    'bicycle': {**old['bicycle'], 'mount': B, 'layout': 'two_wheel', 'fuelMultiplier': .5, 'slots': bicycle},
    'car': {**old['car'], 'mount': C, 'layout': 'car', 'fuelMultiplier': 1, 'slots': car},
    'sports_car': {**old['sports_car'], 'mount': C, 'layout': 'car', 'fuelMultiplier': 1, 'slots': sports},
    'motorbike': {'name': 'Motorbike', 'rarity': 'rare', 'weight': 12, 'mount': M, 'layout': 'two_wheel', 'fuelMultiplier': .5,
                  'speedKph': {'road': 90, 'field': 26, 'hills': 9}, 'slots': motorbike},
}
for t in v['types'].values():
    for s in t['slots']: assert s['part'] in catalog and t['mount'] in catalog[s['part']]['fit']['mounts'], (s, t['mount'])
v['batterySwap'] = quick
v.pop('upgrades', None); v.pop('engineSpeed', None)
v['//fit'] = ('Every part has a `fit`: the slot role, the mounts it fits (cycle, moto, car) and AIR effect dials. Speeds '
              'scale a type\'s rated km/h by engine, wheel, frame and armour ratios against the parts it was built with.')
write('game-data/vehicles.json', v)
print(len(catalog), 'parts;', len(v['types']), 'types')
