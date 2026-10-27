# B5 b5b review: 3.L.V.1.a, 3.L.V.1.b, 3.L.V.2.a, 3.L.V.2.b (`js/data/lessons/L-V12.js`)

## First review

**Role:** independent content reviewer (blind solver). I did not write these lessons. I read the author log only after my blind answers were saved.
**Scope:** all four lessons: Learn It / Watch Me, the three core sets (15 items each, `{ref}` resolved), the Together items (practice minus refs, with `addons`), `similar` S01 to S15, `test` (form A) and, for 2.a, `testB`.
**Read-only:** I changed no lesson or code files and ran no git. This is the only file I wrote. Scratch files are in `scratchpad/b5brev/`. The one server I started (port 8745, pid 11552) was stopped by pid.

Legend: MUST = fix before acceptance. SHOULD = fix unless the author gives a reason. NOTE = information only.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | Headline |
|---|---|---|---|---|
| 3.L.V.1.a | **CHANGES REQUIRED** | 3 | 5 | Factual error in the key of C10 (deerskins and blankets); S09 hints give the key; P4 hint 1 gives the key |
| 3.L.V.1.b | **CHANGES REQUIRED** | 3 | 4 | C15/S15 choose-two worth 1 point; hint 2 names both keys; C05 has two defensible orderings |
| 3.L.V.2.a | **CHANGES REQUIRED** | 2 | 7 | C09/S09 distractors leave real words behind, so the item has more than two defensible keys; C10/S10 hint 3 is false |
| 3.L.V.2.b | **CHANGES REQUIRED** | 4 | 8 | C11 `number` leaves `numb`; C14 and C08/S08 hint 3 leave only the key; form A T2 is a re-skin of core P2 |

All four need a second pass by the author and a re-review of the changed items. None of the four faults is large to fix. The lessons are well built overall: every item type works in the browser, passages are well below the FK limit, twins are honest, and the blind solve agreed with the keys on every item.

---

## 1. Blind solve

- **Method.** `ld.js` loads `L-V12.js` through a Node vm sandbox with a mock `PP.addLesson`. `blind.js` prints the passages and every item with a seeded shuffle of the choices. It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like` and `sample`. I grepped the stripped JSON for those field names before reading it, and printed no raw item source. Answers were saved to `ans-1a.json`, `ans-1b.json`, `ans-2a.json` and `ans-2b.json` before I compared them with the keys (`cmp.js`).
- **Result: 156 of 156 agree (100%).** That covers core (refs resolved), Together, similar S01 to S15, form A, and 2.a form B, across the four lessons.
- **The solve was fully blind.** I did not see a key, `why`, hint or `how` before saving. I opened the author log only afterward.
- **Agreement hides real ambiguity.** On these I picked the author's key but a second defensible answer exists. They are listed as findings: 1.b C05, 2.a C09/S09, 2.b C11.

## 2. Mechanical checks

| Check | Result |
|---|---|
| Passage FK (`verification/readability.py`) | 1.7 to 4.0 for all 22 passages in the four lessons. Limit is 4.5. Pass. |
| Points | Script check of points against the number of keys: 2 failures, both 1.b (C15 and S15, hot text choose-two scored 1; see 1.b MUST). Every other choose-two, ebsr and two-slot dropdown is 2. |
| Similar vs `like` (`jac.js`; word-set and multiset Jaccard; match columns, ebsr parts and hot text targets included) | 1.a max 0.20 / 0.21 (S10 vs C10); 1.b max 0.21 / 0.20 (S03 vs P5); 2.a max 0.20 / 0.20 (S03 vs C03); 2.b max 0.20 / 0.19 (S15 vs C15). All 60 twins at or under 0.21. The author's claim holds; ebsr twins sit near the limit as the author said. |
| Distinctness inside a lesson (core, Together, form A and B) | Worst pairs: 2.b P4 vs C13 0.50 / 0.53; 2.b P2 vs T2 0.50 / 0.44; 2.a T2 vs TB2 0.48 (A/B parallel by design); 2.a P2 vs TB2 0.46; 2.a P4 vs T4 0.45 / 0.45; 2.a P1 vs P2 0.44; 2.a P4 vs TB4 0.42; 1.a T1 vs T3 0.32. Listed under SHOULD/MUST below. |
| Longest-key cue (`cue.js`, `lk.js`) | Strictly uniquely longest key among single-key mc and ebsr sets across core, Together, similar and tests: **1.a 39% (11 of 28), 1.b 29% (5 of 17), 2.a 26% (8 of 31), 2.b 19% (4 of 21)**. The author claimed 22%, 6%, 20%, 12%; I cannot reproduce those, and 1.a is well above chance (about 29% with 3.4 options). Counting dropdown slots and hot text option lists too, the figure is 41% to 43% in all four lessons for core plus similar. Biggest margins: 1.a P5 1.45, T3 Part B 1.39, T4 1.33; 1.b P1 1.69, S06 1.59, S13 1.50; 2.a C15 1.78, C09 1.71, C13 1.67, S09 1.50; 2.b S15 Part A 1.60, C05 1.52. In 2.b the key is the longest option in 4 of the 7 hot text option lists (S03 42 vs 24 to 32, S10, S12, P5). |
| Word-match cue (`wm.js`) | Key has strictly the highest word overlap with the stem or passage in 9 of 66 sets, below chance. Highest: 1.a S11 0.67 vs 0.22, 2.a C06 0.67 vs 0.33, 2.a S11 0.50 vs 0.25, 2.b C15 Part B 0.40 vs 0.00. Minimal. |
| Keyed text beside why/how/hints (`leak.js`) | Two automatic hits: 1.a S09 hint 2 and 1.a S10 hint 3. I found more by reading (see MUST/SHOULD): 1.a P4 hint 1, 1.b C15/S15 hint 2, 2.a hint 2 on several word-in-context items. |
| Topic and key-word duplicates over all of `js/data` including variants (`kw2.js`, `kw3.js`, 5- and 7-gram scan `ng2.js`) | See section 5 cross-lesson findings. Most shared words are ordinary passage words, not keys. Real duplicates: 1.a form A passage p2 (water cycle); 2.a words shared with `L-VOC-02`. |
| Live choices after hints 1 to 3 | I counted every twin of 1.a and 1.b, which the author did not. Table below. |
| Learn It / Watch Me pre-answers | Found: 2.a P1 (hopeless), 2.b T1 (visitor), 2.b P4 row (excitement). Core paraphrasing a Watch Me example: 1.b P5, 2.a C10. |

### Live-choice recount (hints 1 to 3)

Rule from plan 4.5: hint 3 may rule out one distractor or complete one of two slots, and must not leave the key as the only option.

| Item | Live after H3 | Verdict |
|---|---|---|
| 1.a twins S01 to S15 | at least 2 live everywhere (S01 2, S02 2, S06 2, S11 3, S13 3; S07 and S12 complete slot 2 only) | pass |
| 1.b twins S01 to S15 | at least 2 live everywhere (S01, S05, S07 complete slot 2; S09 completes one row leaving 2 orderings, the floor) | pass |
| 1.b C05 | slot 2 completed by H3 | pass (but see ambiguity MUST) |
| 2.a C04, S04 | 2 live per slot | pass |
| 2.a C10, S10 | live count fine, but H3 states a false fact | MUST |
| 2.b C14 | 1 live (only `neighbor` ends in -or) | **fail** |
| 2.b C08, S08 | 1 live in each blank (H3 names the distractor types) | **fail** |
| 2.b C06, C03, C04, C12, C13, P4 | at least 2 live | pass |
| 1.b C15, S15 | 3 to 4 live, but H2 names both keys by position | MUST (hint 2, not 3) |

## 3. Web-verified facts

- **Dahlonega gold rush, "in the late 1820s" (1.a p5).** Georgia Encyclopedia: earliest documented evidence is an 1 August 1829 newspaper notice; undocumented claims include Benjamin Parks in 1828; "the rush began in 1829". "Late 1820s" is accurate. https://www.georgiaencyclopedia.org/articles/history-archaeology/gold-rush/ (also https://en.wikipedia.org/wiki/Georgia_Gold_Rush from the search).
- **Deerskin trade values (1.a p3, C10).** National Park Service, Ocmulgee: exchange rates of about 1716 were "35 deer skins for a gun, 30 for a coat of broadcloth with lace, 16 for a duffel blanket", an axe 5 skins, a hatchet 3, a knife 1. So **"One skin could buy a warm blanket" is false**; a blanket cost about sixteen skins. https://www.nps.gov/ocmu/learn/historyculture/upload/Accessible-British-Trading-Post.pdf . South Carolina Encyclopedia gives only a price per pound of dressed skins and lists blankets, firearms, cloth, axes and brass kettles among trade goods. https://scencyclopedia.org/sce/entries/deerskin-trade/
- **abrupt (2.a C13).** Latin abrumpere, "break off", from ab- "off, away from" + rumpere "to break". Confirmed on the entry for the related word *abruption*; the page for *abrupt* itself was not fetched. https://www.etymonline.com/word/abruption . Merriam-Webster entry found by search: https://www.merriam-webster.com/dictionary/Abrupt
- **xylophone (2.a C12).** Coined 1866 from Greek *xylon* "wood" + *phone* "sound". https://www.etymonline.com/word/xylophone
- **biography (2.a C14).** Greek *bios* "life" + *graphia*, which Etymonline glosses "record, account". The lesson's "graph = write" is the standard root gloss (Greek *graphein*), so the item is fine. NOTE only. https://www.etymonline.com/word/biography
- **dictate (2.a S14).** Latin *dictare* "say often, prescribe", frequentative of *dicere* "to say, speak". https://www.etymonline.com/word/dictate
- **auditorium / audio (2.a S15).** Latin *auditorium*, "place where something is heard", from *audire* "to hear". https://www.etymonline.com/word/auditorium . The look-alikes autumn, author and award do not contain aud.
- **construct (2.a S11).** com- "together" + *struere* "to pile up", build. https://www.etymonline.com/word/construct
- **visible (2.a S13).** Latin *visibilis* from *visus*, past participle of *videre* "to see". https://www.etymonline.com/word/visible
- **spectator (2.a P6).** "agent noun from past-participle stem of *spectare* 'to view, watch'". https://www.etymonline.com/word/spectator
- **thermos / therm- (2.a S12).** Vocabulary.com: a thermos is a vacuum flask that keeps liquids hot or cold for a long time, and Greek *thermos* means "hot". https://www.vocabulary.com/dictionary/thermos . I could not fetch a page for the root *aqua* or for *therm-* itself (Etymonline pages for aquatic and thermos are not on the fetch allowlist). Both are standard Latin and Greek roots; confirm with any school dictionary. NOTE.
- **neighbor (2.b C14).** Old English *neahgebur* ("neah" near + "gebur" dweller). The final -bor is not the agent suffix -or, and "neighb" is not a word. The key is sound, and the item is fair. https://www.etymonline.com/word/neighbor
- **finger (2.b C11).** Old English *finger*, Proto-Germanic *fingraz*; the page does not analyse an *-er* suffix, so it is a word with no base. https://www.etymonline.com/word/finger
- **number (2.b C11).** Latin *numerus* by way of Old French *nombre*; not from "numb". https://www.etymonline.com/word/number . **However, `numb` is itself an English word, and "number" is even the comparative of "numb"** (my own knowledge, not from the page). This is why C11 fails (see 2.b MUST).
- **Salt marsh grass (1.a p1).** National Park Service, Cumberland Island: "Extra salt is collected by a gland in the leaves and then excreted through special pores." Supports the passage. https://www.nps.gov/cuis/learn/nature/saltmarsh.htm
- **Loggerhead nesting (1.b p2).** Georgia DNR fact sheet: nesting from early May to mid-August; females come ashore at night; about 60 days of incubation; hatchlings crawl to the sea at night. Matches "every summer", "at night" and "about two months later". The sheet does not say the female digs with her back flippers; that is widely stated but I did not source it. https://gadnrle.org/sites/default/files/wrd/pdf/fact-sheets/loggerhead_sea_turtle_2011.pdf
- **Whales are mammals (1.b S04).** Some adult humpback whales still have hairs; dolphins have hair early in life. Supports "dogs, bears and whales are all mammals". https://uk.whales.org/whales-dolphins/do-whales-and-dolphin-have-hair/
- **Standard wording.** `standards.js` `official` text for the four codes: 1.a "Acquire a range of general, academic, and specialized vocabulary words and phrases through grade-level texts and content."; 1.b "Use grade-level general, academic, and specialized vocabulary words and phrases to enhance communication in a variety of settings."; 2.a "Deconstruct words using common roots, root words, and affixes to determine meaning."; 2.b "Identify affixes associated with specific parts of speech (e.g., ly is commonly used with adverbs) to aid comprehension." All items sit under these. I could not fetch a live Georgia page, so the wording is checked against the repo only. NOTE.

## 4. Browser run (390x844, touch, real controls)

- Driver: `real.py` and `ui5.py` (core items per lesson, 60 in all, opened with `PP_SKILLS.open(code,'try')` and `PP_PLAYER.start("SK:<code>:y|y2|y3",'try',{pos})`). They click the real choice buttons, `select.dd-select`, the match buttons and the hot text options, then Check, Give me a hint, Show me how and the similar-question link.
- **Result.** No horizontal scroll, no tap target under 36 px, no page errors, correct answers accepted and a wrong answer shows "Not quite". The only console message is `net::ERR_FAILED` for the blocked font request, which is environmental.
- **Driver limits, not defects.** `real.py` reported dropdown failures on 1.a C07, C12 and C15. The engine renders blank 1 as a button list with a "(blank 1)" placeholder when options are long, and a `select` only for blank 2. `dd3.py` handled that and confirmed all three accept the key. `ui5.py` has no ebsr support. I verified the six ebsr items (1.a C03 and C10, 2.a C03 and C14, 2.b C09 and C15) with `eb3.py`: Part A right and Part B wrong gives "You got part of it (1 of 2 points)", and all three hints appear in order.
- 1.b ran clean in `ui5.py` with no problems at all.

---

## 5. Findings by lesson

### 3.L.V.1.a: vocabulary in context (acquire)

**Verdict: CHANGES REQUIRED.** All 15 core items are solvable and aligned; the faults are one false fact and hint leaks.

| # | Level | Item | Finding | Fix |
|---|---|---|---|---|
| 1 | MUST | C10 (Part B key), passage p3 paragraph 4 | "One skin could buy a warm blanket." is false. NPS: about 16 deerskins bought a duffel blanket, 35 a gun, 1 a knife. It is the Part B key, so a child is taught a wrong fact, and one skin buying a blanket is not how the real trade worked. See section 3. | Change the sentence to something true that still shows value, for example "Traders gave cloth, pots and even guns for deerskins." Update Part B key text, WHY, HOW, MISC and hint 2 ("What could one skin do?"). Keep Part A's key "worth a lot". |
| 2 | MUST | S09 hints 1 and 2 | Hint 2 reads "Then read the sentences just before them." The key is "In the steps just before the words." `leak.js` flagged it. Hint 1 ("Meaning can come before a word as well as after it") adds to it. Hints 1 and 2 let a reader write down the key without the choices (audit a). | Hint 2: "Find the words panning for gold. Read the whole paragraph. Where does the author show what the people did?" Hint 1 should not say "before". |
| 3 | MUST | P4 (core 1.1) hint 1 | "Think about what the grass needs in order to live where it grows." The key for survive is "to stay alive". Hint 2 then asks why getting rid of the salt would help the grass, so the reader can write "to live". | Hint 1: "A word's meaning may be clear from what the author says next. Ask what the special way helps the grass do." |
| 4 | SHOULD | S10 hint 3 | "It does not say how often nuggets were found" echoes the key "They were not often found". `leak.js` flagged it. The stem also says "from the streams", which is not in the passage (the text says a metal pan). | Reword hint 3 to rule out the hurrying line without naming frequency; drop "from the streams". |
| 5 | SHOULD | S08 hint 2 | Names both key moments ("when they heard the news" and "during the day"). | Say "Look across the whole passage for what the prospectors did" and stop. |
| 6 | SHOULD | Form A passage p2 "Where Does Rain Come From?", T1 to T3 | The text reuses sentences already in other lessons: "turns into a gas called water vapor", "High in the sky, the air is cold(er)", "turns back into tiny drops of water" (`T-T2.js` 3.T.T.2.b, `T-SS.js` 3.T.SS.1.a). The same topic and facts then appear in a reading lesson, so a form A item can be answered from another lesson's passage. Also p1 repeats "look for what stays the same and what is different" from `T-T34.js`. | Pick a different topic for form A (not the water cycle), or rewrite the passage so no sentence repeats. |
| 7 | SHOULD | Longest key | 39% of single-key mc and ebsr sets have the key uniquely longest (chance about 29%); 41% to 43% with dropdowns and hot text. Margins: P5 1.45, S04 1.29, T3 Part B 1.39, T4 1.33. | Lengthen distractors in P5, S04, T3 Part B and T4. |
| 8 | SHOULD | Learn It / Watch Me | Teach is good and the "clue before the word" point was added. Watch Me models only three "is a / next sentence / after the comma" cases. The fifteen also need: judging another student's claim (C05/S05), picking the sentence that explains a word (C13/S13), the author-technique question (C09/S09, clue before the word), and a math word problem (C15/S15). | Add one worked example for claim-checking, or swap the nocturnal example for a "clue before the word" example. |
| 9 | NOTE | C07, C12, C15 | The engine shows blank 1 as a button list. This is engine behaviour, not a defect. | None. |
| 10 | NOTE | Learn It nocturnal example | Repeats PT-1: "sleep during the day and look for food at night". | Change the wording. |
| 11 | NOTE | S15 | "She bakes pies with her aunt on Saturdays." is an irrelevant sentence. Harmless. | Optional. |
| 12 | NOTE | Words shared with other lessons | patient, eager, shallow, tide, satellite, stethoscope, goods appear as passage or option words in other lessons (`T-T1.js` 3.T.T.1.c, `T-RA.js`, `T-C.js`, `L-VOC-03.js`), never as the tested vocabulary word. No real duplication. | None. |
| 13 | NOTE | Test T2 | DOK 1 on a form A item. Fine. | None. |

### 3.L.V.1.b: using vocabulary (use)

**Verdict: CHANGES REQUIRED.** Good coverage of the "use words for the setting and reader" standard. The two-point bug and the hint leaks are quick fixes.

| # | Level | Item | Finding | Fix |
|---|---|---|---|---|
| 1 | MUST | C15 and S15 | Hot text with "Choose the TWO sentences" and two keys is scored 1 point; the rule is choose-two = 2 (script check: "pts 1 expected 2"). Set 3 and the similar total are one point low. | Set `points: 2` in both, and update the core set point totals. |
| 2 | MUST | C15 hint 2 and S15 hint 2 | C15: "Look at the first and last sentences of the talk". S15: "Look at the first and the fourth lines". Both name both keys by position. In C15 the keys are also the first and last targets, so position alone solves it. | Hint 2: "Read each sentence and ask whether a reader of a report would need it." Add a talk-only line in the middle of the list so position is not a cue. |
| 3 | MUST | C05 | `describe` and `explain` are both defensible in both blanks: "Let me explain what our young plants looked like" and "Let me describe how bees help our beans" are natural English. Neither Teach nor Watch Me defines describe or explain. Both blanks also offer the same three words, so the pair is a two-ordering guess. | Make the second blank cue one word, for example "Let me ___ why bees help our beans" (explain), and the first "___ the shape and color of our young plants" (describe), and use different third options in each blank. Define the two words in Teach. |
| 4 | SHOULD | C09, S09, T4 (match) | Three rows and three columns, so the last row is free by elimination. 1.a C14 shows the better pattern, with a spare column. | Add a fourth column. |
| 5 | SHOULD | C09, S09 hint 2 | Maps every sentence to its column: "asks a leader for something, tells what happened in an experiment, or invites a friend". That is the whole answer. | State the question to ask, not the three answers. |
| 6 | SHOULD | Learn It / Watch Me | Watch Me covers only replacing plain words with a school word. The fifteen also test register (C08, C09), rewriting (C10/S10), correct use (C14/S14) and cutting talk-only sentences (C15/S15). Teach point 5 has the register example but there is no Watch Me. | Add a Watch Me for fitting the reader, and one for "is this word used correctly". |
| 7 | SHOULD | Longest key | P1 1.69, S06 1.59, S13 1.50 (one-word keys, 3 to 4 letters longer), C11 1.26. 29% overall. Low impact. | Pad shorter distractors. |
| 8 | NOTE | P5 vs Watch Me 2 | P5 (mayor; citizen, volunteer, visitor) and Watch Me 2 (citizens; visitors, leaders) are close in form. Keys differ. | Optional. |
| 9 | NOTE | C08 | The key "Thank you for taking the time to read my letter" restates the ending Maya already wrote (p3 sentence 8, "Thank you for reading my letter"). | Optional. |
| 10 | NOTE | p5 sentence 4 | "We colored the land near the ocean light blue" (land is not blue). No item uses sentence 4. | Say "the water near the coast". |
| 11 | NOTE | Twins | All 15 twins keep the skill and have at least 2 live choices after hint 3. S09 leaves 2 orderings, which is the floor. | None. |

### 3.L.V.2.a: roots and affixes (deconstruct)

**Verdict: CHANGES REQUIRED.** The most carefully crafted of the four; two precise faults.

| # | Level | Item | Finding | Fix |
|---|---|---|---|---|
| 1 | MUST | C09 and S09 | The test is "end in a real suffix / ending that can come off and leave a whole word", and the WHY and hints say "nothing real is left" for the distractors. Not so: **belly** leaves *bell*, **silly** leaves *sill*, **only** leaves *on* (C09); **bully** leaves *bull* (S09). A child who follows hint 1 ("cover the ending; if a whole word is left...") can defend those. The WHY is false. | Replace the distractors with words that leave no word, for example **family, ugly, city** (famil, ug, cit). Re-run the longest-key check. |
| 2 | MUST | C10 and S10 hint 3 | "Two of the words have two endings and no prefix" is false: in C10 only carelessly has two endings and no prefix (bravely and hopeful have one); in S10 only hopelessly. The WHY says so correctly. | "One of the words has two endings and no prefix." |
| 3 | SHOULD | Word-in-context hint 2 (C13, S06, S11, S13, P6) | Hint 2 asks the question whose answer is the key: C13 "How did the bus stop?" (sudden), S06 "What would a person hear?" (nothing), S13 "What can a person do with a faint star?" (see), S11 "What will be there when they finish?" (a station), P6 "what they are doing when Maya scores" (watching). Hints 1 and 2 without choices let a reader write the key (audit a). The author flagged this (note 6). | Point to the sentence ("Reread the sentence with the word and the one before it") and leave out the question. |
| 4 | SHOULD | S03 Part B | The distractor "The puzzle had one thousand pieces" is not in Mia's note, so it is eliminated by absence. The key paraphrases the note ("were still missing" vs "are missing"). | Use details from the note only and quote exactly. |
| 5 | SHOULD | P1 | Together item pre-answered by Teach example 1 (hopeless = hope + less, "without hope"); DOK 1. C10 (unevenly) is also a near re-skin of Teach example 3 (unequally = un + equal + ly). | Change P1's word (for example "careless") and use a different word in the Teach example. |
| 6 | SHOULD | Form A and B vs core | T4 and TB4 re-use P4's match frame with the same prefix and suffix meanings (P4 vs T4 0.45, P4 vs TB4 0.42, S01 vs TB4 0.39). P1 and P2 share a frame (0.44). | Change the format or the meanings tested in T4 and TB4. |
| 7 | SHOULD | C12 / S12 | C12 slot 2: "an instrument with bars of wood that make {sound}" is guessable without the root; light and heat are absurd. S12: sand/snow and taste/weight are weak, and "a thermos keeps a drink from losing heat" is true only for hot drinks. | Stronger distractors, and "keeps heat in or out". |
| 8 | SHOULD | Longest key (ms sets) | C09 1.71, C13 1.67, C15 1.78, P5 1.40, S09 1.50: the ms keys are 4 to 5 letters longer. 26% overall for mc. | Re-check after fix 1. |
| 9 | NOTE | C13 | Context ("came to an abrupt stop, and everyone jerked forward") gives "sudden" without the roots. Acceptable for DOK 2. | None. |
| 10 | NOTE | T6, TB5 | The roots spect and rupt are not given in the stem (core items do give them); tests rely on Teach. A bit harder than the core. | None. |
| 11 | NOTE | `L-VOC-02` overlap | TB1 (unbreakable, "cannot be broken") and TB3 (preheat, pre-) repeat items in `L-VOC-02` (an unbreakable ebsr with the same key; misread and preheat in a match). | Use different words in forms A and B. |
| 12 | NOTE | C14 | The Part B key ("Kendra's class wrote a biography...") is the only sentence with the word; Part B is not evidence for Part A. Passage p6 is only 63 words. | Optional. |
| 13 | NOTE | Hint ladder | C04, C05, C10 (apart from fix 2) pass the ladder with 2 or more live choices. | None. |

### 3.L.V.2.b: affixes and parts of speech (identify)

**Verdict: CHANGES REQUIRED.** The false-suffix idea closes a real gap, but two items have more than one defensible key or a one-option ladder.

| # | Level | Item | Finding | Fix |
|---|---|---|---|---|
| 1 | MUST | C11 | "Which TWO words end in -er, but nothing is left when you cover the ending?" Key is finger and number. Covering -er from number leaves **numb**, a real word, and "number" is even the comparative of numb. Hint 1 says "if a real word is left, the ending may be a suffix", so number can be argued either way. The WHY changes the test to "do not give the meanings", which the stem does not say. | Replace number with a word that leaves no word, for example **river** (riv) or **water** (wat); `sister` is the Teach example so avoid it. Keep finger. |
| 2 | MUST | C14 | Marcus's rule is about words ending in -or, and `neighbor` is the only choice that ends in -or (worker -er, payment, kindness). The key is found by the ending alone. Hint 3 ("Some choices do not end in -or at all. Decide which choices could test Marcus's rule") leaves the key as the only option, which fails audit b. S14 is fine (farmer and tiger both end in -er). | Add two other -or words with a real action base (for example visitor, actor), or put sculptor and collector from p3 into the choices. Reword hint 3. |
| 3 | MUST | C08 and S08 | Each blank offers exactly one option with the target ending (payment / offered / needed; sadness / felt / great), and the stem names the ending. Hint 3 ("Some choices are action words or describing words. Decide which kind of word each blank needs") then leaves only the key in both blanks. S08 WHY mentions "her is a pronoun", which is not an option. | Offer three suffixed nouns in each blank and ask about the base word ("made from an action" / "made from a describing word"). Fix the WHY. |
| 4 | MUST | T2 vs core P2 | Form A T2 ("What job does the word carefully do in paragraph 3? It tells how Mateo painted.") is P2 ("loudly ... how the crowd cheers") with new names. Word-set Jaccard 0.50. Doing the practice answers the test. | Make T2 test a different job (for example which word names a person) or a different format. |
| 5 | SHOULD | C03, C04 | C03: "in paragraph 3", but two of the four targets are in paragraph 2. C04: "from paragraphs 2 and 4" while all three distractors (sculptor p1, collector p3, statues p3) sit in other paragraphs, so location alone removes them. | C03: "in paragraphs 2 and 3". C04: "from the passage", with a distractor from paragraphs 2 or 4. |
| 6 | SHOULD | C09 Part B | "quickly" is not in the Lost Dog passage (it comes from p5). Part B is also independent of Part A's evidence. S15 Part A offers "taller", which is not in the sentence. | Use words from the passage only. |
| 7 | SHOULD | P4 vs C13 | Two core match items with the same columns and 3 of 4 rows alike (0.50 / 0.53). | Change one format. |
| 8 | SHOULD | Teach pre-answers | The Teach example states "Visitor (visit + or) names a person who visits" (the key of T1) and "Excitement (excite + ment) is a noun that names a feeling" (a row of P4). | Use other words in the Teach example. |
| 9 | SHOULD | P3 | `firefighter` leaves "firefight" when you cover -er, which is not an action word a child knows, against hints 1 and 2. | Use "driver" or "teacher". |
| 10 | SHOULD | S09, S15 wording | S09 Part A "Fairness grows out of fair. Pick the result." is obscure, with a joke distractor ("A name tag for each player on the team"). S15 uses "manner", which Teach does not (Teach says "how"). | Rewrite in Teach vocabulary. |
| 11 | SHOULD | Longest key | 19% for mc, but the key is longest in 4 of 7 hot text option lists (S03, S10, S12, P5). C05 1.52 (ties), S15 Part A 1.60. | Pad distractors in those four. |
| 12 | NOTE | DOK | C09 and C15 ebsr are marked DOK 3 but are recognition tasks. | Consider DOK 2. |
| 13 | NOTE | T3, T4 | T3 Part B distractors "-ess" and "-ight" are not affixes in context; T4 has clumsy wording ("the enjoy, move or agree word"). | Optional. |
| 14 | NOTE | p5 | 39 words; the short-passage warning applies. | Optional. |
| 15 | NOTE | `neighbor` | Verified as a false suffix. The author's worry (item 1 in the log) is answered: it is fair. | None. |

---

## 6. Cross-lesson notes

- **Kinds of fault.** Hint 3 or hint 2 leaving the key (the commonest fault in B0): 1.a S09, P4; 1.b C15, S15; 2.a hint 2 on word-in-context items; 2.b C14, C08, S08. A false distractor-description in a hint or WHY: 2.a C09 and C10, 2.b C11. One factual error: 1.a C10.
- **Author-flagged items.** The author log asks for scrutiny of: 2.b C14 (fair), 2.b C11 (fails), 2.a C08 (fine; "not full of help" is accepted), 2.a C10 (keys fine, hint 3 false), 2.a C13/C14/C15 (fine; hint 2 on C13 is a SHOULD), 2.a hint 2 generally (SHOULD), 1.b C05 (fails), 1.b C10 and C15 (C10 fine; C15 points), 1.a C04, C08 and S09 (C04 and C08 fine; S09 leaks), ebsr Part B independence (acceptable; see 2.b C09 note), twin quality (honest).
- **Standard alignment.** All sixty core items sit under their `official` wording. 1.a uses real content-area words and phrases; 1.b tests substitution and register as the standard says ("enhance communication in a variety of settings"); 2.a tests roots and affixes; 2.b tests suffix to part-of-speech, plus false suffixes.
- **Grade 3 suitability.** Nothing is kindergarten-like. Words that are a stretch for grade 3 and worth watching: "manner" and "trait" (2.b S15, S09). The long-option dropdowns in 1.a are readable at 390 px.
- **Re-review.** Re-review the changed items after the author's second pass: 1.a C10, S09, P4; 1.b C05, C15, S15; 2.a C09, S09, C10, S10; 2.b C11, C14, C08, S08, T2.

---

## Second review

**Role:** independent content reviewer (blind solver), second pass. I did not write these lessons. I read the author log and the first review only after my blind answers were saved.
**Scope:** the four lessons in a frozen copy of `js/data/lessons/L-V12.js` taken at the start of this pass (the live file has since gained new 3.L.V.2.c work from another author; I did not review that). All core items (refs resolved), Together, similar S01 to S15, form A, and 2.a form B. Items re-checked cold: 1.a C10, S10; 1.b C05, C15; 2.a C09, S09; 2.b C08, C11, C14.
**Read-only:** I changed no lesson or code file and ran no git. This section is the only thing I wrote. Scratch files are in `scratchpad/b5brev2/`. The one server (port 8761, pid 4977) was stopped by pid.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | Headline |
|---|---|---|---|---|
| 3.L.V.1.a | **ACCEPT** | 0 | 4 | All first-review MUSTs fixed. C10's new key is true (NPS and SC Encyclopedia). Remaining items are hint wording and Learn It coverage. |
| 3.L.V.1.b | **ACCEPT** | 0 | 3 | C15 and S15 are now 2 points; C05, C09 and S09 are fixed. S15 reuses C15's "Can everyone in the back..." line. |
| 3.L.V.2.a | **CHANGES REQUIRED** | 2 | 6 | C09 and S09 and C10 and S10 are fixed. New: P1 hint 3 leaves only the key (missed first time). T4 and TB4 changed key with the same id and the same `testRev`. |
| 3.L.V.2.b | **CHANGES REQUIRED** | 2 | 6 | C11 river, C14, C08/S08 and T2 are fixed. New: C11 still has a second defensible word (joker). P5, S10 and S01 hint 3 leave only the key (missed first time). |

I own the misses in the "missed first time" items: they were in the first pass's material and my first ladder count did not catch them. They are the same fault the B0 reviews found most often.

### 1. Blind solve (new seed)

- **Method.** A new `blind.js` (seed 20271103 plus 1313 per lesson, not the first review's seed) loads a frozen copy of `L-V12.js` in a Node `vm` sandbox with a mock `PP.addLesson`. It prints passages and every item with seeded shuffles of choices, slot options, match rows and columns, and ebsr parts. It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like`, `sample` and a few more field names. I grepped the output for those names and printed no raw item source. I wrote answers to `ans-1a.json`, `ans-1b.json`, `ans-2a.json` and `ans-2b.json` before running `cmp.js` against the keys.
- **Result: 156 of 156 agree (100%).** That is core (refs resolved), Together, similar, form A, and form B for 2.a. I proved the comparer is live by flipping one answer (155 of 156 with a named mismatch), then restoring it.
- **The solve was fully blind** for the keys. I had read the first review's text (which names the changed items) only after saving answers, and the author log only after that. I had no figure items to solve: none of these four lessons has a figure, so there was no alt text to check.
- **Agreement still hides arguable items.** Cold-solve notes on the focus items:
  - 1.a C10: I chose B and C, and I judge them the only defensible pair. The sentence containing the word ("Deerskins were very valuable") only repeats it. Part A has no rival.
  - 1.a S10: Part A "Few people ever found one" and Part B "Most prospectors found only a few tiny bits..." are the only consistent pair. The wording of Part A ("Pick the idea that fits") is thin; see SHOULD.
  - 1.b C05: describe in blank 1 and explain in blank 2, using Teach's two new definitions. "Explain the shape and color" and "describe why bees help" read oddly, so the single answer is defensible.
  - 1.b C15: the sentences (7) and (10) are the only two that need a live audience.
  - 2.a C09, S09: tearful and sleepless; painful and hopeless. Nothing else leaves a word when the ending is covered, with one caveat on angry (see 2.a SHOULD).
  - 2.b C08: payment and sadness. The paragraph numbers alone also isolate both keys (see SHOULD).
  - 2.b C11: finger and river. **Joker is a third word that leaves a non-word under the item's own test; see MUST.**
  - 2.b C14: neighbor, one defensible answer.

### 2. Verification of the first-review MUSTs against the author's second pass

| First-review MUST | Result |
|---|---|
| 1.a C10 false blanket claim | **Fixed and true.** Part B key is now "Traders gave cloth, pots and even guns for them." NPS Ocmulgee lists guns, coats of broadcloth, duffel blankets, hatchets, knives, axes and hoes for deerskins (about 1716: 35 skins for a gun, 30 for a broadcloth coat). The page does not mention pots. South Carolina Encyclopedia: "exchanged dressed deerskins for blankets, firearms, shot, gunpowder, cloth, axes, hoes, and brass kettles", and gives "metal cooking pots". "Cloth, pots and even guns" is therefore accurate. Passage p3 paragraph 4 agrees with Part B, WHY, HOW and hint 2. https://www.nps.gov/ocmu/learn/historyculture/upload/Accessible-British-Trading-Post.pdf , https://scencyclopedia.org/sce/entries/deerskin-trade/ |
| 1.a S09 hints 1 to 2 | **Fixed.** Hint 2 reads "Find the words panning for gold. Read the whole paragraph. Where does the author show what the people did?" The word "before" is gone. `leak.js` reports 0 hits. |
| 1.a P4 hint 1 | **Fixed.** Hint 1 is a strategy ("Ask what the special way helps the grass do"), hint 2 asks what the grass does about the salt. Hint 3 rules out only "turn white". |
| 1.b C15, S15 points | **Fixed.** Both are 2 points. A script check of points against keys across all four lessons (core, Together, similar, form A, form B) found 0 mismatches. Core set totals are 6/8/8, 7/8/8, 8/8/8, 7/8/8. |
| 1.b C15, S15 hint 2 | **Fixed.** Hint 2 asks whether a report reader would need each sentence. Passage p4 is rewritten and numbered 1 to 10; a talk-only line sits mid-list (7), though the second key (10) is still the last target (see SHOULD). |
| 1.b C05 describe vs explain | **Fixed.** Teach defines both words. Blank 1 is cued by "shape and color", blank 2 by "why bees help", and the third options differ per blank. |
| 1.b C09, S09 | **Fixed.** A fourth column is added, and hint 2 gives the question to ask, not the three answers. |
| 2.a C09, S09 real words | **Fixed.** C09 distractors are family, ugly, city; S09 distractors are puppy, angry, candy. None leaves a word under the cover test (belly, silly, only and bully are gone). One caveat on angry (SHOULD below). |
| 2.a C10, S10 hint 3 | **Fixed and true.** "One of the words has two endings and no prefix." C10: carelessly. S10: hopelessly. |
| 2.a T4, TB4 | Now single-answer mc with new keys. **Not a re-skin of P4 any more, but the id and the `testRev` did not change; see MUST.** |
| 2.b C11 number | **Half fixed.** River replaces number (riv is not a word). But the item now has a different defensible third word (joker). See MUST. |
| 2.b C14, S14 | **Fixed.** C14 now offers neighbor, visitor, actor, worker; passage p4 gained "A visitor and an actor from the town play clapped for them." Hint 3 rules out worker only (3 live). S14 offers tiger, farmer, painter, barn (3 live after hint 3). |
| 2.b C08, S08 | **Fixed for the ladder.** Each blank now has three suffixed nouns; hint 3 removes none. See SHOULD on the paragraph cue in C08. |
| 2.b T2 | **Fixed.** T2 now asks which sentence has an -ly word that tells how. Word-set Jaccard against P2 is well below the first 0.50. |

### 3. Mechanical checks

| Check | Result |
|---|---|
| Gates (run in the live repo, read-only) | `check-content.js --all`: no failures for these four lessons (the 6 failures in the output are all 3.L.V.2.c, another author's work in progress). `check-writing.js` 0 failures. `check-instructional-copy.js` 28 passed. Warnings on my four lessons: short passages; "hint 2 shares X only with the key" on 1.a C06 (money), S03 (living things), S10 (people), 2.a S14 (write), 2.b C09 (noun); and the version warning below. |
| Passage FK (`readability.py`) | Highest 4.0 (1.a p2 and p5, 1.b p2). Limit 4.5. Pass. |
| Passage numbering | 1.b passages p1 to p6 are numbered 1 to n with no gaps (p1 10, p2 10, p3 8, p4 10, p5 8, p6 8). Items cite the right sentence numbers (checked C02, C06, C07, C11 and the form A items). The other three lessons are unnumbered and cite "paragraph N"; every cited paragraph holds the word (checked all core, Together and form items). Pass. |
| Similar vs core `like` (`jac.js`, word-set and multiset, match columns, ebsr parts and hottext targets included) | Max per lesson: 1.a 0.21 (S03 to C03 0.21/0.19; S10 to C10 0.18/0.21); 1.b 0.21 (S03 to P5 0.21/0.17; S15 to C15 0.20/0.19); 2.a 0.20 (S03 to C03, S14 to C14); 2.b 0.20 (S15 to C15). All 60 twins at or under 0.21. The ebsr twins sit at the limit because the directions sentence counts. |
| Distinctness inside a lesson (all groups) | Worst: 2.a T2 vs TB2 0.48 and T1 vs TB1 0.46 (form A/B parallel by design); 2.a P2 vs TB2 0.45 and P1 vs P2 0.43 (existing practice frames, not new work); 2.b C15 vs T3 0.48 and C09 vs C15 0.42 (three ebsr items sharing the directions sentence; different skills). No new item is a re-skin of another. |
| Longest-key cue, single-key mc and ebsr (`lkmc.js`, same metric as the author's lk2) | **Reproduced exactly: 1.a 5 of 28 (18%), 1.b 5 of 17 (29%), 2.a 7 of 33 (21%), 2.b 5 of 21 (24%).** Chance is about 29%. The author's figures are right. By words rather than letters: 14%, 0%, 15%, 5%. |
| Longest-key cue, wider view | Counting dropdown slots and hottext option lists too (`lk.js`): 1.a 29%, 1.b 35%, 2.a 29%, 2.b 31%, near chance. **Choose-two sets are not at chance: in 8 of 19 the two keys are the two longest options (about 10% would be chance for five options):** 1.a S08; 1.b C10, S14; 2.a P5, C09, C15, S07, S09. In 2.a the keys are 3 to 5 letters longer. See SHOULD in 2.a. |
| Word-match cue (`wm.js`) | Key has strictly the highest word overlap with stem or passage in 10 of 66 sets (15%, below chance). Highest: 1.a S10 Part A 0.75 vs 0.33, S11 0.67 vs 0.23, 2.a C06 0.67 vs 0.33. Nothing systematic. |
| Keyed text beside hints (`leak.js`) | 0 automatic hits (S09 and S10 are clear). Hand reading found echoes; see below. |
| Points | See section 2. All correct. |
| Versions (`check-content.js` warning) | `2 check forms changed materially (ids, points or answer keys) with the same testRev: 3.L.V.2.a:A, 3.L.V.2.a:B.` Recorded rev is 1 for these forms. See 2.a MUST. 2.b form A shows as wording-only. |

### 4. Hint ladders: live choices after hints 1 to 3 (all changed items recounted, plus a full read of every hint 3)

Rule from plan 4.5: hint 3 may rule out one distractor or complete one of two slots. It must not leave only the key, and no hint may state a key.

| Item | Live after hint 3 | Verdict |
|---|---|---|
| 1.a P4 | 3 of 4 (only "turn white" removed) | pass |
| 1.a C10 | Part A 4; Part B 3 (the sentence holding the word is removed) | pass |
| 1.a S09 | 3 of 4 (last paragraph removed) | pass |
| 1.a S10 | Part A 4; Part B 3 | pass (hint 2 near the key, SHOULD) |
| 1.a S08 | 4 of 5, choose two (swirling removed) | pass |
| 1.a C06, C09, C11, S03, S04, S11 | 3 each (S04: 2) | pass |
| 1.b C05 | 3 per blank by elimination, but hint 3 states both definitions | pass (floor) |
| 1.b C09, S09 | one row completed; two rows over three columns left | pass |
| 1.b C15, S15 | 3 of 5, choose two (3 pairs) | pass |
| 2.a C09, S09 | 5 of 5 (hint 3 names no word) | pass |
| 2.a C10, S10 | 4 of 5 (one distractor named) | pass |
| 2.a C13, S06, S11, S13, P6 | at least 2 (S13: 2) | pass; S13 hint 3 is heavy (SHOULD) |
| 2.a **P1** | **1: "Full of hope would be a different word. Check which choice says the opposite."** The only choice that says the opposite is the key. | **MUST** |
| 2.b C11 | 5 of 5 | pass |
| 2.b C14, S14 | 3 each | pass |
| 2.b C08, S08 | no word removed | pass (but see SHOULD) |
| 2.b **P5, S10** | **1: "Three of the words name someone who does an action. Look for the one that compares."** Three of four options are named away. | **MUST** |
| 2.b **S01** | **1: "Names, counts and colors are jobs for other kinds of words."** Options A (counts), B (names, a title) and C (color) are all removed. | **MUST** |
| 2.b C05, S05, C06, C12, S12, S07, S13, C13 | at least 2 (C05, S05 exactly 2) | pass |

### 5. Word meanings and facts (web)

- **Deerskin trade (1.a C10).** See section 2. NPS and SC Encyclopedia URLs above. Verified.
- **aqua = water (2.a S12).** Etymonline: *aquatic* "from Latin *aquaticus* 'growing in water; bringing rain,' from *aqua* 'water'." https://www.etymonline.com/word/aquatic . Verified.
- **therm = heat (2.a S12).** Etymonline: *therm* is a "Latinized form of Greek *thermē* 'heat, feverish heat'". https://www.etymonline.com/word/therm . Verified. The earlier NOTE that this needed confirming is closed. The sentence "A thermos keeps a drink from losing heat" is true for hot drinks only; a thermos also keeps cold drinks cold (Vocabulary.com, from the first review). First-review SHOULD stays open (S12).
- **angry (2.a S09 distractor).** Etymonline: angry is "from anger (n.) + -y". https://www.etymonline.com/word/angrily . So *angry* does have a real base word, anger, behind it, although covering -y leaves "angr". The WHY ("no real word is left") is true only for the cover test. See 2.a SHOULD.
- **puppy.** "uncertain origin but likely French *poupée*"; *pup* is a shortening of *puppy* (1760). https://www.etymonline.com/word/pup . Fine as a distractor.
- **Earlier verified, unchanged:** abrupt, xylophone, biography, dictate, auditorium, construct, visible, spectator, neighbor, finger, Georgia gold rush "late 1820s", salt-marsh grass, loggerhead nesting (see the first review's section 3 for the URLs).
- **Standard wording** is unchanged and every item sits under it. I checked against `standards.js` only.

### 6. Browser run (390 x 844, touch, real controls)

- **Result.** The same driver as the first review (`real.py`, `ui5.py`, `eb3.py`, `dd3.py`, pointed at a frozen copy served on port 8761). All 60 core items opened, were answered through the real controls and accepted. No page errors, no horizontal scroll, no tap target under 36 px.
- **Driver limit, not a defect.** `real.py` reports dropdown failures on 1.a C07, C12 and C15 because blank 1 is a button list. `dd3.py` answered all three with the real controls and each showed "That's right!".
- **ebsr.** The six ebsr core items (1.a C03, C10; 2.a C03, C14; 2.b C09, C15) show "You got part of it (1 of 2 points)" for Part A right and Part B wrong. All three hints appear in order.
- Screenshots of 1.b C15 (five numbered targets, two points) and 1.a C10 look correct at 390 px.

### 7. Findings by lesson

#### 3.L.V.1.a. Verdict: ACCEPT

| # | Level | Item | Finding | Fix |
|---|---|---|---|---|
| 1 | SHOULD | S10 hint 2, `leak` warning | "How much gold did most people find?" asks the question whose answer is Part B's key and Part A's idea. | "Find rare in paragraph 3 and read the sentences after it." |
| 2 | SHOULD | S10 Part A wording | "The writer calls big nuggets rare. Pick the idea that fits." is vague for a vocabulary item. | "What does rare tell you about big nuggets?" |
| 3 | SHOULD | S03 hint 2 | "Ask what those living things do" echoes the key "living things which turn what has died into bits". | "Ask what those animals do." |
| 4 | SHOULD | Learn It and Watch Me | Unchanged from the first review (SHOULD 8). The three Learn It examples model "is a", "next sentence" and "after the comma". The fifteen also ask: judge a claim (C05, S05), pick the sentence that explains a word (C13, S13), name the author's technique (C09, S09), and use a meaning in a math problem (C15, S15). Teach point 4 now covers clues "just before the word". | One worked example for a claim check or for the author's technique. |
| 5 | SHOULD | Form A passage p2 | Unchanged from the first review (SHOULD 6): water-cycle sentences repeat `T-T2.js` 3.T.T.2.b and `T-SS.js` 3.T.SS.1.a. Form A is already recorded at rev 1, so a rewrite needs a new `testRev`. | Decide with the lead; if rewritten, bump `testRev`. |
| 6 | NOTE | S06 hint 3 | "work in a stream with a pan": the passage says a metal pan and no stream. | Say "work with a pan". |
| 7 | NOTE | S13 option 2 | "The word camouflage comes from a language spoken in another country" is true (it is French). Harmless as a distractor, but it is not wrong. | None. |
| 8 | NOTE | C06 hint 2 | "What do they say about money?" points at the clue sentence; acceptable as where-to-look. | None. |
| 9 | NOTE | Cross-lesson words | patient, eager, shallow, tide, satellite, stethoscope, goods, barter, rare appear in other lessons only as passage words or options, never as the tested word. No duplicate. | None. |

#### 3.L.V.1.b. Verdict: ACCEPT

| # | Level | Item | Finding | Fix |
|---|---|---|---|---|
| 1 | SHOULD | S15 vs C15 | S15's key line "Can everyone in the back hear me?" repeats C15's key "Can everyone in the back see my car?" almost word for word. After C15, the twin's first key is known. Jaccard 0.20 hides it. | Use a different talk-only line in S15, for example "Raise your hand if you have seen a bean sprout." |
| 2 | SHOULD | C04 hint 3 | "...or about plants grown for food" echoes the key "Crops includes every plant grown for food". | "Decide whether the sentence is about one kind of plant or about many kinds." |
| 3 | SHOULD | C15 key position | Keys are the third and the fifth (last) of five targets. A child who knows talks end with "thank you" gets one point without thinking about the report. | Optional: add a closing talk line before a fact sentence, or move the thank-you earlier. |
| 4 | NOTE | C05 | Reads oddly if swapped ("explain the shape and color"), which is what protects the key. Teach defines both words. | None. |
| 5 | NOTE | C09, S09 | Unused columns ("thank-you card", "poem") make the match free of elimination. | None. |
| 6 | NOTE | Learn It and Watch Me | Unchanged: Watch Me covers only word replacement; register (C08, C09), rewrite (C10), correct use (C14) and cutting talk lines (C15) have no Watch Me. Teach point 5 and the second example now carry the register idea. | Optional Watch Me for register. |
| 7 | NOTE | Longest key | Figures at chance now (29%). Choose-two C10 and S14 keys are the two longest, by 7 and 5 letters. | Pad C10, S14 distractors. |

#### 3.L.V.2.a. Verdict: CHANGES REQUIRED (two MUSTs)

| # | Level | Item | Finding | Fix |
|---|---|---|---|---|
| 1 | **MUST** | P1 hint 3 | "Full of hope would be a different word. Check which choice says the opposite." One distractor is removed, and the hint then says to pick the choice that is the opposite. Of "without hope", "hoping again", "hoping before", only the key is an opposite. Hint 3 leaves only the key. P1 is also pre-answered by Teach example 1 ("So hopeless means without hope"). | Hint 3: "Check each choice against the meaning the question gives for -less." Change the Teach example to another word (carefree or careless is taken by T3; use "endless"). |
| 2 | **MUST** | T4, TB4 `testRev` | The keys of T4 and TB4 changed (match to one-answer mc) under the same ids with `testRev` at its default of 1; `check-content` warns and `--record-versions` will refuse. Plan 2.4: a material change needs new ids and a bumped `testRev`. A saved form A or form B result from the shipped version would be read as the new check. | Set `testRev: { A: "2", B: "2" }` in 3.L.V.2.a, then the lead runs `--record-versions`. (Or give T4 and TB4 new ids.) |
| 3 | SHOULD | S09 | Angry is a distractor, but it is *anger + -y* (etymonline). A child who says "angry is anger plus y" is not wrong. The WHY says no real word is left. | Replace angry with a word with no real base, for example **pony** or **penny**. Keep puppy and candy. |
| 4 | SHOULD | C09, S09 longest key | The two keys are still the two longest words (C09 tearful and sleepless 7 and 9 against 6, 4, 4; S09 7 and 8 against 5, 5, 5). The suffix words are naturally longer. Same for C15 (9 and 10 against 5, 5, 6), P5, S07. In the 2.a choose-two sets, length alone gives both points. | Use longer decoys (for example **umbrella** or **yesterday** for non-suffix words; **grapefruit** or **grasshopper** for look-alikes that do not hold graph). |
| 5 | SHOULD | C14 and S14 hint 3 | "For Part A, only one choice uses both roots" / "has both saying and writing in it" identifies the key by a property. S13 hint 3 ("Only one choice matches the root") does the same. | "Check each choice against both root meanings." |
| 6 | SHOULD | S14 hint 2 | "Which action has words being spoken for others to write?" restates the key (`check-content` warns "write"). | "Think about a classroom. Which action matches what dict means?" |
| 7 | SHOULD | TB1, TB3, TB4 vs other sets | TB1 (unbreakable, not able to be broken) and TB3 (preheat) repeat `L-VOC-02` keys; TB2 (misread) is a row there. TB4 key "gently" is also a row in 2.b C13 and a tested adverb in `L-GC2.js` 3.L.GC.2.d. Form B can be answered after the quick set. Unchanged from the first review. | Use other words in TB1, TB3, TB4. |
| 8 | SHOULD | C12 and S12 | Unchanged from the first review: C12's second blank is guessable (sound against light or heat), S12's "thermos keeps a drink from losing heat" is true only for hot drinks. | Stronger distractors; "keeps a drink hot or cold". |
| 9 | NOTE | S03 Part B | The distractor "The puzzle had one thousand pieces" is not in Mia's note. Unchanged. | Quote the note. |
| 10 | NOTE | P7 and Teach vs `3.L.V.2.c` | P7 (transport) is the key of a form item in the existing 2.c (T8, port = carry). Teach's examples "port = carry, as in portable" and "rupt = break, as in interrupt" are the keys of 2.c P7. These are cross-lesson pre-answers in existing work. | Re-run the duplicate scan when the new 2.c lands. |

#### 3.L.V.2.b. Verdict: CHANGES REQUIRED (two MUSTs)

| # | Level | Item | Finding | Fix |
|---|---|---|---|---|
| 1 | **MUST** | C11 | "Which TWO words end in -er, but nothing is left when you cover the ending?" Finger and river are the keys. **Joker** also leaves a non-word when you cover -er ("jok"); only a child who knows joke plus r gets to "joke". The WHY and HOW say "Joke is left", which is false for the cover test the item sets. Three words qualify under the stem's own rule, and a choose-two item allows two. Same class of fault as the first review's number and numb. | Replace joker with a word whose base keeps its letters, for example **hunter** (hunt), **farmer** or **teacher**. Fix WHY and HOW. (P1 has the same slip in "Cover -er in juggler. Juggle is left"; that is a NOTE, and "the base word is juggle" would be accurate.) |
| 2 | **MUST** | P5 and S10 hint 3 | "Three of the words name someone who does an action. Look for the one that compares." This removes three of four options and names the survivor's job. Live choices after hint 3: 1. Unchanged from the first draft and missed in the first review. | "Cover -er in each word. Ask whether the word left is an action or a describing word." |
| 3 | **MUST** | S01 hint 3 | "Names, counts and colors are jobs for other kinds of words." That removes A (counts), B (gives a title) and C (colors). Only D, the key, is left. | "Decide whether smoothly tells about the pilot, the plane, or the way the plane landed." (does not remove options) |
| 4 | SHOULD | C08 | The paragraph numbers alone isolate both keys (payment is the only choice in paragraph 4, sadness the only one in paragraph 1). A child can get both blanks without looking at the word parts. Hint 3 points at that. | Put all three choices in the same paragraph for each blank, or drop the paragraph cue from the stem. |
| 5 | SHOULD | C03 | "Choose the sentence in paragraph 3" but two of the four targets are in paragraph 2. Unchanged from the first review. | "in paragraphs 2 and 3". |
| 6 | SHOULD | C04 | "from paragraphs 2 and 4": all three distractors sit elsewhere, so location eliminates them. Unchanged. | Say "from the passage" and use one distractor from paragraph 2 or 4. |
| 7 | SHOULD | Teach example pre-answers | Teach: "Visitor (visit + or) names a person who visits" is the key of T1; "Excitement ... names a feeling" is a P4 row. Unchanged. Form A is recorded at rev 1. | Use other words in the Teach example. |
| 8 | SHOULD | C09 Part B, S09, S15 wording | Unchanged: "quickly" is not in the Lost Dog passage; S09 Part A "Pick the result" is obscure; S15 uses "manner". | Use passage words; use "how" for "manner". |
| 9 | SHOULD | P3 | firefighter leaves "firefight" when the ending is covered. Unchanged. | Use "driver" or "teacher". |
| 10 | NOTE | T5 hiker, P1 juggler | Both are base word plus -r after a dropped e; the Teach and the HOW say "cover -er". Not a defect for the "person who" question. | None. |
| 11 | NOTE | Duplicates over `js/data` | river, visitor, actor, tiger, mirror, ladder, finger, illness and winter appear elsewhere only as passage or option words (L-GC2, T-C, T-CF, T-T1, T-T2, L-VOC-01); never as a tested word. painter is a key in the existing 2.c test (a "repaint / painter / painless" item) and a distractor in S14. kindness is a distractor in `L-VOC-02` item 5. gently: see 2.a SHOULD 7. | None except the TB4 word. |
| 12 | NOTE | DOK | C09 and C15 ebsr marked DOK 3 are recognition. Unchanged. | Consider DOK 2. |

### 8. Cross-lesson notes

- **What changed for the better.** Every fact claim now checks out. The hint ladders on the first review's named items now leave at least two live choices. Passage numbering and FK are clean. All 60 core items run through real controls.
- **What the first review missed.** A full read of every hint 3 turned up four more hints that leave one option (2.a P1; 2.b P5, S10, S01). Authors should count hint 3 on every item, not only on items that were changed.
- **Open author choices that I do not need to block on.** Learn It coverage (1.a), Teach pre-answers (2.a P1 is a MUST because of the hint; 2.b visitor and excitement stay SHOULD), `L-VOC-02` overlap for form B, and the form A water-cycle passage. The form A and form B items are recorded at rev 1; changing any of them needs a `testRev` bump and a `--record-versions` run by the lead.
- **Re-review.** After the fixes, re-check: 2.a P1 (hint 3, Teach), `testRev`, S09; 2.b C11, S11 (new word), P5, S10, S01. 1.a and 1.b need no further review if the SHOULDs are skipped.
