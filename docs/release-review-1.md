# Peach Prep: Release Review 1

**Verdict: RELEASE.** There are no blockers. Nine FIX items should be done soon. FIX-1 (the oak example) and FIX-2 (cueing between PT-1 items) are cheap and touch the scored Practice Test, so do them before the link goes to families if you can.

| Severity | Count |
|---|---|
| BLOCK | 0 |
| FIX | 9 |
| NOTE | 6 |

**Scope:**
- **Sets:** R-LIT-01, R-LIT-02, R-POE-01, R-INF-01, R-INF-02, R-OPN-01, L-GRM-01/02/03, L-VOC-01/02/03 and PT-1.
- **Size:** 13 sets and 131 items. I read every item in its final form, with its passage.
- **Not in scope:** W-REV-01/02 and the W-TASKs.

**Method:**
- **Rendering:** Each set was rendered with refs resolved to the numbers the child sees. Headings and boxes are skipped in that numbering, as `PP.visibleLabel` does.
- **Diffs:** Each set was diffed against its newest backup: `pre-review-reading`, `pre-simplify`, `pre-review-language` and `pre-review-pt1`.
- **Checks:**
  - `verification/check-content.js` passes, with 0 failures and 0 warnings.
  - Every quoted passage string in `prompt`, `stem`, `clue` and `why` was machine-checked against the passage text. So was every EBSR Part B choice. All are verbatim.
  - Every "paragraph N" in a prompt, clue or `why` was checked by hand against the visible numbering. All are correct, including the three PT-1-10/11 references that come after the headings.

---

## What was confirmed

**Answer keys:**
- Every `mc` and Part A has exactly one defensible answer.
- Every `ms` key is supported, and every non-key is clearly unsupported.
- All `order` and `match` keys are unambiguous.

**Firefly Jar (new story, R-POE-01 p2):**
- 277 words.
- q6, q7 and q8 key correctly against both texts.
- q7 has only one choice whose every part is true.
- q8's six choices split cleanly into both texts / poem only / story only / neither.

**Simplified passages (R-INF-01, R-INF-02, R-OPN-01):**
- Sentence splits moved the refs correctly. For example, the R-INF-01-2 key is now `p1:9:5`, which is visible paragraph 4, sentence 5.
- R-INF-02-4 now points at `p1:3:4`.
- No quote went stale.

**PT-1-13 (rebuilt match):**
- 4 causes × 4 effects, with each effect used once.
- The rows-1/2 swap that both reviewers found is gone, and no other swap holds up against the text.
- It does, however, introduce cueing between items. See FIX-2.

**PT-1-12 (new heading item):** One defensible key ("how a tree drops its leaves"). B and C come from the section before, and D is not in the article.

**Reworded clues:** All of them were re-read. None gives away the answer.

**Facts checked:**

| Claim | Verdict | Source |
|---|---|---|
| Loggerheads nest in Georgia from May to August | ✔ | GA DNR loggerhead fact sheet |
| A nest holds about 120 eggs | ✔ | GA DNR loggerhead fact sheet |
| Eggs hatch after about 60 days | ✔ | GA DNR loggerhead fact sheet |
| Hatchlings leave the nest at night | ✔ | GA DNR loggerhead fact sheet |
| Wire screens protect nests from raccoons | ✔ | GA DNR loggerhead fact sheet |
| Dawn surveys find the previous night's nests | ✔ | GA DNR loggerhead fact sheet |
| The Okefenokee is "one of the largest swamps in North America" | ✔ | Wikipedia (the largest blackwater swamp) |
| The name is "often said to mean" land of trembling earth, but may mean "bubbling water" | ✔ | Wikipedia (Hitchiti *oki fanôːki*) |
| A canal company tried to drain the swamp in the late 1800s and gave up after a few years | ✔ | New Georgia Encyclopedia (Suwanee Canal Co., 1891–1897) |
| Early-1900s logging railroads cut the cypress | ✔ | New Georgia Encyclopedia (Hebard, 1909 to the mid-1920s) |
| Settler families moved onto the islands in the 1800s | ✔ | New Georgia Encyclopedia (1850s) |
| The refuge was created in 1937 and covers most of the swamp | ✔ | Wikipedia, Okefenokee NWR (about 92%) |
| More than 200 kinds of birds live there | ✔ | Wikipedia, Okefenokee NWR (234) |
| Yellow and orange are in the leaf all summer, hidden by chlorophyll | ✔ | USDA Forest Service, *Why Leaves Change Color* |
| Shorter days lead to chlorophyll breaking down | ✔ | USDA Forest Service |
| Reds are made in the fall | ✔ | USDA Forest Service |
| Sunny days and cool nights make bright reds; cloudy, rainy weather gives less red | ✔ | USDA Forest Service |
| An abscission layer of cells cuts the leaf off | ✔ | USDA Forest Service |
| "Many trees, **such as maples and oaks**, get ready to drop their leaves" before winter | ✘ **misleading**, see FIX-1 | USDA Forest Service: "Oaks often keep their dead brown leaves until growth starts again in the spring" |
| An owl's facial disc directs sound to its ears | ✔ | Wild About Utah, *Owls: Silent Hunters* |
| In some owls, one ear opening is higher than the other | ✔ | Wild About Utah |
| Owl eyes are tube-shaped and fixed, so the owl turns its head | ✔ | Wild About Utah |
| Soft feathers make owl flight quiet | ✔ | Wild About Utah |
| Chuseok is a harvest holiday | ✔ | Maangchi, *Songpyeon* |
| Songpyeon are half-moon shaped | ✔ | Maangchi |
| The filling is sesame and honey | ✔ | Maangchi |
| The cakes are steamed on pine needles | ✔ | Maangchi |
| "Nearly full" moon on the night before Chuseok | ✔ | Chuseok falls on the 15th of the 8th lunar month, which is the full moon |

---

## BLOCK

None.

---

## FIX

### FIX-1 · PT-1 passage p2 "Why Leaves Change Color", `p2:9:1` (visible paragraph 6, under "Letting Go")

**Problem:**
- The sentence now reads "Before winter, many trees, such as maples and oaks, get ready to drop their leaves."
- The Forest Service leaf-color pamphlet names oaks as the trees that *keep* their dead leaves until spring. Georgia's best-known oak, the live oak, is evergreen.
- The sentence is not strictly false, because deciduous oaks do eventually drop their leaves. But it is the textbook counter-example, and a teacher or parent will catch it.
- It was introduced by the fix for review-pt1-A P2-b. No item key depends on the word "oaks".

**Fix:** Replace "maples and oaks" with "maples and sweetgums". Sweetgums are deciduous and already named in paragraph 5. The sentence becomes:

> "Before winter, many trees, such as maples and sweetgums, get ready to drop their leaves."

### FIX-2 · PT-1-13, with knock-on effects on PT-1-10 and PT-1-14 (cueing between items in the scored test)

**Problem:**
- The rebuilt match states the answers to two other scored items. Test mode lets the child move back and forth, so the cue is always available.
- **Rows 2 and 3** state PT-1-10's two keys almost word for word:
  - "In summer, a leaf has a lot of green chlorophyll → Yellow and orange colors stay hidden"
  - "The green chlorophyll in a leaf breaks down → Hidden yellow and orange colors can be seen"
- **Row 1** states PT-1-14's Part B evidence, and from it the Part A inference: "Fall has sunny days and cool nights → Red leaves become especially bright".
- **PT-1-10 distractor D** says the same thing again: "Sunny fall days and cool nights make the red colors especially bright."

**Fix:**

1. Rebuild PT-1-13 from causes no other item tests, with no pair that chains into another:

   | Row (cause) | Column (effect) |
   |---|---|
   | A leaf has a lot of green chlorophyll inside it. | The leaf looks green. |
   | The green chlorophyll in a leaf breaks down. | Hidden yellow and orange colors can be seen. |
   | A thin layer of cells grows where the stem joins the branch. | A gentle breeze can knock the leaf loose. |
   | Fallen leaves slowly break down on the ground. | The soil gets nutrients for new plants. |

   - The sources are paragraph 2 ("Chlorophyll is also what makes leaves look green"), paragraph 4, paragraph 6 and paragraph 7.
   - Row 2 still matches one of PT-1-10's keys. That is acceptable, because PT-1-10 needs both details.
   - New `why`: "Chlorophyll is green, so a leaf full of it looks green. When the green chlorophyll breaks down, the hidden yellow and orange colors can be seen. The thin layer of cells cuts the leaf off from the tree, so a gentle breeze can knock it loose. Fallen leaves break down and add nutrients to the soil for new plants."
2. In PT-1-10, replace distractor D with: "Red and purple colors are not hiding in the leaf all summer." This is still a red/purple misreading, but it no longer states PT-1-14's evidence. The current `why` ("The details about new colors and sunny days are about red and purple") becomes "The details about red and purple colors do not explain yellow and orange."

### FIX-3 · R-INF-01-5 Part B: a length giveaway that the simplification made worse

**Problem:**
- This is the case flagged in the brief, and it was not fixed. The simplification made it worse.
- Before simplifying, the distractors were 69, 75 and 78 characters long. They are now 29, 41 and 53. Key E is 101 characters, and key A is 58.
- With pick 2, a child who chooses "the longest one" gets half the item for free.

**Fix:** Replace two distractors with long, verbatim, clearly non-supporting sentences:
- **B** becomes "To help, many people who live near Georgia beaches block their light at night during nesting season." (`p1:10:3`, 98 characters)
- **D** becomes "Hatchlings find the ocean by crawling toward the brightest part of the sky, which is usually above the water." (`p1:9:5`, 108 characters)

Neither one supports "to find the nests made the night before". The current `why` already explains why lights and hatchlings are wrong, so it can stay.

### FIX-4 · PT-1-17 (ms, 2 points): both keys are the two longest choices

**Problem:** The keys are 99 and 115 characters. The distractors are 87, 92 and 93.

**Fix:** Lengthen two distractors. Both facts are verified.
- **C** becomes "An owl's eyes are shaped like tubes and cannot move in their sockets, so the owl must turn its whole head to look to the side."
- **D** becomes "Owls often swallow small animals whole, and later they spit up the bones and fur in a small bundle called a pellet."

### FIX-5 · PT-1-7 Part B: the key is clearly the longest

**Problem:** The key is 78 characters. The distractors are at most 66, and D is 40.

**Fix:**
- Replace **D** ("And I could use a helper at the wheel.") with "Before the clay dried, I pressed my thumbprint into the bottom of the new pitcher." (`p1:14:2`, 81 characters, verbatim). It does not state the message.
- Do **not** use the "heavy feeling … swallowed a stone" sentence. It could be argued as support.
- In the `why`, change "and the helper invitation is one event" to "and the thumbprint is one event".

### FIX-6 · PT-1-24: the key is 25% longer than any distractor

**Problem:** The key is 50 characters. The distractors are 40, 28 and 34.

**Fix:**
- Shorten the key to "the part of a car used for carrying things".
- In the `why`, replace the quoted key with that text.

### FIX-7 · R-POE-01 passage p2 "The Firefly Jar", `p2:2:6`: a small break in story logic

**Problem:**
- Marcus's plan is to "fill the jar with fireflies" (`p2:1:5`). The turning-point sentence then reasons about "One firefly in a jar would make only one small light in a dark bedroom."
- A careful reader will notice that the plan was never one firefly.

**Fix:** "Even a jar full of fireflies would make only a small light in a dark bedroom."
- No item quotes this sentence.
- The q7 `why` ("Marcus plans to fill the jar…") still holds.

### FIX-8 · PT-1-12 `why`: one sentence contradicts the key

**Problem:**
- The key says the section is about how *a tree drops its leaves*.
- The `why` then says "In this section, it is the leaves that let go." A child who has just been told the tree does the dropping may be confused.

**Fix:** Replace that sentence with "Letting go means the tree lets its leaves fall."

### FIX-9 · L-VOC-01-5, L-VOC-02-6, L-VOC-03-8, PT-1-7 and PT-1-14: "Part A"/"Part B" is shown twice

**Problem:**
- `items.js` (lines 176 and 183) already prints a "Part A" or "Part B" label above each part's prompt.
- These five items also start `partA.prompt` and `partB.prompt` with "Part A: " or "Part B: ". On screen, the child sees "Part A" and then "Part A: What is…".
- The six reading-set EBSRs do not have the prefix.

**Fix:** Remove the leading `Part A: ` and `Part B: ` from those 10 prompt strings. Keep "…the answer to Part A?" inside the Part B prompts.

---

## NOTE

### NOTE-1 · R-INF-01-8 clue

The clue says "Read the sentences after the **word**", but "come ashore" is a phrase. Change it to "after the phrase".

### NOTE-2 · R-INF-01 `p1:10:3`

"block their light at night" is slightly awkward after the simplification. A smoother version is "keep their lights from shining on the beach at night".

**Coordination with FIX-3:** FIX-3 uses this sentence as a Part B distractor. If you reword it, update that choice text to match.

### NOTE-3 · PT-1-3 prompt

**Problem:** "Which sentence best shows that Malik feels guilty after he hides the chip?" is the only `hottext` prompt with no "Select" verb.

**Fix:** "Select the sentence that best shows that Malik feels guilty after he hides the chip."

### NOTE-4 · R-POE-01-q7 key

**Problem:**
- The poem's "I do not need a jar **tonight**" leaves open whether the speaker has used a jar on other nights.
- The key is still the only defensible choice, because the other three are false about Marcus.

**Optional tightening:** "Marcus first plans to fill a jar with fireflies, but the speaker chooses to watch them free."

### NOTE-5 · Answer length across the release

**The pattern:**
- In 29 of the 80 `mc`, `ms`, Part A and Part B choice sets, every key is longer than every distractor. That is 36%, against about 25% expected by chance with four choices.
- Most margins are under 8%, so they are not a usable tell on their own.
- The engine shuffles choice order, so position is not a tell.

**Larger margins not covered above (optional):**
- L-VOC-01-5 Part B: keys 59 and 63, distractors at most 47.
- L-VOC-02-6 Part B: key 58, distractors at most 51.
- L-VOC-03-9: "scampered" and "dashed" against 3–5 letter distractors.
- L-VOC-02-10 and L-VOC-03-10: single words or short phrases, so this is unavoidable.

When writing new items, keep at least one distractor as long as the key.

### NOTE-6 · PT-1-10, PT-1-13 and PT-1-14 lean heavily on one paragraph

**Problem:** Even after FIX-2, three of the seven p2 items draw on paragraphs 3–5.

**Suggestion:** For PT-2, spread the items across the sections, including "Letting Go" and paragraph 7.
