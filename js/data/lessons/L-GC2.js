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
      title: "Picking Blueberries",
      byline: "Amari's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On a sunny Saturday, my family drove to a blueberry farm.",
          "(2) My sister and I grabbed two small buckets."
        ],
        [
          "(3) We found a row of full bushes, and we started to pick.",
          "(4) The berries were dark blue and round.",
          "(5) When my bucket was almost full.",
          "(6) I ate one warm berry."
        ],
        [
          "(7) We paid for the berries before we went home.",
          "(8) Mom baked muffins we ate them all.",
          "(9) Next summer, I will pick even more berries.",
          "(10) Maybe I will bring my cousin.",
          "(11) He lives far away.",
          "(12) We will have fun.",
          "(13) The berries are my favorite fruit."
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
              { text: "(5) When my bucket was almost full.", correct: true },
              { text: "(7) We paid for the berries before we went home." },
              { text: "(8) Mom baked muffins we ate them all." },
              { text: "(9) Next summer, I will pick even more berries." }
            ],
            clue: "A fragment is only a piece of a sentence. Check each choice for a who, a does-what and a thought that does not leave you waiting.",
            hints: [
              "A fragment is only a piece of a sentence. Check each choice for a who, a does-what and a thought that does not leave you waiting.",
              "Read each choice by itself, out loud, as if it were the only sentence on the page. Listen for the one that makes you wait.",
              "One choice has two whole thoughts, so its problem is not a missing piece. Look at the other three."
            ],
            how: [
              "Read each choice by itself and ask: Does it leave me waiting?",
              "\"(7) We paid for the berries before we went home.\" and \"(9) Next summer, I will pick even more berries.\" each have a whole thought. \"(8) Mom baked muffins we ate them all.\" has too much: two whole thoughts with nothing between them.",
              "\"(5) When my bucket was almost full.\" has a who and a does-what, but When leaves you waiting for what happens. It is a fragment."
            ],
            misconception: "A common mix-up is choosing the run-on because it sounds wrong. A fragment is missing a piece. A run-on has too much.",
            why: "The answer is sentence 5, \"(5) When my bucket was almost full.\" The word When leaves you waiting to find out what happened, so it is not a whole thought. Sentence 8 is a run-on, not a fragment. Sentences 7 and 9 each have a whole thought."
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
              { text: "Mom baked muffins. We ate them all.", correct: true },
              { text: "Mom baked muffins, we ate them all." },
              { text: "Mom baked muffins. Because we ate them all." },
              { text: "Mom baked muffins. we ate them all." }
            ],
            clue: "A run-on has two whole thoughts with nothing between them. To split it, find where the first thought ends.",
            hints: [
              "A run-on has two whole thoughts with nothing between them. To split it, find where the first thought ends.",
              "Find the spot in sentence 8 where the first whole thought ends. Then decide what must come at that spot and how the next word must look.",
              "A comma alone does not fix a run-on, because two whole thoughts are still held together by only a comma. Check the other three."
            ],
            how: [
              "Find where the first thought ends: \"Mom baked muffins\" is a whole thought.",
              "\"we ate them all\" is a second whole thought, so it needs its own sentence.",
              "Put an end mark after muffins and start the next sentence with a capital letter: \"Mom baked muffins. We ate them all.\"",
              "The comma choice is still a run-on, the Because choice makes a fragment, and the choice with a small letter forgets the capital."
            ],
            misconception: "A common mix-up is thinking a comma is enough to hold two whole thoughts together.",
            why: "The answer is \"Mom baked muffins. We ate them all.\" Each part is a whole thought, so each gets its own end mark and capital letter. A comma alone still leaves a run-on. \"Because we ate them all.\" is a fragment. A sentence that starts with a small letter is not written correctly."
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
              "Find the does-what: grabbed two small buckets. There is only one, and both people did it together.",
              "One does-what makes one whole thought, so the sentence is simple. The answer is \"Both people do the same thing, so there is only one whole thought.\""
            ],
            misconception: "A common mix-up is thinking that and always makes a sentence compound. It makes a compound sentence only when it joins two whole thoughts.",
            why: "The answer is \"Both people do the same thing, so there is only one whole thought.\" In \"My sister and I grabbed two small buckets,\" the word and joins two people, and both of them grabbed buckets. A sentence is not simple because it is short. It has no part that cannot stand alone. The two people do not do different things."
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
      prompt: "Select the numbered line that jams two complete thoughts together.",
      targets: ["p6:2:1", "p6:2:3", "p6:2:4", "p6:3:1", "p6:3:2"],
      answer: ["p6:3:1"],
      pick: 1,
      clue: "A run-on is two whole thoughts with nothing to join them. Look for a spot where a second thought begins.",
      hints: [
        "A run-on is two whole thoughts with nothing to join them. Look for a spot where a second thought begins.",
        "Look at the lines that have no comma. For each one, find where the first whole thought could end.",
        "Line 6 is one whole thought. Look closely at the other lines with no comma."
      ],
      how: [
        "Look for a line where one whole thought ends and another begins, with nothing between them.",
        "In line 7, \"My arms got tired\" is a whole thought and \"the sun got hot\" is another. There is no end mark and no joining word.",
        "So line 7 is the run-on. Line 5 is a fragment, not a run-on."
      ],
      misconception: "A common mix-up is choosing the fragment. It sounds wrong, but a run-on has too much, not too little.",
      why: "The answer is line 7, \"My arms got tired the sun got hot.\" It has two whole thoughts with nothing between them. Line 5 is a fragment. The other lines are written correctly."
    },
    {
      id: "SK-GC2a-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-P9"],
      prompt: "Which TWO of these are complex?",
      pick: 2,
      choices: [
        { text: "When I reached the dock, Ms. Reed clapped.", correct: true },
        { text: "I will wear sunscreen before we start.", correct: true },
        { text: "First, I sat down in the kayak, and she pushed me from the shore." },
        { text: "My paddle felt heavy." },
        { text: "While the boat drifted." }
      ],
      clue: "A complex sentence has one whole thought plus a part that cannot stand alone. Count the whole thoughts in each choice.",
      hints: [
        "A complex sentence has one whole thought plus a part that cannot stand alone. Count the whole thoughts in each choice.",
        "Look for a joining word that starts a part which waits. Check whether a whole thought is left over.",
        "One choice has a part that cannot stand alone but no whole thought. Check the other four."
      ],
      how: [
        "Find the words that start a part that cannot stand alone.",
        "\"When I reached the dock, Ms. Reed clapped.\" has When plus the whole thought \"Ms. Reed clapped.\"",
        "\"I will wear sunscreen before we start.\" has the whole thought \"I will wear sunscreen\" plus a before part.",
        "The kayak sentence is compound, the paddle sentence is simple, and \"While the boat drifted.\" is a fragment."
      ],
      misconception: "A common mix-up is choosing the fragment because it starts with a waiting word. It has no whole thought to go with it.",
      why: "The answers are \"When I reached the dock, Ms. Reed clapped.\" and \"I will wear sunscreen before we start.\" Each has a whole thought plus a part that begins with when or before. The kayak sentence joins two whole thoughts with and. The paddle sentence has one thought. \"While the boat drifted.\" is a fragment."
    },
    {
      id: "SK-GC2a-S03",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: ["p6"],
      like: ["SK-GC2a-P8"],
      prompt: "Line 5 leaves the reader waiting, and line 6 supplies the rest. Which rewrite attaches them correctly?",
      choices: [
        {
          text: "I could paddle straight across the lake because the water was calm.",
          correct: true
        },
        { text: "I could paddle straight across the lake. Because the water was calm." },
        { text: "I could paddle straight across the lake, and because the water was calm." },
        { text: "The water was calm because I could paddle straight across the lake." }
      ],
      clue: "A piece that leaves you waiting needs the whole thought that goes with it. Attach the waiting piece to that thought.",
      hints: [
        "A piece that leaves you waiting needs the whole thought that goes with it. Attach the waiting piece to that thought.",
        "Read lines 5 and 6 together. Ask which one is a whole thought and which one leaves you waiting.",
        "A choice that keeps an end mark before the waiting part has not fixed anything. Check the other choices."
      ],
      how: [
        "Line 5, \"Because the water was calm,\" leaves you waiting. Line 6, \"I could paddle straight across the lake,\" is a whole thought.",
        "Attach the waiting part to the whole thought: \"I could paddle straight across the lake because the water was calm.\"",
        "The end-mark choice leaves the fragment, the and choice keeps it waiting, and the choice that starts with The water was calm changes what causes what."
      ],
      misconception: "A common mix-up is leaving an end mark before the waiting part. That keeps the fragment.",
      why: "The answer is \"I could paddle straight across the lake because the water was calm.\" The because part now sits with a whole thought and keeps its meaning. The other choices leave the fragment, add and, or change the meaning."
    },
    {
      id: "SK-GC2a-S04",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C04"],
      prompt: "Which TWO endings turn Dev's start into a compound sentence?",
      stem: "Dev raked the leaves, ____",
      pick: 2,
      choices: [
        { text: "and his sister held the bag.", correct: true },
        { text: "so the yard looked neat.", correct: true },
        { text: "and jumped into the pile." },
        { text: "because the wind had blown them down." },
        { text: "after the sun went down." }
      ],
      clue: "A compound sentence has two whole thoughts joined by a comma and a joining word. The ending must add a second whole thought.",
      hints: [
        "A compound sentence has two whole thoughts joined by a comma and a joining word. The ending must add a second whole thought.",
        "Check the first word of each ending. Then ask whether the ending names its own who and its own does-what.",
        "One ending starts with and but only tells another thing Dev did, with no new who. Check the other four."
      ],
      how: [
        "The start, \"Dev raked the leaves,\" is one whole thought. The ending must be a second whole thought.",
        "\"because the wind had blown them down\" and \"after the sun went down\" start parts that cannot stand alone. \"and jumped into the pile\" has no new who.",
        "The answers are \"and his sister held the bag.\" (his sister is a new who) and \"so the yard looked neat.\" (the yard is a new who)."
      ],
      misconception: "A common mix-up is choosing an ending with and that adds only another action by the same person.",
      why: "The answers are \"and his sister held the bag.\" and \"so the yard looked neat.\" Each starts with a joining word and has its own who and does-what. \"and jumped into the pile.\" adds only another action by Dev. \"because the wind had blown them down.\" and \"after the sun went down.\" start parts that cannot stand alone."
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
      prompt: "Which of these lines from Kofi's draft is only a piece of a sentence?",
      choices: [
        { text: "When the floor was done.", correct: true },
        { text: "Before we built the walls, we drew a plan on paper." },
        { text: "The walls went up fast the roof took all afternoon." },
        { text: "Now my tree house is my favorite place to read." }
      ],
      clue: "A fragment is only a piece of a sentence. Check each choice for a who, a does-what and a thought that does not leave you waiting.",
      hints: [
        "A fragment is only a piece of a sentence. Check each choice for a who, a does-what and a thought that does not leave you waiting.",
        "Read each choice alone and out loud. Listen for the one that makes you wait.",
        "One choice has two whole thoughts, so its problem is not a missing piece. Look at the other three."
      ],
      how: [
        "Read each choice by itself and ask whether it leaves you waiting.",
        "\"Before we built the walls, we drew a plan on paper.\" starts with a waiting part, but it ends with a whole thought. \"Now my tree house is my favorite place to read.\" is whole. \"The walls went up fast the roof took all afternoon.\" has too much.",
        "\"When the floor was done.\" has a who and a does-what, but When leaves you waiting. It is a fragment."
      ],
      misconception: "A common mix-up is choosing a sentence that starts with a waiting word but also has a whole thought.",
      why: "The answer is \"When the floor was done.\" It leaves you waiting to find out what happened. The Before line starts the same way but has a whole thought after the comma. The walls line is a run-on, and the tree house line is a whole thought."
    },
    {
      id: "SK-GC2a-S07",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: ["p7"],
      like: ["SK-GC2a-C07"],
      prompt: "Which choice splits sentence 8 so that each thought has its own sentence?",
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
      prompt: "Line 1 of this draft has an and, yet it is not compound. What is the reason?",
      choices: [
        { text: "Two builders share one action, so only one idea is told.", correct: true },
        { text: "The word and always joins two sentences." },
        { text: "Each builder had a separate job, which makes it complex." },
        { text: "A line about one tree house cannot be compound." }
      ],
      clue: "A compound sentence tells two separate things. Count the actions in line 1, not the people.",
      hints: [
        "A compound sentence tells two separate things. Count the actions in line 1, not the people.",
        "Find the does-what in line 1. Ask how many different things were done, and who did them.",
        "The number of builders does not decide the kind of sentence. Check the other choices against the line itself."
      ],
      how: [
        "The who in line 1 is my uncle and I.",
        "The does-what is built a tree house in the old oak tree. There is only one, and both builders did it together.",
        "One does-what means only one idea: \"Two builders share one action, so only one idea is told.\""
      ],
      misconception: "A common mix-up is thinking and always makes a compound sentence. It does so only when it joins two whole thoughts.",
      why: "The answer is \"Two builders share one action, so only one idea is told.\" The word and joins two people, and both of them built the tree house. And does not always join two sentences. The builders did not have separate jobs. The topic of a line does not decide its kind."
    },
    {
      id: "SK-GC2a-S09",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C09"],
      prompt: "Which choice puts a person into line 2 so it is a whole sentence?",
      stem: [
        "(1) Lena found a loose button.",
        "(2) Sewed it back onto her coat."
      ],
      choices: [
        { text: "Next she sewed it back onto her coat.", correct: true },
        { text: "Next, sewed it back onto her coat." },
        { text: "Next the button back onto her coat." },
        { text: "Sewed it back onto her coat carefully." }
      ],
      clue: "Every complete sentence needs a who and a does-what. Find what line 2 is missing.",
      hints: [
        "Every complete sentence needs a who and a does-what. Find what line 2 is missing.",
        "Read both lines. Ask who sewed the button, and where that who belongs in line 2.",
        "A comma does not add a who. Check the other choices to see which really name someone."
      ],
      how: [
        "Line 2 has a does-what, sewed, but no one doing it.",
        "Line 1 says Lena found the button, so Lena sewed it too. A word that stands for Lena is she.",
        "The answer is \"Next she sewed it back onto her coat.\" The others still have no one sewing."
      ],
      misconception: "A common mix-up is changing punctuation or adding words without adding a who.",
      why: "The answer is \"Next she sewed it back onto her coat.\" Now the line has a who (she) and a does-what (sewed). The comma choice and the carefully choice still have no who. \"Next the button back onto her coat.\" has no does-what."
    },
    {
      id: "SK-GC2a-S10",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: ["p7"],
      like: ["SK-GC2a-C10"],
      prompt: "Compare line 3 with line 7. Which statement is true?",
      choices: [
        {
          text: "Line 3: both halves can stand alone. Line 7: only the last half can.",
          correct: true
        },
        { text: "Line 3: only the first half can stand alone. Line 7: both halves can." },
        { text: "Lines 3 and 7: both halves can stand alone." },
        {
          text: "Line 3: the second half needs the first. Line 7: neither half can stand alone."
        }
      ],
      clue: "To compare two lines, break each into halves. Ask which halves could be a sentence by themselves.",
      hints: [
        "To compare two lines, break each into halves. Ask which halves could be a sentence by themselves.",
        "Find the joining word in each line. Then read the half that comes after it.",
        "Both halves of line 3 have a who and a does-what. Check the other choices against that."
      ],
      how: [
        "Line 3: \"Uncle Ray measured every board\" and \"I held the nails\" are two whole thoughts joined by a comma and and.",
        "Line 7: \"we drew a plan on paper\" is whole, but \"Before we built the walls\" starts with Before and leaves you waiting.",
        "The answer is \"Line 3: both halves can stand alone. Line 7: only the last half can.\""
      ],
      misconception: "A common mix-up is thinking a word like before starts a whole thought. It starts a part that waits.",
      why: "The answer is \"Line 3: both halves can stand alone. Line 7: only the last half can.\" Line 3 is compound and line 7 is complex. The other choices swap the halves or call a waiting part a whole thought."
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
      prompt: "Which rewrite joins line 2 to line 1 so that nothing is left hanging?",
      stem: [
        "(1) Dad planted a maple tree.",
        "(2) Beside the back fence."
      ],
      choices: [
        { text: "Dad planted a maple tree beside the back fence.", correct: true },
        { text: "Dad planted a maple tree, then beside the back fence." },
        { text: "Dad planted a maple tree beside the. Back fence." },
        { text: "Dad planted a maple tree. Beside, the back fence." }
      ],
      clue: "A piece that hangs is missing something. Find what line 2 is missing, then borrow it from the line beside it.",
      hints: [
        "A piece that hangs is missing something. Find what line 2 is missing, then borrow it from the line beside it.",
        "Read line 2 alone. Does it have a who? A does-what? Then see what line 1 has that line 2 needs.",
        "Putting a word like then in front of line 2 does not give it a who or a does-what. Check the other choices."
      ],
      how: [
        "Line 2 only tells where. It has no who and no does-what.",
        "Line 1 has them: \"Dad planted a maple tree.\" Line 2 tells where the tree was planted.",
        "Attach the where to the end of line 1: \"Dad planted a maple tree beside the back fence.\""
      ],
      misconception: "A common mix-up is adding a small word such as then. A small word does not add the missing piece.",
      why: "The answer is \"Dad planted a maple tree beside the back fence.\" Line 2 only tells where, so it needs the who and does-what from line 1. Adding then leaves it hanging. Splitting the phrase makes a new fragment, \"Back fence.\""
    },
    {
      id: "SK-GC2a-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C13"],
      prompt: "Below is a note about a class pet. Which TWO rewrites fix it?",
      stem: [
        "(1) The hamster cage near the window needs a new lid.",
        "(2) Since the old lid cracked.",
        "(3) Mia lifted it the hamster escaped.",
        "(4) Now we check the lid each morning."
      ],
      pick: 2,
      choices: [
        {
          text: "Join lines 1 and 2: The hamster cage near the window needs a new lid since the old lid cracked.",
          correct: true
        },
        { text: "Rewrite line 3 as: Mia lifted it, and the hamster escaped.", correct: true },
        {
          text: "Join lines 1 and 2: The hamster cage near the window needs a new lid, and since the old lid cracked."
        },
        { text: "Rewrite line 3 as: Mia lifted it, the hamster escaped." },
        { text: "Rewrite line 4 as: Now we check, the lid each morning." }
      ],
      clue: "Read the whole note and find the two places where the writing is not correct. A good fix turns each broken line into a correct one.",
      hints: [
        "Read the whole note and find the two places where the writing is not correct. A good fix turns each broken line into a correct one.",
        "Look for one line that leaves you waiting and one that runs two thoughts together. Pick one fix for each.",
        "A comma alone does not fix two thoughts that run together. Check each choice for a fix that leaves the problem in place."
      ],
      how: [
        "Line 2 starts with Since and leaves you waiting, so it is a fragment. Line 3 has two whole thoughts with nothing between them, so it is a run-on.",
        "Fix the fragment by joining it to line 1: \"Join lines 1 and 2: The hamster cage near the window needs a new lid since the old lid cracked.\"",
        "Fix the run-on with a comma and a joining word: \"Rewrite line 3 as: Mia lifted it, and the hamster escaped.\""
      ],
      misconception: "A common mix-up is choosing a fix that adds a comma but leaves the problem in place.",
      why: "The answers are \"Join lines 1 and 2: The hamster cage near the window needs a new lid since the old lid cracked.\" and \"Rewrite line 3 as: Mia lifted it, and the hamster escaped.\" The first gives the since part a whole thought. The second joins two whole thoughts with a comma and and. Line 4 is already correct."
    },
    {
      id: "SK-GC2a-S14",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C14"],
      prompt: "Which answer gives the right kind and the right reason?",
      stem: "The lights went out, but the band kept playing.",
      choices: [
        { text: "Compound: each side of but could be a sentence alone.", correct: true },
        { text: "Complex: the side after but needs the rest." },
        { text: "Simple: a short line has just one thought." },
        { text: "Compound: a comma makes any line compound." }
      ],
      clue: "To name a sentence, ask what each side of the joining word would be on its own.",
      hints: [
        "To name a sentence, ask what each side of the joining word would be on its own.",
        "Find the comma and the joining word. Read the words before them, and then the words after.",
        "A comma alone does not decide the kind. Check the other choices for a reason about the two sides."
      ],
      how: [
        "\"The lights went out\" is a whole thought, and \"the band kept playing\" is another.",
        "They are joined by a comma and but, which join two whole thoughts.",
        "So the answer is \"Compound: each side of but could be a sentence alone.\""
      ],
      misconception: "A common mix-up is thinking every joining word starts a waiting part. But, and, or and so join whole thoughts.",
      why: "The answer is \"Compound: each side of but could be a sentence alone.\" The side after but is a whole thought, so it is not complex. A short line can still hold two thoughts. A comma alone does not make a line compound."
    },
    {
      id: "SK-GC2a-S15",
      type: "dropdown",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.a"],
      passages: [],
      like: ["SK-GC2a-C15"],
      prompt: "Fill each blank so one sentence is compound and the other is complex.",
      text: "The bell rang, {0} the students lined up. {1} the bell rang, the students lined up.",
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
        "First sentence: it must be compound, so it needs a comma and a word that joins two whole thoughts. So fits: \"The bell rang, so the students lined up.\"",
        "When and if start a part that cannot stand alone, so they would make a complex sentence.",
        "Second sentence: it must be complex, so it needs a word that starts a part that cannot stand alone. When fits: \"When the bell rang, the students lined up.\""
      ],
      misconception: "A common mix-up is picking by meaning alone. Here each sentence must also be the right kind.",
      why: "The answers are so and When. \"The bell rang, so the students lined up.\" joins two whole thoughts with a comma and so, so it is compound. \"When the bell rang, the students lined up.\" has a When part that cannot stand alone, so it is complex. And and Then do not start a part that cannot stand alone."
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
    {
      id: "p4",
      title: "Starting a Rock Collection",
      byline: "Jabari's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last weekend, my grandpa and I hiked to a dry creek bed.",
          "(2) We filled two bags with rocks."
        ],
        [
          "(3) Some rocks were smooth and gray.",
          "(4) Others had tiny sparkles inside.",
          "(5) I found one that looked like a heart."
        ],
        [
          "(6) At home, Grandpa gave me an old egg carton.",
          "(7) He helped me clean each rock with a soft brush.",
          "(8) I put every rock in its own cup.",
          "(9) Grandpa shows me how to write the labels."
        ],
        [
          "(10) Now I have twelve rocks in my collection.",
          "(11) I keep them on my bookshelf.",
          "(12) My little sister likes to look at them every day."
        ]
      ]
    },
    {
      id: "p5",
      title: "Our Recycling Team",
      byline: "Nia's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Every Friday, our recycling team meets in the cafeteria.",
          "(2) We carry two big bins to each classroom."
        ],
        [
          "(3) The paper bin gets full very fast.",
          "(4) We empty it twice a day.",
          "(5) Students drop in cans and plastic bottles too."
        ],
        [
          "(6) Mr. Vega weighs every bin on a big scale.",
          "(7) He writes the numbers on a chart.",
          "(8) Then our class stacked the paper by the door.",
          "(9) A truck picks it up on Monday."
        ],
        [
          "(10) Our school makes less trash every month.",
          "(11) I feel proud when I see the empty bins.",
          "(12) We are helping the whole town.",
          "(13) Soon other schools may start a team too."
        ]
      ]
    },
    {
      id: "p6",
      title: "Washing the Truck",
      byline: "Isaiah's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Saturday, my dad asked me to help wash his truck.",
          "(2) I filled a bucket with warm, soapy water."
        ],
        [
          "(3) Dad hosed off the dirt.",
          "(4) I scrubbed the doors with a big sponge.",
          "(5) The soap bubbles floated up into the air.",
          "(6) My little brother chases them across the driveway."
        ],
        [
          "(7) We rinsed the truck from top to bottom.",
          "(8) Dad dried the windows with a clean towel."
        ],
        [
          "(9) Now the truck shines in the sun.",
          "(10) Dad thanks me with a big smile.",
          "(11) I like to help him every weekend.",
          "(12) The truck looks like new again."
        ]
      ]
    }
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
          { ref: "SK-GC2b-P4" },
          { ref: "SK-GC2b-P5" },
          { ref: "SK-GC2b-P6" },
          {
            id: "SK-GC2b-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.b"],
            passages: ["p1"],
            prompt: "Tasha wants to add a new sentence after sentence 3. Which sentence keeps her draft in the same time?",
            choices: [
              { text: "A turtle floated slowly past the glass.", correct: true },
              { text: "A turtle floats slowly past the glass." },
              { text: "A turtle is floating slowly past the glass." },
              { text: "A turtle float slowly past the glass." }
            ],
            clue: "Look for the time clue that tells when the story happened. Make your new sentence match it.",
            hints: [
              "Look for the time clue that tells when the story happened. Make your new sentence match it.",
              "Read the first sentence of the draft for the time clue. Then check the verbs in the sentences around sentence 3.",
              "A turtle that floats is telling about now. Look at the other three."
            ],
            how: [
              "Find the time clue: sentence 1 says Last Friday, so the trip already happened.",
              "Check the verbs near sentence 3: visited and glided are in the past tense.",
              "Pick the new sentence with a past-tense verb: \"A turtle floated slowly past the glass.\"",
              "Floats and is floating tell about now, and float does not fit one turtle."
            ],
            misconception: "A common mix-up is choosing the verb that sounds like the most exciting moment, instead of matching the time clue.",
            why: "The answer is \"A turtle floated slowly past the glass.\" Last Friday tells you the trip already happened, and the verbs around sentence 3 (visited, glided) are past tense. Floats and is floating tell about the present. Float does not go with one turtle."
          },
          {
            id: "SK-GC2b-C05",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.b"],
            passages: [],
            prompt: "What is the best way to combine these two sentences?",
            stem: ["We can walk to the park.", "We can ride our bikes."],
            choices: [
              { text: "We can walk to the park, or we can ride our bikes.", correct: true },
              { text: "We can walk to the park, so we can ride our bikes." },
              { text: "We can walk to the park, but we can ride our bikes." },
              { text: "We can walk to the park because we can ride our bikes." }
            ],
            clue: "Ask how the two ideas go together. Are they two choices, a result, a surprise or a reason?",
            hints: [
              "Ask how the two ideas go together. Are they two choices, a result, a surprise or a reason?",
              "Say what each sentence offers. Does the second idea go along with the first, or does it offer something else to pick?",
              "The first idea does not cause the second, so so does not fit. Think about the other three."
            ],
            how: [
              "Read the two sentences. Each one tells something the family can do.",
              "Neither idea is the reason for the other, and neither is a surprise. They are two choices.",
              "The joining word for two choices is or: \"We can walk to the park, or we can ride our bikes.\""
            ],
            misconception: "A common mix-up is choosing so or but without asking what the two ideas have to do with each other.",
            why: "The answer is \"We can walk to the park, or we can ride our bikes.\" The two sentences give two choices, and or joins choices. So would mean walking causes riding. But would mean the second idea is a surprise. Because would mean one idea is the reason for the other."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GC2b-C06",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.b"],
            passages: ["p4"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which sentence in Jabari's draft has a verb that does not fit the time of the story?",
              choices: [
                { text: "(9) Grandpa shows me how to write the labels.", correct: true },
                { text: "(7) He helped me clean each rock with a soft brush." },
                { text: "(10) Now I have twelve rocks in my collection." },
                { text: "(11) I keep them on my bookshelf." }
              ]
            },
            partB: {
              prompt: "Which detail from the draft best supports the answer to Part A?",
              choices: [
                {
                  text: "Last weekend in sentence 1 tells you the story is about something that already happened.",
                  correct: true
                },
                {
                  text: "Now in sentence 10 tells you that every sentence before it is in the present."
                },
                { text: "Keep in sentence 11 tells you that the whole story is in the present." },
                {
                  text: "Every day in sentence 12 tells you that the story happens again and again."
                }
              ]
            },
            clue: "Find the time clue that tells when the story happened. Then look for the verb that does not fit it.",
            hints: [
              "Find the time clue that tells when the story happened. Then look for the verb that does not fit it.",
              "For Part A, check the verbs in the draft one at a time. For Part B, ask which time word in the draft tells when the story takes place.",
              "In Part A, one choice is a past-tense verb with no problem. Check the other three."
            ],
            how: [
              "Find the time clue. Sentence 1 says Last weekend, so the story tells about the past.",
              "Check the verbs in the part about the egg carton and the cups: gave, helped, put. They are past tense.",
              "Part A: \"(9) Grandpa shows me how to write the labels.\" has shows, which is present tense. It should say showed.",
              "Part B: \"Last weekend in sentence 1 tells you the story is about something that already happened.\""
            ],
            misconception: "A common mix-up is choosing a sentence that has a present-tense verb because of a time word that makes it correct.",
            why: "Part A: \"(9) Grandpa shows me how to write the labels.\" Part B: \"Last weekend in sentence 1 tells you the story is about something that already happened.\" The sentences before and after the egg carton use gave, helped and put, so shows does not fit; it should be showed. The other Part B choices use time words but misread what they mean."
          },
          {
            id: "SK-GC2b-C07",
            type: "ms",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.b"],
            passages: ["p4"],
            prompt: "Choose the TWO ways to combine sentences 1 and 2 that keep the meaning and the time.",
            pick: 2,
            choices: [
              {
                text: "Last weekend, my grandpa and I hiked to a dry creek bed, and we filled two bags with rocks.",
                correct: true
              },
              {
                text: "After my grandpa and I hiked to a dry creek bed last weekend, we filled two bags with rocks.",
                correct: true
              },
              {
                text: "Before my grandpa and I hiked to a dry creek bed last weekend, we filled two bags with rocks."
              },
              {
                text: "Last weekend, my grandpa and I hike to a dry creek bed, and we filled two bags with rocks."
              },
              {
                text: "Last weekend, my grandpa and I hiked to a dry creek bed we filled two bags with rocks."
              }
            ],
            clue: "A good combination keeps both ideas and the order they happened. It is not a run-on, and the verbs match.",
            hints: [
              "A good combination keeps both ideas and the order they happened. It is not a run-on, and the verbs match.",
              "Check each choice four ways: Are both ideas there? Is the order right? Is it a run-on? Do the verbs match the time clue?",
              "One choice changes which thing happened first. Check the other four."
            ],
            how: [
              "In the draft, they hiked first and then filled the bags. The verbs are past tense.",
              "Check each choice. The Before choice puts the bags first. One choice has hike, which is present. One choice has no comma and joining word, so it is a run-on.",
              "The answers are \"Last weekend, my grandpa and I hiked to a dry creek bed, and we filled two bags with rocks.\" (compound) and \"After my grandpa and I hiked to a dry creek bed last weekend, we filled two bags with rocks.\" (complex)."
            ],
            misconception: "A common mix-up is picking a combination that joins the ideas but changes the order or the tense.",
            why: "The answers are \"Last weekend, my grandpa and I hiked to a dry creek bed, and we filled two bags with rocks.\" and \"After my grandpa and I hiked to a dry creek bed last weekend, we filled two bags with rocks.\" Both keep the order and the past tense. The Before choice reverses the order. The hike choice shifts to the present. The choice with no joining word is a run-on."
          },
          {
            id: "SK-GC2b-C08",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.b"],
            passages: ["p4"],
            prompt: "Sentence 10 in Jabari's draft uses a different tense from the sentences before it. Why is that correct?",
            choices: [
              {
                text: "Now tells you the story has moved from the past to the present.",
                correct: true
              },
              { text: "Last weekend in sentence 1 tells you every verb must be in the past." },
              {
                text: "Sentence 10 begins a new paragraph, and a new paragraph always changes the tense."
              },
              { text: "Sentence 10 is about the writer, and I always takes the present." }
            ],
            clue: "A writer keeps the same tense unless the time really changes. Ask what in the draft shows a change of time.",
            hints: [
              "A writer keeps the same tense unless the time really changes. Ask what in the draft shows a change of time.",
              "Read sentence 10 and look for words that tell when. Compare it with the time clue in sentence 1.",
              "Starting a new paragraph does not change the tense. Check the other choices for a reason about time."
            ],
            how: [
              "Sentences 1 to 9 tell what happened last weekend, in the past tense.",
              "Sentence 10 tells what is true at the time of writing: Now I have twelve rocks. The time word Now shows the time changed.",
              "The answer is \"Now tells you the story has moved from the past to the present.\""
            ],
            misconception: "A common mix-up is thinking a draft must stay in one tense. The tense changes when the time really changes.",
            why: "The answer is \"Now tells you the story has moved from the past to the present.\" The first sentences tell what happened last weekend, and sentence 10 tells about the writer at the time of writing. A new paragraph does not change the tense by itself. A sentence about the writer can be in either tense."
          },
          {
            id: "SK-GC2b-C09",
            type: "hottext",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.b"],
            passages: ["p5"],
            prompt: "One sentence in Nia's draft has a verb that does not fit the rest of the draft. Select that sentence.",
            targets: ["p5:1:2", "p5:2:2", "p5:3:2", "p5:3:3", "p5:3:4"],
            answer: ["p5:3:3"],
            pick: 1,
            clue: "Find the time of the draft. Then check the verb in each sentence to see whether it matches.",
            hints: [
              "Find the time of the draft. Then check the verb in each sentence to see whether it matches.",
              "Nia tells what her team does again and again. Read each sentence and ask whether its verb tells about that too.",
              "Sentence 7 has a verb that fits the rest of the draft. Check the other sentences."
            ],
            how: [
              "Find the time clue: Every Friday means the team does this again and again, so the draft is in the present tense.",
              "Check each verb: carry, empty, writes, picks. They are all present tense.",
              "Sentence 8, \"Then our class stacked the paper by the door,\" has stacked, which is past tense. It should say stacks."
            ],
            misconception: "A common mix-up is skipping a short sentence because it sounds fine. Check every verb against the time clue.",
            why: "The answer is sentence 8, \"Then our class stacked the paper by the door.\" Nia writes about what her team does every Friday, so the draft is in the present tense. Stacked is past tense. It should be stacks."
          },
          {
            id: "SK-GC2b-C10",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.b"],
            passages: ["p5"],
            prompt: "Nia wants to combine sentences 3 and 4 so the reader sees the reason. Which choice is best?",
            choices: [
              {
                text: "Because the paper bin gets full very fast, we empty it twice a day.",
                correct: true
              },
              { text: "Because we empty it twice a day, the paper bin gets full very fast." },
              { text: "Because the paper bin gets full very fast, we emptied it twice a day." },
              { text: "The paper bin gets full very fast we empty it twice a day." }
            ],
            clue: "To show a reason, ask which idea causes the other. The reason goes with the joining word.",
            hints: [
              "To show a reason, ask which idea causes the other. The reason goes with the joining word.",
              "Read sentences 3 and 4 and ask: Which one happens first in the real world, and which one is the result? Then check the punctuation and the tense.",
              "Emptying the bin does not make it fill up. Check the other choices."
            ],
            how: [
              "Ask which idea is the reason. The bin fills fast, and that is why the team empties it twice a day.",
              "The reason goes with Because: \"Because the paper bin gets full very fast, we empty it twice a day.\"",
              "Check the others: one turns the reason around, one slips into the past tense with emptied, and one is a run-on."
            ],
            misconception: "A common mix-up is putting Because with the result instead of the reason.",
            why: "The answer is \"Because the paper bin gets full very fast, we empty it twice a day.\" The full bin is the reason, and emptying it is the result. The choice that starts with Because we empty it turns the reason around. The emptied choice changes to the past tense. The choice with no joining word is a run-on."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GC2b-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.b"],
            passages: [],
            prompt: "Two students fix the tense in the sentence. Who fixed it correctly?",
            stem: [
              "Yesterday, Max kicks the ball, and it rolled into the pond.",
              "Zane: Yesterday, Max kicked the ball, and it rolled into the pond.",
              "Ella: Yesterday, Max kicks the ball, and it rolls into the pond."
            ],
            choices: [
              {
                text: "Zane, because Yesterday shows the sentence tells about the past.",
                correct: true
              },
              { text: "Ella, because kicks and rolls both tell what happens now." },
              { text: "Ella, because a sentence should always be in the present." },
              { text: "Neither, because the two verbs may use different tenses." }
            ],
            clue: "To judge a fix, find the time clue first. The verbs have to match the time the clue gives.",
            hints: [
              "To judge a fix, find the time clue first. The verbs have to match the time the clue gives.",
              "Look at the first word of the sentence. Ask what it says about when this happened, then check both students.",
              "Ella made the two verbs match each other, but matching is not enough. Check what the time clue says."
            ],
            how: [
              "Find the time clue: Yesterday means the sentence tells about something that already happened.",
              "Both verbs must be past tense: kicked and rolled. Zane changed kicks to kicked.",
              "Ella made both verbs present, which matches each other but not the word Yesterday.",
              "The answer is \"Zane, because Yesterday shows the sentence tells about the past.\""
            ],
            misconception: "A common mix-up is thinking that matching verbs is all that matters. They also have to match the time clue.",
            why: "The answer is \"Zane, because Yesterday shows the sentence tells about the past.\" Zane made both verbs past tense. Ella made them match each other, but in the present, so they do not fit Yesterday. A writer does not use two different tenses here, because the time does not change."
          },
          {
            id: "SK-GC2b-C12",
            type: "ms",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.b"],
            passages: [],
            prompt: "Choose the TWO sentences whose joining word fits the meaning.",
            pick: 2,
            choices: [
              { text: "Ana forgot her coat, so she felt cold.", correct: true },
              { text: "Ben wanted the toy, but he did not have enough money.", correct: true },
              { text: "Ana forgot her coat, but she felt cold." },
              { text: "Ben wanted the toy, so he did not have enough money." },
              { text: "The pool was closed, or we went to the library." }
            ],
            clue: "Read each sentence and ask how the two ideas go together: a result, a surprise, a choice or a reason.",
            hints: [
              "Read each sentence and ask how the two ideas go together: a result, a surprise, a choice or a reason.",
              "Say the two ideas without the joining word. Ask whether the second idea is a result, goes against the first, or offers a choice.",
              "Two of the choices use the same two ideas as another choice, with a different joining word. Decide which joining word fits each pair."
            ],
            how: [
              "For each sentence, say what the first idea has to do with the second.",
              "Forgetting a coat makes you feel cold, so so fits: \"Ana forgot her coat, so she felt cold.\"",
              "Wanting a toy and not having enough money goes against what Ben hoped, so but fits: \"Ben wanted the toy, but he did not have enough money.\"",
              "The pool sentence does not give a choice, and the other two use the wrong joining word."
            ],
            misconception: "A common mix-up is trusting a joining word because it sounds familiar. Check what the two ideas really have to do with each other.",
            why: "The answers are \"Ana forgot her coat, so she felt cold.\" and \"Ben wanted the toy, but he did not have enough money.\" Forgetting the coat is the reason Ana felt cold, so so fits. Ben did not get what he wanted, so but fits. \"Ana forgot her coat, but she felt cold.\" and \"Ben wanted the toy, so he did not have enough money.\" use the wrong word. \"The pool was closed, or we went to the library.\" is not a choice."
          },
          {
            id: "SK-GC2b-C13",
            type: "match",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.b"],
            passages: [],
            prompt: "Match each pair of sentences to the joining word that shows how the ideas go together.",
            cols: ["because", "but", "or", "so"],
            rows: [
              { text: "Leah wanted to swim. The pool was closed.", answer: 1 },
              { text: "We can bake cookies. We can buy some.", answer: 2 },
              { text: "Eli felt hungry all afternoon. He forgot his lunch.", answer: 0 },
              { text: "The path was muddy. We wore our boots.", answer: 3 }
            ],
            clue: "For each pair, ask how the second idea goes with the first: a reason, a surprise, a choice or a result.",
            hints: [
              "For each pair, ask how the second idea goes with the first: a reason, a surprise, a choice or a result.",
              "For the two pairs where one idea causes the other, decide which idea comes first in real life, the cause or the result.",
              "Leah wanted to swim, and then the pool turned out to be closed. Decide the other three rows."
            ],
            how: [
              "\"Leah wanted to swim. The pool was closed.\" The second idea goes against what Leah wanted, so the word is but.",
              "\"We can bake cookies. We can buy some.\" These are two choices, so the word is or.",
              "\"Eli felt hungry all afternoon. He forgot his lunch.\" The second idea is the reason for the first, so the word is because.",
              "\"The path was muddy. We wore our boots.\" The first idea causes the second, so the word is so."
            ],
            misconception: "A common mix-up is mixing up because and so. Because goes with the reason. So goes with the result.",
            why: "Leah wanted to swim, but the pool was closed. We can bake cookies, or we can buy some. Eli felt hungry all afternoon because he forgot his lunch. The path was muddy, so we wore our boots. Because points to the reason, and so points to the result."
          },
          {
            id: "SK-GC2b-C14",
            type: "ms",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.b"],
            passages: [],
            prompt: "A student wrote this paragraph about a field trip. Choose the TWO changes that make it better.",
            stem: [
              "(1) Last Friday, our class went to the park.",
              "(2) We played tag until noon.",
              "(3) Then Ms. Boyd calls us for lunch.",
              "(4) We ate lunch quickly.",
              "(5) The bus was waiting."
            ],
            pick: 2,
            choices: [
              { text: "Change sentence 3 to: Then Ms. Boyd called us for lunch.", correct: true },
              {
                text: "Join sentences 4 and 5: Because the bus was waiting, we ate lunch quickly.",
                correct: true
              },
              { text: "Change sentence 2 to: We play tag until noon." },
              { text: "Join sentences 4 and 5: We ate lunch quickly, but the bus was waiting." },
              { text: "Change sentence 1 to: Last Friday, our class goes to the park." }
            ],
            clue: "Find the time the paragraph is written in. Then look for a verb that does not fit and for short sentences that belong together.",
            hints: [
              "Find the time the paragraph is written in. Then look for a verb that does not fit and for short sentences that belong together.",
              "Check each verb against the time clue in sentence 1. Then ask which two short sentences could be joined to show a reason.",
              "Sentences 1 and 2 already match the time clue in sentence 1. Check the other choices to see which changes fix a real problem."
            ],
            how: [
              "Sentence 1 says Last Friday, so the paragraph is in the past tense.",
              "Sentence 3 has calls, which is present. Fix it: \"Then Ms. Boyd called us for lunch.\"",
              "Sentences 4 and 5 are short and go together. The bus waiting is the reason they ate quickly: \"Because the bus was waiting, we ate lunch quickly.\""
            ],
            misconception: "A common mix-up is changing a verb that is already right, or joining sentences with a word that does not fit the meaning.",
            why: "The answers are \"Change sentence 3 to: Then Ms. Boyd called us for lunch.\" and \"Join sentences 4 and 5: Because the bus was waiting, we ate lunch quickly.\" Last Friday tells you the paragraph is in the past, so calls should be called. The waiting bus is the reason they ate quickly. Sentences 1 and 2 are already correct, and but would make the bus a surprise."
          },
          {
            id: "SK-GC2b-C15",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.b"],
            passages: [],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            stem: ["The grass was wet.", "We could not play soccer."],
            partA: {
              prompt: "Which choice is the best way to combine the two sentences?",
              choices: [
                { text: "Because the grass was wet, we could not play soccer.", correct: true },
                { text: "The grass was wet, but we could not play soccer." },
                { text: "The grass was wet, or we could not play soccer." },
                { text: "The grass was wet we could not play soccer." }
              ]
            },
            partB: {
              prompt: "Why is that the best combination?",
              choices: [
                { text: "The wet grass is the reason they could not play.", correct: true },
                { text: "The two sentences tell about a surprise." },
                { text: "The two sentences give a choice between two things." },
                { text: "The two sentences happen at different times." }
              ]
            },
            clue: "Ask how the two ideas go together. Decide which idea is the reason and which is the result.",
            hints: [
              "Ask how the two ideas go together. Decide which idea is the reason and which is the result.",
              "Say what the wet grass has to do with playing soccer. Then check each choice for a joining word that shows it, with the right punctuation.",
              "One choice has two whole thoughts and no joining word. Check the other three for the meaning they show."
            ],
            how: [
              "Ask what the wet grass has to do with not playing. The grass is the reason.",
              "Part A: the reason goes with Because: \"Because the grass was wet, we could not play soccer.\"",
              "Check the others: but shows a surprise, or shows a choice, and the choice with no joining word is a run-on.",
              "Part B: \"The wet grass is the reason they could not play.\""
            ],
            misconception: "A common mix-up is joining the sentences with but or or without asking what the ideas have to do with each other.",
            why: "Part A: \"Because the grass was wet, we could not play soccer.\" Part B: \"The wet grass is the reason they could not play.\" The wet grass explains why they could not play, so Because fits. But would mean a surprise, and or would mean a choice. The choice with no joining word is a run-on."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GC2b-S01",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-P4"],
      prompt: "Which TWO sentences stay in one time from start to finish?",
      pick: 2,
      choices: [
        { text: "Last night, Dad baked bread, and we ate it warm.", correct: true },
        {
          text: "Every afternoon, Jada walks to the library and returns her books.",
          correct: true
        },
        { text: "Last Monday, Carlos paints a sign, and he hung it on the door." },
        { text: "The puppy barks every time the mail carrier delivered a package." },
        { text: "On Friday, we sing a song and clapped along." }
      ],
      clue: "Look at all the verbs in a sentence. Do they tell about the same time?",
      hints: [
        "Look at all the verbs in a sentence. Do they tell about the same time?",
        "Use the time words in each sentence. Say which tense each one points to, then check each verb against it.",
        "Three of the five sentences have a verb that does not match its partner. Check the others carefully."
      ],
      how: [
        "Find the time word in each sentence and list the verbs.",
        "\"Last night, Dad baked bread, and we ate it warm.\" has baked and ate, both past.",
        "\"Every afternoon, Jada walks to the library and returns her books.\" has walks and returns, both present.",
        "The other three mix tenses: paints and hung, barks and delivered, sing and clapped."
      ],
      misconception: "A common mix-up is checking only one verb. Check every verb in the sentence.",
      why: "The answers are \"Last night, Dad baked bread, and we ate it warm.\" (baked and ate are both past) and \"Every afternoon, Jada walks to the library and returns her books.\" (walks and returns are both present). The other three mix present and past verbs."
    },
    {
      id: "SK-GC2b-S02",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-P5"],
      prompt: "Which choice is the best way to combine these two sentences?",
      stem: ["Omar cleaned his room.", "He went to the park."],
      choices: [
        { text: "After Omar cleaned his room, he went to the park.", correct: true },
        { text: "Omar cleaned his room, but he went to the park." },
        { text: "Omar cleaned his room he went to the park." },
        { text: "After Omar cleans his room, he went to the park." }
      ],
      clue: "Think about the order things happened. Then check the punctuation and the verbs.",
      hints: [
        "Think about the order things happened. Then check the punctuation and the verbs.",
        "Say which thing happened first. Then ask which joining word shows that order.",
        "One choice has no comma and joining word between two whole thoughts. Check the other three."
      ],
      how: [
        "Omar cleaned first. Then he went to the park.",
        "After shows the order, and both verbs stay in the past: \"After Omar cleaned his room, he went to the park.\"",
        "But does not fit, one choice is a run-on, and cleans is present."
      ],
      misconception: "A common mix-up is choosing but. Going to the park is not a surprise after cleaning.",
      why: "The answer is \"After Omar cleaned his room, he went to the park.\" After shows the order, and both verbs are past. But would make the park trip a surprise. One choice is a run-on. In the cleans choice, the tense shifts."
    },
    {
      id: "SK-GC2b-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-P6"],
      prompt: "Choose the verb that keeps the tense the same.",
      text: "On school days, Dad packs our lunches, and then he {0} us to the bus stop.",
      slots: [
        {
          options: ["walked", "walks", "walk"],
          answer: 1
        }
      ],
      clue: "Find the time clue, then check the tense of the verb you can see.",
      hints: [
        "Find the time clue, then check the tense of the verb you can see.",
        "Look at the verb packs. Ask what tense it is, then make the new verb match it.",
        "Walked tells about the past. Check the other two against the subject he."
      ],
      how: [
        "On school days tells you this happens again and again, so the sentence is in the present tense.",
        "The first verb, packs, is present. The new verb must be present too.",
        "The subject is he, which is one person, so the verb ends in s: walks."
      ],
      misconception: "A common mix-up is choosing the past tense because the sentence tells a little story.",
      why: "The answer is walks. On school days and packs tell you the sentence is in the present tense, so the second verb is present too. Walked is past, and walk does not go with he."
    },
    {
      id: "SK-GC2b-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C04"],
      prompt: "Ana wants to add a sentence after sentence 3. Which sentence keeps the draft in the same time?",
      stem: [
        "(1) Last summer, my cousin visited our town.",
        "(2) We rode bikes along the trail.",
        "(3) A deer stood still near the path."
      ],
      choices: [
        { text: "We stopped and watched it for a long time.", correct: true },
        { text: "We stop and watch it for a long time." },
        { text: "We are stopping to watch it for a long time." },
        { text: "We stopped and watch it for a long time." }
      ],
      clue: "Look for the time clue that tells when this happened. Make your new sentence match it.",
      hints: [
        "Look for the time clue that tells when this happened. Make your new sentence match it.",
        "Read sentence 1 for the time clue. Then check the verbs in sentences 2 and 3.",
        "One choice has both of its verbs in the present. Look at the other three."
      ],
      how: [
        "Sentence 1 says Last summer, so everything already happened.",
        "Sentences 2 and 3 use rode and stood, which are past tense.",
        "The new sentence needs past tense for both of its verbs: \"We stopped and watched it for a long time.\""
      ],
      misconception: "A common mix-up is changing only one of the two verbs in the new sentence.",
      why: "The answer is \"We stopped and watched it for a long time.\" Last summer tells you the story is in the past, and rode and stood are past tense. Stop and watch and are stopping are present. In the choice that mixes the two, stopped is past but watch is present."
    },
    {
      id: "SK-GC2b-S05",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C05"],
      prompt: "Which choice joins these two sentences best?",
      stem: ["We can paint the fence.", "We can wash the car."],
      choices: [
        { text: "We can paint the fence, or we can wash the car.", correct: true },
        { text: "We can paint the fence, so we can wash the car." },
        { text: "We can paint the fence, but we can wash the car." },
        { text: "We can paint the fence because we can wash the car." }
      ],
      clue: "Ask how the two ideas go together. Are they two choices, a result, a surprise or a reason?",
      hints: [
        "Ask how the two ideas go together. Are they two choices, a result, a surprise or a reason?",
        "Say what each sentence offers. Does the second idea add to the first, or give another thing to pick?",
        "Painting the fence does not cause the washing, so so does not fit. Think about the other three."
      ],
      how: [
        "Each sentence tells a job the family can do.",
        "Neither job is the reason for the other, and neither is a surprise. They are two choices.",
        "The joining word for two choices is or: \"We can paint the fence, or we can wash the car.\""
      ],
      misconception: "A common mix-up is choosing so or but without asking what the two ideas have to do with each other.",
      why: "The answer is \"We can paint the fence, or we can wash the car.\" The sentences give two choices, and or joins choices. So would mean one job causes the other. But would make the second a surprise. Because would make one the reason for the other."
    },
    {
      id: "SK-GC2b-S06",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: ["p6"],
      like: ["SK-GC2b-C06"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Which sentence in Isaiah's draft has a verb that does not fit the time of the story?",
        choices: [
          { text: "(6) My little brother chases them across the driveway.", correct: true },
          { text: "(5) The soap bubbles floated up into the air." },
          { text: "(8) Dad dried the windows with a clean towel." },
          { text: "(9) Now the truck shines in the sun." }
        ]
      },
      partB: {
        prompt: "Which detail from the draft best supports the answer to Part A?",
        choices: [
          {
            text: "Last Saturday in sentence 1 tells you the story is about something that already happened.",
            correct: true
          },
          {
            text: "Now in sentence 9 tells you that every sentence before it is in the present."
          },
          { text: "Shines in sentence 9 tells you that the whole story is in the present." },
          {
            text: "Every weekend in sentence 11 tells you that the story happens again and again."
          }
        ]
      },
      clue: "Find the time clue that tells when the story happened. Then look for the verb that does not fit it.",
      hints: [
        "Find the time clue that tells when the story happened. Then look for the verb that does not fit it.",
        "For Part A, check the verbs in the draft one at a time. For Part B, ask which time word tells when the story takes place.",
        "In Part A, one choice is a past-tense verb with no problem. Check the other three."
      ],
      how: [
        "Find the time clue. Sentence 1 says Last Saturday, so the story tells about the past.",
        "Check the verbs near the bubbles: floated, rinsed, dried. They are past tense.",
        "Part A: \"(6) My little brother chases them across the driveway.\" has chases, which is present tense. It should say chased.",
        "Part B: \"Last Saturday in sentence 1 tells you the story is about something that already happened.\""
      ],
      misconception: "A common mix-up is choosing a sentence with a present-tense verb that a time word makes correct.",
      why: "Part A: \"(6) My little brother chases them across the driveway.\" Part B: \"Last Saturday in sentence 1 tells you the story is about something that already happened.\" The sentences around sentence 6 use floated, rinsed and dried, so chases does not fit; it should be chased. The other Part B choices use time words but misread them."
    },
    {
      id: "SK-GC2b-S07",
      type: "ms",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.b"],
      passages: ["p6"],
      like: ["SK-GC2b-C07"],
      prompt: "Choose the TWO ways to combine sentences 3 and 4 that keep the meaning and the time.",
      pick: 2,
      choices: [
        {
          text: "Dad hosed off the dirt, and I scrubbed the doors with a big sponge.",
          correct: true
        },
        {
          text: "After Dad hosed off the dirt, I scrubbed the doors with a big sponge.",
          correct: true
        },
        { text: "Before Dad hosed off the dirt, I scrubbed the doors with a big sponge." },
        { text: "Dad hoses off the dirt, and I scrubbed the doors with a big sponge." },
        { text: "Dad hosed off the dirt I scrubbed the doors with a big sponge." }
      ],
      clue: "A good combination keeps both ideas and the order they happened. It is not a run-on, and the verbs match.",
      hints: [
        "A good combination keeps both ideas and the order they happened. It is not a run-on, and the verbs match.",
        "Check each choice four ways: Are both ideas there? Is the order right? Is it a run-on? Do the verbs match the time clue?",
        "One choice changes which job came first, so it does not keep the order. Check the other four."
      ],
      how: [
        "In the draft, Dad hosed first, and then Isaiah scrubbed. The verbs are past tense.",
        "The Before choice reverses the order, the hoses choice shifts to the present, and one choice has no joining word.",
        "The answers are \"Dad hosed off the dirt, and I scrubbed the doors with a big sponge.\" (compound) and \"After Dad hosed off the dirt, I scrubbed the doors with a big sponge.\" (complex)."
      ],
      misconception: "A common mix-up is picking a combination that joins the ideas but changes the order or the tense.",
      why: "The answers are \"Dad hosed off the dirt, and I scrubbed the doors with a big sponge.\" and \"After Dad hosed off the dirt, I scrubbed the doors with a big sponge.\" Both keep the order and the past tense. The Before choice reverses the order. The hoses choice is present tense. The choice with no joining word is a run-on."
    },
    {
      id: "SK-GC2b-S08",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.b"],
      passages: ["p6"],
      like: ["SK-GC2b-C08"],
      prompt: "Sentence 9 in Isaiah's draft uses a different tense from the sentences before it. Why is that correct?",
      choices: [
        {
          text: "Now tells you the story has moved from the past to the present.",
          correct: true
        },
        { text: "Last Saturday in sentence 1 tells you every verb must be in the past." },
        {
          text: "Sentence 9 begins a new paragraph, and a new paragraph always changes the tense."
        },
        { text: "Sentence 9 is about the truck, and a truck always takes the present." }
      ],
      clue: "A writer keeps the same tense unless the time really changes. Ask what in the draft shows a change of time.",
      hints: [
        "A writer keeps the same tense unless the time really changes. Ask what in the draft shows a change of time.",
        "Read sentence 9 and look for words that tell when. Compare it with the time clue in sentence 1.",
        "Starting a new paragraph does not change the tense. Check the other choices for a reason about time."
      ],
      how: [
        "Sentences 1 to 8 tell what happened last Saturday, in the past tense.",
        "Sentence 9 tells how the truck looks at the time of writing: Now the truck shines. The time word Now shows the change.",
        "The answer is \"Now tells you the story has moved from the past to the present.\""
      ],
      misconception: "A common mix-up is thinking a draft must stay in one tense. The tense changes when the time really changes.",
      why: "The answer is \"Now tells you the story has moved from the past to the present.\" The first sentences tell what happened last Saturday, and sentence 9 tells how the truck looks now. A new paragraph does not change the tense by itself, and a noun like truck does not decide it."
    },
    {
      id: "SK-GC2b-S09",
      type: "hottext",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C09"],
      prompt: "One sentence in Lena's draft has a verb that does not fit the rest. Select that sentence.",
      options: [
        "Every morning, I feed the fish in our tank.",
        "I scoop a little food into the water.",
        "The fish swim up to the top.",
        "Then my sister counted them.",
        "I count them every day to be sure."
      ],
      answer: [3],
      pick: 1,
      clue: "Find the time of the draft. Then check the verb in each sentence to see whether it matches.",
      hints: [
        "Find the time of the draft. Then check the verb in each sentence to see whether it matches.",
        "Lena tells what happens again and again. Read each sentence and ask whether its verb tells about that too.",
        "The first sentence sets the time for the draft. Compare each other sentence with it."
      ],
      how: [
        "Find the time clue: Every morning means the draft tells what happens again and again, so it is in the present tense.",
        "Check each verb: feed, scoop, swim, count. They are all present tense.",
        "\"Then my sister counted them.\" has counted, which is past tense. It should say counts."
      ],
      misconception: "A common mix-up is skipping a short sentence because it sounds fine. Check every verb against the time clue.",
      why: "The answer is \"Then my sister counted them.\" Lena writes about what she does every morning, so the draft is in the present tense. Counted is past tense. It should be counts."
    },
    {
      id: "SK-GC2b-S10",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C10"],
      prompt: "Which choice combines the sentences so the reader sees the reason?",
      stem: ["The path was slippery.", "We walked slowly."],
      choices: [
        { text: "Because the path was slippery, we walked slowly.", correct: true },
        { text: "Because we walked slowly, the path was slippery." },
        { text: "Because the path was slippery, we walk slowly." },
        { text: "The path was slippery we walked slowly." }
      ],
      clue: "To show a reason, ask which idea causes the other. The reason goes with the joining word.",
      hints: [
        "To show a reason, ask which idea causes the other. The reason goes with the joining word.",
        "Ask which idea is the reason and which is the result. Then check the punctuation and the tense.",
        "Walking slowly does not make a path slippery. Check the other choices."
      ],
      how: [
        "The path was slippery, and that is why they walked slowly.",
        "The reason goes with Because: \"Because the path was slippery, we walked slowly.\"",
        "One choice turns the reason around, one slips into the present with walk, and one is a run-on."
      ],
      misconception: "A common mix-up is putting Because with the result instead of the reason.",
      why: "The answer is \"Because the path was slippery, we walked slowly.\" The slippery path is the reason, and walking slowly is the result. One choice turns the reason around. One choice changes walked to walk. One choice has no joining word."
    },
    {
      id: "SK-GC2b-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C11"],
      prompt: "Two students fix the tense in the sentence. Who fixed it correctly?",
      stem: [
        "Last night, Rosa reads a story, and her brother fell asleep.",
        "Dev: Last night, Rosa read a story, and her brother fell asleep.",
        "Mei: Last night, Rosa reads a story, and her brother falls asleep."
      ],
      choices: [
        {
          text: "Dev, because Last night shows the sentence tells about the past.",
          correct: true
        },
        { text: "Mei, because reads and falls both tell what happens now." },
        { text: "Mei, because a sentence should always be in the present." },
        { text: "Neither, because the two verbs may use different tenses." }
      ],
      clue: "To judge a fix, find the time clue first. The verbs have to match the time the clue gives.",
      hints: [
        "To judge a fix, find the time clue first. The verbs have to match the time the clue gives.",
        "Look at the first words of the sentence. Ask what they say about when this happened, then check both students.",
        "Mei made the two verbs match each other, but matching is not enough. Check what the time clue says."
      ],
      how: [
        "Find the time clue: Last night means the sentence tells about something that already happened.",
        "Both verbs must be past tense: read and fell. Dev changed reads to read.",
        "Mei made both verbs present, which matches each other but not Last night.",
        "The answer is \"Dev, because Last night shows the sentence tells about the past.\""
      ],
      misconception: "A common mix-up is thinking that matching verbs is all that matters. They also have to match the time clue.",
      why: "The answer is \"Dev, because Last night shows the sentence tells about the past.\" Dev made both verbs past tense. Mei made them match each other, but in the present, so they do not fit Last night. The time does not change here, so two tenses are not allowed."
    },
    {
      id: "SK-GC2b-S12",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C12"],
      prompt: "Pick the TWO sentences with a joining word that makes sense.",
      pick: 2,
      choices: [
        { text: "Tia studied the words, so she did well on the spelling quiz.", correct: true },
        { text: "Marcus wanted a snack, but the cupboard was empty.", correct: true },
        { text: "Tia studied the words, but she did well on the spelling quiz." },
        { text: "Marcus wanted a snack, so the cupboard was empty." },
        { text: "The bus was late, or we waited at the corner." }
      ],
      clue: "Read each sentence and ask how the two ideas go together: a result, a surprise, a choice or a reason.",
      hints: [
        "Read each sentence and ask how the two ideas go together: a result, a surprise, a choice or a reason.",
        "Say the two ideas without the joining word. Ask whether the second idea is a result, goes against the first, or offers a choice.",
        "Two of the choices use the same ideas as another choice, with a different joining word. Decide which word fits each pair."
      ],
      how: [
        "For each sentence, say what the first idea has to do with the second.",
        "Studying leads to doing well, so so fits: \"Tia studied the words, so she did well on the spelling quiz.\"",
        "Wanting a snack and finding the cupboard empty goes against what Marcus hoped, so but fits: \"Marcus wanted a snack, but the cupboard was empty.\"",
        "The bus sentence does not give a choice, and the other two use the wrong word."
      ],
      misconception: "A common mix-up is trusting a joining word because it sounds familiar. Check what the two ideas really have to do with each other.",
      why: "The answers are \"Tia studied the words, so she did well on the spelling quiz.\" and \"Marcus wanted a snack, but the cupboard was empty.\" Studying is the reason Tia did well, so so fits. Marcus did not get a snack, so but fits. The other three use a word that does not match the ideas."
    },
    {
      id: "SK-GC2b-S13",
      type: "match",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C13"],
      prompt: "Which joining word shows how each pair of ideas goes together? Match each pair.",
      cols: ["because", "but", "or", "so"],
      rows: [
        { text: "Jada wanted to skate. Her wheel was broken.", answer: 1 },
        { text: "We can sing a song. We can tell a story.", answer: 2 },
        { text: "Pedro was tired after school. He ran two miles.", answer: 0 },
        { text: "The pie was hot. We waited to eat it.", answer: 3 }
      ],
      clue: "For each pair, ask how the second idea goes with the first: a reason, a surprise, a choice or a result.",
      hints: [
        "For each pair, ask how the second idea goes with the first: a reason, a surprise, a choice or a result.",
        "For the pairs where one idea causes the other, decide which idea comes first in real life, the cause or the result.",
        "Jada wanted to skate, and then something got in her way. Decide the other three rows."
      ],
      how: [
        "\"Jada wanted to skate. Her wheel was broken.\" The second idea goes against what Jada wanted, so the word is but.",
        "\"We can sing a song. We can tell a story.\" These are two choices, so the word is or.",
        "\"Pedro was tired after school. He ran two miles.\" The second idea is the reason for the first, so the word is because.",
        "\"The pie was hot. We waited to eat it.\" The first idea causes the second, so the word is so."
      ],
      misconception: "A common mix-up is mixing up because and so. Because goes with the reason. So goes with the result.",
      why: "Jada wanted to skate, but her wheel was broken. We can sing a song, or we can tell a story. Pedro was tired after school because he ran two miles. The pie was hot, so we waited to eat it. Because points to the reason, and so points to the result."
    },
    {
      id: "SK-GC2b-S14",
      type: "ms",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C14"],
      prompt: "A student wrote this paragraph about a birthday. Choose the TWO changes that make it better.",
      stem: [
        "(1) Last Sunday, we baked a cake for Grandma.",
        "(2) Dad mixed the batter.",
        "(3) Then I pour it into two pans.",
        "(4) The oven was hot.",
        "(5) The cake baked fast."
      ],
      pick: 2,
      choices: [
        { text: "Change sentence 3 to: Then I poured it into two pans.", correct: true },
        {
          text: "Join sentences 4 and 5: Because the oven was hot, the cake baked fast.",
          correct: true
        },
        { text: "Change sentence 2 to: Dad mixes the batter." },
        { text: "Join sentences 4 and 5: The oven was hot, but the cake baked fast." },
        { text: "Change sentence 1 to: Last Sunday, we bake a cake for Grandma." }
      ],
      clue: "Find the time the paragraph is written in. Then look for a verb that does not fit and for short sentences that belong together.",
      hints: [
        "Find the time the paragraph is written in. Then look for a verb that does not fit and for short sentences that belong together.",
        "Check each verb against the time clue in sentence 1. Then ask which two short sentences could be joined to show a reason.",
        "Sentences 1 and 2 already match the time clue in sentence 1. Check the other choices to see which changes fix a real problem."
      ],
      how: [
        "Sentence 1 says Last Sunday, so the paragraph is in the past tense.",
        "Sentence 3 has pour, which is present. Fix it: \"Then I poured it into two pans.\"",
        "Sentences 4 and 5 are short and go together. The hot oven is the reason the cake baked fast: \"Because the oven was hot, the cake baked fast.\""
      ],
      misconception: "A common mix-up is changing a verb that is already right, or joining sentences with a word that does not fit the meaning.",
      why: "The answers are \"Change sentence 3 to: Then I poured it into two pans.\" and \"Join sentences 4 and 5: Because the oven was hot, the cake baked fast.\" Last Sunday tells you the paragraph is in the past, so pour should be poured. The hot oven is the reason the cake baked fast. Sentences 1 and 2 are already correct, and but would make the baking a surprise."
    },
    {
      id: "SK-GC2b-S15",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.b"],
      passages: [],
      like: ["SK-GC2b-C15"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: ["The streets were icy.", "The bus ran late."],
      partA: {
        prompt: "Which choice is the best way to combine the two sentences?",
        choices: [
          { text: "Because the streets were icy, the bus ran late.", correct: true },
          { text: "The streets were icy, but the bus ran late." },
          { text: "The streets were icy, or the bus ran late." },
          { text: "The streets were icy the bus ran late." }
        ]
      },
      partB: {
        prompt: "Why is that the best combination?",
        choices: [
          { text: "The icy streets are the reason the bus was slow.", correct: true },
          { text: "The two sentences tell about a surprise." },
          { text: "The two sentences give a choice between two things." },
          { text: "The two sentences happen in different seasons." }
        ]
      },
      clue: "Ask how the two ideas go together. Decide which idea is the reason and which is the result.",
      hints: [
        "Ask how the two ideas go together. Decide which idea is the reason and which is the result.",
        "Say what the icy streets have to do with the bus. Then check each choice for a joining word that shows it, with the right punctuation.",
        "One choice has two whole thoughts and no joining word. Check the other three for the meaning they show."
      ],
      how: [
        "Ask what the icy streets have to do with the late bus. The ice is the reason.",
        "Part A: the reason goes with Because: \"Because the streets were icy, the bus ran late.\"",
        "Check the others: but shows a surprise, or shows a choice, and one choice is a run-on.",
        "Part B: \"The icy streets are the reason the bus was slow.\""
      ],
      misconception: "A common mix-up is joining the sentences with but or or without asking what the ideas have to do with each other.",
      why: "Part A: \"Because the streets were icy, the bus ran late.\" Part B: \"The icy streets are the reason the bus was slow.\" The ice explains why the bus ran late, so Because fits. But would mean a surprise, and or would mean a choice. The choice with no joining word is a run-on."
    }
  ],
  addons: {
    "SK-GC2b-P4": {
      hints: [
        "Find every verb in each sentence and ask whether the verbs all tell about the same time.",
        "Use the time words in each sentence. Say which tense they point to, then check each verb against it.",
        "Two of the five sentences mix past and present verbs. Check the other three one at a time."
      ],
      how: [
        "Find the time word in each sentence, then list its verbs.",
        "\"Yesterday, Ana lost her mitten, and she looked for it everywhere.\" has lost and looked, which are both past.",
        "\"Every day after school, Marcus walks his dog and feeds the cat.\" has walks and feeds, which are both present.",
        "The other three mix tenses: watched and points, laughs and licked, planted and waters."
      ],
      misconception: "A common mix-up is checking only the first verb. Check every verb in the sentence."
    },
    "SK-GC2b-P5": {
      hints: [
        "Think about how the two ideas go together, then check the punctuation and the verbs.",
        "Say which thing happened first. Then ask which joining word shows that order.",
        "One choice has no comma and joining word between two whole thoughts. Check the other three."
      ],
      how: [
        "Kayla finished her homework first. Then she played outside.",
        "The word After shows the order, and both verbs stay in the past: \"After Kayla finished her homework, she played outside.\"",
        "But does not fit, one choice is a run-on, and one choice has finishes, which is present."
      ],
      misconception: "A common mix-up is choosing but. Playing outside is not a surprise after finishing homework."
    },
    "SK-GC2b-P6": {
      hints: [
        "Find the time clue in the sentence, then check the tense of the verb you can see.",
        "Look at the verb feeds. Ask what tense it is, then make the new verb match it.",
        "Gathered tells about the past, and Every morning tells about something that happens again and again. Check the other two."
      ],
      how: [
        "Every morning tells you this happens again and again, so the sentence is in the present tense.",
        "The first verb, feeds, is present. The new verb must be present too.",
        "The subject is he, which is one person, so the verb ends in s: gathers."
      ],
      misconception: "A common mix-up is choosing the past tense because the sentence tells a little story."
    },
    "SK-GC2b-P1": {
      hints: [
        "Find a time clue near the start of the draft. Then check the verb in each highlighted sentence.",
        "Read each highlighted sentence and find its main verb. Ask whether that verb tells about something that already happened.",
        "Sentence 7 has a verb that fits the rest of the draft. Compare it with the verbs in the other sentences."
      ],
      how: [
        "Last Friday in sentence 1 tells you the trip already happened, so the verbs should be past tense.",
        "Check the verbs: visited, glided, swam and bought are all past tense.",
        "Sentence 6 has walk, which is present tense. It should be walked."
      ],
      misconception: "A common mix-up is choosing a sentence because it is unusual. Check the verb against the time clue."
    },
    "SK-GC2b-P2": {
      hints: [
        "Ask how the two ideas go together. Then check the punctuation and make sure both verbs tell about the same time.",
        "Say sentence 8 and sentence 9 out loud. Ask whether the first idea is the reason for the second, or goes against it.",
        "One choice has no comma and joining word between two whole thoughts. Check the other three."
      ],
      how: [
        "The tunnel was dark, and that is the reason it felt scary.",
        "The joining word for a result is so: \"The tunnel was dark, so it felt a little scary.\"",
        "But would make the scary feeling a surprise, one choice is a run-on, and feels switches to the present tense."
      ],
      misconception: "A common mix-up is choosing but. A dark tunnel feeling scary is not a surprise."
    },
    "SK-GC2b-P3": {
      hints: [
        "Ask whether the second idea goes along with the first, or goes against it.",
        "Think about how sore feet usually make a person feel. Does Tasha's second idea match that feeling?",
        "So would mean the sore feet caused the wish to go back. Decide between the other two."
      ],
      how: [
        "Sore feet might make Tasha want to stop.",
        "But she still wanted to go back, which goes against that feeling.",
        "But shows that the second idea goes against what you might expect."
      ],
      misconception: "A common mix-up is choosing so because the two ideas sit side by side. Ask whether one causes the other."
    }
  },
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
    {
      id: "p1",
      title: "Evenings on Grandma's Porch",
      byline: "Zuri's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Every evening, my cousins and I sit on Grandma's porch.",
          "(2) The porch has a wide swing and two rocking chairs."
        ],
        [
          "(3) Grandma brings out a pitcher of cold tea.",
          "(4) The swing and the chairs is old but strong."
        ],
        [
          "(5) The crickets in the yard sing loudly.",
          "(6) My cousin Ben hums along with them.",
          "(7) Grandpa tells us a funny story.",
          "(8) When the story ends, we clap and laugh."
        ],
        [
          "(9) The light above the door turns on at dark.",
          "(10) We feel happy and sleepy.",
          "(11) I love sitting there with my family.",
          "(12) Grandma waves to us from the gate.",
          "(13) We cannot wait for tomorrow.",
          "(14) It is my favorite part of the day."
        ]
      ]
    },
    {
      id: "p2",
      title: "Relay Practice",
      byline: "Jordan's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) On Tuesdays and Thursdays, the four runners practice after school.",
          "(2) Coach Dee watches from the bench."
        ],
        [
          "(3) The sign beside the cones tells us where to stand.",
          "(4) Maya and I pass the baton to each other.",
          "(5) The shoes beside the bench is covered in dust."
        ],
        [
          "(6) When the baton reaches Maya, she sprints down the track.",
          "(7) The other runners cheer from the grass.",
          "(8) After we finish, Coach Dee gives us water."
        ],
        [
          "(9) My legs feel tired but strong.",
          "(10) We are ready for the big race on Saturday.",
          "(11) I love running with my friends.",
          "(12) We smile at the end of every practice."
        ]
      ]
    },
    {
      id: "p3",
      title: "The Book Sale",
      byline: "Amari's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Every spring, our town library holds a book sale.",
          "(2) Tables of books fill the front room."
        ],
        [
          "(3) The prices on the little tags are very low.",
          "(4) My brother and I looks for comics first."
        ],
        [
          "(5) The librarian at the front desk smiles at every child.",
          "(6) When we find a book we like, we put it in a basket.",
          "(7) The money from the sale buys new chairs for the story room."
        ],
        [
          "(8) I carry home six books and a poster.",
          "(9) My sister reads the poster words out loud.",
          "(10) We love the book sale and want to go again."
        ]
      ]
    },
    {
      id: "p4",
      title: "Soup Day with Grandpa",
      byline: "Isaiah's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Sundays, my grandpa and I cook soup together.",
          "(2) The kitchen smells like garlic and onions."
        ],
        [
          "(3) I stir the big pot with a long spoon.",
          "(4) The carrots and the potatoes is soft now."
        ],
        [
          "(5) Grandpa tastes the broth and adds a little salt.",
          "(6) The bowls on the table look warm and bright.",
          "(7) When the soup cools, we eat it with bread."
        ],
        [
          "(8) My little sister asks for more.",
          "(9) Grandpa smiles at her.",
          "(10) We save the leftovers for Monday.",
          "(11) I like soup day better than any other day.",
          "(12) Next week, I will bring the bread."
        ]
      ]
    },
    {
      id: "p5",
      title: "Band Practice",
      byline: "Eli's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Twice a week, the five drummers meet in the music room.",
          "(2) Ms. Park listens from her chair."
        ],
        [
          "(3) The cymbal beside the drums rings with a bright sound.",
          "(4) Tia and I tap the same beat.",
          "(5) The sticks in my bag is made of wood."
        ],
        [
          "(6) When the music gets fast, my hands move quickly.",
          "(7) The other drummers watch me closely.",
          "(8) After we stop, Ms. Park gives us a smile."
        ],
        [
          "(9) My arms feel sore but happy.",
          "(10) We are ready for the show on Friday.",
          "(11) I love making music with my friends.",
          "(12) We clap at the end of every practice."
        ]
      ]
    },
    {
      id: "p6",
      title: "Pet Wash Day",
      byline: "Nora's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Every June, our town park holds a pet wash.",
          "(2) Rows of buckets line the grass."
        ],
        [
          "(3) The toys in the basket are free for every pet.",
          "(4) My cousin and I washes the dogs first."
        ],
        [
          "(5) The volunteer at the gate hands out soft towels.",
          "(6) When a dog shakes, everyone gets wet.",
          "(7) The money from the wash buys food for the shelter."
        ],
        [
          "(8) I rinse four dogs and a very large cat.",
          "(9) My brother brushes their fur.",
          "(10) We love pet wash day and want to help again.",
          "(11) The shelter dogs wag their tails all day."
        ]
      ]
    }
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
          { ref: "SK-GC2c-P5" },
          { ref: "SK-GC2c-P6" },
          { ref: "SK-GC2c-P7" },
          {
            id: "SK-GC2c-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.c"],
            passages: ["p1"],
            prompt: "Sentence 4 in Zuri's draft has a verb that does not agree with its subject. Which revision fixes it?",
            choices: [
              { text: "The swing and the chairs are old but strong.", correct: true },
              { text: "The swing and the chairs was old but strong." },
              { text: "The swing and the chair is old but strong." },
              { text: "The swing and the chairs have old but strong." }
            ],
            clue: "Find the subject of the sentence, count how many things it names, and make the verb match.",
            hints: [
              "Find the subject of the sentence, count how many things it names, and make the verb match.",
              "Read sentence 4 and ask what is old but strong. How many things does the subject name?",
              "Changing a verb to the past tense does not change how many things the subject names. Check the other choices."
            ],
            how: [
              "Find the subject: the swing and the chairs. It names two things joined by and.",
              "Two things joined by and count as more than one, so the verb must go with more than one.",
              "The verb that goes with more than one is are: \"The swing and the chairs are old but strong.\"",
              "Was is a past-tense verb for one thing. Changing chairs to chair still leaves two things. Have is not the verb that fits old but strong."
            ],
            misconception: "A common mix-up is matching the verb to just one of the two nouns, instead of counting both.",
            why: "The answer is \"The swing and the chairs are old but strong.\" The subject names two things joined by and, so it counts as more than one and needs are. Was goes with one thing. \"The swing and the chair is old but strong.\" still names two things. Have does not fit with old but strong."
          },
          {
            id: "SK-GC2c-C05",
            type: "ms",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.c"],
            passages: [],
            prompt: "Choose the TWO sentences in which the verb agrees with the subject.",
            pick: 2,
            choices: [
              { text: "The bowl of grapes sits on the counter.", correct: true },
              { text: "The dogs behind the fence bark at every car.", correct: true },
              { text: "The bag of marbles are under my bed." },
              { text: "The leaves on the tree falls in October." },
              { text: "The kites above the hill was bright red." }
            ],
            clue: "Find the real subject in each sentence. Words between the subject and the verb do not change it.",
            hints: [
              "Find the real subject in each sentence. Words between the subject and the verb do not change it.",
              "In each choice, cover the words between the subject and the verb. Read the subject and the verb together, then pick two.",
              "In the sentence about the marbles, the subject is bag. Check whether the verb fits one bag."
            ],
            how: [
              "For each sentence, find the real subject and skip the words that only tell where.",
              "\"The bowl of grapes sits on the counter.\" has the subject bowl, which is one, so sits is correct.",
              "\"The dogs behind the fence bark at every car.\" has the subject dogs, which is more than one, so bark is correct.",
              "The other three use a verb that matches the nearby word instead of the real subject: bag (not marbles), leaves (not tree) and kites (not hill)."
            ],
            misconception: "A common mix-up is matching the verb to the word right before it. The real subject may be earlier in the sentence.",
            why: "The answers are \"The bowl of grapes sits on the counter.\" and \"The dogs behind the fence bark at every car.\" In the first, the subject is bowl, so sits is right. In the second, the subject is dogs, so bark is right. In the other three, the verb matches a nearby word instead of the real subject."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GC2c-C06",
            type: "hottext",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.c"],
            passages: ["p2"],
            prompt: "One sentence in Jordan's draft has a verb that does not agree with its subject. Select that sentence.",
            targets: ["p2:2:1", "p2:2:2", "p2:2:3", "p2:3:1", "p2:3:3"],
            answer: ["p2:2:3"],
            pick: 1,
            clue: "Find the subject in each sentence. Ask: one or more than one? Then check the verb.",
            hints: [
              "Find the subject in each sentence. Ask: one or more than one? Then check the verb.",
              "Look at the second paragraph. Check each sentence there, skipping any words between the subject and the verb.",
              "Sentence 4 has two names joined by and, and its verb goes with more than one. Check the other two sentences in that paragraph."
            ],
            how: [
              "Find the subject of each sentence and decide whether it is one or more than one.",
              "In sentence 5, the subject is shoes. Beside the bench only tells where the shoes are.",
              "Shoes is more than one, but the verb is goes with one. It should say are."
            ],
            misconception: "A common mix-up is matching the verb to the word beside it. Here bench is one, but the subject is shoes.",
            why: "The answer is sentence 5, \"The shoes beside the bench is covered in dust.\" The subject is shoes, which is more than one, so the verb should be are. \"Beside the bench\" only tells where the shoes are."
          },
          {
            id: "SK-GC2c-C07",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.c"],
            passages: ["p2"],
            prompt: "Why is the verb tells correct in sentence 3 of Jordan's draft?",
            choices: [
              {
                text: "The subject is sign, which is one thing, so the verb ends in s.",
                correct: true
              },
              { text: "The word next to the verb is cones, so the verb must match cones." },
              { text: "A sentence that tells where to stand always takes a verb that ends in s." },
              { text: "Sign and cones are two subjects joined together, so the verb is plural." }
            ],
            clue: "To explain a verb, find the word the sentence is about and say whether it is one or more than one.",
            hints: [
              "To explain a verb, find the word the sentence is about and say whether it is one or more than one.",
              "Read sentence 3. Find the word the sentence is about, then find the words that only tell where.",
              "The word closest to the verb is not always the subject. Check the other choices against the words the sentence is really about."
            ],
            how: [
              "Ask what sentence 3 is about. It is about the sign.",
              "\"Beside the cones\" only tells where the sign is. It is not part of the subject.",
              "Sign is one thing, so the verb takes an s: \"The subject is sign, which is one thing, so the verb ends in s.\""
            ],
            misconception: "A common mix-up is matching the verb to the closest noun. Skip the words that only tell where.",
            why: "The answer is \"The subject is sign, which is one thing, so the verb ends in s.\" The words beside the cones tell where the sign is. Cones is not the subject, and the sentence has no word like and joining two subjects. A sentence that tells where to stand does not decide the verb."
          },
          {
            id: "SK-GC2c-C08",
            type: "ms",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.c"],
            passages: [],
            prompt: "Choose the TWO sentences that use the correct verb.",
            pick: 2,
            choices: [
              { text: "My brother does not like onions.", correct: true },
              { text: "Jada and her cousin were at the pool.", correct: true },
              { text: "Mom and Dad does the dishes together." },
              { text: "The cookies was warm and soft." },
              { text: "You was early to the game." }
            ],
            clue: "Decide for each sentence: one or more than one? Then check the verb. You takes the verb for more than one.",
            hints: [
              "Decide for each sentence: one or more than one? Then check the verb. You takes the verb for more than one.",
              "Check the sentences with two names joined by and, and the sentence with you, one at a time.",
              "In the sentence about the cookies, the subject names more than one. Check its verb."
            ],
            how: [
              "For each sentence, decide whether the subject is one or more than one.",
              "\"My brother does not like onions.\" has one brother, so does is right.",
              "\"Jada and her cousin were at the pool.\" has two people joined by and, so were is right.",
              "The others use a verb for one with a subject that is more than one (Mom and Dad, the cookies) or use was with you."
            ],
            misconception: "A common mix-up is using was with you. You takes were, like more than one.",
            why: "The answers are \"My brother does not like onions.\" and \"Jada and her cousin were at the pool.\" One brother takes does, and two people joined by and take were. \"Mom and Dad does the dishes together.\" and \"The cookies was warm and soft.\" use a verb for one with more than one. \"You was early to the game.\" should be you were."
          },
          {
            id: "SK-GC2c-C09",
            type: "match",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.c"],
            passages: [],
            prompt: "Which verb goes with each subject? Match each subject to has or have.",
            cols: ["has", "have"],
            rows: [
              { text: "The twins", answer: 1 },
              { text: "My uncle", answer: 0 },
              { text: "Rosa and Ben", answer: 1 },
              { text: "The cars in the lot", answer: 1 },
              { text: "The cake with sprinkles", answer: 0 }
            ],
            clue: "Ask one or more than one for each subject. Has goes with one. Have goes with more than one.",
            hints: [
              "Ask one or more than one for each subject. Has goes with one. Have goes with more than one.",
              "For a subject with extra words after it, find the main word first. Two names joined by and count as more than one.",
              "The cake is one thing, even though sprinkles is more than one. Decide the other four rows."
            ],
            how: [
              "\"The twins\" is more than one, so it goes with have.",
              "\"My uncle\" is one person, so it goes with has.",
              "\"Rosa and Ben\" is two people joined by and, so it goes with have.",
              "In \"The cars in the lot,\" the main word is cars, so have. In \"The cake with sprinkles,\" the main word is cake, so has."
            ],
            misconception: "A common mix-up is matching the verb to the last word, such as lot or sprinkles, instead of the main word.",
            why: "The twins, Rosa and Ben, and The cars in the lot are each more than one, so they go with have. My uncle and The cake with sprinkles are each one, so they go with has. The words in the lot and with sprinkles only tell more about the subject."
          },
          {
            id: "SK-GC2c-C10",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.c"],
            passages: ["p2"],
            prompt: "Jordan wants to add one sentence to the end of paragraph 3. Which sentence has verbs that agree in both parts?",
            choices: [
              { text: "When Maya crosses the line, her friends cheer.", correct: true },
              { text: "When Maya cross the line, her friends cheer." },
              { text: "When Maya crosses the line, her friends cheers." },
              { text: "When Maya cross the line, her friends cheers." }
            ],
            clue: "Each part of the sentence has its own subject and verb. Check both pairs.",
            hints: [
              "Each part of the sentence has its own subject and verb. Check both pairs.",
              "Find the subject in the first part and the subject in the second part. Ask one or more than one for each.",
              "Maya is one person. Look at the first part of each choice for a verb that goes with one person."
            ],
            how: [
              "Look at the first part: the subject is Maya, who is one person, so the verb needs an s: crosses.",
              "Look at the second part: the subject is her friends, which is more than one, so the verb has no s: cheer.",
              "The answer is \"When Maya crosses the line, her friends cheer.\" Each of the others gets at least one pair wrong."
            ],
            misconception: "A common mix-up is fixing one part of the sentence and forgetting to check the other.",
            why: "The answer is \"When Maya crosses the line, her friends cheer.\" Maya is one person, so crosses has an s. Her friends is more than one, so cheer has no s. Each other choice gets one or both pairs wrong."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GC2c-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.c"],
            passages: [],
            prompt: "Ana and Ben read the sentence in the box. Who is right?",
            stem: [
              "The tickets in my pocket ____ wet.",
              "Ana says the sentence needs were, because it is about the tickets.",
              "Ben says the sentence needs was, because pocket is next to the blank."
            ],
            choices: [
              {
                text: "Ana, because tickets is the subject, and tickets is more than one.",
                correct: true
              },
              { text: "Ben, because the word next to the verb decides which verb to use." },
              { text: "Ben, because pocket is the subject, and pocket is one thing." },
              { text: "Neither, because the sentence needs is." }
            ],
            clue: "Find the subject by asking who or what the sentence is about, not by looking at the word beside the blank.",
            hints: [
              "Find the subject by asking who or what the sentence is about, not by looking at the word beside the blank.",
              "Ask what is wet. Is that one thing or more than one?",
              "Look at the reason each choice gives. Which reason uses the word that the sentence is about?"
            ],
            how: [
              "Ask what is wet. The tickets are wet, so tickets is the subject.",
              "\"In my pocket\" only tells where the tickets are. Pocket is not the subject.",
              "Tickets is more than one, so the verb is were. The answer is \"Ana, because tickets is the subject, and tickets is more than one.\""
            ],
            misconception: "A common mix-up is letting the word next to the verb decide the verb.",
            why: "The answer is \"Ana, because tickets is the subject, and tickets is more than one.\" The sentence is about the tickets, so the verb is were. The word next to the verb, pocket, only tells where the tickets are, so it does not decide the verb. Is goes with one thing."
          },
          {
            id: "SK-GC2c-C12",
            type: "ms",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.c"],
            passages: [],
            prompt: "A student wrote this paragraph about a new park. Choose the TWO changes that fix verbs that do not agree.",
            stem: [
              "(1) The new park by the river has a pond and a path.",
              "(2) Maya and her brother walks there every day.",
              "(3) They skip stones across the water.",
              "(4) The path do not have a fence."
            ],
            pick: 2,
            choices: [
              {
                text: "Change sentence 2 to: Maya and her brother walk there every day.",
                correct: true
              },
              { text: "Change sentence 4 to: The path does not have a fence.", correct: true },
              { text: "Change sentence 1 to: The new park by the river have a pond and a path." },
              { text: "Change sentence 3 to: They skips stones across the water." },
              { text: "Change sentence 2 to: Maya and her brother is walking there every day." }
            ],
            clue: "Find the subject of each sentence. Ask one or more than one, then check the verb.",
            hints: [
              "Find the subject of each sentence. Ask one or more than one, then check the verb.",
              "Look at the sentence with two names joined by and, and at the sentence with the verb do. Pick one fix for each.",
              "Sentence 1 already agrees. Its subject is one thing, even though river is near the verb. Check the other choices."
            ],
            how: [
              "Sentence 2 has two people joined by and, so the verb should have no s: \"Change sentence 2 to: Maya and her brother walk there every day.\"",
              "Sentence 4 is about one path, so it needs does: \"Change sentence 4 to: The path does not have a fence.\"",
              "Sentences 1 and 3 already agree, and is walking is a verb for one."
            ],
            misconception: "A common mix-up is changing a sentence that is already right because a nearby word looks different.",
            why: "The answers are \"Change sentence 2 to: Maya and her brother walk there every day.\" and \"Change sentence 4 to: The path does not have a fence.\" Two people joined by and take a verb with no s, and one path takes does. Sentence 1 agrees: the subject is park. Sentence 3 agrees: they takes skip. Is walking goes with one person, not two."
          },
          {
            id: "SK-GC2c-C13",
            type: "dropdown",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.c"],
            passages: [],
            prompt: "Choose the verbs that agree with their subjects.",
            text: "The leaves on the maple tree {0} red in the fall, and the squirrel in the branches {1} for acorns.",
            slots: [
              {
                options: ["turns", "turn", "turning"],
                answer: 1
              },
              {
                options: ["hunt", "hunts", "hunting"],
                answer: 1
              }
            ],
            clue: "This sentence has two parts. Find the subject in each part, skipping the words between the subject and the verb.",
            hints: [
              "This sentence has two parts. Find the subject in each part, skipping the words between the subject and the verb.",
              "In the first part, the subject comes before on the maple tree. In the second part, find the subject before in the branches. Ask one or more than one for each.",
              "Tree is one thing, but it is not the subject of the first part. Do the first blank, and then do the second blank."
            ],
            how: [
              "First part: \"The leaves on the maple tree\" is about the leaves, which is more than one, so the verb has no s: turn.",
              "Second part: \"the squirrel in the branches\" is about one squirrel, so the verb ends in s: hunts.",
              "Each part has its own subject and verb, and each pair must agree."
            ],
            misconception: "A common mix-up is matching each verb to the noun just before it. Skip the words that only tell where.",
            why: "The answers are turn and hunts. In the first part, the subject is leaves, which is more than one, so turn has no s. In the second part, the subject is squirrel, which is one, so hunts ends in s. Tree and branches only tell where. Turning and hunting are not complete verbs here."
          },
          {
            id: "SK-GC2c-C14",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.c"],
            passages: ["p3"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which sentence in Amari's draft has a verb that does not agree with its subject?",
              choices: [
                { text: "(4) My brother and I looks for comics first.", correct: true },
                { text: "(2) Tables of books fill the front room." },
                { text: "(3) The prices on the little tags are very low." },
                { text: "(7) The money from the sale buys new chairs for the story room." }
              ]
            },
            partB: {
              prompt: "Which reason explains the error?",
              choices: [
                {
                  text: "My brother and I names two people, so the verb should be look, with no s.",
                  correct: true
                },
                { text: "The sentence is about one brother, so the verb should be looks." },
                { text: "The word I always needs a verb that ends in s." },
                { text: "Comics is more than one, so the verb must end in s." }
              ]
            },
            clue: "Find the subject of each sentence. Ask one or more than one, then check whether the verb matches.",
            hints: [
              "Find the subject of each sentence. Ask one or more than one, then check whether the verb matches.",
              "For Part A, start with sentences that have extra words before the verb or two subjects. For Part B, ask how many people the subject names.",
              "In Part A, the subject of sentence 3 is prices, which is more than one. Check the other three."
            ],
            how: [
              "Find the subject and verb in each choice for Part A. Sentences 2, 3 and 7 each agree.",
              "Sentence 4 has the subject my brother and I, which names two people, but the verb looks is for one.",
              "Part A: \"(4) My brother and I looks for comics first.\"",
              "Part B: \"My brother and I names two people, so the verb should be look, with no s.\""
            ],
            misconception: "A common mix-up is matching the verb to brother alone and forgetting the second person.",
            why: "Part A: \"(4) My brother and I looks for comics first.\" Part B: \"My brother and I names two people, so the verb should be look, with no s.\" Two people joined by and count as more than one. The other sentences agree: tables fill, prices are, and money buys."
          },
          {
            id: "SK-GC2c-C15",
            type: "hottext",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.c"],
            passages: [],
            prompt: "Select the TWO sentences that have a verb that does not agree with its subject.",
            options: [
              "Before the game starts, the players stretch.",
              "After the storm ends, the birds sings again.",
              "If my sisters wins the game, we get ice cream.",
              "Because the pond is frozen, the boys skate.",
              "When Grandpa calls, we run to the porch."
            ],
            answer: [1, 2],
            pick: 2,
            clue: "Each sentence has two parts with their own subjects and verbs. Check both pairs in every sentence.",
            hints: [
              "Each sentence has two parts with their own subjects and verbs. Check both pairs in every sentence.",
              "For each sentence, say the subject and verb of the first part, then the subject and verb of the second part. Mark any pair that does not match.",
              "Check the sentence about the pond first. Both of its pairs agree."
            ],
            how: [
              "Check two pairs in each sentence: the first part and the second part.",
              "\"After the storm ends, the birds sings again.\" The first pair is fine (storm ends), but birds is more than one and sings is for one.",
              "\"If my sisters wins the game, we get ice cream.\" Sisters is more than one, but wins is for one.",
              "The other three sentences have two matching pairs."
            ],
            misconception: "A common mix-up is checking only the first part of each sentence. A problem can be in either part.",
            why: "The answers are \"After the storm ends, the birds sings again.\" and \"If my sisters wins the game, we get ice cream.\" In the first, birds needs sing. In the second, sisters needs win. In the other three sentences, both pairs agree."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GC2c-S01",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-P5"],
      prompt: "Choose the verbs that agree with their subjects.",
      text: "Every night, Mom {0} the dishes, and my brothers {1} the floor.",
      slots: [
        {
          options: ["wash", "washes", "washing"],
          answer: 1
        },
        {
          options: ["sweep", "sweeps", "sweeping"],
          answer: 0
        }
      ],
      clue: "Find the subject of each part of the sentence. Ask: is it one person or more than one?",
      hints: [
        "Find the subject of each part of the sentence. Ask: is it one person or more than one?",
        "This sentence has two subjects. Check the first one, then the second one, and decide one blank at a time.",
        "For the first blank, Mom is one person, so look for the verb that goes with one. Then do the second blank yourself."
      ],
      how: [
        "The first subject is Mom, who is one person. The verb ends in s: washes.",
        "The second subject is brothers, which is more than one. The verb has no s: sweep.",
        "Check the sentence: \"Every night, Mom washes the dishes, and my brothers sweep the floor.\""
      ],
      misconception: "A common mix-up is using the same verb form for both subjects. Each subject needs its own check.",
      why: "The answers are washes and sweep. Mom is one person, so the verb ends in s. Brothers is more than one, so the verb has no s. Washing and sweeping are not complete verbs here."
    },
    {
      id: "SK-GC2c-S02",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-P6"],
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "The kite doesn't have a tail.", correct: true },
        { text: "The kites doesn't have tails." },
        { text: "That kite don't have a tail." },
        { text: "Those kites has no strings." }
      ],
      clue: "Find the subject of each sentence. Is it one or more than one? Then check that the verb matches.",
      hints: [
        "Find the subject of each sentence. Is it one or more than one? Then check that the verb matches.",
        "Check each sentence one at a time. Say the subject, say whether it is one or more than one, then say the verb that goes with it.",
        "In the sentence about the kites with doesn't, the subject is more than one. Check the other three."
      ],
      how: [
        "For each sentence, find the subject and decide whether it is one or more than one.",
        "\"The kite doesn't have a tail.\" has one kite, so doesn't is right.",
        "\"The kites doesn't have tails.\" needs don't, \"That kite don't have a tail.\" needs doesn't, and \"Those kites has no strings.\" needs have."
      ],
      misconception: "A common mix-up is leaving the verb alone when the subject changes from one to more than one.",
      why: "The answer is \"The kite doesn't have a tail.\" One kite takes doesn't. Kites needs don't, that kite needs doesn't, and those kites needs have."
    },
    {
      id: "SK-GC2c-S03",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-P7"],
      prompt: "Choose the verbs that agree with their subjects.",
      text: "After the guests {0} the house, their cat {1} under the couch.",
      slots: [
        {
          options: ["leave", "leaves", "leaving"],
          answer: 0
        },
        {
          options: ["hide", "hides", "hiding"],
          answer: 1
        }
      ],
      clue: "This sentence has two parts, and each part has its own subject and verb. Check each pair.",
      hints: [
        "This sentence has two parts, and each part has its own subject and verb. Check each pair.",
        "Find the subject in the first part, then the subject in the second part. Ask one or more than one for each.",
        "For the second blank, the subject is cat. Decide if cat is one or more than one, then do the first blank."
      ],
      how: [
        "First part: the subject is the guests, which is more than one, so leave has no s.",
        "Second part: the subject is cat, which is one, so hides ends in s.",
        "Each part needs its own check, even though the word After joins them."
      ],
      misconception: "A common mix-up is using the same verb form in both parts. The two subjects are different.",
      why: "The answers are leave and hides. In the first part, the subject is guests, which is more than one, so leave has no s. In the second part, the subject is cat, which is one, so hides ends in s. After joins the two parts, but each pair must agree."
    },
    {
      id: "SK-GC2c-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: ["p4"],
      like: ["SK-GC2c-C04"],
      prompt: "Which revision corrects the verb in sentence 4 of Isaiah's draft?",
      choices: [
        { text: "The carrots and the potatoes are soft now.", correct: true },
        { text: "The carrots and the potatoes was soft now." },
        { text: "The carrots and the potato is soft now." },
        { text: "The carrots and the potatoes has soft now." }
      ],
      clue: "Find the subject of the sentence, count how many things it names, and make the verb match.",
      hints: [
        "Find the subject of the sentence, count how many things it names, and make the verb match.",
        "Read sentence 4 and ask what is soft. How many things does the subject name?",
        "Changing a verb to the past tense does not change how many things the subject names. Check the other choices."
      ],
      how: [
        "The subject is the carrots and the potatoes. It names two things joined by and.",
        "Two things joined by and count as more than one, so the verb must go with more than one.",
        "The verb that goes with more than one is are: \"The carrots and the potatoes are soft now.\""
      ],
      misconception: "A common mix-up is matching the verb to just one of the two nouns.",
      why: "The answer is \"The carrots and the potatoes are soft now.\" Two things joined by and count as more than one, so the verb is are. Was goes with one thing. Changing potatoes to potato still leaves two things. Has does not fit."
    },
    {
      id: "SK-GC2c-S05",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-C05"],
      prompt: "Pick the TWO sentences with a verb that matches its subject.",
      pick: 2,
      choices: [
        { text: "The basket of pears stays by the door.", correct: true },
        { text: "The flags along the road wave in the wind.", correct: true },
        { text: "The box of crayons are in my backpack." },
        { text: "The ducks near the barn eats corn." },
        { text: "The clouds above the hills was gray." }
      ],
      clue: "Find the real subject in each sentence. Words between the subject and the verb do not change it.",
      hints: [
        "Find the real subject in each sentence. Words between the subject and the verb do not change it.",
        "In each choice, cover the words between the subject and the verb. Read the subject and the verb together, then pick two.",
        "In the sentence about the crayons, the subject is box. Check whether the verb fits one box."
      ],
      how: [
        "For each sentence, find the real subject and skip the words that only tell where.",
        "\"The basket of pears stays by the door.\" has the subject basket, which is one, so stays is correct.",
        "\"The flags along the road wave in the wind.\" has the subject flags, which is more than one, so wave is correct.",
        "The other three match a nearby word: crayons (not box), barn (not ducks) and hills (not clouds)."
      ],
      misconception: "A common mix-up is matching the verb to the word right before it.",
      why: "The answers are \"The basket of pears stays by the door.\" and \"The flags along the road wave in the wind.\" Basket is one, so stays has an s. Flags is more than one, so wave has none. In the other three, the verb matches a nearby word instead of the real subject."
    },
    {
      id: "SK-GC2c-S06",
      type: "hottext",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: ["p5"],
      like: ["SK-GC2c-C06"],
      prompt: "Select the sentence in Eli's draft whose verb does not match its subject.",
      targets: ["p5:2:1", "p5:2:2", "p5:2:3", "p5:3:1", "p5:3:3"],
      answer: ["p5:2:3"],
      pick: 1,
      clue: "Find the subject in each sentence. Ask: one or more than one? Then check the verb.",
      hints: [
        "Find the subject in each sentence. Ask: one or more than one? Then check the verb.",
        "Look at the second paragraph. Check each sentence there, skipping any words between the subject and the verb.",
        "Sentence 4 has two names joined by and, and its verb goes with more than one. Check the other two sentences in that paragraph."
      ],
      how: [
        "Find the subject of each sentence and decide whether it is one or more than one.",
        "In sentence 5, the subject is sticks. In my bag only tells where the sticks are.",
        "Sticks is more than one, but the verb is goes with one. It should say are."
      ],
      misconception: "A common mix-up is matching the verb to the word beside it. Here bag is one, but the subject is sticks.",
      why: "The answer is sentence 5, \"The sticks in my bag is made of wood.\" The subject is sticks, which is more than one, so the verb should be are. \"In my bag\" only tells where the sticks are."
    },
    {
      id: "SK-GC2c-S07",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.c"],
      passages: ["p5"],
      like: ["SK-GC2c-C07"],
      prompt: "Why is the verb rings correct in sentence 3 of Eli's draft?",
      choices: [
        {
          text: "The subject is cymbal, which is one thing, so the verb ends in s.",
          correct: true
        },
        { text: "The word next to the verb is drums, so the verb must match drums." },
        { text: "A sentence about a sound always takes a verb that ends in s." },
        { text: "Cymbal and drums are two subjects joined together, so the verb is plural." }
      ],
      clue: "To explain a verb, find the word the sentence is about and say whether it is one or more than one.",
      hints: [
        "To explain a verb, find the word the sentence is about and say whether it is one or more than one.",
        "Read sentence 3. Find the word the sentence is about, then find the words that only tell where.",
        "The word closest to the verb is not always the subject. Check the other choices against the words the sentence is really about."
      ],
      how: [
        "Ask what sentence 3 is about. It is about the cymbal.",
        "\"Beside the drums\" only tells where the cymbal is. It is not part of the subject.",
        "Cymbal is one thing, so the verb takes an s: \"The subject is cymbal, which is one thing, so the verb ends in s.\""
      ],
      misconception: "A common mix-up is matching the verb to the closest noun. Skip the words that only tell where.",
      why: "The answer is \"The subject is cymbal, which is one thing, so the verb ends in s.\" The words beside the drums tell where the cymbal is. Drums is not the subject, and the sentence has no word like and joining two subjects."
    },
    {
      id: "SK-GC2c-S08",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-C08"],
      prompt: "Pick the TWO sentences with the right verb.",
      pick: 2,
      choices: [
        { text: "Our teacher does not allow gum in class.", correct: true },
        { text: "Ben and his sister were at the library.", correct: true },
        { text: "Grandma and Grandpa does the gardening." },
        { text: "The pancakes was hot and fluffy." },
        { text: "You was the first one there." }
      ],
      clue: "Decide for each sentence: one or more than one? Then check the verb. You takes the verb for more than one.",
      hints: [
        "Decide for each sentence: one or more than one? Then check the verb. You takes the verb for more than one.",
        "Check the sentences with two names joined by and, and the sentence with you, one at a time.",
        "In the sentence about the pancakes, the subject names more than one. Check its verb."
      ],
      how: [
        "For each sentence, decide whether the subject is one or more than one.",
        "\"Our teacher does not allow gum in class.\" has one teacher, so does is right.",
        "\"Ben and his sister were at the library.\" has two people joined by and, so were is right.",
        "The others use a verb for one with a subject that is more than one or use was with you."
      ],
      misconception: "A common mix-up is using was with you. You takes were, like more than one.",
      why: "The answers are \"Our teacher does not allow gum in class.\" and \"Ben and his sister were at the library.\" One teacher takes does, and two people joined by and take were. \"Grandma and Grandpa does the gardening.\" and \"The pancakes was hot and fluffy.\" use a verb for one with more than one. \"You was the first one there.\" should be you were."
    },
    {
      id: "SK-GC2c-S09",
      type: "match",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-C09"],
      prompt: "Match each subject to the verb that goes with it: is or are.",
      cols: ["is", "are"],
      rows: [
        { text: "The puppies", answer: 1 },
        { text: "My aunt", answer: 0 },
        { text: "Tomás and Lila", answer: 1 },
        { text: "The shoes by the door", answer: 1 },
        { text: "The pie with berries", answer: 0 }
      ],
      clue: "Ask one or more than one for each subject. Is goes with one. Are goes with more than one.",
      hints: [
        "Ask one or more than one for each subject. Is goes with one. Are goes with more than one.",
        "For a subject with extra words after it, find the main word first. Two names joined by and count as more than one.",
        "The pie is one thing, even though berries is more than one. Decide the other four rows."
      ],
      how: [
        "\"The puppies\" is more than one, so it goes with are.",
        "\"My aunt\" is one person, so it goes with is.",
        "\"Tomás and Lila\" is two people joined by and, so it goes with are.",
        "In \"The shoes by the door,\" the main word is shoes, so are. In \"The pie with berries,\" the main word is pie, so is."
      ],
      misconception: "A common mix-up is matching the verb to the last word, such as door or berries.",
      why: "The puppies, Tomás and Lila, and The shoes by the door are each more than one, so they go with are. My aunt and The pie with berries are each one, so they go with is. The words by the door and with berries only tell more about the subject."
    },
    {
      id: "SK-GC2c-S10",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: ["p5"],
      like: ["SK-GC2c-C10"],
      prompt: "Eli wants to add one sentence to the end of paragraph 3. Which sentence has verbs that agree in both parts?",
      choices: [
        { text: "When Tia plays the drum, her friends clap.", correct: true },
        { text: "When Tia play the drum, her friends clap." },
        { text: "When Tia plays the drum, her friends claps." },
        { text: "When Tia play the drum, her friends claps." }
      ],
      clue: "Each part of the sentence has its own subject and verb. Check both pairs.",
      hints: [
        "Each part of the sentence has its own subject and verb. Check both pairs.",
        "Find the subject in the first part and the subject in the second part. Ask one or more than one for each.",
        "Tia is one person. Look at the first part of each choice for a verb that goes with one person."
      ],
      how: [
        "Look at the first part: the subject is Tia, who is one person, so the verb needs an s: plays.",
        "Look at the second part: the subject is her friends, which is more than one, so the verb has no s: clap.",
        "The answer is \"When Tia plays the drum, her friends clap.\" Each of the others gets at least one pair wrong."
      ],
      misconception: "A common mix-up is fixing one part of the sentence and forgetting to check the other.",
      why: "The answer is \"When Tia plays the drum, her friends clap.\" Tia is one person, so plays has an s. Her friends is more than one, so clap has no s. Each other choice gets one or both pairs wrong."
    },
    {
      id: "SK-GC2c-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-C11"],
      prompt: "Eva and Sam read the sentence in the box. Who is right?",
      stem: [
        "The cookies in the tin ____ gone.",
        "Eva says the sentence needs are, because it is about the cookies.",
        "Sam says the sentence needs is, because tin is next to the blank."
      ],
      choices: [
        {
          text: "Eva, because cookies is the subject, and cookies is more than one.",
          correct: true
        },
        { text: "Sam, because the word next to the verb decides which verb to use." },
        { text: "Sam, because tin is the subject, and tin is one thing." },
        { text: "Neither, because the sentence needs was." }
      ],
      clue: "Find the subject by asking who or what the sentence is about, not by looking at the word beside the blank.",
      hints: [
        "Find the subject by asking who or what the sentence is about, not by looking at the word beside the blank.",
        "Ask what is gone. Is that one thing or more than one?",
        "Look at the reason each choice gives. Which reason uses the word that the sentence is about?"
      ],
      how: [
        "Ask what is gone. The cookies are gone, so cookies is the subject.",
        "\"In the tin\" only tells where the cookies were. Tin is not the subject.",
        "Cookies is more than one, so the verb is are. The answer is \"Eva, because cookies is the subject, and cookies is more than one.\""
      ],
      misconception: "A common mix-up is letting the word next to the verb decide the verb.",
      why: "The answer is \"Eva, because cookies is the subject, and cookies is more than one.\" The sentence is about the cookies, so the verb is are. The word next to the verb, tin, only tells where the cookies were. Was goes with one thing."
    },
    {
      id: "SK-GC2c-S12",
      type: "ms",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-C12"],
      prompt: "A student wrote this paragraph about a new pool. Choose the TWO changes that fix verbs that do not agree.",
      stem: [
        "(1) The new pool by the school has a slide and a diving board.",
        "(2) Dev and his cousin swims there every day.",
        "(3) They race from one end to the other.",
        "(4) The slide do not have a rail."
      ],
      pick: 2,
      choices: [
        { text: "Change sentence 2 to: Dev and his cousin swim there every day.", correct: true },
        { text: "Change sentence 4 to: The slide does not have a rail.", correct: true },
        {
          text: "Change sentence 1 to: The new pool by the school have a slide and a diving board."
        },
        { text: "Change sentence 3 to: They races from one end to the other." },
        { text: "Change sentence 2 to: Dev and his cousin is swimming there every day." }
      ],
      clue: "Find the subject of each sentence. Ask one or more than one, then check the verb.",
      hints: [
        "Find the subject of each sentence. Ask one or more than one, then check the verb.",
        "Look at the sentence with two names joined by and, and at the sentence with the verb do. Pick one fix for each.",
        "Sentence 1 already agrees. Its subject is one thing, even though school is near the verb. Check the other choices."
      ],
      how: [
        "Sentence 2 has two people joined by and, so the verb should have no s: \"Change sentence 2 to: Dev and his cousin swim there every day.\"",
        "Sentence 4 is about one slide, so it needs does: \"Change sentence 4 to: The slide does not have a rail.\"",
        "Sentences 1 and 3 already agree, and is swimming goes with one person."
      ],
      misconception: "A common mix-up is changing a sentence that is already right because a nearby word looks different.",
      why: "The answers are \"Change sentence 2 to: Dev and his cousin swim there every day.\" and \"Change sentence 4 to: The slide does not have a rail.\" Two people joined by and take a verb with no s, and one slide takes does. Sentence 1 agrees: the subject is pool. Sentence 3 agrees: they takes race."
    },
    {
      id: "SK-GC2c-S13",
      type: "dropdown",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-C13"],
      prompt: "Choose the verbs that agree with their subjects.",
      text: "The stones in the creek {0} smooth and round, and the minnow near the rocks {1} away from the shadow.",
      slots: [
        {
          options: ["looks", "look", "looking"],
          answer: 1
        },
        {
          options: ["dart", "darts", "darting"],
          answer: 1
        }
      ],
      clue: "This sentence has two parts. Find the subject in each part, skipping the words between the subject and the verb.",
      hints: [
        "This sentence has two parts. Find the subject in each part, skipping the words between the subject and the verb.",
        "In the first part, the subject comes before in the creek. In the second part, find the subject before near the rocks. Ask one or more than one for each.",
        "Creek is one thing, but it is not the subject of the first part. Do the first blank, and then do the second blank."
      ],
      how: [
        "First part: \"The stones in the creek\" is about the stones, which is more than one, so the verb has no s: look.",
        "Second part: \"the minnow near the rocks\" is about one minnow, so the verb ends in s: darts.",
        "Each part has its own subject and verb, and each pair must agree."
      ],
      misconception: "A common mix-up is matching each verb to the noun just before it.",
      why: "The answers are look and darts. In the first part, the subject is stones, which is more than one, so look has no s. In the second part, the subject is minnow, which is one, so darts ends in s. Creek and rocks only tell where."
    },
    {
      id: "SK-GC2c-S14",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.c"],
      passages: ["p6"],
      like: ["SK-GC2c-C14"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Which sentence in Nora's draft has a verb that does not agree with its subject?",
        choices: [
          { text: "(4) My cousin and I washes the dogs first.", correct: true },
          { text: "(2) Rows of buckets line the grass." },
          { text: "(3) The toys in the basket are free for every pet." },
          { text: "(7) The money from the wash buys food for the shelter." }
        ]
      },
      partB: {
        prompt: "Which reason explains the error?",
        choices: [
          {
            text: "My cousin and I names two people, so the verb should be wash, with no s.",
            correct: true
          },
          { text: "The sentence is about one cousin, so the verb should be washes." },
          { text: "The word I always needs a verb that ends in s." },
          { text: "Dogs is more than one, so the verb must end in s." }
        ]
      },
      clue: "Find the subject of each sentence. Ask one or more than one, then check whether the verb matches.",
      hints: [
        "Find the subject of each sentence. Ask one or more than one, then check whether the verb matches.",
        "For Part A, start with sentences that have extra words before the verb or two subjects. For Part B, ask how many people the subject names.",
        "In Part A, the subject of sentence 3 is toys, which is more than one. Check the other three."
      ],
      how: [
        "Find the subject and verb in each choice for Part A. Sentences 2, 3 and 7 each agree.",
        "Sentence 4 has the subject my cousin and I, which names two people, but the verb washes is for one.",
        "Part A: \"(4) My cousin and I washes the dogs first.\"",
        "Part B: \"My cousin and I names two people, so the verb should be wash, with no s.\""
      ],
      misconception: "A common mix-up is matching the verb to cousin alone and forgetting the second person.",
      why: "Part A: \"(4) My cousin and I washes the dogs first.\" Part B: \"My cousin and I names two people, so the verb should be wash, with no s.\" Two people joined by and count as more than one. The other sentences agree: rows line, toys are, and money buys."
    },
    {
      id: "SK-GC2c-S15",
      type: "hottext",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.c"],
      passages: [],
      like: ["SK-GC2c-C15"],
      prompt: "Pick the TWO sentences with a verb that does not match its subject.",
      options: [
        "After the show ends, the actors bow.",
        "When the kettle whistles, the tea is ready.",
        "If the cats wakes up, they ask for food.",
        "Because the road is wet, the cars drives slowly.",
        "Before the sun rises, the farmers start work."
      ],
      answer: [2, 3],
      pick: 2,
      clue: "Each sentence has two parts with their own subjects and verbs. Check both pairs in every sentence.",
      hints: [
        "Each sentence has two parts with their own subjects and verbs. Check both pairs in every sentence.",
        "For each sentence, say the subject and verb of the first part, then the subject and verb of the second part. Mark any pair that does not match.",
        "Check the sentence about the actors first. Both of its pairs agree."
      ],
      how: [
        "Check two pairs in each sentence: the first part and the second part.",
        "\"If the cats wakes up, they ask for food.\" Cats is more than one, but wakes is for one.",
        "\"Because the road is wet, the cars drives slowly.\" The first pair is fine (road is), but cars is more than one and drives is for one.",
        "The other three sentences have two matching pairs."
      ],
      misconception: "A common mix-up is checking only the first part of each sentence. A problem can be in either part.",
      why: "The answers are \"If the cats wakes up, they ask for food.\" and \"Because the road is wet, the cars drives slowly.\" In the first, cats needs wake. In the second, cars needs drive. In the other three sentences, both pairs agree."
    }
  ],
  addons: {
    "SK-GC2c-P5": {
      hints: [
        "Find the subject of each part of the sentence. Ask: is it one person or more than one?",
        "This sentence has two subjects. Check the first one, then the second one, and decide one blank at a time.",
        "For the first blank, Dad is one person, so look for the verb that goes with one. Then do the second blank yourself."
      ],
      how: [
        "The first subject is Dad, who is one person. The verb ends in s: makes.",
        "The second subject is sisters, which is more than one. The verb has no s: set.",
        "Check the sentence: \"Every morning, Dad makes breakfast, and my sisters set the table.\""
      ],
      misconception: "A common mix-up is using the same verb form for both subjects. Each subject needs its own check."
    },
    "SK-GC2c-P6": {
      hints: [
        "Find the subject of each sentence. Is it one or more than one? Then check that the verb matches.",
        "Check each sentence one at a time. Say the subject, say whether it is one or more than one, then say the verb that goes with it.",
        "In the sentence about the bikes with doesn't, the subject is more than one. Check the other three."
      ],
      how: [
        "For each sentence, find the subject and decide whether it is one or more than one.",
        "\"The bike doesn't have a bell.\" has one bike, so doesn't is right.",
        "\"The bikes doesn't have bells.\" needs don't, \"That bike don't have a bell.\" needs doesn't, and \"These bikes has no bells.\" needs have."
      ],
      misconception: "A common mix-up is leaving the verb alone when the subject changes from one to more than one."
    },
    "SK-GC2c-P7": {
      hints: [
        "This sentence has two parts, and each part has its own subject and verb. Check each pair.",
        "Find the subject in the first part, then the subject in the second part. Ask one or more than one for each.",
        "For the second blank, the subject is dog. Decide if dog is one or more than one, then do the first blank."
      ],
      how: [
        "First part: the subject is the twins, which is more than one, so get has no s.",
        "Second part: the subject is dog, which is one, so runs ends in s.",
        "Each part needs its own check, even though the word When joins them."
      ],
      misconception: "A common mix-up is using the same verb form in both parts. The two subjects are different."
    },
    "SK-GC2c-P1": {
      hints: [
        "The verb must match the real subject. Find who is hungry, then ask: one or more than one?",
        "Skip the words between the subject and the verb. Which word do you say the verb about?",
        "The pond is one thing, but the ducks are the ones that are hungry. Ask whether the real subject is one or more than one."
      ],
      how: [
        "Ask who is hungry. It is the ducks, not the pond.",
        "\"On the pond\" only tells where the ducks are.",
        "Ducks is more than one, so the verb is are."
      ],
      misconception: "A common mix-up is matching the verb to the word beside it. Here that word is pond."
    },
    "SK-GC2c-P2": {
      hints: [
        "Find the subject of each sentence. Is it one or more than one? Then check the verb.",
        "Look at each subject and count the people or things before the verb.",
        "Our neighbor is one person. Ask whether have is the verb that goes with one person."
      ],
      how: [
        "\"My grandpa and I\" is two people joined by and, so the verb has no s: fish.",
        "\"Our neighbor\" is one person, so it needs has, not have.",
        "\"The boats on the lake\" needs rock, not rocks. The subject is boats."
      ],
      misconception: "A common mix-up is thinking two people joined by and need a verb with s."
    },
    "SK-GC2c-P3": {
      hints: [
        "One gets runs. More than one gets run.",
        "Two names joined by and count as more than one. Start with the subjects you are surest about.",
        "The horse is one animal. Decide the other four."
      ],
      how: [
        "The horse and My brother are one, so they go with runs.",
        "The horses and They are more than one, so they go with run.",
        "Mia and Leo are two people joined by and, so they go with run."
      ],
      misconception: "A common mix-up is putting a name pair with runs. Two names joined by and are more than one."
    },
    "SK-GC2c-P4": {
      hints: [
        "Find the real subject in each sentence. Words between the subject and the verb do not change it.",
        "Check the sentences that have a short group of words between the subject and the verb.",
        "Look at the word right before the verb in each of those sentences. Ask whether it is the subject."
      ],
      how: [
        "Find the subject of each sentence. In the basket sentence, the subject is basket.",
        "\"Of oranges\" only tells what is in the basket.",
        "Basket is one thing, so the verb should be sits, not sit."
      ],
      misconception: "A common mix-up is matching the verb to oranges, the word right before it."
    }
  },
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
    {
      id: "p1",
      title: "Camping in the Backyard",
      byline: "Nia's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Saturday, my dad and I camped in our backyard.",
          "(2) We set up a tent near the old oak tree."
        ],
        [
          "(3) The tent was big.",
          "(4) We cooked hot dogs over a small fire pit until the skins turned black.",
          "(5) The hot dogs tasted good."
        ],
        [
          "(6) After dinner, we lay on a blanket and looked at the stars.",
          "(7) Dad pointed to the Big Dipper.",
          "(8) He told me a story about a fox, and I laughed."
        ],
        [
          "(9) Soon I fell asleep.",
          "(10) I hope we camp again next week.",
          "(11) Camping with my dad is the best thing I do."
        ]
      ]
    },
    {
      id: "p2",
      title: "My New Bike",
      byline: "Marcus's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On my birthday, Grandpa gave me a bike.",
          "(2) It waited in the garage with a bow on the seat."
        ],
        [
          "(3) It was a nice bike, and I had never ridden one without help.",
          "(4) I rode down the street.",
          "(5) The wind blew against my face.",
          "(6) A dog barked at my wheels, and I pedaled away."
        ],
        [
          "(7) At the corner, I stopped and rang the bell.",
          "(8) The bell made a sound.",
          "(9) My neighbor waved to me.",
          "(10) Tomorrow I will ride to the park."
        ],
        [
          "(11) I love my new bike and want to ride it every day.",
          "(12) Grandpa says I can ride with him on Sunday.",
          "(13) I cannot wait."
        ]
      ]
    },
    {
      id: "p3",
      title: "Painting the Mural",
      byline: "Keisha's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class painted a mural on the wall by the gym.",
          "(2) Mr. Hall gave each of us a brush and a cup of paint."
        ],
        [
          "(3) I mixed white into blue until the color was very light.",
          "(4) The sky looked good."
        ],
        [
          "(5) Tyrell painted the grass with a tiny brush, and he did not want to smudge one blade.",
          "(6) He worked, one blade at a time.",
          "(7) Ruby added a river with wide, long strokes."
        ],
        [
          "(8) At the end of the day, the mural was done.",
          "(9) Everyone stepped back and cheered.",
          "(10) Our mural makes the whole wall look happy.",
          "(11) I want to paint another one."
        ]
      ]
    },
    {
      id: "p4",
      title: "A Trip to the Farm",
      byline: "Darius's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Friday, my class visited a farm outside town.",
          "(2) We rode there on a yellow bus."
        ],
        [
          "(3) The barn was old.",
          "(4) The farmer let us meet a calf, and its tongue felt like sandpaper.",
          "(5) The lick felt nice."
        ],
        [
          "(6) Then we walked to the apple trees.",
          "(7) We picked apples and put them in baskets.",
          "(8) Each of us took one apple home."
        ],
        [
          "(9) On the ride back, Mia fell asleep against the window.",
          "(10) I hope we visit again in the fall.",
          "(11) The farm trip was the best day of the school year.",
          "(12) Dad asked what I learned at dinner."
        ]
      ]
    },
    {
      id: "p5",
      title: "Our Class Fish Tank",
      byline: "Imani's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class has a fish tank near the window.",
          "(2) Mrs. Lee lets us feed the fish each morning."
        ],
        [
          "(3) The tank has a green plant and a castle.",
          "(4) A tiny orange fish named Pepper hides in the castle when we come near.",
          "(5) Pepper stays still until the room gets quiet.",
          "(6) Then Pepper comes out."
        ],
        [
          "(7) The tank has a loud filter.",
          "(8) The water makes a sound.",
          "(9) We learn about the fish every week.",
          "(10) Next month, we will add two more fish."
        ],
        [
          "(11) I like watching them swim.",
          "(12) Our fish tank is the best part of our room."
        ]
      ]
    },
    {
      id: "p6",
      title: "The Town Parade",
      byline: "Kofi's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our town held a parade on Main Street.",
          "(2) My aunt gave me a flag to wave."
        ],
        [
          "(3) I stood close to the curb to see the band.",
          "(4) The band looked good."
        ],
        [
          "(5) The drummer wore a tall hat, and he did not want to miss a beat.",
          "(6) He played, one beat at a time.",
          "(7) Behind him, a dancer spun a long ribbon."
        ],
        [
          "(8) At the end of the parade, the street was quiet again.",
          "(9) Everyone clapped and cheered.",
          "(10) Our parade makes the whole town feel proud.",
          "(11) I want to march next year."
        ]
      ]
    }
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
        { text: "We hurried to the sandy beach and splashed happily in the cool waves.", correct: true },
        { text: "We went to the beach and had a really good time in the water." },
        { text: "We went to the beach, and the day was nice, and the beach was fun." },
        { text: "We went to the beach in a car and then went to the beach again." }
      ],
      clue: "Elaborate means to tell more. Which revision adds new details that help you picture the trip?",
      why: "The answer is \"We hurried to the sandy beach and splashed happily in the cool waves.\" It adds details that tell more: hurried tells how they got there, sandy tells what kind of beach, happily tells how they splashed, and cool tells what the waves were like. The others use plain words like good, nice and fun, or repeat the beach without adding anything." },
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
          { ref: "SK-GC2d-P1" },
          { ref: "SK-GC2d-P3" },
          {
            id: "SK-GC2d-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: ["p1"],
            prompt: "Nia wants to elaborate on sentence 3 by adding details. Which revision does that best?",
            choices: [
              { text: "The green tent was wide enough for two sleeping bags.", correct: true },
              { text: "The big tent was very large and also quite big." },
              { text: "The tent was nice and fun to be in." },
              { text: "The tent was good because it was a good one." }
            ],
            clue: "To elaborate is to add details that tell more. Look for words that help the reader picture the tent.",
            hints: [
              "To elaborate is to add details that tell more. Look for words that help the reader picture the tent.",
              "Read each revision and ask what new thing you learn about the tent.",
              "One choice only says big again in other words. Check the other three for new details."
            ],
            how: [
              "Ask what each revision tells the reader about the tent that sentence 3 did not.",
              "\"The green tent was wide enough for two sleeping bags.\" adds its color and its size in a way you can picture.",
              "The others repeat big or use plain words like nice, fun and good that do not tell anything exact."
            ],
            misconception: "A common mix-up is thinking more describing words always means more detail. Plain words add nothing new.",
            why: "The answer is \"The green tent was wide enough for two sleeping bags.\" Green and wide add new details you can picture. The others repeat big or use plain words like nice, fun and good."
          },
          {
            id: "SK-GC2d-C05",
            type: "ms",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: [],
            prompt: "Choose the TWO sentences that have an adverb telling how something happens.",
            pick: 2,
            choices: [
              { text: "Aunt Bea hummed softly while she cooked.", correct: true },
              { text: "The skater turned sharply at the corner.", correct: true },
              { text: "The tall skater wore a green helmet." },
              { text: "My cousin lives in a brick house." },
              { text: "Mom packed three sandwiches." }
            ],
            clue: "An adverb tells how, when or where about a verb. Find the verb in each sentence and ask how it happens.",
            hints: [
              "An adverb tells how, when or where about a verb. Find the verb in each sentence and ask how it happens.",
              "For each sentence, find the action word. Is there a word that tells how that action happens?",
              "The sentence about the sandwiches has a number word that tells how many. Does it tell how anything happens?"
            ],
            how: [
              "Find the action word in each sentence and look for a word that tells how it happens.",
              "\"Aunt Bea hummed softly while she cooked.\" Softly tells how she hummed.",
              "\"The skater turned sharply at the corner.\" Sharply tells how the skater turned.",
              "The other three have words that describe nouns (tall, green, brick, three), which are adjectives."
            ],
            misconception: "A common mix-up is picking any describing word. Adverbs describe actions, not things.",
            why: "The answers are \"Aunt Bea hummed softly while she cooked.\" and \"The skater turned sharply at the corner.\" Softly tells how she hummed, and sharply tells how the skater turned. In the other sentences, the describing words tell about nouns, so they are adjectives."
          },
          {
            id: "SK-GC2d-C06",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: ["p1"],
            prompt: "Choose the word that best replaces good in sentence 5 of Nia's draft.",
            text: "The hot dogs tasted {0}.",
            slots: [
              {
                options: ["icy", "smoky", "sugary"],
                answer: 1
              }
            ],
            clue: "A plain word like good can be swapped for an exact one. Look back at how the hot dogs were cooked.",
            hints: [
              "A plain word like good can be swapped for an exact one. Look back at how the hot dogs were cooked.",
              "Read sentence 4. What would food taste like after its skins turned black over a fire?",
              "Fire pits do not make food cold. Check the other two words against sentence 4."
            ],
            how: [
              "Sentence 4 says the hot dogs cooked over a fire pit until the skins turned black.",
              "Food cooked that way tastes like fire and smoke, so smoky fits.",
              "Icy does not fit anything cooked over a fire, and sugary has no clue in the draft."
            ],
            misconception: "A common mix-up is choosing a word that sounds fun without checking it against the draft.",
            why: "The answer is smoky. The hot dogs cooked over a fire until the skins turned black, so they would taste like smoke. Icy is the opposite of food cooked over a fire. Sugary has no clue in the draft."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GC2d-C07",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: ["p2"],
            prompt: "Marcus wants an adverb in sentence 4 that tells how he rode. Which revision fits what sentence 3 says?",
            choices: [
              { text: "I rode shakily down the street.", correct: true },
              { text: "I rode fearlessly down the street." },
              { text: "I rode lazily down the street." },
              { text: "I rode proudly down the street." }
            ],
            clue: "An adverb should fit what the draft says. Reread sentence 3 to see how Marcus had ridden before.",
            hints: [
              "An adverb should fit what the draft says. Reread sentence 3 to see how Marcus had ridden before.",
              "Marcus had never ridden a bike without help. How would a new rider move?",
              "Someone who is brand new would not ride without fear. Check the other choices against sentence 3."
            ],
            how: [
              "Sentence 3 says Marcus had never ridden a bike without help.",
              "A brand-new rider would wobble, so \"I rode shakily down the street.\" fits.",
              "Fearlessly and lazily do not match a new rider who is learning. Proudly could fit later, but nothing here says he was proud yet."
            ],
            misconception: "A common mix-up is choosing an adverb that sounds good without checking the story.",
            why: "The answer is \"I rode shakily down the street.\" Marcus had never ridden without help, so he would wobble. Fearlessly and lazily do not fit a new rider. Nothing in the draft says he felt proud yet."
          },
          {
            id: "SK-GC2d-C08",
            type: "ms",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: ["p2"],
            prompt: "Choose the TWO revisions of sentence 3 that use exact describing words in place of nice.",
            pick: 2,
            choices: [
              { text: "It was a shiny blue bike with thick tires.", correct: true },
              { text: "It was a bright orange bike with a silver bell.", correct: true },
              { text: "It was a fine bike with a good seat." },
              { text: "It was a bike that was nice to look at." },
              { text: "It was a great bike for me." }
            ],
            clue: "An exact word lets the reader see or feel the bike. A plain word could describe almost anything.",
            hints: [
              "An exact word lets the reader see or feel the bike. A plain word could describe almost anything.",
              "In each revision, circle the describing words. Which ones help you picture the bike?",
              "Fine, good and great could describe any bike. Check the other two choices for exact words."
            ],
            how: [
              "Look for describing words that help you picture the bike.",
              "\"It was a shiny blue bike with thick tires.\" Shiny, blue and thick are exact.",
              "\"It was a bright orange bike with a silver bell.\" Bright, orange and silver are exact.",
              "The other three use plain words like fine, good, nice and great."
            ],
            misconception: "A common mix-up is picking a revision just because it has a describing word. Plain words do not help.",
            why: "The answers are \"It was a shiny blue bike with thick tires.\" and \"It was a bright orange bike with a silver bell.\" They use exact words like shiny, blue, thick, bright, orange and silver. The other three use plain words like fine, good, nice and great."
          },
          {
            id: "SK-GC2d-C09",
            type: "match",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: [],
            prompt: "Match each short passage to the describing word that fits it best.",
            cols: ["crisp", "gloomy", "eagerly", "nervously"],
            rows: [
              { text: "The fresh apple went snap when I bit it. It was ____.", answer: 0 },
              { text: "Lena shook as she walked on stage. She spoke ____.", answer: 3 },
              { text: "The room was dark, and rain tapped the window. The mood was ____.", answer: 1 },
              { text: "Theo waved his hand high in the air. He answered ____.", answer: 2 }
            ],
            clue: "Read the first sentence of each pair. It is a clue that tells how the second sentence should end.",
            hints: [
              "Read the first sentence of each pair. It is a clue that tells how the second sentence should end.",
              "Decide whether each blank needs an adjective or an adverb, then think about what the clue shows.",
              "Shaking is a clue about how someone feels. Match that row, then do the others."
            ],
            how: [
              "An apple that goes snap is firm and fresh, so crisp fits.",
              "Someone who shakes on stage feels worried, so she spoke nervously.",
              "A dark room with rain tapping the window feels sad and dim, so gloomy fits.",
              "Waving a hand high shows someone wants to answer, so he answered eagerly."
            ],
            misconception: "A common mix-up is matching on sound instead of on the clue in the first sentence.",
            why: "Snap means the apple is crisp. Shaking shows Lena is nervous. A dark room with rain feels gloomy. A hand waved high shows Theo is eager. Each first sentence is a clue to the describing word."
          },
          {
            id: "SK-GC2d-C10",
            type: "hottext",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: [],
            prompt: "Select the sentence with an adverb that tells WHEN.",
            options: [
              "Our neighbor has a loud parrot.",
              "Dad stirred the pot slowly.",
              "We will leave soon.",
              "The tall boy sat down quietly.",
              "A cold glass of milk was waiting."
            ],
            answer: [2],
            pick: 1,
            clue: "An adverb that tells when answers the question: at what time? Look for a word like now, later or today.",
            hints: [
              "An adverb that tells when answers the question: at what time? Look for a word like now, later or today.",
              "Check each sentence for the action word. Then look for a word that tells at what time it happens.",
              "Slowly and quietly tell how, not when. Check the other three sentences."
            ],
            how: [
              "Look for a word that tells at what time something happens.",
              "In \"We will leave soon,\" soon tells when they will leave.",
              "Slowly and quietly tell how. Loud, tall and cold describe nouns."
            ],
            misconception: "A common mix-up is picking any adverb. Some adverbs tell how, not when.",
            why: "The answer is \"We will leave soon.\" Soon tells when they will leave. Slowly and quietly tell how, and loud, tall and cold describe nouns."
          },
          {
            id: "SK-GC2d-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.2.d"],
            passages: ["p2"],
            prompt: "Marcus wants to improve sentence 8 with exact describing words, but not too many. Which revision does that best?",
            choices: [
              { text: "The small silver bell made a clear ring.", correct: true },
              {
                text: "The very small, shiny, silver, round bell made a loud, clear, bright ring."
              },
              { text: "The bell made a nice sound." },
              { text: "The bell made a sound that was good." }
            ],
            clue: "Exact words help the reader. Too many describing words in a row can get in the way.",
            hints: [
              "Exact words help the reader. Too many describing words in a row can get in the way.",
              "Count the describing words in each revision. Which revision gives a few exact words without piling them up?",
              "One choice has far more describing words than the others. Decide if they help or crowd the sentence."
            ],
            how: [
              "Look for a revision with a few exact words that is easy to read.",
              "\"The small silver bell made a clear ring.\" has small, silver and clear, and each one helps.",
              "The long revision piles on describing words. Nice and good are plain words that tell nothing exact."
            ],
            misconception: "A common mix-up is thinking the revision with the most describing words is the best.",
            why: "The answer is \"The small silver bell made a clear ring.\" It uses a few exact words that each add a detail. The long revision piles on too many describing words. The others use plain words like nice and good."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          { ref: "SK-GC2d-P6" },
          {
            id: "SK-GC2d-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: ["p3"],
            prompt: "Keisha wants to tell how Tyrell worked in sentence 6. Which revision fits sentence 5?",
            choices: [
              { text: "He worked carefully, one blade at a time.", correct: true },
              { text: "He worked wildly, one blade at a time." },
              { text: "He worked sleepily, one blade at a time." },
              { text: "He worked noisily, one blade at a time." }
            ],
            clue: "The adverb should match what sentence 5 says Tyrell wanted. Reread it.",
            hints: [
              "The adverb should match what sentence 5 says Tyrell wanted. Reread it.",
              "Tyrell did not want to smudge one blade. How would a painter work if he wanted that?",
              "Someone who wants to avoid a smudge would not work wildly. Check the other two choices against sentence 5."
            ],
            how: [
              "Sentence 5 says Tyrell did not want to smudge one blade.",
              "A painter who wants no smudges works with care, so \"He worked carefully, one blade at a time.\" fits.",
              "Wildly, sleepily and noisily do not match someone trying not to smudge."
            ],
            misconception: "A common mix-up is picking an adverb that sounds lively without checking what the draft says.",
            why: "The answer is \"He worked carefully, one blade at a time.\" Tyrell did not want to smudge one blade, so he would work with care. Wildly, sleepily and noisily do not match."
          },
          {
            id: "SK-GC2d-C13",
            type: "dropdown",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.d"],
            passages: [],
            prompt: "Choose the describing words that best fit the sentence.",
            text: "The paint was so {0} that it dripped off the brush, so Ruby worked {1} to keep it off the floor.",
            slots: [
              {
                options: ["runny", "dusty", "frozen"],
                answer: 0
              },
              {
                options: ["lazily", "carefully", "angrily"],
                answer: 1
              }
            ],
            clue: "Each blank needs a word that fits the clue in the sentence. Decide one blank at a time.",
            hints: [
              "Each blank needs a word that fits the clue in the sentence. Decide one blank at a time.",
              "The first blank is an adjective that tells what the paint was like. The second blank is an adverb that tells how Ruby worked.",
              "Paint that drips off a brush is not frozen. Decide the first blank, then the second."
            ],
            how: [
              "First blank: paint that drips off a brush is thin and wet, so runny fits.",
              "Second blank: Ruby wants to keep paint off the floor, so she works carefully.",
              "Dusty and frozen do not drip. Lazily and angrily do not help keep a floor clean."
            ],
            misconception: "A common mix-up is choosing each word alone. Both words must fit the same sentence.",
            why: "The answers are runny and carefully. Paint that drips is runny, and someone who wants to keep it off the floor works carefully. Dusty and frozen do not drip, and lazily and angrily do not fit."
          },
          {
            id: "SK-GC2d-C14",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: ["3.L.GC.2.d"],
            passages: ["p3"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which revision of sentence 4 best elaborates on the sky?",
              choices: [
                { text: "The sky looked pale and calm, with a soft cloud.", correct: true },
                { text: "The sky looked dark and stormy, with a gray cloud." },
                { text: "The sky looked very good, with a really good cloud." },
                { text: "The sky looked nice and fine, with a nice cloud." }
              ]
            },
            partB: {
              prompt: "Why is that revision better?",
              choices: [
                { text: "The exact words fit the very light blue that Keisha mixed.", correct: true },
                { text: "It has more describing words than the other choices do." },
                { text: "It repeats a word so the reader will remember it." },
                { text: "It tells what happened next in the story." }
              ]
            },
            clue: "To elaborate, add details that fit the draft. Sentence 3 says what color the sky was.",
            hints: [
              "To elaborate, add details that fit the draft. Sentence 3 says what color the sky was.",
              "For Part A, check each revision against sentence 3. For Part B, ask what the exact words match.",
              "In Part A, a dark and stormy sky does not match a very light color. Check the other three choices."
            ],
            how: [
              "Sentence 3 says Keisha mixed white into blue until the color was very light.",
              "Part A: \"The sky looked pale and calm, with a soft cloud.\" Pale matches very light.",
              "Part B: \"The exact words fit the very light blue that Keisha mixed.\"",
              "The other revisions use plain words or details that do not match the draft."
            ],
            misconception: "A common mix-up is picking the revision with the most describing words instead of the best fit.",
            why: "Part A: \"The sky looked pale and calm, with a soft cloud.\" Part B: \"The exact words fit the very light blue that Keisha mixed.\" Pale matches a very light color. The dark sky does not fit, and the others use plain words like good and nice."
          },
          {
            id: "SK-GC2d-C15",
            type: "ms",
            points: 2,
            dok: 3,
            std: ["3.L.GC.2.d"],
            passages: [],
            prompt: "The plain sentence is \"The wagon rolled.\" Choose the TWO revisions that add exact details without piling on words.",
            pick: 2,
            choices: [
              { text: "The rusty wagon rolled noisily down the hill.", correct: true },
              { text: "The old wagon rolled slowly over the gravel.", correct: true },
              { text: "The wagon rolled in a nice way down the hill." },
              { text: "The very big, red, rusty, loud, heavy wagon rolled very loudly." },
              { text: "The wagon rolled fast, fast, fast down the hill." }
            ],
            clue: "Look for revisions with a few exact words that each add a new detail.",
            hints: [
              "Look for revisions with a few exact words that each add a new detail.",
              "Cross out any revision that uses a plain word or repeats a word. Then check what is left for words that crowd the sentence.",
              "One choice repeats the same word three times. Check whether the other two plain choices add anything."
            ],
            how: [
              "A good revision adds one or two exact details and stays easy to read.",
              "\"The rusty wagon rolled noisily down the hill.\" adds rusty and noisily.",
              "\"The old wagon rolled slowly over the gravel.\" adds old, slowly and where it rolled.",
              "The others use a plain word (nice), pile on describing words, or repeat fast three times."
            ],
            misconception: "A common mix-up is thinking a longer sentence or more repeats make a better revision.",
            why: "The answers are \"The rusty wagon rolled noisily down the hill.\" and \"The old wagon rolled slowly over the gravel.\" Each adds a few exact details. The others use the plain word nice, pile on too many describing words, or repeat fast."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GC2d-S01",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: [],
      like: ["SK-GC2d-P1"],
      prompt: "Choose the adjective that best fits the sentence.",
      text: "After sledding all afternoon, Ruth's mittens were {0}, so she hung them by the heater.",
      slots: [
        {
          options: ["soggy", "pretty", "stretchy"],
          answer: 0
        }
      ],
      clue: "An exact adjective tells what the mittens were really like. Look for the clue in what Ruth does next.",
      hints: [
        "An exact adjective tells what the mittens were really like. Look for the clue in what Ruth does next.",
        "Think about what happens to mittens in the snow. Why would she hang them by a heater?",
        "One choice is a plain word that could describe almost anything. Check the other two against the heater."
      ],
      how: [
        "The clue is that Ruth hangs the mittens by the heater.",
        "Mittens used all afternoon in the snow get wet, so soggy fits.",
        "Pretty is too plain, and stretchy does not explain the heater."
      ],
      misconception: "A common mix-up is picking a word that sounds nice without checking the clue.",
      why: "The answer is soggy. Mittens used in the snow get wet, so Ruth hangs them by the heater. Pretty does not tell anything exact, and stretchy does not explain the heater."
    },
    {
      id: "SK-GC2d-S02",
      type: "match",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: [],
      like: ["SK-GC2d-P3"],
      prompt: "Is the describing word an adjective or an adverb? Match each one.",
      cols: [
        "Adjective (describes a noun)",
        "Adverb (describes a verb)"
      ],
      rows: [
        { text: "softly, in \"The nurse spoke softly.\"", answer: 1 },
        { text: "rusty, in \"We found a rusty key.\"", answer: 0 },
        { text: "nearby, in \"The store is nearby.\"", answer: 1 },
        { text: "juicy, in \"The peach was juicy.\"", answer: 0 },
        { text: "late, in \"The train arrived late.\"", answer: 1 }
      ],
      clue: "Ask what the word describes. A word that describes a noun is an adjective. A word that tells how, when or where is an adverb.",
      hints: [
        "Ask what the word describes. A word that describes a noun is an adjective. A word that tells how, when or where is an adverb.",
        "For each word, find the noun or the action in the sentence. Decide which one the word describes.",
        "Juicy describes a peach, which is a thing. Decide that row, then do the other four."
      ],
      how: [
        "Rusty tells what kind of key, so it is an adjective.",
        "Juicy tells what the peach was like, so it is an adjective.",
        "Softly tells how she spoke, nearby tells where the store is, and late tells when the train arrived, so they are adverbs."
      ],
      misconception: "A common mix-up is thinking every word that tells about place or time is an adjective.",
      why: "Rusty tells what kind of key, and juicy tells what the peach was like, so they are adjectives. Softly tells how she spoke, nearby tells where, and late tells when, so they are adverbs."
    },
    {
      id: "SK-GC2d-S03",
      type: "hottext",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: [],
      like: ["SK-GC2d-P6"],
      prompt: "In one sentence, the describing word does NOT fit what happens. Select that sentence.",
      options: [
        "The sharp knife cut the bread cleanly.",
        "The thick fog made it easy to see far down the road.",
        "The ripe mango smelled sweet.",
        "The baby giggled happily at the puppet.",
        "The soft pillow felt cozy under my head."
      ],
      answer: [1],
      pick: 1,
      clue: "Read each sentence and check that the describing word matches the rest of the sentence.",
      hints: [
        "Read each sentence and check that the describing word matches the rest of the sentence.",
        "Picture each sentence. Does the describing word make sense with what happens?",
        "The mango sentence makes sense: ripe mangoes smell sweet. Check the other four."
      ],
      how: [
        "Picture each sentence and ask whether the describing word matches what happens.",
        "Thick fog would make it hard, not easy, to see far down the road.",
        "Sharp, ripe, happily and soft all match what happens in their sentences."
      ],
      misconception: "A common mix-up is choosing a sentence because it sounds unusual, even if the word fits.",
      why: "The answer is \"The thick fog made it easy to see far down the road.\" Thick fog makes it hard to see, so thick does not fit. A word like thin would match. In the other sentences, the describing word fits."
    },
    {
      id: "SK-GC2d-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: ["p4"],
      like: ["SK-GC2d-C04"],
      prompt: "Darius wants to elaborate on sentence 3 by adding details. Which revision does that best?",
      choices: [
        { text: "The red barn had a tall roof of rusty tin.", correct: true },
        { text: "The old barn was very ancient and also quite old." },
        { text: "The barn was nice and fun to look at." },
        { text: "The barn was good because it was a good one." }
      ],
      clue: "To elaborate is to add details that tell more. Look for words that help the reader picture the barn.",
      hints: [
        "To elaborate is to add details that tell more. Look for words that help the reader picture the barn.",
        "Read each revision and ask what new thing you learn about the barn.",
        "One choice only says old again in other words. Check the other three for new details."
      ],
      how: [
        "Ask what each revision tells the reader about the barn that sentence 3 did not.",
        "\"The red barn had a tall roof of rusty tin.\" adds its color and what the roof was like.",
        "The others repeat old or use plain words like nice, fun and good that do not tell anything exact."
      ],
      misconception: "A common mix-up is thinking more describing words always means more detail.",
      why: "The answer is \"The red barn had a tall roof of rusty tin.\" Red, tall and rusty add new details you can picture. The others repeat old or use plain words like nice, fun and good."
    },
    {
      id: "SK-GC2d-S05",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: [],
      like: ["SK-GC2d-C05"],
      prompt: "Pick the TWO sentences that have an adverb telling how something happens.",
      pick: 2,
      choices: [
        { text: "Uncle Ray laughed warmly at the joke.", correct: true },
        { text: "The diver slipped smoothly into the pool.", correct: true },
        { text: "The short diver wore a blue cap." },
        { text: "My friend lives in a tall building." },
        { text: "Dad bought four oranges." }
      ],
      clue: "An adverb tells how, when or where about a verb. Find the verb in each sentence and ask how it happens.",
      hints: [
        "An adverb tells how, when or where about a verb. Find the verb in each sentence and ask how it happens.",
        "For each sentence, find the action word. Is there a word that tells how that action happens?",
        "The sentence about the oranges has a number word that tells how many. Does it tell how anything happens?"
      ],
      how: [
        "Find the action word in each sentence and look for a word that tells how it happens.",
        "\"Uncle Ray laughed warmly at the joke.\" Warmly tells how he laughed.",
        "\"The diver slipped smoothly into the pool.\" Smoothly tells how the diver slipped.",
        "The other three have words that describe nouns (short, blue, tall, four), which are adjectives."
      ],
      misconception: "A common mix-up is picking any describing word. Adverbs describe actions, not things.",
      why: "The answers are \"Uncle Ray laughed warmly at the joke.\" and \"The diver slipped smoothly into the pool.\" Warmly tells how he laughed, and smoothly tells how the diver slipped. In the other sentences, the describing words describe nouns, so they are adjectives."
    },
    {
      id: "SK-GC2d-S06",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: ["p4"],
      like: ["SK-GC2d-C06"],
      prompt: "Choose the word that best replaces nice in sentence 5 of Darius's draft.",
      text: "The lick felt {0}.",
      slots: [
        {
          options: ["silky", "scratchy", "fluffy"],
          answer: 1
        }
      ],
      clue: "A plain word like nice can be swapped for an exact one. Look back at what sentence 4 compares the tongue to.",
      hints: [
        "A plain word like nice can be swapped for an exact one. Look back at what sentence 4 compares the tongue to.",
        "Read sentence 4. What does sandpaper feel like?",
        "Sandpaper is not smooth. Check the other two words against sentence 4."
      ],
      how: [
        "Sentence 4 says the calf's tongue felt like sandpaper.",
        "Sandpaper is rough, so a lick from it would feel scratchy.",
        "Silky and fluffy mean soft, which is the opposite of sandpaper."
      ],
      misconception: "A common mix-up is choosing a word that sounds pleasant without checking the comparison.",
      why: "The answer is scratchy. Sandpaper is rough, so a tongue that feels like it would feel scratchy. Silky and fluffy mean soft, which is the opposite."
    },
    {
      id: "SK-GC2d-S07",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: ["p5"],
      like: ["SK-GC2d-C07"],
      prompt: "Imani wants an adverb in sentence 6 that tells how Pepper comes out. Which revision fits sentence 5?",
      choices: [
        { text: "Then Pepper comes out cautiously.", correct: true },
        { text: "Then Pepper comes out boldly." },
        { text: "Then Pepper comes out wildly." },
        { text: "Then Pepper comes out noisily." }
      ],
      clue: "An adverb should fit what the draft says. Reread sentences 4 and 5 to see how Pepper acts.",
      hints: [
        "An adverb should fit what the draft says. Reread sentences 4 and 5 to see how Pepper acts.",
        "Pepper hides until the room gets quiet. How would a shy fish come out?",
        "A fish that hides would not rush out. Check the other choices against sentences 4 and 5."
      ],
      how: [
        "Sentences 4 and 5 say Pepper hides and stays still until the room is quiet.",
        "A shy fish would come out slowly and carefully, so \"Then Pepper comes out cautiously.\" fits.",
        "Boldly, wildly and noisily do not match a fish that hides."
      ],
      misconception: "A common mix-up is choosing an adverb that sounds exciting without checking the draft.",
      why: "The answer is \"Then Pepper comes out cautiously.\" Pepper hides until the room is quiet, so it comes out with care. Boldly, wildly and noisily do not match a fish that hides."
    },
    {
      id: "SK-GC2d-S08",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: ["p5"],
      like: ["SK-GC2d-C08"],
      prompt: "Choose the TWO revisions of sentence 8 that use exact describing words in place of a sound.",
      pick: 2,
      choices: [
        { text: "The water makes a soft bubbling hum.", correct: true },
        { text: "The water makes a steady, gentle splash.", correct: true },
        { text: "The water makes a fine sound." },
        { text: "The water makes a good noise." },
        { text: "The water makes a great sound." }
      ],
      clue: "An exact word lets the reader hear the water. A plain word could describe almost any sound.",
      hints: [
        "An exact word lets the reader hear the water. A plain word could describe almost any sound.",
        "In each revision, circle the describing words. Which ones help you hear the water?",
        "Fine, good and great could describe any sound. Check the other two choices for exact words."
      ],
      how: [
        "Look for describing words that help you hear the water.",
        "\"The water makes a soft bubbling hum.\" Soft and bubbling are exact.",
        "\"The water makes a steady, gentle splash.\" Steady and gentle are exact.",
        "The other three use plain words like fine, good and great."
      ],
      misconception: "A common mix-up is picking any revision with a describing word. Plain words do not help.",
      why: "The answers are \"The water makes a soft bubbling hum.\" and \"The water makes a steady, gentle splash.\" They use exact words like soft, bubbling, steady and gentle. The other three use plain words like fine, good and great."
    },
    {
      id: "SK-GC2d-S09",
      type: "match",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: [],
      like: ["SK-GC2d-C09"],
      prompt: "Match each short passage to the describing word that fits it best.",
      cols: ["chilly", "gentle", "sleepily", "proudly"],
      rows: [
        {
          text: "Frost covered the window, and I pulled my scarf tight. The air was ____.",
          answer: 0
        },
        {
          text: "The kitten was tiny, and Nora held it with care. Her touch was ____.",
          answer: 1
        },
        { text: "Ming yawned and rubbed his eyes. He walked ____ to bed.", answer: 2 },
        { text: "Ana held up the trophy for everyone to see. She smiled ____.", answer: 3 }
      ],
      clue: "Read the first sentence of each pair. It is a clue that tells how the second sentence should end.",
      hints: [
        "Read the first sentence of each pair. It is a clue that tells how the second sentence should end.",
        "Decide whether each blank needs an adjective or an adverb, then think about what the clue shows.",
        "Yawning is a clue about how someone feels. Match that row, then do the others."
      ],
      how: [
        "Frost and a scarf pulled tight mean the air is cold, so chilly fits.",
        "Holding a tiny kitten with care means a soft touch, so gentle fits.",
        "Yawning and rubbing eyes show Ming is tired, so he walked sleepily.",
        "Holding up a trophy shows Ana is pleased with herself, so she smiled proudly."
      ],
      misconception: "A common mix-up is matching on sound instead of on the clue in the first sentence.",
      why: "Frost and a scarf mean the air is chilly. A tiny kitten held with care means a gentle touch. Yawning shows Ming is sleepy. A trophy held up shows Ana is proud. Each first sentence is a clue."
    },
    {
      id: "SK-GC2d-S10",
      type: "hottext",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: [],
      like: ["SK-GC2d-C10"],
      prompt: "Pick the sentence with an adverb that tells WHERE.",
      options: [
        "The old clock ticked loudly.",
        "Please set the box here.",
        "My uncle drives a green truck.",
        "Dina waited patiently.",
        "A warm breeze blew through the room."
      ],
      answer: [1],
      pick: 1,
      clue: "An adverb that tells where answers the question: in what place? Look for a word like here, there or inside.",
      hints: [
        "An adverb that tells where answers the question: in what place? Look for a word like here, there or inside.",
        "Check each sentence for the action word. Then look for a word that tells in what place it happens.",
        "Loudly and patiently tell how, not where. Check the other three sentences."
      ],
      how: [
        "Look for a word that tells in what place something happens.",
        "In \"Please set the box here,\" here tells where to set the box.",
        "Loudly and patiently tell how. Old, green and warm describe nouns."
      ],
      misconception: "A common mix-up is picking any adverb. Some adverbs tell how, not where.",
      why: "The answer is \"Please set the box here.\" Here tells where to set the box. Loudly and patiently tell how, and old, green and warm describe nouns."
    },
    {
      id: "SK-GC2d-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.2.d"],
      passages: ["p5"],
      like: ["SK-GC2d-C11"],
      prompt: "Imani wants to improve sentence 7 with exact describing words, but not too many. Which revision does that best?",
      choices: [
        { text: "The old gray filter makes a steady hum.", correct: true },
        {
          text: "The very old, dusty, gray, square filter makes a low, steady, constant hum."
        },
        { text: "The filter makes a nice noise." },
        { text: "The filter makes a noise that is good." }
      ],
      clue: "Exact words help the reader. Too many describing words in a row can get in the way.",
      hints: [
        "Exact words help the reader. Too many describing words in a row can get in the way.",
        "Count the describing words in each revision. Which revision gives a few exact words without piling them up?",
        "One choice has far more describing words than the others. Decide if they help or crowd the sentence."
      ],
      how: [
        "Look for a revision with a few exact words that is easy to read.",
        "\"The old gray filter makes a steady hum.\" has old, gray and steady, and each one helps.",
        "The long revision piles on describing words. Nice and good are plain words that tell nothing exact."
      ],
      misconception: "A common mix-up is thinking the revision with the most describing words is the best.",
      why: "The answer is \"The old gray filter makes a steady hum.\" It uses a few exact words that each add a detail. The long revision piles on too many describing words. The others use plain words like nice and good."
    },
    {
      id: "SK-GC2d-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: ["p6"],
      like: ["SK-GC2d-C12"],
      prompt: "Kofi wants to tell how the drummer played in sentence 6. Which revision fits sentence 5?",
      choices: [
        { text: "He played steadily, one beat at a time.", correct: true },
        { text: "He played sleepily, one beat at a time." },
        { text: "He played wildly, one beat at a time." },
        { text: "He played sadly, one beat at a time." }
      ],
      clue: "The adverb should match what sentence 5 says the drummer wanted. Reread it.",
      hints: [
        "The adverb should match what sentence 5 says the drummer wanted. Reread it.",
        "The drummer did not want to miss a beat. How would a drummer play if he wanted that?",
        "Someone who wants to hit every beat would not play sleepily. Check the other two choices against sentence 5."
      ],
      how: [
        "Sentence 5 says the drummer did not want to miss a beat.",
        "A drummer who wants every beat plays in an even way, so \"He played steadily, one beat at a time.\" fits.",
        "Sleepily, wildly and sadly do not match someone trying not to miss a beat."
      ],
      misconception: "A common mix-up is picking an adverb that sounds lively without checking what the draft says.",
      why: "The answer is \"He played steadily, one beat at a time.\" The drummer did not want to miss a beat, so he would play evenly. Sleepily, wildly and sadly do not match."
    },
    {
      id: "SK-GC2d-S13",
      type: "dropdown",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.d"],
      passages: [],
      like: ["SK-GC2d-C13"],
      prompt: "Choose the describing words that best fit the sentence.",
      text: "The path was so {0} that Leo's boots sank into it, so he walked {1} to stay upright.",
      slots: [
        {
          options: ["muddy", "bumpy", "frosty"],
          answer: 0
        },
        {
          options: ["playfully", "carelessly", "slowly"],
          answer: 2
        }
      ],
      clue: "Each blank needs a word that fits the clue in the sentence. Decide one blank at a time.",
      hints: [
        "Each blank needs a word that fits the clue in the sentence. Decide one blank at a time.",
        "The first blank is an adjective that tells what the path was like. The second blank is an adverb that tells how Leo walked.",
        "Boots that sink in are not stuck in something frosty. Decide the first blank, then the second."
      ],
      how: [
        "First blank: boots that sink into a path means the ground is soft and wet, so muddy fits.",
        "Second blank: Leo wants to stay upright, so he walks slowly.",
        "Bumpy and frosty do not make boots sink. Playfully and carelessly would not help him stay upright."
      ],
      misconception: "A common mix-up is choosing each word alone. Both words must fit the same sentence.",
      why: "The answers are muddy and slowly. Boots sink into mud, and someone who wants to stay upright walks slowly. Bumpy and frosty do not make boots sink, and playfully and carelessly do not help."
    },
    {
      id: "SK-GC2d-S14",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: ["3.L.GC.2.d"],
      passages: ["p6"],
      like: ["SK-GC2d-C14"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Which revision of sentence 4 best elaborates on the band?",
        choices: [
          { text: "The band looked sharp in red coats with gold buttons.", correct: true },
          { text: "The band looked sloppy in torn coats with missing buttons." },
          { text: "The band looked very good in good coats with buttons." },
          { text: "The band looked nice in nice coats with fine buttons." }
        ]
      },
      partB: {
        prompt: "Why is that revision better?",
        choices: [
          {
            text: "The exact words match the neat band that Kofi saw on Main Street.",
            correct: true
          },
          { text: "It has more describing words than the other choices do." },
          { text: "It repeats a word so the reader will remember it." },
          { text: "It tells what happened at the end of the parade." }
        ]
      },
      clue: "To elaborate, add details that fit the draft. Sentence 3 says Kofi stood close to see the band.",
      hints: [
        "To elaborate, add details that fit the draft. Sentence 3 says Kofi stood close to see the band.",
        "For Part A, check each revision for exact details. For Part B, ask what the exact words match.",
        "In Part A, a sloppy band with torn coats does not match a good-looking band. Check the other three choices."
      ],
      how: [
        "Sentence 4 says the band looked good, so the revision should say how.",
        "Part A: \"The band looked sharp in red coats with gold buttons.\" Sharp, red and gold are exact.",
        "Part B: \"The exact words match the neat band that Kofi saw on Main Street.\"",
        "The other revisions use plain words or details that do not match the draft."
      ],
      misconception: "A common mix-up is picking the revision with the most describing words instead of the best fit.",
      why: "Part A: \"The band looked sharp in red coats with gold buttons.\" Part B: \"The exact words match the neat band that Kofi saw on Main Street.\" Sharp, red and gold are exact. The sloppy band does not fit, and the others use plain words like good and nice."
    },
    {
      id: "SK-GC2d-S15",
      type: "ms",
      points: 2,
      dok: 3,
      std: ["3.L.GC.2.d"],
      passages: [],
      like: ["SK-GC2d-C15"],
      prompt: "The plain sentence is \"The boat floated.\" Choose the TWO revisions that add exact details without piling on words.",
      pick: 2,
      choices: [
        { text: "The little sailboat floated gently on the pond.", correct: true },
        { text: "The wooden boat floated quietly past the dock.", correct: true },
        { text: "The boat floated in a nice way on the pond." },
        { text: "The very small, white, wooden, tippy, slow boat floated very gently." },
        { text: "The boat floated and floated and floated on the pond." }
      ],
      clue: "Look for revisions with a few exact words that each add a new detail.",
      hints: [
        "Look for revisions with a few exact words that each add a new detail.",
        "Cross out any revision that uses a plain word or repeats a word. Then check what is left for words that crowd the sentence.",
        "One choice repeats the same word three times. Check whether the other two plain choices add anything."
      ],
      how: [
        "A good revision adds one or two exact details and stays easy to read.",
        "\"The little sailboat floated gently on the pond.\" adds little and gently.",
        "\"The wooden boat floated quietly past the dock.\" adds wooden, quietly and where it floated.",
        "The others use a plain word (nice), pile on describing words, or repeat floated three times."
      ],
      misconception: "A common mix-up is thinking a longer sentence or more repeats make a better revision.",
      why: "The answers are \"The little sailboat floated gently on the pond.\" and \"The wooden boat floated quietly past the dock.\" Each adds a few exact details. The others use the plain word nice, pile on too many describing words, or repeat floated."
    }
  ],
  addons: {
    "SK-GC2d-P1": {
      hints: [
        "An exact adjective tells what the paws were really like. Look for the clue in what Mom does next.",
        "Think about what happens to paws that dig in dirt. Why would Mom need a towel?",
        "One choice is a plain word that could describe almost anything. Check the other two against the towel."
      ],
      how: [
        "The clue is that Mom wipes the paws with a towel.",
        "A puppy that digs in a garden gets dirty paws, so muddy fits.",
        "Nice is too plain, and fluffy does not explain the towel."
      ],
      misconception: "A common mix-up is picking a word that sounds cute without checking the clue."
    },
    "SK-GC2d-P2": {
      hints: [
        "An adverb tells how something happens. The end of the sentence gives a clue about how the turtle moved.",
        "Why did it take the turtle a long time to cross? Pick the adverb that explains it.",
        "One choice means the opposite of what the clue says. Check the other three."
      ],
      how: [
        "The sentence says it took a long time to reach the other side.",
        "Moving slowly takes a long time, so slowly fits.",
        "Quickly means the opposite, and sadly and loudly do not explain the long time."
      ],
      misconception: "A common mix-up is picking a lively adverb without checking the clue."
    },
    "SK-GC2d-P3": {
      hints: [
        "Ask what the word describes. A word that describes a noun is an adjective. A word that tells how, when or where is an adverb.",
        "For each word, find the noun or the action in the sentence. Decide which one the word describes.",
        "Sticky describes hands, which are things. Decide that row, then do the other four."
      ],
      how: [
        "Striped tells what kind of snake, so it is an adjective.",
        "Sticky tells what the hands were like, so it is an adjective.",
        "Gently tells how she patted, outside tells where they played, and early tells when the bus came, so they are adverbs."
      ],
      misconception: "A common mix-up is thinking every word that ends in -ly or tells about time is an adjective."
    },
    "SK-GC2d-P4": {
      hints: [
        "To elaborate is to add details that tell more. Look for new details you can picture.",
        "Read each revision and ask what new thing it tells about the beach trip.",
        "One choice uses plain words like really and good. Check whether the other three add new details."
      ],
      how: [
        "Ask what each revision tells about the trip that \"We went to the beach\" did not.",
        "\"We hurried to the sandy beach and splashed happily in the cool waves.\" adds how they got there, what the beach was like, and how they splashed.",
        "The others use plain words, repeat the beach, or only add facts about the car."
      ],
      misconception: "A common mix-up is picking a longer sentence that does not add exact details."
    },
    "SK-GC2d-P5": {
      hints: [
        "An exact word helps you see, taste or feel the pancakes. A plain word could describe almost anything.",
        "Ask which words tell something specific about how pancakes look, feel or taste.",
        "Fine, okay and nice could describe any food. Pick the two words that tell something exact."
      ],
      how: [
        "Fluffy tells how the pancakes looked and felt.",
        "Buttery tells how the pancakes tasted.",
        "Fine, okay and nice are plain words that do not tell anything exact."
      ],
      misconception: "A common mix-up is picking a word that sounds positive but is still too plain."
    },
    "SK-GC2d-P6": {
      hints: [
        "Read each sentence and check that the describing word matches the rest of the sentence.",
        "Picture each sentence. Does the describing word make sense with what happens?",
        "The lemon sentence makes sense: a sour lemon would make you make a face. Check the other four."
      ],
      how: [
        "Picture each sentence and ask whether the describing word matches what happens.",
        "A heavy box would not be easy to lift with one finger.",
        "Sour, cold, steadily and bright all match what happens in their sentences."
      ],
      misconception: "A common mix-up is choosing a sentence because it sounds unusual, even if the word fits."
    }
  },
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
