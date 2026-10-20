# Final verify L-GUM3 (round 3)
MUST: 0  SHOULD: 0  NIT: 0

## Method
- Verification commit: `9f5acdd` (L-GUM3-verify.md added). I diffed `js/data/lessons/L-GUM3.js` from there to the working tree. The working tree is clean.
- I read L-GUM3-verify.md and the "Round 2" section of L-GUM3-fixes.md. There is no verify2 and no Round 3 for this file.
- I solved every changed item cold before reading its key: SK-GUM3-2-T1, T2, T3, T4 and T5. I also checked the changed Teach points (lesson 2 points 3 and 4, lesson 8 point 3) and the lesson 8 parent note.
- I did one pass over the whole Test section of all 8 lessons, looking only for one test item revealing another's answer.
- `node verification/check-content.js --all`: PASS (0 failures, 9 warnings, none in L-GUM3).

## Round 2 findings: all fixed
- [Lesson 8 Teach point 3] The th/sh/ch/ck exception is added ("moth-er, rock-et"). Both splits match the dictionary. No lesson 8 item splits one of those pairs (birth-day is split by the compound rule).
- [Lesson 8 parent] "sandwich" is replaced with "button" (double t), which a taught rule decides.
- [SK-GUM3-2-T4] The free "moose → moose" row is gone. The rows are person, ox, wolf and knife, and no row matches its own column text. Teach point 3 now teaches wolf → wolves and knife → knives.
- [SK-GUM3-2-T2/T3/T4/T5 cross-reveals] Fixed. Each irregular noun now appears in only one test item: woman (T1), moose and sheep keys, with mouse, child and goose as distractors (T2), foot (T3), person, ox, wolf and knife (T4), and tooth (T5). The other T5 sentences use only regular plurals. Teach point 4 lists moose.
- NIT [SK-GUM3-2-T3 clue] Now reads "changes its spelling".

## Cold solve of changed items
| Item | My answer | Key | One answer? |
|---|---|---|---|
| 2-T1 Both ___ in the band | women | women | yes |
| 2-T2 pick two | moose; sheep | same | yes (mouses, childrens, gooses are each wrong) |
| 2-T3 wipe your ___ | feet | feet | yes |
| 2-T4 person/ox/wolf/knife | people/oxen/wolves/knives | same | yes |
| 2-T5 error | four new tooths | same | yes (farmers, boxes, books, puppies are each correct) |

The T1 clue ("Woman is a special noun. Say 'one woman, two ___.'") is a strategy, not the answer, and Test clues show only after submission.

## Whole-test cross-reveal pass (lessons 1 to 8)
No test item reveals another test item's answer. Within a lesson, test items share the skill, so a correct sentence in one item shows the same rule used in another (for example, the correct "Would you like a pencil or a crayon?" in 4-T3 and the "or" key in 4-T1). But no item can be solved with a different skill and then hand over the key of another item. The lesson 2 overlaps flagged in round 1 are gone.

## Not fixed
(none)

## New problems
(none)

Verdict: PASS
