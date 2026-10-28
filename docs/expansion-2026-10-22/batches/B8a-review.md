
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
