# Reading sets: adversarial review B

Scope: R-LIT-01, R-LIT-02, R-POE-01, R-INF-01, R-INF-02, R-OPN-01, checked against SPEC §5 (item types, scoring, Help 2) and §6 (content rules). The set files were not edited.

**What I checked mechanically:**
- I resolved every `targets` and `answer` reference with the same logic as `PP.sentenceAt`. All resolve, and every answer is inside its targets.
- Every Part B choice and every quoted match row is verbatim from its passage.
- All `std` codes are in the §2 assessed list, and each one fits its item.
- `verification/check-sets-lit.js` and `check-sets-inf.js` both pass with 0 failures.
- The scoring and Help 2 code in `js/engine/items.js` was read so the partial-credit and leak checks below reflect real behavior.

Severity key: **MUST** = wrong answer, two defensible answers, factual error, or broken reference. **SHOULD** = real quality, spec or fairness problem. **NIT** = polish.

---

## R-LIT-01 "Deja's Kite"

No MUST findings. The kite physics holds up: a longer tail adds drag and stops spinning.

- **SHOULD | R-LIT-01-q6 (Part B)**
  - **Problem:** The key, "It's our kite now.", is the only line of dialogue and the only choice about Deja's thinking. The three distractors ("Theo grinned." / "It did not spin." / "Theo let go.") are bare action lines that no reader would pick. That breaks §6.8 ("plausible misreadings… same style as the key"), so Part B is a giveaway once Part A is right.
  - **Fix:** Use dialogue distractors from the ending that do NOT show Deja's change, for example `"Now!" she called.` and `"We did it!" Theo shouted.`, and keep "It did not spin." Do not use "Deja handed him the string." or "Together they tied the scarf…", because both would also support Part A.
- **NIT | R-LIT-01-q8**
  - **Problem:** The second key, "It is important to say sorry when you hurt someone", is something Deja *does* in paragraph 11. The story never shows her *learning* it, since she apologizes without being told to. A strict teacher could argue it is not a lesson she learns.
  - **Fix:** Reword the key to "Being unkind can hurt someone who is trying to help," which paragraphs 9–10 show her realizing ("Her stomach twisted… she had been unkind to him").
- See also cross-cutting **X1** for the R-LIT-01-q5 match partial-credit trap.

---

## R-LIT-02 "Half-Moon Cakes" (Korea)

**Cultural check:** I found nothing careless.
- Chuseok as a harvest thanksgiving, making songpyeon together, the half-moon shape, steaming on pine needles, a sesame-and-honey filling, sitting on the floor at a low table, visiting a grandparent's home village and moon-viewing are all accurate ([Maangchi, Songpyeon](https://www.maangchi.com/recipe/songpyeon); [Korea Times, Enjoy Flavors of Songpyeon](https://www.koreatimes.co.kr/amp/lifestyle/travel-food/20091001/enjoy-flavors-of-songpyeon)).
- Min-ji giving the best cake to Grandmother is a nice, culturally fitting touch.

- **MUST | R-LIT-02-q5 (order)**
  - **Problem:** Grandmother steams cakes **twice**: paragraph 7 for the first batch and paragraph 12 ("The second time Grandmother steamed them…"). The step "Grandmother steams the cakes on pine needles." does not say which batch. A careful child can defend this order: hurries → sees cakes split → Grandmother's advice → **Grandmother steams the cakes** → second batch whole. That puts the steam step at position 4, as the second steaming. Scored against the key, it gets only 2 of 5 in place, which is **0 points**. This is the "same event happens twice" trap.
  - **Fix:** Anchor the step: "Grandmother steams Min-ji's first batch of cakes." (or "…steams the first tray of cakes on pine needles.").
- **SHOULD | R-LIT-02-q3 (hottext)**
  - **Problem:** The prompt already says "in paragraph 8", and all four targets are in paragraph 8. Help 2 for hottext ("Point to the paragraph") therefore shows "Look in paragraph 8." and rules out nothing, so the child gets no narrowing.
  - **Fix:** Drop "in paragraph 8" from the prompt ("…when she first sees her steamed cakes") and add targets from paragraphs 7 and 10, such as `p1:7:1`, `p1:7:3` and `p1:10:2`. Do **not** add `p1:9:1` ("They look terrible," I mumbled), because it also shows her feeling and would be a second defensible answer.
- **SHOULD | R-LIT-02-q7 (Part B)**
  - **Problem:** The key is the only line of advice or dialogue. The distractors ("Grandmother smiled but said nothing." / "My pile grew like a mountain." / "The kitchen filled with a clean, piney smell.") are not plausible support for any Part A choice (§6.8).
  - **Fix:** Use distractors that support the *wrong* Part A choices, so a misreading is rewarded with a matching wrong Part B. Examples: `"Look how many I made!" I said, holding up my tray.` supports "Making many things is better…", and `Then I made another, and another.`. Keep one scene sentence.
- **NIT | passage p1:3:2**
  - **Problem:** Songpyeon are made "on the night before" Chuseok. Chuseok falls on the 15th day of the 8th lunar month, which is the full moon, so on the eve the moon is nearly full, not full. The story says "the full moon was rising".
  - **Fix:** Change it to "a big, bright moon was rising".
- **NIT | passage p1:2:2**
  - **Problem:** "Each one has a sweet filling of sesame seeds and honey" overgeneralizes. Common fillings also include beans, chestnuts and pine nuts ([Maangchi](https://www.maangchi.com/recipe/songpyeon)).
  - **Fix:** "Grandmother fills hers with sweet sesame seeds and honey."

---

## R-POE-01 "Fireflies" + "The Firefly Jar"

**Meter and rhyme:** The poem is AABB in every stanza and works as iambic tetrameter, with "evening" and "fireflies" read as two syllables. I found no rhyme failures.

- **SHOULD | passage p2 "The Firefly Jar"**
  - **Problem:** It is 124 words. SPEC §6.2 sets literary text at 250–600 words. The checker reports the count but does not enforce it. It is also a single 10-sentence paragraph with two speakers' dialogue inside it, which is not how a grade 3 story is printed and makes paragraph references useless.
  - **Fix:** Extend it to about 250 words and break it into paragraphs, starting a new paragraph for each line of dialogue ("Got one!", "That's better").
- **SHOULD | R-POE-01-q7**
  - **Problem:** The key says "the speaker **never** catches one." The poem says only "I do not need a jar **tonight**", and "tonight" suggests the speaker may have used a jar on other nights. "Never" goes beyond the text, and a picky reader will reject the key.
  - **Fix:** "Marcus catches a firefly before he lets it go, but the speaker does not catch any."
- **SHOULD | R-POE-01-q4 (hottext)**
  - **Problem:** The prompt says "…a metaphor to describe **the field**". Only one target line contains the word *field*, so the item is answered by word matching, not by knowing what a metaphor is. On top of that, q3 in the same set quotes this exact line and gives its meaning ("The field is so full of lights that it looks like the night sky"), which answers q4 before the child reaches it.
  - **Fix:**
    - Reword the prompt so the target word is not in it: "Select the line in stanza 3 that compares the place where the fireflies are to something far away in the sky."
    - Better, ask for the metaphor without a topic, and keep a real decoy such as "Each little spark…".
    - In q3, swap the "sky of stars" row for "And count the stars that dance on air." → "The fireflies' lights seem to move like dancers."
- **SHOULD | R-POE-01-q6 (clue)**
  - **Problem:** The clue says "The poem gives a hint too: look at stanza 2." Stanza 2's "They blink their lights" is a near synonym of the key, "flashing on and off". Help step 1 therefore hands over the answer, which breaks §6.7.
  - **Fix:** "The tiny lights are fireflies. Picture what a firefly's light does on a summer night, then choose the meaning that fits."
- **NIT | R-POE-01-q3**
  - **Problem:** The meaning "**One** firefly's light floats slowly past the speaker." is paired with "**Each** little spark that drifts by me." Because "each" does not mean "one", a child may hesitate.
  - **Fix:** "Each firefly's light floats slowly past the speaker." Also see **X1** (partial credit).
- **NIT | passage p1 stanza 1 vs stanza 3**
  - **Problem:** The setting is "The yard grows dark" in stanza 1 but becomes "The field becomes a sky of stars" in stanza 3, so the place changes without explanation.
  - **Fix:** "The yard becomes a sky of stars," which keeps the meter. Adjust q3, q4 and their `why` text to match.
- **NIT | R-POE-01-q5 (Part B)**
  - **Problem:** All three distractors are scene-setting lines that no reader would take as feelings about fireflies.
  - **Fix:** Use "Then, one by one, the fireflies glow" and "They blink their lights above the grass" as distractors. Avoid "And count the stars that dance on air", because it could support "enjoys watching".

---

## R-INF-01 "Turtle Tracks on Georgia's Beaches"

**Facts checked against GA DNR:** nesting at night from early May to mid-August, incubation of about 60 days, hatchlings leaving the nest at night, dawn nest patrols, and warm sand producing females ([GA DNR loggerhead fact sheet](https://gadnrle.org/sites/default/files/wrd/pdf/fact-sheets/loggerhead_sea_turtle_2011.pdf); [CT DEEP loggerhead fact sheet](https://Portal.CT.gov/-/media/deep/wildlife/pdf_files/outreach/fact_sheets/lhttlpdf.pdf)). All are accurate. The heading and caption references (array index vs visible paragraph) are correct.

- **SHOULD | R-INF-01-2 (clue)**
  - **Problem:** The clue says "Look for the sentence that tells what the hatchlings move **TOWARD**." Of the seven targets, only the key (`p1:8:3`) contains "toward", so the capitalized word works as a search term for the answer (§6.7).
  - **Fix:** "Look for the sentence that tells what the hatchlings use as a guide. A sentence about getting lost is not the same as a sentence about finding the way."
- **NIT | passage p1:3:4**
  - **Problem:** The passage says "about one hundred eggs". GA DNR gives 50–170 eggs, averaging about 120 per nest.
  - **Fix:** "more than one hundred eggs". Keep "golf ball". Most sources say ping-pong ball, but that is a trademark (§6.9), and the sizes are about the same.
- **NIT | passage p1:1:1**
  - **Problem:** "barrier islands" is not glossed, and grade 3 readers have no context for it.
  - **Fix:** "…on Georgia's barrier islands, the long, sandy islands along the coast."
- **NIT | R-INF-01-1 (why)**
  - **Problem:** The `why` says "The other choices are true", but distractor 2 adds "**far out** in the **warm** ocean", which the article never says.
  - **Fix:** Trim the distractor to "…spend almost their whole lives swimming in the ocean."
- See also **X1** (R-INF-01-4), **X3** (R-INF-01-3) and **X4** (R-INF-01-5).

---

## R-INF-02 "The Okefenokee Swamp" (paired)

**Facts checked:**
- These are accurate: Native American occupation, swampers on the islands from the 1850s, the Suwanee Canal Company (1891–97, draining and logging, failed), Hebard Cypress railroads and logging (about 1909–1927), the 1937 refuge covering most of the swamp (about 396,000 of about 448,000 acres), the "trembling earth" name with a hedge, and buoyant peat that shakes ([New Georgia Encyclopedia, Human History of the Okefenokee Swamp](https://www.georgiaencyclopedia.org/articles/geography-environment/human-history-of-the-okefenokee-swamp/); [USFWS, About Okefenokee NWR](https://www.fws.gov/refuge/okefenokee/about-us); [UGA River Basin Center](https://rivercenter.uga.edu/the-okefenokee-swamp/)).
- I could not confirm "more than two hundred kinds of birds" on the official pages I fetched. It is a common figure and low risk, but cite a source for it.

- **SHOULD | R-INF-02-3 / passage p1:5:3**
  - **Problem:** "Since then, **young** cypress trees have slowly begun to regrow." Young trees are growing for the *first* time, and it is the forest that regrows. A literal reader can defend the distractor "for the first time" from this very sentence. The prefix frame keeps "again" as the keyed answer, but the passage sentence works against it.
  - **Fix:** "Since then, the cypress forests have slowly begun to regrow."
- **SHOULD | R-INF-02-4 (hottext)**
  - **Problem:** `p1:4:2` ("They cut down many of the swamp's giant old cypress trees and sold the wood.") is a selectable target and is the *cause* of the worry. A teacher could argue it explains WHY the refuge was made. "Best" and the clue do favor `p1:5:1`, but this is the classic two-causes trap.
  - **Fix:** Limit the item to paragraph 5: prompt "Read paragraph 5…", with targets `p1:5:1`–`p1:5:3`. Or make the key sentence carry the chain: "Because so many trees were gone, people began to worry that the swamp and its animals could be lost."
- **SHOULD | R-INF-02-6 (ms)**
  - **Problem:** The key "Native American people are part of the swamp's history" has thin support in Passage 2. Its only mention is that the *name* comes from a Native American word. SPEC §6.3 requires every correct `ms` choice to be "clearly supported", and a strict reader can say Passage 2 tells nothing about Native American people's history in the swamp.
  - **Fix:** Add one sentence to p2 paragraph 1, such as "Native American people lived in and around the swamp long before anyone else.", or change the key to "Both passages tell about a connection between Native American people and the swamp."
- **NIT | R-INF-02-1 (why)**
  - **Problem:** The `why` says "Each paragraph tells about a different group", but paragraph 1 is an introduction and paragraph 2 covers two groups (Native Americans and swampers).
  - **Fix:** "Together, the paragraphs tell about different groups: …"
- **NIT | R-INF-02-5 (clue)**
  - **Problem:** "Read the sentences just before the one about stepping" leads straight to the Part B key (`p2:2:2`).
  - **Fix:** "Find the paragraph about the floating islands and read all of it."
- **NIT | R-INF-02-6 / R-INF-02-7**
  - **Problem:** Both items test "the refuge is in both passages", so answering one gives away the "Both" row of the other.
  - **Fix:** In item 7, replace that row with another "Both" fact, for example "that the swamp has islands" (p1 "the swamp's islands", p2 "floating islands").
- See also **X3** (R-INF-02-2), **X4** (R-INF-02-5) and **X5** (R-INF-02-3).

---

## R-OPN-01 "Let's Grow a School Garden!"

The opinion and fact rows hold up. No row is arguable, and the "Fact" rows are checkable.

- **SHOULD | R-OPN-01-4 (ebsr)**
  - **Problem:** Part A asks why Maya quotes **Mr. Lane and Ms. Ortiz**, but Part B allows only the Ms. Ortiz sentence. The Mr. Lane sentence (`p1:2:5`) supports Part A just as well and is missing. Distractor D (mom and three other parents offering help) also shows "adults support her". "Who know about these topics" separates it, but a child who knows only that adults agree will argue for it.
  - **Fix:** Make Part B `pick: 2` with both expert sentences correct: add "Our science teacher, Mr. Lane, says that students remember more when they see things for themselves.". Keep D as the distractor that tests the "know about these topics" part.
- **NIT | passage p1:5**
  - **Problem:** The objection is "a garden takes time and work", but the answer is "so the teachers would not have to do all the work". The objection never mentions teachers, so the rebuttal does not quite answer it.
  - **Fix:** "Some people may worry that a garden would be too much work for the teachers." Item 7's prompt still fits.
- **NIT | R-OPN-01-6 (clue)**
  - **Problem:** "…what does the word another mean?" all but states the key, "adding a new reason".
  - **Fix:** "Linking words connect ideas. What did paragraph 2 give the reader, and what does paragraph 3 give?"
- See also **X4** (R-OPN-01-4) and **X5** (R-OPN-01-8).

---

## Cross-cutting

- **X1 SHOULD | R-LIT-01-q5, R-POE-01-q3, R-INF-01-4 (4×4 one-to-one match)**
  - **Problem:** SPEC §5 gives 1 point for "all but one" row right. With 4 rows, 4 columns and each column used once, which q5 and q3 state and INF-01-4 implies, exactly 3 right is impossible. Any single mistake is a swap that makes 2 rows wrong, which scores **0**. The 1-point outcome can only be reached by a child who breaks the "use each once" instruction, so the 2-point item is effectively all-or-nothing. `T.match.score` confirms this.
  - **Fix:**
    - Add a fifth row so one column is used twice, and drop "Use each … once".
    - Or use a 5×3 layout, as R-INF-02-7 already does.
    - Or score these as 1-point items.
- **X2 SHOULD | engine, `js/engine/items.js`** (outside the set files, but it changes what Help 2 shows for every `ms` item)
  - **Problem 1:** `T.ms.narrow` (lines 126–133) crosses out `wrong.length − 2` choices: 2 of 4 for the 2-key items, and 1 of 3 for R-OPN-01-2. SPEC §5 says "Cross out **one** wrong choice and say how many to pick".
  - **Problem 2:** `T.ms.narrowText` (line 442), used in the after-test "Show me how", says "One of them is: \<correct choice\>". That **reveals a correct answer** instead of crossing out a wrong one. For the 1-point R-POE-01-q8, that is half the answer.
  - **Fix:** Make both functions cross out exactly one wrong choice and state the count.
- **X3 NIT | R-INF-01-3, R-INF-02-2**
  - **Problem:** The prompts say "Drag the first/earliest event to the top", but the order UI is tap-to-place ("Tap the events in order…").
  - **Fix:** "Put these events in order, first to last."
- **X4 NIT | R-INF-01-5, R-INF-02-5, R-OPN-01-4**
  - **Problem:** `partA.prompt` and `partB.prompt` begin with "Part A:" or "Part B:", but the player already prints a "Part A"/"Part B" label, so the child sees it twice. The LIT and POE sets do not do this.
  - **Fix:** Remove the prefixes.
- **X5 NIT | R-INF-02-3, R-OPN-01-8**
  - **Problem:** The prompts contain `\n\n`, but `#q-prompt` is filled with `textContent` and `styles.css` has no `white-space: pre-line`, so the line breaks collapse and the quoted sentence runs into the instructions.
  - **Fix:** Add `white-space: pre-line` to `#q-prompt` (and to `.review-q`), or remove the `\n\n`.

---

## Counts

| Severity | Count |
|---|---|
| MUST | 1 |
| SHOULD | 14 |
| NIT | 17 |
| **Total** | **32** |

**By set:**
| Set | MUST | SHOULD | NIT |
|---|---|---|---|
| R-LIT-01 | 0 | 1 | 1 |
| R-LIT-02 | 1 | 2 | 2 |
| R-POE-01 | 0 | 4 | 3 |
| R-INF-01 | 0 | 1 | 3 |
| R-INF-02 | 0 | 3 | 3 |
| R-OPN-01 | 0 | 1 | 2 |
| Cross-cutting | 0 | 2 | 3 |

**The MUST:** R-LIT-02-q5. The step "Grandmother steams the cakes on pine needles" can be read as either steaming, because she steams twice. A defensible order scores 0. Fix it by anchoring the step to the first batch.
