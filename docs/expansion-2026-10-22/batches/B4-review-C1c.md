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


# Third review (3.T.C.1.c)

**Reviewer:** independent, did not author or earlier-review this lesson. No lesson edited, no git. Scratch: `scratchpad/r3/` (`load.js`, `strip.js`, `show.js`, `cmp.js`, `keyed.js`, `jac.js`, `echo.js`, `fk.js`, `browse.py`, `shots/`).

## Verdict: CHANGES REQUIRED

Two MUSTs (a stale hint that quotes a choice that does not exist, and a reused topic), plus SHOULDs. Keys, scoring, ladders and the phone sitting are sound.

| Id | Sev | One line |
|---|---|---|
| M1 | MUST | S15 hint 3 quotes "Race it fast!"; the choice is "Pour it slowly!" |
| S1 | SHOULD | S15 is not an honest `like` for C15; it repeats the S04/S09 label-form skill |
| S2 | SHOULD | S06 and S12 are 0.225 word-set Jaccard against C06 and C12 (ceiling 0.21); S12 reuses the "adult frowning" decoy |
| M2 | MUST | Peanut growth is already taught in T-SS (3.T.SS.1.a), T-T2 (3.T.T.2.d) and L-V3 (3.L.V.3.d); p1 repeats the same facts |
| S4 | SHOULD | S03, S08, S14 (and C14): the key copies the stem's photo description; S13's key is the only option with "helpers", "chairs", "Thursday" |
| S5 | SHOULD | C13 hint 3 states the key's criterion ("tells neighbors to come on Saturday") |
| S6 | SHOULD | C03 and C08 are the same item shape (photo, description, caption; same four decoy roles) |
| S7 | SHOULD | Learn It / Watch Me do not model sounds, "too general" labels, or a timed sign |

## 1. Blind solve

I loaded T-C.js in a Node `vm` sandbox with a mock `PP.addLesson`. I resolved `{ref}` (C01 = P4, C02 = P5), and printed C01-C15, S01-S15 and P1-P5 with seeded shuffles of choices, options, slot options, match rows and order steps. I stripped `correct`, `answer`, `targets`, `why`, `hints`, `how`, `clue`, `misconception`, `like` and `std`. I grepped the stripped JSON for those key names (zero hits) before reading it. I saved `myans-C.txt` before I printed any key. I did not read the teach or Watch Me text, the author log or the earlier reviews until after that.

**Agreement: 35 of 35.** C10 (hot text on the poster's numbered lines) matched too: I chose line 5, the key is `p3:3:1`. The solve was fully blind. Every item had one defensible answer. The slower ones were C12 (A and C over D), C04 and S09 (Beak against two "too general" rows).

## 2. Keyed text beside why, how and hints (all 35 items)

I read key, `why`, `how`, hints and clue together for every item. `why` and `how` match the key, and no `how` is wrong.
- **Stale hint.** S15 h3 reads `"Race it fast!" tells a person what to do`. No such choice exists; the choice is "Pour it slowly!". See M1.
- **Step shape.** C08 `how` has no "The answer is ..." step. HOW3 explains the decoys and HOW4 repeats one. Every other item states the answer. NOTE.
- **Hints and clue.** No hint or clue contains the key's wording, except C13 (S5) and the passage-word echoes in P2 ("dug up").

## 3. Hand recount of live choices after clue and hints 1-3 (core)

"Live" means not named as wrong by a hint. Hint 3 removes exactly one decoy in every core item, and none narrows to the key.

| Item | Live | Note |
|---|---|---|
| C01 | 3 of 4 | h3 removes the harvest field |
| C02 | 2 of 3 | h3 removes bees; h2 "who does the work" cues the machine (a 50/50, same as P5) |
| C03 | 3 of 4 | removes the pattern fact |
| C04 | 3 of 5 | h3 removes "Tube"; h1 ("a word or two") removes the sentence |
| C05 | 4 of 5 | removes the sale sign |
| C06 | 3 of 4 | removes the shelf box |
| C07 | 2 of 3 in blank 1 and 3 of 3 in blank 2 | |
| C08 | 3 of 4 | removes "prettiest" |
| C09 | no row named | strategy only |
| C10 | 9 of 10 | h3 clears line 2 |
| C11 | 3 of 4 | removes the wind |
| C12 | 4 of 5 | removes the frowning adult |
| C13 | 3 of 4 | h3 is not an elimination, see S5 |
| C14 | 3 of 4 | removes the faded photo |
| C15 | 4 of 5 | removes the stalk |

## 4. Similarity (own `jac.js`: word-set Jaccard of the similar item against its `like` core item, stem + prompt + text + options; the core passage is not added)

All 15 share 0 options. I list both measures: all words, then content words (stop words removed).

| Pair | All | Content |
|---|---|---|
| S03/C03 | 0.207 | 0.143 |
| S06/C06 | **0.225** | 0.125 |
| S07/C07 | 0.200 | 0.136 |
| S12/C12 | **0.225** | 0.165 |
| S09/C09 | 0.190 | 0.095 |
| all others | 0.127 to 0.183 | |

Only S06 and S12 are over 0.21, and only on the all-words measure (S2). S03 is at the edge.

## 5. Findings

### MUST
**M1. S15 hint 3 quotes a choice that is not there.** Hint 3 is `"Race it fast!" tells a person what to do, and a label names a part. Check the other four choices.` The decoy is "Pour it slowly!". It looks like a leftover from an earlier draft. It can send a child looking for a missing option, and it is the same fault as the RA S03 hint in the previous round. Fix: `"Pour it slowly!" tells a person what to do, and a label names a part. Check the other four choices.`

### SHOULD
**S1. S15 is not an honest parallel for C15.** C15 asks which parts of the drawing the slide's words are about (a two-from-five selection tied to the text). S15 asks which labels are written the way labels should be (a name, not a sentence, not a command, not the whole thing). That is C04, C09, S04 and S09 again, which already use the "long sentence, too long" decoy. Three similar items (S04, S09, S15) therefore drill label form, and none drills C15's skill. Fix: re-point `like` for S15 and make a new S15 that gives two sentences of slide text and asks which two parts to label. The teapot's handle and spout work for that.

**S2. S06 and S12 are over the 0.21 ceiling on the all-words measure (0.225 each).** S12 also reuses C12's decoy shape ("an adult frowning at a long list on a clipboard" against "an adult frowning at a stack of papers on a desk", plus older children in uniform). Fix: change S12's decoy roles. For example, swap the adult for a picture of an empty field with a closed gate. Vary the S06 and S12 prompts.

**M2. Peanut growth is not a new topic (rated MUST because the brief makes topic duplication across `js/data` a check).** If the plan allows a topic to recur across skill families, downgrade this to SHOULD. I searched every lesson, set and task in `js/data`. Passages on the same facts exist in `T-SS.js` 3.T.SS.1.a "Peanuts: From Flower to Farm" (flowers, the peg, underground), `T-T2.js` 3.T.T.2.d "Peanuts" (flowers first), and `L-V3.js` 3.L.V.3.d "How Peanuts Grow" (Georgia leads; legumes with beans and peas; peg). C.1.c p1 repeats the peg, the yellow flowers, the Georgia fact and the bean-and-pea family. The other topics in the brief's list (teapot, kaleidoscope, pinwheel, orchid, origami crane, walk-a-thon, sidewalk chalk, recess balls) occur only in the two lessons under review. Wolves occur in T-C only. Kickball appears in T-T34 as a one-line example. Fix: move p1 to a topic that is unused, for example another farm crop. If the author keeps peanuts, they should say why in the log.

**S4. Caption keys copy the stem; S13's key is the only option with the stem's nouns.** For S03, S08 and S14 the key is the photo description with a verb, and the decoys share almost none of it (S03 key has 10 stem trigrams; S14 key has 10 and is the longest option; S08 has 6). C14 is the same (5 trigrams). That follows from "a caption tells what the picture shows" (earlier N1). But a child can solve S03 and S08 by copying words with no sense of purpose. S13 is stronger: the stem says "three helpers to set up chairs ... Thursday"; only the key says "Helpers needed Thursday" and shows chairs. Fix: describe the photos in the stem with different words from the key (rain slicker against "raincoat"), and give two S13 decoys the nouns "helpers" or "chairs" (for example "Thank you, helpers, for stacking chairs last week!").

**S5. C13 hint 3 states the key's criterion.** It says to "ask whether it tells neighbors to come on Saturday". The key says "invite neighbors to come and buy". The hint removes no decoy and names the property of the key. Fix: `Sign B's picture shows happy students. Ask whether a neighbor who sees Sign B would know when and where to go.`

**S6. C03 and C08 are twins.** Both are "a photo of a girl holding something; which caption?", with four decoy roles (a fact the photo cannot show, an opinion, a sentence about someone else or the poster, the key). They sit in different sets, and S03 and S08 follow the same template. Fix: make C08 an "audience" caption (a short caption for a reader who cannot see the photo), or ask for the caption with a missing detail.

**S7. Learn It and Watch Me.** They model picture fit, the off-purpose line, a caption, a one-word label and a change of audience, and the teach example shows a sound. They never ask for a sound, a "too general" label (S09 "Crane", "Part of a crane"), choose-two, or a sign for readers who pass quickly (S07). C02, C11, S02, S11, P5, S07 and S09 therefore rest on one teach line. Fix: add one `steps` line on sound fit to Learn 1 and one on "too general" to Learn 2. (Earlier N9 accepted this; I raise it because 7 of 35 items depend on it.)

### NOTE
- **N1. Word-match keys.** C11's key is the only option with "valley" (the passage says "hills and valleys"). S06's key "children singing" echoes "Sing with us!". S02, S11 and S01 echo the slide noun, as in the earlier N-notes.
- **N2. Key length.** In the core, the key is the longest or tied for longest in C01, C03, C05, C06, C12, C13 and C15. The margins are 1 to 23 characters, and are clear only in C12 (89 against 68) and C13 (78 against 66).
- **N3. Distractor caricatures.** C05, S05 and S12 decoys carry their own fault in the text ("tiny numbers", "cannot be read from the sidewalk", "No Visitors"), while the keys do not. That is easy for grade 3. Fine for DOK 2; the DOK 3 labels on C05 and S05 are generous.
- **N4. C10 and S10.** The off-topic line is on topic but is not a purpose line ("sold in many toy stores", "school was built many years ago"). Good, and an improvement on the earlier puppy lines. C10 is dok3 but behaves as DOK 2.
- **N5. C12.** D (a close-up of a kickball) is weak but arguable; the stem asks for the readers, so A and C hold.
- **N6. S04.** The orchid has petals and sepals; "soft, colorful pieces" is fine at grade 3. The "orchid" and "origami" topics are used only here.
- **N7. S09.** A crane's beak is a small pinched fold; "narrow, pointed piece in front" is unique (no head choice is offered). See the earlier N6.
- **N8. S07 and C07.** Wrong options are easy ("hidden behind the words"); fine.
- **N9. Together P1-P5.** Keys echo the slides; P3's "cotton boll" is a good decoy. H3 for P5 and C02 is the same text.
- **N10. Alignment.** Official wording is "Create multimodal texts, using features of pre-selected modes for a specific purpose and audience." Picture, caption, label, sound and audience items fit. All items are choose-from-options, and write-on-paper is in `write`. Points: choose-two, two-blank dropdown and the match are 2; the rest 1. DOK is reasonable.
- **N11. Item-text FK** (my `fk.js`, stop at each option): C03 5.8, C14 5.2, C05 4.9, C06 4.6, S12 4.5. The rest are under 4.5. Passages (repo formula): p1 4.0, p2 2.6, p3 2.9, p4 3.8.

## 6. Facts
| Claim | Result | URL |
|---|---|---|
| Georgia is the top peanut state (about half of U.S. production) | Supported | https://www.georgiaencyclopedia.org/articles/business-economy/peanuts/ |
| Peanut is a legume (same family as beans and peas) | Supported; the page says "legume family" | same |
| Peg, flower and harvest steps | Standard; this page does not describe them (not re-checked) | |
| Wolf howls carry for miles, packs are families | Search results only (NPS, NatGeo pages); the earlier review checked National Geographic | https://kids.nationalgeographic.com/animals/mammals/facts/gray-wolf |
| Kaleidoscope, pinwheel, crane parts, leaf parts | Checked by the earlier review's sources | see the first review |
| First weather satellite 1960 (TIROS-1), so a 1958 magazine predates it (RA lesson, shared check) | Supported | https://nesdis.noaa.gov/content/60-years-ago-today-first-successful-weather-satellite-was-launched |

## 7. Browser (390 x 844)
`node verification/serve.js . 8731`, Playwright, touch and mobile emulation. I ran all 15 core items in order through sets 1-3.
- Every item rendered, and passage items show "Read the passage / Question" tabs. No horizontal scroll on any item, before or after three hints. No control under 44 px.
- Three hints appeared on every item. The correct response gave "That's right!" on all 15. No page errors.
- C10 (ten lines) and C09 (match) fit. Screenshots `scratchpad/r3/shots/C-y2-5.png` and `C-y2-4-h.png`. Only the wrapping of the "Show me how (shows the answer)" button looks awkward; that is the player, not the lesson.

## 8. What to change
1. S15: fix the h3 quote (M1) and re-point or rewrite it (S1).
2. S06, S12: lower the overlap; vary the S12 decoys (S2).
3. p1: new topic (M2).
4. Caption stems and S13 decoys (S4); C13 h3 (S5); C08 shape (S6); Learn It lines (S7).


---

# Fourth review (3.T.C.1.c)

**Reviewer:** independent, did not author. No lesson edits, no git. Scratch files are in `scratchpad/c4/` (`load.js`, `blind4.js`, `show.js`, `keyed.js`, `jac4.js`, `lex.js`, `topics.js`, `browse4.py`). Read the earlier reviews only after my answers were saved.

## Verdict: CHANGES REQUIRED

Keys, factual claims, scoring and browser behaviour are sound. Two defects block acceptance: one `how`/h3 that describes choices the child cannot see, and one h3 that restates the key.

| Id | Severity | One line |
|---|---|---|
| M1 | MUST | S13: h3, `how` and `why` talk about a "Congratulations" notice and a "gold star" notice; no choice says either, so Show me how contradicts the screen |
| M2 | MUST | S05: h3 ("a photo with no words cannot tell neighbors the day, time or place") restates one key ("big words that tell the day, the time and the place") |
| S1 | SHOULD | C14 and S14: the key is clearly the longest option and also the top word-match |
| S2 | SHOULD | C01: the key repeats the slide's own phrases; a word-matcher gets it. DOK of C01 (3) differs from C02 (2) for the same task |
| S3 | SHOULD | S10 reuses C10's prompt frame; it is over 0.21 on the all-words and content-word measures |
| S4 | SHOULD | S12: all three wrong photos are absurd, so it is solvable by elimination; C12's decoys are subtler |
| S5 | SHOULD | Set 1 is four slides about one kaleidoscope, set 2 is five items on one pinwheel poster, and C04 and C09 test the same label rule |
| S6 | SHOULD | C06's h3 and `how` (a boxed pinwheel on a store shelf shows no children) come before C10, whose key is "Pinwheels are sold in many toy stores" |

7 NOTEs follow.

## 1. Blind solve

**Method.** `load.js` loads T-C.js in a Node `vm` with a mock `PP.addLesson`. `blind4.js` resolves every `{ref}` and prints the passages, core C01-C15, similar S01-S15 and Together P1-P5. Choices, options, slots, match rows and order steps get a seeded shuffle. It removes `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like`, `sample`, `criteria` and `comp`, recursively. I grepped `stripped.json` for those words as JSON keys and as prose: no key survived. The prose hits were "answer(s)", "why" and "how" inside prompts and titles ("Choose the best answer", "Which sign ... and why?"). I saved my 35 answers to `my-answers.json` (made read-only) **before** I extracted any key. Keys were in a separate sealed file.

**Result: 35 of 35 agree (core 15, similar 15, Together 5).**

**How blind it was.** My first `show.js` print of the core set came out before I fixed the hottext option handling, so I saw C01-C15 in two different shuffles. I had not seen any key or `why`. Before solving I saw item ids and types in a grep (`SK-TC1c-C01 mc ...`) and the first 1,500 characters of T-C.js (a different lesson). I did not open the lesson source, the author log or any review file until the answers were saved. So the solve was blind to keys and explanations.

Items where I paused: C01 (A, the girl with the tube, is close), C12 (B, C and D), S12 (the answer is only A and B by elimination), C08 (A and E against the very similar B and D).

## 2. Keyed text beside why, how and hints (all 35)

I printed the keyed text next to clue, h1-h3, `how`, `why` and the misconception for core, similar and Together (`keyed.js`). Every key matches its `why` and `how`, except S13 (M1). `how` steps end at the answer on every item.

## 3. Hand recount of live choices (core, after clue/h1/h2/h3)

The engine never narrows (`hint()` in player.js "never outlines or narrows"), so a choice is dead only if the hint text names it.

| Item | Start | After h1-h2 | After h3 | Note |
|---|---|---|---|---|
| C01 | 4 | 4 | 3 | jar out; h3 also states "must show the mirrors" |
| C02 | 4 | 4 | 3 | clapping |
| C03 | 4 | 4 | 3 | pattern fact |
| C04 | 5 | 5 | 4 | "Tube" |
| C05 | 5 (pick 2) | 5 | 4 | the "Buy yours today" sign |
| C06 | 4 | 4 | 3 | box on a shelf |
| C07 | 3 + 3 | 3 + 3 | 2 + 3 | long paragraph |
| C08 | 5 (pick 2) | 5 | 4 | "prettiest toys" |
| C09 | 4 rows | 4 | 4 | process only, nothing removed (good) |
| C10 | 10 | 10 | 9 | line (2) |
| C11 | 4 | 4 | 3 | wind |
| C12 | 5 (pick 2) | 5 | 4 | frowning adult |
| C13 | 4 | 4 | 3 | h3 dismisses a mood picture, so A is soft-out |
| C14 | 4 | 4 | 3 | faded photo |
| C15 | 5 (pick 2) | 5 | 4 | stalk |

No ladder drops below three live choices (four on pick-two, nine on C10). h1 is a strategy, h2 says where to look and h3 removes one option, on all 15. No h3 narrows to the key. The one exception is the S05 echo (M2).

## 4. Similarity (own `jac4.js`; stem + prompt + text + options; `like[0]` core item; no passage added)

Three measures: **A** word-set of words with 3 or more letters (the earlier reviews' measure, stop words kept); **B** word-set of all words; **C** multiset (bag) of all words. Shared options are exact normalised matches.

| Pair | A | B | C | Shared opts |
|---|---|---|---|---|
| S01~C01 | 0.100 | 0.158 | 0.179 | 0 |
| S02~C02 | 0.173 | 0.193 | **0.248** | 0 |
| S03~C03 | 0.146 | 0.185 | 0.199 | 0 |
| S04~C04 | 0.109 | 0.127 | 0.175 | 0 |
| S05~C05 | 0.132 | 0.175 | 0.203 | 0 |
| S06~C06 | 0.111 | 0.169 | 0.196 | 0 |
| S07~C07 | 0.167 | **0.216** | **0.248** | 0 |
| S08~C08 | 0.100 | 0.157 | 0.185 | 0 |
| S09~C09 | 0.127 | 0.190 | 0.153 | 0 |
| S10~C10 | 0.180 | **0.226** | 0.129 | 0 |
| S11~C11 | 0.106 | 0.141 | 0.183 | 0 |
| S12~C12 | 0.165 | 0.203 | **0.249** | 0 |
| S13~C13 | 0.117 | 0.179 | **0.216** | 0 |
| S14~C14 | 0.126 | 0.174 | 0.160 | 0 |
| S15~C15 | 0.170 | 0.189 | 0.166 | 0 |

- Measure A (the project's measure): maximum 0.180, all under 0.21. Shared options: zero everywhere.
- Content words only (stop words removed): everything is 0.166 or lower except **S10, 0.237** (shared: poster, numbered, line, fit, purpose, the digits 1-4).
- The B and C excesses come from function words and the prompt frame ("Which TWO ... Choose two answers", "blank", "picture", "slide"). Except S10 they are not content overlap. I treat S10 as S3, not a MUST, because it passes A. The previous near-copies (S09, S14, S15) are now 0.127, 0.126 and 0.170.

## 5. Findings

**M1. S13, `how`/h3/`why` describe notices that are not on the screen.** The choices are: gym doors + "Chairs will be set up on Thursday before the concert begins!"; singers on a stage + "Thank you, helpers, for setting up the chairs for last year's concert!"; a program + "The concert lasts one hour..."; stacks of chairs + "Helpers needed Thursday at two o'clock. Sign up here!" h3 says "Congratulations is for people who already performed". `how` says "the notice that congratulates singers ... the gold star notice invites people to look back at last year", and "The first notice shows the chairs". No choice has "Congratulations" or a gold star, and the key is not "the first notice" after the shuffle. `why` repeats "congratulate, look back". A child who presses Show me how reads an explanation about options that do not exist. *Fix:* rewrite h3, `how` and `why` against the real four choices (the gym-doors notice only announces; the thank-you notice is about last year; the program informs), and drop "first".

**M2. S05, h3 echoes the key.** Key: "big words that tell the day, the time and the place" and "a picture of families laughing at a game booth". h3: "A photo with no words cannot tell neighbors the day, time or place." That is nearly the key's own wording, and the child can then choose it as the first of two. The core C05 h3 does not do this. *Fix:* h3 should rule out a wrong option without naming the property the key has, for example "A tiny map cannot be read from the sidewalk. Check the other four ideas the same two ways."

**S1. C14, S14: key is the longest and the top word-match.** C14: key 83 characters against 53-69; it shares 6 content words with the stem, the others 0-1. S14: key 95 against 50-57, shares 11 words, the others 0-4. Other keys that are longest by a small margin: C02 (+1), C03 (+1), C06 (tie), C13 (+4), S01 (+4), S03 (+6). "The caption that tells the most" is partly a length idea, but a child can pick the longest. *Fix:* give C14 and S14 one long wrong caption (for example one that adds an unsupported detail), so length alone does not work. Make one other option in C13 as long as the key.

**S2. C01, key echoes the slide.** The slide says "A few bits of glass can look like a big pattern" and "mirrors reflect the glass pieces again and again". The key is "a few glass bits beside two mirrors, shown again and again as a pattern". My overlap solver picks it on 6 shared content words against 2/1/1. C04's stem also tells the contents of the kaleidoscope (tube, mirrors, colored glass), which helps C01 and C05. DOK: C01 is marked 3 and C02 is marked 2 for the same picture-to-slide matching task. *Fix:* put a decoy that reuses slide words (for example "a jar of glass pieces that look the same from every side"), or reword the key so it does not repeat the slide; set both DOKs to 2.

**S3. S10 reuses C10's prompt frame.** "Which numbered line does not fit the purpose of the poster?" against "Which numbered line ... fit the purpose of Imani's poster?" Both ask which line to remove from a poster and both decoy lines are a true, related fact about the place. Measure A 0.180, B 0.226, content words 0.237. *Fix:* reword the prompt ("Ben should cut one line. Which?") and make the off-purpose line a different kind of off-purpose (for example a joke or an apology).

**S4. S12, all the wrong photos are absurd.** Wrong choices: a quiet room with a closed door; teenagers in uniform marching; an adult frowning at papers. A child can solve by elimination without thinking about readers aged eight or nine. C12 has subtler decoys (older children, an empty field). Teenagers is the only age cue. *Fix:* replace the closed door with a near-miss, such as "children about five years old pressing paper into a box", and replace the frowning adult with a photo of the right age doing a different activity.

**S5. Variety and a repeated rule.** Set 1: kaleidoscope in C01, C03, C04 and C05 (four of five), accordion C02. Set 2: C06-C10 are all Imani's poster (C06-C10 plus p3). C04 (label, hottext) and C09 (label, match) test the same rule, "a label is a word or two that names the part", with the same decoy, a sentence-length label. A child who misreads the kaleidoscope slides loses most of set 1. *Fix:* move one kaleidoscope item to a different context, and make C09 test "which part the arrow points to" only (drop the long-sentence row, which C04 already has).

**S6. Cross-item hint in set 2.** C06's h3 says a box on a store shelf fails because the poster invites children to make something. C06's `how` repeats it. C10, in the same set, asks which line to remove, and its key is "Pinwheels are sold in many toy stores." A child who used C06's hint has the idea for C10. It is not a full giveaway (C10 has ten lines). *Fix:* change the C06 decoy to a different off-purpose picture (for example children at a store checkout counter), or keep the store theme out of C10.

**NOTE N1. Pre-answer and topic checks (done with `topics.js` across all of js/data).** Peanut occurs in this lesson only in p1, practice P1-P5 and the P addons: no core, similar, hint, `how`, Watch Me, teach or test mention. Kaleidoscope, accordion, teapot, orchid, pinwheel, walk-a-thon and origami occur only in T-C.js 3.T.C.1.c (core, similar and `how`/`why` of the same items). Origami and paper crane also appear once in three other lessons as a word in an example; no item duplicate. Other lessons (3.T.SS.1.a, 3.T.T.2.d, 3.T.T.1.e) reuse the peanut topic; that is outside this lesson's core.
**NOTE N2. Hints.** S04 h2 and h3 both rule out "Orchid" (same elimination twice). S09 h3 gives away the whole "Wing" row. C01 h3 says why the jar fails ("shows the glass but not the mirrors"), which also states the rule the key meets. None narrows below three.
**NOTE N3. Browser (390 x 844).** `node verification/serve.js . 8741`, Playwright with touch and mobile emulation. I ran all 15 core items through sets 1-3 (`browse4.py`, screenshots in `scratchpad/c4/shots/`). Every item rendered with no horizontal scroll, before or after three hints, and no control under 44 px. Three hints appeared on all 15. The correct response gave "That's right!" on all 15. No page errors. I set the answers through the player context, not by tapping every choice. The server was killed by pid.
**NOTE N4. Alignment.** Official wording: "Create multimodal texts, using features of pre-selected modes for a specific purpose and audience." Picture, caption, label, sound, sign and audience items fit. Points: choose-two, two-blank dropdown and match are 2; the rest are 1. All formats are choose-from-options, with writing in `write`.
**NOTE N5. Grade level.** Nothing is kindergarten-like. The longest stems (C13, C15) are a lot of reading for a one-point item.
**NOTE N6. S15 (teapot).** The key (spout, handle) is clear and the stem defines every part. The nouns "opening" and "loop" in the slide text are not the stem's definition words ("narrow piece that sticks out", "curved piece"), so this is not a word-match.
**NOTE N7. Distinctness.** No two items differ only by names or numbers. P4 and C01 ask the same question ("Which picture would fit Slide 4 best?") for different topics; fine.

## 6. Facts (checked with WebFetch where it worked)

| Claim | Result | URL |
|---|---|---|
| Accordion: moving air from the bellows passes over metal reeds, which sound | Supported | https://kids.britannica.com/students/article/accordion/315777 |
| Kaleidoscope: tube, mirrors, loose colored glass, reflections make patterns | Supported | https://science.howstuffworks.com/kaleidoscope.htm |
| Peanut: yellow flower, peg grows down, peanut forms underground; harvest digs the plants and lays them to dry; combine picks the pods | Supported | https://nationalpeanutboard.org/news/how-peanuts-grow/ |
| Peanut is a legume (beans and peas family); Georgia is the top state | Supported by the earlier review | https://www.georgiaencyclopedia.org/articles/business-economy/peanuts/ |
| Wolves: packs, howls carry for miles | Earlier review | https://kids.nationalgeographic.com/animals/mammals/facts/gray-wolf |
| Spring peepers (X on back, males' throat sac, sleigh-bell sound), orchid petals, crane beak, blueberry colours, teapot parts, leaf veins and blade | Standard; not fetched in this pass | |

I found no factual error in the core, similar or Together items.

## 7. What to change
1. S13: rewrite h3, `how` and `why` for the four real choices (M1).
2. S05: replace h3 (M2).
3. C14 and S14: add a long wrong caption; C13 a long distractor (S1).
4. C01: a decoy that reuses slide words; fix the DOKs (S2).
5. S10: new prompt and a different off-purpose line (S3).
6. S12: two near-miss decoys (S4).
7. Move one kaleidoscope item; make C09 differ from C04 (S5).
8. C06 decoy and C10 line should not share the store idea (S6).


---

# Fifth review (3.T.C.1.c, js/data/lessons/T-C.js)

Reviewer: independent (did not write the content). Files not edited. No git. No servers started.

## Verdict: ACCEPT (0 MUST, 6 SHOULD, 6 NOTE)

The two MUSTs of the fourth review (S13 explanation describing notices that do not exist; S05 h3 echoing the key) are fixed. I found no MUST in the eight items changed after the fourth review or anywhere else in the lesson.

## 1. Blind solve

Method: Node `vm` sandbox, my own scripts in `scratchpad/b4r6/` (`ld.js`, `blind.js`, `cmp.js`). It prints every Together item (P1-P5), the 15 core items (`{ref}` resolved, so C01-C15 have no refs here) and the 15 similar items, with seeded-shuffled choices, the passages, the stems and the prompts. Keys, `why`, `hints`, `how`, `clue`, `misconception`, `like` were not printed. I wrote my answers to `scratchpad/b4r6/myans.saved.json` before extracting any key.

- Agreement: 35 of 35 in C.1.c, 70 of 70 across both lessons. The script showed two "disagreements" (C09, S09); both are my answers listed in shuffled display order against the stored row order. Row by row they match.
- Honesty note: the solve was blind to the keys, `why`, hints and `how` of the current text. It was **not fully blind** to the fourth review: I read the tail of this file first (the brief said not to read the author log, which I did not open until after the solve; this file is not the log). That tail names the old keys of S13, S05, C01, S10, S12, S14 and C14. I solved those from the current text and they still match, but treat those seven as "re-solved with a hint of where to look" rather than clean.
- The easiest items to solve by elimination were S06, S11, S02 (a wrong choice is absurd) and S10.

## 2. The eight changed items (C.1.c)

| Item | Result |
|---|---|
| S13 | Fixed. h3 now says a thank-you for last year looks back while Mr. Duran needs helpers this Thursday (rules out one). `how` has three steps, each about a notice that is on screen (stacks of chairs; thank-you; gym doors; program). No "Congratulations", "gold star" or "first notice" left. `why` quotes the key. Key (112 characters) is no longer the longest (thank-you 118). One defensible answer: the gym-doors notice only announces. |
| S05 | Fixed. h3 rules out the tiny map and no longer restates a key. 4 of 5 live. `how` still says "a photo with no words cannot tell the day, time or place", but `how` is shown after the answer. |
| S12 | Better. Near-misses now exist (five-year-olds pressing paper into a box; nine-year-olds kicking a ball). Key pair A + D, both defensible, and no wrong pair can be argued. 4 of 5 live after h3. Key A is the longest of five (71 against 62/62/66/66); in a choose-two item that is a weak cue. |
| C01 | Better. Key reworded (84) and not the longest (jar 86). Decoys reuse slide words. DOK 2. See S4 for h3. |
| C06 | Better. The store decoy is gone, so nothing sets up C10. Key (66) ties with the hats decoy (66); the longest is the reading-children decoy (76). See S3. |
| S10 | New prompt, and the off-purpose line is now the principal's favorite colour. Key (66) is longest by 2 of 5 (64, 61). Content Jaccard with C10 0.045. Easier than C10 (the C10 off-purpose line is subtle, this one is silly). |
| C14 | Fixed. Key 83, second 82, longest 94 (the unsupported "rode to the park every summer" caption). Key still shares 7 content words with the stem against 0-1 (normal for a caption item; see N3). |
| S14 | Key now the shortest (76 against 92/96/96). See S2. |

## 3. Per-item checks (all 15 core, 15 similar, 5 Together)

- **Key beside explanation (script `kbe.js`).** For every core and similar item, the key text appears in `why` and in `how`, and no distractor text appears in the first 160 characters of `why`. Together items have no `how` (by design). Passed for all 30.
- **Live choices after hints 1-3.** I read each h1-h3. Every h3 rules out at most one option (or, for C09, S09, C10, S10, gives a method or one row). No ladder narrows to the key. Live counts: C01 3, C06 3, S12 4 of 5, S13 3, S05 4 of 5, S14 3, C14 3 in blank 1 and 4 in blank 2, S10 and C10 4 of 5. These agree with the author's recount.
- **Longest-key cue (script `chk.js`, character counts).** Keys that are longest or tied-longest among single-answer items: C02 (+1, tie), C03 (+1), C13 (**+4**: 78 against 72/74/66), S01 (+4), S03 (+6), S06 (+7), S10 (+2). Not longest: C01, C06, C11, C14, S02, S08, S11, S13, S14. The author fixed the ones the fourth review named except C13 (still +4).
- **Paired Jaccard (my own multiset scripts, `jac.js`).** Four measures per `like` pair: all words, options only, stem only, content words (stop words removed). Content-word Jaccard: maximum 0.149 (S07~C07), then 0.145 (S02~C02), 0.136 (S12~C12). All-words Jaccard: maximum 0.248 (S02~C02 and S07~C07), then 0.235 (S12~C12) and 0.216 (S13~C13). Those four are above the project's 0.21 line only on my all-words measure, and the excess is function words and the prompt frame ("A ... playing a ...", "Pick the TWO ... Choose two answers", "the words"). Options-only maximum 0.321 (S02) for the same reason. Exact shared options: 0 in all 15 pairs. I treat this as NOTE N1, not a finding. S10 and S15 are the most distinct pairs (all-words 0.068 and 0.166).
- **DOK and points.** All choose-two, two-blank dropdown and match items are 2 points; the rest 1. No mismatches inside the lesson, but S01 is DOK 3 and its core pair C01 is now DOK 2 (see S5).
- **Alignment.** `official`: "Create multimodal texts, using features of pre-selected modes for a specific purpose and audience." Picture, caption, label, sound, audience and off-purpose-line items all fit.
- **Grade 3.** Nothing kindergarten-like. C13 and C15 are still long stems for a 1-point item (NOTE, as before).
- **Learn It and Watch Me.** They model picture-to-words, removing an off-purpose line, caption, label, sound and a changed audience (Sam's kindergarten poster). They do not model "choose the TWO ideas for the purpose" (C05, S05, C12, S12) or "which notice does the writer need" (C13, S13). Both are easy transfers from the purpose step. NOTE N4.

## 4. Findings

**SHOULD**

- **S1. C13 (and S03, S01, S06): the key is still the longest.** C13 key 78 against 72, 74 and 66. S03 key 69 against 62, 63, 37. S01 61 against 57, 49, 49. S06 44 against 31, 33, 37. In three of the six core mc items the key is within 1 character of the longest or is the longest. *Fix:* lengthen one C13 distractor to 80 or more (for example add "this week" to option B), and shorten the S03 key or lengthen a distractor.
- **S2. S14, the closest distractor is not clearly worse.** Option B is "Three children stand behind a table at the school on a sunny morning, smiling at the camera." The stem gives no sunny morning or smiling, so B is invented, but a child cannot check that, and B contains who, where and a time of day. "Tells the most" is therefore a judgment call between B and the key (who, what, when). *Fix:* ask "Which caption tells the families what the children are doing and when?", or make the B details visibly unsupported. This is the only item where I think a careful third grader could defend a second answer, which is why I list it first among the SHOULDs.
- **S3. C06, decoy C carries its own refutation and is the longest.** "children reading quietly at desks in a classroom, with no pinwheels in sight" (76 characters) tells the reader it is wrong. The same pattern exists in C05 ("printed in tiny numbers", "with no pictures") and S05 ("with no words on it", "cannot be read from the sidewalk"). A child can eliminate on the negative tag without comparing to the poster. *Fix:* in C06 say "children reading quietly at desks in a classroom"; in S05 drop "that cannot be read from the sidewalk" from the map option.
- **S4. C01 h3 states the property the key meets.** "A jar of glass pieces shows the glass but not the mirrors." That makes "mirrors" the test, and the key is the only choice with two mirrors. It also helps C05 (set 1). It still leaves 3 live. *Fix:* "A jar of glass pieces shows glass, but the slide is about more than glass. Check the other three pictures against the whole slide."
- **S5. S01 is DOK 3 but its core pair C01 was lowered to DOK 2.** Picture-to-slide matching is the same task. S11 is DOK 2 and its pair C11 is DOK 3 for the same sound-to-slide task (C02 and S02 are DOK 2). *Fix:* S01 to 2; C11 to 2 or S11 to 3.
- **S6. Set variety.** Set 1: kaleidoscope in C01, C03, C04, C05 (four of five). Set 2: C06-C10 are all Imani's pinwheel poster. C04 (hottext) and C09 (match) test the same label rule. Not changed, as the author log says. A child who misreads the kaleidoscope loses most of set 1. *Fix:* move one kaleidoscope item to another topic, as the fourth review asked.

**NOTE**

- **N1. Jaccard.** See section 3: my all-words measure exceeds 0.21 for S02, S07, S12, S13, but content words are at most 0.149 and shared options are 0.
- **N2. S09 h3 gives away the whole Wing row.** "A wing is a wide, flat piece on the side of the crane, not the front." One row of four, so the ladder still holds. S04 h2 and h3 both rule out "Orchid".
- **N3. Caption items are word-match solvable.** Keys of C03, C14, S03, S08, S14 repeat the stem's own words (S14 key shares 9 content words with the stem against 4/4/2). This is inherent to "caption that tells what the photo shows"; the distractors (opinion, general fact, unsupported detail) are good. Not a defect.
- **N4. C07 and the Watch Me.** C07's key ("one big picture for each step and only a few words") restates Sam's example ("one big picture and a few easy words"). Teaching and then testing the same rule is what Watch Me is for; I would only add a different audience in the Watch Me (not kindergarten) if you want transfer.
- **N5. C10 vs line 8.** Line 8 ("The wind pushes on the paper and makes it turn") is explanation, not an invitation, and `how`/`why` say the other lines "invite children, tell the steps or tell what they will take home", which does not describe line 8. Line 5 (store sale) still wins clearly, because it sends readers elsewhere. Add "or explain how it works" to the `why`.
- **N6. S08 and S04 differ in format from their core pair** (S08 is a 1-point mc, C08 is choose-two for 2 points; S04 mc, C04 hottext). They test the same skill, so the mapping is honest.

## 5. Topic duplicates (`topics.js`, `dupsent.js` across js/data/lessons with variants)

- Kaleidoscope, accordion, pinwheel, orchid, teapot, walk-a-thon, herb plants: only in 3.T.C.1.c.
- Peanut: 3.T.C.1.c (Together P1-P5 and write only, no core or similar), and also 3.T.T.1.e, 3.T.T.2.d, 3.T.RA.1.b, 3.T.SS.1.a, 3.T.SS.1.b, 3.L.V.3.a, 3.L.V.3.d. Two sentences of p1 are identical to 3.L.V.3.d: "Georgia grows more peanuts than any other state." and "In the fall, farmers use a machine to dig up the plants." Together only; NOTE.
- Wolves: C11 only here; 3.T.RA.2.b, 3.T.SS.2.b use wolves in other ways (howling comparison, simile). No duplicate item.
- Raincoat (S03), blueberry (S01), drums (S02), kickball (C12), origami (S09): occur in other lessons as a word or an unrelated item; no duplicate.

## 6. Facts (WebFetch / WebSearch)

| Claim | Result | URL |
|---|---|---|
| Accordion: moving air over metal reeds makes the sound | Supported (fourth review) | https://kids.britannica.com/students/article/accordion/315777 |
| Kaleidoscope: tube, mirrors, loose coloured glass, repeated reflections | Supported (fourth review) | https://science.howstuffworks.com/kaleidoscope.htm |
| Peanut: yellow flower, peg grows down, pod forms underground; plants dug, inverted and dried; pods picked by a machine; peanuts are legumes; Georgia the top state | Supported (fourth review) | https://nationalpeanutboard.org/news/how-peanuts-grow/ |
| Wolves: packs; howls carry for miles | Supported (fourth review) | https://kids.nationalgeographic.com/animals/mammals/facts/gray-wolf |
| Orchid petals, crane parts (beak, wings), teapot spout and handle, leaf veins and blade | Standard; not fetched in this pass | |

I found no factual error.

## 7. What to change (all optional; verdict stands)
1. S14: reword the prompt or make the B details visibly unsupported (S2).
2. C13: lengthen a distractor; S03: shorten the key (S1).
3. C06 and S05: drop the self-refuting tails (S3).
4. C01 h3: do not state the "mirrors" rule (S4).
5. S01 DOK to 2; C11 or S11 DOK (S5).
6. Move one kaleidoscope item (S6).
