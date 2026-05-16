# Weather App 2 - Agent Guidelines

This project may be edited by different AI agents in sequence. Read this file before changing code.

## Project Goal

Weather App 2 is a single-page Russian-language weather application using public APIs without API keys.

Current features:
- city search and suggestions via Open-Meteo geocoding;
- current weather and 7-day forecast via Open-Meteo forecast API;
- city photo banner via Wikipedia/Wikimedia;
- local clock for the selected location;
- currency rates and calculator via open.er-api.com.

## Technical Shape

- The app is currently a static site in `index.html`.
- There is no build step, package manager, framework, or backend.
- Keep changes compatible with opening `index.html` directly in a browser unless a task explicitly changes the architecture.
- Prefer small, focused edits over large rewrites.

## Collaboration Rules

1. Before starting, read `HANDOFF.md` and `git status`.
2. Preserve work already done by another agent.
3. Do not rewrite the whole app unless the user explicitly asks.
4. Keep UI text in Russian unless the user asks otherwise.
5. Keep APIs keyless/free where possible.
6. After finishing, update `HANDOFF.md` with:
   - what changed;
   - what was tested;
   - what remains;
   - any known risks or bugs.
7. Make changes in small commits when committing is requested.

## Code Style

- Existing code is plain HTML, CSS, and JavaScript in one file.
- Use clear function names and simple browser APIs.
- Avoid adding dependencies unless the benefit is obvious.
- Keep CSS responsive for mobile and desktop.
- Avoid inline styles in newly added UI unless matching existing nearby code is simpler.
- Escape or safely assign user/API text where practical; prefer `textContent` for plain text.

## Suggested Roadmap

Good next improvements:
- add "weather near me" with browser geolocation;
- add favorite cities saved in `localStorage`;
- improve mobile layout and accessibility;
- add hourly forecast;
- split `index.html` into `styles.css` and `app.js` if the file becomes hard to maintain;
- add a small README with usage and API sources.

