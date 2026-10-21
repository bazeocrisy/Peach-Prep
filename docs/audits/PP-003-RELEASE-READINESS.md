# PP-003 release readiness

**Release decision: READY WITH DOCUMENTED LIMITATIONS.** The branch is ready for the owner to review.

**Standards status: NOT YET VERIFIED COMPLETE.** 4 assessed expectations remain PARTIAL, all at Low severity, and 4 assessed GUM rows are UNVERIFIED.

Nothing has been merged to `main` and nothing has been deployed. Production (https://bazeocrisy.github.io/Peach-Prep/) is unchanged at v2.1.0.

## 1. Repository
- **Repo:** bazeocrisy/Peach-Prep. The default branch is `develop`, which matches `main`. GitHub Pages serves from `main`.
- **Base commit:** `main` 66e536b (v2.1.0, live).
- **Audit-reports branch:** `pp-003-audit`, holding the baseline audit reports only.
- **Fixes branch:** `pp-003-fixes`. It holds everything: the audit reports, all fixes, the reviews, and these deliverables. The final tested code commit is 44482e3; later commits touch `docs/audits` only.
- **Draft pull request:** `pp-003-fixes` → `main`. The link is in the hand-off message.

## 2. Standards results
Full detail is in PP-003-STANDARDS-REPORT.md and PP-003-STANDARDS-MATRIX.csv.

| | Before | After |
|---|---|---|
| Assessed expectations: VERIFIED COMPLETE | 52 / 69 | 61 / 69 |
| Assessed: PARTIAL | 17 | 4 (all Low) |
| Assessed: UNVERIFIED | 0 | 4 GUM Reinforce rows (official chart not retrievable) |
| Assessed: MISSING / INCORRECT | 0 / 0 | 0 / 0 |
| Classroom-only Foundations | 3 complete, 7 partial | 5 complete, 5 partial |
| Embedded Practices | 50 complete, 3 partial | 50 complete, 3 partial |
| GUM Introduce/Continue (not assessed) | 15 complete | 15 complete |

## 3. Problems discovered

**Critical:** none.

**High** (all fixed; see PP-003-CORRECTIONS-LOG.md H1–H8):
- no images at all
- graphs and pictures as context clues missing
- common roots missing
- grammar marked as tested in reading
- DRAFT ALDs unlabelled
- a question-formats over-claim
- the Next-step landing
- a retake-from-memory "Mastered" that was permanent and overstated

**Already fixed in earlier work, confirmed by this audit:**
- one-press Back on skills
- opening a lesson no longer marks it started
- the fluency clock stays in view
- the default fluency passage
- truncated labels
- stale feedback
- the phone search bar covering content
- skill-page print

## 4. Changes made
- **Educational:**
  - visual text features with 16 original figures
  - context clues from pictures and graphs
  - common roots
  - story-element function in the plot
  - a poem's intended effect
  - paraphrase in summaries
  - context (individual and situation)
  - audience
  - map, caption and chapters
  - a real multimodal make
  - agreement in complex sentences
  - a DOK 3 writing item
  - accurate rubric wording
  - DRAFT ALD labelling
- **Functional:** UX D1–D17; reviewer D's MUST and SHOULDs (focus, announcements, alt text, loopholes); an essay data crash guard; a bad-route note.
- **Assessment:**
  - Practice Test 1 labelled as shortened, and its results now include Research & Analysis
  - writing evidence list shown to parents
  - "home score, not official"
  - point consistency
- **Progress and metadata:**
  - honest "Passed the skill check" wording, with a parent explanation
  - new evidence fields only (no change in meaning)
  - review suggested after a dated pass
  - grown-up checks shown separately
  - GUM rows tested in writing only
  - legacy fields removed
  - new consistency checks

## 5. Quality verification
- **Automated:**
  - baseline: guard 63/63, check-content 0 failures
  - final: guard 95/95, check-content 0 failures (8 old warnings), readability pass, check-writing 0/0
- **Independent reviewers:**
  - A, standards: no MUST
  - B, grade 3 instruction: 2 MUSTs, both fixed
  - C, cold-solve: 65/65 keys agree
  - D, accessibility: 1 MUST, fixed
  - E, independent verification: no MUST; 11/11 newest items agree
- **Browser audit:** 320, 390, 768 and 1366 px; touch emulation; keyboard; print to PDF; Back, Forward and reload on 42 routes.
- **Not tested:** real screen readers, real iOS or Android browsers, the real print dialog, zoom and forced colours, and real children (see PP-003-TEST-RESULTS.md).

## 6. Outstanding work

**Needs the owner's approval** (mastery model B1–B11):
- a second form of each skill check, so retakes are not memorized
- a stored "Retained" status after a later review
- whether a pass made right after seeing the answers should count
- whether grown-up checks count toward Retained
- the exact pass rule (today it is ceil(80%) of the points)

**Owner action:**
- Click-test the five lor2.gadoe.org links; the sandbox could not reach them.
- Check the four GUM Reinforce rows against the official grade 3 GUM chart.
- Re-check the ALDs after GaDOE standard setting, around December 2026.
- Confirm the "where to practice" links to your other apps.

**Blocked:**
- A word-by-word check of the site's paraphrased standards against the official standards text. georgiastandards.org is retired, and lor2.gadoe.org refuses automated fetches.
- Confirming the time limits and sections of the grade 3 test.

**Future:**
- **Full-length practice exam:** specified in PP-003-ASSESSMENT-ALIGNMENT.md §E2; about 15–22 working days.
- **New question types:** drag-and-drop, and multi-part items beyond Part A/B.
- **Essay scoring guides:** model essays at 2, 4 and 6 points.
- **Remaining partial skills:**
  - bold print in a check item (3.T.C.1.b)
  - "individual" in the check (3.T.C.2.c)
  - a web-style source and note-taking (3.T.RA.1.b)
  - sentences inside a passage (3.L.GC.2.a)
- **Foundations:** dictated spelling and sight-word speed (classroom-only).
- **Progress:** export and import between devices.

## 7. Before you merge
1. Read this file and PP-003-STANDARDS-REPORT.md.
2. Open the branch locally (`node verification/serve.js . 8350`), or review the PR diff.
3. Try one skill end to end with your child, and look at the new figures.
4. If satisfied, merge the draft PR. The build string reads "Peach Prep 2.2.0-rc (PP-003)"; change it to "2.2.0" at merge if you like.
