# B8a author log (GUM Introduce/Continue, L-GUM4.js) - PARTIAL

Status: NOT ACCEPTED: awaiting independent review. Only lesson 1 of 8 is authored. Lessons 2-8 are untouched (original content).

## Lesson 1: 3.L.GC.1:C:form-and-use-prepositional-phrases (final-file measurements)
- check-content --all: PASS (0 failures, 83 warnings, none about this lesson beyond ledger/review-record).
- Core: 15 items in 3 sets of 5 (refs P3, P5; 13 new). Formats: match 1, hottext 3, mc 5, dropdown 3, ebsr 1, ms 2. DOK: 10 at 2, 5 at 3. Draft items 8.
- Twins: 15 (S01-S15), each with `like`.
- Twin vs core Jaccard, all twin x core pairs: max 0.208 set, 0.207 multiset. Matched pairs: max 0.165 set, 0.207 multiset.
- Keys uniquely longest: 0 of 28 slots. verify.js clean. recount.js (live choices after hints 1-3): none flagged.
- Passages (words / FK / sentences): p1 120/3.61/10, p2 103/3.21/10, p3 104/3.55/9, p4 110/3.93/10, p5 110/3.07/9, p6 109/2.30/10.
- Teach: point 1 preposition list extended; points 4 (phrase needs its noun) and 5 (same preposition, different meaning) added; third Watch Me added.

## Web verification (Merriam-Webster, fetched)
- until https://www.merriam-webster.com/dictionary/until
- inside https://www.merriam-webster.com/dictionary/inside
- by https://www.merriam-webster.com/dictionary/by
- since (preposition, "from a specified time in the past") https://merriam-webster.com/dictionary/since
- toward (preposition, "in the direction of") https://www.merriam-webster.com/dictionary/toward%28s%29
- near (preposition, "close to") https://merriam-webster.com/dictionary/near
- along https://www.merriam-webster.com/dictionary/along ; around https://www.merriam-webster.com/dictionary/around ; behind https://www.merriam-webster.com/dictionary/behind (all prepositions)
- Definition (begins with a preposition, ends with its object; object may also be a pronoun, gerund or clause): https://chompchomp.com/terms/prepositionalphrase.htm

## Open items for reviewers / not done
- Lessons 2-8 (comparative/superlative, pronoun-antecedent, capitalization/quotation marks, relative pronouns/adverbs, interjections, helping/linking verbs, frequently confused words) not authored.
- L1 duplicate scan across all of js/data was only done with the lesson-scoped scanner (matches /GC\.1:[CI]:/ lessons); non-lesson set files were not scanned.
- Lesson 2 note: matrix wants one comparative-adverb item.

## Lesson 2: 3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti (final-file measurements)
- check-content --all: PASS (0 failures); check-writing 0 failures; check-instructional-copy 28 assertions pass.
- Core: 15 items in 3 sets of 5 (refs P4, P5; 13 new). Formats: dropdown 5, mc 4, hot text 2, multiple-select 2, match 1, EBSR 1. DOK: 11 at 2, 4 at 3 (0 at DOK 1). Draft-based items 8 (p1 3, p2 3, p3 2). Verbs: identify 3, edit 5, construct 2, transfer 2, explain 2, compare 1.
- Components: -er/-est, more/most, irregular good/bad/well, spelling changes (doubling, y to i), comparative adverbs (C08, C13, C15 and twins S08, S13, S15; the matrix's missing adverb item).
- Twins: 15 (S01-S15), each with `like`. Twin vs core Jaccard, all twin x core pairs: max 0.196 set, 0.205 multiset (same maxima over matched pairs).
- Keys uniquely longest: 0 of 30 slots. verify.js clean. recount.js (live choices after hints 1-3): none flagged; h3 names at most one wrong choice everywhere.
- Passages (words excluding markers / FK / sentences): p1 121/3.82/10, p2 114/3.43/9, p3 117/4.30/10, p4 123/3.69/10, p5 110/2.90/10, p6 106/3.68/9. readability.py gives FK 4.3 or lower for all six.
- Sentence-number references checked by script (refcheck.js) against the numbered passages: all prompt and hint references land on the sentence described.
- Teach: new point on comparing words that tell how (more/most with -ly words; fast, faster, fastest). Third Watch Me added (more politely).
- Duplicate scan: raw 6-gram scan of all js/data files (including sets/, tasks/) for the L2 region. Passage sentences that matched other lessons (garden, Field Day, shelter) were reworded. Remaining hits are generic hint phrasing only.
- Known overlap for reviewers: the irregular words better, best, worse, worst appear in the refs (P4, P5), Together and test items as well as in new core keys; the component is only these forms, so overlap could not be fully avoided. New core keys that use them are full sentences (C05, C11) or the dropdown word worst (C12).
- Variant forms avoided as errors: baddest/badder (Merriam-Webster labels them slang), politer/quieter/louder as adverbs, more happy. Errors used: double comparatives (more better, most hardest, more faster, more easier, more flatter, more slower), wrong-number forms (tallest than, the more colorful with a whole garden), and non-words (gooder, easyer, neatlier, patientlier).
- Web verification (Merriam-Webster fetched unless noted): good/better/best and bad/worse/worst https://www.merriam-webster.com/grammar/comparatives-and-superlatives-whats-the-difference ; bad (badder, baddest slang) https://www.merriam-webster.com/dictionary/bad ; friendlier/friendliest https://www.merriam-webster.com/dictionary/friendlier ; easier/easiest https://www.merriam-webster.com/dictionary/easy ; sleepier/sleepiest https://www.merriam-webster.com/dictionary/sleepier ; thinner/thinnest https://www.merriam-webster.com/dictionary/thin ; redder/reddest https://www.merriam-webster.com/dictionary/redder ; shinier/shiniest https://www.merriam-webster.com/dictionary/shinier ; noisier/noisiest https://www.merriam-webster.com/dictionary/noisier ; flatter/flattest https://www.merriam-webster.com/dictionary/flattest ; slow as an adverb https://www.merriam-webster.com/dictionary/slow ; peaceful has no -er form https://www.merriam-webster.com/dictionary/peaceful
- Grammar rules: comparative compares two, superlative three or more, doubling the final consonant, y to i, more/most for longer words, irregular good/bad https://www.grammar-monster.com/lessons/comparatives_superlatives_from_adjectives.htm ; adverbs (fast, faster; carefully, more carefully; well, better, best; badly, worse, worst) https://www.grammar-monster.com/lessons/comparatives_superlatives_from_adverbs.htm ; double comparatives and double superlatives are errors, -ly adverbs take more https://www.grammarly.com/blog/grammar/double-comparatives-and-superlatives/
