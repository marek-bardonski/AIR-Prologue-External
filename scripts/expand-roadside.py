#!/usr/bin/env python3
"""Curated roadside expansion. CDDA-derived definitions remain here; upstream files are untouched."""
import json, pathlib, re, copy
ROOT=pathlib.Path(__file__).resolve().parents[1]
def read(p):return json.loads((ROOT/p).read_text())
def write(p,v):(ROOT/p).write_text(json.dumps(v,indent=2)+'\n')
index=read('index/ids.json')['cdda'];wl=read('whitelist/items.json');known={v for a in wl.values() if isinstance(a,list) for v in a}
# Exact curated additions are retained across reruns.
known-=set(wl.get('roadside_survival_100',[])+wl.get('vehicle_parts_50',[])+wl.get('vehicle_support',[]))
groups={
 'shop_hardware': 'block_and_tackle brush bronze_brush_axe bronze_file bronze_hoe bronze_pickaxe bronze_shears bronze_sickle chisel_bronze crash_axe fire_ax forged_shears aluminum_stepladder balance_small barometer bathroom_scale beverly_shear butter_churn churn corded_powerdrill dehydrator dental_tools dish_towel extinguisher flint_steel glass_thermometer grinder_blade grinder_cutoff_disc grinder_metal_grinding_disc',
 'house_books': '101_carpentry SICP adv_chemistry arduino_experiments book_archery book_lockpick book_pneumatics booklet_firstaid brewing_cookbook computer_science concrete_book distilling_cookbook emergency_book fermenting_book fun_survival guidebook book_nonf_soft_mechnic_hotrod book_nonf_hard_sports_bike cookbook_mexican cookbook_native cookbook_turkish classic_literature fairy_tales essay_book',
 'campsite_supplies': 'camp_chair chair_folding deck_chair bone_flute fishing_hook_basic fishing_rod_2pc_packed fishing_rod_tele_packed candle_small acoustic_guitar harmonica banjo flute cow_bell dog_whistle_wood whistle tent_large tent_small sleeping_bag',
 'house_kitchen': 'bag_plastic bag_zipper_gallon bottle_glass bottle_glass_seasoning_small bottle_gourd bottle_plastic_small bottle_twoliter box_compact_wood box_small_plastic box_snack box_tea carton_egg cup_plastic flask_hip fuel_tin jar_3l_glass_sealed jug_clay nylon_bag pillbox pillbox_large shot_glass tankard_wooden waterskin2 waterproof_camera_case waterproof_smart_phone_case dry_bag_large',
 'medical_clinic_supplies': 'alcohol_wipes disincotton_ball disinrag anesthetic_kit saline_bag_1000_empty saline_bag_500_empty ipok',
}
selected=[];locations={}
for table,words in groups.items():
 for id in words.split():
  if id not in known and 'item:'+id in index and id not in selected and len(selected)<100:selected.append(id);locations[id]=table
assert len(selected)==100,(len(selected),selected)
vehicle_candidates='foot_crank wheel_bicycle wheel_bicycle_or wheel wheel_slick wheel_wide wheel_wide_or wheel_motorbike wheel_motorbike_or wheel_rim_bicycle wheel_rim_medium wheel_rim_wide tire_bicycle tire_bicycle_or tire_medium tire_medium_slick tire_wide tire_wide_or deflated_wheel deflated_wheel_bicycle deflated_wheel_slick i4_combustion v6_combustion v8_combustion v12_combustion alternator_car alternator_truck frame hdframe foldframe frame_wood frame_wood_light seat seat_leather seat_bench seat_bench_leather saddle vehicle_controls vehicle_dashboard car_headlight car_wide_headlight motorcycle_headlight stereo cargo_rack cargo_lock cargo_aisle bike_rack mounted_spare_tire storage_battery large_storage_battery wheel_mount_light wheel_mount_medium door_lock'.split()
vehicles=[id for id in vehicle_candidates if id not in known and 'item:'+id in index][:50]
assert len(vehicles)==50,len(vehicles)
wl['roadside_survival_100']=selected;wl['vehicle_parts_50']=vehicles
for id in vehicles:locations[id]='roadside_garage_supplies'
# Read upstream part inheritance and requirement groups, with source attribution per operation.
parts={};requirements={}
for f in sorted((ROOT/'cdda/data/json').rglob('*.json')):
 try:data=json.loads(f.read_text())
 except:continue
 if not isinstance(data,list):continue
 for raw in data:
  if not isinstance(raw,dict):continue
  id=raw.get('id',raw.get('abstract'))
  if not isinstance(id,str):continue
  if raw.get('type')=='vehicle_part':parts[id]=(raw,str(f.relative_to(ROOT)))
  if raw.get('type')=='requirement':requirements[id]=raw

def resolve(id):
 raw,path=parts[id];base=resolve(raw['copy-from'])[0] if raw.get('copy-from') in parts else {}
 out=copy.deepcopy(base);out.update(raw)
 if raw.get('extend',{}).get('flags'):out['flags']=base.get('flags',[])+raw['extend']['flags']
 return out,path

def minutes(s):
 return sum(float(n)*{'s':1/60,'m':1,'h':60,'d':1440}.get(u,1) for n,u in re.findall(r'([\d.]+)\s*([smhd])',str(s))) or 1

def req(raw,factor=1,seen=()):
 out={'components':[],'tools':[],'qualities':[]}
 for kind in out:
  for row in raw.get(kind,[]):
   if kind=='qualities':out[kind].append([copy.deepcopy(q) for q in (row if isinstance(row,list) else [row])]);continue
   alternatives=[]
   for e in row:
    id,n=e[:2]
    if len(e)>2 and e[2]=='LIST':
     nested=req(requirements[id],factor*max(1,n),seen+(id,))
     # LIST alternatives here are a single row of interchangeable supplies/tools.
     if len(nested[kind])==1:alternatives+=nested[kind][0]
     else:out[kind]+=nested[kind]
    else:alternatives.append({'id':id,('count' if kind=='components' else 'charges'):n*factor if n>0 else n})
   if alternatives:out[kind].append(alternatives)
 for id,n in raw.get('using',[]):
  assert id not in seen,id
  sub=req(requirements[id],factor*n,seen+(id,))
  for kind in out:out[kind]+=sub[kind]
 return out

def operation(raw,path):
 out=req(raw);out.update(minutes=minutes(raw.get('time','1 m')),skills=[{'skill':s,'level':v} for s,v in raw.get('skills',[])],source=path)
 return out

chosen='foot_pedals wheel_bicycle wheel_bicycle_or wheel wheel_slick wheel_wide wheel_wide_or engine_inline4 engine_v6 engine_v8 engine_v12 battery_car alternator_car alternator_truck tank_small tank seat seat_leather saddle controls dashboard stereo headlight wide_headlight frame frame_wood trunk cargo_box'.split()
# IDs differ from the item for some controls/accessories; resolve from their item instead.
for item in ['vehicle_controls','vehicle_dashboard','stereo','car_headlight','car_wide_headlight','cargo_rack','cargo_aisle','bike_rack','mounted_spare_tire']:
 found=next((id for id in parts if resolve(id)[0].get('item')==item and resolve(id)[0].get('requirements')),None)
 if found and found not in chosen:chosen.append(found)
catalog={}
for id in chosen:
 if id not in parts:continue
 p,path=resolve(id)
 if not p.get('item') or 'item:'+p['item'] not in index:continue
 ops={k:operation(v,path) for k,v in p.get('requirements',{}).items() if k in ['install','removal','repair']}
 if 'install' not in ops:continue
 ops['install']['components'].append([{'id':p['item'],'count':1}])
 catalog[id]={'item':p['item'],'flags':p.get('flags',[]),'durability':p.get('durability',100),'operations':ops,'source':path}
fixfile='cdda/data/json/faults/fixes_vehicles.json';fixes={}
for f in read(fixfile):
 if not f.get('faults_removed'):continue
 r={'components':[],'tools':[],'qualities':[]}
 for rr in f.get('requirements',[]):
  sub=req(rr)
  for k in r:r[k]+=sub[k]
 r.update(minutes=minutes(f['time']),skills=[{'skill':s,'level':v} for s,v in f.get('skills',{}).items()],source=fixfile,name=f['name'])
 fixes[f['faults_removed'][0]]=r
# Keep exactly the CDDA operations. Unsupported alloy alternatives remain unavailable, as elsewhere in AIR.
support=set()
for p in catalog.values():
 support.add(p['item'])
 for op in p['operations'].values():
  for row in op['components']+op['tools']:
   for e in row:
    if 'item:'+e['id'] in index and not re.search(r'(^|_)(mc|hc|ch|qt)_',e['id']):support.add(e['id'])
for op in fixes.values():
 for row in op['components']+op['tools']:
  for e in row:
   if 'item:'+e['id'] in index:support.add(e['id'])
support.update(['gasoline','jerrycan','wrench','screwdriver','motor_tiny','jack','jack_small','jack_makeshift'])
support={id for id in support if not id.startswith('integrated_') and id != 'drill_press_tool'}
wl['vehicle_support']=sorted(support-known-set(selected)-set(vehicles))
write('whitelist/items.json',wl)
loot=read('game-data/loot-tables.json')
for t in loot['tables'].values():t['entries']=[e for e in t['entries'] if not e.get('roadsideExpansion')]
for id,table in locations.items():loot['tables'][table]['entries'].append({'item':id,'weight':1 if id in vehicles else 2,'count':[1,1],'roadsideExpansion':True})
for id in sorted(support):
 if id not in locations and not any(e['item']==id for e in loot['tables']['roadside_garage_supplies']['entries']):
  e={'item':id,'weight':3,'count':[1,1],'roadsideExpansion':True}
  if id=='gasoline':e.update(container='jerrycan',charges=[500,1500])
  loot['tables']['roadside_garage_supplies']['entries'].append(e)
# Small field repairs can be found at garages without requiring an advanced workshop first.
write('game-data/loot-tables.json',loot)
write('game-data/roadside-expansion.json',{'survival':selected,'vehicleParts':vehicles,'support':wl['vehicle_support'],'locations':locations})
def slot(id,role,required=True):return {'part':id,'role':role,'required':required}
base=[slot('frame','frame'),slot('engine_inline4','engine'),slot('battery_car','battery'),slot('tank','tank'),slot('controls','controls'),slot('seat','seat'),slot('alternator_car','alternator',False)]+[slot('wheel','wheel') for _ in range(4)]+[slot('stereo','radio',False)]
assert all(s['part'] in catalog for s in base),[s for s in base if s['part'] not in catalog]
sports=copy.deepcopy(base)
for s in sports:
 if s['part']=='engine_inline4':s['part']='engine_v8'
 if s['part']=='wheel':s['part']='wheel_slick'
write('game-data/vehicles.json',{'//':'Part operations and fault fixes are derived verbatim in meaning from the attributed CDDA JSON. Spawn odds, hex speeds, fuel-per-hex, terrain and wear are AIR adaptations, not CDDA driving physics. A zero-health part must be removed and replaced.','roadChance':0.035,'fuelItem':'gasoline','fuelCapacity':60000,'fuelPerHex':{'road':60,'field':140,'hills':250},'wearPerHex':0.001,'startEnergyKj':1,'pedalStaminaPerHex':3,'radioWorkingHealth':0.5,'alternatorKjPerHex':5,'engineSpeed':{'engine_inline4':1,'engine_v6':1.15,'engine_v8':1.3,'engine_v12':1.4},'wheelJackQuality':{'id':'JACK','level':1},'parts':catalog,'faults':fixes,'types':{
 'bicycle':{'name':'Bicycle','rarity':'common','weight':70,'muscle':True,'speedKph':{'road':16,'field':9,'hills':3},'slots':[slot('frame','frame'),slot('foot_pedals','engine'),slot('saddle','seat'),slot('wheel_bicycle','wheel'),slot('wheel_bicycle','wheel')]},
 'car':{'name':'Car','rarity':'uncommon','weight':25,'speedKph':{'road':65,'field':22,'hills':6},'slots':base},
 'sports_car':{'name':'Sports car','rarity':'rare','weight':5,'speedKph':{'road':100,'field':24,'hills':5},'fuelMultiplier':1.5,'slots':sports}},'walkingKph':4,'upgrades':{'engine_inline4':['engine_v6','engine_v8'],'wheel':['wheel_wide_or'],'wheel_bicycle':['wheel_bicycle_or'],'seat':['seat_leather']}})
manifest=read('game-data/manifest.json')
for f in ['roadside-expansion.json','vehicles.json']:
 if f not in manifest['files']:manifest['files'].append(f)
write('game-data/manifest.json',manifest)
print('Added',len(selected),'survival items,',len(vehicles),'vehicle items,',len(wl['vehicle_support']),'support items;',len(catalog),'vehicle part definitions')
