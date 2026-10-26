# Design Direction

## Design Inspiration URL

Learner's own description: red and white, pasta-house theme. Coach translation of Fallback 3: Playful student dashboard, applied to a trattoria menu mood.

## What We Borrow

- A friendly, rounded, dashboard feel with a clear main figure up top.
- Rows as a simple list separated by thin lines, with the amount on the right.
- Week blocks as a row of small tiles that wraps on a phone.
- Tabular numbers so all money figures line up.
- One strong accent colour used for emphasis and the hero figure.

## What We Do Not Copy

- No logo, brand name, colour scheme, illustration, mascot, icon set, copy or layout from any real product, restaurant or site.
- No trademark, no exact identity. Only the general mood (rounded, friendly, dashboard-like) is borrowed.
- No emoji, no stock images, no illustrations pulled from anywhere else. Any small icon is a hand-written inline SVG drawn for this app alone.

## Visual Mood

Warm and inviting like the front of a pasta shop at dinner time: tomato red and cream, generous spacing, clear numbers. It should feel like a handwritten trattoria menu turned into a tool, not like a corporate bank. Made for a pasta-shop owner to read fast on a phone between orders.

## Layout Rules

- Header band at the top: app name, one-line purpose under it, and `Sample data` in small muted text.
- Hero below the header: the lowest end-of-week balance as the most prominent thing on the page, with its week label.
- Week strip: eight tiles in a row, wrapping on a phone.
- Starting-balance setting in a single small line under the hero.
- Payment list below: one list with an add form at the top, one row per payment, thin lines between rows.
- On screens wider than 900px: hero sits in a left column, week strip and list in a right column. On a phone: one column, stacked header → hero → weeks → setting → add form → list.
- Sections sit on the page background; never a box inside a box; never a border and a shadow on the same thing.

## Color / Contrast Rules

- Accent: a strong tomato red, `#C1272D` (used for the hero figure, week tiles' highlight, and the add button).
- Page background: a warm cream, `#FBF3EA` — the pasta dough tint — instead of plain white. It keeps the red-and-white theme while staying soft on the eyes.
- Surface tint for the week strip: a paler cream `#F6E7D8`.
- Warning colour for a short week and the short hero: a deeper, distinct maroon-red `#9E1B20`, with near-white text `#FFF7F0` on any fill so contrast passes AA. The warning is clearly darker than the accent so a short week never looks like a normal one.
- Text: near-black `#2A211E` on light surfaces; muted text `#6F625C`.
- Five-colour row palette, each with AA contrast on `#FBF3EA`/cream: tomato `#C1272D`, basil `#2F6B3A`, olive oil amber `#9A6206`, parmesan cream-brown `#7A5A2E`, aubergine `#6E3A82`.
- Never rely on colour alone: a short week also shows the word `Short`; In/Out is written as a word, not only a colour.

## Typography Feel

- A single clean sans-serif system stack for words and numbers.
- Money and week figures use tabular numbers (`font-variant-numeric: tabular-nums`) so columns line up.
- Emphasis comes from size and weight, not from boxes or pills.
- Hero figure at 48px or larger; row amounts weight 600; names bold.

## Component Style

- Week tiles: rounded corners, thin border, week label above and end balance below; a short week takes the warning colour and shows `Short`.
- Payment rows: a small colour mark, the name in bold, `In`/`Out` word, the amount on the right in tabular numbers, the week label or `Every week from week 1`, then earlier/later buttons (one-off only) and Remove.
- Buttons: rounded, clearly labelled, with a visible focus ring; the add button uses the accent.
- Form: name, amount, In/Out, week picker (1 to 8) or an `Every week` tick; sits at the top of the list, not in its own floating card.
- Hero: short label, the figure, one line under it, and the week-8 line under that.

## Mobile Rules

- One column at phone width; header, hero, weeks, setting, add form and list stack in that order.
- Week tiles wrap into rows of tiles that stay readable.
- Row controls (earlier/later/Remove) stay tappable, at least 40px tall, and never overlap the amount.
- Text never overflows its container; long payment names wrap instead of pushing the amount off screen.

## Accessibility Basics

- Colour contrast meets AA for text and for the warning state.
- Short weeks use the word `Short` and the warning colour, not colour alone.
- In/Out is a written word, not colour alone.
- Buttons and inputs are reachable and labelled; the earlier/later buttons say what they move and can be disabled at week 1 (earlier) and week 8 (later).
- Focus ring visible on every control.
- Money is described in text so a screen reader reads the figure, not just a colour.

## Anti-Slop Rules

- No fake logos, no fake testimonials, no fake stats unless clearly marked sample.
- No "lorem ipsum" in the final proof.
- No emoji anywhere on the page.
- No box around every section; no pill around plain text.
- The page's job is a figure: the lowest end-of-week balance is the most prominent thing; there is no invented pay/apply/add action beyond adding your own payment.
- Readable at phone width.
- For this money brief: show figures only (sums, counts, what is left); never advise, rate or recommend; never work out interest.

## Design Verification Checklist

- [ ] Hero shows the lowest end-of-week balance as the largest figure with its week label.
- [ ] Short week 4 shows the warning colour `#9E1B20` and the word `Short`.
- [ ] All money shows sen and a thousands comma; negative reads `-RM650.00`.
- [ ] Eight week tiles sit in a row and wrap cleanly on a phone.
- [ ] Payment rows are one list with thin dividers, not a box per row.
- [ ] Tomato red and cream palette in place; red/white theme reads clearly; contrast passes AA.
- [ ] Tabular numbers so columns align.
- [ ] No emoji, no fake logos, no invented actions.
- [ ] Readable and usable at phone width.

## Visual recipe

The build follows this section card by card. The style above sets the colours, typeface and mood; this section fixes what the page shows and how its surfaces, rows and icons are built, and wins wherever the two differ. For a page that shows rows and a main figure:

- Header: the app name, the one-line purpose under it, and the words `Sample data` in small muted text. A small inline SVG icon or no icon, never an emoji.
- Hero: a short label, the main figure at 48px or larger in the accent colour, one line under it with the count behind it (for example `7 payments in play`), and a stacked bar showing each counted row's share of the main figure, one colour per row, and under the bar, each counted row's name and amount beside a small mark in its colour.
- Rows: one list, not a box per row. Each row: a small mark in that row's colour, the name in bold, the main amount on the right, and under them a bar for done of total with the text `6 of 12` and the words `6 left` beside it. Rows are split by a thin line. A finished row is muted, says `Finished` in place of `6 left`, and has a full grey bar.
- Colour: one accent colour from the style, plus a five-colour row palette, every colour with AA contrast on its background.
- Surfaces: the page background is tinted lightly with the accent, never plain white or plain grey. At most two areas stand out from it (for example the hero and the list, with any add form at the top of the list). Never a box inside a box, never a border and a shadow on the same thing, no shadow on rows.
- Width: on a screen wider than 900px, use the width (the hero beside the list, or the hero as a full-width band above it). On a phone, one column.
- Type: the style's typeface for words and numbers, with tabular numbers (CSS `font-variant-numeric: tabular-nums`) so figures line up. Emphasis comes from size and weight, not from boxes or pills. The only boxes in a row are its controls (buttons, tick boxes, inputs).
- Motion: bars grow from 0 when the page loads (a CSS transition). Nothing else moves.
- No new library: plain CSS and inline SVG. No emoji anywhere on the page: they look different on every device.

For an app where the learner adds or changes items, use the same row recipe for the items and the hero for the count that matters most.

### Cash-flow mapping of the recipe

- Hero main figure: the lowest end-of-week balance, labelled with its week (the first such week if two are equal). The short-state line and the week-8 line come from the problem text; the count line is this recipe's own visual.
- Hero count line: `7 payments in play` (the number of payments; with no payments, `No payments yet`).
- Hero stacked bar: each payment's share of the total money moving through the 8 weeks, one colour per row, worked out from the same rows; under it each payment's name and amount beside a small mark in its colour.
- Row: colour mark, name in bold, the amount on the right, the week label or `Every week from week 1`, then earlier/later and Remove. The row's bar shows that payment's amount against the largest single payment's amount, with `RM1,700.00 of RM2,400.00` and the difference in words beside it — the recipe's own visual, worked out from the same rows.
- Week tile is a small surface, not a full box-in-box: week label above, end balance below; a short week takes the warning colour `#9E1B20` and shows `Short`.
- Bars grow from 0 on load; nothing else moves.