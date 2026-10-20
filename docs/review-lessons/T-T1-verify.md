# Verify T-T1
Prior findings: 15 checked, 15 confirmed fixed, 0 not fixed
New problems: MUST 1  SHOULD 0

Method: I read reviews A and B and the fix log, and checked every MUST and SHOULD against the current file. I read `git diff 4e7b23e -- js/data/lessons/T-T1.js` and solved every changed or new Practice and Test item cold before reading its key: 1a-T2, 1a-T3, 1a-T4, 1a-T5; 1b-T1, 1b-T5; 1c-P3, 1c-P6; 1d-T1, 1d-T2, 1d-T4; 1e-P4, 1e-P5; and all five rebuilt 1e test items (T1 to T5) on the new "The Big Catch" draft. Every key matched my answer, and none had a second defensible answer.

Checks:
- New ebsr Part B quotes (1a-T3, 1c-P6) are word for word.
- 1e-T1 hottext refs (p2:1:2 = (2), p2:2:1 = (3), p2:2:3 = (5), p2:3:2 = (7), p2:4:1 = (8)) point to the right sentences, and the key p2:2:3 is sentence (5), the Luis/soccer sentence.
- The draft numbers run (1) to (10), and every sentence number named in the 1e test prompts and `why`s matches.
- Adding the Lina sentence to 1b p2 paragraph 1 moves no reference, because nothing points into that paragraph by sentence.
- I found no 1e test item whose prompt or choices reveal another item's answer.
- `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

Prior findings, all confirmed fixed:
- A MUST 1e-P5 clue
- B MUST 1a-T2 clue
- A+B 1a-T3 Part B (the distractor now comes from late in the story and the quote marks match)
- A 1a-T4 clue
- A+B 1b-T5 "Ending" column (now Character/Problem/Solution)
- A 1c-P6 Part B sketchbook distractor
- A+B 1e Test mirroring Practice (rebuilt with different item shapes and sentence positions)
- A+B 1e-T4 fish released before it is described (the order item is removed)
- B 1b Teach on how the parts work
- B 1b-T1 distractor (Lina added to the passage)
- B 1c Teach on thoughts

## Not fixed
- None.

## New problems
- [SK-TT1e-T3] MUST. The clue gives away slot 0. "For sentence 6, think about how long Sofia had been waiting and how fast this happens" describes what "Suddenly," means, and the other two options ("At first," and "In the end,") are position words. Once a child reads "how fast this happens", nothing is left to decide. This is the same pattern that B marked MUST in 1a-T2, where the clue named the feeling. Fix: "Read sentences 3 to 10 in order. For each blank, ask how that sentence connects to the sentence just before it, then pick the word that shows that connection."
- NIT [SK-TT1a-T3 / SK-TT1a-T6]: the new T3 Part B distractor "She climbed the ladder one step at a time without looking down." is also a T6 match row with the key "Action". A child who goes back can use T6 to sort it as an action and not a feeling. This is minor, because it is a distractor and not the key. It is optional to change.

## Verdict: FAIL (1 MUST: SK-TT1e-T3 clue)
