# Camp equipment and fishing finds — 2026-09-22

Fishing rods are rare loot; deck chairs are occasional finds. These changes use `rules.json`
`lootAvailability`, applied after weighted selection by the game's loot roller, so other entries keep
exactly their existing selection probabilities. A failed gate leaves no item; it does not reroll.
This also survives rerunning the roadside importer. Crafting and equipment already in saves are unaffected.

Probabilities below include the uniformly distributed number of rolls per search. For single-roll probability
`p = weight / totalWeight * availability`, average `1 - (1 - p)^n` over the table's roll range.

| Table | Item | Before | After |
| --- | --- | ---: | ---: |
| campsite_supplies | deck_chair | 8.233% | 1.689% |
| campsite_supplies | fishing_rod_2pc_packed | 8.233% | 0.424% |
| campsite_supplies | fishing_rod_tele_packed | 8.233% | 0.424% |
| fishing_dock | fishing_rod_basic | 51.239% | 0.399% |
| fishing_dock_supplies | fishing_rod_basic | 31.481% | 0.216% |
| discovery_remains | fishing_rod_2pc / fishing_rod_professional / fishing_rod_tele, each | 0.335% | 0.167% |
| discovery_workshop | fishing_rod_basic | 0.446% | 0.003% |
| discovery_workshop | fishing_rod_2pc / fishing_rod_professional / fishing_rod_tele, each | 0.446% | 0.223% |

The combined chance of any fishing rod is below 1% per search in every source, even before accounting
for discovering or reaching that source. The game regression checks every table and runs 100,000 seeded
campsite searches against the actual roller. The FAQ is rebuilt, and its fingerprint now includes rules
so future availability changes cannot silently bypass the stale-content check.
