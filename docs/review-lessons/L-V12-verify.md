# Verify L-V12
Prior findings: 17 checked, 17 confirmed fixed, 0 not fixed
New problems: MUST 1  SHOULD 2

Scope: all MUST and SHOULD findings from L-V12-A (1 MUST, 8 SHOULD) and L-V12-B (2 MUST, 6 SHOULD). 3.L.V.1.b was reviewed as new content. I solved all 10 of its Practice and Test items cold, and every key matched my answer. I also solved every changed item in 3.L.V.1.a, 3.L.V.2.a, 3.L.V.2.b and 3.L.V.2.c (V1a-P2, P5, T3; V2a-T1; V2b-P1, P3, P4, T3, T4; V2c-T5, T6). All keys match.

I checked every draft sentence number in 3.L.V.1.b against the passages:
- p1: sentences 3, 4, 6, 7 and 8 are correct.
- p2: sentences 2, 5, 6, 7 and 9 are correct.

I also checked the renumbered parts of the V2b passage:
- "loudly" is still in paragraph 3.
- "juggler" and "dancer" are in paragraph 2.
- "helper" and "louder" are in the passage.

The V1a-T3 Part B quote "Much of it flows into rivers, lakes and oceans." matches p2:5:2 word for word.

Facts I checked:
- Reptiles have scaly skin, breathe air and lay eggs; amphibians have moist skin with no scales.
- Loggerheads nest at night and dig with their back flippers, and the eggs hatch in about two months.
- Ghost crabs and birds prey on hatchlings, and volunteers patrol Georgia beaches in the morning for turtle tracks.
- A map key explains symbols, a compass rose shows directions and a scale shows distance.
- A desert gets very little rain, and estimate means a careful guess.

The phrase "little swimming babies with tails" is five words, so the Teach note is correct. `node verification/check-content.js --all` gives PASS (0 failures, 0 warnings).

## Not fixed
(none)

## New problems
- [SK-V1b-P3] MUST: the clue gives away the answer. "One choice is a sweet liquid, and one is the dirt plants grow in" rules out both distractors (nectar, soil) in a 3-option dropdown. That leaves pollen, and the child does not need to know any of the words. The item also nearly repeats the 3.L.V.1.a Teach example ("Bees carry pollen, a fine powder made by flowers, from one flower to the next"). Fix: drop the second sentence of the clue and give only a strategy. For example: "Bees carry a fine powder from flower to flower. Think of the science word for that powder, then try each choice in the sentence." Optionally, replace soil with a nearer miss such as "seeds".
- [SK-V1b-T4] SHOULD: the test is too close to Teach and to the sister lesson, so it can be answered from memory.
  - Row 1, "animals that hunt other animals" → predators, is the exact example in 3.L.V.1.b Teach point 2.
  - Row 3, "the place where an animal finds the food, water and shelter it needs", is copied word for word from the 3.L.V.1.a passage (p1:2:2), and habitat is the example in Teach big.
  - Row 2, volunteers, is defined almost word for word in 3.L.V.1.a Learn 1 and again in the P5 `why`.

  Fix: use test words that are not in either lesson's Teach, Learn or passages. For example: "baby turtles that have just come out of the egg" → hatchlings; "the way the ocean water moves in and out each day" → tide (or change Theo's draft); "people who study animals" → scientists. Or at least rewrite Teach point 2 so it no longer uses the predator example.
- [SK-V1b-T2] SHOULD: the prompt is confusing and the key stands out.
  - The prompt "Which word should replace this hole?" asks the child to replace a two-word phrase with one noun. Read literally, the result is "She lays her eggs in nest."
  - "Hole" is one plain word, not the "long group of plain words" the lesson teaches.
  - The distractors shell and flipper are not places, and pond is ruled out by the beach setting, so nest is obvious.

  Fix: change sentence 5 to "She lays her eggs in the hole she dug and covers them with sand." Ask: "Which word should replace the hole she dug?" Use the choices "nest / burrow / den / shelter" (all places an animal uses), so the child has to match "a place made for eggs."

## Verdict: FAIL (1 MUST left: SK-V1b-P3)
