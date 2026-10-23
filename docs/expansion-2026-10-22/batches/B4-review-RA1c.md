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
