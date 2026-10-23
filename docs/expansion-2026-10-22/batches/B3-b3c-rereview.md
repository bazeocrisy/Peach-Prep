# B3 batch c re-review: 3.T.RA.1.b, 3.T.RA.2.a, 3.T.RA.2.b

Reviewer: independent (not the author, not the first reviewer). File reviewed read-only: `js/data/lessons/T-RA.js`. Original findings: `B3-review-b3c.md`. Date: 2026-10-23.

## Verdicts

| Lesson | Verdict | Notes |
|---|---|---|
| 3.T.RA.1.b | ACCEPTED | C10 and the right-whale wording are fixed. NOAA figures support "a few hundred". |
| 3.T.RA.2.a | ACCEPTED | The lemur fact (S11) is now supported by PBS. Word-matching is gone in C13 and S14. SHOULD items only. |
| 3.T.RA.2.b | ACCEPTED | C04, C05 and C12 ladders pass. p5 now matches the MythBusters episode page. Manatee wording is right. SHOULD items only. |

No MUST findings. All four original MUSTs (M1 to M4) are confirmed fixed.

## 1. Blind solve

- Method: a new Node script (`scratchpad/b3rr/blind.js`) loaded `T-RA.js` with a stub `PP.addLesson`. It printed the 12 requested items with choices shuffled (seed 20261023). It stripped `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample`, `criteria` and `like`, including the nested option fields. It printed the passages used, plus figure alt text where there is any (none of these passages have figures). I did not open the raw source for these items before solving. I saved `answers.json` with a sha256 and UTC time (`answers.sha256`), then compared.
- Items: RA1b C10; RA2a C13, S09, S11, S12, S14; RA2b C04, C05, C09, C12, S14, S08.
- Result: **12/12 agree with the keys** (S11 both picks, C05 both blanks, S08 both blanks).
- How blind this was: the solve was blind to keys, hints and rationales. It was not blind to the passage text, and the solver is the same model family as the authors. I had read the first review (which names the problem areas) before the solve, so I knew which items to look at. Agreement shows the keys are unambiguous. It is weak evidence about how a 3rd grader would do. The live-choice counts below were done after the solve, with the hints open.
- `node verification/check-content.js --all`: PASS, 0 failures. The only warning for these lessons is RA2b p3 short (77 words, by design).

## 2. Original MUSTs: confirmed fixed

**M1. RA2b C04 ladder: FIXED.**
- Choices: Excerpt A careful (key), B exact time, B "every peach", A "no numbers".
- Hint 1 asks whether the facts could happen and whether they promise too much. Hint 2 says to picture each excerpt on a real farm and ask which parts are expected and which are hard to believe. It does not name an excerpt or remove any choice. Hint 3 removes only the "no numbers" choice and says "compare the reasons that are left."
- Live after hint 3 + clue: 3 (key, "exact time", "every peach"). The child still has to decide A versus B.

**M2. RA2b C05 ladder: FIXED.**
- Hint 2 says "look at how the post is signed and at what it claims." Hint 3 deals with blank 1 only (the signature) and ends "The second blank is still yours to decide."
- Blank 1: 3 live after hint 1/hint 2, 2 live after hint 3 (b "has grown peaches in Georgia" and c "is a scientist" are still plausible, a is the key). Blank 2: 3 live after hint 3 (measured facts, impossible number, college link). One blank is partly settled, none fully, so the "at most one blank" rule is met. See S3 for the wording echo.

**M3. RA2a S11 lemur fact: FIXED.**
- Key is now "Lemurs in a group huddle close together to stay warm" plus "clean each other's fur."
- Source check: the PBS Nature fact sheet says "To keep warm and reaffirm social bonds, groups will huddle together" and that social bonds "are established and reinforces through grooming." https://www.pbs.org/wnet/nature/blog/ring-tailed-lemur-fact-sheet (fetched). Duke Lemur Center pages (first review) agree on grooming and huddling.
- The other facts are true: Madagascar, fruit/leaves/flowers. The tail is ringed rather than "striped," which is loose but fine for grade 3 (see N1).
- The turn-taking sentinel claim is gone from the stem, hints, how and why.

**M4. RA2b p5 and C12 (MythBusters): FIXED.**
- Source: https://mythresults.com/episode85 (fetched). Red, white and blue flags were placed near a bull; they "drew charges with equal ferocity," even when all three were out together, and the bulls did not favor red. A remote-controlled clothesline showed the bulls reacting to movement. In the last test, Tory stood still in a red jumpsuit while two cowboys moved around the ring: the bull chased the cowboys and "ignored Tory."
- Passage text now: "a TV show put a red flag, a blue flag and a white flag near bulls. The bulls charged all three flags, and they did not pick the red one. The show also saw that bulls went after people who moved around." All three sentences match the page. The "team of scientists" and "still cape was not charged" claims are gone.
- "cattle can see blue and yellow, but red does not stand out to them" is the standard dichromatic-vision account (first review sources).
- "A grown bull can weigh as much as a small car": fine for a bull of about 1,000 to 2,000 pounds.
- C12 key "The bulls charged all three flags, and they did not pick the red one" is the right BEST reason to doubt the website claim.
- C11 (also on p5) still works: colors cattle can see (para 2) and bull weight (para 4).

**Other fact checks asked for:**
- Right whale "Only a few hundred of them are left": NOAA Technical Memorandum NMFS-NE 338, median 384 at the start of 2024, 95% credible interval 375 to 394. https://repository.library.noaa.gov/view/noaa/72014 (fetched). "A few hundred" is true and will stay true if the count drifts, so it fixes S2 from the first review. The rest of p7 and p8 is plausible: 50 ft, calving off Georgia and Florida in winter, baleen, patch patterns, calf about 14 ft. A calf at 13 to 15 ft is a standard figure, and "Dr. Watts" is clearly fictional.
- Manatee "as long as 20 minutes when it is resting": Save the Manatee Club says "When resting, manatees have been known to stay submerged for up to 20 minutes" and that active manatees surface as often as every 30 seconds. https://savethemanatee.org/manatees/manatee-facts/ (fetched). The "when it is resting" qualifier in the text is what makes it correct.
- Knuckle story (RA2b S14): a single doctor cracked only his left hand's knuckles for decades and found no difference between hands. Passage wording matches that account. I did not re-fetch it.

## 3. Live-choice table (after hints 1 to 3 + clue)

| Item | Live choices | Settled / comment |
|---|---|---|
| RA1b C10 | 3 (key, unsigned post, blue whale) | Hint 3 removes only the calf-length choice. Fine. |
| RA2a C13 | 3 (nodded, key, dive). Hint 2 limits to paragraphs 3 and 4, so the thanks sentence (T6) is already outside the range. Hint 3 removes Dani's words and the Dani-jogged sentence. The author log counts 4 and 6 / 6 / 4; either way it passes. | Pass. |
| RA2a S09 | 2 (key, "tooth grows through lip") | Pass at the minimum. See S1. |
| RA2a S11 (ms, pick 2) | 4 by letter (two keys, Madagascar, what they eat). The clue "how lemurs treat each other" already makes the off-topic facts unattractive. | Pass. See N2. |
| RA2a S12 | 2 (hint 3 removes the result sentence; remaining: the teacher's sentence and the key) | Pass at the minimum. See N3. |
| RA2a S14 | 3 (fell, key, Cam showed her) | Pass. |
| RA2b C04 | 3 | Pass (see M1 above). |
| RA2b C05 | Blank 1: 2. Blank 2: 3. | Pass. |
| RA2b C09 | 3 (sound test removed by hint 3; remaining: the key, pet-fish-learns, what-people-say) | Pass. Hint 2 no longer sorts into memory/not-memory. First-review S1 fixed. |
| RA2b C12 | 2 (key, set-up sentence). Hint 2 points to paragraphs 1 and 3, so the weight sentence (para 4) is out. Hint 3's last clause names the belief sentence, so that goes too. | Pass at the minimum. See S2. |
| RA2b S14 | 3 by letter (the left-hand, right-hand and result sentences). Hint 1 and hint 3 both tell the child to find "what happened / what he found." | Pass by letter. See S4. |
| RA2b S08 | Blank 1: 2 (credible+relevant, credible but not relevant). Blank 2: 3. | Pass. |

## 4. Word-matching and key ambiguity

- **RA2a C13: word-matching is gone.** Opinion "good at learning from advice." The key "After that, every time the ball came near, she kept her eyes on it" shares no content word with the opinion. The semantic lures ("Thanks for your tip" and Dani's "Watch the ball") are real distractors. Is the key unambiguous? Yes. It is the only sentence that shows Simone doing what the tip said. The thanks sentence shows she valued the tip, but it is not evidence of learning from it, and the `why` says so (N4).
- **RA2a S14: word-matching is gone.** "Rosa does not give up" has no word in common with the key "She got back on and pushed off again until she rode all the way down the block." The wrong choices share only the name "Rosa" with the stem. The key is unambiguous.
- **RA2a S09 and S12:** see S1 and N3. S12 is fine; S09 still has a phrase overlap.

## 5. Cross-lesson duplicate search (all of `js/data`)

| Topic | Result |
|---|---|
| bike / training wheels | "Training wheels" appears only in RA2a S14. Other bike lines (T-T1 Kendra and Rafa, T-TS tire pressure, T-C helmet) are different stories and skills. No duplicate. |
| huddle | RA1c has an emperor-penguin item with "huddle together to stay warm." RA2a S11 has lemurs huddling to stay warm. Different animal, standard, and task. See N5. |
| anonymous / unsigned post | Used heavily inside RA2b by design (C05, the sort items "FishFan9" and "ShredDude," S-items). Outside T-RA.js there is none. The RA2b items differ in task (dropdown, match, ms). Fine. |
| blue whale | Only in RA1b C10 as a distractor. |
| "does not give up" | RA2a S08 (cr, Tasha at ice skating, "she does not give up") and RA2a S14 (Rosa, bike) have the same shape: someone falls, gets back up, and the answer is "does not give up." See S5. |
| knuckles | Appear in T-C as a descriptive detail only. No overlap with RA2b S14. |
| lemur, manatee, narwhal, goalie, ballet | Only in T-RA.js. |
| peach | Many unrelated hits. Within RA2b, C04 and C05 both use peaches and an unsigned post. Different tasks (compare two excerpts; complete a reason), so acceptable. |

## 6. Findings

### MUST
None.

### SHOULD

**S1. SK-RA2a-S09: the key repeats the stem's phrase.**
Evidence: the question says "sense the water around it" and the key says "feel changes in the water around it." A child can find the key by matching "water around it" with no thinking. Hint 3's "what the tusk can do" also matches the key's "can feel." After hints, 2 choices are live.
Fix: reword the idea ("the tusk helps a narwhal find out what is going on in the sea"), or reword the key ("Scientists think the tusk can pick up changes in the sea") so the stem and key do not share a phrase.

**S2. SK-RA2b-C12: hint 3's last clause names a wrong choice.**
Evidence: hint 3 ends "remember that a belief that agrees with the website is not a check." That removes the paragraph 1 sentence. The author log (8.1) says hint 3 "no longer names the belief, so a paragraph 1 choice stays live"; the file does not match the log. With hint 2 pointing to paragraphs 1 and 3, only 2 choices are live, the key and the set-up sentence.
Fix: delete the last clause from hint 3. Then three choices stay live, as the log says. Correct the log.

**S3. SK-RA2b-C05: hint 3 repeats the key's wording for blank 1.**
Evidence: hint 3 asks "Does it tell you who the writer is or how they know?" The key option is "does not tell who they are or how they know." The rule allows settling one blank, but the wording is nearly a copy.
Fix: "Is it a name you could look up, or only a screen name?" (or similar). It keeps the same job without the match.

**S4. SK-RA2b-S14: hints 1 and 3 give the same criterion.**
Evidence: hint 1 says "look for what happened when someone checked it." Hint 3 asks "how he checked the idea, or what he found?" Hint 3 only repeats hint 1 and shows which sentence is the key. Three choices are live by letter, but the category is already decided.
Fix: have hint 1 be about the post only ("A good reason to doubt a claim comes from checking it") and keep hint 3 as the how-or-found question. Or let hint 3 remove the "many people say" sentence only.

**S5. RA2a S08 (cr) and S14 (mc) use the same idea.**
Evidence: both are "fell, got back up, so does not give up." They differ in item type and activity, so this is not a names-only duplicate, but a child doing similar items for C13 and C15 will see the same lesson twice.
Fix: change the S14 opinion to something else a sentence can prove, for example "Rosa is proud of her work" with the sentence where Cam cheers, or "Cam is a good teacher," where both Cam sentences are live.

### NOTE

**N1.** RA2a S11 distractor "black-and-white striped tails": ring-tailed lemur tails are ringed. Not an error a grade-3 reader would trip on, but "black-and-white ringed tails" is exact. The hint 3 text "Striped tails" would need the same change.

**N2.** RA2a S11 is easy: three of the five choices are plainly off the topic of group life. That is acceptable for a DOK 2 similar item, but one of them could be a group-related distractor (for example "Ring-tailed lemurs sleep high in trees at night," which is true, and a group-related fact that does not show cooperation).

**N3.** RA2a S12: the question already says "shows Mia using the tip," and hint 3 asks "does it give the tip or show someone following it." A child can answer from the stem alone. The wrong choice that quotes the teacher is a good lure. Choice C (the first sentence) is weak. Not blocking.

**N4.** RA2a C13: "Thanks for your tip" and "Can you help me practice goalie next week?" could be defended as showing a learner who wants more advice. The key is better, since it shows the tip used, and the `why` addresses it. Hint 2 keeps the child to paragraphs 3 and 4, so that distractor is outside the range. Fine, but note that the item depends on "BEST."

**N5.** Same fact ("huddle to stay warm") in RA1c and RA2a S11. Different animals, different standards. No action.

**N6.** RA2b C04 hint 3 says "if it makes sense," which is close to the key's "make sense." Mild. S3 covers the stronger case.

**N7.** The author log (8.1, 8.2) and the file disagree on RA2b C12 hint 3 (S2). Other log counts match mine within one choice. No other mismatches found.

## 7. Sources

- MythBusters bull/red test: https://mythresults.com/episode85 (fetched)
- Right whale count: https://repository.library.noaa.gov/view/noaa/72014 (fetched; median 384, range 375 to 394, start of 2024)
- Manatee dive time: https://savethemanatee.org/manatees/manatee-facts/ (fetched)
- Ring-tailed lemur huddling and grooming: https://www.pbs.org/wnet/nature/blog/ring-tailed-lemur-fact-sheet (fetched)
