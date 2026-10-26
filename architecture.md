# Architecture

## Build Shape

Browser-local tool. The user adds, moves and removes payments, and the page remembers them after a refresh in the same browser.

## Stack Decision

- Vite + React (single-page app).
- Plain CSS (no Tailwind, no CSS library).
- No backend, no auth, no database, no payments processing, no live API.
- Browser `localStorage` for persistence.
- No packages beyond what the Vite React template installs.

## Structure Overview

- One page, three stacked areas: a header, a hero (the lowest end-of-week balance), and a week strip above a payment list.
- The starting-balance setting sits below the header.
- The payment list holds one row per payment and an add form at the top of the list.
- The eight week blocks render in order left to right, wrapping on a phone.

## Component Map

- `App` — holds all state (`startingBalance`, `payments`), loads and saves `localStorage`, computes the eight week balances and the hero figure.
- `Header` — app name, one-line purpose, `Sample data` in small muted text.
- `Hero` — the lowest end-of-week balance with its week label, one line under it, and the week-8 end balance line.
- `BalanceSetting` — the bank balance today input.
- `WeekStrip` — eight week blocks; a negative week gets the warning colour and the word `Short`.
- `PaymentForm` — add a payment: name, amount, In/Out, week 1 to 8 or every week.
- `PaymentList` / `PaymentRow` — name, `In` or `Out`, amount on the right, week label or `Every week from week 1`, earlier/later buttons for a one-off payment, then Remove.
- `formatMoney` — a small helper: sen and a thousands comma, negative as `-RM650.00`.

## Data / State Model

One data type: **Payment** (5 fields).

- `id`: string, unique.
- `name`: string.
- `amount`: number, ringgit value (e.g. 1200 for RM1,200.00).
- `direction`: `"in"` or `"out"`.
- `week`: integer 1 to 8.
- `everyWeek`: boolean (optional). When true, the payment repeats from `week` through week 8.

Plus one setting:

- `startingBalance`: number, ringgit value (sample 3000 for RM3,000.00).

Derived (never stored): the end balance of each week and the lowest week.

Rule: end balance of week `w` = end balance of week `w-1` (or `startingBalance` for week 1) + money in during week `w` − money out during week `w`. A one-off payment lands in its single week; an `everyWeek` payment lands in every week from its week to week 8.

Sample data (illustrative, not real):

1. Walk-in sales — in, RM1,200.00, every week from week 1.
2. Supplier for flour, butter and eggs — out, RM1,000.00, every week from week 1.
3. New oven deposit — out, RM1,250.00, week 2.
4. Shop rent — out, RM1,500.00, week 4.
5. Helper's pay — out, RM1,700.00, week 4.
6. Office order from Syarikat Contoh — in, RM2,400.00, week 5.
7. Helper's pay — out, RM1,700.00, week 8.

Worked weeks 1 to 8: RM3,200.00, RM2,150.00, RM2,350.00, -RM650.00, RM1,950.00, RM2,150.00, RM2,350.00, RM850.00. Week 4 is Short. Hero: -RM650.00 (week 4), and RM850.00 at the end of week 8.

## Storage Logic

- Key: `cashflow-8-weeks`.
- Value: one JSON object `{ startingBalance: number, payments: Payment[] }`.
- On load: read the key; if missing or unreadable, seed the sample data.
- On any change (add, remove, move, starting-balance edit): write the whole object back.
- A refresh must restore the same payments and starting balance in the same browser.

## User Flow

1. Page opens with the sample business and its eight weeks.
2. The user adds a payment (name, amount, In/Out, week or every week).
3. The eight week balances and the hero re-compute immediately.
4. The user moves a one-off payment earlier or later, or removes a payment; the figures update.
5. The user edits the bank balance today; the figures update.
6. The user refreshes; the payments and starting balance are still there.

## File Expectations

- `index.html` — title set to the project name.
- `src/App.jsx` — state, storage, week maths, layout.
- `src/index.css` — base styles and the visual recipe styles.
- `src/main.jsx` — unchanged entry point.
- Planning files and `prompts/`, `templates/`, `work-cards/` stay in the same folder and must not be deleted.

## Constraints

- One data type only (payments) plus one setting (starting balance).
- No more than 5 fields per payment.
- Money shows sen and a thousands comma; negative reads `-RM650.00`.
- A one-off payment never moves before week 1 or after week 8.
- An every-week payment does not move.
- Works at phone width.

## Technical Non-Goals

- No backend, auth/login, database, payments processing, live API or secret keys.
- No multi-user sync.
- No loans, interest or overdrafts.
- No advice, ratings or recommendations.
- No multiple data tables or uploads.

## Verification Notes

- Sample data must reproduce the worked weeks exactly.
- Add → refresh → payment still present (persistence proof).
- Move a one-off payment and confirm only that payment's week changes.
- Remove a payment and confirm the weeks re-compute.
- Week 4 shows the warning colour and `Short`.
- Hero shows -RM650.00 (week 4) and `RM850.00 in the bank at the end of week 8.`
- Empty state: with no payments, the page shows week 1 ending at the starting balance and a clear empty-list message.