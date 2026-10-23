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

## Addendum: similar coverage (rule ENG-07, coordinator request, 2026-10-23)

This addendum replaces the earlier "Similar coverage is partial" note.

**What changed.** I **added** similar items only:
- 3.T.T.3.a: SK-TT3a-S04 to S15 (12 new; the bank is now 15, the maximum)
- 3.T.RA.1.a: SK-RA1a-S04 to S15 (12 new; the bank is now 15)

No existing core, Together, similar or check item was edited, because a reviewer is blind-solving them. The only text I revised was in three of the new items, before anyone saw them:
- TT3a S05: a clue word was shared only with the key, so I changed one distractor and hint 3.
- TT3a S10: the key was much longer than the other choices, so I shortened it.
- RA1a S10: the prompt was long, so I moved its first sentence into the stem.

**Why 12 per lesson, not 7 to 10.** The engine shows "Try a similar question" for the first similar item that lists this core item and has not yet been attempted. In my first pass the shared items were used up by earlier core items in the same run. For example, S04 covered both P4 and C08, so once a child used it on P4, C08 had none left. In a full sequential run that hid the button on 4 TT3a items (C08, C09, C12, C13) and 5 RA1a items (C07, C08, C10, C11, C15). So each of those items now also has a similar item of its own: TT3a S12 to S15 and RA1a S11 to S15. Every `like` list names only the core items whose component, task and format the item really practises.

**Gates after the change:**
- **check-content --all:** PASS, 0 failures, and neither lesson has any warning. The similar-coverage warning is gone.
- **readability.py:** nothing flagged; these items have no passages.
- **check-writing:** 0 failures.
- **check-instructional-copy:** 28 passed.

**Smoke test** (port 8812, Playwright Chromium, 390 and 1366 wide; scratchpad b3b/smoke2.py and smoke.py):
- I went through all 30 core items in order in one sitting. For each one I solved it, pressed **Try a similar question**, and checked that a similar item opened.
- The button showed on all 30, each time opening a different similar item.
- Each similar item was headed "Extra question", listed that core item in its `like`, and was marked correct when given its key. The `cr` S10 showed its sample instead.
- I re-ran the core smoke test: there were 0 problems and no page errors.
- The server has been stopped.

### Coverage map (core item → first similar item served in a full run)
TT3a:
- P4 → S04, P5 → S01, C03 → S05, P6 → S06, C05 → S02
- C06 → S07, C07 → S09, C08 → S12, C09 → S13, C10 → S11
- C11 → S08, C12 → S14, C13 → S15, C14 → S03, C15 → S10

RA1a:
- P5 → S04, C02 → S06, P4 → S02, C04 → S01, C05 → S07
- C06 → S05, C07 → S11, C08 → S12, C09 → S03, C10 → S13
- C11 → S14, C12 → S08, C13 → S09, C14 → S10, C15 → S15

### New similar items: table and choices still live after each hint

3.T.T.3.a:

| Id | like | Format, DOK | Text and domain | Live after H1 / H2 / H3 |
|---|---|---|---|---|
| S04 | P4, C08 | ebsr, 2 | Rae: open the school gym on Saturdays (community) | A: all 4 / all 4 / key, "families exercise", "basketball vs jump rope" (H3 removes the opinion). B: 4 / 4 / key, dad's laps, "safe dry place" (the reason itself) |
| S05 | C03 | mc, 3 | Ana vs Ben: pajama day (school) | 4 / 4 / key, "Ana uses facts", "Ana gives no reasons" (H3 removes "answers people who disagree") |
| S06 | P6, C13 | ms ×2, 3 | Ivy: block party, last two paragraphs (community) | 5 / 5 / 2 keys, "steps to plan", "story about last year" (H3 removes "agrees and changes plan") |
| S07 | C06 | mc, 2 | morning song paragraph (school) | 4 / 4 / key, "most fun", the reasons sentence (H3 removes the other people's opinion) |
| S08 | C11 | dropdown, 2 | Omari: quiet reading after lunch (school) | slot 0: 3 / 3 / 2 (H3 removes "answers people"). Slot 1: 3 / 3 / 3. At most one blank narrowed. |
| S09 | C07 | ms ×2, 2 | Lena: rec center climbing wall (community) | 5 / 5 / 2 keys, "Everyone agrees", "should climb" (H3 removes "coolest") |
| S10 | C15 | mc, 3 | breakfast in classrooms (school) | key, "Everyone knows" (H1 makes "I think" checkable) / same / key, "Everyone knows" (H3 removes the tables) |
| S11 | C10 | mc, 2 | learn to read a map (everyday) | 4 / 4 / key, waterfall example, old-maps fact (H3 removes bright colors) |
| S12 | C08 | ebsr, 2 | Kofi: walking track (school) | A: 4 / 4 / key, mud reason, "walking vs kickball" (H3 removes the opinion). B: 4 / 4 / key, kickball stopped, "walked at recess", muddy field |
| S13 | C09 | mc, 3 | Nora: bike lanes on Elm Street (community) | key, "keep cars off" (H1 makes "never says the other side" checkable) / same / key, "keep cars off" (H3 removes "agrees") |
| S14 | C12 | hottext ×2, 2 | jobs chart (school) | 5 / 5 / 2 keys, the First reason sentence, the Next reason sentence (H3 removes "best part") |
| S15 | C13 | ms ×2, 3 | Maya: reading tent, last two paragraphs (school) | 5 / 5 / 2 keys, "setup steps", "price" (H3 removes "gives up") |

3.T.RA.1.a:

| Id | like | Format, DOK | Text and domain | Live after H1 / H2 / H3 |
|---|---|---|---|---|
| S04 | P5 | ms ×2, 2 | pufferfish text (nature) | 5 / 5 / 2 keys, "how long puffed up", "where they live" (H3 removes eggs) |
| S05 | C06 | hottext ×2, 2 | meerkat guard text (nature) | 5 / 5 / 2 keys, "others run into burrows", "young learn to hunt" (H3 removes "mobs") |
| S06 | C02 | dropdown, 2 | Leo: snakes' tongues (nature) | slot 0: 3 / 3 / 3. Slot 1: 3 / 3 / key, "scariest" (H3 removes scales). One blank narrowed. |
| S07 | C05 | hottext ×2, 2 | Nadia: how dough rises (family/kitchen) | 5 / 5 / 2 keys, "first bakery", "price of bread" (H3 removes pizza ovens) |
| S08 | C12 | dropdown, 2 | koala text (nature) | slot 0: 3 / 3 / "another source", "read again" (H3 removes "ask a friend"). Slot 1: 3 / 3 / 3 |
| S09 | C13 | match, 2 | grist mill sign (community) | all rows open / open / row 1 settled; 3 rows open |
| S10 | C14 | cr (never scored), 3 | the child's own topic from the week (everyday) | no choices. H3 gives a starter for the clarifying question only. |
| S11 | C07 | ms ×2, 2 | geyser text (science) | 5 / 5 / 2 keys, "most famous geyser", "geysers in Georgia" (H3 removes the opinion) |
| S12 | C08 | mc, 3 | frogs that freeze (nature) | 4 / 4 / key, bears, "cuter" (H3 removes the already-answered question) |
| S13 | C10 | mc, 3 | June vs Max: bus safety (school) | 4 / 4 / key, "quick yes/no", "own bus fits better" (H3 removes "longer question") |
| S14 | C11 | order (4 steps, 2 pts), 3 | arctic tern text (nature) | all orders / all / step 4 fixed last; steps 1-3 still to order |
| S15 | C15 | ms ×2, 2 | Marco: corn husk dolls, toys long ago (family) | 5 / 5 / 2 keys, "wooden more fun", "best toy maker" (H3 removes yes/no) |

**Hint 3 and similar items that share a frame.** Each similar item mirrors its core item's frame, which is intended because it practises the same task, but uses a new text and topic. Hint 3 rules out one distractor and ends with a neutral "Check each choice that is left". On dropdowns, at most one blank is narrowed. No similar item shares a stem with a core item (check-content rule 9).

**Leaks.** A similar item is shown only after its core item is solved or its answer is shown. None reuses a core, Together, check or other-lesson passage, or a core key fact.

**Topic search for the new items.** The output is in scratchpad b3b/topic-grep-similar.txt. I grepped all lessons, sets, tasks and habits (including the RA blocks other authors are editing) before choosing. Topics I rejected because they were already used:
- 3.T.T.3.c "read outside" Watch Me
- murals in T-C and T-T1
- flytrap in T-TS
- geese in a T-T34 Watch Me
- wolves howling (a T-RA key fact)
- pandas, chameleons, glaciers and candles in other T-RA blocks
- woodpeckers (T-RA)
- cutting ice before refrigerators (a T-T2 Watch Me)
- cotton in T-C
- field day in T-C

Remaining incidental hits:
- "zipper" (backpacks and coats in T-TS). Unrelated to the zipper topic in RA S10's sample.
- "bread dough" in T-T2, a yeast cause-effect item. RA S07 only lists questions about rising, and its hints, `how` and `why` never state the yeast fact.

**Not done.** Facts for reviewers to check (not web-checked):
- wood frogs freezing solid
- arctic tern nesting, and hatching in about three weeks
- koala sleep "up to 18 hours"
- meerkat sentinels
- how pufferfish inflate, and that many are poisonous
- how geysers work

## Fixes after B3 review

Source: docs/expansion-2026-10-22/batches/B3-review-b3b.md. Every MUST and SHOULD was addressed, plus notes N8 and N10. No git was run.

### What changed

**3.T.T.3.a (T-T34.js)**
- MUST-1, C06: hint 3, `how`, `why` and misconception no longer call C07's wrong choices opinions. They speak only about the main-opinion sentence.
- MUST-2, P5 (addon): distractor "The library is closed on Saturdays now." replaced by "Mr. Grant works at the library." (a paragraph-3 sentence that is not evidence). Hint 2 now asks whether a sentence shows people really came when the library was open on Saturdays. Hint 3 puts the work-hours sentence with the busy-families reason.
- Lead decision, p4: reshaped so it no longer follows mixed set R-OPN-01. New first reason (keep our own weather records, Room 14 rain gauge), new worry (a station might be broken at recess) answered by the tall fence behind the gym, new ending (real numbers instead of guesses; please tell your teacher). C11, C12 and C13 prompts, choices, `how` and `why` were updated to match.
- SHOULD C10, S11, C15, S10: hint 3 now rules out one specific choice, so no hint leaves only the key. S10's key was reworded.
- SHOULD C08 Part B: close second answer replaced by "Last fall, our coach gave us all the same time to play."
- SHOULD Watch Me: Watch Me 2 replaced by a "pencil sharpener ... Some people say ... But" example that shows answering people who disagree. The count stays at three.
- SHOULD S14: option text made self-contained ("Room 3's teacher said she never once had to remind anyone to do a job.") so shuffling cannot break it.

**3.T.RA.1.a (T-RA.js)**
- MUST-3, S08: koalas sleep 18 to 22 hours a day.
- SHOULD C02 and S06: absurd options replaced ("make the sweetest honey of all", "shed their old skin"), with `how` and `why` edited.
- SHOULD C04 and S01: stems no longer echo the key.
- SHOULD C06: rewritten as an ms, DOK 3, that tests asking questions (which TWO questions are still worth researching after reading p3).
- SHOULD C14: sample second question is now "What part of a cat's throat moves when it purrs?" (not yes/no).
- SHOULD C15 and S15: hint 3 rules out one choice ("Is a quilt nicer..." / "Is a wooden toy more fun...").
- SHOULD S05: rewritten as an ms with the meerkat text in `stem`, so shuffling cannot break it.
- SHOULD S07: topic changed from dough to a thermos keeping soup hot.
- SHOULD "doctors": p4 blood sentence now says "People who make medicines use something in it to check that medicines and shots are safe from germs."
- SHOULD S14: "Later, the terns fly all the way to the far south." with `how`, `why` and question wording changed to "the terns" (N10).
- N8: S02 `like` is now ["SK-RA1a-P4","SK-RA1a-C08"].

### Live choices after each hint (changed items)

"Live" follows the brief: a child who has read the hints so far still has a real reason to choose it. Counts are of the choices still live.

**3.T.T.3.a**

| Item | After H1 | After H2 | After H3 |
|---|---|---|---|
| C06 hottext main opinion | 5 sentences, all plausible | opinion-signal sentences only (the opinion sentence and the "I think" style reason sentence) | opinion sentence vs. the reason sentence that restates it |
| P5 ms evidence | 5 | 3 (work hours sentence ruled out as not showing people came) | 2 keys, and the work-hours sentence still arguable until H3 puts it with the busy-families reason |
| C08 ebsr Part B | 4 | 3 | 2 (coach sentence and the key, differing in what they show) |
| C10 mc | 4 | 3 | 2 ("16 teams" fact ruled out) |
| S11 mc | 4 | 3 | 2 ("maps from long ago" fact ruled out) |
| C12 hottext (p4) | 5 | 3 | 2 |
| C13 ms (p4) | 5 | 4 | 3 (two keys plus one near miss) |
| C15 mc | 4 | 3 | 2 ("I think the dog owners..." ruled out) |
| S10 mc | 4 | 3 | 2 (pancakes opinion ruled out) |
| S14 hottext | 5 | 4 | 3 |
| Watch Me 2 | not an item | | |

**3.T.RA.1.a**

| Item | After H1 | After H2 | After H3 |
|---|---|---|---|
| C02 dropdown | slot 1: 3, slot 2: 3 | 3 / 2 | 2 / 2 (at most one blank narrowed) |
| C04 mc | 4 | 3 | 2 |
| C06 ms (rewritten) | 5 | 4 | 3 (two keys plus the near miss) |
| C14 cr | not scored | | |
| C15 ms | 5 | 4 | 3 ("Is a quilt nicer..." ruled out) |
| S01 mc | 4 | 3 | 2 |
| S05 ms (rewritten) | 5 | 4 | 3 (prairie dogs ruled out) |
| S06 dropdown | 3 / 3 | 3 / 2 | 2 / 2 |
| S07 ms (rewritten) | 5 | 4 | 3 |
| S08 mc | 4 | 3 | 2 |
| S14 order | all orders | all | step 4 fixed last, steps 1-3 still to order |
| S15 ms | 5 | 4 | 3 ("Is a wooden toy more fun..." ruled out) |

These counts are my own estimate. A blind re-solve is needed, because I am not allowed to review my own work.

### Corrections to errors the reviewer found in this log

- C06 to C07: I missed that C06's hint 3 let a child eliminate C07's distractors. Fixed in the item (MUST-1).
- P5 "After H2: all 5" was wrong. Under the new hint 2 it is 3.
- C02 slot 1 "cutest" was never a live choice. It is gone, with the absurd slot 2 options.
- "No teaching change needed" for 3.T.T.3.a was wrong, because no Watch Me modelled answering people who disagree. Watch Me 2 now does.
- Bread dough was not "incidental" for RA S07. It was a real topic clash with T-T2, and S07 now uses a thermos.
- RA1a mc tally is 5 mc, not 6.
- TT3a p3 is 179 words, FK 2.8. p4 is 176 words, FK 3.8. RA1a p3 is 129 words, FK 3.1. RA1a p4 is 132 words, FK 3.4.
- Older log descriptions of C06 (RA), S05, S07, p4 (TT3a) and the S02 `like` are stale. This section supersedes them.

### Topic search for the new topics

Grepped across all lessons for thermos, sharpener, tall fence, get broken, weather records, prairie dogs, sneezing and pepper. All hits are in my own blocks, except incidental "prairie" (L-GUM3) and "pepper" as a dog's name (T-TS). Neither is the same topic or key fact.

### Id and revision note for the lead

Changed items kept their ids and `core.rev` stays "1". The architecture says material changes need new ids or a rev bump, but no review-ledger.json exists in the repo yet. Nobody has learner data on these items. Lead: please decide whether to bump.

### Needs blind re-solve

- 3.T.T.3.a: C06, P5 (addon), C08, C10, C12, C13, C15, S10, S11, S14, and Watch Me 2 (read, not solved)
- 3.T.RA.1.a: C02, C04, C06, C14, C15, S01, S05, S06, S07, S08, S14, S15

### Gates after the fixes

- `node verification/check-content.js --all`: PASS, 0 failures, 24 warnings, none about my lessons' similar coverage.
- `python3 verification/readability.py`: nothing flagged; all new passages at 3.8 or lower.
- One-sitting browser check (port 8812, 390 px and 1366 px): "Try a similar question" shows on all 30 core items; key marks correct; three hints show; no page errors; no horizontal scroll. Server stopped.

### Not done

- The RA1a write-task checklist is unchanged (indexes are stored).
- Facts for the reviewer to check: koala sleep range, arctic tern migration claim, thermos, meerkat barks.
- The guard and path scripts were not run.
