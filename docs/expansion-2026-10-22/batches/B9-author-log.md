# B9 Foundations: author log

Status: AUTHORED (B9), NEEDS INDEPENDENT REVIEW. NOT ACCEPTED. Not in accepted.js. No git commit. `--record-versions` not run (coordinator).

## What was built
- Core 15 + similar 15 + addons, marked `/* B9:core:start */ ... end` in js/data/lessons:
  - 3.F.P.4.a (F-PF.js): refs P5-P7, Together P1-P4. Formats hot, match, dd, mc, ms, order. DOK 1x2, 2x12, 3x1.
  - 3.F.P.4.b (F-PF.js): refs P5-P7, Together P1-P4. mc 4, dd 4, hot 2, match 2, ms 2, order 1.
  - 3.F.P.4.c (F-PF.js): refs P5-P7, Together P1-P4. dd 4, mc 4, hot 2, match 2, ms 2, order 1.
  - 3.F.H.3.a (F-FH.js): refs P4, P5, Together P1-P3. mc 6, dd 3, hot 2, match 2, ms 1, order 1. DOK 1x2, 2x12, 3x1.
- Six `coreException` sequences (marked `B9:exception`), each with kind, rationale and three tasks (title, how, checklist): 3.F.F.1.a, 3.F.F.1.d (F-PF.js); 3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b (F-FH.js). Existing supporting items stay. None has `core`. All six are already in practice-exceptions.json.
- "New file" interpretation: modules authored in the scratchpad (m9_*.js, mex.js) and injected between markers in the existing lesson files, since a lesson cannot be split across files.

## Justified exceptions (assignment section 7)
Automaticity, oral accuracy, prosody, self-correction while reading, letter formation and spacing are behaviors an adult hears or sees. Fifteen selected-response items would be filler. Each sequence is three dated, adult-run rounds with a checklist.

## Fix pass after review 1 (B9-review.md)
Measured on the final files: `check-content --all` PASS (0 failures), `check-writing` 0 failures, `check-instructional-copy` 28 passed. Keys rechecked with ckms.js after every edit. Worst twin similarity (word-set; multiset is lower or equal): 4.a 0.186, 4.b 0.200, 4.c 0.207, H.3.a 0.208. Single-key unique-longest: 4.a 23%, 4.b 22%, 4.c 28%, H.3.a 6%. Choose-two both-longest: 0 everywhere.

MUSTs fixed:
- 4.a C06 and S14 hint 3 no longer quote the key. S14 rebuilt (key fence, not rice). C09 broom replaced by spoon, how and why updated.
- 4.b C04 uses ribbon (rib / bon, two separate consonants), how and why rewritten. S09 cobra replaced by robot. C12 and P7 hint 3 now rule out one distractor and leave two live choices.
- 4.c S01 hint 3 and C01 hint 3 no longer name a key. The stale pre- sentence was removed from the S01 why.
- H.3.a C06, S07, C12, S13 hint 3 rewritten (no first letter, no restatement of the key). S03 key is now quail (quiet was a T4 key). C05 distractor zebra became ladder. C11 now uses Monday, Friday, Saturday and Sunday, and "soft" in C03 became "warm", to avoid s followed by d or o, where the font shows a gap. I did not check other words on a phone.
- 3.F.F.1.d: Round 1 now waits about five seconds then marks self-fixed or told. Round 3 compares those, and adds a silent step (point to a spot where you went back) and a retell. The rationale was rewritten.

SHOULDs taken:
- 4.a: C03 and S03 hint 3 (no model word), S05 hint 3, S12 choices, S15 rebuilt as a short-e twin (head), leakage (camp became cube, brown became tall, rice removed). Teach: added a y-as-a-vowel point; removed "girl" from the get/give hard-g line.
- 4.b: S07 now tests starfish with Teach terms, S10 distractors are plausible reader moves, S12 sentence makes sense, leakage (hotel became pupil/tunnel, paper became music/spider). Teach: added a y-as-a-vowel point.
- 4.c: S-C1 slot-2 options differ in C01, S01, C08, S09. C08 uses unlikely (not -able). S15 became mis-, re-, pre- (the Teach labels had drifted).
- H.3.a: C10 asks what the note asks someone to bring and keeps "large". S04 asks what kind of word each is (not letter counting). C12 and S13 keys shortened so they are not the longest.
- Exceptions: 1.a irregular and look-alike words and a definition of quick; 1.b 95% called a rough guide, not a pass mark (also in the Teach line), and comparison by mistakes per 100 words; 1.c yes/no questions rise, wh-questions fall, plus a retell; 4.a swing letters and a capitals list with "follow your school's model"; 4.b joined-letters check.
- Matrix: 4.a oo/ou now "practised+assessed"; 4.c y to i and H.3.a r, z, f and capitals marked "not modelled"; H.3.a notes the single typeface.

Verified claims (web): get and give keep hard g before e or i: https://en.wikipedia.org/wiki/Hard_and_soft_G (girl not found there, so it was dropped). ough: tough /uf/, though /o/, through /oo/, thought /aw/, cough /off/, bough /ow/: https://en.wikipedia.org/wiki/Ough_(orthography).

Not done or still open:
- A second cursive face (only PP Cursive exists). Recorded in the matrix.
- Watch Me still models only s and capital S in H.3.a, and does not model y to i in 4.c. I changed the matrix wording instead of adding examples.
- 3.F.F.1.b: the timer's own text (lines about "about 95%") in F-FH.js is existing engine-facing copy and was not changed.
- coreException has no UI consumer yet (reviewer note N-X1).
- Twin hints are copied between a twin and its core item in some pairs (reviewer N-1); only the ones that named a key were changed.
- Open SHOULDs on accepted 3.L.V.3.a (not applied): C04 "row after row"; C11 key "A strong current pulled the raft downstream."; C02, S02, C06 hint 1 names the clue type; S10 key is the longest.
- STATUS.md (in the Project) still needs the B9 rows. `--record-versions` is the coordinator's.

## Second fix pass after review 2 (B9-review.md, "Second review")
All numbers below were measured on the final files with `lk4.js` (longest key, ties counted for choose-two), `an.js` (twin similarity) and `ckms.js` (keys), plus `check-content --all` (PASS, 0 failures), `check-writing` (0 failures) and `check-instructional-copy` (28 passed). These supersede the figures in the first fix pass.

Method for longest key: every mc, ms and dropdown slot in core (not refs), practice, similar and test forms. "Unique-longest" counts single-key picks whose key has more characters than every distractor. "Both-longest" counts choose-two items where the shorter key is at least as long as the longest distractor (ties count). The first fix pass counted ties differently, which is why review 2 found five choose-two items the log said did not exist.

| Lesson | Worst twin (set and multiset) | Unique-longest single keys | Both-longest choose-two |
|---|---|---|---|
| 4.a | 0.186 | 5 of 22 (23%) | 0 of 5 |
| 4.b | 0.200 | 6 of 27 (22%) | 0 of 5 |
| 4.c | 0.207 | 8 of 32 (25%) | 0 of 5 |
| H.3.a | 0.208 | 4 of 39 (10%) | 0 of 3 |

MUSTs fixed:
- 4.b S04: "cover" is cov-er in Merriam-Webster, so it was replaced by "bacon" (ba-con). Hints, how and why rewritten.
- 4.b C01 hint 3 no longer gives the count. C07 hint 3 and the C12 and P7 hint 3 now leave all three choices live.
- 4.c S03 and S05: the cover test now uses only words where covering the front leaves a non-word (under, until), and the wrong "Nit is left" line is gone. C03 now tests dis- (displeased, dish).
- 4.a S14: key is now "dice" (was "fence", which is test T6's key).
- H.3.a: C03, C06, S03, S07 are now fill-in-the-blank items whose printed choices are look-alike words, so the child must read the cursive to choose. S04 now asks for clue-to-word matches that depend on word order in the cursive, with the words printed in scrambled order. C04's printed words are scrambled for the same reason. C08 was replaced (new sign "Always knock before you open the door.").
- Choose-two ties fixed: 4.a C07 (cabin became cabinet), 4.b P6 (tunnel became channel), 4.b S14 (panel became pretzel), 4.b T4 (hotel became silent), H.3.a S05 (hams became sausage), H.3.a T4 (zero became zigzag). P6, T4 and the H.3.a T4 are existing practice or test items; only a distractor and the why were changed, no key.

SHOULDs taken: 4.a P6 hint 2 (it said one word had no c; all have a c) and S15 (now "spread", not Together P1's key "head"); 4.b S11 (Teach terms, no drift), S13 (asks for the last letter of the first syllable; frozen and visit removed); 4.c S15 (still a twin of P7; its labels are plain words) and C01 (unlock/relock, so it no longer repeats C04); H.3.a S05 prompt, C12 and S13 hint 3, C11 and S14 (Friday removed, it is a T3 word), and a Teach sentence that the letter s can leave a small gap in this font.

Syllable divisions checked in Merriam-Webster (fetched this pass): pock-et, sev-en, pa-per, ho-tel (via a Merriam-Webster mirror page), mag-net, ba-sin, win-ter, si-lent, pu-pil, mit-ten, mo-tel, ro-bot, pen-cil, spi-der, ti-ger, lem-on, riv-er, lim-it, ba-by, rib-bon, ba-con, bas-ket, mu-sic, fan-tas-tic, kit-ten, ti-ny, pup-py, rab-bit, plan-et, mel-on, pic-nic, cac-tus, tu-lip, wag-on, tab-let, pump-kin, win-dow, sand-wich, car-pet, teach-er, chip-munk, vis-it (mirror page). Review 2 also checked Sep-tem-ber, nap-kin, peb-ble, po-ny, in-sect, gar-den, mar-ble, pi-lot, cam-el, cup-cake. Not found on Merriam-Webster by me: morning (morn-ing from howmanysyllables.com only), table, frozen (no longer used), doctor (not used). Cover is cov-er, which is why S04 changed.

Phonics claims re-checked on the web this pass:
- Soft c and g before e, i, y, with exceptions (soft g: get, girl, gift): https://readinguniverse.org/skill-explainer/phonics-patterns/soft-c-and-soft-g-skill-explainer/an-overview-of-soft-c-and-soft-g . That page does not list "give". "Give" is supported by https://en.wikipedia.org/wiki/Hard_and_soft_G . The Teach line says "get and give".
- ea says long a in great, steak, break; short e in bread, head, spread: https://www.orchidsinternationalschool.com/english-concepts/ea-words
- y at the end of a one-syllable word says long i; at the end of a longer word it says long e: https://readinguniverse.org/skill-explainer/phonics-patterns/y-as-a-vowel-skill-explainer/explicitly-teaching-y-as-a-vowel
- ough variants: https://en.wikipedia.org/wiki/Ough_(orthography)

Still open: second cursive face (none exists); Watch Me models only s and capital S in H.3.a and does not model y to i in 4.c (matrix wording says so); the s-gap in the font is explained in Teach, not removed; coreException has no UI consumer. H.3.a now has five dropdown items in the core, all "read the cursive, fill the blanks". Accepted 3.L.V.3.a SHOULDs from the earlier log are unchanged. STATUS.md and `--record-versions` are still the coordinator's.

## Third fix pass after review 3 (B9-review.md, "Third review")
Measured on the final files: `check-content --all` PASS (0 failures), `check-writing` 0 failures, `check-instructional-copy` 28 passed. Twin similarity (word-set and multiset; I also ran the same script with whole hyphenated words and with both whole and split tokens, and all three gave the same worst values): 4.a 0.186, 4.b 0.200, 4.c 0.197, H.3.a 0.208. I could not reproduce the reviewer's 0.250 for 4.b S07 or 0.226 for 4.c S09 and H.3.a S03 with any tokenizer I tried. I reduced overlap on S07 (now 3 shared words of 34) and on H.3.a S03 anyway. Longest key (ties counted for choose-two): 4.a 5 of 22 single keys, 0 of 5 choose-two; 4.b 5 of 27 and 0 of 5; 4.c 8 of 32 and 0 of 5; H.3.a 3 of 39 and 0 of 3.

Corrections to earlier log statements:
- "Hints no longer narrow" (first and second fix passes) was false. 4.b C04 and S04 hint 3 handed over the split. Fixed this pass; I did not re-audit every hint in every lesson by script. I re-read hint 3 on each item I changed.
- "Choose-two both-longest: 0 everywhere" (first fix pass) was false when ties are counted. The second pass fixed the ties; the figures above are from the final files.
- "Answer words no longer printed beside the cursive" (second pass) was only partly true. Printed choices could still give the answer by meaning or position. Redone below.

3.F.P.4.b (all three MUSTs):
- C04 and S04 hint 3 now say "Say each choice out loud. Ask which one gives parts you can say as real syllables." for both items. They no longer name the split.
- C05: "tablet" became "pretzel" (pret-zel in Merriam-Webster), which has an r but no vowel followed by r. S05: "table" became "robot". How and why say the r comes before the vowel.
- P6 addon hint 3 and how now name channel, not tunnel.
- S07 reworded (prompt, options: r-controlled, silent-e, consonant-le / silent-e, closed, consonant-le).

3.F.H.3.a (M3-H1): the child now has to decode the cursive.
- C04 and S04 are now matching a name to a thing in cursive lines ("Quinn: red cap", "Hal: pink bike"). The pairing is only in the cursive. S12 uses the same design (cook to dish).
- C02, C03, C06, S02, S03, S07, S10, S14 now offer choices that all fit the sentence (for example slept, sulked and dozed), so only the letters tell them apart.
- C08 is a knock/look/lock-and-open/close sign with every choice sensible.
- Parent note: added that the cursive uses one font, that the child's school model may differ, and that the letter s can leave a small gap, so a word may look split.

3.F.P.4.a and 3.F.P.4.c (you asked for exact changes; wording only):
- 4.a S15 hint 3 now reads "Think about what you do with jam on toast. Then say each spelling in the sentence." It no longer points at the vowel spelling. (P6 hint 2 was already changed in the second pass.) Key unchanged.
- 4.c C04 now asks "Which front part gives each meaning?" with columns re-, pre-, mis- and the meanings as rows (again, before, wrongly, once more). Keys and the skill are unchanged; it no longer duplicates L-VOC-02-2 (0.20 under my measure).
- 4.c T4 (a test item) prompt and row labels reworded ("adding -ing to shine"), same columns and keys, so it is less like P4 (0.42 under my measure; I could not reproduce 0.68).
- 4.c S15 stays a twin of P7 (same rule: opposite, with lots of, free of). C03 (dis-) and C01 (unlock/relock) were already changed in the second pass.

Still open: only one cursive face; Watch Me does not model every tricky letter; the s-gap is explained, not removed; 14 common words listed by review 3 as not dictionary-checked (health, orange, stage, page, dream, beans, reach, cheap, speak, mean, seat, clean, head, beach) are still unverified by me; coreException has no UI consumer. STATUS.md and `--record-versions` are the coordinator's.

## Fourth fix pass after review 4 (B9-review.md, "Fourth review")
Measured on the final files: `check-content --all` PASS (0 failures, 100 warnings), `check-writing` 0 failures, `check-instructional-copy` 28 passed. Twin similarity (word-set, multiset, whole hyphenated words, and both): 4.b worst 0.200, H.3.a worst 0.206 (S06~C05). I did not touch 4.a or 4.c this pass. Longest key (ties counted for choose-two): 4.b 5 of 27 single keys, 0 of 5 choose-two; H.3.a 3 of 39 and 0 of 3. Hub check (`centroid.js`: key is the only option with the smallest total edit distance to the others): H.3.a 0 of 19 mc items (it was 15 of 19). 4.b is 4 of 12 mc items (C10, P1, T1, T2); I did not change those because 4.b is accepted and the review did not ask for it.

Corrections to earlier log statements:
- The third-pass line "C08 ... with every choice sensible" was false. Two of the four choices were not sensible signs, so meaning alone gave the answer. Redone below.
- The third-pass H.3.a line "all fit the sentence" for C02, C03, C06 and the others holds for those items only; C08 is the one that failed.

3.F.H.3.a (M4-H1, F-H1 to F-H5):
- C08 rebuilt. Sign: "Please wipe your feet before you come in." Choices: that sentence, "Please wash your hands...", "Please take off your shoes...", "Please wipe your shoes..." Each would make a sensible sign, so only the cursive letters decide. Hints 2 and 3 and the how and why were rewritten to match. S09 (its twin) keeps its own wording.
- Hub effect: distractors changed so the key is not the unique hub in C01, C05, C08, C10, S06, S09, S11, S15 (core and similar) and in P1, P2, P5, T1, T2, T3, T5. Where a tie was the best I could do with real words (river, window, Zoe, Tessa), the key is tied, not unique.
- F-H2: C04 names are now Fay, Wes, Pia, Ray and the cap is "gold cap" (no Quinn, Zoe or red in C04). C13 now asks for Thursday (options Thursday, Wednesday, Sunday), so Saturday is only in C11.
- F-H3: C01 choices are window, widow, willow, wilder; the why now names the real differences (five letters, double l, ending er). P5 hint 3 and how compare the second letter and the capital Z against J. S15 choices are Tessa, Tasha, Tilly, Tori; hint 3 and how compare the middle letters (e-s-s, a-s-h, i-l-l).
- F-H4: C12 and S13 hint 3 each rule out one choice only.
- F-H5: S12 is now "Pop: lentil soup".
- Test items changed (wording or distractors only; same ids, points, types and keys): T1 (choices 2 to 4), T2 (choices 2 to 4, clue, why), T3 (choices 3 and 4), T5 (choice 3). Practice items changed: P1, P2 (and its addon hint 1, 3 and how), P5 (and its addon hint 3 and how).

3.F.P.4.b (accepted; wording-only, no key changes):
- F-B1 C08 sentence: "Mia saw a pocket, a tiny frog, a music box and the sky." (sky is now in the sentence). Hint 3 now names tiny only.
- F-B2 S04: "Pillow splits as {0}." with options "pi / llow", "pil / low", "pill / ow" (key pil / low; Merriam-Webster pil·low, checked this pass). The how and why now say pil / low. No other lesson uses that option set.
- F-B3 test T3 rows: "fun in funnel" (closed) and "mo in moment" (open) replace "nap in napkin" and "ba in bacon". Merriam-Webster: fun·nel, mo·ment. The why now says Fun, Po and mo.
- F-B4 hint 3 now names one word: C03 "Clap puppy.", S03 "Clap farmer.", C05 "Split window...", S05 "Split puppy...". I made the same one-word change to C08 and S08 hint 3 for consistency.
- F-B5 S07: prompt is "Starfish has two halves. Which kind of syllable begins it, and which kind ends it?" Options are r-controlled, vowel team, consonant-le and vowel team, closed, consonant-le. I dropped silent-e rather than switch to vowel-consonant-e, because vowel-consonant-e raised the twin overlap with C07 to 0.31 (it is 0.200 now). mis and why say "kind" and name vowel team and consonant-le.

Still open: only one cursive face; Watch Me does not model every tricky letter; the s-gap is explained, not removed; coreException has no UI consumer. STATUS.md and `--record-versions` are the coordinator's.

## Fifth fix pass after review 5 (B9-review.md, "Fifth review")
Measured on the final files: `check-content --all` PASS (0 failures, 98 warnings), `check-writing` 0 failures, `check-instructional-copy` 28 passed. Twin similarity (word-set, multiset, whole hyphenated words, both): 4.b worst 0.200, H.3.a worst 0.186. Hub check: H.3.a key is the unique hub in 0 of 19 mc items; 4.b 4 of 12 (unchanged, accepted lesson). Longest key: 4.b 5 of 27 single and 0 of 5 choose-two; H.3.a 3 of 39 and 0 of 3. A script count of options per item found none with duplicates and none under three in H.3.a; in 4.b P5 and S13 are two-column matches (as before). The script counts options, not what a hint leaves live; I re-read hint 3 on each changed item.

Corrections to the fourth-pass section:
- It said the H.3.a twin worst was 0.206 on S06~C05. The pair was S13~C12 (S06~C05 was 0.17). Now S13~C12 is 0.186 after the S13 distractors changed.
- It said the pillow replacement was a clean fix. It was not: pill / ow is a sayable split, so the item had two defensible answers by its own criterion, and pil / low is also the key of SK-GUM3-8-C04. Replaced below.
- It did not list T1 (clue and why did not rule out choice B), and it did not say C08 "Please wipe your feet before you come in." repeats the key of SK-GUM2 ("...before you come inside."). Both fixed below.
- The hub fix left ties, not unique hubs, in several items (river, window, Zoe, Tessa and others). The tie counts are not in the figure above because the script reports unique hubs only.

3.F.P.4.b (accepted lesson; wording and distractors on one similar item; key now pup / pet):
- S04: "Puppet splits as {0}." with options `pu / ppet`, `pup / pet` (key), `puppe / t`. Merriam-Webster pup·pet (not re-fetched this pass; the reviewer cited it). The two wrong splits leave parts that cannot be said, so the item's own "real syllables" criterion picks one answer. How and why name puppet. `grep` of js/data finds no other use of puppet as a split or of `pup / pet`.
- Not done: S07 still avoids vowel-consonant-e. With it, the twin overlap with C07 was 0.31 (measured last pass), so it does not fit.
- New warnings from `check-content` on 4.b C08 and S08 ("hint 1 is much longer than hint 3") come from the one-word hint 3 change last pass; I left them.

3.F.H.3.a (all SHOULDs; no ids, points, types or keys changed on check items):
- T1 (check item, wording): clue "Check every word, especially the second word and the word after it." Why: "The second word is swim, the third word is in and the last word is lake. Swing, at and lane each change one of them."
- C08 sign is now "Please hang your coat on the hook." Choices: hang your hat on the hook; put your coat on the hook; hang your hat on the shelf. Hub: key tied, not unique. No match in js/data for the sentence. Hints 2 and 3, how, why and mis rewritten.
- C12 and S13: weak distractors replaced. C12: "Look only at the last letter and choose a word that ends like it." and "Say every letter of the word out loud, then stop." (print option kept). S13: "Copy the scribble over and over until it looks clearer." and "Choose any word that fits on the line, whatever its letters." and "Trace over the scribble in pen and then move on." Hint 2 on both now asks which words around the hard word can already be read, instead of stating the idea. Hint 3 rules out one option (print / tracing). Why lines updated.
- S08: step 2 is now "Read one word at a time." (taught in Learn It). Teach point 3 now also says "If you are still stuck, skip ahead, read on, and come back to the word with clues from the words around it." so skip-and-return is taught. S08 twin overlap with C07 is 0.17.
- C06 slot 2 is tall / long / high and S10 slot 1 is wash / scrub / rinse, so the idiom no longer gives the answer. Hint wording unchanged (letter counts still fit); why lines updated.
- Practice and core item edits: C06, C08, C12, S08, S10, S13. Check-item edits: T1 only.

Still open: only one cursive face; Watch Me does not model every tricky letter; the s-gap is explained, not removed; coreException has no UI consumer. STATUS.md and `--record-versions` are the coordinator's.
