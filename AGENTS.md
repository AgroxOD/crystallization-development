# Repository Guidelines

- Update `ROADMAP.md`, `README.md`, `CHANGELOG.md`, and this `AGENTS.md` with each pull request.
- Use `npm run crystal:avg` to verify crystallization level when possible.
- Keep the badge in `README.md` up to date using the result of `npm run crystal:avg`.
- Encourage new CLI implementations in `cli-implementations/` for other languages.
- A minimal Bash script is available as an experimental example.
- New command `list-funcs` scans repository functions for 50 iterations and stores the most common result in `most_common_function.txt`.
- Diamond rule: tasks reaching all KPI thresholds get `diamond` status.
- Use `crystal:init` to "crystallize" any repository with a starter `crystallization.json`.
- Refer to `CRYSTALLIZATION_PROTOCOL.md` for the official specification.
- This PR demonstrates a 10-iteration improvement loop with KPI tracking.
