import fs from 'fs';
import path from 'path';

const token = process.env.GITHUB_TOKEN;
const reposEnv = process.env.UPDATE_REPOS;

if (!token || !reposEnv) {
  console.error('GITHUB_TOKEN and UPDATE_REPOS env vars are required');
  process.exit(1);
}

const repos = reposEnv
  .split(',')
  .map((r) => r.trim())
  .filter(Boolean);

const localPath = path.resolve(__dirname, '..', 'crystallization.json');
const localData = JSON.parse(fs.readFileSync(localPath, 'utf-8'));
const localVersion = localData.core_version;

async function updateRepo(repo: string) {
  const url = `https://api.github.com/repos/${repo}/contents/crystallization.json`;
  const headers = {
    Authorization: `token ${token}`,
    'User-Agent': 'crystal-auto-update',
  };

  const res = await fetch(url, { headers });
  if (!res.ok) {
    console.error(`Failed to fetch ${repo}: ${res.status}`);
    return;
  }
  const info = await res.json();
  const content = Buffer.from(info.content, 'base64').toString('utf-8');
  let remoteVersion = 0;
  try {
    remoteVersion = JSON.parse(content).core_version || 0;
  } catch {
    console.error(`Invalid crystallization.json in ${repo}`);
    return;
  }
  if (remoteVersion >= localVersion) {
    console.log(`${repo} already up to date`);
    return;
  }

  const newContent = Buffer.from(fs.readFileSync(localPath, 'utf-8')).toString(
    'base64'
  );
  const updateRes = await fetch(url, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: 'chore: update crystallization core',
      content: newContent,
      sha: info.sha,
    }),
  });
  if (updateRes.ok) {
    console.log(`${repo} updated`);
  } else {
    console.error(`Failed to update ${repo}: ${updateRes.status}`);
  }
}

(async () => {
  for (const repo of repos) {
    await updateRepo(repo);
  }
})();
