# B2 author log (b2d): 3.T.SS.1.a and 3.T.C.1.b

**Role:** content author b2d, batch B2. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before they read this log.

This log describes the lessons **as they stand after the fixes for B2-review-SC-1 and B2-review-SC-2**. The fixes are listed in §5, and the items that need a fresh blind solve are listed in §6.

**Files changed:**
- `js/data/lessons/T-SS.js`, in the 3.T.SS.1.a block only:
  - `teach.points` 1, 4 and 6 extended (still six points);
  - one new `teach.words` entry (chapter);
  - new passages p3 and p4;
  - `core`, `similar` and `addons`.
- `js/data/lessons/T-C.js`, in the 3.T.C.1.b block only:
  - `teach.points` 1, 5 and 7 extended (still seven points);
  - new passages p3 and p4;
  - one sentence of existing passage p1 shortened (§5.2);
  - Together item SK-TC1b-P4: its three distractors and its `why` (weak item);
  - the `why` of P5, so that it quotes the shortened p1 sentence;
  - `core`, `similar` and `addons`.
- New original figures in `assets/figures/`:
  - `ss1a-c-bookmobile-map.svg`, `ss1a-c-bat-parts.svg`, `ss1a-c-bat-lathe.svg`;
  - `tc1b-c-water-tower.svg`, `tc1b-c-water-webpage.svg`, `tc1b-c-pool-lanes.svg`.
- `ss1a-c-peanut-harvest.svg`, from the first round, was deleted.

Nothing in `test`, `learn`, `clues` or `coach` changed. No existing id changed. Neither lesson has a form B.

**Split decision (lead, after review):** every item stays in these two lessons for now. Nothing was reorganised around a move list.

**Teach limits.** Both lessons were already over the "at most 5 teach points" limit before B2 (SS1a has 6, TC1b has 7). I added no points and no Watch Me examples. I only extended existing points where an item needed modelling.

## 0. Gates (final run, after the fixes)

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. In my lessons the only warning left is "11 of 15 core items have no similar item", the same kind of warning every core lesson has |
| `python3 verification/readability.py` | SS1a p3: 203 words, FK 4.3. SS1a p4: 144 words, FK 4.1. TC1b p3: 107 words, FK 4.5. TC1b p4: 132 words, FK 3.8. None is flagged |
| `check-writing.js` | 0 failures, 0 warnings |
| `check-instructional-copy.js` | 28 assertions passed |
| Six-word n-gram scan | Scope: all new and changed text, against every other lesson, set and task, plus my lessons' tests, Learn It and Teach. Hits are shared directions and alt-text style only. Further searches by hand found no other use of the new facts (beaver underwater time, the recycled-can energy fact) |
| Browser smoke test, port 8754, widths 390 and 1366 | Practice Together = SS1a P1-P4 and TC1b P1, P8, P9, P10, P4. All thirty core items in `:y`, `:y2` and `:y3` check right with their key, and all three hints show. No page error and no sideways scroll. New and changed figures were rendered and looked at |

## 1. 3.T.SS.1.a "How a text is put together: sections, patterns and features"

**Official wording** (p. 29): "Describe how texts are arranged to represent information and ideas using text features (e.g., map, captions) and organizational structures (e.g., cause/effect), referring to parts of texts using terms such as chapter or section."

**Components:**
- **F:** text features (heading, map, caption, text box, diagram)
- **T:** the terms chapter and section
- **S:** structures (sequence, cause/effect, compare, problem/solution, description)
- **W:** how a whole text or its sections are arranged. This is the hardest component, and it appears in every set.

### 1.1 Reuse
- P5, P6 and P7 are reused as `{ref}` in set 1, with addons.
- P1 to P4 stay in Practice Together, with addons.
- No weak items were flagged for this lesson.

### 1.2 Passages and figures (never used by test)

| Id | Title | Domain | Sections | Figure | Used by |
|---|---|---|---|---|---|
| p3 | The Library on Wheels | community | problem/solution, description, compare, **cause/effect ("What Changed")**, box | Figure 1, map of made-up Pine County with key and 5-mile scale, **no caption on purpose** (C07 asks for one) | set 2: C06, C07, C08, C10 |
| p4 | How a Wooden Bat Is Made | sports | compare, sequence, box | Figure 1, bat parts (knob, handle, barrel) | set 3: C11, C12, C13 |

Item figure: `ss1a-c-bat-lathe.svg` (a billet spinning against a blade, with shavings), for C11.

### 1.3 The fifteen

| # | Id | Set | Component | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P5 (ref) | 1 | F box | explain | mc | 1 | 2 | p1 | Why the box is there |
| 2 | P6 (ref) | 1 | F map | explain | mc | 1 | 2 | p1 + map | Map shows what the words lack |
| 3 | P7 (ref) | 1 | T chapter | identify | mc | 1 | 1 | sea-turtle table of contents | Chapter-level locate |
| 4 | C04 | 1 | W whole-text arrangement | explain/analyse | mc | 1 | 3 | p1 | Matches the intro's plan to the order of the headings |
| 5 | C05 | 1 | W/S section order | construct | dropdown, 2 slots | 2 | 2 | p1 | Why one section follows another |
| 6 | C06 | 2 | S (incl. cause/effect) | identify | match, 4 rows, 5 columns | 2 | 2 | p3 | Four sections, four patterns, one unused |
| 7 | C07 | 2 | F caption | edit (choose a caption) | dropdown, 1 slot | 1 | 2 | p3 + map | Caption for the whole map |
| 8 | C08 | 2 | F map + T section | use evidence | ebsr (Part B: a map part) | 2 | 2 | p3 + map | The scale bar as evidence |
| 9 | C09 | 2 | S (incl. cause/effect) | compare | ms, choose two | 2 | 2 | two short texts (school) | Two texts, two patterns |
| 10 | C10 | 2 | T chapter vs section | identify | ms, choose two | 2 | 2 | p3 as Chapter 4 | Part-whole use of the terms |
| 11 | C11 | 3 | F drawing + T section | edit (place a figure) | dropdown, 1 slot | 1 | 2 | p4 + lathe drawing | Places a picture in a section |
| 12 | C12 | 3 | W why time order | explain | mc | 1 | 3 | p4 | The author's reason for a structure |
| 13 | C13 | 3 | F diagram | use evidence | hottext | 1 | 2 | p4 + bat diagram | Diagram to the sentence it pictures |
| 14 | C14 | 3 | S problem/solution with time words | transfer | mc | 1 | 2 | lost jackets (school) | The `coach.mixup` case |
| 15 | C15 | 3 | T chapter + section | transfer/locate | dropdown, 2 slots | 2 | 2 | camping table of contents (family) | Nested chapters and sections |

**Tallies:**
- Points: 21.
- Formats: mc 6, dropdown 4, ms 2, match 1, ebsr 1, hottext 1. That is six formats, nine of them technology-enhanced.
- DOK: level 1 on one item (P7), level 2 on twelve, level 3 on two (C04, C12).
- Verbs:
  - identify: P7, C06, C10
  - explain: P5, P6, C04, C12
  - use evidence: C08, C13
  - edit: C07, C11
  - construct: C05
  - compare: C09
  - transfer: C14, C15
- Domains: science/farming 4, community 4, sports 3, school 2, nature 1, family 1.
- The official examples:
  - map: P6, C08
  - caption: C07
  - cause/effect: C06 row, C09
  - chapter/section: P7, C10, C15, plus section names throughout

**Similar bank:**

| Id | Mirrors | Context |
|---|---|---|
| S01 | C05 | tomato headings |
| S02 | C06, C14 | lunch paragraph |
| S03 | P6 | zoo map |

## 2. 3.T.C.1.b "Text features: headings, bold words, text boxes and diagrams"

**Official wording** (p. 26): "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."

**Components:**
- **Pr:** print
- **Vi:** visual
- **Di:** digital
- **Au:** auditory or spoken
- **E:** purpose and effect. It appears in every set.

### 2.1 Reuse and weak item
- **Refs.** P5 and P4 are reused as `{ref}` in set 1, with addons. P5 stays a ref, as the lead asked.
- **P4 (weak: implausible distractors).** I revised it in place: its new distractors are feature mix-ups, and its key and clue are unchanged. In the second round it took P6's core slot (§5.4).
- **P6** is no longer in core, because its prompt gives away its own speaker row. It is unchanged in `practice` and now sits in Practice Together.
- **Together** is P1, P8, P9, P10 and P6 (five items, within the 2-5 rule).

### 2.2 Passages and figures (never used by test)

| Id | Title | Domain | Notes | Figure | Used by |
|---|---|---|---|---|---|
| p3 | How a Water Tower Works | community/science | No bold word on purpose (C06 asks which word to bold) | Figure 1, diagram with arrows 1-3, no caption on purpose (C07 asks for one) | set 2: C06, C07, C08 |
| p4 | Reading a Swimming Pool | sports | The starting-blocks sentence now opens the passage, outside the "helpers in the water" | Figure 1, pool with lane line, line on the bottom with T, and backstroke flags; no starting blocks | set 3: C11, C12 |

Item figure: `tc1b-c-water-webpage.svg` (tabs, search, heading, video with play button and caption line, link), for C09 and C10.

### 2.3 The fifteen

| # | Id | Set | Component | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P5 (ref) | 1 | Vi | use evidence | hottext, two | 2 | 2 | p1 + lodge diagram | Labels to sentences |
| 2 | P4 (ref, revised weak item) | 1 | Pr bold + glossary + E | explain | mc | 1 | 2 | p1 | The only glossary item |
| 3 | C03 | 1 | Pr box + E | apply | mc | 1 | 2 | p1 | Which new fact belongs in the box |
| 4 | C04 | 1 | Pr heading + E | explain | ms, two | 2 | 2 | p1 | A heading's topic and its effect |
| 5 | C05 | 1 | Au spoken + E | construct/transfer | mc | 1 | 3 | Andre reads p1 to his class | Spoken stand-in for a heading |
| 6 | C06 | 2 | Pr bold + E | edit (choose the word to bold) | mc | 1 | 2 | p3 | Bold the section's key word |
| 7 | C07 | 2 | Vi caption + E | edit (add a caption) | dropdown, 1 slot | 1 | 2 | p3 + diagram | Caption for the whole diagram |
| 8 | C08 | 2 | Vi numbered arrows | construct | order, 4 steps | 2 | 2 | p3 + diagram | Order from arrows and text |
| 9 | C09 | 2 | Di video + E | compare (video vs print) | ms, two | 2 | 2 | web page figure | What the video adds |
| 10 | C10 | 2 | Au caption line | construct | dropdown, 1 slot | 1 | 2 | web page figure | Write a sound line for a new sound |
| 11 | C11 | 3 | Vi diagram vs text | use evidence | hottext | 1 | 2 | p4 + pool | Sentence naming a part not shown |
| 12 | C12 | 3 | Vi + E | compare (diagram vs photo) | mc | 1 | 3 | p4 + pool | Why a labeled diagram beats a photo |
| 13 | C13 | 3 | Di vs Pr | compare/transfer | ms, two | 2 | 2 | school newsletter | Web-only features |
| 14 | C14 | 3 | Au spoken + E | transfer | ms, two | 2 | 2 | Kiara's talk (school) | Spoken signals that help listeners keep track of parts |
| 15 | C15 | 3 | Au podcast sound + E | transfer/explain | mc | 1 | 2 | basketball podcast (sports) | Effect of an added sound |

**Tallies:**
- Points: 21.
- Formats: mc 6, ms 4, dropdown 2, hottext 2, order 1. That is five formats, nine of them technology-enhanced. The order item has four steps and is worth 2.
- DOK: level 2 on thirteen items, level 3 on two (C05, C12).
- Modes:
  - print: P4, C03, C04, C06, C13
  - visual: P5, C07, C08, C11, C12
  - digital: C09, C13
  - auditory/spoken: C05, C10, C14, C15

**Similar bank:**

| Id | Mirrors | Context |
|---|---|---|
| S01 | C03 | which train fact fits the box |
| S02 | C09 | the zoo video |
| S03 | C05, C14 | Omar signals a new part of his spider report |

## 3. Earlier claim corrected

My first log said that the original peanut-plant diagram collided with an item in "3.T.T.2.a". That was wrong: the item is **SK-TT2d-P6, in 3.T.T.2.d**.

I also claimed that the harvest drawing I swapped in fixed the collision. It did not. That drawing had the same key fact as **SK-TC1c-P2** in 3.T.C.1.c (peanut plants upside down, drying = harvest), and Together P3 pre-taught it. Both peanut drawings are now gone (§5.1).

## 4. Hint and leakage notes

- **Whole ladders.** I read every core and similar item's clue and three hints together, against its choices. I reworked TC1b C03, S01 and S02 and SS1a S01, where the ladder taken together left only the key (§5).
- **Hint 2 naming a place.** Every hint 2 that names a section names one that the prompt already names, or one that also holds wrong choices.
- **EBSR SS1a C08.** Its Part B choices are all parts of the map, and no hint names a text place.
- **Hint 3 settles at most one blank, row or step.**
  - SS1a C08 hint 3 settles Part B: it says which part of the map measures distance.
  - TC1b C08 hint 3 settles the last step.
  - TC1b P6 hint 3 settles the heading row.
- **Order inside sets.** No earlier `how` or `why` states a later item's answer in the same set:
  - SS1a set 1: C04's `how` does not state C05's order.
  - TC1b set 2: C07's new key does not state the order, and C08 is the order item.
  - TC1b set 3: the hot-text item now comes before the diagram-vs-photo item.
- **Together and set 1.** No Together item shares a row or an answer with a set 1 core item:
  - SS1a: C04 is now a whole-text arrangement item, so P3 no longer pre-teaches it.
  - TC1b: C05 is now a student in class, not a ranger.

## 5. Fixes after B2 review

### 5.1 3.T.SS.1.a

| Finding | Fix made |
|---|---|
| SC-2 SS-MUST-1 and SC-1 SHOULD-1 / NOTE-6 (C04 collides with SK-TC1c-P2; Together P3 pre-answers it) | The picture-placement task moved to the bat passage as **C11**, with a new drawing `ss1a-c-bat-lathe.svg` (key "From Tree to Bat", distractor "Wood or Metal?"). Set 1 has a new **C04**: describe how the sections carry out the plan in the first paragraph (DOK 3). `ss1a-c-peanut-harvest.svg` is deleted |
| SC-1 MUST-1 and SC-2 SS-SHOULD-7 (C07 Part B answerable without the map; it echoed Part A) | Redesigned as reviewer 1 proposed. It is now **C08**, and Part B asks which part of the map supports Part A: scale bar (key), north arrow, dashed route lines, county name. Part A has a new map-misreading distractor ("all the stops are inside the town of Millbrook") in place of "how many books" |
| SC-2 SS-MUST-2 (C07 hint 2 gives the Part A key) | Hint 2 is now "Use the key to find what each mark on the map stands for." Hint 3 settles Part B only |
| SC-2 SS-MUST-3 (C08 hint 2 states the key) | The rug-placement item is gone. Its slot became the caption item **C07**, whose hint 2 is "Use the key to find what each mark on the map stands for. Then look at the whole map, not just one mark." |
| SC-2 SS-MUST-4 and SC-1 SHOULD-8 (S03 hints) | Hint 1: "Each feature has its own job. Think about what Jamal wants his readers to be able to do." Hint 2: "Read Jamal's goal again. Then read each choice and ask what it would add to his report." S03 `like` is now P6 only |
| SC-1 SHOULD-2 and SC-2 SS-SHOULD-9 (DOK 3 inflated) | C05 and C14 (the lost-jackets item, formerly C13) are relabelled DOK 2. The two DOK 3 items are the new C04 (whole-text arrangement) and C12 (why time order, formerly C11) |
| SC-1 SHOULD-3 and SC-2 SS-SHOULD-8 (cause/effect and captions thin) | p3 has a new cause/effect section, "What Changed" (since, because, as a result). C06 now has that row, so cause/effect appears in C06 and C09. Captions have a full item, C07 (choose the map's caption; I removed the caption from p3's figure) |
| SC-2 SS-SHOULD-1 (P6 addon hint 1) | "Look at the map and then at the words. Ask what each one tells you." |
| SC-2 SS-SHOULD-2 (C05 hint 2 echoes the key) | The slot 2 key is now "the order things happen". Hint 2 is "Read the first sentence under each heading." Hint 1 no longer says "happen" |
| SC-2 SS-SHOULD-3 (C06 hint 2 names description) | "…If a section has few clue words, ask what the whole section is doing." |
| SC-2 SS-SHOULD-4 (C06 `how` pre-answers the rug item) | C06's `how` now says only "gives details about one thing, the bus", and the rug item is gone |
| SC-2 SS-SHOULD-5 (C11 distractors) | Now **C12**. All four choices are parallel ("Each step…"). The key is "Each step needs the one before it, like drying before shaping." The tree-growing distractor is gone. Hint 2 now compares the clue words of the two sections |
| SC-2 SS-SHOULD-6 (C14 echo; hint 2 settles a slot) | Now **C15**. The stem says "so that wild animals cannot get them at night", and hint 2 is "Read every section title, not only the chapter titles." |
| SC-2 SS-SHOULD-10 (frames duplicated in 3.T.C.1.b) | Part done. Old C15 (match a feature to its job, the same frame as TC1b P6) is removed. TC1b's box items now ask which fact fits a box, not why a fact is in one, so they no longer share P5's frame. C13 (which sentence a diagram pictures) still shares its frame with TC1b P5. I left it, because the bat diagram has no other item |
| SC-2 NOTE (Together P4 hint 2 settles two rows) | "Start with one set of words you are sure about. Then do the others." |
| SC-1 NOTE-7 (C12, now C13, hint 3 near-restates the key) | Hint 3 now ends "Check the other sentences the same way." |
| SC-1 NOTE-8 (fact: "break dozens of bats") | The box now says "can use dozens of wooden bats in one season". |

### 5.2 3.T.C.1.b

| Finding | Fix made |
|---|---|
| SC-1 MUST-3 (C04 hint 1 states the key) | Hint 1: "A heading is a small title over a section. Think about the jobs a heading can do for a reader." Key 2 is now "It makes the reader want to find out the secret." (SC-1 NOTE-2). Two distractors are new: "names the animals that share the pond", replacing P6's row wording, and "tells the order of the steps in the section" |
| SC-2 TC-MUST-1, TC-SHOULD-3 and TC-SHOULD-4 (C05 hint 2; ranger setting shared with P9; weak distractors) | The setting is now Andre reading to his class. Hint 2: "Think about what job a heading does on the page. Then picture the classmates listening to each choice." The new spoken-but-wrong distractor is "Say, 'A lodge is a beaver's home,' one more time." It replaces "read faster" |
| SC-1 MUST-2 (C06 hint 3 test leaves only the key) | Hint 1 is trimmed to "…names the big idea of its section." Hint 3 now rules out only pipe, for a reason that does not apply to the other words (it appears once, as the water's path) |
| SC-2 TC-MUST-2 and SC-1 SHOULD-8 (S02 hints) | Hint 1: "…Ask what Ty wants to do." Hint 2: "Read Ty's goal again. Then read each choice and picture what would happen." S02 `like` is now C09 only (SC-2 TC-SHOULD-5) |
| SC-1 SHOULD-8 (S03 hint 1) | Hint 1: "Think about how Omar's classmates will take in his report." Hint 2: "…will the listeners notice it?" |
| SC-2 TC-MUST-3 (C11/C12 conflict and giveaway) | The starting-blocks sentence now opens p4 ("Before a race, swimmers stand on raised platforms called starting blocks."), followed by "Once they dive in, the pool itself is full of helpers." The diagram-vs-photo key is now "Its labels name each helper in the water…". The two items swapped order: the hot-text item is now **C11** (target p4:1:1) and diagram-vs-photo is **C12** |
| SC-1 SHOULD-4 (P6 pre-answers C03) | C03 is redesigned as reviewer 1 proposed: "Which fact would fit best in the box instead of in a section?" The key is a new extra fact (beaver underwater about fifteen minutes). The distractors are facts that "Busy Builders", the lodge section and "Tail Talk" each need. P6's definition does not answer it. Relabelled DOK 2. S01 was rewritten to match (which recycling fact fits the box) |
| SC-2 TC-SHOULD-1 (C09/C10 copy the frames of form A T8/T9) | Both replaced. **C09** asks which TWO things the video can do that print cannot (ms). **C10** asks which line the caption line should show for a new pump sound when nobody is talking (dropdown: "[pump humming]", "NARRATOR: The pump hums.", "PUMP: Hummm!"). Neither asks what a caption line tells or which feature leads where |
| SC-2 TC-SHOULD-6 (C09 rows matched by words) | Moot: that match item is gone |
| SC-1 SHOULD-7 (C10 hint 1 restates both keys) | Moot: the new C10's hint 1 refers to Teach without stating either rule |
| SC-2 TC-SHOULD-2 (p1 lodge sentence gives away TS-CE form A T2/T5) | p1 now says "Its doors are under the water." The "so foxes and other hunters cannot easily get inside" clause is gone. P5's `why` and its addon `how` quote the new sentence. P5 stays a ref |
| SC-1 SHOULD-5 (C15 effect rule not taught) | Teach point 7 now ends "sounds and music can signal a change, or make listeners feel excited or calm." |
| SC-1 SHOULD-6 (C07 key does not cover the whole diagram) | The key is "How a water tower gets water to a home". I did not use reviewer 1's "up a tower and down to a home", because it would state the order that C08 asks for |
| SC-2 NOTE (C14 DOK) | Relabelled DOK 2 |
| SC-1 NOTE-5 (water-tower circle 2 overlaps the leg) | Circle 2 moved beside the down pipe, clear of the leg |

### 5.3 Findings not addressed, and why
- **SC-1 NOTE-5, cosmetic.** The north arrow on the Pine County map still touches the county's clipped corner. Fixing it needs the map redrawn, and it does not affect any answer.
- **SC-1 NOTE-3 and SC-2 NOTE: P6's own prompt gives away its speaker row.** P6 is a pre-existing ref. Changing it needs a new id, and the lead deferred the split.
- **SC-2 TC-SHOULD-2, second half: "Busy Builders" walks through TS-CE T1's sticks → dam → pond chain.** The lead's instruction covered only the lodge sentence. That section predates B2 and is the base of Together P1 and P8, so I left it for the lead.
- **SC-2 NOTE: SS1a teach point 6 is heavy (seven sentences).** Unchanged. Trimming it is better done when the code is split.
- **SC-2 SS-SHOULD-10, remainder: SS1a C13 and TC1b P5 share a frame.** See §5.1.
- **Split cautions** (SC-2 §5): recorded for the lead. Nothing was moved.

## 6. Needs blind re-solve

These items changed their choices, keys, stem, passage or figure:

- **3.T.SS.1.a**
  - SK-SS1a-C04 (new item)
  - SK-SS1a-C05 (slot 2 key)
  - SK-SS1a-C06 (new row and column; p3 changed)
  - SK-SS1a-C07 (new caption item; p3's figure caption removed)
  - SK-SS1a-C08 (formerly C07: new Part A distractor; Part B replaced)
  - SK-SS1a-C10 (its passage p3 changed)
  - SK-SS1a-C11 (new lathe item and figure)
  - SK-SS1a-C12 (formerly C11: all choices rewritten)
  - SK-SS1a-C13 (formerly C12: p4's box sentence changed)
  - SK-SS1a-C15 (formerly C14: the stem changed)
- **3.T.C.1.b**
  - SK-TC1b-P5 (ref: p1 sentence shortened)
  - SK-TC1b-C03 (new item)
  - SK-TC1b-C04 (a key and two distractors changed)
  - SK-TC1b-C05 (stem and one distractor changed)
  - SK-TC1b-C07 (key changed)
  - SK-TC1b-C08 (figure changed: circle 2 moved)
  - SK-TC1b-C09 (new item)
  - SK-TC1b-C10 (new item)
  - SK-TC1b-C11 (formerly C12: p4 changed, target is now p4:1:1)
  - SK-TC1b-C12 (formerly C11: key changed, p4 changed)
  - SK-TC1b-S01 (new item)

Changed in their hints only (a ladder re-check is enough):
- SS1a: S01, S03, and the P4 and P6 addons
- TC1b: C06, S02, S03

Unchanged: SS1a C09, C14 (formerly C13; DOK label only), S02 (`like` only); TC1b C13, C14 (DOK label only), C15.
