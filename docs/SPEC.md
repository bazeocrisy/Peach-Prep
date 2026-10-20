# Peach Prep — Specification

*Georgia Milestones practice · Grade 3 English Language Arts.*
Peach Prep is an independent practice site. It is **not affiliated with or endorsed by the Georgia Department of Education (GaDOE)**. "Georgia Milestones" is used only to describe what the site prepares for.

## 1. Sources (official; currency as of the dates shown)

| Document | Date | What we take from it |
|---|---|---|
| GaDOE *Georgia Milestones ELA Grade 3 Assessment Blueprint* | August 2025 | Claims, targets, the expectations assessed, points, item types, DOK |
| GaDOE *DRAFT Achievement Level Descriptors, Grade 3 ELA* | October 2025, marked DRAFT, printed "effective 2025-2026" | What Beginning, Developing, Proficient and Distinguished look like for each standard. Every page that shows ALD text must label it as GaDOE's draft |
| GaDOE *Writer's Checklist, Grade 3* | 2026 | Shown to students during the test, and may be printed for instruction. Peach Prep shows it word for word |
| GaDOE *Eight-Point, Three-Trait Writing Rubric, Grade 3* | August 2026 | The writing scoring guide (summarized in our own words, with a link to the official PDF) |
| Georgia's K-12 ELA Standards, Grades 3–5, with the GUM chart | 2025-26 | Standard codes and wording (paraphrased) |

The official PDFs are **not** committed to this public repository. Peach Prep links to GaDOE for them.

**Standard setting (re-check date).** The 2025-26 school year was the first administration of the new ELA test. GaDOE Insights (https://georgiainsights.gadoe.org/dashboards/georgia-milestones/, checked 2026-10-20) says 2025-26 ELA results come "in late fall 2026 following standard setting", and the ALD document says the draft ALDs "are subject to revisions during the standard setting process". Re-check for final ALDs (and any 2026-27 blueprint change) in December 2026. Until then the site labels the ALDs as a draft. None of the lor2.gadoe.org PDF links could be fetched automatically on 2026-10-20 (robots-blocked); see docs/audits/PP-003-SOURCE-VERIFICATION.md.

## 2. The test, per the blueprint

**60 points from 49 items.** 41 items are scored and 8 are field-test items.

| Domain | Points | Items |
|---|---|---|
| **Interpreting Texts** (reading, listening, viewing) | 34 | 20 one-point items (selected response or technology-enhanced) + 7 two-point technology-enhanced items |
| **Constructing Texts** (writing, speaking, creating) | 26 | 8 one-point items + 5 two-point items + **one 8-point extended writing task** |

**Approximate points by claim.** The blueprint table is dense, so these numbers are a reading of it.

| Claim | Interpreting | Constructing |
|---|---|---|
| Context + Structure & Style | 6 | 6 |
| Techniques (narrative, expository, opinion, poetic) | 16 | 8 (one merged cell covering Techniques **and** Research & Analysis) |
| Research & Analysis | 6 | (inside the 8 above) |
| Language: Grammar Conventions + Vocabulary | 6 | 12 |

**Expectations assessed.**
- **Interpreting Texts:**
  - 3.T.C.1 (a, b) and 3.T.C.2 (a, c)
  - 3.T.SS.1 (a) and 3.T.SS.2 (a)
  - 3.T.T.1 (a, b, c, d), 3.T.T.2 (a, b, c), 3.T.T.3 (a) and 3.T.T.4 (a)
  - 3.T.RA.1 (a, b) and 3.T.RA.2 (a, b)
  - 3.L.GC.2 (a). (3.L.GC.1 GUM is **not** listed under Interpreting Texts.)
  - 3.L.V.1 (a), 3.L.V.2 (a, b) and 3.L.V.3 (a, b, c, d)
- **Constructing Texts:**
  - 3.T.C.1 (c)
  - 3.T.SS.1 (b, c, d) and 3.T.SS.2 (b)
  - 3.T.T.1 (e), 3.T.T.2 (d), 3.T.T.3 (c) and 3.T.T.4 (b)
  - 3.T.RA.1 (c)
  - 3.L.GC.1 (GUM) and 3.L.GC.2 (b, c, d). The blueprint lists 3.L.GC.1 **only** here, so its Master/Reinforce rows are `tested: "writing"` in standards.js.
  - 3.L.V.1 (b), 3.L.V.2 (c) and 3.L.V.3 (e). The blueprint prints this last one as "5.L.V.3 (e)", which reads as a typo.
- **3.L.GC.1** is assessed **only from the Master and Reinforce rows** of the GUM chart. Introduce and Continue rows are not tested.
- **Foundations** is "appropriate for classroom assessment only". It is not on the test.
- **Practices** are embedded in other items and not reported separately.

**Item types.**
- Selected-response, plus technology-enhanced: drag-and-drop, drop-down, evidence-based selected-response, match interaction, reorder interaction, hot text highlight, multiple-part and multiple-select.
- Two-point technology-enhanced items are **24 of the 60 points**.

**Depth of Knowledge (DOK).**

| Level | Share of points |
|---|---|
| DOK 1 | 5–10% |
| DOK 2 | 40–60% |
| DOK 3 | 20–35% |
| DOK 4 | about 13% (8 points; most likely the writing task, which is our inference) |

The **Lexile measure and reading status** come from the Interpreting Texts items.

**Writing task.** An opinion essay built from sources, scored 0–8:
- **Purpose and Organization (0–3):** an introduction that states the opinion, logical grouping, linking words and transitions, and a conclusion.
- **Evidence and Elaboration (0–3):** reasons that support the opinion; the **provided** reasons are supported with relevant information from the sources, in the student's own words; elaboration uses opinion and expository techniques.
- **Language Usage and Conventions (0–2):** mostly complete and varied sentences, correct verb tense and subject-verb agreement, and few errors. A very brief response can't show adequate command.
- **Condition codes** sit in the rubric's 0 column. The rubric lists seven reasons: Blank, Copied, Too Limited to Score, Non-English/Foreign Language, Off Topic, Offensive, and Illegible/Incomprehensible.
- **Spelling** has no test items (Foundations), but the Trait 3 footnote points to the Foundations phonics standards for spelling expectations, and the checklist tells students to correct spelling. So spelling can affect the conventions score.
- The rubric's score-point descriptions speak of "**the provided reasons**", while its bullets say the student "Provides reasons" and the checklist says "provide reasons that support my opinion". Practice prompts give the student two reasons to develop with evidence; parent text says "the prompt may give the reasons".

## 3. Site structure

| Section | Points | Content |
|---|---|---|
| Reading | 34 | Text sets: one passage, or a pair, with 6–8 items in test formats. Literary, informational, opinion and poetry |
| Writing | 26 | (a) Writing Task: two sources, a prompt with provided reasons, a planner, a draft box, the Writer's Checklist and a parent scoring guide. (b) Revising items: transitions, conjunctions, introductions and conclusions, best evidence, paragraph order |
| Language | inside both | Grammar (GUM Master and Reinforce rows, writing part only; 3.L.GC.2) and Vocabulary (3.L.V), in test formats |
| Practice Test | — | Blueprint-shaped, no hints, scored in points, Show me how afterwards. PT-1 is **shortened** (24 items, 31 points, no essay) and must say so on its card, in the player title and on its results |
| For Parents | — | Every grade 3 ELA standard: tested or classroom-only, the area's points, where to practice (Peach Prep, Sentence Sense, Word Workshop) |

The everyday tools stay separate and are linked: **Sentence Sense** (grammar), **Word Workshop** (spelling and vocabulary lists), **Study Scoop** (class weekly work).

## 4. Practice vs Test

- **Practice** is one item at a time. The child checks their answer and gets feedback. **Help me** gives one step per press:
  1. the strategy clue;
  2. a narrowing step for that format (for example, cross out two choices, place the first event, or point to the paragraph);
  3. a walk-through with the answer outlined.
  
  The child still enters the answer. Asking for help is never counted as an error.
- **Test** has no hints and no feedback. The child can move back and forth, then submits. Results show points and a breakdown by area. Each missed item has **Show me how** (the clue, then a narrowing step, then the walk-through, then the answer).

## 5. Item schema (`js/data/sets/*.js`)

Each set file calls `PP.addSet({...})`.

```js
PP.addSet({
  id: "R-LIT-01",                 // unique; prefix R- reading, W- writing/revising, L- language
  section: "reading",             // reading | writing | language
  kind: "literary",               // literary | informational | opinion | poetry | paired | grammar | vocabulary | revising
  title: "The Lantern Walk",
  blurb: "A story about ...",     // one line for the set card
  passages: [                     // 0, 1 or 2 passages
    { id: "p1", title: "The Lantern Walk", byline: "",
      genre: "Literary text", lexile: "about 650L (estimate)",
      paragraphs: [               // each paragraph is an array of sentences (hot-text targets)
        ["Mira held the paper lantern with both hands.", "..."],
        ...
      ],
      lines: null                 // poetry: array of stanzas, each an array of lines (used instead of paragraphs)
    }
  ],
  items: [ /* see types below */ ]
});
```

Optional on any item: `stem` (a string or array of strings). It is a short text the child reads for this question, such as a mini-passage, a dictionary entry or sentences to compare, and is shown in a box above the answer controls. Use it instead of packing that text into `prompt`.

Fields every item has:
- `id`, `type` and `points` (1 or 2).
- `std`: an array of exact codes, for example `["3.T.T.1.c"]`, or `["3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"]` for a GUM row. GUM codes are `3.L.GC.1:<level>:<slug>`, where level is M (Master), R (Reinforce), I (Introduce) or C (Continue) and the slug is made from the chart row by `verification/gen-standards.py`. Copy the exact code from standards.js.
- `dok`: 1, 2 or 3.
- `prompt`: shown to the child.
- `clue`: the strategy, which never contains the answer.
- `why`: the walk-through. It names the right answer and says why.

Paragraph and sentence references:
- **Paragraph** numbers start at 1, matching the numbers the child sees.
- A paragraph whose first sentence starts with `"Box: "` is a text box (a sidebar such as "Did You Know?"). It is shown set apart and is not numbered. To show a real picture, diagram, map or graph, use a figure (§5e) rather than words that describe one.
- **Sentence** references use `"p1:3:2"`, meaning passage p1, paragraph 3, sentence 2 (both counted from 1).

| type | Fields | Scoring |
|---|---|---|
| `mc` | `choices: [{text, correct?}]` (4) | 1 point |
| `ms` | `choices` (5–6, 2–3 correct), `pick: n` | 2-point item: 2 if exactly right; 1 if at least half the correct choices and at most one wrong. 1-point item: exact only |
| `ebsr` | `partA: {prompt, choices}`, `partB: {prompt, choices, pick?}` | 2 = both right; 1 = Part A right only; 0 if Part A is wrong |
| `dropdown` | `text: "The cat {0} the yarn {1}."`, `slots: [{options:[...], answer:index}]` | One slot: 1 point. Two slots on a 2-point item: 1 point each |
| `hottext` | `source: "p1"` or `options: [...]`; `targets: ["p1:2:1", ...]` (selectable sentences); `answer: [ref...]`; `pick: n` | Exact match; on a 2-point item with 2 answers, 1 point each |
| `order` | `steps: ["first", "second", ...]` (correct order, 3–5); optional `orderNote` replaces the default instruction | 2 = all in place; 1 = one adjacent pair swapped, or (5 steps) all but two in place. 1-point item: exact only |
| `match` | `rows: [{text, answer: colIndex}]`, `cols: ["Fact", "Opinion"]` | 2-point item: 2 = all rows right, 1 = all but one (all but two when each column is used exactly once, because one mix-up breaks two rows). 1-point item: exact only |

The narrowing step (Help 2) for each format:

| type | Help 2 |
|---|---|
| `mc` | Cross out two wrong choices |
| `ms` | Cross out one wrong choice and say how many to pick |
| `ebsr` | Lock in the correct Part A |
| `dropdown` | Remove wrong options |
| `hottext` | Point to the paragraph |
| `order` | Place the first step |
| `match` | Fill one row |

### 5b. Standalone sets (Language, Revising)

Language and revising sets use the same `PP.addSet` shape.
- **Grammar and vocabulary sets** can have `passages: []`. Each item then carries its own sentence or sentences in `prompt`, or in `dropdown.text`, or as `hottext.options`.
- **`hottext` without a passage** uses `options: ["sentence 1", ...]` and `answer: [index, ...]` (0-based) in place of `targets` and refs.
- **Revising sets** use one short passage, marked `draft: true` (paragraph numbers are hidden and the sentences carry their own numbers, (1), (2) …): a student's draft of 6–10 sentences, given as numbered sentences inside paragraphs. Items refer to it, for example "Which sentence should be added after sentence 4?"

### 5c. Writing task (`js/data/tasks/*.js`)

```js
PP.addTask({
  id: "W-TASK-01",
  title: "Should our school have a reading buddy program?",
  sources: [ /* 2 passages, same shape as set passages, 150-300 words each, informational */ ],
  prompt: "Your school is deciding whether ... Write an opinion essay ...",   // states the topic and audience
  reasons: ["Reading buddies help younger students read better.", "Older students learn too."],   // the PROVIDED reasons
  std: ["3.T.T.3.c", "3.T.RA.1.c", "3.T.SS.1.c", "3.T.SS.1.d", "3.L.GC.2.b", "3.L.GC.2.c"],
  planner: { opinion: "...", reasonPrompts: ["...", "..."], conclusion: "..." },   // child-facing guiding questions
  evidence: [ { reason: 0, source: "p1", ref: "p1:2:1", note: "..." } ],          // where each reason is supported (for parents)
  model: { paragraphs: ["...", "..."], notes: ["Intro states the opinion ...", ...] },   // a model 8-point response, shown to parents after writing
  lookFors: { purpose: ["..."], evidence: ["..."], conventions: ["..."] }          // prompt-specific scoring notes per trait
});
```

### 5d. Practice Test forms (`section: "test"`, `kind: "form"`)

A Practice Test is one set file with several passages and a mixed set of items, built to the blueprint's proportions.
- Each item carries `passages: ["p1"]` to name the passage or passages shown beside it, or `passages: []` for standalone language items.
- Group the items by passage, in the order a child would meet them on the real test.
- A form uses only **new** passages and items. It never reuses sets the child has already practiced.

### 5e. Figures and bold words (PP-003)

Some standards are about what the eye sees: text features (3.T.C.1.b), page design (3.T.T.2.a), maps and captions (3.T.SS.1.a), and pictures and graphs as context clues (3.L.V.3.a). For these, a passage, a question or a lesson example can show an original figure.

```js
{ src: "assets/figures/tc1b-beaver-lodge.svg",   // required: an original file in assets/figures/
  alt: "Diagram of a beaver lodge cut in half ...", // required: says what the picture shows
  label: "Figure 1",                               // optional: shown in bold before the caption
  caption: "Inside a beaver lodge",                // optional: shown under the picture; **bold** works
  width: 320 }                                     // optional: largest width in px (default 380)
```

Where a figure can go:

| Place | Field | Shown |
|---|---|---|
| Passage (prose only) | `figures: [{ after: k, ... }]` on the passage | after raw block `k` (the same 1-based count refs use; `0` = before the first block). A figure is not a paragraph: paragraph numbers and refs do not change |
| Item | `figure: {...}` (or an array) | in the stem box, after the `stem` text |
| Learn It example | `teach.example(s)[i].figure` | inside the example box, after `lines` |
| Watch Me example | `learn[i].figure` | inside the example box, after `show` |

**Bold words.** Write `**word**` inside a passage sentence, a `stem` line, a teach example line or a Watch Me `show` line, and it is printed in bold. Do not put bold in a sentence that a `hottext` item targets (the review screen prints those sentences as plain text), in `prompt`, choices, `clue`, `why` or `note`. Clue-word highlighting skips a sentence that has a bold word.

**Rules for figures.**
- Original, simple line-art SVG drawn for the site. No GaDOE art, no copied or traced pictures, no photos of real children. If people appear, include Black children naturally.
- Educationally necessary: the figure is what the item or example is about. No decorative pictures.
- Text in the SVG is at least 14px on a 320px phone. The checker computes this from the smallest `font-size` and the `viewBox` width, at 198px wide for a Learn It example and 220px elsewhere. In practice: a 300–320-unit-wide viewBox with text of 21–22 units.
- Meaning is never carried by color alone: use labels, numbers, patterns and line styles too.
- Alt text lets a screen-reader user answer the item. It names every label and every value a question depends on. If the skill is purely visual, still describe it fully.
- An item that uses a figure must have one answer that is plain from the figure, and its distractors must be clearly wrong from the figure (or from the text, when the item says to use both).
- Figures sit in a white box, scale to the width of their column with no sideways scroll, and print without breaking across pages.
- `verification/check-content.js` fails a figure whose file is missing, whose `src` is not `assets/figures/<name>.svg|png`, whose alt text is under 5 words, whose `after` is out of range, or whose SVG has a script or outside link; it warns when SVG text would be under 14px. It fails unmatched `**` and bold inside hot-text targets.
- The local harness server must serve `.svg` as `image/svg+xml` (GitHub Pages does).

## 6. Content rules

1. **Original passages only.** Never copy GaDOE released items, test passages or published books. Passages may draw on the owner's ReadUp library (owner's content) after rewriting for the format.
2. **Grade 3 text complexity.** About 450–800L for passages (estimated). Literary 250–600 words; informational 200–500 words; poems 8–24 lines.
3. **Exactly one defensible answer** for `mc` and Part A. For `ms`, every correct choice is clearly supported and every wrong one is clearly not.
4. **Evidence items** (`ebsr` Part B, `hottext` evidence) must quote sentences that actually appear in the passage.
5. **Every item carries `std` codes** from the assessed list in §2. Grammar comes only from the GUM Master and Reinforce rows.
6. **The same content rules as Sentence Sense:**
   - No participle after a being verb in grammar items.
   - Never teach material not yet introduced in grade 3.
   - Fix-it items have exactly one error.
   - American English.
7. **`why` names the correct answer. `clue` never gives it away.**
8. **Distractors are plausible misreadings,** not silly ones, at the same length and in the same style as the key.
9. **Topics are varied and age-appropriate,** with Georgia settings welcome. No brand names. No real living private people.

## 7. Quality gates (every release)

- The automated content checker (`verification/check-content.js`) passes.
- Two independent grammar and content reviewers pass every new item: no MUST findings left.
- The browser harness (`verification/guard.py`) passes.
- A phone check at 320, 375 and 390px shows no sideways scroll.
- An independent screen audit passes.

## 8. Skill lessons (`js/data/lessons/*.js`)

*(Partly superseded: since 2.1 the home page is the category catalog in `js/data/catalog.js`, and lessons have five steps, or four for hands-on skills; see §8b.)* The home page lists every Georgia standard (`js/data/standards.js`) under its GaDOE heading. Tapping one opens its skill page with four steps: **Teach → Learn → Practice → Test**. A lesson file holds the lessons for one standard group and calls `PP.addLesson({...})` once per standard. A file is listed in `manifest.lessons` only after it passes the checker and two reviews.

```js
PP.addLesson({
  code: "3.T.T.1.b",                // exact code from standards.js (GUM rows: "3.L.GC.1:R:...")
  title: "Story elements: characters, setting, problem and solution",   // kid-friendly skill name
  teach: {                          // I do: the lesson
    big: "One sentence: the big idea, in a child's words.",
    points: ["3-5 short teaching sentences"],
    words: [{ term, means }],       // optional key words
    example: { label, lines: [..], note: "what to notice" },   // or examples: [ ... ] (1-2)
    tip: "One test tip (how this shows up on the Milestones)."   // optional
  },
  learn: [                          // we do: 2-3 worked examples, revealed one step at a time
    { show: ["text the child reads"], ask: "the question", steps: ["2-4 thinking steps"], answer: "the answer, as a sentence" }
  ],
  write: { prompt: "...", checklist: ["I ..."], rows: 6 },  // optional; expected for writing (Constructing Texts) standards
  parent: "1-2 sentences: how a grown-up can practice this at home.",
  passages: [ /* same shape as §5; short (100-300 words) */ ],
  practice: [ /* 4-7 items, §5 item schema */ ],    // you do, with Help me
  test: [ /* 4-6 items, 5+ points, no hints */ ]
});
```

Rules on top of §5 and §6:
- Every item has `passages: [...]` naming the passage(s) shown beside it, or `[]` for none (then put the reading text in `stem`).
- Item `std` defaults to the lesson code. If given, it must include the lesson code. Lesson items may practice standards that are not assessed (Foundations, GUM Introduce/Continue rows); the page says so.
- The test uses different passages and sentences than Practice and Learn, so mastery is not memory.
- Item ids start with `SK-` and are unique across the whole site.
- Passed the skill check = at least ceil(80%) of the check's points, stored as `mastered`. Progress is saved on the device only.
- Writing standards are tested on the Milestones through revising and editing questions. Their Practice and Test use those formats (choose the best sentence to add, the best transition, the best ending, and so on), and the lesson adds a `write` activity scored by a grown-up with the checklist.

### 8b. Lesson keys, multiple codes, clue words, coaching (2.1)
- `key` (optional): a unique id when one standard has more than one lesson, for example the six text-structure lessons. Defaults to `code`.
- `codes` (optional): every Georgia code the lesson targets. It must include `code`. Each code is shown on the skill line and the skill page.
- `clues: { words: [...], ask: "the one question to ask", draw: "the organizer to draw" }`: shown as a clue-word box in Learn It. In practice, the words can be highlighted in the passage.
- `coach: { mixup, strong, notyet, ido, wedo, youdo, everyday }`: shown in the grown-up box as "Common mix-up", "What to listen for" and "Teach it in 5 minutes".
- **Steps (2.1):**
  1. Learn It (`teach`)
  2. Watch Me (`learn`)
  3. Practice Together (`practice`): the first half of `practice`, with Help me.
  4. Try It Yourself (`try`): the second half of `practice`. Help unlocks after one wrong try.
  5. Test Your Knowledge (`test`)

  Lessons with an `activity` keep: Learn It, Watch Me, Practice, Check.
- `clues.groups` (optional): the clue words sorted by structure, used by the "which structure is it?" lesson. When it is present, clue words are not highlighted in passages. Highlighting is also off in Test mode, which stays unaided.
- `clues.highlight` (optional): set to `false` to show the clue-word box but turn off passage highlighting in practice.
