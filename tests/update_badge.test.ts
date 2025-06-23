import fs from 'fs';
import path from 'path';
import { calcAverage } from '../scripts/update_badge';

const tmp = path.join(__dirname, 'sample.json');
fs.writeFileSync(
  tmp,
  JSON.stringify({ tasks: [{ final_score: 1 }, { final_score: 0.5 }] })
);

const avg = calcAverage(tmp);
if (avg !== 0.75) {
  console.error(`calcAverage expected 0.75, got ${avg}`);
  process.exit(1);
}
fs.unlinkSync(tmp);
console.log('calcAverage test passed');
