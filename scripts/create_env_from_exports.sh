#!/bin/bash
# Generate a .env file from a file containing export statements
# Usage: ./scripts/create_env_from_exports.sh [exports-file]

src=${1:-exports.sh}
if [ ! -f "$src" ]; then
  echo "Source file $src not found" >&2
  exit 1
fi

grep '^export ' "$src" | sed 's/^export //' > .env
echo ".env generated from $src"
