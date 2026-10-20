# Review F-PF (A)
Lessons reviewed: 3.F.P.4.a, 3.F.P.4.b, 3.F.P.4.c, 3.F.F.1.a, 3.F.F.1.d
MUST: 1  SHOULD: 5  NIT: 3

## MUST
- [SK-FF1d-T1] The other Test items give away both answers to this 2-point item. SK-FF1d-T2 says "In paragraph 4, Ava read the word crown" and SK-FF1d-T3 says "In paragraph 1, Ava read the word squirrel". Those are exactly the two keyed sentences (p2:4:1 and p2:1:2). In Test mode the child can move freely and go back before turning in (player.js: "Move freely, then submit"; the Previous button is shown in test). So a child who reads ahead gets 2 of the test's 6 points for free, which is a third of the mastery score. Fix: make sure T2 and T3 never name a T1 target. Either give p2 a third misread sentence that is used only by T2/T3 and is not one of T1's two answers, or make T2/T3 standalone sentences in `stem` with `passages: []`. (Practice P1–P3 have the same overlap, but Practice has no Previous button and P1 comes first, so it is fine there.)

## SHOULD
- [SK-FF1d-P1 why] The walk-through says "you put honey, not money, on pancakes". That names the answer to SK-FF1d-P3, the next-but-one item, which asks for that exact word. Fix: "You cannot heat a plan, and money is not something you put on pancakes."
- [3.F.F.1.a Test] The Test reuses words from Practice and Learn, so it checks memory, not mastery (§8):
  - SK-FF1a-T3 keys friend and laugh, the same two keys as SK-FF1a-P4. Friend is also Learn example 1 and the Teach trick.
  - SK-FF1a-T5's error, "anser", is a distractor in SK-FF1a-P4.
  - SK-FF1a-T4 uses the same though/through/thought set as Learn example 2, with the same key, through.

  Fix: use new words in the Test. For T3, use "busy" and "build"; neither appears elsewhere in the file. For T5, misspell a word not used elsewhere, such as "where" or "two". For T4, use another look-alike set, such as were/where/wear.
- [3.F.F.1.a, all items] All 10 items ask whether a spelling is correct (encoding). The standard is about reading sight words "in isolation and in context, with accuracy and automaticity". Only SK-FF1a-T4 asks the child to read a word in context, so the items drift from both the standard and the Teach section. Fix: swap two or three items for reading-in-context formats. One option: "Which word completes the sentence?" with look-alike sight words (was/saw, from/form, where/were). Another: a hottext item that asks which sentence uses the wrong look-alike word.
- [3.F.P.4.b split items: SK-FP4b-P1, P5, T1, T4] Every split question has a one-letter split as a distractor: "m / uffin", "m / usic", "w / agon", "h / elmet", "r / obin". A lone consonant is not a syllable, and a child sees that at once. So the mc items are really three-choice and the dropdowns two-choice. A two-syllable word has only two or three splits that keep a vowel in each part, so a fourth plausible choice does not exist. Fix: for the mc items (P1 muffin, T1 helmet), use three-syllable words such as "basketball" or "fantastic", which have several plausible wrong splits, or turn them into 3-option dropdowns with the plausible splits only. For the dropdowns (P5 music and wagon, T4 robin), drop the one-letter option and keep the two real candidates, which is exactly the choice the lesson teaches (ro / bin vs rob / in).
- [Tests mirror Practice: SK-FP4a-T4 vs P4, SK-FP4b-T3 vs P2, SK-FP4c-T4 vs P4] Each of these Test items copies its Practice item's template one for one, so a child can answer by matching the pattern instead of using the rule:
  - 4a-T4 is the same two-slot dropdown ("The g in __ sounds like __"), with a soft g then a hard g and the same three options.
  - 4b-T3 has the same four columns, and every row is a swap of the Practice row (she→we, bike→hope, coat→seed, fork→storm).
  - 4c-T4 has the same four columns, filled with the rules in the same order.

  Fix: change at least one Test item per lesson. For 4a-T4, use an ms item ("Which TWO words have a g that sounds like j?"). For 4b-T3, use syllables inside longer words (napkin, pony, railroad), or let two rows share a column. For 4c-T4, put two rows in one column and leave "no change" unused.

## NIT
- [SK-FP4a-P4 why, SK-FP4a-T4 why] "sounds like the j in jam, because i comes right after it" states the rule as if it always holds. Teach rightly says "often" and lists get, give and girl as exceptions. Fix: "...because i comes right after it, and g is often soft before e, i or y."
- [SK-FF1d-P3 clue] "Think about what people put on top of pancakes. The right word ends the same way as money." Together these leave only honey, because neither monkey nor many goes on pancakes. The clue is close to giving the answer. Fix: keep only the strategy: "Which word would make sense on top of pancakes? Check that it also looks like money."
- [SK-FP4c-P6] The distractor "ant" is too easy to rule out for a "base word" question. Fix: replace it with "plan" or "replan".

Item-validity note: I solved all 47 Practice and Test items cold before opening the keys, and every key matched.
- Sound items: I found none where an accent gives a second defensible answer. The ea items (bread/head, thread/sweater, read/read), the ow items (snow/cow, owl, bowl, brown) and the soft/hard c and g items all hold in General American and in Southern US speech.
- Syllable splits: every keyed split matches the dictionary: muf·fin, hel·met, mu·sic, wag·on, rob·in, re·mem·ber, um·brel·la, spi·der, in·side, bub·ble, tur·tle.
- References: the paragraph and sentence references in 3.F.F.1.d point to the right places.
