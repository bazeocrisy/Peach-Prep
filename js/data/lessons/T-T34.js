/* Lessons: 3.T.T.3 Opinion techniques and 3.T.T.4 Poetic techniques. Schema: docs/SPEC.md §8. All writers, schools and towns are invented. */
PP.addLesson({
  code: "3.T.T.3.a",
  title: "Opinion texts: the opinion, the reasons and the evidence",
  teach: {
    big: "An opinion piece tells what the author thinks, gives reasons why, and backs up each reason with facts or examples.",
    points: [
      "The opinion is what the author believes or wants. Look for clue words like I think, I believe, should and best. The opinion is often in the first paragraph and again at the end.",
      "A reason tells why the author thinks that way. Reasons often come after words like because, First, Another reason and Finally.",
      "Evidence is the facts and examples that back up a reason. It usually comes right after the reason.",
      "A fact can be checked and proven true. An opinion tells what someone thinks or feels, and other people may disagree.",
      "Authors also plan how an opinion piece is built. Each reason often gets its own paragraph. Some authors add a paragraph that answers people who disagree, with words like Some people say ... But. The ending says the opinion again and may ask readers to do something."
    ],
    words: [
      { term: "opinion", means: "what someone thinks or believes" },
      { term: "reason", means: "why the author thinks that way" },
      { term: "evidence", means: "facts and examples that back up a reason" },
      { term: "fact", means: "something that can be checked and proven true" }
    ],
    example: {
      label: "Example",
      lines: ["I think every class should grow a plant. Caring for a plant teaches us to be responsible. In Room 4, students take turns watering their bean plant each morning."],
      note: "Opinion: every class should grow a plant (clue words: I think, should). Reason: it teaches us to be responsible. Evidence: the example of students in Room 4 taking turns watering their bean plant."
    },
    tip: "On the test, you may be asked which sentence tells the author's opinion, or which detail supports a reason. Find the reason first. Then look at the sentences right after it for the facts that back it up."
  },
  learn: [
    {
      show: ["I think every kid should learn to swim. Swimming is a skill that can keep you safe near water. It is also great exercise for your heart and muscles. At our town pool, swim lessons are free for kids in June."],
      ask: "What is the author's opinion, and what is one reason the author gives?",
      steps: [
        "Look for clue words that show what the author thinks. The first sentence has I think and should, so it is the opinion.",
        "Ask, \"Why does the author think so?\" Then find a sentence that answers that question.",
        "Swimming can keep you safe near water. That answers why, so it is a reason. Being great exercise is another reason."
      ],
      answer: "The opinion is that every kid should learn to swim. One reason is that swimming can keep you safe near water."
    },
    /* B3 review fix (SHOULD-5, author b3b): this example replaces the fact-or-opinion example, which is still
       taught in teach point 4 and practised in Practice Together P3. It models the "design" part: answering people who disagree. */
    {
      show: ["Our class should have a pencil sharpener at every table. Some people say the sharpeners would be too noisy. But the new ones hardly make a sound, and we would use them only before class starts."],
      ask: "How does the writer answer people who disagree?",
      steps: [
        "Find the words Some people say. They tell what the other side thinks: the sharpeners would be too noisy.",
        "Find the reply. It starts with But.",
        "Check that the reply answers that exact worry. Quiet sharpeners that are used only before class answer the worry about noise. Just saying the opinion again would not answer it."
      ],
      answer: "The writer tells the worry, that the sharpeners would be too noisy, and then answers it: they are quiet, and they would be used only before class."
    },
    {
      show: ["Our school should plant a garden each spring. Gardening teaches kids to care for living things. Last year, the fourth graders who planted beans watered them every day. Their teacher said no one had to be reminded."],
      ask: "What evidence supports the reason that gardening teaches kids to care for living things?",
      steps: [
        "Find the reason first: gardening teaches kids to care for living things.",
        "Read the sentences after the reason. Look for facts or examples.",
        "Check each one. Does it prove that kids learned to care for the plants? Watering every day without reminders does."
      ],
      answer: "The fourth graders watered the beans every day, and their teacher said no one had to be reminded."
    }
  ],
  parent: "When you see an ad, a sign or a review together, ask: What does the writer want you to think? What reasons do they give? Then sort a few sentences into facts you could check and opinions people might disagree with.",
  passages: [
    { id: "p1", title: "Open the Library on Saturdays!", byline: "by Kendra, a third grader", genre: "Opinion text",
      paragraphs: [
        ["Our town library is open Monday through Friday.", "But it is closed on Saturdays.", "I think the library should be open on Saturdays, too.", "Here is why."],
        ["First, many families are busy during the week.", "My mom works until six o'clock, but the library closes at five.", "On Saturdays, we would have time to go together."],
        ["Second, lots of people would come on Saturdays.", "Last summer, the library tried it for one month.", "Mr. Grant works at the library.", "He said the story time room was full every Saturday.", "Every computer was in use, too."],
        ["Last, the library is a good place to do homework.", "My house is noisy on weekends because I have three little brothers.", "At the library, it is quiet enough to think."],
        ["Saturday is the best day of the week for a trip to the library.", "Please ask the town to open the doors on Saturdays!"]
      ] },
    { id: "p2", title: "Trees for Our Playground", byline: "by Mateo, a third grader", genre: "Opinion text",
      paragraphs: [
        ["At Oak Hill Elementary, our playground has swings, a slide, and a big field.", "But it does not have a single tree.", "I believe our school should plant trees around the playground."],
        ["The most important reason is that trees make shade.", "Shade keeps the ground cooler than bright sunlight does.", "On hot days in May, the metal slide gets too hot to touch.", "Many kids stand by the wall just to get out of the sun."],
        ["Trees would also bring wildlife to our school.", "Birds build nests in tree branches, and squirrels gather nuts under them.", "Our class could watch these animals and write about them in our science journals."],
        ["Some people say trees cost too much money.", "But our parent club raised money for new books last year, and it could do the same for trees."],
        ["Trees would make recess cooler and more fun.", "Let's plant some this fall!"]
      ] },
    /* B3 (expansion 2026-10-22, author b3b): p3 is used only by core set 2, p4 only by core set 3.
       Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "Let Everyone Play", byline: "by Darnell, a third grader", genre: "Opinion text",
      paragraphs: [
        ["On some soccer teams, a few kids sit on the bench for most of the game.", "Sitting on the bench for a whole game is no fun.", "I think every player in the Brookside Kids League should get the same time on the field."],
        ["First, kids get better by playing in real games.", "Last fall, our coach gave us all the same time to play.", "My friend Sam had never played before he joined our team.", "In our last game, Sam scored his first goal."],
        ["Also, kids who get to play want to keep playing.", "Everyone knows that playing is more fun than watching.", "This spring, all 12 players from my team signed up again.", "On a team where many kids sat on the bench, only five players came back."],
        ["Some people say the best players should play the most so the team can win.", "But kids join the league to learn and have fun.", "And our team still won more games than it lost."],
        ["Please tell the league to give every player the same time on the field!"]
      ] },
    { id: "p4", title: "A Weather Station for Our School", byline: "by Keisha, a third grader", genre: "Opinion text",
      paragraphs: [
        ["Every morning, our class talks about the weather.", "But we have no way to measure the weather ourselves.", "Our school should put a weather station in the field behind the gym."],
        ["First, we could keep our own weather records instead of guessing.", "Science is my favorite subject.", "In March, Room 14 made a rain gauge out of a plastic bottle.", "Each day, the students measured the rain and added it to a chart."],
        ["Next, a weather station would tell us the weather right at our school.", "Last May, our kickball game against Room 7 was called off because the TV news said storms were coming.", "Not one drop of rain fell at our school that day."],
        ["Some people say a weather station would get broken at recess.", "But the field behind the gym has a tall fence, and no one plays there.", "The station would be safe from balls and from climbing kids."],
        ["With a weather station, every morning would start with real numbers instead of guesses.", "Please tell your teacher that you want one, too!"]
      ] }
  ],
  practice: [
    { id: "SK-TT3a-P1", type: "hottext", points: 1, dok: 1, passages: ["p1"],
      prompt: "Which sentence states the author's opinion? Choose the sentence in the passage.",
      targets: ["p1:1:1", "p1:1:2", "p1:1:3", "p1:1:4", "p1:2:1", "p1:3:1"],
      answer: ["p1:1:3"], pick: 1,
      clue: "An opinion tells what the author thinks or wants. Look for clue words like I think and should.",
      why: "The answer is \"I think the library should be open on Saturdays, too.\" The words I think and should show what Kendra wants. The first two sentences are facts about when the library is open, and the sentences that start with First and Second are reasons." },
    { id: "SK-TT3a-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which reason does the author give for opening the library on Saturdays?",
      choices: [
        { text: "Many families are too busy to visit during the week.", correct: true },
        { text: "The library needs more books for the little kids." },
        { text: "Mr. Grant wants to work more days each week." },
        { text: "The computers only work well on the weekends." }
      ],
      clue: "Reasons often start with words like First, Second and Last. Read those sentences. Which choice matches one of them?",
      why: "The answer is \"Many families are too busy to visit during the week.\" Paragraph 2 begins, \"First, many families are busy during the week.\" The passage never says the library needs more books, that Mr. Grant wants more work days, or that the computers work better on weekends." },
    { id: "SK-TT3a-P3", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Is each sentence a fact or an opinion? Match each sentence to the correct column.",
      cols: ["Fact", "Opinion"],
      rows: [
        { text: "The library is closed on Saturdays.", answer: 0 },
        { text: "Saturday is the best day of the week for a trip to the library.", answer: 1 },
        { text: "The library tried Saturday hours for a month last summer.", answer: 0 },
        { text: "The library should be open on Saturdays.", answer: 1 }
      ],
      clue: "For each sentence, ask: Could I check this and prove it? Or is it what someone thinks, so other people could disagree?",
      why: "Facts: the library is closed on Saturdays, and it tried Saturday hours last summer. You could check both. Opinions: Saturday is the best day for a library trip, and the library should be open on Saturdays. The words best and should show what Kendra thinks, and other people could disagree." },
    { id: "SK-TT3a-P4", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why does the author say Saturday hours would help her own family?",
        choices: [
          { text: "Her mom gets home from work after the library closes.", correct: true },
          { text: "Her mom likes to take her to Saturday story time." },
          { text: "Her family lives too far away from the library." },
          { text: "Her brothers are too noisy to visit the library." }
        ] },
      partB: { prompt: "Which sentence from the passage best supports the answer to Part A?",
        choices: [
          { text: "\"My mom works until six o'clock, but the library closes at five.\"", correct: true },
          { text: "\"My house is noisy on weekends because I have three little brothers.\"" },
          { text: "\"He said the story time room was full every Saturday.\"" },
          { text: "\"Second, lots of people would come on Saturdays.\"" }
        ] },
      clue: "Find the paragraph about families being busy. What detail does Kendra give about her own family there? Then choose the sentence that shows that detail.",
      why: "Part A: Her mom gets home from work after the library closes. Part B: \"My mom works until six o'clock, but the library closes at five.\" That sentence is the evidence for the reason that families are busy during the week. The brothers are noisy at home, not at the library." },
    { id: "SK-TT3a-P5", type: "ms", points: 2, pick: 2, dok: 2, passages: ["p1"],
      prompt: "Paragraph 3 gives the reason that lots of people would come on Saturdays. Which TWO details are evidence for that reason?",
      choices: [
        { text: "The story time room was full every Saturday.", correct: true },
        { text: "Every computer was in use on Saturdays.", correct: true },
        { text: "The author's mom works until six o'clock." },
        { text: "The author has three little brothers." },
        { text: "Mr. Grant works at the library." }
      ],
      clue: "Evidence for this reason must show that people really did come when the library was open on Saturdays. Check each detail against that.",
      why: "The answers are \"The story time room was full every Saturday\" and \"Every computer was in use on Saturdays.\" Both show that many people came when the library tried Saturday hours. The mom's work hours support the reason about busy families, the brothers support the reason about homework, and Mr. Grant working at the library tells who reported the crowds, not that people came." },
    { id: "SK-TT3a-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does the author end with the last paragraph, \"Please ask the town to open the doors on Saturdays!\"?",
      choices: [
        { text: "to say her opinion again and ask readers to do something about it", correct: true },
        { text: "to give a new reason that she has not told the reader yet" },
        { text: "to tell a fact about when the library is open now" },
        { text: "to answer people who say the library costs too much" }
      ],
      clue: "Think about how the whole piece is built. What job does the last paragraph of a piece like this usually do?",
      why: "The answer is to say her opinion again and ask readers to do something about it. The ending brings back Kendra's opinion that the library should open on Saturdays and asks readers to help. It gives no new reason, the hours are told in paragraph 1, and Kendra never writes about cost." }
  ],
  /* ---------- B3 (expansion 2026-10-22, author b3b; docs/expansion-2026-10-22/01-architecture.md §2.2-2.3) ----------
     core: fifteen items in three sets of five. Set 1 reuses the Try items P4, P5 and P6 by { ref } and adds
     C03 and C05 on "Open the Library on Saturdays!". Set 2 uses p3 ("Let Everyone Play", sports). Set 3 uses
     p4 ("A Weather Station for Our School", science) plus two short transfer stems (family, community).
     Practice Together is P1-P3. Hints and Show me how for P1-P6 are in addons below.
     Author log: docs/expansion-2026-10-22/batches/B3-b3b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT3a-P4" },
      { ref: "SK-TT3a-P5" },
      { id: "SK-TT3a-C03", type: "mc", points: 1, dok: 3, std: ["3.T.T.3.a"], passages: ["p1"],
        stem: ["Marcus wrote a short opinion piece, too. Here it is.", "I think the library should stay closed on Saturdays. The library workers need a day to rest. Also, families can find other fun things to do on weekends. Saturday should be a day off for everyone."],
        prompt: "How is Marcus's piece different from Kendra's piece, \"Open the Library on Saturdays!\"?",
        choices: [
          { text: "Marcus gives reasons, but he does not back them up with facts or examples.", correct: true },
          { text: "Marcus uses facts to make his point, but Kendra uses only her opinions." },
          { text: "Marcus states his opinion, but he does not give any reasons for it." },
          { text: "Marcus answers people who disagree with him, but Kendra does not." }
        ],
        clue: "An opinion piece has an opinion, reasons and evidence. To compare two pieces, check each part in both of them.",
        hints: [
          "An opinion piece has an opinion, reasons and evidence. To compare two pieces, check each part in both of them.",
          "Find Marcus's opinion and each of his reasons. Then do the same for Kendra's piece.",
          "Neither piece has a part that starts with Some people say, so neither one answers people who disagree. Check each choice that is left against both pieces."
        ],
        how: [
          "Marcus's opinion is that the library should stay closed on Saturdays. His reasons are that workers need rest and that families can find other fun things to do.",
          "After each reason, Marcus goes right on to the next idea. He never tells a fact or an example that shows a reason is true.",
          "Kendra backs up her reasons with facts and examples, like her mom's work hours and the full story time room. So the answer is \"Marcus gives reasons, but he does not back them up with facts or examples.\"",
          "Marcus does state his opinion and does give two reasons. Neither piece answers people who disagree."
        ],
        misconception: "A common mix-up is calling a reason a fact because it sounds true. \"The library workers need a day to rest\" tells why Marcus thinks so, but it is not proof.",
        why: "The answer is \"Marcus gives reasons, but he does not back them up with facts or examples.\" Marcus says workers need rest and families can do other things, but he gives no evidence. Kendra backs up her reasons with facts and examples. Marcus does state an opinion and give two reasons, he uses no facts, and neither writer answers people who disagree." },
      { ref: "SK-TT3a-P6" },
      { id: "SK-TT3a-C05", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.3.a"], passages: ["p1"],
        prompt: "Kendra wants to add a paragraph that answers people who disagree with her. Complete her new paragraph. Choose the best answer for each blank.",
        text: "Some people say {0}. But {1}.",
        slots: [
          { options: ["it is too hard to get to the library on Saturdays", "the library workers should get Saturdays off", "families are too busy on Saturdays, too"], answer: 0 },
          { options: ["the town bus stops right in front of the library every Saturday", "Mr. Grant works at the library and runs story time", "Saturday is the best day of the week for a library trip"], answer: 0 }
        ],
        clue: "When an author answers people who disagree, she tells what they say. Then her reply answers that worry.",
        hints: [
          "When an author answers people who disagree, she tells what they say. Then her reply answers that worry.",
          "Try each choice in each blank, and read the whole paragraph out loud.",
          "Mr. Grant working at the library does not answer anyone's worry. Check the other choices in each blank."
        ],
        how: [
          "The first blank tells what people who disagree say. The second blank must answer that exact worry.",
          "A bus that stops right at the library every Saturday answers the worry that the library is too hard to get to.",
          "The answers are it is too hard to get to the library on Saturdays and the town bus stops right in front of the library every Saturday.",
          "No reply here tells why workers would still get a day off or why busy families would come. Saying Saturday is the best day is just an opinion again, so it answers nothing."
        ],
        misconception: "A common mix-up is choosing a reply that only says the opinion again. A good reply answers the other side's worry.",
        why: "The answers are it is too hard to get to the library on Saturdays and the town bus stops right in front of the library every Saturday. The bus answers the worry about getting there. Mr. Grant's job and \"the best day\" do not answer any worry, so they cannot finish the paragraph." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT3a-C06", type: "hottext", points: 1, dok: 2, std: ["3.T.T.3.a"], passages: ["p3"],
        prompt: "Which sentence states the main opinion that Darnell's whole piece is about? Choose the sentence in the passage.",
        targets: ["p3:1:1", "p3:1:3", "p3:2:1", "p3:3:1", "p3:4:1", "p3:4:2"],
        answer: ["p3:1:3"], pick: 1,
        clue: "The main opinion is the idea that all of the author's reasons support.",
        hints: [
          "The main opinion is the idea that all of the author's reasons support.",
          "Find the reasons in paragraphs 2 and 3, and say them in your own words.",
          "\"Some people say the best players should play the most\" tells what other people say, and Darnell argues against it. Check each sentence that is left."
        ],
        how: [
          "Paragraphs 2 and 3 each start with a reason, after the words First and Also.",
          "Both reasons explain why every player should get the same time to play, and the last paragraph asks for the same thing.",
          "The answer is \"I think every player in the Brookside Kids League should get the same time on the field.\"",
          "The sentences that start with First and Also are reasons, and the sentence that starts with But is part of his reply to other people. None of them is what both reasons support."
        ],
        misconception: "A common mix-up is choosing the first sentence that tells what someone thinks. The main opinion is the one every reason supports.",
        why: "The answer is \"I think every player in the Brookside Kids League should get the same time on the field.\" Both reasons and the ending support it. The First and Also sentences are reasons, the But sentence is part of his reply, and the best players playing most is what other people say." },
      { id: "SK-TT3a-C07", type: "ms", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: ["p3"], pick: 2,
        prompt: "Which TWO of these ideas from the passage are facts that could be checked?",
        choices: [
          { text: "Last fall, our coach gave us all the same time to play.", correct: true },
          { text: "On a team where many kids sat on the bench, only five players came back.", correct: true },
          { text: "Sitting on the bench for a whole game is no fun." },
          { text: "Everyone knows that playing is more fun than watching." },
          { text: "The best players should play the most so the team can win." }
        ],
        clue: "A fact can be checked and proven true. An opinion tells what someone thinks or feels, and other people may disagree.",
        hints: [
          "A fact can be checked and proven true. An opinion tells what someone thinks or feels, and other people may disagree.",
          "For each idea, ask: How could someone check this? Choose two.",
          "\"Sitting on the bench for a whole game is no fun\" tells a feeling, and another kid might not mind, so it is an opinion. Check each idea that is left."
        ],
        how: [
          "You could ask the coach or the players how much time each player got last fall.",
          "You could count how many players from that other team came back this spring.",
          "The answers are \"Last fall, our coach gave us all the same time to play\" and \"On a team where many kids sat on the bench, only five players came back.\"",
          "\"Everyone knows\" sounds sure, but more fun is a feeling, so it is still an opinion. Should tells what someone thinks ought to happen, so the sentence about the best players is an opinion, too."
        ],
        misconception: "A common mix-up is calling a sentence a fact because it sounds sure, like \"Everyone knows ...\". Ask how you could check it.",
        why: "The answers are \"Last fall, our coach gave us all the same time to play\" and \"On a team where many kids sat on the bench, only five players came back.\" Both could be checked. No fun, more fun and should all tell what someone thinks, so those sentences are opinions, even the one that starts with Everyone knows." },
      { id: "SK-TT3a-C08", type: "ebsr", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: ["p3"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Which reason does Darnell's story about Sam support?",
          choices: [
            { text: "Kids get better by playing in real games.", correct: true },
            { text: "Kids who get to play want to keep playing." },
            { text: "The best players should play the most so the team can win." },
            { text: "Sitting on the bench for a whole game is no fun." }
          ] },
        partB: { prompt: "Which sentence from the passage best supports the answer to Part A?",
          choices: [
            { text: "\"In our last game, Sam scored his first goal.\"", correct: true },
            { text: "\"Last fall, our coach gave us all the same time to play.\"" },
            { text: "\"This spring, all 12 players from my team signed up again.\"" },
            { text: "\"Also, kids who get to play want to keep playing.\"" }
          ] },
        clue: "Evidence is a fact or example that proves a reason is true. Ask what Sam's story proves.",
        hints: [
          "Evidence is a fact or example that proves a reason is true. Ask what Sam's story proves.",
          "Reread paragraphs 2 and 3.",
          "The best players playing the most is what other people say, and Darnell argues against it, so it is not one of his reasons. For Part B, the sentence you choose must match your Part A answer."
        ],
        how: [
          "Sam's story is in paragraph 2, right after the reason that starts with First.",
          "Sam had never played before, and by the last game he scored a goal. That shows a new player getting better by playing.",
          "Part A: Kids get better by playing in real games. Part B: \"In our last game, Sam scored his first goal.\"",
          "The coach giving everyone the same time tells what happened, not that anyone got better. The 12 players signing up again backs up the other reason."
        ],
        misconception: "A common mix-up is choosing the reason that sits nearest in the passage, or a reason that only feels true. Match the evidence to what it proves.",
        why: "Part A: Kids get better by playing in real games. Part B: \"In our last game, Sam scored his first goal.\" Sam went from never playing to scoring a goal, which proves that playing helps kids get better. The 12 players signing up backs up the other reason, and the best players playing most is the other side." },
      { id: "SK-TT3a-C09", type: "mc", points: 1, dok: 3, std: ["3.T.T.3.a"], passages: ["p3"],
        prompt: "In paragraph 4, Darnell answers people who disagree with him. How does he answer them?",
        choices: [
          { text: "He says what kids join the league for, and he gives a fact about his team's games.", correct: true },
          { text: "He agrees with them and decides that the best players should play more." },
          { text: "He gives a fact about his team, but he never says what the other side thinks." },
          { text: "He says that kids join the league only to win, so winning matters most." }
        ],
        clue: "When an author answers people who disagree, first find what the other side says. Then find the author's reply.",
        hints: [
          "When an author answers people who disagree, first find what the other side says. Then find the author's reply.",
          "Reread paragraph 4 one sentence at a time.",
          "Darnell's last paragraph still asks for the same time for every player, so he has not changed his mind. Check each choice that is left."
        ],
        how: [
          "The first sentence of paragraph 4 tells what the other side says: the best players should play the most so the team can win.",
          "Darnell's reply has two parts. Kids join the league to learn and have fun, and his team still won more games than it lost.",
          "The answer is \"He says what kids join the league for, and he gives a fact about his team's games.\"",
          "He does not agree or change his mind, he does tell what the other side thinks, and he says kids join to learn and have fun, not only to win."
        ],
        misconception: "A common mix-up is reading the other side's words as the author's own opinion. The words Some people say show whose idea it is.",
        why: "The answer is \"He says what kids join the league for, and he gives a fact about his team's games.\" Darnell says kids join to learn and have fun, and his team still won more games than it lost. He keeps his opinion, tells what the other side says first, and never says winning matters most." },
      { id: "SK-TT3a-C10", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.a"], passages: ["p3"],
        prompt: "Darnell wants to add one more reason to his piece. Which sentence would work best as a new reason?",
        choices: [
          { text: "Another reason is that kids who sit on the bench stop feeling like part of the team.", correct: true },
          { text: "Another reason is that our soccer games start at nine o'clock on Saturday mornings." },
          { text: "Another time, my friend Ana scored two goals in one game against the Hawks." },
          { text: "Another fact is that the league has 16 teams and more than 200 players." }
        ],
        clue: "A reason tells why the author's opinion is right. It answers the question: Why should this happen?",
        hints: [
          "A reason tells why the author's opinion is right. It answers the question: Why should this happen?",
          "Reread Darnell's opinion in paragraph 1 and the reasons that begin paragraphs 2 and 3. A new reason should do the same job.",
          "The sentence about 16 teams gives a fact about the league, but it does not tell why every player should get the same time. Check each choice that is left."
        ],
        how: [
          "Darnell's opinion is that every player should get the same time on the field.",
          "Ask of each choice: Does it tell why? Kids on the bench feeling left out of the team is a why.",
          "The answer is \"Another reason is that kids who sit on the bench stop feeling like part of the team.\"",
          "Ana's two goals is one example from a game, not a reason, and the number of teams is a fact that does not tell why. The game time does not support the opinion at all."
        ],
        misconception: "A common mix-up is thinking a sentence is a reason because it starts with Another reason. Check that it really tells why.",
        why: "The answer is \"Another reason is that kids who sit on the bench stop feeling like part of the team.\" It tells why every player should get the same time. The game time, Ana's goals and the number of teams do not explain why, even when a sentence starts with Another reason." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT3a-C11", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: ["p4"],
        prompt: "Complete the sentence about how Keisha begins her piece. Choose the best answer for each blank.",
        text: "Paragraph 1 first {0}, and then it {1}.",
        slots: [
          { options: ["tells what the class does each morning", "gives Keisha's most important reason", "answers people who disagree"], answer: 0 },
          { options: ["states Keisha's opinion", "gives evidence for a reason", "asks readers to do something"], answer: 0 }
        ],
        clue: "Each part of a piece like this has a job. Read paragraph 1 and ask what each sentence does.",
        hints: [
          "Each part of a piece like this has a job. Read paragraph 1 and ask what each sentence does.",
          "Read the first two sentences of paragraph 1 together. Then read the last sentence on its own.",
          "Nobody disagrees with Keisha yet in paragraph 1, so the first blank is not about answering people. Check the other choices in each blank."
        ],
        how: [
          "The first two sentences tell what the class does every morning and what it cannot do yet. That brings in the topic.",
          "The last sentence, \"Our school should put a weather station in the field behind the gym,\" tells what Keisha thinks the school should do.",
          "The answers are tells what the class does each morning and states Keisha's opinion.",
          "Her reasons start in paragraph 2. Paragraph 1 cannot answer anyone, because nobody has disagreed yet."
        ],
        misconception: "A common mix-up is thinking any sentence with should asks readers to do something. Here should tells what Keisha thinks the school ought to do.",
        why: "The answers are tells what the class does each morning and states Keisha's opinion. Paragraph 1 opens with the class talking about the weather and then gives Keisha's opinion. Her reasons come later, and nobody disagrees yet." },
      { id: "SK-TT3a-C12", type: "hottext", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: ["p4"],
        prompt: "Which TWO sentences are evidence for the reason that the class could keep its own weather records? Choose two sentences in the passage.",
        targets: ["p4:2:1", "p4:2:2", "p4:2:3", "p4:2:4", "p4:3:2", "p4:3:3"],
        answer: ["p4:2:3", "p4:2:4"], pick: 2,
        clue: "Evidence is a fact or example that shows a reason is true.",
        hints: [
          "Evidence is a fact or example that shows a reason is true.",
          "Find the paragraph that gives this reason, and read every sentence in it. Choose two.",
          "\"Science is my favorite subject\" tells how Keisha feels. It is not a fact or example that shows anything. Check the other sentences."
        ],
        how: [
          "Paragraph 2 starts with the reason: we could keep our own weather records instead of guessing.",
          "Room 14 made a rain gauge, and the students measured the rain each day and kept a chart. That is an example of a class keeping its own weather records.",
          "The answers are \"In March, Room 14 made a rain gauge out of a plastic bottle.\" and \"Each day, the students measured the rain and added it to a chart.\"",
          "The sentence that starts with First is the reason itself, not evidence for it, and the kickball game backs up a different reason."
        ],
        misconception: "A common mix-up is choosing the reason sentence as its own evidence. Evidence is the facts and examples that come after the reason.",
        why: "The answers are \"In March, Room 14 made a rain gauge out of a plastic bottle.\" and \"Each day, the students measured the rain and added it to a chart.\" They show a class keeping its own weather records. The First sentence is the reason, the favorite-subject sentence is a feeling, and the kickball game supports the next reason." },
      { id: "SK-TT3a-C13", type: "ms", points: 2, dok: 3, std: ["3.T.T.3.a"], passages: ["p4"], pick: 2,
        prompt: "Which TWO things does Keisha do in paragraphs 4 and 5 to make her piece stronger?",
        choices: [
          { text: "She answers people who think a weather station would get broken at recess.", correct: true },
          { text: "She asks readers to tell their teachers that they want a weather station.", correct: true },
          { text: "She agrees that a weather station would probably get broken at recess." },
          { text: "She gives a new reason: the field behind the gym needs a tall fence." },
          { text: "She tells the steps for building a fence around the field behind the gym." }
        ],
        clue: "Each paragraph in an opinion piece has a job. Think about the jobs a paragraph can do near the end of a piece.",
        hints: [
          "Each paragraph in an opinion piece has a job. Think about the jobs a paragraph can do near the end of a piece.",
          "Reread paragraphs 4 and 5, one at a time. Choose two.",
          "Nothing in paragraph 4 says that Keisha agrees with the people who worry about recess. Check each choice that is left."
        ],
        how: [
          "Paragraph 4 starts with what some people say: a station would get broken at recess. Then Keisha replies that the field already has a tall fence and no one plays there.",
          "Paragraph 5 says the opinion again and ends with \"Please tell your teacher that you want one, too!\"",
          "The answers are \"She answers people who think a weather station would get broken at recess\" and \"She asks readers to tell their teachers that they want a weather station.\"",
          "The fence is already there, so it is part of her reply, not a new reason or a building plan."
        ],
        misconception: "A common mix-up is reading the reply to the other side as a new reason. A reply answers a worry that someone else has.",
        why: "The answers are \"She answers people who think a weather station would get broken at recess\" and \"She asks readers to tell their teachers that they want a weather station.\" Paragraph 4 answers the worry with the fence that is already there, and paragraph 5 asks readers to act. She does not agree with the worry, and the fence is part of her reply, not a new reason or a building plan." },
      { id: "SK-TT3a-C14", type: "match", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: [],
        stem: ["Jada wrote this note to her family."],
        prompt: "What job does each sentence do in Jada's note? Match each sentence to its job.",
        cols: ["the opinion", "a reason", "evidence"],
        rows: [
          { text: "(1) I think our family should take a walk together after dinner every night.", answer: 0 },
          { text: "(2) Walking together gives us time to talk about our day.", answer: 1 },
          { text: "(3) Last night, we walked to the corner store, and Dad told us a funny story about his new job.", answer: 2 },
          { text: "(4) Also, a walk after dinner helps us fall asleep faster at bedtime.", answer: 1 }
        ],
        clue: "The opinion tells what the writer wants. A reason tells why. Evidence is a fact or example that shows a reason is true.",
        hints: [
          "The opinion tells what the writer wants. A reason tells why. Evidence is a fact or example that shows a reason is true.",
          "Read the note in order. Decide what each sentence does before you match it.",
          "Sentence 3 tells about one walk that already happened. Ask whether it tells why, or shows that a reason is true."
        ],
        how: [
          "Sentence 1 has I think and should. It tells what Jada wants, so it is the opinion.",
          "Sentences 2 and 4 tell why the family should walk: time to talk, and falling asleep faster. Both are reasons. The word Also shows that sentence 4 adds one.",
          "Sentence 3 is an example from last night. Dad told a story while they walked, which shows that walking gives them time to talk. It is evidence.",
          "The answers are: 1, the opinion; 2, a reason; 3, evidence; 4, a reason."
        ],
        misconception: "A common mix-up is calling every sentence after the opinion evidence. Evidence is an example or fact. A reason tells why.",
        why: "Sentence 1 is the opinion (I think, should). Sentences 2 and 4 are reasons: they tell why the family should walk. Sentence 3 is evidence: last night's walk and Dad's story show that walking gives them time to talk." },
      { id: "SK-TT3a-C15", type: "mc", points: 1, dok: 3, std: ["3.T.T.3.a"], passages: [],
        stem: ["Malik is writing to the town council.", "Opinion: Our town should build a fenced dog park.", "Reason: Dogs need a safe place to run without a leash."],
        prompt: "Which sentence would be the strongest evidence for Malik's reason?",
        choices: [
          { text: "Last month, two dogs that were running loose at the ball field ran into the street.", correct: true },
          { text: "Dogs are such happy, playful animals." },
          { text: "Our town has three parks, one swimming pool and a big lake with a dock." },
          { text: "I think the dog owners in our town would be very happy with a dog park." }
        ],
        clue: "Strong evidence is a fact or example that can be checked, and it shows that the reason is true.",
        hints: [
          "Strong evidence is a fact or example that can be checked, and it shows that the reason is true.",
          "Read Malik's reason again, and say it in your own words.",
          "\"I think the dog owners in our town would be very happy\" tells what someone thinks, so it is not proof. Check each choice that is left."
        ],
        how: [
          "Malik's reason is that dogs need a safe place to run without a leash.",
          "Two loose dogs running into the street is a real event that someone could check, and it shows that running loose is not safe now.",
          "The answer is \"Last month, two dogs that were running loose at the ball field ran into the street.\"",
          "The sentence about happy dogs and the \"I think\" sentence tell what someone thinks, so they are opinions, not proof. The parks and pool are facts, but they do not show anything about dogs."
        ],
        misconception: "A common mix-up is picking a sentence that sounds sure or friendly. A sentence can sound nice and still be an opinion, not proof.",
        why: "The answer is \"Last month, two dogs that were running loose at the ball field ran into the street.\" It is a fact that could be checked, and it shows why dogs need a safe place to run. The happy dogs and the happy owners are opinions, and the parks and pool do not tell about dogs." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. Each `like` lists only
     the core items it really practises (same component and task). */
  similar: [
    { id: "SK-TT3a-S01", type: "ms", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: [], pick: 2,
      like: ["SK-TT3a-P5", "SK-TT3a-C12"],
      stem: ["Opinion: Our school should start a pen pal club.", "Reason: Writing to a pen pal helps kids become better writers."],
      prompt: "Which TWO sentences are evidence for this reason?",
      choices: [
        { text: "Last year, Room 5 wrote to pen pals, and their letters got longer each month.", correct: true },
        { text: "By June, their teacher said they made far fewer spelling mistakes.", correct: true },
        { text: "Writing letters is the most fun thing to do in the whole school day." },
        { text: "Pen pals can live in another state or even in another country." },
        { text: "Another reason is that kids can make new friends who live far away." }
      ],
      clue: "Evidence is a fact or example that shows the reason is true.",
      hints: [
        "Evidence is a fact or example that shows the reason is true.",
        "Say the reason in your own words. Then check each sentence against it. Choose two.",
        "The sentence that starts with Another reason gives a new reason. It is not evidence for this one. Check each sentence that is left."
      ],
      how: [
        "The reason is that writing to a pen pal helps kids become better writers.",
        "Longer letters and fewer spelling mistakes both show kids writing better.",
        "The answers are \"Last year, Room 5 wrote to pen pals, and their letters got longer each month\" and \"By June, their teacher said they made far fewer spelling mistakes.\"",
        "Most fun is an opinion, and where pen pals live is a fact that does not show better writing."
      ],
      why: "The answers are \"Last year, Room 5 wrote to pen pals, and their letters got longer each month\" and \"By June, their teacher said they made far fewer spelling mistakes.\" Both show better writing. The fun sentence is an opinion, where pen pals live does not show better writing, and making friends is a new reason." },
    { id: "SK-TT3a-S02", type: "mc", points: 1, dok: 3, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C05", "SK-TT3a-C09"],
      stem: ["Ty wrote: \"I think our class should take a field trip to Cedar Bluff Park.\"", "Then he wrote: \"Some people say the bus ride would take too long.\""],
      prompt: "Which sentence would best answer the people who disagree with Ty?",
      choices: [
        { text: "But the park is only 20 minutes from our school, so we would have lots of time there.", correct: true },
        { text: "But the park is the most beautiful place in our whole state, with tall trees." },
        { text: "Also, we could see deer, turtles and many kinds of birds along the trails." },
        { text: "That is true, so maybe our class should just stay at school that day instead." }
      ],
      clue: "A good reply to people who disagree answers their worry and keeps the author's opinion.",
      hints: [
        "A good reply to people who disagree answers their worry and keeps the author's opinion.",
        "Say the worry in your own words. What are those people afraid of?",
        "The sentence that starts with That is true gives up Ty's opinion. Check each choice that is left."
      ],
      how: [
        "The worry is that the bus ride would take too long.",
        "A reply should show that the ride is not too long.",
        "The answer is \"But the park is only 20 minutes from our school, so we would have lots of time there.\"",
        "Most beautiful is an opinion that does not answer the worry, and the animals are a new reason, not a reply."
      ],
      why: "The answer is \"But the park is only 20 minutes from our school, so we would have lots of time there.\" It answers the worry about the bus ride with a fact. The beautiful park is an opinion, the animals are a new reason, and agreeing gives up the opinion." },
    { id: "SK-TT3a-S03", type: "match", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C14"],
      stem: ["Leo wrote this to his soccer coach."],
      prompt: "What job does each sentence do? Match each sentence to its job.",
      cols: ["the opinion", "a reason", "evidence"],
      rows: [
        { text: "(1) Our team should practice on Saturday mornings, too.", answer: 0 },
        { text: "(2) More practice would help us pass the ball better.", answer: 1 },
        { text: "(3) Last week, after one extra practice, we made 10 passes in a row.", answer: 2 }
      ],
      clue: "The opinion tells what the writer wants. A reason tells why. Evidence is a fact or example that shows a reason is true.",
      hints: [
        "The opinion tells what the writer wants. A reason tells why. Evidence is a fact or example that shows a reason is true.",
        "Read the sentences in order. Decide what each one does before you match it.",
        "Sentence 3 tells about something that already happened last week. Ask whether it tells why, or shows that a reason is true."
      ],
      how: [
        "Sentence 1 uses should and tells what Leo wants: the opinion.",
        "Sentence 2 tells why: more practice would help them pass better. It is a reason.",
        "Sentence 3 is an example that shows extra practice helped: evidence. The answers are 1, the opinion; 2, a reason; 3, evidence."
      ],
      why: "Sentence 1 is the opinion (should). Sentence 2 is a reason: it tells why more practice would help. Sentence 3 is evidence: the 10 passes in a row after an extra practice show that the reason is true." },
    /* ENG-07 (author b3b): S04-S11 give every core item a similar item that really practises it. */
    { id: "SK-TT3a-S04", type: "ebsr", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-P4", "SK-TT3a-C08"],
      stem: ["Rae wrote this paragraph.", "I think our town should open the school gym on Saturdays. First, kids need a safe, dry place to play when it rains. Last winter, the gym was open on one rainy Saturday, and 60 kids came to shoot hoops and jump rope. Also, families could exercise together. My dad says he would walk laps with me if he had a place to go."],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Which reason does the story about last winter support?",
        choices: [
          { text: "Kids need a safe, dry place to play when it rains.", correct: true },
          { text: "Families could exercise together at the gym." },
          { text: "The town should open the school gym on Saturdays." },
          { text: "Kids like basketball more than jumping rope." }
        ] },
      partB: { prompt: "Which detail best supports the answer to Part A?",
        choices: [
          { text: "60 kids came to play on one rainy Saturday.", correct: true },
          { text: "Rae's dad would walk laps with her." },
          { text: "Kids need a safe, dry place to play." },
          { text: "Families could exercise together." }
        ] },
      clue: "Evidence is a fact or example that proves a reason is true. Ask what the story about last winter proves.",
      hints: [
        "Evidence is a fact or example that proves a reason is true. Ask what the story about last winter proves.",
        "Read Rae's paragraph one sentence at a time, and name the job of each sentence.",
        "Opening the gym on Saturdays is Rae's opinion, not one of her reasons. For Part B, the detail you choose must match your Part A answer."
      ],
      how: [
        "Rae gives two reasons: kids need a safe, dry place to play when it rains, and families could exercise together.",
        "The story about last winter is about a rainy Saturday when 60 kids came to play. That proves kids want a dry place to play.",
        "Part A: Kids need a safe, dry place to play when it rains. Part B: 60 kids came to play on one rainy Saturday.",
        "Her dad's laps back up the other reason. A reason is not its own evidence, and nothing compares basketball with jumping rope."
      ],
      why: "Part A: Kids need a safe, dry place to play when it rains. Part B: 60 kids came to play on one rainy Saturday. The rainy-day crowd proves the first reason. The dad's laps support the reason about families, and the opinion is not a reason." },
    { id: "SK-TT3a-S05", type: "mc", points: 1, dok: 3, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C03"],
      stem: ["Ana and Ben each wrote a short opinion piece.", "Ana: I think our school should have a pajama day. It would be fun for everyone. It would also help kids feel cozy and calm.", "Ben: I think our school should have a pajama day. It could raise money for the animal shelter. Last year, Hill School raised $300 when each student paid one dollar to wear pajamas."],
      prompt: "How is Ana's piece different from Ben's piece?",
      choices: [
        { text: "Ana gives reasons, but she does not back them up with facts or examples.", correct: true },
        { text: "Ana uses facts to make her point, but Ben uses only his opinions." },
        { text: "Ana states her opinion, but she does not give any reasons for it." },
        { text: "Ana answers people who disagree with her, but Ben does not." }
      ],
      clue: "An opinion piece has an opinion, reasons and evidence. To compare two pieces, check each part in both of them.",
      hints: [
        "An opinion piece has an opinion, reasons and evidence. To compare two pieces, check each part in both of them.",
        "Find each writer's opinion and reasons. Then look at what else each writer tells.",
        "Neither piece has a part that starts with Some people say, so neither writer answers people who disagree. Check each choice that is left."
      ],
      how: [
        "Ana's reasons are that pajama day would be fun and would help kids feel cozy and calm.",
        "Ben's reason is raising money, and he backs it up with a fact: Hill School raised $300.",
        "The answer is \"Ana gives reasons, but she does not back them up with facts or examples.\"",
        "Ana does give two reasons, fun and feeling cozy. They are what she thinks, not facts, and neither writer answers people who disagree."
      ],
      why: "The answer is \"Ana gives reasons, but she does not back them up with facts or examples.\" Ben backs up his reason with what happened at Hill School. Ana does give reasons, they are not facts, and nobody answers people who disagree." },
    { id: "SK-TT3a-S06", type: "ms", points: 2, dok: 3, std: ["3.T.T.3.a"], passages: [], pick: 2,
      like: ["SK-TT3a-P6", "SK-TT3a-C13"],
      stem: ["Here are the last two paragraphs of Ivy's opinion piece, \"A Block Party for Pine Street.\"", "Paragraph 4: Some people say a block party would be too noisy. But the party would end by eight o'clock, before little kids go to bed.", "Paragraph 5: A block party would help neighbors get to know each other. Please sign our letter to the town so we can plan one this summer!"],
      prompt: "Which TWO things does Ivy do in these two paragraphs?",
      choices: [
        { text: "She answers people who think a block party would be too noisy.", correct: true },
        { text: "She says her opinion again and asks readers to sign a letter.", correct: true },
        { text: "She agrees that the party would be too noisy and changes her plan." },
        { text: "She tells the steps that neighbors follow to plan a block party." },
        { text: "She tells a story about a block party that happened last year." }
      ],
      clue: "Each paragraph in an opinion piece has a job. Think about the jobs a paragraph can do near the end of a piece.",
      hints: [
        "Each paragraph in an opinion piece has a job. Think about the jobs a paragraph can do near the end of a piece.",
        "Read paragraph 4, then paragraph 5. Choose two.",
        "Ivy still wants the party, so she has not changed her plan. Check each choice that is left."
      ],
      how: [
        "Paragraph 4 tells what some people say, that the party would be too noisy, and then replies that it would end by eight o'clock.",
        "Paragraph 5 tells why a block party is a good idea again and ends with \"Please sign our letter.\"",
        "The answers are \"She answers people who think a block party would be too noisy\" and \"She says her opinion again and asks readers to sign a letter.\"",
        "Ivy asks for help planning, but she gives no planning steps, and she tells no story about last year."
      ],
      why: "The answers are \"She answers people who think a block party would be too noisy\" and \"She says her opinion again and asks readers to sign a letter.\" Paragraph 4 answers the worry, and paragraph 5 asks readers to act. She keeps her plan, lists no steps and tells no story." },
    { id: "SK-TT3a-S07", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C06"],
      stem: ["Mornings at our school are very quiet. Singing is the most fun thing to do. I think our school should start each day with a song. A song wakes up sleepy brains, and it helps everyone feel like one big team. Some people say singing is too loud for the morning."],
      prompt: "The writer gives more than one opinion. Which sentence states the main opinion that the whole paragraph is about?",
      choices: [
        { text: "I think our school should start each day with a song.", correct: true },
        { text: "Singing is the most fun thing to do." },
        { text: "Some people say singing is too loud for the morning." },
        { text: "A song wakes up sleepy brains, and it helps everyone feel like one big team." }
      ],
      clue: "The main opinion is the idea that all of the writer's reasons support.",
      hints: [
        "The main opinion is the idea that all of the writer's reasons support.",
        "Find the sentence that gives the writer's reasons, and say them in your own words.",
        "\"Some people say singing is too loud\" tells what other people think, not the writer's own opinion. Check each choice that is left."
      ],
      how: [
        "The reasons are that a song wakes up sleepy brains and makes everyone feel like one team.",
        "Those reasons explain why the school should start each day with a song.",
        "The answer is \"I think our school should start each day with a song.\"",
        "\"Singing is the most fun thing to do\" is a smaller opinion that the reasons do not support, and the sentence about brains and teams gives the reasons themselves."
      ],
      why: "The answer is \"I think our school should start each day with a song.\" Both reasons support it. The most-fun sentence is a smaller opinion, the brains-and-team sentence gives the reasons, and the too-loud sentence is what other people say." },
    { id: "SK-TT3a-S08", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C11"],
      stem: ["Here is the first paragraph of Omari's opinion piece.", "After lunch, our class goes straight to math. Many of us are still full of energy from recess. I think our class should have ten minutes of quiet reading after lunch."],
      prompt: "Complete the sentence about how Omari begins his piece. Choose the best answer for each blank.",
      text: "The paragraph first {0}, and then it {1}.",
      slots: [
        { options: ["tells what happens after lunch now", "gives evidence for a reason", "answers people who disagree"], answer: 0 },
        { options: ["states what Omari thinks his class should do", "gives a second reason", "asks readers to do something"], answer: 0 }
      ],
      clue: "Each part of a piece like this has a job. Read the paragraph and ask what each sentence does.",
      hints: [
        "Each part of a piece like this has a job. Read the paragraph and ask what each sentence does.",
        "Read the first two sentences together. Then read the last sentence on its own.",
        "Nobody disagrees with Omari in this paragraph, so the first blank is not about answering people. Check the other choices in each blank."
      ],
      how: [
        "The first two sentences tell what happens now: math right after lunch, with kids still full of energy. That brings in the topic.",
        "The last sentence uses I think and should to tell what Omari wants his class to do.",
        "The answers are tells what happens after lunch now and states what Omari thinks his class should do.",
        "No reason or evidence has been given yet, and he does not ask the reader to do anything."
      ],
      why: "The answers are tells what happens after lunch now and states what Omari thinks his class should do. The paragraph opens with the topic and then gives Omari's opinion. There are no reasons or evidence yet, nobody disagrees, and he asks nothing of readers." },
    { id: "SK-TT3a-S09", type: "ms", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: [], pick: 2,
      like: ["SK-TT3a-C07"],
      stem: ["Lena wrote an opinion piece about adding a climbing wall to her town's rec center. Here are five of her sentences."],
      prompt: "Which TWO of Lena's sentences are facts that could be checked?",
      choices: [
        { text: "The rec center in our town has an empty room next to the pool.", correct: true },
        { text: "The rec center in the next town got a climbing wall last spring.", correct: true },
        { text: "Climbing is the coolest sport there is." },
        { text: "Everyone agrees that a climbing wall would make our rec center better." },
        { text: "Kids should be allowed to climb as high as they want." }
      ],
      clue: "A fact can be checked and proven true. An opinion tells what someone thinks or feels, and other people may disagree.",
      hints: [
        "A fact can be checked and proven true. An opinion tells what someone thinks or feels, and other people may disagree.",
        "For each sentence, ask: How could someone check this? Choose two.",
        "\"Climbing is the coolest sport there is\" tells a feeling, and other kids could disagree, so it is an opinion. Check each sentence that is left."
      ],
      how: [
        "You could visit the rec center and see the empty room.",
        "You could call or visit the next town's rec center to check on its climbing wall.",
        "The answers are \"The rec center in our town has an empty room next to the pool\" and \"The rec center in the next town got a climbing wall last spring.\"",
        "\"Everyone agrees\" sounds sure, but better is a feeling, so it is an opinion. Should tells what someone thinks ought to happen."
      ],
      why: "The answers are \"The rec center in our town has an empty room next to the pool\" and \"The rec center in the next town got a climbing wall last spring.\" Both can be checked. Coolest, better and should tell what someone thinks." },
    { id: "SK-TT3a-S10", type: "mc", points: 1, dok: 3, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C15"],
      stem: ["Opinion: Our school should serve breakfast in every classroom.", "Reason: Kids learn better when they are not hungry."],
      prompt: "Which sentence would be the strongest evidence for this reason?",
      choices: [
        { text: "At Pine Grove School, kids paid better attention once breakfast was served in class.", correct: true },
        { text: "Breakfast is such a cozy, tasty way to start the day." },
        { text: "Our school cafeteria has 12 long tables and one very big kitchen." },
        { text: "I think pancakes with syrup are the very best breakfast food of all." }
      ],
      clue: "Strong evidence is a fact or example that can be checked, and it shows that the reason is true.",
      hints: [
        "Strong evidence is a fact or example that can be checked, and it shows that the reason is true.",
        "Read the reason again, and say it in your own words.",
        "The sentence about pancakes tells what someone likes, so it is not proof. Check each choice that is left."
      ],
      how: [
        "The reason is that kids learn better when they are not hungry.",
        "What happened at another school once breakfast was served in class is an example someone could check, and it is about learning.",
        "The answer is \"At Pine Grove School, kids paid better attention once breakfast was served in class.\"",
        "The cozy-breakfast sentence and the \"I think\" sentence tell what someone thinks, so they are not proof. The tables are a fact about the cafeteria, not about learning."
      ],
      why: "The answer is \"At Pine Grove School, kids paid better attention once breakfast was served in class.\" It is a checkable example about learning. The other three are a cozy opinion, an unrelated fact and a food opinion." },
    { id: "SK-TT3a-S11", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C10"],
      stem: ["Opinion: Every third grader should learn to read a map."],
      prompt: "Which sentence would work best as a new reason for this opinion?",
      choices: [
        { text: "Another reason is that kids who can read a map are less likely to get lost on a trip.", correct: true },
        { text: "Another reason is that some maps are printed in very bright colors." },
        { text: "One time, my family used a paper map to find a hidden waterfall." },
        { text: "Another fact is that people drew maps more than a thousand years ago." }
      ],
      clue: "A reason tells why the opinion is right. It answers the question: Why should this happen?",
      hints: [
        "A reason tells why the opinion is right. It answers the question: Why should this happen?",
        "Say the opinion in your own words. Then read each choice and ask what job it does.",
        "The sentence about maps from long ago gives a fact, but it does not tell why kids should learn to read a map. Check each choice that is left."
      ],
      how: [
        "The opinion is that every third grader should learn to read a map.",
        "Not getting lost on a trip tells why that would help kids, so it is a reason.",
        "The answer is \"Another reason is that kids who can read a map are less likely to get lost on a trip.\"",
        "The waterfall trip is one example, the old maps are a fact, and bright colors do not tell why."
      ],
      why: "The answer is \"Another reason is that kids who can read a map are less likely to get lost on a trip.\" It tells why. The waterfall is an example, the old maps are a fact that does not explain why, and the colors sentence only sounds like a reason." },
    { id: "SK-TT3a-S12", type: "ebsr", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C08"],
      stem: ["Kofi wrote this paragraph.", "I think our school should build a walking track around the field. First, walking helps kids get stronger. In Ms. Lee's class, kids who walked at recess every day could walk twice as far after one month. Also, a track would keep shoes out of the mud. Last spring, the field was so muddy that the kickball game had to stop."],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Which reason does the story about Ms. Lee's class support?",
        choices: [
          { text: "Walking helps kids get stronger.", correct: true },
          { text: "A track would keep shoes out of the mud." },
          { text: "The school should build a walking track around the field." },
          { text: "Kids like walking more than playing kickball." }
        ] },
      partB: { prompt: "Which detail best supports the answer to Part A?",
        choices: [
          { text: "After one month, the kids could walk twice as far.", correct: true },
          { text: "Last spring, the kickball game had to stop." },
          { text: "The kids in Ms. Lee's class walked at recess." },
          { text: "The field gets very muddy in the spring." }
        ] },
      clue: "Evidence is a fact or example that proves a reason is true. Ask what the story about Ms. Lee's class proves.",
      hints: [
        "Evidence is a fact or example that proves a reason is true. Ask what the story about Ms. Lee's class proves.",
        "Read Kofi's paragraph one sentence at a time, and name the job of each sentence.",
        "Building a walking track is Kofi's opinion, not one of his reasons. For Part B, the detail you choose must match your Part A answer."
      ],
      how: [
        "Kofi gives two reasons: walking helps kids get stronger, and a track would keep shoes out of the mud.",
        "In Ms. Lee's class, kids who walked every day could walk twice as far after a month. That proves they got stronger.",
        "Part A: Walking helps kids get stronger. Part B: After one month, the kids could walk twice as far.",
        "The kickball game and the mud back up the other reason. Walking at recess only tells what the kids did, not that they got stronger."
      ],
      why: "Part A: Walking helps kids get stronger. Part B: After one month, the kids could walk twice as far. Walking twice as far proves they got stronger. The mud and the kickball game support the other reason, and the track is the opinion." },
    { id: "SK-TT3a-S13", type: "mc", points: 1, dok: 3, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C09"],
      stem: ["Nora wrote: \"Our town should paint bike lanes on Elm Street. Some people say bike lanes would make the road too narrow for cars. But Elm Street is 40 feet wide, and the two bike lanes would use only 8 feet of it.\""],
      prompt: "How does Nora answer the people who disagree with her?",
      choices: [
        { text: "She tells their worry, and then she gives facts that show the road is wide enough.", correct: true },
        { text: "She agrees with them and decides that bike lanes would be a bad idea after all." },
        { text: "She gives facts about the road, but she never says what the other side thinks." },
        { text: "She says that cars should not be allowed to drive on Elm Street at all." }
      ],
      clue: "When an author answers people who disagree, first find what the other side says. Then find the author's reply.",
      hints: [
        "When an author answers people who disagree, first find what the other side says. Then find the author's reply.",
        "Read Nora's sentences one at a time.",
        "Nora still wants the bike lanes, so she has not changed her mind. Check each choice that is left."
      ],
      how: [
        "The worry comes after Some people say: the road would be too narrow for cars.",
        "Nora's reply after But gives numbers: the street is 40 feet wide, and the lanes use only 8 feet.",
        "The answer is \"She tells their worry, and then she gives facts that show the road is wide enough.\"",
        "She keeps her opinion, she does say what the other side thinks, and she never says cars should be kept off the street."
      ],
      why: "The answer is \"She tells their worry, and then she gives facts that show the road is wide enough.\" The 40 feet and 8 feet answer the worry about the road being too narrow. She keeps her opinion and never says to keep cars off the street." },
    { id: "SK-TT3a-S14", type: "hottext", points: 2, dok: 2, std: ["3.T.T.3.a"], passages: [],
      like: ["SK-TT3a-C12"],
      stem: ["Opinion: Our class should have a jobs chart.", "Here are five sentences from the writer's piece."],
      prompt: "Which TWO sentences are evidence for the reason that classroom jobs teach kids to be responsible? Choose two sentences.",
      options: [
        "First, classroom jobs teach kids to be responsible.",
        "Jobs are the best part of the whole school day.",
        "In Room 3, kids remembered to do their jobs every day for a whole month.",
        "Room 3's teacher said she never once had to remind anyone to do a job.",
        "Next, jobs would help keep our room neat."
      ],
      answer: [2, 3], pick: 2,
      clue: "Evidence is a fact or example that shows a reason is true.",
      hints: [
        "Evidence is a fact or example that shows a reason is true.",
        "Say the reason in your own words. Then read each sentence and ask what job it does. Choose two.",
        "\"Jobs are the best part of the whole school day\" tells how the writer feels. It is not a fact or example that shows anything. Check the other sentences."
      ],
      how: [
        "The reason is that classroom jobs teach kids to be responsible.",
        "Kids in Room 3 remembered their jobs every day for a month, and their teacher never had to remind them. That shows kids being responsible.",
        "The answers are \"In Room 3, kids remembered to do their jobs every day for a whole month.\" and \"Room 3's teacher said she never once had to remind anyone to do a job.\"",
        "The sentence that starts with First is the reason itself, and the sentence that starts with Next gives a new reason."
      ],
      why: "The answers are \"In Room 3, kids remembered to do their jobs every day for a whole month.\" and \"Room 3's teacher said she never once had to remind anyone to do a job.\" They show kids being responsible. The First sentence is the reason, Next gives another reason, and best part is a feeling." },
    { id: "SK-TT3a-S15", type: "ms", points: 2, dok: 3, std: ["3.T.T.3.a"], passages: [], pick: 2,
      like: ["SK-TT3a-C13"],
      stem: ["Here are the last two paragraphs of Maya's opinion piece, \"A Reading Tent for Room 6.\"", "Paragraph 4: Some people say a reading tent would take up too much room. But it folds flat and fits behind the bookshelf when we are not using it.", "Paragraph 5: A reading tent would make reading time cozy and calm. Let's ask Mr. Park to buy one for our class!"],
      prompt: "Which TWO things does Maya do in these two paragraphs?",
      choices: [
        { text: "She answers people who think a reading tent would take up too much room.", correct: true },
        { text: "She asks readers to help get a reading tent for the class.", correct: true },
        { text: "She agrees that the tent would take up too much room and gives up the idea." },
        { text: "She tells the steps for setting up a reading tent in the classroom." },
        { text: "She tells how much a reading tent costs at the store." }
      ],
      clue: "Each paragraph in an opinion piece has a job. Think about the jobs a paragraph can do near the end of a piece.",
      hints: [
        "Each paragraph in an opinion piece has a job. Think about the jobs a paragraph can do near the end of a piece.",
        "Read paragraph 4, then paragraph 5. Choose two.",
        "Maya still wants the tent, so she has not given up the idea. Check each choice that is left."
      ],
      how: [
        "Paragraph 4 tells the worry, that the tent would take up too much room, and replies that it folds flat behind the bookshelf.",
        "Paragraph 5 ends with \"Let's ask Mr. Park to buy one for our class!\"",
        "The answers are \"She answers people who think a reading tent would take up too much room\" and \"She asks readers to help get a reading tent for the class.\"",
        "Folding flat is not a list of setup steps, and no price is given."
      ],
      why: "The answers are \"She answers people who think a reading tent would take up too much room\" and \"She asks readers to help get a reading tent for the class.\" Paragraph 4 answers the worry, and paragraph 5 asks readers to act. She keeps her idea, gives no steps and gives no price." }
  ],
  /* Hints and Show me how for the Practice Together items P1-P3 and the core refs P4-P6. */
  addons: {
    "SK-TT3a-P1": {
      hints: [
        "An opinion tells what the author thinks or wants. Clue words like I think and should can help.",
        "Read paragraph 1 one sentence at a time.",
        "The first two sentences tell when the library is open and closed. You could check those, so they are facts. Look at the sentences that are left."
      ],
      how: [
        "The first two sentences tell facts about the library's hours.",
        "\"I think the library should be open on Saturdays, too\" has I think and should, so it tells what Kendra wants.",
        "The answer is \"I think the library should be open on Saturdays, too.\" The sentences that start with First and Second are reasons."
      ] },
    "SK-TT3a-P2": {
      hints: [
        "A reason tells why the author thinks the opinion is right.",
        "Find the sentences that give Kendra's reasons. Then compare each choice with them.",
        "Mr. Grant works at the library, but Kendra never says he wants more work days. Check each choice that is left."
      ],
      how: [
        "Paragraph 2 begins, \"First, many families are busy during the week.\"",
        "That tells why the library should open on Saturdays, so it is a reason.",
        "The answer is \"Many families are too busy to visit during the week.\" The passage never says the library needs more books or that the computers work better on weekends."
      ] },
    "SK-TT3a-P3": {
      hints: [
        "For each sentence, ask: Could I check this and prove it? Or is it what someone thinks, so other people could disagree?",
        "Look for words that show a feeling or a wish, like best and should.",
        "The library being closed on Saturdays is something you could check by looking at its hours, so it is a fact. Sort the other sentences the same way."
      ],
      how: [
        "You could check the library's hours and what it tried last summer, so those two sentences are facts.",
        "Best and should show what Kendra thinks, and other people could disagree.",
        "Facts: the library is closed on Saturdays, and it tried Saturday hours last summer. Opinions: Saturday is the best day for a library trip, and the library should be open on Saturdays."
      ] },
    "SK-TT3a-P4": {
      hints: [
        "Evidence is a fact or example that backs up a reason. Look for the detail that is about Kendra's own family.",
        "Find the paragraphs where Kendra tells about her own family.",
        "Nothing in the passage says Kendra's family lives far from the library. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "Paragraph 2 gives the reason that families are busy during the week.",
        "Right after it, Kendra says her mom works until six o'clock, but the library closes at five.",
        "Part A: Her mom gets home from work after the library closes. Part B: \"My mom works until six o'clock, but the library closes at five.\"",
        "Kendra never says her mom likes story time, and nothing says the family lives far away."
      ] },
    "SK-TT3a-P5": {
      hints: [
        "Evidence for a reason is a fact or example that shows the reason is true.",
        "For each detail, ask: does it show that people really came when the library was open on Saturdays? Choose two.",
        "The mom's work hours belong with the reason about busy families, not with this one. Check each choice that is left."
      ],
      how: [
        "Paragraph 3 says the library tried Saturday hours for one month last summer.",
        "Mr. Grant said the story time room was full every Saturday, and every computer was in use. Both show that many people came.",
        "The answers are \"The story time room was full every Saturday\" and \"Every computer was in use on Saturdays.\"",
        "The mom's work hours back up the reason about busy families, and the brothers back up the reason about homework. Mr. Grant working at the library tells who saw the crowds, but it does not show that anyone came."
      ] },
    "SK-TT3a-P6": {
      hints: [
        "Think about how the whole piece is built. Each paragraph has a job.",
        "Reread the last paragraph. Then ask what job it does for the whole piece.",
        "The last paragraph does not tell when the library is open now. That is in paragraph 1. Check each choice that is left."
      ],
      how: [
        "\"Saturday is the best day of the week for a trip to the library\" brings back Kendra's opinion in new words.",
        "\"Please ask the town to open the doors on Saturdays!\" asks readers to do something.",
        "The answer is \"to say her opinion again and ask readers to do something about it.\"",
        "The ending gives no new reason, and Kendra never writes about cost."
      ] }
  },
  test: [
    { id: "SK-TT3a-T1", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "What is the author's opinion?",
      choices: [
        { text: "The school should plant trees around the playground.", correct: true },
        { text: "The school should put a new slide on the playground." },
        { text: "Students should stand in the shade by the wall at recess." },
        { text: "Students should write more in their science journals." }
      ],
      clue: "Look for the sentence with clue words like I believe and should. What does the author want the school to do?",
      why: "The answer is \"The school should plant trees around the playground.\" Paragraph 1 says, \"I believe our school should plant trees around the playground.\" The slide, the wall and the journals are details that support the reasons." },
    { id: "SK-TT3a-T2", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Is each sentence a fact or an opinion? Match each sentence to the correct column.",
      cols: ["Fact", "Opinion"],
      rows: [
        { text: "Trees would make recess more fun.", answer: 1 },
        { text: "Birds build nests in tree branches.", answer: 0 },
        { text: "A playground is better with trees.", answer: 1 },
        { text: "The playground has swings and a slide.", answer: 0 }
      ],
      clue: "For each sentence, ask: Could I check this and prove it? Or is it what someone thinks, so other people could disagree?",
      why: "Facts: birds build nests in tree branches, and the playground has swings and a slide. Both can be checked. Opinions: trees would make recess more fun, and a playground is better with trees. Fun and better tell what Mateo thinks, and other people could disagree." },
    { id: "SK-TT3a-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does the author support the reason that trees make shade?",
        choices: [
          { text: "by telling how hot the playground gets in the sun", correct: true },
          { text: "by naming the animals that would live in the trees" },
          { text: "by telling how the parent club could raise money" },
          { text: "by asking students to plant the trees in the fall" }
        ] },
      partB: { prompt: "Which sentence from the passage best supports the answer to Part A?",
        choices: [
          { text: "\"On hot days in May, the metal slide gets too hot to touch.\"", correct: true },
          { text: "\"Birds build nests in tree branches, and squirrels gather nuts under them.\"" },
          { text: "\"But our parent club raised money for new books last year, and it could do the same for trees.\"" },
          { text: "\"But it does not have a single tree.\"" }
        ] },
      clue: "Find the paragraph that gives the shade reason. What evidence comes right after it? Then pick the sentence that shows that evidence.",
      why: "Part A: by telling how hot the playground gets in the sun. Part B: \"On hot days in May, the metal slide gets too hot to touch.\" This example shows why shade is needed. The birds and squirrels support a different reason, and the parent club sentence is about paying for the trees, not about heat." },
    { id: "SK-TT3a-T4", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence states the author's second reason? Choose the sentence in the passage.",
      targets: ["p2:3:1", "p2:3:2", "p2:3:3", "p2:4:1", "p2:4:2"],
      answer: ["p2:3:1"], pick: 1,
      clue: "A reason tells why the author holds the opinion. Evidence gives facts about a reason. Which sentence tells a new why?",
      why: "The answer is \"Trees would also bring wildlife to our school.\" The word also shows that a new reason is starting. The sentences about birds, squirrels and journals are evidence for it, and paragraph 4 is about what trees cost." },
    { id: "SK-TT3a-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author wants to add one more piece of evidence. Which sentence would best support one of the author's reasons?",
      choices: [
        { text: "Last spring, a robin built a nest in a tree across the street from our school.", correct: true },
        { text: "Last spring, the slide on our playground was painted bright red." },
        { text: "Many students in my class like to play kickball in the big field." },
        { text: "Our parent club meets in the school library on Tuesday nights." }
      ],
      clue: "First, find each of the author's reasons. Then choose the fact that proves one of them.",
      why: "The answer is \"Last spring, a robin built a nest in a tree across the street from our school.\" One reason is that trees would bring wildlife to the school, and a robin nesting in a tree nearby shows that trees bring birds. The slide, kickball and parent club meetings do not support either reason: they are not about shade or about wildlife." },
    { id: "SK-TT3a-T6", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why does the author include paragraph 4?",
      choices: [
        { text: "to answer people who might disagree with planting trees", correct: true },
        { text: "to give a new reason that trees would bring wildlife" },
        { text: "to explain how shade keeps the playground cooler" },
        { text: "to state the author's opinion for the first time" }
      ],
      clue: "Read the first words of paragraph 4. Whose idea is the author talking about there, and how does the author reply?",
      why: "The answer is to answer people who might disagree with planting trees. Paragraph 4 starts with what some people say, that trees cost too much, and then the author explains how the parent club could raise the money. Wildlife is paragraph 3, shade is paragraph 2, and the opinion is first stated in paragraph 1." }
  ]
});

PP.addLesson({
  code: "3.T.T.3.c",
  title: "Writing an opinion piece: opinion, reasons, linking words and a conclusion",
  teach: {
    big: "A strong opinion piece states your opinion, explains each reason with facts or examples, links ideas with words like because, and ends by saying your opinion again.",
    points: [
      "Begin by introducing the topic. That means telling the reader what the draft is about. Then state your opinion clearly in one sentence, like \"I think our class should start a garden.\"",
      "Give reasons. A reason tells WHY your opinion is a good one. When you write on your own, you think of the reasons yourself. On the Milestones, the writing task usually gives you the reasons (the rubric calls them the provided reasons). Either way, explain each reason with facts and examples, in your own words.",
      "Link your ideas with words like because, therefore, also, for example, in addition and as a result. Because joins your opinion or a reason to the facts that explain it.",
      "End with a conclusion. Say your opinion again and sum up your reasons. Do not start a new idea at the end."
    ],
    words: [
      { term: "introduce", means: "tell the reader what the topic is" },
      { term: "linking words", means: "words like because, also and therefore that connect ideas" },
      { term: "conclusion", means: "the ending that sums up your opinion and reasons" }
    ],
    example: {
      label: "Example",
      lines: ["Should kids help cook dinner? I think kids should help cook dinner at home. One reason is that cooking teaches math, because you measure with cups and spoons. Also, cooking is a fun way to spend time with your family. Therefore, because cooking teaches math and brings families together, every family should invite kids into the kitchen."],
      note: "The first sentence introduces the topic. The second states the opinion. Because explains the first reason with an example. Also adds a second reason. Therefore starts the conclusion, which sums up both reasons and says the opinion again."
    },
    tip: "On the test, you will fix a student's draft. You may pick the best opinion sentence, the best linking word, the best evidence for a reason, or the best ending. You may also match each sentence to its job."
  },
  learn: [
    {
      show: ["Topic: Should our class read outside on sunny days?", "Sentence 0: Reading is something our class does every day.", "Sentence 1: Some classes at our school read outside.", "Sentence 2: I think our class should read outside on sunny days.", "Sentence 3: Do you like to read on sunny days?"],
      ask: "Which sentence is the best opinion statement for this topic, and which one introduces it?",
      steps: [
        "An introduction tells the reader what the topic is. Sentence 0 names reading, so it introduces the topic.",
        "An opinion statement tells what the writer thinks or wants. Look for clue words like I think and should.",
        "Sentence 1 is a fact about other classes. It does not say what the writer wants.",
        "Sentence 3 is a question. A question can start an essay, but it does not tell the reader your opinion."
      ],
      answer: "Sentence 2 is the best opinion statement, because it clearly tells what the writer thinks the class should do. Sentence 0 introduces the topic."
    },
    {
      show: ["Opinion: Our school should have a garden.", "Reason you are given: A garden would help students learn.", "Fact from a passage: Students in a garden can watch seeds sprout and grow."],
      ask: "How can you explain this reason with evidence, and which linking word joins the pieces?",
      steps: [
        "Start with the reason you were given: A garden would help students learn.",
        "Add because, and then tell the fact in your own words: because we could watch seeds sprout and grow. Because joins a reason to the fact that explains it. In addition would add another reason instead.",
        "Add one more sentence that tells why the fact matters: Seeing it for ourselves would help us remember."
      ],
      answer: "A garden would help students learn because we could watch seeds sprout and grow. Seeing it for ourselves would help us remember."
    },
    {
      show: ["Opinion: Our town should build a splash pad at the park.", "Reason 1: It would help kids stay cool in the summer.", "Reason 2: It would give families a fun place to play.", "Ending A: Some splash pads have buckets that tip over.", "Ending B: A splash pad would keep kids cool and give families a fun place to play, so our town should build one."],
      ask: "Which ending is the better conclusion?",
      steps: [
        "A conclusion says the opinion again and sums up the reasons.",
        "Ending A adds a new detail about buckets. It does not repeat the opinion or the reasons.",
        "Ending B names both reasons and says the town should build one. It wraps up the whole piece."
      ],
      answer: "Ending B is the better conclusion, because it sums up both reasons and states the opinion again."
    }
  ],
  write: {
    prompt: ["Should kids have a job at home, like feeding a pet or setting the table?", "Write a short opinion paragraph. Start with your opinion. Then give two reasons. You can use these reasons, or think of one of your own: Jobs teach kids to be responsible. Jobs help the whole family. Explain each reason with because and an example. End with a sentence that says your opinion again."],
    checklist: [
      "I stated my opinion in the first sentence.",
      "I gave two reasons and used because to explain each one.",
      "I added an example for each reason.",
      "I ended with a sentence that says my opinion again."
    ],
    rows: 8
  },
  parent: "At dinner, ask your child's opinion on a small family choice, like what to do this weekend. Have them say it as \"I think ___ because ___,\" give a second reason, and finish with \"So that is why ___.\"",
  passages: [
    { id: "p1", draft: true, title: "More Time for Recess", byline: "Ava's first draft", genre: "Student draft (opinion)",
      paragraphs: [
        ["(1) At Riverbend Elementary, recess lasts only fifteen minutes.", "(2) That is barely enough time to get one turn on the swings before the bell rings."],
        ["(3) Recess is good for our bodies.", "(4) Running, jumping, and climbing make our hearts and muscles stronger.", "(5) When recess is short, we sit more and move less."],
        ["(6) Recess helps us make friends.", "(7) At recess, we learn to take turns and share the playground.", "(8) Last week, two new students joined our kickball game.", "(9) Now they sit with us at lunch every day, and we have fun together."],
        ["(10) Recess is fun."]
      ] },
    { id: "p2", draft: true, title: "Water Bottles in Room 8", byline: "Malik's first draft", genre: "Student draft (opinion)",
      paragraphs: [
        ["(1) In Room 8, students are not allowed to keep water bottles at their desks.", "(2) When we are thirsty, we have to walk down the hall to the water fountain.", "(3) Water bottles are something to think about."],
        ["(4) Our bodies need water to work well.", "(5) When we play hard at recess, we sweat and lose water.", "(6) A bottle at our desk would let us drink whenever we are thirsty."],
        ["(7) Water bottles would save class time.", "(8) Yesterday, half of our class lined up at the fountain after recess.", "(9) We waited ten minutes before math could start."],
        ["(10) I like water."]
      ] },
    /* B4-b4a passages begin */
    { id: "p3", draft: true, title: "A Crossing Sign on Cedar Road", byline: "Nia's first draft", genre: "Student draft (opinion)",
      paragraphs: [
        ["(1) Many students at Hillcrest Elementary walk to school on Cedar Road.", "(2) At the corner by the park, there is no sign to tell drivers that children are crossing."],
        ["(3) A sign would help drivers see us.", "(4) Cars often drive past quickly when children are waiting at the corner.", "(5) Last Monday, two cars drove past without slowing down while we waited at the corner."],
        ["(6) A sign would make younger students feel safe.", "(7) They would know that drivers have been told to watch for them.", "(8) Our crossing guard, Mr. Greene, says the smallest children often freeze at the curb because they are not sure drivers see them."],
        ["(9) A sign is a good idea."]
      ] },
    { id: "p4", draft: true, title: "Board Games on Fridays", byline: "Marcus's first draft", genre: "Student draft (opinion)",
      paragraphs: [
        ["(1) My family has a shelf full of board games, but we hardly ever play them.", "(2) I think my family should have game night every Friday."],
        ["(3) Game night would bring us closer together.", "(4) Everyone would put away their phones and sit at the same table.", "(5) Last month, we played one game on a rainy day, and Grandpa told funny stories the whole time."],
        ["(6) Game night would also help us practice math.", "(7) That would be a great way to spend a Friday night."],
        ["(8) So let's start game night this Friday, because it brings us together and helps us practice math."]
      ] },
    { id: "p5", draft: true, title: "Moon Watch Night", byline: "Eli's first draft", genre: "Student draft (opinion)",
      paragraphs: [
        ["(1) Our school has a big field behind the gym.", "(2) The moon looks bright there on a clear night.", "(3) I think our school should hold a moon watch night on the field."],
        ["(4) Looking at the moon would help us learn about the sky.", "(5) We could draw its shape and see how it changes from week to week.", "(6) The field is wide, so many families could sit on blankets."],
        ["(7) A moon watch night would also be free for families.", "(8) It costs nothing, because the moon is already in the sky."],
        ["(9) A moon watch night is a good idea."]
      ] }
    /* B4-b4a passages end */
  ],
  practice: [
    { id: "SK-TT3c-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Ava's introduction does not tell the reader her opinion. Which sentence should be added after sentence 2 to state her opinion?",
      choices: [
        { text: "I think our school should make recess thirty minutes long.", correct: true },
        { text: "At some schools, recess happens in the morning, not after lunch." },
        { text: "Do you like to play outside after you finish your lunch?" },
        { text: "The swings are right next to the big oak tree by the fence." }
      ],
      clue: "An opinion statement tells what the writer thinks or wants. It is not a fact, a question or a detail about the playground.",
      why: "The answer is \"I think our school should make recess thirty minutes long.\" The words I think and should tell what Ava wants. The sentence about other schools is a fact, the lunch sentence is a question, and the swings sentence is a detail." },
    { id: "SK-TT3c-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Ava wants to add evidence to support the reason in sentence 3. Which sentence would best support that reason?",
      choices: [
        { text: "Our gym teacher, Mr. Shaw, says children need to be active every day to stay healthy.", correct: true },
        { text: "Some kids like to read quietly under the big tree during recess." },
        { text: "Making new friends is the very best part of going to school each day." },
        { text: "Our lunchroom serves chicken and rice on most Friday afternoons." }
      ],
      clue: "Read sentence 3 to find the reason. Then choose the sentence that gives a fact or example that proves it.",
      why: "The answer is \"Our gym teacher, Mr. Shaw, says children need to be active every day to stay healthy.\" Sentence 3 says recess is good for our bodies, and this fact explains why moving matters. Reading quietly is not about bodies, making friends belongs with the reason in sentence 6, and the lunch menu is off topic." },
    { id: "SK-TT3c-P3", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      prompt: "Ava wants to link her ideas. She will join sentences 3 and 4 with a linking word, and she will add a linking word to sentence 6. Choose the best word for each blank.",
      text: "(3) Recess is good for our bodies {0} running, jumping, and climbing make our hearts and muscles stronger. (6) Recess {1} helps us make friends.",
      slots: [
        { options: ["but", "or", "because", "until"], answer: 2 },
        { options: ["instead", "also", "never"], answer: 1 }
      ],
      clue: "For the first blank, ask: Does the second part tell why, show something different, or give a choice? For the second blank, ask: Is sentence 6 a new reason added to the first one?",
      why: "The first blank needs \"because\": running and climbing making us stronger is why recess is good for our bodies. \"But\" shows something different, \"or\" gives a choice, and \"until\" tells time. The second blank needs \"also\": sentence 6 adds a second reason. Instead would replace the first reason, and never would change Ava's meaning." },
    { id: "SK-TT3c-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Sentence 10 is a weak conclusion. Which sentence should replace sentence 10?",
      choices: [
        { text: "So let's make recess longer, because it keeps us healthy and helps us make friends.", correct: true },
        { text: "First, recess is good for our bodies because running makes our hearts stronger." },
        { text: "Some schools in our state have two recess times on every single school day." },
        { text: "My favorite game at recess is kickball, and I play it with my friends." }
      ],
      clue: "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
      why: "The answer is \"So let's make recess longer, because it keeps us healthy and helps us make friends.\" It repeats Ava's opinion and both reasons. The First sentence starts the reasons over, the sentence about other schools adds a new fact, and the kickball sentence is about Ava's favorite game." },
    { id: "SK-TT3c-P5", type: "order", points: 2, dok: 2, passages: [],
      prompt: "Jada is writing an opinion paragraph. Put her sentences in the best order.",
      steps: [
        "Our classroom has an empty corner by the window.",
        "I think we should turn it into a reading corner.",
        "First, a cozy spot would make reading more fun.",
        "Also, it would give us a quiet place to work.",
        "For all these reasons, a reading corner would be great for our class."
      ],
      clue: "An opinion piece goes: introduce the topic, state the opinion, give the reasons, then wrap up. Look at the linking words to see where each sentence fits.",
      why: "The order is: the empty corner (introduces the topic), I think we should turn it into a reading corner (the opinion), First (reason 1), Also (reason 2), and For all these reasons (the conclusion)." },
    { id: "SK-TT3c-P6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read Theo's opinion in the box. Theo needs to think of a reason on his own. Which sentence is the best reason to support his opinion?",
      stem: ["Opinion: Our playground should have a buddy bench, where kids can sit when they need someone to play with."],
      choices: [
        { text: "Kids who feel left out would have an easy way to find a friend.", correct: true },
        { text: "Our playground already has two slides and a big swing set." },
        { text: "I really think a buddy bench is a great idea." },
        { text: "Some kids like to eat their lunch outside on sunny days." }
      ],
      clue: "A reason tells WHY the opinion is a good idea. Ask of each sentence: Does it answer the question, why should the school do this?",
      why: "The answer is \"Kids who feel left out would have an easy way to find a friend.\" It tells why a buddy bench is a good idea. The slides sentence is a fact, but it does not explain why the playground needs a bench. \"I really think...\" only says the opinion again, and eating lunch outside is not about finding someone to play with." }
  ],
  /* ---------- B4-b4a begin ---------- */
  /* ---------- B4 (expansion 2026-10-22, author b4a; docs/expansion-2026-10-22/01-architecture.md 2.2-2.3) ----------
     Selected-response core (the Milestones assesses this standard through revise/edit items). The write task stays
     OUTSIDE the fifteen: it is adult-scored and never awards a pass. Set 1 uses two new items on Ava's draft (p1) and
     reuses P6, P5 and P4 by { ref }; set 2 uses p3 (community); set 3 uses p4 (family) and p5 (night sky).
     Practice Together is P1, P2 and P3. Hints and Show me how for P1-P6 are in addons.
     Author log: docs/expansion-2026-10-22/batches/B4-b4a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { id: "SK-TT3c-C01", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: ["p1"],
        prompt: "Ava wants to begin her draft with a sentence that tells the reader what the topic is. Which sentence should come before sentence 1?",
        choices: [
          { text: "Recess is the part of the school day when students go outside to play.", correct: true },
          { text: "Our school has a library, a gym, a music room and a big lunchroom." },
          { text: "I think students should get a much longer lunch break every day." },
          { text: "Last week, two new students joined our kickball game at recess." }
        ],
        clue: "An introduction tells the reader what the topic is. It should name the topic of the whole draft before the writer says what she thinks.",
        hints: [
          "An introduction tells the reader what the topic is. It should name the topic of the whole draft before the writer says what she thinks.",
          "Skim all four paragraphs and find the one thing every paragraph is about. Then check each choice against it.",
          "A sentence about lunch is about a different part of the school day. Look at the choices that are left."
        ],
        how: [
          "The first sentence should tell the reader what the whole draft is about.",
          "Every paragraph in Ava's draft is about time to play outside during the school day.",
          "The answer is: Recess is the part of the school day when students go outside to play.",
          "The sentence about the library, gym and music room lists places, the lunch sentence is about another part of the day, and the kickball sentence is a detail that belongs in the middle."
        ],
        misconception: "A common mix-up is choosing a sentence that is about the school. An introduction must name the topic of this draft.",
        why: "The answer is: Recess is the part of the school day when students go outside to play. It tells the reader the topic of the whole draft. The list of rooms and the lunch sentence are about other things, and the kickball sentence is a detail for the middle." },
      { id: "SK-TT3c-C02", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: ["p1"],
        prompt: "Ava wants to link her ideas in paragraph 3. Choose the best word or words for each blank.",
        text: "(7) At recess, we learn to take turns and share the playground. (8) {0}, last week two new students joined our kickball game. (9) {1}, they sit with us at lunch every day, and we have fun together.",
        slots: [
          { options: ["For example", "However", "Before that"], answer: 0 },
          { options: ["As a result", "Instead", "In conclusion"], answer: 0 }
        ],
        clue: "Linking words show how ideas connect. Ask how the next sentence connects to the one before it: does it show one case of the idea, show a different idea, or tell what happened because of it?",
        hints: [
          "Linking words show how ideas connect. Ask how the next sentence connects to the one before it: does it show one case of the idea, show a different idea, or tell what happened because of it?",
          "Read sentences 6 to 9 in order. For each blank, decide how the sentence with the blank connects to the sentence before it.",
          "\"Before that\" sends the reader back in time, but sentence 8 is an example of sharing the playground. Check the other words for that blank, and work out the second blank yourself."
        ],
        how: [
          "Sentence 7 says recess teaches kids to share. Sentence 8 shows one time it happened, so it is an example.",
          "Blank 1: \"For example\" connects an example to the idea before it. \"However\" shows a different idea, and \"Before that\" goes back in time.",
          "Blank 2: the new students now sit with Ava at lunch because they joined the game, so \"As a result\" shows that one thing led to the other.",
          "\"Instead\" would mean they sit somewhere else, and \"In conclusion\" belongs at the very end of the draft."
        ],
        misconception: "A common mix-up is choosing a linking word that sounds like an essay word. The word must match how the two sentences connect.",
        why: "Blank 1 needs \"For example\" because sentence 8 gives an example of sharing the playground. Blank 2 needs \"As a result\" because the new students sit with Ava at lunch since they joined the game. \"However,\" \"Before that,\" \"Instead\" and \"In conclusion\" do not fit how the sentences connect." },
      { ref: "SK-TT3c-P6" },
      { ref: "SK-TT3c-P5" },
      { ref: "SK-TT3c-P4" }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT3c-C06", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: ["p3"],
        prompt: "Nia's introduction does not tell the reader her opinion. Which sentence should be added after sentence 2 to state her opinion?",
        choices: [
          { text: "I think our town should put a crossing sign at the corner by the park.", correct: true },
          { text: "Cedar Road has two lanes for cars and a sidewalk on each side." },
          { text: "Do you feel nervous when you cross a busy street on your own?" },
          { text: "The corner by the park has a green bench and a tall maple tree." }
        ],
        clue: "An opinion statement tells what the writer thinks should happen. It is not a fact, a question or a detail about the place.",
        hints: [
          "An opinion statement tells what the writer thinks should happen. It is not a fact, a question or a detail about the place.",
          "Reread sentences 1 and 2 to see the problem Nia describes. Then ask which choice tells what she wants done about it.",
          "A question can start a draft, but it does not tell the reader what the writer thinks. Look at the choices that are left."
        ],
        how: [
          "Sentences 1 and 2 describe a problem: students walk on Cedar Road, and there is no sign for drivers.",
          "The opinion has to say what Nia thinks should be done. The words I think and should show that.",
          "The answer is: I think our town should put a crossing sign at the corner by the park.",
          "The sentence about lanes is a fact, the question does not say what Nia wants, and the bench and maple tree are a detail about the corner."
        ],
        misconception: "A common mix-up is choosing a sentence that sounds like part of the story. An opinion statement says what the writer wants.",
        why: "The answer is: I think our town should put a crossing sign at the corner by the park. The words I think and should tell what Nia wants done. The lanes sentence is a fact, the question does not tell her opinion, and the bench and tree are a detail." },
      { id: "SK-TT3c-C07", type: "ms", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: ["p3"], pick: 2,
        prompt: "Nia wants to add two more reasons to her draft. Which TWO sentences give a reason why a crossing sign is a good idea?",
        choices: [
          { text: "A sign would give our crossing guard some help when the corner gets busy.", correct: true },
          { text: "A sign would help parents feel good about letting younger kids walk to school.", correct: true },
          { text: "Cedar Road has two lanes for cars and a sidewalk on each side." },
          { text: "Do you want the children on your street to be safe when they walk?" },
          { text: "I think Cedar Road is the busiest street in our whole town." }
        ],
        clue: "A reason tells WHY the opinion is a good idea. A fact, a question or a plain opinion does not tell why.",
        hints: [
          "A reason tells WHY the opinion is a good idea. A fact, a question or a plain opinion does not tell why.",
          "Test each choice by asking: does this answer the question, why should the town put a sign on Cedar Road? Choose two.",
          "A question does not give a reason. It only asks the reader something. Look at the choices that are left."
        ],
        how: [
          "A reason has to explain why a sign is a good idea.",
          "Helping the crossing guard when the corner is busy is a reason, and so is helping parents feel good about letting younger kids walk.",
          "The answers are: A sign would give our crossing guard some help when the corner gets busy. And: A sign would help parents feel good about letting younger kids walk to school.",
          "The lanes sentence is only a fact, the question only asks something, and \"the busiest street\" is an opinion that does not say why a sign helps."
        ],
        misconception: "A common mix-up is picking a sentence that sounds strong. A reason must say why the opinion is a good idea.",
        why: "The answers are \"A sign would give our crossing guard some help when the corner gets busy\" and \"A sign would help parents feel good about letting younger kids walk to school.\" Each tells why a sign is a good idea. The lanes sentence is a fact, the question asks something, and \"the busiest street\" does not say why a sign helps." },
      { id: "SK-TT3c-C08", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: ["p3"],
        prompt: "Nia wants to link her ideas in paragraphs 2 to 4. Choose the best word or words for each blank.",
        text: "(5) Last Monday, two cars drove past without slowing down while we waited at the corner. (6) {0}, a sign would make younger students feel safe. (8) Our crossing guard, Mr. Greene, says the smallest children often freeze at the curb because they are not sure drivers see them. {1}, a crossing sign is a good idea for Cedar Road.",
        slots: [
          { options: ["In addition", "For example", "However"], answer: 0 },
          { options: ["Therefore", "Before that", "Instead"], answer: 0 }
        ],
        clue: "Linking words show how ideas connect. Ask whether the next sentence adds another reason, gives an example, shows a different idea, or sums up.",
        hints: [
          "Linking words show how ideas connect. Ask whether the next sentence adds another reason, gives an example, shows a different idea, or sums up.",
          "Read the sentence before each blank and the sentence after it. For each blank, decide how the two connect.",
          "\"Before that\" sends the reader back in time, but the last sentence sums up what came before it. Check the other words for that blank, and work out the first blank yourself."
        ],
        how: [
          "Sentences 3 to 5 give the first reason. Sentence 6 begins a second reason, so the word before it must add one more reason.",
          "Blank 1: \"In addition\" adds another reason. Sentence 6 is not an example of sentence 5, and \"However\" would show a different idea.",
          "Blank 2: the last sentence sums up the reasons, so \"Therefore\" fits because it shows a result of everything before it.",
          "\"Before that\" goes back in time and \"Instead\" means a change of plan."
        ],
        misconception: "A common mix-up is picking For example every time a sentence follows a story. An example must show the idea in the sentence before it, and sentence 6 is a new reason.",
        why: "Blank 1 needs \"In addition\" because sentence 6 adds a second reason. Blank 2 needs \"Therefore\" because the last sentence sums up the reasons. \"For example,\" \"However,\" \"Before that\" and \"Instead\" do not show how these sentences connect." },
      { id: "SK-TT3c-C09", type: "hottext", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: ["p3"], pick: 2,
        prompt: "Sentence 6 gives a reason: \"A sign would make younger students feel safe.\" Which TWO sentences are evidence that supports this reason? Choose the two sentences.",
        targets: ["p3:2:2", "p3:2:3", "p3:3:1", "p3:3:2", "p3:3:3", "p3:4:1"],
        answer: ["p3:3:2", "p3:3:3"],
        clue: "Evidence is a fact, an example or an expert's words that helps prove a reason. Ask which sentences explain why younger students would feel safe.",
        hints: [
          "Evidence is a fact, an example or an expert's words that helps prove a reason. Ask which sentences explain why younger students would feel safe.",
          "Find the reason in sentence 6, and read the sentences before and after it. Choose two.",
          "Sentence 9 sums up the whole draft, and sentence 6 is the reason itself. Check the sentences that are left."
        ],
        how: [
          "The reason is that a sign would make younger students feel safe, so the evidence must explain why.",
          "Sentence 7 says they would know drivers have been told to watch for them, and sentence 8 says the crossing guard has seen the smallest children freeze at the curb because they are not sure drivers see them.",
          "The answers are sentence 7 and sentence 8.",
          "Sentence 6 is the reason itself, sentences 4 and 5 are evidence for the first reason about drivers seeing students, and sentence 9 sums up the whole draft."
        ],
        misconception: "A common mix-up is choosing evidence for the wrong reason. Match each piece of evidence to the reason it explains.",
        why: "The answers are sentence 7, \"They would know that drivers have been told to watch for them,\" and sentence 8, \"Our crossing guard, Mr. Greene, says the smallest children often freeze at the curb because they are not sure drivers see them.\" Both explain why younger students would feel safe. Sentences 4 and 5 support the first reason, and sentence 9 is the ending." },
      { id: "SK-TT3c-C10", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: ["p3"],
        prompt: "Sentence 9 is a weak conclusion. Which sentence should replace sentence 9?",
        choices: [
          { text: "A sign would help drivers see us and keep us safe, so our town should put one up.", correct: true },
          { text: "First, a crossing sign would help drivers see us when we wait at the corner." },
          { text: "Mr. Greene has been the crossing guard at our school for many years now." },
          { text: "Our school also needs new swings and a bigger sandbox on the playground." }
        ],
        clue: "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
        hints: [
          "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
          "Reread the reasons in paragraphs 2 and 3 and Nia's opinion. Then check which choice wraps up the whole draft.",
          "A sentence that begins with \"First,\" starts the reasons over instead of ending them. Look at the choices that are left."
        ],
        how: [
          "A conclusion repeats the opinion and sums up the reasons.",
          "Nia's reasons are that a sign helps drivers see students and that it keeps younger students safe. Her opinion is that the town should put up a sign.",
          "The answer is: A sign would help drivers see us and keep us safe, so our town should put one up.",
          "The \"First\" sentence starts over with one reason, the sentence about Mr. Greene adds a new detail, and the swings sentence is a new idea."
        ],
        misconception: "A common mix-up is choosing a true sentence about the topic. A conclusion must say the opinion again and sum up the reasons.",
        why: "The answer is: A sign would help drivers see us and keep us safe, so our town should put one up. It sums up both reasons and says the opinion again. The First sentence starts over, the Mr. Greene sentence adds a detail, and the swings sentence is a new idea." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT3c-C11", type: "match", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: ["p4"],
        prompt: "What job does each sentence do in Marcus's draft? Match each sentence to its job. Use each job once.",
        cols: [
          "introduces the topic",
          "states the opinion",
          "gives a reason",
          "wraps up the opinion and reasons"
        ],
        rows: [
          { text: "So let's start game night this Friday, because it brings us together and helps us practice math.", answer: 3 },
          { text: "Game night would bring us closer together.", answer: 2 },
          { text: "My family has a shelf full of board games, but we hardly ever play them.", answer: 0 },
          { text: "I think my family should have game night every Friday.", answer: 1 }
        ],
        clue: "An opinion piece has an introduction, an opinion, reasons and a conclusion. Ask what job each sentence does.",
        hints: [
          "An opinion piece has an introduction, an opinion, reasons and a conclusion. Ask what job each sentence does.",
          "For each sentence, ask whether it tells the topic, tells what the writer wants, tells why, or sums up the whole draft.",
          "Look for the words I think or should. They show what the writer wants. Then work out the other rows."
        ],
        how: [
          "Sentence 1 tells about the games on the shelf, so it introduces the topic.",
          "Sentence 2 says what Marcus wants, with I think and should, so it states the opinion.",
          "Sentence 3 tells why game night is a good idea, so it gives a reason.",
          "Sentence 8 repeats the opinion and sums up both reasons, so it wraps up the draft."
        ],
        misconception: "A common mix-up is calling the first sentence the opinion. The introduction tells the topic, and the opinion says what the writer wants.",
        why: "Sentence 1 introduces the topic, sentence 2 states the opinion, sentence 3 gives a reason, and sentence 8 wraps up the opinion and reasons. Each sentence does a different job." },
      { id: "SK-TT3c-C12", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.3.c"], passages: ["p4"],
        prompt: "Marcus wants to add evidence after sentence 6 to explain how game night would help the family practice math. Choose the best answer for each blank.",
        text: "(6) Game night would also help us practice math. {0}, {1}",
        slots: [
          { options: ["For example", "However", "Before that"], answer: 0 },
          { options: [
              "when we play a game with points, someone has to add up everyone's score.",
              "most of our board games came in big boxes with lids and pictures on top.",
              "my cousin has a board game about spelling that has a spinner."
            ],
            answer: 0 }
        ],
        clue: "Evidence is a fact or a detail that helps explain a reason. It must connect to the reason, and the linking word must show how it connects.",
        hints: [
          "Evidence is a fact or a detail that helps explain a reason. It must connect to the reason, and the linking word must show how it connects.",
          "Read sentence 6 again. Ask what Marcus must show to prove that game night helps with math.",
          "A sentence about the size of the box tells about the games, not about math. Look at the choices that are left, and work out the first blank yourself."
        ],
        how: [
          "The reason in sentence 6 is that game night helps the family practice math. The evidence must show math happening.",
          "Adding up everyone's score is math, and it is an example of what happens when the family plays, so \"For example\" links them.",
          "Blank 2: when we play a game with points, someone has to add up everyone's score.",
          "The box and lid sentence is not about math, and the spelling game is a different subject."
        ],
        misconception: "A common mix-up is picking the sentence that sounds like a game. Evidence has to show the reason it supports.",
        why: "Blank 1 needs \"For example\" because the next sentence is an example of math. Blank 2 needs \"when we play a game with points, someone has to add up everyone's score,\" because that shows practicing math. The box sentence is about the games, and the spelling game is a different subject." },
      { id: "SK-TT3c-C13", type: "ms", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: ["p4"], pick: 2,
        prompt: "Marcus is trying out ways to link his ideas. Which TWO versions use a linking word that fits?",
        choices: [
          { text: "Game night would bring us together because everyone would sit at the same table.", correct: true },
          { text: "Game night would bring us together. In addition, it would help us practice math.", correct: true },
          { text: "Game night would bring us together, but everyone would sit at the same table." },
          { text: "Game night would bring us together. For example, it would help us practice math." },
          { text: "Game night would bring us together, or everyone would sit at the same table." }
        ],
        clue: "A linking word has to match how two ideas connect. Ask whether the second idea explains why, adds another idea, shows a difference, gives an example or gives a choice.",
        hints: [
          "A linking word has to match how two ideas connect. Ask whether the second idea explains why, adds another idea, shows a difference, gives an example or gives a choice.",
          "Read each version aloud, and ask whether the second part explains why, adds a new reason, shows an example, or gives a choice. Choose two.",
          "\"Or\" gives a choice, but sitting at the same table is not a choice to be made instead of coming together. Look at the choices that are left."
        ],
        how: [
          "For each version, decide how the second idea connects to the first.",
          "Sitting at the same table explains how game night brings the family together, so \"because\" fits. Practicing math is a second reason, so \"In addition\" fits.",
          "The answers are: Game night would bring us together because everyone would sit at the same table. And: Game night would bring us together. In addition, it would help us practice math.",
          "\"But\" shows a difference, \"or\" gives a choice, and practicing math is not an example of bringing us together."
        ],
        misconception: "A common mix-up is choosing a linking word because it sounds familiar. The word must match how the two ideas connect.",
        why: "The answers are \"Game night would bring us together because everyone would sit at the same table\" and \"Game night would bring us together. In addition, it would help us practice math.\" Because explains why, and in addition adds a second reason. But shows a difference, or gives a choice, and for example does not fit here." },
      { id: "SK-TT3c-C14", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.3.c"], passages: ["p5"],
        prompt: "Eli's draft ends with a weak conclusion. This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Which sentence should replace sentence 9 as a better conclusion?",
          choices: [
            { text: "Because it would help us learn and cost nothing, our school should hold a moon watch night.", correct: true },
            { text: "First, looking at the moon would help us learn about the sky, and we could draw its shape." },
            { text: "Many people around the world have looked at the moon for thousands of years." },
            { text: "I hope the sky is clear, because I love to look at the moon." }
          ] },
        partB: { prompt: "Which sentence from the draft gives evidence for the first reason in the conclusion you chose?",
          choices: [
            { text: "\"We could draw its shape and see how it changes from week to week.\"", correct: true },
            { text: "\"The moon looks bright there on a clear night.\"" },
            { text: "\"The field is wide, so many families could sit on blankets.\"" },
            { text: "\"It costs nothing, because the moon is already in the sky.\"" }
          ] },
        clue: "A conclusion says the opinion again and sums up the reasons. For Part B, evidence is a fact or an example that explains one reason.",
        hints: [
          "A conclusion says the opinion again and sums up the reasons. For Part B, evidence is a fact or an example that explains one reason.",
          "For Part A, find Eli's two reasons in paragraphs 2 and 3. For Part B, read the sentences near the reason you chose.",
          "A sentence that begins with \"First,\" starts the reasons over instead of wrapping them up. Look at the choices that are left in Part A, and make your Part B choice match."
        ],
        how: [
          "Eli's opinion is that the school should hold a moon watch night. His reasons are that it would help students learn and that it would be free.",
          "A conclusion repeats the opinion and sums up both reasons.",
          "Part A: Because it would help us learn and cost nothing, our school should hold a moon watch night. Part B: \"We could draw its shape and see how it changes from week to week.\"",
          "The First sentence starts over, the sentence about thousands of years adds a new fact, and the last sentence is a wish. In Part B, drawing the moon's shape is how students would learn."
        ],
        misconception: "A common mix-up is choosing evidence for a different reason. Part B must support the first reason in your Part A answer.",
        why: "Part A: Because it would help us learn and cost nothing, our school should hold a moon watch night. Part B: \"We could draw its shape and see how it changes from week to week.\" The conclusion repeats the opinion and sums up both reasons, and drawing the moon's shape is evidence for learning about the sky. The other sentences start over, add a new fact or are not evidence for that reason." },
      { id: "SK-TT3c-C15", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: ["p5"],
        prompt: "Eli wants to add one more sentence after sentence 8 to explain his second reason. Which sentence fits best?",
        choices: [
          { text: "That means every family could come, even if they cannot spend money.", correct: true },
          { text: "Many people like to look at the moon through a telescope." },
          { text: "I would love to see a big, bright full moon." },
          { text: "The moon is much smaller than the sun." }
        ],
        clue: "To explain a reason, tell why it matters. The new sentence should tell more about the same reason, not start a new idea.",
        hints: [
          "To explain a reason, tell why it matters. The new sentence should tell more about the same reason, not start a new idea.",
          "Reread sentences 7 and 8 to see what Eli's second reason is. Then ask which choice tells why it matters.",
          "A wish about seeing a full moon tells how Eli feels, not why the reason matters. Look at the choices that are left."
        ],
        how: [
          "The second reason is that a moon watch night would be free, and sentence 8 says it costs nothing.",
          "The new sentence should tell why that matters: families who cannot spend money could still come.",
          "The answer is: That means every family could come, even if they cannot spend money.",
          "The telescope sentence is a fact about other people, the full moon sentence is a wish, and the sentence about the sun is off the reason."
        ],
        misconception: "A common mix-up is choosing any sentence about the moon. A sentence that explains a reason must tell more about that reason.",
        why: "The answer is: That means every family could come, even if they cannot spend money. It explains why being free matters. The telescope sentence is about other people, the full moon sentence is a wish, and the sun sentence is off the reason." }
    ] }
  ] },
  similar: [
    { id: "SK-TT3c-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C01"],
      stem: [
        "(1) A salad bar would let kids pick foods they like.",
        "(2) We could add carrots, cucumbers, beans and apples.",
        "(3) Our school should add one next to the lunch line."
      ],
      prompt: "Pick the opening line that names the subject of this whole draft.",
      choices: [
        { text: "Lunch is when kids sit down to eat and chat with friends.", correct: true },
        { text: "Dessert should be served in the cafeteria every single day." },
        { text: "Carrots have a bright orange color and a crunchy bite." },
        { text: "The line for hot food was very long on Friday." }
      ],
      clue: "An introduction tells the reader what the topic is. It should name the topic of the whole draft before the writer says what she thinks.",
      hints: [
        "An introduction tells the reader what the topic is. It should name the topic of the whole draft before the writer says what she thinks.",
        "Read sentences 1 to 3 and find the one thing they are all about. Then check each choice against it.",
        "A sentence about dessert is about a different food choice. Look at the choices that are left."
      ],
      how: [
        "The first sentence should tell the reader what the whole draft is about.",
        "All three sentences are about what students eat at lunch and how a salad bar could change it.",
        "The answer is: Lunch is when kids sit down to eat and chat with friends.",
        "The dessert sentence is a different opinion, the carrot sentence is a detail for the middle, and the long line sentence is about a different problem."
      ],
      misconception: "A common mix-up is choosing a sentence about food. An introduction must name the topic of this draft.",
      why: "The answer is: Lunch is when kids sit down to eat and chat with friends. It tells the reader the topic of the whole draft. The dessert sentence is a different opinion, the carrot sentence is a detail, and the long line sentence is about a different problem." },
    { id: "SK-TT3c-S02", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C02"],
      stem: [
        "(1) Our class should write its own newspaper.",
        "(2) A newspaper would let every student share what is going on."
      ],
      prompt: "Fill each blank with the linking word or words that fit.",
      text: "(3) {0} every student could write a story, the paper would have news from every corner of our class. (4) {1}, a student who loves sports could report on the championship soccer game.",
      slots: [
        { options: ["Since", "Although", "Before"], answer: 0 },
        { options: ["For instance", "Meanwhile", "In the end"], answer: 0 }
      ],
      clue: "Linking words show how ideas connect. Ask how each new sentence connects to the ideas around it: does it give a reason, show a contrast, or give an example?",
      hints: [
        "Linking words show how ideas connect. Ask how each new sentence connects to the ideas around it: does it give a reason, show a contrast, or give an example?",
        "Read sentences 2 to 4 in order. For each blank, decide how that sentence connects to the idea before it.",
        "\"Although\" shows a contrast, but sentence 3 gives a reason the paper would have news from everywhere. Check the other words for the first blank, and work out the second blank yourself."
      ],
      how: [
        "Sentence 3 says why the paper would have news from every corner of the class: every student could write a story.",
        "Blank 1: \"Since\" joins a reason to what happens because of it. \"Although\" shows a contrast, and \"Before\" is about time.",
        "Blank 2: a sports student reporting on the big game is one case of a student sharing news, so \"For instance\" introduces an example.",
        "\"Meanwhile\" tells about something happening at the same time, and \"In the end\" sums up."
      ],
      misconception: "A common mix-up is choosing a linking word that sounds like an essay word. The word must match how the two sentences connect.",
      why: "Blank 1 needs \"Since\" because every student writing a story is the reason the paper would have news from everywhere. Blank 2 needs \"For instance\" because the sports reporter is an example. \"Although,\" \"Before,\" \"Meanwhile\" and \"In the end\" do not fit how the sentences connect." },
    { id: "SK-TT3c-S03", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-P6"],
      stem: ["Opinion: Our school should put a shade tent next to the ball field."],
      prompt: "Which choice gives the best reason to back up this opinion?",
      choices: [
        { text: "Players and fans could rest out of the hot sun between games.", correct: true },
        { text: "Our school has a field with a long white fence around it." },
        { text: "I truly believe a shade tent would be a great idea." },
        { text: "Some players wear blue shirts, and some wear red shirts." }
      ],
      clue: "A reason tells WHY the opinion is a good idea. Ask of each sentence: does it answer the question, why should the school do this?",
      hints: [
        "A reason tells WHY the opinion is a good idea. Ask of each sentence: does it answer the question, why should the school do this?",
        "Read the opinion in the box and picture a tent by the field. Then ask what each choice says about why it would help.",
        "A sentence that only says the opinion again does not give a reason. Look at the choices that are left."
      ],
      how: [
        "A reason must answer why the school should put a shade tent by the field.",
        "A tent gives shade, so players and fans can rest out of the hot sun, and that is why it helps.",
        "The answer is: Players and fans could rest out of the hot sun between games.",
        "The sentence about the fence is a fact, the \"I truly believe\" sentence repeats the opinion, and the sentence about shirts is only a detail."
      ],
      misconception: "A common mix-up is choosing a sentence that repeats the opinion with strong words. A reason says why.",
      why: "The answer is: Players and fans could rest out of the hot sun between games. It tells why a shade tent is a good idea. The fence sentence is a fact, \"I truly believe\" repeats the opinion, and the shirts sentence is only a detail." },
    { id: "SK-TT3c-S04", type: "order", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-P5"],
      prompt: "Tomas's paragraph is out of order. Rearrange it so it reads from opening to ending.",
      steps: [
        "Our playground has only one basketball hoop.",
        "I think our school should add another one.",
        "One reason is that long lines keep students waiting for a turn.",
        "Another reason is that two games could go on at once.",
        "So a second hoop would help everyone play more."
      ],
      clue: "An opinion piece goes: introduce the topic, state the opinion, give the reasons, then wrap up. Ask which job each sentence does.",
      hints: [
        "An opinion piece goes: introduce the topic, state the opinion, give the reasons, then wrap up. Ask which job each sentence does.",
        "Ask which sentence names the topic, which says what the writer wants, which gives the reasons and which sums up.",
        "The sentence that begins with So sums up the paragraph, so it belongs at the end. Use that to place that one sentence, then decide where the others go."
      ],
      how: [
        "The first sentence introduces the topic: the playground has one hoop.",
        "The second sentence states the opinion with I think and should.",
        "One reason and Another reason give the two reasons in that order, and So wraps up at the end.",
        "The order is: one hoop, I think we should add another one, one reason, another reason, so."
      ],
      misconception: "A common mix-up is putting the opinion last. The opinion comes near the beginning, and the conclusion says it again at the end.",
      why: "The order is: our playground has only one basketball hoop (introduces the topic), I think our school should add another one (the opinion), one reason is that long lines keep students waiting (reason 1), another reason is that two games could go on at once (reason 2), and so a second hoop would help everyone play more (the conclusion)." },
    { id: "SK-TT3c-S05", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-P4"],
      stem: [
        "(1) Our school should start a drama club. (2) Acting helps students learn to speak clearly in front of others. (3) A club would also give shy students a safe place to try new things. (4) Acting is fun."
      ],
      prompt: "Which choice would make a stronger ending than sentence 4?",
      choices: [
        { text: "A drama club would help us speak clearly and feel brave, so our school should start one.", correct: true },
        { text: "First, acting helps students learn to speak clearly in front of others." },
        { text: "Some stage plays use only two actors, while grand shows fill the theater with a huge cast and an orchestra." },
        { text: "My favorite costume is the purple cape with gold stars and a silver crown." }
      ],
      clue: "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
      hints: [
        "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
        "Reread sentences 1 to 3 to find the opinion and the two reasons. Then check which choice wraps up all of them.",
        "A sentence that begins with \"First,\" starts a reason over instead of ending the draft. Look at the choices that are left."
      ],
      how: [
        "A conclusion repeats the opinion and sums up the reasons.",
        "The opinion is that the school should start a drama club, and the reasons are speaking clearly and feeling brave.",
        "The answer is: A drama club would help us speak clearly and feel brave, so our school should start one.",
        "The First sentence starts a reason over, the sentence about the cast is a new fact, and the costume sentence is about the writer's favorite."
      ],
      misconception: "A common mix-up is choosing a true sentence about plays. A conclusion must say the opinion again and sum up the reasons.",
      why: "The answer is: A drama club would help us speak clearly and feel brave, so our school should start one. It repeats the opinion and sums up both reasons. The First sentence starts over, the cast sentence adds a fact, and the costume sentence is about the writer's favorite." },
    { id: "SK-TT3c-S06", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C06"],
      stem: [
        "(1) Many students wait at the bus stop on Mill Lane every morning.",
        "(2) When it rains, there is no roof to keep them dry."
      ],
      prompt: "Pick the sentence that tells what the writer wants for the stop.",
      choices: [
        { text: "I think a roofed shelter should be built at the stop on Mill Lane.", correct: true },
        { text: "Buses are big, and they stop at many corners in our town." },
        { text: "Have you ever waited outside on a cold or windy morning?" },
        { text: "The stop on Mill Lane sits beside a gas station, a mailbox and a faded yellow fence." }
      ],
      clue: "An opinion statement tells what the writer thinks should happen. It is not a fact, a question or a detail about the place.",
      hints: [
        "An opinion statement tells what the writer thinks should happen. It is not a fact, a question or a detail about the place.",
        "Reread sentences 1 and 2 to see the problem the writer describes. Then ask which choice tells what she wants done about it.",
        "A question can start a draft, but it does not tell the reader what the writer thinks. Look at the choices that are left."
      ],
      how: [
        "Sentences 1 and 2 describe a problem: students wait at a stop with no roof.",
        "The opinion has to say what the writer thinks should be done. The words I think and should show that.",
        "The answer is: I think a roofed shelter should be built at the stop on Mill Lane.",
        "The sentence about buses is a fact, the question does not say what the writer wants, and the gas station sentence is a detail."
      ],
      misconception: "A common mix-up is choosing a sentence that sounds like part of the story. An opinion statement says what the writer wants.",
      why: "The answer is: I think a roofed shelter should be built at the stop on Mill Lane. The words I think and should tell what the writer wants. The buses sentence is a fact, the question does not tell her opinion, and the gas station sentence is a detail." },
    { id: "SK-TT3c-S07", type: "ms", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: [], pick: 2, like: ["SK-TT3c-C07"],
      stem: [
        "Opinion: Our school should hold a book swap once a month, so students can trade books they have finished."
      ],
      prompt: "Choose the two sentences that give reasons for the writer's idea.",
      choices: [
        { text: "Students could get new books to read without spending any money.", correct: true },
        { text: "Students would meet classmates who like the same kinds of stories.", correct: true },
        { text: "Books can be about animals, space, sports or magic, and some have maps inside." },
        { text: "Have you ever read a book that made you laugh out loud?" },
        { text: "I think reading is the finest thing to do all year long." }
      ],
      clue: "A reason tells WHY the opinion is a good idea. A fact, a question or a plain opinion does not tell why.",
      hints: [
        "A reason tells WHY the opinion is a good idea. A fact, a question or a plain opinion does not tell why.",
        "Test each choice by asking: does this answer the question, why should the school hold a book swap? Choose two.",
        "A question does not give a reason. It only asks the reader something. Look at the choices that are left."
      ],
      how: [
        "A reason has to explain why a monthly book swap is a good idea for the school.",
        "Kids could trade for new books at no cost, and students would meet classmates who like the same stories. Both tell why.",
        "The answers are: Students could get new books to read without spending any money. And: Students would meet classmates who like the same kinds of stories.",
        "The sentence about book topics is only a fact, the question only asks something, and \"reading is the finest thing\" is an opinion that does not say why the school should hold a swap."
      ],
      misconception: "A common mix-up is picking a sentence that sounds strong. A reason must say why the opinion is a good idea.",
      why: "The answers are \"Students could get new books to read without spending any money\" and \"Students would meet classmates who like the same kinds of stories.\" Each tells why a book swap is a good idea. The book topics sentence is a fact, the question asks something, and the reading sentence does not say why." },
    { id: "SK-TT3c-S08", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C08"],
      stem: ["(1) Our school should open a school store."],
      prompt: "Which word best links the sentences at each blank?",
      text: "(2) A store would teach students about money. A student could count coins and give back change when a classmate buys a pencil or an eraser. (3) {0}, a store would raise money for new books. (4) {1}, a school store is a great idea.",
      slots: [
        { options: ["Besides", "Long ago", "However"], answer: 0 },
        { options: ["So", "Long before", "Otherwise"], answer: 0 }
      ],
      clue: "Linking words show how ideas connect. Ask whether the next sentence adds another reason, shows a different idea, goes back in time or sums up.",
      hints: [
        "Linking words show how ideas connect. Ask whether the next sentence adds another reason, shows a different idea, goes back in time or sums up.",
        "Read the sentence before each blank and the sentence after it. For each blank, decide how the two connect.",
        "\"Long ago\" goes back in time, but sentence 3 adds a reason now. Check the other words for the first blank, and work out the second blank yourself."
      ],
      how: [
        "Sentence 2 gives one reason: a store would teach students about money.",
        "Blank 1: sentence 3 adds a second reason, so \"Besides\" fits. \"Long ago\" goes back in time, and \"However\" shows a different idea.",
        "Blank 2: the last sentence sums up the reasons, so \"So\" shows a result of everything before it.",
        "\"Long before\" is a time phrase, and \"Otherwise\" would mean something bad happens if the school has no store."
      ],
      misconception: "A common mix-up is using the same linking word every time. Each word must match how those two sentences connect.",
      why: "Blank 1 needs \"Besides\" because sentence 3 adds a second reason. Blank 2 needs \"So\" because the last sentence sums up the reasons. \"Long ago,\" \"However,\" \"Long before\" and \"Otherwise\" do not show how these sentences connect." },
    { id: "SK-TT3c-S09", type: "ms", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: [], pick: 2, like: ["SK-TT3c-C09"],
      stem: [
        "(1) Our neighborhood should have a park clean-up day. (2) A clean park would be safer for children. (3) Last week, my cousin stepped on a piece of broken glass near the swings. (4) Volunteers could pick up glass and trash before anyone gets hurt. (5) Everyone likes parks. (6) I hope our neighbors will join me."
      ],
      prompt: "Sentence 2 is a reason. Pick the TWO sentences that prove it with facts or examples.",
      choices: [
        { text: "(3) Last week, my cousin stepped on a piece of broken glass near the swings.", correct: true },
        { text: "(4) Volunteers could pick up glass and trash before anyone gets hurt.", correct: true },
        { text: "(1) Our neighborhood should have a park clean-up day." },
        { text: "(5) Everyone likes parks." },
        { text: "(6) I hope our neighbors will join me." }
      ],
      clue: "Evidence is a fact, an example or an expert's words that helps prove a reason. Ask which sentences explain why a clean park is safer.",
      hints: [
        "Evidence is a fact, an example or an expert's words that helps prove a reason. Ask which sentences explain why a clean park is safer.",
        "Find the reason in sentence 2, and read the sentences that come after it. Choose two.",
        "Sentence 1 is the opinion, not evidence for the reason. Check the sentences that are left."
      ],
      how: [
        "The reason is that a clean park would be safer for children, so the evidence must show a danger or how cleaning removes it.",
        "The broken glass near the swings is an example of a danger, and picking up glass and trash before anyone gets hurt shows how cleaning makes it safer.",
        "The answers are \"(3) Last week, my cousin stepped on a piece of broken glass near the swings.\" and \"(4) Volunteers could pick up glass and trash before anyone gets hurt.\"",
        "Sentence 1 is the opinion, sentence 5 is a general statement, and sentence 6 is a wish."
      ],
      misconception: "A common mix-up is choosing the opinion as evidence. Evidence explains a reason with an example or a fact.",
      why: "The answers are \"(3) Last week, my cousin stepped on a piece of broken glass near the swings.\" and \"(4) Volunteers could pick up glass and trash before anyone gets hurt.\" Both support the reason that a clean park is safer. Sentence 1 is the opinion, sentence 5 is a general statement, and sentence 6 is a wish." },
    { id: "SK-TT3c-S10", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C10"],
      stem: [
        "(1) My family should take a walk after dinner. (2) Walking is good exercise for everyone. (3) Without screens, we could chat about our days. (4) Walks are nice."
      ],
      prompt: "Choose the sentence that should end this draft instead of \"Walks are nice.\"",
      choices: [
        { text: "A walk would give us exercise and talk time, so my family should take one each night.", correct: true },
        { text: "Also, a walk would give us time to talk without screens." },
        { text: "Our neighbor walks her spotted terrier down the hill, past the bakery and around the corner." },
        { text: "I like to wear my red sneakers whenever I go outside to walk." }
      ],
      clue: "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
      hints: [
        "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
        "Reread sentences 1 to 3 to find the opinion and the two reasons. Then check which choice wraps up all of them.",
        "A sentence that repeats one reason, such as the one about talking, does not sum up both of them. Look at the choices that are left."
      ],
      how: [
        "A conclusion repeats the opinion and sums up the reasons.",
        "The opinion is that the family should walk after dinner, and the reasons are exercise and time to talk.",
        "The answer is: A walk would give us exercise and talk time, so my family should take one each night.",
        "The \"Also\" sentence repeats one reason, the neighbor sentence is a new detail, and the red sneakers sentence is about the writer's shoes."
      ],
      misconception: "A common mix-up is choosing a sentence that is about walks. A conclusion must say the opinion again and sum up the reasons.",
      why: "The answer is: A walk would give us exercise and talk time, so my family should take one each night. It repeats the opinion and sums up both reasons. The \"Also\" sentence repeats one reason, the neighbor sentence is a new detail, and the sneakers sentence is about the writer's shoes." },
    { id: "SK-TT3c-S11", type: "match", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C11"],
      prompt: "Here are four sentences from a stretch-break draft. Link each to the job it does, using every job once.",
      cols: ["says what the writer wants", "tells why", "proves the reason", "sums up the piece"],
      rows: [
        { text: "After we stretched for two minutes on Tuesday, nearly every hand in the room shot up during reading time.", answer: 2 },
        { text: "I think our class should take a short stretch break every single morning.", answer: 0 },
        { text: "So a short stretch break would keep us awake, and our class should take one.", answer: 3 },
        { text: "A stretch break would help our sleepy bodies feel more awake.", answer: 1 }
      ],
      clue: "An opinion piece has an opinion, reasons, evidence and a conclusion. Ask what job each sentence does.",
      hints: [
        "An opinion piece has an opinion, reasons, evidence and a conclusion. Ask what job each sentence does.",
        "For each sentence, ask whether it says what the writer wants, tells why, shows an example that proves the reason, or sums up the draft.",
        "Look for the words I think or should. They show what the writer wants. Then work out the other rows."
      ],
      how: [
        "\"I think our class should take a short stretch break every single morning\" says what the writer wants, so it states the opinion.",
        "\"A stretch break would help our sleepy bodies feel more awake\" tells why, so it gives a reason.",
        "\"After we stretched for two minutes on Tuesday, nearly every hand in the room shot up during reading time\" is an example that proves the reason, so it gives evidence.",
        "\"So a short stretch break would keep us awake, and our class should take one\" repeats the opinion and sums up, so it closes the piece."
      ],
      misconception: "A common mix-up is calling the evidence a reason. A reason says why, and evidence is the example or fact that proves it.",
      why: "The \"I think\" sentence states the opinion, the sentence about sleepy bodies feeling more awake gives a reason, the sentence about hands shooting up during reading time gives evidence, and the \"So\" sentence closes the piece. Each sentence does a different job." },
    { id: "SK-TT3c-S12", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C12"],
      stem: ["(1) Our school should start a choir."],
      prompt: "Finish the evidence for sentence 2 by filling both blanks.",
      text: "(2) Singing together would help us listen to one another. {0} {1}",
      slots: [
        { options: ["For instance,", "In the past,", "At last,"], answer: 0 },
        { options: [
            "singers have to hear the voices beside them so that all the voices blend.",
            "our robes would be blue with a gold stripe on each sleeve.",
            "the music room has two pianos and a big window."
          ],
          answer: 0 }
      ],
      clue: "Evidence is a fact or a detail that helps explain a reason. It must connect to the reason, and the linking word must show how it connects.",
      hints: [
        "Evidence is a fact or a detail that helps explain a reason. It must connect to the reason, and the linking word must show how it connects.",
        "Read sentence 2 again. Ask what the writer must show to prove that singing together helps students listen.",
        "A sentence about the color of the robes tells about clothing, not about listening. Look at the choices that are left, and work out the first blank yourself."
      ],
      how: [
        "The reason in sentence 2 is that singing together helps students listen to one another. The evidence must show listening.",
        "Hearing the voices beside you so that all the voices blend is an example of listening, so \"For instance\" links them.",
        "Blank 2: singers have to hear the voices beside them so that all the voices blend.",
        "The robes sentence and the music room sentence are about the choir but not about listening."
      ],
      misconception: "A common mix-up is picking the sentence that sounds like a choir. Evidence has to show the reason it supports.",
      why: "Blank 1 needs \"For instance\" because the next sentence is an example of listening. Blank 2 needs \"singers have to hear the voices beside them so that all the voices blend,\" because that shows how singing together builds listening. The robes and music room sentences are not about listening." },
    { id: "SK-TT3c-S13", type: "ms", points: 2, dok: 2, std: ["3.T.T.3.c"], passages: [], pick: 2, like: ["SK-TT3c-C13"],
      stem: ["A student is writing about adding a bike rack near the front door."],
      prompt: "Which TWO sentences use a linking word correctly?",
      choices: [
        { text: "We should add a bike rack since many students ride their bikes to school.", correct: true },
        { text: "A rack would keep bikes neat. Also, it would stop bikes from blocking the doorway.", correct: true },
        { text: "We should add a bike rack, but many students ride their bikes to school." },
        { text: "A rack would keep bikes neat. Instead, it would stop bikes from blocking the doorway." },
        { text: "We should add a bike rack, until many students ride their bikes to school." }
      ],
      clue: "A linking word has to match how two ideas connect. Ask whether the second idea explains why, adds another idea, shows a difference, tells about time or replaces the first idea.",
      hints: [
        "A linking word has to match how two ideas connect. Ask whether the second idea explains why, adds another idea, shows a difference, tells about time or replaces the first idea.",
        "Read each version aloud, and ask how the second part connects to the first. Choose two.",
        "\"Until\" tells about time, but riding bikes is not a time the rack waits for. Look at the choices that are left."
      ],
      how: [
        "For each version, decide how the second idea connects to the first.",
        "Many students riding bikes explains why the school should add a rack, so \"since\" fits. Keeping the doorway clear is a second good thing a rack does, so \"Also\" fits.",
        "The answers are: We should add a bike rack since many students ride their bikes to school. And: A rack would keep bikes neat. Also, it would stop bikes from blocking the doorway.",
        "\"But\" shows a difference, \"until\" tells about time, and \"Instead\" would mean the rack replaces keeping bikes neat."
      ],
      misconception: "A common mix-up is choosing a linking word because it sounds familiar. The word must match how the two ideas connect.",
      why: "The answers are \"We should add a bike rack since many students ride their bikes to school\" and \"A rack would keep bikes neat. Also, it would stop bikes from blocking the doorway.\" Since explains why, and also adds another good thing. But shows a difference, until tells time, and instead would replace the first idea." },
    { id: "SK-TT3c-S14", type: "mc", points: 1, dok: 3, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C14"],
      stem: [
        "(1) Our school should add a sandbox for the little kids. (2) Digging and building in sand helps young kids use their hands and plan ahead. (3) Yesterday, a kindergartner at our school built a tunnel and then fixed it when it fell. (4) A sandbox would let the smallest kids share a quiet corner of the yard. (5) Sandboxes are nice."
      ],
      prompt: "Which closing line should take the place of sentence 5?",
      choices: [
        { text: "Sandboxes teach little kids to build and share, so we should add one at school.", correct: true },
        { text: "Another reason is that digging in sand helps young kids use their hands and plan." },
        { text: "Beach sand can be damp or powdery, and some grains look white while others look tan." },
        { text: "I hope my little sister gets a red bucket and a yellow shovel." }
      ],
      clue: "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
      hints: [
        "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
        "Find the opinion in sentence 1 and the two reasons in sentences 2 and 4. Then check which choice wraps up all of them.",
        "A sentence that begins with \"Another reason\" starts a reason over instead of ending the draft. Look at the choices that are left."
      ],
      how: [
        "A conclusion repeats the opinion and sums up the reasons.",
        "The opinion is to add a sandbox, and the reasons are learning with hands and playing together.",
        "The answer is: Sandboxes teach little kids to build and share, so we should add one at school.",
        "The \"Another reason\" sentence starts over with one reason, the sentence about wet and dry sand adds a new fact, and the bucket sentence is a personal wish."
      ],
      misconception: "A common mix-up is choosing a sentence that mentions sand. A conclusion must say the opinion again and sum up both reasons.",
      why: "The answer is: Sandboxes teach little kids to build and share, so we should add one at school. It repeats the opinion and sums up both reasons. The \"Another reason\" sentence starts over, the sand sentence adds a new fact, and the bucket sentence is a personal wish." },
    { id: "SK-TT3c-S15", type: "mc", points: 1, dok: 2, std: ["3.T.T.3.c"], passages: [], like: ["SK-TT3c-C15"],
      stem: [
        "(1) Our school should build a nature trail behind the gym. (2) Classes could visit the trail to look at plants and insects. (3) Students could draw what they find and write about it."
      ],
      prompt: "Choose the sentence that explains the writer's reason best. It would follow sentence 3.",
      choices: [
        { text: "Seeing real plants up close would help us remember what we learn.", correct: true },
        { text: "Many families like to walk on trails on the weekend." },
        { text: "I would love to find a big, shiny beetle." },
        { text: "Some trails are covered with wood chips or gravel." }
      ],
      clue: "To explain a reason, tell why it matters. The new sentence should tell more about the same reason, not start a new idea.",
      hints: [
        "To explain a reason, tell why it matters. The new sentence should tell more about the same reason, not start a new idea.",
        "Reread sentences 2 and 3 to see what the reason is. Then ask which choice tells why it matters.",
        "A wish about finding a beetle tells how the writer feels, not why the reason matters. Look at the choices that are left."
      ],
      how: [
        "The reason is that a trail gives classes a place to study plants and insects and to draw and write about them.",
        "The new sentence should tell why that matters: seeing real things up close helps students remember.",
        "The answer is: Seeing real plants up close would help us remember what we learn.",
        "The sentence about families is about other people, the beetle sentence is a wish, and the wood chips sentence is a detail about the path."
      ],
      misconception: "A common mix-up is choosing any sentence about trails. A sentence that explains a reason must tell more about that reason.",
      why: "The answer is: Seeing real plants up close would help us remember what we learn. It explains why a trail helps students learn. The families sentence is about other people, the beetle sentence is a wish, and the wood chips sentence is about the path." }
  ],
  addons: {
    "SK-TT3c-P1": {
      hints: [
        "An opinion statement tells what the writer thinks or wants. It is not a fact, a question or a detail about the playground.",
        "Reread sentences 1 and 2 to see the problem Ava describes. Then ask which choice tells what she wants done about it.",
        "A question can start a draft, but it does not tell the reader what the writer thinks. Look at the choices that are left."
      ],
      how: [
        "Sentences 1 and 2 describe the problem: recess is only fifteen minutes long.",
        "The opinion must say what Ava wants. The words I think and should show that.",
        "The answer is: I think our school should make recess thirty minutes long.",
        "The sentence about other schools is a fact, the lunch sentence is a question, and the swings sentence is a detail."
      ],
      misconception: "A common mix-up is choosing a sentence that is about recess. An opinion statement says what the writer wants." },
    "SK-TT3c-P2": {
      hints: [
        "Evidence is a fact or an example that helps prove a reason. Read sentence 3 to find the reason first.",
        "Sentence 3 is about our bodies. Ask which choice gives a fact that explains why recess matters for our bodies.",
        "A sentence about making friends goes with a different reason in the draft. Look at the choices that are left."
      ],
      how: [
        "Sentence 3 says recess is good for our bodies. The evidence must show why.",
        "A gym teacher saying children need to be active every day to stay healthy is an expert's fact that explains why moving matters.",
        "The answer is: Our gym teacher, Mr. Shaw, says children need to be active every day to stay healthy.",
        "Reading quietly is not about bodies, making friends goes with sentence 6, and the lunch menu is off topic."
      ],
      misconception: "A common mix-up is choosing a sentence that is about recess or school. Evidence must support the exact reason in sentence 3." },
    "SK-TT3c-P3": {
      hints: [
        "Linking words show how ideas connect. Ask whether the second part tells why, shows a difference, gives a choice, or adds another reason.",
        "Read sentences 3 to 6. For the first blank, ask how sentence 4 connects to sentence 3. For the second blank, ask what sentence 6 does for the whole draft.",
        "\"Until\" tells about time, but the first blank is about a reason. Check the other words, and work out the second blank yourself."
      ],
      how: [
        "Blank 1: running, jumping and climbing make our hearts and muscles stronger, which is why recess is good for our bodies, so the word must show a reason.",
        "\"Because\" joins a statement to the reason that explains it. \"But\" shows a difference, \"or\" gives a choice, and \"until\" tells time.",
        "Blank 2: sentence 6 adds a second reason, so \"also\" fits. \"Instead\" would replace the first reason, and \"never\" would change Ava's meaning.",
        "So the answers are because and also."
      ],
      misconception: "A common mix-up is picking a word that sounds smooth. The word must match how the two parts connect." },
    "SK-TT3c-P4": {
      hints: [
        "A conclusion says the opinion again and sums up the reasons. It does not start the reasons over or add a new idea.",
        "Reread Ava's opinion and her two reasons in paragraphs 2 and 3. Then check which choice wraps up all of them.",
        "A sentence that begins with \"First,\" starts a reason over instead of ending the draft. Look at the choices that are left."
      ],
      how: [
        "A conclusion repeats the opinion and sums up the reasons.",
        "Ava's opinion is that recess should be longer, and her reasons are that it keeps us healthy and helps us make friends.",
        "The answer is: So let's make recess longer, because it keeps us healthy and helps us make friends.",
        "The First sentence starts a reason over, the other-schools sentence adds a new fact, and the kickball sentence is about Ava's favorite game."
      ],
      misconception: "A common mix-up is choosing a true sentence about recess. A conclusion must say the opinion again and sum up the reasons." },
    "SK-TT3c-P5": {
      hints: [
        "An opinion piece goes: introduce the topic, state the opinion, give the reasons, then wrap up. Look at the linking words to see where each sentence fits.",
        "Ask which sentence names the topic, which says what the writer wants, which gives the reasons and which sums up.",
        "The sentence that begins with For all these reasons sums up the draft, so it belongs near the end. Use that to place that one sentence, then decide where the others go."
      ],
      how: [
        "The first sentence introduces the topic: the empty corner by the window.",
        "The second sentence states the opinion with I think and should.",
        "First and Also begin the reasons in that order, and For all these reasons wraps up at the end.",
        "The order is: the empty corner, I think we should turn it into a reading corner, First, Also, For all these reasons."
      ],
      misconception: "A common mix-up is putting the opinion last. The opinion comes near the beginning, and the conclusion says it again at the end." },
    "SK-TT3c-P6": {
      hints: [
        "A reason tells WHY the opinion is a good idea. Ask of each sentence: does it answer the question, why should the school do this?",
        "Read Theo's opinion again and picture a buddy bench on the playground. Then ask what each choice says about why it would help.",
        "A sentence that only says the opinion again does not give a reason. Look at the choices that are left."
      ],
      how: [
        "A reason must answer why the playground should have a buddy bench.",
        "A bench where kids can sit when they need someone to play with gives an easy way to find a friend, so the reason is that kids who feel left out could find friends.",
        "The answer is: Kids who feel left out would have an easy way to find a friend.",
        "The sentence about slides is a fact, \"I really think...\" repeats the opinion, and eating lunch outside is not about finding someone to play with."
      ],
      misconception: "A common mix-up is choosing a sentence that repeats the opinion with strong words. A reason says why." }
  },
  /* B4-b4a end ---------- */
  test: [
    { id: "SK-TT3c-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Sentence 3 does not clearly state Malik's opinion. Which sentence should replace sentence 3?",
      choices: [
        { text: "I think students in Room 8 should be allowed to keep water bottles at their desks.", correct: true },
        { text: "Some students in Room 8 bring water bottles to school in their backpacks every day." },
        { text: "The water fountain in our hall is right next to the library and the front office." },
        { text: "Have you ever felt thirsty in the middle of a long and busy math lesson?" }
      ],
      clue: "An opinion statement tells what the writer thinks should happen. Check each choice: is it a fact, a question, a detail, or an opinion?",
      why: "The answer is \"I think students in Room 8 should be allowed to keep water bottles at their desks.\" I think and should state Malik's opinion clearly. The backpack sentence and the fountain sentence are facts, and the question does not say what Malik wants." },
    { id: "SK-TT3c-T2", type: "dropdown", points: 2, dok: 2, passages: ["p2"],
      prompt: "Malik wants to add linking words. Choose the best words for each blank.",
      text: "(6) A bottle at our desk would let us drink whenever we are thirsty. {0}, we would stay healthy and ready to learn. (7) {1}, water bottles would save class time.",
      slots: [
        { options: ["However", "For example", "Therefore", "Before that"], answer: 2 },
        { options: ["In addition", "For example", "In conclusion", "Instead"], answer: 0 }
      ],
      clue: "For the first blank, ask: Is the new sentence a result of the one before it? For the second blank, ask: Is sentence 7 an example, an ending, or one more reason?",
      why: "The first blank needs \"Therefore\": staying healthy is the result of drinking whenever we are thirsty. However shows something different, For example gives an example, and Before that tells time. The second blank needs \"In addition\": sentence 7 adds a second reason. It is not an example, an ending, or a change of plan." },
    { id: "SK-TT3c-T6", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Malik wants to add a third reason in a new paragraph before sentence 10. Which sentence is the best new reason to support his opinion?",
      choices: [
        { text: "Using our own bottles would spread fewer germs than sharing one fountain.", correct: true },
        { text: "The water fountain in our hall was put in many years ago." },
        { text: "I really, really want to keep a water bottle at my desk." },
        { text: "Some water bottles can keep hot cocoa warm for hours." }
      ],
      clue: "A reason tells WHY the opinion is a good idea. Ask of each sentence: Does it answer the question, why should Room 8 allow water bottles?",
      why: "The answer is \"Using our own bottles would spread fewer germs than sharing one fountain.\" It gives a new reason why Room 8 should allow bottles. The fountain's age is a fact that does not explain why, \"I really, really want...\" only says the opinion again, and hot cocoa is off topic." },
    { id: "SK-TT3c-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Sentence 10 is a weak conclusion. Which sentence should replace sentence 10?",
      choices: [
        { text: "Water bottles would keep us healthy and save time, so Room 8 should allow them.", correct: true },
        { text: "First, our bodies need water to work well, especially after we play hard." },
        { text: "Some of my friends would rather drink juice than water with their lunch." },
        { text: "Our class also needs new pencils and erasers before spring break starts." }
      ],
      clue: "A conclusion says the opinion again and sums up the reasons. Which choice wraps up the whole piece?",
      why: "The answer is \"Water bottles would keep us healthy and save time, so Room 8 should allow them.\" It sums up both reasons and repeats the opinion. The First sentence starts a reason over, and the juice and pencil sentences bring in new ideas." },
    { id: "SK-TT3c-T5", type: "ms", points: 2, pick: 2, dok: 2, passages: [],
      stem: ["(1) Our school should start a music club. (2) Music helps kids learn to work together. (3) In a band, each player has to listen to the others to stay on the beat. (4) Last year, our chorus practiced as a team for weeks to sing at the town fair. (5) Music is the best subject in school. (6) I hope our principal says yes!"],
      prompt: "Lena wrote this paragraph. Which TWO sentences are evidence that supports the reason in sentence 2?",
      choices: [
        { text: "(3) In a band, each player has to listen to the others to stay on the beat.", correct: true },
        { text: "(4) Last year, our chorus practiced as a team for weeks to sing at the town fair.", correct: true },
        { text: "(1) Our school should start a music club." },
        { text: "(5) Music is the best subject in school." },
        { text: "(6) I hope our principal says yes!" }
      ],
      clue: "Read sentence 2 to find the reason. Then look for sentences with facts or examples that show music helps kids work together.",
      why: "The answers are sentence 3, \"In a band, each player has to listen to the others to stay on the beat,\" and sentence 4, \"Last year, our chorus practiced as a team for weeks to sing at the town fair.\" Both show kids working together through music. Sentence 1 is Lena's opinion, sentence 5 is another opinion, and sentence 6 is a wish, not evidence." }
  ]
});

PP.addLesson({
  code: "3.T.T.4.a",
  title: "How poems are built: lines, stanzas, rhyme and repetition",
  teach: {
    big: "Poems are built from lines and stanzas, and many use rhyme and repeated words in a pattern that helps you hear and feel the poem.",
    points: [
      "A line is one row of words in a poem. A stanza is a group of lines, like a paragraph in a story. A space comes between stanzas.",
      "Rhyming words end with the same sound, like cat and hat. Poets often put rhyming words at the ends of lines.",
      "To find the rhyme pattern, read the last word of each line in one stanza. Find which lines rhyme. Then check that the other stanzas use the same pattern. If a line's last word matches no other end word, that line does not rhyme with any line. If you change an end word, check whether its partner still rhymes.",
      "Repetition means using the same word or line again. It makes an idea stand out and gives the poem a beat. Some repeated words copy a sound. When a repeated line changes, ask what has changed in the poem.",
      "Each stanza often has its own job. One may set the scene, and the next may show what happens or how things change. A new stanza often starts when something new happens. To compare two poems, check the same thing in each one, such as the rhyme pattern or the number of stanzas and lines."
    ],
    words: [
      { term: "line", means: "one row of words in a poem" },
      { term: "stanza", means: "a group of lines in a poem" },
      { term: "rhyme pattern", means: "which lines rhyme with each other (also called the rhyme scheme)" },
      { term: "repetition", means: "using the same word or line more than once" }
    ],
    example: {
      label: "Example: one stanza",
      lines: ["Hop, hop, hop, the bunny goes,", "Across the yard on tiny toes.", "Hop, hop, hop, past the gate,", "He's going home, it's getting late."],
      note: "This stanza has four lines. Lines 1 and 2 rhyme (goes, toes), and lines 3 and 4 rhyme (gate, late). The repeated words Hop, hop, hop help you hear the bunny bouncing along."
    },
    tip: "On the test, you may be asked which lines rhyme, what a stanza is mostly about, or why the poet repeats a word or line. Count stanzas by the spaces between them, and read the line endings out loud."
  },
  learn: [
    {
      show: ["My dog runs out to greet the day,", "He barks at birds and wants to play.", "He digs a hole beside the gate,", "Then naps until it's almost eight."],
      ask: "What is the rhyme pattern in this stanza?",
      steps: [
        "Read only the last word of each line: day, play, gate, eight.",
        "Say them out loud and listen for matching end sounds. Day and play match. Gate and eight match, even though they are spelled differently.",
        "Rhyme is about sound, not spelling. Now say which lines go together."
      ],
      answer: "Lines 1 and 2 rhyme, and lines 3 and 4 rhyme."
    },
    {
      show: ["Look up, look up, the geese fly by,", "A long, long V across the sky.", "Look up, look up, they honk and cry,", "They're flying south, so wave goodbye!"],
      ask: "Why does the poet repeat the words Look up, look up?",
      steps: [
        "Find the words that are said more than once: Look up, look up starts two lines.",
        "Think about what the words tell the reader to do. They tell us to look at the sky.",
        "Ask what the repetition adds. Saying it twice, again and again, makes it feel exciting, like someone pointing and calling out."
      ],
      answer: "The repetition makes the reader feel the excitement of spotting the geese, like someone pointing up and calling out to look."
    },
    {
      show: ["Stanza 1:", "The seed sleeps in the cold, dark ground.", "I water it each day.", "I sit and watch, and watch, and wait.", "Grow, little seed, I say.", "Stanza 2:", "A green sprout pokes up through the dirt.", "It reaches for the sun.", "I clap my hands and shout hooray!", "Hello, little sprout! You've begun."],
      ask: "How is this poem built, and why does the last line change in stanza 2?",
      steps: [
        "Count the groups of lines: two stanzas with four lines each. Stanza 1 is about waiting. Stanza 2 starts when something new happens: the sprout comes up.",
        "Read the end words. Day and say rhyme, and sun and begun rhyme, so lines 2 and 4 rhyme in both stanzas. Ground and wait have no partner.",
        "Find what repeats. The last line of each stanza talks to the seed, but in stanza 2, Grow changes to Hello.",
        "Ask why the repeated line changes. The seed has sprouted, so the speaker stops asking it to grow and greets it instead."
      ],
      answer: "The poem has two stanzas of four lines, and lines 2 and 4 rhyme. The last line changes from \"Grow, little seed\" to \"Hello, little sprout\" because the seed has finally sprouted."
    }
  ],
  parent: "Read a short rhyming poem or song lyric aloud together. Have your child clap once at the end of each line, call out the rhyming words, and point to any word or line that repeats.",
  passages: [
    { id: "p1", title: "Tap, Tap, Tap", byline: "", genre: "Poem",
      lines: [
        ["Tap, tap, tap goes the rain,", "Drumming on the roof all night.", "I pull my blanket to my chin", "And snuggle in, warm and tight."],
        ["Tap, tap, tap goes the rain,", "Puddles growing in the yard.", "The thirsty garden drinks it up,", "And still the rain falls hard."],
        ["Tap, tap, tap goes the rain,", "Softer now, and then no sound.", "The morning sun comes peeking out", "To dry the soggy ground."]
      ] },
    { id: "p2", title: "My Kite", byline: "", genre: "Poem",
      lines: [
        ["I run across the windy hill.", "My kite is lying flat and still.", "Then a gust comes rushing by,", "And up it jumps into the sky!"],
        ["Higher, higher, past the trees,", "It dips and dances in the breeze.", "Its tail goes swishing left and right.", "I hold the string with all my might."],
        ["Higher, higher, near the sun,", "I laugh and shout and start to run.", "But when the wind grows calm at last,", "My kite floats down, but not too fast."]
      ] },
    /* PP-004 form B passages: used only by testB. p3 rhymes ABAB (form A's poem is AABB and
       the practice poem is ABCB); p4 is a one-stanza ABCB poem for a single rhyme item.
       Needs independent review. */
    { id: "p3", title: "Firefly Night", byline: "", genre: "Poem",
      lines: [
        ["The sun slips down behind the hill,", "The sky turns pink, then gray.", "The yard grows dark and very still,", "And day has gone away."],
        ["Then blink, blink, blink, a tiny light", "Floats up beside the tree.", "Then blink, blink, blink, a spark so bright", "Comes drifting close to me."],
        ["I cup one gently, soft and slow,", "And peek inside my hands.", "Then blink, blink, blink, I let it go", "To where the tall grass stands."]
      ] },
    { id: "p4", title: "Snail Climb", byline: "", genre: "Poem",
      lines: [
        ["A snail crawled up our garden wall,", "As slow as slow can be.", "It inched and inched to reach the top,", "Then looked right down at me."]
      ] },
    /* B1 (expansion 2026-10-22, author b1c): poems p5-p8 are used only by core set 1 (p5),
       set 2 (p6, plus p5 for one compare item) and set 3 (p7, p8). Never used by test or testB.
       NEEDS INDEPENDENT REVIEW. */
    { id: "p5", title: "Flip!", byline: "", genre: "Poem",
      lines: [
        ["Sizzle, sizzle, on the pan,", "Dad flips a pancake—yes, he can!", "It lands back down without a sound,", "A perfect circle, soft and round."],
        ["Sizzle, sizzle, now it's me.", "I hold my breath and count to three.", "I flip it high—oh no, oh no!", "It lands half on the stove below."],
        ["We laugh so hard we have to sit.", "The dog gets breakfast: every bit!"]
      ] },
    { id: "p6", title: "Double Dutch at Recess", byline: "", genre: "Poem",
      lines: [
        ["The ropes go swinging, round and round.", "They slap, slap, slap against the ground.", "I rock and wait from heel to toe.", "One, two, three... and in I go!"],
        ["My feet are quick, my braids fly high.", "I leap so high I touch the sky.", "My friends all chant, \"Don't stop! Don't stop!\"", "I hop, hop, hop, and hop, hop, hop."],
        ["The bell rings out. The ropes fall still.", "I'm out of breath, but what a thrill!", "Tomorrow, when it's time to play,", "We'll turn the ropes again. Hooray!"]
      ] },
    { id: "p7", title: "Spin, Spider, Spin", byline: "", genre: "Poem",
      lines: [
        ["Out by the shed where the tall weeds grow,", "A spider climbs a stem so thin.", "She lets one silver thread hang low—", "Spin, spider, spin!"],
        ["She hooks it on the garden gate.", "She circles out, then circles in.", "The sun is hot, the hour is late—", "Spin, spider, spin!"],
        ["At dawn, the web is strung with dew.", "She sits beside the gate.", "A fly comes buzzing into view—", "Wait, spider, wait."]
      ] },
    { id: "p8", title: "Game Night", byline: "", genre: "Poem",
      lines: [
        ["At five o'clock, the ballpark's still.", "The seats are bare and gray.", "A worker sweeps the empty rows.", "Tonight the Comets play!"],
        ["At seven o'clock, the ballpark's loud.", "The seats are packed and bright.", "The hot dogs pass from hand to hand", "Beneath the stadium light."],
        ["At ten o'clock, the ballpark's calm.", "The crowd has gone away.", "The worker sweeps the rows once more", "And yawns, \"Good game today.\""]
      ] },
    /* Expansion 2026-10-22 (batch SIM-1): p9 is used only by a similar item. NEEDS INDEPENDENT REVIEW. */
    { id: "p9", title: "The Ice Cream Truck", byline: "", genre: "Poem",
      lines: [
        ["The afternoon is hot and slow.", "I hear a tune. I jump up. Go!", "The ice cream truck is down our street.", "I run to find a frosty treat."],
        ["I count my coins. I count them twice.", "The driver says, \"That's the price.\"", "I choose a cone with sprinkles on.", "I lick it fast, and then it's gone."],
        ["The truck rolls on. The song grows small.", "I sit and sigh by the garden wall.", "I'll save my coins for another day", "And wait right here for the truck to play."]
      ] }
  ],
  practice: [
    { id: "SK-TT4a-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "Which sentence best describes the rhyme pattern in \"Tap, Tap, Tap\"?",
      choices: [
        { text: "In each stanza, lines 2 and 4 rhyme.", correct: true },
        { text: "In each stanza, lines 1 and 2 rhyme." },
        { text: "In each stanza, lines 1 and 3 rhyme." },
        { text: "In each stanza, all four lines rhyme." }
      ],
      clue: "Pick one stanza. Read the last word of each line out loud. Which two end words sound alike? Then check the other stanzas.",
      why: "The answer is \"In each stanza, lines 2 and 4 rhyme.\" In stanza 1, night rhymes with tight. In stanza 2, yard rhymes with hard. In stanza 3, sound rhymes with ground. Lines 1 and 3 do not rhyme." },
    { id: "SK-TT4a-P2", type: "hottext", points: 2, dok: 1, passages: ["p1"],
      prompt: "Which TWO lines in stanza 2 rhyme with each other? Choose two lines in the poem.",
      targets: ["p1:2:1", "p1:2:2", "p1:2:3", "p1:2:4"],
      answer: ["p1:2:2", "p1:2:4"], pick: 2,
      clue: "Read only the last word of each line in stanza 2 out loud. Listen for two that end with the same sound.",
      why: "The answer is \"Puddles growing in the yard.\" and \"And still the rain falls hard.\" Yard and hard rhyme. That matches the pattern in the rest of the poem: lines 2 and 4 rhyme." },
    { id: "SK-TT4a-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does the poet begin every stanza with the line \"Tap, tap, tap goes the rain\"?",
      choices: [
        { text: "to help the reader hear the steady sound of the rain again and again", correct: true },
        { text: "to show that the rain stops before the end of the very first stanza" },
        { text: "to show that the speaker is afraid of the storm and cannot sleep" },
        { text: "to tell the reader that the garden needs much more water to grow" }
      ],
      clue: "Say the line out loud. Why might a poet start every stanza with the very same line?",
      why: "The answer is \"to help the reader hear the steady sound of the rain again and again.\" Tap, tap, tap sounds like rain on a roof, and repeating it makes the rain feel steady. The rain keeps falling in stanza 2, the speaker is snug, not afraid, and the garden is drinking, not needing more." },
    { id: "SK-TT4a-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Each stanza has its own job in the poem. Match each sentence to the stanza it describes.",
      cols: ["Stanza 1", "Stanza 2", "Stanza 3"],
      rows: [
        { text: "The rain stops, and the sun comes out.", answer: 2 },
        { text: "The speaker gets cozy in bed while it rains.", answer: 0 },
        { text: "Water fills the yard and the garden.", answer: 1 }
      ],
      clue: "Read one stanza at a time. Ask: What is happening here? What time of day is it?",
      why: "Stanza 1: the speaker gets cozy in bed while it rains. Stanza 2: water fills the yard and the garden. Stanza 3: the rain stops, and the sun comes out. Each stanza moves the poem forward in time." },
    { id: "SK-TT4a-P5", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does the poem change from stanza 1 to stanza 3?",
        choices: [
          { text: "It moves from a rainy night to a sunny morning.", correct: true },
          { text: "It moves from a sunny day to a stormy night." },
          { text: "It moves from a warm bed to a walk in the garden." },
          { text: "It moves from a calm night to a loud storm." }
        ] },
      partB: { prompt: "Which line from the poem best supports the answer to Part A?",
        choices: [
          { text: "\"The morning sun comes peeking out\"", correct: true },
          { text: "\"I pull my blanket to my chin\"" },
          { text: "\"The thirsty garden drinks it up,\"" },
          { text: "\"And still the rain falls hard.\"" }
        ] },
      clue: "Compare the start of the poem with the end. What time is it in stanza 1? What time is it in stanza 3? Then find the line that shows the change.",
      why: "Part A: It moves from a rainy night to a sunny morning. Part B: \"The morning sun comes peeking out\". Stanza 1 says the rain drums all night, and stanza 3 ends with the morning sun drying the ground." }
  ],
  /* ---------- B1 (expansion 2026-10-22, author b1c; docs/expansion-2026-10-22/01-architecture.md §2.2-2.3) ----------
     core: fifteen new items in three sets of five (C01-C15, numbered by place in the fifteen).
     No Try item is referenced: P4 (stanza jobs) and P5 (how the poem changes) are both about the same
     three stanzas of "Tap, Tap, Tap", so either one's Show me how gives away the other. Both stay in
     Practice Together (P1-P5), and core starts on new poems.
     Hints and Show me how for the Together items are in addons below.
     Author log: docs/expansion-2026-10-22/batches/B1-b1c-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { id: "SK-TT4a-C01", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.4.a"], passages: ["p5"],
        prompt: "Complete the sentences about the rhymes in \"Flip!\" Choose the best answer for each blank.",
        text: "In \"Flip!\" the rhyming words come {0}. For example, {1} make one rhyming pair.",
        slots: [
          { options: ["in pairs of lines next to each other", "in every other line, like lines 1 and 3", "only in the very last stanza"], answer: 0 },
          { options: ["sound and round", "me and no", "pan and sound"], answer: 0 }
        ],
        clue: "To find the rhyme pattern, read the last word of each line out loud and listen for matching endings.",
        hints: [
          "To find the rhyme pattern, read the last word of each line out loud and listen for matching endings.",
          "Say the four end words of stanza 2 out loud, in order. Notice where each matching pair sits.",
          "Me and no end two lines in stanza 2, but say them aloud: they do not sound alike. Check the other word pairs, then look at where the rhyming lines sit in each stanza."
        ],
        how: [
          "Stanza 1 ends with pan, can, sound and round. Pan and can rhyme, and sound and round rhyme.",
          "Each rhyming pair is two lines right next to each other. Stanza 2 (me, three, no, below) works the same way.",
          "The answers are in pairs of lines next to each other and sound and round.",
          "Me and no do not sound alike. Pan and sound end lines 1 and 3, but they do not rhyme, so the rhymes are not in every other line."
        ],
        misconception: "A common mix-up is choosing two end words from the same stanza that only look close, like me and no. Say them aloud to check.",
        why: "The answers are in pairs of lines next to each other and sound and round. In every stanza, the rhymes come in pairs of lines next to each other, such as pan and can, sound and round, and no and below. Me and no do not rhyme, and neither do pan and sound." },
      { id: "SK-TT4a-C02", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.a"], passages: ["p5"],
        prompt: "Why does the poet begin stanzas 1 and 2 with the words \"Sizzle, sizzle\"?",
        choices: [
          { text: "to help the reader hear the pancake batter cooking in the hot pan", correct: true },
          { text: "to show that the pancake is burning and the pan is full of smoke" },
          { text: "to show that Dad and the speaker are singing a cooking song" },
          { text: "to show that the speaker is afraid of the hot stove" }
        ],
        clue: "Repeated words can copy a sound. Say the repeated words out loud and listen.",
        hints: [
          "Repeated words can copy a sound. Say the repeated words out loud and listen.",
          "Say \"Sizzle, sizzle\" out loud. Then reread stanzas 1 and 2.",
          "Nothing in the poem burns or smokes, and Dad's pancake lands just right. Test the other choices against what is happening at the stove."
        ],
        how: [
          "Sizzle is the sound batter makes when it hits a hot pan.",
          "The word comes at the start of stanzas 1 and 2, when a pancake is cooking each time.",
          "The answer is \"to help the reader hear the pancake batter cooking in the hot pan.\"",
          "Nothing burns, nobody sings, and the speaker takes a turn at the stove instead of staying away from it."
        ],
        misconception: "A common mix-up is reading repeated sound words as something a character says or sings.",
        why: "The answer is \"to help the reader hear the pancake batter cooking in the hot pan.\" Sizzle is the sound of batter in a hot pan, and it starts each stanza where a pancake is cooking. Nothing burns, nobody sings, and the speaker is brave enough to try a flip." },
      { id: "SK-TT4a-C03", type: "ms", points: 2, dok: 1, std: ["3.T.T.4.a"], passages: ["p5"], pick: 2,
        prompt: "Which TWO sentences about how \"Flip!\" is built are true?",
        choices: [
          { text: "The poem has three stanzas.", correct: true },
          { text: "The last stanza has only two lines.", correct: true },
          { text: "The poem has ten stanzas." },
          { text: "Every stanza has four lines." },
          { text: "The first stanza is the shortest one." }
        ],
        clue: "A line is one row of words. A stanza is a group of lines, with a space before the next group.",
        hints: [
          "A line is one row of words. A stanza is a group of lines, with a space before the next group.",
          "First count the groups of lines by finding the spaces. Then count the lines in each group. Choose two.",
          "The poem has ten lines in all, but a line is not a stanza, so it does not have ten stanzas. Check the other sentences against your counts."
        ],
        how: [
          "There are spaces after stanza 1 and after stanza 2, so the poem has three stanzas.",
          "Stanzas 1 and 2 have four lines each. Stanza 3 has only two lines.",
          "The answers are \"The poem has three stanzas\" and \"The last stanza has only two lines.\"",
          "Ten is the number of lines, not stanzas, and the first stanza is not the shortest."
        ],
        misconception: "A common mix-up is counting lines when the question asks about stanzas.",
        why: "The answers are \"The poem has three stanzas\" and \"The last stanza has only two lines.\" Two spaces split the poem into three groups. The first two have four lines, and the last has two. Ten is the number of lines, not stanzas." },
      { id: "SK-TT4a-C04", type: "hottext", points: 1, dok: 2, std: ["3.T.T.4.a"], passages: ["p5"],
        prompt: "Which line shows the moment the poem takes a turn, when things stop going as planned? Choose the line in the poem.",
        targets: ["p5:1:2", "p5:1:4", "p5:2:1", "p5:2:2", "p5:2:3", "p5:3:1"],
        answer: ["p5:2:3"], pick: 1,
        clue: "A poem can take a turn when something changes or goes wrong. Look for the moment the poem stops going the way it started.",
        hints: [
          "A poem can take a turn when something changes or goes wrong. Look for the moment the poem stops going the way it started.",
          "Read the poem in order. At each line, ask: is everything still going as planned?",
          "Holding a breath and counting to three shows the speaker getting ready, before anything goes wrong. Check the lines that are left: which one is the moment of change?"
        ],
        how: [
          "In stanza 1, Dad's flip works, and the pancake lands as a perfect circle.",
          "In stanza 2, the speaker gets ready and flips. Then come the words \"oh no, oh no!\"",
          "The answer is \"I flip it high—oh no, oh no!\" That is the moment things stop going as planned.",
          "Dad's flip and the perfect circle come before the turn, \"now it's me\" and counting to three are getting ready, and the laughing comes after."
        ],
        misconception: "A common mix-up is choosing a line from after the turn, like the laughing. The question asks for the moment things change.",
        why: "The answer is \"I flip it high—oh no, oh no!\" Before this line, everything goes right: Dad's pancake lands perfectly, and the speaker gets ready. With \"oh no, oh no!\" the flip goes wrong, and the poem turns. The laughing in stanza 3 comes after the turn." },
      { id: "SK-TT4a-C05", type: "hottext", points: 1, dok: 2, std: ["3.T.T.4.a"], passages: [],
        stem: ["A class wrote a poem about the town parade. Here is one stanza.", "The band comes marching down Main Street,", "With shiny horns and drums that beat.", "The fire truck rolls by, red and loud,", "And we all clap and stomp our feet."],
        prompt: "Three lines in this stanza rhyme with each other. Which line ends with a word that does not rhyme with any other line? Choose the line.",
        options: [
          "The band comes marching down Main Street,",
          "With shiny horns and drums that beat.",
          "The fire truck rolls by, red and loud,",
          "And we all clap and stomp our feet."
        ],
        answer: [2], pick: 1,
        clue: "Rhyming words end with the same sound. Read only the last word of each line.",
        hints: [
          "Rhyming words end with the same sound. Read only the last word of each line.",
          "Say the four end words out loud, one at a time, and listen for the sound most of them share.",
          "Street and beat end with the same sound, so neither of those lines is the one. Test the last two lines the same way."
        ],
        how: [
          "The end words are street, beat, loud and feet.",
          "Street, beat and feet all end with the same sound, so those three lines rhyme.",
          "Loud does not sound like any of them.",
          "The answer is \"The fire truck rolls by, red and loud,\""
        ],
        misconception: "A common mix-up is looking at the middle of a line. Rhyme patterns are about the last word of each line.",
        why: "The answer is \"The fire truck rolls by, red and loud,\" because loud does not rhyme with any other end word. Street, beat and feet all end with the same sound, so lines 1, 2 and 4 rhyme." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT4a-C06", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: ["p6"],
        stem: ["Suppose the last line of stanza 2 were changed to this: \"I hop and hop until I fall.\""],
        prompt: "Why would this change break the rhyme pattern of \"Double Dutch at Recess\"?",
        choices: [
          { text: "Fall does not rhyme with stop, so lines 3 and 4 would no longer rhyme.", correct: true },
          { text: "Fall does not rhyme with high, and every line must rhyme with line 1." },
          { text: "Fall does not rhyme with sky, and lines 2 and 4 always rhyme here." },
          { text: "Fall is a sad word, but every other line in the poem is happy." }
        ],
        clue: "To find the rhyme pattern, read the end words of each stanza and see which lines go together.",
        hints: [
          "To find the rhyme pattern, read the end words of each stanza and see which lines go together.",
          "Say the end words of stanzas 1 and 3 out loud. Which lines rhyme in each one? Stanza 2 should match them.",
          "A rhyme pattern is about sounds, not about whether a word is happy or sad. Use the end words of stanza 1 to test the three choices that are left."
        ],
        how: [
          "Stanza 1 ends with round, ground, toe and go. Lines 1 and 2 rhyme, and lines 3 and 4 rhyme. Stanza 3 works the same way.",
          "In stanza 2, line 3 ends with stop. Line 4 has to rhyme with it, the way its last word does now.",
          "The answer is \"Fall does not rhyme with stop, so lines 3 and 4 would no longer rhyme.\"",
          "The lines rhyme in pairs, so line 4 does not need to rhyme with line 1 or line 2. A rhyme pattern is about sound, not feelings."
        ],
        misconception: "A common mix-up is guessing a pattern without checking it in another stanza first.",
        why: "The answer is \"Fall does not rhyme with stop, so lines 3 and 4 would no longer rhyme.\" In every stanza, lines 1 and 2 rhyme and lines 3 and 4 rhyme. Stop and hop make the pair now, and fall would leave stop with no partner. Lines 2 and 4 do not rhyme in this poem, and a rhyme pattern is about sound, not feelings." },
      { id: "SK-TT4a-C07", type: "hottext", points: 2, dok: 2, std: ["3.T.T.4.a"], passages: ["p6"],
        prompt: "Which TWO lines use repeated words to show that the jumping keeps on going? Choose two lines in the poem.",
        targets: ["p6:1:1", "p6:1:2", "p6:1:4", "p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4", "p6:3:1"],
        answer: ["p6:2:3", "p6:2:4"], pick: 2,
        clue: "Repetition means using the same word again. Ask what the repeated words in a line are about.",
        hints: [
          "Repetition means using the same word again. Ask what the repeated words in a line are about.",
          "Find each line that repeats a word. Then ask what the repetition is about: the ropes, the counting or the jumping. Choose two.",
          "\"They slap, slap, slap against the ground\" repeats a word, but it is about the ropes, not the jumper. Check the other lines the same way."
        ],
        how: [
          "Several lines repeat words. \"Round and round\" and \"slap, slap, slap\" are about the ropes.",
          "\"Don't stop! Don't stop!\" is the speaker's friends cheering the jumper to keep going.",
          "\"I hop, hop, hop, and hop, hop, hop\" shows jump after jump after jump.",
          "The answers are \"My friends all chant, 'Don't stop! Don't stop!'\" and \"I hop, hop, hop, and hop, hop, hop.\""
        ],
        misconception: "A common mix-up is choosing any line that repeats a word. Ask what the repetition is about.",
        why: "The answers are \"My friends all chant, 'Don't stop! Don't stop!'\" and \"I hop, hop, hop, and hop, hop, hop.\" The chant tells the jumper to keep going, and the hops come again and again. The two lines in stanza 1 that repeat words are about the ropes. The other lines do not repeat words." },
      { id: "SK-TT4a-C08", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.4.a"], passages: ["p6"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How does the poem change in stanza 3?",
          choices: [
            { text: "The jumping stops, and the speaker plans to play again.", correct: true },
            { text: "The speaker finally gets a turn to jump in the ropes." },
            { text: "The speaker teaches a friend how to jump the ropes." },
            { text: "The speaker trips on a rope and has to quit the game." }
          ] },
        partB: { prompt: "Which line from the poem best supports the answer to Part A?",
          choices: [
            { text: "\"We'll turn the ropes again. Hooray!\"", correct: true },
            { text: "\"I'm out of breath, but what a thrill!\"" },
            { text: "\"My feet are quick, my braids fly high.\"" },
            { text: "\"I hop, hop, hop, and hop, hop, hop.\"" }
          ] },
        clue: "To see how a poem changes, compare what happens in the last stanza with what happened before.",
        hints: [
          "To see how a poem changes, compare what happens in the last stanza with what happened before.",
          "Compare stanza 3 with stanza 2. What is different?",
          "Nobody falls in stanza 3. It is the ropes that fall still. For Part B, the line you choose must match your Part A answer."
        ],
        how: [
          "Before stanza 3, the game is going on.",
          "In stanza 3, the bell rings and the ropes fall still. The speaker is out of breath but thrilled, and plans to turn the ropes again tomorrow.",
          "Part A: The jumping stops, and the speaker plans to play again. Part B: \"We'll turn the ropes again. Hooray!\"",
          "Nobody trips, the speaker is already jumping before stanza 3, and nobody is taught to jump. \"What a thrill\" shows a feeling, not a plan."
        ],
        misconception: "A common mix-up is reading \"the ropes fall still\" as someone falling. It means the ropes stop moving.",
        why: "Part A: The jumping stops, and the speaker plans to play again. Part B: \"We'll turn the ropes again. Hooray!\" The bell ends recess and the ropes stop, but the speaker wants to play again tomorrow. The speaker is already jumping before stanza 3, nobody trips, and nobody is taught to jump. \"What a thrill\" tells how the speaker feels, not what comes next." },
      { id: "SK-TT4a-C09", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: ["p6"],
        prompt: "Stanza 1 ends with the line \"One, two, three... and in I go!\" Why does the poet end the first stanza there?",
        choices: [
          { text: "It ends the waiting part at the very moment the speaker jumps in.", correct: true },
          { text: "It shows that the speaker gives up and walks away from the ropes." },
          { text: "It tells the reader that recess is over and the bell has rung." },
          { text: "It is the only line in the stanza that has a rhyming partner." }
        ],
        clue: "Each stanza has its own job. A poet often starts a new stanza when something new happens.",
        hints: [
          "Each stanza has its own job. A poet often starts a new stanza when something new happens.",
          "Ask what part of the game stanza 1 is about, and what part stanza 2 is about.",
          "The bell does not ring until stanza 3, so this stanza break is not about recess ending. Test the other choices against what the speaker is doing in stanza 1."
        ],
        how: [
          "In stanza 1, the ropes swing, and the speaker rocks and waits from heel to toe.",
          "On \"One, two, three... and in I go!\" the speaker jumps in. The waiting is over.",
          "The answer is \"It ends the waiting part at the very moment the speaker jumps in.\" A new stanza starts a new part of the poem.",
          "The speaker does not give up, the bell rings in stanza 3, and other lines in stanza 1 rhyme, too."
        ],
        misconception: "A common mix-up is thinking stanzas break just to fit a rhyme. A new stanza usually starts a new part of what happens.",
        why: "The answer is \"It ends the waiting part at the very moment the speaker jumps in.\" Stanza 1 is about waiting for the right moment, and it stops just as the speaker jumps in, so a new part can begin. The speaker does not give up, the bell rings in stanza 3, and other lines in stanza 1 rhyme, too." },
      { id: "SK-TT4a-C10", type: "ms", points: 2, dok: 3, std: ["3.T.T.4.a"], passages: ["p5", "p6"], pick: 2,
        prompt: "Think about \"Flip!\" and \"Double Dutch at Recess.\" Which TWO sentences about how the poets use repeated words are true?",
        choices: [
          { text: "Both poets repeat a word that copies a sound.", correct: true },
          { text: "Only the pancake poem begins two stanzas with the same two words.", correct: true },
          { text: "Only the jump-rope poem begins two stanzas with the same two words." },
          { text: "Both poets end every stanza with the same repeated line." },
          { text: "Neither poet repeats a word inside a line." }
        ],
        clue: "To compare, check the same thing in each poem. A sentence about both poems must be true for both.",
        hints: [
          "To compare, check the same thing in each poem. A sentence about both poems must be true for both.",
          "Find every repeated word in each poem. Then read the first line of each stanza in both poems. Choose two.",
          "Neither poem ends its stanzas with one line that comes back each time, so that sentence is not true for either poem. Test the other sentences against both poems."
        ],
        how: [
          "In \"Flip!\" sizzle is the sound of batter in a hot pan. In \"Double Dutch at Recess,\" slap is the sound of the ropes hitting the ground. Both copy a sound.",
          "\"Flip!\" begins stanzas 1 and 2 with \"Sizzle, sizzle.\" The stanzas of \"Double Dutch at Recess\" begin with different words: \"The ropes,\" \"My feet\" and \"The bell.\"",
          "The answers are \"Both poets repeat a word that copies a sound\" and \"Only the pancake poem begins two stanzas with the same two words.\"",
          "\"Flip!\" repeats words inside a line (\"oh no, oh no\"), so the sentence about neither poet is false, and neither poem ends every stanza with the same line."
        ],
        misconception: "A common mix-up is choosing a sentence that is true for only one of the two poems.",
        why: "The answers are \"Both poets repeat a word that copies a sound\" and \"Only the pancake poem begins two stanzas with the same two words.\" Sizzle copies the sound of the pan, and slap copies the sound of the ropes. Only Flip! opens two stanzas with the same words. Both poems repeat words inside lines, and neither ends every stanza with the same line." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT4a-C11", type: "ms", points: 2, dok: 2, std: ["3.T.T.4.a"], passages: ["p7"], pick: 2,
        prompt: "The line \"Spin, spider, spin!\" ends stanzas 1 and 2. Which TWO things does this repeated line do?",
        choices: [
          { text: "It gives the stanzas the same ending, like a chant.", correct: true },
          { text: "It shows that the spider keeps busy working on her web.", correct: true },
          { text: "It tells the words that the spider says to the fly." },
          { text: "It starts each new stanza with the very same words." },
          { text: "It shows that the spider is lost in the tall weeds." }
        ],
        clue: "Repetition can add a beat, and it can make an idea stand out.",
        hints: [
          "Repetition can add a beat, and it can make an idea stand out.",
          "Reread stanzas 1 and 2, and say the repeated line each time. Choose two.",
          "The line comes at the end of each stanza, not the start, so it does not start each stanza. Check the other choices against stanzas 1 and 2."
        ],
        how: [
          "Saying the same short line at the end of stanzas 1 and 2 sounds like a chant or a cheer.",
          "In those stanzas, the spider lets down a thread, hooks it and circles out and in. The line tells her to keep spinning while she works.",
          "The answers are \"It gives the stanzas the same ending, like a chant\" and \"It shows that the spider keeps busy working on her web.\"",
          "The spider never talks in the poem, the line ends the stanzas instead of starting them, and nothing says she is lost."
        ],
        misconception: "A common mix-up is thinking a repeated line is something a character says. Here the speaker is cheering the spider on.",
        why: "The answers are \"It gives the stanzas the same ending, like a chant\" and \"It shows that the spider keeps busy working on her web.\" The same short line closes stanzas 1 and 2 like a chant, while the spider lets down, hooks and circles her thread. The spider never talks, the line ends the stanzas, and she is not lost." },
      { id: "SK-TT4a-C12", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: ["p7"],
        prompt: "In stanza 3, the last line changes to \"Wait, spider, wait.\" Why does the poet change the repeated line?",
        choices: [
          { text: "The web is done, so the spider stops spinning and waits for a meal.", correct: true },
          { text: "The spider is tired out and needs to go to sleep for the night." },
          { text: "The poet needs a word that rhymes with dew at the end of line 1." },
          { text: "A storm in the night has washed the spider's web away." }
        ],
        clue: "When a repeated line changes, ask what has changed in the poem.",
        hints: [
          "When a repeated line changes, ask what has changed in the poem.",
          "Compare what the spider is doing in stanza 3 with what she does in stanzas 1 and 2.",
          "Nothing in stanza 3 tells about a storm; the drops on the web are dew. Test the other choices against stanza 3."
        ],
        how: [
          "In stanzas 1 and 2, the spider is busy making her web, and the line tells her to spin.",
          "In stanza 3, the web is finished and wet with dew, and a fly comes buzzing near.",
          "The answer is \"The web is done, so the spider stops spinning and waits for a meal.\"",
          "Nothing says she is going to sleep, there is no storm, and wait does not sound like dew, so the change is not about rhyming with dew."
        ],
        misconception: "A common mix-up is thinking a repeated line changes only to make a rhyme. Ask what has changed in the poem.",
        why: "The answer is \"The web is done, so the spider stops spinning and waits for a meal.\" At dawn the web is finished, and a fly buzzes into view. The spider has nothing left to spin, so the poet changes Spin to Wait. She is not going to sleep, there is no storm, and wait does not rhyme with dew." },
      { id: "SK-TT4a-C13", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: ["p7"],
        prompt: "Which stanza has the same rhyme pattern as the stanzas of \"Spin, Spider, Spin\"?",
        choices: [
          { text: "The library is cool and still. / The pages softly turn. / I pick a book up off the sill / With so much more to learn.", correct: true },
          { text: "I kick the ball with all my might. / It zooms away, a blur of white. / My team jumps up and starts to cheer. / The best goal of the whole school year!" },
          { text: "The bus comes rumbling down our street. / Its doors swing open wide. / I wave goodbye to Mom and Dad / And climb on up inside." },
          { text: "The baker's shop smells warm and sweet, / With rolls and buns in rows. / The baker has flour on her nose. / She hands me bread to eat." }
        ],
        clue: "To find a rhyme pattern, read the last word of each line and find which lines rhyme. Then look for a stanza where the same lines rhyme.",
        hints: [
          "To find a rhyme pattern, read the last word of each line and find which lines rhyme. Then look for a stanza where the same lines rhyme.",
          "First work out the pattern in one stanza of \"Spin, Spider, Spin\": which line rhymes with line 1, and which rhymes with line 2? Then do the same for each choice.",
          "In the soccer stanza, might rhymes with white and cheer rhymes with year, so its rhymes come in pairs next to each other. Compare that with the spider poem, then check the other stanzas."
        ],
        how: [
          "In stanza 1 of \"Spin, Spider, Spin,\" grow rhymes with low (lines 1 and 3), and thin rhymes with spin (lines 2 and 4). The other stanzas match.",
          "In the library stanza, still rhymes with sill (lines 1 and 3), and turn rhymes with learn (lines 2 and 4).",
          "The answer is the library stanza, which begins \"The library is cool and still.\"",
          "The soccer stanza rhymes in pairs, the bus stanza rhymes only lines 2 and 4, and the bakery stanza rhymes lines 1 and 4 and lines 2 and 3."
        ],
        misconception: "A common mix-up is stopping after lines 2 and 4. Check lines 1 and 3, too, before you decide two patterns match.",
        why: "The answer is \"The library is cool and still. / The pages softly turn. / I pick a book up off the sill / With so much more to learn.\" Like each stanza of the spider poem, lines 1 and 3 rhyme (still, sill) and lines 2 and 4 rhyme (turn, learn). The soccer stanza rhymes in pairs, the bus stanza rhymes only lines 2 and 4, and the bakery stanza rhymes lines 1 and 4 and lines 2 and 3." },
      { id: "SK-TT4a-C14", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.4.a"], passages: ["p8"],
        prompt: "Complete the sentence about the jobs of the stanzas in \"Game Night.\" Choose the best answer for each blank.",
        text: "Stanza 1 {0}, and stanza 3 {1}.",
        slots: [
          { options: ["shows the ballpark before the game", "shows the ballpark during the game", "shows the ballpark after the game"], answer: 0 },
          { options: ["shows the ballpark before the game", "shows the ballpark during the game", "shows the ballpark after the game"], answer: 2 }
        ],
        clue: "Each stanza has its own job. Read one stanza at a time and ask what is happening.",
        hints: [
          "Each stanza has its own job. Read one stanza at a time and ask what is happening.",
          "In each stanza, look at the seats and at who is in the ballpark.",
          "The worker sweeps in both stanza 1 and stanza 3, so sweeping alone cannot tell them apart. For the first blank, read the last line of stanza 1: has the game happened yet?"
        ],
        how: [
          "Stanza 1: the seats are bare, a worker sweeps, and \"Tonight the Comets play!\" The game has not started.",
          "Stanza 2 is the game itself: the seats are packed, and hot dogs pass from hand to hand.",
          "Stanza 3: the crowd has gone away, and the worker says \"Good game today.\" The game is over.",
          "The answers are shows the ballpark before the game and shows the ballpark after the game."
        ],
        misconception: "A common mix-up is mixing up the first and last stanzas, because the worker sweeps in both. Check whether the game is still to come or already over.",
        why: "The answers are shows the ballpark before the game and shows the ballpark after the game. In stanza 1 the seats are bare and the Comets play tonight. In stanza 3 the crowd has gone and the worker says it was a good game. Stanza 2 is the game itself." },
      { id: "SK-TT4a-C15", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: ["p8"],
        prompt: "How does the poet build the stanzas of \"Game Night\" to help the reader see how the ballpark changes?",
        choices: [
          { text: "Each stanza starts with almost the same line, but the time and one word change.", correct: true },
          { text: "Each stanza starts with the very same line, word for word, all the way through." },
          { text: "Each stanza rhymes in pairs, so lines 1 and 2 always rhyme with each other." },
          { text: "Each stanza is longer than the one before, so the night seems to get longer." }
        ],
        clue: "Poets can build stanzas to match each other. Compare the same line in every stanza, and look for what stays the same and what changes.",
        hints: [
          "Poets can build stanzas to match each other. Compare the same line in every stanza, and look for what stays the same and what changes.",
          "Read only the first line of each stanza, one after the other.",
          "Every stanza has four lines, so no stanza is longer than the one before. Compare the first lines closely to test the other choices."
        ],
        how: [
          "The first lines are \"At five o'clock, the ballpark's still,\" \"At seven o'clock, the ballpark's loud\" and \"At ten o'clock, the ballpark's calm.\"",
          "They are built the same way, but the time and the describing word change: still, loud, calm. That helps the reader compare the ballpark at each time.",
          "The answer is \"Each stanza starts with almost the same line, but the time and one word change.\"",
          "The first lines are not exactly the same, lines 1 and 2 do not rhyme (still and gray, for example), and all three stanzas have four lines."
        ],
        misconception: "A common mix-up is missing small changes inside a repeated line. Read the matching lines side by side.",
        why: "The answer is \"Each stanza starts with almost the same line, but the time and one word change.\" The first lines go from five o'clock and still, to seven o'clock and loud, to ten o'clock and calm, so the reader can compare the ballpark at each time. The lines are not word for word the same, lines 1 and 2 do not rhyme, and every stanza has four lines." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short poem. Each `like` lists only
     the core items it really practises (same component and task). */
  similar: [
    { id: "SK-TT4a-S01", type: "ms", points: 2, dok: 2, std: ["3.T.T.4.a"], passages: [], pick: 2,
      like: ["SK-TT4a-C01", "SK-TT4a-C03"],
      stem: ["Stanza 1:", "Our class has a goldfish named Lou.", "He swims all day in a bowl of blue.", "He blows small bubbles, one, two, three,", "And wiggles his fins at you and me.", "Stanza 2:", "On Friday, guess who gets to take", "Lou home? It's me! I'm wide awake!"],
      prompt: "Read the poem. Which TWO sentences about how it is built are true?",
      choices: [
        { text: "The rhyming lines come in pairs, one right after the other.", correct: true },
        { text: "The second stanza has only two lines.", correct: true },
        { text: "Lines 1 and 3 of stanza 1 rhyme with each other." },
        { text: "The poem has six stanzas in all." },
        { text: "Every stanza in the poem has four lines." }
      ],
      clue: "Count stanzas by the groups of lines. Find rhymes by reading the last word of each line.",
      hints: [
        "Count stanzas by the groups of lines. Find rhymes by reading the last word of each line.",
        "Count the lines in each stanza. Then say the end words of stanza 1 out loud. Choose two.",
        "Lou and three do not sound alike, so lines 1 and 3 do not rhyme. Check the other sentences against your counts and the end words."
      ],
      how: [
        "Stanza 1 ends with Lou, blue, three and me. Lou and blue rhyme, and three and me rhyme: pairs, one right after the other.",
        "Stanza 2 has two lines, and take rhymes with awake.",
        "The answers are \"The rhyming lines come in pairs, one right after the other\" and \"The second stanza has only two lines.\"",
        "The poem has two stanzas, not six, and only stanza 1 has four lines."
      ],
      why: "The answers are \"The rhyming lines come in pairs, one right after the other\" and \"The second stanza has only two lines.\" Lou and blue, three and me, and take and awake are pairs of lines next to each other. The poem has two stanzas, and the second has only two lines." },
    { id: "SK-TT4a-S02", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C02"],
      stem: ["Thump, thump, thump on the gym floor,", "I dribble to the hoop.", "Thump, thump, thump, I take my shot—", "Swish! It drops right through the loop."],
      prompt: "Why does the poet repeat the words \"Thump, thump, thump\"?",
      choices: [
        { text: "to help the reader hear the ball bouncing as the speaker dribbles", correct: true },
        { text: "to show that someone is knocking hard on the door of the gym" },
        { text: "to show that the ball has gone flat and will not bounce at all" },
        { text: "to show that the speaker's feet are sore from running so much" }
      ],
      clue: "Repeated words can copy a sound. Say them out loud and listen.",
      hints: [
        "Repeated words can copy a sound. Say them out loud and listen.",
        "Say the repeated words out loud. Then reread the whole stanza.",
        "Nobody comes to a door in this poem, so the sound is not knocking. Test the other choices against what the speaker does with the ball."
      ],
      how: [
        "Thump is the sound a basketball makes when it hits the floor.",
        "The speaker dribbles to the hoop, so the ball bounces again and again: thump, thump, thump.",
        "The answer is \"to help the reader hear the ball bouncing as the speaker dribbles.\"",
        "There is no door, the ball bounces and goes in, and nothing says the speaker's feet hurt."
      ],
      why: "The answer is \"to help the reader hear the ball bouncing as the speaker dribbles.\" Thump is the sound of a ball hitting the gym floor, and the speaker is dribbling to the hoop. There is no door, the ball is not flat, and the poem never says the speaker's feet hurt." },
    { id: "SK-TT4a-S03", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C12"],
      stem: ["Stanza 1:", "The kitten naps beside the fire.", "Her nap is long and deep.", "She does not stir. She does not purr.", "Sleep, kitten, sleep.", "Stanza 2:", "A ball of yarn rolls off the chair", "And bounces by her face.", "She opens one eye, then she pounces—", "Chase, kitten, chase!"],
      prompt: "The last line changes from \"Sleep, kitten, sleep\" to \"Chase, kitten, chase!\" Why does the poet change it?",
      choices: [
        { text: "The kitten wakes up and starts to play, so her nap is over.", correct: true },
        { text: "The kitten is still asleep and is dreaming about the yarn." },
        { text: "The poet needs a word that rhymes with chair in line 1." },
        { text: "The kitten is scared of the yarn and runs from the room." }
      ],
      clue: "When a repeated line changes, ask what has changed in the poem.",
      hints: [
        "When a repeated line changes, ask what has changed in the poem.",
        "Read both stanzas. Then put the two last lines side by side.",
        "Chase does not sound like chair, so the change is not about rhyming with chair. Ask what the kitten is doing when the line changes."
      ],
      how: [
        "In stanza 1, the kitten is fast asleep, and the line says sleep.",
        "In stanza 2, a ball of yarn bounces by, and she opens one eye and pounces.",
        "The answer is \"The kitten wakes up and starts to play, so her nap is over.\"",
        "She is awake, not dreaming, chase does not rhyme with chair, and she pounces on the yarn instead of running away."
      ],
      why: "The answer is \"The kitten wakes up and starts to play, so her nap is over.\" She opens one eye and pounces on the yarn, so the line changes from sleep to chase. She is not dreaming or scared, and chase does not rhyme with chair." },
    /* Batch SIM-1 (ENG-07): one extra question for each core item that had none left when a child works the
       fifteen in order. Each new `like` names the one core item it practises. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TT4a-S04", type: "ms", points: 2, dok: 1, std: ["3.T.T.4.a"], passages: [], pick: 2,
      like: ["SK-TT4a-C03"],
      stem: ["Stanza 1:", "Night comes down the hill.", "The lamps blink on, one by one.", "The town grows still.", "Stanza 2:", "The baker locks his door.", "A cat slips through the gate.", "The street is empty once more.", "Stanza 3:", "The owls begin to call.", "Stars climb over the wall.", "Frost sparkles over all.", "Stanza 4:", "The windows go dark, one by one.", "A last small light fades out.", "Night comes down the hill."],
      prompt: "Read the poem. Which TWO sentences about how it is built are true?",
      choices: [
        { text: "There are four stanzas in the poem.", correct: true },
        { text: "The last line repeats the first line.", correct: true },
        { text: "Each stanza has exactly two lines." },
        { text: "Each stanza ends with the same line." },
        { text: "There are seven stanzas in all." }
      ],
      clue: "A stanza is a group of lines. Count the groups, and then look at where lines are repeated.",
      hints: [
        "A stanza is a group of lines. Count the groups, and then look at where lines are repeated.",
        "Count the stanzas and the lines in each one. Then compare the beginning of the poem with the end.",
        "Each stanza has three lines, so one choice can go. Check the rest against what you counted."
      ],
      how: [
        "A stanza is a group of lines. This poem has four groups.",
        "Each stanza has three lines. The first line of the poem and the last line of the poem are both \"Night comes down the hill.\"",
        "The answers are \"There are four stanzas in the poem.\" and \"The last line repeats the first line.\"",
        "The stanzas have three lines, not two, they do not all end the same way, and there are four stanzas, not seven."
      ],
      misconception: "A common mix-up is thinking a repeated line must come at the end of every stanza. Here it appears only at the start and at the very end.",
      why: "The answers are \"There are four stanzas in the poem.\" and \"The last line repeats the first line.\" There are four groups of three lines, and the poem begins and ends with \"Night comes down the hill.\" The stanzas do not have two lines each, and they do not all end with the same line." },
    { id: "SK-TT4a-S05", type: "hottext", points: 1, dok: 2, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C04"],
      stem: ["Read this poem about tying shoes.", "I cross the laces, loop them through,", "And pull them snug, the way you do.", "My shoes are tied. I'm set to race,", "I'm first one standing at the place.", "I start to run across the yard.", "My legs are quick. I'm trying hard.", "But what is this? My lace comes loose!", "I trip! I tumble! What's the use?", "I sit down on the grass and grin.", "I tie them up and try again."],
      prompt: "Which line shows the moment the poem takes a turn, when things stop going as planned? Choose the line.",
      options: [
        "I cross the laces, loop them through,",
        "I'm first one standing at the place.",
        "My legs are quick. I'm trying hard.",
        "But what is this? My lace comes loose!",
        "I tie them up and try again."
      ],
      answer: [3], pick: 1,
      clue: "A poem takes a turn when something changes, such as a plan going wrong. Look for the moment good news changes.",
      hints: [
        "A poem takes a turn when something changes, such as a plan going wrong. Look for the moment good news changes.",
        "Ask which lines tell about things going well and which tell about something going wrong.",
        "The last line shows the speaker trying again, which comes after the turn. Check the rest the same way."
      ],
      how: [
        "At first, the speaker ties the shoes, is ready to race, and runs fast.",
        "Then something changes, and the plan goes wrong.",
        "The line \"But what is this? My lace comes loose!\" is the moment of the turn.",
        "The first three lines show things going well. \"I tie them up and try again\" comes after the turn."
      ],
      misconception: "A common mix-up is choosing a line from the happy start or the ending. The turn is the moment the plan goes wrong.",
      why: "The answer is \"But what is this? My lace comes loose!\" Before this line, the speaker is tied up, quick and ready to race. This is the moment things stop going as planned. The last line comes after the turn." },
    { id: "SK-TT4a-S06", type: "hottext", points: 1, dok: 2, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C05"],
      stem: ["Here is one stanza from a poem about a rainy evening.", "The kettle sings. The kitchen's warm.", "I pour my tea into a cup.", "Now I am cozy as can be.", "Outside the wind begins to storm.", "I lift it slowly. I drink it up."],
      prompt: "In this stanza, four lines rhyme in pairs. Which line has no rhyming partner? Choose the line.",
      options: [
        "The kettle sings. The kitchen's warm.",
        "I pour my tea into a cup.",
        "Now I am cozy as can be.",
        "Outside the wind begins to storm.",
        "I lift it slowly. I drink it up."
      ],
      answer: [2], pick: 1,
      clue: "Say the last word of each line out loud. Find the words that sound alike at the end.",
      hints: [
        "Say the last word of each line out loud. Find the words that sound alike at the end.",
        "Match up the lines whose end words sound alike. One line will be left over.",
        "Warm and storm sound alike, so line 1 cannot be the left-over line. Check the others the same way."
      ],
      how: [
        "The last words are warm, cup, be, storm and up.",
        "Warm and storm sound alike, and cup and up sound alike.",
        "Be does not sound like any other end word, so that line has no rhyming partner.",
        "The answer is \"Now I am cozy as can be.\""
      ],
      misconception: "A common mix-up is looking only at lines next to each other. Rhyming lines can be far apart.",
      why: "The answer is \"Now I am cozy as can be.\" Warm and storm rhyme, and cup and up rhyme, even though those lines are not side by side. Be does not rhyme with any other end word." },
    { id: "SK-TT4a-S07", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C06"],
      stem: ["Here is stanza 1 of a poem called \"Yo-Yo.\"", "My yo-yo drops down to the floor.", "It zips right back, then down once more.", "I loop it out and watch it spin,", "Then pull it up—I always win!"],
      prompt: "The poet wants a new last line for the stanza. Which new last line keeps the rhyme pattern?",
      choices: [
        { text: "I pull it up with a happy grin.", correct: true },
        { text: "I pull it up and bring it home." },
        { text: "I pull it up, and then I stop." },
        { text: "I pull it up. Where is my shoe?" }
      ],
      clue: "Rhyme depends on the last word of a line. Find which line the new last line must rhyme with.",
      hints: [
        "Rhyme depends on the last word of a line. Find which line the new last line must rhyme with.",
        "Look at how the lines pair up in this stanza. Which line is the partner of the last line?",
        "A last line that ends in shoe does not sound like any end word in the stanza. Check the rest by saying each end word."
      ],
      how: [
        "The end words of the stanza are floor, more, spin and win.",
        "Floor and more rhyme, and spin and win rhyme, so the last line must rhyme with spin.",
        "Grin rhymes with spin. The answer is \"I pull it up with a happy grin.\"",
        "Home, stop and shoe do not rhyme with spin."
      ],
      misconception: "A common mix-up is choosing a line that makes sense but does not rhyme. The new line must end with a word that sounds like spin.",
      why: "The answer is \"I pull it up with a happy grin.\" The stanza rhymes in pairs, and the last line must rhyme with spin. Grin does, but home, stop and shoe do not." },
    { id: "SK-TT4a-S08", type: "hottext", points: 2, dok: 2, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C07"],
      stem: ["Here are five lines from a poem about a long car ride."],
      prompt: "Which TWO lines use repeated words to show that something lasts a long time? Choose two lines.",
      options: [
        "Honk! Honk! A truck zooms past.",
        "The road goes on, and on, and on.",
        "Gray clouds hang low above the hills.",
        "We sing, sing, sing from dusk to dawn.",
        "At last we see my uncle's gate."
      ],
      answer: [1, 3], pick: 2,
      clue: "Repeated words can make a long, steady feeling, as if something never ends. Look for a word that is said again and again.",
      hints: [
        "Repeated words can make a long, steady feeling, as if something never ends. Look for a word that is said again and again.",
        "Read each line and look for a word that is said again and again on purpose.",
        "Repeating a word only fits if the thing being described keeps going. Ask that about each line that repeats."
      ],
      how: [
        "A repeated word makes the reader feel that something keeps happening.",
        "In \"The road goes on, and on, and on,\" the words on and on are repeated, so the road seems endless.",
        "In \"We sing, sing, sing from dusk to dawn,\" the word sing is repeated, so the singing goes on for hours.",
        "The honks repeat a word too, but they come and go in a moment, so they do not show something that goes on. The other two lines have no repeated words."
      ],
      why: "The answers are \"The road goes on, and on, and on.\" and \"We sing, sing, sing from dusk to dawn.\" Each line repeats a word to show that something goes on for a long time. The honks repeat a word too, but they are over in a moment, and the other two lines have no repeated words." },
    { id: "SK-TT4a-S09", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.4.a"], passages: ["p9"],
      like: ["SK-TT4a-C08"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does stanza 2 show that stanza 1 and stanza 3 do not?",
        choices: [
          { text: "The speaker hearing the truck coming." },
          { text: "The speaker sitting alone by the wall." },
          { text: "The speaker getting the treat and eating it fast.", correct: true },
          { text: "The speaker planning to save money." }
        ] },
      partB: { prompt: "Which line from the poem shows your answer to Part A?",
        choices: [
          { text: "\"I count my coins. I count them twice.\"" },
          { text: "\"I lick it fast, and then it's gone.\"", correct: true },
          { text: "\"I run to find a frosty treat.\"" },
          { text: "\"I sit and sigh by the garden wall.\"" }
        ] },
      clue: "To tell what one stanza adds, compare it with the stanzas before it and after it.",
      hints: [
        "To tell what one stanza adds, compare it with the stanzas before it and after it.",
        "List what happens in each of the three stanzas. Then see which event belongs only in the middle one.",
        "The speaker plans to save money only at the very end of the poem, so that choice does not fit stanza 2. For Part B, the line you choose must match your Part A answer."
      ],
      how: [
        "In stanza 1, the speaker hears the truck and runs to it.",
        "In stanza 2, the speaker counts coins, buys a cone and eats it fast.",
        "In stanza 3, the truck rolls away, and the speaker sits by the wall and plans to save coins.",
        "Part A: The speaker getting the treat and eating it fast. Part B: \"I lick it fast, and then it's gone.\"",
        "Hearing the truck belongs to stanza 1. Sitting alone and saving money belong to stanza 3."
      ],
      misconception: "A common mix-up is choosing an event from the first or last stanza. Ask which event happens only in the middle one.",
      why: "Part A: The speaker getting the treat and eating it fast. Part B: \"I lick it fast, and then it's gone.\" Stanza 2 is the only stanza where the speaker gets the cone and eats it. Hearing the truck belongs to stanza 1, and sitting alone and saving money belong to stanza 3." },
    { id: "SK-TT4a-S10", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C09"],
      stem: ["Here is stanza 2 of a poem called \"The Scooter Ride.\"", "I grip the bars and push off slow.", "The scooter picks up speed on the hill.", "Faster, faster, down I go,", "Past the fence and past the mill.", "Stop."],
      prompt: "What does the one-word last line do for this stanza?",
      choices: [
        { text: "A short line makes the reader pause, just as the scooter does.", correct: true },
        { text: "It shows that the poet ran out of words to use." },
        { text: "It makes the last line rhyme with the first line." },
        { text: "It tells the reader that the ride goes on all day." }
      ],
      clue: "A poet can use the length of a line to match what is happening. Ask what happens in the last line.",
      hints: [
        "A poet can use the length of a line to match what is happening. Ask what happens in the last line.",
        "Read the stanza out loud. Notice how the last line sounds different from the lines before it.",
        "Read the stanza out loud and listen to how the last line sounds next to the lines before it. The poem does not say the ride lasts all day, so one choice can go."
      ],
      how: [
        "The first four lines tell about a fast ride. The scooter picks up speed, and the speaker goes faster and faster.",
        "The last line is only one word, \"Stop.\" A very short line makes the reader pause.",
        "The answer is \"A short line makes the reader pause, just as the scooter does.\"",
        "The poet did not run out of words, \"Stop\" does not rhyme with \"slow,\" and the ride ends instead of going on all day."
      ],
      misconception: "A common mix-up is thinking a short line means the poet ran out of things to say. A poet can choose a short line to match the action.",
      why: "The answer is \"A short line makes the reader pause, just as the scooter does.\" The lines before it match the fast ride, and the one-word last line makes the reader stop, just as the scooter stops. The poet did not run out of words, \"Stop\" does not rhyme with \"slow,\" and the ride does not go on all day." },
    { id: "SK-TT4a-S11", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C10"],
      stem: ["Poem A: The Cat", "Purr, purr, purr by the fire,", "Purr, purr, purr in the sun.", "The cat stretches out on the rug", "And naps till the day is done.", "Poem B: Sprinkler Day", "Splash, splash, splash goes the sprinkler spray,", "I jump, jump, jump through the cold.", "The grass is wet, the sun is hot,", "And I feel brave and bold."],
      prompt: "Think about Poem A and Poem B. How do the poets use repeated words differently?",
      choices: [
        { text: "Poem A repeats a sound word at the start of two lines, but Poem B repeats words inside single lines.", correct: true },
        { text: "Poem A repeats whole lines, but Poem B has no repeated words." },
        { text: "Poem B repeats a sound word at the start of two lines, but Poem A repeats words inside single lines." },
        { text: "Poem A has no repeated words, but Poem B repeats whole lines." }
      ],
      clue: "To compare how two poets use repeats, find where the repeated words sit in each poem.",
      hints: [
        "To compare how two poets use repeats, find where the repeated words sit in each poem.",
        "List the repeated words in Poem A and note which lines they are in. Then do the same for Poem B.",
        "Poem A does not repeat any whole line, so one choice has no support. Test the rest against your lists."
      ],
      how: [
        "Poem A begins its first two lines with Purr, purr, purr, so a sound word starts two lines.",
        "Poem B has splash, splash, splash inside its first line and jump, jump, jump inside its second line, so the repeats sit inside single lines.",
        "The answer is \"Poem A repeats a sound word at the start of two lines, but Poem B repeats words inside single lines.\"",
        "Neither poem repeats a whole line, and both poems have repeated words."
      ],
      misconception: "A common mix-up is switching the two poems. Check which lines each repeat is in.",
      why: "The answer is \"Poem A repeats a sound word at the start of two lines, but Poem B repeats words inside single lines.\" Purr begins both of the first two lines in Poem A, while splash and jump repeat inside lines in Poem B. Neither poem repeats a whole line, and both have repeated words." },
    { id: "SK-TT4a-S12", type: "ms", points: 2, dok: 2, std: ["3.T.T.4.a"], passages: [], pick: 2,
      like: ["SK-TT4a-C11"],
      stem: ["Stanza 1:", "Out by the fence, the dirt is deep.", "The puppy sniffs and starts to scratch.", "His paws fly fast, his ears flop wide—", "Dig, puppy, dig!", "Stanza 2:", "The hole is big, the pile is high.", "He kicks the dirt in every direction.", "A bone is buried, brown and old—", "Dig, puppy, dig!"],
      prompt: "The line \"Dig, puppy, dig!\" ends stanzas 1 and 2. Which TWO sentences tell what this repeated line adds to the poem?",
      choices: [
        { text: "It repeats a beat that sounds like digging.", correct: true },
        { text: "It shows the puppy is still digging in both stanzas.", correct: true },
        { text: "It rhymes with the first line of each stanza." },
        { text: "It tells what the puppy digs up." },
        { text: "It changes to a new word in stanza 2." }
      ],
      clue: "Ask what the repeated line adds to the poem.",
      hints: [
        "Ask what the repeated line adds to the poem.",
        "Say the line out loud each time it comes. What do you notice?",
        "The line is the same in both stanzas, so one choice can go. Check the rest against what you noticed."
      ],
      how: [
        "The line \"Dig, puppy, dig!\" has a strong beat, and it comes at the end of both stanzas.",
        "The beat sounds like a puppy digging again and again, and the line shows he is still at work in stanza 2.",
        "The answers are \"It repeats a beat that sounds like digging.\" and \"It shows the puppy is still digging in both stanzas.\"",
        "The line does not rhyme with deep or high, it does not say what is dug up, and it does not change."
      ],
      misconception: "A common mix-up is choosing a detail the line never gives. Check what the words and beat actually do.",
      why: "The answers are \"It repeats a beat that sounds like digging.\" and \"It shows the puppy is still digging in both stanzas.\" The same strong line ends both stanzas. It does not rhyme with the first lines, name what is dug up, or change." },
    { id: "SK-TT4a-S13", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C13"],
      stem: ["Here is a stanza from a poem.", "The sun comes up behind the hill.", "The roosters crow and call.", "I jump out of my bed with joy", "And hurry down the hall."],
      prompt: "Which stanza has the same rhyme pattern as the stanza above?",
      choices: [
        { text: "We bake a cake for Dad's birthday. / The frosting's bright and blue. / We sprinkle on a hundred dots / And sing a song for you.", correct: true },
        { text: "The garden smells of mint and rose. / The bees are on the vine. / I water every row that grows / And everything looks fine." },
        { text: "I tie my boots and grab my hat. / I whistle for the cat. / The snow is white and cold and deep. / It's time to play, not sleep." },
        { text: "The ship sails out across the bay. / The waves are bright and gay. / The sailors sing along the way / And watch the dolphins play." }
      ],
      clue: "To find a rhyme pattern, say the last word of each line and find which lines rhyme. Then look for a stanza where the same lines rhyme.",
      hints: [
        "To find a rhyme pattern, say the last word of each line and find which lines rhyme. Then look for a stanza where the same lines rhyme.",
        "First find which lines rhyme in the stanza above. Then do the same for each choice.",
        "Say the last word of each line in the stanza above, and mark which lines rhyme. Do the same for each choice."
      ],
      how: [
        "In the stanza above, call and hall rhyme: lines 2 and 4. Hill and joy do not rhyme with anything.",
        "The right answer must also have lines 2 and 4 rhyming, with lines 1 and 3 not rhyming.",
        "In the cake stanza, blue and you rhyme, and birthday and dots do not.",
        "The garden stanza rhymes lines 1 and 3 and lines 2 and 4. The boots stanza rhymes lines 1 and 2 and lines 3 and 4. In the ship stanza, all four lines rhyme."
      ],
      misconception: "A common mix-up is choosing a stanza with a different pattern because it also has rhymes. Compare which lines rhyme.",
      why: "The answer is \"We bake a cake for Dad's birthday. / The frosting's bright and blue. / We sprinkle on a hundred dots / And sing a song for you.\" In the stanza above, only lines 2 and 4 rhyme (call and hall). In the cake stanza, blue and you rhyme in lines 2 and 4, and lines 1 and 3 do not. The other stanzas rhyme in different lines." },
    { id: "SK-TT4a-S14", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C14"],
      stem: ["Stanza 1:", "In August, the pear tree's leaves are thick.", "The fruit hangs soft and sweet.", "A squirrel naps along a limb", "And dreams of food to eat.", "Stanza 2:", "In November, the leaves have fallen.", "They cover all the ground.", "The branches stand up bare again", "While north winds whirl around.", "Stanza 3:", "In March, the pear tree's twigs are brown.", "The buds are small and tight.", "A robin hops from branch to branch", "And sings in the cool light."],
      prompt: "Complete the sentence about what the stanzas of \"The Pear Tree\" show. Choose the best answer for each blank.",
      text: "Stanza 2 {0}, and stanza 3 {1}.",
      slots: [
        { options: ["shows the leaves turning bright colors", "shows the leaves lying on the ground", "shows the tree full of fruit"], answer: 1 },
        { options: ["shows the first small buds", "shows the leaves turning bright colors", "shows the tree full of fruit"], answer: 0 }
      ],
      clue: "Each stanza has its own job. Read one stanza at a time and ask what is happening to the tree.",
      hints: [
        "Each stanza has its own job. Read one stanza at a time and ask what is happening to the tree.",
        "Read the first words of each stanza. They tell you the month.",
        "Stanza 3 gives the month and tells what is on the twigs. Match that to each choice."
      ],
      how: [
        "Stanza 1 is set in August. The leaves are thick, and the fruit hangs soft and sweet.",
        "Stanza 2 is set in November, when the leaves have fallen and cover the ground.",
        "Stanza 3 is set in March. The twigs are brown, and the buds are small and tight.",
        "The answers are \"shows the leaves lying on the ground\" and \"shows the first small buds.\" The leaves are not turning colors in any stanza, and the fruit belongs to stanza 1."
      ],
      misconception: "A common mix-up is picking the stanza whose season sounds familiar. Match each stanza to its month and the details it gives.",
      why: "The answers are shows the leaves lying on the ground and shows the first small buds. Stanza 2 is November, with leaves on the ground. Stanza 3 is March, with brown twigs and small, tight buds. No stanza shows leaves turning colors, and the fruit is in stanza 1." },
    { id: "SK-TT4a-S15", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.a"], passages: [],
      like: ["SK-TT4a-C15"],
      stem: ["Stanza 1:", "The candle flame is tall and bright.", "It lights the whole dark room.", "I watch the dancing shadows tonight", "And push away the gloom.", "Stanza 2:", "The wax is low. The flame is small.", "The shadows creep in near.", "I watch them crawl along the wall.", "Stanza 3:", "One tiny spark, a final glow.", "Then still.", "Stanza 4:", "Dark."],
      prompt: "How does the poet use the length of the stanzas in \"The Candle\" to show the candle burning down?",
      choices: [
        { text: "Each stanza is shorter than the one before, so the light seems to fade.", correct: true },
        { text: "Each stanza is longer than the one before, so the room fills with light." },
        { text: "Every stanza has the same number of lines, so time passes evenly." },
        { text: "Every stanza ends with the same line, so the candle never goes out." }
      ],
      clue: "To see how a poet builds stanzas, compare them with each other. Look at how they start, how they rhyme, and how long they are.",
      hints: [
        "To see how a poet builds stanzas, compare them with each other. Look at how they start, how they rhyme, and how long they are.",
        "Put the stanzas side by side and count the lines in each one.",
        "The stanzas do not all end with the same line, so one choice has no support. Test the rest against your counts."
      ],
      how: [
        "Stanza 1 has four lines, stanza 2 has three, stanza 3 has two, and stanza 4 has one.",
        "The stanzas get shorter and shorter, like a candle burning down. The last stanza is a single word, Dark.",
        "The answer is \"Each stanza is shorter than the one before, so the light seems to fade.\"",
        "The stanzas are not longer, they do not all have the same number of lines, and they do not end with the same line."
      ],
      misconception: "A common mix-up is thinking that only the words show the change. The shape of the poem shows it too.",
      why: "The answer is \"Each stanza is shorter than the one before, so the light seems to fade.\" The four stanzas have four, three, two and one lines. The stanzas are not longer, they do not have the same number of lines, and they do not end with the same line." }
  ],
  /* Hints and Show me how for the Practice Together items P1-P5 (no Try item is referenced by core). */
  addons: {
    "SK-TT4a-P1": {
      hints: [
        "To find the rhyme pattern, read the last word of each line in one stanza and listen for the ones that sound alike.",
        "Start with stanza 1 and say its four end words out loud. Then check stanza 2 the same way.",
        "Rain and chin do not sound alike, so lines 1 and 3 do not rhyme. Listen for the pair that does, then check that the other stanzas match."
      ],
      how: [
        "Stanza 1 ends with rain, night, chin and tight. Night and tight rhyme: lines 2 and 4.",
        "Stanza 2 has yard and hard, and stanza 3 has sound and ground. Lines 2 and 4 again.",
        "The answer is \"In each stanza, lines 2 and 4 rhyme.\""
      ] },
    "SK-TT4a-P2": {
      hints: [
        "Rhyming words end with the same sound. Read only the last word of each line.",
        "Read only stanza 2. Say each line's last word out loud, one at a time. Choose two.",
        "The first line ends with rain, and no other line in stanza 2 ends with that sound. Listen to the other three end words."
      ],
      how: [
        "Stanza 2's end words are rain, yard, up and hard.",
        "Yard and hard end with the same sound.",
        "The answers are \"Puddles growing in the yard.\" and \"And still the rain falls hard.\"",
        "That matches the rest of the poem: lines 2 and 4 rhyme."
      ] },
    "SK-TT4a-P3": {
      hints: [
        "Repetition makes an idea stand out. Say the repeated line out loud and listen to it.",
        "What do the words tap, tap, tap make you think of, and what is falling in every stanza?",
        "The speaker is snug under a blanket, so the line is not about being afraid. Test the other choices against all three stanzas."
      ],
      how: [
        "Tap, tap, tap sounds like raindrops hitting a roof.",
        "The line comes back at the start of every stanza, so the reader hears the rain again and again.",
        "The answer is \"to help the reader hear the steady sound of the rain again and again.\"",
        "The rain keeps falling in stanza 2, the speaker is cozy, and the garden is drinking, not needing more."
      ] },
    "SK-TT4a-P4": {
      hints: [
        "Each stanza has its own job. Read one stanza at a time and ask what is happening.",
        "Look at where the speaker is in stanza 1, what is outside in stanza 2, and what time of day it is in stanza 3.",
        "The yard and the garden come up in the middle stanza, not the first one. Now decide which of the other two sentences fits the start and which fits the end."
      ],
      how: [
        "Stanza 1: the speaker pulls the blanket up and snuggles in while it rains.",
        "Stanza 2: puddles grow in the yard, and the garden drinks the rain.",
        "Stanza 3: the rain gets softer and stops, and the morning sun comes out."
      ] },
    "SK-TT4a-P5": {
      hints: [
        "To see how a poem changes, compare how it starts with how it ends.",
        "Check both halves of each Part A choice: the start of the poem and the end.",
        "The poem starts at night, not on a sunny day. For Part B, the line you choose must match your Part A answer."
      ],
      how: [
        "Stanza 1: rain drums on the roof all night while the speaker is in bed.",
        "Stanza 3: the rain gets softer, stops, and the morning sun comes out.",
        "Part A: It moves from a rainy night to a sunny morning. Part B: \"The morning sun comes peeking out\""
      ] }
  },
  test: [
    { id: "SK-TT4a-T1", type: "dropdown", points: 2, dok: 1, passages: ["p2"],
      prompt: "Complete the sentence about the rhyme pattern in \"My Kite.\"",
      text: "In each stanza, line 1 rhymes with line {0}, and line 3 rhymes with line {1}.",
      slots: [
        { options: ["4", "3", "2"], answer: 2 },
        { options: ["1", "4", "2"], answer: 1 }
      ],
      clue: "Choose one stanza. Read the last word of each line out loud, and listen for the pairs that sound alike.",
      why: "Line 1 rhymes with line 2, and line 3 rhymes with line 4. In stanza 1, hill rhymes with still, and by rhymes with sky. The other stanzas follow the same pattern: trees and breeze, right and might, sun and run, last and fast." },
    { id: "SK-TT4a-T2", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "Which sentence best describes how the poem is built?",
      choices: [
        { text: "It has three stanzas with four lines in each one.", correct: true },
        { text: "It has three stanzas with three lines in each one." },
        { text: "It has three stanzas with six lines in each one." },
        { text: "It has four stanzas with three lines in each one." }
      ],
      clue: "Count the groups of lines first. Then count the lines in one group.",
      why: "The answer is \"It has three stanzas with four lines in each one.\" There are three groups of lines with spaces between them, and each group has four lines. The other choices count the lines in each stanza wrong, or count four stanzas." },
    { id: "SK-TT4a-T3", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why does the poet repeat the words \"Higher, higher\" at the start of stanzas 2 and 3?",
      choices: [
        { text: "to show that the kite keeps rising up into the sky", correct: true },
        { text: "to show that the kite is falling back to the ground" },
        { text: "to show that the wind is growing calm and slow" },
        { text: "to show that the speaker is tired from running" }
      ],
      clue: "Think about what the word higher means. What is the kite doing in stanzas 2 and 3? Saying the word twice adds to that feeling.",
      why: "The answer is \"to show that the kite keeps rising up into the sky.\" Higher means going farther up, and saying it twice makes the kite seem to climb and climb, past the trees and near the sun. The kite only floats down at the very end." },
    { id: "SK-TT4a-T4", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Match each sentence to the stanza it describes.",
      cols: ["Stanza 1", "Stanza 2", "Stanza 3"],
      rows: [
        { text: "The kite dances above the trees.", answer: 1 },
        { text: "The wind slows down, and the kite comes down.", answer: 2 },
        { text: "A gust of wind lifts the kite off the ground.", answer: 0 }
      ],
      clue: "Read one stanza at a time. Ask: Where is the kite now, and what is the wind doing?",
      why: "Stanza 1: a gust of wind lifts the kite off the ground. Stanza 2: the kite dances above the trees. Stanza 3: the wind slows down, and the kite comes down. The stanzas follow the kite from start to finish." },
    { id: "SK-TT4a-T5", type: "hottext", points: 1, dok: 1, passages: ["p2"],
      prompt: "Which line rhymes with \"It dips and dances in the breeze\"? Choose the line in the poem.",
      targets: ["p2:1:1", "p2:1:2", "p2:2:1", "p2:2:3", "p2:2:4"],
      answer: ["p2:2:1"], pick: 1,
      clue: "Say breeze out loud. Then read the last word of each line you can choose. Which one ends with the same sound?",
      why: "The answer is \"Higher, higher, past the trees,\" because trees rhymes with breeze. Hill, still, right and might do not end with the same sound as breeze." }
  ],
  /* PP-004 form B of the skill check (agent formB-lit). Same code, points (7) and DOK mix
     (1,1,2,2,1) as form A, on new poems p3 and p4. NEEDS INDEPENDENT REVIEW.
     See docs/audits/work/pp004-formB-formB-lit.md. */
  testB: [
    { id: "SK-TT4a-TB1", type: "ms", points: 2, dok: 1, passages: ["p3"], pick: 2,
      prompt: "Which TWO sentences about the rhymes in \"Firefly Night\" are true?",
      choices: [
        { text: "In each stanza, line 1 rhymes with line 3.", correct: true },
        { text: "In each stanza, line 2 rhymes with line 4.", correct: true },
        { text: "In each stanza, line 1 rhymes with line 2." },
        { text: "In each stanza, line 3 rhymes with line 4." },
        { text: "None of the lines in the poem rhyme." }
      ],
      clue: "Pick one stanza. Say the last word of each line out loud and listen for the pairs that end with the same sound. Then check another stanza.",
      why: "The answers are \"line 1 rhymes with line 3\" and \"line 2 rhymes with line 4.\" In stanza 1, hill rhymes with still, and gray rhymes with away. Stanza 2 has light and bright, tree and me. Stanza 3 has slow and go, hands and stands. Lines that sit next to each other, like hill and gray, do not rhyme." },
    { id: "SK-TT4a-TB2", type: "mc", points: 1, dok: 1, passages: ["p3"],
      prompt: "A stanza is a group of lines. Which line begins the second stanza of \"Firefly Night\"?",
      choices: [
        { text: "Then blink, blink, blink, a tiny light", correct: true },
        { text: "And day has gone away." },
        { text: "Then blink, blink, blink, a spark so bright" },
        { text: "I cup one gently, soft and slow," }
      ],
      clue: "Find the spaces in the poem. Each space ends one stanza. Count the groups of lines from the top.",
      why: "The answer is \"Then blink, blink, blink, a tiny light.\" The first stanza ends with \"And day has gone away.\" After the space, the second stanza starts. Another line in stanza 2 also starts with blink, blink, blink, but it is the third line, not the first, and \"I cup one gently, soft and slow\" begins the third stanza." },
    { id: "SK-TT4a-TB3", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Why does the poet repeat the words \"blink, blink, blink\" in stanzas 2 and 3?",
      choices: [
        { text: "to show the fireflies' lights going on and off", correct: true },
        { text: "to show that the speaker's eyes are getting sleepy" },
        { text: "to show that the sun is going down behind the hill" },
        { text: "to tell the reader that fireflies make a loud sound" }
      ],
      clue: "Look at what comes right after the repeated words each time. What is doing the blinking?",
      why: "The answer is \"to show the fireflies' lights going on and off.\" Each time, the words come with a tiny light or a bright spark, and saying blink three times gives the poem a beat, like the lights going on, off, on. The speaker is awake and catching a firefly, the sun went down in stanza 1, and the poem never says fireflies make noise." },
    { id: "SK-TT4a-TB4", type: "match", points: 2, dok: 2, passages: ["p3"],
      prompt: "What happens in each stanza? Match each summary to its stanza.",
      cols: ["Stanza 1", "Stanza 2", "Stanza 3"],
      rows: [
        { text: "The speaker holds a firefly in cupped hands and then lets it go.", answer: 2 },
        { text: "Evening comes, and the yard turns dark and quiet.", answer: 0 },
        { text: "Tiny lights float up and drift close to the speaker.", answer: 1 }
      ],
      clue: "Read one stanza at a time. Ask: Is this about the night beginning, the lights showing up, or what the speaker does?",
      why: "Stanza 1: evening comes, and the yard turns dark and quiet. Stanza 2: tiny lights float up and drift close to the speaker. Stanza 3: the speaker holds a firefly in cupped hands and then lets it go. Each stanza has its own job: first the scene is set, then the fireflies arrive, then the speaker acts." },
    { id: "SK-TT4a-TB5", type: "mc", points: 1, dok: 1, passages: ["p4"],
      prompt: "In \"Snail Climb,\" which word from the poem rhymes with the word be?",
      choices: [
        { text: "me", correct: true },
        { text: "wall" },
        { text: "top" },
        { text: "slow" }
      ],
      clue: "Say be out loud. Then say each choice. Which one ends with the same sound?",
      why: "The answer is me. Be and me end with the same long e sound, so lines 2 and 4 rhyme. Wall and top end lines 1 and 3, and they do not rhyme with anything. Slow does not end with the e sound." }
  ]
});

PP.addLesson({
  code: "3.T.T.4.b",
  title: "Writing a rhyming poem with two or more stanzas",
  teach: {
    big: "To write a rhyming poem, pick a rhyme pattern, use it in every stanza, and choose rhyming words that still make sense and help your reader feel something.",
    points: [
      "Pick a topic and a feeling you want your reader to have, like cozy, excited or silly.",
      "Think about your audience, the people who will read or hear your poem. Sound words, action words and a fun or surprising ending help them picture your poem and keep them listening.",
      "Write at least two stanzas, and leave a space between them. Choose a rhyme pattern, such as lines 1 and 2 rhyme and lines 3 and 4 rhyme. Use that same pattern in every stanza.",
      "Before you write, make a list of rhyming words, like sun, fun, run and done.",
      "A good rhyming line must also make sense and stay on your topic. Never pick a rhyme that changes what you mean."
    ],
    words: [
      { term: "stanza", means: "a group of lines in a poem" },
      { term: "rhyme pattern", means: "which lines rhyme with each other" },
      { term: "rhyme", means: "words that end with the same sound, like bee and tree" },
      { term: "sound word", means: "a word that sounds like the noise it names, like buzz or splash" }
    ],
    examples: [
      {
        label: "Example: stanza 1",
        lines: ["The rain comes down, the sky is gray,", "But I don't mind a rainy day.", "I hop and splash from street to door,", "Then ask the clouds, \"Can you rain more?\""],
        note: "Lines 1 and 2 rhyme (gray, day), and lines 3 and 4 rhyme (door, more). Hop and splash help the reader feel the fun of a rainy day."
      },
      {
        label: "Example: stanza 2",
        lines: ["When Mom calls out, \"It's time to eat!\"", "I clomp inside on soggy feet.", "My boots go squishing everywhere.", "I leave a puddle on my chair!"],
        note: "Stanza 2 keeps the same pattern: eat and feet rhyme, and everywhere and chair rhyme. The silly ending gives the poem a smile."
      }
    ],
    tip: "On the test, you may choose the line that best finishes a stanza or that keeps the rhyme pattern. The best line has to rhyme in the right place AND make sense with the rest of the poem. Some questions name a feeling, like calm or excited. Then every choice may rhyme, so pick the line whose words and sounds make the reader feel that way. You may also put lines in order or match a stanza to its rhyme pattern."
  },
  learn: [
    {
      show: ["The waves roll in across the sand,", "______________________"],
      ask: "What could line 2 be, so that it rhymes with line 1 and stays on the topic of the beach?",
      steps: [
        "Find the word you need to rhyme with. Line 1 ends with sand.",
        "Make a list of words that rhyme with sand: hand, land, band, grand.",
        "Pick a word that fits a beach. Hand works, because you can hold a seashell in your hand. Then write a line that makes sense and ends with that word.",
        "Action words and sound words, like splash or crash, make a line feel lively. Lines that are out of order can be put back by matching the end words that rhyme, and then thinking about what happens first."
      ],
      answer: "Line 2 could be \"I hold a seashell in my hand.\""
    },
    {
      show: ["The pumpkin patch is orange and wide,", "With pumpkins big and small.", "I search until I find the one", "______________________", "Line choice: That's round and smooth and tall.", "Line choice: I'll carve with Dad tonight."],
      ask: "In this poem, lines 2 and 4 rhyme. Which line choice best finishes the stanza?",
      steps: [
        "Find the rhyme pattern. Lines 2 and 4 rhyme, so line 4 must rhyme with small.",
        "Check each choice. Tall rhymes with small. Tonight does not.",
        "Make sure the rhyming line makes sense. \"I find the one that's round and smooth and tall\" fits a pumpkin.",
        "Some questions name a feeling, and then every choice may rhyme. Listen to the words. If the poet wants a cozy feeling, soft, warm and snug sound cozy, but crash and bang do not."
      ],
      answer: "The best line is \"That's round and smooth and tall.\" It rhymes with small and makes sense."
    },
    {
      show: ["Stanza 1: The snow falls soft on Mountain Road, / It piles up white and deep. / The pine trees wear their winter coats, / The forest is asleep.", "Stanza 2: The rabbits hide inside their holes, / The birds are tucked away. / The quiet woods are calm and still, / The snow will melt someday."],
      ask: "Does stanza 2 keep the same rhyme pattern as stanza 1?",
      steps: [
        "Find the pattern in stanza 1. The end words are Road, deep, coats, asleep. Deep and asleep rhyme, so lines 2 and 4 rhyme.",
        "Check stanza 2 the same way. The end words are holes, away, still, someday.",
        "Away and someday rhyme, and they are lines 2 and 4.",
        "If a stanza broke the pattern, you would revise its last line or add a new stanza with a new ending word that rhymes with its partner."
      ],
      answer: "Yes. In both stanzas, lines 2 and 4 rhyme, so stanza 2 keeps the pattern."
    }
  ],
  write: {
    prompt: ["Write a rhyming poem about something you love to do outside.", "Write at least two stanzas of four lines each. Choose a rhyme pattern, and use the same pattern in both stanzas. Pick words that help your reader feel what you feel. Then read your poem out loud to someone, and watch how they react."],
    checklist: [
      "I wrote at least two stanzas, with a space between them.",
      "I used a rhyme pattern, like lines 1 and 2 rhyme and lines 3 and 4 rhyme.",
      "I used the same rhyme pattern in every stanza.",
      "My rhyming words make sense and stay on my topic.",
      "I chose words that help my reader feel how I feel.",
      "I read my poem to someone, and my words helped them picture it or smile."
    ],
    rows: 10
  },
  parent: "Play a rhyme game in the car or at dinner: say a line like \"I saw a cat,\" and take turns adding a second line that rhymes and makes sense. Then try a second pair that rhymes with a new sound.",
  passages: [
    { id: "p1", title: "Leaf Day", byline: "Jaylen's first draft", genre: "Student draft (poem)",
      lines: [
        ["The leaves are falling, red and brown.", "They spin and twirl and flutter down.", "I rake them in a pile so tall,", "It's taller than the garden wall."],
        ["I take a running start and leap", "And land inside the crunchy heap.", "The leaves go flying everywhere.", "They stick to my sweater and my hair."],
        ["The sun sinks low, the air is cold,", "My cheeks are pink, my nose is red.", "Then Dad and I go in to eat", "A bowl of soup, a cozy treat."]
      ] },
    { id: "p2", title: "At the Pond", byline: "Rosa's first draft", genre: "Student draft (poem)",
      lines: [
        ["A frog sits on a lily pad,", "As still as still can be.", "His eyes poke up above the pond.", "He's watching you and me."],
        ["A dragonfly zips over him,", "Its wings a shiny blue.", "The frog shoots out his long, long tongue,", "But the dragonfly gets away."],
        ["The sun goes down behind the trees.", "The pond turns gold, then gray.", "The frog sings out his evening song", "To say goodnight to day."]
      ] },
    /* B4-b4a passages begin */
    { id: "p3", title: "The Morning Ferry", byline: "Malia's first draft", genre: "Student draft (poem)",
      lines: [
        ["At half past seven, I stand and wait,", "My backpack by my feet.", "A big white ferry crosses the bay", "And docks where the two roads meet."],
        ["We chug past the fishing dock,", "The painted boats, the shore,", "The tall old lighthouse, the quiet beach,", "The bridge we sail beneath once more."],
        ["The windows fog, and someone sings", "A silly song we know.", "We bounce along the bumpy waves", "Until we reach the school."],
        ["The captain smiles and says good morning,", "His voice is warm and bright.", "We hop off at the landing gate", "And wave until he's out of sight."]
      ] },
    { id: "p4", title: "Dance Class", byline: "Caleb's first draft", genre: "Student draft (poem)",
      lines: [
        ["The music starts, we stand up tall,", "We wait to hear the teacher call.", "She claps her hands, we all begin,", "We turn around, we twirl and spin."],
        ["I kick my feet and stretch out wide,", "I glide across from side to side.", "My teacher calls out, \"That looks great!\"", "I smile and stand up proud and straight."],
        ["The floor is warm, the day is long,", "Our teacher hums a happy song.", "We bow and wave, one by one,", "We put our shoes away and rest."],
        ["My shoes are off, my socks are damp,", "I flop down by the evening lamp.", "I close my eyes with one last smile,", "And rest my head and dream a while."]
      ] }
    /* B4-b4a passages end */
  ],
  practice: [
    { id: "SK-TT4b-P1", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Jaylen's poem rhymes in pairs: lines 1 and 2, then lines 3 and 4. In one pair, the second line does not rhyme with the first. Which line is it? Choose the line in the poem.",
      targets: ["p1:2:3", "p1:2:4", "p1:3:2", "p1:3:3", "p1:3:4"],
      answer: ["p1:3:2"], pick: 1,
      clue: "Read the end words of each pair out loud, one stanza at a time. Which pair does not sound alike?",
      why: "The answer is \"My cheeks are pink, my nose is red.\" In Jaylen's poem, lines 1 and 2 rhyme and lines 3 and 4 rhyme. In stanza 3, line 1 ends with cold, but line 2 ends with red, which does not rhyme with cold." },
    { id: "SK-TT4b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which line should replace stanza 3, line 2 to keep Jaylen's rhyme pattern?",
      choices: [
        { text: "The sky turns orange, red, and gold.", correct: true },
        { text: "My leaf pile is so very old." },
        { text: "I zip my jacket to my chin." },
        { text: "My cheeks are pink, my nose is too." }
      ],
      clue: "Line 2 must rhyme with the last word of line 1. It must also make sense in a poem about a fall evening.",
      why: "The answer is \"The sky turns orange, red, and gold.\" Gold rhymes with cold, and a sunset sky fits the sun sinking low. Old rhymes too, but the leaf pile was just made, so that line does not make sense. Chin and too do not rhyme with cold." },
    { id: "SK-TT4b-P3", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["I ride my bike along the street.", "I pedal fast with both my feet.", "The wind is cool against my face.", "______________________"],
      prompt: "In this poem, lines 1 and 2 rhyme, and lines 3 and 4 rhyme. Which line best finishes the stanza?",
      choices: [
        { text: "I feel like I am in a race!", correct: true },
        { text: "I ride my bike down to the park." },
        { text: "I smile and pedal even faster." },
        { text: "My teddy bear has a funny face." }
      ],
      clue: "Line 4 must rhyme with face. It must also stay on the topic of the bike ride.",
      why: "The answer is \"I feel like I am in a race!\" Race rhymes with face, and it fits riding fast with the wind on your face. Park and faster do not rhyme with face. The teddy bear line ends with face, but a teddy bear has nothing to do with the bike ride." },
    { id: "SK-TT4b-P4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Kayla is writing a poem about the night sky. Choose the word for each blank that rhymes and makes sense.",
      text: "The moon is shining big and bright. It lights my room all through the {0}. The stars are twinkling way up high, Like tiny sparkles in the {1}.",
      slots: [
        { options: ["light", "dark", "night"], answer: 2 },
        { options: ["sigh", "clouds", "sky"], answer: 2 }
      ],
      clue: "Read each pair of lines. The blank must rhyme with the end of the line before it, and it must make sense.",
      why: "The first blank needs \"night\": night rhymes with bright, and the moon shines at night. Light rhymes with bright, but \"all through the light\" does not make sense. Dark makes sense but does not rhyme. The second blank needs \"sky\": sky rhymes with high, and stars are in the sky. Sigh rhymes with high, but \"sparkles in the sigh\" does not make sense, and clouds does not rhyme." },
    { id: "SK-TT4b-P5", type: "mc", points: 1, dok: 3, passages: ["p1"],
      prompt: "Jaylen wants to add a fourth stanza to his poem. Which stanza keeps the same rhyme pattern as the rest of his poem?",
      choices: [
        { text: "In spring, the tree grows leaves of green, / The prettiest that I have seen. / I'll wait for fall to come around, / When leaves come tumbling to the ground.", correct: true },
        { text: "In spring, the tree grows leaves of green, / They are so soft and new. / I'll wait for fall to come around, / And jump in them with you." },
        { text: "In spring, the tree grows leaves of green, / The prettiest that I have seen. / I'll wait for fall to come again, / And rake them in a giant pile." },
        { text: "In spring, the tree grows leaves of green, / The brightest ones I know. / I'll wait for fall to come around, / And watch them all turn red." }
      ],
      clue: "Jaylen's pattern is: lines 1 and 2 rhyme, and lines 3 and 4 rhyme. Check both pairs in each choice. Only one stanza gets both pairs right.",
      why: "The answer is \"In spring, the tree grows leaves of green, / The prettiest that I have seen. / I'll wait for fall to come around, / When leaves come tumbling to the ground.\" Green rhymes with seen, and around rhymes with ground, so it matches Jaylen's pattern. In the other stanzas, either only lines 2 and 4 rhyme, only the first pair rhymes, or nothing rhymes." },
    { id: "SK-TT4b-P6", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["The rain has stopped, the house is still,", "My lamp is glowing low.", "I tuck my toes beneath the quilt", "______________________"],
      prompt: "Mia wants the end of her stanza to make the reader feel calm and sleepy. Lines 2 and 4 rhyme. Which line best does that?",
      choices: [
        { text: "And drift to sleep, so soft and slow.", correct: true },
        { text: "Then jump up fast, it's time to go!" },
        { text: "And hear the wild winds start to blow." },
        { text: "And shout out loud, \"Hello! Hello!\"" }
      ],
      clue: "Every choice rhymes with low. So look at the words in each line. Do they sound quiet and gentle, or loud and busy?",
      why: "The answer is \"And drift to sleep, so soft and slow.\" Words like drift, soft and slow sound quiet and gentle, and they match a still house and a low lamp. That makes the reader feel calm and sleepy. Jumping up fast and shouting feel loud and busy, and wild winds feel stormy, not calm." }
  ],
  /* ---------- B4-b4a begin ---------- */
  /* ---------- B4 (expansion 2026-10-22, author b4a; docs/expansion-2026-10-22/01-architecture.md 2.2-2.3) ----------
     Selected-response core (the Milestones assesses this standard through revise/edit items). The write task stays
     OUTSIDE the fifteen: it is adult-scored and never awards a pass. Set 1 uses new items on a soup stanza, Jaylen's
     draft (p1) and a lemonade stand stanza, plus P5 and P6 by { ref }; set 2 uses p3 (ferry ride) and a pattern match;
     set 3 uses p4 (dance class) plus a farm-visit stanza. Practice Together is P1-P4 (P4 revised so the rhyme-only and
     sense-only words are both tempting). Hints and Show me how for P1-P6 are in addons.
     Author log: docs/expansion-2026-10-22/batches/B4-b4a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { id: "SK-TT4b-C01", type: "order", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: [],
        prompt: "A poem about making soup rhymes in pairs: lines 1 and 2 rhyme, and lines 3 and 4 rhyme. Put the four lines in the order that makes the best stanza.",
        steps: [
          "Grandpa lights the stove at noon,",
          "And hums a quiet, happy tune,",
          "Then I set the bowls out, one by one,",
          "And we sit down when the soup is done."
        ],
        clue: "In this pattern, lines that rhyme sit side by side. Listen to the last word of each line to find the pairs.",
        hints: [
          "In this pattern, lines that rhyme sit side by side. Listen to the last word of each line to find the pairs.",
          "Say each line out loud and notice which lines end with the same sound. Then think about what happens first and what happens next.",
          "The soup cannot be done until the stove is lit. Use that to decide which pair comes first, then use the rhymes to finish."
        ],
        how: [
          "Find the pairs by their end words: noon and tune rhyme, and one and done rhyme.",
          "Each pair sits together, because lines 1 and 2 rhyme and lines 3 and 4 rhyme.",
          "Grandpa has to light the stove before the soup can be done, so the stove pair comes first. A line that begins with And joins on to the line before it, so each And line comes second in its pair.",
          "The order is: Grandpa lights the stove at noon, And hums a quiet happy tune, Then I set the bowls out one by one, And we sit down when the soup is done."
        ],
        misconception: "A common mix-up is putting lines in an order that tells the story but ignores the rhyme. Both the rhyme pairs and the story order must work.",
        why: "The order is: Grandpa lights the stove at noon; And hums a quiet, happy tune; Then I set the bowls out, one by one; And we sit down when the soup is done. Noon and tune rhyme, and one and done rhyme, and the story goes from lighting the stove to sitting down to eat." },
      { id: "SK-TT4b-C02", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: ["p1"],
        prompt: "Jaylen wants stanza 2, line 3 to sound louder and more exciting. Which line should replace \"The leaves go flying everywhere\" and still rhyme with line 4?",
        choices: [
          { text: "Whoosh! The leaves explode into the air!", correct: true },
          { text: "The leaves float down without a care." },
          { text: "The leaves are brown, and they are there." },
          { text: "Whoosh! The leaves explode up high!" }
        ],
        clue: "A good replacement has to rhyme in the right place AND give the reader the feeling the poet wants. Sound words and action words help.",
        hints: [
          "A good replacement has to rhyme in the right place AND give the reader the feeling the poet wants. Sound words and action words help.",
          "Read line 4 of stanza 2 and say its last word out loud. Then check each choice for the ending sound and for the feeling.",
          "A line that only tells the color of the leaves does not make the reader feel excited. Look at the choices that are left."
        ],
        how: [
          "Line 4 ends with hair, so the new line 3 has to end with a word that rhymes with hair.",
          "The new line should also feel loud and exciting, so look for a sound word and a strong action word.",
          "The answer is: Whoosh! The leaves explode into the air! Air rhymes with hair, whoosh is a sound word and explode is a strong action word.",
          "\"Float down without a care\" rhymes but feels calm, \"brown and they are there\" rhymes but is plain, and \"explode up high\" is exciting but does not rhyme with hair."
        ],
        misconception: "A common mix-up is choosing the exciting line without checking the rhyme. The line must rhyme AND give the feeling.",
        why: "The answer is: Whoosh! The leaves explode into the air! Air rhymes with hair, and whoosh and explode make the line loud and exciting. \"Float down without a care\" is calm, \"brown and they are there\" is plain, and \"explode up high\" does not rhyme with hair." },
      { ref: "SK-TT4b-P5" },
      { id: "SK-TT4b-C04", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: [],
        prompt: "A poem about a lemonade stand rhymes in pairs: lines 1 and 2 rhyme, and lines 3 and 4 rhyme. Choose the best word for each blank so the poem rhymes and makes sense.",
        text: "I set my lemonade stand up, / I pour the juice into each {0}. / The line is long, the sun is hot, / I sell them fast, I sell the {1}.",
        slots: [
          { options: ["cup", "pup", "glass"], answer: 0 },
          { options: ["lot", "knot", "most"], answer: 0 }
        ],
        clue: "Each blank has to rhyme with the end of its pair AND make sense. A word can rhyme and still be wrong.",
        hints: [
          "Each blank has to rhyme with the end of its pair AND make sense. A word can rhyme and still be wrong.",
          "Read each pair of lines out loud. For each blank, say the word that comes before it in the rhyming line, then try each choice.",
          "Nobody pours juice into a pup, so cross that word out. Then decide between the other choices for each blank."
        ],
        how: [
          "Blank 1 must rhyme with up. Blank 2 must rhyme with hot.",
          "Blank 1: cup rhymes with up, and you pour juice into a cup. Pup rhymes but makes no sense, and glass makes sense but does not rhyme.",
          "Blank 2: lot rhymes with hot, and \"I sell the lot\" means she sold all of them. Knot rhymes but does not fit, and most fits the meaning but does not rhyme.",
          "So the answers are cup and lot."
        ],
        misconception: "A common mix-up is choosing the word that makes sense without checking the rhyme, or the reverse. Each blank needs both.",
        why: "Blank 1 needs \"cup\": it rhymes with up, and you pour juice into a cup. Pup rhymes but makes no sense, and glass does not rhyme. Blank 2 needs \"lot\": it rhymes with hot, and \"I sell the lot\" means all of them. Knot rhymes but does not fit, and most does not rhyme." },
      { ref: "SK-TT4b-P6" }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT4b-C06", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: ["p3"],
        prompt: "Look at stanza 1 of \"The Morning Ferry.\" Which sentence describes the rhyme pattern it uses?",
        choices: [
          { text: "Lines 2 and 4 rhyme.", correct: true },
          { text: "Lines 1 and 2 rhyme, and lines 3 and 4 rhyme." },
          { text: "Lines 1 and 3 rhyme." },
          { text: "No lines rhyme." }
        ],
        clue: "A rhyme pattern tells which lines end with the same sound. Say the last word of each line out loud and listen for matches.",
        hints: [
          "A rhyme pattern tells which lines end with the same sound. Say the last word of each line out loud and listen for matches.",
          "Say the last word of all four lines in stanza 1. Then decide which lines end with the same sound.",
          "In stanza 1, the last words of lines 1 and 2 are wait and feet, which do not match. Look at the choices that are left."
        ],
        how: [
          "List the last word of each line in stanza 1: wait, feet, bay, meet.",
          "Feet and meet rhyme, and they are lines 2 and 4. Wait and bay do not rhyme with anything.",
          "Lines 1 and 2 do not rhyme, and lines 1 and 3 do not rhyme.",
          "The answer is: Lines 2 and 4 rhyme."
        ],
        misconception: "A common mix-up is thinking every poem rhymes in pairs. Check which lines really match.",
        why: "The answer is: Lines 2 and 4 rhyme. In stanza 1, feet and meet rhyme, and they are lines 2 and 4. Wait and bay do not rhyme with anything, so lines 1 and 2 do not rhyme, lines 1 and 3 do not rhyme, and the stanza does have a rhyme." },
      { id: "SK-TT4b-C07", type: "hottext", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: ["p3"], pick: 1,
        prompt: "Every stanza in this poem should follow the same rhyme pattern. One stanza breaks it. Choose the last line of that stanza.",
        targets: ["p3:1:4", "p3:2:2", "p3:2:4", "p3:3:4", "p3:4:4"],
        answer: ["p3:3:4"],
        clue: "Compare the last word of line 2 with the last word of line 4 in each stanza. Do they sound alike?",
        hints: [
          "Compare the last word of line 2 with the last word of line 4 in each stanza. Do they sound alike?",
          "Check the stanzas one at a time, and say each pair of end words out loud.",
          "In stanza 1, feet and meet rhyme, so that line 4 follows the pattern. Check the lines that are left."
        ],
        how: [
          "Check each stanza by saying the end words of lines 2 and 4.",
          "Stanza 1: feet and meet rhyme. Stanza 2: shore and more rhyme. Stanza 4: bright and sight rhyme.",
          "Stanza 3: line 2 ends with know, and line 4 ends with school. Those do not rhyme.",
          "The answer is stanza 3, line 4: \"Until we reach the school.\""
        ],
        misconception: "A common mix-up is choosing line 2, because it is the other word in the pair. The question asks for line 4.",
        why: "The answer is stanza 3, line 4: \"Until we reach the school.\" Line 2 ends with know, and school does not rhyme with it. In the other stanzas, feet and meet, shore and more, and bright and sight rhyme." },
      { id: "SK-TT4b-C08", type: "match", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: [],
        prompt: "Match each stanza to the rhyme pattern it uses.",
        cols: [
          "Lines 1 and 2 rhyme, and lines 3 and 4 rhyme",
          "Lines 2 and 4 rhyme",
          "No lines rhyme"
        ],
        rows: [
          { text: "The cat sat on the mat, / She wore a funny hat. / The dog sat by the door, / And barked and barked some more.", answer: 0 },
          { text: "My lunch box sits beside my bag, / It holds a juicy pear. / I munch a sandwich and a plum / And sit down on my chair.", answer: 1 },
          { text: "The clock is on the wall, / The pencil is on the desk, / The window opens wide, / The room is warm today.", answer: 2 }
        ],
        clue: "To find a rhyme pattern, say the last word of each line and listen for matches. Then write down which lines matched.",
        hints: [
          "To find a rhyme pattern, say the last word of each line and listen for matches. Then write down which lines matched.",
          "For each stanza, list the four end words. Then compare line 1 with line 2, line 3 with line 4, and line 2 with line 4.",
          "Say the end words of lines 2 and 4 in each stanza. Then decide which pattern each stanza fits."
        ],
        how: [
          "The cat stanza ends with mat, hat, door, more. Mat and hat rhyme, and door and more rhyme, so lines 1 and 2 rhyme and lines 3 and 4 rhyme.",
          "The lunch box stanza ends with bag, pear, plum, chair. Pear and chair rhyme, and they are lines 2 and 4.",
          "The clock stanza ends with wall, desk, wide, today. None of them rhyme.",
          "So the matches are: cat stanza with pairs, lunch box stanza with lines 2 and 4, and clock stanza with no rhyme."
        ],
        misconception: "A common mix-up is calling every stanza that has a rhyme the pairs pattern. Check exactly which lines match.",
        why: "The cat stanza rhymes in pairs (mat and hat, door and more). The lunch box stanza rhymes in lines 2 and 4 (pear and chair). The clock stanza has no rhymes (wall, desk, wide, today)." },
      { id: "SK-TT4b-C09", type: "hottext", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: ["p3"], pick: 1,
        prompt: "The poet wants readers to hear the ferry. Which line has a word that sounds like the noise it names? Choose the line.",
        targets: ["p3:1:3", "p3:2:1", "p3:2:3", "p3:3:3", "p3:4:2"],
        answer: ["p3:2:1"],
        clue: "A sound word sounds like the noise it names, like buzz or splash. Say each word out loud and listen for the noise.",
        hints: [
          "A sound word sounds like the noise it names, like buzz or splash. Say each word out loud and listen for the noise.",
          "Read each line aloud and listen for a word that makes its own noise.",
          "\"Crosses the bay\" tells about a motion, not a noise. Look at the lines that are left."
        ],
        how: [
          "A sound word makes the sound of the thing it names.",
          "In stanza 2, \"chug\" sounds like the noise a ferry engine makes as it pushes along.",
          "The answer is stanza 2, line 1: \"We chug past the fishing dock,\"",
          "\"Crosses the bay\" is an action, \"quiet beach\" is a quiet place, \"bumpy waves\" tells how the water feels, and \"warm and bright\" tells about a voice."
        ],
        misconception: "A common mix-up is choosing any action word. A sound word sounds like the noise it names.",
        why: "The answer is stanza 2, line 1, \"We chug past the fishing dock,\" because chug sounds like the noise of a ferry engine. The other lines tell about actions, places or how things look or feel." },
      { id: "SK-TT4b-C10", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.b"], passages: ["p3"],
        prompt: "Malia plans to read \"The Morning Ferry\" to her class. She wants to add a last stanza that keeps the same rhyme pattern and makes her classmates smile. Which stanza should she add?",
        choices: [
          { text: "The boat is full of singing friends, / Their voices loud and clear. / If you could hear us across the bay, / You'd hear us cheer and cheer!",
            correct: true },
          { text: "The boat is full of sleepy friends, / Their eyes are closed up tight. / The engine hums low, the lights are dim, / And everything is quiet tonight." },
          { text: "The boat is full of singing friends, / Their voices loud and clear. / If you could hear us across the bay, / You'd hear us all day long." },
          { text: "The boat is full of sleepy friends, / Their eyes are closed up tight. / The engine hums low, the lights are dim, / And no one says a word." }
        ],
        clue: "When you write for an audience, you choose words that give the listeners the feeling you want. The stanza must also keep the same rhyme pattern.",
        hints: [
          "When you write for an audience, you choose words that give the listeners the feeling you want. The stanza must also keep the same rhyme pattern.",
          "Check lines 2 and 4 of each choice for the rhyme, and read the words to decide what feeling each one gives.",
          "A stanza about sleepy friends and dim lights has a quiet, calm feeling. Look at the choices that are left."
        ],
        how: [
          "The poem's pattern is that lines 2 and 4 rhyme, and the new stanza should make classmates smile.",
          "The singing stanza has lines 2 and 4 that rhyme (clear and cheer), and its singing and cheering words feel fun.",
          "The answer is the stanza about singing friends that ends \"You'd hear us cheer and cheer!\"",
          "The sleepy stanzas feel calm, not funny. The singing stanza that ends \"all day long\" feels fun, but long does not rhyme with clear."
        ],
        misconception: "A common mix-up is choosing the stanza with the right feeling without checking the rhyme. It needs both.",
        why: "The answer is: The boat is full of singing friends, / Their voices loud and clear. / If you could hear us across the bay, / You'd hear us cheer and cheer! Clear and cheer rhyme in lines 2 and 4, and the singing and cheering feel fun. The sleepy stanzas feel calm, and the other singing stanza ends with long, which does not rhyme with clear." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT4b-C11", type: "ms", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: ["p4"], pick: 2,
        prompt: "Which TWO lines in \"Dance Class\" use action words that help the reader picture someone dancing?",
        choices: [
          { text: "\"I kick my feet and stretch out wide,\"", correct: true },
          { text: "\"I glide across from side to side.\"", correct: true },
          { text: "\"The floor is warm, the day is long,\"" },
          { text: "\"Our teacher hums a happy song.\"" },
          { text: "\"My shoes are off, my socks are damp,\"" }
        ],
        clue: "Action words tell what someone does, like leap or reach. Look for lines that show someone moving on the dance floor.",
        hints: [
          "Action words tell what someone does, like leap or reach. Look for lines that show someone moving on the dance floor.",
          "Read the lines in stanzas 2 to 4 one at a time. Ask whether each line shows a dancer moving. Choose two.",
          "\"The floor is warm\" tells about the room, not about someone dancing. Look at the choices that are left."
        ],
        how: [
          "Look for words that show a dancer moving.",
          "Kick and stretch show the dancer's feet and arms, and glide shows how the dancer moves across the floor.",
          "The answers are \"I kick my feet and stretch out wide,\" and \"I glide across from side to side.\"",
          "The floor line is about the room, the teacher line is about someone who is humming, and the socks line tells how the dancer looks afterward."
        ],
        misconception: "A common mix-up is choosing a line just because it is about dance class. The question asks for action words that show dancing.",
        why: "The answers are \"I kick my feet and stretch out wide,\" and \"I glide across from side to side.\" Kick, stretch and glide are action words that show a dancer moving. The other lines tell about the room, the teacher's humming or how the dancer looks." },
      { id: "SK-TT4b-C12", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.b"], passages: ["p4"],
        prompt: "In stanza 3 of \"Dance Class,\" lines 3 and 4 do not rhyme. Which pair of lines should replace them so the stanza rhymes in pairs and fits the end of class?",
        choices: [
          { text: "We bow and wave, one by one, / And pack our bags, all done.", correct: true },
          { text: "We bow and wave, one by one, / We put our shoes away and rest." },
          { text: "We bow and wave, one by one, / And start another dance for fun." },
          { text: "We bow and wave, one by one, / And toss our shoes across the floor." }
        ],
        clue: "A good revision has to rhyme in the right place AND keep the feeling the poem needs. Check both for each choice.",
        hints: [
          "A good revision has to rhyme in the right place AND keep the feeling the poem needs. Check both for each choice.",
          "Say the last words of the two new lines in each choice out loud, then decide how each pair of lines would fit the end of a dance class.",
          "One choice keeps the old line 4, which is the line that does not rhyme. Look at the choices that are left."
        ],
        how: [
          "The pattern is that lines 3 and 4 rhyme, and stanza 3 comes at the end of class.",
          "\"One by one\" and \"all done\" rhyme, and packing bags fits the end of class.",
          "The answer is: We bow and wave, one by one, / And pack our bags, all done.",
          "The pair that ends \"shoes away and rest\" keeps the old line that does not rhyme, \"for fun\" rhymes but starts another dance, and \"across the floor\" does not rhyme with one."
        ],
        misconception: "A common mix-up is picking a pair that rhymes without checking that it fits. The pair must rhyme AND fit the end of class.",
        why: "The answer is: We bow and wave, one by one, / And pack our bags, all done. One and done rhyme, and packing bags fits the end of class. One choice keeps the line that does not rhyme, one rhymes but starts another dance, and one does not rhyme." },
      { id: "SK-TT4b-C13", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.4.b"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Which feeling does the poet most want the reader to have at the end of \"Dance Class\"?",
          choices: [
            { text: "calm and sleepy", correct: true },
            { text: "loud and excited" },
            { text: "nervous and afraid" },
            { text: "silly and wild" }
          ] },
        partB: { prompt: "Which line from the poem best shows that feeling?",
          choices: [
            { text: "\"I close my eyes with one last smile,\"", correct: true },
            { text: "\"The music starts, we stand up tall,\"" },
            { text: "\"I kick my feet and stretch out wide,\"" },
            { text: "\"We turn around, we twirl and spin.\"" }
          ] },
        clue: "The feeling of a poem comes from its words. Pay attention to what the speaker does and sees at the very end.",
        hints: [
          "The feeling of a poem comes from its words. Pay attention to what the speaker does and sees at the very end.",
          "Reread stanza 4 and say what the speaker is doing. For Part B, choose a line that matches the feeling you chose.",
          "The line about the music starting comes from the very beginning, not the end. Look at the choices that are left in Part B, and make them match Part A."
        ],
        how: [
          "The ending is in stanza 4, where the speaker takes off their shoes, flops down by a lamp, closes their eyes and rests.",
          "Those words are quiet and slow, so the feeling is calm and sleepy.",
          "Part A: calm and sleepy. Part B: \"I close my eyes with one last smile,\"",
          "The music line is the start of the class, \"kick my feet\" is a lively action, and the twirl line is a lively action too."
        ],
        misconception: "A common mix-up is choosing the feeling of the whole poem instead of the ending. Part A asks about the end.",
        why: "Part A: calm and sleepy. Part B: \"I close my eyes with one last smile,\" Stanza 4 has the speaker resting and dreaming, which is quiet and slow. The other lines are all from the lively first half of the poem." },
      { id: "SK-TT4b-C14", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: ["p4"],
        prompt: "Caleb wants to add a fifth stanza to \"Dance Class.\" Lines 1 and 2 rhyme. Choose the best word for each blank so the lines rhyme and make sense.",
        text: "We ride home with the windows {0}, / The sun is setting over {1}.",
        slots: [
          { options: ["down", "frown", "up"], answer: 0 },
          { options: ["town", "gown", "sky"], answer: 0 }
        ],
        clue: "Each blank has to rhyme with the other line's end word AND make sense. A word can rhyme and still be wrong.",
        hints: [
          "Each blank has to rhyme with the other line's end word AND make sense. A word can rhyme and still be wrong.",
          "Read the two lines out loud with each pair of choices. Remember that the two end words must rhyme with each other.",
          "A person cannot ride home with the windows frown, so cross that word out. Then decide between the other choices for each blank."
        ],
        how: [
          "The two end words must rhyme with each other and make sense in the lines.",
          "\"Windows down\" makes sense for a ride, and down rhymes with town. \"Sun setting over town\" makes sense too.",
          "Frown and gown rhyme with down but make no sense here, and up and sky do not rhyme with the other line.",
          "So the answers are down and town."
        ],
        misconception: "A common mix-up is picking the pair that sounds familiar. Both words must rhyme and make sense.",
        why: "Blank 1 needs \"down\" and blank 2 needs \"town\": they rhyme, and a ride home can have the windows down while the sun sets over town. Frown and gown rhyme but do not make sense, and up and sky do not rhyme." },
      { id: "SK-TT4b-C15", type: "ms", points: 2, dok: 3, std: ["3.T.T.4.b"], passages: [], pick: 2,
        stem: [
          "I pack my bag for Grandma's house,",
          "A pillow and a book.",
          "I pack my toothbrush and my socks,",
          "And take a final look."
        ],
        prompt: "This is the first stanza of a poem about visiting Grandma. Which TWO stanzas should come next to keep the same rhyme pattern and a happy feeling?",
        choices: [
          { text: "Grandma opens up the door, / The hall light glows so bright. / We eat warm pie and play a game, / And laugh into the night.", correct: true },
          { text: "We build a fort from quilts and chairs, / A castle, tall and wide. / I tell the stuffed bear all my news, / And he sits by my side.", correct: true },
          { text: "Grandma's house is dark and cold, / The hall is long and bare. / I sit alone and watch the clock, / And no one else is there." },
          { text: "Grandma hugs me when I come, / The kitchen smells like pie. / We bake some cookies, big and sweet, / And eat them with a spoon." },
          { text: "Grandma hugs me at the door, / She gives me one hug more. / We bake some cookies, warm and sweet, / And share each tasty treat." }
        ],
        clue: "To keep a poem's pattern, find which lines rhyme in the first stanza. To keep its feeling, read the words each stanza uses.",
        hints: [
          "To keep a poem's pattern, find which lines rhyme in the first stanza. To keep its feeling, read the words each stanza uses.",
          "In the first stanza, say the last word of each line and find the matching pair. Then check those same lines in each choice, and read each choice's feeling. Choose two.",
          "A stanza about a dark, cold house and sitting alone does not feel happy. Look at the choices that are left."
        ],
        how: [
          "In the first stanza, book and look rhyme, and they are lines 2 and 4. The new stanzas must rhyme in lines 2 and 4 and feel happy.",
          "Bright and night rhyme, and wide and side rhyme. Both stanzas also have happy words like pie, laugh, castle and fort.",
          "The answers are the stanza that ends \"And laugh into the night.\" and the stanza that ends \"And he sits by my side.\"",
          "The dark house stanza rhymes but feels sad, the pie and spoon stanza does not rhyme in lines 2 and 4, and the hug and treat stanza rhymes in pairs, which is a different pattern."
        ],
        misconception: "A common mix-up is choosing a stanza that rhymes in a different pattern. The same lines must rhyme as in the first stanza.",
        why: "The answers are: Grandma opens up the door, / The hall light glows so bright. / We eat warm pie and play a game, / And laugh into the night. And: We build a fort from quilts and chairs, / A castle, tall and wide. / I tell the stuffed bear all my news, / And he sits by my side. They rhyme in lines 2 and 4 (bright and night, wide and side). Both rhyme in lines 2 and 4 and feel happy. The dark house stanza feels sad, the pie and spoon stanza does not rhyme, and the hug and treat stanza rhymes in pairs." }
    ] }
  ] },
  similar: [
    { id: "SK-TT4b-S01", type: "order", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C01"],
      prompt: "Here is a stanza about coming in from outside, with its lines mixed up. Neighbor lines rhyme in pairs. Arrange the lines from first to last.",
      steps: [
        "I hang my coat up on the hook,",
        "Then grab a snack and find a book.",
        "I curl up in my favorite chair,",
        "And read until I'm sleepy there."
      ],
      clue: "In this pattern, lines that rhyme sit side by side. Listen to the last word of each line to find the pairs.",
      hints: [
        "In this pattern, lines that rhyme sit side by side. Listen to the last word of each line to find the pairs.",
        "Say each line out loud and notice which lines end with the same sound. Then think about what happens first and what happens next.",
        "A line that begins with \"Then\" comes after something else has happened, so it cannot be the first line of its pair."
      ],
      how: [
        "Find the pairs by their end words: hook and book rhyme, and chair and there rhyme.",
        "Each pair sits together, because lines 1 and 2 rhyme and lines 3 and 4 rhyme.",
        "The coat comes off before the snack and the book, and the reading in the chair comes last, so the hook pair comes first.",
        "The order is: I hang my coat up on the hook, Then grab a snack and find a book, I curl up in my favorite chair, And read until I'm sleepy there."
      ],
      misconception: "A common mix-up is putting lines in an order that tells the story but ignores the rhyme. Both the rhyme pairs and the story order must work.",
      why: "The order is: I hang my coat up on the hook; Then grab a snack and find a book; I curl up in my favorite chair; And read until I'm sleepy there. Hook and book rhyme, chair and there rhyme, and the story goes from coat to book to chair." },
    { id: "SK-TT4b-S02", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C02"],
      stem: [
        "I climb the ladder to the slide,",
        "I sit on top and look outside.",
        "I slide a little, soft and slow,",
        "And wave to all my friends below."
      ],
      prompt: "Line three drags. Which new line rhymes with the last line and sounds thrilling?",
      choices: [
        { text: "Whee! I zoom down fast, hello!", correct: true },
        { text: "I sit and watch the clouds go slow." },
        { text: "My shirt is blue, my shoes are low." },
        { text: "Whee! I zoom down fast and then stop." }
      ],
      clue: "A good replacement has to rhyme in the right place AND give the reader the feeling the poet wants. Sound words and action words help.",
      hints: [
        "A good replacement has to rhyme in the right place AND give the reader the feeling the poet wants. Sound words and action words help.",
        "Read line 4 and say its last word out loud. Then check each choice for the ending sound and for the feeling.",
        "A line that only tells the color of a shirt does not make the reader feel excited. Look at the choices that are left."
      ],
      how: [
        "Line 4 ends with below, so the new line 3 has to end with a word that rhymes with below.",
        "The new line should also feel loud and exciting, so look for a sound word and a strong action word.",
        "The answer is: Whee! I zoom down fast, hello! Hello rhymes with below, whee is a sound word and zoom is an action word.",
        "\"Watch the clouds go slow\" rhymes but feels calm, \"my shirt is blue\" rhymes but is plain, and \"then stop\" is exciting but does not rhyme with below."
      ],
      misconception: "A common mix-up is choosing the exciting line without checking the rhyme. The line must rhyme AND give the feeling.",
      why: "The answer is: Whee! I zoom down fast, hello! Hello rhymes with below, and whee and zoom make the line loud and exciting. \"Watch the clouds go slow\" is calm, \"my shirt is blue\" is plain, and \"then stop\" does not rhyme with below." },
    { id: "SK-TT4b-S03", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-P5"],
      stem: [
        "I pick a book and climb in bed,",
        "My mom sits down beside my head.",
        "She reads a tale of dragons bold,",
        "Of castles tall and treasures gold."
      ],
      prompt: "Kayla wants to add a second stanza to her poem. Which stanza keeps the same rhyme pattern as her first stanza?",
      choices: [
        { text: "The dragon roars, the hero cheers, / He chases off all of our fears. / The castle gates swing open wide, / And everyone dances inside.",
          correct: true },
        { text: "The dragon roars, the hero cheers, / He chases off all of our fears. / The castle gates swing open wide, / And everyone dances and sings." },
        { text: "The dragon roars, he is so loud, / The hero cheers for me. / The castle gates swing open wide, / And everyone sets free." },
        { text: "The dragon roars, the hero cheers, / He chases off the night. / The castle gates swing open wide, / And everyone dances." }
      ],
      clue: "Kayla's pattern is: lines 1 and 2 rhyme, and lines 3 and 4 rhyme. Check both pairs in each choice. Only one stanza gets both pairs right.",
      hints: [
        "Kayla's pattern is: lines 1 and 2 rhyme, and lines 3 and 4 rhyme. Check both pairs in each choice. Only one stanza gets both pairs right.",
        "Say the last words of lines 1 and 2, then of lines 3 and 4, in each choice, and listen for matches.",
        "A stanza that rhymes only in lines 2 and 4 uses a different pattern. Look at the choices that are left."
      ],
      how: [
        "Kayla's first stanza rhymes in pairs: bed and head, bold and gold.",
        "The new stanza must have lines 1 and 2 rhyme and lines 3 and 4 rhyme.",
        "The answer is: The dragon roars, the hero cheers, / He chases off all of our fears. / The castle gates swing open wide, / And everyone dances inside. Cheers and fears rhyme, and wide and inside rhyme.",
        "In the other stanzas, either the second pair does not rhyme, only lines 2 and 4 rhyme, or nothing rhymes."
      ],
      misconception: "A common mix-up is choosing a stanza that has some rhymes. Both pairs must rhyme in the same places as the first stanza.",
      why: "The answer is: The dragon roars, the hero cheers, / He chases off all of our fears. / The castle gates swing open wide, / And everyone dances inside. Cheers and fears rhyme, and wide and inside rhyme, so it matches Kayla's pattern. In the other stanzas, only the first pair rhymes, only lines 2 and 4 rhyme, or nothing rhymes." },
    { id: "SK-TT4b-S04", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C04"],
      prompt: "Two end words are missing from this bread poem. Pick words that match their partner lines in sound and in meaning.",
      text: "The oven hums, the dough will rise, / The smell of bread is a sweet {0}. / I wait and wait, I tap my feet, / Then taste the golden loaf, so warm and {1}.",
      slots: [
        { options: ["surprise", "eyes", "treat"], answer: 0 },
        { options: ["sweet", "street", "soft"], answer: 0 }
      ],
      clue: "Each blank has to rhyme with the end of its pair AND make sense. A word can rhyme and still be wrong.",
      hints: [
        "Each blank has to rhyme with the end of its pair AND make sense. A word can rhyme and still be wrong.",
        "Read each pair of lines out loud. For each blank, say the word that comes before it in the rhyming line, then try each choice.",
        "The smell of bread cannot be a sweet eyes, so cross that word out. Then decide between the other choices for each blank."
      ],
      how: [
        "Blank 1 must rhyme with rise. Blank 2 must rhyme with feet.",
        "Blank 1: surprise rhymes with rise, and the smell of bread can be a sweet surprise. Eyes rhymes with rise but makes no sense, and treat makes sense but does not rhyme.",
        "Blank 2: sweet rhymes with feet, and a warm loaf can be sweet. Street rhymes but does not fit, and soft fits the meaning but does not rhyme.",
        "So the answers are surprise and sweet."
      ],
      misconception: "A common mix-up is choosing the word that makes sense without checking the rhyme, or the reverse. Each blank needs both.",
      why: "Blank 1 needs \"surprise\": it rhymes with rise, and the smell of bread can be a sweet surprise. Eyes rhymes but makes no sense, and treat does not rhyme. Blank 2 needs \"sweet\": it rhymes with feet, and a warm loaf can be sweet. Street rhymes but does not fit, and soft does not rhyme." },
    { id: "SK-TT4b-S05", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-P6"],
      stem: [
        "The drums begin, the crowd stands up,",
        "I hear a thundering sound.",
        "The dancers spin and stomp and leap",
        "______________________"
      ],
      prompt: "The stanza needs a last line that keeps the energy high. Every choice rhymes with line 2. Which one fits?",
      choices: [
        { text: "And whirl in circles round and round!", correct: true },
        { text: "And hush the whole wide world around!" },
        { text: "And softly settle, safe and sound!" },
        { text: "And sit down on the cool, soft ground." }
      ],
      clue: "Every choice rhymes with sound, so the rhyme cannot decide. Look at the words in each line. Do they sound lively and fast, or quiet and slow?",
      hints: [
        "Every choice rhymes with sound, so the rhyme cannot decide. Look at the words in each line. Do they sound lively and fast, or quiet and slow?",
        "Reread lines 1 to 3 and picture the scene. Then ask which ending keeps the busy, loud feeling going.",
        "An exclamation mark can end a calm line too, so look at the words, not the punctuation. Compare what each line asks the dancers to do."
      ],
      how: [
        "All four lines end with a word that rhymes with sound, so the rhyme cannot help you decide.",
        "The first three lines are loud and busy, with drums, a crowd, spinning and stomping.",
        "The answer is: And whirl in circles round and round! Whirl and round and round sound fast and lively.",
        "The other lines use hush, softly, settle, sit down and soft, which feel calm and slow, even when one ends with an exclamation mark."
      ],
      misconception: "A common mix-up is thinking the rhyme or the exclamation mark decides the answer. When every choice rhymes, listen to the feeling of the words.",
      why: "The answer is: And whirl in circles round and round! Whirl and round and round feel fast and lively, and they match the drums and the spinning dancers. The other lines have hush, soft and settle words that feel calm, even when one ends with an exclamation mark." },
    { id: "SK-TT4b-S06", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C06"],
      stem: [
        "I tracked in mud across the floor,",
        "It made a trail right to the door.",
        "Mom looked at me and shook her head,",
        "And I went off to wash and bed."
      ],
      prompt: "How do the lines of this stanza rhyme?",
      choices: [
        { text: "The first two lines rhyme, and so do the final two.", correct: true },
        { text: "Only the second and fourth lines match each other." },
        { text: "Only the first and third lines match each other." },
        { text: "No line matches another line at the end." }
      ],
      clue: "A rhyme pattern tells which lines end with the same sound. Say the last word of each line out loud and listen for matches.",
      hints: [
        "A rhyme pattern tells which lines end with the same sound. Say the last word of each line out loud and listen for matches.",
        "List the last word of each line, then compare line 1 with line 2 and line 3 with line 4.",
        "The last words of lines 2 and 4 are door and bed, which do not sound alike. Look at the choices that are left."
      ],
      how: [
        "List the last word of each line: floor, door, head, bed.",
        "Floor and door rhyme, and they are lines 1 and 2. Head and bed rhyme, and they are lines 3 and 4.",
        "The answer is: The first two lines rhyme, and so do the final two.",
        "Lines 2 and 4 do not rhyme, lines 1 and 3 do not rhyme, and the stanza does have rhymes."
      ],
      misconception: "A common mix-up is picking the pattern from the last poem you read. Check which lines match in this stanza.",
      why: "The answer is: The first two lines rhyme, and so do the final two. Floor and door rhyme, and head and bed rhyme. Lines 2 and 4 do not rhyme, and lines 1 and 3 do not rhyme." },
    { id: "SK-TT4b-S07", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C07"],
      stem: [
        "Stanza 1: Come to the market, bright and loud, / Walk through the busy, happy crowd. / The peaches glow, the berries shine, / The lemonade is cold and fine.",
        "Stanza 2: A man plays music on his horn, / It echoes through the early morn. / I buy a pear, a plum, a pie, / And watch the clouds float in the sky.",
        "Stanza 3: The sun climbs high, the day grows warm, / We wander past the shady tents. / A girl sells flowers, red and blue, / The prettiest I ever knew."
      ],
      prompt: "Each stanza should rhyme in pairs: lines 1 and 2, then lines 3 and 4. One line breaks the pattern. Which line is it?",
      choices: [
        { text: "We wander past the shady tents.", correct: true },
        { text: "The lemonade is cold and fine." },
        { text: "It echoes through the early morn." },
        { text: "The prettiest I ever knew." }
      ],
      clue: "Pair up the lines in each stanza: lines 1 and 2, then lines 3 and 4. Say each pair's end words out loud. Do they sound alike?",
      hints: [
        "Pair up the lines in each stanza: lines 1 and 2, then lines 3 and 4. Say each pair's end words out loud. Do they sound alike?",
        "Check the stanzas one at a time. Look for the pair where the second line ends with a different sound than the first.",
        "In stanza 1, shine and fine rhyme, so that pair follows the pattern. Look at the choices that are left."
      ],
      how: [
        "Check each pair in order: loud and crowd, shine and fine, horn and morn, pie and sky, blue and knew.",
        "All of those pairs rhyme.",
        "In stanza 3, lines 1 and 2 end with warm and tents, which do not rhyme.",
        "The answer is: We wander past the shady tents."
      ],
      misconception: "A common mix-up is picking the first line of the pair. The question asks for the second line that does not rhyme.",
      why: "The answer is: We wander past the shady tents. It ends with tents, which does not rhyme with warm. The other lines rhyme with their pairs: fine with shine, morn with horn, and knew with blue." },
    { id: "SK-TT4b-S08", type: "match", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C08"],
      prompt: "Which rhyme pattern belongs with each stanza? Link them.",
      cols: ["Two pairs of rhymes", "One rhyme joins lines 2 and 4", "No rhymes at all"],
      rows: [
        { text: "A duck floats on the quiet pond, / Its feathers shine like glass. / A ripple spreads across the water, / And little minnows dash.", answer: 2 },
        { text: "I pour the milk, I stir the cup, / I drink it fast and finish up. / The kitten jumps up on Grandma's lap, / And curls into a little nap.", answer: 0 },
        { text: "My teddy bear sits on my bed, / He listens to my song. / I tell him secrets, one by one, / And he hums right along.", answer: 1 }
      ],
      clue: "To find a rhyme pattern, say the last word of each line and listen for matches. Then write down which lines matched.",
      hints: [
        "To find a rhyme pattern, say the last word of each line and listen for matches. Then write down which lines matched.",
        "For each stanza, list the four end words. Then compare line 1 with line 2, line 3 with line 4, and line 2 with line 4.",
        "Say the end words of lines 2 and 4 in each stanza. Then decide which pattern each stanza fits."
      ],
      how: [
        "The duck stanza ends with pond, glass, water, dash. None of those words rhyme.",
        "The milk stanza ends with cup, up, lap, nap. Cup and up rhyme, and lap and nap rhyme, so lines 1 and 2 rhyme and lines 3 and 4 rhyme.",
        "The teddy bear stanza ends with bed, song, one, along. Song and along rhyme, and they are lines 2 and 4.",
        "So the matches are: duck with no rhymes, milk with pairs, and teddy bear with lines 2 and 4."
      ],
      misconception: "A common mix-up is calling every stanza that has a rhyme the pairs pattern. Check exactly which lines match.",
      why: "The duck stanza has no rhymes (pond, glass, water, dash). The milk stanza rhymes in pairs (cup and up, lap and nap). The teddy bear stanza rhymes in lines 2 and 4 (song and along)." },
    { id: "SK-TT4b-S09", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C09"],
      stem: [
        "The sun peeks in; it's early day,",
        "The kettle whistles far away.",
        "Dad slices bread, so soft and brown,",
        "And sets the butter dish down."
      ],
      prompt: "Which of these four lines uses a sound word that lets the reader hear the kitchen?",
      choices: [
        { text: "The kettle whistles far away.", correct: true },
        { text: "The sun peeks in; it's early day," },
        { text: "Dad slices bread, so soft and brown," },
        { text: "And sets the butter dish down." }
      ],
      clue: "A sound word sounds like the noise it names, like buzz or splash. Say each word out loud and listen for the noise.",
      hints: [
        "A sound word sounds like the noise it names, like buzz or splash. Say each word out loud and listen for the noise.",
        "Read each line aloud and listen for a word that makes its own noise.",
        "\"Soft and brown\" tells how something looks and feels, not a noise. Look at the lines that are left."
      ],
      how: [
        "A sound word makes the sound of the thing it names.",
        "\"Whistles\" sounds like the high noise a kettle makes when the water boils.",
        "The answer is: The kettle whistles far away.",
        "\"Peeks in\" is an action, \"soft and brown\" tells how bread looks, and \"sets the dish down\" is an action."
      ],
      misconception: "A common mix-up is choosing any line about the kitchen. A sound word sounds like the noise it names.",
      why: "The answer is: The kettle whistles far away. Whistles sounds like the noise of a kettle. The other lines tell about actions or how the bread looks." },
    { id: "SK-TT4b-S10", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C10"],
      stem: [
        "My sock went missing yesterday,",
        "I looked in every place.",
        "I checked beneath the couch and bed,",
        "And found it on my face!"
      ],
      prompt: "Sam plans to read his poem to his class. He wants to add a last stanza that keeps the same rhyme pattern and makes his classmates laugh. Which stanza should he add?",
      choices: [
        { text: "My dog now wears it on his tail, / He prances all around. / He thinks it is a flag, I guess, / The best that he has found.", correct: true },
        { text: "My sock is old and wearing thin, / The hole is big and wide. / I put it in the drawer to rest, / And leave it there to hide." },
        { text: "My dog now wears it on his tail, / He prances all around. / He thinks it is a flag, I guess, / He waves it past the barn." },
        { text: "My sock is old and wearing thin, / The hole is big and wide. / I put it in the drawer to rest, / And never wear it again." }
      ],
      clue: "When you write for an audience, you choose words that give the listeners the feeling you want. The stanza must also keep the same rhyme pattern.",
      hints: [
        "When you write for an audience, you choose words that give the listeners the feeling you want. The stanza must also keep the same rhyme pattern.",
        "Check lines 2 and 4 of each choice for the rhyme, and read the words to decide what feeling each one gives.",
        "A stanza about an old sock with a big hole put away in a drawer has a dull, quiet feeling. Look at the choices that are left."
      ],
      how: [
        "The poem's pattern is that lines 2 and 4 rhyme, and the new stanza should make classmates laugh.",
        "The dog stanza has lines 2 and 4 that rhyme (around and found), and a dog parading with a sock like a flag is funny.",
        "The answer is: My dog now wears it on his tail, / He prances all around. / He thinks it is a flag, I guess, / The best that he has found.",
        "The old sock stanzas feel dull, not funny. The other dog stanza is funny, but barn does not rhyme with around."
      ],
      misconception: "A common mix-up is choosing the stanza with the right feeling without checking the rhyme. It needs both.",
      why: "The answer is: My dog now wears it on his tail, / He prances all around. / He thinks it is a flag, I guess, / The best that he has found. Around and found rhyme in lines 2 and 4, and the dog parading with a sock is funny. The old sock stanzas feel dull, and the other dog stanza ends with barn, which does not rhyme with around." },
    { id: "SK-TT4b-S11", type: "ms", points: 2, dok: 2, std: ["3.T.T.4.b"], passages: [], pick: 2, like: ["SK-TT4b-C11"],
      stem: [
        "The dog jumps up and dashes out,",
        "He races past the tree.",
        "The sun is bright, the sky is blue,",
        "The day is fine and free.",
        "His fur is brown and soft and thick,",
        "He wags his tail, a happy flick."
      ],
      prompt: "Pick the two lines whose action words let you see the dog on the move.",
      choices: [
        { text: "\"The dog jumps up and dashes out,\"", correct: true },
        { text: "\"He races past the tree.\"", correct: true },
        { text: "\"The sun is bright, the sky is blue,\"" },
        { text: "\"The day is fine and free.\"" },
        { text: "\"His fur is brown, and soft, and thick.\"" }
      ],
      clue: "Action words tell what someone or something does, like jump or dash. Look for lines that show the dog moving.",
      hints: [
        "Action words tell what someone or something does, like jump or dash. Look for lines that show the dog moving.",
        "Read the lines one at a time. Ask whether each line shows the dog moving. Choose two.",
        "\"The sun is bright\" tells about the weather, not about the dog. Look at the choices that are left."
      ],
      how: [
        "Look for words that show the dog moving.",
        "Jumps and dashes show the dog starting to run, and races shows how he moves past the tree.",
        "The answers are \"The dog jumps up and dashes out,\" and \"He races past the tree.\"",
        "The sun and sky line and the \"fine and free\" line tell about the day, and the fur line tells how the dog looks."
      ],
      misconception: "A common mix-up is choosing a line just because it mentions the dog or the day. The question asks for action words that show running.",
      why: "The answers are \"The dog jumps up and dashes out,\" and \"He races past the tree.\" Jumps, dashes and races are action words that show the dog running. The other lines tell about the weather, the day or how the dog looks." },
    { id: "SK-TT4b-S12", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C12"],
      stem: [
        "The night-light glows beside my bed,",
        "A soft gold glow above my head.",
        "My blanket's warm, my pillow's deep,",
        "And listen to the clock go tick."
      ],
      prompt: "Lines 3 and 4 of this bedtime stanza do not rhyme. Choose the pair that fixes the rhyme and keeps the mood gentle.",
      choices: [
        { text: "My blanket's warm, my pillow's deep, / And soon I'm drifting off to sleep.", correct: true },
        { text: "My blanket's warm, my pillow's deep, / And listen to the clock go tick." },
        { text: "My blanket's warm, my pillow's deep, / And jump up high and give a leap." },
        { text: "My blanket's warm, my pillow's deep, / And snuggle in and close my eyes." }
      ],
      clue: "A good revision has to rhyme in the right place AND keep the feeling the poem needs. Check both for each choice.",
      hints: [
        "A good revision has to rhyme in the right place AND keep the feeling the poem needs. Check both for each choice.",
        "Say the last words of the two new lines in each choice out loud, then decide how each pair would feel in a poem about bedtime.",
        "One choice keeps the old line 4, which is the line that does not rhyme. Look at the choices that are left."
      ],
      how: [
        "The pattern is that lines 3 and 4 rhyme, and the stanza has a calm, sleepy feeling at bedtime.",
        "\"Deep\" and \"sleep\" rhyme, and drifting off to sleep fits bedtime.",
        "The answer is: My blanket's warm, my pillow's deep, / And soon I'm drifting off to sleep.",
        "The pair that ends \"clock go tick\" keeps the old line that does not rhyme, \"give a leap\" rhymes but is not sleepy, and \"close my eyes\" does not rhyme with deep."
      ],
      misconception: "A common mix-up is picking a pair that rhymes without checking the feeling. The pair must rhyme AND fit bedtime.",
      why: "The answer is: My blanket's warm, my pillow's deep, / And soon I'm drifting off to sleep. Deep and sleep rhyme, and drifting off to sleep is calm. One choice keeps the line that does not rhyme, one rhymes but is not sleepy, and one does not rhyme." },
    { id: "SK-TT4b-S13", type: "mc", points: 1, dok: 3, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C13"],
      stem: [
        "The parade rolls down the street,",
        "The trumpets blast so loud.",
        "We wave and cheer and clap along,",
        "And dance within the crowd."
      ],
      prompt: "Which choice names the poet's main feeling AND the line that shows it best?",
      choices: [
        { text: "excited and joyful; \"We wave and cheer and clap along,\"", correct: true },
        { text: "calm and sleepy; \"We wave and cheer and clap along,\"" },
        { text: "excited and joyful; \"The parade rolls down the street,\"" },
        { text: "calm and sleepy; \"The parade rolls down the street,\"" }
      ],
      clue: "The feeling of a poem comes from its words. Pay attention to what the speaker and the crowd are doing.",
      hints: [
        "The feeling of a poem comes from its words. Pay attention to what the speaker and the crowd are doing.",
        "Reread all four lines and say what the people are doing. Decide the feeling first, then pick the line that best shows it.",
        "A calm, sleepy feeling does not match trumpets, cheering and clapping. Look at the choices that are left."
      ],
      how: [
        "Read the lines and decide what the people are doing: trumpets blast, and everyone waves, cheers, claps and dances.",
        "Those are lively actions, so the feeling is excited and joyful.",
        "The line that best shows the lively actions of the whole crowd is \"We wave and cheer and clap along,\"",
        "The answer is: excited and joyful; \"We wave and cheer and clap along,\" The street line only sets the scene, and calm and sleepy does not match the poem."
      ],
      misconception: "A common mix-up is picking a line that sets the scene instead of one that shows the feeling. The line must show what the people feel.",
      why: "The answer is: excited and joyful; \"We wave and cheer and clap along,\" Waving, cheering and clapping show the lively feeling. The street line only sets the scene, and calm and sleepy does not match the poem." },
    { id: "SK-TT4b-S14", type: "mc", points: 1, dok: 2, std: ["3.T.T.4.b"], passages: [], like: ["SK-TT4b-C14"],
      stem: [
        "I dip my brush in paint of blue,",
        "And paint the sky for me and ______.",
        "I add some clouds, so soft and white,",
        "I finish with the sun's warm ______."
      ],
      prompt: "Which two words, first blank then second, finish the painter's rhymes and keep the meaning?",
      choices: [
        { text: "you, light", correct: true },
        { text: "shoe, night" },
        { text: "everyone, glow" },
        { text: "you, night" }
      ],
      clue: "Each blank has to rhyme with the end of its partner line AND make sense. A word can rhyme and still be wrong.",
      hints: [
        "Each blank has to rhyme with the end of its partner line AND make sense. A word can rhyme and still be wrong.",
        "Say the end word of line 1 and line 3. Then try each pair of words in the blanks and listen for the rhymes.",
        "Nobody paints the sky for me and shoe, so cross that pair out. Then decide between the other choices."
      ],
      how: [
        "Blank 1 must rhyme with blue. Blank 2 must rhyme with white.",
        "Blank 1: you rhymes with blue, and the painter paints the sky for me and you. Shoe rhymes but makes no sense, and everyone makes sense but does not rhyme.",
        "Blank 2: light rhymes with white, and the sun gives warm light. Night rhymes but does not fit the sun, and glow fits the meaning but does not rhyme.",
        "So the answer is: you, light."
      ],
      misconception: "A common mix-up is choosing the word that makes sense without checking the rhyme, or the reverse. Each blank needs both.",
      why: "The answer is: you, light. You rhymes with blue, and the painter paints the sky for me and you. Light rhymes with white, and the sun gives warm light. Shoe rhymes but makes no sense, night rhymes but does not fit the sun, and everyone and glow do not rhyme." },
    { id: "SK-TT4b-S15", type: "ms", points: 2, dok: 3, std: ["3.T.T.4.b"], passages: [], pick: 2, like: ["SK-TT4b-C15"],
      stem: [
        "We pitch our tent beside the lake,",
        "The sky is turning pink.",
        "My dad unrolls the sleeping bags,",
        "And Mom pours us a drink."
      ],
      prompt: "Two of these stanzas fit after the camping stanza above. They rhyme the same way and stay cheerful. Pick both.",
      choices: [
        { text: "We toast marshmallows by the fire, / The sparks go flying high. / Our laughter echoes through the trees, / Beneath the starry sky.", correct: true },
        { text: "We hike along a winding path, / The morning air is new. / A squirrel waves its bushy tail, / And we all wave back too.", correct: true },
        { text: "The rain comes down, the tent is wet, / The woods are dark and gray. / I shiver by the empty stove, / And wish I were away." },
        { text: "We pick up sticks to build a fire, / Each one a treasure found. / We stack them in a small pile, / And hope the wood stays dry." },
        { text: "The campfire crackles, soft and low, / It makes the embers glow. / We sing a song, we clap our hands, / The best of all the plans." }
      ],
      clue: "To keep a poem's pattern, find which lines rhyme in the first stanza. To keep its feeling, read the words each stanza uses.",
      hints: [
        "To keep a poem's pattern, find which lines rhyme in the first stanza. To keep its feeling, read the words each stanza uses.",
        "In the first stanza, say the last word of each line and find the matching pair. Then check those same lines in each choice, and read each choice's feeling. Choose two.",
        "A stanza about a wet tent and an empty stove does not feel happy. Look at the choices that are left."
      ],
      how: [
        "In the first stanza, pink and drink rhyme, and they are lines 2 and 4. The new stanzas must rhyme in lines 2 and 4 and feel happy.",
        "High and sky rhyme, and new and too rhyme. Both stanzas also have happy words like toast, laughter, wave and morning.",
        "The answers are the stanza that ends \"Beneath the starry sky.\" and the stanza that ends \"And we all wave back too.\"",
        "The wet tent stanza rhymes but feels sad, the firewood stanza does not rhyme in lines 2 and 4, and the campfire stanza rhymes in pairs, which is a different pattern."
      ],
      misconception: "A common mix-up is choosing a stanza that rhymes in a different pattern. The same lines must rhyme as in the first stanza.",
      why: "The answers are: We toast marshmallows by the fire, / The sparks go flying high. / Our laughter echoes through the trees, / Beneath the starry sky. And: We hike along a winding path, / The morning air is new. / A squirrel waves its bushy tail, / And we all wave back too. They rhyme in lines 2 and 4 (high and sky, new and too). Both rhyme in lines 2 and 4 and feel happy. The wet tent stanza feels sad, the firewood stanza does not rhyme in lines 2 and 4, and the campfire stanza rhymes in pairs." }
  ],
  addons: {
    "SK-TT4b-P1": {
      hints: [
        "Find the rhyme pattern first, then look for the pair where the second line does not match the first.",
        "Read the last word of each line out loud, one stanza at a time. Compare lines 1 and 2, and then lines 3 and 4.",
        "In stanza 1, down and brown rhyme, so that pair follows the pattern. Check the pairs that are left."
      ],
      how: [
        "Jaylen's pattern is that lines 1 and 2 rhyme and lines 3 and 4 rhyme.",
        "Stanza 1 has brown and down, and tall and wall. Stanza 2 has leap and heap, and everywhere and hair.",
        "In stanza 3, line 1 ends with cold and line 2 ends with red, which do not rhyme.",
        "The answer is stanza 3, line 2: \"My cheeks are pink, my nose is red.\""
      ],
      misconception: "A common mix-up is choosing the line that sounds odd instead of checking the end words. Compare each pair out loud." },
    "SK-TT4b-P2": {
      hints: [
        "Line 2 must rhyme with the last word of line 1. It must also make sense in a poem about a fall evening.",
        "Read stanza 3, line 1, and say its last word. Then try each choice as line 2.",
        "A line about my cheeks and nose does not rhyme with the end of line 1. Look at the choices that are left."
      ],
      how: [
        "Stanza 3, line 1 ends with cold, so line 2 must end with a word that rhymes with cold.",
        "Gold rhymes with cold, and the sky can turn orange, red and gold when the sun sinks low.",
        "The answer is: The sky turns orange, red, and gold.",
        "Old rhymes but a pile of leaves that was just made is not old, and chin and too do not rhyme with cold."
      ],
      misconception: "A common mix-up is choosing the first rhyming word you hear. The line must also make sense in the poem." },
    "SK-TT4b-P3": {
      hints: [
        "Line 4 must rhyme with face. It must also stay on the topic of the bike ride.",
        "Read lines 3 and 4 out loud with each choice. Listen for the end sound, then ask if the line fits a bike ride.",
        "A line about a teddy bear does not fit a bike ride. Look at the choices that are left."
      ],
      how: [
        "Line 3 ends with face, so line 4 must end with a word that rhymes with face.",
        "Race rhymes with face, and riding fast with the wind on your face can feel like a race.",
        "The answer is: I feel like I am in a race!",
        "Park and faster do not rhyme with face, and the teddy bear line rhymes but is not about a bike ride."
      ],
      misconception: "A common mix-up is choosing the line that rhymes without checking the topic. The line must also make sense." },
    "SK-TT4b-P4": {
      hints: [
        "Each blank has to rhyme with the end of the line before it AND make sense. A word can rhyme and still be wrong.",
        "Read each pair of lines out loud. For each blank, say the end word of the line before it, then try each choice.",
        "\"Lights my room all through the light\" does not make sense, so cross that word out. Then decide between the other choices for each blank."
      ],
      how: [
        "Blank 1 must rhyme with bright. Blank 2 must rhyme with high.",
        "Blank 1: night rhymes with bright, and the moon shines at night. Light rhymes but makes no sense in this line, and dark makes sense but does not rhyme.",
        "Blank 2: sky rhymes with high, and stars twinkle in the sky. Sigh rhymes but makes no sense, and clouds does not rhyme.",
        "So the answers are night and sky."
      ],
      misconception: "A common mix-up is choosing the word that makes sense without checking the rhyme, or the reverse. Each blank needs both." },
    "SK-TT4b-P5": {
      hints: [
        "Jaylen's pattern is: lines 1 and 2 rhyme, and lines 3 and 4 rhyme. Check both pairs in each choice. Only one stanza gets both pairs right.",
        "Say the last words of lines 1 and 2, then of lines 3 and 4, in each choice, and listen for matches.",
        "A stanza that rhymes only in lines 2 and 4 uses a different pattern. Look at the choices that are left."
      ],
      how: [
        "Jaylen's poem rhymes in pairs: lines 1 and 2, and lines 3 and 4.",
        "Green and seen rhyme, and around and ground rhyme, so the stanza about the tree in spring follows the pattern.",
        "The answer is the stanza that begins \"In spring, the tree grows leaves of green\" and ends \"When leaves come tumbling to the ground.\"",
        "In the other stanzas, only lines 2 and 4 rhyme, only the first pair rhymes, or nothing rhymes."
      ],
      misconception: "A common mix-up is choosing a stanza that has some rhymes. Both pairs must rhyme in the same places." },
    "SK-TT4b-P6": {
      hints: [
        "When every choice rhymes, listen to the feeling of the words. Ask whether they sound quiet and gentle or loud and busy.",
        "Reread lines 1 to 3 and picture the scene. Then ask which ending keeps the quiet, sleepy feeling going.",
        "\"Shout out loud\" is a loud, busy action. Look at the choices that are left."
      ],
      how: [
        "All four lines end with a word that rhymes with low, so the rhyme cannot help you decide.",
        "The first three lines are quiet: the rain has stopped, the house is still, the lamp is low, and she tucks her toes under the quilt.",
        "The answer is: And drift to sleep, so soft and slow. Drift, soft and slow feel gentle and sleepy.",
        "Jumping up fast and shouting feel loud and busy, and wild winds feel stormy, not calm."
      ],
      misconception: "A common mix-up is thinking the rhyme decides the answer. When every choice rhymes, listen to the feeling of the words." }
  },
  /* B4-b4a end ---------- */
  test: [
    { id: "SK-TT4b-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "One line in Rosa's poem does not follow her rhyme pattern. Which line is it? Choose the line in the poem.",
      targets: ["p2:1:4", "p2:2:1", "p2:2:3", "p2:2:4", "p2:3:2"],
      answer: ["p2:2:4"], pick: 1,
      clue: "Find Rosa's pattern in stanza 1 first: which lines rhyme? Then check those same lines in each stanza. Where does the pattern break?",
      why: "The answer is \"But the dragonfly gets away.\" In Rosa's poem, lines 2 and 4 rhyme: be and me, then gray and day. In stanza 2, line 2 ends with blue, but line 4 ends with away, which does not rhyme with blue." },
    { id: "SK-TT4b-T2", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["The squirrel scampers up the oak,", "Then jumps from tree to tree.", "It drops an acorn on the ground", "And hides it in the grass."],
      prompt: "Theo wrote this stanza. Lines 2 and 4 should rhyme, but line 4 does not. Which line should replace line 4?",
      choices: [
        { text: "And buries it with glee.", correct: true },
        { text: "And drinks a cup of tea." },
        { text: "And then it climbs back down." },
        { text: "And hides it by the fence." }
      ],
      clue: "Line 4 must rhyme with the last word of line 2. It must also make sense with the squirrel and the acorn.",
      why: "The answer is \"And buries it with glee.\" Glee rhymes with tree, and squirrels really do bury acorns to eat later. Tea rhymes too, but a squirrel does not drink a cup of tea. Down and fence do not rhyme with tree." },
    { id: "SK-TT4b-T3", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["My grandma's porch has a rocking chair.", "It creaks a squeaky tune.", "We sip cold lemonade and watch", "______________________"],
      prompt: "In this poem, lines 2 and 4 rhyme. Which line best finishes the stanza?",
      choices: [
        { text: "The big, round, yellow moon.", correct: true },
        { text: "The stars come out at night." },
        { text: "The fireflies glowing bright." },
        { text: "A fork, a cup, a spoon." }
      ],
      clue: "Line 4 must rhyme with tune. Read the last two lines together to be sure the new line makes sense.",
      why: "The answer is \"The big, round, yellow moon.\" Moon rhymes with tune, and watching the moon from a porch makes sense. Night and bright do not rhyme with tune. Spoon rhymes, but no one sits on a porch to watch a fork, a cup and a spoon." },
    { id: "SK-TT4b-T4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Omar is writing a poem about playing ball. Choose the word for each blank that rhymes and makes sense.",
      text: "I bounce my ball against the wall. I catch it, then I let it {0}. I throw it high up to the sky, And watch it as it zooms right {1}.",
      slots: [
        { options: ["drop", "fall", "roll"], answer: 1 },
        { options: ["past", "up", "by"], answer: 2 }
      ],
      clue: "Read each pair of lines. The blank must rhyme with the end of the line before it, and it must make sense.",
      why: "The first blank needs \"fall\": fall rhymes with wall, and a ball can fall after you let it go. Drop and roll make sense but do not rhyme. The second blank needs \"by\": by rhymes with sky. Past and up do not rhyme with sky." },
    { id: "SK-TT4b-T5", type: "ms", points: 2, pick: 2, dok: 3, passages: ["p2"],
      prompt: "Rosa wants to add a fourth stanza to her poem. Which TWO stanzas keep the same rhyme pattern as the rest of her poem?",
      choices: [
        { text: "The moon comes out above the pond, / The stars begin to glow. / The frog hops off his lily pad / And swims down deep below.", correct: true },
        { text: "The moon comes out, so round and bright, / The stars all twinkle in the night. / The frog hops off his lily pad / And swims away, so very glad." },
        { text: "The moon comes out, the night is near, / The stars begin to glow. / The frog hops off and swims from here, / Down to the mud to sleep." },
        { text: "The moon comes out above the pond, / The stars begin to shine. / The frog hops off his lily pad / And swims down to the mud." },
        { text: "The night is dark, the pond is calm, / The crickets start to sing. / The frog curls up beside a rock / And dreams of early spring.", correct: true },
        { text: "The night is dark, the pond is calm, / The crickets chirp and hum. / The frog curls up beside a rock / And sleeps until it's day." }
      ],
      clue: "First find which lines rhyme in Rosa's stanzas. Then check those same lines in each choice.",
      why: "The answers are \"The moon comes out above the pond, / The stars begin to glow. / The frog hops off his lily pad / And swims down deep below.\" and \"The night is dark, the pond is calm, / The crickets start to sing. / The frog curls up beside a rock / And dreams of early spring.\" Glow rhymes with below, and sing rhymes with spring, so lines 2 and 4 rhyme, just like Rosa's other stanzas. In the other choices, lines 2 and 4 do not rhyme: night and glad, glow and sleep, shine and mud, hum and day." },
    { id: "SK-TT4b-T6", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["We click and clack up to the top,", "______________________"],
      prompt: "Dev is writing a poem about a roller coaster. He wants line 2 to make the reader feel how fast and exciting the ride is. Lines 1 and 2 rhyme. Which line best does that?",
      choices: [
        { text: "Then whoosh! We zoom down, flip and drop!", correct: true },
        { text: "We roll along and never stop." },
        { text: "I see the snack stand and the shop." },
        { text: "We sit and wait, then slowly stop." }
      ],
      clue: "Every choice rhymes with top. Which line uses sound words and action words that feel fast?",
      why: "The answer is \"Then whoosh! We zoom down, flip and drop!\" Whoosh is a sound word, and zoom, flip and drop are fast action words, so the reader feels the speed and thrill. Rolling along sounds steady, sitting and slowly stopping sound calm and slow, and the snack stand line is about something else. None of those lines makes the ride feel fast." }
  ]
});
