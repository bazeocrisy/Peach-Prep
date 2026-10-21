# PP-004 log: agent "standards"

Date: 2026-10-20. Port: 8481 (the server was started for a smoke test and stopped by its PID).

Source for every entry: "Georgia's K-12 ELA Standards: Foundations, Language, Texts, & Practices, Grades 3-5". The PDF has 52 pages and was approved May 2023. Page numbers are PDF pages, which are the same as the printed footers.

The full per-code detail is in two places:
- `docs/audits/PP-004-OFFICIAL-STANDARDS-VERIFICATION.md`
- `docs/audits/PP-004-GUM-CHART-VERIFICATION.md`

## Change 1. Official grade 3 transcription (new files)

**Deficiency.** PP-003 had no official text. The wording of the site's standards and the 4 GUM Reinforce rows were UNVERIFIED (PP-003-STANDARDS-REPORT.md and PP-003-RELEASE-READINESS.md).

**What was done.** Every grade 3 expectation and every GUM row was transcribed, with code, verbatim wording and PDF page. Each was checked against the page images.

**Files.**
- `docs/audits/work/official-gr3-standards.json`: 114 codes, of which 106 are applicable and 8 are "This progression begins" placeholders.
- `docs/audits/work/official-gr3-gum.json`: 61 rows, 41 of them grade 3 rows, each mapped to a site `siteCode`.

**Verification.**
- The text was parsed by a script.
- The grade 3 column of every expectation page (pp. 7-38) was compared with the rendered page image.
- Practices pp. 42, 47 and 49 were spot-checked.
- The GUM pp. 15-18 were read cell by cell from the images.
- Two line-break artefacts were fixed from the images: "self-selected" (p. 37) and "compound-complex" (p. 18).

**What remains.**
- Italics cannot be stored in the JSON.
- Practices pp. 43-45, 50 and 52 were checked from the text only. The text there is single-column and unambiguous.

## Change 2. Code coverage: no change needed

**Finding.** No code is missing and none is extra: 106 of 106 applicable expectations and 41 of 41 grade 3 GUM rows. The 8 dropped codes are each confirmed as a placeholder:

| Code | Placeholder text | Page |
|---|---|---|
| 3.L.GC.2.e | begins in 9th grade | 19 |
| 3.L.V.2.d | begins in 6th grade | 22 |
| 3.T.C.2.b | begins in 6th grade | 27 |
| 3.T.C.2.d | begins in 6th grade | 27 |
| 3.T.SS.2.c | begins in 6th grade | 30 |
| 3.T.T.3.b | begins in 9th grade | 34 |
| 3.T.T.3.d | begins in 9th grade | 34 |
| 3.T.RA.2.c | begins in 5th grade | 38 |

## Change 3. `official` and `page` fields on all 147 records

**Deficiency.** The site stored only a paraphrase (`text`) and had no verbatim wording to check against.

**Change.** Two fields were added to every record in `js/data/standards.js`, through `verification/gen-standards.py`:
- `official`: the verbatim wording;
- `page`: the PDF page.

No existing field was removed or renamed, so nothing that reads the file changes.

**Verification.** The generator reproduces `standards.js` byte for byte, and `check-content.js` enforces both fields.

## Change 4. `text` corrected where the paraphrase changed the meaning (60 records)

**Deficiency.** In 56 expectations and 4 GUM rows, the paraphrase changed the official meaning. It did one of these:
- added scope, as in 3.L.GC.2.a;
- dropped a required action, object, scope or purpose, as in 3.L.GC.2.d "Elaborate on ideas and information", 3.T.T.4.b "and engage audiences", and 3.T.T.1.d "within texts across diverse cultures";
- changed a verb, as in 3.T.C.1.b "Identify ... explain" for "Determine ... describe";
- narrowed a category, as in 3.T.SS.2.b "similes, metaphors, and idioms" for "figurative language, such as ...", and 3.T.C.2.a "the perspective" for "different perspectives".

**Requirement.** The verbatim wording of each code. The before/after table, with pages, is in PP-004-OFFICIAL-STANDARDS-VERIFICATION.md §6 and PP-004-GUM-CHART-VERIFICATION.md "Fixes made".

**Files.** `verification/gen-standards.py` (the `TEXT_FIX` set) and `js/data/standards.js`, regenerated.

**Codes changed.**
- **Foundations:** 3.F.F.1.d.
- **Language:** 3.L.GC.2.a, 3.L.GC.2.d, 3.L.V.1.b, 3.L.V.3.d.
- **Texts:** 3.T.C.1.b, 3.T.C.2.a, 3.T.C.2.c, 3.T.SS.1.a, 3.T.SS.1.c, 3.T.SS.2.b, 3.T.T.1.d, 3.T.T.1.e, 3.T.T.2.b, 3.T.T.2.d, 3.T.T.3.a, 3.T.T.3.c, 3.T.T.4.b, 3.T.RA.1.a.
- **Practices:**
  - EICC: 1.a-e, 2.a-c, 3.c, 3.f, 4.b-g;
  - ST: 1.a, 1.c, 2.a-c;
  - AC: all 12 (1.a-d, 2.a-d, 3.a-d);
  - CP: 1.b-d, 2.b.
- **GUM:**
  - `3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr`
  - `3.L.GC.1:C:use-conventional-capitalization-quotation-marks-`
  - `3.L.GC.1:I:use-conventional-capitalization-in-abbreviations`
  - `3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar`

**Not changed.**
- The 37 expectations and 13 GUM rows whose paraphrase only rewords: they are reported, not changed.
- The `plain` paraphrases: none is factually wrong.
- The `gum` labels and code slugs: lessons and progress reference the slugs.

**Verification.**
- `check-content.js --all`: 0 failures.
- `readability.py`: exit 0.
- `check-writing.js`: 0 failures, 0 warnings.
- A Playwright smoke test on port 8481 showed:
  - 147 records, all with `official` and `page`;
  - the 3.L.GC.2.d and 3.T.C.2.a skill pages show the corrected text;
  - the parent "Every standard" tab shows "147 of 147 standards shown";
  - no page errors.

**What remains.**
- **Labels (for the lead).** Both of these files are outside this agent's scope.
  - `js/skills.js:447` still labels the text "(paraphrased)". It should show `official`, labelled as official wording.
  - `js/parents.js:147` still says "Georgia's standard, paraphrased:". The same change applies.
- **Lessons.** The lessons for 3.T.C.2.a, 3.T.T.1.d, 3.L.GC.2.d, 3.T.SS.2.b, 3.T.T.4.b, 3.T.C.1.b and 3.L.GC.2.a should be re-read against the corrected wording. No lessons were edited.

## Change 5. GUM levels: verified, no change needed

**Finding.**
- The counts are M 8, R 18, I 11, C 4, 41 in all. They match the site.
- All 41 levels and code slugs match.
- The four PP-003 UNVERIFIED rows are confirmed as R on p. 15 (image): "Use nouns and verbs to share complete thoughts when speaking.", "Form and use singular and plural nouns when speaking.", "Use interrogatives to ask questions when speaking.", "Capitalize the first word of a sentence and the pronoun I."

**Consequences.** No new rows, so no new lessons. No relevelling, so the on-the-test status of every GUM row is unchanged.

## Change 6. Automated checks (`verification/check-content.js`)

A new section, "PP-004: standards.js against the official grade 3 standards", was inserted before the summary output. It checks:
- codes in both directions;
- that no placeholder code is on the site;
- `official` and `page` for every record;
- GUM row mapping, levels, the level letter in each slug, wording and page;
- M and R rows tested "writing", I and C rows tested "no";
- the official counts.

**Verification.** A mutation test in a scratch copy produced 6 expected FAILs: a relevelled row, two altered official wordings, a code removed and a fake code added. The real tree passes.
