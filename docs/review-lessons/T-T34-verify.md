# Verify T-T34
Prior findings: 6 checked, 6 confirmed fixed, 0 not fixed
New problems: MUST 1  SHOULD 2

Prior MUST/SHOULD checked against the current file:
- SK-TT4b-P1: `p1:3:1` is no longer a target, and the prompt is reworded. The two-answer problem is gone. (The new wording has its own issue; see below.)
- SK-TT4b-T1: `p2:2:2` is no longer a target. The two-answer problem is gone.
- SK-TT4b-T2: the key is now "It zips right out of view." It is in the present tense, rhymes with blue and keeps the meaning. The `why` names it.
- SK-TT3c-P3 why: the linking words are now quoted separately.
- SK-TT4a-P2 clue: the end words are no longer listed.
- 3.T.T.3.c teach point 3: now "joins your opinion or a reason to the facts that explain it."

The NITs from both reviews are applied too: the robin "across the street", the conclusion that sums up both reasons, T5 changed to DOK 2, "squishing everywhere" (rhymes with chair), and TT4b-T5 turned into an ms item.

I solved every changed item cold, and every key matched. SK-TT4b-T5 now has exactly two ABCB stanzas: glow/below and sing/spring. All four distractors fail on lines 2 and 4: night/glad, glow/sleep, shine/mud and hum/day. SK-TT3a-T5 still has exactly one wildlife choice. The "everywhere/chair" rhyme in the Teach example is true. The checker result is `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

## Not fixed
- None.

## New problems
- [SK-TT4b-T2 vs SK-TT4b-T1] **MUST.** One Test prompt gives away another Test answer. T2 asks "Which line should replace stanza 2, line 4 to keep Rosa's rhyme pattern?" That names the exact line T1 asks the child to find (`p2:2:4`). Children can go back during a test, so T1 becomes a free point. This was there before the fix pass, but the brief asks for exactly this check. Fix: give T2 its own 4-line `stem` stanza (ABCB, with line 4 left blank or broken) instead of pointing at p2. Another option is to word T2 so it does not locate the line, for example "Rosa wants to fix the line that breaks her rhyme pattern. Which new line should she use?" The first fix is cleaner, because the "blue" rhymes in the choices would still point to stanza 2.
- [SK-TT4b-T1] **SHOULD.** The new prompt states the pattern outright ("line 4 of each stanza should rhyme with line 2"). That reduces T1 to checking three end-word pairs. It also hands the child the pattern that T5 (DOK 3, "keep the same rhyme pattern") asks them to work out. The Practice twin P1 does not state the pattern, so the Test is now easier than the Practice. The reworded prompt is not needed for the MUST fix, because removing `p2:2:2` from `targets` already removes the second defensible answer. Fix: go back to "One line in Rosa's poem does not follow her rhyme pattern. Which line is it?" and keep the reduced `targets`.
- [SK-TT4b-P1] **SHOULD.** "In one pair of lines … the second line does not rhyme with the line before it" never says what a "pair" is. Read as "any two lines next to each other", it also fits `p1:2:3` (everywhere after heap) and `p1:3:3` (eat after red). Both are targets. Only the couplet reading picks `p1:3:2`. Fix: "Jaylen's poem rhymes in pairs: lines 1 and 2, then lines 3 and 4. In one pair, the second line does not rhyme with the first. Which line is it?"
- [SK-TT4b-T2] NIT, not counted. In the key "It zips right out of view.", the nearest noun before "It" is "tongue" (line 3). Most children will read "It" as the dragonfly, but "The dragonfly zips from view." would remove the doubt.

## Verdict: FAIL
