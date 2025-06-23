import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const DATA_FILE = path.resolve(__dirname, 'crystallization.json');

type KPIHistory = { iteration: number; score: number; notes?: string };
interface Task {
  id: string;
  title: string;
  status?: string;
  iteration: number;
  kpi_history: KPIHistory[];
  final_score?: number;
  notes?: string;
}
interface Data {
  core_version: number;
  core_principles: string[];
  tasks: Task[];
  kpi_definitions: string[];
}

function loadData(): Data {
  if (!fs.existsSync(DATA_FILE)) {
    throw new Error('Data file not found');
  }
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw) as Data;
}

function saveData(data: Data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

yargs(hideBin(process.argv))
  .command(
    'add-task',
    'Add new task',
    (y) =>
      y.option('id', { type: 'string', demandOption: true })
        .option('title', { type: 'string', demandOption: true }),
    (argv) => {
      const data = loadData();
      if (data.tasks.find((t) => t.id === argv.id)) {
        console.error('Task already exists');
        return;
      }
      data.tasks.push({
        id: String(argv.id),
        title: String(argv.title),
        status: 'backlog',
        iteration: 0,
        kpi_history: [],
      });
      saveData(data);
      console.log('Task added');
    }
  )
  .command(
    'update-kpi',
    'Update KPI score for task',
    (y) =>
      y.option('id', { type: 'string', demandOption: true })
        .option('score', { type: 'number', demandOption: true })
        .option('notes', { type: 'string' }),
    (argv) => {
      const data = loadData();
      const task = data.tasks.find((t) => t.id === argv.id);
      if (!task) {
        console.error('Task not found');
        return;
      }
      const iter = task.iteration + 1;
      task.iteration = iter;
      task.kpi_history.push({ iteration: iter, score: Number(argv.score), notes: argv.notes as string });
      task.final_score = Number(argv.score);
      saveData(data);
      console.log('KPI updated');
    }
  )
  .command(
    'level',
    'Show crystallization level for task',
    (y) => y.option('id', { type: 'string', demandOption: true }),
    (argv) => {
      const data = loadData();
      const task = data.tasks.find((t) => t.id === argv.id);
      if (!task) {
        console.error('Task not found');
        return;
      }
      console.log(task.final_score ?? '0');
    }
  )
  .command(
    'update-core',
    'Update core principles',
    (y) => y.option('principles', { type: 'string', demandOption: true }),
    (argv) => {
      const data = loadData();
      data.core_principles = String(argv.principles).split(',').map((p) => p.trim());
      data.core_version += 1;
      saveData(data);
      console.log('Core principles updated');
    }
  )
  .command('average', 'Show average crystallization level', () => {}, () => {
    const data = loadData();
    const scores = data.tasks.map((t) => t.final_score ?? 0);
    const avg = scores.reduce((a, b) => a + b, 0) / (scores.length || 1);
    console.log(avg.toFixed(2));
  })
  .demandCommand()
  .help()
  .strict()
  .parse();
