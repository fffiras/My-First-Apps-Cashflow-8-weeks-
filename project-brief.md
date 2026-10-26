# Project Brief

## Project Identity

- Name: Cashflow 8 Weeks
- One-liner: A browser cash-flow game that shows a small business's bank balance at the end of each of the next 8 weeks.

## One-Sentence Concept

A browser-local cash-flow game where a small owner lists payments (money in and money out, one-off or every week) and sees the bank balance at the end of each of the next 8 weeks, aiming to keep every week above zero.

## Target User

A Malaysian small business owner opening a pasta shop, still small enough to run the money side alone. Like most small owners they keep the bank balance in their head, so they cannot see which week will go short until it does, and they cannot tell which move would fix it: chasing a customer, asking a supplier for later terms, or pushing a purchase back.

## User Goal

See each week's end balance and the lowest week at a glance, then add, move or remove payments to keep every week above zero.

## Build Shape

Browser-local tool.

## Shape Confirmation

Confirmed: browser-local tool. Clue: the brief adds one kind of data (payments), lets the user move and remove them, and requires that they stay after a browser refresh in the same browser.

## Version-One Success

- The sample home bakery is on the screen: starting balance RM3,000.00 and 7 sample payments.
- The eight weeks end at RM3,200.00, RM2,150.00, RM2,350.00, -RM650.00, RM1,950.00, RM2,150.00, RM2,350.00, RM850.00, with week 4 shown in the warning colour and the word `Short`.
- Hero shows -RM650.00 (week 4) and `RM850.00 in the bank at the end of week 8.`
- Adding, moving and removing a payment updates the weeks, and the change is still there after a browser refresh.

## Now / Later / Never

### Now

- One payment list: name, amount, In or Out, and week 1 to 8 or `every week from week 1`.
- Add a payment; remove a payment.
- Move a one-off payment one week earlier or later (never before week 1 or after week 8); an every-week payment does not move.
- One setting: the bank balance today (sample RM3,000.00).
- Eight week blocks showing each week's end balance; a negative week shows the warning colour and `Short`.
- Hero: the lowest end-of-week balance, labelled with its week.
- Money shows sen and a comma for thousands; a negative amount reads `-RM650.00`.
- Save payments and the starting balance in the browser so they survive refresh.
- The page opens with the sample business.

### Later

- More than one business.
- Editing a payment's amount in place.
- Sorting or filtering the payment list.

### Never

- User accounts, login, or multi-user sync.
- Processing payments, a database, a backend, or live data.
- Loans, interest or overdrafts.
- Advice, ratings or recommendations on what the owner should do.
- Real company names, bank details, real figures, or any real person's name, phone number, IC number, account number or balance.

## Assumptions

- The 7 sample payments and RM3,000.00 starting balance are illustrative sample data, not real records.
- The brief shows figures only; it never advises the owner.
- One browser and one business are enough for version one.

## Proof Target

The app runs on localhost with the sample business, all eight weeks work out to the sample figures, add/move/remove work in the browser, and a refresh keeps the payments and the starting balance.

## Trainer / Learner Notes

- Answer 2 (who it is for) was made the learner's own: the owner opening a pasta shop. Sample data kept unchanged, per the problem.
- Design style chosen by the learner: red and white (trend choice). The coach recommends a warm tomato-red pasta-house palette with a cream/parchment paper tint instead of plain white, so the page feels like a trattoria menu and still reads fast on a phone.
- Planning only tonight: no app code, no packages, no Git, no deploy.