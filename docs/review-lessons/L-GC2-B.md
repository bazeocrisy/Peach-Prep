# Review L-GC2 (B)
Lessons reviewed: 3.L.GC.2.a, 3.L.GC.2.b, 3.L.GC.2.c, 3.L.GC.2.d
MUST: 0  SHOULD: 4  NIT: 9

I solved all 44 Practice and Test items (including every match row, dropdown slot and both ebsr parts) before checking the keys. Every key matches my answer, and no item has a second defensible answer. Both draft passages contain only the intended tense error: Tasha's error is sentence 6 and Diego's is sentence 8. The hottext targets map to the sentences named in `why`. All four lessons teach their official standard text at grade 3 scope, and every Learn example's steps reach the stated answer. `check-content.js --all` passes.

## MUST
(none)

## SHOULD
- [3.L.GC.2.b / Teach point 3 + words "present tense"; affects SK-GC2b-T4] Present tense is shown only with -s forms ("jumps, runs", "walks, sings"). T4 row "Every night, Grandma reads to me before I fall asleep." needs the child to see "fall" as present tense. A child taught only from these examples could decide that fall is not present and mark the row "Tense shifts". Fix: in point 3 write "Present tense tells what happens now or always: jumps, runs, I jump, they run." and in words write "happens now or always (walks, we walk)".
- [3.L.GC.2.c / Teach points 3-4] Point 3 says "Use is, was, has and does for one", and point 4 says "With I and you, use the verb with no s". The two rules conflict for the verb be. Point 3 gives "I is" and "you is", since I and you each mean one person. Point 4 taken literally gives "I were", because "was" has an s. The grade-3 forms I am, I was, you are and you were are never taught. Fix: add to point 4: "Be is special: I am, I was, you are, you were."
- [SK-GC2c-T5] The row "The box of crayons" is the exact example sentence from Teach point 5 ("The box of crayons is on the table."). The test is supposed to use sentences that differ from Teach, Learn and Practice. Fix: change the row to "The jar of buttons" (answer is) and update `why` to match.
- [SK-GC2d-T1] The distractor "melted" makes "The ice on the sidewalk was melted", which puts a participle after a being verb in a grammar item that asks for an adjective. SPEC §6.6 bans this. The `why` claim that "melted ice would not be ice anymore" is also shaky, because half-melted ice is still ice and is very slippery. Fix: replace "melted" with "cold" and change `why` to "Cold does not explain why he holds on; all ice is cold."

## NIT
- [3.L.GC.2.a Teach point 4, SK-GC2a-T3 clue] The list "and, but, or or so" is hard to read. Fix: write "and, but, or, so" or "and, but, or, and so".
- [3.L.GC.2.a Teach point 5] It never says that the part that cannot stand alone has its own who and does-what. A child could call "We ate after lunch." complex because it has "after". Learn 1 does model this, but Teach does not. Fix: "That part has its own who and does-what, and it starts with a word like…"
- [3.L.GC.2.a big idea / Learn 1 step 1] It says "a who", but the subject in Learn 1 is "the storm". Teach point 1 says "who or what". Fix: in Learn 1 write "Find the who or what: the storm."
- [3.L.GC.2.a Learn 2 step 2] "and joins two names: Kofi and his cousin". "His cousin" is not a name. Fix: write "two people".
- [3.L.GC.2.b Learn 3 step 2] "so, when and because can show that one thing led to another". When shows time, not cause. Fix: "So and because show that one thing caused another. When shows that one thing happened at the same time as another."
- [SK-GC2b-T3] "Even when" is the only two-word option, so the key stands out. Fix: make the distractors two words too, e.g. "Only because" and "So that", or use "Even if".
- [SK-GC2b-T5 why] "fly and carry do not fit at all" does not explain why they are wrong. Fix: "Fly and carry are present-tense forms, and they do not go with Priya or the wind."
- [3.L.GC.2.c example note] "More than one puppy chew, with no s" reads as a broken sentence. Ironically, "more than one puppy" takes a singular verb. Fix: "Two or more puppies chew, with no s."
- [SK-GC2c-P1] No child will pick "am" for "The ducks". Fix: use "was" (the options become is, are, was).
