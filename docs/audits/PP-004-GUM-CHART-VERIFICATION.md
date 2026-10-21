# PP-004: GUM chart verification (grade 3)

Date: 2026-10-20. Agent: "standards".

**Result:** the official K-12 Grammar, Usage, & Mechanics (GUM) chart has **41 grade 3 rows: M 8, R 18, I 11, C 4.** The site's 41 GUM rows are exactly those rows, and every level matches. No row is missing, none is extra and none has the wrong level, so no row was added or relevelled. The four rows PP-003 left UNVERIFIED are confirmed as official grade 3 Reinforce rows. Four site `text` paraphrases that changed the meaning were corrected to the official wording.

## Source and method

- Source: "Georgia's K-12 ELA Standards: Foundations, Language, Texts, & Practices, Grades 3-5" (52 pp., approved May 2023).
  - p. 14 holds "Understanding & Using the GUM Chart", which defines the codes:
    - NYI: Not Yet Introduced
    - I: Introduce. "Students practice applying the skill, but end-of-grade mastery is not required."
    - C: Continue. "Introduced at an earlier grade level ... end-of-grade mastery is not required."
    - M: Master. "The skill should be mastered by the end of this grade."
    - R: Reinforce. "Mastered in an earlier grade level."
  - The chart is on pp. 15-18. It is one K-12 table with 61 rows: 17 on p. 15, 19 on p. 16, 15 on p. 17 and 10 on p. 18.
- **Image reading.** Each chart page was rendered from the PDF at 110 dpi. The grade 3 cell of every row was read from the image. The image layout is a bordered table with colour-coded cells (NYI grey, I yellow, C yellow, M pink, R blue), so the cells cannot shift between columns.
- **Text cross-check.** Each row was parsed from the `pdftotext -layout` text, taking all 13 cells (K-12) per row, and compared with the image reading. The two agree on all 61 rows; there is no column shift.
- **Code slugs.** Each official grade 3 row was paired with a site row by chart order and by wording, and each pairing was confirmed by hand. The pairings are listed in the table below and stored as `siteCode` in `docs/audits/work/official-gr3-gum.json`.
- **Wording.** The site keeps two forms of wording:
  - its own short label `gum`, from which the code slug was built;
  - `text`, which is the label plus "Grade 3 code: X (Name)".

  The verbatim chart wording is now stored in a new field, `official`, with its page in `page`.

## Counts

| Grade 3 level | Official chart (from image) | Site | Pages |
|---|---|---|---|
| M (Master) | 8 | 8 | 16 |
| R (Reinforce) | 18 | 18 | 15 (17 rows), 16 (1 row: "-d or -es") |
| I (Introduce) | 11 | 11 | 16 (6), 17 (5) |
| C (Continue) | 4 | 4 | 16 |
| **Total grade 3 rows** | **41** | **41** | |
| NYI at grade 3 (not grade 3 rows) | 20 | 0 | 17 (10), 18 (10) |

Two cells are not single letters, and neither one affects grade 3:
- the "I, M" cells in the kindergarten column (p. 15, rows 1-4);
- the "I/M" cell for "Form and use verbs by adding -d or -es" in grade 2 (p. 16). That row's grade 3 cell is R.

## The 41 rows

Column meanings:
- **Wording** compares the site's paraphrase (`text` without the level suffix) with the official row:
  - "same" means equal apart from final punctuation or quote marks;
  - "paraphrase kept" means reworded with the same meaning;
  - "text corrected" means the paraphrase changed the meaning and `text` now uses the official wording.
- **Status** compares the official grade 3 level with the site's level.

| # | Site row (`gum` label) | Site code slug | Official row (verbatim) | Cat. | Official gr 3 | Site level | p. | Wording | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Use nouns and verbs to form complete thoughts in speech | `3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in` | Use nouns and verbs to share complete thoughts when speaking. | U | R | R | 15 | paraphrase kept | MATCH |
| 2 | Form and use singular and plural nouns in speech | `3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech` | Form and use singular and plural nouns when speaking. | U | R | R | 15 | paraphrase kept | MATCH |
| 3 | Use interrogatives to ask questions in speech | `3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech` | Use interrogatives to ask questions when speaking. | U | R | R | 15 | paraphrase kept | MATCH |
| 4 | Capitalize the first word of a sentence and the pronoun "I" | `3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-` | Capitalize the first word of a sentence and the pronoun I. | M | R | R | 15 | same | MATCH |
| 5 | Form regular plural nouns with -s or -es | `3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es` | Form regular plural nouns by adding -s or -es. | G | R | R | 15 | paraphrase kept | MATCH |
| 6 | Form and use verbs with -ing, -ed, or -s | `3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s` | Form and use verbs by adding -ing, -ed, or -s. | G | R | R | 15 | paraphrase kept | MATCH |
| 7 | Use action verbs | `3.L.GC.1:R:use-action-verbs` | Use action verbs. | G | R | R | 15 | same | MATCH |
| 8 | Use adjectives and adverbs | `3.L.GC.1:R:use-adjectives-and-adverbs` | Use adjectives and adverbs. | G | R | R | 15 | same | MATCH |
| 9 | Use common and proper nouns | `3.L.GC.1:R:use-common-and-proper-nouns` | Use common and proper nouns. | G | R | R | 15 | same | MATCH |
| 10 | Form and use simple verb tenses | `3.L.GC.1:R:form-and-use-simple-verb-tenses` | Form and use the simple verb tenses. | G | R | R | 15 | paraphrase kept | MATCH |
| 11 | Use determiners (articles, possessive and demonstrative adjectives) | `3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr` | Use determiners (articles, possessive determiners, demonstrative adjectives). | U | R | R | 15 | text corrected | MATCH |
| 12 | Capitalize proper nouns | `3.L.GC.1:R:capitalize-proper-nouns` | Capitalize proper nouns. | M | R | R | 15 | same | MATCH |
| 13 | Use end punctuation (period, exclamation point, question mark) | `3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que` | Use periods, exclamation marks, and question marks at the end of sentences. | M | R | R | 15 | paraphrase kept | MATCH |
| 14 | Form plural nouns by changing -y to -ies | `3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies` | Form plural nouns by changing -y to -ies. | G | R | R | 15 | same | MATCH |
| 15 | Use personal pronouns (subject, object, possessive) | `3.L.GC.1:R:use-personal-pronouns-subject-object-possessive` | Use personal pronouns (subject, object, and possessive). | G | R | R | 15 | paraphrase kept | MATCH |
| 16 | Use frequently occurring prepositions | `3.L.GC.1:R:use-frequently-occurring-prepositions` | Use frequently occurring prepositions. | G | R | R | 15 | same | MATCH |
| 17 | Use commas in a series and in dates, addresses, salutations, and closings | `3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa` | Use commas to separate items in a series and to format dates, addresses, salutations, and closings. | M | R | R | 15 | paraphrase kept | MATCH |
| 18 | Use apostrophes in contractions and singular possessive nouns | `3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos` | Use apostrophes to form contractions and singular possessive nouns. | M | M | M | 16 | paraphrase kept | MATCH |
| 19 | Form and use irregular plural nouns | `3.L.GC.1:M:form-and-use-irregular-plural-nouns` | Form and use irregular plural nouns. | G | M | M | 16 | same | MATCH |
| 20 | Form and use the past tense of irregular verbs | `3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs` | Form and use the past tense of irregular verbs. | G | M | M | 16 | same | MATCH |
| 21 | Use coordinating conjunctions to join words, phrases, or clauses | `3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra` | Use coordinating conjunctions to join words, phrases, or clauses. | G | M | M | 16 | same | MATCH |
| 22 | Form and use verbs by adding -d or -es | `3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es` | Form and use verbs by adding -d or -es. | G | R | R | 16 | same | MATCH |
| 23 | Use collective and abstract nouns | `3.L.GC.1:M:use-collective-and-abstract-nouns` | Use collective and abstract nouns. | G | M | M | 16 | same | MATCH |
| 24 | Use reflexive pronouns | `3.L.GC.1:M:use-reflexive-pronouns` | Use reflexive pronouns. | G | M | M | 16 | same | MATCH |
| 25 | Use commas with coordinating conjunctions to join independent clauses | `3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi` | Use commas with coordinating conjunctions to join independent clauses. | M | M | M | 16 | same | MATCH |
| 26 | Use hyphens to divide words at line breaks | `3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks` | Use hyphens to divide words at line breaks. | M | M | M | 16 | same | MATCH |
| 27 | Form and use prepositional phrases | `3.L.GC.1:C:form-and-use-prepositional-phrases` | Form and use prepositional phrases. | G | C | C | 16 | same | MATCH |
| 28 | Form and use comparative and superlative adjectives and adverbs | `3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti` | Form and use comparative and superlative adjectives and adverbs. | G | C | C | 16 | same | MATCH |
| 29 | Ensure pronoun-antecedent agreement | `3.L.GC.1:C:ensure-pronoun-antecedent-agreement` | Ensure pronoun-antecedent agreement. | U | C | C | 16 | same | MATCH |
| 30 | Use conventional capitalization, quotation marks, and commas for exact words and dialogue | `3.L.GC.1:C:use-conventional-capitalization-quotation-marks-` | Recognize and use conventional capitalization, quotation marks, and commas to indicate exact words and dialogue. | M | C | C | 16 | text corrected | MATCH |
| 31 | Use relative pronouns and relative adverbs | `3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs` | Use relative pronouns and relative adverbs. | G | I | I | 16 | same | MATCH |
| 32 | Use interjections | `3.L.GC.1:I:use-interjections` | Use interjections. | G | I | I | 16 | same | MATCH |
| 33 | Use helping and linking verbs | `3.L.GC.1:I:use-helping-and-linking-verbs` | Use helping and linking verbs. | G | I | I | 16 | same | MATCH |
| 34 | Correctly use frequently confused words (e.g., to/too/two) | `3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t` | Correctly use frequently confused words (e.g., to/too/two; there/their/they’re; advice/advise). | U | I | I | 16 | paraphrase kept | MATCH |
| 35 | Use conventional capitalization in abbreviations, proper adjectives, and formal titles | `3.L.GC.1:I:use-conventional-capitalization-in-abbreviations` | Recognize and use conventional capitalization in abbreviations, proper adjectives, and formal titles. | M | I | I | 16 | text corrected | MATCH |
| 36 | Use commas for direct address and to set off yes and no | `3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes` | Use commas to indicate direct address and to set off the words yes and no. | M | I | I | 16 | paraphrase kept | MATCH |
| 37 | Use apostrophes to form plural possessive nouns | `3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns` | Use apostrophes to form plural possessive nouns. | M | I | I | 17 | same | MATCH |
| 38 | Use indefinite pronouns with correct agreement | `3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement` | Use indefinite pronouns, ensuring correct agreement. | G | I | I | 17 | paraphrase kept | MATCH |
| 39 | Use subordinating conjunctions to join clauses | `3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses` | Use subordinating conjunctions to join clauses. | G | I | I | 17 | same | MATCH |
| 40 | Use commas after introductory phrases or clauses | `3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses` | Use commas after introductory phrases or clauses. | M | I | I | 17 | same | MATCH |
| 41 | Use capitalization and underlining, quotation marks, or italics for titles of works | `3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar` | Use conventional capitalization and underlining, quotation marks, or italics to indicate titles of works. | M | I | I | 17 | text corrected | MATCH |

Every row is a MATCH. Every code slug carries the correct level letter (`3.L.GC.1:<level>:...`), and each slug identifies its row unambiguously.

## The four rows PP-003 left UNVERIFIED

All four are on p. 15 and were read from the page image. Each has K "I, M", grades 1-12 "R", so grade 3 is **R (Reinforce)**. Each is confirmed as a real grade 3 row at the level the site uses.

| Site row | Official row (verbatim, p. 15) | GUM category | Grade 3 | Resolution |
|---|---|---|---|---|
| Use nouns and verbs to form complete thoughts in speech | Use nouns and verbs to share complete thoughts when speaking. | U | R | **VERIFIED.** The row exists and the level is R. The paraphrase keeps the meaning. |
| Form and use singular and plural nouns in speech | Form and use singular and plural nouns when speaking. | U | R | **VERIFIED.** The row exists and the level is R. The paraphrase keeps the meaning. |
| Use interrogatives to ask questions in speech | Use interrogatives to ask questions when speaking. | U | R | **VERIFIED.** The row exists and the level is R. The paraphrase keeps the meaning. |
| Capitalize the first word of a sentence and the pronoun "I" | Capitalize the first word of a sentence and the pronoun *I*. | M | R | **VERIFIED.** The row exists and the level is R. The wording is the same, except that the chart italicises *I* where the site uses quotation marks. |

Because all four are R, the blueprint treats them as assessed: 3.L.GC.1 is listed under Constructing Texts, and only Master and Reinforce rows count. The site already marks them `tested: "writing"`, so nothing changes. Three of the four are speaking skills ("when speaking"), which a written test can reach only indirectly. That is a lesson-design point for the lead, not a classification error.

## Fixes made

| Row | Before (`text`) | After (`text`) | Why |
|---|---|---|---|
| R: Use determiners | Use determiners (articles, possessive and demonstrative adjectives). | Use determiners (articles, possessive determiners, demonstrative adjectives). Grade 3 code: R (Reinforce). | The official term is "possessive determiners", not "possessive adjectives". |
| C: exact words and dialogue | Use conventional capitalization, quotation marks, and commas for exact words and dialogue. | Recognize and use conventional capitalization, quotation marks, and commas to indicate exact words and dialogue. Grade 3 code: C (Continue). | The paraphrase dropped "Recognize and". |
| I: abbreviations, proper adjectives, formal titles | Use conventional capitalization in abbreviations, proper adjectives, and formal titles. | Recognize and use conventional capitalization in abbreviations, proper adjectives, and formal titles. Grade 3 code: I (Introduce). | The paraphrase dropped "Recognize and". |
| I: titles of works | Use capitalization and underlining, quotation marks, or italics for titles of works. | Use conventional capitalization and underlining, quotation marks, or italics to indicate titles of works. Grade 3 code: I (Introduce). | The paraphrase dropped "conventional". |

No level changed and no row was added. So:
- no new lessons are needed for GUM;
- no row changed between "on the test" and "not on the test". The blueprint assesses only M and R, and the 26 M and R rows remain `tested: "writing"`, while the 15 I and C rows remain `tested: "no"`.

The `gum` labels and code slugs were not changed, because lessons and stored progress reference the slugs.

## Automated checks (`verification/check-content.js`, PP-004 section)

The data for these checks is `docs/audits/work/official-gr3-gum.json`.
- The site has exactly as many GUM rows as the chart has grade 3 rows.
- Every official grade 3 row maps to a site GUM row. Every site GUM row maps back to an official grade 3 row. No NYI row is mapped.
- The site level equals the official grade 3 level, and the level letter in the code slug matches.
- `official` equals the chart wording, and `page` equals the chart page.
- M and R rows are `tested: "writing"`; I and C rows are `tested: "no"`.
- The official counts stay M 8, R 18, I 11, C 4.

A mutation test (a relevelled row and an altered official wording) produced the expected FAILs.
