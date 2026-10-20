# Verify F-PF
Prior findings: 24 checked, 23 confirmed fixed, 1 not fixed
New problems: MUST 1  SHOULD 1

Method: read reviews A and B and the writer's log, checked every MUST, SHOULD and NIT against the current file, and read every hunk of `git diff 4e7b23e -- js/data/lessons/F-PF.js`. I solved every changed or new item cold before reading its key: 4a-P4, P7, T4, T6; 4b-P1, P5, P7, T1, T3, T4, T6; 4c-P6, T4; 1a-P2, P3, P6, P7, T3, T4, T5; 1d-P1 why, P2, P3, T2, T3. Every key matched my answer, and none had a second defensible answer. The passages p1 and p2 are unchanged, so the hottext refs (p1:3:1, p1:5:1, p2:1:2, p2:4:1) and the "paragraph 3/5" references still point to the right sentences. No Test prompt now names a T1 target. `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

Writer's re-review list, checked:
- Syllable splits: fan·tas·tic, Sep·tem·ber, tu·lip, plan·et, sev·en, pa·per, ho·tel, ba·con, po·ny, can·dle and peb·ble are all standard dictionary divisions. Baby (ba·by, in the 4b-T4 why) is correct too. The consonant counts in the 4b-P1 and T1 whys are right (n,t / s,t; p,t / m,b).
- Sound claims: the u in busy and the ui in build say short i, gift has a hard g before i, and page and giraffe have a soft g. All true. Also confirmed: the long u in music and tulip, the short a in wagon and planet, and the short e in seven.

## Not fixed
- [SK-FF1a-P2] (B MUST, a near-giveaway clue.) The new clue, "This word sounds like it has the e from bed, but it is not spelled with e," now gives the whole answer away. Read literally, it rules out both distractors: "sed" has an e, and so does "sayed" (s-a-y-e-d). Only "said" has no e. This is MUST: the clue gives away the answer in Practice, where the child sees it. Fix: keep it about strategy without a letter test, for example "This word has a tricky part: the sound you hear is not spelled the way it sounds. Picture the word in a book you have read."

## New problems
- [SK-FP4a-P7] MUST. The clue gives away the answer. It says "Remember that ea can make the short e sound." Bread is the only option with ea (bred and breed have none), so the clue points straight at the key. Fix: "Bred and breed are real words too, but they do not name a food. Picture the word on a bag at the store."
- [SK-FP4a-T6] SHOULD. The clue says "Its last sound is spelled the same way as the end of face and dance." Fence is the only option that ends in ce, so the clue gives the answer away, which breaks SPEC rule 7. It is not MUST, because Test shows no hints and the clue only appears in "Show me how" after a miss. Fix: "Picture the word. Think about how the s sound is spelled at the end of words like this, and what keeps a c soft."
- [SK-FF1a-T1] NIT (unchanged item, not flagged before). The clue "It starts with a, and it has the same vowel team as rain" rules out every distractor: agian has ia, agen has no ai, and ugain starts with u. It only shows after a miss, so this is low impact. Fix: "Picture the word in a book. Which spelling has the same vowel team as rain, in the right order?"
- [SK-FF1a-P6] NIT. "Yesterday I was a deer in our yard" is grammatical, though silly, and the why only says that was "has the same letters in a different order." Fix: add "'I was a deer' would mean you are a deer, which does not make sense."
- [SK-FF1a-T5] NIT. The prompt and clue are word for word the same as P7's, with the same "look-alike word" hottext template. The words are different (of/off, not form/from), so it still tests the skill. Optional: rephrase the prompt.

## Verdict: FAIL
Two Practice clues give away their answers: SK-FP4a-P7 (new) and SK-FF1a-P2 (made worse by the fix). Everything else from rounds A and B is confirmed fixed.
