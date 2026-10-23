# B2 author log: TS-SEQ and TS-DESC (author b2b)

**File:** `js/data/lessons/T-TS.js`, the TS-SEQ and TS-DESC blocks only. TS-CE and TS-CC (other author) were not touched.
**Status:** NEEDS INDEPENDENT REVIEW (blind solve). I did not review my own work.
**Gates:** `check-content.js --all` PASS (0 failures). The only warnings on my lessons are the accepted "core items with no similar item" ones. `readability.py`: all four new passages are FK 3.2 to 4.1. `check-writing.js` 0/0. `check-instructional-copy.js` passes. A browser check on port 8752 registered `SK:<key>:p`, `:y`, `:y2` and `:y3` for both lessons, with hints and how on every item and no page errors.
**Lead rules applied:** I applied both rule messages from the lead (hint 2 placement, hint 3 settling at most one blank or step, Together not pre-answering set 1, EBSR hint places, no earlier `why`/`how` giving a later answer, order items worth 2, definitions matching edge cases). The changes they caused are listed in §5.

## 1. Components (from `official`, standards.js; pp. 29 and 33)

**TS-SEQ** (3.T.SS.1.a sequence structure + 3.T.T.2.b):
- S: name the structure
- W: time-order words, including words that tell how long
- O: put steps or events in order
- R: how one step relates to another (why the order matters, what one step makes possible)
- SCI: a series of scientific ideas
- HIST: a series of historical events
- PART: the job of a paragraph or section

**TS-DESC** (3.T.SS.1.a description structure + 3.T.T.2.a):
- S: name the structure, or explain why it was chosen
- MI: main idea
- KD: key details that support the main idea
- KvI: a key detail versus a merely interesting one
- CW: describing clue words
- FT: design features (headings, a text box)
- PART: a section or paragraph and what it is about

## 2. New passages (core only; no check item uses them)

| Lesson | Id | Title | Domain | Words | FK | Used by |
|---|---|---|---|---|---|---|
| TS-SEQ | p3 | How Water Carves a Cave | science/nature | 169 | 4.1 | C06 to C09 |
| TS-SEQ | p4 | How Atlanta Got Its Name (3 headings) | community/history | 144 | 4.1 | C11 to C13 |
| TS-DESC | p3 | A Firehouse on Wheels (3 headings) | community | 177 | 4.1 | C06 to C10 |
| TS-DESC | p4 | Inside a Baseball Glove (text box) | sports | 184 | 3.2 | C11 to C13 |

- **Facts used.**
  - Atlanta: Terminus marked in 1837 at the end of the Western and Atlantic line; renamed Marthasville in 1843 after Gov. Wilson Lumpkin's daughter Martha; renamed Atlanta in 1845. The sentence added in C13 says it officially became a city in 1847 (incorporated December 1847).
  - Caves: limestone dissolved by water made slightly acidic by CO2 from soil, and stalactites built from dripping water.
  - Bike tube: find the leak by the bubbles.
  - Glove: early players caught bare-handed.
  - Reviewers may want to verify these facts.
- **Check texts.** Pine Ridge (TS-SEQ C10) and Oak Street School (S03) are fictional, with no real people.
- **Length.** DESC p4 is 184 words, slightly over the brief's 180. It is within 04 §4.3 (100 to 250).
- **Leak check.** No core, similar, hint or how text names cobbler, peaches, Keisha or Grandpa Earl (TS-SEQ form A), or live oak, Spanish moss, acorns or Savannah (TS-DESC form A). Neither lesson has a form B. Topics were checked against every lesson and set title: no cave, Atlanta-history, fire-engine, glove or cactus text exists elsewhere.

## 3. TS-SEQ: the fifteen

Practice Together = P1, P2, P3 and P6 (revised). Refs: P4 and P5.

| Pos | Id | Set | Comp | Task | Format | DOK | Text | Domain | Differs from others by |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | O | construct | order (2 pts) | 2 | p1 | home | the only order item on p1 |
| 2 | C02 | 1 | PART+R | explain | mc | 2 | p1 | home | the opening paragraph's job; differs from P4 and P5 in component and task |
| 3 | P5 (ref) | 1 | R | predict | mc | 3 | p1 | home | a what-if about the order of steps |
| 4 | C04 | 1 | W | explain/edit | mc | 2 | p1 (sentence box) | home | the effect of swapping a time word |
| 5 | C05 | 1 | S | compare | mc | 2 | stem (library vs art room) | school | the only compare item; a new text and domain |
| 6 | C06 | 2 | O+SCI | construct | order (2 pts) | 2 | p3 | science | a natural process, not a procedure |
| 7 | C07 | 2 | R+SCI | explain + evidence | ebsr | 3 | p3 | science | what an earlier step makes possible |
| 8 | C08 | 2 | W | identify | hottext pick 2 | 2 | p3 | science | time words that tell HOW LONG, not order |
| 9 | C09 | 2 | S+PART | construct | dropdown (2 slots) | 2 | p3 | science | the jobs of paragraphs |
| 10 | C10 | 2 | HIST+O | edit | mc | 3 | stem (Pine Ridge library draft) | community | fix the time order of a history draft |
| 11 | C11 | 3 | HIST+O | sort | match | 2 | p4 | history | track the town's name across time |
| 12 | C12 | 3 | HIST+R | explain + evidence | ebsr | 3 | p4 | history | the cause of an earlier event |
| 13 | C13 | 3 | HIST+PART | edit (insert) | hottext | 2 | p4 | history | place a dated sentence in a section |
| 14 | C14 | 3 | R | transfer, explain | mc | 3 | stem (bike tube) | problem solving | why step 3 comes before step 4 |
| 15 | C15 | 3 | W | transfer, construct | dropdown | 2 | stem (warm-up) | sports | choose time words that keep the order |

- **Counts.**
  - mc 6, order 2, hottext 2, ebsr 2, dropdown 2, match 1.
  - DOK: none at 1, nine at 2, six at 3.
  - Each component appears at least twice. R, the hardest, appears in every set.
  - Domains: home 4, school 1, science 4, community/history 4, problem solving 1, sports 1.
  - Passage loads: p1 4, p3 4, p4 3.
- **Similar items.**
  - S01: plant repotting, order. Like P4 and C06.
  - S02: birdhouse what-if. Like P5 and C14.
  - S03: school-history draft with a relative date ("ten years after"). Like C10 and C13.

## 4. TS-DESC: the fifteen

Practice Together = P1 (revised), P2, P3 and P4 (revised). Refs: P6 and P5.

| Pos | Id | Set | Comp | Task | Format | DOK | Text | Domain | Differs by |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P6 (ref) | 1 | KD | evidence | ms | 2 | p1 | nature | details for one function |
| 2 | C02 | 1 | FT+PART | construct (heading) | mc | 2 | p1 | nature | choose a heading for paragraph 4 |
| 3 | P5 (ref) | 1 | CW | construct | dropdown | 2 | p1 | nature | the clue word also |
| 4 | C04 | 1 | KvI | edit (add a sentence) | mc | 3 | p1 | nature | a key detail vs a true off-point fact |
| 5 | C05 | 1 | S | identify the structure | ms | 2 | p1 | nature | evidence of the description pattern |
| 6 | C06 | 2 | MI+KD | identify + evidence | ebsr | 2 | p3 | community | main idea with headings |
| 7 | C07 | 2 | FT+PART | sort | match | 2 | p3 | community | jobs to section headings, by inference |
| 8 | C08 | 2 | KvI | identify | hottext pick 2 | 2 | p3 | community | interesting but not key |
| 9 | C09 | 2 | CW | edit | mc | 2 | p3 (sentence box) | community | choose the "for example" revision |
| 10 | C10 | 2 | S | explain the author's choice | mc | 3 | p3 | community | why description and not sequence |
| 11 | C11 | 3 | MI | identify | hottext pick 2 | 2 | p4 | sports | main idea stated, then restated |
| 12 | C12 | 3 | KD | evidence | ms | 2 | p4 | sports | support vs looks-only details |
| 13 | C13 | 3 | FT+KvI | explain | mc | 3 | p4 | sports | why a fact is in a text box |
| 14 | C14 | 3 | MI | transfer, construct | mc | 3 | stem (cactus) | nature | write the topic sentence |
| 15 | C15 | 3 | CW | transfer, construct | dropdown | 2 | stem (playground) | school | in addition and such as |

- **Counts.**
  - mc 6, ms 3, hottext 2, dropdown 2, ebsr 1, match 1.
  - DOK: none at 1, ten at 2, five at 3.
  - Each component appears at least twice. KvI, the hardest, appears in every set.
  - Domains: nature 6, community 5, sports 3, school 1.
- **Similar items.**
  - S01: heron, body-part details. Like P6 and C12.
  - S02: recycling-center heading. Like C02 and C07.
  - S03: pine-tree sentence that does not support. Like C04 and C08.

## 5. Weak items, revisions and the lead's rules

**Weak items flagged in 03:**
- **SK-TSSEQ-P6** (Together): **revised**, same id.
  - The implausible distractors ("A yellow lump", "The liquid", "Rinse the butter") are replaced with place phrases from the same paragraphs ("inside the jar", "all around it", "in cold water").
  - This makes a real when/where mix-up. The clue and why are updated. It is still DOK 1, as a guided Together item.
- **SK-TSDESC-P1** (Together, trivial DOK 1 lookup): **revised**, same id. It now asks what "work like paddles" helps the reader understand. DOK 2.
- **SK-TSDESC-P4** (off-skill literal recall): **revised**, same id, and kept out of core. It now asks for the main idea of paragraph 2, with a literal "big bag" misreading as a distractor. DOK 2.

**Ref item changed:**
- **SK-TSSEQ-P4.** The last step was "Spread the butter on toast", which is the key of Together P2, so Together pre-answered a set 1 core slot. It is now "Rinse the butter in cold water", and the why is updated. No core state exists yet (rev "1" is new), so no saved record changes meaning.
- The lead should confirm a new id is not wanted for this.

**Together trimmed so it does not pre-answer set 1:**
- **TS-SEQ P1.** The `why` and addon no longer list the pour, lid and shake order (P4), or say that paragraph 1 tells what you need (C02).
- **TS-DESC P3.** The `why` and addon no longer say that paragraph 1 states the big idea or list the body-part paragraphs (C05).

**Hint 2 placement:**
- Changed to remove single-place pointers: TS-SEQ C04, C07 (now paragraphs 2, 3 and 4, which hold three Part B choices), C14 and S02, and TS-DESC C02, C04 and C11.
- Where the prompt itself names the paragraph (DESC C02, P1, P4; SEQ C09), hint 2 asks the child to summarise each part rather than pointing at a sentence.

**Earlier items giving away later ones:**
- TS-SEQ: P4's how no longer explains where the buttermilk comes from (C04).
- TS-DESC: C04's how no longer says paragraph 1 holds the main idea (C05). C06's how no longer says each section is "one kind of thing on the truck" (C10). C09's how no longer says the section "is not a list of steps" (C10).
- Glove p4: the closing main-idea sentence no longer lists pocket, web and padding, so C11's answer does not name C12's keys.

**Points:**
- Order items with five steps are 2 points: P4, C06 and S01.
- TS-SEQ C09 was cut to two slots (2 points). check-content allows only 1 or 2 points.

**Definitions:**
- TS-SEQ: "step" now covers a process ("one thing that happens, in order, in a job or in a process"). "Time words" now includes words that show time passing, which C08 tests.
- TS-DESC: "detail" now says a key detail tells more about the main idea and some details are just interesting, which C04, C08 and C13 test.

## 6. Teaching added

- **TS-SEQ: teach point 5** (now 5 of 5). Science and history use sequence. In a science process, each step can lead to the next. History uses dates and words like "years later". A paragraph or section can have its own job. This models C02, C06 to C13 and S03.
- **TS-DESC: teach point 5 extended** (still 5). A heading names what its section is about, and a text box can hold a fun fact that is not a key detail. This models C02, C07 and C13.
- **TS-DESC: Watch Me 3** (now 3 of 3), "Grandpa's Window Box". It models a heading and an interesting-but-not-key detail.

## 7. Known residual links for reviewers

1. **TS-DESC set 3.** C12 depends on the main idea that C11 asks for, and C12's how states it. C11 comes first. This is the same kind of chain B0 review 1 accepted (NOTE-1).
2. **TS-DESC set 1.**
   - Together P1 and P2 (paragraph 5, paddling) teach that the feet are for swimming. That rules out one P6 distractor and one C02 heading, but answers neither.
   - Together P4 (paragraph 2 is about the bill and pouch) mildly supports C05's second key.
3. **TS-DESC C10 and C06.** C10's key ("the parts of one thing") hints that the whole-truck choice is the main idea in C06.
4. **TS-SEQ P4 and C04.** P4's step list shows the buttermilk is poured off after the lump forms. C04 asks why "First" would be wrong there.
5. **C15 (TS-SEQ) "Before".** I judge it indefensible ("Before your legs feel loose, stretch" contradicts the jog that loosens them). A reviewer should confirm.
6. **Similar bank.** Three items per lesson leaves nine core items per lesson without a sibling (accepted warning).

## 8. Gate output (my lessons)

```
info  lesson TS-SEQ: Practice Together = SK-TSSEQ-P1, SK-TSSEQ-P2, SK-TSSEQ-P3, SK-TSSEQ-P6
info  lesson TS-DESC: Practice Together = SK-TSDESC-P1, SK-TSDESC-P2, SK-TSDESC-P3, SK-TSDESC-P4
warn  ... similar: 9 of 15 core items have no similar item (both lessons; accepted)
PASS (0 failures)
readability: SEQ p3 4.1, p4 4.1; DESC p3 4.1, p4 3.2
```

## 9. Fixes after B2 review (B2-review-TS-1 = R1, B2-review-TS-2 = R2)

**Corrections to this log.**
- The FK values in §2 were wrong. The first readability run mixed up lessons that share the code 3.T.SS.1.a, and I read the wrong rows.
- The real pre-review values were:
  - SEQ p3: 3.2
  - SEQ p4: 4.7 (over the limit, as R1 MUST-1 found)
- Measured now:

| Lesson | p1 | p2 | p3 | p4 |
|---|---|---|---|---|
| TS-SEQ | 2.0 | 3.4 | 3.2 | 4.1 (147 words) |
| TS-DESC | 3.3 | 2.2 | 3.9 (178 words) | 3.2 |

- §2's DESC p3 row and the §7 fire-engine notes are replaced by what follows.

**Gates after the fixes.**
- `check-content.js --all`: PASS, 0 failures. Only the accepted similar-coverage warnings remain on my lessons.
- `readability.py`: all my passages are at or below 4.5.
- `check-writing.js`: 0 failures, 0 warnings.
- `check-instructional-copy.js`: passes.
- Browser registration check on port 8752: all eight sets register with hints and how, and there are no page errors.

### 9.1 TS-SEQ

| Finding | Fix made |
|---|---|
| R1 MUST-1 (p4 FK 4.7) | p4 rewritten. It is now FK 4.1 |
| R1 MUST-2 (hotel at Terminus) | The hotel is gone. p4 now says "houses and a store went up near the tracks". C11 row 1 is now "A store went up near the tracks." (Terminus). C11's hints, how and why and C12's Part A key, how and why are updated |
| R2 SHOULD-8 (1837 vs 1838) | p4 now reads "In 1837, railroad planners chose the spot where a new railroad to Tennessee would end." and "Workers drove a stake into the red clay to mark it." It no longer says building began in 1837 |
| R1 SHOULD-6 (Peters/Thomson merged, name origin stated as fact) | Two unnamed people: "Some railroad men said Marthasville was too long a name. Then a railroad engineer suggested a new name, Atlanta." The origin is hedged: "No one knows for sure where the name came from. It may come from the word Atlantic, as in the Western and Atlantic Railroad." C11 rows 2 and 3 now read "Some railroad men said the name was too long." and "An engineer suggested the name Atlanta." C12's distractor and hint 3 now say "engineer" |
| R1 NOTE-16 ("busy little town") | Now "a small town". Martha Lumpkin is "a governor's daughter" |
| C13 after the rewrite | The targets moved (the 1845 sentence is now p4:6:5) and the key moved with them. Text and logic are unchanged |
| R1 MUST-4 (bike tube shared with 3.T.T.2.b), lead decision | C14 is a new procedure, "How to Make a Paper Snowflake", with no bikes. It asks why the folding comes before the cutting. Key: "Each cut goes through every layer, so the same shape repeats all around." New distractors, hints, how and why. Hint 3 now ends neutrally (also R1 MUST-10, R2 MUST-5) |
| R1 MUST-10, R2 MUST-5 (C04 hint 3 points to paragraph 4) | Hint 3 now ends "For each choice that is left, ask: is that really what the word First tells a reader?" |
| R1 SHOULD-3 (C04 absurd distractor) | "…a story about a family…" is now "First would mean this step happens at the same time as the shaking." The how is updated |
| R1 MUST-10, SHOULD-4, R2 SHOULD-5, lead (S02 stem states the answer; DOK) | The "because paint slides off wet wood" clause is deleted. The key is now "The paint would go on wet wood and might not stick well." Hint 3 ends neutrally, and the how is rebuilt from the damp cloth in step 2. **DOK relabelled 3 → 2.** Distractors lengthened so the key is not the only long option |
| R1 SHOULD-1 (C08 prompt echoes the key) | The prompt is now "…time words that tell how much time passes, not only the order?" |
| R1 SHOULD-2, R2 NOTE-1 (C07 Part B best evidence missing) | The Part B key is now p3:2:3, "The gas turns the water a little bit sour, like very weak lemon juice." "Limestone is soft enough…" is no longer offered. Hint 2 names paragraphs 2 to 4, which hold three Part B choices |
| R1 NOTE-2, R2 SHOULD-7, lead (C06 how misquote) | Step 3 now reads "Paragraph 5: after a very long time, dripping water builds stone icicles." |
| R1 SHOULD-5 (S01 a copying task) | The box now tells the directions out of order, anchored by "as the very last step", "Before that", "until" and "Start by". Hints, how, misconception and why are rewritten |
| R1 NOTE-15, lead (grade 1–2 Watch Me) | Watch Me 1 (Sam's cereal) is replaced with a grade 3 class-newspaper example. It shows why one step must finish before the next |

### 9.2 TS-DESC

| Finding | Fix made |
|---|---|
| R1 MUST-5, R2 SHOULD-3, lead (fire engine stays in 3.T.T.2.a) | p3 is now "A Kitchen on Wheels" (food truck), with headings Cooking Inside / Keeping Food Cold and Clean / The Serving Window. No fire, firefighter or Dalmatian text is left in TS-DESC. C06 to C10 are rewritten for the new text, keeping the same components, tasks, formats and DOK. The C08 keys are now the cowboy-wagon sentence and the bright-paint sentence. The C08 prompt is reworded away from 3.T.T.2.a's "interesting but not a key detail" wording |
| R1 MUST-5, lead (C02 repeats TT2a-C04's "add a heading above paragraph N") | C02 now asks "What job does this sentence do in paragraph 4?" about "The pouch works like a fishing net." Key: "It names what the whole paragraph is about." C02 is now PART/MI (topic sentence). FT is still covered by C07 and C13 |
| R1 MUST-5, SHOULD-9, lead (C13 repeats TT2a-C08's "why is this in a text box"; implausible distractors) | C13 now asks whether moving the box fact into paragraph 4 (padding) would be a good change. Key: "No. The fact is about baseball long ago, and it does not tell how padding helps a player." It has three plausible wrong reasons and stays DOK 3 (judging an edit against the main idea) |
| R2 SHOULD-2, lead (teach point 5 overgeneralizes) | Point 5 now reads "A text box sets some facts apart: ask whether the fact in the box tells more about the main idea, or is just interesting." C13's misconception says a box can hold a key detail or just an interesting fact |
| R2 SHOULD-4, lead (Together P3 pre-answers C04) | Together P3 now asks "What is paragraph 3 mostly about?" (key: "the pelican's sharp eyes and how it finds fish"), with a new addon. No Together item gives the whole-passage main idea any more |
| R1 SHOULD-10 (Together P4 pre-locates C02) | Paragraph locations removed from P4's `why` and its addon hint 3. Hint 3 now rules out "a big bag". P1's `why` no longer says "diving is in paragraph 3" |
| R2 MUST-6, lead (C05 hint 2 echoes the keys) | Hint 2 is now "Think about how the passage is built: what kind of information does each paragraph give, and do the paragraphs follow an order? Choose two." Hint 1 and the clue now name several structure patterns without defining the keys |
| R1 MUST-11, lead (C15 hint 1 names both slot jobs) | Clue and hint 1 are now "Describing clue words have jobs. Before each blank, ask what that sentence does for the one before it." Hint 2 is now "Read the whole paragraph once…". The job names appear only in `how` |
| R1 SHOULD-7 (C09 hint 1 narrows to the only describing word) | Hint 1 is now "Each clue word has a job. Ask what the second sentence does for the first one." |
| R1 SHOULD-8 (C11 how rules out two C12 distractors) | C11 how step 4 is now "The other sentences each tell about only one part of a glove or one thing about it." |
| R1 SHOULD-13 (S01 heron shares facts with 3.L.V.1.a) | S01 is now a Venus flytrap paragraph. Keys: the leaves snap shut, and the tiny hairs feel a bug. Still like P6 and C12 |
| R1 NOTE-15, lead (grade 1–2 Watch Me) | Watch Me 1 (zebra) is replaced with a grade 3 science-museum paragraph whose main idea is stated last |

**Whole-ladder check.** I read the clue and hints 1 to 3 together for every item listed above. In each one, at least two choices (or two orders) are still open after hint 3, and no hint names the place that holds only the key. For the EBSR items (SEQ C07 and C12, DESC C06), every place a hint names holds at least two Part B choices.

### 9.3 Not addressed, and why

- **R1 NOTE-3 (SEQ P4 changed under the same id).** For the lead to decide. I made no further change.
- **R1 NOTE-4 (refs without `std`).** TS-DESC P5 still has no `std`. That is a results-tagging question for the lead and engine; I did not add one.
- **R1 NOTE-6 (SEQ P5's DOK 3 label is generous).** P5 is an existing ref item. I left it.
- **R1 NOTE-12 (no map, caption or figure).** These belong to the planned features lesson.
- **R1 NOTE-14 (difficulty).** Not changed in this pass.
- **Overlaps with 3.T.T.2.a that the reviews did not flag.** I found these while fixing MUST-5 and left them for the lead to rule on:
  - DESC C11 (main idea stated in two places, choose two) uses the same frame as TT2a-C06.
  - DESC S03 ("Which sentence does NOT support the main idea?") uses the same frame as TT2a form A item T4.
  - DESC C04 ("add one more sentence") is close to TT2a form B item TB4.
  - None of them shares a fact or a passage.
- **Watch Me examples 2 and 3 in both lessons** were not flagged as grade 1–2, so they are unchanged.

### 9.4 Needs a blind re-solve

**TS-SEQ:**
- p4 (rewritten), with C11, C12 and C13 on it
- C04 (new distractor)
- C07 (new Part B key)
- C08 (new prompt)
- C14 (new item)
- S01 (new stem)
- S02 (new stem and key)
- Hint-only changes: C04 and C14 hint 3, S02 hint 3

**TS-DESC:**
- p3 (new passage), with all of C06 to C10
- C02 (new item)
- C13 (new item)
- S01 (new item)
- Together P3 (new item)
- Hint-only changes: C05, C09 and C15, and the P4 addon

## 10. Fixes after the B2 re-review (B2-rereview-TS.md)

**Gates.**
- `check-content.js --all`: PASS, 0 failures. Only the accepted similar-coverage warnings remain on my lessons.
- `readability.py`: no passage is flagged. Mine are:

| Lesson | p1 | p2 | p3 | p4 |
|---|---|---|---|---|
| TS-SEQ | 2.0 | 3.4 | 3.2 | 4.1 |
| TS-DESC | 3.3 | 2.2 | 3.6 (172 words) | 3.2 |

- "Live" follows the brief: a choice is live only if a child who has read the hints so far still has a real reason to pick it.

### 10.1 Changes, with live choices after each hint

**MUST-1. DESC C14: the cactus is replaced by a seahorse** (the cactus shared its key fact with the 3.T.C.1.b Watch Me).
- I grepped every lesson, set and task file for seahorse and sea horse first. There are no hits.
- Stem details: the curly tail holds on to seaweed; the skin changes color; bony plates make it a crunchy meal; the snout sucks up shrimp.
- Choices:
  - K: a body that helps it stay safe and get food
  - A: has to hide from crabs (fits three details but leaves out food; a near-miss)
  - B: the tail is the most useful part (one detail)
  - C: "First, a baby seahorse hatches…" (a sequence)
- Live choices:
  - Hint 1: K, A, B, C
  - Hint 2 ("what each sentence tells about"): K, A, B. C is still live for a child who does not yet see it is a sequence.
  - Hint 3 (rules out C): K, A, B

**MUST-2. SEQ C04.** I replaced "does not matter much" with a second starting-step choice that has a wrong reason: "First would mean this is the starting step, but the lump of butter forms after the buttermilk is poured off." Paragraph 4 contradicts it, because the lump and the buttermilk form together. Hint 3 now ends "Check each reason that is left against the order of paragraphs 2 to 5." The how and why are updated.
- Live choices:
  - Hint 1: all four
  - Hint 2 (what First would tell a reader): K, the lump distractor, "not a time clue word". "At the same time" is out, because First never means that.
  - Hint 3 (rules out "not a time clue word"): K and the lump distractor. Deciding between them takes checking paragraphs 4 and 5.

**MUST-3. SEQ C08.** Hint 1's example words are now "then and after that". Neither is a target. Hint 2 is now "Read every sentence you can choose, from paragraph 2 to paragraph 5, and find its time words." It no longer drops "The water is not done yet."
- Live choices:
  - Hint 1: all six
  - Hint 2: all six
  - Hint 3 (rules out Finally): the two keys, First, Next, and "not done yet". The child must still decide that First and Next tell only order, and that "yet" does not tell how long.

**SHOULD-1. SEQ C02.** The prompt is now "Why does the author begin with paragraph 1?", so it no longer rules out the first-step and last-step choices. Clue and hint 1 are now "Ask what paragraph 1 gives the reader." Hint 3 is unchanged.
- Live choices:
  - Hint 1: all four
  - Hint 2 (compare paragraph 1 with paragraph 2's first sentence): K, "first step", "what can go wrong"
  - Hint 3 (rules out "what can go wrong"): K and "first step". The child must still see that the First step is in paragraph 2. "Last step" is weak from hint 2 on.

**SHOULD-2. SEQ C10.** "Move sentence 3 so it comes right after sentence 5" is now "…right after sentence 1".
- Live choices:
  - Hint 2 (list the dates): K, "3 after 1", "2 after 4". "5 after 2" is still live for a child who has not placed Today.
  - Hint 3 (rules out moving sentence 5): K, "3 after 1" and "2 after 4". Each must be checked against the date list.

**SHOULD-3. SEQ C06.** Hint 2 is now "Find each step in the article and note its paragraph." It no longer says paragraphs 2 to 5 tell the process, which was C09's second-slot key. (Teach point 5 still mentions paragraph jobs; the reviewer called that teaching, a NOTE.)

**SHOULD-4. DESC P6 (ref, set 1 item 1).**
- Hint 3 now rules out "The brown pelican is a large bird".
- The weak "You can see it on Georgia's coast" is now "It flies low over the waves" (from paragraph 1), a near-miss about flying. The why and how are updated. Same id, as decided for SEQ P4.
- Live choices:
  - Hint 1: all five
  - Hint 2: all five
  - Hint 3: the two keys, "flies low" and "feet work like paddles" (pick two from four)
- Together P1's `why` says the feet are for moving, which makes "paddles" weaker for a child who did P1 (re-review NOTE-4 kind).

**SHOULD-5. DESC C11.** Hint 2 is now "…the whole glove, or only one part of it?"
- Live choices:
  - Hint 2: the two keys, "looks like a big leather hand" (the named misconception) and "many colors"
  - Hint 3 (rules out the pocket): the same four. "One part" no longer removes the look sentences.

**SHOULD-9. DESC p3 and C08.** The sentence is now "Long ago, kitchens on wagons fed cowboys on long cattle drives." It no longer claims these were the first food trucks.
- It is still a fun-fact key of C08. The C08 how and why are updated.
- The C10 distractor and how now say "the wagon kitchens of long ago".

**SHOULD-10. DESC S02.** Recycling is replaced by a gym closet: a place for each kind of ball. I grepped "gym closet", "dodgeball" and "foam ball" first; there are no hits. The heading "A Home for Every Ball" avoids 3.T.T.2.c's bin wording. `like` is now C07 only, because C02 is no longer a heading item.
- Live choices:
  - Hint 2: all four
  - Hint 3 (rules out "Why Exercise Is Good for You"): K, "A Rack for Basketballs" (one detail), "How to Play Dodgeball" (word match)

**DESC P5.** Added `std: ["3.T.SS.1.a"]`.

**Re-review §6: DESC C04's "pictures of pelicans" distractor.** Changed to "Young brown pelicans have brown heads instead of white ones." It is true and about pelicans, but not about catching fish. The how and why are updated.
- Live choices:
  - Hint 2: all four
  - Hint 3 (rules out hatching): K, nests, head color

**NOTE-6. DESC S01.** "Some people grow flytraps on sunny windowsills" is now "Its roots hold it in the sandy soil.", a body part that does not catch anything. The stem, how and why are updated.
- Live choices:
  - Hint 3 (rules out where it grows): the two keys, the goddess name and the roots. The roots are the real near-miss.

### 10.2 Same-set and Together checks for the changed items

- **SEQ C04 and P4.** P4 (set 1 item 1) shows the yellow lump forming before the buttermilk is poured off, so a child who has solved P4 can rule out C04's new distractor. P4 does not state C04's key. This is the distractor-only kind of link in re-review NOTE-4.
- **DESC C14.** No earlier set 3 item, and no Together item, mentions a seahorse or the "safe and get food" idea.
- **DESC S02 and SEQ C05.** Both are school places, but they share no facts (the art room and the library are in SEQ C05).

### 10.3 Findings not addressed

- **NOTE-1 (Together ladders leave only the key; SEQ P1 and P6, DESC P2 and P4).** Not changed. Together uses the engine's legacy ladder, which shows the clue, then narrows, then reveals the answer. The reviewer marks it as by design.
- **NOTE-4 (earlier items pre-eliminate a later distractor).** DESC C08's how still calls the wagon kitchens a fun fact before C10. That is C08's own answer, so I cannot remove it.
- **NOTE-5 (SEQ C14's key echoes step 4).** Left as is. The reviewer found it acceptable.
- **NOTE-10.** Left as is: "a small oven and a deep fryer" is generic, and the snowflake fold makes eight sides, not six. Neither affects a key.
- **R1 NOTE-6 (SEQ P5's DOK 3 is generous).** Unchanged. P5 is a ref and was out of scope for these fixes.
- **The CE, CC and TS-PS findings** belong to other authors and were not touched.
