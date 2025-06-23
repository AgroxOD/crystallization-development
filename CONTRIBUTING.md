# Contributing Guide

We welcome contributions to **Crystallization Development**! This short guide explains how to add new features and CLI implementations in other languages.

## Setting Up

1. Run `npm install` to install dependencies.
2. If your tool requires environment variables, generate a `.env` file from an `exports.sh` file using:
   ```bash
   ./scripts/create_env_from_exports.sh exports.sh
   ```
3. Use `npm run crystal:init` in a new repository to create a starter `crystallization.json`.

## CLI Implementations

- Use `crystallization.json` as the canonical data file.
- Match the commands provided in the JS and Python reference CLIs (`add-task`, `update-kpi`, `update-attrs`, `level`, `update-core`, `average`, `list-diamonds`, `list-funcs`, `list-tasks`, `sync`).
- Place new implementations under `cli-implementations/<your-language>`.
- Provide simple usage instructions and tests.

## Development Workflow

- Run `npm run lint`, `npm run format`, and `npm test` before committing.
- Update the crystallization badge with `npm run crystal:update-badge`.
- Follow the [Repository Guidelines](AGENTS.md) for commit style and other conventions.

Happy crystallizing!
