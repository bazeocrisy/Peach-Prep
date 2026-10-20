/*
 * R-INF-01 — Informational text (science): loggerhead sea turtles nesting on Georgia's beaches.
 *
 * REFERENCE NOTE: sentence references ("p1:<paragraph>:<sentence>") count EVERY entry in the
 * paragraphs array, 1-based, INCLUDING headings ("## ...") and the caption ("Caption: ...").
 * The child sees numbers only on body paragraphs, so prompts that say "paragraph N" use the
 * child-visible number. Map for this passage:
 *   array 1 = body para 1 | array 2 = heading | array 3 = body para 2 | array 4 = heading
 *   array 5 = body para 3 | array 6 = caption | array 7 = heading    | array 8 = body para 4
 *   array 9 = body para 5 | array 10 = body para 6
 */
PP.addSet({
  id: "R-INF-01",
  section: "reading",
  kind: "informational",
  title: "Turtle Tracks on Georgia's Beaches",
  blurb: "A science article about how loggerhead sea turtles nest on Georgia's barrier islands.",
  passages: [
    {
      id: "p1",
      title: "Turtle Tracks on Georgia's Beaches",
      byline: "",
      genre: "Informational text",
      lexile: "about 620L (estimate)",
      paragraphs: [
        [
          "Every summer, something special happens on Georgia's barrier islands.",
          "Loggerhead sea turtles come ashore to lay their eggs on the sandy beaches.",
          "These large turtles spend almost their whole lives swimming in the ocean.",
          "Only the females return to land, and they come back only to build nests."
        ],
        ["## A Mother Turtle's Night"],
        [
          "Nesting begins after dark, usually between May and August.",
          "First, the female crawls slowly up the beach, past the line where the waves stop.",
          "Next, she uses her back flippers to dig a deep hole in the sand.",
          "Then she lays about one hundred eggs, each one about the size of a golf ball.",
          "After that, she covers the eggs with sand and crawls back to the sea.",
          "She does not stay to guard her nest."
        ],
        ["## Waiting in Warm Sand"],
        [
          "The eggs stay buried in the nest for about two months.",
          "During that time, the sun heats the sand, and the warm sand keeps the eggs warm.",
          "The temperature of the sand also does something surprising.",
          "Warmer sand causes more of the babies to be female, while cooler sand causes more of them to be male."
        ],
        ["Caption: Volunteers place a wire screen over a nest so that animals cannot dig up the eggs."],
        ["## Racing to the Sea"],
        [
          "When the baby turtles, called hatchlings, are ready, they break out of their shells.",
          "They usually climb out of the nest together at night, when the sand is cooler.",
          "Hatchlings find the ocean by crawling toward the brightest part of the sky, which is usually above the water."
        ],
        [
          "However, bright lights from houses and streets can confuse them.",
          "As a result, some hatchlings crawl the wrong way, away from the water.",
          "To help, many people who live near Georgia beaches turn off outdoor lights or close their curtains at night during nesting season.",
          "Volunteers also walk the beaches early each morning to look for new turtle tracks and mark the nests."
        ],
        [
          "Loggerheads have been nesting on these beaches for a very long time.",
          "When people work together, more hatchlings can make it safely to the ocean."
        ]
      ],
      lines: null
    }
  ],
  items: [
    {
      id: "R-INF-01-1",
      type: "mc",
      points: 1,
      std: ["3.T.T.2.a"],
      dok: 2,
      prompt: "Which sentence best states the main idea of the whole article?",
      choices: [
        { text: "Loggerhead sea turtles nest on Georgia's beaches, and people can help their hatchlings reach the ocean.", correct: true },
        { text: "Loggerhead sea turtles spend almost their whole lives swimming far out in the warm ocean." },
        { text: "The temperature of the sand decides whether more of the baby turtles are female or male." },
        { text: "Volunteers walk along Georgia's beaches early every morning to look for new turtle tracks." }
      ],
      clue: "A main idea is about the WHOLE article, not just one paragraph. Think about what every section has in common.",
      why: "The best answer is \"Loggerhead sea turtles nest on Georgia's beaches, and people can help their hatchlings reach the ocean.\" Every section is about nesting, the eggs, or the hatchlings, and the article ends by telling how people help. The other choices are true, but each one is only a detail from one part of the article."
    },
    {
      id: "R-INF-01-2",
      type: "hottext",
      points: 1,
      std: ["3.T.RA.2.a", "3.T.T.2.a"],
      dok: 2,
      prompt: "Read the section \"Racing to the Sea.\" Select the sentence that explains how hatchlings find their way to the ocean.",
      source: "p1",
      targets: ["p1:8:1", "p1:8:2", "p1:8:3", "p1:9:1", "p1:9:2", "p1:9:3", "p1:9:4"],
      answer: ["p1:8:3"],
      pick: 1,
      clue: "Look for the sentence that tells what the hatchlings move TOWARD. A sentence about getting lost is not the same as a sentence about finding the way.",
      why: "The answer is \"Hatchlings find the ocean by crawling toward the brightest part of the sky, which is usually above the water.\" It tells exactly how they find the ocean: they follow the light. The sentence about bright lights tells how hatchlings get confused, not how they find their way."
    },
    {
      id: "R-INF-01-3",
      type: "order",
      points: 2,
      std: ["3.T.T.2.b", "3.T.SS.1.a"],
      dok: 2,
      prompt: "Put these events in the order they happen in the article. Drag the first event to the top.",
      steps: [
        "A female turtle digs a hole in the sand with her back flippers.",
        "The female lays about one hundred eggs and covers them with sand.",
        "The eggs stay buried in the warm sand for about two months.",
        "The hatchlings break out of their shells.",
        "The hatchlings crawl toward the brightest part of the sky."
      ],
      clue: "The article is told in time order. Use the section headings and words like First, Next, Then and After that to help you.",
      why: "First the mother digs the hole, then she lays the eggs and covers them. Next the eggs wait in the warm sand for about two months. After that the hatchlings break out of their shells, and last they crawl toward the brightest part of the sky to reach the ocean."
    },
    {
      id: "R-INF-01-4",
      type: "match",
      points: 2,
      std: ["3.T.SS.1.a", "3.T.T.2.b"],
      dok: 2,
      prompt: "Each sentence on the left is a cause. Match each cause with its effect from the article.",
      cols: ["More of the babies are female.", "More of the babies are male.", "Animals cannot dig up the eggs.", "Some hatchlings crawl away from the water."],
      rows: [
        { text: "The sand around the nest is warmer.", answer: 0 },
        { text: "The sand around the nest is cooler.", answer: 1 },
        { text: "A wire screen is placed over the nest.", answer: 2 },
        { text: "Bright lights shine near the beach at night.", answer: 3 }
      ],
      clue: "A cause makes something happen. For each cause, find it in the article (do not forget the caption), then read what happens because of it.",
      why: "Warmer sand causes more females, and cooler sand causes more males. The caption tells that a wire screen keeps animals from digging up the eggs. Bright lights confuse hatchlings, so some crawl away from the water."
    },
    {
      id: "R-INF-01-5",
      type: "ebsr",
      points: 2,
      std: ["3.T.T.2.b", "3.T.RA.2.a"],
      dok: 3,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "Part A: What is the most likely reason volunteers walk the beaches early each morning?",
        choices: [
          { text: "to find the nests that mother turtles made the night before", correct: true },
          { text: "to help the new hatchlings crawl down to the water" },
          { text: "to turn off the outdoor lights on houses near the beach" },
          { text: "to check whether the sand is warm enough for the eggs" }
        ]
      },
      partB: {
        prompt: "Part B: Which TWO sentences from the article best support the answer to Part A?",
        pick: 2,
        choices: [
          { text: "Nesting begins after dark, usually between May and August.", correct: true },
          { text: "Then she lays about one hundred eggs, each one about the size of a golf ball." },
          { text: "During that time, the sun heats the sand, and the warm sand keeps the eggs warm." },
          { text: "They usually climb out of the nest together at night, when the sand is cooler." },
          { text: "Volunteers also walk the beaches early each morning to look for new turtle tracks and mark the nests.", correct: true }
        ]
      },
      clue: "Put two facts together: WHEN do mother turtles nest, and WHAT do the volunteers look for in the morning?",
      why: "Part A: The answer is \"to find the nests that mother turtles made the night before.\" Part B: \"Nesting begins after dark\" tells that turtles nest at night, and \"Volunteers also walk the beaches early each morning to look for new turtle tracks and mark the nests\" tells what they look for. Hatchlings come out at night, so a morning walk is not to help them, and the article says people who live near the beach turn off the lights, not the volunteers."
    },
    {
      id: "R-INF-01-6",
      type: "mc",
      points: 1,
      std: ["3.T.C.1.b"],
      dok: 2,
      prompt: "Read the caption in the section \"Waiting in Warm Sand.\" How does the caption help the reader?",
      choices: [
        { text: "It tells one way people keep the buried eggs safe while they wait to hatch.", correct: true },
        { text: "It explains why warm sand causes more of the baby turtles to be female." },
        { text: "It shows the steps a mother turtle follows when she builds her nest." },
        { text: "It tells how the hatchlings find their way to the ocean after dark." }
      ],
      clue: "A caption tells about a picture. Read only the caption, then pick the choice that matches what it says.",
      why: "The answer is \"It tells one way people keep the buried eggs safe while they wait to hatch.\" The caption tells that volunteers put a wire screen over a nest so animals cannot dig up the eggs. The other choices are ideas from the paragraphs, not from the caption."
    },
    {
      id: "R-INF-01-7",
      type: "mc",
      points: 1,
      std: ["3.T.SS.1.a"],
      dok: 2,
      prompt: "How is the section \"A Mother Turtle's Night\" mostly organized?",
      choices: [
        { text: "in time order, telling the steps the mother turtle follows", correct: true },
        { text: "by comparing loggerheads with other kinds of sea turtles" },
        { text: "by telling about a problem and then a way to solve it" },
        { text: "by giving reasons that support the author's opinion" }
      ],
      clue: "Look at the first word of each sentence in that section. What kind of words are they?",
      why: "The answer is \"in time order, telling the steps the mother turtle follows.\" The words First, Next, Then and After that show the steps the mother turtle follows. The problem-and-solution part (bright lights and turning them off) comes later, in \"Racing to the Sea.\""
    },
    {
      id: "R-INF-01-8",
      type: "dropdown",
      points: 1,
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "Read paragraph 1. Choose the answer that completes the sentence.",
      text: "In paragraph 1, the phrase come ashore means to come {0}.",
      slots: [
        { options: ["onto the land", "out into the deep sea", "with their young ones", "under the waves"], answer: 0 }
      ],
      clue: "Read the sentences after the word. Where do the turtles usually live, and where do the females go to build nests?",
      why: "Come ashore means to come onto the land. The paragraph says the turtles live in the ocean, but the females \"return to land\" to lay eggs \"on the sandy beaches.\""
    }
  ]
});
