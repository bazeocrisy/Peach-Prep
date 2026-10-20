# L-GUM5 fixes (responses to reviews A and B)

Checker: `node verification/check-content.js --all` reports PASS (0 failures, 0 warnings). Every mc item has exactly 4 choices.

## MUST
- [A] SK-GUM5-3-P2: student's could be defended because the sentence never said how many owners there were. **fixed:** The sentence now reads "All twenty {0} jackets..." The prompt also says "The jackets belong to twenty students. The garden belongs to all the children at school."

## SHOULD
- [A+B] Day, month and street abbreviations appeared in ordinary sentences (GUM5-1 Teach example, P3, T1, T3, T5). **fixed:**
  - Teach point 2 now says these short forms belong in addresses, dates and schedules, not in ordinary sentences.
  - The Teach example uses a schedule line: "Fair schedule: Mon., Jan. 12, at 14 Elm St."
  - P3 now has "Library hours: Mon. to Sat." and the error line "Our new address: 22 Peach ave." Its prompt says "Select the line that has an error."
  - T1's key is now "We bought Greek olives at the market." The street distractor is now "Parade route: Main st. to Pine Ave." The prompt says "Which one is correct?"
  - T3 uses "Play practice: Fri., Oct. 9". Its prompt says "line".
  - T5's key is now "We mailed the letter to 14 Pine St." The Maple distractor is now "Our new address is 9 Maple rd."
- [A] GUM5-5 clause definition ("action part"). **fixed:** Teach point 1 and the `words` entry now say "a naming part and a telling part (what someone or something does or is)". The examples are "the bell rang" and "the bus was late".
- [A+B] GUM5-5: "if" was described as a time word. **fixed:** Teach point 2 now says "If tells what must happen for the other part to happen." The P5 clue is now "The picnic moves inside only in one case. Which word sets up that case?" The P5 why says if tells what must happen for the picnic to move inside.
- [A] Clue giveaways in SK-GUM5-1-P4 and SK-GUM5-3-P5. **fixed:** The P4 clue now asks of each word whether it is a title before a name or a word made from a place name. The P5 clue now says "For each owner word, decide if it is plural. Then check where the apostrophe goes."
- [A] The GUM5-5 test repeated the practice item designs (T4 copied P4's match; T5 copied P3's fragment hottext). **fixed:**
  - T4 is now a 2-slot dropdown in a new context. The answers are although (a surprise) and after (time).
  - T5 is now an mc: "Which sentence correctly joins these two ideas?" It tests meaning and complete sentences together.
  - The test is still 7 points.
- [B] SK-GUM5-7-T4 had weak distractors. **fixed:** The choices are now "Underline it." (key), "Put it in quotation marks.", "Write it in slanted letters (italics)." and "Capitalize only the first word." The why explains each one.
- [A+B] SK-GUM5-2-T2 did not show who was speaking. **fixed:** The prompt now says "Mom asks Leah to feed the fish, and Leah answers." The text is labeled "Mom: {0} please feed the fish. Leah: {1} I will feed them right now." The clue and why now match.
- [B] GUM5-1 never contrasted a place name with the describing word made from it. **fixed:** Teach point 3 now says "Mexico is a place, and Mexican is a describing word: Mexican food."

## NIT
- [A] GUM5-1 "always start with a capital". **fixed:** "always" removed.
- [A] GUM5-1: "mayor or doctor stays lowercase" is false for direct address, and uncle is a family word, not a title. **fixed:** Teach now says "usually stays lowercase". The uncle choice in P4 is now "family", and the clue no longer mentions uncle.
- [A] SK-GUM5-3-T2: "My two puppy's bowls" could be argued. **fixed:** The prompt now says "Ari has two puppies, and each puppy has a bowl. The boots belong to Ari's dad and uncle." The text starts "The two {0} bowls...".
- [A] SK-GUM5-4-T5 used "Several", which is never taught. **fixed:** It is replaced with "All", and the why is updated.
- [A+B] GUM5-6: the comma after a short opening phrase was stated with no exception. **fixed:** The big idea now says "a comma usually goes after that part". Point 2 adds that after a clause like "When the bell rang" you need the comma, and after a short phrase like "After lunch" the comma is always OK.
- [A] GUM5-7 small-word list was missing "for" and "at". **fixed:** The list is now a, an, the, and, of, in, on, at, to and for.
- [A] Test clues that point to one choice (SK-GUM5-5-T2, SK-GUM5-3-T5, SK-GUM5-1-T4). **fixed:**
  - SK-GUM5-5-T2: "Try each word in the blank. Which one makes the two ideas fit together?"
  - SK-GUM5-3-T5: "Check each apostrophe. Count the owners, then decide where the apostrophe goes."
  - SK-GUM5-1-T4: "For each choice, ask: Is this word a name, a title before a name, or a word made from a name?"
- [B] GUM5-1: proper adjectives can come from people's names too. **fixed:** Teach point 3 now says "made from names, like the names of places".
- [B] GUM5-4: "one at a time" was a memory trick, not the meaning. **fixed:** The big idea, the Learn 2 step, the P1 why, the P3 clue and the T2 clue now say "treated as one".
- [B] GUM5-4 covers only subject-verb agreement. **declined (no change requested):** Pronoun-antecedent agreement (everyone ... their) is left out on purpose for an Introduce row, to avoid a usage debate.
- [B] Nested double quotation marks in the SK-GUM5-7-P1 and T1 whys. **fixed:** The sentence is now wrapped in single quotes, and the title keeps its double quotation marks.
