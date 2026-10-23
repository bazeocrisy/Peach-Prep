# SIM-1 author log: similar-item backfill for eight lessons

**Role:** content author for batch SIM-1 (ENG-07, "Try a Similar Question" missing on most core items). **This is not a review.** Nothing here certifies the items; reviewers should blind-solve before reading it.

**Files changed (only the named blocks):** `js/data/lessons/T-T1.js` (3.T.T.1.a, .b, .c, .d), `js/data/lessons/T-TS.js` (TS-PS), `js/data/lessons/T-C.js` (3.T.C.2.a), `js/data/lessons/T-SS.js` (3.T.SS.2.a), `js/data/lessons/T-T34.js` (3.T.T.4.a). Added only: new passages after each block's last passage, and new `similar` items S04 and up at the end of each `similar` list. No existing item, key, hint, passage or teaching changed, and no id was renumbered.

## 1. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. None of my eight lessons has a similar-coverage warning any more. The remaining warnings belong to other lessons (e.g. RA.2.b p3 short, test/practice clue shares) |
| `python3 verification/readability.py` | Every new passage was read in the output; the highest is FK 3.9 (3.T.T.1.d p11) and all are below 4.5. Poems are not measured. New stems were also checked with a scratch FK script (`scratchpad/sim1/fk.py`); all are at or below 4.5 |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| Browser smoke test (`node verification/serve.js . 8831`, Playwright, `scratchpad/sim1/smoke.py`) | For each of the eight lessons, all 15 core items worked in order in one sitting (sets y, y2, y3), each answered correctly: **Try a Similar Question appears on all 15**, loads an item whose `like` includes that core item, no similar item repeats inside the sitting, no page errors. Server stopped afterwards |

## 2. How each core item gets its own unused similar item

The scratch script `scratchpad/sim1/greedy.js` replays the engine rule (the first item in the bank whose `like` names the core id and which has not been used in the sitting). For every lesson it reports `missing(0)` and exactly 15 similar items. Each new item names **one** core item in `like`; the three older items (S01 to S03) are unchanged.

### 3.T.T.1.a (character, setting, events) (code 3.T.T.1.a)

In-order assignment: TT1a-P4 -> TT1a-S01; TT1a-P5 -> TT1a-S04; TT1a-C03 -> TT1a-S05; TT1a-C04 -> TT1a-S06; TT1a-C05 -> TT1a-S03; TT1a-C06 -> TT1a-S07; TT1a-C07 -> TT1a-S08; TT1a-C08 -> TT1a-S02; TT1a-C09 -> TT1a-S09; TT1a-C10 -> TT1a-S10; TT1a-C11 -> TT1a-S11; TT1a-C12 -> TT1a-S12; TT1a-C13 -> TT1a-S13; TT1a-C14 -> TT1a-S14; TT1a-C15 -> TT1a-S15.

| Id | like | Type, pts, DOK | Context | Live choices after hint 1 / 2 / 3 (see note) |
|---|---|---|---|---|
| SK-TT1a-S04 | TT1a-P5 | hottext, 1, 2 | p6 "The Fire Tower" | 4 / 4 / 3 sentences |
| SK-TT1a-S05 | TT1a-C03 | mc, 1, 2 | stem: Ms. Haley's classroom had a long shelf of plants by the window. Every pot wore a paper name tag with a funn... | 4 / 4 / 3 |
| SK-TT1a-S06 | TT1a-C04 | mc, 1, 2 | stem: (1) At dawn, Joaquin and his uncle opened their tortilla shop. (2) Uncle Beto turned on the lights and the ... | 4 / 4 / 3 |
| SK-TT1a-S07 | TT1a-C06 | hottext, 1, 2 | stem: Here are five sentences from a story about Mr. Diaz, the school custodian, at the end of the day. | 5 / 5 / 5 lines |
| SK-TT1a-S08 | TT1a-C07 | ebsr, 2, 2 | p6 "The Fire Tower" | 4 + 4 / 4 + 4 / 3 + 4 |
| SK-TT1a-S09 | TT1a-C09 | match, 2, 2 | stem: Grandpa could not find his reading glasses, so he could not read Kemi her bedtime story. "I had them when I... | 4 / 4 / 4 rows |
| SK-TT1a-S10 | TT1a-C10 | mc, 1, 3 | p6 "The Fire Tower" | 4 / 4 / 3 |
| SK-TT1a-S11 | TT1a-C11 | dropdown, 2, 2 | stem: At the town pool, the kids' swim race was about to begin. Little Dani stood frozen at the edge. "I can't do... | 3 + 3 / 3 + 3 / 2 + 3 |
| SK-TT1a-S12 | TT1a-C12 | ebsr, 2, 3 | p7 "The Night Walk" | 4 + 4 / 4 + 4 / 3 + 4 |
| SK-TT1a-S13 | TT1a-C13 | mc, 1, 3 | p7 "The Night Walk" | 4 / 4 / 3 |
| SK-TT1a-S14 | TT1a-C14 | ms, 2, 3 | stem: Story 1: Crunch! Crunch! Corbin's sneakers crushed dry leaves on the school path. His class was making a le... | 5 / 5 / 4 |
| SK-TT1a-S15 | TT1a-C15 | ms, 2, 2 | stem: A writer is working on a story about Esme. Esme is about to read her poem out loud at the library. She is n... | 5 / 5 / 4 |

### 3.T.T.1.b (problem and solution) (code 3.T.T.1.b)

In-order assignment: TT1b-P7 -> TT1b-S04; TT1b-P4 -> TT1b-S05; TT1b-C03 -> TT1b-S06; TT1b-C04 -> TT1b-S01; TT1b-C05 -> TT1b-S07; TT1b-C06 -> TT1b-S08; TT1b-C07 -> TT1b-S02; TT1b-C08 -> TT1b-S09; TT1b-C09 -> TT1b-S10; TT1b-C10 -> TT1b-S11; TT1b-C11 -> TT1b-S03; TT1b-C12 -> TT1b-S12; TT1b-C13 -> TT1b-S13; TT1b-C14 -> TT1b-S14; TT1b-C15 -> TT1b-S15.

| Id | like | Type, pts, DOK | Context | Live choices after hint 1 / 2 / 3 (see note) |
|---|---|---|---|---|
| SK-TT1b-S04 | TT1b-P7 | mc, 1, 2 | stem: Tavi's family lives in a cabin at the end of a long dirt road, many miles from town. One morning, the famil... | 4 / 4 / 3 |
| SK-TT1b-S05 | TT1b-P4 | order, 2, 2 | p5 "The Midnight Cricket" | 4 / 4 / 4 steps |
| SK-TT1b-S06 | TT1b-C03 | dropdown, 2, 3 | p5 "The Midnight Cricket" | 3 + 3 / 3 + 3 / 2 + 3 |
| SK-TT1b-S07 | TT1b-C05 | mc, 1, 3 | p5 "The Midnight Cricket" | 4 / 4 / 3 |
| SK-TT1b-S08 | TT1b-C06 | mc, 1, 2 | stem: On Friday, Ms. Vega's class played a bean bag game. Each team stood ten steps from a bucket and tried to to... | 4 / 4 / 3 |
| SK-TT1b-S09 | TT1b-C08 | hottext, 1, 2 | p6 "The Stuck Zipper" | 5 / 5 / 5 sentences |
| SK-TT1b-S10 | TT1b-C09 | ms, 2, 2 | p6 "The Stuck Zipper" | 5 / 5 / 4 |
| SK-TT1b-S11 | TT1b-C10 | order, 2, 2 | p6 "The Stuck Zipper" | 5 / 5 / 4 steps |
| SK-TT1b-S12 | TT1b-C12 | ebsr, 2, 3 | p5 "The Midnight Cricket" | 4 + 4 / 4 + 4 / 3 + 4 |
| SK-TT1b-S13 | TT1b-C13 | match, 2, 2 | stem:  | 3 / 3 / 3 rows |
| SK-TT1b-S14 | TT1b-C14 | mc, 1, 3 | p5 "The Midnight Cricket", p6 "The Stuck Zipper" | 4 / 4 / 4 |
| SK-TT1b-S15 | TT1b-C15 | mc, 1, 3 | p5 "The Midnight Cricket" | 4 / 4 / 3 |

### 3.T.T.1.c (cause, effect, lesson) (code 3.T.T.1.c)

In-order assignment: TT1c-P4 -> TT1c-S01; TT1c-P5 -> TT1c-S04; TT1c-C03 -> TT1c-S05; TT1c-C04 -> TT1c-S06; TT1c-P6 -> TT1c-S03; TT1c-C06 -> TT1c-S07; TT1c-C07 -> TT1c-S02; TT1c-C08 -> TT1c-S08; TT1c-C09 -> TT1c-S09; TT1c-C10 -> TT1c-S10; TT1c-C11 -> TT1c-S11; TT1c-C12 -> TT1c-S12; TT1c-C13 -> TT1c-S13; TT1c-C14 -> TT1c-S14; TT1c-C15 -> TT1c-S15.

| Id | like | Type, pts, DOK | Context | Live choices after hint 1 / 2 / 3 (see note) |
|---|---|---|---|---|
| SK-TT1c-S04 | TT1c-P5 | order, 1, 2 | p10 "The Borrowed Boots" | 3 / 3 / 3 steps |
| SK-TT1c-S05 | TT1c-C03 | hottext, 1, 2 | p11 "Teaching Grandpa" | 6 / 6 / 6 sentences |
| SK-TT1c-S06 | TT1c-C04 | mc, 1, 3 | p10 "The Borrowed Boots" | 4 / 4 / 3 |
| SK-TT1c-S07 | TT1c-C06 | mc, 1, 2 | stem: Every night, Yara packs her backpack. She puts her shoes by the door and sets her alarm. In the morning, sh... | 4 / 4 / 3 |
| SK-TT1c-S08 | TT1c-C08 | match, 2, 2 | p14 "The Card Trick" | 4 / 4 / 4 rows |
| SK-TT1c-S09 | TT1c-C09 | hottext, 2, 2 | p11 "Teaching Grandpa" | 6 / 6 / 5 sentences |
| SK-TT1c-S10 | TT1c-C10 | mc, 1, 3 | p12 "The Marble Run" | 4 / 4 / 3 |
| SK-TT1c-S11 | TT1c-C11 | ms, 2, 2 | p13 "The Little Library" | 5 / 5 / 4 |
| SK-TT1c-S12 | TT1c-C12 | dropdown, 2, 2 | stem: Odessa's neighbor, Mr. Pike, broke his arm. Every afternoon, Odessa took his trash can to the curb. She bro... | 3 + 3 / 3 + 3 / 2 + 3 |
| SK-TT1c-S13 | TT1c-C13 | mc, 1, 3 | p13 "The Little Library" | 4 / 4 / 3 |
| SK-TT1c-S14 | TT1c-C14 | ms, 2, 3 | p10 "The Borrowed Boots", p13 "The Little Library" | 5 / 5 / 5 |
| SK-TT1c-S15 | TT1c-C15 | mc, 1, 3 | p12 "The Marble Run" | 4 / 4 / 3 |

### 3.T.T.1.d (compare and contrast stories) (code 3.T.T.1.d)

In-order assignment: TT1d-P4 -> TT1d-S03; TT1d-P5 -> TT1d-S04; TT1d-C03 -> TT1d-S01; TT1d-C04 -> TT1d-S05; TT1d-C05 -> TT1d-S06; TT1d-C06 -> TT1d-S02; TT1d-C07 -> TT1d-S07; TT1d-C08 -> TT1d-S08; TT1d-C09 -> TT1d-S09; TT1d-C10 -> TT1d-S10; TT1d-C11 -> TT1d-S11; TT1d-C12 -> TT1d-S12; TT1d-C13 -> TT1d-S13; TT1d-C14 -> TT1d-S14; TT1d-C15 -> TT1d-S15.

| Id | like | Type, pts, DOK | Context | Live choices after hint 1 / 2 / 3 (see note) |
|---|---|---|---|---|
| SK-TT1d-S04 | TT1d-P5 | mc, 1, 3 | stem: Story 1: Otis left the cap off his marker. The next day, the marker was dry, and he could not color his map... | 4 / 4 / 3 |
| SK-TT1d-S05 | TT1d-C04 | ebsr, 2, 3 | p9 "Twenty-One Days", p10 "The Birthday Card Dash" | 4 + 5 / 4 + 5 / 3 + 5 |
| SK-TT1d-S06 | TT1d-C05 | mc, 1, 2 | stem: Story 1: Alma got a new box of colored pencils. When her friend Jo asked to borrow one, Alma said no. "They... | 4 / 4 / 3 |
| SK-TT1d-S07 | TT1d-C07 | ebsr, 2, 3 | p11 "The Lantern Walk", p12 "Eight Candles" | 4 + 5 / 4 + 5 / 3 + 5 |
| SK-TT1d-S08 | TT1d-C08 | match, 2, 2 | stem: Story 1: In Mexico, Dani and his grandpa made paper flowers. Dani cut the petals. His grandpa twisted the s... | 4 / 4 / 4 rows |
| SK-TT1d-S09 | TT1d-C09 | mc, 1, 3 | stem: Story 1: In a town in Japan, Sora planted a persimmon seed. For years, she watered it every week. At last, ... | 4 / 4 / 4 |
| SK-TT1d-S10 | TT1d-C10 | mc, 1, 3 | p11 "The Lantern Walk", p12 "Eight Candles" | 4 / 4 / 4 |
| SK-TT1d-S11 | TT1d-C11 | dropdown, 2, 2 | stem: Story 1: On a snowy hill in Switzerland, Greta pulled her sled to the top. The air was freezing, and her br... | 3 + 3 / 3 + 3 / 2 + 3 |
| SK-TT1d-S12 | TT1d-C12 | hottext, 2, 2 | stem: Here are sentences from two stories about children who mend things. Hoang is on a fishing boat in Vietnam. ... | 8 / 8 / 7 lines |
| SK-TT1d-S13 | TT1d-C13 | ms, 2, 3 | stem: Story 1: In Peru, Rosa helps her aunt sell potatoes at a market. She weighs each bag and calls out the pric... | 5 / 5 / 5 |
| SK-TT1d-S14 | TT1d-C14 | mc, 1, 3 | stem: Story 1: In a town in Egypt, Salma's neighbor fixed her bike chain. The next day, she baked him a small cak... | 4 / 4 / 3 |
| SK-TT1d-S15 | TT1d-C15 | ebsr, 2, 3 | p13 "House on the Lake", p14 "Behind the Dike" | 4 + 4 / 4 + 4 / 3 + 4 |

### 3.T.SS.1.a (problem and solution in text) (code TS-PS)

In-order assignment: TSPS-P5 -> TSPS-S01; TSPS-C02 -> TSPS-S04; TSPS-C03 -> TSPS-S05; TSPS-C04 -> TSPS-S02; TSPS-C05 -> TSPS-S06; TSPS-C06 -> TSPS-S07; TSPS-C07 -> TSPS-S08; TSPS-C08 -> TSPS-S09; TSPS-C09 -> TSPS-S10; TSPS-C10 -> TSPS-S11; TSPS-C11 -> TSPS-S12; TSPS-C12 -> TSPS-S13; TSPS-C13 -> TSPS-S14; TSPS-C14 -> TSPS-S03; TSPS-C15 -> TSPS-S15.

| Id | like | Type, pts, DOK | Context | Live choices after hint 1 / 2 / 3 (see note) |
|---|---|---|---|---|
| SK-TSPS-S04 | TSPS-C02 | mc, 1, 2 | stem: Every morning, the front steps at Isaac's house were covered in ice. First, Isaac shoveled them, but a thin... | 4 / 4 / 3 |
| SK-TSPS-S05 | TSPS-C03 | dropdown, 2, 2 | stem: Whenever the wind blew, the door of Room 5 slammed shut with a bang. Everyone jumped. Maya set a heavy book... | 3 + 3 / 3 + 3 / 2 + 3 |
| SK-TSPS-S06 | TSPS-C05 | mc, 1, 2 | stem: Three of the clocks in the hall showed noon, but the fourth showed ten. | 4 / 4 / 3 |
| SK-TSPS-S07 | TSPS-C06 | dropdown, 2, 2 | stem: Every time it rained, drops of water fell on the art room floor. Zane set out more buckets. Thea climbed a ... | 3 + 3 / 3 + 3 / 2 + 3 |
| SK-TSPS-S08 | TSPS-C07 | match, 2, 2 | stem: Every morning, the sticky notes on Tyree's bulletin board fell off. First, he pressed each note down harder... | 4 / 4 / 4 rows |
| SK-TSPS-S09 | TSPS-C08 | mc, 1, 2 | stem: The freezer in the school kitchen broke. The school picnic was in two days. All of the ice-cream cups for t... | 4 / 4 / 3 |
| SK-TSPS-S10 | TSPS-C09 | mc, 1, 3 | stem: Wren's cardboard fort fell down every time the wind blew from the left. First, she taped the corners tighte... | 4 / 4 / 3 |
| SK-TSPS-S11 | TSPS-C10 | ebsr, 2, 3 | p8 "The Slow Sink" | 4 + 4 / 4 + 4 / 3 + 4 |
| SK-TSPS-S12 | TSPS-C11 | ms, 2, 2 | p9 "Lights Out for Sea Turtles" | 5 / 5 / 4 |
| SK-TSPS-S13 | TSPS-C12 | order, 2, 2 | p9 "Lights Out for Sea Turtles" | 5 / 5 / 5 steps |
| SK-TSPS-S14 | TSPS-C13 | match, 2, 3 | p8 "The Slow Sink", p9 "Lights Out for Sea Turtles" | 4 / 4 / 4 rows |
| SK-TSPS-S15 | TSPS-C15 | mc, 1, 3 | stem: (1) The wheels on the cafeteria cart squealed so loudly that students covered their ears. (2) First, the co... | 4 / 4 / 3 |

### 3.T.C.2.a (point of view) (code 3.T.C.2.a)

In-order assignment: TC2a-C01 -> TC2a-S04; TC2a-P5 -> TC2a-S05; TC2a-C03 -> TC2a-S02; TC2a-C04 -> TC2a-S01; TC2a-C05 -> TC2a-S06; TC2a-C06 -> TC2a-S07; TC2a-C07 -> TC2a-S03; TC2a-C08 -> TC2a-S08; TC2a-C09 -> TC2a-S09; TC2a-C10 -> TC2a-S10; TC2a-C11 -> TC2a-S11; TC2a-C12 -> TC2a-S12; TC2a-C13 -> TC2a-S13; TC2a-C14 -> TC2a-S14; TC2a-C15 -> TC2a-S15.

| Id | like | Type, pts, DOK | Context | Live choices after hint 1 / 2 / 3 (see note) |
|---|---|---|---|---|
| SK-TC2a-S04 | TC2a-C01 | ms, 2, 2 | p6 "The Orange Sweater" | 5 / 5 / 4 |
| SK-TC2a-S05 | TC2a-P5 | mc, 1, 3 | p6 "The Orange Sweater" | 4 / 4 / 3 |
| SK-TC2a-S06 | TC2a-C05 | ebsr, 2, 2 | p7 "The Substitute" | 4 + 4 / 4 + 4 / 4 + 4 |
| SK-TC2a-S07 | TC2a-C06 | ms, 2, 2 | p8 "The Dentist's Chair" | 5 / 5 / 4 |
| SK-TC2a-S08 | TC2a-C08 | mc, 1, 2 | p7 "The Substitute" | 4 / 4 / 3 |
| SK-TC2a-S09 | TC2a-C09 | hottext, 1, 2 | p8 "The Dentist's Chair" | 6 / 6 / 5 sentences |
| SK-TC2a-S10 | TC2a-C10 | mc, 1, 3 | p8 "The Dentist's Chair" | 4 / 4 / 4 |
| SK-TC2a-S11 | TC2a-C11 | ms, 2, 3 | p9 "Puddle Day" | 5 / 5 / 4 |
| SK-TC2a-S12 | TC2a-C12 | cr, no points, 3 | p9 "Puddle Day" | n/a (written answer, no choices) |
| SK-TC2a-S13 | TC2a-C13 | match, 2, 2 | stem:  | 4 / 4 / 4 rows |
| SK-TC2a-S14 | TC2a-C14 | mc, 1, 3 | stem: I am the best block builder in the class. Today my tower fell over, but only because the table shook. Mia s... | 4 / 4 / 3 |
| SK-TC2a-S15 | TC2a-C15 | ms, 2, 3 | stem: Ivy's postcard: We went to the farm today. The barn smelled terrible, and a goat chewed my sleeve. I can't ... | 5 / 5 / 4 |

### 3.T.SS.2.a (figurative language) (code 3.T.SS.2.a)

In-order assignment: SS2a-P5 -> SS2a-S01; SS2a-C02 -> SS2a-S03; SS2a-C03 -> SS2a-S04; SS2a-C04 -> SS2a-S05; SS2a-C05 -> SS2a-S02; SS2a-C06 -> SS2a-S06; SS2a-C07 -> SS2a-S07; SS2a-C08 -> SS2a-S08; SS2a-C09 -> SS2a-S09; SS2a-C10 -> SS2a-S10; SS2a-C11 -> SS2a-S11; SS2a-C12 -> SS2a-S12; SS2a-C13 -> SS2a-S13; SS2a-C14 -> SS2a-S14; SS2a-C15 -> SS2a-S15.

| Id | like | Type, pts, DOK | Context | Live choices after hint 1 / 2 / 3 (see note) |
|---|---|---|---|---|

### 3.T.T.4.a (poem structure) (code 3.T.T.4.a)

In-order assignment: TT4a-C01 -> TT4a-S01; TT4a-C02 -> TT4a-S02; TT4a-C03 -> TT4a-S04; TT4a-C04 -> TT4a-S05; TT4a-C05 -> TT4a-S06; TT4a-C06 -> TT4a-S07; TT4a-C07 -> TT4a-S08; TT4a-C08 -> TT4a-S09; TT4a-C09 -> TT4a-S10; TT4a-C10 -> TT4a-S11; TT4a-C11 -> TT4a-S12; TT4a-C12 -> TT4a-S03; TT4a-C13 -> TT4a-S13; TT4a-C14 -> TT4a-S14; TT4a-C15 -> TT4a-S15.

| Id | like | Type, pts, DOK | Context | Live choices after hint 1 / 2 / 3 (see note) |
|---|---|---|---|---|
| SK-TT4a-S04 | TT4a-C03 | ms, 2, 1 | stem: Stanza 1: The hammock hangs between two trees. It sways me in the summer breeze. Stanza 2: A bee goes buzzi... | 5 / 5 / 4 |
| SK-TT4a-S05 | TT4a-C04 | hottext, 1, 2 | stem: Read this poem about tying shoes. I cross the laces, loop them through, And pull them snug, the way you do.... | 5 / 5 / 5 lines |
| SK-TT4a-S06 | TT4a-C05 | hottext, 1, 2 | stem: A class wrote a poem about a garage sale. Here is one stanza. Our garage sale is open wide, With books and ... | 4 / 4 / 3 lines |
| SK-TT4a-S07 | TT4a-C06 | mc, 1, 3 | stem: Here is stanza 1 of a poem called "Yo-Yo." My yo-yo drops down to the floor. It zips right back, then down ... | 4 / 4 / 3 |
| SK-TT4a-S08 | TT4a-C07 | hottext, 2, 2 | stem: Here are five lines from a poem about a long car ride. | 5 / 5 / 4 lines |
| SK-TT4a-S09 | TT4a-C08 | ebsr, 2, 3 | p9 "The Ice Cream Truck" | 4 + 4 / 4 + 4 / 3 + 4 |
| SK-TT4a-S10 | TT4a-C09 | mc, 1, 3 | stem: Here is stanza 1 of a poem called "Popcorn." The oil is warm. The kernels wait. I shake the pot. I count to... | 4 / 4 / 3 |
| SK-TT4a-S11 | TT4a-C10 | ms, 2, 3 | stem: Poem A: The Cat Purr, purr, purr by the fire, Purr, purr, purr in the sun. The cat stretches out on the rug... | 5 / 5 / 4 |
| SK-TT4a-S12 | TT4a-C11 | ms, 2, 2 | stem: Stanza 1: Out by the fence, the dirt is deep. The puppy sniffs and starts to scratch. His paws fly fast, hi... | 5 / 5 / 4 |
| SK-TT4a-S13 | TT4a-C13 | mc, 1, 3 | stem: Here is a stanza from a poem. The sun comes up behind the hill. The roosters crow and call. I jump out of m... | 4 / 4 / 4 |
| SK-TT4a-S14 | TT4a-C14 | dropdown, 2, 2 | stem: Stanza 1: In March, the pear tree's branches bare. The buds are small and tight. A robin hops from twig to ... | 3 + 3 / 3 + 3 / 3 + 3 |
| SK-TT4a-S15 | TT4a-C15 | mc, 1, 3 | stem: Stanza 1: At dawn, the harbor's calm. The docks are bare and gray. A fisher ties a net to a post To start t... | 4 / 4 / 3 |

**Note on the live-choice column:** hint 1 (the clue) and hint 2 rule out nothing in any new item. Hint 3 rules out at most one choice (or one blank option, or one step, or one Part A choice with a pointer to match Part B); where the first sentence of hint 3 rules a choice out, the column shows N-1. For two-part or two-blank items the first number is the first part or blank. Items shown as N / N / N have a hint 3 that only says how to test the remaining choices. The count was read from the hint text, so reviewers should check it.

## 3. Topic and name search

Before writing each context I ran a whole-word, case-insensitive `grep -rwi` over `js/data` for the proper names, the key figure of speech or fact, and the setting, then renamed or replaced every hit that already carried the same key fact in another lesson. Renames made: Big Dipper -> brightest star; Ms. Lowe -> Ms. Haley; Eli -> Emre; Nico -> Idris; Hector -> Kiran; Diwali -> Hanukkah; waxed floor -> bean-bag wind; fish tank -> art-room drip; piano -> freezer; Mr. Cole -> Mr. Gage; bus driver -> dentist; Pearl/Kemp/Dunn -> Thea/Okon/Rudd; "under the weather", "hold your horses" (both already taught in 3.T.SS.2.a), kickball, rabbits in a garden, aquarium and octopus, lemonade stand, oak tree and market -> replaced with new settings (raking leaves and "call it a day"; swings and "a drop in the bucket"; school play; garage sale; ice cream truck; pear tree; harbor). New names with zero hits at the time: Ned, Dana (stem only), Ozzie, Tess, Ms. Doyle, Felix, Rhys, Wes, Cleo, Mr. Lund, Ms. Lane. Phrases with zero hits: "as long as a football field", "over the moon", "furnace", "in the same boat", "treasure chest", "call it a day", "a drop in the bucket", "rained buckets".

## 4. Not done / notes

- No item was reviewed by me; all new passages and items carry the comment `NEEDS INDEPENDENT REVIEW` in the data file.
- Poem passages (p9 in T-T34) are not measured for readability. The other new TT4a items put the poem in the item stem, as the older S01 to S03 do.
- The practice-own.py suite was not run (it covers the whole site and takes long); I ran only my own in-order smoke test. If the engine rule changes to offer used similar items again (practice-own.py N.1/N.2 mentions a 2026-10-23 lead decision), each core item still has its own item, so nothing here depends on the old rule.
- Helper scripts are in the scratchpad (`scratchpad/sim1/`): greedy.js, fk.py, ins3.py, smoke.py, genlog.js.
