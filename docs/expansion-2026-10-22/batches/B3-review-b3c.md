# B3 batch c review: 3.T.RA.1.b, 3.T.RA.2.a, 3.T.RA.2.b

Reviewer: independent (did not author). File reviewed (read-only): `js/data/lessons/T-RA.js` (RA1b lines 954-2039, RA2a 2253-3207, RA2b 3209-4159). 3.T.RA.1.a is reviewed separately.
Date: 2026-10-23. Baseline for "what is new": main `9a5b297`.

## Verdicts

| Lesson | Verdict | Blocking items |
|---|---|---|
| 3.T.RA.1.b | ACCEPTED (with SHOULD/NOTE items) | none |
| 3.T.RA.2.a | CHANGES REQUIRED | M3 (lemur claim in S11) |
| 3.T.RA.2.b | CHANGES REQUIRED | M1 (C04 ladder), M2 (C05 ladder), M4 (bull test facts in p5 and C12) |

C12 on 3.T.RA.2.a is now a real compare task (Kai's proof sentence versus Lena's proof sentence, "which proof is better and why"). Confirmed.

## 1. Blind solve

- Method: a script printed every item with choices shuffled (seed 77112026), with key, why, hints, how, clue and all nested answer fields stripped. I answered from that text only, saved `answers.json` with an `answers.sha256` file and a UTC timestamp (2026-10-23 10:01:10), and only then ran the comparison. I read the author log after that.
- Result: **94/94 scored items agree with the keys.** The 6 cr items (2 per lesson) are not scored; their sample answers and criteria were read separately and are fine.
- How blind this was, honestly: the solver is the same model family as the authors, so agreement shows the keys are unambiguous and the text is self-consistent. It is weak evidence about whether a 3rd grader finds them easy. It also cannot catch factual errors, because the passages are in front of the solver. Several MUST findings below are things a 94/94 solve cannot see (hint ladders that leave only the key; real-world facts).
- Scratch files: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b3rev-c/` (`blind.txt`, `answers.json`, `answers.sha256`, `cmp.txt`).

## 2. Findings

### MUST

**M1. SK-RA2b-C04 (mc, DOK 3): the hint ladder leaves only the key.**
Evidence: choices are A-careful (key), B-exact-time, B-every-peach, A-no-numbers. Hint 1 says to ask whether facts could happen in real life. Hint 2 ("Picture what it says happening on every farm across a whole state") kills both Excerpt B choices. Hint 3 ("Having no numbers does not make an excerpt better or worse") kills the fourth. Only the key is live after hint 3. The brief requires the whole ladder not to leave only the key. The author log's live-choice table for this item does not match the text.
Fix: make hint 2 about the method without ruling out a whole excerpt, for example "Read both excerpts. For each one, ask whether the facts could happen in real life and whether it promises too much." Make hint 3 remove one choice only (the "no numbers" one is fine) so that one A-versus-B decision still has to be made by the child.

**M2. SK-RA2b-C05 (dropdown): hints settle both blanks.**
Evidence: hint 3 says the writer is not a scientist or a farmer, which removes both wrong options in blank 1. It then sends the child to "check the number", and the two wrong options in blank 2 ("facts that scientists measured", "a link to a college farm guide") are already contradicted by the same hint 2/3 wording that says the post has none of those things. After hint 3, neither blank has two live choices. The rule is at least two live choices per blank after hint 3 and at most one blank settled.
Fix: hint 2 should only say "Look at how the post is signed and at what it claims". Hint 3 should settle blank 1 only (it may name the first blank's wrong options) and say nothing that decides blank 2. Do not reuse the words "scientist" and "farmer" in hint 3 if blank 2 distractors also use them.

**M3. SK-RA2a-S11 (similar, ms): unsupported lemur fact.**
Evidence: key choice "Lemurs in a group take turns watching for danger while the others eat." I found no source that supports a turn-taking sentinel system for ring-tailed lemurs. Duke Lemur Center pages and the IELC factsheet describe grooming, huddling, alarm calls and group travel, not rotating lookouts. A 3rd grader would learn a false fact from a practice item.
Fix: replace with a supported detail, for example "Lemurs in a group huddle together to keep warm" or "Lemurs in a group call out to warn each other of danger" (both are documented). Keep "clean each other's fur" (grooming is documented). Update `why`, hints, `how`, and the sentence in the answer text.
Sources: https://lemur.duke.edu/?p=444 , https://lemur.duke.edu/?p=33008 , https://ielc.libguides.com/sdzg/factsheets/ringtailedlemur/behavior

**M4. Passage p5 "Bulls and the Color Red" (used by SK-RA2b-C11, C12, S-items) and SK-RA2b-C12 key: wrong account of the cape test.**
Evidence: p5 paragraph 3 says "one team of scientists" showed bulls red, blue and white capes and that a still cape was ignored even when red. The best-known test was a TV show (MythBusters, 2007), not a team of scientists. In it the bulls charged dummies of all three colors and did not prefer red. I could not find a source for the "still cape was not charged" result; one popular article says the opposite for dummies that did not move. The movement point is supported by general sources (bulls react to the moving cape), but the specific stationary result is not.
Fix: rewrite paragraph 3 as, for example, "In one test, a bull was shown red, blue and white capes. It charged all three, and it did not pick the red one." and "When the capes were waved, the bull charged them all." Change the C12 key to the waved-cape sentence, and change its `why`, hints and `how`. The "cattle see blue and yellow, and red does not stand out" sentence is supported and can stay.
Sources: https://mythresults.com/episode85 , https://www.livescience.com/33700-bulls-charge-red.html , https://www.mentalfloss.com/animals/what-really-happens-if-you-wear-red-front-bull , https://www.scienceabc.com/nature/animals/do-bulls-really-hate-red-colour.html

### SHOULD

**S1. SK-RA2b-C09 (mc): hint 2 splits the choices into "memory" and "not memory".**
Evidence: hint 2 asks the child to decide whether each sentence is about the memory test or something else. Three choices are about memory or learning; the key is the one that is not. After hint 2 the key is the single sentence in its category, and hint 3 removes one of the other three. This is close to M1 but I count at least one other choice (the pet-goldfish-learns sentence) as arguably live, so I rate it SHOULD.
Fix: hint 2 should say "Find each sentence in Source 2 and ask what question it helps answer." Leave the sorting to the child.

**S2. SK-RA1b-C07 / right-whale count (p7, "Fewer than 400"): date-fragile number.**
Evidence: NOAA's 2025 report gives 384 (confidence range 375-394), so "fewer than 400" is true now. The Georgia DNR page says fewer than 350. The 2026 calving-season numbers page is also out. A number that crosses a round figure in either direction will be wrong within a year or two.
Fix: say "About 380 of them are left" or "Fewer than 400 of them are left, and the number is small enough to count" and keep the hint that counting does not keep whales safe. Add a short note to the author sheet to re-check each year.
Sources: https://www.fisheries.noaa.gov/feature-story/numbers-2026-north-atlantic-right-whale-calving-season , https://repository.library.noaa.gov/view/noaa/72014 , https://www.narwc.org/biology.html , https://gadnrle.org/conservation/rightwhales , https://www.georgiaencyclopedia.org/articles/geography-environment/right-whales/

**S3. SK-RA2a-C13 and SK-RA2a-S14 (hottext): the answer is found by word match.**
Evidence: the question words "thankful" and the sentence containing "Thanks" give a free match. The author log already flags the ladder as thin. Hint 3 says only that Dani jogging over does not show anything about Simone. The child can solve it by matching the word.
Fix: change the idea so the proof sentence does not share a word with the idea (for example "Simone learned from her mistake" with the sentence about her keeping her eyes on the ball). Do the same in S14. Check S09, S12 (also flagged by the author) for the same pattern.

**S4. SK-RA2b-C12 ladder after M4 rewrite.**
Evidence: hint 2 sends the child to paragraphs 1 and 3, and hint 3 says "look closely at the two sentences from paragraph 3". Both paragraph-3 sentences are then the only live choices, so two are live, which passes. After the rewrite, check that a choice from paragraph 1 or 4 is still live after hint 3.

**S5. SK-RA2b-S14 and the other thin ladders.**
Evidence: the author log lists RA2a C13, S09, S12, S14 and RA2b S14 as thin. I agree for C13 and S14 (S3 above). For S09, S12 and RA2b S14 the ladders pass the brief's letter (each hint stays inside the rules) but hint 3 is mostly a restatement of hint 2. Not blocking.
Fix: give hint 3 one new piece of information (rule out one choice, or settle one blank) instead of repeating hint 2.

**S6. SK-RA1b-C10 (mc): two distractors are weak.**
Evidence: "Ask a classmate to guess" and "Write his own best guess" are things no child will pick, and hint 3 removes the "length of a calf" choice. After hint 3 the key is the only choice that sounds like research. Not a rule failure, but the item has little discrimination.
Fix: replace "Ask a classmate to guess" with a plausible source with a weakness (for example "an email from a pet shop that sells whale toys").

### NOTE

**N1. 3.T.RA.2.b has no Part A/B (ebsr) item.** The author log asks whether this matters. The lesson meets the format minimums (4 or more formats, 3 or more technology-enhanced, mc 6 or fewer), and check T5 is satisfied by the other lessons. The standard (credible and relevant source, identify examples) fits dropdown, match, hottext and ms better than a two-part item. Accepted as is.

**N2. 3.T.RA.1.b has seven teach points.** Pre-existing on main (the lesson already had seven). B3 added only one `teach.words` entry. Not B3's regression. Accepted; if the Learn It page runs long on a phone, trim later.

**N3. p3 "Goldfish Facts!" is 77 words (check-content warning).** Short on purpose: it is a thin, sales-style source that the child must judge. Accepted. The goldfish memory claims in p4 are supported: goldfish learned a sound-and-food signal and responded months later, and goldfish live well past 10 years in clean water (sources below).

**N4. Facts checked and found fine.**
- Sea otter eats about one-fourth of its weight a day: supported (Oregon Zoo and Oceana say about 25% of body weight; other sources say 20-25%). Wording "about one-fourth" is fine.
- Sea otter fur is the thickest of any animal, otters have no blubber, and they wrap in kelp to sleep: supported.
- Guide dogs: puppy raisers from about 8 weeks and a year with a family is supported. "Several months of training" in p9 is generous; one school gives 8-12 weeks and others about four months. Wording is acceptable; "a few months" would be safer.
- Cattle see blue and yellow better than red: supported (dichromatic vision).
- Manatee (item that says "20 minutes" without surfacing): this is a maximum, not typical (usually 3-5 minutes while active, up to about 20 minutes resting). Reword to "up to 20 minutes" if it is not already worded that way.
- Toucan bill releases body heat: supported (NPR, National Geographic, Wikipedia).
- Right whale baleen, calving in winter off Georgia and Florida, 50-foot length, and ships and ropes as the main dangers: supported. Georgia state marine mammal: supported.

**N5. Topic reuse across `js/data`.** No reuse of right whale, guide dog, sea otter, bull, lemur, manatee, or toucan outside T-RA.js. Overlaps found, none a key-fact reuse: goldfish (pet in a grammar sentence in L-GUM2 and a class pet in a poem in T-T34), firefly (a poem in T-T34 and R-POE-01, here an informational passage about light), pumpkin (a rhyme in T-T34, a festival line in T-SS, here a farm source). Accepted.

**N6. Research and self-selected topics.** The cr items for RA1b are adult-checked and never auto-scored (browser shows "One good answer" criteria and no score). Confirmed.

## 3. Checks that passed

- Official wording (PDF pp. 37-38) matches `standards.js` for all three codes.
- `node verification/check-content.js --all`: PASS, 0 failures. Only warning for these lessons: RA2b p3 short (N3). No similar-coverage warnings.
- Hint ladders: reviewed for every core item; live-choice detail written out for the items in findings above. Items I read through with no problem: RA1b C01 to C14 (hint 3 settles at most one row or blank, or removes one choice, every item leaves two or more live choices), RA2a C03 to C14 except C13, RA2b C02, C03, C06 to C08, C10, C11, C13, C14. I did not write a full table for every item and I tabulated live choices only where something looked wrong.
- Leaks: no Together-item addon repeats a core or similar key sentence word for word; no key fact from these lessons shows up in `test`/`testB`.
- `like` mappings: browser confirmed that every one of the 45 core items has its own similar item still unused in order (all S01 to S15 appear once per lesson) and that each similar item's `like` list contains the core item it is offered for. I confirmed membership by machine; for the content match I read the pairs and found them honest except the word-match issue in S3.

## 4. Browser run

- Server: `node verification/serve.js . 8823`; Playwright at 320x568, each lesson's 15 core items worked in order in one sitting (`b3rev-c/browser.py`, log in the scratchpad).
- For each item: a wrong answer gave "Not quite", three hints appeared, Show Me How showed 3 to 7 steps, Try a Similar Question loaded the mapped item, which checked as right when answered correctly. Next / "Finish this set" / "Go on to set 2" and "Set 3 finished" all worked. Item order matched the plan.
- 45/45 items passed; BAD 0.
- No page errors. No horizontal scroll at 320 px. The only console error and failed request is the Google Fonts stylesheet, which the sandbox has no network for; not a site problem.
- Server stopped.

## 5. Author-log open items, judged

| Open item | Judgment |
|---|---|
| RA2b has no Part A/B | N1, accepted |
| RA1b seven teach points | N2, pre-existing, accepted |
| Thin ladders RA2a C13, S09, S12, S14; RA2b S14 | S3 and S5; C13 and S14 need the fix |
| 77-word goldfish p3 | N3, accepted |
| Author log live-choice tables for RA2b C04 and C05 | Wrong: see M1 and M2 |

## 6. Sources (all fetched or searched with WebSearch/WebFetch)

- Right whale: https://www.fisheries.noaa.gov/feature-story/numbers-2026-north-atlantic-right-whale-calving-season , https://repository.library.noaa.gov/view/noaa/72014 , https://www.narwc.org/biology.html , https://gadnrle.org/conservation/rightwhales , https://www.georgiaencyclopedia.org/articles/geography-environment/right-whales/ , https://home.nps.gov/foma/learn/nature/right-whale.htm
- Cattle, red, cape test: https://mythresults.com/episode85 , https://www.livescience.com/33700-bulls-charge-red.html , https://www.mentalfloss.com/animals/what-really-happens-if-you-wear-red-front-bull , https://www.scienceabc.com/nature/animals/do-bulls-really-hate-red-colour.html , https://www.ripleys.com/stories/bulls-seeing-red , https://scienceblog.com/m-bulls-arent-enraged-by-red-theyre-red-green-colour-blind-and-its-the-movement-of-the-cape-that-triggers-the-charge/
- Goldfish memory: https://www.scienceabc.com/nature/animals/do-goldfish-really-have-a-3-second-memory.html , https://www.mentalfloss.com/animals/fish/do-fish-really-have-three-second-memory , https://sites.psu.edu/siowfa15/2015/10/23/do-fish-have-a-three-second-memory
- Sea otter: https://www.oregonzoo.org/animals/sea-otter , https://oceana.ca/en/blog/10-amazing-facts-about-sea-otters/ , https://theinnerotter.ucsc.edu/biology/general-biology
- Guide dogs: https://vetmed.oregonstate.edu/all-stories/raising-newton-vet-students-raise-puppy-guide-dogs-blind
- Lemurs: https://lemur.duke.edu/?p=444 , https://lemur.duke.edu/?p=33008 , https://ielc.libguides.com/sdzg/factsheets/ringtailedlemur/behavior
- Manatee: https://oceantoday.noaa.gov/manatees101/ , https://en.wikipedia.org/wiki/West_Indian_manatee
- Toucan: https://www.npr.org/2009/07/23/106920166/big-beaked-toucans-play-it-cool , https://www.nationalgeographic.com/science/article/toucan-play-at-reducing-the-heating-bill , https://en.wikipedia.org/wiki/Toucan
- Peaches: https://ssl.acesag.auburn.edu/department/peaches/frzactive.html , https://site.extension.uga.edu/climate/2015/04/peach-crops-hurt-by-recent-cold-weather/ , https://extension.umd.edu/sites/extension.umd.edu/files/publications/AreYourPeachesReadytoHarvest_FS-1182_ada.pdf
- Not reachable (not used as evidence): NOAA species page, Monterey Bay Aquarium sea otter page, seafoodsource.
