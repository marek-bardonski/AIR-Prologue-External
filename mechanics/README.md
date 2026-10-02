# mechanics

Rules that *AIR - Prologue* restates from the source code of Cataclysm: Dark Days Ahead (CDDA), release 0.I, as
JavaScript. CDDA's code is CC BY-SA 3.0 like its data, so these restatements live here and carry the same licence
(see `../NOTICE.md`). The game loads `index.js` from this folder at run time, next to the JSON, and calls it.

## Shape

- Pure functions. No imports from the game, no DOM, no clock, no saved state. They take plain numbers (and, where a
  rule moves several quantities at once, a plain object to update), the matching block of a `game-data/` table as
  `c`, and a random source when the rule rolls.
- Each function names the CDDA function it follows in its comment. The numbers stay in the `game-data/` tables
  (`cdda-mechanics.json`, `sustenance.json`, `practice.json`, `animal-loot.json`, `durability.json`,
  `firestarters.json`), which cite their sources too.

| File | Rules | CDDA source |
|---|---|---|
| `crafting.js` | craft roll, setbacks and lost components, recipe memorisation, skill cap, taking apart, butchery, repair chance, fire-making time, handling cost | `crafting.cpp`, `recipe.cpp`, `item_components.cpp`, `butchery.cpp`, `iuse_actor.cpp`, `character.cpp` |
| `learning.js` | reading time and gains, focus, practice and knowledge catch-up | `character.cpp`, `skill.cpp`, `activity_actor.cpp`, `character_proficiency.cpp` |
| `morale.js` | mood decay, the mood total, food enjoyment and monotony | `morale.cpp`, `cata_utility.cpp`, `consumption.cpp` |
| `body.js` | reserves and metabolism, the stomach, hunger effects, thirst, sleep, pain, mending and dressings | `character.cpp`, `character_body.cpp`, `stomach.cpp`, `consumption.cpp`, `avatar.cpp`, `suffer.cpp`, `iuse_actor.cpp` |
| `bionics.js` | the surgeon's number and the chance of an operation, how long it takes, what a failed installation or removal does, the metabolic and sensory-dulling implants and the repair nanobots | `bionics.cpp` |
| `explosions.js` | the blast's force by distance and what it does to a monster or a person, fire left by a burning blast, noise, safe range, the shrapnel cloud (Gurney speed, drag, thinning, bullet damage, Poisson hits), the flashbang, the lit bottle and the incendiary grenade | `explosion.cpp`, `iuse.cpp` |
