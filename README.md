# Crystallization Development Methodology

![Crystallization Level](https://img.shields.io/badge/crystallization-83%25-brightgreen?style=for-the-badge)

> **Current Level:** 83% – вычислено командой `npm run crystal:avg`

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

- `crystallization.json` — пример структуры хранения
- `cli-implementations/` — реализации CLI на разных языках
- `.github/workflows/` — автоматизация проверки
- `docs/` — подробное описание концепции и примеры
  - `concept.md` и `examples.md`
  - `universal.md` — описание кросс-языкового CLI
  - `CRYSTALLIZATION_PROTOCOL.md` — официальный стандарт "Crystallization Protocol v1.0"

### CLI Implementations

В каталоге `cli-implementations/` находятся скрипты для работы с `crystallization.json` на разных языках.

- **JS/TS**: `js/crystallizationManager.ts`
- **Python**: `python/crystallization_manager.py`
- **Bash (experimental)**: `bash/crystallization_manager.sh`

Все инструменты поддерживают одинаковые команды (`add-task`, `update-kpi`, `level`, `update-core`, `average`, `list-funcs`).

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
│           │
▼           ▼
┌───────────┐ ┌───────────────┐
│ Crystall. │ │ Next Iter... │
│   (Done)  │ │ (новый цикл) │
└───────────┘ └───────────────┘

---

## 📈 Быстрый старт

1. Склонируй репозиторий
2. Ознакомься с документацией в `/docs`
3. Попробуй `cli-implementations/js/crystallizationManager.ts` для добавления своих задач
4. Оцени уровень “кристаллизации” через CLI и бейджи
5. Запусти `npm run crystal:avg` и обнови процент в бейдже README
6. Для новых проектов используй `npm run crystal:init` внутри нужного репозитория
7. Выполни `npm run crystal:list-funcs` чтобы найти наиболее часто встречающиеся функции в кодовой базе (результат сохраняется в `most_common_function.txt`)

## 🔄 Updating the Crystallization Badge

Чтобы отображать актуальный уровень кристаллизации, запусти `npm run crystal:avg`. Полученное значение подставь в ссылку на бейдж в начале README или автоматизируй этот шаг через CI.

## 🧩 Кристаллизация других репозиториев

Запусти `npm run crystal:init` в корне любого проекта, чтобы создать базовый файл `crystallization.json` и начать отслеживать уровень зрелости задач.


---

## 🏷️ Author & License

**Author & Inventor:** Krishna Narayana  
**License:** MIT

---

## 🌍 English summary

> “Crystallization in Development” is a novel, iterative methodology for tracking and evolving tasks and features to their mature state, measured by custom KPIs and contemporary best practices. The system visualizes the journey from raw idea to a crystallized solution.

---
