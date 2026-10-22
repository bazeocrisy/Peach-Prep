# B1 review 2B: TS-PS, 3.T.C.2.a, 3.T.SS.2.a and 3.T.T.4.a

**Reviewer:** independent content reviewer "2B". I wrote no B1 content. This file is the only file I wrote in the repository. I ran no git commands.
**Focus:** my own blind solve; instructional quality and grade suitability; every hint ladder read in order, as a struggling child would meet it; `how` quality; the teaching sequence; poem quality; and whether 3.T.SS.2.a C04 ("as long as the pool") is clearly not a simile.
**Sources reviewed:**
- `js/data/lessons/T-TS.js` (TS-PS block)
- `js/data/lessons/T-C.js` (3.T.C.2.a block)
- `js/data/lessons/T-SS.js` (3.T.SS.2.a block)
- `js/data/lessons/T-T34.js` (3.T.T.4.a block)

In each block I read `teach`, `learn`, `coach`/`clues`, `parent`, the passages, `practice`, `addons`, `core` (rev "1") and `similar`. I read `test` and `testB` only to check for leakage.
**Rules applied:** 01-architecture §2.2 and §2.3; 04-content-plan §4, §6 and §8; official wording from `js/data/standards.js`.

## 0. Blind-solve integrity (read this first)

**Method.** I wrote `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/r2B/blind.js`. It loads the four lesson files in a Node `vm` and resolves every `{ref}`. It prints the fifteen core items and three similar items of each lesson, with the passages they use, and shuffles all choices, rows, steps and dropdown options with a seeded PRNG (seed 2026102). It prints no `correct` flags, `answer` fields, `why`, `clue`, `hints`, `how`, `misconception` or `like`. Order items are printed shuffled. The output is `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/r2B/blind-dump.txt`. None of the passages has a figure, so there was no alt text to include.

**What I had seen before solving.** I had seen:
- the field names of each item type, printed by a schema script with all values stripped;
- the first 400 characters of `T-C.js`, which are the 3.T.C.1.a teach text, a lesson not under review;
- the template text of four dropdowns, without their options;
- the hottext reference lists.

None of these shows a key. I did not open the lesson source, and I did not read the author logs, until my answers were saved.

**Saved answers.** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/r2B/blind-answers.json` holds 72 entries. I saved it before running the comparison script (`cmp.js` in the same folder).

**Result: 71 of 71 scored items agree (100%).** SK-TC2a-C12 is a `cr` item and is not scored. The solve was **fully blind**.

| Lesson | Items solved | Agree |
|---|---|---|
| TS-PS | 18 | 18 |
| 3.T.C.2.a | 17 (+1 cr) | 17 |
| 3.T.SS.2.a | 18 | 18 |
| 3.T.T.4.a | 18 | 18 |

**Items where I hesitated before settling** (each is now covered by a finding or a note):
- TS-PS C13, "the problem happens at a school": the answer rests on the jump-rope story never naming a school (N-8).
- TT4a C07, "slap, slap, slap": the line repeats words, but it is about the ropes before the speaker jumps in.
- TC2a C11, "does not want to smell like flowers": this could fit a child as well as a dog.
- SS2a C04, "as long as the pool at my school": see M-6.

I found no wrong key. Most of my findings are about hint ladders, in-set giveaways, two definitions in the teaching, and distractor strength.

## 1. Verdicts

| Lesson | Verdict | Open MUST |
|---|---|---|
| TS-PS | **CHANGES REQUIRED** | M-1, M-2 |
| 3.T.C.2.a | **CHANGES REQUIRED** | M-3, M-4 (C05) |
| 3.T.SS.2.a | **CHANGES REQUIRED** | M-4 (C02, C07, C12), M-5, M-6 |
| 3.T.T.4.a | **CHANGES REQUIRED** | M-4 (C08), M-7, M-8, M-9 |

Every MUST fix is a small rewrite: a hint, one added distractor or target, one glossary line, or one hint or `how` line. The passages, keys, set structure and counts are sound. On every lesson, the fifteen are far stronger than the old two- or three-item Try. Once the MUST findings are fixed, I would accept all four.

## 2. Quantitative bars (04 §4.3, §4.4, §6)

| Bar | TS-PS | 3.T.C.2.a | 3.T.SS.2.a | 3.T.T.4.a |
|---|---|---|---|---|
| Formats (at least 4) | 7 | 7 | 6 | 6 |
| `mc` (at most 6) | 6 | 5 | 4 | 6 |
| Technology-enhanced formats (at least 3) | yes | yes | yes | yes |
| DOK 1 (at most 2) | 0 | 0 | 0 | 0 (but see S-6 on C03) |
| DOK 3 (at least 2) | 6 | 7 | 6 | 7 |
| Texts (at least 3) | p1, p3, p4, p5 and stems | p1, p3, p4, p5 and stems | p1, p4, p5 and stems | p5, p6, p7, p8 and a stem |
| Most items on one passage (at most 7) | p4: 5 (+1 paired) | p4: 5 | p4 and p5: 4 each | p5 and p6: 4 each (+1 paired) |
| Context domains (at least 4) | home, sports, school, science, community | family, community, school, sports | sports, family/nature, community, science | family, school, nature, sports, community |
| Points (choose-two, two-slot dropdown and match = 2) | correct, except S-7 (order = 1) | correct | correct | correct |

`check-content.js --all` passes with 0 failures. The only warnings for these lessons say that some core items have no similar item.

`readability.py`:
- every new passage is within the lesson norms, FK about 1.6 to 4.3;
- 3.T.C.2.a p3 ("Ms. Pruitt's Corner", FK 1.6) is the lowest, but its unreliable-narrator content suits grade 3 (N-11).

**Browser check on port 8744.** Each of the four lessons registers `SK:<k>:y`, `:y2` and `:y3` with `own: true`, five items each, in the right order. The first item of each set renders with no page errors. The only console error was a blocked external font through the proxy.

**Leakage.** I ran an n-gram scan (`ngram.js` in the same folder): six-word grams, ignoring any gram that appears in more than three corpus entries. It compared every core and similar item and every new passage against:
- every other lesson's practice, core, similar, Watch Me, Learn It, test, testB and passages;
- every mixed set and the Practice Test (`js/data/sets/*`);
- these lessons' own test, testB, Watch Me and Learn It.

It found **no content leak**. The only hits were boilerplate stems ("read the story in the box", "this question has two parts"), and an unrelated phrase match: "skin under his chin" appears in both the anole article and the 3.T.C.1.c spring peepers passage, about a different animal. Shared frames with form A are listed in N-12.

## 3. Findings

### MUST

**M-1. SK-TSPS-C09: hint 2 alone leaves only the two keys.**
- **Evidence:** the targets are p4:1:2, 3:2, 4:3, 5:1, 6:1 and 6:2. Hint 2 says "Look at the part of the story after the girls decide what to do." The decision is 5:1, and the only targets after it are 6:1 and 6:2, which are both keys. Hint 3 then rules out 3:2, a sentence that hint 2 had already excluded. The author's log says hint 3 was fixed ("rules out a sentence outside the hint 2 region"), but the leak is in hint 2.
- **Fix:** make hint 2 strategy-only. For example: "First find the problem from paragraph 1. Then look for sentences that show that problem no longer happening. Choose two." Keep hint 3 on 3:2. Alternatively, add a post-decision distractor target such as 5:2 ("Each word of the rhyme told the turners when to swing…"). It explains how the chant works, not that it worked, which teaches the misconception in the item's mix-up line.

**M-2. SK-TSPS-P4 gives away SK-TSPS-P6 inside set 1.**
- **Evidence:**
  - P4 is set 1 item 1. Its slot 1 key is "but", and its `why`, which is shown even on a correct answer, says "but shows that this attempt did not work". Its `how` says the same.
  - P6 is set 1 item 4, "What does the word 'But' show here?", and its key is "A try did not work."
  - The two items share the same key logic, so they fail §6 rule 1 as well as the no-giveaway rule. The author noted the overlap and kept both because the inventory allowed it. But §6 rule 12 says a reused item that collides is revised.
- **Fix (pick one):**
  - Move P6 to Together, which then has four items, and write a new set 1 item on p1 that uses a different clue-word role.
  - Recast P6 as the "but shows a difference" contrast that teach point 2 now teaches. Use a p3 or p1 sentence, and keep it away from p4's "Imani's hands swung fast, but Kiara's swung slowly", which is C08's Part B key.
  - At the least, rewrite P4's `why` and `how` so they do not state what "but" signals.

**M-3. SK-TC2a-C04: hint 2 assigns each blank to the sentence that states its key, and hint 3 leaves the two swapped options.**
- **Evidence:** hint 2 says "For the first blank, reread paragraph 2 for what Lamar says…" (Lamar: "she just likes to boss kids around", the slot 0 key word for word) and "For the second blank, reread what Ms. Pruitt says in paragraph 4" ("I don't want to see any of you get hurt", the slot 1 key). Hint 3 then removes "wants the corner all to herself" from both slots. The only thing left is to avoid swapping the two remaining options, and hint 2 has already said which goes where. A reader of hints 1 and 2 who has not seen the choices can write both keys, which fails the §4.5 rule 5 audit.
- **Fix:** make hint 2 say what to do, not where the key is. For example: "For each blank, ask whose idea it is. Is it what the narrator and a friend say about her, or what Ms. Pruitt herself says and does?" Keep hint 3.

**M-4. EBSR Part B is pinned by hint 2 (five items).** Each hint 2 points at the only Part B choice in the region it names, and usually paraphrases it. A reader of hints 1 and 2 can write down the Part B key without seeing the choices. This is the same pattern as B0 M-1.

| Item | Hint 2 | Why it pins Part B | Fix |
|---|---|---|---|
| **SK-TC2a-C05** | "Reread the last paragraph…" | "See? Grumpy." is the only Part B choice from paragraph 5 | Add a paragraph 5 distractor, "Then she went back to her spot on the corner." Do not use "She didn't smile at me once", which would also support the key |
| **SK-SS2a-C02** | "…reread what happens to Rosa just before her brother starts jumping" | That is p1:4:2, the key | Add a paragraph 4 distractor, "When Rosa touched the wall, she pulled off her goggles." Change hint 2 to "Reread paragraph 4. Why might he be jumping?" This also makes Part B less weak: today its three distractors are all about Rosa swimming |
| **SK-SS2a-C07** | "What happens to the castle right before Grandpa Joe speaks?" | That is 3:3, the key | "Reread stanza 3 and the lines around 'Chin up!'" Stanza 3 already holds the distractor "With towers in a row" |
| **SK-SS2a-C12** | "Read paragraph 5. What does the author say about finding an anole on a tree?" | That paraphrases 5:2, the only Part B choice in paragraph 5 | "Read the sentence after the idiom. What would a reader have to do?" Or add a paragraph 5 distractor (there is only one other sentence there, which is the idiom itself), for example a paragraph 2 color sentence |
| **SK-TT4a-C08** | "Read stanza 3. What does the bell do to the game, and what does the speaker say about tomorrow?" | It states the content of the Part A key and points at the only Part B choice in stanza 3 | Change hint 2 to "Compare stanza 3 with stanza 2. What is different?" Add a stanza 3 distractor, "I'm out of breath, but what a thrill!" Do not use "The bell rings out. The ropes fall still.", which supports half of Part A |

Three Together addons have the same pattern, which the author also wrote for this batch: SK-TC2a-P3, SK-SS2a-P3 and SK-TT4a-P5 (N-6).

**M-5. SK-SS2a-C05: hint 3 leaves only the key in slot 1 and all but settles slot 0.**
- **Evidence:** hint 3 says "There is no ball and no park at a swim meet, and nothing is joined by like or as. That tells you the kind of language." Both slot 1 distractors are the literal readings it rules out ("will hit a ball far over a fence", "will swim in a pool inside a park"), so only the key is left. In slot 0, the same sentence rules out simile and points to idiom. The author asked whether this was too strong (b1c log §4.3). It is.
- **Fix:**
  - Replace one slot 1 distractor with a plausible non-literal misreading, for example "should rest and skip the next meet" (which fights "Keep practicing") or "will need a coach who plays baseball".
  - Cut hint 3 to one slot: "Nothing is joined by like or as, so it is not a simile. Decide whether it says one thing is another, or is a saying."

**M-6. 3.T.SS.2.a: the glossary definition of simile contradicts the key of C04 and S03.** This finding answers the brief's question about C04.
- **Is "This pool is as long as the pool at my school" a simile?** No. A simile compares two *unlike* things, and this is a literal comparison of two pools. LitCharts: "A simile is a figure of speech that directly compares two unlike things… the comparison… is not literal" ([litcharts.com](https://www.litcharts.com/literary-devices-and-terms/simile)). Teach point 5 says so too: "My bike is as big as yours" compares two things of the same kind. The `how` and hint 2 ("two different kinds of things") are right.
- **Is it *clearly* not a simile to a grade 3 child?** Not yet, because the lesson teaches two rules:
  - The `teach.words` glossary defines simile as "**a comparison that uses like or as**". By that rule, the pool sentence *is* a simile.
  - Teach point 1 says "compares two **different things**". Two pools are, literally, two different things.
  - A child who checks the glossary, which is the page a struggling child goes back to, will pick the distractor and be marked wrong. That breaks §6 rule 9 (rules match what the lesson teaches). S03 ("as old as the one at the zoo") has the same trap.
  - The Watch Me examples never model a same-kind "as … as".
- **Fix:**
  - Glossary: "a comparison of two different *kinds* of things that uses like or as."
  - Teach point 1: "compares two different kinds of things…"
  - Watch Me 1: add one step: "Check that the two things are different kinds of things: fur and a cloud. 'Her fur was as soft as her sister's' would not be a simile."
  - With those changes, C04 is clear, and its distractor is a good one that matches the misconception.

**M-7. SK-TT4a-C04: hints 2 and 3 together leave only the key.**
- **Evidence:** the targets are 1:2, 1:4, 2:2, 2:3 and 3:1.
  - Hint 2 says "Compare the way stanza 1 ends with the way stanza 3 begins. Something happens in between." That leaves the stanza 2 targets: 2:2 (counting to three) and 2:3 (the key).
  - Hint 3 then rules out 2:2.
- **Fix:**
  - Make hint 2 strategy-only: "Read the poem in order. In each line, ask: is everything still going as planned?"
  - Or add 2:1 ("Sizzle, sizzle, now it's me.") as a target, so stanza 2 holds three choices.
  - Do not add 2:4 ("It lands half on the stove below."). It also shows things going wrong, so it would be a second defensible key, as the author noted.

**M-8. SK-TT4a-C07: after hint 3, the only lines that repeat a word are the two keys.**
- **Evidence:** hint 2 says "Find each line that repeats a word. Then ask what the repetition is about: the ropes, the counting or the jumping." The lines that repeat a word are "slap, slap, slap", "Don't stop! Don't stop!" and "hop, hop, hop". Hint 3 then removes "slap, slap, slap", which leaves exactly the two keys.
- **Fix:** keep hint 2's question, but replace hint 3 with something that does not eliminate. For example: "A line can be about the jumper even when someone else says it. For each line that repeats a word, ask: does it show something happening again and again while the speaker jumps?" Another option is to rule out a non-repeating distractor, such as "I leap so high I touch the sky", instead of the slap line.

**M-9. SK-TT4a-C08 gives away SK-TT4a-C09 inside set 2.**
- **Evidence:**
  - C08 is set 2 item 3. Its hint 3 says "The speaker jumps in at the end of stanza 1…".
  - C08's `how` 4 and `why` add "the first turn comes in stanza 1".
  - C09 is item 4, "Why does the poet end the first stanza there?", and its key is "It ends the waiting part at the very moment the speaker jumps in."
  - A child who takes C08's third hint, or simply reads its `why` after answering correctly, is handed C09. 04 §4.5 forbids pointing at evidence that another item in the same set asks for.
- **Fix:** have C08's hint 3 rule out a different distractor (trips on a rope: "Nobody falls in stanza 3; the *ropes* fall still"). Remove "the first turn comes in stanza 1" from its `how` and `why`. Or swap C08 and C09, so the stanza 1 item comes first.

### SHOULD

**S-1. Hint 2 does the key inference (the ladder is too steep at step 2).** These hints do not narrow the choices by location. They hand over the inference itself, so hint 3 has nothing left to scaffold. Each one should point to the evidence and stop there.

| Item | Hint 2 now | Suggested hint 2 |
|---|---|---|
| TC2a-C08 | "Think about how most kids feel right before they get a shot." That is the key | "Reread the sentences just before and after this one in Part 1. What else does Darius say about haircuts?" |
| TC2a-C14 | "…what the coach tells the narrator to do." The key is "practicing, as the coach says" | "Look at what the narrator admits after the word Well." |
| TC2a-C15 | "find what the writer says about the clay and about the pot" names both key dimensions | "Read the two journals side by side, one sentence at a time. Choose two." |
| TC2a-S02 | "what the speaker says it has in the first two lines" (roots, branches) | "Find what the speaker has and what the children do to it." |
| SS2a-C06 | "How does it move, and how hard does it push?" That is gentle, the key | "Picture a sleepy cat. Then reread stanza 1 for what the ocean does." |
| SS2a-C08 | "what a recess yard sounds like, and what kids chasing a ball look like" gives both keys | "Reread stanza 2. What do the gulls do, and what are they compared to?" |
| SS2a-C13 | "Read the sentences that come right after the metaphor. What are they about?" Color is the key | "Ask what a magician does. Then find what the anole does in paragraph 2." |
| TT4a-C09 | "What is the speaker doing in the lines before 'One, two, three'?" Waiting is the key | "Ask what part of the game stanza 1 is about, and what part stanza 2 is about." |
| TT4a-C12 | "What does the web look like now, and what comes into view?" names both halves of the key | "Compare what the spider is doing in stanza 3 with stanzas 1 and 2." |

**S-2. Weak or implausible distractors.**
- **TC2a-C10:** all three distractors (haircut steps at home, Mr. Odom dislikes haircuts, why Mom chose the shop) are off-topic. Only the key is about point of view. Add a perspective misreading, for example "so readers can find out what Darius was thinking during the haircut". That is the mix-up the item names: a second narrator cannot see inside the first one's head.
- **TC2a-C08:** "He thinks he is sick and needs a doctor" is absurd. Replace it with a plausible literal misreading, for example "He thinks the clippers will poke him like a needle."
- **TT4a-C01, slot 1:** "pan and three" is not tempting. Use "pan and sound" (lines 1 and 3). That tests the "every other line" misconception that slot 0 offers.
- **SS2a-C05, slot 1:** see M-5.
- **TS-PS C15:** two of the three distractors are about paint colour, which is weak but acceptable. "The squeaking was loudest at recess" is the good one.

**S-3. 3.T.C.2.a: two items are pure "who is telling it" (first or third person), with the same key logic.**
- **Evidence:**
  - C03 (bus stem) and C13 row 2 (Marcus) both turn on the same trap: an "I" inside quotation marks means the teller is outside the story.
  - Together P1 and similar S02 add two more "who is telling" items.
  - The official wording is "Describe different perspectives of the narrator or speakers and distinguish them from their own." Telling first person from third person is a prerequisite for that, not the expectation itself.
  - C06 and C11 justify the narrator-identity work by tying it to perspective (two narrators; a speaker who is not named). C03 and C13 do not.
- **Fix:** keep C03, and turn C13 into a perspective task. For example, give four short parts and ask which of them show how the teller feels about what happens and which only report it. Or match each part to the view it shows.

**S-4. SK-TT4a-C10 repeats C03's frame and C03's key fact.**
- **Evidence:** C03 asks "Which TWO sentences about how 'Flip!' is built are true?", and its keys are three stanzas and a two-line last stanza. C10 asks "Which TWO sentences about how the poems are built are true?", and its keys are again three stanzas and "only Flip! has a two-line stanza". S01 is a third copy of the frame, which is fine for a similar item. C10 passes the two-of-four rule on text and verb, but it shares a stem frame and key logic with C03 (§6 rule 1).
- **Fix:** have C10 compare a different technique. Both poems rhyme in pairs, and only "Flip!" opens two stanzas with the same sound words. A stanza-count distractor can stay.

**S-5. Item order inside 3.T.C.2.a set 2 primes C08.** C07, the item just before, has the row "Haircuts buzz and tickle, so they are no fun", and C08's key is "scary and unpleasant". This is mild, but together with S-2 and S-1, C08 ends up the weakest item in the set. Fixing S-1 and S-2 on C08 is enough.

**S-6. DOK labels.**
- TS-PS P5 is labelled DOK 3, but its answer ("the ants followed the smell of the food") is stated almost word for word in p1:4:2. That is DOK 1 or 2.
- TC2a-C04 is labelled DOK 3. It is really a DOK 2 sort.
- TT4a-C03 (count stanzas and lines) is close to DOK 1, as the author flagged.
- Each lesson still meets the DOK 3 minimum without these, so relabel P5 and C04 as DOK 2. C03 can stay DOK 2 if the "ten stanzas" line-versus-stanza misconception is the point; otherwise relabel it DOK 1, which is still within the "at most two" limit.

**S-7. SK-TSPS-C12 (order, five steps) has `points: 1`.** Every other five-step order item in core and test is worth 2 (for example SK-TT1b-P4, SK-SS1b-T4 and SK-RA1b-P3). Use 2, or note the reason.

**S-8. Teaching gaps in TS-PS (§6 rule 9).** The new Watch Me 3 covers C10, C12 and C14 well. Two item types still appear first in an item:
- **C06**, why the author includes a time detail (urgency);
- **C13**, comparing two problem-and-solution texts.

Add one teach point sentence: "Details about when something must be done can make a problem matter more." Add a short compare step to Watch Me 3 or to the tip: "To compare two texts, check the same part in each: the tries, who finds the real problem."

3.T.T.4.a C06 (what a changed line would do to the pattern) is also not modelled. One sentence in teach point 3 would cover it: "If you change an end word, check whether its partner still rhymes."

### NOTE

- **N-1. Poem "Flip!", stanza 3.** "sit" and "He likes **it**!" do rhyme, but the stress falls on "likes". Read aloud, a child will hear "LIKES it", so the rhyme is weak. C01's `how` cites "(sit, it)". Consider "We laugh so hard we have to sit. / The dog gets breakfast: every bit!".
- **N-2. Poem "Beach Morning", stanza 2.** "The gulls are like a recess yard" compares birds to a place, and C08's stem says "compares the gulls to children at recess". Consider "The gulls are kids in a recess yard" or "The gulls are like a recess crowd". Every other rhyme in the new poems is clean, and a child would hear it:
  - Bath Day: before/door, air/everywhere, shake/mistake, sweet/treat.
  - Double Dutch: round/ground, toe/go, high/sky, stop/hop, still/thrill, play/Hooray.
  - Spin, Spider, Spin: grow/low, thin/spin, gate/late, in/spin, dew/view, gate/wait.
  - Game Night: gray/play, bright/light, away/today.
  - Stems: Lou/blue, three/me, take/awake, hoop/loop, deep/sleep, face/chase, street/beat/feet.
  - C13 options: still/sill and turn/learn; might/white and cheer/year; wide/inside; sweet/eat and rows/nose. A child hears rows/nose as a rhyme, so the bakery stanza is ABBA as the key says.
- **N-3. TT4a-C01 `why`** says "In every stanza, lines 1 and 2 rhyme and lines 3 and 4 rhyme", but stanza 3 has only two lines. Change it to "In stanzas 1 and 2 … and stanza 3's two lines rhyme."
- **N-4. TT4a-C10 `why` and `how`** nest double quotation marks: "Only "Flip!" has…". Use single quotation marks inside, as C07 does.
- **N-5. TC2a-C12 (cr)** has four criteria. 04 §4.6 says two or three. The four are good, and the fourth ("made clear which view is the speaker's and which is mine") is the heart of the standard, so I would keep it and note the exception. The sample is a fair grade 3 answer, and the sentence frame in hint 3 is appropriate.
- **N-6. Together addons with the M-4 pattern:** SK-TC2a-P3 hint 2 ("What does Dev do for the older woman?"), SK-SS2a-P3 hint 2 ("what Ms. Ellis sees just before she speaks") and SK-TT4a-P5 hint 2 ("What time is it in stanza 1, and … stanza 3?"). Each pins Part B. Together is guided practice, so this is lower stakes, but the same fix applies.
- **N-7. TS-PS C11.** "The sticker was stuck on the inside of the glass" is a real-world reason decals fail: FLAP says that when there is a strong reflection on the outside, anything on the inside cannot be seen ([flap.org/faq](https://flap.org/faq)). The item is safe only because the stem says "reasons **the article gives**", and hint 3 relies on that. Keep that wording.
- **N-8. TS-PS C13**, "The problem happens at a school" → only "Dots on the Glass". The answer rests on "The Tangled Ropes" never naming a school. A child might picture a school team. Add a place to p4, for example "practiced in Grandma Bell's driveway", or reword the row to "The problem happens in a school library".
- **N-9. Similar-item coverage and `like` mappings.** Nine, seven, seven and nine core items have no similar item (warnings only, by design). Most mappings are honest. These are loose:
  - TS-PS S03 → C15: choosing a plan is not the same task as writing the sentence that explains a failed try;
  - TC2a S02 → C06: a tree speaker is not a two-narrator story;
  - TC2a S03 → C01: two people's views are not one character's own feeling.
- **N-10. TT4a-C12.** "wait" also rhymes with "gate" (stanza 3, line 2), so rhyme is partly why the poet chose the word. The distractor names "dew", which is safely wrong, and the `why` says so. No change needed. I record it so no one "fixes" the distractor to "gate".
- **N-11. 3.T.C.2.a p3** reads at FK 1.6. The content (an unreliable view of a crossing guard) suits grade 3. The other new passages range from FK 2.2 to 3.7.
- **N-12. Shared frames with form A (no shared key facts).**
  - TT4a-C02 ("Why does the poet begin stanzas 1 and 2 with 'Sizzle, sizzle'?") has the same frame as form A ("Why does the poet repeat the words 'Higher, higher' at the start of stanzas 2 and 3?").
  - TT4a-C14 has the same frame as form A's "Match each sentence to the stanza it describes".
  - TS-PS C09 practises the skill of form A T4 Part B on a different passage and in a different format.
  - TS-PS C05 and C08 practise form A T5's "real cause".

  I judge all of these to be practice, not rehearsal.
- **N-13. 3.T.C.2.a "their own" perspective.** This half of the official wording is explicit only in C12 (cr). C04, C14 and S01 use "what a reader might think" as a proxy. That is acceptable, but a second explicit own-view item, even a one-line `cr` in a later revision, would cover the component twice (§6 rule 2).
- **N-14. TS-PS C05, hint 2** ("Read on to find out what Niko learns about the table itself") nearly names the key sentence. After hint 3, three targets still stand, so it passes. "Read on to find out what Niko does next" would be safer.

## 4. Instructional quality, lesson by lesson

### TS-PS "Problem and solution: the tries and what works"
- **Learn It and Watch Me.** Both are clear and at grade 3 level. The added "But can also show a difference" point is needed and correct. Watch Me 3 (food bank) is good modelling: real problem from a failed try, a helper, testing a plan, and the order of parts. See S-8 for C06 and C13.
- **Sets.** The ramp is sensible:
  - Set 1 is near transfer on p1, then p3.
  - Set 2 is a new sports story, where the cause item (C08) comes after the map (C07).
  - Set 3 is an informational text, a two-text comparison, a fresh community stem and a writing-job item.
  - DOK 3 rises from 2 to 1 to 3 items (with S-6 applied).
- **Passages.** They are original, warm and believable: ants and a moat, a wobbly table, Double Dutch at the town fair, bird-safe windows, raccoons. The bird-window facts are accurate: a single hawk silhouette does not work, reflections make glass look like open air, and markers go about 2 inches apart ([flap.org/faq](https://flap.org/faq)).
- **Ladders.** Read in order, most are good, with eliminations that give a reason (C03, C06, C08, C14, S03). M-1 and M-2 are the exceptions.
- **`how`.** It is accurate throughout. HOW steps model "what did the try change?", which is exactly the coach's mix-up.

### 3.T.C.2.a "Point of view: the narrator's view and yours"
- **Learn It and Watch Me.** These are the strongest teaching in the batch. The new point 5 (clues to the I; two-part stories) and Watch Me 3 (breakfast told by the child and then by Mom) model C06, C10 and the own view directly. The "wings or a beak" example avoids giving away C11. That is careful.
- **Items.** The best items test the hard distinction:
  - C05 ("still a grump", where the narrator does *not* change);
  - C10 (why the author switches narrator);
  - C14 (the narrator who blames everyone else);
  - S01 (the "boring" chess club).

  These are well judged for grade 3. "The Big Red Chair", a barbershop story in two voices, and "Bath Day" are lovely texts.
- **Ladders.** Mostly sound. M-3, M-4 (C05) and S-1 (C08, C14, C15, S02) are the exceptions.
- **`cr` C12.** It is well built. The prompt names the three moves, the criteria are "Did I…" checks, and the sample is realistic.

### 3.T.SS.2.a "Similes, metaphors and idioms"
- **Learn It and Watch Me.** Clear, with one example of each figure and an idiom drawn from context. See M-6 for the definition problem.
- **Items.** They cover the official wording well: identify (C04, C09, C10, C11, C14) and describe meaning and purpose (the rest). They are spread across a story, a poem, a Georgia nature article and a class piece. C09 ("I like to build a castle here") and C14 (fact or metaphor; "is" alone is not enough) are good grade 3 traps that guard against over-applying a rule.
- **Facts.** The anole facts are accurate:
  - toe pads and climbing ([Alabama Wildlife Federation](https://www.alabamawildlife.org/wonders-of-wildlife-green-anole));
  - green to brown when cold or stressed (same source), within a few minutes ([Walter Magazine](https://waltermagazine.com/home/its-easy-being-green-if-youre-an-anole/));
  - a pink dewlap and head-bobbing territory display in males (Alabama Wildlife Federation; [UT Austin Biodiversity](https://biodiversity.utexas.edu/news/entry/backyard-biodiversity-green-anoles));
  - common in Georgia yards ([GPB](https://gpb.org/news/2023/05/16/see-green-anole-in-your-yard-why-these-redneck-lizards-thrive-in-the-georgia-summer)).

  "Knock it out of the park" means doing an excellent job ([Duolingo](https://blog.duolingo.com/baseball-phrases/)), so C05's key is right.
- **Variety.** The idiom-meaning frame repeats: Together P3, C07 and C12 are all "what does the idiom mean, plus a context sentence" in EBSR form. They pass the two-of-four rule on text and domain. A later revision could make C12 a "why does the author use this idiom in an article" item.

### 3.T.T.4.a "How poems are built"
- **Learn It and Watch Me.** Good. Watch Me 1 teaches that rhyme is about sound, not spelling ("gate"/"eight"). Watch Me 3 models a changed refrain and an ABCB pattern. Teach point 5 covers stanza jobs and comparing poems.
- **Items.** They span the expectation: rhyme scheme (C01, C05, C06, C13), stanza structure and jobs (C03, C09, C14), repetition and refrain change (C02, C07, C11, C12, C15), and comparison (C10). C06, which asks what a changed end word would do to the pattern, and C13, which asks the child to find a matching ABAB pattern, are genuine DOK 3 work on rhyme scheme, the named component.
- **Poems.** They are original, rhythmical and fun to read aloud, especially "Double Dutch at Recess" and "Spin, Spider, Spin". See N-1 and N-2 for the two weak spots.
- **Ladders.** M-7, M-8 and M-9 are the problems. The rest are sound.

## 5. Ladder audit summary (every core and similar item)

The table lists items that **fail**. Every item not listed passed both checks: a reader of hints 1 and 2 cannot write the key, and hint 3 does not leave the key alone.

| Item | Fails which check | Finding |
|---|---|---|
| TSPS-C09 | Hint 2 leaves only the keys | M-1 |
| TC2a-C04 | Hints 1 and 2 give both keys; hint 3 leaves the key pair | M-3 |
| TC2a-C05 (Part B) | Hint 2 leaves only the key | M-4 |
| SS2a-C02, C07, C12 (Part B) | Hint 2 leaves only the key | M-4 |
| SS2a-C05 (slot 1) | Hint 3 leaves only the key | M-5 |
| TT4a-C04 | Hints 2 and 3 leave only the key | M-7 |
| TT4a-C07 | Hints 2 and 3 leave only the keys | M-8 |
| TT4a-C08 | Hint 2 gives Part B and states Part A | M-4 |
| TC2a-C08, C14, C15, S02; SS2a-C06, C08, C13; TT4a-C09, C12 | Hints 1 and 2 let a reader write the key (no narrowing, but the inference is done) | S-1 |

**In-set giveaways:** TSPS-P4 → P6 (M-2) and TT4a-C08 → C09 (M-9). C07 → C08 in 3.T.C.2.a is mild (S-5). I found no giveaway into form A or form B.

## 6. Files

**Written to the repository:** `/home/claude/pp-content/docs/expansion-2026-10-22/batches/B1-review-2B.md` (this file).

**Evidence in** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/r2B/`:

| File | Contents |
|---|---|
| `load.js` | lesson loader |
| `blind.js` | keyless, shuffled dump script |
| `blind-dump.txt` | the dump I solved from |
| `blind-answers.json` | my saved answers |
| `cmp.js` | comparison against the keys |
| `full.js` and `full-*.txt` | the full lesson read with hints and `how`, used after the solve |
| `ngram.js` | leakage scan |
| `pw.py` | browser registration check on port 8744 |
