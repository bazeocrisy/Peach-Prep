# PP-003 corrections log

This file summarizes every material correction made on branch `pp-003-fixes` (base: `main` at 66e536b).

Each fix agent wrote a full entry for each change in its own log in `docs/audits/work/`. Those entries record the deficiency, why it matters, the official requirement, the files changed, the exact correction (item IDs), the verification and the remaining limits.

| Log | Area |
|---|---|
| `fix-visuals.md` | Figure and bold support in the engine; original figures; visual items |
| `fix-roots.md` | Word roots (3.L.V.2.a, 3.L.V.2.c); choose-two points |
| `fix-texts.md` | Texts content gaps |
| `fix-meta.md` | Standards metadata, DRAFT ALDs, parent and test claims, consistency checks; the lead's 3.T.C.1.c addendum |
| `fix-mastery.md` | Honest pass wording, evidence fields, the loophole, fluency and grown-up observations, cursive spacing |
| `fix-ux.md` | Screen and functional defects D1–D17 |
| `fix-review.md` | Fixes for review findings RA, RB and RC |
| `fix-final.md` | Fixes for review findings RD and RE |

The review reports are `review-A.md` (standards), `review-B.md` (grade 3 instruction), `review-C.md` (cold solve), `review-D.md` (accessibility and child UX) and `review-E.md` (independent verification).

## Summary by severity

### High

| # | Deficiency | Official requirement | Correction | Verified by |
|---|---|---|---|---|
| H1 | The site could not show any image, so text features, captions and diagrams were described only in words | 3.T.C.1.b; 3.T.T.2.a; 3.L.V.3.a ("images and graphs") | Engine support for passage, item and example figures with required alt text, and for **bold** words. 16 original SVG line-art figures in `assets/figures/`. Checker rules: the file must exist, alt text of at least 5 words, no scripts, label size. SPEC §5e. | check-content; render at 320–1366; reviewers B, C, D and E |
| H2 | Pictures and graphs as context clues were never taught | 3.L.V.3.a | A teach point, a graph Watch Me, and items SK-V3a-P6, SK-V3a-T7 and SK-V3a-T8 | Reviewers A, B and C cold-solved them; RB-2 was fixed afterwards |
| H3 | Common roots were never taught | 3.L.V.2.a, 3.L.V.2.c | Roots taught, practiced and checked. SK-V2c-T8 was redesigned so the child must know port = carry. | All three reviewers flagged the first version of T8 (RB-1); fixed and re-solved by reviewer E |
| H4 | Grammar (GUM) was marked as tested in both reading and writing | Blueprint: 3.L.GC.1 appears only under Constructing Texts | 26 rows changed to "writing" in `standards.js` and in the generator; `site.js` and SPEC updated; a consistency check added | check-content; reviewer A |
| H5 | The ALDs were shown without their DRAFT status | ALDs dated October 2025, marked DRAFT, for 2025–26 | Every place ALD text appears now says DRAFT, gives the date, and notes it may change after standard setting | Reviewer A; guard |
| H6 | The parent guide said the site practices every GaDOE question format | Online Study Guide item types | The guide now lists which formats the site practices and says what is missing (no drag-and-drop) | Reviewer A |
| H7 | "Next" and the step tabs landed with the step heading hidden (UX D1) | Usability | Scroll is measured from the panel minus the sticky bar; 0 of 348 transitions hide the heading | Guard §12; reviewer D |
| H8 | A failed check could be retaken from memory and marked "Mastered" forever, and the wording overstated it | Phase D | "Passed the skill check" wording; a parent explanation; the hint loophole closed (A3); the practice-as-test loophole closed (RD-4); attempts, passedAt and answersSeen recorded; review suggested after 7 days; no stored meaning changed | Guard §11 and §13; reviewers B, D and E |

### Medium (summary)
- **Lesson gaps:**
  - 3.T.T.1.b: story-element function in the plot
  - 3.T.T.4.b: a poem's intended effect
  - 3.T.RA.1.c: paraphrase
  - 3.T.C.2.c: individual and situation
  - 3.T.SS.1.b: audience
  - 3.T.SS.1.a: map, caption and chapters
  - 3.T.C.1.c: the child makes and labels a real picture
  - 3.L.GC.2.c: agreement in complex sentences
- **Practice Test 1:** labelled as shortened (24 questions and 31 points, no essay), and results now include Research & Analysis.
- **Writing tasks:** the evidence-location list is now shown to parents, with a "home score, not official" line.
- **Fluency timer:** labelled a home practice tool. Grown-up observations are now saved separately from machine scores: expression, pauses, self-corrections and retell. Grown-up check-offs are labelled "Checked by a grown-up".
- **Cursive:** word spacing corrected to about one "o" (it measured 0.5 before and 1.0 after).
- **UX D2–D9:**
  - category heading under the search bar
  - phone search
  - Back on sets and essays
  - Forward and reload on a finished activity
  - focus after Check
  - an essay data crash
  - the skip link
- **Reviewer D:**
  - fluency result hidden (MUST)
  - focus loss
  - search on tablet and desktop
  - live-region announcements
  - alt text that ruled out answers
  - mixed "test" and "skill check" naming
- **Reviewer E:** an old best score shown against a new maximum (`bestMax` added).

### Low (summary)
- Choose-two and match items made consistent at 2 points: L-VOC-02-5, L-VOC-03-9, SK-V3b-P6, SK-V3c-P5, R-POE-01-q8, SK-TT4a-P2 and L-VOC-01-4.
- DOK ratings corrected: SK-TC1b-P5 and SK-TC1b-T3 from 3 to 2; SK-SS1a-P7 from 2 to 1.
- Legacy `status` and `ready`/`soon` fields removed.
- The meta description and the "Not practiced on Peach Prep" text made true.
- Contrast, tap targets, print, tab semantics, and the bad-route note.
- Duplicate passage titles renamed, and the PT-1-12 typo fixed.
- `__pycache__` removed from the repo.

## Stored-data migration (no owner approval needed: nothing changes meaning)
- `pp.progress.v1` keeps `mastered`, `best`, `tries`, `taught`, `learned`, `practiced` and `tried` with their old meaning.
- New fields are only ever added: `attempts[]`, `passedAt`, `passTry`, `passBy`, `lastPassAt`, `answersSeenAt`, `bestMax`, `legacyUndated` and `firstSeenPassedAt`, plus fluency `obs`.
- No pass date is ever invented for an old record.
- Reviewer E loaded a seeded 2.1 record on `main` and on the branch. Every status, count, ring and Up next matched.

## Items removed or replaced
SK-V2a-P3, SK-V2c-P1, SK-V2a-T5, SK-V2c-T2, SK-V2c-T3, SK-V3a-T1, SK-V3a-T3, SK-TC1b-P2, SK-TC1b-P3 and SK-SS1b-T1. Each has a replacement that closes a gap; reasons are in the logs. No guard or JS references a removed ID.

## Decisions documented rather than made (need owner approval)
These are listed in the mastery model (B1–B11):
- a second form of each check
- a stored "Retained" status
- a cooldown before retaking a check, or not counting a pass made right after seeing the answers
- the exact pass rule
- whether grown-up checks count toward "Retained"

Also open:
- a full-length practice exam (spec in PP-003-ASSESSMENT-ALIGNMENT.md §E2, estimated 15–22 working days)
- the four GUM Reinforce rows marked UNVERIFIED
