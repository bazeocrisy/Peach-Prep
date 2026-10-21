# PP-003 Phase E: Assessment alignment

> **Record status:** this report describes `main` at 66e536b (v2.1.0) *before* the PP-003 fixes. See PP-003-CORRECTIONS-LOG.md for what changed on `pp-003-fixes`, PP-003-STANDARDS-REPORT.md for post-fix coverage, and PP-003-TEST-RESULTS.md for post-fix counts and test results.


Audit of Peach Prep 2.1.0 (branch `pp-003-audit`, based on main at 66e536b) against GaDOE's Georgia Milestones Grade 3 ELA documents.
Date of audit: 2026-10-20. Live content is what `js/data/manifest.js` loads: 14 practice sets, the practice test `PT-1` and the writing tasks `W-TASK-01` and `W-TASK-02`.

Severity tags: **Critical** (wrong or misleading for parents now), **High** (a public claim the site does not meet), **Medium** (a real gap in alignment), **Low** (polish), **Future** (only needed for the optional full-length exam).

Screenshots are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/assess/` (named `NN-*.png` below). The raw on-screen text from the Playwright run is in `pw.json` and the computed item statistics are in `stats.json`, both in that folder.

## Summary

- **No Critical findings.** The site never turns a practice score into a Milestones achievement level. It does not score essays automatically, and the screen says so. The Writer's Checklist is reproduced word for word. The rubric description matches GaDOE's August 2026 Grade 3 **three-trait** rubric (3 + 3 + 2 = 8).
- **High (1):** the parent guide says "Peach Prep practices each of these" about GaDOE's technology-enhanced item types. The site has no drag-and-drop interaction and no multiple-part item other than EBSR.
- **Medium (5):**
  - Practice Test 1 never reports Research & Analysis.
  - It under-weights the Constructing Texts language and structure items.
  - It has no paired texts, no poem and no opinion text.
  - The writing tasks have a model only at the top score point.
  - The authored evidence key for parents is never shown on screen.
- Practice Test 1 is **shortened**: 24 items and 31 points, against 41 scored items and 60 points on the real test. The set card and the section header say so. The player and the results screen do not.
- The item counts (49 / 41 / 8) **are** in the blueprint (page 2, Assessment Design table and footnote 4). The time limits are **UNVERIFIED**: no official GaDOE page I could reach states them.

---

## E1. Assessment structure

### E1.1 What the blueprint says (GM_Gr3_ELA_Blueprint, August 2025)

Source: the owner's upload, extracted text `scratchpad/gadoe/7bf55d31-GM_Gr3_ELA_Blueprint.txt`. The site links the official PDF at `https://lor2.gadoe.org/gadoe/file/4feebd77-4a21-4788-a3ba-b6f50a71c876/1/GM_Gr3_ELA_Blueprint.pdf` (`js/data/site.js:8`). That host refused automated fetches on 2026-10-20 (robots-disallowed and proxy-rejected), so I worked from the upload.

**Claims and targets (page 1).**

| Domain | Target (claim) | Interpreting Texts expectations | Constructing Texts expectations |
|---|---|---|---|
| Texts | Context | 3.T.C.1 (a, b), 3.T.C.2 (a, c) | 3.T.C.1 (c) |
| Texts | Structure & Style | 3.T.SS.1 (a), 3.T.SS.2 (a) | 3.T.SS.1 (b, c, d), 3.T.SS.2 (b) |
| Texts | Techniques | 3.T.T.1 (a–d), 3.T.T.2 (a–c), 3.T.T.3 (a), 3.T.T.4 (a) | 3.T.T.1 (e), 3.T.T.2 (d), 3.T.T.3 (c), 3.T.T.4 (b) |
| Texts | Research & Analysis | 3.T.RA.1 (a, b), 3.T.RA.2 (a, b) | 3.T.RA.1 (c) |
| Language | Grammar Conventions | 3.L.GC.2 (a) | 3.L.GC.1* (GUM), 3.L.GC.2 (b, c, d) |
| Language | Vocabulary | 3.L.V.1 (a), 3.L.V.2 (a, b), 3.L.V.3 (a–d) | 3.L.V.1 (b), 3.L.V.2 (c), "5.L.V.3 (e)" (printed this way; almost certainly a typo for 3.L.V.3 (e)) |

\*3.L.GC.1 is assessed only from the Master and Reinforce rows of the GUM chart. Foundations is "appropriate for classroom assessment only". Practices are embedded in other items and not reported separately.

A layout note: 3.L.GC.1 prints in the Constructing column (blueprint line 38). The site's `claims` table (`js/data/site.js:68`) lists 3.L.GC.1 under **both** columns. This is harmless for practice, but it does not match the printed layout. **Low.**

**Approximate points per cell (page 1), as printed:**

| | Context + Structure & Style | Techniques | Research & Analysis | Language (GC + V) | Total |
|---|---|---|---|---|---|
| Interpreting Texts | 6 | 16 | 6 | 6 | **34** |
| Constructing Texts | 6 | 8 (printed across the Techniques / Research & Analysis rows) | (inside that 8) | 12 | **26** |
| | | | | **Total points** | **60** |

The blueprint does not say which cell the 8-point extended writing task belongs to. One reading is arithmetically exact: the Constructing "8" **is** the essay. Under that reading, Constructing Texts items without the essay are 6 + 12 = 18 points, which equals the Assessment Design table's 8 one-point + 5 two-point items (8 + 10 = 18). I use this reading in E2. It is my inference and is not stated by GaDOE.

The site describes the Constructing split as "about 6 for Context with Structure & Style, 8 for Techniques and 12 for Language" (`js/data/site.js:71`). It drops Research & Analysis from the 8, although 3.T.RA.1 (c) (using sources) is exactly what the essay assesses. **Low**: change it to "8 for Techniques and Research & Analysis (the writing task)".

**Assessment Design (page 2), exact.**

| Item type | Total items / points | Interpreting | Constructing |
|---|---|---|---|
| 1-point selected-response and technology-enhanced | 28 / 28 | 20 / 20 | 8 / 8 |
| 2-point technology-enhanced | 12 / 24 | 7 / 14 | 5 / 10 |
| 8-point extended writing task | 1 / 8 | 0 / 0 | 1 / 8 |
| Field Test items | 8 / 0 | 6 / 0 | 2 / 0 |
| **Total** | **49 / 60** | 33 / 34 | 16 / 26 |

Blueprint footnotes:
- 1: TE variants are "drag-and-drop, drop-down, evidence-based selected-response, match interaction, reorder interaction, hot text highlight, multiple-part, and multiple-select".
- 2: "The target range of 1-point technology-enhanced items is 0 to 5."
- 4: "Of the 49 items, 41 contribute to the student's ELA score."
- 5: Lexile and Reading Status come from Interpreting Texts.

So the item counts **are** in the blueprint; the brief assumed they were not. `js/data/site.js:42-49` and `docs/SPEC.md:20-25` match these numbers exactly.

**DOK (page 2).**

| DOK | Points | Share |
|---|---|---|
| 1 | 3 to 6 | 5% to 10% |
| 2 | 24 to 36 | 40% to 60% |
| 3 | 12 to 21 | 20% to 35% |
| 4 | 8 | 13% (the writing task) |

The site's DOK table (`js/data/site.js:54-59`) matches.

**Time limits: UNVERIFIED.**
- I searched official GaDOE domains on 2026-10-20 and found no current Grade 3 ELA section time limits. The www.gadoe.org and lor2.gadoe.org PDFs were proxy-rejected or robots-blocked.
- The GaDOE Community pages for "Understanding Georgia's New ELA Assessment: Sections 2 and 3" (https://login.community.gadoe.org/events/understanding-georgias-new-ela-assessment-sections-2-and-3) and "Redesigning the Georgia Milestones ELA Assessments" (https://login.community.gadoe.org/events/redesigning-the-georgia-milestones-ela-assessments) now say "This content is no longer available."
- The page "Understanding the Georgia Milestones ELA Assessment" (https://login.community.gadoe.org/events/redesigned-georgia-milestones-ela-assessment, recorded Aug 03, 2026) lists "test design, item types, writing rubrics" as topics, but the page itself gives no timings.
- District pages (fcboe, cobbk12 and others) were not used because they are not GaDOE.
- **The site states no time limits, which is correct while they are unverified.**

**Section structure: partly verified.** The GaDOE Online Study and Assessment Guides infographic (`scratchpad/gadoe/b2ea2ce9-...txt`) names "Section I: ICT Text sets" and a "Sections 2 & 3 Sample Text Sets & Items" tile that "provides sample text sets as well as standalone constructing texts items", and says "Grades 3, 5, 8, and Literature & Composition II each have an Extended Writing Task." So the test has three sections, standalone Constructing Texts items exist, and Grade 3 has the extended writing task. **Which section holds the essay, and how items split across sections, is UNVERIFIED.**

### E1.2 What the site offers (live sets only)

Computed from the set files with `scratchpad/assess/stats.js`. Claims are counted by the item's **first** `std` code, which is the same rule the results screen uses (`js/engine/player.js:355`). "IT/CT" uses the blueprint expectation lists; 3.L.GC.1 items are shown separately because the blueprint places them in Constructing.

| Set | Items (1-pt / 2-pt) | Points | Item types | DOK points (1/2/3) | Claim points | Passages (genre, words) |
|---|---|---|---|---|---|---|
| R-LIT-01 | 8 (4/4) | 12 | mc 2, dropdown, hottext, order, match, ebsr, ms | 0/9/3 | Tech 10, C+SS 1, Lang 1 | 1 literary, 405 |
| R-LIT-02 | 7 (3/4) | 11 | mc, dropdown 2, hottext, ms, order, ebsr | 0/9/2 | Tech 9, C+SS 1, Lang 1 | 1 literary, 416 |
| R-POE-01 | 8 (6/2) | 10 | mc 3, match, hottext, ebsr, dropdown, ms | 1/5/4 | C+SS 5, Tech 4, Lang 1 | poem 113 + literary 278 (two texts) |
| R-INF-01 | 8 (5/3) | 11 | mc 3, hottext, order, match, ebsr, dropdown | 0/9/2 | Tech 5, C+SS 4, RA 1, Lang 1 | 1 informational, 364 |
| R-INF-02 | 8 (4/4) | 12 | mc 2, order, dropdown, hottext, ebsr, ms, match | 1/8/3 | Tech 9, RA 2, Lang 1 | **paired** informational, 222 + 227 |
| R-OPN-01 | 8 (5/3) | 11 | hottext 2, ms, match, ebsr, mc 2, dropdown | 2/7/2 | Tech 7, RA 2, C+SS 1, Lang 1 | 1 opinion, 277 |
| W-REV-01 | 8 (5/3) | 11 | mc 4, dropdown 2, hottext, ms | 0/9/2 | C+SS 4, Lang 3, Tech 2, RA 2 (all CT) | student draft (opinion), 119 |
| W-REV-02 | 8 (5/3) | 11 | mc 5, ms, dropdown, order | 0/10/1 | Tech 6, C+SS 4, Lang 1 (all CT) | student draft (narrative), 104 |
| L-GRM-01 | 10 (7/3) | 13 | dropdown 4, mc 3, match, hottext, ms | 3/10/0 | Lang 13 (3.L.GC.1) | none |
| L-GRM-02 | 10 (7/3) | 13 | mc 4, dropdown 2, hottext 3, ms | 1/12/0 | Lang 13 (3.L.GC.1) | none |
| L-GRM-03 | 10 (7/3) | 13 | match, mc 3, hottext 3, dropdown 3 | 1/12/0 | Lang 13 (IT 4, CT 9) | none |
| L-VOC-01 | 10 (7/3) | 13 | mc 4, dropdown 2, hottext, match, ebsr, ms | 1/12/0 | Lang 13 (IT) | none |
| L-VOC-02 | 10 (7/3) | 13 | mc 4, match, dropdown 2, ms, ebsr, hottext | 3/10/0 | Lang 13 (IT) | none |
| L-VOC-03 | 10 (7/3) | 13 | match, dropdown 2, mc 4, order, ebsr, ms | 3/10/0 | Lang 13 (IT 12, CT 1) | none |
| **PT-1** | **24 (17/7)** | **31** | mc 11, dropdown 4, hottext 3, ebsr 2, ms 2, order, match | **3/18/10** | see below | literary 536, informational 349, student draft (informational) 116 |

**Practice Test 1 by blueprint cell** (first code; 3.L.GC.1 counted as Constructing, as `js/data/sets/PT-1.js:17-18` does):

| | C + SS | Techniques | R & A | Language | Total |
|---|---|---|---|---|---|
| Interpreting (PT-1) | 4 | 13 | **0** | 4 | 21 |
| Interpreting (blueprint 34 scaled to 31 of 52 non-essay points) | 3.6 | 9.5 | 3.6 | 3.6 | 20.3 |
| Constructing (PT-1) | 2 | 3 | 0 | 5 | 10 |
| Constructing (blueprint 18 non-essay, scaled) | 3.6 | 0 (if the 8 is the essay) | | 7.2 | 10.7 |

Other Practice Test 1 facts:
- **DOK by points:** 3 / 18 / 10 = 10% / 58% / 32% of 31. With the 8-point essay removed, the blueprint's non-essay ranges are about 6–12% DOK 1, 46–69% DOK 2 and 23–40% DOK 3. **Within range.**
- **Two-point items:** 7 of 24 (29%), worth 14 of 31 points (45%). The blueprint has 12 of 40 non-essay items (30%), worth 24 of 52 points (46%). **Matches.**
- **One-point TE items:** 6 of 17 one-point items (hottext ×3 at PT-1-3, -16, -21; dropdown ×3 at PT-1-9, -15, -22). The blueprint allows 0 to 5 of 28. Scaled, that is about 0–3 of 17.
- **Passages:** three. "The Blue Pitcher" (literary, 536 words), "Why Leaves Change Color" (informational, 349 words) and "Hunters of the Night" (student draft, 116 words), then 6 standalone language items. The file's own header (`js/data/sets/PT-1.js:6-7`) says: "Not covered here (rotate into PT-2/PT-3): opinion text, poem, paired texts, 3.L.V.3.b/d, Constructing vocabulary." PT-2 and PT-3 do not exist.

**Is it a full simulation? No. It is shortened, with no essay.** On-screen labels (Playwright run, screenshots `01-mixed.png` and `02-test-section.png`):
- Mixed practice card: "Practice Test — A shorter test shaped like the real one — Reading, revising and language questions with no hints, scored in points, with Show me how afterwards. (The essay is practiced in Writing.)"
- Set card: "A shorter practice test shaped like the real one: reading, revising and language questions. (It does not include the essay. Practice that in Writing.)" and "24 questions · 31 points".
- Inside the player the header reads only "Test" and "Practice Test 1", with "Question 1 of 24" (`04-pt1-test-q1.png`). The results screen reads "0 of 31 points" (`06-pt1-results.png`). Neither says "shorter".

**Achievement levels.** No score or message implies a Milestones achievement level. The test results guidance is generic: "Excellent work. You are ready for harder sets." / "Good work. Practice the questions you missed, then try again." / "Keep going. Try this set in Practice mode..." (`js/engine/player.js:370-372`). The parent guide's "The four achievement levels" section (`js/parents.js:64-70`) only describes GaDOE's levels and never maps a Peach Prep score to one. Skill "mastered" is 80% of a skill test and is labelled as Peach Prep's own measure. **Pass.**

### E1.3 Item types: GaDOE vs site

GaDOE (blueprint footnote 1) lists selected-response plus drag-and-drop, drop-down, evidence-based selected-response, match interaction, reorder interaction, hot text highlight, multiple-part and multiple-select, and the 8-point extended writing task. The infographic adds that Section I uses text sets, Sections 2 and 3 include standalone Constructing Texts items, and Grade 3 has an Extended Writing Task. It also lists the standard tools: Pointer, Cross-Off, Highlighter, Note Pad, Magnifier, Masking and Line Guide.

| GaDOE type | Site (`js/engine/items.js`) | Status |
|---|---|---|
| Selected response | `mc` (line 105) | Present |
| Multiple-select | `ms` (line 132) | Present |
| Evidence-based SR (Part A / Part B) | `ebsr` (line 177) | Present |
| Drop-down | `dropdown` (line 232), native `<select>` | Present |
| Hot text highlight | `hottext` (line 321) | Present. In passages it selects **whole sentences only** (targets are sentence refs, SPEC §5). Standalone hot text can offer words or phrases as options. In-passage word or phrase selection is missing. |
| Reorder interaction | `order` (line 398), tap to place | Present as tap-to-place, not drag |
| Match interaction | `match` (line 462), a grid of buttons | Present |
| Drag-and-drop | none | **Missing.** There is no interaction where tokens are dragged into categories, a table or blanks (for example, sort details under two headings, or drag a transition into a sentence). `order` and `match` cover some of the same skills with taps. |
| Multiple-part (other than EBSR) | none | **Missing.** For example, Part A dropdown + Part B MC, or two linked MC parts that are not evidence pairs. |
| Extended writing | `W-TASK-*` (`js/writing.js`) | Present, outside the test player |
| Testing tools (highlighter, cross-off, notepad, line guide, masking, magnifier) | none in the test. Cross-off appears only as Help step 2 in practice. | Missing. The site points families to Experience Online for the real tools (`js/data/site.js` plan step 5). |

### E1 findings

- **High: the parent guide over-claims TE coverage.** `js/parents.js:44-46` lists GaDOE's eight TE variants, then says "Peach Prep practices each of these." Drag-and-drop and non-EBSR multiple-part are not implemented, and in-passage hot text is sentence-level only. Fix: reword to "Peach Prep practices drop-down, evidence-based (Part A / Part B), match, reorder, hot text and multiple-select. For drag-and-drop and the real testing tools, use GaDOE's Experience Online." Or build the missing types (see E2.10).
- **Medium: Research & Analysis is never reported in Practice Test 1.** No PT-1 item has a 3.T.RA code first. RA appears only as a second code on PT-1-3, -7, -10, -14 (3.T.RA.2.a) and PT-1-17 (3.T.RA.1.b). The results breakdown keys on the first code (`js/engine/player.js:355`), so "Using evidence and sources" never shows. This area is worth about 6 of the 34 Interpreting points. The results screen shows six areas and omits it (`06-pt1-results.png`).
- **Medium: the PT-1 cell balance drifts from the blueprint.** Interpreting Techniques has 13 points against about 9.5 scaled. Constructing C + SS has 2 against about 3.6, and Constructing Language has 5 against about 7.2 (table above). There are no Constructing vocabulary items (3.L.V.1.b, 3.L.V.2.c, 3.L.V.3.e), which PT-1.js:7 acknowledges.
- **Medium: PT-1 has no paired texts, no poem and no opinion text.** The planned PT-2 and PT-3 that would rotate them in do not exist (`js/data/sets/PT-1.js:6-7`; manifest has only `PT-1`). Paired texts do exist elsewhere: R-INF-02 is a paired informational set, and R-POE-01 has a poem with a story.
- **Low: the shortened test is not labelled inside the player or on results.** The card says "A shorter practice test" (`js/data/site.js:30`, `js/data/sets/PT-1.js:34`). The player header and the "of 31 points" result (`js/engine/player.js:351`) do not. Suggest the result line read "of 31 points (a shorter practice test; the real test has 60 points, including an 8-point essay)".
- **Low: one-point TE items are 6 of 17 in PT-1.** The blueprint target is 0–5 of 28, about 0–3 when scaled. This over-represents one-point TE relative to the real form.
- **Low: test answers are not saved.** `js/engine/player.js` has no storage; leaving mid-test loses the answers (the app warns via `inProgress`). This is fine for 24 items and needed for a full-length form (E2).
- **Low: 3.L.GC.1 appears in both columns** of the site's claims table (`js/data/site.js:68`). The blueprint prints it under Constructing only.
- **Low: the Constructing "8" is labelled "Techniques" only** (`js/data/site.js:71`). See E1.1.
- **Future: testing tools are absent** (highlighter, cross-off, note pad, line guide, masking).

---

## E2. Specification: optional full-length practice exam ("Practice Test: Full Length")

> **Superseded in part by PP-004.** A PP-004 review checked this section against the blueprint. The core numbers are right: 49 items, 41 scored, 60 points, and the cell points. It found an item-count error in the proposed sections (they added to 42, not 41) and several claims that the official sources do not support. Those claims, about section order, no going back, how field-test items are identified, and which cell the essay is in, are now marked UNVERIFIED and treated as Peach Prep design choices. See `docs/audits/work/pp004-exam-plan.md` (corrections C1–C10). The implementation plan there replaces this specification.

**This is a specification only. Nothing here is implemented.**

### E2.1 Item counts and points per cell

Use the blueprint's 41 scored items and 60 points. I recommend **no unscored items** (see E2.9). The cell split uses the E1.1 reading where the Constructing "8" is the essay. If GaDOE's Assessment Guide shows otherwise, move the Constructing Techniques revising items back in.

| Cell | 1-pt items | 2-pt items | Points |
|---|---|---|---|
| IT: Context + Structure & Style | 4 | 1 | 6 |
| IT: Techniques (literary, informational, opinion, poetry) | 10 | 3 | 16 |
| IT: Research & Analysis (evidence, comparing paired texts) | 2 | 2 | 6 |
| IT: Language (vocabulary in context, 3.L.GC.2.a) | 4 | 1 | 6 |
| **Interpreting total** | **20** | **7** | **34** |
| CT: Context + Structure & Style (revising: introductions, conclusions, transitions, grouping, text features) | 2 | 2 | 6 |
| CT: Language (3.L.GC.1 Master/Reinforce rows, 3.L.GC.2.b–d, 3.L.V.1.b, 3.L.V.2.c, 3.L.V.3.e) | 6 | 3 | 12 |
| CT: Techniques + Research & Analysis: the extended writing task | — | — | 8 |
| **Constructing total** | **8** | **5** | **26** |
| **Test** | **28** | **12 + 1 essay** | **60** |

- At most 5 of the 28 one-point items should be technology-enhanced (blueprint footnote 2). The rest are `mc`.
- All 12 two-point items are TE.

### E2.2 Section structure

The infographic confirms Section I (text sets) and Sections 2 and 3 (text sets plus standalone Constructing items), and that Grade 3 has an extended writing task. The exact GaDOE split is UNVERIFIED, so this is a proposed structure, labelled as Peach Prep's layout:

| Section | Content | Items / points |
|---|---|---|
| 1 | Two text sets: (a) a literary story; (b) paired informational texts. Interpreting items plus a few embedded Constructing items | about 16 items / 22 points |
| 2 | One text set (a poem plus a short opinion text), a student draft to revise, and standalone language items | about 25 items / 30 points |
| 3 | Extended writing task: two sources, prompt with provided reasons, planner, draft, checklist | 1 task / 8 points |

- Each section ends with a review screen and a "Finish this section" confirm. After that the child cannot go back into the section, as on the real test.
- A break screen appears between sections.
- The app saves progress per section so the test can span days.
- Untimed by default, with an optional elapsed-time display. Add official limits only once they are verified on a GaDOE page.

### E2.3 Passages (grade 3 lengths, per SPEC §6.2)

| # | Genre | Length | Notes |
|---|---|---|---|
| 1 | Literary story | 400–600 words | dialogue, character change, a lesson |
| 2a / 2b | Paired informational | 200–300 words each | same topic, different focus; needed for 3.T.RA.2 and comparison items |
| 3 | Poem | 12–24 lines | figurative language, stanza and line references |
| 4 | Opinion text | 250–400 words | reasons and evidence, author's purpose |
| 5 | Student draft (revising) | 100–150 words, numbered sentences | Constructing C + SS and Language items |
| 6a / 6b | Essay sources (informational) | 150–300 words each | opinion task with two provided reasons |

- Lexile target is about 450–800L (estimated, as SPEC already says).
- All passages and items must be new. A full-length form must not reuse PT-1 or practice-set passages (SPEC §5d).

### E2.4 TE formats

- One-point items: at most 5 TE (`dropdown` or 1-answer `hottext`), the rest `mc`.
- Two-point items, 12 in total: spread across `ebsr` (3–4), `ms` (2–3), `hottext` with 2 answers (2), `match` (1–2), `order` (1), and drag-and-drop / multiple-part once built (1–2).

### E2.5 DOK distribution

The target is 5 / 31 / 16 / 8 points (DOK 1 / 2 / 3 / 4) = 8% / 52% / 27% / 13%. Every level is within the blueprint ranges (3–6, 24–36, 12–21, 8). Hold each two-point evidence item (EBSR, two-answer hot text) at DOK 2 or 3 and justify every DOK 3 tag in the file header, as PT-1 does.

### E2.6 Extended writing task (Section 3)

- Genre: **opinion**, source-based, with two **provided reasons**. Both the Writer's Checklist and the August 2026 rubric are opinion-specific; see E3.
- Two informational sources, 150–300 words each. Each provided reason must be supported in both sources.
- Planner: the existing `writing.js` planner (opinion, evidence per reason in the child's own words, ending).
- Draft box: spell-check off, word and paragraph count, autosave.
- The Writer's Checklist (verbatim) is available beside the draft, as it is on the test.
- Reuse `PP.addTask` with a new task id. Do **not** reuse W-TASK-01 or W-TASK-02 inside the form.

### E2.7 Review and submit workflow

1. Each section has a question navigator: numbered tiles showing answered, unanswered or flagged.
2. A "Flag for review" toggle on each item.
3. At the end of a section, a review screen lists unanswered and flagged items with links. The confirm screen reads "You left N questions blank or not finished. You can go back and check, or finish this section." This extends the current `stage-confirm` (`index.html`, `js/engine/player.js:293-301`).
4. After Section 3, a final "Turn in my test" step.
5. Results: auto-scored points for Sections 1–2, out of 52. The essay shows as "Waiting for a grown-up to score (0–8)" until a parent enters trait scores in the existing For parents panel. Then the total shows as "N of 60".

### E2.8 Scoring explanations and standards-based feedback

- Results by **blueprint cell**: Interpreting (C + SS, Techniques, R & A, Language) and Constructing (C + SS, Language, Writing). Count points by an explicit `cell` field on each item, not by the first `std` code. This fixes the PT-1 R & A gap.
- Under each cell, list the standards missed, each with a link to its skill page (the skill pages already exist in `js/skills.js`). Add GaDOE's *Proficient* ALD wording for that standard from `js/data/alds.js`, labelled "DRAFT ALDs, October 2025".
- Each missed item keeps "Show me how" (clue, then narrowing, then walk-through).
- Results must say plainly: "This is practice. It is not a Milestones score and does not predict an achievement level or Lexile." Never map the score to Beginning, Developing, Proficient or Distinguished.

### E2.9 Practice-only unscored items

Recommendation: **none.** Unscored items only lengthen the test for a child, and families cannot learn from them.

If the owner wants the full 49-item length for stamina:
- Add 8 items marked `unscored: true`, shown during the test exactly like the others. The real test does not identify them either.
- On the results and review screens, label them "Practice question (not counted in your score)".
- Never use the words "field test" anywhere on screen or in data.
- The parent guide may still explain that the real test includes 8 questions that do not count. It already says "tryout questions that do not count" (`js/parents.js:40`).

### E2.10 Engine today vs what needs building

| Need | Today | Work | File(s) | Estimate |
|---|---|---|---|---|
| Multi-passage form, passage per item | Yes (`item.passages`, `js/engine/player.js:164-184`) | — | — | 0 |
| No-hint test mode, back/next, skip, confirm with blank count, submit, per-item review with Show me how | Yes (`js/engine/player.js:218-416`) | — | — | 0 |
| Item types mc/ms/ebsr/dropdown/hottext/order/match | Yes (`js/engine/items.js`) | — | — | 0 |
| Essay with planner, draft, checklist, parent scoring | Yes, separate screen (`js/writing.js`) | Embed as Section 3 of a form and carry the parent score into form results | `js/writing.js`, `js/engine/player.js`, `index.html` | 1.5–2 days |
| Sections with lock-on-finish and break screens | No | `sections: [{title, itemIds}]` on the form; section boundary stage | `js/engine/player.js`, `index.html`, `docs/SPEC.md` §5d | 1 day |
| Question navigator and flag for review | No | Tile strip plus flag state | `js/engine/player.js`, `index.html`, css | 0.5–1 day |
| Save and resume a test in progress | No (no storage in `player.js`) | Guarded localStorage per form, the same pattern as `writing.js:17-22` | `js/engine/player.js` | 0.5–1 day |
| Results by blueprint cell | No (first-code skill only, `js/engine/player.js:355`) | `cell` field on items; checker rule that every form item has one | `js/engine/player.js`, `verification/check-content.js` | 0.5 day |
| Standards-based feedback with skill links and DRAFT ALDs | Partly (ALDs shown on skill and parent pages) | Link missed standards to skill pages in results | `js/engine/player.js`, `js/skills.js` | 0.5 day |
| Drag-and-drop item type (categorize / gap-fill, with a keyboard and tap alternative) | No | New `dnd` type: render, score, narrow, outline, describe, answerText | `js/engine/items.js`, `verification/check-content.js`, `verification/guard.py` | 1.5–2 days |
| Multiple-part (non-EBSR) item | No | A `multipart` type wrapping two sub-items | `js/engine/items.js`, checker | 1 day |
| In-passage word or phrase hot text | No (sentence refs only) | Sub-sentence spans in passage rendering | `js/engine/player.js` renderPassages, `js/engine/items.js` | 1 day |
| Unscored items (only if wanted) | No | `unscored: true`, excluded from totals, labelled on results | `js/engine/player.js`, checker | 0.25 day |
| Testing tools (highlighter, cross-off, note pad, line guide) | No | A tool bar in test mode | `js/engine/player.js`, css | 2–3 days (Future) |
| Content: 6–8 passages, 41 items, 1 essay task, with two independent reviews and the screen audit (SPEC §7) | No | Author and review | `js/data/sets/PT-FULL-1.js`, `js/data/tasks/W-TASK-0N.js`, `js/data/manifest.js` | 6–9 days |

**Total: about 15–22 working days**, of which content and review are about half. A smaller first step: build sections, the navigator, save/resume and results by cell (about 3 days), then reuse them for a PT-2 that fills PT-1's genre gaps.

---

## E3. Extended writing

Live tasks: `W-TASK-01` ("Should our school start a reading buddy program?") and `W-TASK-02` ("Should our town turn an empty lot into a skate park?"). The manifest lists no others (`js/data/manifest.js:6`). Both were opened in Chromium through every tab: screenshots `07-W-TASK-01-*.png`, `07-W-TASK-02-*.png`, `08-W-TASK-01-score-with-draft.png` and `10-W-TASK-01-write-375.png`.

### E3.1 The official rubric: three traits, 8 points (verified)

- **Uploaded GaDOE PDF** `GM_Rubric_Gr3.pdf` (text `scratchpad/gadoe/de84ed03-GM_Rubric_Gr3.txt`), dated **August 2026**, titled "EIGHT-POINT, THREE-TRAIT WRITING RUBRIC". It has three traits:
  - Trait 1, **Purpose and Organization**: 0–3.
  - Trait 2, **Evidence and Elaboration**: 0–3.
  - Trait 3, **Language Usage and Conventions**: 0–2.
  - Condition codes: Blank, Copied, Too Limited to Score, Non-English/Foreign Language, Off Topic, Offensive, and Illegible/Incomprehensible.
- **Online confirmation, official domain, checked 2026-10-20.**
  - The GaDOE Community event "Grades 3 & 5: Examining Expectations for Student Writing – Trait 1" (https://login.community.gadoe.org/events/grades-3-5-examining-expectations-for-student-writing-trait-1) and its Trait 2 companion (https://login.community.gadoe.org/events/grades-3-5-examining-expectations-for-student-writing-trait-2), both recorded Aug 03, 2026, describe "the new three-trait rubric for Grades 3 and 5".
  - Neither page states points per trait, so the 3/3/2 split rests on the uploaded PDF.
  - The official PDF link the site uses (`https://lor2.gadoe.org/gadoe/file/ba53bbce-.../GM_Rubric_Gr3.pdf`, `js/data/site.js:12`) was **robots-blocked for my fetch**, so I could not confirm the live URL's content myself. `site.js:6` records that the owner confirmed it works on 2026-10-20.
- **Not the two-trait version.** I found no official source for an 8-point two-trait rubric (Idea Development, Organization & Coherence 4 + Language Usage & Conventions 4).
  - The older GaDOE page https://www.gadoe.org/Curriculum-Instruction-and-Assessment/Assessment/Pages/Georgia-Milestones-Rubrics.aspx (fetched 2026-10-20) still describes the **previous** design: "the seven-point, two-trait rubric used to evaluate ideas and conventions" and "the four-point holistic rubric used to evaluate narrative writing".
  - That page is stale relative to the August 2026 Grade 3 rubric. The site correctly does not use it.
- **The site's description matches.**
  - `js/data/site.js:74-89` gives three traits, max 3 / 3 / 2.
  - The writing screen says "These follow GaDOE's Grade 3 three-trait rubric, in plain words." (`js/writing.js:121`).
  - The parent essay tab says "GaDOE's rubric has three traits." (`js/parents.js:197`).
  - SPEC §2 (`docs/SPEC.md:70-75`) matches.
  - The plain-words bullets track the rubric's level-3 or level-2 bullets, including "provided reasons" and the rubric's note that "very brief responses ... may not be sufficient". No wording conflicts.

### E3.2 Genre and source-based requirements

- **Genre: opinion only.** The Grade 3 Writer's Checklist (2026) is opinion-specific: "introduce my opinion on a topic", "provide reasons that support my opinion". Rubric Trait 1 names "a clearly stated opinion on a topic", and Trait 2 says "Responses should include opinion and expository techniques". Neither 2026 document provides for an informational/explanatory extended task at grade 3.
  - Both site tasks are opinion (`W-TASK-01.js:86`, `W-TASK-02.js:89`). **Matches.**
  - The site does not offer an informational extended task. That is correct for the 2026 Grade 3 design.
- **Provided reasons.** Rubric Trait 2 says "elaborating on the provided reasons". Both tasks give two reasons under "Use these reasons:" (`W-TASK-01.js:87-90`, `W-TASK-02.js:90-93`). The prompts tell the child the position to argue ("tells why your school should start..."), which fits a task with provided reasons. **Matches.**
- **Sources.** Each task has two original informational sources: 188 + 173 words (W-TASK-01) and 179 + 180 words (W-TASK-02), each marked "about 600–640L (estimate)". Every provided reason is supported in both sources. The parent evidence key has 17 refs (W-TASK-01) and 18 refs (W-TASK-02). The prompts require "information from both sources, written in your own words". This is consistent with Trait 2 ("relevant information from the sources", "using the writer's own words").

### E3.3 Writer's Checklist

`js/data/site.js:93-105` was compared programmatically with `scratchpad/gadoe/ce3c8549-GM_Checklist_Gr3.txt`. **All 11 lines match word for word**, as does the stem "In my well-written text, I made sure to:".
- The Check tab says: "This is the same checklist you will see on the test." (`js/writing.js:97`, `07-W-TASK-01-check.png`).
- GaDOE's permission ("This page may be printed for instructional use during the school year") is cited in `site.js:92` and paraphrased on the parent essay tab.
- **Pass.**

### E3.4 Prompt, planner, model responses and parent scoring

- **Prompt:** names the audience (principal / town council), the position, the two reasons and the source requirement. **Pass.**
- **Planner** (`07-*-plan.png`): fields for "My opinion", "Evidence from the sources (in my own words)" for each reason with a guiding question, and "How I will end". It mirrors the checklist order. **Pass.**
- **Parent scoring** (`08-W-TASK-01-score-with-draft.png`):
  - The child's draft is shown first.
  - Each trait has plain-words bullets, prompt-specific "For this prompt, look for" notes (`lookFors`) and 0–3 / 0–3 / 0–2 radio buttons.
  - Total: "Total: N of 8 points" (`js/writing.js:133`).
  - The condition-code note follows.
  - The look-fors are careful. For example, "The rubric scores relevant information from the source(s), so it sets no rule that one source limits the score" is consistent with the rubric's "source(s)" wording.
- **Model responses:** one model per task. Each is 4 paragraphs and about 257–259 words, with trait-by-trait notes saying 3 of 3, 3 of 3 and 2 of 2. The model is hidden behind a details element and a confirm prompt if the draft is under 80 words (`js/writing.js:159-175`).

### E3.5 Does the child actually write? Yes.

- The Write tab has a 16-row textarea (`js/writing.js:77`), spell-check off "like on the test", and a live count, for example "16 words · 2 paragraphs · Keep going. A very short essay may not earn full points."
- On desktop the sources stay visible beside the draft (`07-W-TASK-01-write.png`; CSS `.w-sources` sticky at 980px and up). At 375px the page fits with no sideways scroll (scrollWidth 375), but the sources are on a separate tab (`10-W-TASK-01-write-375.png`).
- **Draft saved:** typed text survived a page reload. localStorage key `pp.task.W-TASK-01` holds the plan, draft, checklist ticks and parent scores (`js/writing.js:16-22`). Storage errors are caught and the data stays in memory.
- Lessons with a `write` activity (9 lesson files, for example T-SS ×4, L-GC2 ×3) also give a textarea for the child to write in (`js/skills.js:584`), so writing is not only multiple choice about writing.

### E3.6 No automated writing score

- Write tab: "Spell-check is off, like on the test. Peach Prep does not score the essay; a grown-up uses the For parents tab." (`js/writing.js:88`)
- Section card: "Read two sources, plan, and write an opinion essay. A grown-up scores it with the rubric." (`03-writing-section.png`)
- The code has no automated essay score. The only machine-made text is the word and paragraph count. **Pass.**

### E3 findings

- **Medium: there are no models below the top score.** Each task has only an 8-point model (`W-TASK-01.js:119`, `W-TASK-02.js:123`). Parents who score with the rubric have nothing to calibrate a 2, 4 or 6 against. GaDOE's own approach uses scored samples at several points (the site links the "Online scoring samplers", `js/data/site.js:15-16`). Suggest adding short annotated responses at about 6, 4 and 2 points per task, each with trait scores and one sentence per trait explaining why.
- **Medium: the evidence key is authored but never shown.** `evidence: [...]` (`W-TASK-01.js:100-118`, `W-TASK-02.js:103-122`) maps each provided reason to source sentences, but `js/writing.js` never reads `task.evidence` (no reference anywhere in `js/`). SPEC §5c describes it as "for parents". Render it in the For parents tab under Evidence and Elaboration, for example as "Where the support is: Source 1, paragraph 2...".
- **Low: there is no caveat that the parent total is not an official score.** "Total: N of 8 points" (`js/writing.js:133`) and "These follow GaDOE's Grade 3 three-trait rubric" (`js/writing.js:121`) could be read as an official-equivalent score. Nothing claims equivalence, but add one line: "This is a practice score from a grown-up. Official essays are scored by trained GaDOE scorers."
- **Low: on phones the sources are on a separate tab from the draft.** The child must switch between the Read and Write tabs on phones. This is acceptable, since the real test shows them together on a computer, but consider a "Show sources" drawer on the Write tab at widths under 980px.
- **Low: there is no way to print or export the draft.** The draft lives in one browser's localStorage, and "Start this task over" clears it. A "Print my essay" button would let a parent score it on paper or keep it.
- **Future:** a third task with a different source structure (for example, one source per reason, or a text feature such as a chart caption rendered as a text box) would vary practice. The rubric's "source(s)" wording suggests GaDOE may not always require both sources for each reason.

---

## What I did not check

- The live production URL. I tested the local branch on port 8430 only.
- GaDOE's current Grade 3 Assessment Guide and Online Study Guide sample items, including the section layout and which section holds the essay. Experience Online requires interactive navigation and was not fetched.
- Official time limits (UNVERIFIED, see E1.1).
- The text of the lor2.gadoe.org PDFs online. The host was robots-blocked or proxy-rejected for my fetches; I relied on the owner's uploads.
- Item-level content quality (keys, distractors, readability) and whether every item's `std` and `dok` tags are correct. Those are other phases. My cell counts trust the authored `std` and `dok` fields.
- The `verification/` gates. I ran none, because Phase E is documentation only.
- `GM_ALDs_Gr3_Math` exists in the upload folder. It is math and out of scope.
