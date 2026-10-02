// Installing, removing and running bionics, restated from Cataclysm: Dark Days Ahead 0.I `src/bionics.cpp`.
// CC BY-SA 3.0, see ../NOTICE.md. Pure functions over plain numbers; `c` is the `cdda` block of game-data/bionics.json
// unless a function says otherwise, and `rng()` is a uniform source in [0, 1).

const rngRange = (rng, [lo, hi]) => lo + Math.floor(rng() * (hi - lo + 1));
/** CDDA's `one_in(n)`: true for n <= 1, else with chance 1/n. */
const oneIn = (rng, n) => n <= 1 || Math.floor(rng() * n) === 0;

// ---- who is operating ----

/**
 * The surgeon's number, from intelligence and the three skills that count (in order of weight), for an autodoc or
 * for hands. After `Character::bionics_pl_skill` with `skill_level == -1`: int × 4 + first × 4 + second × 3 + third × 1.
 * `skills` is `{ firstaid, computer, electronics, mechanics }`, each the greater of practice and knowledge.
 */
export function surgerySkill({ intelligence, skills }, autodoc, c) {
  const w = c.skillWeights, order = autodoc ? w.autodoc : w.manual;
  let pl = (intelligence || 0) * w.intelligence;
  for (const [skill, weight] of Object.entries(order)) pl += (skills?.[skill] || 0) * weight;
  return Math.round(pl);
}

/** The same number shifted down to the range the chance curve wants. After `Character::bionics_adjusted_skill`
 * (the `assisted` effect is not modelled); `envBonus` is the operating furniture's surgery multiplier. */
export function adjustedSkill(plSkill, envBonus, c) {
  const adjusted = plSkill - Math.min(c.adjustedSkillCap, plSkill - plSkill * c.adjustedSkillKeep);
  return adjusted * (envBonus || 1);
}

/** Chance of success in whole percent. After `bionic_manip_cos`: 50% when the adjusted skill equals
 * `difficultyScale` × difficulty, falling fast below it and flattening above 80% well above it. */
export function successChance(adjustedSkill, difficulty) {
  const p = adjustedSkill / (4 * Math.max(1, difficulty));
  if (!(p > 0)) return 0;
  return Math.max(0, Math.min(100, Math.trunc(100 * p / (p + Math.sqrt(1 / p)))));
}

/** Removal is harder than installation by a fixed step. After `Character::uninstall_bionic`. */
export function uninstallDifficulty(difficulty, c) { return difficulty + c.uninstallExtraDifficulty; }

/** How long the operation takes, in minutes. After `Character::install_bionics` (`difficulty * 20_minutes`). */
export function operationMinutes(difficulty, c) { return difficulty * c.minutesPerDifficulty; }

/** The operation's die: the margin by which the chance beat the roll; success when it is above zero.
 * After `Character::install_bionics` (`chance - rng(0, 99)`) and `Character::uninstall_bionic` (`chance - rng(1, 100)`). */
export function operationRoll(chance, rng, uninstall, c) {
  return chance - rngRange(rng, uninstall ? c.uninstallRoll : c.installRoll);
}

// ---- when it goes wrong ----

/** How badly a failed operation went, 0..maxLevel: further from success and harder against less skill is worse.
 * After the `failure_level` of `Character::bionics_install_failure` / `bionics_uninstall_failure`. */
export function failureLevel(margin, difficulty, adjustedSkill, c) {
  const off = Math.abs(margin), skill = Math.max(1e-6, adjustedSkill);
  return Math.min(c.failure.maxLevel, Math.trunc(Math.sqrt(off * 4 * difficulty / skill)));
}

/**
 * What a failed installation does, by level. After `Character::bionics_install_failure` (a surgeon with medical
 * training, who caps the level at three, is not modelled): `pain` points; `faulty` (levels 2 and 3, where CDDA
 * installs a faulty bionic instead); `damage` per operated part (levels 4 and 5), each part then rolling
 * `criticalFailure`; `dropCbm` when the module comes back out.
 */
export function installFailure(level, rng, c) {
  const f = c.failure;
  if (level <= 0) return { level, pain: 0, faulty: false, damage: 0, critical: false, dropCbm: true };
  if (level === 1) return { level, pain: rngRange(rng, f.pain), faulty: false, damage: 0, critical: false, dropCbm: true };
  if (level <= 3) return { level, pain: 0, faulty: true, damage: 0, critical: false, dropCbm: false };
  return { level, pain: 0, faulty: false, damage: rngRange(rng, f.severeDamage), critical: true, dropCbm: true };
}

/** What a failed removal does, by level. After `Character::bionics_uninstall_failure`: pain at one, light damage to
 * the operated parts at two and three, severe damage with a critical roll at four and five. The bionic stays in. */
export function uninstallFailure(level, rng, c) {
  const f = c.failure;
  if (level <= 0) return { level, pain: 0, damage: 0, critical: false };
  if (level === 1) return { level, pain: rngRange(rng, f.pain), damage: 0, critical: false };
  if (level <= 3) return { level, pain: 0, damage: rngRange(rng, f.lightDamage), critical: false };
  return { level, pain: 0, damage: rngRange(rng, f.severeDamage), critical: true };
}

/** Whether a severely damaged part gives out entirely (its hit points set to nothing).
 * After `Character::roll_critical_bionics_failure`: `one_in(hp / 4)`. */
export function criticalFailure(partHp, rng, c) { return oneIn(rng, Math.trunc(partHp / c.failure.criticalDivisor)); }

// ---- power ----

/**
 * One tick of the metabolic power source: a kilocalorie becomes `joulesPerKcal` × efficiency of power, only while
 * the body holds more than `safeKcalShare` of its healthy reserve and the bank is not full. After
 * `Character::get_bionic_fuels` (the safety threshold) and `Character::burn_fuel` (the metabolism fuel).
 * -> `{ kj, kcal }` or null when nothing is burned.
 */
export function metabolicCharge({ kcal, healthyKcal, powerKj, capacityKj, efficiency }, c) {
  const m = c.metabolism;
  if (!(kcal - m.safeKcalShare * healthyKcal > 0)) return null;
  if (!(powerKj < capacityKj)) return null;
  return { kj: m.joulesPerKcal / 1000 * (efficiency || 0), kcal: 1 };
}

/** One tick of the sensory dulling bionic: the painkiller level climbs by one toward the pain felt, never past
 * `painkillerCap`, for the trigger cost. After the `bio_painkiller` branch of `Character::process_bionic`.
 * -> `{ dull: 1 }` to add and pay for, or null when there is nothing left to dull. */
export function painDulling({ painkiller, pain }, c) {
  const max = Math.min(c.painkillerCap, pain || 0);
  return painkiller < max ? { dull: 1 } : null;
}

/** One minute of the repair nanobots: a bleed eased for `kcalPerBleed`, and a point of a damaged part mended for
 * `kcalPerHp`, each only while the reserve holds it. After the `bio_nanobots` branch of `Character::process_bionic`.
 * -> `{ bleeds, heal }`: how many bleeding parts to ease and whether to heal one point this minute. */
export function nanobotWork({ kcal, bleedingParts, damagedParts }, c) {
  const n = c.nanobots;
  let left = kcal, bleeds = 0;
  for (let i = 0; i < bleedingParts; i++) { if (left < n.kcalPerBleed) break; left -= n.kcalPerBleed; bleeds++; }
  const heal = damagedParts > 0 && left >= n.kcalPerHp;
  return { bleeds, heal, kcal: kcal - left + (heal ? n.kcalPerHp : 0) };
}
