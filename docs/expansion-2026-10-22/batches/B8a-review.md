
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
