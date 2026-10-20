# Final verify L-GUM4 (round 3)
MUST: 0  SHOULD: 2  NIT: 1

## Method
- Verification commits:
  - `79047c6` (L-GUM4-verify.md)
  - `738f7bf` (L-GUM4-verify2.md)
- The Round 3 lesson edits are in `6b32b18`. The working tree is clean.
- I diffed `js/data/lessons/L-GUM4.js` from both commits. Since `738f7bf`, the only changes are in the relative-pronoun lesson (3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs).
- I read verify, verify2, and the Round 2 and Round 3 sections of L-GUM4-fixes.md.
- I solved every Practice and Test item in the relative-pronoun lesson cold, and Learn 1 and 2, before reading the keys.
- I did one pass over the whole Test section of all 8 lessons, looking for cross-item reveals.
- `node verification/check-content.js --all`: PASS (0 failures, 9 warnings, none in L-GUM4).

## Round 2 and Round 3 findings: all fixed
- [Round 2 MUST, SK-GUM4-5-P3 why] The "doer" claim is gone (no "doer" anywhere in the file). The why says "the words after the blank are already complete", which is true.
- [Round 2 SHOULD, Teach point 2] Now unconditional: "a thing or an animal".
- [Round 2 SHOULD, SK-GUM4-5-T5] The bus distractor replaces the "park ___ has a slide" frame.
- [Round 2 SHOULD, SK-GUM4-3-P3] Uses the general two-question clue. The why is clear.
- [Round 3 MUST, "only if 'in that place' fits"] Fixed. "In that place" and "at that time" no longer appear in the file. The rule now reads: use where or when only if the words after the blank make a whole sentence when you add there or then; otherwise use that or which. It appears the same way in:
  - Teach point 3
  - the tip
  - the example note
  - Learn 1
  - the shared clue on P2–P5 and T2–T4, and the T5 clue
  - every item-specific why
- [Round 3 SHOULD, SK-GUM4-5-T5] The "season when" frame is replaced with "Saturday is the day when we go to the library." It does not repeat P2.

## The where/when rule against every keyed answer
The rule is "add there or then; if the words after the blank make a whole sentence, use where or when; if not, use that or which".

| Place | Noun | Words + there/then | Whole sentence? | Rule gives | Key |
|---|---|---|---|---|---|
| Example 2 | Macon (city) | my cousins live there | yes | where | where |
| Example 3 | Macon (city) | has many old trees there | no | that | that |
| Teach pt 3 | park | we fly kites there | yes | where | where |
| Teach pt 3 | park | has a slide there | no | that | that |
| Learn 1 | farm | Grandpa grew up there | yes | where | where |
| P2 | season | the pond freezes then | yes | when | when |
| P3 | place | we found the seashells there | yes | where | where |
| P4 | shell (thing) | looks like a star there | no | that | that |
| P5 | bike (thing) | has a bell there | no | that | that |
| P5 | library | we borrow books there | yes | where | where |
| P5 | park | has a slide there | no | that | that |
| P5 | kitchen | Dad cooks dinner there | yes | where | where |
| P5 | song (thing) | makes me dance there | no | that | that |
| T2 | time | we sit with our friends then | yes | when | when |
| T3 | creek | we saw the turtles there | yes | where | where |
| T4 | train (thing) | goes to the airport there | no | that | that |
| T5 key | day | we go to the library then | yes | when | when (correct) |
| T5 distractor | store | we buy bread there | yes | where | "when" marked wrong (correct) |

The rule is true for every keyed answer, and it never sends the child to a wrong key. P1, T1 and the T5 nurse and boy sentences are person nouns, so they take who and do not need the test.

The rule is also true as stated: where and when stand for "there" and "then", so a correct where or when clause always makes a whole sentence when you add there or then. This includes the verify2 counterexamples, "we went there last summer" and "we get off there".

One limit, which does not change any key: "the park that we visited" passes the test for some speakers ("we visited there"). No item uses a place noun followed by a missing object, so no item depends on this.

No item gives "that" as an option on a time or place blank where "when" or "where" also passes the test. So no item has two defensible answers.

## Cold solve of changed items
Every key matches my answer, and each item has only one defensible answer. Here are my answers:
- P2: when
- P3: where
- P4: that
- P5: that / where / that / where / that
- T2: when
- T3: where
- T4: that
- T5: nurse who; day when

No Practice clue singles out the answer. The shared clue is the general strategy, and it fits every option set.

## Whole-test cross-reveal pass (lessons 1 to 8)
- [SK-GUM4-8-T5 reveals SK-GUM4-8-T3] SHOULD.
  - T5 asks for the one sentence with a mistake. Its keyed error is "Call me when your home." A child can find that with your/you're knowledge alone.
  - Once T5 is solved, the remaining T5 lines are confirmed correct, and one of them is "It's time for bed."
  - That is the same frame as T3, "{0} too cold to swim today." (It's / Its / Its'), so the child can go back and copy It's.
  - This is the same kind of reveal as the round 1 GUM3 deer/feet finding.
  - Fix: replace "It's time for bed." in T5 with a correct sentence that uses no its/it's. For example, "We walked to the park after school."
- [SK-GUM4-4-T4 rows rule out distractors in T1, T3 and T5] SHOULD.
  - The T4 prompt says each sentence has exactly one mistake, and the columns name the mistake type.
  - In "Jin said, \"the movie starts soon.\"" and "Mia said, \"we are almost there.\"", the comma and the quotation marks are already there. So "a capital letter" can be picked by elimination, without knowing the rule.
  - That tells the child a lowercase first word inside quotation marks is wrong. It removes one distractor in each of:
    - T1: "\"the bus is late,\" said Marcus."
    - T3: "Dad said, \"don't forget your hat.\""
    - T5: "\"the game starts at noon,\""
  - It also shows that the rest of 'X said, "...."' (period inside) is correct, which backs up the T3 key and rules out "Pablo said, \"I can help\"."
  - Fix: in T4, change the two capital-letter rows so the mistake cannot be found by elimination. For example, give one row a different missing mark, or use a quote-last row such as "\"we are almost there,\" Mia said." Or remove the lowercase distractors from T1 and T5 and give them a different error.
- NIT [SK-GUM4-2-T4 vs T5] T4 presents "best" as a real comparing word. That weakly rules out the T5 distractor "the goodest peach". It works only if the child links best to good. Optional fix: replace the "best" row with "tallest".
- Lessons 1, 3, 5, 6 and 7: no reveal. Shared frames (for example "was" as a linking verb in 7-T4 and 7-T5) test the same skill and require solving each item.

## Not fixed
(none)

## MUST
(none)

Verdict: PASS
