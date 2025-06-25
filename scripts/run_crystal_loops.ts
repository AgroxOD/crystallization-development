import { loadData, saveData, updateKPI, KPIEntry, KPIDef } from '../src/core';

function nextMetrics(
  prev: KPIEntry | undefined,
  defs: KPIDef[]
): Record<string, number> {
  const metrics: Record<string, number> = {};
  for (const def of defs) {
    const prevVal = prev ? ((prev as any)[def.key] as number) : def.threshold;
    let newVal = prevVal;
    if (def.key === 'bug_count' || def.key === 'change_failure_rate') {
      newVal = Math.max(0, prevVal - 0.05);
    } else {
      newVal = Math.min(def.threshold, prevVal + 0.05);
    }
    metrics[def.key] = +newVal.toFixed(2);
  }
  return metrics;
}

export function runLoops(iterations = 10) {
  const data = loadData();
  for (let i = 0; i < iterations; i++) {
    for (const task of data.tasks) {
      if (task.status === 'diamond') continue;
      const prev = task.kpi_history[task.kpi_history.length - 1];
      const metrics = nextMetrics(prev, data.kpi_definitions);
      updateKPI(task, metrics, data.kpi_definitions);
    }
  }
  saveData(data);
}

if (require.main === module) {
  const loops = parseInt(process.argv[2] || '10', 10);
  runLoops(loops);
  console.log(`Completed ${loops} improvement loops`);
}
