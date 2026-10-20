PP.addSet({
  id: "R-LIT-01",
  section: "reading",
  kind: "literary",
  title: "Deja's Kite",
  blurb: "A story about a girl who wants to build a kite all by herself.",
  passages: [
    { id: "p1", title: "Deja's Kite", byline: "",
      genre: "Literary text", lexile: "about 550L (estimate)",
      paragraphs: [
        ["Every spring, the town of Pine Hill held a Kite Day at Laurel Park.", "This year, Deja wanted to fly a kite she had built all by herself.", "She spread paper, two thin sticks, string, and a bottle of glue across the kitchen table."],
        ["\"Can I help?\" asked her little brother, Theo.", "He was six, and he loved anything that could fly."],
        ["\"No, thanks,\" Deja said without looking up.", "\"I want everyone to know I made it on my own.\""],
        ["Theo sat down anyway and watched.", "Deja tied the sticks into a cross, glued the paper over them, and added a short tail made of ribbon.", "The kite looked bright and sturdy, strong enough to last through a windy day."],
        ["On Saturday morning, the family walked to the park.", "The sky was full of kites shaped like fish, dragons, and stars.", "Deja held her kite high and ran across the grass.", "The kite rose for a moment.", "Then it spun in circles and crashed nose-first into the ground."],
        ["She tried again.", "And again.", "Each time, the kite twirled like a leaf in a storm and fell.", "Deja's cheeks felt hot.", "She kicked at the grass."],
        ["\"Maybe it needs a longer tail,\" Theo said quietly.", "\"The fish kites have long tails, and they don't spin.\""],
        ["\"You're six,\" Deja snapped.", "\"What do you know about kites?\""],
        ["Theo's face fell.", "He walked over to sit with their mom on the picnic blanket."],
        ["Deja looked up at the fish kites.", "Their long tails trailed behind them and kept them from spinning.", "She looked down at her own kite with its tiny ribbon.", "Her stomach twisted.", "Theo was right, and she had been unkind to him."],
        ["She walked to the blanket and sat beside him.", "\"I'm sorry, Theo,\" she said.", "\"You noticed something I missed.", "Will you help me fix it?\""],
        ["Theo grinned.", "He pulled a long red scarf out of the picnic bag.", "\"We can use this!\""],
        ["Together they tied the scarf to the bottom of the kite.", "Theo held the kite up while Deja backed away, letting out the string.", "\"Now!\" she called.", "Theo let go."],
        ["This time, the kite climbed higher and higher.", "It did not spin.", "It floated over the park, steady as a sailboat on a calm lake, with the red scarf waving behind it."],
        ["\"We did it!\" Theo shouted."],
        ["Deja handed him the string.", "\"You fly it first,\" she said.", "\"It's our kite now.\""]
      ],
      lines: null
    }
  ],
  items: [
    {
      id: "R-LIT-01-q1", type: "mc", points: 1, std: ["3.T.T.1.b"], dok: 2,
      prompt: "What is the main problem in the story?",
      choices: [
        { text: "Deja's kite will not stay up in the air.", correct: true },
        { text: "Theo does not want to go to Kite Day." },
        { text: "Deja cannot find the sticks she needs." },
        { text: "There is not enough wind to lift any kites." }
      ],
      clue: "A story's problem is the trouble the main character has to solve. Think about what goes wrong again and again at the park.",
      why: "The answer is that Deja's kite will not stay up in the air. It spins and crashes every time she tries, and the rest of the story is about fixing it. Other kites fly fine, so the wind is not the problem."
    },
    {
      id: "R-LIT-01-q2", type: "dropdown", points: 1, std: ["3.L.V.3.a"], dok: 1,
      prompt: "Read this sentence from paragraph 4: \"The kite looked bright and sturdy, strong enough to last through a windy day.\" Choose the meaning of sturdy.",
      text: "In paragraph 4, the word sturdy means {0}.",
      slots: [
        { options: ["strong and hard to break", "light and easy to carry", "bright and full of color", "small and easy to hide"], answer: 0 }
      ],
      clue: "Look at the words right after sturdy in the same sentence. They tell you more about what the kite is like.",
      why: "Sturdy means strong and hard to break. The sentence says the kite was \"strong enough to last through a windy day.\" Bright is a different word in the sentence, so it does not tell us what sturdy means."
    },
    {
      id: "R-LIT-01-q3", type: "hottext", points: 1, std: ["3.T.SS.2.a"], dok: 2,
      prompt: "The author uses a simile to describe how the kite moves once it is fixed. Select that sentence.",
      source: "p1",
      targets: ["p1:5:3", "p1:5:4", "p1:5:5", "p1:6:1", "p1:6:3", "p1:14:1", "p1:14:2", "p1:14:3"],
      answer: ["p1:14:3"],
      pick: 1,
      clue: "A simile compares two things using like or as. Find the comparisons first, then check which one is about the kite after the new tail is added.",
      why: "The answer is \"It floated over the park, steady as a sailboat on a calm lake, with the red scarf waving behind it.\" It compares the fixed kite to a sailboat using as. The leaf simile in paragraph 6 is about the kite before it was fixed."
    },
    {
      id: "R-LIT-01-q4", type: "order", points: 2, std: ["3.T.T.1.b"], dok: 2,
      prompt: "Put these events from the story in the order they happen.",
      steps: [
        "Deja builds a kite with a short ribbon tail.",
        "Deja's kite spins and crashes at the park.",
        "Theo says the kite might need a longer tail.",
        "Deja says she is sorry and asks Theo for help.",
        "The kite flies high with the red scarf behind it."
      ],
      clue: "Find each event in the story. Ask yourself: what has to happen before this can happen?",
      why: "First Deja builds the kite with a short tail. Next it crashes at the park, so Theo suggests a longer tail. Deja snaps at him, then says she is sorry and asks for help. Last, the kite flies with the red scarf."
    },
    {
      id: "R-LIT-01-q5", type: "match", points: 2, std: ["3.T.T.1.c"], dok: 2,
      prompt: "What does each action show about Deja? Match each action to the trait it shows. Use each trait once.",
      cols: ["proud", "rude", "willing to admit a mistake", "generous"],
      rows: [
        { text: "Deja wants everyone to know she made the kite on her own.", answer: 0 },
        { text: "Deja snaps, \"What do you know about kites?\"", answer: 1 },
        { text: "Deja tells Theo, \"You noticed something I missed.\"", answer: 2 },
        { text: "Deja hands Theo the string so he can fly the kite first.", answer: 3 }
      ],
      clue: "Think about what each action tells you about Deja. Is she showing off, being unkind, owning up, or sharing?",
      why: "Wanting credit for doing it alone shows she is proud. Snapping at Theo is rude. Saying Theo noticed something she missed shows she is willing to admit a mistake. Letting Theo fly the kite first is generous."
    },
    {
      id: "R-LIT-01-q6", type: "ebsr", points: 2, std: ["3.T.T.1.c", "3.T.RA.2.a"], dok: 3,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "How does Deja change from the beginning of the story to the end?",
        choices: [
          { text: "She goes from wanting to do it alone to sharing the kite with Theo.", correct: true },
          { text: "She goes from being afraid of the wind to feeling brave at the park." },
          { text: "She goes from loving kites to wishing she had never built one." },
          { text: "She goes from being kind to Theo to being unkind to him." }
        ]
      },
      partB: {
        prompt: "Which sentence from the end of the story best supports the answer to Part A?",
        choices: [
          { text: "\"It's our kite now.\"", correct: true },
          { text: "Theo grinned." },
          { text: "It did not spin." },
          { text: "Theo let go." }
        ]
      },
      clue: "Compare what Deja says in paragraph 3 with what she says in the last paragraph. For Part B, find the words Deja says that show her new way of thinking.",
      why: "Part A: Deja changes from wanting to do it alone to sharing the kite with Theo. Part B: \"It's our kite now\" shows she now thinks of the kite as belonging to both of them, not just to her."
    },
    {
      id: "R-LIT-01-q7", type: "mc", points: 1, std: ["3.T.T.1.a"], dok: 3,
      prompt: "Why does the author include the fish kites in the story?",
      choices: [
        { text: "They give a clue about how to fix Deja's kite.", correct: true },
        { text: "They show that Deja wishes she had a fish kite." },
        { text: "They show that the park is too crowded for Deja." },
        { text: "They show that Theo likes fish more than dragons." }
      ],
      clue: "Look at paragraphs 7 and 10. What do Theo and Deja notice about the fish kites, and how does it help?",
      why: "The fish kites give a clue about how to fix Deja's kite. Their long tails keep them from spinning, which helps Theo, and then Deja, figure out that her kite needs a longer tail."
    },
    {
      id: "R-LIT-01-q8", type: "ms", points: 2, std: ["3.T.T.1.c"], dok: 2,
      prompt: "Which TWO lessons does Deja learn in the story? Choose two answers.",
      pick: 2,
      choices: [
        { text: "Other people's ideas can help you solve a problem.", correct: true },
        { text: "It is important to say sorry when you hurt someone.", correct: true },
        { text: "Kites with short tails fly better than long ones." },
        { text: "It is always better to do every job by yourself." },
        { text: "Little brothers are too young to help with kites." },
        { text: "Winning a prize is the best part of Kite Day." }
      ],
      clue: "Think about what Deja does at the end that she would not do at the beginning. Then check each choice against the story.",
      why: "Deja learns that other people's ideas can help solve a problem, because Theo's idea fixes the kite. She also learns to say sorry when she hurts someone, which she does in paragraph 11. The story shows the opposite of the other choices, and it never mentions a prize."
    }
  ]
});
