# T-SS fixes (response to reviews A and B)

File changed: `js/data/lessons/T-SS.js`. `node verification/check-content.js --all` gives 0 failures and 0 warnings for T-SS. Every mc item has exactly 4 choices. All passages score heuristic FK 4.4 or below and are 100 words or more.

## MUST
- **[A+B] SK-SS1a-P2: more than one defensible effect.** Fixed. The prompt now names the result: "Select the sentence that tells how peanut plants affect the crops planted in that field the next year." The clue is reviewer A's wording: "First find the cause the section talks about. Then find the sentence that tells what happens later because of it."

## SHOULD
- **[A+B] SK-SS1a-T2 Part B: distractors from outside the section.** Fixed. All three distractors now come from "A Home for Many Animals": the cause sentence ("A burrow stays cool…"), the digging sentence and "This tunnel is called a burrow." The `why` explains why the cause sentence alone is not the answer.
- **[A] SK-SS1a-P1: the "taste salty" distractor.** Fixed. It is now "It tells why peanut plants are good for the soil."
- **[A+B] 3.T.SS.1.a Teach: point 4 taught two patterns, problem and solution had no clue words, and the text box was never taught.** Fixed. Compare and problem and solution are now separate points. Problem and solution has its own clue words (problem, trouble, solve, fix). The features point now covers headings and sections, captions, maps and "a text box sets apart an extra fact." There are still 5 points.
- **[A] p2 "Long ago…" suggested the tortoises are gone.** Fixed with the reviewer's wording: "Long ago, large pine forests covered much of south Georgia, and many gopher tortoises lived there." It is still sentence 1, so no refs changed.
- **[A] SK-SS1b-T2: the key echoed sentence 6.** Fixed. Sentence 6 now reads "The library also plans special activities for kids." The key, "Fun Events for Kids," no longer copies its words. The `why` is updated.
- **[B] SK-SS1b-P3: near-copy of Learn example 3, and weak distractors.** Fixed. The new question asks which feature helps readers who have never seen the feeder. The answer is a photo with a caption. The distractors are a numbered list of steps, a heading and a title. These are real features that do not do this job.
- **[B] SK-SS1b-T4: the order item was fully cued by first/next/last.** Fixed. There are now 5 steps and only one order word ("Then"), so the logic of the steps sets the order: topic, bring a grown-up to the desk, get a form, get the card when the form is done, borrow a book. The clue and `why` are rewritten.
- **[B] SK-SS1c-P4: wrong options failed on grammar alone.** Fixed. The slot now starts the sentence ("{0}, biking is fun to do with my friends.") with Also / Although / Because. All three are grammatical, so only meaning decides.
- **[A] SK-SS1c-T2 (and P3): the fragment distractors.** Fixed in both.
  - In P3, the distractors are now complete sentences: a wrong *although*, a *since* sentence that is off topic and an *also* sentence that is off topic.
  - The old T2 is gone; see the next item.
- **[A+B] 3.T.SS.1.c Test mirrored Practice (coordinator: make it genuinely different).** Fixed. The test was rebuilt and now uses new frames. Daniel's draft was revised so it already contains *also* (sentence 6) and *although* (sentence 8) for the child to analyze.
  - T1 is a hottext: which sentence should begin with "For example"?
  - T2 is an mc: why does Daniel use *although* in sentence 8? It asks the child to explain the word's job.
  - T3 is a two-slot dropdown on a new standalone text (kept from before).
  - T4 is an ms: which two sentences use a linking word correctly?
  - T5 is an mc on the direction of a reason. The distractor "…, so they carry pollen…" reverses cause and effect.

  No test item now repeats a practice frame. The test is still 7 points.
- **[B] SK-SS1c-T5 (now T4): "Bees also make honey…" had nothing for *also* to add to.** Fixed. The key is now "Bees help flowers make fruit, and they also make honey."
- **[A] SK-SS1d-T5: the key was the only choice that mentioned awards.** Fixed both ways the reviewer suggested. The prompt now says "a new paragraph that tells what happened at the end of the day." A new distractor mentions the awards but is only a detail: "My friend Eli won a blue ribbon at the awards."
- **[A] SK-SS1d-T2/T3: T2's `why` gave away T3 Part A.** Fixed. T3 now asks for the main idea of the whole draft. Part B's answer is the opening sentence, and the two paragraph topic sentences and the closing are the distractors. The water-games paragraph is now used only in T2.
- **[A] SK-SS2a-P3: the clue pointed at the Part B sentence and the word "worried".** Fixed with the reviewer's wording: "Look in paragraph 2 for words that tell how Rosa looks or feels."

## NIT
- **[A] SK-SS1a-T5 used the same heading template as P3.** Fixed. T5 now asks which other heading would fit "A Home for Many Animals". The answer is "Sharing a Cool Tunnel".
- **[A] SK-SS1b-P3 nearly repeated Learn example 3.** Fixed; see the SHOULD above.
- **[A+B] SK-SS1d-P4 repeated P1's answer (sentence 6).** Fixed. P4 now uses four new standalone sentences about a farmers market (topic, two details, one that does not belong).
- **[A] SK-SS1d-T3 Part B quotes leave out the "(7)" numbers.** Declined. Leaving the numbers out matches the existing site convention: PT-1's draft items quote sentence text without "(n)". The checker accepts both forms. T3 was also rewritten, and its quotes follow the same convention.
- **[A] 3.T.SS.2.b Teach did not cover "show relationships between ideas".** Fixed. A point now reads: "A comparison shows how two ideas are alike. It helps your reader connect a new idea to one they already know." It replaces the "don't overuse" point to keep 5 points.
- **[A] SK-SS2b-T4 `why` gave a weak reason.** Fixed. It now says only after sentence 5 does the bright light explain sentence 6, where Andre can hardly see the crowd.
- **[B] SK-SS2a-P5 `why` said windmills turn fast.** Fixed. It now reads "keep turning in big circles, round and round", plus the clue that Rosa kicks hard.
- **[B] 3.T.SS.1.b Teach point 1 mentioned opinion writing, which the lesson never teaches.** Fixed. "Giving your opinion" was removed.
- **[B] SK-SS1a-T3 clue pointed straight to "As a result".** Fixed. It now reads "Find the sentence that tells what happened because people cut down the forests."
