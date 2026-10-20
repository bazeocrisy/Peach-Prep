# Verify T-SS
Prior findings: 19 checked, 17 confirmed fixed, 2 not fixed
New problems: MUST 0  SHOULD 4

Method: I checked all 19 MUST and SHOULD findings from reviews A (1 + 10) and B (1 + 7) against the current file. I read `git diff 4e7b23e` and solved every changed or new Practice and Test item cold before reading its key: 1.a P1, P2, T2, T3, T5; 1.b P3, T2, T4; 1.c P3, P4, T1–T5; 1.d P4, T3, T5; 2.a P3, P5; 2.b T4. All keys match my answers.

Daniel's draft (1.c p2) was renumbered from 10 sentences to 9. I re-resolved every ref against it:
- T1 targets: `p2:2:2` = 3, `p2:3:2` = 5, `p2:4:1` = 6, `p2:6:1` = 9.
- T2 "sentence 8" = the *although* sentence.
- T5 "sentences 2 and 3" = the fruit and pollen sentences.

All of them point to the right place. The changed quotes match the passage word for word: 1.a T2 Part B, and 1.d T3 Part B (numbers left out, per the site convention). The tortoise sentence is now accurate. `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

## Not fixed
- [SK-SS1c-P4] (B, SHOULD) The fix log says all three options are grammatical. They are not. "Although, biking is fun to do with my friends." and "Because, biking is fun to do with my friends." are not sentences: *although* and *because* cannot stand alone before a comma like that. So the slot is still decided by grammar. The prompt also says sentence 6 "adds one more reason", which names Also's job. Fix: drop "adds" from the prompt ("Choose the word that best connects sentence 6 to the paragraph before it"). Use options that all work grammatically after a comma, for example Also / For example / Instead. Update the why.
- [SK-SS2a-P3] (A, SHOULD) The new clue ("Look in paragraph 2 for words that tell how Rosa looks or feels") is the reviewer's own wording, but the problem remains. Paragraph 2 has only one sentence about how Rosa looks, and it is the only Part B choice from paragraph 2. So the clue still points straight to the Part B key and to the word "worried". Fix: "There are no real butterflies at the pool. Read what Ms. Ellis says right after the idiom. When might everyone feel this way?" That points to "Everyone does before a race," which is not a Part B choice.

## New problems
- [SK-SS1b-T1 / SK-SS1b-T2] SHOULD. T1's prompt gives away T2. It says the sentence-6 paragraph "is about events at the library" and calls the other one "the paragraph about things kids can borrow." T2 then asks which heading fits sentences 6–9 ("Fun Events for Kids" vs "Things You Can Borrow"). Children can go back during a test. This undoes the fix that reworded sentence 6 to stop the echo. Fix: change the T1 prompt to "Read the paragraph that begins with sentence 6. Select the sentence that belongs in a different paragraph of Priya's draft." Keep the key; the why can still name the borrowing paragraph.
- [SK-SS1d-T5] SHOULD. The key now repeats the prompt. The prompt says "a new paragraph that tells what happened at the end of the day", and the key begins "At the end of the day, …". The awards distractor helped, but the key still stands out by word match. Fix: change the key to "When the games were over, everyone met in the gym for awards." (or similar), and update the why.
- [SK-SS1a-P2] SHOULD. The narrowed prompt fixes the two-answer MUST, but now it repeats the key's words: "crops", "in that field the next year". A child can find the answer by matching words without seeing the cause and the effect. Fix: "Select the sentence that tells what happens later because of what the peanut roots do." Sentence 2 tells what the roots do right away, not later, so it stays wrong.
- [SK-SS1d-P4] SHOULD. "A man plays the banjo near the fountain." is keyed as a detail, and the why says it shows "how busy the market is." A careful reader could argue that one musician does not show busyness and mark it "Does not belong." Fix: change it to "Shoppers crowd around every table."

NIT (no action needed to pass):
- [SK-SS2b-T4 why] The new sentence repeats the one before it ("in sentence 6 he can hardly see the crowd" appears twice). Cut one.
- [SK-SS1d-T3 Part A] The distractor "how Carlos's brother is learning to drive" draws attention to the T1 answer (sentence 5). This is minor. Consider "the lunch the class ate in the cafeteria."

## Verdict: PASS (no MUST left)
