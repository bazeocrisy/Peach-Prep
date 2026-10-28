
## First review (B7b lessons 6-9)

Reviewer: independent (did not author). Lessons: 6 personal pronouns (`use-personal-pronouns-subject-object-possessive`), 7 prepositions (`use-frequently-occurring-prepositions`), 8 commas (`use-commas-in-a-series-and-in-dates-addresses-sa`), 9 verbs with -d or -es (`form-and-use-verbs-by-adding-d-or-es`). These are the last four of the nine B7b lessons in `js/data/lessons/L-GUM2.js` (array indices 5-8, file lines 8294-14990). Reviewed against the frozen copy of `/home/claude/pp-content`. The other reviewer takes lessons 1-5 and appends their own section. Read-only: no lesson edits, no git writes. The local test server (port 8941, pid 24587) was killed by pid.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 6 Pronouns | CHANGES REQUIRED | 3 | 6 | 4 |
| 7 Prepositions | CHANGES REQUIRED | 3 | 7 | 4 |
| 8 Commas | CHANGES REQUIRED | 4 | 8 | 5 |
| 9 Verbs -d / -es | CHANGES REQUIRED | 4 | 5 | 4 |

The keys are sound: an independent blind solve agrees with the data on 159 of 160 answers (one slip of mine), the 24 drafts are 101-134 words with FK at most 4.1, and all 60 core items take the key with real taps at 390 x 844. The MUSTs are all small edits: two hint ladders that leave one live choice because the stem already says "needs a comma" (L8 C04, C12); false statements in hint 1 (L7 S13; L9 C13, S13); one keyed repair that is not good English (L7 S12 "beside my side"); one hint 3 that names every row of a match (L7 P4); one stale hint (L6 S05); and six core/twin pairs over the 0.30 whole-text overlap threshold (frame-for-frame repeats such as L6 C04/C12 at 0.46/0.52 and L9 C04/C12 with word-for-word identical hints). The author log's "no hint narrows" and "max twin Jaccard 0.208" are not true for the items named below.

### Method and blindness

- **Blind solve.** `scratchpad/b7brev2/blind.js` loads `L-GUM2.js` in a Node `vm` sandbox with a mock `PP.addLesson`. For lessons 6-9 it prints each lesson's six drafts (with the "(n)" markers and per-sentence numbers), then every core item (refs resolved), S01-S15, the five Together items and the five Test items. Choices, dropdown options, hot-text options, ebsr parts and the order of hot-text target sentences are shuffled by a seeded LCG (`91000 + 977 x lesson`); the permutations went to `hidden-N.json` and were not opened until answers were saved. The printed fields are a whitelist: id, type, points, passage ids, `stem`, `prompt`, choice/option text, dropdown text and slots, targets (as sentence text), match rows and columns, and the pick count. No `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like` or `addons` text reached me. No figures or alt text exist in these four lessons (`fig:none` on all 24 drafts).
- **Items solved: 160** (40 per lesson: 15 core, 15 similar, 5 Together, 5 Test). Core items P4 and P5 are also Together items, so each of those was solved twice under two different shuffles. Answers were saved (`ans6.txt` to `ans9.txt`) before any key was extracted by `grade.js`.
- **Agreement: 159 of 160 (99.4%).** The raw grader shows 155 of 160, but four of the five "misses" are artifacts (L6 P4, L7 P5, L8 P3, L9 P5): the grader compared the core-position shuffle to the Together-position permutation file; my answers to both copies were the same item and correct. The one real miss is mine: **6-S07 Part A**. I read "Us names the doer ... receiver" backwards and picked the reversed option; the key (Us names the receiver, yet the hammering needs a doer) is right.
- **Fully blind? Almost, with three disclosures.** (1) My first printer left out the `stem` field. Five lesson 7 items (C09, S09, P2, T2, T3) and two lesson 8 items (C09, S09) have a `stem` holding the sentence under discussion. I noticed when "this sentence" had no sentence, regenerated the files, and answered every stem item with the stem visible, except 7-C09, where I had already typed `A` (behind) from the four one-word choices; the stem later confirmed it. (2) Before solving I printed `like` for each similar item (shape check), which shows which core item an S item mirrors but no key. (3) Before solving I read the author's helper scripts `b7b/lib.js` and `b7b/blind.js` (code only; I did not open any output or `hidden-*.json`). After saving answers I read keys through `keyed.js`, then B7a-review.md and grepped B6-review.md for defect classes, then the author log (last).
- **Mechanical checks** (scripts in `scratchpad/b7brev2`):
  - Points, picks, types: every ms and hot-text pick-two is 2 points with the key count equal to `pick`; ebsr, match and two-slot dropdowns are 2 points; every mc has one key. No mismatch. `like` targets resolve and mirror type, points and DOK for all 60 similar items.
  - Core mix per lesson (identical in all four): mc 5, dropdown 3, hottext 4, ebsr 1, match 1, ms 1; DOK `222232321322223` (one DOK 1, ten DOK 2, four DOK 3); 21 points. Ten or more core items sit inside a numbered draft (plan needs five). Each set has its own draft (set 1 p1, set 2 p2, set 3 p3), and the twins use p4-p6, so there is no cross-set or core-to-similar draft giveaway.
  - Passages: 24 drafts, 101-134 words with "(n)" excluded, numbering sequential in all, `readability.py` FK 2.0-4.1 (limit 4.5). Lesson 8 letters carry date, greeting and closing lines as numbered "sentences" (13-15 each).
  - Longest key (`mech.js`): across 134 single-key slots and 13 choose-two lists, the key is uniquely longest in one slot: **7-T4** (47 characters against 33, 33, 40, 29). No choose-two tie where both keys are the two longest. No new core or twin item has a longest key.
  - Twin whole-text Jaccard (`jac.js`, `jac2.js`; tokens over stem, prompt, text, choices, slot options, match rows and columns, ebsr parts and the sentences a hot-text item targets): S-vs-core max **0.24 / 0.26** (set / multiset), not the author's 0.208, because the target sentences are counted. Pairs above 0.21: L6 S06/C06, S11/C11, S13/C13, S03/C07; L7 S04/C04, S04/C12, S11/C11; L8 S03/C12, S06/C06, S11/C11; L9 S06/C06, S11/C11. None reaches 0.30. **Core-to-core and similar pairs at or above 0.30 (new items only):** L6 C04/C12 0.46/0.52, L6 C07/C10 0.32/0.28; L8 C03/C10 0.37/0.32, L8 C03/C07 0.33/0.22; L9 C03/C07 0.35/0.26, L9 C04/C12 0.31/0.29. Lesson 7 has no new-item pair at 0.30 (max C03/C07 0.27). The old Together and Test items also overlap one another (for example L6 P1/T2 0.43, L7 P2/T2 0.40, L8 P2/T2 0.40); that is pre-existing and noted once at the end.
  - Hints: I recounted live choices after hints 1-3 for every item and every dropdown slot by reading, then scanned all hints for count words (`hintscan.js`) and for numbered references on free-standing hot-text items (`numref.js`: none; "first blank" and "second blank" are slot references and are fine).
  - Stale-token scan (`stale.js`) for words in hints, how and why that appear nowhere in the item, its draft, Teach or Learn: only one real stale hint (6-S05 hint 3).
  - Learn It / Teach against items (`tl.js`): no sentence of four or more words is repeated, but keys repeat Teach and Learn words and examples; see the SHOULD rows.
  - Cross-file duplicates (`xdup3.js`, `near.js`, `concept.js` over every file in `js/data/lessons`, `sets`, `tasks`): exact sentence duplicates only for the frame prompts ("Choose the word that correctly completes the sentence.", "Select the sentence that has a spelling error."). Near duplicates (Jaccard 0.6 or above) listed in each lesson's NOTE rows. No concept duplicate among the other 60 or so lessons and sets, but L-GRM-02-5 (commas) and L-GUM4 lesson 1 (prepositional phrases) are the nearest neighbours.
- **Browser, 390 x 844, touch, one Chromium process per lesson** (`run390.py`, Playwright, browse-mode fixture). For each lesson I opened sets y, y2 and y3 and, for all fifteen core items, pressed Give me a hint three times, answered with real taps or `select_option` (choices, hot-text options, dropdown selects, match buttons, both ebsr parts), pressed Check my answer, then Show me how. Result: **60 of 60 core items accepted the key as "That's right!"**; the hint button read "No more hints" and was disabled after three presses on all 60 (including P4 and P5, whose hints come from `addons`); `scrollWidth` was 390 on every item; no choice, hot-text option, match button or select was under 40 px tall or past the right edge; zero page errors. Passage items open on a "Read the passage" tab on a phone, as before.

### Web sources (author listed dictionary and grammar claims as sources; I checked the ones the keys depend on)

- **until is a preposition before a noun and a conjunction before a clause.** Merriam-Webster: https://www.merriam-webster.com/dictionary/until . Preposition examples are `stayed until morning`, `we don't open until ten`; conjunction examples are `play continued until it got dark`, `Stay here until the danger has passed`. **before** is also a conjunction ("call me before you go"): https://www.merriam-webster.com/dictionary/before . This matters for L7 C05 sentence 7, C10 sentence 9 and S08 option A (see Lesson 7).
- **beside** means "by the side of": https://www.merriam-webster.com/dictionary/beside . "Beside my side" is redundant (L7 S12).
- **Pronoun after a preposition or verb takes the object form** (for Maya and me, told Sam or me): https://www.grammar-monster.com/lessons/between_you_and_I_or_me.htm (preposition rule) and https://www.kent.edu/writingcommons/using-case-subjective-objective-possessive (subjective, objective, possessive; "mine, yours, his, hers, ours, theirs" stand alone and "my, your, his, her, its, our, their" come before a noun; "Jane got sunburn on hers shoulders" is wrong). Supports every L6 key, including Hers backpack and Theirs dog as errors.
- **Commas.** https://fscj.pressbooks.pub/successfulwriting/chapter/3-1-commas/5 : comma between day and year; a comma after the street and after the city in an address; a comma after a greeting and after a closing; a comma after the year when a sentence continues after a full date. **The same page says "The word and is added before the last noun, which is not followed by a comma"**, so the serial comma the lesson requires is a style choice, not a universal rule (see L8 NOTE; no item turns on it, I checked every list sentence in `oxford.js`).
- **Verb spelling.** https://human.libretexts.org/Courses/Irvine_Valley_College/The_Grand_Grammar_Guide_(ESL_388)/01%3A_UNIT_1-_Verb_Tense_Review_(Theme-_Identity)/1.13%3A_Parts_of_Speech/1.13.03%3A_Spelling_Rules_for_Nouns_and_Verbs : -es after s, sh, ch, x, z; consonant plus y changes to -ies or -ied; vowel plus y keeps the y; silent e takes -d; go, do and have are irregular (goes, does, has). Supports every L9 key. No disputed variant found: `brushs`, `trys`, `passs`, `inviteed`, `dancd`, `emptys`, `pushs`, `catchs`, `hurrys`, `mixs`, `shapeed`, `lovd`, `replys`, `boxs`, `glueed` are all plain errors.
- Official wording read from `js/data/standards.js`: L6 "Use personal pronouns (subject, object, and possessive)." (p. 15); L7 "Use frequently occurring prepositions." (p. 15); L8 "Use commas to separate items in a series and to format dates, addresses, salutations, and closings." (p. 15); L9 "Form and use verbs by adding -d or -es." (p. 16).

### Lesson 6: personal pronouns (CHANGES REQUIRED)

Strengths: every key is right and defensible (checked against Kent and Grammar Monster); the cover-up-the-name strategy is used consistently; hot-text stems are scoped ("sentences 2 through 6") with exactly the keyed number; the DOK 3 claim items (C10, C15) and the "same words, different job" item (C05) are good; set drafts are distinct and every error in every draft is covered by some item.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 6-C04 / 6-C12 (and S04 / S12 hints) | Same frame, same option triple (they / them / their), one-sentence stems that differ only in the draft sentence ("Sentence 4 has the wrong pronoun. Choose the pronoun that fixes it." / "Sentence 5 ..."); hint 1 identical, hint 3 identical except the blank. Whole-text Jaccard 0.46 set / 0.52 multiset (limit 0.30; plan 4.3 rule 6, no two sentences share a frame). | Make C12 a different task, for example a dropdown inside a two-sentence stem, or change one option set (use us / we / our) and the hint 3 wording. |
| MUST | 6-C07 / 6-C10 | Both are about p2 sentence 2 (`Mom gave Ben and I a deck of cards`), same fix (me), same cover-up reasoning; set 2 also tests the same sentence in C06. Jaccard 0.32 / 0.28. | Move C10's claim to another sentence of p2 (sentence 4 or 6) or give C10 a different skill (for example the polite-sounding claim about a different pronoun). |
| MUST | 6-S05 hint 3 | Stale text copied from C05: "How long a sentence is, or where it sits in a draft, does not choose the pronoun." None of S05's four options mentions length or position (options: captains vs handed the ball, "neither sentence has a flaw", "the ball is a thing", "captains always take I"). The hint rules out nothing and cites distractors that do not exist. | Rewrite hint 3 to rule out one real distractor, for example "Whether Noah is a captain does not decide the pronoun. Think about the other choices." |
| SHOULD | 6-C12 hint 2 (and how step 1) | "Find the verb that comes right before the blank, and ask who gets the telling." States that the blank is a receiver, which is the whole key (them), and hint 3 then removes their, leaving they vs them with the answer already hinted. The twin C04 hint 2 ("Find the verb that comes right after the blank") is neutral. | "Look at the word that comes right before the blank." |
| SHOULD | 6-S10 `like` | Mapped to C10 (DOK 3, subject vs object, "sounds polite" claim) but tests hers vs her (standalone owning word). C14/S14 already cover that skill; no twin practises the C10 skill at DOK 3. | Rewrite S10 as a claim about I vs me (for example "Mia says Dev and I is always more polite" with its own draft sentence), or re-point `like` to C14 and add a DOK 3 twin for C10. |
| SHOULD | p5 sentence 5 | `The shiny red toolbox on the high shelf is hers.` The draft has no female referent for hers (cousins, Grandpa, Ravi, "I"). It is keyed correct in S06 and carries S10, in a pronoun lesson. | "...is Grandma's" is wrong for the item; use "...belongs to Mia, so it is hers" or add a girl to sentence 1. |
| SHOULD | Learn It | Watch Me models I/me by cover-up (items 1 and 3) and their before a noun (item 2). Core C13 (slot 1 theirs vs their), C14, S10, S14 and P5 need the standalone owning words (mine, hers, ours, theirs); only Teach point 3 says it, and no Learn It shows it. | Swap Learn 2 for an example that contrasts `The red bike is mine` with `my bike` using a different noun. |
| SHOULD | Twin overlap | Hot-text and match twins sit at 0.22-0.26 against their cores (S06/C06 0.24/0.24, S11/C11 0.22/0.26, S13/C13 0.24/0.21), above the 0.21 target, mostly because the target sentences reuse the same names and frames. | Vary the names and verbs in the twin drafts' target sentences. |
| NOTE | 6-C13 / S13 slot 1 hint 2 | "The first blank comes right before a noun" applies only to the key (their, his) among the options, so it narrows slot 1. Live choices after hint 3: slot 2 two, slot 1 three by naming. Allowed. | none |
| NOTE | 6-C10 | Hint 3 removes two options at once (B and C, both "sounds right" claims) leaving A and D. Allowed (two live). | none |
| NOTE | 6-C14 / S14 stem | "Choose the sentence in which a standalone owning word sits before a noun" reads as jargon at grade 3. Teach says "stand alone". | "Which sentence uses an owning word in the wrong spot?" (the S14 stem is clearer). |
| NOTE | p1 sentence 5 | `Mrs. Reed handed Jada a dollar, and she smiled back.` is ambiguous (Mrs. Reed or Jada) in a lesson about pronoun jobs. Not targeted by any item. | Optional. |
| NOTE | Cues | C09 and S09 are the DOK 1 items (one allowed per fifteen, two maximum). No longest-key cue. | none |

### Lesson 7: prepositions (CHANGES REQUIRED)

Strengths: place-versus-time is a clean, teachable contrast, every error is a real mismatch (during the gate, until a bench, between the wall), keys agree with my solve on all 40 items, and the DOK 3 claim items (C10, C15, S10, S15) work. Stems and hint 1 are consistent with Teach.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 7-S13 hint 1 (false) | "The two gaps follow different ideas. Decide what each noun names." The key is `through the canyon` and `under the stars`: both nouns are places (its own how says "Both nouns are places", misconception: "Both nouns here are places"). A child told the gaps differ is pushed toward a time word (`until`, `during`) for one of them. The twin C13 is accurate (along / at noon). | "Both gaps need a preposition. Decide what each noun names." (or give S13 a where/when pair like C13). |
| MUST | 7-S12 key | Keyed repair: `Ms. Vega waited beside my side as I swam my very first lap of the pool.` Beside already means "by the side of" (Merriam-Webster), so the repaired sentence is redundant and not good English in a lesson on correct usage; the item also carries sentence 6 of p6 into S11. | Rewrite the draft sentence and slot, for example `Ms. Vega waited {at / during / under} my side`, update how, why and S11's target sentence. |
| MUST | 7-P4 hint 3 (core set 1 ref, `addons`) | "Bridge, barn and river are things you can stand near." Those are exactly the three Where rows; with two columns the other three rows follow by elimination, so hint 3 hands over the whole sort. | "Use the noun at the end of one group to sort it first." |
| SHOULD | 7-C05 key, 7-C10 key, 7-S08 option A (and the correct sentences C06 (3), C11 (6), C14 (3)) | `until the sun began to set` (C05 sentence 7), `until the bell rang for lunch` (C10 sentence 9) and `before the sun comes up` (S08 A, keyed as a preposition) are conjunctions with a clause, not prepositions with a noun (Merriam-Webster until/before, URLs above). Teach and hint 1 tell the child "a preposition starts a group of words that ends with a noun". The keys are still right about meaning (until tells when), but the hints ("what kind of noun follows until") describe a clause as a noun group. | Use noun objects in these places: `until dark`, `until the end of recess` (C10), `before sunrise` or `before supper` (S08 A), `until sunset` (C05 sentence 7). |
| SHOULD | 7-C04, C12, S04, S12 hint 2 | "The blank needs a preposition for where the turtle rested" / "... a word that tells where they sit" / "... where the display sat" / "... where she waited" states the key's category. With hint 3 naming one wrong word the ladder leaves on the order of two live by naming, but the category statement already eliminates the other time word (until). Literal count passes (two live); in substance the child is told the answer's class. | Hint 2: "Picture the log. What kind of word would show how the turtle and the log are related?" |
| SHOULD | 7-C04 / 7-C12 (and S04 / S12) | Same key (`on`) and the same distractor (`until`) in both, set 1 and set 3; stems differ only in the noun (log / rack), Jaccard 0.27 / 0.26. | Change C12 to a when item or a different key (`in`, `under`). |
| SHOULD | 7-P5 (core set 1 ref) | Plan 04 section 4.8 lists SK-GUM2-7-P5 as a weak item ("obvious clue or answer"): `The fish swam during the bowl.` is self-evidently wrong; the item is DOK 2 in name only. It is still one of the fifteen. | Replace in the fifteen with a draft-based item, or keep it as Together only. |
| SHOULD | 7-T4 (Test) | Key `The bus stopped under the corner to pick us up.` is the uniquely longest option (47 characters against 33, 33, 40, 29). | Shorten the key or lengthen two distractors. |
| SHOULD | 7-S10 distractor D | "Dani is wrong only because under cannot begin a phrase in any sentence" is absurd (and "only because" is odd); with B and C ("every trip needs the word under", "under always reads better") the three distractors are all silly. Hint 3 ("Under is a real preposition") already removes D. | Write distractors a child could believe, for example "Under is a preposition, so it is correct whenever the sentence is about going home." |
| SHOULD | Twin overlap | 7-S04 / C04 0.23 / 0.22, S04 / C12 0.22 / 0.21, S11 / C11 0.16 / 0.22: above the 0.21 target. | Rename the nouns and verbs. |
| NOTE | Learn It and Teach vs keys | Several keys use prepositions Teach never lists (`along`, C13; `toward`, S07; `since` in S02; `among` in C07, C12 distractors). Elimination works, but the Teach list does not cover them. Learn 1 states the rule between needs two things, used by S03, S05, C13. | Add along and toward to Teach point 1. |
| NOTE | 7-C09 / S09 | DOK 1; the keyed word is the only function word among a verb, an adjective and a noun, so it can be found without knowing the term. Hint 2 ("the small word that starts it") adds to the cue. | none |
| NOTE | Near-duplicate sentences | S01 option A `We sang songs around the glowing campfire.` (0.86 with a distractor in L-GUM3 lesson 3 `We sang songs around the campfire.`); S08 option D (0.67 with L-GUM4 lesson 1 `The kite got stuck in a tall pine tree.`); p5 sentence 9 (0.60 with L-V3.js lesson 1 `We packed our bag and walked home.`). | Vary one noun each. |
| NOTE | 7-C13 | Slot 1 live choices after hints: two (at / in); slot 0 three. Allowed. Also hint 3 removes only between in slot 1 and says nothing in slot 0. | none |

### Lesson 8: commas (CHANGES REQUIRED)

Strengths: letters are a good Milestones-shaped context (date, greeting, closing, list, address in one draft), every wrong comma is a real error (missing, misplaced, or after "and"), every list distractor has a second error, so no item hangs on the serial comma (checked in `oxford.js`); drafts p2-p6 cover each of their errors; C15 / S15 are clean DOK 3 odd-one-out items.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 8-C04 | Stem: "Line 3 needs a comma. Choose the city and state that are written correctly." Options: `Dayton, Ohio` / `Dayton Ohio` / `Dayton. Ohio`. The stem alone removes the no-comma option; the period option is removed by hint 3 ("A period ends a sentence"), and `Dayton. Ohio` has a period, not a comma, so it does not meet the stem either. One live choice (the key). The twin S04 has the neutral stem "Which version of the place name is right for line 3?" and leaves two live. | Use the S04 stem for C04. |
| MUST | 8-C12 | Stem: "Line 5 needs a comma. Pick the correct way to write its date." Options: `June 1, 2026` / `June, 1 2026` / `June 1 2026`. The stem removes the no-comma option and hint 3 ("The month and the day belong together") removes `June, 1 2026`; one live choice. S12's stem ("Which date fits line 5?") leaves two. | Use the S12 stem for C12. |
| MUST | 8-C03 / 8-C10 and 8-C03 / 8-C07 | Overlap 0.37 / 0.32 and 0.33 / 0.22 (limit 0.30). C03 and C10 are the same date-comma mc with the same option logic (comma after the day; comma after the month; two commas) on two different drafts' line 1; C07 reuses the C03 option vocabulary ("A greeting must have ... comma after ...", "so it should read ..."). | Give C10 a different claim (a date inside a sentence, or the closing) and reword C07's Part A options so they do not repeat C03's template. |
| SHOULD | Coverage of the official wording | The standard names series, dates, addresses, salutations and closings. In the fifteen, dates are keyed in C03, C09, C10, C12, C13 (slot 2) and C15 is a date vs not-list contrast, so about six of fifteen; the street-address comma is never the key (C11 line 4 and C14 option D carry it as an unselected line; only S14 keys it); a missing closing comma is never keyed (it appears only as a correct distractor and in Test T3). | Replace C09 or C12 with an address key and add a closing-comma key. |
| SHOULD | Learn It | The three Watch Me examples model a list, city plus date, and an address; none shows a letter greeting or closing, yet core C06, C07, P3 key the greeting and S01, S06 use letters. Teach point 4 covers it only in text. | Replace Learn 2's date or add a greeting and closing example. |
| SHOULD | 8-C03 key vs Teach and p1 | C03 key `...so it should read July 9, 2026.` is the Teach example's first line verbatim (`July 9, 2026`), and p1 line 1 is the same date written without the comma; the Teach letter (Dear Grandpa ... Augusta, Georgia ... Love, Imani) is the p1 draft's skeleton. Plan 4.3 rule 4. | Change the p1 date (for example June 18, 2026) or the Teach date. |
| SHOULD | 8-S01 hint 2, 8-P3 hint 2 | S01: "A date needs a comma between the day and the year." P3: "A greeting and a closing each end with a comma." In each item exactly one line is a date (or a greeting), so hint 2 points at the key line and states its error; hint 3 then leaves three live choices. The core twin hints elsewhere ("Check the greeting, the list, the date and the closing") do not do this. | "Check each line against the comma rules for a date, a list, a greeting and a closing." |
| SHOULD | Implausible distractors | C05 B ("a camp name always takes a comma in front of it"), C05 C ("addresses are the sole kind of line where commas may appear"), C05 D (two spellings), S05 B ("anything bought in a gift shop cannot be listed with commas") and D ("must have the same number of words"), S10 B, C, D ("Brief lines never use commas of any kind", "Just lines holding a date ever require commas", "all of them belong after the final item"). No child would pick them; the key is found by elimination. Plan 4.8 lists implausible distractors as a weak-item class. | Replace with believable misconceptions (commas are only for pauses; commas go after every word in a list). |
| SHOULD | `like` mapping | S05 (list: line 4 vs line 5) is paired with C05 (city and state in two lines), and S10 (list in a short line) with C10 (a date needs a comma). Same format and DOK, different rule, so the twin does not practise what its core item tests. | Re-point or rewrite S05 and S10. |
| SHOULD | 8-S08 option A vs L-GRM-02-5 | `Dad packed sandwiches, apples, and juice.` is a near-copy of an option in the legacy set item L-GRM-02-5 (`We packed sandwiches, apples, and juice for the picnic.`); the prompt is also a near-copy ("Which TWO sentences have commas in all the right places?" / "Choose the TWO sentences that use commas correctly."). | Change the list items. |
| SHOULD | Twin overlap | S06 / C06 0.24 / 0.25, S11 / C11 0.22 / 0.23, S03 / C12 0.22 / 0.14. | Vary names. |
| NOTE | Serial comma | Every key list uses the comma before and; the author's own cited source (fscj, URL above) says and is not preceded by a comma. This is a style choice. No distractor is correct without it (every wrong list has another error), so no item hangs on it. | Optional: say "many teachers use" in the parent note. |
| NOTE | p1 | Line 12 `Your granddaughter` (no comma) and line 5 (`two beds three shelves, and`) are visible errors that no item targets; the other five drafts have no untargeted error. The missing closing comma contradicts the Teach rule in the draft the child reads. | Add the comma to line 12 or add an item. |
| NOTE | Learn 3 | Step 1 reads "31 Elm Road, Provo, and Utah" (an inserted "and"). | "31 Elm Road, Provo, Utah". |
| NOTE | 8-C14 hint 2 | "A comma can separate things in a list, parts of a date, or parts of an address" classifies every distractor's comma, so only the key has a comma with none of those jobs (the odd-one-out structure shows in C15 and S15 as well). | none |
| NOTE | 8-S10 | "Line 4 is too short for commas": p5 line 4 is 12 words and already has its commas; the premise reads oddly. | Reword. |

### Lesson 9: verbs with -d or -es (CHANGES REQUIRED)

Strengths: every wrong form is a clear error (`brushs`, `inviteed`, `dancd`, `emptys`, `trys`), the rule set (e takes -d, s/sh/ch/x/z take -es, consonant plus y changes) is applied consistently, the DOK 3 claim items (C10, C15, S10, S15) are good, every draft error is covered, and the browser run is clean.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 9-C13 and 9-S13 hint 1 (false) | "The two blanks need different endings." The keys are `goes` / `finishes` and `does` / `brushes`: both are plain -es (the how says "Each blank needs -es, but neither one changes a letter"; why: "Go adds -es ... finish ... adds -es too"). The hint is false and nudges a child to choose one -ies or -s form. | "Each blank needs a verb that tells about one person now. Think of each plain verb." |
| MUST | 9-C04 / 9-C12 (and S04 / S12) | Same rule (consonant plus y), same option pattern (tries / trys / tryes vs empties / emptys / emptyes), and hints 1, 2 and 3 are word-for-word identical ("Think of the plain verb. Then look at the letter in front of the y." ... "Just adding -s after a consonant and a y does not follow the rule."); how steps differ only by verb and letter (r / t). Jaccard 0.31 / 0.29 (limit 0.30), and the plan bars two items that differ only by the word. | Give C12 a different task (for example a vowel plus y contrast, `plays` against `plaies`) or at least rewrite hints 2 and 3. |
| MUST | 9-C03 / 9-C07 | Overlap 0.35 / 0.26. The distractors of the mc and of ebsr Part A are the same template with the verb swapped (`Brush ... consonant plus y ... turns into i` / `Invite finishes in a consonant plus y ...`, `... ends in e ... -d` / `... ends in sh ... -es`). | Re-template one set of distractors. |
| SHOULD | 9-C07 and 9-S07 hint 3 | "Inviting is a different form of the verb. Think about the other versions." (S07: "Shaping ... other rewrites"). Neither inviting nor shaping is among the Part B options (invited / invitd / invites / inviteed); both are Part A distractors ("drops the e and takes -ing"). The wording ("versions", "rewrites") belongs to Part B. | Say "For Part A, ..." and name the Part A option, or move the hint to Part B (`invites` tells about the present). |
| SHOULD | 9-S02 | The match uses "based on its verb in ( )" with columns Just -d / Just -es / Swap y; rows "At bedtime, Gran ___ me goodnight. (kiss)", "These days, Dad ___ the jar. (empty)", "Before dawn, Rosa ___ on a star. (wish)", "Quickly, Dara ___ to her mom. (reply)" do not fix the tense. "Before dawn, Rosa wished" and "Quickly, Dara replied" are as natural as the keyed -es forms, and wished and replied are not in any column. Core P4 uses Last night / Every morning / Every day. | Put a present cue on every non-past row (Every night, Each week, Every day). |
| SHOULD | Teach and Learn vs keys | Keys reuse Teach and Learn words: `catches` (S03), `washes` (S15, Learn 1 `washes the dishes`), `fixes` (C11 key, Teach `fix becomes fixes`), `goes` / `does` (C13 slot 1, S13 slot 1; Teach point 4 lists exactly go and do), `studies` frame. Plan 4.3 rule 4 (key facts of Learn It). | Swap in untaught verbs (reach, wish, kiss) for the Teach and Learn words. |
| SHOULD | Set 2 on one draft | C06 (hot text, keys: sentences 2 and 5 of p2) is followed in the same set by C07 (sentence 2) and C10 (sentence 5), so both keys of C06 are shown by the next two items in the set. The same pattern with one key: L6 (sentence 2), L7 (sentence 2), L8 (line 2). | Use sentences 3 and 6 for C10 and C07's frame, or make C06 select from another range. |
| SHOULD | Twin overlap | S11 / C11 0.23 / 0.26, S06 / C06 0.17 / 0.23. | Vary names. |
| NOTE | 9-C06 how | "Shared, smiled, waved and scared all just add -d to a verb that ends in e or e plus a letter." The phrase "e or e plus a letter" is garbled (all four plain verbs end in e). | "Shared, smiled, waved and scared come from share, smile, wave and scare, which end in e, so they add only -d." |
| NOTE | 9-C03 distractor D | "Brush needs only -s, so the spelling is fine and the mistake is the word his" contradicts the stem ("One verb ... is misspelled"). | Replace with a believable wrong rule. |
| NOTE | 9-C10 / S10 distractors | B and C ("endings are meant to trim a word down", "Rita prefers lovd since it takes up less room") are the author's jokes; hint 3 removes both. | Optional. |
| NOTE | Coverage | No vowel plus y contrast (`plays`, `stays`) anywhere in the fifteen; Teach does not mention it. | Optional. |

### Cross-lesson notes

- **Hint ladder recount.** Live choices after hints 1-3, every item and every dropdown slot, read by hand. One live choice: L8 C04 and C12 (stem plus hint 3). Exactly two live (allowed): L6 C04, C10, C12, S04, S12, S13 slot 1, C13 slot 1; L7 C07 Part B, C10, C13 slot 1, S04, S12, S13 slot 1; L8 C13 slot 1, S04, S05, S12, S13 slot 1; L9 C04, C10, C12, S04, S12, C13 slot 1, S13 slot 1. No hint names all three wrong options in any item except 7-P4; no hint 3 states the key. False statements in hints: L7 S13 hint 1; L9 C13, S13 hint 1.
- **Same-sentence stacking in set 2.** All four lessons put C06 (find the errors), C07 (explain and fix one) and C10 (rebut a claim) on the same draft, so the same sentences are named three times (L6 sentence 2 in all three; L9 sentences 2 and 5 expose both C06 keys). This is the architecture's design, but the hot-text answer is shown by the next items in the set.
- **Pre-existing Together and Test overlap** (not new content): L6 P1/T2 0.43/0.45, L6 P1/T1 0.33/0.32; L7 P2/T2 0.40/0.28, P3/T1 0.35/0.32, P1/P3 0.32/0.32; L8 P2/T2 0.40/0.26, P3/T3 0.34/0.35; L9 P1/T1 0.30/0.33, P1/P2 0.30/0.31. SPEC section 8 says the test must use different material from Practice.
- **Grade 3 level and DOK.** No kindergarten-level item; the plainest are the DOK 1 items C09 / S09 (one per fifteen, within the limit of two). Four DOK 3 items per fifteen (plan needs at least one for a language lesson).
- **What I could not verify.** Whether the player allows going back inside a set (relevant to the set 2 note); I did not test that. I did not test keyboard or screen-reader use.

---

## First review (B7b lessons 1-5)

Reviewer: independent (did not author; second reviewer file section, written after the lessons 6-9 section above). Lessons: 1 verb tenses (`form-and-use-simple-verb-tenses`), 2 determiners (`use-determiners-articles-possessive-and-demonstr`), 3 capital letters for proper nouns (`capitalize-proper-nouns`), 4 end marks (`use-end-punctuation-period-exclamation-point-que`), 5 plurals that change y to ies (`form-plural-nouns-by-changing-y-to-ies`). These are the first five lessons of `js/data/lessons/L-GUM2.js` in file order (starting at lines 4, 1659, 3306, 4987, 6642).

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 1 Verb tenses | ACCEPT (with SHOULDs) | 0 | 3 | 3 |
| 2 Determiners | CHANGES REQUIRED | 3 | 3 | 4 |
| 3 Capital letters | CHANGES REQUIRED | 3 | 3 | 4 |
| 4 End marks | CHANGES REQUIRED | 3 | 5 | 4 |
| 5 Plurals y to ies | CHANGES REQUIRED | 3 | 4 | 4 |

The keys are sound: a fully blind solve agrees with the data on 190 of 190 answer units, the 30 drafts are all 100 words or more with FK at most 4.47, twins are at or under 0.21 Jaccard, and all 75 core items take the key with real taps at 390 x 844. The MUSTs are small edits of three kinds: (a) stems or hints that print an answer from the same set (L3 C07/C10 and S07/S10 give away both keys of C06/S06; L4 C05 and L5 C05/S05 print a dropdown key; L3 S11 and L2 S08 hint 3 name the keys); (b) two hint ladders that leave one live choice (L4 C07 B/S07 B hint 2; L5 C07 B/S07 B hint 3); (c) two form problems in lesson 2 (C06 `these crab`, which M-W lists as a plural of crab, and S13 slot 0 `that`, which is also correct). Lesson 1 has no MUST.

### Method and blindness

- **Blind solve.** `scratchpad/b7rb/blind.js` loads `L-GUM2.js` in a Node `vm` sandbox with a mock `PP.addLesson`. For lessons 1-5 it prints the drafts (with "(n)" markers and sentence numbers), every core item (refs resolved), S01-S15, the Together items and the Test items, with choices, dropdown options, hot-text options, ebsr parts and match rows shuffled by a seeded LCG (`3000 + 91 * lessonIndex`; permutations in `hidden-perm.json`). Hot-text targets are printed as passage references and resolved by hand. No key, `why`, hints, `how`, `clue`, `misconception`, `like` or addons were printed. Field names and counts were printed first.
- **Answers: 190 answer units** (all core, all similar, Together, Test). Saved to `my1.txt` to `my5.txt` before any key was extracted. **Agreement 190 of 190 (100%).** The solve was **fully blind**: I did not open the lesson source, `B7b-author-log.md`, B6 or B7a reviews, or the other reviewer's section until after the answers were saved and graded. (Same-set giveaways below did not help me because I solved item by item in shuffled order within a lesson; they would help a child who reads the whole set.)
- **Mechanical checks** (scripts `grade.js`, `dump.js`, `longest.js`, `longest2.js`, `jac.js`, `fbjac.js`, `keyin.js`, `stale.js`, `xdup.js`, `tl.js`, `tl2.js`, `pass.js`):
  - Points, picks and types: every ms and hot-text pick-two is 2 points with key count equal to the pick; L3 P4 is a choose-three ms worth 2 points (fine). ebsr, match and two-slot dropdowns are 2 points. `like` targets resolve and mirror type, points and DOK.
  - Core mix per lesson: mc 5, dropdown 3, hottext 4, ms 1, ebsr 1, match 1 (L3: hottext 3, ms 2). DOK is 1 / 10 / 4 in every lesson. Core points are 21, 21, 22, 21, 21. Eight core items in each lesson sit on a numbered draft.
  - Passages: 30 drafts, all 100 words or more with "(n)" excluded; `readability.py` FK at most 4.47 (L1 p3, limit 4.5). Page check: the passage pane shows the right draft for every passage item.
  - Longest key: single-key slots 163, unique longest in 3 (1.8%), none in core or twins. The three are legacy practice items outside core and similar: L2 P2 (`These`), L4 P5 (`Please wipe your feet before you come inside.`, 45 against 34, and the only choice that ends in a period), L5 P3 (`families`, 8 against 6). No choose-two list has both keys as the two longest. Dropdown strong-verb cue: none.
  - Twin whole-text Jaccard (stem, prompt, text, choices, slots, rows, columns, ebsr parts, target sentences): S-vs-core max set / multiset: L1 0.20 / 0.21, L2 0.20 / 0.21, L3 0.21 / 0.20, L4 0.19 / 0.18, L5 0.21 / 0.20 (rounded; the highest single pairs are L5 S10/C05 0.21 set and L2 S07/C10 0.21 multiset). No pair reaches 0.30. Twin hints copy core hints on the match items (L3 S02 hint 3 is word for word the P5 hint 3; hint-set Jaccard 0.5-0.8 for L3 and L4 match pairs): NOTE.
  - Learn It, Watch Me and Teach against items: no example sentence equals a key or an item string.
  - Cross-file duplicates over every file in `js/data` (6-word runs and exact): only the frame prompts ("Choose the word that correctly completes the sentence.", "Select the sentence that has a spelling error.", "Which sentence is correct?").
  - Together vs Test overlap (legacy, same template with new words; same pattern the other section reports): L1 P1/T1 0.29; L2 P1/T1 0.39, P1/T5 0.30, P1/P2 0.32; L3 P5/T5 0.64, P4/T4 0.35, P3/T3 0.32; L4 P1/T1 0.30, P1/T4 0.30; L5 P4/T4 0.39. Not new content; L3 P5/T5 is the same match item with six other words.
- **Hint ladders.** Live choices after hints 1-3 were recounted by hand for every core and similar item and every dropdown slot (about 150 ladders), then every hint was scanned for count words. Exactly two live choices (allowed): L1 C04, C12, S04, S12, C13 slot 1, S13 slot 1; L2 C12, S12, C13 slot 1, S13 slot 1, S03; L5 C13/S13 slots; L3 C07 B, S07 B. One live choice (defect): L4 C07 B, S07 B (after hint 2), L5 C07 B, S07 B (after hint 3). A hint that names a keyed option: L2 S08 h3, L3 S11 h3 (MUST), L4 C08 h3, S08 h3 (SHOULD).
- **Browser, 390 x 844, touch, one Chromium process per lesson** (`run390b.py`, Playwright). All 75 core items accepted the key by real taps (choices, hot-text, dropdown selects, match, both ebsr parts), no horizontal overflow, no page errors in any of the five runs. The local server was started and killed by pid.

### Web sources

- **Simple present with now words.** https://test-english.com/explanation/a2/present-simple-vs-present-continuous/ : "We use the present continuous to talk about things that are happening now or 'around now'" and the continuous "often appears next to expressions such as now, these days, this week/month, or at the moment." Used for the L1 SHOULD on `Right now` / `At the moment` with a simple verb.
- **a / an by sound.** https://www.merriam-webster.com/grammar/is-it-a-or-an : the choice depends on the sound that begins the next word, not the spelling; `one`, `useless`, `unicorn` take a; `an honest man`. Confirms the L2 keys (hour, hourglass, honor, uniform, unicycle, one-day).
- **crab plural.** https://merriam-webster.com/dictionary/crab : `plural crabs also crab`. So `these crab` (L2 C06 sentence 3) is a listed form. See L2 MUST.
- **trolley plural.** https://www.merriam-webster.com/dictionary/Trolleys : `plural trolleys also trollies`. `trolleys` is first; `trolleies` (L5 C08 distractor) is not listed. See L5 SHOULD on S01.
- **Capitals.** https://owl.purdue.edu/owl/general_writing/mechanics/help_with_capitals.html : capitalize a title before a name, not after; family words only when they act as names (`Aunt Abigail` but `my other aunts`); seasons lowercase in general use; days, months and holidays capitalized; `Atlantic Ocean` capitalized. Confirms L3 keys.
- **End marks.** https://courses.lumenlearning.com/englishcomp1/chapter/text-end-punctuation/ : "Indirect questions do not have question marks at their ends"; the exclamation point goes after an interjection or exclamation showing strong feeling. Confirms the L4 indirect-question keys (`I asked who made the cookies.`, `My mom wonders where the keys went.`).
- **y to ies.** The author's source (k12reader plural spelling) agrees with the rule used; M-W pages above checked the two disputed words.
- **between / among.** https://www.merriam-webster.com/grammar/between-among : the "between is for two only" rule is a weak generalization; between has been used of more than two since its earliest use and is the only word that relates one thing to many things individually; among suggests a collective, vaguer relation. See the cross-lesson note.

### Lesson 1: Verb tenses (ACCEPT with SHOULDs)

Blind 38 of 38 answer units agree. Teach and Learn It model `will` plus the plain verb, -ed, and the habit present; the fifteen need nothing else.

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| SHOULD | P4, S02 match, hint 3 | P4 h3: "Locked and croaked end in -ed. Think about which column fits that ending." This states the answer for two of six rows. S02 h3 does the same with `Hooted and fixed`. | Teach the rule without naming the rows: "A verb that ends in -ed shows the past. Use that to sort some of the sentences first." |
| SHOULD | C06 s4, C11 s3, S06 s4, S08 choice 4, S11 s2 | Simple present with `Right now` / `At the moment` / `At this moment`: `Right now, Ana's mom hands out gloves`, `At the moment, the twins fold the paper napkins`, `At the moment, the water drips`. English uses the present continuous after these words (test-english, above). The items work logically (clue and verb both mean now), but a model sentence that sounds wrong teaches the wrong habit. | Use `Today` or `This week` with the simple present (`Today, Ana's mom hands out gloves`), or `is handing out`. S01 (`At this moment, Ellie packed`) is fine as the error. |
| SHOULD | C12, S03, S12 hint 2 | C12 h2: "listen for the one that tells about a finished job." S12 h2: "...a finished action." With hint 3 removing `will paint` / `Mix`, the child is left choosing between two forms while hint 2 has already said which meaning is needed. Live count is two, but hint 2 describes the key. | Drop the "finished job" clause: "Last Sunday is already over. Say the sentence with each choice." |
| NOTE | C10, S10 stems | C10 prints sentence 5 `Two weeks ago, we repair...` as Ben's version, which shows sentence 5 in C06 (distractor) is fine. | None needed; one distractor is pre-eliminated of five. |
| NOTE | C15, S15 | Key is the only choice with no opening clue word, so it stands out visually. This is the point of the item (the verb shows the time). | Optional: give one distractor a mid-sentence clue (`The goalie blocks the shot every game.`). |
| NOTE | C13, S13 hint 3 | "One blank..." wording fine; slot 0 has no hint 3 narrowing, slot 1 has two live. | None. |

### Lesson 2: Determiners (CHANGES REQUIRED)

Blind 38 of 38 answer units agree. Keys for a/an by sound verified (M-W above).

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| MUST | C06 sentence 3 | `Close to my feet, these crab scurried under a flat rock.` is keyed as an error ("Crab is one thing, so these does not fit"). M-W lists `plural crabs also crab`, so `these crab` is a listed form, and the keyed rationale is not a fact a child can be held to. | Use a noun with no variant: `Close to my feet, these shell lay in the wet sand` or `this shells`; update C06 how/why and the C07 context. |
| MUST | S13 slot 0 | `Dana asked for {0} extra minute`; options `a`, `an`, `that`. `that extra minute` is grammatical, and why says "That cannot go with one extra minute", which is false. Two defensible answers. | Replace `that` with `those` (plural, cannot go with one minute) and fix why. |
| MUST | S08 hint 3 | "Two of the five begin with a vowel letter but not a vowel sound, or the reverse. Think about which ones." The two keys, `an honest answer` (h silent) and `a useful tool` (u as y), are exactly those two mismatch words; the other three match letter and sound. The hint names the key pair. | "Go by the first sound you hear, not the first letter. Check all five phrases." |
| SHOULD | S02 match hint 3 | "There are only three articles, and only one of them is in this list. Think about which word it is." Gives the `a` row away. | "An article marks a noun without pointing or owning. Think about which word only marks." |
| SHOULD | Learn It and Teach | They teach a/an by sound with `apple` / `banana` only. The fifteen need silent h (hour, hourglass, honor, honest), u said as y (uniform, unicycle, useful) and o said as w (one-day), plus `theirs` / `yours` / `hers` standing alone (C12, C13, S12). None of these is modeled before the items; the hints carry the teaching. | Add one Learn It step: "Listen, don't look: an hour, a uniform." Add one line on `yours` and `hers` standing alone. |
| SHOULD | C13 and C08 | `an hour left` (C13 key) and `a hour` (C08 distractor, how says hour needs an) are in the same section and set 2 teaches the same fact set 3 asks. | Use a different word in C13 (`an owl` is taken by Teach; `an honest friend`). |
| NOTE | C10, S10 | C10 stem prints sentence 5 `those two sea stars` as correct, one distractor pre-eliminated in C06 (keys are 3, 4). S10 prints C06's twin sentence 5 `these brushes` the same way. | None needed. |
| NOTE | C15, S15 | C15 key `a uniform` is the only phrase with `a` where the other three take `an`; S15 key `a one-day trip` is the only vowel-letter start. Visible odd-one-out. | Optional: make one distractor `a ... ` too (`a big yellow bus`) as S15 does. |
| NOTE | C03 hint 3 | "The word the can go before almost any noun, but a replacement still has to match the sound" is hard to follow and mentions `the`, which is not a choice. | "Think about the other choices: does each match the sound that follows?" |
| NOTE | S13 how | How 3 is only "The answers are an and his." | Add the reason as in C13. |

### Lesson 3: Capital letters for proper nouns (CHANGES REQUIRED)

Blind 38 of 38 agree. Capitalization facts verified (Purdue above).

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| MUST | C06 vs C07 and C10 (same draft p2, set 2) | C06 keys are sentences 4 (`the atlantic ocean`) and 5 (`a Park`). C07 Part A stem: "What mistake does sentence 4 have with capital letters?" and its Part B key prints the corrected sentence 4. C10 stem: "Ravi says Park in sentence 5 is correct because every place needs a capital letter." Both keys of the two-point hot-text are given away by two other items in the same set. Same defect B7a rated MUST for 6-C03/C04 to C06. L1 and L2 avoid it (their C07 and C10 point outside the C06 range). | Retarget C07 and C10 to sentences outside 2-6 of p2, or retarget C06 to two other sentences. |
| MUST | S06 vs S07 and S10 (same draft p5, twin set 2) | Same pattern. S06 keys are sentence 4 (`in tampa`) and 5 (`the Table`). S07 Part A: "Which statement describes the mistake in sentence 4?" with Part B printing `Tampa`. S10: "In sentence 5, Ana capitalized Table..." Both keys leaked. | As above for the twins. |
| MUST | S11 hint 3 | "In the line about the boxes, nothing needs a capital except the first word. Think about the rest." Line 6 is one of the two keys (the question asks which lines are correct). The hint states a key and tells the child to look elsewhere for it. | "Lines can be right or wrong. Check each one." or name a distractor (`tia`, `Stairs`, `sunday` are the wrong ones) without naming a key. |
| SHOULD | P5 and S02 match hint 3 | P5 h3: "Names of weekdays, countries and holidays begin with capitals, while words for a whole group of things do not." That sorts all six rows by category (saturday, mexico, thanksgiving against holiday, country, teacher). S02 h3 is word for word the same and maps to tuesday, canada, easter. | Hint 3 should scaffold, not sort: "Think of one real day, one real country and one real holiday." |
| SHOULD | C10 key wording | `A capital goes only on a place's own name` is stated as a general rule but people's names get capitals too; the stem is about places so it works, but "only" over-reaches. S10 key says `special title`, while the lesson uses title for Mr., Dr. | `A capital goes on the name of one particular place; this park has no name.` S10: `its own name`. |
| SHOULD | S05 hint 3 | S05 h3 "One and the same relative word can start with a big letter in one place and a little letter in another" states the key's principle. | "Look at what comes right after the word each time." |
| NOTE | C15, S15 | Key is the only sentence without a name (C15) or with no capitalized place (S15). Visible. | Optional. |
| NOTE | S08 how 3 | "give a small letter to a coach's title name" is unclear. | `Mr. rios` is a title and name with a small r. |
| NOTE | Twin hints | S02 hint 3 equals P5 hint 3; S04, S12 hints largely copy C04, C12. | Reword. |
| NOTE | C14 | `My Cousin lives in Tennessee.` Some writers capitalize a relative used alone; the Purdue rule (only when it acts as a name) supports the key. | None. |

### Lesson 4: End marks (CHANGES REQUIRED)

Blind 38 of 38 agree. Indirect-question keys verified (Lumen above).

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| MUST | C05 stem vs C04 (set 1) | C04 asks which mark ends sentence 6 (`My sister asked if we could keep her{0}`, key `.`). C05's stem: "Sentence 6 uses the word asked, yet it should end with a period, not a question mark. Why?" prints C04's key. | Rephrase like C10: "A classmate says sentence 6 needs a question mark because of the word asked. Which reply shows the problem?" |
| MUST | C07 Part B hint 2 | Choices: `Can you swim`, `across the whole pool`, `the whole pool`, `swim across`. H2: "look at how the sentence begins. A group of words at the start can show the kind of sentence." Only `Can you swim` begins the sentence, so one live choice after hint 2. | H2: "Which of these words tell you what kind of sentence it is?" and add a second start-of-sentence distractor (`you swim across`). |
| MUST | S07 Part B hint 2 | Choices `Mr. Lee showed us`, `how deep each hole`, `each hole should be`, `deep each hole should`. H2: "look for the words that say who did what." Only the key names a doer and an action: one live choice. | Same fix. |
| SHOULD | C06 with C07 and S06 with S07 | C07 Part A asks what kind of sentence sentence 5 is (options `An asking sentence, which calls for a question mark` and `A telling sentence, so the period is already correct`) and C06 keys include sentence 5. S07 Part A asks how sentence 3 should end, and S06 keys include sentence 3. One of two keys is exposed in each pair (partial, so SHOULD). L1 and L2 avoid this. | Move C07 and S07 to a sentence outside the hot-text range. |
| SHOULD | C08, S08 hint 3 | C08 h3: "One choice has the word asked in it. Think about whether it asks the reader something." S08 h3: "One sentence has the word wonders in it..." Each singles out one of the two keys. | "The word asked or wonders does not decide the mark. Check each sentence." |
| SHOULD | P4, S02 match hints | P4 h1 says "A sentence that only tells about a question is a telling sentence" (the `I wonder` row); h3 says "Sentences that begin with Hooray or Oh no show feeling" (two more rows). Three of six rows named. S02 h3 names `Whoa` and `Oh my`. | Keep the rule, drop the word lists in h3. |
| SHOULD | C14, S14 hint 2 | "Look at the first word of each sentence. Some words are shouted when people are surprised." Only the key opens with an interjection; one live choice after hint 2. | "Say each one with feeling and decide which sounds like shouting." |
| SHOULD | C15, S15 | The key is the only choice ending in a period; the other three end in `?`. A child can answer from the marks alone. | Give one distractor a period (`Ms. Cole asked who wanted to line up.`) so two end in a period. |
| NOTE | C12 stem vs C11 | C12 says sentence 4 has the wrong end mark; sentence 4 is a distractor in C11. | None needed. |
| NOTE | S05 stem | "defends the (?) in sentence 6" shows the draft mark in S04's sentence. | Optional. |
| NOTE | C04, C12, C13, S04, S12, S13 hint 3 | Same wow / oops sentence in six hint 3s; it removes `!` only, two live remain. | Vary. |
| NOTE | S03 | Distractor `(..), because the line is long and needs extra dots` is a joke option. | Replace with `(.)` and a wrong reason (`because the line tells about a rabbit`). |

### Lesson 5: Plurals that change y to ies (CHANGES REQUIRED)

Blind 38 of 38 agree. Rule verified; two disputed words checked (M-W above).

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| MUST | C05 stem vs C04 (set 1) | C04 asks for the correct spelling in sentence 6 (key `boys`). C05 stem: "Sentence 4 spells ponies with -ies, but sentence 6 should spell boys with -ys." Key printed. | "Mia spells ponies with -ies and Lee spells boys with -ys. Why do the two follow different rules?" (drop sentence numbers). |
| MUST | S05 stem vs S04 | S04 key `subways` (sentence 6). S05 stem: "Why does fairies lose its y in sentence 4 while subways keeps its y in sentence 6?" Key printed. | As above. |
| MUST | C07 Part B and S07 Part B, hint 3 | C07 B choices: `two shiny trophies`, `keys on a hook`, `helmets and boots`, `handful of carrots`. H2: "find plurals in the draft that also come from words ending in y" leaves trophies and keys; H3: "Keys comes from key, which has a vowel before the y" removes keys, leaving one live choice. S07 B: choices `pastries`, `delays`, `sailboats`, `whales`; h2 leaves pastries and delays; h3 names delays: one live. | Add a third y-plural distractor (`days` or `toys`) and change hint 3 to the rule: "A vowel before the y keeps the y." |
| SHOULD | C07 Part A stem vs C06, S07 Part A vs S06 | C06 keys sentences 2 (`ponys`) and 6 (`hobbys`); C07 A asks "What is the mistake in sentence 2?". S06 keys 2 and 4; S07 A asks about sentence 4. One of two keys is exposed in each (partial, so SHOULD, as in lesson 4; the other section calls this stacking the architecture's design). | Retarget C07 and S07 to a sentence outside the hot-text range. |
| SHOULD | C08 hint 3 | "One choice keeps the y and one changes it." Of the five choices, three keep the y (`driveways`, `fairys`, `enemyes`) and two change it (`lilies`, `trolleies`), so as a count of choices it is false (as a description of the keys it is true). S08 h3 "Look for the two choices whose endings match the letter next to the y" restates the question. | "A vowel before the y keeps it; a consonant before the y changes it. Check each choice against its own word." |
| SHOULD | S01 match row `trolley` | Keyed to `Becomes -ys`; M-W lists `trolleys also trollies`, so a child who puts it under -ies has a listed form. | Swap `trolley` for `monkey`. |
| SHOULD | C10, S10 hint 3 | "Ben is right about some words, such as trophies in sentence 4." Confirms sentence 4 of C06 (a distractor) is correct. Pre-eliminates one choice. | "Ben's rule fits some words but not all. Think about the other choices." |
| NOTE | C11 and C12 | C12 stem says sentence 6 `babys` is misspelled; sentence 6 is a distractor in C11. | None needed. |
| NOTE | C15, S15 | Key is the only pair whose plural ends in -ys. Visible. | Optional. |
| NOTE | C13, S13 hint 3 | "One word changes its y and the other keeps it" states the pattern of the key (true, no narrowing). | None. |
| NOTE | Legacy P3 | `families` is uniquely longest (outside core/similar). | None. |

### Cross-lesson note: the author's between / among wording and the legacy line at ~9972

- The new items (lessons 7 and later) say `Between usually goes with two things`. That agrees with M-W: the "two only" rule is a weak generalization, between also relates one thing to many individually, and among suggests a collective relation. "Usually" is acceptable for grade 3 and no key depends on a case where between is used with more than two.
- The untouched legacy Learn It step at line 9972 of `L-GUM2.js` (lesson 7, outside my five lessons) says "During tells when, not where. **Between needs two things**, and there is only one pond." "Needs" is the absolute form M-W calls a weak rule, and it contradicts the new hedged wording a few lines away. The answer `across` stays right. **SHOULD (for the lessons 6-9 reviewer): change to "Between usually goes with two things, and there is only one pond."** Not counted in my table.

### What I could not verify

- Whether the player lets a child go back inside a set (relevant to the same-set giveaways); I did not test it. I did not test keyboard or screen-reader use.
- No lesson, log or other file was edited; no git command was run.


---

## Second review (B7b lessons 6-9)

Reviewer: independent second reviewer (did not author, did not write the first review). Lessons: 6 personal pronouns, 7 prepositions, 8 commas, 9 verbs with -d or -es (array indices 5-8 of `js/data/lessons/L-GUM2.js`; ids and order checked against the `B7b` rows of `STATUS.md` lines 79-82: pronouns, prepositions, commas, verbs). Final files at worktree commit fc9c50c. Read-only: no lesson edits, no git, nothing marked ACCEPTED. The local test server (port 8955) was started by me and is stopped by pid at the end.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 6 Pronouns | ACCEPT (with SHOULDs) | 0 | 4 | 5 |
| 7 Prepositions | ACCEPT (with SHOULDs) | 0 | 6 | 5 |
| 8 Commas | REVISE | 1 | 6 | 7 |
| 9 Verbs -d / -es | REVISE | 2 | 5 | 4 |

Every first-review MUST (L6 three, L7 three, L8 four, L9 four in its verdict table; the rows are itemised below) is really fixed in the final files; I re-measured each (table below). The author log's "no hint narrows" and "twin vs core at most 0.209" are true on the author's tokeniser (letters only), and the keys are sound (119 of 120 blind). The new MUSTs are small and were introduced by the round-2 edits: one stem that prints another item's key (L8 C05 prints the key of C04), one stale `how`/`why` that explains a different verb (L9 S03), and one hint 3 that removes both wrong options (L9 C12 and S12).

### Method and blindness

- **Blind solve.** `scratchpad/b7c2/blind.js` loads `L-GUM2.js` in a Node `vm` sandbox with a mock `PP.addLesson` and prints, for each of lessons 6-9, the six drafts (no figures or alt text exist in these lessons: `fig:none` on all 24 drafts), every `core` item (refs resolved, so P4 and P5 included) and every `similar` item: 30 items per lesson, 120 in all. A whitelist prints only id, type, points, passage ids, `stem`, `prompt`, choice text, option text, dropdown text and slot options, hot-text targets (as sentence text), match rows and columns, and the pick count. Choices, options, slots, ebsr parts and hot-text target order are shuffled by a seeded LCG (`33000 + 1291 x lesson`; a different seed from the first review). No `correct`, `answer`, `why`, hints, `how`, `clue`, `misconception`, `like` or `addons` text was printed. Permutations went to `hidden-N.json` and were not opened until `ans6.json` to `ans9.json` were saved; then `grade.js` compared them with the data.
- **Agreement: 119 of 120 (99.2%).** Lesson 6: 29 of 30; lessons 7, 8 and 9: 30 of 30. The one miss is **6-S07 Part A**: I picked "Us belongs to words that do things, but this spot is for the one who receives" (the exact reverse of the key, "Us goes with words that receive, but this spot is for the one who lets"). I misread the do/receive wording backwards. The first reviewer made the same slip on the same item, so this is a wording defect, not an answer-key error (SHOULD S6-1).
- **How blind.** Fully blind for the 120 items. Before solving I had seen only the brief, the STATUS rows, file line numbers from two greps (one grep line printed the `why` of a Test item in lesson 6, which is not one of the 120), and the `blind.js` code of the first review (no answers). I read the first review and the author log only after `grade.js` had run, and dumped the keyed items (`dump.js`, `keyed-N.txt`) after that. Passages were read in full in the blind output.
- **Scripted measurements on the final files** (all in `scratchpad/b7c2/`): `jac.js` and `jac_nd.js` (Jaccard, set and multiset, twin vs core on all 15 x 15 pairs, core vs core, twin vs twin; `jac_nd.js` ignores numerals, `jac.js` counts them), `jac_h.js` (same with hints, how and why added), `longest.js` (longest-key check on mc, ms, ebsr parts, dropdown slots, hot-text option lists), `leak.js` and `leak2.js` (key text of one item inside another item's surface, hot-text key sentence numbers named by other items of the set, dropdown keys inside stems), `dup.js 5|6` (n-gram scan of every item and passage against all of `js/data/**` strings, the other lessons of `L-GUM2.js`, and each lesson's own Teach, Learn, Together and Test), `hdup.js` (identical hint and how lines inside a lesson), `stray.js`, a points and DOK check, and a passage word and FK count.
- **Browser (390 x 844, touch, `pp.path.v1` browse mode).** `run390.py` plays, for each lesson, all three core sets with real taps: three presses of Hint, then the key by tap (choice, hot-text option, `select` option for dropdowns, match buttons, both ebsr parts), Check, then "Try a similar question" and the same for the twin, then Next. **120 of 120 items (60 core, 60 twins) take the key and show "That's right"**; the Similar button appears after every one of the 60 core items; no horizontal overflow (`scrollWidth` 390 on every screen); every tap target at least 40 px tall and inside 391 px; zero page errors. This confirms the engine path, not the content: the taps use the data's own keys, and the content check is the blind solve above.

### Verification of the first review's MUST and SHOULD items

Status in the final files, re-measured (author-log claims were not trusted).

| First-review item | Status | Evidence |
|---|---|---|
| L6 MUST C04/C12 frame repeat | FIXED | C04 options `they / them / their`, C12 `I / me / my`; item-text Jaccard no longer in any list above 0.25. Hint ladders still templated (SHOULD S6-4). |
| L6 MUST C07/C10 same sentence | FIXED | C06 keys are sentences 2 and 4, C07 is sentence 8, C10 is sentence 1 (outside 2-6). |
| L6 MUST S05 hint 3 stale | FIXED | Now "Whether a name is a leader or a helper does not decide the pronoun", which rules out a real distractor. |
| L6 SHOULD C12 hint 2, S10 `like`, p5 sentence 5 `hers` referent, Learn It, C14 stem | FIXED | C12 H2 "Look at the word that comes right before the blank"; S10 is now an I-vs-me claim; p5 has "Grandma left her tools"; Learn 3 shows `mine` against `my`; C14 stem is plain. |
| L6 SHOULD twin overlap | PARTLY | 0.184 / 0.208 max on letters-only tokens; 0.228 / 0.241 (S06 / C06) if numerals count. See S6-3. |
| L7 MUST S13 hint 1 false | FIXED | "Both gaps need a preposition. Decide what each noun names." |
| L7 MUST S12 `beside my side` | FIXED | Now `at my side`. |
| L7 MUST P4 hint 3 names all three Where rows | FIXED | "Use the noun at the end of one group to sort it first." |
| L7 SHOULD conjunction clauses (C05, C10, S08 A) | FIXED for the named items | `until sunset`, `until the end of recess`, `before sunrise`. One new clause use remains in S14 (S7-5). |
| L7 SHOULD hint 2 states category, C04/C12 same key and distractor, Teach lacks along/toward | FIXED | C04 `near / until / during`, C12 `on / since / among`; Teach point 1 lists along and toward. |
| L7 SHOULD P5 weak item, S10 distractors | NOT FIXED / PARTLY | P5 still in the fifteen; S10 distractors rewritten but the key is now the structural odd one (S7-2, S7-3). T4 longest key is fixed (no longer unique). |
| L8 MUST C04 and C12 stem narrows | FIXED | Stems are neutral ("Which version of the place name is right for line 3?", "Which date fits line 5?"). |
| L8 MUST C03/C10, C03/C07 overlap | FIXED | No longer in the over-0.25 list; C10 is now an address claim, C07 Part A options are reworded. |
| L8 SHOULD address and closing never keyed; Learn It; C03 key vs Teach date; hint 2 of S01 and P3; `like` S10; S08 legacy near-copy; p1 line 12; Learn 3 "and Utah" | FIXED | C10 keys the address, C07 keys the closing; Learn 3 shows greeting and closing; C03 key is `June 14, 2026` (Teach uses July 9); p1 line 12 now `Your granddaughter,`. |
| L8 SHOULD `like` S05 to C05 different rule | NOT FIXED | See S8-3. |
| L9 MUST C13/S13 hint 1 false | FIXED | "Each blank needs a verb that tells about one person now." |
| L9 MUST C04/C12 identical hints | FIXED | C12 is now a vowel-plus-y contrast with its own hints (but see new MUST 9-2). |
| L9 MUST C03/C07 distractor template | FIXED | Not in any overlap list. |
| L9 SHOULD S02 tense cues, hint 3 of C07/S07, set 2 sentence stacking, Teach and Learn words reused | FIXED | S02 rows have Mondays / These days / On weekends / Each week; C07 is sentence 7 and C10 is sentence 9 (outside C06's keys 2 and 5). |

### Measurements

**Whole-text Jaccard** (stem, prompt, text, choices, slot options, rows, columns, both ebsr parts, hot-text target sentences; lowercase tokens). Limits: twin vs core at most 0.21 target, 0.30 MUST; core vs core at most 0.30.

| Lesson | Twin vs core, max set / multiset, letters only | Twin vs core, numerals counted | Core vs core | Twin vs twin |
|---|---|---|---|---|
| 6 | 0.184 / 0.208 | 0.228 / 0.241 (S06/C06) | 0.300 / 0.279 (C05/C10) | 0.180 / 0.211 |
| 7 | 0.195 / 0.209 | 0.186 / 0.221 (S11/C11) | 0.269 / 0.242 (C03/C07) | 0.281 / 0.225 (S11/S12) |
| 8 | 0.209 / 0.208 | 0.225 / 0.238 (S11/C11) | 0.242 / 0.250 | 0.192 / 0.161 |
| 9 | 0.198 / 0.191 | 0.198 / 0.231 (S06/C06) | 0.243 / 0.235 | 0.187 / 0.205 |

No pair reaches 0.30 on any tokenisation (no MUST by the overlap rule). The author's figures match the letters-only column. Numerals (`sentences 2 to 6`, `(5)` markers) are visible item text, and a numerals-counted reading puts six twin pairs at 0.22-0.24 (SHOULD, tokeniser-dependent). L6 C05/C10 sits exactly on the 0.300 core limit with numerals ignored. If the hints, how and why are added to the text, twin vs core is 0.3-0.65 in all four lessons (L6 S12/C04 0.59/0.65); that is by design, but it shows how much of each twin ladder is a copy (SHOULD S6-4, S8-7).

**Longest key.** Key uniquely longest in 1 of 28 choice sets in lesson 6 (C08, one of two keys, 50 characters against 43) and 0 of 28 in lessons 7, 8 and 9. Practice and Test: L6 T4 (38 against 40; no), L8 T5 (40 against 35, NOTE), L9 T4 (36 against 35, negligible).

**Points, DOK, std, form counts.** Points agree with format in all 120 items (choose-two, two-slot dropdowns, ebsr and match are 2). DOK per fifteen is 1 / 10 / 4 in every lesson; DOK 3 items are C05, C07, C10, C15. `std` equals the lesson code on every new item. No `cr` items exist in lessons 6-9.

**Leak scan.** One real leak: 8-C05 stem prints the key of 8-C04 (see M8-1). Hot-text key sentence numbers are not named by other items of the same set in any lesson (C07 and C10 are outside C06's range everywhere). C12 in lessons 6, 7, 8 and 9 repairs a non-key distractor of C11 (NOTE: it tells the child that sentence is wrong, not which are the keys).

**Duplicate scan.** Six-gram hits over all `js/data` and the lessons' own Teach, Learn, Together and Test: only generic prompt boilerplate ("select the sentence that has a", "two of sentences 2 to 6", "answer part a first then", "part a then move to part b") and five-gram near-copies noted below. No whole item or passage repeats elsewhere.

### Web and dictionary verification

- **between is not limited to two things.** https://www.merriam-webster.com/dictionary/between : the usage note calls "only two" "a persistent but unfounded notion" and allows more than two or an unspecified number; the examples all name two boundaries ("between the butcher shop and the pharmacy", "between the desk and the wall"). The lesson wording "usually goes with two things" is therefore accurate, and every keyed `between` error (`between the wall`, `between the ceiling`, `between the ladder`, `between noon`) has a single object, which M-W gives no sense for. Supports L7 S03, S05, C11 (5) and (7) of p6.
- **until is a preposition before a noun and a conjunction before a clause.** https://www.merriam-webster.com/dictionary/until : `stayed until morning`, `until Monday`, `until the end of recess` are prepositional; `we played until it got dark` is a conjunction. Supports the round-2 noun objects (L7 C05, C10). Same page family for before and after (checked by the first review, https://www.merriam-webster.com/dictionary/before) is the reason S14 option E, `after the sun went down`, is a clause use (S7-5).
- **Pronoun case.** https://www.kent.edu/writingcommons/using-case-subjective-objective-possessive : subjective I, you, he, she, it, we, they; objective for receiving the action; stand-alone owning words `mine, yours, his, hers, ours, theirs` and noun-modifying `my, your, his, her, its, our, their`; "Jane got sunburn on hers shoulders" is wrong (supports L6 C14 and S14 keys); `John, Maria, Marty, and me went` is corrected to `and I`, with the cover-up check, as the lesson teaches. Every L6 key agrees.
- **Commas.** https://fscj.pressbooks.pub/successfulwriting/chapter/3-1-commas/5 : comma between day and year, none between month and day; a comma after the street and after the city in an address; comma after a greeting and after a closing; **the page also says there is no comma before the final and in a series**, so the serial comma the lesson requires is a style choice (NOTE N8-1; no item turns on it: every list distractor has another error). https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html : commas set off items in dates (except month and day), addresses (except the street number and name) and geographical names, and separate three or more items in a series; the page is silent on the Oxford comma and on greetings and closings. Supports L8 keys C03, C08, C09, C10, C11, C12, C13, S03, S09, S10, S14.
- **Verb spelling.** https://www.k12reader.com/spelling/plurals_nouns_and_verbs_ending_in_y.pdf : consonant plus y changes to -ies/-es (`try tries`), vowel plus y adds -s (`play plays`, `enjoy enjoys`). Supports L9 C04, C12, S04, S12 and the `spray sprays`, `copy copies`, `hurry hurries`, `carry carries` keys. The -es after s, sh, ch, x, z rule and silent-e -d rule are from the same sources the first review used (https://human.libretexts.org/Courses/Irvine_Valley_College/The_Grand_Grammar_Guide_(ESL_388)/01%3A_UNIT_1-_Verb_Tense_Review_(Theme-_Identity)/1.15%3A_Parts_of_Speech/1.15.03%3A_Spelling_Rules_for_Nouns_and_Verbs); no disputed variant found among `brushs`, `trys`, `passs`, `inviteed`, `dancd`, `catchs`, `rakeed`, `pitchs`, `latchs`, `shapeed`, `lovd`, `enjoyes`, `boxs`, `glueed`, `dashs`, `scratchs`.
- **Official wording** (`js/data/standards.js`, and `docs/audits/work/official-gr3-gum.json`): L6 "Use personal pronouns (subject, object, and possessive)." (p. 15); L7 "Use frequently occurring prepositions." (p. 15); L8 "Use commas to separate items in a series and to format dates, addresses, salutations, and closings." (p. 15); L9 "Form and use verbs by adding -d or -es." (p. 16). The lesson content tests every named element.
- **Could not verify:** the Merriam-Webster page for `out of` was not on the session allowlist, so "out of" as a compound preposition (L7 C11 sentence 6) rests on the web search result for compound prepositions only (e.g. https://fiveable.me/english-grammar-usage/key-terms/compound-preposition, not fetched).

### Lesson 6: personal pronouns (ACCEPT)

Strengths: keys agree with an independent solve on 29 of 30; the cover-up strategy is used consistently; hot-text ranges are scoped; Learn It now shows both stand-alone and noun-modifying owning words; every first-review MUST is fixed; the DOK 3 claim items (C10, C15, S10, S15) and the "same words, different job" item (C05) are good.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | S6-1: 6-C07 Part A and 6-S07 Part A wording | Part A keys read "Us gets the action, but here the pronoun does the teaching, so it should be we" and "Us goes with words that receive, but this spot is for the one who lets." The mirrored distractors ("Us belongs to words that do things, but this spot is for the one who receives") are the same sentence reversed. I slipped on S07 A blind and so did the first reviewer; for a third grader the abstraction is heavier than the skill. | Plain terms: "Us is for the one who gets the action, but here the word does the teaching, so it should be we." Make the reversed distractor less of an exact mirror. |
| SHOULD | S6-2: 6-C05 / 6-C10 overlap | 0.300 set (numerals ignored), 0.288 (numerals counted): on the core-vs-core limit; both are DOK 3 "why / which reply" items on drafts with a name and a pronoun. | Vary C10's reply options (they share "cover up", "sounds") or make C05's options less like C10's. |
| SHOULD | S6-3: twin overlap | S06/C06 0.228/0.241 and S11/C11 0.188/0.212 when numerals count; S05/C05, S08/C08 0.20-0.21. Within the author's tokeniser all are at most 0.209, so this is borderline, not a defect. | Vary the target sentences' names and verbs in S06 and S11. |
| SHOULD | S6-4: templated ladders in C04, C12, S04, S12 | H1 is word for word the same in all four ("A pronoun takes the place of a noun. Decide what job the blank does in the sentence."); H2 is "right after the blank" in three of them; H3 is the same sentence frame ("X tells who owns something, and it needs a noun after it. Look at what follows the blank."); how step 2 is identical. The items differ only by sentence, pronoun triple and one noun in the how. | Give each ladder its own wording (for example name the verb the child should read next to the blank in one item and the word before the blank in another). |
| NOTE | 6-C13 / S13 slot 0 | H2 "The first blank comes right before a noun" plus Teach point 3 means `their` is the only option that fits; slot 0 has three options by count but one in substance. Allowed (the key is not named). | none |
| NOTE | 6-C08 | Key `Coach Dunn asked them to carry the equipment bags.` is the uniquely longest choice (50 against 43), one of two keys. | none, or trim. |
| NOTE | p1 sentence 5 | `Mrs. Reed handed Jada a dollar, and she smiled back.` is ambiguous (Mrs. Reed or Jada) in a pronoun lesson; no item targets it. | Optional. |
| NOTE | 6-C05 / 6-S05 keys | The `why` keys name the job of the pronoun in sentence 2 and 3 (and 2 and 3 of p4), which is the answer to C03 and S03 in the same draft. It is the architecture's design (explain-the-pair after find-the-fix) and no key is printed. | none |
| NOTE | Near-copies | S14 key `Theirs dog barked at the mail truck.` shares its frame with a different-skill L-GUM1 item (`{0} barked at the mail truck.`); C08 option `built a snow fort in` appears in T-T1. Different skills. | none |

### Lesson 7: prepositions (ACCEPT)

Strengths: place against time is a clean contrast; every error is a real mismatch; all 30 keys agree blind; the hint ladders name at most one wrong choice except as noted; C04/C12 and S04/S12 are now genuinely different (`near`, `on`, `by`, `at`); the noun-object rewrite of the clause items is done; Teach lists along and toward; DOK 3 claim items work.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | S7-1: 7-C10 hint 3 | "Until does not need a day or a name after it" refers to two wrong choices ("followed by a day or a month" and "only before a person's name"); two choices stay live (key and the "word for where" reply), so the ladder is allowed, but the brief rule is one named wrong choice. | "Until does not need a name after it. Think about the other choices." |
| SHOULD | S7-2: 7-S10 | The key `Dark is a moment, so before already suits sentence 9.` is the only option that does not begin `Dani is ...`; the three distractors share that opening, so a test-wise child finds the key by shape. Distractor D `under is a word for water` is a false statement a child would not believe. | Open all four with the same shape (`Dani is wrong, since dark is a moment and before already fits` / `Dani is right, since...`), and give D a believable error. |
| SHOULD | S7-3: 7-P5 and 7-C14 (and S01/S14) | P5 `The fish swam during the bowl.` is self-evidently wrong (the first review's SHOULD, still in the fifteen) and C14 is the same item again: hot-text, five options, one `during` plus a place (`during the kitchen counter`), same how line "Look at the noun after each preposition." (identical in P5, C08, C14, S01, S08, S14). | Give C14 a different error (a place word before a time noun, for example `We met on lunch`) and move P5 out of the fifteen or make it a draft-based item. |
| SHOULD | S7-4: Teach does not cover several keys; C11 (4) | Keys and keyed sentences use `at` (C13 slot 1 `at noon`, S08 `at six`), `inside` and `out of` (C11 keys), `from` (S07 B) and distractors `since`, `among`, which Teach never lists; `out of` is two words, against Teach's "a small word". Elimination works, but Learn and Teach do not model them. Also C11 sentence (4) `set the muffin tin across the oven for twenty minutes` is odd rather than plainly wrong (a tin can lie across an oven), so the item's second wrong sentence is less defensible than (5) and (7). | Add `at`, `inside`, `from`, `out of` to Teach point 1 or 2; replace (4) with a plainly wrong preposition (`during the oven`). |
| SHOULD | S7-5: 7-S14 option E | `The soccer team practiced after the sun went down.` is keyed as a correct distractor; `after` here starts a clause (conjunction), and how step 2 calls `the sun going down` a group that "fits". The first review asked for noun objects in exactly this kind of line. The same shape sits in the drafts (`before we started`, `before we left`), untargeted. | `after sunset` in S14; optional in the drafts. |
| SHOULD | S7-6: twin overlap | S11/C11 0.221 multiset and S06/C06 0.197 when numerals count; S11/S12 twin vs twin 0.281 / 0.270 (limit 0.30). | Vary the target sentences. |
| NOTE | 7-S13 slot 1 | Distractor `slept between the stars` is grammatical per Merriam-Webster (between is not limited to two); the lesson says "usually", and hint 3 names `during`, so the child is not told otherwise. | Optional: `slept beside the stars` or a time word. |
| NOTE | 7-C04, C12, S04, S12 | The ladder says `decide place or time` in hint 1 and names one wrong word in hint 3, so by reasoning only the key is a place word. By naming, two stay live (allowed). Inherent to a place/time item. | none |
| NOTE | 7-S05 `like` C05 | Both are "same word, one fine, one wrong" DOK 3 items, but S05 turns on between's two-things rule and C05 on place against time. Honest enough. | none |
| NOTE | Near-copies | S01 option A `We sang songs around the glowing campfire.` (L-GUM3 `We sang songs around the campfire.`); S07 B key `we drank cold water from a big cooler` (L-GUM1 passage `We drank cold water from big coolers.`); S14 E (L-GC2 `after the sun went down.`); p5 sentence 9 (L-V3 `We packed our bag and walked home.`). Different skills. | Vary one noun each. |
| NOTE | 7-S11 / S12 | S12 repairs sentence 6 of p6 (`at my side`), which is a non-key distractor of S11. | none |

### Lesson 8: commas (REVISE)

Strengths: letters are a good Milestones-shaped context; every first-review MUST is fixed; address and closing are now keyed (C10, C07, S10, S14, S07); stems of C04 and C12 are neutral; every list distractor has a second error, so no item hangs on the serial comma; drafts p2-p6 have no untargeted error.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | M8-1: 8-C05 stem prints the key of 8-C04 | C04 (set 1) asks `Which version of the place name is right for line 3?` and its key is `Dayton, Ohio`. C05 (same set, next item) opens `Dayton, Ohio shows up in lines 3 and 7, but only one line is wrong. Why?` and its key says line 3 leaves the comma out. A child who reads C05 (or goes back: the player has `prev()`) gets C04's answer, in its exact string. This is the same defect the first review of lessons 1-5 rated MUST (L4 C05, L5 C05/S05 printing a dropdown key). The twin pair does not repeat it (S04 `Fresno, California`, S05 is about the list lines). | Do not compare line 3 with line 7 in C05. Retarget C05 to two other lines of the draft (for example the address line 7 against the date line 8: one comma between city and state against one between day and year), or retarget C04 to a place C05 never names. If C05 keeps lines 3 and 7, drop the printed string and the key's "line 3 leaves it out". |
| SHOULD | S8-2: 8-C07 Part A key wording | `Nothing follows friend, and a closing always needs a comma at its end.` reads as "nothing comes after the word friend" (true of every closing) rather than "no comma follows friend". I solved it correctly only by elimination. | `Line 14 has no comma after friend, and a closing always ends with a comma.` |
| SHOULD | S8-3: 8-S05 `like` 8-C05 (not fixed) | The first review's finding stands: C05 is about the city-and-state comma shown in two lines; S05 is about a missing comma inside a list (`a map a hat, and`). Same format and DOK, different rule, so the twin does not practise what its core item tests. | Re-point S05's `like` to nothing and write an S05 about the city-and-state comma on the twin draft (lines 3 against 7 of p4), or write a list-based core and re-point. |
| SHOULD | S8-4: 8-P3 and 8-S01 hint 3 | P3: "The date and the list are written correctly." S01: "The list and the greeting are written correctly." Each names two wrong (non-key) lines, leaving three of five live: allowed by the live-choice rule, but the brief rule is one named wrong choice. | Name one: "The list is written correctly." |
| SHOULD | S8-5: Learn It has no address example | C10 (key), S10 (key), S14 (key), C11 line 4 and C14 option B rely on the comma after the street; Teach point 3 states it in text, but none of the three Watch Me examples shows it (Learn 2 shows `Dalton, Georgia`; Learn 3 now shows greeting and closing). | Add `12 Oak Lane, Macon, Georgia` to Learn 2. |
| SHOULD | S8-6: twin overlap | S11/C11 0.225/0.233, S06/C06 0.222/0.238 when numerals count; S10/C03 0.209 on letters only. | Vary names and verbs. |
| SHOULD | S8-7: copied twin ladders | C11/S11 share H1, H2, H3 and both how lines word for word; C12/S12 share all three hints; C09/S09, C13/S13 near. The twin is a fresh item with the old ladder. | Rewrite at least the how lines and hint 3 of each twin. |
| NOTE | N8-1: serial comma | The lesson requires the comma before and (Teach, Learn 1, every key list). https://fscj.pressbooks.pub/successfulwriting/chapter/3-1-commas/5 says to put no comma before the final and; Purdue OWL is silent. A style choice. No keyed list is correct only with it (every wrong list has another error), so nothing turns on it. | Optional: "many teachers use". |
| NOTE | p1 | Line 5 `two beds three shelves, and four hooks` (missing comma after beds) and lines 10 and 11 (compound sentences joined by `and` with no comma) are untargeted by any item of the six-draft bank; line 5 is the only one that breaks a taught rule. | Add the comma to line 5 or target it. |
| NOTE | 8-C15 / S15 | Three of the four options are near-identical list sentences, so the odd one is visible without the rule. DOK 3 in name; the claim needs the rule to state, not to find. | none |
| NOTE | 8-C14 hint 2 | Names list, date, address: every distractor's comma has one of those jobs, so only the key's comma has none. | none |
| NOTE | 8-C08 hint 3 | "Each choice has at least one comma. Check where each one sits." removes nothing; allowed. | none |
| NOTE | 8-S03, S07 | Distractors `April 18 2026,.` and `Yours truly-` (dash) are implausible. | Optional. |
| NOTE | 8-T5 (Test) | Key uniquely longest (40 against 35). | Optional. |

### Lesson 9: verbs with -d or -es (REVISE)

Strengths: every wrong form is a clear error; the rule set is applied consistently; every first-review MUST is fixed; hints 1 of C13 and S13 are now true; S02 has tense cues; the vowel-plus-y contrast is in; the DOK 3 claim items are good; the browser run is clean.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | M9-1: 9-S03 `how` and `why` explain a different verb | S03 is `latch` (key `latches, since verbs ending in ch take -es`; sentence 2 of p4 is `latchs`). Its how step 1 reads "The plain verb is catch. Its last two letters are ch." and its why reads "Catch does not end in e or y, and adding only -s leaves the ending hard to say." Stale text from an earlier draft; the child who opens Show Me How is told the verb is catch. (The why of C03 is also near-verbatim "Brush does not end in e or y, and adding only -s leaves the ending hard to say", which is where the sentence was copied.) | how1 "The plain verb is latch. Its last two letters are ch."; why "Latch ends in ch, so it adds -es." |
| MUST | M9-2: 9-C12 and 9-S12 hint 3 leaves one live choice | Options `sprays / sprayes / spraies` and `enjoys / enjoyes / enjoies`. Hint 3: "Adding -es after a y is not needed for every verb. Look at the other choices." Both wrong forms are -es forms, so the hint rules out both and leaves the key alone (hint 2 already asks vowel or consonant). A child reads it as "no -es", picks `sprays`. This was introduced when C12 was changed to the vowel-plus-y contrast. | Name one: "Sprayes keeps the y and adds -es. Think about the other choices." (S12: "Enjoyes ..."), leaving key and `spraies` live. |
| SHOULD | S9-3: keys reused inside the fifteen | P5 key `teachs` (fixed form `teaches`) and C15 key `The coach teaches us a new drill.` are the same verb in the same frame (P5 is `Our teacher teachs us a new word each day.`); P4 row `Every day, Ben ___ the mail up the steps. (carry)` and C13 slot 0 `Every day, Ben {carries} his lunch to school` are the same subject, cue and verb; P4 `mix` and C08 key `mixes`. Core item keys appear in other core items, so one answers the other. And P5 / C14 are the same item twice (hot-text, five options, one `-ch` error, H1, H2 and how word for word). | Use different verbs for C13 (`copies`), C15 (`rushes`), C08 (`fixes` is Teach; use `waxes`), and give C14 an `-x` or `-z` error. |
| SHOULD | S9-4: 9-C10 and 9-S10 hint 3 | "The ending depends on how the plain verb finishes. Think about the other choices." removes both `Ben is right` options (S10: both `Bowd is better` and `Bowes is better`) by implication; two live (key and one -es distractor). | Name one: "A short ending does not always save space." |
| SHOULD | S9-5: -ed is never taught | Official wording is "-d or -es". C10 and S10 keys turn on `keeps the full -ed` for a verb that does not end in e (cleaned, bowed); correct distractors use `hiked`, `baked`. Teach and Learn say only "ends in e: add -d". Learn 2 says "Do not add another e", which a child can read as "never write ed". | Add one Teach sentence: a verb that does not end in e adds -ed for the past (clean becomes cleaned). |
| SHOULD | S9-6: twin overlap | S06/C06 0.231 multiset (numerals counted), S02/P4 0.198; copied hints C04/S04, C11/S11, C12/S12 (H1, H2, H3 word for word). | Vary the target sentences and rewrite the twin ladders. |
| NOTE | 9-C13 / S13 H2 | Names the plain verbs and that the second ends in sh or ch. Allowed (hint 3 then names one wrong form). | none |
| NOTE | 9-C05 / S05 keys | The key states that the y turns into i before -es in sentence 5, which tells a child who has not answered C04 that `tries` is the form. Design of the set, no string printed. | none |
| NOTE | Draft p3 | `Dad do the grocery shopping` covers `do` / `does` (Teach point 4), which is outside "-d or -es" but inside the lesson's own Teach. | none |
| NOTE | 9-C03 hint 3 | "Look at the very last letter of brush" is `h`, while the key explains by `sh`. | "last two letters". |

### Cross-lesson notes

- **Hint ladder recount** (every core and similar item and every dropdown slot, read by hand): exactly one live choice by naming or by reading: L9 C12 and S12 (M9-2). Two live (allowed): L6 C04, C10, C12, S04, S12, C13 slot 1, S13 slot 1; L7 C04, C12, S04, S12, C07 B, C10, C13 slot 1, S13 slot 1; L8 C04, C12, S04, S12, C13 slot 1, S13 slot 1, C13 slot 0 and S13 slot 0 three; L9 C04, S04, C10, S10, C13 slot 1, S13 slot 1. Hint 3 names two wrong choices at: L7 C10, L8 P3, L8 S01 (SHOULD), and L9 C10, S10 by implication. No hint 3 states the key or quotes it. No false statement remains in any hint 1.
- **Key and why consistency.** Every key text appears in its how step 3 and why, except L9 S03 (M9-1). The first review's stale S05 text is gone.
- **Item stacking in set 2.** C06, C07, C10 sit on different sentences in all four lessons, so C06's keys are not shown by C07 or C10.
- **Back navigation.** The player allows Previous inside a set, so a key printed in a later item (L8 C05) is readable before the child commits.
- **Grade 3.** No item is below grade 3. Passages are 101-123 words and Flesch-Kincaid at most 4.2 on my count (0.39 words per sentence, 11.8 syllables per word, 15.59). The abstract wording is in L6 C07/S07 Part A; the rest reads at grade 3.
- **`like`.** Honest for all 15 twins of lessons 6, 7 and 9 and for 14 of 15 in lesson 8 (S05 as above). Every core item has a twin that is unused when the child reaches it (60 of 60 Similar buttons present in the browser run).
- **Distinct items.** No two core items differ only by names or numbers by Jaccard; the frame repeats are P5/C14 in L7 and L9 and the templated ladders listed above.
- **What I could not verify.** Keyboard and screen-reader use; the Merriam-Webster `out of` entry (not on the allowlist).

### Recommended next step

Lessons 6 and 7: ACCEPT, with the SHOULDs open (S6-1 and S7-2 are the ones a child would notice). Lessons 8 and 9: REVISE the three MUSTs (M8-1, M9-1, M9-2), all one-line edits to existing text; a short re-read of those items, and a re-measure of 8-C05 and 8-C04, should be enough.

## Second review (B7b lessons 2-5)

Reviewer: independent (did not author; did not write the first review). Lessons: 2 determiners (`use-determiners-articles-possessive-and-demonstr`), 3 capital letters (`capitalize-proper-nouns`), 4 end marks (`use-end-punctuation-period-exclamation-point-que`), 5 plurals y to ies (`form-plural-nouns-by-changing-y-to-ies`). IDs and order checked against the B7b rows of `STATUS.md` (rows 2-5 after the ACCEPTED verb-tense row) and against `L-GUM2.js` file order (array indices 1-4). Final files at commit fc9c50c, read-only: no lesson edits, no git, nothing marked ACCEPTED. The local server (port 8947) was stopped by pid.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 2 Determiners | ACCEPT (with SHOULDs) | 0 | 3 | 8 |
| 3 Capital letters | ACCEPT (with SHOULDs) | 0 | 3 | 6 |
| 4 End marks | REVISE | 1 | 2 | 6 |
| 5 Plurals y to ies | REVISE | 1 | 3 | 4 |

Every first-review MUST in these four lessons is genuinely fixed in the final files (table below, each re-checked in the data, not taken from the author log). Keys are sound: the blind solve agrees on 139 of 140 answer units and the one miss is my own misread. All 60 core items take the key by real taps at 390 x 844. The two remaining MUSTs are new and small: one hint 3 that leaves a single live choice (L5 C12) and one ebsr Part A whose key is the only option ending in a period (L4 S07). The author log's "no hint ladder left with fewer than two live choices" is false for L5 C12; "no hint names more than one wrong choice" is false for L3 S03 and L5 S05.

### Method and blindness

- **Blind solve** (`scratchpad/b7brev3/blind.js`, `my2.txt` to `my5.txt`, `answers.saved.txt`). `L-GUM2.js` is loaded in a Node `vm` sandbox with a mock `PP.addLesson`. For lessons 2-5 the script prints the drafts that the items use, every core item (refs resolved), S01-S15 and the five Test items, with choices, dropdown options, hot-text options, ebsr parts and match rows shuffled by a seeded LCG (`4000 + 91 * lessonIndex`), and the `stem` sentence of the three ms items that carry one. No key, `correct` flag, `why`, hint, `how`, `clue`, `misconception`, `like` or addon was printed. Hot-text targets are printed as the sentence text (my first resolver printed wrong sentences for some targets; I fixed the resolver before solving those items, and no key was visible then). Answers were saved before any key was extracted.
- **Agreement: 139 of 140 answer units** (35 per lesson: 15 core including the two P refs, 15 twins, 5 Test). The single miss is L4 S03 (I read sentence 8 "Where did the rabbit go after the show." as a telling line; it asks, so the key `(?)` is right).
- **Honest blindness statement: not fully blind for five items.** While checking the item shape I printed a field-stripped copy of L2 S02, S03, S04, S07 and S08 whose nested `answer` / `correct` flags were not stripped, so I saw those five keys before solving them (all five agree). The other 135 items were solved without seeing any key. I did not open the author log, the first-review section or any hint until after the answers were saved and graded.
- **Scripted measurements on the final file:**
  - **Jaccard** over the whole item text (stem, prompt, text, choices, slot options, rows, columns, both ebsr parts, hot-text target sentences). `jac.js` counts digits as tokens, `jac2.js` counts letters only (the author log's definition gives 0.19-0.21).
  - **Passages:** `pass.js`, plus `verification/readability.py`.
  - **Longest/shortest key and key-only terminal mark:** `longest.js`, `endmark.js`.
  - **Key in how/why:** `keyhow.js`. **Key quoted in a hint:** `hintkey.js`.
  - **`like` mapping, formats, DOK, points, picks:** `like.js`. **Stale sentence numbers:** `stale.js`.
  - **Duplicate scans:** `dup.js` (6-grams against all 43 other files in `js/data`, own teach/learn/test), `dup2.js` (against the other eight lessons of the same file).
  - **Browser:** `run390.py`, Playwright, one Chromium per lesson, touch, 390 x 844.
- **Hint ladders.** Every core and twin hint ladder (60 items, plus the ten Together/legacy P4/P5 addon ladders) was read by hand and the live choices counted after hints 1-3 (cumulative). Exactly two live (allowed): L2 C04, C12, C13 slot 1, S04, S12, S13 slot 1, S03; L3 C05, S03; L4 C04, C07 B, C12, C13 slots, S12, S13 slots; L5 C04, S04, S05, S12. One live (defect): **L5 C12**. One live if the rule in hint 3 is applied (see SHOULD): L5 C07 B and S07 B.

### Measurements

| Check | L2 | L3 | L4 | L5 |
|---|---|---|---|---|
| Twin vs core max, letters only, set / multiset (all 225 pairs) | 0.190 / 0.197 | 0.207 / 0.183 | 0.207 / 0.205 | 0.209 / 0.206 |
| Twin vs core max, digits counted, set / multiset | 0.204 / 0.237 (C06/S06) | 0.207 / 0.229 (C06/S06) | 0.204 / 0.232 (C11/S11) | 0.207 / 0.220 (C06/S06) |
| Core vs core max (set / multiset) | 0.254 / 0.281 (C03/C07) | 0.263 / 0.246 (C05/C10) | 0.280 / 0.283 (C11/C12, C03/C10) | 0.241 / 0.263 (C07/C10) |
| Twin vs twin max | 0.215 / 0.224 | 0.240 / 0.179 | 0.195 / 0.212 | 0.192 / 0.209 |
| Any pair at or above 0.30 (twin/core/twin) | none | none | none | none |
| Core formats (mc / dd / hottext / ms / ebsr / match) | 5 3 4 1 1 1 | 5 3 3 2 1 1 | 5 3 4 1 1 1 | 5 3 4 1 1 1 |
| Core DOK 1 / 2 / 3, points | 1 / 10 / 4, 21 | 1 / 10 / 4, 22 | 1 / 10 / 4, 21 | 1 / 10 / 4, 21 |
| `like` maps (type, points, DOK mirror; one twin per core item) | pass | pass | pass | pass |
| Pick counts equal key counts, points 1 / 2 | pass | pass | pass | pass |
| Passages: words (readability.py), FK | 115-130, 1.6-3.2 | 114-121, 2.9-3.8 | 110-114, 1.9-3.1 | 111-121, 2.3-4.0 |
| Key unique longest (core + twins) | 0 | 0 | 0 | 0 |
| Browser, 15 core by real taps, overflow, errors | 15/15, none | 15/15, none | 15/15, none | 15/15, none |

- Twin vs core is at or under 0.21 on both set and multiset by the author's definition. If the sentence numbers in the hot-text prompts count as tokens, five hot-text pairs reach 0.220-0.237 on the multiset (all driven by "sentences 2 through 6" frames). Under 0.30 everywhere, so NOTE only.
- No key is the unique longest. The key is the unique shortest in ten explanation items (L2 S05, S07 A, S15; L3 C07 A, C10, S07 A, S10; L4 C15; L5 C05, C10), by 3-13 characters. NOTE: the keys state the rule plainly while the distractors carry padded false reasons.
- Cross-file 6-gram scan: only frame prompts ("Look at sentences 2 through 6. Select the TWO...", "This question has two parts. Answer Part A, then Part B.", "Choose the two sentences in which..."), plus two legacy fragments: L2 P4 "Our class has a pet turtle" also in `T-SS.js`, and L4 P3 "My little brother is afraid of thunder" also in `PT-1.js`. Cross-lesson scan inside `L-GUM2.js`: only prompt frames and the legacy P/T pairs below.
- Test items against the banks (letters-only, highest per lesson): L2 T5/S13 0.316, L3 T5/P5 0.676, L4 T4/C04 0.258, L5 T4/P4 0.387. Twin-vs-core is the gate; these are Test against practice (see the lesson notes).

### Web sources (checked 2026-10-27)

- a/an goes by sound, not letter; `an honest`, `an hour`; `a one`, `a useful`, `a unicorn` begin with w or y sounds: https://www.merriam-webster.com/grammar/is-it-a-or-an (the page does not mention `honor` or `eighth`).
- `honor` is said with no h sound (AH-nur): https://pronounce.tv/word/honor . `an eighth grader` follows the same sound rule (eighth begins with a long a); no page I could fetch names the word, so it rests on the M-W rule above.
- Capital letters: relationship word capitalized when used as a name (`Aunt Abigail`) and not in `my other aunts`; titles before names capitalized; days, months and holidays capitalized; seasons lowercase; `Atlantic Ocean`: https://owl.purdue.edu/owl/general_writing/mechanics/help_with_capitals.html (no streets, lakes, schools; the general proper-noun rule is the support for `Cedar Street`, `Lake Erie`, `Brookside School`).
- `Mother's Day`, `New Year's Day`, `Veterans Day` capitalized: https://www.grammarbook.com/blog/capitalization/giving-special-days-their-grammatical-due/ . `Earth Day` is not on that page (not directly verified; it is the standard proper name).
- Indirect questions take a period (`Cecil asked where the reports were.`), direct questions a question mark, exclamation point after an interjection: https://courses.lumenlearning.com/englishcomp1/chapter/text-end-punctuation/
- `jockey`, plural `jockeys`: https://www.merriam-webster.com/dictionary/Jockeyed (the entry lists "plural jockeys").
- y to -ies rule used by the lessons (consonant + y changes; vowel + y adds -s) is the author's source k12reader PDF; the first review already confirmed `trolleys`, and the lesson no longer keys it.
- Not verified on the web (fetch not permitted for these pages): M-W pages for `unicycle` and `Earth Day`. The `unicycle` key rests on the same y-sound rule as `unicorn` and `useful` on the M-W grammar page above.

### Earlier MUST / SHOULD from the first review: re-checked in the final files

| First-review finding | Status in final file | Evidence |
|---|---|---|
| L2 MUST C06 `these crab` (M-W lists plural crab) | Fixed | Sentence 3 now `these pebble`; how/why and C07 context updated |
| L2 MUST S13 slot 0 `that` also correct | Fixed | Options now `a / an / these`; why says "These cannot go with one extra minute" |
| L2 MUST S08 hint 3 names the key pair | Fixed | h3 now "Little begins with a consonant sound. Think about the other choices." (one wrong choice) |
| L2 SHOULD S02 match h3 gives the `a` row | Fixed | "An article marks a noun without pointing or owning. Think about which word only marks." |
| L2 SHOULD Teach/Learn do not model silent h, standalone `yours/hers` | Partly fixed | Teach now has `an X-ray, a unit` and `Mine, yours, hers, ours and theirs stand alone`; silent h (hour, hourglass, honest, honor: C05, C13, S05, S08) is still not modeled. Carried as SHOULD |
| L2 SHOULD C13 `an hour` vs C08 `a hour` | Fixed | C08 no longer has `a hour` |
| L3 MUST C07/C10 give away both keys of C06; S07/S10 of S06 | Fixed | C07 asks sentence 8, C10 sentence 1; S07 sentence 9, S10 sentence 1; none in the 2-6 range |
| L3 MUST S11 hint 3 names a key | Fixed | h3 now names the stairs line (a distractor) |
| L3 SHOULD P5/S02 h3 sorts every row | Fixed | "Think of a real day, a real country and a real holiday." names categories, not rows |
| L3 SHOULD C10/S10 key wording | Fixed | `...but Atlanta is one special city`; `Only a school's real name begins big...` |
| L3 SHOULD S05 h3 | Fixed | "Look at what comes right after the word each time." |
| L4 MUST C05 stem prints C04's key | Fixed | Stem now "Sentences 2 and 10 end with different marks, yet both are correct. Why?" |
| L4 MUST C07 B / S07 B hint 2 leaves one live | Fixed (C07 B thin, see SHOULD) | C07 B h2 asks which words tell the kind of sentence; h3 leaves two live. S07 B keeps three live (choice 3 and 4 both contain `did`) |
| L4 SHOULD C06/C07, S06/S07 expose one key | Fixed | C07 and S07 now ask sentence 2, a correct sentence in the range, so only a distractor is pre-eliminated |
| L4 SHOULD C08/S08 h3 | Fixed | "A question word does not decide the mark by itself. Check each sentence." |
| L4 SHOULD C14/S14 h2 | Fixed | "Say each one with feeling and decide which sounds like shouting." |
| L4 SHOULD P4/S02 match hints | Mostly fixed | h3 no longer lists words; h1 still states the "only tells about a question" rule (a rule, NOTE) |
| L4 SHOULD C15/S15 key is the only choice ending in a period | **Not fixed** | Still all three distractors end `?` and the key `.`; `endmark.js` confirms for C15 and S15 |
| L4 NOTE S03 joke option | Fixed | Distractor is now `(.), because the line tells where the rabbit went` |
| L5 MUST C05/S05 stems print C04/S04 keys | Fixed | Sentence numbers dropped; C05 prints `ponies`/`turkeys`, S05 `fairies`/`valleys` |
| L5 MUST C07 B / S07 B hint 3 leaves one live | Fixed in form, still thin | A third y-plural distractor was added (`two long days`, `delays`/`two trays`) and h3 is now the rule only. See SHOULD |
| L5 SHOULD C07/S07 Part A exposes a key | Fixed | Both now ask sentence 9, outside the 2-6 range |
| L5 SHOULD C08 h3 false count, S08 h3 | Fixed | Rule sentence "A vowel before the y keeps it, and a consonant before the y changes it..." |
| L5 SHOULD S01 `trolley` | Fixed | Row is now `monkey` |
| L5 SHOULD C10/S10 h3 | Fixed | "Ben's rule fits some words but not all." |

### Lesson 2: Determiners (ACCEPT with SHOULDs)

Blind 35 of 35 agree (five not blind, see above). Keys for a/an by sound verified against the M-W grammar page. All 15 core keys take by tap.

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| SHOULD | Learn It / Teach | The fifteen and twins rely on a silent h in four items (C05 `hourglass`, C13 `an hour`, S05 `an honor`, S08 `an honest answer`); Teach has only `an X-ray, a unit`, and Watch Me uses `apple/banana`. The hints carry the teaching. | Add one Learn It step or one Teach line: "Listen, don't look: an hour, an honest man." |
| SHOULD | S06 hint 3 | "Sentence 2 uses a and an with nouns that begin with the sounds they need." Sentence 2 is `Dad sanded the wood while Mom opened a can of yellow paint.` and contains only `a`. | "Sentence 2 uses a with a noun that begins with the sound it needs." |
| SHOULD | S15 stem and design | "Ty thinks a can never be followed by a word that starts with a, e, i, o or u." `a can` reads as a noun phrase, and the bare letter `a` among `a, e, i, o or u` is confusing. The key (`a one-day trip`) is also the only phrase whose second word starts with a vowel letter, and hint 2 tells the child to look at first letters, so it is solved from letters alone with no sound knowledge. | Quote the word ("Ty thinks the word `a` is never followed by a word that starts with a vowel letter"). To stop it being solved from letters alone, make a second distractor start with a vowel letter and also take `an` (it is not a counterexample), so the child must check which one takes `a`. |
| NOTE | C15, S15 | Key `a uniform` is the only phrase with `a` (others `an`). Same odd-one-out pattern as L3, L4, L5 C15/S15. | Optional: add distractors with a consonant letter after `an` (`an hour`) so two choices differ from the pattern. |
| NOTE | C03 h1 + h2 | For a one-error repair item, hint 1 plus 2 let a solver derive "an". Inherent to the item type. | None. |
| NOTE | C07 Part A key | `...so it should be its` is also Part B's key word. | None; common ebsr dependency. |
| NOTE | S10 | Key is the overlap option (`Next to me points nearby, and brushes names a group`), half of two distractors and `and` against the one `but`. | Optional. |
| NOTE | S05 | Three of four distractors are not tempting (`always`, `ends with g`, `many letters`). | Optional: use a tempting wrong rule ("an goes before long words"). |
| NOTE | C14/S14, C12/S12 | Hint 3 sentences follow the same frame with one noun changed. | Reword. |
| NOTE | T5 vs S13 | Test T5 (`Kenji wrote {0} thank-you note ... {1} backpack`) repeats S13's options and frame at 0.316. | Vary the Test frame. |
| NOTE | Multiset with digits | C06/S06 0.237 (see Measurements). | Optional. |

### Lesson 3: Capital letters for proper nouns (ACCEPT with SHOULDs)

Blind 35 of 35 agree. Capitalization facts verified (Purdue; Grammarbook; Earth Day not directly).

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| SHOULD | S03 hint 3 | "Bus and snacks are things anyone can ride in or eat. Think about the other choices." Names two wrong choices (choice 2 `Snacks`, choice 3 `Bus`), leaving two live (the key and `...on wednesday...`). The brief allows at most one wrong choice named. | Name one: "Snacks are food anyone can eat." and let the child check bus. |
| SHOULD | S06 stem | "Two words are capitalized wrongly" for `tampa` (a missing capital) and `Table` (an extra one). A third grader may read `capitalized wrongly` as "has a capital it should not have" and skip `tampa`. C06 says `capital-letter mistake`. | "Two sentences have a capital-letter mistake. Tap them." |
| SHOULD | T5 vs core P5 (legacy) | Test T5 repeats core P5's prompt word for word and swaps six words (0.676; `florida/state/december/month/wednesday/weekend` against `saturday/holiday/mexico/country/thanksgiving/teacher`). S02 uses the same frame again. Three match items share one frame. | Change T5's sort frame (for example `Capital / small`, with a different prompt) or its category mix. Unchanged since the first review (it was a NOTE there). |
| NOTE | C15, S15 | Key is the only sentence with no capitalized person word (C15) or place word (S15). | Optional: add a distractor with a mid-sentence common noun that is correctly small. |
| NOTE | C10 h1 + h2 | "Think about the difference between one particular place and places in general" then "Does it say which museum it is?" gives most of the key; the child still needs the Atlanta half. | Keep; consider a vaguer h1. |
| NOTE | P5, S02 hint 3 | `a real day, a real country and a real holiday` is one hint with a one-word change; the three nouns are the same three categories as the keyed rows. | Vary S02's wording. |
| NOTE | C04/S04, C12/S12 hints | Hint 3 sentences are near copies. | Reword. |
| NOTE | S05, S07 A | Several distractors are absurd (`Later lines in a draft take capitals`, `It stands for a person that we all know, so writing it with a small i`). | Optional. |
| NOTE | C14 `My Cousin` | Defensible: capitalize a family word only as a name (Purdue). | None. |

### Lesson 4: End marks (REVISE)

Blind 34 of 35 agree (one misread of mine, L4 S03). Indirect-question keys verified (Lumen).

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| MUST | S07 Part A | Key ends with a period; the three distractors do not: `It wants a reply from you, so (?) closes it.` against `It reports what Mr. Lee did, so (.) should close it`, `...so it ends with (!)`, `...so it ends with (,)`. `longest.js` flags it. The key is the only option punctuated differently. | End all four options the same way (no final period), as in S03. |
| SHOULD | C15, S15 | Still open from the first review. Key ends `.`; every distractor ends `?` (C15 `Ms. Cole asked us to line up at the door.`; S15 `My neighbor knows who built the old clock tower.`). A child can answer without reading. C15 h2 also says "Find the sentence that has the word asked" although two choices have `asked`. | Give one distractor a period (`Ms. Cole asked who wanted to line up.`), and fix h2 to "Find the sentences that have asked or ask in them." |
| SHOULD | C07 Part B | `How deep is` is the only chunk that begins the sentence and the shortest; the other three (`at the shallow end`, `the water at`, `the shallow end`) are not clues anyone would choose. The first review asked for a second start-of-sentence distractor; it was not added. After h3 two choices remain (`How deep is`, `the water at`). S07 B (`What kind of` against `Mr. Lee bring`, `seeds did Mr. Lee`, `did Mr. Lee`) is better. | Replace `the water at` with `how deep` (so two chunks begin the question) or `deep is the water`. |
| NOTE | P4 hint 1 / S02 hint 1 | "A sentence that only tells about a question is a telling sentence" states the trap row `I wonder what time it is` / `Pablo wonders where the crayons went` as a rule. | Keep as the rule; drop the word "only". |
| NOTE | C04 h2 and S04 h2 | State both sides of the decision ("asking the reader, or reporting what someone else did"). | Optional. |
| NOTE | C11 and C12 | C12 prints C11's sentence 4 (a distractor) word for word, one distractor pre-eliminated; C11/C12 0.280 core overlap. | Use a different sentence in C12. |
| NOTE | S10 | Key is the only `Leave` among three `Change it to`. | Optional. |
| NOTE | C04, C12, C13, S04, S12, S13 hint 3 | Same wow / oops hint in six places; each removes `!` only. | Vary. |
| NOTE | C07 Part A key | Only option without `instead`. | Optional. |

### Lesson 5: Plurals that change y to ies (REVISE)

Blind 35 of 35 agree. Rule verified; `jockeys` verified (M-W).

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| MUST | C12 hint 3 | Choices `babies / babys / babyes`; h2: "Is the letter in front of the y a vowel or a consonant?"; h3: "The y stays only after a vowel. Think about the other choices." Both `babys` and `babyes` keep the y, so h3 rules out both distractors: one live choice. (C04/S04 are fine: their h3 rules out only `boies` / `subwaies`.) The author log says no ladder leaves fewer than two live choices. | h3: "Think about what happens to the y after a consonant. Check each choice." (no statement that eliminates both), or name one wrong form: "Babys keeps the y." |
| SHOULD | Cross-set vocabulary leaks | The same y-words appear as a key in one set and as a printed right/wrong form in an earlier set. **Core:** C10 (set 2) prints `keies` as Ben's wrong word and `keys` as the key; C13 slot 1 (set 3) has `keys / keies / keyes`. C05 (set 1) prints `ponies`; C06 (set 2) key is `ponys`. C07 B how/why print `days` (right); C11 (set 3) key `days`. **Twins:** S08 (set 2) keys `melodies`, wrong `displaies` with how "display needs just -s"; S11 (set 3) keys are exactly `melodies` and `displays`. S08 key `runways`; S14 key is `runwaies`. S01 key `essay -> -ys` and S02 key `diarys` (why: diaries); S13 keys `diaries` and `essays`. | Use different nouns in the later item: C13 slot 1 (`donkeys`, `journeys`), S11 (any two nouns not used in S08, for example `lullabies` and `trays`), S14 (`hallways`), S13 (`libraries`, `bays`). |
| SHOULD | C07 Part B and S07 Part B hint 3 | Repair of the first-review MUST is rule-only ("A vowel before the y keeps the y. Use that to check each word.") but after h2 (carrots out) the rule applied to the three left leaves one: C07 B (`trophies` against `keys`, `days`); S07 B (`pastries` against `delays`, `trays`). | h3: "Check the letter before the y in each word that is left." |
| SHOULD | S05 hint 3 | "What a word names, and where it sits in the alphabet, does not choose its ending." Rules out both choice 2 (a magical creature) and choice 4 (alphabet): two wrong choices named, two live. | Name one idea: "What a word names does not choose its ending." |
| NOTE | C15, S15 | Key is the only pair whose plural ends in `-ys`. | Optional. |
| NOTE | C03, C09, S03, S09, S12 | Hint 3 is "Adding only -s after a consonant and a y..." in five items. | Vary. |
| NOTE | T4 vs core P4 | 0.387 (`boy` row against `boy` option). | Optional. |
| NOTE | C10 distractor 3 | `Key ends in a consonant, so the plural needs -es with the y untouched.` calls y a consonant; harmless but a child could object. | Optional: `Key ends in y, so the plural needs -es.` |

### Cross-lesson notes

- **Counterexample items (C15/S15 in all four lessons).** The key is the lone surface odd-one-out in each: L2 `a uniform` among three `an`, L3 the only lowercase person/place word, L4 the only `.`, L5 the only `-ys`. Only L4 is rated SHOULD, because there the punctuation alone gives it away and the earlier SHOULD is still open. A shared fix for the four: put at least one distractor that matches the key on the surface but does not break the claim.
- **Passages.** All 24 drafts are 100 words or more with the "(n)" markers excluded (L4 p5 is exactly 100); readability.py gives 110-130 words and FK 4.0 at most. Every intended error is keyed or used as a distractor; I found no stray error that changes a key.
- **Official wording.** `official` in `standards.js` for the four rows (determiners; capitalize proper nouns; periods, exclamation marks and question marks at the end of sentences; plural nouns by changing -y to -ies) are covered. L4's indirect-question items and L2's standalone `theirs / yours / hers` distractors go slightly past the literal wording but stay within the skill.
- **DOK.** The four DOK 3 items per lesson are explanations or counterexamples. A few (L2 C05/S05 "Why is an correct?") are rule recall; DOK 2 would be stricter. NOTE only; the plan's minimum of one DOK 3 per language lesson holds either way.
- **Constructed responses.** None in these lessons, so no `cr` sample answers to check.

### What I could not verify

- Whether the player lets a child go back within a set (relevant to the cross-set vocabulary leaks), and keyboard or screen-reader use. Twins were read but not tapped; only the 60 core items were tapped.
- The M-W pages for `unicycle` and `Earth Day` (not fetchable here); `eighth` rests on the sound rule.


## Third review (B7b lessons 4-5)

Reviewer: independent (did not author, did not write the first or second review). Lessons: 4 end marks (`use-end-punctuation-period-exclamation-point-que`, `L-GUM2.js` index 3) and 5 plurals y to ies (`form-plural-nouns-by-changing-y-to-ies`, index 4). Files read as they are on disk in `/home/claude/pp-content` (uncommitted fixes included). Read-only: no lesson edits, no git, nothing marked ACCEPTED. Local server (port 8961) stopped by pid. Scripts and outputs: `scratchpad/b7brev4/`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 4 End marks | REVISE | 1 | 3 | 7 |
| 5 Plurals y to ies | ACCEPT (with SHOULDs) | 0 | 2 | 6 |

Every second-review MUST is fixed on disk (table below; each re-measured). L4 has one new MUST, created by the fix to the earlier C07 Part B SHOULD: replacing `the water at` with `how deep` leaves two defensible keys. L5 has no MUST. The author-log claims I re-tested: "no hint 3 names more than one wrong choice" and ">=2 live choices after hints 1-3" are true for L5 and for L4 except L4 S05 hint 3 (SHOULD, two wrong choices ruled out by one idea, two live left).

### Method and blindness

- **Blind solve** (`blind.js`, `answers.saved.txt`, `grade.js`). `L-GUM2.js` loaded in a Node `vm` sandbox with a mock `PP.addLesson`. Printed the drafts the items use, all 15 core items per lesson (refs resolved, P3/P4 and P4/P5 included) and S01-S15, with choices, dropdown options, hot-text options, ebsr parts and match rows shuffled by a seeded LCG (`7000 + 53 * lessonIndex`). No key, `correct`/`answer` flag, why, hint, how, clue, misconception, like or addon was printed. Hot-text targets printed as sentence text with their `(n)` markers; figures: none in these lessons. Answers saved to `answers.saved.txt` before any key was extracted. Test items were not printed (out of scope for the solve); they were read afterwards for leaks.
- **Honest blindness statement: fully blind for all 60 answer units.** I opened no raw lesson source for these items before solving: the only source I saw before saving was the first 1,500 characters of `L-GUM2.js` (lesson 1, verb tenses). A first grading script, run after the answers were saved, printed the raw record of L4 C03 only. I read the second-review section, the author log and all hints only after grading.
- **Agreement: 56 of 60 answer units (93%).** L5: 30 of 30. L4: 26 of 30. The four L4 differences:
  - **C04** and **S04** (my slip on the reported-question trap): I read `My sister asked if we could keep her?` and `Omar asked if the rabbit was real` as asking lines; both are telling lines, key `(.)`. Keys are right.
  - **S03** (my slip, the same one the second reviewer made): I read `Where did the rabbit go after the show.` as telling; key `(?)` is right.
  - **C07 Part B** (a real disagreement): I chose `how deep`; the key is `How deep is`. See MUST.
  - Four match items (L4 P4, S02; L5 P4, S01) all agree.
- **Scripted measurements on the files on disk:** `jac.js` (alphanumeric tokens, `(n)` sentence markers counted, because the sentence text carries them), `jac4.js` (markers stripped, other digits kept), `jac2.js` (letters only), `longest.js`, `endmark.js`, `hintkey.js`, `keyhow.js`, `like.js`, `stale.js` (every sentence number in prompts, hints and how re-checked against the passage text), `pass.js` and `verification/readability.py`, `dup.js` / `dup2.js` (6-grams against the other 43 data files and the other lessons of the file), `leak5.js` (y-word keys printed in earlier items), and `run390.py` (Playwright, real taps, 390 x 844).
- **Hint ladders:** all 60 items' h1-h3 read by hand, live choices counted cumulatively. L4 live after h3 (two live, allowed): C04, C07 B (see MUST), C12, C13 slots, S04, S05, S12, S13 slots. L5 two live: C04, C07 A, C12, S04, S12. No ladder leaves one live in either lesson.

### Measurements

| Check | L4 | L5 |
|---|---|---|
| Twin vs core max, markers counted (alnum), set / multiset (all 225 pairs) | 0.202 / 0.193 (C10/S10; C07/S07 0.198 / 0.187) | 0.209 / 0.202 (C10/S10) |
| Twin vs core max, markers stripped, set / multiset | 0.202 / 0.193 | 0.209 / 0.202 |
| Twin vs core max, letters only, set / multiset | 0.207 / 0.197 (C10/S10) | **0.211** / 0.203 (C10/S10) |
| Core vs core max (markers counted / letters only), set / multiset | 0.268 / 0.278 ; 0.280 / 0.283 (C11/C12, C03/C10) | 0.225 / 0.245 ; 0.230 / 0.248 (C07/C10) |
| Twin vs twin max, set / multiset | 0.217 / 0.212 (S06/S07, S04/S12) | 0.175 / 0.193 |
| Any twin/core pair at 0.30 or above | none | none |
| Core formats (mc / dd / hottext / ms / ebsr / match), DOK 1 / 2 / 3, points | 5 3 4 1 1 1; 1 / 10 / 4; 21 | same |
| `like` maps (type, points, DOK mirror, one twin per core item), pick counts, stale sentence numbers | pass | pass |
| Key unique longest (core + twins) | none | none |
| Key the only choice with a different end mark (`endmark.js`) | none (both earlier flags cleared) | n/a |
| Passages, words without `(n)` / FK (readability.py) | 100-105 / 1.9-3.1 | 101-111 / 2.3-4.1 |
| Browser, 15 core items by real taps (3 hints, answer, Check, Show me how), overflow, errors | 15 of 15, none | 15 of 15, none |
| Cross-file 6-gram scan | only frames: C06 "Look at sentences 2 through 6", C07 "This question has two parts", legacy P3 vs `PT-1.js` | only frames: P4 (legacy) "How does each word change to mean more than one", P5 "Select the sentence that has a" |

- **Twin vs core with markers.** Counting the `(n)` tokens does not change the maximum for either lesson (the frame pairs C06/S06, C11/S11 reach 0.208-0.216 on the multiset, below the cap). The one pair above 0.21 is L5 C10/S10 on a letters-only tokenizer, 0.211 (0.209 alphanumeric). NOTE: the Ben/Pia explain-the-rule frame is shared; a one-word change in S10 would clear every tokenizer.
- Test items against the banks: L4 T4/C04 0.258, L5 T4/P4 0.387 (`boy` row). Twin-vs-core is the gate; NOTE only.
- Keys shortest by 1-3 characters in L4 C07 A, C15, S07 A and L5 C05, C10, S05 (no unique longest anywhere). NOTE.

### Web sources (checked 2026-10-27)

- Indirect questions are not given question marks; the example `Cecil asked where the reports were.` ends in a period: https://courses.lumenlearning.com/englishcomp1/chapter/text-end-punctuation/ (the page states the rule as "Indirect questions do not have question marks at their ends"; it does not state "period" in words).
- Consonant + y changes to -ies, vowel + y adds -s: https://quickanddirtytips.com/articles/how-to-make-words-that-end-in-y-plural and https://howtospell.co.uk/y-to-ies-or-s-plural-rule ; plural of `key` https://www.grammar-monster.com/plurals/plural_of_key.htm and of `journey` https://www.grammar-monster.com/plurals/plural_of_journey.htm (search results only; the pages were not opened). `jockeys` was verified at Merriam-Webster in the second review.
- Not verified on the web: `pulleys`, `alleys`, `chimneys`, `holidays` (all follow the vowel + y rule above; none is a key in a way that depends on an unusual form).

### Second-review MUST / SHOULD: re-checked on disk

| Second-review finding | Status | Evidence |
|---|---|---|
| L4 MUST S07 Part A: key the only option punctuated differently | Fixed | S07 A options now `...so (?) closes it` / `...(.) should close it` / `...ends with (!)` / `...ends with (,)`; none ends in a period; `endmark.js` empty |
| L4 SHOULD C15/S15: key the only choice ending in a period | Fixed (see SHOULD on C15 A) | C15 A `Please ask where the extra glue sticks went.` and S15 A `Please tell me which man told the story about the clock tower.` end in periods; `endmark.js` empty. C15 h2 now "Find the sentences that have the word asked in them" and the two `asked` choices are B and C |
| L4 SHOULD C07 Part B: second start-of-sentence distractor | Fixed in form, **creates a new MUST** | `the water at` replaced by `how deep` |
| L4 NOTE P4/S02 hint 1 states the trap row | Fixed | "only" dropped: "A line that tells about a question is a telling line" |
| L4 NOTE C11/C12 prints a distractor | Still open | C12 prints C11's sentence 4; S12 prints S11's sentence 4. NOTE (it pre-eliminates one of five) |
| L5 MUST C12 hint 3 leaves one live | Fixed | h3 is now "Babys keeps the y. Think about the other choices." Rules out one; `babies` and `babyes` stay live |
| L5 SHOULD cross-set vocabulary leaks (C13, S11, S13, S14 and others) | Fixed for every word named | C13 slot 1 is `journeys`; S11 `lullabies` / `hallways`; S13 `galleries` / `bays`; S14 `pulleies`; C05 prints `guppies` / `turkeys`; no earlier-prints-later hit for the old words. New and remaining leaks are in the SHOULD below |
| L5 SHOULD C07 B / S07 B hint 3 | Fixed | h3 "Check the letter before the y in each word that is left." A procedure, names no choice |
| L5 SHOULD S05 hint 3 rules out two | Fixed | "What a word names does not choose its ending." Rules out only the magical-creature choice |
| L5 NOTE C10 distractor calls y a consonant | Fixed | Now `Key ends in y, so the plural needs -es with the y untouched.` |

### Lesson 4: End marks (REVISE)

All 30 keys are sound except where listed. Official wording (`Use periods, exclamation marks, and question marks at the end of sentences.`, p. 15) is covered; the indirect-question items (C04, C08, C10, C11 distractor, S04, S10) stay within the skill and are taught in Teach and Watch Me (I wonder why).

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| MUST | C07 Part B (and its like, S07 Part B, for contrast) | Choices `How deep is` (key), `how deep`, `at the shallow end`, `the shallow end`. `how deep` is the question word and is as defensible a "best clue" as `How deep is`; the only difference is the inverted verb `is`, which the how/why do not teach (how says "the first three words begin the sentence the way an asking sentence often begins"). My blind solve chose `how deep`. Hint 3 names only `at the shallow end`, so after it two choices stand that a careful child cannot separate. The capital H against a lowercase `how deep` is also a surface tell. | Make the contrast something the lesson teaches. For example: key `How deep is`, distractors `the water at`, `the shallow end`, `at the shallow end` (the earlier set, which had one start-of-sentence option), or key `How deep` with `is the water` (verb-first fragment) as the nearest distractor. Do not offer both `how deep` and `How deep is`. S07 B (`What kind of` against `seeds did Mr. Lee`, `did Mr. Lee`, `Mr. Lee bring`) is acceptable: `What kind of` is the opener; `did Mr. Lee` shows the swapped order and is a weaker, NOTE-level rival. |
| SHOULD | C15, choice A | Lee's rule is about the word `asked`. A is `Please ask where the extra glue sticks went.` (period) and D is `What did Ms. Cole ask us to bring to the picnic?`. A third grader who reads `asked` loosely as `ask` gets a second counterexample (A). The key is unique only on the literal reading, which hint 2 and the why rely on. S15 is clean: A has no `who`. | Change A to avoid `ask`: `Please tell me where the extra glue sticks went.` (still period-ending, matching S15's A). |
| SHOULD | S05 hint 3 | "Where a sentence sits in a draft does not decide its end mark." Rules out two distractors by idea: choice 2 (`Lines that sit near each other share one ending`) and choice 4 (`Neighbors in a draft take turns`). Live after h3: the key and choice 3 (`Line 9 has to do with clapping`). The brief allows one wrong choice per hint 3. C05's h3 says the same sentence but only choice 2 (last sentence) is about position, so C05 is fine. | "Neighbors do not have to match." names one idea, or drop the position sentence and use "Look at what sentence 9 itself does." |
| SHOULD | C06, sentence 4 as a distractor | `Dan jumped in first and made a giant splash that got everyone wet!` is keyed as correct. It has no feeling word (every other `!` in the lesson uses Hooray, Wow, Whew, Oh no or Whoa) and a child applying the lesson's own cue can call it a telling sentence that should end with a period, which makes three arguable wrong marks in a pick-two item. Its twin pattern is clean (S06 has no `!`). | Add a feeling word: `Wow, Dan jumped in first and made a giant splash that got everyone wet!`, or change the sentence to end with a period and use another exclamation. |
| NOTE | C05, sentence 10 | `By morning, a girl named Tia came running down the sidewalk!` is keyed as "strong surprise". No feeling word; a period would be as good. The item is safe because the other three choices are false. | Add a feeling word (`Wow, by morning a girl named Tia came running down the sidewalk!`). |
| NOTE | C11/C12 and S11/S12 | C12 prints C11's sentence 4 (a distractor) word for word; S12 prints S11's sentence 4. Core overlap C11/C12 0.268 (0.280 letters only), under 0.30. | Use a different sentence in C12 and S12. |
| NOTE | S10 | Key `Leave the (.) alone...` is the only one that does not begin `Change it to`. | Optional: make one more distractor begin `Leave`. |
| NOTE | C04, C12, C13, S04, S12, S13 hint 3 | The same wow / oops / "Neither sentence shouts" idea in six places, each removes only `!`. | Vary the wording. |
| NOTE | Learn It / Watch Me | Teach and Watch Me model Where, I wonder why and Could you; they do not model a reported question with `asked` (C04, C08, C10, C15, S04, S10, S15) or the counterexample (Lee / Ana). The hints carry both. | Add `My brother asked if I wanted pancakes.` to Watch Me, or one Teach line: "A word like asked or wonder can sit inside a telling sentence." |
| NOTE | C07 Part A | Two of four options end `instead`; the key does not. | Optional. |
| NOTE | P4 / P3 (legacy) | Legacy items keep addon hints; h3 of P3 names the spider sentence (a correct distractor) and P4 h3 states the rule only. Browser: both take the key. | None. |

Giveaways checked and clean: C03 (sentence 8) and C04 (sentence 6) are different wrong lines of p1; C05 (sentences 2 and 10) prints neither; C06 range 2-6 contains C07's sentence 2 (a correct line, so only a distractor is exposed); C10 (sentence 9) and S10 (sentence 7) are outside the hot-text ranges; C08/S08 keys do not recur in later items; Test items (T1-T5) share no key sentence with the fifteen or the twins.

### Lesson 5: Plurals that change y to ies (ACCEPT with SHOULDs)

All 30 keys agree with the blind solve. Official wording (`Form plural nouns by changing -y to -ies.`, p. 15) is covered; vowel + y items (`boys`, `keys`, `driveways`, `journeys`, `toys`, `jockeys`) are a necessary contrast, not extra content. The rule stated in Teach (consonant: change to -ies; vowel: add -s) matches the sources above.

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| SHOULD | Earlier item prints a later key word (`leak5.js`) | **Core:** P5 (set 1) prints `flies` spelled correctly in a distractor and C07 (set 2) keys `flies` (Part A: "so the plural should be flies"); P5 also prints `toys` correctly and C11's key sentence 5 is `...two old toys...`. **Twins:** S02 (set 1) prints `subways` spelled right in a distractor and S04 (set 1, item 4) keys `subways`. S01 sorts `supply` and `copy` into the -ies column and `jockey` into the -ys column; S06 (set 2) keys the misspelled `supplys` and `copys`, and S15 (set 3) keys `one jockey, two jockeys`. | Change C07 sentence 9 to a y-word that appears nowhere else in the lesson, Teach, Watch Me or Test (many obvious ones are taken: puppy, bakery, penny, cherry, ferry; re-run `leak5.js`), so P5's `flies` no longer prints C07's key. Change S02's `subways` line to a vowel + y word that no later twin keys, and S01's `jockey` row to a word that no later twin keys (for example `donkey` is in Watch Me, so use another). Leave P5 as the retained legacy item unless the lead allows editing it. |
| SHOULD | C13 and S13 hint 3 | "One word changes its y and the other keeps it." Reveals the pattern across two blanks (one -ies, one -ys), which with the vowel/consonant hint 2 reduces each blank to two live forms. Not a narrowing to the key; borderline. | "Look at the choices for each blank and check the letter before its y." |
| NOTE | S10 distractor 3 | `Delay is longer than pastry...` is false as a comparison (delay has five letters, pastry six). A child can discard it for the wrong reason. | `Delay is a short word, so its y is never able to change.` |
| NOTE | S06, S07, S10 | S06 and S07 print `delays` as a correct plural before S10 asks about it. Same passage, same set; only a distractor is exposed. | None. |
| NOTE | C15, S15 | Key is the only plural ending in -ys (C15 `birthdays`, S15 `jockeys`). Inherent to a counterexample item, all distractors obey the claim. | Optional. |
| NOTE | Grade-3 vocabulary | `essay`, `jockey`, `deputies`, `pulleys`, `cavityes`, `dictionary` and `galleries` are above typical grade 3 reading; spelling-rule items with decodable stems, so NOTE only. p5 `Art Class` FK 4.1 (readability.py), the top of the range. | Optional: `holiday` or `donkey` for `jockey`; `story` for `essay`. |
| NOTE | Learn It / Watch Me | Watch Me models fill-in with three words (bakery, donkey, lobby). The fifteen also ask for finding an error in a draft, ebsr "formed the same way", explain-the-rule and a counterexample; the hints carry them. | Add one Watch Me line on checking each plural in a sentence. |
| NOTE | C13 slot 1 / T4 | `journeys` is no longer used elsewhere. T4 vs P4 0.387 (`boy`). | Optional. |

Giveaways checked and clean: C12 `babies` appears nowhere earlier (C14 prints it later, as a correct distractor); C10 prints `keies` / `keys` after C06 printed `keys` (same passage, same set; a distractor only); C05 `guppies` / `turkeys` and S05 `fairies` / `valleys` are used as the rule's two words and as no other item's key; Test items T1-T5 (`ferries`, `jerseys`, `parties`, `bunny` / `spy`, `daisys` / `fireflys`) share no key with the fifteen or the twins.

### Cross-lesson notes

- **Counterexample items C15 / S15.** L4 now passes (two period-ending sentences, the key among them); L5 remains the odd-one-out pattern, inherent.
- **Passages.** All 12 drafts are 100 words or more with `(n)` markers excluded (L4 p5 is exactly 100); FK at most 4.1 by `readability.py`. Every planted error is either a key or a distractor in some item; no stray error changes a key.
- **Constructed responses and figures.** None in these lessons.
- **Not verified:** whether the player lets a child go back inside a set (relevant to the earlier-prints-later leaks); twins were read and measured but only the 30 core items were tapped; keyboard and screen-reader use.

## Third review (B7b lessons 8-9)

Reviewer: independent third reviewer (did not author, did not write the first or second review). Lessons: 8 commas (`use-commas-in-a-series-and-in-dates-addresses-sa`, array index 7) and 9 verbs with -d or -es (`form-and-use-verbs-by-adding-d-or-es`, index 8) in `js/data/lessons/L-GUM2.js`, reviewed as on disk in `/home/claude/pp-content` (working tree, uncommitted fixes included). Read-only on lessons; nothing marked ACCEPTED. My own test server (port 8977) was started by me and killed by pid. Scripts and outputs are in `scratchpad/r3-89/`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 8 Commas | REVISE | 1 | 5 | 8 |
| 9 Verbs -d / -es | REVISE | 2 | 6 | 5 |

Every MUST and SHOULD of the second review is truly fixed on disk (re-measured, table below). The keys are sound (60 of 60 blind). The remaining defects are all of one class that the author log says was scanned for and is not clean: **a key string printed by another item of the same set**, plus one hint 3 that leaves a single live choice. The author log's "no key exposed by a later item in the same set" is false for L9 P5 (prints two keys), L9 C12 (stem prints a key) and, through the draft text, L8 C04 and L9 C09. Nothing here needs more than a word-level edit.

### Method and blindness

- **Blind solve.** `r3-89/blind.js` loads `L-GUM2.js` in a Node `vm` sandbox with a mock `PP.addLesson` and prints, for lessons 8 and 9, the six drafts with their "(n)" markers (no figures or alt text exist: `figure` is absent on all 12 drafts), then every core item in set order (refs resolved: P3, P5 / P4, P5) and S01-S15. Whitelisted fields only: id, type, points, passage ids, `stem`, `prompt`, choice, option and slot text, target sentences, match rows and columns, pick count. Choices, slot options, ebsr parts, hot-text options and the order of hot-text target sentences are shuffled by a seeded LCG (`5100 + 211 x lesson`); the permutations went to `hidden-8.json`, `hidden-9.json` and were not opened until `ans8.txt` and `ans9.txt` were saved. No `correct`, `answer`, `why`, hints, `how`, `clue`, `misconception`, `like` or `addons` text reached me before I saved.
- **Items solved: 60** (15 core and 15 similar per lesson; the Together and Test items were not re-solved this round).
- **Agreement: 60 of 60 (100%)**, 30 of 30 per lesson, graded by `grade.js` after the answers were saved.
- **Fully blind? Yes for keys, with these disclosures.** (1) Before solving I read the reviewer brief and the content brief, a first-review excerpt of `B7b-review.md` (lines 1-80: verdict paragraph and lessons 6-7, which names defect classes for L8 C04/C12 and L9 C13/S13 but no keys), and listed the scratchpad (including a prior reviewer's `blind.js` code; I wrote my own printer and read no output of theirs). (2) Another session had just created `scratchpad/b7brev4/` (it was in use for lessons 6-7 at the same minute); I copied my printer out of it into `r3-89/` before the other session's files could mix with mine and used only my own files. (3) After saving answers I read keys through `keyed.js`, then the second review (lines 277-440), then the author log (last). (4) I ran one read-only `git log --oneline -1` by mistake while looking for a pristine copy; it changed nothing.
- **Scripted measurements on the final files** (`r3-89/`): `jac.js` (Jaccard), `longest.js`, `leak.js` and `leak2.js` (key exposure across items, with the shared draft text), `echo.js` (hint words shared only with the key), `dup.js` (exact and 6-gram-style scan of every js/data file, plus duplicate sentences across the six drafts), hint-count and letter scan, points/pick/DOK/passage-numbering checks, and the repo's `check-content.js --all`, `check-writing.js`, `check-instructional-copy.js` and `readability.py`.

### Measurements

- **Twin vs core, all 15 x 15 pairs, tokens = lowercase letters and digits over stem, prompt, text, choices, slot options, rows, columns, both ebsr parts and the hot-text target sentences, `(n)` markers counted:** L8 max **0.203 set / 0.205 multiset**; L9 max **0.198 / 0.195**. With `(n)` markers stripped: L8 0.203 / 0.205, L9 0.198 / 0.191. No pair above 0.21 on either tokenisation (limit 0.21, MUST 0.30). Highest L8 pairs: S10/C10 0.20/0.20, S12/C12 0.20/0.20, S13/C13 0.20/0.13, S10/C03 0.20/0.18, S15/C08 0.18/0.20. Highest L9: S02/P4 0.20/0.19, S06/C06 0.17/0.20, S11/C11 0.14/0.19.
- **Core vs core:** L8 max 0.254 / 0.235 (C03/C07); L9 max 0.236 / 0.222. Limit 0.30: pass. Twin vs twin: L8 0.222 / 0.181; L9 0.184 / 0.205.
- **Live choices / hint 3** (every core and similar item, every dropdown slot, read by hand and by a scan for count words, letters and numbers): hint 3 names at most one wrong choice everywhere except L8 S05 (see MUST 8-1), where it refutes all three distractors. At least two live after hints 1-3 everywhere else. Two live (allowed): L8 C04, C09, C10, C12, S04, S09, S12, C13 slot 1, S13 slot 1; L9 C04, C09, C10, C12, S04, S09, S12, C13 slot 1, S13 slot 1. No hint 3 states or quotes a key. No hint refers to a letter or to a count. Free-standing hot-text hints cite no sentence numbers.
- **Longest key:** 0 uniquely longest in 33 (L8) and 34 (L9) single and choose-two lists across core, similar and Test. Ties only for dropdown slots and L8 T4. Keys are shuffled at run time (`ctx.order`; every data key sits at index 0).
- **Points / picks / formats:** every ms and hot-text pick-two is 2 points with two keys, two-slot dropdowns, ebsr and match are 2, mc 1: no mismatch. Core mix in both lessons: mc 5, dropdown 3, hottext 4, ebsr 1, match 1, ms 1; DOK `222232321322223` (one DOK 1, ten DOK 2, four DOK 3); 21 points. Every item has three hints and three how steps. `like` maps resolve both ways for all 15 twins and match type, points and DOK (S01 and S02 map to the legacy refs P3/P5 in L8 and P5/P4 in L9).
- **Drafts:** six per lesson, 103-107 words (L8) and 104-111 (L9) with markers excluded; `readability.py` FK 3.8-4.3 (L8) and 2.4-3.9 (L9), limit 4.5. Numbering is sequential in all 12. Each core set has its own draft, twins use p4-p6: no draft shared between a core set and a twin. Every error in every draft is keyed by some item.
- **Duplicates:** nothing in any other js/data file duplicates a passage sentence, key or distractor of lessons 8-9 (`dup.js`). Inside L8 two sentences repeat between drafts (`Thank you for reading our letter and thinking about our idea.` and `Sincerely,`, p3 and p6); none inside L9.
- **Gates:** check-content (no failure in L-GUM2; the only L8 warnings are the three S05 "shares 'items' only with the key" lines, see MUST 8-1), check-writing 0 failures 0 warnings, check-instructional-copy 28 passed.

### Browser, 390 x 844, touch, one Chromium process per lesson

`run390.py` (Playwright, browse-mode fixture) opened sets y, y2 and y3 of each lesson, pressed Give me a hint three times on every core item, answered with real taps (choices, hot-text options, `select_option` on dropdowns, match buttons, both ebsr parts), pressed Check my answer, then Show me how. **30 of 30 core items (15 per lesson) show "That's right!"**; the hint button reads "No more hints" and is disabled after three presses on all 30; `scrollWidth` is 390 on every item; no choice, hot-text option, match button or select is under 40 px tall or past the right edge; no page error. On every passage item (eight per lesson) the Passage tab opens the right draft with the right "PASSAGE n" banner (checked after tapping the tab; reading the hidden pane without tapping returns stale text from an earlier item, which is not visible to a child).

### Web sources checked this round (2026-10-27)

- **Commas.** https://fscj.pressbooks.pub/successfulwriting/chapter/3-1-commas/5 : comma after each list item and none after the last; "put and before the last item, and don't put a comma after that final item" (so the serial comma is a style choice, see L8 NOTE 8-N1); comma between day and year; none between month and day; a comma after the street and after the city; a comma after the greeting and after the closing; a comma after the year or the address if the sentence goes on (no keyed sentence continues after a full date or address). https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html : "set off ... items in dates (except the month and day)", "addresses (except the street number and name)", geographical names, "separate three or more words, phrases, or clauses written in a series"; silent on the serial comma and on letters. Supports every L8 key.
- **Verb spelling.** https://human.libretexts.org/Courses/San_Jacinto_College/ESOL_0382_-_Intermediate_Grammar_(Marceau)/09%3A_Appendices/9.02%3A_Spelling-Adding_-s_or-es_(Plural_Nouns_and_Simple_Present_Tense) : s, z, ch, sh, x add -es (watches, kisses, waxes, wishes); consonant plus y becomes -ies (tries); vowel plus y adds -s (enjoys, sprays). Earlier sources for the -d after e rule and go/does stand: https://human.libretexts.org/Courses/Irvine_Valley_College/The_Grand_Grammar_Guide_(ESL_388)/01%3A_UNIT_1-_Verb_Tense_Review_(Theme-_Identity)/1.15%3A_Parts_of_Speech/1.15.03%3A_Spelling_Rules_for_Nouns_and_Verbs . No disputed variant among `brushs`, `trys`, `passs`, `inviteed`, `dancd`, `catchs`, `rakeed`, `cryes`, `pitchs`, `latchs`, `shapeed`, `lovd`, `enjoyes`, `boxs`, `glueed`, `dashs`, `relaxs`, `sprayes`, `pushs`, `copys`, `finishs`, `scratchs`, `cleand`, `bowd`: all plain errors; `sneezes`, `tightens`, `giggles` are correct.
- **Official wording** (`js/data/standards.js`): L8 "Use commas to separate items in a series and to format dates, addresses, salutations, and closings." (p. 15); L9 "Form and use verbs by adding -d or -es." (p. 16). L8 tests series, dates, addresses, greeting and closing and city and state; L9 tests -d, -es, consonant plus y, vowel plus y, go and do.

### Second-review MUSTs and SHOULDs, re-measured on the final files

| Second-review finding | Status on disk | Evidence |
|---|---|---|
| L8 M8-1 C05 stem prints C04's key | FIXED in the stem | C05 now compares lines 4 and 5 (two lists); `leak.js` finds no stem or option of C05 that contains `Dayton, Ohio`. The draft still shows it (SHOULD 8-2). |
| L8 S8-2 C07 Part A wording | FIXED | "Line 14 has no comma after friend, and a closing always ends with a comma." |
| L8 S8-3 S05 `like` C05 different rule | FIXED | C05 and S05 are both list items now. |
| L8 S8-4 P3 and S01 hint 3 name two | FIXED | Both say "The list is written correctly. Think about the rest." |
| L8 S8-5 no address in Learn | FIXED | Learn 2 and Teach point 3 model an address. |
| L8 S8-6 twin overlap | FIXED | max 0.203 / 0.205. |
| L8 S8-7 copied twin ladders | MOSTLY FIXED | C11/S11 and C12/S12 are rewritten. Identical lines remain only at S01 H3, S04 H3, S15 H3 and how lines S02 1, S03 2, S04 2, S06 1 (NOTE). |
| L9 M9-1 S03 how and why name another verb | FIXED | how1 "The plain verb is latch"; why "Latch ends in ch, so it adds -es." |
| L9 M9-2 C12/S12 hint 3 left one live | FIXED | H3 now "Sprayes keeps the y and adds -es" (S12 "Enjoyes ..."): two live (key and `spraies` / `enjoies`). |
| L9 S9-3 keys reused inside the fifteen | FIXED for the pairs named | C13 `copies`, C15 `mashes`, C08 `waxes`, C14 `relaxs` (x); P5 keeps `teachs`. New exposures found, see MUST 9-1 and SHOULD 9-5. |
| L9 S9-4 C10/S10 hint 3 | FIXED literally | Names one wrong choice (see SHOULD 9-3 for the implication). |
| L9 S9-5 `-ed` never taught | FIXED | Teach point 1 says a verb that does not end in e adds -ed (jump becomes jumped). |
| L9 S9-6 twin overlap and copied ladders | FIXED | max 0.198 / 0.195; C04/S04, C11/S11 and C12/S12 ladders are different. |
| L9 note C03 hint 3 "last letter" | FIXED | "last two letters". |

### Lesson 8: commas (REVISE)

Strengths: all 30 keys are defensible and match the sources; the hint ladders are clean except S05; the DOK 3 claim items (C10 address, C15 "commas belong only in lists", C05 two-list comparison) need the rule rather than elimination; the closing and the address are keyed (C07, C10, S07, S10, C11, S14); stems are neutral; Learn It now models list, address plus date, greeting and closing; twins are fresh content.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 8-1: S05 hint 3 (and hints 1-2 echo the key) | S05 options: A key `The animal line separates its items, but map and hat stick together.` B `The shop line is about a gift shop, so its things must be written without any marks.` C `Animals form a list but objects form a sentence, so objects need no commas.` D `A line about a store always needs fewer marks than a line about the zoo.` B, C and D are the same idea (what the lines are about decides the commas). H3 is `What the items are does not decide the commas. Think about the other choices.` It refutes all three distractors and leaves the key alone: one live choice (brief: at least two). `check-content` also warns that the clue, H1 and H2 share the word "items" only with the key (`Count the items ...`, `... between the items ...`; every distractor says "things" or "objects"). The core twin C05 is fine because its distractors are different (topic, length, anything goes). | Give S05 three different misconceptions (for example `Line 5 is fine because and already keeps the items apart`, `Line 4 needs commas only because it names animals`, a length claim as in C05), make H3 name one of them, and use "things" in the clue and H1-H2. |
| SHOULD | 8-2: draft line 7 prints the key of C04, S04 and S06/S07 | p1 line 3 `Dayton Ohio` (key of C04 `Dayton, Ohio`) and line 7 `25 Birch Road, Dayton, Ohio.`; p4 line 3 `Fresno California` (S04 key `Fresno, California`) and line 7 `77 Cedar Court, Fresno, California.`; p5 line 3 `Billings Montana` (S06 target) and line 7 `6 Hill Road, Billings, Montana.` The child can copy the exact string from the same draft. (`leak2.js`: `dayton, ohio` appears in C03, C04 and C05; `fresno, california` in S03-S05; `billings, montana` in S06, S07, S10.) The core drafts p2 and p6 avoid it (their city-and-state lines are correct). | Use a different place in line 7 (a home address, `at 25 Birch Road, Macon, Georgia`) or move the city-and-state error to a town that line 7 does not repeat. |
| SHOULD | 8-3: S15 option C is a near-copy of C08's key | C08 key `The fair opens on July 4, 2026.`; S15 option C `The fair opens in the park on July 4, 2026.` Twin text reuses another core item's keyed sentence. | Change S15 option C to a different date sentence. |
| SHOULD | 8-4: p1 line 4 | `Every morning we eat pancakes, eggs, and toast with our cabin.` ("with our cabin" is not good English; this is the line of the DOK 3 comparison C05.) | `... with our cabin mates.` or `... in the dining hall.` |
| SHOULD | 8-5: twin ladders still partly identical | Identical lines with the core twin: S01 H3, S04 H3, S15 H3; how S02 1, S03 2, S04 2, S06 1. | Rewrite at least S04 H3 and S15 H3 (the stems differ, the lines do not). |
| SHOULD | 8-6: p6 is a line-for-line clone of p3 | Same line roles (3 list, 4 street comma missing, 5 date comma missing, 6 city and state correct, 7 `and,`), same keyed lines (3 and 6) for C11 and S11, and two identical sentences (`Thank you for reading our letter and thinking about our idea.`, `Sincerely,`) plus `Please let us know ... playground` / `Please tell us ... park`. A child who has done set 3 knows which lines of the twin are right. p4/p5 do not clone p1/p2 this way. | Move the keyed lines of S11 (for example lines 4 and 7 repaired as one correct pair) or vary the error roles in p6. |
| NOTE | 8-N1 serial comma | The lesson requires the comma before the last and. FSCJ (cited by the author) says to put none; Purdue is silent. No keyed list depends on it (every wrong list has another error). | Optional: "many teachers use". |
| NOTE | 8-N2 C06 and C11 H1 | C06 H1 lists "a greeting, a list, or a place" (no category for line 6) and C11 H1 lists "a list, a date, or an address" while its key line 6 is a city and state. | Optional: "a list, a date, a place or an address". |
| NOTE | 8-N3 S06 stem | `Tap the pair of lines in the body of this note` but the targets include line 2 (the greeting). | `... in lines 2 to 6 of this note`. |
| NOTE | 8-N4 C08 and C11 same task in different sets | Both are "pick the two with every comma right" (free-standing sentences against draft lines); C08 E `Our principal, read us ...`, C14 D `The coach, handed ...` and S08 D are the same error type. | none, by design (one per set). |
| NOTE | 8-N5 C10 hint 3 and S10 hint 3 | C10 H3 `An address names one place, yet it is still made of parts` echoes and refutes distractor B and implies D (two live, A and C). S10 H3 `The size of a place does not decide where commas go` matches no option. | S10: "Hill Road and Billings are two things" is the key, so ask instead `Think about whether a street and a city are the same thing.` |
| NOTE | 8-N6 P5 / S02 hint 2 | `Some examples have a month and a number. Some have two place names. Some start or end a letter.` characterises every column but the list; with H3 (the list) the sort is scaffolded. Not a giveaway of any single row. | none |
| NOTE | 8-N7 dates in the fifteen | Date commas appear in C03, C09, C12, C13 slot 1 and the C15 key, one per set by design; C15's `June 9, 2026` models the format of C12's key in the same set. | none |
| NOTE | 8-N8 C15 / S15 odd one out | Three of four options are lists, so the date or city sentence is the odd one without the rule (second review NOTE stands). | none |

### Lesson 9: verbs with -d or -es (REVISE)

Strengths: keys are right and sourced; the vowel-plus-y contrast (C12 `sprays`, S12 `enjoys`) is a good item; C13/S13 mix a y-change and an -es verb; the -d versus -ed trap (C10, S10) is now backed by Teach; P4 and S02 sort by last letters and are not solvable by tense alone; every draft error is keyed; DOK 3 claim items (C10, C15, S10, S15) use plausible wrong claims.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 9-1: P5 (first items of set 1) prints the keys of C03 and C04 | P5 is `Select the sentence that has a spelling error.` with correct options `My brother brushes the horse every evening.` and `Grandma tries a new recipe every week.` P5 comes before C03 (key `... should be spelled brushes`) and C04 (dropdown key `tries`) in the same set, so the child has already seen both spellings (`leak2.js`: `brushes` in P5 and C03, `tries` in P5, C04). P5 is the legacy item referenced by `{ref}`; editing its options also changes Practice Together and its addons how (`Brushes, nibbled, tries and closed ...`). | Change the two correct options to verbs no other set 1 item uses (not `mixes`, `fixes`, `catches`, `tosses` or `combs`, which the p1 draft shows; for example `Dad washes the car` and `Kim stays after class`), and update P5's addons how line and `why`. Or replace P5 in the fifteen with a new item. |
| MUST | 9-2: C12's stem prints the key of C13 slot 1 | C12 stem: `Which spelling of the verb finishes the line about the garden hose?` ("finishes" = ends). C13 slot 1 key is `finishes` (`finishes / finishs / finishies`), set 3, next items. S10 options B and C also say `... finishes with a consonant` / `bow finishes with w`. | `Which spelling of the verb completes the line about the garden hose?` and in S10 `ends with`. (S05 how uses `finishes` for hurry and mix; harmless there.) |
| SHOULD | 9-3: C10 | H1 `Think about what Ben is trusting. Is it the plain verb, or a guess about letters?` already says Ben is wrong, so both "Ben is right" options go at hint 1; H3 `Shorter endings are not always the correct ones` echoes distractor C. Left: A (key) and D `Clean ends in n, so it needs -es, which gives the spelling cleanes` (a present-tense form for a past sentence, not a plausible rival). Two live literally, one in effect. S10 has the same shape but H3 `A short ending does not always save space` names only B and C, D remain. | C10 H1: `Think about the plain verb clean. How does it end?` and give D a believable error (`... so the n doubles: cleanned`, or a claim that -ed is only for long verbs). |
| SHOULD | 9-4: S05 hint 3 is stale | `The farm story is told in the present. Think about the other choices.` None of S05's options mentions tense (it is C05's distractor D that does). The hint removes nothing. (Same defect class as first-review L6 S05.) | `Mix has no y at all. Think about the other choices.` (names B). |
| SHOULD | 9-5: C09's key is in the set 2 draft; C05's key gives C04 | `waved` appears in p2 sentence 4 (`... and waved hello to their parents`, a target of C06) and C09 `Last night, Dad ___ goodbye to us. (waved)` follows it in the same set. In set 1, C05's key says `In sentence 5 the y turns into i before -es`, which is the whole of C04's answer (`tries`) one item earlier (second review rated the same pattern NOTE; with MUST 9-1 the set already hands over C04 twice). | Use a verb other than `wave` in C09 and S09 (or change p2 sentence 4 to `grinned at`). For C05 compare sentence 6 (`passs`) with a different y-verb than the one C04 asks, or ask C04 about another sentence. |
| SHOULD | 9-6: C08 B and C14 C are the same sentence frame | `Last night, we hiked up the steep trail.` (C08 key, set 2) and `Last night, we hiked along the river.` (C14 option C, set 3, correct). Also C14 B `Grandma hurries to the door ...` repeats P4's hurry. | Change C14 C to another verb. |
| SHOULD | 9-7: terms not taught | Hints in nearly every item say "the plain verb" (C04 H1, C03 H2, C09 H1, S12 H1 and more), but Teach defines only verb and ending. Learn It does not model `-ed` after a non-e verb (C10, S10 key) or go/does and do/does (the wrong word `Dad do`, `Our neighbor do` in C11 and S11 is covered only by Teach point 4). | Add `plain verb: the verb with no ending, like wash` to Teach words; add one Learn step for cleaned or does. |
| SHOULD | 9-8: twin ladders still partly identical | Identical lines with the core twin: S01 H1 and H2, S02 H1, S03 H1, S05 H1, S06 H2, S07 H1, S08 H3, S09 H2, S15 H2; how S01 1, S02 1 and 3, S06 1, S09 2, S14 1. | Rewrite hint 2 and the how lines of S01, S06 and S09. |
| NOTE | 9-N1 C03 / C05 reading | C03's distractors state false premises (`ends in y`, `ends in e`) that the hint `Look at the last two letters of brush` makes visibly false; the key is reachable by reading. | none |
| NOTE | 9-N2 C09 / S09 H2 | `A verb that ends in e needs a short ending for the past` removes `waveed`/`raceed`; two live (key and `wavd`/`racd`). | none |
| NOTE | 9-N3 S02 / P4 hint 3 | Time words are recommended for the past rows while the misconception line says sorting by the time word is a mix-up. Both are true (time word for tense, last letters for the ending). | Optional: "Time words tell which are past; last letters tell the ending." |
| NOTE | 9-N4 C08 E `cryes`, C15 etc. | Fine; C08 key `waxes` and C15 key `mashes` are new verbs. P5 and C14 no longer test the same error (-ch against -x). | none |
| NOTE | 9-N5 `-ed` is outside "-d or -es" | The lesson spends two DOK 3 items (C10, S10) on `-ed` after a non-e verb; defensible as the contrast to `-d`, but the official row says -d or -es. | none |

### Cross-lesson notes

- The recurring defect (a key printed by a sibling item) is checkable mechanically; `r3-89/leak.js` and `leak2.js` take the lesson index and a word list and run in a second. I recommend the author run `leak2.js` over every key form of lessons 8 and 9 after the fixes (all `*es`, `*ed` and city and state strings) rather than editing by hand.
- The Together and Test items (P1-P5, T1-T5) were not re-solved. L9 P5 is the only legacy item with a MUST.
- Not marked ACCEPTED. After the two MUSTs (9-1, 9-2, and 8-1) a fourth look can be limited to P5, C12, S05 (both lessons), C04/S04/S06 drafts and the leak scan.
