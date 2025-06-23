# Crystallization Development Methodology

![Crystallization Level](https://img.shields.io/badge/crystallization-94%25-brightgreen?style=for-the-badge)

> **Author:** Krishna Narayana (omkrishna.narayana@gmail.com)  
> June 2025

---

## 🚀 What is Crystallization in Development?

**Crystallization** — новая авторская методология управления задачами и улучшениями в разработке, построенная на итеративной обработке и отслеживании степени зрелости решения.  
Каждая задача проходит через этапы "кристаллизации", на каждом из которых оценивается её совершенство по KPI, дорабатывается и фиксируется в истории.

### Основные идеи:
- **Итерационный цикл:** Задачи проходят через этапы Backlog → In Progress → Review → Improvement → Crystallized.
- **KPI-оценка:** На каждом этапе фиксируется уровень зрелости ("crystallization level") по выбранным метрикам.
- **Рефлексия и самообновление ядра:** Принципы улучшения и KPI могут эволюционировать вместе с практикой.
- **Визуализация:** Система показывает прогресс к “кристаллу” — эталонному состоянию задачи/проекта.

---

## 📂 Repo Structure

- `crystallization.json` — пример структуры хранения
- `crystallizationManager.ts` — инструмент для работы с задачами и уровнем кристаллизации
- `.github/workflows/` — автоматизация проверки
- `docs/` — подробное описание концепции и примеры

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
3. Попробуй `crystallizationManager.ts` для добавления своих задач
4. Оцени уровень “кристаллизации” через CLI и бейджи

---

## 🏷️ Author & License

**Author & Inventor:** Krishna Narayana  
**License:** MIT

---

## 🌍 English summary

> “Crystallization in Development” is a novel, iterative methodology for tracking and evolving tasks and features to their mature state, measured by custom KPIs and contemporary best practices. The system visualizes the journey from raw idea to a crystallized solution.

---
\nRepository initialized with full file structure.
