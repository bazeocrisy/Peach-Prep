# B2 review SC-2: 3.T.SS.1.a and 3.T.C.1.b (author b2d)

**Role:** independent content reviewer B2-SC-2 (blind solver). I did not write these lessons. I read the author log only after my blind answers were saved. I did not read the other reviewer's file.

**Scope:**
- `js/data/lessons/T-SS.js`, the 3.T.SS.1.a block only (lines 8–726): `core`, `similar`, `addons`, passages p3 and p4, teach changes. I read `practice` and `test` to check separation.
- `js/data/lessons/T-C.js`, the 3.T.C.1.b block (lines 198–959): the same parts, plus the revised Together item P4.
- For leaks I also read: 3.T.C.1.c (T-C.js, Kenji's peanut slides), 3.T.T.2.a and 3.T.T.2.d (T-T2.js), and TS-CE (T-TS.js, also coded 3.T.SS.1.a).

**Read-only:** this is the only repository file I wrote. Scratch files are in `scratchpad/b2sc2/`. I ran no git. The server on port 8782 was stopped when I finished.

## 1. Blind solve

**Method:**
- `b2sc2/load.js` evals both lesson files through a stub `PP.addLesson`.
- Before solving, `b2sc2/keys.js` printed only the field names in `core`, `similar` and `practice`, not their values, so I knew which fields to strip.
- `b2sc2/blind.js` prints:
  - every passage that a core or similar item uses, with figure alt text
  - every core item in set order, with each `{ref}` resolved from `practice`
  - every similar item
  - item-level figure alt text
- Choices, targets, order steps, match rows and dropdown options are shuffled with **seed 90513**. The script prints no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`.
- The printout is `b2sc2/blind.txt`. My answers were saved to `b2sc2/answers.json` at 17:58 before any comparison. `b2sc2/cmp.js` then pulled the keys and compared them.

**Was it blind?** Yes, fully. Before saving my answers I opened no lesson source except the five-line header comment of T-SS.js, which describes the p1 and p2 headings and holds no keys. Unlike B0, the three SS1a refs and two TC1b refs were also solved blind.

**Result: 36 of 36 agree (100%).**

| Lesson | Core | Similar | Total |
|---|---|---|---|
| 3.T.SS.1.a | 15/15 | 3/3 | 18/18 |
| 3.T.C.1.b | 15/15 | 3/3 | 18/18 |

**Close calls while solving** (all still defensible):
- **TC1b C04.** "makes the reader curious about the hidden door" is an effect claim. Teach point 1 now supports it.
- **SS1a C09.** Text 2 (a storm, so art night moved) could be read as problem and solution. No distractor says that about Text 2, so there is only one defensible pair.
- **TC1b C11.** See MUST TC-3. The key says the labels point to "each helper", but the starting blocks are not in the figure.

## 2. Points, formats and DOK

**Points: all correct.**

| Lesson | Choose-two (2 pts) | Four-step order (2 pts) | Other 2-pt items |
|---|---|---|---|
| SS1a | C09, C10 | none | 2-slot dropdowns C05 and C14; matches C06 and C15; ebsr C07 |
| TC1b | P5 (hottext, pick 2), C04, C10, C13, C14 | C08 | matches P6 and C09 |

- Every 1-point item has a single answer.
- Totals: SS1a 22 points, TC1b 23 points.

**Formats.** Each lesson has six mc items, which is the limit. SS1a uses six formats and TC1b five. Both have nine technology-enhanced items.

**DOK.** See SS-SHOULD-9.

## 3. Findings: 3.T.SS.1.a

### MUST

**SS-MUST-1. C04 still collides with the peanut practice in 3.T.C.1.c, and Together P3 pre-answers it.**
- **What happened.** The author log says the first set 1 figure (a peanut plant labeled flower and peg) collided and was "replaced by a harvest drawing". The replacement moves the collision to another 3.T.C.1.c item rather than removing it:
  - SK-TC1c-P2 (T-C.js, around line 1061): "Kenji has a photo of peanut plants lying upside down in a field. Which caption should he put under it on Slide 3?" Key: "Peanut plants dry in the sun after they are dug up."
  - SK-SS1a-C04 shows the same picture (plants upside down, peanuts drying in the sun) and asks which section it belongs in. Key: "Harvest Time", keyed by the same fact.
  - That is the same key fact in the same frame (an upside-down plant picture matched to the harvest part). §4.3 rule 4 forbids sharing the key fact of another lesson's practice passage.
- **Together P3 also pre-answers C04.** P3 ("Harvest Time is about how farmers gather the peanuts") has a `why` and `how` that say machines dig up the plants and the peanuts dry. That is C04's reasoning, which breaks the B1 rule "Together must not pre-answer set 1".
- **The 3.T.T.2.a reference is wrong.** The 3.T.T.2.a block (T-T2.js lines 3–782) has no peanut content. The flower/peg diagram item the log calls "3.T.T.2.a" is **SK-TT2d-P6** in 3.T.T.2.d. C04 no longer collides with that item's key. Its distractor "Farmers dig up peanuts in the fall" touches the same fact, but only weakly.
- **Fix.** Moving the drawing to "Why Peanuts Help the Soil" would trade the collision for a pre-answer by Together P2. The cleanest fix is to move the place-a-picture task to p4: a drawing of a billet spinning against a blade belongs in "From Tree to Bat", and a cracked bat is the distractor for "Wood or Metal?". Give set 1 a different p1 item, for example where a new fact belongs: a section or the "Did You Know?" box.

**SS-MUST-2. C07 hint 2 lets the child write the Part A key.**
- **Problem.** Hint 2 says: "Use the key to find the black square and the white circles. Then use the scale bar to think about the space between them." With hints 1 and 2 and no choices, a reader can write "it shows how far the stops are from the library". That fails the §4.5 ladder audit.
- **Fix.** Make hint 2 say "Use the key to find what each mark on the map stands for." Also add one Part A distractor that misreads the map, so the map hint no longer singles out the key. For example: "It shows that all the stops are inside the town of Millbrook."

**SS-MUST-3. C08 hint 2 states the key.**
- **Problem.** Hint 2 says: "Ask where the rug in the new sentence would be." The answer to that question, "inside the bookmobile", is the key heading word for word.
- **Fix.** "Read the new sentence and say what it tells about. Then read the sentences under each heading."

**SS-MUST-4. Similar S03 hint 1 narrows the choices to the key.**
- **Problem.** Hint 1 says: "Ask which feature shows where places are." Of the four choices, only the map shows where places are, so hint 1 is a definition of the key. Hint 2 ("find their way from one place to another") does the same.
- **Fix.** Hint 1: "Each feature has its own job. Think about what Jamal wants his readers to be able to do." Hint 2: "Read Jamal's goal again. Then read each choice and ask what it would add to his report."

### SHOULD

**SS-SHOULD-1. P6 (ref) addon hint 1 narrows the choices to the key.** It says "A map shows where places are." Of the four choices, only "which part of Georgia the peanut farms are in" is about where. Fix: "Look at the map and then at the words. Ask what each one tells you."

**SS-SHOULD-2. C05 hint 2 echoes the key and settles both blanks.**
- It says: "Read the first sentence under each of the two headings. Each one names a time of year."
- "Year" echoes the slot 2 key ("the order of a peanut's year"), and spring and fall settle slot 1. Hint 3 then settles a blank as well.
- Fix: change the slot 2 key to "the order things happen", and make hint 2 "Read the first sentence under each heading."

**SS-SHOULD-3. C06 hint 2 points at the Description row.** It says: "One section has very few clue words, so ask what kind of details it gives." Teach point 5 defines description as "details", so the hint names the pattern. Fix: "…ask what the whole section is doing."

**SS-SHOULD-4. C06's `how` and `why` pre-answer C08, a later item in set 2.**
- C06's how says: "Inside the Bookmobile gives details about one thing: its shelves, books and desk."
- C08 then asks where a sentence about a rug on the bus belongs.
- Fix: put C08 before C06, or trim C06's how to "gives details about one thing, the bus".

**SS-SHOULD-5. C11 distractors.**
- The three distractors all begin "Time order…", and the key is the only option in a different grammar ("The wood must dry…"). It is also the only option about the section's own content.
- "where ash and maple trees grow best" is nearly absurd (§6.5).
- Hint 2 adds nothing, because the stem already names the section.
- Fix: write parallel, plausible misreadings, for example:
  - "Time order shows that metal bats are made the same way."
  - "Time order lets the author compare wood and metal bats."

**SS-SHOULD-6. C14: the key echoes the stem, and hint 2 settles slot 1.**
- The stem says "so a hungry bear cannot get them", and the key section is "Storing Food Away from Bears" (§6.5 echo).
- Hint 2 says "Think about where the family will be when they put their snacks away at night". That answers Chapter 2 "At the Campsite" at hint 2, and only hint 3 may settle a blank.
- Fix: change the stem to "…so that wild animals cannot get them at night". "Animals You Might See" then becomes the real misconception distractor. Make hint 2 "Read every section title, not only the chapter titles."

**SS-SHOULD-7. C07: Part B echoes Part A.**
- The Part A key says "how far", and the only Part B choice about distance says "far from town". The other three Part B choices pair with the Part A distractors, which is good EBSR design.
- The word echo still makes Part B automatic.
- Fix: offer "For them, a trip to the library can take most of a Saturday." as the Part B key. Keep "far from town" out, or reword it so it is not a word match.

**SS-SHOULD-8. Cause and effect, the official wording's own example, appears only once in the fifteen.**
- The only appearance is C09 Text 2, as one of two keys. Captions appear only once too (one C15 row).
- §6.2 asks for each component at least twice.
- TS-CE covers cause and effect for this code, but this lesson's fifteen should still show one cause/effect section, for example as a C06 row or a set 3 transfer paragraph.

**SS-SHOULD-9. The DOK 3 labels are generous.**
- C05 fills two blanks about section order, and C13 classifies one paragraph. Both are DOK 2 tasks by Webb's definitions. If they are relabelled, only C11 is DOK 3, below the minimum of two.
- Fix: make one item a real DOK 3. For example, ask why the author put "Bookmobile or Library Building?" last, or ask which change would turn the C13 paragraph into the steps for a job.

**SS-SHOULD-10. Some items duplicate items in 3.T.C.1.b (§6.7, other lessons).**

| SS1a item | 3.T.C.1.b item | Shared frame |
|---|---|---|
| P5 | C03, S01 | Why is this fact in a Did You Know? box |
| C12 | P5 | Which sentence does the diagram picture |
| C15, S03 | P6 | Match a feature to its job |

This is not a check leak, but it matters for the split (§5).

### NOTE
- **P7 and C14** share the "which chapter would you read" frame. They differ in text and in domain, and C14 adds the section level, so they pass §6.
- **The P5 box fact** ("Georgia grows more peanuts than any other state") also appears in 3.T.C.1.c, 3.T.T.2.d, 3.L.V.3 and 3.T.RA practice. No check uses it, and P5's key is the box's role, not the fact.
- **P7** (pre-existing): its sea-turtle table of contents shares a topic with Practice Test R-INF-01 (hatchlings reaching the ocean). It gives away none of R-INF-01's keys.
- **Together P4** addon: hint 2 ("Start with the set of words that tells about time. Then find the set that tells a reason.") settles two rows. It is a Together item, so this is low stakes.
- **Teach** still has six points, which was already over the limit of five before B2. Point 6 is now seven sentences long, which is heavy for a child. Consider moving the table-of-contents sentence into the `chapter` glossary entry.
- **The like lists are honest:**
  - S01 → C05
  - S02 → C06 and C13
  - S03 → C15 and P6
- **Facts checked:**
  - The first bookmobile was a horse-drawn book wagon, Washington County Free Library, Maryland, 1905 ([Wikipedia](https://en.wikipedia.org/wiki/Bookmobile), [ALA](https://www.ala.org/aboutala/1905-1), [Maryland 400](https://maryland400.org/2024/02/29/first-bookmobile-is-in-washington-county)).
  - Wooden bats are made from ash or maple billets that are dried, turned and finished ([Encyclopedia.com](https://www.encyclopedia.com/manufacturing/news-wires-white-papers-and-books/baseball-bat), [madehow](https://www.madehow.com/Volume-2/Baseball-Bat.html)).
  - Georgia leads peanut production, and peanuts are dug, inverted and dried in the field ([USDA ERS](https://www.ers.usda.gov/data-products/charts-of-note/106192), [UGA Extension](https://secure.caes.uga.edu/extension/publications/files/pdf/B%201087_2.PDF), [WALB](https://www.walb.com/2025/09/30/ag-outlook-its-prime-time-harvesting-georgias-top-crop)).
  - Pine County and Millbrook are labelled as made up.

## 4. Findings: 3.T.C.1.b

### MUST

**TC-MUST-1. C05 hint 2 points only at the key's section.**
- **Problem.** Hint 2 says: "Read the heading 'Tail Talk' and the sentences under it." Only the key is about tails, and no wrong choice comes from that section. That is exactly the B1 rule's giveaway case.
- **Fix.** "Picture the visitors listening. For each choice, ask: will they hear it, and will it tell them something new is starting?"

**TC-MUST-2. Similar S02: hint 1 and hint 2 each leave only the key.**
- **Problem.** Hint 1 says "Ask which feature starts a sound or a video on the page", and hint 2 says "Which feature on the page has the lions in it?". Each one alone isolates the play button. Similar items are reviewed like core items (§4.7).
- **Fix.** Hint 1: "Each web page feature has its own job. Ask what Ty wants to do." Hint 2: "Ty wants to hear something, not read it. Think about what each feature gives you." Keep hint 3.

**TC-MUST-3. C11's key conflicts with C12, and C11's explanation gives C12 away.**
- **The conflict.** The passage says "A pool for swim races is full of helpers… Races begin when swimmers dive from raised platforms called starting blocks." A child can fairly count the starting blocks as a helper. C11's key says Figure 1's labels "point to each helper", but C12's key is that the figure does NOT show the starting blocks. Both cannot be fully true.
- **The giveaway.** C11 comes just before C12 in set 3. Its `why` and `how` list exactly which parts Figure 1 labels: lane lines, the line on the bottom, the flags. C12 then reduces to finding the one part that is not on the list, which breaks the B1 rule against earlier explanations giving away later items.
- **Fix:**
  - Reword the C11 key to "Its labels name the helpers the article explains, so readers can see where each one is."
  - Move the starting-block sentence out of the "helpers" paragraph, for example: "Before the race, swimmers stand on raised platforms called starting blocks."
  - Put C12 before C11, or drop the list of labels from C11's `why` and `how`.

### SHOULD

**TC-SHOULD-1. C10 and C09 rehearse the form A check items T9 and T8.**
- C10 matches SK-TC1b-T9's frame and key logic (brackets name a sound, NARRATOR: names the speaker). It also shares two of T9's three distractor ideas: "the narrator says the bracket words" and "it is a link that opens a page".
- C09's "underlined Next page: X opens X" is T8's slot 2 logic.
- Practice should build the skill, but a child who has just done C10 can answer T9 by pattern (§6.7).
- Fix for C10: use a different task, for example choose the caption line to add when a door slams in the video (construct), with distractors that are not T9's.

**TC-SHOULD-2. Cross-lesson leak into a check (pre-existing, but B2 moves it into core).**
- TC1b p1 says: "Its doors are under the water, so foxes and other hunters cannot easily get inside." That sentence is part of the key of core ref P5.
- It is also the key fact of the TS-CE form A check:
  - SK-TSCE-T2, whose cause is "The lodge doors are under the water"
  - SK-TSCE-T5, the same lodge sentence
- "Busy Builders" also walks through TS-CE T1's chain: sticks, dam, pond.
- TS-CE carries the same code, 3.T.SS.1.a.
- Fix: rewrite p1 paragraph 5 without the cause clause, for example "Its doors are under the water. The room inside stays dry above the water." The diagram labels and P5 still work. This is the lead's call, because the passage predates B2.

**TC-SHOULD-3. Together P9 and set 1 C05 share a setting.**
- Both have a park ranger talking about beavers, and both answer with a spoken signal. The author flagged this.
- P9's key is emphasis (the job bold does), while C05's is a transition (the job a heading does). Even so, the same ranger frame pre-models C05.
- Fix: make the C05 reader a teacher or a student reading "Life in a Beaver Pond" to the class.

**TC-SHOULD-4. C05 distractors.**
- "Read the next sentences faster so the talk ends sooner" and "Skip the heading and go right on" are implausible. The key is the only helpful action.
- Fix: add one plausible spoken-but-wrong option, for example "Say, 'A lodge is a beaver's home,' one more time" (it repeats the old part).

**TC-SHOULD-5. S02's like list is not honest for C13.** S02 practises which web feature does a job, as C09 does. C13 asks which features need a screen rather than paper, and S02 does not practise that. Fix: `like: ["SK-TC1b-C09"]`.

**TC-SHOULD-6. C09 rows can be solved by matching words.** "read the next page…" matches "Next page:", and "rain and storms" matches Weather. Fix: rows that need the feature's job, for example "see whether other pages on the site tell about water towers" for the search box.

### NOTE
- **C03** has the only two-clause option, and it paraphrases teach point 3. See also SS-SHOULD-10. It still solves cleanly.
- **P6** (ref, pre-existing): its stem ("Three are in a printed book, and one is in a talk") gives away the speaker's-voice row.
- **C14** is marked DOK 3 but is closer to DOK 2. With C11, C03 and C05, the lesson still has two or more DOK 3 items.
- **C10** key: a narrator is usually an off-screen voice. "Spoken by the narrator of the video" is more exact than "by someone in the video".
- **Teach** has seven points, which was already over the limit before B2.
- **Similar bank.** After S02 is used at C09 and S03 at C05, C13 and C14 show no "Try a similar question". That is correct behaviour (first unused item only).
- **Facts checked:**
  - Backstroke flags are 5 yards (15 ft) from the wall in yard pools ([USMS](https://usms.org/fitness-and-training/articles-and-videos/articles/how-to-use-backstroke-flags-in-swimming)).
  - The T at the end of the lane line, and lane lines that damp waves, are standard pool markings.
  - Water towers are commonly filled at night or off-peak and deliver water by gravity, and large tanks hold over a million gallons.
  - Beaver teeth grow continually, lodge entrances are underwater, and beavers slap their tails as a warning.

## 5. Coverage and the proposed split

### 3.T.SS.1.a

The official wording (p. 29): "Describe how texts are arranged … using text features (e.g., map, captions) and organizational structures (e.g., cause/effect), referring to parts of texts using terms such as chapter or section."

**Coverage as it stands:**

| Part of the wording | Covered by | Gap |
|---|---|---|
| Features | P5, P6, C04, C07, C12, C15, S03 | Captions only in one C15 row |
| Structures | C05, C06, C09, C11, C13 | Cause and effect only once (SS-SHOULD-8) |
| Chapter and section terms | P7, C10, C14, and section names throughout | none |

- "Describe how texts are arranged" is modelled by C05 and C11.
- With SS-SHOULD-8 fixed, the lesson covers the wording.

**The split list is internally coherent.** All ten items in the move list (P5, P6, P7, C04, C07, C08, C10, C12, C14, C15 and S03) are feature or chapter/section items. What stays (C05, C06, C09, C11, C13, S01 and S02) is about structure.

**Two cautions for the lead:**
- **The "which structure is it?" half must be about telling structures apart.** It should not add ten more single-structure items. TS-SEQ, TS-CE, TS-PS, TS-CC and TS-DESC already teach each structure on its own under this same code. What only this lesson can add is choosing between structures and explaining how sections are arranged, which is what C05, C06, C09, C11 and C13 do. The "about ten new structure items" the log estimates should keep that focus, or they will duplicate the TS-* lessons.
- **The new features lesson would overlap heavily with what remains of 3.T.C.1.b** after its split: headings, boxes, captions, diagrams and maps (see SS-SHOULD-10). Draw the line before authoring:
  - The SS1a features lesson takes features that show arrangement and let a reader refer to parts: table of contents, chapter and section, headings as section markers, and maps or diagrams tied to a section.
  - 3.T.C.1.b keeps a feature's purpose and effect.

### 3.T.C.1.b

The official wording (p. 26): "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."

**Coverage as it stands:**

| Mode | Items |
|---|---|
| Print | P6, C03, C04, C06, C13 |
| Visual | P5, C07, C08, C11, C12 |
| Digital | C09, C13, S02 |
| Auditory | C10, C15 |
| Spoken | P6 (one row), C05, C14, S03 |

- Purpose and effect (E) appear in every set.
- "Overall purpose" is touched by C07 (a caption for the whole diagram) and C11. Every mode appears at least twice.
- **The lesson covers its wording as it stands.**

**The split list makes sense.** It moves C05, C09, C10, C13, C14 and C15, the speaker's-voice row of P6, S02 and S03, and Together P9 and P10. Two points:
- **P6.** Trimming P6 to its three print rows changes the item, so under the ledger rule it needs a new id (§2.2.4, "a changed item must get a new id"). It may then score 1 or 2 points depending on the engine's match rule.
- **Coverage after the split.** The remaining print/visual lesson has nine core items and few Spoken/Auditory mentions. It would still need its own "purpose and effect" items, and the new digital/auditory/spoken lesson starts at six items plus two similar items. Also settle the overlap with the SS1a features lesson above before either new lesson is written.

## 6. Browser run

**Setup:**
- `node verification/serve.js . 8782` in /home/claude/pp-content, with the preinstalled Playwright Chromium.
- Script: `b2sc2/pw.py`; log: `b2sc2/pw.log`.
- Viewports 320×568 and 1366×768, each with a clean browser per pass, in browse mode.
- On narrow screens the script taps the Question tab, and it also checks passage figures on the passage tab.

**Result: 448 of 448 checks pass.** On all thirty core items in `:y`, `:y2` and `:y3`, at both widths:

| Check | Result |
|---|---|
| Check my answer | A wrong response shows "Not quite"; the key then shows "That's right!" with the `why`. One real click on a choice (TC1b C06 at 320) also checks right |
| Hints | Hints 1, 2 and 3 appear in order, labelled "Hint n of 3", with the authored text. The button then reads "No more hints" |
| Show me how | Shows every `how` step and the answer. No horizontal scroll afterwards |
| Try a similar question | Shown exactly when an unused similar item lists the core item. It opens S01, S02 or S03, headed "Extra question (not one of the fifteen)", which checks right, and Next returns to the core sequence |
| Horizontal scroll | None. `scrollWidth` never exceeded `innerWidth`, before or after hints and Show me how |
| Figures | All load and fit at 320 |
| Console and page errors | None. The only console errors were the fonts.googleapis requests that the test itself blocks; I filtered those out |

**Figure legibility at 320.** The six new SVGs render 225–240 px wide. Their label font sizes (21–24 in a 320-unit viewBox) come out at about 15–17 CSS px. I looked at the crops (`b2sc2/figs-montage.png`, `b2sc2/fig-*.png`):
- The web page, Pine County map, water tower and pool diagrams are legible.
- "Millbrook" overlaps the dashed route lines slightly but stays readable.

## 7. Agreement rate and verdicts

**Agreement: 36 of 36 (100%), fully blind.**

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 3.T.SS.1.a | **CHANGES REQUIRED** | 4 | 10 | 7 |
| 3.T.C.1.b | **CHANGES REQUIRED** | 3 | 6 | 7 |

**3.T.SS.1.a MUST items:**
- MUST-1: the C04 peanut collision with SK-TC1c-P2, and the pre-answer by Together P3
- MUST-2: C07 hint 2
- MUST-3: C08 hint 2
- MUST-4: S03 hint 1

**3.T.C.1.b MUST items:**
- MUST-1: C05 hint 2
- MUST-2: S02 hints 1 and 2
- MUST-3: the C11 and C12 conflict and giveaway

All MUST fixes are local to hints, one stem, or one passage sentence, except SS-MUST-1. That one needs a new set 1 item, or the picture-placement task moved to p4.
