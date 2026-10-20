# Final verify T-T34 (round 3)
Diff base: `7090535` (commit that added T-T34-verify.md). Changed items: SK-TT4a-P3 (clue), SK-TT4b-P1, SK-TT4b-T1, SK-TT4b-T2.

## Prior findings (T-T34-verify.md, fixes Round 2)
- MUST SK-TT4b-T2 gives away T1: fixed. T2 now uses its own stem (Theo's squirrel stanza, `passages: []`). It no longer names a line in Rosa's poem, and no choice rhymes with "blue".
- SHOULD SK-TT4b-T1 states the pattern: fixed. The prompt no longer gives the pattern. The clue asks the child to find it in stanza 1 first.
- SHOULD SK-TT4b-P1 "pair" is ambiguous: fixed. The prompt now defines the pairs (lines 1-2 and lines 3-4).
- NIT "It" in old T2 key: resolved, because that item was replaced.
- There is no Round 3 section in T-T34-fixes.md. The SK-TT4a-P3 clue change comes from commit c197f29 (practice clue giveaway rewording).

## Changed items solved cold
- SK-TT4a-P3: I chose "steady sound of the rain" before reading the key. It matches. The new clue ("Why might a poet start every stanza with the very same line?") does not single out the key.
- SK-TT4b-P1: The couplet end words are brown/down, tall/wall, leap/heap, everywhere/hair, cold/**red**, eat/treat. Only `p1:3:2` breaks a pair, and it is the key. The reading as couplets is now forced, so `p1:2:3` and `p1:3:3` can no longer be defended.
- SK-TT4b-T1: In stanzas 1 and 3, lines 2 and 4 rhyme (be/me, gray/day). Stanza 2 has blue/away. `p2:2:2` is not a target, so `p2:2:4` is the only answer. Key matches.
- SK-TT4b-T2: tree → glee is the key. "Tea" rhymes but makes no sense, and "down" and "fence" do not rhyme. The fact is true: squirrels bury acorns to eat later. There is one defensible answer, and the key matches.
- I found no false grammar rules, no false facts and no wrong references.

## Full Test pass (cross-item reveals)
- 3.T.T.3.a, 3.T.T.4.b: no item reveals another item's answer. (See SHOULD below for 3.T.T.3.a T5→T4.)
- 3.T.T.3.c: partial hints only (SHOULD below).
- 3.T.T.4.a: one reveal (MUST below).

## MUST
- [SK-TT4a-T4 vs SK-TT4a-T2] T4's match columns are "Stanza 1", "Stanza 2" and "Stanza 3", which tell the child that "My Kite" has three stanzas. T2 asks how the poem is built, and only the key ("three stanzas with four lines in each one") has three stanzas. Because children can go back during a test, T2 becomes a free point without counting. (T3's "stanzas 2 and 3" adds to the hint.) This is the same kind of reveal that round 2 rated MUST for TT4b-T2/T1. Fix: change the T2 distractors so that more than one says three stanzas, for example "three stanzas with three lines in each one", "three stanzas with six lines in each one" and "four stanzas with three lines in each one". The child then still has to count lines. Update the `why` to match.

## SHOULD
- [SK-TT3c-T3 / SK-TT3c-T4 vs SK-TT3c-T5] T3's prompt ("add a sentence after sentence 9 to support the reason in sentence 7") calls sentence 7 a reason, which removes the (7) distractor in T5. It also suggests that sentence 9 supports that reason, which points to one T5 key. T4's key also names both reasons. Fix: reword T3 as "Malik wants to add one more sentence to the paragraph about saving class time. Which sentence is best?"
- [SK-TT3a-T5 vs SK-TT3a-T4] T5's prompt says paragraph 3 holds a reason, and its key (robin nest) shows the reason is about wildlife. That narrows T4's targets to paragraph 3. The child still has to tell the reason from the evidence, so this is only a partial hint. Fix (optional): T5 prompt "...Which sentence would best support one of Mateo's reasons?"

## NIT
- [SK-TT3a-T2] The row "The school should plant trees." is almost the same as the T1 key. The passage title already gives the topic away, so this has little effect.
- [SK-TT4b-P2] The Practice prompt still names P1's answer line, as fixes Round 2 notes. Practice gives hints anyway, so I left it as a NIT.

Checker: `node verification/check-content.js --all` gives PASS. There are no warnings for T-T34.

Verdict: FAIL (1 MUST)
