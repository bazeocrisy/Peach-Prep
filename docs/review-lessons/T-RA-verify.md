# Verify T-RA
Prior findings: 19 checked, 19 confirmed fixed, 0 not fixed
New problems: MUST 0  SHOULD 3

Prior MUST/SHOULD checked against the current file (3 MUST and 16 unique SHOULD across A and B):
- The barn owl's face is now "flat, heart-shaped", which is accurate.
- The clues for SK-RA1a-P1, SK-RA2a-P1, SK-RA2a-P2 and SK-RA2a-T4 now give strategy only. None of them names the key or uses its words.
- SK-RA1a-P1 now has on-topic distractors (yes/no "Do honeybees make honey?" and the off-topic "hives" question).
- SK-RA1a-P4 has a dance distractor that the article already answers.
- SK-RA1a-T4 no longer copies P3. It now has a yes/no row, an off-topic row, an opinion row and a "Where" row.
- The SK-RA1a-T5 key ("How do scientists tell which animal a bone came from?") is not answered by the article.
- The SK-RA1b-P2 clue now matches the key.
- In SK-RA1b, "no air" now appears only in T3 and in one T2 distractor.
- 3.T.RA.1.c: algae are now "living things", "in the fall" is now called a time word, and the Learn 1 answer now uses "also" (see the new problem below).
- SK-RA1c-P2 has a second milkweed distractor (from Source 1, already in the notes).
- The SK-RA1c-T2 distractor is now accurate to Source 2.
- SK-RA1c-T5 slot 2 now has "In early spring" as a wrong time.
- SK-RA2a-T3: `p2:4:2` was swapped for `p2:1:3`, which is clearly not about calm.
- 3.T.RA.2.b test: it now uses subtler sources (vacation sighting, kid's leaf page) and a snake row.

All NITs are applied too: squirrel memory, the pumpkin at the flower base, the P3 clue, "nest in Georgia", T3/T4 "late summer" / "for the winter", P4 "Georgia fruit farmer", and hurricanes in P2.

I solved every changed item cold, and every key matched. No changed item has two defensible answers:
- RA1a-P1/P4/T4/T5
- RA1b-P2/P3/T1/T4/T5
- RA1c-P2/T1/T2/T3/T4/T5
- RA2a-P1/P2/T3/T4
- RA2b-P2/P4/T1/T3/T4

I checked these new facts and they are accurate:
- The barn owl facial disk.
- The female pumpkin flower has the ovary at its base.
- Dust is in both moon sources (S1 para 4, S2 para 3).
- "No wind or rain" is in both moon sources (S1 para 4, S2 para 3).
- Moon rocks are only in S2.

The checker result is `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

## Not fixed
- None.

## New problems
- [3.T.RA.1.c Learn 1] **SHOULD.** The fix created a mismatch between the task and the answer. The `ask` still says "Write one sentence that sums up both sources.", but the new `answer` is two sentences ("…keep them warm. They also huddle together…"). The model does not do what the child was told to do. Fix: either change `ask` to "Write two sentences that sum up both sources.", or make the answer one sentence: "Emperor penguins live in a very cold place where thick feathers and fat keep them warm, and they also huddle together in winter to stay warm."
- [SK-RA1b-T2 / SK-RA1b-T4] **SHOULD.** The fix moved the repeated-fact problem instead of removing it. T2's key is "The moon has no wind or rain to wipe things away." T4's new key is "The moon has no wind or rain." That is the same fact, so a child who has done T2 starts T4 with the answer in hand, and the test leans on one fact twice. Fix: make the T4 key "The moon has no air." (S1 para 4, S2 para 2), and change T3's second key to a different "people" fact such as "Astronauts left footprints in the moon dust." That keeps "no air" in only one item.
- [SK-RA1c-T5 vs SK-RA1c-T2] **SHOULD.** This was there before the fix pass, but the fixer edited T5. T5's text, "…they must eat many times a day. In late summer, they eat even more to get ready for their trip south", places the T2 key ("In late summer, they eat and eat to get ready for a long trip.") right next to Kayla's T2 notes ("They must eat many times a day."). A child can go back and copy the link. Fix: change T5's second sentence to a different Source 2 idea, for example "{1}, they fly far south for the winter." with the same slot options, and update the `why`.

## Verdict: PASS (no MUST left)
