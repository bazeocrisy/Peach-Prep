# PP-003 Phase F review B: grade 3 instructional specialist

- Reviewer: B (grade 3 instructional specialist). Date: 2026-10-20.
- Scope: every new or changed teach point, Watch Me, figure, hint (`clue`) and `why` in `git diff 66e536b -- js/data/lessons js/data/sets assets`, plus the new parent-facing wording in js/skills.js, js/parents.js and js/data/lessons/F-FH.js.
- READ-ONLY. The only file written is this one. Server: `node verification/serve.js . 8462`, stopped by its PID afterwards. serve.js now returns `image/svg+xml` for .svg (checked with curl).

## What I did
- Read the full diff and all five fix logs. Solved every new or changed item myself.
- Rendered with Python Playwright (Chromium) at 390px and 1366px:
  - Learn It and Watch Me (with every step revealed) for all 13 changed lessons. Used `PP_SKILLS.open(k,'teach'|'learn')`.
  - All 30 new or changed items, each inside its real set. Used `PP_PLAYER.start('SK:<k>:p'|':y'|':t', …)`.
  - For Together and Try items at 390px: a wrong answer, then Help me (hint 1), then the right answer with its `why`.
  - A failed skill check and a passed one, then the skill-page test card.
  - The parent guide's "How to use" tab.
  - The 3.F.F.1.b read-aloud timer: a simulated one-minute reading with two misses and one self-correction, then the observation form and the history line.
  - The grown-up Check, ticked off, and the skill row afterwards.
  - Screenshots are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revB/img/`.
- Rendered all 13 SVGs side by side at 230px (`img/sheet.png`) and four of them at 360px (`img/sheet2.png`) to judge legibility.
- Results:
  - There was no sideways scroll at 390 or 1366 on any page I rendered.
  - Every figure loads (`naturalWidth > 0`) and has alt text. Drawn width at 390px is 268-298px.
- Facts checked against my own subject knowledge. I fetched no web source, so these are not externally verified.
  - Word roots: port = carry, graph = write, tele = far, phon = sound, rupt = break, spect = look, scope = look, auto = self, micro = small, mega = big, trans = across, e-/ex- = out, mis- = wrongly, inter- = between.
  - Word origins: report (reportare), export, porter (the carrier sense), inspect, spectator, erupt/rupture, interrupt, autograph, telescope, microphone, megaphone.
  - Animals:
    - Beaver: lodge with an underwater entrance and a dry chamber; incisors keep growing; tail slap.
    - Monarch: four stages; caterpillars eat only milkweed; it tastes with its feet; some migrate through Georgia.
    - Camel: the hump stores fat.
    - Honeybee: hexagonal cells hold eggs, honey and pollen; workers are female; five eyes.
    - Nine-banded armadillo: bony plates, a head shield, flexible bands; only three-banded armadillos roll into a ball; it usually has identical quadruplets.
    - Heron: wades and hunts fish.
    - Ruby-throated hummingbird: under a nickel's weight; nectar plus insects; a walnut-sized nest of plant down and spider silk; two eggs; crosses the Gulf.
    - Bats: mammals; the only true flying mammals; echolocation.
  - Geography: the Chattahoochee rises in the north Georgia mountains, passes northwest of Atlanta, and forms the Georgia-Alabama border from West Point south to Florida.
  - **All of these are accurate.** The issues below are about teaching, wording and figures, not facts.
- Not checked:
  - Print output.
  - The 768px width.
  - Screen-reader announcement of the figures.
  - The home "review" chip and the "Not passed yet" filter (other reviewers' areas).
  - The 2-point re-scoring of L-VOC-02-5 and L-VOC-03-9, beyond confirming that the item text is unchanged.

---

## Findings

### RB-1 MUST: SK-V2c-T8: the prompt is false, and the item can be answered by letter-spotting
- **Where:** js/data/lessons/L-V12.js:937-948 (3.L.V.2.c test).
- **Evidence:**
  - The prompt says "Lin is building words on the root port … Which TWO words did she build that have to do with carrying?"
  - Four of the six choices (autograph, telescope, erupt, spectator) are not built on port. The premise tells the child something untrue about the choices.
  - Only the two keys contain the letters p-o-r-t. A child who knows nothing about meaning gets 2 of the check's 8 points by spotting four letters. The item cannot tell "knows port = carry" from "can see port".
  - The fix log calls it DOK 2. It works as DOK 1.
- **Fix:**
  - Keep the premise and make every choice contain p-o-r-t. Keys: transport, porter. Port-carry decoys: report (carry news), export (carry out). Look-alikes: portion, sport.
  - Reword the prompt: "Each word has the letters port. In which TWO words does port mean carry, and the whole word is about carrying things from place to place?" The child then has to use the meaning.
  - Alternatively, keep the distractors and change the prompt to "Which TWO words are built on the root port and have to do with carrying?" That is truthful, but it is still letter-matchable, so the first fix is better.

### RB-2 MUST: SK-V3a-T7: the `why` models a false inference
- **Where:** js/data/lessons/L-V3.js:200-207.
- **Evidence:**
  - The `why` says "The caption says it hunts for fish, so it is not a fish itself."
  - Many fish hunt fish. This is the reasoning shown to the child after the skill check (in Show me how), and it is invalid.
  - The right evidence is in the figure: a beak, feathers and wings, and two long legs.
- **Fix:** "Figure 1 shows a sharp beak, a long neck and two long legs standing in shallow water. Fish and plants do not have beaks or legs, so a heron is a tall bird."
- **Also, SHOULD:**
  - The key's verb "wades" is in neither the text nor the figure, and many 8-year-olds will not know it.
  - Use "a tall bird that stands and hunts in shallow water", or add "wades (walks in water)" to the caption.

### RB-3 SHOULD: SK-V3a-P6: the figure and the hint give the answer away
- **Where:**
  - L-V3.js:148-160
  - assets/figures/v3a-tree-ladder.svg
- **Evidence:**
  - The picture labels the word itself ("trunk", with a line to the tree trunk).
  - Hint 1 says "find the label that says trunk and follow its line".
  - The child is not using a picture as context. They read the answer off a label, and the hint tells them to. The item is effectively DOK 1, not 2.
  - The alt text says "an apple tree", but the drawing shows plain white circles that do not read as apples.
- **Fix:**
  - Remove the "trunk" label and keep "branch" and "roots". The child must then see that the ladder rests on the tree's thick stem.
  - Clue: "Look at the picture. What is the ladder leaning on? Which meaning matches that?"
  - Drop "apple" from the alt text, or draw red fruit.

### RB-4 SHOULD: 3.L.V.2.a and 3.L.V.2.c teach the root "phon" but show the word "phone"
- **Where:**
  - L-V12.js:378 and 394-397 (2.a point 4 and Example: two roots)
  - L-V12.js:786-790 (2.c point 4)
- **Evidence:**
  - The example "telephone = tele + phone / Tele means far. Phon means sound." splits off "phone" but defines "phon".
  - An 8-year-old who is told to "find each root you know" will look for p-h-o-n and find an extra e.
  - 2.c point 4 adds "head + phones = headphones" as building "on a root". That is really two English base words, which blurs the root and base-word line the lesson has just drawn.
- **Fix:**
  - "telephone = tele + phone. Tele means far. Phone (from the root phon) means sound."
  - In 2.c, replace headphones with microphone. It cannot be used because microphone is T7's key, so use "phonics" or "saxophone", or leave headphones out.

### RB-5 SHOULD: the 3.L.V.2.a root point packs six roots into one sentence block
- **Where:** L-V12.js:378.
- **Evidence:**
  - At 390px the point is a 9-line paragraph: "Port means carry. Graph means write. Tele means far. Phon means sound. Rupt means break. Spect means look."
  - That is a lot of new abstract vocabulary in one breath for a third grader.
  - Two of these roots (spect, rupt) are then needed from memory on the check (T6 inspect) and in Try (P7 transport).
- **Fix:**
  - Put the six roots in a small two-column list, or a `words` entry for each with one example word (port / carry / transport, etc.).
  - Keep the definition sentence as its own point.

### RB-6 SHOULD: "base word / root word" and "common root" are not told apart for a child
- **Where:** L-V12.js `words` (base word "also called a root word" plus the new "common root").
- **Evidence:**
  - A child now has "root word" and "root" as two different things, and the only difference given is "came from Latin or Greek". An 8-year-old cannot check that.
  - Port, graph, phone and scope are also everyday English words. Port means a harbor to many children.
- **Fix:** add one kid-checkable line: "A base word (root word) is an English word you know, like kind. A common root is a word part with an old meaning, like spect (look) or port (carry). The meaning helps you, even when the part is also a word, like port."

### RB-7 SHOULD: the parent "root hunt" will turn up words where port does not mean carry
- **Where:** L-V12.js:433 (2.a parent) and the 2.c parent line ("how many words can you build with port").
- **Evidence:**
  - A cereal-box and street-sign hunt for "port" finds airport, passport, sport and important.
  - The roots author deliberately excluded airport and passport as not *portare*. The parent is not told this.
  - Without a warning the child is taught that airport means "air carry", or the parent is stuck.
- **Fix:** add "Not every word with the letters port uses this root (airport, sport). If 'carry' does not fit the meaning, it is a look-alike, just like uncle and ready."

### RB-8 SHOULD: Watch Me "autograph" answer wording
- **Where:** L-V12.js:815-823.
- **Evidence:** "a name that a person writes themself" is awkward, and "themself" will read as an error to many parents and teachers.
- **Fix:** "an autograph is a person's own name, written by that person."
- **NOTE in the same lesson:** "goods" in "ex + port = export (to carry goods out to another country)" (L-V12.js:807) is not grade 3 vocabulary. Use "things to sell".

### RB-9 SHOULD: Watch Me 2 in 3.L.V.3.a (rainfall graph) does not model the skill it was added for
- **Where:**
  - L-V3.js:45-58
  - assets/figures/v3a-rainfall-graph.svg
- **Evidence:**
  - "Rainfall" is a transparent compound (rain + fall), and the sentence already says "measured the rainfall".
  - The graph adds the idea of an amount, but the child does not need the graph to know the word. So the example does not show a graph clarifying an unknown word.
  - Step 1 says "The graph is about the word". That is not a clear thinking move.
  - The month abbreviations (Mar, Apr) are fine. The graph itself is clear, labeled, has its values on the bars and is not color-only.
- **Fix:**
  - Use a word the graph actually explains. For example: "June had the most precipitation." Graph title "Rain in Our Garden", side label "inches of rain".
  - Steps: the title and side label say rain, June is the tallest bar, so precipitation means rain (or snow) that falls.
  - Rewrite step 1 as "Read the title. It tells what the graph measures."

### RB-10 SHOULD: 3.T.C.1.b: "a caption tells what the picture cannot show" is tested (T6) but never modeled or practiced
- **Where:**
  - T-C.js:204-224 (teach)
  - T-C.js:251-262 (Watch Me 3)
  - T-C.js:313-325 (P8)
  - T-C.js:435-444 (T6)
- **Evidence:**
  - The idea appears once in a Learn It sentence ("like where or when").
  - The Learn It frog caption, the Watch Me 3 caption and P8 all have captions that only name what is visible.
  - P8 practices the opposite move: matching a caption to the picture.
  - The first time a child must find what the caption adds beyond the picture is on the check.
- **Fix:**
  - Change the frog caption to add where or when: "A green frog waits on a lily pad in a Georgia pond at night."
  - Add a note line: "The picture shows the frog and the pad. The caption adds where and when."

### RB-11 SHOULD: 3.T.C.1.b monarch life-cycle figure: the "egg" reads as an eye
- **Where:** assets/figures/tc1b-monarch-cycle.svg (T-C.js:296; used by T3).
- **Evidence:**
  - At 300px and 230px the egg is drawn as a dark-outlined oval centered on a pointed leaf. It reads as an eye (screenshot `SK-TC1b-T6-q-390.png`).
  - The other three stages are clear and recognizable.
- **Fix:** draw a small cream or pale-yellow dot-egg near the edge of a leaf with a midrib vein. Keep the "1 egg" label.

### RB-12 SHOULD: 3.T.T.2.a: the design half is taught and tested with no Watch Me model
- **Where:**
  - T-T2.js:23-50 (teach, camel design example)
  - P6 (~140), P7 (180), T6 (~246)
- **Evidence:**
  - The camel design example is a static Learn It example.
  - Watch Me (3 examples, all main idea) never thinks aloud about a diagram, a caption or a text box.
  - The sequence goes straight from Learn It to P6 (Together). The fix log admits this.
- **Fix:**
  - Replace or extend one main-idea Watch Me with a think-aloud on the camel diagram: "What does the caption tell? What do the labels add? Which label shows a key detail from the paragraph?"
  - Move the Learn It camel figure there.

### RB-13 SHOULD: SK-TT2a-P7 `why` names labels that are not in the figure
- **Where:** T-T2.js:180-188 and assets/figures/tt2a-honeycomb.svg.
- **Evidence:**
  - The figure's labels are "cell with an egg", "honey" and "pollen". The `why` says "The labels egg, honey and pollen".
  - Five egg cells are drawn but only one is labeled. Their ovals look like the digit 0 at phone width.
- **Fix:**
  - `why`: 'The labels "cell with an egg," "honey" and "pollen" …'.
  - Draw the eggs as small upright rice-grain shapes, or leave the unlabeled cells empty.

### RB-14 SHOULD: armadillo figure: "long nose" points at a short, blunt snout
- **Where:** assets/figures/tt2a-armadillo.svg (T-T2.js:108; used by T6).
- **Evidence:**
  - At 1366px the head is a short wedge with a large ear. The label says "long nose", and the alt text and paragraph 2 rely on a good nose.
  - It is not wrong enough to change an answer, but the label and the drawing disagree.
- **Fix:** lengthen the snout to a tapered point about twice its current length, and keep the label line on the tip.

### RB-15 SHOULD: SK-TT1b-P7: hint 1 hands over the answer
- **Where:** T-T1.js:338-347.
- **Evidence:**
  - Clue: "Think about what Jada and Grandma Bea are doing at night. Could they stop the rabbits themselves?" The only possible reply is "asleep, no", which is the key.
  - In Try It Yourself, hint 1 comes after one wrong try, so the child gets the answer rather than a nudge.
- **Fix:** "Read paragraph 3 again. When do the rabbits come? Then look at the kind of fix Jada makes in paragraph 4. Why would that kind of fix be a good idea at that time?"

### RB-16 SHOULD: 3.T.T.1.b new teach point: vocabulary and load
- **Where:** T-T1.js:233.
- **Evidence:**
  - "Deadline" is not grade 3 vocabulary and is not glossed.
  - The teach block is now 7 points (SPEC §8 guideline: 3-5).
  - The campsite Watch Me models the reasoning well.
- **Fix:**
  - Use "a time when something is due" in place of "a deadline".
  - Merge the Clue words point into the Somebody-Wanted-But-So-Then point to stay at 6.

### RB-17 SHOULD: 3.T.T.4.b: the "effect" question type has no worked model
- **Where:** T-T34.js:579 (tip), P6 (687), T6.
- **Evidence:**
  - The "pick the line by feeling" move is taught only in one tip sentence.
  - The only practice, P6, is in Try It Yourself. There is no Watch Me and no Together item.
  - Hint 1 for P6 ("Do they sound quiet and gentle, or loud and busy?") nearly names the answer, but that is acceptable after a wrong try.
- **Fix:** add a third step to an existing Watch Me: "The poet wants a cozy feeling. All my choices rhyme, so I listen to the words: soft, warm, snug sound cozy; crash and bang do not."

### RB-18 SHOULD: Georgia river map has no direction cue
- **Where:**
  - assets/figures/ss1a-georgia-river.svg
  - T-SS.js:84-94
- **Evidence:**
  - The article says "north Georgia" and "southwest", and step 2 says "the mountains at the top". There is no compass rose or N arrow to connect top with north.
  - The outline, the Atlanta position, the river path and the border run are reasonable for a schematic. Striped plus blue is not color-only.
- **Fix:** add a small "N ↑" in a corner. Optionally put "north" in step 2: "the mountains at the top (north)".

### RB-19 SHOULD: child-facing results and test card mix "test" and "skill check", and the fail message has no warmth
- **Where:**
  - js/skills.js:1056-1057 (afterTest)
  - skills.js:703-711 (test card)
  - index.html:182-191
  - parents.js:234-235
- **Evidence:**
  - Screenshots `res-fail-390.png`, `res-pass-390.png`, `card-pass-390.png`.
  - The step is "Test", the heading "Test Your Knowledge", the buttons "Take the test (again)", and the message "skill check". A child, and a parent reading the "Practice and Test modes" list, is not told they are the same thing.
  - Fail message, under a big "0 of 7 points": "To pass the skill check, score 6 or more. Go back to Watch Me or Practice Together, then try the check again another day." It gives a rule but no reassurance. A "Take the test again" button sits directly below "another day".
  - The test card shows a grown-up note to the child: "Passed on try 2. The check uses the same questions each time." It is honest, but it reads as a caveat on the child's success, and nothing marks it as being for grown-ups.
- **Fix:**
  - Use one child-facing name. Either rename the step and heading "Skill check", or add "(the skill check)" after "Test Your Knowledge".
  - Fail: "Not yet, and that's OK. Learning takes a few tries. Go back to Watch Me or Practice Together, then try the skill check again on another day. (You need 6 of 7 points to pass.)"
  - Prefix the try-number and answers-seen lines with "For grown-ups:" or move them into the For grown-ups box.
  - parents.js:235: "Test (the skill check at the end of each skill, and the practice tests): no hints."

### RB-20 SHOULD: fluency timer: parent wording is jargon-heavy in places
- **Where:**
  - skills.js:781 ("calibrated passages", "screener")
  - skills.js:876-880 ("the grade 3 middle"; "the 50th percentile, or median, of national grade 3 norms")
  - F-FH.js:73 ("national middle numbers")
- **Evidence:**
  - The "home practice, not a test" framing is clear and honest.
  - "Calibrated", "screener" and "the grade 3 middle" will not be clear to many parents.
  - The result text is long. It is about 60 words before the accuracy line (screenshot `flu-after-390-b.png`).
- **Fix:**
  - "A home practice tool, not a school reading test. Schools use passages that are checked for difficulty and more than one reading, so treat this number as a rough guide."
  - "For this one reading, that is at or above the typical grade 3 score."
  - Put the norms source in a smaller note line.

### RB-21 SHOULD: grown-up observation fields: two unclear prompts and one contradiction
- **Where:**
  - skills.js:919-933 (observeForm)
  - skills.js:836 (during-reading instruction)
  - F-FH.js:7 (`how`)
- **Evidence:**
  1. "Could your child tell what it was mostly about?" The page never tells the grown-up to ask. A parent who did not ask cannot answer.
  2. "counted from your second taps; change it if needed". "Second taps" is site jargon.
  3. The pre-reading instruction (`how`) says "A word the reader fixes right away counts as correct", which implies "don't tap it". The during-reading line says to tap it twice. A parent who follows `how` records no self-corrections.
- **Fix:**
  1. Legend: "Ask: 'What was it mostly about?' Could your child tell you?"
  2. "We counted words you tapped twice. Change the number if needed."
  3. `how`: "If the reader fixes a word on their own, tap it a second time. It counts as correct and as a self-correction."
- The 1-3 expression scale is plain and fits a parent. The history line ("Grown-up observed: expression and phrasing 2 of 3, …") reads well.

### RB-22 SHOULD: 3.F.F.1.b Check: the new self-correction line can block a strong reader indefinitely
- **Where:** F-FH.js:79.
- **Evidence:**
  - "(If there were no mistakes, listen again on another passage before checking this.)" An accurate reader may make no mistakes on every grade 3 passage. Then this line, and so "Checked by a grown-up", can never honestly be ticked.
- **Fix:** "… (If there were no mistakes, try a harder passage or a page of a chapter book. If there are still none, check this line.)"

### RB-23 NOTE: SK-TC1b-P5 is labeled DOK 3 but is now label-to-sentence word matching
- **Where:** T-C.js:347-354.
- **Evidence:** the two labels "dry room" and "door under water" repeat the words of the two key sentences.
- **Fix:** relabel it DOK 2. Or ask "Which sentence does the diagram help you picture that the words alone make hard to see?"

### RB-24 NOTE: SK-TT2d-T6 has a heavy reading load, and its key partly repeats sentence 2
- **Where:** T-T2.js:875-884.
- **Evidence:**
  - Each choice is about 30 words (sentence + place + reason).
  - Sentence 2 already says mother bats feed babies milk, so the "mammal" definition adds only "has hair".
  - The key is still the best of the four. The DOK 3 reasoning is sound.
- **Fix:** optional. Use the definition "A mammal is an animal with hair or fur." Shorten each reason to one clause.

### RB-25 NOTE: positive findings (no change needed)
- **Hints scaffold without giving the answer:**
  - SK-V2a-P6, P7 and P5 ("cover the letters … if a real word is left")
  - SK-V2c-P6 ("you need TWO parts … check both are in your word")
  - SK-TC1b-P8 ("cross out captions about things you cannot see")
  - SK-TC2c-P6 ("who is the writer and what is her job")
  - SK-TT2a-P6
- **`why` texts explain the reasoning and say why each distractor fails:**
  - SK-V2a-P7, T6
  - SK-V2c-P6, P7, T7
  - SK-TC1b-T6
  - SK-TC2c-P6, T6
  - SK-RA1c-T3 (it names both rules: tiny detail, copied)
  - SK-SS1b-T6
  - SK-TT1b-T2, T4
  - SK-TT4b-P6, T6
- **Watch Me models of reasoning:** telescope (2.a), autograph (2.c, apart from RB-8), plant diagram (1.b), campsite (1.b) and river map (SS.1.a) each show the thinking step by step, not just the answer.
- **Figures:**
  - Every new figure is original, simple line art, labeled with short words, and readable at phone width. At 390px the smallest label is about 15px.
  - None relies on color alone: the river is striped, honeycomb contents are patterned, and the graph has values on its bars.
  - Each has a figure number and caption where the text refers to it.
  - Alt text matches the picture, except for RB-3 (apple tree).
  - Beaver lodge: the dry room above the water line and the door below it are clear. P5 and the lodge alt agree.
- **People:**
  - No figure depicts people.
  - New names (Maya, Lin, Dr. Ruiz, the Ruiz family/Ben, Marcus, Ms. Hall, Kayla, Priya, Kenji, Mia, Dev, Jada, Omar) are varied. Dr. Ruiz is a woman scientist.
  - Tortillas used in place of buns is a nice everyday detail.
  - Minor: "Ruiz" is used for two unrelated families (T-C.js P6, T-T1.js Watch Me 3). It is harmless.
- **Parent wording that works:**
  - "Passed the skill check" is clear and does not over-claim.
  - The "What 'Passed the skill check' means" section is honest and readable: 4-6 questions (I verified that every lesson test has 4-6 items), the same questions each time, "not a Georgia Milestones score and does not predict an achievement level", and review after a week.
  - "Checked by a grown-up", with "This is a grown-up's observation, not a scored skill check", is clear to a parent and neutral to a child. The plum tick on the skill row keeps it apart from a scored pass.
  - The 3.F.F.1.b parent tip's "rough guide only … home practice, not a test" is good.
  - Minor: "on their own" in "scored at least 80% of the points on their own" (parents.js:238) cannot be known by the site. "With no hints" is accurate.
- **Sets:**
  - L-VOC-02-5 and L-VOC-03-9: only `points` changed, with no wording change. Fine.
  - PT-1: "(shortened)" and the blurb are clear to a parent. "SHORTENED" in capitals is shouty for a child-facing card; "shortened" is enough.

---

## Verdicts per changed lesson / file
| Lesson or file | Verdict | Findings |
|---|---|---|
| 3.L.V.2.a (L-V12.js) | PASS WITH SHOULDS | RB-4, RB-5, RB-6, RB-7 |
| 3.L.V.2.c (L-V12.js) | **FAIL** | RB-1 (MUST); RB-4, RB-6, RB-7, RB-8 |
| 3.L.V.3.a (L-V3.js, incl. SK-V3b-P6 / SK-V3c-P5 points) | **FAIL** | RB-2 (MUST); RB-3, RB-9 |
| 3.T.C.1.b (T-C.js) | PASS WITH SHOULDS | RB-10, RB-11; NOTE RB-23 |
| 3.T.C.2.c (T-C.js) | PASS | none |
| 3.T.RA.1.c (T-RA.js) | PASS | none |
| 3.T.SS.1.a (T-SS.js) | PASS WITH SHOULDS | RB-18 |
| 3.T.SS.1.b (T-SS.js) | PASS | none |
| 3.T.T.1.b (T-T1.js) | PASS WITH SHOULDS | RB-15, RB-16 |
| 3.T.T.2.a (T-T2.js) | PASS WITH SHOULDS | RB-12, RB-13, RB-14 |
| 3.T.T.2.d (T-T2.js) | PASS | NOTE RB-24 |
| 3.T.T.4.b (T-T34.js) | PASS WITH SHOULDS | RB-17 |
| 3.F.F.1.b (F-FH.js) | PASS WITH SHOULDS | RB-20, RB-21, RB-22 |
| L-VOC-02.js, L-VOC-03.js, PT-1.js | PASS | NOTE in RB-25 |
| Parent-facing wording (skills.js, parents.js) | PASS WITH SHOULDS | RB-19, RB-20, RB-21 |

Both MUSTs are small text edits. Fixing RB-1 and RB-2 turns 3.L.V.2.c and 3.L.V.3.a into PASS WITH SHOULDS.
