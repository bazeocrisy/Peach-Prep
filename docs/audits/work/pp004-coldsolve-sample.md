# PP-004 Agent C: cold-solve accuracy sample

Reviewer: Agent C, the assessment accuracy reviewer. This review is read-only. The only file written in the repo is this one.
Date: 2026-10-20. Worktree: /home/claude/pp-fix (PP-004 base 4ed5d0b).

## 1. Summary

| | Items | Agree with key | Rate |
|---|---|---|---|
| Mixed sets and Practice Test 1 (all 15 set files, every item) | 147 | 147 | 100% |
| Lesson test items (stratified sample, 15 lesson files, 85 lessons) | 174 | 174 | 100% |
| **Total** | **321** | **321** | **100%** |

- **Agreement.** Solved blind, I agreed with the key on all 321 items, so there is no key disagreement to report. The scoring was mechanical. Each item has an answer string, and every part has to match: every slot, every Part A and Part B, every match row, and the full order sequence.
- **Points.** The mechanical point check passed on all 321 items (section 5).
- **Other findings.** These are not key errors. There are 3 cross-item giveaway problems that should be fixed (F1–F3), plus a few soft cues, minor standard-alignment problems and DOK inconsistencies (F4–F7). Each has evidence and a proposed fix below.

## 2. Method (position-bias control)

The scripts and outputs are in the scratchpad, `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/agc/`:

| File | What it does |
|---|---|
| `cold.js` | Loads the live data files and prints each item with no key, no `why`, no `clue` and no hints. Choices are shuffled with a seeded PRNG (FNV-1a hash of `"pp004c:"+id`, then mulberry32): mc and ms choices, both EBSR parts, every dropdown slot, order steps, match rows, and option-type hot text. Passage hot-text targets are listed in passage order. Passages print with paragraph labels as the child sees them (headings, captions and text boxes unnumbered, with raw block numbers too), with figure `src`, caption and alt text. The answer map goes to a separate `*.KEY.json`, which I did not open until all answers were recorded. |
| `sample.js` | Builds the lesson sample (section 3). |
| `ans-sets.txt`, `ans-lessons.txt` | My answers, written in batches while solving and before comparison. |
| `compare.py` | Compares my answers with the keys. |
| `keyed.js` → `keyed.txt` | Run after the comparison. Prints std, DOK, points, clue and why for the qualitative review, and runs the mechanical point and key-count checks. |
| `xcue.js` | Scans for key text reused verbatim in another item's visible text, clue or why. |
| `render.py` | Renders the figures to PNG in Chromium, with network blocked. |

**Contamination disclosure.** While surveying the data format, before solving, I printed the full JSON of two lesson items: SK-RA1a-T1, whose correct choice is stored first, and SK-RA1c-T4, whose `answer` index was visible. Treat those two as not blind. Excluding them, the result is still 319/319.

**Spot-check.** After comparing, I checked the generated keys by hand against the raw data for R-INF-01-3, R-INF-01-5 and R-INF-02-7. The mapping is correct.

## 3. Sample

- **Sets.** All 15 files in `js/data/sets/` that the manifest loads, all 147 items.
- **Lessons.** All 15 in-scope lesson files: F-PF.js and F-FH.js are skipped, as are the lessons for 3.T.C.1.b, 3.T.C.2.c, 3.T.RA.1.b and 3.L.GC.2.a.
  - Per lesson: 2 test items picked by a seeded hash order, the second chosen to be a different type where possible.
  - Every lesson-test `order` item was added, because order is rare.
  - Result: 174 of the 430 in-scope lesson test items (about 40%). Every lesson file has at least 6 items, and all 7 item types appear.

**Per type**

| Type | Sets | Lessons | Total |
|---|---|---|---|
| mc | 55 | 60 | 115 |
| dropdown | 29 | 32 | 61 |
| hottext (passage and option) | 20 | 28 | 48 |
| ms (choose two / three) | 14 | 18 | 32 |
| match | 11 | 19 | 30 |
| ebsr (Part A/B, incl. pick-2 Part B) | 11 | 11 | 22 |
| order | 7 | 6 | 13 |
| **Total** | 147 | 174 | **321** |

The engine supports these 7 types and no others (docs/SPEC.md §5; `js/engine/items.js`).

**Per area**

| Area | Items |
|---|---|
| Reading sets (R-LIT-01/02, R-INF-01/02, R-OPN-01, R-POE-01) | 47 |
| Writing/revising sets (W-REV-01/02) | 16 |
| Language sets (L-GRM-01..03, L-VOC-01..03) | 60 |
| PT-1, literary passage | 7 |
| PT-1, informational passage | 7 |
| PT-1, revising draft | 4 |
| PT-1, standalone language | 6 |
| Lesson tests, Language files (L-GC2, L-GUM1..5, L-V12, L-V3) | 109 |
| Lesson tests, Texts files (T-C, T-RA, T-SS, T-T1, T-T2, T-T34, T-TS) | 65 |

**Per lesson file (sampled / in-scope test items)**

| File | Sampled / in scope |
|---|---|
| L-GC2 | 6 / 15 (2.a excluded) |
| L-GUM1 | 18 / 45 |
| L-GUM2 | 18 / 45 |
| L-GUM3 | 16 / 40 |
| L-GUM4 | 16 / 40 |
| L-GUM5 | 14 / 35 |
| L-V12 | 10 / 26 |
| L-V3 | 11 / 26 |
| T-C | 6 (1.b and 2.c excluded) |
| T-RA | 8 (1.b excluded) |
| T-SS | 12 / 31 |
| T-T1 | 10 / 26 |
| T-T2 | 9 / 21 |
| T-T34 | 8 / 21 |
| T-TS | 12 / 25 |

**DOK of the items checked:** DOK 1: 42; DOK 2: 244; DOK 3: 35.

## 4. Disagreements with the key

**None.** All 321 cold answers match the stored keys.

One item was a close call that I resolved in the key's favour:
- **R-INF-02-7, row "that the swamp has islands" (keyed Both).** I chose Both because passage 2 ¶2 says "these floating islands."
- A child could read passage 2's floating islands as mats of peat rather than "the swamp's islands" and choose Passage 1 only.
- The `why` explains the reasoning, so I agree with the key. The risk is low, and I have logged it as F7.

## 5. Points (all correct)

Checked by `keyed.js` against SPEC §5. There were 0 failures.

| Rule | Items | Result |
|---|---|---|
| Every `ms` with pick ≥ 2 is worth 2 points | 32 | Pass. R-OPN-01-2 is pick 3, 2 points, as SPEC allows. |
| Every `ms` `pick` equals the number of correct choices | 32 | Pass |
| Every 2-answer hot text is worth 2 points | 5 | Pass: L-GRM-02-9, L-GRM-03-6, SK-GUM3-1-T4, SK-GUM3-3-T4, SK-RA2a-T3. Every other hot text has 1 answer and 1 point. |
| Every 2-slot dropdown is worth 2 points | 19 | Pass. Every 1-slot dropdown is worth 1 point. |
| Every `ebsr` is worth 2 points, and Part B `pick` matches its correct count | 22 | Pass. The pick-2 Part Bs (L-VOC-01-5, R-INF-01-5, R-OPN-01-4, SK-V3a-T2, SK-TT1d-T3) each have exactly 2 correct. |
| Every `order` and `match` is worth 2 points | 43 | Pass |
| Every `mc` has exactly 1 correct choice | 115 | Pass |

## 6. Findings other than key errors

### F1. Moderate: a visible cross-item cue in Practice Test 1 (test mode)

- **Items:** PT-1-13 gives away PT-1-10.
- **What PT-1-10 asks:** Which TWO details explain why leaves turn yellow and orange? The keys are:
  - "In the fall, the green chlorophyll breaks down and is not replaced."
  - "Yellow and orange colors are inside the leaves the whole summer."
- **What PT-1-13 shows:** the cause "The green chlorophyll in a leaf breaks down." matched to the effect "Hidden yellow and orange colors can be seen."
  - That one pair states both PT-1-10 keys: the breakdown, and the colours being there all along ("hidden").
  - Both items are visible together in test mode, and the player lets the child move back and forth.
- **Rule:** FIX-BRIEF says "In a test, no item may reveal another test item's answer in either direction."
- **Proposed fix (PT-1.js):** replace PT-1-13's chlorophyll pair with another pair from the article, for example:
  - cause "The days get shorter in the fall."
  - effect "The tree slows down its food making." (p2 ¶4 sentences 1–2)
  - Keep 4 rows and use each effect once. Update the `why` to match. PT-1-10 is unchanged.

### F2. Moderate: a `why` reveals the next item's key in Practice Test 1 (practice mode), plus a soft visible cue

- **Items:** PT-1-6 reveals PT-1-7.
- **The `why` leak:**
  - PT-1-6's `why` quotes Aunt Bea: "A chipped pitcher is a small problem, but broken trust is a much bigger one."
  - That sentence is the key to PT-1-7 Part B.
  - In practice mode, the feedback for item 6 appears before item 7, and the child cannot go back (`q-prev` is hidden in practice; `js/engine/player.js:269`). `xcue.js` found this mechanically.
- **The soft visible cue:** PT-1-6's correct choice, "…but Aunt Bea thinks it matters less than the truth.", also points to PT-1-7 Part A ("Telling the truth is important…").
- **Rule:** FIX-BRIEF says "No hint or `why` may give away another item's answer in the same set."
- **Proposed fix:**
  - (a) Change the PT-1-6 `why` to paraphrase without quoting: "In paragraph 11, Aunt Bea thanks Malik for telling her and calls the chip a small problem."
  - (b) Optionally, reword the PT-1-6 key to "Malik thinks the chip is a big problem he must hide, but Aunt Bea says the chip is only a small problem." Then adjust distractor D's contrast to match.

### F3. Minor to moderate: a clue and `why` give away a later item (practice mode)

- **Items:** R-OPN-01-2 gives away R-OPN-01-6.
- **The leak:**
  - R-OPN-01-2's `clue` says "Maya uses the words First, Another reason and Finally to start each reason."
  - Its `why` says "(paragraph 3, Another reason)".
  - R-OPN-01-6 asks what "Another reason" tells the reader. The key is "adding a new reason to support her opinion."
  - The clue is shown before the child answers item 2, so the item-6 answer is given away in advance.
- **Proposed fix (R-OPN-01.js):**
  - Change the clue to "Look at the first sentence of paragraphs 2, 3 and 4. Each one starts a reason."
  - Drop the linking-word labels from the `why`, giving "(paragraph 2)", "(paragraph 3)" and "(paragraph 4)".

`xcue.js` also flagged two `why` texts that quote an **earlier** item's key: R-OPN-01-3 quotes R-OPN-01-2, and R-POE-01-q7 quotes q5. Practice runs forward only and test feedback appears only after submission, so these do not leak. No action is needed.

### F4. Low: soft visible cues (optional)

| Items | Cue | Optional fix |
|---|---|---|
| R-POE-01-q7 → q5 | The q7 key "…the speaker chooses to watch them free" restates the q5 Part A key "enjoys watching them and wants them to stay free." | Reword the q7 key to "Marcus first plans to fill a jar, but the speaker never tries to catch any." |
| R-LIT-02-q6 → q7 | The q6 slot-1 key "works slowly and carefully like Joon" sits next to the q7 Part A key "Doing a job carefully matters more than doing it fast." | Accept. q7 is easy anyway, and q6 is a summary item. |
| L-VOC-03-3 → L-VOC-03-4 | The 03-3 distractor "wind – wind" and its `why` ("homographs: one means moving air…to wrap around") prime 03-4, which asks how the two winds differ. The `why` does not state the sound difference, so this is a prime, not a giveaway. | Accept, or change the 03-3 distractor to "close – close". |

### F5. Minor: standard alignment

| Item | Problem | Proposed fix |
|---|---|---|
| **W-REV-01-6** | Tagged `3.T.RA.1.c` ("Summarize researched … information from at least two credible sources …"). The item asks the child to pick facts that support a reason, which is selecting information, not summarizing. The parallel PT-1-17 is tagged `3.T.RA.1.b` ("…locating, gathering, selecting, and organizing information…"). | Change to `["3.T.RA.1.b","3.T.T.3.c"]` once the RA.1.b rewrite lands, so the two items are consistent. Lead's call. |
| **SK-TSCC-T5** (T-TS.js, compare/contrast lesson, lesson code 3.T.SS.1.a) | "What can you see when a crocodile shuts its mouth?" is literal detail recall and does not test structure. | Reword to the structure: "Which detail from paragraph 3 shows a way the two animals are DIFFERENT?" |
| **SK-TSDESC-T4** (T-TS.js, description lesson) | "How did the live oak get its name?" is detail recall. The lesson's `codes` include 3.T.T.2.a, which fits better. | Either tag the item `std: ["3.T.T.2.a"]`, or reword it to ask which detail supports the main topic. |
| **SK-V3d-T5** (L-V3.js, 3.L.V.3.d) | The item is a plain spelling choice ("finished"). The dictionary is only mentioned in the prompt, so the child never uses a dictionary entry. | Add a stem with a short entry, such as "finish (verb) finished, finishing", so the item tests checking spelling in a dictionary. |
| **SK-RA1c-T5** (T-RA.js, 3.T.RA.1.c) | Both slots test linking words inside a summary, which is 3.T.SS.1.c. | Acceptable as written. Optionally add `std: ["3.T.RA.1.c","3.T.SS.1.c"]`. |
| **SK-SS2a-T3** (Part B) | The key, "Maybe this new town would not be so bad after all.", supports "happy" only indirectly. | Not wrong: the distractors are clearly worse. Optionally add a Part B choice that shows the smile more directly. |

All other `std` tags I checked match what the item tests. Most sampled lesson items carry no `std` of their own and take the lesson's code (only some T-TS.js items carry their own). For those I judged each item against the lesson code.

### F6. Minor: DOK inconsistencies

None of these are errors, but each is hard to defend against the sibling items.

| Item | Current DOK | Suggested | Reason |
|---|---|---|---|
| SK-GUM4-5-T5 | 3 | 2 | It asks the child to recognize correct who/that/where/when use. |
| W-REV-02-7 | 3 | 2 | It asks for the best ending. The equivalent conclusion items W-REV-01-8, PT-1-18 and SK-TT3c-T4 are all DOK 2. |
| SK-TC1c-T3 | 3 | 2 (arguable) | Choosing a sound for a poster. |
| SK-RA2b-T5 | 3 | 2 (arguable) | Recognizing a guess as a weak source. |

I found every other DOK plausible.

### F7. Low: borderline row in R-INF-02-7

See section 4.
- **Optional fix:** change the row to "that people once lived on islands in the swamp", which is Passage 1 only. The item would then need another "Both" row, such as "that most of the swamp is now a refuge", so it still uses all three columns.

## 7. Explanations and distractors

- **`why` texts.** I read the `why` for all 321 items. Every one names the correct answer, and the reasoning is correct. I found no `why` with a factual or grammatical error.
- **Distractors.** These are plausible misreadings at a similar length and style. Each mc and ms distractor is clearly wrong from the text or the rule, and I found no second defensible answer.
  - PT-1-23 ("drank" vs "gulped") depends on the word "BEST" in the prompt. The `why` covers this.
  - L-VOC-03-8 Part B ("on the mat" vs "our feet") has a defensible best answer.
- **Grade-level notes.**
  - The roots in L-VOC-02-9 (port) and SK-V2a-T6 (spect) fall under the official "common roots" in 3.L.V.2.a.
  - The `why` in SK-V2a-T6 also mentions graph and rupt. This is acceptable as feedback text.

## 8. Figures

I rendered the SVGs in the sample to PNG (Chromium, network blocked) and viewed them:

| Figure | Used by | Result |
|---|---|---|
| `assets/figures/ss1a-tortoise-burrow.svg` | SK-SS1a-T4 | A tortoise on sand facing the dark opening of a burrow in a sand mound. It matches the alt text and the key ("rests at the door of the burrow it dug"). The tortoise is a little apart from the opening, but "at the door" is still fair. |
| `assets/figures/tt2a-armadillo.svg` | Passage figure for SK-TT2a-T2/T3 | Labels: long nose, sharp claws, bony plates, "bands that let the shell bend". These match the alt text. The sampled items do not depend on the figure. |
| `assets/figures/v3a-heron.svg` | Passage figure for SK-V3a-T2/T6 | Labels: sharp beak, long neck, long legs. These match the alt text. The sampled items do not depend on the figure. |

No figure was cut off or hard to read at the rendered size.

## 9. Fact checks

All checked 2026-10-20. Each passage claim checked was supported by the source.

| Claim (items) | Source | Result |
|---|---|---|
| Armadillos jump straight up when startled; only three-banded species roll up; nine-banded almost always have identical quadruplets (T-T2 "The Armored Digger") | https://www.nwf.org/Educational-Resources/Wildlife-Guide/Mammals/Nine-Banded-Armadillo | Supported. The page gives no house-cat comparison, only about 2.5 ft and 12 lb. I accept "about the size of a house cat" as a fair grade-3 approximation, but it is not verified by this source. |
| Carotenoids are present all summer; warm sunny days and cool nights give the brightest reds; a layer of cells forms at the leaf base (PT-1 p2; PT-1-10, -13, -14) | https://www.mass.gov/doc/why-leaves-change-color/download (copy of the USDA Forest Service text) | Supported. The fs.usda.gov page returned a server error. |
| Okefenokee: "land of trembling earth", but likely Hitchiti "bubbling water"; the canal drainage attempt in the late 19th century; Hebard cypress logging 1909–1927 (R-INF-02) | https://en.wikipedia.org/wiki/Okefenokee_Swamp | Supported |
| Okefenokee refuge established in 1937 (R-INF-02) | https://en.wikipedia.org/wiki/Okefenokee_National_Wildlife_Refuge | Supported |
| Loggerheads in Georgia nest from early May to mid-August, average about 120 eggs, hatch after about 60 days (R-INF-01) | https://gadnrle.org/sites/default/files/wrd/pdf/fact-sheets/loggerhead_sea_turtle_2011.pdf | Supported. This sheet does not cover sex determination by temperature or hatchlings using light. I did not verify those two claims from a source; they are standard textbook facts. |
| Ruby-throated hummingbird about 3 g ("less than a nickel": a nickel is 5 g), walnut-sized nest bound with spider silk, usually 2 eggs, nonstop Gulf crossing (T-RA hummingbird sources) | https://www.tn.gov/twra/wildlife/birds/forest-birds/ruby-throated-hummingbird.html | Supported. The 5 g nickel weight is from memory and was not looked up. |

I did not look up the remaining factual claims because I had no doubt about them:
- the gopher tortoise is Georgia's state reptile;
- the live oak is Georgia's state tree;
- crocodile and alligator teeth and snouts;
- bats are the only mammals capable of true flight;
- owl hearing and fixed eyes.

## 10. What I did not do or could not view

- I did not run the site or a server, and did not use port 8487. Items were judged from the live data files through the cold-print script, not from rendered screens. Screen-level problems are outside this review: layout, a hot-text target that does not render, clue-word marks.
- **Lesson practice items** (Practice Together and Try It Yourself) were not sampled. I sampled test items only, about 40% of in-scope lesson tests.
- **Lesson cross-item checks.** Lesson tests were checked mechanically (`xcue.js`): each sampled item's key against the visible text, clue and `why` of every other test item in its lesson. The manual check covered only the sampled pairs. Unsampled lesson items were not reviewed for quality.
- **Excluded content.** Per the assignment I did not review the items in T-C 3.T.C.1.b and 3.T.C.2.c, T-RA 3.T.RA.1.b, L-GC2 3.L.GC.2.a, F-PF.js or F-FH.js. Set items tagged with those codes **were** reviewed, because they sit in the set files: L-GRM-03-1/2/3 (3.L.GC.2.a), PT-1-12 and R-INF-01-6 (3.T.C.1.b), PT-1-17 (3.T.RA.1.b).
- No GaDOE material was consulted for item content. The standards wording in section 6 is quoted from `js/data/standards.js` (`official` field).
