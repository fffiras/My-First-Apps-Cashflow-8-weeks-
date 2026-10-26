# Work Card 02: First Visible Version

## Goal

Build the whole page look with the sample data on screen, following the `## Visual recipe` in `design.md`. Nothing interactive yet.

## Inputs

- `design.md` (visual recipe and the cash-flow mapping of the recipe)
- `build-blueprint.md` (data, sample data, worked weeks)
- `architecture.md` (component map)

## Files likely touched

- `src/App.jsx`
- `src/index.css`

## Instructions for the coding agent

1. Lay out the page as the recipe says: header, hero, eight week tiles, starting-balance setting line, then the payment list with the add form area at the top of the list.
2. Put the sample business on screen from a hard-coded sample: `startingBalance` 3000 and the 7 sample payments from `build-blueprint.md`. Sample data is allowed to be typed in for this card only.
3. Draw the recipe's surfaces, colours, type, width and motion rules:
   - page background warm cream `#FBF3EA`; accent `#C1272D`; warning `#9E1B20`;
   - week tiles in a row that wraps on a phone; a short week takes the warning colour and shows `Short` (week 4 in the sample);
   - payment rows as one thin-lined list: colour mark, bold name, `In`/`Out`, amount on the right, the week label or `Every week from week 1`, plus the earlier/later and Remove controls;
   - tabular numbers on every money figure;
   - bars grow from 0 on load (a CSS transition); nothing else moves.
4. Any figure that Card 03 works out shows a placeholder only: `RM -` or an empty bar. Never type a worked value into the page by hand. The week end balances and the hero figure are placeholders in this card.
5. Header shows the app name, the goal line, and `Sample data` in small muted text.

## What not to do

- Do not make anything interactive: no add, no remove, no move, no starting-balance editing, no storage.
- Do not write any worked figure (a week balance or the hero figure) into the page by hand; those are Card 03.
- Do not add `localStorage` yet.
- No emoji, no emoji icons, no fake logo, no new library.
- Do not advise, rate or recommend anything; figures only.

## Done when

- The page looks like the recipe: header, hero with a placeholder figure, eight week tiles with `Week 4` labels and placeholder balances, the setting line, and the 7 sample payment rows.
- A short week shows the warning colour and `Short`, even though its balance is still a placeholder.
- On a phone width the page is one clean column and nothing is cut off.

## Verification steps

- Open localhost and confirm every part of the recipe is present.
- Confirm the 7 sample payment names, directions and amounts show, with week labels or `Every week from week 1`.
- Confirm `Sample data` is visible and the money figures are placeholders, not worked values.
- Resize to phone width and confirm tiles wrap and text does not overflow.
- Design check: hero, week tiles, payment list, add form placement, colour, surfaces, width, type and motion follow `design.md`; no box around every section, no pill around plain text.

## Localhost test before continuing

After this card, the learner should test:

- Open the page and confirm the header, hero, eight week tiles and the 7 sample payment rows are all visible.
- Confirm week 4 shows the warning colour and the word `Short`.
- Shrink the browser to phone width and confirm the layout stacks to one column with no text cut off.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the layout cannot follow the recipe without inventing a new number or an action the brief does not have, stop and ask a trainer.

## Status
Done — full recipe layout with the 7 sample payments on screen.