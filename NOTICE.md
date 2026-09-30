# Notice: attribution, changes and licence

Everything in this repository is licensed under the **Creative Commons Attribution-ShareAlike 3.0 Unported** licence
(CC BY-SA 3.0): <https://creativecommons.org/licenses/by-sa/3.0/>. `LICENSE.txt` is the licence file of the source
project, copied verbatim.

## The original work

- **Title:** Cataclysm: Dark Days Ahead (CDDA)
- **Authors:** the Cataclysm: Dark Days Ahead contributors. Their own list is kept verbatim in
  `cdda/data/credits/en.credits`.
- **Source:** <https://github.com/CleverRaven/Cataclysm-DDA>, at the tag and commit recorded in `SOURCE.json`.
- **Licence:** CC BY-SA 3.0 Unported.

`cdda/` is an unmodified copy of parts of that project. Nothing under it is edited.

## What was changed

Everything outside `cdda/` is an adaptation of CDDA made for the game *AIR - Prologue* by Warsaw R&D Center sp. z o. o.,
2026, and is offered under the same licence. It is published at <https://github.com/marek-bardonski/AIR-Prologue-External>.

- `whitelist/` selects which CDDA objects are used and which are switched off.
- `overrides/` patches CDDA objects and adds variants that inherit from them (renamed things, simplified recipes,
  rebalanced numbers).
- `game-data/` holds tables written for the game that list CDDA ids and restate or rebalance CDDA numbers, and
  text describing CDDA-derived things.
- `mechanics/` holds JavaScript that restates rules from CDDA's source code (the craft roll, digestion, focus,
  mood and the like); each function names the CDDA function it follows.
- `index/` is generated from the above; `scripts/` builds and inspects it.

## What you may do

You may copy, share and adapt anything here, for any purpose including commercial ones, provided you credit the
CDDA contributors and Warsaw R&D Center sp. z o. o. as above, link the licence, say what you changed, and offer your own
adaptation under CC BY-SA 3.0 or a later version. No terms or technical measures shipped with *AIR - Prologue*
restrict these rights for this folder.

## What this is not

*AIR - Prologue* is a separate program that reads this data. Its own code and artwork are not part of this
repository and are not covered by this licence. The game is not endorsed by, sponsored by or affiliated with the
Cataclysm: Dark Days Ahead project or its contributors.
