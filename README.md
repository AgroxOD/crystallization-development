# Crystallization Development Methodology

![Crystallization Level](https://img.shields.io/badge/crystallization-100%25-brightgreen?style=for-the-badge)

> **Current Level:** 100% – вычислено командой `npm run crystal:avg`

> **Author:** Krishna Narayana (omkrishna.narayana@gmail.com)  
> June 2025

---

## 🚀 What is Crystallization in Development?

**Crystallization** — новая авторская методология управления задачами и улучшениями в разработке, построенная на итеративной обработке и отслеживании степени зрелости решения.  
Каждая задача проходит через этапы "кристаллизации", на каждом из которых оценивается её совершенство по KPI, дорабатывается и фиксируется в истории.

### Основные идеи:

**Пример практической кристаллизации**: внутри текущей задачи выполнено 10 итераций улучшения концепции с фиксацией KPI на каждом шаге. Полные значения см. в `crystallization.json`.

- **Итерационный цикл:** Задачи проходят через этапы Backlog → In Progress → Review → Improvement → Crystallized.
- **KPI-оценка:** На каждом этапе фиксируется уровень зрелости ("crystallization level") по выбранным метрикам.
- **Рефлексия и самообновление ядра:** Принципы улучшения и KPI могут эволюционировать вместе с практикой.
- **Визуализация:** Система показывает прогресс к “кристаллу” — эталонному состоянию задачи/проекта.

---

## 📂 Repo Structure

- `crystallization.json` — пример структуры хранения (задачи, KPI и `goal_percentage` для целевого уровня)
- `cli-implementations/` — реализации CLI на разных языках
- `.github/workflows/` — автоматизация проверки
- `docs/` — подробное описание концепции и примеры
  - `concept.md` и `examples.md`
  - `universal.md` — описание кросс-языкового CLI
  - `CRYSTALLIZATION_PROTOCOL.md` — официальный стандарт "Crystallization Protocol v1.0"
  - `future_recommendations_ru.md` — база идей для дальнейшего развития

### CLI Implementations

В каталоге `cli-implementations/` находятся скрипты для работы с `crystallization.json` на разных языках.

- **JS/TS**: `js/crystallizationManager.ts`
- Общая логика вынесена в `src/core.ts` и используется всеми интерфейсами
- Модуль также предоставляет функции `addTask` и `updateAttributes` для управления задачами
- **Python**: `python/crystallization_manager.py`
- **Bash (experimental)**: `bash/crystallization_manager.sh`

Все инструменты поддерживают одинаковые команды (`add-task`, `update-kpi`, `update-attrs`, `level`, `update-core`, `average`, `list-diamonds`, `list-funcs`, `list-tasks`, `stats`, `goal`, `sync`).

### Diamond State / Алмазное состояние

Когда задача выполняет все KPI-пороги, она получает статус `diamond`. Такая кристаллическая решётка не содержит багов или долгов и не требует доработки, пока не изменятся критерии.

![Diamond Level](https://img.shields.io/badge/crystallization--diamond-%F0%9F%92%8E-brightgreen?style=for-the-badge)

---

## 🧊 Схема цикла

┌──────────┐ ┌──────────────┐ ┌───────────┐
│ Backlog │ ──▶ │ In Progress │ ──▶ │ Review │
└──────────┘ └──────────────┘ └───────────┘
│
▼
┌──────────────┐
│ Improvement │
└──────────────┘
│
┌─────┴─────┐
│ │
▼ ▼
┌───────────┐ ┌───────────────┐
│ Crystall. │ │ Next Iter... │
│ (Done) │ │ (новый цикл) │
└───────────┘ └───────────────┘

---

## 🧠 Cognitive Core

Файл `CORE.md` описывает архитектурное ядро проекта. Предполагается отдельная
библиотека с бизнес-логикой кристаллизации, поверх которой строятся REST API,
CLI и веб‑клиент. Такая модульность позволит развивать интерфейсы независимо и
легко интегрироваться с внешними системами.

---

## 📈 Быстрый старт

1. Склонируй репозиторий
2. Ознакомься с документацией в `/docs`
3. Попробуй `cli-implementations/js/crystallizationManager.ts` для добавления своих задач (поддерживаются опции `--complexity` и `--tags`)
4. Оцени уровень “кристаллизации” через CLI и бейджи
5. Запусти `npm run crystal:update-badge` чтобы автоматически обновить уровень и бейдж README
6. Для новых проектов используй `npm run crystal:init` внутри нужного репозитория
7. Выполни `npm run crystal:list-funcs` чтобы найти наиболее часто встречающиеся функции. Команда использует кеш и сканирует файлы за один проход (результат сохраняется в `most_common_function.txt`)
8. Запусти `npm run crystal:list-diamonds` чтобы увидеть все задачи, достигшие алмазного уровня
9. Запусти `npm run crystal:sync` для синхронизации `crystallization.json` между репозиторием и IDE
10. Запусти `npm test` чтобы выполнить юнит-тесты
11. Запусти `npm run crystal:list-tasks` чтобы увидеть все текущие задачи и их статусы
12. Запусти `npm run crystal:stats` чтобы увидеть сводную статистику
13. Запусти `npm run crystal:goal` чтобы отобразить или задать целевой процент кристаллизации
14. Используй `update-attrs` для изменения сложности и тегов существующих задач

## 🔄 Updating the Crystallization Badge

Чтобы отображать актуальный уровень кристаллизации, запусти `npm run crystal:update-badge`. Скрипт вычислит среднее значение, подставит его в бейдж README и обновит строку с текущим уровнем. Этот процесс можно вынести в CI. Для автоматизации добавлен workflow `update-badge.yml`, который еженедельно обновляет бейдж через GitHub Actions.

## 🛠️ Code Quality

Проект использует **ESLint**, **Prettier** и **commitlint** для автоматической проверки и исправления кода. Git hooks на базе **husky** запускают `lint-staged` перед коммитом и проверяют сообщения коммитов. После клонирования выполните `npm install` — это установит необходимые хуки. Запуск `npm run lint` проверит TypeScript-файлы, а `npm run format` приведет их к единому стилю. Если обновляете зависимости, повторно запустите `npm install`, чтобы `package-lock.json` оставался синхронизированным и команда `npm ci` не падала на CI.

## 🧩 Кристаллизация других репозиториев

Запусти `npm run crystal:init` в корне любого проекта, чтобы создать базовый файл `crystallization.json` и начать отслеживать уровень зрелости задач.

### Интеграция с IDE

1. Скопируй папку `cli-implementations/` или добавь этот репозиторий как `git submodule`.
2. Запусти `npm install` для установки зависимостей и `npm run crystal:init` для генерации стартового `crystallization.json`.
3. Если необходимо использовать переменные окружения, сгенерируй `.env` из файла экспортов командой `./scripts/create_env_from_exports.sh exports.sh`.
4. Используй `npm run crystal:sync` для синхронизации `crystallization.json` с файлом `.vscode/crystallization.json` внутри IDE.
5. Продолжай пользоваться командами `crystal:*` для обновления KPI и уровня кристаллизации.

---

## GitHub API Usage

Для автоматизации многих процессов можно обращаться к GitHub REST API.
Через него создаются issues и pull requests, а также обновляются файлы в репозитории. Подробные примеры и шаги интеграции представлены в [docs/github_api_usage.md](docs/github_api_usage.md).

---

## 🙋‍♀️ Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new features and CLI implementations in other languages.

## 🔮 Future Development

Документ `docs/future_recommendations_ru.md` содержит идеи и направления развития. Основные задачи отражены в `ROADMAP.md`.

## 📅 Action Plan

- **Месяцы 1–2:** рефакторинг CLI и выделение ядра как библиотеки.
- **Месяцы 3–6:** разработка REST API и начального веб-дэшборда.
- **Месяцы 7–9:** интеграция с трекерами задач и добавление геймификации.
- **Месяцы 10–12:** финальные правки, аудит безопасности и релиз версии 1.0.

## 🏷️ Author & License

**Author & Inventor:** Krishna Narayana  
**License:** MIT

---

## 🌍 English summary

> “Crystallization in Development” is a novel, iterative methodology for tracking and evolving tasks and features to their mature state, measured by custom KPIs and contemporary best practices. The system visualizes the journey from raw idea to a crystallized solution.

---
