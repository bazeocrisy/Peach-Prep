# Coverage ledger (question-first), 2026-10-27

Two snapshots, because the content branch is ahead: **A** is `feature/question-first` as it stands (content as of 9eba382 plus later local lessons); **B** is the trial merge with `origin/content/standards-practice` 05520cf (see `DEPENDENCIES.md`). Regenerate either with `node verification/coverage-ledger.js --ids`. "Converted" means the lesson has `core` practice and therefore opens at a practice question. "Accepted" means an independent reviewer accepted the lesson (`js/data/accepted.js`, `docs/expansion-2026-10-22/batches/STATUS.md`). The project's own `peach-prep/STATUS.md` was not readable from this session, so review status here comes only from those two repo files.

## Summary
| | A: this branch | B: merged with content |
|---|---|---|
| Lessons | 101 | 101 |
| Converted (core, 15 items) | 44 (660 items) | 77 (1155 items) |
| Accepted by independent review | 34 | 65 |
| Converted, not yet accepted | 10 | 12 |
| Documented performance exceptions (no core by design) | 6 | 6 |
| Not converted (five-step flow) | 51 | 18 |
| Teach Me: items with no matching teaching point | 82 | 220 |
| Teach Me: items with no misconception line | 23 | 23 |
| Teach Me: passage items whose evidence hint names no paragraph | 350 | 560 |
| Items whose early Teach Me card names the answer (`teach-leaks.json`) | 404 | 509 |

The performance exceptions (listed per snapshot below) keep their own flow by design: timed readings, cursive, adult checklists. They are not a gap.

## Assessment coverage
Skill checks are unchanged by question-first and still use fresh items with no Teach Me, hints or feedback. 97 of 101 lessons have a check (566 check items, 13 lessons with a second form B). No check: 3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b (adult-checked performance lessons). Practice never records a pass: finishing the fifteen sets only `tried`.

## Functional test status
FUNC

## Content review status
Review is independent of this work. A: 34 accepted, 10 converted lessons await review. B: 65 accepted, 12 converted lessons await review. The review ledger (`review-ledger.json`) has no per-lesson attestations in either tree, so `check-content` prints a warning for every part without a record (198 on A, 244 on B); that is a warning, not a failure, until `--release`.

## Remaining work
1. Answer leaks: 404 items on A (509 on B) show the key in an early card; the player marks them answer shown honestly, but authors should rewrite the early steps so they point without quoting (`node verification/teach-leaks.js` lists them; the allowlist must shrink to zero).
2. Teaching coverage: add a teaching point or reword for the items with no match (82 on A, 220 on B); add the misconception line to 23 items; make the evidence hint name a paragraph for the passage items listed below so "Show it in the text" can highlight (350 on A, 560 on B).
3. Convert the remaining lessons (51 on A, 18 on B) or document them as exceptions.
4. Independent review of the converted lessons not yet accepted.
5. Human checks not done here: a real phone, a real screen reader, Safari/iOS.
6. Regenerate `teach-leaks.json` and this ledger after each content merge.

## Snapshot A: this branch
Lessons in this tree: 101. Converted to question-first (core practice, fifteen items in three sets): **44** (660 core items). Documented performance exceptions (no core by design): **6**. Not converted yet (keep the five-step flow): **51**.

Teach Me data gaps over the 660 core items: no matching teaching point 82; no misconception line 23; evidence hint without a paragraph reference (passage items) 350.
Skill checks: 97 lessons have a check (566 check items in total, 13 lessons with a second form B). Lessons with no check: 3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b.
Independent review (js/data/accepted.js, batches/STATUS.md): 34 lessons accepted (34 of them with core practice); converted but not yet accepted: 10. The review ledger holds 0 per-lesson attestations.

### Converted lessons
| Lesson | Title | Core | Similar | Check A / B | Review accepted | Gaps: point / misc / paragraph |
|---|---|---|---|---|---|---|
| 3.L.GC.2.a | Complete sentences: simple, compound and complex | 15 | 15 | 6 / - | not yet | 2 / 0 / 10 |
| 3.L.GC.2.b | Mix your sentences and keep verbs in the same time | 15 | 15 | 5 / 5 | not yet | 2 / 0 / 6 |
| 3.L.GC.2.c | Make the subject and verb agree | 15 | 15 | 5 / - | not yet | 2 / 0 / 5 |
| 3.L.GC.2.d | Add details with exact describing words | 15 | 15 | 5 / - | not yet | 6 / 0 / 7 |
| 3.L.V.1.a | Learning new school words from what you read | 15 | 15 | 5 / - | not yet | 4 / 0 / 3 |
| 3.L.V.1.b | Using school words when you speak and write | 15 | 15 | 5 / - | not yet | 4 / 0 / 8 |
| 3.L.V.2.a | Using word parts to figure out meaning | 15 | 15 | 5 / 5 | not yet | 2 / 0 / 6 |
| 3.L.V.2.b | Endings that tell what kind of word it is | 15 | 15 | 5 / - | not yet | 4 / 0 / 9 |
| 3.T.C.1.a | Author's purpose and audience | 15 | 15 | 5 / - | yes | 4 / 1 / 4 |
| 3.T.C.1.b | Text features: headings, bold words, text boxes and diagrams | 15 | 15 | 6 / - | yes | 2 / 4 / 10 |
| 3.T.C.1.c | Making posters and slides with words, pictures and sound | 15 | 15 | 5 / - | yes | 4 / 0 / 5 |
| 3.T.C.2.a | Point of view: the narrator's view and yours | 15 | 15 | 5 / - | yes | 0 / 1 / 9 |
| 3.T.C.2.c | When, where and why a text was written | 15 | 15 | 6 / - | yes | 3 / 1 / 7 |
| TF-FEAT | Where information goes: chapters, headings, maps and caption | 15 | 15 | 5 / - | not yet | 1 / 0 / 7 |
| TF-DIG | Screens, sounds and speaking: features you click, hear and l | 15 | 15 | 5 / - | not yet | 3 / 0 / 4 |
| 3.T.RA.1.a | Asking good research questions | 15 | 15 | 5 / - | yes | 2 / 3 / 7 |
| 3.T.RA.1.b | Finding, choosing and sorting facts from sources | 15 | 15 | 6 / - | yes | 2 / 1 / 10 |
| 3.T.RA.1.c | Summing up what you learned from two sources | 15 | 15 | 5 / - | yes | 4 / 0 / 12 |
| 3.T.RA.2.a | Pointing to the sentence that proves it | 15 | 15 | 4 / 4 | yes | 4 / 1 / 3 |
| 3.T.RA.2.b | Is this a good source? | 15 | 15 | 5 / - | yes | 4 / 1 / 2 |
| 3.T.SS.1.a | How a text is put together: sections, patterns and features | 15 | 15 | 5 / - | yes | 0 / 2 / 11 |
| 3.T.SS.1.b | Organize your writing to fit your reader | 15 | 15 | 6 / - | yes | 3 / 1 / 7 |
| 3.T.SS.1.c | Linking words and transitions: because, although, however an | 15 | 15 | 5 / - | yes | 1 / 2 / 7 |
| 3.T.SS.1.d | Paragraphs that stay on one idea | 15 | 15 | 5 / - | yes | 1 / 0 / 7 |
| 3.T.SS.2.a | Similes, metaphors and idioms | 15 | 15 | 5 / 5 | yes | 0 / 0 / 7 |
| 3.T.SS.2.b | Use figurative language in your writing: similes, metaphors, | 15 | 15 | 5 / - | yes | 2 / 0 / 10 |
| 3.T.T.1.a | Story clues: dialogue, description and actions | 15 | 15 | 6 / 6 | yes | 0 / 0 / 5 |
| 3.T.T.1.b | Story elements: characters, setting, problem and solution | 15 | 15 | 5 / - | yes | 2 / 0 / 9 |
| 3.T.T.1.c | Characters and the story's lesson | 15 | 15 | 5 / 5 | yes | 0 / 1 / 5 |
| 3.T.T.1.d | Compare two stories | 15 | 15 | 5 / - | yes | 0 / 0 / 15 |
| 3.T.T.1.e | Write a story: beginnings, dialogue, details and endings | 15 | 15 | 5 / - | yes | 1 / 0 / 13 |
| 3.T.T.2.a | Main idea and key details | 15 | 15 | 6 / 6 | yes | 0 / 0 / 8 |
| 3.T.T.2.b | How ideas connect: order of steps and cause and effect | 15 | 15 | 5 / 5 | yes | 0 / 0 / 8 |
| 3.T.T.2.c | Putting together information from two texts | 15 | 15 | 4 / - | yes | 2 / 0 / 14 |
| 3.T.T.2.d | Writing to inform: introduction, facts and conclusion | 15 | 15 | 6 / - | yes | 0 / 0 / 12 |
| 3.T.T.3.a | Opinion texts: the opinion, the reasons and the evidence | 15 | 15 | 6 / - | yes | 0 / 3 / 7 |
| 3.T.T.3.c | Writing an opinion piece: opinion, reasons, linking words an | 15 | 15 | 5 / - | yes | 0 / 0 / 10 |
| 3.T.T.4.a | How poems are built: lines, stanzas, rhyme and repetition | 15 | 15 | 5 / 5 | yes | 0 / 0 / 14 |
| 3.T.T.4.b | Writing a rhyming poem with two or more stanzas | 15 | 15 | 6 / - | yes | 1 / 0 / 10 |
| TS-SEQ | Sequence: first, next, last | 15 | 15 | 5 / - | yes | 3 / 0 / 5 |
| TS-CE | Cause and effect: what happened and why | 15 | 15 | 5 / 5 | yes | 2 / 0 / 6 |
| TS-PS | Problem and solution: the tries and what works | 15 | 15 | 5 / - | yes | 0 / 1 / 8 |
| TS-CC | Compare and contrast: alike and different | 15 | 15 | 5 / - | yes | 1 / 0 / 7 |
| TS-DESC | Description: a main topic and its details | 15 | 15 | 5 / - | yes | 4 / 0 / 11 |

### Documented exceptions (performance lessons)
- 3.F.F.1.b (performance): Oral reading accuracy on unfamiliar text is measured by listening: three dated timed readings.
- 3.F.F.1.c (performance): Phrasing and expression are heard, not selected: three rehearse-and-perform rounds with the adult checklist.
- 3.F.H.4.a (performance): Cursive letter formation is a motor skill: trace, then write, in three sessions with the adult checklist.
- 3.F.H.4.b (performance): Spacing in cursive is a motor skill: three dictated-sentence sessions with the adult checklist.
- 3.F.F.1.a (performance): Automaticity is a timing behaviour that selected response cannot show. Three adult-run quick-read rounds replace the fifteen.
- 3.F.F.1.d (observation): A child's own self-correction happens only while reading aloud: three adult-observed rounds plus the fix-up log.

### Not converted yet (five-step flow)
3.F.H.3.a, 3.F.P.4.a, 3.F.P.4.b, 3.F.P.4.c, 3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in, 3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech, 3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech, 3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-, 3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es, 3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s, 3.L.GC.1:R:use-action-verbs, 3.L.GC.1:R:use-adjectives-and-adverbs, 3.L.GC.1:R:use-common-and-proper-nouns, 3.L.GC.1:R:form-and-use-simple-verb-tenses, 3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr, 3.L.GC.1:R:capitalize-proper-nouns, 3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que, 3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies, 3.L.GC.1:R:use-personal-pronouns-subject-object-possessive, 3.L.GC.1:R:use-frequently-occurring-prepositions, 3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa, 3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es, 3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos, 3.L.GC.1:M:form-and-use-irregular-plural-nouns, 3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs, 3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra, 3.L.GC.1:M:use-collective-and-abstract-nouns, 3.L.GC.1:M:use-reflexive-pronouns, 3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi, 3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks, 3.L.GC.1:C:form-and-use-prepositional-phrases, 3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti, 3.L.GC.1:C:ensure-pronoun-antecedent-agreement, 3.L.GC.1:C:use-conventional-capitalization-quotation-marks-, 3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs, 3.L.GC.1:I:use-interjections, 3.L.GC.1:I:use-helping-and-linking-verbs, 3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t, 3.L.GC.1:I:use-conventional-capitalization-in-abbreviations, 3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes, 3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns, 3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement, 3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses, 3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses, 3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar, 3.L.V.2.c, 3.L.V.3.a, 3.L.V.3.b, 3.L.V.3.c, 3.L.V.3.d, 3.L.V.3.e

### Item ids behind the gap counts

**No matching teaching point (82)**

SK-GC2a-C10, SK-GC2a-C13, SK-GC2b-C09, SK-GC2b-C10, SK-GC2c-C08, SK-GC2c-C11, SK-GC2d-C04, SK-GC2d-C09, SK-GC2d-P6, SK-GC2d-C12, SK-GC2d-C13, SK-GC2d-C14, SK-V1a-C09, SK-V1a-C11, SK-V1a-C12, SK-V1a-C15, SK-V1b-C05, SK-V1b-C09, SK-V1b-C11, SK-V1b-C12, SK-V2a-C08, SK-V2a-C14, SK-V2b-P2, SK-V2b-C02, SK-V2b-C05, SK-V2b-C09, SK-TC1a-C03, SK-TC1a-C09, SK-TC1a-C11, SK-TC1a-C15, SK-TC1b-C05, SK-TC1b-C14, SK-TC1c-C04, SK-TC1c-C06, SK-TC1c-C07, SK-TC1c-C09, SK-TC2c-P4, SK-TC2c-P9, SK-TC2c-C08, SK-TFF-C09, SK-TFD-C01, SK-TFD-C02, SK-TFD-C15, SK-RA1a-C11, SK-RA1a-C12, SK-RA1b-P4, SK-RA1b-C13, SK-RA1c-C02, SK-RA1c-C03, SK-RA1c-C08, SK-RA1c-C13, SK-RA2a-P4, SK-RA2a-C05, SK-RA2a-C08, SK-RA2a-C11, SK-RA2b-C05, SK-RA2b-C09, SK-RA2b-C12, SK-RA2b-C14, SK-SS1b-C03, SK-SS1b-C09, SK-SS1b-C11, SK-SS1c-C11, SK-SS1d-C14, SK-SS2b-P5, SK-SS2b-C14, SK-TT1b-P4, SK-TT1b-C05, SK-TT1e-C11, SK-TT2c-C06, SK-TT2c-C11, SK-TT4b-C13, SK-TSSEQ-C02, SK-TSSEQ-C05, SK-TSSEQ-C09, SK-TSCE-C03, SK-TSCE-C13, SK-TSCC-C13, SK-TSDESC-C02, SK-TSDESC-C05, SK-TSDESC-C09, SK-TSDESC-C15

**No misconception line (23)**

SK-TC1a-C14, SK-TC1b-P5, SK-TC1b-P4, SK-TC1b-C08, SK-TC1b-C11, SK-TC2a-C12, SK-TC2c-C10, SK-RA1a-P5, SK-RA1a-P4, SK-RA1a-C14, SK-RA1b-C15, SK-RA2a-C15, SK-RA2b-C15, SK-SS1a-P6, SK-SS1a-C13, SK-SS1b-P5, SK-SS1c-P6, SK-SS1c-P4, SK-TT1c-P5, SK-TT3a-P4, SK-TT3a-P5, SK-TT3a-P6, SK-TSPS-C12

**Evidence hint with no paragraph reference (350)**

SK-GC2a-P7, SK-GC2a-P9, SK-GC2a-P8, SK-GC2a-C06, SK-GC2a-C07, SK-GC2a-C08, SK-GC2a-C09, SK-GC2a-C10, SK-GC2a-C11, SK-GC2a-C12, SK-GC2b-C04, SK-GC2b-C06, SK-GC2b-C07, SK-GC2b-C08, SK-GC2b-C09, SK-GC2b-C10, SK-GC2c-C04, SK-GC2c-C06, SK-GC2c-C07, SK-GC2c-C10, SK-GC2c-C14, SK-GC2d-C04, SK-GC2d-C06, SK-GC2d-C07, SK-GC2d-C08, SK-GC2d-C11, SK-GC2d-C12, SK-GC2d-C14, SK-V1a-C05, SK-V1a-C06, SK-V1a-C07, SK-V1b-P4, SK-V1b-C02, SK-V1b-C05, SK-V1b-C06, SK-V1b-C07, SK-V1b-C10, SK-V1b-C11, SK-V1b-C15, SK-V2a-P4, SK-V2a-C02, SK-V2a-C03, SK-V2a-C05, SK-V2a-C06, SK-V2a-C14, SK-V2b-P2, SK-V2b-C02, SK-V2b-C03, SK-V2b-C04, SK-V2b-C05, SK-V2b-P4, SK-V2b-C09, SK-V2b-C14, SK-V2b-C15, SK-TC1a-C03, SK-TC1a-C07, SK-TC1a-C11, SK-TC1a-C12, SK-TC1b-P5, SK-TC1b-P4, SK-TC1b-C03, SK-TC1b-C04, SK-TC1b-C05, SK-TC1b-C06, SK-TC1b-C07, SK-TC1b-C08, SK-TC1b-C11, SK-TC1b-C12, SK-TC1c-C06, SK-TC1c-C07, SK-TC1c-C08, SK-TC1c-C10, SK-TC1c-C11, SK-TC2a-C01, SK-TC2a-C05, SK-TC2a-C06, SK-TC2a-C07, SK-TC2a-C08, SK-TC2a-C09, SK-TC2a-C10, SK-TC2a-C11, SK-TC2a-C12, SK-TC2c-P8, SK-TC2c-C04, SK-TC2c-P9, SK-TC2c-C08, SK-TC2c-C10, SK-TC2c-C11, SK-TC2c-C12, SK-TFF-C01, SK-TFF-C03, SK-TFF-C04, SK-TFF-C05, SK-TFF-C08, SK-TFF-C10, SK-TFF-C11, SK-TFD-C06, SK-TFD-C07, SK-TFD-C08, SK-TFD-C11, SK-RA1a-P5, SK-RA1a-C02, SK-RA1a-C04, SK-RA1a-C06, SK-RA1a-C07, SK-RA1a-C11, SK-RA1a-C12, SK-RA1b-P4, SK-RA1b-P7, SK-RA1b-C04, SK-RA1b-P5, SK-RA1b-C07, SK-RA1b-C08, SK-RA1b-C09, SK-RA1b-C10, SK-RA1b-C11, SK-RA1b-C13, SK-RA1c-C01, SK-RA1c-C02, SK-RA1c-C03, SK-RA1c-C05, SK-RA1c-C06, SK-RA1c-C07, SK-RA1c-C08, SK-RA1c-C09, SK-RA1c-C10, SK-RA1c-C11, SK-RA1c-C12, SK-RA1c-C15, SK-RA2a-P4, SK-RA2a-C03, SK-RA2a-C07, SK-RA2b-C09, SK-RA2b-C11, SK-SS1a-P5, SK-SS1a-P6, SK-SS1a-C04, SK-SS1a-C05, SK-SS1a-C06, SK-SS1a-C07, SK-SS1a-C08, SK-SS1a-C10, SK-SS1a-C11, SK-SS1a-C12, SK-SS1a-C13, SK-SS1b-C02, SK-SS1b-C03, SK-SS1b-C06, SK-SS1b-C07, SK-SS1b-C09, SK-SS1b-C11, SK-SS1b-C12, SK-SS1c-P4, SK-SS1c-C03, SK-SS1c-C04, SK-SS1c-C05, SK-SS1c-C11, SK-SS1c-C13, SK-SS1c-C14, SK-SS1d-C01, SK-SS1d-C02, SK-SS1d-C06, SK-SS1d-C07, SK-SS1d-C08, SK-SS1d-C11, SK-SS1d-C12, SK-SS2a-C06, SK-SS2a-C07, SK-SS2a-C08, SK-SS2a-C09, SK-SS2a-C12, SK-SS2a-C13, SK-SS2a-C14, SK-SS2b-C02, SK-SS2b-C03, SK-SS2b-C04, SK-SS2b-C05, SK-SS2b-P5, SK-SS2b-C07, SK-SS2b-C08, SK-SS2b-C11, SK-SS2b-C12, SK-SS2b-C13, SK-TT1a-P4, SK-TT1a-C03, SK-TT1a-C09, SK-TT1a-C12, SK-TT1a-C14, SK-TT1b-P4, SK-TT1b-C06, SK-TT1b-C08, SK-TT1b-C09, SK-TT1b-C10, SK-TT1b-C11, SK-TT1b-C12, SK-TT1b-C14, SK-TT1b-C15, SK-TT1c-C03, SK-TT1c-C09, SK-TT1c-C11, SK-TT1c-C14, SK-TT1c-C15, SK-TT1d-P4, SK-TT1d-P5, SK-TT1d-C03, SK-TT1d-C04, SK-TT1d-C05, SK-TT1d-C06, SK-TT1d-C07, SK-TT1d-C08, SK-TT1d-C09, SK-TT1d-C10, SK-TT1d-C11, SK-TT1d-C12, SK-TT1d-C13, SK-TT1d-C14, SK-TT1d-C15, SK-TT1e-P5, SK-TT1e-P4, SK-TT1e-C03, SK-TT1e-P6, SK-TT1e-C06, SK-TT1e-C07, SK-TT1e-C08, SK-TT1e-C09, SK-TT1e-C10, SK-TT1e-C11, SK-TT1e-C12, SK-TT1e-C13, SK-TT1e-C15, SK-TT2a-P4, SK-TT2a-P7, SK-TT2a-C06, SK-TT2a-C08, SK-TT2a-C09, SK-TT2a-C10, SK-TT2a-C11, SK-TT2a-C12, SK-TT2b-P4, SK-TT2b-C02, SK-TT2b-C06, SK-TT2b-C08, SK-TT2b-C09, SK-TT2b-C11, SK-TT2b-C12, SK-TT2b-C15, SK-TT2c-C01, SK-TT2c-C02, SK-TT2c-C03, SK-TT2c-C04, SK-TT2c-C05, SK-TT2c-C06, SK-TT2c-C07, SK-TT2c-C08, SK-TT2c-C09, SK-TT2c-C10, SK-TT2c-C11, SK-TT2c-C12, SK-TT2c-C13, SK-TT2c-C14, SK-TT2d-P5, SK-TT2d-C02, SK-TT2d-C03, SK-TT2d-C04, SK-TT2d-P4, SK-TT2d-C06, SK-TT2d-C07, SK-TT2d-C08, SK-TT2d-C09, SK-TT2d-C10, SK-TT2d-C12, SK-TT2d-C14, SK-TT3a-P4, SK-TT3a-P5, SK-TT3a-C03, SK-TT3a-P6, SK-TT3a-C05, SK-TT3a-C07, SK-TT3a-C12, SK-TT3c-C01, SK-TT3c-C02, SK-TT3c-C06, SK-TT3c-C07, SK-TT3c-C08, SK-TT3c-C09, SK-TT3c-C11, SK-TT3c-C12, SK-TT3c-C13, SK-TT3c-C15, SK-TT4a-C01, SK-TT4a-C02, SK-TT4a-C03, SK-TT4a-C04, SK-TT4a-C06, SK-TT4a-C07, SK-TT4a-C08, SK-TT4a-C09, SK-TT4a-C10, SK-TT4a-C11, SK-TT4a-C12, SK-TT4a-C13, SK-TT4a-C14, SK-TT4a-C15, SK-TT4b-C02, SK-TT4b-P5, SK-TT4b-C06, SK-TT4b-C07, SK-TT4b-C09, SK-TT4b-C10, SK-TT4b-C11, SK-TT4b-C12, SK-TT4b-C13, SK-TT4b-C14, SK-TSSEQ-P5, SK-TSSEQ-C06, SK-TSSEQ-C11, SK-TSSEQ-C12, SK-TSSEQ-C13, SK-TSCE-P4, SK-TSCE-C08, SK-TSCE-C09, SK-TSCE-C10, SK-TSCE-C12, SK-TSCE-C13, SK-TSPS-C02, SK-TSPS-C03, SK-TSPS-C04, SK-TSPS-C05, SK-TSPS-C07, SK-TSPS-C11, SK-TSPS-C12, SK-TSPS-C13, SK-TSCC-P5, SK-TSCC-P6, SK-TSCC-C04, SK-TSCC-C06, SK-TSCC-C11, SK-TSCC-C12, SK-TSCC-C13, SK-TSDESC-P6, SK-TSDESC-P5, SK-TSDESC-C04, SK-TSDESC-C05, SK-TSDESC-C06, SK-TSDESC-C07, SK-TSDESC-C08, SK-TSDESC-C09, SK-TSDESC-C10, SK-TSDESC-C11, SK-TSDESC-C12


## Snapshot B: merged with content/standards-practice 05520cf
Lessons in this tree: 101. Converted to question-first (core practice, fifteen items in three sets): **77** (1155 core items). Documented performance exceptions (no core by design): **6**. Not converted yet (keep the five-step flow): **18**.

Teach Me data gaps over the 1155 core items: no matching teaching point 220; no misconception line 23; evidence hint without a paragraph reference (passage items) 560.
Skill checks: 97 lessons have a check (566 check items in total, 13 lessons with a second form B). Lessons with no check: 3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b.
Independent review (js/data/accepted.js, batches/STATUS.md): 65 lessons accepted (65 of them with core practice); converted but not yet accepted: 12. The review ledger holds 0 per-lesson attestations.

### Converted lessons
| Lesson | Title | Core | Similar | Check A / B | Review accepted | Gaps: point / misc / paragraph |
|---|---|---|---|---|---|---|
| 3.F.H.3.a | Reading cursive | 15 | 15 | 5 / - | yes | 2 / 0 / 0 |
| 3.F.P.4.a | Letters that can make more than one sound | 15 | 15 | 6 / - | yes | 3 / 0 / 0 |
| 3.F.P.4.b | Syllable types: breaking long words into parts | 15 | 15 | 6 / - | yes | 1 / 0 / 0 |
| 3.F.P.4.c | Prefixes and suffixes: reading and spelling word parts | 15 | 15 | 6 / - | yes | 6 / 0 / 0 |
| 3.L.GC.2.a | Complete sentences: simple, compound and complex | 15 | 15 | 6 / - | yes | 2 / 0 / 10 |
| 3.L.GC.2.b | Mix your sentences and keep verbs in the same time | 15 | 15 | 5 / 5 | yes | 1 / 0 / 6 |
| 3.L.GC.2.c | Make the subject and verb agree | 15 | 15 | 5 / - | yes | 2 / 0 / 5 |
| 3.L.GC.2.d | Add details with exact describing words | 15 | 15 | 5 / - | yes | 6 / 0 / 7 |
| 3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in | Complete sentences: a who and a did what | 15 | 15 | 5 / - | yes | 1 / 0 / 7 |
| 3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech | One or more than one: singular and plural nouns | 15 | 15 | 5 / - | not yet | 5 / 0 / 7 |
| 3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech | Question words: who, what, where, when, why and how | 15 | 15 | 5 / - | yes | 4 / 0 / 8 |
| 3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the- | Capital letters: the first word and I | 15 | 15 | 5 / - | not yet | 4 / 0 / 8 |
| 3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es | Making plurals with -s or -es | 15 | 15 | 5 / - | yes | 11 / 0 / 8 |
| 3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s | Verb endings: -s, -ed and -ing | 15 | 15 | 5 / - | yes | 8 / 0 / 8 |
| 3.L.GC.1:R:use-action-verbs | Action verbs | 15 | 15 | 5 / - | yes | 2 / 0 / 8 |
| 3.L.GC.1:R:use-adjectives-and-adverbs | Adjectives and adverbs: describing words | 15 | 15 | 5 / - | not yet | 2 / 0 / 7 |
| 3.L.GC.1:R:use-common-and-proper-nouns | Common and proper nouns | 15 | 15 | 5 / - | yes | 1 / 0 / 8 |
| 3.L.GC.1:R:form-and-use-simple-verb-tenses | Verb tenses: past, present and future | 15 | 15 | 5 / - | not yet | 3 / 0 / 8 |
| 3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr | Determiners: a, an, the, this, that and my | 15 | 15 | 5 / - | not yet | 9 / 0 / 8 |
| 3.L.GC.1:R:capitalize-proper-nouns | Capital letters for proper nouns | 15 | 15 | 5 / - | not yet | 6 / 0 / 8 |
| 3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que | End marks: period, question mark and exclamation point | 15 | 15 | 5 / - | not yet | 2 / 0 / 8 |
| 3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies | Plurals that change y to ies | 15 | 15 | 5 / - | not yet | 3 / 0 / 8 |
| 3.L.GC.1:R:use-personal-pronouns-subject-object-possessive | Pronouns: subject, object and owning | 15 | 15 | 5 / - | not yet | 11 / 0 / 8 |
| 3.L.GC.1:R:use-frequently-occurring-prepositions | Prepositions: words that tell where and when | 15 | 15 | 5 / - | not yet | 5 / 0 / 8 |
| 3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa | Commas in lists, dates, places and letters | 15 | 15 | 5 / - | not yet | 5 / 0 / 8 |
| 3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es | Adding -d or -es to verbs | 15 | 15 | 5 / - | not yet | 6 / 0 / 8 |
| 3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos | Apostrophes: short words and words that own | 15 | 15 | 5 / - | yes | 6 / 0 / 8 |
| 3.L.GC.1:M:form-and-use-irregular-plural-nouns | Special plurals: children, mice and feet | 15 | 15 | 5 / 5 | yes | 2 / 0 / 5 |
| 3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs | Special past-tense verbs: went, ran and caught | 15 | 15 | 5 / 5 | yes | 2 / 0 / 7 |
| 3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra | Joining words: and, but, or, so | 15 | 15 | 5 / - | yes | 10 / 0 / 7 |
| 3.L.GC.1:M:use-collective-and-abstract-nouns | Group nouns and idea nouns | 15 | 15 | 5 / - | yes | 1 / 0 / 6 |
| 3.L.GC.1:M:use-reflexive-pronouns | Pronouns that end in -self and -selves | 15 | 15 | 5 / - | yes | 3 / 0 / 5 |
| 3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi | Commas before and, but, or, so | 15 | 15 | 5 / - | yes | 0 / 0 / 6 |
| 3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks | Hyphens: splitting a word at the end of a line | 15 | 15 | 5 / - | yes | 0 / 0 / 5 |
| 3.L.V.1.a | Learning new school words from what you read | 15 | 15 | 5 / - | yes | 4 / 0 / 3 |
| 3.L.V.1.b | Using school words when you speak and write | 15 | 15 | 5 / - | yes | 4 / 0 / 8 |
| 3.L.V.2.a | Using word parts to figure out meaning | 15 | 15 | 5 / 5 | yes | 2 / 0 / 6 |
| 3.L.V.2.b | Endings that tell what kind of word it is | 15 | 15 | 5 / - | yes | 5 / 0 / 10 |
| 3.L.V.2.c | Building new words with roots, prefixes and suffixes | 15 | 15 | 6 / - | yes | 6 / 0 / 6 |
| 3.L.V.3.a | Context clues: using nearby words to find meaning | 15 | 15 | 6 / 6 | yes | 3 / 0 / 8 |
| 3.L.V.3.b | Homophones, homographs, synonyms and antonyms | 15 | 15 | 5 / - | yes | 6 / 0 / 5 |
| 3.T.C.1.a | Author's purpose and audience | 15 | 15 | 5 / - | yes | 4 / 1 / 4 |
| 3.T.C.1.b | Text features: headings, bold words, text boxes and diagrams | 15 | 15 | 6 / - | yes | 2 / 4 / 10 |
| 3.T.C.1.c | Making posters and slides with words, pictures and sound | 15 | 15 | 5 / - | yes | 4 / 0 / 5 |
| 3.T.C.2.a | Point of view: the narrator's view and yours | 15 | 15 | 5 / - | yes | 0 / 1 / 9 |
| 3.T.C.2.c | When, where and why a text was written | 15 | 15 | 6 / - | yes | 3 / 1 / 7 |
| TF-FEAT | Where information goes: chapters, headings, maps and caption | 15 | 15 | 5 / - | yes | 1 / 0 / 7 |
| TF-DIG | Screens, sounds and speaking: features you click, hear and l | 15 | 15 | 5 / - | yes | 2 / 0 / 4 |
| 3.T.RA.1.a | Asking good research questions | 15 | 15 | 5 / - | yes | 2 / 3 / 7 |
| 3.T.RA.1.b | Finding, choosing and sorting facts from sources | 15 | 15 | 6 / - | yes | 2 / 1 / 10 |
| 3.T.RA.1.c | Summing up what you learned from two sources | 15 | 15 | 5 / - | yes | 4 / 0 / 12 |
| 3.T.RA.2.a | Pointing to the sentence that proves it | 15 | 15 | 4 / 4 | yes | 4 / 1 / 3 |
| 3.T.RA.2.b | Is this a good source? | 15 | 15 | 5 / - | yes | 4 / 1 / 2 |
| 3.T.SS.1.a | How a text is put together: sections, patterns and features | 15 | 15 | 5 / - | yes | 0 / 2 / 11 |
| 3.T.SS.1.b | Organize your writing to fit your reader | 15 | 15 | 6 / - | yes | 3 / 1 / 7 |
| 3.T.SS.1.c | Linking words and transitions: because, although, however an | 15 | 15 | 5 / - | yes | 1 / 2 / 7 |
| 3.T.SS.1.d | Paragraphs that stay on one idea | 15 | 15 | 5 / - | yes | 1 / 0 / 7 |
| 3.T.SS.2.a | Similes, metaphors and idioms | 15 | 15 | 5 / 5 | yes | 0 / 0 / 7 |
| 3.T.SS.2.b | Use figurative language in your writing: similes, metaphors, | 15 | 15 | 5 / - | yes | 2 / 0 / 10 |
| 3.T.T.1.a | Story clues: dialogue, description and actions | 15 | 15 | 6 / 6 | yes | 0 / 0 / 5 |
| 3.T.T.1.b | Story elements: characters, setting, problem and solution | 15 | 15 | 5 / - | yes | 2 / 0 / 9 |
| 3.T.T.1.c | Characters and the story's lesson | 15 | 15 | 5 / 5 | yes | 0 / 1 / 5 |
| 3.T.T.1.d | Compare two stories | 15 | 15 | 5 / - | yes | 0 / 0 / 15 |
| 3.T.T.1.e | Write a story: beginnings, dialogue, details and endings | 15 | 15 | 5 / - | yes | 1 / 0 / 13 |
| 3.T.T.2.a | Main idea and key details | 15 | 15 | 6 / 6 | yes | 0 / 0 / 8 |
| 3.T.T.2.b | How ideas connect: order of steps and cause and effect | 15 | 15 | 5 / 5 | yes | 0 / 0 / 8 |
| 3.T.T.2.c | Putting together information from two texts | 15 | 15 | 4 / - | yes | 2 / 0 / 14 |
| 3.T.T.2.d | Writing to inform: introduction, facts and conclusion | 15 | 15 | 6 / - | yes | 0 / 0 / 12 |
| 3.T.T.3.a | Opinion texts: the opinion, the reasons and the evidence | 15 | 15 | 6 / - | yes | 0 / 3 / 7 |
| 3.T.T.3.c | Writing an opinion piece: opinion, reasons, linking words an | 15 | 15 | 5 / - | yes | 0 / 0 / 10 |
| 3.T.T.4.a | How poems are built: lines, stanzas, rhyme and repetition | 15 | 15 | 5 / 5 | yes | 0 / 0 / 14 |
| 3.T.T.4.b | Writing a rhyming poem with two or more stanzas | 15 | 15 | 6 / - | yes | 1 / 0 / 10 |
| TS-SEQ | Sequence: first, next, last | 15 | 15 | 5 / - | yes | 3 / 0 / 5 |
| TS-CE | Cause and effect: what happened and why | 15 | 15 | 5 / 5 | yes | 2 / 0 / 6 |
| TS-PS | Problem and solution: the tries and what works | 15 | 15 | 5 / - | yes | 0 / 1 / 8 |
| TS-CC | Compare and contrast: alike and different | 15 | 15 | 5 / - | yes | 1 / 0 / 7 |
| TS-DESC | Description: a main topic and its details | 15 | 15 | 5 / - | yes | 4 / 0 / 11 |

### Documented exceptions (performance lessons)
- 3.F.F.1.b (performance): Oral reading accuracy on unfamiliar text is measured by listening: three dated timed readings.
- 3.F.F.1.c (performance): Phrasing and expression are heard, not selected: three rehearse-and-perform rounds with the adult checklist.
- 3.F.H.4.a (performance): Cursive letter formation is a motor skill: trace, then write, in three sessions with the adult checklist.
- 3.F.H.4.b (performance): Spacing in cursive is a motor skill: three dictated-sentence sessions with the adult checklist.
- 3.F.F.1.a (performance): Automaticity is a timing behaviour that selected response cannot show. Three adult-run quick-read rounds replace the fifteen.
- 3.F.F.1.d (observation): A child's own self-correction happens only while reading aloud: three adult-observed rounds plus the fix-up log.

### Not converted yet (five-step flow)
3.L.GC.1:C:form-and-use-prepositional-phrases, 3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti, 3.L.GC.1:C:ensure-pronoun-antecedent-agreement, 3.L.GC.1:C:use-conventional-capitalization-quotation-marks-, 3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs, 3.L.GC.1:I:use-interjections, 3.L.GC.1:I:use-helping-and-linking-verbs, 3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t, 3.L.GC.1:I:use-conventional-capitalization-in-abbreviations, 3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes, 3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns, 3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement, 3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses, 3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses, 3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar, 3.L.V.3.c, 3.L.V.3.d, 3.L.V.3.e

### Item ids behind the gap counts

**No matching teaching point (220)**

SK-FH3a-C04, SK-FH3a-C11, SK-FP4a-C04, SK-FP4a-C12, SK-FP4a-P7, SK-FP4b-C12, SK-FP4c-C01, SK-FP4c-C04, SK-FP4c-C06, SK-FP4c-C07, SK-FP4c-C08, SK-FP4c-C12, SK-GC2a-C10, SK-GC2a-C13, SK-GC2b-C09, SK-GC2c-C08, SK-GC2c-C11, SK-GC2d-C04, SK-GC2d-C09, SK-GC2d-P6, SK-GC2d-C12, SK-GC2d-C13, SK-GC2d-C14, SK-GUM1-1-C07, SK-GUM1-2-C03, SK-GUM1-2-C04, SK-GUM1-2-C07, SK-GUM1-2-C08, SK-GUM1-2-C12, SK-GUM1-3-P4, SK-GUM1-3-C07, SK-GUM1-3-C08, SK-GUM1-3-C10, SK-GUM1-4-C01, SK-GUM1-4-C10, SK-GUM1-4-C12, SK-GUM1-4-C15, SK-GUM1-5-P3, SK-GUM1-5-P4, SK-GUM1-5-C03, SK-GUM1-5-C04, SK-GUM1-5-C05, SK-GUM1-5-C07, SK-GUM1-5-C09, SK-GUM1-5-C10, SK-GUM1-5-C11, SK-GUM1-5-C12, SK-GUM1-5-C13, SK-GUM1-6-P5, SK-GUM1-6-C03, SK-GUM1-6-C08, SK-GUM1-6-C11, SK-GUM1-6-C12, SK-GUM1-6-C13, SK-GUM1-6-C14, SK-GUM1-6-C15, SK-GUM1-7-C05, SK-GUM1-7-C07, SK-GUM1-8-C04, SK-GUM1-8-C08, SK-GUM1-9-C07, SK-GUM2-1-C07, SK-GUM2-1-C10, SK-GUM2-1-C13, SK-GUM2-2-P4, SK-GUM2-2-C04, SK-GUM2-2-C05, SK-GUM2-2-C07, SK-GUM2-2-C08, SK-GUM2-2-C09, SK-GUM2-2-C11, SK-GUM2-2-C12, SK-GUM2-2-C14, SK-GUM2-3-C04, SK-GUM2-3-C05, SK-GUM2-3-C07, SK-GUM2-3-C10, SK-GUM2-3-C14, SK-GUM2-3-C15, SK-GUM2-4-C07, SK-GUM2-4-C15, SK-GUM2-5-C06, SK-GUM2-5-C11, SK-GUM2-5-C13, SK-GUM2-6-P5, SK-GUM2-6-C03, SK-GUM2-6-C04, SK-GUM2-6-C05, SK-GUM2-6-C06, SK-GUM2-6-C08, SK-GUM2-6-C09, SK-GUM2-6-C10, SK-GUM2-6-C11, SK-GUM2-6-C12, SK-GUM2-6-C13, SK-GUM2-7-C04, SK-GUM2-7-C05, SK-GUM2-7-C10, SK-GUM2-7-C11, SK-GUM2-7-C12, SK-GUM2-8-C05, SK-GUM2-8-C08, SK-GUM2-8-C13, SK-GUM2-8-C14, SK-GUM2-8-C15, SK-GUM2-9-C03, SK-GUM2-9-C04, SK-GUM2-9-C10, SK-GUM2-9-C12, SK-GUM2-9-C13, SK-GUM2-9-C14, SK-GUM3-1-P5, SK-GUM3-1-C04, SK-GUM3-1-C09, SK-GUM3-1-C11, SK-GUM3-1-C12, SK-GUM3-1-C13, SK-GUM3-2-P4, SK-GUM3-2-P5, SK-GUM3-3-P4, SK-GUM3-3-C11, SK-GUM3-4-C02, SK-GUM3-4-C04, SK-GUM3-4-C07, SK-GUM3-4-C08, SK-GUM3-4-C09, SK-GUM3-4-C10, SK-GUM3-4-C11, SK-GUM3-4-C13, SK-GUM3-4-C14, SK-GUM3-4-C15, SK-GUM3-5-C14, SK-GUM3-6-C09, SK-GUM3-6-C12, SK-GUM3-6-C14, SK-V1a-C09, SK-V1a-C11, SK-V1a-C12, SK-V1a-C15, SK-V1b-C05, SK-V1b-C09, SK-V1b-C11, SK-V1b-C12, SK-V2a-C08, SK-V2a-C14, SK-V2b-P2, SK-V2b-C02, SK-V2b-C05, SK-V2b-C08, SK-V2b-C09, SK-V2c-C03, SK-V2c-C07, SK-V2c-C08, SK-V2c-C09, SK-V2c-C10, SK-V2c-C11, SK-V3a-C04, SK-V3a-C05, SK-V3a-C10, SK-V3b-C02, SK-V3b-C03, SK-V3b-C04, SK-V3b-P4, SK-V3b-C11, SK-V3b-C13, SK-TC1a-C03, SK-TC1a-C09, SK-TC1a-C11, SK-TC1a-C15, SK-TC1b-C05, SK-TC1b-C14, SK-TC1c-C04, SK-TC1c-C06, SK-TC1c-C07, SK-TC1c-C09, SK-TC2c-P4, SK-TC2c-P9, SK-TC2c-C08, SK-TFF-C07, SK-TFD-C01, SK-TFD-C02, SK-RA1a-C11, SK-RA1a-C12, SK-RA1b-P4, SK-RA1b-C13, SK-RA1c-C02, SK-RA1c-C03, SK-RA1c-C08, SK-RA1c-C13, SK-RA2a-P4, SK-RA2a-C05, SK-RA2a-C08, SK-RA2a-C11, SK-RA2b-C05, SK-RA2b-C09, SK-RA2b-C12, SK-RA2b-C14, SK-SS1b-C03, SK-SS1b-C09, SK-SS1b-C11, SK-SS1c-C11, SK-SS1d-C14, SK-SS2b-P5, SK-SS2b-C14, SK-TT1b-P4, SK-TT1b-C05, SK-TT1e-C11, SK-TT2c-C06, SK-TT2c-C11, SK-TT4b-C13, SK-TSSEQ-C02, SK-TSSEQ-C05, SK-TSSEQ-C09, SK-TSCE-C03, SK-TSCE-C13, SK-TSCC-C13, SK-TSDESC-C02, SK-TSDESC-C05, SK-TSDESC-C09, SK-TSDESC-C15

**No misconception line (23)**

SK-TC1a-C14, SK-TC1b-P5, SK-TC1b-P4, SK-TC1b-C08, SK-TC1b-C11, SK-TC2a-C12, SK-TC2c-C10, SK-RA1a-P5, SK-RA1a-P4, SK-RA1a-C14, SK-RA1b-C15, SK-RA2a-C15, SK-RA2b-C15, SK-SS1a-P6, SK-SS1a-C13, SK-SS1b-P5, SK-SS1c-P6, SK-SS1c-P4, SK-TT1c-P5, SK-TT3a-P4, SK-TT3a-P5, SK-TT3a-P6, SK-TSPS-C12

**Evidence hint with no paragraph reference (560)**

SK-GC2a-P7, SK-GC2a-P9, SK-GC2a-P8, SK-GC2a-C06, SK-GC2a-C07, SK-GC2a-C08, SK-GC2a-C09, SK-GC2a-C10, SK-GC2a-C11, SK-GC2a-C12, SK-GC2b-C04, SK-GC2b-C06, SK-GC2b-C07, SK-GC2b-C08, SK-GC2b-C09, SK-GC2b-C10, SK-GC2c-C04, SK-GC2c-C06, SK-GC2c-C07, SK-GC2c-C10, SK-GC2c-C14, SK-GC2d-C04, SK-GC2d-C06, SK-GC2d-C07, SK-GC2d-C08, SK-GC2d-C11, SK-GC2d-C12, SK-GC2d-C14, SK-GUM1-1-C03, SK-GUM1-1-C04, SK-GUM1-1-C05, SK-GUM1-1-C06, SK-GUM1-1-C07, SK-GUM1-1-C10, SK-GUM1-1-C11, SK-GUM1-2-C03, SK-GUM1-2-C04, SK-GUM1-2-C05, SK-GUM1-2-C06, SK-GUM1-2-C07, SK-GUM1-2-C10, SK-GUM1-2-C11, SK-GUM1-3-C03, SK-GUM1-3-C04, SK-GUM1-3-C05, SK-GUM1-3-C06, SK-GUM1-3-C07, SK-GUM1-3-C10, SK-GUM1-3-C11, SK-GUM1-3-C12, SK-GUM1-4-C03, SK-GUM1-4-C04, SK-GUM1-4-C05, SK-GUM1-4-C06, SK-GUM1-4-C07, SK-GUM1-4-C10, SK-GUM1-4-C11, SK-GUM1-4-C12, SK-GUM1-5-C03, SK-GUM1-5-C04, SK-GUM1-5-C05, SK-GUM1-5-C06, SK-GUM1-5-C07, SK-GUM1-5-C10, SK-GUM1-5-C11, SK-GUM1-5-C12, SK-GUM1-6-C03, SK-GUM1-6-C04, SK-GUM1-6-C05, SK-GUM1-6-C06, SK-GUM1-6-C07, SK-GUM1-6-C10, SK-GUM1-6-C11, SK-GUM1-6-C12, SK-GUM1-7-C03, SK-GUM1-7-C04, SK-GUM1-7-C05, SK-GUM1-7-C06, SK-GUM1-7-C07, SK-GUM1-7-C10, SK-GUM1-7-C11, SK-GUM1-7-C12, SK-GUM1-8-C03, SK-GUM1-8-C04, SK-GUM1-8-C05, SK-GUM1-8-C06, SK-GUM1-8-C07, SK-GUM1-8-C10, SK-GUM1-8-C11, SK-GUM1-9-C03, SK-GUM1-9-C04, SK-GUM1-9-C05, SK-GUM1-9-C06, SK-GUM1-9-C07, SK-GUM1-9-C10, SK-GUM1-9-C11, SK-GUM1-9-C12, SK-GUM2-1-C03, SK-GUM2-1-C04, SK-GUM2-1-C05, SK-GUM2-1-C06, SK-GUM2-1-C07, SK-GUM2-1-C10, SK-GUM2-1-C11, SK-GUM2-1-C12, SK-GUM2-2-C03, SK-GUM2-2-C04, SK-GUM2-2-C05, SK-GUM2-2-C06, SK-GUM2-2-C07, SK-GUM2-2-C10, SK-GUM2-2-C11, SK-GUM2-2-C12, SK-GUM2-3-C03, SK-GUM2-3-C04, SK-GUM2-3-C05, SK-GUM2-3-C06, SK-GUM2-3-C07, SK-GUM2-3-C10, SK-GUM2-3-C11, SK-GUM2-3-C12, SK-GUM2-4-C03, SK-GUM2-4-C04, SK-GUM2-4-C05, SK-GUM2-4-C06, SK-GUM2-4-C07, SK-GUM2-4-C10, SK-GUM2-4-C11, SK-GUM2-4-C12, SK-GUM2-5-C03, SK-GUM2-5-C04, SK-GUM2-5-C05, SK-GUM2-5-C06, SK-GUM2-5-C07, SK-GUM2-5-C10, SK-GUM2-5-C11, SK-GUM2-5-C12, SK-GUM2-6-C03, SK-GUM2-6-C04, SK-GUM2-6-C05, SK-GUM2-6-C06, SK-GUM2-6-C07, SK-GUM2-6-C10, SK-GUM2-6-C11, SK-GUM2-6-C12, SK-GUM2-7-C03, SK-GUM2-7-C04, SK-GUM2-7-C05, SK-GUM2-7-C06, SK-GUM2-7-C07, SK-GUM2-7-C10, SK-GUM2-7-C11, SK-GUM2-7-C12, SK-GUM2-8-C03, SK-GUM2-8-C04, SK-GUM2-8-C05, SK-GUM2-8-C06, SK-GUM2-8-C07, SK-GUM2-8-C10, SK-GUM2-8-C11, SK-GUM2-8-C12, SK-GUM2-9-C03, SK-GUM2-9-C04, SK-GUM2-9-C05, SK-GUM2-9-C06, SK-GUM2-9-C07, SK-GUM2-9-C10, SK-GUM2-9-C11, SK-GUM2-9-C12, SK-GUM3-1-C03, SK-GUM3-1-C04, SK-GUM3-1-C05, SK-GUM3-1-C06, SK-GUM3-1-C07, SK-GUM3-1-C08, SK-GUM3-1-C10, SK-GUM3-1-C11, SK-GUM3-2-C03, SK-GUM3-2-C04, SK-GUM3-2-C05, SK-GUM3-2-C07, SK-GUM3-2-C11, SK-GUM3-3-C03, SK-GUM3-3-C04, SK-GUM3-3-C05, SK-GUM3-3-C06, SK-GUM3-3-C10, SK-GUM3-3-C11, SK-GUM3-3-C12, SK-GUM3-4-C02, SK-GUM3-4-C03, SK-GUM3-4-C04, SK-GUM3-4-C05, SK-GUM3-4-C09, SK-GUM3-4-C10, SK-GUM3-4-C11, SK-GUM3-5-C03, SK-GUM3-5-C04, SK-GUM3-5-C05, SK-GUM3-5-C06, SK-GUM3-5-C10, SK-GUM3-5-C11, SK-GUM3-6-C03, SK-GUM3-6-C04, SK-GUM3-6-C05, SK-GUM3-6-C06, SK-GUM3-6-C11, SK-GUM3-7-C03, SK-GUM3-7-C04, SK-GUM3-7-C05, SK-GUM3-7-C06, SK-GUM3-7-C10, SK-GUM3-7-C11, SK-GUM3-8-C03, SK-GUM3-8-C04, SK-GUM3-8-C05, SK-GUM3-8-C06, SK-GUM3-8-C11, SK-V1a-C05, SK-V1a-C06, SK-V1a-C07, SK-V1b-P4, SK-V1b-C02, SK-V1b-C05, SK-V1b-C06, SK-V1b-C07, SK-V1b-C10, SK-V1b-C11, SK-V1b-C15, SK-V2a-P4, SK-V2a-C02, SK-V2a-C03, SK-V2a-C05, SK-V2a-C06, SK-V2a-C14, SK-V2b-P2, SK-V2b-C02, SK-V2b-C03, SK-V2b-C04, SK-V2b-C05, SK-V2b-P4, SK-V2b-C08, SK-V2b-C09, SK-V2b-C14, SK-V2b-C15, SK-V2c-C01, SK-V2c-C02, SK-V2c-C03, SK-V2c-C05, SK-V2c-C06, SK-V2c-C12, SK-V3a-C01, SK-V3a-C02, SK-V3a-C03, SK-V3a-P3, SK-V3a-C05, SK-V3a-C06, SK-V3a-C10, SK-V3a-P7, SK-V3b-C02, SK-V3b-P4, SK-V3b-C05, SK-V3b-C08, SK-V3b-C09, SK-TC1a-C03, SK-TC1a-C07, SK-TC1a-C11, SK-TC1a-C12, SK-TC1b-P5, SK-TC1b-P4, SK-TC1b-C03, SK-TC1b-C04, SK-TC1b-C05, SK-TC1b-C06, SK-TC1b-C07, SK-TC1b-C08, SK-TC1b-C11, SK-TC1b-C12, SK-TC1c-C06, SK-TC1c-C07, SK-TC1c-C08, SK-TC1c-C10, SK-TC1c-C11, SK-TC2a-C01, SK-TC2a-C05, SK-TC2a-C06, SK-TC2a-C07, SK-TC2a-C08, SK-TC2a-C09, SK-TC2a-C10, SK-TC2a-C11, SK-TC2a-C12, SK-TC2c-P8, SK-TC2c-C04, SK-TC2c-P9, SK-TC2c-C08, SK-TC2c-C10, SK-TC2c-C11, SK-TC2c-C12, SK-TFF-C01, SK-TFF-C03, SK-TFF-C04, SK-TFF-C05, SK-TFF-C08, SK-TFF-C10, SK-TFF-C11, SK-TFD-C06, SK-TFD-C07, SK-TFD-C08, SK-TFD-C11, SK-RA1a-P5, SK-RA1a-C02, SK-RA1a-C04, SK-RA1a-C06, SK-RA1a-C07, SK-RA1a-C11, SK-RA1a-C12, SK-RA1b-P4, SK-RA1b-P7, SK-RA1b-C04, SK-RA1b-P5, SK-RA1b-C07, SK-RA1b-C08, SK-RA1b-C09, SK-RA1b-C10, SK-RA1b-C11, SK-RA1b-C13, SK-RA1c-C01, SK-RA1c-C02, SK-RA1c-C03, SK-RA1c-C05, SK-RA1c-C06, SK-RA1c-C07, SK-RA1c-C08, SK-RA1c-C09, SK-RA1c-C10, SK-RA1c-C11, SK-RA1c-C12, SK-RA1c-C15, SK-RA2a-P4, SK-RA2a-C03, SK-RA2a-C07, SK-RA2b-C09, SK-RA2b-C11, SK-SS1a-P5, SK-SS1a-P6, SK-SS1a-C04, SK-SS1a-C05, SK-SS1a-C06, SK-SS1a-C07, SK-SS1a-C08, SK-SS1a-C10, SK-SS1a-C11, SK-SS1a-C12, SK-SS1a-C13, SK-SS1b-C02, SK-SS1b-C03, SK-SS1b-C06, SK-SS1b-C07, SK-SS1b-C09, SK-SS1b-C11, SK-SS1b-C12, SK-SS1c-P4, SK-SS1c-C03, SK-SS1c-C04, SK-SS1c-C05, SK-SS1c-C11, SK-SS1c-C13, SK-SS1c-C14, SK-SS1d-C01, SK-SS1d-C02, SK-SS1d-C06, SK-SS1d-C07, SK-SS1d-C08, SK-SS1d-C11, SK-SS1d-C12, SK-SS2a-C06, SK-SS2a-C07, SK-SS2a-C08, SK-SS2a-C09, SK-SS2a-C12, SK-SS2a-C13, SK-SS2a-C14, SK-SS2b-C02, SK-SS2b-C03, SK-SS2b-C04, SK-SS2b-C05, SK-SS2b-P5, SK-SS2b-C07, SK-SS2b-C08, SK-SS2b-C11, SK-SS2b-C12, SK-SS2b-C13, SK-TT1a-P4, SK-TT1a-C03, SK-TT1a-C09, SK-TT1a-C12, SK-TT1a-C14, SK-TT1b-P4, SK-TT1b-C06, SK-TT1b-C08, SK-TT1b-C09, SK-TT1b-C10, SK-TT1b-C11, SK-TT1b-C12, SK-TT1b-C14, SK-TT1b-C15, SK-TT1c-C03, SK-TT1c-C09, SK-TT1c-C11, SK-TT1c-C14, SK-TT1c-C15, SK-TT1d-P4, SK-TT1d-P5, SK-TT1d-C03, SK-TT1d-C04, SK-TT1d-C05, SK-TT1d-C06, SK-TT1d-C07, SK-TT1d-C08, SK-TT1d-C09, SK-TT1d-C10, SK-TT1d-C11, SK-TT1d-C12, SK-TT1d-C13, SK-TT1d-C14, SK-TT1d-C15, SK-TT1e-P5, SK-TT1e-P4, SK-TT1e-C03, SK-TT1e-P6, SK-TT1e-C06, SK-TT1e-C07, SK-TT1e-C08, SK-TT1e-C09, SK-TT1e-C10, SK-TT1e-C11, SK-TT1e-C12, SK-TT1e-C13, SK-TT1e-C15, SK-TT2a-P4, SK-TT2a-P7, SK-TT2a-C06, SK-TT2a-C08, SK-TT2a-C09, SK-TT2a-C10, SK-TT2a-C11, SK-TT2a-C12, SK-TT2b-P4, SK-TT2b-C02, SK-TT2b-C06, SK-TT2b-C08, SK-TT2b-C09, SK-TT2b-C11, SK-TT2b-C12, SK-TT2b-C15, SK-TT2c-C01, SK-TT2c-C02, SK-TT2c-C03, SK-TT2c-C04, SK-TT2c-C05, SK-TT2c-C06, SK-TT2c-C07, SK-TT2c-C08, SK-TT2c-C09, SK-TT2c-C10, SK-TT2c-C11, SK-TT2c-C12, SK-TT2c-C13, SK-TT2c-C14, SK-TT2d-P5, SK-TT2d-C02, SK-TT2d-C03, SK-TT2d-C04, SK-TT2d-P4, SK-TT2d-C06, SK-TT2d-C07, SK-TT2d-C08, SK-TT2d-C09, SK-TT2d-C10, SK-TT2d-C12, SK-TT2d-C14, SK-TT3a-P4, SK-TT3a-P5, SK-TT3a-C03, SK-TT3a-P6, SK-TT3a-C05, SK-TT3a-C07, SK-TT3a-C12, SK-TT3c-C01, SK-TT3c-C02, SK-TT3c-C06, SK-TT3c-C07, SK-TT3c-C08, SK-TT3c-C09, SK-TT3c-C11, SK-TT3c-C12, SK-TT3c-C13, SK-TT3c-C15, SK-TT4a-C01, SK-TT4a-C02, SK-TT4a-C03, SK-TT4a-C04, SK-TT4a-C06, SK-TT4a-C07, SK-TT4a-C08, SK-TT4a-C09, SK-TT4a-C10, SK-TT4a-C11, SK-TT4a-C12, SK-TT4a-C13, SK-TT4a-C14, SK-TT4a-C15, SK-TT4b-C02, SK-TT4b-P5, SK-TT4b-C06, SK-TT4b-C07, SK-TT4b-C09, SK-TT4b-C10, SK-TT4b-C11, SK-TT4b-C12, SK-TT4b-C13, SK-TT4b-C14, SK-TSSEQ-P5, SK-TSSEQ-C06, SK-TSSEQ-C11, SK-TSSEQ-C12, SK-TSSEQ-C13, SK-TSCE-P4, SK-TSCE-C08, SK-TSCE-C09, SK-TSCE-C10, SK-TSCE-C12, SK-TSCE-C13, SK-TSPS-C02, SK-TSPS-C03, SK-TSPS-C04, SK-TSPS-C05, SK-TSPS-C07, SK-TSPS-C11, SK-TSPS-C12, SK-TSPS-C13, SK-TSCC-P5, SK-TSCC-P6, SK-TSCC-C04, SK-TSCC-C06, SK-TSCC-C11, SK-TSCC-C12, SK-TSCC-C13, SK-TSDESC-P6, SK-TSDESC-P5, SK-TSDESC-C04, SK-TSDESC-C05, SK-TSDESC-C06, SK-TSDESC-C07, SK-TSDESC-C08, SK-TSDESC-C09, SK-TSDESC-C10, SK-TSDESC-C11, SK-TSDESC-C12

