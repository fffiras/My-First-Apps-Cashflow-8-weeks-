# Work Card 01: Project Skeleton

## Goal

Create the Vite + React app inside this project folder, with the app name in the header and the goal line under it. Nothing else on the page yet.

## Inputs

- `project-brief.md` (name: Cashflow 8 Weeks)
- `build-blueprint.md`
- `design.md`
- The rule line under the title: `Keep every week above zero.`

## Files likely touched

- `package.json`, `index.html` (created by the scaffolder, then edited)
- `src/App.jsx`, `src/index.css`, `src/main.jsx`
- Deleted template demo files: `src/App.css`, `src/assets/`, `public/icons.svg`

## Instructions for the coding agent

1. Create the app in a temporary subfolder, without touching the existing files:
   `npx -y create-vite@9.2.1 app-temp --template react --no-interactive`
2. Ignore the scaffolder's "cd app-temp" hint. Move everything inside `app-temp`, hidden files included, up into this project folder, next to `START_HERE.md`. Then delete the empty `app-temp` folder.
3. Set the `<title>` in `index.html` to `Cashflow 8 Weeks`, and the `"name"` in `package.json` to `cashflow-8-weeks`, not `app-temp`.
4. Clear the template's demo before building anything:
   - replace all of `src/index.css` with this project's own base styles from `design.md` (no `#root` width or border, no centred text, no `prefers-color-scheme` dark colours);
   - delete `src/App.css`;
   - replace everything in `src/App.jsx`, imports included, with the app's header and one line under it;
   - delete the `src/assets` folder and `public/icons.svg`.
   - Keep `public/favicon.svg`: `index.html` uses it.
   Nothing from the template's look stays on the page.
5. The page shows only: the header `Cashflow 8 Weeks`, the goal line `Keep every week above zero.` under the title, and the words `Sample data` in small muted text. No payments, no weeks, no hero yet.
6. Run `npm install`, then `npm run dev`.

## What not to do

- Never run a scaffolder with `--overwrite`, and never choose "Remove existing files": that empties this folder and deletes the planning files, `prompts/`, `templates/` and `work-cards/`.
- Do not delete or edit any `.md` file in this folder.
- Do not add the payment list, the weeks, the hero or any behaviour yet.
- Do not install any package beyond what the Vite React template installs.
- No emoji, no new library.

## Done when

- `npm run dev` starts and the app loads on localhost.
- The header reads `Cashflow 8 Weeks`, with `Keep every week above zero.` and `Sample data` under it.
- The template's demo look is fully gone, and every planning file is still in the folder.

## Verification steps

- Run `npm run dev` and open the localhost URL it prints.
- Check `index.html` title and `package.json` name.
- Confirm `src/App.css`, `src/assets/` and `public/icons.svg` are gone, and `public/favicon.svg` remains.
- Confirm `START_HERE.md`, `prompts/`, `templates/`, `work-cards/` and the planning `.md` files are all still present.
- Design check: header and base background follow `design.md` mood and colour rules; no box around the header.

## Localhost test before continuing

After this card, the learner should test:

- Run `npm run dev` and confirm the app shell loads with the header `Cashflow 8 Weeks`.
- Confirm the goal line `Keep every week above zero.` and the small `Sample data` text are visible.
- Confirm the planning files (`START_HERE.md`, `prompts/`, `templates/`, `work-cards/`) are still in the folder.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the scaffold empties the folder or the planning files are missing, stop immediately and restore them before any further step. If `npm run dev` will not start within five minutes, ask a trainer.

## Status
Done — app scaffolded into this folder, header and goal line render, demo cleared.