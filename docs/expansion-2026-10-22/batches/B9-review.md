# B9 review: Foundations (3.F.P.4.a, 3.F.P.4.b, 3.F.P.4.c, 3.F.H.3.a, and six coreException sequences)

## First review (B9)

**Role:** independent content reviewer 1. I did not write any B9 content. I read the author log (`B9-author-log.md`) only after my blind answers were saved.
**Read-only:** I changed no lesson or code file and ran no git. This file is the only file I wrote. I worked from a frozen copy of the repo and served it on port 8791 (pid 11011, killed after this review).
**Scope:** lessons 3.F.P.4.a, 3.F.P.4.b, 3.F.P.4.c (`js/data/lessons/F-PF.js`) and 3.F.H.3.a (`F-FH.js`): core, similar, Together (practice not in core), form A test, Teach, Watch Me, parent text. Plus the six `coreException` sequences: 3.F.F.1.a, 3.F.F.1.d (F-PF.js), 3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b (F-FH.js).
**Scratch work:** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b9rev/` (blind.js, myans.SAVED.txt, cmp.js, keyed-*.txt, jac.js, stats.js, ladder.js, scanA.js, ngr.js, ui2.py, shots/).

## 0. Verdicts at a glance

| Lesson / sequence | Verdict | Open MUST |
|---|---|---|
| 3.F.P.4.a Letters that can make more than one sound | **CHANGES REQUIRED** | M-A1, M-A2, M-A3 |
| 3.F.P.4.b Syllable types | **CHANGES REQUIRED** | M-B1, M-B2, M-B3 |
| 3.F.P.4.c Prefixes and suffixes | **CHANGES REQUIRED** (one small item) | M-C1 |
| 3.F.H.3.a Reading cursive | **CHANGES REQUIRED** | M-H1, M-H2 |
| 3.F.F.1.a exception | **ACCEPT** (SHOULDs) | none |
| 3.F.F.1.b exception | **ACCEPT** (SHOULDs) | none |
| 3.F.F.1.c exception | **ACCEPT** (SHOULD) | none |
| 3.F.F.1.d exception | **CHANGES REQUIRED** | M-E1 |
| 3.F.H.4.a exception | **ACCEPT** (SHOULD/NOTE) | none |
| 3.F.H.4.b exception | **ACCEPT** (SHOULD/NOTE) | none |

Keys are sound everywhere I could solve blind. Every MUST below is a hint, a feedback text, an ambiguous distractor, or a Teach/item conflict, not a wrong key. Each fix is small. This is review 1 of the two the matrix row requires, so no row can move toward accepted yet (see section 9).

## 1. Blind solve (integrity statement)

- **Method.** `blind.js` loaded all four lessons in a Node `vm` sandbox with a stub `PP.addLesson`. It printed every core item (resolving each `{ref}` into `practice`), every similar item, every Together item and every form A test item. Choices, match rows, dropdown options and order steps were shuffled with a fixed seed. It stripped `correct`, `answer`, `why`, `clue`, hints, `how`, `misconception`, `like` and `std`. The result is `blind.txt` (158 items: 60 core, 60 similar, 15 Together, 23 test). Cursive text was printed as plain text, because the sandbox has no font.
- **Fully blind: yes.** I did not open the lesson source, the author log, or any key before `myans.SAVED.txt` was saved. I compared only after that.
- **Agreement: 157 of 158 (99.4%).**
- **The one miss is mine, and it is informative.** 3.F.H.3.a S04 ("Count the letters in each word", cursive "Sam took eight plates."). I answered 5 for plates; plates has 6. See S-H4: letter counting in joined cursive is an error-prone task, and it was the only item I got wrong.
- **Merit check.** I can defend every key except where noted as ambiguous: 4.a C09 (broom, M-A2) and 4.b S09 (cobra, M-B2) each have a second defensible answer under the lesson's own rules, although my blind answer matched the key.

## 2. Cross-cutting checks (all four lessons)

### 2.1 Twin Jaccard (word set and multiset, ceiling 0.21)

All 60 core/similar pairs pass. Highest per lesson: 4.a S14 0.207 set (0.184 multiset); 4.b S03 0.200 set (0.189); 4.c S04 0.207 set (0.200); 3.F.H.3.a S06 0.208 set (0.207 multiset) and S13 0.197 set (0.204 multiset). The author's figures (0.207, 0.200, 0.207, 0.208) match mine. Five pairs sit within 0.01 of the ceiling, so any edit to those twins must be re-measured (4.a S14, 4.c S04, H.3.a S04, S06, S13). No pair shares a choice or a key.

### 2.2 Format, DOK, points, mc cap (plan 04 section 4.4 and 6)

| Lesson | Core formats | mc (cap 6) | TE formats (min 3) | DOK1 (max 2) | DOK3 | Core points |
|---|---|---|---|---|---|---|
| 4.a | hot 3, match 3, dd 2, mc 4, ms 2, order 1 | 4 | 11 | 2 | 1 | 22 |
| 4.b | mc 4, order 1, hot 2, dd 4, match 2, ms 2 | 4 | 11 | 1 | 1 | 23 |
| 4.c | dd 4, mc 4, hot 2, match 2, ms 2, order 1 | 4 | 11 | 1 | 1 | 24 |
| H.3.a | mc 6, dd 3, hot 2, match 2, ms 1, order 1 | 6 (at the cap) | 9 | 2 | 1 | 22 |

All pass. Points check: choose-two = 2 everywhere; matches with 4 to 5 rows = 2. Each lesson uses six formats across its fifteen (the plan asks for at least four per fifteen). mc keys are authored at index 0 in every item (8, 8, 8 and 12 times), but `js/engine/items.js` lines 109 and 138 shuffle choices once per item per sitting, so this is not a render problem.

### 2.3 Longest key

| Lesson | Core mc | Similar mc | Test mc |
|---|---|---|---|
| 4.a | 1 of 4 (C11, 78 vs 74 chars) | 1 of 4 (S10, 5 vs 4) | 2 of 3 (T1 5/4, T3 7/5) |
| 4.b | 3 of 4 (C01 5/4, C05 7/6, C09 6/5) | 1 of 4 (S05 6/5) | 0 of 2 |
| 4.c | 2 of 4 (C05 9/7, C11 47/43) | 1 of 4 (S06 9/8) | 0 of 3 |
| H.3.a | 1 of 6 (C12 64 vs 53) | 1 of 6 (S13 71 vs 52) | 0 of 4 |

One-word keys with a one- to two-letter margin (all of 4.a, 4.b, 4.c except C11, plus tests) are not a usable cue. The real margins are H.3.a C12 and S13 (11 and 19 characters), and 4.a C11 is within 4 characters. See S-H7.

### 2.4 Hint ladder (plan 04 section 4.5)

Rules applied: h1 strategy, no location; h2 focus, must not name or quote the key; h3 scaffold, must not state the answer, quote the key option, describe the key in other words, or leave one option standing; reader sees h1 and h2 without the choices cannot write the key.

**Live choices after hints 1 to 3, recounted.** In the browser (390x844, `PP_PLAYER.start("SK:<code>:y|y2|y3","try",{pos})`) hints are text only: after hint 1, 2 and 3, every mc and ms option stayed enabled (4 of 4, 5 of 5, 6 of 6) on all 25 mc and ms core items, so nothing is removed mechanically. My live counter only instrumented mc and ms; for hottext, match, dropdown and order I counted by reading each hint as the child will. Results:

- **One option left (violates rule 3):**
  - 4.b C12 blank 2 and 4.b P7 (core ref): h3 "the letters that end table and candle/little" leaves only the -le spelling. M-B3.
  - H.3.a C06 and S07: h3 isolates the key by its first letter. M-H1.
  - H.3.a C12 and S13: h3 re-describes the key in other words ("some letters and the sentence around the word"). M-H2.
- **Key named or quoted (violates rule 3), with two live:** 4.a C06 ("Say stage and game"), 4.a S14 ("Say rice and cold"), 4.c S01 ("Start with reuse"). After h2 has already confined the choices to the g-words (or c-words), h3 names the key and its only rival. M-A1, M-A3, M-C1.
- **Two live, by design, acceptable:** H.3.a h3s such as C04 ("Start with the first word"), 4.a C05, C07, C08, C10 and most match items complete one row or rule out one distractor and leave at least two live. This matches the author's stated intent ("two or more live choices by design"), and I confirm it for every item not listed above.
- **False positives I checked and cleared:** my script flagged 4.a S03 h1 "KEY IN HINT 1: loud". That is the substring in "aloud". Not a finding.
- **Twin hint copies.** Hints are copied word for word between a similar item and its core twin: identical h1/h2/h3 counts are 4.a 1/4/1, 4.b 9/8/1, 4.c 12/9/3 and H.3.a 5/6/5. The plan says all three hints are item-specific. See N-1.

### 2.5 Duplicate scan over ALL js/data (the author's scan of H.3.a failed; this one covers all four)

Method: `gload.js` loads every lesson, set, task and test in `js/data` (118 skills). `scanA.js` checks every key and option word of every new item against all items, sets and passages. `ngr.js` runs word n-grams at 4, 5 and 6 words over the four lessons against every Watch Me, Together, form A and B, mixed-set, practice-test and other-lesson item.

- **Six-word or longer matches (the CONTENT-BRIEF flag threshold): 4 hits, none a leak.**
  - 4.a S10 vs the 3.F.F.1.a Teach: "sounds like the oo in moon". Standard phonics wording.
  - 4.c P5 and P7 vs L-V12 SK-V2a-T2 and L-VOC-02-1: "means not or the opposite of". Standard definition of un-/dis-.
  - 4.c C11 vs 3.L.V.2.c teach: "change the y to i before". Same spelling rule, by design.
- **Same key fact across forms (the real findings):**
  - **3.F.H.3.a:** `quiet` is the key of both S03 and test T4. `zebra` (T4 key) is a distractor in core C05. The author log says the test-key words "were avoided"; that is not so. S-H8.
  - **3.F.P.4.a:** `rice` is the key of S14 and a row of test T2. `camp` is a distractor in S08 and a row of T2. `brown` is in the S03 stem and is the key of T1. S-A5.
  - **3.F.P.4.b:** `hotel` is a distractor in S08, in S14 and in T4. `paper` is in C08, C09 and T4. S-B6.
  - **3.F.P.4.c:** `misuse` is the key of S01 and a row of S04; both are similar items, so there is no form leak. N-4.
  - `T2 key inside` appears in 4.b S06 only as the word in the prompt "inside a part". False positive.
- **Within-lesson word repeats:** 4.a `bread` x4 (C01 stem, C02 prompt, P5 option, P7 key), 4.c `before` x6 and `again` x5. These are lesson vocabulary, not twins. N-4.
- **Other lessons:** common words (window, red, milk, down, etc.) recur widely in js/data. None is a concept clash with a test key.

## 3. 3.F.P.4.a "Letters that can make more than one sound"

**Standard (official):** "Decode and encode words with graphemes that represent multiple letter-sound correspondences."
**Coverage:** ea (long e, short e, long a), ow, hard/soft c, hard/soft g, oo, ou, ough, spelling (P7, S15, T6). Learn It shows ea (head), c (circle) and ow (towel). Watch Me does not show g, oo, ou or ough; the matrix says g is "taught+practised+assessed" and oo/ou "taught+adult-observed", so it is honest about g. It understates oo/ou: C09 to C11 and S10 to S12 assess them (see N-2).

### MUST

**M-A1. SK-FP4a-C06: hint 3 quotes the key.**
- **Evidence:** options band, stood, stage, game. Hint 2: "Only some of these words have a g in them. Find those words first." Hint 3: "Say stage and game out loud. Ask whether each g sounds like the g in go or like j." Together, h2 and h3 leave two words and name the key, so what remains is a coin flip and the key is quoted (rule 3).
- **Fix:** hint 3 should rule out one tempting distractor with a reason, not name the pair: "Game has a g too. Ask what letter comes right after that g, and say whether that matches the rule for a g that says j." If the lead wants a pair, name distractors only.

**M-A2. SK-FP4a-C09: broom is a second defensible answer.**
- **Evidence:** "Say book. Which word has an oo that sounds the same?" Key `wool`; distractors pool, broom, noon. Merriam-Webster prints **two** pronunciations for broom: ˈbrüm and ˈbru̇m (the second has the short oo of book) (https://www.merriam-webster.com/dictionary/Broom). A child who says "brum" with the book vowel is right. The why says "Pool, broom and noon have the long oo".
- **Fix:** replace broom with a word with one clean pronunciation, for example `spoon`, `cool` or `boot`, and keep the why accurate. Re-check twin S10 (stool vs foot, hook, good): that one is clean.

**M-A3. SK-FP4a-S14: hint 3 quotes the key.**
- **Evidence:** options buns, rice, cold, ate. Hint 3: "Say rice and cold out loud. Ask whether each c says k or s." Same pattern as M-A1: key and its only rival named.
- **Fix:** as M-A1. Also replace the key word `rice` (see S-A5, it is a T2 row).

### SHOULD

**S-A1. SK-FP4a-C03 (and S03): hint 3 echoes the key word.** C03 hint 3: "Does it sound like ouch or like go?" The key for blank 2 is `go`. Two sounds are offered, only one of which is a choice, so the child maps ouch to "now" and go to "go". Fix: "Say yellow slowly and listen to its last sound. Which choice rhymes with that sound?" without a model word.

**S-A2. SK-FP4a-S05: hint 3 describes every distractor by type.** "Some choices have the vowel in bed and one has the vowel in day. Say each word to check." Six choices, pick two: after this hint the key is what is left over. Fix: name one distractor and why it is wrong ("Break has a vowel you hear in day"), without sorting the rest.

**S-A3. SK-FP4a-S12 (twin of C11): distractor wording is not grade-3 clear.** "Use the sound of cow, for the ou stands for it." and "Use a short u, as each ends in gh." are stilted and the second is nearly meaningless. Fix: "Say both words with the ou sound in cow." and "Say both words with a short u, because ough ends in gh."

**S-A4. SK-FP4a-S15 (twin of P7): not an honest `like`.** P7 chooses between bread / bred / breed (ea for short e). S15 chooses plate / plait / playt: it tests a_e vs ai vs ay for long a, not a grapheme with more than one sound, and `plait` is not a grade-3 word. Fix: a twin that uses a real multi-sound grapheme, for example "Sam ate a bowl of {beans/benes/beens}", or keep the long-a spelling and remove `plait`.

**S-A5. Form A leakage: rice, camp, brown.** S14 key `rice` is a row of T2. S08 distractor `camp` is a row of T2. S03 stem `brown` is T1's key. A child who retries the similar bank sees the test words first. Fix: change T2 rows (rice to `city` or `fancy`; camp to `cabin`) and T1's key (brown to `crowd` or `mouse`).

**S-A6. Y as a vowel (decision asked for in the brief).** See section 7.

### NOTE

- **N-A1. C01, S01 and T-words in Teach.** Teach point 1 names `great` and `steak` as ea says long a. S01's key is `great`, a Teach word, so S01 is recall (DOK1, correct as labelled). C01's key is `break`, which is **not** in Teach, so C01 needs transfer. The author log says C01/S01/S02 use "great, steak and break, which are Teach words": only great is. All three words are verified long a ea words (section 8). Acceptable.
- **N-A2. SK-FP4a-P6 hint 2.** "Only some of the words have a c." All four options (Carla, cut, cake, slices) have a c. True of the sentence, not of the options. Rephrase.
- **N-A3. C11 is the odd one out.** All four choices but the key say "same sound"; the key alone says "different". Plus it paraphrases Teach point 5. DOK3 is generous for a taught fact. Not a defect, but a cue.

### Item verdicts (4.a)

| Item | Verdict | Item | Verdict |
|---|---|---|---|
| C01 | ACCEPT | C07 | ACCEPT |
| C02 | ACCEPT | C08 | ACCEPT |
| C03 | ACCEPT (S-A1) | P6 | ACCEPT (N-A2) |
| C04 | ACCEPT | C09 | **CHANGES REQUIRED (M-A2)** |
| P5 | ACCEPT | C10 | ACCEPT |
| C05 | ACCEPT | C11 | ACCEPT (N-A3) |
| C06 | **CHANGES REQUIRED (M-A1)** | C12 | ACCEPT |
| P7 | ACCEPT | Similar S01 to S13 | ACCEPT except S14 (M-A3), S03 (S-A1), S05 (S-A2), S12 (S-A3), S15 (S-A4) |
| Together P1 to P4 | ACCEPT | Test T1 to T6 | ACCEPT with S-A5 |

**Lesson verdict: CHANGES REQUIRED** (M-A1, M-A2, M-A3).

## 4. 3.F.P.4.b "Syllable types: breaking long words into parts"

**Standard:** "Decode and encode single-syllable and multisyllabic words of all syllable types."
**Coverage:** all six types appear (closed C07/T3, open P2/P3/T3, VCe C07/T2, vowel team C06/S06, r-controlled C05/S05, consonant-le P6/S14/C11), plus VC/CV, V/CV vs VC/V, and encoding (C12, P7, T6). Syllable splits I checked against Merriam-Webster: pock-et, rob-in, sev-en, ho-tel, pa-per, ba-by, Sep-tem-ber, um-brel-la, re-mem-ber, riv-er, vis-it all agree with the keys, except where noted below.

### MUST

**M-B1. SK-FP4b-C04: how and why state the wrong rule for pocket, and Teach says something else.**
- **Evidence:** key `pock / et`. How: "Pocket has two consonants, c and k, between the vowels, so split between them: pock / et." Why: "with the split between the two consonants." But pock / et splits **after** the c and k, not between them. Merriam-Webster prints pock·et (https://www.merriam-webster.com/dictionary/pocket); ck is a digraph, one sound. Teach point 3 says "When two consonants stand between two vowels, you usually split between them: nap-kin, rab-bit." A child who follows Teach writes poc / ket, which is not a choice. The Learn It example (bas / ket) and C08 (pock = closed) are consistent with the key, so the key is right and the explanation is wrong.
- **Fix:** either add a Teach line ("Letters that make one sound, like ck, sh and th, stay together: pock-et") and rewrite how and why ("The c and k work together as one sound, so the split comes after them"), or replace pocket with a word whose two consonants are separate sounds (magnet, napkin is Teach, basket is Learn It: use `magnet`).

**M-B2. SK-FP4b-S09: cobra is a second defensible answer, and the why is false.**
- **Evidence:** "Pick the word with a pair of consonants in its middle, where it gets cut." Key `mitten`; distractors motel, cobra, silent. The why says "Motel, cobra and silent have one consonant between the first two vowels" and hint 3 says "Look at the letters between the first two vowels in cobra and silent." Cobra has **two** consonants (b, r) between o and a. The dictionary split is co-bra (a blend stays together; the AHD search result lists "co·bra", https://www.ahdictionary.com/word/search.html?q=cobra), but Teach point 3 says two consonants split between them, which gives cob-ra. Under the lesson's own rule, cobra has a pair of consonants that gets cut.
- **Fix:** replace cobra with a word with one consonant (`robot`, `tulip`). Do not ask a child to apply a blend exception the lesson never teaches. If the lead wants the blend rule, add it to Teach with 4.b items.

**M-B3. SK-FP4b-C12 (blank 2) and SK-FP4b-P7: hint 3 leaves only the key.**
- **Evidence:** C12 blank 2 options `jungel / jungle / jungul`. Hint 3: "Think of the letters that spell the end of table and candle." Only jungle ends in -le, so one option is left, and the hint spells the key's ending. P7 (a **core ref**, so it counts in the fifteen): options `candle / candel / candal`. Hint 3: "Think about the letters that end words like table and little." Only candle ends in -le. Same fault, and it also quotes `candle` word-for-word in C12.
- **Fix:** hint 3 should rule out one distractor by reason, not give the ending: "Two of these end in a vowel and a consonant that look wrong: say which two syllables each one splits into." Or ask a question: "What kind of syllable does the last part sound like, and how is that kind spelled?" Keep the table/candle example in Teach, not in the hint. (S12 and S15 have a second -le choice, so two options stay live; they are acceptable as written.)

### SHOULD

**S-B1. SK-FP4b-S12: nonsense sentence.** "A kitten sat in the paddle." Fix: "A kitten sat in the boat" would lose the -le target; use "A kitten sat by the paddle" or put the -le word first ("A paddle hit the {kitten}") so both blanks make sense.

**S-B2. SK-FP4b-S07 (twin of C07): vocabulary swapped for gloss text.** C07 uses closed / open / vowel-consonant-e. S07 uses "stops on a plain letter" / "finishes with a silent e" / "has two vowels in a row". "Plain letter" is not Teach vocabulary and "two vowels in a row" is not a vowel team (a vowel team makes one sound; "Joe" has two vowels in a row). It also makes the twin test reading the gloss, not the syllable type. Fix: use the Teach terms, as C07 does.

**S-B3. SK-FP4b-C10 and S10: weak distractors.** C10 is fine (plausible wrong moves). S10's three distractors ("Say li / mit again, but louder", "Cut off one letter", "Guess the last part and move on") are not plausible reader moves, so the DOK3 label is generous. Fix: use plausible reader moves, for example "Say li / mit again, but stretch the i", "Split it as l / imit", "Say lim / it with a short i" (key).

**S-B4. Teach has no rule for digraphs and blends in VCCV.** Reading Universe's multisyllabic page states "we cannot split a digraph or a blend" for VCCCV words and only says "break between the two consonants" for plain VCCV (https://readinguniverse.org/skill-explainer/multisyllable-words/multisyllabic-words-skill-explainer/teaching-how-to-read-multisyllabic-words-with-other-syllable-types). The lesson's items include a digraph word (pocket) and a blend word (cobra). Add one Teach sentence, or remove those two words (M-B1, M-B2).

**S-B5. Y as a vowel in syllables.** Many 4.b words end in a y sounded as a vowel (butterfly, tiny, baby, puppy, sky). Teach and Watch Me never mention it. See section 7.

**S-B6. Form A leakage.** `hotel` is a distractor in S08, S14 and T4; `paper` is in C08, C09 and T4. Replace one word in each.

### NOTE

- **N-B1.** C02 (order) and 4.a C12, 4.c C10, H.3.a C07: all four lessons use one "put the steps in order" item built from the Teach procedure. They are recall of the taught order, so DOK2 is generous. Acceptable, but four of the four lessons using the same structure is a pattern.
- **N-B2.** Watch Me shows basket, pilot and a third word (see `keyed-3.F.P.4.b.txt`); it does not model consonant-le, vowel team or r-controlled recognition, but Teach does and the items ask only for recognition. Matrix wording matches.
- **N-B3.** All keys I solved match. Splits for September, fantastic, umbrella and remember agree with Merriam-Webster.

### Item verdicts (4.b)

| Item | Verdict | Item | Verdict |
|---|---|---|---|
| C01 to C03 | ACCEPT | C09 | ACCEPT |
| C04 | **CHANGES REQUIRED (M-B1)** | C10 | ACCEPT |
| P5 | ACCEPT | C11 | ACCEPT |
| C05 to C08 | ACCEPT | C12 | **CHANGES REQUIRED (M-B3)** |
| P6 | ACCEPT | P7 | **CHANGES REQUIRED (M-B3)** |
| Similar | ACCEPT except S09 (M-B2), S07 (S-B2), S10 (S-B3), S12 (S-B1) | Together, Test | ACCEPT (S-B6) |

**Lesson verdict: CHANGES REQUIRED** (M-B1, M-B2, M-B3).

## 5. 3.F.P.4.c "Prefixes and suffixes"

**Standard:** "Decode and encode words with common prefixes and suffixes." Coverage: re-, un-, dis-, mis-, pre-, -ed, -ing, -ly, -ful, -less, drop e, double, y to i, false prefixes (uncle, under, dish), decode by covering, and encode. Teach, Watch Me (unpacking, smile + ed, a third example) and items agree. I solved all 45 items blind and defend every key.

### MUST

**M-C1. SK-FP4c-S01: hint 3 quotes the key, and the why is a stale copy.**
- **Evidence:** options for blank 2: misuse / disuse / reuse; key `reuse`. Hint 3: "Start with reuse. Think about what re- means." That names the key. The why ends "Before is the meaning of pre-." There is no pre- word and no "before" choice in S01 (a copy from C01).
- **Fix:** hint 3: "Look at the front part of each word. Which front part means one more time?" without naming reuse. Delete the last sentence of the why.

### SHOULD

**S-C1. Same three options in both slots (C01, S01, C08, S09).** After slot 1, slot 2 is a choice of two, and the child can fill it by elimination. C08 and S09 repeat the permuted set base word / prefix / suffix. Fix: use a distinct fourth option in slot 2, as other dropdowns here do.

**S-C2. S15 labels drift from Teach.** S15 uses "having lots of" and "lacking" where Teach and P7 use "full of" and "without". "Lacking" is above grade 3 in this context, and it makes the twin test the labels. Fix: use "full of" and "without".

**S-C3. C08 uses -able, which Teach does not list.** Teach says the suffixes are "like -ed, -ing, -ly, -ful or -less". -able is not taught. C08 is still fair (the item names the pieces), but a child meets a new suffix inside a scored item (plan 04 section 6 rule 9). Fix: use un- + break + -ing or add -able to Teach.

**S-C4. Learn It does not model the y to i rule.** Teach point 5 and C11, C12, S13, S14, T3, T4 depend on it. Watch Me models drop-e (smile + ed) and the base word, and the third example covers doubling; y to i is taught only in the Teach text. Fix: one short Watch Me, or note in matrix as "taught, practised, assessed" (not modelled). The matrix claims modelled.

### NOTE

- **N-C1.** C07 and S08 show a misspelled word in the stem ("grabed", "slamed") for error detection. Fine, but the child reads a wrong spelling; the why corrects it. Keep.
- **N-C2.** S06 uses `soundful` (not a word) and `sounder` as distractors; both are fine for a "which word means no sound" item.
- **N-C3.** T3 and P3 test two close rules (try to tried, stop to stopped) with the same stem structure; acceptable.

### Item verdicts (4.c)

All core items (C01 to C12, P5, P6, P7) **ACCEPT** (S-C1 on C01 and C08). Similar: **S01 CHANGES REQUIRED (M-C1)**; all other similar ACCEPT (S-C1, S-C2 notes). Together and Test ACCEPT.

**Lesson verdict: CHANGES REQUIRED** (M-C1 only; one hint and one sentence).

## 6. 3.F.H.3.a "Reading cursive"

**Standard:** "Read phrases and sentences written in cursive." Rendering is the shipped "PP Cursive" (Playwrite US Trad). I checked all 15 core items in a 390x844 browser: no horizontal scroll, no overflow, every cursive stem rendered in `"PP Cursive", cursive` (shots in `b9rev/shots/`).

### MUST

**M-H1. SK-FH3a-C06 and S07: hint 3 isolates the key by its first letter.**
- **Evidence:** C06 options brown, rabbit, hid, grass; hint 3 "Look at the word that starts with the cursive r." Only rabbit starts with r (brown has an r inside). S07 options aunt, knits, purple, winter; hint 3 "Look at the piece that has a cursive p near the start." Only purple. Each hint leaves one option and also hands the child the letter for the key. (Both asks are semantic, "names an animal", "tells a color", so the hint does the reading for them.)
- **Fix:** hint 3 should keep at least two options live and not give a letter. For C06: "Hid tells what something did, so it names no animal. Read the other words and ask which one names a living thing." For S07: "Knits tells what someone does. Read the other words and ask which one tells how something looks."

**M-H2. SK-FH3a-C12 and S13: hint 3 describes the key in other words.**
- **Evidence:** C12 key "Use the letters he knows and think about what fits the sentence." Hint 3: "Compare each choice with what Leo knows: some letters and the sentence around the word." That is the key, reworded. S13 key "Test words with that ending and see which one fits the story around it." Hint 3: "...what the pupil has: some letters and the sentence around the word." Plan 04 line 222: the hint "must never describe the key in other words". The how in both repeats the same sentence.
- **Fix:** hint 3 should rule out one distractor: "Skipping the note does not tell Leo what the word says. Ask which choice uses what he can already see." Do not list the two clues.

### SHOULD

**S-H1. SK-FH3a-C10: the question asks about things the note does not say.** The cursive note is "Please bring a large blanket, two cups and a jug of juice." The question is "What should Dad bring to the pond?" Neither Dad nor the pond is in the note, and no passage supplies them. The key also drops "large". Fix: "What does the note ask someone to bring?" and keep "large blanket" in the key.

**S-H2. SK-FH3a-C04 and S04: counting letters is not reading.** C04 asks which place (first, second, third, last word) each word holds; S04 asks for the letter count of each word. A child can answer S04 by counting loops, never reading the word, and it is the one item I got wrong blind (plates, 5 vs 6). Standard: "Read phrases and sentences". Fix: ask which word is a name, which tells an action, which is a number, and keep the count as a hint.

**S-H3. Watch Me does not model what the fifteen require.** Learn It has two examples: "The dog ran fast." (spaces, easy letters, check) and "Sam swims" (the cursive s). The matrix and Teach say r, s, z, f and the capitals G, Q, S, T, Z are "taught+modelled+practised+assessed". Only s (and capital S) is modelled. Items test z (dozed, zebra, Zoe, Zara), Q (Quinn, quiet), T (Tess, Tara), G (Gran, Grandma), r, f (frog). Plan 04 section 6 rule 9: no new rule first in an item. Fix: a third Watch Me on a capital plus z or r, or change the matrix to "taught, practised, assessed" for those letters.

**S-H4. Rendering gap inside words.** In the 390x844 screenshot of C11 the font shows a visible gap after a lowercase s in `Tuesday`, `Wednesday`, `Thursday` ("Tues day", "Wednes day", "Thurs day") and in `soccer` (`shots/SK-FH3a-C11.png`, crop `shots/crop-c11.png`). Teach point 4 and Watch Me both say spaces show where words end, and the exceptions teach joined letters. Cause is the font's s exit stroke, rendered in headless Chromium with the shipped woff2. Fix: confirm on a real phone; if it shows, add `font-kerning`/`letter-spacing` tuning in `.cursive` or avoid words with s followed by d or o in word-boundary items (C07, C04, S04).

**S-H5. Only one cursive face. Judged against the plan.** Plan wording (matrix row required_changes): "New items should use at least two cursive renderings and longer phrases". "Should", not "must". The author is honest about it. The risk is real: real notes from relatives are in varied handwriting, and a child who reads only Playwrite US Trad (a school model with decorative capitals G, I, H; https://fontsource.org/fonts/playwrite-us-trad/about) is practising one model. Verdict: **not a MUST**. Fix options: (1) add a second self-hosted open cursive face for a minority of items (I did not verify availability of a second Playwrite variant); (2) vary `font-size`, slant (`font-style: oblique` is not available on this font) and line spacing; (3) record the shortfall in the matrix `missing_or_partial_components` (now "None" on this column). Do (3) either way. Phrase length is met: C10, C11, C13, S11 and S12 are lists, schedules and notes of 7 to 12 words.

**S-H6. Form A leakage.** `quiet` is the key of S03 and of T4, and `zebra` (T4's key) is a distractor in C05. Replace `quiet` in S03 and `zebra` in C05's distractor (for example `Zara fixed the broken zip`).

**S-H7. C12 and S13 keys are the longest by 11 and 19 characters** (and are the only choice that is a sensible strategy). Shorten or lengthen the distractors.

### NOTE

- **N-H1.** The Teach list "capital letters like G, Q, S, T and Z" matches Handwriting Without Tears for G, Q, S, T ("Capitals - Not Like Print") but HWT files Z under "Capitals - Similar to Lowercase" (https://legacyd7.lwtears.com/sites/default/files/Cursive_Letter_Group_Posters_10162018.pdf). Z is still hard to read in many models. Acceptable.
- **N-H2.** Learn It describes cursive s as swinging up to a point and curving down "like a little sail". HWT describes it as a straight takeoff, bump, down, J-turn, bump (same poster). Both describe the shape a reader sees; neither is a conflict for reading.
- **N-H3.** DOK3 on C12 and S13 is generous: the child picks the best next move from a taught strategy.
- **N-H4.** P5/S15 (Zoe, Tessa) and C05/S06 (Zara, Tara) are good tests of cursive capitals. Keep.

### Item verdicts (H.3.a)

| Item | Verdict | Item | Verdict |
|---|---|---|---|
| C01, C02, C03 | ACCEPT | C09 | ACCEPT |
| C04 | ACCEPT (S-H2) | C10 | ACCEPT (S-H1) |
| P4 | ACCEPT | C11 | ACCEPT (S-H4) |
| C05 | ACCEPT (S-H6) | C12 | **CHANGES REQUIRED (M-H2)** |
| C06 | **CHANGES REQUIRED (M-H1)** | C13 | ACCEPT |
| C07, C08 | ACCEPT | P5 | ACCEPT |
| Similar | ACCEPT except S07 (M-H1), S13 (M-H2), S03 (S-H6), S04 (S-H2) | Together, Test | ACCEPT (S-H6) |

**Lesson verdict: CHANGES REQUIRED** (M-H1, M-H2).

## 7. Phonics decisions asked for in the brief

**Is "y as a vowel" a standards gap in 4.a?** Decision: **not a gap in the standard, a gap in coverage (SHOULD).**
- The official wording does not enumerate graphemes; it says "graphemes that represent multiple letter-sound correspondences", and `plain` in standards.js gives ea as the example. Nothing in the wording demands y.
- Y is a textbook multi-sound grapheme. Reading Universe: y at the end of a one-syllable word says long i (by, fly); at the end of a multisyllabic word it says long e (baby, candy) (https://readinguniverse.org/skill-explainer/phonics-patterns/y-as-a-vowel-skill-explainer/explicitly-teaching-y-as-a-vowel). The lesson title is "Letters that can make more than one sound".
- The lesson already depends on y without teaching it: Teach says c and g are soft before "e, i or y" and uses fancy, gym, city. 4.b uses tiny, baby, sky, puppy and butterfly. The Reading Rockets six-types article does not cover y in open syllables, only y inside vowel teams (ey, ay, oy, uy) (https://www.readingrockets.org/topics/spelling-and-word-study/articles/six-syllable-types), so the gap is real in the syllable lessons too.
- **Fix:** add one Teach point to 4.a (y says long i at the end of one-syllable words, long e at the end of longer words) and two items, or log it in the matrix as "y as a vowel: not covered, planned in lesson X". Two items would raise the core past 15; swap two.

**great / steak / break as Teach words.** Verified: ea says long a in only a handful of common words, "steak and great" (Orchids International: https://www.orchidsinternationalschool.com/english-concepts/ea-words), and the same page lists break. Using them is accurate. S01 (key great) is recall; C01 (key break) is transfer (N-A1). Fine.

**Soft c / soft g rule, get/give/girl exceptions.** My search returned the Reading Universe overview page title (https://readinguniverse.org/skill-explainer/phonics-patterns/soft-c-and-soft-g-skill-explainer/an-overview-of-soft-c-and-soft-g) but I did not read its text, so I could not verify the specific exception list. The claims in Teach (c and g soft before e, i, y; get, give and girl keep hard g; gift is hard in T4) are standard and I have no counter-evidence. **Unverified by fetch.**

**ough variants (tough, though, through; thought, rough, cough, dough).** I did not fetch a source; these are standard pronunciations. **Unverified by fetch.** All keys I solved are consistent with them.

## 8. Fact and source log

| Claim | Source | Result |
|---|---|---|
| ea long a only in great, steak, break (and archaic yea) | https://www.orchidsinternationalschool.com/english-concepts/ea-words | Verified |
| broom has two pronunciations, ˈbrüm and ˈbru̇m | https://www.merriam-webster.com/dictionary/Broom | Verified (basis of M-A2) |
| pock-et syllabification | https://www.merriam-webster.com/dictionary/pocket | Verified (basis of M-B1) |
| co-bra syllabification | https://www.ahdictionary.com/word/search.html?q=cobra (search result title only; the Merriam-Webster page was not on the fetch allowlist) | Partial (basis of M-B2) |
| digraphs and blends are not split (VCCCV); plain VCCV breaks between the consonants | https://readinguniverse.org/skill-explainer/multisyllable-words/multisyllabic-words-skill-explainer/teaching-how-to-read-multisyllabic-words-with-other-syllable-types | Verified |
| six syllable types; y appears only in vowel teams | https://www.readingrockets.org/topics/spelling-and-word-study/articles/six-syllable-types | Verified |
| y as a vowel: long i (one syllable), long e (multisyllabic) | https://readinguniverse.org/skill-explainer/phonics-patterns/y-as-a-vowel-skill-explainer/explicitly-teaching-y-as-a-vowel | Verified |
| Playwrite US Trad follows Zaner-Bloser and D'Nealian models; mixed capitals | https://fontsource.org/fonts/playwrite-us-trad/about | Verified |
| Capitals not like print: G, Q, S, T; Z similar to lowercase; letter groups k-r-s, x-q-z, e-l-f | https://legacyd7.lwtears.com/sites/default/files/Cursive_Letter_Group_Posters_10162018.pdf | Verified (HWT model) |
| capitals P, V, W, X cannot connect without a pencil lift | https://www.donnayoung.org/penmanship/cursive-capitals.htm | Verified for P, W; says nothing about T or O (see N-X2) |
| wh-questions normally fall at the end | https://opentext.ku.edu/amenglishpronunciation/chapter/intonation-and-prosody | Verified (the rising yes/no pattern is explained only in an image on that page, so I did not verify it from text) |
| 95% accuracy is a traditional criterion, called unsupported by Shanahan | https://www.readingrockets.org/blogs/shanahan-on-literacy/new-evidence-teaching-reading-frustration-levels | Verified (basis of S-E3) |
| soft c / soft g exceptions; ough variants | (not fetched) | Unverified |

## 9. The six coreException sequences

Checks: is it substantive (not three renamed copies), justified per plan 04 section 2 and practice-exceptions.json, honest about what an adult can observe, age-appropriate, and does it deliver what the matrix row promises. Common to all six: `coreException` has **no UI consumer**; only `verification/check-content.js` reads it (lines 309 to 314). The sequences are, today, data a parent never sees. That is a NOTE for the lead, not a fault of the author, but "Show Me" in the app must surface them before the exception is real (N-X1). The rationale text in each is honest about why selected response cannot test the skill. The "existing supporting items stay" counts are right (1.a: 7 practice, 1.d: 5 practice, no `core` on either).

### 3.F.F.1.a Sight words: ACCEPT (SHOULDs)

Substantive: three rounds go from isolated words to phrases to unseen sentences, each with a numeric criterion (16 of 20, 8 of 10, no more than one stop per sentence), which matches "in isolation and context" in the standard. Age-appropriate.
- **S-E1.** The standard says "regularly and irregularly spelled words" and the matrix lists "irregular sight words" and look-alike words (was / saw). Round 1 says "twenty words the reader has learned, such as words from this week's lessons", with no requirement for irregular words and nothing for look-alikes. Fix: "Include at least eight words that are not spelled the way they sound (said, was, once, enough), and two look-alike pairs (was / saw, from / form)."
- **S-E2.** "Quick" is not defined, and the matrix says "about one second, no sounding out". Fix: "quick means said within about one second without sounding it out".

### 3.F.F.1.b Reading accurately: ACCEPT (SHOULDs)

Substantive: three dated readings, story, information, poem, with a count and a retell or a word-parts question; matches the matrix (95%, varied texts, word parts, retell).
- **S-E3.** The 95% figure is presented as the line for "a good fit" and as a pass checklist ("at least 95 of every 100 words"). Shanahan calls the 95% (and 90%) cut-offs unsupported by evidence (see section 8). Fix: call it a rough guide ("many teachers use about 19 of 20"), and do not make it a pass mark. Teach point 4 and the matrix row have the same wording.
- **S-E4.** Reading 3 compares "the three dated readings" for fewer mistakes, but they are a story, a fact text and a poem of different difficulty and length, so the counts are not comparable. Fix: compare by mistakes per 100 words, and say that a poem may be harder.
- **N-E1.** The plan says "three dated **timed** readings"; the author wrote untimed readings. For accuracy that is better, so keep, and fix the plan wording.

### 3.F.F.1.c Reading smoothly with expression: ACCEPT (SHOULD)

Substantive: pause at marks, question and exclamation, character voices; each has a performer step.
- **S-E5.** Round 2 checklist: "The reader's voice went up on questions." wh-questions normally fall at the end (https://opentext.ku.edu/amenglishpronunciation/chapter/intonation-and-prosody); "Where are you going?" is read with a falling voice. A grown-up following the checklist will mark a correct reading wrong. Fix: "went up on yes/no questions such as 'Are you coming?'" and add that "Where..." questions usually go down.
- **N-E2.** The matrix lists "comprehension after oral reading"; only Round 3 asks about feelings. Add a one-line retell to Round 1 or 2.

### 3.F.F.1.d Self-correction: CHANGES REQUIRED

**M-E1. The sequence contradicts itself and drops the silent half of the standard.**
- **Evidence 1:** Round 1 checklist: "The grown-up did not give the word." Round 3: "Compare the logs: are there more self-fixes and fewer words the grown-up had to give?" If the grown-up never gives a word, there is nothing to compare. A parent cannot do both.
- **Evidence 2:** the standard (standards.js, official): "Self-correct while reading grade-level text **(silently or aloud)**". The rationale says "A child's own self-correction happens only while reading aloud". The matrix row lists "silent self-correction [adult-observed]". No task observes silent reading.
- **Fix:** Round 1: wait about five seconds, then give the word and mark it "told". Round 3: compare "told" with "self-fixed". Add a silent step: after the reader reads a passage silently, ask them to point to one spot where they went back and say what they fixed; record it in the log. Rewrite the rationale to say aloud reading is the easiest to observe, and silent self-correction is checked by the retell step.
- The "fix-up" vocabulary (reread, sound it out in parts, find a base word, think about what makes sense) matches the lesson. The 3-round structure is substantive.

### 3.F.H.4.a Writing cursive letters and joins: ACCEPT (SHOULD/NOTE)

Substantive: stroke families, joins, capitals, with a trace-then-write order; the Teach text lists the same families (a, c, d, g, o, q) and the capital rule. The checklist is observable ("sits on the line", "closed", "tall letters touch the top line"). Age-appropriate (name and place name for capitals).
- **S-E6.** Session 3: "Capitals that do not join were left unjoined." The lesson says "Some capitals, like T, W, O and P, do not join" but never gives the grown-up a list to check against. I could verify only P and W not joining without a pencil lift (https://www.donnayoung.org/penmanship/cursive-capitals.htm); T and O were not verified, and the page notes that other capitals can be altered to join. Letter-family groupings also differ between programs: Handwriting Without Tears files q with x and z, not with c-a-d-g-o. Fix: give the list the lesson means ("T, W, O, P do not join in this font and model") and say "follow your school's model if different".
- **N-X2.** Matrix: "connectors inside words" are covered in Session 2, but the checklist item "Joins started from the right height" gives a parent nothing to check against. Point at Teach (b, o, v, w end with a swing at the middle line).

### 3.F.H.4.b Spacing in cursive: ACCEPT (NOTE)

Substantive: short sentence, longer sentence (eight words, planning space), two sentences with self-check and comparison; the checklist is observable and matches Teach ("about the width of an o" vs "one small letter"; fine).
- **N-E3.** Session 1 checklist includes "Each sentence started with a capital and ended with a mark". That is not spacing; keep as a bonus or move it. The matrix also lists "joined letters inside a word [adult-observed]"; the only mention is "No letters ran into the next word" (Session 2). Add one joined-letters check.
- **N-E4.** "Dictated sentence" is the plan's wording, and the author followed it. With no UI consumer (N-X1), the child currently sees the Teach text and trace rows instead.

**N-X1. No UI consumer.** `coreException` is read only by `check-content.js`. Until the app shows it, the six sequences exist on paper: the child still sees only Teach, Watch Me, the trace rows and the adult check. This is not a B9 defect, but do not count the exceptions as delivered until the UI surfaces them.

## 10. STATUS.md and coverage matrix rows

- **STATUS.md** still reads `| B4-B9 | see 04-content-plan.md | NOT STARTED |`. Replace the B9 part with ten rows (four lessons, six exceptions). Suggested wording today: `NOT ACCEPTED: review 1 CHANGES REQUIRED (B9-review.md); awaiting fixes and second review` for the four lessons, and `NOT ACCEPTED: exception sequence authored; review 1 ACCEPT with SHOULDs (1.a, 1.b, 1.c, 4.a, 4.b), CHANGES REQUIRED (1.d)` for the exceptions.
- **Coverage matrix:** every B9 row already reads "AUTHORED (B9), NEEDS INDEPENDENT REVIEW. NOT ACCEPTED; ... two independent reviewers with blind solving before this row can be re-marked." That is correct: do **not** re-mark any row VERIFIED. Edits needed once fixes land: H.3.a `missing_or_partial_components` should say "one typeface only" (the missing-components column already says "one typeface only; no handwritten samples"; keep that); H.3.a "tricky letterforms ... modelled" should drop "modelled" unless S-H3 is done; 4.c "y to i" modelled likewise (S-C4); 3.F.F.1.d must keep "silent self-correction" only if M-E1 is done.

## 11. What the author got right

- All keys defensible; 157 of 158 blind agreement.
- Format, DOK, mc-cap and twin ceilings all met; twins are close to the ceiling but honest.
- Teach texts are short, concrete and grade-3 in tone; no kindergarten tone anywhere.
- The `why` and `how` texts match the keys in every item except M-B1, M-B2 and M-C1.
- The exceptions are honest about what they replace and keep the existing supporting items.

## 12. Fix list for the lead (shortest path to a second review)

1. 4.a C09: replace broom. C06, S14: rewrite hint 3 (names the key).
2. 4.b C04: pocket (how, why, Teach). S09: replace cobra. C12 and P7: rewrite hint 3.
3. 4.c S01: hint 3 and the stale why sentence.
4. H.3.a C06, S07: hint 3. C12, S13: hint 3.
5. 3.F.F.1.d: remove the contradiction, add the silent step.
6. Then the SHOULDs, in this order: leakage (S-A5, S-B6, S-H6), twin quality (S-A2, S-A3, S-A4, S-B1, S-B2, S-B3, S-C1, S-C2, S-H1, S-H2), Watch Me gaps (S-H3, S-C4), y as a vowel, font gap (S-H4), one cursive face (S-H5), and the exception SHOULDs (S-E1 to S-E6).

Re-run after the fixes: twin Jaccard (the five near-ceiling pairs), the ladder audit on every changed hint, and the blind solve on every changed item. A second reviewer must solve blind before any row is marked accepted.

## N-1 to N-4 (shared notes)

- **N-1.** Twin hints are copied verbatim in many pairs (section 2.4). Acceptable when the twin has the same structure and the hint does not name a key. Where it does (C06/S07 in 4.a and H.3.a), fix both.
- **N-2.** Matrix 4.a says oo and ou are "taught+adult-observed". C09 to C11 and S10 to S12 assess them, so the matrix understates; update to "taught+practised+assessed" or drop the items.
- **N-3.** The author log reports "single-key unique-longest 23% / 30% / 25% / 13%". My counts (section 2.3) use a different base (mc items only, by character length), so the percentages do not line up. I did not reconcile them; the only longest-key cue I would act on is S-H7.
- **N-4.** Word repeats inside a lesson (bread, before, again, misuse) are lesson vocabulary, not twins.

---

## Second review (B9)

**Role:** independent content reviewer 2 (fresh eyes; I wrote nothing in B9 and did not take part in review 1).
**Read-only:** I changed no lesson, code or data file and ran no git. This section is the only thing I wrote. My frozen-copy server (port 8871, pid 735) was killed after the review.
**Order of work:** blind solve and saved answers first, then keys, then the author log and the first review above.
**Scratch work:** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b9rev2/` (blind.js, blind2.js, myans-*.SAVED.txt, cmp.js, dump-*.txt, ana1-5.js, ui.py, gal.py, shots/).

### S0. Verdicts at a glance

| Lesson / sequence | Verdict | Open MUST |
|---|---|---|
| 3.F.P.4.a Letters that can make more than one sound | **CHANGES REQUIRED** (small) | M2-A1 |
| 3.F.P.4.b Syllable types | **CHANGES REQUIRED** | M2-B1 (wrong key), M2-B2 |
| 3.F.P.4.c Prefixes and suffixes | **CHANGES REQUIRED** (small) | M2-C1 |
| 3.F.H.3.a Reading cursive | **CHANGES REQUIRED** | M2-H1 |
| 3.F.F.1.a exception | **ACCEPT** | none |
| 3.F.F.1.b exception | **ACCEPT** | none |
| 3.F.F.1.c exception | **ACCEPT** | none |
| 3.F.F.1.d exception | **ACCEPT** (M-E1 fixed) | none |
| 3.F.H.4.a exception | **ACCEPT** | none |
| 3.F.H.4.b exception | **ACCEPT** | none |

The most important result: **a blind solve with 158 of 158 agreement still hid a wrong key** (4.b S04). Agreement with keys proves the items are solvable, not that they are right. The key was only caught by checking every word's syllable division in a dictionary.

### S1. Blind solve (integrity statement)

- All 120 core and similar items, 18 Together items and 20 form A test items (158 in all) were printed by a Node `vm` loader with `correct`, `answer`, `why`, hints, `how` and `misconception` stripped and choices shuffled. Cursive stems were printed as plain text, so I did not test the font in the blind pass (that was checked separately in S6).
- Answers were saved to `myans-*.SAVED.txt` before any key was shown. **Agreement: 158 of 158.** I did not read the author log or review 1 until after that.
- Merit check beyond agreement: M2-B1 (S04 key wrong), and the weaker items listed in S3 to S6.

### S2. Cross-cutting checks

**Twin Jaccard** (stimulus text: prompt, stem, choices, slots, rows, steps; 60 pairs). Ceiling 0.21, MUST at 0.30.

| Lesson | Worst pair | Word set | Multiset |
|---|---|---|---|
| 4.a | S13 ~ C12 | 0.186 | 0.181 |
| 4.b | S03 ~ C03 / S07 ~ C07 | 0.200 | 0.189 / 0.152 |
| 4.c | S04 ~ C04 | 0.207 | 0.200 |
| H.3.a | S13 ~ C12 | 0.206 | 0.206 |

Maximum over all 60 pairs: set 0.208, multiset 0.206. **All pass.** The author log figures match mine. (Twin pairs inside one item list that repeat a whole item, e.g. H.3.a C08 ~ P3, are a separate within-set issue, S-H-dup below.)

**Longest key.** No lesson has a systematic longest-key tell. Unique-longest mc keys: 4.a 1 of 4 core, 4.b 2 of 4, 4.c 2 of 4, H.3.a 0 of 6. Choose-two items where both keys are the longest: 4.b P6, 4.b S14, 4.b T4, H.3.a S05, H.3.a T4 (each 5 or 6 letters, ties, not decisive). **The log claim "choose-two both-longest: 0 everywhere" is not true of the files** (the five above), and its percentages (23, 22, 28, 6) do not reproduce on any base I tried. Neither is harmful. Both are log-accuracy flags.

**Duplicate scan, all of js/data including test keys.**
- No multi-word key equals another lesson's test or set key (0 hits).
- Cross-lesson near-duplicate stems: 4.c S01 ~ 3.T.T.1.e S01 ("pick the word that fits each"), 4.c T3 ~ 3.L.GC.1 T5 ("which is the correct way to..."). Generic frames, NOTE only.
- **Within the lesson, key equals a Together or test key:** 4.a S14 key "fence" = test T6 key (MUST, M2-A1). 4.a S15 "head" = Together P1 key (SHOULD). 4.b C07 "closed", C11 "consonant le" and S07 "r controlled" repeat keys of T3 and P2 (matching a syllable type name is unavoidable, NOTE). H.3.a S14 key "Friday" repeats the word in test T3 (SHOULD).

**Ladder (hints 1 to 3), live choices recounted for every item.** The engine removes no choices mechanically (no item uses hintNarrow), so I counted what hint wording leaves open. Of 120 items, the following fail:
- 4.b C01 hint 3 gives the count (M2-B2).
- 4.c S03 and S05 hint 3 give a test that misleads (M2-C1).
- Near-narrowing, SHOULD: 4.b C07 h3; 4.b C12 and P7 h3 (two choices left); H.3.a C06 h3 ("living thing" also fits grass); H.3.a C12 and S13 h3 echo the key's wording.

### S3. 3.F.P.4.a: CHANGES REQUIRED (one MUST)

**M2-A1 (leak and repeat key). S14 key "fence" equals test T6 key "fence".** A learner who sees S14 in practice and then T6 in the test is answering from memory. Fix: change S14's word (for example "face" or "dance"), keep T6.

SHOULD
- **S-A1.** P6 hint 2 says one word has no c, but all four words contain c. False. Fix: "listen for the sound c makes in each word".
- **S-A2.** S15 / P1 share the key "head" and a head collides with the Watch Me example. Replace S15's key with another short-e ea word (bread is already C-material; use "spread" or "weather").
- **S-A3.** The log says Teach was changed to add a y-as-a-vowel point; it is present and the items do not contradict it (checked: no 4.a item has y as a vowel in its key).

Item verdicts: all items ACCEPT except S14 (CHANGES REQUIRED, M2-A1); P6 and S15 ACCEPT after SHOULD.

### S4. 3.F.P.4.b: CHANGES REQUIRED (two MUSTs)

**M2-B1 (wrong key). S04 key "co / ver" is wrong.** Merriam-Webster divides cover as cov·er, pronounced ˈkə-vər (https://www.merriam-webster.com/dictionary/cover). The first vowel is short, so the open split "co / ver" is not what the dictionary says, and the word is one of the standard exceptions to the open-syllable rule. A child who splits cov / er is correct. Fix: replace the word with a regular open-syllable word (pi·lot, ba·con, po·ny, mu·sic are all confirmed open below), and update how, why and hints.

**M2-B2. C01 hint 3 gives the count of the key** instead of a scaffold. Fix: replace with a location hint that does not state how many syllables or choices remain.

SHOULD
- **S-B1.** S11 labels drift from the Teach terms ("vowel pair" vs "vowel team"). Use the Teach terms exactly.
- **S-B2.** S13 asks for the "middle letter" of frozen; frozen has a middle that depends on counting (fro·zen). Reword to "which letter ends the first syllable".
- **S-B3.** C07 h3 and C12 / P7 h3 each leave two live choices after hint 3 and come close to naming the key; tighten to leave three.
- **S-B4.** The log says ribbon is now rib / bon. Verified: C04 uses ribbon (rib·bon), and the how and why are consistent with the Teach rule on two separate consonants. Earlier M-B1 genuinely fixed.

**Syllable verification (dictionary, not pyphen).** Merriam-Webster headwords, each fetched by me:
- Sep·tem·ber (https://www.merriam-webster.com/dictionary/September)
- nap·kin (https://www.merriam-webster.com/dictionary/napkin)
- peb·ble (https://www.merriam-webster.com/dictionary/pebble)
- po·ny (https://www.merriam-webster.com/dictionary/pony)
- in·sect (https://www.merriam-webster.com/dictionary/insect)
- gar·den (https://www.merriam-webster.com/dictionary/garden)
- ba·con (https://www.merriam-webster.com/dictionary/bacon)
- mar·ble (https://www.merriam-webster.com/dictionary/marble)
- pi·lot (https://www.merriam-webster.com/dictionary/pilot)
- cam·el (https://www.merriam-webster.com/dictionary/camel)
- cup·cake (https://www.merriam-webster.com/dictionary/cupcake)
- cov·er: contradicts the key (above)

**Not verified by me in a dictionary:** seven, paper, hotel. The hotel page was blocked by robots, and I ran out of web calls for seven and paper. They are very regular (sev·en, pa·per, ho·tel) and I expect them to be right, but this review does not confirm them. The other 4.b words not listed above are common words whose division matched the lesson (rib·bon is covered by S-B4 under pyphen and the Teach rule). A third check should do these.

Item verdicts: S04 CHANGES REQUIRED; C01 CHANGES REQUIRED; the rest ACCEPT (with SHOULDs).

### S5. 3.F.P.4.c: CHANGES REQUIRED (one MUST)

**M2-C1. S03 how2 and h3 are wrong; S05 h3 has the same flaw.** S03 (the word unit): the hint says to cover "un" and look at what is left ("Nit is left"). Covering "un" in unit leaves "it", which is not the base word, because unit does not have the prefix un-. The test misleads a learner into thinking unit is "un + it". The lesson is meant to teach that the cover test only works if what is left is a real word with the meaning you expect. S05 (umbrella, starts "um") has the same flaw in h3. Fix: use the cover test only with real prefixes (undo, unfair), or add "then check: does the word still mean 'not' plus the rest?"

SHOULD
- **S-C1.** S15 `like` points at P7; it should point at C04 (the mis-, re-, pre- item).
- **S-C2.** C03 / P5 and C01 / C04 are near-duplicates within set 1 (same frame, same affix types). Swap one of each pair to another affix.
- **S-C3.** The Watch Me still does not model y to i; the log honestly moved the matrix wording to "not modelled". Keep that wording until Watch Me is extended.
- **S-C4.** Teach y-as-vowel point present (checked); no contradiction found.

Item verdicts: S03 and S05 CHANGES REQUIRED; all other items ACCEPT.

### S6. 3.F.H.3.a: CHANGES REQUIRED (one MUST)

**M2-H1. The hottext items print the answer options in plain text, so the cursive is never needed.** Items C03, C06, S03 and S07 show their options as ordinary type ("Choose ONE answer" with the words listed), and S04 prints the row words next to the cursive. A child can answer by reading the printed words and ignore the cursive stimulus. That defeats the standard (read cursive). Fix: render the cursive as the only place the word appears; options should be printed as letters (A, B, C) or as cursive tokens, not the same words in print.

SHOULD
- **S-H1.** S05 prompt says "Two foods" but lists three.
- **S-H2.** C06 h3 "living thing" includes grass.
- **S-H3.** C12 and S13 h3 echo the key (and the twin scores 0.206 set, the highest in the lesson).
- **S-H4.** C08 ~ P3 are near-duplicates within one set (Jaccard 0.41 on whole-item text). Replace one.
- **S-H5.** S14 / C11 use "Friday", which is also test T3's word.
- **S-H6.** Cursive rendering at 390x844 (Playwright screenshots, `shots/gal0-gal7.png`). Every word in every H.3.a stem was rendered with the PP Cursive face. Joins hold for all letters except after s: **s followed by d, o or other round letters shows a visible gap** in scooter, stack, snowmen, scarf, swim and sunny. The author log says only that it avoided s plus d or o, "I did not check other words on a phone". A child may read the gap as two words. Fix: avoid those words or add a short Teach line that "in this font s may leave a small gap".
- **S-H7.** Single cursive face ruling (plan: one face is acceptable if declared). The coverage matrix row says "two cursive renderings" is not met and the log says no second face exists. **Ruling: SHOULD, not a MUST,** because the plan allows a single face if it is recorded and the matrix says so. The matrix must keep "one typeface only; no handwritten samples" and must not claim "modelled" for letters the Watch Me does not model.
- **S-H8.** "Quail" replaced quiet as the S03 key (T4 key was quiet): confirmed in the file. Earlier M-H1 / M-H2 fixed.

Item verdicts: C03, C06, S03, S04, S07 CHANGES REQUIRED (M2-H1); C12, S13 ACCEPT after SHOULD; the rest ACCEPT.

### S7. Phonics decisions and web facts

Verified by me this round: Merriam-Webster headwords above. The author-cited sources for hard g before e or i (https://en.wikipedia.org/wiki/Hard_and_soft_G) and ough variants (https://en.wikipedia.org/wiki/Ough_(orthography)) are the same ones recorded in review 1 section 8; I did not re-fetch them. I did not independently re-verify soft c/g, ea long-a words or the y-as-a-vowel claim on the web in this round; I relied on review 1 section 7 and on the blind solve. State this plainly in any acceptance note.

### S8. The six coreException sequences (all read in full)

Each has kind, rationale and three tasks with title, how and a three-line checklist. All six ids are in `practice-exceptions.json` with matching kind and a shorter rationale (the longer rationale in the lesson is fine; the json is consumed by check-content). Substantive and honest: yes.

- **3.F.F.1.a ACCEPT.** S-E1 (eight irregular words, two look-alike pairs) and S-E2 (quick means about one second, no sounding out) are in the files. The rationale honestly says the seven practice items stay.
- **3.F.F.1.b ACCEPT.** S-E3 fixed: "about 19 right out of every 20 words as a rough guide ... It is a guide, not a pass mark." S-E4 fixed: compare by mistakes per 100 words and a poem may be harder. The Teach line and the timer text in F-FH.js were reported as changed or left; I did not find the 95 percent wording as a pass mark in the sequence. NOTE: the engine-facing timer copy that mentions "about 95%" was left (author log says so); it is existing copy, not part of this sequence.
- **3.F.F.1.c ACCEPT.** S-E5 fixed: yes/no questions rise, who/what/where/why questions fall, with "Are you coming?" as the model. The retell is added.
- **3.F.F.1.d ACCEPT; M-E1 genuinely fixed.** Round 1 now waits about five seconds, then marks self-fixed or told (no longer "the grown-up did not give the word"). Round 3 compares self-fixed and told, then adds a silent step (point to a spot where you went back, say what you fixed, record it as a silent fix) and a retell. The rationale now says aloud correction is easiest to observe and silent correction is checked by pointing. This matches the standard "silently or aloud". NOTE: kind is "observation" while the other five are "performance"; check-content accepted it (log says PASS) and the json matches, so no change needed.
- **3.F.H.4.a ACCEPT.** S-E6 fixed: the capitals T, W, O and P are named and "follow your school's model if it is different" is added; the b, o, v, w swing point is in Session 2. NOTE: review 1 could verify only P and W as non-joining; T and O are still not verified by me. The sequence is honest because it says "in this model" and defers to the school.
- **3.F.H.4.b ACCEPT.** Joined letters check is added to Session 1. NOTE: no cursive example is shown to the grown-up; the sequence relies on the school's model.
- NOTE (shared): `coreException` has no UI consumer yet, so none of these six is visible to a learner or parent. They are honest on paper, but until a consumer exists the standards they cover have only the supporting practice items in front of the child.

### S9. Confirming the earlier MUSTs against the files (not the log)

| Review 1 MUST | Fixed in the files? |
|---|---|
| M-A1 (C06 / S14 hint 3 quotes key) | Yes (hints no longer quote). But S14 now has a new problem, M2-A1. |
| M-A2 (broom ambiguous) | Yes, C09 uses spoon. |
| M-A3 | Yes. |
| M-B1 (ribbon) | Yes, rib / bon, how and why rewritten. |
| M-B2 (cobra) | Yes, S09 uses robot. |
| M-B3 (C12 / P7 h3) | Partly: now rules out one distractor but still near-narrows (S-B3). |
| M-C1 | Yes, S01 and C01 h3 no longer name a key; stale "pre-" removed. |
| M-H1 / M-H2 | Yes for the hints and keys listed; the new problem is M2-H1. |
| M-E1 | Yes (S8). |

### S10. Author-log claims that are not true of the files

1. "Choose-two both-longest: 0 everywhere." False: 4.b P6, S14, T4 and H.3.a S05, T4 tie as longest (S2).
2. "Single-key unique-longest 23 / 22 / 28 / 6 percent." Not reproducible on any base I tried (S2). Not harmful.
3. "Keys rechecked with ckms.js after every edit." The 4.b S04 key is still wrong (M2-B1), so the check is not a guarantee of correctness.
4. "Teach: removed 'girl' from the get/give hard-g line." True. But the claim that hint ladders no longer narrow is false for 4.b C07, C12 and P7.
5. "I did not check other words on a phone" is honest, and the answer is that several s words have visible gaps (S-H6).
6. The log is silent on the 4.a S14 and T6 repeat, and on the printed hottext options in H.3.a.

### S11. Fix list for the lead (shortest path to acceptance)

1. 4.b S04: replace cover with a regular open-syllable word; update how, why and hints (M2-B1).
2. 4.b C01 h3: remove the count (M2-B2).
3. 4.c S03 and S05: fix how2 and h3 so the cover test only uses real prefixes (M2-C1).
4. 4.a S14: change the key so it is not "fence" (M2-A1).
5. H.3.a C03, C06, S03, S04, S07: stop printing the answer words next to the cursive (M2-H1).
6. Then the SHOULDs: 4.a P6 h2 and S15; 4.b S11, S13, C07, C12, P7; 4.c S15 `like`, C03 / P5, C01 / C04; H.3.a S05, C06, C12, S13, C08 ~ P3, S14, the s gap, and the single-face note.
7. A third check should confirm seven, paper and hotel in a dictionary, and the phonics claims I relied on from review 1.
8. After the fixes: rerun the twin Jaccard on any changed item and the ladder check on any changed hint, and re-solve changed items blind. No coverage matrix row may be marked VERIFIED yet. This review plus review 1 is the two-review requirement, but both found MUSTs, so every row needs a clean re-check.

### S12. Notes for memory

- A 158-of-158 blind solve does not prove keys right. Dictionary syllable checks found a wrong key (cover) that every solver would accept.
- Hottext items that print the answer words defeat a cursive-reading standard.

---

# Third review (independent, fresh eyes)

Reviewer: third reviewer. I did not write or earlier-review this content. Scope: 3.F.P.4.a, 3.F.P.4.b, 3.F.P.4.c, 3.F.H.3.a and the six coreException sequences (3.F.F.1.a, 3.F.F.1.d, 3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b). Frozen copy at /home/claude/pp-content. Read-only apart from this section. A local server was used for rendering and has been stopped by pid.

## T1. Blind solve

- Method: items loaded in Node through a vm stub, keys, why, hints, how and clue stripped, choices shuffled with a seeded permutation, answers saved to a file before any key was extracted. I did not open the author log or the earlier reviews until after the answers were saved.
- Result: 134 of 134 scored answers agree with the keys. The solve was fully blind for 4.a, 4.b and 4.c.
- Caveat for H.3.a: the Node dump prints the cursive as plain text, because the data stores it as plain text. So that solve proves only that the keys are self-consistent. It does not prove a child must read cursive. I tested that separately in T6 and it fails for several items.
- A perfect match does not show keys are right. T2 and T3 are the real correctness checks.

## T2. Dictionary check (Merriam-Webster, via WebSearch then WebFetch)

Every syllable division in 4.b and every phonics key I could reach was checked at https://www.merriam-webster.com/dictionary/<word>. Pages reached include: baby, bacon, basin, banana, bottle, bubble, cabinet, cactus, camel, cancel, candle, carpet, cattle, channel, chipmunk, cover, dragon, feather, garden, gather, giraffe, giggle, goose, handle, heavy, hinge, insect, jungle, kangaroo, kennel, kettle, kitchen, kitten, lemon, limit, magnet, mailbox, marble, melon, middle, cough, dough, deaf, bread, break, cliff, cocoa, coupon, cougar, crowd, flower, September, apple and others from the 4.b and 4.c lists.

- No syllable key is wrong. The cover problem from review 2 is gone (S04 now uses bacon, ba / con, which MW confirms).
- Not reached (the search never surfaced a fetchable page, so these rest on common knowledge and on the item's own internal consistency): health, orange, stage, page, dream, beans, reach, cheap, speak, mean, seat, clean, head, beach. All are very common words with no dispute. I did not verify them in a dictionary. Please treat them as unverified.
- Rule claims checked on the web: six syllable types, https://www.readingrockets.org/topics/spelling-and-word-study/articles/six-syllable-types (closed, open, vowel-consonant-e, vowel team, r-controlled, consonant-le). The VCCV split between two consonants and the V/CV split with a long first vowel are the normal teaching rule, with exceptions that the items avoid by using only words whose MW division matches.

## T3. Standards and wording

Official wording in js/data/standards.js was compared with the item types. 4.a, 4.b and 4.c items are on the stated skill. H.3.a items are on "read cursive" in wording but not always in demand (T6).

## T4. Hint ladder, live choices, longest key, keyed text

- Live choices after hints 1, 2 and 3 were recounted for every item. A hint 3 that narrows to the key, or that hands over the split, counts as a MUST.
- Longest key: single-key items with a strictly longest key are few and in most cases the lengths differ by one letter (for example 4.b S12 kitten 6 vs 5, H.3.a S07 aunt 4 vs 3). I rate none of those a defect. Ties on choose-two were checked separately: every choose-two key is either a tie or not both strictly longest. The author-log claim "0 everywhere" is not what I measure (see T9), but I found no choose-two item where both keys are the two longest by a clear margin.
- Keyed text against why, how and hints: one item refers to a word that is not in the item (4.b P6, below). Everything else is consistent.

## T5. Twins, duplicates

Twin whole-text Jaccard, same definition the author's figures reproduce with (letters-only tokens on the visible text):

| Lesson | Max twin (letters only) | Item |
|---|---|---|
| 3.F.P.4.a | 0.186 | S13 |
| 3.F.P.4.b | 0.200 | S03 |
| 3.F.P.4.c | 0.207 | S04 |
| 3.F.H.3.a | 0.208 | S06 |

All are at or under the 0.21 ceiling. Under a hyphen-splitting tokenizer 4.b S07 is 0.250 and 4.c S09 and H.3.a S03 are 0.226. That is a different counting rule, so I only note it. With hints and why included the figures are 0.64 to 0.74, which is expected because the templates repeat. Nothing is at 0.30.

Duplicate scan over all 3034 items in js/data (158 in B9), including test keys:
- Test items T are paired with practice items P at 0.47 to 0.68 similarity: H.3.a P2/T2 0.47, 4.b P4/T5 0.50, 4.c P1/T1 0.53, P3/T3 0.50, P4/T4 0.68. These are deliberate form pairs. 4.c P4/T4 (0.68, same match shape, same frame, different words) is closest to a re-skin. SHOULD (S-T1).
- Cross-lesson: 4.c C04 against L-VOC-02-2 in js/data/sets/L-VOC-02.js scores 0.48. SHOULD (S-T2).
- Same-prompt hits are generic stems ("read the cursive sentence", "choose the word that is spelled correctly") with different content. NOTE.

## T6. 3.F.H.3.a rendering and cursive-reading demand (390 x 844)

I rendered every cursive item on the real route (#skill/3.F.H.3.a/try) and checked each as a screenshot, plus component analysis of the glyph joins.

- Font: PP Cursive (Playwrite US Trad) at css/styles.css, with word-spacing .3em. One face is used for every cursive stem, the Learn It example and the Watch Me example. Ruling: a single cursive face is acceptable and correct. Add one line to the teaching note saying that it is one model and that a child's school model may differ (SHOULD S-H5, because H.4.a already says "follow your school's model" and H.3.a should match).
- Readability: letters join, the line wraps without breaking a word, and long stems stay inside the 16 px gutters. No horizontal scroll at 390 px.
- Gap: the letter s leaves a visible break in several words (the join after s is thin or open). It is readable but it can look like two words. This is not disclosed to the grown-up. SHOULD (S-H6): either say it in the teaching note, or choose words and lines where the break cannot mimic a space.
- Plain-text leaks (the child does not need to read the cursive): MUST M3-H1 below.

## T7. Earlier MUSTs

I checked the files, not the log. The review 2 MUSTs are genuinely fixed: 4.b S04 now uses bacon (M2-B1), 4.b C01 h3 no longer gives the count (M2-B2), 4.c S03 and S05 now cover-test only real prefixes (M2-C1), and the 4.a S14 key is no longer "fence" (M2-A1). M2-H1 (answer words printed next to cursive) is fixed only in part. C03, C06, S03, S04 and S07 no longer print the answer word list as plain text, but dropdown options still print the exact candidate words, and match columns still print the exact answers (see M3-H1). The review 1 MUSTs listed in S9 of the second review are also fixed.

## T8. Findings

### MUST

- M3-B1 (3.F.P.4.b, C04 and S04, hint 3). H3 of C04 says "For basin, try splitting before the s first" and H3 of S04 says "For bacon, try splitting before the c first." That hands over the split for the one-consonant word, which is the key. It also leaves one live option for slot 1. Fix: H3 should say "Say each choice out loud. A part that cannot be a word on its own is wrong." Same for both items, and update the how text if it echoes the split.
- M3-B2 (3.F.P.4.b, C05 and S05). The question is "which word has an r-controlled syllable" and the choice set has only one word with an r in it (morning, carpet). A child can answer by spotting the letter r with no syllable knowledge, which the item's own misconception line warns against. Fix: add a distractor with r that is not r-controlled in its syllables (for example a word with r after a consonant like "pretzel" or "tablet" is no good; use "robot" or "parade", where r starts a syllable), and make the key's r follow its vowel in a syllable.
- M3-B3 (3.F.P.4.b, P6 addon). The addon hint 3 and the how both refer to "tunnel", which is not among P6's choices (bubble, turtle, channel, travel, sunset). A child sees a hint about a word that is not there. Fix: rewrite the addon h3 and how for P6 using channel and travel, or replace the addon.
- M3-H1 (3.F.H.3.a, S04, S12, S07, and the same weakness in C04, C03, C08). The child can answer without reading cursive.
  - S04 and C04: the four words are printed as plain match options and the clues are positional. "Sam" starts the sentence (a name), "took" follows, "eight" comes before "plates", "plates" ends. Grammar and the printed words give the order. Same for C04 (Nia ran home fast).
  - S12: the four plans are printed in plain text and each season has an obvious plan (spring: plant seeds, summer: go camping, autumn: rake leaves, winter: build snowmen). The cursive adds nothing.
  - S07: the choices differ by meaning (aunt/ant/art, purple/people/purse) and the plain-text sentence frame "My ___ knits a ___ scarf every winter" makes aunt and purple the only sensible choices.
  - C03 and C08: same pattern, where the printed frame or the sensible meaning identifies the key.
  - Fix: use distractors that are all sensible in the frame (so the child must read letters), and for match items make the printed items only plausible if read from the cursive (for example sentences whose word order is not predictable, or distractor words that are in the line but in different positions).

### SHOULD

- S-A1 (3.F.P.4.a, P6 h2 and S15). Both leave only one plausible option after the hint; widen one distractor. Carried from review 2, and the 4.a S14 and T6 repeat is gone but P6/S15 still narrow.
- S-B4 (3.F.P.4.b, S11, S13, C07, C12, P7). The ladders still near-narrow on hint 3 (carried S-B3). Remove the word that eliminates a distractor.
- S-C1 (3.F.P.4.c, S15 like, C03 / P5, C01 / C04). Honest `like` mappings need work: S15 is mapped to an item with a different rule, and C03/P5 and C01/C04 teach the same rule with near-identical frames.
- S-T1 (4.c P4 and T4, 0.68). Change T4's frame so that it is not the same shape with different words.
- S-T2 (4.c C04 and L-VOC-02-2, 0.48). Rewrite C04's words or retire one of the two.
- S-H1 (3.F.H.3.a, S05, C06, C12, S13). Ties and near-ties in length favour the key. Equalise the distractor length.
- S-H2 (3.F.H.3.a, C08 and P3, S14). Near-twins. Change one stem.
- S-H5 (3.F.H.3.a). Add a single-model note to the grown-up text (see T6).
- S-H6 (3.F.H.3.a). The s-gap in the font is under-disclosed (see T6).

### NOTE

- N1. The Jaccard figures depend on the tokenizer. Under hyphen-splitting, 4.b S07 is 0.250, above the ceiling. Please state the tokenizer in the plan.
- N2. Unreached dictionary words (T2). Please confirm those 14 in a dictionary once.
- N3. Same-prompt hits among generic stems are fine.
- N4. I could not reproduce the log's "single-key unique-longest 23 / 22 / 28 / 6 percent." The measure is not harmful.

## T9. Author-log claims checked against the files

1. "Choose-two both-longest: 0 everywhere." Not what I measured in 4.b and H.3.a; several choose-two keys tie for longest with a distractor. Harmless, but the claim is overstated.
2. "Hints no longer narrow." False for 4.b C04 and S04 (M3-B1) and still partly for 4.b C07, C12 and P7.
3. "Keys rechecked after every edit." True for syllable keys as of this copy (T2), but the claim about hints does not follow from it.
4. "Answer words no longer printed beside the cursive." Only partly true (M3-H1).
5. The log is silent on P6's missing word, on C05/S05 r-spotting and on the s-gap.

## T10. coreException sequences

I read each sequence in full (kind, rationale, three tasks with how and checklists) and compared it with the lesson's teach text and its remaining practice items.

| Lesson | Kind | Honest? | Notes |
|---|---|---|---|
| 3.F.F.1.a Sight words | performance | Yes | Timing cannot be shown by selected-response. The 16 of 20 line and the 8 irregular words with 2 look-alike pairs match the how. The seven practice items stay as supports. |
| 3.F.F.1.d Self-correction | observation | Yes | Aloud work is observed, and silent self-correction is shown by pointing. The Round 3 comparison with Round 1 uses different passages, so it is a rough guide. NOTE only. |
| 3.F.F.1.b Reading accurately | performance | Yes | Dated readings of three kinds, with mistakes per 100 words so the different lengths compare fairly. The 19 of 20 figure is labelled a rough guide, not a pass mark. |
| 3.F.F.1.c Smoothness and expression | performance | Yes | Matches the teach text, including yes-or-no questions rising and who/what/where/why falling. |
| 3.F.H.4.a Cursive letters and joins | performance | Yes | Motor skill. The unjoined capitals T, W, O and P are marked as this model's rule and the grown-up is told to follow the school's model. |
| 3.F.H.4.b Cursive spacing | performance | Yes | The "width of an o" matches the Task 1 check ("one small letter"). |

No sequence replaces fifteen items with something thinner than the rationale says.

## T11. Verdicts

| Item / lesson | Verdict |
|---|---|
| 3.F.P.4.a | ACCEPT (with SHOULD S-A1) |
| 3.F.P.4.b | CHANGES REQUIRED (M3-B1, M3-B2, M3-B3) |
| 3.F.P.4.c | ACCEPT (with SHOULDs S-C1, S-T1, S-T2) |
| 3.F.H.3.a | CHANGES REQUIRED (M3-H1; also S-H5, S-H6) |
| 3.F.F.1.a | ACCEPT |
| 3.F.F.1.d | ACCEPT |
| 3.F.F.1.b | ACCEPT |
| 3.F.F.1.c | ACCEPT |
| 3.F.H.4.a | ACCEPT |
| 3.F.H.4.b | ACCEPT |

## T12. Fix list for the lead

1. 4.b C04 and S04 h3: remove the split-before-the-consonant steer (M3-B1).
2. 4.b C05 and S05: add an r distractor that is not r-controlled (M3-B2).
3. 4.b P6 addon: remove "tunnel" (M3-B3).
4. H.3.a S04, C04, S12, S07, C03, C08: rebuild so the cursive must be read (M3-H1). Re-solve changed items blind and rerun the twin Jaccard and the ladder count on every changed item.
5. Then the SHOULDs. Coverage rows for 4.b and H.3.a should not be marked VERIFIED until these are done.
6. Confirm the 14 unreached words in a dictionary.

## T13. Notes for memory

- A fully blind 134 of 134 solve still hides wrong keys and leaky items. The dictionary pass and the render pass found what the solve could not.
- Cursive items stored as plain text need a separate "does the child have to read it" test.


# Fourth review (independent, fresh eyes)

Reviewer: fourth reviewer. I did not write or earlier-review this content. Scope: 3.F.P.4.b and 3.F.H.3.a after the third fix pass (F-PF.js, F-FH.js, frozen copy at /home/claude/pp-content), plus a check that the wording-only edits to the ACCEPTED lessons 3.F.P.4.a and 3.F.P.4.c changed no keys. Read-only apart from this section. A local server (port 8795) was used for rendering at 390 x 844 and was stopped by pid. Scratch files are in the session scratchpad under b9rev4.

## F1. Verdicts at a glance

| Lesson | Verdict | Blocking finding |
|---|---|---|
| 3.F.P.4.b | ACCEPT (SHOULDs F-B1 to F-B5 recommended before STATUS) | none |
| 3.F.H.3.a | CHANGES REQUIRED (one MUST, M4-H1) | C08 can be answered without reading the cursive; the log says it was fixed |
| 3.F.P.4.a (wording edit S15 hint 3) | ACCEPT stands | keys unchanged; one NOTE (N-A1) |
| 3.F.P.4.c (wording edits C04, T4) | ACCEPT stands | keys unchanged; no testRev needed (F6) |

All three third-review MUSTs for 4.b (M3-B1, M3-B2, M3-B3) are genuinely fixed in the files. M3-H1 for H.3.a is fixed for C03, C04, S04, S07 and S12 (apart from the SHOULDs below) and is NOT fixed for C08.

## F2. Blind solve (integrity statement)

- Method: lessons loaded in Node through a vm stub. For every core item (refs resolved), similar, Together and test item I printed the prompt, stem or passage and the choices only, with choices, options, match columns and order steps shuffled by a seeded generator. Keys, why, hints, how, clue, misconception and `like` were stripped before printing. I wrote my answers to a file (ans-4b.txt, ans-3a.txt, copies saved as .SAVED.txt) and only then extracted keys and compared. I did not open the author log or any earlier review until after the answers were saved.
- Result: 78 of 78 scored items agree with the keys (4.b 40 of 40, H.3.a 38 of 38). A first compare run showed four hot-text mismatches that were my own comparison bug (hot-text keys are stored as indexes); after fixing the compare it is 78 of 78.
- Caveat for H.3.a: the Node dump prints the cursive as plain text, so this solve proves only that the keys are self-consistent. Whether the child must read cursive is tested separately in F5.
- A perfect agreement does not show the keys are right. F3 (dictionary) and F4 to F6 are the real checks.

## F3. Dictionary check (Merriam-Webster, pages fetched with WebFetch; WebSearch with allowed_domains returned the pages that WebFetch could not open directly)

Every 4.b syllable division was checked at https://www.merriam-webster.com/dictionary/<word>. All agree with the lesson. Pages reached:
- rib·bon, ba·sin, wag·on, plan·et, mu·sic, tu·lip, pen·cil, pock·et, mag·net, ba·con, lim·it, lem·on, mel·on, pu·pil, ro·bot, rob·in, sev·en, si·lent, riv·er, mo·tel, ti·ny, pa·per, ba·by, spi·der, rab·bit, mit·ten, win·ter, car·pet, cac·tus, kan·ga·roo, chim·pan·zee, to·ma·to, ba·na·na, but·ter·fly, kitch·en, farm·er, Sep·tem·ber, um·brel·la, re·mem·ber, fan·tas·tic, al·li·ga·tor, nap·kin, po·ny, pret·zel, ken·nel, tun·nel, ket·tle, cat·tle, chip·munk, pic·nic, pump·kin, sand·wich, morn·ing, mis·take, sea·weed, can·dle, pad·dle, star·fish, sun·shine, jun·gle, nee·dle.
- "going" (go·ing) was not on the allowlist; it is a plain inflected form and nothing depends on it. The earlier logs said morning was only on a counting site; MW has morn·ing, so that gap is closed.
- Previously unreached words (the 14 the third review asked for), all now checked, all consistent with how 4.a uses them:
  - health /ˈhelth/ short e (https://www.merriam-webster.com/dictionary/health)
  - head /ˈhed/ short e (https://www.merriam-webster.com/dictionary/head)
  - orange: MW gives ˈär(-ə)nj, chiefly Northern and Midland ˈȯr(-ə)nj; the g says j, which is all 4.a C08 claims (https://www.merriam-webster.com/dictionary/orange)
  - stage /ˈstāj/ and page /ˈpāj/, both soft g (MW also lists a separate kitchen-internship "stage" with ˈstäzh; not the sense used) (https://www.merriam-webster.com/dictionary/stage, https://www.merriam-webster.com/dictionary/page)
  - dream, reach, cheap, speak, mean, seat, clean, beach and bean(s) all have long e (ēm, ēch, ēp, ēk, ēn, ēt, ēn, ēch, ēn); MW lists mean (verb) and mean (unkind) both as ˈmēn. URLs: https://www.merriam-webster.com/dictionary/dream, /reach, /cheap, /speak, /mean, /seat, /clean, /beach, /bean.
  - 4.a keys that use them (P1, P5, T3, T4, S02, S05, C01, C02, C06, C08) are all correct.

## F4. Hint ladder, live choices, longest key, keyed text (every item)

Method: for each item I listed which printed options the three hints name or point at, then counted what is still live. A hint that names a choice to check counts as pointing away from it. No item uses `hintNarrow`, so the engine never crosses anything out on a hint.

Live choices after hint 3 (4.b, choice items): C01 4, C03 2 (banana, ate), C05 2 (morning, going), C06 4 of 5 (pick two), C08 2 (pocket, sky), C09 2 (pencil, lemon), C10 4, S01 2 (alligator, chimpanzee), S03 2 (tomato, stand), S05 2 (carpet, float), S06 4 of 5, S08 2 (winter, pupil), S09 2 (mitten, motel), S10 4, S14 3 of 5 (pick two), P3 2 (spider, candle), P6 3 of 5 (bubble, turtle, travel). Dropdowns: C04, C07, C12, S04, S07 leave all three live in each slot; S12 and S15 leave two live (the "ends like table" steer removes paddel and needel, the two that do not end in le). Match and order items: hints name at most one row or one step.
H.3.a: all mc items keep 4 live except C12 and S13 (2 live, see F-H4); dropdowns 3 and 3; matches name one row (Gwen, Jon).

- No hint 1 or hint 2 names or quotes a key. No hint 3 names a key. No item reduces to one explicitly. M3-B1 is fixed: 4.b C04 and S04 hint 3 are now the same neutral line and all three choices stay live.
- Ordering items pin positions cumulatively: 4.b C02 (hint 1 and 2 give step 1, hint 3 step 4), 4.b S02, H.3.a C07 and S08 (hints give steps 1, 2 and 4, leaving step 3 by elimination). No single hint does it, so this passes the ladder rule; NOTE N-B2.
- Longest key (mc, ms and every dropdown slot, core, similar, Together and test; choose-two ties counted):
  - 4.b: strictly longest key in 5 of 27 single-key groups (C01 three, C07 slot 2 vowel-consonant-e, C12 slot 1 pumpkin, S05 carpet, S12 slot 1 kitten). Two are number or label words and two are spelling items where the misspellings drop a letter, so the key must be longer. Choose-two: 0 of 5 where both keys are at least as long as the longest distractor. C10 key is the shortest of its four.
  - H.3.a: strictly longest in 3 of 39 (C02 Quinn, C09 shelf, S14 Wednesday), each by one letter. Choose-two: 0 of 3. Many ties on the four whole-sentence items, which is fine.
  - The author's counts (5 of 27, 0 of 5; 3 of 39, 0 of 3) reproduce exactly.
- Keyed text against why, how and hints: all 4.b keys match their why and how. H.3.a statements that are not true or do not discriminate: F-H3 below.

## F5. 3.F.H.3.a: can the item be answered without reading the cursive? (390 x 844, real route #skill/3.F.H.3.a/try)

Rendering: all 15 core items rendered; scrollWidth is 390 on every one (no horizontal scroll); the cursive block wraps at word boundaries inside the 16 px gutters; the two-column match cards and dropdown frames fit. PP Cursive (Playwrite US Trad) with word-spacing .3em is used for every stem, which matches Teach and Learn It. I captured every core cursive block at device scale 2 and read them: joins and the s-gap are readable (swim, Saturday, Sunday, scooter, keys, Tess all read cleanly); no word is split by a gap in this set. The capital Z looks like a tailed 3 and the capital T is close to J in this face. Both are named as tricky in Teach, so this is correct teaching, not a defect. The grown-up note now says one font is used, the school model may differ, and s can leave a small gap. That closes S-H5 and S-H6.

Test: I answered each item a second time using only what is printed outside the cursive block (prompt, frame, options), by meaning and by comparing options with each other.

Cannot be answered without reading (good): C01, C02, C03, C04, P4, C06, C09, C11, C13, P5, and in similar S01 to S05, S07, S10, S12 (apart from F-H5), S14. Name-to-thing matches C04, S04, S12 and the C11 schedule live only in the cursive.

Can be answered without reading:
- C08 (core, set 2): "Always knock before you open the door." Options: Knock before opening the door; Knock after opening the door; Look before opening the door; Knock before closing the door. Only the first is a sign anyone has seen, and it is also the option every other option differs from by one word. I picked it correctly with no cursive. See M4-H1.
- The hub effect (SHOULD F-H1): wherever the options are one-word edits of the key, the key is the only option within one edit of all the others. A script (centroid.js: word-level edit distance for sentences, letter-level for single words) finds the key as the unique hub in 14 of the 18 H.3.a mc items: core C01, C05, C08, C10; Together P1, P2; similar S06, S09, S11, S15; test T1, T2, T3, T5. That means four of the five items in check form A (T1, T2, T3, T5) can be answered by picking the hub. I did this by hand on the printed options for T1, T3 and T5 and it works every time.
- Strategy items C07, C12 (and S08, S13) have no cursive in them by design. They are answerable from common sense. Acceptable as two of fifteen.
- Within-set and cross-set leaks (F-H2). C02 (set 1) shares Quinn and red with C04 (set 1), and C04's rows print "Quinn" beside the cursive "Quinn: red cap". C11 (set 3) prints "Saturday" beside the cursive "Saturday: piano" and C13 (set 3) key is Saturday. Zoe is printed beside the cursive "Zoe: blue kite" in C04 (set 1) and is P5's key in set 3.
- S12 (similar): "Pop: corn soup" is a popcorn pun, so one of the four pairs is guessable from the names (F-H5).

## F6. Wording-only edits to the ACCEPTED lessons

I rebuilt the third-review dump script output for 4.a and 4.c from the current files and diffed every item field against the dumps taken at the third review (b9rev3/d4a.txt, d4c.txt).

- 4.a: exactly one field changed, S15 hints[2]. Old: "...which letters can spell the vowel in bed." New: "Think about what you do with jam on toast. Then say each spelling in the sentence." Slots (spread, spred, spreed, answer 0), points, dok, how and why are identical. Key unchanged. Hint 3 now names nothing and leaves all three live. P6's hint 2 ("Say each word and listen to the sound that c makes.") has no diff against the third-review dump, so that edit was made in the second pass as the log says; keys unchanged (slices).
- 4.c: C04 and T4 only. C04: columns are now re-, pre-, mis-; rows are again (0), before (1), wrongly (2), once more (0). The old mapping was rewind and regroup to re- (0), pretest to pre- (1), misjudge to mis- (2); the answer pattern 0, 1, 2, 0 and the three meanings are the same. T4: prompt reworded and row labels now "adding -ing to shine" and so on; columns unchanged; answers 0, 0, 1, 2, 2 unchanged. why is consistent. Keys and correctness are unchanged for both.
- Compatibility with assessment-versions: `node verification/check-content.js --all` exits PASS (0 failures, 87 warnings). The warning that matters is "11 check forms were edited in wording only since the record (same ids, points and keys): 3.F.H.3.a:A, 3.F.P.4.b:A, 3.F.P.4.c:A ... testRev stays; run --record-versions to refresh the hash". So T4 produces a warning, not a failure, and not a "material change without a new testRev" warning (the `mat` hash of ids, types, points and answer keys is unchanged). Opinion: T4 does not need a testRev bump. The question and construct are the same, the answer pattern is the same, difficulty if anything falls slightly because the row now states the operation; the saved attempts stay comparable, and the engine stores only ids, types and points in a review signature, so no "The questions have changed" message would appear. The coordinator should run --record-versions after the last edit to refresh the hash only. Bump testRev only if a key, point value or id changes. (Because 4.a and 4.c are in accepted.js, their check forms feed Review and the cumulative sets, so run --record-versions once, after the final edit, not before.)
- N-A1 (NOTE, accepted 4.a): S15 hint 2 says "Some of these are real words that mean something else." None of spred or spreed is a word, so the sentence is untrue for this item. Harmless to the key; change it to "Say each spelling in the sentence." when next touched.
- N-C1 (NOTE, accepted 4.c): C04 hint 3 ("a front part that means before") nearly restates the row label "before"; it still leaves all three columns live. No change required.

## F7. Third-review MUSTs checked against the files (not the log)

| Third-review finding | Status in the files |
|---|---|
| M3-B1 4.b C04 and S04 hint 3 hands over the split | FIXED. Both now read "Say each choice out loud. Ask which one gives parts you can say as real syllables." All three choices stay live. how still says "ba / sin" but how is the reveal. |
| M3-B2 4.b C05 and S05 r-spotting | FIXED. C05 choices morning, window, pretzel, going (pretzel has r before its vowel); S05 carpet, puppy, robot, float. how and why say the r comes before the vowel. Two of four choices now contain an r in each item. |
| M3-B3 4.b P6 addon names tunnel | FIXED. Hint 3 names channel and sunset; how names channel, travel and sunset; all three are among P6's choices. |
| M3-H1 H.3.a answers without reading | PARTLY FIXED. C03, C04, S04, S07, S12 rebuilt so the printed options all fit and the pairing is only in the cursive. C08 is not fixed (M4-H1). The hub effect (F-H1) was not addressed. |
| S-H5 single-model note; S-H6 s-gap | FIXED in the grown-up note. |
| S-A1, S-C1, S-T1, S-T2 | S-T1 and S-T2 addressed by the C04 and T4 rewording (4.c). Others were SHOULDs on accepted lessons and are not re-opened. |

## F8. Findings

### MUST

- M4-H1 (3.F.H.3.a, C08, set 2, core). The third review listed C08 under M3-H1 ("the sensible meaning identifies the key"). The author replaced "Lock the door before knocking" with "Look before opening the door" and logged "a knock/look/lock-and-open/close sign with every choice sensible". That is not true of the file: "Knock after opening the door." and "Knock before closing the door." are not signs a child has seen, and "Knock before opening the door." is also the hub option. I answered it correctly with the cursive hidden. This is a check-style item in a reading-cursive lesson, so a child can score it without reading.
  - Fix: use a sign where all four options are sensible, and let the cursive decide, for example sign "Please wipe your feet before you come in." with options "Please wipe your feet before you come in." / "Please wash your hands before you come in." / "Please take off your shoes before you come in." / "Please wipe your shoes before you come in." Then change the hint 2 and 3 wording ("the small word that tells when", "the last action") to match, and re-run centroid.js on the new options.
  - Also correct the author-log line (F9).

### SHOULD

- F-H1 (3.F.H.3.a, hub effect). The key is the unique option within one edit of every distractor in C01, C05, C08, C10, P1, P2, S06, S09, S11, S15, T1, T2, T3, T5. Four of five items in check form A are hubs. Fix: make one distractor a two-edit variant and let two distractors share an edit with each other, so the key is not central. Example for C05: keep "Zara fixed the broken ladder." and add "Sara fixed the broken zipper." but replace "Zara mixed the broken zipper." with "Sara mixed the broken ladder." (two edits, closer to the other distractors than to the key). Re-run centroid.js and re-solve blind.
- F-H2 (3.F.H.3.a, leaks inside and across sets). C02 and C04 (both set 1) both show Quinn and red; C11 and C13 (set 3) both show Saturday; C04 (set 1) shows the pair "Zoe" and P5's key (set 3) is Zoe. Fix: C13 use Thursday (S14 uses Wednesday), P5 a name not in C04 (for example Zuri), and change C02's name or colour so it does not repeat C04.
- F-H3 (3.F.H.3.a, statements that are false or do not discriminate). C01 hint 3 and why say wonder has "a different middle" or ask the child to compare the middle, but window and wonder both have nd in the middle (w-i-n-d-o-w, w-o-n-d-e-r); what differs is the second letter and the ending. P5 hint 3 ("Compare the end of the name") does not help because Zoe, Joe and Moe all end in oe, and its how says "The name has three letters, so it is Zoe", which is not a reason (Joe and Moe also have three). S15 how says "five letters, so it is Tessa", but Tasha also has five. Fix each line to name the real difference (the capital letter for P5, the second letter and ending for C01, the middle ess for S15).
- F-H4 (3.F.H.3.a, C12 and S13 hint 3). Each rules out two of the three distractors by name, leaving the key and a plainly bad guess ("Guess any long word...", "Choose whichever word looks the longest"). The plan allows ruling out one tempting distractor. Fix: keep one ruled-out option and leave two reasonable ones live.
- F-H5 (3.F.H.3.a, S12). Pop beside corn soup is a popcorn pun, so one pair can be guessed. Change to a dish with no link to the name (Pop: lentil soup).
- F-B1 (3.F.P.4.b, C08). The sentence is "Mia put a pocket, a tiny frog and a music box in a bag." but the free-standing choices are pocket, tiny, music and sky. "Sky" is not in the sentence, and frog, box, bag and put are in the sentence and also have closed syllables. A child who looks for the answer in the sentence is confused. Fix: put "sky" in the sentence (for example "...and a kite in the sky") or drop the sentence and print only the four words.
- F-B2 (3.F.P.4.b, S04 duplicates another lesson's item). S04 "Magnet splits as ma / gnet, mag / net, magn / et" has the same word and the same three options as SK-GUM3-8-C15 in js/data/lessons/L-GUM3.js (hyphenating at line breaks). Both keys are mag / net. Fix: change S04's first word to another double-consonant word that no other lesson uses (for example pillow, pil / low; check it in Merriam-Webster first), and re-run the option-set scan.
- F-B3 (3.F.P.4.b, T3 leaks into the check). T3 row 1 "nap in napkin" is closed; Teach's glossary says exactly "like cat or the nap in napkin". T3 row 4 "ba in bacon" is open; S04's key is bacon split ba / con with the why "before the one consonant". Two of four rows are given elsewhere. Fix: use different words in rows 1 and 4 of T3 that are not in Teach, core, similar or Together (for example fun in funnel for closed, mo in moment for open; check each in Merriam-Webster first). The edit changes wording only; ids, types, points and keys stay.
- F-B4 (3.F.P.4.b, hint 3 on C03, S03, C05, S05). Each names two of the three distractors, so the live pair is the key plus a one-syllable function word (ate, stand) or a word with no r (going, float). It meets the letter of the rule but is effectively one option. Fix: name one distractor only.
- F-B5 (3.F.P.4.b, S07). After the third fix the options say "silent-e", but the lesson's term everywhere else (Teach, C07, C11, T2) is vowel-consonant-e; the second review had asked for Teach terms with no drift. The prompt "Name their builds" is also off-term. Fix: use "vowel-consonant-e" in both slots and "kind of syllable" in the prompt; adjust the why.

### NOTE

- N-B1. Learn It and Watch Me for 4.b model only splitting (basket, pilot, camel). Classifying a syllable by type (C07, C11, S07) and spelling consonant-le (C12, P7, S12, S15, T6) rely on the glossary and the Write section. Acceptable; consider a fourth Learn It on spelling pebble or paddle.
- N-B2. Order items: the three hints together fix positions 1, 2 or 3 and 4 (4.b C02, S02; H.3.a C07, S08). No single hint does. Leave as is.
- N-B3. 4.b S04 and C04 now share all three hints word for word; the twin gives the child no new hint after a reveal (carried N-1).
- N-B4. 4.b S09 "where it gets cut" and S07 "builds" read oddly for grade 3; they came from the twin-overlap pass. Plain wording is better where the 0.21 ceiling allows.
- N-B5. 4.b C02 hints 1 and 2 both point to finding the vowels.
- N-B6. Twin Jaccard (set and multiset, with whole hyphenated words and with hyphen-split tokens, letters only): 4.b max 0.2000 (S03), H.3.a max 0.2083 (S06) and 0.2069 on the multiset. All ten values are at or under 0.21. S06 and S13 (0.206) are at the edge, so any wording change to them needs a re-run. Same-prompt hits found by the duplicate scan across all lessons, sets and tasks (3,000 plus items) are generic stems only ("put the steps in order for", "match each word to the way", "tap the word that starts with"). All 52 cursive stems in H.3.a are unique; no cursive sentence appears anywhere else. The only content duplicate is F-B2.
- N-H1. H.3.a core is narrow in task: 13 of 15 items are "decode a cursive line and pick the matching words", five of them dropdowns; only C07 and C12 differ. For a reading-cursive skill that is fair, but the plan's task-verb table cannot be met.
- N-H2. In the dropdown items the sentence frame is printed, so the cursive demand is one or two words per item (C02, C03, C06, C09, C13). The sentence-match items demand the whole line.
- N-H3. Watch Me models the letter s and capital S only; Teach shows G, Q, S, T, Z but the items also use D, M, P, L, B, A. Matches the author's open note.
- N-H4. S08's steps ("skip ahead if you get stuck, come back with clues") are not in Teach; the item is defensible but the model is not taught.
- N-X. The ledger warning "214 parts have no independent-review record" lists 4.b and H.3.a core, similar and test, and 4.a and 4.c core, similar and test. The coordinator records them after this review and after the H.3.a fix, so the recorded hash is the final one.

## F9. Author-log claims checked against the files

1. "C08 is a knock/look/lock-and-open/close sign with every choice sensible." FALSE. See M4-H1. The "lock" option is gone and two of the four options are not sensible signs.
2. "C02, C03, C06, S02, S03, S07, S10, S14 now offer choices that all fit the sentence." TRUE for every slot listed (checked by reading each frame with each option).
3. "C04 and S04 ... the pairing is only in the cursive. S12 uses the same design." TRUE except that "Pop: corn soup" has a name cue (F-H5).
4. "Parent note: added that the cursive uses one font ... s can leave a small gap." TRUE (present in `parent`).
5. "Worst twin 4.b 0.200, H.3.a 0.208." TRUE; all three tokenizers I tried (whole hyphenated words, hyphen-split, both) give 0.2000 and 0.2083, so the author's statement that the reviewer's hyphen-split 0.250 for 4.b S07 could not be reproduced is right for the current file (S07 is now far below).
6. "Longest key: 4.b 5 of 27 and 0 of 5; H.3.a 3 of 39 and 0 of 3." TRUE.
7. "C05 tablet became pretzel, S05 table became robot; how and why say the r comes before the vowel." TRUE (and pretzel is pret·zel in MW).
8. "P6 addon hint 3 and how now name channel, not tunnel." TRUE.
9. "Hints no longer narrow" (passes 1 and 2) was false and the log says so; the third pass says it did not re-audit every hint. My recount (F4) finds no hint that leaves one option explicitly, and the near-narrowing cases are F-B4 and F-H4.
10. "14 common words ... still unverified." True when written; verified in F3.
11. "Keys unchanged for 4.a S15 and 4.c C04, T4." TRUE (F6). "P6 hint 2 was already changed in the second pass." Consistent with the files (no diff after the third-review dump).
12. The log does not mention that C01 why and P5 how contain non-discriminating statements (F-H3), the sentence/option mismatch in 4.b C08 (F-B1), or the T3 leaks (F-B3).

## F10. Per-item verdicts

3.F.P.4.b (40 items: 15 core, 15 similar, 4 Together, 6 test)
- ACCEPT: C01, C02, C03, C04, P5, C05, C06, C07, P6, C09, C10, C11, C12, P7, S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15, P1, P2, P3, P4, T1, T2, T4, T5, T6 (SHOULDs F-B4 on C03, S03, C05, S05 and F-B5 on S07 recommended; F-B2 on S04).
- ACCEPT with SHOULD: C08 (F-B1), T3 (F-B3).
- CHANGES REQUIRED: none.
- Lesson: ACCEPT (SHOULDs F-B1 to F-B5). Coverage rows may be marked once the lead has taken or declined the SHOULDs.

3.F.H.3.a (38 items: 15 core, 15 similar, 3 Together, 5 test)
- CHANGES REQUIRED: C08 (M4-H1).
- ACCEPT with SHOULD: C01 (F-H3, F-H1), C02 and C04 (F-H2), C05, C10 (F-H1), C11 (none), C12 (F-H4), C13 (F-H2), P5 (F-H2, F-H3, F-H1), S06, S09, S11 (F-H1), S12 (F-H5), S13 (F-H4), S15 (F-H3), P1, T1, T2, T3, T5 (F-H1: hub, recommended before this check form is relied on).
- ACCEPT: C03, P4, C06, C07, C09, S01, S02, S03, S04, S05, S07, S08, S10, S14, P2, P3, T4.
- Lesson: CHANGES REQUIRED (M4-H1). After the fix, re-solve the changed items blind, re-run the twin Jaccard on any changed twin pair, and re-run the hub script (centroid.js) on every changed mc item. Note that a hub fix on the check form A (T1, T2, T3, T5) changes wording only; ids, types, points and keys stay, so no testRev bump.

3.F.P.4.a edit (S15 hint 3): ACCEPT. 3.F.P.4.c edits (C04, T4): ACCEPT, no testRev bump.

## F11. Fix list for the lead

1. H.3.a C08: rebuild with four sensible options (M4-H1).
2. H.3.a hub effect on C05, C10, S06, S09, S11, T1, T3, T5 and the single-word items C01, P2, T2, S15 (F-H1); re-run the hub script.
3. H.3.a F-H2 (Saturday, Zoe, Quinn and red), F-H3 (C01, P5, S15 statements), F-H4 (C12, S13), F-H5 (S12).
4. 4.b F-B1 (C08 sky), F-B2 (S04 duplicate), F-B3 (T3 words), F-B4, F-B5.
5. Then --record-versions once (hash only; no testRev) and record the ledger for all four lessons.

## F12. Notes for memory

- A cursive item stored as plain text needs two tests: the Node solve (self-consistency) and a no-cursive answer test (meaning, frame, and the hub option).
- A set of distractors that are each one edit away from the key makes the key the hub; check with an edit-distance sum before accepting any "which sentence matches" item.
- MW pages that WebFetch refuses (URL_NOT_ON_ALLOWLIST) can often be reached by running WebSearch with allowed_domains merriam-webster.com first, then fetching the returned link.
- Match items that print the names or things also print the cursive's words; a name reused across items in a set gives the child a decoded model of its cursive shape.


# Fifth review (independent, fresh eyes)

Reviewer: fifth reviewer. I did not write or earlier-review this content. Scope: 3.F.H.3.a (F-FH.js) after the fourth fix pass, and the author's wording edits to the ACCEPTED lesson 3.F.P.4.b (F-PF.js), frozen copy at /home/claude/pp-content. Read-only apart from this section (appended; nothing above was changed). A local server (port 8777, pid 28253) rendered 390 x 844 and was killed by pid. Scratch files: session scratchpad, folder b9rev5.

## V1. Verdicts at a glance

| Lesson | Verdict | Blocking finding |
|---|---|---|
| 3.F.H.3.a | ACCEPT (SHOULDs V-H1 to V-H5 recommended before STATUS) | none. The fourth-review MUST (M4-H1, C08) is fixed in the file |
| 3.F.P.4.b (author's wording edits) | CHANGES REQUIRED (one MUST, M5-B1) | S04 "pillow": the item's own criterion ("real syllables you can say") does not rule out `pill / ow`, and its key `pil / low` contains a non-word |

Other edits to 4.b (C08, T3, hint 3 on C03/S03/C05/S05/C08/S08, S07) are correct and leave every key and every live choice intact (V6).

## V2. Blind solve (integrity statement)

- Method: my own Node vm loader (`b9rev5/ld.js`, `blind.js`). For every core item (refs resolved), the three Together items P1 to P3, all fifteen similar items and all five check items (T1 to T5) I printed prompt, stem, frame text and choices only, with choices, dropdown options and order steps shuffled by a seeded generator. Keys, `why`, hints, `how`, `clue`, `misconception`, `like` and the `correct` flags were stripped. Answers were saved to `b9rev5/myans.json` before any key was extracted. Match columns were printed in authored (not shuffled) order, with rows in authored order.
- Result: **38 of 38 items agree with the keys** (15 core, 3 Together, 15 similar, 5 check items; choose-two counted as one item, order items scored as a whole).
- Honesty: this was blind to the keys, but not blind to the lesson's earlier history. Before solving I read only CONTENT-BRIEF, REVIEWER-BRIEF, the plan sections 4.5, 6 and 8, and engine code. I looked at the scratchpad folder listing and at an older probe script that printed nothing of this lesson's content. I did not open the author log or any earlier review until the answers were saved.
- The Node dump prints the cursive as plain text, so this solve shows only that the keys are self-consistent. Reading demand was tested separately (V5).

## V3. Hint ladder, live choices, keyed text (every item, by script where possible)

Live choices after hints 1 to 3 (script `hl.js` lists every hint that shares a word with an option, and a second scan lists every number or count a hint states; the player never crosses anything out on a hint, `player.js` hint()):
- mc items: 4 of 4 live after hint 3 in every item except **C12 (3 of 4: the print option is ruled out in hint 3)** and **S13 (3 of 4: the rewrite-in-print option)**. Both leave the key plus two weak options (V-H3).
- Dropdowns (C02, C03, C06, C09, C13, S02, S03, S07, S10, S14): 3 and 3 live in every slot. No hint states a letter count or a letter.
- Choose-two (P4, S05, T4): 5 of 5 live.
- Match (C04, C11, S04, S12): hints name one row (Pia, Jon) and never its answer; 4 of 4 live.
- Order: C07 and S08. Hint 1 fixes step 1, hint 2 fixes step 2 (C07) or step 3 (S08), hint 3 fixes step 4. After all three one ordering is left. No single hint does it, so this passes plan 4.5 (hint 3 alone leaves six orderings). NOTE V-N2, carried from N-B2.
- Together items P1 to P5 (addons): all live.
- No hint 1 or 2 names or quotes a key. No hint 3 quotes a key.

Keyed text against why, how and hints (all 38): every key matches its why and how. Letter counts, spellings and word positions in the how lines are right (checked by script and by hand: rabbit 6, tall 4, quail 5, rusty 5, aunt 4, purple 6, garden 6, Tessa 5, Tori 4, and so on). Statements that do not discriminate:
- T1 (check form A): why and clue say the second word is swim and the last word is lake, and the clue says to check "especially the second word and the last word". Choice B "We swim at the lake." also has swim and lake, so the why and clue do not rule it out; only the third word does. See V-H1.
- C12 hint 2 ("what the rest of the sentence can tell Leo") together with hint 1 describes the key's idea (use the rest of the sentence and what fits); A and B ignore the sentence. See V-H3.
- S06 hint 3 checks the first, second and last words, but distractor A differs in the fourth word (torn / worn). Hint 3 does not touch it (NOTE V-N4).
- P3 hint 3 "first letter of the action word": Feed, Feed, Find, Fill all start with F (NOTE V-N4).

Longest key (single-key groups: 19 mc and 20 dropdown slots = 39; choose-two counted by whether both keys are at least as long as the longest distractor):
- Strictly longest: C02 slot 0 Quinn, C09 slot 1 shelf, S14 slot 1 Wednesday (3 of 39, each by one or two letters, on three-option name, place and day slots). No mc key is strictly longest; the two strategy items C12 (51 of 53 characters) and S13 (47 of 52) have a longer distractor.
- Choose-two P4, S05, T4: 0 of 3 (the longest distractor is longer than both keys, or the keys tie with others).
- The author's "3 of 39 and 0 of 3" reproduces.

Hub effect (key as the unique minimum summed edit distance to the other options; letter distance for single words, word distance for sentences; also the unique option within one edit of all others):
- No mc item has the key as the unique minimum: **0 of 19** (the author's claim holds). C08's unique centre is now a distractor ("wipe your shoes").
- The key is at the minimum but tied with exactly one distractor in 10 mc items: C01 (window / widow), C10, P2, P3, P5, S09, S11, S15, T1, T5. It is tied four ways in P1, S01, T2, T3. A hub-picker scores 50 percent on the ten, not 25. In check form A that is T1 and T5 (T2 and T3 are four-way ties). The log names only four ties (river, window, Zoe, Tessa); it understates this. NOTE V-N1.
- Dropdown slots with the key as the unique centre: C02 slot 1 (red), C06 slot 1 (tall), S02 slot 0 (Tess). Three-option slots of unrelated words; no action.

## V4. Twins, duplicates, leaks

Twin Jaccard (word set / multiset; tokens from prompt, cursive stem, frame text and every option; lower case, letters only): all fifteen pairs are at or under 0.21. Worst: S13~C12 0.206 / 0.206, then S08~C07 0.170 / 0.136, S06~C05 0.160 / 0.172. If the prompt is left out of the tokens, S13~C12 rises to 0.200 / 0.230, so the pair has no margin (NOTE V-N3). The author's log names S06~C05 as the worst pair at 0.206; under my tokens S06~C05 is 0.17 and the 0.206 belongs to S13~C12. Mislabelled, not a failure.

Duplicate scan over every file in js/data (all 83 distinct cursive phrases and every sentence-length option; six-word rule of plan 8):
- **Hit: C08's key "Please wipe your feet before you come in." is the same seven words as the key of SK-GUM2 (L-GUM2.js:546, "Please wipe your feet before you come inside.")**. This was introduced by the fix for M4-H1 (the fourth reviewer suggested the sentence; the scan was not run on it). See V-H2.
- T1 distractor "We swim at the lake" appears as the last four words of a key in L-GUM5.js:894; P3 "Please feed the fish" is in L-GUM5.js:282. Four to five words; not flagged beyond a NOTE.
- Every other cursive phrase is unique in js/data. Hyphenation of "pillow" in L-GUM3 is the 4.b finding (M5-B1).
- Cross-item leak scan (a cursive word of one item printed as an option, frame or prompt in another item of the same lesson): only the word "please" (C08, C10, P3). Key-as-distractor scan: only S14's key Wednesday is C13's distractor (twin pair; harmless). Set 3 prints Sunday in C13 and in C11's rows; neither is the other's key. The fourth-review leaks (Quinn/red, Saturday, Zoe) are gone.

## V5. 3.F.H.3.a rendering and reading demand (390 x 844, route PP_PLAYER.start('SK:3.F.H.3.a:y|y2|y3'), Together and check set also loaded)

- All fifteen core items, all fifteen similar items (reached through the real "Try a similar question" button after a correct answer) and the check page rendered; scrollWidth is 390 on every one; no page errors; no horizontal scroll; cursive blocks wrap at word boundaries inside the gutters.
- Readability at device scale 3 (window, scooter, Tuesday, Saturday, Sunday, keys, shelf, Tess read cleanly). The s-gap is visible after a lowercase s inside a word: "Tues day", "s cooter", "Wednes day". A word is still read as one, and Teach point 4 and the grown-up note both say the font leaves a small gap after s and that the wider spaces show word ends. That is accurate. NOTE V-N5 (a font with joined s would remove the problem; carried from the earlier open item).
- Grown-up note: says one font is used, the school model may differ, and s can leave a small gap. Accurate and plain.
- Reading-demand test. I hid every `.cursive` block (visibility hidden) and answered each item from the printed prompt, frame and options alone, by meaning and by comparing options:
  - Cannot be answered without reading: C01, C02, C03, C04, P4, C05, C08, C10, C11, C13, P5, and in similar S01 to S06, S09, S11, S12, S14, S15; all Together and check items P1 to P3, T1 to T5. C08 is fixed: all four signs ("wash your hands", "take off your shoes", "wipe your shoes", "wipe your feet") are ordinary, so only the letters decide. NOTE V-N6: "wipe your feet" is the most common doormat sign.
  - Partly guessable: **C06 slot 1** (a rabbit hides in "tall grass"; thick and wet are also possible) and **S10 slot 0** ("First wash the pans" before "stack the cups"). The key is the most idiomatic option in each, about one in two by meaning. The other slot of each item is not guessable. NOTE V-N6.
  - Answerable without cursive by design: C07, S08 (order a method), C12, S13 (what to do when stuck). Two of the fifteen. Acceptable; see V-H3, V-H4.
- Match rows are listed in the order of the cursive lines in C04 and S04 but not in C11 and S12. A child can match by position and then needs only the thing words. NOTE V-N6.

## V6. Edits to the ACCEPTED lesson 3.F.P.4.b (F-PF.js), checked in the file

Merriam-Webster pages fetched with WebFetch this pass (all consistent with the lesson): pil·low (https://www.merriam-webster.com/dictionary/pillow, pronounced ˈpi-(ˌ)lō), fun·nel (https://www.merriam-webster.com/dictionary/funnel, ˈfə-nᵊl, short vowel), mo·ment (https://www.merriam-webster.com/dictionary/moment, ˈmō-mənt, long o), po·ny (https://www.merriam-webster.com/dictionary/pony, ˈpō-nē), star·fish (https://www.merriam-webster.com/dictionary/starfish, ˈstär-ˌfish), pup·pet (https://www.merriam-webster.com/dictionary/puppet, my suggested replacement word).

| Edit | Check | Result |
|---|---|---|
| C08 sentence and hint 3 | Hottext options are the four chips (pocket, tiny, music, sky); the sentence is context only, so frog and box are not selectable. why, how and hint 3 agree. Key unchanged (pocket, index 0). Live 4 of 4 (hint 3 names tiny). | Correct |
| S08 hint 3 | Names baby only. Key winter unchanged. | Correct (check-content now warns "hint 1 is much longer than hint 3" for C08 and S08, a new NOTE) |
| C03, S03, C05, S05 hint 3 | "Clap puppy.", "Clap farmer.", "Split window...", "Split puppy...": one distractor each, no key named, all four options live. why and how still agree (banana, tomato, morning, carpet). | Correct. Closes F-B4 |
| T3 rows | "fun in funnel" (closed), "mo in moment" (open); po in pony (open) and ple in apple (consonant-le) unchanged. Answers 0, 1, 2, 1 as before (why says Fun, Po, mo). The Teach glossary no longer states the row words ("the nap in napkin" is a Teach example only). `check-content` reports the check form edited in wording only, same ids, points and keys. | Correct. No testRev bump needed (V7) |
| S07 starfish | Key r-controlled + closed holds (star, fish). Options r-controlled / vowel team / consonant-le and vowel team / closed / consonant-le. | Correct, but see NOTE V-N7 |
| **S04 pillow** | Options `pi / llow`, `pil / low` (key), `pill / ow`; bacon slot unchanged. | **MUST M5-B1** |

Other checks on 4.b: hint 3 on C03, S03, C05, S05, C08, S08 leaves three of four live, as the fourth review asked. 4.b twin Jaccard (tokens including hyphen-split syllables): worst S03 0.200 and S07 0.200; the author's "0.200" holds, and S07 is at the edge again. S08 shares the words baby and silent with check item T4 (both are distractors in T4 and open-syllable words in S08, whose why says so), so a child who saw S08 can eliminate two T4 options (carried, NOTE V-N8). The prompt "C13/S14 shared distractors" has no 4.b counterpart (4.b has no C13): in 4.b, S14 and P6 share no option; S14's pretzel is also a C05 option but plays a different role. In 3.F.H.3.a the only C13/S14 overlap is Wednesday (C13 distractor, S14 key).

## V7. Check form A, T1 to T5 (the lesson has no form B)

- Same ids, types, points (1, 1, 1, 2, 1) and keys as the record: `check-content.js --all` exits PASS (0 failures, 100 warnings) and says 3.F.H.3.a:A and 3.F.P.4.b:A were edited in wording only, same ids, points and keys. I re-solved all five blind (V2) and confirmed the keys by reading each why.
- Opinion on testRev: **no bump.** The construct, ids, points and keys are unchanged. The distractor edits remove the hub (T1 is now tied with one distractor, T2 and T3 four-way ties, T5 tied with one), which makes the form slightly harder, not different in kind. The engine does not store an unfinished check, and the review signature holds ids, types and points. Run `--record-versions` once, after the last edit, to refresh the hash only (the 3.F.H.3.a ledger lines are still "no record").
- T1's why and clue do not discriminate choice B (V-H1). Fixing it changes wording only.
- No giveaway into the check: T items print no cursive word that appears as an option in another item (V4), and the frames repeat only generic prompts ("Which sentence matches it?").

## V8. Findings

### MUST

- **M5-B1 (3.F.P.4.b, S04, similar, the "pillow" replacement).** The prompt is "Pick the split that makes real syllables." Hint 3 says "Say each choice out loud. Ask which one gives parts you can say as real syllables." The why says "The other choices make parts that are not syllables" and how step 3 says "The other splits leave parts that cannot be said." For `pill / ow` every one of those statements is false: pill and ow are both real, sayable words, while the key `pil / low` contains `pil`, which is not a word. A child who follows the hint and prefers real words picks `pill / ow`, so the item has a second defensible answer by its own stated criterion; only the lesson's rule (two consonants, split between them) separates the key, and the item does not ask for the rule. The old magnet and C04's ribbon had unsayable wrong parts (magn, ribb); pillow does not. The same word and the same split are the key of SK-GUM3-8-C04 in L-GUM3.js (pil- | low, with pill- | ow as a distractor), the F-B2 problem again.
  - Fix: use a double-consonant word that no split item uses and whose wrong splits leave unsayable parts, for example puppet (pup / pet, with pu / ppet and puppe / t; Merriam-Webster pup·pet; no split item uses it). Reword hint 3 and the how to the rule if you keep the criterion ("Look at the two consonants between the vowels, then split between them"). Re-run the option-set scan and the twin Jaccard for S04~C04.

### SHOULD

- **V-H1 (3.F.H.3.a, T1, why and clue).** The clue says to check "especially the second word and the last word"; the why gives only swim and lake. Choice B "We swim at the lake." matches both. A child who does exactly what the clue says still has two live choices and is not told which word breaks the tie. Fix: clue "Check every word, especially the second word and the word after it"; why "...The second word is swim, the third word is in and the last word is lake. Swing, at and lane change one of them." Wording only; no testRev.
- **V-H2 (3.F.H.3.a, C08, duplicate of another lesson).** "Please wipe your feet before you come in." matches SK-GUM2's key "Please wipe your feet before you come inside." for seven words (plan 8: six words flagged). Different skill (punctuation against reading), but the sentence is the same, and a child who has done GUM2 meets it as a remembered sentence. Fix: change the sign, for example "Please hang your coat on the hook." with sensible choices (hang your coat / hang your hat / put your coat / hang your bag, one shared frame), and rewrite hints 2 and 3, how and why. Re-run the hub script and re-solve blind.
- **V-H3 (3.F.H.3.a, C12 and S13, weak distractors and an echoing hint 2).** After the fourth-review change hint 3 rules out only the print option, as asked, but the two options left beside the key are not tempting ("Skip the note and read only the capital letters.", "Guess any long word that starts with the same letter."; "Tear out the page and begin a new one.", "Choose whichever word looks the longest on the page."). The plan (6.5) says no distractor is absurd, and these are the two DOK 3 items. Hint 2 ("what the rest of the sentence can tell Leo / the pupil") with hint 1 states the key's idea in other words, so a reader who has seen hints 1 and 2 can write the key. Fix: give each item one other plausible strategy ("Read only the last letter and choose a word that ends the same way", "Say every letter of the word out loud, then stop") and make hint 2 point at the evidence ("Which words around it are already readable?") without naming the idea.
- **V-H4 (3.F.H.3.a, S08).** The steps (start at the capital letter, say each word quietly, skip ahead if you get stuck, come back with clues) are not in Learn It or Watch Me, so the item asks for a method it has not taught (plan 6.9: no new rule first appears in an item). The order is defensible, and I solved it correctly blind, but only by common sense. Fix: add "skip a hard word and come back to it" to Learn It point 3, or use the Learn It steps as C07 does.
- **V-H5 (3.F.H.3.a, partly guessable slots).** C06 slot 1 ("tall grass") and S10 slot 0 ("First wash the pans") are the most idiomatic option. Fix: make all three options equally idiomatic (C06: tall, long, high; S10: wash, scrub, rinse).

### NOTE

- V-N1. Hub: 10 mc items have the key tied for the minimum with one distractor (V3). The log lists four. Residual only.
- V-N2. Order items C07 and S08: the three hints together fix every step (carried N-B2).
- V-N3. Twin S13~C12 is 0.206; without the prompt in the tokens it is 0.23. Any wording change to either must be re-measured.
- V-N4. S06 hint 3 does not reach distractor A (fourth word); P3 hint 3 "first letter of the action word" does not discriminate (all start with F). Clean up when next touched.
- V-N5. s-gap remains in this face (explained, not removed). Cursive Z in P5 and T in S15 still look close to 3 and J; both are named as tricky in Learn It, and P5's how now says to compare the capital.
- V-N6. Reading demand details: "wipe your feet" is the most common doormat sign; C04 and S04 rows follow the order of the cursive lines.
- V-N7. 4.b S07 omits the lesson's term vowel-consonant-e and the term open: its options are r-controlled, vowel team, consonant-le and closed. The twin C07 (sunshine) tests closed, open and vowel-consonant-e, so the twin pair no longer exercises the same term set, and the item's two wrong options in each slot (vowel team, consonant-le) are easy to rule out for starfish. The author's reason (overlap 0.31 with C07 if vowel-consonant-e is used) is acceptable; carry the F-B5 SHOULD as open and choose a different word if you want the term back, for example "Homemade has two halves" (home / made: vowel-consonant-e + vowel-consonant-e) with a different distractor set.
- V-N8. 4.b S08 / S09 words baby and silent are also T4 distractors (carried; the check is the accepted form).
- V-N9. Standard wording: the official text is "Read phrases and sentences written in cursive." Six single-word or name items (C01, P5, S01, S15, T2, P2) are words, not phrases or sentences; P4, S05 and T4 read word lists. Acceptable at the foundation level; no change required.
- V-N10. DOK labels: 13 of 15 core items are DOK 2 by label but are decoding and matching; the reading-lesson DOK 3 minimum does not apply to this foundations lesson (author exception stands).
- V-N11. Watch Me still models the s and S only; the items use lists with colons, notes with signatures and "which sentence matches" comparisons (carried N-H3).
- V-N12. Grade level: "pupil" (S13) and "scribbled" are fine for grade 3; "student" is more common in US text.

## V9. Fourth-review findings confirmed against the files (not the log)

| Fourth-review finding | Status in the files |
|---|---|
| M4-H1 C08 answerable without reading | **FIXED.** C08 is now the "Please wipe your feet" sign with four ordinary signs; answered correctly only with the cursive visible. Hints 2 and 3, how and why agree. A new duplicate (V-H2) came with the sentence |
| F-H1 hub effect | **FIXED to the extent claimed**: 0 of 19 unique hubs (was 15); ties remain in 10 items (V-N1) |
| F-H2 leaks (Quinn/red, Saturday, Zoe) | **FIXED.** C04 uses Fay, Wes, Pia, Ray and "gold cap"; C13 asks for Thursday; no repeated cursive word across items |
| F-H3 false or non-discriminating statements | **FIXED** for C01 (widow five letters, willow double l, wilder ends in er; true), P5 (compare the second letter and the Z; true), S15 (e-s-s, a-s-h, i-l-l, four letters; true). New non-discriminating line: T1 (V-H1) |
| F-H4 C12 and S13 hint 3 | **FIXED as worded** (one option ruled out); the remaining distractors are weak (V-H3) |
| F-H5 S12 corn soup | **FIXED** (Pop: lentil soup) |
| F-B1 4.b C08 sky | **FIXED** (sky in the sentence; four options) |
| F-B2 4.b S04 duplicate | **NOT FIXED**: pillow is a duplicate of a GUM3 item and the item now has a second defensible answer (M5-B1) |
| F-B3 4.b T3 leaks | **FIXED** (funnel, moment) |
| F-B4 4.b hint 3 names two distractors | **FIXED** (one each, also on C08 and S08) |
| F-B5 4.b S07 term drift | **PARTLY**: "silent-e" is gone and the prompt says "kind"; vowel-consonant-e is absent (V-N7) |

## V10. Author-log claims checked against the files

1. "C08 rebuilt ... each would make a sensible sign" TRUE.
2. "`check-content --all` PASS (0 failures, 100 warnings), `check-writing` 0 failures, `check-instructional-copy` 28 passed" TRUE (I ran all three). The new 4.b warnings "hint 1 is much longer than hint 3" on C08 and S08 are not mentioned.
3. "Hub: H.3.a 0 of 19 mc items" TRUE for a unique hub. The sentence on ties names four items; there are ten (V-N1).
4. "Twin similarity H.3.a worst 0.206 (S06~C05)" The value is right but the pair is S13~C12 (S06~C05 is 0.17).
5. "Longest key: 4.b 5 of 27 and 0 of 5; H.3.a 3 of 39 and 0 of 3" TRUE for H.3.a; I did not re-run 4.b.
6. "4.b S04 ... No other lesson uses that option set." **MISLEADING.** The exact three options are not repeated, but L-GUM3 SK-GUM3-8-C04 uses the same word, the same key split pil / low, and the same distractor split pill / ow. Not a false number, but it answers the F-B2 finding wrongly.
7. "S07: vowel-consonant-e raised the twin overlap with C07 to 0.31 (it is 0.200 now)" The 0.200 is right (S07 0.200 / 0.173); I did not reproduce 0.31.
8. "Test items changed (wording or distractors only; same ids, points, types and keys): T1, T2, T3, T5" TRUE (check-content's wording-only warning; my solve).
9. "I did not touch 4.a or 4.c this pass." Not checked; the wording-only warning list for 4.c:A comes from the earlier pass.
10. The log does not mention T1's non-discriminating why and clue, the new duplicate with SK-GUM2, or that the pillow item changed the criterion for the key.

## V11. Per-item verdicts

3.F.H.3.a (38 items: 15 core, 15 similar, 3 Together, 5 check)
- ACCEPT: C01, C02, C03, C04, P4, C05, C06 (V-H5), C07, C09, C10, C11, C13, P5, S01, S02, S03, S04, S05, S06, S07, S09, S10 (V-H5), S11, S12, S14, S15, P1, P2, P3, T2, T3, T4, T5.
- ACCEPT with SHOULD: C08 (V-H2), C12 and S13 (V-H3), S08 (V-H4), T1 (V-H1).
- CHANGES REQUIRED: none.
- Lesson: **ACCEPT.** The fourth-review MUST is fixed. SHOULDs V-H1 to V-H5 are recommended before the lesson is marked VERIFIED; V-H1 is a one-line wording change and V-H2 needs a re-solve of C08 only.

3.F.P.4.b (edits only; 40 items)
- ACCEPT: every item except S04 (all keys and live choices intact; C08, T3, hint 3 on C03, S03, C05, S05, C08, S08 and S07 are correct).
- CHANGES REQUIRED: S04 (M5-B1).
- Lesson: **CHANGES REQUIRED** until S04 is replaced. After the fix, re-solve S04 blind, re-run the option-set scan against js/data and the twin Jaccard for S04~C04; the change is wording and distractors only (same id, points, type), so no testRev bump.

## V12. Fix list for the lead

1. 4.b S04: replace pillow with a word whose wrong splits are unsayable (puppet: pup / pet) and put the rule in hint 3 and how (M5-B1).
2. H.3.a T1 clue and why (V-H1); C08 sentence duplicate with SK-GUM2 (V-H2).
3. H.3.a C12 / S13 distractors and hint 2 (V-H3); S08 teach gap (V-H4); C06 / S10 slot idiom (V-H5).
4. Then `check-content.js --all --record-versions` once, and record the ledger for 3.F.H.3.a and 3.F.P.4.b.

## V13. Notes for memory

- Keep two tests for a cursive item stored as plain text: the Node self-consistency solve and a hide-the-cursive answer test (meaning, frame, hub option).
- When a reviewer proposes a replacement word or sentence, scan it against all of js/data before the author uses it: both fourth-review suggestions (the C08 sign and the pillow word) collided with an existing item.
- A "split into real syllables" criterion fails for any split whose parts are words (pill / ow); use unsayable wrong parts or state the rule.
- WebFetch reached merriam-webster.com pages directly this session; the allowed_domains workaround was not needed.

---

# Sixth review (post-acceptance edits)

Independent reviewer (did not write or earlier-review). Scope: the edits made after "Accept 3.F.H.3.a (B9 fifth review)" (commit 1e002f4) up to HEAD (f83b611), read from `git diff 1e002f4 HEAD -- js` (read-only). Changed items: 4.b S04; H.3.a T1, C08, C12, S13, S08, C06, S10, and Teach point 3. I did not read the author log before the solve was saved. Working files: scratchpad `b9rev6/`.

## W1. Method and blind solve

- Solve: 8 changed items (T1, C08, C12, S13, S08, C06, S10, 4.b S04) printed from Node with keys, why, hints, how, clue and `correct` stripped and the choices shuffled (seed 777); answers saved to `myans.json` before the keys were extracted. **Agreement 8 of 8.** It was blind to keys and rationales only: the cursive text is stored as plain text in the stem, so a cursive item is a transcription match, not a test of cursive reading. That is why I also ran the hide-the-cursive render below.
- Changed ids, points, types and keys: T1, C08, C12, S13, S08, C06, S10, S04 all keep the same id, points and key position (diff shows only text changes). `check-content --all` PASS (0 failures, 104 warnings; the only warnings on these two lessons are 4.b C08 and S08 "hint 1 much longer than hint 3"), `check-writing` 0 failures, `check-instructional-copy` 28 passed. I ran them without `--record-versions`; no files were written.
- Hub (unique medoid by characters and by words), longest key, twin Jaccard (set and multiset, hyphen and slash split) and hint/option word overlap were run by script (`hub.js`, `jac.js`, `hl.js`, `live.js`).
- Render: 390x844, Chromium, "Try it yourself" and the Skill check, with `.cursive{visibility:hidden}` (`shots/SK-FH3a-C08-hid.png`, `C06-hid`, `S10-hid`, `T1-hid`). No horizontal overflow, the cursive box is the only thing hidden, and no console errors.

## W2. 4.b S04 (puppet)

- Blind: pup / pet and ba / con (correct).
- Dictionary: https://www.merriam-webster.com/dictionary/puppet gives pup·pet (fetched this session; the Kids entry shows pup-pet-style stress only). Both wrong puppet splits contain an unsayable part: pu / ppet (ppet) and puppe / t (t). The key parts (pup, pet) are both words, so the criterion "parts you can say" separates key from distractors; the pillow problem (a wrong split made of words) is gone.
- Reuse: scanned js/data for puppet, pup / pet, pu / ppet and puppe: the only syllable use is S04. "puppet" appears in L-GUM3 (a story) and T-RA (a passage) as plain reading text, not as a split. No Teach, learn or Together example in 4.b uses puppet. No other option set repeats.
- Live choices after hints 1, 2, 3: slot 0 = 3, 3, 3; slot 1 = 3, 3, 3. No hint names a split, pup, pet, or a key-only word (script: none). Hint 3 is the same sentence as C04 hint 3, which is fine.
- Key vs how/why: how[0] "two consonants, p and p ... pup / pet" is correct; why agrees; how[2] "The other splits leave parts that cannot be said" is true for the puppet slot.
- Hub: slot 0 key is the unique character-medoid (the middle split; ties at word level). Same shape as the old pillow slot and as C04's ribbon slot; NOTE only.
- Twin Jaccard S04~C04: all fields 0.154 set / 0.190 multiset (limit 0.21: pass). With the prompt left out it is 0.185 / 0.241, because both items use "x / y" splits; the standard measure passes.
- Longest key: slot 0 all 9 characters (tie), slot 1 all 8 (tie).
- Unchanged bacon slot (SHOULD S6-1, below).
- **Verdict S04: ACCEPT.** The open MUST M5-B1 is closed.

Findings:
- **SHOULD S6-1 (4.b S04 slot 1, and C04 slot 1, carried).** "bac / on" and "bas / in" are not unsayable: bac is sayable and on, in are words, so the how line "The other splits leave parts that cannot be said" is false for them and the prompt "real syllables" is arguable. The key is still fixed by the long a (ba-con) and by "a word you know", so I do not call it a MUST (two earlier reviews accepted it). Fix when next touched: replace the distractor with an unsayable one, e.g. "b / acon" (S04) and "b / asin" (C04), or change how[2] to "The other splits leave parts that cannot be said, or make the vowel sound wrong." Wording and distractor change only, no testRev.
- NOTE S6-2. The "hint 1 much longer than hint 3" warning on C08 and S08 stays. Hint 1 is the definition (and the clue), hint 3 is the short, specific scaffold that spends one distractor (tiny, baby). Live choices 4, 4, 3. The ladder is correct; the warning is a length artefact. Optionally shorten hint 1 to "A closed syllable ends with a consonant." (the second sentence is repeated in hint 2).

## W3. 3.F.H.3.a changed items

**T1 (check).** Same id, points 1, DOK 1, type and key (diff). Choices unchanged. Clue now "second word and the word after it". Positions: swing (B, C) = word 2, at (D) = word 3, lane = word 5 (with swing). So the clue sends the reader to the two positions that separate all three distractors, and the old gap (the "at" choice, which the old clue "second and last" did not cover) is closed. why now says swing, at and lane each change one word: true. It does not name key letters. Hub: key ties with the swing-in-the-lake choice (word sumC 7/7), not a unique hub; longest: no. Hide-the-cursive render: four plain sentences, "We swim in the lake" is the most natural, "We swing in the lane" the oddest; the item is a transcription match by design. **ACCEPT.**

**C08 (sign).** "Please hang your coat on the hook." Blind C (correct). Choices: hat/hook, put/coat/hook, hat/shelf. Hidden-cursive render: four sensible signs; only the cursive discriminates (shelf is slightly odd, NOTE). Live choices after hints 1, 2, 3 = 4, 4, 4 (no hint names an option word; h2 and h3 only name the positions). Longest key: tie with the hat-on-the-hook choice (34 vs 34, not unique); word hub: key ties with hat/hook (4 and 4), not unique. Hints, how and why agree (hang, coat, hook). Reuse scan of all js/data: the sentence is not reused in any item; one NOTE below. **ACCEPT with NOTE.**
- NOTE S6-3. 3.T.T.4.b S01 (js/data/lessons/T-T34.js:3493) has the stanza line "I hang my coat up on the hook," (rhyme with book). Hang, coat and hook are the key's three words, so a child who has done that lesson could answer without reading the cursive. Low risk (different strand, a poem), but it is exactly the earlier reuse fault; "Please hang your scarf on the hook" or another place noun would avoid it.
- NOTE S6-4. "hang your hat on the shelf" is the one slightly odd sign (you do not hang on a shelf), so why's "All four would make sense" is a small overstatement. "...hat on the door" would be fully sensible.

**C12.** Blind A (correct). Distractors: last-letter-only guess (the longest, 65 characters, so the key is not longest), say-every-letter-then-stop, print it. Live choices 4, 4, 3 (hint 3 rules out print). Key is not a hub (word sumW 32 vs 29-30 for others). Hint 2 now asks "Which of the words around the hard word can Leo already read?": strategy, no option word or key wording. why order (one letter, stop after saying, print) matches the choices. Twin S13~C12: 0.181 set / 0.178 multiset (pass). Teach point 3 now models the key (letters you are sure of, then what makes sense) and skip-ahead. **ACCEPT with NOTE.**
- NOTE S6-5. "Say every letter of the word out loud, then stop" is the weak distractor (the premise says Leo knows only two letters). It does not give a second answer. Replace if the lesson is reopened.

**S13.** Blind D (correct). Live choices 4, 4, 3 after hints. Keys, how and why agree. **ACCEPT with SHOULD.**
- **SHOULD S6-6 (S13).** Two of the three distractors are the same wrong idea (copy the scribble over and over; trace over it), so hint 3 ("Tracing over the scribble does not read it") rules out both by the same logic and the child is left with the key and "Choose any word ... whatever its letters". Also "Trace over the scribble in pen and then move on" contains "move on", which Teach point 3 now teaches (skip ahead) and which S08 keys, so the option has a half-right clause. Fix: keep one redraw option and replace the other with a different wrong plan (for example "Pick a word with the same number of letters as the scribble"), and drop "and then move on" from the trace option. Same id, points, key; no testRev.

**S08 (order).** Blind [2, 3, 4, 1] (correct). Steps now: start at the capital letter; read one word at a time; skip ahead if you get stuck; come back with clues from nearby words. Hints 1-3, how and why match the new step 2. Step 2 now matches Teach point 3 word for word, and the added Teach sentence models steps 3 and 4. "Start at the capital letter" is still not stated in Teach (NOTE, trivially first). Twin S08~C07: 0.170 set / 0.132 multiset (pass). **ACCEPT.**

**C06 (slots rabbit/robin/raccoon; tall/long/high).** Blind rabbit, tall (correct). Hidden-cursive render: "A brown ___ hid in the ___ grass" with three sensible words each; slot 0 is answerable by meaning (rabbit is the most natural, unchanged from before and accepted), slot 1 needs the cursive. Slot 1 options are all four letters (tall, long, high): hub none, longest tie. Live choices 3 and 3 through h3 (no hint names an option).
- **SHOULD S6-7 (C06 how[2]).** "The word before grass has four letters: tall." was a discriminating clue for tall/thick/wet and is now true but does not discriminate (long and high also have four letters). Hint 3 correctly says "look at the middle letters", so how contradicts the method. Fix: "The word before grass has four letters and a double l in the middle: tall." (no testRev).
- **ACCEPT with SHOULD.**

**S10 (wash/scrub/rinse; cups/bowls/plates).** Blind wash, cups (correct). Hidden-cursive render: all three words of each slot sensible, so only the cursive decides. First letters all differ (w, s, r; c, b, p), so hint 3 ("first letter and the last letter of each answer word") works; no hint names an option. Key not a hub, not longest. why lists the four distractors correctly. **ACCEPT.**

**Teach point 3 (added sentence).** "If you are still stuck, skip ahead, read on, and come back to the word with clues from the words around it." Accurate, grade-appropriate, matches S08 steps 3 and 4 and C12/S13, closing the earlier teach gap (V-H4). It is a long point (about 45 words); `check-writing` passes. **ACCEPT.**

## W4. 4.b C08 and S08 hint 3 (as asked)

Hint 3 names one distractor each (tiny, baby) and states the method, not the key: it does not narrow to one choice (live 4, 4, 3). The only automated warning is length (S6-2, NOTE). The how, why and key are consistent (pocket, winter). **ACCEPT.**

## W5. Per-item verdicts (changed items only)

| Item | Verdict | Finding |
|---|---|---|
| 4.b S04 | ACCEPT | M5-B1 closed; SHOULD S6-1 on the bacon slot (carried from C04) |
| 4.b C08, S08 | ACCEPT | NOTE S6-2 |
| H.3.a T1 | ACCEPT | none; clue and why now discriminate |
| H.3.a C08 | ACCEPT | NOTE S6-3 (poem reuse), NOTE S6-4 |
| H.3.a C12 | ACCEPT | NOTE S6-5 |
| H.3.a S13 | ACCEPT with SHOULD | S6-6 |
| H.3.a S08 | ACCEPT | none |
| H.3.a C06 | ACCEPT with SHOULD | S6-7 |
| H.3.a S10 | ACCEPT | none |
| H.3.a Teach point 3 | ACCEPT | none |

No MUST. CHANGES REQUIRED: none. Lesson 3.F.H.3.a stays **ACCEPTED**; lesson 3.F.P.4.b moves from CHANGES REQUIRED to **ACCEPTED** (the S04 MUST is fixed). Recommended before VERIFIED: S6-7 (one how line), S6-6 (one distractor pair), S6-1 (two distractors). All are wording or distractor changes with the same ids, points, types and keys, so no testRev; re-run `check-content.js --all --record-versions` once after them and record the ledger for both lessons.

## W6. Notes for memory

- When a how line states a counting fact ("four letters"), re-check it every time distractors change: a fix to one finding (V-H5) made it non-discriminating.
- A replacement sentence that passes the js/data item scan can still collide with a poem stanza in another strand (T-T34 S01); scan phrases, not only exact strings.
- Unsayable-parts criterion: check every slot of the item, not only the slot that changed (bac / on, bas / in).
- The server started for the render was node verification/serve.js on port 8779 (pid 4831), killed by pid.
