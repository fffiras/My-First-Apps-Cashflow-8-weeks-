# Build Status

## Project

- Course: AI Builder Foundations (Spec, Build, Check; four work cards; no GitHub, Vercel or deploy)
- Name: Cashflow 8 Weeks
- Build shape: Browser-local tool
- Shape confirmation: Confirmed
- Current KDBM Lite stage: Check
- Current phase: Cards built — check in the browser
- Current work card: `work-cards/04-save-or-polish.md` (done)

## Completed planning phases

- [x] Project Brief
- [x] Architecture
- [x] Design
- [x] Build Blueprint
- [x] Work Cards 01 to 04

## Completed work cards

- [x] 00 Setup Gate
- [x] 01 Project skeleton
- [x] 02 First visible version
- [x] 03 Core behaviour
- [x] 04 Save or polish

## In progress

- None. Cards built; waiting for the learner's browser check.

## Blockers

- None recorded yet

## Decisions made

- Build type: Browser-local tool
- Build shape: Browser-local tool (confirmed)
- Project name: Cashflow 8 Weeks
- Target user (learner's own answer 2): a Malaysian small business owner opening a pasta shop
- Stack: Vite 8 + React 19, plain CSS, localStorage
- Design: learner's own pick — red and white pasta-house theme; coach translation of Fallback 3 (Playful student dashboard). Accent `#C1272D`, cream background `#FBF3EA`, warning `#9E1B20`
- Storage: localStorage key `cashflow-8-weeks`
- Deployment target: None (Ship is taught in Build & Ship)

## Last verified state

- Coding workspace: Ready
- File read/write access: Ready
- Terminal access: Ready
- Node: v24.22.1 (pass)
- npm: 11.19.1 (pass)
- Git: 2.56.0.windows.3 (pass)
- GitHub account: Not needed tonight
- Vercel account: Not needed tonight
- KrackedDevs account: Done on the school page (not asked)
- Localhost: Running at http://localhost:5173/
- Build: `npm run build` passes; `npm run lint` clean

## Verification done

- Sample weeks reproduce exactly: RM3,200.00, RM2,150.00, RM2,350.00, -RM650.00, RM1,950.00, RM2,150.00, RM2,350.00, RM850.00.
- Hero shows -RM650.00 labelled week 4, then `Week 4 goes short. Move a payment to fix it.`, then `RM850.00 in the bank at the end of week 8.`
- Week 4 shows the warning colour and `Short`.
- Add, move (earlier/later, clamped to week 1–8) and remove recompute all figures; every-week payments do not move.
- `localStorage` key `cashflow-8-weeks` saves `{ startingBalance, payments }`; refresh restores it; empty state shows with no payments.
- `npm run build` passes; `npm run lint` reports no warnings.

## Note on this session

- The learner asked for everything to be finished without further questions, so the coach ran the Build phase end to end. The work cards are saved for the record and their browser tests above are ready to run.

## Next instruction for AI

None. Planning and the four cards are complete. For changes, use the Improve phase one small change at a time; do not add sign-in, a database, payments, secrets or anything online.

## How I would publish this later (not tonight)

Publishing is taught in Build & Ship, the paid cohort. Nothing here is done tonight; this is only a note for later.

- Build proof: `npm run build` already produces a `dist/` folder.
- Git: initialise a repo in this folder, add a `.gitignore` for `node_modules/` and `dist/`, then commit. GitHub account needed.
- GitHub: create a repository and push the branch.
- Vercel: import that GitHub repository as a Vite project (build `npm run build`, output `dist`). No environment variables and no secrets are needed: this app only uses browser `localStorage`.
- Reminder: the app keeps data in one browser only. Publishing does not change that; it will not sync between devices.