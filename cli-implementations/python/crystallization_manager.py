import json
import argparse
from pathlib import Path

DATA_FILE = Path(__file__).resolve().parents[2] / 'crystallization.json'


def load_data():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_data(data):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def add_task(args):
    data = load_data()
    if any(t['id'] == args.id for t in data['tasks']):
        print('Task already exists')
        return
    data['tasks'].append({
        'id': args.id,
        'title': args.title,
        'status': 'backlog',
        'iteration': 0,
        'kpi_history': []
    })
    save_data(data)
    print('Task added')


def update_kpi(args):
    data = load_data()
    task = next((t for t in data['tasks'] if t['id'] == args.id), None)
    if not task:
        print('Task not found')
        return
    iter_num = task['iteration'] + 1
    task['iteration'] = iter_num
    task.setdefault('kpi_history', []).append({
        'iteration': iter_num,
        'score': args.score,
        'notes': args.notes
    })
    task['final_score'] = args.score
    save_data(data)
    print('KPI updated')


def level(args):
    data = load_data()
    task = next((t for t in data['tasks'] if t['id'] == args.id), None)
    print(task.get('final_score', 0) if task else 0)


def update_core(args):
    data = load_data()
    data['core_principles'] = [p.strip() for p in args.principles.split(',')]
    data['core_version'] += 1
    save_data(data)
    print('Core principles updated')


def average(args):
    data = load_data()
    scores = [t.get('final_score', 0) for t in data['tasks']]
    avg = sum(scores) / (len(scores) or 1)
    print(f"{avg:.2f}")


def init_repo(args):
    if DATA_FILE.exists():
        print('crystallization.json already exists')
        return
    template = {
        'core_version': 1,
        'core_principles': ['Iterative improvement', 'KPI-driven development'],
        'kpi_definitions': [
            {'key': 'cycle_time_days', 'title': 'Cycle Time (days)', 'threshold': 3},
            {'key': 'code_coverage', 'title': 'Code Coverage', 'threshold': 0.8}
        ],
        'tasks': []
    }
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(template, f, ensure_ascii=False, indent=2)
    print('Initialized crystallization.json')


parser = argparse.ArgumentParser(description='Crystallization CLI (Python)')
sub = parser.add_subparsers(dest='command')

add = sub.add_parser('add-task')
add.add_argument('--id', required=True)
add.add_argument('--title', required=True)
add.set_defaults(func=add_task)

kpi = sub.add_parser('update-kpi')
kpi.add_argument('--id', required=True)
kpi.add_argument('--score', type=float, required=True)
kpi.add_argument('--notes', default='')
kpi.set_defaults(func=update_kpi)

lvl = sub.add_parser('level')
lvl.add_argument('--id', required=True)
lvl.set_defaults(func=level)

core = sub.add_parser('update-core')
core.add_argument('--principles', required=True)
core.set_defaults(func=update_core)

avg = sub.add_parser('average')
avg.set_defaults(func=average)

init_p = sub.add_parser('init')
init_p.set_defaults(func=init_repo)

args = parser.parse_args()
if hasattr(args, 'func'):
    args.func(args)
else:
    parser.print_help()
