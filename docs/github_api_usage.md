# Using the GitHub API

Этот документ кратко описывает, что можно сделать через GitHub API. Он поможет автоматизировать обновление данных и интеграцию методологии кристаллизации с GitHub.

## Основные возможности

- Управление репозиториями: создание и обновление репозиториев, получение файлов.
- Работа с issues и pull requests: создание, комментирование, закрытие.
- Доступ к данным CI/CD: статусы проверок, результаты workflow.
- Автоматизация документации: обновление README или других файлов через API.
- Получение статистики: список коммитов, участников, веток и т.д.

## Пример запроса

```bash
curl -H "Authorization: token <TOKEN>" https://api.github.com/repos/<owner>/<repo>/issues
```

### Получение списка коммитов

Если нужно просто получить историю коммитов, можно обойтись без авторизации и выполнить команду:

```bash
curl https://api.github.com/repos/AgroxOD/crystallization-development/commits
```

Ответ придёт в формате JSON и будет содержать массив объектов commit.

Токен можно создать в настройках GitHub (Personal Access Token). Через API можно, например, автоматически создавать issue при обнаружении низкого уровня кристаллизации или обновлять status бейджа.

Подробнее см. официальную документацию GitHub: <https://docs.github.com/en/rest>

## Интеграция в другие проекты

Для подключения методологии к стороннему репозиторию можно использовать GitHub API в связке с существующими CLI-командами.

1. Сгенерируйте Personal Access Token и сохраните его в переменной `GITHUB_TOKEN`. При необходимости создайте `.env` через `./scripts/create_env_from_exports.sh exports.sh`.
2. Подключите библиотеку [Octokit](https://github.com/octokit/octokit.js) или аналогичную на вашем языке разработки.
3. В коде вашего проекта используйте API для автоматического создания issues, комментариев и обновления файлов `crystallization.json`.
4. Настройте CI (например, GitHub Actions), чтобы периодически запускать `npm run crystal:update-badge` и отправлять отчёты.
5. Используйте `npm run crystal:auto-update` для обновления репозиториев с устаревшим `crystallization.json`.
6. При снижении показателей кристаллизации можно автоматически создавать issue с описанием проблемы.

Такой подход позволит отслеживать состояние проекта и интегрировать кристаллизацию в любой рабочий процесс.
