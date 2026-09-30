#!/usr/bin/env bash
# Copies the CDDA data folders used by AIR - Prologue from a local CDDA checkout.
# Usage: scripts/sync-from-cdda.sh [path-to-cdda-checkout]   (default ../cdda-0.I)
# Nothing under cdda/ is ever edited by hand; rerun this script to resync to a new tag.
# SOURCE.json also records where this adaptation is published ("adaptedIn"): the game's credits link to it.
set -euo pipefail
SRC="${1:-../cdda-0.I}"
DST="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$(cd "$SRC" && pwd)"

rm -rf "$DST/cdda"
mkdir -p "$DST/cdda/data/mods" "$DST/cdda/data/credits" "$DST/cdda/doc"
cp -R "$SRC/data/json" "$DST/cdda/data/json"
cp -R "$SRC/data/mods/Magiclysm" "$DST/cdda/data/mods/Magiclysm"
cp -R "$SRC/doc/JSON" "$DST/cdda/doc/JSON"
# The contributor list: the attribution CC-BY-SA asks for travels with the data (see NOTICE.md).
cp "$SRC/data/credits/en.credits" "$DST/cdda/data/credits/en.credits"
cp "$SRC/LICENSE.txt" "$DST/LICENSE.txt"
find "$DST/cdda" -name .DS_Store -delete

COMMIT="$(git -C "$SRC" rev-parse HEAD)"
TAG="$(git -C "$SRC" describe --tags --exact-match 2>/dev/null || echo unknown)"
DATE="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
cat > "$DST/SOURCE.json" <<JSON
{
  "repo": "https://github.com/CleverRaven/Cataclysm-DDA",
  "tag": "$TAG",
  "commit": "$COMMIT",
  "licence": "CC-BY-SA 3.0 (see LICENSE.txt)",
  "adaptedIn": "https://github.com/marek-bardonski/AIR-Prologue-External",
  "importedAt": "$DATE",
  "folders": [
    "data/json (entire folder)",
    "data/mods/Magiclysm",
    "doc/JSON",
    "data/credits/en.credits",
    "LICENSE.txt"
  ]
}
JSON
echo "synced $TAG ($COMMIT) into $DST/cdda"
