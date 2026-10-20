# Practice Test 1: adversarial review B

Scope: `js/data/sets/PT-1.js` (24 items, 31 points), checked against SPEC §5 (schema and scoring), §5d (test forms) and §6 (content rules), plus `js/data/standards.js`. PT-1.js was not edited.

**What I checked mechanically**
- **References.** Every hottext `targets`/`answer` ref resolves with the same logic as `PP.sentenceAt`, and every answer is inside its targets. Every EBSR Part B choice is word for word from its passage.
- **Paragraph numbers.** Child-visible numbers in prompts and clues are correct: p1 ¶4, ¶6, ¶9, ¶11; p2 ¶1, ¶3, ¶4, which skip headings and the caption as `visibleLabel` does.
- **Standards.** Every `std` code exists in `standards.js` and is in the §2 assessed list. GUM codes are only M or R rows.
- **Header totals.** 24 items, 31 points, 7 two-point items, and DOK 3 / 18 / 10. All verified.
- **Length and level.** Word counts are p1 531 (literary, 250–600), p2 339 (informational, 200–500) and p3 118 (revising draft). Flesch-Kincaid grades are about 3.1, 4.4 and 3.9, so they fit grade 3.
- **Content checker.** `node verification/check-content.js --all` passes. PT-1 is **not** in `js/data/manifest.js`, so the default run does not check it (see X2).
- **Scoring.** I read `js/engine/items.js`, so the partial-credit and Help-step notes reflect real engine behavior.

**Facts checked**
- **Leaves (p2).** The facts are accurate:
  - Carotenoids are masked by chlorophyll all summer.
  - Chlorophyll breaks down and food-making stops.
  - Anthocyanin (red) is made in fall from trapped sugars.
  - Warm sunny days plus cool nights give the brightest reds, and "warm, cloudy, rainy weather" gives "less red coloration". This supports the PT-1-14 key.
  - A special layer of cells "gradually severs" the leaf ([USDA Forest Service, *Why Leaves Change Color*](https://fs.usda.gov/Internet/FSE_DOCUMENTS/stelprd3817419.pdf)).
  - Dropping leaves "helps the tree to retain water" in winter ([Better Planet Education, *Why do trees lose their leaves in winter?*](https://betterplaneteducation.org.uk/factsheets/leaves-why-do-trees-lose-their-leaves-in-winter)).
  - Sweetgum leaves are "star-shaped" and turn "bright red, purple, yellow or orange" ([NC State Extension, *Liquidambar styraciflua*](https://plants.ces.ncsu.edu/plants/liquidambar-styraciflua/common-name/sweetgum-tree)).
- **Owls (p3 and PT-1-17).** The facts are accurate:
  - Owls turn their heads up to 270° each way, and their eyes are "tubular" and hard to move ([Live Science](https://www.livescience.com/26771-how-owls-rotate-heads.html)).
  - The facial disc channels sound to the ears, and asymmetric ear openings pinpoint where a sound comes from ([Stanford Birds, *How Owls Hunt in the Dark*](https://web.stanford.edu/group/stanfordbirds/text/uessays/uHow_Owls_Hunt.html); [Cornell All About Birds, Great Gray Owls and voles under snow](https://www.allaboutbirds.org/news/?p=61361)).
  - Owls can find prey under snow by sound alone (All About Birds, above).
  - Silent flight comes from a comb-like leading edge, a soft trailing fringe and a velvety surface ([Audubon](https://www.audubon.org/magazine/silent-flight-of-owls-explained)). Sentence 8 ("the edges … are soft") is a fair simplification for grade 3.

Severity key: **MUST** means a wrong key, two defensible answers, a factual error or a broken reference. **SHOULD** means a real quality, spec or fairness problem. **NIT** means polish.

---

## p1 "The Blue Pitcher"

**SHOULD | PT-1-1 to PT-1-6 (passage p1)**
- **Problem:** The narrator is first named in paragraph 11 ("Thank you for telling me, Malik"). Items 1–6 ask about paragraphs 4, 6 and 9 and call him "Malik" (or "he", in the PT-1-1 choices). A child who answers while reading, or skims, meets a name they have not seen and may think Malik is a different character. Real Milestones items use a name the passage has already established.
- **Fix:** Name him in paragraph 1, for example: "Every Saturday, I helped my Aunt Bea in her pottery shop on Mill Street. 'My best helper, Malik,' she called me."

**SHOULD | p1 ¶1 (passage wording)**
- **Problem:** "She made bowls, mugs, and plates on a **spinning wheel**". To an 8-year-old, a spinning wheel is the fairy-tale tool for spinning thread. The story then says only "the wheel" (¶4, ¶6, ¶13, ¶14, and PT-1-2 and PT-1-7 choices), so a child may never picture pottery.
- **Fix:** Use "on a **potter's wheel** in the back room".

**NIT | p1 ¶11 vs ¶12–14 (story logic)**
- **Problem:** Aunt Bea says "A chipped pitcher can be fixed", but then nobody fixes it, and she makes a new one. A literal child may see a contradiction. This also weakens the PT-1-6 key ("Aunt Bea thinks the chip can be fixed").
- **Fix:** Use "A chip in a pitcher is a small thing, but broken trust is much harder to mend." Then update the PT-1-6 key (see below) and the PT-1-7 Part B text and `why` to match.

**SHOULD | PT-1-1 (clue leak)**
- **Problem:** The clue asks "Is Malik rushing, or is he thinking hard about a choice before he acts?" That is a two-way choice, and the second half paraphrases the key ("not sure what to do"). The clue gives the answer (§6.7).
- **Fix:** Use "Read the sentences right after this one. What does Malik do while he is holding the pitcher, and what does he decide?"

**NIT | PT-1-2 (clue does the narrowing)**
- **Problem:** "What happens right after Malik hurries? Then check paragraph 1 to see how Malik feels about his job." The first part leads straight to the key, and the second rules out choice B. That makes it a Help-2/Help-3 step, not a strategy.
- **Fix:** Use "Ask yourself what the sentence causes. Does it change what happens next in the story?"

**SHOULD | PT-1-3 (keyword leak)**
- **Problem:**
  - The prompt says "feels bad", and the clue says "Look for the one that tells what he FEELS inside."
  - The key is the only target with "feeling" in it ("a heavy **feeling** sat in my stomach"). The other five targets are plain actions.
  - So a child can match the word without reading.
  - The prompt also asks "how does he feel?" and then answers its own question ("feels bad").
- **Fix:**
  - Add a target that also names a feeling but does not show guilt. The best option is "p1:9:3" ("'Wait,' I said, and my voice shook.").
  - Reword the prompt: "Which sentence best shows that Malik is troubled by what he did after he hides the chip?"
  - Reword the clue: "Look for a sentence that shows what is going on inside Malik, not only what his hands are doing."

**SHOULD | PT-1-5 (instruction does not match the UI)**
- **Problem:** The prompt says "Drag the first event to the top." The order control is tap-to-place, and the pick-note right under it says "Tap the choices in order". In Test mode, with no help, a child may try to drag and get stuck. No other set says "Drag".
- **Fix:** Use "Put these events from the story in the order they happen." and let the default tap instruction stand.
- **Checked:** The order key itself is unambiguous. All five events are in a causal chain in different paragraphs (¶2, ¶4, ¶6, ¶9, ¶14), and none happen at the same time. Partial credit ("all but two in place", so ≥3 of 5) is sensible here, because any single swap leaves 3 in place.

**SHOULD | PT-1-6 (clue leak and weak contrast)**
- **Problem:**
  - The clue sends the child to "what Aunt Bea says in paragraph 11", which contains the key's exact phrase "can be fixed". That is a keyword match.
  - The key's two halves are not on the same axis. Malik's fear is about losing his job, while Aunt Bea's "view" is a general saying about pitchers. Her real view is that honesty matters more than the chip.
  - The fix to ¶11 above would also break the key's wording.
- **Fix:**
  - Re-key to: "Malik thinks the chip is a reason to hide what happened, but Aunt Bea thinks the truth matters more than the chip."
  - Keep distractors B and D.
  - Change the clue to "Find what Malik is afraid of in paragraph 6. Then find what Aunt Bea cares about most when she learns the truth."

**NIT | PT-1-6 (`std`)**
- **Problem:** 3.T.C.2.a is "describe the narrator's perspective and distinguish it **from one's own**". This item contrasts the narrator with another character.
- **Fix:** Keep 3.T.C.2.a but add 3.T.T.1.c (characters' thoughts and feelings), or reword the item to contrast Malik's view with the reader's.

**NIT | PT-1-7 (clue)**
- **Problem:** "Think about … what Aunt Bea says about that choice" points to the Part B key.
- **Fix:** Use "The central message is the big lesson of the whole story. What does the main character learn by the end?"
- **Checked:**
  - Part A has one defensible key.
  - The Part B key is the best of the four choices. ¶14:3 ("telling the truth had been worth it") would be stronger but is not offered, so there is no second key.
  - Partial credit (1 for Part A only) follows SPEC.

## p2 "Why Leaves Change Color"

**MUST | PT-1-13 (match: a second defensible one-to-one matching)**
- **Problem:** Rows 1 and 2 can be swapped and still be supported by the text:
  - **Row 1 → "Hidden yellow and orange colors can be seen."** The section heading is literally "**Shorter Days, Brighter Colors**", and ¶4 runs shorter days → less sunlight → chlorophyll breaks down → hidden colors seen. So "the days get shorter" causes the colors to show.
  - **Row 2 → "A tree slows down its food making."** ¶2 says chlorophyll "helps them do this job" of making food, so a child can infer that losing chlorophyll slows food making. That is also true in real science.
- **Impact:** This swap leaves 2 of 4 rows right, which scores 1 of 2 under the one-to-one rule. A careful reasoner loses a point for a defensible reading.
- **Related problem:** The clue says "read the sentence right after it", which is wrong for row 1 (cause and effect are in the same sentence, ¶4:2) and row 3 (the effect is two sentences later, ¶6:4).
- **Fix:**
  - Replace row 1 so its causal chain does not overlap the chlorophyll chain: row "Fall has sunny days and cool nights." → col "Red leaves become especially bright."
  - Rows 2–4 stay as they are.
  - Change the clue to "Find each cause in the article. Then read on to find what it makes happen."

**SHOULD | PT-1-14 (Part A: a near-defensible distractor)**
- **Problem:** Choice C, "They would likely turn yellow instead of turning red", is a reasonable over-inference:
  - ¶3 says every leaf has hidden yellow and orange.
  - ¶5 says red is **made** in fall and helped by sunny days.
  - So a strong reader can argue that with few sunny days less red is made and the yellow shows. USDA says the same: cloudy falls mean "less red coloration".
  - The key ("less bright") is still the most directly supported, but C is closer than a test distractor should be.
- **Fix:** Replace C with a clearly unsupported direction: "Their red color would likely be brighter than usual." This is the classic reversal misreading.

**SHOULD | PT-1-12 (caption with no picture; unlabeled on screen)**
- **Problem:**
  - The caption describes "The star-shaped leaves of a sweetgum tree", which implies a photo the child cannot see.
  - `player.js` strips the "Caption: " prefix and shows only an italic grey box, yet the prompt says "Read the caption". In Test mode the child has to guess which text is "the caption".
  - The clue ("pick the choice that matches what the caption itself says, not what the paragraphs say") rules out all three distractors, since `why` admits they are all "ideas from the paragraphs". So the clue is the answer.
  - Distractor A ("explains why chlorophyll breaks down") is the only one from the caption's own section. C and D come from other sections and are easy to rule out (§6.8).
- **Related finding:** This repeats review-reading-A's R-INF-01 caption finding.
- **Fix (pick one):**
  - (a) Render captions with a visible label and a simple inline SVG of a sweetgum leaf.
  - (b) Recast it as a labeled **"Did You Know?" box** (a text feature that needs no picture), change the prompt to "How does the 'Did You Know?' box help the reader?", and change the clue to "Ask: what does this box add that the paragraphs do not?"

**SHOULD | PT-1-11 (distractors are not plausible)**
- **Problem:** "compares Georgia trees with other states", "a problem that people solve" and "steps to collect fall leaves" are about nothing in the section. A child can rule them out without knowing text structures (§6.8).
- **Fix:** Use structure-word misreadings:
  - "It describes the parts of a leaf in order from the stem to the tip."
  - "It tells the events of one tree's life in the order they happened."
  - "It compares how leaves look in spring with how they look in summer."
  - Do **not** use "compares yellow colors with red colors". ¶5 does contrast them, so that would be a second key.

**SHOULD | PT-1-10 (clue gives the answer)**
- **Problem:** "This question asks only about yellow and orange, not red or purple" removes C and D. "Read paragraph 3, then read paragraph 4. You need one detail from each" points to the only two sentences the keys paraphrase. Together they leave nothing to reason about.
- **Fix:** Use "Find the section that tells why the yellow and orange appear. Which details work together to explain it?"
- **Checked:** Keys and distractors are clean. Partial credit (1 correct + 1 wrong = 1) follows SPEC and makes sense.

**NIT | PT-1-8 (clue keyword)**
- **Problem:** "Read … the last paragraph" points to "the tree is getting ready for winter", which the key repeats ("as trees get ready for winter").
- **Fix:** Keep "read the headings" and drop "and the last paragraph", or paraphrase the key's ending ("as trees prepare for the cold season").

**NIT | PT-1-9 (passage context unused)**
- **Problem:** This is a pure suffix item, and the stem sentence adds nothing to the answer.
- **Fix:** This is acceptable for 3.L.V.2.a. Optionally pick a less obvious affixed word from p2 (for example "**un**usual" if added, or "re" + word).

**NIT | PT-1-14 (Part B keyword)**
- **Problem:** The Part A prompt says "sunny" and "red". The Part B key is the only choice with "sunny" and "reds", and choice C is the only one with "maples".
- **Fix:** Partly inherent. Optionally add a Part B distractor with "sun", for example ¶2:2 "During spring and summer, they use sunlight, water, and air to make food for the tree."

## p3 "Hunters of the Night" (revising)

**SHOULD | PT-1-16 (prompt is false as worded)**
- **Problem:** "**One** sentence in Ava's draft does not belong because it is not about how owls hunt." Sentence 9, "That is what I know.", is also not about how owls hunt. It is visible in the passage but left out of the targets. A careful child sees two sentences that fit the description.
- **Fix:** Use "Which sentence in the body of Ava's draft (sentences 1–8) does not belong because it is not about owls?"
- **Related issue:** The clue's test ("is it about owls?") is easier than the prompt's test ("how owls hunt"), so make them match.

**SHOULD | PT-1-15 (keyword leak)**
- **Problem:** The prompt says "link it to the paragraph before", and the clue says "Paragraph 2 is about how owls **see**". The key, "Besides **seeing** well,", is the only option that names that content. "In conclusion," is not a plausible start for a body paragraph (§6.8).
- **Related issue:** The `why` says "For example would mean sentence 6 is an example of sentence 4". It would really mean an example of what came just before.
- **Fix:**
  - Use options "Besides seeing well," / "For example," / "Instead," / "As a result,".
  - Make the clue "Think about what paragraph 2 and paragraph 3 each tell. Which words show that a new idea is being added?"
  - Fix the `why`.
  - Do not add "Also," or "In addition,", because each would be a second key.

**SHOULD | PT-1-18 (clue rules out every distractor)**
- **Problem:** "It does not add a new fact, start the list over, or switch to the writer's opinion" names exactly the flaw of each of the three distractors. The key also echoes the title ("hunters of the night").
- **Fix:** Use "A strong conclusion wraps up the main idea of the WHOLE draft. Reread sentence 1 and each paragraph, then choose the sentence that sums them up."

**NIT | PT-1-17 (`std`)**
- **Problem:** 3.T.RA.1.c is "summarize information from at least two credible sources". The item uses one library book and asks the child to select support, not summarize.
- **Fix:** Keep 3.T.T.2.d only, or change the prompt to two sources ("Ava found these facts in two library books…").
- **Checked:** All five facts are accurate (see sources above), no distractor is about hearing, and partial credit follows SPEC.

## Language (standalone)

**SHOULD | PT-1-19 (clue gives slot 1)**
- **Problem:** "some animal names do not add an ending at all to mean more than one". Only "sheep" adds no ending, so the clue answers the first blank.
- **Fix:** Use "Some nouns name more than one in an unusual way. Say the sentence aloud with each choice. Which one sounds right after 'Twelve'?"
- **Checked:** Both keys are the only grammatical options, and partial credit (1 per slot) follows SPEC.

**NIT | PT-1-19 (slot 2 has 3 options)**
- **Problem:** Slot 2 has three options while slot 1 has four. After Help 2, slot 2 is a coin flip.
- **Fix:** Add a fourth, "Kendra" ("while Kendra puppy …").

**NIT | PT-1-23 (prompt contains a choice)**
- **Problem:** "Which word BEST shows how Leo **drank** the water?" "Drank" is also a choice, which is odd, because it cannot show how he drank.
- **Fix:** Use "Which word BEST completes the sentence?" and keep "drank" as the general-word distractor. That is the standard shades-of-meaning design.

**NIT | PT-1-20, PT-1-21 (DOK)**
- **Problem:** Choosing the correctly capitalized or punctuated sentence is usually DOK 1, not 2.
- **Context:** Changing them would raise DOK 1 to 5 points (16%), above the 5–10% band. Leave them, or lower PT-1-19 to one slot.
- **Fix:** No change required. Note the trade-off in the header.

PT-1-22 and PT-1-24 are clean. PT-1-22 has one key, a good attractor ("books"), and "sitting" correctly cannot be the main verb. PT-1-24 includes "tree" in the paragraph, so distractor B is a fair trap.

## Cross-cutting

**NIT | X1 (blueprint balance)**
- **Problem:** Points split Interpreting 21–25 vs Constructing 6–10, depending on where the 3.L.GC.1 items count.
- **Context:** The blueprint without the 8-point writing task is 34:18 (65:35). If GC.1 counts as Constructing, PT-1 is 68:32, which is fine. If it counts as Interpreting, PT-1 is 81:19.
- **Fix:** State in the header which domain the GC.1 items count toward. Consider one more revising item for p3 (for example, combining sentences 7 and 8 with a conjunction, 3.T.SS.1.c).

**NIT | X2 (manifest)**
- **Problem:** PT-1 is not in `js/data/manifest.js`, so the default `check-content.js` run skips it. It passes only with `--all`.
- **Fix:** Add it to the manifest, or have the quality gate run `--all`.

---

## Counts

| Severity | Count |
|---|---|
| MUST | 1 |
| SHOULD | 14 |
| NIT | 13 |
| **Total** | **28** |

**MUST**
- **PT-1-13:** Rows 1 and 2 can be swapped and still be defended. "Shorter Days, Brighter Colors" supports shorter days → colors show, and ¶2 supports chlorophyll breakdown → less food making. A careful child is held to 1 of 2 points. Fix: replace row 1 with "Fall has sunny days and cool nights" → "Red leaves become especially bright".
