const API_URL = process.env.CRYSTAL_API_URL || 'http://localhost:3000';

async function main() {
  const res = await fetch(`${API_URL}/tasks`);
  const tasks = await res.json();
  console.log('Current tasks:', tasks);

  const addRes = await fetch(`${API_URL}/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: 'api-demo', title: 'API demo task' }),
  });
  if (!addRes.ok) {
    console.error('Failed to add task via API');
    return;
  }
  console.log('Task added via API');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
