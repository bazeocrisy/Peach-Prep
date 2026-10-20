/*
 * R-OPN-01 — Opinion text written by a student character: a school garden.
 * The writer, Maya Brooks, is a fictional third grader; all names and the school are invented.
 *
 * REFERENCE NOTE: sentence references ("p1:<paragraph>:<sentence>") count EVERY entry in the
 * paragraphs array, 1-based, including any headings ("## ...") or captions ("Caption: ...").
 * This passage has no headings or captions, so array numbers and the child-visible
 * paragraph numbers are the same.
 */
PP.addSet({
  id: "R-OPN-01",
  section: "reading",
  kind: "opinion",
  title: "Let's Grow a School Garden!",
  blurb: "A third grader writes to her school newsletter to ask for a vegetable garden.",
  passages: [
    {
      id: "p1",
      title: "Let's Grow a School Garden!",
      byline: "by Maya Brooks, a third grader at Pine Hill Elementary, for the school newsletter",
      genre: "Opinion text",
      lexile: "about 600L (estimate)",
      paragraphs: [
        [
          "Every day at recess, I look at the empty patch of grass behind our cafeteria.",
          "It gets plenty of sun, but nobody uses it.",
          "I think our school should turn that space into a vegetable garden.",
          "Here are three reasons why."
        ],
        [
          "First, a garden would help us learn science.",
          "In third grade, we study how plants grow and change.",
          "Right now, we mostly read about seeds in our science books.",
          "In a garden, we could watch a bean seed sprout, grow leaves, and make new seeds of its own.",
          "Our science teacher, Mr. Lane, says that students remember more when they see things for themselves."
        ],
        [
          "Another reason is that a garden could help us eat healthier food.",
          "Our school nurse, Ms. Ortiz, told me that children are often more willing to taste vegetables they have grown themselves.",
          "For example, my class could grow lettuce and carrots for a salad day.",
          "Fresh vegetables have vitamins that help our bodies stay strong."
        ],
        [
          "Finally, a garden would teach us to work as a team.",
          "Each class could take turns watering, pulling weeds, and picking vegetables.",
          "Last week, I asked the twenty-four students in my class if they would help.",
          "Twenty-one of them said yes!"
        ],
        [
          "Some people may disagree because a garden takes time and work.",
          "However, my mom and three other parents have already offered to help on weekends, so the teachers would not have to do all the work."
        ],
        [
          "A garden would make our school a better place to learn and grow.",
          "That is why I am asking Principal Harris and the Parent Club to start a garden this spring.",
          "If you agree, please sign the garden list in the front office by Friday."
        ]
      ],
      lines: null
    }
  ],
  items: [
    {
      id: "R-OPN-01-1",
      type: "hottext",
      points: 1,
      std: ["3.T.T.3.a"],
      dok: 1,
      prompt: "Read paragraph 1. Select the sentence that states Maya's opinion.",
      source: "p1",
      targets: ["p1:1:1", "p1:1:2", "p1:1:3", "p1:1:4"],
      answer: ["p1:1:3"],
      pick: 1,
      clue: "An opinion statement tells what the writer thinks or wants. Look for a sentence that tells what Maya thinks should happen.",
      why: "The answer is \"I think our school should turn that space into a vegetable garden.\" The words \"I think\" and \"should\" show that this is what Maya believes. The other sentences describe the grass or lead into her reasons."
    },
    {
      id: "R-OPN-01-2",
      type: "ms",
      points: 2,
      pick: 3,
      std: ["3.T.T.3.a"],
      dok: 2,
      prompt: "Which THREE reasons does Maya give to support her opinion? Choose three answers.",
      choices: [
        { text: "A garden would help students learn about science.", correct: true },
        { text: "A garden could help students eat healthier food.", correct: true },
        { text: "A garden would teach students to work as a team.", correct: true },
        { text: "A garden would give students a quiet place to read." },
        { text: "A garden could earn money by selling vegetables." },
        { text: "A garden would make school lunches cost less." }
      ],
      clue: "Maya uses the words First, Another reason and Finally to start each reason. Find those words.",
      why: "The answers are \"A garden would help students learn about science\" (paragraph 2, First), \"A garden could help students eat healthier food\" (paragraph 3, Another reason), and \"A garden would teach students to work as a team\" (paragraph 4, Finally). She never says a garden is for reading, earning money, or cheaper lunches."
    },
    {
      id: "R-OPN-01-3",
      type: "match",
      points: 2,
      std: ["3.T.T.3.a"],
      dok: 2,
      prompt: "Decide whether each sentence from the article is a fact or an opinion.",
      cols: ["Fact", "Opinion"],
      rows: [
        { text: "In third grade, we study how plants grow and change.", answer: 0 },
        { text: "A garden would teach us to work as a team.", answer: 1 },
        { text: "Last week, I asked the twenty-four students in my class if they would help.", answer: 0 },
        { text: "A garden would make our school a better place to learn and grow.", answer: 1 }
      ],
      clue: "A fact can be checked to see if it is true. An opinion tells what someone thinks or believes, and people could disagree with it.",
      why: "Facts: third graders study how plants grow, and Maya asked twenty-four classmates. Both can be checked. Opinions: a garden would teach students to work as a team, and a garden would make the school a better place. These are what Maya believes will happen, and other people could disagree."
    },
    {
      id: "R-OPN-01-4",
      type: "ebsr",
      points: 2,
      std: ["3.T.RA.2.b", "3.T.RA.2.a"],
      dok: 3,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "Part A: Why does Maya tell what Mr. Lane and Ms. Ortiz said?",
        choices: [
          { text: "to show that adults who know about these topics support her reasons", correct: true },
          { text: "to explain which adults will water the garden on the weekends" },
          { text: "to tell which vegetables the students should plant in the garden" },
          { text: "to show that the teachers do not want to do any extra work" }
        ]
      },
      partB: {
        prompt: "Part B: Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "Our school nurse, Ms. Ortiz, told me that children are often more willing to taste vegetables they have grown themselves.", correct: true },
          { text: "For example, my class could grow lettuce and carrots for a salad day." },
          { text: "Each class could take turns watering, pulling weeds, and picking vegetables." },
          { text: "However, my mom and three other parents have already offered to help on weekends, so the teachers would not have to do all the work." }
        ]
      },
      clue: "Think about each adult's job. Why would a reader trust what a science teacher says about learning, or what a nurse says about food?",
      why: "Part A: Maya includes them to show that adults who know about these topics support her reasons. A science teacher knows about learning, and a nurse knows about healthy eating, so this makes her article more believable. Part B: The sentence about Ms. Ortiz, the school nurse, shows an expert agreeing with her reason about healthier food."
    },
    {
      id: "R-OPN-01-5",
      type: "mc",
      points: 1,
      std: ["3.T.C.1.a"],
      dok: 2,
      prompt: "Who is Maya's main audience, and what is her purpose for writing?",
      choices: [
        { text: "the principal and school families, to persuade them to start a garden", correct: true },
        { text: "her classmates, to teach them how to plant and grow bean seeds" },
        { text: "the school nurse, to inform her about which vegetables have vitamins" },
        { text: "her science teacher, to entertain him with a story about plants" }
      ],
      clue: "Read the byline and the last paragraph. Who does Maya ask to do something, and what does she ask them to do?",
      why: "The answer is \"the principal and school families, to persuade them to start a garden.\" Maya writes for the school newsletter. In the last paragraph she asks Principal Harris and the Parent Club to start a garden, and she asks readers to sign the list. She is not teaching how to plant, giving vitamin facts, or telling a story."
    },
    {
      id: "R-OPN-01-6",
      type: "dropdown",
      points: 1,
      std: ["3.T.T.3.a"],
      dok: 2,
      prompt: "Read the first sentence of paragraph 3. Choose the answer that completes the sentence.",
      text: "The linking words Another reason tell the reader that Maya is {0}.",
      slots: [
        { options: ["adding a new reason to support her opinion", "giving an example of a vegetable to grow", "starting the conclusion of her article", "telling what people who disagree think"], answer: 0 }
      ],
      clue: "Linking words connect ideas. Ask yourself: what came before paragraph 3, and what does the word another mean?",
      why: "\"Another reason\" tells the reader that Maya is adding a new reason to support her opinion. Paragraph 2 gave her first reason, and paragraph 3 gives a second one, about eating healthier food."
    },
    {
      id: "R-OPN-01-7",
      type: "hottext",
      points: 1,
      std: ["3.T.T.3.a", "3.T.RA.2.a"],
      dok: 2,
      prompt: "Some people think a garden would be too much work. Select the sentence in which Maya answers these people.",
      source: "p1",
      targets: ["p1:4:2", "p1:4:3", "p1:4:4", "p1:5:1", "p1:5:2", "p1:6:1"],
      answer: ["p1:5:2"],
      pick: 1,
      clue: "First find the sentence that tells what these people think. Then look for the sentence that gives Maya's answer to them.",
      why: "The answer is \"However, my mom and three other parents have already offered to help on weekends, so the teachers would not have to do all the work.\" The sentence before it only tells what some people think. The word However shows that Maya is answering them."
    },
    {
      id: "R-OPN-01-8",
      type: "mc",
      points: 1,
      std: ["3.L.V.2.a"],
      dok: 1,
      prompt: "Read this sentence from paragraph 5.\n\n\"Some people may disagree because a garden takes time and work.\"\n\nThe word disagree is made of the prefix dis- and the word agree. What does disagree mean?",
      choices: [
        { text: "to not agree", correct: true },
        { text: "to agree again" },
        { text: "to agree before" },
        { text: "to agree a lot" }
      ],
      clue: "Think of other words that begin with dis-, such as dislike. What does dis- do to the word that follows it?",
      why: "Disagree means to not agree. The prefix dis- means \"not\" or \"the opposite of,\" just like dislike means to not like."
    }
  ]
});
