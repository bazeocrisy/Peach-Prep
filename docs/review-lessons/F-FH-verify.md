# Verify F-FH
Prior findings: 26 checked, 25 confirmed fixed, 1 not fixed
New problems: MUST 0  SHOULD 1

Scope: js/data/lessons/F-FH.js and the renderFluency changes in js/skills.js (the `practiced` flag, accuracy bands, the clock), plus the related `.trace-row` / `.flu-pick` CSS change. "Prior findings" counts every MUST and SHOULD in F-FH-A (8) and F-FH-B (18). NITs were also spot-checked; all are applied.

Engine checks:
- Clock: `left >= 60 ? "1:00" : "0:" + pad(left)`. The first second now shows 1:00, then 0:59 down to 0:00 and "Time!". Fixed.
- Accuracy bands: the bands now test the unrounded `ratio` (>= 0.95, >= 0.90). The displayed `acc` uses `Math.floor`. I brute-forced every read count from 20 to 260 against every error count. The displayed percent and the band never disagree (0 mismatches), and floating point causes no edge errors at exactly 95% or 90%.
- `practiced` flag: `FLUENCY_PRACTICED` is a shallow copy with `practiced: true` and its own `how`. When the flag is set, the cold-read norm comparison is dropped and replaced by a "your own progress" line. The accuracy line still shows. History is stored per lesson (`rec(cur)`), so practiced 1.c readings do not mix into the 1.b history. This is correct.
- WCPM formula, error filtering past the last word, and the 30-second floor are unchanged and still correct.
- `.trace-row` now uses `clamp(1.35rem, 6.4vw, 2.1rem) !important`. In print, 6.4vw is wider than 2.1rem, so the printed sheet keeps 2.1rem. `.trace-sheet` keeps `overflow-x:auto`, so a long row scrolls inside the sheet, not the page.

New passages (solved and fact-checked):
- 4 "How Seeds Travel" (203 words, FK about 3.6). These facts are correct: a dandelion's parachute of hairs, maple "helicopter" wings, burrs hooking on fur, seeds passing through birds, coconuts floating for weeks (they can float for months, so "weeks" is true), and seeds needing room and light away from the parent.
- 5 "The Backyard Campout" (205 words, FK about 2.7) and 6 "The Great Lunchbox Mix-Up" (199 words, FK about 2.9). The details are internally consistent: Benny's eggs and pickle, Ava's turkey and grapes, the final pickle-for-grapes trade, and the day sequence Monday, next day, Wednesday. Both are suitable for an 8-year-old, and both have dialogue as the 1.c `how` claims.
- Passage 2 now reads "mix the nectar in their mouths". This is accurate.
- Every passage is about 200 words at FK 2.3 to 4.1, which is grade-appropriate.

Changed items, solved cold:
- P1: My cat is gray. Matches the key. The new clue does not give the answer away.
- P2: frog. Matches the key. See the new problem below.
- P4: milk and apples. P5: Zoe. Both match the keys. The P5 distractors Moe and Zack (shares Z) are plausible, and there is one defensible answer.
- T4: quiet and zebra. Matches the key. No test prompt reveals another test item's answer.
- `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

## Not fixed
- [A SHOULD: FLUENCY.passages, too few unpracticed passages] This is only partly fixed. There are now 6 passages, against the 8 to 10 suggested, and there is no fallback for when they run out. The 1.c `how` now steers practiced reading to passages 1, 5 and 6. After that, only passages 2, 3 and 4 stay "new" for 1.b. Its parent note asks for "a new passage once or twice a week", so new passages run out in about 2 to 3 weeks, and later 1.b scores against the norms are inflated. Fix: add 3 or 4 more passages (at least one more fact text). Or add to the 1.b parent note: "Once your child has read every passage, use the timer for accuracy only. The speed comparison is fair only on a first reading."

## New problems
- [SK-FH3a-P2 clue and why] SHOULD. The new clue ("Count the letters first. Then look closely at the second letter.") and the existing `why` ("four letters, and the second one is the cursive r") both fit the distractor "from" just as well as "frog". Neither teaches the child to tell the two apart. The child is pointed at a feature that rules out only fog and flag. Fix: in `why`, add "From also has four letters and starts f-r, but frog ends in g, with a loop below the line, not m." Optionally end the clue with "...then check the last letter."
- NIT [3.F.H.3.a teach.examples "Tricky letters"]: the teach point now lists the capitals G, Q, S, T and Z, but the example line and note still show only G, Q and Z. Fix: change them to "Cursive: G Q S T Z" and update the note to match.
- NIT [FLUENCY_PRACTICED.how and the 1.c check intro]: these say passages 1, 5 and 6 have characters talking. Passage 3 (Luis and Grandma) also has dialogue. This is not false, only incomplete.
- NIT [3.F.H.4.a learn[1] step 3]: "The o ends with a little swing at the top". The new teach point and Learn 3 say "middle line". Fix: "...at the middle line".

## Verdict: PASS (no MUST left)
