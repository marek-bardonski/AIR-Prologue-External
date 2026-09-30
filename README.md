# AIR - Prologue: external data

The data the game **AIR - Prologue** loads at run time, adapted from
[Cataclysm: Dark Days Ahead](https://github.com/CleverRaven/Cataclysm-DDA) (CDDA).

Licence: **CC BY-SA 3.0** (`LICENSE.txt`, copied verbatim from CDDA). Everything here is either an unmodified copy of
CDDA material or an adaptation of it, offered under the same licence. `NOTICE.md` says who is credited, what was
changed and what you may do with it. `SOURCE.json` records the CDDA release this was taken from.

| Path | What |
|---|---|
| `cdda/` | parts of CDDA, unmodified: `data/json`, the Magiclysm mod data, the JSON documentation and the contributor list |
| `whitelist/` | which CDDA objects the game uses, and which are switched off |
| `overrides/` | changes to CDDA objects, and variants that inherit from them |
| `game-data/` | tables written for the game that list CDDA ids; `manifest.json` names the ones the game loads |
| `mechanics/` | rules restated from CDDA's source code, as plain JavaScript functions |
| `index/` | generated lookup from object id to file (`scripts/build-index.mjs`) |
| `audits/`, `reports/` | content audits: what was reviewed and changed, and what can be found where |
| `scripts/` | tools that copy the CDDA material in, build the index and regenerate tables |

The game itself is a separate program and is not part of this repository.
