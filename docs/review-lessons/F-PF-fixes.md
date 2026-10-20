# F-PF fixes (responses to reviews A and B)

The checker passes with `--all`: 0 failures and 0 warnings. Every mc item has exactly 4 choices. Item counts are below; each test row ends with its point total.
- 3.F.P.4.a: 7 practice, 6 test (8 pts)
- 3.F.P.4.b: 7 practice, 6 test (9 pts)
- 3.F.P.4.c: 6 practice, 5 test (7 pts)
- 3.F.F.1.a: 7 practice, 5 test (6 pts)
- 3.F.F.1.d: 5 practice, 5 test (6 pts)

## MUST
- **A [SK-FF1d-T1] T2/T3 prompts give away T1's answers.** Fixed. T2 and T3 are now standalone `stem` items with `passages: []` and new sentences (Leo: "horse" for hose; Mia: "cold" for could). No Test prompt now names a misread word from p2. The Practice overlap (P1–P3) stays as reviewer A allowed.
- **B [3.F.F.1.a teach.example] "could" note false.** Fixed. The line now reads "could: the oul sounds like the oo in book, and the l is silent". With that, the note ("the rest of each word follows the rules you already know") is true for all four words.
- **B [SK-FF1a-P3] Clue gives the answers away.** Fixed. The clue is now strategy only: "Picture each word in a book you have read. Both words have a tricky part that is not spelled the way it sounds."

## SHOULD
- **A [SK-FF1d-P1 why] Names P3's answer (honey).** Fixed. It now says "money is not something you put on pancakes".
- **A+B [3.F.F.1.a Test] Reuses Practice and Learn words.** Fixed.
  - T3 now uses busy and build.
  - T4 now uses Where/Were/Wear/Wore, not though/through.
  - T5 is now an of/off context item, not "anser".
  - T1 (again) and T2 (does) were already new words.
- **A+B [3.F.F.1.a] Mostly spelling, not reading in context.** Fixed.
  - Added two context items: P6 (saw/was/sew dropdown) and P7 (hottext, "came form Grandma").
  - Turned two test items into context items: T4 (Where in a question) and T5 (turn of/off the lamp).
  - Teach now says that some sight words follow the rules (and, went, just) and are learned by heart because they are common. It also adds a look-alike point (was/saw, from/form, where/were).
  - The big idea now covers both kinds of sight words.
  - The parent note now covers flash-reading for automaticity.
- **A [3.F.P.4.b splits] One-letter splits are not plausible.** Fixed.
  - P1 is now fantastic, with plausible wrong splits: fant / as / tic, fa / ntas / tic, fan / ta / stic.
  - T1 is now September, with plausible wrong splits: Se / ptem / ber, Sept / em / ber, Sep / te / mber.
  - P5 (music/wagon) is now a match item that sorts music, wagon, tulip and planet by "before the consonant / after the consonant". I did not use a 2-option dropdown because the checker requires 3+ options per slot.
  - T4 (robin) is now an ms item: robin and seven are the keys; paper, baby and hotel are the distractors.
- **A [Tests mirror Practice] 4a-T4, 4b-T3, 4c-T4.** Fixed.
  - 4a-T4 is now an ms item, "Which TWO words have a g that sounds like j?" The keys are giraffe and page. The distractors are gift (it breaks the rule), goose and wagon.
  - 4b-T3 now matches syllables inside longer words (nap in napkin, po in pony, ple in apple, ba in bacon). Its columns are closed, open and consonant-le, and open is used twice.
  - 4c-T4 now has 5 rows. Drop-e and y-to-i are each used twice, and "no change" is unused. The clue says a column can be used more than once or not at all.
- **B [3.F.P.4.a] No encoding items.** Fixed.
  - Added P7, a dropdown: "a warm loaf of {bread / bred / breed}".
  - Added T6, a dropdown: "jumped over the {fence / fense / fenc}".
- **B [3.F.P.4.b] No encoding items.** Fixed.
  - Added P7, a dropdown: "blow out the {candle / candel / candal}".
  - Added T6, a dropdown: "a smooth {pebble / peble / pebbel}". Its why says that "peble" would split pe / ble, with a long e.
- **B [3.F.P.4.b learn 1] BAS-kit contradicts "both vowels short".** Fixed. The answer is now "bas / ket. Both syllables are closed, so both vowels are short." The respelling is removed.
- **B [SK-FP4a-P4, T4] "z" option is implausible.** Fixed. In P4 the third option is now "the k in kite". The old T4 was replaced (see above).
- **B [SK-FF1a-P2] Clue near-giveaway.** Fixed. The clue is now "This word sounds like it has the e from bed, but it is not spelled with e. Picture it in a book."

## NIT
- **A [SK-FP4a-P4/T4 why] Rule stated as absolute.** Fixed. The P4 why now adds "g is often soft before e, i or y". T4 was replaced, and its why names gift as an exception.
- **A [SK-FF1d-P3 clue] Near-giveaway.** Fixed. It now reads "Which word would make sense on top of pancakes? Check that it also looks like money."
- **A [SK-FP4c-P6] "ant" too easy.** Fixed. The distractor is now "plan".
- **B [3.F.P.4.a teach point 3] Hard c before a consonant is not mentioned.** Fixed. The point now says "before a, o, u or a consonant, as in cat, cup and clap."
- **B [SK-FP4a-T4] Near-copy of P4.** Fixed (see the SHOULD on tests mirroring Practice).
- **B [SK-FP4b-T3] Re-skin of P2.** Fixed (see the SHOULD on tests mirroring Practice).
- **B [3.F.F.1.a learn 2] "though = even if" is imprecise.** Fixed. It now reads "Though means something like but or even so."
- **B [SK-FF1d-P2 clue] Very easy.** Fixed. It now reads "Think about what Grandpa uses to cook on the stove. Check that the word also looks like plan."
- **B [SK-FF1d-T2/T3] Leak T1 if the child can go back.** Fixed (see the first MUST).

## For re-review
- New syllable splits, all standard dictionary divisions: fan·tas·tic, Sep·tem·ber, tu·lip, plan·et, sev·en, pa·per, ho·tel, ba·con, po·ny, can·dle, peb·ble.
- New sound claims:
  - the u in busy and the ui in build say short i
  - gift has a hard g before i
  - page and giraffe have a soft g

## Round 2 (responses to F-PF-verify.md)

I re-read every clue in the file with one test: is the clue a reusable strategy, or does it single out one choice? `node verification/check-content.js --all`: PASS, 0 failures and 0 warnings in F-PF.js. The 23 warnings it reports are all in other files.

### Verify findings
- **SK-FF1a-P2 (MUST).** Fixed. The clue is now "This word has a tricky part: the sound you hear is not spelled the way it sounds. Picture the word in a book you have read." It no longer contains a letter test.
- **SK-FP4a-P7 (MUST).** Fixed. The clue is now "Some of these are real words that mean something else. Read each one in the sentence, then picture the word on a bag at the store." It no longer mentions ea.
- **SK-FP4a-T6 (SHOULD).** Fixed. The clue is now "Think about how the s sound is spelled at the end of words like this, and what keeps a c soft." It no longer names words that end in ce.
- **SK-FF1a-T1 (NIT).** Fixed. The clue is now "Picture the word in a book you have read. Check each choice letter by letter, in order."
- **SK-FF1a-P6 (NIT).** Fixed. The why now explains that "I was a deer" would mean you are a deer.
- **SK-FF1a-T5 (NIT).** Fixed. The prompt now reads "Read each sentence. In which sentence is one word wrong?" The clue was also rewritten, so this item no longer matches P7 word for word.

### Other clues rewritten in the self-audit
Each of these clues narrowed the choices to the key. Each one now names the strategy only.
- **SK-FP4b-P7 (candle):** the clue pointed to the consonant-le ending. It now says to spell one syllable at a time and check each against the syllable types.
- **SK-FP4b-T6 (pebble):** the clue said the first syllable must be closed and pointed to the ending, which ruled out both distractors. It now says to use what each syllable type tells you about the vowel sound.
- **SK-FP4c-P2 (making), P3 (stopped), T2 (hopped/napping), T3 (tried):** each clue applied the spelling rule to that one word. They now say to look at how the base word ends and use the spelling rule that fits.
- **SK-FP4c-T5 (refill):** the clue said "find the word that starts with it", and refill is the only choice with re-. It now says to find the base word and think about what the prefix or suffix adds.
- **SK-FF1a-P1 (because):** the clue spelled out the mnemonic, which spells the key. It now says "use a memory trick you know for this word" and to check letter by letter.
- **SK-FF1a-T2 (does):** "this word goes with do" pointed to the d-o start. The clue is now picture-and-check.
- **SK-FF1a-T3 (busy/build):** "not spelled with just an i" ruled out two options per slot. The clue is now picture-and-check.
- **SK-FF1a-T4 (Where):** "asks a question about a place" defined the key. The clue now says to read each word in the sentence and ask whether it makes sense.
- **SK-FF1d-P2 (pan), T2 (hose), T5 (fish):** each clue named the thing the key word means, such as "what Grandpa uses to cook" or "what a kitten drinks from". They now say to find a word that makes sense in the sentence and looks like the misread word.

### Clues kept on purpose
Some clues state a general rule from Teach, such as "C is usually soft when e, i or y comes next" in 4a-P3 and P6, and "consonant followed by l and e" in 4b-P6. I kept these. Applying the rule is the skill being practiced, and the rule is a reusable strategy that does not name or describe a single choice.
