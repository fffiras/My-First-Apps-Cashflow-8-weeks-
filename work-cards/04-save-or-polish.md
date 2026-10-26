# Work Card 04: Save or Polish

## Goal

Save the payments and the starting balance in the browser, prove it survives a refresh, and polish the page to the recipe.

## Inputs

- `architecture.md` (storage key and load/save rules)
- `design.md` (visual recipe and its cash-flow mapping)
- `build-blueprint.md`

## Files likely touched

- `src/App.jsx`
- `src/index.css`

## Instructions for the coding agent

1. Save with `localStorage`, key `cashflow-8-weeks`, value one JSON object `{ startingBalance, payments }`.
   - On load: read the key; if it is missing or unreadable, seed the sample data.
   - On any change (add, remove, move, starting-balance edit): write the whole object back.
2. Make the starting-balance setting a real input (sample RM3,000.00) that recomputes everything and is saved.
3. Add the empty state: with no payments, the page shows week 1 ending at the starting balance and a clear message in place of the list.
4. Polish to the recipe:
   - bars grow from 0 when the page loads (a CSS transition); nothing else moves;
   - phone width: one column, tiles wrap, controls at least 40px tall, nothing cut off;
   - every line of the `## Visual recipe` checked once more, including the hero stacked bar and its legend, and the row bars (`RM1,700.00 of RM2,400.00` style), all worked out from the same rows;
   - accessibility basics: visible focus ring on every control, AA contrast, `Short` and `In`/`Out` given as words, earlier/later buttons labelled and disabled at the limits.
5. A refresh must restore the same payments and starting balance in the same browser.

## What not to do

- Do not add a backend, database, API, login or any online call.
- Do not add loans, interest, overdrafts, advice, ratings or recommendations.
- Do not invent any number beyond the recipe's own visuals (the bars and the count line), all worked out from the same rows.
- No emoji, no new library; keep the favicon.
- Do not claim the page remembers data across browsers or devices; it only remembers in the same browser.

## Done when

- Adding a payment, then refreshing, keeps the payment and the starting balance.
- The empty state shows a clear message, and week 1 ends at the starting balance.
- The page passes the mobile and accessibility checks and matches the recipe.
- The two hero lines and the week-8 line stay correct after every change.

## Verification steps

- Add a payment → refresh the browser → the payment is still there (persistence proof).
- Edit the starting balance → refresh → the new balance is still there and the weeks still match.
- Remove every payment → the empty state shows and week 1 ends at the starting balance.
- Reload and confirm the bars grow from 0 and nothing else moves.
- Check phone width and the focus ring on every control.
- Design check: item list, input, update/delete controls, empty state, refresh visibility and mobile stacking follow `design.md`; final pass on every line of the `## Visual recipe`.

## Localhost test before continuing

After this card, the learner should test:

- Add a payment, refresh the browser, and confirm the payment is still there.
- Change the bank balance today, refresh, and confirm the new balance and the week figures are still there.
- Remove every payment and confirm the empty state shows with week 1 ending at the starting balance.
- Shrink to phone width and confirm one clean column, tappable buttons and nothing cut off.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## After this card: tick chapter 03

End your first checkpoint message for this card (the one that gives its localhost tests) with these two lines, exactly, as plain chat text, never inside a code block (or the link cannot be clicked):

**Your cards are built. Next: tick chapter 03 on your class page.**
[Open chapter 03, Build and test](https://learn.theaibuilder.school/courses/ai-builder-foundations/modules/3) and press **I built my cards**. Then come back to this chat.

When the learner replies `continue`, start your reply with the same two lines.

## Stop condition

If localStorage cannot be written (for example the browser blocks it), stop and tell the learner the page works but will not remember data, then ask a trainer before any further change.

## Status
Done — localStorage save, refresh persistence, empty state and polish in place.