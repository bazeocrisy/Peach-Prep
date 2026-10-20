PP.addSet({
  id: "R-LIT-02",
  section: "reading",
  kind: "literary",
  title: "Half-Moon Cakes",
  blurb: "A girl in South Korea helps make rice cakes for a fall holiday.",
  passages: [
    { id: "p1", title: "Half-Moon Cakes", byline: "",
      genre: "Literary text", lexile: "about 600L (estimate)",
      paragraphs: [
        ["Every fall, my family visits Grandmother in her small village in South Korea for Chuseok.", "Chuseok is a harvest holiday, a time to give thanks for the food that grows in the fields.", "On the night before, the whole family sits on the floor around a low table to make songpyeon."],
        ["Songpyeon are little rice cakes shaped like half-moons.", "Grandmother fills ours with sweet sesame seeds and honey.", "Grandmother says that making them together is the best part of the holiday.", "I used to think it was the slowest part."],
        ["This year, my cousin Joon and I sat side by side.", "Outside, the nearly full moon was rising, and I could hear other kids laughing in the lane.", "I wanted to finish my cakes quickly so I could go out and play."],
        ["I grabbed a ball of dough, poked a hole in it, and stuffed in a big spoonful of filling.", "I squeezed it shut and plopped it on the tray.", "Then I made another, and another.", "My pile grew like a mountain."],
        ["Joon worked slowly.", "He rolled each ball until it was smooth.", "He pressed a small dent with his thumb, added just a little filling, and pinched the edges closed bit by bit.", "His pile was tiny."],
        ["\"Look how many I made!\" I said, holding up my tray."],
        ["Grandmother smiled but said nothing.", "She laid the cakes on a bed of pine needles and steamed them.", "The kitchen filled with a clean, piney smell."],
        ["When Grandmother lifted the lid, my heart sank.", "Half of my cakes had split open.", "Sticky filling had oozed out and puddled on the needles.", "Joon's cakes were whole and shiny, like tiny moons."],
        ["\"They look terrible,\" I mumbled."],
        ["Grandmother handed me a fresh ball of dough.", "\"Min-ji, a cake made in a hurry cracks in the steam,\" she said gently.", "\"Take your time, and it will hold together.\""],
        ["So I tried Joon's way.", "I rolled the dough until it was as smooth as a pebble.", "I used less filling.", "I pinched the edges carefully, one small pinch at a time.", "It took much longer, but I didn't mind."],
        ["The second time Grandmother steamed them, every one of my cakes came out whole.", "I gave the best one to Grandmother."],
        ["Later, we all sat outside and ate songpyeon under the bright, round moon.", "Mine tasted sweeter than ever.", "Now I know that the slow part is not the boring part.", "It is the part that makes things turn out right."]
      ],
      lines: null
    }
  ],
  items: [
    {
      id: "R-LIT-02-q1", type: "mc", points: 1, std: ["3.T.C.2.a"], dok: 2,
      prompt: "At the beginning of the story, what does the narrator, Min-ji, think about making songpyeon?",
      choices: [
        { text: "She thinks it is slow and wants to be done fast.", correct: true },
        { text: "She thinks it is the best part of the holiday." },
        { text: "She thinks Joon should do all of the work." },
        { text: "She thinks the cakes are too sweet to eat." }
      ],
      clue: "The narrator tells the story using I. Read paragraphs 2 and 3 and look for what Min-ji says about the work, not what someone else says.",
      why: "The answer is that she thinks it is slow and wants to be done fast. She says, \"I used to think it was the slowest part,\" and she wants to finish so she can play. It is Grandmother, not Min-ji, who calls it the best part."
    },
    {
      id: "R-LIT-02-q2", type: "dropdown", points: 1, std: ["3.L.V.3.a"], dok: 2,
      prompt: "Read this sentence from paragraph 8: \"Sticky filling had oozed out and puddled on the needles.\" Choose the meaning of oozed.",
      text: "In paragraph 8, the word oozed means {0}.",
      slots: [
        { options: ["flowed out slowly", "dried up quickly", "turned a new color", "popped up high"], answer: 0 }
      ],
      clue: "Use the clues around the word. The cakes split open, the filling is sticky, and it ends up in a puddle. How would sticky filling move?",
      why: "Oozed means flowed out slowly. The cakes split open, and the sticky filling came out and made a puddle on the needles. Thick, sticky things flow out slowly."
    },
    {
      id: "R-LIT-02-q3", type: "hottext", points: 1, std: ["3.T.T.1.c", "3.T.RA.2.a"], dok: 2,
      prompt: "Select the sentence that shows how Min-ji feels when she first sees her steamed cakes.",
      source: "p1",
      targets: ["p1:7:1", "p1:7:3", "p1:8:1", "p1:8:2", "p1:8:3", "p1:8:4", "p1:10:2"],
      answer: ["p1:8:1"],
      pick: 1,
      clue: "Some sentences tell what Min-ji sees. Look for the one that tells what is happening inside her.",
      why: "The answer is \"When Grandmother lifted the lid, my heart sank.\" When your heart sinks, you feel suddenly sad or let down. The other sentences describe the cakes, the kitchen, or what Grandmother does and says, not Min-ji's feelings."
    },
    {
      id: "R-LIT-02-q4", type: "ms", points: 2, std: ["3.T.T.1.d"], dok: 2,
      prompt: "How is Joon's way of making songpyeon different from Min-ji's first way? Choose TWO answers.",
      pick: 2,
      choices: [
        { text: "Joon rolls each ball of dough until it is smooth.", correct: true },
        { text: "Joon adds just a little filling to each cake.", correct: true },
        { text: "Joon makes more cakes than Min-ji does." },
        { text: "Joon hurries so he can go outside and play." },
        { text: "Joon stuffs a big spoonful of filling inside." },
        { text: "Joon steams his cakes on a bed of pine needles." }
      ],
      clue: "Read paragraphs 4 and 5 side by side. Find things Joon does that Min-ji does not do the first time.",
      why: "Joon rolls each ball until it is smooth and adds just a little filling. Min-ji rushes and stuffs in a big spoonful. Grandmother steams everyone's cakes on pine needles, so that is not a difference."
    },
    {
      id: "R-LIT-02-q5", type: "order", points: 2, std: ["3.T.T.1.b"], dok: 2,
      prompt: "Put these events from the story in the order they happen.",
      steps: [
        "Min-ji hurries to make a big pile of cakes.",
        "Grandmother steams Min-ji's first batch of cakes.",
        "Min-ji sees that many of her cakes split open.",
        "Grandmother tells Min-ji to take her time.",
        "Min-ji's second batch of cakes comes out whole."
      ],
      clue: "Find each event in the story. The problem has to happen before Grandmother can give advice about it.",
      why: "Min-ji first hurries to make a big pile. Grandmother steams that first batch, and Min-ji sees many have split. Then Grandmother tells her to take her time. Last, her second batch comes out whole."
    },
    {
      id: "R-LIT-02-q6", type: "dropdown", points: 2, std: ["3.T.T.1.b"], dok: 2,
      prompt: "Choose the words that best complete this summary of the story.",
      text: "Min-ji makes her first songpyeon {0}, so many of them split open in the steam. After Grandmother's advice, she {1}, and every cake comes out whole.",
      slots: [
        { options: ["in a big hurry", "slowly and carefully", "with Joon's help", "with very little filling"], answer: 0 },
        { options: ["works slowly and carefully like Joon", "works even faster to beat Joon", "adds more filling to each cake", "asks Joon to make her cakes"], answer: 0 }
      ],
      clue: "A summary tells the problem and how it gets solved. Ask what caused the cakes to split, and what Min-ji does differently the second time.",
      why: "Min-ji makes her first cakes in a big hurry, so they split. After Grandmother's advice, she works slowly and carefully like Joon, and every cake comes out whole."
    },
    {
      id: "R-LIT-02-q7", type: "ebsr", points: 2, std: ["3.T.T.1.c", "3.T.RA.2.a"], dok: 3,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "What is the central message of the story?",
        choices: [
          { text: "Doing a job carefully matters more than doing it fast.", correct: true },
          { text: "Making the most cakes shows that you worked the hardest." },
          { text: "Making many things is better than making a few." },
          { text: "The oldest person in a family should do the cooking." }
        ]
      },
      partB: {
        prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Take your time, and it will hold together.\"", correct: true },
          { text: "\"Look how many I made!\" I said, holding up my tray." },
          { text: "She laid the cakes on a bed of pine needles and steamed them." },
          { text: "The kitchen filled with a clean, piney smell." }
        ]
      },
      clue: "The central message is the big lesson Min-ji learns. Compare how her cakes turn out the first time and the second time, and ask what made the difference. For Part B, choose the sentence that best explains that difference.",
      why: "Part A: The central message is that doing a job carefully matters more than doing it fast. Part B: Grandmother says, \"Take your time, and it will hold together,\" and when Min-ji slows down, her cakes come out whole. Min-ji's big pile is the batch that split, so making the most cakes was not the lesson, and Grandmother steaming the cakes does not show who should cook."
    }
  ]
});
