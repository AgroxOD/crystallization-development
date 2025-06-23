# Использование REST API сервера

Этот документ описывает настройку и примеры запросов к локальному REST API серверу кристаллизации.

## Запуск сервера

```bash
npm run crystal:api
```

По умолчанию сервер слушает порт `3000`. Значение порта можно изменить через переменную окружения `API_PORT`.

### Настройка `.env`

Если требуется хранить переменные окружения в файле, создайте файл `exports.sh` со строкой:

```bash
export API_PORT=4000
```

Сгенерируйте `.env` командой:

```bash
./scripts/create_env_from_exports.sh exports.sh
```

После чего `npm run crystal:api` прочитает порт из `.env`.

## Основные эндпоинты

- `GET /tasks` – получить список задач
- `POST /task` – создать новую задачу. Требует `id` и `title`.
- `PUT /task/:id/metrics` – обновить KPI конкретной задачи
- `PUT /task/:id/attrs` – изменить сложность и теги
- `GET /stats` – получить средний уровень кристаллизации
- `GET /goal` и `POST /goal` – получить или задать целевой процент

## Примеры запросов

Создание задачи:

```bash
curl -X POST http://localhost:3000/task \
  -H 'Content-Type: application/json' \
  -d '{"id":"DEMO-1","title":"Demo task"}'
```

Обновление KPI:

```bash
curl -X PUT http://localhost:3000/task/DEMO-1/metrics \
  -H 'Content-Type: application/json' \
  -d '{"cycle_time_days":2,"code_coverage":0.8,"change_failure_rate":0.05,"mttr_hours":1.2,"bug_count":0,"deployment_frequency":2}'
```

Изменение атрибутов:

```bash
curl -X PUT http://localhost:3000/task/DEMO-1/attrs \
  -H 'Content-Type: application/json' \
  -d '{"complexity":"medium","tags":["api"]}'
```

Задание цели кристаллизации:

```bash
curl -X POST http://localhost:3000/goal \
  -H 'Content-Type: application/json' \
  -d '{"goal":98}'
```

Для автоматизации смотрите пример скрипта [`scripts/api_integration_example.ts`](../scripts/api_integration_example.ts).
