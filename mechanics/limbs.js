// Limb scores: what encumbrance does to the body's work, restated from Cataclysm: Dark Days Ahead 0.I. CC BY-SA 3.0,
// see ../NOTICE.md. Pure functions over plain numbers; `c` is the `limbs` block of game-data/cdda-mechanics.json.
// A part's encumbrance lowers each score it carries; a score summed over the body becomes a modifier of the work
// that reads it (melee and throw time, the melee roll, dodging, moving, reloading and handling, aiming).

/** One part's share of a score after its encumbrance. After src/bodypart.cpp `bodypart::encumb_adjusted_limb_value`:
 * nothing at the part's limit, otherwise the encumbrance over the threshold takes a falling share off. */
export function encumbered(value, enc, c) {
  const e = c.encumbrance;
  if (enc >= e.limit) return 0;
  return value * e.constant / (e.constant + Math.max(0, enc - e.threshold) / e.divisor);
}

/** A score over the whole body, `parts` being `{ part: encumbrance }`. After src/character.cpp
 * `Character::get_limb_score`: the sum of each part's encumbered share. */
export function score(id, parts, c) {
  let sum = 0;
  for (const [part, value] of Object.entries(c.scores[id])) sum += encumbered(value, parts[part] || 0, c);
  return sum;
}

/** A score as a cost multiplier: `1 / score`, capped. After src/character_modifier.cpp `character_modifier::modifier`
 * for the modifiers with a nominator of one (melee and thrown move cost, move cost, reload cost). */
export function costFactor(s, max) { return s > 1e-6 ? Math.min(max, 1 / s) : max; }

/** What a melee or thrown attack costs in time against a bare body. After data/json/character_modifiers.json
 * `melee_thrown_move_balance_mod`. */
export function meleeMoveFactor(parts, c) { return costFactor(score('balance', parts, c), c.modifiers.meleeMoveMax); }

/** What the melee to-hit roll keeps. After `melee_attack_roll_mod`: the balance score, never under its minimum. */
export function meleeRollFactor(parts, c) { return Math.max(c.modifiers.meleeRollMin, score('balance', parts, c)); }

/** What dodging keeps. After `limb_dodge_mod`: balance, footing and the legs' speed multiplied, balance weighted. */
export function dodgeFactor(parts, c) {
  return Math.max(0, Math.pow(score('balance', parts, c), c.modifiers.dodgeBalanceWeight) * score('move_speed', parts, c) * score('footing', parts, c));
}

/** What a step costs in time against a bare body. After src/character_modifier.cpp `limb_run_cost_modifier`: the
 * footing modifier and twice the legs' speed modifier, averaged. */
export function moveFactor(parts, c) {
  const m = c.modifiers.moveMax;
  return (costFactor(score('footing', parts, c), m) + 2 * costFactor(score('move_speed', parts, c), m)) / 3;
}

/** What a reload, a draw or a reach for a thing costs against bare hands. After `reloading_move_mod`. */
export function manipFactor(parts, c) { return costFactor(score('manip', parts, c), c.modifiers.manipMax); }

/** What aiming a gun or a bow costs against a bare body. After `aim_speed_mod`: grip, manipulation and lift added
 * with their weights, held within its bounds, as a cost. */
export function aimFactor(parts, c) {
  const w = c.modifiers.aimWeights, speed = w.grip * score('grip', parts, c) + w.manip * score('manip', parts, c) + w.lift * score('lift', parts, c);
  return 1 / Math.min(c.modifiers.aimMax, Math.max(c.modifiers.aimMin, speed));
}
