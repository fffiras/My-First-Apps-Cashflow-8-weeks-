# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`
- This blueprint is the builder-ready spec; `build-status.md` tracks progress; `work-cards/*.md` hold the steps.

## Project Identity

- Name: **Cashflow 8 Weeks**
- One-liner: A browser cash-flow game that shows a small business's bank balance at the end of each of the next 8 weeks.
- Goal line that sits under the page title: `Keep every week above zero.`

## Build Shape

Browser-local tool. One data type (payments) plus one setting (starting balance), saved in `localStorage` and still there after a refresh in the same browser.

## Version-One Promise

The page opens with the sample home bakery (RM3,000.00 today, 7 payments), shows each of the 8 weeks' end balance, the hero lowest week, and lets the owner add, move and remove payments — with the change kept after a refresh.

## Scope Lock

### Now

- One payment list: name, amount, In or Out, week 1 to 8, or `every week` from that week to week 8.
- Add a payment; remove a payment.
- Move a one-off payment one week earlier or later (never before week 1 or after week 8); an every-week payment does not move.
- One setting: the bank balance today (sample RM3,000.00).
- Eight week blocks: `Week 4` and that week's end balance; a week below zero shows the warning colour and `Short`.
- Hero: the lowest end-of-week balance labelled with its week (the first such week if two are equal).
- Money shows sen and a comma for thousands; a negative amount reads `-RM650.00`.
- Save payments and the starting balance in the browser so they survive refresh.

### Later

- More than one business.
- Editing a payment's amount in place.
- Sorting or filtering the payment list.

### Never

- User accounts, login, multi-user sync.
- Processing payments, a database, a backend, live data, any online service.
- Loans, interest, overdrafts.
- Advice, ratings or recommendations on what the owner should do.
- Real company names, bank details, real figures, or any real person's name, phone number, IC number, account number or balance.

## Architecture Summary

- Vite + React single-page app, plain CSS, no extra packages.
- One page: header, hero, week strip, starting-balance setting, payment list with add form at the top.
- `App` holds `startingBalance` and `payments`, loads/saves `localStorage`, computes the weeks and the hero.
- Components: `Header`, `Hero`, `WeekStrip`, `BalanceSetting`, `PaymentForm`, `PaymentList`/`PaymentRow`, helper `formatMoney`.
- Derived, never stored: each week's end balance and the lowest week.

## Data / State / Storage Rules

- Payment (5 fields): `id` string, `name` string, `amount` number (ringgit), `direction` `"in"`/`"out"`, `week` integer 1–8, `everyWeek` boolean.
- Setting: `startingBalance` number (sample 3000).
- Week maths: end balance of week `w` = end balance of week `w-1` (or `startingBalance` for week 1) + money in during week `w` − money out during week `w`. A one-off payment lands in its single week; an `everyWeek` payment lands in every week from its week to week 8.
- Hero: the lowest end-of-week balance across weeks 1–8, labelled with its week (the first such week if two are equal).
- Storage key: `cashflow-8-weeks`; value is one JSON object `{ startingBalance, payments }`; missing or unreadable data re-seeds the sample.
- Sample data (illustrative, not real):
  1. Walk-in sales — in, RM1,200.00, every week from week 1.
  2. Supplier for flour, butter and eggs — out, RM1,000.00, every week from week 1.
  3. New oven deposit — out, RM1,250.00, week 2.
  4. Shop rent — out, RM1,500.00, week 4.
  5. Helper's pay — out, RM1,700.00, week 4.
  6. Office order from Syarikat Contoh — in, RM2,400.00, week 5.
  7. Helper's pay — out, RM1,700.00, week 8.
- Worked weeks 1 to 8: RM3,200.00, RM2,150.00, RM2,350.00, -RM650.00, RM1,950.00, RM2,150.00, RM2,350.00, RM850.00. Week 4 is Short. Hero: -RM650.00 (week 4). Week-8 line: `RM850.00 in the bank at the end of week 8.`

## Design Direction Summary

- Borrow: a friendly, rounded dashboard feel with the main figure up top; rows as a thin-lined list with amounts on the right; week tiles that wrap on a phone; tabular numbers; one strong accent.
- Do not copy: any real brand, logo, colour scheme, illustration, mascot, icon set, copy, photo, testimonial or layout from any real product, restaurant or site.
- Mood: tomato red `#C1272D` on warm cream `#FBF3EA`, a pasta-house menu feel that reads fast on a phone.
- Warning colour for a short week: `#9E1B20` with near-white text, always with the word `Short`.
- Five-colour row palette: tomato `#C1272D`, basil `#2F6B3A`, olive amber `#9A6206`, parmesan `#7A5A2E`, aubergine `#6E3A82`.
- The `## Visual recipe` in `design.md` fixes the surfaces, rows, icons, motion and width and wins where it differs from the mood.

## Implementation Rules

- One page, plain CSS in `src/index.css`, inline SVG only for any small icon, no emoji, no new library.
- Tabular numbers on every money figure; emphasis by size and weight, not boxes or pills.
- `formatMoney`: sen always shown, comma for thousands, negative as `-RM650.00`.
- Earlier/later buttons move exactly one week and are disabled at week 1 (earlier) and week 8 (later); an every-week payment shows no move buttons.
- Show figures only; never advise, rate or recommend; never work out interest.
- Works at phone width; week tiles wrap; row controls at least 40px tall.

## File and Folder Expectations

- `index.html` — `<title>` set to `Cashflow 8 Weeks`.
- `package.json` — `"name"` set to `cashflow-8-weeks`.
- `src/App.jsx` — state, storage, week maths, layout.
- `src/index.css` — base styles plus the visual recipe.
- `src/main.jsx` — unchanged entry point.
- Planning files, `prompts/`, `templates/`, `work-cards/` stay in this folder and must never be deleted.

## Work Card Plan

1. **01 Project skeleton** — the Vite + React app in this folder, header `Cashflow 8 Weeks` and the line `Keep every week above zero.` under the title, template demo cleared.
2. **02 First visible version** — the layout and the `## Visual recipe` from `design.md` (header, hero, eight week tiles, payment rows, colour, surfaces, width, type) with the sample data on screen; nothing interactive yet, and any figure that Card 03 works out shows a placeholder until then.
3. **03 Core behaviour** — add a payment, move a one-off payment earlier/later, remove a payment, all in memory; the 8 week balances and the hero recompute in code from the sample data; a refresh may lose changes until Card 04.
4. **04 Save or polish** — save with `localStorage`, the refresh proof, the empty state, phone width, bars growing from 0 on load, and a final pass on every line of the `## Visual recipe`.

## Review Mirror

Optional tonight: `prompts/07-review-mirror.md`, not a work card.

## Proof Ladder

The app runs on localhost, with the sample figures correct and the owner's own payments working, improved their way. No GitHub and no Vercel tonight.

## 60-Second Explanation Template

- I built **Cashflow 8 Weeks**, a browser-local cash-flow game for a small business owner.
- It opens with a sample business: RM3,000.00 in the bank today and 7 payments.
- It shows the bank balance at the end of each of the next 8 weeks, and the lowest week in the hero.
- In my sample, week 4 goes short at -RM650.00, and week 8 ends at RM850.00.
- The owner can add, move and remove payments, and the page keeps them after a refresh.
- It shows figures only; the owner decides what to do.

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, `design.md`, and the current work card before editing.
- Implement only the current work card; do not jump ahead; stop after verification.
- Update `build-status.md` after each work card.
- Browser-local tool guardrails: one data type, real sample item, add, update/move, delete, `localStorage` save, refresh persistence, empty-state and mobile checks.
- Never add a backend, auth/login, a database, payments processing, a live API, secret keys, uploads, admin systems or multi-user sync.
- No action the brief does not have (no pay/apply/add beyond adding a payment); this page's job is a figure, so the lowest week is the most prominent thing.
- For this money brief: work out and show figures only (sums, counts, what is left); never advise, rate or recommend, and never work out interest.
- Do not add secrets or keys to code; use made-up sample data only.
- Do not invent claims, testimonials, logos, or real numbers.
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping.