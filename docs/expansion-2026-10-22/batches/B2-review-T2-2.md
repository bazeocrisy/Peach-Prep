# B2 review T2-2: 3.T.T.2.a, 3.T.T.2.b and 3.T.T.2.c

**Role:** independent content reviewer B2-T2-2. I did not write these lessons, and I did not read the other reviewer's file. I read `B2-b2a-author-log.md` only after my answers were saved and compared.
**Scope:** `js/data/lessons/T-T2.js`, the 2.a, 2.b and 2.c blocks: `core`, `similar`, `addons`, the new passages, the figures `tt2-c-fire-station.svg` and `tt2-c-bike.svg`, and Learn It and Watch Me. I also read `practice`, `test` and `testB`, and I checked for leaks into T-TS.js (TS-SEQ, TS-DESC, TS-CE, TS-CC), T-SS.js, T-C.js (3.T.C.1.b) and every other data file.
**Read-only:** this is the only repo file I wrote. My scratch work is in `scratchpad/b2t2r2/`.

## Verdicts

| Lesson | Blind agreement | MUST | Verdict |
|---|---|---|---|
| 3.T.T.2.a | 2 of 2 truly blind (16 more keys exposed by my own script bug, see §1; I agree with all of them) | 1 | **CHANGES REQUIRED** |
| 3.T.T.2.b | **18 of 18** (fully blind) | 1 | **CHANGES REQUIRED** |
| 3.T.T.2.c | **18 of 18** (fully blind) | 4 | **CHANGES REQUIRED** |

No key is wrong in any lesson. Every MUST is a leak or a hint or item design that hands over the key. Scoring is correct throughout. The browser test passed at both sizes.

## 1. Blind solve

**Method.**
- `b2t2r2/blind2.js` loads T-T2.js through a stub `PP.addLesson`. It prints the passages each item uses, with paragraph and sentence numbers and figure alt text, then every `core` item in set order (resolving each `{ref}`) and every `similar` item.
- It shuffles choices, dropdown options, match rows and order steps with an LCG, seed 31337. It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception` and `like`.
- I saved my answers to `answers-3.T.T.2.b.json` and `answers-3.T.T.2.c.json` before running `compare.js`, which maps them back through the saved permutation.

**Results.**
- **2.b: 18 of 18. 2.c: 18 of 18.** Neither was open in any form before I solved it.
- **2.a: not blind, disclosed.** My first script (`blind.js`, seed 4242) stripped key fields only at the top level, so it printed the nested `correct: true` flags and the dropdown `answer` indexes for 2.a.
  - I saw that output, so 16 of the 18 2.a keys were exposed.
  - The two hot-text items, C06 and C11, kept their `answer` field stripped, and I solved them blind: **2 of 2**.
  - I then fixed the script before printing 2.b or 2.c. I had displayed only the 2.a section of that first output.
  - For the 16 exposed 2.a keys I re-derived each answer from the passage. I agree with all of them, but that is a confirmation, not a blind result.
- **Clean blind sample: 38 of 38.**
- **Close calls:**
  - 2.c C06, row "that cans can be used again": Both is defensible but inferential (SHOULD-2c-1).
  - 2.c C02: "What do hummingbirds eat besides nectar?" is a good trap, because both texts mention insects.
  - 2.c C11 Part B: "one from each passage" makes the ladder sentence the only fit from passage 1.

## 2. Mechanical checks

- **Points.** Every choose-two or choose-three item is worth 2: 2.a P3, P5, C06; 2.b C03; 2.c C01, C10, C11. Every order item with four or more steps is worth 2: 2.b C06 and C11, and 2.c C07, each with five steps. Every two-slot dropdown, match and ebsr item is worth 2. Core totals are 21, 21 and 24 points.
- **DOK.**
  - 2.a and 2.c: no DOK 1; eight at DOK 2 and seven at DOK 3.
  - 2.b: one DOK 1 (C03, allowed); seven at DOK 2 and seven at DOK 3. The author log says eight at DOK 3, but C07 is DOK 2.
  - Several DOK 3 labels are generous; see 2.b C13 and 2.c C13.
- **Formats.** mc appears six times in each lesson, which is the maximum. There are at least four technology-enhanced formats in each.
- **Gates.**
  - `check-content.js --all`: PASS, 0 failures.
  - The only warnings for these lessons are the uncovered-similar warnings (rule 9): 2.a 11 of 15, 2.b 10 of 15, 2.c 4 of 15.
- **Keys at authored index 0.** Every mc and dropdown key in these lessons is the first option in the source. That is harmless, because the engine shuffles choices, dropdown options, rows and steps once per sitting (items.js:109, 138, 184, 192, 242, 403, 470).
- **Practice, test and testB** are unchanged from the baseline (`scratchpad/baseline`, hashed per item).

## 3. Official components

| Lesson | Official wording (standards.js, p. 33) | Coverage |
|---|---|---|
| 2.a | "Describe the techniques used to present and design expository texts, including facts and key details used to support the main idea." | Main idea: stated (C06, C11), unstated (C03, S03) and compared (C13). Key details: P3, P4, P5. Key versus merely interesting: P4, C05, C08, C12. Design: heading (C04, C10, S01), text box (C08, C12), caption and labels (P7, C14), diagram (C09). **All covered, and each set touches at least three.** |
| 2.b | "Describe the relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text." | **Historical events:** C05 (Morgan), C06–C10 (Ferris wheel), C15, S02. **Scientific ideas:** P4, C02, C03 (monarch stages), C14 (lightning chain), S03 (heat). **Technical procedure:** C04 (cup phone), C11–C13 (bike tube), C15, S01. **All three covered**, with time-order and cause-and-effect language throughout. Set 2 is all history, which still meets "three components" under the matrix's component list. If C05 is replaced (MUST-2b-1), keep a historical item in set 1 or accept that set 1 then has none. |
| 2.c | "Integrate and explain information from two texts on the same topic in relationship to important points and key details." | Integrate and explain: C04, C07, C09, C11, C13, C15. Key details in both or in one: C01–C03, C05, C06, C10, C12, C14. **"Important points" is thin:** only C08 works at the level of what each text is mainly about. See SHOULD-2c-4. |

## 4. Findings

### MUST

**MUST-2a-1. S03 (similar) paraphrases a form A check passage of 3.T.SS.1.b.**
- **Evidence.** The 2.a S03 stem is: "On Mondays at the Elm Street library… On Wednesdays, kids build towers and bridges in the building club. On Fridays, they can watch a movie or borrow a board game. In summer, there is a reading contest with prizes."
- The 3.T.SS.1.b form A passage "The Pine Hill Library" (T-SS.js) reads: "(6) The library also plans special activities for kids… (8) On Wednesdays, kids can join a building-block club. (9) In the summer, there is a reading contest with prizes." It also says, "Kids can check out movies, puzzles and even board games."
- Sentence 9 is reproduced almost word for word, and the frame is the same: a library that offers kids activities on set days.
- **Why it matters.** SK-SS1b-T2 asks for "a heading above sentences 6 through 9" (key: "Fun Events for Kids"). S03's key, "The Elm Street library offers kids different activities all year," rehearses exactly that answer. This breaks 04 §4.3 rule 4.
- **Fix.** Replace S03's setting with something other than a library or kids' activities schedule, for example a community garden's jobs across the seasons. Keep the unstated-main-idea task.

**MUST-2b-1. C05 (Garrett Morgan) collides with a TS-CE core passage.**
- **Evidence.** TS-CE (T-TS.js, `passages[3]` "A Signal That Saved Lives") is a full passage that is new in B2. It says: "Garrett Morgan, an inventor in Ohio, saw one of these crashes… So Morgan decided to build a better signal… The yellow light warns drivers…"
- Its core set 2 item 1 is an EBSR, "Why did Garrett Morgan decide to build a better signal?"
- 2.b C05's stem tells the same causal chain (no-warning signals, crashes, Morgan sees a crash in Cleveland, a warning signal, today's yellow light). Its key is that same chain.
- **Why it matters.** Whichever lesson a child meets first pre-answers the other. That breaks §4.3 rule 4.
- **Context.** The TS author's own fix pass (T-TS.js lines 453, 3021, 3116, 3188, 3347, as of 18:22) has already moved the bike tube, the fire station, the "heading above paragraph N" frame and the text-box frame out of T-TS in favour of T-T2. Garrett Morgan was not moved.
- **Fix.** C05 is a short stem, so it is the cheaper side to change. Use another historical cause-and-effect chain that is not on the site, and check it against the T-TS, T-C, T-RA, T-SS and T-T1 passages, for example how a town got its first public library or bridge. Keep "explain how the events are connected."

**MUST-2c-1. C03: hint 2 sorts the choices so that only the key is left.**
- **Evidence.**
  - Hint 2: "Read both texts and note which details are about the plant itself and which are about the baskets."
  - The choices are "A large basket can take weeks to finish" (the key) and three plant facts: the hay smell, the bending blades and the sandy soil.
  - Applying hint 2 leaves one basket detail, which is the key. The item can also be solved by topic alone, without reading.
- **Knock-on leak.** One distractor, "Sweetgrass blades bend without breaking," is half of the key of C04, the next item in the set.
- **Fix.**
  - Hint 2: "Read 'Sweetgrass' first and cross out any detail it tells. Then check what is left in the basket text."
  - Replace one plant distractor with a basket-side detail that is NOT only in the basket text. A drying detail would leak C05, so do not use that. Alternatively, make the distractors a mix of basket and plant facts.
  - Drop "blades bend without breaking" as a C03 option.

**MUST-2c-2. C08: hint 2 echoes the key and narrows Part A to it.**
- **Evidence.**
  - Hint 2: "Think about what the school does with things that are not cans."
  - The Part A key is "It shows that food scraps, **not only cans**, can be turned into something useful."
  - The three distractors are all about cans or metal (energy saved, the magnet, aluminum).
  - So hint 2 both repeats the key's distinctive phrase and leaves only the key standing.
- **Fix.** Hint 2: "List what the school passage tells that the can passage never mentions. For Part B, choose one sentence." Keep hint 3 as it is; it rules out the magnet.

**MUST-2c-3. C07 gives away C09 (same set), and the pair fails the §6 distinctness rule.**
- **Evidence.**
  - C07, an order item, shows the steps "A student drops the can into the blue Recycle bin … The metal is rolled into sheets and made into a new can" on screen as the choices.
  - C09, two items later, asks why the Recycle bin is better for a can. Its key is "The can can become a new can, which takes less energy than making one from rock."
  - C09's distractors are weak (worms turn the can into soil; the blue bin gets too full), so after C07 the key is the only option left.
  - Against C07, C09 has the same texts (p7 and p8), the same component (integration), the same context (school recycling) and only a different task. That is one difference of the four; §6 needs two.
  - This breaks the post-B1 rule "Earlier items must not give away later ones in the same set."
- **Fix.** Either:
  - re-aim C09 at a different component, such as tracking which text tells what, or what one text adds to explain a quote ("Malia says most of it gets used again. Which passage explains what 'used again' means for food scraps, and which explains it for cans?"); or
  - move the integration question to set 3 with a new pair and end C07 at "melted at a factory".

**MUST-2c-4. C01 and C10 are word-search items: the prompt names the word that appears only in the key sentences.**
- **C10 evidence.** The prompt says "Both passages tell that **a truck** is part of recycling." The word "truck" appears in exactly two of the six targets, and those two are the key. Hint 3 ("check the other sentences for what does the carrying") finishes the job.
- **C01 evidence.** The prompt says "can be found in the same **state**." Of the six targets, only the two keys name a state (Georgia). Hint 3 rules out the one other place-name sentence and then says "find a place that both passages name," so hint 3 alone leaves only the keys.
- **Why it matters.** Both items are worth 2 points, are labelled DOK 2, and behave like DOK 1 locate tasks. They also share one stem frame and key logic (§6 rule 1). Hint 1 of C01 says the shared fact may be told "even when the words are different," but here the words are identical. This is the Ltexts-5 pattern (§6 rule 5, the answer word echoed in the stem).
- **Fix.**
  - Rewrite at least one of them, ideally both, so the shared fact is worded differently in the two texts. For example, Tiny Flyers' "must eat many times every day" against The Long Trip South's "the birds eat and eat". Check that this does not pre-answer Together P1 or P4.
  - Make the prompt name the idea, not the word.
  - Make hint 3 rule out one distractor that is not a place or vehicle sentence and leave at least two candidates.

### SHOULD

**SHOULD-2a-1. Set 3 has no similar item.** All three similar items map to set 1, plus P3 in set 2 (S01 to C04; S02 to P3 and P4; S03 to C03). A child who presses Show me how on any of C11–C14 or P5 never sees "Try a similar question". 04 §4.7 asks for one similar item per set. Fix: when S03 is rewritten (MUST-2a-1), map it to a set 3 item honestly. For example, a two-paragraph main-idea comparison would map to C13; a stated main-idea sentence would map to C11.

**SHOULD-2a-2. Hint ladders that come too close to the key.**
- **C09.** Hint 2 says "notice what is closest to where the pole ends." The figure shows the gear rack there, so hints 1 and 2 let a reader write down the key. Fix: drop the clause and keep "Read every label on the bottom floor."
- **P3 (ref).** Hint 3's one reason ("the queen is not a worker bee") removes both queen choices, and its closing test ("is it about workers, and does it name a job?") removes "thousands of bees". Only the two keys survive. Fix: keep the queen ruling-out and end on a neutral question that does not restate both key criteria.
- **C13.** Hint 3 rules out the programs-and-cookies choice and then says "look at the first words of each paragraph to see when each one happens." That settles key against reversed key. The fourth choice ("why singing is fun / why the gym is too small") is absurd, so the key is the only option left. Fix: replace the absurd distractor with a plausible one-paragraph main idea, or end hint 3 after the ruling-out.

**SHOULD-2a-3. Weak distractors.**
- **C05:** "every kind of tomato is red" and "it should come first, because colors matter most" are not plausible to a grade 3 reader. Fix: use "It is not about tomatoes at all" and "It tells a step, so it must be a key detail."
- **C14:** with three options, hint 3 removes "A bike race" and the alt text and figure show no rider, so the item is effectively DOK 1. Fix: add a plausible but too-narrow caption such as "A bike's chain and pedal," and keep the rider choice.

**SHOULD-2b-1. C14 (lightning to thunder chain) repeats a TS-CE model answer.** TS-CE `coach.strong`, unchanged from the baseline, reads: "Lightning heats the air so fast that it bursts out, and that push of air is the boom we hear." That is C14's key chain. It is parent-facing, not a check passage, but it is the lesson's model of a strong cause-and-effect answer. Fix: pick another science chain for C14, such as why a puddle dries faster in the sun or why a metal slide is hot at noon. S03 already uses heat moving through a spoon, so avoid conduction.

**SHOULD-2b-2. C13 is literal recall labelled DOK 3, and C12 in the same set prints its reason.** p5 ¶4 says "Rub the spot with sandpaper **so the glue can grip**." C13 asks what happens if you skip the sandpaper, with key "The glue might not grip…". C12, the item just before, has the option "Rub the spot with sandpaper **so the glue can grip**." Fix:
- relabel C13 as DOK 2, or ask a less literal consequence (for example, which step would have to be done again); and
- shorten C12's option to "Rub the spot with sandpaper."

**SHOULD-2c-1. C06, row "that cans can be used again" = Both, rests on inference for the school passage.** Three Bins never says cans are used again. It has a Recycle bin and Malia's "most of it gets used again," which is about the lunchroom's waste in general. The item's own hint 1 ("only when each passage tells it") and mix-up line ("putting a fact under Both because it fits the topic of both passages") argue against the key. The author flagged this too. Fix: replace the row with a fact both texts state, for example "that plastic bottles are recycled too" (p7 2:1 and 2:4; p8 2:2). Check that it does not point at C10's key sentences.

**SHOULD-2c-2. C05 and C14 share one frame and key logic.**
- Both items say "the note has two mistakes; choose which text tells each fact."
- Each has the same three-option dropdown (only text 1, only text 2, both) twice.
- They differ only in text and context.
- Fix: change C14's task, for example a hot-text "choose the sentence in each passage that shows Jamal's notes are wrong" or a match.

**SHOULD-2c-3. C13 is near-literal.** p10 3:2 says "Dribbling let a player carry the ball down the court without breaking the rule about running." That is the key almost word for word, and hint 2 sends the child there. A DOK 3 label is generous. Fix: relabel it DOK 2, or ask the child to explain why the dribbling change was needed, using the rule from passage 1.

**SHOULD-2c-4. "Important points" from the official wording is barely practised.** Almost every item integrates details. Only C08 asks what one text adds to the other's point. Teach point 1 ("find what each text is mostly about") is never practised. Fix: turn one set 3 item into a key-point synthesis, for example "What do the two basketball passages, read together, show about how the game began and changed?" Keep distractors that are true details from only one text.

**SHOULD-2c-5. S01 hint 2 points at the key's verb.** Hint 2 says "Text 2 does not use the word bury in the same way. Look for words that mean the acorns were buried." Only two choices contain "bury," and hint 3 then removes the other one. Fix: "Text 2 tells the same fact in different words. Check each choice in both texts."

### NOTE

- **NOTE-1. Collisions already fixed on the TS side (state at 18:22).**
  - 2.b p5 "How to Patch a Bike Tube" collided with TS-SEQ C14 ("How to Patch a Bike Tube", why pump air before dipping). TS-SEQ now uses a paper snowflake.
  - 2.a p4's fire station with a pet dog in a text box collided with TS-DESC's fire engine passage, where the Dalmatian was a non-key detail. TS-DESC now uses "A Kitchen on Wheels".
  - 2.a C04's "add a heading above paragraph N" frame and C08's text-box frame were ceded to 2.a.
  - If the TS fix pass is reverted or reworked, recheck these.
- **NOTE-2. Recycling is a shared topic but no key fact is shared:**
  - TS-DESC `similar[1]` (recycling center bins by material);
  - 3.T.C.1.b `similar[0]` ("Our School Recycles" text box);
  - 3.T.C.1.c Watch Me (recycling club poster).
  - 2.c p7/p8 test different facts.
- **NOTE-3. A pre-existing overlap with 3.T.C.1.b form A (on main, not introduced here).** Together P2 and P3 (milkweed is the only food; "Many birds will not eat monarchs") match 3.T.C.1.b form A content. That test's Part B has the choice "Many birds will not eat monarchs." The new addons add hints and how to P3, which restate it. Record it for the PP-004 follow-up.
- **NOTE-4. Small within-set leaks:**
  - 2.a C09's hint 3 and how name "the section about the engine bay" for gear and truck, which half-settles C10 slot 1.
  - 2.c C13's hint 2 ("Find the rule about running in 'A Game for a Cold Winter'") tells the child the rules are in passage 1 before C14 asks where the number of rules is told.
  - 2.a P3 (set 2, key "Older workers gather nectar and pollen") overlaps P5 (set 3) Part A. The sets are separate, which the author planned.
- **NOTE-5. Together P6 (2.a)** hint 2 says "The caption says what the diagram shows," which is P7's slot 1 key. It is general teaching (teach point 6 says the same), so it is acceptable.
- **NOTE-6. Fair but mild hints:**
  - 2.b C02 hint 2 ("find the sentence that says the skin splits one last time… the sentences around it") together with the prompt's "just before" pins sentence 5:1. Wrong targets 5:3 and 5:4 are in the same paragraph, so it meets the post-B1 rule.
  - 2.c C11 hint 2 names the content of the passage 1 key. Passage 1 holds two Part B choices, so it meets the EBSR rule.
- **NOTE-7. 2.b C12 hint 3** ("Check whether the other choice that is left…") is confusing: two choices are left, not one. Suggest: "Check the two choices that are left: which one could happen before the tube comes out?"
- **NOTE-8. Weak but harmless distractors:**
  - 2.b C05: "city took away all of its signals"; "cars stay out of Cleveland".
  - 2.b C09: "riders were too scared"; "planners did not like the tower".
  - 2.a C10 slot 2: "a key detail, because it tells where the firefighters sleep".
  - 2.a S01: "How Tires Are Made".
- **NOTE-9. Frame matches with the lessons' own forms (content distinct, no leak):**
  - 2.a C10 versus testB TB4 ("add one more key detail");
  - 2.c C06 versus form A T2 ("match each one to the passage that tells it, or to Both").
- **NOTE-10. Facts verified** (§6): Garrett Morgan, the Ferris wheel, Naismith, kudzu, sweetgrass baskets, the 60-day aluminum can, and dolphins resting half the brain.
  - The sweetgrass sentence "their ancestors were brought here from West Africa" is accurate and suitable in tone for grade 3.
  - The p4 claim that the planners wanted "something even more amazing than the tower in Paris" is the common account; Wikipedia frames it more loosely, as an Eiffel-like centrepiece.
  - "Taller than a 20-story building" is true (264 ft).
- **NOTE-11. The author log says 2.b has eight DOK 3 items; there are seven.**
- **NOTE-12. A transient page error.** In my first full browser run, every 320 px page logged one error, "Unexpected token ']'". It did not recur in two clean reruns of the same script. T-TS.js, T-SS.js and T-C.js were being rewritten by other agents during the run (mtimes 18:20–18:22), so a half-written data file served mid-write is the likely cause. Rerun after the batch settles.

## 5. Together sets (Practice Together on a core lesson)

| Lesson | Before (ceil(n/2) split) | Now (practice minus core refs) |
|---|---|---|
| 2.a | Together P1, P2, P3, P6 (4); Try P4, P5, P7 | **Together P1, P2, P6 (3).** Core refs: P4, P7 (set 1), P3 (set 2), P5 (set 3) |
| 2.b | Together P1–P3 (3); Try P4–P6 | **Together P1, P2, P3, P5, P6 (5).** Core ref: P4 |
| 2.c | Together P1–P3 (3); Try P4, P5 | **Together P1–P5 (5).** No refs |

- **Consistent with 01-architecture §2.2.** "Practice Together on a lesson with core becomes `L.practice` minus every item that core references with {ref}, with no halving." check-content rule 10b prints exactly these lists, and the browser shows them. The brief mentions 2.b and 2.c; note that **2.a also changed, from four to three items**, because P3 (a Together item, not on the inventory's reuse list) was pulled into core set 2. The author explains why (P3, P4 and P5 pre-answer each other) and it is allowed, but it departs from 03-practice-inventory.
- **No saved data changes meaning.**
  - Together progress is stored only as `pp.progress.v1[k].practiced` (a boolean, through `mark(k,"practiced")`, skills.js:276) and `history.state.ppDone` (session navigation, app.js:68-71, 318-319). Nothing is stored per Together item, and the set id `SK:<k>:p` is unchanged.
  - For 2.b and 2.c, the items that joined Together (2.b P5, P6; 2.c P4, P5) are exactly the old Try items. A child who finished both old steps has already seen every item now in Together, so a kept `practiced` tick is still truthful.
  - `pp.practice.v1` stores only core and similar records by item id. No Together id is a core id, so there is no collision.
  - An old `tried` flag from the old two- or three-item Try no longer ticks the Try step. That is by design (§2.2.4).
- **Residual risks (all low):**
  1. A `practiced` tick earned on the old three-item Together now sits on a five-item set (2.b, 2.c), or a four-item one on a three-item set (2.a). The tick stays, which is honest under the point above.
  2. Former Try items (2.c P4 is DOK 3 ms, P5 DOK 3 mc; 2.b P6, P5) now run with Help me available from the start instead of after one wrong try, so they are less independent. This is acceptable for Together.
  3. 04-content-plan §4.1 still says "practice stays unchanged, so Together keeps its current items." The lead decision in 01 §2.2 supersedes it, so update the plan to avoid confusion.
  4. An old history entry's `ppDone.n` could show "N of 3" after the set grows. It is display only and session only.
- **Together does not pre-answer set 1** in any lesson that I could find. The author's residual-risk note on 2.a P1 and C04 is fair: P1's distractor tells that paragraph 2 is about the queen, but it does not separate "The Hive's Queen" from "Laying Eggs All Day".

## 6. Browser test

- **Setup.** Server: `node verification/serve.js . 8792`. Preinstalled Playwright Chromium, fresh browser contexts. Script: `b2t2r2/pw.py`; results: `b2t2r2/pw-result.json`; screenshots: `b2t2r2/shots/`.
- **Coverage.** For each lesson at **320×568** and **1366×768**, all fifteen core items (sets `:y`, `:y2`, `:y3`) were opened. At 320 the player opens on the Passage tab, and the script switches to Question.

| Check | 2.a | 2.b | 2.c |
|---|---|---|---|
| All 15 items render; a correct answer gives "That's right!" | yes, both sizes | yes | yes |
| **Check my answer** (real click on a wrong choice for mc and ms; a wrong response set otherwise) gives "Not quite. Try again, or ask for a hint." | P4, C06, C11 | P4, C04, C06, C11 | C01, C06, C11 |
| **Hints 1 to 3** show the authored `hints[0..2]` in order; the button then reads "No more hints" and is disabled; no `.is-hint` outline | yes | yes | yes |
| **Show me how** shows every `how` step (3 or 4), "The answer…", status "Answer shown. Hints used: three." | yes | yes | yes |
| **Try a similar question** opens "Extra question (not one of the fifteen)" with hint and how; Similar hidden on it; solving it works; Next returns to the following core item | P4 → S02 → P7 | C04 → S01 → C05 | C01 → S01 → C02; C11 → S02 → C12 |
| Horizontal scroll (scrollWidth > clientWidth) on any item, passage view, after Show me how, or on the similar item | none | none | none |
| Console errors | only the blocked Google Fonts request (sandbox proxy; not site code); see NOTE-12 for one transient | same | same |

**Figures at 320 wide.**
- `tt2-c-fire-station.svg` renders at 240 CSS px. Its 21-unit labels in a 320-unit viewBox come out at about 15.8 px. All labels are readable in the element screenshot: bunk room, kitchen, street, pole, gear rack, fire truck, big doors. The pole visibly ends beside the gear rack.
- `tt2-c-bike.svg` renders at 225 px, with labels at about 14.8 px. Seat, handlebars, brake lever, chain and pedal are all readable.
- `tt2a-honeycomb.svg` renders at 240 px, labels about 16.5 px.
- Each figure has a figure-only label style and no colour-only meaning.

The server was stopped at the end of the review.

## 7. Sources checked

- Garrett Morgan's three-position signal and the Cleveland crash: https://history.com/this-day-in-history/garrett-morgan-patents-three-position-traffic-signal ; https://en.wikipedia.org/wiki/Garrett_Morgan
- The 1893 Ferris wheel (264 ft, 36 cars of up to 60 riders, built over the winter of 1892–93, opened June 1893, doubts about its safety): https://en.wikipedia.org/wiki/Ferris_Wheel_(1893)
- Basketball's origins (December 1891, peach baskets on the balcony railing, a soccer-style ball, a ladder to get the ball, 13 rules, no running with the ball, hoops, nets and backboards from 1906): https://en.wikipedia.org/wiki/History_of_basketball ; https://ingeniumcanada.org/channel/innovation/james-naismith-and-invention-basketball
- Kudzu (from Japan in the 1870s; planted for erosion control in the 1930s; about a foot a day; grape-scented flowers made into jelly): https://blogs.ifas.ufl.edu/escambiaco/2022/05/04/weekly-what-is-it-kudzu/ ; https://www.aces.edu/wp-content/uploads/2018/09/ANR-2221_HistoryUseKudzu_030222L-G.pdf
- Sweetgrass baskets (Gullah Geechee, coiled sweetgrass stitched with palmetto, coastal Georgia and South Carolina): https://www.britannica.com/art/sweetgrass-basket ; https://www.nrcs.usda.gov/plant-materials/news/sweetgrass ; https://libguides.coastalpines.edu/geechee/sweetgrass
- A recycled can back on the shelf in about 60 days: https://www.alcircle.com/news/aluminium-beverage-can-moves-from-recycling-bin-to-newly-formed-can-in-less-than-60-days-113562 ; https://www.eia.gov/kids/using-and-saving-energy/recycling.php
- Dolphins resting one half of the brain at a time: https://www.smithsonianmag.com/smart-news/dolphins-sleep-with-only-half-their-brain-at-a-time-81426439/ ; https://us.whales.org/whales-and-dolphins/how-do-dolphins-sleep/

## 8. Summary for the lead

- **2.a.** A strong lesson. The design techniques are covered more fully than anywhere else on the site, and the new fire-station figure works at 320 px.
  - **One MUST:** S03 replays the 3.T.SS.1.b form A library passage.
  - **SHOULDs:** there is no similar item for set 3, and three hint ladders (C09, P3, C13) plus two weak distractor sets (C05, C14) need tightening.
- **2.b.** All three official domains are now practised, including the historical series, which was previously unpractised.
  - **One MUST:** C05's Garrett Morgan stem collides with TS-CE's new core passage. The TS side has already given way on the bike tube and the fire station; this one should change here.
  - **SHOULDs:** C14's thunder chain is TS-CE's model answer, and C13 is literal recall.
- **2.c.** Good pairs (sweetgrass, recycling, basketball), and the integration items C04, C11 and C15 are strong.
  - **Four MUSTs:** C03's hint 2 sorts to the key; C08's hint 2 echoes the key; C07 gives away C09; C01 and C10 are word-search items.
  - **SHOULDs:** the "important points" half of the standard needs one key-point synthesis item, and C06's Both row needs an explicit fact.
- **Together** behaves exactly as 01 §2.2 specifies, and no saved data changes meaning. Note that 2.a went from four to three items, and update 04 §4.1's outdated sentence.
