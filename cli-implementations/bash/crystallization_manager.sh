#!/bin/bash
DATA_FILE="$(cd "$(dirname "$0")"/../.. && pwd)/crystallization.json"

case "$1" in
  init)
    if [ -f "$DATA_FILE" ]; then
      echo "crystallization.json already exists"; exit 1; fi
    cat > "$DATA_FILE" <<'EOF'
{
  "core_version": 1,
  "core_principles": ["Iterative improvement", "KPI-driven development"],
  "kpi_definitions": [
    { "key": "cycle_time_days", "title": "Cycle Time (days)", "threshold": 3 },
    { "key": "code_coverage", "title": "Code Coverage", "threshold": 0.8 }
  ],
  "tasks": []
}
EOF
    echo "Initialized crystallization.json"
    ;;
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
    echo "Usage: $0 {init|average|level}";
    ;;
esac
