/* Lessons: 3.T.SS Organization and Craft (3-5.T.SS.1, 3-5.T.SS.2). Schema: docs/SPEC.md §8. */

/* ---------- 3.T.SS.1.a Text structure and text features ----------
   p1 and p2 have headings ("## ...") and p1 has a "Did You Know?" text box. Sentence refs count
   every array entry, headings included. p1: array 7 = section "Why Peanuts Help the Soil".
   p2: array 3 = "A Home for Many Animals", array 5 = "A Big Problem", array 7 = "Working Together".
   Prompts name sections by heading, never by paragraph number. */
PP.addLesson({
  code: "3.T.SS.1.a",
  title: "How a text is put together: sections, patterns and features",
  clues: {
    words: ["one day", "but", "then", "so", "finally", "in the end",
      "first", "next", "after that", "later",
      "because", "since", "as a result", "that is why", "this caused",
      "problem", "tried", "decided", "solved",
      "both", "alike", "same", "however", "unlike", "different", "while",
      "for example", "such as", "also", "in addition", "has", "looks like"],
    groups: [
      { name: "Story elements", words: ["one day", "but", "then", "so", "finally", "in the end"] },
      { name: "Sequence", words: ["first", "next", "then", "after that", "later", "finally"] },
      { name: "Cause and effect", words: ["because", "so", "since", "as a result", "that is why", "this caused"] },
      { name: "Problem and solution", words: ["problem", "tried", "but", "decided", "solved", "finally"] },
      { name: "Compare and contrast", words: ["both", "alike", "same", "but", "however", "unlike", "different", "while"] },
      { name: "Description", words: ["for example", "such as", "also", "in addition", "has", "looks like"] }
    ],
    ask: "Which kind of text is this, and what clue word told you?",
    draw: "Draw the organizer that fits: a story map, a row of boxes with arrows, cause-and-effect boxes, a problem with a box for each try, three columns, or a web."
  },
  coach: {
    mixup: "Some clue words are tricky: but, so, then and finally show up in lots of kinds of text. Read the whole sentence to see what job the word is doing. Ask: \"Is the author showing what goes wrong, the steps in order, or how two things are different?\"",
    strong: "\"It's cause and effect. It says as a result, and it tells why the puddle dried up.\" The answer names the kind of text and the clue word that proves it.",
    notyet: "Naming the topic instead of the kind of text: \"It's about butterflies.\" Ask: \"How did the author put the ideas together? What clue word told you?\"",
    ido: "Read a paragraph aloud and think out loud: \"I see because. That tells me the author is about to explain why. This part is cause and effect.\"",
    wedo: "Read the next paragraph together. Your child finds the clue word, and you ask, \"What clue word helped you? Which kind of text does it point to?\"",
    youdo: "Your child reads a short section alone, names the kind of text and draws its organizer. Check it afterward, not while they work.",
    everyday: "When you read a sign, a recipe or a news story together, ask, \"Which kind of text is this, and what clue word told you?\""
  },
  teach: {
    big: "Authors build a text with a plan: headings split it into sections, a pattern links the ideas, and features like captions and maps help you understand.",
    points: [
      "Sequence tells steps or events in order. Look for clue words like first, next, then, after that, later and finally. Authors use it when the order matters.",
      "Cause and effect tells what happened and why. Look for because, so, since, as a result, that is why and this caused.",
      "Compare tells how things are alike and different. Look for both, alike, same, but, however, unlike, different and while.",
      "Problem and solution tells about a trouble and how it gets fixed. Look for problem, tried, but, decided, solved and finally. Time words like then can show the tries in order, so read the whole paragraph before you decide.",
      "Description tells about one topic with details. Look for for example, such as, also, in addition, has and looks like. Stories have clue words too: one day, but, then, so, finally and in the end.",
      "Features help you understand. Headings split a text into sections and tell what each one is about. Captions tell what a picture shows, maps show where places are, a diagram uses labels to name parts, and a text box sets apart an extra fact. Whole sections can follow a pattern too, such as the order things happen. To decide where a picture or a new sentence belongs, find the section that tells about the same thing. In a book, the table of contents lists the chapters and the page where each one starts, and a chapter can have sections inside it."
    ],
    words: [
      { term: "chapter", means: "one of the big parts of a book; a chapter can have several sections inside it" },
      { term: "section", means: "one part of a text, often with its own heading" },
      { term: "heading", means: "a title above a section that tells what it is about" },
      { term: "cause", means: "why something happens" },
      { term: "effect", means: "what happens because of the cause" },
      { term: "caption", means: "words next to a picture that tell what it shows" }
    ],
    example: {
      label: "Example",
      lines: ["Why Puddles Dry Up", "After a rain, the sun comes out and warms the puddles. Because of the heat, the water slowly turns into a gas called water vapor. The gas rises into the air. As a result, the puddle gets smaller and smaller until it is gone."],
      note: "The clue words because and as a result show cause and effect. The sun's heat is the cause. The puddle drying up is the effect. The heading tells you the section will explain why."
    },
    tip: "On the test, you may be asked how a section is organized, why the author used a heading, or what a map or caption would help you understand. Look for clue words first."
  },
  learn: [
    {
      show: ["First, a butterfly lays a tiny egg on a leaf. Next, a caterpillar hatches from the egg and eats lots of leaves. Then the caterpillar makes a hard case called a chrysalis. Finally, a grown butterfly comes out."],
      ask: "How is this text organized?",
      steps: [
        "Look for clue words. This text uses first, next, then and finally.",
        "Those words show things happening in order, one after another.",
        "Ask: could the steps be mixed up? No. A butterfly cannot come out before the egg is laid. So the order matters."
      ],
      answer: "It is organized in sequence. It tells the steps of a butterfly's life in order."
    },
    {
      show: ["Rabbits and hares are both furry animals with long ears. Both eat grass and leaves. But baby rabbits are born without fur, while baby hares are born with fur and open eyes."],
      ask: "How is this text organized?",
      steps: [
        "Count the subjects. The text is about two animals, rabbits and hares.",
        "Look for clue words. Both tells how they are alike. But and while tell how they are different.",
        "A text that tells how two things are alike and different is a compare text."
      ],
      answer: "It is organized to compare. It tells how rabbits and hares are alike and different."
    },
    {
      show: ["An article says the Chattahoochee River starts in the mountains of north Georgia. It flows past the city of Atlanta and then runs along part of the border between Georgia and Alabama. Next to the article is this map."],
      figure: { src: "assets/figures/ss1a-georgia-river.svg", label: "Figure 1", caption: "The Chattahoochee River in Georgia",
        alt: "Map of Georgia, with an arrow that points north. Alabama is to the west and Florida is to the south. The Chattahoochee River is drawn as a thick striped line. It starts in the mountains in the north, flows southwest past a dot for Atlanta, then runs south along the border between Georgia and Alabama." },
      ask: "How does the map help the reader?",
      steps: [
        "Think about what the words tell. They name places the river passes.",
        "Look at the map. The arrow shows that the top of the map is north. Find the mountains at the top, the dot for Atlanta, and the striped line for the river.",
        "Put them together. Follow the river from the mountains, past Atlanta, and down the edge of Georgia next to Alabama. The map lets you see the river's path and where those places are."
      ],
      answer: "The map shows the path of the river, so the reader can see where it starts, where Atlanta is, and where it runs along the Alabama border."
    }
  ],
  parent: "When you read a cereal box, a recipe or a kids' magazine together, point to a heading or a picture caption and ask, \"What does this part help you know?\" Then hunt for clue words like first, because and both.",
  passages: [
    { id: "p1", title: "Peanuts: From Flower to Farm", genre: "Informational text",
      paragraphs: [
        ["Peanuts are a favorite snack for many people.", "But did you know that peanuts grow under the ground?", "Many farmers in Georgia grow peanuts.", "Here is how a peanut plant grows and why farmers like it."],
        ["## From Flower to Peanut"],
        ["First, farmers plant peanut seeds in warm soil in the spring.", "Next, the plants grow green leaves and small yellow flowers.", "Then something surprising happens.", "After a flower fades, a thin stem called a peg grows down and pushes into the soil.", "Finally, a peanut grows at the end of each peg, under the ground."],
        ["## Harvest Time"],
        ["In the fall, farmers use a machine that digs up the plants.", "The machine turns them upside down so the peanuts face the sky.", "The peanuts dry in the sun for a few days.", "Then another machine picks the peanuts off the plants."],
        ["## Why Peanuts Help the Soil"],
        ["Peanut plants are good for the soil.", "Their roots work with tiny living things to add plant food to the soil.", "Because the soil has more plant food, crops such as cotton and corn often grow better in that field the next year."],
        ["## Did You Know?"],
        ["Box: Georgia grows more peanuts than any other state."]
      ] },
    { id: "p2", title: "Saving the Gopher Tortoise", genre: "Informational text",
      paragraphs: [
        ["The gopher tortoise is Georgia's state reptile.", "It is a slow, gentle animal that lives in dry, sandy places.", "It eats grasses and other low plants."],
        ["## A Home for Many Animals"],
        ["A gopher tortoise uses its strong front legs to dig a long tunnel in the sand.", "This tunnel is called a burrow.", "A burrow stays cool on hot days and warmer on cold nights.", "Because of this, many other animals, such as snakes, frogs and mice, hide in tortoise burrows too."],
        ["## A Big Problem"],
        ["Long ago, large pine forests covered much of south Georgia, and many gopher tortoises lived there.", "Over many years, people cut down many of these forests to build towns, roads and farms.", "As a result, the tortoises lost much of their home."],
        ["## Working Together"],
        ["Today, people are working to solve this problem.", "Some land is now kept safe so tortoises can live there.", "Workers also set small, careful fires in these pine forests.", "The fires burn away thick bushes.", "Then sunlight can reach the ground, and the low plants that tortoises eat can grow."]
      ] },
    /* B2 (expansion 2026-10-22, author b2d): p3 is used only by core set 2 and p4 only by core set 3.
       Never used by test. NEEDS INDEPENDENT RE-REVIEW (B2 fixes). Pine County and Millbrook are made-up places.
       p3's Figure 1 has no caption on purpose: core C07 asks for one. */
    { id: "p3", title: "The Library on Wheels", genre: "Informational text",
      paragraphs: [
        ["Some families in Georgia live far from a library.", "In some places, the library goes out on the road to find them."],
        ["## A Long Way to Town"],
        ["The main library in Pine County is in the small town of Millbrook.", "Many families live on farms far from town.", "For them, a trip to the library can take most of a Saturday.", "To fix this problem, the county bought a bookmobile.", "Now the library comes to them once a week."],
        ["## Inside the Bookmobile"],
        ["A bookmobile is a large bus with shelves instead of seats.", "It holds about 3,000 books, plus movies and books you can listen to.", "Low shelves in the back hold picture books for young readers.", "Near the door is a small desk with a computer."],
        ["## Bookmobile or Library Building?"],
        ["Both the bus and the library building lend books for free.", "Both use the same library card, too.", "However, the building has many more books than the bus.", "The building stays in one place, while the bookmobile comes to you."],
        ["## What Changed"],
        ["Since the bookmobile started coming, more families borrow books.", "Because kids can get new books each week, many of them read all summer.", "As a result, the county wants to buy a second bus."],
        ["## Did You Know?"],
        ["Box: Long ago, the first bookmobiles were wagons pulled by horses."]
      ],
      figures: [
        { after: 3, src: "assets/figures/ss1a-c-bookmobile-map.svg", label: "Figure 1",
          alt: "Map of Pine County with an arrow that points north. A black square in the middle of the county marks the library building in the town of Millbrook. Four white circles, one near each corner of the county, mark bookmobile stops. Dashed lines show the bookmobile route from Millbrook out to each stop. The key has a scale bar for 5 miles. Each stop is more than two scale bars, or more than 10 miles, from Millbrook." }
      ] },
    { id: "p4", title: "How a Wooden Bat Is Made", genre: "Informational text",
      paragraphs: [
        ["Many young baseball players swing metal bats.", "But big-league players must use wooden bats.", "Each one is made with care."],
        ["## Wood or Metal?"],
        ["Both kinds of bats have a thin handle and a thick barrel.", "A metal bat is hollow inside, so it is light and easy to swing.", "A wooden bat is solid, so it feels heavier.", "Unlike a metal bat, a wooden bat can crack if the ball hits it in the wrong spot.", "Some bats have a small cup cut into the end of the barrel."],
        ["## From Tree to Bat"],
        ["First, workers cut ash or maple logs into long, round pieces called billets.", "Next, the billets dry for many weeks until the wood is hard.", "Then a machine spins each billet while a sharp blade shapes it into a bat.", "Finally, the bat is sanded smooth and given a clear, shiny coat.", "Now it is ready to play ball!"],
        ["## Did You Know?"],
        ["Box: A big-league player can use dozens of wooden bats in one season."]
      ],
      figures: [
        { after: 1, src: "assets/figures/ss1a-c-bat-parts.svg", label: "Figure 1", caption: "The parts of a bat",
          alt: "Diagram of a baseball bat seen from the side. Three labels point to its parts: knob, at the very end of the bat; handle, the thin part next to the knob; and barrel, the thick part at the other end." }
      ] }
  ],
  practice: [
    { id: "SK-SS1a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "How is the section \"From Flower to Peanut\" organized?",
      choices: [
        { text: "It tells the steps in the order they happen.", correct: true },
        { text: "It tells how two kinds of plants are alike." },
        { text: "It tells about a problem and how farmers fix it." },
        { text: "It tells why peanut plants are good for the soil." }
      ],
      clue: "Read the first word of each sentence in that section. What do those words tell you about time?",
      why: "The answer is \"It tells the steps in the order they happen.\" The clue words first, next, then and finally show sequence. The section follows the peanut from seed, to flower, to peg, to peanut." },
    { id: "SK-SS1a-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read the section \"Why Peanuts Help the Soil.\" Select the sentence that tells what happens later because of what the peanut roots do.",
      targets: ["p1:7:1", "p1:7:2", "p1:7:3"],
      answer: ["p1:7:3"], pick: 1,
      clue: "First find the cause the section talks about. Then find the sentence that tells what happens later because of it.",
      why: "The answer is \"Because the soil has more plant food, crops such as cotton and corn often grow better in that field the next year.\" The roots add plant food right away. Later, because the soil has more plant food, the next crops grow better. That later result is the effect." },
    { id: "SK-SS1a-P3", type: "dropdown", points: 1, dok: 1, passages: ["p1"],
      prompt: "Choose the words that best complete the sentence.",
      text: "The heading \"Harvest Time\" tells the reader that this section is about {0}.",
      slots: [{ options: ["how farmers gather the peanuts", "how peanuts help the soil", "how a peanut flower grows"], answer: 0 }],
      clue: "A heading names what a section is mostly about. Read the sentences under that heading and ask what they all describe.",
      why: "The answer is how farmers gather the peanuts. Under \"Harvest Time,\" the sentences tell how machines dig up the plants, dry the peanuts and pick them off. Harvest means gathering a crop." },
    { id: "SK-SS1a-P4", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Match each set of clue words to the pattern it usually shows.",
      cols: ["Sequence", "Cause and effect", "Compare", "Problem and solution"],
      rows: [
        { text: "first, next, finally", answer: 0 },
        { text: "because, so, as a result", answer: 1 },
        { text: "both, alike, but", answer: 2 },
        { text: "the trouble was, to fix it", answer: 3 }
      ],
      clue: "Ask what each set of words helps you do: tell order, tell why, tell how things are alike and different, or tell how a trouble gets fixed.",
      why: "First, next and finally show sequence. Because, so and as a result show cause and effect. Both, alike and but compare. The trouble was and to fix it show a problem and a solution." },
    { id: "SK-SS1a-P5", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does the author include the \"Did You Know?\" box?",
      choices: [
        { text: "to add an interesting fact about peanuts in Georgia", correct: true },
        { text: "to tell the steps for planting a peanut seed" },
        { text: "to explain why peanuts grow under the ground" },
        { text: "to show how peanut plants are like cotton plants" }
      ],
      clue: "A text box sits apart from the main sections. Read it, then ask what kind of information it gives that the sections do not.",
      why: "The answer is to add an interesting fact about peanuts in Georgia. The box gives one extra fact: Georgia grows more peanuts than any other state. It does not tell steps or reasons." },
    { id: "SK-SS1a-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The author added this map to the article. What does the map show that the words in the article do not?",
      figure: { src: "assets/figures/ss1a-peanut-map.svg",
        alt: "Map of Georgia with an arrow that points north. A striped area in the south and southwest part of the state matches the key, which says peanut farms. A dot shows Atlanta in the north." },
      choices: [
        { text: "which part of Georgia the peanut farms are in", correct: true },
        { text: "the steps for growing a peanut plant" },
        { text: "why peanut roots help the soil" },
        { text: "how many days the peanuts dry in the sun" }
      ],
      clue: "Look at the key and the striped area on the map. Then check the sections: do the words already tell you each choice?",
      why: "The answer is \"which part of Georgia the peanut farms are in.\" The striped area and the key show that the farms are in the south part of the state. The article says many Georgia farmers grow peanuts, but it never says where. The steps, the soil and the drying time are told by the words in the sections, not shown on the map." },
    { id: "SK-SS1a-P7", type: "mc", points: 1, dok: 1, passages: [],
      stem: ["Here is the table of contents from a book called Georgia's Sea Turtles.", "Chapter 1: Meet the Sea Turtles, page 2", "Chapter 2: Nests in the Sand, page 8", "Chapter 3: The Race to the Ocean, page 14", "Chapter 4: How People Help, page 20"],
      prompt: "In which chapter would you look to find out how baby sea turtles get from their nest to the water?",
      choices: [
        { text: "Chapter 3: The Race to the Ocean", correct: true },
        { text: "Chapter 2: Nests in the Sand" },
        { text: "Chapter 1: Meet the Sea Turtles" },
        { text: "Chapter 4: How People Help" }
      ],
      clue: "Think about where the babies start and where they are going. Then read each chapter title.",
      why: "The answer is \"Chapter 3: The Race to the Ocean.\" The babies hatch in a nest and must get to the water, and this chapter title names that trip to the ocean. Chapter 2 is about the nests themselves, Chapter 1 is an introduction, and Chapter 4 is about people." }
  ],
  /* ---------- B2 (expansion 2026-10-22, author b2d; 01-architecture.md §2.2-2.3) ----------
     core: fifteen independent items in three sets of five. { ref } reuses the Try items P5, P6 and P7
     (they stay in practice; Practice Together is P1-P4). New ids are numbered by their place in the fifteen.
     BROAD CODE: this lesson still covers both halves of 3.T.SS.1.a (features + chapter/section terms, and
     "which structure is it?"). The author log names which items would move to the planned features lesson.
     Author log: docs/expansion-2026-10-22/batches/B2-b2d-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-SS1a-P5" },
      { ref: "SK-SS1a-P6" },
      { ref: "SK-SS1a-P7" },
      { id: "SK-SS1a-C04", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: ["p1"],
        prompt: "The first paragraph ends, \"Here is how a peanut plant grows and why farmers like it.\" How are the sections after it arranged to match that sentence?",
        choices: [
          { text: "Sections about how the plant grows come first, and then one tells why farmers like it.", correct: true },
          { text: "A section about why farmers like peanuts comes first, and then the growing sections." },
          { text: "Each section compares peanut plants with the cotton and corn that farmers grow." },
          { text: "Each section tells about a problem that farmers have and how they fix it." }
        ],
        clue: "Authors often tell you their plan near the start. Then the headings show how they carry out that plan.",
        hints: [
          "Authors often tell you their plan near the start. Then the headings show how they carry out that plan.",
          "Read the last sentence of the first paragraph again. Then read all of the headings, in order.",
          "No section names a problem that farmers have to fix, so the sections are not problem and solution. Now compare the order of the headings with the order of the ideas in that last sentence."
        ],
        how: [
          "The last sentence of the first paragraph names two ideas, in this order: how a peanut plant grows, and why farmers like it.",
          "\"From Flower to Peanut\" and \"Harvest Time\" follow the peanut from planting to harvest. \"Why Peanuts Help the Soil\" tells why farmers like peanuts.",
          "The answer is \"Sections about how the plant grows come first, and then one tells why farmers like it.\" The sections carry out the plan in the same order.",
          "Cotton and corn are named only in the last section, and no section is about a problem to fix."
        ],
        misconception: "A common mix-up is reading each section by itself. To describe how a whole text is arranged, look at all the headings together.",
        why: "The answer is \"Sections about how the plant grows come first, and then one tells why farmers like it.\" The first paragraph promises how a peanut plant grows and why farmers like it. \"From Flower to Peanut\" and \"Harvest Time\" follow the peanut from planting to harvest, and then \"Why Peanuts Help the Soil\" tells why farmers like peanuts. Cotton and corn come up only in the last section, and no section tells a problem and a fix." },
      { id: "SK-SS1a-C05", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p1"],
        prompt: "Choose the words that best complete the sentences.",
        text: "The section \"Harvest Time\" comes right after \"From Flower to Peanut\" because the harvest happens {0}. So the author arranged these two sections in {1}.",
        slots: [
          { options: ["after the peanuts finish growing", "before the seeds are planted", "while the flowers are still open"], answer: 0 },
          { options: ["the order things happen", "order from most to least important", "two groups that are alike and different"], answer: 0 }
        ],
        clue: "Whole sections can follow a pattern too. Ask why one section might come before another.",
        hints: [
          "Whole sections can follow a pattern too. Ask why one section might come before another.",
          "Read the first sentence under each heading.",
          "Seeds are planted at the very start, so the harvest cannot come before the planting. That rules out one choice in the first blank. For the second blank, ask what kind of order the two sections follow."
        ],
        how: [
          "\"From Flower to Peanut\" begins in the spring, when farmers plant the seeds.",
          "\"Harvest Time\" begins in the fall, when machines dig up the plants that have grown.",
          "So the harvest happens after the peanuts finish growing, and the two sections are arranged in the order things happen.",
          "Neither section is more important, and they are not two groups being compared."
        ],
        misconception: "A common mix-up is thinking sections can go in any order. Here the order of the sections matches the order things happen.",
        why: "The answers are \"after the peanuts finish growing\" and \"the order things happen.\" \"From Flower to Peanut\" starts with planting in the spring, and \"Harvest Time\" starts in the fall, after the peanuts have grown." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-SS1a-C06", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "Match each section of \"The Library on Wheels\" to the pattern it mainly uses. One pattern is not used.",
        cols: ["Sequence", "Problem and solution", "Description", "Compare and contrast", "Cause and effect"],
        rows: [
          { text: "A Long Way to Town", answer: 1 },
          { text: "Inside the Bookmobile", answer: 2 },
          { text: "Bookmobile or Library Building?", answer: 3 },
          { text: "What Changed", answer: 4 }
        ],
        clue: "Clue words show the pattern, but read the whole section to see what job the words do.",
        hints: [
          "Clue words show the pattern, but read the whole section to see what job the words do.",
          "Read one section at a time and find its clue words. If a section has few clue words, ask what the whole section is doing.",
          "\"Inside the Bookmobile\" has no time words like first or next, so it is not sequence. Decide which pattern fits each section."
        ],
        how: [
          "\"A Long Way to Town\" tells a trouble, a library trip that takes most of a Saturday, and a fix, the county's bookmobile. That is problem and solution.",
          "\"Inside the Bookmobile\" gives details about one thing, the bus. That is description.",
          "\"Bookmobile or Library Building?\" uses both, however and while to tell how two things are alike and different. That is compare and contrast.",
          "\"What Changed\" uses since, because and as a result to tell what happened because of the bookmobile. That is cause and effect. No section tells steps in order."
        ],
        misconception: "A common mix-up is choosing a pattern from one clue word. Words like so and but show up in many patterns, so read the whole section.",
        why: "\"A Long Way to Town\" is problem and solution: farm families live far from the library, so the county bought a bookmobile. \"Inside the Bookmobile\" is description. \"Bookmobile or Library Building?\" is compare and contrast. \"What Changed\" is cause and effect: it tells what happened because the bookmobile came. Sequence is not used." },
      { id: "SK-SS1a-C07", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "Figure 1 needs a caption. Choose the words that best complete the sentence.",
        text: "The best caption for Figure 1 is {0}.",
        slots: [{ options: ["Bookmobile stops around Pine County", "The library building in Millbrook", "What a bookmobile looks like inside"], answer: 0 }],
        clue: "A caption tells what a picture shows. Read the map before you read the captions.",
        hints: [
          "A caption tells what a picture shows. Read the map before you read the captions.",
          "Use the key to find what each mark on the map stands for.",
          "A map has no picture of the inside of the bus, so that caption does not fit. Check the other choices against the whole map."
        ],
        how: [
          "The key names three marks: the library building, the bookmobile stops and the route.",
          "Most of the map shows stops spread around the county, with the route out to each one.",
          "The answer is Bookmobile stops around Pine County.",
          "The library is only one mark, and the map does not show the inside of the bus."
        ],
        misconception: "A common mix-up is choosing a caption for one part of a picture instead of the whole picture.",
        why: "The answer is Bookmobile stops around Pine County. The map shows the stops spread around the county and the route out to each one. The library building is only one mark, and the map does not show the inside of the bus." },
      { id: "SK-SS1a-C08", type: "ebsr", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "Look at Figure 1. This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How does Figure 1 help a reader understand the section \"A Long Way to Town\"?",
          choices: [
            { text: "It shows how far the bookmobile stops are from the library.", correct: true },
            { text: "It shows that all the stops are inside the town of Millbrook." },
            { text: "It shows what the shelves inside the bookmobile look like." },
            { text: "It shows which day of the week the bus visits each stop." }
          ] },
        partB: { prompt: "Which part of the map best supports your answer to Part A?",
          choices: [
            { text: "the scale bar for 5 miles", correct: true },
            { text: "the arrow that points north" },
            { text: "the dashed route lines" },
            { text: "the words PINE COUNTY at the top" }
          ] },
        clue: "A map shows where places are. Ask what the map lets you see that is hard to picture from the words alone.",
        hints: [
          "A map shows where places are. Ask what the map lets you see that is hard to picture from the words alone.",
          "Use the key to find what each mark on the map stands for.",
          "Nothing on the map shows days of the week, so the map cannot tell when the bus visits. Check the other Part A choices against the map. For Part B, choose the part of the map that shows the idea in your Part A answer."
        ],
        how: [
          "The black square in Millbrook is the library building. The white circles near the corners of the county are the bookmobile stops, outside the town.",
          "The scale bar shows 5 miles. Each stop is more than two scale bars from Millbrook, so the stops are far from the library.",
          "Part A: It shows how far the bookmobile stops are from the library. Part B: the scale bar for 5 miles.",
          "The north arrow shows direction, the dashed lines show the route, and the words name the county. None of them measures distance."
        ],
        misconception: "A common mix-up is choosing a map part that is easy to see, like the route lines, instead of the part that answers the question.",
        why: "Part A: It shows how far the bookmobile stops are from the library. Part B: the scale bar for 5 miles. The stops are near the corners of the county, and the scale bar shows they are more than 10 miles from Millbrook. The north arrow, the route lines and the county name do not measure distance." },
      { id: "SK-SS1a-C09", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
        stem: ["Text 1: Getting Ready for Art Night", "First, Ms. Hill's class hung their paintings in the hall. Next, they set out paper and crayons on the tables. Then they taped up signs with arrows. Last, they opened the doors for the families.", "Text 2: Why Art Night Moved", "A storm knocked out the power at school on Thursday. Because the hall was dark, art night could not happen that evening. As a result, it moved to the next Tuesday."],
        prompt: "How are the two texts organized? Choose TWO answers.",
        choices: [
          { text: "Text 1 tells the steps in the order they happened.", correct: true },
          { text: "Text 2 tells what happened and why.", correct: true },
          { text: "Text 1 tells a problem and how it was fixed." },
          { text: "Text 2 compares two different nights." },
          { text: "Both texts describe what the hall looks like." }
        ],
        clue: "Look for clue words in each text. They tell you how the author put the ideas together.",
        hints: [
          "Look for clue words in each text. They tell you how the author put the ideas together.",
          "Read Text 1 and list its clue words. Then read Text 2 and list its clue words. Choose two.",
          "Text 2 names two days, Thursday and Tuesday, but it never says how they are alike or different. Decide which pattern each text uses."
        ],
        how: [
          "Text 1 uses First, Next, Then and Last. It tells the steps in order.",
          "Text 2 uses because and as a result. It tells what happened, a storm, and why art night moved.",
          "The answers are \"Text 1 tells the steps in the order they happened.\" and \"Text 2 tells what happened and why.\"",
          "Nothing goes wrong in Text 1, Text 2 does not compare the two nights, and neither text describes the hall."
        ],
        misconception: "A common mix-up is thinking two texts on the same topic must use the same pattern.",
        why: "The answers are \"Text 1 tells the steps in the order they happened.\" and \"Text 2 tells what happened and why.\" Text 1 uses First, Next, Then and Last. Text 2 uses because and as a result. Nothing goes wrong in Text 1, Text 2 does not compare the nights, and neither text describes the hall." },
      { id: "SK-SS1a-C10", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"], pick: 2,
        stem: ["\"The Library on Wheels\" is Chapter 4 of a book called Libraries Near and Far."],
        prompt: "Which TWO sentences use the words chapter and section correctly?",
        choices: [
          { text: "Chapter 4 has a section called \"Inside the Bookmobile.\"", correct: true },
          { text: "The section \"A Long Way to Town\" is part of Chapter 4.", correct: true },
          { text: "The book Libraries Near and Far is one section of Chapter 4." },
          { text: "\"Did You Know?\" is the title of Chapter 4." },
          { text: "\"Inside the Bookmobile\" is the title of Chapter 4." }
        ],
        clue: "A book is split into chapters, and a chapter can be split into smaller sections.",
        hints: [
          "A book is split into chapters, and a chapter can be split into smaller sections.",
          "Read the stem again. Then look at the headings in the article. Choose two.",
          "\"Did You Know?\" is a box with one short fact, and one fact cannot fill a whole chapter. Test the other sentences against the stem."
        ],
        how: [
          "The book is the biggest part. Chapter 4 is one part of the book.",
          "The headings in the article name sections inside Chapter 4.",
          "The answers are \"Chapter 4 has a section called \"Inside the Bookmobile.\"\" and \"The section \"A Long Way to Town\" is part of Chapter 4.\"",
          "A book is not a section of a chapter, and the stem says the article itself is Chapter 4, so neither \"Did You Know?\" nor \"Inside the Bookmobile\" is the chapter's title."
        ],
        misconception: "A common mix-up is swapping the two words. A chapter is the bigger part, and sections are inside it.",
        why: "The answers are \"Chapter 4 has a section called \"Inside the Bookmobile.\"\" and \"The section \"A Long Way to Town\" is part of Chapter 4.\" The book holds chapters, and Chapter 4 holds sections with headings. The book is not a section, and the whole article is Chapter 4, so \"Did You Know?\" (a box) and \"Inside the Bookmobile\" (a section) are not its title." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-SS1a-C11", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p4"],
        stem: ["The author wants to add this drawing to the article."],
        figure: { src: "assets/figures/ss1a-c-bat-lathe.svg",
          alt: "Drawing of a long, round piece of wood held at both ends by a machine. A curved arrow shows that the wood is spinning. A sharp blade touches the wood from below, and curls of wood fall to the floor. Labels name the billet, the blade and the wood shavings." },
        prompt: "Choose the words that best complete the sentence.",
        text: "The drawing would help readers most in the section {0}.",
        slots: [{ options: ["From Tree to Bat", "Wood or Metal?", "Did You Know?"], answer: 0 }],
        clue: "To decide where a picture belongs, find the section that tells about the same things the picture shows.",
        hints: [
          "To decide where a picture belongs, find the section that tells about the same things the picture shows.",
          "Read each label on the drawing. Then look through every section for the same words or the same action.",
          "The \"Did You Know?\" box tells how many bats a player uses, not how a bat is made. Check the other choices the same way."
        ],
        how: [
          "The drawing shows a billet spinning while a blade cuts it, with wood shavings falling.",
          "One section tells how a machine spins each billet while a sharp blade shapes it.",
          "The answer is From Tree to Bat.",
          "\"Wood or Metal?\" is about finished bats, and the box is about how many bats a player uses."
        ],
        misconception: "A common mix-up is matching one word, like wood, instead of what the whole picture shows.",
        why: "The answer is From Tree to Bat. That section tells how a machine spins each billet while a sharp blade shapes it into a bat, which is what the drawing shows. \"Wood or Metal?\" is about finished bats, and the box is about how many bats a player uses." },
      { id: "SK-SS1a-C12", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: ["p4"],
        prompt: "The author tells how a wooden bat is made in time order. Why is time order a good choice for the section \"From Tree to Bat\"?",
        choices: [
          { text: "Each step needs the one before it, like drying before shaping.", correct: true },
          { text: "Each step compares a wooden bat with a metal bat." },
          { text: "Each step explains why a wooden bat can crack." },
          { text: "Each step shows why big-league players must use wood." }
        ],
        clue: "Authors choose a pattern that fits what they want to explain. Think about why this information is told in time order.",
        hints: [
          "Authors choose a pattern that fits what they want to explain. Think about why this information is told in time order.",
          "Compare the clue words in \"From Tree to Bat\" with the clue words in \"Wood or Metal?\".",
          "\"From Tree to Bat\" never names a metal bat, so its steps do not compare wood with metal. Test the other choices against the steps."
        ],
        how: [
          "The section goes from logs, to drying, to shaping with a blade, to sanding and a clear coat.",
          "The billets must dry until the wood is hard before the blade shapes them, and a bat cannot be sanded before it has a shape. The order matters.",
          "The answer is \"Each step needs the one before it, like drying before shaping.\"",
          "Cracking is told in \"Wood or Metal?\", the first paragraph tells about big-league players, and the steps never name metal."
        ],
        misconception: "A common mix-up is choosing a fact from a different section. The question asks why time order fits this section.",
        why: "The answer is \"Each step needs the one before it, like drying before shaping.\" Making a bat goes from logs, to drying, to shaping, to sanding, and each step needs the one before it. Cracking is told in \"Wood or Metal?\", big-league players are in the first paragraph, and the steps never name metal." },
      { id: "SK-SS1a-C13", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p4"],
        prompt: "Look at Figure 1. Which sentence from the article does the diagram help a reader picture? Choose the sentence in the passage.",
        targets: ["p4:3:1", "p4:3:2", "p4:3:4", "p4:3:5", "p4:5:1", "p4:5:4"],
        answer: ["p4:3:1"], pick: 1,
        clue: "A diagram is a drawing with labels. Match the labels to the words in the article.",
        hints: [
          "A diagram is a drawing with labels. Match the labels to the words in the article.",
          "Read the three labels in Figure 1. Then look through both sections for a sentence that names the same parts.",
          "The sentence about a metal bat being hollow tells about the inside of a bat, and Figure 1 shows only the outside. Check the other sentences the same way."
        ],
        how: [
          "Figure 1 labels the knob, the handle and the barrel.",
          "One sentence names two of those parts, a thin handle and a thick barrel, so the diagram helps a reader see them.",
          "The answer is \"Both kinds of bats have a thin handle and a thick barrel.\"",
          "The hollow inside, the wrong spot, the cup, the billets and the shiny coat are not shown in Figure 1. The cup sentence names the barrel, but the diagram shows no cup."
        ],
        why: "The answer is \"Both kinds of bats have a thin handle and a thick barrel.\" Figure 1 labels the handle and the barrel, so a reader can see how thin and thick they are. The diagram does not show the inside of a bat, where a bat cracks, a cup in the barrel, billets or the clear coat." },
      { id: "SK-SS1a-C14", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Kids at Oak Ridge Elementary kept losing their jackets on the playground. At first, the teachers put up a sign that said, \"Check for your jacket before you go in.\" But the jackets kept piling up by the fence. Then a third-grade class built a lost-and-found box and painted each class's name on a shelf. After that, most jackets found their way home."],
        prompt: "Which pattern does the author mainly use in this paragraph?",
        choices: [
          { text: "a trouble and the tries to fix it", correct: true },
          { text: "the steps for doing a job, in order" },
          { text: "how two things are alike and different" },
          { text: "details that describe one place" }
        ],
        clue: "Clue words like then and after that show up in many patterns. Read the whole paragraph and ask what the author is mainly telling about.",
        hints: [
          "Clue words like then and after that show up in many patterns. Read the whole paragraph and ask what the author is mainly telling about.",
          "Read the paragraph from the first sentence to the last. What is it mostly about, from start to end?",
          "The paragraph tells about one playground and one school, not two things side by side, so it is not comparing. Test the other three choices against the whole paragraph."
        ],
        how: [
          "The first sentence tells a trouble: kids keep losing their jackets.",
          "The sign is a first try, but the jackets keep piling up. Then the class builds a lost-and-found box, and it works.",
          "The answer is \"a trouble and the tries to fix it.\" The time words show the order of the tries.",
          "It is not steps for doing a job, it does not compare two things, and it does not mainly describe a place."
        ],
        misconception: "Some clue words are tricky: then and after that show up in lots of kinds of text. Ask whether the author is showing what goes wrong or the steps of a job.",
        why: "The answer is \"a trouble and the tries to fix it.\" Kids keep losing jackets, a sign does not work, and a lost-and-found box does. The time words show the order of the tries, but the paragraph is not the steps for a job. It does not compare two things or mainly describe a place." },
      { id: "SK-SS1a-C15", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Here is part of the table of contents from a book called Camping in Georgia.", "Chapter 1: Getting Ready, page 1", "• Packing Your Bag, page 2", "• Choosing a Tent, page 5", "Chapter 2: At the Campsite, page 8", "• Building a Safe Campfire, page 9", "• Storing Food Away from Bears, page 12", "Chapter 3: Exploring, page 15", "• Reading a Trail Map, page 16", "• Animals You Might See, page 19"],
        prompt: "Jada's family is camping in the mountains. She wants to know where to put their snacks so that wild animals cannot get them at night. Choose the words that best complete the sentence.",
        text: "Jada should read Chapter {0}, in the section that starts on page {1}.",
        slots: [
          { options: ["2", "1", "3"], answer: 0 },
          { options: ["12", "19", "2"], answer: 0 }
        ],
        clue: "A table of contents lists the chapters and the sections inside them. Read each title and ask what that part of the book is about.",
        hints: [
          "A table of contents lists the chapters and the sections inside them. Read each title and ask what that part of the book is about.",
          "Read every section title, not only the chapter titles.",
          "\"Animals You Might See\" names animals, but it is in the chapter about exploring, not about food. Check the other sections the same way."
        ],
        how: [
          "Jada needs to know where to put food so wild animals cannot get it at night.",
          "Chapter 2, \"At the Campsite,\" has a section called \"Storing Food Away from Bears.\" It starts on page 12.",
          "So she should read Chapter 2, in the section that starts on page 12.",
          "\"Packing Your Bag\" is about getting ready at home, and \"Animals You Might See\" is about what you might spot while exploring."
        ],
        misconception: "A common mix-up is choosing a title that shares one word with the question, like animals or bag, instead of the one whose whole topic fits.",
        why: "The answers are 2 and 12. Chapter 2, \"At the Campsite,\" has the section \"Storing Food Away from Bears,\" which starts on page 12. \"Animals You Might See\" is about spotting animals while exploring, and \"Packing Your Bag\" is about getting ready." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short text. Each `like` lists only the
     core items it really practises, so some core items have no extra question. */
  similar: [
    { id: "SK-SS1a-S01", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C05"],
      stem: ["An article called \"Growing Tomatoes\" has three sections, in this order:", "Planting the Seeds", "Watering and Weeding", "Picking Time"],
      prompt: "Why did the author put the sections in this order?",
      choices: [
        { text: "They follow the order things happen as tomatoes grow.", correct: true },
        { text: "They go from the most fun part to the least fun part." },
        { text: "They compare two different ways to grow tomatoes." },
        { text: "They tell a problem first and then how to fix it." }
      ],
      clue: "Whole sections can have a pattern too. Ask when each part happens.",
      hints: [
        "Whole sections can have a pattern too. Ask when each part happens.",
        "Read the three headings in order.",
        "No heading names a trouble, so the order is not a problem and then a fix. Test the other choices."
      ],
      how: [
        "Planting comes first, watering and weeding come while the plants grow, and picking comes last.",
        "The sections follow that order.",
        "The answer is \"They follow the order things happen as tomatoes grow.\"",
        "Nothing ranks the parts as fun, nothing compares two ways, and no heading names a problem."
      ],
      why: "The answer is \"They follow the order things happen as tomatoes grow.\" Seeds are planted first, the plants are watered and weeded while they grow, and the tomatoes are picked last." },
    { id: "SK-SS1a-S02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C06", "SK-SS1a-C14"],
      stem: ["Hot lunch and a packed lunch both give you a meal at school. Both can have fruit and milk. However, hot lunch is cooked in the school kitchen, while a packed lunch is made at home. Then, at lunchtime, you eat with your class either way."],
      prompt: "Which pattern does the author mainly use in this paragraph?",
      choices: [
        { text: "how two things are alike and different", correct: true },
        { text: "a trouble and how it gets fixed" },
        { text: "steps in the order they happen" },
        { text: "what happened and why" }
      ],
      clue: "Clue words show the pattern, but read the whole paragraph to see what job the words do.",
      hints: [
        "Clue words show the pattern, but read the whole paragraph to see what job the words do.",
        "List the clue words. Then ask what job they do together.",
        "The word then appears once, but the paragraph does not tell steps for a job. Test the other choices."
      ],
      how: [
        "The paragraph is about two things: hot lunch and a packed lunch.",
        "Both tells how they are alike. However and while tell how they are different.",
        "The answer is \"how two things are alike and different.\""
      ],
      misconception: "A common mix-up is choosing a pattern from one clue word, like then. Read the whole paragraph.",
      why: "The answer is \"how two things are alike and different.\" The paragraph is about hot lunch and a packed lunch. Both shows how they are alike, and however and while show how they are different." },
    { id: "SK-SS1a-S03", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-P6"],
      stem: ["Jamal is writing a report about the city zoo. He wants readers to see where the elephant barn is and how to walk there from the front gate."],
      prompt: "Which feature should Jamal add to his report?",
      choices: [
        { text: "a map with a key", correct: true },
        { text: "a caption under a photo" },
        { text: "a box with a fun fact" },
        { text: "a heading for each section" }
      ],
      clue: "Each feature has its own job. Think about what Jamal wants his readers to be able to do.",
      hints: [
        "Each feature has its own job. Think about what Jamal wants his readers to be able to do.",
        "Read Jamal's goal again. Then read each choice and ask what it would add to his report.",
        "A heading tells what a section is about, but it cannot show a path. Test the other choices."
      ],
      how: [
        "Jamal wants to show where the barn is and how to get there from the gate.",
        "A map shows where places are, and a key explains its symbols.",
        "The answer is \"a map with a key.\""
      ],
      why: "The answer is \"a map with a key.\" A map shows where the elephant barn and the gate are, so readers can see the path between them. A caption, a fun-fact box and headings cannot show a path." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting.
       Each like names one core item only, because the engine uses an extra question once.
       Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-SS1a-S04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-P5"],
      stem: ["An article called \"Cranberry Bogs\" tells how farmers grow cranberries in low, wet fields. Near the end is a box with the title \"Did You Know?\" The box says, \"Cranberries have little pockets of air inside. That is why they bounce when you drop them. It is also why they float in water.\" The rest of the article is about how farmers plant the vines and pick the berries."],
      prompt: "Why does the author include the \"Did You Know?\" box?",
      choices: [
        { text: "to add an interesting fact about cranberries", correct: true },
        { text: "to tell how to cook cranberries at home" },
        { text: "to show where the cranberry bogs are found" },
        { text: "to name the main steps in picking the berries" }
      ],
      clue: "A text feature has a job. Ask what kind of information a box like this gives that the main article does not.",
      hints: [
        "A text feature has a job. Ask what kind of information a box like this gives that the main article does not.",
        "Reread what the box says. Is it a step, a place, or something else?",
        "The box says nothing about cooking, so that job does not fit. Test the other choices against what the box says."
      ],
      how: [
        "The box says cranberries have tiny air pockets, so they bounce and float.",
        "That is a fun extra fact. It is not a step for the farmers.",
        "The answer is \"to add an interesting fact about cranberries.\"",
        "The box does not tell how to cook, where bogs are, or the steps of picking."
      ],
      misconception: "A common mix-up is thinking a box must repeat the main idea of the article. It adds a small extra fact.",
      why: "The answer is \"to add an interesting fact about cranberries.\" The box tells about air pockets that make cranberries bounce and float. It does not tell how to cook them, where bogs are, or the steps of picking." },
    { id: "SK-SS1a-S05", type: "mc", points: 1, dok: 1, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-P7"],
      stem: ["Here is the table of contents from a book called Skyscrapers Go Up.", "Chapter 1: Digging the Deep Hole, page 2", "Chapter 2: Building the Steel Frame, page 9", "Chapter 3: Lifting Beams With Cranes, page 15", "Chapter 4: Windows and Elevators, page 21"],
      prompt: "In which chapter would you look to find out how workers raise the heavy steel beams high into the air?",
      choices: [
        { text: "Chapter 3: Lifting Beams With Cranes", correct: true },
        { text: "Chapter 1: Digging the Deep Hole" },
        { text: "Chapter 2: Building the Steel Frame" },
        { text: "Chapter 4: Windows and Elevators" }
      ],
      clue: "A table of contents lists what each chapter is about. Match your question to a title.",
      hints: [
        "A table of contents lists what each chapter is about. Match your question to a title.",
        "Find the key words in the question. Then look for the same idea in the titles.",
        "Digging a hole happens on the ground, so it does not tell how beams are raised. Check the other titles."
      ],
      how: [
        "The question asks how workers raise heavy steel beams high into the air.",
        "Chapter 3 is about lifting beams with cranes.",
        "The answer is \"Chapter 3: Lifting Beams With Cranes.\"",
        "The other chapters are about digging, the frame itself, and windows."
      ],
      why: "The answer is \"Chapter 3: Lifting Beams With Cranes.\" Cranes are what lift beams into the air. The other chapters are about digging, the steel frame, and windows and elevators." },
    { id: "SK-SS1a-S06", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C04"],
      stem: ["An article about starfish begins, \"Here is how a starfish moves along the sea floor and how it can grow back a lost arm.\" After the first paragraph, the article has three sections. The first is called \"Tiny Tube Feet.\" The next is called \"Walking Across the Sand.\" The last is called \"Growing a New Arm.\" Each section has a few short paragraphs and a picture."],
      prompt: "How are the sections arranged to match the first paragraph?",
      choices: [
        { text: "The two sections about moving come first, and then one tells about growing a new arm.", correct: true },
        { text: "The section about growing a new arm comes first, and then two tell about moving." },
        { text: "Each section tells about a different kind of starfish." },
        { text: "All three sections tell about how a starfish eats." }
      ],
      clue: "An opening sentence can be a map of the article. Match each part of the sentence to a section.",
      hints: [
        "An opening sentence can be a map of the article. Match each part of the sentence to a section.",
        "List the two things the first sentence promises, in order. Then read the three section names.",
        "None of the section names is about eating, so a choice about eating does not fit. Compare the order of the sections with the order in the first sentence."
      ],
      how: [
        "The first sentence promises two things in order: how a starfish moves, and how it can grow back a lost arm.",
        "\"Tiny Tube Feet\" and \"Walking Across the Sand\" are about moving. \"Growing a New Arm\" comes last.",
        "The answer is \"The two sections about moving come first, and then one tells about growing a new arm.\"",
        "No section is about eating or about different kinds of starfish."
      ],
      misconception: "A common mix-up is choosing the right topics in the wrong order. The sections follow the order of the opening sentence.",
      why: "The answer is \"The two sections about moving come first, and then one tells about growing a new arm.\" The first sentence names moving and then growing back an arm, and the sections follow that order. No section is about eating or about different kinds of starfish." },
    { id: "SK-SS1a-S07", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C07"],
      stem: ["A student is writing an article called \"Sand Dunes.\" It tells how wind blows grains of sand up one side of a hill and lets them fall down the other side. The student adds a photo of a tall sand dune. In the photo, thin lines of blowing sand drift off the top of the hill. No people are in the photo."],
      prompt: "The photo needs a caption. Choose the words that best complete the sentence.",
      text: "The best caption for the photo is {0}.",
      slots: [
        { options: ["Wind blowing sand off the top of a dune", "A family building a sand castle", "Tall grass growing by the sea"], answer: 0 }
      ],
      clue: "A caption is a short line under a picture. It tells what the picture shows.",
      hints: [
        "A caption is a short line under a picture. It tells what the picture shows.",
        "Look at what is in the photo, and what is not. Then match a caption to it.",
        "No people are in the photo, so a caption that names people does not fit. Check the other caption against the photo."
      ],
      how: [
        "The photo shows a tall sand dune with thin lines of blowing sand drifting off the top.",
        "A caption should tell what the photo shows and fit the article.",
        "The answer is \"Wind blowing sand off the top of a dune.\"",
        "The photo has no people and no tall grass."
      ],
      why: "The answer is \"Wind blowing sand off the top of a dune.\" The photo shows blowing sand drifting off a tall dune, and the article is about how wind moves sand. The photo has no people and no tall grass." },
    { id: "SK-SS1a-S08", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C08"],
      stem: ["A park guide has a map of Canyon Trail. In the corner of the map is a scale that says, \"1 inch = 2 miles.\" A scale tells how real distances are shown on a map. On the map, the line for Canyon Trail is 3 inches long. It starts at the parking lot and ends at a lookout over the canyon."],
      prompt: "Use the map scale. How long is Canyon Trail in real life?",
      choices: [
        { text: "6 miles", correct: true },
        { text: "3 miles" },
        { text: "2 miles" },
        { text: "5 miles" }
      ],
      clue: "A map scale tells how much real distance one inch stands for. Use it for each inch of the trail.",
      hints: [
        "A map scale tells how much real distance one inch stands for. Use it for each inch of the trail.",
        "Find how many inches long the trail is on the map. Then think about how far each inch is in real life.",
        "The trail is 3 inches long on the map, and the number 3 is the length on the map, not in real life. Use the scale for each inch."
      ],
      how: [
        "The scale says 1 inch stands for 2 miles.",
        "The trail is 3 inches long, so there are 3 groups of 2 miles.",
        "The answer is 6 miles.",
        "The numbers 3 and 2 are in the text, but each one is only part of the work."
      ],
      misconception: "A common mix-up is choosing a number from the text. Use the scale for each inch.",
      why: "The answer is 6 miles. Each inch stands for 2 miles, and the trail is 3 inches long, so it is 3 groups of 2 miles. The numbers 3 and 2 appear in the text, but the length in real life needs the scale." },
    { id: "SK-SS1a-S09", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
      like: ["SK-SS1a-C09"],
      stem: ["Text 1: Warm Plants in Winter", "Frost kept killing the plants in Mr. Cruz's garden. He tried covering them with sheets, but the cold still got through. Then he built a greenhouse with glass walls. The glass let in sunlight and kept the warm air inside, and the plants lived.", "Text 2: Marimba and Harmonica", "A marimba and a harmonica both make music. A marimba has wooden bars that a player hits with sticks. A harmonica is small enough to hold in one hand, and a player blows into it."],
      prompt: "How are the two texts organized? Choose TWO answers.",
      choices: [
        { text: "Text 1 tells a problem and how it was fixed.", correct: true },
        { text: "Text 2 tells how two things are alike and different.", correct: true },
        { text: "Text 1 tells the steps for building a greenhouse." },
        { text: "Text 2 tells what happened and why." },
        { text: "Both texts describe what a greenhouse looks like." }
      ],
      clue: "Look for the clue words in each text. They tell you how the author put the ideas together.",
      hints: [
        "Look for the clue words in each text. They tell you how the author put the ideas together.",
        "Read Text 1 and list what goes wrong and what happens next. Then read Text 2 and list what is the same and what is not. Choose two.",
        "Text 1 has a glass greenhouse, but it never numbers steps for building one. Decide which pattern each text uses."
      ],
      how: [
        "Text 1 starts with frost killing the plants, a trouble. Then Mr. Cruz tries sheets and a greenhouse, and the plants live.",
        "Text 2 uses both for a likeness and a description of each instrument for the differences.",
        "The answers are \"Text 1 tells a problem and how it was fixed.\" and \"Text 2 tells how two things are alike and different.\"",
        "Text 1 does not teach how to build, Text 2 has no cause and effect, and only Text 1 mentions a greenhouse."
      ],
      misconception: "A common mix-up is naming the topic of a text instead of how it is put together.",
      why: "The answers are \"Text 1 tells a problem and how it was fixed.\" and \"Text 2 tells how two things are alike and different.\" Text 1 begins with frost killing plants and ends when the greenhouse fixes it. Text 2 uses both for a likeness and then describes how the instruments differ." },
    { id: "SK-SS1a-S10", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
      like: ["SK-SS1a-C10"],
      stem: ["\"Down the Canyon\" is Chapter 5 of a book called Wild Places. The chapter has two parts. One part is called \"Rock Walls.\" The other part is called \"The River Below.\" The next chapter in the book is Chapter 6, \"Into the Desert.\" Each chapter starts on a new page, and each part has its own heading. A reader can find a part by its heading."],
      prompt: "Which TWO sentences use the words chapter and section correctly?",
      choices: [
        { text: "Rock Walls is a section of Chapter 5.", correct: true },
        { text: "Wild Places is a book that has chapters, and Chapter 5 is one of them.", correct: true },
        { text: "Rock Walls is a chapter that has Wild Places inside it." },
        { text: "Chapter 6 is a section of \"The River Below.\"" },
        { text: "Chapter 5 is a section inside Rock Walls." }
      ],
      clue: "A book is split into big parts, and those parts can be split again. Think about which part holds which.",
      hints: [
        "A book is split into big parts, and those parts can be split again. Think about which part holds which.",
        "For each choice, ask: which part is the bigger one, and which part is inside it? Choose two.",
        "A section is smaller than a chapter, so a choice that puts a chapter inside a section is not correct. Check the other choices the same way."
      ],
      how: [
        "A book is the biggest part. It holds chapters, and a chapter holds sections.",
        "Rock Walls is one part of Chapter 5, so it is a section. Chapter 5 is one of the chapters in Wild Places.",
        "The answers are \"Rock Walls is a section of Chapter 5.\" and \"Wild Places is a book that has chapters, and Chapter 5 is one of them.\"",
        "The other sentences put a bigger part inside a smaller part."
      ],
      misconception: "A common mix-up is switching the words chapter and section. A section is a smaller part inside a chapter.",
      why: "The answers are \"Rock Walls is a section of Chapter 5.\" and \"Wild Places is a book that has chapters, and Chapter 5 is one of them.\" A book holds chapters, and a chapter holds sections. The other sentences put a bigger part inside a smaller part." },
    { id: "SK-SS1a-S11", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C11"],
      stem: ["An article about steamboats has three sections. They are called \"Rivers Before Steamboats,\" \"How Steam Turns the Wheel,\" and \"Life on Board.\" The author wants to add a drawing. It shows a boiler, a pipe and a paddle wheel on the back of a boat. Arrows show steam going from the boiler, through the pipe, to the wheel. No people are in the drawing."],
      prompt: "The author wants to add this drawing to the article. Choose the words that best complete the sentence.",
      text: "The drawing would help readers most in the section {0}.",
      slots: [
        { options: ["How Steam Turns the Wheel", "Rivers Before Steamboats", "Life on Board"], answer: 0 }
      ],
      clue: "A drawing should go where it helps the reader picture what the words say. Match the parts in the drawing to a section.",
      hints: [
        "A drawing should go where it helps the reader picture what the words say. Match the parts in the drawing to a section.",
        "Look at the parts and the arrows in the drawing. Then ask which section name uses the same idea.",
        "No people are in the drawing, so one section does not fit. Check the section names that are left."
      ],
      how: [
        "The drawing shows a boiler, a pipe and a paddle wheel, with arrows for steam moving to the wheel.",
        "That shows how steam turns the wheel, so it matches that section.",
        "The answer is \"How Steam Turns the Wheel.\"",
        "The drawing does not show a river before boats, and it has no people on board."
      ],
      why: "The answer is \"How Steam Turns the Wheel.\" The drawing shows steam moving from the boiler to the paddle wheel, so it helps readers picture that section. It does not show a river before boats, and it has no people on board." },
    { id: "SK-SS1a-S12", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C12"],
      stem: ["In the section \"A Year in the Orchard,\" the author tells what happens to an apple orchard, one season after another. In winter, workers trim the trees. In spring, white flowers bloom. In summer, small green apples grow bigger. In fall, workers pick the red apples and carry them away in crates. Then the trees rest, and the year starts again."],
      prompt: "The author tells about the orchard in time order. Why is time order a good choice for this section?",
      choices: [
        { text: "Flowers must bloom before apples can grow.", correct: true },
        { text: "It compares two kinds of apple trees." },
        { text: "It tells how a problem in the orchard was fixed." },
        { text: "It shows which season is the most important." }
      ],
      clue: "Think about how an orchard really changes. Ask whether any two parts could swap places.",
      hints: [
        "Think about how an orchard really changes. Ask whether any two parts could swap places.",
        "Read the seasons in order. Could you swap any two of them and still tell the story?",
        "The section names no trouble to fix, so a choice about a fix does not fit. Test the other choices."
      ],
      how: [
        "The orchard changes in one order: trimmed trees, flowers, growing apples, picked apples.",
        "Flowers must bloom before apples can grow, so the order matters.",
        "The answer is \"Flowers must bloom before apples can grow.\"",
        "The section does not compare trees, fix a problem, or rank the seasons."
      ],
      misconception: "A common mix-up is choosing a reason about importance. Time order shows that each step needs the one before.",
      why: "The answer is \"Flowers must bloom before apples can grow.\" The orchard changes in a set order, and flowers must bloom before apples can grow. The section does not compare trees, fix a problem or rank the seasons." },
    { id: "SK-SS1a-S13", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C13"],
      stem: ["An article called \"Reading a Thermometer\" has this diagram. It shows a glass tube with numbers up the side. A round bulb is at the bottom. A red line rises inside the tube. Labels point to the bulb, the tube and the red line.", "The article has these sentences:", "(1) Temperature tells how warm or cold something is.", "(2) The red line rises inside the tube when the bulb gets warm.", "(3) Look at the thermometer each morning before school.", "(4) Thermometers are sold in many stores."],
      prompt: "Which sentence from the article does the diagram help a reader picture?",
      choices: [
        { text: "Sentence 2", correct: true },
        { text: "Sentence 1" },
        { text: "Sentence 3" },
        { text: "Sentence 4" }
      ],
      clue: "A diagram shows how parts look and work. Find the sentence that talks about those parts.",
      hints: [
        "A diagram shows how parts look and work. Find the sentence that talks about those parts.",
        "Look at the labels in the diagram. Then find the sentence that uses the same parts.",
        "Sentence 4 is about stores, and the diagram shows no stores. Check the other sentences for the parts named in the labels."
      ],
      how: [
        "The diagram labels the bulb, the tube and the red line.",
        "Sentence 2 talks about the red line, the tube and the bulb, so the diagram helps a reader picture it.",
        "The answer is Sentence 2.",
        "The other sentences are about temperature in general, a morning habit and stores."
      ],
      misconception: "A common mix-up is choosing the sentence about the main topic. The diagram helps most with the sentence that names its labeled parts.",
      why: "The answer is Sentence 2. The diagram labels the bulb, the tube and the red line, and Sentence 2 names all three. The other sentences are about temperature in general, a morning habit and stores." },
    { id: "SK-SS1a-S14", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C14"],
      stem: ["A weather vane sits on top of a barn. It has an arrow with a wide, flat tail. When the wind blows, it pushes against the tail. Because the tail is flat, the wind pushes it away. As a result, the arrow swings around and points into the wind. That is why a weather vane can show which way the wind is blowing."],
      prompt: "Which pattern does the author mainly use in this paragraph?",
      choices: [
        { text: "what happens and why it happens", correct: true },
        { text: "how two things are alike and different" },
        { text: "steps in the order they are done" },
        { text: "a trouble and how it gets fixed" }
      ],
      clue: "Clue words show the pattern. Read the whole paragraph and see what job the clue words do.",
      hints: [
        "Clue words show the pattern. Read the whole paragraph and see what job the clue words do.",
        "List the clue words in the paragraph. Ask what they connect.",
        "The paragraph is about one object, so it does not compare two things. Test the other choices against the clue words."
      ],
      how: [
        "The paragraph uses the words because, as a result and that is why.",
        "Those words connect a cause, wind pushing the flat tail, to an effect, the arrow pointing into the wind.",
        "The answer is \"what happens and why it happens.\"",
        "There are no steps to do, and no trouble is fixed."
      ],
      misconception: "A common mix-up is choosing a pattern by the topic. Use the clue words to find how the ideas connect.",
      why: "The answer is \"what happens and why it happens.\" The words because, as a result and that is why connect the wind pushing the tail to the arrow pointing into the wind. The paragraph does not compare two things, give steps or fix a trouble." },
    { id: "SK-SS1a-S15", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-SS1a-C15"],
      stem: ["Here is part of the table of contents from a book called Life in the Rainforest.", "Chapter 1: The Forest Floor, page 1", "• Fallen Leaves, page 2", "• Mushrooms and Insects, page 5", "Chapter 2: The Rainy Weather, page 9", "• Why It Rains So Much, page 10", "• Storms in the Afternoon, page 14", "Chapter 3: The Canopy, page 17", "• Birds in the Trees, page 18", "• Monkeys at Play, page 21"],
      prompt: "Leo is reading about a rainforest. He wants to know why it rains there almost every day. Choose the words that best complete the sentence.",
      text: "Leo should read Chapter {0}, in the section that starts on page {1}.",
      slots: [
        { options: ["2", "1", "3"], answer: 0 },
        { options: ["10", "14", "5"], answer: 0 }
      ],
      clue: "A table of contents lists chapters and the sections inside them. Read each title and ask what that part is about.",
      hints: [
        "A table of contents lists chapters and the sections inside them. Read each title and ask what that part is about.",
        "Read every section title, not only the chapter titles.",
        "\"Storms in the Afternoon\" is about when storms come, but it is not about the reason for the rain. Check the other sections the same way."
      ],
      how: [
        "Leo wants to know why it rains so much in the rainforest.",
        "Chapter 2, \"The Rainy Weather,\" has a section called \"Why It Rains So Much.\" It starts on page 10.",
        "So he should read Chapter 2, in the section that starts on page 10.",
        "\"Fallen Leaves\" is about the ground, and \"Birds in the Trees\" is about animals in the canopy."
      ],
      misconception: "A common mix-up is choosing a section that shares one idea, like storms, instead of the one whose whole title answers the question.",
      why: "The answers are 2 and 10. Chapter 2, \"The Rainy Weather,\" has the section \"Why It Rains So Much,\" which starts on page 10. \"Storms in the Afternoon\" tells about when storms come, not why it rains so much." }
  ],
  /* Hints and Show me how for items kept in practice: refs P5-P7 (core set 1) and Together P1-P4. */
  addons: {
    "SK-SS1a-P1": {
      hints: [
        "Look for clue words. They tell you how the author put the ideas together.",
        "Read the first word or two of each sentence in \"From Flower to Peanut.\"",
        "The section never names a second kind of plant, so it is not comparing. Ask what the clue words tell you about time."
      ],
      how: [
        "The sentences start with First, Next, Then and Finally.",
        "Those clue words show things happening in order: seed, flower, peg, peanut.",
        "The answer is \"It tells the steps in the order they happen.\"",
        "Why peanuts help the soil is a different section, and no problem gets fixed here."
      ],
      misconception: "A common mix-up is naming what the section is about, peanuts, instead of how it is put together." },
    "SK-SS1a-P2": {
      hints: [
        "Cause and effect tells what happened and why. Find the cause first, then look for what happens because of it.",
        "All three sentences in the section are choices. Which one tells what the roots do?",
        "Read the first sentence again. Does it tell what happens later, or only what the plants are like?"
      ],
      how: [
        "The roots work with tiny living things to add plant food to the soil. That is the cause.",
        "The clue word because links back to it, and the sentence tells what happens the next year.",
        "The answer is \"Because the soil has more plant food, crops such as cotton and corn often grow better in that field the next year.\"",
        "The first sentence only says peanut plants are good for the soil. It does not tell what happens later."
      ] },
    "SK-SS1a-P3": {
      hints: [
        "A heading names what a section is mostly about.",
        "Read every sentence under \"Harvest Time.\" What are the farmers and machines doing?",
        "Peanut flowers are told about in another section, before the harvest. Ask what all the sentences under this heading describe."
      ],
      how: [
        "Under \"Harvest Time,\" a machine digs up the plants, the peanuts dry, and another machine picks them off.",
        "All of that is gathering the crop. Harvest means gathering a crop.",
        "The answer is how farmers gather the peanuts.",
        "The soil and the flowers are told about in other sections."
      ] },
    "SK-SS1a-P4": {
      hints: [
        "Ask what each set of clue words helps an author do.",
        "Start with one set of words you are sure about. Then do the others.",
        "Both and alike show ways things are the same, so that set is not about time. Decide where the last three sets go."
      ],
      how: [
        "First, next and finally tell order: sequence.",
        "Because, so and as a result tell why: cause and effect.",
        "Both, alike and but tell how things are the same and different: compare.",
        "The trouble was and to fix it tell about a problem and a solution."
      ] },
    "SK-SS1a-P5": {
      hints: [
        "A text box sits apart from the sections. Ask what kind of information it gives.",
        "Read the words in the box. Then ask whether any section tells that same information.",
        "The steps for planting are told in \"From Flower to Peanut,\" not in the box. Test the other choices against the box's one sentence."
      ],
      how: [
        "The box has one sentence: Georgia grows more peanuts than any other state.",
        "No section tells that fact, and it is not a step or a reason. It is an extra fact.",
        "The answer is \"to add an interesting fact about peanuts in Georgia.\"",
        "The box does not tell steps, explain why peanuts grow under the ground, or compare plants."
      ],
      misconception: "A common mix-up is thinking a box repeats the main idea. A box usually adds something extra." },
    "SK-SS1a-P6": {
      hints: [
        "Look at the map and then at the words. Ask what each one tells you.",
        "Read the key, then find what it marks on the map. Then check whether any section tells you the same thing.",
        "The steps for growing a peanut are told in words, and a map cannot show steps. Check the other choices the same way: is it on the map, and is it already in the words?"
      ],
      how: [
        "The key says the striped area is peanut farms. The stripes cover the south part of Georgia.",
        "The article says many Georgia farmers grow peanuts, but it never says where.",
        "The answer is \"which part of Georgia the peanut farms are in.\"",
        "The steps, the soil and the drying time are all told in words, and the map shows none of them."
      ] },
    "SK-SS1a-P7": {
      hints: [
        "A table of contents lists the chapters. Each chapter title tells what that part of the book is about.",
        "Think about where baby sea turtles start and where they need to go. Then read every chapter title.",
        "Chapter 2 is about the nests themselves, not about what happens after the babies hatch. Test each of the other titles against the question."
      ],
      how: [
        "The babies hatch in a nest on the sand and must get to the water.",
        "Chapter 3's title names a trip to the ocean.",
        "The answer is \"Chapter 3: The Race to the Ocean.\"",
        "Chapter 1 meets the turtles, Chapter 2 is about the nests, and Chapter 4 is about people."
      ],
      misconception: "A common mix-up is choosing a chapter that shares one word with the question, like nest, instead of the one whose whole topic fits." }
  },
  test: [
    { id: "SK-SS1a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "How are the sections \"A Big Problem\" and \"Working Together\" connected?",
      choices: [
        { text: "The first tells a trouble, and the second tells how people help.", correct: true },
        { text: "The first tells steps, and the second tells what happens last." },
        { text: "The first compares two animals, and the second tells about one." },
        { text: "The first gives a fact, and the second tells the author's feelings." }
      ],
      clue: "Read both headings, then read the first sentence under \"Working Together.\" What does that sentence say is happening now?",
      why: "The answer is \"The first tells a trouble, and the second tells how people help.\" \"A Big Problem\" tells how tortoises lost their home. \"Working Together\" begins, \"Today, people are working to solve this problem.\" That is problem and solution." },
    { id: "SK-SS1a-T2", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Which pattern does the author mainly use in the section \"A Home for Many Animals\"?",
        choices: [
          { text: "It tells a cause and the effect it has.", correct: true },
          { text: "It tells steps in the order they happen." },
          { text: "It tells how two animals are alike and different." },
          { text: "It tells a problem and how people solve it." }
        ] },
      partB: { prompt: "Which sentence from that section best shows this pattern?",
        choices: [
          { text: "\"Because of this, many other animals, such as snakes, frogs and mice, hide in tortoise burrows too.\"", correct: true },
          { text: "\"A burrow stays cool on hot days and warmer on cold nights.\"" },
          { text: "\"A gopher tortoise uses its strong front legs to dig a long tunnel in the sand.\"" },
          { text: "\"This tunnel is called a burrow.\"" }
        ] },
      clue: "Look for a clue word in the section. Does it point to order, to a reason, or to how things are alike? Then find the sentence with that clue word.",
      why: "Part A: It tells a cause and the effect it has. Part B: \"Because of this, many other animals, such as snakes, frogs and mice, hide in tortoise burrows too.\" The burrow stays cool and warm (cause), so other animals hide there (effect). The clue words because of this join the cause to the effect. The sentence about the burrow staying cool tells only the cause." },
    { id: "SK-SS1a-T3", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read the section \"A Big Problem.\" Select the sentence that tells the effect of people cutting down the forests.",
      targets: ["p2:5:1", "p2:5:2", "p2:5:3"],
      answer: ["p2:5:3"], pick: 1,
      clue: "Find the sentence that tells what happened because people cut down the forests.",
      why: "The answer is \"As a result, the tortoises lost much of their home.\" Cutting down the forests is the cause. The tortoises losing their home is the effect, and the clue words are as a result." },
    { id: "SK-SS1a-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author wants to add this picture to the article. Which caption would best fit the picture?",
      figure: { src: "assets/figures/ss1a-tortoise-burrow.svg",
        alt: "A drawing of a gopher tortoise sitting on sandy ground, right in front of the dark, round opening of a tunnel in a mound of sand." },
      choices: [
        { text: "A gopher tortoise rests at the door of the burrow it dug.", correct: true },
        { text: "Workers set a small fire to clear away thick bushes." },
        { text: "Pine forests once covered much of south Georgia." },
        { text: "Many towns and roads were built over the years." }
      ],
      clue: "A caption tells what the picture shows. Look at the picture first, then find the words that describe it.",
      why: "The answer is \"A gopher tortoise rests at the door of the burrow it dug.\" The picture shows a tortoise at the opening of its tunnel, and the article says that kind of tunnel is called a burrow. The other captions tell about workers, forests and towns, which are not in the picture." },
    { id: "SK-SS1a-T5", type: "dropdown", points: 1, dok: 1, passages: ["p2"],
      prompt: "Choose the words that best complete the sentence.",
      text: "Another good heading for the section \"A Home for Many Animals\" would be {0}.",
      slots: [{ options: ["Sharing a Cool Tunnel", "How People Help Tortoises", "When the Forests Were Cut"], answer: 0 }],
      clue: "A new heading must tell what the whole section is mostly about. Reread that section, then check each heading against it.",
      why: "The answer is Sharing a Cool Tunnel. That section tells how the tortoise digs a burrow that stays cool, and how other animals hide in it too. Helping tortoises and cutting forests are told in other sections." }
  ]
});

/* ---------- 3.T.SS.1.b Organize writing to fit the purpose and reader ----------
   Scope: choosing a structure that fits the job (steps in order, sections with headings,
   compare, cause and effect), plus an opening, a closing and helpful features (headings,
   captions, numbered lists). Drafts are marked draft: true and number their own sentences. */
PP.addLesson({
  code: "3.T.SS.1.b",
  title: "Organize your writing to fit your reader",
  teach: {
    big: "Before you write, pick a plan that fits your job and your reader: steps in order for how-to, sections with headings for a topic, and features that help the reader.",
    points: [
      "First think about your job. Are you teaching how to do something, telling facts about a topic, comparing two things, or explaining why something happens? Then think about who will read it.",
      "How-to writing tells steps in the order the reader should do them. Order words like first, next and last help.",
      "Writing about a topic can be split into sections. Each section tells about one part, and a heading names that part. To compare two things, give each one its own section. To explain why, give each reason its own section.",
      "Features help your reader. A heading names a section, a caption tells what a picture shows, and a numbered list makes steps easy to follow.",
      "Start by telling your topic, and end with a closing that wraps it up."
    ],
    words: [
      { term: "purpose", means: "the job your writing does, like teaching or telling facts" },
      { term: "reader", means: "the person you are writing for" },
      { term: "feature", means: "a helper like a heading, caption or numbered list" }
    ],
    example: {
      label: "A writer's plan",
      lines: ["Topic: Caring for a pet hamster", "Heading 1: A Good Home", "Heading 2: Food and Water", "Heading 3: Play Time"],
      note: "The writer split the topic into three parts. Each heading tells the reader exactly what that section is about, so the reader can find the facts quickly."
    },
    tip: "On the test, you may read a student's draft and choose the best heading, the best order for steps, the best place for a sentence, or the best closing."
  },
  learn: [
    {
      show: ["How to Plant a Bean Seed", "Water the soil.", "Fill a cup with soil.", "Push a bean seed into the soil."],
      ask: "These steps are out of order. What order makes sense for the reader?",
      steps: [
        "Name the job. This is how-to writing, so the steps must go in the order a reader does them.",
        "Find what must happen first. You cannot push a seed into soil until the cup has soil in it.",
        "Find what comes next and last. The seed goes in, and then you water it."
      ],
      answer: "Fill a cup with soil, push a bean seed into the soil, and then water the soil."
    },
    {
      show: ["Squirrels eat nuts, seeds and fruit. In the fall, they bury acorns in the ground. In the winter, they dig the acorns up again to eat."],
      ask: "A student wants a heading for this section. Which heading fits best: \"Where Squirrels Sleep,\" \"What Squirrels Eat\" or \"How Squirrels Climb\"?",
      steps: [
        "Read every sentence and ask what they all tell about.",
        "Nuts, seeds, fruit and acorns are all food. Burying and digging up acorns is about saving food.",
        "Pick the heading that names that shared idea, not just one detail."
      ],
      answer: "\"What Squirrels Eat\" fits best, because every sentence tells about the food squirrels eat."
    },
    {
      show: ["Ana is writing directions for first graders on how to wash their hands. She has five steps."],
      ask: "Which feature would help her readers most: a numbered list, a map, or a chart of germ names?",
      steps: [
        "Think about the reader. First graders need directions that are easy to follow.",
        "Think about the job. Directions are steps, so the order matters.",
        "A numbered list shows each step and its order clearly."
      ],
      answer: "A numbered list, because it shows young readers each step in the right order."
    }
  ],
  write: {
    prompt: "Write a short how-to piece that teaches a younger child to do something you know well, like making a sandwich or packing a backpack. Give it a title, put the steps in order, and end with a closing sentence.",
    checklist: [
      "I told my topic in a title or a first sentence.",
      "I put my steps in the order a reader should do them.",
      "I used order words like first, next and last.",
      "I ended with a closing sentence that wraps it up.",
      "I thought about what a younger child would need to know."
    ],
    rows: 8
  },
  parent: "When you cook or build something together, ask your child to tell the steps in order, then decide together what title and headings a how-to page about it would need.",
  passages: [
    { id: "p1", draft: true, title: "Make a Pinecone Bird Feeder", byline: "Marcus's first draft", genre: "Student draft (how-to)",
      paragraphs: [
        ["(1) A pinecone bird feeder is an easy way to help birds when it is cold.", "(2) You will need a big pinecone, some string, a spoon, peanut butter and a plate of birdseed."],
        ["(3) First, tie the string around the top of the pinecone.", "(4) Then roll the pinecone in the birdseed until it is covered.", "(5) Next, use the spoon to spread peanut butter all over it.", "(6) Finally, hang your feeder on a branch near a window so you can see it."],
        ["(7) Soon, red cardinals and other birds may stop by for a snack.", "(8) You can watch them eat from inside your warm house."]
      ] },
    { id: "p2", draft: true, title: "The Pine Hill Library", byline: "Priya's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) The Pine Hill Library is a great place for kids in our town.", "(2) It is open six days a week, and it is free to visit."],
        ["(3) You can borrow much more than books at the library.", "(4) Kids can check out movies, puzzles and even board games.", "(5) You can keep most things for two weeks."],
        ["(6) The library also plans special activities for kids.", "(7) On Saturday mornings, a librarian reads stories out loud.", "(8) On Wednesdays, kids can join a building-block club.", "(9) In the summer, there is a reading contest with prizes."],
        ["(10) Next time you need something fun to do, visit the Pine Hill Library!"]
      ] },
    /* B4b:passages:start */
    {
      id: "p3",
      draft: true,
      title: "Make a Can Telephone",
      byline: "Dara's first draft",
      genre: "Student draft (how-to)",
      paragraphs: [
        [
          "(1) You need two clean empty cans, a long piece of string and a grown-up helper.",
          "(2) Ask the grown-up to cover any sharp edges with tape."
        ],
        [
          "(3) First, ask the grown-up to poke a small hole in the bottom of each can.",
          "(4) Next, push one end of the string through the hole in each can.",
          "(5) Then walk apart until the string is tight."
        ],
        [
          "(6) Now one friend talks into a can while the other friend holds a can to an ear.",
          "(7) The voice shakes the string, and the shaking carries the sound to the other can.",
          "(8) The string must stay tight, or the sound will not travel."
        ]
      ]
    },
    {
      id: "p4",
      draft: true,
      title: "The Cherry Lane Pet Show",
      byline: "Isaiah's first draft",
      genre: "Student draft (informational)",
      paragraphs: [
        [
          "(1) The Cherry Lane Pet Show is coming on the second Saturday of May.",
          "(2) Neighbors of every age can bring a pet or just come to watch."
        ],
        [
          "(3) Pets will be shown in three groups.",
          "(4) Dogs and cats go in the first group.",
          "(5) Fish, birds and other small pets go in the second group.",
          "(6) The third group is for pets that can do a trick."
        ],
        [
          "(7) Every pet that comes gets a ribbon.",
          "(8) The judges will also give a prize for the best trick.",
          "(9) The grand prize is a big bag of pet treats."
        ]
      ]
    },
    {
      id: "p5",
      draft: true,
      title: "Walk or Ride?",
      byline: "Tia's first draft",
      genre: "Student draft (informational)",
      paragraphs: [
        [
          "(1) Kids in our town get to school in two main ways, and both of them work well.",
          "(2) Some kids walk to school, and some kids ride the big yellow school bus."
        ],
        [
          "(3) Walking is good exercise, and it helps kids wake up before class.",
          "(4) Walkers can talk with their friends on the way to school.",
          "(5) The bus picks kids up near home and takes them right to the school door."
        ],
        [
          "(6) Riding the bus is a good choice when the weather is rainy or very cold.",
          "(7) Kids who ride the bus can look over their homework on the way.",
          "(8) Everyone who rides must stay in a seat until the bus stops."
        ]
      ]
    },
    {
      id: "p6",
      draft: true,
      title: "Make Oatmeal",
      byline: "Zane's first draft",
      genre: "Student draft (how-to)",
      paragraphs: [
        [
          "(1) You need oats, water, a small pot, a bowl, a spoon and a grown-up helper.",
          "(2) Pour one cup of water into the pot, and ask the grown-up to heat it on the stove until it bubbles."
        ],
        [
          "(3) Stir in half a cup of oats, and turn the heat down low.",
          "(4) Cook the oatmeal for five minutes, and stir it now and then so it does not stick.",
          "(5) Pour the oatmeal into a bowl, and eat it with a spoon.",
          "(6) Wash the pot, the bowl and the spoon with warm soapy water when you are finished."
        ]
      ]
    },
    {
      id: "p7",
      draft: true,
      title: "Splash Day at the Rec Center",
      byline: "Nora's first draft",
      genre: "Student draft (informational)",
      paragraphs: [
        [
          "(1) Splash Day is coming to the town rec center on the last Saturday of June, and everyone is invited.",
          "(2) It is free, and the whole family can come for the whole day."
        ],
        [
          "(3) Little kids can play in the shallow pool with a grown-up close by.",
          "(4) They can float on foam noodles and kick their feet.",
          "(5) There is also a sprinkler area with a short slide."
        ],
        [
          "(6) Bigger kids can race across the deep end of the pool.",
          "(7) They can try the diving board while a lifeguard watches.",
          "(8) A lifeguard is always on duty near the deep end."
        ]
      ]
    },
    {
      id: "p8",
      draft: true,
      title: "Books or Tablets?",
      byline: "Omar's first draft",
      genre: "Student draft (informational)",
      paragraphs: [
        [
          "(1) Kids today read in two main ways, and each way has good points.",
          "(2) Some kids read paper books, and some kids read on a tablet."
        ],
        [
          "(3) A paper book never needs to be charged, so it works anywhere.",
          "(4) You can flip back to a page you liked and find it fast.",
          "(5) A tablet can hold hundreds of books at one time."
        ],
        [
          "(6) A tablet has a light, so you can read in a dark room.",
          "(7) You can make the words bigger with one tap.",
          "(8) Some tablets also let you look up a word right away."
        ]
      ]
    }
/* B4b:passages:end */
  ],
  practice: [
    { id: "SK-SS1b-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which change would make Marcus's steps easier for a reader to follow?",
      choices: [
        { text: "Switch sentences 4 and 5 so the peanut butter goes on first.", correct: true },
        { text: "Switch sentences 3 and 6 so the feeder is hung up first." },
        { text: "Move sentence 2 so it comes after sentence 6 instead." },
        { text: "Move sentence 7 so it comes before sentence 3 instead." }
      ],
      clue: "Picture yourself doing each step. Would the birdseed stick to a bare pinecone?",
      why: "The answer is \"Switch sentences 4 and 5 so the peanut butter goes on first.\" The seeds stick only if the peanut butter is already on the pinecone. How-to steps must be in the order the reader does them." },
    { id: "SK-SS1b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Marcus wants to add a heading above sentences 3 through 6. Which heading fits best?",
      choices: [
        { text: "Making the Feeder Step by Step", correct: true },
        { text: "Things You Will Need" },
        { text: "Birds That Visit in Winter" },
        { text: "Why Birds Need Our Help" }
      ],
      clue: "Read only sentences 3 through 6. What do all four sentences tell the reader to do?",
      why: "The answer is \"Making the Feeder Step by Step.\" Sentences 3 to 6 are the steps for making and hanging the feeder. The list of things you need is in sentence 2, not in sentences 3 to 6." },
    { id: "SK-SS1b-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Some of Marcus's readers have never seen a pinecone feeder. Which feature would best help them know what the finished feeder looks like?",
      choices: [
        { text: "a photo of a finished feeder with a caption", correct: true },
        { text: "a numbered list of the four steps" },
        { text: "a heading above the list of supplies" },
        { text: "a bold title at the top of the page" }
      ],
      clue: "The reader's problem is not knowing what the feeder looks like. Which feature lets a reader see something?",
      why: "The answer is a photo of a finished feeder with a caption. A photo shows what the feeder looks like, and the caption tells what it is. A numbered list helps with the order of steps, and a heading or title names a part, but none of them shows the feeder." },
    { id: "SK-SS1b-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Marcus wants to add a closing sentence after sentence 8. Which sentence would be the best closing?",
      choices: [
        { text: "A pinecone feeder is a simple way to help hungry birds all winter.", correct: true },
        { text: "Cardinals are bright red, and they sing loud, clear songs." },
        { text: "Next, find another pinecone that is even bigger than the first." },
        { text: "Some people hang feeders filled with sugar water for other kinds of birds." }
      ],
      clue: "A closing wraps up the whole piece. Reread sentence 1 to remember the main idea.",
      why: "The answer is \"A pinecone feeder is a simple way to help hungry birds all winter.\" It goes back to the main idea in sentence 1 and wraps up the piece. The other sentences add a new step or a new detail instead of closing." },
    { id: "SK-SS1b-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each writing job to the plan that fits it best.",
      cols: ["Steps in order", "Compare", "Cause and effect"],
      rows: [
        { text: "telling how to fold a paper boat", answer: 0 },
        { text: "telling how frogs and toads are alike and different", answer: 1 },
        { text: "telling why a pond dried up last summer", answer: 2 }
      ],
      clue: "For each job, ask: Is the writer teaching steps, showing alike and different, or telling why something happened?",
      why: "Folding a boat is a how-to, so it needs steps in order. Frogs and toads are two things side by side, so that is compare. Why a pond dried up asks for a reason, so that is cause and effect." }
  ],
  /* B4b:core:start */
  /* ---------- Expansion 2026-10-22, batch B4 (author b4b) ----------
     core: fifteen independent items in three sets of five. { ref } reuses a practice item (P5 stays in practice, so Together is P1-P4).
     p3-p5 are used only by core; p6-p8 only by the similar bank. Never used by test. Author log: docs/expansion-2026-10-22/batches/B4-b4b-author-log.md.
     NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-SS1b-P5" },
      {
        id: "SK-SS1b-C02",
        type: "mc",
        points: 1,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: ["p3"],
        prompt: "Dara's draft starts with the list of supplies. She wants to add an opening before sentence 1. Which sentence is best?",
        choices: [
          { text: "A can telephone lets two friends talk across a yard, and you can make one fast.", correct: true },
          { text: "Cans are made of metal, and many people save them to use again later." },
          { text: "Homemade toys are fun to play with, and kids have made them for many years." },
          { text: "Phones help people talk, send messages and take pictures from far away." }
        ],
        clue: "An opening comes first and gets the reader ready. Ask what a reader needs to know before they start.",
        hints: [
          "An opening comes first and gets the reader ready. Ask what a reader needs to know before they start.",
          "Read the whole draft once. Then say in your own words what Dara wants her reader to be able to do at the end.",
          "A sentence about real phones is about a different thing than Dara's piece. Check each of the other three against what you said in your own words."
        ],
        how: [
          "Read the draft: every step is about making a can telephone and using it.",
          "An opening tells the reader what the piece will teach, so the reader knows what is coming.",
          "The answer is \"A can telephone lets two friends talk across a yard, and you can make one fast.\" It names what the reader will make.",
          "The other sentences are about cans, toys or phones, but none of them says what Dara's piece will teach."
        ],
        misconception: "A common mix-up is choosing a true fact about the topic. An opening has to tell what this piece will teach.",
        why: "The answer is \"A can telephone lets two friends talk across a yard, and you can make one fast.\" It tells the reader what the piece will teach. The other sentences are about cans, toys or phones in general, so they do not get the reader ready for these steps."
      },
      {
        id: "SK-SS1b-C03",
        type: "mc",
        points: 1,
        dok: 3,
        std: ["3.T.SS.1.b"],
        passages: ["p3"],
        prompt: "Dara adds this step: \"Tie a big knot in the end of the string inside each can.\" Where should it go, and why?",
        choices: [
          {
            text: "After sentence 4, because the string must be through the hole before its end can be tied inside the can.",
            correct: true
          },
          {
            text: "After sentence 3, because the steps about the cans should stay together before the string comes in."
          },
          { text: "After sentence 5, because the knot holds the string once the two friends have walked apart." },
          { text: "After sentence 6, because a knot is a finishing touch once the telephone is working." }
        ],
        clue: "In a how-to, each step needs the step before it to be done. Ask what the reader has already done.",
        hints: [
          "In a how-to, each step needs the step before it to be done. Ask what the reader has already done.",
          "Picture holding a can and the string. Reread sentences 3, 4 and 5 and say where the string is at the end of each one.",
          "After sentence 3, no string is in a can yet. Decide among the places that are left."
        ],
        how: [
          "Find where the string first goes into a can. Sentence 4 pushes the string through the hole.",
          "Only then is there a string end inside the can to tie. After sentence 3 the string is not in the can yet.",
          "The knot also has to be done before the friends pull the string tight in sentence 5, or the string would slip out.",
          "The answer is \"After sentence 4, because the string must be through the hole before its end can be tied inside the can.\""
        ],
        misconception: "A common mix-up is grouping steps by the object they use (the cans) instead of by what has to happen first.",
        why: "The answer is \"After sentence 4, because the string must be through the hole before its end can be tied inside the can.\" The knot cannot be tied until the string is in the can, and it has to hold before the friends pull the string tight. After sentence 3 there is no string in the can yet, and after sentences 5 and 6 the string is already being pulled and used."
      },
      {
        id: "SK-SS1b-C04",
        type: "ms",
        points: 2,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: [],
        pick: 2,
        prompt: "Dara's readers will follow her steps while they hold the cans in their hands. Which TWO features would help them most?",
        choices: [
          { text: "a numbered list for the steps", correct: true },
          { text: "a small drawing beside each step, with a caption", correct: true },
          { text: "a large heading above every sentence" },
          { text: "a long paragraph about how sound travels" },
          { text: "a chart that compares different kinds of cans" }
        ],
        clue: "A feature is chosen for the reader, not just for looks. Think about what this reader is doing while they read.",
        hints: [
          "A feature is chosen for the reader, not just for looks. Think about what this reader is doing while they read.",
          "Choose two. For each feature, say what job it does for a reader, and then decide whether these readers need that job done.",
          "A chart of different cans gives facts about cans, but Dara's readers are making a telephone, not choosing a can. Check the other four."
        ],
        how: [
          "Dara's readers are busy doing the steps, so they need to find their place fast and see what to do.",
          "A numbered list shows each step and its order, so a reader can look away and find the place again.",
          "A drawing with a short caption shows what a step looks like.",
          "The answers are \"a numbered list for the steps\" and \"a small drawing beside each step, with a caption.\" A heading over every sentence would crowd the page, and facts about sound or cans do not help someone follow steps."
        ],
        misconception: "A common mix-up is choosing a feature that gives facts about the topic. These readers need help doing the steps.",
        why: "The answers are \"a numbered list for the steps\" and \"a small drawing beside each step, with a caption.\" Readers who are holding the cans need to find the next step fast and see what to do. A heading over every sentence, a paragraph about sound and a chart of cans do not help them follow the steps."
      },
      {
        id: "SK-SS1b-C05",
        type: "order",
        points: 2,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: [],
        prompt: "Mina is teaching a friend to make a paper chain. Put her steps in the best order.",
        steps: [
          "Cut a sheet of paper into long strips.",
          "Glue the ends of one strip together to make a ring.",
          "Slide the next strip through the ring.",
          "Glue the ends of that strip together to make a second ring.",
          "Keep adding rings until the chain is as long as you want."
        ],
        clue: "In a how-to, each step builds on the steps before it. Ask which step has to happen before the others can.",
        hints: [
          "In a how-to, each step builds on the steps before it. Ask which step has to happen before the others can.",
          "Look at the words strip and ring in each step. Ask what you must already have before you can do each one.",
          "Cutting strips must come first, because without strips there is nothing to glue. Now decide the order of the other four steps."
        ],
        how: [
          "The first step needs nothing else: cut the strips.",
          "Next, one strip is glued into a ring, because the next strip needs a ring to slide through.",
          "Then the next strip goes through the ring, and its ends are glued to make a second ring.",
          "Last, keep adding rings until the chain is long enough. The order is: cut strips, glue one ring, slide the next strip through, glue the second ring, keep adding rings."
        ],
        misconception: "A common mix-up is putting a step that adds to the chain before the first ring exists.",
        why: "The order is: cut strips; glue one strip into a ring; slide the next strip through the ring; glue it into a second ring; keep adding rings. Each step needs the one before it."
      }
    ] },
    { title: "Set 2", items: [
      {
        id: "SK-SS1b-C06",
        type: "dropdown",
        points: 2,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: ["p4"],
        prompt: "Isaiah wants a heading for each of his two long sections. Choose the best heading for each.",
        text: "Above sentences 3 to 6: {0}. Above sentences 7 to 9: {1}.",
        slots: [
          {
            options: ["Three Groups of Pets", "Pets That Do Tricks", "Meet Your Neighbors"],
            answer: 0
          },
          {
            options: ["Ribbons and Prizes", "Pets That Do Tricks", "Prizes for Dogs and Cats"],
            answer: 0
          }
        ],
        clue: "A heading names what a whole section is about, so it must fit every sentence in that section.",
        hints: [
          "A heading names what a whole section is about, so it must fit every sentence in that section.",
          "Read sentences 3 to 6 as one group, then sentences 7 to 9 as another. Say what each group tells about.",
          "One sentence about tricks is not enough to name a section. A heading must fit all of the sentences under it, not just one."
        ],
        how: [
          "Sentences 3 to 6 name the groups that pets will be shown in.",
          "Sentences 7 to 9 tell about the ribbon every pet gets and the prizes the judges give.",
          "The answers are \"Three Groups of Pets\" and \"Ribbons and Prizes.\"",
          "\"Pets That Do Tricks\" fits only one sentence in each section, and \"Meet Your Neighbors\" is not about either section."
        ],
        misconception: "A common mix-up is choosing a heading that fits one sentence. A heading has to cover the whole section.",
        why: "The answers are Three Groups of Pets and Ribbons and Prizes. Sentences 3 to 6 are about the three groups of pets, and sentences 7 to 9 are about the ribbon and the prizes. Pets That Do Tricks fits only one sentence in each section."
      },
      {
        id: "SK-SS1b-C07",
        type: "mc",
        points: 1,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: ["p4"],
        prompt: "Isaiah wants to add a closing sentence after sentence 9. Which sentence is best?",
        choices: [
          {
            text: "Come to the Cherry Lane Pet Show and share a fun day with your neighbors and their pets.",
            correct: true
          },
          { text: "Next, the judges will pick the winners and hand out all of the ribbons and prizes." },
          { text: "Some pets learn new tricks very quickly, and others need a lot of patience and time." },
          { text: "Many families in our town have a dog or a cat, and some have fish or birds too." }
        ],
        clue: "A closing comes at the very end. Ask what it should do for the reader after they have read everything.",
        hints: [
          "A closing comes at the very end. Ask what it should do for the reader after they have read everything.",
          "Read all three sections, not only the last one. Ask what the whole piece is for.",
          "Sentence 8 already tells what the judges give out, so the closing should not bring up the judges again. Test the other three against what the whole piece is for."
        ],
        how: [
          "A closing wraps up the whole piece, not just the last section.",
          "Isaiah's piece tells neighbors about a show they can come to.",
          "The answer is \"Come to the Cherry Lane Pet Show and share a fun day with your neighbors and their pets.\" It looks back at the whole piece and ends it.",
          "The sentence about the judges adds news that the last section already gave, and the sentences about tricks and families add new details instead of wrapping up."
        ],
        misconception: "A common mix-up is choosing a sentence that adds one more fact. A closing wraps up; it does not start something new.",
        why: "The answer is \"Come to the Cherry Lane Pet Show and share a fun day with your neighbors and their pets.\" It wraps up the whole piece and speaks to the readers. The judges sentence repeats news from the last section, and the sentences about tricks and families add new details."
      },
      {
        id: "SK-SS1b-C08",
        type: "hottext",
        points: 1,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: [],
        pick: 1,
        prompt: "Isaiah wants to put this photo on his flyer. Select the sentence that would make the best caption.",
        stem: ["A photo from last year's pet show shows a brown dog in a red bandana jumping to catch a ball."],
        options: [
          "A brown dog jumps to catch a ball at last year's Cherry Lane Pet Show.",
          "Dogs need food, water and exercise every day.",
          "The Cherry Lane Pet Show is on the second Saturday of May.",
          "Pet shows are held in many towns each year."
        ],
        answer: [0],
        clue: "A caption sits next to a picture and tells what the picture shows.",
        hints: [
          "A caption sits next to a picture and tells what the picture shows.",
          "Read the sentence about the photo. Then read each choice and ask: does it tell about this picture, or about something else?",
          "The date of the show is useful on a flyer, but it does not tell what this photo shows. Check the other three the same way."
        ],
        how: [
          "A caption tells what is happening in the picture.",
          "The photo shows a brown dog in a red bandana jumping to catch a ball.",
          "The answer is \"A brown dog jumps to catch a ball at last year's Cherry Lane Pet Show.\" It matches the picture.",
          "The other sentences are true about dogs, the show or pet shows, but they do not describe this photo."
        ],
        misconception: "A common mix-up is choosing a useful fact about the event. A caption has to match the picture next to it.",
        why: "The answer is \"A brown dog jumps to catch a ball at last year's Cherry Lane Pet Show.\" A caption tells what the picture shows, and this sentence describes the photo. The other sentences give facts about dogs, the date or pet shows, not about this picture."
      },
      {
        id: "SK-SS1b-C09",
        type: "ms",
        points: 2,
        dok: 3,
        std: ["3.T.SS.1.b"],
        passages: ["p3", "p4"],
        pick: 2,
        prompt: "Think about Dara's can telephone draft and Isaiah's pet show draft. Which TWO sentences tell how their plans are different?",
        choices: [
          {
            text: "Dara's draft puts steps in the order a reader does them, but Isaiah's draft groups facts into sections.",
            correct: true
          },
          {
            text: "Dara writes for readers who will do the steps while they read, but Isaiah writes for neighbors who want facts about an event.",
            correct: true
          },
          { text: "Isaiah's draft has a numbered list, but Dara's draft does not." },
          { text: "Dara's draft compares two things, but Isaiah's draft tells a story." },
          { text: "Isaiah's draft uses the words first, next and then, but Dara's draft does not." }
        ],
        clue: "To compare, find what is true about one draft, then check the other draft. A statement has to be true about both drafts.",
        hints: [
          "To compare, find what is true about one draft, then check the other draft. A statement has to be true about both drafts.",
          "Choose two. Look at how each draft is organized and who each draft is written for.",
          "Neither draft has a numbered list. Check the other four statements against both drafts the same way."
        ],
        how: [
          "Dara's draft is a how-to: steps in order, for readers who are doing the job as they read.",
          "Isaiah's draft tells facts about an event, grouped into sections, for neighbors who want to know about it.",
          "The answers are \"Dara's draft puts steps in the order a reader does them, but Isaiah's draft groups facts into sections\" and \"Dara writes for readers who will do the steps while they read, but Isaiah writes for neighbors who want facts about an event.\"",
          "Neither draft has a numbered list, neither compares two things or tells a story, and the words first, next and then are in Dara's draft, not Isaiah's."
        ],
        misconception: "A common mix-up is choosing a statement that sounds like a plan but is false for one of the drafts. Check each statement against both.",
        why: "The answers are \"Dara's draft puts steps in the order a reader does them, but Isaiah's draft groups facts into sections\" and \"Dara writes for readers who will do the steps while they read, but Isaiah writes for neighbors who want facts about an event.\" Neither draft has a numbered list, neither compares two things or tells a story, and Dara's draft is the one that uses first, next and then."
      },
      {
        id: "SK-SS1b-C10",
        type: "dropdown",
        points: 2,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: [],
        prompt: "Complete Leo's plan. Choose the best answer for each blank.",
        stem: [
          "Ms. Reyes asks Leo to make a page that teaches kids how to set a table for dinner. Kids will read the page while they work."
        ],
        text: "Leo's job is to teach kids how to set a table, so his piece should use {0}. The kids will follow it while they work, so {1} would help them most.",
        slots: [
          {
            options: [
              "steps in order",
              "sections that compare two things",
              "a plan for explaining why something happens"
            ],
            answer: 0
          },
          {
            options: ["a numbered list of the steps", "a long paragraph about tables", "a chart of dinner foods"],
            answer: 0
          }
        ],
        clue: "First name the writer's job. The job picks the plan. Then think about what the reader is doing.",
        hints: [
          "First name the writer's job. The job picks the plan. Then think about what the reader is doing.",
          "Read the sentence again. The first blank is about the job, and the second blank is about the reader.",
          "Leo is not comparing two things, so one choice for the first blank does not match his job."
        ],
        how: [
          "Leo's job is to teach how to do something, so the plan is steps in order.",
          "The kids are working as they read, so they need to find the next step fast.",
          "The answers are \"steps in order\" and \"a numbered list of the steps.\"",
          "Comparing and explaining why do other jobs, and a paragraph about tables or a chart of foods does not help someone set a table."
        ],
        misconception: "A common mix-up is picking a plan or feature about the topic instead of one that matches the job and the reader.",
        why: "The answers are steps in order and a numbered list of the steps. Leo is teaching how to do something, so the steps go in order, and readers who are working need a numbered list to find the next step. The other plans do other jobs, and a long paragraph or a chart does not help someone set a table."
      }
    ] },
    { title: "Set 3", items: [
      {
        id: "SK-SS1b-C11",
        type: "hottext",
        points: 1,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: ["p5"],
        pick: 1,
        prompt: "One sentence in Tia's draft is in the wrong paragraph. Select that sentence.",
        targets: ["p5:1:2", "p5:2:1", "p5:2:2", "p5:2:3", "p5:3:1", "p5:3:2", "p5:3:3"],
        answer: ["p5:2:3"],
        clue: "A section stays on one idea. Find the idea of each paragraph, then look for a sentence that is about a different idea.",
        hints: [
          "A section stays on one idea. Find the idea of each paragraph, then look for a sentence that is about a different idea.",
          "Say in a few words what each paragraph is about. Then ask of each sentence: does it belong with its paragraph?",
          "The last sentence of the draft is about what happens on the bus, and it sits in the paragraph about the bus. Check the other sentences against their own paragraphs."
        ],
        how: [
          "Paragraph 1 tells about the two ways. Paragraph 2 begins with walking. Paragraph 3 is about riding the bus.",
          "Check each sentence against its paragraph. \"Walking is good exercise\" and \"Walkers can talk with their friends on the way to school\" are both about walking.",
          "Sentence 5 says the bus picks kids up near home. That is about riding the bus, so it is in the wrong paragraph.",
          "The answer is \"The bus picks kids up near home and takes them right to the school door.\" It belongs with sentences 6 to 8."
        ],
        misconception: "A common mix-up is choosing a sentence because it sounds different from its neighbors. Look at the idea of the paragraph.",
        why: "The answer is \"The bus picks kids up near home and takes them right to the school door.\" The second paragraph is about walking, but this sentence is about the bus, so it belongs in the paragraph about riding. Every other sentence is in the paragraph it fits."
      },
      {
        id: "SK-SS1b-C12",
        type: "mc",
        points: 1,
        dok: 3,
        std: ["3.T.SS.1.b"],
        passages: ["p5"],
        prompt: "Why is a compare plan a good fit for Tia's piece?",
        choices: [
          { text: "Her readers want to see how walking and riding the bus are alike and different.", correct: true },
          { text: "Her readers need to learn the steps for getting ready for school in order." },
          { text: "Her readers need to learn what caused kids to start going to school." },
          { text: "Her readers need a picture to go with every sentence in the draft." }
        ],
        clue: "A plan should fit what the reader needs from the piece. Ask what Tia wants her reader to understand.",
        hints: [
          "A plan should fit what the reader needs from the piece. Ask what Tia wants her reader to understand.",
          "Read the whole draft and notice what each paragraph does for the reader.",
          "The draft is not a list of steps, so a plan for steps in order would not fit. Test the other choices against what Tia's paragraphs do."
        ],
        how: [
          "Look at what each paragraph does: paragraph 1 names two ways, paragraph 2 is about walking, and paragraph 3 is about riding the bus.",
          "A compare plan gives each thing its own section so the reader can see how they are alike and different.",
          "The answer is \"Her readers want to see how walking and riding the bus are alike and different.\"",
          "The draft has no steps, never tells what caused anything, and does not need a picture for every sentence."
        ],
        misconception: "A common mix-up is choosing a plan because it is a plan you know, such as steps, instead of the one that matches the job.",
        why: "The answer is \"Her readers want to see how walking and riding the bus are alike and different.\" Tia gives each way its own paragraph so readers can compare them. The draft has no steps, never tells what caused anything, and does not need a picture for every sentence."
      },
      {
        id: "SK-SS1b-C13",
        type: "match",
        points: 2,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: [],
        prompt: "Match each reader to the feature that would help that reader most. Use each feature once.",
        cols: ["a large title that names the event", "a photo with a caption", "headings above short sections"],
        rows: [
          { text: "a neighbor who walks past a flyer and reads for only a second", answer: 0 },
          { text: "a reader who has never seen a snow leopard", answer: 1 },
          { text: "a reader who wants the facts about only one part of a long page", answer: 2 }
        ],
        clue: "Think about what each reader needs and how much time or knowledge they have. Then ask which feature gives that help.",
        hints: [
          "Think about what each reader needs and how much time or knowledge they have. Then ask which feature gives that help.",
          "Start with the row you are most sure about, then use each feature only once.",
          "A reader who has never seen a snow leopard needs to see one. Match the other two rows after that."
        ],
        how: [
          "The neighbor reads for only a second, so the biggest words must say what the flyer is about.",
          "A reader who has never seen a snow leopard needs to see one, and a caption tells what the photo shows.",
          "A reader looking for one part of a long page can use headings to find that part.",
          "The matches are: the passing neighbor with the large title, the snow leopard reader with the photo and caption, and the reader looking for one part with the headings."
        ],
        misconception: "A common mix-up is matching by the word in the feature (heading, title) instead of by what the reader needs.",
        why: "The neighbor who reads for a second needs a large title that names the event. The reader who has never seen a snow leopard needs a photo with a caption. The reader who wants one part of a long page needs headings above short sections to find it."
      },
      {
        id: "SK-SS1b-C14",
        type: "mc",
        points: 1,
        dok: 3,
        std: ["3.T.SS.1.b"],
        passages: [],
        prompt: "Which plan fits Elena's job and her readers best?",
        stem: ["Elena wants to write a page for her neighbors about why their street floods after a heavy rain."],
        choices: [
          {
            text: "Tell what happens on the street, then explain each cause in its own short section with a heading.",
            correct: true
          },
          { text: "List the steps for cleaning out a storm drain, in the order a person does them." },
          { text: "Compare the street with a street in another town, with one section for each street." },
          { text: "Tell one story about a rainy day, and leave out headings and sections." }
        ],
        clue: "First name the writer's job. Is she teaching how to do something, comparing, or explaining the reasons for something?",
        hints: [
          "First name the writer's job. Is she teaching how to do something, comparing, or explaining the reasons for something?",
          "Read the four plans slowly. For each one, ask what question the finished page would answer for Elena's neighbors.",
          "A page of steps would teach neighbors how to clean a drain, but that is not Elena's job. Test the other three plans."
        ],
        how: [
          "Elena's job is to explain why something happens, so her readers need the causes.",
          "A short section for each cause, with a heading, lets a neighbor find and understand each reason.",
          "The answer is \"Tell what happens on the street, then explain each cause in its own short section with a heading.\"",
          "Cleaning steps, a comparison with another street and a single story do not explain the causes."
        ],
        misconception: "A common mix-up is picking a plan that is about the same topic but does a different job, such as steps for fixing the drain.",
        why: "The answer is \"Tell what happens on the street, then explain each cause in its own short section with a heading.\" Elena's job is to explain why the street floods, so each cause gets its own section. Steps for cleaning a drain, a comparison with another town and a story do not explain the reasons."
      },
      {
        id: "SK-SS1b-C15",
        type: "mc",
        points: 1,
        dok: 2,
        std: ["3.T.SS.1.b"],
        passages: [],
        prompt: "Jun wants to add a closing after sentence 5. Which sentence is best?",
        stem: [
          "(1) A flying disc is fun to throw with a friend.",
          "(2) First, hold the disc flat with your fingers curled under the edge.",
          "(3) Next, stand sideways to your friend.",
          "(4) Then swing your arm and let go of the disc.",
          "(5) The disc should spin and glide through the air."
        ],
        choices: [
          { text: "Keep practicing, and soon your throws will sail straight to your friend.", correct: true },
          { text: "Next, take a second disc out of the bag and throw that one too." },
          { text: "Flying discs are usually made of plastic and come in many colors." },
          { text: "Some people throw a disc with their other hand to try something new." }
        ],
        clue: "A closing wraps up the whole piece.",
        hints: [
          "A closing wraps up the whole piece.",
          "Ask what a reader should feel or be ready to do after finishing these steps.",
          "The steps are already finished by sentence 5, so a sentence that starts with Next would add one more step. Test the other three against what a closing does."
        ],
        how: [
          "A closing wraps up a how-to after the steps are done.",
          "By sentence 5 the reader has thrown the disc, so the piece is ready to end.",
          "The answer is \"Keep practicing, and soon your throws will sail straight to your friend.\" It encourages the reader and ends the piece.",
          "The other sentences add another step, a fact about discs or a new tip, so they do not wrap up."
        ],
        misconception: "A common mix-up is adding one more step or fact at the end. A closing wraps up what the reader has done.",
        why: "The answer is \"Keep practicing, and soon your throws will sail straight to your friend.\" It wraps up the how-to and cheers the reader on. A second disc adds a step, and the sentences about plastic and the other hand add new facts instead of ending the piece."
      }
    ] }
  ] },
  similar: [
    {
      id: "SK-SS1b-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: [],
      like: ["SK-SS1b-P5"],
      prompt: "Match each writing job to the plan that fits it best.",
      cols: ["Steps in order", "Compare", "Cause and effect"],
      rows: [
        { text: "telling how to build a pillow fort", answer: 0 },
        { text: "telling how a basketball and a soccer ball are alike and different", answer: 1 },
        { text: "telling why puddles disappear on a sunny day", answer: 2 }
      ],
      clue: "Ask what the writer is doing for the reader: teaching how, showing alike and different, or telling why.",
      hints: [
        "Ask what the writer is doing for the reader: teaching how, showing alike and different, or telling why.",
        "Start with the row whose job you are most sure about, and use each plan once.",
        "Telling why puddles disappear asks for a reason, not a list of steps. Match the other two rows."
      ],
      how: [
        "Building a fort teaches how to do something, so the steps go in order.",
        "A basketball and a soccer ball are two things side by side, so the plan is compare.",
        "Why puddles disappear asks for a reason, so the plan is cause and effect."
      ],
      why: "Building a pillow fort is a how-to, so it needs steps in order. A basketball and a soccer ball are two things to compare. Why puddles disappear asks for a reason, so it is cause and effect."
    },
    {
      id: "SK-SS1b-S02",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: ["p6"],
      like: ["SK-SS1b-C02"],
      prompt: "Zane's draft starts with the list of supplies. He wants to add an opening before sentence 1. Which sentence is best?",
      choices: [
        { text: "Oatmeal is a warm breakfast that you can cook in only a few minutes.", correct: true },
        { text: "Oats are a kind of grain that grows in fields on many farms." },
        { text: "Breakfast is the first meal of the day, and many kids eat it at home." },
        { text: "A stove has burners that get very hot when a grown-up turns them on." }
      ],
      clue: "An opening is the first thing a reader sees. Ask what the reader should know before they start.",
      hints: [
        "An opening is the first thing a reader sees. Ask what the reader should know before they start.",
        "Read the whole draft, and say in your own words what the reader will be able to make at the end.",
        "A sentence about stoves is a safety fact, not a sentence about what the piece teaches. Check the other three."
      ],
      how: [
        "Every step in Zane's draft is about cooking oatmeal.",
        "An opening tells the reader what the piece will teach.",
        "The answer is \"Oatmeal is a warm breakfast that you can cook in only a few minutes.\"",
        "Facts about oats, breakfast or stoves are true, but none says what this piece will teach."
      ],
      why: "The answer is \"Oatmeal is a warm breakfast that you can cook in only a few minutes.\" It tells the reader what the piece will teach. The sentences about oats, breakfast and stoves are true, but they do not get the reader ready for these steps."
    },
    {
      id: "SK-SS1b-S03",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.T.SS.1.b"],
      passages: ["p6"],
      like: ["SK-SS1b-C03"],
      prompt: "Zane adds this step: \"Let the oatmeal cool for a few minutes.\" Where should it go, and why?",
      choices: [
        { text: "After sentence 4, because the oatmeal is hot only after it has finished cooking.", correct: true },
        { text: "After sentence 2, because the pot should cool down before any oats go in." },
        { text: "After sentence 3, because the oats should rest for a few minutes before they cook." },
        { text: "After sentence 5, because the oatmeal can cool down while the reader eats it." }
      ],
      clue: "In a how-to, each step needs the step before it to be done. Ask what has to be true before this step makes sense.",
      hints: [
        "In a how-to, each step needs the step before it to be done. Ask what has to be true before this step makes sense.",
        "Picture the oatmeal in the pot. Reread sentences 2, 3 and 4 and ask when the oatmeal is ready to eat.",
        "After sentence 5 the reader is already eating. Decide among the places that are left."
      ],
      how: [
        "Find when the oatmeal is hot and ready. Sentence 4 cooks it for five minutes.",
        "Only after it is cooked does it need to cool. Before sentence 4 it is still water and oats.",
        "Sentence 5 says to eat it, so the cooling has to come before that.",
        "The answer is \"After sentence 4, because the oatmeal is hot only after it has finished cooking.\""
      ],
      why: "The answer is \"After sentence 4, because the oatmeal is hot only after it has finished cooking.\" The cooling step has to come after the cooking and before the eating. Before sentence 4 there is nothing to cool yet, and after sentence 5 the reader is already eating."
    },
    {
      id: "SK-SS1b-S04",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: [],
      pick: 2,
      like: ["SK-SS1b-C04"],
      prompt: "Zane's readers will follow the oatmeal steps in a kitchen, with wet hands and a hot pot to watch. Which TWO features would help them most?",
      choices: [
        { text: "numbered steps that are easy to find again", correct: true },
        { text: "a small drawing beside the steps, with a caption", correct: true },
        { text: "a paragraph about where oats are grown" },
        { text: "a long list of other breakfast foods" },
        { text: "a title in tiny print at the bottom of the page" }
      ],
      clue: "A feature is chosen for the reader. Think about what this reader is doing and what they cannot do while they cook.",
      hints: [
        "A feature is chosen for the reader. Think about what this reader is doing and what they cannot do while they cook.",
        "Choose two. Say what job each feature does for a reader, and then decide whether these readers need that job done.",
        "A title in tiny print at the bottom would be hard for any reader to use. Check the other four."
      ],
      how: [
        "Zane's readers are cooking, so they look at the page for only a moment.",
        "Numbered steps let them find their place again fast.",
        "A drawing with a caption shows what a step should look like.",
        "The answers are \"numbered steps that are easy to find again\" and \"a small drawing beside the steps, with a caption.\" Facts about oats or other foods do not help them cook."
      ],
      why: "The answers are \"numbered steps that are easy to find again\" and \"a small drawing beside the steps, with a caption.\" Readers who are cooking need to find their place fast and see what a step looks like. Facts about where oats grow or other foods do not help them follow the steps."
    },
    {
      id: "SK-SS1b-S05",
      type: "order",
      points: 2,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: [],
      like: ["SK-SS1b-C05"],
      prompt: "Rosa is teaching a friend to make toast. Put her steps in the best order.",
      steps: [
        "Put a slice of bread in the toaster.",
        "Push the lever down.",
        "Wait until the toast pops up.",
        "Spread butter on the warm toast."
      ],
      clue: "In a how-to, each step builds on the steps before it. Ask which step has to happen before the others can.",
      hints: [
        "In a how-to, each step builds on the steps before it. Ask which step has to happen before the others can.",
        "Look at what each step needs. Ask what you must already have before you can do it.",
        "Spreading butter needs toast to spread it on, so it comes after the toast is ready. Now order the other three steps."
      ],
      how: [
        "There must be bread in the toaster before anything can happen to it.",
        "Then the lever goes down, and the reader waits for the toast to pop up.",
        "Only when the toast is ready can the butter go on.",
        "The order is: put bread in, push the lever, wait for the pop, spread butter."
      ],
      why: "The order is: put a slice of bread in the toaster; push the lever down; wait until the toast pops up; spread butter on the warm toast. Each step needs the one before it."
    },
    {
      id: "SK-SS1b-S06",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: ["p7"],
      like: ["SK-SS1b-C06"],
      prompt: "Nora wants a heading for each of her two long sections. Choose the best heading for each.",
      text: "Above sentences 3 to 5: {0}. Above sentences 6 to 8: {1}.",
      slots: [
        {
          options: ["Fun for Little Kids", "Foam Noodles", "The Last Saturday in June"],
          answer: 0
        },
        {
          options: ["Fun for Bigger Kids", "A Lifeguard on Duty", "Splash Day Is Free"],
          answer: 0
        }
      ],
      clue: "A heading names what a whole section is about, so it must fit every sentence in that section.",
      hints: [
        "A heading names what a whole section is about, so it must fit every sentence in that section.",
        "Read sentences 3 to 5 as one group, then sentences 6 to 8 as another. Say who each group is about.",
        "One sentence about foam noodles, or one about a lifeguard, is not enough to name a section. A heading must fit all of the sentences under it."
      ],
      how: [
        "Sentences 3 to 5 tell what little kids can do.",
        "Sentences 6 to 8 tell what bigger kids can do.",
        "The answers are \"Fun for Little Kids\" and \"Fun for Bigger Kids.\"",
        "Foam noodles and a lifeguard each fit only one sentence, and the date and the cost are in the first paragraph."
      ],
      why: "The answers are Fun for Little Kids and Fun for Bigger Kids. Sentences 3 to 5 are about little kids, and sentences 6 to 8 are about bigger kids. Foam noodles and a lifeguard each fit only one sentence."
    },
    {
      id: "SK-SS1b-S07",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: ["p7"],
      like: ["SK-SS1b-C07"],
      prompt: "Nora wants to add a closing sentence after sentence 8. Which sentence is best?",
      choices: [
        { text: "Come to Splash Day and cool off with your whole family!", correct: true },
        { text: "Next, the lifeguard will blow a whistle to start the big races." },
        { text: "Foam noodles are long, soft tubes that float well on the water." },
        { text: "Many kids in our town learn to swim before they finish school." }
      ],
      clue: "A closing comes at the very end. Ask what it should do for the reader after they have read everything.",
      hints: [
        "A closing comes at the very end. Ask what it should do for the reader after they have read everything.",
        "Read all three paragraphs, not only the last one. Ask what the entire piece is for.",
        "Sentence 7 already tells about the lifeguard, so the closing should not bring up the lifeguard again. Test the other three against what the whole piece is for."
      ],
      how: [
        "A closing wraps up the whole piece.",
        "Nora's piece invites families to an event.",
        "The answer is \"Come to Splash Day and cool off with your whole family!\"",
        "The races sentence adds a new event, and the noodles and swimming sentences add new facts."
      ],
      why: "The answer is \"Come to Splash Day and cool off with your whole family!\" It wraps up the whole piece and speaks to the readers. The other sentences add a new event or new facts instead of ending the piece."
    },
    {
      id: "SK-SS1b-S08",
      type: "hottext",
      points: 1,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: [],
      pick: 1,
      like: ["SK-SS1b-C08"],
      prompt: "Nora wants to put this photo on her flyer. Select the sentence that would make the best caption.",
      stem: [
        "A photo from last year's Splash Day shows two children sliding down a red slide into a shallow pool."
      ],
      options: [
        "Two kids splash down a slide at last year's Splash Day.",
        "Splash Day is on the last Saturday in June.",
        "Slides are made of smooth, hard plastic.",
        "Swimming pools are cleaned every week."
      ],
      answer: [0],
      clue: "A caption sits next to a picture and tells what the picture shows.",
      hints: [
        "A caption sits next to a picture and tells what the picture shows.",
        "Read the sentence about the photo. Then read each choice and ask: does it tell about this picture, or about something else?",
        "The date of the event is useful on a flyer, but it does not tell what this photo shows. Check the other three the same way."
      ],
      how: [
        "A caption tells what is happening in the picture.",
        "The photo shows two children sliding down a slide into a pool.",
        "The answer is \"Two kids splash down a slide at last year's Splash Day.\"",
        "The others are facts about the date, slides or pools, not about this photo."
      ],
      why: "The answer is \"Two kids splash down a slide at last year's Splash Day.\" A caption tells what the picture shows. The other sentences give the date or facts about slides and pools, not about this photo."
    },
    {
      id: "SK-SS1b-S09",
      type: "ms",
      points: 2,
      dok: 3,
      std: ["3.T.SS.1.b"],
      passages: ["p6", "p7"],
      pick: 2,
      like: ["SK-SS1b-C09"],
      prompt: "Think about Zane's oatmeal draft and Nora's Splash Day draft. Which TWO sentences tell how their plans are different?",
      choices: [
        {
          text: "Zane's draft puts steps in the order a reader does them, but Nora's draft groups facts into sections.",
          correct: true
        },
        {
          text: "Zane writes for readers who will cook as they read, but Nora writes for families who want facts about an event.",
          correct: true
        },
        { text: "Nora's draft has a numbered list, but Zane's draft does not." },
        { text: "Zane's draft compares two foods, but Nora's draft tells a story." },
        { text: "Nora's draft uses the words first, next and then, but Zane's draft does not." }
      ],
      clue: "To compare, find what is true about one draft, then check the other draft. A statement has to be true about both drafts.",
      hints: [
        "To compare, find what is true about one draft, then check the other draft. A statement has to be true about both drafts.",
        "Choose two. Look at how each draft is organized and who each draft is written for.",
        "Neither draft has a numbered list. Check the other four statements against both drafts the same way."
      ],
      how: [
        "Zane's draft is a how-to with steps in order for a person who is cooking.",
        "Nora's draft tells facts about an event, in sections, for families.",
        "The answers are \"Zane's draft puts steps in the order a reader does them, but Nora's draft groups facts into sections\" and \"Zane writes for readers who will cook as they read, but Nora writes for families who want facts about an event.\"",
        "Neither draft has a numbered list, compares two foods or tells a story, and neither uses the words first, next and then."
      ],
      why: "The answers are \"Zane's draft puts steps in the order a reader does them, but Nora's draft groups facts into sections\" and \"Zane writes for readers who will cook as they read, but Nora writes for families who want facts about an event.\" Neither draft has a numbered list, compares two foods or tells a story, and neither uses first, next and then."
    },
    {
      id: "SK-SS1b-S10",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: [],
      like: ["SK-SS1b-C10"],
      prompt: "Complete Ana's plan. Choose the best answer for each blank.",
      stem: [
        "Ms. Reyes asks Ana to make a page that shows how a drum and a guitar are alike and different. Classmates will study the page before a music quiz."
      ],
      text: "Ana's job is to show how two things are alike and different, so her piece should use {0}. Her classmates will study it, so {1} would help them most.",
      slots: [
        {
          options: [
            "a compare plan with a section for each",
            "steps in order",
            "a plan for explaining why something happens"
          ],
          answer: 0
        },
        {
          options: ["a heading above each section", "a numbered list of steps", "a long paragraph with no breaks"],
          answer: 0
        }
      ],
      clue: "First name the writer's job. The job picks the plan. Then think about how the reader will use the page.",
      hints: [
        "First name the writer's job. The job picks the plan. Then think about how the reader will use the page.",
        "Read the sentence again. The first blank is about the job, and the second blank is about the reader.",
        "Ana is not teaching how to do something, so one choice for the first blank does not match her job."
      ],
      how: [
        "Ana's job is to show how two things are alike and different, so the plan is compare, with a section for each.",
        "Classmates will study the page, so they need to find each part quickly.",
        "The answers are \"a compare plan with a section for each\" and \"a heading above each section.\"",
        "Steps and a why plan do other jobs, and a long paragraph with no breaks is hard to study."
      ],
      why: "The answers are a compare plan with a section for each, and a heading above each section. Ana is comparing two things, so each gets a section, and headings help classmates find each part. Steps and a why plan do other jobs."
    },
    {
      id: "SK-SS1b-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: ["p8"],
      pick: 1,
      like: ["SK-SS1b-C11"],
      prompt: "One sentence in Omar's draft is in the wrong paragraph. Select that sentence.",
      targets: ["p8:1:2", "p8:2:1", "p8:2:2", "p8:2:3", "p8:3:1", "p8:3:2", "p8:3:3"],
      answer: ["p8:2:3"],
      clue: "A section stays on one idea. Find the idea of each paragraph, then look for a sentence that is about a different idea.",
      hints: [
        "A section stays on one idea. Find the idea of each paragraph, then look for a sentence that is about a different idea.",
        "Say in a few words what each paragraph is about. Then ask of each sentence: does it belong with its paragraph?",
        "A paper book never needing to be charged is about paper books, and it sits in the paper-books paragraph. Check the other sentences against their own paragraphs."
      ],
      how: [
        "Paragraph 2 begins with paper books, and paragraph 3 is about tablets.",
        "A book never needing a charge and flipping back to a page are about paper books.",
        "Sentence 5 says a tablet can hold hundreds of books. That is about tablets, so it is in the wrong paragraph.",
        "The answer is \"A tablet can hold hundreds of books at one time.\""
      ],
      why: "The answer is \"A tablet can hold hundreds of books at one time.\" The second paragraph is about paper books, but this sentence is about tablets, so it belongs in the third paragraph."
    },
    {
      id: "SK-SS1b-S12",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.T.SS.1.b"],
      passages: ["p8"],
      like: ["SK-SS1b-C12"],
      prompt: "Why is a compare plan a good fit for Omar's piece?",
      choices: [
        { text: "His readers want to see how paper books and tablets are alike and different.", correct: true },
        { text: "His readers need the steps for turning on a tablet, in order." },
        { text: "His readers need to learn what caused books to be invented." },
        { text: "His readers need a picture to go with every sentence in the draft." }
      ],
      clue: "A plan should fit what the reader needs from the piece. Ask what Omar wants his reader to understand.",
      hints: [
        "A plan should fit what the reader needs from the piece. Ask what Omar wants his reader to understand.",
        "Read the whole draft and notice what each paragraph does for the reader.",
        "The draft is not a list of steps, so a plan for steps in order would not fit. Test the other choices against what Omar's paragraphs do."
      ],
      how: [
        "Look at what each paragraph does: one gives two ways to read, one tells about books and one tells about tablets.",
        "A compare plan gives each thing its own section.",
        "The answer is \"His readers want to see how paper books and tablets are alike and different.\"",
        "The draft has no steps, never tells how books were invented, and does not need a picture for every sentence."
      ],
      why: "The answer is \"His readers want to see how paper books and tablets are alike and different.\" Omar gives each way of reading its own paragraph. The draft has no steps, does not tell how books began, and does not need a picture for every sentence."
    },
    {
      id: "SK-SS1b-S13",
      type: "match",
      points: 2,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: [],
      like: ["SK-SS1b-C13"],
      prompt: "Match each reader to the feature that would help that reader most. Use each feature once.",
      cols: ["a large title that names the event", "a photo with a caption", "headings above short sections"],
      rows: [
        { text: "a driver who passes a sign for the school play and reads it for only a second", answer: 0 },
        { text: "a reader who has never seen a tapir", answer: 1 },
        { text: "a reader who wants only the facts about food on a long page about owls", answer: 2 }
      ],
      clue: "Think about what each reader needs and how much time or knowledge they have. Then ask which feature gives that help.",
      hints: [
        "Think about what each reader needs and how much time or knowledge they have. Then ask which feature gives that help.",
        "Start with the row you are most sure about, then use each feature only once.",
        "A reader who has never seen a tapir needs to see one. Match the other two rows after that."
      ],
      how: [
        "The driver reads for only a second, so the biggest words must say what the sign is about.",
        "A reader who has never seen a tapir needs to see one, and a caption tells what the photo shows.",
        "A reader who wants only one part of a long page can use headings to find that part.",
        "The matches are: driver with the large title, tapir reader with the photo and caption, food-facts reader with the headings."
      ],
      why: "The driver needs a large title that names the event. The reader who has never seen a tapir needs a photo with a caption. The reader who wants only the food facts needs headings above short sections to find that part."
    },
    {
      id: "SK-SS1b-S14",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.T.SS.1.b"],
      passages: [],
      like: ["SK-SS1b-C14"],
      prompt: "Which plan fits Luis's job and his readers best?",
      stem: [
        "Luis wants to write a page for his class that helps them decide whether to visit the zoo or the science museum on a class trip."
      ],
      choices: [
        {
          text: "Compare the two places, with one section for the zoo and one section for the museum.",
          correct: true
        },
        { text: "List the steps for packing a lunch for the trip, in the order a person does them." },
        { text: "Explain what caused the zoo and the museum to be built, with a heading for each cause." },
        { text: "Tell one story about a trip Luis took, and leave out headings and sections." }
      ],
      clue: "First name the writer's job. Is he teaching how to do something, comparing, or explaining why something happens?",
      hints: [
        "First name the writer's job. Is he teaching how to do something, comparing, or explaining why something happens?",
        "Read the four plans slowly. For each one, ask what question the finished page would answer for Luis's classmates.",
        "A page of packing steps would teach how to pack a lunch, but that is not Luis's job. Test the other three plans."
      ],
      how: [
        "Luis's classmates must choose between two places, so they need to see how the places are alike and different.",
        "A section for each place lets them look at one place at a time.",
        "The answer is \"Compare the two places, with one section for the zoo and one section for the museum.\"",
        "Packing steps, the causes of building and one story do not help classmates choose."
      ],
      why: "The answer is \"Compare the two places, with one section for the zoo and one section for the museum.\" Classmates choosing between two places need to see how they are alike and different. Packing steps, why the places were built and one story do not help them choose."
    },
    {
      id: "SK-SS1b-S15",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.T.SS.1.b"],
      passages: [],
      like: ["SK-SS1b-C15"],
      prompt: "Kai wants to add a closing after sentence 4. Which sentence is best?",
      stem: [
        "(1) Dribbling is how you move with a basketball.",
        "(2) First, spread your fingers wide.",
        "(3) Next, push the ball down with your fingertips, not your palm.",
        "(4) Then let the ball bounce back up to your hand."
      ],
      choices: [
        { text: "Practice a little each day, and soon you can dribble without looking at the ball.", correct: true },
        { text: "Next, pick up a second ball and try to bounce both at the same time." },
        { text: "Basketballs are usually orange and have small bumps all over them." },
        { text: "Some players dribble with their left hand to try something new." }
      ],
      clue: "A closing wraps up the whole piece.",
      hints: [
        "A closing wraps up the whole piece.",
        "Ask what a reader should feel or be ready to do after finishing these steps.",
        "Bouncing two balls at once would add one more step, but the steps are already finished by sentence 4. Test the other three against what a closing does."
      ],
      how: [
        "A closing wraps up a how-to after the steps are done.",
        "By sentence 4 the reader has done every step, so the piece is ready to end.",
        "The answer is \"Practice a little each day, and soon you can dribble without looking at the ball.\"",
        "The other sentences add another step or new facts, so they do not wrap up."
      ],
      why: "The answer is \"Practice a little each day, and soon you can dribble without looking at the ball.\" It wraps up the how-to and encourages the reader. The sentence about two balls adds a step, and the sentences about the ball and the left hand add new facts."
    }
  ],
  addons: {
    "SK-SS1b-P1": {
      hints: [
        "How-to steps must go in the order the reader does them. Picture yourself doing each step with a real pinecone.",
        "Look at the sentences that tell what to put on the pinecone. Ask which one has to be done before the other.",
        "Sentence 7 tells what happens after the feeder is hung, so it already belongs near the end. Check the other three changes."
      ],
      how: [
        "Picture doing the steps. After the string is tied, you must put something sticky on the pinecone.",
        "Birdseed will not stick to a bare pinecone, so the peanut butter has to go on before the pinecone is rolled in seed.",
        "The answer is \"Switch sentences 4 and 5 so the peanut butter goes on first.\"",
        "The first step (tie the string) and the last step (hang the feeder) are already in the right places."
      ],
      misconception: "A common mix-up is moving a sentence that is already in the right place. Check what each step needs before it."
    },
    "SK-SS1b-P2": {
      hints: [
        "A heading names what a whole section is about, so it must fit every sentence in that section.",
        "Read only sentences 3 through 6. Ask what those four sentences have in common.",
        "Sentences 3 to 6 do not list supplies, so a heading about supplies does not fit them. Check the other three against what the four sentences share."
      ],
      how: [
        "Sentences 3, 4, 5 and 6 each tell the reader to do something to the feeder.",
        "A heading for them should name making the feeder, in steps.",
        "The answer is \"Making the Feeder Step by Step.\"",
        "The list of supplies is in sentence 2, and the other headings are about birds, not the steps."
      ],
      misconception: "A common mix-up is choosing a heading about the topic of the whole piece instead of the part under the heading."
    },
    "SK-SS1b-P3": {
      hints: [
        "Choose a feature by the problem the reader has. Ask what job each feature does.",
        "Say what each choice does for a reader: shows order, names a part, names the whole piece, or shows what something looks like.",
        "A bold title names the whole piece. It tells the reader what the piece is called, not what the feeder looks like. Check the other three."
      ],
      how: [
        "The reader's problem is that they have never seen a pinecone feeder.",
        "A photo lets them see one, and a caption tells what it shows.",
        "The answer is \"a photo of a finished feeder with a caption.\"",
        "A numbered list shows order, and a heading or title names a part, so none of those shows the feeder."
      ],
      misconception: "A common mix-up is choosing a feature that helps with the steps when the reader's problem is seeing the finished feeder."
    },
    "SK-SS1b-P4": {
      hints: [
        "A closing wraps up the whole piece. Ask what idea the whole piece is about.",
        "Read the opening sentence and the last two sentences. Ask what the reader should remember at the end.",
        "A sentence that starts with Next adds one more step. Check the other three against what a closing does."
      ],
      how: [
        "A closing wraps up the whole piece and goes back to the main idea.",
        "Sentence 1 says a pinecone feeder is an easy way to help birds when it is cold.",
        "The answer is \"A pinecone feeder is a simple way to help hungry birds all winter.\"",
        "The others add a new step or a new detail about cardinals or other feeders, so they do not close the piece."
      ],
      misconception: "A common mix-up is choosing a sentence with a new fact. A closing wraps up; it does not add."
    },
    "SK-SS1b-P5": {
      hints: [
        "For each job, ask what the writer is doing for the reader: teaching steps, showing alike and different, or telling why.",
        "Start with the row you are most sure about. Use each plan once.",
        "Telling why a pond dried up asks for a reason, not for steps or a side-by-side. Match the other two rows after that."
      ],
      how: [
        "Folding a paper boat teaches how to do something, so the plan is steps in order.",
        "Frogs and toads are two things side by side, so the plan is compare.",
        "Why a pond dried up asks for a reason, so the plan is cause and effect."
      ]
    }
  },
/* B4b:core:end */
  test: [
    { id: "SK-SS1b-T7", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Priya wants to add a paragraph to help readers choose between the Pine Hill Library and their school library. Which plan fits that job best?",
      choices: [
        { text: "Compare them: tell what both libraries have, then what only one of them has.", correct: true },
        { text: "List the steps for walking from the school to the town library, in order." },
        { text: "Explain what caused the town to build its library many years ago." },
        { text: "Tell a story about a day when Priya lost a book at her school." }
      ],
      clue: "Think about what a reader needs to know to choose between two places.",
      why: "The answer is \"Compare them: tell what both libraries have, then what only one of them has.\" To choose between two places, readers need to see how they are alike and different, so a compare plan fits. Steps in order fit a how-to, a cause-and-effect plan tells why something happened, and a story about a lost book does not help readers choose." },
    { id: "SK-SS1b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Priya wants to add a heading above sentences 6 through 9. Which heading fits best?",
      choices: [
        { text: "Fun Events for Kids", correct: true },
        { text: "Things You Can Borrow" },
        { text: "How to Get a Library Card" },
        { text: "When the Library Is Open" }
      ],
      clue: "Look at the first sentence of that part. It tells what the whole part is mostly about.",
      why: "The answer is \"Fun Events for Kids.\" Sentence 6 says the library plans special activities, and sentences 7 to 9 tell about three of them: story time, the block club and the summer contest. Borrowing is the topic of sentences 3 to 5." },
    { id: "SK-SS1b-T3", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Priya wants to add a photo of the Saturday story time. Which caption would best help her reader?",
      choices: [
        { text: "A librarian reads a story to kids on a Saturday morning.", correct: true },
        { text: "Kids can check out puzzles and board games here." },
        { text: "The summer reading contest gives out fun prizes." },
        { text: "The Pine Hill Library is open six days a week." }
      ],
      clue: "A caption tells what is happening in the picture. Picture the photo, then find the words that match it.",
      why: "The answer is \"A librarian reads a story to kids on a Saturday morning.\" It tells exactly what the photo of story time shows. The other captions are true about the library but do not match this picture." },
    { id: "SK-SS1b-T4", type: "order", points: 2, dok: 2, passages: ["p2"],
      prompt: "Priya is writing a new paragraph that tells how to get a library card. Put her sentences in the best order.",
      steps: [
        "Getting your own library card is easy.",
        "Just bring a grown-up with you to the front desk.",
        "The librarian will give you a short form to fill out.",
        "When the form is done, the librarian hands you your card.",
        "Then you are ready to borrow your very first book!"
      ],
      clue: "Start with the sentence that tells what the paragraph is about. Then picture yourself at the library. What has to happen before each next step can happen?",
      why: "The order is: the card is easy to get, bring a grown-up to the desk, get a short form, receive your card when the form is done, and then borrow your first book. The topic sentence comes first, and each step must happen before the next one can." },
    { id: "SK-SS1b-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why did Priya put her ideas into separate paragraphs?",
      choices: [
        { text: "so each paragraph tells about one part of the library", correct: true },
        { text: "so the steps are in the order the reader does them" },
        { text: "so she could compare two different town libraries" },
        { text: "so every paragraph would be the very same length" }
      ],
      clue: "Look at the middle of the draft. What is each paragraph mostly about?",
      why: "The answer is so each paragraph tells about one part of the library. One paragraph tells what kids can borrow, and another tells about events. That makes the draft easy for a reader to follow." },
    { id: "SK-SS1b-T6", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Priya will turn her draft into a poster for kindergarten children who are just learning to read. Which change would help THESE readers most?",
      choices: [
        { text: "a big picture for each thing kids can do there, with one or two easy words under it", correct: true },
        { text: "a chart that lists the hours the library is open on each day of the week" },
        { text: "a long paragraph that tells how and when the library was first built" },
        { text: "a map that shows which shelves hold which kinds of books" }
      ],
      clue: "Think about who will read the poster. What can a child who is just learning to read use without help?",
      why: "The answer is a big picture for each thing kids can do there, with one or two easy words under it. Children who are just learning to read can understand pictures and a few easy words. A chart of hours could help a grown-up plan a visit, and a long paragraph or a shelf map could help older readers, but those need too much reading for these young readers." }
  ]
});

/* ---------- 3.T.SS.1.c Linking words ----------
   Words taught: because, since (reason); also (adds an idea); although (shows a difference);
   for example (gives an example). */
PP.addLesson({
  code: "3.T.SS.1.c",
  title: "Linking words: because, also, although, since and for example",
  teach: {
    big: "Linking words join ideas and show how they connect: because and since give a reason, also adds more, although shows a surprise, and for example gives an example.",
    points: [
      "Because and since tell why. \"We stayed inside since it was raining.\"",
      "Also adds another idea of the same kind. \"Dogs are friendly. They are also loyal.\"",
      "Although joins two ideas that do not seem to go together. \"Although it was cold, we went swimming.\"",
      "For example comes before an example of the idea you just told. \"Some animals sleep all winter. For example, many bats sleep in caves.\"",
      "To choose a linking word, read both ideas and ask how they connect. Then try the word and see if the sentence makes sense."
    ],
    words: [
      { term: "linking word", means: "a word that joins ideas and shows how they connect" },
      { term: "reason", means: "why something happens or why you think something" }
    ],
    example: {
      label: "Before and after",
      lines: ["Before: Hens make good pets. They lay eggs. They eat bugs in the garden.", "After: Hens make good pets because they lay eggs. They also eat bugs in the garden."],
      note: "Because shows that laying eggs is a reason hens make good pets. Also shows that eating bugs is one more reason. The ideas now connect."
    },
    tip: "On the test, you may choose the best word to join two sentences or to begin a sentence in a student's draft. Try each choice in the sentence and ask: does it show the right connection?"
  },
  learn: [
    {
      show: ["Mia stayed inside ____ it was raining hard."],
      ask: "Which word fits best: because, although or for example?",
      steps: [
        "Read both ideas: Mia stayed inside. It was raining hard.",
        "Ask how they connect. The rain is why Mia stayed inside. That is a reason.",
        "A reason needs because or since. Try it: Mia stayed inside because it was raining hard. It makes sense."
      ],
      answer: "Because fits best: \"Mia stayed inside because it was raining hard.\""
    },
    {
      show: ["____ the hill was very steep, Ben rode his bike all the way to the top."],
      ask: "Which word fits best: Because, Although or Also?",
      steps: [
        "Read both ideas: The hill was very steep. Ben rode all the way to the top.",
        "A steep hill is hard to ride up, so you might expect Ben to stop. But he did not. The ideas do not seem to go together.",
        "When the second idea is a surprise, use although."
      ],
      answer: "Although fits best: \"Although the hill was very steep, Ben rode his bike all the way to the top.\""
    },
    {
      show: ["Many animals sleep through the cold winter. ____, some bats sleep for months in caves."],
      ask: "Which words fit best: Since, For example or Although?",
      steps: [
        "Read the first sentence. It tells a big idea: many animals sleep through winter.",
        "Read the second sentence. Bats are one of those animals. It is an example of the big idea.",
        "Use for example to show that a sentence gives an example."
      ],
      answer: "For example fits best: \"For example, some bats sleep for months in caves.\""
    }
  ],
  write: {
    prompt: "Write 4 to 6 sentences about your favorite season. Use at least three of these linking words: because, since, also, although, for example.",
    checklist: [
      "I used because or since to give a reason.",
      "I used also to add another idea.",
      "I used although to show a surprise or a difference.",
      "I used for example to give an example.",
      "I read each sentence to check that the linking word makes sense."
    ],
    rows: 6
  },
  parent: "Play \"finish my sentence\": say \"I like pancakes because…\", \"Although it is late…\" or \"I like many fruits. For example…\" and let your child finish it. Then switch roles.",
  passages: [
    { id: "p1", draft: true, title: "Why I Love Riding My Bike", byline: "Sofia's first draft", genre: "Student draft (opinion)",
      paragraphs: [
        ["(1) Riding my bike is my favorite thing to do after school.", "(2) I like riding my bike so much.", "(3) It makes me feel free, like a bird in the sky."],
        ["(4) Biking is good exercise for my whole body.", "(5) My legs get a little stronger every single week."],
        ["(6) Biking is fun to do with my friends.", "(7) On weekends, we ride our bikes to Willow Park together and race around the pond."],
        ["(8) It rained hard last Saturday morning.", "(9) We still rode to the park in our raincoats and splashed through the puddles."],
        ["(10) Biking is a great way to have fun and stay healthy at the same time."]
      ] },
    { id: "p2", draft: true, title: "Busy Bees", byline: "Daniel's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) Bees are small insects, but they do a very big job."],
        ["(2) Bees help many plants make fruit.", "(3) They carry pollen from one flower to another."],
        ["(4) Many foods we eat need help from bees.", "(5) Apples, blueberries and peaches grow from flowers that bees visit."],
        ["(6) Bees also make honey.", "(7) People like to spread the sweet honey on toast or stir it into hot tea."],
        ["(8) Although many people are afraid of bees, most bees will not sting unless they feel scared or in danger."],
        ["(9) The next time you see a bee buzzing by, remember how much it helps us."]
      ] }
  ],
  practice: [
    { id: "SK-SS1c-P1", type: "dropdown", points: 1, dok: 1, passages: ["p1"],
      prompt: "Sofia wants to join sentences 2 and 3. Choose the word that best completes the new sentence.",
      text: "I like riding my bike so much {0} it makes me feel free, like a bird in the sky.",
      slots: [{ options: ["because", "although", "for example"], answer: 0 }],
      clue: "Ask how the two ideas connect. Does feeling free tell why Sofia likes riding, show a surprise, or give an example?",
      why: "The answer is because. Feeling free is the reason Sofia likes riding her bike, and because tells a reason." },
    { id: "SK-SS1c-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which is the best way to join sentences 8 and 9?",
      choices: [
        { text: "Although it rained hard last Saturday, we still rode to the park.", correct: true },
        { text: "Because it rained hard last Saturday, we still rode to the park." },
        { text: "Since it rained hard last Saturday, we still rode to the park." },
        { text: "For example, it rained hard last Saturday, so we rode to the park." }
      ],
      clue: "Would most people go for a bike ride in hard rain? If the second idea is a surprise, which linking word shows that?",
      why: "The answer is \"Although it rained hard last Saturday, we still rode to the park.\" Riding in hard rain is a surprise, and although joins two ideas that do not seem to go together. The rain was not the reason they rode, so because and since do not fit." },
    { id: "SK-SS1c-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Sofia wants to add a sentence after sentence 5 that gives an example. Which sentence is best?",
      choices: [
        { text: "For example, I can now pedal all the way up Oak Street hill.", correct: true },
        { text: "Although my legs are strong, I can pedal up Oak Street hill." },
        { text: "Since it was sunny, I rode my bike to school today." },
        { text: "Also, my sister has a bike with a bright green bell." }
      ],
      clue: "Reread sentence 5. The new sentence must show one example of that idea, and its linking word must do the right job.",
      why: "The answer is \"For example, I can now pedal all the way up Oak Street hill.\" Pedaling up a hill is one example of Sofia's legs getting stronger. Although does not fit, because strong legs climbing a hill is no surprise. The sunny day and the sister's bell are not about getting stronger." },
    { id: "SK-SS1c-P4", type: "dropdown", points: 1, dok: 1, passages: ["p1"],
      prompt: "Choose the word or words that best connect sentence 6 to the paragraph before it.",
      text: "{0}, biking is fun to do with my friends.",
      slots: [{ options: ["Also", "For example", "Instead"], answer: 0 }],
      clue: "Reread sentences 4 and 5, then sentence 6. Is being fun with friends one example of exercise, something in place of exercise, or a whole new idea?",
      why: "The answer is Also. Sentence 4 says biking is good exercise, and sentence 6 gives a second, different reason Sofia likes it, so also fits. Fun with friends is not an example of exercise, and it does not replace exercise, so For example and Instead do not fit." },
    { id: "SK-SS1c-P5", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Match each linking word to the job it does.",
      cols: ["Gives a reason", "Adds another idea", "Shows a surprise", "Gives an example"],
      rows: [
        { text: "because", answer: 0 },
        { text: "since", answer: 0 },
        { text: "also", answer: 1 },
        { text: "although", answer: 2 },
        { text: "for example", answer: 3 }
      ],
      clue: "Put each word in a sentence you make up. Then ask what the word is doing in your sentence.",
      why: "Because and since give a reason. Also adds another idea. Although shows a surprise, two ideas that do not seem to go together. For example gives an example." },
    { id: "SK-SS1c-P6", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words could fill the blank so the sentence makes sense?",
      stem: "We wore our warm coats ____ it was cold outside.",
      choices: [
        { text: "because", correct: true },
        { text: "since", correct: true },
        { text: "although" },
        { text: "also" },
        { text: "for example" }
      ],
      clue: "Is the cold weather the reason for the coats, a surprise, or an example? Find every word that does that job.",
      why: "The answers are because and since. The cold is the reason for wearing coats, and both words tell a reason. Although would mean the coats were a surprise, which does not make sense." }
  ],
  test: [
    { id: "SK-SS1c-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Daniel wants to begin one sentence with the words For example. Select the sentence where For example fits best.",
      targets: ["p2:2:2", "p2:3:2", "p2:4:1", "p2:6:1"],
      answer: ["p2:3:2"], pick: 1,
      clue: "For example must come right after a big idea, and the new sentence must name some examples of it. Read the sentence before each choice.",
      why: "The answer is sentence 5, \"Apples, blueberries and peaches grow from flowers that bees visit.\" Sentence 4 says many foods need bees, and sentence 5 names some of those foods, so it is an example. Sentence 3 tells how bees help, not an example, and sentence 6 already has the linking word also." },
    { id: "SK-SS1c-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "In sentence 8, why does Daniel use the word although?",
      choices: [
        { text: "to show that the two ideas do not seem to go together", correct: true },
        { text: "to give the reason that people are afraid of bees" },
        { text: "to add one more way that bees help people" },
        { text: "to give an example of a time a bee stung" }
      ],
      clue: "Read the two parts of sentence 8. If people are afraid of bees, what might you expect bees to do? What does the sentence say instead?",
      why: "The answer is to show that the two ideas do not seem to go together. You might expect bees to sting often, since people fear them, but most bees will not sting. Although joins those two ideas. It does not give a reason, add a way bees help, or give an example." },
    { id: "SK-SS1c-T3", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the linking word that best completes each sentence.",
      text: "Lena packed an umbrella {0} the sky looked gray. {1} the rain never came, she was glad to be ready.",
      slots: [
        { options: ["because", "although", "for example"], answer: 0 },
        { options: ["Although", "Because", "Also"], answer: 0 }
      ],
      clue: "For each blank, ask: Is this a reason, or is it a surprise?",
      why: "The first answer is because: the gray sky is the reason Lena packed an umbrella. The second answer is Although: she was glad to be ready even though the rain never came, which is a surprise." },
    { id: "SK-SS1c-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO sentences use a linking word correctly?",
      choices: [
        { text: "Bees help flowers make fruit, and they also make honey.", correct: true },
        { text: "Although bees are small, they do very important work.", correct: true },
        { text: "Bees visit many flowers, for example they are busy." },
        { text: "Since bees are scary, they make sweet honey." },
        { text: "Bees help plants grow because peaches are sweet." }
      ],
      clue: "Read each sentence and ask what job its linking word is doing. Does that job make sense with the ideas it joins?",
      why: "The answers are \"Bees help flowers make fruit, and they also make honey\" and \"Although bees are small, they do very important work.\" Also adds a second job bees do, and although shows a surprise: small bees do a big job. In the others, the reason or example does not match the idea." },
    { id: "SK-SS1c-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Daniel wants to join sentences 2 and 3 to show which idea is the reason. Which new sentence is best?",
      choices: [
        { text: "Bees help many plants make fruit since they carry pollen from flower to flower.", correct: true },
        { text: "Bees help many plants make fruit, so they carry pollen from flower to flower." },
        { text: "Although bees help many plants make fruit, they carry pollen from flower to flower." },
        { text: "Bees help many plants make fruit, for example they carry pollen from flower to flower." }
      ],
      clue: "Ask which idea causes the other. Does helping plants make bees carry pollen, or does carrying pollen help the plants?",
      why: "The answer is \"Bees help many plants make fruit since they carry pollen from flower to flower.\" Carrying pollen is the reason plants can make fruit, and since points to the reason. The so sentence turns it around, as if helping plants were the reason bees carry pollen." }
  ]
});

/* ---------- 3.T.SS.1.d Paragraphs that stay on one idea ---------- */
PP.addLesson({
  code: "3.T.SS.1.d",
  title: "Paragraphs that stay on one idea",
  teach: {
    big: "A good paragraph is about one main idea: the topic sentence tells the idea, and every other sentence tells more about it.",
    points: [
      "The topic sentence tells what the paragraph is about. It is often the first sentence.",
      "Detail sentences give facts, examples or reasons about that one idea.",
      "A sentence about something else does not belong, even if it uses some of the same words.",
      "When you move to a new idea, start a new paragraph.",
      "A closing sentence can wrap up the idea at the end."
    ],
    words: [
      { term: "paragraph", means: "a group of sentences about one main idea" },
      { term: "topic sentence", means: "the sentence that tells what the paragraph is about" },
      { term: "detail", means: "a sentence that tells more about the main idea" }
    ],
    example: {
      label: "Example",
      lines: ["Our town's fall festival has something for everyone. Little kids can ride ponies and paint pumpkins. Older kids can get lost in the corn maze. Grown-ups enjoy the music and the pie contest."],
      note: "The first sentence is the topic sentence: the festival has something for everyone. Every other sentence names a group of people and what they enjoy. Nothing is off topic."
    },
    tip: "On the test, you may choose the sentence that does not belong, the best topic sentence, or the best detail to add to a paragraph in a student's draft."
  },
  learn: [
    {
      show: ["Cats make great pets. They are quiet and clean. They can stay home alone during the day. My uncle has a red truck. Cats also like to curl up on your lap."],
      ask: "Which sentence does not belong?",
      steps: [
        "Find the topic sentence. \"Cats make great pets\" tells the main idea.",
        "Check each sentence. Does it tell why cats make great pets?",
        "Quiet, clean, staying alone and curling up on your lap all fit. A red truck is not about cats at all."
      ],
      answer: "\"My uncle has a red truck\" does not belong, because it is not about why cats make great pets."
    },
    {
      show: ["____ We built a snowman in the yard. Then we had a snowball fight. Later, we drank hot cocoa by the fire."],
      ask: "Which topic sentence fits best: \"Snow is made of tiny ice crystals,\" \"Our snow day was full of fun\" or \"We built a snowman\"?",
      steps: [
        "Read the details. They tell three fun things done on a snowy day.",
        "A topic sentence must cover all of the details, not just one.",
        "\"We built a snowman\" is only one detail. The ice crystal fact is not about the day at all."
      ],
      answer: "\"Our snow day was full of fun\" fits best, because it covers every detail in the paragraph."
    },
    {
      show: ["Topic sentence: Soccer practice helps our team get better."],
      ask: "Which detail belongs in this paragraph: \"We run drills to make our passes sharper\" or \"My favorite color is green\"?",
      steps: [
        "Read the topic sentence and name the idea: practice helps the team improve.",
        "Ask of each detail: Does it show how practice helps the team?",
        "Running drills to pass better shows the team getting better. A favorite color does not."
      ],
      answer: "\"We run drills to make our passes sharper\" belongs, because it shows how practice helps the team get better."
    }
  ],
  write: {
    prompt: "Write one paragraph about a place you like to visit. Start with a topic sentence, add at least three details, and end with a closing sentence.",
    checklist: [
      "I started with a topic sentence that tells my main idea.",
      "I wrote at least three details about that idea.",
      "I checked that every sentence is about my main idea.",
      "I ended with a closing sentence."
    ],
    rows: 7
  },
  parent: "At dinner, name a topic like \"our kitchen\" or \"weekends\" and take turns saying one sentence about it. If someone drifts off topic, the others call \"Off topic!\" and that person tries again.",
  passages: [
    { id: "p1", draft: true, title: "Amazing Hummingbirds", byline: "Aaliyah's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) Hummingbirds are tiny birds that can do amazing things.", "(2) In Georgia, you can see ruby-throated hummingbirds in the spring and summer."],
        ["(3) Hummingbirds can fly in ways that most birds cannot.", "(4) They can hover in one spot like a tiny helicopter.", "(5) They can even fly backward.", "(6) My grandma has a pretty red bird feeder on her porch."],
        ["(7) Hummingbirds sip sweet nectar from flowers.", "(8) They also catch and eat tiny insects.", "(9) They need to eat many times each day to stay strong."],
        ["(10) These tiny birds are so much fun to watch in the spring and summer."]
      ] },
    { id: "p2", draft: true, title: "Field Day", byline: "Carlos's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) Field Day at Maple Creek Elementary was the best day of the whole school year."],
        ["(2) The morning was full of races.", "(3) First, we hopped across the grass in the sack race.", "(4) Then we raced while carrying eggs on spoons.", "(5) My big brother says the high school has a real track.", "(6) The last race was a relay, and my team won."],
        ["(7) After lunch, we cooled off with water games.", "(8) We tossed water balloons back and forth with partners.", "(9) The teachers sprayed us with garden hoses.", "(10) Everyone was soaked and laughing."],
        ["(11) I can't wait for next year's Field Day!"]
      ] }
  ],
  practice: [
    { id: "SK-SS1d-P1", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read the paragraph that begins with sentence 3. Select the sentence that does not belong in that paragraph.",
      targets: ["p1:2:1", "p1:2:2", "p1:2:3", "p1:2:4"],
      answer: ["p1:2:4"], pick: 1,
      clue: "Sentence 3 is the topic sentence. Check each other sentence: does it tell about how hummingbirds fly?",
      why: "The answer is sentence 6, \"My grandma has a pretty red bird feeder on her porch.\" The paragraph is about the special ways hummingbirds fly. A feeder on a porch is not about flying." },
    { id: "SK-SS1d-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The paragraph that begins with sentence 7 needs a topic sentence. Which sentence should Aaliyah add before sentence 7?",
      choices: [
        { text: "Hummingbirds spend a lot of their time eating.", correct: true },
        { text: "Hummingbirds have long, thin beaks and tongues." },
        { text: "Some birds fly south when the weather gets cold." },
        { text: "Hummingbirds can hover and even fly backward." }
      ],
      clue: "Read sentences 7, 8 and 9. What do all three tell about? The topic sentence must cover all of them.",
      why: "The answer is \"Hummingbirds spend a lot of their time eating.\" Sentences 7 to 9 tell what hummingbirds eat and how often. Beaks are only one body part, and hovering belongs in the paragraph about flying." },
    { id: "SK-SS1d-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which detail would best fit in the paragraph that begins with sentence 3?",
      choices: [
        { text: "Their wings beat so fast that they make a humming sound.", correct: true },
        { text: "They build nests out of soft plant fluff and spider silk." },
        { text: "Some people hang feeders filled with sugar water." },
        { text: "Female hummingbirds usually lay two tiny white eggs." }
      ],
      clue: "Name the main idea of that paragraph first. Then pick the detail that tells more about that idea, not just about hummingbirds in general.",
      why: "The answer is \"Their wings beat so fast that they make a humming sound.\" That paragraph is about how hummingbirds fly, and fast wings are part of flying. Nests, feeders and eggs are true but are not about flying." },
    { id: "SK-SS1d-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "These four sentences come from one paragraph. Match each sentence to the job it does.",
      cols: ["Topic sentence", "Detail", "Does not belong"],
      rows: [
        { text: "The Saturday farmers market is a busy place.", answer: 0 },
        { text: "Farmers sell peaches, beans and fresh eggs.", answer: 1 },
        { text: "Shoppers crowd around every table.", answer: 1 },
        { text: "My cousin just got a new puppy.", answer: 2 }
      ],
      clue: "Find the sentence that names the big idea the others can tell about. Then ask which sentence is about something else.",
      why: "\"The Saturday farmers market is a busy place\" is the topic sentence. The farmers selling food and the shoppers crowding every table are details that show how busy the market is. The cousin's puppy does not belong because it is not about the market." },
    { id: "SK-SS1d-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Read the paragraph. Which TWO sentences do not belong?",
      stem: "Our class garden is busy in the spring. We plant bean and squash seeds in long rows. My favorite food is spaghetti with meatballs. Every morning, two students water the plants. The new swings on the playground are fast. By May, the first green beans are ready to pick.",
      choices: [
        { text: "My favorite food is spaghetti with meatballs.", correct: true },
        { text: "The new swings on the playground are fast.", correct: true },
        { text: "We plant bean and squash seeds in long rows." },
        { text: "Every morning, two students water the plants." },
        { text: "By May, the first green beans are ready to pick." }
      ],
      clue: "The first sentence is the topic sentence. Test each other sentence: is it about the class garden in spring?",
      why: "The answers are \"My favorite food is spaghetti with meatballs\" and \"The new swings on the playground are fast.\" Neither one is about the class garden. Planting, watering and picking beans all tell about the busy garden." }
  ],
  test: [
    { id: "SK-SS1d-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read the paragraph that begins with sentence 2. Select the sentence that does not belong in that paragraph.",
      targets: ["p2:2:1", "p2:2:2", "p2:2:3", "p2:2:4", "p2:2:5"],
      answer: ["p2:2:4"], pick: 1,
      clue: "Find the topic sentence of that paragraph. Then test each sentence: is it about that idea?",
      why: "The answer is sentence 5, \"My big brother says the high school has a real track.\" The paragraph is about the races on Field Day morning. A track sounds like racing, but this sentence is about the high school, not about the races Carlos ran that morning. Sentences 3, 4 and 6 each tell about one Field Day race." },
    { id: "SK-SS1d-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Carlos wants to add a detail to the paragraph that begins with sentence 7. Which sentence fits best?",
      choices: [
        { text: "Some kids ran through a sprinkler set up by the gym.", correct: true },
        { text: "The sack race was much harder than it looked." },
        { text: "Our class ate pizza in the cafeteria for lunch." },
        { text: "My teacher says next year will be even better." }
      ],
      clue: "Name the main idea of that paragraph first. The new detail must tell more about that idea.",
      why: "The answer is \"Some kids ran through a sprinkler set up by the gym.\" That paragraph is about water games after lunch, and a sprinkler is a water game. The sack race belongs with the races, and lunch is not a water game." },
    { id: "SK-SS1d-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is Carlos's whole draft mostly about?",
        choices: [
          { text: "the fun things that happened on Field Day", correct: true },
          { text: "the races Carlos ran in the morning" },
          { text: "the water games the class played after lunch" },
          { text: "the lunch the class ate in the cafeteria" }
        ] },
      partB: { prompt: "Which sentence from the draft best tells the main idea of the whole draft?",
        choices: [
          { text: "\"Field Day at Maple Creek Elementary was the best day of the whole school year.\"", correct: true },
          { text: "\"The morning was full of races.\"" },
          { text: "\"After lunch, we cooled off with water games.\"" },
          { text: "\"I can't wait for next year's Field Day!\"" }
        ] },
      clue: "A whole draft has a main idea too, and each paragraph tells one part of it. Look for the sentence that covers every paragraph, not just one.",
      why: "Part A: the fun things that happened on Field Day. Part B: \"Field Day at Maple Creek Elementary was the best day of the whole school year.\" The races and the water games are each the topic of one paragraph. The opening sentence covers the whole day, so it tells the main idea of the draft." },
    { id: "SK-SS1d-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the paragraph. It is missing a topic sentence. Which sentence would be the best topic sentence?",
      stem: "____ Some of them eat seeds from our feeder. Others peck at bugs on the old oak tree. A few even splash in the birdbath.",
      choices: [
        { text: "Many kinds of birds visit our backyard.", correct: true },
        { text: "Birds have feathers to keep them warm." },
        { text: "My dog likes to chase the squirrels." },
        { text: "Our backyard has a tall oak tree." }
      ],
      clue: "Who is \"them\" in the paragraph? The topic sentence must cover every detail, not just one place in the yard.",
      why: "The answer is \"Many kinds of birds visit our backyard.\" Every detail tells something birds do in the backyard. The oak tree is only one detail, and feathers and the dog are not what the paragraph is about." },
    { id: "SK-SS1d-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Carlos wants to add a new paragraph that tells what happened at the end of the day. Which sentence would be the best topic sentence for it?",
      choices: [
        { text: "When the games were over, everyone met in the gym for awards.", correct: true },
        { text: "We were all tired from running in the hot sun all day." },
        { text: "My friend Eli won a blue ribbon at the awards." },
        { text: "My best friend Eli forgot to bring his water bottle." }
      ],
      clue: "A topic sentence for a new paragraph names the new idea. Which sentence tells what the whole new paragraph will be about?",
      why: "The answer is \"When the games were over, everyone met in the gym for awards.\" It names the big idea of the new paragraph: the awards after all the games. Eli's blue ribbon is one detail that could go inside that paragraph, and the other two sentences are small details." }
  ]
});

/* ---------- 3.T.SS.2.a Similes, metaphors and idioms (reading) ---------- */
PP.addLesson({
  code: "3.T.SS.2.a",
  title: "Similes, metaphors and idioms",
  teach: {
    big: "Authors use special language to help you picture things: a simile compares two different kinds of things with like or as, a metaphor says one thing is a different kind of thing, and an idiom is a saying that means something different from its words.",
    points: [
      "A simile compares two different kinds of things using like or as. \"The lake was as smooth as glass\" means the lake was very smooth and flat.",
      "A metaphor compares without like or as. It says one thing is a different kind of thing. \"The classroom was a zoo\" means the room was loud and wild. But \"The classroom was noisy\" and \"My dog is a good swimmer\" are not metaphors, because they just tell facts.",
      "An idiom is a saying you cannot read word for word. \"It's raining cats and dogs\" means it is raining very hard.",
      "To find the meaning, ask: How are the two things alike? Then use the sentences around it as clues. Last, ask why the author chose it: what does it help you picture or feel? Stories, poems, letters and articles all use figurative language.",
      "Not every like or as makes a simile. \"I like pizza\" does not compare anything, and \"My bike is as big as yours\" compares two things of the same kind."
    ],
    words: [
      { term: "simile", means: "a comparison of two different kinds of things that uses like or as" },
      { term: "metaphor", means: "a comparison that says one thing is a different kind of thing, without like or as" },
      { term: "idiom", means: "a saying that means something different from its words" }
    ],
    example: {
      label: "Example",
      lines: ["When the bell rang, Kenji was as quick as a rabbit. He was out the door before anyone else."],
      note: "\"As quick as a rabbit\" is a simile. It uses as to compare Kenji to a rabbit. Rabbits are fast, so it means Kenji moved very fast. The next sentence proves it."
    },
    tip: "On the test, you may be asked what a phrase means, or to find the sentence with a simile or a metaphor. Look for like or as, then check the clues around the words."
  },
  learn: [
    {
      show: ["The old dog's fur was as soft as a cloud."],
      ask: "What kind of figurative language is this, and what does it mean?",
      steps: [
        "Look for like or as. The sentence says as soft as a cloud, so it is a simile.",
        "Name the two things being compared: the dog's fur and a cloud.",
        "Check that they are different kinds of things. Fur and a cloud are. \"Her fur was as soft as her sister's\" compares two of the same kind of thing, so it would not be a simile.",
        "Ask how they are alike. Clouds look very soft and fluffy."
      ],
      answer: "It is a simile. It means the dog's fur was very soft."
    },
    {
      show: ["After the long hike up the mountain, my legs were noodles."],
      ask: "What kind of figurative language is this, and what does it mean?",
      steps: [
        "Look for like or as. There are none. The sentence says the legs were noodles, so it is a metaphor.",
        "Legs cannot really turn into noodles. Think about how cooked noodles are: floppy and wobbly.",
        "Use the clue: the hike was long, so the legs were tired."
      ],
      answer: "It is a metaphor. It means the speaker's legs felt tired and wobbly after the hike."
    },
    {
      show: ["\"Hold your horses!\" Grandpa said. \"The cookies are still too hot to eat.\""],
      ask: "What does \"hold your horses\" mean here?",
      steps: [
        "There are no horses in this kitchen, so the words do not mean what they say. It is an idiom.",
        "Read the clue: the cookies are still too hot to eat.",
        "Grandpa wants someone to wait before grabbing a cookie."
      ],
      answer: "\"Hold your horses\" is an idiom that means wait and be patient."
    }
  ],
  parent: "Collect sayings you hear this week, like \"a piece of cake\" or \"as busy as a bee.\" Ask your child what each one really means, then draw a silly picture of what the words say if you took them word for word.",
  passages: [
    { id: "p1", title: "The First Swim Meet", genre: "Literary text",
      paragraphs: [
        ["Rosa stood at the edge of the pool with her heart pounding like a drum.", "It was her very first swim meet.", "The water below her looked as cold as ice."],
        ["Her coach, Ms. Ellis, saw Rosa's worried face.", "\"You have butterflies in your stomach,\" Ms. Ellis said with a smile.", "\"That's okay. Everyone does before a race.\""],
        ["The whistle blew, and Rosa dove in.", "She kicked hard.", "Her arms were windmills, spinning round and round.", "She did not look at the other swimmers."],
        ["When Rosa touched the wall, she pulled off her goggles.", "She had come in third place!", "Up in the stands, her little brother was jumping up and down like a bouncing ball."],
        ["On the way home, Rosa held her ribbon tight.", "She was already counting the days until the next meet."]
      ] },
    { id: "p2", title: "Moving Day", genre: "Literary text",
      paragraphs: [
        ["The moving truck rumbled away, and Jamal stood in his new, empty bedroom.", "The bare walls were as white as fresh snow.", "Everything felt strange."],
        ["\"Why the long face?\" asked Dad from the doorway.", "Jamal shrugged.", "\"I don't know anyone here,\" he said quietly."],
        ["That evening, Jamal sat alone on the front steps.", "The sun was a hot orange ball sinking behind the pine trees.", "Then a girl rolled up the sidewalk on a scooter."],
        ["\"I'm Noor,\" she said.", "\"I live next door.\"", "\"Want to ride to the park?\""],
        ["Jamal grabbed his scooter, and the two of them zoomed down the sidewalk like rockets.", "By dinnertime, Jamal was smiling from ear to ear.", "Maybe this new town would not be so bad after all."]
      ] },
    /* PP-004 form B passage: used only by testB. A friendly letter, so form B adds a
       different kind of text (the standard says "a wide variety of texts"). Needs independent review. */
    { id: "p3", title: "A Letter from Camp", genre: "Letter",
      paragraphs: [
        ["Dear Grandpa,"],
        ["Camp Pine Lake is the best place in the world!", "On the first day, I didn't know anyone.", "Then a girl named Lucy told a silly joke about a frog, and that broke the ice.", "Now we are best friends."],
        ["Yesterday, we took canoes out on the lake.", "My canoe wobbled like a bowl of jelly when I climbed in.", "I was sure I would tip over, but I didn't!", "Of all the things we do here, I like the canoes best."],
        ["Our counselor, Jo, is a walking map.", "She never gets lost, and she knows every path through the woods.", "She can even find the trail to the waterfall after dark."],
        ["At night, we sit by the campfire and sing songs.", "The sky is a dark blanket sprinkled with glitter.", "By the time we hit the hay, I am too tired to keep my eyes open."],
        ["I miss you and Grandma.", "I will see you in two weeks!"],
        ["Love,", "Ana"]
      ] },
    /* B1 (expansion 2026-10-22, author b1c): p4 and p5 are used only by core sets 2 and 3.
       Never used by test or testB. NEEDS INDEPENDENT REVIEW. */
    { id: "p4", title: "Beach Morning", byline: "", genre: "Poem",
      lines: [
        ["The ocean is a sleepy cat", "That stretches on the sand.", "It purrs and curls around my feet", "And licks my open hand."],
        ["The gulls are like a recess crowd.", "They squawk and swoop and call.", "They chase each other round and round", "Like kids who chase a ball."],
        ["I like to build a castle here", "With towers in a row.", "A wave rolls in and knocks it flat.", "\"Chin up!\" says Grandpa Joe."],
        ["We build again up by the dunes", "And pat each tower tight.", "It is still standing after lunch,", "And Grandpa says, \"Just right!\""]
      ] },
    { id: "p5", title: "The Green Anole", genre: "Informational text",
      paragraphs: [
        ["If you live in Georgia, you may have spotted a small green lizard on a fence or a porch rail.", "It is called a green anole.", "Sticky pads on its toes help it climb walls and even glass."],
        ["An anole is a little magician.", "On a sunny leaf, its skin is bright green.", "When the air turns cool, or when the lizard feels scared, its skin can turn brown in just a few minutes."],
        ["Anoles are fast hunters.", "An anole sits very still and watches.", "When a fly lands nearby, the lizard shoots forward like a rubber band snapping.", "Then it gulps down its meal."],
        ["A male anole has a pink flap of skin under his chin.", "To warn another male to stay away, he puffs it out and bobs his head up and down.", "The flap is a bright stop sign that says, \"This spot is mine!\""],
        ["Next time you are outside, keep your eyes peeled.", "An anole that has turned brown on a tree trunk can be very hard to spot."]
      ] },
    /* Expansion 2026-10-22 (batch SIM-1): p6 and p7 are used only by similar items. NEEDS INDEPENDENT REVIEW. */
    { id: "p6", title: "Raking Leaves", genre: "Literary text",
      paragraphs: [
        ["On Saturday, Ozzie and his dad raked the leaves in their front yard.", "Red and yellow leaves covered the grass from the porch to the street."],
        ["They worked for hours.", "Ozzie made one big pile, and then another.", "The wind tugged at his hat.", "Soon his arms felt tired, and his nose was cold."],
        ["The sun sank low behind the houses.", "Dad looked at the two piles and rubbed his back.", "\"Let's call it a day,\" he said.", "\"We can finish tomorrow.\""],
        ["Ozzie jumped into the biggest pile with a shout.", "Then they went inside for hot soup, and Mom had the table ready."]
      ] },
    { id: "p7", title: "Swings for the School Yard", genre: "Literary text",
      paragraphs: [
        ["Tess's school needed new swings.", "The old ones had rusted.", "A new set would cost four hundred dollars."],
        ["Tess sold painted rocks at lunch and earned five dollars.", "Her fingers were still sticky with paint.", "She ran to show Ms. Doyle, the school secretary."],
        ["Ms. Doyle smiled.", "\"Thank you, Tess,\" she said.", "\"Five dollars is a drop in the bucket, but it is a good start.\""],
        ["So the whole school joined in.", "Families came to a pancake breakfast, and every class held a sale.", "After two months, the jar was full.", "The new swings went up on the playground, and Tess went first."]
      ] }
  ],
  practice: [
    { id: "SK-SS2a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "In paragraph 1, the author says Rosa's heart was \"pounding like a drum.\" What does this mean?",
      choices: [
        { text: "Her heart was beating hard and fast.", correct: true },
        { text: "Her heart was beating slow and soft." },
        { text: "She heard a drum playing at the pool." },
        { text: "She was tapping her hands on a drum." }
      ],
      clue: "Think about how a drum sounds when someone hits it. Then think about how Rosa feels at her very first meet.",
      why: "The answer is \"Her heart was beating hard and fast.\" A pounding drum is loud and strong. Rosa is nervous at her first meet, so her heart is beating hard. There is no real drum in the story." },
    { id: "SK-SS2a-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Select the sentence that uses a metaphor.",
      targets: ["p1:1:1", "p1:1:3", "p1:3:3", "p1:4:3"],
      answer: ["p1:3:3"], pick: 1,
      clue: "A metaphor compares without like or as. First rule out every sentence that uses like or as.",
      why: "The answer is \"Her arms were windmills, spinning round and round.\" It says her arms were windmills without using like or as. The other sentences use like or as, so they are similes." },
    { id: "SK-SS2a-P3", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "In paragraph 2, Ms. Ellis says Rosa has \"butterflies in your stomach.\" What does this idiom mean?",
        choices: [
          { text: "Rosa feels nervous about the race.", correct: true },
          { text: "Rosa feels sick from eating lunch." },
          { text: "Rosa is excited to see butterflies." },
          { text: "Rosa feels too tired to swim fast." }
        ] },
      partB: { prompt: "Which sentence from the story best helps you know what the idiom means?",
        choices: [
          { text: "\"Her coach, Ms. Ellis, saw Rosa's worried face.\"", correct: true },
          { text: "\"The whistle blew, and Rosa dove in.\"" },
          { text: "\"She had come in third place!\"" },
          { text: "\"She did not look at the other swimmers.\"" }
        ] },
      clue: "There are no real butterflies at the pool. Read what Ms. Ellis says right after the idiom. When might everyone feel this way?",
      why: "Part A: Rosa feels nervous about the race. Part B: \"Her coach, Ms. Ellis, saw Rosa's worried face.\" Ms. Ellis says this right after she sees Rosa looking worried, and she adds that everyone feels that way before a race." },
    { id: "SK-SS2a-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each phrase from the story to the kind of figurative language it is.",
      cols: ["Simile", "Metaphor", "Idiom"],
      rows: [
        { text: "as cold as ice", answer: 0 },
        { text: "Her arms were windmills", answer: 1 },
        { text: "butterflies in your stomach", answer: 2 },
        { text: "jumping up and down like a bouncing ball", answer: 0 }
      ],
      clue: "Check each phrase for like or as. Then ask: does it say one thing is another, or is it a saying you cannot read word for word?",
      why: "\"As cold as ice\" and \"like a bouncing ball\" are similes because they use as or like. \"Her arms were windmills\" is a metaphor. \"Butterflies in your stomach\" is an idiom that means feeling nervous." },
    { id: "SK-SS2a-P5", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The author writes that Rosa's arms \"were windmills, spinning round and round.\" What does this show about how Rosa swims?",
      choices: [
        { text: "Her arms move around quickly and strongly.", correct: true },
        { text: "Her arms are stiff and will not bend." },
        { text: "She swims slowly near the side of the pool." },
        { text: "Her arms get tired and stop moving." }
      ],
      clue: "Picture the blades of a windmill turning in the wind. Which choice moves the same way?",
      why: "The answer is \"Her arms move around quickly and strongly.\" Windmill blades keep turning in big circles, round and round. Since Rosa also kicks hard, the metaphor shows her arms circling strongly through the water." }
  ],
  /* ---------- B1 (expansion 2026-10-22, author b1c; docs/expansion-2026-10-22/01-architecture.md §2.2-2.3) ----------
     core: fifteen independent items in three sets of five. { ref } reuses the Try item P5 by id.
     P4 is NOT referenced: Together P2 (windmills is a metaphor) and P3 (butterflies is an idiom)
     already give two of its four rows, so it stays in Practice Together (P1-P4).
     New ids are numbered by their place in the fifteen (C02 is question 2), so C01 does not exist.
     Hints and Show me how for P5 and for the Together items are in addons below.
     Author log: docs/expansion-2026-10-22/batches/B1-b1c-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-SS2a-P5" },
      { id: "SK-SS2a-C02", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.2.a"], passages: ["p1"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "In paragraph 4, Rosa's little brother is \"jumping up and down like a bouncing ball.\" What does this tell you about him?",
          choices: [
            { text: "He is thrilled about how Rosa did in the race.", correct: true },
            { text: "He is playing a ball game up in the stands." },
            { text: "He is upset that Rosa did not come in first." },
            { text: "He is bored and wants the meet to be over." }
          ] },
        partB: { prompt: "Which sentence from the story best helps you understand how he feels?",
          choices: [
            { text: "\"She had come in third place!\"", correct: true },
            { text: "\"It was her very first swim meet.\"" },
            { text: "\"She did not look at the other swimmers.\"" },
            { text: "\"When Rosa touched the wall, she pulled off her goggles.\"" }
          ] },
        clue: "A comparison with like helps you picture something. Ask how the two things are alike, then look for a clue about why it is happening.",
        hints: [
          "A comparison with like helps you picture something. Ask how the two things are alike, then look for a clue about why it is happening.",
          "Picture a ball bouncing up and down. Then reread paragraph 4 from the beginning.",
          "There is no ball game in the stands, so the words are about how her brother acts, not what he plays. For Part B, the sentence you choose must match your Part A answer."
        ],
        how: [
          "A bouncing ball goes up and down again and again, fast and full of energy.",
          "Paragraph 4 says Rosa touched the wall and came in third place, and the sentence ends with an exclamation mark. Right after that, her brother jumps up and down.",
          "Part A: He is thrilled about how Rosa did in the race. Part B: \"She had come in third place!\"",
          "He is not playing a game, and nothing shows he is upset or bored. Pulling off her goggles does not tell how the race went, and the other sentences tell about the start of the meet and the race itself."
        ],
        misconception: "A common mix-up is reading the comparison word for word, as if there were a real ball.",
        why: "Part A: He is thrilled about how Rosa did in the race. Part B: \"She had come in third place!\" A bouncing ball is full of energy. Right after Rosa finds out she came in third, her brother jumps up and down, which shows how excited he is for her. There is no ball game, and nothing shows he is upset or bored." },
      { id: "SK-SS2a-C03", type: "mc", points: 1, dok: 3, std: ["3.T.SS.2.a"], passages: ["p1"],
        prompt: "Just before the race, the author writes that the water \"looked as cold as ice.\" Why does the author describe the water this way?",
        choices: [
          { text: "to show that the water seemed scary and hard to jump into", correct: true },
          { text: "to show that the pool had frozen over during the night" },
          { text: "to show that the water was a clear, light blue color" },
          { text: "to show that the weather was cold on the day of the meet" }
        ],
        clue: "Authors choose comparisons for a reason. Ask what the comparison helps you feel, and how it fits what is happening in the story.",
        hints: [
          "Authors choose comparisons for a reason. Ask what the comparison helps you feel, and how it fits what is happening in the story.",
          "Reread paragraph 1. What else does the author tell you about Rosa there?",
          "The pool has not frozen, because Rosa dives right in. Check each choice that is left against paragraph 1."
        ],
        how: [
          "In paragraph 1, it is Rosa's very first meet, and her heart is pounding. She is nervous.",
          "Ice is so cold that nobody wants to jump into it. Saying the water looks that cold shows how hard the jump seems to her.",
          "The answer is \"to show that the water seemed scary and hard to jump into.\"",
          "The pool is not frozen, the story never tells about the weather, and the comparison is about cold, not color."
        ],
        misconception: "A common mix-up is reading the comparison as a fact about the water. The author uses it to show how Rosa feels.",
        why: "The answer is \"to show that the water seemed scary and hard to jump into.\" Rosa is nervous at her first meet, and water as cold as ice is water nobody wants to jump into. The pool is not frozen, since she dives in, the story never mentions the weather, and the comparison is about cold, not color." },
      { id: "SK-SS2a-C04", type: "ms", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: [], pick: 2,
        stem: ["Rosa wrote these sentences in her swim journal after practice."],
        prompt: "Which TWO sentences from Rosa's journal use a simile?",
        choices: [
          { text: "My goggles fogged up like a bathroom mirror.", correct: true },
          { text: "After practice, I was as hungry as a bear.", correct: true },
          { text: "I like swimming on Saturday mornings best." },
          { text: "This pool is as long as the pool at my school." },
          { text: "Ms. Ellis said I swam faster than last week." }
        ],
        clue: "A simile compares two different kinds of things using like or as. Not every like or as is a simile.",
        hints: [
          "A simile compares two different kinds of things using like or as. Not every like or as is a simile.",
          "For each sentence, find like or as. Then ask: are two different kinds of things being compared? Choose two.",
          "\"I like swimming on Saturday mornings best\" uses like to mean enjoy, so it compares nothing. Test the other sentences: does each one compare two different kinds of things, or two of the same kind?"
        ],
        how: [
          "Goggles fogging up are compared to a foggy bathroom mirror. Those are two different things, joined by like, so it is a simile.",
          "Being hungry after practice is compared to a hungry bear, joined by as. That is a simile, too.",
          "\"I like swimming\" means enjoy. \"As long as the pool at my school\" compares two pools, the same kind of thing. \"Faster than last week\" has no like or as.",
          "The answers are \"My goggles fogged up like a bathroom mirror\" and \"After practice, I was as hungry as a bear.\""
        ],
        misconception: "A common mix-up is choosing every sentence that has like or as in it.",
        why: "The answers are \"My goggles fogged up like a bathroom mirror\" and \"After practice, I was as hungry as a bear.\" Each one compares two different things with like or as. \"I like swimming\" uses like to mean enjoy, the pool sentence compares two pools, and \"faster than last week\" does not use like or as." },
      { id: "SK-SS2a-C05", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: [],
        stem: ["After the meet, Coach Ellis gave Rosa a high five. \"Keep practicing,\" she said. \"At the next meet, you are going to knock it out of the park!\""],
        prompt: "Read what Coach Ellis says. Then complete the sentences. Choose the best answer for each blank.",
        text: "\"Knock it out of the park\" is {0}. Coach Ellis means that Rosa {1}.",
        slots: [
          { options: ["an idiom", "a simile", "a metaphor"], answer: 0 },
          { options: ["will do even better at the next meet", "will hit a ball far over a fence", "should rest and skip the next meet"], answer: 0 }
        ],
        clue: "First decide what kind of language the words are: a comparison with like or as, a comparison that says one thing is another, or a saying. Then use what is happening to find the meaning.",
        hints: [
          "First decide what kind of language the words are: a comparison with like or as, a comparison that says one thing is another, or a saying. Then use what is happening to find the meaning.",
          "Reread everything Coach Ellis does and says, not just the saying.",
          "Nothing is joined by like or as, so it is not a simile. Decide whether it says one thing is another, or is a saying."
        ],
        how: [
          "Rosa is not hitting a ball, and the meet is not in a park, so the words do not mean what they say. There is no like or as, and it does not say one thing is another.",
          "So it is an idiom, a saying with a different meaning.",
          "Coach Ellis gives a high five and tells Rosa to keep practicing. She thinks Rosa will do great, so she does not want her to skip a meet.",
          "The answers are an idiom and will do even better at the next meet."
        ],
        misconception: "A common mix-up is reading the saying word for word, as if Rosa would really hit a ball.",
        why: "The answers are an idiom and will do even better at the next meet. \"Knock it out of the park\" is a saying that means do something very well. There is no ball or park at a swim meet, and Coach Ellis is cheering Rosa on with a high five and \"Keep practicing,\" not telling her to skip a meet." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-SS2a-C06", type: "mc", points: 1, dok: 2, std: ["3.T.SS.2.a"], passages: ["p4"],
        prompt: "In stanza 1, the poet says the ocean \"purrs and curls around my feet.\" What does this help the reader picture?",
        choices: [
          { text: "small, gentle waves that wash softly over the speaker's feet", correct: true },
          { text: "a real cat walking along the beach next to the speaker" },
          { text: "big, loud waves that crash down hard onto the sand" },
          { text: "cold water that makes the speaker shiver and step back" }
        ],
        clue: "A metaphor says one thing is another. Ask what the two things have in common.",
        hints: [
          "A metaphor says one thing is another. Ask what the two things have in common.",
          "Picture a sleepy cat. Then reread stanza 1 for what the ocean does.",
          "There is no real cat on the beach, so one choice reads the words too literally. Test the choices that are left against stanza 1."
        ],
        how: [
          "A sleepy cat moves slowly and gently. It stretches out, purrs and curls around you.",
          "The poet says the ocean does the same thing around the speaker's feet and hand.",
          "The answer is \"small, gentle waves that wash softly over the speaker's feet.\"",
          "There is no real cat, crashing waves are not sleepy, and nothing in the poem says the water is cold."
        ],
        misconception: "A common mix-up is picturing a real cat instead of asking how the ocean is like one.",
        why: "The answer is \"small, gentle waves that wash softly over the speaker's feet.\" A sleepy cat moves slowly and gently, so the ocean that purrs and curls around the speaker's feet is calm, with small waves. There is no real cat, crashing waves are not sleepy, and the poem never says the water is cold." },
      { id: "SK-SS2a-C07", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.2.a"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "When Grandpa Joe says \"Chin up!\" in stanza 3, what does he mean?",
          choices: [
            { text: "Don't feel bad; things will be okay.", correct: true },
            { text: "Look up at the gulls in the sky." },
            { text: "Hold your head still in the wind." },
            { text: "Hurry, because it is time to go." }
          ] },
        partB: { prompt: "Which line from the poem best helps the reader understand what Grandpa means?",
          choices: [
            { text: "\"A wave rolls in and knocks it flat.\"", correct: true },
            { text: "\"They squawk and swoop and call.\"" },
            { text: "\"With towers in a row.\"" },
            { text: "\"And licks my open hand.\"" }
          ] },
        clue: "An idiom means something different from its words. Look at what just happened to find what the speaker really means.",
        hints: [
          "An idiom means something different from its words. Look at what just happened to find what the speaker really means.",
          "Reread all of stanza 3, from its first line to Grandpa's words.",
          "Grandpa is not asking anyone to look at the sky, and the gulls are only in stanza 2. For Part B, the line you choose must match your Part A answer."
        ],
        how: [
          "In stanza 3, a wave knocks the speaker's castle flat. Anyone would feel a little sad.",
          "Right then, Grandpa says \"Chin up!\" People say it to cheer someone up.",
          "Part A: Don't feel bad; things will be okay. Part B: \"A wave rolls in and knocks it flat.\"",
          "He is not talking about the gulls, the wind or going home."
        ],
        misconception: "A common mix-up is reading the saying word for word, as if Grandpa wanted the speaker to lift their chin.",
        why: "Part A: Don't feel bad; things will be okay. Part B: \"A wave rolls in and knocks it flat.\" The wave wrecks the castle, and Grandpa says \"Chin up!\" to cheer the speaker up. The gulls are in stanza 2, and nothing in stanza 3 is about the wind or going home." },
      { id: "SK-SS2a-C08", type: "ms", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: ["p4"], pick: 2,
        prompt: "In stanza 2, the poet compares the gulls to children at recess. Which TWO things do these comparisons help the reader understand about the gulls?",
        choices: [
          { text: "The gulls make a lot of noise.", correct: true },
          { text: "The gulls move around fast and playfully.", correct: true },
          { text: "The gulls are young birds that go to school." },
          { text: "The gulls are hungry and looking for food." },
          { text: "The gulls are afraid of the speaker." }
        ],
        clue: "A simile compares two different things using like. Ask how the two things are alike.",
        hints: [
          "A simile compares two different things using like. Ask how the two things are alike.",
          "Reread stanza 2. What do the gulls do in each line? Choose two.",
          "The gulls are not real children, so they do not go to school. Check each other choice against what kids at recess are like."
        ],
        how: [
          "A recess crowd is full of shouting. That shows the gulls are noisy: they squawk and call.",
          "Kids chasing a ball run fast and play. That shows how the gulls swoop and chase each other.",
          "The answers are \"The gulls make a lot of noise\" and \"The gulls move around fast and playfully.\"",
          "The gulls are birds, not students, and the poem never says they are hungry or scared."
        ],
        misconception: "A common mix-up is choosing a sentence that takes the comparison word for word, as if the gulls really went to school.",
        why: "The answers are \"The gulls make a lot of noise\" and \"The gulls move around fast and playfully.\" A recess crowd is loud, and kids chasing a ball move fast and play, just like the squawking, swooping gulls. The gulls do not go to school, and the poem never says they are hungry or scared." },
      { id: "SK-SS2a-C09", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: ["p4"],
        prompt: "Read this line from stanza 3: \"I like to build a castle here.\" Complete the sentence. Choose the best answer for each blank.",
        text: "In this line, the word like {0}, so the line {1}.",
        slots: [
          { options: ["means enjoy", "compares two things", "means almost the same as"], answer: 0 },
          { options: ["is not a simile", "is a simile", "is a metaphor"], answer: 0 }
        ],
        clue: "Not every like makes a simile. A simile uses like to compare two different things.",
        hints: [
          "Not every like makes a simile. A simile uses like to compare two different things.",
          "Read the line and try saying it with another word in place of like. Is anything being compared to anything else?",
          "If like were comparing, what would the castle be compared to? Look for a second thing in the line. If there is none, like has its other meaning."
        ],
        how: [
          "In \"I like to build a castle here,\" like tells how the speaker feels about building. It means enjoy.",
          "Nothing is compared to anything else, and the line does not say one thing is another.",
          "The answers are means enjoy and is not a simile."
        ],
        misconception: "A common mix-up is calling every sentence with like in it a simile.",
        why: "The answers are means enjoy and is not a simile. The speaker enjoys building castles. Nothing is being compared, so there is no simile and no metaphor in this line." },
      { id: "SK-SS2a-C10", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.2.a"], passages: [],
        stem: ["Aunt Rena hurt her knee, so Kayla made her a get-well card. Aunt Rena wrote back with a thank-you note. Here are five sentences from her note."],
        prompt: "Which sentence from Aunt Rena's note uses an idiom? Choose the sentence.",
        options: [
          "Thank you for the card you made for me.",
          "Your drawing of my garden is as bright as a sunflower.",
          "Your card was just what the doctor ordered!",
          "I like the purple flowers you drew best of all.",
          "My knee is getting better every day."
        ],
        answer: [2], pick: 1,
        clue: "An idiom is a saying that means something different from its words. Look for a sentence that would sound strange if you pictured it exactly.",
        hints: [
          "An idiom is a saying that means something different from its words. Look for a sentence that would sound strange if you pictured it exactly.",
          "Read each sentence word for word. Which one cannot really be true, even though Aunt Rena means it?",
          "\"Your drawing of my garden is as bright as a sunflower\" uses as to compare two things, so it is a simile, not an idiom. Check the rest the same way."
        ],
        how: [
          "The sunflower sentence uses as to compare, so it is a simile. \"I like the purple flowers\" uses like to mean enjoy.",
          "\"Thank you for the card\" and \"My knee is getting better every day\" mean just what they say.",
          "No doctor really ordered Kayla's card. \"Just what the doctor ordered\" is a saying that means exactly what someone needed.",
          "The answer is \"Your card was just what the doctor ordered!\""
        ],
        misconception: "A common mix-up is choosing the simile. A simile uses like or as; an idiom is a saying with a different meaning.",
        why: "The answer is \"Your card was just what the doctor ordered!\" No doctor ordered the card. The saying means the card was exactly what Aunt Rena needed to feel better. The sunflower sentence is a simile, and the other sentences mean just what they say." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-SS2a-C11", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: ["p5"],
        prompt: "Read paragraph 3. Complete the sentences. Choose the best answer for each blank.",
        text: "The words \"shoots forward like a rubber band snapping\" are {0}. They help the reader understand that the anole {1}.",
        slots: [
          { options: ["a simile", "a metaphor", "an idiom"], answer: 0 },
          { options: ["moves very suddenly and fast", "is made of something stretchy", "makes a loud snapping noise"], answer: 0 }
        ],
        clue: "Look for like or as to decide what kind of comparison it is. Then ask how the two things are alike.",
        hints: [
          "Look for like or as to decide what kind of comparison it is. Then ask how the two things are alike.",
          "Reread paragraph 3. What does the anole do just before it shoots forward, and what is it trying to catch?",
          "The anole is not made of rubber, so one meaning reads the words too literally. Use paragraph 3 to choose between the two meanings that are left."
        ],
        how: [
          "The words use like to compare the anole to a rubber band, so they make a simile.",
          "A snapping rubber band flies off all at once, very fast.",
          "Paragraph 3 says the anole sits very still, then shoots forward when a fly lands.",
          "The answers are a simile and moves very suddenly and fast."
        ],
        misconception: "A common mix-up is taking the comparison word for word, as if the anole were stretchy or made a snapping sound.",
        why: "The answers are a simile and moves very suddenly and fast. The words use like to compare the anole to a snapping rubber band, which flies off all at once. The anole sits still, then shoots forward to catch a fly. The paragraph never says it is stretchy or makes a noise." },
      { id: "SK-SS2a-C12", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.2.a"], passages: ["p5"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "In paragraph 5, the author tells readers to \"keep your eyes peeled.\" What does this mean?",
          choices: [
            { text: "Look very carefully as you watch.", correct: true },
            { text: "Peel a thin layer from around your eyes." },
            { text: "Close your eyes and listen for lizards." },
            { text: "Stay indoors where lizards cannot reach you." }
          ] },
        partB: { prompt: "Which sentence from the article best helps you understand what the author means?",
          choices: [
            { text: "\"An anole that has turned brown on a tree trunk can be very hard to spot.\"", correct: true },
            { text: "\"Sticky pads on its toes help it climb walls and even glass.\"" },
            { text: "\"To warn another male to stay away, he puffs it out and bobs his head up and down.\"" },
            { text: "\"It is called a green anole.\"" }
          ] },
        clue: "An idiom does not mean what its words say. Use the sentences around it to find what it really means.",
        hints: [
          "An idiom does not mean what its words say. Use the sentences around it to find what it really means.",
          "Try each Part A meaning in place of the idiom. Which one makes sense with the rest of the article?",
          "Nobody can really peel their eyes like a banana, so one meaning reads the words too literally. For Part B, the sentence you choose must match your Part A answer."
        ],
        how: [
          "No one can really peel their eyes, so this is an idiom.",
          "The next sentence says an anole that has turned brown on a tree trunk can be very hard to spot. You would have to look hard to see it.",
          "Part A: Look very carefully as you watch. Part B: \"An anole that has turned brown on a tree trunk can be very hard to spot.\"",
          "The author wants you to look, so closing your eyes or staying indoors does not fit. The other sentences tell facts about anoles, not why you need to look carefully."
        ],
        misconception: "A common mix-up is reading the saying word for word, as if it were about peeling something.",
        why: "Part A: Look very carefully as you watch. Part B: \"An anole that has turned brown on a tree trunk can be very hard to spot.\" Nobody really peels their eyes. Because an anole that has turned brown is hard to see on a tree, you have to look carefully to find one. The other sentences tell facts about how anoles climb, warn each other and get their names, not why you must look carefully." },
      { id: "SK-SS2a-C13", type: "mc", points: 1, dok: 3, std: ["3.T.SS.2.a"], passages: ["p5"],
        prompt: "In paragraph 2, the author writes, \"An anole is a little magician.\" Why does the author use this metaphor?",
        choices: [
          { text: "to show that its skin can change color almost like a magic trick", correct: true },
          { text: "to show that it likes to do tricks for the people on the porch" },
          { text: "to show that it is so small it can hide almost anywhere at all" },
          { text: "to show that it can make flies disappear by eating them up" }
        ],
        clue: "Authors use metaphors to help you picture something. Ask what the two things have in common, and read the sentences around the metaphor.",
        hints: [
          "Authors use metaphors to help you picture something. Ask what the two things have in common, and read the sentences around the metaphor.",
          "Ask what a magician does that amazes people. Then look for something the anole does that could seem just as surprising.",
          "The anole does not perform for people, so one choice reads the words too literally. For each choice that is left, ask: does the article tell about something the anole really does that could amaze someone, the way a magic trick does?"
        ],
        how: [
          "Paragraph 2 begins by calling the anole a little magician.",
          "The next sentences tell how its skin is bright green on a sunny leaf and can turn brown in a few minutes. A change like that seems like a magic trick.",
          "The answer is \"to show that its skin can change color almost like a magic trick.\"",
          "It does not perform for people, eating comes in paragraph 3, and paragraph 2 is about color, not size."
        ],
        misconception: "A common mix-up is choosing an idea from a different part of the article. Read the sentences right around the metaphor.",
        why: "The answer is \"to show that its skin can change color almost like a magic trick.\" Right after calling the anole a magician, the author tells how its skin turns from bright green to brown. The anole does not perform for people, eating is described in paragraph 3, and paragraph 2 is not about size." },
      { id: "SK-SS2a-C14", type: "ms", points: 2, dok: 3, std: ["3.T.SS.2.a"], passages: ["p5"], pick: 2,
        stem: ["Sentence A: Anoles are fast hunters.", "Sentence B: The flap is a bright stop sign that says, \"This spot is mine!\""],
        prompt: "Read sentences A and B from the article. Which TWO statements about them are true?",
        choices: [
          { text: "Only sentence B compares two different things.", correct: true },
          { text: "Sentence A tells a fact in plain words.", correct: true },
          { text: "Both sentences are metaphors, because both use is or are." },
          { text: "Sentence A is a simile, because it compares anoles to hunters." },
          { text: "Sentence B means the anole holds up a real sign." }
        ],
        clue: "A metaphor says one thing is another thing. Not every sentence with is or are is a metaphor.",
        hints: [
          "A metaphor says one thing is another thing. Not every sentence with is or are is a metaphor.",
          "For each sentence, ask: is the anole or its flap really this thing, or is the author comparing it to something else? Choose two.",
          "Sentence B does not mean a real sign: the flap is skin under the anole's chin. Check each other statement against both sentences."
        ],
        how: [
          "Sentence B says the flap is a stop sign. A flap of skin is not really a sign, so the author compares two different things. That is a metaphor.",
          "Sentence A says anoles are fast hunters. Paragraph 3 shows they really do hunt flies, so it is a plain fact.",
          "The answers are \"Only sentence B compares two different things\" and \"Sentence A tells a fact in plain words.\"",
          "Using is or are does not make a metaphor by itself, and sentence A has no like or as."
        ],
        misconception: "A common mix-up is calling every sentence with is or are a metaphor. A metaphor must compare two different things.",
        why: "The answers are \"Only sentence B compares two different things\" and \"Sentence A tells a fact in plain words.\" The flap is not really a sign, so sentence B is a metaphor. Anoles really do hunt, so sentence A is a fact. Is or are alone does not make a metaphor, sentence A has no like or as, and there is no real sign." },
      { id: "SK-SS2a-C15", type: "match", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: [],
        stem: ["Ms. Tate's class wrote about the garden they planted at the senior center.", "\"In March, the empty lot was a desert. We worked like ants all morning, carrying bags of soil and trays of seeds. By June, tomatoes and beans covered every row. Mr. Davis, who lives at the center, told us, 'You kids have green thumbs!'\""],
        prompt: "What does each phrase mean in the class's writing? Match each phrase to its meaning.",
        cols: ["dry and bare, with nothing growing", "worked hard together", "good at making plants grow", "tired and ready to quit"],
        rows: [
          { text: "the empty lot was a desert", answer: 0 },
          { text: "We worked like ants", answer: 1 },
          { text: "You kids have green thumbs", answer: 2 }
        ],
        clue: "Each phrase is a comparison or a saying. Ask how the two things are alike, or what the saying really means, and use the sentences around it.",
        hints: [
          "Each phrase is a comparison or a saying. Ask how the two things are alike, or what the saying really means, and use the sentences around it.",
          "Find each phrase in the writing, and read the sentence around it.",
          "Nobody's thumbs really turned green, so the last phrase is not about color. Ask what Mr. Davis sees when he says it. Then match the other two phrases the same way."
        ],
        how: [
          "A desert is dry and bare. In March the lot was empty, so it was dry and bare, with nothing growing.",
          "Ants work hard together, carrying loads. The class carried soil and seeds all morning, so they worked hard together.",
          "By June, plants covered every row. \"Green thumbs\" is a saying for people who are good at making plants grow.",
          "Nobody in the writing is tired or ready to quit, so that meaning is not used."
        ],
        misconception: "A common mix-up is taking a phrase word for word, as if the class had real green thumbs or the lot were full of sand.",
        why: "The empty lot was a desert: dry and bare, with nothing growing. We worked like ants: worked hard together. You kids have green thumbs: good at making plants grow. Tired and ready to quit does not match any phrase." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. Each `like` lists only
     the core items it really practises (same component and task). */
  similar: [
    { id: "SK-SS2a-S01", type: "mc", points: 1, dok: 2, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-P5", "SK-SS2a-C06"],
      stem: ["Every day in science class, Ms. Ortiz's students ask question after question. \"You are all sponges!\" she laughs."],
      prompt: "What does Ms. Ortiz mean when she says her students are sponges?",
      choices: [
        { text: "They learn new things quickly and easily.", correct: true },
        { text: "They are wet from playing in the rain." },
        { text: "They help wipe the tables in the lab." },
        { text: "They forget most of what she teaches." }
      ],
      clue: "A metaphor says one thing is another. Ask what the students and sponges have in common.",
      hints: [
        "A metaphor says one thing is another. Ask what the students and sponges have in common.",
        "Think about what a sponge does with water. Then reread what the students do in class.",
        "The students are not really sponges, so being wet or wiping tables reads the words too literally. Decide which of the two choices that are left fits a class that asks question after question."
      ],
      how: [
        "A sponge soaks up water fast.",
        "The students ask question after question, so they are taking in everything they can, the way a sponge soaks up water.",
        "The answer is \"They learn new things quickly and easily.\"",
        "They are not wet, the story does not tell about cleaning, and students who ask so many questions are not forgetting."
      ],
      why: "The answer is \"They learn new things quickly and easily.\" A sponge soaks up water, and students who ask question after question take in everything they can. They are not really wet or cleaning, and forgetting does not fit students who ask so many questions." },
    { id: "SK-SS2a-S02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C05", "SK-SS2a-C07", "SK-SS2a-C12"],
      stem: ["Deshawn baked his very first pan of cornbread. Grandma took a bite and nodded. Then she saw his worried face. \"You're on the right track,\" she said. \"Next time, use a little less salt, and it will be perfect.\""],
      prompt: "What does Grandma mean when she says Deshawn is \"on the right track\"?",
      choices: [
        { text: "He is doing well and is close to getting it right.", correct: true },
        { text: "He should follow the railroad tracks to the store." },
        { text: "He made a big mistake and should start all over." },
        { text: "He should make the cornbread exactly the same way next time." }
      ],
      clue: "An idiom means something different from its words. Use what the speaker says next to find the real meaning.",
      hints: [
        "An idiom means something different from its words. Use what the speaker says next to find the real meaning.",
        "Read everything Grandma does and says, from her first bite to her last words.",
        "There is no train or track in Grandma's kitchen, so one choice reads the words too literally. Test the choices that are left against what Grandma says to do next time."
      ],
      how: [
        "There is no real track, so this is an idiom.",
        "Grandma nods, and she says one small change will make it perfect. She is pleased with his work.",
        "The answer is \"He is doing well and is close to getting it right.\"",
        "She does not tell him to start over, and she does not say to make it exactly the same way: she says to use a little less salt."
      ],
      why: "The answer is \"He is doing well and is close to getting it right.\" Grandma nods and says that with a little less salt it will be perfect. There are no real tracks, she does not tell him to start over, and \"use a little less salt\" means the next pan should not be exactly the same." },
    { id: "SK-SS2a-S03", type: "mc", points: 1, dok: 2, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C02", "SK-SS2a-C11"],
      stem: ["Lena wrote a report about box turtles. One sentence says, \"A baby box turtle is as small as a bottle cap.\""],
      prompt: "What does this simile help the reader understand?",
      choices: [
        { text: "how very tiny a baby box turtle is", correct: true },
        { text: "that baby box turtles like to hide in bottles" },
        { text: "that a baby turtle's shell is made of metal" },
        { text: "that a baby box turtle is round and flat" }
      ],
      clue: "A simile compares two different kinds of things. Ask what the two things have in common.",
      hints: [
        "A simile compares two different kinds of things. Ask what the two things have in common.",
        "Picture a bottle cap in your hand. Then read the whole sentence again, word by word.",
        "Nothing in the sentence is about bottles as hiding places, so one choice reads the words too literally. Picture a bottle cap again, then test each choice that is left against the whole sentence."
      ],
      how: [
        "The sentence compares a baby box turtle with a bottle cap, using as.",
        "A bottle cap fits in the palm of your hand. The word small tells which way they are alike.",
        "The answer is \"how very tiny a baby box turtle is.\"",
        "The turtle does not hide in bottles, and its shell is not metal. A bottle cap is round and flat, but the sentence says small, so the comparison is about size, not shape."
      ],
      misconception: "A common mix-up is taking the comparison word for word, as if the turtle had something to do with real bottles.",
      why: "The answer is \"how very tiny a baby box turtle is.\" A bottle cap is small enough to fit in your palm, and the sentence says the turtle is as small as one. It is not about hiding in bottles or metal shells, and the word small shows it is about size, not a round, flat shape." },
    /* Batch SIM-1 (ENG-07): one extra question for each core item that had none left when a child works the
       fifteen in order. Each new `like` names the one core item it practises. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-SS2a-S04", type: "mc", points: 1, dok: 3, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C03"],
      stem: ["Ned walked into his new school on the first day. The hallway was as long as a football field. His classroom was at the very end, and his feet felt heavy."],
      prompt: "Why does the author say the hallway was \"as long as a football field\"?",
      choices: [
        { text: "to show that the hallway seemed very long to Ned", correct: true },
        { text: "to show that students play football in the hallway" },
        { text: "to show that the hallway is outside on a field" },
        { text: "to show that Ned walked down the hallway fast" }
      ],
      clue: "A simile compares two things. Ask what the comparison helps the reader notice about the hallway.",
      hints: [
        "A simile compares two things. Ask what the comparison helps the reader notice about the hallway.",
        "Think about how big a football field is. Then think about how Ned feels as he walks.",
        "Nothing says that anyone plays a game in the hallway, so one choice can go. Test the rest against how Ned feels."
      ],
      how: [
        "The author compares the hallway to a football field, and a football field is very long.",
        "Ned's feet feel heavy, and his classroom is at the very end, so the hallway seems long to him.",
        "The answer is \"to show that the hallway seemed very long to Ned.\"",
        "The hallway is inside the school, nobody plays football there, and the text does not say Ned walks fast."
      ],
      misconception: "A common mix-up is taking the comparison word for word, as if there were a real football field in the school.",
      why: "The answer is \"to show that the hallway seemed very long to Ned.\" A football field is very long, and Ned's feet feel heavy. The hallway is inside the school, nobody plays football there, and Ned is not walking fast." },
    { id: "SK-SS2a-S05", type: "ms", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: [], pick: 2,
      like: ["SK-SS2a-C04"],
      stem: ["Dana wrote these in her book after the play."],
      prompt: "Which TWO sentences from Dana's notebook use a simile?",
      choices: [
        { text: "My costume felt as stiff as cardboard.", correct: true },
        { text: "The crowd cheered like a roaring wave.", correct: true },
        { text: "The play began at seven o'clock." },
        { text: "Our show was longer than last year's." },
        { text: "My cousin sat in the front row." }
      ],
      clue: "A simile compares two different things using like or as. Check each sentence for one of those words and a comparison.",
      hints: [
        "A simile compares two different things using like or as. Check each sentence for one of those words and a comparison.",
        "Look for the words like and as. Then ask whether the sentence compares two different kinds of things.",
        "\"Longer than last year's\" compares two shows of the same kind, so it is not a simile. Check the rest the same way."
      ],
      how: [
        "A simile uses like or as to compare two different things.",
        "The costume is compared to cardboard, and the cheering crowd is compared to a roaring wave.",
        "The answers are \"My costume felt as stiff as cardboard.\" and \"The crowd cheered like a roaring wave.\"",
        "The other sentences tell a time, a seat, or a comparison of two shows that are alike."
      ],
      misconception: "A common mix-up is choosing any sentence that compares. A simile compares two different things with like or as.",
      why: "The answers are \"My costume felt as stiff as cardboard.\" and \"The crowd cheered like a roaring wave.\" Each one uses like or as to compare two different things. The other sentences tell a time and a seat, or compare one show with another show." },
    { id: "SK-SS2a-S06", type: "mc", points: 1, dok: 2, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C06"],
      stem: ["At sunrise, no wind moved across the lake. The lake was a mirror, and every pine tree on the shore showed upside down in the water."],
      prompt: "The author says, \"The lake was a mirror.\" What does this help the reader picture?",
      choices: [
        { text: "calm, smooth water that shows what is above it", correct: true },
        { text: "a lake with a glass frame around it" },
        { text: "rough water that crashes against the shore" },
        { text: "a lake that is too shallow to swim in" }
      ],
      clue: "A metaphor says one thing is another. Ask what a mirror does and how the lake is like it.",
      hints: [
        "A metaphor says one thing is another. Ask what a mirror does and how the lake is like it.",
        "Think about what you see when you look into a mirror. Then think about what appears in the water.",
        "No wind moves across the lake, so one choice can go. Check the rest against what shows in the water."
      ],
      how: [
        "A mirror is flat and smooth, and it shows a picture of whatever is in front of it.",
        "The lake shows the pine trees upside down, so its water must be smooth and still.",
        "The answer is \"calm, smooth water that shows what is above it.\"",
        "The lake has no frame, the wind is not moving, and the text does not say it is shallow."
      ],
      misconception: "A common mix-up is picturing a real mirror. The author means the lake acts like one.",
      why: "The answer is \"calm, smooth water that shows what is above it.\" A mirror shows a clear picture, and the lake shows the pine trees upside down. There is no wind, so the water is not rough, and nothing says the lake has a frame or is shallow." },
    { id: "SK-SS2a-S07", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.2.a"], passages: ["p6"],
      like: ["SK-SS2a-C07"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "When Dad says, \"Let's call it a day,\" what does he mean?",
        choices: [
          { text: "They should stop working for now.", correct: true },
          { text: "They should call a friend to help." },
          { text: "They should start raking all over again." },
          { text: "They should wait for the day to end." }
        ] },
      partB: { prompt: "Which sentence from the story best helps the reader understand what Dad means?",
        choices: [
          { text: "\"We can finish tomorrow.\"", correct: true },
          { text: "\"Ozzie made one big pile, and then another.\"" },
          { text: "\"Red and yellow leaves covered the grass from the porch to the street.\"" },
          { text: "\"Ozzie jumped into the biggest pile with a shout.\"" }
        ] },
      clue: "An idiom is a saying that does not mean its words. Use what the characters are doing to work out what it means.",
      hints: [
        "An idiom is a saying that does not mean its words. Use what the characters are doing to work out what it means.",
        "Think about what Ozzie and Dad have been doing all day and what they plan to do next.",
        "Dad does not plan to phone anyone, so you can drop that choice. For Part B, the sentence must match your Part A answer."
      ],
      how: [
        "Nobody is making a call, and a day cannot be called like a phone. The saying must mean something else.",
        "Ozzie and Dad have raked for hours, and they are tired. Dad says the job can be finished later.",
        "Part A: They should stop working for now. Part B: \"We can finish tomorrow.\"",
        "They do not start over, and they do not wait for the day to end."
      ],
      misconception: "A common mix-up is reading the saying word for word, as if Dad wanted to make a phone call.",
      why: "Part A: They should stop working for now. Part B: \"We can finish tomorrow.\" Dad says the rest of the raking can wait, so \"call it a day\" means stop for now. Nobody calls a friend, starts over, or waits for the day to end." },
    { id: "SK-SS2a-S08", type: "ms", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: [], pick: 2,
      like: ["SK-SS2a-C08"],
      stem: ["Mom blew soap bubbles on the porch. The bubbles were tiny dancers, floating and turning over the steps."],
      prompt: "The author compares the bubbles to dancers. Which TWO things does this comparison help the reader understand about the bubbles?",
      choices: [
        { text: "The bubbles move in a lively way.", correct: true },
        { text: "The bubbles float and turn in the air.", correct: true },
        { text: "The bubbles are learning a new dance." },
        { text: "The bubbles are heavy and drop straight down." },
        { text: "The bubbles are hiding from the girl." }
      ],
      clue: "A comparison helps the reader picture how something acts. Ask how real dancers behave.",
      hints: [
        "A comparison helps the reader picture how something acts. Ask how real dancers behave.",
        "Think about how dancers behave. Then think about what bubbles do on a breezy day.",
        "Bubbles cannot learn a dance, so one choice can go. Test the rest against how dancers move."
      ],
      how: [
        "Dancers move in a lively way, and they twirl and turn.",
        "The author says the bubbles float and turn, so the bubbles move like dancers.",
        "The answers are \"The bubbles move in a lively way.\" and \"The bubbles float and turn in the air.\"",
        "Bubbles do not learn dances, they float instead of dropping, and nothing in the text says they are hiding."
      ],
      misconception: "A common mix-up is thinking the bubbles are really dancing. The comparison tells how they move.",
      why: "The answers are \"The bubbles move in a lively way.\" and \"The bubbles float and turn in the air.\" Dancers move in a lively way and turn, and the bubbles float and turn. Bubbles do not learn dances, drop straight down, or hide." },
    { id: "SK-SS2a-S09", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C09"],
      stem: ["Felix is great at climbing trees. His sister says, \"Felix can climb like a squirrel.\""],
      prompt: "Read what Felix's sister says. Complete the sentence. Choose the best answer for each blank.",
      text: "In this sentence, the word like {0}, so the sentence {1}.",
      slots: [
        { options: ["means enjoy", "compares two things", "tells where"], answer: 1 },
        { options: ["is a metaphor", "is not a simile", "is a simile"], answer: 2 }
      ],
      clue: "Sometimes like tells what someone enjoys, and sometimes it sets one thing beside another. Ask which one this sentence does.",
      hints: [
        "Sometimes like tells what someone enjoys, and sometimes it sets one thing beside another. Ask which one this sentence does.",
        "Look at Felix and the squirrel in the sentence. Is one being matched to the other, or is one just enjoyed?",
        "A metaphor says one thing is another without using like or as, so one choice for the second blank does not fit."
      ],
      how: [
        "Felix and a squirrel are two different things, and the sentence matches how they climb.",
        "So like compares two things.",
        "A comparison that uses like is a simile. The answers are compares two things and is a simile.",
        "The sentence does not say Felix enjoys anything, and a metaphor would not use like."
      ],
      misconception: "A common mix-up is thinking every like means enjoy. Check what the word does in the sentence.",
      why: "The answers are compares two things and is a simile. The sentence matches how Felix climbs with how a squirrel climbs, and it uses like to do it. It does not say Felix enjoys anything, and a metaphor would not use like." },
    { id: "SK-SS2a-S10", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C10"],
      stem: ["Cleo's team won the school spelling bee. Her teacher, Mr. Lund, wrote a note home. Here are five sentences from his note."],
      prompt: "Which sentence from Mr. Lund's note uses an idiom? Choose the sentence.",
      options: [
        "The bee began at nine o'clock.",
        "Cleo's team spelled every word right.",
        "The silver cup was as shiny as a new coin.",
        "Cleo was over the moon when they won.",
        "I am proud of every child who took part."
      ],
      answer: [3], pick: 1,
      clue: "An idiom is a saying that means something different from its words. Look for a sentence that would sound strange if you pictured it exactly.",
      hints: [
        "An idiom is a saying that means something different from its words. Look for a sentence that would sound strange if you pictured it exactly.",
        "Read each sentence word for word. Which one cannot really be true, even though Mr. Lund means it?",
        "\"The silver cup was as shiny as a new coin\" uses as to compare two things, so it is a simile, not an idiom. Check the rest the same way."
      ],
      how: [
        "The cup sentence uses as to compare, so it is a simile.",
        "The time, the spelling and the proud feelings all mean just what they say.",
        "Nobody can be over the moon. \"Over the moon\" is a saying that means very happy.",
        "The answer is \"Cleo was over the moon when they won.\""
      ],
      misconception: "A common mix-up is choosing the simile. A simile uses like or as; an idiom is a saying with a different meaning.",
      why: "The answer is \"Cleo was over the moon when they won.\" Nobody really goes over the moon; the saying means very happy. The cup sentence is a simile, and the other sentences mean just what they say." },
    { id: "SK-SS2a-S11", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C11"],
      stem: ["Rhys watched the storm from the window. The dark clouds rolled across the sky like a herd of gray elephants."],
      prompt: "Read the sentences. Then complete the sentences. Choose the best answer for each blank.",
      text: "The words \"like a herd of gray elephants\" are {0}. They help the reader understand that the clouds {1}.",
      slots: [
        { options: ["an idiom", "a simile", "a metaphor"], answer: 1 },
        { options: ["have long trunks and big ears", "are huge and heavy and move slowly", "make a loud trumpeting sound"], answer: 1 }
      ],
      clue: "First decide what kind of language the words are: a comparison with like or as, a comparison without them, or a saying. Then ask what the two share.",
      hints: [
        "First decide what kind of language the words are: a comparison with like or as, a comparison without them, or a saying. Then ask what the two share.",
        "Look for a small word that joins the clouds and the elephants. Then think about what elephants are like.",
        "Clouds do not really have trunks, so one choice for the second blank can go. Check the other two against what a herd of elephants is like."
      ],
      how: [
        "The words join clouds and elephants with like, so it is a comparison with like. That is a simile.",
        "Elephants are huge and heavy, and a herd moves slowly across the land.",
        "The answers are a simile and are huge and heavy and move slowly.",
        "Clouds do not have trunks or ears, and the sentence says nothing about a sound."
      ],
      misconception: "A common mix-up is thinking the clouds really look like elephants with trunks. The comparison is about size and weight.",
      why: "The answers are a simile and are huge and heavy and move slowly. The words use like to compare clouds with a herd of elephants, which are big, heavy and slow. Clouds have no trunks or ears, and nothing is said about a sound." },
    { id: "SK-SS2a-S12", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.2.a"], passages: ["p7"],
      like: ["SK-SS2a-C12"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "In paragraph 3, Ms. Doyle says that five dollars is \"a drop in the bucket.\" What does this mean?",
        choices: [
          { text: "It is only a small part of what is needed.", correct: true },
          { text: "It is far too much money for one student." },
          { text: "It is the wrong kind of money for swings." },
          { text: "It is water that should go in a bucket." }
        ] },
      partB: { prompt: "Which sentence from the story best helps you understand what Ms. Doyle means?",
        choices: [
          { text: "\"A new set would cost four hundred dollars.\"", correct: true },
          { text: "\"The old ones had rusted.\"" },
          { text: "\"She ran to show Ms. Doyle, the school secretary.\"" },
          { text: "\"Families came to a pancake breakfast, and every class held a sale.\"" }
        ] },
      clue: "An idiom is a saying that does not mean its words. Think about how the money Tess earned compares with what the school needs.",
      hints: [
        "An idiom is a saying that does not mean its words. Think about how the money Tess earned compares with what the school needs.",
        "Think about how much money Tess has and how much money the school needs.",
        "No water or bucket is in this story, so you can drop one choice. For Part B, the sentence must match your Part A answer."
      ],
      how: [
        "A drop of water is tiny next to a whole bucket.",
        "Five dollars is a small amount next to the cost of a new set of swings.",
        "Part A: It is only a small part of what is needed. Part B: \"A new set would cost four hundred dollars.\"",
        "Ms. Doyle thanks Tess and calls it a good start, so she does not think it is too much or the wrong kind of money."
      ],
      misconception: "A common mix-up is picturing a real bucket. The saying is about how small something is next to what is needed.",
      why: "Part A: It is only a small part of what is needed. Part B: \"A new set would cost four hundred dollars.\" Five dollars is tiny next to four hundred. Ms. Doyle calls it a good start, so she does not mean that it is too much or the wrong kind of money." },
    { id: "SK-SS2a-S13", type: "mc", points: 1, dok: 3, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C13"],
      stem: ["Wes got his first library card today. When he walked in, he saw rows and rows of books. The library was a treasure chest, and every shelf held something new to find."],
      prompt: "Why does the author say, \"The library was a treasure chest\"?",
      choices: [
        { text: "to show that the library is full of exciting things to find", correct: true },
        { text: "to show that the library keeps its books locked in a box" },
        { text: "to show that the library sells gold coins at the desk" },
        { text: "to show that the library is a very old building" }
      ],
      clue: "A metaphor says one thing is another. Ask what people hope to find in a treasure chest.",
      hints: [
        "A metaphor says one thing is another. Ask what people hope to find in a treasure chest.",
        "Think about how someone feels when opening a treasure chest. Then think about how Wes feels in the library.",
        "Nothing says that the library sells coins, so one choice can go. Test the rest against what is on every shelf."
      ],
      how: [
        "A treasure chest holds things that are exciting to find.",
        "Every shelf in the library holds something new for Wes to find, so the library is full of treasure for him.",
        "The answer is \"to show that the library is full of exciting things to find.\"",
        "No books are locked up, no coins are sold, and nothing says the building is old."
      ],
      misconception: "A common mix-up is thinking the library really holds a chest. The metaphor shows what Wes finds there.",
      why: "The answer is \"to show that the library is full of exciting things to find.\" A treasure chest holds things that are exciting to find, and every shelf holds something new for Wes. Nothing says the books are locked up, coins are sold, or the building is old." },
    { id: "SK-SS2a-S14", type: "ms", points: 2, dok: 3, std: ["3.T.SS.2.a"], passages: [], pick: 2,
      like: ["SK-SS2a-C14"],
      stem: ["Sentence A: Fog is a gray curtain over the town.", "Sentence B: Fog forms when warm air meets cool air."],
      prompt: "Read sentences A and B. Which TWO statements about them are true?",
      choices: [
        { text: "Only sentence A compares two different things.", correct: true },
        { text: "Sentence B tells a fact in plain words.", correct: true },
        { text: "Both sentences are metaphors, because both are about fog." },
        { text: "Sentence B is a simile, because it compares warm air and cool air." },
        { text: "Sentence A means a real curtain hangs over the town." }
      ],
      clue: "A metaphor says that one object is another. A sentence that only gives information does not. Check each sentence.",
      hints: [
        "A metaphor says that one object is another. A sentence that only gives information does not. Check each sentence.",
        "Ask what each sentence is really about. Does it match fog with something else, or does it just tell about fog?",
        "A simile needs the word like or as. Check which statement says that, and then decide whether the sentence has it."
      ],
      how: [
        "Sentence A says fog is a curtain, so it matches fog with something different.",
        "Sentence B tells how fog forms, in plain words with no comparison.",
        "The answers are \"Only sentence A compares two different things.\" and \"Sentence B tells a fact in plain words.\"",
        "Sentence B is not a metaphor or a simile, and no real curtain hangs over the town."
      ],
      misconception: "A common mix-up is thinking that a sentence is figurative just because it is about the same thing. Look for a real comparison.",
      why: "The answers are \"Only sentence A compares two different things.\" and \"Sentence B tells a fact in plain words.\" Sentence A says fog is a curtain, which is a metaphor. Sentence B tells how fog forms, and it has no like or as. No real curtain hangs over the town." },
    { id: "SK-SS2a-S15", type: "match", points: 2, dok: 2, std: ["3.T.SS.2.a"], passages: [],
      like: ["SK-SS2a-C15"],
      stem: ["Room 4 wrote about the day the fans broke at their school.", "\"On Monday, our classroom was a furnace. We were all in the same boat, because no fan in the building worked. Our teacher, Ms. Lane, was a bundle of energy, and she kept us busy with word games.\""],
      prompt: "What does each phrase mean in the class's writing? Match each phrase to its meaning.",
      cols: ["lively and always moving", "very hot", "afraid and wanting to leave", "having the same problem"],
      rows: [
        { text: "our classroom was a furnace", answer: 1 },
        { text: "We were all in the same boat", answer: 3 },
        { text: "Ms. Lane was a bundle of energy", answer: 0 }
      ],
      clue: "Each phrase is a comparison or a saying. Ask how the two things are alike, or what the saying really means, and use the sentences around it.",
      hints: [
        "Each phrase is a comparison or a saying. Ask how the two things are alike, or what the saying really means, and use the sentences around it.",
        "Find each phrase in the writing, and read the sentence around it.",
        "Nobody is really in a boat, so that phrase is about something the class shares. Then match the other two phrases the same way."
      ],
      how: [
        "A furnace is very hot. The fans are broken, so the classroom is very hot.",
        "No fan worked for anyone, so everyone had the same problem. \"In the same boat\" is a saying for that.",
        "Ms. Lane keeps the class busy with games. A bundle of energy is a person who is lively and always moving.",
        "Nobody in the writing is afraid or wants to leave, so that meaning is not used."
      ],
      misconception: "A common mix-up is taking a phrase word for word, as if the class were in a real boat or a real furnace.",
      why: "Our classroom was a furnace: very hot. We were all in the same boat: having the same problem. Ms. Lane was a bundle of energy: lively and always moving. Afraid and wanting to leave does not match any phrase." }
  ],
  /* Hints and Show me how for the ref P5 (core set 1) and Together P1-P4. */
  addons: {
    "SK-SS2a-P1": {
      hints: [
        "A simile compares two different things. Ask how the two things are alike, then check the story for clues about how Rosa feels.",
        "Read paragraph 1. Where is Rosa standing, and what is about to happen for the very first time?",
        "There is no real drum at the pool, so two choices take the words too literally. Of the choices left, ask which one fits a heart just before a big first race."
      ],
      how: [
        "Paragraph 1 says it is Rosa's very first swim meet, and she is standing at the edge of the pool.",
        "A pounding drum is loud and strong, beat after beat. A nervous heart beats the same way.",
        "The answer is \"Her heart was beating hard and fast.\"",
        "There is no real drum at the pool, and a slow, soft heartbeat does not fit someone so nervous."
      ],
      misconception: "A common mix-up is reading the comparison word for word, as if there were a real drum." },
    "SK-SS2a-P2": {
      hints: [
        "A metaphor compares two things without like or as. It says one thing is a different kind of thing.",
        "Check each sentence you can choose for the words like or as. A sentence with one of them is a simile, not a metaphor.",
        "\"Rosa stood at the edge of the pool with her heart pounding like a drum\" uses like, so it is a simile. Check the other sentences the same way."
      ],
      how: [
        "Look for like or as in each sentence.",
        "The heart, the cold water and the bouncing brother all use like or as, so they are similes.",
        "The answer is \"Her arms were windmills, spinning round and round.\" It says her arms were windmills, with no like or as."
      ] },
    "SK-SS2a-P3": {
      hints: [
        "An idiom does not mean what its words say. Use the clues around it to find what it really means.",
        "Try each Part A meaning in place of the idiom. Which one fits the words Ms. Ellis says next?",
        "There are no real butterflies at the pool, so Rosa is not excited to see butterflies. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "There are no real butterflies, so this is an idiom.",
        "Ms. Ellis sees Rosa's worried face, and she says everyone feels this way before a race.",
        "Part A: Rosa feels nervous about the race. Part B: \"Her coach, Ms. Ellis, saw Rosa's worried face.\"",
        "Nothing says Rosa ate lunch or is tired, and the butterflies are not real."
      ] },
    "SK-SS2a-P4": {
      hints: [
        "Check each phrase for like or as. Then ask: does it say one thing is another, or is it a saying you cannot read word for word?",
        "Two of the phrases use like or as. Find them first.",
        "\"As cold as ice\" uses as to compare the water to ice, so it goes with the comparisons that use like or as. Sort the other three the same way: look for like or as first, then decide."
      ],
      how: [
        "\"As cold as ice\" and \"jumping up and down like a bouncing ball\" use as or like, so they are similes.",
        "\"Her arms were windmills\" says her arms were windmills, with no like or as, so it is a metaphor.",
        "\"Butterflies in your stomach\" is a saying that means feeling nervous, so it is an idiom."
      ] },
    "SK-SS2a-P5": {
      hints: [
        "When an author says one thing is another, ask how the two things are alike. Picture both of them.",
        "Picture the blades of a windmill turning in the wind. Then reread paragraph 3 to see what else Rosa does as she swims.",
        "Windmill blades keep turning, so arms that get tired and stop do not fit. Test the other choices against paragraph 3."
      ],
      how: [
        "Windmill blades turn in big circles, round and round, and they keep going.",
        "Paragraph 3 says Rosa kicks hard, and her arms keep spinning round and round.",
        "The answer is \"Her arms move around quickly and strongly.\"",
        "Stiff arms, slow swimming and tired arms that stop do not match spinning windmill blades."
      ],
      misconception: "A common mix-up is picturing a real windmill instead of asking how Rosa's arms are like one." }
  },
  test: [
    { id: "SK-SS2a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "In paragraph 2, Dad asks, \"Why the long face?\" What does he mean?",
      choices: [
        { text: "Why do you look so sad?", correct: true },
        { text: "Why are you so tired?" },
        { text: "Why is your face dirty?" },
        { text: "Why are you standing so tall?" }
      ],
      clue: "This is an idiom. Read what Jamal says next. How does Jamal feel about the move?",
      why: "The answer is \"Why do you look so sad?\" A long face is an idiom for a sad look. Jamal answers that he doesn't know anyone here, which shows he is unhappy." },
    { id: "SK-SS2a-T2", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Select the sentence that uses a simile to describe how Jamal and Noor move.",
      targets: ["p2:1:2", "p2:3:2", "p2:5:1", "p2:5:2"],
      answer: ["p2:5:1"], pick: 1,
      clue: "Two things must be true: the sentence uses like or as, and it tells how the two friends move.",
      why: "The answer is \"Jamal grabbed his scooter, and the two of them zoomed down the sidewalk like rockets.\" It uses like to compare the friends to rockets, which shows they move very fast. The snow simile is about the walls, not about moving." },
    { id: "SK-SS2a-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "In paragraph 5, Jamal is \"smiling from ear to ear.\" What does this idiom mean?",
        choices: [
          { text: "He is smiling a big, happy smile.", correct: true },
          { text: "He is covering his ears with his hands." },
          { text: "He is trying hard not to smile." },
          { text: "He is listening to a funny joke." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Maybe this new town would not be so bad after all.\"", correct: true },
          { text: "\"Everything felt strange.\"" },
          { text: "\"The bare walls were as white as fresh snow.\"" },
          { text: "\"Then a girl rolled up the sidewalk on a scooter.\"" }
        ] },
      clue: "Think about how wide a smile would be if it stretched toward both ears. Then find a sentence that shows how Jamal feels at the end.",
      why: "Part A: He is smiling a big, happy smile. Part B: \"Maybe this new town would not be so bad after all.\" By the end, Jamal has a new friend and feels better about the move, so his smile is wide and happy." },
    { id: "SK-SS2a-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author writes, \"The sun was a hot orange ball sinking behind the pine trees.\" What kind of figurative language is this?",
      choices: [
        { text: "a metaphor, because it says the sun was a ball", correct: true },
        { text: "a simile, because it uses as to compare two things" },
        { text: "an idiom, because it is a common saying" },
        { text: "a simile, because it uses like to compare" }
      ],
      clue: "Look closely at the words. Does the sentence use like or as? Does it say one thing is another?",
      why: "The answer is a metaphor, because it says the sun was a ball. The sentence does not use like or as. It says the sun was a hot orange ball, which helps you picture a round, glowing sunset." },
    { id: "SK-SS2a-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author writes, \"The bare walls were as white as fresh snow.\" What does this help the reader picture?",
      choices: [
        { text: "very white walls with nothing on them", correct: true },
        { text: "cold, wet walls in a snowy room" },
        { text: "walls painted with many bright colors" },
        { text: "walls covered with pictures of snow" }
      ],
      clue: "Bare means empty, like a wall without posters. Then think about the color of fresh snow.",
      why: "The answer is very white walls with nothing on them. Fresh snow is bright white, so the simile shows the walls are very white. There is no real snow in the room." }
  ],
  /* PP-004 form B of the skill check (agent formB-lit). Same code, points (6) and DOK mix
     (2,2,3,2,2) as form A, on a new passage p3 (a letter). NEEDS INDEPENDENT REVIEW.
     See docs/audits/work/pp004-formB-formB-lit.md. */
  testB: [
    { id: "SK-SS2a-TB1", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "In paragraph 2, Ana writes that Lucy's silly joke \"broke the ice.\" What does this mean?",
      choices: [
        { text: "The joke helped the girls stop feeling shy and start talking.", correct: true },
        { text: "The joke cracked the ice on the frozen lake." },
        { text: "The joke made Ana feel cold and lonely." },
        { text: "The joke got Lucy in trouble with the counselor." }
      ],
      clue: "Read the sentences just before and just after the joke. How do Ana and Lucy get along before it, and after it?",
      why: "The answer is \"The joke helped the girls stop feeling shy and start talking.\" Before the joke, Ana didn't know anyone. After it, she and Lucy are best friends. \"Break the ice\" is an idiom for getting past the shy, quiet start when people first meet. The lake is warm enough for canoes, so no real ice cracked." },
    { id: "SK-SS2a-TB2", type: "hottext", points: 1, dok: 2, passages: ["p3"],
      prompt: "Select the sentence from paragraphs 3, 4 and 5 that uses an idiom.",
      targets: ["p3:3:1", "p3:3:3", "p3:4:2", "p3:5:2", "p3:5:3"],
      answer: ["p3:5:3"], pick: 1,
      clue: "An idiom is a saying that does not mean what its words say. Look for words that would sound silly if you pictured them exactly.",
      why: "The answer is \"By the time we hit the hay, I am too tired to keep my eyes open.\" No one really hits any hay. \"Hit the hay\" is an idiom that means go to bed, and the rest of the sentence, about being too tired to keep her eyes open, fits that meaning. The sky sentence is a metaphor, and the other sentences mean just what they say." },
    { id: "SK-SS2a-TB3", type: "ebsr", points: 2, dok: 3, passages: ["p3"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Ana writes, \"Our counselor, Jo, is a walking map.\" What does Ana mean?",
        choices: [
          { text: "Jo knows her way around the camp very well.", correct: true },
          { text: "Jo carries a big paper map everywhere she goes." },
          { text: "Jo walks slowly so that everyone can keep up." },
          { text: "Jo likes to draw maps of the lake." }
        ] },
      partB: { prompt: "Which sentence from the letter best helps you understand what Ana means?",
        choices: [
          { text: "\"She never gets lost, and she knows every path through the woods.\"", correct: true },
          { text: "\"Yesterday, we took canoes out on the lake.\"" },
          { text: "\"At night, we sit by the campfire and sing songs.\"" },
          { text: "\"Camp Pine Lake is the best place in the world!\"" }
        ] },
      clue: "Jo is not really a map. Think about what a map helps people do. Then read what Ana says about Jo next.",
      why: "Part A: Jo knows her way around the camp very well. Part B: \"She never gets lost, and she knows every path through the woods.\" A map shows you how to get places. Saying Jo is a walking map, without like or as, is a metaphor: Jo can show the way just like a map can. The letter never says Jo carries or draws a map." },
    { id: "SK-SS2a-TB4", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Which sentence from the letter uses a simile?",
      choices: [
        { text: "My canoe wobbled like a bowl of jelly when I climbed in.", correct: true },
        { text: "Of all the things we do here, I like the canoes best." },
        { text: "Our counselor, Jo, is a walking map." },
        { text: "Then a girl named Lucy told a silly joke about a frog, and that broke the ice." }
      ],
      clue: "A simile compares two different kinds of things using like or as. Be careful: not every like makes a comparison.",
      why: "The answer is \"My canoe wobbled like a bowl of jelly when I climbed in.\" It uses like to compare the shaky canoe to wobbly jelly. \"I like the canoes best\" uses like to mean enjoy, so it compares nothing. The walking map sentence is a metaphor, and \"broke the ice\" is an idiom." },
    { id: "SK-SS2a-TB5", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Ana writes, \"The sky is a dark blanket sprinkled with glitter.\" What does she want Grandpa to picture?",
      choices: [
        { text: "a black sky full of bright, twinkling stars", correct: true },
        { text: "a blanket spread out on the grass by the fire" },
        { text: "a sky full of gray rain clouds" },
        { text: "glitter left over from an art project at camp" }
      ],
      clue: "Ana is sitting by the campfire after sundown. What tiny, shiny things could be scattered across the sky above her?",
      why: "The answer is \"a black sky full of bright, twinkling stars.\" At night the sky is dark like a blanket, and the stars shine like tiny bits of glitter. There is no real blanket or glitter in the sky, and rain clouds would hide the sparkles, not show them." }
  ]
});

/* ---------- 3.T.SS.2.b Use similes, metaphors and idioms in writing ---------- */
PP.addLesson({
  code: "3.T.SS.2.b",
  title: "Use figurative language in your writing: similes, metaphors, idioms and more",
  teach: {
    big: "You can make your writing come alive with figurative language: a simile with like or as, a metaphor that says one thing is another, an idiom, and more, as long as it fits what you mean.",
    points: [
      "First decide what you want your reader to picture or feel. Is it fast, loud, quiet, happy or scared?",
      "Think of something that is very fast, loud or quiet. Then compare: \"as quiet as a mouse.\" Make sure the comparison fits. A slow bus is \"as slow as a turtle,\" not \"as fast as a jet.\"",
      "Use an idiom only when its meaning matches. \"A piece of cake\" means easy, so it fits an easy test, not a hard one.",
      "A comparison shows how two ideas are alike. It helps your reader connect a new idea to one they already know.",
      "Similes, metaphors and idioms are not the only kinds of figurative language. You can also give a thing a person's actions, like \"The wind whispered through the trees.\" Use it only if it fits what you mean."
    ],
    words: [
      { term: "simile", means: "a comparison that uses like or as" },
      { term: "metaphor", means: "a comparison that says one thing is another" },
      { term: "idiom", means: "a saying that means something different from its words" }
    ],
    example: {
      label: "Before and after",
      lines: ["Before: The hallway was quiet.", "After: The hallway was as quiet as a library at night."],
      note: "The writer wanted the reader to feel how quiet it was. A library at night is about as quiet as a place can be, so the simile fits."
    },
    tip: "On the test, you may choose the best simile or idiom to add to a student's draft, or the best place to add one. Check that the comparison matches what the writer means."
  },
  learn: [
    {
      show: ["Our new puppy runs very fast."],
      ask: "Which simile fits best: \"like a rocket\" or \"like a snail\"?",
      steps: [
        "Name what the writer wants to show: the puppy is very fast.",
        "Think about each thing. A rocket is very fast. A snail is very slow.",
        "Pick the one that matches the meaning."
      ],
      answer: "\"Like a rocket\" fits: \"Our new puppy runs like a rocket.\" A snail would show the opposite."
    },
    {
      show: ["The thick fog covered the whole town."],
      ask: "How could you change this into a metaphor?",
      steps: [
        "Ask what fog is like. It is soft and gray, and it covers everything.",
        "Think of something else that is soft and covers things, like a blanket.",
        "A metaphor says the fog is that thing, without like or as."
      ],
      answer: "\"The fog was a soft gray blanket over the whole town.\""
    },
    {
      show: ["Jada thought the math quiz was very easy."],
      ask: "Which idiom fits best: \"a piece of cake\" or \"in hot water\"?",
      steps: [
        "Name the meaning the writer wants: very easy.",
        "\"A piece of cake\" means easy. \"In hot water\" means in trouble.",
        "Only one idiom matches the meaning."
      ],
      answer: "\"A piece of cake\" fits: \"For Jada, the math quiz was a piece of cake.\""
    }
  ],
  write: {
    prompt: "Write 4 to 6 sentences about a storm, a busy place or an animal you know. Use at least one simile, one metaphor and one idiom. Circle each one.",
    checklist: [
      "I used a simile with like or as.",
      "I used a metaphor that says one thing is another.",
      "I used an idiom that fits what I mean.",
      "Each comparison helps my reader picture or understand my idea."
    ],
    rows: 6
  },
  parent: "On a walk or a car ride, take turns finishing \"as ___ as a ___\" about what you see, like \"as tall as a giraffe\" or \"as loud as a fire truck.\" Talk about whether each comparison really fits.",
  passages: [
    { id: "p1", draft: true, title: "The Big Storm", byline: "Mei's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) Last night, a big storm rolled into our town.", "(2) The sky turned dark.", "(3) The wind pushed hard against our windows and shook the tall trees in our yard."],
        ["(4) Then the rain began.", "(5) Soon the thunder started, and it was very loud.", "(6) My little cat, Pepper, ran and hid under my bed until it was over."],
        ["(7) By the next morning, the storm was gone.", "(8) Our whole yard was full of muddy brown puddles.", "(9) I pulled on my rain boots and jumped in every single one.", "(10) Splashing in the puddles, I was very happy."]
      ] },
    { id: "p2", draft: true, title: "My Talent Show", byline: "Andre's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) Last Friday, our school had a talent show in the gym.", "(2) I signed up to play the drums.", "(3) Before the show, I was very nervous.", "(4) My hands would not stop shaking."],
        ["(5) When it was my turn, I walked out onto the stage.", "(6) I could hardly see the people in the crowd.", "(7) I counted to four and started to play.", "(8) My drumsticks moved very fast."],
        ["(9) When I finished, everyone clapped and cheered.", "(10) The sound of all that clapping was loud.", "(11) I felt proud."],
        ["(12) Next year, I want to play an even harder song."]
      ] }
  ],
  practice: [
    { id: "SK-SS2b-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Mei wants to add a simile to sentence 2 to help the reader picture the sky. Which revision is best?",
      choices: [
        { text: "The sky turned as dark as a cave.", correct: true },
        { text: "The sky turned dark as the storm came." },
        { text: "The sky turned as white as fresh milk." },
        { text: "The sky turned very, very, very dark." }
      ],
      clue: "A simile compares two different things. Check that the sentence really compares, and that the comparison shows a dark sky.",
      why: "The answer is \"The sky turned as dark as a cave.\" It compares the sky to a cave using as, and a cave is very dark. \"Dark as the storm came\" uses as to tell when, not to compare. White milk shows the opposite of dark." },
    { id: "SK-SS2b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Mei wants to replace sentence 5 with a metaphor that shows how loud the thunder was. Which sentence is best?",
      choices: [
        { text: "Soon the thunder was a giant drum shaking the house.", correct: true },
        { text: "Soon the thunder was like a soft whisper in my ear." },
        { text: "Soon the thunder was a tiny bell ringing far away." },
        { text: "Soon the thunder started, and Pepper got scared." }
      ],
      clue: "Two things must be true. The sentence must say the thunder is something else without like or as, and that something must be loud.",
      why: "The answer is \"Soon the thunder was a giant drum shaking the house.\" It says the thunder was a drum, which is a metaphor, and a giant drum is loud. The whisper uses like and is quiet, and a tiny far-off bell is quiet too." },
    { id: "SK-SS2b-P3", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Mei wants to revise sentence 10 with an idiom that shows she was very happy. Choose the idiom that fits best.",
      text: "Splashing in the puddles, I was {0}.",
      slots: [{ options: ["on cloud nine", "under the weather", "in hot water"], answer: 0 }],
      clue: "Think about what each saying really means. Which one means very happy?",
      why: "The answer is on cloud nine. That idiom means very happy. Under the weather means sick, and in hot water means in trouble." },
    { id: "SK-SS2b-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Mei wrote some new sentences for her story. Match each one to the kind of figurative language it uses.",
      cols: ["Simile", "Metaphor", "Idiom"],
      rows: [
        { text: "The wind howled like a hungry wolf.", answer: 0 },
        { text: "The puddles were shiny mirrors on the grass.", answer: 1 },
        { text: "It was raining cats and dogs.", answer: 2 },
        { text: "The thunder was as loud as a marching band.", answer: 0 }
      ],
      clue: "Look for like or as first. Then ask: does the sentence say one thing is another, or is it a saying you cannot read word for word?",
      why: "The wolf and the marching band sentences are similes because they use like or as. \"The puddles were shiny mirrors\" is a metaphor. \"Raining cats and dogs\" is an idiom that means raining very hard." },
    { id: "SK-SS2b-P5", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Mei wants to add this sentence: \"The raindrops danced and drummed on our roof.\" Where is the best place to add it?",
      choices: [
        { text: "after sentence 4", correct: true },
        { text: "after sentence 1" },
        { text: "after sentence 7" },
        { text: "after sentence 9" }
      ],
      clue: "The new sentence is about rain falling. Find the sentence where the rain starts.",
      why: "The answer is after sentence 4. Sentence 4 says, \"Then the rain began,\" so the dancing raindrops come right after it. By sentence 7 the storm is gone, and in sentence 1 the rain has not started. This sentence gives the raindrops a person's actions, dancing and drumming, which is another kind of figurative language." }
  ],
  test: [
    { id: "SK-SS2b-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Andre wants to revise sentence 8 with a simile that shows how fast his drumsticks moved. Which revision is best?",
      choices: [
        { text: "My drumsticks moved as fast as a hummingbird's wings.", correct: true },
        { text: "My drumsticks moved as slowly as a sleepy snail." },
        { text: "My drumsticks moved fast, and the crowd watched." },
        { text: "My drumsticks were made of smooth brown wood." }
      ],
      clue: "The sentence must use like or as to compare, and the thing it compares to must be fast.",
      why: "The answer is \"My drumsticks moved as fast as a hummingbird's wings.\" It uses as to compare, and hummingbird wings move very fast. A snail shows slow, and the other two do not compare anything." },
    { id: "SK-SS2b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Andre wants to revise sentence 3 with an idiom that shows how nervous he was. Which revision is best?",
      choices: [
        { text: "Before the show, I was a bundle of nerves.", correct: true },
        { text: "Before the show, I was as cool as a cucumber." },
        { text: "Before the show, I was on top of the world." },
        { text: "Before the show, I was under the weather." }
      ],
      clue: "Read sentence 4 to see how Andre felt. Then think about what each saying really means.",
      why: "The answer is \"Before the show, I was a bundle of nerves.\" That idiom means very nervous, which matches his shaking hands. Cool as a cucumber means calm, on top of the world means very happy, and under the weather means sick." },
    { id: "SK-SS2b-T3", type: "ms", points: 2, dok: 2, passages: ["p2"], pick: 2,
      prompt: "Andre wants to replace sentence 10 with a comparison that shows how loud the clapping was. Which TWO sentences would work?",
      choices: [
        { text: "The clapping was a roaring thunderstorm.", correct: true },
        { text: "The clapping was as loud as fireworks.", correct: true },
        { text: "The clapping was as quiet as a feather." },
        { text: "The clapping was like a soft spring breeze." },
        { text: "The clapping went on for a long time." }
      ],
      clue: "Each answer must compare the clapping to something else, and that something must be loud.",
      why: "The answers are \"The clapping was a roaring thunderstorm\" and \"The clapping was as loud as fireworks.\" Both compare the clapping to something loud. A feather and a soft breeze are quiet, and \"went on for a long time\" does not compare anything." },
    { id: "SK-SS2b-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Andre wants to add this sentence: \"The stage lights were as bright as the summer sun.\" Where is the best place to add it?",
      choices: [
        { text: "after sentence 5", correct: true },
        { text: "after sentence 2" },
        { text: "after sentence 9" },
        { text: "after sentence 12" }
      ],
      clue: "The new sentence is about the stage lights. Find where Andre is on the stage, and look for a sentence that the bright lights would help explain.",
      why: "The answer is after sentence 5. Andre walks onto the stage in sentence 5. Only after sentence 5 does the bright light explain sentence 6, where Andre can hardly see the crowd. In the other places, the lights would not explain anything nearby." },
    { id: "SK-SS2b-T5", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Andre wants to replace sentence 11 with a simile that shows the same feeling. Choose the simile that fits best.",
      text: "I felt {0}.",
      slots: [{ options: ["puffed up like a peacock", "as busy as a bee", "as quiet as a mouse"], answer: 0 }],
      clue: "Reread sentence 11 to name Andre's feeling. Then think about what each animal is known for.",
      why: "The answer is puffed up like a peacock. A peacock puffs up and spreads its bright feathers as if it is showing off, so this simile shows the proud feeling in sentence 11. A busy bee shows working hard, and a quiet mouse shows being shy or silent. Neither matches how Andre felt after the cheering." }
  ]
});
