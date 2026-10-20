# Final verify L-V12
Lessons: 3.L.V.1.a, 3.L.V.1.b, 3.L.V.2.a, 3.L.V.2.b, 3.L.V.2.c
Diff base: 9f5acdd (commit that added L-V12-verify.md)
MUST: 0  SHOULD: 1  NIT: 1

## Prior findings (L-V12-verify.md, fixes Round 2)
- [SK-V1b-P3] MUST, clue ruled out both distractors. Fixed. The clue now gives only a strategy ("Think of the science word for the powder that bees carry ... Then try each choice"). It no longer describes nectar or the third choice. "soil" is now "seeds", a nearer miss that is still not a powder.
- [SK-V1b-T4] SHOULD, rows could be answered from memory. Fixed. The rows are now shore, scientists and protect. None of these words appears in Teach, Learn, practice or the other test items of 3.L.V.1.a or 3.L.V.1.b. Sentence 7 no longer uses the Teach predator phrase.
- [SK-V1b-T2] SHOULD, ungrammatical key and weak distractors. Fixed. Sentence 5 now reads "in the hole she dug". Replacing "hole she dug" gives "in the nest", which is grammatical. The choices are nest / den / hive / shelter, all places animals use.
- Round 2 follow-up (no test item shows a word part that another test item asks for). Confirmed for SK-V2a-T4 (rebuild row removed), SK-V2b-T4 (now -ment noun vs verb) and SK-V2c-T6 (prewash / disagree / unclear / loudly).

No Round 3 section exists in L-V12-fixes.md, and there is no -verify2.md.

## Changed items solved cold (my answer = key in every case)
- SK-V1b-P3: pollen. Nectar is a liquid, and bees do not carry seeds between flowers. One defensible answer.
- SK-V1b-T2: nest. A den is a resting home (a fox's den), a hive belongs to bees, and shelter is less exact. One defensible answer. The why's definitions are accurate.
- SK-V1b-T4: shore, scientists, protect. Each fits back into sentences 1, 9 and 10. The sentence references are correct.
- SK-V2a-T4: unfair = not, preview = before, helpful = full of.
- SK-V2b-T4: enjoyment, movement and agreement are nouns; enjoy and move are verbs in their sentences. The grammar claim (-ment makes a noun) is correct.
- SK-V2c-T6: prewash, disagree, unclear, loudly. All four affix meanings are stated correctly.
- Passage p2 (Theo's draft): sentence numbers 1 to 10 are intact. The facts still hold (loggerheads nest on Georgia beaches at night, dig with back flippers, hatch in about two months, and crabs and birds prey on hatchlings).

## Test cross-reveal pass (all five lessons)
- 3.L.V.1.a T1 to T5: no item's prompt, stem or choices gives another's answer. The meanings all come from the passage by design.
- 3.L.V.1.b T1 to T5: no test item reveals another (reptile, nest, hatch, shore/scientists/protect, map key). One passage issue: see SHOULD below.
- 3.L.V.2.a T1 to T5: T1 states re- and -able, and T2 states dis-. Neither is asked by another item. T4 (un-, pre-, -ful) and T5 (-ly) are not given away.
- 3.L.V.2.b T1 to T5: none.
- 3.L.V.2.c T1 to T6: none. The T3 prompt ties "full of" to a suffix, but no other item asks for -ful.

## Checker
`node verification/check-content.js --all`: PASS (0 failures). No warnings in L-V12.

## MUST
(none)

## SHOULD
- [3.L.V.1.b p2 / SK-V1b-T2] The passage title is "Sea Turtle Nests". It sits above the draft that T2 is about, so the child sees the word nest right before being asked which word should replace "hole she dug". This is the same kind of reveal that Round 1 removed from sentence 9 ("look for new nests"). Fix: retitle the draft "Sea Turtles in Georgia" or "Loggerhead Babies".

## NIT
- [SK-V2c-T6] Every row can be matched by its base word alone ("wash" leads to prewash), without knowing the affix meanings. The same was true of the earlier refill version. Optional fix: add a fifth column that shares a base word, such as "rewash".

Verdict: PASS
