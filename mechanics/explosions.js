// Explosions, restated from Cataclysm: Dark Days Ahead 0.I `src/explosion.cpp` (explosion_handler::_make_explosion,
// do_blast, shrapnel, shrapnel_calc, gurney_spherical, mass_to_area, ballistic_damage, flashbang, explosion_data)
// and `src/iuse.cpp` (iuse::grenade_inc_act, iuse::molotov_lit). CC BY-SA 3.0, see ../NOTICE.md and README.md.
//
// Pure functions over plain numbers. `c` is the `cdda` block of game-data/explosives.json (the constants the C++
// hard-codes); `rng()` is a uniform random source in [0, 1). Distances are CDDA tiles. Nothing here knows the
// game's state: the game decides where everything stands and what the numbers do to its own creatures.

const num = (v, d) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
const rngBetween = (rng, lo, hi) => lo + (hi - lo) * rng();
const rngInt = (rng, lo, hi) => Math.floor(rngBetween(rng, lo, hi + 1));

/** Blast power as do_blast sees it: _make_explosion divides the stated power by `powerDivisor` (15). */
export function blastPower(power, c = {}) { return Math.max(0, num(power, 0)) / num(c.powerDivisor, 15); }

/** Force of the blast `distance` tiles out: power × distance_factor^distance, nothing under `minForce` (1). */
export function blastForce(power, distanceFactor, distance, c = {}) {
  const p = blastPower(power, c), f = num(distanceFactor, 0.75);
  if (p <= 0 || f <= 0 || f >= 1) return 0;
  const force = p * Math.pow(f, Math.max(0, distance));
  return force < num(c.minForce, 1) ? 0 : force;
}

/** How far the blast still matters: the last whole tile at which the force stays at or over `minForce`. */
export function blastReach(power, distanceFactor, c = {}) {
  let d = 0;
  while (d < 64 && blastForce(power, distanceFactor, d + 1, c) > 0) d++;
  return blastForce(power, distanceFactor, 0, c) > 0 ? d : -1;
}

/** What the blast does to a monster: max(force − bash armour / 2, 0), then a roll of two to three times that. */
export function monsterBlastDamage(force, bashArmor, rng, c = {}) {
  const dmg = Math.max(0, force - num(bashArmor, 0) / num(c.monster?.armorDivisor, 2));
  if (dmg <= 0) return 0;
  return rngBetween(rng, dmg * num(c.monster?.lowMul, 2), dmg * num(c.monster?.highMul, 3));
}

/**
 * What the blast does to a person, part by part (do_blast's blast_parts): every part is hit for a whole-number roll
 * between force × low and force × high, as crushing damage against armour counted at `armorMul`.
 * -> [{ part, raw, armorMul }]
 */
export function characterBlastDamage(force, rng, c = {}) {
  const parts = c.character?.parts || [];
  return parts.map(p => ({ part: p.part, raw: force > 0 ? rngInt(rng, force * num(p.low, 2), force * num(p.high, 3)) : 0, armorMul: num(p.armorMul, 0.5) }));
}

/** Fire left on a tile by a burning blast: intensity 0..3 from the force (do_blast with `fire`). */
export function fireIntensity(force, rng, c = {}) {
  const f = c.fire || {};
  if (!(force > 0)) return 0;
  let intensity = (force > num(f.twoAbove, 50) ? 1 : 0) + (force > num(f.threeAbove, 100) ? 1 : 0);
  if (force > num(f.oneAbove, 10) || rng() < force / num(f.oneAbove, 10)) intensity++;
  return intensity;
}

/** How loud it is: power × 10 (× 2 for a burning blast), never over `maxNoise`. */
export function noise(power, fire, maxNoise, c = {}) {
  const n = num(power, 0) * (fire ? num(c.noise?.fireMul, 2) : num(c.noise?.plainMul, 10));
  const cap = num(maxNoise, Infinity);
  return Math.max(0, Math.min(n, cap));
}

/** explosion_data::expected_range: tiles until the power falls to `ratio` of itself (the decay runs at factor/1.1). */
export function expectedRange(power, distanceFactor, ratio, c = {}) {
  const f = num(distanceFactor, 0.75);
  if (!(power > 0) || f >= 1 || f <= 0 || !(ratio > 0)) return 0;
  return Math.log(ratio) / Math.log(f / num(c.rangeDecay, 1.1));
}
/** explosion_data::power_at_range. */
export function powerAtRange(power, distanceFactor, distance, c = {}) {
  const f = num(distanceFactor, 0.75);
  if (!(power > 0) || f >= 1 || f <= 0) return 0;
  return power * Math.pow(f / num(c.rangeDecay, 1.1), distance);
}
/** explosion_data::safe_range: the range at which the power is 1/(2 power) of itself, plus one. */
export function safeRange(power, distanceFactor, c = {}) {
  if (!(power > 0)) return 0;
  return Math.floor(expectedRange(power, distanceFactor, 1 / power / 2, c)) + 1;
}

// ---- shrapnel ----

/** Fragment speed from the Gurney equation for a sphere: ((casing / charge) + 3/5)^-1/2 × the typical constant. */
export function gurneySpherical(charge, casingMass, c = {}) {
  if (!(charge > 0) || !(casingMass > 0)) return 0;
  return Math.pow(casingMass / charge + 3 / 5, -0.5) * num(c.shrapnel?.gurneyConstant, 2700);
}
/** Cross-section of a steel sphere of this mass, in cm² (mass_to_area). */
export function fragmentArea(mass, c = {}) {
  const volume = (num(mass, 0) / 1000) / num(c.shrapnel?.steelDensity, 7.85);
  const radius = Math.cbrt((volume * 3) / (4 * Math.PI));
  return radius * radius * Math.PI;
}
/** How many fragments the casing breaks into. */
export function fragmentCount(casingMass, fragmentMass) { return fragmentMass > 0 ? Math.floor(num(casingMass, 0) / fragmentMass) : 0; }
/** Fragment speed after `distance` tiles of air (shrapnel_calc with nothing in the way). */
export function fragmentVelocityAt(v0, fragmentMass, distance, c = {}) {
  if (!(fragmentMass > 0)) return 0;
  const cd = num(c.shrapnel?.dragCoefficient, 1.5);
  return v0 * Math.exp(-(cd * fragmentArea(fragmentMass, c) * Math.max(0, distance)) / (2 * fragmentMass));
}
/** Fragments per tile `distance` tiles out: the count thinned by the square of the distance (never under a tile). */
export function fragmentDensityAt(count, distance) { const d = Math.max(1, distance); return count / (d * d); }
/** Damage of one fragment: 4 × √(v² × mass / 2000) (ballistic_damage), a whole number. */
export function ballisticDamage(velocity, mass, c = {}) {
  return Math.floor(num(c.shrapnel?.damageScale, 4) * Math.sqrt((velocity * velocity * num(mass, 0)) / num(c.shrapnel?.damageDivisor, 2000)));
}
/** A Poisson draw with mean `mean` (std::poisson_distribution), by Knuth; bounded so a dense cloud cannot loop forever. */
export function poisson(mean, rng, limit = 1000) {
  if (!(mean > 0)) return 0;
  if (mean > 50) { // normal approximation for a dense cloud
    const u = Math.max(1e-12, rng()), v = rng();
    return Math.max(0, Math.min(limit, Math.round(mean + Math.sqrt(mean) * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v))));
  }
  const L = Math.exp(-mean);
  let k = 0, p = 1;
  do { k++; p *= rng(); } while (p > L && k < limit);
  return k - 1;
}
/**
 * The shrapnel cloud at `distance` tiles: the fragments' speed, how many are flying per tile, what each is worth,
 * and whether the cloud still counts (shrapnel_check: over `minEffectiveVelocity` and `minFragmentDensity`).
 */
export function shrapnelAt(power, casingMass, fragmentMass, distance, c = {}) {
  const count = fragmentCount(casingMass, fragmentMass);
  if (!count) return { count: 0, velocity: 0, density: 0, damage: 0, effective: false };
  const v0 = gurneySpherical(power, casingMass, c);
  const velocity = fragmentVelocityAt(v0, fragmentMass, distance, c);
  const density = fragmentDensityAt(count, distance);
  const damage = ballisticDamage(velocity, fragmentMass, c);
  const effective = velocity > num(c.shrapnel?.minEffectiveVelocity, 70) && density > num(c.shrapnel?.minFragmentDensity, 0.001) && damage > 0;
  return { count, velocity, density, damage, effective };
}
/** How many fragments strike a creature in that cloud: a Poisson draw on the density (shrapnel()). */
export function shrapnelHits(density, rng, limit = 1000) { return poisson(density, rng, limit); }

// ---- the other charges ----

/** Flashbang (explosion_handler::flashbang): a creature within `stunWithin` is stunned for stunTurns − distance turns,
 * one that sees within `blindWithin` is blinded for blindTurns − distance. Machines are untouched. -> { stun, blind } in turns. */
export function flashbang(distance, { machine = false, sees = true } = {}, c = {}) {
  const f = c.flashbang || {};
  if (machine) return { stun: 0, blind: 0 };
  const d = Math.max(0, distance);
  const stun = d <= num(f.stunWithin, 4) ? Math.max(0, num(f.stunTurns, 10) - d) : 0;
  const blind = sees && d <= num(f.blindWithin, 8) ? Math.max(0, num(f.blindTurns, 18) - d) : 0;
  return { stun, blind };
}

/** A lit bottle bursting where it lands (iuse::molotov_lit): fire of intensity 1 + one in 3 + one in 5 on every tile within one. */
export function molotovIntensity(rng, c = {}) {
  const m = c.molotov || {};
  return 1 + (rng() < 1 / num(m.oneInA, 3) ? 1 : 0) + (rng() < 1 / num(m.oneInB, 5) ? 1 : 0);
}
/** The incendiary grenade (iuse::grenade_inc_act): a small burning blast (power 8, factor 0.8), three to five lines of flame,
 * and an incendiary field of intensity 3 out to two tiles. -> { power, distanceFactor, fire: true, fieldRadius, fieldIntensity, flames } */
export function incendiaryGrenade(rng, c = {}) {
  const g = c.incendiaryGrenade || {};
  return { power: num(g.power, 8), distanceFactor: num(g.distanceFactor, 0.8), fire: true, fieldRadius: num(g.fieldRadius, 2), fieldIntensity: num(g.fieldIntensity, 3), flames: rngInt(rng, num(g.flamesMin, 3), num(g.flamesMax, 5)) };
}

// ---- one whole burst ----

/**
 * Everything a charge does to one creature `distance` tiles from where it burst, as plain numbers:
 * `blast` (the force there and the crushing damage rolled against `bashArmor`, monster rules), `fragments` (how many
 * struck and what each is worth as a bullet), `fire` (intensity left on that tile for a burning blast) and `flash`.
 * The game turns these into its own hits, armour and effects.
 */
export function burstAt(spec, distance, { bashArmor = 0, machine = false, sees = true } = {}, rng, c = {}) {
  const s = spec || {};
  const force = blastForce(s.power, s.distanceFactor, distance, c);
  const blastDamage = force > 0 ? monsterBlastDamage(force, bashArmor, rng, c) : 0;
  const shr = s.shrapnel;
  let fragments = { hits: 0, each: 0 };
  if (shr?.casingMass > 0 && shr?.fragmentMass > 0) {
    const cloud = shrapnelAt(s.power, shr.casingMass, shr.fragmentMass, distance, c);
    if (cloud.effective) fragments = { hits: shrapnelHits(cloud.density, rng), each: cloud.damage, density: cloud.density, velocity: cloud.velocity };
  }
  const fire = s.fire ? fireIntensity(force, rng, c) : 0;
  const flash = s.flash ? flashbang(distance, { machine, sees }, c) : { stun: 0, blind: 0 };
  return { force, blastDamage, fragments, fire, flash };
}
