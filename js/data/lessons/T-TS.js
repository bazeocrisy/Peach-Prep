/* Lessons: 3.T.SS.1.a Text structures (sequence, cause and effect, problem and solution, compare and contrast, description). Schema: docs/SPEC.md §8 and §8b. */
PP.addLesson({
  key: "TS-SEQ",
  code: "3.T.SS.1.a",
  codes: ["3.T.SS.1.a", "3.T.T.2.b"],
  title: "Sequence: first, next, last",
  clues: {
    words: ["first", "next", "then", "after that", "later", "finally"],
    ask: "What happened first? Next? Last?",
    draw: "Draw a row of boxes with arrows between them: First → Next → Then → Last. Write one step in each box."
  },
  coach: {
    mixup: "Sequence is about ORDER. Problem and solution is about what goes wrong. A text can have both. If your child mixes them up, ask: \"Is the author showing what goes wrong, or the steps in order?\"",
    strong: "\"First you fill the cup with soil, then you push the seed in, then you water it, and last you put it in the sun and wait.\" The steps are in order, with time words.",
    notyet: "Steps out of order, or every single detail with no order words. Ask: \"Which one has to happen first? How do you know?\"",
    ido: "Tell how to make a sandwich, out of order on purpose: \"I eat it, then I get the bread...\" Let your child laugh and fix it. Then say, \"That's why authors use time words.\"",
    wedo: "Read the seed example in Learn It together. Your child finds each time word and tells which step it starts.",
    youdo: "Your child tells you how to do something they know well, like getting ready for school, using first, next, then and finally.",
    everyday: "Ask your child to tell you how to do something step by step: brush teeth, make cereal, set the table. Listen for time words."
  },
  teach: {
    big: "Sequence means the order matters. Time words like first, next and finally help me follow each step.",
    points: [
      "Some texts tell steps or events in a certain order. You see this in how-to directions, recipes, life cycles and stories that walk through a day.",
      "First tells what starts it. Next and then tell the middle steps. Finally tells how it ends.",
      "Time words are clue words. When you see one, ask: What happened first? Next? Last?",
      "If you mixed up the steps, the text would not make sense. You cannot water a seed before you plant it!",
      /* B2 (expansion 2026-10-22, author b2b): models the science-process and history items in core. */
      "Science and history texts use sequence, too. A science text can tell how something in nature changes, one step after another, and each step can lead to the next. A history text tells events in time order, with dates and words like years later. Each paragraph or section can have its own job, such as asking a question or telling what happens afterward."
    ],
    words: [
      { term: "sequence", means: "the order that things happen in" },
      { term: "step", means: "one thing that happens, in order, in a job or in a process" },
      { term: "time words", means: "clue words like first, next, then and finally that show order, and words like later or over many years that show time passing" }
    ],
    example: {
      label: "What it looks like",
      lines: ["Planting a seed takes care. FIRST, fill a cup with soil. NEXT, push the seed in about as deep as your fingertip. THEN water it until the soil is damp. AFTER THAT, set the cup in a sunny window. FINALLY, wait about a week for a green sprout."],
      note: "The words in CAPS are time words. They show the order of the steps, from filling the cup to seeing the sprout."
    },
    tip: "On the test, you may put events in order or tell what happened right before or right after something. Find the time clue words first."
  },
  learn: [
    {
      /* B2 review fix (SHOULD-14 / NOTE-15): replaces a grade 1 cereal example with a grade 3 one
         that also models why one step must finish before the next. */
      show: ["Our class made a newspaper. First, each student wrote a short story. Next, Ms. Diaz read the stories and marked any mistakes. After the stories were fixed, the class typed them on the computer. Finally, the newspaper was printed and handed out to every family."],
      ask: "What happened first and last? Why were the stories fixed before they were typed?",
      steps: [
        "Find the clue words: First, Next, After, Finally.",
        "First tells the start: each student wrote a story. Finally tells the end: the newspaper was printed and handed out.",
        "\"After the stories were fixed\" shows that one step had to be finished before the next one could start. Fixing first means the typed stories have no mistakes."
      ],
      answer: "First, each student wrote a story. Last, the newspaper was printed and handed out. The stories were fixed before typing so the printed newspaper would not have mistakes."
    },
    {
      show: ["Mia wanted to paint. First, she put on a smock. After that, she filled a cup with water. Later, she painted a red barn."],
      ask: "What did Mia do right after she put on a smock?",
      steps: [
        "Find the step that says \"put on a smock.\" It starts with First.",
        "Look for the next clue word: After that.",
        "Read what comes after that clue word."
      ],
      answer: "Right after she put on a smock, Mia filled a cup with water."
    },
    {
      show: ["Then the chick pushes out of the shell. First, the hen sits on her egg to keep it warm. Next, the chick pecks a small hole in the shell."],
      ask: "These steps are mixed up. What is the right order?",
      steps: [
        "Find the clue words: Then, First, Next.",
        "Ask: Which one has to happen first? The clue word First tells you.",
        "Put Next after First, and Then after Next. Check that it makes sense: the chick pecks a hole before it pushes out."
      ],
      answer: "The hen sits on the egg, the chick pecks a hole, and then the chick pushes out."
    }
  ],
  parent: "Ask your child to tell you how to do something step by step, like making a snack or packing a backpack. Listen for first, next, then and finally, and ask, \"What would happen if two steps switched places?\"",
  passages: [
    { id: "p1", title: "Shake Up Some Butter", genre: "Informational text",
      paragraphs: [
        ["Did you know you can make butter in a jar?", "All you need is heavy cream, a clean jar with a tight lid and strong arms."],
        ["First, let the cream sit out for a little while so it is not ice cold.", "Next, pour the cream into the jar until it is about half full.", "Then screw the lid on tight."],
        ["Now it is time to shake!", "Shake the jar hard, up and down.", "After a few minutes, the cream will get thick and fluffy.", "That is whipped cream.", "Keep shaking."],
        ["Later, you will hear a thump inside the jar.", "A yellow lump has formed, and thin, watery liquid is all around it.", "The lump is butter!", "The liquid is called buttermilk."],
        ["After that, pour off the buttermilk.", "Rinse the butter in cold water.", "Finally, spread your fresh butter on a warm piece of toast."]
      ] },
    { id: "p2", title: "Peach Cobbler with Grandpa", genre: "Literary text",
      paragraphs: [
        ["On Saturday, Grandpa Earl showed Keisha how to make his peach cobbler.", "\"A Georgia summer needs a Georgia dessert,\" he said."],
        ["First, they washed six ripe peaches.", "Grandpa sliced them while Keisha watched.", "Next, Keisha put a stick of butter in a baking pan.", "Grandpa set the pan in the hot oven so the butter would melt."],
        ["Then Keisha stirred flour, sugar and milk in a big bowl.", "The batter was thick and smooth, like pancake batter."],
        ["After that, Grandpa took the pan out of the oven.", "Keisha poured the batter right on top of the melted butter.", "She did not stir it.", "She spooned the peaches over the batter, and Grandpa slid the pan back into the oven."],
        ["Later, the whole kitchen smelled sweet.", "Grandpa opened the oven door.", "The top of the cobbler was puffy and golden brown."],
        ["Finally, they let it cool, and each of them ate a big bowl.", "\"Next summer,\" Keisha said, \"I will make it for you.\""]
      ] },
    /* B2 (expansion 2026-10-22, author b2b): p3 and p4 are used only by core (p3 set 2, p4 set 3).
       Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "How Water Carves a Cave", genre: "Informational text",
      paragraphs: [
        ["Deep under the hills of north Georgia, there are caves big enough to walk through.", "How did these rooms of rock get there?", "Water made them, one drop at a time."],
        ["First, rain falls and soaks into the ground.", "As the water trickles through the soil, it picks up a gas from dead leaves and roots.", "The gas turns the water a little bit sour, like very weak lemon juice."],
        ["Next, the sour water seeps down into cracks in a rock called limestone.", "Limestone is soft enough that sour water can slowly eat it away.", "The water wears down the rock and carries tiny bits of it off."],
        ["Over thousands of years, the cracks grow wider and wider.", "Some of them become tunnels.", "Finally, a few tunnels grow into big, hollow rooms.", "A cave has formed!"],
        ["The water is not done yet.", "Drops still drip from the cave's ceiling.", "Each drop leaves behind a speck of rock.", "After a very long time, the specks build up into stone icicles called stalactites."]
      ] },
    /* B2 review fix: hotel removed (first hotel was 1846), 1837 is when the end point was chosen
       (building began in 1838), the "too long" complaint and the engineer's suggestion are kept as
       two different people, and the origin of the name is given as uncertain. */
    { id: "p4", title: "How Atlanta Got Its Name", genre: "Informational text",
      paragraphs: [
        ["## A Stake in the Ground"],
        ["In 1837, railroad planners chose the spot where a new railroad to Tennessee would end.", "Workers drove a stake into the red clay to mark it.", "People called the spot Terminus.", "The word means \"the end of the line.\""],
        ["## A Town Grows"],
        ["Soon, people came to work on the railroad.", "Then houses and a store went up near the tracks.", "Before long, Terminus was a small town.", "In 1843, the town got a new name, Marthasville.", "It was named for Martha Lumpkin, a governor's daughter."],
        ["## The Name That Stuck"],
        ["Some railroad men said Marthasville was too long a name.", "Then a railroad engineer suggested a new name, Atlanta.", "No one knows for sure where the name came from.", "It may come from the word Atlantic, as in the Western and Atlantic Railroad.", "In 1845, the town became Atlanta.", "Today, Atlanta is the capital of Georgia and one of the biggest cities in the South."]
      ] }
  ],
  practice: [
    { id: "SK-TSSEQ-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "What is the FIRST step in making butter?",
      choices: [
        { text: "Let the cream sit out so it is not ice cold.", correct: true },
        { text: "Pour the cream into the jar until it is half full." },
        { text: "Screw the lid on the jar very tight." },
        { text: "Shake the jar hard, up and down." }
      ],
      clue: "Find the time clue word that starts the steps. Then read the sentence that begins with it.",
      why: "The answer is \"Let the cream sit out so it is not ice cold.\" Paragraph 2 starts that step with the clue word First. Every other step comes after it." },
    { id: "SK-TSSEQ-P2", type: "hottext", points: 1, dok: 1, passages: ["p1"],
      prompt: "Which sentence uses a clue word to tell the LAST step? Choose the sentence in the passage.",
      targets: ["p1:2:1", "p1:2:2", "p1:4:1", "p1:5:1", "p1:5:3"],
      answer: ["p1:5:3"], pick: 1,
      clue: "Each of these sentences starts with a time clue word. Ask which clue word means the steps are at the end.",
      why: "The answer is \"Finally, spread your fresh butter on a warm piece of toast.\" The clue word Finally tells you this is the last step. The other clue words come earlier." },
    { id: "SK-TSSEQ-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "How does the author organize this passage?",
      choices: [
        { text: "It gives the steps for making butter in order.", correct: true },
        { text: "It tells what goes wrong when butter is made and how to fix it." },
        { text: "It shows how butter and whipped cream are alike and different." },
        { text: "It gives facts about butter in no special order." }
      ],
      clue: "Ask: Is the author showing what goes wrong, or what to do in order? Look at the words that start the sentences in paragraphs 2 and 5.",
      why: "The answer is \"It gives the steps for making butter in order.\" Time words like First, Next and Then show the order. Nothing goes wrong in the passage, and it does not compare two things." },
    { id: "SK-TSSEQ-P4", type: "order", points: 2, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.2.b"],
      prompt: "Put the steps for making butter in order.",
      steps: [
        "Pour the cream into the jar.",
        "Shake the jar until the cream turns into whipped cream.",
        "Hear a thump when a yellow lump forms.",
        "Pour off the buttermilk.",
        "Rinse the butter in cold water."
      ],
      /* B2 (b2b): the last step was "Spread the butter on toast", which is the key of Together item P2;
         it is now the rinse step, so Together no longer pre-answers this core item. */
      clue: "Use the time clue words in the passage. Ask: Which one has to happen first? What comes after it?",
      why: "The order is: pour the cream into the jar, shake until it turns into whipped cream, hear a thump when the lump forms, pour off the buttermilk, and rinse the butter in cold water. The time clue words in the passage show this order." },
    { id: "SK-TSSEQ-P5", type: "mc", points: 1, dok: 3, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.2.b"],
      prompt: "What would most likely happen if you shook the jar BEFORE you screwed the lid on?",
      choices: [
        { text: "The cream would spill out of the jar.", correct: true },
        { text: "The butter would form much faster." },
        { text: "The cream would turn ice cold." },
        { text: "The buttermilk would turn yellow." }
      ],
      clue: "Think about why the lid step comes before the shaking step. What does a lid do for a jar?",
      why: "The answer is \"The cream would spill out of the jar.\" The lid keeps the cream inside while you shake. That is why the author puts the lid step before the shaking step. The order of steps matters." },
    { id: "SK-TSSEQ-P6", type: "ms", points: 2, dok: 1, passages: ["p1"],
      prompt: "Read paragraphs 4 and 5. Which TWO words or phrases are time clue words that show the order of the steps?",
      pick: 2,
      choices: [
        /* B2 (b2b): the weak distractors ("A yellow lump", "Rinse the butter") were replaced with
           place phrases from the same paragraphs, a real when/where mix-up. P6 stays in Together. */
        { text: "Later", correct: true },
        { text: "After that", correct: true },
        { text: "inside the jar" },
        { text: "all around it" },
        { text: "in cold water" }
      ],
      clue: "Time clue words tell WHEN something happens. Words that tell WHERE are not time clue words.",
      why: "The answers are Later and After that. They tell when each step happens. \"Inside the jar\", \"all around it\" and \"in cold water\" tell where something is or happens, not when." }
  ],
  /* ---------- B2 core (expansion 2026-10-22, author b2b; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five. { ref } reuses Try items P4 and P5 by id (they stay in
     practice; the engine leaves them out of Together, so Together shows P1, P2, P3 and the revised P6).
     New ids are numbered by their place in the fifteen. Hints and Show me how for refs and Together
     items are in addons. Author log: docs/expansion-2026-10-22/batches/B2-b2b-author-log.md.
     NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TSSEQ-P4" },
      { id: "SK-TSSEQ-C02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p1"],
        prompt: "Why does the author begin with paragraph 1?",
        choices: [
          { text: "It tells what you need, so you can gather everything before the first step.", correct: true },
          { text: "It tells the first step, so you know how to start shaking the cream." },
          { text: "It tells what can go wrong, so you know how to fix a leaky jar." },
          { text: "It asks a question, so you know the passage will explain why cream turns into butter." }
        ],
        clue: "Each part of a how-to text has a job. Ask what paragraph 1 gives the reader.",
        hints: [
          "Each part of a how-to text has a job. Ask what paragraph 1 gives the reader.",
          "Reread paragraph 1. Then compare it with the first sentence of paragraph 2.",
          "Nothing goes wrong in paragraph 1, and no jar leaks, so it is not telling a problem. Test each choice that is left against what paragraph 1 says."
        ],
        how: [
          "Paragraph 1 asks a question and then lists heavy cream, a clean jar with a tight lid and strong arms.",
          "No step starts until paragraph 2, which begins with the clue word First.",
          "The answer is \"It tells what you need, so you can gather everything before the first step.\"",
          "Paragraph 1 gives no step and tells no problem. It does ask a question, but the passage tells how to make butter, never why cream turns into butter."
        ],
        misconception: "A common mix-up is thinking every paragraph in a how-to text is a step. The opening paragraph often gets the reader ready instead.",
        why: "The answer is \"It tells what you need, so you can gather everything before the first step.\" Paragraph 1 lists the cream, the jar and strong arms. The steps begin in paragraph 2 with First, and nothing goes wrong in the passage." },
      { ref: "SK-TSSEQ-P5" },
      { id: "SK-TSSEQ-C04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p1"],
        stem: ["After that, pour off the buttermilk."],
        prompt: "Read the sentence from paragraph 5 in the box. A student changes \"After that\" to \"First.\" Why would this change confuse a reader?",
        choices: [
          { text: "First would mean this is the starting step, but there is no buttermilk until after the shaking.", correct: true },
          { text: "First would mean this is the starting step, but the lump of butter forms after the buttermilk is poured off." },
          { text: "First is not a time clue word, so a reader could not tell when to do this step at all." },
          { text: "First would mean this step happens at the same time as the shaking." }
        ],
        clue: "Time clue words tell where a step belongs in the order. Changing a clue word can change what a reader thinks happens when.",
        hints: [
          "Time clue words tell where a step belongs in the order. Changing a clue word can change what a reader thinks happens when.",
          "Ask what the word First would tell a reader about this step. Then compare that with the order of paragraphs 2 through 5.",
          "First is a time clue word, just like After that, so rule out the choice that says it is not. Check each reason that is left against the order of paragraphs 2 to 5."
        ],
        how: [
          "After that tells the reader that pouring off the buttermilk comes after the earlier steps.",
          "The buttermilk is named for the first time in paragraph 4, after lots of shaking makes the lump of butter.",
          "If the step began with First, a reader would think to pour off buttermilk before there is any. The answer is \"First would mean this is the starting step, but there is no buttermilk until after the shaking.\"",
          "Paragraph 4 tells that the lump of butter and the buttermilk form together, before anything is poured off, so the other starting-step reason is wrong. First never means at the same time, and it is a time word."
        ],
        misconception: "A common mix-up is thinking any time clue word can start any step. Each one tells where the step belongs in the order.",
        why: "The answer is \"First would mean this is the starting step, but there is no buttermilk until after the shaking.\" The buttermilk forms in paragraph 4, so this step must come after the shaking. The lump forms with the buttermilk, not after it is poured off, and First is a time word that never means at the same time." },
      { id: "SK-TSSEQ-C05", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Paragraph A: Checking out a book at our school library is easy. First, choose a book from the shelves. Next, carry it to the front desk. Then Mr. Ellis scans your card and the book. Last, he stamps a date inside the cover so you know when to bring it back.", "Paragraph B: Our art room is a colorful place. Paintings by every class cover the walls. Shelves hold jars of brushes, such as fat ones and skinny ones. In addition, a big sink in the corner is for washing up."],
        prompt: "Read the two paragraphs in the box. How are they organized differently?",
        choices: [
          { text: "Paragraph A tells steps in the order they happen, and Paragraph B gives details about one place.", correct: true },
          { text: "Paragraph A gives details about one place, and Paragraph B tells steps in the order they happen." },
          { text: "Both paragraphs tell steps in the order they happen, and both use time words to show it." },
          { text: "Paragraph A tells a problem and its solution, and Paragraph B compares two different rooms." }
        ],
        clue: "To find how a paragraph is organized, look at its clue words and ask what job they do.",
        hints: [
          "To find how a paragraph is organized, look at its clue words and ask what job they do.",
          "Find the clue words in Paragraph A. Then find the clue words in Paragraph B.",
          "The art room paragraph does not tell about a problem, so rule out the choice about a problem and a solution. Then match each paragraph to the job of its clue words."
        ],
        how: [
          "Paragraph A uses the time words First, Next, Then and Last. It tells the steps for checking out a book, in order.",
          "Paragraph B uses such as and in addition. It gives details about one place, the art room.",
          "The answer is \"Paragraph A tells steps in the order they happen, and Paragraph B gives details about one place.\"",
          "The choice that puts the steps in Paragraph B has the paragraphs backward, Paragraph B has no time words, and neither paragraph tells a problem and a solution."
        ],
        misconception: "A common mix-up is calling any paragraph with a list a sequence. A sequence needs steps that happen in order, shown with time words.",
        why: "The answer is \"Paragraph A tells steps in the order they happen, and Paragraph B gives details about one place.\" Paragraph A uses First, Next, Then and Last for steps. Paragraph B uses such as and in addition to add details about the art room." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TSSEQ-C06", type: "order", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p3"],
        prompt: "Put the steps in the order they happen as water carves a cave.",
        steps: [
          "Rain soaks into the ground.",
          "The water picks up a gas from dead leaves and roots.",
          "The water seeps into cracks in the limestone.",
          "The cracks grow into tunnels and rooms.",
          "Dripping water builds stone icicles."
        ],
        clue: "In a science text, a process happens in order, and each step leads to the next. Use the time clue words to follow it.",
        hints: [
          "In a science text, a process happens in order, and each step leads to the next. Use the time clue words to follow it.",
          "Find each step in the article and note its paragraph.",
          "Rain soaking into the ground comes with the clue word First, so it goes at the start. Place the other steps by asking what each one needs to happen before it."
        ],
        how: [
          "Paragraph 2: first, rain soaks into the ground. As it trickles through the soil, it picks up a gas from dead leaves and roots.",
          "Paragraph 3: next, the water seeps into cracks in the limestone.",
          "Paragraph 4: over thousands of years, the cracks grow into tunnels and rooms. Paragraph 5: after a very long time, dripping water builds stone icicles.",
          "The order is: rain soaks in, the water picks up a gas, it seeps into cracks, the cracks grow into tunnels and rooms, and dripping water builds stone icicles."
        ],
        misconception: "A common mix-up is putting the stone icicles before the cave. They form only after there is a cave ceiling for water to drip from.",
        why: "The order is: rain soaks into the ground, the water picks up a gas, the water seeps into cracks in the limestone, the cracks grow into tunnels and rooms, and dripping water builds stone icicles. The clue words First, Next, Over thousands of years and After a very long time show this order." },
      { id: "SK-TSSEQ-C07", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p3"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why does the rain need to pass through the soil before it can carve a cave?",
          choices: [
            { text: "Passing through the soil makes the water sour enough to eat away limestone.", correct: true },
            { text: "The soil cleans the water so that it can flow faster into the cracks." },
            { text: "The soil fills up the cracks so that the water has a path to follow." },
            { text: "The soil keeps the water cold until it reaches the rock down below." }
          ] },
        partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
          choices: [
            { text: "\"The gas turns the water a little bit sour, like very weak lemon juice.\"", correct: true },
            { text: "\"First, rain falls and soaks into the ground.\"" },
            { text: "\"Some of them become tunnels.\"" },
            { text: "\"Drops still drip from the cave's ceiling.\"" }
          ] },
        clue: "In a science sequence, an early step often makes a later step possible. Ask what the early step changes.",
        hints: [
          "In a science sequence, an early step often makes a later step possible. Ask what the early step changes.",
          "Reread paragraphs 2, 3 and 4. Follow what happens to the water on its way from the soil to the rock.",
          "The article never says the soil makes the water flow faster, so rule out that choice. For Part B, check that the sentence you choose connects to your Part A answer."
        ],
        how: [
          "Paragraph 2 says the water picks up a gas in the soil, and the gas turns it a little bit sour.",
          "Paragraph 3 says limestone is soft enough that sour water can slowly eat it away.",
          "Part A: Passing through the soil makes the water sour enough to eat away limestone. Part B: \"The gas turns the water a little bit sour, like very weak lemon juice.\"",
          "The article never says the soil cleans the water, fills the cracks or keeps the water cold. The other Part B sentences tell steps but not what the soil does to the water."
        ],
        misconception: "A common mix-up is treating each step as separate. In a science process, one step changes something so the next step can happen.",
        why: "Part A: Passing through the soil makes the water sour enough to eat away limestone. Part B: \"The gas turns the water a little bit sour, like very weak lemon juice.\" The gas the water picks up in the soil turns it sour, and paragraph 3 says sour water can wear away limestone. The article never says the soil cleans the water, fills the cracks or keeps it cold." },
      { id: "SK-TSSEQ-C08", type: "hottext", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p3"],
        prompt: "Which TWO sentences use time words that tell how much time passes, not only the order? Choose two sentences in the passage.",
        targets: ["p3:2:1", "p3:3:1", "p3:4:1", "p3:4:3", "p3:5:1", "p3:5:4"],
        answer: ["p3:4:1", "p3:5:4"], pick: 2,
        clue: "Some time words tell order, like then and after that. Others tell how much time passes. Look for the second kind.",
        hints: [
          "Some time words tell order, like then and after that. Others tell how much time passes. Look for the second kind.",
          "Read every sentence you can choose, from paragraph 2 to paragraph 5, and find its time words. Choose two.",
          "Finally tells which step is the last one in making the cave. It does not tell how long that step took. Check the other time words the same way."
        ],
        how: [
          "First and Next tell the order of the steps. Finally tells the last step in making the cave. None of them tells how long a step takes.",
          "Over thousands of years tells that the cracks take a very long time to grow.",
          "After a very long time tells that the stone icicles take a long time to build up.",
          "The answers are \"Over thousands of years, the cracks grow wider and wider.\" and \"After a very long time, the specks build up into stone icicles called stalactites.\""
        ],
        misconception: "A common mix-up is choosing Finally because it comes late. Finally tells which step is last, not how long it took.",
        why: "The answers are \"Over thousands of years, the cracks grow wider and wider.\" and \"After a very long time, the specks build up into stone icicles called stalactites.\" Both tell how much time passes. First, Next and Finally tell order, and \"not done yet\" does not tell how long anything takes." },
      { id: "SK-TSSEQ-C09", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "Choose the words that best complete the sentences about how the article is put together.",
        text: "Paragraph 1 {0}. Paragraphs 2 through 4 {1}.",
        slots: [
          { options: ["asks a question that the article answers", "tells the last step in making a cave", "compares two different caves"], answer: 0 },
          { options: ["tell the steps that turn rainwater into a cave", "describe what the inside of a cave looks like", "tell about a problem and how it was solved"], answer: 0 }
        ],
        clue: "Each part of an article has a job. Ask what each part adds to the whole.",
        hints: [
          "Each part of an article has a job. Ask what each part adds to the whole.",
          "Say in a few words what paragraph 1 does for a reader before any step begins. Then do the same for paragraphs 2 through 4 together.",
          "Paragraphs 2 through 4 never tell about anything going wrong, so they do not tell a problem and how it was solved. Read each sentence with the choices that are left."
        ],
        how: [
          "Paragraph 1 asks, \"How did these rooms of rock get there?\" The rest of the article answers it.",
          "Paragraphs 2 through 4 use First, Next and Finally to tell the steps from rain to a cave.",
          "So the answers are: asks a question that the article answers; tell the steps that turn rainwater into a cave.",
          "Paragraph 1 gives no step and names only one kind of cave, and paragraphs 2 through 4 tell no problem and do not describe the inside of a cave."
        ],
        misconception: "A common mix-up is thinking every paragraph in a sequence text tells a step. An opening paragraph can set up a question that the steps answer.",
        why: "Paragraph 1 asks a question that the article answers. Paragraphs 2 through 4 tell the steps that turn rainwater into a cave. The article never compares two caves or tells a problem." },
      { id: "SK-TSSEQ-C10", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
        stem: ["(1) In 1910, the town of Pine Ridge had no library.", "(2) That year, Ada Brooks set a shelf of her own books on her front porch and let neighbors borrow them.", "(3) In 1975, the town built a large new library on Main Street.", "(4) By 1932, so many people came to the porch that the town moved the books into an old bank building.", "(5) Today, the library on Main Street lends books, movies and even fishing poles."],
        prompt: "A student wrote this history of a town library. One sentence is out of time order. Which change fixes the order?",
        choices: [
          { text: "Move sentence 4 so it comes right after sentence 2.", correct: true },
          { text: "Move sentence 3 so it comes right after sentence 1." },
          { text: "Move sentence 5 so it comes right after sentence 2." },
          { text: "Move sentence 2 so it comes right after sentence 4." }
        ],
        clue: "In a history text, events go in time order. Dates and words like that year and today tell when each event happened.",
        hints: [
          "In a history text, events go in time order. Dates and words like that year and today tell when each event happened.",
          "Write down the year or time word in each sentence. Then list them from earliest to latest.",
          "Sentence 5 starts with Today, so it already belongs at the end. Check where each of the other years fits."
        ],
        how: [
          "The times are: 1910, that year (1910), 1975, 1932 and today.",
          "From earliest to latest, they go 1910, 1910, 1932, 1975 and today. So the 1932 sentence must come before the 1975 sentence.",
          "The answer is \"Move sentence 4 so it comes right after sentence 2.\" Then the porch gets crowded before the town builds the new library.",
          "Sentence 5 already belongs at the end, and moving sentence 2 or 3 would break the order."
        ],
        misconception: "A common mix-up is trusting the order the sentences are written in. Check the dates to see when each event really happened.",
        why: "The answer is \"Move sentence 4 so it comes right after sentence 2.\" The events happened in 1910, 1932, 1975 and today, so the 1932 sentence belongs before the 1975 sentence. The other moves put a later event before an earlier one." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TSSEQ-C11", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4"],
        prompt: "What was the town called when each event happened? Match each event to the town's name at that time.",
        cols: ["Terminus", "Marthasville", "Atlanta"],
        rows: [
          { text: "A store went up near the tracks.", answer: 0 },
          { text: "Some railroad men said the name was too long.", answer: 1 },
          { text: "An engineer suggested the name Atlanta.", answer: 1 },
          { text: "The town became one of the biggest cities in the South.", answer: 2 }
        ],
        clue: "In a history text, events go in time order. Keep track of what the town was called at each point.",
        hints: [
          "In a history text, events go in time order. Keep track of what the town was called at each point.",
          "Find the two sentences that tell when the town got a new name. Each event happened either before or after them.",
          "The store is in the section \"A Town Grows,\" before the town got its second name, so it goes with Terminus. Sort the other events the same way."
        ],
        how: [
          "The spot was called Terminus from 1837. In 1843, it got the name Marthasville. In 1845, it became Atlanta.",
          "The store is told about before the 1843 name change, so it goes with Terminus.",
          "Some railroad men said Marthasville was too long, and then an engineer suggested Atlanta. Both happened before the 1845 change, so both go with Marthasville.",
          "Atlanta is one of the biggest cities in the South today, so that goes with Atlanta."
        ],
        misconception: "A common mix-up is matching an event to the name in its section heading. The railroad men and the engineer are in the section \"The Name That Stuck,\" but they spoke while the town was still Marthasville.",
        why: "The store went up while the town was Terminus. The railroad men said the name was too long, and an engineer suggested Atlanta, while it was still Marthasville, before the 1845 change. Being one of the biggest cities in the South is true of Atlanta today." },
      { id: "SK-TSSEQ-C12", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why did a town grow up at Terminus?",
          choices: [
            { text: "The railroad brought workers, and houses and a store were built near the tracks.", correct: true },
            { text: "Martha Lumpkin asked families from all over Georgia to move to the spot." },
            { text: "A railroad engineer gave the spot a shorter name that people liked better." },
            { text: "The spot was already the capital of Georgia, so many people lived there." }
          ] },
        partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
          choices: [
            { text: "\"Soon, people came to work on the railroad.\"", correct: true },
            { text: "\"In 1843, the town got a new name, Marthasville.\"" },
            { text: "\"In 1845, the town became Atlanta.\"" },
            { text: "\"Today, Atlanta is the capital of Georgia and one of the biggest cities in the South.\"" }
          ] },
        clue: "In a history text, one event can lead to the next. Ask what happened before the town grew.",
        hints: [
          "In a history text, one event can lead to the next. Ask what happened before the town grew.",
          "Reread the section \"A Town Grows.\" Pay attention to the order of the events in it.",
          "The engineer suggested a new name years after the town had already grown, so a later event cannot be the reason. For Part B, choose the sentence that matches your Part A answer."
        ],
        how: [
          "The section \"A Town Grows\" tells events in order. Soon, people came to work on the railroad. Then houses and a store went up near the tracks.",
          "Before long, Terminus was a small town. So the railroad is what made the town grow.",
          "Part A: The railroad brought workers, and houses and a store were built near the tracks. Part B: \"Soon, people came to work on the railroad.\"",
          "The new names came after the town had grown, Martha Lumpkin never asks anyone to move, and the article says Atlanta is the capital today, not back then."
        ],
        misconception: "A common mix-up is choosing a later event as the reason for an earlier one. A cause comes before what it causes.",
        why: "Part A: The railroad brought workers, and houses and a store were built near the tracks. Part B: \"Soon, people came to work on the railroad.\" The workers came first, then houses and a store, and then Terminus was a small town. The names and being the capital came later." },
      { id: "SK-TSSEQ-C13", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4"],
        stem: ["In 1847, Atlanta officially became a city."],
        prompt: "A student wants to add the sentence in the box to the article. Where does it belong? Choose the sentence in the passage that it should come right after.",
        targets: ["p4:2:1", "p4:4:3", "p4:4:4", "p4:6:1", "p4:6:5", "p4:6:6"],
        answer: ["p4:6:5"], pick: 1,
        clue: "A history text tells events in time order. To add a new event, find the events that happened just before and just after it.",
        hints: [
          "A history text tells events in time order. To add a new event, find the events that happened just before and just after it.",
          "Find every date in the article. The new sentence has a date, too.",
          "The 1837 sentence tells the earliest event in the article, and 1847 is ten years later, so the new sentence does not go right after it. Check the other dates and time words."
        ],
        how: [
          "The dates in order are 1837, 1843 and 1845. Then the article ends with Today.",
          "1847 comes after 1845 and before today.",
          "So the new sentence goes right after \"In 1845, the town became Atlanta.\" in the section \"The Name That Stuck.\"",
          "It cannot go after the 1837 or 1843 sentences, because the town did not become Atlanta until 1845, and the Today sentence tells about now."
        ],
        misconception: "A common mix-up is putting a new event at the very end. If the last sentence tells about today, an event from long ago belongs before it.",
        why: "The answer is \"In 1845, the town became Atlanta.\" The new sentence tells about 1847, which comes after 1845 and before today, so it belongs between those two sentences in the section \"The Name That Stuck.\"" },
      /* B2 review fix (MUST-4): was "How to Patch a Bike Tube", which 3.T.T.2.b keeps. New procedure, no bikes. */
      { id: "SK-TSSEQ-C14", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
        stem: ["How to Make a Paper Snowflake", "(1) First, fold a square of paper in half, corner to corner, to make a triangle.", "(2) Next, fold the triangle in half.", "(3) Then fold it in half one more time.", "(4) After that, cut small shapes along the edges. Each cut goes through all the layers at once.", "(5) Finally, unfold the paper and flatten it to see your snowflake."],
        prompt: "Read the directions in the box. Why do the directions say to fold the paper BEFORE you cut it?",
        choices: [
          { text: "Each cut goes through every layer, so the same shape repeats all around.", correct: true },
          { text: "Folded paper is stiffer, so the scissors will not tear it." },
          { text: "The folds must be made so there is something to unfold in step 5." },
          { text: "The fold lines show you where to draw the shapes before you cut." }
        ],
        clue: "In directions, one step often gets things ready for the next. Ask what the earlier step makes possible.",
        hints: [
          "In directions, one step often gets things ready for the next. Ask what the earlier step makes possible.",
          "Find the step each choice talks about. Then read the step the question names and the step that comes after it.",
          "The directions never say that folded paper is stiffer, so rule out that choice. For each choice that is left, ask: do the directions say it, or does it only sound possible?"
        ],
        how: [
          "Steps 1 to 3 fold the square into a small triangle with many layers.",
          "Step 4 says each cut goes through all the layers at once.",
          "So one cut makes the same shape in every layer, and the shapes repeat all around when you unfold it. The answer is \"Each cut goes through every layer, so the same shape repeats all around.\"",
          "The directions never say folded paper is stiffer or that fold lines show where to draw, and unfolding in step 5 is not the reason for folding."
        ],
        misconception: "A common mix-up is choosing a reason that only sounds possible. Use what the directions say happens in the next step.",
        why: "The answer is \"Each cut goes through every layer, so the same shape repeats all around.\" Step 4 says each cut goes through all the layers, and the layers come from folding first. The directions never say folded paper is stiffer or that the folds show where to draw, and unfolding is the result, not the reason." },
      { id: "SK-TSSEQ-C15", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        prompt: "Coach Reed wrote warm-up directions for the track team. Choose the time words that best complete them.",
        text: "First, jog two laps around the track to warm up your muscles. {0} your legs feel loose, stretch your arms and legs for five minutes. {1}, line up with your team for the relay race.",
        slots: [
          { options: ["Once", "Before", "Because"], answer: 0 },
          { options: ["Last", "Meanwhile", "First"], answer: 0 }
        ],
        clue: "Time words tell when each step happens. Pick words that keep the steps in order.",
        hints: [
          "Time words tell when each step happens. Pick words that keep the steps in order.",
          "Read the whole warm-up once. Ask which step happens after jogging and which step ends the warm-up.",
          "First is already used at the start, so it cannot also begin the step that ends the warm-up. Read each sentence with the words that are left."
        ],
        how: [
          "Jogging comes first, and it warms up your muscles. The stretch comes after the jog.",
          "Once means as soon as something has happened, so \"Once your legs feel loose\" puts the stretch after the jog.",
          "Lining up for the race ends the warm-up, so that step starts with Last.",
          "The answers are Once and Last. Before would put the stretch ahead of the jog that loosens your legs, and Meanwhile would mean lining up while you are still stretching."
        ],
        misconception: "A common mix-up is choosing a word that sounds like time but tells the wrong order, like Before or Meanwhile.",
        why: "The answers are Once and Last. Once your legs feel loose from jogging, you stretch, and last you line up for the race. Before and Meanwhile would put the steps in the wrong order, and Because does not tell when." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. `like` lists only the
     core items each one really practises (same component and task). */
  similar: [
    { id: "SK-TSSEQ-S01", type: "order", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-P4", "SK-TSSEQ-C06"],
      stem: ["Moving a plant to a bigger pot: Water the plant well as the very last step. Before that, add more soil around the roots and press it down. But you cannot add that soil until the plant is sitting in its new pot. Start by putting a few inches of fresh soil in the bottom of the new pot. Then slide the plant out of its old pot and set it on the new soil."],
      prompt: "Read the directions in the box. Put the steps in order.",
      steps: [
        "Put fresh soil in the bottom of the new pot.",
        "Slide the plant out of the old pot.",
        "Set the plant on the new soil.",
        "Add more soil around the roots.",
        "Water the plant well."
      ],
      clue: "Sequence means the order matters. Time words tell where each step belongs, even when the steps are not told in order.",
      hints: [
        "Sequence means the order matters. Time words tell where each step belongs, even when the steps are not told in order.",
        "The directions are not told in order. Find the words that tell where each step goes, like start, before that, until and last.",
        "Watering is the very last step, so it goes at the end. Place the other steps by asking what has to be done before each one."
      ],
      how: [
        "\"Start by\" tells the first step: put fresh soil in the bottom of the new pot.",
        "\"Then\" comes next: slide the plant out of its old pot and set it on the new soil.",
        "You cannot add soil around the roots until the plant is in its new pot, and that comes before watering.",
        "So the order is: fresh soil in the new pot, slide the plant out, set it on the new soil, add soil around the roots, and water it."
      ],
      misconception: "A common mix-up is putting the steps in the order they are told. Words like before that and until show the real order.",
      why: "The order is: put fresh soil in the new pot, slide the plant out of the old pot, set it on the new soil, add more soil around the roots, and water it. The words start by, then, until, before that and last show this order, even though the directions are not told in order." },
    { id: "SK-TSSEQ-S02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-P5", "SK-TSSEQ-C14"],
      stem: ["(1) First, sand the birdhouse until the wood feels smooth.", "(2) Next, wipe off all the dust with a damp cloth.", "(3) Then let the wood dry for an hour.", "(4) After that, brush on two coats of paint.", "(5) Finally, hang the birdhouse on a tree branch."],
      prompt: "Read the directions in the box. What would most likely happen if you painted the birdhouse BEFORE you let the wood dry?",
      choices: [
        { text: "The paint would go on wet wood and might not stick well.", correct: true },
        { text: "The dust from sanding would come back onto the wood." },
        { text: "The birdhouse would be too heavy to hang on a branch." },
        { text: "The wood would feel rough again under the paint." }
      ],
      clue: "In a sequence, one step often gets things ready for the next. Ask what job the earlier step does.",
      hints: [
        "In a sequence, one step often gets things ready for the next. Ask what job the earlier step does.",
        "Read each step all the way through, not just its first words, and ask what each one is for.",
        "Sanding makes the wood smooth, and nothing in the directions says paint would make it rough again, so rule out that choice. For each choice that is left, ask what the skipped step was for."
      ],
      how: [
        "Step 2 uses a damp cloth, so the wood is wet afterward.",
        "Step 3 lets the wood dry before any paint goes on, so the drying step gets the wood ready for paint.",
        "Painting before it dries would put paint on wet wood, and paint does not stick well to wet things. The answer is \"The paint would go on wet wood and might not stick well.\"",
        "The dust is already gone, and drying has nothing to do with how heavy the birdhouse is or how rough it feels."
      ],
      misconception: "A common mix-up is guessing a result that has nothing to do with the skipped step. Ask what that step was for.",
      why: "The answer is \"The paint would go on wet wood and might not stick well.\" The damp cloth in step 2 leaves the wood wet, and step 3 lets it dry before painting. The other results are not connected to drying." },
    { id: "SK-TSSEQ-S03", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C10", "SK-TSSEQ-C13"],
      /* B2 final-check fix (SHOULD-3): the undated sentence moved to position 4, so the near-miss "after
         sentence 2" makes the child compare 1960 with 1968. */
      stem: ["(1) In 1950, Oak Street School opened with just two classrooms.", "(2) In 1968, a gym was added so students could play inside on rainy days.", "(3) In 2001, the old gym was turned into a library.", "(4) Ten years after it opened, the school added six more classrooms.", "(5) Today, more than 400 students go to Oak Street School."],
      prompt: "A student wrote this history of a school. One sentence is out of time order. Which change fixes the order?",
      choices: [
        { text: "Move sentence 4 so it comes right after sentence 1.", correct: true },
        { text: "Move sentence 4 so it comes right after sentence 2." },
        { text: "Move sentence 3 so it comes right after sentence 1." },
        { text: "Move sentence 5 so it comes right after sentence 1." }
      ],
      clue: "In a history text, events go in time order. Some sentences give a date, and some tell time by counting from another event.",
      hints: [
        "In a history text, events go in time order. Some sentences give a date, and some tell time by counting from another event.",
        "Find the sentence that has no year. Work out what year it is talking about.",
        "Sentence 5 starts with Today, so it already belongs at the end. Check where the other events fit."
      ],
      how: [
        "Sentence 4 says ten years after the school opened. It opened in 1950, so that is 1960.",
        "The events in order are 1950, 1960, 1968, 2001 and today. So 1960 must come before the 1968 gym, not after it.",
        "The answer is \"Move sentence 4 so it comes right after sentence 1.\"",
        "Putting it after sentence 2 would put 1960 after 1968, and moving sentence 3 would put 2001 before 1968."
      ],
      misconception: "A common mix-up is skipping a sentence that has no year. Words like ten years after also tell when.",
      why: "The answer is \"Move sentence 4 so it comes right after sentence 1.\" Ten years after 1950 is 1960, which comes before the 1968 gym. After sentence 2 would put 1960 after 1968, and the other moves put later events before earlier ones." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting.
       Each like names one core item only, because the engine uses an extra question once.
       Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TSSEQ-S04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C02"],
      stem: ["Make a Sock Puppet", "Paragraph 1: A sock puppet can tell a story or sing a silly song. Anyone can make one in about ten minutes. It turns a lonely old sock into a new friend.", "Paragraph 2: First, find a clean sock, two buttons and a little glue. Next, glue the buttons on the toe of the sock for eyes. Then put your hand in the sock and open and close your fingers to make the puppet talk."],
      prompt: "Why does the author begin with Paragraph 1?",
      choices: [
        { text: "It tells what you will make and why it is fun, so you want to read the steps.", correct: true },
        { text: "It names the things to collect, so you can gather them before you begin." },
        { text: "It gives the first step, so you know how to start gluing." },
        { text: "It warns about a mistake, so you know how to fix a torn sock." }
      ],
      clue: "Each part of a how-to text has a job. Ask what Paragraph 1 gives the reader before any step starts.",
      hints: [
        "Each part of a how-to text has a job. Ask what Paragraph 1 gives the reader before any step starts.",
        "Reread Paragraph 1. Then look at how Paragraph 2 begins.",
        "Nothing goes wrong in Paragraph 1, so it is not warning about a mistake. Test each choice that is left against what Paragraph 1 says."
      ],
      how: [
        "Paragraph 1 says what a sock puppet can do and that anyone can make one in about ten minutes.",
        "It names no things to collect and gives no step. The things to collect come in Paragraph 2, which starts with First.",
        "The answer is \"It tells what you will make and why it is fun, so you want to read the steps.\"",
        "Paragraph 1 has no step and no mistake."
      ],
      misconception: "A common mix-up is thinking the first paragraph of a how-to text must list what you need. Check what this paragraph really says.",
      why: "The answer is \"It tells what you will make and why it is fun, so you want to read the steps.\" Paragraph 1 tells what a sock puppet can do and how quickly you can make one. The things to collect and the steps are in Paragraph 2, and nothing goes wrong in Paragraph 1." },
    { id: "SK-TSSEQ-S05", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C04"],
      stem: ["How to Make a S'more", "First, hold a marshmallow on a long stick over the fire. Keep it there until it turns golden brown. Next, set a square of chocolate on a cracker. Then slide the hot marshmallow onto the chocolate. After that, press a second cracker on top. Now eat it while it is warm!", "Sentence from the directions: After that, press a second cracker on top."],
      prompt: "A student changes \"After that\" in the last sentence to \"First.\" Why would this change confuse a reader?",
      choices: [
        { text: "First would mean this is the starting step, but there is no sandwich to press until the marshmallow is on the chocolate.", correct: true },
        { text: "First would mean this is the starting step, but the chocolate is not set on the cracker until after the cracker is pressed." },
        { text: "First is not a time clue word, so a reader could not tell when to press the cracker." },
        { text: "First would mean this step happens at the same time as roasting the marshmallow." }
      ],
      clue: "Time clue words tell where a step belongs in the order. Changing a clue word changes what a reader thinks happens when.",
      hints: [
        "Time clue words tell where a step belongs in the order. Changing a clue word changes what a reader thinks happens when.",
        "Ask what the word First would tell a reader about this step. Then compare that with the order of the steps above it.",
        "First is a time clue word, just like After that, so rule out the choice that says it is not. Check each reason that is left against the order of the steps."
      ],
      how: [
        "After that tells the reader that pressing the cracker comes after the earlier steps.",
        "The top cracker presses down on the hot marshmallow and the chocolate, so they must be in place first.",
        "If the step began with First, a reader would try to press a cracker before there is anything to press. The answer is \"First would mean this is the starting step, but there is no sandwich to press until the marshmallow is on the chocolate.\"",
        "The chocolate is set on the cracker before the pressing, and First never means at the same time."
      ],
      misconception: "A common mix-up is thinking any time clue word can start any step. Each one tells where the step belongs in the order.",
      why: "The answer is \"First would mean this is the starting step, but there is no sandwich to press until the marshmallow is on the chocolate.\" The pressing needs the marshmallow and chocolate in place. The chocolate goes on the cracker before the pressing, and First is a time word that never means at the same time." },
    { id: "SK-TSSEQ-S06", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSSEQ-C05"],
      stem: ["Paragraph A: Painting a rock is easy. First, wash the rock and let it dry. Next, paint the whole rock one color. Then add dots and stripes with a thin brush.", "Paragraph B: Our gym is a big and noisy place. Bright lines on the floor mark the games, such as the ones for basketball and for four square. In addition, a tall rope hangs from the ceiling."],
      prompt: "A student wants to add this sentence: \"Last, set the rock in the sun so the paint can dry.\" Which paragraph should it go in?",
      choices: [
        { text: "Paragraph A, because it tells one more step after the others", correct: true },
        { text: "Paragraph A, because it tells what the rock looks like" },
        { text: "Paragraph B, because it tells about a place" },
        { text: "Paragraph B, because the gym has a last detail, too" }
      ],
      clue: "A new sentence has to fit the way its paragraph is organized. Find out how each paragraph is organized first.",
      hints: [
        "A new sentence has to fit the way its paragraph is organized. Find out how each paragraph is organized first.",
        "Look at the connecting words in each paragraph. Then decide where a sentence that starts with Last would fit.",
        "The new sentence tells something to do, not how the rock looks, so one choice does not fit. Test the others against the connecting words."
      ],
      how: [
        "Paragraph A uses First, Next and Then. It tells the steps for painting a rock, in order.",
        "Paragraph B uses such as and in addition. It gives details about one place, the gym.",
        "The new sentence starts with Last and tells one more thing to do, so it goes with the steps in Paragraph A.",
        "The answer is \"Paragraph A, because it tells one more step after the others.\" The sentence does not describe the rock, and it does not give a detail about the gym."
      ],
      misconception: "A common mix-up is putting a sentence where the topic matches. Put it where the way the paragraph is organized matches.",
      why: "The answer is \"Paragraph A, because it tells one more step after the others.\" Paragraph A uses First, Next and Then for steps, and the new sentence starts with Last. Paragraph B gives details about the gym, and the new sentence does not describe the rock." },
    { id: "SK-TSSEQ-S07", type: "order", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C06"],
      stem: ["How Sea Salt Is Made", "Sea salt starts in the ocean. First, workers let seawater flow into shallow pools by the shore. Next, the sun warms the pools, and the water slowly dries up into the air. After many days, a crust of white salt is left on the bottom. Then workers rake the salt into piles. Finally, the salt is washed, dried and packed into bags."],
      prompt: "Put the steps in the order they happen as sea salt is made.",
      steps: [
        "Seawater flows into shallow pools.",
        "The sun warms the water, and it dries up.",
        "A crust of salt is left on the bottom.",
        "Workers rake the salt into piles.",
        "The salt is washed, dried and packed."
      ],
      clue: "In a science text, a process happens in order, and each step leads to the next. Use the time clue words to follow it.",
      hints: [
        "In a science text, a process happens in order, and each step leads to the next. Use the time clue words to follow it.",
        "Find each step in the text and the clue word near it.",
        "The water has to flow into the pools before the sun can dry it, so that step goes first. Place the other steps by asking what each one needs before it can happen."
      ],
      how: [
        "First, seawater flows into shallow pools. Next, the sun warms the pools and the water dries up.",
        "After many days, a crust of salt is left on the bottom.",
        "Then workers rake the salt into piles, and finally it is washed, dried and packed.",
        "So the order is: water flows in, the sun dries it, salt is left, workers rake it, the salt is washed and packed."
      ],
      misconception: "A common mix-up is putting the raking before the salt is left. Workers can only rake salt that is already there.",
      why: "The order is: seawater flows into shallow pools, the sun warms the water and it dries up, a crust of salt is left on the bottom, workers rake the salt into piles, and the salt is washed, dried and packed. The clue words First, Next, After many days, Then and Finally show this order." },
    { id: "SK-TSSEQ-S08", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C07"],
      stem: ["How to Make a Papier-Mache Bowl", "First, tear newspaper into long strips. Next, stir flour and water into a runny paste. Then dip each strip into the paste until it is soaked. Lay the soaked strips over an upside-down bowl, one on top of the other, until there are four layers. Last, let the bowl dry for two days. The paste dries hard and holds the strips together, so the new bowl keeps its shape."],
      prompt: "Why must each strip be dipped in the paste BEFORE it is laid on the upside-down bowl?",
      choices: [
        { text: "The paste on each strip dries hard and joins the layers into one bowl.", correct: true },
        { text: "The paste makes the strips so heavy that they stay in place by themselves." },
        { text: "The paste turns the newspaper a color that matches the bowl underneath." },
        { text: "The paste keeps the newspaper from sticking to the upside-down bowl underneath." }
      ],
      clue: "In a sequence, an early step often makes a later step possible. Ask what the early step changes.",
      hints: [
        "In a sequence, an early step often makes a later step possible. Ask what the early step changes.",
        "Read the last sentence of the text. Then think about what the strips would be like without the paste.",
        "The text never says anything about color, so rule out that choice. Test the other reasons against what the text says the paste does."
      ],
      how: [
        "Dipping soaks the strips in paste before they are laid down.",
        "The last sentences say the paste dries hard and holds the strips together.",
        "The answer is \"The paste on each strip dries hard and joins the layers into one bowl.\"",
        "The text never says the paste makes the strips heavy, changes their color, or keeps them from sticking."
      ],
      misconception: "A common mix-up is choosing a reason that only sounds possible. Use what the text says the step does.",
      why: "The answer is \"The paste on each strip dries hard and joins the layers into one bowl.\" The text says the paste dries hard and holds the strips together. It never says the paste makes the strips heavy, changes their color or stops them from sticking." },
    { id: "SK-TSSEQ-S09", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [], pick: 2,
      like: ["SK-TSSEQ-C08"],
      stem: ["How to Tie-Dye a Shirt", "First, twist the wet shirt and wrap rubber bands around it. Next, squirt dye on each part of the shirt. Then put the shirt in a bag, and put the bag in a safe spot. The dye needs six hours to soak in. After that, rinse the shirt until the water runs clear. This takes about ten minutes. Finally, let the shirt dry."],
      prompt: "Which TWO phrases tell how much time passes, not only the order of the steps?",
      choices: [
        { text: "six hours", correct: true },
        { text: "about ten minutes", correct: true },
        { text: "First" },
        { text: "Next" },
        { text: "Finally" }
      ],
      clue: "Some time words tell order, like then and after that. Others tell how much time passes. Look for the second kind.",
      hints: [
        "Some time words tell order, like then and after that. Others tell how much time passes. Look for the second kind.",
        "Read every choice and ask: does it say how long, or does it only say which step comes when? Choose two.",
        "Finally tells which step is last. It does not tell how long the step takes. Check the other phrases the same way."
      ],
      how: [
        "First, Next and Finally tell the order of the steps. They do not say how long anything takes.",
        "\"Six hours\" tells how long the dye needs to soak. \"About ten minutes\" tells how long the rinsing takes.",
        "The answers are \"six hours\" and \"about ten minutes.\""
      ],
      misconception: "A common mix-up is choosing Finally because it comes late. Finally tells which step is last, not how long it took.",
      why: "The answers are \"six hours\" and \"about ten minutes.\" Both tell how much time passes. First, Next and Finally tell only the order." },
    { id: "SK-TSSEQ-S10", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSSEQ-C09"],
      stem: ["Paragraph 1: What happens to a cup of leftover grape juice in a very cold freezer? It turns into a sweet juice pop. The cold does the work.", "Paragraph 2: First, you pour the juice into a small paper cup. Next, you freeze it for one hour, until it is slushy.", "Paragraph 3: Then you push a wooden stick into the slush. After a few more hours, the juice is solid, and you can peel off the paper and eat your juice pop."],
      prompt: "Choose the words that tell what the first and last paragraphs do.",
      text: "The first paragraph {0}. The last paragraph {1}.",
      slots: [
        { options: ["raises a question for the reader to think about", "gives the first step of the job", "lists the tools in a box"], answer: 0 },
        { options: ["tells the last step and what you get", "adds a fun fact about juice", "compares juice pops with ice cream"], answer: 0 }
      ],
      clue: "Each paragraph in a how-to text has a job. Think about where the paragraph sits in the text.",
      hints: [
        "Each paragraph in a how-to text has a job. Think about where the paragraph sits in the text.",
        "Reread the first paragraph and decide whether it tells anything to do. Then reread the last paragraph and see how it ends.",
        "The text never mentions ice cream, so one choice does not fit the last paragraph. Test the others against what each paragraph says."
      ],
      how: [
        "The first paragraph asks what happens to leftover juice in a freezer. It gives no step and lists no tools.",
        "The last paragraph begins with Then, tells the final step, and ends with eating the juice pop.",
        "The answers are \"raises a question for the reader to think about\" and \"tells the last step and what you get.\"",
        "The first step is in Paragraph 2, the text has no fun fact, and it never mentions ice cream."
      ],
      misconception: "A common mix-up is thinking the first paragraph of a how-to text must give the first step. It can set up a question first.",
      why: "The answers are \"raises a question for the reader to think about\" and \"tells the last step and what you get.\" Paragraph 1 asks a question and gives no step. Paragraph 3 tells the last step and ends with eating the juice pop. The text has no tool box, no fun fact and no ice cream." },
    { id: "SK-TSSEQ-S11", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C11"],
      stem: ["Long ago, a farm family dug a pond to give water to their cows. People called it Dell Pond. In 1950, the town bought the land. Then the town gave the place a new name, Dell Park. Families came to picnic and fish. In 1975, the town added a boat dock and a walking path. Then the town changed the name again, to Lake Dell Park. Today, kids learn to paddle a kayak there."],
      prompt: "What was the place called when each event happened? Match each event to its name at that time.",
      cols: ["Dell Pond", "Dell Park", "Lake Dell Park"],
      rows: [
        { text: "The cows drank the water.", answer: 0 },
        { text: "The town bought the land.", answer: 0 },
        { text: "Families came to picnic and fish.", answer: 1 },
        { text: "Kids learn to paddle a kayak.", answer: 2 }
      ],
      clue: "In a history text, events go in time order. Keep track of what the place was called at each point.",
      hints: [
        "In a history text, events go in time order. Keep track of what the place was called at each point.",
        "Find the two sentences that tell when the place got a new name. Each event happened either before or after them.",
        "The cows drank the water long before 1950, so it goes with Dell Pond. Sort the other events the same way."
      ],
      how: [
        "The place was called Dell Pond until 1950. In 1950, it became Dell Park. After 1975, it was Lake Dell Park.",
        "The cows drank from the pond before the town bought the land, so that goes with Dell Pond.",
        "The town bought the land in 1950, and only then did it give the place a new name, so the place was still Dell Pond. Families came to picnic and fish after the name changed, so that goes with Dell Park.",
        "Kids paddling kayaks today fits Lake Dell Park."
      ],
      misconception: "A common mix-up is matching an event to the newest name it is told next to. Check when the name changed.",
      why: "The cows drank the water and the town bought the land while it was still Dell Pond. Families came to picnic and fish after it became Dell Park. Kids paddling kayaks today fits Lake Dell Park." },
    { id: "SK-TSSEQ-S12", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C12"],
      stem: ["In 1884, a railroad company built a depot beside Alder Creek so farmers could ship their crops. Farmers soon drove their wagons to the depot. Some of them stayed to work there. Then a blacksmith shop and a store opened across the road. In 1895, the people built a school. By 1900, the little place was a town with forty families. In 1962, the depot closed, but the town kept its name."],
      prompt: "Why did a town grow up at Alder Creek?",
      choices: [
        { text: "Farmers came to the depot, and some stayed to work, so shops and homes were built nearby.", correct: true },
        { text: "The people built a school, and families moved there so their children could learn." },
        { text: "The depot closed, and the workers began to build homes nearby." },
        { text: "The creek flooded the farms, so the farmers moved to higher ground." }
      ],
      clue: "In a history text, one event can lead to the next. Ask what happened before the town grew.",
      hints: [
        "In a history text, one event can lead to the next. Ask what happened before the town grew.",
        "Read the events in order, from 1884 to 1900. Notice which one happened first.",
        "The depot closed in 1962, long after the town had grown, so a later event cannot be the reason. Test the other choices against the order of events."
      ],
      how: [
        "In 1884, the depot was built. Soon farmers came to it, and some stayed to work there.",
        "Then a blacksmith shop and a store opened across the road. By 1900, the place was a town.",
        "The answer is \"Farmers came to the depot, and some stayed to work, so shops and homes were built nearby.\"",
        "The school came in 1895, after the town had begun to grow, the depot closed much later, and the text never mentions a flood."
      ],
      misconception: "A common mix-up is choosing a later event as the reason for an earlier one. A cause comes before what it causes.",
      why: "The answer is \"Farmers came to the depot, and some stayed to work, so shops and homes were built nearby.\" The depot came first, then the workers, the shop and the store. The school came after the town began to grow, the depot closed in 1962, and no flood is mentioned." },
    { id: "SK-TSSEQ-S13", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C13"],
      stem: ["(1) In 1890, workers built a tall brick tower beside Town Hall.", "(2) In 1925, the town added a big clock to the front of the tower.", "(3) In 1988, workers fixed the cracks in the old bricks.", "(4) Today, the clock still tells the time to the whole street.", "New sentence: In 1950, a storm blew the clock's hands off, and a new pair was made."],
      prompt: "A student wants to add the new sentence. Which sentence should it come right after?",
      choices: [
        { text: "Sentence 2", correct: true },
        { text: "Sentence 1" },
        { text: "Sentence 3" },
        { text: "Sentence 4" }
      ],
      clue: "A history text tells events in time order. To add a new event, find the events that happened just before and just after it.",
      hints: [
        "A history text tells events in time order. To add a new event, find the events that happened just before and just after it.",
        "Find every date in the numbered sentences. The new sentence has a date, too.",
        "Sentence 4 begins with Today, so it tells about now and has to stay last. Check the other dates and time words."
      ],
      how: [
        "The dates in order are 1890, 1925 and 1988. Then sentence 4 tells about today.",
        "1950 comes after 1925 and before 1988.",
        "So the new sentence goes right after Sentence 2.",
        "It cannot go after Sentence 1, because 1950 is later than 1925, or after Sentences 3 and 4, because those come later."
      ],
      misconception: "A common mix-up is putting a new event at the end. Use the dates to find the right spot.",
      why: "The answer is Sentence 2. The new event happened in 1950, which comes after 1925 and before 1988. Sentence 1 is too early, and Sentences 3 and 4 are later." },
    { id: "SK-TSSEQ-S14", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSSEQ-C14"],
      stem: ["How to Make a Grilled Cheese Sandwich", "(1) First, spread butter on the outside of two slices of bread.", "(2) Next, put one slice in a warm pan, with the buttered side down.", "(3) Then add a slice of cheese. Set the other slice on top, with its buttered side up.", "(4) After that, cook it until the buttered bottom is golden and crisp. Then turn it over.", "(5) Finally, cook the other side until the cheese melts."],
      prompt: "Why do the directions say to butter the bread BEFORE the sandwich goes in the pan?",
      choices: [
        { text: "The butter on the outside cooks into the bread, so both sides turn golden and crisp.", correct: true },
        { text: "The butter keeps the cheese from melting too fast inside the sandwich." },
        { text: "The butter on the pan is needed so the sandwich can slide around." },
        { text: "The butter makes the bread thick enough to hold the hot cheese." }
      ],
      clue: "In directions, one step often gets things ready for the next. Ask what the earlier step makes possible.",
      hints: [
        "In directions, one step often gets things ready for the next. Ask what the earlier step makes possible.",
        "Find where the butter goes in step 1. Then read the steps that say what happens to the outside of the bread.",
        "The directions do not say to butter the pan, so rule out that choice. For each choice that is left, ask: do the directions say it, or does it only sound possible?"
      ],
      how: [
        "Step 1 puts butter on the outside of both slices.",
        "Steps 2, 4 and 5 cook the bread in a warm pan, one side at a time, until each side is golden.",
        "The butter cooks into the bread, so each side turns golden and crisp. The answer is \"The butter on the outside cooks into the bread, so both sides turn golden and crisp.\"",
        "The directions never say the butter slows the cheese, goes on the pan, or thickens the bread."
      ],
      misconception: "A common mix-up is choosing a reason that only sounds possible. Use what the directions say happens in the later steps.",
      why: "The answer is \"The butter on the outside cooks into the bread, so both sides turn golden and crisp.\" The buttered sides go against the warm pan, and the steps cook each side until it is golden. The directions never say the butter slows the cheese, goes on the pan or thickens the bread." },
    { id: "SK-TSSEQ-S15", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSSEQ-C15"],
      stem: ["Nia's grandmother showed her how to make a bed. Nia wrote the directions on a card so that she would not forget them. Here is part of what she wrote."],
      prompt: "Choose the time words that best complete the directions.",
      text: "First, pull the bottom sheet tight over the mattress. {0} the sheet is smooth, spread the blanket on top. {1}, set the pillow at the head of the bed.",
      slots: [
        { options: ["Before", "After", "While"], answer: 1 },
        { options: ["Meanwhile", "Earlier", "Finally"], answer: 2 }
      ],
      clue: "Time words tell when each step happens. Pick words that keep the steps in order.",
      hints: [
        "Time words tell when each step happens. Pick words that keep the steps in order.",
        "Read the whole card once. Ask which step comes after the sheet is smooth and which step ends the job.",
        "Setting the pillow down is not something Nia does at the same time as another step. Read each sentence with the words that are left."
      ],
      how: [
        "Pulling the sheet tight comes first. The blanket goes on after the sheet is smooth.",
        "After means later than something that has happened, so \"After the sheet is smooth\" puts the blanket after the sheet.",
        "Setting the pillow down ends the job, so that step starts with Finally.",
        "The answers are After and Finally. Before would spread the blanket ahead of the smoothing, and Earlier would put the pillow before the sheet."
      ],
      misconception: "A common mix-up is choosing a word that sounds like time but gives the wrong order, like Before or Earlier.",
      why: "The answers are After and Finally. After the sheet is smooth, you spread the blanket, and finally you set the pillow down. Before and Earlier would put the steps in the wrong order, and Meanwhile and While mean at the same time." }
  ],
  /* Hints and Show me how for items kept in practice: refs P4 and P5 (core set 1) and Together P1, P2,
     P3 and P6. */
  addons: {
    "SK-TSSEQ-P1": {
      hints: [
        "Time clue words show the order of steps. Ask: What happened first?",
        "Read paragraph 2. Ask which of its steps the others have to wait for.",
        "Shaking the jar comes after the lid is on, so it is not the first step. Check each step that is left: does anything have to happen before it?"
      ],
      how: [
        "Look for the time clue word that starts the steps: First.",
        "Paragraph 2 begins with First: let the cream sit out so it is not ice cold.",
        "The answer is \"Let the cream sit out so it is not ice cold.\" Every other choice comes after that step."
      ],
      misconception: "A common mix-up is choosing the first thing you picture doing, like pouring. The clue word First tells you where the steps start." },
    "SK-TSSEQ-P2": {
      hints: [
        "Some time clue words tell where a set of steps ends. Ask: What happened last?",
        "Each sentence you can choose starts with a time clue word. Say each clue word to yourself and think about where in a set of steps it belongs.",
        "Later comes in paragraph 4, and more steps follow it, so it does not tell the last step. Test the other clue words the same way."
      ],
      how: [
        "The sentences start with the clue words First, Next, Later, After that and Finally.",
        "First starts the steps. Next, Later and After that tell middle steps.",
        "Finally tells the end. The answer is \"Finally, spread your fresh butter on a warm piece of toast.\""
      ],
      misconception: "A common mix-up is choosing After that or Later because they come near the end. Only Finally tells the last step." },
    "SK-TSSEQ-P3": {
      hints: [
        "Authors organize texts in different ways. Ask what the reader is supposed to learn from the order of the paragraphs.",
        "Look at the words that begin the sentences in paragraphs 2 and 5.",
        "Nothing goes wrong in the passage, so it is not a problem-and-solution text. Check the other choices against the words you found."
      ],
      how: [
        "Paragraphs 2 through 5 start their steps with First, Next, Then, Later, After that and Finally.",
        "Those time words show that the steps happen in a certain order.",
        "The answer is \"It gives the steps for making butter in order.\" Nothing goes wrong, and the passage does not compare butter with whipped cream."
      ],
      misconception: "A common mix-up is choosing \"facts in no special order\" for any how-to text. Time words show the order matters." },
    "SK-TSSEQ-P4": {
      hints: [
        "Sequence means the order matters. Use the time clue words to find which step starts the job and which ends it.",
        "Find each step in the passage. Paragraphs 2 through 5 go in order, so note which paragraph each step comes from.",
        "Pouring the cream into the jar happens in paragraph 2, before any shaking, so it goes first. Place the other four steps by asking which one has to happen before the next."
      ],
      how: [
        "Paragraph 2: pour the cream into the jar.",
        "Paragraph 3: shake until it turns into whipped cream. Paragraph 4 begins with Later: you hear a thump when a yellow lump forms.",
        "Paragraph 5 begins with After that: pour off the buttermilk, then rinse the butter in cold water.",
        "The order is: pour the cream, shake until it turns into whipped cream, hear the thump, pour off the buttermilk, and rinse the butter."
      ],
      misconception: "A common mix-up is putting steps in the order they are shown instead of the order they happen. Check each step against the passage." },
    "SK-TSSEQ-P5": {
      hints: [
        "In a sequence, one step often gets things ready for the next. Ask what each step does for the steps after it.",
        "Find the step the question names and the step that comes right before it in the passage.",
        "Nothing in the passage says shaking changes how cold the cream is, so rule that choice out. Ask what job the lid step does for the shaking step."
      ],
      how: [
        "Paragraph 2 ends with screwing the lid on tight. Paragraph 3 says to shake the jar hard, up and down.",
        "The lid keeps the cream inside the jar while it is shaken.",
        "Without the lid, shaking hard would send the cream out of the jar. The answer is \"The cream would spill out of the jar.\"",
        "The butter would not form faster, and nothing in the passage says shaking changes the cream's temperature or color."
      ],
      misconception: "A common mix-up is guessing a result that sounds exciting instead of asking what job the earlier step does." },
    "SK-TSSEQ-P6": {
      hints: [
        "Time clue words tell WHEN something happens. Words that tell WHERE are not time clue words.",
        "Look at the first word or two of each sentence in paragraphs 4 and 5, and at the words that tell where. Choose two.",
        "\"In cold water\" tells where you rinse the butter, not when, so it is not a time clue word. Check the other phrases the same way."
      ],
      how: [
        "Paragraph 4 starts with Later, and paragraph 5 starts with After that. Both tell when a step happens.",
        "\"Inside the jar\" and \"all around it\" tell where the thump and the liquid are. \"In cold water\" tells where you rinse the butter.",
        "The answers are Later and After that."
      ],
      misconception: "A common mix-up is choosing a phrase that tells where. Time clue words tell when." }
  },
  test: [
    { id: "SK-TSSEQ-T1", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "What happens right AFTER Keisha and Grandpa wash the peaches?",
      choices: [
        { text: "Grandpa slices the peaches.", correct: true },
        { text: "Keisha stirs the batter." },
        { text: "Keisha pours the batter." },
        { text: "They let the cobbler cool." }
      ],
      clue: "Find the sentence with the first clue word. Then read the very next sentence.",
      why: "The answer is \"Grandpa slices the peaches.\" Paragraph 2 says they washed the peaches first, and then Grandpa sliced them while Keisha watched." },
    { id: "SK-TSSEQ-T2", type: "order", points: 2, dok: 2, passages: ["p2"], std: ["3.T.SS.1.a", "3.T.T.2.b"],
      prompt: "Put the steps for making the cobbler in order.",
      steps: [
        "Keisha puts a stick of butter in a baking pan.",
        "Keisha stirs flour, sugar and milk in a bowl.",
        "Keisha pours the batter into the pan.",
        "Keisha spoons the peaches over the batter.",
        "The cobbler bakes until it is golden brown."
      ],
      clue: "Use the time clue words in paragraphs 2 through 5 to follow each step.",
      why: "The order is: butter in the pan, stir the batter, pour the batter into the pan, spoon the peaches on top, and bake until golden brown. The time clue words in paragraphs 2 through 5 show this order." },
    { id: "SK-TSSEQ-T3", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence uses a clue word to show that time has passed while the cobbler bakes? Choose the sentence in the passage.",
      targets: ["p2:3:1", "p2:4:1", "p2:5:1", "p2:5:3", "p2:6:1"],
      answer: ["p2:5:1"], pick: 1,
      clue: "The cobbler goes into the oven at the end of paragraph 4. Look for a time clue word in a sentence that comes after that.",
      why: "The answer is \"Later, the whole kitchen smelled sweet.\" The clue word Later shows that time passed while the cobbler baked. Finally comes after the baking is done." },
    { id: "SK-TSSEQ-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why does the author use words like first, next and finally in this story?",
      choices: [
        { text: "to show the order of the steps for making the cobbler", correct: true },
        { text: "to show the problem Keisha has to fix in the kitchen" },
        { text: "to show how peaches and apples are alike and different" },
        { text: "to describe what Grandpa's kitchen looks like inside" }
      ],
      clue: "These are clue words. Ask: What question do they help a reader answer?",
      why: "The answer is \"to show the order of the steps for making the cobbler.\" These are time clue words. Nothing goes wrong in the story, and the author does not compare two fruits." },
    { id: "SK-TSSEQ-T5", type: "ebsr", points: 2, dok: 2, passages: ["p2"], std: ["3.T.SS.1.a", "3.T.T.2.b"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why does the butter have to go into the oven BEFORE Keisha pours in the batter?",
        choices: [
          { text: "The batter goes in on top of the butter, so the butter has to be ready first.", correct: true },
          { text: "The butter needs time to cool down before the peaches go in." },
          { text: "The batter has to bake by itself before the butter is added." },
          { text: "Grandpa needs the oven empty while Keisha stirs the batter." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Keisha poured the batter right on top of the melted butter.\"", correct: true },
          { text: "\"Then Keisha stirred flour, sugar and milk in a big bowl.\"" },
          { text: "\"First, they washed six ripe peaches.\"" },
          { text: "\"The top of the cobbler was puffy and golden brown.\"" }
        ] },
      clue: "Find the step where Keisha pours the batter. What is already in the pan by then?",
      why: "Part A: the batter goes in on top of the butter, so the butter has to be ready first. Part B: \"Keisha poured the batter right on top of the melted butter.\" In a sequence, one step can get things ready for the next. The butter melts first, and then the batter goes on top of it. The sentence about stirring tells a step but not why the butter comes first. Nothing in the story says the butter cools, and the batter is never baked alone." }
  ]
});
PP.addLesson({
  key: "TS-CE",
  code: "3.T.SS.1.a",
  codes: ["3.T.SS.1.a", "3.T.T.2.b"],
  title: "Cause and effect: what happened and why",
  clues: {
    words: ["because", "so", "since", "as a result", "that is why", "this caused"],
    ask: "What happened? Why did it happen?",
    draw: "Draw boxes with arrows between them: Cause → Effect. For a chain, keep adding boxes: rain → wet ground → creek rises → flood."
  },
  coach: {
    mixup: "Kids often flip the cause and the effect, especially when the sentence puts the effect first: \"The game was canceled because it rained.\" Teach this test: \"Which one happened FIRST? The cause always happens first in time, even if the sentence says it second.\"",
    strong: "\"Lightning heats the air so fast that it bursts out, and that push of air is the boom we hear.\" It tells what happens AND why.",
    notyet: "\"Thunder is loud.\" That describes thunder but does not say what CAUSES it. Ask: \"What makes the boom happen?\"",
    ido: "Drop a ball. Say: \"I let go. That's the cause. The ball fell. That's the effect. The cause happens first.\"",
    wedo: "Read the flood example in Learn It together. Point to each clue word and ask, \"What's the cause? What's the effect?\"",
    youdo: "Your child fills in a cause-and-effect chain for one of the Watch Me examples, using boxes and arrows.",
    everyday: "Use \"why\" talk all day: \"Why do you think the street is wet?\" \"What will happen if you leave your bike in the rain?\" Ask your child to answer with because or so."
  },
  teach: {
    big: "A cause is WHY something happens. An effect is WHAT happens because of it.",
    points: [
      "The cause comes first in time. The effect comes after it.",
      "Clue words like because, so, since and as a result tell you a cause and an effect are close by. Because and since come just before a cause. So and as a result come just before an effect.",
      "Sometimes a sentence tells the effect first: \"The game was canceled because it rained.\" The rain still happened first, so the rain is the cause.",
      "Effects can chain together. One effect can become the cause of the next thing. To find the first cause, ask what started the whole chain. To guess the next effect, ask what this cause will make happen.",
      "Science and history texts, and even how-to steps, are full of causes and effects. A history text tells events in time order, and in a cause-and-effect text each event also makes the next one happen. Each section can add one more cause or effect. Ask: What happened? Why did it happen?"
    ],
    words: [
      { term: "cause", means: "why something happens" },
      { term: "effect", means: "what happens because of the cause" },
      { term: "chain", means: "causes and effects linked in a row, where one effect leads to the next" }
    ],
    example: {
      label: "What it looks like",
      lines: ["The town got three days of heavy rain. BECAUSE the ground was soaked, the water had nowhere to go. AS A RESULT, the creek rose over its banks. The flood covered the ball fields, SO the big game was moved to next week."],
      note: "Follow the chain: rain → soaked ground → the creek rose → the fields flooded → the game moved. Each effect causes the next one. The words in CAPS are the clue words."
    },
    tip: "On the test, a question may ask what caused something or what happened because of something. Find the clue word, then check which part happened first."
  },
  learn: [
    {
      show: ["It rained all day. Because of the rain, the park was muddy. So Jay wore his big boots."],
      ask: "Why was the park muddy?",
      steps: [
        "Find the clue word: Because.",
        "Ask: What happened? The park was muddy.",
        "Ask: Why did it happen? Read the words right after because."
      ],
      answer: "The park was muddy because it rained all day. The rain is the cause, and the mud is the effect."
    },
    {
      show: ["The ice cream melted because the sun was hot."],
      ask: "What is the cause? What is the effect?",
      steps: [
        "Find the clue word: because.",
        "Ask: Which one happened FIRST? The sun was hot first. Then the ice cream melted.",
        "The cause comes first in time, even when the sentence says it second."
      ],
      answer: "The cause is the hot sun. The effect is that the ice cream melted."
    },
    {
      show: ["Max left the gate open. As a result, his dog got out. The dog dug up the garden, so Mom had to plant new flowers."],
      ask: "What happened because Max left the gate open?",
      steps: [
        "Find the clue words: As a result, so.",
        "Ask: What happened right after the gate was left open? The dog got out.",
        "Keep going down the chain. The dog dug up the garden, so Mom planted new flowers."
      ],
      answer: "The dog got out. That caused the next effect: the dog dug up the garden, so Mom had to plant new flowers."
    }
  ],
  parent: "Use \"why\" talk during the day: \"Why is the grass wet?\" \"What will happen if we leave the milk out?\" Ask your child to answer with because or so, and to tell which thing happened first.",
  passages: [
    { id: "p1", title: "Why Do We Shiver?", genre: "Informational text",
      paragraphs: [
        ["Have you ever stood outside on a cold morning and started to shake?", "Your teeth may have chattered, too.", "This shaking is called shivering."],
        ["Your body works hard to stay warm inside.", "When cold air cools your skin, your brain gets a message.", "As a result, your brain tells your muscles to tighten and relax very fast, over and over."],
        ["Muscles make heat when they move.", "That is why shivering helps warm you up.", "Since your jaw has muscles too, your teeth can chatter when you shiver."],
        ["Cold can also give you goosebumps.", "Tiny muscles in your skin pull your hairs up straight.", "On a furry animal, this traps a layer of warm air next to its body.", "People do not have much hair, so goosebumps do not help us much."],
        ["Shivering is a helpful signal, too.", "It tells you it is time to put on a coat!"]
      ] },
    { id: "p2", title: "The Beaver's Pond", genre: "Informational text",
      paragraphs: [
        ["A beaver is a big animal with a flat tail and strong front teeth.", "Beavers are famous builders.", "They live in streams and ponds in many parts of North America, including Georgia."],
        ["Beavers chew through small trees with their sharp teeth.", "They pile the sticks, rocks and mud across a stream.", "This wall is called a dam."],
        ["The dam blocks the moving water.", "As a result, the water backs up and spreads out.", "Soon a calm, deep pond forms behind the dam."],
        ["Beavers build a home called a lodge in the pond.", "Coyotes and other hunters cannot easily get inside because the lodge doors are under the water.", "The pond keeps the beaver family safe."],
        ["The new pond helps other animals, too.", "Ducks, frogs and fish move in, since the calm water makes a good home.", "One family of beavers can change a whole stream!"]
      ] },
    /* PP-004 form B (testB) passage, used only by testB. Needs independent review. */
    { id: "p3", title: "The Plants That Build Dunes", genre: "Informational text",
      paragraphs: [
        ["On many Georgia beaches, you can see hills of sand called dunes.", "Tall grasses called sea oats grow on top of them.", "These plants do an important job."],
        ["Wind blows across the beach almost every day.", "It picks up loose, dry sand and carries it along.", "When the sand hits the stems of the sea oats, it slows down.", "As a result, the sand drops, and a little pile forms around each plant."],
        ["Sea oats do not mind being buried.", "Since they keep growing up through the sand, they trap more and more of it.", "Over many years, the little piles grow into tall dunes."],
        ["Under the sand, sea oats have long roots.", "The roots spread out like a net, so they hold the sand in place.", "Strong winds cannot easily blow the dune away."],
        ["Dunes help people, too.", "During big storms, huge waves crash onto the beach.", "The dunes block many of the waves, so the homes and roads behind them stay safer."],
        ["Sea oats are protected in Georgia because they help keep the coast safe.", "It is against the law to pick them.", "People's feet can crush the plants, so visitors use wooden walkways to cross the dunes.", "Without the plants, the wind would blow the sand away."]
      ] },
    /* B2 (expansion 2026-10-22, author b2c): p4 and p5 are used only by core (p4 set 2 and the set 3
       compare item, p5 set 3); p6 only by the similar bank. Never used by test or testB. NEEDS INDEPENDENT REVIEW. */
    { id: "p4", title: "A Signal That Saved Lives", genre: "Informational text",
      paragraphs: [
        ["In the early 1900s, more and more cars filled the streets of big cities.", "Horses, wagons and people on foot shared the same roads.", "Many street corners had a signal with just two words: Stop and Go."],
        ["The signal could switch from Go to Stop all at once.", "Because drivers had no warning, they did not have time to slow down.", "As a result, crashes at street corners happened often."],
        ["Garrett Morgan, an inventor in Ohio, saw one of these crashes.", "A car hit a horse and wagon, and people were hurt.", "So Morgan decided to build a better signal."],
        ["His signal had a third sign that stopped cars in every direction for a moment.", "That short pause gave drivers time to slow down and clear the corner before the other road got Go.", "In 1923, he got a patent, a paper from the government that said the idea was his."],
        ["Traffic lights today work in a similar way.", "The yellow light warns drivers that the light will soon turn red, so streets are safer for all."]
      ] },
    { id: "p5", title: "Fire in the Pine Forest", genre: "Informational text",
      paragraphs: [
        ["Long ago, tall longleaf pine trees covered much of south Georgia.", "These trees need something surprising to stay healthy: fire."],
        ["For its first few years, a young longleaf pine looks like a clump of grass.", "Its long needles wrap around the bud at its tip, so a quick, low fire cannot easily hurt it."],
        ["Every few years, lightning started low fires that crept across the forest floor.", "The fires burned up small oak trees and bushes.", "Because those plants were gone, sunlight could reach the ground.", "The young pines got the light they needed, so they grew tall."],
        ["Later, people began putting out every forest fire they could.", "As a result, bushes and other trees grew thick under the pines.", "Their shade blocked the sunlight, so young longleaf pines had a hard time growing."],
        ["Today, forest workers set small, careful fires called controlled burns.", "They wait for a day when the wind and weather are just right.", "These fires help the longleaf forest grow again."]
      ] },
    { id: "p6", title: "Why Did the Lake Turn Green?", genre: "Informational text",
      paragraphs: [
        ["Every summer, families swim and fish in Clear Lake.", "But one August, the water turned bright green.", "It smelled bad, too."],
        ["Scientists tested the water.", "They found that fertilizer from lawns and farms had washed into the lake when it rained hard.", "Fertilizer helps plants grow.", "It helped tiny plant-like living things called algae grow, too."],
        ["Soon the lake was so full of algae that it looked like pea soup.", "When the algae died and rotted, it used up much of the air in the water, so some fish could not breathe."],
        ["Now the town asks people to use less fertilizer and to sweep it off sidewalks and streets."]
      ] }
  ],
  practice: [
    { id: "SK-TSCE-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "What happens to your muscles when cold air cools your skin?",
      choices: [
        { text: "They tighten and relax very fast.", correct: true },
        { text: "They stop moving and rest." },
        { text: "They grow bigger and stronger." },
        { text: "They stay still to keep the heat in." }
      ],
      clue: "An effect is what happens because of something. Find the cause in the question, then look in the article for a cause-and-effect clue word that leads to what it makes happen.",
      why: "The answer is \"They tighten and relax very fast.\" Paragraph 2 says that, as a result, the muscles tighten and relax very fast, over and over." },
    { id: "SK-TSCE-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence uses a cause-and-effect clue word to explain why your teeth chatter? Choose the sentence in the passage.",
      targets: ["p1:1:2", "p1:3:1", "p1:3:2", "p1:3:3", "p1:4:2"],
      answer: ["p1:3:3"], pick: 1,
      clue: "Clue words like because, so, since and as a result tell why. Find a sentence that has one of these words AND is about teeth.",
      why: "The answer is \"Since your jaw has muscles too, your teeth can chatter when you shiver.\" The clue word since tells the cause: your jaw muscles shiver. \"Your teeth may have chattered, too\" is about teeth, but it does not tell why." },
    { id: "SK-TSCE-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence in the box. Which part is the CAUSE?",
      stem: ["Lila put on her warm coat because she was shivering."],
      choices: [
        { text: "Lila was shivering.", correct: true },
        { text: "Lila put on her warm coat." },
        { text: "Lila was too hot outside." },
        { text: "Lila's coat was too small." }
      ],
      clue: "Ask: Which one happened FIRST? The cause always happens first in time, even if the sentence says it second.",
      why: "The answer is \"Lila was shivering.\" She shivered first, and that made her put on her coat. The sentence tells the effect first and the cause second, after the clue word because." },
    { id: "SK-TSCE-P4", type: "dropdown", points: 2, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.2.b"],
      prompt: "Complete the cause-and-effect chain from paragraphs 2 and 3.",
      text: "Cold air cools your skin → {0} → your muscles tighten and relax very fast → {1}.",
      slots: [
        { options: ["your brain gets a message", "your hairs fall out", "your teeth stop moving"], answer: 0 },
        { options: ["your body makes heat", "your skin gets colder", "your muscles stop"], answer: 0 }
      ],
      clue: "In a chain, each effect becomes the next cause. Read paragraphs 2 and 3 in order and follow each arrow.",
      why: "The answers are \"your brain gets a message\" and \"your body makes heat.\" Cold skin sends a message to the brain. The brain makes the muscles shake. Moving muscles make heat, and that is why shivering warms you up." },
    { id: "SK-TSCE-P5", type: "mc", points: 1, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.2.b"],
      prompt: "According to paragraph 4, what is an effect of goosebumps on a furry animal?",
      choices: [
        { text: "A layer of warm air is trapped next to its body.", correct: true },
        { text: "Its fur falls out and grows back thicker." },
        { text: "Its muscles stop shaking in the cold." },
        { text: "Its skin turns cold and loses its hair." }
      ],
      clue: "First find what goosebumps do to the hairs. Then read on to see what that causes for an animal with fur.",
      why: "The answer is \"A layer of warm air is trapped next to its body.\" Goosebumps pull the hairs up straight. On a furry animal, this traps warm air next to its body." },
    { id: "SK-TSCE-P6", type: "ms", points: 2, dok: 1, passages: ["p1"],
      prompt: "The author uses clue words in paragraphs 2 and 3. Which THREE of these are clue words that show a cause and an effect?",
      pick: 3,
      choices: [
        { text: "As a result", correct: true },
        { text: "That is why", correct: true },
        { text: "Since", correct: true },
        { text: "Then" },
        { text: "Both" },
        { text: "But" }
      ],
      clue: "Cause-and-effect clue words link WHY something happens to WHAT happens. Try each choice: does it join a cause to an effect?",
      why: "The answers are As a result, That is why and Since. Each one links a cause to an effect in paragraphs 2 and 3. Then tells order, both tells how things are alike, and but often shows a difference or a try that did not work." }
  ],
  /* ---------- B2 core (expansion 2026-10-22, author b2c; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five. { ref } reuses Try items P4 and P5 by id (they stay in practice;
     the engine leaves them out of Together, so Together shows P1, P2, P3 and P6). P6 (weak: implausible
     distractors) and P1 (weak: silly distractor) were revised in place and stay in Together. New ids are
     numbered by their place in the fifteen. Hints and Show me how for refs and Together items are in addons.
     Author log: docs/expansion-2026-10-22/batches/B2-b2c-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TSCE-P4" },
      { ref: "SK-TSCE-P5" },
      { id: "SK-TSCE-C03", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p1"],
        prompt: "The article is mostly about shivering. Why does the author include the section about goosebumps in paragraph 4?",
        choices: [
          { text: "to tell about another effect that cold has on the body", correct: true },
          { text: "to explain that goosebumps are what cause shivering" },
          { text: "to show that people need more hair to stay warm" },
          { text: "to explain why your teeth chatter when you are cold" }
        ],
        clue: "Authors put each section in an article for a reason. Ask how the section connects to the big topic.",
        hints: [
          "Authors put each section in an article for a reason. Ask how the section connects to the big topic.",
          "Say in a few words what paragraph 4 is about, then what paragraphs 2 and 3 are about. How does paragraph 4 fit with them?",
          "Paragraph 3, not paragraph 4, tells why teeth chatter, so that choice is not why paragraph 4 is there. Test each choice that is left against what paragraph 4 actually says."
        ],
        how: [
          "The article tells what cold does to your body. Paragraphs 2 and 3 tell how cold causes shivering.",
          "Paragraph 4 starts, \"Cold can also give you goosebumps.\" The word also shows that goosebumps are one more effect of the same cause, cold.",
          "The answer is \"to tell about another effect that cold has on the body.\"",
          "The article never says goosebumps cause shivering, it never tells people to grow more hair, and teeth chattering is in paragraph 3."
        ],
        misconception: "A common mix-up is thinking two effects of the same cause must cause each other. Shivering and goosebumps both come from cold.",
        why: "The answer is \"to tell about another effect that cold has on the body.\" Paragraph 4 begins, \"Cold can also give you goosebumps,\" so it adds a second effect of cold. It never says goosebumps cause shivering or that people need more hair, and teeth chattering is explained in paragraph 3." },
      { id: "SK-TSCE-C04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["The bathroom floor got wet because Marcus left the water running in the tub."],
        prompt: "Read the sentence in the box. Marcus's sister says, \"The wet floor is the cause, because the sentence tells it first.\" Which answer best explains whether she is right?",
        choices: [
          { text: "She is not right. The water ran first, and that made the floor wet.", correct: true },
          { text: "She is right. The part a sentence tells first is always the cause." },
          { text: "She is right. The wet floor made Marcus leave the water running." },
          { text: "She is not right. There is no cause in this sentence, only an effect." }
        ],
        clue: "To check a claim about cause and effect, find the clue word. Then test the claim against what really happens.",
        hints: [
          "To check a claim about cause and effect, find the clue word. Then test the claim against what really happens.",
          "Find the clue word in the box. Which part comes after it, and which part comes before it?",
          "The sentence has the clue word because, so it does tell a cause. Test each answer that is left against what happened in the bathroom."
        ],
        how: [
          "Find the clue word because. The words after it tell the cause: Marcus left the water running.",
          "Ask which happened first in time. The water ran first, and then the floor got wet.",
          "The answer is \"She is not right. The water ran first, and that made the floor wet.\"",
          "The sentence tells the effect first, but that does not make it the cause. A wet floor cannot make water run, and the sentence does have a cause."
        ],
        misconception: "A common mix-up is calling the first part of a sentence the cause. Ask which thing happened first in time, not which words come first.",
        why: "The answer is \"She is not right. The water ran first, and that made the floor wet.\" The sentence tells the effect first and the cause after the clue word because. A wet floor cannot make water run, and the sentence does have a cause." },
      { id: "SK-TSCE-C05", type: "ms", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [], pick: 2,
        stem: ["How to Make a Sun Print", "1. Lay a few flat leaves on a sheet of sun-print paper.", "2. Set a clear sheet of plastic on top to hold the leaves flat.", "3. Leave the paper in bright sunlight for five minutes.", "4. Rinse the paper in water for one minute.", "Sunlight changes the paper wherever it touches it. After you rinse the paper, those parts turn dark blue. The parts under the leaves get no sunlight, so they stay white. That is how the leaf shapes appear."],
        prompt: "Read the directions in the box. Which TWO mistakes would most likely make the leaf shapes hard to see?",
        choices: [
          { text: "leaving the paper in a dark room instead of in sunlight", correct: true },
          { text: "skipping the plastic sheet on a windy day", correct: true },
          { text: "using three leaves instead of just one" },
          { text: "rinsing the paper in a bowl instead of a sink" },
          { text: "choosing leaves that have pointed tips" }
        ],
        clue: "In how-to steps, each step causes something. Ask what each step makes happen, and what would happen without it.",
        hints: [
          "In how-to steps, each step causes something. Ask what each step makes happen, and what would happen without it.",
          "Read the part after the steps. What does sunlight do to the paper, and why do the leaf shapes show up? Choose two.",
          "The number of leaves does not change how each leaf prints, so that mistake would not hide the shapes. Test each mistake that is left against the sentences after the steps."
        ],
        how: [
          "The paper changes only where sunlight touches it. The leaves block the light, so their shapes stay white.",
          "In a dark room, no sunlight touches the paper, so no part turns blue and no shapes show.",
          "With no plastic on a windy day, the leaves can move, and light gets under them, so the shapes blur.",
          "The answers are \"leaving the paper in a dark room instead of in sunlight\" and \"skipping the plastic sheet on a windy day.\" The number of leaves, the bowl and pointed tips do not change where the light reaches."
        ],
        misconception: "A common mix-up is choosing any change to the steps. Only a change that affects the cause, where the sunlight reaches, changes the result.",
        why: "The answers are \"leaving the paper in a dark room instead of in sunlight\" and \"skipping the plastic sheet on a windy day.\" The shapes appear because sunlight changes the paper everywhere except under the leaves. With no sunlight, nothing changes. With no plastic, the leaves can move and let light under them. The other changes do not affect where the light reaches." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TSCE-C06", type: "ebsr", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why did Garrett Morgan decide to build a better signal?",
          choices: [
            { text: "He saw one of the crashes at a street corner.", correct: true },
            { text: "He wanted to get a patent from the government." },
            { text: "He wanted cars to get through corners faster." },
            { text: "Drivers asked him to invent a yellow light." }
          ] },
        partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
          choices: [
            { text: "\"Garrett Morgan, an inventor in Ohio, saw one of these crashes.\"", correct: true },
            { text: "\"In 1923, he got a patent, a paper from the government that said the idea was his.\"" },
            { text: "\"Many street corners had a signal with just two words: Stop and Go.\"" },
            { text: "\"Traffic lights today work in a similar way.\"" }
          ] },
        clue: "To find a cause, ask: Why did this happen? Look for a clue word near the effect.",
        hints: [
          "To find a cause, ask: Why did this happen? Look for a clue word near the effect.",
          "Find where the article tells what Morgan decided. Then read what happened before it and after it, in paragraphs 1 to 4.",
          "Morgan got his patent in 1923, after he built the signal, so the patent cannot be why he decided to build it. For Part B, check that your sentence shows your Part A answer."
        ],
        how: [
          "Paragraph 3 ends, \"So Morgan decided to build a better signal.\" So means the cause comes just before it.",
          "Just before, the article says Morgan saw one of the crashes, and people were hurt.",
          "Part A: He saw one of the crashes at a street corner. Part B: \"Garrett Morgan, an inventor in Ohio, saw one of these crashes.\"",
          "The patent came later, the article never says he wanted cars to go faster, and no one asked him for a yellow light."
        ],
        misconception: "A common mix-up is choosing something that happened later. A cause has to happen before its effect.",
        why: "Part A: He saw one of the crashes at a street corner. Part B: \"Garrett Morgan, an inventor in Ohio, saw one of these crashes.\" Paragraph 3 then says, \"So Morgan decided to build a better signal.\" The patent came later, and the other reasons are not in the article." },
      { id: "SK-TSCE-C07", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4"],
        stem: ["A student wrote: \"Crashes at street corners happened often, so drivers had no warning.\""],
        prompt: "The clue word in the student's sentence makes the cause and effect from paragraph 2 backward. Choose the clue word that fixes it.",
        text: "Crashes at street corners happened often {0} drivers had no warning.",
        slots: [
          { options: ["so that", "because", "until"], answer: 1 }
        ],
        clue: "Because comes just before a cause. So comes just before an effect.",
        hints: [
          "Because comes just before a cause. So comes just before an effect.",
          "Reread paragraph 2 to find out which of the two things happened first.",
          "Until tells when something stops, not why it happens, so it does not fit. Decide which part of the sentence is the cause, then check which side of the clue word it is on."
        ],
        how: [
          "Paragraph 2 says drivers had no warning, so they did not have time to slow down, and as a result crashes happened often.",
          "So having no warning is the cause, and the crashes are the effect.",
          "In the student's sentence, the cause comes after the clue word. Because comes just before a cause, so the answer is because.",
          "So that would mean the crashes happened in order to take away the warning, which makes no sense. Until does not tell a cause at all."
        ],
        misconception: "A common mix-up is choosing a joining word that sounds smooth, like so that. Because points to a cause; so that tells what something is for.",
        why: "The answer is because. Drivers had no warning first, and that led to the crashes, so the cause is \"drivers had no warning.\" Because comes just before a cause. So that would tell a purpose, and until tells when something stops." },
      { id: "SK-TSCE-C08", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4"],
        prompt: "Which of these events came first and led to all of the others?",
        choices: [
          { text: "Signals could switch from Go to Stop all at once.", correct: true },
          { text: "Drivers did not have time to slow down at corners." },
          { text: "Morgan decided that he would build a better signal." },
          { text: "Morgan got a patent saying the idea was his." }
        ],
        clue: "In a chain of events, the first cause starts everything else. Ask: Without this, would any of the rest have happened?",
        hints: [
          "In a chain of events, the first cause starts everything else. Ask: Without this, would any of the rest have happened?",
          "Draw the chain from the article as boxes with arrows. Then look at which box has no arrow coming into it from these choices.",
          "The patent came at the very end of the chain, so it could not start the other events. Test each choice that is left: did something else have to happen before it?"
        ],
        how: [
          "Paragraph 2 says the old signal could switch from Go to Stop all at once, with no warning.",
          "Because of that, drivers could not slow down in time, crashes happened, Morgan saw one, and he built a better signal.",
          "The answer is \"Signals could switch from Go to Stop all at once.\"",
          "Drivers having no time to slow down came from the sudden switch, and Morgan's decision and his patent came later."
        ],
        misconception: "A common mix-up is choosing an event from the middle of the chain. The first cause is the one that starts the whole chain.",
        why: "The answer is \"Signals could switch from Go to Stop all at once.\" The sudden switch meant drivers had no time to slow down, which led to the crashes and to Morgan's new signal. The other choices came after it." },
      { id: "SK-TSCE-C09", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4"],
        prompt: "Which sentence best tells how the author organizes this article?",
        choices: [
          { text: "It tells events in time order and shows how one led to another.", correct: true },
          { text: "It tells events in time order, but they do not affect each other." },
          { text: "It gives the steps a reader would follow to build a signal." },
          { text: "It compares the signals of long ago with traffic lights today." }
        ],
        clue: "Texts can be organized in different ways: time order, how-to steps, compare and contrast, or cause and effect.",
        hints: [
          "Texts can be organized in different ways: time order, how-to steps, compare and contrast, or cause and effect.",
          "Notice the clue words that join the sentences, such as because, as a result and so. What do they tell you about how the happenings connect?",
          "The article does not give steps for a reader to follow, so it is not a how-to. Check each choice that is left against the article."
        ],
        how: [
          "The article goes in time order, from the early 1900s to 1923 to today.",
          "Clue words such as because, as a result and so join each happening to the one before it.",
          "The answer is \"It tells events in time order and shows how one led to another.\"",
          "The events do affect each other, the article is not a how-to, and only the last paragraph talks about today, so the article as a whole is not a comparison."
        ],
        misconception: "A common mix-up is calling a history text only time order, or naming the pattern of one paragraph. Check the clue words across the whole article.",
        why: "The answer is \"It tells events in time order and shows how one led to another.\" The events go from the early 1900s to today, and clue words such as because, as a result and so show how each one led to the next. It is not a how-to, and only the last paragraph talks about today." },
      { id: "SK-TSCE-C10", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4"],
        prompt: "Which sentence tells an effect of Morgan's new signal? Choose the sentence in the passage.",
        targets: ["p4:1:3", "p4:2:2", "p4:2:3", "p4:3:3", "p4:4:1", "p4:4:2"],
        answer: ["p4:4:2"], pick: 1,
        clue: "An effect happens after its cause and because of it. Find the cause in the passage first, then read on.",
        hints: [
          "An effect happens after its cause and because of it. Find the cause in the passage first, then read on.",
          "Find where the article tells about Morgan's signal. An effect can be told in the same paragraph or a later one.",
          "The sentence about crashes happening often tells an effect of the OLD signal, not Morgan's. Check each other sentence: did Morgan's signal make it happen?"
        ],
        how: [
          "Paragraph 4 says Morgan's signal had a third sign that stopped cars in every direction for a moment.",
          "The next sentence tells what that pause did: it gave drivers time to slow down and clear the corner.",
          "The answer is \"That short pause gave drivers time to slow down and clear the corner before the other road got Go.\"",
          "The sentence about the third sign tells what the signal is, not what it caused. The other sentences are about the old signal or come before Morgan built his."
        ],
        misconception: "A common mix-up is choosing the sentence that names the cause itself. The question asks what the new signal made happen.",
        why: "The answer is \"That short pause gave drivers time to slow down and clear the corner before the other road got Go.\" Morgan's signal paused traffic, and that pause gave drivers time. The sentence about the third sign tells what the signal is, and the other sentences tell about the old signal or come before Morgan's." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TSCE-C11", type: "cr", dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p5"], rows: 4,
        prompt: "Write one sentence about the article that tells an EFFECT first and its CAUSE second. Use the clue word because.",
        sample: "A quick, low fire cannot easily hurt a young longleaf pine because its long needles wrap around the bud at its tip.",
        criteria: [
          "My sentence tells an effect from the article first.",
          "I used because to start the cause.",
          "The cause I wrote really happened first, and the article says it."
        ],
        clue: "To tell the effect first, start with what happened. Then write because and tell why it happened.",
        hints: [
          "To tell the effect first, start with what happened. Then write because and tell why it happened.",
          "Choose any cause-and-effect link in the article. Paragraphs 2 and 5 each have one you could use.",
          "Many sentences in the article tell the cause first and use so. You can flip one around: write the part after so first, then because, then the part before so."
        ],
        how: [
          "Find a sentence with a cause and an effect, like the one in paragraph 2 about the needles and the bud.",
          "Tell the effect first: a quick, low fire cannot easily hurt a young longleaf pine.",
          "Then write because and the cause: its long needles wrap around the bud at its tip.",
          "One good answer: \"A quick, low fire cannot easily hurt a young longleaf pine because its long needles wrap around the bud at its tip.\" Other answers can also be right."
        ],
        misconception: "A common mix-up is putting because in front of the effect. The words after because must tell what happened first.",
        why: "Many answers can be right. A good sentence tells an effect from the article first, then because, then a cause the article gives. For example: \"A quick, low fire cannot easily hurt a young longleaf pine because its long needles wrap around the bud at its tip.\"" },
      { id: "SK-TSCE-C12", type: "ms", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p5"], pick: 2,
        prompt: "Which TWO things happened in the forest once fires no longer burned through it?",
        choices: [
          { text: "Bushes and other trees grew thick under the pines.", correct: true },
          { text: "Young longleaf pines had a hard time growing.", correct: true },
          { text: "Sunlight could reach the forest floor." },
          { text: "The young pines got light and grew tall." },
          { text: "Lightning started low fires on the ground." }
        ],
        clue: "Follow the chain link by link. An effect of an effect still goes back to the first cause.",
        hints: [
          "Follow the chain link by link. An effect of an effect still goes back to the first cause.",
          "Draw the chain as boxes with arrows. Start the first box with the fires stopping, and fill in the boxes that come after it. Choose two.",
          "Lightning started fires, so lightning cannot be an effect of fires stopping. Check each choice that is left against the chain you drew."
        ],
        how: [
          "In paragraph 4, the fires stop burning through the forest.",
          "With no fires, bushes and other trees grew thick under the pines. That is the first effect.",
          "Their shade blocked the sunlight, so young longleaf pines had a hard time growing. That is the next effect in the chain.",
          "The answers are \"Bushes and other trees grew thick under the pines.\" and \"Young longleaf pines had a hard time growing.\" Sunlight on the floor and tall young pines happened when there were fires, and lightning starts fires."
        ],
        misconception: "A common mix-up is stopping after the first effect. In a chain, the next effect also happened because of the first cause.",
        why: "The answers are \"Bushes and other trees grew thick under the pines.\" and \"Young longleaf pines had a hard time growing.\" With no fires, bushes and trees grew thick, and their shade kept the young pines from growing. Sunlight on the floor and tall pines came from the fires, and lightning starts fires; it is not caused by fires stopping." },
      /* Compares the set 2 and set 3 texts, so it carries both passages. */
      { id: "SK-TSCE-C13", type: "match", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p4", "p5"],
        prompt: "Think about \"A Signal That Saved Lives\" and \"Fire in the Pine Forest.\" Is each sentence true for only one article or for both? Match each sentence.",
        cols: ["only A Signal That Saved Lives", "only Fire in the Pine Forest", "both articles"],
        rows: [
          { text: "One event causes the next, like links in a chain.", answer: 2 },
          { text: "A choice people made changed what happened later.", answer: 2 },
          { text: "Something in nature starts a change.", answer: 1 },
          { text: "A new invention helps solve a problem.", answer: 0 }
        ],
        clue: "Test each sentence twice: once on the signal article and once on the pine forest article. Choose both articles only if it passes both tests.",
        hints: [
          "Test each sentence twice: once on the signal article and once on the pine forest article. Choose both articles only if it passes both tests.",
          "In each article, look for what starts the changes and for any choice that people make.",
          "In \"A Signal That Saved Lives,\" nothing in nature starts a change; people do. Sort the other sentences the same way, one article at a time."
        ],
        how: [
          "Both articles tell a chain: in each one, one event causes the next.",
          "In both, people's choices change what happens later: Morgan decides to build a better signal, and people put out forest fires.",
          "Only \"Fire in the Pine Forest\" has something in nature start a change: lightning starts fires.",
          "Only \"A Signal That Saved Lives\" tells about a new invention that helps solve a problem: Morgan's signal."
        ],
        misconception: "A common mix-up is calling a sentence true for both when it fits only one article. Check it against each article on its own.",
        why: "Both articles tell a chain of causes and effects, and in both, people's choices change what happens later. Only the pine forest article has something in nature, lightning, start a change. Only the signal article tells about a new invention that helps solve a problem." },
      { id: "SK-TSCE-C14", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Dre's bike tires were low on air.", "When tires are low, more of the soft rubber presses flat against the road.", "That makes the bike harder to push forward, so the rider has to pedal harder.", "On Saturday, Dre fell far behind his friends on the big hill.", "That night, he pumped air into both tires until they were firm."],
        prompt: "Read the story in the box. What will most likely happen the next time Dre rides up the big hill?",
        choices: [
          { text: "Pedaling will be easier, so he can keep up better with his friends.", correct: true },
          { text: "Pedaling will be harder, because his tires are now full of air." },
          { text: "His friends will slow down on the hill so that he can catch up." },
          { text: "His tires will go flat again before he gets to the top of the hill." }
        ],
        clue: "To predict an effect, find the cause and ask what it will make happen.",
        hints: [
          "To predict an effect, find the cause and ask what it will make happen.",
          "Reread the second and third sentences. They tell what low tires do to a bike. Then read what Dre does that night.",
          "Nothing in the box says his friends will wait for him, so that is not an effect of anything in the story. Ask what changes for Dre's bike now that the tires are firm."
        ],
        how: [
          "The box says low tires make a bike harder to push, so the rider has to pedal harder. That is why Dre fell behind.",
          "That night, Dre pumps his tires until they are firm, so the cause of his trouble is gone.",
          "The answer is \"Pedaling will be easier, so he can keep up better with his friends.\"",
          "Full tires do not make pedaling harder, nothing says the tires will go flat, and his tires do not change how fast his friends ride."
        ],
        misconception: "A common mix-up is flipping the cause. Low tires made pedaling hard, so firm tires make it easier.",
        why: "The answer is \"Pedaling will be easier, so he can keep up better with his friends.\" Low tires made the bike harder to push, and Dre has fixed that cause. Full tires do not make pedaling harder, nothing says they will go flat, and his tires do not change how his friends ride." },
      { id: "SK-TSCE-C15", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
        stem: ["Fact 1: The hallway floor was wet from mopping.", "Fact 2: Two students slipped in the hallway."],
        prompt: "A student wants to join the two facts in one sentence that shows the cause and the effect. Which TWO sentences do this correctly?",
        choices: [
          { text: "The hallway floor was wet from mopping, so two students slipped.", correct: true },
          { text: "Two students slipped because the hallway floor was wet from mopping.", correct: true },
          { text: "The hallway floor was wet from mopping because two students slipped." },
          { text: "Two students slipped, so the hallway floor was wet from mopping." },
          { text: "The hallway floor was wet from mopping, but two students slipped." }
        ],
        clue: "Because comes just before a cause. So comes just before an effect.",
        hints: [
          "Because comes just before a cause. So comes just before an effect.",
          "First decide which fact happened first and made the other one happen. Choose two.",
          "A sentence with but shows a difference or a surprise, not a cause, so it does not fit. Check each sentence that is left: is the clue word next to the right part?"
        ],
        how: [
          "The floor was wet first, and the wet floor made the students slip. The wet floor is the cause, and slipping is the effect.",
          "With so, the cause comes before the clue word: \"The hallway floor was wet from mopping, so two students slipped.\"",
          "With because, the cause comes after the clue word: \"Two students slipped because the hallway floor was wet from mopping.\"",
          "The other two sentences with so and because are backward, and but does not show a cause."
        ],
        misconception: "A common mix-up is thinking because and so can go anywhere. Because must sit right before the cause, and so right before the effect.",
        why: "The answers are \"The hallway floor was wet from mopping, so two students slipped.\" and \"Two students slipped because the hallway floor was wet from mopping.\" The wet floor came first and made the students slip. So goes before the effect, and because goes before the cause. The other two are backward, and but does not show a cause." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new text. `like` lists only the core items
     each one really practises (same component and task). */
  similar: [
    { id: "SK-TSCE-S01", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCE-C04", "SK-TSCE-C15"],
      stem: ["The Oak Street library closed early on Friday because a pipe broke under the floor."],
      prompt: "Read the sentence in the box. Ray says, \"The pipe broke because the library closed early.\" Which answer best explains whether Ray is right?",
      choices: [
        { text: "He is not right. The pipe broke first, and that made the library close.", correct: true },
        { text: "He is right. The word because always comes right before the effect." },
        { text: "He is right. Closing the library early made the pipe break." },
        { text: "He is not right. The sentence does not tell a cause at all." }
      ],
      clue: "To check a claim about cause and effect, find the clue word. Then test the claim against what really happens.",
      hints: [
        "To check a claim about cause and effect, find the clue word. Then test the claim against what really happens.",
        "Find the clue word in the box. Read the words after it, then the words before it.",
        "The sentence has the clue word because, so it does tell a cause. Test each answer that is left: does it match what happened first?"
      ],
      how: [
        "The words after because tell the cause: a pipe broke under the floor.",
        "The pipe broke first, so the library had to close early. Ray has the cause and effect backward.",
        "The answer is \"He is not right. The pipe broke first, and that made the library close.\"",
        "Because comes before a cause, not an effect, and closing a library cannot break a pipe."
      ],
      misconception: "A common mix-up is flipping the cause and the effect when the sentence tells the effect first.",
      why: "The answer is \"He is not right. The pipe broke first, and that made the library close.\" The words after because tell the cause. Closing a library cannot break a pipe, and because comes before a cause, not an effect." },
    { id: "SK-TSCE-S02", type: "ebsr", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: ["p6"],
      like: ["SK-TSCE-C06"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What caused the algae in Clear Lake to grow so much?",
        choices: [
          { text: "Fertilizer from lawns and farms washed into the lake.", correct: true },
          { text: "Some of the fish in the lake could not breathe." },
          { text: "Families swam and fished in the lake every summer." },
          { text: "The town asked people to use less fertilizer." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"They found that fertilizer from lawns and farms had washed into the lake when it rained hard.\"", correct: true },
          { text: "\"But one August, the water turned bright green.\"" },
          { text: "\"Soon the lake was so full of algae that it looked like pea soup.\"" },
          { text: "\"Now the town asks people to use less fertilizer and to sweep it off sidewalks and streets.\"" }
        ] },
      clue: "A cause happens before its effect and makes it happen. Ask: Why did this happen?",
      hints: [
        "A cause happens before its effect and makes it happen. Ask: Why did this happen?",
        "Find where the article first tells about the algae. Then look before it for what helped the algae grow.",
        "The fish could not breathe after the algae grew, so that is an effect, not the cause. For Part B, check that your sentence shows your Part A answer."
      ],
      how: [
        "Paragraph 2 says the scientists found that fertilizer had washed into the lake.",
        "Fertilizer helps plants grow, and it helped the algae grow, too.",
        "Part A: Fertilizer from lawns and farms washed into the lake. Part B: \"They found that fertilizer from lawns and farms had washed into the lake when it rained hard.\"",
        "The fish and the green water are effects, swimming did not make algae grow, and the town's request came afterward."
      ],
      misconception: "A common mix-up is choosing an effect, like the green water or the fish, when the question asks for the cause.",
      why: "Part A: Fertilizer from lawns and farms washed into the lake. Part B: \"They found that fertilizer from lawns and farms had washed into the lake when it rained hard.\" The fertilizer helped the algae grow. The green water and the fish are effects, and the town's request came later." },
    { id: "SK-TSCE-S03", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCE-P4", "SK-TSCE-C12"],
      stem: ["Mrs. Ruiz took down the bird feeder in her yard.", "Without the seeds, fewer birds came to visit.", "The birds had been eating the green caterpillars on her tomato plants.", "With fewer birds around, more caterpillars lived and grew.", "By July, the caterpillars had chewed holes in almost every tomato leaf."],
      prompt: "Read the story in the box. Which event is BOTH an effect of something before it AND a cause of something after it?",
      choices: [
        { text: "Fewer birds came to visit the yard.", correct: true },
        { text: "Mrs. Ruiz took down the bird feeder." },
        { text: "Caterpillars chewed holes in the leaves." },
        { text: "The birds had been eating caterpillars." }
      ],
      clue: "In a chain, a middle link is an effect of the link before it and a cause of the link after it.",
      hints: [
        "In a chain, a middle link is an effect of the link before it and a cause of the link after it.",
        "Draw the chain as boxes with arrows, starting with the bird feeder.",
        "The chewed leaves come at the very end, so nothing in the story happens because of them. Check each choice that is left: does it have an arrow coming in and an arrow going out?"
      ],
      how: [
        "The chain is: the feeder comes down → fewer birds visit → more caterpillars live → the leaves get chewed.",
        "Taking down the feeder starts the chain, so it is only a cause. The chewed leaves end it, so they are only an effect.",
        "The answer is \"Fewer birds came to visit the yard.\" It happens because the feeder came down, and it causes more caterpillars to live.",
        "The birds eating caterpillars is a fact from before the story begins, not a link caused by the feeder."
      ],
      misconception: "A common mix-up is choosing the first or last event. A middle link has a cause before it and an effect after it.",
      why: "The answer is \"Fewer birds came to visit the yard.\" It is an effect of taking down the feeder and a cause of more caterpillars living. The feeder starts the chain, the chewed leaves end it, and the birds eating caterpillars is a fact from before." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting.
       Each like names one core item only, because the engine uses an extra question once.
       Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TSCE-S04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSCE-P5"],
      stem: ["When a pond gets very cold, the water at the top freezes first. Ice is lighter than water, so the ice floats instead of sinking. The sheet of ice acts like a blanket. It keeps the cold wind off the water below. As a result, the water under the ice stays a little warmer, and it does not freeze. Fish and frogs live in that water until spring."],
      prompt: "According to the paragraph, what is an effect of the sheet of ice floating on the pond?",
      choices: [
        { text: "The water under the ice stays a little warmer and does not freeze.", correct: true },
        { text: "The whole pond freezes solid from the top to the bottom." },
        { text: "The ice sinks to the bottom and covers the fish." },
        { text: "The fish swim up and break through the ice." }
      ],
      clue: "First find what the ice does. Then read on to see what that causes for the water below.",
      hints: [
        "First find what the ice does. Then read on to see what that causes for the water below.",
        "Look for the clue words as a result. They point to an effect.",
        "The paragraph says the ice floats, so a choice in which the ice sinks goes against the text. Test the other choices against what the ice does."
      ],
      how: [
        "The ice floats and acts like a blanket. It keeps the cold wind off the water below.",
        "The words as a result tell the effect: the water under the ice stays a little warmer and does not freeze.",
        "The answer is \"The water under the ice stays a little warmer and does not freeze.\"",
        "The pond does not freeze solid, the ice does not sink, and the fish do not break through the ice."
      ],
      misconception: "A common mix-up is choosing an effect that sounds likely but is not in the paragraph. Use the text.",
      why: "The answer is \"The water under the ice stays a little warmer and does not freeze.\" The paragraph says as a result of the ice blanket, the water below stays warmer. The pond does not freeze solid, the ice floats instead of sinking, and the fish live in the water under the ice." },
    { id: "SK-TSCE-S05", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSCE-C03"],
      stem: ["What Makes a Sidewalk Hot?", "Paragraph 1: A dark sidewalk gets very hot on a sunny day. The dark color soaks up the sunlight. The sunlight turns into heat, so the sidewalk feels hot under your shoes.", "Paragraph 2: A hot sidewalk can also make a puddle disappear fast. The heat turns the water into a gas that floats into the air. A puddle in the shade lasts much longer."],
      prompt: "The article is mostly about why a sidewalk gets hot. Why does the author include Paragraph 2 about the puddle?",
      choices: [
        { text: "to tell about another thing that a hot sidewalk makes happen", correct: true },
        { text: "to explain that puddles are what make a sidewalk hot" },
        { text: "to show that shade is hotter than a sunny sidewalk" },
        { text: "to explain why a dark color soaks up sunlight" }
      ],
      clue: "Authors put each section in an article for a reason. Ask how the section connects to the big topic.",
      hints: [
        "Authors put each section in an article for a reason. Ask how the section connects to the big topic.",
        "Say in a few words what Paragraph 1 is about, then what Paragraph 2 is about. How does Paragraph 2 fit with Paragraph 1?",
        "Paragraph 1, not Paragraph 2, tells about the dark color and the sunlight, so that choice is not why Paragraph 2 is there. Test each choice that is left against what Paragraph 2 says."
      ],
      how: [
        "Paragraph 1 tells why a dark sidewalk gets hot: it soaks up sunlight and turns it into heat.",
        "Paragraph 2 starts, \"A hot sidewalk can also make a puddle disappear fast.\" The word also shows that the puddle is one more result of the heat.",
        "The answer is \"to tell about another thing that a hot sidewalk makes happen.\"",
        "The article never says puddles make a sidewalk hot, a puddle in the shade lasts longer, and the dark color is explained in Paragraph 1."
      ],
      misconception: "A common mix-up is thinking a second section must explain the first. It can add one more result of the same cause.",
      why: "The answer is \"to tell about another thing that a hot sidewalk makes happen.\" Paragraph 2 begins, \"A hot sidewalk can also make a puddle disappear fast,\" so it adds one more result of the heat. It never says puddles make a sidewalk hot, a puddle in the shade lasts longer, and the dark color is in Paragraph 1." },
    { id: "SK-TSCE-S06", type: "ms", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [], pick: 2,
      like: ["SK-TSCE-C05"],
      stem: ["How to Make a Lava Lamp", "1. Fill a clear bottle one-quarter full of water. Add a few drops of food coloring.", "2. Pour in cooking oil until the bottle is almost full.", "3. Wait until the oil and water have separated.", "4. Drop in half of a fizzy tablet.", "Oil is lighter than water, so it floats on top and does not mix. The tablet makes gas bubbles. The bubbles carry blobs of colored water up through the oil. When the bubbles pop at the top, the blobs sink back down. That is how the lamp seems to move."],
      prompt: "Read the directions. Which TWO mistakes would most likely stop the colored blobs from rising?",
      choices: [
        { text: "dropping in no fizzy tablet at all", correct: true },
        { text: "leaving the water out of the bottle", correct: true },
        { text: "using three drops of coloring instead of two" },
        { text: "using a tall bottle instead of a short one" },
        { text: "using blue coloring instead of red" }
      ],
      clue: "In how-to steps, each step causes something. Ask what each step makes happen, and what would happen without it.",
      hints: [
        "In how-to steps, each step causes something. Ask what each step makes happen, and what would happen without it.",
        "Read the part after the steps. What lifts the colored water, and what are the blobs made of? Choose two.",
        "The color of the coloring does not change how the blobs move, so that mistake would not stop them. Test each mistake that is left against the sentences after the steps."
      ],
      how: [
        "The tablet makes gas bubbles, and the bubbles carry blobs of colored water up. With no tablet, nothing lifts the blobs.",
        "The blobs are colored water. If the water is left out, there are no blobs to rise through the oil.",
        "The answers are \"dropping in no fizzy tablet at all\" and \"leaving the water out of the bottle.\"",
        "Extra coloring, a taller bottle or a different color do not change what lifts the blobs."
      ],
      misconception: "A common mix-up is choosing any change to the steps. Only a change that affects the cause of the rising changes the result.",
      why: "The answers are \"dropping in no fizzy tablet at all\" and \"leaving the water out of the bottle.\" The tablet makes the bubbles that lift the blobs, and the blobs are made of colored water. The amount of coloring, the bottle height and the color do not change that." },
    { id: "SK-TSCE-S07", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSCE-C07"],
      stem: ["Dan planted a sunflower seed in a sunny spot by the fence. He watered it every day. In a few weeks, the sunflower grew taller than the fence. Dan wrote: \"Dan watered the sunflower every day because it grew taller than the fence.\""],
      prompt: "Dan's sentence has the cause and effect backward. Choose the clue word that fixes it.",
      text: "Dan watered the sunflower every day {0} it grew taller than the fence.",
      slots: [
        { options: ["and", "so", "until"], answer: 1 }
      ],
      clue: "Some clue words come just before a cause, and some come just before an effect. Decide which part of the sentence is which.",
      hints: [
        "Some clue words come just before a cause, and some come just before an effect. Decide which part of the sentence is which.",
        "Reread the stem to find out which of the two things happened first and made the other happen.",
        "Try each clue word in the sentence and read it aloud. Ask whether the sentence then says what Dan really did and what happened after."
      ],
      how: [
        "Dan watered the plant every day, and that helped it grow tall.",
        "So watering is the cause, and growing taller is the effect.",
        "In Dan's sentence, the effect comes after the clue word, so the answer is so. And only joins the two parts, and until tells when something stops.",
        "Because, the word Dan used, points to a cause, but the part after it is the effect. That made his sentence backward."
      ],
      misconception: "A common mix-up is leaving the effect after a word that points to a cause. Check which part of the sentence is the cause.",
      why: "The answer is so. Dan watered the plant first, and that led to the sunflower growing tall, so the effect is \"it grew taller than the fence.\" So comes just before an effect. And only joins the two parts, and until tells when something stops." },
    { id: "SK-TSCE-S08", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSCE-C08"],
      stem: ["One cold night in January, the puddles on Oak Road froze. In the morning, the road was slick and shiny in the early sun. Cars crept along it. The bus driver drove very slowly, so the bus came to school late. Many kids were late. Because of that, the principal moved the start of school to a later time for the week."],
      prompt: "Which of these events came first and led to all of the others?",
      choices: [
        { text: "The puddles on Oak Road froze.", correct: true },
        { text: "The bus driver drove very slowly." },
        { text: "The bus came to school late." },
        { text: "The principal moved the start of school later." }
      ],
      clue: "In a chain of events, the first cause starts everything else. Ask: Without this, would any of the rest have happened?",
      hints: [
        "In a chain of events, the first cause starts everything else. Ask: Without this, would any of the rest have happened?",
        "Draw the chain as boxes with arrows. Then look at which box has no arrow coming into it from these choices.",
        "The principal's change came at the very end of the chain, so it could not start the other events. Test each choice that is left: did something else have to happen before it?"
      ],
      how: [
        "The chain is: puddles freeze, the road is slick, the driver drives slowly, the bus is late, the principal moves the start time.",
        "The first box in the chain is the puddles freezing.",
        "The answer is \"The puddles on Oak Road froze.\"",
        "Slow driving, the late bus and the later start all came after it."
      ],
      misconception: "A common mix-up is choosing an event from the middle of the chain. The first cause is the one that starts the whole chain.",
      why: "The answer is \"The puddles on Oak Road froze.\" The frozen puddles made the road slick, the driver slowed down, the bus was late and the principal moved the start time. Each of the other choices came after it." },
    { id: "SK-TSCE-S09", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSCE-C09"],
      stem: ["Heavy fog covered the road early on Monday morning. Because drivers could not see far, the school bus rolled along very slowly. As a result, the bus reached school twenty minutes late. So the teacher moved the spelling test to the afternoon."],
      prompt: "How does the author organize this paragraph?",
      choices: [
        { text: "Each happening causes the next one, like links in a chain.", correct: true },
        { text: "The happenings are listed by date, and none of them is connected." },
        { text: "The author tells how foggy mornings differ from clear mornings." },
        { text: "The author tells the steps a driver follows in the fog." }
      ],
      clue: "Texts can be organized in different ways: time order, how-to steps, compare and contrast, or cause and effect.",
      hints: [
        "Texts can be organized in different ways: time order, how-to steps, compare and contrast, or cause and effect.",
        "Notice the words that join the sentences, such as because, as a result and so. What do they tell you about how the happenings connect?",
        "The paragraph never tells a driver what to do, so it is not a how-to. Check each choice that is left against the paragraph."
      ],
      how: [
        "The paragraph goes from Monday morning to the afternoon, one happening after another.",
        "Because, as a result and so join each happening to the one before it: fog, slow driving, a late bus and a moved test.",
        "The answer is \"Each happening causes the next one, like links in a chain.\"",
        "The paragraph has no dates, never compares foggy and clear mornings, and gives no steps for a driver."
      ],
      misconception: "A common mix-up is calling a text time order only. Check the joining words to see whether one happening causes the next.",
      why: "The answer is \"Each happening causes the next one, like links in a chain.\" Because, as a result and so show that the fog led to the slow bus, the late bus and the moved test. The paragraph has no dates, no comparison and no steps for a driver." },
    { id: "SK-TSCE-S10", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSCE-C10"],
      stem: ["Cars used to speed down Hill Street, right past the school. Kids did not feel safe crossing the street. Parents wrote to the town to ask for help. So the town added two speed bumps to the road. A car must slow down to go over a speed bump. Now drivers go slowly near the school, and kids cross safely."],
      prompt: "Which sentence tells an effect of the speed bumps?",
      choices: [
        { text: "Now drivers go slowly near the school, and kids cross safely.", correct: true },
        { text: "So the town added two speed bumps to the road." },
        { text: "Cars used to speed down Hill Street, right past the school." },
        { text: "Kids did not feel safe crossing." }
      ],
      clue: "An effect happens after its cause and because of it. Find the cause in the text first, then read on.",
      hints: [
        "An effect happens after its cause and because of it. Find the cause in the text first, then read on.",
        "Find where the text tells about the speed bumps. An effect is told after the cause.",
        "The sentence about cars speeding tells the problem that happened before the speed bumps, so it is not their effect. Check each other sentence: did the speed bumps make it happen?"
      ],
      how: [
        "The cause is the speed bumps the town added.",
        "A car must slow down to go over a speed bump. So the last sentence tells what changed because of them: drivers go slowly, and kids cross safely.",
        "The answer is \"Now drivers go slowly near the school, and kids cross safely.\"",
        "The sentence about adding the bumps is the cause, and the sentences about speeding and feeling unsafe tell the problem from before."
      ],
      misconception: "A common mix-up is choosing the sentence that names the cause itself. The question asks what the speed bumps made happen.",
      why: "The answer is \"Now drivers go slowly near the school, and kids cross safely.\" The speed bumps made drivers slow down. Adding the bumps is the cause, and the speeding and the unsafe feeling came before them." },
    { id: "SK-TSCE-S11", type: "cr", dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [], rows: 4,
      like: ["SK-TSCE-C11"],
      stem: ["The class picnic was planned for Saturday at noon. The children brought sandwiches and fruit. Dark clouds rolled over the park, and soon thunder rumbled. Mr. Lee did not want the children to stand in the open field during the storm. So he moved the class picnic into the gym, and everyone ate their lunch there while the rain fell."],
      prompt: "Write one sentence about the text that tells an EFFECT first and its CAUSE second. Use the clue word because.",
      sample: "Mr. Lee moved the class picnic into the gym because thunder rumbled over the park.",
      criteria: [
        "My sentence tells an effect from the text first.",
        "I used because to start the cause.",
        "The cause I wrote really happened first, and the text says it."
      ],
      clue: "To tell the effect first, start with what happened. Then write because and tell why it happened.",
      hints: [
        "To tell the effect first, start with what happened. Then write because and tell why it happened.",
        "Choose any cause-and-effect link in the text. The sentences with So and Soon each have one you could use.",
        "The text tells the cause first and uses so. You can flip it around: write the part after so first, then because, then the part before so."
      ],
      how: [
        "Find a sentence with a cause and an effect, like the one about Mr. Lee and the field.",
        "Tell the effect first: Mr. Lee moved the class picnic into the gym.",
        "Then write because and the cause: thunder rumbled over the park.",
        "One good answer: \"Mr. Lee moved the class picnic into the gym because thunder rumbled over the park.\" Other answers can also be right."
      ],
      misconception: "A common mix-up is putting because in front of the effect. The words after because must tell what happened first.",
      why: "Many answers can be right. A good sentence tells an effect from the text first, then because, then a cause the text gives. For example: \"Mr. Lee moved the class picnic into the gym because thunder rumbled over the park.\"" },
    { id: "SK-TSCE-S12", type: "ms", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [], pick: 2,
      like: ["SK-TSCE-C12"],
      stem: ["For years, Mr. Hale cut the grass in the field behind his barn every week. This spring, he stopped. Tall grass and wildflowers grew in the field. By June, the field was full of color. Bees came to the wildflowers to sip their sweet nectar. The barn behind the field is painted red, and it stands on a low hill."],
      prompt: "Which TWO things happened because Mr. Hale stopped cutting the grass?",
      choices: [
        { text: "Tall grass and wildflowers grew in the field.", correct: true },
        { text: "Bees came to the wildflowers to sip nectar.", correct: true },
        { text: "The grass was cut every week." },
        { text: "The barn behind the field was painted red." },
        { text: "Mr. Hale bought a new tool for the field." }
      ],
      clue: "Follow the chain link by link. An effect of an effect still goes back to the first cause.",
      hints: [
        "Follow the chain link by link. An effect of an effect still goes back to the first cause.",
        "Draw the chain as boxes with arrows. Start the first box with Mr. Hale stopping, and fill in the boxes that come after it. Choose two.",
        "Cutting the grass every week happened before he stopped, so it cannot be an effect of stopping. Check each choice that is left against the chain you drew."
      ],
      how: [
        "Mr. Hale stopped cutting the grass. That is the first cause.",
        "With no cutting, tall grass and wildflowers grew. That is the first effect.",
        "The wildflowers made nectar, and bees came to sip it. That is the next effect in the chain.",
        "The answers are \"Tall grass and wildflowers grew in the field.\" and \"Bees came to the wildflowers to sip nectar.\" The weekly cutting came before, and nothing says Mr. Hale bought a tool or painted the barn."
      ],
      misconception: "A common mix-up is stopping after the first effect. In a chain, the next effect also happened because of the first cause.",
      why: "The answers are \"Tall grass and wildflowers grew in the field.\" and \"Bees came to the wildflowers to sip nectar.\" With no cutting, tall grass and flowers grew, and the flowers brought the bees. The weekly cutting happened before he stopped, and the red barn and a new tool are not effects." },
    { id: "SK-TSCE-S13", type: "match", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.b"], passages: [],
      like: ["SK-TSCE-C13"],
      stem: ["Text 1: The Cracked Sidewalk. A tree grew beside Pine Street. Its roots spread under the sidewalk and pushed up on the cement. Because the roots kept growing, the cement cracked. A child tripped on the crack. So the city cut a path for the roots and fixed the sidewalk.", "Text 2: The Flooded Parking Lot. Heavy rain fell for two days. Leaves clogged the drain in the parking lot. As a result, the water had nowhere to go, and it covered the cars' tires. So the workers cleared the drain."],
      prompt: "Is each sentence true for only one text or for both? Match each sentence.",
      cols: ["only Text 1", "only Text 2", "both texts"],
      rows: [
        { text: "One event causes the next, like links in a chain.", answer: 2 },
        { text: "People fixed the problem after it happened.", answer: 2 },
        { text: "A growing plant starts the problem.", answer: 0 },
        { text: "Heavy rain starts the problem.", answer: 1 }
      ],
      clue: "Test each sentence twice: once on Text 1 and once on Text 2. Choose both texts only if it passes both tests.",
      hints: [
        "Test each sentence twice: once on Text 1 and once on Text 2. Choose both texts only if it passes both tests.",
        "In each text, look for what starts the problem and for what people do at the end.",
        "In Text 1, nothing about rain starts the problem; roots do. Sort the other sentences the same way, one text at a time."
      ],
      how: [
        "Both texts tell a chain of causes and effects: in each one, one event causes the next.",
        "In both, people fix the problem at the end: the city fixes the sidewalk, and the workers clear the drain.",
        "Only Text 1 has a growing plant start the problem: the roots keep growing.",
        "Only Text 2 has heavy rain start the problem."
      ],
      misconception: "A common mix-up is calling a sentence true for both when it fits only one text. Check it against each text on its own.",
      why: "Both texts tell a chain of causes and effects, and in both, people fix the problem at the end. Only Text 1 has a growing plant, the tree roots, start the problem. Only Text 2 has heavy rain start the problem." },
    { id: "SK-TSCE-S14", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCE-C14"],
      stem: ["Water on iron makes it rust. Rust is a crumbly orange coat that weakens the metal. Last fall, Grandpa left his wheelbarrow out in the rain. By winter, its sides had rusty holes. In spring, he scraped off the rust and painted the metal. Water cannot touch the iron under the paint. Now he keeps the wheelbarrow in the shed when it rains."],
      prompt: "Read the story. What will most likely happen to the wheelbarrow next fall?",
      choices: [
        { text: "It will stay strong, because paint and the shed keep the water off.", correct: true },
        { text: "It will get new rusty holes, because paint makes iron rust faster." },
        { text: "It will turn orange, because the shed is made of iron." },
        { text: "It will get lighter, because Grandpa scraped off the rust." }
      ],
      clue: "To predict an effect, find the cause and ask what it will make happen.",
      hints: [
        "To predict an effect, find the cause and ask what it will make happen.",
        "Reread the first two sentences. They tell what makes iron rust. Then read what Grandpa does in the spring.",
        "Nothing in the story says paint makes iron rust, so that is not an effect of anything in the story. Ask what changes for the wheelbarrow now that water is kept off."
      ],
      how: [
        "The story says water makes iron rust. That is why the wheelbarrow got holes.",
        "In spring, Grandpa paints the metal, so water cannot touch the iron, and he keeps the wheelbarrow in the shed when it rains.",
        "The answer is \"It will stay strong, because paint and the shed keep the water off.\"",
        "Paint does not make iron rust, the shed is not made of iron, and scraping off rust does not make the wheelbarrow rust again."
      ],
      misconception: "A common mix-up is flipping the cause. Water made the iron rust, so keeping water away keeps it from rusting.",
      why: "The answer is \"It will stay strong, because paint and the shed keep the water off.\" Water makes iron rust, and Grandpa has taken away the water. Paint does not make iron rust, the shed is not iron, and scraping the rust off does not bring it back." },
    { id: "SK-TSCE-S15", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
      like: ["SK-TSCE-C15"],
      stem: ["Kofi helps his aunt on her small farm. One evening, he forgot to close the gate. In the morning, the goats were in the garden, and they had eaten all the lettuce. Kofi wrote down two facts about that day for his aunt to read.", "Fact 1: Kofi forgot to close the gate.", "Fact 2: The goats got into the garden."],
      prompt: "A student wants to join the two facts in one sentence that shows the cause and the effect. Which TWO sentences do this correctly?",
      choices: [
        { text: "Kofi forgot to close the gate, so the goats got into the garden.", correct: true },
        { text: "The goats got into the garden because Kofi forgot to close the gate.", correct: true },
        { text: "Kofi forgot to close the gate because the goats got into the garden." },
        { text: "The goats got into the garden, so Kofi forgot to close the gate." },
        { text: "Kofi forgot to close the gate, but the goats got into the garden." }
      ],
      clue: "Because comes just before a cause. So comes just before an effect.",
      hints: [
        "Because comes just before a cause. So comes just before an effect.",
        "First decide which fact happened first and made the other one happen. Choose two.",
        "A sentence with but shows a difference or a surprise, not a cause, so it does not fit. Check each sentence that is left: is the clue word next to the right part?"
      ],
      how: [
        "The gate was left open first, and that let the goats in. Forgetting the gate is the cause, and the goats getting in is the effect.",
        "With so, the cause comes before the clue word: \"Kofi forgot to close the gate, so the goats got into the garden.\"",
        "With because, the cause comes after the clue word: \"The goats got into the garden because Kofi forgot to close the gate.\"",
        "The other sentence with so and the other sentence with because are backward, and but does not show a cause."
      ],
      misconception: "A common mix-up is thinking because and so can go anywhere. Because must sit right before the cause, and so right before the effect.",
      why: "The answers are \"Kofi forgot to close the gate, so the goats got into the garden.\" and \"The goats got into the garden because Kofi forgot to close the gate.\" The open gate came first and let the goats in. So goes before the effect, and because goes before the cause. The other two are backward, and but does not show a cause." }
  ],
  /* Hints and Show me how for items kept in practice: refs P4 and P5 (core set 1) and Together P1-P3 and P6. */
  addons: {
    "SK-TSCE-P1": {
      hints: [
        "An effect is what happens because of something. Clue words like as a result point to it.",
        "Find the clue words as a result in paragraph 2. Read the words after them and picture what the muscles are doing.",
        "Paragraph 2 never says the muscles rest, so that choice does not fit. Check each choice that is left against paragraph 2."
      ],
      how: [
        "Paragraph 2 tells what happens after cold air cools your skin.",
        "As a result, the muscles tighten and relax very fast, over and over.",
        "The answer is \"They tighten and relax very fast.\" The muscles do not rest, stay still or grow."
      ],
      misconception: "A common mix-up is choosing something that sounds possible. Use the effect the article tells after as a result." },
    "SK-TSCE-P2": {
      hints: [
        "Clue words like because, so, since and as a result tell why. Find a sentence that has one of these words AND is about teeth.",
        "Read each sentence you can choose. Notice which ones have a cause-and-effect clue word.",
        "\"Your teeth may have chattered, too\" is about teeth, but it has no clue word and does not tell why. Check the other sentences for both things the question asks for."
      ],
      how: [
        "The question needs two things: a cause-and-effect clue word and a reason teeth chatter.",
        "\"Since your jaw has muscles too, your teeth can chatter when you shiver\" has the clue word since, and it tells why teeth chatter.",
        "The answer is that sentence. \"That is why shivering helps warm you up\" has a clue word, but it is about getting warm, not teeth."
      ],
      misconception: "A common mix-up is choosing a sentence that is about the right topic but has no clue word, or one with a clue word that is about a different topic." },
    "SK-TSCE-P3": {
      hints: [
        "Ask: Which one happened FIRST? The cause always happens first in time, even if the sentence says it second.",
        "Find the clue word because. Read the words after it.",
        "The box never says Lila's coat was too small, so that is not part of the sentence. Check each choice that is left: did it happen first?"
      ],
      how: [
        "The clue word because comes just before the cause.",
        "Lila was shivering first. That made her put on her coat.",
        "The answer is \"Lila was shivering.\" Putting on the coat is the effect, and the other choices are not in the sentence."
      ],
      misconception: "A common mix-up is choosing the part the sentence tells first. Ask which part happened first in time." },
    "SK-TSCE-P4": {
      hints: [
        "In a chain, each effect becomes the cause of the next thing. Follow the arrows one at a time.",
        "Start at the first box. For each blank, find the box before it in the article and read what comes right after.",
        "Your hairs falling out is not in the article at all, so that choice does not fit the first blank. For each blank, ask: does the article say this happens right after the box before it?"
      ],
      how: [
        "Paragraph 2 says that when cold air cools your skin, your brain gets a message. That fills the first blank.",
        "The brain then tells the muscles to tighten and relax very fast.",
        "Paragraph 3 says muscles make heat when they move, so the second blank is \"your body makes heat.\"",
        "\"Your skin gets colder\" goes the wrong way, because shivering warms you up."
      ],
      misconception: "A common mix-up is skipping a link in the chain. Each box must cause the very next one." },
    "SK-TSCE-P5": {
      hints: [
        "An effect is what happens because of something. Find the cause first, then read on for what it makes happen.",
        "Find the cause in paragraph 4 first. Then ask what that cause makes happen for an animal with fur.",
        "Paragraph 4 never says fur falls out or grows back, so that choice is not an effect the article gives. Check each choice that is left against paragraph 4."
      ],
      how: [
        "Paragraph 4 says goosebumps happen when tiny muscles pull your hairs up straight.",
        "The next sentence says that on a furry animal, this traps a layer of warm air next to its body.",
        "The answer is \"A layer of warm air is trapped next to its body.\"",
        "The article never says fur falls out or skin loses hair, and stopping the muscles is not in paragraph 4."
      ],
      misconception: "A common mix-up is choosing something that sounds like it could happen but is not in the article." },
    "SK-TSCE-P6": {
      hints: [
        "Cause-and-effect clue words link WHY something happens to WHAT happens. Try each choice: does it join a cause to an effect?",
        "Find each clue word in paragraphs 2 and 3. Read the words on both sides of it.",
        "Both tells how two things are alike, so it does not show a cause. Check each other word: does it tell why, or what happened because of something?"
      ],
      how: [
        "As a result, That is why and Since each sit between a cause and its effect in paragraphs 2 and 3.",
        "Each one tells why something happens or what happens because of something.",
        "The answers are As a result, That is why and Since. Then tells order, both tells a likeness, and but often shows a difference."
      ],
      misconception: "A common mix-up is choosing any joining word. Then tells order, not why something happened." }
  },
  test: [
    { id: "SK-TSCE-T1", type: "order", points: 2, dok: 2, passages: ["p2"], std: ["3.T.SS.1.a", "3.T.T.2.b"],
      prompt: "Put the events in order, from the first cause to the last effect.",
      steps: [
        "Beavers pile sticks, rocks and mud across a stream.",
        "The dam blocks the moving water.",
        "A calm, deep pond forms.",
        "Ducks, frogs and fish move in."
      ],
      clue: "Ask what each event causes. The cause always comes before its effect.",
      why: "The order is: beavers pile sticks, rocks and mud across a stream, the dam blocks the moving water, a calm pond forms, and then ducks, frogs and fish move in. Each event makes the next one happen. The pile of sticks is the dam, the blocked water fills up into a pond, and the calm pond gives the animals a home." },
    { id: "SK-TSCE-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read the sentence from paragraph 4 in the box. Which part is the CAUSE?",
      stem: ["Coyotes and other hunters cannot easily get inside because the lodge doors are under the water."],
      choices: [
        { text: "The lodge doors are under the water.", correct: true },
        { text: "Hunters cannot easily get inside." },
        { text: "Beavers build a lodge in the pond." },
        { text: "Coyotes are hunting for food." }
      ],
      clue: "Find the clue word. Then ask: Which part happened FIRST, and which part happened because of it?",
      why: "The answer is \"The lodge doors are under the water.\" That comes first, and it keeps hunters out. The sentence tells the effect first and the cause after the clue word because." },
    { id: "SK-TSCE-T3", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence uses a cause-and-effect clue word to tell what happens right after the dam blocks the water? Choose the sentence in the passage.",
      targets: ["p2:2:3", "p2:3:1", "p2:3:2", "p2:3:3", "p2:4:2"],
      answer: ["p2:3:2"], pick: 1,
      clue: "Find where the dam blocks the water. Then look for a clue word in a sentence close by that tells the effect.",
      why: "The answer is \"As a result, the water backs up and spreads out.\" The clue words As a result come right after the dam blocks the water. The sentence with because is about the lodge, not the dam." },
    { id: "SK-TSCE-T4", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "According to paragraph 5, why do ducks, frogs and fish move into the pond?",
      choices: [
        { text: "The calm water makes a good home.", correct: true },
        { text: "The beavers bring them food." },
        { text: "The stream has dried up." },
        { text: "The hunters chase them there." }
      ],
      clue: "Find the clue word in paragraph 5 that tells why. Read the words after it.",
      why: "The answer is \"The calm water makes a good home.\" Paragraph 5 says the calm water makes a good home, so these animals move in." },
    { id: "SK-TSCE-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which clue word could take the place of \"because\" in paragraph 4 without changing the meaning?",
      choices: [
        { text: "since", correct: true },
        { text: "however" },
        { text: "for example" },
        { text: "first" }
      ],
      clue: "Try each word in the sentence. Which one still tells WHY something happens?",
      why: "The answer is since. Since and because both tell why something happens. However shows a difference, for example adds a detail and first tells order." }
  ],
  /* PP-004 form B of the skill check (formB-info). Same codes, points (6) and DOK mix as form A,
     on the new passage p3. NEEDS INDEPENDENT REVIEW; see docs/audits/work/pp004-formB-formB-info.md. */
  testB: [
    { id: "SK-TSCE-TB1", type: "order", points: 2, dok: 2, passages: ["p3"], std: ["3.T.SS.1.a", "3.T.T.2.b"],
      prompt: "These events from the article make a chain. Put them in order, so that each event causes the next one.",
      steps: [
        "Wind carries loose, dry sand across the beach.",
        "The sand hits the stems of the sea oats and slows down.",
        "The sand drops and forms a little pile around each plant.",
        "Over many years, the little piles grow into tall dunes."
      ],
      clue: "Start with the wind. For each event, ask, \"What does this make happen next?\" Paragraphs 2 and 3 tell the chain.",
      why: "The order is: wind carries loose sand across the beach, the sand hits the sea oat stems and slows down, the sand drops into a little pile around each plant, and over many years the piles grow into tall dunes. Each event causes the next one. The sand cannot slow down until the wind has carried it to the plants, and the dunes cannot grow until the little piles form." },
    { id: "SK-TSCE-TB2", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Which sentence from the article tells the effect FIRST and the cause after it?",
      choices: [
        { text: "\"Sea oats are protected in Georgia because they help keep the coast safe.\"", correct: true },
        { text: "\"People's feet can crush the plants, so visitors use wooden walkways to cross the dunes.\"" },
        { text: "\"When the sand hits the stems of the sea oats, it slows down.\"" },
        { text: "\"During big storms, huge waves crash onto the beach.\"" }
      ],
      clue: "In each sentence, find the part that happened first. That part is the cause. Which sentence saves the cause for the end?",
      why: "The answer is \"Sea oats are protected in Georgia because they help keep the coast safe.\" The plants help keep the coast safe, and that is why they are protected, but the sentence tells the protecting first and the reason after the clue word because. In the other sentences the cause comes first: feet crushing plants, sand hitting stems, and big storms." },
    { id: "SK-TSCE-TB3", type: "hottext", points: 1, dok: 2, passages: ["p3"],
      prompt: "Which sentence explains how dunes help keep people safe during a storm? Choose the sentence in the passage.",
      targets: ["p3:4:3", "p3:5:1", "p3:5:2", "p3:5:3", "p3:6:4"],
      answer: ["p3:5:3"], pick: 1,
      clue: "Find the paragraph about storms. Look for a sentence with a clue word that tells what the dunes do and what happens because of it.",
      why: "The answer is \"The dunes block many of the waves, so the homes and roads behind them stay safer.\" Blocking the waves is the cause, and the clue word so leads to the effect: homes and roads stay safer. \"Dunes help people, too\" says that dunes help but not how. The sentence about huge waves tells what storms do, not what dunes do. The two sentences about wind tell what happens to the sand, not how people are kept safe." },
    { id: "SK-TSCE-TB4", type: "mc", points: 1, dok: 1, passages: ["p3"],
      prompt: "According to paragraph 4, what happens because the roots of sea oats spread out like a net?",
      choices: [
        { text: "They hold the sand in place.", correct: true },
        { text: "They pull water up from the ocean." },
        { text: "They make the waves much smaller." },
        { text: "They keep the plants from being buried." }
      ],
      clue: "Find the words like a net in paragraph 4. Read the clue word after them and the effect that follows.",
      why: "The answer is \"They hold the sand in place.\" Paragraph 4 says the roots spread out like a net, so they hold the sand in place. The article does not say the roots pull up ocean water or shrink waves, and paragraph 3 says sea oats do get buried." },
    { id: "SK-TSCE-TB5", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "In paragraph 3, the author uses the clue word Since. What does it tell the reader?",
      choices: [
        { text: "A cause comes right after it.", correct: true },
        { text: "A step in order comes right after it." },
        { text: "An example comes right after it." },
        { text: "A surprise comes right after it." }
      ],
      clue: "Read the sentence that starts with Since. Ask which part happens first and makes the other part happen.",
      why: "The answer is \"A cause comes right after it.\" In \"Since they keep growing up through the sand, they trap more and more of it,\" the words after Since tell why: the plants keep growing. Trapping more sand is the effect. Since works like because here. It does not tell a step, give an example or show a surprise." }
  ]
});
PP.addLesson({
  key: "TS-PS",
  code: "3.T.SS.1.a",
  codes: ["3.T.SS.1.a", "3.T.T.1.b"],
  title: "Problem and solution: the tries and what works",
  clues: {
    words: ["problem", "tried", "but", "decided", "solved", "finally"],
    ask: "What's the problem?",
    draw: "Write the problem in a box at the top. Under it, draw a box for each try and mark it \"worked\" or \"didn't work.\" Put the solution in a box at the bottom."
  },
  coach: {
    mixup: "Problem and solution overlaps with story elements. Story elements is the whole map: who, where, the problem and the ending. Problem and solution zooms in on the tries and WHY each one did or did not work. That \"why\" is the skill to push. Also watch the word \"but\": here it usually signals a try that did not work.",
    strong: "\"She tried flipping faster and using a bigger spatula, but those didn't work because the real problem was that the pan wasn't hot and had no butter.\"",
    notyet: "Jumping straight to the end: \"She made pancakes.\" Ask: \"What did she try first? Why didn't it work?\"",
    ido: "Talk through a real problem from your day: \"The printer wouldn't work. I tried turning it off. That didn't help. Then I saw it was out of paper.\"",
    wedo: "Read a Watch Me example together. Ask: \"Did that try work? What clue word tells you?\"",
    youdo: "Your child draws the problem-and-solution map for a Practice story: the problem, each try marked worked or didn't, and the solution.",
    everyday: "When your child is stuck on something, like a game level or a hard homework problem, ask: \"What have you tried? Why didn't it work? What's the real problem?\""
  },
  teach: {
    big: "The author shows a problem, the things someone tries, and the solution that finally works.",
    points: [
      "The problem is what is wrong. Look for the word problem or for something that keeps going wrong. Then ask why the problem matters: what can the characters not do until it is fixed?",
      "The tries are what someone does to fix it. Some tries do not work. The word but often comes right after a try. It tells you the try did not work. But can also show a difference, so check what comes just before it.",
      "Failed tries matter. They help show what the REAL problem was. Sometimes one character guesses the cause while another works it out, so compare what each one does.",
      "The solution is what finally fixes it. Clue words like decided, solved and finally point to it.",
      "You see this in stories and in true texts, too. A town with too much litter might add recycling bins. To compare two problem-and-solution texts, check the same part in each: the tries, who finds the real problem, and what happens after the solution."
    ],
    words: [
      { term: "problem", means: "what is wrong or needs fixing" },
      { term: "try", means: "something a person does to fix the problem" },
      { term: "solution", means: "what finally fixes the problem" }
    ],
    example: {
      label: "What it looks like",
      lines: ["Zoe's team had a PROBLEM. Their soccer balls kept rolling away down the hill. They TRIED stacking them in a pile, BUT the pile fell over. Then they DECIDED to use an old laundry basket. FINALLY, the balls stayed put, and the problem was SOLVED."],
      note: "Problem: the balls roll away. Try: a pile, BUT it fell over, so that try did not work. Solution: a laundry basket. The words in CAPS are the clue words."
    },
    tip: "On the test, a question may ask what a character tried, why a try did not work, or how the problem was solved. Find the problem first, then follow each try."
  },
  learn: [
    {
      show: ["Kim had a problem. Her kite would not fly. She tried running fast, but the kite fell down. Then she decided to wait for wind. Finally, a big gust came, and up it went!"],
      ask: "What did Kim try that did not work? What finally worked?",
      steps: [
        "Find the clue word problem. Her kite would not fly.",
        "Find tried and but. She tried running fast, but the kite fell. That try did not work.",
        "Find decided and finally. She waited for wind, and that worked."
      ],
      answer: "Running fast did not work. Waiting for the wind finally worked."
    },
    {
      show: ["The class had a problem. The fish tank kept turning green. They tried wiping the glass, but it got green again. Then they moved the tank away from the sunny window. The problem was solved."],
      ask: "Why didn't wiping the glass work?",
      steps: [
        "Find the problem: the tank kept turning green.",
        "Find the try with but: wiping the glass did not work.",
        "Ask: What finally worked? Moving the tank out of the sun. So the sun was the real problem."
      ],
      answer: "Wiping did not fix the real cause. The sunny window made the tank turn green, so it kept coming back until they moved the tank."
    },
    /* B1 (expansion 2026-10-22): models the real problem in a true text, a helper's role, and testing a new plan. */
    {
      show: ["The food bank in Clayton had a problem. Its shelves kept running out of peanut butter. First, the workers hung more signs that said, \"Please give food.\" But people still brought mostly cans of soup. Then a volunteer read the signs again. They never said which foods were needed! So the workers made a list called \"Foods We Need\" and posted it at the grocery store. The next week, jars of peanut butter filled the shelves."],
      ask: "Why didn't more signs work? Which sentence explains why the list was needed? Would a bigger sign have worked?",
      steps: [
        "Find the problem and the try. The shelves run out of peanut butter. The workers hang more signs, but people still bring soup.",
        "Ask why the try failed. The signs never said which foods were needed. That was the real problem, and the volunteer is the one who found it.",
        "Notice each sentence's job. Without \"They never said which foods were needed!\" a reader would not know why the workers made a list. A sentence that explains why a try failed makes the solution make sense.",
        "Test a new plan against the real problem. A bigger sign would help only if it said which foods were needed. This true text goes problem, try, the real problem, solution and result, just like a story."
      ],
      answer: "More signs did not tell people which foods were needed. A volunteer found that real problem by reading the signs again. A bigger sign would work only if it listed the foods, because that is what fixes the real problem."
    }
  ],
  parent: "When something goes wrong at home, talk it through out loud: \"What's the problem? What did we try? Did it work? Why not? What finally worked?\" Let your child use the words tried, but and finally.",
  passages: [
    { id: "p1", title: "The Ant Parade", genre: "Literary text",
      paragraphs: [
        ["Jamal had a problem.", "Every morning, a long line of tiny black ants marched across the kitchen floor.", "They were heading straight for the dog's food bowl."],
        ["\"Gross!\" Jamal said.", "His dog, Pepper, just sat and stared at the ants."],
        ["First, Jamal tried wiping the ants away with a wet paper towel.", "But the next morning, a new line of ants marched right back."],
        ["Then he tried moving the bowl to the other side of the kitchen.", "But the ants just followed the smell of the food and found it again."],
        ["Jamal asked his grandma for help.", "\"Ants do not like to cross water,\" she said.", "\"Let's build a moat, like a castle has.\""],
        ["They decided to set the food bowl inside a wide, shallow pan.", "Then Jamal poured a little water into the pan, all around the bowl."],
        ["The next morning, the ants marched up to the pan and stopped.", "They could not get across the water.", "Finally, the problem was solved, and Pepper ate breakfast in peace."]
      ] },
    { id: "p2", title: "The Muddy Path", genre: "Literary text",
      paragraphs: [
        ["Room 9 had a problem.", "The path to their school garden turned into thick mud every time it rained.", "Kids slipped, and shoes came back brown and gooey."],
        ["Ms. Ortiz's class wanted to fix it.", "First, they tried laying flat boards across the mud.", "But the boards sank and got slick, and Ana almost fell."],
        ["Next, they tried pouring sand on the path.", "But the next big rain washed the sand away into the grass."],
        ["Then Leo looked closely.", "He saw that rainwater ran downhill and sat in one low spot on the path.", "That low spot was the real cause of the mud."],
        ["The class decided to fill the low spot with dirt.", "Then they spread a thick layer of wood chips on top.", "Wood chips soak up some water and give shoes something to grip."],
        ["After the next storm, the class walked out to check.", "The path was dry enough to walk on.", "The problem was finally solved!"]
      ] },
    /* B1 (expansion 2026-10-22): p3-p5 are used only by core (p3 set 1, p4 set 2 and one set 3 compare
       item, p5 set 3); p6 and p7 only by the similar bank. Never used by test. After the B1 reviews, p3, p4
       and p7 were rebuilt so the stories do not share form A's layout (two failed tries, then "looked
       closely" and the cause in paragraph 4, then "The problem was finally solved!"). NEEDS INDEPENDENT RE-REVIEW. */
    { id: "p3", title: "The Wobbly Table", genre: "Literary text",
      paragraphs: [
        ["Every night at dinner, Aunt Bea's kitchen table wobbled.", "When anyone leaned on it, soup sloshed out of the bowls."],
        ["Aunt Bea was sure the floor under the table was bumpy.", "So she tried pulling the table closer to the wall, where the floor was smooth.", "But it wobbled there, too."],
        ["\"If the floor is smooth, the trouble must be the table,\" Niko said.", "He gave each leg a little shake.", "Three legs stayed still, but the fourth leg wiggled back and forth.", "A screw at the top of that leg was loose."],
        ["Aunt Bea found her screwdriver, and Niko turned the screw until it was tight."],
        ["The next night, Niko leaned both elbows on the table.", "Nothing moved, and not one drop of soup spilled.", "Aunt Bea served everyone a second bowl to celebrate."]
      ] },
    { id: "p4", title: "The Tangled Ropes", genre: "Literary text",
      paragraphs: [
        ["The Maple Street Jumpers practiced Double Dutch every afternoon in Ms. Bell's driveway.", "They were getting ready for a show at the town fair.", "The best part of the show was when Amari jumped into the middle of the ropes.", "But every time she jumped in, the two ropes tangled and slapped her ankles."],
        ["Amari sat on the curb and thought about it.", "Then she watched Imani and Kiara turn the empty ropes.", "Imani's hands swung fast, but Kiara's swung slowly.", "\"The ropes are not keeping the same beat,\" Amari said."],
        ["\"The ropes are just old,\" Kiara said.", "\"Let's get new ones.\"", "So the team bought a brand-new pair.", "But the new ropes tangled just like the old ones."],
        ["\"Let's try it your way,\" Kiara told Amari.", "The turners decided to chant a jump-rope rhyme while they turned.", "Each word of the rhyme told them when to swing, so their hands kept the same beat."],
        ["At the fair, the ropes spun in a smooth, even pattern.", "Amari hopped in and jumped fifty times without one tangle."]
      ] },
    { id: "p5", title: "Dots on the Glass", genre: "Informational text",
      paragraphs: [
        ["The library at Hillcrest Elementary has a wall of tall windows.", "Students love to read there in the sunshine.", "But the windows caused a problem.", "Several times a week, a bird flew into the glass with a loud thump."],
        ["First, the students stuck one big hawk-shaped sticker in the middle of the glass.", "But birds kept hitting the window, just a few feet from the sticker."],
        ["A scientist from the nature center explained why.", "When a bird looks at a window, it sees trees and sky reflected in the glass, like in a mirror.", "To the bird, the window looks like open air.", "One sticker covered only a tiny spot.", "The rest of the glass still looked like a clear path to fly through."],
        ["So the class decided to cover the whole window with small white dots.", "They placed the dots in rows, about two inches apart.", "Now birds could tell that something solid was in the way."],
        ["Since then, the thumps have almost stopped.", "Students still read in the sunshine, and the birds stay safe outside."]
      ] },
    { id: "p6", title: "The Droopy Bean Plants", genre: "Literary text",
      paragraphs: [
        ["Room 4 grew bean plants in paper cups on a shelf in the back corner.", "The class wanted to measure how tall the plants could grow.", "But after a week, the plants were pale and droopy."],
        ["First, the class tried giving the plants more water.", "But the soil turned soggy, and the plants still drooped."],
        ["Then Mr. Hale held one cup up next to the window.", "\"Look how the stems lean toward the light,\" he said.", "The back corner was the darkest spot in the room."],
        ["The class moved the cups to the sunny windowsill.", "In three days, the leaves were green and the stems stood up tall."]
      ] },
    { id: "p7", title: "The Soggy Sandwich", genre: "Literary text",
      paragraphs: [
        ["Every day at lunch, Kayla's turkey sandwich was soggy.", "The bread was so wet that it fell apart in her hands."],
        ["First, she tried wrapping the sandwich tighter in plastic.", "But at lunch, it was soggy again."],
        ["The next day, Kayla peeled the soggy sandwich open before she ate it.", "The bread was dry at the edges.", "It was wettest right under the juicy tomato slices."],
        ["\"It's the tomatoes!\" she told her big brother, Jonah, that night.", "So the next morning, she packed the tomatoes in a little cup and added them at lunch."],
        ["That day, her sandwich was soft but not soggy, and she ate every bite.", "Jonah started packing his tomatoes in a cup, too."]
      ] },
    /* Expansion 2026-10-22 (batch SIM-1): p8 and p9 are used only by similar items. NEEDS INDEPENDENT REVIEW. */
    { id: "p8", title: "The Slow Sink", genre: "Literary text",
      paragraphs: [
        ["The sink in Room 7 had a problem.", "After the class washed paintbrushes, the water drained so slowly that it sat in the bowl for an hour."],
        ["First, Ms. Rudd poured hot water down the drain.", "The sink gurgled, but the water still sat there."],
        ["Next, the class tried a plunger.", "Splash! Gray water splashed on the floor, and the sink was just as slow as before."],
        ["Then Mr. Okon, the custodian, knelt down and looked at the curved pipe under the sink.", "\"Water drains slowly when something blocks the pipe,\" he said."],
        ["He unscrewed the pipe over a bucket and tipped it.", "Out slid a clump of paint-stained bristles."],
        ["Mr. Okon screwed the pipe back on.", "Ms. Rudd turned on the water, and it swirled down the drain in seconds.", "Then she put a small screen over the drain to catch any more bristles."]
      ] },
    { id: "p9", title: "Lights Out for Sea Turtles", genre: "Informational text",
      paragraphs: [
        ["On the beaches of Georgia, baby sea turtles hatch at night.", "They should crawl toward the bright, open ocean.", "But on some beaches, many hatchlings crawled the wrong way.", "They headed toward the lights of the hotels."],
        ["First, a beach town asked one hotel to turn off its lights.", "But hatchlings still crawled toward the road.", "Scientists explained why.", "White lights from many buildings and street lamps glowed at once, and hatchlings follow bright light.", "One hotel was only a small part of the glow."],
        ["So the town changed the lights on the whole beach.", "Lamps got shields so the light shone down, and the bulbs were changed to dim amber.", "Hatchlings cannot see amber light as well."],
        ["Now most hatchlings find the ocean on their own."]
      ] }
  ],
  practice: [
    { id: "SK-TSPS-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "What is Jamal's problem?",
      choices: [
        { text: "Ants keep marching to the dog's food bowl.", correct: true },
        { text: "His dog will not eat any of its food." },
        { text: "The kitchen floor is wet and slippery." },
        { text: "His grandma will not help him." }
      ],
      clue: "Find the clue word problem in paragraph 1. Then read what keeps going wrong every morning.",
      why: "The answer is \"Ants keep marching to the dog's food bowl.\" Paragraph 1 says a line of ants marches across the floor every morning, heading for the bowl." },
    { id: "SK-TSPS-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence shows that Jamal's FIRST try did not work? Choose the sentence in the passage.",
      targets: ["p1:3:1", "p1:3:2", "p1:4:1", "p1:4:2", "p1:6:1"],
      answer: ["p1:3:2"], pick: 1,
      clue: "Find Jamal's first try. Then read the sentence right after it. What happened the next morning?",
      why: "The answer is \"But the next morning, a new line of ants marched right back.\" Jamal's first try was wiping the ants away. The very next morning, a new line of ants marched right back, so wiping did not stop them. The other sentence about the ants coming back is about his second try." },
    { id: "SK-TSPS-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What finally solves the problem?",
      choices: [
        { text: "a pan of water all around the food bowl", correct: true },
        { text: "moving the food bowl across the kitchen" },
        { text: "wiping the ants up with a paper towel" },
        { text: "letting Pepper chase the ants away" }
      ],
      clue: "Look for the clue words decided and finally. What did Jamal and his grandma do that kept the ants out?",
      why: "The answer is \"a pan of water all around the food bowl.\" They decided to set the bowl in a pan of water. Finally, the ants could not get across, and the problem was solved." },
    { id: "SK-TSPS-P4", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      prompt: "Choose the clue words that best complete the sentence about paragraph 4.",
      text: "Jamal {0} moving the bowl, {1} the ants found it again.",
      slots: [
        { options: ["tried", "solved", "finally"], answer: 0 },
        { options: ["but", "so", "for example"], answer: 0 }
      ],
      clue: "Read the sentence with each choice. One blank tells about an attempt. The other blank tells how that attempt turned out.",
      why: "The answers are tried and but. Jamal tried moving the bowl, but the ants found it again. Tried shows an attempt, and but shows that this attempt did not work." },
    { id: "SK-TSPS-P5", type: "mc", points: 1, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.1.b"],
      prompt: "Why didn't moving the bowl solve the problem?",
      choices: [
        { text: "The ants could still smell the food and find it.", correct: true },
        { text: "Jamal moved the bowl only a little way." },
        { text: "The ants were still on the wet paper towel." },
        { text: "Pepper pushed the bowl back to its spot." }
      ],
      clue: "A try fails for a reason. The story usually tells what went wrong after the try.",
      why: "The answer is \"The ants could still smell the food and find it.\" Paragraph 4 says the ants followed the smell and found the bowl again. Moving the bowl did not stop the smell, so the ants kept coming. The bowl went to the other side of the kitchen, not a little way; the paper towel was an earlier try; and Pepper only sat and stared." },
    { id: "SK-TSPS-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read the sentence from paragraph 3 in the box. What does the word \"But\" show here?",
      stem: ["But the next morning, a new line of ants marched right back."],
      choices: [
        { text: "A try did not work.", correct: true },
        { text: "Two things are different." },
        { text: "Something happened first." },
        { text: "A new detail is added." }
      ],
      clue: "The word but has more than one job. Read the sentence before this one. Is the author pointing out a difference between two things, or telling what happened after Jamal's plan?",
      why: "The answer is \"A try did not work.\" Jamal wiped the ants away, but they came back. In a problem-and-solution text, but often shows a failed try. In a compare-and-contrast text, but shows a difference." }
  ],
  /* ---------- B1 core (expansion 2026-10-22, author b1b; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five. { ref } reuses Try item P5 by id. After the B1 reviews
     (2A M-2 / 2B M-2), P4 and P6 are NOT in core: they share key logic ("but" shows a failed try), so
     both now sit in Practice Together with P1-P3 (the engine shows practice minus core refs there).
     New ids are numbered by their place in the fifteen. Hints and Show me how for practice items are in addons.
     Author log: docs/expansion-2026-10-22/batches/B1-b1b-author-log.md (§8). NEEDS INDEPENDENT RE-REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TSPS-P5" },
      { id: "SK-TSPS-C02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p1"],
        prompt: "How does Grandma help solve the problem?",
        choices: [
          { text: "She knows something about ants that gives Jamal a new plan.", correct: true },
          { text: "She pours water into the pan all around the food bowl." },
          { text: "She moves the food bowl to the other side of the kitchen." },
          { text: "She wipes the ants away with a wet paper towel." }
        ],
        clue: "Characters help solve a problem in different ways. Ask what this character does that changes what happens next.",
        hints: [
          "Characters help solve a problem in different ways. Ask what this character does that changes what happens next.",
          "For each choice, find who does it in the story.",
          "Jamal is the one who pours the water into the pan in paragraph 6, so that is not Grandma's part. Test the other choices the same way."
        ],
        how: [
          "Check who does each thing. Jamal wipes the ants (paragraph 3), moves the bowl (paragraph 4) and pours the water (paragraph 6).",
          "In paragraph 5, Grandma says that ants do not like to cross water and suggests a moat.",
          "The answer is \"She knows something about ants that gives Jamal a new plan.\" Her idea leads to the solution."
        ],
        misconception: "A common mix-up is giving a helper credit for what the main character does. Check who does each thing.",
        why: "The answer is \"She knows something about ants that gives Jamal a new plan.\" Grandma says ants do not like to cross water, which leads to the moat. Jamal is the one who wipes the ants, moves the bowl and pours the water." },
      { id: "SK-TSPS-C03", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p3"],
        prompt: "Complete the sentences about the story. Choose the best answer for each blank.",
        text: "The problem in the story is that {0}. Aunt Bea's try is to {1}.",
        slots: [
          { options: ["the table wobbles when anyone leans on it", "the floor by the wall is too smooth", "Niko leans his elbows on the table"], answer: 0 },
          { options: ["pull the table closer to the wall", "shake each leg of the table", "lean both elbows on the table"], answer: 0 }
        ],
        clue: "The problem is what keeps going wrong. A try is something a character does to fix it.",
        hints: [
          "The problem is what keeps going wrong. A try is something a character does to fix it.",
          "For each choice, ask: is this something going wrong, or something a person does about it? And who does it?",
          "The smooth floor is where Aunt Bea moves the table, not what goes wrong, so it does not fit the first blank. Test the other choices the same way."
        ],
        how: [
          "Paragraph 1: every night the table wobbles, and soup sloshes out when anyone leans on it. That is the problem.",
          "Paragraph 2: Aunt Bea thinks the floor is bumpy, so she pulls the table closer to the wall. That is her try.",
          "The answers are \"the table wobbles when anyone leans on it\" and \"pull the table closer to the wall.\"",
          "Shaking the legs is something Niko does later, and leaning on the table comes after the fix."
        ],
        misconception: "A common mix-up is calling a place or a later action the problem. The problem is what keeps going wrong.",
        why: "The answers are \"the table wobbles when anyone leans on it\" and \"pull the table closer to the wall.\" The wobble is what keeps going wrong, and moving the table is Aunt Bea's try. Niko shakes the legs and leans on the table later." },
      { id: "SK-TSPS-C04", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p3"],
        prompt: "Which sentence tells the real reason the table wobbles? Choose the sentence in the passage.",
        targets: ["p3:1:2", "p3:2:1", "p3:2:3", "p3:3:1", "p3:3:2", "p3:3:4", "p3:4:1"],
        answer: ["p3:3:4"], pick: 1,
        clue: "Failed tries help show the real problem. The real reason is what makes something go wrong, not what happens because of it.",
        hints: [
          "Failed tries help show the real problem. The real reason is what makes something go wrong, not what happens because of it.",
          "Aunt Bea's try does not stop the wobble. Read on to find what Niko does next.",
          "Aunt Bea's idea about a bumpy floor was only a guess, and the move to the wall showed it was wrong. Test each other sentence: if that were changed, would the wobble stop?"
        ],
        how: [
          "Aunt Bea guesses the floor is bumpy, but the table wobbles on the smooth floor, too. So the floor is not the real trouble.",
          "Niko says the trouble must be the table. He shakes each leg and finds out why one leg moves.",
          "The answer is \"A screw at the top of that leg was loose.\" That is what makes the table wobble.",
          "Soup sloshing is what the wobble causes, Niko's words name the table but not the cause, shaking the legs is how he checks, and tightening the screw is the fix."
        ],
        misconception: "A common mix-up is choosing a character's guess (a bumpy floor) or an effect (spilled soup) instead of the sentence that tells the real cause.",
        why: "The answer is \"A screw at the top of that leg was loose.\" Moving to the smooth floor did not help, so the floor was not the cause; the loose leg was. Spilled soup is an effect, Niko's words only say the trouble is the table, shaking is how he checks, and tightening the screw is the fix." },
      { id: "SK-TSPS-C05", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        stem: ["Three legs stayed still, but the fourth leg wiggled back and forth."],
        prompt: "Read the sentence from paragraph 3 in the box. What does the word \"but\" show here?",
        choices: [
          { text: "One leg acts differently from the other three.", correct: true },
          { text: "Niko's try to fix the table did not work." },
          { text: "Something happened before Niko shook the legs." },
          { text: "The table is fixed and has stopped wobbling." }
        ],
        clue: "But can do different jobs. It can show that a try did not work, or that two things are different. Read what comes before it and after it.",
        hints: [
          "But can do different jobs. It can show that a try did not work, or that two things are different. Read what comes before it and after it.",
          "Read the two parts of the sentence: the part before but and the part after it.",
          "Nothing has been fixed yet in paragraph 3, so the table has not stopped wobbling. Test the choices that are left against the two parts of the sentence."
        ],
        how: [
          "Before but: three legs stay still. After but: the fourth leg wiggles.",
          "Shaking the legs is a check, not a fix, so no try has failed here.",
          "The answer is \"One leg acts differently from the other three.\" Here but shows a difference.",
          "In a problem-and-solution story, but often shows a failed try, so always check what comes before and after it."
        ],
        misconception: "A common mix-up is thinking but always shows a try that failed. Here it shows that two things are different.",
        why: "The answer is \"One leg acts differently from the other three.\" Three legs stay still, but the fourth one wiggles, so but shows a difference. Nobody has tried a fix in this sentence, nothing happens first, and the table is not fixed yet." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TSPS-C06", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "Amari and Kiara handle the problem in different ways. Choose the best answer for each blank.",
        text: "When the ropes first tangle, Amari wants to {0}. Kiara thinks the team should {1}.",
        slots: [
          { options: ["find out why the ropes tangle", "chant a rhyme while the turners swing", "buy a brand-new pair of ropes"], answer: 0 },
          { options: ["buy a brand-new pair of ropes", "watch the turners swing the empty ropes", "move practice to a smoother driveway"], answer: 0 }
        ],
        clue: "Characters can handle the same problem in different ways. Look at what each girl says and does about the tangles.",
        hints: [
          "Characters can handle the same problem in different ways. Look at what each girl says and does about the tangles.",
          "Reread paragraphs 1 to 4, and notice who does each thing.",
          "The chant comes in paragraph 4, after the new ropes, so it is not what Amari wanted when the ropes first tangled. Test the other choices against what each girl says and does."
        ],
        how: [
          "In paragraph 2, Amari sits on the curb and thinks about the tangles. Watching the turners is something Amari does, not Kiara.",
          "In paragraph 3, Kiara says the ropes are just old and wants new ones.",
          "So Amari wants to \"find out why the ropes tangle,\" and Kiara thinks the team should \"buy a brand-new pair of ropes.\"",
          "The chant comes later, in paragraph 4, and nobody talks about a different driveway."
        ],
        misconception: "A common mix-up is mixing up which character said what. Check who is speaking in each paragraph.",
        why: "The answers are \"find out why the ropes tangle\" and \"buy a brand-new pair of ropes.\" Amari stops to think and watch when the tangles start, and Kiara says the ropes are just old and wants new ones. The chant comes later, watching is what Amari does, and nobody talks about a different driveway." },
      { id: "SK-TSPS-C07", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "Sort the story's events into the parts of a problem-and-solution map. Match each event to its part.",
        cols: ["the problem", "a try that did not work", "the solution", "proof that it worked"],
        rows: [
          { text: "The ropes tangle every time Amari jumps in.", answer: 0 },
          { text: "The team buys a brand-new pair of ropes.", answer: 1 },
          { text: "The turners chant a rhyme as they swing.", answer: 2 },
          { text: "Amari jumps fifty times without one tangle.", answer: 3 }
        ],
        clue: "A problem-and-solution map has parts: what is wrong, the tries, what finally fixes it, and what shows that the fix worked.",
        hints: [
          "A problem-and-solution map has parts: what is wrong, the tries, what finally fixes it, and what shows that the fix worked.",
          "For each event, find it in the story. Then read what happens right after it.",
          "The ropes tangling is what goes wrong at the start, so it is the problem. Sort the other three events the same way."
        ],
        how: [
          "The problem: the ropes tangle every time Amari jumps in (paragraph 1).",
          "A try that did not work: the new ropes (paragraph 3). The clue word but shows they still tangled.",
          "The solution: the turners chant a rhyme as they swing (paragraph 4).",
          "Proof that it worked: at the fair, Amari jumps fifty times without one tangle (paragraph 5)."
        ],
        misconception: "A common mix-up is mixing up the solution and the proof. The solution is what the characters do; the proof is what shows the problem has stopped.",
        why: "The problem is that the ropes tangle every time Amari jumps in. The new ropes are a try that did not work. Chanting a rhyme is the solution, and Amari's fifty jumps without a tangle are the proof that it worked." },
      { id: "SK-TSPS-C08", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "Why is the tangling such a big problem for the Maple Street Jumpers?",
        choices: [
          { text: "The best part of their show needs Amari to jump in.", correct: true },
          { text: "The tangled ropes are too old to use in a show." },
          { text: "Amari has never jumped Double Dutch before." },
          { text: "Ms. Bell does not want them in her driveway." }
        ],
        clue: "A problem matters when it gets in the way of something the characters want. Ask what the team wants.",
        hints: [
          "A problem matters when it gets in the way of something the characters want. Ask what the team wants.",
          "Reread paragraph 1.",
          "Nothing in the story says Amari is new to Double Dutch. Test the choices that are left against paragraph 1."
        ],
        how: [
          "Paragraph 1 says the team is getting ready for a show at the town fair.",
          "The best part of the show is when Amari jumps into the middle of the ropes, but every time she jumps in, the ropes tangle.",
          "The answer is \"The best part of their show needs Amari to jump in.\" Until the tangles stop, the team cannot do its best part.",
          "Nothing in paragraph 1 says the ropes are too old for a show, nothing says Amari is new to Double Dutch, and Ms. Bell lets them practice in her driveway."
        ],
        misconception: "A common mix-up is choosing a detail from the story that does not explain why the problem matters.",
        why: "The answer is \"The best part of their show needs Amari to jump in.\" The team is getting ready for a show, and its best part is Amari jumping in, so the tangles get in the way. Paragraph 1 says nothing about old ropes, nothing says Amari is new, and the team practices in Ms. Bell's driveway." },
      { id: "SK-TSPS-C09", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "The new ropes tangle just like the old ones. What does this failed try show the team?",
        choices: [
          { text: "The ropes were never the real trouble.", correct: true },
          { text: "The new ropes were too short for the turners." },
          { text: "Amari should jump in a little later." },
          { text: "The team needs more time to practice." }
        ],
        clue: "A try that fails can teach the characters something about the problem. Ask what the team learns when this try does not work.",
        hints: [
          "A try that fails can teach the characters something about the problem. Ask what the team learns when this try does not work.",
          "Reread paragraph 3.",
          "Nothing in the story says the new ropes were too short. Test the choices that are left against paragraphs 2 and 3."
        ],
        how: [
          "Kiara thought the ropes were just old, so the team bought new ones.",
          "The new ropes tangled just like the old ones. Changing the ropes changed nothing.",
          "The answer is \"The ropes were never the real trouble.\" Something else was making them tangle.",
          "Nothing says the new ropes were short, and this try changed only the ropes, not when Amari jumps or how long the team practices."
        ],
        misconception: "A common mix-up is thinking a failed try teaches nothing. When changing something does not help, that thing was not the cause.",
        why: "The answer is \"The ropes were never the real trouble.\" The team changed only the ropes, and the tangles did not stop, so the ropes were not the cause. Nothing says the new ropes were short, and the try was not about when Amari jumps or how long the team practices." },
      { id: "SK-TSPS-C10", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "What is really causing the ropes to tangle?",
          choices: [
            { text: "The turners swing their hands at different speeds.", correct: true },
            { text: "The old ropes are too worn out to turn smoothly." },
            { text: "The turners stand too close to each other." },
            { text: "Amari's sore ankles make her trip on the ropes." }
          ] },
        partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
          choices: [
            { text: "\"Imani's hands swung fast, but Kiara's swung slowly.\"", correct: true },
            { text: "\"Then she watched Imani and Kiara turn the empty ropes.\"" },
            { text: "\"But the new ropes tangled just like the old ones.\"" },
            { text: "\"But every time she jumped in, the two ropes tangled and slapped her ankles.\"" }
          ] },
        clue: "Failed tries help show the real problem. When a try does not work, the thing it changed was not the real trouble.",
        hints: [
          "Failed tries help show the real problem. When a try does not work, the thing it changed was not the real trouble.",
          "Reread paragraphs 1 to 3.",
          "Nothing in the story says the turners stand too close together. For Part B, choose the sentence that shows the cause, not one that shows something going wrong."
        ],
        how: [
          "New ropes still tangle, so the ropes are not the trouble.",
          "In paragraph 2, Amari watches the turners: Imani's hands swing fast, and Kiara's swing slowly. The two ropes cannot keep the same beat.",
          "Part A: The turners swing their hands at different speeds. Part B: \"Imani's hands swung fast, but Kiara's swung slowly.\"",
          "Watching the turners is how Amari finds the cause, not the cause itself. The other two sentences show the tangles, not why they happen."
        ],
        misconception: "A common mix-up is picking a sentence that shows something going wrong. Look for the sentence that tells why it goes wrong.",
        why: "Part A: The turners swing their hands at different speeds. Part B: \"Imani's hands swung fast, but Kiara's swung slowly.\" New ropes did not help, so the ropes were not the cause. Watching is how Amari finds the cause, and the other sentences show the tangles, not their cause." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TSPS-C11", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p5"], pick: 2,
        prompt: "Why did birds keep hitting the window after the students put up the hawk sticker? Choose TWO reasons the article gives.",
        choices: [
          { text: "The sticker covered only a tiny part of the glass.", correct: true },
          { text: "The rest of the window still looked like open air.", correct: true },
          { text: "The sticker was too dark for birds to see in the sun." },
          { text: "The sticker was stuck on the inside of the glass." },
          { text: "The birds were flying too fast to turn away in time." }
        ],
        clue: "In a true text, the author often explains why a try did not work. Find the paragraph that gives the reason, then check each choice against it.",
        hints: [
          "In a true text, the author often explains why a try did not work. Find the paragraph that gives the reason, then check each choice against it.",
          "For each choice, look for it in the article. A reason the article gives must be written there. Choose two.",
          "The article never says which side of the glass the sticker was on, so that choice is not a reason the article gives. Check each other choice the same way: is it in the article?"
        ],
        how: [
          "Paragraph 3 says birds see trees and sky in the glass, so a window looks like open air.",
          "It also says one sticker covered only a tiny spot, and the rest of the glass still looked like a clear path.",
          "The answers are \"The sticker covered only a tiny part of the glass.\" and \"The rest of the window still looked like open air.\"",
          "The article never says the sticker was too dark, which side it was on, or that the birds flew too fast."
        ],
        misconception: "A common mix-up is choosing a reason that sounds possible but is not in the article. Use the reason the author gives.",
        why: "The answers are \"The sticker covered only a tiny part of the glass.\" and \"The rest of the window still looked like open air.\" The scientist explains that one sticker covered only a tiny spot, and the rest of the glass still looked like a clear path to fly through. The other reasons are not in the article." },
      { id: "SK-TSPS-C12", type: "order", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p5"],
        prompt: "This article is built in a problem-and-solution pattern. Put its parts in the order the author tells them.",
        steps: [
          "Birds keep flying into the library windows.",
          "The students put up one hawk sticker.",
          "A scientist explains why that did not work.",
          "The class covers the window with rows of dots.",
          "The thumps almost stop."
        ],
        clue: "Problem-and-solution texts often go in the same order: the problem, a try, why it did or did not work, the solution and the result.",
        hints: [
          "Problem-and-solution texts often go in the same order: the problem, a try, why it did or did not work, the solution and the result.",
          "Find the paragraph where each part is told. Then put the parts in the same order as the paragraphs.",
          "The thumps almost stopping is a result, so it comes after the solution, at the very end. Place the other four parts the same way."
        ],
        how: [
          "Paragraph 1 gives the problem: birds keep flying into the windows.",
          "Paragraph 2 gives the first try, the hawk sticker. In paragraph 3, a scientist explains why it did not work.",
          "Paragraph 4 gives the solution, the rows of dots, and paragraph 5 gives the result: the thumps almost stop.",
          "So the order is problem, try, why the try failed, solution, result."
        ],
        why: "The order is: birds keep flying into the library windows, the students put up one hawk sticker, a scientist explains why that did not work, the class covers the window with rows of dots, and the thumps almost stop. That is problem, try, why it failed, solution and result." },
      /* Compares the set 2 and set 3 texts, so it carries both passages. */
      { id: "SK-TSPS-C13", type: "match", points: 2, dok: 3, std: ["3.T.SS.1.a"], passages: ["p4", "p5"],
        prompt: "Think about \"The Tangled Ropes\" and \"Dots on the Glass.\" Is each sentence true for only one text or for both? Match each sentence.",
        cols: ["only The Tangled Ropes", "only Dots on the Glass", "both texts"],
        rows: [
          { text: "The real cause is found before anyone tries a fix.", answer: 0 },
          { text: "Someone from outside the group explains the real cause.", answer: 1 },
          { text: "The first try does not fix the real cause.", answer: 2 },
          { text: "The text tells what happened after the solution.", answer: 2 }
        ],
        clue: "To compare two texts, check each sentence against one text, then the other. It is true for both only if it fits both.",
        hints: [
          "To compare two texts, check each sentence against one text, then the other. It is true for both only if it fits both.",
          "In each text, reread the tries, the part that explains what is really wrong, and the ending.",
          "In \"Dots on the Glass,\" the scientist explains only after the sticker fails, so the real cause is not found before a fix there. Sort the other sentences the same way."
        ],
        how: [
          "In The Tangled Ropes, Amari works out the cause in paragraph 2, before the team buys new ropes. In Dots on the Glass, the scientist explains after the sticker fails. So the first sentence fits only The Tangled Ropes.",
          "Amari is on the team, but the scientist comes from the nature center. So the second sentence fits only Dots on the Glass.",
          "In both texts, the first try changes something, but the problem keeps happening, so it does not fix the real cause.",
          "Both texts end by telling what happened after the solution: the fifty jumps at the fair, and the thumps almost stopping."
        ],
        misconception: "A common mix-up is calling a sentence true for both when it fits only one text. Check it against each text on its own.",
        why: "Only in The Tangled Ropes is the cause found before a fix: Amari works it out first. Only in Dots on the Glass does someone from outside, the scientist, explain it. In both, the first try misses the real cause, and both tell what happened after the solution." },
      { id: "SK-TSPS-C14", type: "ms", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [], pick: 2,
        stem: ["Every morning, the trash cans at Riverside Park were tipped over, and trash was spread across the grass.", "First, the workers put out bigger cans, but the bigger cans were tipped over, too.", "Next, they put up a sign that said, \"Please do not litter.\"", "But the mess was still there each morning.", "Then a worker set up a camera for one night.", "It showed raccoons climbing the cans and pushing them over to get at food scraps."],
        prompt: "Read the story in the box. Which TWO plans would most likely solve the real problem?",
        choices: [
          { text: "Use cans with lids that lock so raccoons cannot open them.", correct: true },
          { text: "Put the cans inside a locked shed each night.", correct: true },
          { text: "Put up more signs that ask people not to litter." },
          { text: "Buy even bigger trash cans for the park." },
          { text: "Have the workers come earlier each morning." }
        ],
        clue: "A good plan fixes the real problem. Use what the failed tries and the new clue tell you about what is really causing the mess.",
        hints: [
          "A good plan fixes the real problem. Use what the failed tries and the new clue tell you about what is really causing the mess.",
          "List what each try changed. Then ask what the tries did not change. Choose two.",
          "The sign did not work, because people were not the ones making the mess, so more signs would not help either. Test the other plans against what the camera showed."
        ],
        how: [
          "Bigger cans and a sign did not stop the mess, so small cans and people littering are not the cause.",
          "The camera shows raccoons climbing the cans and pushing them over to get food.",
          "A plan has to keep raccoons out of the cans. The answers are \"Use cans with lids that lock so raccoons cannot open them.\" and \"Put the cans inside a locked shed each night.\"",
          "More signs and bigger cans repeat tries that failed, and coming earlier only cleans up the mess after it happens."
        ],
        misconception: "A common mix-up is choosing a bigger version of a try that already failed. Doing more of a failed try will not fix the real problem.",
        why: "The answers are \"Use cans with lids that lock so raccoons cannot open them.\" and \"Put the cans inside a locked shed each night.\" The camera shows raccoons tipping the cans to get food, so a plan must keep raccoons out. More signs and bigger cans already failed, and coming earlier only cleans up after the mess." },
      { id: "SK-TSPS-C15", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
        stem: ["(1) The swings on the Lakeview School playground squeaked so loudly that the class next door could hear them.", "(2) First, the custodian painted the swings a bright new color.", "(3) But the squeaking did not stop.", "(4) ______", "(5) So the custodian oiled the metal chains where they hook onto the bar.", "(6) Now the swings are quiet."],
        prompt: "A student wrote this problem-and-solution paragraph. Which sentence best fills the blank in sentence 4?",
        choices: [
          { text: "The paint made the swings look new, but the noise came from the dry chains.", correct: true },
          { text: "The custodian saw rust on the seats, so the seats seemed to be the noisy part." },
          { text: "The paint was still wet, so nobody could swing until the next morning." },
          { text: "The squeaking was loudest at recess, when many children were swinging at once." }
        ],
        clue: "In a problem-and-solution paragraph, each sentence has a job. After a try fails, the writer often explains why, so the solution makes sense.",
        hints: [
          "In a problem-and-solution paragraph, each sentence has a job. After a try fails, the writer often explains why, so the solution makes sense.",
          "Read sentences 3 and 5.",
          "The sentence about when the squeaking is loudest stays on the topic, but it does not explain the change of plan. Ask what sentence 5 needs to come just before it."
        ],
        how: [
          "Sentence 3 says the paint did not stop the squeaking. Sentence 5 says the custodian oiled the chains.",
          "The missing sentence should explain why the first try failed and point to what sentence 5 fixes: the chains.",
          "The answer is \"The paint made the swings look new, but the noise came from the dry chains.\"",
          "Rust on the seats would point to the seats, not the chains. Wet paint explains a wait, not the new plan, and when the noise is loudest does not explain anything."
        ],
        misconception: "A common mix-up is choosing a sentence that sounds like a reason but points the wrong way. The missing sentence must lead to the solution in sentence 5.",
        why: "The answer is \"The paint made the swings look new, but the noise came from the dry chains.\" It explains why painting failed and leads to oiling the chains. Rust on the seats points to the seats, wet paint explains only a wait, and when the noise is loudest explains nothing." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new text. `like` lists only the core items
     each one really practises (same component and task). */
  similar: [
    { id: "SK-TSPS-S01", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p6"],
      like: ["SK-TSPS-P5", "SK-TSPS-C04", "SK-TSPS-C11"],
      prompt: "Why didn't giving the plants more water help?",
      choices: [
        { text: "The plants needed more light, not more water.", correct: true },
        { text: "The paper cups were too small for the plants." },
        { text: "Mr. Hale forgot to water them on the weekend." },
        { text: "The water in the cups was much too cold." }
      ],
      clue: "When a try does not work, ask what the try changed and what it did not change.",
      hints: [
        "When a try does not work, ask what the try changed and what it did not change.",
        "Think about what the class changed in each part of the story, and what happened after each change.",
        "Nothing in the story says the cups were too small. Test the other choices against the story."
      ],
      how: [
        "More water made the soil soggy, but the plants still drooped, so water was not what they needed.",
        "Mr. Hale shows that the stems lean toward the light, and the back corner is the darkest spot in the room.",
        "The answer is \"The plants needed more light, not more water.\" On the sunny windowsill, they grew green and tall.",
        "The story never says the cups were too small, that anyone forgot to water, or that the water was cold."
      ],
      misconception: "A common mix-up is picking a reason that sounds possible but is not in the story.",
      why: "The answer is \"The plants needed more light, not more water.\" The plants sat in the darkest corner, the stems leaned toward the light, and they grew well once they were moved to the window. The other reasons are not in the story." },
    { id: "SK-TSPS-S02", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p7"],
      like: ["SK-TSPS-C10", "SK-TSPS-C04"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What was really making Kayla's sandwich soggy?",
        choices: [
          { text: "Juice from the tomatoes soaked into the bread.", correct: true },
          { text: "The plastic wrap was not tight enough." },
          { text: "The bread was too old and dry to begin with." },
          { text: "Kayla waited too long to eat her lunch." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"It was wettest right under the juicy tomato slices.\"", correct: true },
          { text: "\"The bread was dry at the edges.\"" },
          { text: "\"But at lunch, it was soggy again.\"" },
          { text: "\"The bread was so wet that it fell apart in her hands.\"" }
        ] },
      clue: "Failed tries help show the real problem. If a try does not work, the thing it changed was not the cause.",
      hints: [
        "Failed tries help show the real problem. If a try does not work, the thing it changed was not the cause.",
        "Reread paragraph 3.",
        "Wrapping the sandwich tighter did not help, so loose plastic is not the cause. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "Tighter plastic did not stop the soggy bread, so the wrapping was not the trouble.",
        "When Kayla peels the sandwich open, the bread is dry at the edges and wettest right under the tomatoes.",
        "Part A: Juice from the tomatoes soaked into the bread. Part B: \"It was wettest right under the juicy tomato slices.\"",
        "Dry edges show the bread itself is not too wet, and the other sentences show the sandwich is soggy, not why."
      ],
      why: "Part A: Juice from the tomatoes soaked into the bread. Part B: \"It was wettest right under the juicy tomato slices.\" Tighter wrap did not help. The bread was wettest under the tomatoes, and once they were packed apart, the sandwich was not soggy." },
    { id: "SK-TSPS-S03", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C14"],
      stem: ["Every time it rained, a puddle formed on the floor just inside the school's front door.", "First, the custodian put down a bigger mat, but the puddle still spread across the floor.", "Next, she mopped every hour, but the puddle came back each time.", "Then she looked up.", "Rain was dripping through a small crack in the ceiling, right above the door."],
      prompt: "Read the story in the box. Which plan would most likely solve the real problem?",
      choices: [
        { text: "Fix the crack in the ceiling above the door.", correct: true },
        { text: "Put a bucket under the crack to catch the drips." },
        { text: "Mop the floor every few minutes." },
        { text: "Ask everyone to wipe their wet shoes outside the door." }
      ],
      clue: "A good plan fixes the real problem, not only what the problem causes.",
      hints: [
        "A good plan fixes the real problem, not only what the problem causes.",
        "Reread the last two sentences of the story.",
        "Mopping is a try that already failed, so mopping more often would not stop the puddle. Test the other plans against what the custodian sees when she looks up."
      ],
      how: [
        "A bigger mat and more mopping did not stop the puddle. They only dealt with the water after it fell.",
        "The custodian finds rain dripping through a crack in the ceiling. That is the real problem.",
        "The answer is \"Fix the crack in the ceiling above the door.\"",
        "A bucket only catches the water after it drips, and the crack keeps leaking. More mopping repeats a try that failed. Wiping shoes would help only if the water came in on shoes, but it drips from the ceiling."
      ],
      misconception: "A common mix-up is choosing a plan that only deals with the water, like a bucket or more mopping, instead of fixing where the water comes from.",
      why: "The answer is \"Fix the crack in the ceiling above the door.\" The rain drips through the crack, so fixing it stops the puddle. A bucket only catches the drips while the crack keeps leaking, more mopping already failed, and wiping shoes does not help, because the water drips from the ceiling, not from shoes." },
    /* Batch SIM-1 (ENG-07): one extra question for each core item that had none left when a child works the
       fifteen in order. Each new `like` names the one core item it practises. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TSPS-S04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C02"],
      stem: ["Every morning, the front steps at Isaac's house were covered in ice. First, Isaac shoveled them, but a thin sheet of ice stayed. Next, he poured hot water on the steps, but the water froze again. Then his neighbor, Mr. Adams, said, \"Sprinkle salt on the steps at night. Salt makes ice melt, even when it is cold.\" Isaac tried it, and the steps were clear the next day."],
      prompt: "Read the story. How does Mr. Adams help solve the problem?",
      choices: [
        { text: "He shares a fact about salt that gives Isaac a new plan.", correct: true },
        { text: "He shovels the steps for Isaac every morning." },
        { text: "He pours hot water on the ice to melt it." },
        { text: "He buys Isaac a pair of boots with better grip." }
      ],
      clue: "Characters help solve a problem in different ways. Ask what this character does that changes what happens next.",
      hints: [
        "Characters help solve a problem in different ways. Ask what this character does that changes what happens next.",
        "Read what Isaac tried first. Then read what Mr. Adams says and what Isaac does next.",
        "Isaac, not Mr. Adams, is the one who shovels the steps. Test each choice that is left against what Mr. Adams says."
      ],
      how: [
        "Isaac's first two tries, shoveling and hot water, do not work.",
        "Then Mr. Adams tells him that salt makes ice melt, even when it is cold, and to sprinkle it at night.",
        "Isaac follows the new plan, and the steps are clear. The answer is \"He shares a fact about salt that gives Isaac a new plan.\"",
        "Mr. Adams does not shovel, pour water or buy boots."
      ],
      misconception: "A common mix-up is choosing one of the tries that did not work. The helper brings a new plan.",
      why: "The answer is \"He shares a fact about salt that gives Isaac a new plan.\" His tip about salt is what clears the steps. Isaac is the one who shovels and pours hot water, and Mr. Adams does not buy boots." },
    { id: "SK-TSPS-S05", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C03"],
      stem: ["Whenever the wind blew, the door of Room 5 slammed shut with a bang. Everyone jumped. Maya set a heavy book in the doorway to hold the door open. The book slid across the floor, and the door slammed again."],
      prompt: "Complete the sentences about the story. Choose the best answer for each blank.",
      text: "The problem in the story is that {0}. Maya's try is to {1}.",
      slots: [
        { options: ["the door slams shut when the wind blows", "the heavy book is too big for the doorway", "the floor is slippery in Room 5"], answer: 0 },
        { options: ["use a book to hold the door open", "close the window next to the door", "ask everyone to stand away from the door"], answer: 0 }
      ],
      clue: "The problem is what goes wrong. A try is what a character does to fix it.",
      hints: [
        "The problem is what goes wrong. A try is what a character does to fix it.",
        "Find the sentence that tells what keeps happening. Then find what Maya does about it.",
        "Nothing in the story says the floor is the trouble, so one choice for the first blank can go. Check the other choices against the story."
      ],
      how: [
        "What keeps going wrong is that the door slams when the wind blows, and everyone jumps.",
        "Maya's try is to put a heavy book in the doorway to hold the door open.",
        "The answers are \"the door slams shut when the wind blows\" and \"use a book to hold the door open.\"",
        "The book is what she uses to fix the problem, not the problem, and nobody closes the window or moves away."
      ],
      misconception: "A common mix-up is calling the try the problem. The problem is what goes wrong; the try is the fix.",
      why: "The answers are \"the door slams shut when the wind blows\" and \"use a book to hold the door open.\" The slamming door is the problem, and the book in the doorway is Maya's try. Nobody closes the window or asks people to move." },
    { id: "SK-TSPS-S06", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C05"],
      stem: ["Nell wiped the muddy paw prints from the floor, but her dog ran in and left more."],
      prompt: "Read the sentence in the box. What does the word \"but\" show here?",
      choices: [
        { text: "The wiping did not solve the problem.", correct: true },
        { text: "Two things in the sentence are being compared." },
        { text: "The writer is explaining what happened earlier." },
        { text: "The floor stays clean from now on." }
      ],
      clue: "The word but can do different jobs. Read the part before it and the part after it, and ask how they fit together.",
      hints: [
        "The word but can do different jobs. Read the part before it and the part after it, and ask how they fit together.",
        "Ask what Nell did before the word but, and what happened after it.",
        "The sentence says the dog left more prints, so the floor does not stay clean. Test each choice that is left against the two parts."
      ],
      how: [
        "Before the word but, Nell wipes the paw prints away.",
        "After it, her dog runs in and leaves more prints, so the mess is back.",
        "The answer is \"The wiping did not solve the problem.\" Here but shows that a try did not work.",
        "The sentence does not compare two things, it does not go back to an earlier time, and the floor does not stay clean."
      ],
      misconception: "A common mix-up is thinking but always shows a difference. Here it shows that a try did not work.",
      why: "The answer is \"The wiping did not solve the problem.\" Nell cleans the floor, but the dog leaves more prints right after. The sentence does not compare two things, it does not tell about an earlier time, and the floor does not stay clean." },
    { id: "SK-TSPS-S07", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C06"],
      stem: ["Every time it rained, drops of water fell on the art room floor. Zane set out more buckets. Thea climbed a ladder with Mr. Fox and looked at the ceiling. She saw a gap where the roof met the wall."],
      prompt: "Zane and Thea handle the problem in different ways. Choose the best answer for each blank.",
      text: "When the water drips, Zane wants to {0}. Thea thinks the class should {1}.",
      slots: [
        { options: ["set out more buckets", "paint the ceiling a new color", "move the art room to the gym"], answer: 0 },
        { options: ["find out where the water gets in", "set out more buckets", "close the art room for the year"], answer: 0 }
      ],
      clue: "Two characters can handle one problem in different ways. Find what each one does.",
      hints: [
        "Two characters can handle one problem in different ways. Find what each one does.",
        "Read what Zane does first. Then read what Thea does and what she looks at.",
        "Some choices in the lists are plans nobody in the story makes. Check each choice against what Zane and Thea do."
      ],
      how: [
        "Zane sets out more buckets to catch the drips.",
        "Thea climbs a ladder to look at the ceiling. She wants to find where the water gets in.",
        "The answers are \"set out more buckets\" and \"find out where the water gets in.\"",
        "Nobody paints, moves the room or closes it for the year."
      ],
      misconception: "A common mix-up is giving both characters the same plan. Check who does what.",
      why: "The answers are \"set out more buckets\" and \"find out where the water gets in.\" Zane puts out buckets, and Thea looks at the ceiling for the gap. Nobody paints the ceiling, moves the room or closes it." },
    { id: "SK-TSPS-S08", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C07"],
      stem: ["Every morning, the sticky notes on Tyree's bulletin board fell off. First, he pressed each note down harder, but they fell again. Then he wiped the dusty board with a damp cloth and pressed each note on. The notes stayed up all week."],
      prompt: "Sort the story's events into the parts of a problem-and-solution map. Match each event to its part.",
      cols: ["the problem", "a try that did not work", "the solution", "proof that it worked"],
      rows: [
        { text: "The sticky notes fall off the board.", answer: 0 },
        { text: "Tyree presses each note down harder.", answer: 1 },
        { text: "Tyree wipes the dusty board and presses the notes on.", answer: 2 },
        { text: "The notes stay up all week.", answer: 3 }
      ],
      clue: "A problem-and-solution map has the problem, the tries that failed, the solution and the proof. Ask what job each event does.",
      hints: [
        "A problem-and-solution map has the problem, the tries that failed, the solution and the proof. Ask what job each event does.",
        "For each event, ask: is it what goes wrong, a fix that fails, a fix that works, or a sign that the fix worked?",
        "The notes falling is what goes wrong, so that event is the problem. Sort the other three the same way."
      ],
      how: [
        "The notes falling off every morning is what goes wrong, so it is the problem.",
        "Pressing harder is a fix that fails, because the notes fall again.",
        "Wiping the dusty board and pressing the notes on is the fix that works, so it is the solution.",
        "The notes staying up all week shows that the fix worked, so it is the proof."
      ],
      misconception: "A common mix-up is mixing up the solution and the proof. The solution is what Tyree does; the proof is what shows the problem has stopped.",
      why: "The notes falling off is the problem. Pressing harder is a try that did not work. Wiping the dusty board and pressing the notes on is the solution. The notes staying up all week is the proof that it worked." },
    { id: "SK-TSPS-S09", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C08"],
      stem: ["The freezer in the school kitchen broke. The school picnic was in two days. All of the ice-cream cups for the picnic were inside the freezer."],
      prompt: "Why is the broken freezer such a big problem for the picnic?",
      choices: [
        { text: "The ice cream will melt before the picnic starts.", correct: true },
        { text: "The freezer is too old for anyone to fix." },
        { text: "The kitchen cannot make lunch for the students." },
        { text: "The school picnic has been moved to next month." }
      ],
      clue: "A problem is big when it stops something that matters. Ask what the broken freezer will cause.",
      hints: [
        "A problem is big when it stops something that matters. Ask what the broken freezer will cause.",
        "Read what the freezer holds and what is happening in two days.",
        "The story does not say the picnic is moved. Test each choice that is left against what the freezer holds."
      ],
      how: [
        "The freezer keeps things cold. It holds the ice-cream cups for the picnic.",
        "The picnic is in two days, so the ice cream cannot stay frozen without a working freezer.",
        "The answer is \"The ice cream will melt before the picnic starts.\"",
        "The story does not say the freezer is too old, that lunch is canceled, or that the picnic is moved."
      ],
      misconception: "A common mix-up is choosing a result the story never says. Use only what the story tells you.",
      why: "The answer is \"The ice cream will melt before the picnic starts.\" The ice-cream cups for the picnic are inside the broken freezer. The story does not say it is too old to fix, that lunch is canceled or that the picnic is moved." },
    { id: "SK-TSPS-S10", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C09"],
      stem: ["Wren's cardboard fort fell down every time the wind blew from the left. First, she taped the corners tighter, but the fort fell down again."],
      prompt: "Wren's tighter tape does not work. What does this failed try show?",
      choices: [
        { text: "Something other than loose corners is making the fort fall.", correct: true },
        { text: "Wren should use even more tape on the corners." },
        { text: "The wind will stop blowing from the left soon." },
        { text: "The fort needs a new coat of paint." }
      ],
      clue: "When a try fails, a character finds out more. Ask what Wren fixed and what she finds out when it did not help.",
      hints: [
        "When a try fails, a character finds out more. Ask what Wren fixed and what she finds out when it did not help.",
        "Ask what the tape fixed. Then ask what the story says still happened.",
        "More of the same try would not help if the fort still falls. Test each choice that is left."
      ],
      how: [
        "Wren taped the corners tighter, so she was fixing loose corners.",
        "The fort still fell. That means loose corners were not the real trouble.",
        "The answer is \"Something other than loose corners is making the fort fall.\"",
        "More tape would be the same try again, nothing says the wind will stop, and paint has nothing to do with falling."
      ],
      misconception: "A common mix-up is trying the same fix again. A failed try tells you to look for a different cause.",
      why: "The answer is \"Something other than loose corners is making the fort fall.\" Tighter tape fixed the corners, and the fort still fell. More tape would be the same try, nothing says the wind will stop, and paint does not help a fort stand." },
    { id: "SK-TSPS-S11", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p8"],
      like: ["SK-TSPS-C10"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is really making the sink drain so slowly?",
        choices: [
          { text: "A clump of bristles is blocking the pipe.", correct: true },
          { text: "The hot water is not hot enough to flow." },
          { text: "The plunger left gray water in the bowl." },
          { text: "The class washed too many brushes at once." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Out slid a clump of paint-stained bristles.\"", correct: true },
          { text: "\"Splash! Gray water splashed on the floor, and the sink was just as slow as before.\"" },
          { text: "\"The sink gurgled, but the water still sat there.\"" },
          { text: "\"Ms. Rudd turned on the water, and it swirled down the drain in seconds.\"" }
        ] },
      clue: "The real cause is the thing that, once it is fixed, ends the problem. Ask what changed right before the water drained.",
      hints: [
        "The real cause is the thing that, once it is fixed, ends the problem. Ask what changed right before the water drained.",
        "Read what happens after the first two tries fail.",
        "The hot water was a try, not a cause, so it cannot be the answer to Part A. For Part B, the sentence must match your Part A answer."
      ],
      how: [
        "The hot water and the plunger do not help, so neither is the real cause.",
        "Mr. Okon opens the curved pipe, and a clump of paint-stained bristles slides out. After that, the water drains in seconds.",
        "Part A: A clump of bristles is blocking the pipe. Part B: \"Out slid a clump of paint-stained bristles.\"",
        "The water, the plunger and the number of brushes are not shown to be the cause."
      ],
      misconception: "A common mix-up is choosing a sentence about a try that failed. The real cause is what is found and removed.",
      why: "Part A: A clump of bristles is blocking the pipe. Part B: \"Out slid a clump of paint-stained bristles.\" Once the bristles are out, the water drains in seconds. The hot water and plunger were tries, and nothing shows that the number of brushes caused it." },
    { id: "SK-TSPS-S12", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p9"], pick: 2,
      like: ["SK-TSPS-C11"],
      prompt: "Why did hatchlings keep crawling toward the road after the hotel turned off its lights? Choose TWO reasons the article gives.",
      choices: [
        { text: "Many buildings and street lamps were still glowing at once.", correct: true },
        { text: "One hotel was only a small part of the glow.", correct: true },
        { text: "The hotel turned its lights back on at midnight." },
        { text: "The ocean was too far away for hatchlings to find." },
        { text: "The road was shiny and wet after the rain." }
      ],
      clue: "To find reasons an article gives, look for the sentences that explain why the first try did not work.",
      hints: [
        "To find reasons an article gives, look for the sentences that explain why the first try did not work.",
        "Find where the scientists explain why. Choose two reasons from what they say.",
        "The article never says the hotel turned its lights back on. Check each other choice against what the scientists say."
      ],
      how: [
        "The town first asked one hotel to turn off its lights, but hatchlings still crawled toward the road.",
        "Scientists explained that white lights from many buildings and street lamps glowed at once. One hotel was only a small part of the glow.",
        "The answers are \"Many buildings and street lamps were still glowing at once.\" and \"One hotel was only a small part of the glow.\"",
        "The article does not say the lights came back on, that the ocean was too far, or that the road was wet."
      ],
      misconception: "A common mix-up is choosing a reason the article never gives. Use only what the scientists say.",
      why: "The answers are \"Many buildings and street lamps were still glowing at once.\" and \"One hotel was only a small part of the glow.\" The scientists gave both reasons. The article never says the lights came back on, that the ocean was too far or that the road was wet." },
    { id: "SK-TSPS-S13", type: "order", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p9"],
      like: ["SK-TSPS-C12"],
      prompt: "This article is built in a problem-and-solution pattern. Put its parts in the order the author tells them.",
      steps: [
        "Baby sea turtles crawl toward lights instead of the ocean.",
        "A hotel turns off its lights.",
        "Scientists explain why that did not fix the problem.",
        "The town shields lamps and changes the bulbs.",
        "Most hatchlings find the ocean on their own."
      ],
      clue: "A problem-and-solution article often goes: the problem, a first try, why it failed, the solution and the result.",
      hints: [
        "A problem-and-solution article often goes: the problem, a first try, why it failed, the solution and the result.",
        "Read the article from top to bottom. Each paragraph tells the next part.",
        "The article ends by telling what happens now that the problem is solved. Place the other four one at a time."
      ],
      how: [
        "The article opens with the problem: hatchlings crawl toward lights instead of the ocean.",
        "Next, one hotel turns off its lights, and scientists explain why that was not enough.",
        "Then the town shields the lamps and changes the bulbs on the whole beach.",
        "Last, most hatchlings find the ocean on their own."
      ],
      misconception: "A common mix-up is putting the scientists' explanation before the first try. The explanation comes after the try fails.",
      why: "The order is: baby sea turtles crawl toward lights; a hotel turns off its lights; scientists explain why that did not fix it; the town shields lamps and changes the bulbs; most hatchlings find the ocean." },
    { id: "SK-TSPS-S14", type: "match", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p8", "p9"],
      like: ["SK-TSPS-C13"],
      prompt: "Think about \"The Slow Sink\" and \"Lights Out for Sea Turtles.\" Is each sentence true for only one text or for both? Match each sentence.",
      cols: ["only The Slow Sink", "only Lights Out for Sea Turtles", "both texts"],
      rows: [
        { text: "A part is added after the fix to catch any new clump.", answer: 0 },
        { text: "Someone explains the real cause after the first tries fail.", answer: 2 },
        { text: "Many separate sources add up to one big problem.", answer: 1 },
        { text: "More than one try is made before the problem is solved.", answer: 2 }
      ],
      clue: "To compare two texts, check each sentence against one text, then the other. It is true for both only if it fits both.",
      hints: [
        "To compare two texts, check each sentence against one text, then the other. It is true for both only if it fits both.",
        "In each text, reread the tries, the part that tells the cause, and the ending.",
        "Nothing in the turtle article is a clump, so one sentence does not fit it. Sort the other sentences the same way."
      ],
      how: [
        "Only in \"The Slow Sink\" is a part added after the fix: a small screen over the drain catches any more bristles.",
        "Only in the turtle article do many lights, from hotels and street lamps, add up to one big glow that confuses the hatchlings.",
        "Both texts have someone explain the real cause after the first tries fail: Mr. Okon says something blocks the pipe, and the scientists explain why one hotel was not enough.",
        "Both texts also try more than one thing: hot water and a plunger, and one hotel and then the whole beach."
      ],
      misconception: "A common mix-up is choosing one text when the sentence fits both. Check each sentence against both texts.",
      why: "The screen added after the fix is only in \"The Slow Sink,\" and the many sources of light are only in the turtle article. In both texts someone explains the real cause after the first tries fail (Mr. Okon, the scientists), and both make more than one try before the solution." },
    { id: "SK-TSPS-S15", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C15"],
      stem: ["(1) The sunflower seeds in the school garden never sprouted.", "(2) First, the class watered the seeds twice a day.", "(3) But the soil stayed bare.", "(4) Then Mr. Hallam dug a small hole and found the seeds buried far too deep.", "(5) ______", "(6) Soon, green shoots pushed up through the soil."],
      prompt: "A student wrote this problem-and-solution paragraph. Which sentence best fills the blank in sentence 5?",
      choices: [
        { text: "So the class replanted the seeds just under the surface.", correct: true },
        { text: "So the class watered the seeds three times a day." },
        { text: "So the class bought bright new seed packets." },
        { text: "So the class dug up the seeds and threw them away." }
      ],
      clue: "A solution should match the cause of the problem. Ask what Mr. Hallam found, and which fix would deal with it.",
      hints: [
        "A solution should match the cause of the problem. Ask what Mr. Hallam found, and which fix would deal with it.",
        "Reread what the class tried first and what Mr. Hallam found. Which fix would be different from the first try?",
        "Sentence 6 says shoots pushed up, so the seeds were not thrown away. Test each choice that is left against what Mr. Hallam found."
      ],
      how: [
        "Sentences 2 and 3 show the first try, watering, and say that it did not work.",
        "In sentence 4, Mr. Hallam finds the real cause: the seeds are buried far too deep.",
        "The answer is \"So the class replanted the seeds just under the surface.\" It fixes the cause, and green shoots appear in sentence 6.",
        "Watering more repeats the first try, new packets have nothing to do with the cause, and throwing the seeds away would not make shoots appear."
      ],
      misconception: "A common mix-up is choosing a bigger version of the first try. A fix has to deal with the cause.",
      why: "The answer is \"So the class replanted the seeds just under the surface.\" Mr. Hallam found that the seeds were buried too deep, and replanting them near the top fixes that. More watering repeats the failed try, new packets do not matter, and throwing the seeds away would not make shoots appear." }
  ],
  /* Hints and Show me how for items kept in practice: ref P5 (core set 1) and Together P1, P2, P3, P4 and P6. */
  addons: {
    "SK-TSPS-P1": {
      hints: [
        "The problem is what is wrong. Look for the word problem, or for something that keeps going wrong.",
        "Look for something in the story that happens again and again.",
        "Grandma helps Jamal later, in paragraph 5, so that choice is not the problem. Test each choice that is left against the start of the story."
      ],
      how: [
        "Paragraph 1 starts with the clue word problem.",
        "Every morning, a long line of ants marches across the floor toward the dog's food bowl.",
        "The answer is \"Ants keep marching to the dog's food bowl.\"",
        "Nothing says the dog will not eat or that the floor is slippery, and Grandma does help."
      ] },
    "SK-TSPS-P2": {
      hints: [
        "A try is something a person does to fix the problem. Find the first try, then find what happens because of it.",
        "Jamal's first try is in paragraph 3. Look at the sentences around it.",
        "The sentence about the pan comes from the solution, not from a try that failed. Find the first try, then read on."
      ],
      how: [
        "Jamal's first try is wiping the ants away with a wet paper towel (paragraph 3).",
        "The next sentence begins with But and says a new line of ants marched right back the next morning.",
        "The answer is \"But the next morning, a new line of ants marched right back.\"",
        "The sentences in paragraph 4 go with the second try, and the pan is the solution."
      ],
      misconception: "A common mix-up is choosing a sentence about a later try. Match the result to the first try." },
    "SK-TSPS-P3": {
      hints: [
        "The solution is what finally fixes the problem. Clue words like decided and finally point to it.",
        "Read each try in order and ask: did the ants come back after it?",
        "Wiping the ants away was the first try, and the ants came back. Test each other choice: did it keep the ants away for good?"
      ],
      how: [
        "Wiping the ants and moving the bowl did not keep the ants away.",
        "In paragraph 6, Jamal and Grandma decided to set the bowl in a wide, shallow pan with water all around it, and in paragraph 7 the problem was finally solved.",
        "The answer is \"a pan of water all around the food bowl.\"",
        "Pepper never chases the ants."
      ] },
    "SK-TSPS-P4": {
      hints: [
        "Some clue words name a try. Others tell how the try turned out.",
        "Read paragraph 4. What does Jamal do, and what do the ants do next?",
        "Finally goes with the end of a story, when something works at last. Ask whether this try works, then read the sentence with each choice that is left."
      ],
      how: [
        "In paragraph 4, Jamal moves the bowl. That is a try, so the first blank is tried.",
        "The ants find the bowl again, so the try did not work. The word but shows that, so the second blank is but.",
        "Jamal tried moving the bowl, but the ants found it again. Solved and finally belong at the end, and so or for example would not show that the try failed."
      ],
      misconception: "A common mix-up is choosing solved or finally for any try. Those words point to the solution, not to a try that failed." },
    "SK-TSPS-P5": {
      hints: [
        "A try fails for a reason. The story usually tells what went wrong after the try.",
        "Reread paragraphs 3 and 4.",
        "Pepper only sits and stares at the ants in paragraph 2, so she does not push the bowl anywhere. Decide between the choices that are left."
      ],
      how: [
        "The try in paragraph 4 is moving the bowl to the other side of the kitchen.",
        "The next sentence says the ants followed the smell of the food and found it again.",
        "The answer is \"The ants could still smell the food and find it.\" Moving the bowl did not take away the smell, so the ants kept coming.",
        "The bowl went to the other side of the kitchen, not a little way. The wet paper towel was the first try, in paragraph 3. Pepper only sat and stared."
      ],
      misconception: "A common mix-up is mixing up the two tries, or misreading how far the bowl was moved. The reason this try failed is told right after it." },
    "SK-TSPS-P6": {
      hints: [
        "The word but can do different jobs. In a problem-and-solution story, ask what comes just before it and what comes just after.",
        "Read the sentence before the one in the box, at the start of paragraph 3. What had Jamal just done?",
        "This but does not compare two different things, like a hot day and a cold day. Test each choice that is left against what Jamal did just before this sentence."
      ],
      how: [
        "The sentence before says Jamal tried wiping the ants away with a wet paper towel.",
        "Then But tells us that a new line of ants marched right back the next morning.",
        "So But shows that the try did not work. The answer is \"A try did not work.\"",
        "In a compare-and-contrast text, but can show a difference, but here nothing is being compared."
      ],
      misconception: "A common mix-up is thinking but always shows a difference. In a problem-and-solution story, but often shows a try that failed." }
  },
  test: [
    { id: "SK-TSPS-T1", type: "mc", points: 1, dok: 1, passages: ["p2"], std: ["3.T.SS.1.a", "3.T.T.1.b"],
      prompt: "What is the problem in this story?",
      choices: [
        { text: "The garden path turns to mud when it rains.", correct: true },
        { text: "The class has no seeds to plant in the garden." },
        { text: "The wood chips are too heavy for kids to carry." },
        { text: "Ms. Ortiz will not let the kids go outside." }
      ],
      clue: "Find the clue word problem. Read what goes wrong again and again.",
      why: "The answer is \"The garden path turns to mud when it rains.\" Paragraph 1 says the path turns into thick mud every time it rains, and kids slip." },
    { id: "SK-TSPS-T2", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence shows that the class's SECOND try did not work? Choose the sentence in the passage.",
      targets: ["p2:2:2", "p2:2:3", "p2:3:1", "p2:3:2", "p2:6:2"],
      answer: ["p2:3:2"], pick: 1,
      clue: "Find each try. Then look for the clue word that shows a try failed, and check which try it goes with.",
      why: "The answer is \"But the next big rain washed the sand away into the grass.\" The second try was pouring sand. The clue word But shows it did not work. The But sentence in paragraph 2 is about the first try, the boards." },
    { id: "SK-TSPS-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the two sentences in the box. In which sentence does \"but\" show a try that did not work?",
      stem: ["Sentence 1: Cats have soft fur, but turtles have hard shells.", "Sentence 2: Kim tried to fix the swing, but the chain broke again."],
      choices: [
        { text: "Sentence 2 only", correct: true },
        { text: "Sentence 1 only" },
        { text: "both sentences" },
        { text: "neither sentence" }
      ],
      clue: "Ask about each but: Is it showing how two things are different, or something someone tried that failed?",
      why: "The answer is Sentence 2 only. Kim tried to fix the swing, but it broke again, so her try failed. In Sentence 1, but shows how cats and turtles are different." },
    { id: "SK-TSPS-T4", type: "ebsr", points: 2, dok: 2, passages: ["p2"], std: ["3.T.SS.1.a", "3.T.T.1.b"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does the class finally solve the problem?",
        choices: [
          { text: "They fill the low spot and add wood chips.", correct: true },
          { text: "They lay flat boards across the mud." },
          { text: "They pour sand all over the path." },
          { text: "They move the garden to a new place." }
        ] },
      partB: { prompt: "Which sentence from the story shows that the solution worked?",
        choices: [
          { text: "\"The path was dry enough to walk on.\"", correct: true },
          { text: "\"Ms. Ortiz's class wanted to fix it.\"" },
          { text: "\"Kids slipped, and shoes came back brown and gooey.\"" },
          { text: "\"Then Leo looked closely.\"" }
        ] },
      clue: "Look for the clue words decided and finally. Then find the part where the class checks the path after a storm.",
      why: "Part A: They fill the low spot and add wood chips. Part B: \"The path was dry enough to walk on.\" The class decided on this plan, and after the next storm the path was dry." },
    { id: "SK-TSPS-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why does the author include paragraph 4?",
      choices: [
        { text: "It shows what was really causing the mud.", correct: true },
        { text: "It shows that Leo is the oldest in class." },
        { text: "It explains how to plant seeds in a garden." },
        { text: "It tells why Ana almost fell on the boards." }
      ],
      clue: "Think about what the class knows after paragraph 4 that it did not know before. How does that help the next plan?",
      why: "The answer is \"It shows what was really causing the mud.\" Once the class knows the real cause, they can pick a plan that works." }
  ]
});
PP.addLesson({
  key: "TS-CC",
  code: "3.T.SS.1.a",
  codes: ["3.T.SS.1.a"],
  title: "Compare and contrast: alike and different",
  clues: {
    words: ["both", "alike", "same", "but", "however", "unlike", "different", "while"],
    ask: "How are they the same? How are they different?",
    draw: "Draw three columns: Thing 1 only | Both | Thing 2 only. Or draw two circles that overlap, and write what is the same in the middle."
  },
  coach: {
    mixup: "\"But\" is used for many things. In compare and contrast, it signals a difference between two things. In problem and solution, it signals a try that did not work. Ask: \"Is this 'but' showing something that's different, or something that didn't work?\"",
    strong: "\"Both bees and wasps have six legs and four wings, but bees are fuzzy and wasps are smooth.\" One way alike, one way different, with a clue word.",
    notyet: "Facts about only one of the two things, or only differences. Ask: \"What do they BOTH have?\"",
    ido: "Hold up two things, like a fork and a spoon. Say: \"Both are for eating. But a fork has points and a spoon is round.\"",
    wedo: "Read the baseball and softball example in Learn It together. Sort each fact into Alike or Different.",
    youdo: "Your child fills in the three columns (Thing 1 only, Both, Thing 2 only) for a Practice passage.",
    everyday: "Compare anything: two teams, two games, two restaurants, two cousins' pets. Ask for one way they are alike and one way they are different."
  },
  teach: {
    big: "Compare means show how two things are ALIKE. Contrast means show how they are DIFFERENT.",
    points: [
      "The author picks two things, often things people mix up. Some authors tell all about one thing and then all about the other. Others go topic by topic, telling about both things for each topic.",
      "Clue words like both, alike and same tell you the things are alike. Sometimes there is no clue word, so ask: Is this true of both things?",
      "Clue words like but, however, unlike, different and while tell you the things are different.",
      "Watch for a clue word that switches from alike to different, like however.",
      "Authors often compare to help you tell two things apart or choose between them. A fact that is true of both things cannot help you tell them apart."
    ],
    words: [
      { term: "compare", means: "tell how things are alike" },
      { term: "contrast", means: "tell how things are different" },
      { term: "alike", means: "the same in some way" }
    ],
    example: {
      label: "What it looks like",
      lines: ["Baseball and softball are ALIKE in many ways. BOTH use a bat, a ball and four bases. HOWEVER, a softball is bigger. UNLIKE baseball pitchers, softball pitchers throw underhand. The fields are DIFFERENT sizes, too."],
      note: "Alike: bat, ball and four bases. Different: the size of the ball, how the pitcher throws, and the size of the field. HOWEVER is the word where the author switches from alike to different."
    },
    tip: "On the test, a question may ask how two things are alike or different, or which clue word shows a difference. Sort the facts into same and different first."
  },
  learn: [
    {
      show: ["Mia needs a backpack for a long hike in the woods.", "The red backpack and the blue backpack both have two zippers and a pocket for a water bottle.", "However, the red backpack has thick, padded straps, while the blue backpack has thin straps."],
      ask: "Which backpack should Mia choose for her hike, and why?",
      steps: [
        "Find what Mia needs: a pack she can carry for a long time.",
        "Find the clue word both. Zippers and a bottle pocket are true of both packs, so they cannot help her choose.",
        "Find the difference after however and while. Ask which difference matters for a long hike."
      ],
      answer: "The red backpack. Its padded straps will hurt less on a long hike. The zippers and the pocket are the same on both packs, so they cannot help her choose."
    },
    {
      show: ["A bike and a car both have wheels. However, a bike has two wheels. Unlike a bike, a car has four."],
      ask: "Which clue word shows where the author switches from alike to different?",
      steps: [
        "Find the alike part first: both have wheels.",
        "Ask: Where does the author start telling a difference?",
        "The next sentence starts with However. That is the switch."
      ],
      answer: "However. Before it, the author tells how they are alike. After it, the author tells how they are different."
    },
    {
      show: ["Ben tried to catch the ball, but he missed it.", "Apples can be red, but limes are green."],
      ask: "Which \"but\" shows how two things are different?",
      steps: [
        "Find but in each sentence.",
        "Ask: Is this but showing something different, or something that did not work?",
        "In the first sentence, Ben's try did not work. In the second, two fruits are being compared."
      ],
      answer: "The second sentence. Its but shows how apples and limes are different."
    }
  ],
  parent: "Pick any two things, like two snacks, two games or two pets you know. Ask your child for one way they are alike (\"Both...\") and one way they are different (\"But...\").",
  passages: [
    { id: "p1", title: "Frogs and Toads", genre: "Informational text",
      paragraphs: [
        ["Frogs and toads look a lot alike.", "Both are amphibians.", "That means they start life in the water and later can live on land.", "Both lay eggs, and both hatch as tadpoles."],
        ["However, they are different in some ways.", "A frog has smooth, wet skin.", "Unlike a frog, a toad has dry, bumpy skin."],
        ["Their legs are not the same, either.", "Most frogs have long back legs for big jumps, but toads have shorter legs.", "Toads usually walk or take small hops."],
        ["Frogs and toads also live in different places.", "Most frogs stay close to water, while many toads live in gardens and fields far from ponds."],
        ["Both animals are helpful to people.", "They eat lots of insects, such as flies and mosquitoes.", "The next time you see one hop by, look closely.", "Is it a frog or a toad?"]
      ] },
    { id: "p2", title: "Alligator or Crocodile?", genre: "Informational text",
      paragraphs: [
        ["Alligators and crocodiles are both big reptiles.", "They have thick, scaly skin and strong jaws.", "They both have long tails.", "Both lay eggs in nests on land."],
        ["However, these two animals are different in some ways.", "The easy way to tell them apart is to look at the snout.", "An alligator has a wide snout.", "It is shaped like the letter U.", "Unlike an alligator, a crocodile has a thin, pointed snout like a V."],
        ["Look at their teeth, too.", "When an alligator shuts its mouth, you see mostly its top teeth.", "When a crocodile shuts its mouth, you can see top and bottom teeth.", "It looks like it is grinning!"],
        ["Alligators live in fresh water, such as swamps and lakes, but crocodiles can live in salty water, too.", "Georgia has lots of alligators.", "In the United States, wild crocodiles live only in south Florida."],
        ["The next time you see a big reptile on TV, check its snout and its smile!"]
      ] },
    /* B2 (expansion 2026-10-22, author b2c): p3 and p4 are used only by core (p3 set 2 and the set 3
       compare item, p4 set 3); p5 only by the similar bank. Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "School Then and Now", genre: "Informational text",
      paragraphs: [
        ["Children in Georgia went to school in 1900.", "Children go to school today, too.", "Both groups of students learned to read, write and do math.", "Both had time to play outside."],
        ["However, a school day in 1900 looked very different.", "Many children went to a one-room school.", "One teacher taught every grade in the same room, from the youngest children to the oldest."],
        ["Today, most schools have many classrooms.", "Unlike the students in 1900, children today usually share a room with kids their own age."],
        ["Students in 1900 often wrote on small chalkboards called slates.", "They wiped the slates clean and used them again and again.", "Students today write on paper, and many also type on computers."],
        ["Getting to school was different, too.", "Many children in 1900 walked a long way on dirt roads, while many children today ride a bus."],
        ["The next time you sit at your desk, think about the kids in that one-room school!"]
      ] },
    { id: "p4", title: "Canoe or Kayak?", genre: "Informational text",
      paragraphs: [
        ["On a sunny Saturday, you might see two kinds of small boats on the Chattahoochee River.", "One is a canoe, and the other is a kayak.", "From far away, they look alike."],
        ["Both boats are long and narrow, with pointed ends.", "Both are moved by people using paddles, not by motors or sails.", "Both can float in shallow water where bigger boats cannot go."],
        ["Up close, you can see the differences.", "A canoe is open on top, like a long bowl.", "Many kayaks are closed on top, and the paddler sits inside a small, round opening."],
        ["The paddles are different, too.", "A canoe paddle has one flat blade at the end.", "A kayak paddle has a blade at each end, so the paddler dips one side and then the other."],
        ["A canoe often has room for two or three people and a pile of camping gear.", "Most kayaks carry just one person.", "Which boat would you choose for your next trip?"]
      ] },
    { id: "p5", title: "Two Trucks That Clear the Road", genre: "Informational text",
      paragraphs: [
        ["Some trucks have a special job: keeping roads clear.", "A street sweeper and a snowplow both drive slowly along city streets.", "Both clear things off the road so cars can drive safely."],
        ["However, the two trucks work in different ways.", "A street sweeper has round brushes underneath that spin and sweep up dirt, leaves and trash.", "Then a strong vacuum sucks it all into a tank inside the truck."],
        ["A snowplow has a wide metal blade on its front.", "Unlike a street sweeper, it pushes snow to the side of the road instead of picking it up.", "Many snowplows also spread salt behind them to help melt ice."]
      ] }
  ],
  practice: [
    { id: "SK-TSCC-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "How are frogs and toads alike?",
      choices: [
        { text: "Both hatch as tadpoles.", correct: true },
        { text: "Both have dry, bumpy skin." },
        { text: "Both have smooth, wet skin." },
        { text: "Both live far from ponds." }
      ],
      clue: "Look for the clue word that tells how two things are alike. Then check each choice against the passage.",
      why: "The answer is \"Both hatch as tadpoles.\" Paragraph 1 uses the clue word both to tell this. Each of the other choices is true of only one of the animals." },
    { id: "SK-TSCC-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence uses a clue word to show that the author is switching from how frogs and toads are alike to how they are different? Choose the sentence in the passage.",
      targets: ["p1:1:1", "p1:1:2", "p1:1:4", "p1:2:1", "p1:2:2"],
      answer: ["p1:2:1"], pick: 1,
      clue: "Paragraph 1 tells how they are alike. Look for the first clue word that turns toward differences.",
      why: "The answer is \"However, they are different in some ways.\" The clue word However marks the switch. Before it, the author tells how frogs and toads are alike. After it, the author tells how they are different." },
    { id: "SK-TSCC-P3", type: "match", points: 2, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a"],
      prompt: "Sort each fact into the right column.",
      cols: ["Frog only", "Both", "Toad only"],
      rows: [
        { text: "has smooth, wet skin", answer: 0 },
        { text: "lays eggs", answer: 1 },
        { text: "has dry, bumpy skin", answer: 2 },
        { text: "hatches as a tadpole", answer: 1 }
      ],
      clue: "Use the clue words. Both and alike point to the middle column. Unlike and but point to a difference.",
      why: "Smooth, wet skin is a frog fact. Dry, bumpy skin is a toad fact. Laying eggs and hatching as a tadpole are true of both animals." },
    { id: "SK-TSCC-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The sentence in the box tells about paragraph 2. What does the word \"but\" show here?",
      stem: ["A frog's skin is smooth and wet, but a toad's skin is dry and bumpy."],
      choices: [
        { text: "how frogs and toads are different", correct: true },
        { text: "a try that did not work out" },
        { text: "what happened first and next" },
        { text: "a way frogs and toads are alike" }
      ],
      clue: "The word but has more than one job. Read the words on each side of it. Are they about two animals, or about a plan that failed?",
      why: "The answer is \"how frogs and toads are different.\" The sentence tells about a frog's skin, then but, then a toad's skin. In compare and contrast, but shows a difference. In problem and solution, but shows a try that failed." },
    { id: "SK-TSCC-P5", type: "dropdown", points: 1, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a"],
      prompt: "Choose the clue word that best completes the sentence.",
      text: "{0} most frogs, many toads live far from ponds.",
      slots: [
        { options: ["Unlike", "Because", "Like"], answer: 0 }
      ],
      clue: "Read the sentence with each choice. Ask what the two parts of the sentence tell about frogs and toads.",
      why: "The answer is Unlike. Unlike most frogs, many toads live far from ponds. Paragraph 4 says most frogs stay close to water, so the two animals live in different places. Unlike shows a difference. Like would say they are the same, and because tells why." },
    { id: "SK-TSCC-P6", type: "ms", points: 2, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a"],
      prompt: "Which TWO sentences tell how frogs and toads are ALIKE?",
      pick: 2,
      choices: [
        { text: "Both are amphibians.", correct: true },
        { text: "They eat lots of insects, such as flies and mosquitoes.", correct: true },
        { text: "A frog has smooth, wet skin." },
        { text: "Toads usually walk or take small hops." },
        { text: "Their legs are not the same, either." }
      ],
      clue: "A sentence about only one animal cannot tell how they are alike. Check whether each sentence is about frogs, toads or both.",
      why: "The answers are \"Both are amphibians.\" and \"They eat lots of insects, such as flies and mosquitoes.\" The second one comes right after \"Both animals are helpful to people,\" so \"they\" means both. \"Their legs are not the same, either\" is about both animals, but it tells a difference. The other sentences tell about only frogs or only toads." }
  ],
  /* ---------- B2 core (expansion 2026-10-22, author b2c; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five. { ref } reuses Try items P5 and P6 by id (they stay in practice;
     the engine leaves them out of Together, so Together shows P1-P4). P4 (weak: one implausible distractor)
     was revised in place and kept in Together, not core, because its frame mirrors form A T3. New ids are
     numbered by their place in the fifteen. Hints and Show me how for refs and Together items are in addons.
     Author log: docs/expansion-2026-10-22/batches/B2-b2c-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TSCC-P5" },
      { id: "SK-TSCC-C02", type: "hottext", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p1"],
        prompt: "Which TWO sentences tell a difference you could notice by watching how frogs and toads move? Choose two sentences in the passage.",
        targets: ["p1:1:4", "p1:2:2", "p1:2:3", "p1:3:2", "p1:3:3", "p1:4:2", "p1:5:2"],
        answer: ["p1:3:2", "p1:3:3"], pick: 2,
        clue: "A difference is something true of one thing but not the other. Some differences you see by looking, and some by watching what the animals do.",
        hints: [
          "A difference is something true of one thing but not the other. Some differences you see by looking, and some by watching what the animals do.",
          "Go through paragraphs 2 to 4 one sentence at a time. Choose two.",
          "Smooth, wet skin is something you could see or feel on a frog sitting still, so it is not about moving. Check each sentence that is left against the question."
        ],
        how: [
          "Paragraph 3 tells about the animals' legs and how they get around.",
          "\"Most frogs have long back legs for big jumps, but toads have shorter legs.\" Watching, you would see frogs make big jumps.",
          "\"Toads usually walk or take small hops.\" Watching, you would see toads walk or hop a little. Those are the two answers.",
          "Skin is a way the animals look, and paragraph 4 tells where they live, not how they move."
        ],
        misconception: "A common mix-up is choosing any difference. The question asks only for a difference you could see when the animals move.",
        why: "The answers are \"Most frogs have long back legs for big jumps, but toads have shorter legs.\" and \"Toads usually walk or take small hops.\" Both tell how the animals move: big jumps, or walking and small hops. The skin sentences tell how they look, and the sentence about ponds tells where they live." },
      { ref: "SK-TSCC-P6" },
      { id: "SK-TSCC-C04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p1"],
        prompt: "Why does the author compare frogs and toads in this article?",
        choices: [
          { text: "to help readers tell apart two animals that look alike", correct: true },
          { text: "to show readers that frogs are more helpful than toads" },
          { text: "to explain how a tadpole grows into a frog or a toad" },
          { text: "to tell readers where to go to find frogs and toads" }
        ],
        clue: "Authors compare for a reason. Ask what a reader can do after learning the likenesses and the differences.",
        hints: [
          "Authors compare for a reason. Ask what a reader can do after learning the likenesses and the differences.",
          "Think about what each paragraph does. Then ask what a reader can do after reading all of them.",
          "Paragraph 5 says both animals are helpful, so the article does not show that one is more helpful. Check each choice that is left: is it something the whole article does, or only one sentence?"
        ],
        how: [
          "The article begins, \"Frogs and toads look a lot alike.\"",
          "Then it tells ways they are different: skin, legs and where they live. It ends by asking, \"Is it a frog or a toad?\"",
          "The answer is \"to help readers tell apart two animals that look alike.\"",
          "The article says both are helpful, it never tells how a tadpole grows, and it does not tell readers where to go."
        ],
        misconception: "A common mix-up is choosing a purpose that fits only one sentence. Think about what the whole article does.",
        why: "The answer is \"to help readers tell apart two animals that look alike.\" The article starts by saying they look a lot alike, tells the differences, and ends by asking, \"Is it a frog or a toad?\" It says both are helpful, and it does not tell how tadpoles grow or where to go." },
      { id: "SK-TSCC-C05", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["Kick scooters and skateboards are both fun to ride on a sidewalk.", "On both, the rider stands up and pushes off the ground with one foot.", "However, a scooter has a tall handlebar.", "The rider holds it and turns it to steer.", "A skateboard has no handlebar, so the rider leans left or right to turn.", "Most scooters roll on two wheels, while a skateboard rolls on four."],
        prompt: "Read the paragraph in the box. Sort each fact into the right column.",
        cols: ["Scooter only", "Both", "Skateboard only"],
        rows: [
          { text: "The rider stands up to ride.", answer: 1 },
          { text: "The rider pushes off with one foot.", answer: 1 },
          { text: "The rider steers with a handlebar.", answer: 0 },
          { text: "The rider leans to turn.", answer: 2 },
          { text: "It usually rolls on two wheels.", answer: 0 }
        ],
        clue: "Sort each fact by asking: Is it true of the scooter, the skateboard, or both?",
        hints: [
          "Sort each fact by asking: Is it true of the scooter, the skateboard, or both?",
          "Find the clue words both, however and while in the box. Read what comes after each one.",
          "The handlebar comes right after however, and the box says a skateboard has none, so steering with a handlebar is Scooter only. Sort the other facts the same way."
        ],
        how: [
          "The second sentence uses on both: the rider stands up and pushes off with one foot. Those two facts go under Both.",
          "After however, the box tells about the scooter's handlebar, which the rider turns to steer. That is Scooter only.",
          "A skateboard has no handlebar, so the rider leans to turn. That is Skateboard only.",
          "The clue word while shows that most scooters roll on two wheels and a skateboard rolls on four. Two wheels is Scooter only."
        ],
        misconception: "A common mix-up is putting a fact under one thing when the text says both. Look for the clue word both first.",
        why: "Standing up and pushing off with one foot are true of both. Steering with a handlebar and rolling on two wheels are Scooter only. Leaning to turn is Skateboard only." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TSCC-C06", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "Choose the words that finish the sentence so it tells how the two groups of students are alike.",
        text: "{0} students in 1900 and students today {1}.",
        slots: [
          { options: ["Both", "Only", "Unlike"], answer: 0 },
          { options: ["learned to read, write and do math", "wrote on small chalkboards called slates", "rode a bus to get to school"], answer: 0 }
        ],
        clue: "To tell how two things are alike, use a compare clue word and a fact that is true of both.",
        hints: [
          "To tell how two things are alike, use a compare clue word and a fact that is true of both.",
          "For each choice in the second blank, find it in the article. Is it about 1900, about today, or about both?",
          "Unlike shows a difference, so it cannot start a sentence that tells how the groups are alike. Choose the second blank by checking each choice against the article."
        ],
        how: [
          "A sentence about how things are alike starts with Both. Only and Unlike do not tell a likeness.",
          "Paragraph 1 uses both to tell what the two groups share. Slates were used in 1900, and the bus is mostly today.",
          "The finished sentence: \"Both students in 1900 and students today learned to read, write and do math.\""
        ],
        misconception: "A common mix-up is choosing a true fact about only one group. A likeness must be true of both.",
        why: "The answers are Both and \"learned to read, write and do math.\" Paragraph 1 says both groups learned these things. Slates were used in 1900, and riding a bus is mostly today, so they are differences." },
      { id: "SK-TSCC-C07", type: "ebsr", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How was a classroom in 1900 different from most classrooms today?",
          choices: [
            { text: "Students of all ages learned together in one room.", correct: true },
            { text: "Students learned math but did not learn to read." },
            { text: "Students shared a room with others their own age." },
            { text: "Students had no time at all to play outside." }
          ] },
        partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
          choices: [
            { text: "\"One teacher taught every grade in the same room, from the youngest children to the oldest.\"", correct: true },
            { text: "\"However, a school day in 1900 looked very different.\"" },
            { text: "\"Students in 1900 often wrote on small chalkboards called slates.\"" },
            { text: "\"Both had time to play outside.\"" }
          ] },
        clue: "To find a difference, find what is true of one thing but not the other. Look for a contrast clue word.",
        hints: [
          "To find a difference, find what is true of one thing but not the other. Look for a contrast clue word.",
          "Reread paragraphs 2 and 3.",
          "Paragraph 1 says both groups had time to play outside, so that choice is not a difference. For Part B, choose the sentence that tells what the 1900 classroom was like, not one that only says there is a difference."
        ],
        how: [
          "Paragraph 2 says many children in 1900 went to a one-room school, where one teacher taught every grade together.",
          "Paragraph 3 says that today, unlike in 1900, children usually share a room with others their own age.",
          "Part A: Students of all ages learned together in one room. Part B: \"One teacher taught every grade in the same room, from the youngest children to the oldest.\"",
          "\"However, a school day in 1900 looked very different\" tells that there is a difference, but not what it is. The sentence about slates tells a different difference."
        ],
        misconception: "A common mix-up is choosing the fact about today. Read the question again: it asks what the 1900 classroom was like.",
        why: "Part A: Students of all ages learned together in one room. Part B: \"One teacher taught every grade in the same room, from the youngest children to the oldest.\" Children today usually share a room with others their own age. Both groups learned to read and had time to play." },
      { id: "SK-TSCC-C08", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "How does the author organize the differences in paragraphs 2 to 5?",
        choices: [
          { text: "one topic at a time, telling about 1900 and then about today", correct: true },
          { text: "all about schools in 1900 first, then all about schools today" },
          { text: "in time order, from the first day of school to the last day" },
          { text: "as problems in 1900 and the ways people solved them later" }
        ],
        clue: "Authors can organize a comparison in different ways. They may tell all about one thing and then the other, or switch back and forth between the two things.",
        hints: [
          "Authors can organize a comparison in different ways. They may tell all about one thing and then the other, or switch back and forth between the two things.",
          "Look at the first sentence of paragraphs 4 and 5. What does each paragraph start to tell about?",
          "The article never tells about a problem and how people fixed it, so that choice does not fit. Test each choice that is left against paragraphs 4 and 5."
        ],
        how: [
          "Paragraphs 2 and 3 are about classrooms: one room in 1900, many rooms today.",
          "Paragraph 4 is about slates in 1900 and paper and computers today. Paragraph 5 is about getting to school: walking then, the bus today.",
          "The answer is \"one topic at a time, telling about 1900 and then about today.\"",
          "The author does not tell all about 1900 first, does not follow one school day in order, and does not tell problems and solutions."
        ],
        misconception: "A common mix-up is thinking the author tells everything about one thing first. Here each topic tells about both.",
        why: "The answer is \"one topic at a time, telling about 1900 and then about today.\" Classrooms, slates and paper, and getting to school each get both times. The article does not tell all about 1900 first, does not follow one day in time order, and has no problems and solutions." },
      { id: "SK-TSCC-C09", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        stem: ["(1) Schools in 1900 and schools today are alike in some ways.", "(2) Both kinds of schools have teachers and students.", "(3) Also, in both, students learn to read and write.", "(4) In addition, a school in 1900 often had just one room.", "(5) Most schools today have many rooms."],
        prompt: "A student wrote this paragraph. One sentence begins with the wrong clue word. Choose the sentence and the clue word that should begin it.",
        text: "Sentence {0} should begin with {1}",
        slots: [
          { options: ["2", "3", "4"], answer: 2 },
          { options: ["Also,", "However,", "For example,"], answer: 1 }
        ],
        clue: "The first sentence says the schools are alike. Watch for the place where the writer switches to a difference.",
        hints: [
          "The first sentence says the schools are alike. Watch for the place where the writer switches to a difference.",
          "For each sentence, ask: does it tell how the schools are alike, or how they are different? Then check its clue word.",
          "For example adds an example, not a switch to a difference, so it does not fit the second blank. Find the sentence first, then try each word that is left at its start."
        ],
        how: [
          "Sentences 2 and 3 tell how the schools are alike. Sentences 4 and 5 tell a difference: one room in 1900 and many rooms today.",
          "Sentence 4 starts the difference, but it begins with In addition, which adds one more likeness. Sentences 2 and 3 begin with Both and Also, which fit because they do tell likenesses.",
          "Sentence 4 should begin with However, the clue word that switches from alike to different.",
          "For example would add an example, not a difference."
        ],
        misconception: "A common mix-up is keeping a clue word that adds on, like also or in addition, when the writer turns to a difference.",
        why: "The answers are 4 and However. Sentences 2 and 3 tell likenesses, so Both and Also fit there. Sentence 4 begins the difference, but In addition adds one more likeness. Also would add a likeness too, and for example adds an example, so However is the clue word that shows the switch." },
      { id: "SK-TSCC-C10", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "In paragraph 4, slates and paper are different. In what way are they ALIKE?",
        choices: [
          { text: "Students use both of them for writing.", correct: true },
          { text: "Students can wipe both of them clean." },
          { text: "Students type on both of them at school." },
          { text: "Students in 1900 used both of them every day." }
        ],
        clue: "Things that are different can still be alike in some way. Ask: What is true of both?",
        hints: [
          "Things that are different can still be alike in some way. Ask: What is true of both?",
          "Reread paragraph 4. List what it says about slates and what it says about paper.",
          "Only slates can be wiped clean and used again, so that is not true of both. Check each choice that is left: is it true of slates and of paper?"
        ],
        how: [
          "Paragraph 4 says students in 1900 wrote on slates. Students today write on paper.",
          "So slates and paper are both used for writing, even though they are different things.",
          "The answer is \"Students use both of them for writing.\"",
          "Only slates were wiped clean, students type on computers, not on slates or paper, and the article does not say students in 1900 used paper."
        ],
        misconception: "A common mix-up is thinking that a likeness must use the word both. Ask what is true of both, even when no clue word says so.",
        why: "The answer is \"Students use both of them for writing.\" Students in 1900 wrote on slates, and students today write on paper. Only slates were wiped clean, typing is done on computers, and the article does not say students in 1900 used paper." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TSCC-C11", type: "dropdown", points: 2, dok: 3, std: ["3.T.SS.1.a"], passages: ["p4"],
        stem: ["A student made this chart about the article.", "Canoe only: open on top; a paddle with one blade", "Both: long and narrow; moved by paddles", "Kayak only: a paddle with a blade at each end; floats in shallow water"],
        prompt: "One fact in the student's chart is in the wrong place. Find it and choose where it belongs.",
        text: "The fact \"{0}\" is in the wrong place. It belongs under {1}.",
        slots: [
          { options: ["open on top", "moved by paddles", "floats in shallow water"], answer: 2 },
          { options: ["Canoe only", "Kayak only", "Both"], answer: 2 }
        ],
        clue: "Check each fact in a chart against the article. A fact under Both must be true of both boats.",
        hints: [
          "Check each fact in a chart against the article. A fact under Both must be true of both boats.",
          "For each fact in the chart, find the sentence in the article that tells about it. Read the clue word in that sentence.",
          "\"Moved by paddles\" is in the right place, because the article says both boats use paddles. Check the other facts in the chart the same way."
        ],
        how: [
          "Open on top and a one-blade paddle are canoe facts. A blade at each end is a kayak fact.",
          "Long and narrow, and moved by paddles, are in paragraph 2 with the clue word both.",
          "Paragraph 2 also says, \"Both can float in shallow water.\" The student put that fact under Kayak only.",
          "So \"floats in shallow water\" is in the wrong place. It belongs under Both."
        ],
        misconception: "A common mix-up is putting a shared fact under only one thing. Check for the clue word both in the article.",
        why: "The answers are \"floats in shallow water\" and Both. Paragraph 2 says both boats can float in shallow water, so it belongs under Both, not Kayak only. The other facts are in the right places." },
      { id: "SK-TSCC-C12", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: ["p4"],
        prompt: "Ms. Grant wants to paddle down the river with her two children and their tent. Use the article. Which boat should she choose, and why?",
        choices: [
          { text: "a canoe, because it has room for more people and gear", correct: true },
          { text: "a kayak, because its paddle has a blade at each end" },
          { text: "a canoe, because both boats are moved with paddles" },
          { text: "a kayak, because most kayaks are closed on top" }
        ],
        clue: "To choose between two things, use a difference that matters for the job.",
        hints: [
          "To choose between two things, use a difference that matters for the job.",
          "List what Ms. Grant needs to bring. Then reread the paragraphs that tell differences between the boats.",
          "Both boats are moved with paddles, so that fact cannot help her choose. Check each choice that is left against the article."
        ],
        how: [
          "Ms. Grant needs room for herself, two children and a tent.",
          "Paragraph 5 says a canoe often has room for two or three people and a pile of camping gear, but most kayaks carry just one person.",
          "The answer is \"a canoe, because it has room for more people and gear.\"",
          "A two-blade paddle and a closed top do not help her carry her family, and both boats use paddles, so that cannot help her choose."
        ],
        misconception: "A common mix-up is giving a reason that is true but does not matter for the job, or one that is true of both things.",
        why: "The answer is \"a canoe, because it has room for more people and gear.\" Ms. Grant needs room for three people and a tent, and a canoe often holds two or three people and camping gear, while most kayaks carry one person. The paddles and the closed top do not matter for her trip." },
      /* Compares the set 2 and set 3 texts, so it carries both passages. */
      { id: "SK-TSCC-C13", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: ["p3", "p4"],
        prompt: "Think about \"School Then and Now\" and \"Canoe or Kayak?\" How are the two articles organized in the same way?",
        choices: [
          { text: "Each tells how two things are alike, then tells their differences one topic at a time.", correct: true },
          { text: "Each compares something from long ago with something that people use today." },
          { text: "Each tells which of the two things is better and gives reasons for that choice." },
          { text: "Each tells the differences first and saves the ways the things are alike for the end." }
        ],
        clue: "To compare how two texts are organized, look at what each one does first and what it does after that.",
        hints: [
          "To compare how two texts are organized, look at what each one does first and what it does after that.",
          "In each article, find where the author tells how the two things are alike, and where the author tells differences.",
          "Only one of the articles is about long ago, so that choice is not true of both. Check each choice that is left against both articles."
        ],
        how: [
          "\"School Then and Now\" tells how the students are alike in paragraph 1. Then it gives differences: classrooms, writing and getting to school.",
          "\"Canoe or Kayak?\" tells how the boats are alike in paragraph 2. Then it gives differences: the tops, the paddles and how much they carry.",
          "The answer is \"Each tells how two things are alike, then tells their differences one topic at a time.\"",
          "Only the school article is about long ago, neither says one thing is better, and neither saves the likenesses for the end."
        ],
        misconception: "A common mix-up is choosing something true of only one article. A way they are organized the same must fit both.",
        why: "The answer is \"Each tells how two things are alike, then tells their differences one topic at a time.\" The school article starts with likenesses in paragraph 1 and the boat article in paragraph 2, and then each goes through differences topic by topic. Only the school article is about long ago, and neither says which is better." },
      { id: "SK-TSCC-C14", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
        stem: ["Facts about hail and snow:", "Both are frozen water that falls from clouds.", "Snow falls as soft, light flakes.", "Hail falls as hard balls of ice.", "Snow falls in cold weather.", "Hail often falls during thunderstorms, even on warm days."],
        prompt: "A student is writing about hail and snow. Which TWO sentences use the facts in the box to compare and contrast them correctly?",
        choices: [
          { text: "Hail and snow are both frozen water that falls from clouds.", correct: true },
          { text: "Snow falls as soft flakes, but hail falls as hard balls of ice.", correct: true },
          { text: "Unlike snow, hail is frozen water that falls from clouds." },
          { text: "Hail and snow are alike because both fall only in cold weather." },
          { text: "Snow falls in cold weather, and hail also falls as soft flakes." }
        ],
        clue: "A compare sentence tells a fact true of both. A contrast sentence tells a fact true of only one. Check that the clue word fits the fact.",
        hints: [
          "A compare sentence tells a fact true of both. A contrast sentence tells a fact true of only one. Check that the clue word fits the fact.",
          "For each sentence, find its facts in the box. Is each fact true of hail, of snow, or of both? Choose two.",
          "Hail does not fall as soft flakes, so the sentence that says it does is not correct. Check each sentence that is left: does its clue word match the fact?"
        ],
        how: [
          "The box says both are frozen water that falls from clouds. A sentence with both fits that fact.",
          "Snow falls as soft flakes, and hail falls as hard balls of ice. That is a difference, so but fits.",
          "The answers are \"Hail and snow are both frozen water that falls from clouds.\" and \"Snow falls as soft flakes, but hail falls as hard balls of ice.\"",
          "Unlike cannot go with a fact that is true of both, hail can fall on warm days, and hail is not soft."
        ],
        misconception: "A common mix-up is using a contrast clue word, like unlike, with a fact that is true of both things.",
        why: "The answers are \"Hail and snow are both frozen water that falls from clouds.\" and \"Snow falls as soft flakes, but hail falls as hard balls of ice.\" The first tells a fact true of both with both. The second tells a real difference with but. Unlike does not fit a shared fact, hail can fall on warm days, and hail is hard." },
      { id: "SK-TSCC-C15", type: "cr", dok: 3, std: ["3.T.SS.1.a"], passages: [], rows: 4,
        stem: ["Two ways to get from the Elm Street Library to Cedar Park:", "The walking path takes 25 minutes, is free, and goes past a duck pond.", "The city bus takes 10 minutes, costs one dollar, and stops right at the park gate.", "Both start at the library and end at Cedar Park."],
        prompt: "Read the box. Write two sentences. In the first, tell one way the path and the bus are alike. In the second, tell one way they are different. Use a clue word in each sentence.",
        sample: "Both the path and the bus go from the library to Cedar Park. However, the bus takes 10 minutes, while the path takes 25 minutes.",
        criteria: [
          "My first sentence tells something true of both ways.",
          "My second sentence tells a real difference from the box.",
          "I used a compare clue word, like both, and a contrast clue word, like however, but or while."
        ],
        clue: "A compare sentence tells something true of both. A contrast sentence tells something true of only one.",
        hints: [
          "A compare sentence tells something true of both. A contrast sentence tells something true of only one.",
          "Look for the line in the box that tells what both ways share. Then pick one fact where the path and the bus are not the same.",
          "For the second sentence, you could use however, but or while. Put one way on each side of the clue word."
        ],
        how: [
          "Find a likeness: both start at the library and end at Cedar Park.",
          "Find a difference: the bus takes 10 minutes, and the path takes 25 minutes. Cost and what you pass on the way are other differences.",
          "Use both in the first sentence and a contrast clue word in the second.",
          "One good answer: \"Both the path and the bus go from the library to Cedar Park. However, the bus takes 10 minutes, while the path takes 25 minutes.\" Other answers can also be right."
        ],
        misconception: "A common mix-up is writing two differences and no likeness. The first sentence must tell something true of both.",
        why: "Many answers can be right. A good answer tells one likeness with a clue word like both and one real difference with a clue word like however, but or while. For example: \"Both the path and the bus go from the library to Cedar Park. However, the bus takes 10 minutes, while the path takes 25 minutes.\"" }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new text. `like` lists only the core items
     each one really practises (same component and task). */
  similar: [
    { id: "SK-TSCC-S01", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
      like: ["SK-TSCC-C05", "SK-TSCC-C06", "SK-TSCC-C11"],
      stem: ["Peaches and plums grow on trees in Georgia.", "Each fruit has one hard pit in the middle.", "A peach has fuzzy skin, but a plum has smooth, shiny skin.", "Most peaches are yellow or orange inside, while many plums are red or purple inside."],
      prompt: "A student is making a chart about peaches and plums. Which TWO facts belong in the Both part of the chart?",
      choices: [
        { text: "grows on trees", correct: true },
        { text: "has one hard pit in the middle", correct: true },
        { text: "has fuzzy skin" },
        { text: "has smooth, shiny skin" },
        { text: "is red or purple inside" }
      ],
      clue: "A fact belongs under Both only if it is true of both things.",
      hints: [
        "A fact belongs under Both only if it is true of both things.",
        "Read each sentence in the box. Is it about peaches, plums, or both fruits? Choose two.",
        "Fuzzy skin comes before but, and it is about peaches only, so it does not belong under Both. Check each fact that is left the same way."
      ],
      how: [
        "The first sentence says peaches and plums grow on trees, so that is true of both.",
        "The second sentence says each fruit has one hard pit, so that is true of both too.",
        "The answers are \"grows on trees\" and \"has one hard pit in the middle.\"",
        "Fuzzy skin is peaches only, smooth skin is plums only, and red or purple inside is many plums."
      ],
      misconception: "A common mix-up is missing a likeness that uses a word like each instead of both.",
      why: "The answers are \"grows on trees\" and \"has one hard pit in the middle.\" Both fruits grow on trees, and each has one hard pit. Fuzzy skin is peaches, smooth skin is plums, and red or purple inside is many plums." },
    { id: "SK-TSCC-S02", type: "ebsr", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: ["p5"],
      like: ["SK-TSCC-C07", "SK-TSCC-C02"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How is a snowplow different from a street sweeper?",
        choices: [
          { text: "It pushes what it clears to the side of the road.", correct: true },
          { text: "It drives slowly along the streets of a city." },
          { text: "It sweeps up leaves with brushes that spin." },
          { text: "It sucks up dirt into a tank inside the truck." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"Unlike a street sweeper, it pushes snow to the side of the road instead of picking it up.\"", correct: true },
          { text: "\"Both clear things off the road so cars can drive safely.\"" },
          { text: "\"A street sweeper has round brushes underneath that spin and sweep up dirt, leaves and trash.\"" },
          { text: "\"However, the two trucks work in different ways.\"" }
        ] },
      clue: "A difference is true of one thing but not the other. Look for a contrast clue word.",
      hints: [
        "A difference is true of one thing but not the other. Look for a contrast clue word.",
        "Read paragraphs 2 and 3, which tell how each truck does its job.",
        "Paragraph 1 says both trucks drive slowly, so that choice is not a difference. For Part B, choose a sentence that tells something only one of the trucks does, then check that it matches your Part A answer."
      ],
      how: [
        "Paragraph 2 says a street sweeper sweeps up dirt and leaves and sucks them into a tank.",
        "Paragraph 3 says a snowplow, unlike a street sweeper, pushes snow to the side of the road instead of picking it up.",
        "Part A: It pushes what it clears to the side of the road. Part B: \"Unlike a street sweeper, it pushes snow to the side of the road instead of picking it up.\"",
        "Driving slowly is true of both trucks, and the brushes and the tank belong to the street sweeper."
      ],
      misconception: "A common mix-up is choosing a fact about the other truck. Read the question again: it asks what the snowplow does.",
      why: "Part A: It pushes what it clears to the side of the road. Part B: \"Unlike a street sweeper, it pushes snow to the side of the road instead of picking it up.\" Both trucks drive slowly, and the brushes and the tank belong to the street sweeper." },
    { id: "SK-TSCC-S03", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C12"],
      stem: ["Darnell has two coats.", "His rain jacket is thin and waterproof, so rain rolls right off it.", "His puffy coat is thick and very warm, but it soaks up water when it gets wet.", "Both coats have hoods and zip up the front."],
      prompt: "Tomorrow will be warm and rainy. Which coat should Darnell wear, and why?",
      choices: [
        { text: "the rain jacket, because it keeps him dry without being too warm", correct: true },
        { text: "the puffy coat, because it has a hood to keep his head covered" },
        { text: "the rain jacket, because it has a zipper up the front of it" },
        { text: "the puffy coat, because it is thick and very warm to wear" }
      ],
      clue: "To choose between two things, use a difference that matters for the job. A fact true of both cannot help you choose.",
      hints: [
        "To choose between two things, use a difference that matters for the job. A fact true of both cannot help you choose.",
        "Think about what tomorrow's weather needs. Then read what makes each coat different.",
        "A hood and a zipper are on both coats, as hint 1 says. Check each choice that is left against the box."
      ],
      how: [
        "Tomorrow will be warm and rainy, so Darnell needs to stay dry and not get too hot.",
        "The rain jacket is thin and waterproof. The puffy coat is very warm and soaks up water.",
        "The answer is \"the rain jacket, because it keeps him dry without being too warm.\"",
        "Hoods and zippers are true of both coats, and a thick, warm coat is wrong for a warm day."
      ],
      misconception: "A common mix-up is choosing a reason that is true of both things, so it cannot help you choose.",
      why: "The answer is \"the rain jacket, because it keeps him dry without being too warm.\" It is thin and waterproof, which fits a warm, rainy day. Both coats have hoods and zippers, and the thick puffy coat would be too warm and would soak up rain." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting.
       Each like names one core item only, because the engine uses an extra question once.
       Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TSCC-S04", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-P5"],
      stem: ["Centipedes and millipedes are small creatures with many legs. Both live in damp places under logs and rocks. A centipede has one pair of legs on each part of its body. It runs fast and hunts bugs. A millipede has two pairs of legs on each part of its body. It moves slowly and eats dead leaves."],
      prompt: "Choose the clue word that best completes the sentence.",
      text: "{0} a centipede, a millipede lives in damp places under logs and rocks.",
      slots: [
        { options: ["Unlike", "Instead of", "Like"], answer: 2 }
      ],
      clue: "Clue words show how ideas relate. Ask whether the two parts of the sentence tell a likeness or a difference.",
      hints: [
        "Clue words show how ideas relate. Ask whether the two parts of the sentence tell a likeness or a difference.",
        "Reread what the text says about where each animal lives.",
        "The two animals do not take turns, so a word that means in place of does not fit. Read the sentence with each word that is left."
      ],
      how: [
        "The text says both animals live in damp places under logs and rocks.",
        "So the sentence tells a likeness between the two animals.",
        "The answer is Like. Unlike would say they are different, and instead of would say one takes the place of the other."
      ],
      misconception: "A common mix-up is choosing the clue word you used last time. First decide whether the sentence tells a likeness or a difference.",
      why: "The answer is Like. Like a centipede, a millipede lives in damp places under logs and rocks. The text says both animals live there, so the sentence tells a likeness. Unlike would say they are different, and instead of would say one takes the place of the other." },
    { id: "SK-TSCC-S05", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
      like: ["SK-TSCC-P6"],
      stem: ["Ice skates and roller skates both help people glide. Ice skates have thin metal blades, and they are used on a frozen rink. Roller skates have wheels, and they are used on smooth floors or sidewalks. Both kinds of skates are worn on the feet and fastened with laces or straps. A skater leans and pushes to move along. Kids often learn to skate with a friend."],
      prompt: "Which TWO sentences tell how ice skates and roller skates are ALIKE?",
      choices: [
        { text: "Both are worn on the feet and fastened with laces or straps.", correct: true },
        { text: "Both help people glide.", correct: true },
        { text: "Ice skates have thin metal blades." },
        { text: "Roller skates have wheels." },
        { text: "Ice skates are used on a frozen rink." }
      ],
      clue: "Alike means the same. Look for facts that are true of both things.",
      hints: [
        "Alike means the same. Look for facts that are true of both things.",
        "For each choice, ask: is this true of ice skates, of roller skates, or of both? Choose two.",
        "The metal blades are true of only ice skates, so that choice tells a difference. Check the other choices the same way."
      ],
      how: [
        "A likeness is a fact true of both kinds of skates.",
        "The text says both kinds are worn on the feet and fastened with laces or straps, and both help people glide.",
        "The answers are \"Both are worn on the feet and fastened with laces or straps.\" and \"Both help people glide.\"",
        "The blades, the wheels and the frozen rink each belong to only one kind of skate."
      ],
      misconception: "A common mix-up is choosing a true fact about one kind of skate. A likeness must be true of both.",
      why: "The answers are \"Both are worn on the feet and fastened with laces or straps.\" and \"Both help people glide.\" Each is true of both kinds of skates. The blades, the wheels and the frozen rink are true of only one kind." },
    { id: "SK-TSCC-S06", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C04"],
      stem: ["Seals and sea lions look a lot alike. Both have smooth bodies, and both swim in the sea. But you can tell them apart. A sea lion has small flaps for ears, and its long front flippers work like legs on land. A seal has no ear flaps, only tiny holes, and its flippers are short, so it wiggles across the ground on its belly. A sea lion also barks loudly, but a seal makes quiet grunts."],
      prompt: "After reading the text, what can a reader do?",
      choices: [
        { text: "look at an animal's ears and flippers to tell which one it is", correct: true },
        { text: "pick which of the two animals would make a better pet" },
        { text: "decide which of the two animals swims faster in the sea" },
        { text: "find out where each animal sleeps at night" }
      ],
      clue: "Authors compare things for a reason. Ask what a reader can do with the facts about each animal.",
      hints: [
        "Authors compare things for a reason. Ask what a reader can do with the facts about each animal.",
        "Look at the differences the text lists. What parts of the animals does it name?",
        "Nothing in the text says either animal swims faster, so that choice does not fit. Check the other choices against the facts."
      ],
      how: [
        "The text lists differences in ears, flippers and sounds.",
        "A reader can use the ears and flippers to tell which animal is which.",
        "The answer is \"look at an animal's ears and flippers to tell which one it is.\"",
        "The text does not talk about pets, does not rank swimming, and does not say where the animals sleep."
      ],
      misconception: "A common mix-up is choosing a use the text never gives. Use the differences the author lists.",
      why: "The answer is \"look at an animal's ears and flippers to tell which one it is.\" The text lists differences in ears and flippers, and a reader can use them to tell the animals apart. It does not tell about pets, swimming speed or where the animals sleep." },
    { id: "SK-TSCC-S07", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C06"],
      stem: ["A frisbee is a flat, round disk. A boomerang is a bent piece of wood. A player flicks a frisbee, and it spins and sails through the air. A thrown boomerang spins and flies, too. A frisbee flies straight and lands far away. A well-thrown boomerang curves in the air and comes back to the thrower."],
      prompt: "Choose the words that finish the sentence so it tells how a frisbee and a boomerang are alike.",
      text: "{0} a frisbee and a boomerang {1}.",
      slots: [
        { options: ["Both", "Neither", "Only"], answer: 0 },
        { options: ["spin as they fly through the air", "land far away from the thrower", "are shaped like a flat, round disk"], answer: 0 }
      ],
      clue: "To tell how things are alike, use a fact that is true of both of them.",
      hints: [
        "To tell how things are alike, use a fact that is true of both of them.",
        "Find the facts about the frisbee. Then find out whether the boomerang has the same fact.",
        "A frisbee is a flat, round disk, but a boomerang is bent, so the shape is not true of both. Check the other choices for the second blank."
      ],
      how: [
        "A frisbee spins and sails through the air. A boomerang spins and flies, too.",
        "So both spin as they fly. The first blank needs a word that means the fact is true of both, so the answers are \"Both\" and \"spin as they fly through the air.\"",
        "A frisbee lands far away, but a boomerang comes back, and only the frisbee is a flat, round disk."
      ],
      misconception: "A common mix-up is using a fact that is true of only one thing. A likeness must be true of both.",
      why: "The answers are Both and \"spin as they fly through the air.\" The text says a frisbee spins as it sails and a boomerang spins as it flies. A frisbee lands far away, a boomerang comes back, and only the frisbee is a flat, round disk." },
    { id: "SK-TSCC-S08", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C07"],
      stem: ["A ukulele is a small, light instrument from Hawaii. It has four nylon strings. A banjo has a round body covered with a thin skin, and it has metal strings. A ukulele player plucks the strings with a thumb or a finger. A banjo player plucks or strums, too. A ukulele makes a soft, sweet sound. A banjo makes a bright, twangy sound."],
      prompt: "Which sentence from the text best shows how a ukulele and a banjo are ALIKE?",
      choices: [
        { text: "A banjo player plucks or strums, too.", correct: true },
        { text: "A ukulele makes a soft, sweet sound." },
        { text: "A banjo has a round body covered with a thin skin." },
        { text: "A ukulele is a small, light instrument from Hawaii." }
      ],
      clue: "To show two things are alike, find a sentence that tells something both of them do or have.",
      hints: [
        "To show two things are alike, find a sentence that tells something both of them do or have.",
        "Check each sentence: does it tell about only the ukulele, only the banjo, or both?",
        "The soft, sweet sound belongs to only the ukulele, so that sentence shows a difference. Check the other sentences."
      ],
      how: [
        "A ukulele player plucks the strings. The next sentence says a banjo player plucks or strums, too.",
        "So the two instruments are played in a like way.",
        "The answer is \"A banjo player plucks or strums, too.\"",
        "The soft sound, the round body and the Hawaii sentence each tell about only one instrument."
      ],
      misconception: "A common mix-up is choosing a sentence about one instrument. A likeness sentence must fit both.",
      why: "The answer is \"A banjo player plucks or strums, too.\" It follows the sentence that says a ukulele player plucks the strings, so both are played by plucking. The soft sound, the round body and Hawaii each fit only one instrument." },
    { id: "SK-TSCC-S09", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C08"],
      stem: ["Subway trains and trolleys both carry people through a city. They ride in different places. A subway train runs in tunnels under the ground. A trolley rolls on tracks set in the street, so it shares the road with cars. They also get their power in different ways. A subway train gets its power from a rail on the ground. A trolley gets its power from a wire above it."],
      prompt: "How does the author organize the differences?",
      choices: [
        { text: "by kind of difference, covering both vehicles before moving to the next difference", correct: true },
        { text: "all of the facts about the subway, and then all of the facts about the trolley" },
        { text: "from the most important difference to the least important difference" },
        { text: "from the oldest kind of vehicle to the newest kind of vehicle" }
      ],
      clue: "Look at how the author arranges the facts. Are they grouped by vehicle, or grouped some other way?",
      hints: [
        "Look at how the author arranges the facts. Are they grouped by vehicle, or grouped some other way?",
        "Find the two differences the author names. Then see what is told about each vehicle for each difference.",
        "The text never says which vehicle is older, so the choice about oldest to newest does not fit. Test the other choices against the order of the facts."
      ],
      how: [
        "The first difference is where they ride: the subway in tunnels, the trolley in the street.",
        "The second difference is how they get power: the subway from a rail, the trolley from a wire.",
        "The answer is \"by kind of difference, covering both vehicles before moving to the next difference.\"",
        "The facts are not grouped by vehicle, the text does not rank the differences, and it gives no dates."
      ],
      misconception: "A common mix-up is thinking the facts are grouped by vehicle. Here each difference is covered for both vehicles before the next one.",
      why: "The answer is \"by kind of difference, covering both vehicles before moving to the next difference.\" The text covers where they ride for both, then how they get power for both. It does not group all the subway facts first, rank the differences or give dates." },
    { id: "SK-TSCC-S10", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C10"],
      stem: ["In 1950, a writer typed on a typewriter. Each key hit an inked ribbon and printed a letter on a sheet of paper. If the writer made a mistake, the page had to be typed again. Today, a writer can use a laptop. Each key makes a letter appear on a screen. The writer can fix a mistake in a moment. Then the writer can print the page or save it."],
      prompt: "A typewriter's paper and a laptop's screen are different. In what way are they ALIKE?",
      choices: [
        { text: "Each key the writer presses makes a letter show up on both of them.", correct: true },
        { text: "The writer can fix a mistake on both of them in a moment." },
        { text: "The writer must type the whole page again to fix a mistake on both." },
        { text: "The writer can print the page from both of them." }
      ],
      clue: "Two different things can still be alike. Ask what job each one does for the writer.",
      hints: [
        "Two different things can still be alike. Ask what job each one does for the writer.",
        "Find what the paper does for the writer. Then find what the screen does.",
        "Fixing a mistake in a moment is told only about the laptop, so it is not true of both. Check the other choices."
      ],
      how: [
        "The letters the writer types are printed on paper, or they appear on a screen.",
        "In both cases, each key the writer presses makes a letter show up.",
        "The answer is \"Each key the writer presses makes a letter show up on both of them.\"",
        "Quick fixing and printing are told only about the laptop, and typing a page again is told only about the typewriter."
      ],
      misconception: "A common mix-up is choosing a fact about only one of the two things. A likeness must be true of both.",
      why: "The answer is \"Each key the writer presses makes a letter show up on both of them.\" Paper and a screen both show a letter for each key that is pressed. Quick fixing and printing belong to the laptop, and typing a page again belongs to the typewriter." },
    { id: "SK-TSCC-S11", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C09"],
      stem: ["(1) A trampoline and a swing set are fun to have in a backyard.", "(2) Both need a grown-up to check that they are safe.", "(3) A trampoline lets you bounce, while a swing set lets you swing.", "(4) They are the same in one more way: each one helps kids burn off extra energy.", "(5) Unlike a swing set, a trampoline is round and flat."],
      prompt: "Match each clue word from the paragraph to what it shows.",
      cols: ["alike", "different"],
      rows: [
        { text: "while", answer: 1 },
        { text: "Both", answer: 0 },
        { text: "same", answer: 0 },
        { text: "Unlike", answer: 1 }
      ],
      clue: "A clue word tells how its sentence connects to the other things in the paragraph. Reread each sentence that has a clue word in it.",
      hints: [
        "A clue word tells how its sentence connects to the other things in the paragraph. Reread each sentence that has a clue word in it.",
        "For each clue word, ask what its sentence says about the trampoline and the swing set: the same, or not the same?",
        "Pick one clue word and reread only its sentence. Ask whether the two things in it are the same or not the same, then do the same for the other clue words."
      ],
      how: [
        "Sentences 2 and 4 tell things that are true of both: both need a safety check, and each one helps kids burn off energy. So Both and same show that the things are alike.",
        "Sentences 3 and 5 tell things that are not the same: bouncing against swinging, and round and flat. So while and Unlike show that the things are different."
      ],
      misconception: "A common mix-up is sorting a clue word by how it sounds. Check what its sentence says about the two things.",
      why: "Both and same show that the things are alike, because their sentences tell what is true of both. While and Unlike show that the things are different, because their sentences tell how the two things are not the same." },
    { id: "SK-TSCC-S12", type: "dropdown", points: 2, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C11"],
      stem: ["A rowboat is a small boat. A person sits in it and pulls two oars to move forward. A sailboat is also a boat, but it has a tall pole called a mast. A big cloth sail is raised on the mast, and the wind pushes the sail. Both kinds of boats float on water and can carry people.", "A student made this chart about the text.", "Rowboat only: moved with oars", "Both: floats on water; has a tall mast", "Sailboat only: moved by the wind; has a cloth sail"],
      prompt: "One fact in the student's chart is in the wrong place. Find it and choose where it belongs.",
      text: "The fact \"{0}\" is in the wrong place. It belongs under {1}.",
      slots: [
        { options: ["floats on water", "has a tall mast", "moved with oars"], answer: 1 },
        { options: ["Rowboat only", "Both", "Sailboat only"], answer: 2 }
      ],
      clue: "A chart sorts facts into only one thing, only the other, or both. Test each fact in the chart against the text.",
      hints: [
        "A chart sorts facts into only one thing, only the other, or both. Test each fact in the chart against the text.",
        "For each fact in the chart, ask: is it true of the rowboat, the sailboat, or both?",
        "Floating on water is true of both boats, and it is under Both, so it is in the right place. Check the other facts, then choose where the wrong one belongs."
      ],
      how: [
        "Both boats float on water, so that fact is under Both correctly.",
        "The text says only the sailboat has a tall mast. A rowboat is moved with oars and has no mast.",
        "So the fact \"has a tall mast\" is in the wrong place. It belongs under Sailboat only."
      ],
      misconception: "A common mix-up is trusting a chart without checking. Test each fact against the text.",
      why: "The answers are \"has a tall mast\" and Sailboat only. The text says only the sailboat has a mast. Floating on water is true of both boats, and being moved with oars is true of only the rowboat." },
    { id: "SK-TSCC-S13", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSCC-C13"],
      stem: ["Text 1: Tangerines and oranges are both citrus fruits. Both grow on trees and have juicy sections. A tangerine is small, and its peel comes off easily. An orange is bigger, and its peel is thicker. A tangerine tastes sweet, but an orange is a little more sour.", "Text 2: Paper books and e-books both let you read stories. Both can have pictures. A paper book is made of pages that you turn. An e-book is read on a screen, and one screen can hold hundreds of books. You can write in a paper book with a pencil, but you cannot write in an e-book."],
      prompt: "How are the two texts organized in the same way?",
      choices: [
        { text: "Each tells how two things are alike, and then tells how they are different.", correct: true },
        { text: "Each tells how two things are different, and then tells how they are alike." },
        { text: "Each tells the steps for making something, one after another." },
        { text: "Each tells about a problem and how it was solved." }
      ],
      clue: "To compare how two texts are built, find what each one does first and what it does next.",
      hints: [
        "To compare how two texts are built, find what each one does first and what it does next.",
        "Read the first two sentences of each text. Then look at the clue words in the rest, such as but and a difference.",
        "Neither text has steps with words like first and next, so the choice about steps does not fit. Test the other choices against both texts."
      ],
      how: [
        "Text 1 begins with what tangerines and oranges share. Then it tells how they differ in size, peel and taste.",
        "Text 2 begins with what paper books and e-books share. Then it tells how they differ in pages, screens and writing.",
        "The answer is \"Each tells how two things are alike, and then tells how they are different.\"",
        "Neither text begins with differences, tells steps, or tells a problem."
      ],
      misconception: "A common mix-up is reversing the order. Check which comes first in each text, the likenesses or the differences.",
      why: "The answer is \"Each tells how two things are alike, and then tells how they are different.\" Both texts start with likenesses and then give differences. Neither tells steps or a problem, and neither starts with differences." },
    { id: "SK-TSCC-S14", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [], pick: 2,
      like: ["SK-TSCC-C14"],
      stem: ["Here are facts about an island and a peninsula. Both are land next to water. An island has water on all sides. A peninsula is joined to more land on one side. You get to an island by boat or bridge. You can walk to a peninsula over land. Maps show both kinds of land with a line around the edge. Some have towns, and some have only trees and birds."],
      prompt: "A student is writing about an island and a peninsula. Which TWO sentences use the facts in the box to compare and contrast them correctly?",
      choices: [
        { text: "An island and a peninsula are both pieces of land next to water.", correct: true },
        { text: "An island has water on all sides, but a peninsula is joined to a bigger piece of land.", correct: true },
        { text: "Unlike an island, a peninsula is a piece of land next to water." },
        { text: "An island and a peninsula are alike because both can be reached only by boat." },
        { text: "An island is joined to a bigger piece of land, and a peninsula also has water on all sides." }
      ],
      clue: "A compare sentence tells a fact true of both. A contrast sentence tells a fact true of only one. Check that the clue word fits the fact.",
      hints: [
        "A compare sentence tells a fact true of both. A contrast sentence tells a fact true of only one. Check that the clue word fits the fact.",
        "For each sentence, find its facts in the box. Is each fact true of an island, a peninsula, or both? Choose two.",
        "People can walk to a peninsula over land, so a sentence that says both are reached only by boat is not correct. Check each sentence that is left: does its clue word match the fact?"
      ],
      how: [
        "The box says both are pieces of land next to water. A sentence with both fits that fact.",
        "An island has water on all sides, and a peninsula is joined to a bigger piece of land. That is a difference, so but fits.",
        "The answers are \"An island and a peninsula are both pieces of land next to water.\" and \"An island has water on all sides, but a peninsula is joined to a bigger piece of land.\"",
        "Unlike cannot go with a fact true of both, and one sentence swaps the two facts."
      ],
      misconception: "A common mix-up is using a contrast clue word, like unlike, with a fact that is true of both things.",
      why: "The answers are \"An island and a peninsula are both pieces of land next to water.\" and \"An island has water on all sides, but a peninsula is joined to a bigger piece of land.\" The first tells a fact true of both. The second tells a real difference with but. Unlike does not fit a shared fact, a peninsula can be walked to, and one sentence swaps the facts." },
    { id: "SK-TSCC-S15", type: "cr", dok: 3, std: ["3.T.SS.1.a"], passages: [], rows: 4,
      like: ["SK-TSCC-C15"],
      stem: ["Two ways to warm a bowl of soup:", "On the stove, a pot of soup takes about eight minutes. You must stir it so it does not stick, and a grown-up must help.", "In the microwave, a bowl of soup takes about two minutes. You do not need to stir it the whole time, and the bowl gets hot, so a grown-up must help.", "Both ways make the soup hot enough to eat."],
      prompt: "Read the box. Write two sentences. In the first, tell one way the stove and the microwave are alike. In the second, tell one way they are different. Use a clue word in each sentence.",
      sample: "Both the stove and the microwave make soup hot, and both need a grown-up to help. However, the microwave takes about two minutes, while the stove takes about eight.",
      criteria: [
        "My first sentence tells something true of both ways.",
        "My second sentence tells a real difference from the box.",
        "I used a compare clue word, like both, and a contrast clue word, like however, but or while."
      ],
      clue: "A compare sentence tells something true of both. A contrast sentence tells something true of only one.",
      hints: [
        "A compare sentence tells something true of both. A contrast sentence tells something true of only one.",
        "Look for what the stove and the microwave share. Then pick one fact where they are not the same.",
        "For the second sentence, use a clue word that switches from one way to the other. Put one way on each side of it."
      ],
      how: [
        "Find a likeness: both make the soup hot enough to eat, and both need a grown-up to help.",
        "Find a difference: the microwave takes about two minutes, and the stove takes about eight. Stirring is another difference.",
        "Use both in the first sentence and a contrast clue word in the second.",
        "One good answer: \"Both the stove and the microwave make soup hot, and both need a grown-up to help. However, the microwave takes about two minutes, while the stove takes about eight.\" Other answers can also be right."
      ],
      misconception: "A common mix-up is writing two differences and no likeness. The first sentence must tell something true of both.",
      why: "Many answers can be right. A good answer tells one likeness with a clue word like both and one real difference with a clue word like however, but or while. For example: \"Both the stove and the microwave make soup hot, and both need a grown-up to help. However, the microwave takes about two minutes, while the stove takes about eight.\"" }
  ],
  /* Hints and Show me how for items kept in practice: refs P5 and P6 (core set 1) and Together P1-P4. */
  addons: {
    "SK-TSCC-P1": {
      hints: [
        "Alike means true of both. Look for the clue word both, then check each choice against the passage.",
        "Find each choice in the passage. Is it about frogs, about toads, or about both?",
        "Dry, bumpy skin is a toad fact from paragraph 2, so it is not true of both. Check each choice that is left: does the passage say it about both animals?"
      ],
      how: [
        "Paragraph 1 uses the clue word both to tell what frogs and toads share, including how they hatch.",
        "The answer is \"Both hatch as tadpoles.\"",
        "Each of the other choices is true of only one of the animals."
      ],
      misconception: "A common mix-up is choosing a true fact about only one animal. Alike means the passage says it about both." },
    "SK-TSCC-P2": {
      hints: [
        "Paragraph 1 tells how frogs and toads are alike. Look for the clue word that turns toward differences.",
        "Read the end of paragraph 1 and the start of paragraph 2.",
        "\"Both lay eggs, and both hatch as tadpoles\" still tells how they are alike, so the switch has not happened yet. Find the first sentence that starts telling differences."
      ],
      how: [
        "Paragraph 1 tells likenesses with the clue word both.",
        "Paragraph 2 begins with However, a clue word that switches to differences.",
        "The answer is \"However, they are different in some ways.\" The sentence after it tells the first difference, but it has no switch word."
      ],
      misconception: "A common mix-up is choosing the first sentence that tells a difference. The switch is the sentence with the clue word that turns toward differences." },
    "SK-TSCC-P3": {
      hints: [
        "Sort each fact by asking: Is it true of the frog, the toad, or both?",
        "Find each fact in paragraphs 1 and 2. Look at the clue word near it.",
        "Laying eggs is in paragraph 1 with the clue word both, so it goes in the middle. Sort the other facts the same way."
      ],
      how: [
        "Paragraph 1 says both lay eggs, and both hatch as tadpoles, so those two facts are Both.",
        "Paragraph 2 says a frog has smooth, wet skin, and unlike a frog, a toad has dry, bumpy skin.",
        "So smooth, wet skin is Frog only, and dry, bumpy skin is Toad only."
      ],
      misconception: "A common mix-up is putting a fact under one animal when the passage says both. Look for the clue word both first." },
    "SK-TSCC-P4": {
      hints: [
        "The word but has more than one job. Read the words on each side of it.",
        "Who is the first part of the sentence about? Who is the second part about?",
        "Nothing in this sentence tells a plan or a try, so it does not show a try that failed. Check each choice that is left against the two parts of the sentence."
      ],
      how: [
        "Before but, the sentence tells about a frog's skin. After but, it tells about a toad's skin.",
        "Smooth, wet skin and dry, bumpy skin are not the same, so but shows a difference.",
        "The answer is \"how frogs and toads are different.\" It is not a way they are alike, and it does not tell order or a failed try."
      ],
      misconception: "A common mix-up is thinking but always means a try failed. In compare and contrast, but shows a difference." },
    "SK-TSCC-P5": {
      hints: [
        "Read the sentence with each choice. Ask what the two parts of the sentence tell about frogs and toads.",
        "Find where the passage tells where frogs and toads live.",
        "Because would tell why something happens, and nothing in this sentence gives a reason. Try each choice that is left at the start of the sentence."
      ],
      how: [
        "Paragraph 4 says most frogs stay close to water, while many toads live far from ponds. That is a difference.",
        "A difference needs a contrast clue word. Like would say the animals are the same, and because tells why.",
        "The answer is Unlike: \"Unlike most frogs, many toads live far from ponds.\""
      ],
      misconception: "A common mix-up is choosing any clue word that sounds smooth. Pick the one that does the job: here, showing a difference." },
    "SK-TSCC-P6": {
      hints: [
        "To be alike, a fact must be true of both animals. Clue words like both help, but also check who a word like they means.",
        "For each sentence, find it in the passage and read the sentence just before it. Choose two.",
        "\"A frog has smooth, wet skin\" is about only one animal, so it cannot show how they are alike. Check each sentence that is left."
      ],
      how: [
        "\"Both are amphibians\" uses the clue word both.",
        "\"They eat lots of insects\" comes right after \"Both animals are helpful to people,\" so they means both animals.",
        "The answers are \"Both are amphibians.\" and \"They eat lots of insects, such as flies and mosquitoes.\"",
        "The other sentences tell about one animal or tell a difference."
      ],
      misconception: "A common mix-up is choosing a sentence about both animals that tells a difference. Alike means the same fact fits both." }
  },
  test: [
    { id: "SK-TSCC-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence uses a clue word to show that the author is switching from how the animals are alike to how they are different? Choose the sentence in the passage.",
      targets: ["p2:1:1", "p2:1:2", "p2:1:3", "p2:2:1", "p2:2:2"],
      answer: ["p2:2:1"], pick: 1,
      clue: "Find where the author stops telling what the animals share. Look for the clue word that starts the turn.",
      why: "The answer is \"However, these two animals are different in some ways.\" The clue word However marks the switch. Paragraph 1 tells how the animals are alike, and the rest of the passage tells how they are different." },
    { id: "SK-TSCC-T2", type: "ebsr", points: 2, dok: 2, passages: ["p2"], std: ["3.T.SS.1.a"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How is an alligator's snout different from a crocodile's snout?",
        choices: [
          { text: "An alligator's is wide, and a crocodile's is thin.", correct: true },
          { text: "An alligator's is thin, and a crocodile's is wide." },
          { text: "Both snouts are wide and shaped like a U." },
          { text: "Both snouts are thin and shaped like a V." }
        ] },
      partB: { prompt: "Which sentence from the passage best supports the answer to Part A?",
        choices: [
          { text: "\"Unlike an alligator, a crocodile has a thin, pointed snout like a V.\"", correct: true },
          { text: "\"They have thick, scaly skin and strong jaws.\"" },
          { text: "\"Look at their teeth, too.\"" },
          { text: "\"Georgia has lots of alligators.\"" }
        ] },
      clue: "Read paragraph 2 slowly. Find what it says about each animal, and find the clue word that shows a difference.",
      why: "Part A: An alligator's is wide, and a crocodile's is thin. Part B: \"Unlike an alligator, a crocodile has a thin, pointed snout like a V.\" The clue word Unlike shows the difference. Just before it, the passage says an alligator's snout is wide, like a U." },
    { id: "SK-TSCC-T3", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read the sentence from paragraph 4 in the box. What does the word \"but\" show here?",
      stem: ["Alligators live in fresh water, such as swamps and lakes, but crocodiles can live in salty water, too."],
      choices: [
        { text: "a difference between where the animals live", correct: true },
        { text: "a try to find a home that did not work" },
        { text: "the reason alligators like fresh water" },
        { text: "an example of a swamp in Georgia" }
      ],
      clue: "Ask: Is this but showing something that is different, or something that did not work? Read the words on each side of it.",
      why: "The answer is \"a difference between where the animals live.\" Before but, the sentence tells about alligators. After but, it tells about crocodiles. In compare and contrast, but shows a difference." },
    { id: "SK-TSCC-T4", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "According to paragraph 1, how are alligators and crocodiles alike?",
      choices: [
        { text: "Both lay eggs in nests on land.", correct: true },
        { text: "Both are a kind of large fish." },
        { text: "Both have smooth, wet skin." },
        { text: "Both build homes underwater." }
      ],
      clue: "Find the clue word in paragraph 1 that tells how two things are alike. Check each choice against that paragraph.",
      why: "The answer is \"Both lay eggs in nests on land.\" Paragraph 1 says this with the clue word Both. They are reptiles, not fish, and their skin is thick and scaly." },
    { id: "SK-TSCC-T5", type: "match", points: 2, dok: 2, passages: ["p2"], std: ["3.T.SS.1.a"],
      prompt: "Match each detail to the animal it is true for. Some details are true for both animals.",
      cols: ["Alligator only", "Crocodile only", "Both"],
      rows: [
        { text: "You see mostly its top teeth when its mouth is shut.", answer: 0 },
        { text: "You see top and bottom teeth when its mouth is shut.", answer: 1 },
        { text: "It can live in salty water.", answer: 1 },
        { text: "It has a long tail.", answer: 2 },
        { text: "It lives in the wild in Georgia.", answer: 0 }
      ],
      clue: "For each detail, find what the passage says about alligators, then about crocodiles. If it is true for both, choose Both.",
      why: "Seeing mostly top teeth is true of alligators, and seeing top and bottom teeth is true of crocodiles (paragraph 3). Only crocodiles can live in salty water too (paragraph 4). Both animals have long tails (paragraph 1). Georgia has lots of alligators, but wild crocodiles live only in south Florida, so living wild in Georgia is true of alligators only." }
  ]
});
PP.addLesson({
  key: "TS-DESC",
  code: "3.T.SS.1.a",
  codes: ["3.T.SS.1.a", "3.T.T.2.a"],
  title: "Description: a main topic and its details",
  clues: {
    words: ["for example", "such as", "also", "in addition", "has", "looks like"],
    ask: "What is this mostly about?",
    draw: "Draw a web: write the topic in a circle in the middle. Draw a line out to each detail."
  },
  coach: {
    mixup: "Main idea vs. detail. A detail is one fact. The main idea is what all the details have in common. Test it: \"Does every paragraph tell more about this?\"",
    strong: "\"It's mostly about how owls are good at hunting at night: they see in the dark, hear really well and fly quietly.\"",
    notyet: "Picking one fun fact as the main idea: \"Owls can hear mice under snow.\" Ask: \"Is the WHOLE thing about that, or just one sentence?\"",
    ido: "Describe your car or your home with three details. Then say: \"My main idea is that our home is small but cozy. Every detail I gave tells more about that.\"",
    wedo: "Read the owl example in Learn It together. Point to each detail and ask, \"What do all of these tell us about owls?\"",
    youdo: "Your child picks a topic they know well, like a favorite animal or game, and gives you the main idea plus three details.",
    everyday: "Play \"Main Idea\": your child describes something with three clues and you guess what it is. Then switch."
  },
  teach: {
    big: "In a description, the author picks one topic and gives details that tell more about it.",
    points: [
      "Details tell what something looks like, what it does or where it lives.",
      "Clue words like for example, such as, also and in addition tell you a detail is coming.",
      "The main idea is the big point the whole text makes. A detail is just one fact.",
      "To find the main idea, ask: What is this mostly about? Then check: Does every paragraph tell more about it?",
      /* B2 (b2b): extended to model headings and text boxes. B2 review fix (SHOULD-2): a box fact is not always a non-key detail. */
      "Science and social studies books use this structure a lot. A heading names what its section is mostly about. A text box sets some facts apart: ask whether the fact in the box tells more about the main idea, or is just interesting."
    ],
    words: [
      { term: "topic", means: "who or what the text is about" },
      { term: "detail", means: "one fact in a text. A key detail tells more about the main idea; some details are just interesting" },
      { term: "main idea", means: "the big point of the whole text, said in one sentence" }
    ],
    example: {
      label: "What it looks like",
      lines: ["Owls are skilled night hunters. Their huge eyes see well in the dark. They ALSO have sharp hearing. FOR EXAMPLE, an owl can hear a mouse moving under snow. IN ADDITION, soft feathers let owls fly without a sound."],
      note: "The main idea is that owls are skilled night hunters. Seeing in the dark, sharp hearing and quiet flying are details. Each one tells more about the main idea. The words in CAPS are the clue words."
    },
    tip: "On the test, a question may ask what a passage is mostly about. Watch out for a choice that is only one detail. Pick the one that fits the whole passage."
  },
  learn: [
    {
      /* B2 review fix (NOTE-15): replaces a grade 1 zebra example; models a main idea stated last. */
      show: ["The first floor of the science museum has a dinosaur skeleton as tall as a house. Next to it, you can walk through a giant model of a beating heart. Kids can also touch real snakeskin at the animal table. The first floor is full of amazing things to see and touch."],
      ask: "What is this mostly about? Which sentence tells the main idea?",
      steps: [
        "Find the details: a dinosaur skeleton, a heart you can walk through and snakeskin to touch.",
        "Ask: What do all the details tell about? They are all things to see and touch on the first floor.",
        "Find the sentence that says that. Here it is the last sentence, not the first."
      ],
      answer: "It is mostly about the amazing things on the museum's first floor. The last sentence tells the main idea."
    },
    {
      show: ["Apples come in many colors. For example, some apples are red. Some are green, and some are yellow."],
      ask: "Is \"some apples are red\" the main idea or a detail?",
      steps: [
        "Find the clue words: For example. A detail comes right after them.",
        "Ask: What is this mostly about? Apples come in many colors.",
        "Red is just one color, so it is one fact."
      ],
      answer: "\"Some apples are red\" is a detail. The main idea is that apples come in many colors."
    },
    /* B2 (b2b): models a heading and an interesting detail that is not a key detail. */
    {
      show: ["Heading: Grandpa's Window Box", "Grandpa's window box is full of plants he cooks with. It has parsley, chives and thyme. It also has peppers, such as tiny red ones that taste hot. A blue jay sometimes lands on the edge to look around."],
      ask: "What is this section mostly about? Which detail does not tell more about it?",
      steps: [
        "Read the heading and the first sentence. They name the topic: the plants in Grandpa's window box that he cooks with.",
        "Find the details: parsley, chives, thyme and tiny red peppers. Each one tells more about those plants.",
        "Test the blue jay. It is fun to picture, but it is not a plant Grandpa cooks with, so it is not a key detail."
      ],
      answer: "The section is mostly about the cooking plants in Grandpa's window box. The blue jay is an interesting detail, but not a key detail."
    }
  ],
  parent: "Play \"Main Idea\" in the car or at dinner. One person describes something with three clues, and the other guesses what it is. Then ask, \"What did all three clues have in common?\"",
  passages: [
    { id: "p1", title: "Built for Fishing", genre: "Informational text",
      paragraphs: [
        ["The brown pelican is a large bird that lives along the ocean.", "You can see it on Georgia's coast, flying low over the waves.", "Its whole body is built for catching fish."],
        ["A pelican has a long bill.", "Under the bill hangs a stretchy pouch of skin.", "The pouch looks like a big bag."],
        ["The pelican also has sharp eyes.", "It flies high above the water and looks for fish below.", "When it spots one, it folds its wings and dives headfirst into the sea with a big splash!"],
        ["The pouch works like a fishing net.", "It scoops up water and fish at the same time.", "Then the pelican tips its bill down to drain out the water before it swallows the fish."],
        ["In addition, a pelican has webbed feet.", "Its feet work like paddles.", "For example, a pelican can paddle across the water just like a duck."]
      ] },
    { id: "p2", title: "Georgia's Live Oak", genre: "Informational text",
      paragraphs: [
        ["The live oak is the state tree of Georgia.", "It is one of the best-known trees in the South."],
        ["A live oak has a short, thick trunk.", "Its long branches can spread out wider than the tree is tall.", "Some branches even dip down and touch the ground.", "From far away, the tree looks like a giant green umbrella."],
        ["The live oak also keeps its leaves almost all year.", "Most oaks drop their leaves in the fall.", "A live oak drops its old leaves in the spring, just as new ones grow in.", "That is how it got the name live oak.", "It looks green and alive even in winter."],
        ["Live oaks are good for many living things.", "For example, squirrels, deer and birds eat its small acorns.", "In addition, a gray plant called Spanish moss often hangs from its branches like long beards."],
        ["Live oaks can live for hundreds of years.", "Some of the oldest ones grow near Savannah and on Georgia's islands."]
      ] },
    /* B2 (expansion 2026-10-22, author b2b): p3 and p4 are used only by core (p3 set 2, p4 set 3).
       Never used by test. NEEDS INDEPENDENT REVIEW. */
    /* B2 review fix (MUST-5): was "A Firehouse on Wheels"; fire stations stay in 3.T.T.2.a. */
    { id: "p3", title: "A Kitchen on Wheels", genre: "Informational text",
      paragraphs: [
        ["A food truck may look small from the outside.", "But inside, it holds a whole kitchen on wheels.", "Cooks can drive it to a park or a ball game and start cooking right away."],
        ["## Cooking Inside"],
        ["A food truck has tools for cooking many kinds of food.", "It has a flat, hot grill for burgers and pancakes.", "It also has a small oven and a deep fryer.", "A fan in the roof pulls smoke and heat out of the truck.", "Long ago, kitchens on wagons fed cowboys on long cattle drives."],
        ["## Keeping Food Cold and Clean"],
        ["A refrigerator under the counter keeps milk, meat and vegetables cold so they do not spoil.", "A tank holds clean water for cooking.", "In addition, every truck has a sink so workers can wash their hands and the pans."],
        ["## The Serving Window"],
        ["A big window opens on one side of the truck.", "Customers order and pay there.", "Then a worker hands out the food, such as tacos or hot dogs, wrapped and ready to eat.", "Many food trucks are painted with bright pictures and big letters."]
      ] },
    { id: "p4", title: "Inside a Baseball Glove", genre: "Informational text",
      paragraphs: [
        ["A baseball glove may look like a big leather hand.", "But every part of it is made to help a player catch and hold the ball."],
        ["The pocket is the deep, curved spot in the palm of the glove.", "It is where the ball lands.", "A good pocket is shaped like a shallow bowl, so the ball settles in and does not bounce out."],
        ["Between the thumb and the first finger is the web.", "The web is made of laced leather strips.", "It works like a small net that traps the ball."],
        ["Thick padding lines the inside of the glove.", "For example, extra padding sits under the palm, where the ball hits hardest.", "In addition, leather laces hold every part together."],
        ["Box: Did You Know? The first baseball players did not wear gloves at all.", "They caught the ball with their bare hands!"],
        ["Gloves come in many colors, such as brown, black and even bright blue.", "Some players write their number inside the thumb.", "But no matter how it looks, every part of a good glove works together to help a player make the catch."]
      ] }
  ],
  practice: [
    /* B2 (b2b): P1 was a DOK 1 lookup with a trivial key ("a big bag"); it now asks what a
       describing comparison helps the reader understand. It stays in Together. */
    { id: "SK-TSDESC-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "In paragraph 5, the author says a pelican's feet \"work like paddles.\" What does this describing detail help the reader understand?",
      choices: [
        { text: "how the pelican's feet push it through the water", correct: true },
        { text: "how the pelican uses its feet to grab fish" },
        { text: "what color the pelican's webbed feet are" },
        { text: "why the pelican dives headfirst into the sea" }
      ],
      clue: "Describing words like looks like and works like compare something new to something you already know.",
      why: "The answer is \"how the pelican's feet push it through the water.\" A paddle pushes a boat through water, and the next sentence says a pelican can paddle across the water like a duck. The passage never says the feet grab fish or tells their color, and the feet have nothing to do with diving." },
    { id: "SK-TSDESC-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence uses a clue word to give an EXAMPLE? Choose the sentence in the passage.",
      targets: ["p1:2:3", "p1:3:1", "p1:5:1", "p1:5:2", "p1:5:3"],
      answer: ["p1:5:3"], pick: 1,
      clue: "Describing clue words have different jobs. Some add a detail, and some show what something is like. Look for the clue word whose job is to give an example.",
      why: "The answer is \"For example, a pelican can paddle across the water just like a duck.\" The clue words For example show an example of how the pelican uses its feet. Also and In addition add details, and looks like tells what something is like." },
    /* B2 review fix (SHOULD-4): P3 asked for the main idea of the whole passage, which set 1 C04 needs,
       so Together pre-answered it. It now asks for the main idea of paragraph 3. It stays in Together. */
    { id: "SK-TSDESC-P3", type: "mc", points: 1, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.2.a"],
      prompt: "What is paragraph 3 mostly about?",
      choices: [
        { text: "the pelican's sharp eyes and how it finds fish", correct: true },
        { text: "how high a pelican can fly up over the water" },
        { text: "where brown pelicans like to live and rest" },
        { text: "how the pelican's webbed feet help it swim" }
      ],
      clue: "Ask: What do all the sentences in paragraph 3 tell about? A choice that fits only part of one sentence is a detail.",
      why: "The answer is \"the pelican's sharp eyes and how it finds fish.\" Paragraph 3 starts with the pelican's sharp eyes, and the rest tells how it uses them to look for fish. Flying high is only part of one sentence, and paragraph 3 does not tell where pelicans live or about their feet." },
    /* B2 (b2b): P4 was off-skill literal recall (why the bill tips down); it now asks for the main
       idea of one paragraph, against a literal misreading and details from other paragraphs. It stays
       in Together. */
    { id: "SK-TSDESC-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What is paragraph 2 mostly about?",
      choices: [
        { text: "the pelican's long bill and the pouch under it", correct: true },
        { text: "a big bag that the pelican carries with it" },
        { text: "how the pelican dives down to catch fish" },
        { text: "how the pelican drains water from its pouch" }
      ],
      clue: "Ask: What do all the sentences in paragraph 2 tell about? A choice that fits only part of one sentence is a detail.",
      why: "The answer is \"the pelican's long bill and the pouch under it.\" All three sentences tell about the bill and its pouch. The pouch only looks like a big bag; the pelican does not carry a bag. The other two choices tell about things the pelican does, not about what it has." },
    { id: "SK-TSDESC-P5", type: "dropdown", points: 1, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a"],
      prompt: "Choose the clue word that best completes the sentences.",
      text: "A pelican has sharp eyes. It {0} has webbed feet.",
      slots: [
        { options: ["also", "however", "finally"], answer: 0 }
      ],
      clue: "The second sentence adds one more detail about the pelican. Pick the clue word that adds a detail.",
      why: "The answer is also. A pelican has sharp eyes, and it also has webbed feet. Also adds a detail. However shows a difference, and finally tells order." },
    { id: "SK-TSDESC-P6", type: "ms", points: 2, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.2.a"],
      prompt: "Which TWO details tell how a pelican catches fish?",
      pick: 2,
      choices: [
        { text: "It folds its wings and dives headfirst into the sea.", correct: true },
        { text: "It scoops up water and fish at the same time.", correct: true },
        { text: "It flies low over the waves." },
        { text: "Its feet work like paddles." },
        { text: "The brown pelican is a large bird." }
      ],
      clue: "Each choice is a detail. Ask about each one: Does this tell how the bird gets its food, or something else about it?",
      why: "The answers are \"It folds its wings and dives headfirst into the sea.\" and \"It scoops up water and fish at the same time.\" Diving and scooping are how the pelican gets fish. The other details tell how it flies along the coast, how it swims and how big it is." }
  ],
  /* ---------- B2 core (expansion 2026-10-22, author b2b; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five. { ref } reuses Try items P6 and P5 by id (they stay in
     practice; the engine leaves them out of Together, so Together shows P1, P2, P3 and P4, with P1
     and P4 revised). New ids are numbered by their place in the fifteen. Hints and Show me how for
     refs and Together items are in addons. Author log:
     docs/expansion-2026-10-22/batches/B2-b2b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TSDESC-P6" },
      /* B2 review fix (MUST-5): the "add a heading above paragraph N" frame belongs to 3.T.T.2.a, so
         this item now asks for the job of a topic sentence. */
      { id: "SK-TSDESC-C02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p1"],
        prompt: "Paragraph 4 begins, \"The pouch works like a fishing net.\" What job does this sentence do in paragraph 4?",
        choices: [
          { text: "It names what the whole paragraph is about.", correct: true },
          { text: "It gives the last step in catching a fish." },
          { text: "It tells a fun fact that does not fit the paragraph." },
          { text: "It compares the pouch with a duck's bill." }
        ],
        clue: "Each sentence in a paragraph has a job. Ask how this sentence connects to the other sentences around it.",
        hints: [
          "Each sentence in a paragraph has a job. Ask how this sentence connects to the other sentences around it.",
          "Read all of paragraph 4. Then ask what the other sentences in it tell about.",
          "Paragraph 4 never mentions a duck's bill, so that choice does not fit. For each choice that is left, ask whether paragraph 4 really shows it."
        ],
        how: [
          "The first sentence of paragraph 4 names the pouch and says it works like a fishing net.",
          "The other sentences in paragraph 4 tell more about how the pouch is used.",
          "So the first sentence names what the whole paragraph is about. The answer is \"It names what the whole paragraph is about.\"",
          "It is not a step, it fits the paragraph, and no duck is named in paragraph 4."
        ],
        misconception: "A common mix-up is thinking a sentence with a comparison is just a fun fact. Here the comparison names the paragraph's topic.",
        why: "The answer is \"It names what the whole paragraph is about.\" The first sentence names the pouch, and the other sentences tell more about how it is used. It is not a step or an extra fact, and paragraph 4 never mentions a duck." },
      { ref: "SK-TSDESC-P5" },
      { id: "SK-TSDESC-C04", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p1"],
        prompt: "The author wants to add one more sentence to this passage. Which sentence would best support the passage's main idea?",
        choices: [
          { text: "A small hook at the tip of the bill helps a pelican hold slippery fish.", correct: true },
          { text: "Brown pelicans build nests of sticks on small islands near the coast." },
          { text: "Young brown pelicans have brown heads instead of white ones." },
          { text: "First, a young pelican hatches from its egg, and then it learns to fly." }
        ],
        clue: "A key detail tells more about the main idea. A detail can be true and interesting but still not tell more about the big point.",
        hints: [
          "A key detail tells more about the main idea. A detail can be true and interesting but still not tell more about the big point.",
          "First say the main idea of the whole passage in your own words.",
          "The sentence about a young pelican hatching uses time words to tell steps, so it does not fit this description. Test the other sentences against the main idea."
        ],
        how: [
          "The main idea is that the pelican's whole body is built for catching fish.",
          "A hook on the bill is a part of the body that helps the pelican hold on to fish, so it fits.",
          "The answer is \"A small hook at the tip of the bill helps a pelican hold slippery fish.\"",
          "Nests and the color of young pelicans' heads are about pelicans, but not about catching fish, and the hatching sentence tells steps."
        ],
        misconception: "A common mix-up is choosing any true fact about the topic. A key detail must tell more about the main idea, not just about the same animal.",
        why: "The answer is \"A small hook at the tip of the bill helps a pelican hold slippery fish.\" The main idea is that the pelican's body is built for catching fish, and the hook is one more body part that helps. Nests and head color are about pelicans but not about catching fish, and the hatching sentence tells steps in order." },
      { id: "SK-TSDESC-C05", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p1"], pick: 2,
        prompt: "Which TWO clues show that this passage is organized as a description?",
        choices: [
          { text: "Paragraph 1 names the topic and its big idea.", correct: true },
          { text: "Each paragraph after that tells about one part of the pelican's body.", correct: true },
          { text: "The paragraphs tell the steps of a job in the order they happen." },
          { text: "The author tells about a problem and the tries that fix it." },
          { text: "Every paragraph compares the pelican with a duck." }
        ],
        clue: "Text structures have patterns. Steps in order, a problem and its fix, a comparison, and one subject with details are some of them.",
        hints: [
          "Text structures have patterns. Steps in order, a problem and its fix, a comparison, and one subject with details are some of them.",
          "Think about how the passage is built: what kind of information does each paragraph give, and do the paragraphs follow an order? Choose two.",
          "Only paragraph 5 mentions a duck, so the choice about comparing the pelican with a duck in every paragraph does not fit. Check the other choices against the passage."
        ],
        how: [
          "Paragraph 1 names the topic, the brown pelican, and says its whole body is built for catching fish.",
          "Paragraphs 2 through 5 each tell about one part of its body: the bill and pouch, the eyes, the pouch again, and the feet.",
          "The answers are \"Paragraph 1 names the topic and its big idea.\" and \"Each paragraph after that tells about one part of the pelican's body.\"",
          "There are no steps in order, no problem and tries, and only one paragraph mentions a duck."
        ],
        misconception: "A common mix-up is calling a passage a comparison because one sentence says \"just like.\" Look at what the whole passage does.",
        why: "The answers are \"Paragraph 1 names the topic and its big idea.\" and \"Each paragraph after that tells about one part of the pelican's body.\" That is the pattern of a description. The passage has no steps, no problem and only one comparison with a duck." }
    ] },
    { title: "Set 2", items: [
      /* B2 review fix (MUST-5): set 2 now uses "A Kitchen on Wheels"; fire stations and engines stay in 3.T.T.2.a. */
      { id: "SK-TSDESC-C06", type: "ebsr", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p3"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "What is the main idea of \"A Kitchen on Wheels\"?",
          choices: [
            { text: "A food truck holds a whole kitchen that can cook, store and serve food.", correct: true },
            { text: "A food truck has a flat, hot grill for cooking burgers and pancakes." },
            { text: "Customers order and pay for their food at a big window on the side." },
            { text: "Cooks can drive a food truck to a park or a ball game and cook there." }
          ] },
        partB: { prompt: "Which sentence from the passage best supports the answer to Part A?",
          choices: [
            { text: "\"But inside, it holds a whole kitchen on wheels.\"", correct: true },
            { text: "\"A refrigerator under the counter keeps milk, meat and vegetables cold so they do not spoil.\"" },
            { text: "\"Customers order and pay there.\"" },
            { text: "\"A fan in the roof pulls smoke and heat out of the truck.\"" }
          ] },
        clue: "The main idea is the big point the text makes. Ask: What is this mostly about? Then check: does every section tell more about it?",
        hints: [
          "The main idea is the big point the text makes. Ask: What is this mostly about? Then check: does every section tell more about it?",
          "Say in a few words what each section under a heading is about.",
          "The grill is told about in only one section, so it is a detail, not the main idea. For Part B, choose the sentence that best matches your Part A answer."
        ],
        how: [
          "Ask what the cooking tools, the cold food and the serving window in the sections have in common.",
          "Together, the sections show everything a kitchen needs, all inside one truck.",
          "Part A: A food truck holds a whole kitchen that can cook, store and serve food. Part B: \"But inside, it holds a whole kitchen on wheels.\"",
          "The grill, the window and driving to a park are each one detail."
        ],
        misconception: "A common mix-up is choosing a detail from one section as the main idea. The main idea must fit every section.",
        why: "Part A: A food truck holds a whole kitchen that can cook, store and serve food. Part B: \"But inside, it holds a whole kitchen on wheels.\" Every section tells about one part of that kitchen. The grill, the window and driving to a park are single details." },
      { id: "SK-TSDESC-C07", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p3"],
        prompt: "Each job below happens on a food truck. Match each job to the heading of the section that tells about what the workers would use.",
        cols: ["Cooking Inside", "Keeping Food Cold and Clean", "The Serving Window"],
        rows: [
          { text: "A cook bakes a tray of cookies.", answer: 0 },
          { text: "A worker stores the chicken until it is time to cook it.", answer: 1 },
          { text: "A worker scrubs a greasy pan.", answer: 1 },
          { text: "A family picks up their tacos.", answer: 2 }
        ],
        clue: "A heading names what its section is mostly about. To place a detail, ask which section's topic it fits.",
        hints: [
          "A heading names what its section is mostly about. To place a detail, ask which section's topic it fits.",
          "Read the three headings. Then read what each section says the workers use.",
          "Baking cookies needs the small oven, so it goes under \"Cooking Inside.\" Sort the other rows the same way."
        ],
        how: [
          "Cooking Inside: the truck has a small oven, so baking cookies goes here.",
          "Keeping Food Cold and Clean: the refrigerator keeps meat cold until it is cooked, and the sink is for washing pans, so storing the chicken and scrubbing a pan both go here.",
          "The Serving Window: customers order there and a worker hands out the food, so picking up tacos goes here."
        ],
        misconception: "A common mix-up is matching by the kind of food instead of by what the section says. The chicken is food, but storing it belongs with keeping food cold.",
        why: "Baking cookies goes with Cooking Inside. Storing the chicken and scrubbing a pan go with Keeping Food Cold and Clean, because the refrigerator and the sink are in that section. Picking up tacos goes with The Serving Window." },
      { id: "SK-TSDESC-C08", type: "hottext", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p3"],
        prompt: "Two sentences in the passage tell fun facts that a reader could leave out without losing the main idea. Choose those TWO sentences in the passage.",
        targets: ["p3:3:4", "p3:3:5", "p3:5:1", "p3:5:3", "p3:7:1", "p3:7:4"],
        answer: ["p3:3:5", "p3:7:4"], pick: 2,
        clue: "A key detail tells more about the main idea. Some details are fun to know but do not tell more about the big point.",
        hints: [
          "A key detail tells more about the main idea. Some details are fun to know but do not tell more about the big point.",
          "Say the main idea of the whole passage in your own words. Then test each sentence in the sections: does it tell more about that idea? Choose two.",
          "The fan pulls smoke and heat out so the cooks can keep working, so it is a key detail. Test each other sentence the same way."
        ],
        how: [
          "Each heading names one section's topic. A key detail tells more about the topic of its section.",
          "The fan goes with cooking. The refrigerator and the sink go with keeping food cold and clean. The big window goes with serving.",
          "The wagon kitchens are a fun fact about long ago, and the bright paint does not help the truck cook, store or serve food.",
          "The answers are \"Long ago, kitchens on wagons fed cowboys on long cattle drives.\" and \"Many food trucks are painted with bright pictures and big letters.\""
        ],
        misconception: "A common mix-up is thinking every true sentence in a passage is a key detail. Some are there because they are fun to know.",
        why: "The answers are \"Long ago, kitchens on wagons fed cowboys on long cattle drives.\" and \"Many food trucks are painted with bright pictures and big letters.\" Both are interesting, but neither tells about cooking, storing or serving food. The fan, the refrigerator, the sink and the window are key details." },
      { id: "SK-TSDESC-C09", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p3"],
        stem: ["A food truck has tools for cooking many kinds of food.", "It has a flat, hot grill for burgers and pancakes."],
        prompt: "Read the two sentences from the section \"Cooking Inside\" in the box. The author wants to start the second sentence with a clue word. Which revision connects the two sentences best?",
        choices: [
          { text: "For example, it has a flat, hot grill for burgers and pancakes.", correct: true },
          { text: "However, it has a flat, hot grill for burgers and pancakes." },
          { text: "Finally, it has a flat, hot grill for burgers and pancakes." },
          { text: "Next, it has a flat, hot grill for burgers and pancakes." }
        ],
        clue: "Each clue word has a job. Ask what the second sentence does for the first one.",
        hints: [
          "Each clue word has a job. Ask what the second sentence does for the first one.",
          "Read the first sentence. Then ask whether the second sentence goes on in time, turns the idea around, or tells more about it.",
          "However shows a difference, but a grill is not the opposite of tools for cooking. Read the pair with each clue word that is left."
        ],
        how: [
          "The first sentence says a food truck has tools for cooking many kinds of food.",
          "The second sentence names one of those tools, the grill, and what it cooks.",
          "A clue word that brings in one case of a bigger idea fits here. The answer is \"For example, it has a flat, hot grill for burgers and pancakes.\"",
          "However shows a difference, and Next and Finally tell order."
        ],
        misconception: "A common mix-up is reaching for a time word like next or finally. In a description, clue words add details or give examples.",
        why: "The answer is \"For example, it has a flat, hot grill for burgers and pancakes.\" The grill is one case of the cooking tools the first sentence talks about. However would show a difference, and Next and Finally would tell order." },
      { id: "SK-TSDESC-C10", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: ["p3"],
        prompt: "Why did the author organize \"A Kitchen on Wheels\" as a description with headings, instead of using time words like first and next?",
        choices: [
          { text: "The author is telling about the parts of one thing, and the parts do not happen in an order.", correct: true },
          { text: "The author is telling the steps a cook follows, and each step needs its own heading." },
          { text: "The author is telling how cooks solved a problem with smoke inside the truck." },
          { text: "The author is comparing the wagon kitchens of long ago with the food trucks of today." }
        ],
        clue: "Authors pick a structure that fits what they want to tell. Ask what the reader learns from each section.",
        hints: [
          "Authors pick a structure that fits what they want to tell. Ask what the reader learns from each section.",
          "Read the three headings and the first paragraph of the passage again.",
          "The fan is one more detail about cooking, not a problem the cooks had to solve, so that choice does not fit. Check the other choices against the headings."
        ],
        how: [
          "Each heading names a different kind of thing, and the sections could be read in any order without changing what they mean.",
          "Nothing in one section has to happen before something in another section, so time words would not fit.",
          "The answer is \"The author is telling about the parts of one thing, and the parts do not happen in an order.\"",
          "There are no steps, no problem being solved, and the wagon kitchens are one fun fact, not a comparison."
        ],
        misconception: "A common mix-up is thinking headings always mean steps. Headings can also sort details about one topic.",
        why: "The answer is \"The author is telling about the parts of one thing, and the parts do not happen in an order.\" The sections tell about cooking, keeping food cold and clean, and serving, and none has to come before another. The passage has no steps, no problem and no comparison of old and new." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TSDESC-C11", type: "hottext", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p4"],
        prompt: "Which TWO sentences tell the main idea of the whole passage? Choose two sentences in the passage.",
        targets: ["p4:1:1", "p4:1:2", "p4:2:2", "p4:3:3", "p4:6:1", "p4:6:3"],
        answer: ["p4:1:2", "p4:6:3"], pick: 2,
        clue: "The main idea is the big point the whole passage makes. A detail tells about only one part.",
        hints: [
          "The main idea is the big point the whole passage makes. A detail tells about only one part.",
          "Read each sentence you can choose and ask: does it tell about the whole glove, or only one part of it? Choose two.",
          "\"It is where the ball lands\" tells about only the pocket, so it is a detail. Test each other sentence the same way."
        ],
        how: [
          "A main idea sentence must fit the whole passage, not one part.",
          "Paragraph 1 says every part of the glove is made to help a player catch and hold the ball. The last paragraph says it again in other words.",
          "The answers are \"But every part of it is made to help a player catch and hold the ball.\" and \"But no matter how it looks, every part of a good glove works together to help a player make the catch.\"",
          "The other sentences each tell about only one part of a glove or one thing about it."
        ],
        misconception: "A common mix-up is picking the very first sentence. The first sentence can hook the reader without telling the big point.",
        why: "The answers are \"But every part of it is made to help a player catch and hold the ball.\" and \"But no matter how it looks, every part of a good glove works together to help a player make the catch.\" Both fit the whole passage. The other sentences tell how a glove looks or about one part." },
      { id: "SK-TSDESC-C12", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p4"], pick: 2,
        prompt: "Which TWO details best support the main idea of the passage?",
        choices: [
          { text: "A good pocket is shaped like a shallow bowl, so the ball settles in.", correct: true },
          { text: "The web works like a small net that traps the ball.", correct: true },
          { text: "Gloves come in many colors, such as brown, black and bright blue." },
          { text: "Some players write their number inside the thumb of the glove." },
          { text: "A baseball glove may look like a big leather hand." }
        ],
        clue: "Key details tell more about the main idea. A detail can be true and still not support the big point.",
        hints: [
          "Key details tell more about the main idea. A detail can be true and still not support the big point.",
          "First say the main idea in your own words. Then test each choice against it. Choose two.",
          "Writing a number inside the thumb tells how a player marks a glove, not anything the main idea is about. Check the other choices against the main idea."
        ],
        how: [
          "The main idea is that every part of a glove helps a player catch and hold the ball.",
          "The pocket's bowl shape keeps the ball from bouncing out, and the web traps the ball. Both show a part helping with the catch.",
          "The answers are \"A good pocket is shaped like a shallow bowl, so the ball settles in.\" and \"The web works like a small net that traps the ball.\"",
          "Colors, a number in the thumb and looking like a hand tell how a glove looks, not how it helps."
        ],
        misconception: "A common mix-up is choosing a describing detail that is true but only tells how something looks. A key detail must support the main idea.",
        why: "The answers are \"A good pocket is shaped like a shallow bowl, so the ball settles in.\" and \"The web works like a small net that traps the ball.\" Both show a part of the glove helping a player catch. Colors, a number and looking like a hand do not." },
      /* B2 review fix (MUST-5, SHOULD-9): the "why is this in a text box" frame belongs to 3.T.T.2.a, so
         this item now asks the child to judge an edit, with plausible wrong reasons. */
      { id: "SK-TSDESC-C13", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: ["p4"],
        prompt: "A student wants to move the fact in the text box into paragraph 4, the paragraph about padding. Would that be a good change?",
        choices: [
          { text: "No. The fact is about baseball long ago, and it does not tell how padding helps a player.", correct: true },
          { text: "Yes. The fact shows how padding protects a player's hand when the ball hits it hard." },
          { text: "Yes. Every fact in a passage belongs inside one of its paragraphs, not in a box." },
          { text: "No. A text box must always hold the main idea of the whole passage in one place." }
        ],
        clue: "A text box sets some facts apart. Ask whether the fact in the box tells more about the main idea, or is just interesting.",
        hints: [
          "A text box sets some facts apart. Ask whether the fact in the box tells more about the main idea, or is just interesting.",
          "Read the box. Then read paragraph 4 and say what it is about.",
          "The box never mentions padding, so it does not show how padding protects a hand. For each choice that is left, ask whether the reason it gives is true for this passage."
        ],
        how: [
          "The box says the first players did not wear gloves and caught the ball with bare hands.",
          "Paragraph 4 tells how padding inside the glove helps a player. The box fact does not tell about padding or any part of a glove.",
          "So moving it into paragraph 4 would not fit. The answer is \"No. The fact is about baseball long ago, and it does not tell how padding helps a player.\"",
          "The box never mentions padding, not every fact has to be in a paragraph, and a text box does not have to hold the main idea."
        ],
        misconception: "A common mix-up is deciding by the box alone. A box can hold a key detail or just an interesting fact, so check the fact against the main idea.",
        why: "The answer is \"No. The fact is about baseball long ago, and it does not tell how padding helps a player.\" Paragraph 4 is about padding, and the box fact is not. The box never mentions padding, facts can sit in a box, and a box does not have to hold the main idea." },
      /* B2 re-review fix (MUST-1): the cactus shared its key fact with the 3.T.C.1.b Watch Me. */
      { id: "SK-TSDESC-C14", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
        /* B2 final-check fix (SHOULD-2): new big idea (life among sea plants) and no bony plates, so the key
           no longer mirrors 3.T.T.2.a form A T1. */
        stem: ["(1) ______", "(2) Its curly tail wraps around a blade of sea grass, so the waves cannot carry it away.", "(3) Its skin can change color to match the plants around it.", "(4) Its tall, thin shape looks like a plant stem, so it is hard to spot in a sea grass bed.", "(5) In addition, its long snout reaches between the leaves to suck up tiny shrimp."],
        prompt: "A student wrote this description of a seahorse. Which sentence would best fill the blank as the main idea sentence?",
        choices: [
          { text: "A seahorse's body is made for life among the plants of the sea.", correct: true },
          { text: "A seahorse has to hide from crabs and other hungry sea animals." },
          { text: "A seahorse's curly tail is the most useful part of its whole body." },
          { text: "First, a baby seahorse hatches and floats away on the waves." }
        ],
        clue: "A main idea sentence names the topic and the big point. Every detail sentence after it should tell more about that point.",
        hints: [
          "A main idea sentence names the topic and the big point. Every detail sentence after it should tell more about that point.",
          "Read sentences 2 through 5, and ask what each one tells about.",
          "The sentence about a baby seahorse hatching starts a sequence, so it does not fit a description. Test each choice that is left against all four sentences."
        ],
        how: [
          "Sentence 2: the tail holds on to sea grass. Sentence 3: the skin matches the plants. Sentence 4: the shape looks like a plant stem. Sentence 5: the snout reaches between the leaves for food.",
          "Every sentence tells how a part of the seahorse's body fits life among sea plants.",
          "The answer is \"A seahorse's body is made for life among the plants of the sea.\" It is the only choice that fits all four sentences.",
          "Hiding fits the color and the shape but not the tail or the snout, the tail is only one detail, and the hatching sentence starts a sequence."
        ],
        misconception: "A common mix-up is choosing a sentence that fits some of the details. A main idea sentence must fit every detail that follows it.",
        why: "The answer is \"A seahorse's body is made for life among the plants of the sea.\" The tail holds the sea grass, the skin and shape blend with the plants, and the snout reaches between the leaves. Hiding leaves out the tail and the snout, the tail is one detail, and the hatching sentence starts a sequence." },
      { id: "SK-TSDESC-C15", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a"], passages: [],
        prompt: "A student is writing a description of the school playground. Choose the clue words that best complete the paragraph.",
        text: "Our playground has something for everyone. It has a tall slide and two swing sets for kids who like to move. {0}, there is a quiet bench under an oak tree for kids who want to read. Games are painted on the blacktop, {1} hopscotch and four square.",
        slots: [
          { options: ["In addition", "Instead", "First"], answer: 0 },
          { options: ["such as", "so", "after"], answer: 0 }
        ],
        clue: "Describing clue words have jobs. Before each blank, ask what that sentence does for the one before it.",
        hints: [
          "Describing clue words have jobs. Before each blank, ask what that sentence does for the one before it.",
          "Read the whole paragraph once. Then read each sentence that has a blank together with the sentence just before it.",
          "First would start a set of steps, but this paragraph describes a place and gives no steps. Read each sentence with the words that are left."
        ],
        how: [
          "The first sentence names the topic: the playground has something for everyone.",
          "The bench is one more thing the playground has, so the first blank needs a clue word that adds a detail: In addition.",
          "Hopscotch and four square are examples of the painted games, so the second blank needs such as.",
          "The answers are In addition and such as. Instead would mean the bench takes the place of the slide, and so and after do not bring in examples."
        ],
        misconception: "A common mix-up is using a time word like first in a description. A description adds details; it does not give steps.",
        why: "The answers are In addition and such as. In addition adds the bench as one more detail, and such as brings in examples of the painted games. Instead, First, so and after do not do those jobs." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. `like` lists only the
     core items each one really practises (same component and task). */
  similar: [
    /* B2 review fix (SHOULD-13): was a heron, which shares facts with 3.L.V.1.a "Life in the Salt Marsh". */
    { id: "SK-TSDESC-S01", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [], pick: 2,
      like: ["SK-TSDESC-P6", "SK-TSDESC-C12"],
      stem: ["(1) The Venus flytrap is a plant that catches insects.", "(2) Each of its leaves can snap shut like a trap.", "(3) Tiny hairs on the inside of each leaf can feel a bug walking across.", "(4) Flytraps grow in wet, sandy places in North and South Carolina.", "(5) The plant is named after a goddess from old stories.", "(6) Its roots hold it in the sandy soil."],
      prompt: "Read the paragraph in the box. Which TWO details tell about a part of the flytrap that helps it catch insects?",
      choices: [
        { text: "Each of its leaves can snap shut like a trap.", correct: true },
        { text: "Tiny hairs on the inside of each leaf can feel a bug walking across.", correct: true },
        { text: "Flytraps grow in wet, sandy places in North and South Carolina." },
        { text: "The plant is named after a goddess from old stories." },
        { text: "Its roots hold it in the sandy soil." }
      ],
      clue: "Key details tell more about the idea in the question. Ask about each one: does it tell about a part of the plant that does the catching?",
      hints: [
        "Key details tell more about the idea in the question. Ask about each one: does it tell about a part of the plant that does the catching?",
        "Check each choice against the paragraph. Choose two.",
        "Where flytraps grow tells about the plant's home, not about catching insects, so that choice does not fit. Check the others the same way."
      ],
      how: [
        "The leaves are a part of the plant, and they snap shut like a trap.",
        "The tiny hairs are a part of the leaf, and they feel when a bug walks across.",
        "The answers are \"Each of its leaves can snap shut like a trap.\" and \"Tiny hairs on the inside of each leaf can feel a bug walking across.\"",
        "Where it grows and how it got its name do not tell about catching insects. The roots are a part of the plant, but they hold it in the soil; they do not catch anything."
      ],
      misconception: "A common mix-up is choosing a true detail that fits the topic but not the question. Read the question's key words: a part that helps it catch insects.",
      why: "The answers are \"Each of its leaves can snap shut like a trap.\" and \"Tiny hairs on the inside of each leaf can feel a bug walking across.\" The hairs feel the bug and the leaves close on it. Where it grows and its name are not about catching insects, and the roots hold the plant in the soil." },
    /* B2 re-review fix (SHOULD-10): recycling bins belong to 3.T.T.2.c. */
    { id: "SK-TSDESC-S02", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
      like: ["SK-TSDESC-C07"],
      stem: ["The gym closet has a place for each kind of ball.", "A tall rack holds the basketballs.", "A mesh bag holds the soccer balls.", "In addition, a wide basket on the floor holds soft foam balls for dodgeball."],
      prompt: "Read the section in the box. Which heading fits this section best?",
      choices: [
        { text: "A Home for Every Ball", correct: true },
        { text: "A Rack for Basketballs" },
        { text: "How to Play Dodgeball" },
        { text: "Why Exercise Is Good for You" }
      ],
      clue: "A heading names what a section is mostly about. Ask what all the sentences in the section tell about.",
      hints: [
        "A heading names what a section is mostly about. Ask what all the sentences in the section tell about.",
        "Say in a few words what each of the four sentences is about.",
        "The section never tells why exercise is good for you, so that heading does not fit. Check the other headings against all four sentences."
      ],
      how: [
        "The first sentence says the gym closet has a place for each kind of ball.",
        "The other sentences name where the basketballs, soccer balls and foam balls go.",
        "The answer is \"A Home for Every Ball.\" The basketball rack is one detail, and the section never tells how to play dodgeball or why exercise is good for you."
      ],
      misconception: "A common mix-up is choosing a heading that fits only one sentence. A heading must fit the whole section.",
      why: "The answer is \"A Home for Every Ball.\" Every sentence tells where one kind of ball is kept. The basketball rack is one detail, and the section does not tell how to play a game or why exercise helps." },
    { id: "SK-TSDESC-S03", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
      like: ["SK-TSDESC-C04", "SK-TSDESC-C08"],
      stem: ["(1) Pine trees are built to handle cold, snowy winters.", "(2) Their needles are thin and waxy, so snow slides off.", "(3) Their branches bend under heavy snow instead of snapping.", "(4) Pine cones come in many shapes and sizes.", "(5) Thick bark also helps keep the trunk from freezing."],
      prompt: "Read the paragraph in the box. Which sentence does NOT support the main idea?",
      choices: [
        { text: "Pine cones come in many shapes and sizes.", correct: true },
        { text: "Their needles are thin and waxy, so snow slides off." },
        { text: "Their branches bend under heavy snow instead of snapping." },
        { text: "Thick bark also helps keep the trunk from freezing." }
      ],
      clue: "A key detail tells more about the main idea. A detail can be about the same topic and still not tell more about the big point.",
      hints: [
        "A key detail tells more about the main idea. A detail can be about the same topic and still not tell more about the big point.",
        "Find the main idea sentence. Then test each detail against it.",
        "The needles let snow slide off, so that sentence tells how pines handle winter. Test the others the same way."
      ],
      how: [
        "Sentence 1 gives the main idea: pine trees are built to handle cold, snowy winters.",
        "Needles, branches and bark each help the tree in snow or cold.",
        "The answer is \"Pine cones come in many shapes and sizes.\" It is about pine trees, but not about winter."
      ],
      misconception: "A common mix-up is keeping any sentence about the same topic. A key detail must tell more about the main idea.",
      why: "The answer is \"Pine cones come in many shapes and sizes.\" It is about pines, but it does not tell how they handle winter. The needles, branches and bark all do." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting.
       Each like names one core item only, because the engine uses an extra question once.
       Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TSDESC-S04", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
      like: ["SK-TSDESC-C02"],
      stem: ["The first sentence of this paragraph about a flying squirrel is missing.", "(1) ________", "(2) Loose skin stretches between its front legs and its back legs, like a thin sail.", "(3) When it jumps from a high branch, it spreads its legs wide and glides through the air.", "(4) Its flat tail works like a rudder to help it turn.", "(5) A flying squirrel does not really fly, but it can glide from one tree to the next."],
      prompt: "Which sentence would be the best first sentence for the paragraph?",
      choices: [
        { text: "A flying squirrel has a body that is made for gliding.", correct: true },
        { text: "A flying squirrel has a flat tail." },
        { text: "Flying squirrels live in many places." },
        { text: "Some people see a flying squirrel at night." }
      ],
      clue: "A first sentence that names the topic should fit every sentence that follows, not just one.",
      hints: [
        "A first sentence that names the topic should fit every sentence that follows, not just one.",
        "List what each of the other sentences tells about. Then see which choice covers all of them.",
        "Nothing in the paragraph tells where flying squirrels live, so that choice does not fit. Test the others against every sentence."
      ],
      how: [
        "Sentence 2 tells about the loose skin, Sentence 3 tells about the jump, Sentence 4 tells about the tail, and Sentence 5 tells how far it can go.",
        "All of them tell how the squirrel's body helps it glide.",
        "The answer is \"A flying squirrel has a body that is made for gliding.\"",
        "The flat tail is only one detail, and the paragraph says nothing about where flying squirrels live or when people see them."
      ],
      misconception: "A common mix-up is choosing a sentence about one detail. A first sentence that names the topic must cover all the others.",
      why: "The answer is \"A flying squirrel has a body that is made for gliding.\" The skin, the jump, the tail and the glide all show how its body helps it glide. The flat tail is only one detail, and the paragraph says nothing about where squirrels live or when people see them." },
    { id: "SK-TSDESC-S05", type: "dropdown", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSDESC-P5"],
      stem: ["Here is a paragraph about wombats. One sentence is shown below the paragraph. Wombats live in Australia. A wombat is about as big as a large dog. It has strong claws for digging a long burrow. By day, a wombat rests in its burrow. At night, it comes out to eat grass. It has a round body and short legs."],
      prompt: "Choose the clue word that best completes the sentences.",
      text: "A wombat looks slow and clumsy. {0}, it can run as fast as a person for a short trip.",
      slots: [
        { options: ["However", "Next", "Because"], answer: 0 }
      ],
      clue: "Clue words show how sentences connect. Ask what the second sentence does with the first.",
      hints: [
        "Clue words show how sentences connect. Ask what the second sentence does with the first.",
        "Read both sentences. Does the second one add to the first, or does it turn to something that seems different?",
        "The sentences are not steps in a set, so one of the words does not fit. Try each word that is left in the sentence."
      ],
      how: [
        "The first sentence says a wombat looks slow and clumsy. The second says it can run as fast as a person.",
        "Those ideas seem opposite, so the clue word must show a switch. The answer is However.",
        "Next tells what comes later, and Because would say that looking slow is the reason it can run fast."
      ],
      misconception: "A common mix-up is choosing a word that sounds fine but changes the meaning. Read the whole sentence with each word.",
      why: "The answer is However. The second sentence turns to something that seems different from the first: a wombat looks slow but can run fast. Next would tell about order, and Because would make looking slow the reason it can run." },
    { id: "SK-TSDESC-S06", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [], pick: 2,
      like: ["SK-TSDESC-C05"],
      stem: ["A covered bridge is a bridge with a roof and walls. The floor is made of thick wooden boards. Long beams under the floor hold it up. The roof keeps rain and snow off the boards, so the wood lasts longer. Some covered bridges have a window in the side, so travelers can look at the creek below. Many of these old bridges are still standing today."],
      prompt: "Which TWO clues show that this paragraph is organized as a description?",
      choices: [
        { text: "The first sentence names the topic.", correct: true },
        { text: "Each later sentence tells about one part of the bridge.", correct: true },
        { text: "The sentences tell the steps of building a bridge in order." },
        { text: "The paragraph tells a trouble and the tries that fix it." },
        { text: "Every sentence compares the bridge with a metal bridge." }
      ],
      clue: "Text structures have patterns. Steps in order, a trouble and its fix, a comparison, and one subject with details are some of them.",
      hints: [
        "Text structures have patterns. Steps in order, a trouble and its fix, a comparison, and one subject with details are some of them.",
        "Read the paragraph and ask what it keeps telling about, from beginning to end. Choose two.",
        "There are no time words like first or next, so the paragraph does not tell steps. Test the other clues against the whole paragraph."
      ],
      how: [
        "The first sentence names the topic, a covered bridge.",
        "Each sentence after it tells about one part: the floor, the beams, the roof and the window.",
        "The answers are \"The first sentence names the topic.\" and \"Each later sentence tells about one part of the bridge.\"",
        "There are no steps, no trouble and no metal bridge in the paragraph."
      ],
      misconception: "A common mix-up is calling a paragraph a comparison or a trouble and fix without finding those in the text. Look at what the whole paragraph does.",
      why: "The answers are \"The first sentence names the topic.\" and \"Each later sentence tells about one part of the bridge.\" That is the pattern of a description. The paragraph has no steps, no trouble to fix and no metal bridge." },
    { id: "SK-TSDESC-S07", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
      like: ["SK-TSDESC-C06"],
      stem: ["An okapi is a shy animal that lives in the forests of Africa. Its body is made to hide in the shadows. Its coat is dark brown and soft like velvet, so it blends in with the tree trunks. The stripes on its legs look like patches of light between the leaves. A baby okapi can stand up an hour after it is born."],
      prompt: "Choose the words that best complete the sentences about the paragraph.",
      text: "The paragraph is mostly about how an okapi's body {0}. A detail that supports this is its {1}.",
      slots: [
        { options: ["helps it hide in the shadows", "feels like soft velvet", "helps a baby stand up quickly"], answer: 0 },
        { options: ["striped legs that look like patches of light", "baby that can stand up an hour after birth", "home in the forests of Africa"], answer: 0 }
      ],
      clue: "The main idea is the big point of a paragraph. A supporting detail helps prove it.",
      hints: [
        "The main idea is the big point of a paragraph. A supporting detail helps prove it.",
        "Find the sentence that tells what the okapi's body is made to do. Then ask which details show that.",
        "A baby standing up quickly is a fun fact about only one part of the paragraph, so it is not what the paragraph is mostly about. Test the other choices for each blank."
      ],
      how: [
        "The second sentence says the okapi's body is made to hide in the shadows. The rest of the paragraph shows how.",
        "The coat blends in with trunks, and the striped legs look like patches of light. So the first answer is \"helps it hide in the shadows.\"",
        "The second answer is \"striped legs that look like patches of light,\" because the stripes help the okapi hide.",
        "The velvet feel is one detail, and the baby and the forest home do not help it hide."
      ],
      misconception: "A common mix-up is choosing a true detail that does not prove the main idea.",
      why: "The answers are \"helps it hide in the shadows\" and \"striped legs that look like patches of light.\" The coat and the striped legs help the okapi blend in. The soft feel, the baby standing up and the forest home do not show how it hides." },
    { id: "SK-TSDESC-S08", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [], pick: 2,
      like: ["SK-TSDESC-C08"],
      stem: ["(1) A rhino has thick, gray skin that keeps it safe.", "(2) The skin is so tough that thorns cannot cut it.", "(3) A rhino's horn is made of the same stuff as your fingernails.", "(4) Mud baths keep the sun and biting flies away from a rhino's skin.", "(5) A rhino can run as fast as a person on a racing bike."],
      prompt: "The main idea is that a rhino's skin keeps it safe. Which TWO sentences are fun facts that a reader could leave out without losing the main idea?",
      choices: [
        { text: "Sentence 3", correct: true },
        { text: "Sentence 5", correct: true },
        { text: "Sentence 1" },
        { text: "Sentence 2" },
        { text: "Sentence 4" }
      ],
      clue: "A fun fact is true and interesting, but the main idea does not need it. Test each sentence against the main idea.",
      hints: [
        "A fun fact is true and interesting, but the main idea does not need it. Test each sentence against the main idea.",
        "For each sentence, ask: does it tell how the skin keeps the rhino safe? Choose two.",
        "Sentence 2 shows how the skin keeps the rhino safe from thorns, so it is a key detail, not a fun fact. Test the other sentences the same way."
      ],
      how: [
        "The main idea is that a rhino's skin keeps it safe.",
        "Sentence 2 shows tough skin that thorns cannot cut. Sentence 4 shows mud baths that protect the skin. Sentence 1 states the main idea.",
        "The horn and the running speed are interesting, but they do not tell how the skin keeps the rhino safe.",
        "The answers are Sentence 3 and Sentence 5."
      ],
      misconception: "A common mix-up is leaving out the main idea sentence or a key detail because it seems less exciting than a fun fact.",
      why: "The answers are Sentence 3 and Sentence 5. The horn and the running speed are true and interesting, but they are not about the skin. Sentences 1, 2 and 4 state or prove the main idea about the skin." },
    { id: "SK-TSDESC-S09", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
      like: ["SK-TSDESC-C09"],
      stem: ["A tapir is a shy animal that lives in the forests of South America. It looks a bit like a pig with a short trunk. A tapir has strong legs for walking through thick forest. It has tough, thick skin that keeps off thorns. At night, it eats leaves and fruit, and it sleeps in the shade by day. Its babies have white spots and stripes."],
      prompt: "The author wants to start the fourth sentence, \"It has tough, thick skin that keeps off thorns,\" with a clue word. Which revision connects it to the sentence before it best?",
      choices: [
        { text: "Also, it has tough, thick skin that keeps off thorns.", correct: true },
        { text: "However, it has tough, thick skin that keeps off thorns." },
        { text: "As a result, it has tough, thick skin that keeps off thorns." },
        { text: "Next, it has tough, thick skin that keeps off thorns." }
      ],
      clue: "A clue word shows how two sentences connect. Ask what the second sentence does: add, show a difference, show a result or show the next step.",
      hints: [
        "A clue word shows how two sentences connect. Ask what the second sentence does: add, show a difference, show a result or show the next step.",
        "Both sentences tell about the tapir's body. Does the second sentence go against the first, or add one more thing?",
        "The skin is not a result of having strong legs, so a result word does not fit. Test the other words."
      ],
      how: [
        "The first sentence tells about the tapir's legs. The second tells about its skin.",
        "Both are parts of the tapir's body, and the second adds one more part.",
        "The answer is \"Also, it has tough, thick skin that keeps off thorns.\"",
        "However shows a difference, As a result shows a result, and Next shows a step."
      ],
      misconception: "A common mix-up is picking a clue word that sounds strong, like however, without checking what the sentences do.",
      why: "The answer is \"Also, it has tough, thick skin that keeps off thorns.\" The second sentence adds one more part of the tapir's body. However shows a difference, As a result shows a result of strong legs, and Next shows a step." },
    { id: "SK-TSDESC-S10", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a"], passages: [],
      like: ["SK-TSDESC-C10"],
      stem: ["A Tour of Pages & Co.", "Picture Books: The low shelves by the window hold picture books. A soft rug is on the floor for little readers.", "Chapter Books: The tall shelves in the middle hold chapter books for older readers.", "The Back Room: A cozy room in the back has cookbooks and craft books. A big table is there for reading."],
      prompt: "Why did the author organize \"A Tour of Pages & Co.\" as a description with headings, instead of using time words like first and next?",
      choices: [
        { text: "The author is telling about the different parts of one shop, and no part has to come before another.", correct: true },
        { text: "The author is telling the steps a worker follows, and each step needs its own heading." },
        { text: "The author is telling how the shop fixed a problem with its books." },
        { text: "The author is comparing the shop of long ago with a shop of today." }
      ],
      clue: "Authors pick a structure that fits what they want to tell. Ask what the reader learns from each section.",
      hints: [
        "Authors pick a structure that fits what they want to tell. Ask what the reader learns from each section.",
        "Read the headings one at a time, and say what each section tells about.",
        "The sections do not tell about a trouble, so the choice about a problem does not fit. Test the other choices against the headings."
      ],
      how: [
        "The headings name three parts of one shop: the picture books, the chapter books and the back room.",
        "Each section describes what is in that part. One part does not have to come before another.",
        "The answer is \"The author is telling about the different parts of one shop, and no part has to come before another.\"",
        "There are no worker steps, no problem and no comparison of long ago and today."
      ],
      misconception: "A common mix-up is thinking headings always mean steps. Headings can also sort details about one topic.",
      why: "The answer is \"The author is telling about the different parts of one shop, and no part has to come before another.\" Each section describes one part of the shop. The text has no worker steps, no problem and no comparison of long ago and today." },
    { id: "SK-TSDESC-S11", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [], pick: 2,
      like: ["SK-TSDESC-C11"],
      stem: ["(1) A tarantula is a big, hairy spider. It lives in warm places.", "(2) Its body is built for hunting at night.", "(3) Tiny hairs on its legs feel the shakes that a bug makes.", "(4) Strong fangs hold the bug while the tarantula eats.", "(5) From its hairy legs to its fangs, a tarantula is made to catch food in the dark.", "(6) Some tarantulas live for twenty years, which is longer than a pet hamster lives."],
      prompt: "Which TWO sentences tell the main idea of the whole passage?",
      choices: [
        { text: "Sentence 2", correct: true },
        { text: "Sentence 5", correct: true },
        { text: "Sentence 1" },
        { text: "Sentence 3" },
        { text: "Sentence 4" },
        { text: "Sentence 6" }
      ],
      clue: "The main idea is what the whole passage is about. A sentence that states it covers all of the details.",
      hints: [
        "The main idea is what the whole passage is about. A sentence that states it covers all of the details.",
        "Read the details about the legs and the fangs. Which sentences are big enough to cover all of them? Choose two.",
        "Sentence 6 does not tell about hunting, so it is a fun fact. Test the other sentences: does each one cover both the legs and the fangs?"
      ],
      how: [
        "The details tell how the legs feel shakes and how the fangs hold food. Both help the tarantula hunt.",
        "Sentence 2 says the body is built for hunting at night. Sentence 5 says from the legs to the fangs, it is made to catch food in the dark.",
        "The answers are Sentence 2 and Sentence 5.",
        "Sentence 1 names the topic. Sentences 3 and 4 each tell one detail, and Sentence 6 is a fun fact."
      ],
      misconception: "A common mix-up is choosing the first sentence because it comes first. A sentence that only names the topic is not the main idea.",
      why: "The answers are Sentence 2 and Sentence 5. Both cover the legs and the fangs. Sentence 1 only names the topic, Sentences 3 and 4 each tell one detail, and Sentence 6 is a fun fact." },
    { id: "SK-TSDESC-S12", type: "ms", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [], pick: 2,
      like: ["SK-TSDESC-C12"],
      stem: ["A capybara is a big animal that lives near rivers and lakes in South America. Its body is built for life near water. It has webbed toes that help it paddle. Its eyes, ears and nose sit high on its head, so it can swim with them above the water. Capybaras live in big family groups. A capybara can weigh as much as a grown woman. It eats grass and bark."],
      prompt: "Which TWO details best support the main idea that a capybara's body is built for life near water?",
      choices: [
        { text: "It has webbed toes that help it paddle.", correct: true },
        { text: "Its eyes, ears and nose sit high on its head, so it can swim with them above the water.", correct: true },
        { text: "Capybaras live in big family groups." },
        { text: "A capybara can weigh as much as a grown woman." },
        { text: "It eats grass and bark." }
      ],
      clue: "Key details prove the main idea. Test each detail: does it show how the body fits life near water?",
      hints: [
        "Key details prove the main idea. Test each detail: does it show how the body fits life near water?",
        "Read the sentences after the first two. Which ones tell about parts of the capybara's body and what they do for it? Choose two.",
        "Living in family groups tells how capybaras live together, not about their bodies. Test the other details the same way."
      ],
      how: [
        "The main idea is that a capybara's body is built for life near water.",
        "Two details show body parts that help in water: webbed toes for paddling, and eyes, ears and nose high on the head for swimming.",
        "The answers are \"It has webbed toes that help it paddle.\" and \"Its eyes, ears and nose sit high on its head, so it can swim with them above the water.\"",
        "Family groups and food are not body parts, and its weight does not help it in the water."
      ],
      misconception: "A common mix-up is choosing any true fact from the passage. A key detail must help prove the main idea.",
      why: "The answers are \"It has webbed toes that help it paddle.\" and \"Its eyes, ears and nose sit high on its head, so it can swim with them above the water.\" Both show how its body fits life near water. Family groups, weight and food do not." },
    { id: "SK-TSDESC-S13", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
      like: ["SK-TSDESC-C13"],
      stem: ["Paragraph 3: A pangolin's body is covered with hard scales. If a lion comes close, the pangolin rolls into a tight ball. Then the scales on the outside protect its soft belly. A lion may sniff and paw at the ball, but it may not be able to bite through the scales.", "Text box: Did You Know? A baby pangolin rides on its mother's tail."],
      prompt: "A student wants to move the fact in the text box into Paragraph 3. Would that be a good change?",
      choices: [
        { text: "No. It is about how a baby travels, not about the scales.", correct: true },
        { text: "Yes. The fact shows how the scales keep a lion away from the baby." },
        { text: "Yes. A baby that rides on its mother needs scales to stay on." },
        { text: "No. A text box can only hold a fact that the passage tells twice." }
      ],
      clue: "A text box sets an extra fact apart. Ask whether the fact tells more about the paragraph's idea, or is just interesting.",
      hints: [
        "A text box sets an extra fact apart. Ask whether the fact tells more about the paragraph's idea, or is just interesting.",
        "Say in a few words what Paragraph 3 is about. Then read the fact in the box again.",
        "The box never mentions a lion, so it does not show how the scales keep one away. For each choice that is left, ask whether its reason is true for this passage."
      ],
      how: [
        "Paragraph 3 is about how the scales protect the pangolin.",
        "The box fact tells how a baby pangolin travels. It does not tell how the scales protect it.",
        "The answer is \"No. It is about how a baby travels, not about the scales.\"",
        "The box never mentions a lion or the scales helping a baby ride, and a box does not have to hold a fact told twice."
      ],
      misconception: "A common mix-up is deciding by the box alone. A box can hold an extra fact, so check the fact against the paragraph.",
      why: "The answer is \"No. It is about how a baby travels, not about the scales.\" Paragraph 3 is about the scales. The box says nothing about a lion, and a box can hold an extra fact." },
    { id: "SK-TSDESC-S14", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
      like: ["SK-TSDESC-C14"],
      stem: ["(1) ______", "(2) When a hungry fish bites it, it squirts out sticky threads. The threads tangle the fish.", "(3) It can push out part of its body to confuse an enemy. The part grows back later.", "(4) Its rough, bumpy skin can turn soft or hard in a moment.", "(5) In addition, some kinds squirt out a bad-tasting liquid. A sea cucumber moves slowly, so it needs these tricks."],
      prompt: "A student wrote this description of a sea cucumber. Which sentence would best fill the blank as the main idea sentence?",
      choices: [
        { text: "A sea cucumber has strange ways to stay safe from enemies.", correct: true },
        { text: "A sea cucumber lives on the bottom of the sea." },
        { text: "A sea cucumber's rough skin is its most useful body part." },
        { text: "First, a sea cucumber hides under a rock." }
      ],
      clue: "A main idea sentence names the topic and the big point. Every detail after it should tell more about that point.",
      hints: [
        "A main idea sentence names the topic and the big point. Every detail after it should tell more about that point.",
        "Read sentences 2 to 5 and say what they all tell about.",
        "Sentence 4 is only about the skin, so a main idea sentence about skin is too small. Test the other choices against all four sentences."
      ],
      how: [
        "Sentence 2 squirts threads, sentence 3 pushes out part of its body, sentence 4 changes its skin and sentence 5 squirts a liquid.",
        "All of them are ways a sea cucumber stays safe from enemies.",
        "The answer is \"A sea cucumber has strange ways to stay safe from enemies.\"",
        "Where it lives is not explained by the details, the skin is only one detail, and First is a time word for a step."
      ],
      misconception: "A common mix-up is choosing a sentence that fits only one detail. A main idea sentence covers all of them.",
      why: "The answer is \"A sea cucumber has strange ways to stay safe from enemies.\" Every detail is a way it stays safe. Where it lives is not explained by the details, the skin is only one detail, and First begins a step." },
    { id: "SK-TSDESC-S15", type: "dropdown", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.2.a"], passages: [],
      like: ["SK-TSDESC-C15"],
      stem: ["A student is writing a description of the class library corner. Here is the paragraph with two blanks."],
      prompt: "Choose the clue words that best complete the paragraph.",
      text: "Our library corner has a spot for every reader. Soft pillows lie on the floor for kids who like to curl up. {0}, a lamp hangs over a table for kids who like to sit up. The shelves hold many kinds of books, {1} funny stories and books about space.",
      slots: [
        { options: ["Also", "However", "Because"], answer: 0 },
        { options: ["such as", "so", "but"], answer: 0 }
      ],
      clue: "Clue words in a description add details and give examples. Read each sentence with each word.",
      hints: [
        "Clue words in a description add details and give examples. Read each sentence with each word.",
        "For the first blank, ask whether the lamp sentence adds another place for readers or goes against the pillows. For the second blank, ask what follows the word.",
        "The lamp does not go against the pillows, so a word that shows a difference does not fit the first blank. Try each word that is left in the second blank."
      ],
      how: [
        "The pillows are one thing for readers. The lamp and table are one more thing, so the first blank needs a word that adds.",
        "The shelves hold many kinds of books, and funny stories and books about space are examples, so the second blank needs a word that gives examples.",
        "The answers are Also and such as.",
        "However shows a difference, Because shows a reason, so shows a result and but shows a difference."
      ],
      misconception: "A common mix-up is choosing a clue word that sounds smooth. Ask what the sentence does: add, give an example, or show a difference.",
      why: "The answers are Also and such as. Also adds the lamp and table to the pillows. Such as introduces examples of the kinds of books. However, because, so and but show a difference, a reason or a result." }
  ],
  /* Hints and Show me how for items kept in practice: refs P6 and P5 (core set 1) and Together P1-P4
     (P1 and P4 revised). */
  addons: {
    "SK-TSDESC-P1": {
      hints: [
        "Describing words like looks like and works like compare something new to something you already know.",
        "Think about what a paddle is used for. Then read the rest of paragraph 5.",
        "The passage never tells the color of the pelican's feet, so that choice does not fit. Test each choice that is left against paragraph 5."
      ],
      how: [
        "A paddle pushes a boat through the water.",
        "The next sentence says a pelican can paddle across the water just like a duck.",
        "So the comparison helps you picture the feet pushing the bird along. The answer is \"how the pelican's feet push it through the water.\""
      ],
      misconception: "A common mix-up is thinking a comparison tells what something looks like. Works like tells what something does." },
    "SK-TSDESC-P2": {
      hints: [
        "Describing clue words have different jobs. Some add a detail, some show what something is like, and one kind gives an example.",
        "Find the clue word in each sentence you can choose.",
        "\"In addition\" adds one more detail about the pelican, so that sentence is not the one. Check the other clue words the same way."
      ],
      how: [
        "The sentences use the clue words looks like, also, In addition, work like and For example.",
        "Also and In addition add details. Looks like and work like tell what something is like.",
        "For example gives an example. The answer is \"For example, a pelican can paddle across the water just like a duck.\""
      ],
      misconception: "A common mix-up is choosing any sentence with a clue word. Each clue word has its own job." },
    "SK-TSDESC-P3": {
      hints: [
        "The main idea of a paragraph is what all its sentences tell about. Ask: What is this paragraph mostly about?",
        "Read the three sentences in paragraph 3. Ask what they all tell about.",
        "The feet are not named in paragraph 3, so the choice about the feet does not fit. Test the others: does it fit all three sentences, or only part of one?"
      ],
      how: [
        "Sentence 1 names the pelican's sharp eyes.",
        "Sentences 2 and 3 tell how the pelican looks for fish from high above and what it does when it sees one.",
        "The answer is \"the pelican's sharp eyes and how it finds fish.\" Flying high is only part of one sentence."
      ],
      misconception: "A common mix-up is picking a detail from one sentence as the main idea of a paragraph. The main idea must fit every sentence." },
    "SK-TSDESC-P4": {
      hints: [
        "The main idea of a paragraph is what all its sentences tell about. Ask: What is this paragraph mostly about?",
        "Read the three sentences in paragraph 2. Find the thing each one names.",
        "The pouch only looks like a big bag; the pelican does not carry a bag, so that choice does not fit. Test the others: does it fit all three sentences, or only one part of one?"
      ],
      how: [
        "Sentence 1 is about the long bill. Sentences 2 and 3 are about the pouch under it.",
        "The pouch only looks like a big bag. The pelican does not carry a bag.",
        "The answer is \"the pelican's long bill and the pouch under it.\""
      ],
      misconception: "A common mix-up is reading a describing comparison as a fact. Looks like a big bag does not mean it is a bag." },
    "SK-TSDESC-P5": {
      hints: [
        "Describing clue words have jobs. Some add a detail, some show a difference, and some tell order.",
        "Read both sentences together. Ask how the second one is connected to the first.",
        "Finally tells the last step in a sequence, and this passage does not tell steps. Read the sentences with each word that is left."
      ],
      how: [
        "The first sentence tells one thing a pelican has: sharp eyes.",
        "The second sentence tells one more thing it has: webbed feet. It is not a difference and not a step.",
        "Also adds a detail. The answer is also: \"It also has webbed feet.\"",
        "However would show a difference, and finally would tell the last step."
      ],
      misconception: "A common mix-up is choosing however whenever two different body parts are named. However is for a difference; also adds one more detail." },
    "SK-TSDESC-P6": {
      hints: [
        "Key details tell more about the main idea. Ask about each detail: does it tell how the bird gets its food, or something else about it?",
        "Find each choice in the passage, and note which paragraph it comes from. Choose two.",
        "\"The brown pelican is a large bird\" tells its size, not how it gets food. Check the other choices the same way."
      ],
      how: [
        "The question asks how a pelican catches fish.",
        "Paragraph 3: it folds its wings and dives headfirst into the sea. Paragraph 4: the pouch scoops up water and fish at the same time.",
        "The answers are \"It folds its wings and dives headfirst into the sea.\" and \"It scoops up water and fish at the same time.\"",
        "Flying low over the waves (paragraph 1), how its feet paddle and how big it is do not tell how it catches fish."
      ],
      misconception: "A common mix-up is choosing a true detail that tells about the topic but not about the question. Each answer must tell how the pelican catches fish." }
  },
  test: [
    { id: "SK-TSDESC-T1", type: "mc", points: 1, dok: 2, passages: ["p2"], std: ["3.T.SS.1.a", "3.T.T.2.a"],
      prompt: "What is this passage mostly about?",
      choices: [
        { text: "what makes the live oak a special tree", correct: true },
        { text: "how squirrels find and eat acorns" },
        { text: "why Spanish moss is a gray plant" },
        { text: "how to plant a tree in your yard" }
      ],
      clue: "Ask: Does every paragraph tell more about this? A choice that fits only one sentence is a detail.",
      why: "The answer is \"what makes the live oak a special tree.\" Every paragraph tells more about the live oak: its shape, its leaves, the animals it helps and how long it lives. Acorns and Spanish moss are single details." },
    { id: "SK-TSDESC-T2", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence uses a clue word to give an EXAMPLE? Choose the sentence in the passage.",
      targets: ["p2:2:1", "p2:2:4", "p2:3:1", "p2:4:2", "p2:4:3"],
      answer: ["p2:4:2"], pick: 1,
      clue: "Each describing clue word has a job. Look for the one whose job is to give an example.",
      why: "The answer is \"For example, squirrels, deer and birds eat its small acorns.\" For example shows how live oaks are good for living things. Has, looks like, also and In addition describe or add details." },
    { id: "SK-TSDESC-T3", type: "ms", points: 2, dok: 2, passages: ["p2"],
      prompt: "Which TWO details help you picture the SHAPE of a live oak?",
      pick: 2,
      choices: [
        { text: "A live oak has a short, thick trunk.", correct: true },
        { text: "From far away, the tree looks like a giant green umbrella.", correct: true },
        { text: "Most oaks drop their leaves in the fall." },
        { text: "Live oaks can live for hundreds of years." },
        { text: "Some of the oldest ones grow near Savannah." }
      ],
      clue: "Picture it in your mind. Which details help you see its shape?",
      why: "The answers are \"A live oak has a short, thick trunk.\" and \"From far away, the tree looks like a giant green umbrella.\" Both help you see its shape. The others tell about other oaks, how long live oaks live and where they grow." },
    { id: "SK-TSDESC-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "According to paragraph 3, how did the live oak get its name?",
      choices: [
        { text: "It looks green and alive even in winter.", correct: true },
        { text: "It can live for hundreds of years." },
        { text: "Many animals live in its branches." },
        { text: "It drops all its leaves in the fall." }
      ],
      clue: "Find the sentence in paragraph 3 that talks about the name. Read the sentences right before and after it.",
      why: "The answer is \"It looks green and alive even in winter.\" Paragraph 3 says the live oak keeps its leaves almost all year, and that is how it got its name. Living a long time is true, but paragraph 3 does not give that as the reason." },
    { id: "SK-TSDESC-T5", type: "mc", points: 1, dok: 2, passages: ["p2"], std: ["3.T.SS.1.a", "3.T.T.2.a"],
      prompt: "Read the sentence in the box. What is it?",
      stem: ["Some branches even dip down and touch the ground."],
      choices: [
        { text: "a detail that tells how the branches look", correct: true },
        { text: "the main idea of the whole passage" },
        { text: "a detail that tells what animals eat" },
        { text: "the main idea of the last paragraph" }
      ],
      clue: "Ask: Is the WHOLE passage about this, or is it just one fact?",
      why: "The answer is \"a detail that tells how the branches look.\" It is one fact about the tree's shape from paragraph 2. The whole passage is not about branches touching the ground." }
  ]
});
