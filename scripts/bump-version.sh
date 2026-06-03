#!/usr/bin/env bash
set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: $0 <patch|minor|major|semver>"
  exit 1
fi

cd "$(dirname "$0")/.."
npm version "$1" --no-git-tag-version
node scripts/generate-version.js
echo "✓ Bumped to v$(node -p "require('./package.json').version")"
