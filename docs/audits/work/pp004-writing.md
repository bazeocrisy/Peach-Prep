# PP-004 change log: agent "writing"

Summary: docs/audits/PP-004-WRITING-REVIEW.md. All dates are 2026-10-20.

Official references:
- Standards PDF pages: p. 34 (3.T.T.3.c), p. 37 (3.T.RA.1.c), p. 29 (3.T.SS.1.c/d), p. 19 (3.L.GC.2.b/c).
- Rubric: Aug 2026, pp. 1-3.
- Writer's Checklist: 2026.

## C1. W-TASK-01 model: unsupported details
- **Deficiency:** three sentences said more than the sources do:
  - "hear smooth reading up close"
  - "help sound out the tricky word" (the source says "help with hard words")
  - "makes the older buddy a stronger reader" (the source, p2:2:5, says "understand stories better")
- **Requirement:** 3.T.RA.1.c (p. 37): "Summarize researched, relevant, and accurate information from at least two credible sources about a self-selected topic." Rubric Trait 2: "relevant and well-chosen information ... from the source(s)".
- **Files:** `js/data/tasks/W-TASK-01.js` `model.paragraphs[1..2]` and `model.notes[1]` (the quote is updated).
- **Verified:** check-writing passes. The model-quote check and the 6-word copy check pass.
- **Remains:** none.

## C2. W-TASK-01 model: topic not introduced
- **Deficiency:** the introduction never says what a reading buddy program is.
- **Requirement:** 3.T.T.3.c (p. 34): "...opinion pieces that introduce the topic, state an opinion about the topic..."
- **Files:** `model.paragraphs[0]` and `model.notes[0]` and `model.notes[2]`. The notes' "short ones" example and the "would and could" wording are updated, because "could" left the model.
- **Verified:** the model is 260 words, inside 180-260. check-writing passes.
- **Remains:** none.

## C3. W-TASK-02 source p2:2:1: causal claim hedged
- **Deficiency:** "Having a good place to play nearby makes kids more likely to be active" is stated as cause and effect.
- **Requirement:** 3.T.RA.1.c "accurate information" (p. 37). The task header rule says "Facts are general and hedged".
- **Files:** `js/data/tasks/W-TASK-02.js`, source p2 paragraph 2 sentence 1 and evidence ref p2:2:1. The new wording is "Kids are often more active when they have a good place to play nearby."
- **Verified:**
  - Sentence refs are unchanged.
  - check-writing passes; check-content passes.
  - readability: p2 is still 180 words, FK about 4.1.
- **Remains:** none.

## C4. Leveled example responses (both tasks)
- **Deficiency:** only an 8-point model existed (PP-003 E3, Medium).
- **Requirement:** rubric traits:
  - P&O, 0-3
  - E&E, 0-3
  - LUC, 0-2, including the footnote "Very brief responses, even with few or no errors, may not be sufficient to demonstrate adequate or partial command."
- **Files:** `examples` in both task files. Each task has three original responses, at 2, 4 and 6 points.
  - W-TASK-01: 1/1/0, 2/1/1 and 2/2/2.
  - W-TASK-02: 1/0/1, 1/2/1 and 3/2/1.
  - Each example has trait notes that cite the rubric column and a `next` step.
  - Mistakes are intentional and labelled.
  - Borderline calls are stated as borderline.
- **Verified:** check-writing validates the following, with 0 failures:
  - scores, totals and note headers
  - quotes found in the example
  - copying flagged (W-TASK-01 4-point: "The big buddy can help with hard words" is named in its note)
- **Remains:**
  - These are Peach Prep's scoring judgements. They are not GaDOE anchor papers, and they have not been checked against the GaDOE scoring samplers.
  - No second human reviewer has checked them.

## C5. Step-by-step parent scoring (both tasks)
- **Deficiency:** the parent tab had no scoring routine, no description of each score level and no coaching language.
- **Requirement:** the three rubric traits and their column descriptors (rubric pp. 1-3). The Writer's Checklist lines are listed in the review table.
- **Files:**
  - `scoring.{purpose,evidence,conventions}` in both task files: `steps`, `points` (0..max, restating the rubric columns in plain words) and `say`.
  - `js/writing.js` renders them in each trait card as a `<details>` panel.
- **Verified:**
  - check-writing validates the structure.
  - Rendered at 390 and 1366 with no horizontal scroll.
- **Remains:** none.

## C6. Parent tab UI for the examples and the coaching tip
- **Files:**
  - `js/writing.js` `buildScore`:
    - a tip line
    - an examples `<details>` with the label "These are examples scored by Peach Prep using the official rubric's descriptions. They are original essays, not official GaDOE anchor papers."
    - an h3 heading per example
    - a shared `guard()` for the "show only after writing" confirm
  - `css/styles.css`: one appended PP-004 block.
- **Kept:** "This is a home score for practice, not an official Georgia Milestones score." check-writing now asserts that this line and the example label are present.
- **Verified:** Playwright at 390 and 1366, both tasks:
  - The draft and plan reload.
  - A radio score reloads.
  - Stored keys are unchanged: checks, draft, plan, scores.
  - No new console errors. The only errors are blocked font requests.
- **Remains:** keyboard use relies on native `<details>`/`<summary>`. It was not tested with a screen reader.

## C7. Spell-check line (lead request)
- **Deficiency:** "Spell-check is off, like on the test." No source supports the "like on the test" claim.
- **Requirement:** brief rule: no unsupported claims.
- **Files:** `js/writing.js`, the Write tab note. It now reads "Spell-check is off here."
- **Verified:** grep, and check-writing passes.
- **Remains:** none.

## C8. check-writing GUM pattern (lead request)
- **Deficiency:** `stdOk` used `/^3\.L\.GC\.1:[GUM]:.../`. The codes in standards.js use the level letters C, I, M and R, so the checker rejected valid Reinforce codes and accepted the meaningless letters G and U.
- **Requirement:** blueprint: 3.L.GC.1 is assessed under Constructing Texts for Master and Reinforce rows only. check-content.js enforces the same rule.
- **Files:** `verification/check-writing.js:32`, changed to `[MR]`.
- **Verified:**
  - A regex test accepts R and M and rejects C.
  - check-writing gives 0 failures.
- **Remains:** none.

## Gates run
- check-writing: 0 failures, 0 warnings.
- check-content --all: PASS, 0 failures. There are 8 warnings, none of them in the tasks.
- readability.py: run.
- Port 8486 server stopped.
