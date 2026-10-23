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

| Id | like | Type, pts, DOK | Context | Live choices: start / after hint 3 alone (see note) |
|---|---|---|---|---|
| SK-TT1a-S04 | TT1a-P5 | hottext, 1, 2 | p6 "The Fire Tower" | 4 / 3 sentences |
| SK-TT1a-S05 | TT1a-C03 | mc, 1, 2 | stem: Ms. Haley's classroom had a long shelf of plants by the window. Every pot wore a paper name tag with a funn... | 4 / 3 |
| SK-TT1a-S06 | TT1a-C04 | mc, 1, 2 | stem: (1) At dawn, Joaquin and his uncle opened their tortilla shop. (2) Uncle Beto turned on the lights and the ... | 4 / 3 |
| SK-TT1a-S07 | TT1a-C06 | hottext, 1, 2 | stem: Here are five sentences from a story about Mr. Diaz, the school custodian, at the end of the day. | 5 / 5 lines |
| SK-TT1a-S08 | TT1a-C07 | ebsr, 2, 2 | p6 "The Fire Tower" | 4 + 4 / 3 + 4 |
| SK-TT1a-S09 | TT1a-C09 | match, 2, 2 | stem: Grandpa could not find his reading glasses, so he could not read Kemi her bedtime story. "I had them when I... | 4 / 4 rows |
| SK-TT1a-S10 | TT1a-C10 | mc, 1, 3 | p6 "The Fire Tower" | 4 / 3 |
| SK-TT1a-S11 | TT1a-C11 | ms, 2, 2 | stem: Milo had worked on the library's giant puzzle for an hour, and one corner was still empty. "This is too har... | 5 / 4 |
| SK-TT1a-S12 | TT1a-C12 | ebsr, 2, 3 | p6 "The Fire Tower" | 4 + 4 / 3 + 4 |
| SK-TT1a-S13 | TT1a-C13 | mc, 1, 3 | p7 "The Night Walk" | 4 / 3 |
| SK-TT1a-S14 | TT1a-C14 | ms, 2, 3 | stem: Story 1: Crunch! Crunch! Corbin's sneakers crushed dry leaves on the school path. His class was making a le... | 5 / 4 |
| SK-TT1a-S15 | TT1a-C15 | ms, 2, 2 | stem: Jonah wrote a story about a train station on a busy morning. His teacher says, "I cannot picture the crowd ... | 5 / 4 |

### 3.T.T.1.b (problem and solution) (code 3.T.T.1.b)

In-order assignment: TT1b-P7 -> TT1b-S04; TT1b-P4 -> TT1b-S05; TT1b-C03 -> TT1b-S06; TT1b-C04 -> TT1b-S01; TT1b-C05 -> TT1b-S07; TT1b-C06 -> TT1b-S08; TT1b-C07 -> TT1b-S02; TT1b-C08 -> TT1b-S09; TT1b-C09 -> TT1b-S10; TT1b-C10 -> TT1b-S11; TT1b-C11 -> TT1b-S03; TT1b-C12 -> TT1b-S12; TT1b-C13 -> TT1b-S13; TT1b-C14 -> TT1b-S14; TT1b-C15 -> TT1b-S15.

| Id | like | Type, pts, DOK | Context | Live choices: start / after hint 3 alone (see note) |
|---|---|---|---|---|
| SK-TT1b-S04 | TT1b-P7 | mc, 1, 2 | stem: Tavi's family lives in a cabin at the end of a long dirt road, many miles from town. One morning, the famil... | 4 / 3 |
| SK-TT1b-S05 | TT1b-P4 | order, 2, 2 | p5 "The Midnight Cricket" | 4 / 4 steps |
| SK-TT1b-S06 | TT1b-C03 | dropdown, 2, 3 | p5 "The Midnight Cricket" | 3 + 3 / 2 + 3 |
| SK-TT1b-S07 | TT1b-C05 | mc, 1, 3 | p5 "The Midnight Cricket" | 4 / 3 |
| SK-TT1b-S08 | TT1b-C06 | mc, 1, 2 | stem: On Friday, Ms. Vega's class played a bean bag game. Each team stood ten steps from a bucket and tried to to... | 4 / 3 |
| SK-TT1b-S09 | TT1b-C08 | hottext, 1, 2 | p6 "The Stuck Zipper" | 5 / 5 sentences |
| SK-TT1b-S10 | TT1b-C09 | ms, 2, 2 | p6 "The Stuck Zipper" | 5 / 4 |
| SK-TT1b-S11 | TT1b-C10 | order, 2, 2 | p6 "The Stuck Zipper" | 5 / 4 steps |
| SK-TT1b-S12 | TT1b-C12 | ebsr, 2, 3 | p5 "The Midnight Cricket" | 4 + 4 / 3 + 4 |
| SK-TT1b-S13 | TT1b-C13 | match, 2, 2 | stem:  | 3 / 3 rows |
| SK-TT1b-S14 | TT1b-C14 | mc, 1, 3 | p5 "The Midnight Cricket", p6 "The Stuck Zipper" | 4 / 3 |
| SK-TT1b-S15 | TT1b-C15 | mc, 1, 3 | p5 "The Midnight Cricket" | 4 / 3 |

### 3.T.T.1.c (cause, effect, lesson) (code 3.T.T.1.c)

In-order assignment: TT1c-P4 -> TT1c-S01; TT1c-P5 -> TT1c-S04; TT1c-C03 -> TT1c-S05; TT1c-C04 -> TT1c-S06; TT1c-P6 -> TT1c-S03; TT1c-C06 -> TT1c-S07; TT1c-C07 -> TT1c-S02; TT1c-C08 -> TT1c-S08; TT1c-C09 -> TT1c-S09; TT1c-C10 -> TT1c-S10; TT1c-C11 -> TT1c-S11; TT1c-C12 -> TT1c-S12; TT1c-C13 -> TT1c-S13; TT1c-C14 -> TT1c-S14; TT1c-C15 -> TT1c-S15.

| Id | like | Type, pts, DOK | Context | Live choices: start / after hint 3 alone (see note) |
|---|---|---|---|---|
| SK-TT1c-S04 | TT1c-P5 | order, 1, 2 | p10 "The Borrowed Boots" | 3 / 3 steps |
| SK-TT1c-S05 | TT1c-C03 | hottext, 1, 2 | p11 "Teaching Grandpa" | 6 / 6 sentences |
| SK-TT1c-S06 | TT1c-C04 | mc, 1, 3 | p10 "The Borrowed Boots" | 4 / 3 |
| SK-TT1c-S07 | TT1c-C06 | mc, 1, 2 | stem: Every night, Yara packs her backpack. She puts her shoes by the door and sets her alarm. In the morning, sh... | 4 / 3 |
| SK-TT1c-S08 | TT1c-C08 | match, 2, 2 | p14 "The Card Trick" | 4 / 4 rows |
| SK-TT1c-S09 | TT1c-C09 | hottext, 2, 2 | p11 "Teaching Grandpa" | 6 / 5 sentences |
| SK-TT1c-S10 | TT1c-C10 | mc, 1, 3 | p12 "The Marble Run" | 4 / 3 |
| SK-TT1c-S11 | TT1c-C11 | ms, 2, 2 | p13 "The Little Library" | 5 / 4 |
| SK-TT1c-S12 | TT1c-C12 | dropdown, 2, 2 | stem: Odessa's neighbor, Mr. Pike, broke his arm. Every afternoon, Odessa took his trash can to the curb. She bro... | 3 + 3 / 2 + 3 |
| SK-TT1c-S13 | TT1c-C13 | mc, 1, 3 | p13 "The Little Library" | 4 / 3 |
| SK-TT1c-S14 | TT1c-C14 | ms, 2, 3 | p10 "The Borrowed Boots", p13 "The Little Library" | 5 / 5 |
| SK-TT1c-S15 | TT1c-C15 | mc, 1, 3 | p12 "The Marble Run" | 4 / 3 |

### 3.T.T.1.d (compare and contrast stories) (code 3.T.T.1.d)

In-order assignment: TT1d-P4 -> TT1d-S03; TT1d-P5 -> TT1d-S04; TT1d-C03 -> TT1d-S01; TT1d-C04 -> TT1d-S05; TT1d-C05 -> TT1d-S06; TT1d-C06 -> TT1d-S02; TT1d-C07 -> TT1d-S07; TT1d-C08 -> TT1d-S08; TT1d-C09 -> TT1d-S09; TT1d-C10 -> TT1d-S10; TT1d-C11 -> TT1d-S11; TT1d-C12 -> TT1d-S12; TT1d-C13 -> TT1d-S13; TT1d-C14 -> TT1d-S14; TT1d-C15 -> TT1d-S15.

| Id | like | Type, pts, DOK | Context | Live choices: start / after hint 3 alone (see note) |
|---|---|---|---|---|
| SK-TT1d-S04 | TT1d-P5 | mc, 1, 3 | stem: Story 1: Otis left the cap off his marker. The next day, the marker was dry, and he could not color his map... | 4 / 3 |
| SK-TT1d-S05 | TT1d-C04 | ebsr, 2, 3 | p9 "Twenty-One Days", p10 "The Birthday Card Dash" | 4 + 5 / 3 + 5 |
| SK-TT1d-S06 | TT1d-C05 | mc, 1, 2 | stem: Story 1: Alma got a new box of colored pencils. When her friend Jo asked to borrow one, Alma said no. "They... | 4 / 3 |
| SK-TT1d-S07 | TT1d-C07 | ebsr, 2, 3 | p11 "The Lantern Walk", p12 "Eight Candles" | 4 + 5 / 4 + 5 |
| SK-TT1d-S08 | TT1d-C08 | match, 2, 2 | stem: Story 1: In Mexico, Dani and his grandpa made paper flowers. Dani cut the petals. His grandpa twisted the s... | 4 / 4 rows |
| SK-TT1d-S09 | TT1d-C09 | mc, 1, 3 | stem: Story 1: In a town in Japan, Sora planted a persimmon seed. For years, she watered it every week. At last, ... | 4 / 3 |
| SK-TT1d-S10 | TT1d-C10 | mc, 1, 3 | p11 "The Lantern Walk", p12 "Eight Candles" | 4 / 3 |
| SK-TT1d-S11 | TT1d-C11 | dropdown, 2, 2 | stem: Story 1: Greta pulled her sled up the long hill. The ground was white, and her mittens were stiff with fros... | 3 + 3 / 2 + 3 |
| SK-TT1d-S12 | TT1d-C12 | hottext, 2, 2 | stem: Here are sentences from two stories about children who mend things. Hoang is on a fishing boat in Vietnam. ... | 8 / 7 lines |
| SK-TT1d-S13 | TT1d-C13 | ms, 2, 3 | stem: Story 1: In Peru, Rosa helps her aunt sell potatoes at a market. She weighs each bag and calls out the pric... | 5 / 5 |
| SK-TT1d-S14 | TT1d-C14 | mc, 1, 3 | stem: Story 1: In a town in Egypt, Salma's neighbor fixed her bike chain. The next day, she baked him a small cak... | 4 / 3 |
| SK-TT1d-S15 | TT1d-C15 | ebsr, 2, 3 | p13 "House on the Lake", p14 "Behind the Dike" | 4 + 4 / 3 + 4 |

### 3.T.SS.1.a (problem and solution in text) (code TS-PS)

In-order assignment: TSPS-P5 -> TSPS-S01; TSPS-C02 -> TSPS-S04; TSPS-C03 -> TSPS-S05; TSPS-C04 -> TSPS-S02; TSPS-C05 -> TSPS-S06; TSPS-C06 -> TSPS-S07; TSPS-C07 -> TSPS-S08; TSPS-C08 -> TSPS-S09; TSPS-C09 -> TSPS-S10; TSPS-C10 -> TSPS-S11; TSPS-C11 -> TSPS-S12; TSPS-C12 -> TSPS-S13; TSPS-C13 -> TSPS-S14; TSPS-C14 -> TSPS-S03; TSPS-C15 -> TSPS-S15.

| Id | like | Type, pts, DOK | Context | Live choices: start / after hint 3 alone (see note) |
|---|---|---|---|---|
| SK-TSPS-S04 | TSPS-C02 | mc, 1, 2 | stem: Every morning, the front steps at Isaac's house were covered in ice. First, Isaac shoveled them, but a thin... | 4 / 3 |
| SK-TSPS-S05 | TSPS-C03 | dropdown, 2, 2 | stem: Whenever the wind blew, the door of Room 5 slammed shut with a bang. Everyone jumped. Maya set a heavy book... | 3 + 3 / 2 + 3 |
| SK-TSPS-S06 | TSPS-C05 | mc, 1, 2 | stem: Nell wiped the muddy paw prints from the floor, but her dog ran in and left more. | 4 / 3 |
| SK-TSPS-S07 | TSPS-C06 | dropdown, 2, 2 | stem: Every time it rained, drops of water fell on the art room floor. Zane set out more buckets. Thea climbed a ... | 3 + 3 / 3 + 3 |
| SK-TSPS-S08 | TSPS-C07 | match, 2, 2 | stem: Every morning, the sticky notes on Tyree's bulletin board fell off. First, he pressed each note down harder... | 4 / 4 rows |
| SK-TSPS-S09 | TSPS-C08 | mc, 1, 2 | stem: The freezer in the school kitchen broke. The school picnic was in two days. All of the ice-cream cups for t... | 4 / 3 |
| SK-TSPS-S10 | TSPS-C09 | mc, 1, 3 | stem: Wren's cardboard fort fell down every time the wind blew from the left. First, she taped the corners tighte... | 4 / 3 |
| SK-TSPS-S11 | TSPS-C10 | ebsr, 2, 3 | p8 "The Slow Sink" | 4 + 4 / 3 + 4 |
| SK-TSPS-S12 | TSPS-C11 | ms, 2, 2 | p9 "Lights Out for Sea Turtles" | 5 / 4 |
| SK-TSPS-S13 | TSPS-C12 | order, 2, 2 | p9 "Lights Out for Sea Turtles" | 5 / 5 steps |
| SK-TSPS-S14 | TSPS-C13 | match, 2, 3 | p8 "The Slow Sink", p9 "Lights Out for Sea Turtles" | 4 / 3 rows |
| SK-TSPS-S15 | TSPS-C15 | mc, 1, 3 | stem: (1) The sunflower seeds in the school garden never sprouted. (2) First, the class watered the seeds twice a... | 4 / 3 |

### 3.T.C.2.a (point of view) (code 3.T.C.2.a)

In-order assignment: TC2a-C01 -> TC2a-S04; TC2a-P5 -> TC2a-S05; TC2a-C03 -> TC2a-S02; TC2a-C04 -> TC2a-S01; TC2a-C05 -> TC2a-S06; TC2a-C06 -> TC2a-S07; TC2a-C07 -> TC2a-S03; TC2a-C08 -> TC2a-S08; TC2a-C09 -> TC2a-S09; TC2a-C10 -> TC2a-S10; TC2a-C11 -> TC2a-S11; TC2a-C12 -> TC2a-S12; TC2a-C13 -> TC2a-S13; TC2a-C14 -> TC2a-S14; TC2a-C15 -> TC2a-S15.

| Id | like | Type, pts, DOK | Context | Live choices: start / after hint 3 alone (see note) |
|---|---|---|---|---|
| SK-TC2a-S04 | TC2a-C01 | ms, 2, 2 | p6 "The Orange Sweater" | 5 / 4 |
| SK-TC2a-S05 | TC2a-P5 | mc, 1, 3 | p6 "The Orange Sweater" | 4 / 3 |
| SK-TC2a-S06 | TC2a-C05 | ebsr, 2, 3 | p7 "The Substitute" | 4 + 4 / 3 + 4 |
| SK-TC2a-S07 | TC2a-C06 | ms, 2, 2 | p8 "The Tall Wall" | 5 / 4 |
| SK-TC2a-S08 | TC2a-C08 | mc, 1, 2 | p7 "The Substitute" | 4 / 3 |
| SK-TC2a-S09 | TC2a-C09 | hottext, 1, 2 | p8 "The Tall Wall" | 6 / 5 sentences |
| SK-TC2a-S10 | TC2a-C10 | mc, 1, 3 | p8 "The Tall Wall" | 4 / 3 |
| SK-TC2a-S11 | TC2a-C11 | ms, 2, 3 | p9 "Puddle Day" | 5 / 4 |
| SK-TC2a-S12 | TC2a-C12 | cr, undefined, 3 | p9 "Puddle Day" | n/a (written answer, no choices) |
| SK-TC2a-S13 | TC2a-C13 | match, 2, 2 | stem: Ollie's kite fell into the pond. "This is the worst day ever!" His dad smiled and put an arm around him. "I... | 3 / 2 rows |
| SK-TC2a-S14 | TC2a-C14 | mc, 1, 3 | stem: The new girl, Pilar, sat alone at lunch. I waved, but she only looked at her tray. "She thinks she is too g... | 4 / 3 |
| SK-TC2a-S15 | TC2a-C15 | ms, 2, 3 | stem: Mia's note: The class trip to the science museum was today. The line was long, and my feet hurt from standi... | 5 / 4 |

### 3.T.SS.2.a (figurative language) (code 3.T.SS.2.a)

In-order assignment: SS2a-P5 -> SS2a-S01; SS2a-C02 -> SS2a-S03; SS2a-C03 -> SS2a-S04; SS2a-C04 -> SS2a-S05; SS2a-C05 -> SS2a-S02; SS2a-C06 -> SS2a-S06; SS2a-C07 -> SS2a-S07; SS2a-C08 -> SS2a-S08; SS2a-C09 -> SS2a-S09; SS2a-C10 -> SS2a-S10; SS2a-C11 -> SS2a-S11; SS2a-C12 -> SS2a-S12; SS2a-C13 -> SS2a-S13; SS2a-C14 -> SS2a-S14; SS2a-C15 -> SS2a-S15.

| Id | like | Type, pts, DOK | Context | Live choices: start / after hint 3 alone (see note) |
|---|---|---|---|---|
| SK-SS2a-S04 | SS2a-C03 | mc, 1, 3 | stem: Ned walked into his new school on the first day. The hallway was as long as a football field. His classroom... | 4 / 3 |
| SK-SS2a-S05 | SS2a-C04 | ms, 2, 2 | stem: Dana wrote these sentences in her notebook after the play. | 5 / 4 |
| SK-SS2a-S06 | SS2a-C06 | mc, 1, 2 | stem: At sunrise, no wind moved across the lake. The lake was a mirror, and every pine tree on the shore showed u... | 4 / 3 |
| SK-SS2a-S07 | SS2a-C07 | ebsr, 2, 3 | p6 "Raking Leaves" | 4 + 4 / 3 + 4 |
| SK-SS2a-S08 | SS2a-C08 | ms, 2, 2 | stem: Mom blew soap bubbles on the porch. The bubbles were tiny dancers over the steps. | 5 / 4 |
| SK-SS2a-S09 | SS2a-C09 | mc, 1, 2 | stem:  | 4 / 3 |
| SK-SS2a-S10 | SS2a-C10 | hottext, 1, 2 | stem: Cleo's team won the school spelling bee. Her teacher, Mr. Lund, wrote a note home. Here are five sentences ... | 5 / 4 lines |
| SK-SS2a-S11 | SS2a-C11 | dropdown, 2, 2 | stem: Rhys watched the storm from the window. The dark clouds rolled across the sky like a herd of gray elephants. | 3 + 3 / 2 + 3 |
| SK-SS2a-S12 | SS2a-C12 | ebsr, 2, 3 | p7 "Swings for the School Yard" | 4 + 4 / 3 + 4 |
| SK-SS2a-S13 | SS2a-C13 | mc, 1, 3 | stem: Wes got his first library card today. When he walked in, he saw rows and rows of books. The library was a t... | 4 / 3 |
| SK-SS2a-S14 | SS2a-C14 | ms, 2, 3 | stem: Sentence A: Jules let the cat out of the bag about the surprise party. Sentence B: Jules told the secret ab... | 5 / 4 |
| SK-SS2a-S15 | SS2a-C15 | match, 2, 2 | stem: Room 4 wrote about the day the fans broke at their school. "On Monday, our classroom was a furnace. We were... | 3 / 2 rows |

### 3.T.T.4.a (poem structure) (code 3.T.T.4.a)

In-order assignment: TT4a-C01 -> TT4a-S01; TT4a-C02 -> TT4a-S02; TT4a-C03 -> TT4a-S04; TT4a-C04 -> TT4a-S05; TT4a-C05 -> TT4a-S06; TT4a-C06 -> TT4a-S07; TT4a-C07 -> TT4a-S08; TT4a-C08 -> TT4a-S09; TT4a-C09 -> TT4a-S10; TT4a-C10 -> TT4a-S11; TT4a-C11 -> TT4a-S12; TT4a-C12 -> TT4a-S03; TT4a-C13 -> TT4a-S13; TT4a-C14 -> TT4a-S14; TT4a-C15 -> TT4a-S15.

| Id | like | Type, pts, DOK | Context | Live choices: start / after hint 3 alone (see note) |
|---|---|---|---|---|
| SK-TT4a-S04 | TT4a-C03 | ms, 2, 1 | stem: Stanza 1: Night comes down the hill. The lamps blink on, one by one. The town grows still. Stanza 2: The ba... | 5 / 4 |
| SK-TT4a-S05 | TT4a-C04 | hottext, 1, 2 | stem: Read this poem about tying shoes. I cross the laces, loop them through, And pull them snug, the way you do.... | 5 / 5 lines |
| SK-TT4a-S06 | TT4a-C05 | hottext, 1, 2 | stem: Here is one stanza from a poem about a rainy evening. The kettle sings. The kitchen's warm. I pour my tea i... | 5 / 4 lines |
| SK-TT4a-S07 | TT4a-C06 | mc, 1, 3 | stem: Here is stanza 1 of a poem called "Yo-Yo." My yo-yo drops down to the floor. It zips right back, then down ... | 4 / 3 |
| SK-TT4a-S08 | TT4a-C07 | hottext, 2, 2 | stem: Here are five lines from a poem about a long car ride. | 5 / 5 lines |
| SK-TT4a-S09 | TT4a-C08 | ebsr, 2, 3 | p9 "The Ice Cream Truck" | 4 + 4 / 3 + 4 |
| SK-TT4a-S10 | TT4a-C09 | mc, 1, 3 | stem: Here is stanza 2 of a poem called "The Scooter Ride." I grip the bars and push off slow. The scooter picks ... | 4 / 4 |
| SK-TT4a-S11 | TT4a-C10 | mc, 1, 3 | stem: Poem A: The Cat Purr, purr, purr by the fire, Purr, purr, purr in the sun. The cat stretches out on the rug... | 4 / 3 |
| SK-TT4a-S12 | TT4a-C11 | ms, 2, 2 | stem: Stanza 1: Out by the fence, the dirt is deep. The puppy sniffs and starts to scratch. His paws fly fast, hi... | 5 / 4 |
| SK-TT4a-S13 | TT4a-C13 | mc, 1, 3 | stem: Here is a stanza from a poem. The sun comes up behind the hill. The roosters crow and call. I jump out of m... | 4 / 4 |
| SK-TT4a-S14 | TT4a-C14 | dropdown, 2, 2 | stem: Stanza 1: In August, the pear tree's leaves are thick. The fruit hangs soft and sweet. A squirrel naps alon... | 3 + 3 / 3 + 3 |
| SK-TT4a-S15 | TT4a-C15 | mc, 1, 3 | stem: Stanza 1: The candle flame is tall and bright. It lights the whole dark room. I watch the dancing shadows t... | 4 / 3 |

**Note on the live-choice column (corrected after review):** the earlier version of this log said hints 1 and 2 rule out nothing. That was wrong: in about two dozen items they steer a child away from a choice or toward a region of the passage. The column now shows only what I can state firmly: the number of choices at the start, and the number left after hint 3 alone. I re-read every hint 3 by hand after the review. A hint 3 now settles at most one choice (one option, one blank option, one row, one step, or one Part A choice with a pointer to match Part B). Hints that settled two (TT1a-S04, TT4a-S11) were rewritten in this pass. For hints 1 and 2, the reviewer's method (section 6 of SIM-1-review.md) is the better count; I did not keep a per-item ladder figure because I could not make it reliable. Treat a ladder count as a reviewer job.

## 2b. Fixes after review

Every MUST and the main SHOULDs in `SIM-1-review.md` were addressed. Nothing outside the eight named blocks was touched.

**MUST 1, wrong key.** TSPS-S07 slot 1 answer index is now 0 ("find out where the water gets in"). I then wrote `scratchpad/sim1/audit.js` and `audit2.js`, which print each item's keyed choice next to its why/how/hints, and read the output for all 96+ new items. Every key agrees. Three match rows (TT1a-S09, TSPS-S14, TC2a-S13) looked wrong only because the column label was paraphrased in the text; I read them and they are correct.

**MUST 2, hints that give the answer or leave only the key.** Rewritten: TT1a-S08, TT1b-S14, TT1d-S07, S09, S12, TSPS-S04, S10, TC2a-S06, S07, S13, TT4a-S12, S13. Each hint 2 now points to a region without naming the key's paragraph or sentence, and each hint 3 settles one choice.

**MUST 3, TT4a-S08.** The false hint ("The" twice) is gone. The options were reworded, and hint and how now match the lines.

**MUST 4, TC2a-S09.** Rebuilt as a hottext on the new p8 that asks for one specific thing (the sentence that shows Lio wants to be like his sister). Key `p8:7:4`.

**MUST 5, near-copies reworked into fresh applications.** TT4a-S04, S06, S07, S11, S12, S15; TSPS-S06, S14, S15; TC2a-S06, S07, S09, S10, S13, S14; SS2a-S09, S14. TC2a p8 (a reskin of the haircut story p4) is replaced by "The Tall Wall" (Ines and Lio, two parts). After the rewrites I re-ran the reviewer's `sim.js` and `opt.js`. Text similarity to the `like` core item is at or below 0.21 for all of these. Four items still sit just above 0.21 and were not reworked: TC2a-S15 0.26, TT4a-S10 0.25, SS2a-S05 0.24; I judged them acceptable but a reviewer may disagree. No new item shares more than one option with its core item (the last two offenders, TT4a-S04 and TT1b-S06, were reworded).

**MUST 6, facts.** 3.T.T.1.d p9: eggs are now turned three times a day. 3.T.T.1.d p11: the unsupported reason for round lanterns was removed (Grandfather now says the lanterns are for the moon and the family carries small lights beside it). SS2a-S14: the "fog forms when warm air meets cool air" sentence is gone with the rebuild (the new item is about the idiom "let the cat out of the bag"). 3.T.C.2.a p9: the robins line now reads "I tilt my head. I look and hear." so the poem does not claim a fact about how robins find worms.

**SHOULDs done.** Hint 3 re-read and tightened (TT1a-S04, TT4a-S11); TT1a-S13 rebuilt on p7 paragraph 1 and TT1a-S15 on a new context (Jonah at a train station); TT1b-S07 hint 1 aligned with the key; TT1b-S13 and S15 prompts trimmed; TT1c-S09, S11, S12, S14 hints and one distractor tightened; TT1d-S05, S10, S11, S13, S15 reworked or reworded; TSPS-S05, S09, S11 hint 3; TC2a-S04, S11; SS2a-S08, S11, S12; TT4a-S08, S13 hint 3; S04 and TT1b-S06 options reworded to share no more than one option with their core item.

**SHOULDs not done.** TT1b-S10 distractor, TT1c-S05 readability margin, TT1c-S15, the TT1d-S06 vs C05 overlap note, TT1a-S05/S09/S14/S15 notes, TT4a-S10 and S14 closeness to the core, and the S05 "turn" teach note. They are small and none blocks the gates. SS2a-S05 wording was shortened but is still at 0.24.

**Gates after the fixes.** check-content PASS (0 failures, 9 warnings, none in a new item); check-writing 0 failures, 0 warnings; check-instructional-copy 28 assertions passed; readability: no passage in the eight lessons above FK 4.5 (the new p8 and the edited p11 included); `greedy.js` missing(0) for all lessons with 15 similar items; the browser smoke test (`smoke.py`) passed for all eight lessons: 15 of 15 core items offered their own similar item, no duplicates, no page errors. Server stopped.

## 2c. Needs blind re-solve

A fresh solver who has not read this log should solve these without seeing keys. All were rebuilt or had their keys or hints changed after the review.

- **Rebuilt contexts or keys:** TT1a-S13, S15; TT1b-S06; TT1d-S10, S11; TSPS-S06, S14, S15; TC2a-S06, S07, S09, S10, S13, S14 and the new passage p8; SS2a-S09, S14; TT4a-S04, S06, S07, S11, S12, S15.
- **Key fixed or reworded:** TSPS-S07 (slot 1), TT1c-S14, TT1d-S12, TT4a-S08, SS2a-S08.
- **Hints changed (check the ladder and that no hint gives the answer):** TT1a-S04, S07, S08; TT1b-S07, S08, S14; TT1c-S09, S11, S12; TT1d-S05, S07, S09, S12, S13, S15; TSPS-S04, S05, S09, S10, S11; TC2a-S04, S11; SS2a-S12; TT4a-S13.
- **Passages changed (check facts and readability):** 3.T.T.1.d p9 (eggs) and p11 (Grandfather); 3.T.C.2.a p8 (new) and p9 (robin line); 3.T.T.4.a p9 ("I'll save my coins from every day"; TT4a-S09 Part B key updated to match).

Names added in this pass (grep found no earlier use except where noted): Jonah, Ollie, Pilar, Lio, Ines, Jules, Nell (two earlier hits, accepted), Mr. Hallam.

## 2d. Fixes after re-review

Source: `SIM-1-rereview.md`. All four MUSTs and the SHOULDs listed by the coordinator were addressed. Nothing outside the eight named blocks was touched.

**MUST 1, TSPS-S14 row 2.** The row "Something is added to stop the problem from coming back" is gone. Row 1 is now "A part is added after the fix to catch any new clump" (only The Slow Sink: the screen over the drain). Row 2 is now "Someone explains the real cause after the first tries fail" (both texts: Mr. Okon says something blocks the pipe; the scientists explain why one hotel was not enough). Rows 3 and 4 are unchanged. Hint 3, how and why were rewritten to match, so the lamp shields are no longer called an "addition".

**MUST 2, TT1a-S12.** Rebuilt on p6 ("The Fire Tower") instead of p7: Part A asks what Amos does because of what Naomi says in paragraph 4. Key: counts the signs out loud as he climbs, so he keeps going. Part B key: "Amos read each number out loud, and his voice got a little louder every time." The distractors are new (turns back, waits on the fourth step, races ahead; the rail grab, the painted signs, the sunlight at the top). Prompt wording, hints and how all differ from C12. Measured similarity to C12: 0.14 (was 0.24).

**MUST 3, TC2a-S15.** Rebuilt as a "what do their views have in common" task about two notes on a science-museum trip (Mia and Theo). Keys: both found the long line hard to wait in; both liked the space room best. Distractors: a plan that belongs to one writer, a false difference, a swapped detail. Hint 2 names no topics. Similarity to C15: 0.16 (was 0.26).

**MUST 4, TT4a-S10.** Replaced by a new stanza ("The Scooter Ride") and a new question about why the last line is one word long. The shared distractor and the C09 prompt wording are gone. Similarity to C09: 0.16 (was 0.25); no shared option.

**SHOULDs done.**

- TT1d-S07: Part A options and both prompts reworded ("Both girls ...", new distractors); hint 3 changed. Similarity 0.19 (was 0.23).
- TT1d-S15: the "big city" distractor replaced by a swapped-detail one; the prompt is reworded. Similarity is below the ceiling.
- TC2a-S14: prompt reworded (0.23 before; now under 0.21).
- Part B distractors moved closer to the key region: SS2a-S12 (now includes "Tess sold painted rocks ... earned five dollars"), SS2a-S07 ("The sun sank low behind the houses"), TT1b-S12 ("Grandpa came in and listened"; hint 2 no longer says "after he is asked for help"), TT4a-S09 ("I sit and sigh by the garden wall" from stanza 3).
- TT4a-S08: one wrong line now repeats a word for a different reason ("Honk! Honk! A truck zooms past."); hint 3, how and why changed.
- TSPS-S07: hint 3 no longer gives slot 0.
- TT1a-S09: the vague glint row is replaced by a clear location clue ("I may have knelt down by the plants").
- TT1d-S08: row 4 is now "The finished decorations are put on display."
- TC2a-S13: the speaker tags are removed from the stem, so the child has to use the sentences around each quote.
- TT1a-S06: hint 3 no longer sorts the remaining choices into key and not-key.
- TT1d-S14: hint 2 reworded, and two distractors changed so that one story has a helper who is not thanked and one has thanks for something that is not help.
- TC2a-S09: hint 3 no longer removes the nearest rival (it removes Ines's own advice).
- TT4a-S14: the stanza order is no longer before, during, after: it now goes July, November, March, with options about fruit, fallen leaves and small buds.
- SS2a-S05 (0.24): rebuilt as a metaphor item with a simile trap; hint 2 reworded after I saw that its first draft left only the two keys. Similarity 0.18.
- TT1c-S11: one distractor is now an event that follows the box but is not caused by it (Mr. Alder walks his dog past the fence every day); hint 2 reworded.
- TT4a-S04 and TT1b-S06 options reworded to share no more than one option with their core item.
- 3.T.T.1.d p11: the lantern is now "a red paper lantern shaped like a star", as the sources say the commonest Mid-Autumn lantern is a star. Grandfather's reason is a family's reason, not a claim about the custom's origin.

**SHOULDs not done.** TC2a-S04/S05/S08 use "he" for a narrator whose gender is never stated; TC2a-S04's key says "when he opens it"; TT1b-S10 distractor; TSPS-S10 and S12 weak distractors (NOTE); TT4a-S13 hints repeat the same method (NOTE); TT1d-S05 Part B quote punctuation in `how` (NOTE); TT1d-S11 slots share two options (NOTE).

**Gate note.** One `check-content` run in this pass showed a failure in `3.T.RA.1.c` ("learn 1 needs 2-4 steps"). That lesson belongs to another agent; it passed again by the next run. The final run printed PASS (0 failures, 9 warnings, none in a new item).

## 2e. Fixes after the final blind re-solve

Source: the "Final blind re-solve" section of `SIM-1-rereview.md` (24 of 24 agreed; one MUST).

**MUST, TT4a-S14.** Rebuilt so that exactly one answer is defensible. Stanza 3 now reads "In March, the pear tree's twigs are brown. / The buds are small and tight. / A robin hops from branch to branch / And sings in the cool light." (no "branches bare" fragment). The options are now "full of fruit", "covered in snow" and "only small buds have grown"; "after the leaves have fallen" is gone from the slots because stanza 3 could be read as that stage. Snow is not in the poem. The keys sit in different positions from C14 (slot 1 is the second option, slot 2 is the first). Hint 2 now says "the month", hint 3 says "Stanza 3 gives the month and tells what is on the twigs. Match that to each choice" and removes nothing. The misconception no longer says the stanzas skip around the year; it warns against picking the stanza that sounds most like winter. The how and why were rewritten to match.

**SHOULDs done.**

- TSPS-S14: row 2 no longer repeats C13's row concepts. It is now "The fix removes or changes the cause of the problem" (both texts: the clump is cleared, the lights are changed). The how and why were rewritten.
- TSPS-S07: the key is now "fix the gap where the roof meets the wall", because Thea has already seen the gap. Hint 3 completes slot 0 ("Zane's plan is the one he carries out on the floor") and asks about slot 1. The prompt is reworded ("each have a plan for the leak"). How and why match.
- TT4a-S09: a different Part A question ("What does the speaker do in stanza 3 that is different from stanza 2?") with four new options; the key is "The speaker decides to save the coins." The Part B line is unchanged, the Part B prompt is reworded, hint 3 is new, and how no longer says "tomorrow" (the poem says every day).
- TT1a-S15: the "writer wants to show, not tell" frame is gone; Jonah's teacher says she cannot picture the crowd. Prompt, hint 1 and hint 2 reworded.
- TT1d-S08: row 1 now says "part of the activity" (neither story names a holiday), and row 4 is "The finished decorations end up in the family's home."
- TC2a-S15: Mia's note now says the space room was "the best part of the whole day" and Theo's says it was "my favorite thing", so the key "both liked the space room best" is supported.
- Notes softened: 3.T.T.1.d p11 now says "a paper lantern shaped like a star" (no colour), and p14 says Pieter's father "often" checked the dike (not "every week").

**Not done.** TSPS-S10 and S12 weak distractors; TT1c-S11 still has no distractor that follows the box and is not caused by it other than the dog-walking event; SS2a-S05 still sorts to the two keys by hint 3; TT4a-S08's prompt still follows C07's frame; TT4a-S10 hint 3 states the scooter stops; TC2a-S04/S05/S08 "he" for an unnamed narrator.

**Gates.** `check-content` prints three failures, all in 3.T.T.4.b (learn 1 step count; two Part B quotes in core C13). That lesson is another agent's work in the same file, T-T34.js, and none of the failures is in my blocks. Before the other agent's change the run printed PASS (0 failures, 9 warnings). check-writing 0 failures, 0 warnings; check-instructional-copy 28 assertions passed; no passage in my lessons above FK 4.5; `greedy.js` missing(0) for all lessons; browser smoke test ALL OK for all eight lessons (15 of 15 core items each offered its own similar item, no repeats, no errors); the test server is stopped. Similarity measured again for all 96 items: only TC2a-S12 (0.28, the written-response item) is above 0.21; TT1a-S11 is 0.21; no new item shares more than one option with its core item.

**Needs blind re-solve (final pass).** TT4a-S14 (rebuilt); TT4a-S09 (new Part A, key, hint 3); TSPS-S07 (slot 1 key); TSPS-S14 (row 2); TT1a-S15 (stem and prompt); TT1d-S08 (rows 1 and 4); TC2a-S15 (both notes); 3.T.T.1.d p11 and p14 (wording only).

## 2f. Fixes after the sweep re-solve

Source: the "Sweep: last edits" section of `SIM-1-rereview.md` (12 of 12 keys agreed; two MUSTs). This section supersedes 2e for the items named here.

**MUST 1, TT1d-S08.** Row 4 ("The finished decorations end up in the family's home") was keyed Both but neither story said where the decorations were. Both stories now name the place: Story 1 "... on a shelf in the living room", Story 2 "... on the tree in their living room". The how and why quote those places. Similarity to C08 is 0.14.

**MUST 2, TT1a-S11.** Rebuilt with a different frame: a choose-two item ("Which TWO statements about Mr. Orr's words are true?") about a librarian and a boy stuck on a puzzle. The text is no longer C11's template, the prompt is new, the keys sit at positions 2 and 4, and the distractors are plain false statements. Similarity to C11 is 0.10 (was 0.225); no shared option. Hand count: start 5, explicit 4 (hint 3 removes the choice about Milo leaving the table), ladder 3.

**SHOULDs done.**

- TT4a-S10: new prompt ("What does the one-word last line do for this stanza?"); hint 3 now reads "Read the stanza out loud and listen to how the last line sounds next to the lines before it. The poem does not say the ride lasts all day, so one choice can go."; the why no longer says "long, quick lines".
- TT4a-S08: the prompt says "lasts a long time", so the key line ("The road goes on, and on, and on.") no longer echoes it. Hint 3 asks whether the thing described keeps going and does not name the Honk line.
- TT4a-S09: rebuilt around stanza 2: "What does stanza 2 show that stanza 1 and stanza 3 do not?" Key: the speaker getting the treat and eating it fast. Part B key: "I lick it fast, and then it's gone." Every Part A distractor comes from another stanza. Hint 1 is a strategy, not a location. The forced poem line is now "I'll save my coins for another day".
- TT4a-S14: now asks about stanzas 2 and 3 with different option lists in the two blanks (key positions differ from C14), and the "snow" distractor is replaced by "leaves turning bright colors". The tree's fruit stanza is set in August (pears ripen in late summer), not July.
- TSPS-S14: the "clump" row is replaced by a structural one: "Someone has to take something apart to find the cause" (only The Slow Sink: Mr. Okon unscrews the pipe). Hint 3, how and why changed.
- TSPS-S07: Thea now says "We should fix that gap" in the story, so her plan is stated; the two silly distractors are replaced by "wait for the rain to stop".
- TC2a-S15: Mia's note says her feet hurt "from standing", and the why now says both found the wait hard (Mia says the line was long and her feet hurt; Theo says he got tired waiting) and no longer says Mia said "tired".
- Sources: I could not confirm a source for the pear-harvest month or for an "ofrenda" tradition, so I softened both. The pear item no longer names a harvest month beyond the stanza's own details, and Story 1 of TT1d-S08 does not name a holiday or tradition (paper flowers by a photo on a shelf in the living room).

**Not done.** TC2a-S15 keeps DOK 3 (a reviewer note suggests DOK 2); TSPS-S14 row 4 "more than one try" is unchanged; TT4a-S14's `misconception` is generic by design.

**Gates.** `check-content` PASS (0 failures, 9 warnings, none in a new item); check-writing 0 failures; check-instructional-copy 28 assertions passed; no passage in my lessons above FK 4.5; `greedy.js` missing(0) for all lessons; browser smoke test ALL OK (15 of 15 core items offered their own similar item in all eight lessons); the test server was stopped by its process id.

**Needs blind re-solve (sweep pass).** TT1a-S11 (rebuilt); TT4a-S09 (rebuilt); TT4a-S14 (new slots); TT4a-S08 and TT4a-S10 (prompt and hint 3); TSPS-S14 (row 1); TSPS-S07 (stem and distractors); TT1d-S08 (both stories and row 4); TC2a-S15 (Mia's note and the why); the p9 poem line in 3.T.T.4.a.

### Similarity, measured for every new item

I ran the reviewer's word-set Jaccard script (`simrev/sim.js`) on all 96 new items against the core item named in `like`, on the final data. Result: **every new item is at or below 0.21 except one**, TC2a-S12 (0.28). That one is the constructed-response item, which shares its instruction with C12 by design; the re-review accepted it. After the last pass (section 2f) the highest figures are 0.20 for TT1c-S13, TSPS-S04, TSPS-S13, SS2a-S10 and TT4a-S15; no other new item is above 0.20 apart from TC2a-S12. The earlier log said that all near-copy rewrites were at or below 0.21 except three items. That was wrong, and the figures here replace it. Shared options with the core item (`opt.js`): at most one in every new item; items that share exactly one: TT1d-S05, TT1d-S11, SS2a-S14.

### Hand-counted live choices for the items changed in this pass

Columns: start / explicit (after what hint 3 states) / ladder (after hints 1 and 2 are followed literally). For two-part or two-blank items the figures are Part A + Part B or blank 1 + blank 2. The ladder figures are my judgement of what the hints leave; where the item's own definition partitions the choices (for example, "words that repeat"), hint 1 or 2 narrows them. For the items I did not change in this pass, the re-reviewer's hand counts are the better source (section 4 of `SIM-1-rereview.md`); I read the hints again and have no counts that differ.

| Item | Start | Explicit | Ladder | Note |
|---|---|---|---|---|
| TSPS-S14 | 3 per row x 4 | one row completed + 3 per row | 3 per row | Hint 3 completes the take-something-apart row |
| TSPS-S07 | 3 + 3 | 1 + 3 | 1 + 1 | Slot 0 is completed by hint 3; Thea now says "We should fix that gap" |
| TT1a-S12 | 4 + 4 | 3 + 4 | 3 + 3 | Hint 3 removes the turn-back choice in Part A only |
| TT1a-S09 | 3 per row x 4 | 3 per row | 2 per row | Hint 2 asks what Kemi knows or does next |
| TT1a-S06 | 4 | 3 | 2 | Hint 1 asks which sentence paints the shop |
| TT1b-S12 | 4 + 4 | 3 + 4 | 3 + 2 | Hint 2 points to Grandpa's lines; two Grandpa sentences now sit in Part B |
| TT1c-S11 | 5 | 4 | 3 | The dog-walking event is a live trap |
| TT1d-S07 | 4 + 5 | 3 + 5 | 3 + 4 | Hint 2 points to the last three sentences of each story |
| TT1d-S08 | 3 per row x 4 | 3 per row, one row settled | 3 per row | Hints 1 and 2 do not narrow |
| TT1d-S14 | 4 | 3 | 3 | The ladder keeps the key, the unthanked helper and the joke |
| TT1d-S15 | 4 + 4 | 3 + 4 | 4 + 2 | Hint 2 points Part B to sentences about the home |
| TC2a-S09 | 6 | 5 | 2 | Hint 1 limits it to what Lio does; hint 2 to the last paragraph |
| TC2a-S13 | 4 columns x 3 rows | 3 columns | 3 | Speaker tags are gone; the sentences around each quote decide it |
| TC2a-S14 | 4 | 3 | 3 | Hint 2 points to what Pilar's body does |
| TC2a-S15 | 5 | 4 | 3 | Hint 2 asks for opinions found in both notes |
| TT4a-S08 | 5 | 5 | 2 | Hint 3 asks which repeats fit something that keeps going; the Honk line is the live rival |
| TT4a-S09 | 4 + 4 | 3 + 4 | 1 + 2 | Hint 2 asks which event belongs only in the middle stanza |
| TT4a-S10 | 4 | 3 | 2 | Hint 2 asks the child to listen to the last line |
| TT4a-S14 | 3 + 3 | 3 + 3 | 3 + 1 | Hint 3 removes nothing; slot 2 narrows once the twigs are read |
| SS2a-S05 | 5 | 4 | 3 | Hint 2 asks which sentences compare, so the three comparisons stay live |
| SS2a-S07 | 4 + 4 | 3 + 4 | 3 + 3 | Two Part B lines now tempt the wait-for-the-day choice |
| SS2a-S12 | 4 + 4 | 3 + 4 | 3 + 2 | Two Part B lines now contain an amount |

### Needs blind re-solve (after the re-review)

- **Rebuilt:** TT1a-S12; TC2a-S15; TT4a-S10; TT4a-S14; SS2a-S05.
- **Key, rows or options changed:** TSPS-S14 (rows 1 and 2); TT1a-S09 (row 3); TT1d-S07 (Part A options and prompts); TT1d-S08 (row 4); TT1d-S14 (two distractors); TT1d-S15 (one distractor and the prompt); TT1c-S11 (one distractor); TT1b-S12, SS2a-S07, SS2a-S12, TT4a-S09 (one Part B distractor each); TT4a-S08 (one wrong line); TC2a-S13 (the stem).
- **Hints only:** TSPS-S07 (hint 3); TT1a-S06 (hint 3); TC2a-S09 (hint 3); TC2a-S14 (prompt).
- **Passage:** 3.T.T.1.d p11 (the lantern is a red star).
- **Names added in this pass:** Mia, Theo (science-museum notes). The "sled" idea for TT4a-S10 collided with an older passage, so I switched to a scooter; "scooter" appears in other lessons only as an object in different skills.

## 3. Topic and name search

Before writing each context I ran a whole-word, case-insensitive `grep -rwi` over `js/data` for the proper names, the key figure of speech or fact, and the setting, then renamed or replaced every hit that already carried the same key fact in another lesson. Renames made: Big Dipper -> brightest star; Ms. Lowe -> Ms. Haley; Eli -> Emre; Nico -> Idris; Hector -> Kiran; Diwali -> Hanukkah; waxed floor -> bean-bag wind; fish tank -> art-room drip; piano -> freezer; Mr. Cole -> Mr. Gage; bus driver -> dentist; Pearl/Kemp/Dunn -> Thea/Okon/Rudd; "under the weather", "hold your horses" (both already taught in 3.T.SS.2.a), kickball, rabbits in a garden, aquarium and octopus, lemonade stand, oak tree and market -> replaced with new settings (raking leaves and "call it a day"; swings and "a drop in the bucket"; school play; garage sale; ice cream truck; pear tree; harbor). New names with zero hits at the time: Ned, Dana (stem only), Ozzie, Tess, Ms. Doyle, Felix, Rhys, Wes, Cleo, Mr. Lund, Ms. Lane. Phrases with zero hits: "as long as a football field", "over the moon", "furnace", "in the same boat", "treasure chest", "call it a day", "a drop in the bucket", "rained buckets".

## 4. Not done / notes

- No item was reviewed by me; all new passages and items carry the comment `NEEDS INDEPENDENT REVIEW` in the data file.
- Poem passages (p9 in T-T34) are not measured for readability. The other new TT4a items put the poem in the item stem, as the older S01 to S03 do.
- The practice-own.py suite was not run (it covers the whole site and takes long); I ran only my own in-order smoke test. If the engine rule changes to offer used similar items again (practice-own.py N.1/N.2 mentions a 2026-10-23 lead decision), each core item still has its own item, so nothing here depends on the old rule.
- Helper scripts are in the scratchpad (`scratchpad/sim1/`): greedy.js, fk.py, ins3.py, smoke.py, genlog.js.
