# Final verification T-T1 (round 3)
Lessons: 3.T.T.1.a to 3.T.T.1.e
MUST: 0  SHOULD: 0  NIT: 3

## Method
- Diffed `js/data/lessons/T-T1.js` from 9f5acdd, the commit that added `T-T1-verify.md`. Two items changed: SK-TT1a-T6 (one match row and the `why`) and SK-TT1e-T3 (the clue).
- Read `T-T1-verify.md` and the "Round 2" section of `T-T1-fixes.md`. There is no `T-T1-verify2.md` and no "Round 3" section.
- Solved both changed items cold before reading the keys:
  - SK-TT1a-T6: my answers were Dialogue / Action / Description / Action, which match the key.
  - SK-TT1e-T3: my answers were "Suddenly," and "Then", which match the key.
- Made one full pass over every Test section (1a to 1e), looking only for one test item revealing another item's answer.
- Ran `node verification/check-content.js --all`: PASS, 0 failures and 9 warnings. The four T-T1 warnings:
  - Three are on Test items (1a-T5, 1d-T1, 1e-T5), which the brief accepts.
  - One is on Practice item SK-TT1d-P1 ("something"). See the NIT below.

## Prior findings
- MUST SK-TT1e-T3 clue: fixed. The new clue gives only a strategy ("ask how that sentence connects to the sentence just before it"). It no longer describes what "Suddenly," means, and it does not single out either key.
- NIT SK-TT1a-T3 / T6 shared sentence: fixed. The T6 row is now "Priya stood at the bottom of the Tallest Slide and looked up." It appears word for word in paragraph 2. The only reasonable label is Action, because standing and looking up are things Priya does and the sentence has no describing words about the place. The `why` names both action rows.

## New items checked
- SK-TT1a-T6: one key per row. The `why` is accurate.
- SK-TT1e-T3: one defensible answer per slot. "At first," and "In the end," do not fit sentence 6, which falls in the middle of the story. "Before that," and "At first," would put sentence 10 out of order.

## Cross-test reveal pass
I found no test item whose prompt, stem or choices give away another test item's key.

## MUST
- None.
## SHOULD
- None.
## NIT
- [SK-TT1a-T6 / SK-TT1a-T4] The new T6 row labels p2:2:1 as Action. That sentence is a distractor target in the T4 description hottext, so a child who goes back can rule it out. This removes a distractor but does not reveal the key (p2:2:2). Optional.
- [SK-TT1e-T3 clue] "the sentence just before it" points to sentence 5 for blank 6, and sentence 5 is the off-topic Luis sentence that T1 removes. This is still workable, because the clue's "Read sentences 3 to 10 in order" gives the needed context. Optional fix: "ask how that sentence connects to what happened before it."
- [SK-TT1d-P1 clue] The checker flags "something", which this clue shares only with the key. The clue says where to look ("what each main character says when someone asks for something") but not what the characters do, so it is not a giveaway. Optional.

Verdict: PASS
