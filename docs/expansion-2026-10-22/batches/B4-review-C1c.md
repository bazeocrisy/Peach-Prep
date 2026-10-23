# B4 independent review: 3.T.C.1.c (purpose and audience in captions, labels, sounds, signs)

**Reviewer:** independent content reviewer. I did not author this lesson. I edited no lesson and ran no git. I wrote only this file and scratch files under `scratchpad/c1c/`.
**Scope:** the `3.T.C.1.c` block of `js/data/lessons/T-C.js`. That is 15 core items (P4 and P5 as refs, C03-C15), similar S01-S15, addons for Together P1-P5, passages p3 "Be Pool Smart!" and p4 "Wolves Talk", Watch Me, and the teach points.

## Verdict: CHANGES REQUIRED

Keys, scoring, hint structure and the browser behaviour are sound. The blockers are:
- word-matching keys in C15 and S15;
- three near-copy similar items (S09, S14, S15);
- a false "new topic" claim for pool safety.

| Id | Severity | One line |
|---|---|---|
| M1 | MUST | C15 and S15: the two keys are the nouns the slide's own sentences name, so a child can answer by word matching |
| M2 | MUST | S15, S14 and S09 are near-copies of C15, C14 and C09 (word-set Jaccard 0.46, 0.36 and 0.32; accepted is 0.21 or less) |
| M3 | MUST | Pool safety is not new: lifeguard and whistle content already sits in T-RA (C14) and T-SS (Splash Day) |

There are 7 SHOULD findings and 7 NOTEs below.

---

## 1. Blind solve

**Method.** `scratchpad/c1c/blind.js` loads T-C.js in a Node `vm` sandbox. It resolves every `{ref}` and prints the passages, the 15 core items and S01-S15 with a seeded shuffle of choices, options, slots and match rows. It strips `correct`, `answer`, `why`, `hints`, `how`, `clue` and `misconception`, recursively. I printed the stripped JSON (`stripped.json`) and grepped it for those words before reading. The only hits were the ordinary prompt words "answer"/"answers" ("Choose two answers", "answer on the next click"). Nothing was missed. I wrote my answers to `myans.json` before extracting any key.

**Result: 30 of 30 keyed core and similar items agree (100%).** C10's key is a target id and compared equal after I normalised the string. The shuffled order differed from the source order for C09 and S09, and I compared those by row text.

**How blind it was, honestly.**
- My schema probe printed the whole `addons` object. That showed me the hints, `how` and misconception text for Together P1-P5, and so the keys of P1-P3. **The P1-P3 solve was not blind.** P4 and P5 are core, and I solved them blind from the stripped print before I had read their addon text. I did not solve P1-P3 blind.
- I did not open the raw source or the author log before saving answers. I read the log afterwards.
- A 100% agreement rate on mostly one-correct-choice items shows only that the items are answerable. The findings below are about what the agreement rate cannot show.

I printed every keyed choice next to its `why`, `how` and hints for all core, similar and addon items and read them (`full.txt`). I found no wrong key and no mismatch between `why`, `how` and the key.

## 2. Hint ladders: live choices after the clue and hints 1-3

The author's counts (4 to 3, 5 to 4 and so on) are a rough estimate. I recounted by hand. I counted a choice as dead only if a hint names it or states a property that rules it out. I did not count a hint that merely restates the definition of the skill as ruling anything out.

| Item | After clue/h1/h2 | After h3 | Note |
|---|---|---|---|
| P4 mc | 4 | 3 | The clue and h2 say "compare". Only the key shows several things side by side (S1) |
| P5 dropdown | 3 | 2 | h2 "what the farmers use" points at "machine". The key repeats "machine ... dig" from Slide 3 (S1) |
| C03 mc | 4 | 3 | OK |
| C04 hottext | 3 (h1 "a word or two" kills the long sentence) | 2 | Passes, but only just. "More than any state" and "Peanut harvest" are the two live decoys, and h3 names the first |
| C05 ms | 5 | 4 | OK. The decoys carry their own flaw words: "silly", "tiny numbers", "Buy some today!" (S5) |
| C06 mc | 4 | 3 | OK. See S3 on word matching |
| C07 dropdown | slot 1: 3, slot 2: 3 | 2 / 3 | Slot 1 ends with the key and "all the words in smaller letters". Slot 2's decoys are weak |
| C08 mc | 4 | 3 | OK. See S4 on option B |
| C09 match | 3 columns per row | 2 per row | OK |
| C10 hottext | 10 | 9 | OK |
| C11 mc | 4 | 3 | OK |
| C12 ms | 5 | 4 | OK. The decoys are absurd |
| C13 mc | 4 | 3 | See S4 |
| C14 hottext | 4 | 3 | OK |
| C15 ms | 5 | 4 | Passes the count, but h2 "match each sentence to a part" is a word-match instruction (M1) |

Every core item leaves at least 2 live choices, so there is no ladder MUST. Hint 1 is a strategy and hint 2 a place to look throughout. Hint 3 removes one named distractor. The exceptions are P4 and P5 above, where h2 and the clue come very close to saying what the key is.

Similar items S01-S15 follow the same ladder pattern with the same caveats. S01 h2 "notice what changes" names the key's property (SHOULD S1).

## 3. Findings

### MUST

**M1. C15 and S15: word-matching key.**
- C15: the slide says "Veins carry water ... The blade catches sunlight." The keys are "veins" and "blade". The decoys "stalk", "edge" and "tip" appear nowhere in the slide. A child who matches words to the labels gets 2 points with no reading of purpose or audience.
- h2 says "match each sentence to a part", which is the word-match instruction itself.
- S15 has the same design with "canopy" and "handle".
- **Fix.** Write the slide sentences about function without naming the part. For example: "Tiny tubes carry water through the leaf. The wide, flat part catches sunlight." Then the keys need a small inference. Alternatively, make the label choices describe the part and not name it.

**M2. Near-copy similar items.** The brief's accepted score is 0.21 or less with at most 1 shared option. I computed word-set Jaccard on stem, prompt and options (`sim.js`):

| Similar | Core | Jaccard | Shared options |
|---|---|---|---|
| S15 | C15 | 0.46 | 1 ("tip") |
| S14 | C14 | 0.36 | 0 |
| S09 | C09 | 0.32 | 0 |
| S13 | C13 | 0.29 | 0 |
| S12 | C12 | 0.28 | 0 |
| S04 | C04 | 0.25 | 0 |
| S03 | C03 | 0.19 | 0 |

The other eight are 0.18 or less. A lower score by other measures (word 2-grams: S09 0.24, S15 0.28, S14 0.22, S04 0.20) does not change the picture for S15, S14 and S09.
- **S15** is C15 with leaf changed to umbrella: five parts, two sentences, the same decoy logic and the same shared option "tip".
- **S14** copies C14 slot for slot: an old photo, an audience who has not seen it, the faded-photo decoy, the "has always loved X, favorite colour Y" decoy and the "X in general" decoy.
- **S09** keeps C09's four-row design, the over-long sentence frame ("This is the ... where ...") and the two "different part" rows.
- **Fix.** Give each a new task shape and new decoy logic. Examples: S14 asks which caption adds a fact the reader cannot see; S09 uses a different set of label failures, such as a vague label or a label for the wrong thing; S15 uses a task with three parts and a different reason for choosing.
- S13, S12 and S04 are above 0.21 as well. I rate them SHOULD (S6) because their design overlap is lighter.

**M3. Pool safety is not new (author claim fails).**
- `js/data/lessons/T-RA.js` line 1487 (`SK-RA1b-C14`): "How do lifeguards keep swimmers safe?" with a whistle note and a lifeguard-class note.
- `js/data/lessons/T-SS.js` lines 1195-1208 and 1918: the Splash Day passage ("a lifeguard watches", "a lifeguard is always on duty", "a grown-up close by") and its heading item.
- p3's lines 2, 7 and 9 repeat the same safety facts, and five core items (C06-C10) and Together content sit on p3.
- Under the batch rules a topic reused across lessons is a MUST. B3 treated the same fault as MUST (S10, C11).
- **Fix.** Change the p3 topic to one with no match in `js/data` (a bike or crosswalk topic checks out in my grep, but the author should re-run the grep). If the topic stays, the duplicate lessons need a reviewer decision.

### SHOULD

**S1. Clue and h2 name the key's property.**
- P4: the clue and h2 say "compare". Only the key shows peanut, bean and pea together.
- P5: h2 "what the farmers use" points straight at the key's "machine".
- S01: h2 "notice what changes" names the one property only the key shows.
- Each still leaves at least 2 live choices, so these are not MUST. **Fix:** h2 should say where to look ("read the title and both sentences") and leave the property to the child.

**S2. Peanut topic and key facts are heavily reused.**
- The legacy p1 facts (yellow flowers, peg, Georgia first, not true nuts) also sit in T-RA (lines 1006-1015), T-T2 (the "Peanuts" draft at 3359ff), T-SS (about line 103), L-V3 (line 810) and W-REV-02.
- My 6-gram scan found "georgia grows more peanuts than any other state" in L-V3 and the peg sentence in T-SS.
- p1 is legacy. The new items C03, C04 and C05 add to the reuse. Consider building C03-C05 on a second, unused topic.

**S3. C06: word-matching key.** The key repeats "life jackets" and "lifeguard" from the poster. No decoy shares any poster word. **Fix:** add decoys that use poster words but do not fit (for example "an empty lifeguard chair beside a closed pool").

**S4. C08 option B and C13 Sign B.**
- C08: "New swimmers should stay close to a grown-up." is poster line 4, and it fits the photo reasonably. The key rests on h1's definition of a caption. Make the key's edge clearer: the decoy is a rule, not what the photo shows.
- C13: `how` says Sign B "thanks people after the sale", but the stem never says the sale has happened. "Our class raised $140" could be an earlier fundraiser. S13 is clearer ("Thank you for coming to our play!"). **Fix:** make Sign B's words plainly refer to a finished sale.

**S5. Decoys are too easy.**
- C05: "silly song about a squirrel", "tiny numbers", "Buy some today!".
- C07: "all the words in smaller letters" and "taking the pictures down".
- C12: the clipboard, the worn-out ball and the stadium.
- S05 and S12 have the same problem (a movie star, a stop sign).
- This keeps the live count passable but makes the items easy. **Fix:** make at least one decoy per item plausible.

**S6. S13, S12 and S04 score 0.25 to 0.29.** They are over the 0.21 line (see M2). S13 copies C13's A/B sign structure and key sentence. Refresh the frames.

**S7. Watch Me does not model the fifteen.**
- The 3 Watch Me items model picture fit, a caption and a change of audience.
- They do not model labels (C04, C09, C15, S04, S09, S15), sounds (P5, C11, S02, S11), removing an off-purpose line (C10, S10) or the choose-two format.
- The teach points cover labels, sounds and the removal of off-purpose lines. Add one Watch Me for a label, or one that covers a sound and a removed line.

### NOTE

- **N1. Labels by word match.** C04, C09, S04 and S09 reward matching the key to words already in the stem or slide ("shallow end", "Swings", "Front pocket"). The keys are acceptable because the failure modes (too long, wrong part) are real, but the word match is a free shortcut.
- **N2. Sound items.** P5, C11, S02 and S11 are four sound items in one lesson, in the same "which sound fits" format. Distinctness holds (different passages and facts), but the format is repeated.
- **N3. Wolves.** C11's key fact (wolves howl to call one another) is a decoy in T-RA S02 (line 4507). I judge it acceptable because it is a decoy in a different skill.
- **N4. FK.** The passages pass: p1 about 4.0, p2 2.7, p3 2.6 and p4 3.8, with `readability.py` giving 3.2, 2.7, 2.6 and 3.8. Item text (stems and options joined into sentences) is at or under 4.5 except C05 5.0, C06 4.8 and C14 6.0 (long caption options). This is a heuristic.
- **N5. Author-log DOK.** The log's DOK column disagrees with the lesson for several items (C06 log 3 vs lesson 2; C11 log 2 vs 3; C13 log 2 vs 3; P4 log 2 vs 3). The lesson's own values give 7 items at DOK 2 and 8 at DOK 3, which is a fine mix. Update the log.
- **N6. Passage-to-answer, 'like' mappings and points.**
  - Every `like` points to the right core item: S01 to P4, S02 to P5, and S03-S15 to C03-C15.
  - Points are right: ms/dropdown/match double items = 2, the rest = 1.
  - The grade-3 level is fine and nothing reads as kindergarten.
- **N7. Official wording.**
  - "Create multimodal texts, using features of pre-selected modes for a specific purpose and audience."
  - Covered: modes and features (pictures C06/C12, captions C03/C08/C14, labels C04/C09/C15, sound P5/C11, size and wording C07/S07); purpose (C05, C10, C13); audience (C05, C07, C12).
  - "Create" is judged through plans and choices. That is the usual limit for a selected-response item. The `write` task covers actual creation.

### Pre-answering and leakage

- I found no item that gives away another item in a set, and none between core and Together P1-P5. The P1-P3 keys (labelled stalk drawing, "dry in the sun" caption, yellow flower and peanut under the soil) are not echoed in core keys.
- I found no 6-gram overlap of the new items with other lessons beyond stock phrases ("a common mix-up is choosing", "choose the best answer for each blank", "on the test you may be asked"). The peanut sentences above are the exception (S2).
- Order-by-number labels: C10's ten numbered lines match the passage; h3 names line 6, `how` names line 5 and line 10, and the browser shows ten lines numbered (1) to (10). The off-purpose line was renumbered consistently. C09 is a match item with columns, not a numbered list, and its rows are consistent with its `how`.

## 4. `cr` items

There are no `cr` items in this lesson. The `write` task (poster, caption, one label, sound idea) has a checklist that matches what the core items practise. No sample answer exists to judge.

## 5. Facts and sources

| Claim | Result | URL |
|---|---|---|
| A wolf pack is a family: mother, father and young | Supported ("mom, dad, and offspring") | https://kids.nationalgeographic.com/animals/mammals/gray-wolf/ |
| Wolf calls carry for miles | Supported (a pack's howl can be heard from ten miles away) | https://kids.nationalgeographic.com/animals/mammals/gray-wolf/ |
| Strong sense of smell | Supported (100 times a human's) | https://kids.nationalgeographic.com/animals/mammals/gray-wolf/ |
| Wolves howl to warn of danger and to find each other | Supported | https://en.wikipedia.org/wiki/Howling |
| Peanuts dug up, inverted and left to dry in the field a few days, then combined | Supported (two or three days after digging) | https://fieldreport.caes.uga.edu/publications/B1087/peanut-digger-and-combine-efficiency/ |
| Pool safety: lifeguards, buddy, arm's reach for new swimmers | Supported, with differences: life jackets mentioned for non-swimmers; "never swim alone" is stated as "swim with a buddy"; "rest when tired" is not on that page | https://www.redcross.org/about-us/news-and-events/news/2018/water-safety-tips-for-the-pool--beach-and-water-park.html |
| Spring peeper: small, X-shaped mark on the back, male vocal sac, "sleigh bells" chorus, spring calling | Supported | https://en.wikipedia.org/wiki/Spring_peeper |

Not verified: "peepers stop singing when they hear someone coming" (the Wikipedia page does not say it; it is widely reported). Georgia as the top peanut state is stated on legacy p1 and was not re-checked here (it was already in the repo and is well known).

## 6. Browser run (390 x 844)

`node verification/serve.js . 8841`, Playwright (`scratchpad/c1c/br.py`, using the helpers from `verification/practice-own.py`). I worked all 15 core items in order across the 3 sets: opened the three hints, then Show me how, then set the correct answer and clicked Check my answer.
- Check my answer, the hint button, Show me how and Try a similar question were present on all 15 items.
- The three hints appeared and the hint button then disabled itself on all 15.
- After Show me how the feedback read "You used Show me how first, so this one counts as answer shown" on each item, as designed.
- No page errors. The only console error was the blocked Google Fonts request. There was no horizontal scroll on any item.
- Screenshot of C10: `scratchpad/c1c/c10.png`. It shows ten numbered lines, three hints, Show me how and the similar-question button, all without overflow.

## 7. Summary of what to change

1. Rewrite C15 and S15 so the keys cannot be found by word match (M1).
2. Replace or reshape S15, S14 and S09 (and refresh S13, S12 and S04) so each is a fresh application (M2).
3. Move p3 to a topic with no match in `js/data`, or get a decision on the overlap with T-RA and T-SS (M3).
4. Soften h2 and the clue in P4, P5 and S01 (S1).
5. Add one Watch Me that models a label or a sound (S7).


---

# Re-review after fixes (3.T.C.1.c)

**Reviewer:** independent, did not author or first-review this lesson. No lesson edits, no git. Scratch files: `scratchpad/load.js`, `blind.js`, `keys.js`, `ladder.js`, `sim*.js`, `wm.js`, `fk*.js`, `br*.py`.

## Verdict: CHANGES REQUIRED

Two MUST findings (S15, and scooter topic reuse) and 9 SHOULD. Keys, scoring, points, `like` mapping, passages, passage FK and the 390x844 run are sound. The first review's M1 is only partly fixed for C15, and S15 now has a worse form of the same fault.

| Id | Sev | One line |
|---|---|---|
| M1 | MUST | S15: the stem names both keys ("a wheel", "the handlebar"); the item is a word match |
| M2 | MUST | Scooter is not a new topic: T-TS has a scooter handlebar/wheels match item; T-T2 has a labelled bike figure |
| S1 | SHOULD | C15: key phrases are echoed verbatim between the stem definitions and the slide |
| S2 | SHOULD | C06: the key is the only picture containing "pinwheel" (the poster title) |
| S3 | SHOULD | C09: hint 3 states one row's answer outright |
| S4 | SHOULD | C10 and S10: blatant off-topic line (plan 4.8 lists this as a weak-item pattern); C10 h3 points into the key's paragraph |
| S5 | SHOULD | C12: key option says "close to the readers' age"; two decoys are absurd |
| S6 | SHOULD | C04: only 2 choices live after clue+h1-h3 (author counts 3); h2 names the two parts |
| S7 | SHOULD | S02, S11: key is the slide's own noun; S11 is not DOK 3 |
| S8 | SHOULD | S05 0.218 and S07 0.221 word-set Jaccard, a little over 0.21 |
| S9 | SHOULD | C14 stem+options FK 5.8 to 6.5 |

## 1. Blind solve

- Method: Node `vm` sandbox with a mock `PP.addLesson` loading `js/data/lessons/T-C.js`. The script resolves the `{ref}` items (P4, P5), strips `correct`, `answer`, `clue`, `hints`, `how`, `why`, `misconception` and `like`, keeps passages, stems, prompts and hot-text targets, and shuffles choices, options and slot options with a seeded LCG. I printed the stripped JSON to a file and grepped it for those words. The only hits were ordinary prompt words ("Choose two answers", "how a kaleidoscope works").
- I wrote my answers to `myanswers.json` before running the key extractor.
- **Agreement: 35 of 35** (15 core, 15 similar, Together P1-P5; C09 and S09 compared per row, C10 by target id).
- Honesty: before solving, I printed about 15 lines of source at the start of the 1.c block (title and the first two teach points) and a grep listing of the `SK-TC1c-C0x` declaration lines (ids, types, dok). No keys, choices or why text. I did not read B4-review-C1c.md or the author log until my answers were saved. 100% agreement shows only that the items are answerable.

## 2. Keyed text beside why/how/hints

I printed key, clue, h1-h3, how, misconception and why for all 15 core, 15 similar and the five addon sets, and read them. Key, `why` and `how` agree on every item. No wrong key. Official wording (`standards.js`): "Create multimodal texts, using features of pre-selected modes for a specific purpose and audience." All items address a mode, the purpose or the audience. Points are right (ms, two-slot dropdown and match = 2). `like` mappings are one to one; S15 is honest in form only (it tests label form, C15 tests which parts to label).

## 3. Hand recount of live choices after clue + h1 + h2 + h3 (core)

A choice is dead only if a hint names it or states a property that rules it out.

| Item | Live | Author | Note |
|---|---|---|---|
| C01 (P4) | 3 | 3 | ok |
| C02 (P5) | 2 | 2 | h2 "who does the work" points at "machine" (only 3 options) |
| C03 | 3 | 3 | ok |
| C04 | 2 | 3 | h1 "a word or two" kills the long sentence; h2 "the two parts inside the tube" leaves Mirrors and Glass pieces; h3 kills "Turn the tube" |
| C05 | 4 | 4 | ok |
| C06 | 3 | 3 | ok |
| C07 | 2 / 3 | 2 / 3 | ok |
| C08 | 3 | 3 | ok |
| C09 | Paper blades row: 1; other rows 2 | 3 to 2 | h3 states the Paper blades row |
| C10 | 9 | 9 | h3 names line 6, the neighbour of the key |
| C11 | 3 | 3 | ok |
| C12 | 4 | 4 | ok |
| C13 | 3 | 3 | h3 "tells neighbors to come on Saturday" is the key's property |
| C14 | 3 | 3 | ok |
| C15 | 4 | 4 | ok |

No whole item is left with one option, so there is no ladder MUST. h1 is a strategy and h2 a place to look on all 15 except the notes above.

## 4. Similarity (own script `sim2.js`: word-set Jaccard on stem + prompt + text + options, stop words kept; the core passage is added where the core item shows one)

| Pair | J | Pair | J | Pair | J |
|---|---|---|---|---|---|
| S01-P4 | .137 | S06-C06 | .205 | S11-C11 | .145 |
| S02-P5 | .114 | **S07-C07** | **.221** | S12-C12 | .205 |
| S03-C03 | .205 (.216 if apostrophes are dropped) | S08-C08 | .183 | S13-C13 | .164 |
| S04-C04 | .125 | S09-C09 | .190 | S14-C14 | .162 |
| **S05-C05** | **.218** | S10-C10 | .164 (.213 with p3 text) | S15-C15 | .186 |

Shared options: 0 for every pair; no option pair with word Jaccard of 0.4 or more; no duplicate option anywhere in core + similar + Together. With stop words removed every pair is 0.15 or lower. The excess in S05 and S07 comes from the identical prompt frame ("Which TWO ideas ... fit its purpose and its readers? Choose two answers.").

## 5. Findings

### MUST

**M1. S15: the stem hands over both keys.**
- Stem: "One arrow points to a wheel, and one arrow points to the handlebar." Keys: "Wheel", "Handlebar". h2 says "does it match one of the two arrows?", which sends the child back to the stem words.
- The three decoys fail on form alone ("Ride it fast!" is a command, "Scooter" is the whole thing, the sentence is long), so the item is solved with no thought about what an arrow points to. This is the first review's M1 in a new form.
- Fix: describe the arrowed parts by job or look, as C09 does: "One arrow points to the round part that rolls on the ground. One arrow points to the bar a rider grips to steer." Do it together with M2.

**M2. Scooter is not a new topic.**
- grep over all of `js/data`, outside this lesson: `pinwheel` 0 hits, `kaleidoscope` 0, `craft table` 0, `town park` 0, `tarp` 0, `origami` 0, `orchid` 0, `walk-a-thon` 0, `kickball` only in T-T34 (an unrelated use).
- `scooter`: `T-TS.js` 3346-3369 (`SK-TSCC-C05`, a match item on "a scooter has a tall handlebar ... two wheels"), `T-T2.js` 524-542 (a labelled bike figure with handlebars), `T-SS.js` 4403 and 4966 (scooter in two stories), `L-GUM5.js` 220.
- The S15 keys "Wheel" and "Handlebar" are exactly the T-TS scooter facts. Under the batch rule a topic reused across lessons is a MUST (first review M3).
- Fix: move S15 to a topic with no grep hit (re-run the grep), for example a windsock or a toy boat.

### SHOULD

**S1. C15: the key phrases are verbatim.**
- The stem defines "veins (thin lines that look like tiny tubes)" and "the blade (the wide, flat part)". The slide says "Tiny tubes carry water" and "The wide, flat part catches sunlight". The child maps "tiny tubes" to "tiny tubes". The decoys' definitions share no word with the slide.
- The part nouns are gone from the slide, so the first M1 is half fixed. The phrase echo stays. I rate it SHOULD because the child must still read the definitions and attach the term.
- Fix: define the parts by look or place, and let the slide describe the job in other words ("Water moves along these lines"; "This part takes in sunlight").

**S2. C06: only one picture contains "pinwheel".** Poster title "Make a Pinwheel!"; key "children holding bright paper pinwheels ...". The decoys (paper hats, tarp-covered table, kite) borrow craft table, town park and wind, but none says pinwheel. Fix: put pinwheel into two decoys that do not fit ("a pinwheel lying broken on the ground beside an empty table", "a box of pinwheels on a store shelf with no children").

**S3. C09: hint 3 gives one row.** h3 "The paper blades are the part that spins, not the part a child holds. Sort the other three labels." settles the Paper blades row. Fix: a check, not an answer: "Check each label's length first. Then ask which part the arrow points to, and whether the label names it."

**S4. C10 and S10: blatant off-topic line.** The odd lines are "My cousin just got a new puppy named Biscuit." and "My dog likes to chew on crayons." No reading of purpose is needed; plan 4.8 lists blatant off-topic sentences (SK-SS1d-P4/P5) as weak, and C10 is marked DOK 3. C10 h3 names line 6, next to the key. Fix: use a line that looks on topic but does not serve the purpose (for example "Pinwheels were invented a very long time ago."), and name a distant line in h3.

**S5. C12: the key says what it is for.** "children close to the readers' age kicking a red ball and laughing" names the audience criterion in words nobody would write about a photo; the stem says "six- and seven-year-olds". Decoys: the clipboard adult and the stadium teenagers are absurd; only the rolling ball is plausible. Fix: "children about seven years old kicking a red ball and laughing", and one more plausible decoy (clearly older children kicking a ball).

**S6. C04: 2 live after the hints (author says 3).** Decoys are "Mirrors" (content), "Turn the tube" (a direction) and a long sentence (form). h1 kills the sentence, h3 kills "Turn the tube", and h2 names the two parts. A child who knows "a label is a word or two" has a coin flip. Fix: a second part decoy ("Tube" or "Eyehole") in place of "Turn the tube".

**S7. S02 and S11: slide noun = key noun.** S02 title "Drums Keep the Band Together" gives the key "a steady drumbeat from a marching band"; S11 title "The Bell Tells Us" gives "a school bell ringing in a hallway". The decoys share no slide word. S11 is marked DOK 3 but is a topic match (DOK 2). C11 is better: its key does not repeat the slide's noun. Fix: use the slide noun in one decoy ("a bell ringing at the end of a bike race") and set S11 to DOK 2.

**S8. S05 and S07 are 0.218 and 0.221, over the 0.21 ceiling.** S03 is 0.216 with another tokenizer and S10 0.213 when the p3 text is counted. All have 0 shared options. Fix: change the shared prompt frame in S05 and S07.

**S9. C14 reading level.** Stem + prompt 5.8 (pyphen) or 6.0 (repo heuristic); with options 6.2 and 6.5. S14 5.9 (heuristic). Long sentences ("Slide 6 shows an old photo of her grandmother at age eight.") drive it. Fix: two or three short stem sentences.

### NOTE

- **N1.** Caption items (C03, C08, S03, S08, C14, S14): the key repeats the photo description and the decoys do not. That follows from the task, so no change is needed. A decoy that reuses two stem nouns would harden C08 and S03.
- **N2. Key length.** The key is the longest option in 5 of 8 core single-answer mc/hottext items and 8 of 10 similar ones, but by a clear margin only in C13 (78 vs 66), C14 (94 vs 79) and S14 (95 vs 57). S14 asks for "the most", so length is intended there.
- **N3. C13.** The prompt says "the sale is on Saturday" and the key sign contains "Saturday". "Either sign" is the weakest decoy. Watch Me does not model timing.
- **N4. C07 and S07.** The wrong options are easy to dismiss ("covering the pictures", "hidden behind the words"). DOK 3 is generous.
- **N5. P5 (C02).** Three options and h2 "who does the work" leaves a 50/50 with a cue to "machine". A fourth option would help.
- **N6. S09.** "The narrow, pointed piece in front" is the tip of the crane's head (the beak is a small pinched fold). No "head" option is offered, so the key is unique. Say "the tiny pointed tip at the front of the head".
- **N7. Kaleidoscope.** "A tube with mirrors and small pieces of colored glass inside" simplifies (the pieces sit in a cell at the end). Fine for grade 3.
- **N8. Together P1-P3.** Keys echo Slide 2 and 3 words. They are practice items, and they solved blind.
- **N9. Learn It / Watch Me** model picture fit, off-purpose line removal, caption, one-word label and a change of audience, and the teach example shows a sound. They do not model choose-two, a "too general" label or a timed sign. Acceptable.
- **N10. Pre-answers.** None across a set or into Together. C09's key "Stick" is in p3 line 6, but p3 is not shown with C09 (passages: []).
- **N11. FK.** Passages (repo heuristic / pyphen): p1 3.2 / 2.4, p2 2.6 / 1.8, p3 3.2 / 2.6, p4 3.8 / 3.2; all at 4.5 or lower. Item text above 4.5 under one or both counters: C03 5.2, C04 4.9, C05 5.0 (heuristic), C14 6.0, S08 5.1, S14 5.9.
- **N12.** The pool-safety fix is verified: p3 is "Make a Pinwheel!" with no pool text left. p2 (spring peepers) is not used by any core or similar item.

## 6. Facts and sources

| Claim | Result | URL |
|---|---|---|
| Kaleidoscope: mirrors in a tube, loose glass pieces tumble when turned, each turn gives a new pattern | Supported (pieces sit in a cell at the end; N7) | https://www.britannica.com/EBchecked/topic/310099 |
| Pinwheel: wind pushes the blades; wheel pinned to a stick | Supported | https://en.wikipedia.org/wiki/Pinwheel_(toy) |
| Paper crane has a head, beak (pinched fold), wings, tail | Supported | https://www.centerstone.org/wp-content/uploads/crane_instructions_download_final.pdf ; https://www.erin.jpf.go.jp/en/lesson/16/let-us-try/ |
| Leaf: blade is the broad part that catches sunlight; petiole (stalk) joins it to the stem; veins are tube-like and carry water | Supported | https://kids.britannica.com/students/article/leaf/275410 |
| Wolf pack is mom, dad and young; howl heard from about ten miles; howls warn of danger; smell 100 times a human's | Supported | https://kids.nationalgeographic.com/animals/mammals/facts/gray-wolf |
| Peanut facts (p1) and spring peepers (p2) | Not re-checked; first review's sources stand | section 5 above |

Orchid petals, blueberry colours and drum cadence were not searched; they are standard facts and nothing looked doubtful.

## 7. Browser run (390 x 844)

`node verification/serve.js . 8855`, Playwright (`scratchpad/br.py`, `br2.py`). I ran all 15 core items in order through the three sets.
- Every item rendered (passage items show the "Read the passage / Question" tabs at phone width). No horizontal scroll on any item (scrollWidth 390 before and after answering).
- Three hints appeared on every item, with text equal to the data; the hint button then read "No more hints". Show me how showed every `how` step and marked the item "answer shown".
- Setting the correct answer and pressing Check gave "That's right!" on all 15.
- C09 (match) and C10 (ten numbered lines) fit without overflow. Screenshots: `scratchpad/shots/SK-TC1c-C09.png`, `SK-TC1c-C10.png`.
- The only console error was the blocked Google Fonts request.

## 8. What to change

1. S15: rewrite the stem so it does not name the keys, and change the topic (M1, M2).
2. C15: do not repeat the stem's definition phrases in the slide (S1).
3. C06 decoys with "pinwheel"; C09 h3; C10 and S10 off-topic line; C12 key wording; C04 decoy; S02 and S11 decoys and S11 DOK; S05 and S07 frames; C14 sentence length (S2-S9).
