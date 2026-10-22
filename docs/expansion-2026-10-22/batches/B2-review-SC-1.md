# B2 review SC-1: 3.T.SS.1.a and 3.T.C.1.b (author b2d)

**Role:** independent reviewer B2-SC-1, blind solver. I did not write these lessons. I read `B2-b2d-author-log.md` only after my blind answers were saved.
**Scope:**
- `js/data/lessons/T-SS.js`, the 3.T.SS.1.a block only (3.T.SS.1.b to 3.T.SS.2.b not reviewed);
- `js/data/lessons/T-C.js`, the 3.T.C.1.b block.

For each lesson I checked:
- the fifteen `core` items, the three `similar` items and the `addons`;
- Learn It and Teach;
- new passages p3 and p4;
- the six new figures `assets/figures/ss1a-c-*.svg` and `tc1b-c-*.svg`.

I also read `practice` and `test` to check separation. Neither lesson has a form B.

**Read-only:** I changed no lesson, code or figure. My scratch files are in `scratchpad/b2sc1/`. I ran no git. The server ran on port 8781 and has been stopped.

## 1. Blind solve

**Method.**
- `b2sc1/load.js` loads each lesson through a stub `PP.addLesson`.
- Before solving, I printed only the field *shapes*, not their values, so that I knew the schema without seeing keys.
- `b2sc1/blind.js` prints:
  - the passages each item uses, with figure labels, captions and alt text;
  - every core item in set order, resolving `{ref}` from `practice`;
  - every similar item.
- Choices, hot-text targets, order steps, match rows and dropdown options are shuffled with seed 20261022.
- It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`.
- Outputs: `b2sc1/blind-ss.txt` and `b2sc1/blind-tc.txt`.
- I saved my answers to `b2sc1/answers-ss.json` and `b2sc1/answers-tc.json` before any comparison.
- `b2sc1/cmp.js` then pulled the keys from the data and compared them.

**Result: 36 of 36 agree (100%).**
- 3.T.SS.1.a: 18 of 18 (fifteen core plus three similar).
- 3.T.C.1.b: 18 of 18.

**How blind it was (disclosure):**
- I did not open the lesson source for either block before saving my answers.
- I solved the figure items from the alt text. I rendered the SVGs to PNG afterwards (§4). Every rendered figure agrees with its alt text and with my answers.
- The lead's task message named two keys before I solved: "the 'makes the reader curious' key" (TC1b C04) and "its problem/solution key" (SS1a C13). Those two answers are therefore not blind. The clean blind sample is **34 of 34**.
- By chance, my seeded shuffle printed TC1b C08's four steps in key order. I ordered them from the arrows in the alt text, but that item's blind result is weak evidence.

**Close calls while solving.** All of them are still defensible.
- SS1a C09: "Text 1 tells a problem and how it was fixed" is tempting only if a child mixes the two texts up. The design is good: the problem/solution distractor is pinned to Text 1, which has no problem.
- SS1a C13: the time words (At first, Then, After that) make the sequence distractor tempting. See §3.4.
- TC1b C04: "makes the reader curious" is the only key I had to argue for. See §3.5.
- TC1b C07: the key does not cover the pump half of the diagram. See SHOULD-6.

| Lesson | Pos | Id | Key | Agree |
|---|---|---|---|---|
| SS1a | 1.1 | P5 (ref) | to add an interesting fact about peanuts in Georgia | yes |
| SS1a | 1.2 | P6 (ref) | which part of Georgia the peanut farms are in | yes |
| SS1a | 1.3 | P7 (ref) | Chapter 3: The Race to the Ocean | yes |
| SS1a | 1.4 | C04 | Harvest Time | yes |
| SS1a | 1.5 | C05 | after the peanuts finish growing / the order of a peanut's year | yes |
| SS1a | 2.1 | C06 | problem-solution / description / compare; sequence unused | yes |
| SS1a | 2.2 | C07 | how far the stops are / "Many families live on farms far from town." | yes |
| SS1a | 2.3 | C08 | Inside the Bookmobile | yes |
| SS1a | 2.4 | C09 | Text 1 steps in order; Text 2 what happened and why | yes |
| SS1a | 2.5 | C10 | Chapter 4 has a section…; the section … is part of Chapter 4 | yes |
| SS1a | 3.1 | C11 | the wood must dry before it is shaped… | yes |
| SS1a | 3.2 | C12 | p4:3:1 "thin handle and a thick barrel" | yes |
| SS1a | 3.3 | C13 | a trouble and the tries to fix it | yes (not blind) |
| SS1a | 3.4 | C14 | 2 / 12 | yes |
| SS1a | 3.5 | C15 | heading / map / caption / text box | yes |
| SS1a | S | S01, S02, S03 | order as tomatoes grow; alike and different; map with a key | yes ×3 |
| TC1b | 1.1 | P5 (ref) | p1:5:3, p1:5:4 | yes |
| TC1b | 1.2 | P6 (ref) | bold / text box / heading / speaker's voice | yes |
| TC1b | 1.3 | C03 | extra fact; the section makes sense without it | yes |
| TC1b | 1.4 | C04 | section is about the home; makes the reader curious | yes (not blind) |
| TC1b | 1.5 | C05 | Say, "Now let's find out how beavers use their tails." | yes |
| TC1b | 2.1 | C06 | gravity | yes |
| TC1b | 2.2 | C07 | How water gets from a tower to a home | yes |
| TC1b | 2.3 | C08 | pump → waits → down the pipe → into a home | yes (weak, see above) |
| TC1b | 2.4 | C09 | underlined words / play / search / Weather tab | yes |
| TC1b | 2.5 | C10 | NARRATOR: words spoken; sound off can still follow | yes |
| TC1b | 3.1 | C11 | labels point to each helper | yes |
| TC1b | 3.2 | C12 | p4:1:3 starting blocks | yes |
| TC1b | 3.3 | C13 | play button; underlined words | yes |
| TC1b | 3.4 | C14 | say "This next rule…"; pause and say it slowly | yes |
| TC1b | 3.5 | C15 | make listeners excited and ready for the big news | yes |
| TC1b | S | S01, S02, S03 | fun extra fact; play button; slow down and say… | yes ×3 |

## 2. Item checks (summary)

- **One defensible answer.** Every item has exactly one. No key is wrong.
- **Points.**
  - Every ms, ebsr and match item is worth 2.
  - Dropdowns are worth one point per slot (SS1a C05 and C14 are worth 2, C08 is worth 1).
  - Hot-text items are worth their pick: SS1a C12 and TC1b C12 are 1, and TC1b P5 is 2.
  - The four-step order item TC1b C08 is worth 2, as the new rule requires.
  - Totals: SS1a 22, TC1b 23.
- **Formats.**
  - Both lessons are at the limit of six `mc` items.
  - SS1a uses six formats and TC1b uses five.
  - Each has nine technology-enhanced items.
- **DOK.**
  - TC1b labels C03, C05, C11 and C14 as DOK 3. Those labels are fair to generous.
  - SS1a's DOK 3 labels are inflated. See SHOULD-2.
- **Grade 3 suitability.**
  - Nothing is kindergarten-like.
  - The new passages run 108 to 170 words. The author's readability run gives FK 3.6 to 4.5.
  - The contexts are school, community, sports, nature and family, all with Georgia settings.
- **Context domains.** SS1a uses six domains and TC1b uses four or five. No domain carries more than five items.
- **Passage load.** Each p1 carries four items, which is under the cap of seven. Each lesson uses three passages plus short stems.
- **Distinctness.** Every pair of the fifteen differs in at least two of the four §6 ways. The nearest pairs are:
  - SS1a C04 and C08 ("where does this belong"): different text, component and domain;
  - SS1a P7 and C14 (table of contents): different domain, and C14 adds nested sections;
  - TC1b C14 and S03 (spoken cue for importance): a similar item, which may mirror its core item.
- **Leakage to the check (form A).** None found.
  - No core or similar item uses p2 in either lesson, the form A passage (gopher tortoise; monarchs).
  - There is no form B.
  - Mixed sets R-INF-01 and PT-1 share no topic or key fact with the new text.
  - Two items rehearse the same logic as a check item, though not its answer: TC1b C10 and T9 (both test the [brackets] and NARRATOR: logic), and SS1a C13 and T1 (both problem and solution). This is acceptable practice (NOTE-6).
- **Gates.** I re-ran `node verification/check-content.js --all`: PASS, 0 failures. It warns that ten of fifteen core items in each lesson have no similar item, the same warning every core lesson has.
- **Live render.** I loaded `#play/SK:<code>:y`, `:y2` and `:y3` on port 8781 at a width of 390.
  - There were no page errors and no sideways scroll.
  - The water-tower figure renders as "Figure 1" with no caption and no "undefined" text (`player.js:35-38`), as C07 intends.

## 3. Findings

### MUST

**MUST-1. SS1a C07 Part B can be answered without the map: the Part A prompt names the one section that holds only one Part B choice, and none of the three distractors is plausible.**
- **Evidence.**
  - Part A asks how the map helps a reader understand "A Long Way to Town".
  - Of the four Part B choices, only the key ("Many families live on farms far from town.") comes from that section. The other three come from "Inside the Bookmobile" (two) and "Bookmobile or Library Building?" (one).
  - Two of those three repeat Part A's wrong answers (shelves, number of books), so a child who rejects them in Part A rejects them again in Part B.
  - A child can pick the Part B key by reading the section named in the prompt, with no map and no Part A reasoning.
  - This breaks the post-B1 evidence rule in spirit ("every place a hint names must hold at least two Part B choices"; here the place is named by the prompt itself). It also breaks §6 rule 5: distractors must be plausible misreadings.
  - The author log admits it ("easy once Part A is right").
- **Why the author's workaround fails.** The author left out other sentences from the same section because the map "arguably explains them too". That is true:
  - "The main library … is in … Millbrook" (the map shows the black square in Millbrook);
  - "For them, a trip … most of a Saturday" (the map shows distance).

  So a text-sentence Part B cannot be fixed by adding same-section sentences.
- **Fix (recommended).** Make Part B a map-evidence question: "Which part of the map best supports your answer to Part A?"
  - Key: the scale bar for 5 miles.
  - Distractors: the arrow that points north; the dashed route lines; the word PINE COUNTY at the top.
  - All four are real features of the figure, so every choice is plausible. The item now also tests the feature (map key and scale), which fits the official wording "text features (e.g., map …)".
  - Hint 3's Part B half then becomes "Ask which part of the map lets you measure how far apart two places are." That points to a strategy, not a key word.
  - If the lead prefers a text sentence for Part B: keep the key and use "Now the library comes to them once a week." (the map shows no days) and "To fix this problem, the county bought a bookmobile." (the map shows no buying) as two same-section distractors, plus one sentence from another section. That puts three choices in the named section.

**MUST-2. TC1b C06, hint 3 hands the child a test that only the key passes.**
- **Evidence.**
  - Hint 1 says a bold word "often names the big idea of its section, and the sentences around it tell what it means".
  - Hint 3 says: "Faucet is in the heading, but no sentence in the section explains what a faucet is… Test the other words the same way."
  - The choices are faucets, showers, gravity and pipe. Only gravity has a defining sentence ("Gravity is the force that pulls things toward the ground."), so applying hint 3's test to all four leaves only the key.
  - This fails both ladder checks in 04 §4.5:
    - with hint 1 and hint 2 alone (hint 2: "read all four sentences"), a child can write "gravity" without seeing the choices;
    - hint 3 alone leaves one option standing.
  - It is the commonest B0 fault.
- **Fix.**
  - Hint 3 should rule out one distractor for a reason that does not generalise. For example: "Faucets is the word in the heading, but the heading only names where the water ends up, not what makes it move. Check the others." Pipe and gravity both stay possible after that.
  - Trim hint 1 to "A bold word is a key word. It often names the big idea of its section." The part about "the sentences around it tell what it means" can stay in Teach.

**MUST-3. TC1b C04, hint 1 states the hard key.**
- **Evidence.**
  - Hint 1 says: "Ask what it tells you before you read, **and how it makes you feel about reading on**."
  - The second half is the content of the key "It makes the reader curious about the hidden door".
  - No other choice is about feeling or reading on, so hint 1 points straight at the one key a child would not find alone. With hint 1 and hint 2, a child can write down both keys ("it tells the topic; it makes me want to read on") without the choices.
- **Fix.** Use a neutral hint 1: "A heading is a small title over a section. Think about the jobs a heading can do for a reader." Keep hint 3 as it is (it rules out the lodge-definition distractor).

### SHOULD

**SHOULD-1. SS1a: Together P3 pre-teaches the evidence for set 1 item C04. Together P1 does not pre-answer C05.** (This is the lead's first concern.)
- **P3 and C04.**
  - P3's `how` (Practice Together, shown to the child) says: "Under 'Harvest Time,' a machine digs up the plants, the peanuts dry, and another machine picks them off."
  - C04 asks which section a drawing of upside-down plants drying in the sun belongs in. Its `how` step 2 is almost the same sentence as P3's step 1.
  - The answers differ in kind: P3's is a topic phrase, C04's is a section name. So this is not a pre-answer under the letter of the rule ("same rows, or the same setting/problem/solution answers").
  - But after P3, C04 reduces to "find the section the Together item just summarised".
  - Recommended fix: change the C04 drawing so its section is not the one P3 summarises. For example, a cut-away drawing of a peg pushing into the soil with a peanut at its tip belongs in "From Flower to Peanut"; "Harvest Time" stays the tempting distractor, since both show peanuts and soil.
  - The author log says the original flower-and-peg drawing collided with items in 3.T.T.2.a and 3.T.C.1.c. A peg-only cut-away with no flower label is a different picture, so it needs a fresh n-gram and key-fact check.
  - Alternatively, the lead can accept the overlap as near transfer.
- **P1 and C05.** P1 is about sequence *inside* "From Flower to Peanut" (first, next, then, finally). C05 is about why "Harvest Time" follows "From Flower to Peanut", using spring and fall. P1 primes the idea of sequence, but neither its answer nor its evidence (clue words) settles either of C05's blanks. No change needed.

**SHOULD-2. SS1a DOK 3 labels are inflated; on a fair reading the lesson has one DOK 3 item, and reading lessons need two.**
- **C05** (DOK 3) is a two-slot dropdown with weak alternatives: "before the seeds are planted" and "while the flowers are still open" in slot 1; "most to least important" and "two groups that are alike and different" in slot 2.
- **C13** (DOK 3) is "identify the structure of one paragraph". It is a good item, but naming a text structure is DOK 2 under Webb, even with tricky clue words.
- **C11** (why time order fits the section) is a fair DOK 3.
- **Fix.** Raise one item to real DOK 3. For example, make C05 slot 2 ask what would go wrong if the sections were swapped. Or add a DOK 3 transfer in set 3: "The author wants to add a section called 'Peanut Butter at the Store.' Where should it go, and why?" with reasons as choices. Otherwise, relabel C05 and C13 as DOK 2 and accept the shortfall.

**SHOULD-3. SS1a: the official wording's own examples are thin in the fifteen.**
- The official text (standards.js, p. 29) names "map, captions" and "cause/effect".
- Maps are covered well (P6, C07).
- **Captions** appear only as one row of C15. No item has the child judge or choose a caption for a figure. Form A T4 is a caption item, but a caption item on p3 or p4 would not give it away.
- **Cause/effect** appears only as one of two keys in C09.
- **Fix.** Make one existing feature item about a caption. For example, turn C08 into "Which caption fits Figure 1?" for the Pine County map, or add a caption choice to S03. Also give cause/effect a full item, for example a match row in C06 if a cause/effect section is added to p3, or a short stem in set 3.

**SHOULD-4. TC1b set 1: P6, the earlier ref, gives away C03's answer.**
- P6 (item 2) has the row "gives an extra fact set apart from the paragraphs", keyed to Text box. Its `why` says "A text box gives an extra fact set apart."
- C03 (item 3) asks why the teeth fact is in a "Did You Know?" box. Its key is "It is an extra fact, and the section makes sense without it."
- The post-B1 rule says "Earlier items must not give away later ones in the same set." C03 can be answered from the feature definition just practised, and its other three choices are clearly wrong.
- **Fix.** Make C03 a real DOK 3 application that a definition cannot answer: "Which fact from the article could ALSO go in the 'Did You Know?' box without hurting its section?" The choices would be the tail-slap warning (needed by "Tail Talk"), the dam slowing water (needed by "Busy Builders"), a new extra fact (key), and the door under water (needed by the lodge section). Alternatively, swap C03 to set 2 or 3.

**SHOULD-5. TC1b C15: its key rests on a rule that Teach does not state.**
- Teach point 7 now says only "In a video or a podcast, sounds and music can signal a change, too."
- C15's key is "to make listeners excited and ready for the big news", and its misconception line says "Some sounds are added to make listeners feel something".
- That is a new rule appearing first in an item (§6 rule 9). It is also the "effect" half of the official wording ("contribute to the overall purpose and effect"), so it deserves teaching.
- **Fix.** Extend point 7 to: "In a video or a podcast, sounds and music can signal a change, or make listeners feel excited or calm." Do not mention a drumroll in Teach.

**SHOULD-6. TC1b C07: the key does not fit the item's own standard, "a caption for the whole diagram".**
- The stem asks for "a caption that tells what the whole diagram shows", and the `how` says the caption "has to cover all of those parts and the arrows".
- The key, "How water gets from a tower to a home", covers arrows 2 and 3 only. Arrow 1, from the pump up into the tank, is outside it, and the pump distractor is rejected for being "only one part".
- It is still the best of the four choices, so this is not a second answer. But the stated rule and the key disagree.
- **Fix.** Use "How a water tower gets water to a home" or "How water goes up a tower and down to a home" as the key.

**SHOULD-7. TC1b C10, hint 1 restates both keys.**
- Hint 1 says: "A caption line shows in words what you would hear [key 2: sound off, still follow]. … a name with a colon shows who is talking [key 1: the words after NARRATOR: are spoken]."
- It is the Teach rule, but read with hint 2 it lets a child write both keys without the choices.
- **Fix.** Hint 1: "A caption line under a video has its own way of showing sounds and talking. Think about what the Teach page said about [brackets] and a name with a colon." Hint 3 is fine.

**SHOULD-8. Similar items: hint 1 or hint 2 names the key feature.**
- **SS1a S03.** Hint 1 says "Ask which feature shows where places are", and only "a map with a key" does.
- **TC1b S02.** Hint 2 asks "Which feature on the page has the lions in it?", and only the video does.
- **TC1b S03.** Hint 1 says "a speaker's voice and words do the job of bold". Only the key uses voice and words.
- Similar items are reviewed like core items (04 §4.7). **Fix:** use neutral strategy hints, for example "Each feature has its own job. Read the goal again: what does the reader need to see?" Put the specific ruling-out in hint 3.

### NOTE

**NOTE-1. SS1a C13: the problem/solution key is defensible.** (This is the lead's concern.)
- The paragraph has a trouble (jackets lost), a first try that fails (the sign; "But the jackets kept piling up"), a second try that works (the lost-and-found box), and a result.
- The time words order the *tries*. Teach point 4 now models exactly that, and the lesson's `coach.mixup` names it.
- The sequence distractor is worded "the steps for doing a job, in order". A paragraph about two attempts at a fix is not a job's steps, so that distractor cannot be defended.
- The other two distractors (compare; describe one place) are weak. A stronger fourth would be "what happened and why" (cause and effect). But "After that, most jackets found their way home" is the effect of the box, so adding it risks a second answer. Leave it as is.
- Problem/solution is within the official "organizational structures (e.g., cause/effect)". The grade 5 column names problem/solution, and the lesson's clue groups teach it.

**NOTE-2. TC1b C04: the "makes the reader curious" key is defensible once MUST-3 is fixed.**
- Teach point 1 now models it ("A heading with a fun or surprising word can also make you curious to read on").
- The heading's word "Secret" is the cue, and the official wording asks how features contribute to "purpose **and effect**".
- The three distractors (defines lodge; extra fact set apart; tells an order) are clearly not jobs of this heading. So the two keys are the only defensible pair, and no reasonable child loses a point to a subjective "it didn't make *me* curious".
- Wording nit: the choice says "the hidden door" while the heading says "Secret Door". "It makes the reader want to find out the secret" would echo the heading's own word and the `how`.
- Distractor A ("It gives an extra fact set apart from the section") is set 1 item P6's row wording, so P6 removes it in advance. That is acceptable, since it is a distractor, but a fresh distractor would be better.

**NOTE-3. TC1b: Together P9 does not pre-answer P6.** (This is the lead's concern.)
- P9's key is that "Listen closely. This next part is important" tells listeners the next fact matters.
- P6's speaker row is "slows down and stops for a moment right before an important fact". That is a different cue and a different answer.
- P6's speaker row is answered by **P6's own prompt** ("Three are in a printed book, and one is in a talk you listen to"), and its other three rows are recall of Teach definitions. As a reused Try item, P6 is closer to DOK 1 than its label of 2.
- P9 more nearly rehearses set 3 C14's choice "Say, 'This next rule is the one to remember'" and similar item S03. That is outside the set 1 rule.
- No change needed for the rule. Consider trimming P6 to its three print rows, as the author's split plan already suggests.

**NOTE-4. Fit to the official wording.**
- **3.T.SS.1.a** (p. 29): "Describe how texts are arranged to represent information and ideas using text features (e.g., map, captions) and organizational structures (e.g., cause/effect), referring to parts of texts using terms such as chapter or section."
  - All three parts are present:
    - features: P5, P6, C04, C07, C12, C15;
    - structures: C05, C06, C09, C11, C13;
    - chapter/section terms: P7, C10, C14, and in effect C04 and C08.
  - The "describe how … arranged" verb is best served by C05 and C11.
  - The gaps are the named examples (SHOULD-3).
  - This is still a broad code. The author's split list (§3 of the log) is accurate.
- **3.T.C.1.b** (p. 26): "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."
  - All five modes appear:
    - print: C03, C04, C06;
    - visual: P5, C07, C08, C11, C12;
    - digital: C09, C13;
    - auditory: C10, C15;
    - spoken: C05, C14 and P6's speaker row.
  - "Purpose and effect" appears in every set: C03 and C04; C06 and C07; C11 and C15.
  - Good fit.

**NOTE-5. Figures.** I rendered all six with Playwright Chromium (`b2sc1/*.png`) and checked them in the live player at a width of 390. Labels match the alt text and the items in every case. **No figure shows a person**, so the default for illustrated children (Black children) is not triggered, and none needs to change.
- `ss1a-c-bookmobile-map.svg`:
  - The alt text's claim that "each stop is more than two scale bars" holds. Measured from the SVG, the bar is 60 units = 5 miles, and the stops are 126 to 151 units from the library, or 10.5 to 12.6 miles.
  - The nearest stop, at 10.5 miles, only just clears ten.
  - Cosmetic: the north arrow overlaps the county's clipped corner.
- `ss1a-c-peanut-harvest.svg`: the "sun" label touches the left ray of the sun. This is cosmetic; move the label about 8px left.
- `tc1b-c-water-tower.svg`:
  - Circle 2 slightly overlaps the right tower leg.
  - Separate up and down pipes are a simplification, since many towers use one riser for both. That is fine for grade 3.
- `ss1a-c-bat-parts.svg`, `tc1b-c-pool-lanes.svg` and `tc1b-c-water-webpage.svg`: clean.
  - The pool figure correctly omits starting blocks, which C12 needs.
  - The T is at the wall end of each bottom line, and the flags hang near each end.

**NOTE-6. Practice rehearses the check's logic, but not its answers.**
- TC1b C10 and Together P10 use the same "[brackets] = sound, NAME: = speaker" logic as form A T9.
- SS1a C13 and form A T1 are both problem and solution.
- No answer, passage or key fact is shared. This is acceptable.
- Separately, SS1a C04's drawing has the same key fact (upside-down plants drying = harvest) as **3.T.C.1.c Together item SK-TC1c-P2**, a photo caption for Kenji's Slide 3. The SS1a p1 passage already shared that content before B2, so C04 adds no new leak. It does make C04 and TC1c-P2 near twins across lessons (§4.3 rule 4, "another lesson's practice"), which is another reason for the SHOULD-1 redraw.

**NOTE-7. Smaller item notes.**
- **SS1a C12.** It is solvable by matching words: only the key contains the label words handle and barrel. Hint 3's closing question ("which one names parts you can see?") comes close to restating that. Consider one distractor that names a part the diagram does *not* label, for example "Some bats have a small cup cut into the end of the barrel."
- **SS1a C05, hint 2.** "Each one names a time of year" plus the headings nearly settles slot 1 before the child reads the choices. Hint 3 then rules out one more option. This is acceptable, since slot 2 still needs thought.
- **TC1b C08.** With the arrows numbered 1 to 3, the order reduces to reading the numbers, plus placing the one step without an arrow. That is fine for DOK 2. Hint 3 settles one step, which is within the rule.
- **TC1b C11, hint 3.** It removes two distractors for one reason, leaving two choices. That is within the rule, and the author log flags it.
- **Teach length.** SS1a point 6 is now five sentences and TC1b point 7 is seven sentences. Both lessons were already over the five-point limit before B2, and the author added no points. Consider splitting them when the broad codes are split.
- **`like` mappings.** They are honest: SS1a S01 → C05, S02 → C06/C13, S03 → C15/P6; TC1b S01 → C03, S02 → C09/C13, S03 → C14/C05. Each set has a similar item except SS1a set 2's map and EBSR items.

**NOTE-8. Facts checked.** All claims are accurate for grade 3 except one that I could not confirm.
- **Bookmobiles.**
  - The first US bookmobile was a horse-drawn wagon: Mary Titcomb's Washington County Free Library book wagon in Maryland, which first went out in April 1905 (a mule-drawn South Carolina wagon from 1904 is also cited).
  - About 3,000 books is within the real range of 2,000 to 7,000.
  - Bookmobiles carry movies, audiobooks and computers.
- **Wooden bats.**
  - MLB requires one piece of solid wood (rule 3.02, with approved exceptions).
  - Ash and maple are the main woods.
  - The steps are billets, kiln drying, lathe turning, sanding and a clear coat.
  - Knob, handle and barrel are the right part names.
  - "Can break dozens of wooden bats in one season" is **not confirmed**. The sources give league-wide breakage (about once per game in 2008, more than 2,200 broken bats collected), not per-player figures. Safer wording: "A big-league player can use dozens of wooden bats in one season."
- **Water towers.**
  - Pumps refill the tank at night when demand is low.
  - Gravity supplies the pressure.
  - A large tank holds about a million gallons or more.
- **Peanuts.**
  - The digger pulls and inverts the plants, which dry in windrows for 3 to 7 days ("a few days"), and then a combine picks the pods.
  - Georgia is the top peanut state (about 49% of US production), with its farms in the Coastal Plain (south and southwest), as the P6 map shows.
  - The rotation benefit is real.
- **Pools.**
  - The T on the bottom line warns that the wall is close.
  - Backstroke flags hang 5 yards (or 5 m) from each wall.
  - Lane lines that "make the waves smaller" fits wave-quelling lane lines. The USMS page does not state it, but it is standard.

**Sources:**
- https://www.appalachianhistory.net/2018/04/first-bookmobile-in-country.html
- https://en.wikipedia.org/wiki/Mary_Lemist_Titcomb
- https://en.wikipedia.org/wiki/Bookmobile
- https://sabr.org/latest/springer-whats-in-a-bat-inside-the-process-of-bat-manufacturing
- https://www.stingerwoodbats.com/pages/our-process
- https://www.baseball-reference.com/bullpen/Baseball_bat
- https://www.publicradioeast.org/us/2013-08-03/how-major-league-baseball-curbed-its-broken-bat-problem
- https://www.mentalfloss.com/article/64577/how-do-water-towers-work
- https://www.ars.usda.gov/southeast-area/dawson-ga/national-peanut-research-laboratory/docs/peanuts-101-the-basics/page-8/
- https://www.georgiaencyclopedia.org/articles/business-economy/peanuts/
- https://www.usms.org/fitness-and-training/articles-and-videos/articles/what-are-the-markings-on-the-bottom-of-the-pool-for

## 4. Hint ladder and addons (audit summary)

- **Core hint 3s that settle one step or row** (all within the rule):
  - SS1a C15 (caption row);
  - TC1b C08 (the last step);
  - TC1b C09 (play-button row);
  - TC1b P6 addon (heading row).
- **Hint 3s that rule out one distractor with a reason and end neutrally** (all pass):
  - SS1a C04, C06, C08, C09, C10, C11, C14;
  - TC1b C03, C05, C07, C12, C13, C14, C15.
- **Failures:**
  - TC1b C06 hint 3 (MUST-2);
  - TC1b C04 hint 1 (MUST-3);
  - TC1b C10 hint 1 (SHOULD-7);
  - three similar items (SHOULD-8).
- **The Part B rule for C07.** Hint 2 names no text place, so the hint itself passes. The prompt is the problem (MUST-1).
- **Addons.** The hints and `how` for SS1a P1 to P7 and TC1b P1, P4, P5, P6, P8, P9 and P10 are accurate, and none reveals its key.
  - SS1a P6's hint 3 test ("is it on the map, and is it already in the words?") restates the question, so it is not a narrowing.
  - TC1b P10's hint 3 removes one option per blank and settles neither.
- **`how` accuracy.** Every `how` gives the key with correct reasoning. Most name a misconception.
- **Revised weak item TC1b P4.** Its new distractors are feature confusions, which is an improvement. It is correctly kept in Together and out of core.

## 5. Learn It and Watch Me

- **SS1a.**
  - Watch Me models sequence, compare and reading a map.
  - Problem/solution with time words (C13), placing a picture or sentence in a section (C04, C08), and chapter versus section (C10, C14) are modelled only in the extended Teach points and the new glossary entry (chapter). That is adequate, and the glossary definition matches C10's edge case.
- **TC1b.**
  - Watch Me models headings, bold with a glossary, and diagram labels with a caption.
  - The Teach examples model the web page and the caption line (the frog web page).
  - The heading's curiosity effect (C04) and a speaker announcing a new part (C05) are now in Teach.
  - The sound-for-effect idea in C15 is not (SHOULD-5).

## 6. Verdicts

| Lesson | MUST | SHOULD | NOTE | Verdict |
|---|---|---|---|---|
| 3.T.SS.1.a | 1 (MUST-1 C07 Part B) | 4 (SHOULD-1, 2, 3, plus SS1a S03 in 8) | NOTE-1, 4, 5, 6, 7, 8 | **CHANGES REQUIRED** |
| 3.T.C.1.b | 2 (MUST-2 C06 hint 3, MUST-3 C04 hint 1) | 5 (SHOULD-4, 5, 6, 7, plus S02 and S03 in 8) | NOTE-2, 3, 4, 5, 6, 7, 8 | **CHANGES REQUIRED** |

**Agreement rate:** 36 of 36 (100%). The fully blind subset is 34 of 34; C13 and C04 were named by the lead before I solved them, and TC1b C08's order was printed in key order by chance.

**Lead's specific concerns:**

| Concern | Answer | Finding |
|---|---|---|
| SS1a: Together P1 and P3 pre-answer C04 and C05? | P3 pre-teaches C04's evidence, though not its answer. P1 does not pre-answer C05. | SHOULD-1 |
| TC1b: Together P9 pre-answers P6? | No. P6's speaker row is given away by P6's own prompt instead. | NOTE-3 |
| SS1a C13: is the problem/solution key defensible? | Yes. | NOTE-1 |
| SS1a C07 Part B | It is a giveaway. | MUST-1 |
| TC1b C04: the "makes the reader curious" key | Defensible, but hint 1 gives it away. | NOTE-2 and MUST-3 |
| Fit to the official wording | Good for both. SS1a's named examples (captions, cause/effect) are thin. | NOTE-4 and SHOULD-3 |
