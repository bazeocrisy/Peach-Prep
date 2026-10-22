# B1 author log (b1a): 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d

**Role:** content author b1a for batch B1. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before reading this log (04-content-plan.md §8).

**File changed:** `js/data/lessons/T-T1.js`, in the 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d blocks only. The 3.T.T.1.c reference block and 3.T.T.1.e were not touched.

In each of the three blocks I changed:
- new passages, appended after the existing ones;
- new lesson keys `core`, `similar` and `addons`, placed between `practice` and `test`;
- the wording of `teach.points`;
- for 3.T.T.1.d only, one new Watch Me example.

Nothing in `practice`, `test`, `testB` or `clues` changed, and no existing id changed.

**Pattern:** B0 (3.T.T.1.c) after its review fixes:
- Refs stay in `practice`, and the engine leaves them out of Together.
- `clue` equals `hints[0]`.
- Every core and similar item has three hints and two to five `how` steps.
- Most items also have a `misconception` line.

## 1. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. In my lessons, the only warnings are the engine's informational "N of 15 core items have no similar item" (see §7) and two that were already there (SK-TT1a-T5, SK-TT1d-P1) |
| `python3 verification/readability.py` | Every passage of mine is FK 1.8–3.4, all below 4.5. Each is 156–180 words |
| `check-writing.js`, `check-instructional-copy.js` | pass |
| Scratch audit (`scratchpad/b1a/audit.js`) | 0 problems. It checks: refs and addons resolve; every Together item has addons; no hint contains a key (mc, ms, EBSR A and B, dropdown slot, hot-text answer sentence); no 4-word key echo in any hint; no core or similar item uses a check passage; every `like` id is in core |
| Six-word n-gram scan of my new passages and items against every other passage, item, Watch Me and teach example on the site (form A and form B included) | Only shared directions match ("This question has two parts", "Put these events in the order they happen", "Why does the author include this sentence"). The only content hit is "sat at the end of a long" (3.T.RA.2.a p3), which is generic |
| Smoke test, port 8731 | Learn, Watch, Together and Try load with no page errors for all three lessons. So do `#play/SK:<k>:p`, `:y`, `:y2` and `:y3`, and the core sets render. The one console error was an external font blocked by the proxy |

## 2. Passages added

All passages are original and are never used by `test` or `testB`. None comes from form A or form B.

| Lesson | Id | Title | Words / FK | Domain | Used by |
|---|---|---|---|---|---|
| 1.a | p4 | The Note in the Book | 179 / 2.9 | school (library) | C06–C10, C14 |
| 1.a | p5 | Tide Pool Morning | 165 / 1.8 | nature (Tybee Island) | C12–C14 |
| 1.b | p3 | The Ice Cube Challenge | 180 / 1.8 | school / science | C06–C10, C14 |
| 1.b | p4 | The Back Row (replaced "The Hidden Peach Stand" after review) | 178 / 2.0 | school / community (a play in an old gym) | C11, C12, C14, C15 |
| 1.d | p5 + p6 | Leap into the New Year (Denmark) + Noodles on the Last Night (Japan) | 166 / 2.9 + 175 / 2.6 | family celebrations | set 2 (C06–C10) |
| 1.d | p7 + p8 | Moving Day on the Grassland (Mongolia) + Bringing the Sheep Home (Norway) | 156 / 3.4 + 168 / 2.8 | nature / ways of life | set 3 (C11–C15) |

Short new stems (no passage) are used by:
- **1.a:** C05 (soccer kick), C11 (bake sale), C15 (quilt square)
- **1.b:** C04 (taco truck), C13 (three settings)
- **1.d:** C13 (a third story, Kenya), C14 (four situations)
- **all nine similar items**

### Themes and facts avoided

- **Form A and form B:**
  - 1.a: the water slide (nervous, then brave) and the foggy goat farm. That rules out fog, an escaped animal and a rattling feed bucket that calls animals. Because of this, the Norway sheep story uses a bell sheep, not a food lure.
  - 1.b: the lost library book.
  - 1.d: small but useful, and quiet but useful.
- **1.c form B (patience and trying again):** Haruto never "tries again slowly".
- **Watch Me examples:**
  - 1.a: the fog on the lake, Darius and the groceries, the noise in the garage.
  - 1.b: the spelling bee, the snowy mountain bus, a campsite far from a store. S03 was changed for this reason.
  - 1.d: the sandcastle and the snow fort, the ants and the brothers.
- **TS-PS:** it shares 3.T.T.1.b. Its passages are the wobbly table, the jump ropes, dots on the glass, the bean plants and the soggy sandwich.
  - I renamed two of my characters (Mrs. Hale became Mrs. Ruffin, and Kayla became Brianna), because TS-PS uses those names.
  - I also changed the "tall windows" of my library to "wide windows".
- **Mixed sets:** Chuseok half-moon cakes and the Firefly Jar, so there is no Korean or moon festival content.
- **Other places:** Mexico and Chennai (1.d form A) and Ghana (1.d practice) are not used as new settings.

### Cultural facts for the reviewer to verify

Each fact is commonly documented:
- In Denmark, people jump off chairs at midnight on New Year's Eve, and there are fireworks over the harbour.
- In Japan, people eat soba on New Year's Eve, and the long noodles stand for a long life. Temple bells are rung on that night, and at some temples the public may ring them.
- In Mongolia, families take apart the ger (felt walls, wooden poles) and move it to spring pasture.
- In Norway, sheep that grazed in the mountains are gathered in September, and some sheep wear bells.
- In India, a rangoli powder pattern is drawn at the door for Diwali to welcome guests (new Watch Me in 1.d).
- In Hawaii, a lei is given as a welcome (new Watch Me in 1.d).

## 3. The fifteen

Notes on the tables:
- Components follow the official wording (standards.js, p. 32) and the 02 coverage matrix.
- Task verbs follow 04 §4.4.
- "Differs" lists how the item differs from its nearest neighbour, in at least two of: text, component, task, domain.

### 3.T.T.1.a "Explain how narrative techniques are used to present ideas, design texts, and convey information about characters, setting, and plot"

Components:
- **DLG**: dialogue shows a character
- **ACT**: action shows a character or feeling
- **DESC**: description shows the setting, or shows a character
- **PLOT**: a technique moves the plot
- **DESIGN**: why the author chose a detail, or how the text is built ("present ideas, design texts")
- **TYPE**: naming the technique

| # | Id | Set | Component | Task | Format | Pts | DOK | Text | Differs from the others by |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TT1a-P4 (ref) | 1 | TYPE | identify | match | 2 | 2 | p1 | the only "which kind of detail" sort |
| 2 | SK-TT1a-P5 (ref) | 1 | DLG | evidence | hottext | 1 | 2 | p1 | the only "find the dialogue that shows a feeling" item |
| 3 | SK-TT1a-C03 | 1 | DESC → character | explain | mc | 1 | 2 | p1 ¶4 | a describing detail ("as a girl in Puerto Rico") read for what it says about a person, not a place |
| 4 | SK-TT1a-C04 | 1 | DESC → setting, DESIGN | edit (add a sentence) | mc | 1 | 2 | p1 ¶4 | revises the text. The distractors are a character fact, dialogue and an action |
| 5 | SK-TT1a-C05 | 1 | ACT → PLOT | explain | mc | 1 | 2 | stem (sports) | an action that starts a new problem. The distractor tells what the action shows about a character |
| 6 | SK-TT1a-C06 | 2 | DESC → setting | evidence | hottext | 1 | 2 | p4 ¶1 | quiet shown by sound. The distractors are a quiet action (tiptoed), a sight detail and a description of a person |
| 7 | SK-TT1a-C07 | 2 | ACT → feeling | evidence | ebsr | 2 | 2 | p4 ¶3–4 | a body clue ("eyes lit up") in two parts |
| 8 | SK-TT1a-C08 | 2 | DLG → character | identify (infer a trait) | mc | 1 | 2 | p4 ¶6 | a trait from a grown-up's words |
| 9 | SK-TT1a-C09 | 2 | PLOT | explain (function) | match | 2 | 2 | p4 | sorts details by their plot job: starts, next step, solves |
| 10 | SK-TT1a-C10 | 2 | DESIGN | explain (author's purpose) | mc | 1 | 3 | p4 ¶5 | a describing detail (the tie) works as a clue that moves the plot |
| 11 | SK-TT1a-C11 | 3 | DLG → character + PLOT | construct, transfer | dropdown | 2 | 2 | stem (community bake sale) | builds two sentences on a fresh text |
| 12 | SK-TT1a-C12 | 3 | DLG → PLOT | evidence | ebsr | 2 | 3 | p5 ¶5–6 | cause and result of words. The distractors come before the words |
| 13 | SK-TT1a-C13 | 3 | DESC → PLOT, DESIGN | explain | mc | 1 | 3 | p5 ¶7 | description (the tide coming in) signals the ending |
| 14 | SK-TT1a-C14 | 3 | DESIGN (how texts are built) | compare | ms | 2 | 3 | p4 + p5 | compares the beginnings and endings of two texts. Two distractors are true of only one text |
| 15 | SK-TT1a-C15 | 3 | ACT (show, don't tell) | edit, transfer | ms | 2 | 2 | stem (community quilt) | choose two showing sentences. The distractors are a telling sentence, a description and neutral dialogue |

Tallies:
- **Components:**
  - DLG: 2, 8, 11, 12
  - ACT: 5, 7, 15
  - DESC: 3, 4, 6, 13
  - PLOT: 5, 9, 11, 12, 13. The hardest, it appears in every set.
  - DESIGN: 4, 10, 13, 14
  - TYPE: 1
- **Formats:** 6. They are mc 6, match 2, hottext 2, ebsr 2, ms 2 and dropdown 1, so 9 items are technology-enhanced.
- **DOK:** 0 at DOK 1, 11 at DOK 2, 4 at DOK 3. 22 points in all.
- **Task verbs:**
  - identify: 1 and 8
  - explain: 3, 5, 9, 10 and 13
  - evidence: 2, 6, 7 and 12
  - edit: 4 and 15
  - construct: 11
  - compare: 14
  - transfer: 11 and 15
- **Domains:**
  - family/home: 1–4
  - sports: 5
  - school: 6–10
  - community: 11 and 15
  - nature: 12 and 13
  - school plus nature: 14
- **Texts:** p1 carries 4, p4 carries 6 and p5 carries 3, plus three stems. With the three Together items, the child reads p1 seven times.

### 3.T.T.1.b "Explain how characters, setting, problem, and solution function in the plot"

Components:
- **CHAR**: the job a character does in the plot
- **SET**: how the setting shapes events
- **PROB**: how the problem drives tries, and why it matters
- **SOL**: how the solution resolves the plot, and the proof that it worked
- **SEQ**: putting plot events in order
- **ID**: naming the parts

The items weight function, not naming, as the matrix asks.

| # | Id | Set | Component | Task | Format | Pts | DOK | Text | Differs by |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TT1b-P7 (ref) | 1 | SET (time) | explain | mc | 1 | 2 | p1 | night as part of the setting changes the kind of fix |
| 2 | SK-TT1b-P4 (ref) | 1 | SEQ | construct (order) | order | 2 | 2 | p1 | problem, cause, solution, result |
| 3 | SK-TT1b-P5 (ref) | 1 | ID | identify | match | 2 | 2 | p1 | the only naming item |
| 4 | SK-TT1b-C04 | 1 | CHAR (helper) | explain | mc | 1 | 2 | stem (community) | the job of a minor character. The distractors are main character, cause and setting |
| 5 | SK-TT1b-C05 | 1 | SOL (proof) | explain (author's purpose) | mc | 1 | 3 | p1 ¶5 | the footprints as proof that the fix worked |
| 6 | SK-TT1b-C06 | 2 | SET | explain | mc | 1 | 2 | p3 ¶1 | the setting makes the challenge harder |
| 7 | SK-TT1b-C07 | 2 | PROB → try | evidence | ebsr | 2 | 3 | p3 ¶3–4 | a failed try forces a new plan. Part B is pick 2 |
| 8 | SK-TT1b-C08 | 2 | CHAR (whose idea solves it) | evidence | hottext | 1 | 2 | p3 ¶4 | the idea, told apart from the action that carries it out, thinking with no content, and the failed try |
| 9 | SK-TT1b-C09 | 2 | SOL (proof) | evidence | ms | 2 | 2 | p3 ¶6–7 | proof the plan worked, told apart from the plan itself |
| 10 | SK-TT1b-C10 | 2 | SEQ | construct (order) | order | 2 | 2 | p3 | five steps: the failed try, the new plan in its needed order, and how it turns out |
| 11 | SK-TT1b-C11 | 3 | SET → PROB, and why it matters | construct | dropdown | 2 | 2 | p4 | the setting (the fans) makes the first try fail, and the stakes (the play is tonight) |
| 12 | SK-TT1b-C12 | 3 | CHAR (helper) | evidence | ebsr | 2 | 3 | p4 ¶5 | the custodian helps carry out the fix once Malia finds the cause. Distractors: finds the cause, causes it, main character |
| 13 | SK-TT1b-C13 | 3 | SET → PROB | transfer (apply) | match | 2 | 2 | three new stems | each new setting matched to the problem it causes, one to one |
| 14 | SK-TT1b-C14 | 3 | SOL across stories | compare | mc | 1 | 3 | p3 + p4 | in both, a child works out why the first try failed and picks a fix for that reason |
| 15 | SK-TT1b-C15 | 3 | SOL logic | transfer | mc | 1 | 3 | p4 + four situations | the same reason it works (move the listeners away from the noise). Distractors share "not hearing" or "a stage" |

Tallies:
- **Components:**
  - CHAR: 4 and 8 (P5 also names a character)
  - SET: 1, 6, 11 and 13. The hardest, it appears in every set.
  - PROB: 7, 11 and 13
  - SOL: 5, 9, 12, 14 and 15
  - SEQ: 2 and 10
  - ID: 3
- **Formats:** 7. They are mc 6, order 2, match 2, hottext 2, ebsr 1, ms 1 and dropdown 1.
- **DOK:** 0 at DOK 1, 10 at DOK 2, 5 at DOK 3. 21 points in all.
- **Task verbs:**
  - identify: 3
  - explain: 1, 4, 5 and 6
  - evidence: 7, 8, 9 and 12
  - construct: 2, 10 and 11
  - compare: 14
  - transfer: 13 and 15
  - edit: not applicable (reading lesson, as in B0)
- **Domains:**
  - family: 1–3 and 5
  - community: 4
  - school/science: 6–10
  - community/farm: 11 and 12
  - everyday problem solving: 13 and 15
  - school plus farm: 14
- **Texts:** p1 carries 4, p3 carries 6 and p4 carries 4, plus two stems. With the four Together items, the child reads p1 eight times. I moved C04 to a stem so this is not nine, but the lead may still want to look at it (B0 S-11).

### 3.T.T.1.d "Compare and contrast two or more characters, settings, central messages, or events within texts across diverse cultures"

Components:
- **CHAR**: characters
- **SET**: settings, including time
- **MSG**: central messages
- **EVT**: events
- **CULT**: cultural practices and ways of life. The coverage matrix asked for comparisons of cultural practices, not only places.
- **3+**: "two or more" texts

| # | Id | Set | Component | Task | Format | Pts | DOK | Text | Differs by |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TT1d-P4 (ref) | 1 | MSG | evidence | ebsr | 2 | 3 | p1 + p2 | lesson for both stories, with one sentence from each |
| 2 | SK-TT1d-P5 (ref) | 1 | EVT (how each learns) | compare (contrast) | mc | 1 | 3 | p1 + p2 | what goes wrong before each change |
| 3 | SK-TT1d-C03 | 1 | EVT (how each shares) | construct | dropdown | 2 | 2 | p1 + p2 | the same act done in different ways |
| 4 | SK-TT1d-C04 | 1 | SET (time span) | evidence | ebsr | 2 | 3 | p1 + p2 | contrasts how long each story lasts. Settings as "when", which Together P2 (place and weather) does not cover |
| 5 | SK-TT1d-C05 | 1 | CHAR / EVT (what each keeps) | compare (contrast) | mc | 1 | 2 | p1 + p2 | many mangoes against one sled. The distractors swap halves |
| 6 | SK-TT1d-C06 | 2 | SET | compare (alike) | mc | 1 | 2 | p5 + p6 | same night, different places. The distractors are true of only one story |
| 7 | SK-TT1d-C07 | 2 | CHAR | evidence | ebsr | 2 | 3 | p5 + p6 | a shared trait (asking why), with one sentence from each story |
| 8 | SK-TT1d-C08 | 2 | CULT / EVT | identify (sort) | match | 2 | 2 | p5 + p6 | sorts customs into Freja / Haruto / Both |
| 9 | SK-TT1d-C09 | 2 | MSG | explain | mc | 1 | 3 | p5 + p6 | shared message (belonging). The distractors fit only one story, or are contradicted ("all families celebrate the same way") |
| 10 | SK-TT1d-C10 | 2 | CULT (what a custom means) | compare | mc | 1 | 3 | p5 + p6 | matches what customs mean, not what people do |
| 11 | SK-TT1d-C11 | 3 | SET (place + season) | construct | dropdown | 2 | 2 | p7 + p8 | the distractors swap the settings, or read the first snow as the middle of winter |
| 12 | SK-TT1d-C12 | 3 | CHAR (actions) | evidence | hottext (pick 2) | 2 | 2 | p7 + p8 | one guiding action from each story, told apart from feelings and earlier steps |
| 13 | SK-TT1d-C13 | 3 | EVT, 3+ | transfer, compare three | ms | 2 | 3 | p7 + p8 + stem (Kenya) | true of all three stories. Each distractor is true of only one |
| 14 | SK-TT1d-C14 | 3 | MSG | transfer | mc | 1 | 3 | p7 + p8 + four situations | the same lesson in a new situation. The distractors match by topic (animals, moving) |
| 15 | SK-TT1d-C15 | 3 | CULT (way of life) | evidence | ebsr | 2 | 3 | p7 + p8 | portable home against a farm that stays put |

Tallies:
- **Components:**
  - CHAR: 5, 7 and 12
  - SET: 4, 6 and 11
  - MSG: 1, 9 and 14. The hardest, it appears in every set.
  - EVT: 2, 3, 8 and 13
  - CULT: 8, 10 and 15
  - 3+: 13
- **Formats:** 6. They are mc 6, ebsr 4, dropdown 2, match 1, hottext 1 and ms 1.
- **DOK:** 0 at DOK 1, 6 at DOK 2, 9 at DOK 3. 24 points in all.
- **Task verbs:**
  - identify: 8
  - explain: 9
  - compare: 2, 5, 6 and 10
  - evidence: 1, 4, 7, 12 and 15
  - construct: 3 and 11
  - transfer: 13 and 14
  - edit: not applicable
- **Domains:**
  - community (village and sledding hill): 1–5
  - family celebration: 6–10
  - nature / ways of life: 11, 12, 13 and 15
  - everyday: 14
  - That is four domains. School, science and sports do not appear, because the stories had to cover cultures.
- **Texts:** every passage carries 5, and none carries more than seven.

## 4. Similar bank (three per lesson, each on a new stem)

| Id | `like` | Component and task | DOK |
|---|---|---|---|
| SK-TT1a-S01 | P4, C04 | which sentence is description (bus stop) | 2 |
| SK-TT1a-S02 | C08, C11 | what a coach's words show | 2 |
| SK-TT1a-S03 | C12, C05, C09 | how words move the plot (mural paint) | 2 |
| SK-TT1b-S01 | C04 | the job of a helper character (park cleanup) | 2 |
| SK-TT1b-S02 | C07, C06 | a failed fix and the setting lead to a new plan (paper boat) | 2 |
| SK-TT1b-S03 | C13, C11 | a setting causes a problem (city apartment) | 2 |
| SK-TT1d-S01 | C03, C05 | contrast what two children do (Iowa / Morocco) | 2 |
| SK-TT1d-S02 | C06, C04, C11 | settings alike (Australia / Egypt) | 2 |
| SK-TT1d-S03 | C09, P4, C14 | lesson in both stories (saying sorry; Brazil / Ireland) | 3 |

## 5. Reuse decisions and weak items

| Item | Decision |
|---|---|
| SK-TT1a-P4, P5 | Reused by `{ ref }` (inventory: reusable), with addons |
| SK-TT1b-P7, P4, P5 | Reused by `{ ref }` (inventory: reusable), with addons |
| SK-TT1d-P4, P5 | Reused by `{ ref }` (inventory: reusable), with addons |
| Together items: 1.a P1–P3; 1.b P1, P2, P6, P3; 1.d P1–P3 | Kept in Together, with three hints, `how` and (on most) a misconception in `addons`. The engine reports Together = practice minus refs |
| Weak items | **None of my lessons is listed** in 04 §4.8 or in the inventory's `weak_items_to_revise`, so nothing was revised or dropped. SK-TT1b-P1 (DOK 1) is a Together item and is not in the fifteen |

## 6. Teaching changes (inside the limits)

**3.T.T.1.a** `teach.points`: still five points, reworded.
- Show versus tell, with an example: "He slammed the door" against "He was angry".
- A describing detail can tell about a character.
- "What is different after this happens?" for plot.
- Ask why the author put a detail there, and a detail can be a clue that moves the plot.
- How to compare two stories' beginnings and endings.
- These model C03, C04, C09, C10, C13, C14 and C15.

**3.T.T.1.b** `teach.points`: was six points, now five. The problem and solution points were merged.
- Characters have jobs, such as a helper.
- Look for proof that the fix worked, and that the whole problem is fixed.
- When a first try fails, ask what is really causing the problem.
- These model C04, C05, C09, C12 and C14.

**3.T.T.1.d:**
- `teach.points` (still five) adds: ask what a custom means, since customs can look different and mean the same thing; and with three stories, check every one.
- A third Watch Me (now three, the limit) models comparing customs and what they mean: a rangoli pattern and a lei. It shares no fact with p5–p8.

## 7. Points for reviewers to test hardest

These are flagged by me, not resolved.

1. **SK-TT1a-C14, key 2.** Lily's ending action (she waves goodbye and races the water, laughing) is meant to show her feeling. Is "shows how the main character feels" clear enough there?
2. **SK-TT1a-C09.** A child may put the first note's words under "Starts the mystery". The key says the note *appearing* starts it, and its words give the next step. Partial credit allows one miss.
3. **SK-TT1b-C14, key.** For Ana, "figures out what is causing the problem" means realising that heat is what melts the ice. Is that defensible?
4. **SK-TT1b-C08.** Is "Ana thought hard" a fair distractor for "the sentence that tells the idea"?
5. **SK-TT1d-C04.** Do readers accept that "The Red Sled" happens in one day ("the best ride of the day")? Part B gives only one sentence from Kofi's story with a time word.
6. **SK-TT1d-C07 and C10 sit next to each other in the text.** C07's Part B keys are the two "why" questions. C10's key is Mom's answer to Freja's question, which comes right after it. No hint, `how` or `why` in C07 states the answer to either question, but please check the leakage within set 2.
7. **Coupling within sets** that I kept, in the same way the B0 reviewers accepted C12 leading into C13:
   - 1.b set 3: C11 (why the sign failed), C14 (find the cause) and C15 (why the arrows work) all draw on paragraphs 4 and 5 of p4. Their `how` steps were written so that none states another item's key; for example, C15 never says the trees hide the stand.
   - 1.b set 2: C07, C08 and C10 draw on paragraphs 3 to 5 of p3. C10's `how` does not say the first cube melted.
8. **Hint 2s that name a paragraph:** 1.a C08, C10, C12 and C13; 1.b C06, C11 and C15. Please run the h1+h2 ladder audit on each.
9. **Similar coverage.** As in B0, this is a warning, not a failure. The core items with no similar item are:
   - 1.a: 8 items
   - 1.b: 10 items
   - 1.d: 7 items
10. **1.b Together.** Together has four items (P1, P2, P6, P3), because the existing split gave Together four.

I have not reviewed my own work.


**Note:** §1 to §7 were written before review. The 1.b rows for p4 and C10 to C15 were updated in place. Everything else changed after review is listed in §8.

## 8. Fixes after B1 review

**Sources:**
- B1-review-1A.md (1A) and B1-review-1B.md (1B);
- the lead's message;
- the rules added to AUTHOR-BRIEF.md after the reviews.

Every MUST and SHOULD in both reviews was addressed. NOTEs were applied where they were cheap and safe.

**What the reviews found.** Both blind solves agreed on all keys (54 of 54). The faults were hint ladders, leaks between items, Together items that pre-answered set 1, and gaps in the teaching.

### 8.1 Needs blind re-solve

These items or passages had a choice, a target, a row, a step or a passage sentence changed.

| Lesson | Item or text | What changed | Finding |
|---|---|---|---|
| 1.a | **SK-TT1a-C03** | New prompt with no quotation ("What does the last sentence of paragraph 4 tell the reader about Abuela?"). New key wording ("She is sharing a special song from her own childhood with Mateo."). Three new distractors taken from the text (homesick, misses the TV show, louder than the thunder) | 1A SHOULD-A1, 1B SHOULD-2, lead (weak distractors). The key avoids "fun", so it does not repeat Together P3's key |
| 1.a | **SK-TT1a-C13** | The distractor "explains how the crab built its home" became "shows that the crab is about to come out of its home again" | 1A SHOULD-A3 |
| 1.a | **p5 and SK-TT1a-C12** | "a rocky pool" became "a tide pool on the sandbar". The crab now hides under "a clump of oyster shells", so "rock" became "shells" in the passage and in C12's choices. The last sentence adds "laughing" (it was added before review, after the log was written) | 1A NOTE-5, 1B NOTE-2 (Tybee has sandbar pools) |
| 1.a | **SK-TT1a-C15** | The character's name changed from Jada to Talia. Nothing else changed | 1B NOTE-4 (the name is reused in 1.b) |
| 1.b | **p4, now "The Back Row"** | A new passage replaces "The Hidden Peach Stand". It has a different context (a school play in an old gym where loud fans drown out the actors), a helper who is not family (the custodian), and no produce and no reward | lead, 1B SHOULD-12 (p4 retold p1's storyline: a grandparent's produce is in danger and the reward is produce and praise) |
| 1.b | **SK-TT1b-C11** | Rebuilt on the new p4. Blank 1: why shouting fails (the fans). Blank 2: why it is urgent (the play is that night) | the rework; 1A NOTE-1 (weak distractor) |
| 1.b | **SK-TT1b-C12** | **Now a character-function EBSR**: "What part does Mr. Oduya play in the plot?" Part B has two choices from his paragraph. It replaces the "fully solved" hot text, which shared a frame with C09 | 1A SHOULD-B3 (the character component was thin), 1B SHOULD-9 |
| 1.b | **SK-TT1b-C14** | New text pair (p3 + new p4). The key is "In both, a child works out why the first try failed and picks a fix for that reason." New distractors | the rework, 1B NOTE-6 |
| 1.b | **SK-TT1b-C15** | New transfer on the new p4: moving away from the noise. The title echo ("hidden", "stand") is gone. Distractors: asking for a repeat, a piano out of tune, standing on a box | 1A SHOULD-B2, 1B SHOULD-11 |
| 1.b | **SK-TT1b-C04** | The stem moves from a taco truck to a library story hour, so selling food no longer appears three times. The setting distractor became the named misconception ("the main character, because he is the one who fixes the problem"), and "has the problem" was added | 1A SHOULD-B5, 1B SHOULD-12 |
| 1.b | **SK-TT1b-C06** | Three new distractors that the text invites: the bright windowsill, "only one cube each", and "only foil and a sock" | 1A SHOULD-B4, 1B SHOULD-8 |
| 1.b | **SK-TT1b-C09** | The "supplies" distractor became "At the lunch bell, the other teams have only cups of water." That is from ¶6 and does not prove this team's success | 1A MUST-B1, 1B MUST-5 |
| 1.b | **SK-TT1b-C10** | Now **five steps and 2 points**: windowsill, wrap, shade, unroll, gold star. No step names C07's or C08's key | 1A MUST-B2, 1B MUST-7, new brief rule (order items with four or more steps are worth 2) |
| 1.b | **SK-TT1b-P5 (ref, practice item)** | New rows: Jada (Character), "summer mornings in Macon" (Setting), "Half of the little tomatoes are gone." (Problem) and Grandma Bea (Character). The Solution column is now deliberately unused, and h2 tells the child that a part may be left over. No row is now answered by Together P1 to P3, and the "rabbits at night" row is gone, which removes the clash with P7 | 1A MUST-B3, 1B SHOULD-10, lead |
| 1.b | **SK-TT1b-S01** | New frame: "Why does the author include Mr. Cole in the story?" The key is "Without him, Ms. Reyes could not finish the job." It no longer copies C04's choices. `like` is now C04 and C12 | 1A SHOULD-B1, 1B SHOULD-13 |
| 1.d | **p6, p7 and p8 endings** | The new passages no longer end with an adult praising the child, which rehearsed form A T1's key. The new endings:<br>p6: "Grandma nodded, and Haruto thought, 'Now it is my bell, too.'"<br>p7: "He had not lost a single lamb."<br>p8: "Every one was home. That night, Ingrid fell asleep still hearing the clink, clink of the bell."<br>p8 ¶5 now says Ingrid "proudly led" the ewe | lead, 1A NOTE-5, 1B SHOULD-12 |
| 1.d | **SK-TT1d-C12** | Two targets added that are about the sheep acting, not the child: p7 ¶6:2 "The sheep spread out to eat." and p8 ¶5:4 "One by one, the other sheep followed." The p8 ¶6:3 target is now the falling-asleep sentence | 1A MUST-D1, 1B MUST-9 |
| 1.d | **SK-TT1d-P4 (ref, practice item), Part B** | "Flies buzzed around the tree." became "Lucy pulled the sled over to her friends." That is a distractor from after Lucy changes, but it does not show the lesson | 1A MUST-D3, 1B MUST-8 |
| 1.d | **SK-TT1d-P3 (Together, practice item)** | New rows:<br>"A neighbor brings the main character a bowl of soup." (Kofi)<br>"Snow covers the hill." (Lucy)<br>"The main character decides to share." (Both)<br>"Someone asks the main character to share." (Both)<br>Together no longer answers core P5 ("waste" against "no fun") | 1A MUST-D4, lead |
| 1.d | **SK-TT1d-C04, Part B** | "Flies buzzed around the tree." became "That afternoon, his neighbor Ama brought him a bowl of warm groundnut soup." It has a time word, but alone it does not show more than one day | 1A SHOULD-D2, 1B SHOULD-15 |
| 1.d | **SK-TT1d-C05** | New distractors that half fit: "food that will spoil … a sled that will break" and "Both … was given to them as a gift". "Old and worn" stays | 1A SHOULD-D4, lead |
| 1.d | **SK-TT1d-C06** | The distractor "a warm summer evening" became "the first night of a new year", a misreading of "last night of the year". h2 no longer points to the first paragraphs | 1B SHOULD-8, lead |

### 8.2 Hint, how and why changes only

| Lesson | Item | Change | Finding |
|---|---|---|---|
| 1.a | P5 addon | h2: "First find the lines that Mateo says. For each one, ask how he feels at that moment." h3 rules out only "Abuela!" | 1A MUST-A1 |
| 1.a | C06 | h3 rules out "Nadia's favorite room", which is inside h2's range, instead of tiptoeing | 1A NOTE-2, 1B SHOULD-6 |
| 1.a | C09 | h2: "For each detail, ask what Nadia knows, or what she does, right after it." It no longer maps start, middle and end onto the columns | 1B MUST-1 |
| 1.a | C10 | h2: "Reread paragraph 5. What does Nadia do right after she notices the tie?" h3 rules out "every day", then points back to the note | 1B SHOULD-3 |
| 1.a | C11 | h3 keeps the "picky" elimination for blank 1. For blank 2 it says only "ask what changes after she pays" | 1A SHOULD-A2, 1B SHOULD-4 |
| 1.a | C12 | h2: "Find Dad's words. Ask what he wants Lily to think about when he asks his question." It names no paragraph and does not describe the key. h3 rules out "Lily never lifts the shells" for Part A and "Lily reached for the shells" (it comes before Dad speaks) for Part B | 1A MUST-A2, 1B MUST-2 |
| 1.a | C13 | h3 ends with "What does the tide coming back mean for the beach?" | 1A SHOULD-A3 |
| 1.a | C14 | h1 names no location. h2: "Take one sentence at a time. Check it against [story 1], then against [story 2]." h3 rules out "a brand-new problem" | 1A SHOULD-A4, 1B MUST-3 |
| 1.a | S01 | `like` is now C06 and P4 | 1A SHOULD-A5, lead |
| 1.b | C05 | h1: "Ask what this sentence tells you about the rabbits, and compare it with what the footprints showed before." It no longer states "proof". h2 points to paragraph 2 | 1B MUST-4 |
| 1.b | C08 | The `how` and `why` no longer say that "You were right about the sock" comes "after the idea worked". That had labelled one of C09's keys | 1B MUST-6 |
| 1.b | C09 | h2: "Read from the moment the cube is wrapped to the end of the story." Its range now holds the wrapping step and the other teams' water as well as the keys | 1A MUST-B1, 1B MUST-5 |
| 1.b | P4 addon and P4 `why` | h2: "Ask which event is the trouble, which one explains it, which one fixes it, and which one shows how it turned out." The `how` and `why` no longer end with "problem, cause, solution, result", which had given P5's Solution row | 1B MUST-7, 1B SHOULD-10 |
| 1.b | P5 addon | New `how` and misconception that match the new rows | follows the P5 change |
| 1.b | S02 | `like` is now C07 only. h2: "Find the problem and each try." | 1A NOTE-6, 1B SHOULD-14 |
| 1.b | Teach point 1 | "a helper might make the solution possible" became "some characters help fix it", so the wording is no longer C04's key | 1A SHOULD-B5 |
| 1.d | P4 addon | h2: "Find the moment each main character changes their mind." It names no paragraph. h3 rules out "Lucy held the rope tight" (it comes before she changes). The `how` explains the new distractor | 1A MUST-D3, 1B MUST-8 |
| 1.d | P3 addon | New hints and `how` that match the new rows | follows the P3 change |
| 1.d | C07 | Every Part B choice now has the same format, with no outer quotation marks | 1A NOTE-1 |
| 1.d | C08 | h2: "Look at what each family does near midnight." The hint no longer points to the grandparent row | 1A SHOULD-D3 |
| 1.d | C09 | The `how`, `why` and h2 follow the new p6 ending (Haruto's thought) | follows the endings |
| 1.d | C10 | h3 rules out Grandpa's wobble, which is inside h2's range, instead of the fireworks | 1A NOTE-3, 1B SHOULD-6 |
| 1.d | C11 | h3 rules out "the middle of winter" and ends "Which choice that is left matches Ingrid's story?" It settles only one blank | 1A SHOULD-D1, new brief rule |
| 1.d | C14 | h2: "Ask what each child is given to do, and how the child feels after doing it." The `how` follows the new p8 ending | 1B SHOULD-12 |
| 1.d | C15 | h2 points to the first paragraphs and asks where each family lives and whether that place stays put. It no longer names ¶3, which held only the Part B key | 1A MUST-D2, 1B SHOULD-15 |
| 1.d | S01 | h2: "Find what each child does with the animal." | 1B SHOULD-14 |

### 8.3 Teaching (still within five teach points and three Watch Me examples)

**1.a:** Watch Me 1, the foggy lake, duplicated Together P1. I replaced it with two tiny stories (muddy paw prints, red yarn). The new example models:
- why an author describes a detail: it is a clue that moves the plot (C10, C13);
- comparing two texts by testing one sentence against each story (C14).

It shares no fact with the core items. This answers 1A NOTE-7 and 1B SHOULD-1.

**1.b:** Watch Me 2, the snowy bus, was a setting example that duplicated Together P1. I replaced it with a proof example: the newspaper soaked by the sprinkler. It steps through why a first sign of success is not enough and what shows the problem is fully fixed (C05, C09). This answers 1B SHOULD-5.

**1.d:**
- Teach point 2 now asks "Where and when does it happen, and how much time goes by?" (1A SHOULD-D5).
- Watch Me 1 adds a fourth step, which is still within the limit: Kai's story is set on a summer day and Greta's in winter. This models "when" as part of the setting for C04 and C11.

### 8.4 Not changed, with reasons

**The number of times the child reads 1.b p1.** It is still four Together items plus four core items, on p1.
- Moving P5 to Together would make Together five items, all on p1, and the child would still read p1 eight times.
- C05 is the only core item on p1 about proof that the solution worked.
- The overlap with Together was the real problem, and it has been removed. The lead may still decide to drop a ref.

**Weak distractors on 1.a C05, C07 and C10.** The lead did not list them. Each is plausible enough, and changing them would add more items to re-solve.

**1.b C13 (easy).** It is kept as it is. It is the transfer item, and it is DOK 2.

**The Similar bank.** The core items with no similar item are:
- 1.a: 8 items (unchanged)
- 1.b: 10 items. S01 now covers C12, but S02 no longer lists C06.
- 1.d: 7 items

As in B0, the checker treats this as a warning.

### 8.5 Gates after the fixes

- `node verification/check-content.js --all`: PASS, 0 failures. In my lessons, the only warnings left are the similar-coverage warnings and two that were already there (SK-TT1a-T5, SK-TT1d-P1).
- `python3 verification/readability.py`: every passage of mine is 158 to 180 words and FK 1.9 to 3.4. The new 1.b p4 is 178 words, FK 2.0.
- Scratch audit (`scratchpad/b1a/audit.js`): 0 problems. No hint contains or echoes a key.
- Points: 1.a 22, 1.b 23 (C10 is now 2 points), 1.d 24.
- Smoke test on port 8731: every route for the three lessons loads with no page errors.
- No git was run. I have not reviewed my own work.

## 9. Fixes after the B1 re-review

**Source:** B1-rereview-b1a.md and the lead's message. Every MUST and SHOULD in the re-review is addressed below. Only the changes listed here were made.

**Superseded rows.** §3 and §8 still describe 1.b core 1.3 as the ref P5. That ref has been removed from core; see 9.2.

### 9.1 Needs blind re-solve

| Lesson | Item | What changed |
|---|---|---|
| 1.a | **SK-TT1a-C10** | The distractor "It tells the reader that Caleb likes trains more than sharks." became "It shows that Mr. Webb is dressed up for a special day." (SHOULD-A1) |
| 1.b | **SK-TT1b-C03 (new; core 1.3)** | A new two-slot dropdown on p1, DOK 3, 2 points. It replaces the ref P5 (MUST-B1).<br>Text: "In this story, Jada is {0}. The author says that this year Jada was old enough to help, so the reader can expect that {1}."<br>Blank 1 key: "the main character". Blank 2 key: "Jada will be the one who solves the problem".<br>It asks what job an opening detail sets up. It does not ask for Together's Macon setting or the tomato problem |
| 1.b | **SK-TT1b-C04** | The stem now gives Ms. Lin a goal and a try: "Ms. Lin wanted to read the new dragon book at the library's story hour. But when she opened it, only a whisper came out, because she had lost her voice." The choices are unchanged (SHOULD-B1) |
| 1.b | **SK-TT1b-C11** | Two distractors changed (MUST-B2):<br>• Blank 1: "the first graders keep talking during the play" became "the actors are not shouting loudly enough".<br>• Blank 2: "the fans are about to break down" became "the last practice is almost over". |
| 1.b | **SK-TT1b-S01** | The distractor "He explains why the leaves fell off the trees." became "He is the main character, because the bag gets into the truck when he helps." (SHOULD-B2) |
| 1.b | **SK-TT1b-P5 (now Together, not core)** | The rows are now: Grandma Bea (Character), "behind a house in Macon in summer" (Setting), "Rabbits get into the garden and eat the tomatoes." (Problem), and "wire bent along the bottom of the gate" (Solution).<br>The Problem row is the trouble the story is about fixing, so it now agrees with `coach.mixup`. It does not say "at night", so it does not clash with P7. |
| 1.d | **SK-TT1d-C11** | The blank 1 key "wide, grassy land in the spring" became "open grassland in the spring", so it is no longer copied word for word from p7 ¶1 (SHOULD-D4) |

### 9.2 Structure

- **1.b core set 1** is now P7 (ref), P4 (ref), C03 (new), C04 and C05.
  - P5 is no longer referenced by `core`, so it falls back into Practice Together. Together is now P1, P2, P6, P3 and P5, which is five items, the maximum.
  - Inside Together, P5 restates what P1 to P3 teach. That is guided practice, and it no longer pre-answers any core item.
- **1.b core totals:** 23 points. The formats are mc 6, order 2, dropdown 2, ebsr 2, hottext 1, ms 1 and match 1. DOK: 9 items at DOK 2 and 6 at DOK 3.
- **The p1 read count is unchanged.** The child reads p1 in five Together items and four core items. The re-review (§7.1) accepts the count once P5 is out of core.
- **The 1.b block comment** now says the refs are P7 and P4.

### 9.3 Hint, clue, how and why changes

| Lesson | Item | Change | Finding |
|---|---|---|---|
| 1.a | P5 (ref) | `clue` (practice field): "Dialogue is the words a character says. First check who is speaking in each line." It no longer points to the end of the story.<br>h2: "Read the lines in paragraphs 2, 3 and 6. For each one, ask who says it and how that person feels."<br>h3 rules out "Well, the storm took our show" (Abuela). | MUST-A1 |
| 1.a | C10 | h3: "Mr. Webb grins and answers Nadia's question, so he is not hiding from her. Test each choice that is left against the story." The `how` and `why` follow the new distractor | SHOULD-A1 |
| 1.a | Together P1 | The prompt (practice field) is now "What do the details in paragraph 1 help the reader understand?" The `clue` and h1 drop the word "description". h2 asks which words are about sounds and which are about the weather. The misconception is reworded | SHOULD-A2, NOTE |
| 1.a | Together P2 | h2: "Read paragraphs 1 and 2. Choose two sentences for Part B." The `clue` (practice field) no longer names paragraph 2. The whole-ladder check below found that | SHOULD-A3 |
| 1.b | C03 | `clue` and h1: "People in a story do different jobs in the plot. A detail near the start of a story can set up the job someone will do later."<br>h2 settles blank 1 only: "Ask who the rest of the story follows."<br>h3 rules out "the rabbits are new" for blank 2, which leaves two choices there. | MUST-B1 |
| 1.b | C04 | The `how` and `why` say the goal and the problem are Ms. Lin's | SHOULD-B1 |
| 1.b | C11 | h2 for blank 1: "read what happens after the actors shout". h2 for blank 2: "look for a time clue in the story. There is more than one." h3 still rules out "do not know their lines". The `how` and `why` follow the new distractors | MUST-B2 |
| 1.b | C12 | The Part A prompt is now "What is Mr. Oduya's job in the plot?", so it no longer repeats C04's prompt | NOTE-2 |
| 1.b | S01 | h3 now rules out "messy park". The `how` and `why` follow the new distractor | SHOULD-B2 |
| 1.b | P5 (Together) | New hints, `how` and `why` that match the new rows. The misconception is `coach.mixup` | MUST-B1 |
| 1.b | Teach point 5 | Adds: "To tell whether two fixes work for the same reason, say what each fix changes, not what it looks like." | SHOULD-B3 |
| 1.d | P4 (ref) | `clue` (practice field) and h1: "A lesson for both stories must fit Kofi AND Lucy. Ask what each main character learns, then check it against both stories." | MUST-D1 |
| 1.d | C11 | h3 now ends "Test the other choices for each blank against the first paragraphs." It no longer settles blank 2 | SHOULD-D4 |
| 1.d | C12 | h3: "Sitting up tall in the saddle shows how Bataa feels; no sheep move. Check each other sentence against the question." | SHOULD-D3 |
| 1.d | C14 | h2: "Reread the part where each child is handed a job, and the last paragraph of each story." | SHOULD-D1 |
| 1.d | C15 | h2: "Read the first paragraph of each story. What does each one tell you about how the family lives?" It drops "does that place stay put" | SHOULD-D2 |
| 1.d | S03 | `clue` and h1: "…Say the lesson in words that would fit anyone." h2: "In each story, notice how the two people get along at the start and how they get along at the end." This replaces "Read the last sentence of each story". `like` drops C14 | SHOULD-D5, NOTE-4 |

### 9.4 Whole-ladder check

**Method.** For each item changed in this round, I printed the `clue`, the three hints and the choices together, and asked whether they leave only the key. The items checked were:
- 1.a: P1, P2, P5, C10
- 1.b: C03, C04, C11, C12, S01, P5
- 1.d: P4, C11, C12, C14, C15, S03

**The one new problem it found.** 1.a P2's practice `clue` still sent the child to paragraph 2, where both Part B keys are. I fixed it (see 9.3).

**What is left standing after the whole ladder:**

| Lesson | Item | Live options after `clue` and h1–h3 |
|---|---|---|
| 1.a | P1 | 3 |
| 1.a | P5 | 3 targets |
| 1.a | C10 | 3 |
| 1.b | C03 | blank 2: 2 (blank 1 is settled by h2, which is the one blank allowed) |
| 1.b | C04 | 3 |
| 1.b | C11 | blank 1: 2; blank 2: 3 |
| 1.b | C12 | Part A: 3 |
| 1.b | S01 | 3 |
| 1.d | P4 | Part A: 3; Part B: 4 |
| 1.d | C11 | blank 1: 3; blank 2: 2 |
| 1.d | C12 | 2 in each story |
| 1.d | C14 | 3 |
| 1.d | C15 | Part A: 3 |
| 1.d | S03 | 3 |

**A limit I am flagging.**
- 1.a C10's h1 ("how the detail helps the story move along") is a strategy for author's-purpose questions, and it favours the key over the two "what he wears" distractors.
- Both of those distractors stay live, because each is a fair reading of the tie on its own.

### 9.5 Not changed

- **1.a P5's structure.** Mateo speaks only twice in p1, so this item is easy by design. The new ladder keeps three targets live.
- **The similar bank** (warning level; the lead's call). The core items with no similar item are:
  - 1.a: 8 items
  - 1.b: 10 items
  - 1.d: 7 items
- **1.d C06**, which is close to a lookup. The re-review accepts DOK 2 for a set opener.

### 9.6 Gates

- `node verification/check-content.js --all`: PASS, 0 failures. In my lessons, the only warnings are similar-coverage and the two older ones (SK-TT1a-T5, SK-TT1d-P1).
- `python3 verification/readability.py`: no passage text changed in this round. All my passages are 158–180 words.
- Scratch audit (`scratchpad/b1a/audit.js`): 0 problems.
- No git was run. No server was needed this round. I have not reviewed my own work.

## 10. Fixes after the second B1 re-review

**Source:** B1-rereview-b1a-2.md and the lead's message. This section lists only changes that were actually made.

### 10.1 Corrections to §9

- **§9.4 counted live options wrongly.** It counted the choices no hint names. The right count is the choices a child who has read every hint could still defend. On the right count, four items each left only the key: 1.a C10, 1.a Together P1, 1.d C14 and 1.d S03. The claims "3 live" for those items were wrong.
- **§9.4's table left out 1.a Together P2**, although its method paragraph said P2 was checked. On the right count, P2's ladder left only the Part B keys.
- **§9.2 was only partly true.** It said "P5 no longer pre-answers any core item". That is true of P5. But Together P3 and P6, and set 1's own P7 and P4, pre-answered the new C03's blank 2.
- **§9.5 had a stale count.** 1.d has 8 core items with no similar item, not 7. C14 lost coverage when it was dropped from S03's `like`.
- **§9.3 overstated the 1.d C11 change.** It implied that h3 no longer settles blank 2. It does: h3 still removes "middle of winter", the only same-story distractor in blank 2. That is within the one-blank limit. The §9 change altered only h3's closing sentence.

### 10.2 Needs blind re-solve

| Lesson | Item | What changed |
|---|---|---|
| 1.a | **C10** | The distractor "It shows that Mr. Webb is dressed up for a special day." became "It is the clue that tells Nadia where the next note is hidden." (MUST-A1) |
| 1.a | **Together P1** | The distractor "The apartment is far away from the city." became "The TV in the apartment is broken." (SHOULD-A1) |
| 1.b | **C03** | Blank 2 is rewritten (MUST-B1). The text is now "…The author says that every summer Grandma Bea grew tomatoes behind her house, so the reader can tell that {1}."<br>Options:<br>• "the garden matters to her, so losing the tomatoes is a real problem" (key)<br>• "her tomatoes always grow well, so nothing can go wrong this year"<br>• "Grandma Bea sells her tomatoes at a market every summer"<br>Blank 1 is unchanged |
| 1.b | **Together P5** | The Solution row "wire bent along the bottom of the gate" became "Jada blocks the space under the gate.", so it no longer copies P4's step 3 (NOTE-1) |
| 1.d | **P4 (ref, practice item)** | Part B (MUST-D1): "The first big snow of the year covered Pine Hill in Vermont." became "The next morning, he filled a basket and carried it down the road." Each story now has two Part B choices.<br>Part A (found by my own ladder check, below): "Playing outside is more fun in the winter." became "Keeping your things for yourself keeps you happy." |
| 1.d | **S03** | The distractor "Little sisters should never touch your drawings." became "Sharing your things keeps people from getting upset." (SHOULD-D1) |

**Why P4 does not use the reviewer's mango sentence.** I first put in the reviewer's sentence, "He gave a mango to every child he met." I then took it out. It is the answer to 1.d C03, blank 1 ("giving a mango to every child he meets"), and C03 comes later in set 1, so P4 would have shown the child C03's answer. P4 uses Kofi's other turning-point sentence instead. C03 is back to its earlier text, so it has no net change.

That sentence ("The next morning, he filled a basket…") is also C04's Part B key. P4's `how` never mentions time, so it does not answer C04's question about how long the stories last.

### 10.3 Hint, clue, how and why changes

| Lesson | Item | Change |
|---|---|---|
| 1.a | Together P1 | `clue` and h1: "Ask what the describing words in paragraph 1 help you picture." h2: "Read paragraph 1 again, and list everything that happens there." The `why` and `how` explain the TV distractor |
| 1.a | Together P2 | `clue` (practice field) and h1: "The writer does not say how Mateo feels. Look for sentences that show a feeling without naming it." h2: "Read paragraphs 1, 2 and 5." h3 rules out "The whole room went dark", which is in h2's range (MUST-A2) |
| 1.a | C10 | h2: "Reread paragraphs 4 to 6." The `how` and `why` explain the new distractor: no third note is ever found |
| 1.b | C03 | `clue` and h1: "Details at the start of a story set things up. Ask who the story follows, and what the first paragraph tells you about the people in it." h3 rules out "nothing can go wrong". The `how`, `why` and misconception are rewritten |
| 1.b | C04 | `clue` and h1: "Characters do different jobs in a plot. Ask who has the problem, and what each person does about it." (SHOULD-B1) |
| 1.b | S01 | `clue` and h1: "Authors add a character for a reason. Ask what job this character does in the story." Added a misconception line: "A common mix-up is thinking that whoever finishes the job is the main character." (SHOULD-B2) |
| 1.b | Together P5 | The `why` and `how4` follow the new Solution row |
| 1.d | P4 | `how4` and `why` explain both turning-point sentences and the backward "keeping things" lesson |
| 1.d | C14 | h2: "Reread the middle and the end of each story. What changes for each child?" h3 now rules out Kim (the goat wins), not Jalen (MUST-D2) |
| 1.d | S03 | The `how` and `why` explain the "sharing" distractor |

### 10.4 Whole-ladder check, hint by hint

**The rule.** A choice counts as live only if a child who has read the `clue` and h1 to h3 still has a real reason to pick it. In every changed item, the `clue` is the same as h1.

**3.T.T.1.a**

**Together P1.** Choices: storm (key), bored, Abuela cooking, TV broken.
- After h1 (describing words): all four.
- After h2 (list everything that happens in ¶1): Abuela cooking is out, because she is not in ¶1. Storm, bored and TV broken remain.
- After h3: bored is out.
- **Live: storm and TV broken.** The screen does go black, so a child who misreads why has a reason to pick "TV broken".

**Together P2.**
- *Part B* choices: two keys, room dark, tapping, singing.
  - After h1 (shows a feeling without naming it): room dark is weak, because it shows no feeling.
  - After h2 (¶1, 2, 5): all five are in range.
  - After h3: room dark is out.
  - **Live: the two keys, tapping and singing.** A child who reads Part A as "excited" has a reason to pick tapping or singing. Telling the times apart is what the item tests, and no hint does it for the child.
- *Part A*: **live: scared and excited.**

**C10.** Choices: key (who wrote the notes), wears every day, hiding, where the next note is.
- After h1 (how the detail moves the story): "wears every day" is out.
- After h2 (¶4–6): no change.
- After h3: hiding is out.
- **Live: "who wrote the notes" and "where the next note is".** Both are plot functions. The child has to see in ¶6 that Nadia asks a person.

**3.T.T.1.b**

**C03.**
- *Blank 1:* h1 and h2 ("who the story follows") settle it. That is the one blank allowed.
- *Blank 2* choices: key, "nothing can go wrong", "sells at a market".
  - After h3: "nothing can go wrong" is out.
  - **Live: the key and "sells at a market".** "Every summer" invites the selling misreading, and nothing in Together or set 1 rules it out.
- *Against Together and earlier set 1 items:*
  - P1 says the garden is behind her house, which does not rule out selling.
  - P2 says the rabbits are the problem. It does not say why the problem matters.
  - P3, P6, P5, P7 and P4 say nothing about Grandma Bea's feelings or about selling.
  - Neither blank 2 answer is pre-answered.

**C04.** Choices: helper (key), main character, caused it, has the problem.
- After h1 (who has the problem): "has the problem" is out, because the problem is Ms. Lin's.
- After h3: "caused it" is out.
- **Live: helper and main character.** The main character choice is the named misconception.

**S01.** Choices: key, messy park, main character, filled the bag.
- After h1 (what job this character does): no change.
- After h3: messy park is out.
- **Live: the key and main character.** "Filled the bag" is weak but not ruled out.

**3.T.T.1.d**

**P4.**
- *Part A* choices: key, "new things safe and clean", "too much fruit makes you sick", "keeping your things keeps you happy".
  - After h1 (must fit both stories): "safe and clean" is out, because it fits only Lucy.
  - After h3: fruit is out.
  - **Live: the key and "keeping your things".** Both characters start out keeping their things, so on the surface it fits both.
- *Part B*:
  - After h2 (the moment each character changes): the basket and the sled-pulling sentences are in range, and both keys stay in play.
  - After h3: rope is out.
  - **Live: two per story.** Kofi: the key and the basket. Lucy: the key and the sled-pulling.

**C14.** Choices: Tomás (key), Lena, Jalen, Kim.
- After h1 (say the lesson): no change.
- After h2 (what changes for each child): Lena is out, because nothing changes in a weekly routine.
- After h3: Kim is out.
- **Live: Tomás and Jalen.** Jalen's move is a big change, so it tempts.

**S03.** Choices: key, soccer, sharing, stay away.
- After h1 (fits both): no change.
- After h2 (how they get along at the start and the end): "stay away" is out, because they get along again.
- After h3: soccer is out.
- **Live: the key and sharing.** Each story starts with a quarrel over a thing (a ball, a drawing).

### 10.5 Together and earlier set items against each core answer

**1.a set 1** (P4, P5, C03, C04, C05) against Together P1–P3:
- Together P1 no longer uses the word "description", so it does not label P4's Description row.
- Together P3 asks about Abuela's words "So we will just make our own". That line is P4's Dialogue row, but it is in quotation marks either way. Weak overlap, left as it is.
- Nothing in Together answers P5, C03, C04 or C05.

**1.b set 1** (P7, P4, C03, C04, C05) against Together P1, P2, P6, P3 and P5:
- C03: see 10.4.
- P4 is rehearsed by Together's `how` steps, but the order itself is not given (the re-review keeps this a NOTE). The Solution row no longer copies P4's step.
- P7's `why` ("Jada makes something that blocks the gate all night long") and P3's `why` both state the conclusion that C05's footprint sentence proves. They do not say that this sentence is the proof, which is the step C05 tests. Accepted as in the re-review, NOTE-2.

**1.d set 1** (P4, P5, C03, C04, C05) against Together P1–P3:
- Together P1 and P3 cue P4's sharing lesson without answering it (re-review NOTE-1).
- P3's rows no longer answer P5.
- Within the set, P4's Part B now shows the basket sentence, which is C04's Part B key. P4 does not say anything about time, so C04's question is not answered.
- P4 no longer shows C03's answer (10.2).

### 10.6 Gates

- `node verification/check-content.js --all`: PASS, 0 failures. In my lessons, the only warnings are similar coverage and the two older ones (SK-TT1a-T5, SK-TT1d-P1). The core items with no similar item are:
  - 1.a: 8
  - 1.b: 10
  - 1.d: 8
- `python3 verification/readability.py`: no passage text changed in this round.
- Scratch audit (`scratchpad/b1a/audit.js`): 0 problems. Core points are 1.a 22, 1.b 23 and 1.d 24, with no DOK 1 items.
- No git was run. I have not reviewed my own work.
