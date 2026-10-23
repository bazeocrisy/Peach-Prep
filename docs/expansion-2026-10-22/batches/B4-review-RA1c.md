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
