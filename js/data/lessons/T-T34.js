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
    {
      show: ["Sentence 1: Fall is the best season of the year.", "Sentence 2: In the fall, the leaves on many trees change color."],
      ask: "Which sentence is a fact, and which is an opinion?",
      steps: [
        "Ask about each sentence: Can I check it and prove it is true?",
        "You can go outside and see leaves change color in the fall. Sentence 2 can be proven, so it is a fact.",
        "The word best shows a feeling. Some people like spring or summer more, so people can disagree. Sentence 1 is an opinion."
      ],
      answer: "Sentence 1 is an opinion, and Sentence 2 is a fact."
    },
    {
      show: ["Our class should have a reading buddy day each week. Reading buddies help younger kids get better at reading. Last month, the first graders who read with us learned many new words. Their teacher also said they read more smoothly."],
      ask: "What evidence supports the reason that reading buddies help younger kids?",
      steps: [
        "Find the reason first: reading buddies help younger kids get better at reading.",
        "Read the sentences after the reason. Look for facts or examples.",
        "Check each one. Does it prove that the younger kids got better? Learning new words and reading more smoothly both do."
      ],
      answer: "The first graders learned many new words, and their teacher said they read more smoothly."
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
        { text: "The library is closed on Saturdays now." }
      ],
      clue: "Evidence for this reason must show that people really did come when the library was open on Saturdays. Check each detail against that.",
      why: "The answers are \"The story time room was full every Saturday\" and \"Every computer was in use on Saturdays.\" Both show that many people came when the library tried Saturday hours. The mom's work hours support the reason about busy families, the brothers support the reason about homework, and the library being closed now is not evidence for any reason." },
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
      "Begin by introducing the topic. Then state your opinion clearly in one sentence, like \"I think our class should start a garden.\"",
      "Give reasons. A reason tells WHY your opinion is a good one. When you write on your own, you think of the reasons yourself. On the Milestones, the writing task usually gives you the reasons (the rubric calls them the provided reasons). Either way, explain each reason with facts and examples, in your own words.",
      "Link your ideas with words like because, therefore, also, for example and in addition. Because joins your opinion or a reason to the facts that explain it.",
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
    tip: "On the test, you will fix a student's draft. You may pick the best opinion sentence, the best linking word, the best evidence for a reason, or the best ending."
  },
  learn: [
    {
      show: ["Topic: Should our class read outside on sunny days?", "Sentence 1: Some classes at our school read outside.", "Sentence 2: I think our class should read outside on sunny days.", "Sentence 3: Do you like to read on sunny days?"],
      ask: "Which sentence is the best opinion statement for this topic?",
      steps: [
        "An opinion statement tells what the writer thinks or wants. Look for clue words like I think and should.",
        "Sentence 1 is a fact about other classes. It does not say what the writer wants.",
        "Sentence 3 is a question. A question can start an essay, but it does not tell the reader your opinion."
      ],
      answer: "Sentence 2 is the best opinion statement, because it clearly tells what the writer thinks the class should do."
    },
    {
      show: ["Opinion: Our school should have a garden.", "Reason you are given: A garden would help students learn.", "Fact from a passage: Students in a garden can watch seeds sprout and grow."],
      ask: "How can you explain this reason with evidence?",
      steps: [
        "Start with the reason you were given: A garden would help students learn.",
        "Add because, and then tell the fact in your own words: because we could watch seeds sprout and grow.",
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
      ] }
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
          "Several lines repeat words. \"Round and round\" and \"slap, slap, slap\" are about the ropes, before the speaker jumps in.",
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
      why: "The answer is \"The kitten wakes up and starts to play, so her nap is over.\" She opens one eye and pounces on the yarn, so the line changes from sleep to chase. She is not dreaming or scared, and chase does not rhyme with chair." }
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
      { term: "rhyme", means: "words that end with the same sound, like bee and tree" }
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
    tip: "On the test, you may choose the line that best finishes a stanza or that keeps the rhyme pattern. The best line has to rhyme in the right place AND make sense with the rest of the poem. Some questions name a feeling, like calm or excited. Then every choice may rhyme, so pick the line whose words and sounds make the reader feel that way."
  },
  learn: [
    {
      show: ["The waves roll in across the sand,", "______________________"],
      ask: "What could line 2 be, so that it rhymes with line 1 and stays on the topic of the beach?",
      steps: [
        "Find the word you need to rhyme with. Line 1 ends with sand.",
        "Make a list of words that rhyme with sand: hand, land, band, grand.",
        "Pick a word that fits a beach. Hand works, because you can hold a seashell in your hand.",
        "Write a line that makes sense and ends with that word."
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
        "Away and someday rhyme, and they are lines 2 and 4."
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
      ] }
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
        { options: ["day", "dark", "night"], answer: 2 },
        { options: ["sky", "clouds", "air"], answer: 0 }
      ],
      clue: "Read each pair of lines. The blank must rhyme with the end of the line before it, and it must make sense.",
      why: "The first blank needs \"night\": night rhymes with bright, and the moon shines at night. Dark makes sense but does not rhyme, and the moon does not light a room all through the day. The second blank needs \"sky\": sky rhymes with high, and stars are in the sky. Clouds and air do not rhyme with high." },
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
      stem: ["The rain has stopped, the house is still,", "My lamp is glowing low.", "I pull my blanket to my chin", "______________________"],
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
