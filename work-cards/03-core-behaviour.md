# Work Card 03: Core Behaviour

## Goal

Work out every figure in code from the sample data, and make add, move and remove work in memory.

## Inputs

- `architecture.md` (week maths, data model, component map)
- `build-blueprint.md` (sample data and worked weeks)
- `design.md` (hero, week tiles, row layout)

## Files likely touched

- `src/App.jsx`
- `src/index.css` (small additions only)

## Instructions for the coding agent

1. Hold `startingBalance` and `payments` in `App` state. Move the sample data from typed markup into this state.
2. Work out in code, never by hand:
   - each week's end balance: end of week `w` = end of week `w-1` (or `startingBalance` for week 1) + money in that week − money out that week;
   - the hero figure: the lowest end-of-week balance across weeks 1–8, labelled with its week (the first such week if two are equal);
   - the week-8 end balance for the line under the hero.
3. Format all money with `formatMoney`: sen always shown, comma for thousands, negative as `-RM650.00`.
4. Hero text exactly as the problem says:
   - below zero: the figure in the warning colour, then `Week 4 goes short. Move a payment to fix it.` (week number follows the actual lowest week);
   - zero or above: `Never below zero. You make it through 8 weeks.`
   - under either, always: `RM850.00 in the bank at the end of week 8.` (the value follows the actual week-8 balance).
5. Add the interactions, in memory only:
   - add a payment: name, amount, In or Out, a week 1–8 picker or an `Every week` tick (an every-week payment repeats from its week to week 8);
   - remove a payment;
   - move a one-off payment one week earlier or later, never before week 1 or after week 8; disable the button at the limits; an every-week payment shows no move buttons.
6. Recompute the weeks and the hero after every change.
7. Keep the row's own visual bar from the recipe (that payment's amount against the largest single payment) worked out from the same rows; invent no other number.

## What not to do

- Do not add `localStorage` yet: a refresh may lose changes until Card 04, and that is expected.
- Do not type any worked figure into the markup; every figure comes from the week maths in code.
- Do not add loans, interest, overdrafts, advice, ratings or recommendations.
- Do not add a backend, database, API or any online call.
- No emoji, no new library.

## Done when

- The sample data reproduces weeks ending RM3,200.00, RM2,150.00, RM2,350.00, -RM650.00, RM1,950.00, RM2,150.00, RM2,350.00, RM850.00, with week 4 in the warning colour and `Short`.
- The hero shows -RM650.00 labelled week 4, then `Week 4 goes short. Move a payment to fix it.`, then `RM850.00 in the bank at the end of week 8.`
- Adding, removing and moving a payment update all the figures immediately.

## Verification steps

- Confirm the eight sample week balances match the worked list exactly.
- Confirm the hero figure, its week label and both hero lines match the problem text.
- Add a payment (for example out, RM500.00, week 4) and confirm week 4 and every later week shift down by RM500.00, and the hero updates.
- Move a one-off payment earlier and later and confirm only that payment's week changes; confirm the buttons are disabled at week 1 and week 8.
- Remove a payment and confirm the figures recompute; confirm an every-week payment has no move buttons.
- Design check: hero, week tiles, payment rows, In/Out word, warning colour plus `Short`, tabular numbers and empty-list behaviour follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Confirm the eight weeks end at RM3,200.00, RM2,150.00, RM2,350.00, -RM650.00, RM1,950.00, RM2,150.00, RM2,350.00, RM850.00, and week 4 shows `Short`.
- Confirm the hero shows -RM650.00 (week 4), the line `Week 4 goes short. Move a payment to fix it.`, and `RM850.00 in the bank at the end of week 8.`
- Add a payment, move a one-off payment one week, then remove a payment, and confirm all the figures update each time.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the worked figures cannot be reproduced from the sample data, stop and fix the week maths before any polish; do not type values in by hand to match.

## Status
Done — week maths, hero, add/move/remove all in memory; sample weeks match exactly.