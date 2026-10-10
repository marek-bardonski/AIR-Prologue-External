# game-data

Tables written for AIR - Prologue that list CDDA ids. The game loads the files named in `manifest.json`, in that
order. `fate-faq.json` is generated from `fate-faq.source.json`; `content-17-09/` holds the staged batches that the
whitelist, overrides and loot tables were built from. Where a table restates CDDA numbers, its `source` field says
where they come from.
- Calibration against CDDA's houses and cars (10.10.2026): a `search` thing in `interactables.json` may carry `items` rows beside or instead of its table, each on its own `chance`; `found: true` makes a row roll like a loot table's (battery, charge, container). The house drawers, cabinet, shelf and closet and the wreck's battery are such rows. `vehicles.json` `found` is the state of a vehicle met on an old road (which slots are fitted, which parts are whole, fuel left, battery charge); `idleFuelPerHour` and each alternator's `fit.watts` are the dials of a parked engine run to charge. `village-trade.json` `staples` are on a merchant's shelf every day. `item-rarity.json` `exploration.pools` rows are ids or `{ id, weight }`.
