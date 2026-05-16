# Weather App 2 - Handoff

Use this file as the handoff note between Codex, Claude, and any future agent.

## Current State

- Repository: `leprikon1981/weather-app-2`
- Main file: `index.html`
- App type: static single-page HTML/CSS/JS app
- Language: Russian UI
- Build/test command: none
- Run method: open `index.html` in a browser

## Last Agent Notes

### 2026-05-16 - Codex

Added collaboration documentation:
- `AGENTS.md` with project rules and coding guidelines;
- `HANDOFF.md` with current state and handoff process.

Tested:
- `git status --short` before editing: clean.
- File list before editing: only `index.html`.

Not tested:
- Browser behavior, because only documentation files were added.

## Next Suggested Task

Recommended next feature:
- add browser geolocation button: "Погода рядом со мной";
- then add favorite cities saved in `localStorage`;
- then polish mobile layout.

## Open Questions

- Should the project stay as a single `index.html`, or should CSS and JS be split into separate files?
- Should commits be pushed directly to `master`, or should each agent work on a branch and open a pull request?

## Handoff Template

When finishing a work session, append a new note:

```markdown
### YYYY-MM-DD - Agent Name

Changed:
- ...

Tested:
- ...

Known issues:
- ...

Next:
- ...
```

