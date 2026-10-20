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
      "A fact can be checked and proven true. An opinion tells what someone thinks or feels, and other people may disagree."
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
      why: "The answers are \"The story time room was full every Saturday\" and \"Every computer was in use on Saturdays.\" Both show that many people came when the library tried Saturday hours. The mom's work hours support the reason about busy families, the brothers support the reason about homework, and the library being closed now is not evidence for any reason." }
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
      why: "Part A: by telling how hot the playground gets in the sun. Part B: \"On hot days in May, the metal slide gets too hot to touch.\" This example shows why shade is needed. The birds and squirrels support a different reason, and the parent club sentence answers people who disagree." },
    { id: "SK-TT3a-T4", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence states the author's second reason? Choose the sentence in the passage.",
      targets: ["p2:3:1", "p2:3:2", "p2:3:3", "p2:4:1", "p2:4:2"],
      answer: ["p2:3:1"], pick: 1,
      clue: "A reason tells why the author holds the opinion. Evidence gives facts about a reason. Which sentence tells a new why?",
      why: "The answer is \"Trees would also bring wildlife to our school.\" The word also shows that a new reason is starting. The sentences about birds, squirrels and journals are evidence for it, and paragraph 4 answers people who disagree." },
    { id: "SK-TT3a-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author wants to add one more piece of evidence. Which sentence would best support one of the author's reasons?",
      choices: [
        { text: "Last spring, a robin built a nest in a tree across the street from our school.", correct: true },
        { text: "Last spring, the slide on our playground was painted bright red." },
        { text: "Many students in my class like to play kickball in the big field." },
        { text: "Our parent club meets in the school library on Tuesday nights." }
      ],
      clue: "First, find each of the author's reasons. Then choose the fact that proves one of them.",
      why: "The answer is \"Last spring, a robin built a nest in a tree across the street from our school.\" One reason is that trees would bring wildlife to the school, and a robin nesting in a tree nearby shows that trees bring birds. The slide, kickball and parent club meetings do not support either reason: they are not about shade or about wildlife." }
  ]
});

PP.addLesson({
  code: "3.T.T.3.c",
  title: "Writing an opinion piece: opinion, reasons, linking words and a conclusion",
  teach: {
    big: "A strong opinion piece states your opinion, explains each reason with facts or examples, links ideas with words like because, and ends by saying your opinion again.",
    points: [
      "Begin by introducing the topic. Then state your opinion clearly in one sentence, like \"I think our class should start a garden.\"",
      "Give reasons. On the Milestones writing task, you are given the reasons. Your job is to explain each one with facts and examples from the passages, in your own words.",
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
    prompt: ["Should kids have a job at home, like feeding a pet or setting the table?", "Write a short opinion paragraph. Start with your opinion. Then use these two reasons: Jobs teach kids to be responsible. Jobs help the whole family. Explain each reason with because and an example. End with a sentence that says your opinion again."],
    checklist: [
      "I stated my opinion in the first sentence.",
      "I gave both reasons and used because to explain each one.",
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
      why: "The order is: the empty corner (introduces the topic), I think we should turn it into a reading corner (the opinion), First (reason 1), Also (reason 2), and For all these reasons (the conclusion)." }
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
    { id: "SK-TT3c-T3", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Malik wants to add one more sentence to the paragraph about saving class time. Which sentence is best?",
      choices: [
        { text: "With bottles at our desks, nobody would need to leave the room to get a drink.", correct: true },
        { text: "Some water bottles are made of metal, and others are made of hard plastic." },
        { text: "Our teacher says that math is the most important subject of the whole day." },
        { text: "My water bottle at home has stickers of planets and stars all over it." }
      ],
      clue: "Find the paragraph about saving class time. Which choice helps show how water bottles would save time?",
      why: "The answer is \"With bottles at our desks, nobody would need to leave the room to get a drink.\" That paragraph says water bottles would save class time, and this explains how: no one would wait in line at the fountain. What bottles are made of, which subject matters most and stickers on a bottle do not show time being saved." },
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
      "To find the rhyme pattern, read the last word of each line in one stanza. Find which lines rhyme. Then check that the other stanzas use the same pattern.",
      "Repetition means using the same word or line again. It makes an idea stand out and gives the poem a beat.",
      "Each stanza often has its own job. One may set the scene, and the next may show what happens or how things change."
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
    { id: "SK-TT4a-P2", type: "hottext", points: 1, dok: 1, passages: ["p1"],
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
  ]
});

PP.addLesson({
  code: "3.T.T.4.b",
  title: "Writing a rhyming poem with two or more stanzas",
  teach: {
    big: "To write a rhyming poem, pick a rhyme pattern, use it in every stanza, and choose rhyming words that still make sense and help your reader feel something.",
    points: [
      "Pick a topic and a feeling you want your reader to have, like cozy, excited or silly.",
      "Write at least two stanzas, and leave a space between them.",
      "Choose a rhyme pattern, such as lines 1 and 2 rhyme and lines 3 and 4 rhyme. Use that same pattern in every stanza.",
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
        "Make sure the rhyming line makes sense. \"I find the one that's round and smooth and tall\" fits a pumpkin."
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
    prompt: ["Write a rhyming poem about something you love to do outside.", "Write at least two stanzas of four lines each. Choose a rhyme pattern, and use the same pattern in both stanzas. Pick words that help your reader feel what you feel."],
    checklist: [
      "I wrote at least two stanzas, with a space between them.",
      "I used a rhyme pattern, like lines 1 and 2 rhyme and lines 3 and 4 rhyme.",
      "I used the same rhyme pattern in every stanza.",
      "My rhyming words make sense and stay on my topic.",
      "I chose words that help my reader feel how I feel."
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
