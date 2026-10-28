
## First review (B8a lessons 5-8)

**Reviewer:** independent reviewer (did not author). Scope: `js/data/lessons/L-GUM4.js` lessons 5 (relative pronouns/adverbs), 6 (interjections), 7 (helping and linking verbs), 8 (frequently confused words), commit 2d521a1, files as on disk. Read-only; no lesson edits, no git, nothing marked ACCEPTED here beyond the verdicts below.
Scripts: `scratchpad/b8ar/` (blind.js, key.js, jac.js, hints.js, longest.js, leak.js, xnear.js, dd.js, ddj.js, dup.js, fk.js).

### Method and honesty notes
- **Blind solve: 120 of 120 agree (100%)** (4 lessons x 15 core + 15 twin; refs resolved). Items were printed by a Node script with seeded shuffles, passages with sentence numbers, no key/why/hints/how/clue. Answers saved in `b8ar/myans.txt` before keys were extracted (`key.js`, same seed) and compared. Not 100% blind: before solving I saw the first ~80 lines of the file (lesson 1) and the Teach intro of lesson 5 (lines 6055-6075); no item keys. The author log was read only after the answers were saved.
- Two answers I only reached by elimination, see L5 S13 (second key) and L7 C15.
- **Not done in this pass: browser verification at 390x844 with real taps.** Data-level checks only. Still outstanding for the coordinator or a second pass.
- Jaccard method: lower-case word tokens (apostrophe words kept) plus `(n)` sentence-number markers on hot-text targets; text = prompt, stem, text, choices/options/cols/rows/targets. Passages excluded (including them just measures the shared passage). My numbers run higher than the author's (0.208 max) because of the markers and tokenization.

### Cross-lesson checks
- **Twin vs core, ALL pairs, item text with markers.** Max set/multiset: L5 0.241/0.281 (C08xS08), L6 0.212/0.243, L7 0.230/0.301 (C08xS08), L8 0.216/0.242. Only L7 C08xS08 reaches 0.30 (multiset 0.301). Pairs over 0.21 listed per lesson below.
- **Core vs core.** Over 0.30: L5 P3xC04 0.333/0.303, P3xC12 0.370/0.400, P3xC14 0.345/0.255, P3xC15 0.314/0.326, C03xC09 0.337/0.390, C03xC11 0.301/0.320; L6 C05xC08 0.280/0.304; L8 C03xC07 0.345/0.333, C05xC09 0.286/0.341. L7 max 0.284/0.287 (pass).
- **Dropdown triplets (B8b pattern), core-core.** Same-frame dropdown trio L5 P3 / C04 / C12 (plus C15): P3xC04, P3xC12, P3xC15 all over 0.30 (C04xC12 under). P3 is a pre-existing ref, so the fix is on C04/C12/C15 (vary the frame). L8 pair C03xC07 over 0.30. No other dropdown core pair is over 0.30.
- **Dropdown whose key-filled sentence already appears in the passage shown (B8b pattern): none.** All 24 passage-based dropdowns checked case- and punctuation-sensitive: no key-filled sentence equals a passage sentence; every draft sentence still carries the error (the wrong word is among the options). (A first pass with case folding falsely flagged L6 C04/C12/S04/S12, whose only difference is the lower-case letter; those are fine.)
- **Hint 3 / live choices:** read all 120 ladders. No hint 3 names more than one wrong choice; none reveals the key; at least two live choices remain after hints 1-3 everywhere (tight: L8 C15 and S15 slots, L5 S15 slot 0).
- **Longest key:** no unique-longest key in any slot (28 tie-longest dropdown/mc slots only, all single words or equal length).
- **Giveaways:** leak.js (keys of 2+ words in any other item, hints, how, clue, Teach, Learn): none real (L6 hits were case-fold false positives: passage has the lower-case error). xnear.js: no corrected version of a draft sentence appears in any other item; each appears only in its own item. Key-position: choices are shuffled at run time, hot-text sentences stay in passage order (see SHOULDs on twin key positions).
- **Passages:** all 24 are 105-133 words, FK 1.6-4.1 (limit 4.5). Grade-3 content throughout; nothing kindergarten-like. Official wording (`standards.js` lines 948, 963, 978, 1004) matches each lesson's title and skill. Points/DOK: choose-two and two-slot dropdown = 2, ebsr = 2, match = 2; DOK labels reasonable.
- **Duplicates across js/data:** no duplicated item stems, choices, passages or hints. Exact matches are only generic prompts: "Choose the word that correctly completes the sentence." (L5 P3, pre-existing, also in L-GUM1/2/3/5, GRM sets), "Which word correctly completes the sentence?", "Which sentence is written correctly?" (L6 P4 ref), "Choose the words that complete the sentence." (T-T2), "Sentence 8 of the draft has a mistake. Choose the TWO revisions that fix it." (L5 C13 and an item in lessons 1-4), the shared ebsr preamble, and "What is wrong, and how can you fix it?" (Learn It). NOTE only.
- **Web (grammar claims):** `that` replacing `when` after time nouns is normal: https://perfectyourenglish.com/grammar/relative-adverbs-when-where-why.htm ("After common time expressions, when is often replaced by that"). Where follows a place noun and a relative adverb can be replaced by preposition + which: https://www.grammar-monster.com/glossary/relative_adverbs.htm . Interjection punctuation (! strong, comma mild; capital after !, lower case after comma): https://www.grammar-monster.com/lessons/interjections.htm (shown by example, not a quoted rule; I could not fetch a source that permits lower case after an interjection's "!", Chicago page redirected to a login). Author's other URLs (modals, perfect tense, its/it's, advice/advise) are consistent with what the items teach; I did not re-fetch them.

### Lesson 5: 3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs: **REVISE**
Blind 30/30. Keys unique except as noted.
- **MUST S02 (match that/when):** rows 2 and 4 ("the evening ___ we light the fire by the lake", "the hour ___ we eat lunch in the cafeteria") accept both `when` and `that` ("the evening that we light the fire", "the hour that we eat lunch"; source above). Two defensible keys. Fix: use time nouns whose clause cannot take `that` (or replace the `that` column word with `who`/`where`, or drop the time rows and use thing/place rows).
- **MUST S14 (mc):** the key ("...is very cold.") is the only choice without "today"; all three distractors end "...very cold today." The odd one out is the key. Fix: same ending on all four choices.
- **SHOULD C13 and S13 (second key):** C13 accepts "The bench where our bags sit"; S13 accepts "a puppy where it was sleeping". Teach says use where only after a place noun and that/which for things and animals, so a student following the lesson finds only one fix and must take the other by elimination. Fix: make the second repair "which" (Teach lists it) or build the second repair on a real place noun. This also fixes the next point.
- **SHOULD `which` is never a key** anywhere in 30 items although it is in the title and Teach point 2; `which` appears only as a wrong choice after a person noun. Use it as a key (C13 as above).
- **SHOULD C03 how:** step 3 says "A room is a thing" while the stem says a room is a place. Say "a room is a place, but 'has the moon rocks there' is not a whole sentence, so use that".
- **SHOULD twin clones on hot text:** C08xS08 0.241/0.281 (both show sentences 1,3,4,5,7 and key sentence 3), C05xS05 0.223/0.245 (both show 3,6,7,8,9, key 8), C04xS04 0.220, C07xS07 0.211, C15xS15 0.212, P3xS12 0.217 multiset. Change the shown sentence numbers and the key position in the twins.
- **SHOULD distinctness:** person-takes-who is tested by C04, C06, C08 (reverse), C12, S-matches in the same frame; P3/C04/C12/C15 dropdown overlap above 0.30 (see cross-lesson). Vary C12 (e.g. an animal/place frame) and C15.
- **NOTE:** distractors whose/whom/while/how (C07, C12, C15, S01, S15) are untaught; they are easy to discard, which thins S15 slot 0 to two live choices. Watch Me never models `when` (core uses it in 7 items). C09/S09 could also accept `who` for a pet (M-W); not offered, fine.

### Lesson 6: 3.L.GC.1:I:use-interjections: **ACCEPT** (with SHOULDs)
Blind 30/30. The author's two-key design (C03, C13, S03, S13) is sound; every dropdown fixing a draft pairs a lower-case error with a capital-only key so the key is unique.
- **SHOULD S09 key vs passage:** key says "a balloon floating off"; the draft (p4 s3) says the balloon "popped, and the string flew away". Change the key to match ("a balloon popping").
- **SHOULD twin key positions:** C08xS08 both key sentence 7 (and S05 shown set overlaps C08/C05, 0.243 multiset). Move the twin key to another sentence.
- **NOTE:** C14 and S14 keys share their sentence body with exactly one distractor (Eek!/Yum! snake; Ew!/Yay! slug), a mild test-wise cue. C05xC08 core multiset 0.304. Capital after "!" and small letter after a comma is taught by example in the cited source, but some style guides allow a lower-case word after an interjection's "!"; the lesson rule is stated in Teach, so keep it, and keep avoiding it as the only distinguishing feature (it currently is the sole distinguisher in C04/C12/S04/S12, C05/S05, C06/S06).
- Watch Me shows capital-after-! only; the comma-plus-small-letter variant (keys of C10, C13, S10, S13) is only in Teach. Optional.

### Lesson 7: 3.L.GC.1:I:use-helping-and-linking-verbs: **REVISE**
Blind 30/30.
- **MUST C08 x S08 (hot text):** set 0.230 / multiset 0.301 (at the 0.30 limit by my count). Both show sentences 2,6,7,9,10 with key 7 and the same prompt shape. Change the shown numbers, key position and prompt frame of S08 (same note for C04xS04: 0.204/0.256, both key sentence 3).
- **SHOULD C15 (dropdown pair):** "Last night, Mia should/can/will finish her homework" is grammatical for many readers; only `had finished` is keyed. Add a time word that rules out modals more firmly or make the key a clear single option. (S15 "Yesterday ... had painted" is fine.)
- **SHOULD C12 vs Teach:** Teach says forms of be can be helpers; distractors `is` (C12) and `am/are` (S12) as helpers before a past form are wrong for subject-verb and meaning reasons, which the how text covers, but the hint 3 ("Is built would tell what happens to something") draws on passive voice, which grade 3 has not met. Replace with an agreement hint.
- **NOTE:** Learn It never models is/are agreement (C07, C13, S07, S13 need it; Teach point 5 covers it). "Past form" wording for `has planted` (participle) is acceptable at this level. Core-vs-core max 0.284/0.287 passes.

### Lesson 8: 3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t: **ACCEPT** (with SHOULDs)
Blind 30/30; the hardest ambiguity (its/it's, advice/advise, to/too/two) was checked per item and each has one key.
- **SHOULD Learn It/Watch Me do not model what the fifteen require:** the three examples are to/too, your/you're, advise; none models there/their/they're (P4, C07, C10, C11, S01, S07, S10, S15) or its/it's (C05, C13, C15, S02, S05, S06, S11). Replace one example with their/they're or it's/its.
- **SHOULD twin wording drifts above grade 3:** twin item text FK 5.3 vs core 2.9 (e.g. S04/S08 "a writer broke a spelling rule for look-alike meanings; tap whichever sentence deserves correction", S06 "giving careful attention throughout", S11 "most accurately overall", S05 "contraction ... clause"). Plain wording keeps the Jaccard down just as well.
- **SHOULD core overlap:** C03xC07 0.345/0.333 (same dropdown frame, different word family) and C05xC09 0.286/0.341; vary C07's frame.
- **NOTE:** twin hot-text clones C04xS04 0.178/0.242 and C08xS08 0.172/0.237 both keep the key sentence number (5). Options `Its'`, `Their's`, `you'r` show non-words to learners (acceptable as never-correct distractors). S02 is `like` P5 but swaps the word pair (its/it's vs your/you're); mapping is honest at the skill level. C15 has exactly two live choices per slot after hints. S09's distractor "advise cannot be found in school writing" is not credible.

### Summary
| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 5 relative pronouns/adverbs | REVISE | 2 (S02, S14) | 5 |
| 6 interjections | ACCEPT | 0 | 2 (+notes) |
| 7 helping/linking verbs | REVISE | 1 (C08xS08 0.301) | 2 |
| 8 confused words | ACCEPT | 0 | 3 |
Verdicts are the reviewer's recommendation only; browser verification at 390x844 remains to be done.

## First review (B8a lessons 1-4)

Reviewer: independent (did not author). Commit 2d521a1, `js/data/lessons/L-GUM4.js` as on disk. Read-only; only this section was written. Verdicts are recommendations; I have not marked anything ACCEPTED.

### Method and blind solve
- `scratchpad/b8arev1/blind.js` loads the lessons in Node, resolves refs, prints passages (numbered), every core item and every twin with seeded-shuffled choices, plus `stem`. It strips key, why, hints, how, clue, like. The solve was fully blind: I did not open raw lesson source, the author log or STATUS keys before saving `myans1-4.json`. (I saw item structure only: field names via `keys.js`.)
- **Agreement: 120 of 120** (4 lessons x 30: 15 core incl. refs + 15 twins). `cmp.js` compares by text. Close calls: L3 C07 (`him`/`her` are non-live), L2 S13 (`slower` as adverb), L4 C12/S12 (`."` vs `".` only differ by order).
- Measurements, all scripted on the final file (`jac.js`, `longest.js`, `leak.js`, `leak3.js`, `ngram.js`, `dd.js`, `trip.js`, `dupall.js`):
  - Passages (own count, markers removed): 103-133 words, FK 0.9-4.3 (max L2 p3 4.30). All pass. L3 p4/p5 (1.1/1.2) and L4 p2 (0.9) read very low; dialogue-heavy, content is grade 3.
  - Longest key: only L4 P3 (ms, both keys longer than every distractor, 45/39 vs 36, reused item). Ties only elsewhere.
  - Duplicates across all `js/data`: no content duplicates; only boilerplate prompts ("This question has two parts"). Inside L-GUM4: L1 P3/T3 and L3 C10/T4 share a prompt frame with a test item (keys differ); L1 C12 and L2 C12 share the prompt "Sentence 6 of the draft has a mistake..." (different lessons).
  - Filled-sentence leak scan (key sentence printed in any other item, hint, how, why, Teach, Learn, passage): none. **B8b pattern (dropdown whose filled key sentence already appears correct in the passage shown): none.** No dropdown key equals a passage sentence (case-sensitive). The draft word is an option in 11 of 21 dropdowns with passages; the rest use a draft word that is not offered (fine). L3 S06 text repeats passage sentence 1 as context only.
  - Hint 3 names at most one wrong choice everywhere I checked; >=2 live choices after hints 1-3 on every item (L3 C07/C12 have only one plausible non-key left, see NOTE).
- Browser, 390x844, touch, browse mode, `scratchpad/b8arev1/run390.py`: all 30 items per lesson (core sets y/y2/y3 plus each twin via "Try a similar question") answered with real taps/selects after three hint clicks: **120/120 "That's right"**, scrollWidth 390, all targets >=40 px, no JS errors. L4 S07 renders as tap-buttons (long options) not a select; works.

### Overlap table (my tokenization, counts "(n)" markers; prompt, stem, text, options, rows, cols, ebsr parts, targeted sentences)
| Lesson | twin x core max set / multiset (item) | pairs >0.21 | with passages max | core x core >0.30 |
|---|---|---|---|---|
| 1 | 0.200 / 0.228 | C06xS06 .228m, C11xS11 .217m | .206 / .230 | C04xC12 .486, P5xC15 .343 (set) |
| 2 | 0.229 / 0.223 | C03xS03 .229s, C04xS04 .223m | .246 / .264 | C03xC06 .429, C06xC12 .381, C03xC12 .349, P5xC08 .351 |
| 3 | 0.222 / 0.218 | C15xS14 .222, C08xS07 .212m | .252 / .295 | C07xC12 .390/.435, C09xC16 .364m |
| 4 | 0.220 / 0.207 | C05xS08 .220s | .225 / .248 | none (C03xC09 .300 exactly) |
No twin x core pair reaches 0.30 in any lesson. The author log's L1 figure (0.208/0.207) differs from mine; I could not reproduce it with the marker-counting tokenizer.

### Lesson 1: Prepositional phrases (3.L.GC.1:C:form-and-use-prepositional-phrases)
Verdict: **CHANGES REQUIRED**.
- MUST
  - **C04 and C12 are the same item twice** (core-core 0.486 set / 0.487 multiset): identical prompt "Sentence N of the draft has a mistake. Choose the word that fixes it.", one slot, a preposition chosen by whether the noun is an event or a thing. Plan 6.1 fails (same frame, same key logic) and 0.30 is exceeded. S04/S12 repeat it again as twins. Fix: change C12 to another task (for example choose-two revisions, or a hot-text "which sentence has a preposition that does not fit"), or at least a different frame and a different error type (a place preposition with the wrong direction word).
- SHOULD
  - P5 x C15 core-core 0.343 (set): both "one phrase tells X" frames; vary C15's frame.
  - Twin x core item-only multiset over 0.21: C06xS06 0.228 and C11xS11 0.217 (shared "Among sentences... select ... shown sentences that have..." wording). Reword the S06/S11 prompts.
  - Learn It/Watch Me never model **choosing the preposition that fits the noun** (C04, C08, C12 plus S04, S08, S12). Add one Watch Me or a Teach point showing a bad preposition repaired.
  - S05 distractors are weak or silly: "Sunset is a feeling", "Sunset is a hill behind the house". S07 Part B ("A gym is a building that students can walk to") does not really prove location; Part B distractors are all loose definitions. Rewrite so each is a tempting misreading.
  - S08 slot 0: `since`/`until` before "the basket" are both ungrammatical at a glance; keep one more plausible spatial distractor (e.g. `toward`/`along`) so the choice is not only time words.
- NOTE
  - C03 and S03 `why` lack a full stop after the quoted answer ("The answer is "about dragons" About is...").
  - C03 H2 ("the small word that links the book to more information") and S03 H2 ("shows direction") almost name the preposition; acceptable but close.
  - Grammar claims: since/until/by/toward/inside/near as prepositions per the author's Merriam-Webster links; I did not re-fetch them. Retell: C05/S05/S10 correctly rest on "the noun decides".
  - C13 true statements (both end with a noun; both tell where) are the only true pair; `Suddenly` and different prepositions are correctly false.
  - Twin S10 and P3/T3: test T3 shares the P3 prompt (rows differ).

### Lesson 2: Comparing words (3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti)
Verdict: **CHANGES REQUIRED**.
- MUST
  - **C03, C06 and C12 are a same-frame dropdown triplet** (core-core 0.429, 0.381, 0.349 set; multiset 0.388/0.333/0.373): the same prompt "Sentence N of the draft has a mistake. Choose the word that fixes it.", single slot, the child repairs one comparing word; the three differ only by the word. P5 x C08 also 0.351. Fix: keep one in this frame; turn another into a hot-text/ms or ebsr that targets a different skill (for example the y-to-i spelling in C06 as a "which spelling" ms, which C07 already does, so C06 should be replaced by a "two sentences compare correctly" or an explain item).
  - **S09 hint 2 states the key action**: "Say the phrase without the first part and decide whether the meaning is still complete" = remove `most`; with H1 ("whether either part repeats the work of the other") a reader without the choices writes the key ("the extra word most can go"). Fails the ladder audit. Reword H1/H2 to strategy and location only (find the word that already ends in -est; ask whether it still needs help).
- SHOULD
  - C09 H1/H2 ("what each part does on its own", "whether hardest needs any help") lead to the same key; soften. C06 H2 and S06 H2 ("two jobs that do the same thing") announce the error type for the draft word.
  - Learn It/Watch Me do not model the **spelling changes** (y to i, doubling) tested by C06, C07, C14 and S06, S07, S14 (six of thirty), though Teach states them. Add a Watch Me with `funny/funnier` or `big/bigger`.
  - Watch Me 3 ("Mia answers the phone ___ than her brother does") shares frame and key logic with C08 and S08 ("Rosa writes ___ than her brother"). Change the Watch Me frame.
  - **S13 key `slower` for the adverb slow**: Merriam-Webster's *slow* adverb entry only cross-references *slowly* (https://www.merriam-webster.com/dictionary/slow) and Teach names only `fast` as a short adverb. Native usage accepts `slower`, but a strict reader has two defensible forms in one key and the distractor set cannot discriminate. Use a taught flat adverb (fast, hard, late: https://www.ef.com/wwen/english-resources/english-grammar/comparative-and-superlative-adverbs/ confirms -ly adverbs take more/most and short adverbs such as fast, hard, late take -er/-est) or drop the `-er` option.
  - S15 wrong options carry absolutes ("always", "at all, ever", "right onto its last letter by the writer, always"), a test-wise cue. Also S15 option C ("Clearly has only one syllable") is false for a trivial reason.
  - Twin x core item-only over 0.21: C03xS03 0.229, C04xS04 0.223; C05xS05 and others over 0.21 with passage text. Reword S03/S04 prompts and sentence stems.
  - S09 distractors (spelling "second g", "plane glided so far") are weak; S11 option D ("worse adds -er and worst adds most") is not a believable misreading.
- NOTE
  - C03 H1 ("the little word right after the blank") is a location pointer in hint 1.
  - C08/S08 depend on `the most neatly of all`; acceptable, the plain adverb superlative takes "the" optionally.
  - C15 `why` repeats its first sentence verbatim.
  - C13 keys (faster, more quickly) are both valid; `faster` is the taught flat adverb.

### Lesson 3: Pronouns that match their nouns (3.L.GC.1:C:ensure-pronoun-antecedent-agreement)
Verdict: **CHANGES REQUIRED**.
- MUST
  - **C07 x C12 core-core 0.390 set / 0.435 multiset**: both "find the noun the blank stands for, pick the matching pronoun" single-slot dropdowns with the same hint pattern ("one thing" vs "one woman"), and S06/S11 repeat them. Plus C04 uses the same dropdown frame. That is three same-frame dropdowns plus P5-style match. Change C12 to a different task (ms or explain) or change the key logic (noun swap instead of pronoun swap, which Teach does not model either, see SHOULD).
  - **S14 hint 3 is wrong for the item**: "Hers shows who owns something, and the fence does not belong to a woman in this sentence." In the stem the fence belongs to Mrs. Webb and her daughter, and blank 1's key is `their fence`. Replace with "Hers is for one woman, and this blank stands for the fence, a thing."
- SHOULD
  - C09 x C16 multiset 0.364 (set 0.297); change C16's stem frame.
  - `theirs`/`hers`/`it's` used as distractors (C04, C15, S01, S03, S14) and H3 states "an ownership word that can stand alone never comes right before a noun". That rule is never taught (Teach covers `its` vs `it's` only). Add one Teach line or use only taught distractors.
  - C13/S12 (a fix may change the noun or the pronoun) rely on a move that neither Teach nor Learn It models; add a Watch Me or one Teach sentence.
  - S07 prompt ("an owner or doer word", long lead-in "full of freshly baked treats") reads above grade 3 and is wordy; S08 options are padded ("whatever else is true", "might turn out to be women"), S15 option B is oddly worded. Simplify.
  - C09 H1 and H2 ("how many, or boy or girl") narrow strongly to the key concept; acceptable but keep H2 location-only.
  - Twin x core item-only multiset C08xS07 0.212, C15xS14 0.222 (>0.21). With passages C07xS06 multiset 0.295 (close to 0.30).
- NOTE
  - Drafts contain untested pronoun errors (p1 s2 "Mrs. Pratt put on his glasses", p3 s5 "their light"); hot-text lists exclude them, so no giveaway, but a child may wonder.
  - C07: `him`/`her` are not plausible after H1-H3; only `it`/`them` are live. C12 likewise (`it`).
  - C03/S02 `why` lack a full stop after the quoted noun phrase.
  - L3 C10 shares its prompt with test T4 (different sentences).
  - C15 `its` and `their` are both required; `it's` correctly dismissed in H3.

### Lesson 4: Punctuating what people say (3.L.GC.1:C:use-conventional-capitalization-quotation-marks-)
Verdict: **CHANGES REQUIRED**.
- MUST
  - **C06 hint 2 and S06 hint 2 give the Part B key**: "what divides the name of the person talking from what that person says" = a comma. H1 for Part A also directs the child to "what each choice puts after said", which is the one difference. A reader without the options writes the Part B key. Rewrite H1 as strategy ("check the capital letter, the marks inside the quotes and what follows the speaker") and H2 as a location ("read the words right after said").
- SHOULD
  - C07/S07 H2 and S15 H2 ("how loudly the coach speaks... how calmly Kira replies") hand over the end marks. Keep H2 to where to look.
  - S11 reuses the Teach example's quote and verb ("Wait for me!" shouted Theo / "Wait for me!" shouted Mia). Change the quote.
  - Twin wording drifts above grade 3 and padding appears: S06 Part B ("for any reader who looks at this page today", "right here today"), S09, S11, S12 ("snug against the final quote mark", "beyond the last quote mark", "remark", "word-for-word"), S03. Core uses plain wording; twins should match it.
  - P3 (reused): both keys are the two longest options. Add a long distractor or shorten the keys. P3 prompt uses lowercase "two" (other items say TWO).
  - C03/S03 (set 1) tell the child that sentence 8 is correctly punctuated, so C05's list (S05's list) loses one distractor; move the retelling item to set 2 or drop sentence 8 from C05/S05.
  - Twin x core: C05xS08 0.220 set (item only), C08xS08 0.248 multiset with passage; shared "puts a mark outside the closing marks" frame. Reword S08.
  - C03 x C09 core-core set 0.300 (at the ceiling); keep them apart.
- NOTE
  - C12/S12 options are bare punctuation (`."`, `".`); legible at 390 px but tiny for a child; consider showing the full ending.
  - Indirect quotation (C03, S03) is covered in Teach point 4; grade-3 fit is fine.
  - Rules verified: commas and periods go inside closing quotation marks (https://courses.lumenlearning.com/suny-newpaltz-engcomp1/chapter/quotation-marks-with-other-marks-of-punctuation/); a question mark replaces the comma before a speaker tag (https://www.grammarly.com/blog/punctuation-capitalization/comma-after-question-mark).
  - C05 H3 repeats what C03 already settled.
  - Hot-text drafts contain untested errors (p4 s10 `"Thank you, Mr. Hale".`); excluded from lists.

### Summary
| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 1 prepositional phrases | CHANGES REQUIRED | 1 (C04/C12 duplicate) | 5 |
| 2 comparing words | CHANGES REQUIRED | 2 (C03/C06/C12 triplet; S09 H2) | 7 |
| 3 pronoun agreement | CHANGES REQUIRED | 2 (C07/C12; S14 H3) | 7 |
| 4 quotation marks | CHANGES REQUIRED | 1 (C06/S06 H2 key) | 7 |
Blind agreement 120/120; browser 120/120 with taps; no passage, FK, leak or duplicate failures. All MUSTs are item-design or hint fixes, no key is wrong.

### Browser verification addendum (B8a lessons 5-8, first review)
- **Setup:** Playwright Chromium, viewport 390x844, touch-emulated mobile context, browse-mode fixture (`pp.path.v1` mode browse), served by `node verification/serve.js . 8831` from the worktree. Route `#play/SK:<code>:y|y2|y3/try` (the three core sets); each core item answered with its key, Check pressed, feedback read; each twin reached through the "Try a similar question" button and answered the same way. Scripts: `scratchpad/b8ar/run390.py`, `run390d.py`; logs `run390.txt`, `run390d.txt`.
- **Result: 120 of 120 items take the key** (60 core + 60 twin across the four lessons; feedback "That's right"). No page errors (pageerror) in any lesson. No horizontal overflow (document scrollWidth 390 on every item). No tap target under 40 px high or past the right edge among choices, hot-text options, match buttons and selects. Every core item showed the similar-question button after checking.
- **Hint button:** three presses on each item exercise all three hints; after the third the button reads "No more hints" and is disabled on all items.
- **Harness note, not a lesson fault:** a dropdown whose longest option is over 28 characters renders as a button list under the sentence, not a select (`items.js`, by design). L6 C04, C12, S04, S12 and L7 C03, S03 are of this kind; my first run only handled selects and reported them as "Check disabled". After teaching the harness to tap the buttons, all six pass.
- **Limits:** taps were Playwright clicks in a touch-emulated context (not `touchscreen.tap`); keys were applied from the data, so this confirms that the key is accepted and the layout holds, not wrong-answer feedback or the full hint wording. Wrong-choice feedback was not exercised.
- **Verdicts after the browser run:** lesson 6 ACCEPT holds; lesson 8 ACCEPT holds (no browser finding changes either; the SHOULD items above stand). Lesson 5 and lesson 7 remain REVISE on the data findings (the browser run found nothing new for them).

## Second review (B8a lessons 1-4)

Reviewer: independent second reviewer (did not author, not the first reviewer). Commit 3ce5e3d, `js/data/lessons/L-GUM4.js` as on disk. Read-only; only this section was written. Verdicts are recommendations; nothing is marked ACCEPTED here.

### Method and blind solve
- `scratchpad/b8arev2/blind.js` loads the file in Node, resolves refs, prints numbered passages, `stem` and every core and twin item (120 items: 4 x 15 core incl. refs, 4 x 15 twins) with seeded-shuffled choices (seed 20261035) and the shuffle recorded; it strips key, answer, why, clue, hints, how, misconception, like. I saved my answers (`myans.SAVED.js`) before opening the keys, hints, `how` or the first review. Only item field names were printed earlier, plus the first two core refs. The solve was fully blind.
- **Agreement: 118 of 120 (98.3%).** Both misses were my own reading slips, not content faults: L2 C15 (I chose "should use more", which contradicts the stem that already says "most gracefully"; the key is the -ly/long-word option) and L3 C07 (I picked `them`, the draft's wrong word, instead of the repair `it`). I judged both after seeing the keys and agree the keys are the only defensible answer. Comparison used the key text, so hot-text refs matched exactly (16 apparent mismatches were only my script printing the sentence after the ref).
- Close calls on solve: L1 S12 (`before` and `during the last relay` are both sensible, and the key is exactly those two), L4 C12/S12 (`."` vs `".` differ only in order; the dropdown shows the whole ending).

### Scripted measurements (final file)
- **Twin x core, item text with "(n)" markers and targeted sentences (set / multiset), item only:** L1 0.200 / 0.200, L2 0.204 / 0.189, L3 0.208 / 0.203, L4 0.200 / 0.206. **No pair is above 0.21 on either measure.** With the whole passage text appended (inflated by the shared draft): L1 0.202 / 0.230, L2 0.225 / 0.244, L3 0.252 / 0.295 (C07 x S06 multiset), L4 0.229 / 0.252. None reaches 0.30. (`jac.js`)
- **Core x core, item only (set / multiset):** L1 0.277 (C04xC12) / 0.255, L2 0.290 (C09xC15) / 0.258, L3 0.286 (C04xC13) / 0.232, L4 0.247 (C03xC09) / 0.267. All at or under 0.30; L2 C09xC15 is the closest to the ceiling. (With shared passage text core pairs read 0.6-0.9; that is the draft, not item overlap.)
- **Passages (markers removed):** 103-123 words in L1-L4 (min 103: L1 p2, L3 p3), FK 0.9-4.30 (L2 p3 4.30 is the max). All pass. `readability.py` agrees (113-134 words with markers, max 4.3). L3 p4/p5 (1.1/1.2) and L4 p2 (0.9) read very low but the content is grade 3.
- **Longest key:** no single key is strictly the longest in any mc, ebsr part or dropdown slot; ms items have at most one key above the longest distractor (L1 C12, S09, S13; L2 S13; L3 C13, S12; L4 S10), by 1-4 characters. L4 P3 (reported last time) no longer shows it. Ties only on short options.
- **Points and DOK:** every item's points equal its keyed count (choose-two = 2, ebsr = 2, match = 2, dropdown = slots); no missing DOK. Sets of five are 6-9 points.
- **Leak scan (key sentence or option printed in any other item, hint, how, why, Teach, Learn, passage):** none inside L1-L4. **Dropdown whose filled key sentence already reads correct in the passage:** none (`dd.js`; the wrong draft word is offered as an option in L1 C04, L2 C06, S06, L3 C07, L4 C04, C07, C12, S04, S07, S12, and the filled key never equals a passage sentence). Hot-text prompts that list sentence numbers match their five targets in every item **except L4 C05** (see MUST).
- **Duplicate scan over all js/data** (`dupall.js`, `xdup.js`): only boilerplate prompts ("This question has two parts...", "Choose the words that correctly complete the sentence.", "Which revision of sentence 2 fixes the mistake?") repeat elsewhere. Item-level nearest neighbour in other lessons/sets/tasks (3,913 items): highest Jaccard 0.500, L1 C06 vs SK-GUM1-3-C06 (same hot-text lead "Among sentences ... select the TWO shown sentences", a different standard, passage and key). No content duplicate.
- **Grade 3 and standards:** official wordings (`standards.js` lines 860-930) cover adverbs in the comparative standard and "capitalization, quotation marks, and commas" in the dialogue standard, so the adverb items (L2 C08, C13, C15, S08, S13, S15) and the capital-letter/comma items are in scope. Vocabulary is grade 3 except "trio" (L2 S14 stem) and twin phrasing noted below.
- **Facts / URLs:** quotation punctuation (commas and periods inside the closing marks; ? and ! inside when part of the quote, no comma after them; indirect speech takes no marks): https://courses.lumenlearning.com/suny-newpaltz-engcomp1/chapter/quotation-marks-with-other-marks-of-punctuation/ and https://www.authorlearningcenter.com/writing/fiction/w/character-development/6491/8-essential-rules-for-punctuating-dialogue. Adverb comparison (-ly adverbs take more/most; short adverbs like fast, hard, late take -er/-est): https://www.ef.com/wwen/english-resources/english-grammar/comparative-and-superlative-adverbs/ and https://nos-langues.canada.ca/writing-tips-plus/adverb-comparison. Prepositions since/until/by/toward/inside/near: first review cited Merriam-Webster; I did not re-fetch.
- **Browser, 390x844, touch-emulated, browse mode, real `tap`** (`run390.py`, `run_s07e.py`, server on 8841, then stopped): three core sets per lesson via `#play/SK:<code>:y|y2|y3/try`, each item with all three hints pressed then answered with the key, plus each twin through "Try a similar question". **120 of 120 accepted ("That's right")**, document scrollWidth 390 on every item, no choice, hot-text, match button or select under 40 px or past the right edge, no `pageerror` in any lesson, hint button reads "No more hints" and is disabled after three presses on every item. The one dropdown with an option over 28 characters, **L4 S07** (longest option 39), renders as tap-buttons under the sentence (`aria-label="Blank 1"`); a tap selects it, Check enables, key accepted. My first pass reported S07 "Check disabled" because the harness copy had lost the button fallback; fixed and re-run, not a lesson fault. Limits: the answer path used the data key (wrong-answer feedback was not exercised) and a real child's finger was not used.

### Verification of the first review's MUST and SHOULD items
| Item | First review | On disk now (re-measured) | Status |
|---|---|---|---|
| L1 C04 / C12 duplicate frame | MUST, 0.486 | C12 is now a choose-two ("Choose the TWO replacements", stem with sentence 6, place words that fit a rock); C04 stays a one-blank time fix. Core-core 0.277 / 0.255. Different format and a different live answer set | Fixed |
| L2 C03 / C06 / C12 triplet | MUST, 0.429 / 0.381 / 0.349 | C03 mc revisions (tall to taller), C06 one-blank y-to-i spelling, C12 choose-two with a stem (worse/worst, "most terrible"). Core-core max in the lesson 0.290 (C09xC15, not the triplet) | Fixed |
| L2 S09 hint 2 | MUST | H1 "think about what its ending already does", H2 "ask whether that word still needs any help". The reviewer's own suggested wording; still leans toward the key (see SHOULD) | Fixed, close |
| L3 C07 / C12 | MUST, 0.390 / 0.435 | C12 is now an mc of whole-sentence revisions (Grandma to she). Core-core C07xC12 no longer above 0.30 (lesson max 0.286). Still a one-pronoun repair like C04 and C07 (see SHOULD) | Fixed by the numbers, thin on variety |
| L3 S14 hint 3 | MUST | Now "Hers is for one woman, and this blank stands for the fence, which is a thing." Correct for the item | Fixed |
| L4 C06 / S06 hint 2 | MUST | H1 now "compare the choices letter by letter and mark by mark"; H2 "think about what the fix in Part A adds, and look for the fact about it". No longer says "what divides the name from the words". Acceptable | Fixed |
| L1 Watch Me: preposition to noun | SHOULD | Watch Me 3 ("The shop stays open ___ nine o'clock", until/under/beside) models it, and S05/S07 distractors and Part B were rewritten | Fixed |
| L2 Watch Me: y-to-i / doubling | SHOULD | Watch Me 3 (happier) models y to i; doubling is only stated in step 3 ("like big and bigger"), not modeled. Frame no longer shares C08/S08. | Mostly fixed (NOTE) |
| L3 theirs/hers untaught; noun swap unmodeled | SHOULD | Teach now has the stand-alone ownership words (mine, hers, ours, theirs) and "you can change either one"; Watch Me 1 models the noun/pronoun swap | Fixed |
| L4 twin wording; S11 Teach quote | SHOULD | S06 Part B, S09, S11, S12 simplified; S11 now uses "We found the cave!" (Teach keeps "Wait for me!") | Fixed, two leftovers (SHOULD) |
| L2 S13 "slower" | SHOULD | S13 keys are now `faster` and `more quickly` (taught flat adverb plus an -ly adverb) | Fixed |
| L1 S08 slot 0 spatial distractor | SHOULD | Still `near / since / until` | Not fixed (SHOULD) |
| L4 P3 both keys longest; "two" lowercase | SHOULD | Longest fixed; prompt still says "Which two sentences" | Half fixed (NOTE) |
| L4 C03 vs C05 sentence 8 | SHOULD | C05 now shows sentence 10 instead of 8, but the prompt was not updated (see MUST) | Regression |

### Lesson 1: Prepositional phrases
Verdict: **ACCEPT** (no MUST). 
- MUST: none.
- SHOULD
  - S08 slot 0 offers `near` against `since` and `until` before "the basket". Both distractors are time words that are ungrammatical at a glance; add a place word such as `toward` (slot 1 already does this) so the blank is not solved by "is it a time word".
  - C12 H3 and S12 H3 each name one wrong choice (fine) but S12 H2 ("whether a relay is a spot or something that happens") plus its answer set leave the child choosing between two time words and three place words; it is fine, but H2 is nearly the key's reason. Consider "name the last word of each swap".
- NOTE
  - S03 H2 ("the small word that shows direction") and C03 H2 ("links the book to more information") point at the preposition; acceptable for hint 2.
  - C11/S11 `why` repeat the whole sentence as its own subject ("The creek sparkled, and I felt happy and a little sleepy has no preposition followed by a noun"); readable but clumsy.
  - Hot-text lead "Among sentences ... select the TWO shown sentences" matches SK-GUM1-3-C06 (different standard, passage and key); not a duplicate.
  - All 30 blind answers matched the keys; hint 3 names at most one wrong choice everywhere and at least two live choices remain after hints 1-3 (C04: After and Beside; S04: Before and Inside; C08 slot 0: under and during).

### Lesson 2: Comparing words
Verdict: **ACCEPT** (no MUST).
- MUST: none.
- SHOULD
  - C15 H1 and H2 hand over the key: "think about its size and its last two letters", "the size and the ending of the word that tells how" = "a long word that ends in -ly". Soften to a location ("look at the word right after the"), as S15 H1 ("how many syllables... what letters finish it") has the same shape.
  - S09 H1 plus H2 still lead a reader to the key without the options ("what its ending already does", "still needs any help"). It meets the first review's suggested wording, but a stricter ladder would give H1 as strategy only ("find the comparing word and look at how it ends") and H2 as the location ("the phrase right before flight").
  - C09 x C15 (0.290, closest pair to the ceiling) share the "A classmate says ... What is the best response?" frame and a "which word is wrong, and why" key logic. Vary one stem (for example a statement-evaluation or a "who is right" frame).
  - Watch Me: doubling (big/bigger, thin/thinner, wet/wettest) is stated but not modeled, and it is tested in C07, S06, S07. Replace the step-3 sentence with a worked mini-example, or add a fourth Watch Me.
- NOTE
  - C15 `why` repeats its first sentence verbatim ("Gracefully is a long word that ends in -ly, so it uses most instead of -est").
  - C09 H2 ("look at the ending on its last word") is close to the key but still a location.
  - S14 stem uses "trio"; replace with "three kittens" for grade 3.
  - C13 keys (faster, more quickly) and S13 keys are both valid; `more fast` and `fastly` are correctly wrong.
  - All 30 blind answers matched except my own C15 slip; hint 3 names at most one wrong choice everywhere; Teach point four now states -ly adverbs take more/most.

### Lesson 3: Pronouns that match their nouns
Verdict: **ACCEPT** (no MUST).
- MUST: none.
- SHOULD
  - C04 (dropdown, plural `their`), C07 (dropdown, `it`) and C12 (mc, `she`) are still the same task: find the noun the blank/pronoun stands for, choose the matching pronoun for a single repair. The numbers pass (max 0.286) and the formats differ, but a child meets three one-pronoun repairs plus C06 in the same 15. Swap one for a different move, for example "which noun does the pronoun in sentence 6 stand for" in the hot-text list or an explain item.
  - S11 distractor B alone carries an extra word ("he **quickly** filled it..."); the other three are word-for-word the key frame. Remove "quickly" so the distractors are parallel.
  - S08 options are padded ("our, because the writer was standing nearby, watching them load chairs", "hers, because both workers might turn out to be women"); S04's prompt is a 30-word sentence ("Five lines from a classmate's painting class account are shown, and one of them holds a replacement word that clashes with whatever it stands for"). Simplify both to the core item voice.
- NOTE
  - S05 Part B distractor "Great describes the replacement, and a replacement for a person is needed" is odd; a more tempting misreading is "Families comes last, so it takes her".
  - Drafts still carry untested errors (p1 sentence 2 "his glasses", p3 sentence 5 "their light", p4 sentence 6 "she picked them up"); the hot-text lists exclude them, so no giveaway.
  - C07 H3 names `her` (one wrong choice); `him`, `them` and `it` stay live after hints 1-3. C15 slot 0 keeps three live (their, theirs, its).
  - `its` and `their` both required in C15/S14, and S14 hint 3 is now correct.
  - All 30 blind answers matched except my own C07 slip.

### Lesson 4: Punctuating what people say
Verdict: **REVISE** (two MUSTs, both small).
- MUST
  - **C05 prompt names the wrong sentence.** The prompt reads "From sentences 2, 4, 6, 7 and 8, select the ONE that is punctuated incorrectly," but the fifth shown option is sentence **10** ("(10) We all clapped when Biscuit finally ran on the squeaky wheel", `p1:3:3`); `H3` and `how` already say sentence 10. The browser render shows "(2) ... (4) ... (6) ... (7) ... (10) ...". Evidence: `numchk.js` compares every listed number with its targets and flags only this item. Fix: change "8" to "10" in the prompt. (The edit was meant to take sentence 8, the retelling line settled by C03 in the same set, out of the list; it is the right change, the prompt just was not updated.)
  - **C04 hint 3 states a false rule and contradicts Teach.** "A comma after the question mark is only needed when the speaker comes last, and Tess comes first." A comma is never used after a question mark or exclamation point inside the quote (Teach points 3 and 5: "with no comma"; C10, C13, S10, S13 hint 3s say the same correctly). A child who trusts the hint would conclude that C14 `"Is that a hawk?," asked Dad.` is right. Fix: "Tess comes first, and a question mark already ends her words, so no comma follows it."
- SHOULD
  - C09 H1 ("what must divide the words someone says from the name of the person saying them when that name is last") plus H2 ("is there a question mark or an exclamation point there?") give the key's rule (a comma, because nothing else ends the words) to a reader without the options. This is the same pattern the first review marked MUST for C06 H2; softer wording is needed. S09 H1/H2 repeat it. Suggest H1: "Read the end of the spoken words and the name that follows them"; H2: "Look at the last mark before the closing quotation marks."
  - S09 wrong options carry absolutes and padding ("never part of anything a person says aloud, ever", "again and again"), a test-wise cue next to a key without them. Rewrite as plain, parallel statements.
  - S08 prompt ("whose punctuation lands beyond the last quote when it belongs ahead of it") is above grade 3; S14 is the plain model ("placed properly").
  - P3 prompt says "Which two sentences" (other items use TWO); reused item, one-word fix.
- NOTE
  - C12/S12 options are bare marks (`."`, `".`); legible at 390 px and the sentence stem shows the words, but small for a child.
  - C06 H2 and S06 H2 still point to "what the fix adds" (a mark); acceptable as a location pointer.
  - Watch Me models comma-first, comma-inside when the speaker comes last, and ! inside; retelling (C03, S03, DOK 3) and `?` with a last-position speaker are in Teach only.
  - Hot-text drafts keep untested errors (p4 sentence 10 `"Thank you, Mr. Hale".`); excluded from lists.
  - All 30 blind answers matched; hint 3 names at most one wrong choice everywhere checked; at least two live after hints 1-3 (C12: `",` and `"` and `.` stay live).

### Summary
| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 1 prepositional phrases | ACCEPT | 0 | 2 |
| 2 comparing words | ACCEPT | 0 | 4 |
| 3 pronoun agreement | ACCEPT | 0 | 3 |
| 4 quotation marks | REVISE | 2 (C05 prompt "8" should be "10"; C04 hint 3 false rule) | 4 |
Blind agreement 118/120 (two solver slips, not content faults). Browser 120/120 with taps at 390x844 once the harness fallback for the button-style dropdown (L4 S07) was in place. All first-review MUSTs are fixed on disk; L4 gained one regression (C05 prompt) and one older hint fault (C04 H3). Ready for a final check after the two L4 fixes; lessons 1-3 need no further change to be accepted.

## Second review (B8a lessons 5 and 7)

**Reviewer:** independent reviewer (did not author). Scope: `js/data/lessons/L-GUM4.js` lesson 5 (relative pronouns/adverbs) and lesson 7 (helping and linking verbs), branch content/standards-practice, file as on disk (mtime 2026-10-28 10:34). Read-only; no lesson edits, no git, nothing marked ACCEPTED here (verdicts are recommendations).
Scripts: `scratchpad/b8rev2-l57/` (blind.js, myans.json, keys.js, jacm.js, chk.js, leak2.js/leak3.js, dup.js, full.js, fkitems.js, run390.py, probe.py). Note: a second reviewer was writing into the sibling folder `scratchpad/b8arev2/` at the same time and overwrote some of its files, so every number below was re-run from my own copies in `b8rev2-l57/`.

### Method and honesty notes
- **Blind solve (fresh seed 7311+13*lesson): 60 of 60 agree (100%).** 30 items per lesson (15 core with refs resolved, 15 twins). A Node script loaded the lesson, deleted correct/answer/why/clue/hints/how/misconception/like/std/dok, shuffled choices, slots, rows and targets with a seeded generator, and printed passages with sentence numbers. Answers were saved to `myans.json` before keys were extracted (`keys.js`) and compared by row text/choice text (match rows are shuffled, so I compared by text). Not 100% blind in two small ways: I had read the brief, and I saw the lesson file's size and first lines while locating the loader; I did not see any L5/L7 item source, key, hint or the author log before saving answers. I read the first review and author log only after that.
- Two solves needed more care: L5 C13/S13 (two keys: `that` and `which`, both reached because the other three choices are clearly wrong) and L7 C15 (`had finished`; I rejected `should finish` on "so she was free to play").
- **Jaccard method** matches the first review (my L7 core-core max 0.284/0.287 for C05xC11 is identical to its figure): lower-case tokens, apostrophes kept, text = prompt, stem, text, choices/options/cols/rows and, for hot text, the full shown sentences (so the "(n)" markers and digits are counted), passages excluded. Set / multiset (n).
- **Browser: 60 of 60 plays pass at 390x844** (touch, mobile emulation, fresh browser, own server on port 8893 from this worktree). For each lesson: three parts, five core items each, three hints requested on every item (button ends at "No more hints"), key answered with real clicks (dropdown options over 28 characters answered as buttons: L7 C03/S03 render four button choices and no `<select>`; short dropdowns render `<select>`), Check, "That's right" feedback read, then the item's twin reached through "Try a similar question" and answered the same way. 0 problems, 0 JS errors, scrollWidth 390 on every screen, no tap target under 40px high or past the viewport edge. Note: my first run went to the wrong port (another agent's server) and was discarded; the result above is the rerun on my own server.

### Measurements on the final file
| Check | L5 | L7 |
|---|---|---|
| Twin vs core, ALL 15x15 pairs, set / multiset (n) | max 0.206 / 0.208 (S09xC03, S04xP3) | max 0.200 / 0.192 (S01xC11, S06xC06) |
| Pairs over 0.21 | none | none |
| Core vs core (15x15, refs included) | max 0.277 (P3xC15 multiset), P3xC12 0.258, C03xC09 0.252 | max 0.287 (C05xC11), C05xC09 0.273 |
| Passages (words excl. markers / FK, readability.py) | 107-131 / 2.0-4.1 (p1 FK 4.1, p5 3.8) | 112-131 / 2.1-3.7 |
| Unique longest key | S10 (ms, 75 chars vs 67 next; see SHOULD); S11 longest by words only | none (P5 legacy ref: key "Ms. Hall is our music teacher." is longest, pre-existing) |
| Hint 3 names at most one wrong choice | yes, all 30 | yes, all 30 |
| Hint 3 gives away the key | no | no |
| Web URLs in lesson text | none | none |
| Duplicate scan (every string in js/data: exact and 8-gram) | no duplicated item text; only generic prompts/hint stock phrases; one 8-gram passage opener ("Our class rode a yellow bus to the science museum last Friday", also in L-GUM3) | generic hint phrases only |
| Key printed elsewhere (every correct choice/EBSR part/dropdown-filled sentence of 25+ chars searched across all js/data) | none (hits only in own item's why/how) | none |
Twin-vs-core is within 0.21 in both lessons by set and multiset counting, so no MUST under that rule.

### First-review fixes, re-measured on disk
**L5**
- S02 rows 2/4 when-vs-that: **fixed.** S02 is now who/where only ("the nurse ___ checks my ears", "the cave ___ the bats sleep all winter"); no row accepts two words.
- S14 key was the only choice lacking "today": **NOT fixed, replaced by a new tell.** See MUST 1.
- C04/C12/C15 vs legacy P3 core-vs-core: **fixed.** P3xC04 now below 0.25, P3xC12 0.258/0.193, P3xC15 0.250/0.277; all under 0.30.
- Second keys C13/S13 and the `where` rule: **fixed.** The keys are `that` and `which` (C13 "bench that/which holds our bags", S13 "puppy that/which was sleeping"); no `where` or `when` choice is acceptable (C13 "The bench when our bags sit", "The bench where holds"; S13 "when was", "whose was", "that it was").
- `which` never a key: **fixed** (key in C13 and S13; Teach point 2 lists it). Grammar Monster: "Use which for things and who for people. Use that for things and, informally, for people." https://www.grammar-monster.com/lessons/which_that_who.htm
- C03 how step 3: **fixed** ("A room is a place, but has the moon rocks there is not a whole sentence, so the word should be that").
- Twin hot-text sentence numbers/key positions: **partly fixed.** See SHOULD 2.
- Who-with-person frame: **fixed.** C04 woman, C12 player, S04 man, S12 boy, C06/S06 girl/boy with different frames; no triple at the old overlap.

**L7**
- C08/S08 overlap: **fixed.** C08 shows 2,6,7,9,10 (key 7, third); S08 now shows 3,4,9,10,12 (key 3, first). Twin-core S08xC08 0.127/0.168, S08xC04 0.143/0.171. C04 shows 2,3,4,6,12 (key 3); S04 shows 1,4,6,7,11 (key 7); S04xC04 0.155/0.185.
- C15 "Mia should finish": **fixed.** "Last night, Mia ___ ___ her homework before dinner, so she was free to play" leaves `had finished` as the only reading (see SHOULD 6 for the hint).
- C12 hint 3 passive voice: **fixed.** Now "Is goes with one person or thing, and the cousins are more than one."

### Lesson 5: 3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs: **REVISE**
Blind 30/30. One MUST.
- **MUST 1: S14 (mc) key is still the odd one out.** Key: "The deep green lake where we paddled ... last summer is very cold today." The three distractors all end "... is very cold today indeed." The author removed "today" from the tell and added "indeed" to the distractors; the key is still the only choice with a different ending (and the shortest, 103 vs 108/109/109). Seen on screen at 390px. Fix: give all four the same ending ("... is very cold today.") so only the connector differs. (C14 has the mirror problem with the odd one out being a distractor, "small today", which only makes that distractor easy to drop; make C14's four endings identical too.)
- **SHOULD 2: twin hot-text key sentence number/position still mirrors the core.** C05 shows 3,6,7,8,9, key 8 (fourth shown); S05 shows 1,3,6,8,10, key 8 (fourth shown): same key number and position, three shown numbers shared. C08 shows 1,3,4,5,7, key 3; S08 shows 3,4,8,9,10, key 3 (shared 3,4). The passages differ, so it is not a giveaway, but the first review asked for different key positions. Fix: S05 key at a different sentence and position (for example show 2,3,5,8,9 only if sentence 2 is a correct use, or make the key the first or last shown), and S08 key not sentence 3.
- **SHOULD 3: dead distractors in the new twin hot texts.** S05 shows sentence 1 ("On Tuesday, our scout troop toured the bakery on Pine Street.") and S08 shows sentence 10 ("I hope we can camp by the river again before the cold weather comes."): neither contains who, that, where or when, so each is a non-candidate (the author's own how says "Sentence 1 has no joining word"). Four live choices instead of five, and the prompt ("pairs its connector with an unsuitable partner") makes no sense for a sentence with no connector. Fix: replace with sentences that contain a correct connector (p4 sentence 7 or 9; p5 sentence 5 or 7).
- **SHOULD 4: four twin items quote the draft inexactly.** The author log says dropdown texts are word for word the draft sentence; they are not. S04 text "the friendly baker was a tall man {0} wore a white hat and a flour-dusted apron every single morning" vs passage sentence 2 "the baker was a man which wore a tall white hat and a flour-dusted apron." S07 text adds "bright" and "for the whole weekend" to passage sentence 2. S12's key and choices add "loudly" and "at dawn" to passage sentence 4. S13's choices are a different sentence ("A tiny, shivering puppy that was sleeping on my front porch greeted us.") from passage sentence 6 ("We found a tiny, shivering puppy when was sleeping on my front porch."), so "fixes for the puppy sentence" are not revisions of that sentence. The key is still right, but a learner comparing passage and choices sees different sentences. Fix: either edit the passage sentences to the item wording (and re-run the passage checks) or restore the item text to the passage wording. (C04 and S12-as-dropdown-style items where the draft's own wrong word is missing from the options, e.g. C04 passage "which" is not an option, are fine.)
- **SHOULD 5: S10 multi-select key is the unique longest by 8 characters** ("Ms. Park, the school nurse, helps students who feel dizzy during gym class." 75 vs 67/65/64/61). Drop the appositive. S03's key is the only choice without the "[noun clause]; [word] suits ..." pattern the three distractors share ("Added there, what follows cannot stand alone; that is correct."); reword the distractors or the key so the pattern is shared.
- **SHOULD 6: S09 key wording is hard for grade 3 and nearly unparsable:** "Deer is an animal, so the words afterward lack someone doing the drinking without that." Say "Deer is an animal, not a time, and the words after it have no subject, so use that." Also S05 prompt ("pairs its connector with an unsuitable partner"), S09 choice "interchangeable" and S08/S05 "joining word/connector" are above the lesson's own vocabulary (Teach says tell-more word, noun, person, thing, place, time). Twin item text FK 4.36 vs core 3.23 (L5 only).
- **SHOULD 7: C11 how step 3 quotes an option that is not on screen:** how says "...could stand alone as a sentence, with there added" but the key reads "...could stand alone, with there added." Quote the key exactly.
- **NOTE:** Untaught distractors (whose, what, how, why, whom-style) remain in C04, C07, C15, S01, S15; S15 slot 0 is `when` against what/how/why. After hints the live choices are nominally four, but only one is plausible. Watch Me/Learn It never model `when` or `which` (seven core items use `when`, two keys use `which`); Teach point 3 covers both. S02 and P3 hint 3 each give away one row/answer (fine). S12 hint 3 says "a brother is not a thing" while the noun before the blank is boy. The 8-gram passage opener "Our class rode a yellow bus to the" also opens an L-GUM3 passage. C13/S13 `which` is correct under the lesson's rule and the source above, though many style guides prefer `that` for restrictive clauses; the Teach makes `which` allowed, so one defensible pair of keys stands.
- Passage-to-answer: all other draft items agree with their passage sentences (C03, C06, C07, C09, C12, C13, S03, S06, S09; C05/C08/S05/S08 how texts name the right noun for each shown sentence).

### Lesson 7: 3.L.GC.1:I:use-helping-and-linking-verbs: **ACCEPT** (with SHOULDs)
Blind 30/30. No MUST. All first-review L7 items are fixed.
- **SHOULD 1: visible typos in the reveal text.** C03 and S03 why read "The answer is Tomorrow, we will water the plants before the bell rings.. After the helping verb ..." and "... for the whole crowd.. After the helper ..." (double period, seen on screen). C06 and S06 why splice a sentence into a sentence: "Part A: By now, our club has planted ten rows of corn along the fence. uses has with the past form planted." and the same for S06. Fix: put the quoted sentence in quotation marks without the added period, or reword ("The answer is "Tomorrow, ... rings." After the ...").
- **SHOULD 2: C15 and S15 hint 2 collapses slot 1.** C15 H2 "A helper that points to the past needs a main verb in its past form" and S15 H2 "... an action word in its past shape" leave `finished`/`painted` as the only past-shaped option, so after hints 1-3 slot 1 has one live choice (the rule is stated, not a place to look). Slot 0 keeps three live choices (had, will, should after hint 3 removes `can`). Fix: make H2 point to where to look ("Look at the word after the blank and ask which helper it can follow") or move the rule into Teach only.
- **SHOULD 3: S04 how mentions a sentence that is not shown.** "Holds, cheer and hug, and give are actions": S04 shows 1,4,6,7,11; "give" is sentence 12. Delete "and give".
- **SHOULD 4: twin vocabulary drifts from the lesson's terms.** Teach says helping verb, linking verb, main verb, plain form. Twins say "joining verb/joining word" (S04 H2, S05 key, S08 H2, S10 H2), "deed" (S05 "No deed occurs"), "helper" (fine), "action word", "basic/base shape" (S06, S09), "prop up", "lone verb". "Deed" and "lends that word extra meaning" are above grade 3. Use "linking verb" and "main verb" throughout; it keeps Jaccard low just as well. Twin item FK is 2.6 vs core 2.8, so this is a terms issue, not a reading level one.
- **SHOULD 5: S01 and C11/S11 minor clarity.** S01 H3 gives away one row ("In Those boots are muddy, muddy tells about the boots and is not a verb"), which settles a fifth of the match. C11 H3 is clumsy: "Neither sentence tells an action that is done by is ..." Reword: "Is does not show anything Dad does."
- **NOTE:** Learn It never models is/are agreement (C07, C13, S07, S13) or seem/become; Teach points 3 and 5 cover them. "Past form" for has planted (participle) is acceptable at this level. C12 key `have` leaves has, will, is live after hints (3 live). S12 distractors `am`/`are` are weak (am with a noun subject), `is` in C12 equally; hint 3 names `am`. C13/S13 correctly pair the plural/singular choose-two with a `was` distractor tied to "stay in the present". C08 and C04 hint 3 each name one shown wrong sentence (fine). Core-vs-core max 0.287 passes.
- Passage-to-answer: all draft items agree with their passage sentences (C03, C06, C07, C09, C12, C13, S03, S06, S09, S12, S13, hot-text how texts except S04's "give").

### Cross-lesson facts
- **Official wording:** standards.js lines 948 ("Use relative pronouns and relative adverbs.") and 978 ("Use helping and linking verbs.") match the lesson skills; points (match 2, choose-two 2, EBSR 2, two-slot dropdown 2, others 1) and DOK labels are right in both lessons.
- **Grade 3 and reading level:** passages are 100+ words (107-131 excluding markers) and FK 2.0-4.1 in both lessons; nothing kindergarten-like. The only above-level wording is in L5 twins (SHOULD 6) and L7 twin terms (SHOULD 4).
- **Distinctness:** no two items differ only by names or numbers (twin pairs share a skill, not wording); L7 C13/S13 and C07/S07 are structural twins by design.
- **Web (grammar claims):** which/that/who for things and people https://www.grammar-monster.com/lessons/which_that_who.htm (fetched); modal verbs are followed by the base form https://www.grammar-monster.com/glossary/modal_verbs.htm (fetched: "the modal verb is followed by the base form"); `that` replacing `when`/`where` after time or place nouns and relative adverbs https://perfectyourenglish.com/grammar/relative-adverbs-when-where-why.htm and https://www.grammar-monster.com/glossary/relative_adverbs.htm (cited in the first review; consistent with the items, which never offer `that` as a wrong choice after a time noun).

### Summary
| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 5 relative pronouns/adverbs | REVISE | 1 (S14 key still the only choice with a different ending: "indeed") | 7 |
| 7 helping/linking verbs | ACCEPT | 0 | 5 |
Blind agreement 60/60. Browser 60/60 at 390x844. Twin-vs-core max 0.206/0.208 (L5) and 0.200/0.192 (L7); core-vs-core max 0.277 (L5) and 0.287 (L7). Of the first review's L5/L7 MUST/SHOULD list everything is fixed except L5 S14 (a new tell took the old one's place) and the twin hot-text key positions (partly).

## Third review (B8a lesson 4)

Reviewer: independent third reviewer (did not author; not the first or second reviewer). `js/data/lessons/L-GUM4.js` lesson 4 (`use-conventional-capitalization-quotation-marks-...`, "Punctuating what people say") as on disk. Read-only; only this section was written. The verdict is a recommendation; nothing is marked ACCEPTED here.

### Method and blind solve
- `scratchpad/b8arev3/blind.js` loads the file in Node, resolves refs, prints numbered passages, `stem` and all 15 core and 15 twin items with seeded-shuffled choices (seed 20261104) and no key, answer, why, clue, hints, how, misconception or like. I saved my answers (`myans.SAVED.js`) before opening any key, hint, `how`, the author log or the second review. Earlier I had seen only the second review's section of this file when told to read it after the solve; I did not read it before solving. The solve was fully blind.
- **Agreement: 30 of 30 (100%)** (`cmp.js` maps my letters to the displayed text and compares to the key text, including both slots of C15/S15, both parts of C06/S06 and each match row).
- Close calls while solving: C12/S12 (`."` against `".` differ only in order; the sentence stem shows the words), C09/S09 (comma inside is clearly the only option that is both needed and correctly placed).

### Scripted measurements (final file)
- **Twin x core, item text with the (n) sentence-number markers and the targeted sentences, item only (set / multiset):** max **0.200** (P5 x S02) / **0.206** (C12 x S12). Nothing above 0.21 on either measure. With the whole shared passage text appended, the worst twin pair is 0.229 / 0.245 (C03 x S03, C09 x S09), still far under 0.30 (`jac.js`).
- **Core x core, item only (set / multiset):** max **0.247** (C03 x C09) / **0.267** (C09 x C11). All at or under 0.30. (With a shared passage appended core pairs read 0.6-0.9; that is the shared draft, not item overlap.)
- **Hot-text prompt numbers against rendered targets (`numchk.js`):** C05 prompt "2, 4, 6, 7 and 10" = targets 2, 4, 6, 7, 10 (OK); C08 prompt "3, 5, 6, 7 and 9" = 3, 5, 6, 7, 9 (OK); S05 and S08 list no numbers. Every sentence number named in any hint, how or why of the four hot-text items is one of the five displayed sentences. The browser render matches (C05 shows (2) (4) (6) (7) (10)).
- **Passages:** six passages, 114-122 words (markers removed), FK 0.90-3.17 (max p6 3.17). All pass (min 100 words, max FK 4.5).
- **Longest key:** no key is the unique longest and no choose-two has both keys longer than every distractor. Ties only on C06 A / S06 A (42/44 chars, the lowercase-i/I pair), C12/S12 slot (2 chars), C15 slot 1, S04, S15 slot 1 (`longest.js`).
- **Points and DOK:** every item's points equal its keyed count (ms = 2, match = 2, ebsr = 2, C15 and S15 two slots = 2); every item has DOK; sets total 7, 7, 7 points.
- **Leak scan (`leak.js`):** no key (choice, filled dropdown, repaired sentence) is printed in any other item's prompt/stem/choices/hints, in Teach, Learn or the parent text. The only matches are the hot-text keys inside their own passage (inherent) and case-fold false positives where the passage holds the lower-case error (C04, S04). No dropdown's filled key equals a passage sentence.
- **Duplicate scan over all js/data (`dupall.js`, `xfile.js`):** 238 strings (passages, prompts, stems, options, filled sentences, option strings of 22+ characters) searched in every other js/data file: **0 hits**.
- **Hint 3 / live choices (all 30 read in full):** every hint 3 names at most one wrong choice (C03 the "only questions" rule, C04 the comma after the question mark, C05 sentence 10, C06 Part A the small i, C07 the outside mark, C09 "no mark", C11 "period", C14 the outside question mark, and so on) and none gives the key's wording. At least two live choices remain after hints 1-3 everywhere (mc and dropdowns three; hot-text four; C15 and S15 three per slot). Exception in kind, not count: S02 H3 (see SHOULD).
- **Key / why / how consistency:** read for all 30; keys, `why` and `how` agree. Minor wording notes below.
- **Grade 3:** vocabulary is grade 3 (no "trio" in this lesson; "verb of saying" in S03 option C is the one adult term, NOTE).
- **Facts / sources (one defensible key):** periods and commas go inside closing quotation marks; a question mark or exclamation point goes inside when it belongs to the quoted words: https://owl.purdue.edu/owl/general_writing/punctuation/quotation_marks/more_quotation_mark_rules.html . A quoted question or exclamation takes no comma before the dialogue tag ("...movies with us?" Mary asked., not ?",): https://www.grammarly.com/blog/punctuation-capitalization/comma-after-question-mark . A comma introduces a quotation after the speaker, and a comma ends spoken words when the tag follows (also https://www.authorlearningcenter.com/writing/fiction/w/character-development/6491/8-essential-rules-for-punctuating-dialogue , cited in the second review). Retelling without quotation marks is the indirect-speech rule on the same pages. The one convention that could be debated (British "single quote" style or outside-comma placement) is not used; the lesson states and tests the American rule consistently (Teach points 2, 3, 5), and the "comma outside the closing marks" options are wrong under it.
- **Browser, 390x844, touch emulation, browse mode, real `tap`** (`run3.py`, server on 8873, then stopped): three core sets via `#play/SK:3.L.GC.1:C:use-conventional-capitalization-quotation-marks-:y|y2|y3/try`, each item with all three hints pressed, then answered with the key and checked, plus each of the 15 twins through "Try a similar question". **30 of 30 items "That's right!"**, document scrollWidth 390 on every one, no choice, hot-text, match button or select under 40 px or past the right edge, no `pageerror`, hint button "No more hints" and disabled after three presses. Hot-text items render the numbered sentences as authored. **S07 (longest option 39 characters) renders as tap-buttons under the sentence, not a select; the tap selected, Check enabled, key accepted.** The other dropdowns render as selects (C04, C07, C12, S04, S12 one; C15, S15 two) with options under 28 characters. Limits: wrong-answer feedback was not exercised and no child's finger was used.

### Verification of the second review's L4 items
| Item | Second review | On disk now | Status |
|---|---|---|---|
| C05 prompt numbers | MUST: prompt said 8, display shows 10 | Prompt reads "2, 4, 6, 7 and 10"; targets and render match; H3, how and why all say sentence 10 | **Fixed** |
| C04 hint 3 | MUST: false rule about a comma after the question mark | "Tess comes first, and a question mark already ends her words, so no comma follows it." Matches Teach points 3 and 5 and the sources above; names one wrong choice; three choices stay live | **Fixed** |
| C09 / S09 hints | SHOULD: H1+H2 gave the rule | H1 "Read the end of the spoken words and the name of the speaker that follows them" / H2 "Compare how the choices treat the end of what the speaker says" (the reviewer's own suggestion; location and strategy only). H3 refutes only the "no mark needed" option | **Fixed** (H3 leans slightly, NOTE) |
| S09 distractors | SHOULD: absolutes and padding ("ever", "again and again") | The wrong options are now plain parallel statements; key is not the longest | **Fixed** |
| S08 prompt | SHOULD: above grade 3 | "Tap the ONE line, out of the five shown from the pond story, whose mark is placed outside the quotes when it belongs inside." Readable at grade 3 | **Fixed** |
| P3 prompt "Which two" | SHOULD (one-word) | Still "Which two sentences are punctuated correctly?" (choose-two items elsewhere use TWO; the "(pick 2)" line is shown) | Not changed (NOTE) |
| C12/S12 bare-mark options | NOTE | Unchanged; legible, the sentence stem shows the words | NOTE |

### Item review
All 30 items have one defensible key under the stated convention, plausible distractors (each distractor is one rule broken: lower-case start, comma outside, mark outside, comma after ? or !, missing comma, missing quotation marks) and prompts at grade 3. Standard wording ("capitalization, quotation marks, and commas" in the dialogue standard) is covered. Hint ladders are strategy, then place, then scaffold, and none narrows to the key. Twins test the same skill with new sentences, a different speaker and a different story; `like` mappings are honest (S02 to P5, S03 to C03, S11 to C11, and so on).

### Findings

**Verdict: ACCEPT (no MUST).**

- MUST: none.
- SHOULD
  - **All four hot-text keys are sentence (7)** (C05, C08 in core; S05, S08 in twins) and three of the four sit fourth among the five shown sentences (C05 2,4,6,**7**,10; C08 3,5,6,**7**,9; S08 2,4,6,**7**,9; S05 2,5,**7**,9,11). A child who gets C05 and then meets the twin sees the same number and the same flaw (no comma after the quote when the speaker follows). Move one or two keys (for example S05 to a different numbered line, S08 to the sentence-9 or sentence-4 slot) so the position is not a repeating tell. Data only; the sentences already exist in the passages.
  - **S02 H3 hands over one match row.** "Tina's line has quotation marks and a capital letter, so ask what is missing between her name and her words." Between a name and the words is where a comma goes, so this is Tina's key (row 1 = Add a comma), not a scaffold. Use a location hint that applies to every row, for example "Tina's line already has quotation marks, so compare what comes right after said in each line."
- NOTE
  - C12 H2 and S12 H2 ("Ravi comes first, and the words he says are a statement" / "Grandma is named first, and the words she says are a statement") plus H1 point to a period inside; this is the item's reason and borders on a key hint. Acceptable (a child still has to place the mark inside or outside), but a plainer H2 would be "Look at the last word she says and at what follows it."
  - C09 and S09 H3 say a mark "finishes what is said" / "at the end of the words"; with the premise in the prompt this is a small lean toward "a mark is needed", fine.
  - C15 H2 "think about how Aunt Beth calls to the family" mildly signals the exclamation point; C15 and S15 `how3` say the wrong options "add a comma after the end mark", but the slot 1 distractors (`"I will wash my hands,"`, `"Give me one minute,"`) swap the period for a comma inside the quotes rather than adding one after.
  - S03 option C uses "verb of saying", the only adult term in the lesson; "has a word like said" would match the grade.
  - P3 prompt keeps lowercase "two" (see table); P3 and P5 are older reused practice items with a single clue instead of a three-step ladder (button reads "No more hints" after one press). Not new, not a fault of this lesson's authoring.
  - Hot-text `why` fields nest quotation marks ("""He is shy" said Noah."" renders as a doubled mark pair); readable but awkward for a lesson about quotation marks. C05 `why` is the clearest example.
  - Learn It and Watch Me model comma-first, comma-inside when the speaker comes last, and the exclamation point inside. Retelling without quotation marks (C03, S03, DOK 3) and a question mark with the speaker last (C11, C14, S11, S14) appear in Teach only.
  - C08 displays sentence 9, which C09 asks about in the same set; it shows the faulty sentence (the subject of C09), not C09's key, so there is no giveaway.
  - Hot-text drafts keep untested errors (p4 sentence 10 `"Thank you, Mr. Hale".`, p1 sentence 9, p3 sentences 4, 7 and 9 outside C13/C12); the shown lists exclude them, and this is intentional.

### Summary
| Lesson 4 | Result |
|---|---|
| Blind solve | 30/30, fully blind |
| Twin x core | 0.200 / 0.206 (limit 0.21) |
| Core x core | 0.247 / 0.267 (limit 0.30) |
| Passages | 114-122 words, FK max 3.17 |
| Leak / duplicate scans | none |
| Browser 390x844, taps | 30/30 right, no overflow, S07 button fallback works |
| Second-review MUSTs (C05 prompt, C04 hint 3) | both fixed on disk |
| Verdict | **ACCEPT** (0 MUST, 2 SHOULD: hot-text key always sentence 7; S02 H3) |
