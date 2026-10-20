# Verify L-GUM4 (round 3)
Prior findings (round 2): 4 checked, 4 confirmed fixed, 0 not fixed
New problems: MUST 1  SHOULD 1

Scope: I confirmed the round 2 fixes. I also solved cold every Practice and Test item in the relative-pronoun lesson (3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs) and the pronoun lesson (3.L.GC.1:C:ensure-pronoun-antecedent-agreement), checking keys, unique answers, the taught rule and test-to-test giveaways. The round 2 edits are in commit 9f5acdd, and the working tree has no further changes to L-GUM4.js. `node verification/check-content.js --all` gives PASS (0 failures). None of its 23 warnings are in L-GUM4.

## Round 2 findings
- [SK-GUM4-5-P3 why] MUST. Fixed. The why now reads "Which does not fit, because the words after the blank are already complete: we found the seashells there." That is true. The word "doer" no longer appears anywhere in the file.
- [GUM4-5 Teach point 2] SHOULD. Fixed. Point 2 now has no condition ("a thing or an animal"). Places and times moved to point 3, and the tip matches.
- [SK-GUM4-5-T5] SHOULD. Fixed. The distractor is now "The bus who takes us to school is yellow." The "park ___ has a slide" frame is no longer in the test.
- [SK-GUM4-3-P3 clue and why] SHOULD. Fixed. The clue is now the general two-question strategy, and the why gives the one-or-more reason.

## Cold solve: relative pronouns (GUM4-5)
| Item | My answer | Key | Only one answer? |
|---|---|---|---|
| P1 person ___ taught me | who | who | yes (which/where/when fail) |
| P2 season ___ the pond freezes | when | when | yes |
| P3 Tybee Island … place ___ we found | where | where | yes ("which" needs a gap after it; there is none) |
| P4 shell ___ looks like a star | that | that | yes |
| P5 bike/library/park/kitchen/song | that/where/that/where/that | same | yes. "that" fails for library and kitchen because the clause is complete; "where" fails for bike, park and song because the clause has no subject |
| T1 firefighter ___ showed us | who | who | yes |
| T2 time ___ we sit | when | when | yes |
| T3 creek ___ we saw the turtles | where | where | yes |
| T4 train ___ goes to the airport | that | that | yes |
| T5 pick two | nurse who; season when | same | yes (bus who, store when, boy where are each wrong) |

Every key is right. The taught rule gives the keyed answer for each item, as long as "fits" means that the words after the blank plus "in that place" or "at that time" make a whole sentence (see the MUST below). No test prompt or choice reveals another test answer. In T5, the correct choices are not marked, and none of the distractors shares a noun or frame with T1 to T4.

## Cold solve: pronoun agreement (GUM4-3)
| Item | My answer | Key | Only one answer? |
|---|---|---|---|
| P1 Mr. Okafor ___ glasses | his | his | yes (the prompt fixes the antecedent, which rules out "their" meaning someone else's) |
| P2 cookies … ate ___ | them | them | yes |
| P3 their = ? | the girls | the girls | yes |
| P4 | books/them | same | yes (book/them, lamp/them and cups/it are each wrong) |
| P5 Uncle Ray/my aunt/bicycle/students | he/she/it/they | same | yes |
| T1 blankets … folded ___ | them | them | yes ("they" is the wrong case) |
| T2 Aunt Lucia ___ guitar | her | her | yes |
| T3 | window/it | same | yes |
| T4 pick two | ducks/their; Mrs. Diaz/her | same | yes (pencils/it, car/them and apple/them are each wrong) |
| T5 tree/boys/sister/houses | its/their/her/their | same | yes |

Every key is right. The Teach rules (match one or more than one; he, him or his for a boy or man, she or her for a girl or woman, it or its for a thing) are true at grade 3 level and give every keyed answer. No test item reveals another. I found no problems in this lesson.

## Not fixed
(none)

## New problems
- [GUM4-5 Teach point 3, tip, and the strategy clues of P2–P5 and T2–T5] MUST: a false grammar claim. Point 3 and the tip say to use where "only if 'in that place' … fits", and otherwise to "use that or which, just as for a thing". The "only if" is false. Where is correct whenever the place is where something goes to or happens at, not only where it happens in:
  - "This is the beach where we went last summer." ("we went in that place" does not fit.)
  - "That is the stop where we get off." ("we get off in that place" does not fit.)

  For the blank in "the beach ___ we went last summer", the rule as written sends a child to "the beach that we went last summer", which is not grammatical. A Milestones item could easily use a "where we went" frame. This is the same kind of problem as the round 2 MUST: a stated rule that rejects correct sentences.

  A second, smaller weakness has the same cause. The test is whether the phrase "fits", but the lesson never says what "fits" means. "Has a slide in that place", "has a bell in that place" and "makes me dance in that place" all sound fine as phrases. They fail only because they are not whole sentences, which is the idea the P3 why uses ("already complete … we found the seashells there"). The P5 clue asks the child to run this test on every row, including the thing rows. A child who hears "has a slide in that place" as fitting will key where for the park.

  Fix: use "there" and "then" and ask for a whole sentence. Point 3: "Use where for a place or when for a time only if the words after it make a whole sentence when you add there or then: This is the park where we fly kites. (We fly kites there.) If they do not, use that or which, just as for a thing: The park that has a slide is near us. (\"Has a slide there\" is not a whole sentence.)" Change the tip to match ("For a place or a time, use where or when only if the words after the blank make a whole sentence with there or then."). Make the same swap in the shared strategy clue on P2–P5 and T2–T5, the example note, and Learn 1 step 2. No keys change. The item-specific whys are still true as written ("we borrow books in that place", and so on), but the writer may switch them to "there" or "then" for consistency.
- [SK-GUM4-5-T5] SHOULD: the test is too close to practice. The correct choice "Spring is the season when dogwoods bloom." uses the same "X is the season when …" frame as P2 ("Winter is the season when the pond freezes."). A child can pick it from memory of P2. Fix: use a new frame, for example "Saturday is the day when we go to the library." Update the why to match.

## Verdict: FAIL
One MUST remains. The "only if 'in that place' fits" rule in GUM4-5 is false: it rejects "the beach where we went" and sends the child to an ungrammatical "that". The fix is a wording change in Teach, the tip and the shared clues. No keys change. The pronoun lesson (GUM4-3) is clean, and all four round 2 findings are fixed.
