// The body: digestion, hunger, thirst, sleep, pain and healing, restated from Cataclysm: Dark Days Ahead 0.I for a
// baseline unmutated human. CC BY-SA 3.0, see ../NOTICE.md. Pure functions over plain numbers and plain state
// objects; `c` is game-data/sustenance.json unless a function says otherwise.

/** Piecewise-linear reading of a [[x, y], ...] table, flat beyond its ends. */
export function interpolate(rows, x) {
  if (x <= rows[0][0]) return rows[0][1];
  for (let i = 1; i < rows.length; i++) { const [a, b] = rows[i - 1], [c, d] = rows[i]; if (x <= c) return b + (d - b) * (x - a) / (c - a); }
  return rows.at(-1)[1];
}

// ---- reserves ----

/** The stored energy of a healthy body of this height. After src/character.cpp `Character::get_healthy_kcal`. */
export function healthyKcal(heightCm, c) {
  return Math.floor(c.kcalPerKg * c.healthyFatBmi * Math.pow(heightCm / 100, 2));
}

/** The fat part of the body-mass index the stored energy stands for. After src/character.cpp `Character::get_bmi_fat`. */
export function fatBmi(kcal, healthy, c) {
  return kcal / healthy * c.healthyFatBmi;
}

/** Speed lost to an underweight body, in percent. After src/character.cpp `Character::kcal_speed_penalty`. */
export function starvationSpeed(kcal, healthy, c) {
  return kcal / healthy > .95 ? 0 : Math.round(interpolate(c.starvationSpeed, fatBmi(kcal, healthy, c)));
}

/** Resting energy use per day. After src/character.cpp `Character::base_bmr` and `Character::get_weight`. */
export function baseBmr({ fat, strength, heightCm, ageYears }, c) {
  const lean = c.leanBmiBase + strength - Math.floor(Math.max(0, 1 - fat / c.normalFatBmi) * strength), weight = (lean + fat) * Math.pow(heightCm / 100, 2), b = c.bmr;
  return Math.max(1, Math.trunc(weight * b.weightFactor) + Math.trunc(heightCm * b.heightFactor) - ageYears * b.ageFactor + b.constant);
}

/** How fast hunger builds. After src/consumption.cpp `Character::metabolic_rate_base` and `Character::get_starvation`. */
export function metabolicRate({ kcal, healthy, hunger, speed, sleeping }, c) {
  const ratio = kcal / healthy, starvation = ratio < .95 ? Math.round(interpolate(c.legacyStarvation, ratio)) : 0;
  return interpolate(c.metabolicHunger, ((hunger || 0) + starvation) / Math.max(.5, speed)) * (sleeping ? c.sleepNeedMultiplier : 1);
}

// ---- stomach ----

/**
 * The hunger effect a stomach this full gives, `sinceAte` minutes after the last meal.
 * After src/character_body.cpp `Character::update_stomach`. `deficit` is true for a body below its normal weight;
 * `fullness` is contents over capacity.
 */
export function hungerEffect({ fullness, deficit, sinceAte, fat }, c) {
  const f = fullness;
  if ((deficit && f >= 1) || f >= 5 / 6) return 'hunger_engorged';
  if ((deficit && f >= 11 / 20) || f >= 3 / 4) return 'hunger_full';
  if (deficit) {
    if (sinceAte < 15 && f > .5) return 'hunger_satisfied';
    if (sinceAte < 15) return 'hunger_hungry';
    if (sinceAte < 180) return 'hunger_very_hungry';
    if (fat < c.underweightFatBmi) return 'hunger_near_starving';
    if (fat < c.emaciatedFatBmi) return 'hunger_starving';
    return 'hunger_famished';
  }
  if (sinceAte < 180 && f >= 3 / 8) return 'hunger_satisfied';
  if (sinceAte < 180 || f > 0) return 'hunger_blank';
  return fat > c.healthyFatBmi ? 'hunger_hungry' : 'hunger_very_hungry';
}

/**
 * The hunger value a stomach this full pins, or the value unchanged. After src/character_body.cpp
 * `Character::update_stomach` (the hunger bounds).
 */
export function settledHunger({ hunger, fullness, sinceAte, gutKcal, kcal, healthy }) {
  const f = fullness, old = sinceAte > 10;
  if (f >= 1 && hunger > -61) return -61;
  if (f >= (old ? .5 : .75) && hunger > -21) return -21;
  if (f >= (old ? .125 : .5) && hunger > -1) return -1;
  if (old && f === 0) {
    if (gutKcal === 0 && kcal < healthy && hunger < 300) return 300;
    if (hunger < 100 && ((gutKcal === 0 && kcal >= healthy) || kcal < healthy)) return 100;
    if (hunger < 0) return 0;
    return hunger;
  }
  if (!old && f > 0 && kcal / healthy > .95) return 0;
  return hunger;
}

/**
 * One digestion tick over `{ stomach, gut, needs }` (mutated): water and food pass from the stomach to the gut,
 * the gut feeds the reserve, the body burns its share, and hunger and thirst build. After src/stomach.cpp
 * `stomach_contents::digest` and `get_digest_rates`, and src/character.cpp `Character::update_needs`.
 * `bmr` is the day's energy use at the present activity; `metabolic` from `metabolicRate`; `foodTick` is true on
 * the slower tick that moves food; `thirstMultiplier` scales thirst for the weather. `roll` settles the fractions:
 * hunger first, then thirst. Returns the energy burned.
 */
export function digestTick({ stomach, gut, needs }, { bmr, metabolic, foodTick, sleeping, thirstMultiplier = 1 }, c, roll) {
  const remainder = v => Math.floor(v) + (roll() < v - Math.floor(v) ? 1 : 0);
  const water = Math.min(stomach.water, c.waterPerTickMl); stomach.water -= water;
  gut.water = Math.max(0, gut.water - c.waterPerTickMl);
  if (foodTick) {
    const absorbed = Math.min(gut.kcal, Math.max(Math.floor(bmr * c.gutMinBmrFraction * metabolic * 1000) / 1000, Math.round(Math.trunc(gut.kcal) * c.gutFraction * metabolic)));
    const passed = Math.min(stomach.kcal, Math.max(c.stomachMinKcal, Math.round(Math.trunc(stomach.kcal) * c.stomachFraction)));
    gut.kcal -= absorbed; needs.kcal += Math.trunc(absorbed); stomach.kcal -= passed; gut.kcal += passed;
    const solids = Math.min(stomach.solids, c.stomachCapacityMl * c.stomachFraction); stomach.solids -= solids; gut.solids = Math.max(0, gut.solids - c.gutSolidsMl) + solids;
  }
  gut.water += water;
  const spentKcal = Math.floor(bmr * c.tickMinutes / 1440 * 1000) / 1000; needs.kcal -= spentKcal;
  needs.hunger = (needs.hunger || 0) + remainder(metabolic);
  needs.thirst += remainder(c.thirstPerTick * (sleeping ? c.sleepNeedMultiplier : 1) * thirstMultiplier);
  return spentKcal;
}

/**
 * What thirst, an underweight body and food poisoning take from each stat. After src/character.cpp
 * `Character::reset_stats` / src/avatar.cpp `avatar::reset_stats`.
 */
export function needStatPenalties({ thirst, fat, strength, poisoned }, c) {
  const dry = Math.max(0, Math.trunc(thirst / c.thirstStatDivisor));
  const starving = fat < c.normalFatBmi, mods = c.effects.foodpoison.base_mods;
  return {
    str: dry + (starving ? Math.floor((1 - fat / c.normalFatBmi) * strength) : 0) + (poisoned ? -mods.str_mod[0] : 0),
    dex: dry + (starving ? Math.floor((c.normalFatBmi - fat) * c.starvationDexIntFactor) : 0) + (poisoned ? -mods.dex_mod[0] : 0),
    int: dry + (starving ? Math.floor((c.normalFatBmi - fat) * c.starvationDexIntFactor) : 0),
    per: dry + (poisoned ? -mods.per_mod[0] : 0),
  };
}

/** Speed lost to thirst, in percent, read off `[thirst, penalty]` rows. After src/character.cpp `Character::thirst_speed_penalty`. */
export function thirstSpeedPenalty(value, rows) {
  if (value <= rows[0][0]) return 0;
  for (let i = 1; i < rows.length; i++) { const [x, y] = rows[i], [a, b] = rows[i - 1]; if (value <= x) return Math.trunc(b + (y - b) * (value - a) / (x - a)); }
  return rows.at(-1)[1];
}

// ---- sleep: `c` is game-data/sustenance.json `sleep` ----

/**
 * Whether a tired or sleep-starved mind drops off for a moment. After src/character.cpp
 * `Character::update_needs` / `check_needs_extremes`. Draws from `roll` only for the cases that apply.
 */
export function microsleeps({ fatigue, debt, intelligence }, c, roll) {
  const row = c.microsleep.thresholds.find(([at]) => fatigue >= at);
  const tired = row && roll() < 1 / (row[1] + intelligence);
  const deprived = debt >= c.debtThreshold && roll() < 1 / (Math.trunc(debt / c.debtMax * c.microsleep.debtChanceFactor) + intelligence);
  return !!(tired || deprived);
}

/** Tiredness slept off per tick, `asleepTicks` whole ticks into the sleep. After src/character.cpp `Character::calc_sleep_recovery_rate`. */
export function sleepRecoveryRate({ asleepTicks, pain }, c) {
  const intensity = Math.min(c.maxIntensity, 1 + Math.max(0, asleepTicks));
  return Math.max(0, 1 + 1 / (c.maxIntensity - intensity + 1) - pain / c.painDivisor);
}

// ---- pain: `c` is game-data/cdda-mechanics.json `pain` ----

/** What pain takes from each stat and from speed. After src/character.cpp `Character::get_pain_penalty`. `stats` is { str, dex, int, per }. */
export function painPenalties(pain, stats, c) {
  const out = { str: 0, dex: 0, int: 0, per: 0, speed: 0 };
  if (pain <= c.threshold) return out;
  for (const [id, rate] of Object.entries(c.statRates)) { const stat = stats?.[id] ?? 8; out[id] = stat > 2 ? Math.max(1, Math.min(stat - 1, Math.floor(stat * pain * rate))) : Math.max(0, stat - 1); }
  out.speed = Math.min(c.maxSpeedPenalty, Math.floor(Math.pow(pain, c.speedExponent)));
  return out;
}

/** Pain after `minutes` of fading on its own: faster the more there is. After src/character.cpp `Character::regen`. */
export function painAfter(pain, minutes, c) {
  return Math.max(0, pain - (c.decayBase + pain / c.decayDivisor) * minutes / c.decayMinutes);
}

// ---- healing ----

/**
 * Minutes of mending a splinted bone gains in `minutes`. After src/suffer.cpp `Character::mend`.
 * `m` is game-data/cdda-mechanics.json `mending`; `c` game-data/sustenance.json.
 */
export function mendingProgress({ minutes, kcal, healthy, thirst, asleep, resting, fatigue }, m, c) {
  const nourishment = Math.sqrt(Math.max(0, kcal / healthy)) * (1 - Math.max(0, Math.min(1, (thirst - c.mendingThirstStart) / c.mendingThirstRange)));
  return minutes * nourishment * (asleep ? m.sleepMultiplier : resting ? m.restMultiplier : (fatigue >= 80 ? m.tiredMultiplier : 1));
}

/**
 * What a dressing does in these hands. After src/iuse_actor.cpp `heal_actor::get_bandaged_level`,
 * `get_stopbleed_level` and the proficiency handling time. `healing` is the item's heal action
 * ({ bandages_power, bandages_scaling, bleed, move_cost }); `c` is game-data/cdda-mechanics.json `bandaging`.
 */
export function dressing(healing, { skill, basicWoundCare, expertWoundCare }, c) {
  const a = healing || {}, bonus = (basicWoundCare ? 1 : 0) + (expertWoundCare ? 2 : 0);
  return {
    quality: Math.max(1, Math.min(c.maxIntensity, Math.round((a.bandages_power || 0) + (a.bandages_scaling ?? c.defaultScaling * (a.bandages_power || 0)) * (skill + bonus)))),
    bleed: Math.round((a.bleed || 0) * (skill / 2 + bonus)),
    minutes: Math.max(.01, (a.move_cost || c.movesPerMinute) / c.movesPerMinute / (basicWoundCare ? 2 : 1) / (expertWoundCare ? 2 : 1)),
  };
}

/** Hit points per hour a dressing of this quality adds on a body part. After data/json/effects.json `bandaged` and src/character.cpp `Character::healing_rate_medicine`. */
export function bandageHealing(quality, part, c) {
  const q = Math.min(c.maxEffectiveIntensity, quality || 1);
  return c.healingPerDayPerIntensity * q / 24 * (part === 'head' ? c.headMultiplier : part === 'torso' ? c.torsoMultiplier : 1);
}
