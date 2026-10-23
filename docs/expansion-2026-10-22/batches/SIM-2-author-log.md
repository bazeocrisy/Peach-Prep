# SIM-2 author log: similar-item backfill

Date: 2026-10-23. Author: content author agent (SIM-2). NEEDS INDEPENDENT REVIEW (I did not review my own work).

## What was done
- Added 12 new `similar` items (S04 to S15) to each of 9 lessons, 108 items in all, so every one of the 15 core items now has its own `similar` item with a single `like`. Existing items, keys, hints, passages and teaching were not changed.
- Lessons and files: 3.T.T.2.a, 3.T.T.2.b, 3.T.T.2.c (js/data/lessons/T-T2.js); TS-SEQ, TS-DESC, TS-CE, TS-CC (T-TS.js); 3.T.SS.1.a (T-SS.js); 3.T.C.1.b (T-C.js). Only those blocks were edited.
- Each lesson now has 15 similar items (the cap). Old items that name two core items (for example S02 in SS1a and S03 in TC1b) stay; my items use one `like` each, so the engine never runs out of a fresh one when a child walks the core items in order.
- New passages (60 to 180 words, FK at most 4.5) were added to 3.T.T.2.a (p6 to p11), 3.T.T.2.b (p6 to p8) and 3.T.T.2.c (p11 to p12). The other lessons have inline stems and no new passages. Stems of 59 to 180 words; table-of-contents and diagram stems are described inline in words (no new figures or images).

## Gates (run at the end)
- `node verification/check-content.js --all`: 0 failures in my nine lessons and no similar-coverage warnings for them. The full run currently shows 3 failures that are not mine (see Not done).
- `python3 verification/readability.py`: all new passages FK 4.5 or lower (highest 4.4). Inline stems were checked with a heuristic copy of the same formula (pre.js); table-of-contents stems (SS1a S05, S15) read high on that heuristic because their lines have no end marks, as the core table-of-contents items do.
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- Greedy walk in order (simulation of the engine rule): 0 core items without a fresh similar item in all nine lessons.
- Browser smoke test (server on port 8832, stopped afterwards; page width 390): for each of the nine lessons I walked all 15 core items in order in one sitting (sets y, y2, y3), answered each correctly, and checked that Try a Similar Question appears, opens an item whose `like` names that core item, and can be answered. Result: 15 of 15 in every lesson, no page errors.

## Topic search
Each topic below was searched across js/data (whole-word match, excluding my own items). Result: no use elsewhere, except these incidental mentions, which share a word but not the key fact: seal (elephant seals in SK-RA2a-S07, seals on sea ice in SK-TT2c-S02; my SK-TSCC-S06 is about ear flaps and flippers), swing set (a playground phrase in SK-TSDESC-C15 and a passage in 3.T.T.3.c; my SK-TSCC-S11 is about clue words), sailboat (a writer's boat in SK-TC2c-C02), island/soup/picnic/gate/whistle/school start/dry summer (everyday words in other items). One real overlap was found and fixed: SK-TSSEQ-S12 first used an 1880 mill that grinds corn, the same as SK-RA1a-S09, so I rewrote it as a railroad depot. The review found three more (hot-air balloon, dog panting, worm bin); they are fixed below.

## Items
For each item: the choices still possible after the clue/hint 1, hint 2 and hint 3 (the hint ladder never leaves only the key). `like` is the single core item.


### 3.T.T.2.a

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TT2a-S04 | SK-TT2a-P7 | dropdown/2/2 | what a caption and labels each tell | Mia's hermit crab poster drawing (described in words) | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: the parts / the two claws; slot 2: all 3 | hermit crab |
| SK-TT2a-S05 | SK-TT2a-C03 | dropdown/1/2 | implied main idea of a paragraph | workers at the Maple Street ice rink before it opens | all 4 / all 4 / workers getting the rink ready / a skating lesson / people renting skates | ice rink, skates |
| SK-TT2a-S06 | SK-TT2a-C05 | mc/1/3 | why a true detail is not a key detail | Coach Ana's free-throw tips | all 4 / all 4 / key / not a fact / free throws only for tall players | free throw |
| SK-TT2a-S07 | SK-TT2a-C06 | hottext/2/2 | find the two sentences that state the main idea of a whole article with headings | tarsier article (p6) | all 6 / all 6 (two are at the start and two at the end) / the two keys / head turning / leaping / sleeping in the day | tarsier |
| SK-TT2a-S08 | SK-TT2a-P3 | ms/2/2 | choose two details that support a stated idea | a mother gorilla caring for her baby | all 5 / all 5 / nest / carrying / silverbacks / where gorillas live | gorilla |
| SK-TT2a-S09 | SK-TT2a-C08 | mc/1/3 | why a fact is set apart in a text box | which fact fits the Did You Know box (bald eagle nest article, new p7) | 4 / 4 / 3 (hint 3 rules out the grass-and-moss fact) | bald eagle, eagle nest |
| SK-TT2a-S10 | SK-TT2a-C09 | mc/1/3 | use a diagram with the words to explain why something is placed where it is | Nia's tree house drawing (described in words) | all 4 / all 4 / key / Nia rides in the bucket / bucket far from window | tree house, treehouse, pulley |
| SK-TT2a-S11 | SK-TT2a-C10 | dropdown/2/3 | decide which section a new sentence belongs in and whether it is a key detail | hippo article (p8) | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: Cooling Off / Did You Know?; slot 2: all 3 | hippo |
| SK-TT2a-S12 | SK-TT2a-C11 | hottext/1/2 | choose the one sentence that states the main idea of the whole article | turkey vulture article (p9) | all 6 / all 6 / key / bare head / no feathers / smelling from far away / committee box (the first sentence is ruled out) | vulture |
| SK-TT2a-S13 | SK-TT2a-C12 | mc/1/3 | explain why a text-box fact is not the main idea | why a detail from one section is not the main idea (lobster article p10) | 4 / 4 / 3 (hint 3 rules out the text-box choice) | lobster |
| SK-TT2a-S14 | SK-TT2a-C14 | dropdown/1/2 | choose a caption that fits the whole picture | Lena's drum set drawing for a report (described in words) | all 3 / all 3 / the parts of a drum set / a cymbal and a snare drum | drum set, cymbal |
| SK-TT2a-S15 | SK-TT2a-P5 | ebsr/2/3 | main idea of one paragraph and two sentences that support it | kiwi bird article (p11) | Part A: all 4; Part B: all 5 / Part A: all 4; Part B: all 5 / Part A: key / big egg; Part B: all 5 | kiwi |

### 3.T.T.2.b

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TT2b-S04 | SK-TT2b-P4 | dropdown/2/2 | choose so or because to connect a cause and an effect | signal words for cause and effect (kettle whistle): As a result / Because of this | slot 1: 3 / slot 1: 3 / slot 1: 3; slot 2: 3 / 3 / 2 (hint 3 rules out Meanwhile) | kettle, whistle |
| SK-TT2b-S05 | SK-TT2b-C02 | hottext/1/2 | find the stage that comes just before a named stage in a process | cacao beans to chocolate (p6) | all 6 / all 6 / key / spread in the sun / under the leaves / scooping beans / grinding (shells is ruled out) | cacao, chocolate |
| SK-TT2b-S06 | SK-TT2b-C03 | ms/2/1 | pick the time-order words in a paragraph | life cycle of a cicada | all 6 / all 6 / three keys / digs down / from tree roots | cicada |
| SK-TT2b-S07 | SK-TT2b-C06 | order/2/2 | put historical events in order | building the Golden Gate Bridge | all orders / all orders / ferry first and crowds last are fixed by the dates; the middle three still to place, with towers before cables settled | golden gate |
| SK-TT2b-S08 | SK-TT2b-C07 | ebsr/2/2 | find a cause in a series of historical events and the sentence that shows it | Henry Ford and the Model T (p7) | Part A: all 4; Part B: all 4 / Part A: all 4; Part B: all 4 (paragraphs 3-5 hold three Part B choices) / Part A: key / bigger and fancier / workers did many jobs; Part B: all 4 | model t, henry ford, assembly line |
| SK-TT2b-S09 | SK-TT2b-C08 | match/2/2 | sort historical events before or after a key event | before or after the first engine flight (Wright brothers) | all rows open / all rows open / gliders row settled (before), 3 rows open | wright, kitty hawk |
| SK-TT2b-S10 | SK-TT2b-C09 | mc/1/3 | explain why the author tells about doubt in a series of events | the Erie Canal and 'Clinton's Ditch' | all 4 / all 4 / key / people liked muddy roads better / workers did not want to dig | erie canal, clinton |
| SK-TT2b-S11 | SK-TT2b-C10 | hottext/1/2 | find the sentence that shows the cause of an effect the author names | paying for the Statue of Liberty's base (p8) | all 6 / all 6 (paragraphs 3 and 4 hold four targets) / key / ran out of money / Pulitzer wanted to help / children sent coins / statue packed in crates | statue of liberty, pulitzer |
| SK-TT2b-S12 | SK-TT2b-C11 | order/2/2 | put the steps of a procedure in order | making a paper plate sundial | all orders / all orders / taping before the 9:00 line settled; the rest still to place | sundial |
| SK-TT2b-S13 | SK-TT2b-C12 | dropdown/1/2 | find the missing step in a procedure | missing step in a jar garden (Rosa's card shows steps 1 to 3; frame reworded) | 3 / 3 / 2 (hint 3 rules out closing the lid; water and soil stay live) | jar garden |
| SK-TT2b-S14 | SK-TT2b-C13 | mc/1/2 | predict what would happen if a step is skipped | sprouting an avocado pit | all 4 / all 4 / key / grows too fast and tips the glass / stem grows down | avocado |
| SK-TT2b-S15 | SK-TT2b-C15 | mc/1/3 | tell how a procedure and a history are told differently | Text 1 writing your name in Braille dots; Text 2 Louis Braille's life | all 4 / all 4 / key / backward choice / both tell what Louis did | braille |

### 3.T.T.2.c

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TT2c-S04 | SK-TT2c-C03 | mc/1/2 | a detail told in only one of two texts | alpacas | all 4 / all 4 / key / lives in mountains / farmers cut wool (colors ruled out) | alpaca |
| SK-TT2c-S05 | SK-TT2c-C05 | dropdown/2/2 | decide whether a fact is in one text or both | which text tells which fact (igloo, now "shelters when they went hunting") | slot 1: 3, slot 2: 3 / 3, 3 / 3, 3 | igloo |
| SK-TT2c-S06 | SK-TT2c-C06 | dropdown/2/3 | find what two texts are each mostly about and join them | wind turbines and the town of Pine Bluff | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: key / fan (height ruled out); slot 2: all 3 | wind turbine |
| SK-TT2c-S07 | SK-TT2c-C07 | match/2/2 | match information to Text 1, Text 2 or both | which text tells each fact (rattlesnake) | all rows open / all rows open / all rows open (hint 3 only sends the child back to the texts) | rattlesnake |
| SK-TT2c-S08 | SK-TT2c-C08 | ms/2/2 | two facts told in both of two texts | green iguanas | all 5 / all 5 / key1 / key2 / lie in sun / chin flap (leaves and flowers ruled out) | iguana |
| SK-TT2c-S09 | SK-TT2c-C09 | order/2/3 | order the steps of one journey told across two texts | yogurt from farm to store | all orders / all orders / truck before heating settled; other steps open | yogurt |
| SK-TT2c-S10 | SK-TT2c-C10 | ebsr/2/3 | say how a second passage adds to the first | giant anteater passages (p11, p12) | Part A: all 4; Part B: all 4 / Part A: all 4; Part B: all 4 / Part A: key / teeth / snout (claws ruled out); Part B: all 4 | anteater |
| SK-TT2c-S11 | SK-TT2c-C11 | mc/1/3 | use a second text to explain a fact in the first | snowshoes | all 4 / all 4 / key / lighter than boots / strips stick (melting ruled out) | snowshoe |
| SK-TT2c-S12 | SK-TT2c-C12 | dropdown/2/2 | two facts that both texts tell | earthquakes | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: shakes / starts-with-rock-slip (table ruled out); slot 2: all 3 | earthquake |
| SK-TT2c-S13 | SK-TT2c-C13 | mc/1/2 | use a second text to explain a fact in the first | tugboats | all 4 / all 4 / key / ship's own engine / tugboats bigger / harbor wide (the harbor is ruled out by Text 1, leaving key / engine / bigger) | tugboat |
| SK-TT2c-S14 | SK-TT2c-C14 | mc/1/3 | what two texts show when read together | the Great Pyramid | all 4 / all 4 / key / Khufu ruled / ramps made from sand (the blocks count is a detail ruled out) | pyramid |
| SK-TT2c-S15 | SK-TT2c-C15 | mc/1/3 | make a plan that uses information from both notes | school picture day notes | all 4 / all 4 / key / green-and-10:00 (uses only Note 1) / white shirt (blue ruled out) | picture day |

### TS-SEQ

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TSSEQ-S04 | SK-TSSEQ-C02 | mc/1/2 | why a how-to text begins with a materials paragraph | why a how-to begins with a first paragraph (sock puppet) | 4 / 4 / 3 (hint 3 rules out the mistake choice) | sock puppet |
| SK-TSSEQ-S05 | SK-TSSEQ-C04 | mc/1/2 | how changing a time clue word changes the order a reader expects | roasting a marshmallow for s'mores | all 4 / all 4 / key / chocolate (the one that says 'First is not a time word') ruled out / same time | s'mores, marshmallow |
| SK-TSSEQ-S06 | SK-TSSEQ-C05 | mc/1/2 | tell a sequence paragraph from a description paragraph | which paragraph gets a new "Last, ..." sentence (painting a rock, gym) | 4 / 4 / 3 (hint 3 rules out the "what the rock looks like" choice) | rock painting, gym |
| SK-TSSEQ-S07 | SK-TSSEQ-C06 | order/2/2 | put the steps of a science process in order | how sea salt is made | all orders / all orders / seawater into pools first is settled; the other four open | sea salt |
| SK-TSSEQ-S08 | SK-TSSEQ-C07 | mc/1/3 | why an early step makes a later step possible | papier-mache bowl | all 4 / all 4 / key / glue is not needed / wet paper is lighter (the 'color' one ruled out) | papier-mache, paper mache |
| SK-TSSEQ-S09 | SK-TSSEQ-C08 | ms/2/2 | time words that tell how much time passes, not only the order | tie-dyeing a shirt | all 6 / all 6 / key1 / key2 / the 'First' and 'Next' ... (Finally ruled out) | tie-dye |
| SK-TSSEQ-S10 | SK-TSSEQ-C09 | dropdown/2/2 | how a text is put together: a question paragraph and a steps paragraph | what the first and last paragraphs do (grape juice pop; stick is pushed into slush) | slot 1: 3 / 3 / 3; slot 2: 3 / 3 / 2 (hint 3 rules out ice cream) | juice pop |
| SK-TSSEQ-S11 | SK-TSSEQ-C11 | match/2/2 | match events to the name something had at that time | place names at each time (Dell Pond); row 2 now "The town bought the land" | all rows open / all rows open / cows row settled (Dell Pond) | dell pond |
| SK-TSSEQ-S12 | SK-TSSEQ-C12 | mc/1/3 | find the cause of a town's growth in a history text | Alder Creek railroad depot (town grows after a depot opens) | all 4 / all 4 / key / school / the mill closed / river (the school one comes later and is ruled out) | depot |
| SK-TSSEQ-S13 | SK-TSSEQ-C13 | mc/1/2 | find where a new dated event belongs in a history text | the Town Hall clock tower | all 5 / all 5 / key / after sentence 2 area / after sentence 4 (the today sentence ruled out) | clock tower |
| SK-TSSEQ-S14 | SK-TSSEQ-C14 | mc/1/3 | explain why a step comes before the next step | why butter goes on first (grilled cheese); step 4 now says buttered bottom, golden and crisp | 4 / 4 / 3 (hint 3 rules out butter on the pan) | grilled cheese |
| SK-TSSEQ-S15 | SK-TSSEQ-C15 | dropdown/2/2 | choose time words that keep the steps in order | time words in directions (making a bed): After / Finally | slot 1: 3 / 3 / 3; slot 2: 3 / 3 / 2 (hint 3 rules out Meanwhile) | make a bed |

### TS-DESC

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TSDESC-S04 | SK-TSDESC-C02 | mc/1/2 | the job of a paragraph's first sentence | best first sentence for a paragraph (flying squirrel) | 4 / 4 / 3 (hint 3 rules out the where-they-live sentence) | flying squirrel |
| SK-TSDESC-S05 | SK-TSDESC-P5 | dropdown/1/2 | choose the clue word that adds another detail | contrast clue word (wombat looks slow, runs fast): However | 3 / 3 / 2 (hint 3 rules out Next) | wombat |
| SK-TSDESC-S06 | SK-TSDESC-C05 | ms/2/2 | two clues that a paragraph is a description | a covered bridge | all 5 / all 5 / key / key / trouble and fix / compares (steps ruled out) | covered bridge |
| SK-TSDESC-S07 | SK-TSDESC-C06 | dropdown/2/2 | main idea and a detail that supports it | an okapi hiding in the forest | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: key / baby / home | okapi |
| SK-TSDESC-S08 | SK-TSDESC-C08 | ms/2/2 | find two fun facts that can be left out | a rhino's thick skin | all 5 / all 5 / thorns (key detail, ruled out); the other 4 open | rhino |
| SK-TSDESC-S09 | SK-TSDESC-C09 | mc/1/2 | choose a clue word that connects two description sentences | a tapir's legs and skin | all 4 / all 4 / also / however / next (as a result ruled out) | tapir |
| SK-TSDESC-S10 | SK-TSDESC-C10 | mc/1/3 | why a description uses headings instead of time words | a tour of a bookstore | all 4 / all 4 / key / steps / old and new (trouble ruled out) | bookstore |
| SK-TSDESC-S11 | SK-TSDESC-C11 | ms/2/2 | pick the two sentences that state the main idea of the whole passage | a tarantula built to hunt at night | all 6 / all 6 / key / key / topic / hairs / fangs (twenty-years ruled out) | tarantula |
| SK-TSDESC-S12 | SK-TSDESC-C12 | ms/2/2 | choose two details that best support a stated main idea | a capybara near water | all 5 / all 5 / key / key / family groups / weight (grass and bark) ... | capybara |
| SK-TSDESC-S13 | SK-TSDESC-C13 | mc/1/3 | decide if a text-box fact belongs inside a paragraph | move a text-box fact into a paragraph? (pangolin baby fact) | 4 / 4 / 3 (hint 3 rules out the lion choice) | pangolin |
| SK-TSDESC-S14 | SK-TSDESC-C14 | mc/1/3 | choose the best main idea sentence for a description | a sea cucumber's ways to stay safe | all 4 / all 4 / key / lives on the bottom / skin is the most useful (First ruled out) | sea cucumber |
| SK-TSDESC-S15 | SK-TSDESC-C15 | dropdown/2/2 | choose clue words that fit a description | a class library corner | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: Also / ...; slot 2 ... | library corner |

### TS-CE

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TSCE-S04 | SK-TSCE-P5 | mc/1/2 | find an effect stated in a paragraph | why a pond freezes from the top | all 4 / all 4 / key / freezes solid to bottom / fish swim up (the 'ice sinks' one ruled out) | pond ice |
| SK-TSCE-S05 | SK-TSCE-C03 | mc/1/3 | why an author includes a section: another effect of the same cause | another effect of the same cause (hot sidewalk and puddle) | 4 / 4 / 3 (hint 3 rules out the dark-color choice) | sidewalk, puddle |
| SK-TSCE-S06 | SK-TSCE-C05 | ms/2/3 | find the steps whose mistakes would hide the result | mistakes that would stop the lava lamp blobs rising (no tablet, no water) | 5 / 5 / 4 (hint 3 rules out the color choice) | lava lamp |
| SK-TSCE-S07 | SK-TSCE-C07 | dropdown/1/2 | choose the clue word that fixes a backward cause and effect | fix a backward clue word (Dan and the sunflower): so, with and and until | 3 / 3 / 3 (hint 3 is a read-it-aloud strategy and rules out nothing) | sunflower |
| SK-TSCE-S08 | SK-TSCE-C08 | mc/1/3 | find the first cause in a chain of events | ice on Oak Road | all 4 / all 4 / key / bus drove slowly / school started later (the late bus is ruled out as an effect) | ice on the road, school start |
| SK-TSCE-S09 | SK-TSCE-C09 | mc/1/3 | how the author organizes a paragraph: events that lead to one another | how a paragraph is organized (foggy school bus) | 4 / 4 / 3 (hint 3 rules out the how-to choice) | fog, school bus |
| SK-TSCE-S10 | SK-TSCE-C10 | mc/1/2 | find the sentence that tells an effect of a change | a speed bump near a school | all 4 / all 4 / key / bumps were added (cause) / drivers could see kids (not caused by bump) / the school (setting) | speed bump |
| SK-TSCE-S11 | SK-TSCE-C11 | cr/-/3 | write an effect first, then because and its cause | a picnic moved indoors | constructed response: any sentence / ... / ... | picnic, thunder over park |
| SK-TSCE-S12 | SK-TSCE-C12 | ms/2/3 | two effects further down a chain | Mr. Hale stopped mowing the field | all 5 / all 5 / key / key / the weekly mowing (before) / the barn is red (neither) / the lawn mower (not in text)...  | mowing, wildflower field |
| SK-TSCE-S13 | SK-TSCE-C13 | match/2/3 | tell what is true for only one text or for both texts | two short texts about a cracked sidewalk and a flooded lot | all rows open / all rows open / plant row settled; the rain row and the two both rows open | tree roots sidewalk, flooded lot |
| SK-TSCE-S14 | SK-TSCE-C14 | mc/1/3 | predict what will happen next from a cause | Grandpa's rusty wheelbarrow | all 4 / all 4 / key / rust more / gets holes (the shed keeps it dry...) / paint wears off | wheelbarrow, rust |
| SK-TSCE-S15 | SK-TSCE-C15 | ms/2/2 | join two facts into a cause-and-effect sentence with a clue word | a gate left open and goats | all 5 / all 5 / key / key / the backward so / but (the 'but' one ruled out) | gate, garden goats |

### TS-CC

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TSCC-S04 | SK-TSCC-P5 | dropdown/1/2 | choose the contrast clue word | likeness clue word (centipede and millipede live in damp places): Like | 3 / 3 / 2 (hint 3 rules out Instead of) | centipede, millipede |
| SK-TSCC-S05 | SK-TSCC-P6 | ms/2/2 | pick two sentences that tell how things are alike | two alike facts (ice skates, roller skates) | 5 / 5 / 4 (hint 3 rules out the blades choice) | ice skates, roller skates |
| SK-TSCC-S06 | SK-TSCC-C04 | mc/1/2 | why an author compares two things | what a reader can do after a comparison (seals and sea lions) | 4 / 4 / 3 (hint 3 rules out the swimming-speed choice) | seal, sea lion |
| SK-TSCC-S07 | SK-TSCC-C06 | dropdown/2/2 | finish a sentence that tells how two things are alike | a frisbee and a boomerang | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: spin / land far (disk shape ruled out) | frisbee, boomerang |
| SK-TSCC-S08 | SK-TSCC-C07 | mc/1/2 | pick the sentence that best shows two things are alike | a ukulele and a banjo | all 4 / all 4 / key / banjo round body / ukulele soft sound (the Hawaii one) ... | ukulele, banjo |
| SK-TSCC-S09 | SK-TSCC-C08 | mc/1/3 | how the differences are organized: one topic at a time | a subway train and a trolley | all 4 / all 4 / key / all of one then all of other / most to least important (oldest to newest ruled out) | subway, trolley |
| SK-TSCC-S10 | SK-TSCC-C10 | mc/1/2 | find how two different things are alike | how paper and a screen are alike (typewriter and laptop): a letter shows up for each key | 4 / 4 / 3 (hint 3 rules out quick fixing) | typewriter, laptop |
| SK-TSCC-S11 | SK-TSCC-C09 | match/2/2 | find the sentence that starts with the wrong clue word | match taught clue words while, Both, same, Unlike to alike or different (trampoline, swing set) | all 4 rows open / all 4 rows open / all 4 rows open (hint 3 names no row) | trampoline, swing set |
| SK-TSCC-S12 | SK-TSCC-C11 | dropdown/2/3 | find the fact in the wrong part of a chart | a rowboat and a sailboat | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: mast / oars (floats ruled out); slot 2: all 3 | rowboat, sailboat |
| SK-TSCC-S13 | SK-TSCC-C13 | mc/1/3 | tell how two texts are organized in the same way | tangerines and oranges; paper books and e-books | all 4 / all 4 / key / differences first then likenesses / steps (the problem and fix one ruled out) | tangerine, e-book |
| SK-TSCC-S14 | SK-TSCC-C14 | ms/2/2 | two sentences that compare and contrast correctly | an island and a peninsula | all 5 / all 5 / key / key / unlike misuse / both by boat (false) ... (swap ruled out? the 'people walk' one) | island, peninsula |
| SK-TSCC-S15 | SK-TSCC-C15 | cr/-/3 | write a sentence about a likeness and a sentence about a difference with clue words | warming soup on the stove or in a microwave | constructed response | microwave, soup |

### 3.T.SS.1.a

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-SS1a-S04 | SK-SS1a-P5 | mc/1/2 | why an author adds a Did You Know box | cranberry bogs article with a fun-fact box | all 4 / all 4 / key / tells how to cook cranberries (ruled out) / shows where bogs are / names the main steps | cranberry, cranberries |
| SK-SS1a-S05 | SK-SS1a-P7 | mc/1/1 | use a table of contents to find a chapter | a skyscraper book | all 4 / all 4 / key / ch 1 / ch 2 (same word 'tall'?) ruled out | skyscraper |
| SK-SS1a-S06 | SK-SS1a-C04 | mc/1/3 | how sections are arranged to match the intro | starfish article | all 4 / all 4 / key / reversed order (ruled out) / three tied ... all about arms | starfish |
| SK-SS1a-S07 | SK-SS1a-C07 | dropdown/1/2 | choose a caption that matches a picture | photo of wind moving sand up a sand dune | all 3 / all 3 / key / sand castle ... ruled out | sand dune |
| SK-SS1a-S08 | SK-SS1a-C08 | mc/1/2 | read a map scale | map of Canyon Trail | all 4 / all 4 / key / 3 miles / 2 miles / 5 miles | canyon |
| SK-SS1a-S09 | SK-SS1a-C09 | ms/2/2 | tell how two texts are organized (problem-solution; compare) | greenhouse text; marimba and harmonica text | all 5 / all 5 / two keys / steps / what happened and why? / both describe the greenhouse (ruled out) | greenhouse, marimba, harmonica |
| SK-SS1a-S10 | SK-SS1a-C10 | ms/2/2 | use the words chapter and section correctly | a book about wild places with a canyon chapter | all 5 / all 5 / two keys / chapter-is-part-of-section reversed (ruled out?) ... | wild places, canyon |
| SK-SS1a-S11 | SK-SS1a-C11 | dropdown/1/2 | match a drawing to the section it helps | steamboat drawing: steam goes from boiler to paddle wheel | all 3 / all 3 / key / Rivers Before Steamboats (Life on Board ruled out) | steamboat |
| SK-SS1a-S12 | SK-SS1a-C12 | mc/1/3 | why an author uses time order in a section | how an orchard changes through the year | all 4 / all 4 / key / each season tells ... / fastest to slowest / ruled out | orchard |
| SK-SS1a-S13 | SK-SS1a-C13 | mc/1/2 | find the sentence a diagram helps the reader picture | thermometer diagram | all 4 / all 4 / key / says what temperature is / says when to read it / says where to buy | thermometer |
| SK-SS1a-S14 | SK-SS1a-C14 | mc/1/2 | name the pattern of a paragraph: what happened and why | weather vane paragraph | all 4 / all 4 / key / alike and different / steps in order / trouble and fix (ruled out) | weather vane |
| SK-SS1a-S15 | SK-SS1a-C15 | dropdown/2/2 | use a table of contents to find a chapter and a page | book about rainforests; Leo wants to know why it rains so much | slot 1: all 3; slot 2: all 3 | rainforest |

### 3.T.C.1.b

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TC1b-S04 | SK-TC1b-P5 | mc/1/2 | match a sentence to the parts a diagram labels | stethoscope diagram with labeled parts | all 4 / all 4 / key / sentence about a doctor's coat / about the first stethoscope / about visits | stethoscope |
| SK-TC1b-S05 | SK-TC1b-P4 | mc/1/2 | why a key word is in bold and explained in a glossary | kiln in a pottery book glossary | all 4 / all 4 / key / means word is hard to say (ruled out) / the section is ending / the word is a person's name | kiln, pottery |
| SK-TC1b-S06 | SK-TC1b-C04 | ms/2/2 | how a heading helps the reader | zip line heading 'Flying Through the Trees' | all 5 / all 5 / two keys / tells how to build a zip line / lists the safety rules (ruled out) | zip line |
| SK-TC1b-S07 | SK-TC1b-C06 | mc/1/2 | choose the key word to print in bold | pulley section | all 4 / all 4 / key / rope / bucket / heavy (the 'well' one ruled out) | pulley |
| SK-TC1b-S08 | SK-TC1b-C07 | dropdown/1/2 | choose a caption that tells what a whole diagram shows | wheelchair ramp diagram | slot: all 3 | wheelchair ramp |
| SK-TC1b-S09 | SK-TC1b-C08 | order/2/2 | order steps using numbered arrows in a diagram | drawbridge diagram, arrows 1-3 | order item | drawbridge |
| SK-TC1b-S10 | SK-TC1b-C10 | dropdown/1/2 | choose the caption line for a sound in a video | seesaw video with creaking board and thump | slot: all 3 | seesaw |
| SK-TC1b-S11 | SK-TC1b-C11 | mc/1/2 | find the sentence that names a part a figure does not show | tree trunk diagram: bark, rings, center | all 4 / all 4 / key / three part sentences ruled out | tree rings |
| SK-TC1b-S12 | SK-TC1b-C12 | mc/1/3 | why a diagram beats a photo | why a diagram beats a photo (toaster) | 4 / 4 / 3 (hint 3 rules out the shine choice) | toaster |
| SK-TC1b-S13 | SK-TC1b-C13 | ms/2/2 | web features not in a printed paper | web-only features (Greenway Park newsletter): slideshow, Sign Up button | 5 / 5 / 4 (hint 3 rules out the headline) | Greenway Park, slideshow |
| SK-TC1b-S14 | SK-TC1b-C14 | ms/2/2 | keep listeners on track in a talk | Theo's talk about three ways to keep a garden healthy | all 5 / all 5 / two keys / hold up headings (ruled out) / talk very fast / whisper | garden talk |
| SK-TC1b-S15 | SK-TC1b-C15 | mc/1/2 | why a podcast uses a sound effect | why a podcast uses a sound effect (alarm clock) | 4 / 4 / 3 (hint 3 rules out being late) | alarm clock |

## Not done / for the reviewer
- Independent review of all 108 items is still needed (hints, giveaways, answer correctness). The "live" column is my own record, not a review.
- check-content currently reports 3 failures that are not in my lessons: SK-RA2a-S14 in 3.T.RA.2.a (the answer text is not named in how or why; another agent's block, probably mid-edit) and two "accepted" failures (3.T.T.3.a and 3.T.RA.1.a missing from js/data/accepted.js). Earlier failures in 3.T.T.1.b (SK-TT1b-S06, SK-TT1b-S15) are no longer reported.
- Other lessons still show similar-coverage warnings (for example 3.T.SS.2.a and 3.T.T.4.a); those belong to other agents.
- Figures were not added: diagram and photo items (SS1a S07, S11, S13; TC1b S04, S08, S09, S11, S12) describe the picture in the stem text, so no new images exist. A reviewer may want to add figures.
- In 3.T.SS.1.a the hot-text and ebsr core types are practised with multiple-choice similar items (no new passages), and TC1b-S09 is an `order` item without a figure.
- Meta source files with the per-item notes are in the session scratchpad (sim2/*.meta.json); this log was built from them.


## Fixes after review (SIM-2-review.md, 2026-10-23)

All edits are inside my own similar items and the passages p7, p11, p12 of 3.T.T.2.a/c (p8 date in 3.T.T.2.b). No core item, key or hint, and no accepted similar item, was changed. `like` stays single and names its own core item; each lesson still has 15 similar items.

**MUST fixes**
- Clones reworked into a fresh application (new text, a different question or option set, and a different key wording): 3.T.T.2.a S09 (now: which fact fits the box; new topic) and S13 (now: a detail from one section is not the main idea); TS-SEQ S04 (the opening paragraph tells what you will make and why, not a supply list), S06 (events by time against a place description, new options), S15 (After and Finally, new options); TS-DESC S04 (choose the best first sentence); TS-CE S09 (new text, key "each happening causes the next one, like links in a chain", new distractors); TS-CC S04 (the key is now Like, with a likeness sentence) and S06 (what a reader can do with the facts).
- 3.T.T.2.a S09 and passage p7: the hot-air balloon article duplicated L-V3 p3. p7 is now "A Home in the Treetops" (bald eagle nest). Searched: `bald eagle` has no other hit in js/data.
- Facts: 3.T.T.2.b S09 now says "Later that same day, Wilbur flew the plane for almost a minute" (true: four flights on 17 December 1903, the longest was 59 seconds) in place of the false "people around the world read about the flight". 3.T.T.2.c p11 says the tongue "can be two feet long" and p12 says "less than a minute at each nest" (sources in the review). TS-DESC S05 says "as big as a large dog" (the item is now a however/contrast item). Also p8 in 3.T.T.2.b now says "In the 1870s".
- 3.T.C.1.b S13: the stem no longer lists the shared features. The web-only features are now a slideshow with a tap arrow and a Sign Up button.

**SHOULD fixes**
- Same key word as the core item: TS-DESC S05 (now However), TS-CE S07 (now so, a sunflower sentence; the typo "in the Ana's sentence" is gone with the rewrite), 3.T.T.2.b S04 (As a result / Because of this), 3.T.T.2.c S05 (pattern now "only Text 1" then "both texts").
- Hint 3: 3.T.T.2.c S05 and S07 and 3.T.T.2.b S13 no longer settle a whole blank or row (see the live column).
- TS-CE S05 (dog panting, repeated T-RA) is now a hot sidewalk and puddle article. TS-SEQ S10 (worm bin, repeated T2c compost) is now a grape juice pop. TS-SEQ S11 row 2 is now "The town bought the land" with the stem separating the purchase from the renaming (the arguable picnic row is gone). TS-SEQ S14 step 4 now says "buttered bottom is golden and crisp" so the key is stated in the directions.
- Also done: TS-CE S06 mistake changed to "leaving the water out of the bottle"; TS-DESC S11 "longer than a pet hamster lives"; TS-DESC S13 fact changed from the word origin (arguably tied to rolling up) to a baby riding on its mother's tail, and "cannot bite" is now "may not be able to bite"; TS-CC S05, S10 (the key is now stated in the text), S11 (the error is now in sentence 5; sentence 4 starts with However), S15 hint 3; 3.T.C.1.b S12 (the stem no longer states the key, distractors are plausible) and S15 (no "happy voice", "late for school" replaces "angry").
- Live-choice counts for every changed item were recounted by hand from the final hints; the table above holds the new values.

**Accepted SK-TSSEQ-S03 (not edited, report to lead):** S03 uses the same structure as core C10: the same four-option frame ("Move sentence N so it comes right after sentence M", with the key "after sentence 1" against C10's "after sentence 2") and a similar hint ladder, with a new school history and an undated sentence in place of C10's library history. It is a structural clone, but the key text differs by the sentence number and the facts, so a child cannot copy the core answer. It does not need the same fix unless the lead wants all date-order items to vary their frame; I did not touch it.

**Not done from the review (SHOULD/NOTE items I left):** 3.T.T.2.a S04/S14 shared caption phrase "The parts of a ..." and S07 sentence positions equal to C06; S11 hint 3 scaffolding; 3.T.T.2.b S15 clue; 3.T.T.2.c S10 distractor mix and S11 silly distractors; TS-SEQ S05 and S14 beyond the key; TS-DESC S10; 3.T.SS.1.a SHOULDs (S04 verb, S08 arithmetic, S15 chapter 2). The figure/picture-in-words note (C5) also stays.

**Needs blind re-solve (changed items):** 3.T.T.2.a S09, S13; 3.T.T.2.b S04, S09, S13; 3.T.T.2.c S05, S07, S10; TS-SEQ S04, S06, S10, S11, S14, S15; TS-DESC S04, S05, S11, S13; TS-CE S05, S06, S07, S09; TS-CC S04, S05, S06, S10, S11, S15; 3.T.C.1.b S12, S13, S15.

**Gates after fixes:** check-content: 0 failures in my nine lessons (the only failures in the whole run are six in 3.T.SS.1.c, another author's lesson, in progress); check-writing 0 failures and 0 warnings; check-instructional-copy 28 assertions passed; readability: no passage above FK 4.5; greedy walk 0 missing in all nine lessons; browser walk (port 8832, stopped): 15 of 15 core items show the button and open an item that names them, in all nine lessons, no page errors.


## Fixes after re-review (SIM-2-rereview.md)

- **3.T.T.2.b S13 (MUST):** Rosa's card now lists only steps 1 to 3 ("Rosa wrote the first three steps from memory"), so "sprinkle water" and "close the lid" are real later steps from the directions, not steps already on her card. Live choices 3 / 3 / 2.
- **TS-SEQ S10 (MUST):** rebuilt as a different frame. It is now a multiple-choice item (1 point): "Which words from Paragraphs 2 and 3 show the order of the steps?" The four choices are new (order words; things named; action words; describing words), none is shared with core C09, and the key wording is new. Live 4 / 4 / 3.
- **TS-CE S07 (MUST):** the choices no longer include the student's own word. The options are but / so / until, the prompt says only that the sentence has cause and effect backward, clue and hint 1 give a neutral rule, and hint 3 rules out until only. So both but and so are still live after hints 1 to 3 (3 / 3 / 2).
- **3.T.T.2.c S05 hint 3 (SHOULD):** the first fix did not remove the settling, and my earlier log line was wrong. It now asks "Which text says how the blocks are set?" and settles nothing; live 3,3 / 3,3 / 3,3.
- **3.T.T.2.c S07 hint 3 (SHOULD):** now only sends the child back to the texts for when rattlesnakes hunt; no row is settled.
- **TS-SEQ S06 hint 3 (SHOULD):** "one afternoon" is now "one morning".
- **TS-CC S11 (SHOULD):** sentence 5 now reads "Likewise, a trampoline lets you bounce, but a swing set lets you swing back and forth", so the difference is explicit.
- Not changed from the re-review SHOULDs: T2a S13 distractor set, T2a S09 method hint, TS-DESC S05 stem and hint wording, TS-CE S05 explanation wording and silly distractor, TS-CE S06 hint 2, TS-SEQ S11 date wording, TS-SEQ S15 shared options, SS1a carried items.

**Needs blind re-solve (this round):** 3.T.T.2.b S13; 3.T.T.2.c S05, S07; TS-SEQ S06, S10; TS-CE S07; TS-CC S11. (The earlier list in "Fixes after review" still applies to items the re-review did not cover.)

**Gates after this round:** check-content 0 failures in my nine lessons (whole-run failures, if any, are in other authors' lessons); check-writing 0 failures and 0 warnings; check-instructional-copy 28 assertions passed; readability: no passage above FK 4.5; greedy walk 0 missing in all nine lessons; browser walk on port 8832 (server stopped): 15 of 15 in all nine lessons, no page errors.


## Fixes after the final blind re-solve

- **TS-SEQ S10 (MUST):** the order-words multiple-choice item named its own key in the ladder, so I replaced it. It is a two-blank dropdown (2 points) that practises C09's skill (the job of each part) with a new frame: "The first paragraph {0}. The last paragraph {1}." The options are new, the clue and hints say nothing about word position, and hint 3 rules out one choice for blank 2 only. `like` stays C09 and is now honest. Live: blank 1 3 / 3 / 3, blank 2 3 / 3 / 2.
- **TS-SEQ S06 (MUST):** rebuilt as a different task: a student wants to add "Last, set the rock in the sun so the paint can dry" and must choose the paragraph and the reason (a rock-painting steps paragraph against a gym description). New text, new options and new key wording; it still practises C05's skill (telling a steps paragraph from a details paragraph). Live 4 / 4 / 3.
- **TS-CC S11 (MUST):** rebuilt as a match item: sort four clue words (Also, However, Likewise, In contrast) from a trampoline and swing set paragraph into "a likeness" or "a difference". The prompt, the frame, the options and the hints no longer follow C09, the numerals are gone, and hint 3 settles one row only (However). Live: 4 rows open / 4 rows open / 3 rows open.
- **3.T.T.2.b S13 (SHOULD):** frame reworded (Rosa's card, "One step is missing", "The missing step is"), and clue and hints reworded away from C12.
- **TS-CE S07 (SHOULD):** the options are now and / so / until, so there is a real second contender, and hint 3 is reworded away from C07's. Live 3 / 3 / 2.
- **3.T.T.2.c S05 (SHOULD):** Text 1 now says "People in the far north built igloos as shelters when they went hunting" (igloos were mostly short-stay hunting shelters).

**Needs blind re-solve (this round):** TS-SEQ S06, S10; TS-CC S11; 3.T.T.2.b S13 (frame only); TS-CE S07; 3.T.T.2.c S05 (text only).

**Gates after this round:** check-content PASS with 0 failures; check-writing 0 failures and 0 warnings; check-instructional-copy 28 assertions passed; readability no passage above FK 4.5; greedy walk 0 missing in all nine lessons; browser walk on port 8832 (server stopped) 15 of 15 in all nine lessons, no page errors.


## Fixes after the last blind re-solve

- **TS-CC S11 (MUST):** the clue words are now Like, while, Unlike and Both, all taught in the lesson (Unlike, while and Both appear in the teaching text; Like is the P5 option). Not Also or However. The paragraph order is likeness, likeness, difference, difference (rows: Like 0, while 1, Unlike 1, Both 0), so the answers do not alternate. Hint 3 now only points to the two parts of sentence 5 and names no row's answer. Shared options with C09: none. Word Jaccard with C09 over stem, prompt, text and options, measured with my own script: 0.18 (the reviewer's metric may differ). Live: 4 rows open at every step (3 / 3 / 3 per row is not reduced by any hint).
- **TS-CE S07 (SHOULD):** hint 3 no longer names a choice ("Decide which part of the sentence is the cause. Then ask which clue word tells the reader that the first part led to the second."), so and, so and until all stay live (3 / 3 / 3).
- **TS-SEQ S10 (NOTE):** the stick is no longer stood in unfrozen juice. Paragraph 2 now freezes the juice for an hour until it is slushy, and Paragraph 3 pushes the stick into the slush. The ladder and live counts are unchanged.
- **3.T.T.2.c S05 (NOTE):** Text 1 now says people "sometimes built igloos as shelters when they went hunting".

**Needs blind re-solve (this round):** TS-CC S11 (new words, new order); TS-CE S07 (hint 3 only); TS-SEQ S10 (stem wording); 3.T.T.2.c S05 (text only).

**Gates after this round:** check-content PASS with 0 failures; check-writing 0 failures and 0 warnings; check-instructional-copy 28 assertions passed; readability no passage above FK 4.5; greedy walk 0 missing in all nine lessons; browser walk on port 8832 (server stopped) 15 of 15 in all nine lessons, no page errors.


## Fixes after the final check

- **TS-CE S07 (MUST):** how line 4 now says that "because" points to a cause, but the part after it in Dan's sentence is the effect, which made the sentence backward. This now agrees with how line 3 and the lesson rule. **SHOULD:** hint 3 is now a strategy ("Try each clue word in the sentence and read it aloud. Ask whether the sentence then says what Dan really did and what happened after") and rules out nothing. Live 3 / 3 / 3 (and, so, until).
- **TS-CC S11 (SHOULD):** every clue word and label is now taught in the lesson's clue list. The rows are while, Both, same and Unlike (answers different, alike, alike, different) and the columns are "alike" and "different". Like and "a likeness" are gone. Hint 3 names no row ("Pick one clue word and reread only its sentence..."). Shared options with C09: none. Word Jaccard with C09 by my own script: 0.200; the reviewer's metric scored the earlier version 0.165 against my 0.18, so it should stay under 0.21. Live: 4 rows open at every step.

**Needs blind re-solve (this round):** TS-CE S07 (how and hint 3 only); TS-CC S11 (new words and labels).

**Gates after this round:** check-content PASS with 0 failures; check-writing 0 failures and 0 warnings; check-instructional-copy 28 assertions passed; readability no passage above FK 4.5; greedy walk 0 missing in all nine lessons; browser walk on port 8832 (server stopped) 15 of 15 in all nine lessons, no page errors.
