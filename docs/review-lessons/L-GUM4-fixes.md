# L-GUM4 fixes (response to reviews A and B)

Checker: `node verification/check-content.js --all` gives PASS (0 failures, 0 warnings). Every mc item has exactly 4 choices. Every Teach section still has 3 points. The new spelling rules went into existing points rather than a new one.

## MUST
- **A-MUST / B-MUST: false "a place takes where" rule (GUM4-5 Teach tip, point 3, Learn, P5, T5).** Fixed. I rewrote the relative-pronoun lesson:
  - Point 2 now says: use that/which for a thing, an animal or a place when the next words need a doer ("The park that has a slide is near us").
  - Point 3 limits where/when to cases where you could say "in that place" or "at that time".
  - The tip uses the reviewers' wording: person → who; thing → that/which; place or time → where/when only if "in that place / at that time" works; if the next words need a doer, use that.
  - The Teach example adds the contrast line "Macon is a city that has many old trees." The note explains it.
  - Learn 1 and Learn 2 now model the "does the next part have its own doer?" check.
  - P5 is now sentence frames with columns that/where (bike, library, park, kitchen, song). This drills the exact contrast.
  - T5's why now names the right fix for each distractor: park → that, store → where, Liam → who. I raised T5 to DOK 3.
  - The when-items' clues use the "at that time" test.

## SHOULD
- **A/B: no item keyed to that/which (GUM4-5).** Fixed. SK-GUM4-5-P4 is now "I found a shell ___ looks like a star." (that) and SK-GUM4-5-T4 is "We rode the train ___ goes to the airport." (that). The P5 match keys "that" on three rows. I avoided rows where "that" competes with who (that can refer to people) or with when ("the day that it snowed" is standard), so "that" never appears beside who or when in a way that makes two answers right.
- **B: y-to-i and doubled-letter spelling not taught (GUM4-2).** Fixed. Point 2 now reads: "Some short words double the last letter first: big, bigger, biggest. Words that end in a consonant and y change the y to i: funny, funnier, funniest." More/most, never-both and the irregular words moved into point 3.
- **A/B: SK-GUM4-2-T3 key was too close to Learn 2 (worse / illness / two days).** Fixed. The key is now "Mia's drawing is better than mine." The why is updated.
- **A: SK-GUM4-3-P2 why made a false "they comes before the verb" rule (B NIT, same item).** Fixed. I removed "they" from the options, which are now them/it/him/her. All the distractors are now agreement errors. The why says "It, him and her each stand for just one."
- **A/B: SK-GUM4-3-P3 distractor "the science fair" was not in the sentence, and the why reasoned about ownership.** Fixed. The distractor is now "the project and Mr. Hill", a plausible plural misreading. The clue and why now use the one-or-more-than-one reason. I kept Mr. Hill rather than "the judges" because a second plural noun would make "their" technically ambiguous.
- **A: SK-GUM4-3-P1 and T2 clues settled both deciding features.** Fixed. Both now use the general strategy clue: "Ask two questions about the noun: one or more than one? A boy or man, a girl or woman, or a thing?"
- **B: Teach example "Mom carried them" had an unclear antecedent (GUM4-3).** Fixed. It is now "The twins packed their bags and zipped them shut."
- **A/B: SK-GUM4-4-T5 reused the practice "Supper is ready / Grandma" sentence.** Fixed. It is now "{0} said Uncle Dev." with options built on "The game starts at noon,".
- **A: GUM4-7 Teach implied be-verbs are never helping verbs.** Fixed. Point 3 adds: "They can be helping verbs too, but in this lesson you will see them as linking verbs." I gave no "is running" example, to keep within the house rule. The is/are/was distractors in P4 and T3 stay, since they are wrong in those sentences ("is visit", "are plant").

## NIT
- **A/B: GUM4-7 tip "the word after the verb".** Fixed. It now says "Look at the words after the verb. If the next word is another verb ... If the words name or describe the subject ...". I made the same change in the P3 and T4 match clues.
- **A: SK-GUM4-6-P3 "A small mistake" is not a feeling.** Fixed. The prompt is now "When would you say each interjection?" and the columns are When you are hurt / When you are happy / When you make a small mistake. The Teach note now calls Oops "a small mistake, a milder feeling" instead of "a small surprise".
- **A: GUM4-3 Learn 2 step had "The quilt was washed".** Fixed. It now says "Ask what Grandma Rose washed. She washed the quilt, so quilt is the antecedent."
- **A: SK-GUM4-8-T5 was too close to Learn 2 and P5.** Fixed. The distractor sentence is now "Call me when your home." The why is updated.
- **A: GUM4-6 test reused Ow, Ouch and Yay, and T2 keyed Ouch again.** Fixed:
  - T4 columns are now Pain / Relief / Disgust. The new interjections are Phew and Whew, and Ouch and Yay are gone.
  - T2 is now "{0} This peach pie tastes amazing!" (Yum!).
  - T1 is now "Bravo! You played that song so nicely." so that Yum is not keyed twice.
- **B: SK-GUM4-7-T2 why read "The answer is is."** Fixed. It now reads "The answer is the word is."
- **B: SK-GUM4-6-P4 "Please" can be listed as an interjection.** Fixed. That distractor is now "We fed the ducks at the pond."
- **B: SK-GUM4-6-T5 "Oh, I forgot my jacket." was too close to the Teach line.** Fixed. It is now "Oh, the mail is here."
- **B: SK-GUM4-2-T3 illness context.** Fixed by the SHOULD change above.

Declined: none.

## Round 2 (response to L-GUM4-verify.md)

Checker: `node verification/check-content.js --all` gives PASS (0 failures, 0 warnings). The word "doer" no longer appears anywhere in the file.

The relative-pronoun lesson now uses one rule everywhere: who for people; that or which for things and animals; where or when only if "in that place" or "at that time" fits, and otherwise that or which, just as for a thing.

- **MUST: SK-GUM4-5-P3 why made a false "needs a doer" claim.** Fixed. The why now reads: "Which does not fit, because the words after the blank are already complete: we found the seashells there. Who is for people, and when is for times." I also removed the "doer" wording from:
  - Teach point 2, point 3, the example note and the tip
  - Learn 1 and Learn 2
  - the clues and whys of P3, P4, P5, T3, T4 and T5

  Those clues now share one strategy line: person / thing or animal / place / time, then try "in that place" or "at that time".
- **SHOULD: Teach point 2 put a condition on things that the tip did not.** Fixed:
  - Point 2 is now unconditional: "Use that or which to tell more about a thing or an animal."
  - Point 3 covers places and times: use where or when only if "in that place" or "at that time" fits; if it does not, use that or which as for a thing ("The park that has a slide is near us.").
  - The tip matches.
  - The P5 why explains the park row the same way: "has a slide in that place" does not fit.
- **SHOULD: the SK-GUM4-5-T5 distractor repeated the Teach and P5 "park ___ has a slide" frame.** Fixed. It is now "The bus who takes us to school is yellow." The why says it should use that, because a bus is a thing.
- **SHOULD: the SK-GUM4-3-P3 clue settled the answer, and the why was hard to follow.** Fixed. The clue is now "Ask two questions about the noun: one or more than one? A person or a thing?" The why now ends: "Mr. Hill and the science project each mean one. The project cannot own itself, and Mr. Hill did not make it, so their does not stand for them together."

Declined: none.

## Round 3 (response to L-GUM4-verify2.md)

Checker: `node verification/check-content.js --all` gives PASS (0 failures). None of the warnings point at L-GUM4. No keys changed. "In that place" and "at that time" no longer appear anywhere in the file.

- **MUST: the "only if 'in that place' fits" test was false (it rejected "the beach where we went").** Fixed. I replaced it everywhere with the verifier's test: use where or when only if the words after the blank make a whole sentence when you add *there* or *then*. Otherwise use that or which, just as for a thing. The change covers:
  - Teach point 3: "(We fly kites there.)" and "(\"Has a slide there\" is not a whole sentence, because it does not say who or what has a slide.)"
  - The tip
  - The example note: "my cousins live there" is a whole sentence; "has many old trees there" is not.
  - Learn 1 steps 2 and 3: "Grandpa grew up there." That is a whole sentence, so where.
  - The shared strategy clue on P2–P5 and T2–T4, and the T5 clue, worded to match.
  - Every item-specific why in the lesson (P2–P5, T2, T3, T5), switched to the "there / then … whole sentence" wording for consistency.
- **SHOULD: the SK-GUM4-5-T5 correct choice repeated P2's "X is the season when …" frame.** Fixed. It is now "Saturday is the day when we go to the library." The why says "We go to the library then" is a whole sentence.

Declined: none.
