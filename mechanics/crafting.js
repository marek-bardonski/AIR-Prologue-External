// Crafting, taking apart, butchery, repair and handling: rules restated from Cataclysm: Dark Days Ahead 0.I.
// CC BY-SA 3.0, see ../NOTICE.md. Pure functions over plain numbers; `c` is the matching block of
// game-data/cdda-mechanics.json (or the table named at each function).

/**
 * The craft roll: where the crafter's skill sits, how wide the luck is and what it must beat.
 * After src/crafting.cpp `Character::recipe_success_roll_data` and `get_recipe_weighted_skill_average`.
 * `primaryLevel` is null for a recipe without a skill; `secondary` is [{ need, have }];
 * `penalties` lists the skill penalty of each proficiency the crafter lacks.
 * `failZ` is the standard score the chance of a setback is read at.
 */
export function craftRoll({ difficulty, primaryLevel, secondary = [], intelligence, penalties = [] }, c) {
  const weight = c.primaryWeight * Math.max(1, difficulty);
  const total = secondary.reduce((n, s) => n + s.need, 0);
  let center = (weight * (primaryLevel == null ? c.noSkillLevel : primaryLevel) + secondary.reduce((n, s) => n + s.have * s.need, 0)) / (weight + total);
  center += intelligence / c.intelligenceDivisor;
  for (const penalty of penalties) center -= penalty;
  const hard = (c.primaryWeight * difficulty * difficulty + secondary.reduce((n, s) => n + s.need * s.need, 0)) / Math.max(1, c.primaryWeight * difficulty + total);
  let sd = c.stddev;
  if (hard > center) sd += (hard - center) / c.underDivisor;
  else sd -= Math.min((center - hard) / c.overDivisor, c.stddev - c.minStddev);
  sd = Math.max(c.minStddev, sd);
  const threshold = hard + c.difficultyOffset;
  return { center, sd, threshold, failZ: (1 + threshold - center) / sd };
}

/** How far a roll clears the bar; below 1 the work meets a setback. `normal(center, sd)` draws the roll. */
export function craftMargin(roll, normal) {
  return Math.max(0, normal(roll.center, roll.sd) - roll.threshold);
}

/** Where along a job of `minutes` the next setback falls, on the source's fixed-point progress scale. */
export function failurePoint(margin, minutes, c) {
  return Math.trunc(margin * c.progressScale) / c.progressScale * minutes;
}

/**
 * What a setback costs. After src/crafting.cpp `item::handle_craft_failure`.
 * Draws `normal` first, then `uniform`, in that order.
 */
export function craftFailure(roll, c, normal, uniform) {
  const success = Math.max(0, normal(roll.center, roll.sd * c.failureStddevMultiplier));
  const exponential = c.minProgressLoss - (c.meanProgressLoss - c.minProgressLoss) * Math.log(Math.max(1e-12, 1 - uniform()));
  return { protect: Math.min(1, success), progressLoss: Math.max(0, Math.min(1, exponential * (1 - success))), maxComponentLoss: c.maxComponentLoss };
}

/** The minutes of progress a setback of this severity undoes, on the source's fixed-point progress counter. After src/crafting.cpp `item::handle_craft_failure`. */
export function progressLost(progress, minutes, severity, c) {
  const counter = Math.trunc(progress / minutes * c.progressScale);
  return Math.trunc(counter * severity.progressLoss) / c.progressScale * minutes;
}

/**
 * Which components a setback destroys: an equal choice of component type first, then one entry of that type.
 * After src/crafting.cpp `handle_craft_failure` and src/item_components.cpp. `entries` is [{ id, ... }].
 */
export function destroyedComponents(entries, severity, rng) {
  const groups = new Map();
  for (const e of entries) { if (!groups.has(e.id)) groups.set(e.id, []); groups.get(e.id).push(e); }
  const lost = [], trials = Math.max(1, Math.floor(entries.length * severity.maxComponentLoss));
  for (let i = 0; i < trials && groups.size; i++) {
    if (rng() < severity.protect) continue;
    const ids = [...groups.keys()].sort(), id = ids[Math.min(ids.length - 1, Math.floor(rng() * ids.length))], group = groups.get(id);
    lost.push(group.splice(Math.min(group.length - 1, Math.floor(rng() * group.length)), 1)[0]);
    if (!group.length) groups.delete(id);
  }
  return lost;
}

/** The level past which a recipe of this difficulty teaches nothing. After src/recipe.cpp `recipe::get_skill_cap`. */
export function skillCap(difficulty, c) {
  return Math.floor(difficulty * c.skillCapMultiplier);
}

/**
 * The chance one crafting commits the recipe to memory. After src/crafting.cpp `Character::complete_craft`
 * (the `time_to_learn` roll against `recipe::time_to_craft_moves`). `minutes` is the recipe's own time,
 * `timeMultiplier` what missing proficiencies add to it.
 */
export function memorizationChance({ difficulty, skillLevel, intelligence, minutes, timeMultiplier = 1 }, c) {
  const learnTime = c.memorizationFactor * Math.pow(difficulty, c.memorizationExponent) / (Math.max(1, skillLevel) * intelligence);
  return learnTime <= 0 ? 1 : Math.min(1, minutes * c.movesPerMinute * timeMultiplier / learnTime);
}

/**
 * Whether one piece comes out whole when a thing is taken apart. After src/crafting.cpp
 * `Character::complete_disassemble`. `c` is the `disassembly` block. Draws the skill dice, then the
 * difficulty dice, then one more for the wear of the thing.
 */
export function disassemblyRecovers({ skillLevel, intelligence, difficulty, damage }, c, rng) {
  const dice = (n, s) => { let out = 0; for (let i = 0; i < n; i++) out += 1 + Math.floor(rng() * s); return out; };
  const skill = dice(c.baseDice + Math.round(skillLevel * c.skillDiceMultiplier), c.baseSides + intelligence);
  const hard = dice(difficulty, c.difficultySides);
  return (!difficulty || skill > hard) && rng() < Math.pow(c.damageRecovery, Math.max(0, Math.min(4, damage || 0)));
}

// ---- butchery: `c` is game-data/animal-loot.json `butchery` ----

/** Seconds a carcass of this size takes with a tool of this quality. After src/butchery.cpp `butcher_time_to_cut`. */
export function butcherySeconds(size, quality, c) {
  return (c.baseSeconds[size] || c.baseSeconds.medium) * Math.max(c.toolMinimumTimePercent, c.baseToolPercent - quality) / 100;
}

const unit = x => Math.max(0, Math.min(1, x));
/** The share of a carcass's mass a butcher of this skill gets. After src/butchery.cpp `butchery_drops_harvest`. */
export function butcheryYieldFactor({ skill, quality, dexterity }, c) {
  return c.skillYieldWeight * unit((skill + quality) / c.skillYieldDivisor) + c.toolYieldWeight * unit((quality + c.toolYieldOffset) / c.toolYieldDivisor) + c.dexYieldWeight * unit(dexterity / c.dexYieldDivisor);
}

/** One butchery roll. After src/butchery.cpp `roll_butchery_dissect`. Draws two or three numbers from `rng`. */
export function butcheryRoll({ skill, quality, dexterity }, c, rng) {
  return Math.round(rng() * (skill + quality - c.skillOffset) + rng() * (dexterity - c.dexOffset) / c.dexDivisor + (quality < 0 ? -rng() * -quality / c.negativeToolDivisor : Math.min(quality, c.toolCap)));
}

/**
 * How much of one harvest entry a roll yields. After src/butchery.cpp `butchery_drops_harvest`.
 * `entry` is the harvest row ({ type, mass, baseNum, scaleNum, maxNum }); `unitWeight` the weight of one of the
 * thing it gives; `damageYield` the table's factor for a carcass this damaged. Draws from `rng` for a counted entry.
 */
export function butcheryAmount({ entry, roll, monsterWeight, quick, yieldFactor, unitWeight, damageYield = 1 }, c, rng) {
  let amount;
  if (entry.mass) amount = entry.mass * monsterWeight;
  else { const lo = entry.baseNum[0] + roll * entry.scaleNum[0], hi = entry.baseNum[1] + roll * entry.scaleNum[1]; amount = Math.min(entry.maxNum ?? Infinity, Math.max(entry.baseNum[0], Math.round(lo + rng() * (hi - lo)))); }
  if (['flesh', 'offal'].includes(entry.type)) amount /= c.fleshProficiencyDivisor;
  if (entry.type === 'skin') amount /= c.skinProficiencyDivisor;
  if (quick) amount /= c.quickDivisors[entry.type];
  amount *= damageYield;
  if (entry.mass) amount = Math.ceil(amount * yieldFactor / Math.max(1, unitWeight));
  else amount = Math.floor(amount);
  return amount;
}

// ---- repair: `c` is game-data/durability.json `repair` ----

/** The chance a repair attempt mends, and the chance it harms. After src/iuse_actor.cpp `repair_item_actor::repair_chance`. */
export function repairChances({ skillLevel, difficulty, toolQuality = 0 }, c) {
  return {
    chance: Math.min(1, Math.max(0, (c.baseChance + c.skillChance * skillLevel - c.difficultyChance * difficulty + toolQuality / c.qualityDivisor) / c.chanceDivisor)),
    failure: Math.max(0, c.failureBase + (difficulty - skillLevel) * c.failurePerLevel),
  };
}

// ---- fire: `c` is game-data/firestarters.json ----

/** Minutes one attempt to make fire takes. After src/iuse_actor.cpp `firestarter_actor::use` (the survival skill factor). */
export function firestarterMinutes({ moves, skillLevel }, c) {
  const sk = c.skill, level = sk ? Math.min(sk.maxLevels ?? 0, skillLevel) : 0;
  return moves * (sk ? Math.pow(sk.factor ?? 1, level) : 1) / (c.movesPerMinute || 6000);
}

// ---- handling: `c` is the `handling` block ----

/** Move points to get a thing of this volume into the hands. After src/character.cpp `Character::item_handling_cost`. */
export function handlingCost({ volumeMl, armEncumbrance }, c) {
  const base = volumeMl <= (c.smallVolumeMl ?? 0) ? (c.smallBaseCost ?? c.baseCost ?? 100) : (c.baseCost ?? 100);
  return base + Math.min(c.maxBulkCost ?? 200, volumeMl / (c.volumeDivisor ?? 20)) + armEncumbrance;
}
