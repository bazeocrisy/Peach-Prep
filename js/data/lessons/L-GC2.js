/* Lessons: 3-5.L.GC.2 Syntax (sentence structure). Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.L.GC.2.a",
  title: "Complete sentences: simple, compound and complex",
  teach: {
    big: "A sentence needs a who, a does-what and a whole thought. You can build one three ways: simple, compound or complex.",
    points: [
      "A complete sentence tells who or what it is about (the subject) and what they do or are (the verb). It makes sense all by itself. A command like \"Close the door.\" is complete too: the who is you, even though the word is not written.",
      "A fragment is only a piece of a sentence. It is missing a who or a does-what, or it leaves you waiting for more, like \"When the bell rang.\"",
      "A run-on is two sentences crammed together with nothing between them, or with only a comma between them.",
      "A simple sentence has one whole thought. It can name two people or tell two actions and still be simple, like \"The cat and the dog ran and hid.\" A compound sentence joins two whole thoughts with a comma and a joining word: and, but, or, so.",
      "A complex sentence has one whole thought plus a part that cannot stand alone. That part has its own who and does-what, and it starts with a word like because, when, after, before or if."
    ],
    words: [
      { term: "subject", means: "who or what the sentence is about" },
      { term: "verb", means: "what the subject does or is" },
      { term: "fragment", means: "a piece of a sentence that is not complete" },
      { term: "run-on", means: "two sentences run together without the right joining" }
    ],
    example: {
      label: "Example",
      lines: [
        "Simple: The frogs croaked all night.",
        "Compound: The frogs croaked all night, so I did not sleep.",
        "Complex: Because the frogs croaked all night, I did not sleep.",
        "Fragment: Because the frogs croaked all night.",
        "Run-on: The frogs croaked all night I did not sleep."
      ],
      note: "The first three are correct sentences. The fragment starts like the complex sentence but stops before the whole thought. The run-on has two whole thoughts with nothing to join them."
    },
    tip: "On the test, you may be asked which sentence is complete or which one is written correctly. You may also read a student's draft and find the fragment or run-on, choose the best way to fix it, or find a sentence of one kind. Read each sentence by itself and ask: Does it have a who, a does-what and a whole thought?"
  },
  learn: [
    {
      show: ["After the storm passed over Columbus."],
      ask: "Is this a complete sentence or a fragment?",
      steps: [
        "Find the who or what: the storm.",
        "Find the does-what: passed. So it has a subject and a verb.",
        "Now check for a whole thought. The word After makes you wait. After the storm passed, what happened?",
        "It leaves you waiting, so it is not complete."
      ],
      answer: "It is a fragment. You could fix it like this: After the storm passed over Columbus, the sky turned pink."
    },
    {
      show: ["From a student's draft:", "(1) Kofi and his cousin fished in the creek. (2) Kofi caught a small fish, but his cousin caught nothing. (3) When the sun went down, they walked home."],
      ask: "Which sentence is simple, which is compound, and which is complex?",
      steps: [
        "Sentence 1: and joins two people, Kofi and his cousin. There is only one does-what, fished, and one whole thought. So sentence 1 is simple.",
        "Sentence 2: \"Kofi caught a small fish\" can stand alone. \"His cousin caught nothing\" can stand alone too. Two whole thoughts joined by a comma and but make it compound.",
        "Sentence 3: \"They walked home\" can stand alone. \"When the sun went down\" has a who and a does-what, but it cannot stand alone, because When leaves you waiting.",
        "One whole thought plus a part that cannot stand alone makes sentence 3 complex."
      ],
      answer: "Sentence 1 is simple, sentence 2 is compound, and sentence 3 is complex."
    },
    {
      show: ["The library was closed we went to the park instead."],
      ask: "Is this sentence written correctly? If not, how can you fix it?",
      steps: [
        "Look for where one thought ends. \"The library was closed\" is a whole thought.",
        "\"We went to the park instead\" is another whole thought.",
        "Two whole thoughts with nothing between them make a run-on.",
        "Fix it with an end mark, or with a comma and a joining word that makes sense, like so."
      ],
      answer: "It is a run-on. One way to fix it: The library was closed, so we went to the park instead."
    }
  ],
  parent: "When your child tells you about the day, pick one sentence and play \"sentence builder\": say it as a simple sentence, add and, but or so to make it compound, then start it with because or when to make it complex. You can also read a few sentences from a book out loud and ask, \"Was that one simple, compound or complex?\"",
  passages: [
    /* PP-004: two short student drafts so the skill is practiced inside a text, not only on single
       sentences. p1 is for practice and p2 for the check. Each draft has exactly one fragment and
       one run-on; every other sentence is correct. Sentence types (for reviewers):
       p1: (1) simple (2) simple (3) compound (4) simple (5) FRAGMENT (6) simple (7) RUN-ON
           (8) complex (9) simple (10) complex (11) simple
       p2: (1) simple (2) simple (3) simple (4) compound (5) FRAGMENT (6) simple (7) simple
           (8) RUN-ON (9) simple (10) simple (11) complex */
    { id: "p1", title: "Our Class Garden", byline: "Maya's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) This spring, our class planted a garden behind the school.", "(2) First, we dug up the hard dirt with small shovels.", "(3) Mr. Hall brought a bag of rich soil, and we mixed it into the dirt.", "(4) Next, we planted rows of beans and carrots."],
        ["(5) Because the weather was dry.", "(6) We watered the rows every morning.", "(7) The beans grew fast the carrots took much longer."],
        ["(8) When the beans were ready, we picked them for a class snack.", "(9) The carrots should be ready in a few more weeks.", "(10) We will cook them in a soup after we pull them up.", "(11) I can hardly wait!"]
      ] },
    { id: "p2", title: "The Old Lighthouse", byline: "Jordan's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) Last summer, my family visited an old lighthouse on the Georgia coast.", "(2) The tall white tower stood on a sandy point near the ocean."],
        ["(3) We climbed the long, winding stairs to the top.", "(4) My legs ached, but I kept going.", "(5) When we reached the top.", "(6) We could see boats far out on the water."],
        ["(7) A guide told us about the keepers from long ago.", "(8) Each night, a keeper climbed the stairs he lit the big lamp.", "(9) The bright light warned ships about the rocks.", "(10) Today, the lamp turns on by itself."],
        ["(11) Before we left, I bought a postcard of the lighthouse."]
      ] },
    /* B5-b5a:passages:start */
    {
      id: "p3",
      title: "Fireflies in the Backyard",
      byline: "Amari's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On warm summer nights, fireflies float over our backyard.",
          "(2) My sister and I run outside with a jar."
        ],
        [
          "(3) We catch a few fireflies, and we watch them glow.",
          "(4) Dad pokes holes in the lid.",
          "(5) When the jar glows like a tiny lantern.",
          "(6) We feel very proud."
        ],
        [
          "(7) We let every firefly go before we go to bed.",
          "(8) The fireflies fly up into the trees we wave goodbye.",
          "(9) Tomorrow night, I will look for them again.",
          "(10) Mom lets us try again next week.",
          "(11) I will bring a bigger jar.",
          "(12) Maybe my friends will come too."
        ]
      ]
    },
    {
      id: "p4",
      title: "The Garage Sale",
      byline: "Malik's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our family held a garage sale last Saturday.",
          "(2) I sold my old toys and a stack of comic books.",
          "(3) Mom put price tags on everything, and Dad set up the tables."
        ],
        [
          "(4) A neighbor bought my red wagon.",
          "(5) She gave me five dollars.",
          "(6) Dad counted the coins.",
          "(7) Then put them in a jar."
        ],
        [
          "(8) We packed the leftover toys in a box before we went inside.",
          "(9) On Monday, we took the box to the shelter.",
          "(10) If I save my money, I can buy a soccer ball.",
          "(11) It was a busy, happy day.",
          "(12) Mom was proud of us."
        ]
      ]
    },
    {
      id: "p5",
      title: "Chalk Art Day",
      byline: "Imani's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our school held a chalk art day on the playground.",
          "(2) Every class got a square of the blacktop."
        ],
        [
          "(3) My group drew a giant sea turtle.",
          "(4) In the middle of our square.",
          "(5) Jordan and Nia added green waves."
        ],
        [
          "(6) When the rain came, our art washed away.",
          "(7) We took a picture first, and it hangs in the front hall now.",
          "(8) Next spring, we will draw a bigger turtle."
        ],
        [
          "(9) Many parents came to see our work.",
          "(10) Mr. Vega gave every class a ribbon.",
          "(11) Our ribbon is blue.",
          "(12) I had the best time ever."
        ]
      ]
    },
    {
      id: "p6",
      title: "Learning to Kayak",
      byline: "Zuri's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) This summer, I took kayak lessons at the lake near our town.",
          "(2) My teacher, Ms. Reed, gave me a bright orange life jacket."
        ],
        [
          "(3) First, I sat down in the kayak, and she pushed me from the shore.",
          "(4) My paddle felt heavy.",
          "(5) Because the water was calm.",
          "(6) I could paddle straight across the lake."
        ],
        [
          "(7) My arms got tired the sun got hot.",
          "(8) When I reached the dock, Ms. Reed clapped."
        ],
        [
          "(9) I want to try a river next summer.",
          "(10) I will wear sunscreen before we start."
        ],
        [
          "(11) Ms. Reed is a very kind teacher.",
          "(12) I thanked her at the end."
        ]
      ]
    },
    {
      id: "p7",
      title: "Building a Tree House",
      byline: "Kofi's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) My uncle and I built a tree house in the old oak tree.",
          "(2) We carried the boards up a tall ladder."
        ],
        [
          "(3) Uncle Ray measured every board, and I held the nails.",
          "(4) The hammer was too heavy for me.",
          "(5) When the floor was done.",
          "(6) We stopped for lemonade."
        ],
        [
          "(7) Before we built the walls, we drew a plan on paper.",
          "(8) The walls went up fast the roof took all afternoon.",
          "(9) Now my tree house is my favorite place to read."
        ],
        [
          "(10) Next week, we will add a small window.",
          "(11) I will paint the door blue."
        ]
      ]
    }
  /* B5-b5a:passages:end */
  ],
  practice: [
    { id: "SK-GC2a-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which of these is a complete sentence?",
      choices: [
        { text: "The baby goat jumped onto the hay bale.", correct: true },
        { text: "The baby goat on top of the hay bale." },
        { text: "Jumped onto the hay bale after lunch." },
        { text: "When the baby goat jumped onto the hay." }
      ],
      clue: "Check each choice for three things: a who, a does-what, and a thought that does not leave you waiting.",
      why: "The answer is \"The baby goat jumped onto the hay bale.\" It has a who (the baby goat), a does-what (jumped) and a whole thought. \"The baby goat on top of the hay bale\" has no verb. \"Jumped onto the hay bale after lunch\" has no subject. The one that starts with When leaves you waiting." },
    { id: "SK-GC2a-P2", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each one a complete sentence, a fragment or a run-on? Match each one to its kind.",
      cols: ["Complete sentence", "Fragment", "Run-on"],
      rows: [
        { text: "The bus was late, so we walked to school.", answer: 0 },
        { text: "Before the sun came up over the hills.", answer: 1 },
        { text: "Our team won the game we got a trophy.", answer: 2 },
        { text: "Under the porch near the garden hose.", answer: 1 }
      ],
      clue: "Read each one by itself. Is a who or a does-what missing? Does it leave you waiting? Or are two whole thoughts crammed together?",
      why: "\"The bus was late, so we walked to school.\" is complete: two whole thoughts joined with a comma and so. \"Before the sun came up over the hills.\" is a fragment because it leaves you waiting. \"Under the porch near the garden hose.\" is a fragment because it has no who and no does-what. \"Our team won the game we got a trophy.\" is a run-on: two whole thoughts with nothing between them." },
    { id: "SK-GC2a-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is a compound sentence?",
      choices: [
        { text: "The wind blew hard, and the leaves fell from the trees.", correct: true },
        { text: "The wind and the rain shook the windows all night long." },
        { text: "When the wind blew hard, the leaves fell from the trees." },
        { text: "The leaves fell from the trees and landed in the yard." }
      ],
      clue: "A compound sentence joins two whole thoughts with a comma and a joining word. Check whether the words on each side of the joining word could stand alone as a sentence.",
      why: "The answer is \"The wind blew hard, and the leaves fell from the trees.\" \"The wind blew hard\" and \"the leaves fell from the trees\" are both whole thoughts. In the windows sentence, and only joins two nouns. In the yard sentence, and joins two verbs that share one subject, so it is simple. The sentence that starts with When is complex." },
    { id: "SK-GC2a-P4", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that makes this a correct complex sentence.",
      text: "{0} we finished our chores, Mom took us to the pool.",
      slots: [{ options: ["After", "And", "So"], answer: 0 }],
      clue: "A complex sentence has a part that cannot stand alone. Which word makes the first part tell when something happened?",
      why: "The answer is After: \"After we finished our chores, Mom took us to the pool.\" After makes the first part tell when, and that part cannot stand alone. And and so join two whole sentences in the middle, so they do not belong at the start here." },
    { id: "SK-GC2a-P7", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "One sentence in Maya's draft is a run-on. Select that sentence.",
      targets: ["p1:1:3", "p1:2:1", "p1:2:2", "p1:2:3", "p1:3:1"],
      answer: ["p1:2:3"], pick: 1,
      clue: "A run-on has two whole thoughts with nothing to join them. Read each sentence slowly. Is there a spot where one thought ends and a new one starts, with no end mark and no comma and joining word?",
      why: "The answer is sentence 7, \"The beans grew fast the carrots took much longer.\" \"The beans grew fast\" is one whole thought, and \"the carrots took much longer\" is another, with nothing between them. Maya could write: The beans grew fast, but the carrots took much longer. None of the other sentences has two whole thoughts crammed together with nothing between them." },
    { id: "SK-GC2a-P9", type: "ms", points: 2, dok: 2, passages: ["p1"],
      prompt: "Which TWO sentences in Maya's draft are complex sentences?",
      pick: 2,
      choices: [
        { text: "(8) When the beans were ready, we picked them for a class snack.", correct: true },
        { text: "(10) We will cook them in a soup after we pull them up.", correct: true },
        { text: "(3) Mr. Hall brought a bag of rich soil, and we mixed it into the dirt." },
        { text: "(4) Next, we planted rows of beans and carrots." },
        { text: "(5) Because the weather was dry." }
      ],
      clue: "A complex sentence has a whole thought plus a part that cannot stand alone. That part can come at the start or at the end. A part all by itself, with no whole thought, is not a sentence at all.",
      why: "The answers are sentence 8, \"When the beans were ready, we picked them for a class snack.\" and sentence 10, \"We will cook them in a soup after we pull them up.\" Each has a whole thought plus a part that starts with when or after. Sentence 3 is compound: two whole thoughts joined with a comma and and. Sentence 4 is simple. Sentence 5 has no whole thought, so it is a fragment." },
    { id: "SK-GC2a-P8", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Sentence 5 in Maya's draft is a fragment. Which is the best way to join sentences 5 and 6 to fix it?",
      choices: [
        { text: "Because the weather was dry, we watered the rows every morning.", correct: true },
        { text: "Because the weather was dry, and we watered the rows every morning." },
        { text: "The weather was dry, we watered the rows every morning." },
        { text: "Because the weather was dry every morning." }
      ],
      clue: "A good fix keeps both ideas and leaves you with a whole thought. Check each choice: Does it leave you waiting? Are two whole thoughts held together by only a comma?",
      why: "The answer is \"Because the weather was dry, we watered the rows every morning.\" The because part now has a whole thought to go with it, so it no longer leaves you waiting. In the choice with and, both parts hang on Because, so it still leaves you waiting. The choice that starts with The weather has two whole thoughts with only a comma, so it is a run-on. \"Because the weather was dry every morning.\" is still a fragment." }
  ],
  /* B5-b5a:core:start */
  /* ---------- Expansion 2026-10-22, batch B5 (author b5a) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages p3 to p5 are used only by core; p6 and p7 only by the similar bank. None is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B5-b5a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GC2a-P7" },
          { ref: "SK-GC2a-P9" },
          { ref: "SK-GC2a-P8" },
          {
            id: "SK-GC2a-C04",
            type: "ms",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.a"],
            passages: [],
            prompt: "Tasha wrote the start of a sentence. Choose the TWO endings that make it a compound sentence.",
            stem: "Tasha packed her lunch, ____",
            pick: 2,
            choices: [
              { text: "and her brother packed a snack.", correct: true },
              { text: "but she forgot her water bottle.", correct: true },
              { text: "and zipped her backpack." },
              { text: "because the trip was long." },
              { text: "before the bus came." }
            ],
            clue: "A compound sentence joins two whole thoughts with a comma and a joining word. Each ending must add a second whole thought.",
            hints: [
              "A compound sentence joins two whole thoughts with a comma and a joining word. Each ending must add a second whole thought.",
              "Check the first word of each ending. Then ask whether the ending names its own who and its own does-what.",
              "One ending starts with a joining word, but it only tells another thing Tasha did, with no new who. Check the other four."
            ],
            how: [
              "Read the start: \"Tasha packed her lunch\" is one whole thought. A compound sentence needs a second whole thought joined with a comma and and, but, or, so.",
              "Test each ending. \"and zipped her backpack\" has no new who, so it is still one subject doing two things. \"because the trip was long\" and \"before the bus came\" start parts that cannot stand alone.",
              "The two endings that start with a joining word and then have their own who and does-what are \"and her brother packed a snack.\" and \"but she forgot her water bottle.\""
            ],
            misconception: "A common mix-up is picking an ending that starts with and but adds only another action, or one that starts with because or before. Those do not add a second whole thought.",
            why: "The answers are \"and her brother packed a snack.\" and \"but she forgot her water bottle.\" Each starts with a joining word from the lesson and then has its own who and does-what, so the sentence has two whole thoughts. \"and zipped her backpack.\" only adds another action by Tasha. \"because the trip was long.\" and \"before the bus came.\" start parts that cannot stand alone, so they make complex sentences."
          },
          {
            id: "SK-GC2a-C05",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.a"],
            passages: [],
            prompt: "A lifeguard calls out a safety rule. Which rule is a complete sentence?",
            choices: [
              { text: "Walk slowly around the wet pool deck.", correct: true },
              { text: "The wet pool deck near the shallow end." },
              { text: "Slowly and carefully around the wet pool deck." },
              { text: "Because the pool deck is wet." }
            ],
            clue: "A complete sentence tells who or what it is about and what they do, and it makes sense all by itself.",
            hints: [
              "A complete sentence tells who or what it is about and what they do, and it makes sense all by itself.",
              "Check each choice for a does-what. Then ask who is doing it, even if the who is not written out.",
              "One choice starts with a word that leaves you waiting for more. Look at the other three."
            ],
            how: [
              "Check each choice for a does-what and a whole thought.",
              "\"The wet pool deck near the shallow end.\" names a place but no action. \"Slowly and carefully around the wet pool deck.\" has no action word at all. \"Because the pool deck is wet.\" leaves you waiting.",
              "\"Walk slowly around the wet pool deck.\" is a command. The who is you, even though the word is not written, so it is complete."
            ],
            misconception: "A common mix-up is thinking every complete sentence must show its who. A command leaves out you.",
            why: "The answer is \"Walk slowly around the wet pool deck.\" It is a command: the who is you, and walk is the does-what, so it is a whole thought. \"The wet pool deck near the shallow end.\" and \"Slowly and carefully around the wet pool deck.\" have no does-what. \"Because the pool deck is wet.\" has a who and a does-what, but Because leaves you waiting."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GC2a-C06",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.a"],
            passages: ["p3"],
            prompt: "Which sentence in Amari's draft is a fragment?",
            choices: [
              { text: "(5) When the jar glows like a tiny lantern.", correct: true },
              { text: "(7) We let every firefly go before we go to bed." },
              { text: "(8) The fireflies fly up into the trees we wave goodbye." },
              { text: "(9) Tomorrow night, I will look for them again." }
            ],
            clue: "A fragment is only a piece of a sentence. Check each choice for a who, a does-what and a thought that does not leave you waiting.",
            hints: [
              "A fragment is only a piece of a sentence. Check each choice for a who, a does-what and a thought that does not leave you waiting.",
              "Read each choice by itself, out loud, as if it were the only sentence on the page. Listen for the one that makes you wait.",
              "One choice has two whole thoughts, so its problem is not a missing piece. Look at the other three."
            ],
            how: [
              "Read each choice by itself and ask: Does it leave me waiting?",
              "\"(7) We let every firefly go before we go to bed.\" and \"(9) Tomorrow night, I will look for them again.\" each have a whole thought. \"(8) The fireflies fly up into the trees we wave goodbye.\" has too much: two whole thoughts with nothing between them.",
              "\"(5) When the jar glows like a tiny lantern.\" has a who and a does-what, but When leaves you waiting for what happens. It is a fragment."
            ],
            misconception: "A common mix-up is choosing the run-on because it sounds wrong. A fragment is missing a piece. A run-on has too much.",
            why: "The answer is sentence 5, \"(5) When the jar glows like a tiny lantern.\" The word When leaves you waiting to find out what happens, so it is not a whole thought. Sentence 8 is a run-on, not a fragment. Sentences 7 and 9 each have a whole thought."
          },
          {
            id: "SK-GC2a-C07",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.a"],
            passages: ["p3"],
            prompt: "Amari wants to fix sentence 8 by making it two sentences. Which choice does that correctly?",
            choices: [
              { text: "The fireflies fly up into the trees. We wave goodbye.", correct: true },
              { text: "The fireflies fly up into the trees, we wave goodbye." },
              { text: "The fireflies fly up into the trees. Because we wave goodbye." },
              { text: "The fireflies fly up into the trees. we wave goodbye." }
            ],
            clue: "A run-on has two whole thoughts with nothing between them. To split it, find where the first thought ends.",
            hints: [
              "A run-on has two whole thoughts with nothing between them. To split it, find where the first thought ends.",
              "Find the spot in sentence 8 where the first whole thought ends. Then decide what must come at that spot and how the next word must look.",
              "A comma alone does not fix a run-on, because two whole thoughts are still held together by only a comma. Check the other three."
            ],
            how: [
              "Find where the first thought ends: \"The fireflies fly up into the trees\" is a whole thought.",
              "\"we wave goodbye\" is a second whole thought, so it needs its own sentence.",
              "Put an end mark after trees and start the next sentence with a capital letter: \"The fireflies fly up into the trees. We wave goodbye.\"",
              "The comma choice is still a run-on, the Because choice makes a fragment, and the choice with a small letter forgets the capital."
            ],
            misconception: "A common mix-up is thinking a comma is enough to hold two whole thoughts together.",
            why: "The answer is \"The fireflies fly up into the trees. We wave goodbye.\" Each part is a whole thought, so each gets its own end mark and capital letter. A comma alone still leaves a run-on. \"Because we wave goodbye.\" is a fragment. A sentence that starts with a small letter is not written correctly."
          },
          {
            id: "SK-GC2a-C08",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.a"],
            passages: ["p3"],
            prompt: "Sentence 2 in Amari's draft names two people. Why is it still a simple sentence?",
            choices: [
              {
                text: "Both people do the same thing, so there is only one whole thought.",
                correct: true
              },
              { text: "It is short, and every short sentence is a simple sentence." },
              { text: "It has a part that cannot stand alone, so it counts as simple." },
              { text: "Each person does a different thing, so each gets a whole thought." }
            ],
            clue: "A simple sentence has one whole thought. Count the whole thoughts, not the people.",
            hints: [
              "A simple sentence has one whole thought. Count the whole thoughts, not the people.",
              "Read sentence 2 and find its does-what. Ask how many different things are done, and who does them.",
              "The kind of sentence depends on the number of whole thoughts, not on how short it is. Check the other choices against the sentence."
            ],
            how: [
              "Find the who in sentence 2: my sister and I. That is two people.",
              "Find the does-what: run outside with a jar. There is only one, and both people do it together.",
              "One does-what makes one whole thought, so the sentence is simple. The answer is \"Both people do the same thing, so there is only one whole thought.\""
            ],
            misconception: "A common mix-up is thinking that and always makes a sentence compound. It makes a compound sentence only when it joins two whole thoughts.",
            why: "The answer is \"Both people do the same thing, so there is only one whole thought.\" In \"My sister and I run outside with a jar,\" the word and joins two people, and both of them run. A sentence is not simple because it is short. It has no part that cannot stand alone. The two people do not do different things."
          },
          {
            id: "SK-GC2a-C09",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.a"],
            passages: ["p4"],
            prompt: "Sentence 7 in Malik's draft has no who. Which choice fixes it best?",
            choices: [
              { text: "Then he put them in a jar.", correct: true },
              { text: "Then, put them in a jar." },
              { text: "Then the coins in the jar." },
              { text: "Then put them in a jar quickly." }
            ],
            clue: "Every complete sentence needs a who and a does-what. Find the piece the broken sentence is missing, then add it.",
            hints: [
              "Every complete sentence needs a who and a does-what. Find the piece the broken sentence is missing, then add it.",
              "Read sentences 6 and 7 together. Ask who put the coins away, and where that who belongs in sentence 7.",
              "Adding a comma does not add a who. Check the other choices to see which ones really name someone."
            ],
            how: [
              "Sentence 7 has a does-what, put, but no one doing it.",
              "Sentence 6 says Dad counted the coins, so the one who put them in the jar is Dad. A word that stands for Dad is he.",
              "The answer is \"Then he put them in a jar.\" The other choices still have no one doing the action."
            ],
            misconception: "A common mix-up is changing the punctuation or adding more words without adding a who.",
            why: "The answer is \"Then he put them in a jar.\" Now the sentence has a who (he) and a does-what (put). \"Then, put them in a jar.\" only adds a comma. \"Then the coins in the jar.\" has no does-what. \"Then put them in a jar quickly.\" still has no who."
          },
          {
            id: "SK-GC2a-C10",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.a"],
            passages: ["p4"],
            prompt: "How is sentence 3 different from sentence 8 in Malik's draft?",
            choices: [
              {
                text: "Sentence 3 joins two whole thoughts. Sentence 8 has a part that cannot stand alone.",
                correct: true
              },
              { text: "Sentence 3 has one who and one does-what. Sentence 8 has two of each." },
              { text: "Sentence 3 is a simple sentence. Sentence 8 is a compound sentence." },
              { text: "Sentence 3 is a fragment. Sentence 8 is a whole thought." }
            ],
            clue: "To compare two sentences, break each one into its parts. Ask which parts could be a sentence by themselves.",
            hints: [
              "To compare two sentences, break each one into its parts. Ask which parts could be a sentence by themselves.",
              "Find the joining word in each sentence. Then read the part that comes after it.",
              "Both sentences have two whos and two does-whats, so that cannot be the difference. Check the other choices."
            ],
            how: [
              "Sentence 3: \"Mom put price tags on everything\" and \"Dad set up the tables\" are two whole thoughts, joined by a comma and and.",
              "Sentence 8: \"We packed the leftover toys in a box\" is a whole thought. \"before we went inside\" starts with before and leaves you waiting, so it cannot stand alone.",
              "The answer is \"Sentence 3 joins two whole thoughts. Sentence 8 has a part that cannot stand alone.\""
            ],
            misconception: "A common mix-up is counting subjects and verbs. Both sentences have two. The kind depends on whether each part can stand alone.",
            why: "The answer is \"Sentence 3 joins two whole thoughts. Sentence 8 has a part that cannot stand alone.\" Sentence 3 is compound. Sentence 8 is complex. Both sentences have two whos and two does-whats, and both are complete sentences."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GC2a-C11",
            type: "match",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.a"],
            passages: ["p5"],
            prompt: "Match each sentence from Imani's draft to the kind of sentence it is.",
            cols: ["Simple", "Compound", "Complex"],
            rows: [
              { text: "Jordan and Nia added green waves.", answer: 0 },
              { text: "When the rain came, our art washed away.", answer: 2 },
              { text: "We took a picture first, and it hangs in the front hall now.", answer: 1 },
              { text: "Next spring, we will draw a bigger turtle.", answer: 0 }
            ],
            clue: "For each sentence, count the whole thoughts and look for a joining word.",
            hints: [
              "For each sentence, count the whole thoughts and look for a joining word.",
              "Do the two sentences with a comma in them first. Ask what the words before the comma could be on their own.",
              "The sentence about Jordan and Nia has two people but only one does-what. Decide the other three rows."
            ],
            how: [
              "\"Jordan and Nia added green waves.\" has one does-what, added, so it is one whole thought. The word and joins two people. It is simple.",
              "\"When the rain came, our art washed away.\" has a whole thought plus a part that starts with When and cannot stand alone. It is complex.",
              "\"We took a picture first, and it hangs in the front hall now.\" has two whole thoughts joined by a comma and and. It is compound.",
              "\"Next spring, we will draw a bigger turtle.\" starts with a time phrase, but that phrase has no who and does-what of its own. It is simple."
            ],
            misconception: "A common mix-up is calling a sentence compound because it has and, or complex because it starts with a time phrase.",
            why: "\"Jordan and Nia added green waves.\" and \"Next spring, we will draw a bigger turtle.\" are simple: each has one whole thought. \"We took a picture first, and it hangs in the front hall now.\" is compound: two whole thoughts joined by a comma and and. \"When the rain came, our art washed away.\" is complex: a whole thought plus a part that starts with When."
          },
          {
            id: "SK-GC2a-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.a"],
            passages: ["p5"],
            prompt: "Sentence 4 in Imani's draft is a fragment. Which choice fixes it by joining it to sentence 3?",
            choices: [
              { text: "My group drew a giant sea turtle in the middle of our square.", correct: true },
              { text: "My group drew a giant sea turtle, and in the middle of our square." },
              { text: "My group drew a giant sea turtle in the middle. Of our square." },
              { text: "My group drew a giant sea turtle because in the middle of our square." }
            ],
            clue: "A fragment is missing a piece. Find what sentence 4 is missing, then borrow it from the sentence next to it.",
            hints: [
              "A fragment is missing a piece. Find what sentence 4 is missing, then borrow it from the sentence next to it.",
              "Read sentence 4 by itself. Does it have a who? Does it have a does-what? Then see what sentence 3 has that sentence 4 needs.",
              "Putting and in front of sentence 4 does not give it a who or a does-what. Check the other choices."
            ],
            how: [
              "Sentence 4, \"In the middle of our square,\" has no who and no does-what. It only tells where.",
              "Sentence 3 has the who and the does-what: \"My group drew a giant sea turtle.\" Sentence 4 tells where they drew it.",
              "Attach the where to the end of sentence 3: \"My group drew a giant sea turtle in the middle of our square.\""
            ],
            misconception: "A common mix-up is adding a joining word such as and or because. A joining word does not give a fragment the piece it is missing.",
            why: "The answer is \"My group drew a giant sea turtle in the middle of our square.\" Sentence 4 only tells where. Joined to sentence 3, it finishes a whole thought. Adding and or because leaves a fragment. Splitting the phrase makes a new fragment, \"Of our square.\""
          },
          {
            id: "SK-GC2a-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.a"],
            passages: [],
            prompt: "A student wrote this note about a park rule. Choose the TWO changes that fix the writing.",
            stem: [
              "(1) The playground at Maple Park has a new rule.",
              "(2) Because the metal slides get hot in the sun.",
              "(3) Last week the sun was very bright the slide burned my sister's legs.",
              "(4) Now the park posts a sign on every slide."
            ],
            pick: 2,
            choices: [
              {
                text: "Change sentences 1 and 2 to: The playground at Maple Park has a new rule because the metal slides get hot in the sun.",
                correct: true
              },
              {
                text: "Change sentence 3 to: Last week the sun was very bright, and the slide burned my sister's legs.",
                correct: true
              },
              {
                text: "Change sentences 1 and 2 to: The playground at Maple Park has a new rule, and because the metal slides get hot in the sun."
              },
              {
                text: "Change sentence 3 to: Last week the sun was very bright, the slide burned my sister's legs."
              },
              { text: "Change sentence 4 to: Now the park posts, a sign on every slide." }
            ],
            clue: "Read the whole note and find the two places where the writing is not correct. A good fix turns each broken sentence into a correct one.",
            hints: [
              "Read the whole note and find the two places where the writing is not correct. A good fix turns each broken sentence into a correct one.",
              "Look for one sentence that leaves you waiting and one that runs two thoughts together. Pick one fix for each.",
              "A comma alone does not fix two thoughts that run together. Check each choice for a fix that leaves the problem in place."
            ],
            how: [
              "Find the problems. Sentence 2 starts with Because and leaves you waiting, so it is a fragment. Sentence 3 has two whole thoughts with nothing between them, so it is a run-on.",
              "Fix the fragment by joining it to sentence 1: \"Change sentences 1 and 2 to: The playground at Maple Park has a new rule because the metal slides get hot in the sun.\"",
              "Fix the run-on with a comma and a joining word: \"Change sentence 3 to: Last week the sun was very bright, and the slide burned my sister's legs.\"",
              "The other choices keep a fragment, keep a comma-only run-on, or put a comma in the wrong place."
            ],
            misconception: "A common mix-up is choosing a fix that adds a comma or a joining word but leaves the problem in place.",
            why: "The answers are \"Change sentences 1 and 2 to: The playground at Maple Park has a new rule because the metal slides get hot in the sun.\" and \"Change sentence 3 to: Last week the sun was very bright, and the slide burned my sister's legs.\" The first gives the because part a whole thought to go with it. The second joins two whole thoughts with a comma and and. Sentence 4 is already correct."
          },
          {
            id: "SK-GC2a-C14",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.a"],
            passages: [],
            prompt: "Kofi and Zuri read the sentence in the box. Kofi says it is a compound sentence because it tells two things. Zuri says it is a complex sentence. Who is right?",
            stem: "The ice melted after the sun came out.",
            choices: [
              {
                text: "Zuri is right, because the part that starts with after cannot stand alone.",
                correct: true
              },
              { text: "Kofi is right, because \"The ice melted\" can stand alone." },
              { text: "Both are right, because one sentence can be compound and complex." },
              { text: "Neither is right, because the sentence is a simple sentence." }
            ],
            clue: "To decide between two students, test each reason. Ask whether the part after the joining word can stand alone.",
            hints: [
              "To decide between two students, test each reason. Ask whether the part after the joining word can stand alone.",
              "Find the joining word in the sentence. Read the part that comes right after it, and ask whether it leaves you waiting.",
              "Telling two things does not make a sentence compound. Check the other choices for a reason about whole thoughts."
            ],
            how: [
              "The sentence has a whole thought, \"The ice melted,\" and another part, \"after the sun came out.\"",
              "The word after starts the second part. \"After the sun came out\" has a who and a does-what, but it leaves you waiting, so it cannot stand alone.",
              "One whole thought plus a part that cannot stand alone makes a complex sentence, so Zuri is right."
            ],
            misconception: "A common mix-up is counting the things that happen. A sentence is compound only when it joins two parts that could each be a whole sentence.",
            why: "The answer is \"Zuri is right, because the part that starts with after cannot stand alone.\" The sentence is complex: one whole thought plus a part that starts with after. Kofi is wrong. \"The ice melted\" can stand alone, but the other part cannot, so the sentence does not have two whole thoughts joined by and, but, or, so. A sentence is not both kinds, and it is not simple, because it has a part that cannot stand alone."
          },
          {
            id: "SK-GC2a-C15",
            type: "dropdown",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.a"],
            passages: [],
            prompt: "Choose the words that make the first sentence compound and the second sentence complex.",
            text: "Rain fell all day, {0} the picnic moved indoors. {1} the picnic moved indoors, we played board games.",
            slots: [
              {
                options: ["because", "so", "before"],
                answer: 1
              },
              {
                options: ["Because", "But", "Or"],
                answer: 0
              }
            ],
            clue: "A compound sentence joins two whole thoughts with a comma and and, but, or, so. A complex sentence uses a word like because, when, after, before or if to start a part that cannot stand alone.",
            hints: [
              "A compound sentence joins two whole thoughts with a comma and and, but, or, so. A complex sentence uses a word like because, when, after, before or if to start a part that cannot stand alone.",
              "Do one blank at a time. Read the sentence with each word and ask which kind of sentence it builds.",
              "In the first blank, because and before both start a part that cannot stand alone. Decide which word is left for a compound sentence, and then do the second blank."
            ],
            how: [
              "First sentence: it must be compound, so it needs a comma and a word that joins two whole thoughts. So fits: \"Rain fell all day, so the picnic moved indoors.\"",
              "Because and before start a part that cannot stand alone, so they would make a complex sentence.",
              "Second sentence: it must be complex, so it needs a word that starts a part that cannot stand alone. Because fits: \"Because the picnic moved indoors, we played board games.\""
            ],
            misconception: "A common mix-up is picking by meaning alone. Here both sentences must also be the right kind.",
            why: "The answers are so and Because. \"Rain fell all day, so the picnic moved indoors.\" joins two whole thoughts with a comma and so, so it is compound. \"Because the picnic moved indoors, we played board games.\" has a whole thought plus a part that cannot stand alone, so it is complex. But and Or do not start a part that cannot stand alone."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GC2a-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: ["p6"],
      like: ["SK-GC2a-P7"],
      prompt: "Which sentence in Zuri's draft squeezes two whole thoughts together? Select it.",
      targets: ["p6:2:1", "p6:2:3", "p6:2:4", "p6:3:1", "p6:3:2"],
      answer: ["p6:3:1"],
      pick: 1,
      clue: "A run-on is two whole thoughts with nothing to join them. Read each sentence and look for a spot where a second thought begins.",
      hints: [
        "A run-on is two whole thoughts with nothing to join them. Read each sentence and look for a spot where a second thought begins.",
        "Look at the sentences that have no comma. For each one, find where the first whole thought could end.",
        "Sentence 6 is one whole thought. Look closely at the other sentences with no comma."
      ],
      how: [
        "Look for a sentence where one whole thought ends and another begins, with nothing between them.",
        "In sentence 7, \"My arms got tired\" is a whole thought and \"the sun got hot\" is another. There is no end mark and no joining word.",
        "So sentence 7 is the run-on. Sentence 5 is a fragment, not a run-on."
      ],
      misconception: "A common mix-up is choosing the fragment. It sounds wrong, but a run-on has too much, not too little.",
      why: "The answer is sentence 7, \"My arms got tired the sun got hot.\" It has two whole thoughts with nothing between them. Sentence 5 is a fragment. The other sentences are written correctly."
    },
    {
      id: "SK-GC2a-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: ["p6"],
      like: ["SK-GC2a-P9"],
      prompt: "Pick the TWO complex sentences in Zuri's draft.",
      pick: 2,
      choices: [
        { text: "(8) When I reached the dock, Ms. Reed clapped.", correct: true },
        { text: "(10) I will wear sunscreen before we start.", correct: true },
        { text: "(3) First, I sat down in the kayak, and she pushed me from the shore." },
        { text: "(4) My paddle felt heavy." },
        { text: "(5) Because the water was calm." }
      ],
      clue: "A complex sentence has one whole thought plus a part that cannot stand alone. Count the whole thoughts in each choice.",
      hints: [
        "A complex sentence has one whole thought plus a part that cannot stand alone. Count the whole thoughts in each choice.",
        "Look for a joining word that starts a part which waits. Check whether a whole thought is left over.",
        "One choice has a part that cannot stand alone but no whole thought. Check the other four."
      ],
      how: [
        "Find the words that start a part that cannot stand alone.",
        "\"(8) When I reached the dock, Ms. Reed clapped.\" has When plus the whole thought \"Ms. Reed clapped.\"",
        "\"(10) I will wear sunscreen before we start.\" has the whole thought \"I will wear sunscreen\" plus a before part.",
        "Sentence 3 is compound, sentence 4 is simple, and sentence 5 is a fragment."
      ],
      misconception: "A common mix-up is choosing the fragment because it starts with Because. It has no whole thought to go with it.",
      why: "The answers are \"(8) When I reached the dock, Ms. Reed clapped.\" and \"(10) I will wear sunscreen before we start.\" Each has a whole thought plus a part that begins with when or before. Sentence 3 joins two whole thoughts with and. Sentence 4 has one thought. Sentence 5 is a fragment."
    },
    {
      id: "SK-GC2a-S03",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: ["p6"],
      like: ["SK-GC2a-P8"],
      prompt: "Zuri's fifth sentence is a fragment. Which choice fixes it by combining it with the sentence after it?",
      choices: [
        {
          text: "Because the water was calm, I could paddle straight across the lake.",
          correct: true
        },
        { text: "Because the water was calm, and I could paddle straight across the lake." },
        { text: "The water was calm, I could paddle straight across the lake." },
        { text: "Because the water was calm all summer long." }
      ],
      clue: "A fragment is missing a piece. Fix it by joining it to the sentence that gives it the piece it needs.",
      hints: [
        "A fragment is missing a piece. Fix it by joining it to the sentence that gives it the piece it needs.",
        "Read Zuri's sentences 5 and 6 together. Ask which one is a whole thought and which one is waiting.",
        "A comma alone cannot hold two whole thoughts together. Check the other choices."
      ],
      how: [
        "Sentence 5, \"Because the water was calm,\" leaves you waiting. Sentence 6, \"I could paddle straight across the lake,\" is a whole thought.",
        "Join them so the because part goes with the whole thought: \"Because the water was calm, I could paddle straight across the lake.\"",
        "The and choice keeps the because part waiting. The comma-only choice is a run-on. The choice with all summer long is still a fragment."
      ],
      misconception: "A common mix-up is adding and after the comma. That keeps the because part waiting.",
      why: "The answer is \"Because the water was calm, I could paddle straight across the lake.\" The because part now has a whole thought to go with it. The choice with and still leaves you waiting. The choice that starts with The water has two whole thoughts held by only a comma. \"Because the water was calm all summer long.\" is still a fragment."
    },
    {
      id: "SK-GC2a-S04",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C04"],
      prompt: "Choose the TWO endings that finish Ava's sentence as a compound sentence.",
      stem: "Ava sorted the laundry, ____",
      pick: 2,
      choices: [
        { text: "and Dad folded the towels.", correct: true },
        { text: "but the socks had no partners.", correct: true },
        { text: "and put the shirts away." },
        { text: "because the basket was full." },
        { text: "when the dryer stopped." }
      ],
      clue: "A compound sentence has two whole thoughts joined by a comma and a joining word. The ending must add a second whole thought.",
      hints: [
        "A compound sentence has two whole thoughts joined by a comma and a joining word. The ending must add a second whole thought.",
        "Check the first word of each ending. Then ask whether the ending names its own who and its own does-what.",
        "One ending starts with and but only tells another thing Ava did, with no new who. Check the other four."
      ],
      how: [
        "The start, \"Ava sorted the laundry,\" is one whole thought. The ending must be a second whole thought.",
        "\"because the basket was full\" and \"when the dryer stopped\" start parts that cannot stand alone. \"and put the shirts away\" has no new who.",
        "The answers are \"and Dad folded the towels.\" (Dad is a new who) and \"but the socks had no partners.\" (the socks are a new who)."
      ],
      misconception: "A common mix-up is choosing an ending with and that adds only another action by the same person.",
      why: "The answers are \"and Dad folded the towels.\" and \"but the socks had no partners.\" Each starts with a joining word and has its own who and does-what. \"and put the shirts away.\" adds only another action by Ava. \"because the basket was full.\" and \"when the dryer stopped.\" start parts that cannot stand alone."
    },
    {
      id: "SK-GC2a-S05",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C05"],
      prompt: "A trail guide gives a tip to hikers. Which tip is a complete sentence?",
      choices: [
        { text: "Keep your water bottle in your pack.", correct: true },
        { text: "The water bottle in your pack." },
        { text: "Carefully and quietly up the hill." },
        { text: "If you hear thunder on the trail." }
      ],
      clue: "A complete sentence tells who or what it is about and what they do, and it makes sense by itself.",
      hints: [
        "A complete sentence tells who or what it is about and what they do, and it makes sense by itself.",
        "Check each tip for a does-what. Then ask who does it, even when the who is not written out.",
        "One choice starts with a word that leaves you waiting. Look at the other three."
      ],
      how: [
        "Check each tip for a does-what and a whole thought.",
        "\"The water bottle in your pack.\" has no action. \"Carefully and quietly up the hill.\" has no action. \"If you hear thunder on the trail.\" leaves you waiting.",
        "\"Keep your water bottle in your pack.\" is a command. The who is you, so it is complete."
      ],
      misconception: "A common mix-up is thinking every sentence must show its who. A command leaves out you.",
      why: "The answer is \"Keep your water bottle in your pack.\" It is a command, with you as the unwritten who and keep as the does-what. The other three have no does-what or leave you waiting."
    },
    {
      id: "SK-GC2a-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: ["p7"],
      like: ["SK-GC2a-C06"],
      prompt: "Which sentence in Kofi's draft is only a piece of a sentence?",
      choices: [
        { text: "(5) When the floor was done.", correct: true },
        { text: "(7) Before we built the walls, we drew a plan on paper." },
        { text: "(8) The walls went up fast the roof took all afternoon." },
        { text: "(9) Now my tree house is my favorite place to read." }
      ],
      clue: "A fragment is only a piece of a sentence. Check each choice for a who, a does-what and a thought that does not leave you waiting.",
      hints: [
        "A fragment is only a piece of a sentence. Check each choice for a who, a does-what and a thought that does not leave you waiting.",
        "Read each choice alone and out loud. Listen for the one that makes you wait.",
        "One choice has two whole thoughts, so its problem is not a missing piece. Look at the other three."
      ],
      how: [
        "Read each choice by itself and ask whether it leaves you waiting.",
        "\"(7) Before we built the walls, we drew a plan on paper.\" starts with a waiting part, but it ends with a whole thought. \"(9) Now my tree house is my favorite place to read.\" is whole. \"(8) The walls went up fast the roof took all afternoon.\" has too much.",
        "\"(5) When the floor was done.\" has a who and a does-what, but When leaves you waiting. It is a fragment."
      ],
      misconception: "A common mix-up is choosing a sentence that starts with a waiting word but also has a whole thought.",
      why: "The answer is \"(5) When the floor was done.\" It leaves you waiting to find out what happened. Sentence 7 starts the same way but has a whole thought after the comma. Sentence 8 is a run-on, and sentence 9 is a whole thought."
    },
    {
      id: "SK-GC2a-S07",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: ["p7"],
      like: ["SK-GC2a-C07"],
      prompt: "Kofi wants to turn sentence 8 into two sentences. Which choice does that correctly?",
      choices: [
        { text: "The walls went up fast. The roof took all afternoon.", correct: true },
        { text: "The walls went up fast, the roof took all afternoon." },
        { text: "The walls went up fast. Because the roof took all afternoon." },
        { text: "The walls went up fast. the roof took all afternoon." }
      ],
      clue: "A run-on has two whole thoughts with nothing between them. To split it, find where the first thought ends.",
      hints: [
        "A run-on has two whole thoughts with nothing between them. To split it, find where the first thought ends.",
        "Find the spot in sentence 8 where the first whole thought ends. Decide what belongs at that spot and how the next word must look.",
        "A comma alone does not fix a run-on, because two whole thoughts are still held together by only a comma. Check the other three."
      ],
      how: [
        "\"The walls went up fast\" is a whole thought. \"the roof took all afternoon\" is another.",
        "Give each its own sentence: an end mark after fast and a capital letter on The.",
        "The answer is \"The walls went up fast. The roof took all afternoon.\" The comma choice is still a run-on, the Because choice is a fragment, and the choice with a small letter forgets the capital."
      ],
      misconception: "A common mix-up is thinking a comma can hold two whole thoughts together.",
      why: "The answer is \"The walls went up fast. The roof took all afternoon.\" Each part is a whole thought with its own end mark and capital letter. A comma alone leaves a run-on, and \"Because the roof took all afternoon.\" is a fragment."
    },
    {
      id: "SK-GC2a-S08",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: ["p7"],
      like: ["SK-GC2a-C08"],
      prompt: "Sentence 1 in Kofi's draft names two builders. Why is it still a simple sentence?",
      choices: [
        { text: "Both builders did the same job, so there is one whole thought.", correct: true },
        { text: "It has a part that cannot stand alone, so it counts as simple." },
        { text: "Each builder did a different job, so each gets a whole thought." },
        { text: "It tells about only one tree house, so it must be simple." }
      ],
      clue: "A simple sentence has one whole thought. Count the whole thoughts, not the builders.",
      hints: [
        "A simple sentence has one whole thought. Count the whole thoughts, not the builders.",
        "Find the does-what in sentence 1. Ask how many different things were done, and who did them.",
        "The number of things in a sentence does not decide its kind. Check the other choices against the sentence itself."
      ],
      how: [
        "The who in sentence 1 is my uncle and I.",
        "The does-what is built a tree house in the old oak tree. There is only one, and both builders did it together.",
        "One does-what means one whole thought, so the sentence is simple: \"Both builders did the same job, so there is one whole thought.\""
      ],
      misconception: "A common mix-up is thinking and always makes a compound sentence. It does so only when it joins two whole thoughts.",
      why: "The answer is \"Both builders did the same job, so there is one whole thought.\" The word and joins two people, and both of them built the tree house. Nothing in the sentence cannot stand alone. The builders did not do different jobs. Being about one tree house does not decide the kind of sentence."
    },
    {
      id: "SK-GC2a-S09",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C09"],
      prompt: "Which choice gives sentence 2 a who and keeps the meaning?",
      stem: [
        "(1) Nina mixed the paint.",
        "(2) Then poured it into small cups."
      ],
      choices: [
        { text: "Then she poured it into small cups.", correct: true },
        { text: "Then, poured it into small cups." },
        { text: "Then the paint in small cups." },
        { text: "Then poured it into small cups quickly." }
      ],
      clue: "Every complete sentence needs a who and a does-what. Find what sentence 2 is missing.",
      hints: [
        "Every complete sentence needs a who and a does-what. Find what sentence 2 is missing.",
        "Read both sentences. Ask who poured the paint, and where that who belongs in sentence 2.",
        "A comma does not add a who. Check the other choices to see which really name someone."
      ],
      how: [
        "Sentence 2 has a does-what, poured, but no one doing it.",
        "Sentence 1 says Nina mixed the paint, so Nina poured it too. A word that stands for Nina is she.",
        "The answer is \"Then she poured it into small cups.\" The others still have no one pouring."
      ],
      misconception: "A common mix-up is changing punctuation or adding words without adding a who.",
      why: "The answer is \"Then she poured it into small cups.\" Now the sentence has a who (she) and a does-what (poured). The comma choice and the quickly choice still have no who. \"Then the paint in small cups.\" has no does-what."
    },
    {
      id: "SK-GC2a-S10",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: ["p7"],
      like: ["SK-GC2a-C10"],
      prompt: "How does sentence 3 differ from sentence 7 in Kofi's draft?",
      choices: [
        {
          text: "Sentence 3 has two parts that could each be a sentence. Sentence 7 has one part that could not.",
          correct: true
        },
        {
          text: "Sentence 3 has two parts with a who and a does-what. Sentence 7 has only one part with both."
        },
        {
          text: "Sentence 3 has a part that cannot stand alone. Sentence 7 has two parts that can."
        },
        { text: "Sentence 3 is a whole thought. Sentence 7 is only one part of a thought." }
      ],
      clue: "To compare two sentences, break each into its parts. Ask which parts could be a sentence by themselves.",
      hints: [
        "To compare two sentences, break each into its parts. Ask which parts could be a sentence by themselves.",
        "Find the joining word in each sentence. Then read the part that comes after it.",
        "Both sentences have two whos and two does-whats, so that cannot be the difference. Check the other choices."
      ],
      how: [
        "Sentence 3: \"Uncle Ray measured every board\" and \"I held the nails\" are two whole thoughts joined by a comma and and.",
        "Sentence 7: \"we drew a plan on paper\" is whole, but \"Before we built the walls\" starts with Before and leaves you waiting.",
        "The answer is \"Sentence 3 has two parts that could each be a sentence. Sentence 7 has one part that could not.\""
      ],
      misconception: "A common mix-up is reversing the kinds. And joins whole thoughts. A word like before starts a part that waits.",
      why: "The answer is \"Sentence 3 has two parts that could each be a sentence. Sentence 7 has one part that could not.\" Sentence 3 is compound and sentence 7 is complex. Both sentences have two whos and two does-whats. Sentence 7 is a whole sentence, not a fragment."
    },
    {
      id: "SK-GC2a-S11",
      type: "match",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C11"],
      prompt: "Is each sentence simple, compound or complex? Match each one.",
      cols: ["Simple", "Compound", "Complex"],
      rows: [
        { text: "Grandpa fed the birds and watered the plants.", answer: 0 },
        { text: "The sky grew dark, so we ran home.", answer: 1 },
        { text: "If it rains, the game will move inside.", answer: 2 },
        { text: "Our class visited the museum on Friday.", answer: 0 }
      ],
      clue: "Count the whole thoughts in each sentence, and look for a joining word.",
      hints: [
        "Count the whole thoughts in each sentence, and look for a joining word.",
        "Do the two sentences with a comma in them first. Ask what the words before the comma could be on their own.",
        "The sentence about Grandpa has two actions but only one who. Decide the other three rows."
      ],
      how: [
        "\"Grandpa fed the birds and watered the plants.\" has one who doing two actions, so it is one whole thought. It is simple.",
        "\"The sky grew dark, so we ran home.\" has two whole thoughts joined by a comma and so. It is compound.",
        "\"If it rains, the game will move inside.\" has a whole thought plus an If part that cannot stand alone. It is complex.",
        "\"Our class visited the museum on Friday.\" has one whole thought. It is simple."
      ],
      misconception: "A common mix-up is calling a sentence compound because it has and, even when and joins only two actions.",
      why: "\"Grandpa fed the birds and watered the plants.\" and \"Our class visited the museum on Friday.\" are simple. \"The sky grew dark, so we ran home.\" is compound: two whole thoughts joined by a comma and so. \"If it rains, the game will move inside.\" is complex: a whole thought plus an If part."
    },
    {
      id: "SK-GC2a-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C12"],
      prompt: "Which choice fixes the fragment in sentence 2 by attaching it to sentence 1?",
      stem: [
        "(1) Our team painted a banner.",
        "(2) Across the whole gym wall."
      ],
      choices: [
        { text: "Our team painted a banner across the whole gym wall.", correct: true },
        { text: "Our team painted a banner, and across the whole gym wall." },
        { text: "Our team painted a banner across the whole. Gym wall." },
        { text: "Our team painted a banner because across the whole gym wall." }
      ],
      clue: "A fragment is missing a piece. Find what sentence 2 is missing, then borrow it from the sentence beside it.",
      hints: [
        "A fragment is missing a piece. Find what sentence 2 is missing, then borrow it from the sentence beside it.",
        "Read sentence 2 alone. Does it have a who? A does-what? Then see what sentence 1 has that sentence 2 needs.",
        "Putting and in front of sentence 2 does not give it a who or a does-what. Check the other choices."
      ],
      how: [
        "Sentence 2 only tells where. It has no who and no does-what.",
        "Sentence 1 has them: \"Our team painted a banner.\" Sentence 2 tells where the banner was painted.",
        "Attach the where to the end of sentence 1: \"Our team painted a banner across the whole gym wall.\""
      ],
      misconception: "A common mix-up is adding a joining word such as and or because. A joining word does not add the missing piece.",
      why: "The answer is \"Our team painted a banner across the whole gym wall.\" Sentence 2 only tells where, so it needs the who and does-what from sentence 1. A joining word leaves it a fragment. Splitting the phrase makes a new fragment, \"Gym wall.\""
    },
    {
      id: "SK-GC2a-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C13"],
      prompt: "A student wrote this note about a school rule. Choose the TWO changes that fix the writing.",
      stem: [
        "(1) The bike rack by the gym has a new rule.",
        "(2) Because bikes were blocking the door.",
        "(3) Two bikes fell over they bent a wheel.",
        "(4) Now every rider locks up at the rack."
      ],
      pick: 2,
      choices: [
        {
          text: "Change sentences 1 and 2 to: The bike rack by the gym has a new rule because bikes were blocking the door.",
          correct: true
        },
        {
          text: "Change sentence 3 to: Two bikes fell over, and they bent a wheel.",
          correct: true
        },
        {
          text: "Change sentences 1 and 2 to: The bike rack by the gym has a new rule, and because bikes were blocking the door."
        },
        { text: "Change sentence 3 to: Two bikes fell over, they bent a wheel." },
        { text: "Change sentence 4 to: Now every rider locks, up at the rack." }
      ],
      clue: "Read the whole note and find the two places where the writing is not correct. A good fix turns each broken sentence into a correct one.",
      hints: [
        "Read the whole note and find the two places where the writing is not correct. A good fix turns each broken sentence into a correct one.",
        "Look for one sentence that leaves you waiting and one that runs two thoughts together. Pick one fix for each.",
        "A comma alone does not fix two thoughts that run together. Check each choice for a fix that leaves the problem in place."
      ],
      how: [
        "Sentence 2 starts with Because and leaves you waiting, so it is a fragment. Sentence 3 has two whole thoughts with nothing between them, so it is a run-on.",
        "Fix the fragment by joining it to sentence 1: \"Change sentences 1 and 2 to: The bike rack by the gym has a new rule because bikes were blocking the door.\"",
        "Fix the run-on with a comma and a joining word: \"Change sentence 3 to: Two bikes fell over, and they bent a wheel.\""
      ],
      misconception: "A common mix-up is choosing a fix that adds a comma but leaves the problem in place.",
      why: "The answers are \"Change sentences 1 and 2 to: The bike rack by the gym has a new rule because bikes were blocking the door.\" and \"Change sentence 3 to: Two bikes fell over, and they bent a wheel.\" The first gives the because part a whole thought. The second joins two whole thoughts with a comma and and. Sentence 4 is already correct."
    },
    {
      id: "SK-GC2a-S14",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C14"],
      prompt: "Ben and Ana read the sentence in the box. Ben says it is compound because it joins two whole thoughts. Ana says it is simple because it is one sentence. Who is right?",
      stem: "The class cheered, and the team ran onto the field.",
      choices: [
        {
          text: "Ben is right, because each part could stand alone as a sentence.",
          correct: true
        },
        { text: "Ana is right, because the whole sentence can stand alone as one sentence." },
        { text: "Both are right, because a sentence can be simple and compound." },
        { text: "Neither is right, because the sentence is complex." }
      ],
      clue: "To decide between two students, test each reason. Ask whether each part of the sentence could stand alone.",
      hints: [
        "To decide between two students, test each reason. Ask whether each part of the sentence could stand alone.",
        "Find the comma and the joining word. Read the part before them, and then the part after.",
        "Every sentence can stand alone, so that is not what decides its kind. Check the other choices for a reason about the parts inside."
      ],
      how: [
        "\"The class cheered\" is a whole thought, and \"the team ran onto the field\" is another.",
        "They are joined by a comma and and, which join two whole thoughts. That makes the sentence compound.",
        "So Ben is right, because each part could stand alone as a sentence."
      ],
      misconception: "A common mix-up is thinking one end mark means one thought. The kind depends on the whole thoughts inside.",
      why: "The answer is \"Ben is right, because each part could stand alone as a sentence.\" Two whole thoughts joined by a comma and and make a compound sentence. Every sentence can stand alone, but that does not make it simple. A sentence is not two kinds at once, and nothing in it starts with a waiting word, so it is not complex."
    },
    {
      id: "SK-GC2a-S15",
      type: "dropdown",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C15"],
      prompt: "Choose the words that make the first sentence compound and the second sentence complex.",
      text: "Mia lost her key, {0} she knocked on the door. {1} Mia lost her key, she knocked on the door.",
      slots: [
        {
          options: ["when", "so", "if"],
          answer: 1
        },
        {
          options: ["When", "And", "Then"],
          answer: 0
        }
      ],
      clue: "A compound sentence joins two whole thoughts with a comma and and, but, or, so. A complex sentence has a part that starts with a word like when, if or because and cannot stand alone.",
      hints: [
        "A compound sentence joins two whole thoughts with a comma and and, but, or, so. A complex sentence has a part that starts with a word like when, if or because and cannot stand alone.",
        "Do one blank at a time. Read the sentence with each word and ask which kind of sentence it builds.",
        "In the first blank, when and if both start a part that cannot stand alone. Decide which word is left, and then do the second blank."
      ],
      how: [
        "First sentence: it must be compound, so it needs a comma and a word that joins two whole thoughts. So fits: \"Mia lost her key, so she knocked on the door.\"",
        "When and if start a part that cannot stand alone, so they would make a complex sentence.",
        "Second sentence: it must be complex, so it needs a word that starts a part that cannot stand alone. When fits: \"When Mia lost her key, she knocked on the door.\""
      ],
      misconception: "A common mix-up is picking by meaning alone. Here each sentence must also be the right kind.",
      why: "The answers are so and When. \"Mia lost her key, so she knocked on the door.\" joins two whole thoughts with a comma and so, so it is compound. \"When Mia lost her key, she knocked on the door.\" has a When part that cannot stand alone, so it is complex. And and Then do not start a part that cannot stand alone."
    }
  ],
  addons: {
    "SK-GC2a-P7": {
      hints: [
        "A run-on has two whole thoughts with nothing between them. Read each sentence and ask whether a second whole thought starts in the middle of it.",
        "Read the second paragraph. Check its sentences one at a time for a spot where one thought ends and another starts with nothing to join them.",
        "Sentence 6 is one whole thought with a time word at the end. Check the other sentences in that paragraph."
      ],
      how: [
        "Read each sentence and look for a spot where one whole thought ends and another begins.",
        "In sentence 7, \"The beans grew fast\" is a whole thought, and \"the carrots took much longer\" is another. Nothing is between them.",
        "So sentence 7 is the run-on. Sentence 5 is a fragment, and sentences 3, 6 and 8 each have a correct shape."
      ],
      misconception: "A common mix-up is picking the fragment because it sounds wrong. A fragment has too little. A run-on has too much."
    },
    "SK-GC2a-P9": {
      hints: [
        "A complex sentence has one whole thought plus a part that cannot stand alone. That part can come first or last.",
        "Look for a joining word in each choice that starts a part which waits. Ask whether that part could stand alone, and whether a whole thought is left over.",
        "One choice has a part that cannot stand alone, but no whole thought to go with it. Check the other four."
      ],
      how: [
        "Look for a word that starts a part that cannot stand alone: when, after, because, before or if.",
        "\"(8) When the beans were ready, we picked them for a class snack.\" has a When part and the whole thought \"we picked them for a class snack.\" It is complex.",
        "\"(10) We will cook them in a soup after we pull them up.\" has the whole thought \"We will cook them in a soup\" and an after part. It is complex too.",
        "Sentence 3 joins two whole thoughts with a comma and and, sentence 4 has one thought, and sentence 5 has a because part with no whole thought."
      ],
      misconception: "A common mix-up is choosing sentence 5 because it starts with Because. It has the joining word but no whole thought, so it is a fragment."
    },
    "SK-GC2a-P8": {
      hints: [
        "A fragment is missing a piece. To fix it, join it to a sentence that gives it the piece it needs, and check that the result makes sense.",
        "Read sentences 5 and 6 together. Ask which one is a whole thought and which one is waiting for it.",
        "Putting and after the comma does not give a because part a whole thought. Check the other choices."
      ],
      how: [
        "Sentence 5, \"Because the weather was dry,\" leaves you waiting. Sentence 6, \"We watered the rows every morning,\" is a whole thought.",
        "Put them together so the because part goes with the whole thought: \"Because the weather was dry, we watered the rows every morning.\"",
        "The and choice keeps the because part waiting, the comma-only choice is a run-on, and \"Because the weather was dry every morning.\" is still a fragment."
      ],
      misconception: "A common mix-up is joining the two sentences with only a comma or with and. That leaves a run-on or a fragment."
    },
    "SK-GC2a-P1": {
      hints: [
        "A complete sentence has a who, a does-what and a whole thought. Check each choice for all three.",
        "For each choice, find the does-what first. Then ask who or what is doing it.",
        "One choice starts with a word that makes you wait for more. Decide which one it is, and look at the other three."
      ],
      how: [
        "Look in each choice for a who and a does-what.",
        "\"The baby goat on top of the hay bale.\" has a who but no does-what. \"Jumped onto the hay bale after lunch.\" has a does-what but no who. The choice that starts with When leaves you waiting.",
        "The answer is \"The baby goat jumped onto the hay bale.\" It has a who, a does-what and a whole thought."
      ],
      misconception: "A common mix-up is thinking that a long group of words must be a sentence. Check for a who and a does-what."
    },
    "SK-GC2a-P2": {
      hints: [
        "Read each one by itself. Ask: Is a who or a does-what missing? Does it leave me waiting? Or are two whole thoughts crammed together?",
        "Start with the row you are surest about, and decide the rest one at a time.",
        "The row about the team has two whole thoughts with nothing between them. Decide the other three rows."
      ],
      how: [
        "\"The bus was late, so we walked to school.\" has two whole thoughts joined by a comma and so, so it is complete.",
        "\"Our team won the game we got a trophy.\" has two whole thoughts with nothing between them, so it is a run-on.",
        "\"Before the sun came up over the hills.\" leaves you waiting, and \"Under the porch near the garden hose.\" has no who and no does-what. Both are fragments."
      ],
      misconception: "A common mix-up is calling a fragment a run-on because it sounds wrong. A fragment has too little. A run-on has too much."
    },
    "SK-GC2a-P3": {
      hints: [
        "A compound sentence joins two whole thoughts with a comma and a joining word. Check each choice for two parts that could each be a sentence.",
        "Find the joining word in each choice. Then ask what it joins: two whole thoughts, or only words.",
        "One choice begins with a word that makes its first part wait. Decide which one, and look at the other three."
      ],
      how: [
        "Look for a comma and a joining word. Then test each side: could it stand alone as a sentence?",
        "\"The wind blew hard, and the leaves fell from the trees.\" has two whole thoughts joined by a comma and and.",
        "In the windows sentence, and joins two nouns. In the yard sentence, and joins two verbs with one subject. The When sentence is complex."
      ],
      misconception: "A common mix-up is thinking every sentence with and is compound. It is compound only when and joins two whole thoughts."
    },
    "SK-GC2a-P4": {
      hints: [
        "A complex sentence has a whole thought plus a part that cannot stand alone. Read the sentence with each word at the start.",
        "Read the second part, \"Mom took us to the pool.\" Can it stand alone? Now read the first part with each word and ask whether it can.",
        "And joins two whole thoughts in the middle of a sentence, so it does not fit at the start of this one. Decide between the other two."
      ],
      how: [
        "The second part, \"Mom took us to the pool,\" is a whole thought. The first part must be the part that cannot stand alone.",
        "After makes \"After we finished our chores\" tell when something happened, and it leaves you waiting.",
        "And and so join two whole thoughts in the middle, so they do not belong at the start here."
      ],
      misconception: "A common mix-up is choosing a word that joins whole thoughts. Complex sentences use a word like after, when or because."
    }
  },
  /* B5-b5a:core:end */
  test: [
    { id: "SK-GC2a-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "The museum opens at nine, but the gift shop opens at ten.", correct: true },
        { text: "The museum opens at nine the gift shop opens at ten." },
        { text: "The museum opens at nine, the gift shop opens at ten." },
        { text: "Opens at nine, but the gift shop opens at ten." }
      ],
      clue: "Check how the two thoughts are joined. Two whole thoughts need a comma and a joining word. Also make sure each part has a who.",
      why: "The answer is \"The museum opens at nine, but the gift shop opens at ten.\" It joins two whole thoughts with a comma and but. One choice has nothing between the thoughts, and one has only a comma, so both are run-ons. \"Opens at nine, but the gift shop opens at ten.\" has no who for opens at nine." },
    { id: "SK-GC2a-T2", type: "ebsr", points: 2, dok: 2, passages: [],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: "When the whistle blew, the swimmers dove into the pool.",
      partA: { prompt: "What kind of sentence is this?",
        choices: [
          { text: "a complex sentence", correct: true },
          { text: "a compound sentence" },
          { text: "a simple sentence" },
          { text: "a fragment" }
        ] },
      partB: { prompt: "Which reason best supports the answer to Part A?",
        choices: [
          { text: "It has a whole thought and a part that starts with When.", correct: true },
          { text: "It has two whole thoughts joined by a comma and and." },
          { text: "It has only one whole thought and nothing added to it." },
          { text: "It is missing a who or a does-what, so it is not whole." }
        ] },
      clue: "Cover the first part, up to the comma. Can it stand alone? Then read the rest. Can that part stand alone?",
      why: "Part A: a complex sentence. Part B: It has a whole thought and a part that starts with When. \"The swimmers dove into the pool\" can stand alone. \"When the whistle blew\" cannot, because it leaves you waiting. One whole thought plus a when part makes a complex sentence." },
    { id: "SK-GC2a-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each sentence to the kind of sentence it is.",
      cols: ["Simple", "Compound", "Complex"],
      rows: [
        { text: "My brother and I built a fort out of boxes.", answer: 0 },
        { text: "We built a fort, and Dad helped us tape the roof.", answer: 1 },
        { text: "Because the fort had no door, we crawled in through a window.", answer: 2 },
        { text: "The fort fell down after the dog ran into it.", answer: 2 },
        { text: "We fixed the fort the next morning.", answer: 0 }
      ],
      clue: "Count the whole thoughts. One whole thought is simple. Two whole thoughts joined with and, but, or, so is compound. A whole thought plus a part that starts with a word like because or after is complex.",
      why: "\"My brother and I built a fort out of boxes.\" and \"We fixed the fort the next morning.\" are simple; the and in the first one only joins two people. \"We built a fort, and Dad helped us tape the roof.\" is compound. \"Because the fort had no door, we crawled in through a window.\" and \"The fort fell down after the dog ran into it.\" are complex." },
    { id: "SK-GC2a-T6", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "One sentence in Jordan's draft is a fragment. Select that sentence.",
      targets: ["p2:2:2", "p2:2:3", "p2:2:4", "p2:3:1", "p2:4:1"],
      answer: ["p2:2:3"], pick: 1,
      clue: "Read each sentence by itself. Does one of them leave you waiting to find out what happened?",
      why: "The answer is sentence 5, \"When we reached the top.\" It has a who and a does-what, but the word When leaves you waiting. Jordan could join it to sentence 6: When we reached the top, we could see boats far out on the water. Each of the other sentences has a whole thought." },
    { id: "SK-GC2a-T7", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Sentence 8 in Jordan's draft is a run-on. Which is the best way to fix it?",
      choices: [
        { text: "Each night, a keeper climbed the stairs, and he lit the big lamp.", correct: true },
        { text: "Each night, a keeper climbed the stairs, he lit the big lamp." },
        { text: "Each night, a keeper climbed the stairs and, he lit the big lamp." },
        { text: "Each night, when a keeper climbed the stairs." }
      ],
      clue: "Read each fix. Does it still have both whole thoughts? Are they joined in a way you learned?",
      why: "The answer is \"Each night, a keeper climbed the stairs, and he lit the big lamp.\" The comma goes before and, and and joins the two whole thoughts. A comma alone still makes a run-on, the comma after and is in the wrong place, and the when choice is a fragment." },
    { id: "SK-GC2a-T8", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Select the sentence in Jordan's draft that is a complex sentence.",
      targets: ["p2:1:1", "p2:2:2", "p2:2:3", "p2:3:3", "p2:4:1"],
      answer: ["p2:4:1"], pick: 1,
      clue: "Look for a sentence with a whole thought plus a part that cannot stand alone. Make sure the sentence really has a whole thought too.",
      why: "The answer is sentence 11, \"Before we left, I bought a postcard of the lighthouse.\" \"I bought a postcard of the lighthouse\" can stand alone, and \"Before we left\" cannot. Sentence 1 starts with Last summer, but that part has no who or does-what, so sentence 1 is simple. Sentence 4 is compound and sentence 9 is simple. Sentence 5 starts with When, but it has no whole thought, so it is not a complex sentence." }
  ]
});

PP.addLesson({
  code: "3.L.GC.2.b",
  title: "Mix your sentences and keep verbs in the same time",
  teach: {
    big: "Good writers mix short and long sentences, and they keep their verbs in the same time, past or present, unless the time really changes.",
    points: [
      "Too many short sentences in a row sound choppy. Join two short sentences that go together with a comma and one of these words: and, but, or, so.",
      "You can also join them with a word like because, when, after or if. Pick the joining word that shows how the two ideas go together.",
      "Verb tense tells when something happens. Past tense tells what already happened: jumped, ran. Present tense tells what happens now or always: jumps, runs, I jump, they run.",
      "Once you start telling about something in the past, keep your verbs in the past. Do not slip into the present by accident.",
      "Change the tense only when the time really changes: \"Yesterday I lost my hat, but today I have a new one.\""
    ],
    words: [
      { term: "verb tense", means: "the form of a verb that shows when something happens" },
      { term: "past tense", means: "already happened (walked, sang)" },
      { term: "present tense", means: "happens now or always (walks, we walk)" },
      { term: "combine", means: "to join two sentences into one" }
    ],
    example: {
      label: "Before and after",
      lines: [
        "Before: We went to the lake. The water was cold. We swim anyway. We had a great time.",
        "After: When we went to the lake, the water was cold. We swam anyway, and we had a great time."
      ],
      note: "Swim changed to swam, so every verb tells about the past. The short sentences were joined with when and with a comma and and, so the writing sounds smooth."
    },
    tip: "On the test, you may choose the verb that matches the rest of a paragraph, or the best way to join two sentences. Look at the other verbs nearby to find the time."
  },
  learn: [
    {
      show: ["Last summer, Aunt Rosa took us to Tybee Island. We build a sandcastle near the water."],
      ask: "Which verb does not match the time of the rest of the writing?",
      steps: [
        "Find a time clue: Last summer. This already happened, so the verbs should be past tense.",
        "Check each verb. Took is past. Build is present.",
        "Change build to the past tense: built."
      ],
      answer: "Build does not match. It should say: We built a sandcastle near the water."
    },
    {
      show: ["Mia wanted to ride her bike.", "Her tire was flat."],
      ask: "Which joining word fits best: and, but or so?",
      steps: [
        "Ask how the two ideas go together. Does the second idea add on, get in the way, or happen because of the first?",
        "Mia wants something, and the flat tire stops her. The second idea gets in the way.",
        "But shows that something goes against what came before."
      ],
      answer: "Mia wanted to ride her bike, but her tire was flat."
    },
    {
      show: ["The power went out.", "We lit candles."],
      ask: "How can you join these two short sentences?",
      steps: [
        "Ask how the ideas connect. The power went out first, and that is why we lit candles.",
        "So and because show that one thing caused another. When tells the time something happened.",
        "Keep both verbs in the past: went and lit."
      ],
      answer: "The power went out, so we lit candles. (When the power went out, we lit candles. works too.)"
    }
  ],
  write: {
    prompt: "Write 5 or 6 sentences about something fun you did last weekend. Tell it in the past tense, and mix short and long sentences.",
    checklist: [
      "I told what happened with past-tense verbs, like played and went.",
      "I checked every verb to make sure it stays in the past.",
      "I wrote at least one sentence that joins two ideas with and, but or so.",
      "I wrote at least one sentence that uses because, when, after or if.",
      "I read my sentences out loud to make sure they do not sound choppy."
    ],
    rows: 8
  },
  parent: "At dinner, ask your child to tell you about something that happened earlier today. Listen for verbs that slip into the present (\"Then he says...\"), and help them say it in the past. Then try joining two of their short sentences with but, so or because.",
  passages: [
    { id: "p1", title: "Our Trip to the Aquarium", byline: "Tasha's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) Last Friday, my class rode a bus to the aquarium in Atlanta.", "(2) The ride took most of the morning."],
        ["(3) First, we visited a huge tank with sharks and rays.", "(4) A big ray glided right over our heads.", "(5) It looked like a giant kite."],
        ["(6) Next, we walk through a long tunnel under the water.", "(7) Fish swam all around us.", "(8) The tunnel was dark.", "(9) It felt a little scary."],
        ["(10) At the end of the day, I bought a postcard for my grandma.", "(11) My feet hurt from all the walking.", "(12) I still wanted to go back again soon."]
      ] },
    { id: "p2", title: "Saturday at the Market", byline: "Diego's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) Every Saturday morning, my family goes to the farmers market.", "(2) Mom brings a big cloth bag for the food.", "(3) My little sister and I carry the baskets."],
        ["(4) First, we stop at the peach stand.", "(5) The farmer gives each of us a slice to taste.", "(6) The peaches are sweet.", "(7) They are juicy."],
        ["(8) Next, Dad bought a jar of honey from a beekeeper.", "(9) The beekeeper shows us a picture of her hives."],
        ["(10) Sometimes it rains on Saturday.", "(11) We go to the market anyway.", "(12) We always come home with something good to eat."]
      ] },
    /* PP-004 form B passage: used only by testB. Revised by reviewfix4 after review C (form B):
       a present-tense draft (form A's p2 is present too; practice p1 is past), with the one tense
       slip inside a complex sentence (5). Sentence types: (1)-(4) simple, (5) complex with the
       SLIP (handed), (6)-(12) simple, (13) complex. The topic is new to the site (T-SS already
       has a "Field Day" draft, so that topic was avoided). Needs independent review. */
    { id: "p3", title: "Saturdays at the Bakery", byline: "Nia's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) Every Saturday, my grandma opens her bakery at six o'clock.", "(2) I help her before the customers come.", "(3) My job is to fill the jars with cookies."],
        ["(4) The first customer is always Mr. Banks.", "(5) When he walks through the door, Grandma handed him a warm cinnamon roll.", "(6) He pays with coins from a little leather bag.", "(7) Then he sits by the window and reads the paper."],
        ["(8) Grandma's bakery is small and cozy.", "(9) The bakery down the street is much bigger.", "(10) More people come to Grandma's bakery."],
        ["(11) The bakery gets very busy at lunchtime.", "(12) Grandma's neighbor comes to help at the counter.", "(13) We close the door when the last roll is gone."]
      ] },
    /* B5-b5a:passages:start */
    /* B5-b5a:passages:end */
  ],
  practice: [
    { id: "SK-GC2b-P1", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "One sentence in Tasha's draft has a verb that does not match the time of the rest of the story. Select that sentence.",
      targets: ["p1:2:1", "p1:2:2", "p1:3:1", "p1:3:2", "p1:4:1"],
      answer: ["p1:3:1"], pick: 1,
      clue: "Find a time clue at the start of the draft. Then check the verb in each sentence. Does each one tell about the past?",
      why: "The answer is sentence 6, \"Next, we walk through a long tunnel under the water.\" The trip happened last Friday, so the verbs should be past tense, like visited, glided and swam. Walk should be walked." },
    { id: "SK-GC2b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What is the best way to combine sentences 8 and 9?",
      choices: [
        { text: "The tunnel was dark, so it felt a little scary.", correct: true },
        { text: "The tunnel was dark, but it felt a little scary." },
        { text: "The tunnel was dark it felt a little scary." },
        { text: "The tunnel was dark, so it feels a little scary." }
      ],
      clue: "Ask how the two ideas go together. Then check the punctuation and make sure both verbs tell about the past.",
      why: "The answer is \"The tunnel was dark, so it felt a little scary.\" The dark is the reason it felt scary, so the word so fits. But would mean the second idea is a surprise. One choice has no comma and joining word, so it is a run-on. The feels choice switches to the present tense." },
    { id: "SK-GC2b-P3", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Tasha wants to join sentences 11 and 12. Choose the word that best completes the new sentence.",
      text: "My feet hurt from all the walking, {0} I still wanted to go back again soon.",
      slots: [{ options: ["so", "but", "or"], answer: 1 }],
      clue: "Sore feet might make someone want to go home. Does the second idea agree with that, or go against it?",
      why: "The answer is but. Sore feet might make Tasha want to stop, yet she still wants to go back. But shows that the second idea goes against what you might expect. So would mean the sore feet made her want to go back." },
    { id: "SK-GC2b-P4", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that keep the verb tense the same.",
      choices: [
        { text: "Yesterday, Ana lost her mitten, and she looked for it everywhere.", correct: true },
        { text: "Every day after school, Marcus walks his dog and feeds the cat.", correct: true },
        { text: "Last night, we watched the stars, and Dad points to the Big Dipper." },
        { text: "The baby laughs every time the puppy licked her toes." },
        { text: "On Saturday, Jun planted beans and waters them with a hose." }
      ],
      pick: 2,
      clue: "Find every verb in each sentence. Are they all past, or all present? Time words can help you decide.",
      why: "The answers are \"Yesterday, Ana lost her mitten, and she looked for it everywhere.\" (lost and looked are both past) and \"Every day after school, Marcus walks his dog and feeds the cat.\" (walks and feeds are both present). The other three mix tenses: watched and points, laughs and licked, planted and waters." },
    { id: "SK-GC2b-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "What is the best way to combine these two sentences?",
      stem: ["Kayla finished her homework.", "She played outside."],
      choices: [
        { text: "After Kayla finished her homework, she played outside.", correct: true },
        { text: "Kayla finished her homework, but she played outside." },
        { text: "Kayla finished her homework she played outside." },
        { text: "After Kayla finishes her homework, she played outside." }
      ],
      clue: "Think about the order things happened. Then check the punctuation and make sure both verbs tell the same time.",
      why: "The answer is \"After Kayla finished her homework, she played outside.\" After shows the order: homework first, then play. But does not fit because playing is not a surprise. One choice is a run-on, and the finishes choice mixes present and past." },
    { id: "SK-GC2b-P6", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the verb that keeps the tense the same.",
      text: "Every morning, Grandpa feeds the chickens, and then he {0} the eggs.",
      slots: [{ options: ["gathered", "gathers", "gather"], answer: 1 }],
      clue: "Every morning tells you this happens again and again. What tense is the verb feeds? Make the new verb match it, and make sure it fits with he.",
      why: "The answer is gathers. Every morning and feeds tell you the sentence is in the present tense, so the second verb is present too. Gathered is past, and gather does not go with he." }
  ],
  /* B5-b5a:core:start */
  /* B5-b5a:core:end */
  test: [
    { id: "SK-GC2b-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "One sentence in Diego's draft has a verb that does not match the time of the rest of the draft. Select that sentence.",
      targets: ["p2:1:2", "p2:2:2", "p2:3:1", "p2:3:2", "p2:4:3"],
      answer: ["p2:3:1"], pick: 1,
      clue: "Diego tells about something his family does again and again. Which tense is most of the draft in? Find the one verb that is different.",
      why: "The answer is sentence 8, \"Next, Dad bought a jar of honey from a beekeeper.\" Diego writes about what happens every Saturday, so the draft is in the present tense: goes, brings, stop, shows. Bought should be buys." },
    { id: "SK-GC2b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What is the best way to combine sentences 6 and 7?",
      choices: [
        { text: "The peaches are sweet and juicy.", correct: true },
        { text: "The peaches are sweet, but they are juicy." },
        { text: "The peaches are sweet they are juicy." },
        { text: "The peaches were sweet and juicy." }
      ],
      clue: "Both sentences tell about the peaches. Look for a way to join them that keeps the meaning, has no run-on and stays in the same tense as the draft.",
      why: "The answer is \"The peaches are sweet and juicy.\" Both words describe the peaches, so and can join them in one smooth sentence. But would mean juicy is a surprise. One choice is a run-on, and were switches to the past tense." },
    { id: "SK-GC2b-T3", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Diego wants to join sentences 10 and 11. Choose the words that best complete the new sentence.",
      text: "{0} it rains on Saturday, we go to the market.",
      slots: [{ options: ["Even if", "Only because", "So that"], answer: 0 }],
      clue: "Does the rain make the family go to the market, or do they go in spite of the rain?",
      why: "The answer is Even if: \"Even if it rains on Saturday, we go to the market.\" The family goes in spite of the rain. Only because would mean the rain is the reason they go, and So that would mean they go to make it rain." },
    { id: "SK-GC2b-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does the verb tense stay the same in each sentence, or does it shift? Match each sentence.",
      cols: ["Tense stays the same", "Tense shifts"],
      rows: [
        { text: "The bell rang, and the students hurried inside.", answer: 0 },
        { text: "Owen opens the door and waved to his friend.", answer: 1 },
        { text: "Every night, Grandma reads to me before I fall asleep.", answer: 0 },
        { text: "Last week, our class plants seeds and watered them.", answer: 1 }
      ],
      clue: "Find every verb in the sentence. Are they all past or all present?",
      why: "\"The bell rang, and the students hurried inside.\" stays in the past. \"Every night, Grandma reads to me before I fall asleep.\" stays in the present. \"Owen opens the door and waved to his friend.\" shifts from present to past. \"Last week, our class plants seeds and watered them.\" shifts too; plants should be planted." },
    { id: "SK-GC2b-T5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that keep the tense the same.",
      text: "Yesterday, Priya {0} a kite at the park, and the wind {1} it high into the sky.",
      slots: [
        { options: ["flies", "flew", "fly"], answer: 1 },
        { options: ["carried", "carries", "carry"], answer: 0 }
      ],
      clue: "Find the time word at the start of the sentence. Then pick verbs that both tell about that time.",
      why: "The answers are flew and carried. Yesterday tells you this already happened, so both verbs must be past tense. Flies and carries are present tense. Fly and carry are present-tense forms too, and they do not go with Priya or the wind." }
  ],
  /* PP-004 FIXTURE: form B of the skill check, written by the "forms" agent so the
     two-form architecture can be tested (verification/guard.py section 14). It parallels
     form A item by item (same types, points, DOK and code) on a new passage, p3.
     NEEDS INDEPENDENT REVIEW (two reviews, SPEC manifest rule) before it is relied on;
     see docs/audits/work/pp004-forms.md. */
  testB: [
    { id: "SK-GC2b-TB1", type: "hottext", points: 1, dok: 2, passages: ["p3"],
      prompt: "One sentence in Nia's draft has a verb that does not fit the time of the rest of the draft. Select that sentence.",
      targets: ["p3:1:2", "p3:2:2", "p3:2:4", "p3:3:1", "p3:4:3"],
      answer: ["p3:2:2"], pick: 1,
      clue: "Nia tells about something that happens every week. Which tense is most of the draft in? Check every verb, even in the long sentences.",
      why: "The answer is sentence 5, \"When he walks through the door, Grandma handed him a warm cinnamon roll.\" Nia tells what happens every Saturday, so the draft is in the present tense: opens, help, is, pays, sits. Walks is present, but handed is past, so the tense slips in the middle of the sentence. Handed should be hands." },
    { id: "SK-GC2b-TB2", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "What is the best way to combine sentences 11 and 12?",
      choices: [
        { text: "Because the bakery gets very busy at lunchtime, Grandma's neighbor comes to help at the counter.", correct: true },
        { text: "Because Grandma's neighbor comes to help at the counter, the bakery gets very busy at lunchtime." },
        { text: "The bakery gets very busy at lunchtime, but Grandma's neighbor comes to help at the counter." },
        { text: "Because the bakery got very busy at lunchtime, Grandma's neighbor comes to help at the counter." }
      ],
      clue: "Which idea is the reason, and which one happens because of it? Then check that the verbs stay in the same time as the rest of the draft.",
      why: "The answer is \"Because the bakery gets very busy at lunchtime, Grandma's neighbor comes to help at the counter.\" The busy lunchtime is the reason the neighbor comes, so because goes with the busy lunchtime. The choice that puts because with the neighbor turns the idea around: the neighbor coming to help does not make the bakery busy. But would mean the help is a surprise. The got choice slips into the past tense." },
    { id: "SK-GC2b-TB3", type: "dropdown", points: 1, dok: 2, passages: ["p3"],
      prompt: "Nia wants to join sentences 9 and 10. Choose the word that best completes the new sentence.",
      text: "{0} the bakery down the street is much bigger, more people come to Grandma's bakery.",
      slots: [{ options: ["Although", "Because", "Unless"], answer: 0 }],
      clue: "Would you expect more people to go to the bigger bakery? Does the second idea go along with the first, or against it?",
      why: "The answer is Although: \"Although the bakery down the street is much bigger, more people come to Grandma's bakery.\" You might expect more people to go to the bigger bakery, so this goes against what you expect. Although shows that kind of surprise. Because would mean the other bakery being bigger is the reason people come to Grandma's. Unless would mean people come to Grandma's only when the other bakery is not bigger." },
    { id: "SK-GC2b-TB4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each sentence correct, or does the tense shift by mistake? Match each sentence.",
      cols: ["Correct", "Tense shifts by mistake"],
      rows: [
        { text: "The hen laid an egg, and Sam carried it inside.", answer: 0 },
        { text: "Every night, the owl hoots while we slept.", answer: 1 },
        { text: "Last year, Ana was in second grade, but now she is in third grade.", answer: 0 },
        { text: "After Grandpa told us a story, he tucks us into bed.", answer: 1 }
      ],
      clue: "Find every verb. If the tense changes, look for a time word that shows the time really changed. A change with no new time is a mistake.",
      why: "\"The hen laid an egg, and Sam carried it inside.\" stays in the past. \"Last year, Ana was in second grade, but now she is in third grade.\" changes tense, but that is correct: last year goes with was, and now goes with is. \"Every night, the owl hoots while we slept.\" shifts by mistake; slept should be sleep. \"After Grandpa told us a story, he tucks us into bed.\" shifts by mistake too; tucks should be tucked." },
    { id: "SK-GC2b-TB5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that keep the tense the same and fit the sentence.",
      text: "Every spring, when the creek {0}, the ducks {1} back to our yard.",
      slots: [
        { options: ["rose", "rises", "rise"], answer: 1 },
        { options: ["come", "came", "comes"], answer: 0 }
      ],
      clue: "Every spring tells you how often this happens. Which tense goes with that? Then check that each verb fits its subject: one creek, many ducks.",
      why: "The answers are rises and come. Every spring tells you this happens again and again, so both verbs are present tense. Rose and came are past tense. Rise does not go with one creek, and comes does not go with more than one duck." }
  ]
});

PP.addLesson({
  code: "3.L.GC.2.c",
  title: "Make the subject and verb agree",
  teach: {
    big: "The verb has to match its subject: one dog barks, but two dogs bark.",
    points: [
      "The subject is who or what the sentence is about. The verb tells what the subject does or is.",
      "In the present tense, a verb for one person or thing usually ends in s: The bird sings. A verb for more than one does not: The birds sing.",
      "Some verbs change in other ways. For one person or thing (he, she, it, Dad, the dog), use is, was, has and does. For more than one, use are, were, have and do.",
      "Two subjects joined by and count as more than one: Ella and Sam are friends. With I and you, use the verb with no s: I run, you run. Be is special: I am, I was, you are, you were.",
      "Words can come between the subject and the verb. Skip over them and match the verb to the real subject: The box of crayons is on the table. A long sentence can have two parts, joined by a word like when or because. Each part has its own subject and verb, and each pair must agree: When the bell rings, the students line up."
    ],
    words: [
      { term: "subject", means: "who or what the sentence is about" },
      { term: "verb", means: "what the subject does or is" },
      { term: "agree", means: "match: one goes with one, more than one goes with more than one" }
    ],
    example: {
      label: "Example",
      lines: ["The puppy chews the rope.", "The puppies chew the rope.", "The bag of apples is heavy."],
      note: "One puppy chews, with an s on the verb. Two or more puppies chew, with no s. In the last sentence, the real subject is bag, not apples, so the verb is is."
    },
    tip: "On the test, you might fix a verb in a student's writing or pick the verb that matches. Find the real subject first, then ask: one or more than one?"
  },
  learn: [
    {
      show: ["The children in the choir (sing / sings) every Sunday."],
      ask: "Which verb matches the subject?",
      steps: [
        "Ask who is doing the singing. The sentence is about the children. \"In the choir\" only tells which children.",
        "Children means more than one child.",
        "More than one takes the verb with no s."
      ],
      answer: "The children in the choir sing every Sunday."
    },
    {
      show: ["My cousin and her friend (was / were) at the zoo."],
      ask: "Which verb matches the subject?",
      steps: [
        "Find the subject: my cousin and her friend.",
        "Two people joined by and count as more than one.",
        "Use were for more than one when you tell about the past."
      ],
      answer: "My cousin and her friend were at the zoo."
    },
    {
      show: ["She (don't / doesn't) like spicy food."],
      ask: "Which verb matches the subject?",
      steps: [
        "The subject is she. She is one person.",
        "For one person, use does, not do.",
        "Does not is shortened to doesn't."
      ],
      answer: "She doesn't like spicy food."
    }
  ],
  write: {
    prompt: "Write 5 sentences about animals at a farm or a zoo. Write some sentences about one animal and some about a group of animals. Tell what they do now, in the present tense.",
    checklist: [
      "I wrote at least two sentences about one animal.",
      "I wrote at least two sentences about more than one animal.",
      "I found the subject of each sentence and asked: one or more than one?",
      "I used a verb with s for one (the goat eats) and with no s for more than one (the goats eat)."
    ],
    rows: 7
  },
  parent: "Play \"one or many\" in the car: say a sentence like \"The bird sings,\" and have your child change it to many birds (\"The birds sing\"). Then switch roles and let your child try to catch you.",
  passages: [
    /* B5-b5a:passages:start */
    /* B5-b5a:passages:end */
  ],
  practice: [
    { id: "SK-GC2c-P1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the verb that agrees with the subject.",
      text: "The ducks on the pond {0} hungry.",
      slots: [{ options: ["is", "are", "was"], answer: 1 }],
      clue: "Who is hungry: the pond, or the ducks? Skip the words in between and ask whether the real subject is one or more than one.",
      why: "The answer is are: \"The ducks on the pond are hungry.\" The subject is ducks, which means more than one, so the verb is are. \"On the pond\" only tells where the ducks are. Is and was go with one." },
    { id: "SK-GC2c-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the correct verb?",
      choices: [
        { text: "My grandpa and I fish at the lake.", correct: true },
        { text: "My grandpa and I fishes at the lake." },
        { text: "Our neighbor have a boat on the lake." },
        { text: "The boats on the lake rocks in the wind." }
      ],
      clue: "Find the subject of each sentence. Is it one or more than one? Then check if the verb matches.",
      why: "The answer is \"My grandpa and I fish at the lake.\" Grandpa and I are two people, so the verb has no s. Fishes should be fish, neighbor needs has, and boats needs rock." },
    { id: "SK-GC2c-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which verb goes with each subject? Match each subject to runs or run.",
      cols: ["runs", "run"],
      rows: [
        { text: "The horse", answer: 0 },
        { text: "The horses", answer: 1 },
        { text: "Mia and Leo", answer: 1 },
        { text: "My brother", answer: 0 },
        { text: "They", answer: 1 }
      ],
      clue: "Ask: one or more than one? One gets runs. More than one gets run. Two names joined by and count as more than one.",
      why: "The horse and My brother are one, so they go with runs. The horses, Mia and Leo, and They are more than one, so they go with run." },
    { id: "SK-GC2c-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a subject-verb agreement error.",
      options: [
        "The leaves on the maple tree turn red in the fall.",
        "A basket of oranges sit on the kitchen counter.",
        "Our dogs sleep on a rug by the door.",
        "My aunt drives a truck to work.",
        "The stars shine brightly tonight."
      ],
      answer: [1], pick: 1,
      clue: "In each sentence, find the real subject. Watch out for words that come between the subject and the verb.",
      why: "The answer is \"A basket of oranges sit on the kitchen counter.\" The subject is basket, which is one thing, so the verb should be sits. \"Of oranges\" only tells what is in the basket." },
    { id: "SK-GC2c-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that agree with their subjects.",
      text: "Every morning, Dad {0} breakfast, and my sisters {1} the table.",
      slots: [
        { options: ["make", "makes", "making"], answer: 1 },
        { options: ["set", "sets", "setting"], answer: 0 }
      ],
      clue: "This sentence has two subjects. Check each one. Is it one person or more than one?",
      why: "The answers are makes and set. Dad is one person, so the verb ends in s: makes. Sisters means more than one, so the verb has no s: set." },
    { id: "SK-GC2c-P6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "The bike doesn't have a bell.", correct: true },
        { text: "The bikes doesn't have bells." },
        { text: "That bike don't have a bell." },
        { text: "These bikes has no bells." }
      ],
      clue: "Doesn't and has go with one. Don't and have go with more than one. Check each subject.",
      why: "The answer is \"The bike doesn't have a bell.\" Bike is one, so doesn't is correct. Bikes needs don't, that bike needs doesn't, and these bikes needs have." },
    { id: "SK-GC2c-P7", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that agree with their subjects.",
      text: "When the twins {0} home from school, their dog {1} to the door.",
      slots: [
        { options: ["get", "gets", "getting"], answer: 0 },
        { options: ["run", "runs", "running"], answer: 1 }
      ],
      clue: "This sentence has two parts, and each part has its own subject. Find each subject and ask: one or more than one?",
      why: "The answers are get and runs. In the first part, the subject is twins, which is more than one, so get has no s. In the second part, the subject is dog, which is one, so runs ends in s. The word when joins the two parts, but each part still needs a subject and verb that agree." }
  ],
  /* B5-b5a:core:start */
  /* B5-b5a:core:end */
  test: [
    { id: "SK-GC2c-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the correct verb?",
      choices: [
        { text: "The girls in my class play tag at recess.", correct: true },
        { text: "The girl in my class play tag at recess." },
        { text: "The girls in my class plays tag at recess." },
        { text: "The girls in my class is good at tag." }
      ],
      clue: "Find the subject. Is it one girl or more than one? Then check the verb.",
      why: "The answer is \"The girls in my class play tag at recess.\" Girls is more than one, so the verb is play, with no s. One girl would need plays, and girls would need are, not is." },
    { id: "SK-GC2c-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the verb that agrees with the subject.",
      text: "The cookies in the jar {0} still warm.",
      slots: [{ options: ["was", "were", "is"], answer: 1 }],
      clue: "What is warm, the jar or the cookies? Is that one thing or more than one?",
      why: "The answer is were: \"The cookies in the jar were still warm.\" The subject is cookies, which is more than one. Was and is go with one thing." },
    { id: "SK-GC2c-T3", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences with correct subject-verb agreement.",
      choices: [
        { text: "Jamal and his dad build birdhouses.", correct: true },
        { text: "The book on the shelf belongs to Rosa.", correct: true },
        { text: "My friends likes to swim in the lake." },
        { text: "The cat and the dog sleeps by the fire." },
        { text: "She have a new pair of boots." }
      ],
      pick: 2,
      clue: "For each sentence, find the subject and decide: one or more than one? Remember that two subjects joined by and count as more than one.",
      why: "The answers are \"Jamal and his dad build birdhouses.\" and \"The book on the shelf belongs to Rosa.\" Jamal and his dad are two people, so build has no s. Book is one thing, so belongs has an s. Friends needs like, the cat and the dog need sleep, and she needs has." },
    { id: "SK-GC2c-T4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that needs a different verb.",
      options: [
        "Our school has a garden behind the gym.",
        "Every class grows something different.",
        "The third graders plant beans and squash.",
        "The pumpkins in the corner gets very big.",
        "Everyone helps pull weeds on Fridays."
      ],
      answer: [3], pick: 1,
      clue: "Find the real subject of each sentence. Skip any words between the subject and the verb.",
      why: "The answer is \"The pumpkins in the corner gets very big.\" The subject is pumpkins, which is more than one, so the verb should be get. \"In the corner\" only tells where they grow. Every class and everyone each count as one, so grows and helps are correct." },
    { id: "SK-GC2c-T5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each subject to the verb that agrees with it.",
      cols: ["is", "are"],
      rows: [
        { text: "The kittens", answer: 1 },
        { text: "My shoe", answer: 0 },
        { text: "Grace and Amir", answer: 1 },
        { text: "The jar of buttons", answer: 0 },
        { text: "It", answer: 0 }
      ],
      clue: "Use is for one and are for more than one. For a group of words, find the main word that the subject is about.",
      why: "My shoe, The jar of buttons and It are each one, so they go with is. The jar is the subject, not the buttons. The kittens and Grace and Amir are more than one, so they go with are." }
  ]
});

PP.addLesson({
  code: "3.L.GC.2.d",
  title: "Add details with exact describing words",
  teach: {
    big: "When you elaborate, you add details that tell more about an idea. Exact adjectives and adverbs make those details clear, so your reader can picture what you mean.",
    points: [
      "An adjective describes a noun. It tells what kind, how many or which one: a shaggy dog, three apples.",
      "An adverb describes a verb. It tells how, when or where something happens: whispered softly, left early, played outside.",
      "Some describing words are too plain to help, like nice, good, bad and fun. Swap them for exact words, like crunchy, gentle or muddy.",
      "Choose the word that fits what really happens. A cat that sneaks up on a toy moves quietly, not loudly.",
      "Do not pile on describing words. One or two exact words work better than a long list."
    ],
    words: [
      { term: "adjective", means: "a word that describes a noun" },
      { term: "adverb", means: "a word that tells how, when or where about a verb" },
      { term: "exact", means: "just right; telling exactly what you mean" }
    ],
    example: {
      label: "Plain and exact",
      lines: ["Plain: The dog ate its food.", "Exact: The hungry dog ate its food quickly."],
      note: "Hungry is an adjective that tells what kind of dog. Quickly is an adverb that tells how it ate. Now you can picture it."
    },
    tip: "On the test, you may pick the word that makes a sentence clearer, or the word that best fits a detail. Read the whole sentence, because the other words give clues about which describing word fits."
  },
  learn: [
    {
      show: ["Grandma put lots of hot peppers in the soup. The soup tasted ____."],
      ask: "Which adjective tells exactly how the soup tasted: nice, spicy or okay?",
      steps: [
        "Look for a clue in the sentences: lots of hot peppers.",
        "Nice and okay do not tell how it tasted. They could describe almost anything.",
        "Spicy matches the clue about peppers, so the reader can almost taste it."
      ],
      answer: "Spicy: The soup tasted spicy."
    },
    {
      show: ["The test had started, so Ava tiptoed into the room and sat down ____."],
      ask: "Which adverb fits best: quietly, loudly or happily?",
      steps: [
        "The missing word tells how Ava sat down, so it is an adverb.",
        "Look for clues: the test had started, and Ava tiptoed.",
        "Someone who tiptoes during a test is trying not to make noise."
      ],
      answer: "Quietly: Ava sat down quietly."
    },
    {
      show: ["A bird sat on the fence."],
      ask: "How can you elaborate on this idea, adding details with adjectives and adverbs?",
      steps: [
        "Ask: what kind of bird? Add adjectives before bird, like tiny and red.",
        "Ask: how did it sit? Add an adverb after sat, like calmly.",
        "Ask: what else could the reader learn? Add a detail that tells more, like what the bird was doing: singing a cheerful song.",
        "Read it back. Can you picture it now?"
      ],
      answer: "A tiny red bird sat calmly on the fence, singing a cheerful song."
    }
  ],
  write: {
    prompt: "Write 4 or 5 sentences about a place you like, such as a park, a kitchen or a beach. Help your reader see, hear and feel what it is like there.",
    checklist: [
      "I used at least three adjectives that tell exactly what kind, like squishy or golden.",
      "I used at least two adverbs that tell how, when or where, like slowly or outside.",
      "I swapped out plain words like nice, good and fun.",
      "I checked that each describing word fits what really happens."
    ],
    rows: 6
  },
  parent: "Pick an object at home, like an apple or a sock, and take turns describing it with one exact word at a time (\"shiny,\" \"bumpy,\" \"cold\"). Whoever runs out of exact words first picks the next object.",
  passages: [
    /* B5-b5a:passages:start */
    /* B5-b5a:passages:end */
  ],
  practice: [
    { id: "SK-GC2d-P1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the adjective that best fits the sentence.",
      text: "After digging in the garden, the puppy's paws were {0}, so Mom wiped them with a towel.",
      slots: [{ options: ["muddy", "nice", "fluffy"], answer: 0 }],
      clue: "What happens to paws when a puppy digs in a garden? Look at what Mom does next.",
      why: "The answer is muddy. Digging in a garden gets paws dirty, and Mom wipes them with a towel. Nice does not tell anything exact, and fluffy does not explain why Mom needs a towel." },
    { id: "SK-GC2d-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which adverb best completes the sentence?",
      stem: "The turtle crawled ____ across the road, so it took a long time to reach the other side.",
      choices: [
        { text: "slowly", correct: true },
        { text: "quickly" },
        { text: "sadly" },
        { text: "loudly" }
      ],
      clue: "The end of the sentence gives a clue. Why did it take the turtle a long time?",
      why: "The answer is slowly. The sentence says it took a long time to cross, which happens when you move slowly. Quickly means the opposite, and sadly and loudly do not explain the long time." },
    { id: "SK-GC2d-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is the describing word an adjective or an adverb? Match each one.",
      cols: ["Adjective (describes a noun)", "Adverb (describes a verb)"],
      rows: [
        { text: "gently, in \"She patted the horse gently.\"", answer: 1 },
        { text: "striped, in \"We saw a striped snake.\"", answer: 0 },
        { text: "outside, in \"The kids played outside.\"", answer: 1 },
        { text: "sticky, in \"My hands were sticky.\"", answer: 0 },
        { text: "early, in \"The bus came early.\"", answer: 1 }
      ],
      clue: "Ask what the word describes. If it tells what kind of thing, it is an adjective. If it tells how, when or where something happens, it is an adverb.",
      why: "Striped tells what kind of snake, and sticky tells what the hands were like, so they are adjectives. Gently tells how she patted, outside tells where they played, and early tells when the bus came, so they are adverbs." },
    { id: "SK-GC2d-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Ben wrote, \"We went to the beach.\" He wants to elaborate by adding details that tell more about his idea. Which revision does that best?",
      choices: [
        { text: "We went to the sandy beach early and splashed happily in the cool waves.", correct: true },
        { text: "We went to the beach, and the beach was really nice and fun." },
        { text: "We went to the beach on a day, and then we went back home." },
        { text: "We went to the beach with some stuff, and it was a good time." }
      ],
      clue: "Elaborate means to tell more. Which revision adds new details that help you picture the trip?",
      why: "The answer is \"We went to the sandy beach early and splashed happily in the cool waves.\" It adds details that tell more: sandy tells what kind of beach, early tells when, happily tells how they splashed, and cool tells what the waves were like. The other revisions add plain words like nice, fun, stuff and good, or add words that tell nothing new, so the reader still cannot picture the trip." },
    { id: "SK-GC2d-P5", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Sam wrote, \"We ate good pancakes.\" Choose the TWO words that could replace good to tell exactly what the pancakes were like.",
      choices: [
        { text: "fluffy", correct: true },
        { text: "buttery", correct: true },
        { text: "fine" },
        { text: "okay" },
        { text: "nice" }
      ],
      pick: 2,
      clue: "An exact word helps you see, taste or feel the pancakes. A plain word could describe almost anything.",
      why: "The answers are fluffy and buttery. Fluffy tells how the pancakes looked and felt, and buttery tells how they tasted. Fine, okay and nice are plain words that do not tell anything exact." },
    { id: "SK-GC2d-P6", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "In one sentence, the describing word does NOT fit what happens. Select that sentence.",
      options: [
        "The lemon tasted sour, so I made a face.",
        "The heavy box was easy to lift with one finger.",
        "The cold wind made us zip our coats.",
        "Rain fell steadily all afternoon.",
        "The bright sun made us squint."
      ],
      answer: [1], pick: 1,
      clue: "Read each sentence and check that the describing word matches the rest of the sentence.",
      why: "The answer is \"The heavy box was easy to lift with one finger.\" A heavy box is hard to lift, so heavy does not fit. A word like light or empty would match. In the other sentences, the describing word fits what happens." }
  ],
  /* B5-b5a:core:start */
  /* B5-b5a:core:end */
  test: [
    { id: "SK-GC2d-T1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the adjective that best fits the sentence.",
      text: "The ice on the sidewalk was {0}, so Grandpa held the rail as he walked.",
      slots: [{ options: ["slippery", "pretty", "cold"], answer: 0 }],
      clue: "Why would Grandpa need to hold the rail? Pick the word that explains it.",
      why: "The answer is slippery. Ice that is slippery is easy to fall on, so Grandpa holds the rail. Pretty does not explain why he holds on, and cold does not either, because all ice is cold." },
    { id: "SK-GC2d-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which adverb best completes the sentence?",
      stem: ["The fire alarm rang, and the firefighters ____ climbed onto the truck.", "In less than a minute, the truck roared out of the station."],
      choices: [
        { text: "quickly", correct: true },
        { text: "proudly" },
        { text: "quietly" },
        { text: "slowly" }
      ],
      clue: "Read both sentences. How much time passed before the truck left? What does that tell you about how the firefighters climbed on?",
      why: "The answer is quickly. The truck left in less than a minute, so the firefighters must have climbed on quickly. Proudly and quietly do not explain how they got going so soon, and slowly means the opposite." },
    { id: "SK-GC2d-T3", type: "ebsr", points: 2, dok: 2, passages: [],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: "Lily wrote: \"My grandma has a nice garden.\"",
      partA: { prompt: "Which revision best elaborates on Lily's idea by adding details?",
        choices: [
          { text: "My grandma has a sunny garden full of tall sunflowers.", correct: true },
          { text: "My grandma has a really, really nice garden." },
          { text: "My grandma has a good garden that is fun." },
          { text: "My grandma has a nice garden that I like a lot." }
        ] },
      partB: { prompt: "Why is that revision better?",
        choices: [
          { text: "It adds exact details that help the reader picture the garden.", correct: true },
          { text: "It repeats a word to show how much Lily likes the garden." },
          { text: "It uses plain words, like nice and good, that anyone knows." },
          { text: "It makes the sentence shorter so it is easier to read." }
        ] },
      clue: "Read each revision and try to picture the garden. Which one lets you see it?",
      why: "Part A: \"My grandma has a sunny garden full of tall sunflowers.\" Part B: It adds exact details that help the reader picture the garden. Sunny and tall are exact adjectives, and full of tall sunflowers adds a detail about what grows there. The other revisions still use plain words like nice, good and fun, so you cannot picture the garden." },
    { id: "SK-GC2d-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each sentence to the describing word that fits it best.",
      cols: ["sharp", "crunchy", "gently", "loudly"],
      rows: [
        { text: "The cat's claws were very ____.", answer: 0 },
        { text: "The fresh carrots were ____.", answer: 1 },
        { text: "Dad rocked the baby ____ in his arms.", answer: 2 },
        { text: "The thunder crashed ____ and shook the windows.", answer: 3 }
      ],
      clue: "Picture each sentence. Which word matches what you see, hear or feel?",
      why: "Claws can be sharp. Fresh carrots are crunchy when you bite them. Dad rocks a baby gently so the baby stays calm. Thunder that shakes the windows crashes loudly." },
    { id: "SK-GC2d-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence with the most exact describing words.",
      options: [
        "A huge elephant did something nice by the muddy pond.",
        "The zoo had some nice animals that were fun to see.",
        "An enormous gray elephant sprayed cool water on its back.",
        "We saw a big animal do a good thing at the zoo today.",
        "The animals at the zoo were great, and we had fun."
      ],
      answer: [2], pick: 1,
      clue: "Try to picture each sentence. Which one lets you see exactly what happened?",
      why: "The answer is \"An enormous gray elephant sprayed cool water on its back.\" Enormous, gray and cool are exact adjectives that help you picture the elephant and the water. Each of the others uses at least one plain word, like nice, good, great or fun, or says \"did something\" instead of telling what happened." }
  ]
});
