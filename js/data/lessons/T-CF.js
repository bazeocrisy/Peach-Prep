/* Lessons: new component lessons (expansion 2026-10-22, block B5-comp).
   TF-FEAT: where information goes (chapters, sections, headings, table of contents and index, maps, captions, text boxes).
   TF-DIG: digital, audio and spoken features.
   Schema: docs/SPEC.md §8 and §8b, docs/expansion-2026-10-22/01-architecture.md §2.2-2.3.
   AUTHORED (B5 comp), NEEDS INDEPENDENT REVIEW. Not in js/data/accepted.js. Author log: docs/expansion-2026-10-22/batches/B5-comp-author-log.md */
PP.addLesson({
  key: "TF-FEAT",
  code: "3.T.SS.1.a",
  codes: ["3.T.SS.1.a", "3.T.C.1.b"],
  title: "Where information goes: chapters, headings, maps and captions",
  teach: {
    big: "Authors arrange a text into parts, and each part has a job. When you know what each part is for, you can find facts fast.",
    points: [
      "A book is made of chapters. A chapter is a big part of a book, and a chapter can have sections inside it. A section is a smaller part, and it often has its own heading. To talk about a part, name it the way a book does: \"In Chapter 2, the section called Warm-Ups says...\"",
      "A heading is a small title over a section. It tells what that section is about, so you can skim the headings to find the part you need. The table of contents is a list at the front of a book. It shows each chapter, and sometimes its sections, with the page where each one starts. A part keeps going until the next part starts. An index is at the back. It lists topics in ABC order, with every page where each topic is found.",
      "A map shows where places are. The compass rose shows directions: north is usually at the top of the map, so east is on the right. The key tells what each symbol on the map means. Labels name places.",
      "A caption sits by a picture and tells what it shows. A good caption can also add something the picture cannot show, like when, where or why. A label names one part inside a picture. A text box sits apart from the main text. It can hold an extra fact, a tip, or something for you to try.",
      "Authors also choose the order of the parts. Steps go in the order you do them. Places go in the order you walk to them. Ideas can build, one on top of another. To decide where a new sentence or picture belongs, find the section that tells about the same thing. Authors also choose how to group things. If readers will look something up by its date, a book can group by date. If they will look it up by a person, a book can group by person."
    ],
    words: [
      { term: "chapter", means: "one of the big parts of a book; a chapter can have sections inside it" },
      { term: "section", means: "a smaller part of a chapter or a text, often with its own heading" },
      { term: "table of contents", means: "a list at the front of a book that shows the chapters, and the page where each one starts" },
      { term: "index", means: "a list at the back of a book of topics in ABC order, with the pages where each one is found" },
      { term: "compass rose", means: "the arrow or star on a map that shows directions, such as north" },
      { term: "key", means: "the box on a map that tells what each symbol means" },
      { term: "label", means: "a word with a line that names one part of a picture" },
      { term: "text box", means: "a set-apart box next to the main text that holds an extra fact, a tip or an activity" }
    ],
    example: {
      label: "How a page is arranged",
      lines: ["Chapter 3: Getting Ready to Paint", "Section: Choose Your Brushes", "Section: Mix Your Colors", "Section: Clean Up"],
      note: "Chapter 3 is the big part. The three sections are smaller parts inside it, and each one has a heading. The sections are in the order a painter does the jobs: choose brushes, mix colors, then clean up."
    },
    tip: "On the test, you may be asked which section or chapter to read, what a map's key or compass tells you, why a caption or box is there, or where a new sentence belongs. Look at the headings and features first."
  },
  learn: [
    {
      show: ["Here is part of the table of contents from a book called Bread Around the World.", "Chapter 1: What Is Bread?, page 1", "Chapter 2: Flat Breads, page 8", "• Tortillas, page 9", "• Pita, page 12", "Chapter 3: Loaves, page 16", "• Sandwich Bread, page 17"],
      ask: "Is Pita a chapter or a section? On which page does it start?",
      steps: [
        "Find Pita in the list. It has a bullet, and it sits under Chapter 2: Flat Breads.",
        "A part that sits inside a chapter is a section. So Pita is a section of Chapter 2.",
        "Read the page number beside it. Pita starts on page 12, and it keeps going until the next chapter starts on page 16."
      ],
      answer: "Pita is a section of Chapter 2. It starts on page 12."
    },
    {
      show: ["The camp director says, \"Meet at the building that is straight east of the dock.\" Here is the map of Camp Pinewood."],
      figure: { src: "assets/figures/tf-camp-map.svg", label: "Figure 1", caption: "Map of Camp Pinewood",
        alt: "Map of Camp Pinewood. An arrow marked N points up. A lake fills the left side of the map. A thick black bar for the dock reaches into the lake from the shore. Straight to the right of the dock is a white square. Two black triangles are above and below the square. A white circle sits near the bottom, next to the lake. The key shows a triangle for a cabin, a square for the dining hall, a thick bar for the dock, a circle for the fire ring and a blue box for the lake." },
      ask: "Which building is straight east of the dock?",
      steps: [
        "Find the compass arrow. N points up, so north is the top of the map and east is the right side.",
        "Find the dock in the key and on the map. Then look straight across to the right of it.",
        "Check the symbol you reach in the key. The key tells you what it stands for."
      ],
      answer: "The dining hall is straight east of the dock."
    },
    {
      show: ["A page about sand castles has the heading Pick Wet Sand. A photo shows two hands packing wet sand into a bucket.", "Caption: Mia packs wet sand tightly so that her tower will stand tall.", "Box: Try It! Fill one cup with dry sand and one with wet sand. Turn each one over. What happens?"],
      ask: "What does the caption tell that the photo cannot show? What does the box ask the reader to do?",
      steps: [
        "The photo shows two hands, a bucket and wet sand. A reader can see all of that.",
        "The caption adds a reason the photo cannot show: Mia packs the sand tightly so that her tower will stand tall.",
        "The box has the label Try It! It asks the reader to do a small test with two cups of sand."
      ],
      answer: "The caption tells why Mia packs the sand tightly. The box asks the reader to try the two cups and see what happens."
    }
  ],
  parent: "Next time you use a cookbook, a map or a kids' book with chapters, ask your child to find one thing using only the table of contents, the headings or the map key. Then ask: Which part of the page helped you find it?",
  passages: [
    /* p1: core set 1. Fun with Jump Rope, a made-up book. */
    { id: "p1", title: "Chapter 2: Basic Jumps", genre: "Informational text",
      paragraphs: [
        ["Every jump rope trick starts with a few basic jumps.", "Learn these first, and the harder tricks will come more easily."],
        ["## Choosing Your Rope"],
        ["Stand on the middle of the rope with one foot.", "Pull the handles up toward your chest.", "If the handles reach your armpits, the rope is the right length.", "A rope that is too long will drag on the ground."],
        ["## The Two-Foot Hop"],
        ["Hold the handles at your sides, a little in front of you.", "Swing the rope over your head with your wrists, not your arms.", "Then hop over the rope with both feet together.", "Stay on your toes and keep each hop small."],
        ["## Running in Place"],
        ["Once the two-foot hop feels easy, try jumping with one foot at a time, as if you were running in place.", "Land softly on the ball of each foot.", "This jump is good for long rounds because it is easy to keep going."],
        ["Box: Try It! Count your hops for one minute.", "Try again next week to see if your count grows."]
      ] },
    /* p2: core set 2. Fern Hollow Park is made up. Its map is assets/figures/tf-trail-map.svg (shown only in C06). */
    { id: "p2", title: "Fern Hollow Nature Trail", genre: "Informational text",
      paragraphs: [
        ["Fern Hollow Park has a nature trail that is easy for walkers of every age.", "The trail makes a loop, so you finish where you started."],
        ["## Start at the Parking Lot"],
        ["Walk north from the parking lot to the picnic tables.", "Many families stop here to eat lunch before they hike.", "After that, keep going north until the trail turns east."],
        ["## Around the Pond"],
        ["The trail runs along the north side of the pond.", "Look for ducks and turtles near the water.", "Walk quietly, and you may see even more animals."],
        ["## The Bird Tower"],
        ["A tall bird tower stands at the northeast corner of the trail.", "Climb the stairs to look out over the treetops.", "Early morning is the best time to spot birds."],
        ["## Home Again"],
        ["From the tower, the trail heads south along the east side of the pond.", "It crosses a footbridge and then leads back to the parking lot."],
        ["Box: Trail Tip: Wear shoes that can get muddy.", "The path near the footbridge can be wet."]
      ] },
    /* p3: core set 3. */
    { id: "p3", title: "How a Pothole Forms", genre: "Informational text",
      paragraphs: [
        ["A pothole is a hole that opens in a road.", "Some are small, and some are big enough to bend a bike wheel."],
        ["## Water in the Road"],
        ["Rain falls on the road and runs into tiny cracks.", "The road looks solid, but water can slip down inside it.", "On a cold night, that water starts to freeze."],
        ["## Ice Takes Up Room"],
        ["Ice needs more room than water does, so it pushes the cracks wider.", "When the sun comes out, the ice melts and leaves a gap under the road.", "A road with a gap under it can hold for a while, but it gets weaker."],
        ["## The Road Breaks"],
        ["At last, cars roll over the weak spot.", "A piece of road snaps loose, and a pothole opens."],
        ["Box: Did You Know? Workers fix a pothole by filling it with hot, sticky asphalt."]
      ] },
    /* p4: Practice Together only. */
    { id: "p4", title: "Saving Water at Home", genre: "Informational text",
      paragraphs: [
        ["Every drop of water we use at home has to be cleaned and carried to our houses.", "When we use less, we help save it.", "Saving water is easy, and every person in a family can help."],
        ["## In the Bathroom"],
        ["A short shower uses less water than a long bath.", "Turn the water off while you brush your teeth."],
        ["## In the Kitchen"],
        ["Wash fruits and vegetables in a bowl, not under a running tap.", "Fill the dishwasher all the way before you run it."],
        ["## In the Yard"],
        ["Put a bucket outside to catch rain.", "Use the rainwater to give your plants a drink."],
        ["Box: Did You Know? A dripping faucet can waste many gallons of water in a week."]
      ] },
    /* p5: skill check only (test). Never used by core, similar or Together. */
    { id: "p5", title: "Blueberry Season", genre: "Informational text",
      paragraphs: [
        ["Blueberries grow on bushes, and Georgia farmers grow a lot of them."],
        ["## Flowers in Spring"],
        ["In early spring, each bush is covered with tiny white flowers shaped like bells.", "Bees visit the flowers to drink nectar.", "Soon the flowers fall off, and small green berries begin to grow."],
        ["## Berries in Summer"],
        ["By early summer, the berries turn blue.", "Workers pick them by hand or with a machine that gently shakes the bush.", "Ripe berries fall into a pan below."],
        ["## From Bush to Basket"],
        ["The berries are rinsed, sorted and packed into small boxes.", "Trucks carry the boxes to stores."],
        ["Box: Did You Know? A blueberry bush can give fruit for many years."]
      ] },
    /* p6: used only by similar item SK-TFF-S11. */
    { id: "p6", title: "How a Pearl Is Made", genre: "Informational text",
      paragraphs: [
        ["A pearl is a smooth, shiny bead that grows inside an oyster.", "Oysters live in the sea, and each one has a soft body inside a hard shell."],
        ["## A Tiny Visitor"],
        ["Sometimes a tiny speck of grit slips inside an oyster's shell.", "The grit feels rough against the oyster's soft body.", "The oyster cannot push it out."],
        ["## Layer by Layer"],
        ["To protect itself, the oyster covers the grit with a smooth coating.", "Day after day, it adds another thin layer.", "This shiny coating is called nacre."],
        ["## A Pearl at Last"],
        ["After a few years, nacre has covered the grit completely.", "The grit has become a pearl.", "People open the oyster to find it."]
      ] }
  ],
  practice: [
    { id: "SK-TFF-P1", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p4"],
      prompt: "Tia wants a tip for washing fruit without wasting water. Under which heading should she look?",
      choices: [
        { text: "In the Kitchen", correct: true },
        { text: "In the Bathroom" },
        { text: "In the Yard" },
        { text: "Did You Know?" }
      ],
      clue: "A heading tells what a section is about. Ask which place in a home each section is for.",
      why: "The answer is \"In the Kitchen.\" That section has the tip about washing fruits and vegetables in a bowl. The bathroom section is about showers and teeth, and the yard section is about rain." },
    { id: "SK-TFF-P2", type: "match", points: 2, dok: 1, std: ["3.T.SS.1.a"], passages: [],
      stem: ["The contents page of a book called Saving Water lists these parts.", "Chapter 1: Why Water Matters, page 1", "Chapter 2: Saving at Home, page 6", "• In the Bathroom, page 7", "• In the Kitchen, page 9", "Chapter 3: Saving at School, page 12"],
      prompt: "Match each title to what it names in the book.",
      cols: ["a chapter", "a section"],
      rows: [
        { text: "Saving at Home", answer: 0 },
        { text: "In the Kitchen", answer: 1 },
        { text: "Why Water Matters", answer: 0 },
        { text: "In the Bathroom", answer: 1 }
      ],
      clue: "A chapter is a big part of a book. A section is a smaller part inside a chapter. In the list, sections have a bullet.",
      why: "Saving at Home and Why Water Matters are chapters, because each one is marked Chapter in the list. In the Kitchen and In the Bathroom are sections, because they sit inside Chapter 2." },
    { id: "SK-TFF-P3", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: [],
      stem: ["A photo for a page about saving water shows a girl pouring water from a bucket onto a row of small plants. Nothing else is in the picture."],
      prompt: "Which caption adds something that the photo cannot show?",
      choices: [
        { text: "Rainwater from the bucket gives the plants a free drink.", correct: true },
        { text: "A girl pours water from a bucket onto small plants." },
        { text: "A bucket and a row of plants stand in the yard." },
        { text: "A girl bends over a row of green plants." }
      ],
      clue: "A caption can tell more than a photo shows. Ask which caption adds a fact a reader could not see.",
      why: "The answer is \"Rainwater from the bucket gives the plants a free drink.\" A photo cannot show where the water came from. The other captions only tell what anyone can already see: the girl, the bucket and the plants." },
    { id: "SK-TFF-P4", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p4"],
      stem: ["The author wants to add this sentence to the article: \"Water your plants early in the morning so less water dries up in the sun.\""],
      prompt: "In which section does the new sentence fit best?",
      choices: [
        { text: "In the Yard", correct: true },
        { text: "In the Bathroom" },
        { text: "In the Kitchen" },
        { text: "the opening paragraph" }
      ],
      clue: "To decide where a new sentence belongs, find the section that is about the same thing.",
      why: "The answer is \"In the Yard.\" Watering plants outside is what that section is about. The bathroom and kitchen sections tell about water used inside, and the opening paragraph only says why saving water matters." }
  ],
  /* ---------- B5-comp core (expansion 2026-10-22). Fifteen new items in three sets of five; no { ref } items.
     Set 1 text: p1 (jump rope book chapter) plus an inline table of contents. Set 2: p2 (trail brochure), its map, a photo-caption
     stem and a book-page stem. Set 3: p3 (glaciers) plus inline transfer stems. Practice Together = all four practice items.
     NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { id: "SK-TFF-C01", type: "dropdown", points: 2, dok: 1, std: ["3.T.SS.1.a"], passages: ["p1"],
        prompt: "This part of a book is called Chapter 2: Basic Jumps. Choose the words that best complete the sentences.",
        text: "The words \"Basic Jumps\" name a {0} of the book. The heading \"The Two-Foot Hop\" names a {1} inside it.",
        slots: [
          { options: ["chapter", "section", "paragraph"], answer: 0 },
          { options: ["chapter", "section", "paragraph"], answer: 1 }
        ],
        clue: "Ask which part is bigger. A book is made of chapters, and a chapter can hold sections.",
        hints: [
          "Ask which part is bigger. A book is made of chapters, and a chapter can hold sections.",
          "Read the title at the top of the passage. Then find the heading above the paragraph about hopping.",
          "A paragraph is only a few sentences, so neither name here is a paragraph. For each blank, decide which of the other two words fits the bigger part and which fits the smaller part."
        ],
        how: [
          "The title says Chapter 2: Basic Jumps, so Basic Jumps is a whole chapter, a big part of the book.",
          "The heading The Two-Foot Hop sits inside that chapter and names one smaller part, so it is a section.",
          "The answers are chapter and section. A paragraph is only a few sentences, so it is too small to be either one."
        ],
        misconception: "A common mix-up is calling every heading a chapter. Chapters are the big parts of a book, and sections are the smaller parts inside them.",
        why: "The answers are chapter and section. The title says Chapter 2: Basic Jumps, so Basic Jumps names a chapter. The heading The Two-Foot Hop names one smaller part inside it, a section. A paragraph is only a few sentences." },
      { id: "SK-TFF-C02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Here is part of the table of contents from a book called Fun with Jump Rope.", "Chapter 1: Getting Started, page 1", "Chapter 2: Basic Jumps, page 6", "• Choosing Your Rope, page 7", "• The Two-Foot Hop, page 10", "• Running in Place, page 12", "Chapter 3: Fancy Tricks, page 16", "• Crossing Your Arms, page 17"],
        prompt: "How many pages are in Chapter 2: Basic Jumps?",
        choices: [
          { text: "10 pages", correct: true },
          { text: "6 pages" },
          { text: "11 pages" },
          { text: "16 pages" }
        ],
        clue: "A table of contents tells where each part starts. A chapter keeps going until the next chapter starts.",
        hints: [
          "A table of contents tells where each part starts. A chapter keeps going until the next chapter starts.",
          "Find the page where Chapter 2 starts and the page where Chapter 3 starts. Then count the pages from one to the other.",
          "Page 16 is where Chapter 3 starts, so it is not the length of Chapter 2. Rule out the choice that gives that number, and work out the length from the other start pages."
        ],
        how: [
          "Chapter 2 starts on page 6, and Chapter 3 starts on page 16.",
          "Chapter 2 keeps going until Chapter 3 starts. From page 6 up to page 16 is 10 pages.",
          "The answer is \"10 pages.\" Six is only the page where the chapter starts, sixteen is where the next chapter starts, and eleven counts one page too many."
        ],
        misconception: "A common mix-up is giving a page number from the list as the length. The length is how far the chapter runs, from its start to where the next chapter starts.",
        why: "The answer is \"10 pages.\" Chapter 2 starts on page 6 and Chapter 3 starts on page 16, so Chapter 2 runs for 10 pages." },
      { id: "SK-TFF-C03", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p1"], pick: 2,
        prompt: "How do the headings in this chapter help a reader? Choose TWO answers.",
        choices: [
          { text: "They tell what each section is about before the reader starts reading it.", correct: true },
          { text: "They help a reader skim and find the part about the rope or a jump.", correct: true },
          { text: "They tell which jump is the hardest one for a new jumper to learn first." },
          { text: "They tell the page number where each section of the chapter begins." },
          { text: "They explain what each hard word in the chapter means in a short note." }
        ],
        clue: "A heading is a small title over a section. Ask what a heading is for.",
        hints: [
          "A heading is a small title over a section. Ask what a heading is for.",
          "Look at the three headings in the chapter and at what each one names. Then think about what a reader could do by looking only at the headings.",
          "Page numbers are listed in a table of contents, and none of these headings has a page number beside it, so one choice is ruled out. Choose two of the four that are left."
        ],
        how: [
          "Each heading names what its section is about. The Two-Foot Hop tells the reader what is coming before the reader begins.",
          "A reader who needs a rope can skim the three headings and go straight to Choosing Your Rope.",
          "The answers are \"They tell what each section is about before the reader starts reading it.\" and \"They help a reader skim and find the part about the rope or a jump.\"",
          "The headings do not rank the jumps and they have no page numbers. A table of contents gives page numbers, and a glossary explains words."
        ],
        misconception: "A common mix-up is giving a heading another feature's job. A heading names a section. The table of contents gives the pages.",
        why: "The answers are \"They tell what each section is about before the reader starts reading it.\" and \"They help a reader skim and find the part about the rope or a jump.\" The headings name the sections. They do not rank the jumps, give page numbers or explain words." },
      { id: "SK-TFF-C04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: ["p1"],
        prompt: "The author wants to rewrite the Try It! box. Which rewrite does the same kind of job as the box in the chapter and fits what the chapter taught?",
        choices: [
          { text: "Try It! Hop over your rope with both feet together ten times in a row.", correct: true },
          { text: "Try It! Jump rope is a fun way to stay active with your friends." },
          { text: "Try It! Turn to Chapter 3 to read about harder tricks and games." },
          { text: "Try It! The handles of a rope should reach up to your armpits." }
        ],
        clue: "Read the Try It! box that is already in the chapter. Ask what job it gives the reader.",
        hints: [
          "Read the Try It! box that is already in the chapter. Ask what job it gives the reader.",
          "Compare each rewrite with that box. Ask which rewrites give the reader a job to do, and which only tell something.",
          "A fact that is already in the paragraphs is not something new to try, so one rewrite is ruled out. Check the other three against the box in the passage."
        ],
        how: [
          "The Try It! box at the end of the chapter asks the reader to do something with the jumps: count hops for one minute.",
          "A good rewrite keeps that kind of job and practices what the chapter taught.",
          "The answer is \"Try It! Hop over your rope with both feet together ten times in a row.\" It asks the reader to practice the two-foot hop.",
          "The sentence about fun gives an opinion. The sentence about Chapter 3 points to another part of the book. The sentence about the handles repeats a fact that is already in the paragraphs."
        ],
        misconception: "A common mix-up is thinking any sentence can go in a text box. This box gives the reader something to try, not an opinion, a pointer or a fact the sections already tell.",
        why: "The answer is \"Try It! Hop over your rope with both feet together ten times in a row.\" The box in the chapter gives the reader a job to try, and this rewrite does too, with the jump the chapter taught. The other rewrites give an opinion, point to Chapter 3 or repeat a fact." },
      { id: "SK-TFF-C05", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p1"],
        prompt: "Which sentence shows why the last section of the chapter comes after the section before it? Choose the sentence in the passage.",
        targets: ["p1:3:1", "p1:5:1", "p1:5:3", "p1:7:1", "p1:7:2", "p1:7:3"],
        answer: ["p1:7:1"], pick: 1,
        clue: "Authors put sections in an order for a reason. Look for words that connect one section to the section before it.",
        hints: [
          "Authors put sections in an order for a reason. Look for words that connect one section to the section before it.",
          "Read the first sentence of each of the three sections. Ask which one points back to something earlier in the chapter.",
          "The sentence that begins \"Hold the handles at your sides\" tells what to do with your hands and says nothing about an earlier section, so rule it out. Check the other sentences you can choose for words that look back."
        ],
        how: [
          "The headings go Choosing Your Rope, The Two-Foot Hop, Running in Place, so the author chose an order.",
          "The first sentence under Running in Place begins with Once and names the two-foot hop from the section before.",
          "The answer is \"Once the two-foot hop feels easy, try jumping with one foot at a time, as if you were running in place.\" It says to try the new jump after the earlier one feels easy.",
          "The other sentences tell how to do one jump or why it is useful. None of them looks back at an earlier section."
        ],
        misconception: "A common mix-up is choosing a sentence that tells how to do a jump. The question asks which sentence links two sections.",
        why: "The answer is \"Once the two-foot hop feels easy, try jumping with one foot at a time, as if you were running in place.\" It names the two-foot hop from the section before, so the reader learns that hop first. The other sentences tell how to do the jumps or why one is useful." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TFF-C06", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Look at the map of the Fern Hollow Nature Trail."],
        figure: { src: "assets/figures/tf-trail-map.svg", label: "Figure 1", caption: "Map of the Fern Hollow Nature Trail",
          alt: "Map of the Fern Hollow Nature Trail. An arrow marked N points up. A dashed trail makes a loop. A pond labeled Pond is inside the loop. A black square is on the west side of the loop, straight left of the pond. A white circle marked P is at the bottom left corner of the loop, straight below the black square. A black triangle is at the top right corner of the loop. A white bar is at the bottom right corner of the loop. The key shows a circle for the parking lot, a black square for the picnic tables, a triangle for the bird tower, a white bar for the bridge and a dashed line for the trail." },
        prompt: "Which place is straight east of the picnic tables?",
        choices: [
          { text: "the pond", correct: true },
          { text: "the bird tower" },
          { text: "the footbridge" },
          { text: "the parking lot" }
        ],
        clue: "A compass rose shows directions. Find which way is north first, and work out east from there.",
        hints: [
          "A compass rose shows directions. Find which way is north first, and work out east from there.",
          "Find the picnic tables by matching the key to the map. Then use the arrow to work out which side of the map is east.",
          "The parking lot is straight south of the picnic tables, not east, so it is not the answer. Check the other places against east."
        ],
        how: [
          "The arrow marked N points up the page, so north is the top of the map. East is the right side.",
          "The key shows the picnic tables as a black square, on the left side of the map.",
          "Look straight across to the right of the square. The first place you reach is the pond, so the answer is \"the pond.\"",
          "The bird tower is up and to the right, the footbridge is down and to the right, and the parking lot is straight below the square."
        ],
        misconception: "A common mix-up is choosing any place on the right side of the map. Straight east means the place at the same level as the picnic tables.",
        why: "The answer is \"the pond.\" North is at the top, so east is on the right. Straight right of the picnic tables is the pond. The bird tower and the footbridge are also on the right, but they are up and down from the picnic tables. The parking lot is straight south." },
      { id: "SK-TFF-C07", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: [],
        stem: ["Mr. Carter's third-grade class grew bean plants in paper cups. A photo for the class newsletter shows a girl in a blue shirt who is holding a cup with a small bean plant. The plant has two green leaves. Nothing else is in the picture."],
        prompt: "The writer wants a caption that tells readers something the photo cannot show. Choose the words that best complete the caption.",
        text: "Caption: {0}",
        slots: [
          { options: ["A girl holds a bean plant that she grew from a seed in two weeks.", "A girl in a blue shirt holds a cup with a small bean plant in it.", "A small bean plant with two green leaves grows in a paper cup."], answer: 0 }
        ],
        clue: "A caption can do more than describe a picture. Ask what a reader could learn from it that they cannot see.",
        hints: [
          "A caption can do more than describe a picture. Ask what a reader could learn from it that they cannot see.",
          "Read the description of the photo in the box. Then read each caption and ask which of its details a reader could already see.",
          "The blue shirt is a detail anyone can see in the photo, so the caption that names it adds nothing new. Check the other two captions the same way."
        ],
        how: [
          "The photo shows a girl, a blue shirt, a paper cup, a small plant and two green leaves. A reader can see all of that.",
          "A caption is most helpful when it adds something the picture cannot show, such as how long something took or how it happened.",
          "The answer is \"A girl holds a bean plant that she grew from a seed in two weeks.\" A photo cannot show how long a plant took to grow.",
          "The other captions only repeat what anyone can see: the blue shirt, the cup and the two leaves."
        ],
        misconception: "A common mix-up is thinking a caption should list every detail of the picture. A caption is better when it adds who, when, where or why.",
        why: "The answer is \"A girl holds a bean plant that she grew from a seed in two weeks.\" The time it took to grow cannot be seen in a photo. The other captions only describe what the picture shows." },
      { id: "SK-TFF-C08", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: ["p2"],
        prompt: "Why did the author put the sections of this brochure in this order?",
        choices: [
          { text: "The sections follow the path a walker takes around the trail.", correct: true },
          { text: "The sections go from the easiest part of the trail to the hardest part." },
          { text: "The sections go from the shortest part of the trail to the longest part." },
          { text: "The sections tell about the most popular places first and the least popular last." }
        ],
        clue: "Authors choose an order that helps the reader. Ask what the reader will be doing while reading.",
        hints: [
          "Authors choose an order that helps the reader. Ask what the reader will be doing while reading.",
          "Read the four headings in order. Then read the first sentence under each one and ask where it sends the reader.",
          "The brochure never says that one part of the trail is harder than another, so rule out the choice about easy and hard. Check the others against the order of the places."
        ],
        how: [
          "The headings go Start at the Parking Lot, Around the Pond, The Bird Tower and Home Again.",
          "The first sentences name places in the order a walker reaches them: north to the picnic tables, along the pond, to the tower, and then south and back to the start.",
          "The answer is \"The sections follow the path a walker takes around the trail.\"",
          "Nothing in the brochure says the sections go from easy to hard, from short to long or from popular to not popular."
        ],
        misconception: "A common mix-up is guessing a reason the text never gives. Look at the order of the places the sections name.",
        why: "The answer is \"The sections follow the path a walker takes around the trail.\" The sections start at the parking lot, go around the pond to the tower, and end back at the start. The brochure never ranks the parts of the trail." },
      { id: "SK-TFF-C09", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: [],
        stem: ["A page in a book about grasshoppers has these four features."],
        prompt: "Match each feature to its job.",
        cols: ["Tells what one section is about", "Tells what a whole picture shows", "Names one part of a picture", "Adds an extra fact"],
        rows: [
          { text: "The title Big Legs for Jumping, above a few paragraphs", answer: 0 },
          { text: "The sentence A grasshopper rests on a blade of grass, printed beside a photo", answer: 1 },
          { text: "The word leg, with a line that points to one part of a drawing", answer: 2 },
          { text: "A box that says Did You Know? Some grasshoppers buzz by rubbing their legs on their wings.", answer: 3 }
        ],
        clue: "Each feature on a page has its own job. Ask what each one does for the reader.",
        hints: [
          "Each feature on a page has its own job. Ask what each one does for the reader.",
          "Look at where each feature sits: above a section, beside a whole picture, with a line that points into a picture, or set apart in a box.",
          "The word with the line points into the drawing and names something inside it, so match that row to the job that names one part. Decide the other three rows yourself."
        ],
        how: [
          "The title above the paragraphs is a heading. It tells what that section is about.",
          "The sentence beside the photo is a caption. It tells what the whole picture shows.",
          "The word leg has a line that points to one part of the drawing, so it is a label. It names one part of a picture.",
          "The box that says Did You Know? sets one extra fact apart from the sections."
        ],
        misconception: "A common mix-up is treating a label and a caption as the same thing. A label names one part, and a caption tells about the whole picture.",
        why: "The heading tells what one section is about. The caption beside the photo tells what the whole picture shows. The word leg is a label, so it names one part of a picture. The box that says Did You Know? adds an extra fact." },
      { id: "SK-TFF-C10", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p2"], pick: 2,
        prompt: "A visitor wants to see wild animals on the trail. Which TWO sections should the visitor read? Choose TWO answers.",
        choices: [
          { text: "Around the Pond", correct: true },
          { text: "The Bird Tower", correct: true },
          { text: "Start at the Parking Lot" },
          { text: "Home Again" },
          { text: "Trail Tip" }
        ],
        clue: "A heading tells what a section is about. Use the headings to pick sections, and then check what the sentences say.",
        hints: [
          "A heading tells what a section is about. Use the headings to pick sections, and then check what the sentences say.",
          "Skim each section and look for sentences about animals the visitor could see. Choose two sections.",
          "The section that starts at the parking lot tells where families eat lunch, not which animals to look for, so rule it out. Check the other choices the same way."
        ],
        how: [
          "Skim each section for animals a visitor could see.",
          "Around the Pond says to look for ducks and turtles. The Bird Tower says that early morning is the best time to spot birds.",
          "The answers are Around the Pond and The Bird Tower.",
          "Start at the Parking Lot is about picnic tables and lunch. Home Again is about the footbridge. Trail Tip is about shoes."
        ],
        misconception: "A common mix-up is choosing a heading from its name alone. Check what the sentences in the section say.",
        why: "The answers are Around the Pond and The Bird Tower. The pond section tells about ducks and turtles, and the tower section tells when to spot birds. The other choices are about lunch, the footbridge and shoes." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TFF-C11", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why are the sections of this article in this order?",
          choices: [
            { text: "Each section builds on the one before it, from water in the road to a broken road.", correct: true },
            { text: "Each section tells about a different road in a different part of the world." },
            { text: "The sections go from the smallest pothole in town to the biggest pothole in town." },
            { text: "The sections start with the most surprising fact and end with the least surprising." }
          ] },
        partB: { prompt: "Which sentence best shows how the section \"The Road Breaks\" builds on the section before it?",
          choices: [
            { text: "\"At last, cars roll over the weak spot.\"", correct: true },
            { text: "\"A piece of road snaps loose, and a pothole opens.\"" },
            { text: "\"A road with a gap under it can hold for a while, but it gets weaker.\"" },
            { text: "\"On a cold night, that water starts to freeze.\"" }
          ] },
        clue: "Authors often choose an order that helps the reader follow along. Ask what you need to know first to understand each section.",
        hints: [
          "Authors often choose an order that helps the reader follow along. Ask what you need to know first to understand each section.",
          "For Part A, read the three headings in order and think about what each section is about. For Part B, reread the last section and ask which sentence points back to the middle section.",
          "The article tells about one kind of pothole and never about different roads in different places, so rule out that Part A choice. Decide the rest yourself."
        ],
        how: [
          "Look at the headings in order: Water in the Road, Ice Takes Up Room, The Road Breaks.",
          "First water gets into cracks and freezes. Then the ice leaves a gap and the road gets weaker. Then cars break the weak spot. Each part needs the part before it.",
          "Part A: \"Each section builds on the one before it, from water in the road to a broken road.\" Part B: \"At last, cars roll over the weak spot.\" The words weak spot go back to the road that gets weaker in the middle section.",
          "The sentence about a road getting weaker is in the middle section. The last section builds on it, so it is not the sentence that shows the building."
        ],
        misconception: "A common mix-up is choosing a sentence from the earlier section. Part B asks for the sentence in the later section that points back.",
        why: "Part A: \"Each section builds on the one before it, from water in the road to a broken road.\" Part B: \"At last, cars roll over the weak spot.\" The words weak spot go back to the road that gets weaker in the section before. The article never tells about different roads in different places." },
      { id: "SK-TFF-C12", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Here is part of the index from a book called Rockets and Space Travel. An index lists topics in ABC order, with the pages where each one is found.", "astronauts, 12, 15", "engines, 6, 7", "fuel, 6, 9", "launch pad, 4, 5", "satellites, 18, 19"],
        prompt: "Mia wants to read about engines and fuel together. Choose the words that best complete the sentence.",
        text: "Mia should turn to page {0}.",
        slots: [{ options: ["6", "7", "9"], answer: 0 }],
        clue: "An index lists every page where a topic is found. To read about two topics together, look for a page that both topics share.",
        hints: [
          "An index lists every page where a topic is found. To read about two topics together, look for a page that both topics share.",
          "Find engines and fuel in the list, and read the page numbers beside each one.",
          "Page 9 is listed only beside fuel, so it has nothing about engines. Compare the two pages that are left with both lists."
        ],
        how: [
          "The index says engines are on pages 6 and 7, and fuel is on pages 6 and 9.",
          "Look for a page number that is in both lists. Only page 6 is in both.",
          "The answer is page 6. Page 7 has engines but not fuel, and page 9 has fuel but not engines."
        ],
        misconception: "A common mix-up is picking the first page number that is listed. Mia needs a page that appears beside both topics.",
        why: "The answer is 6. The index lists page 6 beside both engines and fuel. Page 7 is listed only for engines, and page 9 is listed only for fuel." },
      { id: "SK-TFF-C13", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Ben is writing a report about helicopters. He used the same heading, \"Helicopters,\" over both of these paragraphs.", "Paragraph 1: A helicopter has long blades on top called rotors. When the rotors spin fast, they push air down, and the helicopter lifts up.", "Paragraph 2: Helicopters help people in many ways. Some carry hurt people to hospitals. Others drop supplies where roads are blocked."],
        prompt: "Ben wants to give each paragraph its own heading. Which pair of headings would help a reader most?",
        choices: [
          { text: "Paragraph 1: How Helicopters Fly. Paragraph 2: How Helicopters Help People.", correct: true },
          { text: "Paragraph 1: Rotors and Blades. Paragraph 2: Hospitals and Supplies." },
          { text: "Paragraph 1: All About Helicopters. Paragraph 2: More About Helicopters." },
          { text: "Paragraph 1: Fast Flying Machines. Paragraph 2: Strong Flying Machines." }
        ],
        clue: "A good heading names what a whole section is about. It is not just one detail, and it is not so general that it could fit anything.",
        hints: [
          "A good heading names what a whole section is about. It is not just one detail, and it is not so general that it could fit anything.",
          "Reread paragraph 1 and paragraph 2 one at a time. Ask what all of the sentences in each paragraph have in common.",
          "Hospitals is only one of the places named in paragraph 2, so a heading that names only that is too narrow. Check each pair for headings that cover a whole paragraph."
        ],
        how: [
          "Paragraph 1 tells how the rotors push air down and lift the helicopter, so it is about how helicopters fly.",
          "Paragraph 2 tells about carrying hurt people and dropping supplies, so it is about how helicopters help people.",
          "The answer is \"Paragraph 1: How Helicopters Fly. Paragraph 2: How Helicopters Help People.\" Each heading covers the whole paragraph.",
          "Rotors and Hospitals each name only one detail. Helicopters and More About Helicopters are too general to help a reader find a part. Fast Machines and Strong Machines do not match what the paragraphs say."
        ],
        misconception: "A common mix-up is choosing a heading that names one detail. A heading should cover the whole section.",
        why: "The answer is \"Paragraph 1: How Helicopters Fly. Paragraph 2: How Helicopters Help People.\" Each heading covers its whole paragraph. Rotors and Hospitals are only single details, and the other headings are too general or do not match." },
      { id: "SK-TFF-C14", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Ayana's family has taken one trip in summer and one trip in winter each year for three years. Not every family member went on every trip. The family is making a book about their trips. Here are two plans.", "Plan A: Each chapter is one year. Inside each chapter, each trip is a section.", "Plan B: Each chapter is one family member. Inside each chapter, each trip that person went on is a section."],
        prompt: "Aunt Rose wants to find the trip that the family took in the summer of 2023. Which plan makes that easiest, and why?",
        choices: [
          { text: "Plan A, because she can open the chapter for 2023 and find the right section.", correct: true },
          { text: "Plan A, because a book always lists its chapters by year." },
          { text: "Plan B, because every family member's chapter lists every trip the family took." },
          { text: "Plan B, because she would not need to know the year of the trip." }
        ],
        clue: "Chapters are big parts and sections are smaller parts inside them. Ask what Aunt Rose already knows, and which plan sorts the book by that.",
        hints: [
          "Chapters are big parts and sections are smaller parts inside them. Ask what Aunt Rose already knows, and which plan sorts the book by that.",
          "Read what a chapter is in Plan A and in Plan B. Then ask which kind of chapter Aunt Rose could look in first, using what she already knows.",
          "A chapter is a bigger part than a section, not a shorter one, so rule out the choice that says otherwise. Compare the three reasons that are left with what Aunt Rose knows."
        ],
        how: [
          "Aunt Rose knows the year of the trip and the season. She does not know which family member went.",
          "In Plan A, the chapters are years. She can open the chapter for 2023 and read its sections to find the summer trip.",
          "In Plan B, she would have to look in several people's chapters to find one trip.",
          "The answer is \"Plan A, because she can open the chapter for 2023 and find the right section.\""
        ],
        misconception: "A common mix-up is picking a plan for a reason about length. Pick the plan whose chapters match what the reader already knows.",
        why: "The answer is \"Plan A, because she can open the chapter for 2023 and find the right section.\" Aunt Rose knows the year, and Plan A sorts the book by year. A chapter is a bigger part than a section, and in Plan B she would have to check several chapters." },
      { id: "SK-TFF-C15", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
        stem: ["Ben is drawing a map of his neighborhood for a new neighbor. The map shows his street, the park, the school and the bus stop. The new neighbor has never been to the neighborhood."],
        prompt: "Which TWO things should Ben add so that the new neighbor can use the map? Choose TWO answers.",
        choices: [
          { text: "A compass rose that shows which way is north", correct: true },
          { text: "A key that tells what each symbol means", correct: true },
          { text: "A heading over the map that says Ben's Neighborhood" },
          { text: "A page number in the corner of the map" },
          { text: "A caption under the map that says who drew it" }
        ],
        clue: "A map only helps a reader who can tell directions and read the symbols. Ask what a stranger would need in order to use it.",
        hints: [
          "A map only helps a reader who can tell directions and read the symbols. Ask what a stranger would need in order to use it.",
          "Picture the new neighbor holding the map and trying to walk from the school to the park. What would the neighbor not be able to work out?",
          "A table of contents is for a book with chapters, and a map has no chapters, so rule it out. Check the others by asking whether the neighbor needs them in order to find the way."
        ],
        how: [
          "A map helps someone find places. Ben's neighbor needs to know which way to turn and what each symbol stands for.",
          "A compass rose shows which way is north, so the neighbor can tell directions.",
          "A key tells what each symbol stands for, such as the shape for the park.",
          "The answers are \"A compass rose that shows which way is north\" and \"A key that tells what each symbol means.\" A fun fact and a caption about who drew the map do not help the neighbor find the way, and a map has no table of contents."
        ],
        misconception: "A common mix-up is choosing features that are on many pages but do nothing for a map. Pick the ones a stranger needs to find the way.",
        why: "The answers are \"A compass rose that shows which way is north\" and \"A key that tells what each symbol means.\" A compass rose gives directions, and a key explains the symbols. The fun fact, the table of contents and the caption about the artist do not help someone find the way." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text or stem. `like` lists the one core item
     each practises (same component, task and format). */
  similar: [
    { id: "SK-TFF-S01", type: "dropdown", points: 2, dok: 1, std: ["3.T.SS.1.a"], passages: [], like: ["SK-TFF-C01"],
      stem: ["Sofia's craft guide opens its fourth division with the title Chapter 4: Paper Flowers. A line labeled Folding a Tulip sits below it."],
      prompt: "Fill in each blank.",
      text: "Paper Flowers marks {0} of the guide. Folding a Tulip marks {1} beneath it.",
      slots: [
        { options: ["a chapter", "a section", "a sentence"], answer: 0 },
        { options: ["a chapter", "a section", "a sentence"], answer: 1 }
      ],
      clue: "A book is made of chapters, and a chapter can hold sections. Ask which part holds the other.",
      hints: [
        "A book is made of chapters, and a chapter can hold sections. Ask which part holds the other.",
        "Read the two names slowly. Notice which one holds the other, and which one is only one piece of the book.",
        "A sentence is much smaller than either part, so it is not the answer for either blank. Decide which of the other two words fits each name."
      ],
      how: [
        "The words say Chapter 4: Paper Flowers, so Paper Flowers is a chapter.",
        "Folding a Tulip is a smaller part inside Chapter 4, so it is a section.",
        "The answers are a chapter and a section. A sentence is too small to be a part with its own title."
      ],
      misconception: "A common mix-up is calling every title a chapter. Only the big parts of a book are chapters.",
      why: "The answers are a chapter and a section. Paper Flowers is the title of Chapter 4, a big part of the book. Folding a Tulip is a smaller part inside it, so it is a section." },
    { id: "SK-TFF-S02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [], like: ["SK-TFF-C02"],
      stem: ["Soccer Skills for Beginners lists its parts, and the page where each begins.", "Warming Up .... 1", "Passing .... 5", "• Using Your Instep .... 6", "• Long Passes .... 9", "Shooting .... 17", "• Aiming Low .... 18"],
      prompt: "The chapter Passing runs until the next chapter begins. How long is it?",
      choices: [
        { text: "twelve pages", correct: true },
        { text: "five pages" },
        { text: "thirteen pages" },
        { text: "seventeen pages" }
      ],
      clue: "A table of contents shows where each part starts, and a chapter runs until the next chapter starts.",
      hints: [
        "A table of contents shows where each part starts, and a chapter runs until the next chapter starts.",
        "Find the page where Passing begins and the page where the next chapter begins. Then count the pages from one to the other.",
        "Seventeen is where the next chapter begins, so it is not the length of Passing. Rule out the choice that gives that number, and work out the length from the other start pages."
      ],
      how: [
        "Passing begins on page 5, and the next chapter, Shooting, begins on page 17.",
        "Passing runs until Shooting starts. From page 5 up to page 17 is twelve pages.",
        "The answer is \"twelve pages.\" Five is only the page where the chapter begins, seventeen is where the next chapter begins, and thirteen counts one page too many."
      ],
      misconception: "A common mix-up is giving a page number from the list as the length. The length is how far the chapter runs, from its start to where the next chapter starts.",
      why: "The answer is \"twelve pages.\" Passing begins on page 5 and Shooting begins on page 17, so Passing runs for twelve pages." },
    { id: "SK-TFF-S03", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2, like: ["SK-TFF-C03"],
      stem: ["A kids' article called Healthy Teeth has three headings: Brushing Well, Foods for Strong Teeth and Visiting the Dentist."],
      prompt: "Which TWO statements about these headings are true? Choose TWO answers.",
      choices: [
        { text: "A quick look at them shows the topic of every section.", correct: true },
        { text: "Someone after dentist facts can head straight to one.", correct: true },
        { text: "Numbers beside them tell where the parts start." },
        { text: "Habits are listed from best to worst." },
        { text: "Hard terms are explained beneath them." }
      ],
      clue: "Headings sit over sections. Ask what a heading is for.",
      hints: [
        "Headings sit over sections. Ask what a heading is for.",
        "Read the three headings in the box. Think about what you could do with only the headings in front of you.",
        "The headings do not rank the habits, so the choice about ranking is ruled out. Choose two of the four that are left."
      ],
      how: [
        "Each heading names what its part is about, such as Brushing Well.",
        "Someone who wants dentist facts can look at the headings and go straight to Visiting the Dentist.",
        "The answers are \"A quick look at them shows the topic of every section.\" and \"Someone after dentist facts can head straight to one.\"",
        "Headings do not list pages, rank habits or define words."
      ],
      misconception: "A common mix-up is giving a heading another feature's job. A heading names a section; it does not list pages or define words.",
      why: "The answers are \"A quick look at them shows the topic of every section.\" and \"Someone after dentist facts can head straight to one.\" Headings name the parts. They do not list pages, rank habits or define words." },
    { id: "SK-TFF-S04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: [], like: ["SK-TFF-C04"],
      stem: ["Drawing Faces shows how to draw eyes, a nose and a mouth with simple shapes. A box at the end says: \"Try It! Draw a face on a paper plate, using only circles and lines.\""],
      prompt: "Pick a new ending box that gives readers a small job and matches the lesson.",
      choices: [
        { text: "Try It! Draw a happy face and a sad face. Change only the mouth.", correct: true },
        { text: "Try It! Faces are the most interesting thing an artist can draw." },
        { text: "Try It! Read the chapter about drawing animals to learn more." },
        { text: "Try It! Eyes are often drawn as circles with a small dot inside." }
      ],
      clue: "Read the box already in the chapter and ask what job it gives the reader.",
      hints: [
        "Read the box already in the chapter and ask what job it gives the reader.",
        "Compare each choice with the box in the chapter. Ask which choices give the reader a job to do, and which only tell something.",
        "A fact about eyes only tells the reader something and gives no job to do, so rule that choice out. Check the other three against the box in the chapter."
      ],
      how: [
        "The box in the chapter asks the reader to draw a face on a plate. It gives the reader a job that uses the chapter's shapes.",
        "A good new box gives the reader a different job that practices the same skills.",
        "The answer is \"Try It! Draw a happy face and a sad face. Change only the mouth.\" It asks the reader to practice drawing mouths.",
        "One choice gives an opinion, one points to another chapter, and one tells a fact about eyes."
      ],
      misconception: "A common mix-up is thinking a Try It! box can hold any sentence. It gives the reader something to do.",
      why: "The answer is \"Try It! Draw a happy face and a sad face. Change only the mouth.\" The box in the chapter gives the reader a job, and this one does too. The other choices give an opinion, point to another chapter or tell a fact." },
    { id: "SK-TFF-S05", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [], like: ["SK-TFF-C05"],
      stem: ["Washing a Bike has three parts: Rinse the Bike, Scrub the Frame and Dry and Oil. They go in the order a rider works."],
      prompt: "Pick the sentence that explains why Scrub the Frame comes right after Rinse the Bike.",
      options: [
        "Put the bike on a flat spot outside.",
        "Spray the bike with a hose to wash off the mud.",
        "After the mud is rinsed off, scrub the frame with a soft sponge.",
        "Use a toothbrush for the tight spots near the pedals.",
        "Wipe every part with a dry towel.",
        "Put one drop of oil on the chain."
      ],
      answer: [2],
      clue: "Sections are arranged in an order for a reason. Look for words that connect one section to the section before it.",
      hints: [
        "Sections are arranged in an order for a reason. Look for words that connect one section to the section before it.",
        "Think about the first sentence of each of the three sections. Ask which one points back to something the rider already did.",
        "\"Put the bike on a flat spot outside\" begins the first section and looks back at nothing, so rule it out. Check the other choices for words that look back."
      ],
      how: [
        "The three sections go in the order Rinse the Bike, Scrub the Frame, Dry and Oil.",
        "The first sentence of Scrub the Frame begins with After and names the mud from the section before.",
        "The answer is \"After the mud is rinsed off, scrub the frame with a soft sponge.\" It says to scrub once the rinsing is done.",
        "The other sentences tell what to do inside one section. None of them looks back at an earlier section."
      ],
      misconception: "A common mix-up is choosing a step that is in the right section but does not mention the section before it.",
      why: "The answer is \"After the mud is rinsed off, scrub the frame with a soft sponge.\" It names the mud from the section before, so the rider rinses first and scrubs second. The other sentences only tell what to do inside one section." },
    { id: "SK-TFF-S06", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [], like: ["SK-TFF-C06"],
      stem: ["Here is a map of a school yard."],
      figure: { src: "assets/figures/tf-yard-map.svg", label: "Figure 1", caption: "Map of the Maple Street School yard",
        alt: "Map of the Maple Street School yard. An arrow marked N points up. A thick bar in the lower middle of the map is the bench. A white circle is straight above the bench. A black triangle is on the left, higher than the bench. A white square is on the right, near the top. A black diamond is straight to the right of the bench. The key shows a bar for the bench, a circle for the flagpole, a triangle for the garden, a square for the swings and a diamond for the sandbox." },
      prompt: "What stands directly north of the bench?",
      choices: [
        { text: "the flagpole", correct: true },
        { text: "the garden" },
        { text: "the swings" },
        { text: "the sandbox" }
      ],
      clue: "The compass arrow tells which way north is. Use it before you look for places.",
      hints: [
        "The compass arrow tells which way north is. Use it before you look for places.",
        "Find the bench by matching the key to the map. Then follow the arrow's direction from the bench.",
        "The sandbox is straight east of the bench, not north, so it is not the answer. Check the other places against north."
      ],
      how: [
        "The arrow marked N points up, so north is the top of the map.",
        "The key shows the bench as a thick bar near the bottom of the map.",
        "Go straight up from the bar. The first place you reach is the flagpole, so the answer is \"the flagpole.\"",
        "The garden is up and to the left, the swings are up and to the right, and the sandbox is straight right of the bench."
      ],
      misconception: "A common mix-up is choosing any place in the top half of the map. Straight north means directly above the bench.",
      why: "The answer is \"the flagpole.\" North is at the top, so straight north of the bench is directly above it. The garden and the swings are higher than the bench but off to the side, and the sandbox is straight east." },
    { id: "SK-TFF-S07", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: [], like: ["SK-TFF-C07"],
      stem: ["An editor is choosing words for a photo on the Arbor Day page of a school bulletin. A boy in a red cap stands beside a young oak. He grips a shovel, and the tree stands in a hole in the grass."],
      prompt: "Pick the words that tell something new about the scene.",
      text: "Words under it: {0}",
      slots: [
        { options: ["On Arbor Day, children plant an oak so the playground will have shade.", "Wearing a red cap, the boy holds a shovel by a young oak.", "Standing in a hole in the grass is a young oak."], answer: 0 }
      ],
      clue: "A caption can tell more than the picture shows. Ask which caption has a fact a reader could not see.",
      hints: [
        "A caption can tell more than the picture shows. Ask which caption has a fact a reader could not see.",
        "Read the description of the photo. Then read each caption and ask which details are already in the picture.",
        "The red cap is a detail anyone can see in the photo, so the caption that names it adds nothing new. Check the other two captions the same way."
      ],
      how: [
        "The photo shows a boy, a red cap, a shovel, a small oak tree and a hole in the grass.",
        "A good caption adds something a reader could not see, such as why something is happening.",
        "The answer is \"On Arbor Day, children plant an oak so the playground will have shade.\" A photo cannot show the day or the reason for planting.",
        "The other captions only repeat what the picture already shows."
      ],
      misconception: "A common mix-up is choosing the caption with the most details from the picture. A better caption adds something new.",
      why: "The answer is \"On Arbor Day, children plant an oak so the playground will have shade.\" The day and the reason are not in the photo. The other captions only tell what the picture shows." },
    { id: "SK-TFF-S08", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [], like: ["SK-TFF-C08"],
      stem: ["A river boat brochure lists four headings, each with a first sentence.", "Leaving the Dock: Climb aboard at the town dock and find a seat.", "Under the Old Bridge: Soon the boat slides under an old stone bridge.", "Past the Tall Trees: Next, you float past big trees whose roots stand in the water.", "Back to Shore: At the end, the boat turns around and returns to the dock."],
      prompt: "What is the reason for the order of these four sections?",
      choices: [
        { text: "They match the order in which a rider sees each place on the trip.", correct: true },
        { text: "They go from the cheapest stop to the most costly stop." },
        { text: "They go from the oldest place on the river to the newest place." },
        { text: "They go from the quietest stop to the loudest stop." }
      ],
      clue: "Authors choose an order that helps the reader. Ask what a reader of a boat ride brochure is picturing.",
      hints: [
        "Authors choose an order that helps the reader. Ask what a reader of a boat ride brochure is picturing.",
        "Read the four headings in order, and then read the first sentence beside each one.",
        "The brochure never says what any part of the ride costs, so rule out the choice about cost. Check the other choices against the order of the places."
      ],
      how: [
        "The headings go Leaving the Dock, Under the Old Bridge, Past the Tall Trees and Back to Shore.",
        "The first sentences name places in the order the boat reaches them, and the last one brings the boat home.",
        "The answer is \"They match the order in which a rider sees each place on the trip.\"",
        "The brochure does not say what each stop costs, how old each place is or how loud the ride is."
      ],
      misconception: "A common mix-up is guessing a reason the text never gives. Look at the order of the places the sections name.",
      why: "The answer is \"They match the order in which a rider sees each place on the trip.\" They start at the dock and end back at the dock. The brochure never compares what the stops cost, how old they are or how loud they are." },
    { id: "SK-TFF-S09", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: [], like: ["SK-TFF-C09"],
      stem: ["Below are four pieces of a page about giraffes."],
      prompt: "Match each piece of the giraffe page to its name.",
      cols: ["a heading", "a caption", "a label", "a text box"],
      rows: [
        { text: "Meet the Giraffe, in big letters over the text that follows", answer: 0 },
        { text: "Beneath the image: A giraffe bends down to drink at a river", answer: 1 },
        { text: "Neck, with an arrow pointing to the neck in the sketch", answer: 2 },
        { text: "Wow! A giraffe's neck has seven bones, like yours, in a shaded square", answer: 3 }
      ],
      clue: "Features on a page each have their own name and job. Ask what each one does for the reader.",
      hints: [
        "Features on a page each have their own name and job. Ask what each one does for the reader.",
        "Notice where each feature sits: over paragraphs, under a whole picture, joined to a part by a line, or set apart in a box.",
        "The word with the line is joined to one piece inside the drawing, so it is the label. Decide the other three rows yourself."
      ],
      how: [
        "The title over the paragraphs is a heading. It announces the topic of that section.",
        "The line under the photo is a caption. It describes the entire image.",
        "The word neck has a line to one part of the drawing, so it is a label that points out a single piece.",
        "The shaded square that says Fun Fact holds a bonus fact set apart from the sections."
      ],
      misconception: "A common mix-up is thinking a label and a caption do the same job. A label points out a single piece, and a caption describes the entire image.",
      why: "The heading announces a section's topic. The caption describes the entire image. The word neck is a label that points out a single piece. The Fun Fact square supplies a bonus fact." },
    { id: "SK-TFF-S10", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2, like: ["SK-TFF-C10"],
      stem: ["A flyer for Science Night at Maple Elementary has these sections.", "What to Bring: Bring a flashlight and a pencil. Dress for the weather.", "Fun Stations: Try a bubble lab and a paper plane race. Each station takes ten minutes.", "Snack Time: Free apple slices and water will be near the gym doors at seven o'clock.", "In Case of Rain: If it rains, Science Night will move into the gym.", "Box: Questions? Call the school office."],
      prompt: "A parent wants to know what the family should carry and what happens if it rains. Which TWO sections should the parent read? Choose TWO answers.",
      choices: [
        { text: "What to Bring", correct: true },
        { text: "In Case of Rain", correct: true },
        { text: "Fun Stations" },
        { text: "Snack Time" },
        { text: "Questions? Call the school office" }
      ],
      clue: "A heading tells what a section is about. Use the headings to choose, and then check what the sentences say.",
      hints: [
        "A heading tells what a section is about. Use the headings to choose, and then check what the sentences say.",
        "Skim each section, and look for the sentences that answer the parent's two questions. Choose two sections.",
        "Snack Time tells where free food will be, not what to carry or what happens in rain, so rule it out. Check the other choices the same way."
      ],
      how: [
        "The parent has two questions: what to carry, and what happens if it rains.",
        "What to Bring says to bring a flashlight and a pencil. In Case of Rain says the night will move into the gym.",
        "The answers are What to Bring and In Case of Rain.",
        "Fun Stations is about activities, Snack Time is about food, and the box gives a phone number to call."
      ],
      misconception: "A common mix-up is choosing a section that sounds fun. Pick the sections that answer the parent's questions.",
      why: "The answers are What to Bring and In Case of Rain. The first tells what to carry, and the second tells that Science Night moves into the gym if it rains. Fun Stations, Snack Time and the box answer other questions." },
    { id: "SK-TFF-S11", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.1.a"], passages: ["p6"], like: ["SK-TFF-C11"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What guided the author's choices for first, next and last?",
        choices: [
          { text: "Events come as time goes by, and every step leads to another.", correct: true },
          { text: "Paragraphs describe separate oysters at separate shores, far from one another." },
          { text: "Headings are in ABC order, like words in a dictionary." },
          { text: "Parts go from the saddest part to the happiest part." }
        ] },
      partB: { prompt: "Which line in \"A Pearl at Last\" points back to something earlier?",
        choices: [
          { text: "\"After a few years, nacre has covered the grit completely.\"", correct: true },
          { text: "\"People open the oyster to find it.\"" },
          { text: "\"Day after day, it adds another thin layer.\"" },
          { text: "\"Sometimes a tiny speck of grit slips inside an oyster's shell.\"" }
        ] },
      clue: "Sections can be arranged so that each one needs the one that came earlier. Ask what you must know first to understand each section.",
      hints: [
        "Sections can be arranged so that each one needs the one that came earlier. Ask what you must know first to understand each section.",
        "For Part A, read the three headings in order and think about what each section tells. For Part B, reread the last section and ask which sentence points back to the middle section.",
        "The article never talks about more than one oyster or shore, so rule out that Part A choice. Decide the rest yourself."
      ],
      how: [
        "The headings go A Tiny Visitor, Layer by Layer and A Pearl at Last.",
        "First a speck of grit gets in. Then the oyster covers the grit with layers. Then the layers finish and a pearl is ready. Events come as time goes by, and every step leads to another.",
        "Part A: \"Events come as time goes by, and every step leads to another.\" Part B: \"After a few years, nacre has covered the grit completely.\" It goes back to the nacre in the section before.",
        "The sentence about adding a layer each day is in the middle section, so it is what the last section builds on."
      ],
      misconception: "A common mix-up is choosing a sentence from the earlier section. Part B asks which sentence in the later section looks back.",
      why: "Part A: \"Events come as time goes by, and every step leads to another.\" Part B: \"After a few years, nacre has covered the grit completely.\" It goes back to the nacre in the section before. The article tells about one oyster." },
    { id: "SK-TFF-S12", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [], like: ["SK-TFF-C12"],
      stem: ["The back of Castles Long Ago has an index, which lists topics from A to Z with their pages.", "drawbridge: 10, 11", "knights: 20, 21", "moat: 10, 16", "towers: 3, 22"],
      prompt: "Leo needs a page that covers both the moat and the drawbridge. Which page should he open?",
      text: "Open page {0}.",
      slots: [{ options: ["11", "16", "10"], answer: 2 }],
      clue: "An index lists the pages where each topic is found. Look for a page that two topics share.",
      hints: [
        "An index lists the pages where each topic is found. Look for a page that two topics share.",
        "Find moat and drawbridge in the list, and read the page numbers beside each one.",
        "Page 16 is listed only beside moat, so it has nothing about drawbridges. Compare the pages that are left with both lists."
      ],
      how: [
        "The index says the drawbridge is on pages 10 and 11, and the moat is on pages 10 and 16.",
        "Look for a page that is in both lists. Only page 10 is in both.",
        "The answer is page 10. Page 11 has the drawbridge but not the moat, and page 16 has the moat but not the drawbridge."
      ],
      misconception: "A common mix-up is picking the biggest page number. Leo needs a page that is beside both topics.",
      why: "The answer is 10. The index lists page 10 beside both the moat and the drawbridge. Page 11 is listed only for the drawbridge, and page 16 is listed only for the moat." },
    { id: "SK-TFF-S13", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [], like: ["SK-TFF-C13"],
      stem: ["Maya's report about escalators has two paragraphs under one shared heading, Escalators.", "First paragraph: An escalator is a staircase that moves. A loop of steps rolls up from the floor and flattens out at the top.", "Second paragraph: Escalators have safety rules. Hold the rail, and keep your shoes away from the sides."],
      prompt: "Now each paragraph needs its own heading. Which pair will best guide readers?",
      choices: [
        { text: "First: How Escalators Work. Second: Escalator Safety.", correct: true },
        { text: "First: Moving Steps. Second: Moving Rails." },
        { text: "First: All About Escalators. Second: More About Escalators." },
        { text: "First: Tall Mall Buildings. Second: Short Mall Buildings." }
      ],
      clue: "A good heading covers a whole section. It is not only one detail, and it is not so general that it could fit anything.",
      hints: [
        "A good heading covers a whole section. It is not only one detail, and it is not so general that it could fit anything.",
        "Read the first paragraph and then the second one on their own. Ask what all of the sentences in each one are mostly about.",
        "Rails is only one of the things mentioned in the second paragraph, so a heading that names only that is too narrow. Check each pair for headings that cover a whole paragraph."
      ],
      how: [
        "The first paragraph tells how a loop of steps rolls up and flattens out, so it is about how an escalator works.",
        "The second paragraph tells how to hold on and where to keep your shoes, so it is about riding safely.",
        "The answer is \"First: How Escalators Work. Second: Escalator Safety.\" Each heading covers the whole paragraph.",
        "Steps and Rails name one detail each. Escalators and More About Escalators are too general. Tall Buildings and Short Buildings do not match the paragraphs."
      ],
      misconception: "A common mix-up is choosing a heading that names one detail. A heading should cover the whole section.",
      why: "The answer is \"First: How Escalators Work. Second: Escalator Safety.\" Each heading covers its whole paragraph. Steps and Rails are single details, and the other pairs are too general or off topic." },
    { id: "SK-TFF-S14", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [], like: ["SK-TFF-C14"],
      stem: ["The Maple Hill center prints a booklet about its after-school clubs: art, drama and choir. Each club meets on Monday, Wednesday or Friday.", "Booklet 1: One chapter for each day, with that day's clubs as sections.", "Booklet 2: One chapter for each club, with its days as sections."],
      prompt: "Which booklet helps Ms. Lopez find the Wednesday clubs fastest, and why?",
      choices: [
        { text: "Booklet 1, since she can open Wednesday's chapter and read its sections.", correct: true },
        { text: "Booklet 1, since chapters can only be arranged by day." },
        { text: "Booklet 2, since each chapter holds clubs from a single day." },
        { text: "Booklet 2, since the day does not help in finding a club." }
      ],
      clue: "Big parts hold smaller parts. Ask what Ms. Lopez already knows, and which booklet sorts its big parts by that.",
      hints: [
        "Big parts hold smaller parts. Ask what Ms. Lopez already knows, and which booklet sorts its big parts by that.",
        "Read what each chapter stands for in the two booklets. Then ask which chapter Ms. Lopez could go to first, using what she already knows.",
        "In Booklet 2 each chapter is named for one club, so a chapter does not hold clubs from a single day. Rule out that choice and compare the three that are left with what Ms. Lopez knows."
      ],
      how: [
        "Ms. Lopez knows the day, Wednesday, but not the name of the club.",
        "In Booklet 1, the chapters are days. She can open Wednesday's chapter and read its sections.",
        "In Booklet 2, she would have to look in every chapter, because she does not know the club.",
        "The answer is \"Booklet 1, since she can open Wednesday's chapter and read its sections.\""
      ],
      misconception: "A common mix-up is thinking a booklet can be arranged only one way. Choose the booklet whose chapters match what the reader already knows.",
      why: "The answer is \"Booklet 1, since she can open Wednesday's chapter and read its sections.\" Ms. Lopez knows the day, and Booklet 1 sorts the clubs by day. In Booklet 2 each chapter is one club, and the day does help in finding a club." },
    { id: "SK-TFF-S15", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2, like: ["SK-TFF-C15"],
      stem: ["Zoe sketched a plan of her school for a first-grader who is new to town. Rooms are marked on it with small shapes."],
      prompt: "Which TWO changes help the child follow the plan? Choose TWO answers.",
      choices: [
        { text: "An arrow marked N showing where north is", correct: true },
        { text: "A box listing what each shape stands for", correct: true },
        { text: "A paragraph about how the school got its name" },
        { text: "An index of every room in ABC order, with page numbers" },
        { text: "A title in big letters across the top" }
      ],
      clue: "A map helps only if a reader can find which way to go and read the symbols. Ask what a newcomer would need.",
      hints: [
        "A map helps only if a reader can find which way to go and read the symbols. Ask what a newcomer would need.",
        "Picture the first-grader holding the map and trying to walk from the front door to the gym. What could the child not work out?",
        "An index is for a book with many pages, and a map is one page, so rule it out. Check the others by asking whether the child needs them to find the way."
      ],
      how: [
        "A map helps someone find places. The first-grader needs to know which way is which and what each symbol means.",
        "An arrow marked N shows where north is, so the child can tell which way to walk.",
        "A box listing what each shape stands for is a key. It tells what each symbol means.",
        "The answers are \"An arrow marked N showing where north is\" and \"A box listing what each shape stands for.\" A joke, an index and a heading about a favorite class do not help the child find the way."
      ],
      misconception: "A common mix-up is choosing features that are fun but do nothing for the map's job. Pick the ones a newcomer needs to find the way.",
      why: "The answers are \"An arrow marked N showing where north is\" and \"A box listing what each shape stands for.\" The arrow gives directions, and the box is a key that explains the symbols. A joke, an index and a heading do not help someone find the way." }
  ],
  /* Hints and Show me how for the four Practice Together items. */
  addons: {
    "SK-TFF-P1": {
      hints: [
        "A heading tells what a section is about. Ask which place in a home each section is for.",
        "Read the first sentence in each section, and compare it with what Tia wants to wash.",
        "Showers and brushing teeth are about the bathroom, so that section has no tip about fruit. Check the other sections."
      ],
      how: [
        "Tia wants a tip about washing fruit.",
        "The section In the Kitchen says to wash fruits and vegetables in a bowl, not under a running tap.",
        "The answer is \"In the Kitchen.\" The bathroom section is about showers and teeth, the yard section is about rain, and Did You Know? is a fact box, not a section of tips."
      ],
      misconception: "A common mix-up is picking the box because it looks important. A box holds one extra fact, not a section of tips." },
    "SK-TFF-P2": {
      hints: [
        "A chapter is a big part of a book. A section is a smaller part inside a chapter. In the list, sections have a bullet.",
        "Look at the list and ask which lines are marked Chapter and which lines have a bullet.",
        "In the Kitchen sits under Chapter 2, so it is not a chapter. Match the other three rows yourself."
      ],
      how: [
        "In the list, Why Water Matters, Saving at Home and Saving at School each have the word Chapter.",
        "In the Bathroom and In the Kitchen have bullets and sit under Chapter 2, so they are sections.",
        "So Saving at Home and Why Water Matters are chapters, and In the Kitchen and In the Bathroom are sections."
      ],
      misconception: "A common mix-up is calling every title a chapter. A section is a smaller part inside a chapter." },
    "SK-TFF-P3": {
      hints: [
        "A caption can tell more than a photo shows. Ask which caption adds a fact a reader could not see.",
        "Read the description of the photo. Then read each caption and ask which of its details a reader could already see.",
        "The caption that says a girl pours water from a bucket only repeats what the photo shows, so rule it out. Check the other captions the same way."
      ],
      how: [
        "The photo shows a girl, a bucket, water and small plants.",
        "A caption is more helpful when it adds something the photo cannot show, such as where the water came from.",
        "The answer is \"Rainwater from the bucket gives the plants a free drink.\" A photo cannot show where the water came from.",
        "The other captions only name the girl, the bucket and the plants, which anyone can see."
      ],
      misconception: "A common mix-up is choosing the caption that describes the picture. A better caption adds something new." },
    "SK-TFF-P4": {
      hints: [
        "To decide where a new sentence belongs, find the section that is about the same thing.",
        "Read the new sentence and ask what it is about. Then read what each section is about.",
        "The kitchen section is about washing food and running the dishwasher, not about watering plants, so rule it out. Check the others the same way."
      ],
      how: [
        "The new sentence tells when to water plants.",
        "The section In the Yard is about catching rain and giving plants a drink, so it is about the same thing.",
        "The answer is \"In the Yard.\" The bathroom and kitchen sections are about water used inside, and the opening paragraph only says why saving water matters."
      ],
      misconception: "A common mix-up is putting a sentence in the opening paragraph. The opening only introduces the whole article." }
  },
  /* Skill check (form A). Uses p5 and two inline stems. Never uses a core, similar or practice text. */
  test: [
    { id: "SK-TFF-T1", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p5"],
      prompt: "Under which heading would a reader find out how blueberries are picked?",
      choices: [
        { text: "Berries in Summer", correct: true },
        { text: "Flowers in Spring" },
        { text: "From Bush to Basket" },
        { text: "Did You Know?" }
      ],
      clue: "A heading tells what a section is about. Read the sentences under each heading to see which one tells about picking.",
      why: "The answer is \"Berries in Summer.\" That section says workers pick the berries by hand or with a machine that shakes the bush. The spring section is about flowers, and the last section is about packing and trucks." },
    { id: "SK-TFF-T2", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: ["p5"],
      prompt: "What does the Did You Know? box add to the article?",
      choices: [
        { text: "an extra fact about blueberry bushes", correct: true },
        { text: "the steps for picking berries" },
        { text: "a heading for the next section" },
        { text: "a caption for a picture of berries" }
      ],
      clue: "A text box sits apart from the sections. Read it, and ask what kind of information it gives.",
      why: "The answer is \"an extra fact about blueberry bushes.\" The box tells that a bush can give fruit for many years. The steps are in the sections, and the box is not a heading or a caption." },
    { id: "SK-TFF-T3", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: ["p5"],
      prompt: "Suppose the section From Bush to Basket came first. How would that change the article?",
      choices: [
        { text: "Readers would learn about packing berries before they learn how berries grow.", correct: true },
        { text: "Readers would no longer be able to tell that the article is about blueberries." },
        { text: "The box with the Did You Know? fact would have to move to the top." },
        { text: "The article would have more sections than it has now." }
      ],
      clue: "Think about what a reader already knows when each section begins. Then picture the sections in a new order.",
      why: "The answer is \"Readers would learn about packing berries before they learn how berries grow.\" The sections now follow the berries from flowers, to picking, to the store. In a new order, readers would meet boxes and trucks before they know where the berries come from. The title and the number of sections would stay the same." },
    { id: "SK-TFF-T4", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.C.1.b"], passages: [],
      stem: ["A photo for the section Flowers in Spring shows two bees sitting on the white, bell-shaped flowers of a blueberry bush."],
      prompt: "Which caption adds something that the photo cannot show?",
      choices: [
        { text: "In early spring, bees visit the flowers to drink sweet nectar.", correct: true },
        { text: "Two bees sit on white, bell-shaped flowers." },
        { text: "White flowers cover a blueberry bush, and two bees rest on them." },
        { text: "A blueberry bush has bell-shaped flowers, and bees sit on two." }
      ],
      clue: "A caption can tell what a picture shows, or it can add when, where or why. Ask which caption tells more than the photo does.",
      why: "The answer is \"In early spring, bees visit the flowers to drink sweet nectar.\" It adds when the bees come and why, and a photo cannot show those. The other captions only say what can already be seen in the photo." },
    { id: "SK-TFF-T5", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      stem: ["Index of Fruit From the Farm", "apples: 3, 4", "blueberries: 9, 12", "harvest: 4, 12, 18", "peaches: 17, 18"],
      prompt: "Eli is looking for a single page that talks about blueberries and also the harvest. Which page works?",
      text: "Page {0} works.",
      slots: [{ options: ["4", "12", "18"], answer: 1 }],
      clue: "An index lists the pages where each topic is found. Look for a page that both topics share.",
      why: "The answer is 12. The index lists page 12 beside both blueberries and harvest. Page 4 is listed for harvest but not blueberries, and page 18 is listed for harvest but not blueberries." }
  ]
});

PP.addLesson({
  key: "TF-DIG",
  code: "3.T.C.1.b",
  codes: ["3.T.C.1.b"],
  title: "Screens, sounds and speaking: features you click, hear and listen for",
  teach: {
    big: "A screen, a recording and a speaker each have their own tools for sharing information. When you know what each tool does, you can find a fact fast, and you can tell why the author or speaker chose it.",
    points: [
      "A web page or an app has tools you tap or click. A back arrow takes you to the page you just left. A menu button, often three short lines, opens a list of pages. A search box, often shown with a magnifying glass, finds a word or a topic. A link, often underlined words, takes you to another page. A pop-up is a small box that opens on top of the page, often to explain a word with a dotted line under it. You do not leave the page.",
      "A video or audio player has controls. The play button starts or stops the recording. The progress bar shows how far along you are, and a marker on the bar can jump you to a part. A button such as 1x changes the speed, and a speaker button changes the volume. Captions, shown by the CC button, write out the words and the important sounds. A transcript is the whole recording written out, so you can read it.",
      "A script is the writing for a recording. A name with a colon, such as GUIDE: or HOST:, shows who is talking. Words in [brackets] name a sound or a pause to put in. A sound such as a bell can show that a new part is starting, and a [pause] leaves a quiet moment.",
      "A speaker has a voice instead of headings. Listeners cannot look back, so a good speaker helps them. The speaker talks slowly and clearly, pauses before an important part, and says a key fact twice. The speaker also fits the voice to the message, so good news sounds happy and a warning sounds serious. Words such as first, next, also and last tell listeners that a new part is starting, the way a heading does on a page. A speaker can also ask a question and then wait, so that listeners start to think.",
      "Each way of sharing is best at something. A video shows how something moves. A recording lets you listen while your eyes or hands are busy. Printed words let you stop and read again. Pick the one that fits what you need."
    ],
    words: [
      { term: "link", means: "words or a picture that you tap to open another page" },
      { term: "pop-up", means: "a small box that opens on top of a page, often to explain a word" },
      { term: "progress bar", means: "the line under a video that shows how much you have watched" },
      { term: "captions", means: "words under a video that tell what people say and the important sounds" },
      { term: "transcript", means: "a recording written out as words, so you can read it" },
      { term: "script", means: "the writing for a recording, with who talks and which sounds to add" },
      { term: "pause", means: "a short stop in speaking or sound" },
      { term: "tone", means: "the feeling in a voice, such as happy or serious" }
    ],
    example: {
      label: "Parts of a video page",
      lines: ["Play button: starts or stops the video", "Progress bar: shows how far along you are", "CC button: shows captions", "Transcript link: opens the words written out"],
      note: "Each part has one job. If you want to read what the narrator says, use the transcript. If you want the words to show while you watch, use the CC button."
    },
    tip: "On the test, you may be asked which button or link to use, what the words in a script's brackets tell the person making the recording, or how a speaker can help listeners. Picture the screen or the room, and ask what each feature does."
  },
  learn: [
    {
      show: ["Amir is on a web page about the cardinal, a red bird. He wants to hear what a cardinal sounds like."],
      figure: { src: "assets/figures/tf-bird-page.svg", label: "Figure 1", caption: "A web page about the cardinal",
        alt: "A web page about the cardinal. At the top is a bar with an arrow marked Back on the left and a menu button of three lines on the right. Under the bar is a search box that says Search birds. The heading is Cardinal, and a button with a speaker picture and the word Hear is at its right. The text says a cardinal eats seeds and berries, and the word seeds is underlined. At the bottom, the word crest has a dashed underline." },
      ask: "Which feature should Amir use to hear the cardinal?",
      steps: [
        "Look at the buttons. The Back arrow, the menu and the search box help a reader move around or find a page. None of them plays a sound.",
        "Find the button with a picture of a speaker and the word Hear. A sound button plays a recording.",
        "The underlined words open other pages or notes. They do not play a sound."
      ],
      answer: "Amir should tap the Hear button."
    },
    {
      show: ["Here is the start of a script for a short recording called The Old Barn. Words in [brackets] name sounds, and a name with a colon shows who is talking.", "[footsteps on gravel]", "[door creaking]", "NARRATOR: Amir stepped inside, and the room was dark."],
      ask: "What do the words in brackets tell the person who makes the recording?",
      steps: [
        "A name with a colon, such as NARRATOR:, shows words someone says out loud.",
        "The words in brackets are not spoken. They name sounds to add.",
        "So the first two lines tell the maker to play footsteps and then a creaking door, before the narrator speaks."
      ],
      answer: "They name the sounds to play: footsteps on gravel, and then a creaking door."
    },
    {
      show: ["Mr. Cole begins a talk about lunch boxes. He asks, \"Has anyone ever left a lunch box on the bus?\" Then he waits, and some hands go up."],
      ask: "Why does Mr. Cole ask a question and then wait?",
      steps: [
        "A speaker cannot see inside a listener's mind. A question gets listeners to think about the topic.",
        "Mr. Cole does not talk right away. The wait gives listeners time to think about their own answers.",
        "So the question and the wait bring the listeners into the talk before the facts begin."
      ],
      answer: "The question gets listeners thinking about the topic, and the wait gives them time to answer."
    }
  ],
  parent: "Next time your child watches a video or listens to a recording, ask: Which button would you use to read the words, or to jump to the part you want? When someone speaks to a group, ask what the speaker did to help the listeners.",
  passages: [
    /* p1: core set 2. A made-up audio guide script. Physics checked against the Gateway to Science whisper-dish page (see log). */
    { id: "p1", title: "Audio Tour, Stop 4: The Whisper Dishes", genre: "Script for a recording",
      paragraphs: [
        ["[soft bell]"],
        ["GUIDE: Welcome to Stop 4, the Hall of Sound.", "You will see two big, curved dishes on opposite sides of the room."],
        ["GUIDE: First, walk to one dish.", "Stand close, and face the curve."],
        ["GUIDE: Next, ask a friend to go to the other dish.", "Your friend should face the curve too."],
        ["[soft bell]"],
        ["GUIDE: Now whisper one word into your dish.", "Say it slowly, and keep your voice low."],
        ["[pause]"],
        ["GUIDE: Did your friend hear you?", "Each dish gathers sound and sends it across the room.", "That is why even a soft whisper can be heard from far away."],
        ["GUIDE: Last, switch places, and try again."]
      ] },
    /* p2: core set 3. A student reads announcements over the school speakers. */
    { id: "p2", title: "Friday Announcements", genre: "Script for a speaker",
      paragraphs: [
        ["Good morning, Panthers! This is Jayden with the Friday announcements.", "Please listen carefully."],
        ["First, robotics club meets today in Room 12.", "It starts at three o'clock.", "New members are welcome, so bring a friend."],
        ["Next, the lost and found box is full.", "If you lost a coat or a water bottle, look in the box by the office door."],
        ["Also, today is Hat Day.", "Wear your favorite hat to school."],
        ["Also, library books are due next Friday.", "Please put them on the cart by the door."],
        ["Last, thank you to everyone who picked up trash on the playground.", "Have a great weekend!"]
      ] },
    /* p4: used only by similar item SK-TFD-S08. */
    { id: "p4", title: "Audio Tour, Station 6: The Color Corner", genre: "Script for a recording",
      paragraphs: [
        ["[chime]"],
        ["HOST: Hello, and welcome to the Color Corner.", "On the table sits a round paper disk with red, yellow and blue stripes.", "A spinner is fixed next to it."],
        ["HOST: First, set the disk on the spinner.", "Next, turn the handle as fast as you can.", "Hold the base with your other hand.", "Watch your fingers near the edge."],
        ["[pause]"],
        ["HOST: What do you see?", "When the disk spins fast, your eyes cannot tell the stripes apart.", "They blur together into one color."],
        ["HOST: Last, slow the spinner down, and watch the stripes come back.", "Thank you for visiting."]
      ] },
    /* p5: used only by similar item SK-TFD-S11. */
    { id: "p5", title: "Monday Announcements", genre: "Script for a speaker",
      paragraphs: [
        ["Hello, students! Marcus here, live from the stage.", "It is a busy week."],
        ["Drama club will rehearse after classes end.", "Meet at the stage door at four sharp.", "You do not need to carry anything.", "Invite a pal if you like."],
        ["The music hall has a fresh rule.", "Walk in, and do not touch the drums until your teacher says you may.", "Return the sticks to the bin when you finish."],
        ["The costume closet is packed with capes, crowns and silly wigs.", "Ask Ms. Ortiz if you want to borrow a cape for the play."],
        ["The school store sells pencils and erasers at lunch.", "Stop by with a few coins."],
        ["That is all from the stage.", "Enjoy the rest of your week."]
      ] },
    /* p3: skill check only (test). Never used by core, similar or Together. */
    { id: "p3", title: "Video Script: At the Strawberry Patch", genre: "Script for a recording",
      paragraphs: [
        ["[birds chirping]"],
        ["NARRATOR: Welcome to Berry Hill Farm.", "Today we will pick strawberries.", "Wear a hat, because the sun is hot.", "Please stay on the path."],
        ["NARRATOR: First, look for berries that are red all over.", "Green or white spots mean a berry is not ready.", "Each row has a number on a wooden sign.", "Take your time."],
        ["[snap of a stem]"],
        ["NARRATOR: Next, hold the berry by its stem, and pull gently.", "Place it in your basket, and do not squeeze it."],
        ["[pause]"],
        ["NARRATOR: Last, wash the berries at home before you eat them.", "They taste best when they are cold."]
      ] }
  ],
  practice: [
    { id: "SK-TFD-P1", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      stem: ["Eli is reading a story on a tablet. The word harbor has a dotted line under it. When he taps the word, a small box opens on top of the page. The box says, \"harbor: a safe place where ships can stay.\""],
      prompt: "What is the small box, and what does it do?",
      choices: [
        { text: "It is a pop-up that explains a word without leaving the page.", correct: true },
        { text: "It is a link that takes the reader to a new page about harbors." },
        { text: "It is a menu that lists all the pages in the story." },
        { text: "It is a caption that tells about a picture of a ship." }
      ],
      clue: "Ask what happened to the page when Eli tapped the word. Did he stay on the same page, or go to a new one?",
      why: "The answer is \"It is a pop-up that explains a word without leaving the page.\" The box opened on top of the page and told what harbor means. A link opens a new page, a menu lists pages, and a caption goes with a picture." },
    { id: "SK-TFD-P2", type: "match", points: 2, dok: 1, std: ["3.T.C.1.b"], passages: [],
      stem: ["A video player has four parts at the bottom of the screen."],
      prompt: "Match each part to the job it does.",
      cols: ["starts or stops the video", "writes out the words and sounds", "changes how fast the video plays", "shows how far along the video is"],
      rows: [
        { text: "the play button", answer: 0 },
        { text: "the button marked CC", answer: 1 },
        { text: "the button marked 1x", answer: 2 },
        { text: "the progress bar", answer: 3 }
      ],
      clue: "Think about what each part is named. A name often tells the job.",
      why: "The play button starts or stops the video. The CC button writes out the words and sounds as captions. The 1x button changes the speed. The progress bar shows how far along the video is." },
    { id: "SK-TFD-P3", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      stem: ["A class listens to a recorded talk about bees. Amir missed one sentence. He wants to read the exact words the speaker said."],
      prompt: "Which feature should Amir use?",
      choices: [
        { text: "the transcript, which writes out the whole talk", correct: true },
        { text: "the volume button, which makes the talk louder" },
        { text: "the speed button, which makes the talk faster" },
        { text: "the progress bar, which shows the talk's length" }
      ],
      clue: "Amir wants to read words, not hear them. Ask which feature shows a recording as words.",
      why: "The answer is \"the transcript, which writes out the whole talk.\" A transcript is the recording written out, so Amir can read the exact words. Volume, speed and the progress bar all change how he hears or tracks the talk." },
    { id: "SK-TFD-P4", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      stem: ["Mr. Cole reads two notices to the school. The first is, \"The class that reads the most books wins a prize!\" The second is, \"The assembly is canceled because of a power outage.\""],
      prompt: "How should Mr. Cole's voice, or tone, change between the two notices?",
      choices: [
        { text: "It should sound happy for the first notice and serious for the second.", correct: true },
        { text: "It should sound serious for the first notice and happy for the second." },
        { text: "It should sound exactly the same for both notices." },
        { text: "It should sound very quiet for the first notice and very loud for the second." }
      ],
      clue: "A speaker's voice should match the message. Ask what feeling each notice has.",
      why: "The answer is \"It should sound happy for the first notice and serious for the second.\" Winning a prize is good news, and a canceled assembly is news that people may be sad about. The voice should fit each message." }
  ],
  /* ---------- B5-comp core (expansion 2026-10-22). Fifteen new items in three sets of five; no { ref } items.
     Set 1: a crayon video page (figure) plus inline screen stems. Set 2: p1 (audio tour script) plus inline stems.
     Set 3: p2 (announcements script) plus inline stems. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { id: "SK-TFD-C01", type: "mc", points: 1, dok: 1, std: ["3.T.C.1.b"], passages: [],
        stem: ["Maya is on a web page about how crayons are made. The page has a video."],
        figure: { src: "assets/figures/tf-crayon-video.svg", label: "Figure 1", caption: "A web page with a video about crayons",
          alt: "A web page with a video about how crayons are made. Three tabs are at the top: Home, Crafts and Videos. The heading is How Crayons Are Made. A video box has a round play button. Under it is a progress bar with three dots labeled Melt, Color and Cool. Below are three buttons: CC, a speaker picture and 1x. At the bottom are two underlined links: Read the transcript and Make your own crayons." },
        prompt: "Maya wants to watch only the part where color is added. Which feature on the page should she use?",
        choices: [
          { text: "the Color marker on the progress bar", correct: true },
          { text: "the CC button below the video" },
          { text: "the 1x button below the video" },
          { text: "the Read the transcript link at the bottom" }
        ],
        clue: "Ask which part of the page lets a viewer skip ahead to one part of a video.",
        hints: [
          "Ask which part of the page lets a viewer skip ahead to one part of a video.",
          "Look at the dots under the video and the words under them. Then look at the buttons and the links below.",
          "The 1x button changes how fast the video plays, not which part plays, so rule it out. Decide among the other three."
        ],
        how: [
          "The dots under the video are labeled Melt, Color and Cool. Each dot jumps to a part of the video.",
          "Maya wants the part where color is added, so she needs the dot labeled Color.",
          "The answer is \"the Color marker on the progress bar.\" The CC button shows captions, the 1x button changes the speed, and the transcript link opens the words written out."
        ],
        misconception: "A common mix-up is choosing the transcript because it holds the words about color. The transcript is for reading, and a marker is for jumping to a part of the video.",
        why: "The answer is \"the Color marker on the progress bar.\" The dot labeled Color jumps to the part where color is added. The CC button shows captions, the 1x button changes the speed, and the transcript link opens the words." },
      { id: "SK-TFD-C02", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
        stem: ["Eli watches a crayon video. The narrator says a number of minutes, but Eli did not hear it. He wants to write the exact number in his notes."],
        figure: { src: "assets/figures/tf-crayon-video.svg", label: "Figure 1", caption: "A web page with a video about crayons",
          alt: "A web page with a video about how crayons are made. Three tabs are at the top: Home, Crafts and Videos. The heading is How Crayons Are Made. A video box has a round play button. Under it is a progress bar with three dots labeled Melt, Color and Cool. Below are three buttons: CC, a speaker picture and 1x. At the bottom are two underlined links: Read the transcript and Make your own crayons." },
        prompt: "Which TWO things could Eli do to get the exact number? Choose TWO answers.",
        choices: [
          { text: "Open the transcript link and read the narrator's words.", correct: true },
          { text: "Drag the progress bar back and hear that part again.", correct: true },
          { text: "Tap the 1x button, so that speech goes faster." },
          { text: "Tap the Crafts tab at the top." },
          { text: "Pause the video and wait for it to be said again." }
        ],
        clue: "Eli needs the exact number. Ask what each tool on the page is for. Eli needs to check something that was already said.",
        hints: [
          "Eli needs the exact number. Ask what each tool on the page is for. Eli needs to check something that was already said.",
          "Look at the bar, the buttons, the tab and the links. Ask what each one does to the video or to the page.",
          "Tapping the 1x button would make the video play faster, so Eli would hear the number even more quickly. Rule it out and choose two from the four that are left."
        ],
        how: [
          "Eli needs one exact number that the narrator said.",
          "The transcript writes out the narrator's words, so Eli can read the number. The progress bar can be dragged back, so Eli can hear the part again.",
          "The answers are \"Open the transcript link and read the narrator's words.\" and \"Drag the progress bar back and hear that part again.\"",
          "The 1x button changes the speed. The Crafts tab opens a different page, and pausing does not make the narrator say it again."
        ],
        misconception: "A common mix-up is choosing the 1x button because it seems to help with talking. It changes how fast the narrator speaks, but it does not give Eli the number.",
        why: "The answers are \"Open the transcript link and read the narrator's words.\" and \"Drag the progress bar back and hear that part again.\" Both give Eli the exact words. The 1x button changes the speed, the Crafts tab opens a different page, and pausing does not make the narrator say it again." },
      { id: "SK-TFD-C03", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [],
        stem: ["Ms. Lopez wrote directions for the class website. Two of her sentences have a mistake.", "To go back to the page you just left, tap the menu button.", "To find a page about bridges, scroll through the Back arrow."],
        prompt: "Choose the words that fix Ms. Lopez's directions.",
        text: "To go back to the page you just left, tap the {0}. To find a page about bridges, type in the {1}.",
        slots: [
          { options: ["Back arrow", "menu button", "search box"], answer: 0 },
          { options: ["search box", "Back arrow", "menu button"], answer: 0 }
        ],
        clue: "Ask what each tool does. One takes you to the page you just left, and one finds a page by a word you type.",
        hints: [
          "Ask what each tool does. One takes you to the page you just left, and one finds a page by a word you type.",
          "Read the two sentences that have a mistake. Then ask what a reader would do first, tap or type.",
          "A menu button opens a list of pages, so it is not the answer for either blank. Decide which of the other two tools fits each job."
        ],
        how: [
          "The first job is to return to the page just left. The tool with an arrow that points back does that job.",
          "The second job is to find a page by typing a word. A search box is the place to type.",
          "The answers are Back arrow and search box. A menu button opens a list of pages, and it does not go back or take typing."
        ],
        misconception: "A common mix-up is thinking the menu button does every job. A menu opens a list of pages, but it does not return to the last page or search for a word.",
        why: "The answers are Back arrow and search box. The Back arrow returns to the page you just left. A search box is where you type a word to find a page. The menu button only opens a list of pages." },
      { id: "SK-TFD-C04", type: "match", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [],
        stem: ["Kofi is reading a digital book about the ocean on a tablet. Each job below matches one feature on the screen."],
        prompt: "Match each job to the feature that does it.",
        cols: ["a link", "a pop-up", "a search box", "a menu"],
        rows: [
          { text: "Kofi wants a quick note about the word reef without leaving the page.", answer: 1 },
          { text: "Kofi wants to see a list of all the chapters in the book.", answer: 3 },
          { text: "Kofi wants to jump to the page about whales that the text mentions.", answer: 0 },
          { text: "Kofi wants to find every page that uses the word tide.", answer: 2 }
        ],
        clue: "Think about what each feature does when you tap it. One opens a note, one opens a list, one opens another page and one finds a word.",
        hints: [
          "Think about what each feature does when you tap it. One opens a note, one opens a list, one opens another page and one finds a word.",
          "Read each job and look for the key words, such as without leaving the page, a list, jump and find every page.",
          "A note that stays on the same page is a pop-up, so match the first row yourself. Then work out the other three rows."
        ],
        how: [
          "A quick note that does not leave the page is a pop-up.",
          "A list of all the chapters is a menu. A page that the text mentions, which you jump to, is a link.",
          "Finding every page that uses a word needs a search box, where you type the word.",
          "So the matches are: note, pop-up; chapters, menu; page about whales, link; word tide, search box."
        ],
        misconception: "A common mix-up is matching a link to every job, since it opens something. A link takes you to a new page, but a pop-up stays on the same page.",
        why: "The note without leaving the page is a pop-up. The list of chapters is a menu. The jump to the page about whales is a link. Finding every page with the word tide needs a search box." },
      { id: "SK-TFD-C05", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
        stem: ["Kofi wants to learn how to fold a paper fan. He can choose a video of two hands folding the paper, a recording of a voice that tells the steps, or a page of words with no pictures."],
        prompt: "Which choice will help him most, and why?",
        choices: [
          { text: "the video, because he can watch each fold and replay it", correct: true },
          { text: "the recording, because a voice is always faster than a video" },
          { text: "the page of words, because words show a fold better than hands do" },
          { text: "any of them, because all three give the same help in the same way" }
        ],
        clue: "Ask what Kofi has to do to learn this, and which way of sharing fits that job.",
        hints: [
          "Ask what Kofi has to do to learn this, and which way of sharing fits that job.",
          "Read what each choice can do: show, tell in a voice, or tell in words. Then read each reason and ask whether it is true.",
          "The choice that says all three give the same help is not true, because a voice, words and a video do different things. Rule it out and check the reasons for the other three."
        ],
        how: [
          "Folding is about where the hands go and how the paper bends. Kofi needs to see that.",
          "A video shows the folds and can be played again. A voice or plain words cannot show a fold.",
          "The answer is \"the video, because he can watch each fold and replay it.\"",
          "The recording is not always faster, and words do not show a fold better than hands do. The three choices do not give the same help."
        ],
        misconception: "A common mix-up is picking the choice that sounds quick. The best choice is the one that fits what the learner needs, and here Kofi needs to see the folds.",
        why: "The answer is \"the video, because he can watch each fold and replay it.\" Folding is about seeing where the paper goes. A voice or words alone cannot show a fold, and the three choices do not give the same help." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TFD-C06", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p1"],
        prompt: "In the script, what does the line [pause] tell the person who makes the recording?",
        choices: [
          { text: "to leave a quiet moment so listeners can try the whisper", correct: true },
          { text: "to make the guide speak louder for the next lines" },
          { text: "to end the tour and stop the recording right there" },
          { text: "to play a bell so listeners know a new stop begins" }
        ],
        clue: "Words in brackets are not spoken. Ask what the person making the recording must do with them.",
        hints: [
          "Words in brackets are not spoken. Ask what the person making the recording must do with them.",
          "Find the line [pause] in the script. Read the guide's lines just before it and just after it.",
          "The guide keeps talking after the pause, so the tour does not end there. Rule out that choice and decide among the other three."
        ],
        how: [
          "A word in brackets names a sound or a pause to put in. [pause] means the recording goes quiet for a moment.",
          "The line before it says, \"Now whisper one word into your dish.\" The listener needs time to do that.",
          "The answer is \"to leave a quiet moment so listeners can try the whisper.\" The guide talks again right after, so the tour does not end, and a bell is a different bracket."
        ],
        misconception: "A common mix-up is thinking the words in brackets are said out loud. They are directions for the sounds and quiet moments, and the narrator does not read them.",
        why: "The answer is \"to leave a quiet moment so listeners can try the whisper.\" The guide has just asked listeners to whisper, and they need a moment to do it. The guide keeps talking after the pause, so the tour does not end." },
      { id: "SK-TFD-C07", type: "order", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: ["p1"],
        prompt: "Put the steps in the order the guide tells the visitor to do them.",
        steps: [
          "Walk to one dish and face the curve.",
          "Ask a friend to go to the other dish.",
          "Whisper one word slowly into the dish.",
          "Switch places and try again."
        ],
        clue: "Spoken guides use words such as first, next, now and last to tell the order.",
        hints: [
          "Spoken guides use words such as first, next, now and last to tell the order.",
          "Look for those words at the start of the guide's lines. A sound in brackets can also show where a new part starts.",
          "The step that comes first is walking to one dish and facing the curve. Place the other three steps yourself."
        ],
        how: [
          "The word First goes with walking to one dish and standing close to face the curve.",
          "Next, the visitor asks a friend to go to the other dish. Then the word Now goes with whispering one word.",
          "The word Last goes with switching places and trying again.",
          "So the order is walk to a dish, ask a friend to the other dish, whisper, and switch places."
        ],
        misconception: "A common mix-up is putting the whisper first, since it is the main activity. The guide says to get in place before the whisper.",
        why: "The order is walk to one dish, ask a friend to the other dish, whisper one word, and switch places. The words First, Next, Now and Last tell the order." },
      { id: "SK-TFD-C08", type: "ebsr", points: 2, dok: 3, std: ["3.T.C.1.b"], passages: ["p1"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why does the guide tell the visitor to whisper slowly and keep the voice low?",
          choices: [
            { text: "A soft whisper shows that the dishes can carry even a quiet sound.", correct: true },
            { text: "A loud voice could crack the stone of the dishes." },
            { text: "The friend needs extra time to walk to the other dish." },
            { text: "The guide must finish the stop before the recording ends." }
          ] },
        partB: { prompt: "Which sentence from the script best supports the answer to Part A?",
          choices: [
            { text: "\"That is why even a soft whisper can be heard from far away.\"", correct: true },
            { text: "\"Say it slowly, and keep your voice low.\"" },
            { text: "\"You will see two big, curved dishes on opposite sides of the room.\"" },
            { text: "\"Next, ask a friend to go to the other dish.\"" }
          ] },
        clue: "A guide often gives a direction for a reason. Ask what the visitor finds out when the voice is very low.",
        hints: [
          "A guide often gives a direction for a reason. Ask what the visitor finds out when the voice is very low.",
          "For Part A, read the lines where the guide gives directions and the lines that tell what the dishes do. For Part B, find the sentence that explains what the dishes do with a very low voice.",
          "The script never says that a loud voice would hurt the dishes, so rule out that Part A choice. Decide Part B yourself."
        ],
        how: [
          "The guide asks the visitor to whisper one word, slowly, in a low voice.",
          "Then the guide explains what the dishes do. Each dish gathers sound and sends it across the room, so even a soft whisper can be heard from far away.",
          "Part A: \"A soft whisper shows that the dishes can carry even a quiet sound.\" Part B: \"That is why even a soft whisper can be heard from far away.\"",
          "The other sentences tell what to do or describe the room. They do not tell why the whisper is soft."
        ],
        misconception: "A common mix-up is choosing a sentence that tells what to do. Part B asks for the sentence that gives the reason for a quiet whisper.",
        why: "Part A: \"A soft whisper shows that the dishes can carry even a quiet sound.\" Part B: \"That is why even a soft whisper can be heard from far away.\" The guide asks for a low whisper to show how well the dishes carry sound. The script says nothing about harming the dishes." },
      { id: "SK-TFD-C09", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [],
        stem: ["Mr. Dunn is writing the script for Stop 5 of the audio tour, the Echo Tube. In this tour, a [soft bell] shows that a new part is starting.", "GUIDE: Call your name into the tube, and listen."],
        prompt: "Choose the words that best complete the sentences.",
        text: "After the guide says to call into the tube, Mr. Dunn should add {0}, so listeners hear a voice bounce back. At the end of Stop 5, he should add {1}, so listeners know the next stop is coming.",
        slots: [
          { options: ["[echo]", "[soft bell]", "[loud buzzer]"], answer: 0 },
          { options: ["[soft bell]", "[echo]", "[loud buzzer]"], answer: 0 }
        ],
        clue: "Ask what sound a listener would hear in each place. The stem tells what a bell does in this tour.",
        hints: [
          "Ask what sound a listener would hear in each place. The stem tells what a bell does in this tour.",
          "Read the stem again. Then ask what happens when a voice goes into a tube, and what shows that a new part is starting.",
          "A loud buzzer is not described in the tour and fits neither place, so rule it out. Decide which of the other two words goes with each blank."
        ],
        how: [
          "The stem says a [soft bell] shows that a new part is starting. A tube sends a voice back as an echo.",
          "After the guide says to call into the tube, the listeners should hear the voice bounce back, so Mr. Dunn adds an [echo].",
          "At the end of the stop, a new part is starting soon, so he adds a [soft bell].",
          "The answers are [echo] and [soft bell]. A loud buzzer does not do either job in this tour."
        ],
        misconception: "A common mix-up is swapping the two sounds. A bell shows a new part, and an echo is the voice coming back from the tube.",
        why: "The answers are [echo] and [soft bell]. An echo is what a voice does in a tube, so it goes after the guide says to call into the tube. A soft bell shows that a new part is starting, so it goes at the end of the stop." },
      { id: "SK-TFD-C10", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: [],
        stem: ["Next to the whisper dishes is a sign. It says, \"Whisper into one dish. A friend at the other dish can hear you.\" The museum also offers an audio tour with a guide who speaks."],
        prompt: "How does the audio tour help a first-time visitor more than the sign does?",
        choices: [
          { text: "It leads the visitor through each step and leaves time to try it.", correct: true },
          { text: "It lets the visitor read the same words again at any time." },
          { text: "It shows the visitor a picture of how the dishes were built." },
          { text: "It tells the visitor which museum has the biggest dishes." }
        ],
        clue: "Compare what a short sign gives with what a voice can do for a first-time visitor.",
        hints: [
          "Compare what a short sign gives with what a voice can do for a first-time visitor.",
          "Reread the sign. It has two short sentences. Then think about what a guide who speaks can add to them.",
          "A voice cannot show a picture, so rule out the choice about a picture. Check the other three against what the sign and the audio tour can do."
        ],
        how: [
          "The sign gives two short sentences. The visitor must figure out the rest.",
          "A guide who speaks can say one step at a time and leave a quiet moment, so the visitor can do each step as it is told.",
          "The answer is \"It leads the visitor through each step and leaves time to try it.\"",
          "Reading words again at any time is something the sign does better. The audio tour does not show a picture or compare museums."
        ],
        misconception: "A common mix-up is choosing a feature that the sign does better. Reading again at any time is a strength of printed words, not a recording.",
        why: "The answer is \"It leads the visitor through each step and leaves time to try it.\" A guide who speaks can tell one step at a time and pause. Rereading at will is a strength of the sign, and the tour shows no picture." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TFD-C11", type: "hottext", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p2"],
        prompt: "Jayden wants listeners to remember what time robotics club starts. Which sentence should he say a second time? Choose the sentence in the passage.",
        targets: ["p2:2:1", "p2:2:2", "p2:2:3", "p2:3:1", "p2:3:2", "p2:6:1"],
        answer: ["p2:2:2"], pick: 1,
        clue: "Listeners cannot look back at the page. Ask which fact they would be sorry to miss.",
        hints: [
          "Listeners cannot look back at the page. Ask which fact they would be sorry to miss.",
          "Read the paragraph about robotics club. Ask which sentence tells the time.",
          "The sentence that begins \"Next, the lost and found box is full\" is about a different notice, so rule it out. Check the other sentences you can choose for the time."
        ],
        how: [
          "Jayden wants listeners to remember the time, and listeners cannot look back at the page.",
          "The robotics club paragraph has three sentences. Only one tells the time.",
          "The answer is \"It starts at three o'clock.\" Saying it twice helps listeners remember when to come.",
          "The other sentences tell where robotics club meets, who can come, or other notices. They do not tell the time."
        ],
        misconception: "A common mix-up is repeating the first sentence of the notice. The speaker repeats the fact that listeners most need, and here that is the time.",
        why: "The answer is \"It starts at three o'clock.\" Listeners cannot look back, so the speaker says the time a second time. The other sentences tell where robotics club meets, who can come, or other notices." },
      { id: "SK-TFD-C12", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p2"],
        prompt: "Jayden begins one notice with \"Next\" and another with \"Also.\" Why does he use these words?",
        choices: [
          { text: "to show listeners that a new notice is starting", correct: true },
          { text: "to show listeners which notice is the most important" },
          { text: "to show listeners that the notices are almost over" },
          { text: "to show listeners which notices they should write down" }
        ],
        clue: "Listeners cannot see where one notice ends. Ask what a spoken word can do that a heading does on a page.",
        hints: [
          "Listeners cannot see where one notice ends. Ask what a spoken word can do that a heading does on a page.",
          "Look at the first words of each notice in the script. Then ask what changes right after those words.",
          "The word Also begins two different notices, so these words do not rank the notices by importance. Rule that choice out and decide among the other three."
        ],
        how: [
          "The script has several notices, and the listeners hear them all, one after another.",
          "A heading would mark a new part on a page, but listeners hear only a voice. A word such as Next or Also does that job.",
          "The answer is \"to show listeners that a new notice is starting.\"",
          "Both words begin new notices, and neither word ranks a notice or tells listeners to write it down. Only Last would show that the notices are almost over."
        ],
        misconception: "A common mix-up is thinking a word such as Next ranks the notices. These words only show that a new notice is starting.",
        why: "The answer is \"to show listeners that a new notice is starting.\" The greeting comes before the notices, and listeners need a moment to settle. The notices are not printed on the desks, and the announcements are not finished." },
      { id: "SK-TFD-C13", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [],
        stem: ["Jayden's friend recorded him practicing. On the recording, his voice dropped to a mumble at the end of each sentence, and he said \"Room 12\" so fast that nobody could catch it. His teacher gave him two tips."],
        prompt: "Choose the words that best complete the tips.",
        text: "At the end of each sentence, Jayden should {0}. When he says \"Room 12,\" he should {1}.",
        slots: [
          { options: ["keep his voice strong", "let his voice fade", "speak in a whisper"], answer: 0 },
          { options: ["say it slowly and clearly", "say it more quickly", "say it only once"], answer: 0 }
        ],
        clue: "Listeners must hear every word the first time. Ask what the mumble and the fast words did to the message.",
        hints: [
          "Listeners must hear every word the first time. Ask what the mumble and the fast words did to the message.",
          "Reread the two problems in the stem. Each tip should fix one of them.",
          "Saying the room only once would not fix the problem that it was too fast, so it is not the answer for the second blank. Decide the rest yourself."
        ],
        how: [
          "The first problem is that his voice drops at the end of each sentence, so listeners miss the last words.",
          "The fix is to keep his voice strong to the end of the sentence.",
          "The second problem is that \"Room 12\" was too fast. The fix is to say it slowly and clearly.",
          "The answers are keep his voice strong, and say it slowly and clearly."
        ],
        misconception: "A common mix-up is thinking a quicker, quieter voice sounds more polished. Listeners can only catch words that are loud and slow enough.",
        why: "The answers are keep his voice strong, and say it slowly and clearly. A voice that fades hides the end of each sentence, and a fast \"Room 12\" cannot be caught. Slow and clear words help listeners who cannot reread." },
      { id: "SK-TFD-C14", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: [],
        stem: ["At a soccer field, a speaker tells the parents that the game has moved from Field A to Field B. Many people are talking and cheering."],
        prompt: "How should the speaker share the news so that most people understand it?",
        choices: [
          { text: "Say \"Field B\" in a strong voice, and then say it again.", correct: true },
          { text: "Say it once as fast as possible, so the news is short." },
          { text: "Say it in a whisper, so people stop talking to listen." },
          { text: "Say it one time, and then wait for people to ask questions." }
        ],
        clue: "It is noisy, and listeners cannot ask or read. Ask what a speaker can do so the important fact is not missed.",
        hints: [
          "It is noisy, and listeners cannot ask or read. Ask what a speaker can do so the important fact is not missed.",
          "Look at each choice and ask whether people in a noisy crowd could hear the new field.",
          "A whisper will not carry over a noisy crowd, so rule it out. Check the other three choices against what listeners need."
        ],
        how: [
          "The crowd is noisy, so some people will miss a fact that is said only once.",
          "A speaker can use a strong voice and say the key fact twice, so more people catch it.",
          "The answer is \"Say \"Field B\" in a strong voice, and then say it again.\"",
          "A fast, quiet or single mention makes it easier to miss, and the crowd cannot ask questions over the speaker."
        ],
        misconception: "A common mix-up is thinking a short, fast message is best. In a noisy place, a key fact needs a strong voice and a repeat.",
        why: "The answer is \"Say \"Field B\" in a strong voice, and then say it again.\" The crowd is noisy and cannot reread, so a strong, repeated message is easiest to catch. Fast, quiet or single mentions are easy to miss." },
      { id: "SK-TFD-C15", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
        stem: ["Mei is giving a talk about her pet parakeet. She plans to read her notes with her head down and hold up nothing. The class will sit in rows, and some children will sit at the back."],
        prompt: "Which TWO changes would make Mei's talk easier for the class to follow? Choose TWO answers.",
        choices: [
          { text: "Look up and face the class as she talks.", correct: true },
          { text: "Hold up a picture of the parakeet's cage when she tells about it.", correct: true },
          { text: "Read her notes faster so that the talk is short." },
          { text: "Tell the facts in a whisper so the class has to lean in." },
          { text: "Stand far from the class so that she feels calm." }
        ],
        clue: "Ask what Mei's plan makes hard for the children at the back, and what would fix each problem.",
        hints: [
          "Ask what Mei's plan makes hard for the children at the back, and what would fix each problem.",
          "Think about the children at the back of the room. Which choices help them hear Mei and see what she is telling about?",
          "A whisper would not reach the back of the room, so rule it out. Choose two of the four that are left."
        ],
        how: [
          "Mei's plan has her head down and nothing to show, so listeners at the back may not hear or see much.",
          "Facing the class helps her voice reach everyone. A picture of the cage shows what she is telling about.",
          "The answers are \"Look up and face the class as she talks.\" and \"Hold up a picture of the parakeet's cage when she tells about it.\"",
          "Faster reading, a whisper and standing far away make it harder to hear and see."
        ],
        misconception: "A common mix-up is thinking a short, quiet or hidden talk is easier on the speaker, so it must be better. A talk is best when listeners can hear and see it.",
        why: "The answers are \"Look up and face the class as she talks.\" and \"Hold up a picture of the parakeet's cage when she tells about it.\" Both help the class at the back hear and see. Fast reading, whispering and standing far away make it harder." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text or stem. `like` lists the one core item
     each practises (same component, task and format). */
  similar: [
    { id: "SK-TFD-S01", type: "mc", points: 1, dok: 1, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C01"],
      stem: ["A clip about papermaking plays on a school site. Under the player, a line holds three round dots labeled Mash, Press and Dry. Far left on the screen sits a Back arrow, and beside the line is a speaker icon."],
      prompt: "Tia needs only the last stage. Where should she tap?",
      choices: [
        { text: "the Dry dot on the line", correct: true },
        { text: "the Mash dot on the line" },
        { text: "the Back arrow" },
        { text: "the speaker icon" }
      ],
      clue: "Ask which part of the page lets a viewer skip ahead to one part of a video.",
      hints: [
        "Ask which part of the page lets a viewer skip ahead to one part of a video.",
        "Read the three labels on the dots. Then think about what the arrow and the speaker icon do.",
        "The Back arrow goes to another page, not to a part of the video, so rule it out. Decide among the other three."
      ],
      how: [
        "The three dots jump to three parts of the video, and each dot has a label.",
        "The final step is drying, so Tia needs the dot with the word Dry.",
        "The answer is \"the Dry dot on the line.\" The Mash dot jumps to the first part, the Back arrow leaves the page, and the speaker icon changes the sound."
      ],
      misconception: "A common mix-up is picking the first dot, since it starts the video. Each dot jumps to its own part, so the label tells which one to use.",
      why: "The answer is \"the Dry dot on the line.\" Each dot jumps to the part named on its label, and drying is the final step. The Mash dot goes to the first part, the Back arrow leaves the page, and the speaker icon changes the sound." },
    { id: "SK-TFD-S02", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2, like: ["SK-TFD-C02"],
      stem: ["Zoe plays a recording by a mail carrier, Mr. Webb. A noisy hallway drowned out the phone number he gave. A box under the recording is labeled Transcript, and a slider shows the spot being played."],
      prompt: "Which TWO actions would give Zoe the digits? Choose TWO answers.",
      choices: [
        { text: "Look in the Transcript box for the digits.", correct: true },
        { text: "Move the slider left and replay that spot.", correct: true },
        { text: "Turn the volume way up and let the recording finish." },
        { text: "Look at the picture of the mail truck." },
        { text: "Click the Back arrow to leave the page." }
      ],
      clue: "Ask what each tool on the page is for. Zoe needs to check something that was already said.",
      hints: [
        "Ask what each tool on the page is for. Zoe needs to check something that was already said.",
        "Look at every choice. Ask what each one does to the recording or to the page.",
        "Turning the volume up changes how loud the recording is, but she would still hear the digits only once, so rule it out. Choose two from the four that are left."
      ],
      how: [
        "Zoe needs one phone number that Mr. Webb said.",
        "A transcript writes out the words, so she can read the digits. A slider can be moved back, so she can hear that spot again.",
        "The answers are \"Look in the Transcript box for the digits.\" and \"Move the slider left and replay that spot.\"",
        "Volume only changes loudness. A picture does not say the number, and the Back arrow leaves the page."
      ],
      misconception: "A common mix-up is picking the volume, since the problem is about hearing. A louder sound still goes by once, but a transcript or the slider lets Zoe look or listen again.",
      why: "The answers are \"Look in the Transcript box for the digits.\" and \"Move the slider left and replay that spot.\" Both let Zoe get the digits again. Volume only changes loudness, the picture does not say the number, and the Back arrow leaves the page." },
    { id: "SK-TFD-S03", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C03"],
      stem: ["Mr. Reyes tried to explain a library site to first-graders, but he swapped the jobs of a pair of tools. He said a Home tab opens a list of every page and a magnifying glass takes you to another page."],
      prompt: "Choose the words that correct Mr. Reyes' explanation.",
      text: "A list of every page opens from {0}. Underlined words are the way to {1}.",
      slots: [
        { options: ["the three-line button", "the Home tab", "the magnifying glass"], answer: 0 },
        { options: ["hop to another page", "look up a word", "jump back to the start"], answer: 0 }
      ],
      clue: "Ask what each tool does. One opens a list, one goes back, one finds words, and one takes you to another page.",
      hints: [
        "Ask what each tool does. One opens a list, one goes back, one finds words, and one takes you to another page.",
        "Read the two things Mr. Reyes said. Then match each job with the tool made for it.",
        "The Home tab returns to the start of the site, so it does not belong in the first blank. Decide the rest yourself."
      ],
      how: [
        "A button made of three short lines is a menu, and a menu opens a list of pages.",
        "Underlined words are a link, and a link takes you to another page.",
        "The answers are the three-line button and hop to another page. The Home tab returns to the start of the site, and the magnifying glass is for searching."
      ],
      misconception: "A common mix-up is thinking the magnifying glass takes you to a page. It searches for a word, and a link is what takes you to another page.",
      why: "The answers are the three-line button and hop to another page. The three-line button is a menu that opens a list of pages. Underlined words are a link, and a link takes you to another page." },
    { id: "SK-TFD-S04", type: "match", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C04"],
      stem: ["Tyrell has a kids' moon story open on his school computer. Several parts of the screen can be clicked."],
      prompt: "Connect each wish to the part of the screen that grants it.",
      cols: ["underlined words", "a dotted-line word", "a magnifying glass", "a three-line button"],
      rows: [
        { text: "Show all pages that mention crater.", answer: 2 },
        { text: "Open a different page about the sun.", answer: 0 },
        { text: "Explain what lunar means in a short note.", answer: 1 },
        { text: "Display all the pages in one list.", answer: 3 }
      ],
      clue: "Think about what happens on a click. One opens a page, one opens a note, one finds a word and one opens a list.",
      hints: [
        "Think about what happens on a click. One opens a page, one opens a note, one finds a word and one opens a list.",
        "Read each wish and look for key words such as all pages that mention, a different page, a short note and one list.",
        "A short note about a word is the job of the dotted-line word, so match the third row yourself. Then work out the other three."
      ],
      how: [
        "A short note about a word opens from a word with a dotted line.",
        "Underlined words are a link to another page. A magnifying glass means a search, which finds a word. A button with three lines opens a list of pages.",
        "So the matches are: crater, magnifying glass; page about the sun, underlined words; lunar, dotted-line word; list of pages, three-line button."
      ],
      misconception: "A common mix-up is matching the dotted-line word with a new page. A dotted-line word opens a note on the same page.",
      why: "Finding all pages that mention crater needs the magnifying glass. The page about the sun is a link, shown by underlined words. The note about lunar comes from the dotted-line word. The list of pages is the three-line button." },
    { id: "SK-TFD-S05", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C05"],
      stem: ["Ravi's family is driving to the beach, and the ride will last about an hour. Screens and books make him queasy in a moving car. He is curious about the northern lights, so his teacher gave him three versions of one talk: a video, a recording and a printed handout."],
      prompt: "What should Ravi use, and what is the reason?",
      choices: [
        { text: "Play the recording, since ears work when eyes cannot.", correct: true },
        { text: "Watch the video, since moving pictures teach best in every case." },
        { text: "Read the handout, since paper stays steady in a bumpy car." },
        { text: "Skip learning, since nobody can study while riding." }
      ],
      clue: "Ask what Ravi is able to do during the ride, and which way of sharing fits that.",
      hints: [
        "Ask what Ravi is able to do during the ride, and which way of sharing fits that.",
        "Read what each choice needs: looking, or only listening. Then read each reason and ask whether it fits Ravi.",
        "The choice that says nobody can study while riding is not true, so rule it out. Check the reasons for the other three."
      ],
      how: [
        "Ravi cannot use his eyes, so a video or a handout will not work for him.",
        "A recording can be heard without looking. It fits what Ravi needs.",
        "The answer is \"Play the recording, since ears work when eyes cannot.\"",
        "A video and a handout both need his eyes, and people can learn while riding in a car."
      ],
      misconception: "A common mix-up is picking the choice with the most pictures. The best choice is the one that fits the learner's need, and Ravi needs something to hear.",
      why: "The answer is \"Play the recording, since ears work when eyes cannot.\" Ravi cannot use his eyes, and a recording works with only his ears. A video and a handout both need his eyes." },
    { id: "SK-TFD-S06", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C06"],
      stem: ["Part of a recorded garden walk reads like this. Words in [brackets] are notes for the crew.", "NARRATOR: Stop 2 is the pond. Count the ripples you see.", "[pause]", "NARRATOR: Did you count more than five?"],
      prompt: "A crew member is putting the walk together. What should he do at [pause]?",
      choices: [
        { text: "stay silent while visitors look at the water", correct: true },
        { text: "make the narrator whisper the next question again" },
        { text: "stop the walk and end the file here" },
        { text: "add the sound of splashing water now" }
      ],
      clue: "Words in brackets are not spoken. Ask what the crew must do with a note like this one.",
      hints: [
        "Words in brackets are not spoken. Ask what the crew must do with a note like this one.",
        "Find the note [pause] in the walk. Read the narrator's lines just before it and just after it.",
        "The narrator keeps talking after the note, so the walk does not stop there. Rule out that choice and decide among the other three."
      ],
      how: [
        "A note in brackets tells the crew what to put in. [pause] means the recording goes quiet.",
        "The narrator has just asked visitors to count the ripples. They need a few seconds to look.",
        "The answer is \"stay silent while visitors look at the water.\" The narrator talks again after the pause, so the walk goes on, and the note does not call for a whisper or a splash."
      ],
      misconception: "A common mix-up is thinking a bracket names a sound to add. A pause is a stretch of quiet.",
      why: "The answer is \"stay silent while visitors look at the water.\" The narrator asked visitors to count ripples, and they need time to look. The narrator talks again right after, so the walk does not stop." },
    { id: "SK-TFD-S07", type: "order", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C07"],
      stem: ["Listen to this cook's recording about making a fruit cup.", "COOK: To begin, wash the grapes in a bowl.", "COOK: Then cut an apple into small pieces.", "COOK: After that, stir the grapes and apple together.", "COOK: Finally, put the cup in the fridge."],
      prompt: "Arrange the jobs in the sequence the cook speaks them.",
      steps: [
        "Wash the grapes.",
        "Cut up an apple.",
        "Stir the fruit together.",
        "Chill the cup."
      ],
      clue: "Spoken steps use words such as to begin, then, after that and finally to show the order.",
      hints: [
        "Spoken steps use words such as to begin, then, after that and finally to show the order.",
        "Look at the first words of each line the cook says.",
        "The job that comes first is washing the grapes. Place the other three jobs yourself."
      ],
      how: [
        "The words To begin go with washing the grapes.",
        "The word Then goes with cutting the apple, and the words After that go with stirring the fruit.",
        "The word Finally goes with putting the cup in the fridge, which chills the cup.",
        "So the order is wash, cut, stir, chill."
      ],
      misconception: "A common mix-up is putting stirring first because it sounds like the main job. The cook's words tell the order.",
      why: "The order is wash the grapes, cut up an apple, stir the fruit together, and chill the cup. The words To begin, Then, After that and Finally tell the order." },
    { id: "SK-TFD-S08", type: "ebsr", points: 2, dok: 3, std: ["3.T.C.1.b"], passages: ["p4"], like: ["SK-TFD-C08"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the host's reason for asking visitors to spin as fast as possible?",
        choices: [
          { text: "Stripes melt into one color when spun fast.", correct: true },
          { text: "A slow spin could wear out the paper." },
          { text: "The handle is hard to turn slowly." },
          { text: "Another visitor wants a turn." }
        ] },
      partB: { prompt: "Which line gives the best evidence for Part A?",
        choices: [
          { text: "\"They blur together into one color.\"", correct: true },
          { text: "\"Thank you for visiting.\"" },
          { text: "\"What do you see?\"" },
          { text: "\"Hold the base with your other hand.\"" }
        ] },
      clue: "A guide often gives a direction for a reason. Ask what the visitor sees happen to the colored lines on the disk.",
      hints: [
        "A guide often gives a direction for a reason. Ask what the visitor sees happen to the colored lines on the disk.",
        "For Part A, read the lines from the pause to the end of the script. For Part B, find the sentence that tells what happens to the colored lines.",
        "The script never says that a slow spin could wear out the disk, so rule out that Part A choice. Decide Part B yourself."
      ],
      how: [
        "The guide tells the visitor to turn the handle as fast as possible.",
        "After the pause, the guide says that when the disk spins fast, your eyes cannot tell the stripes apart. They blur into one color.",
        "Part A: \"Stripes melt into one color when spun fast.\" Part B: \"They blur together into one color.\"",
        "The other lines tell what to do or ask a question. They do not tell why a fast spin matters."
      ],
      misconception: "A common mix-up is choosing a line that tells what to do. Part B asks for the sentence that gives the reason.",
      why: "Part A: \"Stripes melt into one color when spun fast.\" Part B: \"They blur together into one color.\" The guide asks for a fast spin so the visitor sees the stripes blur. The script says nothing about wearing out the disk." },
    { id: "SK-TFD-S09", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C09"],
      stem: ["Ms. Park records a story about a lost mitten. In her code for the sound crew, [bell ringing] means a chapter is over.", "NARRATOR: A cold wind howled around the cabin all night."],
      prompt: "Choose the words that best complete the sentences.",
      text: "To let listeners hear the weather in that line, she needs {0}. When the chapter ends she needs {1}.",
      slots: [
        { options: ["[wind howling]", "[bell ringing]", "[door slamming]"], answer: 0 },
        { options: ["[bell ringing]", "[wind howling]", "[door slamming]"], answer: 0 }
      ],
      clue: "Ask what sound a listener would hear in each place. Her code tells what a bell ringing does.",
      hints: [
        "Ask what sound a listener would hear in each place. Her code tells what a bell ringing does.",
        "Read her code and the line again. Then ask what the line is about, and what shows that a chapter has ended.",
        "A door slamming is not in her line or her code, so it is not the answer for either blank. Decide which of the other two goes with each blank."
      ],
      how: [
        "Her code says a [bell ringing] means a chapter is over. The line is about a cold wind howling.",
        "The line tells about a howling wind, so listeners should hear it, and she adds [wind howling].",
        "When the chapter ends, she adds a [bell ringing].",
        "The answers are [wind howling] and [bell ringing]. A door slamming does neither job."
      ],
      misconception: "A common mix-up is swapping the two sounds. A bell shows the end of a chapter, and a wind sound belongs with a line about wind.",
      why: "The answers are [wind howling] and [bell ringing]. The line tells about a howling wind, so the weather sound belongs there. A bell shows that the chapter is over." },
    { id: "SK-TFD-S10", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C10"],
      stem: ["A poster by the front door lists rules for a fire drill. During a drill, a recorded voice also plays over speakers in every room."],
      prompt: "In a drill, what can the recorded voice do that the poster cannot?",
      choices: [
        { text: "It reaches everyone at once, even children who are not near the door.", correct: true },
        { text: "Children can study it for as long as they like." },
        { text: "It shows a map of the building with the way out drawn in." },
        { text: "It names the teacher who wrote the rules." }
      ],
      clue: "Compare where a poster can be read with where a voice can be heard.",
      hints: [
        "Compare where a poster can be read with where a voice can be heard.",
        "Think about where the poster hangs. Then think about where the speakers are.",
        "A voice cannot show a map, so rule out the choice about a map. Check the other three against what a voice can and cannot do."
      ],
      how: [
        "The poster hangs by one door, so children must be near it and have time to read.",
        "The speakers are in every room, so the voice reaches all the children at the same time.",
        "The answer is \"It reaches everyone at once, even children who are not near the door.\"",
        "Studying for as long as they like is a strength of the poster. A voice shows no map and does not name a teacher."
      ],
      misconception: "A common mix-up is choosing a feature that belongs to the poster. Studying at any time is what printed words do best.",
      why: "The answer is \"It reaches everyone at once, even children who are not near the door.\" The speakers are in every room, but the poster hangs in one place. Studying at leisure is something the poster allows, and a voice shows no map." },
    { id: "SK-TFD-S11", type: "hottext", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p5"], like: ["SK-TFD-C11"],
      prompt: "Marcus hopes everyone knows where rehearsal meets. Which line ought he to say twice?",
      targets: ["p5:2:1", "p5:2:2", "p5:2:3", "p5:3:1", "p5:3:2", "p5:6:1"],
      answer: ["p5:2:2"], pick: 1,
      clue: "Listeners cannot read the announcement again. A speaker says the fact that people must remember a second time.",
      hints: [
        "Listeners cannot read the announcement again. A speaker says the fact that people must remember a second time.",
        "Read the paragraph about drama club. Ask which sentence tells where to go.",
        "The sentence \"You do not need to carry anything\" tells what to carry, not where to meet, so rule it out. Check the other sentences you can choose for the place."
      ],
      how: [
        "Marcus wants listeners to remember the place, and listeners cannot look back at the page.",
        "The drama club paragraph has four sentences. Only one tells where to meet.",
        "The answer is \"Meet at the stage door at four sharp.\" Saying it twice helps listeners remember the place.",
        "The other sentences tell that drama club will rehearse, what to carry, or other news."
      ],
      misconception: "A common mix-up is repeating the first sentence of the notice. The speaker repeats the fact that listeners most need.",
      why: "The answer is \"Meet at the stage door at four sharp.\" It tells where to meet, which listeners must remember. The other sentences tell about the rehearsal, what to carry, or other news." },
    { id: "SK-TFD-S12", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C12"],
      stem: ["At Family Night, Ms. Brown tells the guests about two parts of the evening. She says, \"Now, about the bake sale. Tables will be in the gym.\" Later she says, \"Now, about the book fair. It will be in the library.\""],
      prompt: "Why does Ms. Brown begin each part with the words \"Now, about\"?",
      choices: [
        { text: "to show the guests which topic she is starting", correct: true },
        { text: "to ask the guests to repeat the words after her" },
        { text: "to tell the guests where to sit down" },
        { text: "to warn the guests that the next topic is a hard one" }
      ],
      clue: "Guests cannot see where one part ends. Ask what a spoken phrase can do that a heading does on a page.",
      hints: [
        "Guests cannot see where one part ends. Ask what a spoken phrase can do that a heading does on a page.",
        "Look at what Ms. Brown says right after \"Now, about.\" Then ask what the guests learn from those first words.",
        "Nothing in her words asks the guests to repeat anything, so rule out that choice and decide among the other three."
      ],
      how: [
        "Ms. Brown talks about two topics, one after the other. The guests only hear her voice.",
        "The words \"Now, about\" name the topic she is starting, the way a heading would on a page.",
        "The answer is \"to show the guests which topic she is starting.\"",
        "Her words do not ask the guests to repeat anything, tell them where to sit, or warn them about a hard topic."
      ],
      misconception: "A common mix-up is thinking an opening phrase gives an order to the guests. Words such as Now, about only show which topic is starting.",
      why: "The answer is \"to show the guests which topic she is starting.\" The words work like a heading for listeners. They do not ask the guests to do anything." },
    { id: "SK-TFD-S13", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C13"],
      stem: ["Lena rehearsed a talk about the school play into a tablet. Playing it back, her aunt noticed that the back row would never hear her soft voice, and that the date of the play went by in a blur."],
      prompt: "Fill in the aunt's advice.",
      text: "To reach the back row, Lena should {0}. At the date, she should {1}.",
      slots: [
        { options: ["raise her voice a little", "lower her voice a lot", "hum the words"], answer: 0 },
        { options: ["slow down for the date", "rush through the date", "skip the date"], answer: 0 }
      ],
      clue: "Listeners must hear every word the first time. Ask what the soft voice and the blurred date did to her message.",
      hints: [
        "Listeners must hear every word the first time. Ask what the soft voice and the blurred date did to her message.",
        "Reread the two problems in the story. Each piece of advice should fix one of them.",
        "Skipping the date would leave out the fact that listeners need, so it is not the answer for the second blank. Decide the rest yourself."
      ],
      how: [
        "The first problem is a voice so soft that the back row cannot hear. The fix is to raise her voice a little.",
        "The second problem is a date that went by in a blur. The fix is to slow down for the date.",
        "The answers are raise her voice a little, and slow down for the date."
      ],
      misconception: "A common mix-up is thinking a faster, softer voice sounds smoother. Listeners catch only words that are loud and slow enough.",
      why: "The answers are raise her voice a little, and slow down for the date. A soft voice does not reach the back row, and a blurred date is easy to miss. Skipping the date would leave out an important fact." },
    { id: "SK-TFD-S14", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: [], like: ["SK-TFD-C14"],
      stem: ["At a picnic in the park, the grill is hot and children are running everywhere. A parent must tell everyone that lunch is at the big shelter, not the small one."],
      prompt: "Which plan gets the location across?",
      choices: [
        { text: "Point toward the big shelter and say its name two times.", correct: true },
        { text: "Speak softly, so that the children have to come closer." },
        { text: "Hurry through the words, just one time, to save time." },
        { text: "Tell only the parents who stand nearest to you." }
      ],
      clue: "The park is loud, and listeners cannot ask or read. Ask what a speaker can do so that the key fact is not missed.",
      hints: [
        "The park is loud, and listeners cannot ask or read. Ask what a speaker can do so that the key fact is not missed.",
        "Look at each plan and ask whether a child far away could catch the place.",
        "Soft speaking will not carry over the noise, so rule it out. Check the other three plans against what listeners need."
      ],
      how: [
        "The park is loud, so some people will miss a fact that is said only once.",
        "A speaker can point to the place and say the key fact two times.",
        "The answer is \"Point toward the big shelter and say its name two times.\"",
        "Soft speaking, a rushed single mention and telling only the nearest parents leave many people out."
      ],
      misconception: "A common mix-up is thinking the shortest message is best. In a loud place, the key fact needs a repeat and a way to show the place.",
      why: "The answer is \"Point toward the big shelter and say its name two times.\" The park is loud, so a key fact needs to be shown and said again. Soft speaking, a rushed single mention and telling only the nearest parents leave many people out." },
    { id: "SK-TFD-S15", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2, like: ["SK-TFD-C15"],
      stem: ["Rosa is preparing a speech on her visit to a train museum. Her draft plan: murmur, gaze downward, no visuals. Her audience will form a wide ring on the rug."],
      prompt: "Which TWO changes would help Rosa's audience understand her speech? Choose TWO answers.",
      choices: [
        { text: "Speak up so the whole ring can hear.", correct: true },
        { text: "Show a map of the museum while telling the route.", correct: true },
        { text: "Rush through the talk." },
        { text: "Turn her back toward the wall." },
        { text: "Mumble the names of the trains." }
      ],
      clue: "Ask what Rosa's plan makes hard for the children across the ring, and what would fix each problem.",
      hints: [
        "Ask what Rosa's plan makes hard for the children across the ring, and what would fix each problem.",
        "Think about the children across the ring. Which choices help them catch Rosa's words and follow her trip?",
        "Turning her back would send her voice away from the audience, so rule it out. Choose two of the four that are left."
      ],
      how: [
        "Rosa's draft plan has her murmuring and showing nothing, so some children may not hear or understand.",
        "A louder voice reaches the whole ring. A map shows the route she is telling about.",
        "The answers are \"Speak up so the whole ring can hear.\" and \"Show a map of the museum while telling the route.\"",
        "Rushing, turning away and mumbling make her talk harder to follow."
      ],
      misconception: "A common mix-up is thinking a short, quiet talk is best. A talk works when listeners can hear it and see what the speaker means.",
      why: "The answers are \"Speak up so the whole ring can hear.\" and \"Show a map of the museum while telling the route.\" Both help the class hear and understand. Rushing, turning away and mumbling make the talk harder." }
  ],
  /* Hints and Show me how for the four Practice Together items. */
  addons: {
    "SK-TFD-P1": {
      hints: [
        "Ask what happened to the page when Eli tapped the word. Did he stay on the same page, or go to a new one?",
        "Read the part that says the box opened on top of the page. Then read what the box says.",
        "A menu lists many pages, but this box holds only one note about one word, so rule out the menu. Check the other three."
      ],
      how: [
        "Eli tapped a word with a dotted line, and a small box opened on top of the page.",
        "The box told what the word harbor means, and Eli stayed on the same page.",
        "The answer is \"It is a pop-up that explains a word without leaving the page.\" A link opens a new page, a menu lists pages, and a caption goes with a picture."
      ],
      misconception: "A common mix-up is calling every tapped word a link. A link takes you to a new page, but a pop-up stays on the page you are reading." },
    "SK-TFD-P2": {
      hints: [
        "Think about what each part is named. A name often tells the job.",
        "Read the four jobs in the columns. Then match each job to the part that does it.",
        "The progress bar shows how far along the video is, so match the last row yourself. Then work out the other three."
      ],
      how: [
        "The play button starts or stops the video.",
        "CC stands for captions, so the CC button writes out the words and sounds.",
        "The 1x button changes the speed, and the progress bar shows how far along the video is."
      ],
      misconception: "A common mix-up is thinking the progress bar changes the speed. The bar shows where you are, and the 1x button changes how fast the video plays." },
    "SK-TFD-P3": {
      hints: [
        "Amir wants to read words, not hear them. Ask which feature shows a recording as words.",
        "Read the four choices and what each button does. Look for the one that gives written words.",
        "The speed button changes how fast the talk plays, so it does not give Amir written words. Rule it out and check the other three."
      ],
      how: [
        "Amir missed one sentence and wants the exact words.",
        "A transcript writes out the whole recording, so he can find the sentence and read it.",
        "The answer is \"the transcript, which writes out the whole talk.\" Volume and speed change how he hears the talk, and the progress bar shows where he is."
      ],
      misconception: "A common mix-up is choosing the volume button because the problem is about hearing. Amir needs the words in writing, which only a transcript gives." },
    "SK-TFD-P4": {
      hints: [
        "A speaker's voice should match the message. Ask what feeling each notice has.",
        "Read the two notices. One tells about winning a prize, and one tells about a canceled assembly.",
        "Exactly the same voice for both notices would hide the difference in feeling, so rule it out. Check the other three."
      ],
      how: [
        "The first notice is good news about a prize. A happy voice fits it.",
        "The second notice is about a canceled assembly. A serious voice fits it.",
        "The answer is \"It should sound happy for the first notice and serious for the second.\" Switching the voices would not fit the messages, and very quiet or loud voices do not show feeling."
      ],
      misconception: "A common mix-up is reading every notice in the same voice. A speaker's tone helps listeners know how the news feels." }
  },
  /* Skill check (form A). Uses p3 and two inline stems. Never uses a core, similar or practice text. */
  test: [
    { id: "SK-TFD-T1", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      stem: ["Mia is watching a video about farm animals. She turns the sound off and taps the CC button."],
      prompt: "What will Mia see on the screen?",
      choices: [
        { text: "the narrator's words and important sounds, written out", correct: true },
        { text: "a list of every page on the farm website" },
        { text: "a bar with a dot for each part of the video" },
        { text: "the same video playing at twice the speed" }
      ],
      clue: "CC stands for captions. Ask what captions do for a viewer who cannot hear the sound.",
      why: "The answer is \"the narrator's words and important sounds, written out.\" The CC button turns on captions, which write out what is said and the important sounds. A list of pages comes from a menu, a bar with dots is the progress bar, and the speed comes from a different button." },
    { id: "SK-TFD-T2", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [],
      stem: ["A video page about picking apples has a play button, a CC button and a volume button. A line under the video has three dots labeled Choosing, Picking and Storing."],
      prompt: "Choose the words that best complete the sentences.",
      text: "To jump to the part about picking, Eli taps the {0}. To read the narrator's words while the video plays, he taps the {1}.",
      slots: [
        { options: ["Picking dot", "CC button", "volume button"], answer: 0 },
        { options: ["CC button", "Storing dot", "play button"], answer: 0 }
      ],
      clue: "A dot on the line under a video jumps to a part. Ask which button shows the narrator's words.",
      why: "The answers are Picking dot and CC button. The Picking dot jumps to the part about picking. The CC button shows captions, which write out the narrator's words." },
    { id: "SK-TFD-T3", type: "order", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: ["p3"],
      prompt: "Put the steps in the order the narrator tells them.",
      steps: [
        "Look for berries that are red all over.",
        "Hold a berry by its stem and pull gently.",
        "Place the berry in the basket.",
        "Wash the berries at home."
      ],
      clue: "The narrator uses words such as first, next and last. Look for them at the start of the lines.",
      why: "The order is look for red berries, hold a berry by its stem and pull, place it in the basket, and wash the berries at home. The words First, Next and Last tell the order." },
    { id: "SK-TFD-T4", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: [],
      stem: ["Noah tells his class a safety rule: \"Walk, do not run, in the hall.\" Then he says the rule a second time, slowly."],
      prompt: "Why is it a good idea for Noah to say the rule twice?",
      choices: [
        { text: "Listeners cannot reread, so hearing it twice helps them remember.", correct: true },
        { text: "Saying a rule two times always makes a talk better than saying it once." },
        { text: "Listeners learn more when a speaker talks very quickly and quietly." },
        { text: "Noah is showing that he forgot the rest of his talk." }
      ],
      clue: "A listener hears a talk only once. Ask what a speaker can do so that an important fact stays with the listener.",
      why: "The answer is \"Listeners cannot reread, so hearing it twice helps them remember.\" A speaker says an important fact a second time because listeners cannot look back. Saying anything twice is not always better, and Noah says it slowly, not quickly." },
    { id: "SK-TFD-T5", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p3"],
      prompt: "Why does the script put a [pause] before the narrator says, \"Last, wash the berries at home\"?",
      choices: [
        { text: "to give viewers a moment to place the berry in the basket", correct: true },
        { text: "to show that the narrator has finished the whole video" },
        { text: "to let the sound of the birds play one more time" },
        { text: "to tell viewers to skip the part about washing" }
      ],
      clue: "A pause leaves a quiet stretch. Look at the narrator's line just before it, and ask what viewers might be doing.",
      why: "The answer is \"to give viewers a moment to place the berry in the basket.\" Just before the pause, the narrator says to place the berry in the basket. The video goes on after the pause, so it is not finished." }
  ]
});
