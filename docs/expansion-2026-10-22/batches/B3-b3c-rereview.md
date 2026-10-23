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


## Final spot re-solve (post-polish)

Scope: section 9 of `B3-b3c-author-log.md` ("Fixes after B3 re-review"): 3.T.RA.2.b C05, C12, S14; 3.T.RA.2.a S09, S14. Read-only; no lesson edited, no git.

### Method and honesty about the solve
- I loaded `T-RA.js` in Node (stub `PP.addLesson`) and printed each item with its passages, stripping `why`, `hints`, `how`, `clue`, `misconception`, `like`, `std`. **The solve was not fully blind.** My first diagnostic print kept `correct: true` and `answer`, so I saw the keys before reasoning. I did not run a seeded shuffle and report no agreement rate (it would be meaningless). I instead reasoned from the passage on each item, then audited the ladder against the live-choice definition. All five keys are correct and each has one defensible answer; read this as "keys verified", not a blind agreement score.
- The author log was read after that.

### Facts checked
- Knuckle test (S14): Dr. Donald Unger cracked the knuckles of his left hand but not his right for sixty years and found no arthritis. https://www.livescience.com/9729-knuckle-cracking-ig-nobel-prize.html (fetched), also https://improbable.com/2009/11/05/interview-with-dr-knuckle-cracker/. The item's "both hands were just as healthy" is faithful.
- Narwhal (S09): the tusk is a modified tooth that grows through the upper lip; it has many nerve endings and one study suggests it can detect changes in the water; only about 15 percent of females have an elongated tusk, so "most females do not" is right. https://ocean.si.edu/node/107233 (fetched). "Scientists think" is the right hedge.
- Bulls and red (C12): MythBusters bull test was already verified in the first review (https://mythresults.com/episode85). "As much as a small car" for a grown bull is on the generous side but within range for large breeds; NOTE only.
- Peach trees (C05): no peach tree grows ten feet a year; claim is plainly false.

### Per-item findings (live choices after clue + h1 to h3)

**3.T.RA.2.b C05 (dropdown, 2 pts, DOK 2).**
- Keys: blank 1 "does not tell who they are or how they know"; blank 2 "a number that cannot be true". Correct against the post (signed only "PeachFan", "Trust me", ten feet a year).
- The new h3 for blank 1 ("Is it a name you could look up, or only a screen name?") no longer echoes the key wording. It does steer to the signature, so blank 1 is close to solved by hint 3. Live: blank 1 nominally 3, effectively 2 after h3; blank 2: 3 (no hint touches it).
- SHOULD-1 (distractor polarity): the stem frames a reason NOT to use the post, and the rivals are all reasons TO trust it ("is a scientist who studies fruit trees", "has grown peaches in Georgia for years", "facts that scientists measured", "a link to a college farm guide"). None of those is stated in the post, so a child can rule them out two ways: they are not in the post, and they would be reasons to trust. A child can get both blanks right from the grammar of "should not use ... because" alone. Fix: give blank-1 and blank-2 rivals the same polarity as the key and keep them out of the post, e.g. blank 1: "uses all capital letters" / "writes only one short post"; blank 2: "a picture that looks old" / "a joke that is not funny", or rivals that are real credibility cues that are weaker than the key. Not a MUST because the item still tests the idea (credible vs not) and the key is not word-matched, but it is the weakest item of the five.
- Word match: none; "name"/"screen name" in h3 vs "who they are" in the key is a paraphrase.
- Topic reuse: only here. 

**3.T.RA.2.b C12 (mc, 1 pt, DOK 3).**
- Key "The bulls charged all three flags, and they did not pick the red one." Correct.
- h3: "A sentence gives a reason to doubt a claim only if it tells what happened when someone checked the claim. Ask this of each answer." The belief clause is gone (confirmed in the file). Live: 3 (key, the set-up sentence "a TV show put a red flag...", and the belief sentence). The weight sentence is off topic and weak; the set-up sentence is the real rival since it is about checking but does not give a result. Good.
- Word match: key shares "red" and "flag" with the claim and the set-up rival; fine.
- `how` and `why` agree with the choices.
- No MUST or SHOULD.

**3.T.RA.2.b S14 (mc, 1 pt, DOK 3).**
- Key "When he was old, both of his hands were just as healthy." Correct. Clue/h1 are now "A good reason to doubt a claim comes from someone testing it, not from what people say about it."
- Live: clue and h2 (sentences 2, 3, 4) already take out sentence 1. Remaining 3: sentences 2 and 3 (how he tested) and sentence 4 (what he found). h3's last step ("how he checked, or what he found?") separates 2 and 3 from 4. That is the same two-step logic as C12 and it names no choice, so it is fair, but the ladder is quite directive: by h3 the child is told the criterion that selects 4. Matches the author's "4 / 3 / 3".
- Word match: none between claim ("ruins your hands") and key ("just as healthy"). Good.
- Honest `like` to C12 (reason to doubt from a test result).
- Topic reuse: "knuckles" appears in `T-C.js` only as body parts in other passages (Zadie at the dentist; Mama's washboard), not as the cracking myth. No duplicate.
- NOTE: the stem's "(1)" to "(4)" numbering is consistent with the hints.

**3.T.RA.2.a S09 (mc, 1 pt, DOK 2).**
- Key "Scientists think the tusk can pick up changes in the water." Correct. The stem idea ("helps it find out what is happening around it") and the key share no phrase; "pick up changes" is a fair paraphrase of sensing.
- Live: h1 ("a sentence that shows the tusk doing a job") already leaves sentence 3 as the only job sentence; h2 removes sentence 1 ("where narwhals live"); h3 removes sentence 4. Two live remain (key and "grows out through its lip"). Author's "4 / 3 / 2" is right. Two live is within the rule, but h1 plus the clue nearly decides it (the key is the only sentence with the tusk acting), so the ladder is steep. SHOULD-2 (optional): move the "job or what it is" test out of the clue/h1. Keep h1 as the strategy ("the idea is about what the tusk does") and let h3 carry the job-versus-what-it-is step. That leaves one more live choice at h1.
- Word match: "tusk" is in three choices; only the key lacks it as a feature definition. No isolating word.
- Facts: verified (above).
- Topic reuse: narwhal appears only in `T-RA.js`.

**3.T.RA.2.a S14 (mc, 1 pt, DOK 2).**
- Key "\"It's okay, we'll go slower,\" Cam said, and he walked beside her, holding the seat." Correct. Opinion "Cam is patient with his sister"; no word match to the key (no "patient", "sister").
- Live: h2 asks who each sentence is about and h3 removes sentence 2 (Rosa). Remaining 3: key, "showed her how to ride" (teaching, plausible for patience at a glance), "learned to ride when he was five" (weak). Author's "4 / 4 / 3" is right. The h3 criterion, "what each one shows Cam doing when Rosa has trouble", fits only sentence 3 and so is close to the key's content, but it does not quote it, so I treat it as a scaffold. SHOULD-3 (optional): change "doing when Rosa has trouble" to "doing" or "saying" so it does not carry the idea of trouble, which only the key contains.
- The key is the only choice with Cam speaking and acting; it is also the longest. Minor given the opinion is about Cam's behavior toward Rosa.
- The scenario is new (Rosa/Cam); not repeated elsewhere in `T-RA.js`. "Rosa" also appears in `L-GUM2.js` as a grammar fill-in ("Rosa {0} her bike"), a different skill and sentence. NOTE.
- `like` C13: honest mapping (opinion plus supporting sentence).

### Cross-checks
- Points: dropdown (2 slots) = 2, mc = 1; DOK as labelled.
- Official wording: 3.T.RA.2.a "Refer to specific passages from a text to support an idea, answer, or opinion" fits S09 and S14. 3.T.RA.2.b "Determine what makes a source text credible and relevant and identify examples" fits C05 well; C12 and S14 ask for evidence against a claim, which is a looser fit but acceptable under "credible" (testing a claim) and matches how the lesson models it.
- Grade-3 suitability and passage agreement: fine.
- Set-level giveaways: none found into form A or B from these five items; keys do not repeat.

### Findings summary
- MUST: none.
- SHOULD-1: RA2b C05 rivals are all trust cues, so polarity gives both blanks away (fix above).
- SHOULD-2 (optional): RA2a S09 clue/h1 "shows the tusk doing a job" nearly decides the item.
- SHOULD-3 (optional): RA2a S14 h3 "when Rosa has trouble" carries the key's content.
- NOTE: S14 (RA2b) ladder is directive; C12 bull weight phrase; name reuse of Rosa in L-GUM2.

### Verdict
- 3.T.RA.2.b: **ACCEPTED**, with SHOULD-1 recommended (C05 distractors).
- 3.T.RA.2.a: **ACCEPTED**, with optional SHOULD-2 and SHOULD-3.

Sources: https://www.livescience.com/9729-knuckle-cracking-ig-nobel-prize.html, https://ocean.si.edu/node/107233 (both fetched); https://mythresults.com/episode85 (first review).


## Blind re-solve (post-polish)

Scope: 3.T.C.1.a C07; 3.T.C.2.c P8, C07, S08; 3.T.RA.2.b C05, C12, S14; 3.T.RA.2.a S09, S14. Read-only on lessons; no git. Date: 2026-10-23. Reviewer: independent (not the author; not the earlier spot re-solve).

### Method, and how blind it was
- Script: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/extract.js` loads `T-C.js` and `T-RA.js` in a `vm` sandbox with a mock `PP.addLesson`, picks only the nine items, resolves passage ids to passage text, and shuffles choices (and dropdown options, and EBSR Part A/B choices) with a seeded LCG (seed 20261023). It emits only: id, type, points, prompt, passage text, stimulus (`stem`), and choice or option text. It drops `correct`, `answer`, `key`, `why`, `hints`, `how`, `clue`, `misconception`, `like`, `std` and `dok`.
- Before reading, I grepped the output JSON (`/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/stripped.json`) for `key|hint|clue|why|how|correct|answer`. The only hits were ordinary words inside prompts and options ("how street lamps are made today", "how electric lights work", "Why can Ms. Greene...").
- Answers were saved to `.../scratchpad/my-answers.json` (set read-only) BEFORE I printed any key, clue, hint, how or why.
- **Fully blind for the keys.** Limits: I saw the passage `genre` strings (they are part of the passage object), and I saw the item `points` (which shows that EBSR and dropdown are 2-point).
- Author log not read.

### Agreement
- **9 of 9 items agree (11 of 11 scored answers: C07 Part A and B, S08 both blanks, C05 both blanks).**
- One answer carried a stated doubt: RA2b S14. I chose the result sentence ("When he was old, both of his hands were just as healthy") but wrote down that "One doctor cracked the knuckles on only his left hand for 60 years" was a rival. The key matches my first choice. See RA2b S14 below.
- Shuffled order: keys landed in four different positions across the seven mc/ebsr choice sets. No positional pattern observed.

### Facts verified (URLs fetched)
- Roly-poly / pill bug: terrestrial crustacean, seven pairs of legs, needs damp places, eats decaying leaves and plant matter, rolls into a ball. https://ask.ifas.ufl.edu/publication/IN1099/pdf (UF/IFAS). All C07 passage claims hold, and "pill bug" is a true second name.
- Peach trees: about 18 to 24 inches a year; standard trees top out near 20 to 25 feet. Ten feet a year is impossible. https://www.hgtv.com/gardening/edible-gardening/growing-perfect-peaches and https://www.epicgardening.com/peach-trees/ (mature heights).
- Bulls and red: cattle are colour-blind to red; the MythBusters bull charged flags and dummies of every colour and went after moving people. https://www.livescience.com/33700-bulls-charge-red.html. Matches p5 of RA2b.
- Knuckle test: Dr. Donald Unger cracked the knuckles of his left hand, not his right, for sixty years, and found no arthritis. https://www.livescience.com/9729-knuckle-cracking-ig-nobel-prize.html. The article does not give hand-by-hand results, but "both hands were just as healthy" is a faithful kid-level summary.
- Narwhal: tusk is a tooth that grows through the upper lip; one study suggests it senses changes (saltiness) in the water; about 15 percent of females have an elongated tusk, so "most females do not" is right; "Scientists think" is the right hedge. https://ocean.si.edu/node/107233
- Lamplighters: workers made nightly rounds lighting gas street lamps by hand with long poles; 1895 is in range. https://wtop.com/250-years-of-america/2026/05/america-250-how-gas-streetlights-transformed-american-cities/
- "No dryers" in 1908: automatic home dryers arrived in 1938 (Hamilton "June Day"); earlier devices were hand-cranked or stove-heated. https://www.hunker.com/13410374/the-history-of-the-clothes-dryer. The key's claim is true.
- Official wording (`js/data/standards.js`): 3.T.C.1.a "Determine the purpose (e.g., entertain, inform, persuade) and target audience of a text." 3.T.C.2.c "With adult support, identify the context in which a text is written (e.g., time period, individual, situational)." 3.T.RA.2.a "Refer to specific passages from a text to support an idea, answer, or opinion." 3.T.RA.2.b "Determine what makes a source text credible and relevant and identify examples."

### Comparison table

| Item | My answer | Key | Match | Pts / DOK | Live choices after clue + h1 to h3 |
|---|---|---|---|---|---|
| 3.T.C.1.a C07 (EBSR) | A: children who like to explore outside. B: "Have you ever played in your yard..." | same | yes | 2 / 2 | Part A: 3 (h3 removes teachers; gardeners and scientists stay, each has a fact that tempts). Part B: 4 (h3 only says match Part A). Pass. |
| 3.T.C.2.c P8 | driven a bus for years | same | yes | 1 / 2 | Practice item: clue only. 4 nominally, but 3 rivals invent a source the passage never gives. See P8 finding. |
| 3.T.C.2.c C07 | rain kept the wash from drying; no dryers | same | yes | 1 / 2 | 3 (key, irons/steam, wind). h3 removes "plants". The irons and wind rivals both appear in paragraphs 3 and 5, which h2 tells the child to reread, so they are real rivals. Pass. |
| 3.T.C.2.c S08 (dropdown) | by an author today, who imagined Emmett; a night with a lamplighter in 1895 | same | yes | 2 / 2 | Blank 1: 3 after h3 (key, "real boy", "uncle"); h2 then pushes to key. Blank 2: effectively 1 (see S08 finding). |
| 3.T.RA.2.a S09 | Scientists think the tusk can pick up changes... | same | yes | 1 / 2 | 2 (key, "tooth grows through lip"). Minimum. |
| 3.T.RA.2.a S14 | "It's okay, we'll go slower," ... | same | yes | 1 / 2 | 3 (h3 removes the Rosa sentence; key, "showed her how", "learned at five"). Pass. |
| 3.T.RA.2.b C05 (dropdown) | no name or source; number that cannot be true | same | yes | 2 / 2 | Blank 1: 2 to 3 (key, "paid to say nice things" plausible for a "fan"; "sell a product" weak). Blank 2: 1 (see finding). |
| 3.T.RA.2.b C12 | "The bulls charged all three flags..." | same | yes | 1 / 3 | 2 (key, flag set-up). h2 drops the weight sentence (para 4); h3 drops the belief. Minimum, pass. |
| 3.T.RA.2.b S14 | "When he was old, both of his hands were just as healthy." | same | yes | 1 / 3 | 3 by letter (sentences 2, 3, 4); h3 gives the how-versus-what test that picks 4. Pass, directive. |

### Word-match check
- C1a C07: Part A key shares no phrase with the passage ("explore outside" is a paraphrase of "played in your yard"). Part B key is the only option that speaks to the reader, which is the point of the item. No isolating word.
- 2c P8: the key repeats the note almost verbatim ("had to stop fast many times"), and the three rivals are sources the passage never mentions. A child who only matches words gets it right. Finding S-1.
- 2c C07: the key repeats "rained", "hung", "kitchen" from paragraph 4, but the irons and wind rivals also repeat passage words. Key is the longest choice (two-part). NOTE.
- 2c S08: "imagine" (box) is in the key's "imagined"; the rival "real boy named Emmett in 1895" also repeats box words. Not isolating.
- RA2a S09: no phrase shared between the idea ("find out what is happening around it") and the key. "Tusk" is in three choices. Good.
- RA2a S14: none ("patient" and "sister" do not appear). Key is the only choice with quoted speech, and the longest. NOTE.
- RA2b C05: blank 1 key "who they are / how they know" is only paraphrased by the signature and "Trust me". Blank 2 "number" matches "ten feet" by meaning only. No isolating word.
- RA2b C12: key shares "red" and "flag" with the set-up rival. Fine.
- RA2b S14: "healthy" vs "ruins your hands": no overlap. Good.

### Findings

**3.T.C.1.a C07**
- SHOULD-1: Part A is given away by the passage genre line "Informational text (kids' magazine article)" for p3, if the app shows the genre under the title (the passage objects carry it; the shared passage schema prints it in other lessons). A child can answer Part A from "kids'" alone. Fix: change p3's genre to "Informational text (magazine article)". This also keeps C06, C08 and C09 (same passage) clean.
- NOTE: Part A and Part B are consistent; no rival sentence addresses the reader (the closing "hold it gently in your open hand" is not offered). Good design.
- NOTE: facts all verified.

**3.T.C.2.c P8**
- SHOULD-2: all three rivals ("read a story in the newsletter", "has fallen herself as a rider", "saw a news video") invent evidence the passage lacks, and the key is the one choice that restates the note. Add one rival that uses the note's own words but gets the reason wrong, e.g. "She has watched riders stand up on her bus for years." The box then does the work (15 years as a driver, not as a rider).
- NOTE: the clue ("what she says she has seen") does not match the note, which says she has had to stop fast; change "seen" to "had to do".

**3.T.C.2.c C07**
- SHOULD-3 (optional): paragraph 4 already says it rained and the clothes hung in the kitchen, so a child can answer by matching the sentence before Papa's remark. The "no dryers" half of the key is what makes it situational context. This is acceptable for grade 3 and "with adult support", but the item would test the standard better if a rival also used "rain" (e.g. "It rained, so Mama brought the garden inside to keep it dry"). NOTE-level otherwise.
- NOTE: the paragraph numbering (box and heading not counted) is consistent with the prompt, h2 and `how`.

**3.T.C.2.c S08**
- SHOULD-4: blank 2 is a free point. "How street lamps are made today", "a boy who got lost in the dark" and "how electric lights work" are not about anything in the diary, whereas the key repeats "lamp" and "1895". The mirror item C08 has stronger rivals ("what washday is like for families today"). Fix: use rivals a child could mistake, such as "a night spent with a lamplighter today", "how Emmett's uncle got his job", "how gas lamps were put out in the morning".
- Blank 1 is sound: the box says "Imagine that a boy named Emmett wrote it", and the `how` says so too. h2 ("find historical fiction and imagine") is directive; it does not name the key, but the key shares "imagine".
- `like` C08 is an honest mapping (same two-blank structure, new setting).

**3.T.RA.2.a S09**
- Accepted. SHOULD-5 (optional, carried over): h3's "what the tusk is, or what job it does" is the discriminator and sets the child on the key, and only two choices remain. Moving the job-versus-what-it-is step out of h3 would leave one more live choice. Not required.
- Fact and hedge verified.

**3.T.RA.2.a S14**
- NOTE: the key is the longest and the only quoted speech; the h3 phrase has already been softened. No change needed.
- `like` C13 honest.

**3.T.RA.2.b C05**
- SHOULD-6: blank 2 rivals ("a date that is out of date", "a picture that is blurry") name features the post does not have (it has no date and no picture). A child can rule them out by looking, and the only thing left in the post that can be wrong is the number. Same family of problem as the earlier polarity fault, now a presence fault. Fix: use rivals that are in the post, e.g. "a claim about trees, not about peaches", "a sentence that says 'Trust me'", "a screen name instead of a real name". Better still, keep "a number that cannot be true" as the key and make two rivals about the post's own words that are not the main problem.
- Blank 1: the clue says "who made it or its words", and h3 aims at the signature; the key is close to solved by h3 (Is it a name you could look up, or only a screen name?). It does not echo the key wording. NOTE.
- Fact verified: peach trees do not grow ten feet a year.

**3.T.RA.2.b C12**
- Accepted. NOTE: p5 byline names "Dr. Ray Holt", a made-up author for a made-up page; fine as long as no real book is implied. "As much as a small car" is generous for bulls, but within range.
- The strongest doubt sentence in the passage ("But bulls cannot see red the way people do") is correctly left out of the choices.

**3.T.RA.2.b S14**
- NOTE (carried over, not raised to SHOULD): by h3 the child has the criterion "what he found", so the ladder is directive; it does not name a choice. One more point: sentence 4 depends on sentences 2 and 3 for its meaning, and sentence 2 ("cracked ... left hand for 60 years") is arguably evidence too. "BEST reason" justifies the key, and the `how` explains it. Keep.
- Fact verified.

### Cross-checks
- Points and DOK: EBSR and both dropdowns are 2 points; the six mc items are 1 point. DOK 2 for all except RA2b C12 and S14 (DOK 3), which fits "doubt a claim from a test".
- Grade-3 suitability: vocabulary is fine (crustacean is glossed in the passage; "situational" appears only in hints).
- Distinctness: S08 mirrors C08, S14 (RA2b) mirrors C12, and both are declared `like` items. No pair differs only by names or numbers.
- Set-level giveaways: none found between these items; keys do not repeat between lessons.

### Summary and verdicts
- MUST: none.
- SHOULD: 1 (C1a genre label "kids'"), 2 (2c P8 rivals), 3 (2c C07, optional), 4 (2c S08 blank 2), 5 (RA2a S09 h3, optional), 6 (RA2b C05 blank 2 rivals).

| Lesson | Verdict |
|---|---|
| 3.T.C.1.a | **ACCEPT** (fix SHOULD-1 before release; one-word edit to the p3 genre) |
| 3.T.C.2.c | **ACCEPT** (SHOULD-2 and SHOULD-4 recommended; both are distractor rewrites) |
| 3.T.RA.2.a | **ACCEPT** (SHOULD-5 optional) |
| 3.T.RA.2.b | **ACCEPT** (SHOULD-6 recommended: C05 blank 2 rivals) |

No lesson needs another full review round. Items outside the nine were not checked in this pass.
