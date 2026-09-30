#!/usr/bin/env node
// Dev helper: node scripts/find.mjs <domain> <regex> [--name]  -> lists matching index keys with names.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const all = JSON.parse(readFileSync(join(ROOT, 'index/ids.json'), 'utf8'));
const idx = all[process.env.SECTION || 'cdda'];
const [domain, pattern, ...flags] = process.argv.slice(2);
const re = new RegExp(pattern, 'i');
const byName = flags.includes('--name');
const cache = new Map();
function load(file) { if (!cache.has(file)) cache.set(file, JSON.parse(readFileSync(join(ROOT, file), 'utf8'))); return cache.get(file); }
function nameOf(o) { const n = o.name; if (!n) return ''; if (typeof n === 'string') return n; return n.str || n.str_sp || ''; }
let count = 0;
for (const [key, e] of Object.entries(idx)) {
  if (!key.startsWith(domain + ':')) continue;
  const id = key.slice(domain.length + 1);
  if (byName) {
    const objs = load(e.file); const o = objs.find(x => x.id === id || (Array.isArray(x.id) && x.id.includes(id)) || x.abstract === id.replace(/^abstract:/, '') || (domain === 'recipe' && x.result === id.split(':')[0]));
    if (!o || !re.test(nameOf(o))) continue;
    console.log(`${key}\t${nameOf(o)}\t${e.file}`); count++;
  } else if (re.test(id)) {
    const objs = load(e.file); const o = objs.find(x => x.id === id || (Array.isArray(x.id) && x.id.includes(id)) || x.abstract === id.replace(/^abstract:/, ''));
    console.log(`${key}\t${o ? nameOf(o) : ''}\t${e.file}`); count++;
  }
  if (count >= 400) { console.log('... (truncated)'); break; }
}
