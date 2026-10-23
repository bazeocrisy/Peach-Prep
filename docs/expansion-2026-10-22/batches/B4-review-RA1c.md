# B4 independent review: 3.T.RA.1.c (Summing up what you learned from two sources)

**Reviewer:** independent content reviewer. I did not author this lesson.
**Scope:** the `3.T.RA.1.c` block of `js/data/lessons/T-RA.js` only: Learn It and Watch Me, 15 core items (3 sets, P4/P5 by `{ref}`), 15 similar items, addons for Together P1-P5, passages p1-p8, write prompt and checklist. I ran no git. I edited no lesson. I wrote this file and scratch files under `scratchpad/ra1c/`.

## Verdict

**CHANGES REQUIRED.** Keys, scoring and the browser are sound: 33 of 33 keyed items agree with my blind solve, and all 15 core items work at 390x844. Four MUST findings remain. Two are hint ladders on the order items (C09, S09) and two are similar items that are too close to their core item (S14, S01). Each can be fixed in a few lines. Nine SHOULD findings follow, and the author's fifth-numbered-draft decision gets a recommendation (SHOULD-7).

| ID | Item | Class | One line |
|---|---|---|---|
| MUST-1 | C09 | ladder | clue + H2 + H3 fix the whole order |
| MUST-2 | S09 | ladder | same fault |
| MUST-3 | S14 | near-copy | slot 2 is C14's slot 2 (same four options, same key); "Instead" also shared; Jaccard 0.29 |
| MUST-4 | S01 | near-copy | shares two options ("For example,", "Instead,") with P4; the brief allows one |
| SHOULD-1 to SHOULD-9 | various | see below | |

---

## 1. Blind solve and agreement

**Method.** `scratchpad/ra1c/blind.js` loads the lesson in Node (`vm` sandbox, `PP.addLesson` stub), resolves every `{ref}`, and prints every core item, every similar item and the three Together items that are not core (P1-P3). Choices, dropdown options, hot-text options and order steps were shuffled with a seeded generator (seed 4242). Keys and answer indexes were stripped by a recursive filter that deletes `correct`, `answer`, `why`, `hint(s)`, `how`, `clue`, `misconception`, `sample`, `criteria` and `like`, including nested fields. I wrote the stripped JSON to `stripped.json` and grepped it for `correct|answer|why|hint|clue|misconception|sample|criteria|like|how`. It had zero hits for the key fields, and zero for hint, clue and misconception. The passages and in-stem sources were printed. This lesson has no figures. The shuffle map went to a separate file, `blindmap.json`, which I never opened.

I solved all 33 items and saved my answers as text in `answers.json` before I printed any key. The file is dated 16:13:07 UTC on 2026-10-23 (sha256 `a7f35224ee0e4f20b9b2bf639734531a35c797bc5df7e55aeeb147b30d989754`, in `answers.sha256`). `cmp.js` then compared them with the keys.

**Result: 33 of 33 keyed items agree (100%).** That is core 15 (P4 and P5 included), similar 15 and Together P1-P3. There are no `cr` items in the fifteen.

**How blind it was, honestly.**
- Before solving I printed a schema probe: field names, item types by core position, and the practice id list. I also printed `grep -n` hits for `3.T.RA.1.c` that showed the first line of each core item (id, type, points, DOK, passages). No key, choice text or hint was shown.
- I read the head of the lesson file for a different lesson (3.T.RA.1.a). I did not open this lesson's source before the solve.
- I did not read the author log until after `answers.json` was saved.
- Items I hesitated on (all matched the key): C07 (a child could take "A resting dragonfly holds its wings out flat" as about wings; the stem says "good fliers", which settles it); P2 (the key restates note 1, see SHOULD-8); C14 blank 1 ("Because" would also fit, but it is not offered in that slot).
- Agreement on mostly one-key items is a floor for answerability. The ladders, near-copies and pre-answers below are what agreement cannot show.

---

## 2. Findings

### MUST

**MUST-1. C09 (order): the clue, hint 2 and hint 3 together fix the whole order.**
- The clue (and H1) lists the cue words in the key's order: "like later, then and at last".
- H2 sets sentence 1 ("what happens first in a dragonfly's life").
- H3 sets sentence 2: "The sentence that starts with Later ... comes right after the sentence about the nymph."
- H2 also says "what must happen before it can hunt in the air", which fixes "Then ... takes to the air" before "At last, it hunts".
- Nothing is left to decide. The precedent is B1-review-1B MUST-7: "h2 and h3 together fix the whole order". The author's note "first fixed by hint 3" is also off: H3 fixes position 2, and H2 fixes position 1.
- **Fix.** Make the clue and H1 generic: "Time words show the order. One sentence has no time word, and it usually comes first." Make H2 a strategy only: "Say the whole story of a dragonfly's life to yourself, then match each sentence to a part." Let H3 settle one step only, for example: "The sentence about the nymph has no time word, so it starts the summary. Place the other three."
- The key sequence itself is sound (see NOTE-1).

**MUST-2. S09 (order): same fault.**
- The clue lists "next, then and at last" in key order.
- H2 fixes position 1 ("what has to happen first before a tree can grow") and position 4 ("what can only happen after the tree has many years of rings").
- H3 fixes position 2 ("Next ... comes right after the seed sentence"). All four positions are then fixed.
- **Fix.** Same as MUST-1.

**MUST-3. S14 is a near-copy of C14.**
- Slot 2 is C14's slot 2: the same four options (Unless, Although, When, Before) in a different order, and the same key, "When". The sentence frame is the same too: "{1} the X are Y, they Z."
- Slot 1 is the same relation (addition word) with a new key word ("Also" for "In addition"), and "Instead" is shared.
- Word-set Jaccard against C14 is 0.29, and 5 options are shared (limit: one).
- A child who has just seen C14 answers S14 from memory. This is the "same two blanks, same options" pattern that SIM-2-review counted as a MUST.
- **Fix.** Change the logic as well as the nouns. For example, slot 1 could be a cause link ("Because the trees have deep roots, they stay standing in wind"), and slot 2 could be a time link with new options (Soon, Next spring, Last week, Instead). Do not reuse the C14 option set.

**MUST-4. S01 shares two options with its `like` item P4.**
- Both have "For example," and "Instead,". The brief's accepted standard is at most one shared option.
- The key logic differs (a time phrase, "Over the years,", against "In the fall,") and the Jaccard is fine (0.17 with passages).
- **Fix.** Replace the two shared distractors, for instance "Last week," and "However,". Keep "At first," as the plausible time-word trap.

### SHOULD

**SHOULD-1. Clue lists the distractors' flaws and H3 names the third, on the "best sentence" items.** This affects P5, S02, C11, S11 and, to a lesser degree, P1.
- Example, P5: the clue says a good ending "does not add a new fact or a small detail". That describes two of the three distractors exactly (the milkweed fact and the orange and black detail). H3 then names "That is all I have to say".
- If a child applies the clue, all three distractors are gone and only the key is left. By the strict "named elimination" count, three choices stay live.
- C11 has the same shape. The clue ("a big idea from each", "sticks to what the sources say") removes the one-source distractors and the "every player" distractor. H3 then names "every player".
- **Fix.** Keep the clue as a strategy ("Ask what each source is mostly about"), and move the failure criteria out of the clue. Let H3 do one job only.

**SHOULD-2. C13: the key is credible but is not the most relevant choice.**
- The class is writing about "where their town gets its drinking water". The key is "a page from a state agency that tells how drinking water is cleaned". That is about cleaning, not about where the water comes from.
- The stranger's guess ("I think the water comes from a big lake somewhere") is closer to the topic. Relevance is one of the four words in the official wording ("researched, relevant, and accurate"), so a thoughtful child may doubt the key.
- **Fix.** "... a page from a state agency that tells where drinking water comes from and how it is cleaned, with the date it was updated". Do the same check for the `how` line.

**SHOULD-3. C11: the key leaves out half of Source 2.**
- Source 2 is titled "How to Warm Up and Cool Down", and its second paragraph is about the cool-down. The key mentions only the warm-up. The item's own `how` says Source 2 is "about how to do a short warm-up and a cool-down".
- The key is still the only choice that covers both sources, so it stays unique.
- **Fix.** "A warm-up gets the body ready for sports, and kids can do a short, easy warm-up and cool-down to stay safe." Keep the cool-down-only distractor.

**SHOULD-4. Draft sentences that carry unsourced claims, in items that are teaching "use only the sources".**
- C08 (5): "Dragonflies usually live close to ponds, **because that is where they find mates**". Source 2 says only "Most dragonflies stay near ponds and streams." The clause about mates is outside information.
  - It is true of dragonflies, but a child who has just met C05 ("true but not in the sources") will wonder whether the draft is flawed.
  - The item asks about copying, so the key is not affected, but the draft models the opposite habit.
  - **Fix.** "Most dragonflies stay close to ponds and streams."
- S08: the stem shows only Source B, but draft sentences (1) and (2) are word for word from S11's Source A ("Some satellites are built by people and sent into space"), which this item never shows. Sentence (5), "That helps people get ready for bad weather," is also an unsourced inference.
  - The key still holds, because the question asks for the sentence copied from Source B.
  - **Fix.** Show Source A in the stem, or paraphrase (1) and (2). Drop or source sentence (5).

**SHOULD-5. S04, S13 and S03 mirror the design of C04, C13 and C03.**
- Word-set Jaccard with passage text, against the `like` core item: S04 0.34, S13 0.33, S03 0.22. The brief's accepted bar is 0.21.
- No option is shared, but the design is the same:
  - Trust items always offer the same four archetypes: an ad that sells, a stranger who guesses ("I heard / I think / I guess"), a made-up story (talking butterfly, comic, song, cartoon), and one credible source. The key is also always the one with extra credentials ("with the date", "with a list of sources", "by a scientist").
  - A child can learn the template, not the skill. All four trust items (C04, C13, S04, S13) use it, and the Watch Me red panda example uses the same two-way contrast.
  - C03 and S03 keep the same trio of distractors: a copy, a changed meaning, an opinion.
- **Fix.** Vary the traps in the similar items: a source that is old or undated, an expert in another field (for example a chef writing about satellites), a company's own page, a page about a different topic. For S03, change the wrong-meaning distractor to something subtler, such as "Termites sometimes eat wood" (a softer claim).

**SHOULD-6. Learn It and Watch Me do not model everything the fifteen ask for.**
- Learn It 1 models the big idea of each source and a linking word. Learn It 2 models removing an opinion ("I think penguins are funny").
- **Not modelled anywhere:** removing a true fact that is not in the sources (C05, C15, S05, S15); spotting a copied sentence against a paraphrase (C03, C08, S03, S08); choosing facts that answer the summary's question (C07, S07); ordering with time words (C09, S09). The teach points mention most of these. Only the credible-source skill has its own Watch Me.
- **Fix, smallest first.**
  - Add a fifth sentence to Dev's penguin draft in Learn It 2: "Penguins are birds that cannot fly" (true, not in the sources), and ask for two sentences to remove.
  - Change the teach line "time words like in the fall" to "time words like first, next, later and at last".
  - Add one `steps` line in Learn It 1 that contrasts a copied sentence with a paraphrase.

**SHOULD-7. The fifth numbered-draft item: convert C12.**
- The plan (04-content-plan §6.6) asks for at least five of the fifteen to edit inside a numbered draft. The author counts four: C05, C08, C10, C15. I agree with that count.
- **Recommendation:** convert **C12**. Make it a hot-text item on a numbered draft of Source 1 notes ("Which sentence is the least important detail, so Kayla can leave it out?"). Set 3 then has two draft items (C12 and C15) against set 1's one and set 2's two. The skill (important versus tiny detail) is unchanged, and S12 can stay `mc` (the `like` mapping stays honest, as S05/C05 already pair hot-text with hot-text).
- Do not count C09 or C14. Neither is a numbered draft. If the owner prefers the minimum change, number C09's four sentences (1) to (4) and call it a reorder inside a draft. I rank that second, because the order skill is cue-driven, not draft-editing.
- Check the frame rule ("no two sentences may share a frame"): C05, C10 and C15 all read "Which sentence(s) should X take out". The reasons differ (outside fact, opinion, both) and they sit in different sets, so I accept them.

**SHOULD-8. P2: a "new fact" clue and why that the key itself contradicts.**
- Leah's notes already include "Monarchs lay eggs on milkweed." The key is "In spring, monarchs lay eggs on milkweed as they fly north." Its overlap with note 1 is large.
- The clue says the fact must "tell her something she does not already have", and the `why` calls it "not already in Leah's notes". A careful child can dismiss the key for that reason.
- The key is still the only Source 2 sentence about milkweed. In the stem, the notes are "all about milkweed", so a word match on "milkweed" finds it (the same match also finds the juice distractor, which H3 removes).
- **Fix.** Change note 1 to "Monarchs start life as tiny eggs." Then the key adds the spring egg-laying and the northward trip.

**SHOULD-9. Topic overlap with another lesson and with this lesson's own bank.**
- C14 (water bottles, a linking-words dropdown) repeats the topic and the item type of 3.T.T.3.c in `T-T34.js` (Malik's "Water Bottles in Room 8" draft, with a `{0}` / `{1}` linking-word dropdown at lines 1120ff). Move C14 to a topic that appears nowhere else, such as lunch trays, recess balls or library books.
- Inside this bank, S02's distractor ("Many other animals live in Australia too, such as kangaroos and koalas") and S15's key ("Kangaroos also live in Australia") teach the same fact. S02's `why` explains that it "adds a new idea". A child who works S02 and then S15 has been given the answer. S02, S07 and S15 share the platypus sources, S03 and S10 share the termite Source B, and S08 and S11 share the satellite Source B. Change S02's off-topic distractor (for example, "Many people visit zoos to see animals from Australia").
- Tree rings also appear in `T-C.js` line 1739 ("Each ring shows one year of growth", in a text-features item on 3.T.C.1.b). That is a different skill, so I count it as a NOTE.

### NOTE

**NOTE-1. Worry checks, in the order the brief gave them.**
- **C05 ("a monarch has four wings" as the outside fact): acceptable.** I checked both sources word by word. Neither mentions wings. The other five sentences each map to one source sentence. The prompt and H1 say "even when an extra fact is true", so the item is fair. It is on-topic and subtle, unlike C15's Olympic sentence, which is obviously off-topic. That makes C05 a good progression into C15. S05's Mars sentence is off-topic and easier, which is fine for a similar item (but see NOTE-5).
- **C09 (only one sequence): confirmed.** With the first sentence unmarked, "Later" must follow the nymph, "Then the adult ..." needs an adult, and "At last" is final. There is no second defensible order. The problem is the hints (MUST-1).
- **C11 (opening sentence covering both sources): the key is unique** (the other three each fit one source, or go beyond the sources). It is incomplete, see SHOULD-3.
- **C14 (time words against addition words): defensible.** Blank 1 has one defensible key ("In addition"); "Last year" is a time-word decoy that works after P4's time-word key, and H3 explains why it fails. "Because" would not fit the comma. Blank 2 has one key ("When"). "Because" would also fit grammatically in blank 2, but it is not offered there. The `how` for C14 does not mention "Last year", and S14's `how` does not mention "Yesterday". Add one clause to each.
- **C15 (two sentences to drop): unique.** (3) is an opinion ("the best part") and (4) is a true outside fact. Sentences (1), (2), (5) and (6) each map to p7 or p8. H1 states both reasons, which is a strategy statement. It does not name a sentence.

**NOTE-2. Hint ladders, recount by hand for every core item.** "Named out" means the hint names or quotes a distractor. "Criteria" means the hint states a property without naming a choice.

| Item | Live after clue + H1 + H2 | Named out by H3 | Live after H3 | Verdict |
|---|---|---|---|---|
| P4 | 4 | "For example" | 3 (key, Instead, Before that); H2 points at "Each fall" in Source 2 | ok; see NOTE-3 |
| P5 | 4 | "That is all I have to say" | 3 by name; 1 by criteria | SHOULD-1 |
| C03 | 4 (prompt already rules out the copy) | "A few monarchs" | key + prettiest + copy | ok |
| C04 | 5 | talking butterfly | 4 | ok |
| C05 | 6 | sentence 5 | 5 | ok |
| C06 | 5 | "Most dragonflies stay near ponds" | 4 | ok |
| C07 | 5 (H2 says "facts about flying") | "resting wings" | 4 by name; flying facts by criteria | ok, easy item |
| C08 | 5 | sentence 2 | 4 | ok |
| C09 | 24 orders | sentence 2 position | 1 | MUST-1 |
| C10 | 6 | sentence 5 | 5 | ok |
| C11 | 4 | "every player" | 3 by name; 1 by criteria | SHOULD-1 |
| C12 | 4 | "warm muscles" | 3 | ok |
| C13 | 4 | cartoon | 3 | ok |
| C14 | slot 1: 4; slot 2: 4 | "Last year" (slot 1 only) | 3 and 4 | ok |
| C15 | 6 (choose two) | sentence 6 | 5 | ok |

No hint echoes a key's wording, except that P4's H2 pushes toward "fall", and the word is in the passage (NOTE-3).

**NOTE-3. Word-matching.** None of the keys is solvable by wording alone, with these exceptions that I accept:
- P4: "In the fall," matches "Each fall" in Source 2, and the passage supplies the cue.
- C08 and S08 (copy detection): the task is a comparison, so matching is the skill.
- P2: see SHOULD-8.

**NOTE-4. Near-copy table (word-set Jaccard of item, with passage text, against the `like` core item).** Rule: at most 0.21 and at most one shared option.

| Similar | Jaccard (all words) | Content words | Shared options |
|---|---|---|---|
| S01 | 0.17 | 0.13 | **2** |
| S02 | 0.18 | 0.09 | 0 |
| S03 | **0.22** | 0.13 | 0 |
| S04 | **0.34** | 0.24 | 0 |
| S05 | 0.19 | 0.10 | 0 |
| S06 | 0.17 | 0.13 | 0 |
| S07 | **0.22** | 0.13 | 0 |
| S08 | 0.18 | 0.13 | 0 |
| S09 | 0.18 | 0.13 | 0 |
| S10 | 0.18 | 0.13 | 0 |
| S11 | 0.17 | 0.13 | 0 |
| S12 | 0.21 | 0.12 | 0 |
| S13 | **0.33** | 0.21 | 0 |
| S14 | **0.29** | 0.27 | **5** |
| S15 | 0.16 | 0.09 | 0 |

Key-text Jaccard is 0.27 or lower everywhere. `like` mappings are honest by task type in all 15 (each matches component and format). S07 (0.22) is borderline; it is fine on design (a different question, fresh facts).

**NOTE-5. Other small points.**
- S05's off-topic Mars sentence is easier than C05's on-topic outside fact. Fine for DOK 3 practice, but a harder second outside sentence would be a better test of transfer.
- S13's wrong source ("I guess you cut the tree and count") states something that is actually true. The point is that the writer is a stranger, not the claim, so the key still stands. A reader may find it odd.
- S10, S05 and S15 drafts copy source sentences verbatim, while the lesson teaches "own words". Each item tests a different skill, so no change is needed.
- Labels differ: most similar items say "Source A / Source B", but the lesson passages and C14/S14 say "Source 1 / Source 2". Pick one.
- C11 and S11: the key is the longest choice and is the only "X, and Y" sentence. C13/S13: the key is the longest and carries the credential detail. Not a defect on its own, but it adds up (SHOULD-5).
- FK on short stems is noisy (C03 6.84, C10 5.19, C14 4.91 by my syllable counter), driven by "dragonfly", "mosquitoes" and "summary". See §4 for passages.
- Points and DOK are right on all 15: ms pick-2 = 2 points, two-slot dropdown (C14) = 2, four-step order (C09) = 2, one-slot dropdown and single hot-text = 1. DOK 3 on C14 is generous; DOK 2 would fit (it is an application of linking words). Not blocking.
- Grade 3 suitability: nothing childish, nothing above grade level. "Nymph", "chrysalis" and "forecasters" are defined by context or by the sources.
- Write prompt and checklist: the checklist covers trust, big idea, own words, important facts only, no opinions and a linking word. It matches the fifteen. The prompt keeps the "choose your own topic, with a grown-up" option, which is the only place the standard's "self-selected topic" can be met.
- Teach: the credible-source point and word are there. The point names "a library book, a museum or a science website" but C04 and C13 key on "agency" pages and "the author's name and a list of sources" (what makes a source credible). One line in the teach point would close this.
- The author's claim that termite, platypus, tree-ring, satellite and comet topics have "zero hits elsewhere in js/data" is not quite right: dragonfly (T-T34, a poem), termites (T-T2, one line about anteaters), tree rings (T-C.js:1739) and warm-ups (T-TS.js:478, a track-team warm-up in a time-word item, and T-T2) all appear elsewhere. None repeats a key fact or a skill, so these are NOTEs. Monarch and milkweed facts (p1/p2, existing) also appear in 3.T.T.2.b, 3.T.C.1.b and 3.L.V.3.d, with long overlaps (milkweed as the only food, the bad-tasting juice). That was in the lesson before this batch.

---

## 3. Facts verified

| Claim in the lesson | Verdict | Source |
|---|---|---|
| A tree adds one ring a year; wide rings in wet years, narrow in dry ones (S06, S09) | True in water-limited places; the source says tropical trees lack clear rings, and a severe winter or drought can also make narrow rings. Hedge Source B ("often") | https://scied.ucar.edu/dendrochronology-interactive |
| Comet: ball of ice and dust, orbits the Sun; ice turns to gas near the Sun; the tail points away from the Sun (S05, S12) | True | https://qrg.northwestern.edu/projects/vss/docs/space-environment/1-what-is-a-comet.html |
| Some comets are named after the people who found them (S12) | True ("traditionally comets are named by (or after) the person or observatory that discovered them") | https://esa.int/Science_Exploration/Space_Science/Comet_Interceptor/How_are_comets_named |
| Mars has two small moons (S05) | True (standard fact; not separately fetched) | none fetched |
| A new termite colony starts with a king and queen; a mature queen lays thousands of eggs a year; termites eat wood and can cause structural damage (S01, S03, S10) | True (the page does not name beams; "beams of a house" is a fair simplification) | https://www.terminix.com/termites/colonies/ |
| Platypus lays eggs and is one of very few egg-laying mammals; webbed feet; thick waterproof fur; male spur on each hind leg (ankle); streams in Australia (S02, S07, S15) | True (the spur is on the ankle of each hind leg, "back foot" is a fair simplification) | https://australian.museum/learn/animals/mammals/platypus/ and https://kids.britannica.com/students/article/platypus/276463 |
| Dragonfly nymphs live underwater for months to years, eat small fish; adults move each of four wings independently; hover and fly backward (p5, p6) | True | https://www.iowadnr.gov/news-release/2019-08-08/6-cool-things-you-should-know-about-dragonflies |
| Dragonflies cannot sting people; hold wings out flat at rest (p6) | Accepted from standard references; the pages I fetched did not state it. Not a risk | https://en.wikipedia.org/wiki/Dragonfly |
| Warm-up 5 to 10 minutes; more blood and oxygen reach the muscles; start slowly (p7, p8) | True | https://kidshealth.org/Inova/en/teens/stretching.html?view=ptr |
| Cool-down 5 to 10 minutes; heart rate returns to normal; helps prevent lightheadedness and dizziness (p8) | True | https://www.healthline.com/health/exercise-fitness/cooldown-exercises |
| The first Olympic Games took place in ancient Greece (C15, an outside fact) | True (776 BCE at Olympia) | https://www.worldhistory.org/OlympicGames/ |
| Emperor penguin and sloth facts in Learn It / teach | Standard; I did not fetch them. Both match the sources as written | none fetched |
| Monarch facts in p1/p2 (existing) | Existing passages; not re-verified in this pass | none |

I found no factual error. The tree-ring wording in S06 Source B ("Wide rings mean plenty of rain") is the only accuracy point. It is a NOTE-level hedge: add "often" or "in many places", because the standard asks for accurate information.

---

## 4. Readability

Word-set FK, my own syllable counter, whole passage:

| Passage | FK | Words |
|---|---|---|
| p5 A Dragonfly's Two Lives | 3.11 | 105 |
| p6 Hunters of the Air | 3.41 | 104 |
| p7 Why Athletes Warm Up | 3.97 | 108 |
| p8 How to Warm Up and Cool Down | 2.20 | 104 |

All four new passages are at or below 4.0 (limit 4.5) and have more than 100 words. Existing p1 (3.75) and p2 (3.89) also pass.

---

## 5. Browser sitting (390x844)

Server: `node verification/serve.js . 8871`. Scripts: `ra1c/run.py` (wrong answer, Check My Answer, 3 hints, Show Me How, Try a Similar Question, similar answered correctly) and `ra1c/corr.py` (correct answer, Check My Answer). Both use the repo's own `practice-own.py` helpers.

- All 15 core items were worked in order: P4, P5, C03 to C15. Item order matched the data. Set 2 and set 3 buttons ("Go on to set 2 / 3") worked, and the end screen after item 15 read "Set 3 finished".
- A wrong answer gave "Not quite" on all 15. A correct answer gave "That's right!" with the right `why` on all 15.
- Three hints appeared in order on all 15. Show Me How opened with 3 to 4 steps on all 15, including P4 and P5, which take their steps from the addons.
- Try a Similar Question opened S01 to S15 in order, each with the correct `like` mapping, and each correct answer checked as right.
- No horizontal scroll at any point. No page errors. The only console error is the Google Fonts request (`ERR_FAILED`; the sandbox is offline), which is not a lesson problem.
- Result: **0 bad rows.**

---

## 6. Summary for the author

1. Fix the hints on C09 and S09 (MUST-1, MUST-2).
2. Rewrite S14's blanks and S01's distractors (MUST-3, MUST-4).
3. Decide the fifth numbered-draft item: convert C12 (SHOULD-7).
4. Apply the small SHOULDs: C13 key (SHOULD-2), C11 key (SHOULD-3), C08 and S08 drafts (SHOULD-4), P2 note 1 (SHOULD-8), C14 topic and S02 distractor (SHOULD-9), Learn It 2 (SHOULD-6).
5. Vary the trap design in S03, S04 and S13 (SHOULD-5), and tidy the clues on the "best sentence" items (SHOULD-1).

After MUST-1 to MUST-4, a re-solve of C09, S09, S14, S01 and the items you change under SHOULD-7 is enough. The other 28 items do not need another blind pass.

**Verdict: CHANGES REQUIRED.**


---

# Re-review after fixes (3.T.RA.1.c)

**Reviewer:** independent re-reviewer (did not author the lesson; did not write the first review). No lesson edited, no git run. Scratch files: `scratchpad/ra1c-final/`.

## Verdict: CHANGES REQUIRED

Keys, scoring and the browser sitting are sound. The first review's four MUSTs are fixed. Three new MUSTs remain, all small: one stale hint (S03) and two similar items still over the 0.21 ceiling on every measure (S04, S13). Five SHOULDs follow. The most important is a new defect created by the SHOULD-4 fix: C08 sentence (5).

| ID | Item | One line |
|---|---|---|
| MUST-1 | S03 | hint 3 describes a choice that no longer exists ("making a house stronger") |
| MUST-2 | S13 | Jaccard 0.25 against C13 on every measure; same frame and same distractor roles |
| MUST-3 | S04 | Jaccard 0.25 against C04 on every measure; same distractor roles |
| SHOULD-1 | C08 | sentence (5) differs from Source 2 by one word, yet the `why` says it is in "new words" |
| SHOULD-2 | S05, S10 (also S02, S08, S15) | at or just over 0.21 when passages count; 0.26 to 0.29 on item text alone |
| SHOULD-3 | Learn It / Watch Me | still do not model ordering, important-versus-tiny detail, or two-blank linking |
| SHOULD-4 | S14 | "Since" asserts a cause that neither source states |
| SHOULD-5 | S01 / P4 / S09 / C09 | key phrase can be matched straight from the stem; C09 and S09 hint 3 gives position 1 (accepted, see NOTE-2) |

## 1. Blind solve

- **Method.** `ra1c-final/load.js` loads `T-RA.js` in a Node `vm` sandbox with a mock `PP.addLesson`. `strip.js` resolves each `{ref}` and builds core C01-C15 (P4 and P5 are C01 and C02) and S01-S15. It deletes `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like`, `steps` and `rev`, and it replaces choices, options and dropdown slots with seeded-shuffled (LCG seed 20261023) text only. I wrote the stripped JSON to `stripped.json` and grepped it for `correct|answer|why|hints|how|clue|misconception|key|like|hint`. **Zero hits.**
- **Order items.** My first pass dropped `steps`, which holds the order items' sentences. I printed those separately, shuffled, with no key. The prompt did not hint at the order. Both orders came out as the keys.
- **Passages.** p1 to p8 were printed in full. The lesson has no figures, so there is no alt text to check.
- **Answers saved first.** `my-answers.json` was written at 12:30:28 on 2026-10-23, before any key was printed (sha256 `005ba645a3ed63c73f3c83e05baa1f4cf2eeb239f5d043ab1df568ff8a5c85d5`). I then compared in code.
- **Result: 30 of 30 agree (100%)**: core 15 and similar 15. I also solved the three Together items that are not core (P1-P3) blind, and all three agree, which makes 33 of 33.
- **How blind it was.** Not perfectly. Before the solve I printed the `teach`, `learn` and `write` text of this lesson (the Learn It penguin and red-panda examples), and I saw the first line of the head of `T-RA.js`. I had not seen any practice item, choice, hint, why or how. I did not read the author log or the first review until after the answers were saved. Before the solve I also read only the **names** of the keys in the lesson (schema probe).
- No item caused real doubt. C09 needs one sentence of thought ("Later" before "Then"), and C14 blank 2 ("When" over "Although") needs the meaning, not the grammar.

## 2. Findings

### MUST

**MUST-1. S03: hint 3 points at a choice that does not exist.**
- H3 reads: "The sentence about making a house **stronger** changes what termites do to a house. Check the other choices the same way." The four choices are an opinion ("the worst bugs"), a softer wrong-meaning sentence ("sometimes eat wood, but their tunnels **never hurt** a house or its beams"), the key ("chew through wood, and the holes they make can make a house weaker"), and the copy. There is no "stronger" sentence.
- The H3 text is left over from the earlier distractor. The child searches for a sentence that is not there, so the third hint eliminates nothing. `how` HOW3 and `why` are correct ("one says the tunnels never hurt").
- **Fix.** "The sentence that says the tunnels never hurt a house changes what termites do to it. Check the other choices the same way."
- All other hint 3 lines name a choice that exists. I checked every core, similar and addon hint 3 against its choices.

**MUST-2. S13 is still over the ceiling on every measure.**
- Word-set Jaccard against C13: **0.25** on item text alone and 0.25 with passages (C13 has none), with 0 shared options. The first review had 0.33.
- Same 25 shared words include the whole frame: "class is writing about ... already has one source, a page from ... department. Which second source should ... use?" The distractor roles are also the same: a seller (company page), an uncheckable source (undated pamphlet, like the stranger) and an off-topic page (like the cartoon). The key is "a library book by a ... scientist, with a list of sources", which is C04's key shape.
- **Fix.** Change the frame as well as the topic, for example a prompt of the form "Which source would help Sam check how old the tree is?" without the "already has one source" sentence, and swap one distractor role (for example, a page from a tree-care company that is dated and names an author but sells services).

**MUST-3. S04 is still over the ceiling on every measure.**
- Jaccard against C04: **0.25** (item only and with passages; the same, because C04 has no passage). 0 shared options. First review: 0.34.
- Shared words are the frame ("facts about", "she has five sources", "Choose two answers") plus the key vocabulary "agency / scientist / page / written by". The traps changed (chef, company, blog) but their roles still map to C04's (off-topic, ad, uncheckable).
- **Fix.** Reword the stem and prompt (for example, "Which two of these would be good places to learn how satellites track storms?"), and change the key phrases ("a page from a national weather agency", "an article by a space scientist") to different wording.
- **Why MUST for S04 and S13.** The brief's accepted ceiling is 0.21. These two are over it by 0.04 on both measures I ran, and the fix is two sentences each. I rank them as the lowest-severity MUSTs.

### SHOULD

**SHOULD-1. C08 (5) is now a one-word copy, and the `why` calls it new words.**
- Source 2: "Most dragonflies stay **near** ponds and streams." Draft (5): "Most dragonflies stay **close to** ponds and streams." The SHOULD-4 fix removed the unsourced "mates" clause and left a one-word swap.
- The item's own misconception says "A common mix-up is thinking a sentence is in your own words because you changed one word. Check whether most of the words are the same." By that rule (5) is also a copy. Yet `why` says "The other four sentences tell the ideas in new words" and HOW2 says sentences 1, 2, 3 and 5 "change the words."
- The key is still unique because the prompt asks for a sentence "copied word for word". The harm is the explanation, which teaches a one-word swap as own words.
- **Fix.** Make (5) a real paraphrase: "Dragonflies usually live in places close to water." (Source 2 supports it.) Or keep (5) and rewrite the `why`, HOW2 and misconception to say (5) is "nearly copied" and the question asks for the exact one.

**SHOULD-2. Near-copy measure: the rest of the table.** Word-set Jaccard against the `like` core item (all words / content words), by two conventions. "With passages" adds the core item's passage text (what the child reads for the core item). Shared options are 0 for all 15.

| Similar | Item text only | With passages | Note |
|---|---|---|---|
| S01 | 0.15 | 0.10 | ok |
| S02 | 0.26 | 0.17 | frame "Which sentence would be the best ending..." is word for word |
| S03 | 0.13 | 0.12 | ok |
| **S04** | **0.25** | **0.25** | MUST-3 |
| S05 | 0.29 | 0.21 | at the ceiling |
| S06 | 0.23 | 0.17 | |
| S07 | 0.22 | 0.19 | |
| S08 | 0.27 | 0.20 | |
| S09 | 0.19 | 0.15 | ok (order steps included) |
| S10 | 0.28 | 0.21 | at the ceiling |
| S11 | 0.21 | 0.17 | |
| S12 | 0.24 | 0.19 | |
| **S13** | **0.25** | **0.25** | MUST-2 |
| S14 | 0.20 | 0.20 | ok; 0 options shared |
| S15 | 0.28 | 0.18 | |

- Decision: only S04 and S13 are MUST, because they are over on both measures. S05 and S10 are exactly at 0.21 with passages and 0.28 to 0.29 on item text. The hot-text stems repeat sentences word for word ("Here is X's draft summary. Her teacher says it may use only facts from the two sources."). Trim one repeated sentence in each of S05, S10, S08, S15 (for example, drop "Here is Dina's draft summary." and fold the rule into the prompt), and the table drops to about 0.20.
- The key-text overlap is low everywhere. `like` mappings are honest by component and format in all 15. S12 stays `mc` against C12's hot-text, which is acceptable (NOTE-4). S14 pairs a reason link and a time link with C14's addition link and a when link. It is the same skill (linking words), not the same words.

**SHOULD-3. Learn It and Watch Me still do not model several things the fifteen ask for.**
- Modelled: big idea of each source and a linking word (Learn 1); removing an opinion and a true outside fact (Learn 2, now fixed); trusting a source (Learn 3).
- Not modelled: **ordering with time words** (C09, S09; the teach point lists the words, no example), **important versus tiny detail** (C06, C07, C12, S06, S07, S12), and a **two-blank linking item** where one blank is not "also" (C14, S14). Copy versus own words is in one step of Learn 1 only.
- **Fix, smallest first.** Add one `steps` line to Learn 1 that sorts a tiny detail from an important fact ("The penguins' size is a tiny detail here, so leave it out"), and add one line to the teach example: "First, sloths live in trees. Later, algae grow in their fur." No new Learn It is needed.

**SHOULD-4. S14: "Since" says the sources give a reason that they do not.**
- Key blank 1 makes the summary read "Since balls left outside often roll away or go flat, Room 9 keeps its recess balls in a crate." Source 1 says Room 9 keeps balls in a crate. Source 2 says balls left outside roll away or go flat and that every class will get a crate. Neither source says that is why Room 9 uses a crate. The lesson's own rule is "A summary tells only what the sources say" (C05, C15, S05, S15).
- The inference is natural, so I do not rate it MUST.
- **Fix.** Make the cause the principal's: "{0} balls left outside often roll away or go flat, every class will get its own crate." with key "Since", and put the Room 9 crate as the example in blank 2 ("Room 9 already keeps its balls in a crate"). Or switch blank 1 to an addition word and keep "Next week" in blank 2.

**SHOULD-5. Items whose key can be copied from the page.**
- **S01** ("Over the years,") and **P4** ("In the fall," from "Each fall") put the key phrase in the source text, so a word match finds it. The DOK is 2 and the first review accepted P4 (NOTE-3). I keep this as a SHOULD only for S01, whose key is word for word in Source B and whose H2 does not help beyond that. If the author wants one change: make the source say "after many seasons" and keep "Over the years," as the key.
- **C09 and S09 hint 3** settle sentence 1 (the one with no time word), leaving 6 of 24 orders. This is the fix the first review asked for, so I accept it (NOTE-2).

### NOTE

**NOTE-1. Hint ladders: hand recount of live choices (clue + hints 1-3) for all 15 core items.** "Live" means not named or ruled out by a hint. Hints do not echo the keys' wording. All 15 pass; the author's counts match mine.

| Core | Type | Live after clue, H1, H2 | H3 removes | Live after H3 |
|---|---|---|---|---|
| C01 (P4) | dropdown | 4 (H2 points at the source's "fall") | "For example" | 3 |
| C02 (P5) | mc | 4 | "That is all I have to say" | 3 |
| C03 | mc | 4 | "A few monarchs" | 3 |
| C04 | choose 2 of 5 | 5 | talking butterfly | 4 (6 pairs) |
| C05 | hot-text 6 | 6 | sentence 5 | 5 |
| C06 | choose 2 of 5 | 5 | "Most dragonflies stay near ponds" | 4 (6 pairs) |
| C07 | choose 2 of 5 | 5 | resting wings | 4 (6 pairs) |
| C08 | hot-text 5 | 5 | sentence 2 | 4 |
| C09 | order | 24 orders (clue and H1 say only "no time word, usually first") | position 1 | 6 orders |
| C10 | hot-text 6 | 6 | sentence 5 | 5 |
| C11 | mc | 4 | "every player" | 3 |
| C12 | hot-text 5 | 5 | sentence 5 | 4 |
| C13 | mc | 4 | cartoon | 3 |
| C14 | 2 dropdowns | 4 and 4 | "Last year" (blank 1) | 3 and 4 |
| C15 | choose 2 of 6 | 6 (15 pairs) | sentence 6 | 5 (10 pairs) |

On the similar items the same pattern holds (one named choice removed by hint 3), except S03 (MUST-1).

**NOTE-2. C09 and S09.** Unique order in both. C09: nymph, "Later ... adult", "Then the adult takes to the air", "At last ... hunts". "Later" can only follow the nymph, "Then the adult" needs an adult, "At last" is the end. S09: seed, "Soon, ... sprouts", "After that, each year ... ring", "In the end, ... counted". S09's words no longer share a list with C09's. Hint 1 and the clue are generic. Hint 2 is a strategy. Hint 3 settles only the first sentence. This meets the first review's MUST-1 and MUST-2.

**NOTE-3. The numbered-draft rule: five items, C05, C08, C10, C12, C15.** C12 now works and is answerable. The notes list is Source 1's own sentences, (4) "Some players like to listen to music while they warm up" is the only tiny detail, and (1), (2), (3), (5) each state the big idea or explain it. It is one defensible answer. I confirmed at 390x844 that the list renders as a readable paragraph and the five options match it (`item12.png`). Prompt frames differ across the five ("take out", "copied word for word", "opinion", "least important", "two to take out"), and they sit in different sets.

**NOTE-4. Other checks.**
- **New topics.** Sidewalk chalk (C14) and recess balls and crate (S14) occur in no other lesson in `js/data` (grep: chalk appears in `T-TS.js` only as "chalkboards called slates" in a different skill; recess and crate appear in `T-T1.js` and `T-T34.js` in unrelated passages). **Orchid, origami crane and walk-a-thon occur only in `T-C.js` (3.T.C.1.c), not in this lesson.** No collision between the two lessons or inside this one. The monarch passages (p1, p2) still repeat milkweed facts that also appear in `T-T2.js`, `T-C.js` and `L-V3.js`; that was already so before this batch.
- **Source labels.** Most similar items say "Source A / Source B", but C14, S14 and the passages say "Source 1 / Source 2". Not changed; still a NOTE.
- **S12 is `mc`, C12 is hot-text.** Same skill, different format. Acceptable, but converting S12 to a numbered hot-text would give the "Try a similar question" the same editing task.
- **Points, DOK.** Choose-two = 2, C14 two-slot dropdown = 2, order = 2, others 1. DOK values are reasonable (C14 DOK 3 is generous).
- **Official wording** ("Summarize researched, relevant, and accurate information from at least two credible sources about a self-selected topic"). Credibility: C04, C13, S04, S13. Relevant: C06, C07, C12, S06, S07, S12. Accurate and sourced: C05, C10, C15, S05, S10, S15. Own words: C03, C08, S03, S08. Writing a whole summary and the self-selected topic live in the `write` card. C09 and C14 test the shape of a summary (order, linking), which fits as support skills.
- **Grade 3 suitability.** Nothing too young. "Nymph", "chrysalis", "forecasters" and "agency" are glossed by the passages or by H2.
- **Readability.** FK by `verification/readability.py`: p1 3.8, p2 3.9, p3 2.7, p4 2.7, p5 3.1, p6 3.4, p7 4.0, p8 2.2. All at or below 4.5, and all passages are 100 words or more. Item text alone is noisy (C04 10.1, S04 14.0) because choices have no full stops. It is not a passage measure. The `how` lines for C11 and S11 (7.7, 12.0) are long run-ons because of quoted choices; not a failure.
- **Gates.** `check-content.js` prints PASS (0 failures, 9 warnings; the RA1c line is an info line that lists P1-P3 as Practice Together).

**NOTE-5. Browser sitting at 390x844.** Server `node verification/serve.js . 8872`. `ra1c-final/run.py` worked all 15 core items in order: a wrong answer (all 15 returned "Not quite"), three hints (3 of 3 each), Show Me How (3 to 4 steps), and Try a Similar Question (S01-S15, each `like` maps to its core item, each correct answer checked right). "Go on to set 2 / set 3" worked, and the screen after item 15 read "Set 3 finished". `corr.py` answered all 15 correctly: "That's right!" with the right `why` on all 15. Screenshots of C09, C12 and C14 show no horizontal scroll (page width 390 = viewport). No page errors. The only console error is the Google Fonts request (offline sandbox). **0 bad rows.**

## 3. Facts verified (web)

| Claim | Verdict | URL |
|---|---|---|
| Mars has two small moons (S05, unchanged) | True: Phobos (radius about 6.9 miles) and Deimos (about 3.9 miles) | https://svs.gsfc.nasa.gov/11326 |
| Monarch: caterpillars eat only milkweed; milkweed toxins make monarchs taste bad to predators; eastern monarchs go to Mexico in fall; use the sun to stay on course; caterpillar about two weeks, chrysalis a week or two | True | https://www.nationalgeographic.com/animals/invertebrates/facts/monarch-butterfly |
| Dragonfly: four wings moved independently; hovers and flies backward; nymph stage lasts up to years; nymphs eat tadpoles and minnows; climbs out on a stem and sheds its skin | True | https://www.iowadnr.gov/news-release/2019-08-08/6-cool-things-you-should-know-about-dragonflies |
| Dragonflies do not sting; adults eat mosquitoes and other small insects; wings held horizontally at rest; large eyes; nymph stage months to years | True (Wikipedia calls bite or sting a misconception) | https://en.wikipedia.org/wiki/Dragonfly |
| Brown thrasher: Georgia state bird; more than 1,000 song types; repeats each phrase only twice | True | https://georgiawildlife.com/out-my-backdoor-brown-thrashers-special-songster |
| Brown thrasher: twig nest lined with grass and leaves; bluish or greenish eggs with reddish-brown spots; both parents incubate and feed; strike intruders; two or sometimes three broods; sweeps bill side to side through leaf litter; yellow eyes | True. "Pale blue" is a fair simplification, and p4 says "two sets", which is the low end | https://en.wikipedia.org/wiki/Brown_thrasher |
| Platypus lays eggs; webbed feet; dense waterproof fur; forages in rivers and streams in Australia; males have a venomous spur on the ankle | True ("flat bill" not stated on that page; "back foot" is a fair simplification; both are widely documented) | https://australian.museum/platypus |
| Comet: ice turns to gas near the Sun and forms a tail pointing away from the Sun | True (the ion tail points directly away; the dust tail curves) | https://en.wikipedia.org/wiki/Comet |
| "Some comets are named after the people who found them" (S12) | True for traditionally named comets (Halley, Hale-Bopp); modern designations are mostly codes, so "some" is accurate | https://en.wikipedia.org/wiki/Comet |

The first review's sources for termites, tree rings, warm-up and cool-down timings and the Olympics stand and I did not re-fetch them. I found no factual error.

## 4. What was fixed since the first review (checked, all good)

C09 and S09 ladders (generic clue, strategy H2, H3 settles one sentence); S14 rebuilt (no shared options); S01 options (0 shared); P5, S02, C11, S11 clues now strategy only; C13 and C11 keys; S08 shows both sources; S04, S13, S03 traps changed; Learn It 2 asks for two removals; P2 note 1 changed; S02 distractor replaced; tree-ring items hedged; C12 converted; C14 moved to a new topic. The new faults above are the three MUSTs and the C08 one-word copy.

After MUST-1 to MUST-3 and SHOULD-1, a re-solve of S03, S04, S13 and C08 is enough.

**Verdict: CHANGES REQUIRED.**


# Third review (3.T.RA.1.c)

**Reviewer:** independent, did not author or earlier-review this lesson. No lesson edited, no git. Scratch: `scratchpad/r3/` (same scripts as the C.1.c third review).

## Verdict: CHANGES REQUIRED

One MUST: the monarch topic is already taught in three other lessons. Keys, scoring, hint wording and the phone sitting are sound; the rest are SHOULDs.

| Id | Sev | One line |
|---|---|---|
| M1 | MUST | Monarch and milkweed are not a new topic: T-T2 3.T.T.2.b, T-C 3.T.C.1.b and L-V3 3.L.V.3.d teach the same facts |
| S1 | SHOULD | S12 is 0.253 and S11 0.215 (all words) against C12 and C11; the S12 frame is identical |
| S2 | SHOULD | C07: after h2 and h3 only the two keys are live (S07 is fine) |
| S3 | SHOULD | S07: the second key ("fur keeps water out") does not answer "swims well"; the `how` admits it is about staying dry |
| S4 | SHOULD | S04: the museum guide to "space tools" by astronomers is a weak fit for weather satellites |
| S5 | SHOULD | P3 h1 names the key's category; C01 clue and h2 point at the key's phrase |
| S6 | SHOULD | The key is the longest option in six of the seven core mc/ms items |
| S7 | SHOULD | Learn It and Watch Me do not model dates and relevance (S13, S04), a closing or opening sentence (C02, C11, S02, S11), or "when/if" (C14, S14) |

## 1. Blind solve

Same method as the C.1.c third review: `vm` sandbox, mock `PP.addLesson`, refs resolved (C01 = P4, C02 = P5), seeded shuffles of choices, options, slot options and the four order steps, and all keys, `answer`, `why`, hints, `how`, `clue`, `misconception`, `like` and `std` stripped. The stripped JSON had zero hits for those key names. I printed the passages and items, wrote `myans-RA.txt`, and only then printed any key. I did not read the teach or Watch Me text, the author log or the earlier reviews before that.

**Agreement: 35 of 35**, including the order items C09 (D, B, C, A) and S09 (A, B, D, C) and the two-slot dropdowns C14 and S14. The solve was fully blind. Every item had one defensible answer. The slowest were S07 (see S3), S04 (see S4) and C14 blank 1.

## 2. Keyed text beside why, how and hints (all 35)

I read the key beside `why`, `how`, hints and clue for every item. All match. Every hint that names a choice names one that exists. No hint copies a key. C08's `how` step 4 ("Dev should say the same idea a new way") is fine.

## 3. Hand recount of live choices after clue and hints 1-3 (core)

| Item | Live | Note |
|---|---|---|
| C01 | 3 of 4 | h3 removes "For example"; clue "later in the year" and h2 "words that tell when the trip begins" lead to "In the fall," (S5) |
| C02 | 3 of 4 | removes "That is all I have to say" |
| C03 | 3 of 4 by hints; 2 once h1 ("instead of copying") is applied | the copy and "A few monarchs" go; the opinion is left (not a hint problem) |
| C04 | 4 of 5 | removes the talking butterfly |
| C05 | 5 of 6 | h3 clears (5) |
| C06 | 4 of 5 | removes "Most dragonflies stay near ponds" |
| C07 | **2 of 5** | h2 says to look for facts about flying; h3 removes the resting fact; "ponds" and "sting" are not about flying (S2) |
| C08 | 4 of 5 | h3 clears (2) |
| C09 | position 1 given | h3 says the sentence with no time word starts it; accepted earlier (NOTE-2) |
| C10 | 5 of 6 | h3 clears (5); the clue defines opinion as how the writer feels |
| C11 | 3 of 4 | h2 "which of the two sources" nearly settles it; h3 removes "Every player" |
| C12 | 4 of 5 | clears (5) |
| C13 | 3 of 4 | removes the cartoon |
| C14 | 3 of 4 in blank 1, 4 of 4 in blank 2 | removes "Last year" |
| C15 | 5 of 6 | clears (6) |

## 4. Similarity (own `jac.js`, same method as in the C.1.c third review)

| Pair | All words | Content words | Shared options |
|---|---|---|---|
| S12/C12 | **0.253** | 0.191 | 0 |
| S11/C11 | **0.215** | 0.182 | 0 |
| S09/C09 | 0.187 | 0.115 | 0 |
| S14/C14 | 0.170 | 0.156 | 1 ("Instead", allowed) |
| the rest | 0.128 to 0.167 | | 0 |

## 5. Findings

### MUST
**M1. The monarch is not a new topic.** I searched all lessons, sets and tasks in `js/data`. Passages on the same facts exist in `T-T2.js` 3.T.T.2.b "From Egg to Butterfly" (egg on milkweed; the toxin that makes birds leave monarchs alone), `T-C.js` 3.T.C.1.b p2 "The Monarch's Long Trip", and `L-V3.js` 3.L.V.3.d p1 "The Life of a Monarch Butterfly" (egg on a milkweed leaf; caterpillar; chrysalis). RA.1.c p1 and p2 repeat those facts, including the juice that birds dislike. Sidewalk chalk, recess balls, platypus, comets, satellites, tree rings and termites are not in any other passage (termites and "comet" appear in T-T2 and T-T34 only in unrelated lines); dragonflies and warm-ups likewise occur only here. Fix: move the p1 and p2 topic (and the Together set) to an unused animal, for example a salmon's trip upstream. If the plan allows a topic to recur across skill families, downgrade to SHOULD.

### SHOULD
**S1. S12 and S11 are over the 0.21 ceiling on the all-words measure.** S12 has the same frame as C12 ("is making notes for a summary of Source A. Which detail is the LEAST important"). Fix: reword S12's frame, and give S11 a different prompt stem.

**S2. C07's ladder leaves only the two keys.** With "facts about flying" in h2 and the resting fact removed in h3, no other choice is about flying. Fix: h3 should not remove the one plausible decoy ("holds its wings out flat" mentions wings); say instead "Check each fact: does it tell how the dragonfly flies, or something else about it?"

**S3. S07: the second key does not answer the question.** The stem asks for what helps a platypus "swim well". Keys are "webbed feet" and "thick fur keeps water out". `how` step 2 says the fur "helps the platypus stay dry", which is not swimming. "It hunts for food in streams" is a fair alternative reading. Fix: ask "what helps a platypus stay dry and move through water" or replace the fur sentence with "Its flat bill helps it feel food in the water" (check against the source).

**S4. S04: a weak fit.** Key 2 is "a science museum's guide to space tools, written by its staff astronomers". Astronomers and "space tools" do not obviously cover weather satellites, and the item's own clue says the source must "fit your question". Fix: "a science museum's guide to weather satellites, written by its staff scientists".

**S5. Two ladders point at the key.** P3 h1 says "Look for a sentence that tells about the writer instead", and only one choice is first person. C01's clue ("what happens later in the year") and h2 ("the words that tell when the long trip begins") lead to "In the fall,". Fix: P3 h1 as strategy only ("A summary tells only what the sources say. Ask of each sentence: is this from a source?"); C01 h2 "Read the second sentence and ask when it happens in a monarch's year."

**S6. Key length.** In the core, the key is the longest option in C02, C03, C04, C06, C07 and C11 and tied in C13, with margins of 4 to 17 characters (C03 85 against 68; C04 82 against 69). Fix: lengthen two decoys per item. Several keys also use the only "Both sources" / "and" frame (C02, C11, S02, S11).

**S7. Learn It and Watch Me.** They model joining, big ideas, cutting, own words and trust. They do not model: date and relevance (S13's "this year's date", S04's 1958 magazine, C13's topic check; the teach point says only "who wrote it and whether it names its sources"); a closing or opening sentence (C02, C11, S02, S11, P1, P5); `when` and `if` (C14, S14: the teach point lists "also, in addition, first, next, later, at last"); picking facts that answer a question (C07, S07). Fix: add "Check the date and that the page answers your question" to teach point 3 and one `steps` line each for the closing sentence and `when`/`if`.

### NOTE
- **N1. C09 and S09 h3** give position 1; accepted in the earlier NOTE-2. After h1 and h3 the time words settle the rest.
- **N2. "Cut a sentence" items.** C05 (not in the sources), C10 (opinion), C12 (tiny detail) and C15 (both) are four of fifteen. C15 is C05 and C10 joined. The reasons differ, so I accept it.
- **N3. C08 (2)** keeps "young dragonfly called a nymph" from Source 1 almost word for word; the key (4) is unique, but the `why` says the others use "new words". Cosmetic.
- **N4. C14 blank 2.** "Before students draw near the wall, the walkway stays clear" parses, though it changes the meaning; "When" is unique by meaning. S14 slot 2 ("If") is fine.
- **N5. C03.** "seem to turn orange" changes "look orange" slightly (turn implies change). Acceptable for grade 3.
- **N6. Opinion items** (C10 "most amazing", S10 "scariest", P3 "I wish") are marked by a feeling word; easy but fair. C06 big-idea key for Source 2 is the only choice that sums a whole source.
- **N7. Source labels.** C14, S14 and the passages say "Source 1 / 2"; most similar items say "Source A / B". Unchanged since the last round.
- **N8. Alignment.** Official wording: "Summarize researched, relevant, and accurate information from at least two credible sources about a self-selected topic." Credibility C04, C13, S04, S13; relevance C06, C07, C12, S06, S07, S12; accuracy and sourcing C05, C10, C15; summarizing C01-C03, C08, C09, C11, C14. Points: choose-two, two-slot dropdown and order are 2; the rest 1. DOK fits (C14 DOK 3 is generous).
- **N9. Item-text FK** (my `fk.js`; options get a full stop): over 4.5 are C02 4.6, C03 5.4, C04 4.7, C05 4.6, C08 5.0, C10 5.2, C11 5.7, S02 4.8, S04 5.0, S08 5.7, S11 5.5, S13 4.9, P1 5.7, P3 5.3, P5 4.6. The long, unpunctuated draft lines drive it, as the earlier review said. Passages with the repo formula: p1 3.8, p2 3.9, p3 2.6, p4 2.7, p5 3.1, p6 3.4, p7 3.6, p8 1.7.
- **N10. Grade 3.** Nothing too young; "nymph", "chrysalis", "forecasters" are glossed.

## 6. Facts
| Claim | Result | URL |
|---|---|---|
| Milkweed toxins make monarchs unpalatable; birds learn to avoid them; migration south in fall; caterpillar stage about 2 to 3 weeks, chrysalis about 10 to 12 days | Supported (the page gives 2 to 3 weeks; the passage says "about two weeks"; fine) | https://wvdnr.gov/monarch-butterfly/ |
| A sun compass guides monarchs to Mexico | Supported | https://journeynorth.org/resources/monarch-navigation |
| Nymph stage lasts up to four years; each of four wings moves independently; hovers and flies backward | Supported ("months or even years" fits) | https://www.iowadnr.gov/news-release/2019-08-08/6-cool-things-you-should-know-about-dragonflies |
| Platypus lays eggs, webbed feet, dense waterproof fur, male spur on the ankle, hunts in streams | Supported (the page says "ankle" for the spur, not "back foot"; fine at grade 3) | https://australian.museum/learn/animals/mammals/platypus/ |
| First weather satellite was TIROS-1 in 1960, so a 1958 magazine predates it | Supported | https://nesdis.noaa.gov/content/60-years-ago-today-first-successful-weather-satellite-was-launched |
| Mars has two small moons; a comet's tail points away from the Sun | Search only (NASA/StarDate results), standard facts | |
| Tree rings: one per year; width reflects the weather | Standard (not re-fetched) | |

## 7. Browser (390 x 844)
`node verification/serve.js . 8731`, Playwright with touch and mobile emulation. All 15 core items in order through three sets (C09 order and the ten-line hot texts included): every item rendered, with the "Read the passage / Question" tabs for passage items. No horizontal scroll (also after three hints), no control under 44 px, three hints on every item, "That's right!" for the correct response on all 15, no page errors. Screenshots in `scratchpad/r3/shots/` (`RA-y*-*.png`).

## 8. What to change
1. New topic for p1 and p2 (M1).
2. Reword S12 and S11 frames (S1); fix the C07, P3 and C01 ladders (S2, S5).
3. S07, S04 key fit (S3, S4); lengthen decoys (S6); Learn It lines (S7).


---

# Fourth review (3.T.RA.1.c)

**Reviewer:** independent, did not author. No lesson edits, no git. Scratch files are in `scratchpad/c4/` (the same scripts as the C.1.c fourth review). I read the earlier reviews only after my answers were saved.

## Verdict: CHANGES REQUIRED

Keys, facts, scoring and browser behaviour are sound, and the similarity numbers are clean. One pre-answer inside set 1 blocks acceptance.

| Id | Severity | One line |
|---|---|---|
| M1 | MUST | C02's distractor and `how` ("the sentence about frogs and toads adds a new fact") pre-answer C05, whose key is "Frogs and toads are also amphibians" |
| S1 | SHOULD | The right ending always opens "Both sources show that ..." (C02, S02, P5); no distractor uses that frame |
| S2 | SHOULD | C07: choice A is a real competitor for D, and the stem asks "why", not "how" |
| S3 | SHOULD | Several keys are the longest option and the top word-match (S11 clearly; C11, C03, C13, S13) |
| S4 | SHOULD | Sets 1 and 2 are each a single topic (axolotl x5, dragonfly x5) |
| S5 | SHOULD | C07's option A is the exact sentence that is C08's key, and C10 option (6) repeats it |

6 NOTEs follow.

## 1. Blind solve

**Method.** `load.js` loads T-RA.js in a Node `vm` with a mock `PP.addLesson`. `blind4.js` resolves refs and prints the ten passages, core C01-C15, similar S01-S15 and Together P1-P5, with seeded shuffles of choices, options, slots, rows and order steps. It removes `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like`, `sample`, `criteria` and `comp`. I grepped `stripped.json` for those words as keys (none) and as prose (only "answer(s)", "why" and "how" in prompts and titles, for example "Why Athletes Warm Up"). I saved 35 answers to `my-answers.json` before extracting any key.

**Result: 35 of 35 agree.** The two order items (C09, S09) matched on displayed step numbers.

**How blind it was.** I had seen item ids and types in a grep, but no key, `why`, hint or `how`, and I did not open the lesson source, the author log or any review file before saving. It was a fully blind solve of the shuffled stripped print. Items where I paused: C07 (A against D), C14 slot 2 ("When" or "Before"), C08 (which of (1)-(5) is word for word).

## 2. Keyed text beside why, how and hints (all 35)

I printed the key beside clue, h1-h3, `how`, `why` and the misconception for core, similar and Together. All keys match `why` and `how`. Every `how` ends at the answer. P1-P5 and the addons follow the same pattern, and the monarch/milkweed content is only in p1, p2, P1-P5 and their addons (and in the lesson's `write` card, see N5).

## 3. Hand recount of live choices (core, after clue/h1/h2/h3)

| Item | Start | After h1-h2 | After h3 | Note |
|---|---|---|---|---|
| C01 | 4 | 4 | 3 | "Last winter" |
| C02 | 4 | 4 | 3 | "all the facts I had time to write" |
| C03 | 4 | 4 | 3 | "never gets it back" |
| C04 | 5 (pick 2) | 5 | 4 | dog trainer |
| C05 | 6 | 6 | 5 | sentence (5) |
| C06 | 5 (pick 2) | 5 | 4 | "stay near ponds" |
| C07 | 5 (pick 2) | 5 | 4 | resting wings |
| C08 | 5 | 5 | 4 | sentence (2) |
| C09 | 24 orders | 24 | 6 | h3 gives sentence 1 |
| C10 | 6 | 6 | 5 | sentence (5) |
| C11 | 4 | 4 | 3 | "every player" |
| C12 | 5 | 5 | 4 | sentence (5) |
| C13 | 4 | 4 | 3 | cartoon |
| C14 | 4 + 4 | 4 + 4 | 3 + 4 | h3 removes "Last year" only |
| C15 | 6 (pick 2) | 6 | 5 | sentence (6) |

h1 is a strategy, h2 says where to look and h3 removes one option, on every item. No h3 narrows to the key and none quotes a key. The nearest to an echo is C01 h3 ("what axolotls do every day", key "During the day").

## 4. Similarity (own `jac4.js`; stem + prompt + text + options against the `like[0]` core item)

Measures: **A** word-set, words of 3 or more letters, stop words kept; **B** word-set, all words; **C** multiset of all words.

| Pair | A | B | C | Shared opts | | Pair | A | B | C | Shared opts |
|---|---|---|---|---|---|---|---|---|---|---|
| S01~C01 | 0.161 | 0.172 | 0.147 | 0 | | S09~C09 | 0.127 | 0.187 | 0.164 | 0 |
| S02~C02 | 0.141 | 0.172 | 0.171 | 0 | | S10~C10 | 0.122 | 0.190 | 0.160 | 0 |
| S03~C03 | 0.118 | 0.132 | 0.130 | 0 | | S11~C11 | 0.118 | 0.133 | 0.132 | 0 |
| S04~C04 | 0.173 | 0.173 | 0.157 | 0 | | S12~C12 | 0.108 | 0.144 | 0.113 | 0 |
| S05~C05 | 0.159 | **0.217** | 0.180 | 0 | | S13~C13 | 0.104 | 0.127 | 0.161 | 0 |
| S06~C06 | 0.133 | 0.149 | 0.151 | 0 | | S14~C14 | 0.165 | 0.192 | 0.163 | **1** |
| S07~C07 | 0.114 | 0.134 | 0.114 | 0 | | S15~C15 | 0.116 | 0.179 | 0.154 | 0 |
| S08~C08 | 0.111 | 0.190 | 0.131 | 0 | | | | | | |

- Measure A maximum 0.173 (S04); every pair is under 0.21. Content words only (stop words removed): maximum 0.208 (S14; shared tokens are the "Source 1/2", "newsletter", "principal's page" labels and "Instead"), all others 0.149 or lower.
- Only S05 is over 0.21, on measure B (0.217), and that comes from the identical prompt frame ("Source ... sentence ... summary ... which may use only"). S14 shares one option ("Instead") with C14; the limit is one.
- No near-copy. Surface topics are all new for the similar items (termites, platypus, comet, satellites, tree rings, recess balls).

## 5. Findings

**M1. C02 pre-answers C05 (set 1).** C02's distractor A is "Salamanders belong to the same group of animals as frogs and toads." C02's `how` step 3 says "the sentence about frogs and toads adds a new fact" and `why` says "add a new fact". Three items later C05 asks which sentence to take out, and its key is "(4) Frogs and toads are also amphibians." A child who reads Show me how on C02, or just notices the frogs-and-toads sentence, has C05's answer. This is a pre-answer inside core, in the same set. *Fix:* change C02's distractor A to a fact about something else that is not in the sources (for example "Many people keep salamanders in tanks at home") and reword `how` and `why` to match, and keep "frogs and toads" only in C05.

**S1. Formula key.** The best ending is the only choice that begins "Both sources show that ..." in C02, S02 and P5. A child can pick it without reading the others (the other options are a detail, an outside fact and "that is all I have to say"). That is the skill, but it makes the item answerable by pattern. *Fix:* give one distractor in each item the same opening with a wrong claim (for example "Both sources show that axolotls are the best pets"), and vary the key's opening in one of the three.

**S2. C07, choice A against D.** Stem: "Dev's summary will explain why adult dragonflies are such good fliers." Keys: "It has four wings, and it can move each wing by itself" and "It can fly forward, hover and even fly backward." Choice A, "It catches mosquitoes, flies and other small insects in the air," also shows flying skill (the source says it is quick enough to grab insects as they zoom past), and D is a result rather than a cause. The pair is defensible, but a careful child can argue for A. *Fix:* change the stem to "explain how an adult dragonfly moves through the air", and replace A with a hunting fact that is clearly not about flying, such as "Its two large eyes help it spot a tiny insect from far away."

**S3. Keys that are longest and top word-match** (`lex.js`). S11: key 70 characters against 57, 43 and 36, and 6 shared content words against 3/2/2. C11 94 against 84-86; C03 82 against 74-77; C13 84 (tied) and top lexical match 3/1/2/1; S13 93 against 78-88; S02 81 against 70-79; S08 and S10 by 2 to 4 characters. *Fix:* lengthen one distractor to equal the key in S11, C11 and C13; the others are fine.

**S4. One topic per set.** C01-C05 are all axolotl (Kai); C06-C10 are all dragonfly (Dev); C11, C12, C15 are warm-ups; C13 (water) and C14 (chalk) are one-offs. The similar items give good variety, but a child who finds the axolotl passages hard has five items in a row on them. *Fix:* move one axolotl item (C04 or C05) and one dragonfly item (C09) to a new topic.

**S5. Repeated sentence across set 2.** C07's option A is "It catches mosquitoes, flies and other small insects in the air", word for word from Source 2. That same sentence is the key of C08 ("which sentence is copied word for word") and appears again as C10's option (6). A child who met it in C07 as a Source 2 fact sees it match in C08. *Fix:* in C07, paraphrase option A (see S2), so the verbatim sentence appears only in C08 and in the passage.

**NOTE N1. Other items checked and kept.**
- C08 key (4) matches p6 paragraph 2 sentence 1 exactly. Options (1), (2), (3) and (5) are paraphrases with some shared words (for example "young dragonfly, called a nymph"), and h3 handles the nymph one.
- C14 slot 2: "Before students draw near the wall, the walkway stays clear" is a grammatical sentence a child could defend. "When" is the best fit and the `how` says the others change the meaning. It is not wrong, so a NOTE. DOK 3 for a two-blank linking-word item is generous (DOK 2).
- C05 and C08 show the draft in the stem and again as the options (six sentences twice), which makes the phone screen long. It is how hottext options work, but a shorter stem such as "Kai's draft is in the options" would save a screen.
- C09's h3 tells the first sentence; the remaining order is held by "Later / Then / At last". Fine for DOK 2.
- "Instead" is the distractor in C01, C14 and S14 (S14 shares it with C14, one shared option).
**NOTE N2. Pre-answer and topic scan across all of js/data (`topics.js`).** Axolotl, sidewalk chalk and recess balls occur only in this lesson. Dragonfly also appears in 3.T.SS.2.b S15 (a simile option, "quick as a dragonfly") and in a 3.T.T.4.b poem; neither duplicates an item. Warm-up appears in TS-SEQ C15 (track warm-up directions, a time-word item) and as a phrase in T-T2 passages. TS-SEQ C15 is the same topic but a different skill; a NOTE. Monarch and milkweed: in this lesson only p1, p2, P1-P5, their addons and the `write` card; they also appear in 3.T.C.1.b, 3.T.T.2.b and 3.L.V.3.d, which are other lessons.
**NOTE N3. Browser (390 x 844).** `node verification/serve.js . 8741`, Playwright with touch and mobile emulation. I ran all 15 core items through sets 1-3 (`browse4.py`, screenshots in `scratchpad/c4/shots/`). Every item rendered, passage items show "Read the passage / Question" tabs, no horizontal scroll before or after three hints, no control under 44 px. Three hints appeared on all 15 and the correct response gave "That's right!" on all 15. No page errors. The "Show me how (shows the answer)" button wraps awkwardly; that is the player. I set answers through the player context rather than tapping each choice. The server was killed by pid.
**NOTE N4. Alignment.** Official wording: "Summarize researched, relevant, and accurate information from at least two credible sources about a self-selected topic." Source choice (C04, C13, S04, S13), own words (C03, C08, S03, S08), relevance (C07, C12, S07, S12), accuracy (C05, C10, C15, S05, S10, S15) and joining ideas (C01, C14, C09, S01, S09, S14) match it. Points: choose-two, order, two-blank dropdown are 2; the rest 1. Passages are grade 3 length. The topic is self-selected in the standard, and the `write` card offers it.
**NOTE N5. The `write` card names the monarch sources.** That is fine (they are the Together passages).
**NOTE N6. Brand-new items looked at (C01-C05, C07, S01, S02, S04, S07).** C01 and S01 test a contrast and a time word, and both are sound. C04 and S04 are clear and each has a plausible "expert but off-topic" decoy. S04's 1958 magazine is before weather satellites (the first was TIROS-1 in 1960). S07's rudder fact is correct. C03 and S03 each have a verbatim copy decoy, which the prompt already forbids, so the decoy is easy. C07: see S2.

## 6. Facts

| Claim | Result | URL |
|---|---|---|
| Axolotl: feathery external gills, also lungs and gulps air, lives its whole life in water, suction feeding, heals without scars, regrows limbs, heart and parts of the brain | Supported | https://en.wikipedia.org/wiki/Axolotl |
| Axolotl: wild numbers about 50 to 1,000 adults, only the Xochimilco area near Mexico City | Supported ("fewer than one thousand may be left" is safe; the 2014 estimate was 700 to 1,200 in https://www.scientificamerican.com/blog/extinction-countdown/the-population-of-a-unique-mexican-amphibian-drops-90-percent-in-four-years) | |
| Axolotl hunts at night | Not stated on the page I read; widely repeated and consistent with the nocturnal feeding in other sources | |
| Dragonfly nymph lives months to years and preys on tadpoles and small fish; hovers and flies backward; holds wings out flat at rest | Supported | https://en.wikipedia.org/wiki/Dragonfly |
| "Cannot sting people" | Correct (they do not sting; large ones can nip, but the passage does not say they cannot bite) | same |
| Platypus: short webbed front feet paddle, hind feet act as rudders; egg-laying mammal; male spur; streams in eastern Australia | Supported | https://australian.museum/learn/animals/mammals/platypus/ |
| Weather satellites began in 1960 (TIROS-1), so a 1958 magazine predates them | Supported by the earlier review | https://nesdis.noaa.gov/content/60-years-ago-today-first-successful-weather-satellite-was-launched |
| Monarch life cycle, migration to Mexico, milkweed | Checked by the earlier reviews | see the first review |
| Termite king and queen, comet tail points away from the Sun, tree-ring widths and weather, warm-up and cool-down lengths | Standard; not fetched in this pass | |

I found no factual error in the core, similar or Together items.

## 7. What to change
1. C02: replace distractor A and its `how`/`why` so "frogs and toads" appears only in C05 (M1).
2. C02, S02, P5: give one distractor the "Both sources show that" opening (S1).
3. C07: stem "how" and a clearly off-topic A (S2, S5).
4. S11, C11, C13: lengthen one distractor (S3).
5. Move one axolotl and one dragonfly item to new topics (S4).


---

# Fifth review (3.T.RA.1.c, js/data/lessons/T-RA.js)

Reviewer: independent (did not write the content). Files not edited. No git. No servers started.

## Verdict: ACCEPT (0 MUST, 4 SHOULD, 5 NOTE)

The MUST of the fourth review (C02, the "frogs and toads" distractor also appearing in C05) is fixed: C02's distractor is now "Both sources show that axolotls make the best pets for young children." and "frogs and toads" appears only in C05. I found no MUST in the four changed items (C02, C07, S02, S11) or elsewhere in the lesson.

## 1. Blind solve

Method: Node `vm` sandbox, my own scripts in `scratchpad/b4r6/` (`ld.js`, `blind.js`, `cmp.js`; one run covers both lessons). It prints the five Together items (P1-P5), the 15 core items and the 15 similar items, with seeded-shuffled choices, passages, stems and prompts, and with no key, `why`, hints, `how`, `clue`, `misconception` or `like`. Sentence-level hottext targets are shown as numbered options in shuffled order. I saved my answers to `scratchpad/b4r6/myans.saved.json` before extracting any key.

- Agreement: **35 of 35** in this lesson (70 of 70 across both lessons).
- Honesty: blind to keys, `why`, hints and `how` of the current text. I did not read the RA.1.c fourth-review section or the author log before solving; I read only the tail of the C.1.c review (which has no RA content). So this lesson's solve is fully blind.
- Easiest by elimination: P3, S10, S05 (the opinion or off-source sentence is plain), S12.

## 2. The four changed items (RA.1.c)

| Item | Result |
|---|---|
| C02 | Fixed. Options: key "Both sources show that axolotls are special water animals that need help." (73), the hunting detail (75), pets claim (70), "Those are all of the facts ... I had time to write" (67). The frame "Both sources show that" now appears on two options, so it is no longer a tell. Key is not the longest. One defensible answer. h3 rules out the filler line only (3 live). `how` says "a claim that neither source makes" for the pets option. |
| C07 | Fixed. Stem "how an adult dragonfly moves through the air". Key pair B (four wings, each moved alone) and E (forward, hover, backward). Distractors: resting wings, ponds, and the eyes fact (60, the longest). The verbatim "catches mosquitoes" sentence now occurs only in C08 and C10. No second defensible pair. h3 rules out the resting fact (4 of 5 live). |
| S02 | Key reworded (no "Both sources show"), and the distractor "Both sources show that the platypus is the fastest swimmer in all of Australia." carries the frame. Good anti-cue. But the key is the longest (83 against 79, 71, 70). See S1. |
| S11 | Key is now the shortest (70 against 72, 82, 93). The key joins both sources; the other three use one source or go beyond. Good. |

## 3. Per-item checks (5 Together, 15 core, 15 similar)

- **Key beside explanation (script `kbe.js`).** For all 30 core and similar items, the key text appears in both `why` and `how`; no distractor text appears in the first 160 characters of `why`. Together items have no `how` by design. Passed.
- **Live choices after hints 1-3.** I read all 90 hints. Every h3 rules out at most one option, or gives a method (C05, C10, C12, C15, S05, S10 name one sentence that fits; C09 and S09 name the first sentence). None narrows to the key. Live counts: C02 3, C07 4 of 5, S02 3, S11 3 (agree with the author's recount).
- **Longest-key cue (script `chk.js`).** Keys that are longest or tied-longest among mc items: S02 (**+4**), S12 (tie, 54/54), P1 (+2), P2 (+2), P5 (+4, legacy). Not longest: C02, C03, C11, C13, S03, S11, S13. C13 is 84 against 85, 84, 66. The author's lengthening worked.
- **Paired Jaccard (my own multiset scripts, `jac.js`).** Content-word Jaccard against the paired core item: maximum 0.151 (S14~C14), 0.118 (S02~C02), 0.108 (S01~C01). All-words maximum 0.180 (S05~C05). Options-only maximum 0.194 (S02~C02, no longer inflated). Exact shared options: 0 in all 15 pairs. Every pair passes all four measures at 0.21.
- **DOK and points.** All choose-two, two-blank dropdown and order items are 2 points; the rest 1. Pairs match on DOK and points except S12 (mc) against C12 (hottext), which is a format difference only. No mismatches.
- **Alignment.** `official`: "Summarize researched, relevant, and accurate information from at least two credible sources about a self-selected topic." The items cover credible sources (C04, C13, S04, S13), relevant and accurate facts (C05, C06, C07, C12, S05-S07, S10, S12, S15), own words (C03, C08, S03, S08), linking and order (C01, C09, C14, S01, S09, S14) and wrap-up sentences (C02, C11, S02, S11).
- **Grade 3.** Sources are short, about 100 words each, and the vocabulary is third-grade. C13 and C15 are the heaviest.
- **Distinctness.** No two items differ only by names or numbers. Axolotl, dragonfly and warm-up passages each host five or four items on different skills.
- **Learn It and Watch Me.** The three Watch Me examples (penguin summary with linking words; Dev's opinion and not-in-sources; Noah's red panda source) model big idea, linking, removing opinion and not-in-source facts, and credibility. They do not model: copy against own words (C03, C08, S03, S08), ordering with time words (C09, S09), and a closing sentence (C02, S02, C11, S11). The teach points mention each, and the example box shows time words. See S3.

## 4. Findings

**SHOULD**

- **S1. S02, the key is the longest.** 83 characters against 79, 71 and 70. The author lengthened the others to get C02 right, but S02 was changed to a longer, more elaborate key. *Fix:* shorten the key ("A platypus is a mammal unlike most others, built for life in water." is 66) or lengthen the "everything that I know" option.
- **S2. P5 still teaches the "Both sources show that" cue.** The only option beginning "Both sources show" is the key, and it is the longest (70 against 66, 65, 58). The author left P5 alone because it is a Together item that every child sees first. With C02 and S02 now using the frame on a distractor, the cue works against children who learn it from P5, which is an unintended trap. *Fix:* give one P5 distractor the frame, for example "Both sources show that milkweed grows in many fields and along the roads."
- **S3. Watch Me gap.** Copy against own words (4 items), time-word order (4 items) and wrap-up sentences (4 items) are not modeled in the three Watch Me examples. The child meets them for the first time in the core. *Fix:* add one Watch Me, for example Source: "Penguins huddle together to stay warm." and "Which sentence is in the writer's own words?" with a paraphrase and a copy.
- **S4. Set variety.** Set 1 is axolotl for all five items (C01-C05). Set 2 is dragonfly for all five. Set 3 is warm-up for four. A child who finds one topic hard, or who has seen the passage in another form, loses a whole set. Not changed (the author log says so). *Fix:* use a second topic in one item of each set, as the fourth review asked.

**NOTE**

- **N1. Order items reveal their first position.** C09 and S09 h3: "The sentence that tells how a dragonfly begins has no time word, so it starts the summary." It gives away one position of four, and `how` is consistent. Fine for a scaffold.
- **N2. S02 inference.** "its body is built for life in water" is a synthesis, not a stated fact. The sources give webbed feet, a flat bill and hunting in streams. Reasonable for a grade-3 closing line, but if you want sources-only strictness say "its feet and bill help it hunt in streams."
- **N3. Ms items C04 and S04 use "sources" that mix traits** (anonymous, selling, wrong topic, outdated). Each wrong choice fails on one clear trait. No fix needed.
- **N4. C14 h3 helps blank 1 only.** Blank 2 ("When") has no scaffold, and the hint cannot help twice. 3 live and 4 live. Acceptable.
- **N5. Topic reuse across lessons.** Monarch/milkweed: Together P1-P5 and `write` here, but also 3.T.C.1.b (43 mentions, "Milkweed is the only plant a monarch caterpillar eats.") and 3.T.T.2.b (33). The same fact set is taught in three lessons. Platypus, axolotl, satellite, termite (one anteater sentence in 3.T.T.2.c), tree rings (3.T.T.2.a, 3.T.SS.2.a use "rings" for other things), comets (the "Comets" team name in 3.T.T.4.a only), dragonfly (similes in 3.T.SS.2.b and a poem in 3.T.T.4.b) and warm-up (3.T.SS.1.a directions) are not duplicates. No identical sentence of 6+ words appears in another lesson's passages (script `dupsent.js`). For core and similar items there is no duplicate topic; only the Together set repeats the monarch.

## 5. Facts (WebFetch / WebSearch)

| Claim | Result | URL |
|---|---|---|
| Platypus: mammal that lays eggs; webbed front feet propel it; back feet help steer and stop; males have a spur on each hind leg; found in Australia, feeds on lake and stream bottoms | Supported | https://kids.britannica.com/students/article/platypus/276463 |
| Axolotl: aquatic salamander, keeps gills, regrows limbs without scarring and parts of heart, spine and brain; wild population in Xochimilco canals near Mexico City; fewer than 1,000 estimated | Supported (the page says "doesn't develop lungs"; axolotls have lungs and gulp air, so the passage sentence stands; the passage's "fewer than one thousand may be left" matches the estimates) | https://www.conservation.org/axolotl-facts |
| Dragonfly: starts life underwater as a wingless nymph that lives up to several years; wings move together or separately; hover, fly backward; eat mosquitoes | Supported | https://rangerrick.org/ranger_rick/dragonflies/ |
| Dragonfly rests with wings held out to the sides ("out flat") | Supported in substance (page says "out to the sides") | same |
| Tree rings: one ring per year; wide rings wet or warm years, narrow rings dry or cold years | Supported | https://archive.epa.gov/climatechange//kids/documents/tree-rings.pdf |
| First weather satellite TIROS-1, 1960 (so a 1958 magazine predates any weather satellite) | Supported | https://scijinks.gov/news/celebrating-the-worlds-first-meteorological-satellite-tiros-1 |
| Comet: ice and dust, ice turns to gas near the Sun, tail points away; termite colony started by a king and queen; warm-up and cool-down | Standard; searches run, pages not fetched | |

I found no factual error. Monarch facts were verified in earlier rounds.

## 6. What to change (all optional; verdict stands)
1. S02: shorten the key (S1).
2. P5: give a distractor the "Both sources show" frame (S2).
3. Add a Watch Me for own words, order and the closing sentence (S3).
4. Use a second topic in one item per set (S4).
