# Verify habits
Prior findings: 16 checked, 16 confirmed fixed, 0 not fixed
New problems: MUST 0  SHOULD 0

Scope: js/data/habits.js. The only review is habits-A.md (3 MUST, 13 SHOULD). Its fixes are logged in habits-fixes.md. There is no -B review.

What I checked:
- `git diff 4e7b23e -- js/data/habits.js`: all 16 changed entries match the fix log, and no other entry changed.
- Each changed entry against the official `text` in js/data/standards.js:
  - ST.1.c: "how context shapes the author's decisions and the audience's responses". `looks`, tryit 1 and `ask` now all tie the author's choices to time, place and audience. Fixed.
  - EICC.3.c: "addressing inconsistencies or gaps". The gaps half is now in tryit 1 and in `ask`. Fixed.
  - EICC.4.d: "Link ideas and information to the plan". Tryit 1 now places each circled detail in a plan box. Fixed.
  - AC.1.a: "effect on audience". Tryit 1 now asks which part made the child want to keep reading. Fixed.
- Safety:
  - EICC.2.e now uses board-game rules or toy directions, with no medicine or cleaning labels. Fixed.
  - EICC.2.c is now no-cook or paper-craft, with the grown-up watching. Fixed.
  - EICC.2.d uses a kids' cereal or toy box, not online ads. Fixed.
  - ST.1.a now says to search together. Fixed.
- Feasibility in about 15 minutes at home: CP.2.b (parent plays both audiences), AC.3.d (4-box comic) and AC.2.d (half-sheet fact card) all fixed. Vague tryits (AC.3.b, AC.2.c, EICC.4.c, CP.2.e) now give concrete material. The EICC.2.e bedtime example is replaced.
- Facts in the new text: "Rain forms when water drops in clouds get heavy" is a fair grade-3 simplification. The MLK "I Have a Dream" closing lines are widely taught in the elementary grades.
- Structure: 53 entries, and each has a title, looks, ask and 2 tryits. No brand names were added.
- `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

## Not fixed
(none)

## New problems
- NIT [K-12.P.CP.2.e tryit 2]: "a famous speech made for young listeners or often taught in grade 3, such as ... 'I Have a Dream'". The speech fits only the second half of that phrase, since it was not made for young listeners. Fix: "a famous speech often taught in elementary school, such as...".
- NIT [K-12.P.ST.1.c tryit 1]: a word like "icebox" was simply the normal word when the story was written, so "chose because of when it was written" slightly overstates it. This is acceptable for grade 3, and the follow-up ("what would an author today write instead") lands the context point.

## Verdict: PASS (no MUST left)
