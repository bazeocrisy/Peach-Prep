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
