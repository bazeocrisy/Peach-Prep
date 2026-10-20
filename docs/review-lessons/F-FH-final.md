# Final verify F-FH (round 3)
Diff checked: `git diff 79047c6 -- js/data/lessons/F-FH.js` (the lead's direct changes in 7090535). There is no fixes Round 2 or Round 3 section, as the brief says.
MUST: 0  SHOULD: 0  NIT: 1

## Prior findings (F-FH-verify.md)
- A SHOULD (too few unpracticed passages): resolved. 1.c now sends practiced reading to passages 5 and 6 only (`FLUENCY_PRACTICED.how` and the check intro), so passages 1 to 4 stay new for 1.b. The 1.b parent note now gives a fallback for when those run out: a page from a new grade 3 library book. Passages 1 to 4 include two stories (1, 3) and two fact texts (2, 4), so the 1.b check item "a story and a fact passage" can still be met. The UI labels passages "Passage 1" to "Passage 6" (js/skills.js:486), so the numbers match.
- SK-FH3a-P2 (SHOULD): fixed. The clue now also points to the last letter, and the why tells frog from from (g loops below the line; m has humps and stays on the line) and from flag. Both claims are true of cursive.
- NIT "Tricky letters" example: fixed. It now shows G Q S T Z, which matches the teach point.
- NIT passage 3 dialogue: resolved. The text now says only "passage 5 or 6, which have characters talking", which is true and claims nothing about the other passages.
- NIT 4.a learn[1] step 3: fixed ("at the middle line"). This matches teach point 4 and Learn 3.

## Changed items solved cold
- SK-FH3a-P2: frog. Matches the key, with one defensible answer. The clue is a strategy (count the letters, then check the second and last letters) and does not name the answer.

## Cross-item pass (Test sections)
- 3.F.H.3.a T1-T5 is the only Test section in the file; 1.b, 1.c, 4.a and 4.b use activities and checks. No Test item gives away another's answer. The T4 box words (quiet, zebra, sunny) do not appear in any other Test item.

## Checker
`node verification/check-content.js --all`: PASS, 0 failures and 9 warnings. None of the warnings are in F-FH.js.

## NIT
- [3.F.F.1.b parent] The fallback says "compare with the same numbers", but the note does not say which numbers it means. Fix: "compare with the goals on the timer screen (83, 97 or 112 words a minute in fall, winter or spring, and about 95% accuracy)". A single page may also hold fewer words than a child reads in a minute, so "a page or two" would be safer.

Verdict: PASS
