# PP-003 notes: slice "texts1" (3.T.C, 3.T.SS, 3.T.T.1)

Companion to `matrix-texts1.csv`. Checked 2026-10-20 against branch `pp-003-audit` (base 66e536b, v2.1.0).

## Method
- Loaded `js/data/manifest.js`, `standards.js`, every manifest lesson, set and task file in a Node `vm` context. I counted items from that data, not from the source text. The practice split follows `js/skills.js:32`: `half = n >= 4 ? ceil(n/2) : n`.
- `lesson_keys` follows `lessonFor`/`codesOf` (`L.codes || [L.code]`).
- I read the full teach, learn, passages, practice and test content of all 20 lessons that carry a slice code: T-C.js (5), T-SS.js (6), T-T1.js (5) and T-TS.js (TS-SEQ, TS-CE, TS-PS, TS-CC, TS-DESC). I solved every lesson test item (101 items) and every practice item myself.
- Mixed-set items (`R-*`, `W-REV-*`, `PT-1`) that carry a slice code are listed with their prompt, key and explanation. I did **not** re-solve them against their full passages. Treat their correctness as UNVERIFIED by this slice. They are counted only in `other_demonstrations`.
- I served the site with Playwright on port 8441 (server since stopped). All 21 lesson keys appear in `PP_CATALOG` and build their `:p`, `:y` and `:t` sets. There were no page errors. The 3.T.C.1.b and 3.T.SS.1.a skill pages contain 0 img/svg/canvas/video/audio elements.
- The blueprint (Aug 2025) gives the assessment status. The site's `tested` flag agrees with the blueprint for all 16 rows.
- The ALD text comes from the DRAFT Oct 2025 Grade 3 ELA ALDs, Proficient column. The ALDs are written per standard (3.T.C.1, 3.T.SS.1 and so on), not per expectation. **I mapped each bullet to its expectation myself.** Treat that mapping as my judgement.

## Totals
16 rows: 10 VERIFIED COMPLETE, 6 PARTIAL, 0 MISSING, 0 INCORRECT.
Severity: 1 High (3.T.C.1.b), 5 Medium, 6 Low, 4 None.
I found no wrong answer keys and no item with two defensible answers in the 101 lesson test items.

## Cross-cutting finding: the site cannot show any visual
`assets/` is empty, and the player renders only `## ` headings, `Box: ` asides and `Caption: ` text lines (js/engine/player.js:48-60). It has no bold markup and no image element. SPEC.md:136 makes this a rule: "The site shows no images, so use a text box rather than a caption that describes a picture."

Three assessed expectations name visual or digital features:
- **3.T.C.1.b** (High). Pictures, captions, diagrams, labels, bold print, links and play buttons are taught, but each is described in words ("Imagine a diagram next to the article..." in SK-TC1b-P5 and SK-TC1b-T3; "(The word stem is in bold.)" in learn 2). Captions are never practiced or tested in this lesson. Only headings and text boxes are real, and the mixed-set items (R-INF-01-6, PT-1-12) also cover only a box and a heading. The ALD asks for features "of various text modes", and real Milestones items show photos, captions and diagrams. So the visual mode is the major missing component.
- **3.T.SS.1.a** (Medium). The standard's own examples are "maps, captions". Learn 3 describes a map ("Next to the article is a map of Georgia with the river drawn in blue"), SK-SS1a-P6 imagines one, and SK-SS1a-T4 imagines a photo. Structures are very well covered, so I rated it Medium, not High.
- **3.T.C.1.c** (Medium). "Create multimodal texts". The selection items match how Milestones assesses this, but the child never actually makes anything visual. The write box says "Describe one picture you would draw."

Recommended single fix: allow simple, original visuals (inline SVG or small PNGs drawn for the site, never GaDOE art) and add markup for bold. Then add:
- a labeled diagram with a caption (beaver lodge),
- a captioned photo or drawing item for 3.T.C.1.b,
- a simple Georgia map for SS.1.a learn 3, plus one map test item,
- a hands-on "draw your poster" change to the 3.T.C.1.c write activity.

SPEC §5 needs a matching amendment.

## PARTIAL rows in detail

### 3.T.C.1.b: High
- Real features: headings (P1, P2, T1, T5) and text box (P3, T2). These are well taught and keyed correctly.
- Described-only features: bold + glossary (P4, never tested), diagram (P5, T3), link and play button (T4), speaker button (P7).
- Never practiced or tested: caption purpose. The "spoken" mode is not addressed at all.
- Correction: see the cross-cutting fix above, plus at least one test item on how a caption or a picture contributes to purpose/effect.

### 3.T.C.1.c: Medium
- Every component is selected correctly (picture, caption, label, sound, audience), but nothing is created.
- SK-TC1c-T4 (T-C.js:582) keys "Make the title big so it is easy to see from far away". That is sensible, but nothing in the lesson teaches title size or layout. Add a teach point so the item is grounded.

### 3.T.C.2.c: Medium
- The expectation names three context types: time period, individual and situation. All 10 practice and test items turn on time period (1928 letter, 1954 diary).
- "Individual" appears only in teach point 3. "Situation" appears only in learn 2 (the ranger's sign) and the teach example (2014 Atlanta snow).
- The ALD gives no Proficient descriptor here; context appears only under Distinguished. That lowers the stakes, but the expectation is still listed as assessed in the blueprint (3.T.C.2 a, c).
- Small conceptual note: both passages are historical fiction. The lesson correctly says the time and place are "pretend", so the item asks for the setting's context, not the real writing context. This is acceptable for grade 3 and avoids copyrighted primary sources.

### 3.T.SS.1.a: Medium
- Per-lesson split behind the CSV totals (learn / together / try / test / points):
  - 3.T.SS.1.a 3/3/3/5/6
  - 3.T.T.1.b 2/3/3/5/7
  - TS-SEQ 3/3/3/5/7
  - TS-CE 3/3/3/5/6
  - TS-PS 2/3/3/5/6
  - TS-CC 3/3/3/5/6
  - TS-DESC 2/3/3/5/6
  - Total: 18/21/21/35/44.
- Structures are complete. Each TS lesson teaches clue words, the "tricky but/so/then" mix-up and an organizer, and the main lesson tests naming the pattern (P1, T1, T2).
- Gaps:
  - maps and captions are imagined only (see above);
  - "referring to chapters" is never addressed. Add one table-of-contents item ("In which chapter would you look for...").
- Data note: the 3.T.T.1.b lesson lists 3.T.SS.1.a in `codes` (T-T1.js:208), but its items default to `std: ["3.T.T.1.b"]`. None of its items are tagged 3.T.SS.1.a. That is harmless for display but matters if anyone counts by item tag.

### 3.T.SS.1.b: Medium
- The lesson tests only sequence (T4) and topical sections (T2, T5), plus caption choice (T3).
- Compare and cause/effect plans appear only in practice match P5.
- No lesson test item turns on audience. W-REV-02-8 (families) does.
- SK-SS1b-T1 ("sentence that belongs in a different paragraph") is really a 3.T.SS.1.d skill.
- Add one test item where a non-sequence structure must be chosen and one where the audience decides the feature.

### 3.T.T.1.b: Medium
- About 7 of the 10 test items across 3.T.T.1.b and TS-PS are identification items: who is the main character, what is the problem, what is the setting, which part is it. The ALD puts "Identify a characteristic of plot" at Beginning and "Explain how characters, setting, problem, and/or solution function in the plot" at Proficient.
- Function is present in SK-TT1b-T3 (how Omar solves it + evidence), TS-PS P5/T5 (why a try failed, why paragraph 4 matters) and PT-1-2.
- **How the setting functions** (night, rain, place) is never taught or asked.
- Add a teach point ("Ask: how does the place or time change what happens?") and two items, for example: "Why does it matter that the rabbits come at night?" and "How does Dad's question help Omar solve the problem?"

## Minor item observations (all keys correct)
- SK-SS1d-T5 (T-SS.js:796). The distractor "We were all tired from running in the hot sun all day." could also open an end-of-day paragraph. The key is still clearly best. Low.
- SK-TSSEQ-T5. Part A's key ("so the butter will melt in the pan first") echoes the Part B sentence almost word for word. That is normal for text-based EBSR, so I did not flag it.
- SK-TT1e: dialogue is practiced (P2) but tested only inside the T5 ending. W-REV-02-4 adds a dialogue item.
- PT-1-12's explanation has a missing space: "...it means the tree lets its leaves fall.How leaves lose...". This is outside my slice's files; reported for whoever owns PT-1.

## Data and standards observations
- `standards.js` still has `"status": "not yet"` and `"where": []` for all 16 slice codes, even though lessons exist. `status` is not read by any js file I checked. `where` is read by js/parents.js:178 (only for external app links). The stale `status` is harmless but misleading. The fix belongs in `verification/gen-standards.py` / the alignment JSON, not here.
- 3.T.C.2.b, 3.T.C.2.d and 3.T.SS.2.c are absent from `standards.js`. `/home/claude/alignment/ga-grade3-ela-alignment.json` marks them "not applicable in grade 3 (this progression begins in grade 6)", and `gen-standards.py` drops them. That is consistent with the blueprint, which lists only 3.T.C.2 (a, c) and 3.T.SS.2 (a, b). **I have not checked it against the official standards PDF (UNVERIFIED).** The wording-diff agent should confirm.
- The `standards.js` header says the wording is "paraphrased" (from `short_official`). The `official_wording` column is copied verbatim from `standards.js` as the spec requires. Whether it matches the 2023 standards word for word is for the wording-diff agent.

## Not checked
- I did not run the gates (`check-content.js`, `readability.py`, `guard.py`).
- I did not re-solve mixed-set and PT-1 items against their passages (see Method).
- I did not review coach/clue boxes for accuracy beyond reading them. They read correctly.
- I did not check reading level.
- I did not check the GaDOE PDFs' page images. I used the extracted text only.
