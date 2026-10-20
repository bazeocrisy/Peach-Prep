# Language sets: adversarial review B

Scope: L-GRM-01, L-GRM-02, L-GRM-03, L-VOC-01, L-VOC-02, L-VOC-03, checked against SPEC §2 (assessed expectations, GUM Master/Reinforce only), §5 and §5b (item types, scoring, Help 2) and §6 (content rules). The set files were not edited.

**What I checked mechanically:**
- Every `std` code exists in `js/data/standards.js`. Every GUM code is an M or R row, and every 3.L.GC.2 and 3.L.V code is in the §2 assessed list.
- `verification/check-sets-lang.js` and `check-sets-voc.js` both pass with 0 failures and 0 warnings. Several findings below are things those checkers cannot see.
- I read the scoring, shuffling and Help 2 code in `js/engine/items.js` and `js/engine/player.js`. Three facts matter for this review:
  - `mc`, `ms` and `ebsr` choices are shuffled.
  - **`dropdown` options and standalone `hottext` options are NOT shuffled.**
  - `prompt` is rendered with `textContent`, so it appears as one plain paragraph.
- I checked the guide-word item (VOC-03-7) letter by letter. It is correct.
- The homograph pronunciations (VOC-03-4) and every irregular form are correct.

Severity key: **MUST** = wrong answer, two defensible answers, or a factual error. **SHOULD** = a real quality, spec or fairness problem. **NIT** = polish.

---

## L-GRM-01 "Words that change"

No MUST findings. Every key is correct, and no distractor is also standard English in its blank.

- **SHOULD | L-GRM-01-1**
  - **Problem:** The clue's example ("one foot and two feet") has exactly the same oo→ee change as goose→geese. A child just copies the pattern, so Help 1 gives the answer away.
  - **Fix:** Use an example with a different pattern: "…like one man and two men, or one child and two children."
- **SHOULD | L-GRM-01-10**
  - **Problem:** The clue says "Think of how grow changes." Grow→grew is the same pattern as blow→blew, so the clue hands over the answer.
  - **Fix:** "Blow is a special verb. It does not add -ed to tell about the past. Say 'Yesterday the wind ___ hard' with each choice."
- **SHOULD | L-GRM-01-6**
  - **Problem:** The why says "Hisself is not a word." That is factually wrong: *hisself* is a long-standing regional form, common in the South, and dictionaries list it as dialect. A Georgia child may hear it at home, and being told it "is not a word" is both inaccurate and stigmatizing. The key is still right for written Standard English.
  - **Fix:** "Some people say hisself when they talk, but in writing we use himself: 'Marcus taught himself.'"
- **NIT | L-GRM-01-2**
  - **Problem:** The why says "Taked and catched are not real words." *Catched* is also a dialect form.
  - **Fix:** "Taked and catched are not correct in writing."
- **NIT | L-GRM-01-5**
  - **Problem:** The clue states the exact rule, and only one option satisfies it ("needs an ending… change the y to i before you add -es" → studies). Help 1 already does all the work.
  - **Fix:** Keep the first sentence and replace the second with "Say each choice in 'She ___ every evening' and look at how the word is spelled."
- **NIT | L-GRM-01-9**
  - **Problem:** "Jada and myself" is a very common spoken choice. The why doesn't say why myself is wrong here.
  - **Fix:** Add "Myself is used only when the same person does the action and receives it, like 'I helped myself.'"
- **NIT | set blurb**
  - **Problem:** The blurb says "pronouns like myself and us." The set tests *me*, not *us*, and the blurb doesn't mention the collective and abstract noun items (7 and 8).
  - **Fix:** "Special plurals, special past-tense verbs, -s/-es/-ies, group and idea nouns, and pronouns like me and myself."

---

## L-GRM-02 "Capitals and punctuation"

No MUST findings. The comma, capital and end-mark keys are each the only correct option.

- **SHOULD | L-GRM-02-2**
  - **Problem:** The sentence is "{0} going to help…". The key, *We're*, is being verb + -ing (we **are going**). That breaks §6.6 as Sentence Sense applies it: no BE + -ing in grammar items, because helping verbs are an Introduce row. Here the child has to recognize *are* as part of a progressive.
  - **Fix:** "{0} ready to help in {1} garden this weekend." This uses a plain adjective after the being verb. The slot options stay the same.
- **NIT | L-GRM-02-6**
  - **Problem:** The prompt says "Nia is writing a letter," the same BE + -ing construction in a grammar item.
  - **Fix:** "Nia wrote a letter to her aunt."
- **NIT | L-GRM-02-5**
  - **Problem:** The clue presents the serial comma as required ("a comma goes after each item, before the word and"). Many style guides, including AP, accept "paint, brushes and paper." The item still has one answer, because the distractor puts the comma after *and*. A parent may still push back on the rule.
  - **Fix:** "In a list, put a comma after each item. On the test, a comma also goes before and."
- **NIT | L-GRM-02-7**
  - **Problem:** "The comma goes right before that word" separates the key from choices 2 and 4 by rule alone.
  - **Fix:** None needed. This is the skill. Optionally end the clue at "you need a joining word."
- **NIT | L-GRM-02-4**
  - **Problem:** "Our class wrote letters to a pen pal" is a slightly odd plural/singular mix: many letters to one pen pal.
  - **Fix:** "Our class wrote a letter to a pen pal in Ohio."

---

## L-GRM-03 "Building strong sentences"

No MUST findings. I tested every "simple" row for a hidden compound (Ben and his sister = compound subject, one predicate; it is simple). I tested every "complex" or fragment choice for a missing main clause, and all are correctly marked.

- **SHOULD | L-GRM-03-1**
  - **Problem:** Both Complex rows contain *because*, and the clue says "a part that starts with a word like because." A child can sort the Complex column by keyword without understanding a dependent clause. Both compound rows likewise use ", and/but" in the same position.
  - **Fix:** Change one complex row to another subordinator, with the dependent clause first: "When the bell rang, we ran outside to the bus." Keep the clue's "a word like because, when or since."
- **SHOULD | L-GRM-03-9**
  - **Problem:** "Grandpa's soup tasted good." → *spicy*. Spicy doesn't keep the meaning of good, since spicy soup can taste bad. A careful child can reject it for changing what the sentence says. That leaves no choice that is both precise and faithful.
  - **Fix:** Add context that makes spicy the precise word: "Grandpa put three hot peppers in his soup. 'Grandpa's soup tasted good.' Which word BEST replaces good…?" Or keep the sentence and make the key *delicious*, with distractors nice, okay and fine.
- **NIT | L-GRM-03-4 (slot 2)**
  - **Problem:** "…and everyone **admires** the bright colors" can be argued as a lasting present state. It is weak, but a picky parent could raise it.
  - **Fix:** Pin it to the event: "…and everyone at school {1} the bright colors that day."
- **NIT | L-GRM-03-6**
  - **Problem:** It is tagged DOK 3, but finding two present-tense verbs in a past story is a DOK 2 recognition task.
  - **Fix:** Set `dok: 2`.
- **NIT | L-GRM-03-10**
  - **Problem:** The baby-asleep → quietly link is a one-step recall, so it is closer to DOK 1.
  - **Fix:** Either set `dok: 1`, or make it harder with close options ("quietly / slowly / carefully / gently"). If you do that, check that only one fits "the baby is asleep."

---

## L-VOC-01 "Clues in the sentence"

No MUST findings. Each multiple-meaning item has exactly one sense that fits.

- **SHOULD | L-VOC-01-5, -6, -7, -9, -10 (on screen)**
  - **Problem:** The mini-paragraph and the question share one `prompt` string. The prompt renders as a single `textContent` paragraph, so an 8-year-old sees one long block ending in "What does contributed mean?" The question is buried, and "Read the paragraph." runs straight into the story.
  - **Fix:** Give these items a passage-lite field, such as `lead: "Read the paragraph."`, `text: [...]` and `prompt: "What does … mean?"`, rendered on separate lines. At minimum, render `\n` in `prompt` as a line break.
- **SHOULD | L-VOC-01-3**
  - **Problem:** The prompt asks for "the sound a **bell** makes," and the key is the only option containing *bell* (plus *heard*). This is a keyword match, not a meaning decision.
  - **Fix:** Reword the prompt to "…to mean a sound?" and put *bell* in a distractor too: "The old bell hung from a metal ring by the door." The key becomes "We heard a loud ring at the front door."
- **SHOULD | L-VOC-01-8**
  - **Problem:** The clue says "One park is something you do with a car. The other is a place where you can fly kites." Those are the two keys, paraphrased.
  - **Fix:** Keep only the first sentence: "Look at the words right after each park. Is it something you do, or a place you go?"
- **NIT | L-VOC-01-10**
  - **Problem:** The clue says "What does Grandpa call the place where they sat?" Grandpa actually calls the muddy ground "the best place to catch catfish." He never says it is where they sat, so the clue misstates the text.
  - **Fix:** "Read the LAST sentence. What words tell about the ground beside the water?"
- **NIT | L-VOC-01-4**
  - **Problem:** The clue's three questions ("lift it / turn it on / start a flame") map one-to-one onto *lifted / turn on / candles* in the rows.
  - **Fix:** "For each sentence, look at the words near light. What is someone doing with it?"

---

## L-VOC-02 "Word parts"

- **MUST | L-VOC-02-8**
  - **Problem:** The why states a fact that is false: "In present, pressed and president, taking away p-r-e does not leave a real word." Taking p-r-e off *present* leaves **sent**, a real word. The clue's first test ("If a real word is left…") therefore passes for *present*, so the walk-through contradicts what the child just found. (Etymologically, *present* does come from Latin *prae-* "before", which a word-savvy parent may also raise.)
  - **Fix:** Replace the *present* option with a word where nothing real remains, for example "Mom bought a warm pretzel at the fair." Then the why's claim is true for pretzel, pressed and president. If you keep *present*, the why must say: "In present, taking off p-r-e leaves sent, but a present is not something 'sent before,' so pre- is not a prefix there."
- **SHOULD | L-VOC-02-8**
  - **Problem:** The key sentence begins "**Before** the movie started…". The prompt asks for pre- "meaning 'before'," so the only option that contains *before* is the key.
  - **Fix:** "At the theater, we watched a preview of a new cartoon."
- **SHOULD | L-VOC-02-9**
  - **Problem:** The prompt asks for "**able** to be carried," and *portable* is the only option containing *able*. Every option has *port*, so the item reduces to a keyword match.
  - **Fix:** Add an -able distractor without the root, so the child must use both parts. Replace *import* with *breakable*. Then portable is the only option with port + -able.
- **SHOULD | L-VOC-02-10**
  - **Problem:** The clue asks "is a singer a person, or is the sentence comparing two things?" That names the key ("a person who") as the first option of a two-way choice.
  - **Fix:** "The ending -er can mean two different things. Try each meaning: is a singer 'more sing,' or someone who sings?" Or simply: "Think about what a singer does."
- **SHOULD | L-VOC-02-6 (ebsr)**
  - **Problem:** Part B is a word-part analysis, not evidence from the text. Help 2 for `ebsr` locks Part A and says "Now find the evidence for it in Part B." That message is wrong for this item, and the EBSR format implies something the item isn't.
  - **Fix:** Either make Part B real evidence ("Which words in the sentence help you know what unbreakable means?" with options *thick plastic* (key) / *new* / *lunch trays* / *are made*), or change the item to a `dropdown` with two slots (prefix meaning, suffix meaning).
- **NIT | L-VOC-02-2**
  - **Problem:** The clue says "Two of the words have prefixes with the same meaning," which tells the child the column counts.
  - **Fix:** Drop that sentence.
- **NIT | L-VOC-02-9 (why)**
  - **Problem:** "like a portable radio" is dated for an 8-year-old.
  - **Fix:** "like a portable fan" or "a portable chair."

---

## L-VOC-03 "Word relationships"

No MUST findings. Guide words garden–gift: g-e-n falls between g-a-r and g-i-f. game < garden (m < r), giraffe > gift (r > f), and glad > gift (l > i). All four placements are correct. The wind rhymes (pinned / kind) and the stamp senses are correct.

- **SHOULD | L-VOC-03-2**
  - **Problem:** The clue says "Look for the antonym of noisy." That does the context reasoning for the child, and of the three options only *quiet* is an antonym of noisy.
  - **Fix:** "The word but tells you the second night was DIFFERENT from the first. What would a night have to be like to hear crickets?"
- **SHOULD | L-VOC-03-5 (order, scoring)**
  - **Problem:** With 4 steps, the "half or more in place" rule gives 1 point to **sprint, jog, run, walk**. That swaps the slowest and fastest, the worst possible shades-of-meaning error, but jog and run stay in place. An adjacent swap (walk, run, jog, sprint) also gets 1 point, which is fair. Full reversal, a direction misread, gets 0.
  - **Fix:** For 4-step order items, allow partial credit only for one adjacent swap. That could be a per-item `partial: "adjacent"` flag, or a SPEC §5 change to "half or more in place" for n ≥ 5 only. Alternatively, make this a 1-point item.
- **SHOULD | L-VOC-03-8 (on screen)**
  - **Problem:** The four-sense dictionary entry, with (1)–(4), semicolons and colons, plus the sentence, all render as one plain paragraph. A beginning dictionary shows numbered lines. As shown, it is hard for a third grader to parse.
  - **Fix:** Render the entry as a short list, one sense per line, using a structured `entry` field or line breaks. Then show the sentence on its own line.
- **NIT | L-VOC-03-3**
  - **Problem:** The distractors use *their/there* and *here/hear*, the same pairs as the GUM Introduce row "frequently confused words." That's allowed here, because 3.L.V.3.b explicitly assesses homophones, but it overlaps a row the grammar sets must avoid.
  - **Fix:** Optionally swap one pair for a non-function-word pair, for example "We used flower to bake the bread." (flour).
- **NIT | L-VOC-03-6**
  - **Problem:** The clue asks "Which one means to look for a very short time?" That restates the context clue ("only a second") as the definition.
  - **Fix:** "All three words mean to look. How long did Kayla look up?"
- **NIT | L-VOC-03-1**
  - **Problem:** ancient–modern is only an approximate antonym pair (the clean opposite of ancient is new, and of modern is old-fashioned). It is defensible, but softer than the other three rows.
  - **Fix:** Use "ancient – new", or replace the row with "rough – smooth."

---

## Cross-cutting

- **SHOULD | X1, all standalone `hottext` items (answer position)**
  - **Problem:** Standalone hottext options are not shuffled. The **third** option is a key in 8 of the 10 hottext items (GRM-02-3, -8, -9; GRM-03-3, -6, -8; VOC-01-3; VOC-03-3). Of the 8 one-answer items, 6 have the third sentence as the answer. A child who notices "it's always the third one" scores well without reading.
  - **Fix:** Shuffle standalone hottext options in the engine (keeping `answer` mapped), or vary key positions in the data (first through last).
- **SHOULD | X2, all `dropdown` items (answer position)**
  - **Problem:** Dropdown options are not shuffled, and the **second** option is the key in 14 of the 20 slots. Only one slot (VOC-01-8, slot 1) has its key first.
  - **Fix:** Shuffle dropdown options at render time, or rebalance key positions in the data.
- **NIT | X3 (quotes)**
  - **Problem:** The GRM sets use straight quotes (`\"`), while the VOC sets use curly quotes (“ ”).
  - **Fix:** Pick one style site-wide.
- **NIT | X4, L-GRM-01-10 ("No change")**
  - **Problem:** `mc` choices are shuffled, so "No change" can appear first or in the middle. By convention it is always the last choice.
  - **Fix:** Support a `fixed: true` flag on a choice to pin it last, or rewrite the item without "No change."

---

## Counts

| Severity | Count |
|---|---|
| MUST | 1 |
| SHOULD | 18 |
| NIT | 20 |
| **Total** | **39** |

**By set:**
| Set | MUST | SHOULD | NIT |
|---|---|---|---|
| L-GRM-01 | 0 | 3 | 4 |
| L-GRM-02 | 0 | 1 | 4 |
| L-GRM-03 | 0 | 2 | 3 |
| L-VOC-01 | 0 | 3 | 2 |
| L-VOC-02 | 1 | 4 | 2 |
| L-VOC-03 | 0 | 3 | 3 |
| Cross-cutting | 0 | 2 | 2 |

**The MUST:** L-VOC-02-8. The why says removing p-r-e from *present* leaves no real word, but it leaves *sent*. Fix it by replacing *present* with *pretzel*, or by rewriting the why to explain that a present is not "sent before."
