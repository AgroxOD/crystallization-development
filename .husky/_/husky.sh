#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug() {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky: $*"
  }
  husky_dir="$(cd "$(dirname "$0")/.." && pwd -P)"
  [ -f "$husky_dir/.huskyrc" ] && . "$husky_dir/.huskyrc"
  export husky_skip_init=1
fi
