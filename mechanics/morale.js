// Mood: rules restated from Cataclysm: Dark Days Ahead 0.I.
// CC BY-SA 3.0, see ../NOTICE.md. Pure functions over plain numbers; `c` is game-data/practice.json `morale`.

const logistic = x => 1 / (1 + Math.exp(-x));

/**
 * What is left of a mood `age` minutes after it began: whole until `decayStart`, gone at `duration`, and an
 * S-curve between. After src/morale.cpp `player_morale::morale_point::get_net_bonus` and src/cata_utility.cpp
 * `logarithmic_range`.
 */
export function decayedBonus({ bonus, age, decayStart, duration }, c) {
  if (age >= duration) return 0;
  if (age <= decayStart) return bonus;
  const k = c.decayCutoff;
  const factor = (logistic(k - 2 * k * (age - decayStart) / (duration - decayStart)) - logistic(-k)) / (logistic(k) - logistic(-k));
  return Math.trunc(bonus * factor);
}

/** The mood all the entries add up to: good and bad each by the root of their squares. After src/morale.cpp `player_morale::get_level`. */
export function level(values) {
  let positive = 0, negative = 0;
  for (const value of values) { if (value > 0) positive += value ** 2; else negative += value ** 2; }
  return Math.trunc(Math.sqrt(positive) - Math.sqrt(negative));
}

/**
 * How much a food is enjoyed after the same thing was eaten `eatenRecently` times: the monotony rule.
 * After src/consumption.cpp `Character::fun_for`. `ownPenalty` is the food's own monotony penalty (null for the
 * default; junk food has none).
 */
export function foodFun({ fun, eatenRecently, ownPenalty = null, junk = false, negativeMonotonyOk = false }, c) {
  if (fun > 0 || negativeMonotonyOk) {
    fun -= eatenRecently * (ownPenalty ?? (junk ? 0 : c.monotonyPenalty));
    if (!negativeMonotonyOk) fun = Math.max(0, fun);
  }
  return Math.trunc(fun);
}

/** A food's mood after another helping, stacked on what the last one left. After src/morale.cpp `player_morale::morale_point::add`. */
export function stackedFoodBonus(previous, fun, c) {
  return Math.sign(fun) * Math.min(Math.abs(fun) * (fun > 0 ? c.positiveCap : c.negativeCap), Math.trunc(Math.hypot(previous, fun)));
}
