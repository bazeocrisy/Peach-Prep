# PP-004 independent gap review: Agents A and B (3.T.C.1.b, 3.T.C.2.c, 3.T.RA.1.b, 3.L.GC.2.a)

**Reviewer role:** I reviewed independently and read only. The only file I wrote is this one. I ran no git commands. I used server port 8489 and stopped it by its PID.
**Date:** 2026-10-20.
**Scope:** I read the four lesson blocks in full: T-C.js lines 198-461 and 839-1086, T-RA.js lines 199-514, and L-GC2.js lines 2-223. I did not rely on the authors' logs (pp004-context.md, pp004-research.md). Every claim below was checked against the source, the rendered pages, or an external page.

## Method
- **Standards wording:** taken from `standards-3-5.txt`. I located the PDF page numbers by counting form feeds: GC.2.a is on p. 19, T.C.1.b on p. 26, T.C.2.c on p. 27 and T.RA.1.b on p. 37.
- **ALDs:** read from the DRAFT ALD file (`2ba6c680-GM_ALDs_Gr3_ELA.txt`, Oct 2025). The columns are Beginning, Developing, Proficient and Distinguished.
- **Built sets:** read from the live `PP.byId` in the browser.
  - **Together** is `:p` (the first ceil(n/2) items).
  - **Try** is `:y`.
  - **Check** is `:t`.
- **Rendering:** done with Playwright at 390x844 and 1366x900.
  - Pages covered: the Learn It page, Watch Me with all steps revealed, and every new item, both the question pane and the passage pane.
  - Script: `scratchpad/gapAB/shots.py`. Screenshots are in `scratchpad/gapAB/`.
  - Result: no page errors, and scrollWidth was never larger than the viewport.
  - Extra DOM check: **migrate** renders bold in both passage p2 and the T7 stem. The `write` card renders on 3.T.RA.1.b Try.
- **Gates:** `check-content --all` PASS (0 failures, 7 warnings, none of them from the new items). `check-writing` 0/0.
- **Standards data:** `standards.js` "official" strings for all four codes now match the PDF exactly. The wording discrepancy reported in pp004-research.md is therefore **already resolved** (stale). The `alds.js` entry for 3.T.C.2 matches the DRAFT ALD.

---

## 1. 3.T.C.1.b

**Official (p. 26):** "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."

**DRAFT ALD Proficient:** "Determine common text features of various text modes and describe how they contribute to the overall purpose and/or effect."

**Built sets:**
- Together: P1, P8, P9, P4
- Try: P5, P6, P10
- Check: T1, T2, T3, T8, T7, T6 (8 points)

| Component | Learn It | Watch Me | Together | Try | Check (no hints) |
|---|---|---|---|---|---|
| Print features (heading, bold, text box) | pts 1-3; example 1 | WM1 heading; WM2 bold | P1 heading; P4 bold | P6 match | T1 heading; T2 text box; T7 bold |
| Visual features (picture, caption, diagram, labels) | pts 4-5; Fig 1 | WM3 diagram | P8 caption | P5 diagram | T3 diagram; T6 caption |
| Digital features (tabs, search, play, pop-up, link) | pt 6; example 2 (Fig 2 with note) | **none** | **none** | P10 link | T8 pop-up and tabs |
| Auditory features (caption line, [sound], NAME:) | pt 7; Fig 2 | **none** | **none** | P10 [water rushing] | **none** |
| Spoken features (speaker cues) | pt 7 | **none** | P9 | **none** | **none** |
| Describe how features contribute to purpose and effect | each point | WM2 step 4 ("big idea") | P4 | P5 | T2, T3, T6, T7 (how the feature helps the reader). There is no item linking a feature to the text's overall purpose (inform). |

**Status: PARTIAL.**
- Auditory and spoken features are taught and practiced, but no check item covers them.
- Digital features are never modeled in Watch Me and never practiced with hints.
- The print and visual work is strong.

**Quality notes:**
- Figures render clearly at both widths. The menu tab is marked by a thick border and bold text, the link is underlined, and the numbered badges are legible at 390.
- The alt text is complete and does not give away the answers.
- T7 (migrate) is a good item: the child has to use the meaning of the section, not a remembered definition.
- T8 needs very little reasoning:
  - Slot 2 can be answered with no figure at all. "To find a page about bees" matches the only option that contains "Bees."
  - Slot 1 echoes the teach phrase "without leaving the page."

## 2. 3.T.C.2.c

**Official (p. 27):** "With adult support, identify the context in which a text is written (e.g., time period, individual, situational)."

**DRAFT ALD:** context appears **only at Distinguished** ("Identify the context in which a text is written ."). Proficient for 3.T.C.2 covers perspectives (2.a) only. The lesson must not claim a Proficient ALD for context, and it does not. The blueprint does assess 3.T.C.2 (a, c).

**Built sets:**
- Together: P1, P2, P7, P6
- Try: P4, P8, P9
- Check: T1, T2, T3, T4, T7, T6 (9 points)

| Component | Learn It | Watch Me | Together | Try | Check |
|---|---|---|---|---|---|
| Time period | pt 2; words | WM1 (1976) | P1, P2 | P4 (EBSR) | T1, T2, T3, T4 |
| Individual (who the writer is) | pt 3; word | WM3 (firefighter) | P6 (Dr. Ruiz) | P8 (bus driver) | T7 (EBSR, sea turtles) |
| Situational | pt 4; word; example (2014 storm) | WM2 (ranger sign) | P7 (Ella's birthday book) | P9 (field-day rain) | T6 (hurricane) |
| "With adult support" | parent line | n/a | hints on | hint after one try | n/a (independent, which goes beyond the standard) |

**Status: VERIFIED COMPLETE.** Every component is taught, modeled, practiced in both halves, and checked without hints.
- **Mastery check:** missing either the individual item or the situational item drops the score to 7/9 or 8/9.
  - Missing the 2-point individual item (T7) gives 7/9 = 78%, below the 80% mastery line.
  - Missing the 1-point situational item (T6) still gives 8/9 = 89%, so mastery is possible without it.

**Quality notes:**
- The "Note in a box:" text renders as **literal words** inside the stem callout, not as a separate box. This affects P6, P8, P9, T6, T7, WM2 and WM3. Meanwhile, teach tells the child to "look for ... a note in a box."
- P7's "situation" (a birthday gift prompting a thank-you) is really the occasion or purpose, which blurs situational context with author's purpose (3.T.C.1.a).

## 3. 3.T.RA.1.b

**Official (p. 37):** "Conduct research by locating, gathering, selecting, and organizing information from multiple credible sources, including print, digital, and personal communication, about a self-selected topic."

**DRAFT ALD Proficient:** "Conduct research by locating, gathering, selecting, and/or organizing information from multiple credible sources, including print, digital, and personal communication, about a topic."

**Built sets:**
- Together: P1, P2, P3, P6
- Try: P4, P5, P7 (+ `write`)
- Check: T1, T2, T3, T5, T6, T7 (9 points)

| Component | Learn It | Watch Me | Together | Try | Check |
|---|---|---|---|---|---|
| Locating | pts 1-2 | WM1 | P1 | P5 | T1 |
| Gathering from multiple sources | pt 2; frog example | WM1, WM2 | P1, P3 (both sources) | P5 | T1, T5 |
| Selecting (relevance to a question) | pts 3-4; words | WM3 (woodpecker web page) | P6 | P7 | T6, T7 |
| Organizing (headings, order, notes table) | pts 5-6; notes-table figure | WM1 (cards); WM2 (order); WM3 (note) | P2, P3 | P4, P7 | T2, T3. **Ordering** is not in the check. |
| Print source | pt 1 | WM1/2 (generic) | p1 | p1 | p3 |
| Digital source | pts 1, 4 | WM3 | P6 (p5) | P7 (p5) | T6, T7 (p6) |
| Personal communication | pt 1 | none | p2 (farm visit) | P4, P5 | T1, T5 (p4 talk) |
| **Credible** sources | **none** (pt 2 is corroboration, not credibility) | none | none | none | **none** |
| Self-selected topic | write prompt | n/a | n/a | `write` (unscored, with a grown-up) | not assessable by selected response. The ALD drops "self-selected." |

**Status: PARTIAL.**
- Locating, gathering, selecting, organizing, print, digital and personal communication are all taught and checked.
- "Credible" is neither taught nor assessed in this lesson. The author defers it to 3.T.RA.2.b without any link from this lesson.
- Both model digital sources are "Club" pages that carry ads, so they do not model a credible source.

**Quality notes:**
- The notes-table figure is legible at 390.
- The web-page headers render well.
- The `Ad:` and `More on this site:` boxes use the same green box style as content boxes. They are labelled "Ad:", which makes T6 rows 4 and 5 trivial. The distance row is the only real discriminator, and that is acceptable at grade 3.
- p5 and p6 are labelled "Source 3" even when they are the only passage on screen.

## 4. 3.L.GC.2.a

**Official (p. 19):** "Distinguish between correctly structured simple, compound, and complex sentences."

**DRAFT ALD Proficient:** the same wording.

**Built sets:**
- Together: P1, P2, P3, P7
- Try: P4, P9, P8
- Check: T1, T2, T3, T6, T7, T8 (8 points)

| Component | Learn It | Watch Me | Together | Try | Check |
|---|---|---|---|---|---|
| Simple | pt 4; example | WM2 s1 | P1 (complete = simple); P3 distractors | distractor only (P9 #4) | T3 (2 rows); T8 distractors |
| Compound | pt 4; example | WM2 s2 | P3 | distractor (P9 #3) | T1, T3 |
| Complex | pt 5; example | WM2 s3 | **not keyed** (distractor in P3) | P4, P9 | T2, T3, T8 |
| Correct structure vs fragment | pt 2 | WM1 | P2 | P8 | T6 |
| Correct structure vs run-on | pt 3 | WM3 | P2, P7 | P8 (comma-splice distractor) | T1, T7 |
| Inside a text (Interpreting Texts) | tip | WM2 (draft) | P7 | P9, P8 | T6, T7, T8 |

**Status: VERIFIED COMPLETE.** Every component is taught and checked without hints. The minor gap is that complex sentences are never the keyed answer in Together.

### Grammar verification (sentence by sentence, done independently)
**p1 "Our Class Garden":**

| # | Sentence | Type |
|---|---|---|
| 1 | "This spring, our class planted a garden behind the school." | simple |
| 2 | "First, we dug up the hard dirt with small shovels." | simple |
| 3 | "Mr. Hall brought a bag of rich soil, and we mixed it into the dirt." | compound |
| 4 | "Next, we planted rows of beans and carrots." | simple (compound object) |
| 5 | "Because the weather was dry." | **fragment** |
| 6 | "We watered the rows every morning." | simple |
| 7 | "The beans grew fast the carrots took much longer." | **run-on** (fused) |
| 8 | "When the beans were ready, we picked them for a class snack." | complex |
| 9 | "The carrots should be ready in a few more weeks." | simple |
| 10 | "We will cook them in a soup after we pull them up." | complex |
| 11 | "I can hardly wait!" | simple |

**p2 "The Old Lighthouse":**

| # | Sentence | Type |
|---|---|---|
| 1 | "Last summer, my family visited an old lighthouse on the Georgia coast." | simple |
| 2 | "The tall white tower stood ..." | simple |
| 3 | "We climbed the long, winding stairs to the top." | simple |
| 4 | "My legs ached, but I kept going." | compound |
| 5 | "When we reached the top." | **fragment** |
| 6 | "We could see boats ..." | simple |
| 7 | "A guide told us ..." | simple |
| 8 | "Each night, a keeper climbed the stairs he lit the big lamp." | **run-on** (fused) |
| 9 | "The bright light warned ships ..." | simple |
| 10 | "Today, the lamp turns on by itself." | simple |
| 11 | "Before we left, I bought a postcard ..." | complex |

**Result:** the reviewer key in the L-GC2.js comment is correct for all 22 sentences. Each draft has **exactly one fragment and one run-on**.
- There are no relative clauses and no comma splices other than the intended ones.
- The tense is consistent; p2 s10 is anchored by "Today,".

**Target references:** I resolved every target reference against the passages and checked each one:
- P7 offers sentences 3, 5, 6, 7 and 8; the key is 7.
- T6 offers 4, 5, 6, 7 and 11; the key is 5.
- T8 offers 1, 4, 5, 9 and 11; the key is 11.
- Each has exactly one defensible key.
- P8: the key is correct. The "Because ..., and we ..." distractor is a fragment, and the third choice is a comma splice. That matches the lesson's own definition of a run-on, which counts "only a comma" as a run-on (pt 3).
- T7: the key is correct, and all three distractors are wrong for the reasons the lesson teaches.

---

## Fact check (sources fetched 2026-10-20)

| Claim (location) | Verdict | Source |
|---|---|---|
| Moon gravity is about 1/6 of Earth's; 60 lb becomes about 10 lb (T-RA p6) | Correct | NASA ALSJ "Working on the Moon": "The Moon's surface gravity is 1/6th that of Earth" — https://nasa.gov/wp-content/uploads/static/history/alsj/WOTM/WOTM-EnviroIntro.html |
| Day lasts about 2 weeks and night about 2 weeks; ground hotter than boiling water by day (p6) | Correct | NASA LRO lithograph: "each lunar day lasts 14 Earth days"; daytime near equator "250 degrees Fahrenheit (120° C)"; night "-208 degrees Fahrenheit" — https://science.nasa.gov/wp-content/uploads/2024/01/lrolitho7temperaturevariation27may2014.pdf |
| At night, colder than any place on Earth (p6) | Correct: -208°F compared with Earth's lowest of -128.6°F (Vostok) and about -135°F to -137°F by satellite | https://www.npr.org/sections/thetwo-way/2013/12/10/249977440/using-satellite-scientists-pinpoint-coldest-place-on-earth |
| About 239,000 miles away (p6) | Correct (238,855 mi) | https://coolcosmos.ipac.caltech.edu/ask/166-How-far-away-is-the-Moon- |
| A car driving nonstop would need more than five months (p6) | **Shaky as worded.** It is true only at about 60 mph (238,855 / 60 = 3,981 h, about 166 days), and the page gives no speed. | arithmetic |
| Footprints probably still there because there is no wind or rain (p4, existing) | Correct | NASA StarChild: footprints "will stay on the Moon for millions of years because there is no wind to blow them away" — https://starchild.gsfc.nasa.gov/docs/StarChild/space_level1/apollo11.html (NASA science.nasa.gov/moon/facts was not answered in time and is UNVERIFIED) |
| Pumpkins need at least 6 hours of sun (p5) | Correct | UMD Extension: "Full sun requires direct light at least 6 hours/day" — https://extension.umd.edu/resource/growing-pumpkins-home-garden |
| About 1 inch of water a week if no rain; water the soil, not the leaves (p5) | Correct, simplified | Ohio State HYG-1646: "at least 1 inch of water per week if rainfall is not adequate"; "wet foliage increases the chance of disease" — https://ohioline.osu.edu/factsheet/hyg-1646 . MSU P2905: 1 inch early, "up to 2 inches" in the 30 days before harvest — https://extension.msstate.edu/sites/default/files/publications/P2905_web.pdf |
| Compost; vines need space; bees pollinate; leave a stem on harvested pumpkins (p1, p2, p5) | Correct | OSU (compost), MSU (spacing; "Pollen is transferred primarily by bees"; "leaving about 2–4 inches of stem"), UMD ("3 to 4 inches of stem") |
| Contest pumpkins weigh more than 2,000 lb (p5) | Correct | Guinness lists the current record as 3,156 lb (2026) — https://www.guinnessworldrecords.com/world-records/heaviest-pumpkin . The research log's "about 2,700 lb" is out of date, but the passage itself is fine. |
| Woodpeckers peck bark, use a long tongue to pull out insects, and drum in spring to claim territory (T-RA WM3) | Correct | NPS Harpers Ferry: red-bellied woodpecker tongue tip is "barbed and their spit is sticky ... catch prey from deep in tree crevices" — https://www.nps.gov/hafe/learn/nature/woodpeckers.htm . Colorado Parks & Wildlife: spring drumming to "establish and/or defend a territory" — https://cpw.State.Co.Us/learn/Pages/LivingwithWildlifeWoodpeckers.aspx |
| Frogs catch insects with a sticky tongue (T-C teach) | Correct | Smithsonian: frog tongues are very soft, and sticky saliva grips prey — https://www.smithsonianmag.com/science-nature/frog-tongue-sticky-bullet-180962001/ |
| Pop-up gloss "tongue: the soft part of the mouth" (Fig 2) | **Imprecise.** It could describe the cheeks or the palate. | dictionary sense |
| Beaver lodge doors are under water, the room stays dry, front teeth never stop growing, tail slap warns others (T-C p1) | Correct | Idaho Fish & Game Wildlife Express: "underwater tunnels and entrances"; the bed "will stay dry"; "front teeth never stop growing"; "The tail slap tells other beavers about the danger" — https://idfg.idaho.gov/sites/default/files/wildlife-express-december-2019-beavers.pdf . Also NPS Gates of the Arctic — https://www.nps.gov/gaar/learn/nature/beaver-water-wizard.htm |
| Monarchs: milkweed is the only caterpillar food; the taste makes birds avoid them; bright warning color; taste with feet (T-C p2) | Correct | NPS: "They eat only milkweed leaves"; "Most birds ... avoid their bitter taste, warned off by the bright orange wings"; "chemoreceptors on their feet" — https://www.nps.gov/articles/000/monarch-butterfly-featured-creature.htm |
| Monarchs migrate south each fall, some to Mexico, stop for nectar, and pass through Georgia (p2 s.4 section) | Correct | UGA CAES: monarchs migrating through Georgia "on their way to the Sierra Madre of Mexico"; they come down "looking for food resources" — https://fieldreport.caes.uga.edu/news/monarch-butterflies-migrating-through-georgia-now/ |
| Hatchlings find the sea by the glow over the water; bright light misleads them; red light (T-C T7) | Correct | NPS Everglades: hatchlings move "toward the brightest horizon, which was the light from the sky reflecting off the ocean"; it recommends red "Turtle Safe Lighting" — https://www.nps.gov/ever/learn/nature/seaturtleslight.htm . Note: many beach programs ask the public to use no flashlight at all. The narrator is a nest keeper, so a red light is defensible. |
| Test smoke alarms every month (T-C WM3) | Correct | USFA: "Test them once a month" — https://www.usfa.fema.gov/downloads/pdf/fire-safe-seniors/7x4-magnet-press.pdf |

**Not externally fetched:** these are checked against my own knowledge only and need no change:
- 1976 was the US Bicentennial.
- January 28-29, 2014 was the Atlanta snow and ice storm.
- 1928: most farm families had no electricity, and Atlanta had streetcars.
- 1954: TV was mostly black and white.

---

## Findings

### MUST
None. I found no factual error, wrong key, misclassified sentence or broken rendering.

### SHOULD
1. **3.T.C.1.b: auditory and spoken features are not checked.**
   - Fix: add, or swap in, one check item on a caption line or spoken cue. For example, replace a slot of T8 with "[bees buzzing] tells the reader {what sound plays | what the narrator says | ...}" on the monarch page, or add a spoken-cue item at 1 point and replace T2 or T1.
   - Keep the check total of 8.
2. **3.T.C.1.b: digital features have no Watch Me step and no Together item.**
   - Fix: turn teach example 2 into a WM4 that asks "Which feature would you tap to ...?" with steps.
   - Or move P10 into Together by reordering it ahead of P5 or P6. That puts digital and auditory work in Together.
3. **3.T.C.1.b T8: reduce the surface matching.**
   - The Bees tab can be answered without the figure.
   - Fix: make the slot depend on reading the figure, for example "To find a page about where monarchs drink nectar, a reader should {tap the underlined words "Monarch gardens" | tap the Bees tab | read the open box}".
4. **3.T.RA.1.b: "credible" is not addressed.**
   - Fix: add one teach point, for example: "Pick sources you can trust: a library book, a museum, nature center, park or science agency web page, or an expert. A page that is mostly ads is not a good source."
   - Add one practice or check item, for example: which of two sources is more trustworthy for the question.
   - At least cross-link to 3.T.RA.2.b.
   - Consider renaming the invented sites to credible-sounding ones, such as "Georgia Garden Science Center" or "Science Center Moon Page." The current club pages with ads model weak sources.
5. **3.T.C.2.c: "Note in a box:" is rendered as plain words.**
   - Fix: render these lines as a real boxed note (the passage `Box:` style), or change the wording to "Note:". This matters because teach says to look for "a note in a box."
6. **3.L.GC.2.a: no complex sentence is keyed in Together.**
   - Fix: move P4 (the After dropdown) into Together by swapping its position with P7 or P3, or add a complex row to P2. This keeps the "I do, we do, you do" order for all three types.

### NOTE
1. **3.T.RA.1.b p6:** "A car driving day and night without stopping would need more than five months." Add "at highway speed" (about 60 mph), or the claim is untethered.
2. **Fig 2 (tc1b-frog-webpage.svg):** change the gloss "tongue: the soft part of the mouth" to "tongue: the soft part inside the mouth that can move." If changed, also update the alt text.
3. **Frog example consistency:** example 1 says "Frogs catch insects with a sticky tongue." Fig 2, described as "the same article," says "Frogs catch bugs ...". Make them match.
4. **3.T.C.2.c P7:** this is closer to the writer's purpose or occasion than to situational context. Consider an outside circumstance instead, for example "Hattie had just moved to Atlanta" or "spring planting time."
5. **3.T.C.2.c T4:** rated DOK 3, but the answer is stated in the text, so it should be DOK 2. The author flagged this too.
6. **3.T.C.2.c skill page:** the "Proficient looks like" panel will show the T.C.2 Proficient row (perspectives). Context is Distinguished-only in the DRAFT ALD. That is accurate, but it may confuse parents. Consider a one-line note.
7. **3.T.RA.1.b:** p5 and p6 are labelled "Source 3" when shown alone, and the ad and link boxes look the same as content boxes. Ordering (WM2, P3) is practiced but not checked; that is acceptable because T2 and T3 check organizing.
8. **3.L.GC.2.a check order:** T6 (fragment = 5) comes before T8, where sentence 5 is a distractor. Getting T6 right removes one T8 distractor. This is minor and acceptable.
9. **pp004-research.md:** the standards.js wording discrepancy it reports is now fixed in `standards.js`; the log is stale. Its pumpkin-record figure (about 2,700 lb) is also out of date; Guinness lists 3,156 lb (2026).
10. **guard.py** was not run by me or by the authors. The lead should run it before merging.

## Status table

| Expectation | Status | Blocking gap |
|---|---|---|
| 3.T.C.1.b | **PARTIAL** | Auditory and spoken features are not assessed in the check. Digital features have no Watch Me and no Together item. |
| 3.T.C.2.c | **VERIFIED COMPLETE** | None. Time period, individual and situational context are each taught, modeled, practiced in both halves and checked. |
| 3.T.RA.1.b | **PARTIAL** | "Credible" sources are not taught or assessed. Self-selected topic is covered only by the unscored write task, which is inherent to the format. |
| 3.L.GC.2.a | **VERIFIED COMPLETE** | None. The draft grammar is verified sentence by sentence. Minor: complex is not keyed in Together. |
