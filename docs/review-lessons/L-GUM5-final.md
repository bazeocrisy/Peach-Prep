# Final verify L-GUM5 (round 3)
MUST: 0  SHOULD: 1  NIT: 1

## Method
- Verification commit: `7090535` (L-GUM5-verify.md). I diffed `js/data/lessons/L-GUM5.js` from there to the working tree. The working tree is clean.
- I read L-GUM5-verify.md and the "Round 2" section of L-GUM5-fixes.md. There is no verify2 and no Round 3 for this file.
- I solved every changed item cold: SK-GUM5-1-T5, SK-GUM5-2-T2 and SK-GUM5-5-T4.
- I did one pass over the whole Test section of all 7 lessons, looking for cross-item reveals.
- `node verification/check-content.js --all`: PASS (0 failures, 9 warnings, none in L-GUM5).

## Round 2 findings: all fixed
- [SHOULD SK-GUM5-1-T5] The key is now the line "Address: 14 Pine St.", which agrees with Teach point 2 (abbreviations in addresses, dates and schedules). The distractor is "Address: 9 Maple rd." The prompt says "lines".
- [SHOULD SK-GUM5-2-T2] The colon speaker labels are gone, and the speakers are named only in the prompt. The confusing "Leah:" option is now "Leah;".
- [NIT SK-GUM5-5-T4] "unless" is replaced with "until", which Teach point 1 lists.
- [NIT SK-GUM5-5-T4 clue] Now neutral: "Which words make the ideas fit together?"

## Cold solve of changed items
| Item | My answer | Key | One answer? |
|---|---|---|---|
| 1-T5 pick two | Brazilian flag; Address: 14 Pine St. | same | yes (Mr Jackson, german, Maple rd. are each wrong) |
| 2-T2 | Leah, / Yes, | same | yes |
| 5-T4 | although / after | same | yes ("put on a jacket until she got to the park" and "although she got to the park" do not make sense; because and if do not fit slot 1) |

No false rule, wrong reference or clue giveaway in the changed items.

## Whole-test cross-reveal pass (lessons 1 to 7)
- [SK-GUM5-3-T5 reveals SK-GUM5-3-T1 and T2 slot 2] SHOULD.
  - T5 asks for the one sentence with an error. Its keyed error is "The two friend's tents...". A child can spot that with the regular-plural rule alone, helped by the cue "two".
  - Once T5 is solved, the remaining T5 lines are confirmed correct, and one of them is "The children's laughter filled the gym."
  - That is the irregular-plural pattern that T1 (the women's hats) and T2 slot 2 (men's) test. It also rules out the T3 distractor "The childrens' tickets".
  - Lesson 3 Teach already shows children's and women's, so the impact is limited.
  - Fix: replace "The children's laughter filled the gym." in T5 with another correct regular plural possessive, for example "The teachers' cars were in the lot."
- NIT [SK-GUM5-1-T1] The distractor "Parade route: Main st. to Pine Ave." shows its own error, because a lowercase st. sits next to a capitalized Ave. on the same line. Optional fix: "Parade route: Main st. to the park."
- Lessons 2, 4, 5, 6 and 7: no reveal. Correct sentences in one item show the same rule that another item tests (for example, the comma after a name in 2-T4 and 2-T5), but each item needs that same rule to solve. No item can be solved with a different skill and then hand over another item's key.

## Not fixed
(none)

## MUST
(none)

Verdict: PASS
