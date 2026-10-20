# L-GUM3 fixes (response to reviews A and B)

Only `js/data/lessons/L-GUM3.js` was edited. `node verification/check-content.js --all`: PASS (0 failures, 0 warnings). Every mc item in the file now has exactly 4 choices.

## MUST
- **A+B [SK-GUM3-1-P4] frog's readable as "frog has".** Fixed: the sentence is now "Three frog's sat on a log.", so the plural is unmistakable.
- **B [SK-GUM3-1-T1] "Amaras'" defensible for a person named Amaras.** Fixed: the slot options are now Amaras / Amara / Amara's. Both distractors are wrong for any name.
- **B [SK-GUM3-1-T3] clue gives away won't** (also A NIT). Fixed: the clue is now "Say will not fast, the way you talk. Which word do you hear? Then check where the apostrophe goes."
- **A [SK-GUM3-2-P5] clue rules out every distractor.** Fixed: the clue is now "Child and mouse are special nouns. Say 'one ___, two ___' for each."
- **A+B [SK-GUM3-8-T1] honey/market splits defensible by clapping.** Fixed: Lesson 8 Teach now states three division rules: split between two different consonants (gar-den, sis-ter, pen-cil), split between double letters (hap-py, bub-ble), and split a compound word between its two words (sun-set, cup-cake). Clapping is now used only to count syllables. T1 was rebuilt with words decided by those rules: pic-nic (key), la-dder, silv-er, napk-in. No VCV words like honey are used anywhere.
- **A [SK-GUM3-8-T2] bu-tterfly defensible by clapping.** Fixed: the double-letter rule now decides it (but-ter). The why also explains that the stem's split, butter-fly, is correct by the compound rule.
- **Coordinator: every hyphen item decidable by what is taught.** Fixed: I rechecked every hyphen word against the three rules plus the one-syllable rule. I dropped hungry (three consonants), turtle and pumpkin. Learn now has three examples: win-dow (two consonants, correct), mi-tten (double letter, wrong), and scho-ol (one syllable, wrong).

## SHOULD
- **A+B mc with 3 choices [SK-GUM3-4-T5, SK-GUM3-8-T1].** Fixed: 8-T1 now has a fourth split word. 4-T5 is now a four-sentence mc. Its distractors use but, or, and so with a reason that makes no sense ("wide awake, so it took a long nap"). I avoided "and" because it is defensible, and "yet" because its meaning is not taught at grade 3.
- **A+B [Lesson 8 Teach] needs a division rule.** Fixed (see MUST).
- **A [Lesson 8 Test reuses Practice/Learn words].** Fixed: the test words (picnic, ladder, silver, napkin, butterfly, night, clown, hammer, candy, marble, helmet, kitten, pillow, cactus, rainbow) appear nowhere else in the lesson. Practice was also rebuilt with doctor, carpet, muffin, winter, summer, bright, basket, popcorn, letter, monkey, jump and birthday. The only overlaps are school, which appears in Learn, Teach and P2 as a one-syllable example, and garden, which appears in Teach only.
- **A+B [Lesson 6 Teach] "by myself" and emphatic uses not covered.** Fixed: I added the point "You can also use a -self word after by to mean alone (I did it by myself), or to show someone did it with no help (They cleaned it themselves)." I merged the old match and -self/-selves points to keep Teach at 5 points.
- **A+B [SK-GUM3-7-P4] prompt says "use commas" but a key has no comma.** Fixed: the prompt is now "Choose the TWO sentences that are punctuated correctly."
- **A [SK-GUM3-4-P3] FANBOYS clue picks out "or".** Fixed: the clue is now "Find the word that links the two things you could do. Cover it and see if the two parts are still connected."
- **A+B [Lesson 3 Teach point 5] "this morning" is not always past.** Fixed: replaced with "last night".
- **B [SK-GUM3-4-P1, T1, T5] clues name the job that maps to the key.** Fixed: the job names are removed. The clues are now "Why did they bring umbrellas? Read both parts and think about how they connect.", "Read the whole sentence. What is it asking you to do?" and, for the rebuilt T5, "Does the second part really go with the first part? Why would a puppy take a nap?"

## NIT
- **A [SK-GUM3-1-T3] clue.** Fixed (see B MUST).
- **A [SK-GUM3-6-T3] clue leaves only themselves.** Fixed: the clue is now "Who gave the cheer? Count how many, and check that the word you pick is a real word."
- **B [Lesson 3 Learn 2] "bring tells about now".** Fixed: the step now reads "Bring is not a past-tense word."
- **B [Lesson 2 Teach point 2] "letters inside".** Fixed: now reads "Some nouns change their spelling".
- **B [SK-GUM3-5-T1] "home" is an adverb.** Fixed: the stem now ends "come back", the "home" choice is replaced with "lost" (a verb), and the why is updated.
- **B [SK-GUM3-5-P2, T2] clues hand over the verb.** Fixed: both clues are now "Is a ___ one group or many separate things? Think about which verb goes with that."
- **B [SK-GUM3-7-P1] near-repeat of the Lesson 4 Teach example.** Fixed: new sentence, "Jada wanted to bake cookies, but we had no eggs."
- **B [SK-GUM3-2-T4] rows repeat Learn/Practice.** Fixed: rows are now goose, person, ox, moose, with columns geese, people, oxen, moose. Goose also appears in P3, but there it is sorted by type, not matched to its plural.

Declined: none.

## Round 2 (response to L-GUM3-verify.md)

Checker: `node verification/check-content.js --all` gives PASS (0 failures, 0 warnings).

- **SHOULD [Lesson 8 Teach point 3] the consonant rule has no exception for th, sh, ch, ck.** Fixed. I added this to point 3: "But letters that make one sound together, like th, sh, ch and ck, stay together: moth-er, rock-et." I checked every lesson 8 item: none splits a th, sh, ch or ck pair. Birthday is split by the compound-word rule.
- **SHOULD [Lesson 8 parent] "sandwich" is not decided by a taught rule.** Fixed. It is replaced with "button" (double t).
- **SHOULD [SK-GUM3-2-T4] moose row is a free match.** Fixed. The rows are now person, ox, wolf and knife, matched to people, oxen, wolves and knives. No row matches its own column text. Teach point 3 now adds "wolf becomes wolves" and "knife becomes knives the same way."
- **SHOULD [SK-GUM3-2-T2/T3/T4/T5] test items reveal each other's answers.** Fixed. Each irregular noun now appears in only one test item:
  - T1: woman/women. The clue no longer mentions man.
  - T2: moose and sheep (keys); mouse, child and goose (distractors). Teach point 4 now lists moose.
  - T3: foot/feet.
  - T4: person, ox, wolf, knife.
  - T5: tooth. The other three sentences use only regular plurals (farmers, boxes, books, puppies).
- **NIT [SK-GUM3-2-T3 clue] "changes the letters inside".** Fixed. It now reads "The word changes its spelling instead of adding -s."

Declined: none.
