# B3 independent review (b3a): 3.T.C.1.a and 3.T.C.2.c

**Reviewer:** independent content reviewer. I did not author these lessons.
**Scope:** the `3.T.C.1.a` and `3.T.C.2.c` blocks of `js/data/lessons/T-C.js` only. Both lessons have 15 core items, 15 similar items, Together items with addons, Learn It and Watch Me. I did not run git. I wrote only this file and scratch files under `scratchpad/b3rev-a/`.

## Verdicts

| Lesson | Verdict | Blocking findings |
|---|---|---|
| 3.T.C.1.a Author's purpose and audience | **CHANGES REQUIRED** | MUST-1 (C06 ladder), MUST-2 (C07 Part B), MUST-3 (S10 topic reuse) |
| 3.T.C.2.c When, where and why a text was written | **CHANGES REQUIRED** | MUST-4 (P8 ladder), MUST-5 (S08 key-fact reuse), MUST-6 (C11 topic reuse) |

Everything else is SHOULD or NOTE. Keys, scoring, the engine and the browser behaviour are sound: all 63 keyed items agreed with my blind solve, and 30 of 30 core items worked at 320x568. The six MUSTs are narrow and fixable in one pass.

---

## 1. Blind solve and agreement

**Method.** `scratchpad/b3rev-a/blind.js` loads the lessons in Node and prints every core item (with `{ref}` resolved), every similar item and every Together item. Choices, dropdown options, match rows and ms/hottext options are shuffled with a seeded generator. It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample`, `criteria` and `like`, including the nested fields. Passages, text-box stems, the poem stems and all figure text were printed. The shuffle map went to a separate file (`blindmap.json`) that I did not open until scoring. My answers are in `answers.json` (sha256 and timestamp in `answers.sha256`, 09:58 UTC), saved before I opened the author log. `cmp.js` compared them with the keys. Output is in `cmp.txt`.

**Result: 63 of 63 keyed items agree (100%).**

| Lesson | Core (keyed) | Similar (keyed) | Together | Total |
|---|---|---|---|---|
| 3.T.C.1.a | 14 of 14 | 14 of 14 | 3 of 3 | 31 of 31 |
| 3.T.C.2.c | 14 of 14 | 14 of 14 | 4 of 4 | 32 of 32 |

The four written-answer (`cr`) items (1.a C14, S11; 2.c C10, S11) are never scored. I judged their sample answers and criteria instead (see F-14).

**How blind it was, honestly.**
- I did not open the lesson source, the author log or any earlier review before saving my answers.
- Before the blind solve I printed a schema probe: field names and types only, plus the core layout (for example `5:ref/ref/mc/ms/dropdown`). So I knew which core slots are `{ref}` legacy items and the question types. That tells nothing about keys.
- I knew from the brief that P-ids are reused legacy items.
- One answer was not clean. For 1.a C07 Part B I chose "Have you ever played in your yard..." but noted that "If you find a roly-poly, hold it gently..." is also defensible. I matched the key, but a child could defend the other answer (MUST-2).
- A 100% agreement rate on mostly one-correct-choice items is a floor for answerability, not proof. The ladder and reuse problems below are what the agreement rate cannot show.

---

## 2. Hint ladders: which choices are live

I used the strict test from the brief. A choice is live after hint N only if a child who has read the clue and hints 1 to N would still have a real reason to pick it. A choice the hints' logic rules out is not live, and neither is a choice the text box flatly contradicts. For Together items I checked the clue only. "Pts" is the number of choices or blanks I judge live.

### 3.T.C.1.a core

| # | Item | After h1 / h2 / h3 | Verdict |
|---|---|---|---|
| 1 | P4 ebsr | A 4/4/3; B 4/4/4 (h2 = paragraphs 2 to 5 holds all four Part B choices) | OK |
| 2 | P5 match | h3 settles the bat row only; 3 rows x 3 columns open | OK |
| 3 | C03 mc | 4 / 2 / 2: h2 says "what her class promised to do", which is the key's content (watering). Left: key, "use the grass" | SHOULD (F-8) |
| 4 | C04 ms | 5 / 5 / 4 (hours out); pick 2 of 4 | OK |
| 5 | C05 dropdown | slot 1: 4/4/3; slot 2: 4/4/4 | OK |
| 6 | C06 mc | **2 / 2 / 1**: h1 says "one paragraph may tell you to do something". That kills "hunt" and "keep as a pet" before h3 removes "story". Only the key is left | **MUST-1** |
| 7 | C07 ebsr | A 4/4/3; B 4/3/3 (h2 "where the author speaks to you" drops BA) | Part B has two defensible answers: **MUST-2** |
| 8 | C08 mc | 4 / 4 / 3 | OK |
| 9 | C09 match | h3 settles the only "both" row, so the rest is article or poem only (two live columns per row). Passes the rule, but weak | NOTE (F-15) |
| 10 | C10 hottext | 5 / 5 / 4 | OK |
| 11 | C11 dropdown | each slot 4/4/3, no blank settled | OK |
| 12 | C12 ebsr | A 4/4/3; B 4/4/4 (h2 = all four paragraphs, one Part B choice each) | OK |
| 13 | C13 mc | 3 / 2 / 2: h1 "what job should the line still do" kills the germ fact and "clean hands persuade". Left: key and the hard-words version | NOTE |
| 14 | C14 cr | n/a. h2 hands over both answers ("a line that is funny", "whose team it is") | NOTE |
| 15 | C15 mc | 4 / 4 / 3 | OK |

### 3.T.C.2.c core

| # | Item | After h1 / h2 / h3 | Verdict |
|---|---|---|---|
| 1 | P4 ebsr | A 3 / 3 / 2; B 4/3/3. h1 almost restates the question ("what Hattie has that Ella wishes for") | NOTE |
| 2 | C02 match | h3 settles the horse-trainer row only | OK |
| 3 | P8 mc | **2 / 2 / 1**: h1 sends the child to the box (bus driver, 15 years). "Student rider" and "school nurse" are contradicted by it. h3 removes "read it in the newsletter". Only the key is left | **MUST-4** |
| 4 | C04 mc | 4 / 4 / 3 | OK |
| 5 | P9 mc | the box is the only source of the reason; wrong choices have no rival source | NOTE (inherent to the skill) |
| 6 | C06 ms | 5 / 5 / 4 | OK |
| 7 | C07 mc | 4 / 4 / 3 | OK as a ladder, but see F-9 |
| 8 | C08 dropdown | slot 1: 4/4/3; slot 2: 4/4/4 | OK, easy (F-12) |
| 9 | C09 ms | 5 / 5 / 4 | OK |
| 10 | C10 cr | n/a | OK |
| 11 | C11 mc | 4 / 4 / 3 | OK |
| 12 | C12 ebsr | A 4/4/3 ("school year ends" stays live); B 4/4/4 (box and note hold two Part B choices each) | OK, but see F-10 |
| 13 | C13 hottext | 5 / 5 / 4 | OK, easy |
| 14 | C14 dropdown | slot 1: 4/4/4; slot 2: 4/4/3 | OK |
| 15 | C15 mc | 4 / 4 / 3 | OK |

Whole-ladder checks also hit the similar bank: 1.a S02 and S13 repeat the C06 pattern (SHOULD-1). Together clues are noted in F-11. I read the cross-item rules (an earlier `why` or `how` must not give a later key). I found no earlier item that states a later key in either lesson. The one reverse-direction overlap is C12's Part A prompt, which says "The sign asks drivers to stop". It comes after C11 in the same set, so it cannot leak forward (NOTE).

---

## 3. Findings

### MUST

**MUST-1. 1.a C06 (and, as SHOULD-1, S02 and S13): the ladder collapses to the key.**
- *Evidence.* C06's clue and h1 say: "One paragraph may tell you to do something, but check what most of the paragraphs do." That pre-eliminates "get readers to go outside and hunt" and "show readers how to keep a roly-poly as a pet", which are the two do-something choices. h3 then removes the story choice. Only the key is left. The brief's whole-ladder rule says this is a failure, and "moving a giveaway between hints is not a fix".
- *Fix.* Make h1 neutral: "Ask what the whole article mostly does: teach facts, ask the reader to act, or tell a story?" Keep the "one paragraph" warning in `how` and `misconception` only. Keep h3 removing the story choice. Then three choices stay live.

**MUST-2. 1.a C07 Part B: two defensible answers.**
- *Evidence.* Part A is "children who like to explore outside". Both "Have you ever played in your yard and found a tiny gray bug...?" and "If you find a roly-poly, hold it gently in your open hand." speak to a child doing something outdoors. "That is why you find roly-polies in dark, wet places, like under logs..." also speaks to that child. My blind solve flagged the second. The author log lists it as a close call. The `how` admits the other sentences "also say you".
- *Fix.* Make exactly one Part B sentence address a child, and make the other three plain facts about the roly-poly (for example the legs, the damp places stated as fact, and the diet). Then h2 must stop saying "where the author speaks to you". Use: "Reread the whole article and ask which sentence is about the reader, not the roly-poly." Check that every place h2 names holds at least two Part B choices.

**MUST-3. 1.a S10: topic reuse (reading buddies).**
- *Evidence.* S10 is about third graders reading picture books to their "kindergarten buddies". The topic is already used in `js/data/lessons/T-T34.js` (a Watch Me about "reading buddy day... help younger kids", lines 49 to 54) and `js/data/tasks/W-TASK-01.js` (the whole task: "Should our school start a reading buddy program?"). The author log (section 9) says the term "kindergarten buddies" has "no hits elsewhere". A search for "buddy|buddies" finds 13.
- *Fix.* Pick another two-audience pair: a sign for one group and a note for another group on a different topic. Grep the new topic across `js/data` first, and keep the audience answers (the first sign for the young group, the second text for families).

**MUST-4. 2.c P8: two distractors are not live; the ladder leaves only the key.**
- *Evidence.* The legacy item keeps "She is a student who rides the bus" and "She is a school nurse". The box says she has driven a school bus for 15 years, so a child who follows h1 cannot choose either. h3 removes the newsletter choice. One choice is left, which breaks the rule of at least two live choices after hint 3. The author log counts the item as "4/4/3" and calls the two choices "weak" only in section 7. Under its own definition of live, they are not live.
- *Fix.* Rewrite the distractors as rivals that fit the box but are wrong. Examples: "She learned it from a bus-safety video at school" and "A rider she once drove told her about falling". Keep the item as a `{ref}` with an edited choice list, or give it a new id and update the refs. Re-check h3 so it removes only one choice.

**MUST-5. 2.c S08: key-fact reuse (water mill grinding corn).**
- *Evidence.* S08 says a river turned a big stone wheel and the corn came out as fine yellow meal. `js/data/lessons/T-RA.js` (SK-RA1a-S09, lines 673 to 697) already uses a grist mill whose "water wheel turned a huge stone that ground corn into meal", including the word "meal".
- *Fix.* Keep the item's skill (historical fiction, box, then "by whom, about what") with a different 1890s trade. A blacksmith's shop had no hits in `js/data`. Re-grep before use.

**MUST-6. 2.c C11 (core, with its passage p6): topic reuse (a child amazed by stars at a relative's cabin).**
- *Evidence.* `T-T1.js` p7 "The Night Walk" has Selah at Grandma Rose's cabin, seeing "more stars than she had ever seen". It is used by SK-TT1a-S12 and S13, and S12's Part B quotes that sentence. Elijah visits his uncle's cabin and sees "so many stars... The sky at home never looks like this." The author searched "cabin" and "stars" only as single words and judged them harmless. The scene and topic are the same, even though the key fact differs (city lights, not a flashlight).
- *Fix.* Keep the individual-context idea (background explains a reaction) but change the scene, for example a girl raised on a dairy farm who wakes at five without an alarm while her cousin in town sleeps until eight. This is a core item with a passage, so a rewrite touches C11, its hints and the how. Grep the new topic first.

### SHOULD

**SHOULD-1. 1.a S02 and S13: the C06 pattern.** Same hint-1 wording ("One line may ask you to do something...") plus h3 removing the story choice leaves the key and one unsupported distractor. Apply the same fix as MUST-1.

**F-8. 1.a C03: hint 2 names the key's content.** "Find what Rosa asked the principal for, and what her class promised to do." The class promised to water the plants every morning, which is the key. *Fix:* "Reread the letter. Find what Rosa asks for, and who she asks."

**F-9. 2.c C07 is a literal match.** The key repeats the previous sentence of the passage ("Last Monday it rained, so wet clothes hung all over our kitchen for three days"). The context is inside the story, not the context in which the text was written, so it practises 3.T.C.2.c weakly. S05 (waxed hall, box gives the cause) is the better model. *Fix:* re-aim C07 so the box supplies the cause, or accept it as a DOK 2 recall item and say so in the log.

**F-10. 2.c C12: the end-of-May premise fights real Georgia calendars, and the arithmetic is loose.**
- The note was "written in April", the eggs take "about four weeks", and the `how` says "About four weeks later is near the end of May". That only works for a late-April note.
- Georgia schools end in late May (a statewide planning date of May 27 appears on us-school-calendar.com, and district dates vary). "By then, the school year will have ended" is a real rival to the key for a Georgia child, and the `how` claims the class "will be back on the field before the school year ends".
- *Fix:* box "wrote this note to families in early April"; note "We should be back on the field by the first week of May." That makes four weeks true and removes the school-year rival. Update the `how`.

**F-11. Together clues that narrow to the key (clue-only check).**
- 1.a P2 (clue "Look at the very top"; no wrong choice comes from the top).
- 2.c P2 ("What did most farms not have in 1928?"), P6 ("who is the writer, what is her job"), P7 (points to the first paragraph, though "hurt her eyes" is in it).
- These are legacy clues the inventory did not flag, and the new addon hints are fine. *Fix:* reword the clues to strategy only.

**F-12. 2.c C13 `how` is inaccurate: "Home computers did not exist until about fifty years later".** The Apple II went on sale in 1977, which is about forty years after 1935. *Fix:* "until the 1970s".

**F-13. 2.c teach has six points (limit five).** The baseline T-C.js already has six, so this is not new, but the brief sets the limit and the author left it. *Fix:* merge points 1 and 6 ("Look for clues about context... Then ask: how does knowing this help me understand the text?"). Learn It has three Watch Me examples, at the limit.

**F-16. Modelling gaps (at the cap).** 1.a: the author's-reason-for-a-comparison task (C08, S08) is not modelled. 2.c: the "could the writer have written this in that year" task (C13, S14) is not modelled. Both lessons are at their Watch Me and teach limits, so any addition means swapping something. Suggest swapping 2.c Watch Me 1 (the July 4, 1976 date) for a historical-fiction anachronism example.

**F-17. Facts that need a softer word.**
- 1.a S09: "Most are no bigger than a grain of sand". Cool Cosmos says "Some are no larger than a grain of sand". Use "Many".
- 2.c S02: "most homes in small towns had no telephone". I could not confirm this figure this session, and a Purdue study cited by Indiana Public Media found about two-thirds of Indiana farmhouses had phone service in 1920. Use "many homes", which does not change the key.
- 2.c S07: a "wood stove" in a Georgia city in 1922 is doubtful, because city homes mostly had gas or coal ranges. Use "a small town in Georgia".

**F-18. Author log accuracy.**
- Section 5 counts P8's two weak distractors as live (4/4/3), contrary to its own definition.
- The code comment and the log say "With adult support" stays in "the habit cards". `js/data/habits.js` has no card for 3.T.C.2.c (habit cards cover K-12.P codes; the nearest, K-12.P.ST.1.c, is a different standard).
- Section 9's "no hits" list includes "kindergarten buddies" (MUST-3).
- The log says no weak items were flagged in 03-practice-inventory.csv for these lessons; I did not check that and note it as unconfirmed.

### NOTE

- **F-14. cr items are sound.** 1.a C14 and S11, and 2.c C10 and S11, have samples that meet every criterion in two to three sentences. Criteria are scorable. 2.c C10's three criteria and the telegram item's sample ("left out the little words to save money") are accurate. Hint 3 on all four is a sentence frame. Not scored: confirmed (score 0 of 0, "One good answer follows" shown).
- **F-15. 1.a C09 and S09.** h3 settles the only "both" row, so the rest reduces to article or poem. Legal under the rules; consider settling an article row instead.
- 1.a C15: the stem states Ms. Lowe's purpose, so the item is quick. Flyer A does say "scientists ask people to count the birds they see". The `how` says Flyer A never asks anyone to come, which is true.
- 1.a C13/C03/S03/S15 all ask "rewrite for a new audience"; they differ in text and context, which is enough.
- 2.c C08 and C13 are near DOK 1 for a child who knows the teach points (the box states the answer; "computer" in 1935 is an obvious anachronism). Accepted; consider a tougher distractor in C13 (not "television", which is the check passage's topic).
- 2.c P9, P2: for situational items the box is the only source, so "read the box" in h1/h2 is inherent to the skill.
- 2.c C09 "how hot the fire is" is an inference (Mama tends the fire), not a quoted detail. Defensible, since the other keyed detail is quoted.
- 1.a teach point 3 quotes "Bring a water bottle" and "Please come early", which is the form A page (p2). It was already there in the baseline; mild pre-existing proximity to form A, not new.
- The `like` mappings are honest. For all 30 core items the browser confirms that the offered similar item lists that core item in `like` (section 5).
- Official wording. 1.a covers purpose (inform, persuade, entertain) and target audience, plus evidence. 2.c covers all three contexts in the standard's list.

### "With adult support" (2.c)
Handled honestly enough. The standards page and the skill page show Georgia's wording verbatim, "With adult support...", with the page number (`js/skills.js` lines 798 to 801; `js/parents.js` lines 157 to 159). The lesson has a parent note (family photos, letters, signs). Items test independent work, which is conservative, not an overclaim. The only error is the "habit cards" claim in F-18.

---

## 4. Judgement on the author log's open items

| Open item | My call |
|---|---|
| 1.a C07 | MUST-2. The close call is real; rework Part B. |
| 2.c C08 | Accept. NOTE: near DOK 1; the teach point states it. |
| 2.c C11 | Facts sound (city lights do hide stars; the journal itself says "the sky at home never looks like this"). MUST-6 on topic reuse only. |
| 2.c C13 | Accept the item, fix the "fifty years" wording (F-12); it is easy by design. |
| 2.c P8 reused | MUST-4. The "legacy but reusable" argument does not cover distractors the box contradicts. |
| 2.c six teach points | SHOULD (F-13); one merge fixes it. |
| Similar items (24 new) | Facts hold except the softenings in F-17. Ladders are fine except S02 and S13 (SHOULD-1). Topic reuse: S10 (1.a) and S08 (2.c) are MUSTs. All 30 items' `like` lists were honest in the browser run. |

---

## 5. Facts: what I verified, with URLs

Verified by fetching or searching (WebFetch/WebSearch only):
- **Roly-polies / pill bugs.** Crustaceans, seven pairs of legs, need humidity, roll into a ball, eat decaying plants. https://ask.ifas.ufl.edu/publication/IN1099/pdf. The crab and shrimp comparison rests on the class they belong to (Malacostraca, the group that includes crabs and shrimp, as named in that source); that page does not mention crabs itself.
- **Killdeer nests.** Bare soil, short-grass field, gravel, pebble lining; eggs 24 to 28 days; chicks leave the nest soon after hatching. https://audubon.org/field-guide/bird/killdeer. Killdeer delaying ball games: https://audubon.org/news/nesting-killdeer-called-delay-games (title only).
- **City lights hide stars.** Light pollution hides the Milky Way from about a third of humanity, worst around cities: https://www.earthmagazine.org/article/milky-way-invisible-third-humanity/; skyglow reaches far from cities: https://www.pbs.org/newshour/science/where-did-all-the-stars-go.
- **Washday in 1908.** Monday was wash day; washboard, boiled clothes, soap that made hands sore and red: https://www.lhf.org/2013/08/blue-monday-wash-day/. A wash pot over an outdoor fire on Monday on a Georgia-area farm: https://thecitizen.com/?p=230829. Note the Living History Farms (Iowa) page boils clothes on the stove, not outdoors; the outdoor pot is the Southern practice. "Tuesday is ironing day" is the traditional wash-Monday, iron-Tuesday pattern; my fetched sources did not state the day, so treat as common knowledge, not confirmed here.
- **Computers in 1935.** Home computers arrived with machines such as the Apple II (1977): https://homecomputermuseum.nl/en/collectie/apple/apple-ii (search result only). Gives "about forty years later", not fifty (F-12).
- **Radios in 1935.** More than 40 percent of homes in 1930 and 83 percent in 1940: https://www.apmreports.org/episode/2014/11/10/radio-the-internet-of-the-1930s.
- **Savannah streetcars in 1935.** Last run in 1946: https://www.railga.com/oddend/streetrail/savannahstr.html.
- **Farm electricity (Ella, 1928).** Only about 10 percent of farm homes had electricity in the 1930s: https://www.ndstudies.gov/gr8/node/370.
- **Television in 1954.** Black and white, few stations: https://www.nebraskastudies.org/1950-1974/living-in-an-atomic-age/early-tv (test passage, not changed).
- **Icebox and iceman.** https://nps.gov/articles/000/the-icebox-the-predecessor-of-modern-refrigeration.htm (S07). Ice delivered by an iceman; GE refrigerator popular from 1927.
- **Geckos.** Most geckos lack eyelids and lick their eye covers; toe-pad hairs (setae) climb walls and ceilings: https://en.wikipedia.org/wiki/Gecko.
- **Ostriches.** Largest bird, flightless, sprint to 43 mph, egg about 24 chicken eggs: https://animals.sandiegozoo.org/node/118.
- **Flamingos.** Pink from carotenoids in algae and brine shrimp: https://sciencenotes.org/why-are-flamingos-pink-the-science-of-the-color-and-amazing-facts/. "Shrimp and plants" is fine for grade 3 (algae are not strictly plants).
- **Shooting stars.** "Some are no larger than a grain of sand": https://coolcosmos.ipac.caltech.edu/ask/261-How-big-are-the-pieces-in-meteor-showers-or-shooting-stars- (F-17).
- **Ants.** 10 to 50 times body weight: https://www.terminix.com/ants/learn-about/how-much-can-an-ant-lift/. A child lifting a car is roughly the same ratio.
- **Teeth.** First tooth around age 5 or 6; adults up to 32 permanent teeth; baby teeth make room: https://www.healthpartners.com/blog/when-do-kids-lose-their-first-tooth/. "Adults have 32 teeth" is the usual full set (some adults have fewer).
- **ABC song for hand washing.** 15 to 20 seconds: https://www.bswhealth.com/blog/the-abcs-of-proper-handwashing.
- **Telegrams paid by the word.** https://en.wikipedia.org/wiki/Telegram_style.
- **Planetarium in Atlanta.** Fernbank Science Center's planetarium: https://georgiaencyclopedia.org/articles/science-medicine/fernbank-science-center.
- **Georgia school calendar.** https://us-school-calendar.com/georgia (F-10).
- **Rural phones.** About two-thirds of Indiana farmhouses had phone service in 1920: https://www.ipm.org/show/momentofindianahistory/tin-cans-strung-cornfield (F-17). I could not find a national 1925 household figure this session.

Not independently verified this session (common knowledge, low risk): flamingos sleeping on one leg and feeding head down; pupils shrinking in bright light (search results only, not fetched); the Christmas Bird Count style of winter counts (1.a C15); fishing-derby and museum "do not touch" details; Fernbank is only an example, since the passage says only "the planetarium in Atlanta".

---

## 6. Other checks

- **Gates.** `node verification/check-content.js --all`: PASS, 0 failures; neither lesson has a warning, including no similar-coverage warning. `readability.py`: 1.a passages p3 (175 words, FK 3.2), p4 (126, 3.5); 2.c p5 (165, 3.9), p6 (160, 3.4); all in range. (2.c p3 reads FK 0.3 at 113 words; it is a legacy passage.)
- **Reuse search.** I grepped all of `js/data` (lessons, sets, tasks, habits), excluding the two blocks, for the topic terms of every passage and stem, not only n-grams. Hits needing a decision are MUST-3, -5, -6. Single-word hits (goat in a T-T1 story, museum in T-RA, fishing, umbrella, wax, moving day, washing machine in T-T1, riddle in GUM) share no topic or key fact. The habit card K-12.P.ST.1.c mentions "icebox" as a parent tip; no conflict with 2.c S07, but note it.
- **Form leaks.** No form B exists for T-C.js, so I checked form A (`test`) only. No core, similar or Together text mentions the test topics (soccer page, book fair, 1954 TV, Macon, hurricane, turtle nests, Goldie).
- **Together vs set 1.** 1.a P1 and P3 were reworded to stop calling the P4 key "a reason"; I found no remaining pre-answer. 2.c P2 and P7 do not state the P4 key. P6's key appears as a C04 distractor (a trap, not a pre-answer).
- **Learn It / Watch Me.** 1.a: five teach points, three Watch Me; the third (Poetry Night, one topic for two audiences) models C03, C11, C13, C15. 2.c: six points, three Watch Me (F-13, F-16).
- **Points and DOK.** Choose-two, two-blank dropdowns, ebsr and match items are all 2 points; hottext single pick is 1. DOK 3 count: 1.a six, 2.c three. No DOK 1 filler in core. I found no grade-3 suitability problem; "refrain" appears deliberately as a hard-word distractor.

## 7. Browser check (port 8822, 320x568, Playwright Chromium)

Scripts: `scratchpad/b3rev-a/inorder.py` (wrong answer, hints, Show Me How, similar, in order) and `correct.py` (correct answer on every core item). Logs: `inorder.out`, `correct.out`. I worked all 15 core items of each lesson in order, in one sitting each.

- **Order:** 30 of 30 items appear in the planned order (set 1, then "Go on to set 2", then set 3).
- **Check My Answer, wrong answer:** "Not quite" on 28 of 28 scored items. The two `cr` items have no wrong answer by design.
- **Check My Answer, correct answer:** 30 of 30 (28 scored items say "right"; the two `cr` items show the compare-with-sample text).
- **Three hints:** "Hint 1 of 3" to "Hint 3 of 3" on all 30.
- **Show Me How:** opens on all 30 (3 to 8 steps; the `cr` items 7 and 8).
- **Try a Similar Question:** the button shows on all 30. The item it opens lists the core item in `like` (30 of 30), every one is a different item (all 15 similar items used once in each lesson), and its correct answer checks "right" (cr: the sample shows).
- **Horizontal scroll:** none on any item. **Page errors:** none. **Console:** one error per lesson, the blocked Google Fonts request (the sandbox blocks it; the author's smoke log says the same).
- **Not covered:** the Together flow, restarting a set, a second sitting, and the viewport sizes other than 320x568. The author also left these untested.
- **Server stopped** after each run (checked: connection refused on port 8822).

## 8. Scratch files
`/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b3rev-a/`: `load.js`, `blind.js`, `blind.txt`, `blindmap.json`, `answers.json`, `answers.sha256`, `cmp.js`, `cmp.txt`, `order.json`, `inorder.py`, `inorder.out`, `correct.py`, `correct.out`, `serve.log`, `serve2.log`.
