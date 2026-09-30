#!/usr/bin/env node
// Builds index/ids.json with three sections: cdda (data/json), overrides, mods/Magiclysm.
// Each section maps "<domain>:<id>" -> { file, type } so a later section never shadows an earlier one.
// Abstract templates are keyed "<domain>:abstract:<name>". Recipes are keyed "recipe:<result>[:<id_suffix>]",
// uncraft entries "uncraft:<result>". Pure Node, no dependencies. Run: node scripts/build-index.mjs
import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCES = [
  { name: 'cdda', dir: 'cdda/data/json' },
  { name: 'overrides', dir: 'overrides' },
  { name: 'mods/Magiclysm', dir: 'cdda/data/mods/Magiclysm' },
];

const ITEM_TYPES = new Set(['ITEM', 'AMMO', 'ARMOR', 'BATTERY', 'BIONIC_ITEM', 'BOOK', 'COMESTIBLE', 'CONTAINER',
  'ENGINE', 'GENERIC', 'GUN', 'GUNMOD', 'MAGAZINE', 'PET_ARMOR', 'TOOL', 'TOOLMOD', 'TOOL_ARMOR', 'WHEEL']);
const DOMAIN_BY_TYPE = {
  MONSTER: 'monster', terrain: 'terrain', furniture: 'furniture', requirement: 'requirement', material: 'material',
  item_group: 'item_group', harvest: 'harvest', construction: 'construction', construction_group: 'construction_group',
  construction_category: 'construction_category', skill: 'skill', tool_quality: 'tool_quality', body_part: 'body_part',
  sub_body_part: 'sub_body_part', damage_type: 'damage_type', npc: 'npc', npc_class: 'npc_class', talk_topic: 'talk_topic',
  mission_definition: 'mission', profession: 'profession', SPELL: 'spell', effect_type: 'effect', flag_type: 'flag',
  monster_attack: 'monster_attack', monstergroup: 'monstergroup', item_category: 'item_category', vehicle: 'vehicle',
  vehicle_part: 'vehicle_part', practice: 'recipe', json_flag: 'flag', addiction_type: 'addiction', vitamin: 'vitamin',
  proficiency: 'proficiency', weakpoint_set: 'weakpoint_set', species: 'species', faction: 'faction', trap: 'trap',
  emit: 'emit', field_type: 'field_type', speech: 'speech', snippet: 'snippet', scenario: 'scenario', hobby: 'hobby',
  mutation: 'mutation', mutation_category: 'mutation_category', bionic: 'bionic', ammunition_type: 'ammo_type',
  weapon_category: 'weapon_category', activity_type: 'activity', effect_on_condition: 'eoc', ter_furn_transform: 'transform',
  overmap_terrain: 'overmap_terrain', mapgen: 'mapgen', palette: 'palette', start_location: 'start_location',
  region_settings: 'region_settings', clothing_mod: 'clothing_mod', fault: 'fault', fault_fix: 'fault_fix',
  connect_group: 'connect_group', martial_art: 'martial_art', technique: 'technique', ascii_art: 'ascii_art',
  achievement: 'achievement', conduct: 'conduct', event_statistic: 'statistic', score: 'score', event_transformation: 'event_transformation',
  anatomy: 'anatomy', limb_score: 'limb_score', character_mod: 'character_mod', move_mode: 'move_mode', dream: 'dream',
  disease_type: 'disease', profession_group: 'profession_group', enchantment: 'enchantment', attack_vector: 'attack_vector',
  scent_type: 'scent_type', morale_type: 'morale_type', obsolete_terrain: 'obsolete_terrain', charge_removal_blacklist: 'misc',
  climbing_aid: 'climbing_aid', hit_range: 'hit_range', loot_zone: 'loot_zone', mood_face: 'mood_face', shopkeeper_blacklist: 'misc',
  shopkeeper_consumption_rates: 'misc', trait_group: 'trait_group', weather_type: 'weather_type', zone_field_type: 'zone_field_type',
  monster_faction: 'monster_faction', overmap_special: 'overmap_special', overmap_connection: 'overmap_connection',
  overmap_location: 'overmap_location', city_building: 'city_building', map_extra: 'map_extra', jmath_function: 'jmath',
  var_migration: 'migration', uncraft: 'uncraft', recipe: 'recipe', nested_category: 'recipe_category', recipe_category: 'recipe_category',
  MIGRATION: 'migration', TRAIT_MIGRATION: 'migration', recipe_group: 'recipe_group', item_action: 'item_action', vehicle_group: 'vehicle_group',
  vehicle_placement: 'vehicle_placement', vehicle_spawn: 'vehicle_spawn', body_graph: 'body_graph', help: 'help', option_slider: 'misc',
  behavior: 'behavior', spell_type: 'spell', mod_tileset: 'misc', speed_description: 'speed_description', widget: 'widget',
  weight_function: 'misc', effect_on_condition_group: 'eoc', addiction: 'addiction', LOOT_ZONE: 'loot_zone', TALK_TOPIC: 'talk_topic',
  'monster_flag': 'monster_flag', 'monster_goal': 'monster_goal', 'end_screen': 'end_screen', 'tileset': 'misc', 'furniture_migration': 'migration',
  'terrain_migration': 'migration', 'trap_migration': 'migration', 'ammo_type_migration': 'migration', 'vehicle_part_migration': 'migration',
  'butchery_requirement': 'butchery_requirement', 'harvest_drop_type': 'harvest_drop_type', 'sound_effect': 'misc', 'playlist': 'misc',
  'oter_id_migration': 'migration', 'camp_migration': 'migration', 'faction_migration': 'migration', 'npc_migration': 'migration',
  'item_migration': 'migration', 'ammo_migration': 'migration', 'gun_migration': 'migration', 'SCENARIO_BLACKLIST': 'misc',
  'MONSTER_BLACKLIST': 'misc', 'MONSTER_WHITELIST': 'misc', 'ITEM_BLACKLIST': 'misc', 'profession_item_substitutions': 'misc',
  'external_option': 'misc', 'EXTERNAL_OPTION': 'misc', 'mission_type': 'mission', 'body_part_type': 'body_part',
};

function domainFor(obj) {
  const t = obj.type;
  if (ITEM_TYPES.has(t)) return 'item';
  return DOMAIN_BY_TYPE[t] || String(t).toLowerCase();
}

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (name.endsWith('.json')) yield p;
  }
}

const index = {};
let current = null;
const stats = { files: 0, objects: 0, duplicates: 0, byDomain: {} };
const warnings = [];

function put(key, entry) {
  const prev = current[key];
  if (prev) {
    if (entry.obsolete && !prev.obsolete) return;          // never let an obsolete copy shadow a live one
    stats.duplicates++;
    if (stats.duplicates <= 40) warnings.push(`duplicate ${key}: ${prev.file} -> ${entry.file}`);
  }
  current[key] = entry;
}

for (const src of SOURCES) {
  current = index[src.name] = {};
  const base = join(ROOT, src.dir);
  let files;
  try { files = [...walk(base)]; } catch { continue; }
  for (const file of files) {
    let data;
    try { data = JSON.parse(readFileSync(file, 'utf8')); } catch (e) { warnings.push(`unparsable ${file}: ${e.message}`); continue; }
    stats.files++;
    const rel = relative(ROOT, file);
    const objs = Array.isArray(data) ? data : [data];
    for (const obj of objs) {
      if (!obj || typeof obj !== 'object' || !obj.type) continue;
      stats.objects++;
      const domain = domainFor(obj);
      stats.byDomain[domain] = (stats.byDomain[domain] || 0) + 1;
      const entry = { file: rel, type: obj.type };
      if (obj.obsolete) entry.obsolete = true;
      if (domain === 'recipe') {
        if (obj.abstract) { put(`recipe:abstract:${obj.abstract}`, { ...entry, abstract: true }); continue; }
        if (!obj.result) continue;
        const key = obj.id_suffix ? `recipe:${obj.result}:${obj.id_suffix}` : `recipe:${obj.result}`;
        put(key, entry);
        continue;
      }
      if (domain === 'uncraft') { if (obj.abstract) { put(`uncraft:abstract:${obj.abstract}`, entry); continue; } if (obj.result) put(`uncraft:${obj.result}`, entry); continue; }
      if (obj.abstract) { put(`${domain}:abstract:${obj.abstract}`, { ...entry, abstract: true }); continue; }
      const ids = Array.isArray(obj.id) ? obj.id : (obj.id !== undefined ? [obj.id] : []);
      for (const id of ids) put(`${domain}:${id}`, entry);
    }
  }
}

const sorted = Object.fromEntries(Object.entries(index).map(([n, m]) => [n, Object.fromEntries(Object.keys(m).sort().map(k => [k, m[k]]))]));
mkdirSync(join(ROOT, 'index'), { recursive: true });
writeFileSync(join(ROOT, 'index', 'ids.json'), JSON.stringify(sorted));
writeFileSync(join(ROOT, 'index', 'stats.json'), JSON.stringify({ ...stats, generatedAt: new Date().toISOString() }, null, 2));
console.log(`indexed ${stats.objects} objects from ${stats.files} files; sections: ${Object.entries(sorted).map(([n, m]) => `${n}=${Object.keys(m).length}`).join(', ')} (${stats.duplicates} duplicates within sections)`);
for (const w of warnings.slice(0, 40)) console.warn('warn:', w);
