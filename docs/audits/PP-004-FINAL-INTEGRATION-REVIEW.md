# PP-004 final independent integration and release verification

Date: 2026-10-21 (America/New_York). Reviewer: Codex, continuing the GitHub handoff. No new reviewers or subagents were launched.

## Release decision

**READY FOR OWNER REVIEW WITH DOCUMENTED LIMITATIONS.** No release-blocking functional failure was found. PR #3 remains a draft. No merge or deployment was performed.

- Frozen application and test source: `f1f79791fe7215915821a3fc6d165f131231a143` on `pp-003-fixes`.
- Production branch at intake: `66e536b5366317f22efdd573665ff8fff7fd4d82` (`main`).
- Existing PR: https://github.com/bazeocrisy/Peach-Prep/pull/3
- Handoff reviewed: `handoff/next-session-2026-10-21`, `docs/handoffs/PEACH-PREP-NEXT-SESSION-2026-10-21.md`.
- Application code, lesson data, scoring rules, saved progress and feature-flag defaults were not changed during this audit. Any later commit for this report contains documentation/evidence only.

## What was continued

The PP-003 reports are historical baseline/fix-phase evidence, not the current release verdict. PP-004's later matrix and review rounds supersede their 61/69 count and the four unverified GUM classifications. The outstanding release task was a full browser run after editing stopped; prior full runs straddled commits.

I reconciled the top-level PP-003 and PP-004 reports, both matrices, and the PP-004 work reports, including review A/A2, C-formB/C-changed/C3-C6 and E. `report-inventory.json` records 49 report paths and their hashes at the tested commit. I reused the existing broad lesson and blind-solve reviews, checking the final changes and integration instead of repeating every authored question review.

## Current coverage and inventory

| Group | Current matrix rows | Matrix status |
|---|---:|---|
| Milestones Interpreting expectations | 27 | VERIFIED COMPLETE |
| Milestones Constructing expectations | 16 | VERIFIED COMPLETE |
| GUM Master/Reinforce, Constructing | 26 | VERIFIED COMPLETE |
| Classroom-only Foundations | 10 | VERIFIED COMPLETE |
| Embedded Practices | 53 | VERIFIED COMPLETE |
| GUM Introduce/Continue, not assessed | 15 | VERIFIED COMPLETE |
| **Total** | **147** | **147 complete; no partial/missing/incorrect/unverified rows** |

There are **69 assessed expectation/GUM rows**, **74 on-test lessons**, **99 lessons overall**, **13 alternate checks with 67 form-B items**, **520 practice items**, **489 form-A check items**, **147 mixed/practice-test items**, **2 essays**, and **29 SVG figures**. Thus the browser engine sees **1,223 items**. Different lesson and standards counts are expected; five text-structure lessons revisit existing expectations.

"Complete" is the existing component-coverage criterion: teaching, practice and assessment, or a specific adult-led routine for oral/handwritten components. It does not establish a child's mastery, effectiveness in real use, or official GaDOE certification. I independently reconciled the official source metadata and reviewed closure of the four former gaps; I did not newly cold-solve all 1,223 items.

### Official document reconciliation

The supplied `Peach-Prep-Handoff-Attachments(1).zip` was present and contained the six named PDFs. Standards and assessment text were extracted locally; the GUM chart on PDF pp. 15-18 was also read as rendered page images.

- All **147/147** `official` strings have matching normalized alphanumeric sequences on their cited PDF pages. This comparison ignores whitespace, punctuation and line-break hyphenation; it is not a new character-for-character typography audit.
- Direct extraction finds **61** Grade 3 lettered codes. The site contains **53**, excluding exactly the eight later-grade progression placeholders documented by PP-004, with no extra Grade 3 code.
- The Grade 3 GUM column has **M 8, R 18, I 11, C 4** (41 included rows; 20 other rows are NYI in Grade 3). All four previously unverified rows on p. 15 are **Reinforce**.
- The supplied ALDs are still explicitly **DRAFT, October 2025**, with 2025-26 printed on them. This audit does not certify that no newer official document exists. A current official-site check did not yield a retrievable replacement; the rubric URL and the ELA landing page could not be read.
- The supplied Math ALDs were inventoried only; they are outside this ELA release scope. PDF hashes are in `source-reconciliation.json`. PDF binaries are not added to GitHub by this audit.

### Four formerly partial expectations

| Code | Final closure evidence retained and checked |
|---|---|
| `3.T.C.1.b` | Bold/glossary T7, text box T2, diagram T3, caption T6, web-page features T8, and video-caption/sound T9. Spoken features occur in both practice halves. |
| `3.T.C.2.c` | Time-period items plus situational T6 and individual-context T7; corresponding teaching and practice. |
| `3.T.RA.1.b` | Digital sources, credibility P8/T8, notes-table T7, and a self-selected research/write routine. |
| `3.L.GC.2.a` | Complete/fragment/run-on and simple/compound/complex distinctions, including sentences embedded in student drafts. |

The focused browser check opened all five steps of these four lessons at 320/390/768/1366 px with no horizontal overflow or page errors.

## Fresh verification on the frozen source

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures, 6 warnings |
| `node verification/check-writing.js` | PASS, 0 failures, 0 warnings |
| `python3 verification/readability.py` | 125 prose passage records; maximum printed FK about 4.5; none flagged above 4.5 |
| Full `verification/guard.py` | **110 passed, 0 failed, exit 0**, on the frozen source |
| Focused final-change browser checks | **100 passed, 0 failed**, 25 at each of four widths |
| Official wording/page reconciliation | **147/147** normalized matches |
| Form inventory | **13/13** alternate forms have the same point total as their form A |

Readability is a screening estimate, not a Lexile measure. The six content warnings are the existing clue-overlap notes on PT-1-14, SK-V3b-T1 (two slots), SK-TT1a-T5, SK-TT1d-P1 and SK-TT1e-T5. They are not failed checks. Most concern explanations/hints shown outside the unaided check; SK-TT1d-P1 remains a minor practice cue.

### Runtime and evidence boundaries

This environment did not have a browser installed. The normal browser download failed. I used packaged **Chromium 131.0.6778.0** with **Playwright 1.49.1**, matching that Chromium generation. Earlier incomplete attempts with newer driver versions are not counted as passing runs.

The repository's guard assertions and application files were not edited. The external launcher supplies the browser executable and sandbox-compatible flags; each later `Browser.new_page` gets a fresh browser rather than disposing isolated contexts inside a single-process browser. This preserves fresh-page/storage isolation. A profile hook streams completed check names; it does not change their conditions. The committed launcher records this adaptation.

Browser evidence is Chromium only, with external Google Font requests blocked and GPU rendering disabled. Eight focused screenshots were captured; phone, tablet and desktop layouts were visually inspected. This does **not** verify real iPhone/Safari/Android operation, a real on-screen keyboard, real screen-reader speech, a physical print dialog, forced colours, or learning outcomes with children. Previous browser/print observations remain historical evidence, not new real-device testing.

GitHub returned no PR discussion entries, commit status checks, or pull-request-triggered workflow runs for the intake SHA. This is local verification, not a claim that GitHub CI is green.

## Latest changes and prior findings reconciled

| Prior finding | Final disposition |
|---|---|
| Review E F1: missing official wording/page on 41 parent-guide GUM rows | **Fixed and independently browser-verified.** All 147 rows show their wording and page at every tested width. |
| Review E F2: guide says every check always repeats | **Fixed and browser-verified.** The guide distinguishes most one-form checks from alternating two-form checks. |
| Review E F3: mastery document says one fixture | Main scope/decision text was corrected at `f1f7979`; one table cell remained stale. Corrected in this audit's documentation-only commit. |
| A2 M-1: second independent form-B review missing | Later C4/C5/C6 reports address the earlier process hold. C5 reviews all 67 B items; C6 rechecks the three later revised targets. Those are existing review records, not new reviewers launched here. Final changed items were additionally inspected in this audit. |
| C5 RC5-1: poem item exposes the stanza/line answer label | **Fixed.** SK-TT4a-TB2 is now multiple choice with quoted lines, so the answer is not labelled as stanza 2, line 1. The keyed line begins the second stanza. |
| C6 RC6-1/2: irregular-plural imbalance and life/lives cue to wife/wives | The final TB4 has shelves/fishermen errors plus correct salmon/bison rows. The life/lives cue is absent; four-row keys and feedback agree. Slight A/B DOK weighting differences remain documented. |
| C5 RC5-3 / C6 RC6-8: pecan graph item repeats an earlier reasoning pattern or mismatches the stem | Final stem refers to pecans picked and the keyed meaning is "became fewer" (8 to 4 buckets). This uses the trend, not a graph-axis definition. See the small feedback wording note below. |
| Broken reference to `PP-004-ASSESSMENT-REVIEW.md` | The file does not exist at intake. The historical assessment report now links directly to the existing `work/pp004-exam-plan.md`. No full-length exam was implemented. |

### Remaining non-blocking notes

1. **Small feedback inference:** SK-V3a-TB1's explanation says fewer pecans were "left to pick." The graph establishes fewer buckets *picked*, not how many remained on the trees. The answer and the revised stem are correct. Suggested later copy edit: "Week 3 has 8 buckets, but week 4 has 4, so the family picked fewer pecans after week 3." Application text was left unchanged during this independent audit.
2. **Known practice/test limitations:** PT-1-13 still has the green/chlorophyll surface-word match noted in C5. PT-1 remains a shortened 24-item, 31-point form without an essay, paired texts, poem or opinion text. The app labels its limits and does not convert scores into Milestones achievement levels.
3. **Coverage and UX polish:** the matrix's Low notes remain, including limited explicit assessment of some subcomponents, oral observations only on the device, a few similar practice/check frames, narrow phone teaching figures, and the minor fluency/header/disabled-control notes listed in the UX report. These were not silently promoted to resolved findings.
4. **Writing calibration:** the 2/4/6-point examples are Peach Prep judgments, not official anchor papers or trained-scorer validation. The uploaded ZIP does not include the rubric PDF; its full text alignment relies on the existing writing review, plus the fresh structural/browser checks here.

## Retained and owner approval

`PP_FLAGS.retained` remains off by default. The 13 reviewed alternate forms can rotate without turning it on. The other 61 on-test lessons still have one form. The Retained policy, broader form-B rollout, wording/counting choices, full-length exam and any assessment-policy changes remain separate owner decisions; none is enabled by this report.

**Do not merge or deploy automatically.** The owner should review PR #3 and this report. A later application/content change needs checks appropriate to that change; the tested SHA must not be presented as covering untested later edits.

## Evidence

See [the evidence index](evidence/pp004-2026-10-21/README.md), [machine-readable results](evidence/pp004-2026-10-21/release-results.json), [the full browser log](evidence/pp004-2026-10-21/guard-final.log), and [the source checker](evidence/pp004-2026-10-21/verify-sources.py). The existing [final coverage matrix](PP-004-FINAL-COVERAGE-MATRIX.csv) remains unchanged.
