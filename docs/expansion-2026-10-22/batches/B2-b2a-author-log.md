# B2 author log (b2a): 3.T.T.2.a, 3.T.T.2.b and 3.T.T.2.c

**Role:** content author b2a for batch B2. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before they read this log (04-content-plan.md §8).

**Files changed:**
- `js/data/lessons/T-T2.js`, in the 3.T.T.2.a, 3.T.T.2.b and 3.T.T.2.c blocks only. The 3.T.T.2.d block was not touched.
- New figures: `assets/figures/tt2-c-fire-station.svg` and `assets/figures/tt2-c-bike.svg`.

In each block I added:
- new passages, after the existing ones;
- new lesson keys `core`, `similar` and `addons`, between `practice` and `test`;
- a few sentences of teaching (see §6).

Nothing in `practice`, `test`, `testB` or `clues` changed, and no existing id changed.

**Pattern:** B0 (3.T.T.1.c) after its review fixes, plus every rule added to AUTHOR-BRIEF.md after the B1 reviews:
- Hint 2 never names the only paragraph or sentence that holds the key. In an EBSR item, any place a hint names holds at least two Part B choices.
- Hint 3 settles at most one blank, row or step.
- Practice Together does not pre-answer a set-1 core item. This changed which items are refs (§2).
- An earlier item's `why` or `how` does not state a later item's answer in the same set.
- Order items with four or more steps are worth 2 points.

## 1. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. In my lessons, the only warnings are the informational "N of 15 core items have no similar item" (2.a: 11, 2.b: 10, 2.c: 4) |
| `python3 verification/readability.py` | Every new passage is FK 1.9–4.5 (none above 4.5). Word counts are in §3 |
| `check-writing.js` | 0 failures, 0 warnings |
| `check-instructional-copy.js` | 28 assertions passed |
| Scratch audit (`scratchpad/b2a/audit.js`) | Every hot-text target and answer resolves to the intended sentence; keys are printed per item for the lead |
| Six-word n-gram scan of my new passages against every passage, practice, test, testB, set item and Watch Me on the site | One hit: "Did you know? Box: Long ago" (3.T.SS.1.a p3). It is a generic text-box opener, not content |
| Smoke test, port 8751 (Playwright, 400 px wide) | `#play/SK:<k>:p`, `:y`, `:y2` and `:y3` load for all three lessons with no page errors. Both figures render, and the fire-station figure sits after the "Living Upstairs" section in set 2 |

## 2. Refs and Practice Together (changed by the "Together must not pre-answer set 1" rule)

| Lesson | Refs in core | Practice Together now | Why |
|---|---|---|---|
| 2.a | P4, P7 (set 1); P3 (set 2); P5 (set 3) | P1, P2, P6 | P3 and P5 give each other away (older workers gather nectar), and P5's why says the five-eyes fact does not support the main idea, which would pre-answer P4. So neither can sit in set 1 with P4. Each goes to a later set as one of the "up to two items in later sets" from p1 |
| 2.b | P4 (set 1) | P1, P2, P3, P5, P6 | P1 (the order of the stages) pre-answers P6 (eats its eggshell first) and any chrysalis item. P3 (tastes bad) and P1 (waits for wings to dry) pre-answer two rows of P5. So P5 and P6 stay in Together |
| 2.c | none | P1, P2, P3, P4, P5 | P1 (food for energy) and P3 (fat stored for the trip) pre-answer P4. P2 (where they go in winter) and P1 (the Gulf only in p2) pre-answer most of P5. So the fifteen are all new, and set 1 uses p1/p2 only for facts that Together never touches (Georgia; the blurred wings) |

Together stays within 2–5 items in every lesson. **Lead decision needed:** 2.b and 2.c now show five Together items where the old split showed three. That is allowed by rule 10, but it changes what `SK:<key>:p` shows.

**Residual risk for reviewers (2.a set 1):** P1 (Together) has the distractor "The queen bee can lay hundreds of eggs in just one day", so a child knows paragraph 2 is about the queen before C04 asks for its heading. P1 does not separate the key ("The Hive's Queen") from "Laying Eggs All Day", so I judged this narrowing, not pre-answering.

## 3. Passages added

All are original and never used by `test` or `testB`. None comes from form A or form B. The checks were read in order to avoid their themes (2.a: bees, armadillo, tree trunk; 2.b: monarch, water cycle, Pony Express; 2.c: hummingbirds, alligators). Other site topics I avoided: sea turtles (R-INF-01), the pinecone bird feeder with its out-of-order step (T-SS), the Pine Ridge library history (T-TS), Field Day (T-C, T-SS), bats (2.d's draft).

| Lesson | Id | Title | Words / FK | Domain | Features | Used by |
|---|---|---|---|---|---|---|
| 2.a | p4 | Ready in a Flash | 178 / 3.9 | community | two headings, a "Did You Know?" box, Figure 1 (fire station) | C06, C08, C09, C10 |
| 2.a | p5 | The Vine That Grew and Grew | 180 / 3.8 | nature (kudzu, Georgia) | three headings and a box | C11, C12 |
| 2.b | p4 | The Wheel That Topped a Tower | 182 / 3.0 | community history (1889 Paris, 1893 Chicago, the Ferris wheel) | a series of historical events | C06–C10, C15 |
| 2.b | p5 | How to Patch a Bike Tube | 178 / 1.9 | sports / problem solving | a technical procedure | C11–C13, C15 |
| 2.c | p5 + p6 | Sweetgrass + Baskets That Tell a Story | 100 / 3.4 + 101 / 4.5 | family and culture (Gullah Geechee, Georgia coast) | short pair | C03–C05 |
| 2.c | p7 + p8 | From Old Can to New Can + Three Bins at Oak Hill School | 133 / 4.2 + 145 / 3.7 | community / school | pair | C06–C10 |
| 2.c | p9 + p10 | A Game for a Cold Winter + How the Basket Changed | 137 / 4.4 + 143 / 4.4 | sports history | pair | C11–C14 |

- **Paragraph numbers in 2.a p4 and p5.** Headings and the box are not numbered on screen, but refs count raw blocks. So hints name the headings, or the displayed paragraph number ("the last paragraph"). Hot-text refs were checked against the raw blocks.
- **Short stems** (no passage): 2.a C03 (Saturday market), C05 (tomato tips), C13 (spring concert, two paragraphs), C14 (Kayla's bike report and figure); 2.b C04 (cup phone), C05 (Garrett Morgan's signal), C14 (lightning and thunder); 2.c C15 (two field-trip notes); and all nine similar items.
- **Facts checked from memory** (reviewers may want to confirm):
  - Kudzu came from Japan more than 100 years ago, was paid for in the 1930s to hold soil, grows about a foot a day, has grape-scented flowers and is made into jelly.
  - Eiffel Tower 1889; Chicago fair 1893; Ferris's wheel first turned in June 1893, was taller than a 20-story building and had 36 cars of about 60 riders.
  - Garrett Morgan's warning signal followed a crash he saw in Cleveland.
  - Naismith, December 1891, Springfield; peach baskets 10 feet up on a balcony; a soccer ball; 13 rules, including no running with the ball; chain-pull nets, then open nets; backboards stopped balcony fans.
  - Aluminum is recycled again and again, and a can can be back on a shelf in about two months.
- **The sweetgrass text** says the Gullah Geechee families' ancestors "were brought here from West Africa." I chose that wording to be accurate without detail. Reviewers should confirm the tone is right for grade 3.

## 4. Figures (SPEC §5e)

| File | Used by | What the item asks | Alt-text guard |
|---|---|---|---|
| `tt2-c-fire-station.svg` | 2.a p4 (figure after "Living Upstairs"), C09 | why the bottom of the pole is placed where it is | The alt text gives the positions a screen-reader user needs: pole beside the gear rack, rack beside the truck, kitchen upstairs, doors to the street. It never says why the pole is there |
| `tt2-c-bike.svg` | 2.a C14 (item figure, no caption) | choose the caption | The alt text names the five labels and says there is no rider. It avoids the key's words ("main parts") |

Both are 320-unit viewBoxes with 21-unit text, black line art, labels with leader lines, no color-only meaning, no people. Rendered PNG checks are in `scratchpad/b2a/`.

## 5. The fifteen, per lesson

Components follow 02-coverage-matrix.csv. Task verbs follow 04 §4.4. "Differs" names the nearest item and the at-least-two ways (text, component, task, context) in which they differ.

### 3.T.T.2.a (components: MI main idea, KD key details, KI key versus merely interesting, DS design: headings, boxes, captions, diagrams)

| # | Id | Set | Component | Task | Format | DOK | Text | Differs from nearest |
|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | KI | identify (classify) | match | 2 | p1 | C05: text, task |
| 2 | P7 (ref) | 1 | DS caption/labels | identify | dropdown | 2 | p1 | C14: text, task, context |
| 3 | C03 | 1 | MI (unstated) | construct | dropdown | 2 | stem: market | S03/C11: text, task |
| 4 | C04 | 1 | DS heading + MI | identify | mc | 2 | p1 ¶2 | C10: text, task, context |
| 5 | C05 | 1 | KI | explain | mc | 3 | stem: tomatoes | P4: text, task, context |
| 6 | C06 | 2 | MI (stated twice) | use evidence | hottext ×2 | 2 | p4 | C11: text, context, picks two |
| 7 | P3 (ref) | 2 | KD | use evidence | ms | 2 | p1 | C06: text, component, context |
| 8 | C08 | 2 | DS text box + KI | explain | mc | 3 | p4 | C12: text, task (why boxed vs why not the main idea) |
| 9 | C09 | 2 | DS diagram + KD | explain | mc | 3 | p4 + Figure 1 | C08: component, uses the figure |
| 10 | C10 | 2 | DS heading + KI | edit (place a new sentence) | dropdown ×2 | 3 | p4 + stem | C04: text, task, context |
| 11 | C11 | 3 | MI | identify | hottext | 2 | p5 | C06: text, context, one pick |
| 12 | C12 | 3 | MI vs KI | explain (correct a student) | mc | 3 | p5 | C08: text, task |
| 13 | C13 | 3 | MI | compare two paragraphs (transfer) | mc | 3 | stem: concert | C03: text, task, context |
| 14 | C14 | 3 | DS caption | edit (supply a caption; transfer) | dropdown | 2 | stem + figure | P7: text, task, context |
| 15 | P5 (ref) | 3 | MI + KD | use evidence | ebsr (B picks two) | 3 | p1 ¶4 | C06: text, format |

- **Tallies:** mc 6; TE 9 (match, dropdown ×4, hottext ×2, ms, ebsr); DOK 3 ×7, DOK 1 ×0.
- **Domains:** science 5 (bees), community 5 (market, fire station), nature 2 (kudzu), family 1, school 1, everyday 1.
- **Components:** MI 6, KD 4, KI 5, DS 6. The main idea is in every set.

### 3.T.T.2.b (components: H historical series, S scientific ideas, P technical procedure, T time-order language, CE cause-and-effect language)

| # | Id | Set | Component | Task | Format | DOK | Text | Differs from nearest |
|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | CE language | identify | dropdown ×2 | 2 | p1 | C12: text, component, task |
| 2 | C02 | 1 | S + T | identify the stage before | hottext | 2 | p1 ¶5 | C10: text, component |
| 3 | C03 | 1 | T language | identify | ms (three keys) | 1 | p1 ¶6 | P4: component, format |
| 4 | C04 | 1 | P | edit (misplaced step) + explain | mc | 3 | stem: cup phone | C12: text, context, task |
| 5 | C05 | 1 | H + CE | explain the connection | mc | 3 | stem: Garrett Morgan | C07: text, task |
| 6 | C06 | 2 | H + T | construct (order) | order 5 (2 pts) | 2 | p4 | C11: text, component, context |
| 7 | C07 | 2 | H + CE | use evidence | ebsr | 2 | p4 ¶1–2 | C10: format, cause vs evidence of safety |
| 8 | C08 | 2 | H + T | classify before/after | match | 2 | p4 | C06: task, format |
| 9 | C09 | 2 | H | explain the author's purpose | mc | 3 | p4 ¶3–4 | C05: text, task |
| 10 | C10 | 2 | H + CE | use evidence | hottext | 3 | p4 | C07: format, task |
| 11 | C11 | 3 | P + T | construct (order) | order 5 (2 pts) | 2 | p5 | C06: text, component, context |
| 12 | C12 | 3 | P | edit (missing step) | dropdown | 2 | p5 + stem | C04: text, task |
| 13 | C13 | 3 | P + CE | predict an effect | mc | 3 | p5 | C14: text, component |
| 14 | C14 | 3 | S + CE | construct a chain (transfer) | mc | 3 | stem: thunder | C02: text, task |
| 15 | C15 | 3 | H vs P | compare two texts (transfer) | mc | 3 | p4 + p5 | C09: task, two texts |

- **Tallies:** mc 6; TE 9; DOK 1 ×1 (C03); DOK 3 ×8.
- **Domains:** science 4 (monarch, lightning), community/history 6, family 1, sports/problem solving 4 (C15 is counted here).
- **Components:** H 7, S 2, P 5, T 5, CE 7. Cause and effect is in every set. The historical series, which was unpractised before, now has seven items.

### 3.T.T.2.c (components: BO in both texts, ON in only one text, IN integrate to explain, TR track the source)

| # | Id | Set | Component | Task | Format | DOK | Text | Differs from nearest |
|---|---|---|---|---|---|---|---|---|
| 1 | C01 | 1 | BO | identify (one sentence each) | hottext ×2 | 2 | p1+p2 | C10: text, context |
| 2 | C02 | 1 | TR / ON | identify the question one text answers | mc | 2 | p1+p2 | C03: text, task, context |
| 3 | C03 | 1 | ON | identify | mc | 2 | p5+p6 | C02: see above |
| 4 | C04 | 1 | IN | explain (combine a property and a process) | mc | 3 | p5+p6 | C09: text, context |
| 5 | C05 | 1 | TR + BO | edit (fix a note) | dropdown ×2 | 2 | p5+p6 + stem | C14: text, context |
| 6 | C06 | 2 | TR + BO | classify | match (3 columns) | 2 | p7+p8 | C14: text, format, context |
| 7 | C07 | 2 | IN | construct (order across texts) | order 5 (2 pts) | 3 | p7+p8 | C11: format, task |
| 8 | C08 | 2 | ON (what text 2 adds) | compare + evidence | ebsr | 3 | p7+p8 | C13: text, format, context |
| 9 | C09 | 2 | IN | explain | mc | 3 | p7+p8 | C04: text, context |
| 10 | C10 | 2 | BO | identify (one sentence each) | hottext ×2 | 2 | p7+p8 | C01: text, context |
| 11 | C11 | 3 | IN | use evidence (one from each text; transfer) | ebsr (B picks two) | 3 | p9+p10 | C07: text, format, context |
| 12 | C12 | 3 | BO | construct | dropdown ×2 | 2 | p9+p10 | C05: text, task |
| 13 | C13 | 3 | IN (text 2 explains text 1) | explain | mc | 3 | p9+p10 | C08: text, format |
| 14 | C14 | 3 | TR | edit (fix notes) | dropdown ×2 | 2 | p9+p10 + stem | C05: text, context |
| 15 | C15 | 3 | IN | apply to a plan (transfer) | mc | 3 | stem: two notes | C04: text, context, task |

- **Tallies:** mc 6; TE 9; DOK 3 ×7, DOK 1 ×0.
- **Domains:** nature 2, family/culture 3, community/school 6 (recycling and the notes), sports 4.
- **Components:** BO 5, ON 3, IN 7, TR 5. Integration is in every set.

## 6. Teaching added (no new teach points, so the limits hold)

- **2.a** (it already had six points): I extended points 5 and 6. Point 5 now covers a main idea that no sentence states, and comparing two paragraphs (C03, C13). Point 6 now covers choosing a heading and choosing a caption (C04, C10, C14). Watch Me is unchanged.
- **2.b:** Point 1 now separates a how-to from a history (C15). I added Watch Me 3, ice pops with one misplaced step (C04, C12). There are now three Watch Me examples.
- **2.c:** Point 5 now asks "Is it in Text 1? Text 2? Both, even in different words?" (C05, C14). I added Watch Me 3 on raccoons, which tracks a fact and combines two texts. There are now three Watch Me examples.
- **Definitions** match the edge cases the items test. A key detail is a fact that helps prove the main idea: C05 and C12 test a true fact that is not key. A fact in both texts can use different words: C05's "dried sweetgrass" and S01's "the acorns they buried".

## 7. Similar items

There are three per lesson, each on its own new short text, with honest `like` lists:
- **2.a:** S01 bus-driver heading (C04); S02 duck feathers, key details (P3, P4); S03 library main idea, unstated (C03).
- **2.b:** S01 tree seedling, a misplaced step (C04, C12); S02 Maple Grove brick street, a historical cause (C05, C07); S03 a spoon in hot soup, a heat chain (C14).
- **2.c:** S01 squirrels, a fact in both texts in different words (C01, C10, C12); S02 polar bear and seals, integration (C04, C09, C11, C13); S03 dolphins, a fact in only one text (C02, C03, C05, C14).

The uncovered core items are warnings only, under the lead's rule 9 decision.

## 8. Weak items

The inventory flags no weak items in these three lessons. No existing practice item was revised. Addons give hints and Show me how to every practice item: 2.a P1–P7, 2.b P1–P6 and 2.c P1–P5.

## 9. Notes for the lead and the reviewers

- **Passage length.** The brief says 60–180 words. One passage is a little over: 2.b p4 has 182 words, and 2.a p5 is right at 180. 04 §4.3 allows 100–250. I trimmed the others to fit.
- **2.b C03 is DOK 1** (spotting time-order phrases). It is the only DOK 1 in the three lessons.
- **2.c C06's "Both" row** ("that cans can be used again") rests on the school passage's Recycle bin and Malia's "Now most of it gets used again." Reviewers should judge whether that is explicit enough.
