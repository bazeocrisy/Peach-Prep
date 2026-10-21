# PP-004 exam: review of the PP-003 §E2 full-length exam spec, and an implementation plan

Agent: `exam`. Date: 2026-10-20. Worktree `/home/claude/pp-fix` (branch `pp-003-fixes`).
Scope: documentation only. I changed no code or content, and this file is the only one I wrote.

Sources used:
- Blueprint: `scratchpad/gadoe/7bf55d31-GM_Gr3_ELA_Blueprint.txt` (GaDOE, August 2025). I checked the page 1 cell layout against the page image `scratchpad/gadoe/img/bp-1.png`.
- Rubric: `de84ed03-GM_Rubric_Gr3.txt` (August 2026).
- Writer's Checklist: `ce3c8549-GM_Checklist_Gr3.txt` (2026).
- Infographic: `b2ea2ce9-GM_Online_Study_and_Assessment_Guides_Infographic.txt`.
- The spec under review: `docs/audits/PP-003-ASSESSMENT-ALIGNMENT.md` §E2.
- Code read in full: `js/engine/player.js` (626 lines) and `js/writing.js` (248 lines).
- Code read in the relevant parts: `js/pp.js`, `js/app.js`, `js/skills.js` (progress store), `js/engine/items.js` (the type API), `index.html`, `verification/check-content.js`, `verification/check-writing.js`, `verification/guard.py`, `verification/readability.py`, `docs/SPEC.md` §2–§7, `js/data/site.js`, `js/data/alds.js`, `js/data/sets/PT-1.js`.

Shorthand used throughout:
- **IT** = Interpreting Texts. **CT** = Constructing Texts.
- **C+SS** = Context + Structure & Style. **T** = Techniques. **RA** = Research & Analysis. **L** = Language (Grammar Conventions + Vocabulary).

---

## 1. Blueprint facts, re-verified

| Fact | Blueprint text / location | §E2 says | OK? |
|---|---|---|---|
| 49 items, 41 count toward the score | p.2 table "Total 49"; footnote 4: "Of the 49 items, 41 contribute to the student's ELA score." | 41 scored, recommends no unscored items | Yes |
| 8 field-test items, 0 points (IT 6, CT 2) | p.2 "Field Test Items³ 8 / 0 / 6 / 0 / 2 / 0" | — | Yes |
| 60 points: IT 34, CT 26 | p.1 "34", "26", "Total Points 60"; p.2 totals 33/34 and 16/26 | 34 / 26 / 60 | Yes |
| 1-point SR+TE: 28 items (IT 20, CT 8) | p.2 row 1 | 20 / 8 | Yes |
| 2-point TE: 12 items, 24 points (IT 7 / 14, CT 5 / 10) | p.2 row 2 | 7 / 5 | Yes |
| One 8-point extended writing task, CT | p.2 row 3 "1 / 8 / 0 / 0 / 1 / 8" | 1 essay, 8 points | Yes |
| 1-point TE target range 0–5 | footnote 2 | "at most 5 of the 28" | Yes |
| IT cells: C+SS 6, T 16, RA 6, L 6 | p.1 image. C+SS share one merged "6"; GC+V share one merged "6" | 6/16/6/6 | Yes |
| CT cells: C+SS 6, **T+RA 8 (one merged cell)**, L 12 | p.1 image. The "8" spans the Techniques and RA rows | 6 / 8 (essay) / 12 | Yes, but "8 = the essay" is an inference (see C5) |
| DOK 1: 3–6 points (5–10%); DOK 2: 24–36 (40–60%); DOK 3: 12–21 (20–35%); DOK 4: 8 (13%) | p.2 DOK table | target 5/31/16/8 | Yes, in range |
| TE variants | footnote 1: drag-and-drop, drop-down, EBSR, match, reorder, hot text highlight, multiple-part, multiple-select | — | Yes |
| "5.L.V.3 (e)" under CT Vocabulary | p.1, printed exactly this way | read as 3.L.V.3.e | Yes (typo flagged, as `check-content.js:301-305` also does) |
| 3.L.GC.1 assessed only from the GUM Master/Reinforce rows; CT column only | p.1 footnote * and the image | CT-L only | Yes |
| Timing, section layout, field-test placement and whether field-test items are identified to students | **Not in the blueprint, rubric, checklist or infographic** | partly asserted (see C2–C4) | **UNVERIFIED** |

The §E2 arithmetic is correct: 28 + 12 + 1 = 41 scored items, and 20 + 14 + 8 + 10 + 8 = 60 points. Its errors are in the **section split** and in claims about the **real test** that no source supports.

## 2. Corrections to §E2

I did not edit `PP-003-ASSESSMENT-ALIGNMENT.md`; it was not in my assignment. These corrections are for the lead to apply, or to supersede with this plan.

| # | §E2 location | Problem | Correction |
|---|---|---|---|
| C1 | E2.2 table | "about 16 items / 22 points" + "about 25 items / 30 points" + 1 essay = **42 items**. The blueprint has 41 scored items, which is 40 auto-scored items plus the essay. | Section 1: 18 items / 24 points. Section 2: 22 items / 28 points. Section 3: essay / 8 points. That totals 41 items and 60 points (§4 below). |
| C2 | E2.2 bullet 1 | "the child cannot go back into the section, as on the real test." Nothing official says this. | **UNVERIFIED.** Section lock is a **Peach Prep design choice**. Do not say "as on the real test". |
| C3 | E2.2 intro | "The infographic confirms Section I ... and Sections 2 and 3 ..." The infographic names *sample tiles* in GaDOE's Online Study/Assessment Guides ("Section I: ICT Text sets", "Sections 2 & 3 Sample Text Sets & Items ... standalone constructing texts items", "Grades 3, 5, 8 ... each have an Extended Writing Task"). It does not describe the operational form's layout. | Three sections, and an essay in Grade 3, are a reasonable **inference** from the tile names. The essay's section and the item split by section are **UNVERIFIED**. Peach Prep's layout is a design choice. |
| C4 | E2.9 | "shown during the test exactly like the others. The real test does not identify them either." The blueprint is silent on whether field-test items are identified. This also conflicts with the PP-004 rule that practice-only items be clearly labelled. | Any optional unscored item is **labelled on screen during the test** ("Extra practice question: not counted in your score"), on the navigator and on results. Remove the claim about the real test. Never use "field test" on screen or in item data. |
| C5 | E2.1 / E2.5 | "Constructing 8 = the essay" and "DOK 4 = the essay" are stated as fact in E2.5. The blueprint gives neither. The rubric's Trait 3 footnote also cites 3.L.GC.2.b and 3.L.GC.2.c, so another reading puts part of the essay inside CT Language. | Label both as **Peach Prep inferences**. Results show the essay as its own row, "Writing task (0–8)", and never split it into Language. |
| C6 | E2.6 "spell-check off" | No official source says spell-check is off on the test. `js/writing.js:101` already tells children "Spell-check is off, like on the test." | Spell-check off is a **design choice** in the exam. Flag to the lead: "like on the test" at `js/writing.js:101` is an unverified claim (not my file). |
| C7 | E2.6 | "two provided reasons", "two sources", "each reason supported in both sources" are presented as requirements. The rubric only says "the provided reasons" and "source(s)". | Label these as Peach Prep authoring conventions, the same ones W-TASK-01/02 follow (verified in §E3.2). |
| C8 | E2.10 line references | Stale on this branch: | |
| | | "first-code skill only, `player.js:355`" | Now `player.js:414-424` (an item counts under every area it is tagged with). |
| | | "`stage-confirm` ... `player.js:293-301`" | Now `finish()` at `player.js:351-361`. |
| | | Form results "do not say shorter" | `player.js:426-430` now prints the shortened-test note. |
| | | §E3: "the evidence key is never shown" | Superseded: `writing.js:157-177` renders it, and `writing.js:191` adds "not an official Georgia Milestones score". |
| C9 | E2.1 (consequence, not an error) | If the CT "8" is the essay, CT Techniques expectations get no auto-scored slot of their own. | Cover them as **secondary** `std` codes on CT C+SS items where natural. Record the CT expectations left uncovered (3.T.T.1.e). |
| C10 | E2.3 Lexile | "about 450–800L" reads as GaDOE's figure. | It is SPEC §6.2's own estimate. Label it "Peach Prep estimate (SPEC §6.2), not a GaDOE figure". |

**Timing:** there is still no verified official time limit (`PP-003-SOURCE-VERIFICATION.md` row g). The exam is **untimed** by design. It may show an optional elapsed-time readout, which the child can hide. No screen states or implies an official time.

## 3. Design decisions (Peach Prep, not GaDOE)

1. **41 scored items**: 40 auto-scored items plus 1 essay, worth 60 points.
2. **No unscored items in v1.** An optional 8-item "extra practice" block can come later (Phase 6). If added, it is opt-in at the start, labelled on every screen, and excluded from every total.
3. **Three sections** (see §4), with a review screen at the end of each section. A finished section is locked, so the essay step cannot be used to change earlier answers. All of this is a design choice and is labelled that way in the parent guide.
4. **Untimed. Can span several days.** Answers are saved on this device.
5. **Separate registry** (`PP.addExam`, not `PP.addSet`). If exam items were registered as sets, they would leak into skill pages, through the "Practice sets with questions on this skill" list (`skills.js:891-899`), and into practice mode. The guard tests and `check-content` loops also iterate `PP.sets`.
6. **Separate storage key** `pp.exam.<id>`. The exam never reads or writes `pp.progress.v1`, never marks a skill mastered, and never touches `pp.task.*`.
7. **Honest labels.** The title is "Full-Length Practice Test 1". Its card and results say it follows the blueprint's question counts and points, and that it is practice made by Peach Prep, not by GaDOE. It is never shown as a Milestones score, achievement level, scale score or Lexile.

## 4. Item blueprint: PX-1 (41 scored items, 60 points)

Cells are named IT-CSS, IT-T, IT-RA, IT-L, CT-CSS, CT-L and CT-TRA (the essay). TE = technology-enhanced. The first `std` code sets the reporting cell **only through the explicit `cell` field**; the reporting is never derived from the code. GUM codes are copied exactly from `js/data/standards.js`.

### Section 1: text sets A (story) and B (paired informational). 18 items, 24 points

| # | Passage | Cell | std (first = primary) | Type | Pts | DOK |
|---|---|---|---|---|---|---|
| 01 | P1 story | IT-CSS | 3.T.C.2.a | mc | 1 | 3 |
| 02 | P1 | IT-T | 3.T.T.1.b | mc | 1 | 2 |
| 03 | P1 | IT-T | 3.T.T.1.c, 3.T.RA.2.a | ebsr | 2 | 3 |
| 04 | P1 | IT-T | 3.T.T.1.a | mc | 1 | 2 |
| 05 | P1 | IT-T | 3.T.T.1.d | mc | 1 | 3 |
| 06 | P1 | IT-T | 3.T.T.1.b | order | 2 | 2 |
| 07 | P1 | IT-L | 3.L.V.3.a, 3.L.V.1.a | mc | 1 | 2 |
| 08 | P2a | IT-CSS | 3.T.C.1.b | mc | 1 | 2 |
| 09 | P2a | IT-T | 3.T.T.2.a | mc | 1 | 2 |
| 10 | P2a | IT-L | 3.L.V.2.a, 3.L.V.2.b | mc | 1 | 1 |
| 11 | P2b | IT-CSS | 3.T.SS.1.a | match (cause / effect) | 2 | 2 |
| 12 | P2b | IT-T | 3.T.T.2.b | mc | 1 | 3 |
| 13 | P2b | IT-T | 3.T.T.2.a | hottext (1 answer) | 1 | 2 |
| 14 | P2b | IT-RA | 3.T.RA.1.a | mc | 1 | 3 |
| 15 | P2b | IT-L | 3.L.V.3.d, 3.L.V.3.b, 3.L.V.3.a (dictionary entry for a homograph, in `stem`) | ebsr | 2 | 2 |
| 16 | P2a+P2b | IT-T | 3.T.T.2.c | ms (pick 2) | 2 | 3 |
| 17 | P2a+P2b | IT-RA | 3.T.RA.1.b | match (fact → which text / subtopic) | 2 | 3 |
| 18 | P2a+P2b | IT-RA | 3.T.RA.2.b | mc | 1 | 2 |

### Section 2: text sets C (poem), D (opinion), E (student draft) and standalone items. 22 items, 28 points

| # | Passage | Cell | std | Type | Pts | DOK |
|---|---|---|---|---|---|---|
| 19 | P3 poem | IT-CSS | 3.T.SS.2.a | mc | 1 | 1 |
| 20 | P3 | IT-T | 3.T.T.4.a (rhyme scheme) | mc | 1 | 1 |
| 21 | P3 | IT-T | 3.T.T.4.a (stanza / repetition effect) | mc | 1 | 2 |
| 22 | P3 | IT-L | 3.L.V.3.c | mc | 1 | 2 |
| 23 | P4 opinion | IT-CSS | 3.T.C.1.a | mc | 1 | 3 |
| 24 | P4 | IT-T | 3.T.T.3.a (reasons) | mc | 1 | 2 |
| 25 | P4 | IT-T | 3.T.T.3.a (best evidence for a reason) | mc | 1 | 3 |
| 26 | P4 | IT-RA | 3.T.RA.2.a | hottext (2 answers) | 2 | 3 |
| 27 | P4 | IT-L | 3.L.GC.2.a | mc | 1 | 2 |
| 28 | P5 draft | CT-CSS | 3.T.SS.1.c | dropdown (1 slot) | 1 | 2 |
| 29 | P5 | CT-CSS | 3.T.SS.1.d, 3.T.T.2.d | order (sentences in the closing paragraph) | 2 | 2 |
| 30 | P5 | CT-CSS | 3.T.SS.1.b, 3.T.C.1.c | ms (2 features that fit purpose and audience) | 2 | 3 |
| 31 | P5 | CT-L | 3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs | dropdown (1 slot) | 1 | 1 |
| 32 | P5 | CT-L | 3.L.GC.2.c | mc | 1 | 2 |
| 33 | P5 | CT-L | 3.L.V.3.e | mc | 1 | 2 |
| 34 | standalone (a two-stanza student poem in `stem`) | CT-CSS | 3.T.SS.2.b, 3.T.T.4.b | mc | 1 | 2 |
| 35 | standalone | CT-L | 3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi | mc | 1 | 2 |
| 36 | standalone | CT-L | 3.L.GC.1:M:use-reflexive-pronouns | mc | 1 | 1 |
| 37 | standalone | CT-L | 3.L.V.2.c | mc | 1 | 2 |
| 38 | standalone | CT-L | 3.L.GC.2.b, 3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra | ms (2 correctly joined sentences) | 2 | 2 |
| 39 | standalone | CT-L | 3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa, 3.L.GC.1:R:capitalize-proper-nouns | hottext with `options` (2 answers) | 2 | 2 |
| 40 | standalone | CT-L | 3.L.GC.2.d, 3.L.V.1.b | dropdown (2 slots: an adjective and an adverb) | 2 | 2 |

### Section 3: extended writing task

| # | Sources | Cell | std | Type | Pts | DOK |
|---|---|---|---|---|---|---|
| 41 (`PX-1-W`) | S1 + S2 | CT-TRA (inferred, C5) | 3.T.T.3.c, 3.T.RA.1.c, 3.T.T.2.d, 3.T.SS.1.c, 3.T.SS.1.d, 3.L.GC.2.b, 3.L.GC.2.c | essay (rubric 3+3+2) | 8 | 4 (inferred) |

### Totals (each checked by hand; `check-content` must assert them, §8)

| | 1-pt items | 2-pt items | Points | Blueprint |
|---|---|---|---|---|
| IT-CSS | 01, 08, 19, 23 = 4 | 11 = 1 | 6 | 6 ✔ |
| IT-T | 02, 04, 05, 09, 12, 13, 20, 21, 24, 25 = 10 | 03, 06, 16 = 3 | 16 | 16 ✔ |
| IT-RA | 14, 18 = 2 | 17, 26 = 2 | 6 | 6 ✔ |
| IT-L | 07, 10, 22, 27 = 4 | 15 = 1 | 6 | 6 ✔ |
| **IT** | **20** | **7** | **34** | 20 / 7 / 34 ✔ |
| CT-CSS | 28, 34 = 2 | 29, 30 = 2 | 6 | 6 ✔ |
| CT-L | 31, 32, 33, 35, 36, 37 = 6 | 38, 39, 40 = 3 | 12 | 12 ✔ |
| CT-TRA | — | — | 8 (essay) | 8 ✔ |
| **CT** | **8** | **5** + essay | **26** | 8 / 5 / 1 / 26 ✔ |
| **Test** | **28** | **12** + 1 essay = 41 items | **60** | 41 / 60 ✔ |

- **Section totals:** S1 is 18 items / 24 points. S2 is 22 items / 28 points (the poem has 4 items / 4 points, the opinion text 5 / 6, the draft 6 / 8, and the standalone items 7 / 10). S3 is 1 / 8. Total: 41 / 60.
- **1-point TE items:** 13, 28 and 31, which is 3 (blueprint range 0–5 ✔). The other 25 one-point items are `mc`.
- **2-point TE types:** ebsr 2 (03, 15), ms 3 (16, 30, 38), hottext 2 (26, 39), match 2 (11, 17), order 2 (06, 29), dropdown 1 (40). That is 12 ✔.
- **DOK by points:**
  - DOK 1: 10, 19, 20, 31, 36 = **5** (8.3%).
  - DOK 3: 01, 03, 05, 12, 14, 16, 17, 23, 25, 26, 30 = 1+2+1+1+1+2+2+1+1+2+2 = **16** (26.7%).
  - DOK 2: the remaining 52 − 5 − 16 = **31** (51.7%).
  - DOK 4: the essay = **8** (13.3%).
  - All four are in range ✔. The margin above the DOK 3 floor is 4 points: if reviewers downgrade more than 4 DOK 3 points, re-author an item rather than re-tag one.
- **Expectations covered** (as the primary or a secondary code):
  - All IT expectations except **3.T.C.2.c** ("With adult support, identify the context in which a text was written"). It is hard to assess fairly in one form.
  - All CT expectations except **3.T.T.1.e** (narrative writing). W-REV-02 already practises it.
  - Record both gaps on the exam's parent card.

## 5. Passages (all original; no GaDOE passages, items or art)

| ID | Genre | Words | Topic (working title) | Notes |
|---|---|---|---|---|
| P1 | Literary story | 450–600 | "The Trail Map": a boy on a Georgia state-park scavenger hunt learns to listen to his younger sister | first-person narrator (for item 01), dialogue, a problem and its solution, a change in the character, a lesson |
| P2a | Informational | 220–320 | "Inside a Honeybee Hive" | headings, one original SVG figure with a caption (for item 08), a word with an affix (item 10) |
| P2b | Informational | 220–320 | "From Flower to Honey" | cause/effect and sequence; a homograph in context (item 15). Same topic as P2a, different focus (for items 16 and 17) |
| P3 | Poem | 16–20 lines, 4–5 stanzas | "Rain on the Tin Roof" | a regular rhyme scheme, one simile, one metaphor, a repeated line |
| P4 | Opinion | 280–380 | "Our Town Needs More Shade Trees" | a clear opinion, 2–3 reasons, evidence; written for a town audience (item 23) |
| P5 | Student draft (revising), `draft: true` | 120–160, 10 numbered sentences | "The Brown Thrasher" (an informational draft by a student) | one weak transition, a closing paragraph out of order, one irregular-past error, one agreement error, one vague word |
| S1 | Essay source, informational | 180–260 | "Learning Through Play" | games and reading/math practice; games and turn-taking |
| S2 | Essay source, informational | 180–260 | "The Game Shelf at Pine Hill Library" (an invented town and library) | the same two reasons, from a library's point of view |

- **Lengths** follow SPEC §6.2 (literary 250–600; informational 200–500; poems 8–24 lines) and SPEC §5c (sources 150–300). They stay within the checker's limits (warnings under 100 and over 650 words; `check-writing.js` SOURCE_WORDS 150–300).
- **Text complexity:** about 450–800L is a **Peach Prep estimate** (C10). Screen every passage with `verification/readability.py`. Its Flesch-Kincaid heuristic is "not a Lexile measure".
- **Topics avoid every existing passage:** kites, half-moon cakes, fireflies, sea turtles, the Okefenokee, a school garden, the Blue Pitcher, leaves, owls, a class fish, a birdhouse, reading buddies and a skate park. This follows SPEC §5d ("never reuses sets the child has already practiced"). Topics are varied, with Georgia settings, invented people and no brand names (for example, "board games", never a product name).
- **Factual passages** (P2a, P2b, P4, P5, S1, S2) need a fact check against a credible source, recorded with URL and date in the review log. A wrong science fact in a key is a MUST finding.

## 6. Extended writing task (`PX-1-W`, embedded in the exam file)

- **Genre:** opinion, source-based, with provided reasons. The rubric (Aug 2026) Trait 1 says "clearly stated opinion"; Trait 2 says "elaborating on the provided reasons"; the 2026 checklist is opinion-only.
- **Prompt (draft):** "Your school librarian is deciding whether the library should lend board games to students. Write an opinion essay for the librarian that tells why the library should lend board games. Use the two reasons below. Use information from both sources, written in your own words."
- **Provided reasons:**
  1. "Board games help students practice reading and math."
  2. "Board games help students learn to work and play together."
  - Each reason is supported in both sources. This is a Peach Prep convention (C7).
- **Shape:** the SPEC §5c task shape (sources, prompt, reasons, std, planner, evidence, model, lookFors), stored as `exam.essay`. It is **not** registered with `PP.addTask`, so it never appears in Writing or the skill list, and its draft is not `pp.task.*`.
- **Model and calibration:** one 8-point model (180–260 words, 4–5 paragraphs, per `check-writing.js` MODEL_WORDS / MODEL_PARAS). I also recommend calibration responses at about 6, 4 and 2 points, which answers the PP-003 §E3 Medium finding.
- **During the exam:** the child sees Read, Plan, Write and Check (the verbatim checklist). The For-parents tab and the model are **hidden until the whole exam is turned in**.
- **Scoring:** a grown-up scores with the 3 + 3 + 2 rubric on the results screen. Until then the essay shows "Waiting for a grown-up to score (0–8)".

## 7. Engine work

### 7.1 What exists today (verified in code)

| Capability | Where | Reusable? |
|---|---|---|
| Multi-passage form, passages chosen per item (`item.passages`) | `player.js:199-219` | Yes |
| Test mode: no hints or feedback, Prev/Next, skipping allowed | `player.js:265-286` | Yes |
| Confirm with a blank count, then submit | `player.js:351-361`, `index.html:173-180` | Extend into a section review |
| Scoring and results by *area* (an item counts under every tagged area) | `player.js:402-462` | Replace for exams with scoring by `cell` |
| Review with three-step Show me how | `player.js:464-504` | Yes |
| Shortened-form honesty note | `player.js:426-430` | Pattern to reuse |
| Item types mc / ms / ebsr / dropdown / hottext / order / match, with `blank`, `answered`, `score`, `describe` and `answerText` | `js/engine/items.js` | Yes. Responses hold choice **indexes** (identity travels on data-i), so saved answers survive a reshuffle |
| Choice order kept per sitting in `ctx.order`, `ctx.orderA` and `ctx.orderB` | `items.js:109, 138, 184, 192` | Save these so a resumed test looks the same |
| Leave-guard (`inProgress`, `canLeave`, `beforeunload`) | `player.js:581-586`, `app.js:71-77, 320` | Change the message for exams (answers are saved) |
| Finished-test history marker | `app.js:63-69` (`markDone`, `#play/` only) | Add `#exam/` |
| Test answers saved | **None.** The player has no storage | New |
| Essay: Read / Plan / Write / Check / Score tabs, guarded `pp.task.<id>` storage, word and paragraph count, spell-check off, verbatim checklist, rubric radios, evidence key, model behind a confirm | `writing.js:16-35, 59-217` | Yes, after parametrising the storage key and adding an exam mode |
| Navigator, flag for review, sections, section lock, break screens | **None** | New |
| Scoring by blueprint cell | **None** (by area only) | New |
| Drag-and-drop and multiple-part (non-EBSR) items | **None** | Optional, Phase 6 |

### 7.2 What is new or changed

| Part | Work | Files |
|---|---|---|
| **Exam registry and multi-section set type** | `PP.addExam(x)` with its own `exams` / `examById` (never in `PP.sets`). The schema is below. At load, compile each section into a pseudo-set `{id: x.id+":"+sec.id, kind: "exam-section", passages: <that section's>, items: <that section's>}` and run it through the existing player. | `js/pp.js` (addExam), new `js/engine/exam.js` (the `PP_EXAM` controller), `js/app.js` (`loadSets` also loads `PP_MANIFEST.exams` from `js/data/exams/<id>.js`; route `#exam/<id>`; the Practice Test section lists ready exams), `js/data/manifest.js` (`exams: []`), `docs/SPEC.md` (new §5f) |
| **Player hooks** (additive; behaviour for `PP.sets` is unchanged) | `start(setOrId, mode, opts)` accepts `opts = {exam, restore:{resp, order, pos}, onChange, onRender, onFinish}`. `ctxFor` seeds `resp` and `order` from `restore`. `onChange` calls `opts.onChange(i, resp)` so answers save. `finish()` calls `opts.onFinish()` (the section review) instead of the confirm. `inProgress()` is false when `opts.exam` is set, because answers are saved. Add `goto(i)`. | `js/engine/player.js` |
| **Navigator with flag for review** | A tile strip above the question: `<nav aria-label="Questions in this section">` with one button per item. Each button's label reads like "Question 7, answered, flagged", it carries `aria-current` on the current item, and its state is shown by text and icons, not colour alone. The tiles wrap on a 320px phone. A "Flag for review" toggle (`aria-pressed`) sits by Prev/Next. Flags are saved. | `js/engine/exam.js` (renders through `onRender`), `index.html` (`#exam-nav` and `#q-flag` containers), `css/styles.css` |
| **Save and resume** | A new key, **`pp.exam.<id>`**. It holds `{v:1, form:<fingerprint>, started, sec, pos, resp:{itemId:resp}, order:{itemId:{order,orderA,orderB}}, flags:[itemId], done:[secId], essay:{plan,draft,checks}, scores:{}, submitted:null\|date}`. Guarded load in the `writing.js:17-34` pattern: keep only fields of the right type. Validate every `resp` against `T[type].blank(item)` (same keys, same array lengths, indexes in range) and drop anything invalid. `form` is a hash of item ids, types, choice counts and keys. On a mismatch, say "This practice test was updated since you started" and offer to start over; never mix answers silently. If storage is off, keep the data in memory. **It never reads or writes `pp.progress.v1`, `pp.task.*` or `pp.skwrite.*`.** | `js/engine/exam.js` |
| **Section review, lock and break** | At the end of a section, a review screen lists unanswered and flagged items as links (`goto`), then "Finish Section N" with a confirm. After that the section's items are read-only and not navigable (a design choice, C2). A break screen follows: "Section 1 is done. Take a break. Your answers are saved." | `exam.js`, `index.html` (`stage-secreview`, `stage-break`), `css/styles.css` |
| **Essay section linked to `js/writing.js`** | Refactor without changing behaviour: `key()` takes an override; add `PP_WRITING.startEmbedded(task, {load, save, onDone, examMode:true})`, where exam mode hides the Score tab and model and adds "Finish Section 3". Export `PP_WRITING.renderScore(host, task, data, onScore)` so exam results can host the rubric. W-TASK-01/02 keep their current behaviour (guard §6 must still pass). | `js/writing.js`, `exam.js` |
| **Review and submit** | After Section 3, a final screen: "You finished all three sections. Turn in my test." Then submit and score. `markDone` adds the `#exam/` history marker. | `exam.js`, `js/app.js` (`markDone` regex) |
| **Results by cell** | Seven rows from `item.cell`, with no overlap: IT C+SS x/6, IT Techniques x/16, IT Research & Analysis x/6, IT Language x/6, CT C+SS x/6, CT Language x/12, Writing task x/8 or "waiting". Under each row, the codes missed, each linking to its skill page (`PP_SKILLS.open`). Then the existing per-item review with Show me how. | `exam.js` (reuses `buildReview` via a `PP_PLAYER` export) |
| **Honest labelling** | Card, header and results text: "Full-Length Practice Test 1 (Peach Prep practice, built to GaDOE's blueprint question counts and points)". Results: "Your practice score: N of 60 (up to 52 from questions, up to 8 from the essay scored by a grown-up). This is a Peach Prep practice score. It is not a Georgia Milestones score, and it does not predict an achievement level, a scale score or a Lexile measure." No percent-to-level mapping and no level words in results. If ALD text is shown at all, it is the existing "What Proficient work looks like (GaDOE DRAFT ALDs, October 2025)" next to the *standard*, never next to the child's score. | `exam.js`, `js/data/site.js` (section line), `js/parents.js` (how the exam works; layout and timing are Peach Prep's; the real test's layout and timing are not verified) |
| **Gating** (see §11) | `exam.js` starts an exam only if it is listed in `PP_MANIFEST.exams`, `x.status === "ready"`, **and** a runtime blueprint check passes (41 scored, 60 points, cell sums, 1-point TE ≤ 5). Otherwise it shows "This test is not ready" and never a partial exam. A draft preview runs only on `localhost`/`127.0.0.1`, behind a "Draft preview: incomplete, not for children" banner. | `exam.js`, `js/app.js` |

**Exam file schema (SPEC §5f, new):**
```js
PP.addExam({
  id: "PX-1", title: "Full-Length Practice Test 1", status: "draft",   // "ready" only after §9 passes
  review: { a: "docs/audits/work/px1-review-A.md", b: "docs/audits/work/px1-review-B.md",
            cold: "docs/audits/work/px1-cold-solve.md" },
  passages: [ /* P1..P5, same shape as set passages */ ],
  sections: [
    { id: "s1", title: "Section 1", items: [ /* 01-18; each item has cell, passages, std, dok, points */ ] },
    { id: "s2", title: "Section 2", items: [ /* 19-40 */ ] },
    { id: "s3", title: "Section 3", essay: true }
  ],
  essay: { id: "PX-1-W", cell: "CT-TRA", dok: 4, sources: [ /* S1, S2 */ ], prompt, reasons, std, planner, evidence, model, lookFors },
  extra: []   // optional unscored practice items (Phase 6): each { ..., unscored: true }
});
```

## 8. Tests to add

### `verification/check-content.js` (static; it loads `js/data/exams/*.js` on every run, so drafts are checked too)

- **X-1 totals:**
  - 40 auto-scored items + 1 essay = 41.
  - Points 52 + 8 = 60.
  - IT: 20 one-point and 7 two-point items, 34 points.
  - CT: 8 one-point and 5 two-point items, plus the essay, 26 points.
- **X-2 cells:** every item has `cell` from the fixed set. The sums are IT-CSS 6, IT-T 16, IT-RA 6, IT-L 6, CT-CSS 6, CT-L 12, CT-TRA 8.
- **X-3 cell/code agreement:**
  - The primary `std` is in that cell's blueprint list (reuse `BP_IT` / `BP_CT`, `check-content.js:306-309`).
  - GUM codes appear only in CT-L and only at M/R level (`checkStd` already enforces M/R).
- **X-4 DOK points:** DOK 1 in 3–6; DOK 2 in 24–36; DOK 3 in 12–21; essay `dok: 4` = 8.
- **X-5 types:**
  - One-point TE items ≤ 5.
  - Every 2-point item is TE (not `mc`).
  - Points are 1 or 2, except the essay.
- **X-6 labels:**
  - Every `extra` item has `unscored: true` and is outside the totals.
  - `/field[\s-]?test/i` appears in no exam string.
  - Exam ids never appear in `MAN.sets`.
- **X-7 originality:** no passage title, and no 8-word run (normalised), shared with any other set, task or lesson passage on disk.
- **X-8 gating:**
  - `MAN.exams` lists only `status: "ready"` exams.
  - `ready` requires the three `review` files to exist, and each to contain the line `MUST open: 0`.
- **X-9 essay:**
  - The §5c task checks run on `exam.essay`.
  - Sources are 150–300 words.
  - There are exactly two reasons.
  - Every `evidence.ref` resolves.
  - The model is 180–260 words.
  - Apply the `check-writing.js` copy-run rule (6 words) to the model.
- Also extend `verification/readability.py` (it globs sets, tasks and lessons only) and `verification/check-writing.js` to include exam passages and the essay.
- Flag to the lead: `check-writing.js:32` matches GUM codes with `/^3\.L\.GC\.1:[GUM]:/`. That accepts **M only** and rejects valid R rows. It is latent today, because W-REV uses no R codes. It should be `[MR]`.

### `verification/guard.py`, new section 14

The harness loads `verification/fixtures/PX-TEST.js`, a small synthetic exam with three short sections, via `page.add_script_tag` on localhost. It tests the engine without the real content. A second pass runs on PX-1 once its content exists.

- **14.1** With the production manifest:
  - `PP.exams` is empty.
  - `#exam/PX-1` lands on Home with the not-found note.
  - The Practice Test section has no full-length card.
  - A `status: "draft"` exam injected while on a non-localhost origin refuses to start.
- **14.2** Run every item correct. Results read 52 of 52 auto-scored points, with the essay waiting. After radios 3/3/2, the total reads 60 of 60 (fixture: its own maxima).
- **14.3** Run every item wrong: 0 points, and no page errors.
- **14.4** There are 7 cell rows, with maxima 6/16/6/6/6/12/8, and no area overlap.
- **14.5** Navigator:
  - The tile count equals the section's item count.
  - The answered and flagged states appear in each tile's `aria-label`.
  - Clicking a tile jumps to its item.
  - Prev and Next still work.
- **14.6** Flags survive a reload. The section review lists exactly the unanswered and flagged items.
- **14.7** Save and resume: answer 5 items, reload, and reopen. The position, responses and choice order are identical.
- **14.8** Damaged storage (`"hello"`, `[]`, `{resp:{"x":{v:99}}}`, a wrong `form` fingerprint):
  - no `pageerror`;
  - a bad response is dropped;
  - a fingerprint mismatch offers "start over".
- **14.9** Across a full exam run:
  - The `pp.progress.v1` string is **byte-identical** before and after.
  - No skill becomes mastered.
  - `pp.task.W-TASK-0*` is untouched.
- **14.10** After "Finish Section 1", Section 1 items cannot be reached (by tile, by Prev or with `PP_PLAYER.goto`).
- **14.11** Essay:
  - The draft typed in Section 3 survives a reload.
  - The Score tab and model are absent before submit.
  - The checklist has 11 lines.
  - W-TASK-01/02 behaviour is unchanged (existing §6 passes).
- **14.12** Honest text:
  - Results contain "not a Georgia Milestones score".
  - No text on the exam screens matches `/(Beginning|Developing|Proficient|Distinguished) Learner|achievement level|scale score/i` outside that disclaimer.
  - `/field.?test/i` appears nowhere on the exam screens.
- **14.13** No Help, Check, hint or feedback is visible on any exam item (mirrors 4.1).
- **14.14** Exam items never appear in `PP.sets`, in a skill page's "Practice sets" list or in practice mode.
- **14.15** Leaving mid-exam loses no answers, and the leave prompt says the answers are saved.
- **14.16** At 320, 375 and 390px there is no sideways scroll on the navigator, section review, break, essay or results screens.
- **14.17** (Phase 6 only) Unscored extras show the "not counted" label during the test, on the tile and in results, and the totals are unchanged.

The existing guard loops over `PP.sets` (§2–§4) are unaffected, because exams are not sets.

## 9. Content work and review process

**New content (PX-1):**
- 8 texts: 6 for the items plus 2 essay sources.
- 1 SVG figure for P2a.
- 40 items:
  - mc: 25
  - ms: 3
  - ebsr: 2
  - hottext: 3 (1 one-point in a passage, 1 two-point in a passage, 1 two-point with `options`)
  - match: 2
  - order: 2
  - dropdown: 3 (2 one-slot, 1 two-slot)
- 1 essay task with a planner, an evidence key, `lookFors` and an 8-point model, plus the recommended calibration responses at about 6, 4 and 2 points.
- Every item has `clue` and `why` (SPEC §6).
- No hint or `why` may reveal another item's answer **anywhere in the form**, across sections and in both directions.

**Review (SPEC §7, made specific):**

1. **Author self-check.** Run the gates: `node verification/check-content.js --all` with 0 failures, `python3 verification/readability.py`, and `node verification/check-writing.js`.
2. **Two independent reviewers (A and B).**
   - They work separately and see neither each other's notes nor the author's DOK rationale until both are done.
   - Each one checks, for every item:
     - one defensible key, and distractors that are plausible but clearly wrong;
     - the `std` and `cell` against the blueprint, and the DOK, with a reason for every DOK 3;
     - grade 3 language and GUM M/R scope;
     - no giveaways between items, across the whole form;
     - every evidence ref quotes a real sentence;
     - facts checked, with URL and date;
     - originality;
     - bias and sensitivity, and privacy (no real child).
   - Findings are tagged MUST or SHOULD. The logs go to `docs/audits/work/px1-review-A.md` and `px1-review-B.md`.
   - Any DOK disagreement is settled by re-authoring the item if it would push DOK 3 below 12.
3. **Cold solve.**
   - A third agent or person who has seen no keys takes PX-1 in the browser, in exam mode, from the screen only.
   - Every disagreement with the key sends the item back to step 2.
   - The solver also writes an essay from the prompt, which checks that the sources support both reasons and that the planner works.
   - Record the time taken per section as **Peach Prep's observed time**, never as an official time.
   - Log: `docs/audits/work/px1-cold-solve.md`.
4. **Fix rounds** until every log shows `MUST open: 0`. Re-run the gates and guard §14 on PX-1.
5. **Screen audit and phone check** (SPEC §7) at 320, 375 and 390px.

## 10. Estimates (working days, one developer and one author; the reviews are separate people or agents)

| Part | Days |
|---|---|
| SPEC §5f, schema and checker rules X-1…X-9, readability and check-writing hooks | 1.5–2 |
| Registry, route, manifest gating, runtime blueprint check, draft banner | 1 |
| Player hooks, navigator, flag | 1–1.5 |
| Save/resume with validation and fingerprint | 1–1.5 |
| Section review, lock, break, final review and submit | 1 |
| Essay embedding (`writing.js` refactor) and parent scoring in results | 1.5–2 |
| Results by cell, skill links, honest labels, parent-guide copy | 0.5–1 |
| Guard §14 with fixture, plus the phone checks | 1.5–2 |
| **Engine subtotal** | **9–12** |
| Passages (8) + figure + fact checks | 2–3 |
| 40 items with clue/why | 2.5–3.5 |
| Essay task, model, calibration responses | 1–1.5 |
| Reviews A and B (in parallel) | 1–1.5 |
| Cold solve | 0.5 |
| Fix rounds and re-verification | 1–2 |
| **Content subtotal** | **8–12** |
| **Total** | **about 17–24 working days** |
| Phase 6 (optional): drag-and-drop 1.5–2, multiple-part 1, unscored extras 0.5 + 8 reviewed items 1.5, testing tools 2–3 | 6.5–8 |

## 11. Build order (each phase ships safely; a partial exam can never be shown as complete)

| Phase | Ships | Why it is safe |
|---|---|---|
| **0. Spec** | SPEC §5f, the §2 corrections applied to the PP-003 doc, and the checker rules X-1…X-9 (with no exam file, they check nothing yet). | Docs and checker only. No change on screen. |
| **1. Registry and gate** | `PP.addExam`, `js/engine/exam.js` skeleton, `manifest.exams: []`, the `#exam/` route, the runtime blueprint check, the localhost-only preview banner. Guard 14.1 and 14.14. | The manifest lists nothing, so production behaves exactly as now. Even a mistaken manifest entry cannot start an exam that is `draft` or that fails the blueprint check. |
| **2. Engine: navigator, flag, save/resume, section review and lock** | Built and tested **only against `verification/fixtures/PX-TEST.js`**. Guard 14.5–14.10 and 14.15. | The fixture lives in `verification/`, which the app never loads. Existing sets and PT-1 are unchanged (guard §2–§4 still pass). |
| **3. Essay embedding, results by cell, review and submit, honest labels** | The `writing.js` refactor, the results screen, and guard 14.2–14.4, 14.11–14.13 and 14.16 against the fixture. | W-TASK-01/02 behaviour is held by guard §6. Still nothing reachable in production. |
| **4. Content** | PX-1 authored with `status: "draft"`. **Keep it on a feature branch until Phase 5** (do not merge a draft exam file to `main`, even unlisted). Reviews A and B, cold solve, fixes. | The draft never reaches production. On the branch, the checker runs on it via `--all`, and the gate refuses it. |
| **5. Release** | `status: "ready"`, `manifest.exams: ["PX-1"]`, Practice Test section card, parent-guide text, full guard (including §14 on PX-1), phone check, screen audit, **owner approval**. | Release happens only when X-8 sees three logs with `MUST open: 0` and the runtime check passes. |
| **6. Optional** | Drag-and-drop and multiple-part item types (each can replace one 2-point slot in PX-2); opt-in labelled unscored extras; testing tools (highlighter, cross-off, line guide); PX-2. | Each is behind the same gates. |

## 12. What I did not do or verify

- I edited no code, content or audit documents. The §2 corrections are recommendations for the lead.
- I ran none of the gates. I made no changes, so there was nothing new to gate.
- Official time limits, the section layout, where the essay sits, and how field-test items are placed or identified all remain **UNVERIFIED**. I fetched no new web sources. I relied on the uploads and on the PP-003 source log (`PP-003-SOURCE-VERIFICATION.md` row g).
- The topics and slot assignments in §4–§6 are a plan. The items do not exist yet, and every DOK tag must be re-justified once an item is written.
- The estimates are judgement, not measurements.

## For the lead

1. Apply or supersede corrections C1–C10 in `PP-003-ASSESSMENT-ALIGNMENT.md` §E2.
2. `js/writing.js:101` says "Spell-check is off, like on the test." No source supports "like on the test" (C6). Suggest "Spell-check is off here."
3. `verification/check-writing.js:32` uses `[GUM]`, which accepts Master rows only. It should be `[MR]`.
4. Remember the reason for the registry: never register exam items through `PP.addSet`, because skill pages list every set that carries a standard (`js/skills.js:891-899`).
