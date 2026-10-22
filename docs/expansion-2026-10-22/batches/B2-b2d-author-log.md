# B2 author log (b2d): 3.T.SS.1.a and 3.T.C.1.b

**Role:** content author b2d, batch B2. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before they read this log.

**Files changed:**
- `js/data/lessons/T-SS.js`, in the 3.T.SS.1.a block only: `teach.points` (1, 4 and 6 extended, still six points), one new `teach.words` entry (chapter), passages p3 and p4, `core`, `similar` and `addons`.
- `js/data/lessons/T-C.js`, in the 3.T.C.1.b block only: `teach.points` (1, 5 and 7 extended, still seven points), passages p3 and p4, the three distractors and the `why` of Together item SK-TC1b-P4 (weak item), `core`, `similar` and `addons`.
- New original figures in `assets/figures/`: `ss1a-c-peanut-harvest.svg`, `ss1a-c-bookmobile-map.svg`, `ss1a-c-bat-parts.svg`, `tc1b-c-water-tower.svg`, `tc1b-c-water-webpage.svg`, `tc1b-c-pool-lanes.svg`.

Nothing in `test`, `learn`, `clues` or `coach` changed. No existing id changed. Neither lesson has a form B. No new component lesson was created (lead instruction); §3 lists what would move.

**Teach limits.** Both lessons were already over the "at most 5 teach points" limit before B2 (SS1a has 6, TC1b has 7). I added no points and no Watch Me examples. I only extended existing points with one or two sentences where an item needed modelling (see §1.4 and §2.4).

## 0. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. My lessons show only the "core items with no similar item" warning that every core lesson has (10 of 15 uncovered in each) |
| `python3 verification/readability.py` | SS1a p3 169 words FK 4.1, p4 144 words FK 4.1. TC1b p3 107 words FK 4.5, p4 130 words FK 3.6. None flagged. (The flagged "3.T.SS.1.a p4 FK 4.7" row in the output is a TS-* lesson that shares the code, not this lesson) |
| `check-writing.js`, `check-instructional-copy.js` | 0 failures, 0 warnings; 28 assertions passed |
| Six-word n-gram scan of all my new text (passages, core, similar, addons) against every other lesson, set and task, plus my own lessons' test, Learn It and Teach | No content matches. Hits are shared directions ("This question has two parts…", "A common mix-up is…"), my own figure alt-text style, my own lesson's Teach wording, and quotes of my lessons' existing p1 passages. One real collision was found and fixed: my first set 1 diagram was a peanut plant labeled flower and peg, which is the key of an item in 3.T.T.2.a (T-T2.js) and of the Kenji slide item in 3.T.C.1.c. It was replaced by a harvest drawing |
| Topic collisions checked by hand | Avoided: raccoons (TS-PS), fish tank turning green (TS-PS Watch Me), field day (3.T.C.2.c, 3.T.SS.1.d), helmets (W-TASK-02), science night (3.L.V.1/2), peanut-plant diagram (3.T.T.2.a, 3.T.C.1.c), and every form A passage topic (gopher tortoise, monarchs) |
| Browser smoke test, port 8754, widths 390 and 1366 | Both lessons: Practice Together = SS1a P1-P4 and TC1b P1, P8, P9, P10, P4. All thirty core items in `:y`, `:y2`, `:y3` check as right with their key, all three hints show on every item, no page error, no sideways scroll. Figures render legibly at 390 (screenshots looked at) |

## 1. 3.T.SS.1.a "How a text is put together: sections, patterns and features"

**Official wording** (p. 29): "Describe how texts are arranged to represent information and ideas using text features (e.g., map, captions) and organizational structures (e.g., cause/effect), referring to parts of texts using terms such as chapter or section."

**Components used in the table:**
- **F** text features: headings, maps, captions, text boxes, diagrams (would MOVE to the planned features lesson)
- **T** the terms chapter and section, referring to parts (would MOVE)
- **S** organizational structures: sequence, cause/effect, compare, problem/solution, description (STAYS)
- **W** which structure a section or whole text uses, and how sections are arranged (STAYS; the hardest component, in every set)

### 1.1 Reuse decisions

| Item | Decision | Reason |
|---|---|---|
| P5 (text box purpose), P6 (map shows what the words do not), P7 (table of contents) | **Reused** as `{ref}`, set 1 questions 1 to 3, with addons | Marked reusable in 03. P7 is DOK 1, the only DOK 1 item in the fifteen |
| P1 to P4 | Stay in Practice Together (4 items), with addons | — |
| Weak items | None flagged for this lesson | — |

**Together and set 1.** Together P1 (sequence in "From Flower to Peanut") and P3 (what "Harvest Time" is about) are on the same passage as set 1 items C04 and C05. Neither shares a row or an answer with them: C04 asks where a drawing belongs and C05 asks why the sections come in this order. They do support the reading, which is near transfer by design. Reviewers should judge this against the new rule.

### 1.2 New passages (never used by test)

| Id | Title | Domain | Structure | Figure | Used by |
|---|---|---|---|---|---|
| p3 | The Library on Wheels | community | problem/solution, description, compare sections; a box | Figure 1, map of made-up Pine County with key and 5-mile scale (`ss1a-c-bookmobile-map.svg`) | set 2: C06, C07, C08, C10 |
| p4 | How a Wooden Bat Is Made | sports | compare section, sequence section; a box | Figure 1, bat with knob, handle, barrel labels (`ss1a-c-bat-parts.svg`) | set 3: C11, C12 |

Item figure: `ss1a-c-peanut-harvest.svg` (plants upside down on the soil, peanuts in the sun) for C04.

**Fact notes:** big-league players must use wooden bats; metal bats are hollow; wooden bats are cut from ash or maple into billets, dried, turned and shaped, sanded and coated; a wooden bat can crack. Early bookmobiles were horse-drawn wagons. Pine County and Millbrook, Georgia are made up.

### 1.3 The fifteen

| # | Id | Set | Component (move/stay) | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P5 (ref) | 1 | F box (move) | explain | mc | 1 | 2 | p1 | The only text-box item |
| 2 | P6 (ref) | 1 | F map (move) | explain | mc | 1 | 2 | p1 + map | Map adds what words lack |
| 3 | P7 (ref) | 1 | T chapter (move) | identify | mc | 1 | 1 | sea turtle table of contents (nature) | Chapter-level locate |
| 4 | C04 | 1 | F diagram + T section (move) | edit (place a figure) | mc | 1 | 2 | p1 + harvest drawing | Places a picture in a section |
| 5 | C05 | 1 | W sections in order (stay) | construct | dropdown, 2 slots | 2 | 3 | p1 | Why one section follows another |
| 6 | C06 | 2 | S + W (stay) | identify | match, 3 rows, 1 unused column | 2 | 2 | p3 | Three sections, three patterns |
| 7 | C07 | 2 | F map + T section (move) | use evidence | ebsr | 2 | 2 | p3 + map | Map with scale explains a section |
| 8 | C08 | 2 | T section + S description (move) | edit (place a sentence) | dropdown, 1 slot | 1 | 2 | p3 | Placement by content, no clue word |
| 9 | C09 | 2 | S + W (stay) | compare | ms, choose two | 2 | 2 | two short texts (school) | Two texts on one topic, two patterns |
| 10 | C10 | 2 | T chapter vs section (move) | identify | ms, choose two | 2 | 2 | p3 as "Chapter 4" | Part-whole use of the two terms |
| 11 | C11 | 3 | W why time order (stay) | explain | mc | 1 | 3 | p4 | Author's reason for a structure |
| 12 | C12 | 3 | F diagram (move) | use evidence | hottext | 1 | 2 | p4 + bat diagram | Diagram to the sentence it pictures |
| 13 | C13 | 3 | S problem/solution with time words (stay) | transfer | mc | 1 | 3 | lost-jackets paragraph (school) | The coach.mixup case: then/after that in a problem text |
| 14 | C14 | 3 | T chapter + section (move) | transfer / locate | dropdown, 2 slots | 2 | 2 | camping table of contents (family) | Nested chapters and sections |
| 15 | C15 | 3 | F heading, map, caption, box (move) | transfer | match, each column once | 2 | 2 | state-park report (nature) | Pick the feature for a job |

**Tallies:**
- **Points:** 22.
- **Formats:** mc 6, dropdown 3, match 2, ms 2, ebsr 1, hottext 1 (six formats; mc at the limit of 6; 9 technology-enhanced).
- **DOK:** level 1: 1 (P7); level 2: 11; level 3: 3 (C05, C11, C13).
- **Verbs:** identify 3 (P7, C06, C10); explain 3 (P5, P6, C11); evidence 2 (C07, C12); edit 2 (C04, C08); construct 1 (C05); compare 1 (C09); transfer 3 (C13, C14, C15).
- **Domains:** science/farming 4 (P5, P6, C04, C05); community 4 (C06, C07, C08, C10); nature 2 (P7, C15); sports 2; school 2 (C09, C13); family 1 (C14).
- **Texts:** p1, p3, p4 and five short stems. p1 carries 4 items.
- **Components:** F 7 items (P5, P6, C04, C07, C12, C15, plus C08 by placement), T 6 (P7, C04, C07, C08, C10, C14), S/W 6 (C05, C06, C09, C11, C13, plus C08). W appears in every set (C05, C06/C09, C11/C13).

### 1.4 Teaching changes (no new points)
- Point 1: "Authors use it when the order matters." (C05, C11)
- Point 4: "Time words like then can show the tries in order, so read the whole paragraph before you decide." (C13; it restates `coach.mixup`)
- Point 6: added diagrams with labels, "whole sections can follow a pattern too", how to place a picture or sentence in a section, and "a chapter can have sections inside it". (C04, C05, C08, C10, C12, C14)
- New word: chapter, "one of the big parts of a book; a chapter can have several sections inside it", so the C10 edge case matches the glossary.

### 1.5 Similar bank

| Id | like | Format, DOK | Text |
|---|---|---|---|
| S01 | C05 | mc, 2 | "Growing Tomatoes" headings (nature) |
| S02 | C06, C13 | mc, 2 | hot lunch vs packed lunch, with a stray then (school) |
| S03 | C15, P6 | mc, 2 | zoo report needs a map (community) |

## 2. 3.T.C.1.b "Text features: headings, bold words, text boxes and diagrams"

**Official wording** (p. 26): "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."

**Components:**
- **Pr** print: heading, bold, text box, glossary (STAYS)
- **Vi** visual: diagram, caption, labels, figure number (STAYS)
- **Di** digital: tabs, search, play button, link (would MOVE to the planned digital/auditory/spoken lesson)
- **Au** auditory/spoken: caption line, [brackets], speaker labels, speaker cues, podcast sounds (would MOVE)
- **E** how a feature serves purpose and effect (STAYS; the hardest component, in every set)

### 2.1 Reuse and weak-item decisions

| Item | Decision | Reason |
|---|---|---|
| P5 (diagram labels to sentences), P6 (match feature to job, incl. speaker's voice) | **Reused** as `{ref}`, set 1 questions 1 and 2, with addons | Marked reusable in 03 |
| **P4 (weak: implausible distractors)** | **Revised in place and kept in Practice Together** | Old distractors (book title, unusual spelling, loud voice) replaced with feature confusions: "a fact set apart in a text box", "the heading of a new section", "names the topic of the whole article". `why` rewritten to rule them out. Key and clue unchanged. Not in core |
| P1, P8, P9, P10 | Stay in Practice Together (with P4: 5 items), with addons | — |

**Together and set 1.** Together P9 (the ranger's "Listen closely") teaches the same idea as P6's speaker's-voice row and sits near C05 (a spoken cue for a new section). P9's key is not the answer to either, but reviewers should check it against the new "Together must not pre-answer set 1" rule.

### 2.2 New passages (never used by test)

| Id | Title | Domain | Features | Figure | Used by |
|---|---|---|---|---|---|
| p3 | How a Water Tower Works | community/science | headings, a box, **no bold on purpose** (C06 asks which word to bold) | Figure 1, labeled diagram with arrows 1-3, **no caption on purpose** (C07 asks for one) (`tc1b-c-water-tower.svg`) | set 2: C06, C07, C08 |
| p4 | Reading a Swimming Pool | sports | headings | Figure 1, pool from above: lane line, line on the bottom with T, backstroke flags; no starting blocks (`tc1b-c-pool-lanes.svg`) | set 3: C11, C12 |

Item figure: `tc1b-c-water-webpage.svg` (tabs, search, heading, video with play button and caption line, link) for C09 and C10.

**Fact notes:** water is often pumped up at night and gravity sends it down to homes; large towers hold over a million gallons. Lane lines keep swimmers in lanes and calm waves; the bottom line ends in a T near the wall; backstroke flags hang about five yards from each wall so backstrokers count strokes.

### 2.3 The fifteen

| # | Id | Set | Component (move/stay) | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P5 (ref) | 1 | Vi + E | use evidence | hottext, two | 2 | 2 | p1 + lodge diagram | Labels to sentences |
| 2 | P6 (ref) | 1 | Pr + Au (speaker row moves) | identify | match | 2 | 2 | none | Feature to job, print and spoken |
| 3 | C03 | 1 | Pr box + E | explain | mc | 1 | 3 | p1 | Why a fact is boxed, not in the section |
| 4 | C04 | 1 | Pr heading + E | explain | ms, two | 2 | 2 | p1 | A heading's topic and its effect (curiosity) |
| 5 | C05 | 1 | Au spoken (move) + E | construct / transfer | mc | 1 | 3 | ranger reads p1 aloud | Spoken stand-in for a heading |
| 6 | C06 | 2 | Pr bold + E | edit (choose the word to bold) | mc | 1 | 2 | p3 | Bold the key word the section explains |
| 7 | C07 | 2 | Vi caption + E | edit (add a caption) | mc | 1 | 2 | p3 + diagram | Caption for the whole diagram |
| 8 | C08 | 2 | Vi numbered arrows | construct | order, 4 steps | 2 | 2 | p3 + diagram | Order from arrows and text |
| 9 | C09 | 2 | Di (move) + E | identify / apply | match, each column once | 2 | 2 | web page figure | Reader goal to web feature |
| 10 | C10 | 2 | Au caption line (move) | explain | ms, two | 2 | 2 | web page figure | Speaker label and the line's purpose |
| 11 | C11 | 3 | Vi diagram + E | compare (diagram vs photo) | mc | 1 | 3 | p4 + pool diagram | Why a labeled diagram beats a photo |
| 12 | C12 | 3 | Vi diagram vs text | use evidence | hottext | 1 | 2 | p4 + pool diagram | Sentence naming a part NOT shown |
| 13 | C13 | 3 | Di vs Pr (move) | compare / transfer | ms, two | 2 | 2 | school newsletter stem | Web-only vs printable features |
| 14 | C14 | 3 | Au spoken (move) + E | transfer / construct | ms, two | 2 | 3 | Kiara's talk (school) | Plan spoken cues for importance; print-in-a-talk distractors |
| 15 | C15 | 3 | Au podcast sound (move) + E | transfer / explain | mc | 1 | 2 | basketball podcast script (sports) | Effect of an added sound |

**Tallies:**
- **Points:** 23.
- **Formats:** mc 6, ms 4, match 2, hottext 2, order 1 (five formats; 9 technology-enhanced). The order item has four steps and is worth 2.
- **DOK:** level 1: 0; level 2: 11; level 3: 4 (C03, C05, C11, C14).
- **Verbs:** identify 2 (P6, C09); explain 4 (C03, C04, C10, C15); evidence 2 (P5, C12); edit 2 (C06, C07); construct 2 (C05, C08); compare 2 (C11, C13); transfer 4 (C05, C13, C14, C15).
- **Domains:** nature 4 (P5, C03, C04, C05); community/science 5 (C06 to C10); sports 3 (C11, C12, C15); school 2 (C13, C14); P6 has no context.
- **Texts:** p1, p3, p4, the web page figure and four short stems. p1 carries 4 items.
- **Components:** Pr 5 (P6, C03, C04, C06, C13), Vi 6 (P5, C07, C08, C11, C12, plus C13), Di 2 (C09, C13), Au 5 (P6, C05, C10, C14, C15), E in every set.

**If the lead declines the split:** the sets are not organized by mode (set 1 print/visual/spoken, set 2 print/visual/digital/caption line, set 3 visual/digital/spoken). Teach example 2 (the frog web page) already models digital features in Learn It, but there is still no digital Watch Me, and the lesson is at the 3-example limit.

### 2.4 Teaching changes (no new points)
- Point 1: "A heading with a fun or surprising word can also make you curious to read on." (C04)
- Point 5: "Labels can point out parts that a photo might hide, and numbers or arrows on a diagram can show an order." (C08, C11)
- Point 7: "To start a new part, a speaker can say what the next part is about, the way a heading does. In a video or a podcast, sounds and music can signal a change, too." (C05, C15; it does not name the drumroll's effect)

### 2.5 Similar bank

| Id | like | Format, DOK | Text |
|---|---|---|---|
| S01 | C03 | mc, 2 | recycling article box |
| S02 | C09, C13 | mc, 2 | zoo web page described in words |
| S03 | C14, C05 | mc, 2 | spider report read aloud, bold "silk" |

## 3. Broad codes: what would move to the planned new lessons

**3.T.SS.1.a → a "text features and chapter/section" lesson.** Move items P5, P6, P7, C04, C07, C08, C10, C12, C14 and C15, and similar S03 (10 core items, 1 similar). What stays as the "which structure is it?" lesson: C05, C06, C09, C11, C13, and S01, S02 (5 core, 2 similar). After the split, 3.T.SS.1.a would need about ten new structure items, and the new lesson would need about five more. Passages p3 and p4 each serve both halves (p3: C06 stays and C07, C08, C10 move; p4: C11 stays and C12 moves), so the figure items could move together with their passage.

**3.T.C.1.b → a "digital, auditory and spoken features" lesson.** Move items C05, C09, C10, C13, C14 and C15, the speaker's-voice row of P6, and similars S02, S03 (6 core items, 2 similar). What stays (print and visual): P5, P6 (or P6 trimmed to its three print rows), C03, C04, C06, C07, C08, C11, C12, and S01 (9 core, 1 similar). The web page figure `tc1b-c-water-webpage.svg` moves with C09 and C10. Together P9 and P10 (spoken and digital) would move too.

## 4. Hint and leakage notes (for reviewers, after the blind solve)

- **Lead rules applied** (B1 reviews, appended to AUTHOR-BRIEF):
  - Every hint 2 that names a section names one that the prompt already names, or one that holds wrong choices too (for example TC1b C06: every choice is in "Down to Your Faucet"; SS1a P2: all three targets are in the section).
  - The EBSR (SS1a C07) hint 2 names no place for Part B.
  - Hint 3 settles at most one row or step: SS1a C15 (caption row), TC1b C09 (play button row), TC1b C08 (last step), TC1b P6 (heading row).
- **Order inside sets, to stop an earlier `how` from answering a later item:**
  - SS1a set 1: the drawing item (C04) comes before the section-order item (C05). C05's `how` no longer describes flower, peg or peanut.
  - TC1b set 2: the caption item (C07) comes before the order item (C08). C07's `how` lists the parts but not the order.
  - C06's distractors and C07 and C08 never use the word gravity outside the passage, so they do not cue C06.
- **Known weak spots:**
  - SS1a C07 Part B is easy once Part A is right, because its three distractors come from other sections. Sentences from the same section ("For them, a trip… most of a Saturday", "Now the library comes to them") were left out as choices, because the map arguably explains them too.
  - SS1a C13 is keyed problem/solution. The sequence distractor is worded "the steps for doing a job, in order", so it cannot be defended for a paragraph about tries to fix a trouble. Please check this on the blind solve.
  - TC1b C04's second key ("makes the reader curious") is an effect claim. Teach point 1 now models it.
  - TC1b C11 hint 3 ("Figure 1 has no swimmers") rules out two distractors that rest on one reason, so two choices are left.
- **Separation:** no core or similar item uses p2 (the form A passage) in either lesson. No new text names monarchs, gopher tortoises, milkweed, burrows or any check key. No similar item shares a stem with core.
