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
| 1.b | p4 | The Hidden Peach Stand | 178 / 2.2 | community / farm (Fort Valley, GA) | C11, C12, C14, C15 |
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
| 10 | SK-TT1b-C10 | 2 | SEQ | construct (order) | order | 1 | 2 | p3 | orders the try and the steps of the solution. Steps must follow from each other (cube in sock before shade) |
| 11 | SK-TT1b-C11 | 3 | SET → PROB, and why it matters | construct | dropdown | 2 | 2 | p4 ¶2, ¶4 | the setting causes the failure, and the stakes (the peaches will spoil) |
| 12 | SK-TT1b-C12 | 3 | SOL (fully solved) | evidence | hottext | 1 | 3 | p4 ¶5–7 | told apart from partial progress (the first truck) |
| 13 | SK-TT1b-C13 | 3 | SET → PROB | transfer (apply) | match | 2 | 2 | three new stems | each new setting matched to the problem it causes, one to one |
| 14 | SK-TT1b-C14 | 3 | SOL across stories | compare | mc | 1 | 3 | p3 + p4 | both children find the cause and then fix it |
| 15 | SK-TT1b-C15 | 3 | SOL logic | transfer | mc | 1 | 3 | p4 + four situations | the same reason it works (being seen). One distractor shares only a thing (a sign) |

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
