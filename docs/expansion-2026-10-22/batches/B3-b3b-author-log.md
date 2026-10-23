# B3 author log: b3b (3.T.T.3.a and 3.T.RA.1.a)

Author: b3b. Date: 2026-10-23. Status: **NEEDS INDEPENDENT REVIEW.** I did not review my own work.

Files edited:
- js/data/lessons/T-T34.js, in the 3.T.T.3.a block only: passages p3 and p4, `core`, `similar` and `addons`, and nothing else.
- js/data/lessons/T-RA.js, in the 3.T.RA.1.a block only: teach point 5, one glossary word, one Watch Me example, the `parent` line, passages p3 and p4, `core`, `similar` and `addons`.

The RA blocks were re-read immediately before each edit.

## Gates

| Gate | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. My only warnings are "core items with no similar item" on both lessons; it is a warning by lead decision. |
| `python3 verification/readability.py` (I read the output myself) | No passage in the repo is flagged. TT3a p3: 180 words, FK 2.8. TT3a p4: 174 words, FK 3.5. RA1a p3: 129 words, FK 3.1. RA1a p4: 130 words, FK 3.3. |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| Browser smoke test | `node verification/serve.js . 8812` with Playwright Chromium, at 390 and 1366 widths. On all 30 core items, three hints were shown, the labels read "Hint 1 of 3" to "Hint 3 of 3", and the button ended at "No more hints". The key was marked "That's right" on every selected-response item. RA1a C14 (cr) showed "Compare with the sample" with the never-scored note, and its status was "Written and checked against the list". There were no page errors and no horizontal scroll. Together is P1-P3 on both lessons, and three similar items are registered on each. The server has been stopped. Script: scratchpad b3b/smoke.py. |

## Official wording and components

- **3.T.T.3.a** (Georgia K-12 ELA Standards 3-5, May 2023, **p. 34**): "Describe and discuss the techniques used to present and design opinion texts, including author's opinion statement, supporting reasons, and evidence."
  - Components, from 02-coverage-matrix:
    - OP: the opinion statement
    - RS: reasons
    - EV: evidence
    - FO: fact vs opinion
    - DS: design (a paragraph per reason, the counterargument, the ending or call to act)
  - Hardest: EV, which appears in every set.
- **3.T.RA.1.a** (**p. 37**): "Generate questions about a self-selected topic of interest to be researched, formulating additional questions to clarify or deepen understanding."
  - Components:
    - RQ: a researchable fact question, open rather than yes/no
    - OT: on the topic
    - SRC: does this text answer the question, or is another source needed
    - CL: a clarifying question. This was NOT COVERED in the matrix, and is now taught, modelled and practised.
    - DD: a dig-deeper question
    - SS: a self-selected topic (adult-observed)
  - Hardest: CL and DD, and at least one appears in every set.

### Self-selected topic: how it is modelled honestly
A selected-response item cannot show that a child chose a topic or generated a question. So:
- The selected-response items show recognition only. They are about topics other children chose.
- **C14 is a `cr`.** The child names their own topic, writes a research question, then writes a clarifying or dig-deeper question. It is compared with a sample and four "Did I…" criteria. Following the engine rules for `cr`, it is never scored and never counted as right.
- The existing `write` task (adult-checked checklist) is unchanged.
- The `parent` line now says that choosing a topic and writing questions is checked by the grown-up, with the writing checklist or the set 3 sample, and that the site never scores it.
- The block comment above `core` records this.

## Teaching changes

**3.T.RA.1.a.** The coverage matrix asked for "Add a clarifying-question Watch Me step and items". I made three changes:
- **Teach point 5** now defines both kinds of question: clarifying ("clears up a word or idea you read but did not understand") and dig-deeper ("asks something new, to learn more"). There are still five points.
- **New glossary word:** "clarifying question". It matches the edge case the items test: a question about a part you read but did not understand, as opposed to a new question that goes past the text.
- **New Watch Me 3** (the limit of three is now reached), about an arctic fox that sheds its coat. It models both question types:
  - clarifying: "What does it mean when an animal sheds its coat?"
  - dig-deeper: why the coat changes color

  The topic is unused elsewhere. Its key fact (shedding, seasonal coat) is not used by any item.

**3.T.T.3.a.** No teaching change. The fifteen ask for nothing that teach point 5 (paragraph per reason, "Some people say … But", the ending) and the three Watch Me examples do not model.

## Weak items
Neither lesson has a weak item flagged in 03-practice-inventory, so I revised nothing. All the reused Try items (TT3a P4, P5 and P6; RA1a P4 and P5) were used as the inventory allows, with their text unchanged. They got hints and a Show me how through `addons`.

## 3.T.T.3.a: the fifteen

New passages:
- **p3, "Let Everyone Play"** (sports): equal playing time in a kids' soccer league. Reasons: kids get better by playing (evidence: Sam), and kids who play keep playing (evidence: sign-up counts). Counter: "best players should play the most" is answered with why kids join and the team's record. Ends with a call to act.
- **p4, "A Weather Station for Our School"** (science). Reasons: learn science (evidence: the Room 14 rain gauge and chart), and weather right at our school (evidence: a kickball game called off for storms that never came). Counter: "too hard to care for" is answered with the high school club. Ends with "Let's ask…".

| Pos | Id | Set | Component | Task | Format | DOK | Text | Domain | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1.1 | SK-TT3a-P4 (ref) | 1 | EV | use evidence | ebsr | 2 | p1 | community | the only EBSR on Kendra's family reason |
| 1.2 | SK-TT3a-P5 (ref) | 1 | EV | use evidence | ms | 2 | p1 | community | evidence for reason 2; differs from 1.1 in component detail and task form |
| 1.3 | SK-TT3a-C03 | 1 | RS/EV | compare | mc | 3 | p1 + Marcus stem | community | compares two pieces (Marcus has reasons but no evidence) |
| 1.4 | SK-TT3a-P6 (ref) | 1 | DS (ending) | explain | mc | 2 | p1 | community | the job of the ending |
| 1.5 | SK-TT3a-C05 | 1 | DS (counterargument) | construct | dropdown | 3 | p1 | community | builds a "Some people say … But" paragraph |
| 2.1 | SK-TT3a-C06 | 2 | OP | identify | hottext | 2 | p3 | sports | the main opinion among several opinions |
| 2.2 | SK-TT3a-C07 | 2 | FO | identify | ms | 2 | p3 | sports | fact vs opinion, with the "Everyone knows" trap |
| 2.3 | SK-TT3a-C08 | 2 | EV | use evidence | ebsr | 2 | p3 | sports | which reason an example supports |
| 2.4 | SK-TT3a-C09 | 2 | DS (counterargument) | explain/evaluate | mc | 3 | p3 | sports | how the reply answers the other side |
| 2.5 | SK-TT3a-C10 | 2 | RS | edit (add) | mc | 2 | p3 | sports | adds a true reason, not a labelled non-reason |
| 3.1 | SK-TT3a-C11 | 3 | OP/DS (intro) | identify | dropdown | 2 | p4 | science | how the piece opens (topic, then opinion) |
| 3.2 | SK-TT3a-C12 | 3 | EV | use evidence | hottext ×2 | 2 | p4 | science | evidence sentences in context |
| 3.3 | SK-TT3a-C13 | 3 | DS (counter + call to act) | explain | ms | 3 | p4 | science | the jobs of the closing paragraphs |
| 3.4 | SK-TT3a-C14 | 3 | OP/RS/EV | transfer (classify) | match | 2 | Jada note stem | family | sorts sentences by job in a fresh text |
| 3.5 | SK-TT3a-C15 | 3 | EV/FO | transfer (evaluate) | mc | 3 | dog-park stem | community | strongest evidence; "Everyone knows" trap |

Tallies:
- Formats: mc ×5, ms ×3, ebsr ×2, dropdown ×2, hottext ×2, match ×1. That is six formats, five of which are technology-enhanced.
- DOK 1: 0. DOK 3: 5 (C03, C05, C09, C13, C15).
- Contexts: community 6, sports 5, science 3, family 1.
- Texts: 5. p1 carries 5 of the fifteen.
- Each component appears at least twice. EV is in every set.
- Similar items:
  - S01, pen pal evidence: like P5 and C12
  - S02, field-trip counterargument: like C05 and C09
  - S03, sentence jobs in a note to a coach: like C14
- Together: P1-P3, each with addons.

### Choices still live after each hint (3.T.T.3.a)
"Live" follows the brief's definition: a child who has read the hints up to that point still has a real reason to pick the choice. H0 is the start.

| Item | After H1 | After H2 | After H3 |
|---|---|---|---|
| P4 Part A | all 4 | key, brothers noisy, mom/story time (far away has no support) | key, brothers noisy (H3 removes "far away") |
| P4 Part B | all 4 | mom-hours sentence, brothers sentence | the same two |
| P5 | all 5 | all 5 | 2 keys, mom hours, brothers (H3 removes "closed now") |
| C03 | all 4 | all 4 | key, "Marcus uses facts, Kendra only opinions", "no reasons" (H3 removes "answers people who disagree") |
| P6 | all 4 | all 4 | key, "new reason", "costs too much" (H3 removes the hours fact) |
| C05 slot 0 | all 3 worries | all 3 | all 3 (none settled) |
| C05 slot 1 | all 3 | all 3 | bus, "Saturday is the best day" (H3 removes Mr. Grant). At most one blank is narrowed. |
| C06 | all 6 | all 6 | 5: key, bench "no fun", "Everyone knows", the First reason, the topic sentence (H3 removes the other people's opinion) |
| C07 | all 5 | all 5 | 2 keys, "Everyone knows", "best players should play most" (H3 removes "no fun") |
| C08 Part A | all 4 | key, "keep playing", "no fun" | key, "keep playing", "no fun" (H3 removes the other side's claim) |
| C08 Part B | all 4 | all 4 (all in paragraphs 2 and 3) | all 4 |
| C09 | key, "only to win" (H1 makes "never says what the other side thinks" checkable) | the same | key, "only to win" (H3 removes "agrees and changes his mind") |
| C10 | all 4 | all 4 | key, the Ana example, the 16-teams fact (H3 removes nine o'clock) |
| C11 slot 0 | all 3 | all 3 | class each morning, "most important reason" (H3 removes "answers people") |
| C11 slot 1 | all 3 | all 3 | all 3 |
| C12 | all 6 | paragraph 2: reason, favorite subject, 2 keys | the reason sentence plus 2 keys (H3 removes the favorite subject) |
| C13 | all 5 | all 5 | 2 keys, "club wants its own station", "steps to build" (H3 removes "agrees") |
| C14 | row 1 settled by H1 (I think) | the same | row 3 settled. Rows 2 and 4 are still open (reason, evidence or opinion). |
| C15 | key, "Everyone knows" (H1 rules out "I think") | the same | key, "Everyone knows" (H3 removes parks and pool) |

Cross-item checks: Together items, and earlier items in the same set, against each core key.
- **Together P2 → core P4.** P2 names reason 1 (busy families), which places P4's evidence in paragraph 2. This is the inventory's Together/Try split. P4's original clue already sent the child there.
- **P4's existing `why` → P5.** The `why` ("brothers are noisy at home") removes one P5 distractor. It is existing text, which I did not change. My P4 addon `how` no longer mentions the brothers.
- **P4 and P5 → C03 (1.3).** Both show that Kendra uses evidence. That weakens C03's distractor "Kendra uses only her opinions", leaving the key and "no reasons" live after H3. C03 is still solvable only by comparing.
- **C03's hint 3 → P6 (1.4).** C03's H3 says neither piece answers people who disagree, which removes P6's "costs too much" distractor. The key and "new reason" are still live after P6's own H3. Not changed.
- **C11's `how` → C13.** Earlier wording said "the ask comes at the end, with Let's", which pre-answered C13 key 2. I removed it before finishing.
- **Within sets 2 and 3.** No `how` or `why` states a later item's key. The C06 `how` names reasons only as "First … Also …", not their content.

## 3.T.RA.1.a: the fifteen

New passages:
- **p3, "Hic! Why We Hiccup"** (science, the body). It covers:
  - who gets hiccups
  - the diaphragm
  - the sudden squeeze, and the vocal cords snapping shut
  - causes: eating fast, fizzy drinks, excitement
  - most stop in minutes
  - scientists are not sure why we hiccup

  These facts match KidsHealth-level sources.
- **p4, "Older Than the Dinosaurs"** (nature, horseshoe crabs). It covers:
  - spring beaches
  - more than 400 million years, before dinosaurs
  - more closely related to spiders and scorpions
  - named for the horseshoe-shaped shell
  - eggs eaten by red knots on their trip north
  - blue blood used to test medicines for germs

| Pos | Id | Set | Component | Task | Format | DOK | Text | Domain | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1.1 | SK-RA1a-P5 (ref) | 1 | SRC | use evidence | ms | 2 | p1 | nature | which questions the article answers |
| 1.2 | SK-RA1a-C02 | 1 | RQ | construct | dropdown | 2 | p1 (stem) | nature | builds an open, on-topic question |
| 1.3 | SK-RA1a-P4 (ref) | 1 | DD | identify | mc | 3 | p1 | nature | a dig-deeper question about the dance |
| 1.4 | SK-RA1a-C04 | 1 | CL | edit (replace question) | mc | 2 | p1 sentence | nature | clarify the unknown word (pollen) instead of going deeper |
| 1.5 | SK-RA1a-C05 | 1 | OT | identify | hottext (options) ×2 | 2 | Dion stem | community | all fact questions; judge fit with a narrow topic |
| 2.1 | SK-RA1a-C06 | 2 | SRC | use evidence | hottext ×2 | 2 | p3 | science | finds the sentences that answer a question |
| 2.2 | SK-RA1a-C07 | 2 | CL | identify | ms | 2 | p3 | science | clarifying vs dig-deeper vs opinion |
| 2.3 | SK-RA1a-C08 | 2 | DD | edit | mc | 3 | p3 | science | replaces an already-answered "dig-deeper" question |
| 2.4 | SK-RA1a-C09 | 2 | RQ | edit | mc | 2 | Imani stem | sports | turns an opinion question into a research question |
| 2.5 | SK-RA1a-C10 | 2 | RQ | compare + explain | mc | 3 | Nia/Leo stem | school | which question helps more, and why |
| 3.1 | SK-RA1a-C11 | 3 | DD | construct (chain) | order (4 steps, 2 pts) | 3 | p4 | nature | orders a chain of growing questions |
| 3.2 | SK-RA1a-C12 | 3 | SRC | explain | dropdown | 2 | p4 | nature | needs another source, because… |
| 3.3 | SK-RA1a-C13 | 3 | CL vs DD | classify (transfer) | match | 2 | park sign stem | community | sorts clarifying vs dig-deeper questions |
| 3.4 | SK-RA1a-C14 | 3 | SS (+RQ, CL/DD) | construct | cr (never scored) | 3 | none | school | the child's own topic and questions |
| 3.5 | SK-RA1a-C15 | 3 | RQ | identify (transfer) | ms | 2 | Zuri stem | family | all on topic; judge quality ("who is the best" trap) |

Tallies:
- Formats: mc ×6, ms ×3, dropdown ×2, hottext ×2, match ×1, order ×1, cr ×1.
- DOK 1: 0. DOK 3: 5.
- Contexts: nature 6, science 3, community 2, school 2, sports 1, family 1.
- Texts: 9. p1 carries 4.
- Each component appears at least twice, except SS (C14 plus the write task, adult-observed).
- CL or DD appears in every set.
- Similar items:
  - S01, fossil (clarifying): like C04 and C07
  - S02, baseball stitches (dig-deeper): like P4, C08 and C11
  - S03, submarine (research question): like C09, C10 and C15
- Together: P1-P3, each with addons.

### Choices still live after each hint (3.T.RA.1.a)

| Item | After H1 | After H2 | After H3 |
|---|---|---|---|
| P5 | all 5 | all 5 | 2 keys, "queen's size", "build hives" (H3 removes winter) |
| C02 slot 0 | all 3 | all 3 | all 3 (not settled; the yes/no logic is only in `how`) |
| C02 slot 1 | all 3 | all 3 | key, "cutest" (H3 removes wax cells). One blank narrowed. |
| P4 | all 4 | all 4 | key, the queen, "Do worker bees dance…?" (H3 removes "good at dancing") |
| C04 | all 4 | all 4 | key, "how bees carry pollen", "to every flower" (H3 removes "why plants need pollen") |
| C05 | all 5 | all 5 | 2 keys, "first train in Georgia", "ticket cost" (H3 removes airplanes) |
| C06 | all 6 | 2 keys, "Some people hold their breath", "your diaphragm", the opening question | 2 keys, the breath-holding sentence, the diaphragm sentence (H3 removes the question) |
| C07 | all 5 | all 5 | 2 keys, horses, sleeping (H3 removes the opinion) |
| C08 | all 4 | all 4 | key, yawning, "rude" (H3 removes fizzy drinks) |
| C09 | all 4 | all 4 | key, "best player of all time", "Does a basketball bounce?" (H3 removes "Do I like…") |
| C10 | all 4 | all 4 | key, "Leo's: quick yes/no", "Leo's: own school" (H3 removes "has a number") |
| C11 | all orders | all orders | step 4 fixed last. Steps 1-3 are still to order from the article. |
| C12 slot 0 | all 3 | all 3 | "another source", "read paragraph 2 again" (H3 removes "ask a friend") |
| C12 slot 1 | all 3 | all 3 | all 3 |
| C13 | all rows open | all rows open | row 1 (CCC) settled; three rows open |
| C14 | cr: no choices. H3 gives a sentence starter for the second question only. | | |
| C15 | all 5 | all 5 | 2 keys, "nicer than a blanket", "best quilt maker" (H3 removes the yes/no question) |

Cross-item checks:
- **Together P2 → core P4.** P2's `why` shows that the article says the dance shows the way. That makes P4's distractor "Do worker bees dance…?" easier to rule out. It is the inventory split, and P4's key is still not stated.
- **C02's `how` (1.2) → P4 (1.3).** C02's `how` teaches that "Do …" questions are yes/no. That is concept-level and is not P4's key.
- **C07's `how` (2.2) → C08 (2.3).** C07's `how` labels the horses and sleeping questions as dig-deeper. That is the concept only. I deliberately chose C07's distractors so that none resembles C08's key ("why does eating fast…"). An earlier draft had a "why do fizzy drinks…" distractor, and I replaced it.
- **C08's `how` → C10.** C08's `how` does not mention paragraph 5, so it gives nothing to C10.
- **C09's misconception ("Who is the best…") → C15.** C09 is in set 2 and C15 is in set 3, so this crosses sets only.
- **C11's `how` → C12.** C11's `how` says nothing about size.

## Topic and key-fact search (cross-lesson)

I grepped every file in js/data/lessons/*.js, js/data/sets/*.js, js/data/tasks/*.js and js/data/habits.js. That included the RA1b/RA1c/RA2 blocks another author is editing now. The full output is in scratchpad b3b/topic-grep.txt.

Terms searched:
- TT3a: Maple Creek, bench, playing time, same time, signed up, weather station, rain gauge, kickball, science club, Marcus, stay closed, town bus, walk after dinner, walk together, dog park, pen pal, Cedar Bluff, field trip
- RA1a: hiccup, diaphragm, vocal cord, fizzy, horseshoe, red knot, blue blood, scorpion, pollen, train wheel, tracks, basketball, bounce, lunch, cooks, Stone Creek, CCC, quilt, fossil, stitches, submarine, arctic fox, sheds, purr

Before writing, I also searched: sea turtle, cook dinner, kitchen, garden, compost, trash can, litter, leaves, gym teacher, dinosaur, otter, chess and others.

What I changed because of the search:
- **Sea turtles** are taken (T-C, L-V12, T-SS, R-INF-01), so RA set 3 uses horseshoe crabs instead.
- **"Kids should help cook dinner"** is the 3.T.T.3.c teach example, so I did not use it.
- **"Gym teacher says children need to be active"** is in 3.T.T.3.c, so C15 uses a dog park instead of a walking club.
- **"Trash cans at Riverside Park"** is in TS-PS, so I avoided a litter topic.
- **"A Sign for Field Day"** (T-C, field day moved to the gym for rain) is close to my first draft of p4's paragraph 3. I changed it to a kickball game called off for a forecast that never came.
- **"The Rainy Picnic"** (T-T1) is also avoided.
- **Room 9** became Room 14.
- **The league name** changed from "Maple Creek" (a town in L-V12 and T-SS) to "Brookside".
- **Within my own lessons**, TT3a S02 uses Cedar Bluff Park, so RA1a C13 uses Stone Creek Park.
- **Pollen.** L-V12's Watch Me and T-T2 define pollen as "a fine powder made by flowers". RA1a C04 asks "What is pollen?" but no hint, `how` or `why` defines it, so that key fact is not shared.

Remaining incidental hits, which do not share a topic or key fact:
- basketball history in T-T2. RA C09 is about why a ball bounces.
- quilt in a T-T1 sentence about a writer's character
- "signed up" (talent show) in T-SS
- "sheds" (caterpillar skin) in T-C and T-T2. My Watch Me is about a fox's coat.
- purr in poems
- bench, lunch and field trip as everyday words in GUM sentences

None of my texts uses a form A check passage (TT3a p2, RA1a p2), and no core item uses a check passage (enforced by check-content rule 8). The checks' key facts are trees making shade, the parent club paying for trees, how owls hunt and owl pellets. None of them is a key fact of any new item. Neither lesson has a form B.

## Not done, and open points for reviewers
- **Similar coverage is partial** (warning only): TT3a has 10 of 15 core items without a similar item, and RA1a has 7 of 15. The plan is three similar items per lesson, and each `like` lists only the items it truly practises.
- **C14 is the only self-selected item.** The self-selected part of 3.T.RA.1.a still depends on adult observation (C14 and the write task). That is by design: it cannot be shown by selected response.
- **Write task checklist not changed.** RA1a's `write` checklist still asks only for a dig-deeper question, not a clarifying one. I did not change it, because checklist entries may be stored by index (pp.skwrite.*), and changing stored meanings is out of scope.
- **Five cross-item notes are left as they are:** Together P2 → P4 (both lessons), P4's `why` → P5, P4/P5 → C03, C03 H3 → P6, and C02 → P4 (RA). Each is listed above with the choices still live.
- **Facts I did not web-check this session**, written from general knowledge for the reviewer to check:
  - horseshoe crabs: more than 400 million years; more closely related to spiders and scorpions; blue blood used to test medicines; red knots eating the eggs
  - hiccups: the diaphragm, the vocal cords snapping shut, the common causes, and that the cause is unknown
  - a baseball has 108 stitches (S02)
  - the CCC built in the 1930s (C13)
  - arctic fox coat colors
- I did not run the guard, the path*.py scripts or skills-recovery.py. They were not asked for in this assignment, and I changed no js/ code.
- I did not run git, and did not review my own work.
