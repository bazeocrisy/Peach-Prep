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
Each topic below was searched across js/data (whole-word match, excluding my own items). Result: no use elsewhere, except these incidental mentions, which share a word but not the key fact: seal (elephant seals in SK-RA2a-S07, seals on sea ice in SK-TT2c-S02; my SK-TSCC-S06 is about ear flaps and flippers), swing set (a playground phrase in SK-TSDESC-C15 and a passage in 3.T.T.3.c; my SK-TSCC-S11 is about clue words), sailboat (a writer's boat in SK-TC2c-C02), island/soup/picnic/gate/whistle/school start/dry summer (everyday words in other items). One real overlap was found and fixed: SK-TSSEQ-S12 first used an 1880 mill that grinds corn, the same as SK-RA1a-S09, so I rewrote it as a railroad depot.

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
| SK-TT2a-S09 | SK-TT2a-C08 | mc/1/3 | why a fact is set apart in a text box | hot air balloon article (p7) | all 4 / all 4 / key / most important fact / tells how the pilot steers | hot air balloon |
| SK-TT2a-S10 | SK-TT2a-C09 | mc/1/3 | use a diagram with the words to explain why something is placed where it is | Nia's tree house drawing (described in words) | all 4 / all 4 / key / Nia rides in the bucket / bucket far from window | tree house, treehouse, pulley |
| SK-TT2a-S11 | SK-TT2a-C10 | dropdown/2/3 | decide which section a new sentence belongs in and whether it is a key detail | hippo article (p8) | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: Cooling Off / Did You Know?; slot 2: all 3 | hippo |
| SK-TT2a-S12 | SK-TT2a-C11 | hottext/1/2 | choose the one sentence that states the main idea of the whole article | turkey vulture article (p9) | all 6 / all 6 / key / bare head / no feathers / smelling from far away / committee box (the first sentence is ruled out) | vulture |
| SK-TT2a-S13 | SK-TT2a-C12 | mc/1/3 | explain why a text-box fact is not the main idea | lobster article (p10) | all 4 / key / blue lobsters must be wrong / box is the last part / key / blue lobsters must be wrong / box is the last part | lobster |
| SK-TT2a-S14 | SK-TT2a-C14 | dropdown/1/2 | choose a caption that fits the whole picture | Lena's drum set drawing for a report (described in words) | all 3 / all 3 / the parts of a drum set / a cymbal and a snare drum | drum set, cymbal |
| SK-TT2a-S15 | SK-TT2a-P5 | ebsr/2/3 | main idea of one paragraph and two sentences that support it | kiwi bird article (p11) | Part A: all 4; Part B: all 5 / Part A: all 4; Part B: all 5 / Part A: key / big egg; Part B: all 5 | kiwi |

### 3.T.T.2.b

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TT2b-S04 | SK-TT2b-P4 | dropdown/2/2 | choose so or because to connect a cause and an effect | why a kettle whistles | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: because (settled); slot 2: all 3 | kettle, whistle |
| SK-TT2b-S05 | SK-TT2b-C02 | hottext/1/2 | find the stage that comes just before a named stage in a process | cacao beans to chocolate (p6) | all 6 / all 6 / key / spread in the sun / under the leaves / scooping beans / grinding (shells is ruled out) | cacao, chocolate |
| SK-TT2b-S06 | SK-TT2b-C03 | ms/2/1 | pick the time-order words in a paragraph | life cycle of a cicada | all 6 / all 6 / three keys / digs down / from tree roots | cicada |
| SK-TT2b-S07 | SK-TT2b-C06 | order/2/2 | put historical events in order | building the Golden Gate Bridge | all orders / all orders / ferry first and crowds last are fixed by the dates; the middle three still to place, with towers before cables settled | golden gate |
| SK-TT2b-S08 | SK-TT2b-C07 | ebsr/2/2 | find a cause in a series of historical events and the sentence that shows it | Henry Ford and the Model T (p7) | Part A: all 4; Part B: all 4 / Part A: all 4; Part B: all 4 (paragraphs 3-5 hold three Part B choices) / Part A: key / bigger and fancier / workers did many jobs; Part B: all 4 | model t, henry ford, assembly line |
| SK-TT2b-S09 | SK-TT2b-C08 | match/2/2 | sort historical events before or after a key event | the Wright brothers' first flight | all rows open / all rows open / gliders settled (before); wind tunnel, news and half-hour planes open | wright, kitty hawk |
| SK-TT2b-S10 | SK-TT2b-C09 | mc/1/3 | explain why the author tells about doubt in a series of events | the Erie Canal and 'Clinton's Ditch' | all 4 / all 4 / key / people liked muddy roads better / workers did not want to dig | erie canal, clinton |
| SK-TT2b-S11 | SK-TT2b-C10 | hottext/1/2 | find the sentence that shows the cause of an effect the author names | paying for the Statue of Liberty's base (p8) | all 6 / all 6 (paragraphs 3 and 4 hold four targets) / key / ran out of money / Pulitzer wanted to help / children sent coins / statue packed in crates | statue of liberty, pulitzer |
| SK-TT2b-S12 | SK-TT2b-C11 | order/2/2 | put the steps of a procedure in order | making a paper plate sundial | all orders / all orders / taping before the 9:00 line settled; the rest still to place | sundial |
| SK-TT2b-S13 | SK-TT2b-C12 | dropdown/1/2 | find the missing step in a procedure | making a jar garden | all 3 / all 3 / soil / sprinkle water | jar garden, terrarium |
| SK-TT2b-S14 | SK-TT2b-C13 | mc/1/2 | predict what would happen if a step is skipped | sprouting an avocado pit | all 4 / all 4 / key / grows too fast and tips the glass / stem grows down | avocado |
| SK-TT2b-S15 | SK-TT2b-C15 | mc/1/3 | tell how a procedure and a history are told differently | Text 1 writing your name in Braille dots; Text 2 Louis Braille's life | all 4 / all 4 / key / backward choice / both tell what Louis did | braille |

### 3.T.T.2.c

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TT2c-S04 | SK-TT2c-C03 | mc/1/2 | a detail told in only one of two texts | alpacas | all 4 / all 4 / key / lives in mountains / farmers cut wool (colors ruled out) | alpaca |
| SK-TT2c-S05 | SK-TT2c-C05 | dropdown/2/2 | decide whether a fact is in one text or both | igloos, Ben's note | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: both texts / only Text 1 (only Text 2 left, since Text 1 never mentions a bench)... slot 2 settled | igloo |
| SK-TT2c-S06 | SK-TT2c-C06 | dropdown/2/3 | find what two texts are each mostly about and join them | wind turbines and the town of Pine Bluff | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: key / fan (height ruled out); slot 2: all 3 | wind turbine |
| SK-TT2c-S07 | SK-TT2c-C07 | match/2/2 | match information to Text 1, Text 2 or both | rattlesnakes | all rows open / all rows open / night-hunting row settled (not Text 1 or Both); other rows open | rattlesnake |
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
| SK-TSSEQ-S04 | SK-TSSEQ-C02 | mc/1/2 | why a how-to text begins with a materials paragraph | Make a Paper Pinwheel | all 4 / all 4 / key / tells the first step / tells what can go wrong (the question one is ruled out) | pinwheel |
| SK-TSSEQ-S05 | SK-TSSEQ-C04 | mc/1/2 | how changing a time clue word changes the order a reader expects | roasting a marshmallow for s'mores | all 4 / all 4 / key / chocolate (the one that says 'First is not a time word') ruled out / same time | s'mores, marshmallow |
| SK-TSSEQ-S06 | SK-TSSEQ-C05 | mc/1/2 | tell a sequence paragraph from a description paragraph | making play dough vs the music room | all 4 / all 4 / key / reversed / both steps (the 'both steps' one ruled out: B has no time words) | play dough, music room |
| SK-TSSEQ-S07 | SK-TSSEQ-C06 | order/2/2 | put the steps of a science process in order | how sea salt is made | all orders / all orders / seawater into pools first is settled; the other four open | sea salt |
| SK-TSSEQ-S08 | SK-TSSEQ-C07 | mc/1/3 | why an early step makes a later step possible | papier-mache bowl | all 4 / all 4 / key / glue is not needed / wet paper is lighter (the 'color' one ruled out) | papier-mache, paper mache |
| SK-TSSEQ-S09 | SK-TSSEQ-C08 | ms/2/2 | time words that tell how much time passes, not only the order | tie-dyeing a shirt | all 6 / all 6 / key1 / key2 / the 'First' and 'Next' ... (Finally ruled out) | tie-dye |
| SK-TSSEQ-S10 | SK-TSSEQ-C09 | dropdown/2/2 | how a text is put together: a question paragraph and a steps paragraph | how a worm bin makes soil | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: key / last step (compares two bins ruled out); slot 2: all 3 | worm bin |
| SK-TSSEQ-S11 | SK-TSSEQ-C11 | match/2/2 | match events to the name something had at that time | the lake in Dell Park | all rows open / all rows open / pond row settled; others open | lake dell, dell park |
| SK-TSSEQ-S12 | SK-TSSEQ-C12 | mc/1/3 | find the cause of a town's growth in a history text | Alder Creek railroad depot (town grows after a depot opens) | all 4 / all 4 / key / school / the mill closed / river (the school one comes later and is ruled out) | depot |
| SK-TSSEQ-S13 | SK-TSSEQ-C13 | mc/1/2 | find where a new dated event belongs in a history text | the Town Hall clock tower | all 5 / all 5 / key / after sentence 2 area / after sentence 4 (the today sentence ruled out) | clock tower |
| SK-TSSEQ-S14 | SK-TSSEQ-C14 | mc/1/3 | explain why a step comes before the next step | grilled cheese sandwich | all 4 / all 4 / key / bread stiff (not in text) / cheese melts first / pan hotter - the 'buttering the pan' one ruled out | grilled cheese |
| SK-TSSEQ-S15 | SK-TSSEQ-C15 | dropdown/2/2 | choose time words that keep the steps in order | salsa directions | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: After / Meanwhile? ... Before (ruled out? no: slot 2: Finally) | salsa |

### TS-DESC

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TSDESC-S04 | SK-TSDESC-C02 | mc/1/2 | the job of a paragraph's first sentence | a platypus's bill | all 4 / all 4 / key / fun fact / compares with duck (last step ruled out) | platypus |
| SK-TSDESC-S05 | SK-TSDESC-P5 | dropdown/1/2 | choose the clue word that adds another detail | a wombat's claws and fur | all 3 / all 3 / also / only (never ruled out) | wombat |
| SK-TSDESC-S06 | SK-TSDESC-C05 | ms/2/2 | two clues that a paragraph is a description | a covered bridge | all 5 / all 5 / key / key / trouble and fix / compares (steps ruled out) | covered bridge |
| SK-TSDESC-S07 | SK-TSDESC-C06 | dropdown/2/2 | main idea and a detail that supports it | an okapi hiding in the forest | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: key / baby / home | okapi |
| SK-TSDESC-S08 | SK-TSDESC-C08 | ms/2/2 | find two fun facts that can be left out | a rhino's thick skin | all 5 / all 5 / thorns (key detail, ruled out); the other 4 open | rhino |
| SK-TSDESC-S09 | SK-TSDESC-C09 | mc/1/2 | choose a clue word that connects two description sentences | a tapir's legs and skin | all 4 / all 4 / also / however / next (as a result ruled out) | tapir |
| SK-TSDESC-S10 | SK-TSDESC-C10 | mc/1/3 | why a description uses headings instead of time words | a tour of a bookstore | all 4 / all 4 / key / steps / old and new (trouble ruled out) | bookstore |
| SK-TSDESC-S11 | SK-TSDESC-C11 | ms/2/2 | pick the two sentences that state the main idea of the whole passage | a tarantula built to hunt at night | all 6 / all 6 / key / key / topic / hairs / fangs (twenty-years ruled out) | tarantula |
| SK-TSDESC-S12 | SK-TSDESC-C12 | ms/2/2 | choose two details that best support a stated main idea | a capybara near water | all 5 / all 5 / key / key / family groups / weight (grass and bark) ... | capybara |
| SK-TSDESC-S13 | SK-TSDESC-C13 | mc/1/3 | decide if a text-box fact belongs inside a paragraph | a pangolin's scales | all 4 / all 4 / key / yes name shows scales / every fact in paragraph (box must hold main idea ruled out) | pangolin |
| SK-TSDESC-S14 | SK-TSDESC-C14 | mc/1/3 | choose the best main idea sentence for a description | a sea cucumber's ways to stay safe | all 4 / all 4 / key / lives on the bottom / skin is the most useful (First ruled out) | sea cucumber |
| SK-TSDESC-S15 | SK-TSDESC-C15 | dropdown/2/2 | choose clue words that fit a description | a class library corner | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: Also / ...; slot 2 ... | library corner |

### TS-CE

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TSCE-S04 | SK-TSCE-P5 | mc/1/2 | find an effect stated in a paragraph | why a pond freezes from the top | all 4 / all 4 / key / freezes solid to bottom / fish swim up (the 'ice sinks' one ruled out) | pond ice |
| SK-TSCE-S05 | SK-TSCE-C03 | mc/1/3 | why an author includes a section: another effect of the same cause | why a dog pants | all 4 / all 4 / key / dogs sweat is the cause of panting / tells how to train dogs (the 'tell why a dog is hot' ruled out) | dog pants, panting |
| SK-TSCE-S06 | SK-TSCE-C05 | ms/2/3 | find the steps whose mistakes would hide the result | how to make a lava lamp | all 5 / all 5 / key / key / color / jar size / plain (the 'bottle size' one is ruled out) | lava lamp |
| SK-TSCE-S07 | SK-TSCE-C07 | dropdown/1/2 | choose the clue word that fixes a backward cause and effect | plants leaning toward a window | all 3 / all 3 / because / when (so ruled out) | windowsill plants |
| SK-TSCE-S08 | SK-TSCE-C08 | mc/1/3 | find the first cause in a chain of events | ice on Oak Road | all 4 / all 4 / key / bus drove slowly / school started later (the late bus is ruled out as an effect) | ice on the road, school start |
| SK-TSCE-S09 | SK-TSCE-C09 | mc/1/3 | how the author organizes a paragraph: events that lead to one another | a dry summer on the Reyes farm | all 4 / all 4 / key / steps / compares two summers (description of one place ruled out) | drought, dry summer |
| SK-TSCE-S10 | SK-TSCE-C10 | mc/1/2 | find the sentence that tells an effect of a change | a speed bump near a school | all 4 / all 4 / key / bumps were added (cause) / drivers could see kids (not caused by bump) / the school (setting) | speed bump |
| SK-TSCE-S11 | SK-TSCE-C11 | cr/-/3 | write an effect first, then because and its cause | a picnic moved indoors | constructed response: any sentence / ... / ... | picnic, thunder over park |
| SK-TSCE-S12 | SK-TSCE-C12 | ms/2/3 | two effects further down a chain | Mr. Hale stopped mowing the field | all 5 / all 5 / key / key / the weekly mowing (before) / the barn is red (neither) / the lawn mower (not in text)...  | mowing, wildflower field |
| SK-TSCE-S13 | SK-TSCE-C13 | match/2/3 | tell what is true for only one text or for both texts | two short texts about a cracked sidewalk and a flooded lot | all rows open / all rows open / plant row settled; the rain row and the two both rows open | tree roots sidewalk, flooded lot |
| SK-TSCE-S14 | SK-TSCE-C14 | mc/1/3 | predict what will happen next from a cause | Grandpa's rusty wheelbarrow | all 4 / all 4 / key / rust more / gets holes (the shed keeps it dry...) / paint wears off | wheelbarrow, rust |
| SK-TSCE-S15 | SK-TSCE-C15 | ms/2/2 | join two facts into a cause-and-effect sentence with a clue word | a gate left open and goats | all 5 / all 5 / key / key / the backward so / but (the 'but' one ruled out) | gate, garden goats |

### TS-CC

| id | like | type/pts/DOK | skill | context | live after hint 1 / 2 / 3 | topic searched |
|---|---|---|---|---|---|---|
| SK-TSCC-S04 | SK-TSCC-P5 | dropdown/1/2 | choose the contrast clue word | centipedes and millipedes | all 3 / all 3 / Unlike / Because (Like ruled out) | centipede, millipede |
| SK-TSCC-S05 | SK-TSCC-P6 | ms/2/2 | pick two sentences that tell how things are alike | ice skates and roller skates | all 5 / all 5 / two keys / ice blades / roller wheels / frozen rink... (ice blades ruled out) | ice skates, roller skates |
| SK-TSCC-S06 | SK-TSCC-C04 | mc/1/2 | why an author compares two things | seals and sea lions | all 4 / all 4 / key / sea lions better swimmers (ruled out) / pet seal / louder seals | sea lion, seal |
| SK-TSCC-S07 | SK-TSCC-C06 | dropdown/2/2 | finish a sentence that tells how two things are alike | a frisbee and a boomerang | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: spin / land far (disk shape ruled out) | frisbee, boomerang |
| SK-TSCC-S08 | SK-TSCC-C07 | mc/1/2 | pick the sentence that best shows two things are alike | a ukulele and a banjo | all 4 / all 4 / key / banjo round body / ukulele soft sound (the Hawaii one) ... | ukulele, banjo |
| SK-TSCC-S09 | SK-TSCC-C08 | mc/1/3 | how the differences are organized: one topic at a time | a subway train and a trolley | all 4 / all 4 / key / all of one then all of other / most to least important (oldest to newest ruled out) | subway, trolley |
| SK-TSCC-S10 | SK-TSCC-C10 | mc/1/2 | find how two different things are alike | a typewriter's paper and a laptop's screen | all 4 / all 4 / key / laptop fix (ruled out) / typed again (paper only) / saved (laptop only) | typewriter, laptop |
| SK-TSCC-S11 | SK-TSCC-C09 | dropdown/2/2 | find the sentence that starts with the wrong clue word | a trampoline and a swing set | slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: all 3 / slot 1: all 3; slot 2: Likewise / On the other hand (As a result ruled out) | trampoline, swing set |
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
| SK-TC1b-S12 | SK-TC1b-C12 | mc/1/3 | why a diagram beats a photo | toaster cutaway vs photo | all 4 / all 4 / key / photo shows colors better? (ruled out) / photo of a toaster is too small / diagrams are always shorter | toaster |
| SK-TC1b-S13 | SK-TC1b-C13 | ms/2/2 | web features not in a printed paper | Greenway Park newsletter | all 5 / all 5 / two keys / headline / photo with caption / calendar box | Greenway Park, sign-up button |
| SK-TC1b-S14 | SK-TC1b-C14 | ms/2/2 | keep listeners on track in a talk | Theo's talk about three ways to keep a garden healthy | all 5 / all 5 / two keys / hold up headings (ruled out) / talk very fast / whisper | garden talk |
| SK-TC1b-S15 | SK-TC1b-C15 | mc/1/2 | why a podcast uses a sound effect | school podcast with an alarm clock sound at the morning start | all 4 / all 4 / key / tells the story is over / shows the speaker is angry / tells listeners to stop | alarm clock |

## Not done / for the reviewer
- Independent review of all 108 items is still needed (hints, giveaways, answer correctness). The "live" column is my own record, not a review.
- check-content currently reports 3 failures that are not in my lessons: SK-RA2a-S14 in 3.T.RA.2.a (the answer text is not named in how or why; another agent's block, probably mid-edit) and two "accepted" failures (3.T.T.3.a and 3.T.RA.1.a missing from js/data/accepted.js). Earlier failures in 3.T.T.1.b (SK-TT1b-S06, SK-TT1b-S15) are no longer reported.
- Other lessons still show similar-coverage warnings (for example 3.T.SS.2.a and 3.T.T.4.a); those belong to other agents.
- Figures were not added: diagram and photo items (SS1a S07, S11, S13; TC1b S04, S08, S09, S11, S12) describe the picture in the stem text, so no new images exist. A reviewer may want to add figures.
- In 3.T.SS.1.a the hot-text and ebsr core types are practised with multiple-choice similar items (no new passages), and TC1b-S09 is an `order` item without a figure.
- Meta source files with the per-item notes are in the session scratchpad (sim2/*.meta.json); this log was built from them.
