# Final verify T-RA (round 3)
Diff base: `7090535` (the commit that added T-RA-verify.md). Changed items:
- RA1a-T1 and T4.
- RA1b-T2, T3, T4 and T5.
- RA1c Learn 1 ask, and RA1c-T3, T4 and T5.
- RA2a-P2 clue and RA2a-T2 Part B.
- RA2b-T2 and T5 clues.

## Prior findings (T-RA-verify.md, fixes Round 2)
- SHOULD 3.T.RA.1.c Learn 1, ask/answer mismatch: fixed. The ask now says "Write two sentences", which matches the two-sentence answer.
- SHOULD RA1b-T2/T4 shared "no wind or rain" fact: fixed. The T4 key is now "The moon has no air." "No air" no longer appears anywhere else in the test: it was removed from the T3 key and from the T2 distractor.
- SHOULD RA1c-T5 hinted at the T2 key: fixed. The second sentence is now about nectar and insects. The late-summer eating fact appears only in T2.
- There is no Round 3 section in T-RA-fixes.md.

## Changed items solved cold
I solved each changed item before reading its key. All keys matched, and no item had a second defensible answer.
- RA1a-T1: only "find food in the dark" is answered by the article. Owl chicks, eggs and the largest owl are not.
- RA1a-T4: "Where do snowy owls live?" is a good research question that stays on the owl topic.
- RA1b-T2: "no wind or rain" is the key. The size, phases and orbit distractors are not about footprints.
- RA1b-T3: the keys are 1969 and the space suits. The three distractors are about the moon itself.
- RA1b-T4: "no air" appears in both sources, S1 para 4 and S2 para 2. Orbit and phases appear only in S1, and Okafor works at the science center appears only in S2.
- RA1b-T5: the moon rocks fact (S2 para 4) adds to the rocks note. The "closest neighbor" distractor comes from S1, so it is correctly wrong.
- RA1c-T3: the keys are the wing blur (S1 para 2) and crossing a wide sea (S2 para 3). The distractors are an opinion, "only fly forward" (S1 says backward) and "mud and sticks" (S2 says plant bits and spider silk).
- RA1c-T4: the aunt sentence is the key. The other three sentences all appear in S1 or S2.
- RA1c-T5: "so" and "To get that energy" are the keys. "In early spring", "In conclusion" and "Instead" cannot be defended.
- RA2a-P2 clue: strategy only. It does not single out the key.
- RA2a-T2 Part B: "Ana nodded." is a clear distractor, and the key is unchanged.
- RA2b-T2 and T5 clues: strategy only, with no key words.

No changed item has a false fact, a quote that does not match the passage word for word, or a wrong reference.

## Full Test pass (cross-item reveals)
I checked the Test section of all five lessons: 3.T.RA.1.a, 3.T.RA.1.b, 3.T.RA.1.c, 3.T.RA.2.a and 3.T.RA.2.b. No Test item's prompt, stem or choices reveal another Test item's answer.
- RA1b: some distractors repeat, for example "The moon travels around Earth" appears in T2, T3 and T4. These are distractors in every item, so they reveal nothing.
- RA2a: the T2 Part A distractor "stopped feeling nervous" restates the T1 prompt's idea, not T1's answer sentence.

## MUST
- None.

## SHOULD
- None.

## NIT
- [SK-RA1c-T5 why] "nectar and insects are how hummingbirds get the energy". Insects mostly give protein, and nectar gives the energy. This is fine for grade 3. Optional fix: "To get that energy, they drink sweet nectar from flower after flower."

Checker: `node verification/check-content.js --all` gives PASS, with no warnings for T-RA.

Verdict: PASS
