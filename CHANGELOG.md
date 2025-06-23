# Changelog

## [0.1.0] - 2025-06-01

### Added

- Initial project structure and CLI

## [0.1.1] - 2025-06-23

### Added

- Documentation for updating the crystallization badge

### Changed

- README quick start instructions

## [0.2.0] - 2025-07-01

### Added

- Folder `cli-implementations/` with TypeScript and Python CLI
- New roadmap items for cross-language support
- Basic guidelines for adding other languages

## [0.2.1] - 2025-07-12

### Added

- Experimental Bash CLI skeleton
- Documented current crystallization level in README

## [0.3.0] - 2025-08-01

### Added

- Diamond KPI concept with threshold checking
- Updated TypeScript CLI to mark tasks as `diamond`
- Expanded `crystallization.json` with metric values and thresholds

## [0.3.1] - 2025-08-05

### Added

- `crystal:init` command to bootstrap crystallization in any repo

## [0.3.2] - 2025-08-15

### Added

- `CRYSTALLIZATION_PROTOCOL.md` with the first public specification

## [0.3.3] - 2025-08-25

### Added

- Example 10-iteration improvement loop with KPI tracking in `crystallization.json`
- Updated README badge to 83%

## [0.3.4] - 2025-08-30

### Added

- Команда `list-funcs` для поиска функций в проекте и сохранения самой частой в `most_common_function.txt`

## [0.3.5] - 2025-09-10

### Added

- Скрипт `crystal:update-badge` для автоматического обновления бейджа в README

## [0.3.6] - 2025-09-20

### Added

- `crystal:sync` script to synchronize `crystallization.json` with `.vscode` for IDE integration

## [0.3.7] - 2025-09-23

### Added

- ESLint and Prettier configuration
- Husky hooks with lint-staged and commitlint

## [0.3.8] - 2025-10-01

### Added

- Инструкция по интеграции методологии в другие репозитории и IDE

## [0.3.9] - 2025-10-15

### Changed

- `list-funcs` command reworked to scan files once, improving performance

## [0.3.10] - 2025-10-20

### Fixed

- Regenerated `package-lock.json` to include dev dependencies so `npm ci` works consistently

## [0.3.11] - 2025-10-28

### Added

- `list-diamonds` command in JS and Python CLIs to show all diamond tasks

## [0.3.12] - 2025-10-30

### Added

- `future_recommendations_ru.md` with long-term development ideas
- Expanded `ROADMAP.md` with tasks from recommendations
- Added Future Development section in README

## [0.3.13] - 2025-10-31

### Changed

- Repository crystallization level increased to 100%
- README badge and summary updated automatically
- Added roadmap milestone for reaching 95% crystallization

## [0.3.14] - 2025-11-01

### Added

- Caching for `list-funcs` command with single-pass scanning
- Basic unit test for `calcAverage`

### Changed

- ROADMAP updated to reflect completed tasks

## [0.3.15] - 2025-11-02

### Added

- `list-tasks` command in JS and Python CLIs to show all tasks with statuses

## [0.3.16] - 2025-11-03

### Added

- `CORE.md` с описанием когнитивного ядра и архитектуры
- Раздел "Cognitive Core" в README

### Changed

- ROADMAP дополнен задачами по выделению ядра и API
- AGENTS обновлен с упоминанием `CORE.md`

## [0.3.17] - 2025-11-04

### Added

- Поддержка атрибутов `complexity` и `tags` для задач
- Команда `update-attrs` в CLI для обновления этих атрибутов
- Примеры заполнения в `crystallization.json`

### Changed

- ROADMAP отмечает выполненную задачу по сложности и тегам
- README дополнен описанием новых опций CLI

## [0.3.18] - 2025-11-05

### Added

- Summary of yearly action plan from `CORE.md` in README and Roadmap
- AGENTS updated with reference to annual plan

## [0.3.19] - 2025-11-06

### Added

- GitHub Actions workflow `update-badge.yml` to refresh the crystallization badge weekly

### Changed

- ROADMAP item for badge automation marked as complete
- README mentions automatic badge updates via GitHub Actions
- AGENTS updated with reference to new workflow

## [0.3.20] - 2025-11-07

### Added

- `CONTRIBUTING.md` with guidelines for adding CLI implementations in other languages
- README section linking to the new contributing guide
- Roadmap item for the contribution guide marked as complete
- AGENTS mention `CONTRIBUTING.md`

## [0.3.21] - 2025-11-08

### Added

- `stats` command in JS and Python CLIs to show task statistics

### Changed

- ROADMAP item for analytics commands marked as complete
- README updated with new command usage
- AGENTS mention new analytics capability

## [0.3.22] - 2025-11-09

### Added

- Shared core library at `src/core.ts`

### Changed

- JS CLI refactored to use the core module
- ROADMAP items for core packaging and CLI refactor marked as complete

## [0.3.23] - 2025-11-10

### Added

- Helper functions `addTask` and `updateAttributes` in `src/core.ts`

### Changed

- JS CLI now uses new helpers for task management
- ROADMAP updated with completed item
- README mentions new core helpers

## [0.3.24] - 2025-11-11

### Added

- Goal tracking with `goal_percentage` in `crystallization.json`
- CLI command `goal` to show or set crystallization target

### Changed

- ROADMAP item for goal tracking marked as complete
- README and AGENTS updated with new command and field

## [0.3.25] - 2025-11-12

### Added

- Documentation `docs/github_api_usage.md` explaining basic GitHub API operations
- Roadmap item for GitHub API integration
- README section "GitHub API Usage" linking to the new doc

## [0.3.26] - 2025-11-13

### Added

- Расширенное руководство `docs/github_api_usage.md` по интеграции GitHub API в сторонние проекты

### Changed

- Обновлён `ROADMAP.md` с выполненным пунктом исследований API и добавлена новая задача
- README раздел «GitHub API Usage» дополнен ссылкой на новое руководство
- AGENTS.md отражает наличие расширенной документации
