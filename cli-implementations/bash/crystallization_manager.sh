#!/bin/bash
DATA_FILE="$(cd "$(dirname "$0")"/../.. && pwd)/crystallization.json"

case "$1" in
  average)
    jq '[.tasks[].final_score // 0] | (add / (length // 1))' "$DATA_FILE"
    ;;
  level)
    task_id="$2"
    if [ -z "$task_id" ]; then
      echo "Usage: $0 level <id>"; exit 1; fi
    jq -r --arg id "$task_id" '.tasks[] | select(.id == $id) | .final_score // 0' "$DATA_FILE"
    ;;
  *)
    echo "Usage: $0 {average|level}";
    ;;
esac
