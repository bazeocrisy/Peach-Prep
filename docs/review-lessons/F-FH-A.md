# Review F-FH (A)
Lessons reviewed: 3.F.F.1.b, 3.F.F.1.c, 3.F.H.3.a, 3.F.H.4.a, 3.F.H.4.b
MUST: 0  SHOULD: 8  NIT: 7

Reviewer A focus: fluency and cursive. I solved all 10 cursive-reading items (SK-FH3a-P1 to P5, T1 to T5) before looking at the keys. All 10 keys match my answers. Each item has exactly one defensible answer. In P4 and T4 the third listed word (bread, sunny) is not offered as a choice, so pick-2 is still unique. No clue gives the answer away. In T2 the clue "How many r's ... where are they?" also fits the distractor "rider", which is fine.

Benchmarks: the Hasbrouck and Tindal (2017) grade 3 50th-percentile ORF norms are 83 (fall), 97 (winter) and 112 (spring). `goal` matches these exactly. The engine's "within 10 WCPM = close to typical" band also matches H&T's own guidance that readers within about 10 WCPM of the 50th percentile are on track.

WCPM math in `renderFluency`: `(read - errs) * 60 / secs` is the standard formula. Errors after the last word read are correctly excluded. A self-correction counts as correct. Insertions are not scored, which is standard ORF practice. A stop before 30 s is rejected.

Passages: about 202 to 210 words each, Flesch-Kincaid about 3 to 4.5, and suitable for an 8-year-old. The bee facts are correct (nectar, proboscis, honey stomach, hand-off to house bees, hexagonal cells, fanning to evaporate water, wax caps, winter store, "tiny bit" per bee in a lifetime, thousands of workers), with one wording exception below.

## MUST
(none)

## SHOULD
- [Fluency passage 2, "How Bees Make Honey"] "These house bees chew the nectar" is a common children's-book simplification, but bees do not chew nectar. They work it in their mouthparts and add enzymes that change the sugars. Fix: "These house bees mix the nectar in their mouths, adding special juices, and pass it from bee to bee."
- [3.F.F.1.c check, and FLUENCY.how shared by both lessons] The 1.c checklist says to use "a passage they have practiced" and to compare the speed with "the typical speed for this time of year". The parent note also says to reread one passage 3 or 4 times. But H&T norms come from cold (unpracticed) reads, and the shared `how` text tells the grown-up to "Pick a passage the reader has not practiced." So the instructions contradict each other, and a practiced read against cold-read norms overstates the child's level. Fix: in the 1.c check, make the speed line say "on a NEW passage", or drop the speed line from 1.c and keep only the prosody lines, since the standard is prosody. Also give 1.c its own `how` text that allows practiced passages for the expression work.
- [3.F.F.1.b and 1.c, FLUENCY.passages] There are only 3 passages, shared by both lessons. The 1.b parent note asks for "a new passage once or twice a week", and the 1.b mastery check also needs a new passage. After about two weeks, or after any 1.c repeated reading, no unpracticed passage is left, so later scores are inflated. Fix: add more grade-3 passages (at least 8 to 10), or tell parents to use any unread grade-level book page and count the words by hand.
- [3.F.F.1.b check, items 2 and 4] "Fixed at least one mistake by rereading" and "Sounded out a new long word in parts" can only be checked if the child happens to make a mistake or meet a new long word. A child who reads 100% accurately cannot check them, and mastery is then blocked. Fix: change them to "When a word was misread, the reader went back and fixed it (check if no mistakes were made)", and "Can sound out a new long word in parts (try one from the passage if none came up)."
- [3.F.F.1.b tip] "The Milestones does not time reading" can be read as "the test is untimed", but the EOG sections have time limits. Fix: "The Milestones does not measure how fast you read, but every question depends on reading the passage accurately."
- [js/skills.js renderFluency `tick`] For the first second after Start, the clock shows "0:60" because `left` is 60 and is printed as "0:" + "60". Every run shows this. Fix: show `left >= 60 ? "1:00" : "0:" + String(left).padStart(2, "0")`.
- [3.F.H.4.a Teach point 4 and check item 4] The descender lists do not match each other and are incomplete. Teach says "g, j, p and y hang below". The check says "g, j, p, q and y". In the site's own font (Playwrite US Trad), cursive f also loops below the line, and z has a descending tail. A child who writes f correctly would seem to break the rule. Fix: use one list in both places: "g, j, p, q, y, and the bottom loop of f and z, go below the bottom line."
- [3.F.H.4.a check item 5] "Writes their own first and last name in cursive with capital letters" requires capitals, but the lesson teaches no capital letters, and the tracing sheet has only lowercase rows. Fix: add one tracing row of the capitals most children need (or a "write your name" row with a note to look up the capitals), or change the item so it covers only the lowercase letters taught.

## NIT
- [renderFluency goalSource] "middle of the national grade 3 range" is accurate but vague. Fix: "50th percentile (median) of national grade 3 norms, Hasbrouck and Tindal, 2017".
- [renderFluency accuracy] `acc` is rounded before the 95% test, so 94.5% shows "95% ... good level for reading on your own". Fix: compare the unrounded ratio (`(read - errs) / read >= 0.95`) and round only for display.
- [3.F.F.1.b Teach example note] "If the reader had said 'a ball' or 'the yard' was skipped" is hard to parse. Fix: "If the reader had said 'a ball' instead of 'the ball,' or skipped 'the yard,' those would count as mistakes..."
- [SK-FH3a-P1 clue] The clue points to "the last letter of the second word" (cat vs car), but the distractor "My hat is gray." differs at the first letter. Fix: "Look closely at every letter of the second word and at the last word."
- [SK-FH3a-P4, SK-FH3a-T4 prompt] "Which TWO things are on the list?" when three are listed. Fix: "Which TWO of these things are on the list?" (T4: "Which TWO of these words are in the box?").
- [3.F.H.4.b Learn 2 show] "sun   ny day" uses several spaces, and HTML collapses them into one, so the "big gap" looks like a normal space. Fix: write it as "sun [big gap] ny day", or use non-breaking spaces.
- [renderTrace / .trace-row] `white-space: nowrap` at 2.1rem. "My dog likes to play." will likely overflow at phone width (360 px) and cause horizontal scroll. Fix: allow wrapping, or scale the font down on narrow screens (print layout is unaffected).
