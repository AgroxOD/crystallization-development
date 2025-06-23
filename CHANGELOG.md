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
