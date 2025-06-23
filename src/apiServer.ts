import express from 'express';
import {
  loadData,
  saveData,
  addTask,
  updateKPI,
  updateAttributes,
  getAverageScore,
  setGoal,
} from './core';

const app = express();
app.use(express.json());

app.get('/tasks', (_req, res) => {
  const data = loadData();
  res.json(data.tasks);
});

app.post('/task', (req, res) => {
  const { id, title, complexity, tags } = req.body;
  if (!id || !title) {
    res.status(400).json({ error: 'id and title required' });
    return;
  }
  const data = loadData();
  const ok = addTask(data, { id, title, complexity, tags });
  if (!ok) {
    res.status(400).json({ error: 'Task already exists' });
    return;
  }
  saveData(data);
  res.json({ success: true });
});

app.put('/task/:id/metrics', (req, res) => {
  const { id } = req.params;
  const metrics = req.body;
  const data = loadData();
  const task = data.tasks.find((t) => t.id === id);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  updateKPI(task, metrics, data.kpi_definitions);
  saveData(data);
  res.json(task);
});

app.put('/task/:id/attrs', (req, res) => {
  const { id } = req.params;
  const { complexity, tags } = req.body;
  const data = loadData();
  const task = data.tasks.find((t) => t.id === id);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  updateAttributes(task, { complexity, tags });
  saveData(data);
  res.json(task);
});

app.get('/stats', (_req, res) => {
  const data = loadData();
  res.json({ average: getAverageScore(data) });
});

app
  .route('/goal')
  .get((_req, res) => {
    const data = loadData();
    res.json({ goal: data.goal_percentage ?? 100 });
  })
  .post((req, res) => {
    const { goal } = req.body;
    if (typeof goal !== 'number') {
      res.status(400).json({ error: 'goal must be a number' });
      return;
    }
    const data = loadData();
    setGoal(data, goal);
    saveData(data);
    res.json({ success: true });
  });

const port = Number(process.env.API_PORT) || 3000;
app.listen(port, () => {
  console.log(`Crystallization API server listening on port ${port}`);
});
