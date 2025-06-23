import fs from 'fs';
import path from 'path';

export type KPIDef = {
  key: string;
  title: string;
  threshold: number;
};

export type KPIEntry = {
  iteration: number;
  score: number;
  [key: string]: number | boolean | string | undefined;
  is_diamond?: boolean;
};

export type Task = {
  id: string;
  title: string;
  status?: string;
  iteration: number;
  kpi_history: KPIEntry[];
  final_score?: number;
  notes?: string;
  complexity?: string;
  tags?: string[];
};

export type Data = {
  core_version: number;
  core_principles: string[];
  tasks: Task[];
  kpi_definitions: KPIDef[];
};

const DATA_FILE = path.resolve(__dirname, '..', 'crystallization.json');

export function loadData(): Data {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw) as Data;
}

export function saveData(data: Data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export function calcScore(
  values: Record<string, number>,
  defs: KPIDef[]
): number {
  let sum = 0;
  defs.forEach((def) => {
    const v = values[def.key];
    if (typeof v === 'number') {
      if (def.key === 'bug_count' || def.key === 'change_failure_rate') {
        sum += v <= def.threshold ? 1 : 0;
      } else {
        sum += v >= def.threshold ? 1 : 0;
      }
    }
  });
  return +(sum / defs.length).toFixed(2);
}

export function updateKPI(
  task: Task,
  values: Record<string, number>,
  defs: KPIDef[]
) {
  const iter = task.iteration + 1;
  const isDiamond = defs.every((def) => {
    const v = values[def.key];
    if (typeof v !== 'number') return false;
    if (def.key === 'bug_count' || def.key === 'change_failure_rate') {
      return v <= def.threshold;
    }
    return v >= def.threshold;
  });
  const score = isDiamond ? 1.0 : calcScore(values, defs);
  const entry: KPIEntry = {
    iteration: iter,
    score,
    ...values,
    is_diamond: isDiamond,
  };
  task.iteration = iter;
  task.kpi_history.push(entry);
  task.final_score = score;
  if (isDiamond) task.status = 'diamond';
}

export function addTask(
  data: Data,
  opts: { id: string; title: string; complexity?: string; tags?: string[] }
): boolean {
  if (data.tasks.find((t) => t.id === opts.id)) {
    return false;
  }
  const task: Task = {
    id: opts.id,
    title: opts.title,
    status: 'backlog',
    iteration: 0,
    kpi_history: [],
  };
  if (opts.complexity) task.complexity = opts.complexity;
  if (opts.tags) task.tags = opts.tags;
  data.tasks.push(task);
  return true;
}

export function updateAttributes(
  task: Task,
  opts: { complexity?: string; tags?: string[] }
) {
  if (opts.complexity) task.complexity = opts.complexity;
  if (opts.tags) task.tags = opts.tags;
}
