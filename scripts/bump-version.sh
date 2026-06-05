#!/usr/bin/env bash
set -euo pipefail

RED='\033[0;31m'; GREEN='\033[0;32m'; CYAN='\033[0;36m'; YELLOW='\033[1;33m'; NC='\033[0m'

cd "$(dirname "$0")/.."

# ── Guard: uncommitted changes ────────────────────────────────────────────
if ! git diff --quiet HEAD -- . 2>/dev/null; then
  echo -e "${RED}✗ Uncommitted changes detected. Commit or stash them first.${NC}" >&2
  exit 1
fi
if [ -n "$(git status --porcelain)" ]; then
  echo -e "${RED}✗ Untracked files present. Commit or stash them first.${NC}" >&2
  exit 1
fi

# ── Read current version ──────────────────────────────────────────────────
CURRENT=$(node -p "require('./package.json').version")
echo -e "${CYAN}Current version:${NC} v${CURRENT}"

# ── Parse bump type ──────────────────────────────────────────────────────
BUMP="${1:-}"
if [ -z "$BUMP" ]; then
  echo
  echo "Bump type:"
  echo "  patch  (${CURRENT%%.*}.$(( $(echo "$CURRENT" | cut -d. -f2) )).$(( $(echo "$CURRENT" | cut -d. -f3) + 1 )))"
  echo "  minor  (${CURRENT%%.*}.$(( $(echo "$CURRENT" | cut -d. -f2) + 1 )).0)"
  echo "  major  ($(( ${CURRENT%%.*} + 1 )).0.0)"
  echo "  <semver>  (exact version like 1.2.3)"
  read -r -p "→ " BUMP
fi

# ── Compute new version ──────────────────────────────────────────────────
if [[ "$BUMP" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  NEW="$BUMP"
elif [ "$BUMP" = "patch" ]; then
  IFS=. read -r MAJ MIN PAT <<< "$CURRENT"
  NEW="$MAJ.$MIN.$((PAT + 1))"
elif [ "$BUMP" = "minor" ]; then
  IFS=. read -r MAJ MIN _ <<< "$CURRENT"
  NEW="$MAJ.$((MIN + 1)).0"
elif [ "$BUMP" = "major" ]; then
  IFS=. read -r MAJ _ _ <<< "$CURRENT"
  NEW="$((MAJ + 1)).0.0"
else
  echo -e "${RED}✗ Invalid: use patch, minor, major, or semver (e.g. 1.2.3)${NC}" >&2
  exit 1
fi

# ── Confirm ───────────────────────────────────────────────────────────────
echo
echo -e "${YELLOW}v${CURRENT} → v${NEW}${NC}"
read -r -p "Proceed? [y/N] " CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
  echo -e "${RED}Aborted.${NC}"
  exit 1
fi

# ── Write new version to package.json ─────────────────────────────────────
node -e "
const pkg = require('./package.json');
pkg.version = '$NEW';
require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
"

# ── Regenerate version.json ──────────────────────────────────────────────
node scripts/generate-version.js

# ── Show result ───────────────────────────────────────────────────────────
echo -e "${GREEN}✓ v${CURRENT} → v${NEW}${NC}"

# ── Auto-commit ──────────────────────────────────────────────────────────
git add package.json public/version.json
git commit -m "Bump version to v${NEW}"
echo -e "${GREEN}✓ Committed:${NC} Bump version to v${NEW}"
