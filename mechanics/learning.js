// Reading, focus and practice: rules restated from Cataclysm: Dark Days Ahead 0.I.
// CC BY-SA 3.0, see ../NOTICE.md. Pure functions over plain numbers.

// ---- reading: `c` is game-data/cdda-mechanics.json `reading` ----

/**
 * How long a sitting with a book takes and the range of what it teaches.
 * After src/character.cpp `Character::time_to_read` and `Character::read_speed`, and the gains
 * src/activity_actor.cpp hands to src/skill.cpp `SkillLevel::readBook`.
 * `book` is { minutes, intelligence }; `level` the reader's knowledge of the book's skill;
 * `focus` the learning multiplier; a `skim` is a tenth of the time.
 */
export function readingPlan({ book, intelligence, level, focus, skim }, c) {
  const minutes = Math.max(.1, book.minutes * (c.speedNumerator / (c.intBase + intelligence / c.intDivisor) + Math.max(0, book.intelligence - intelligence) / c.lowIntTimeDivisor) / (skim ? 10 : 1));
  let min = Math.max(1, Math.floor(book.minutes / c.minTimeDivisor) + Math.floor(intelligence / c.minIntDivisor));
  let max = Math.floor(book.minutes / c.maxTimeDivisor) + Math.floor(intelligence / c.maxIntDivisor) - level;
  min = Math.round(min * focus); max = Math.round(max * focus);
  max = Math.max(min, Math.min(c.maxMaxXp, Math.max(c.minMaxXp, max))); min = Math.max(1, min); max = Math.max(min, max);
  min *= Math.pow(level + 1, 2) * c.xpScale; max *= Math.pow(level + 1, 2) * c.xpScale;
  return { minutes, minXp: min, maxXp: max };
}

/** What one sitting teaches, for a uniform draw `u` in [0, 1). After src/skill.cpp `SkillLevel::readBook`. */
export function readingXp({ minXp, maxXp, level }, c, u) {
  const step = Math.pow(level + 1, 2) * c.xpScale;
  return minXp + Math.floor(u * (Math.floor((maxXp - minXp) / step) + 1)) * step;
}

// ---- focus: `c` is game-data/practice.json `training` ----

/** Focus as learning reads it, adjusted for intelligence. After src/character.cpp `Character::adjust_for_focus`. */
export function focusEffective(value, intelligence, c) {
  return Math.max(c.focusMinimum, Math.trunc(value * (1 + (intelligence - c.focusIntBase) * c.focusIntAdjustment / 100)));
}

/**
 * The focus a mind settles towards. After src/character.cpp `Character::calc_focus_equilibrium`.
 * `studying` is true while reading a book that still teaches; `morale` is mood less perceived pain.
 */
export function focusEquilibrium({ studying, morale, fatigue }, c) {
  let target = c.focusPercent;
  if (studying) target -= c.focusReadingPenalty;
  if (morale < c.focusMinimum - c.focusPercent) target = c.focusMinimum;
  else if (morale <= c.focusMoraleBlock) target += morale;
  else { let divisor = 1; while (target < c.focusMaximum) { if (morale > c.focusMoraleBlock * divisor) { morale -= c.focusMoraleBlock * divisor; target += c.focusMoraleBlock; divisor *= 2; } else { target += Math.trunc(morale / divisor); break; } } }
  target = Math.max(c.focusMinimum, Math.min(c.focusMaximum, target));
  for (const [at, cap] of c.fatigueCaps) if (fatigue >= at) { target = Math.min(target, cap); break; }
  return target;
}

/** The focus pool after `rawXp` of learning. After src/character.cpp `Character::practice` (the focus drain). */
export function focusAfterLearning(pool, rawXp, c) {
  const amount = Math.max(Math.floor(pool / c.focusDrainPercentDivisor), Math.trunc(rawXp));
  return Math.max(0, pool - (amount >= c.focusDrainLinearAt ? amount : Math.floor(amount * amount / c.focusDrainDivisor)));
}

/** The focus pool after a stretch of proficiency practice. After src/character_proficiency.cpp `Character::practice_proficiency`. */
export function focusAfterProficiency(pool, c) {
  return pool - Math.floor(pool / c.focusDrainPercentDivisor);
}

// ---- practice: `c` is game-data/practice.json `training` ----

/**
 * One tick of practice: how practical skill and knowledge move for `amount` of raw experience.
 * After src/character.cpp `Character::practice` (the catch-up and knowledge modifiers) and src/skill.cpp
 * `SkillLevel::train` / `SkillLevel::knowledge_train`. `levelXp(level)` is the experience a level takes.
 */
export function practiceTick({ practical, theoretical, level, knowledgeLevel, amount, intelligence, perception }, c, levelXp) {
  let catchup = 1 + (2 * intelligence + perception) / c.catchupStatDivisor, knowledge = 1 + intelligence / c.knowledgeIntDivisor;
  if (knowledgeLevel > level) catchup *= Math.max(knowledgeLevel, 1) / Math.max(level, 1);
  else if (knowledgeLevel === level && theoretical > practical) { catchup = Math.max(catchup - practical / theoretical, 1); knowledge = Math.max(knowledge - .1 * practical / theoretical, 1); }
  else { catchup = 1; knowledge = 1; }
  knowledge = Math.min(knowledge, catchup * c.knowledgeFraction);
  practical += amount * catchup * c.skillTrainingSpeed; theoretical += amount * knowledge * c.skillTrainingSpeed;
  if (practical >= levelXp(level)) { level++; practical = 0; if (level > knowledgeLevel) { knowledgeLevel = level; theoretical = 0; } }
  if (level === knowledgeLevel) theoretical = Math.max(theoretical, practical);
  if (theoretical >= levelXp(knowledgeLevel)) { knowledgeLevel++; theoretical = 0; }
  return { practical, theoretical, level, knowledgeLevel };
}
