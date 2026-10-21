# PP-004 review of changed items, Agent C (independent assessment reviewer, read-only)

Date: 2026-10-20. Worktree: /home/claude/pp-fix. Port 8497 (used only to render the figures; the server was stopped afterwards).
This file is the only repository file I wrote. The only git commands I ran were read-only: `git diff --name-only 4ed5d0b`, `git diff --stat`, and `git show 4ed5d0b:<path>`.

## Scope and how the item list was built
- Script: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revC2/diff.js`. It loads every lesson and set file that changed since 4ed5d0b, in both versions (old copies are in `revC2/old/`), in a Node VM. It then compares items by id and by full JSON.
- An item counts as changed if it is new, if its own JSON differs, or if a passage it names (`passages`, hot-text `source` or `targets`) differs.
- `testB` items are excluded. Every changed passage with no practice or form-A test item using it is used only by `testB`: 3.L.GC.2.b p3, 3.L.V.2.a p3, 3.L.V.3.a p3, 3.T.RA.2.a p3, 3.T.SS.2.a p3, 3.T.T.1.a p3, 3.T.T.1.c p3, 3.T.T.2.a/b p3, 3.T.T.4.a p3/p4 and TS-CE p3. I checked this with `revC2/orphan.js`.
- F-FH.js changed, but only in its `coach` and checklist text. It has no changed items.
- The files were last modified at 22:55 EDT, before my snapshot. The short SHA-256 of each file I reviewed: T-C a7b18bacacb0, T-RA 6eb74661e621, T-SS cf1490d8ae5a, T-T1 0a2ee37543ef, T-T34 5b24bd791705, T-TS 13a6974366f6, L-GC2 179ade16917a, L-GUM1 284cf81a3ffe, L-GUM2 000280ea2f60, L-GUM3 07978558bed2, L-GUM4 67b19c24132d, L-V12 123cbb3a0170, F-PF e96c5a6834e8, PT-1 2a1209374c79, R-OPN-01 5cb4246a1be9, W-REV-02 8dd584c33da9.

**Items reviewed: 103.** That is 99 changed items plus the 4 unchanged 3.T.C.1.b items (P1, P8, P9, P5), so that all 13 items of 3.T.C.1.b were solved blind.

| Unit | Items | Unit | Items |
|---|---|---|---|
| 3.T.C.1.b (all) | 13 | 3.L.GC.2.a | 7 |
| 3.T.C.1.c | 1 | 3.L.GC.2.d | 1 |
| 3.T.C.2.a | 3 | GUM rows (plurals, capitals, end marks, reflexive, hyphens, relative) | 6 |
| 3.T.C.2.c | 9 | 3.L.V.1.a | 9 |
| 3.T.RA.1.b | 10 | 3.F.F.1.a | 9 |
| 3.T.RA.1.c | 5 | 3.F.P.4.c | 2 |
| 3.T.RA.2.b | 1 | PT-1 | 2 |
| 3.T.SS.1.b / 1.d / 2.b | 6 / 4 / 2 | R-OPN-01 | 1 |
| 3.T.T.1.b / 1.d / 3.c | 1 / 5 / 1 | W-REV-02 | 1 |
| TS-CC / TS-CE / TS-PS / TS-SEQ | 1 / 1 / 1 / 1 | | |

## Method (position-bias control)
- **Blind printer:** `revC2/blind.js`, which writes one file per unit to `revC2/blind/`.
  - Choices, options, rows, hot-text targets and order steps are shuffled by mulberry32, seeded with item id + "C2".
  - The output has no `correct`, `answer`, `why`, `clue` or `hint`.
  - It prints the passages the item uses, every figure's src, caption and alt, and the practice position (Together or Try).
- **Figures:** all nine figures were rendered to PNG through the 8497 server (`revC2/render.py` → `revC2/png/`), and I looked at each one: tc1b-beaver-lodge, -beaver-tree, -beaver-webpage, -monarch-cycle, -monarch-flower, -monarch-webpage, -monarch-video, ra1b-web-pumpkin and ra1b-web-moon.
- **Answers first:** I wrote every answer to `revC2/answers.txt` before generating the keys. Then `node blind.js keys` printed the same shuffle with the keys, and `revC2/cmp.js` compared the two.
- **Independence:** this time I did not open the raw 3.T.C.1.b source before solving. The diffs I ran before solving printed only item ids and change flags. So the 3.T.C.1.b solve is independent, unlike the earlier gap review.

## Results
- **Agreement: 103 / 103 (100%).** This includes every ebsr part, every dropdown slot, every match row and both order sequences.
- **3.T.C.1.b blind: 13 / 13.**
- No key is wrong. No item has a second defensible answer. Every figure-based item can be answered from its figure, and its alt text gives a screen-reader user what the item needs without naming the answer.
- **Points: no defects.**
  - 52 mc items: 1 point.
  - 9 ms items, including the two pick-three items SK-GUM2-3-P4 and R-OPN-01-2: 2 points.
  - 11 ebsr: 2 points.
  - 11 match: 2 points.
  - 2 order: 2 points.
  - The one hot-text pick-2 item (SK-TC1b-P5): 2 points. The 8 hot-text pick-1 items: 1 point.
  - 4 two-slot dropdowns: 2 points. 5 one-slot dropdowns: 1 point.
- **Alignment:** each item's `std` was checked against the `official` text in js/data/standards.js (printed by script). Findings are listed below.
- **Gate:** `node verification/check-content.js --all` gives PASS, 0 failures and 6 warnings. None of the warnings is on an item in this scope. The earlier SK-TC1b-T2 warning is gone.

## Findings
Severity: MUST = wrong or unfair key; SHOULD = fix before release; NIT = optional.

**No MUST findings.**

### SHOULD
1. **PT-1-6 and PT-1-7 cue each other (both directions, same form).**
   - The PT-1-6 key says "...but Aunt Bea thinks it matters less than the truth."
   - The PT-1-7 Part A key is "Telling the truth is important, even when it is hard to do." Its Part B key is "A chipped pitcher is a small problem, but broken trust is a much bigger one."
   - Setfix F2 removed the quotation from the PT-1-6 `why`. The `why` is hidden during the test anyway. The cue is in the **choice text**, which stays: a child who has the theme for item 7 can pick item 6, and the reverse is also true.
   - Fix: keep the perspective contrast but leave out the theme, for example "...but Aunt Bea thinks the chip is a small problem she can fix." Paragraph 11 ("a small problem") and paragraphs 12–13 (she will make another) support it. Change distractor A to "Malik thinks the chip is too small to matter, but Aunt Bea thinks it ruins the pitcher," so that its wording stays different from the new key. Update the `why` to match.
2. **The SK-TSPS-P2 `why` gives away SK-TSPS-P6.**
   - P2 is a Together item, and its `why` says "The clue word But shows that it did not work."
   - P6 is a Try item. It shows the same sentence (p1:3:2) and asks "What does the word 'But' show here?" Its key is "A try did not work."
   - PP-004 changed only the P2 clue, so this leak was there before. It is still a defect in an item that PP-004 edited.
   - Fix: "Jamal's first try was wiping the ants away. The very next morning, a new line of ants marched right back, so wiping did not stop them. The other sentence about the ants coming back is about his second try."
3. **SK-TT1d-T5 is marked DOK 3, but it is DOK 2.** The item matches two literal problems, a ring stuck in a crack and birds flying away, and checks both halves of each choice. That is a compare task with no inference across the texts. Fix: `dok: 2`. The sister items T1, T2 and T4 are already DOK 2.
4. **The 3.T.C.2.c practice `why`s prime SK-TC2c-P4, a Try item (low).**
   - The SK-TC2c-P7 `why` (new, Together) says "Ella only hopes to visit Atlanta." That names Hattie's city and removes P4's Part A distractor "Hattie is going to visit the farm this summer."
   - The P1 and P2 `why`s, which were unchanged, already stress the summer visit and the lack of electricity.
   - Fix for P7: "Nothing in the letter says her family is moving."
5. **New PT-1-13 row cues PT-1-11 (low).**
   - The new row is "In the fall, the days get shorter and there is less sunlight → The tree slows down its food making." That is the cause-and-effect chain that the PT-1-11 key describes: "explains what happens in leaves because the days get shorter."
   - Both can be answered from the passage, so this is a cue, not a giveaway.
   - Optional fix: use a cause from "Letting Go" instead, for example "The tree drops its leaves before winter → The tree saves water during the cold months" (p2 10.1), and change the first column to match.

### NIT
- **SK-TSSEQ-T5** (DOK 3) is close to literal. Part B is "...poured the batter right on top of the melted butter." DOK 2 is more defensible. SK-TSSEQ-T2, the order item, also puts butter before batter, so the two items reinforce each other. That is mild.
- **SK-RA2b-T5 Part B** asks for two picks from only 4 choices, and the two distractors, "Elephants live in Africa and Asia" and "They have long trunks", are plainly harmless facts. To match the 5–6-choice rule for ms items, add a fifth plausible sentence, such as "Many elephants live to be 60 years old or even older."
- **SK-GUM4-5-T5, choice "That is the store when we buy bread."** It opens with "That", one of the four target words, used correctly as a demonstrative. A careful child could hesitate over it. Fix: "This is the store when we buy bread."
- **SK-TC1b-T7.** The main demand is working out what *migrate* means from context. The item ties that to the bold-print and glossary feature, so the alignment to 3.T.C.1.b is acceptable. P4 already tests the job of bold print directly. No change is needed.
- **SK-TT3c-P6** uses the same topic as W-TASK-01 (reading buddy program), and its key matches the task's first provided reason. The task gives its reasons, so no score leaks, but the writing task feels less new. Consider another topic, such as a class pet or a buddy bench.
- **Brown thrasher passage p4 (3.T.RA.1.c), 4.2: "the father may dive at them."** The sources say both adults defend the nest (MDC: "Adults fearlessly protect their nests, striking people..."). Suggest "a parent may dive at them." The 3.T.RA.1.c T3 key ("Thrasher parents protect their nest") already fits that wording.
- **Mild mutual cues inside tests.** All of these are either there before or are literal facts in a passage the child can see. No change is needed.
  - SK-TT1d-T4 row "By the end, the main character feels good about himself → Both" supports T3. This was there before.
  - SK-V1a-T1 distractor D is the T3 key (condensation). This was there before.
  - The SK-TT1b-T5 setting row repeats the T2 stem "begins on a Thursday afternoon".
  - The SK-TC2c-T2 key ("many families did not have one") supports T4.
  - The SK-GC2a-T6 key (sentence 5) is a T8 distractor. It does not give away either answer.
- **SK-GUM3-8-P4 `why`** teaches the compound-word split with popcorn, so P5 (birthday) becomes nearly recall. That is acceptable for practice.
- **3.L.GC.2.a practice:** all three new draft-based items (P7, P9, P8) fall in the Try half. Together has no in-draft example. Hints still unlock after one wrong try, so this is acceptable.

## Per-item checks with nothing to report
- **Distractors.** In every item, each distractor is wrong for a reason the text gives.
- **3.T.C.1.b fixes.** The earlier SK-TC1b-P4 → P6 leak is fixed: the P6 row is now "makes one word stand out from the words around it". The SK-TC1b-P10 alt now says "two caption lines".
- **3.T.C.1.b coverage.** The lesson covers all modes in the official wording "print, digital, auditory, spoken, and visual":
  - print: P1, P4, P6, T2, T7
  - digital: P10, T8
  - auditory captions: P10, T9
  - spoken: P9
  - visual: P8, P5, T3, T6
- **DOK fixes confirmed:** SK-TC2c-P4, T3 and T4 → 2; SK-RA1b-T5 → 2; SK-GC2a-T2 → 2; SK-GUM4-5-T5 → 2; W-REV-02-7 → 2. SK-SS2b-T5 went from 1 to 2, which is reasonable because the child has to infer the feeling.
- **Type changes confirmed with correct points:**
  - SK-RA2b-T5: mc → ebsr, 2 points.
  - SK-TSCC-T5: mc → match, 2 points.
  - SK-V1a-P5 and T4: match → mc, 1 point.
  - SK-TC2a-P4: match → mc, 1 point. It now asks about the speaker's view against the sister's view, which fits 3.T.C.2.a ("perspectives of the narrator or speakers") better than the old first-person/third-person sort.
- **Alignment confirmed against the official text:**
  - 3.T.RA.1.b: credible sources (P8, T8), digital sources (p5, p6 with a site name and date), personal communication (p2, p4), and gathering, sorting and selecting (P1, P6, P7, T1, T3, T5, T6, T7).
  - 3.L.GC.2.a: simple, compound and complex sentences, plus correct structure through the fragment and run-on fixes.
  - 3.F.P.4.c: encode (T6) and decode meaning (P7).
  - 3.F.F.1.a: accuracy is tested through irregular-word rhymes and words in context. Automaticity cannot be measured in this format, which is a known limit.
  - 3.T.T.1.d: across diverse cultures (Oaxaca, Mexico, and Chennai, India).

## Verdicts by lesson
| Lesson / set | Verdict |
|---|---|
| 3.T.C.1.b | PASS (13/13 blind). NIT on T7 alignment only. |
| 3.T.C.1.c, 3.T.C.2.a | PASS |
| 3.T.C.2.c | PASS WITH SHOULD (#4) |
| 3.T.RA.1.b | PASS |
| 3.T.RA.1.c | PASS (NIT: "father" wording) |
| 3.T.RA.2.b | PASS (NIT: Part B choice count) |
| 3.T.SS.1.b, 3.T.SS.1.d, 3.T.SS.2.b | PASS |
| 3.T.T.1.b | PASS |
| 3.T.T.1.d | PASS WITH SHOULD (#3, DOK) |
| 3.T.T.3.c | PASS (NIT: topic overlap with W-TASK-01) |
| TS-CC, TS-CE, TS-SEQ | PASS (NIT: TSSEQ-T5 DOK) |
| TS-PS | PASS WITH SHOULD (#2, P2 `why` → P6) |
| 3.L.GC.2.a, 3.L.GC.2.d | PASS |
| GUM rows (6 items) | PASS (NIT: GUM4-5-T5 "That") |
| 3.L.V.1.a | PASS |
| 3.F.F.1.a, 3.F.P.4.c | PASS |
| PT-1 | PASS WITH SHOULD (#1, the cue between items 6 and 7; #5, low) |
| R-OPN-01, W-REV-02 | PASS |

## Fact checks (all checked 2026-10-20)
- **Brown thrasher.**
  - Georgia state bird; 1,116 song types; phrases repeated only twice; golden eye; brown-splotched white breast. Source: https://georgiawildlife.com/out-my-backdoor-brown-thrashers-special-songster
  - Nest in thick shrubs or a small tree, of twigs; both sexes incubate; both feed the young; often 2 broods; clutch 4–5 (range 2–6); strikes people and dogs; sweeps its bill through leaf litter. Source: https://www.tn.gov/twra/wildlife/birds/grassland-and-shrub-birds/brown-thrasher.html
  - "Adults fearlessly protect their nests, striking people"; sweeps the bill back and forth through leaf litter; eats berries; "Cup nests are built low in trees or in shrubs, of twigs, dry leaves, grasses". Source: https://mdc.mo.gov/discover-nature/field-guide/brown-thrasher
  - Eggs "pale blue or white, and heavily brown-speckled". Source: https://pwconserve.org/wildlife/birds/brownthrasher.htm
  - UNVERIFIED: https://www.allaboutbirds.org/guide/brown_thrasher/lifehistory did not load (the permission request was not answered). Three other sources cover the same facts.
- **Elephants.**
  - "250 – 300 pounds is a more typical amount"; "feed for up to 16 hours a day"; "25 – 50 gallons" of water. Source: https://elephantconservation.org/about-elephants/25-things-to-know
  - The trunk "contains no bones, but almost 40,000 muscles". Source: https://bornfree.org.uk/blog/why-do-elephants-have-trunks
  - I did not verify the claims that elephants live to 60 or older, that they peel bark with their tusks, or that they remember water. They are in Source 2 of SK-RA2b-T5, which the item treats as the less trustworthy source, and none of them is keyed.
- **Monarchs.**
  - "Females will 'taste' milkweed with their feet prior to laying eggs on it." Source: https://monarchjointventure.org/faq/monarch-biology/how-monarchs-find-milkweed
  - The box says "A monarch can taste with its feet," which is accurate.
- **Moon.**
  - Earth's gravity is six times the moon's, which supports 60 lb → 10 lb. Average distance 238,000 miles. Footprints last. Source: https://nightsky.jpl.nasa.gov/media/documents/attachments/Fun_Facts_About_the_Moon.pdf
  - Daytime up to about 250°F, which is above boiling. Night about −208°F, which is colder than Earth's record low (about −128.6°F; that figure is from memory and was not looked up). Day and night each last about two Earth weeks. Source: https://www.space.com/18175-moon
  - The car-trip arithmetic is mine: 239,000 ÷ 60 ≈ 3,983 hours ≈ 166 days, which is more than five months.
- **Pumpkins.**
  - At least 6–8 hours of sun; 1–2 inches of water a week, so "about one inch" is at the low end but acceptable; compost; bees pollinate; vines 20–30 ft; cut leaving the stem on. Source: https://byf.unl.edu/pumpkins
  - Contest pumpkins over 2,000 lb: the record is now above 3,000 lb. Source: https://www.smithsonianmag.com/science-nature/the-giant-pumpkin-world-record-just-crept-closer-to-3000-pounds-heres-how-science-sweat-and-soul-crush-keep-growers-reaching-for-the-heaviest-fruit-possible-180987563/ (search result title only; I did not fetch the page).
- **Kingfisher in Chennai.** A search returned "The Private Lives of Kingfishers in My Urban Garden" (white-throated kingfisher, Chennai): https://roundglasssustain.com/urban-jungle/white-throated-kingfisher-chennai. I did not fetch it. The story's claims are generic: a blue-winged bird by a lake that dives for fish.
- **Oaxaca story ("The Smallest Cousin").** The only factual claim is that a town is in Oaxaca, Mexico, which is true because Oaxaca is a Mexican state. The courtyard, the silver ring and the family are fiction. I did not search the web for these, because there is nothing checkable in them.

## What I could not do
- I did not run readability.py, check-writing.js or guard.py. My role is read-only review.
- I did not check that the screen rendering matches what my script printed, except for the figures.
- I did not review `testB` items or passages used only by `testB`. They belong to the other reviewer.

## Working files
All under `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revC2/`:
- `diff.js`, `changed.json`: the change detection
- `blind/`, `keys/`: the blind and keyed prints
- `answers.txt`: my answers, written before the keys
- `cmp.js`: the comparison
- `png/`: the rendered figures
- `od.js`, `pd.js`, `full.js`: old/new item diffs, passage diffs and full-unit dumps for the giveaway checks
