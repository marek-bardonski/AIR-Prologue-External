#!/usr/bin/env node
// Dev helper: node scripts/show.mjs <key> [<key>...]  -> prints the raw object(s) for index keys (cdda section), compact.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const idx = JSON.parse(readFileSync(join(ROOT, 'index/ids.json'), 'utf8'))[process.env.SECTION || 'cdda'];
const KEEP = (process.env.FIELDS || '').split(',').filter(Boolean);
for (const key of process.argv.slice(2)) {
  const e = idx[key]; if (!e) { console.log(`${key}: NOT FOUND`); continue; }
  const [domain, ...rest] = key.split(':'); const id = rest.join(':');
  const objs = JSON.parse(readFileSync(join(ROOT, e.file), 'utf8'));
  const match = objs.filter(o => domain === 'recipe' ? (o.result === id.split(':')[0] && ((o.id_suffix || '') === (id.split(':')[1] || ''))) : domain === 'uncraft' ? o.result === id : (o.id === id || (Array.isArray(o.id) && o.id.includes(id)) || o.abstract === id.replace(/^abstract:/, '')));
  for (const o of match) {
    const out = KEEP.length ? Object.fromEntries(Object.entries(o).filter(([k]) => KEEP.includes(k))) : o;
    console.log(`${key} (${e.file}):`, JSON.stringify(out));
  }
}
