# PP-003 standards coverage report

**Matrix:** `docs/audits/PP-003-STANDARDS-MATRIX.csv` (147 rows, one per assessable expectation or GUM chart row)
**Base audited:** `main` at 66e536b (v2.1.0, live on 2026-10-20)
**Fixes on:** branch `pp-003-fixes`
**Audit date:** 2026-10-20

**Verdict: Peach Prep is NOT YET VERIFIED COMPLETE.** After the fix phase:
- 61 of the 69 Milestones-assessed expectations have evidence-backed full coverage.
- 4 assessed expectations are PARTIAL. Every remaining gap is rated Low.
- 4 assessed GUM rows are UNVERIFIED, because the official GUM chart could not be retrieved.
- No assessed expectation is MISSING or INCORRECT.

## 1. What was counted, and how

| Term | Meaning | Count |
|---|---|---|
| Standard | A top-level Georgia code, e.g. 3.T.T.1 | 19 grade 3 standards, plus 11 K-12 Practices standards |
| Expectation | A lettered part of a standard, e.g. 3.T.T.1.a; the lowest level that is assessed | 53 grade 3 expectations, plus 53 K-12 Practices expectations |
| GUM row | One row of the Grade 3–5 Grammar, Usage & Mechanics chart, with a grade 3 level: M = Master, R = Reinforce, I = Introduce, C = Continue | 41 (M 8, R 18, I 11, C 4) |
| Matrix row | One expectation or one GUM row | 147 |
| Lesson | One skill page (Learn It, Watch Me, Practice, Check); its `codes` say which expectations it targets | 99 |
| Question | One practice or check item | See PP-003-TEST-RESULTS.md for final counts |

Counting rules:
- A lesson or question that targets more than one expectation counts once under each one in the matrix. Matrix question counts are therefore not summed into a site total.
- "Assessed" follows the August 2025 blueprint, not the site's own flags. That gives:
  - 27 Interpreting Texts expectations
  - 16 Constructing Texts expectations
  - 26 GUM Master/Reinforce rows (assessed in Constructing Texts only)

  That is 69 in all.
- Classroom-only Foundations (10 rows) and embedded Practices (53 rows) are rated "NOT APPLICABLE TO MILESTONES – <coverage>", so their coverage is still judged.
- Grade 3 Introduce/Continue GUM rows (15) are not assessed. They are rated the same way.
- No expectation was marked complete just because its code was attached. Each domain auditor read the teach text and every practice and test item. Every check item in the audited lessons was solved by an auditor before the key was read.

## 2. Results

### Assessed on Milestones (69)

| Status | Before fixes | After fixes |
|---|---|---|
| VERIFIED COMPLETE | 52 | 61 |
| PARTIAL | 17 | 4 |
| UNVERIFIED | 0 | 4 |
| MISSING | 0 | 0 |
| INCORRECT | 0 | 0 |

"Before fixes" is the audit of `main`. "After fixes" is `pp-003-fixes`. Each row of the matrix keeps both: the audit columns and the `post_fix_*` columns.

### Not assessed on Milestones (78)

| Group | Complete | Partial |
|---|---|---|
| Foundations, classroom only (10) | 5 | 5 |
| K-12 Practices, embedded (53) | 50 | 3 |
| GUM Introduce/Continue (15) | 15 | 0 |

### By domain, after fixes

| Domain | Complete | Partial | Unverified |
|---|---|---|---|
| Texts (29) | 26 | 3 | 0 |
| Language: Vocabulary and GC.2 (14) | 13 | 1 | 0 |
| Language: GUM rows (41) | 37 | 0 | 4 |
| Foundations (10) | 5 | 5 | 0 |
| Practices (53) | 50 | 3 | 0 |

## 3. Remaining gaps

**Assessed, PARTIAL (all Low):**
- **3.T.C.1.b, text features across modes.**
  - Fixed: captions, diagrams, bold print and a spoken feature are now taught, with real original figures, and captions and diagrams are practiced and checked.
  - Still open: bold print is practiced but not checked, and digital and audio features are still described in words.
- **3.T.C.2.c, context.** "Individual" is practiced but not checked. "Situation" is checked but only modeled, not practiced.
- **3.T.RA.1.b, research sources.** There is no web-style source and no note-taking activity.
- **3.L.GC.2.a, sentences.** Every item is a stand-alone sentence; none sits inside a passage.

**Assessed, UNVERIFIED (Medium):** four GUM Reinforce rows:
- complete thoughts in speech
- singular and plural nouns in speech
- question words in speech
- capitalizing the first word and "I"

The site teaches and tests all four in writing. But none of them appears in the DRAFT ALDs, and the official grade 3 GUM chart could not be retrieved, so whether they are assessed rows is unconfirmed. **Owner action:** check them against the GUM chart.

**Not assessed, PARTIAL (Medium):** the Foundations phonics expectations (3.F.P.4.a–c), and automatic reading of high-frequency words (3.F.F.1.a).
- The child never writes a dictated word, and reading speed of sight words is never observed.
- These are classroom-only, so they do not affect Milestones readiness. They are listed as future work.

## 4. The audit's High findings and how they were resolved

| Expectation | Finding | Resolution |
|---|---|---|
| 3.T.C.1.b | Site could show no images; text features only described | Image and bold support added to the engine. 13 original figures, later 16. New caption, diagram and spoken-feature items. Now PARTIAL, Low |
| 3.L.V.3.a | Pictures and graphs as context clues never taught | Teach point added. Graph Watch Me, a labeled-picture practice item, and two figure-based check items (labeled heron, bar graph). Now COMPLETE |
| 3.L.V.2.a | Common roots never taught | Roots taught as a list (port, graph, tele, phon, rupt, spect), plus mis-. Practiced and checked. Now COMPLETE |
| 3.L.V.2.c | Building words from roots never taught | Taught, practiced and checked. SK-V2c-T8 now requires the meaning of port = carry, not letter-spotting. Now COMPLETE |

The Medium findings fixed are each listed in PP-003-CORRECTIONS-LOG.md:
- 3.T.T.1.b: story elements' function in the plot
- 3.T.T.2.a: text design
- 3.T.T.4.b: a poem's intended effect
- 3.T.SS.1.a: maps and chapters
- 3.T.SS.1.b: audience
- 3.T.C.1.c: making a real multimodal text
- 3.T.C.2.c: individual and situation
- 3.T.RA.1.c: paraphrase
- 3.T.T.2.d: DOK 3 and illustrations
- 3.L.GC.2.c: agreement in complex sentences
- Foundations fluency and cursive

## 5. Source caveats
- **ALDs:** the October 2025 ALDs are DRAFT, and the site now says so wherever it shows them. GaDOE sets standards for the new ELA test in late fall 2026, so re-check the ALDs in December 2026.
- **Standards wording:** the official grade 3 standards text could not be retrieved, because georgiastandards.org is retired and lor2.gadoe.org blocks automated fetches. The site's standard wording is a deliberate paraphrase and is now labelled as one. A word-for-word check against the official standards PDF is still to do.
- **Blueprint typo:** the blueprint prints "5.L.V.3 (e)", which is read as 3.L.V.3(e).
- See PP-003-SOURCE-VERIFICATION.md for details.

## 6. What this report does not prove
- Coverage means the site teaches and checks each component. It does not show that a child learns it. That needs real use with children.
- The skill check is short (4–6 items) and repeats the same questions. Passing it is a first checkpoint, not durable mastery. See PP-003-MASTERY-MODEL.md.
- DOK ratings are the authors' and reviewers' judgment.
