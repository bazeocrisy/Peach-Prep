# Peach Prep: parent starting point and complete ELA learning path

Date: 2026-10-21. Status: **learning route implemented in the draft candidate; not merged or deployed**.

Implementation audit: `docs/audits/LEARNING-PATH-IMPLEMENTATION-REVIEW.md`. The route is a suggested learning sequence, not a validated placement system.
Audited application reference: `f1f79791fe7215915821a3fc6d165f131231a143`; documentation baseline: `7a355630cdadfae6ae55fc78f1d97ceebe99b0e0`.

## Recommendation

Give families one suggested route through the existing content, without a placement assessment, accounts, backend, locked prerequisites, or automated personalized plan. Start with **Story elements: characters, setting, problem and solution (`3.T.T.1.b`)**. Pair it with the first sentence lesson from phase 1. Begin foundational reading and handwriting routines alongside the route, rather than making children finish all foundations before engaging with stories.

This is a product sequencing proposal based on the existing catalog and lesson content, not a state-prescribed order or a validated intervention. A child who finds reading difficult can discuss a parent-read story during teaching, while independent reading and adult-supported listening remain different forms of evidence. Do not record an adult-read response as independent reading performance.

## Audit findings: what exists and what is missing

- The existing catalog orders skills within five subjects. It does not supply the cross-subject route below. The broad coverage/content audit is reused; no claim of a fresh review of every question or a new browser run is made.
- There are 99 lessons and two writing tasks in the catalog. The 147 standards-matrix entries comprise 94 lesson-backed expectations/grammar rows and 53 embedded Practices. Five extra text-structure lessons revisit existing expectations; they are not five extra official codes.
- All 101 catalog activities and all 147 matrix entries are assigned below. This is route coverage, not proof a child has mastered them.
- The five ordinary lesson steps already exist: Learn It, Watch Me, Practice Together, Try It Yourself, Test Your Knowledge. Hands-on fluency/cursive lessons use adult practice/check routines instead. Do not invent a scored test for those activities.
- Foundations and Practices already include parent-led routines, but an automatic score cannot establish oral reading, handwriting, discussion, or collaboration performance. Parent observation remains necessary.
- The grammar catalog labels 15 Introduce/Continue skills as “Getting ahead.” That heading can mislead families: these are part of Grade 3 instruction even though end-of-grade mastery is not required and they are not on the Grade 3 Milestones. Proposed later wording: **“Introduce and keep practicing.”** Do not remove these skills from the full ELA route.
- Existing step/check progress is saved using localStorage on the current browser/device, and writing drafts have local storage. A login is not needed for this. Cross-device sync, separate child accounts, and an exact universal resume point are not established by this audit. Families should use one browser/device for now; a paper bookmark can record phase, lesson and next step. Clearing browser data can erase local progress; shared use is not separate child tracking.

## How a new family uses the route

1. Start with phase 1, first reading lesson. Read the parent coaching notes and use Learn It and Watch Me together.
2. Continue Practice Together, then allow an independent attempt. A lesson may span several short sessions. Do not require all five steps in one sitting.
3. Alternate the reading/writing activity with one vocabulary or grammar activity from the current phase. Keep a brief oral reading/word-work routine and handwriting practice alongside this work. A suggested session length of 15–20 minutes is a starting choice, not a required or validated dosage.
4. Read an enjoyable book and discuss it throughout the route; include independent writing from the beginning. The later essay tasks are applications of earlier work, not the first time the child writes.
5. Use a check result to choose the next action. The existing scored “Passed” threshold is at least 80% of points, rounded up. Passing is one piece of evidence, not mastery. If the child can explain and apply the skill independently, continue and revisit later. If not, revisit the model and the specific missed skill. Avoid repeated same-form tests as evidence of retention.
6. Complete adult-observed routines separately. Do not convert them into a machine pass or set a new Retained status. Introduce/Continue grammar needs exposure and continued practice, not a mastery gate.
7. Move through the phases, keeping unfinished items bookmarked. Parents may jump to classroom topics at any time. The suggested order never locks content.

## Route overview

| Lane/phase | Purpose | How to use it |
|---|---|---|
| 1 | Story meaning and complete sentences | Common starting point for new families |
| 2 | Information, main idea, vocabulary and word parts | Build meaning across nonfiction and unfamiliar words |
| 3 | Text organization, paragraphs, nouns and verbs | Connect reading structure to writing |
| 4 | Purpose, context, viewpoints and precise language | Compare ideas and explain word choices |
| 5 | Figurative language, poetry, creative writing and punctuation | Apply earlier meaning and sentence work |
| 6 | Evidence, source evaluation, research and extended writing | Connect sources to a written response |
| P | Phonics, fluency and cursive | Start in week one; continue alongside phases 1–6 |
| G | Introduce/Continue grammar | Weave into relevant grammar work across phases; not a final mastery exam |

Within a phase, follow each group's listed order but alternate subjects. Phase 6 deliberately puts evidence/source skills before synthesis and the two essay tasks. The P and G lanes are concurrent; their appearance after phase 6 in this document is an index layout, not a direction to postpone them.

## Every catalog activity assigned

Links point to the existing skill/task routes. The audited candidate is unmerged: production may show older content until owner-approved release. Use these paths on the candidate when reviewing it.


### 1 — Start with stories and sentences

| Group | Order | Existing activity | Lesson key / route |
|---|---:|---|---|
| Start with story elements | 1 | Story elements: characters, setting, problem and solution | `3.T.T.1.b`; `#skill/3.T.T.1.b` |
| Stories | 1 | Story clues: dialogue, description and actions | `3.T.T.1.a`; `#skill/3.T.T.1.a` |
| Stories | 2 | Characters and the story's lesson | `3.T.T.1.c`; `#skill/3.T.T.1.c` |
| Stories | 3 | Point of view: the narrator's view and yours | `3.T.C.2.a`; `#skill/3.T.C.2.a` |
| Stories | 4 | Compare two stories | `3.T.T.1.d`; `#skill/3.T.T.1.d` |
| Sentences | 1 | Complete sentences: a who and a did what | `3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in`; `#skill/3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in` |
| Sentences | 2 | Capital letters: the first word and I | `3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-`; `#skill/3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-` |
| Sentences | 3 | End marks: period, question mark and exclamation point | `3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que`; `#skill/3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que` |
| Sentences | 4 | Question words: who, what, where, when, why and how | `3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech`; `#skill/3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech` |
| Sentences | 5 | Complete sentences: simple, compound and complex | `3.L.GC.2.a`; `#skill/3.L.GC.2.a` |

### 2 — Understand information and unfamiliar words

| Group | Order | Existing activity | Lesson key / route |
|---|---:|---|---|
| Information | 1 | Text features: headings, bold words, text boxes and diagrams | `3.T.C.1.b`; `#skill/3.T.C.1.b` |
| Information | 2 | Main idea and key details | `3.T.T.2.a`; `#skill/3.T.T.2.a` |
| Information | 3 | How ideas connect: order of steps and cause and effect | `3.T.T.2.b`; `#skill/3.T.T.2.b` |
| Information | 4 | Putting together information from two texts | `3.T.T.2.c`; `#skill/3.T.T.2.c` |
| Learning new words | 1 | Learning new school words from what you read | `3.L.V.1.a`; `#skill/3.L.V.1.a` |
| Learning new words | 2 | Context clues: using nearby words to find meaning | `3.L.V.3.a`; `#skill/3.L.V.3.a` |
| Learning new words | 3 | Using a dictionary and a glossary | `3.L.V.3.d`; `#skill/3.L.V.3.d` |
| Word parts | 1 | Using word parts to figure out meaning | `3.L.V.2.a`; `#skill/3.L.V.2.a` |
| Word parts | 2 | Endings that tell what kind of word it is | `3.L.V.2.b`; `#skill/3.L.V.2.b` |
| Word parts | 3 | Building new words with roots, prefixes and suffixes | `3.L.V.2.c`; `#skill/3.L.V.2.c` |

### 3 — Organize meaning and build paragraphs

| Group | Order | Existing activity | Lesson key / route |
|---|---:|---|---|
| Text structure and clue words | 2 | Sequence: first, next, last | `TS-SEQ`; `#skill/TS-SEQ` |
| Text structure and clue words | 3 | Cause and effect: what happened and why | `TS-CE`; `#skill/TS-CE` |
| Text structure and clue words | 4 | Problem and solution: the tries and what works | `TS-PS`; `#skill/TS-PS` |
| Text structure and clue words | 5 | Compare and contrast: alike and different | `TS-CC`; `#skill/TS-CC` |
| Text structure and clue words | 6 | Description: a main topic and its details | `TS-DESC`; `#skill/TS-DESC` |
| Text structure and clue words | 7 | How a text is put together: sections, patterns and features | `3.T.SS.1.a`; `#skill/3.T.SS.1.a` |
| Paragraphs and linking words | 1 | Paragraphs that stay on one idea | `3.T.SS.1.d`; `#skill/3.T.SS.1.d` |
| Paragraphs and linking words | 2 | Linking words: because, also, although, since and for example | `3.T.SS.1.c`; `#skill/3.T.SS.1.c` |
| Paragraphs and linking words | 3 | Organize your writing to fit your reader | `3.T.SS.1.b`; `#skill/3.T.SS.1.b` |
| Nouns | 1 | Common and proper nouns | `3.L.GC.1:R:use-common-and-proper-nouns`; `#skill/3.L.GC.1:R:use-common-and-proper-nouns` |
| Nouns | 2 | Capital letters for proper nouns | `3.L.GC.1:R:capitalize-proper-nouns`; `#skill/3.L.GC.1:R:capitalize-proper-nouns` |
| Nouns | 3 | One or more than one: singular and plural nouns | `3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech`; `#skill/3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech` |
| Nouns | 4 | Making plurals with -s or -es | `3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es`; `#skill/3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es` |
| Nouns | 5 | Plurals that change y to ies | `3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies`; `#skill/3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies` |
| Nouns | 6 | Special plurals: children, mice and feet | `3.L.GC.1:M:form-and-use-irregular-plural-nouns`; `#skill/3.L.GC.1:M:form-and-use-irregular-plural-nouns` |
| Nouns | 7 | Group nouns and idea nouns | `3.L.GC.1:M:use-collective-and-abstract-nouns`; `#skill/3.L.GC.1:M:use-collective-and-abstract-nouns` |
| Verbs | 1 | Action verbs | `3.L.GC.1:R:use-action-verbs`; `#skill/3.L.GC.1:R:use-action-verbs` |
| Verbs | 2 | Verb endings: -s, -ed and -ing | `3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s`; `#skill/3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s` |
| Verbs | 3 | Adding -d or -es to verbs | `3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es`; `#skill/3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es` |
| Verbs | 4 | Verb tenses: past, present and future | `3.L.GC.1:R:form-and-use-simple-verb-tenses`; `#skill/3.L.GC.1:R:form-and-use-simple-verb-tenses` |
| Verbs | 5 | Special past-tense verbs: went, ran and caught | `3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs`; `#skill/3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs` |
| Verbs | 6 | Make the subject and verb agree | `3.L.GC.2.c`; `#skill/3.L.GC.2.c` |
| Verbs | 7 | Mix your sentences and keep verbs in the same time | `3.L.GC.2.b`; `#skill/3.L.GC.2.b` |

### 4 — Compare viewpoints and choose words

| Group | Order | Existing activity | Lesson key / route |
|---|---:|---|---|
| Author's purpose and opinion | 1 | Author's purpose and audience | `3.T.C.1.a`; `#skill/3.T.C.1.a` |
| Author's purpose and opinion | 2 | Opinion texts: the opinion, the reasons and the evidence | `3.T.T.3.a`; `#skill/3.T.T.3.a` |
| Author's purpose and opinion | 3 | When, where and why a text was written | `3.T.C.2.c`; `#skill/3.T.C.2.c` |
| How words relate | 1 | Homophones, homographs, synonyms and antonyms | `3.L.V.3.b`; `#skill/3.L.V.3.b` |
| How words relate | 2 | Shades of meaning: words that are close but not the same | `3.L.V.3.c`; `#skill/3.L.V.3.c` |
| Choosing words | 1 | Choosing the most exact word | `3.L.V.3.e`; `#skill/3.L.V.3.e` |
| Choosing words | 2 | Using school words when you speak and write | `3.L.V.1.b`; `#skill/3.L.V.1.b` |
| Pronouns and describing words | 1 | Pronouns: subject, object and owning | `3.L.GC.1:R:use-personal-pronouns-subject-object-possessive`; `#skill/3.L.GC.1:R:use-personal-pronouns-subject-object-possessive` |
| Pronouns and describing words | 2 | Pronouns that end in -self and -selves | `3.L.GC.1:M:use-reflexive-pronouns`; `#skill/3.L.GC.1:M:use-reflexive-pronouns` |
| Pronouns and describing words | 3 | Determiners: a, an, the, this, that and my | `3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr`; `#skill/3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr` |
| Pronouns and describing words | 4 | Adjectives and adverbs: describing words | `3.L.GC.1:R:use-adjectives-and-adverbs`; `#skill/3.L.GC.1:R:use-adjectives-and-adverbs` |
| Pronouns and describing words | 5 | Prepositions: words that tell where and when | `3.L.GC.1:R:use-frequently-occurring-prepositions`; `#skill/3.L.GC.1:R:use-frequently-occurring-prepositions` |
| Pronouns and describing words | 6 | Add details with exact describing words | `3.L.GC.2.d`; `#skill/3.L.GC.2.d` |

### 5 — Read closely and create texts

| Group | Order | Existing activity | Lesson key / route |
|---|---:|---|---|
| Figurative language and poems | 1 | Similes, metaphors and idioms | `3.T.SS.2.a`; `#skill/3.T.SS.2.a` |
| Figurative language and poems | 2 | How poems are built: lines, stanzas, rhyme and repetition | `3.T.T.4.a`; `#skill/3.T.T.4.a` |
| Stories, poems and pictures | 1 | Write a story: beginnings, dialogue, details and endings | `3.T.T.1.e`; `#skill/3.T.T.1.e` |
| Stories, poems and pictures | 2 | Use figurative language in your writing: similes, metaphors, idioms and more | `3.T.SS.2.b`; `#skill/3.T.SS.2.b` |
| Stories, poems and pictures | 3 | Writing a rhyming poem with two or more stanzas | `3.T.T.4.b`; `#skill/3.T.T.4.b` |
| Stories, poems and pictures | 4 | Making posters and slides with words, pictures and sound | `3.T.C.1.c`; `#skill/3.T.C.1.c` |
| Joining words and punctuation | 1 | Joining words: and, but, or, so | `3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra`; `#skill/3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra` |
| Joining words and punctuation | 2 | Commas before and, but, or, so | `3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi`; `#skill/3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi` |
| Joining words and punctuation | 3 | Commas in lists, dates, places and letters | `3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa`; `#skill/3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa` |
| Joining words and punctuation | 4 | Apostrophes: short words and words that own | `3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos`; `#skill/3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos` |
| Joining words and punctuation | 5 | Hyphens: splitting a word at the end of a line | `3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks`; `#skill/3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks` |

### 6 — Research and explain or persuade

| Group | Order | Existing activity | Lesson key / route |
|---|---:|---|---|
| Evidence and research | 1 | Pointing to the sentence that proves it | `3.T.RA.2.a`; `#skill/3.T.RA.2.a` |
| Evidence and research | 2 | Is this a good source? | `3.T.RA.2.b`; `#skill/3.T.RA.2.b` |
| Evidence and research | 3 | Asking good research questions | `3.T.RA.1.a`; `#skill/3.T.RA.1.a` |
| Evidence and research | 4 | Finding, choosing and sorting facts from sources | `3.T.RA.1.b`; `#skill/3.T.RA.1.b` |
| Opinion and informational writing | 1 | Writing an opinion piece: opinion, reasons, linking words and a conclusion | `3.T.T.3.c`; `#skill/3.T.T.3.c` |
| Opinion and informational writing | 2 | Writing to inform: introduction, facts and conclusion | `3.T.T.2.d`; `#skill/3.T.T.2.d` |
| Opinion and informational writing | 3 | Summing up what you learned from two sources | `3.T.RA.1.c`; `#skill/3.T.RA.1.c` |
| Essay practice (the 8-point writing task) | 1 | Writing task 1 | `task:W-TASK-01`; `#write/W-TASK-01` |
| Essay practice (the 8-point writing task) | 2 | Writing task 2 | `task:W-TASK-02`; `#write/W-TASK-02` |

### P — Parallel foundations: begin in week one

| Group | Order | Existing activity | Lesson key / route |
|---|---:|---|---|
| Phonics and word parts | 1 | Letters that can make more than one sound | `3.F.P.4.a`; `#skill/3.F.P.4.a` |
| Phonics and word parts | 2 | Syllable types: breaking long words into parts | `3.F.P.4.b`; `#skill/3.F.P.4.b` |
| Phonics and word parts | 3 | Prefixes and suffixes: reading and spelling word parts | `3.F.P.4.c`; `#skill/3.F.P.4.c` |
| Reading words smoothly | 1 | Sight words: know them in a snap | `3.F.F.1.a`; `#skill/3.F.F.1.a` |
| Reading words smoothly | 2 | Does it make sense? Catching and fixing reading mistakes | `3.F.F.1.d`; `#skill/3.F.F.1.d` |
| Reading words smoothly | 3 | Reading accurately | `3.F.F.1.b`; `#skill/3.F.F.1.b` |
| Reading words smoothly | 4 | Reading smoothly with expression | `3.F.F.1.c`; `#skill/3.F.F.1.c` |
| Cursive | 1 | Reading cursive | `3.F.H.3.a`; `#skill/3.F.H.3.a` |
| Cursive | 2 | Writing cursive letters and joining them | `3.F.H.4.a`; `#skill/3.F.H.4.a` |
| Cursive | 3 | Spacing words in cursive | `3.F.H.4.b`; `#skill/3.F.H.4.b` |

### G — Grade 3 grammar introduction and continued practice

| Group | Order | Existing activity | Lesson key / route |
|---|---:|---|---|
| Introduce and keep practicing (not on the grade 3 test) | 1 | Prepositional phrases | `3.L.GC.1:C:form-and-use-prepositional-phrases`; `#skill/3.L.GC.1:C:form-and-use-prepositional-phrases` |
| Introduce and keep practicing (not on the grade 3 test) | 2 | Comparing words: -er, -est, more and most | `3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti`; `#skill/3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti` |
| Introduce and keep practicing (not on the grade 3 test) | 3 | Pronouns that match their nouns | `3.L.GC.1:C:ensure-pronoun-antecedent-agreement`; `#skill/3.L.GC.1:C:ensure-pronoun-antecedent-agreement` |
| Introduce and keep practicing (not on the grade 3 test) | 4 | Helping verbs and linking verbs | `3.L.GC.1:I:use-helping-and-linking-verbs`; `#skill/3.L.GC.1:I:use-helping-and-linking-verbs` |
| Introduce and keep practicing (not on the grade 3 test) | 5 | Interjections: Wow! Oh no! | `3.L.GC.1:I:use-interjections`; `#skill/3.L.GC.1:I:use-interjections` |
| Introduce and keep practicing (not on the grade 3 test) | 6 | Sound-alike words: to, too, two and more | `3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t`; `#skill/3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t` |
| Introduce and keep practicing (not on the grade 3 test) | 7 | Punctuating what people say | `3.L.GC.1:C:use-conventional-capitalization-quotation-marks-`; `#skill/3.L.GC.1:C:use-conventional-capitalization-quotation-marks-` |
| Introduce and keep practicing (not on the grade 3 test) | 8 | Commas with names and with yes and no | `3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes`; `#skill/3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes` |
| Introduce and keep practicing (not on the grade 3 test) | 9 | Commas after an opening part | `3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses`; `#skill/3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses` |
| Introduce and keep practicing (not on the grade 3 test) | 10 | Apostrophes for more than one owner | `3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns`; `#skill/3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns` |
| Introduce and keep practicing (not on the grade 3 test) | 11 | Matching verbs to everyone, each, both and many | `3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement`; `#skill/3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement` |
| Introduce and keep practicing (not on the grade 3 test) | 12 | Who, which, that, where and when | `3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs`; `#skill/3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs` |
| Introduce and keep practicing (not on the grade 3 test) | 13 | Joining ideas with because, when, after and if | `3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses`; `#skill/3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses` |
| Introduce and keep practicing (not on the grade 3 test) | 14 | Capital letters in Mr., Dr., St. and words like American | `3.L.GC.1:I:use-conventional-capitalization-in-abbreviations`; `#skill/3.L.GC.1:I:use-conventional-capitalization-in-abbreviations` |
| Introduce and keep practicing (not on the grade 3 test) | 15 | Writing titles of books, stories, poems and songs | `3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar`; `#skill/3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar` |

## Every non-Practices matrix entry mapped

Keys beginning `3.L.GC.1:` identify internal grammar-chart rows under official standard `3.L.GC.1`; they are not distinct official state codes. P/G indicate concurrent lanes. Multiple lesson keys mean the expectation is revisited across activities.

| Matrix expectation / grammar row | Lane/phase | Existing lesson key(s) |
|---|---|---|
| `3.F.P.4.a` | P | `3.F.P.4.a` |
| `3.F.P.4.b` | P | `3.F.P.4.b` |
| `3.F.P.4.c` | P | `3.F.P.4.c` |
| `3.F.F.1.a` | P | `3.F.F.1.a` |
| `3.F.F.1.b` | P | `3.F.F.1.b` |
| `3.F.F.1.c` | P | `3.F.F.1.c` |
| `3.F.F.1.d` | P | `3.F.F.1.d` |
| `3.F.H.3.a` | P | `3.F.H.3.a` |
| `3.F.H.4.a` | P | `3.F.H.4.a` |
| `3.F.H.4.b` | P | `3.F.H.4.b` |
| `3.L.GC.2.a` | 1 | `3.L.GC.2.a` |
| `3.L.GC.2.b` | 3 | `3.L.GC.2.b` |
| `3.L.GC.2.c` | 3 | `3.L.GC.2.c` |
| `3.L.GC.2.d` | 4 | `3.L.GC.2.d` |
| `3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in` | 1 | `3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in` |
| `3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech` | 3 | `3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech` |
| `3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech` | 1 | `3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech` |
| `3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-` | 1 | `3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-` |
| `3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es` | 3 | `3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es` |
| `3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s` | 3 | `3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s` |
| `3.L.GC.1:R:use-action-verbs` | 3 | `3.L.GC.1:R:use-action-verbs` |
| `3.L.GC.1:R:use-adjectives-and-adverbs` | 4 | `3.L.GC.1:R:use-adjectives-and-adverbs` |
| `3.L.GC.1:R:use-common-and-proper-nouns` | 3 | `3.L.GC.1:R:use-common-and-proper-nouns` |
| `3.L.GC.1:R:form-and-use-simple-verb-tenses` | 3 | `3.L.GC.1:R:form-and-use-simple-verb-tenses` |
| `3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr` | 4 | `3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr` |
| `3.L.GC.1:R:capitalize-proper-nouns` | 3 | `3.L.GC.1:R:capitalize-proper-nouns` |
| `3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que` | 1 | `3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que` |
| `3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies` | 3 | `3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies` |
| `3.L.GC.1:R:use-personal-pronouns-subject-object-possessive` | 4 | `3.L.GC.1:R:use-personal-pronouns-subject-object-possessive` |
| `3.L.GC.1:R:use-frequently-occurring-prepositions` | 4 | `3.L.GC.1:R:use-frequently-occurring-prepositions` |
| `3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa` | 5 | `3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa` |
| `3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos` | 5 | `3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos` |
| `3.L.GC.1:M:form-and-use-irregular-plural-nouns` | 3 | `3.L.GC.1:M:form-and-use-irregular-plural-nouns` |
| `3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs` | 3 | `3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs` |
| `3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra` | 5 | `3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra` |
| `3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es` | 3 | `3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es` |
| `3.L.GC.1:M:use-collective-and-abstract-nouns` | 3 | `3.L.GC.1:M:use-collective-and-abstract-nouns` |
| `3.L.GC.1:M:use-reflexive-pronouns` | 4 | `3.L.GC.1:M:use-reflexive-pronouns` |
| `3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi` | 5 | `3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi` |
| `3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks` | 5 | `3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks` |
| `3.L.GC.1:C:form-and-use-prepositional-phrases` | G | `3.L.GC.1:C:form-and-use-prepositional-phrases` |
| `3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti` | G | `3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti` |
| `3.L.GC.1:C:ensure-pronoun-antecedent-agreement` | G | `3.L.GC.1:C:ensure-pronoun-antecedent-agreement` |
| `3.L.GC.1:C:use-conventional-capitalization-quotation-marks-` | G | `3.L.GC.1:C:use-conventional-capitalization-quotation-marks-` |
| `3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs` | G | `3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs` |
| `3.L.GC.1:I:use-interjections` | G | `3.L.GC.1:I:use-interjections` |
| `3.L.GC.1:I:use-helping-and-linking-verbs` | G | `3.L.GC.1:I:use-helping-and-linking-verbs` |
| `3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t` | G | `3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t` |
| `3.L.GC.1:I:use-conventional-capitalization-in-abbreviations` | G | `3.L.GC.1:I:use-conventional-capitalization-in-abbreviations` |
| `3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes` | G | `3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes` |
| `3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns` | G | `3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns` |
| `3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement` | G | `3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement` |
| `3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses` | G | `3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses` |
| `3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses` | G | `3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses` |
| `3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar` | G | `3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar` |
| `3.L.V.1.a` | 2 | `3.L.V.1.a` |
| `3.L.V.1.b` | 4 | `3.L.V.1.b` |
| `3.L.V.2.a` | 2 | `3.L.V.2.a` |
| `3.L.V.2.b` | 2 | `3.L.V.2.b` |
| `3.L.V.2.c` | 2 | `3.L.V.2.c` |
| `3.L.V.3.a` | 2 | `3.L.V.3.a` |
| `3.L.V.3.b` | 4 | `3.L.V.3.b` |
| `3.L.V.3.c` | 4 | `3.L.V.3.c` |
| `3.L.V.3.d` | 2 | `3.L.V.3.d` |
| `3.L.V.3.e` | 4 | `3.L.V.3.e` |
| `3.T.C.1.a` | 4 | `3.T.C.1.a` |
| `3.T.C.1.b` | 2 | `3.T.C.1.b` |
| `3.T.C.1.c` | 5 | `3.T.C.1.c` |
| `3.T.C.2.a` | 1 | `3.T.C.2.a` |
| `3.T.C.2.c` | 4 | `3.T.C.2.c` |
| `3.T.SS.1.a` | 3 | `3.T.SS.1.a`; `TS-SEQ`; `TS-CE`; `TS-PS`; `TS-CC`; `TS-DESC` |
| `3.T.SS.1.b` | 3 | `3.T.SS.1.b` |
| `3.T.SS.1.c` | 3 | `3.T.SS.1.c` |
| `3.T.SS.1.d` | 3 | `3.T.SS.1.d` |
| `3.T.SS.2.a` | 5 | `3.T.SS.2.a` |
| `3.T.SS.2.b` | 5 | `3.T.SS.2.b` |
| `3.T.T.1.a` | 1 | `3.T.T.1.a` |
| `3.T.T.1.b` | 1, 3 | `3.T.T.1.b`; `TS-PS` |
| `3.T.T.1.c` | 1 | `3.T.T.1.c` |
| `3.T.T.1.d` | 1 | `3.T.T.1.d` |
| `3.T.T.1.e` | 5 | `3.T.T.1.e` |
| `3.T.T.2.a` | 3, 2 | `TS-DESC`; `3.T.T.2.a` |
| `3.T.T.2.b` | 3, 2 | `TS-SEQ`; `TS-CE`; `3.T.T.2.b` |
| `3.T.T.2.c` | 2 | `3.T.T.2.c` |
| `3.T.T.2.d` | 6 | `3.T.T.2.d` |
| `3.T.T.3.a` | 4 | `3.T.T.3.a` |
| `3.T.T.3.c` | 6 | `3.T.T.3.c` |
| `3.T.T.4.a` | 5 | `3.T.T.4.a` |
| `3.T.T.4.b` | 5 | `3.T.T.4.b` |
| `3.T.RA.1.a` | 6 | `3.T.RA.1.a` |
| `3.T.RA.1.b` | 6 | `3.T.RA.1.b` |
| `3.T.RA.1.c` | 6 | `3.T.RA.1.c` |
| `3.T.RA.2.a` | 6 | `3.T.RA.2.a` |
| `3.T.RA.2.b` | 6 | `3.T.RA.2.b` |

## Every embedded Practice assigned

Use the existing parent habit card for each code; the table assigns when to begin and revisit it. Rotate individual cards across sessions and keep using earlier practices. These 53 entries are ongoing routines, not 53 additional quizzes. Every row requires observation of the actual reading, writing, conversation, or presentation described on its card.

| Practice code | Existing parent card | Begin / revisit |
|---|---|---|
| `K-12.P.EICC.1.a` | Setting reading and writing goals | Phase 1: set goals/identity; revisit weekly throughout |
| `K-12.P.EICC.1.b` | Knowing what I like to read | Phase 1: set goals/identity; revisit weekly throughout |
| `K-12.P.EICC.1.c` | Choosing books I care about | Phase 1: set goals/identity; revisit weekly throughout |
| `K-12.P.EICC.1.d` | My reading and writing toolbox | Phase 1: set goals/identity; revisit weekly throughout |
| `K-12.P.EICC.1.e` | Being part of a reading family | Phase 1: set goals/identity; revisit weekly throughout |
| `K-12.P.EICC.1.f` | Reading and writing on my own | Phase 1: set goals/identity; revisit weekly throughout |
| `K-12.P.EICC.2.a` | Telling stories | Phase 1: purposeful reading/writing; vary texts throughout |
| `K-12.P.EICC.2.b` | Reading to learn and share | Phase 1: purposeful reading/writing; vary texts throughout |
| `K-12.P.EICC.2.c` | Learning how things work | Phase 1: purposeful reading/writing; vary texts throughout |
| `K-12.P.EICC.2.d` | Thinking about ideas | Phase 1: purposeful reading/writing; vary texts throughout |
| `K-12.P.EICC.2.e` | Using words to solve problems | Phase 1: purposeful reading/writing; vary texts throughout |
| `K-12.P.EICC.3.a` | Knowing why I'm reading | Phase 1: comprehension routines; revisit phases 2–6 |
| `K-12.P.EICC.3.b` | Skimming to find what I need | Phase 1: comprehension routines; revisit phases 2–6 |
| `K-12.P.EICC.3.c` | Connecting what I know | Phase 1: comprehension routines; revisit phases 2–6 |
| `K-12.P.EICC.3.d` | Summing up and picturing | Phase 1: comprehension routines; revisit phases 2–6 |
| `K-12.P.EICC.3.e` | Making predictions | Phase 1: comprehension routines; revisit phases 2–6 |
| `K-12.P.EICC.3.f` | Reading between the lines | Phase 1: comprehension routines; revisit phases 2–6 |
| `K-12.P.EICC.3.g` | Figuring out new words | Phase 1: comprehension routines; revisit phases 2–6 |
| `K-12.P.EICC.4.a` | Knowing my purpose and reader | Phase 1: short writing; develop through phases 3, 5 and 6 |
| `K-12.P.EICC.4.b` | Planning how to organize | Phase 1: short writing; develop through phases 3, 5 and 6 |
| `K-12.P.EICC.4.c` | Coming up with ideas | Phase 1: short writing; develop through phases 3, 5 and 6 |
| `K-12.P.EICC.4.d` | Picking my best ideas | Phase 1: short writing; develop through phases 3, 5 and 6 |
| `K-12.P.EICC.4.e` | Writing a first draft | Phase 1: short writing; develop through phases 3, 5 and 6 |
| `K-12.P.EICC.4.f` | Checking if my writing works | Phase 1: short writing; develop through phases 3, 5 and 6 |
| `K-12.P.EICC.4.g` | Making my writing better | Phase 1: short writing; develop through phases 3, 5 and 6 |
| `K-12.P.EICC.4.h` | Fixing capitals, spelling and punctuation | Phase 1: short writing; develop through phases 3, 5 and 6 |
| `K-12.P.ST.1.a` | Knowing the background | Phase 1: discuss context/purpose; revisit phases 2 and 4–6 |
| `K-12.P.ST.1.b` | Why it was written then | Phase 1: discuss context/purpose; revisit phases 2 and 4–6 |
| `K-12.P.ST.1.c` | Why the author chose that | Phase 1: discuss context/purpose; revisit phases 2 and 4–6 |
| `K-12.P.ST.2.a` | What is this text for? | Phase 1: discuss context/purpose; revisit phases 2 and 4–6 |
| `K-12.P.ST.2.b` | Having a clear point of view | Phase 1: discuss context/purpose; revisit phases 2 and 4–6 |
| `K-12.P.ST.2.c` | Writing for different readers | Phase 1: discuss context/purpose; revisit phases 2 and 4–6 |
| `K-12.P.AC.1.a` | Noticing story and opinion parts | Phase 1: notice author choices; revisit phases 3–6 |
| `K-12.P.AC.1.b` | Noticing powerful words | Phase 1: notice author choices; revisit phases 3–6 |
| `K-12.P.AC.1.c` | Noticing how sentences sound | Phase 1: notice author choices; revisit phases 3–6 |
| `K-12.P.AC.1.d` | Noticing how pages are laid out | Phase 1: notice author choices; revisit phases 3–6 |
| `K-12.P.AC.2.a` | Using story and opinion parts | Phase 1: write for a reader; revisit phases 3–6 |
| `K-12.P.AC.2.b` | Choosing words on purpose | Phase 1: write for a reader; revisit phases 3–6 |
| `K-12.P.AC.2.c` | Building sentences on purpose | Phase 1: write for a reader; revisit phases 3–6 |
| `K-12.P.AC.2.d` | Organizing to help my reader | Phase 1: write for a reader; revisit phases 3–6 |
| `K-12.P.AC.3.a` | Trying different kinds of writing | Phase 2: notice features/design; apply in phases 3, 5 and 6 |
| `K-12.P.AC.3.b` | Different texts, different details | Phase 2: notice features/design; apply in phases 3, 5 and 6 |
| `K-12.P.AC.3.c` | Different texts, different shapes | Phase 2: notice features/design; apply in phases 3, 5 and 6 |
| `K-12.P.AC.3.d` | Mixing words and pictures | Phase 2: notice features/design; apply in phases 3, 5 and 6 |
| `K-12.P.CP.1.a` | Coming ready to talk | Phase 1: collaborate with a parent/partner; revisit throughout |
| `K-12.P.CP.1.b` | Helping the group work well | Phase 1: collaborate with a parent/partner; revisit throughout |
| `K-12.P.CP.1.c` | Sharing, listening and responding | Phase 1: collaborate with a parent/partner; revisit throughout |
| `K-12.P.CP.1.d` | Working together | Phase 1: collaborate with a parent/partner; revisit throughout |
| `K-12.P.CP.2.a` | Sharing ideas clearly | Phase 1: short oral sharing; expand presentations in phases 5–6 |
| `K-12.P.CP.2.b` | Choosing how to present | Phase 1: short oral sharing; expand presentations in phases 5–6 |
| `K-12.P.CP.2.c` | Using voice and body | Phase 1: short oral sharing; expand presentations in phases 5–6 |
| `K-12.P.CP.2.d` | Asking and answering questions | Phase 1: short oral sharing; expand presentations in phases 5–6 |
| `K-12.P.CP.2.e` | Memorizing poems and speeches | Phase 1: short oral sharing; expand presentations in phases 5–6 |

## Completion record and limits

Maintain three separate observations: **activity visited/completed**, **scored check result**, and **adult-observed application**. Record dates and a short note where a parent observes performance. The new checklist records activities marked finished and routines tried by a parent; it cannot verify every oral/handwritten performance. Use the checklist alongside actual observations; do not claim an automatic “all standards mastered” percentage.

At the end, review any unchecked mapped entries, revisit skills in unfamiliar texts, and review the child's writing with the existing guides. PT-1 can provide mixed practice; it is shortened and does not cover the entire pathway or constitute a complete Milestones simulation. No single terminal test certifies all ELA codes.

## Initial implementation scope

The draft candidate now provides two starting choices, a short path introduction, a next-lesson bookmark, expandable phases/groups, activity-finished checkboxes and parent-routine checkboxes. It uses the existing lessons and leaves the catalog accessible. Switching modes preserves lesson scores, drafts and the separate path checklist. The first story-elements lesson was moved forward from its catalog group into phase 1; it appears only once in the route. The remaining text-structure lessons stay in phase 3.

The `pp.path.v1` record stores the mode, introduction acknowledgment, lesson/step bookmark and explicit activity/routine checklist. It does not change the existing saved-progress schema or equate a checked activity with mastery. See the implementation review for current tests and limitations. No placement assessment, backend/login, cross-device sync or new mastery policy was added.

## Verification and sources

Reconciled against `js/data/catalog.js`, all 17 lesson bundles, `js/data/standards.js`, `js/data/habits.js`, `js/skills.js`, and the PP-004 final coverage matrix. Checks: 101/101 catalog activities assigned once (99 lesson keys + 2 writing tasks); 94/94 lesson-backed matrix rows resolve to existing route lessons; 53/53 Practices resolve to existing habit cards; 147/147 matrix entries covered with no extra/missing standard keys. Existing PP-004 functional and official-source verification remains the release evidence; no browser suite was repeated for this documentation-only proposal.
