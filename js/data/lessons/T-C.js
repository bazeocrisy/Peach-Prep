/* Lessons: 3.T.C Context (purpose and audience; authors and speakers). Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.T.C.1.a",
  title: "Author's purpose and audience",
  teach: {
    big: "Every author writes for a reason and for someone: to inform, to persuade or to entertain, and for a certain reader.",
    points: [
      "To inform means to teach facts. The text tells you true things about a topic.",
      "To persuade means to get you to do something or to agree. Look for words like should and let's, and for reasons that try to change your mind.",
      "Check what the whole text mostly does. Directions like \"Bring a water bottle\" or \"Please come early\" tell you how to do something. They inform; they are not trying to change your mind.",
      "To entertain means to give you a fun story, a joke or a poem to enjoy.",
      "The audience is who the text is for. Look for names, the word you, and what the reader is asked to know or do."
    ],
    words: [
      { term: "purpose", means: "the reason an author writes" },
      { term: "audience", means: "the people a text is written for" },
      { term: "inform", means: "to teach facts" },
      { term: "persuade", means: "to get someone to agree or to act" },
      { term: "entertain", means: "to give the reader something fun to enjoy" }
    ],
    example: {
      label: "One topic, three purposes",
      lines: [
        "Inform: Dogs need fresh water every day.",
        "Persuade: You should adopt a dog from the animal shelter.",
        "Entertain: Biscuit chased his tail so fast that he spun right into the kiddie pool."
      ],
      note: "All three are about dogs. The first teaches a fact. The second tries to get you to act. The third is a funny story to enjoy."
    },
    tip: "On the test, a question may ask why the author wrote a text or who it is for. Find what the author wants the reader to know, do or feel."
  },
  learn: [
    {
      show: ["Everyone in Room 9 should bring a can of food for the food drive. Families in our town need help this winter. Let's fill the big box by Friday!"],
      ask: "What is the author's purpose, and who is the audience?",
      steps: [
        "Ask what the author wants. The author wants readers to bring a can of food.",
        "Asking the reader to do something is persuading. Notice the words should and let's.",
        "Look for who is being asked. The text says everyone in Room 9.",
        "Room 9 is a classroom, so everyone in Room 9 means the students in that class."
      ],
      answer: "The purpose is to persuade. The audience is the students in Room 9."
    },
    {
      show: ["An octopus has eight arms. Each arm is covered with suckers that help it grab food. An octopus can also change color to hide."],
      ask: "What is the author's purpose?",
      steps: [
        "Is there a story with characters and a problem? No.",
        "Does the author ask you to do something? No.",
        "Does the text give true facts about a topic? Yes. It teaches about the octopus."
      ],
      answer: "The purpose is to inform readers about the octopus."
    },
    /* B3 (expansion 2026-10-22, author b3a): models one topic written for two audiences, and how the
       words change for each reader (core C03, C11, C13 and C15 ask for this). */
    {
      show: ["Note 1: Dear families, Poetry Night is on Thursday from 6:00 to 7:00 in the cafeteria. Come and hear the poems your children wrote this fall.", "Note 2: Hey, poets! Thursday is Poetry Night. Stand up tall and read your poem loud and clear for your family."],
      ask: "Both notes are about Poetry Night. Who is each note for, and how can you tell?",
      steps: [
        "Look at who each note talks to. Note 1 says \"Dear families.\" Note 2 says \"Hey, poets!\"",
        "Look at what each note asks the reader to do. Families are asked to come and listen. The poets are asked to stand up and read their poems.",
        "Look at the words. Note 1 gives the time and the place in a calm way. Note 2 is short and cheerful.",
        "The topic is the same, but the writer chose different words for each audience."
      ],
      answer: "Note 1 is for the families who will come to listen, and Note 2 is for the students who wrote the poems. The greeting and what each note asks the reader to do show who each one is for."
    }
  ],
  parent: "When you see a sign, a flyer, a letter or the back of a food box, ask your child: Why did someone write this? Who is it for? Have your child point to the words that show it.",
  passages: [
    { id: "p1", title: "A Letter to Principal Okafor", genre: "Persuasive letter",
      paragraphs: [
        ["Dear Principal Okafor,"],
        ["My name is Rosa Delgado, and I am in Ms. Hart's third-grade class.", "I am writing to ask you to let our school start a garden.", "There is a sunny patch of grass behind the gym that no one uses."],
        ["A garden would help us learn.", "We could measure how fast bean plants grow in math class.", "We could watch bees and butterflies visit the flowers in science."],
        ["A garden would also help us eat well.", "Many kids say they do not like vegetables.", "I think they would try a carrot if they grew it themselves."],
        ["My class has a plan.", "Our families will give seeds and tools, and we will water the plants every morning.", "Please say yes to a school garden.", "Come visit our class on Friday, and we will show you our drawings."],
        ["Your student,", "Rosa"]
      ] },
    { id: "p2", title: "Welcome to the Eastside Tigers!", genre: "Informational text",
      paragraphs: [
        ["Welcome to the Eastside Tigers soccer team!", "We are glad you joined us this fall.", "This page tells you what you need to know before your first practice."],
        ["## When and Where"],
        ["Practice is every Tuesday and Thursday from 5:00 to 6:00.", "We meet on the far field at Willow Creek Park, next to the playground.", "Please get there ten minutes early so you can stretch."],
        ["## What to Bring"],
        ["Bring a full water bottle with your name on it.", "Wear shin guards under your socks and shoes made for running on grass.", "Your coach will give you a team shirt on the first day."],
        ["## If It Rains"],
        ["If there is thunder or lightning, practice is canceled.", "Coach Abebe will send a message to your family by 3:00 that day."],
        ["We can't wait to meet you on the field!"]
      ] },
    /* B3 (expansion 2026-10-22, author b3a): p3 and p4 are used only by core (p3 set 2, p4 set 3).
       Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "Roly-Polies", genre: "Informational text (kids' magazine article)",
      paragraphs: [
        ["Have you ever played in your yard and found a tiny gray bug that curls up into a ball?", "You may have met a roly-poly.", "Some people call it a pill bug."],
        ["A roly-poly is not really a bug at all.", "It is a crustacean (krus-TAY-shun), like a crab or a shrimp.", "It has seven pairs of legs, so it has fourteen legs in all."],
        ["Crabs and shrimp live in water.", "A roly-poly lives on land, but it still needs to stay damp.", "That is why you find roly-polies in dark, wet places, like under logs and piles of leaves."],
        ["When a roly-poly is scared, it rolls into a tight ball.", "Its hard back works like a bike helmet.", "It keeps the soft parts inside safe."],
        ["Roly-polies eat dead leaves and old, rotting plants.", "This helps turn them back into rich soil."],
        ["If you find a roly-poly, hold it gently in your open hand.", "Watch it unroll and walk across your palm.", "Then put it back where you found it, so it can stay damp."]
      ] },
    { id: "p4", title: "Two Texts About a Car Wash", genre: "Short texts (sign, school news report)",
      paragraphs: [
        ["## A Sign by the Road"],
        ["CAR WASH TODAY!", "Is your car covered in yellow pollen?", "Let the Oakdale Science Club make it shine!", "Only $5 a car.", "Every dollar helps us take a trip to the planetarium to learn about the stars.", "Turn in here!"],
        ["## Oakdale School News: The Science Club Car Wash"],
        ["Last Saturday, the Oakdale Science Club held a car wash in the school parking lot.", "Club members washed 64 cars and raised $320."],
        ["The fifth graders sprayed each car with a hose.", "Then the third graders scrubbed from the top down, so the dirty water ran off."],
        ["One truck was so muddy that it took six of us to scrub it clean!"],
        ["Next month, the club will use the money to visit the planetarium in Atlanta.", "Ms. Abernathy, the club's teacher, thanks every family who came."]
      ] }
  ],
  practice: [
    { id: "SK-TC1a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What is the main purpose of Rosa's letter?",
      choices: [
        { text: "to get the principal to agree to a school garden", correct: true },
        { text: "to tell a funny story about her class garden" },
        { text: "to teach readers how bean plants grow" },
        { text: "to explain why kids do not like vegetables" }
      ],
      clue: "Ask what Rosa wants the reader to do. Read paragraph 2 and the end of the letter.",
      why: "The answer is to get the principal to agree to a school garden. Rosa asks for a garden near the start of the letter and asks again at the end. Asking a reader to agree or to act is persuading." },
    { id: "SK-TC1a-P2", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "Who is the audience for this letter?",
      choices: [
        { text: "the school principal", correct: true },
        { text: "the students in Ms. Hart's class" },
        { text: "families who give seeds and tools" },
        { text: "kids who do not like vegetables" }
      ],
      clue: "A letter names the person it is written to. Ask who Rosa is talking to as she asks for things.",
      why: "The answer is the school principal. The letter begins \"Dear Principal Okafor,\" and asks the principal to say yes. The other people are only talked about in the letter." },
    { id: "SK-TC1a-P3", type: "hottext", points: 2, dok: 2, passages: ["p1"],
      prompt: "Rosa asks the principal for a garden in two places. Choose the two sentences in the letter.",
      targets: ["p1:2:1", "p1:2:2", "p1:3:1", "p1:4:3", "p1:5:3"],
      answer: ["p1:2:2", "p1:5:3"], pick: 2,
      clue: "Look for sentences where Rosa asks the principal for something. Skip sentences that only tell about Rosa or about the school.",
      why: "The answers are \"I am writing to ask you to let our school start a garden.\" and \"Please say yes to a school garden.\" Both ask the principal for a garden. Writers who persuade often ask at the start and again at the end." },
    { id: "SK-TC1a-P4", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does Rosa try to get the principal to agree with her?",
        choices: [
          { text: "She gives reasons a garden would help students.", correct: true },
          { text: "She tells a story about a garden she visited." },
          { text: "She lists facts about how vegetables grow." },
          { text: "She warns that kids will get sick without one." }
        ] },
      partB: { prompt: "Which sentence from the letter best supports the answer to Part A?",
        choices: [
          { text: "\"A garden would help us learn.\"", correct: true },
          { text: "\"Many kids say they do not like vegetables.\"" },
          { text: "\"My name is Rosa Delgado, and I am in Ms. Hart's third-grade class.\"" },
          { text: "\"Come visit our class on Friday, and we will show you our drawings.\"" }
        ] },
      clue: "Think about what a persuasive writer does to change a reader's mind. Then check which choice Rosa really does in her letter.",
      why: "Part A: She gives reasons a garden would help students. Part B: \"A garden would help us learn.\" That sentence states a reason. The rest of paragraph 3 explains it." },
    { id: "SK-TC1a-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Read each short text. Match it to the author's main purpose.",
      cols: ["To inform", "To persuade", "To entertain"],
      rows: [
        { text: "A bat uses its ears to find bugs in the dark.", answer: 0 },
        { text: "Vote for Jamal for class helper. He always shares!", answer: 1 },
        { text: "The silly goose wore rain boots to the pond and splashed every duck.", answer: 2 },
        { text: "You should wear a helmet every time you ride your bike.", answer: 1 }
      ],
      clue: "Ask of each text: Does it teach a fact, ask me to do something, or tell something fun to enjoy?",
      why: "The bat sentence teaches a fact, so it informs. The Jamal sentences and the helmet sentence ask the reader to do something, so they persuade. The silly goose is a made-up funny story, so it entertains." }
  ],
  /* ---------- B3 core (expansion 2026-10-22, author b3a; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five. { ref } reuses Try items P4 and P5 by id, so Practice Together
     is P1-P3 (the engine shows practice minus refs there). Hints and Show me how for P1-P5 are in addons.
     C14 is a constructed response (type "cr", never scored; 01 §2.2.2).
     Author log: docs/expansion-2026-10-22/batches/B3-b3a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TC1a-P4" },
      { ref: "SK-TC1a-P5" },
      { id: "SK-TC1a-C03", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: ["p1"],
        prompt: "Suppose Rosa writes a short note to the kids in her own class. This time she wants them to help take care of the garden. Which sentence fits this new purpose and audience best?",
        choices: [
          { text: "Let's take turns watering our garden before school starts!", correct: true },
          { text: "Please let our class use the sunny patch of grass behind the gym." },
          { text: "Bean plants grow best in a sunny spot with damp soil." },
          { text: "Once upon a time, a thirsty bean plant waited for rain." }
        ],
        clue: "Purpose and audience go together. Ask what Rosa wants this time, and who will read the note.",
        hints: [
          "Purpose and audience go together. Ask what Rosa wants this time, and who will read the note.",
          "Reread the letter. Notice who Rosa wrote to and what she asked that reader to do.",
          "The bean plant story is made up for fun, so it does not ask anyone for help. Check each choice that is left."
        ],
        how: [
          "Rosa's new readers are her classmates, and she wants them to help take care of the garden.",
          "Asking classmates to take turns watering gives them a job they can really do. The answer is \"Let's take turns watering our garden before school starts!\"",
          "Only the principal can say yes to using the grass behind the gym, so that sentence still fits the old audience.",
          "The bean plant fact teaches, but it does not ask for help, and the story is only for fun."
        ],
        misconception: "A common mix-up is choosing a sentence that worked for the old audience. When the audience changes, the words have to change too.",
        why: "The answer is \"Let's take turns watering our garden before school starts!\" It asks Rosa's classmates to do a job they can really do. Only the principal can let the class use the grass, the bean plant fact teaches instead of asking, and the story is for fun." },
      { id: "SK-TC1a-C04", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: [], pick: 2,
        stem: ["GOAT YARD", "Hi, young zookeepers!", "Pet the goats gently, with two fingers.", "Ask your grown-up to lift you up to see the baby goats.", "Wash your hands at the sink when you leave.", "Open every day from 10:00 to 4:00."],
        prompt: "Read the sign in the box. Which TWO details best show that the sign is written mostly for young children?",
        choices: [
          { text: "It calls its readers young zookeepers.", correct: true },
          { text: "It tells readers to ask a grown-up to lift them up.", correct: true },
          { text: "It tells readers to pet the goats gently." },
          { text: "It tells readers to wash their hands when they leave." },
          { text: "It tells readers what time the goat yard opens." }
        ],
        clue: "Audience clues tell who the reader is. Ask which lines of the sign would fit only one kind of reader.",
        hints: [
          "Audience clues tell who the reader is. Ask which lines of the sign would fit only one kind of reader.",
          "Read every line of the sign, from the greeting to the last line. Choose two.",
          "Every visitor needs to know when the goat yard opens, so the hours do not show a young reader. Check the other details."
        ],
        how: [
          "Young zookeepers is a playful name for children who are visiting.",
          "Only a small child needs a grown-up to lift them up to see.",
          "The answers are \"It calls its readers young zookeepers.\" and \"It tells readers to ask a grown-up to lift them up.\"",
          "Petting gently, washing hands and the hours are rules for every visitor, so they do not show a young reader."
        ],
        misconception: "A common mix-up is choosing a rule that fits every reader. The best audience clues fit only one kind of reader.",
        why: "The answers are \"It calls its readers young zookeepers.\" and \"It tells readers to ask a grown-up to lift them up.\" A playful name and needing to be lifted fit small children. Petting gently, washing hands and the hours are rules for every visitor." },
      { id: "SK-TC1a-C05", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: [],
        stem: ["How to Make a Paper Plate Mask", "1. Hold a paper plate up to your face, and have a helper mark where your eyes are.", "2. Cut out two eye holes.", "3. Color a face on the plate.", "4. Glue on yarn for hair.", "5. Tape a craft stick to the bottom so you can hold the mask up.", "Please be careful, because the points of the scissors are sharp."],
        prompt: "Read the directions in the box. Then choose the best answer for each blank.",
        text: "The whole text mostly {0}. The last line is there to {1}.",
        slots: [
          { options: ["teaches readers how to make something", "tries to get readers to wear masks", "tells a funny story about a mask", "explains where masks first came from"], answer: 0 },
          { options: ["help readers stay safe while they work", "change readers' minds about scissors", "make readers laugh at the end", "tell readers which colors to use"], answer: 0 }
        ],
        clue: "Check what the whole text mostly does: teach, persuade or entertain. Then think about what one line adds.",
        hints: [
          "Check what the whole text mostly does: teach, persuade or entertain. Then think about what one line adds.",
          "Read the numbered steps first. Then read the line after step 5.",
          "Nothing in the directions is made up or silly, so the choice about a funny story does not fit the first blank. Test the other choices for each blank."
        ],
        how: [
          "The five numbered steps tell how to make a paper plate mask, so the whole text teaches. It informs.",
          "The last line says the points of the scissors are sharp. It warns readers so they do not get hurt.",
          "So the first blank is \"teaches readers how to make something\" and the second blank is \"help readers stay safe while they work.\"",
          "A please inside directions does not make the whole text persuasive. Nothing is funny, and the text does not tell where masks came from or which colors to use."
        ],
        misconception: "A common mix-up is calling directions persuasive because one line says please. Check what the whole text mostly does.",
        why: "The answers are \"teaches readers how to make something\" and \"help readers stay safe while they work.\" The steps teach how to make a paper plate mask, and the last line warns that the scissors are sharp. A please inside directions does not make the text persuasive." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TC1a-C06", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.a"], passages: ["p3"],
        prompt: "What is the author's main purpose for writing \"Roly-Polies\"?",
        choices: [
          { text: "to teach readers facts about roly-polies and how they live", correct: true },
          { text: "to get readers to go outside and hunt for roly-polies" },
          { text: "to tell a story about a child who finds a roly-poly" },
          { text: "to show readers how to keep a roly-poly as a pet" }
        ],
        clue: "Ask what the whole article mostly does. Does it give information, ask the reader to act, or tell a story?",
        hints: [
          "Ask what the whole article mostly does. Does it give information, ask the reader to act, or tell a story?",
          "Make a quick list: what does each paragraph give the reader? Start with paragraph 1.",
          "No one in the article has a name or a problem to solve, so it is not a story. Check the other choices against your list."
        ],
        how: [
          "Paragraphs 2 to 5 give facts about what a roly-poly is, where it lives, what it does when it is scared and what it eats.",
          "Paragraph 6 tells what to do if you find one, but it is only one part, and it says to put the roly-poly back.",
          "So the article mostly informs. The answer is \"to teach readers facts about roly-polies and how they live.\"",
          "It does not ask you to hunt for roly-polies or keep one, and no character has a problem, so it is not a story."
        ],
        misconception: "A common mix-up is naming the purpose of one paragraph instead of the whole text.",
        why: "The answer is \"to teach readers facts about roly-polies and how they live.\" Most paragraphs give facts about the roly-poly's body, home and food. The last paragraph says to put it back, so the article is not about hunting or keeping one, and no character has a problem, so it is not a story." },
      { id: "SK-TC1a-C07", type: "ebsr", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: ["p3"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Who is the article mostly written for?",
          choices: [
            { text: "children who like to explore outside", correct: true },
            { text: "scientists who study crabs and shrimp" },
            { text: "gardeners who want rich soil" },
            { text: "teachers who plan science lessons" }
          ] },
        partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
          choices: [
            { text: "\"Have you ever played in your yard and found a tiny gray bug that curls up into a ball?\"", correct: true },
            { text: "\"A roly-poly is not really a bug at all.\"" },
            { text: "\"Roly-polies eat dead leaves and old, rotting plants.\"" },
            { text: "\"It has seven pairs of legs, so it has fourteen legs in all.\"" }
          ] },
        clue: "To find the audience, look at how the author talks to the reader, and ask what kind of reader that is.",
        hints: [
          "To find the audience, look at how the author talks to the reader, and ask what kind of reader that is.",
          "Reread the whole article from start to finish. Part B asks for the sentence that fits your Part A answer best.",
          "Teachers are never mentioned in the article, so that Part A choice has no support. For Part B, choose the sentence that shows your Part A answer."
        ],
        how: [
          "The article begins by asking whether you have ever played in your yard and found a roly-poly. That question speaks to a child.",
          "The other three sentences only tell facts about the roly-poly. They are true, but they do not show who is reading.",
          "Part A: children who like to explore outside. Part B: \"Have you ever played in your yard and found a tiny gray bug that curls up into a ball?\"",
          "The crab and shrimp comparison in the passage could tempt a reader to pick scientists, and the leaves fact could tempt a reader to pick gardeners, but the author never talks to scientists, gardeners or teachers."
        ],
        misconception: "A common mix-up is thinking a text full of science facts must be for scientists. Look at how the author talks to the reader.",
        why: "Part A: children who like to explore outside. Part B: \"Have you ever played in your yard and found a tiny gray bug that curls up into a ball?\" The author talks to a reader who plays in the yard and finds bugs. The other sentences only give facts about the roly-poly, and the author never talks to scientists, gardeners or teachers." },
      { id: "SK-TC1a-C08", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: ["p3"],
        prompt: "In paragraph 4, the author writes that a roly-poly's hard back \"works like a bike helmet.\" Why does the author compare it to a bike helmet?",
        choices: [
          { text: "so readers can picture how the hard back keeps the roly-poly safe", correct: true },
          { text: "so readers will remember to wear a helmet when they ride a bike" },
          { text: "so readers can enjoy a funny story about a roly-poly on a bike" },
          { text: "so readers will know that a roly-poly's back is round like a helmet" }
        ],
        clue: "Authors often compare something new to something readers already know. Ask what the comparison helps the reader understand.",
        hints: [
          "Authors often compare something new to something readers already know. Ask what the comparison helps the reader understand.",
          "Reread paragraph 4. Which sentences tell about the roly-poly's body?",
          "The article is not telling a story, and no roly-poly rides a bike, so the funny-story choice does not fit. Check the other choices against paragraph 4."
        ],
        how: [
          "Paragraph 4 says the roly-poly's hard back keeps the soft parts inside safe.",
          "A bike helmet also keeps something soft safe: your head. Most readers already know that.",
          "So the comparison helps readers picture how the hard back protects the roly-poly. The answer is \"so readers can picture how the hard back keeps the roly-poly safe.\"",
          "The article is not giving bike advice or telling a story, and the comparison is about keeping safe, not about shape."
        ],
        misconception: "A common mix-up is thinking a comparison tells the reader to do something. Here it helps readers picture a new idea.",
        why: "The answer is \"so readers can picture how the hard back keeps the roly-poly safe.\" A helmet protects your head, and the roly-poly's hard back protects its soft parts. The article is not giving bike advice or telling a story, and the comparison is about safety, not shape." },
      { id: "SK-TC1a-C09", type: "match", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: ["p3"],
        stem: ["Roly-poly, tucked up tight,", "a little gray bead that hides from light.", "Peek out, roly, the coast is clear,", "unroll your legs and march right here!"],
        prompt: "Read the poem in the box. Then think about the article \"Roly-Polies.\" Match each sentence to the text it tells about: the article, the poem, or both.",
        cols: ["the article", "the poem", "both"],
        rows: [
          { text: "It tells that a roly-poly is related to crabs.", answer: 0 },
          { text: "It uses rhyming lines that are fun to read aloud.", answer: 1 },
          { text: "It shows a roly-poly curled up into a ball.", answer: 2 },
          { text: "It explains why roly-polies live in damp places.", answer: 0 },
          { text: "It talks to the roly-poly as if it could listen.", answer: 1 }
        ],
        clue: "Check each sentence against the article and against the poem. A sentence can fit one text or both.",
        hints: [
          "Check each sentence against the article and against the poem. A sentence can fit one text or both.",
          "Reread the poem line by line. Then reread paragraphs 2 to 4 of the article.",
          "The poem says the roly-poly is tucked up tight, and the article says it rolls into a tight ball, so the curled-up sentence fits both. Sort the other sentences the same way."
        ],
        how: [
          "Only the article teaches facts: that roly-polies are related to crabs, and that they need damp places.",
          "Only the poem rhymes (tight and light, clear and here) and talks to the roly-poly: \"Peek out, roly.\"",
          "Both show a roly-poly curled up: the poem's \"tucked up tight\" and the article's \"rolls into a tight ball.\"",
          "So the article's main purpose is to inform, and the poem's main purpose is to entertain."
        ],
        misconception: "A common mix-up is thinking two texts on the same topic have the same purpose. Ask what each text mostly does.",
        why: "The article teaches that roly-polies are related to crabs and explains why they need damp places. The poem rhymes and talks to the roly-poly. Both show a roly-poly curled up in a ball. The article informs, and the poem entertains." },
      { id: "SK-TC1a-C10", type: "hottext", points: 1, dok: 2, std: ["3.T.C.1.a"], passages: [],
        stem: ["Kiri is writing a report about geckos for the class science board. Its purpose is to inform.", "(1) A gecko is a small lizard. (2) It can climb up walls and even walk across a ceiling. (3) Its toes are covered with tiny hairs that grip almost anything. (4) Geckos are the coolest animals in the world, and our class should get one! (5) Many geckos cannot blink, so they lick their eyes to keep them clean."],
        prompt: "Which sentence should Kiri take out because it does not fit the report's purpose?",
        options: [
          "(1) A gecko is a small lizard.",
          "(2) It can climb up walls and even walk across a ceiling.",
          "(3) Its toes are covered with tiny hairs that grip almost anything.",
          "(4) Geckos are the coolest animals in the world, and our class should get one!",
          "(5) Many geckos cannot blink, so they lick their eyes to keep them clean."
        ],
        answer: [3], pick: 1,
        clue: "A report that informs gives true facts about its topic. Check each sentence against that purpose.",
        hints: [
          "A report that informs gives true facts about its topic. Check each sentence against that purpose.",
          "Read all five sentences. Then reread the first line in the box, which tells the report's purpose.",
          "Sentence 3 tells how a gecko's toes work, so it gives a fact and fits the report. Check the other sentences."
        ],
        how: [
          "The report's purpose is to inform, so each sentence should give a true fact about geckos.",
          "Sentence 4 gives the writer's opinion and asks the class to get a gecko. That is persuading, so it does not fit.",
          "The answer is sentence 4: \"Geckos are the coolest animals in the world, and our class should get one!\"",
          "Walking on a ceiling and licking their eyes sound surprising, but they are true facts, so they fit."
        ],
        misconception: "A common mix-up is taking out a surprising fact because it sounds silly. A surprising fact still informs.",
        why: "The answer is sentence 4, \"Geckos are the coolest animals in the world, and our class should get one!\" It gives an opinion and asks the class to act, so it persuades instead of informing. Walking on ceilings and licking their eyes are surprising, but they are true facts." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TC1a-C11", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: ["p4"],
        prompt: "Read both texts about the car wash. Then choose the best answer for each blank.",
        text: "The sign is mostly for {0}. The school news report is mostly for {1}.",
        slots: [
          { options: ["drivers passing by the school", "members of the Science Club", "families who read the school news", "workers at the planetarium"], answer: 0 },
          { options: ["families who read the school news", "drivers passing by the school", "members of the Science Club", "workers at the planetarium"], answer: 0 }
        ],
        clue: "The same topic can be written for different readers. For each text, ask who it talks to.",
        hints: [
          "The same topic can be written for different readers. For each text, ask who it talks to.",
          "Reread the sign from top to bottom. Then reread every paragraph of the school news report.",
          "Planetarium workers are only the place the club will visit, so that choice fits neither blank. Test the other choices in each blank."
        ],
        how: [
          "The sign stands by the road, asks about your car and says \"Turn in here!\" It talks to drivers who might stop.",
          "The report is in the school news, and it thanks every family who came. It is for the school's families.",
          "So the first blank is \"drivers passing by the school\" and the second blank is \"families who read the school news.\"",
          "Club members are the helpers and writers in these texts, not the readers each text is mostly for."
        ],
        misconception: "A common mix-up is thinking the people a text tells about are its audience. The audience is who the writer is talking to.",
        why: "The answers are \"drivers passing by the school\" and \"families who read the school news.\" The sign by the road tells drivers to turn in. The report is in the school news and thanks the families who came. Club members are the helpers in both texts." },
      { id: "SK-TC1a-C12", type: "ebsr", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "The sign asks drivers to stop. What does the school news report do instead?",
          choices: [
            { text: "It gives families the results of the car wash.", correct: true },
            { text: "It asks families to come to the next car wash." },
            { text: "It teaches families the steps for washing a car." },
            { text: "It tells families a funny story about a muddy truck." }
          ] },
        partB: { prompt: "Which sentence from the report best supports the answer to Part A?",
          choices: [
            { text: "\"Club members washed 64 cars and raised $320.\"", correct: true },
            { text: "\"Then the third graders scrubbed from the top down, so the dirty water ran off.\"" },
            { text: "\"One truck was so muddy that it took six of us to scrub it clean!\"" },
            { text: "\"Ms. Abernathy, the club's teacher, thanks every family who came.\"" }
          ] },
        clue: "Two texts on the same topic can have different purposes. Ask what the report mostly tells its readers.",
        hints: [
          "Two texts on the same topic can have different purposes. Ask what the report mostly tells its readers.",
          "Reread all four paragraphs of the school news report.",
          "The report never asks anyone to come to another car wash, so that Part A choice has no support. For Part B, choose the sentence that matches your Part A answer."
        ],
        how: [
          "The report tells what the club did at the car wash and how it turned out.",
          "Its most important news is the results: how many cars were washed and how much money was raised.",
          "Part A: It gives families the results of the car wash. Part B: \"Club members washed 64 cars and raised $320.\"",
          "The scrubbing sentence tells how they washed, not how it turned out. The muddy truck is one funny moment, the thank-you is polite, and nothing asks anyone to come again."
        ],
        misconception: "A common mix-up is naming the purpose of one fun sentence. Ask what the whole report mostly gives readers.",
        why: "Part A: It gives families the results of the car wash. Part B: \"Club members washed 64 cars and raised $320.\" The report tells how the car wash turned out. The scrubbing sentence tells how they washed, the muddy truck is one funny moment, and nothing asks families to come again." },
      { id: "SK-TC1a-C13", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: [],
        stem: ["Nell made a hand-washing poster for her third-grade classroom. One line says:", "Rub the soap over the backs of your hands and between your fingers for twenty seconds."],
        prompt: "Nell wants to make the same poster for her little brother, who is four. Which sentence is the best way to rewrite this line for him?",
        choices: [
          { text: "Rub soap all over your hands while you sing the ABC song.", correct: true },
          { text: "Washing your hands for twenty seconds gets rid of germs." },
          { text: "Everyone should wash their hands, because clean hands are the best!" },
          { text: "Spread the soap across the backs of your hands and between each finger for twenty seconds." }
        ],
        clue: "Purpose and audience shape a writer's words. Ask who the new reader is and what the line should still help him do.",
        hints: [
          "Purpose and audience shape a writer's words. Ask who the new reader is and what the line should still help him do.",
          "Reread the line from the classroom poster. What job does it give the reader?",
          "\"Clean hands are the best\" tries to change his mind, but the poster's job is to tell him how to wash. Check the other choices."
        ],
        how: [
          "The classroom line tells the reader how to wash and for how long.",
          "A four-year-old needs simple words and a way to know how long twenty seconds is. Singing the ABC song while you scrub takes about that long.",
          "The answer is \"Rub soap all over your hands while you sing the ABC song.\"",
          "The germ sentence gives a fact but not a step, the long sentence keeps the hard words and a time he cannot count, and the clean-hands line tries to persuade."
        ],
        misconception: "A common mix-up is keeping the same hard words for a new reader. The job stays the same, but the words change.",
        why: "The answer is \"Rub soap all over your hands while you sing the ABC song.\" It keeps the same step in words a four-year-old can follow, and the song shows how long to scrub. The germ fact is not a step, the long sentence keeps the hard words, and the clean-hands line persuades." },
      { id: "SK-TC1a-C14", type: "cr", dok: 3, std: ["3.T.C.1.a"], passages: [], rows: 4,
        stem: ["Max the Moose is our team's mascot.", "He cheers in a giant blue hat.", "At halftime he tried a cartwheel", "and landed, splat, upon the mat!", "The fans all laughed, the players roared,", "and Max stood up to bow.", "We lost the game by twenty points,", "but who remembers now?"],
        prompt: "Read the poem in the box. What is the author's purpose, and who would most enjoy this poem? Write two or three sentences. Use one detail from the poem for each answer.",
        sample: "The author's purpose is to entertain, because the poem tells a silly story about Max landing splat on the mat. The poem is for fans of the team, because it says \"our team's mascot\" and tells about a game the fans watched together.",
        criteria: [
          "I named the purpose: to inform, to persuade or to entertain.",
          "I gave a detail from the poem that shows the purpose.",
          "I told who would most enjoy the poem.",
          "I gave a detail from the poem that shows who it is for."
        ],
        clue: "Ask why the author wrote the poem: to teach, to persuade or to give readers something to enjoy. Then ask who would care about it most.",
        hints: [
          "Ask why the author wrote the poem: to teach, to persuade or to give readers something to enjoy. Then ask who would care about it most.",
          "Find a line that shows the purpose, and a word or detail that shows who the poem is for.",
          "You can start like this: The author wrote this poem to ___ because ___. It is for ___ because the poem says ___."
        ],
        how: [
          "Find what the poem mostly does. It tells a funny moment: Max tries a cartwheel and lands splat on the mat.",
          "So the purpose is to entertain.",
          "Find the audience. The poem says \"our team's mascot,\" so it is for the team's fans and players.",
          "Put it together, with one detail for each answer. One good answer follows. Other answers can also be right."
        ],
        why: "Many answers can be right. A good answer says the poem entertains, with a detail like Max landing splat on the mat, and says it is for the team's fans, with a detail like \"our team's mascot.\"" },
      { id: "SK-TC1a-C15", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: [],
        stem: ["Ms. Lowe wants neighbors to come and help with the winter bird count at Hollis Pond. She wrote two flyers.", "Flyer A: Every winter, scientists ask people to count the birds they see. The counts show which birds are doing well. Some birds fly hundreds of miles to spend the winter here.", "Flyer B: Come count birds with us! Saturday at 8:00 at Hollis Pond. We will bring the binoculars. Every bird you count helps scientists learn!"],
        prompt: "Read the two flyers in the box. Which flyer will work better for Ms. Lowe's purpose, and why?",
        choices: [
          { text: "Flyer B, because it asks neighbors to come and tells them when and where", correct: true },
          { text: "Flyer A, because it gives more facts about why bird counts matter" },
          { text: "Flyer A, because it tells neighbors that some birds fly very far" },
          { text: "Flyer B, because it tells a story about one bird that lives at the pond" }
        ],
        clue: "First decide the purpose: what does Ms. Lowe want her neighbors to do? Then ask which flyer does that job.",
        hints: [
          "First decide the purpose: what does Ms. Lowe want her neighbors to do? Then ask which flyer does that job.",
          "Read Flyer A, then Flyer B, one sentence at a time.",
          "Neither flyer tells a story about one bird, so that choice does not fit. Check the other choices against Ms. Lowe's purpose."
        ],
        how: [
          "Ms. Lowe's purpose is to persuade neighbors to come and count birds.",
          "Flyer A gives true facts, but it never asks anyone to come, and it does not say when or where.",
          "Flyer B asks neighbors to come, tells the day, time and place, and gives a reason. The answer is \"Flyer B, because it asks neighbors to come and tells them when and where.\"",
          "Facts about bird counts and long trips can be interesting, but a flyer that never asks will not get people to come."
        ],
        misconception: "A common mix-up is thinking that more facts always persuade. To persuade, a text has to ask the reader to act.",
        why: "The answer is \"Flyer B, because it asks neighbors to come and tells them when and where.\" Ms. Lowe wants helpers. Flyer A only informs and never asks anyone to come, and neither flyer tells a story about one bird." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. `like` lists only the core
     items each one really practises. */
  similar: [
    { id: "SK-TC1a-S01", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C04", "SK-TC1a-C07"],
      stem: ["ROCK TABLE", "You may touch the rocks on this table.", "Pick one up and feel how heavy it is.", "Ask your teacher to help you read the name cards.", "All of these rocks were found in the mountains of Georgia."],
      prompt: "Read the museum sign in the box. Which detail best shows that the sign is mostly for students on a class trip?",
      choices: [
        { text: "It tells readers to ask their teacher for help.", correct: true },
        { text: "It tells readers that they may touch the rocks." },
        { text: "It tells readers to feel how heavy a rock is." },
        { text: "It tells readers where the rocks were found." }
      ],
      clue: "Audience clues tell who the reader is. Ask which line would fit only one kind of reader.",
      hints: [
        "Audience clues tell who the reader is. Ask which line would fit only one kind of reader.",
        "Read each line of the sign, from the title to the last line.",
        "Where the rocks were found is a fact for every visitor, so it does not show who the reader is. Check the other details."
      ],
      how: [
        "Most lines fit any visitor: touching the rocks, feeling how heavy they are and where they came from.",
        "Only students on a class trip would have a teacher with them to help read the cards.",
        "The answer is \"It tells readers to ask their teacher for help.\""
      ],
      misconception: "A common mix-up is choosing a line that every visitor could follow. The best clue fits only one kind of reader.",
      why: "The answer is \"It tells readers to ask their teacher for help.\" Only students on a trip would have a teacher with them. Touching, feeling and where the rocks came from fit every visitor." },
    { id: "SK-TC1a-S02", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-P5", "SK-TC1a-C06"],
      stem: ["Ostriches are the biggest birds on Earth.", "They cannot fly, but they can run faster than a car drives on most town streets.", "An ostrich egg weighs about as much as two dozen chicken eggs.", "Next time you visit a zoo, look for these giant birds!"],
      prompt: "Read the text in the box. What is the author's main purpose?",
      choices: [
        { text: "to inform readers about ostriches", correct: true },
        { text: "to persuade readers to visit a zoo" },
        { text: "to entertain readers with an ostrich story" },
        { text: "to show readers how to care for ostriches at a zoo" }
      ],
      clue: "Check what the whole text mostly does. Does it give information, ask the reader to act, or tell a story?",
      hints: [
        "Check what the whole text mostly does. Does it give information, ask the reader to act, or tell a story?",
        "Read the first three sentences, then the last one.",
        "There is no character and no problem, so it is not a story. Check the other choices."
      ],
      how: [
        "The first three sentences give facts: the ostrich's size, its speed and the weight of its egg.",
        "The last line asks you to look for ostriches at a zoo, but it is only one line.",
        "Most of the text teaches facts, so the answer is \"to inform readers about ostriches.\""
      ],
      misconception: "A common mix-up is naming the purpose of one line instead of the whole text.",
      why: "The answer is \"to inform readers about ostriches.\" Three of the four sentences give facts. The zoo line is only one line, there is no story, and nothing tells how to care for ostriches." },
    { id: "SK-TC1a-S03", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C13", "SK-TC1a-C03"],
      stem: ["Mr. Dunn wrote this in a note to families:", "Please send a coat with your child each day, because recess is held outside unless it rains."],
      prompt: "Mr. Dunn wants to tell his students the same thing himself. Which sentence fits his new audience best?",
      choices: [
        { text: "Bring your coat every day, because we play outside at recess!", correct: true },
        { text: "Please send a coat with your child each day for recess." },
        { text: "Coats keep children warm when the air outside is cold." },
        { text: "Students are to bring outerwear daily for outdoor recess." }
      ],
      clue: "When the audience changes, the words change too. Ask who will read the new sentence.",
      hints: [
        "When the audience changes, the words change too. Ask who will read the new sentence.",
        "Reread the note to families. What does it ask, and who does it ask?",
        "\"Send a coat with your child\" still talks to families, so it does not fit students. Check the other choices."
      ],
      how: [
        "The note asks families to send a coat.",
        "The students need the same job, a coat every day, in words they use.",
        "The answer is \"Bring your coat every day, because we play outside at recess!\"",
        "The coat fact does not ask anything, and \"outerwear daily\" uses words for grown-ups."
      ],
      misconception: "A common mix-up is keeping the words for the old audience. The job stays the same, but the words change.",
      why: "The answer is \"Bring your coat every day, because we play outside at recess!\" It asks students to bring a coat in words they use. The other sentences still talk to families, give only a fact, or use words for grown-ups." },
    /* ENG-07 (author b3a): S04-S12 give every core item at least one similar item. Each `like` names only
       core items that practise the same component with the same task. */
    { id: "SK-TC1a-S04", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-P4"],
      stem: ["Dear Ms. Harmon,", "Please add a late bus on Tuesdays.", "Many kids stay after school for Homework Club.", "Some of our parents work until five, so they cannot pick us up.", "Without a late bus, those kids have to miss Homework Club.", "A late bus would let every kid who needs help get it.", "Thank you,", "Rina Cole"],
      prompt: "Read the letter in the box. How does Rina try to get Ms. Harmon to agree?",
      choices: [
        { text: "She explains a problem and how a late bus would solve it.", correct: true },
        { text: "She tells a story about a funny bus ride she once took." },
        { text: "She lists facts about how school buses are built." },
        { text: "She warns that Homework Club will close forever." }
      ],
      clue: "Think about what a persuasive writer does to change a reader's mind. Then check which choice Rina really does.",
      hints: [
        "Think about what a persuasive writer does to change a reader's mind. Then check which choice Rina really does.",
        "Read the letter one sentence at a time.",
        "Rina never tells about a bus ride she took, so the story choice has no support. Check the other choices."
      ],
      how: [
        "Rina says some kids cannot stay after school, because their parents work until five.",
        "Then she says a late bus would let every kid who needs help get it. That is a problem and a way to fix it.",
        "The answer is \"She explains a problem and how a late bus would solve it.\"",
        "She says kids would miss the club, not that it would close, and she tells no story and no facts about how buses are built."
      ],
      misconception: "A common mix-up is choosing a choice that sounds strong, like a warning. Check what the writer really says.",
      why: "The answer is \"She explains a problem and how a late bus would solve it.\" Some kids miss Homework Club because no one can pick them up, and a late bus would fix that. She tells no story, gives no facts about buses, and never says the club will close." },
    { id: "SK-TC1a-S05", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C12"],
      stem: ["Poster: Come to the Kids' Fishing Derby at Mill Lake on Saturday! Every child gets a free fishing pole.", "School news, the next week: On Saturday, 52 kids fished at Mill Lake. The biggest fish was a bass as long as a ruler. One boy even pulled up an old boot!"],
      prompt: "Read the two texts in the box. The poster asks kids to come. What does the school news piece mostly do?",
      choices: [
        { text: "It tells readers how the fishing derby turned out.", correct: true },
        { text: "It asks readers to come to next year's derby." },
        { text: "It teaches readers how to catch a big bass." },
        { text: "It tells readers a funny story about an old boot." }
      ],
      clue: "Two texts about the same event can have different purposes. Ask what the news piece mostly tells.",
      hints: [
        "Two texts about the same event can have different purposes. Ask what the news piece mostly tells.",
        "Read the news piece one sentence at a time.",
        "The news piece never asks anyone to come next year, so that choice has no support. Check the other choices."
      ],
      how: [
        "The news piece tells how many kids fished, the biggest catch and one funny moment.",
        "Most of it reports what happened at the derby.",
        "The answer is \"It tells readers how the fishing derby turned out.\"",
        "The boot is one funny moment, nothing teaches how to fish, and nothing asks readers to come again."
      ],
      misconception: "A common mix-up is naming the purpose of one funny sentence instead of the whole text.",
      why: "The answer is \"It tells readers how the fishing derby turned out.\" It reports how many kids fished and what they caught. The boot is one funny moment, nothing teaches how to fish, and nothing asks readers to come again." },
    { id: "SK-TC1a-S06", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C05"],
      stem: ["How to Fold a Paper Hat", "1. Fold a sheet of newspaper in half from top to bottom.", "2. Fold the two top corners down to the middle.", "3. Fold up the bottom strips on both sides.", "4. Open the bottom and put the hat on.", "Please ask before you use a newspaper, because someone may still want to read it."],
      prompt: "Read the directions in the box. Then choose the best answer for each blank.",
      text: "Most of the text {0}. The last sentence is there to {1}.",
      slots: [
        { options: ["teaches readers how to make something", "tries to get readers to read the news", "tells a funny story about a hat", "explains how newspapers are printed"], answer: 0 },
        { options: ["remind readers to ask before they take something", "get readers to buy a newspaper", "make readers laugh at the end", "tell readers how big the hat will be"], answer: 0 }
      ],
      clue: "Check what most of the text does: teach, persuade or entertain. Then think about what the last sentence adds.",
      hints: [
        "Check what most of the text does: teach, persuade or entertain. Then think about what the last sentence adds.",
        "Read the numbered steps first. Then read the last sentence.",
        "Nothing in the steps is made up or silly, so the funny-story choice does not fit the first blank. Test the other choices for each blank."
      ],
      how: [
        "The four numbered steps tell how to fold a paper hat, so most of the text teaches. It informs.",
        "The last sentence asks readers to check first, because someone may still want to read the paper.",
        "So the first blank is \"teaches readers how to make something\" and the second blank is \"remind readers to ask before they take something.\"",
        "A please inside directions does not make the whole text persuasive, and the text does not sell papers or explain printing."
      ],
      misconception: "A common mix-up is calling directions persuasive because one sentence says please. Check what most of the text does.",
      why: "The answers are \"teaches readers how to make something\" and \"remind readers to ask before they take something.\" The steps teach how to fold a hat, and the last sentence reminds readers to ask first. Nothing tries to sell papers or make readers laugh." },
    { id: "SK-TC1a-S07", type: "hottext", points: 1, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C10"],
      stem: ["Dario is writing a report about flamingos for the class science board. Its purpose is to inform.", "(1) Flamingos are tall pink birds. (2) They often stand on one leg. (3) Their pink color comes from the tiny shrimp and plants they eat. (4) Flamingos are the prettiest birds, and you should paint your room pink! (5) A flamingo eats with its head upside down."],
      prompt: "Which sentence should Dario take out because it does not fit the report's purpose?",
      options: [
        "(1) Flamingos are tall pink birds.",
        "(2) They often stand on one leg.",
        "(3) Their pink color comes from the tiny shrimp and plants they eat.",
        "(4) Flamingos are the prettiest birds, and you should paint your room pink!",
        "(5) A flamingo eats with its head upside down."
      ],
      answer: [3], pick: 1,
      clue: "A report that informs gives true facts about its topic. Check each sentence against that purpose.",
      hints: [
        "A report that informs gives true facts about its topic. Check each sentence against that purpose.",
        "Read all five sentences. Then reread the first line in the box.",
        "Sentence 1 tells what kind of animal a flamingo is, so it gives a fact and fits the report. Check the other sentences."
      ],
      how: [
        "The report's purpose is to inform, so each sentence should give a true fact about flamingos.",
        "Sentence 4 gives the writer's opinion and tells the reader to paint a room. That is persuading, so it does not fit.",
        "The answer is sentence 4: \"Flamingos are the prettiest birds, and you should paint your room pink!\"",
        "Standing on one leg and eating upside down sound strange, but they are true facts."
      ],
      misconception: "A common mix-up is taking out a strange but true fact. A surprising fact still informs.",
      why: "The answer is sentence 4, \"Flamingos are the prettiest birds, and you should paint your room pink!\" It gives an opinion and tells the reader to act, so it persuades. Standing on one leg and eating upside down are surprising, but they are true facts." },
    { id: "SK-TC1a-S08", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C08"],
      stem: ["Some ants can carry a crumb that weighs many times more than they do.", "That would be like a kid lifting a car over her head!"],
      prompt: "Read the text in the box. Why does the author compare an ant carrying a crumb to a kid lifting a car?",
      choices: [
        { text: "so readers can picture how strong an ant is for its size", correct: true },
        { text: "so readers will know that kids are stronger than ants" },
        { text: "so readers can enjoy a story about a kid and a car" },
        { text: "so readers will know that ants are as big as cars" }
      ],
      clue: "Authors often compare something new to something readers already know. Ask what the comparison helps the reader understand.",
      hints: [
        "Authors often compare something new to something readers already know. Ask what the comparison helps the reader understand.",
        "Read both sentences in the box. What does the first one tell about the ant?",
        "No kid really lifts a car, and there is no story with a problem, so the story choice does not fit. Check the other choices."
      ],
      how: [
        "The first sentence says an ant can carry a crumb much heavier than itself.",
        "Readers know a car is far too heavy for a kid. Picturing that shows how much an ant can lift for its size.",
        "The answer is \"so readers can picture how strong an ant is for its size.\"",
        "The comparison does not say kids are stronger or that ants are big, and it is not a story."
      ],
      misconception: "A common mix-up is reading a comparison as if it were true. It helps readers picture a new idea.",
      why: "The answer is \"so readers can picture how strong an ant is for its size.\" A kid lifting a car is something readers can imagine, and it shows how much an ant carries for its size. It does not say kids are stronger or that ants are big, and it is not a story." },
    { id: "SK-TC1a-S09", type: "match", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C09"],
      stem: ["Article: A shooting star is not really a star. It is a tiny bit of space rock that burns up as it zooms into the air around Earth. As it burns, it makes a bright streak. Many are no bigger than a grain of sand.", "Poem: Shooting star, so quick and bright, / streaking past me in the night, / slow down, star, and let me see / where you're rushing off to be!"],
      prompt: "Read the article and the poem in the box. Match each sentence to the text it tells about: the article, the poem, or both.",
      cols: ["the article", "the poem", "both"],
      rows: [
        { text: "It explains what a shooting star really is.", answer: 0 },
        { text: "It uses rhyming lines that are fun to read aloud.", answer: 1 },
        { text: "It tells about a bright streak in the sky.", answer: 2 },
        { text: "It talks to the shooting star as if it could listen.", answer: 1 },
        { text: "It tells how small many shooting stars are.", answer: 0 }
      ],
      clue: "Check each sentence against the article and against the poem. A sentence can fit one text or both.",
      hints: [
        "Check each sentence against the article and against the poem. A sentence can fit one text or both.",
        "Read the article sentence by sentence. Then read the poem line by line.",
        "The article says a shooting star makes a bright streak, and the poem says it is streaking past and bright, so the streak sentence fits both. Sort the other sentences the same way."
      ],
      how: [
        "Only the article teaches facts: what a shooting star really is, and that many are as small as a grain of sand.",
        "Only the poem rhymes (bright and night, see and be) and talks to the star: \"slow down, star.\"",
        "Both tell about a bright streak in the sky.",
        "So the article's main purpose is to inform, and the poem's main purpose is to entertain."
      ],
      misconception: "A common mix-up is thinking two texts on the same topic have the same purpose. Ask what each text mostly does.",
      why: "The article explains what a shooting star is and how small many are. The poem rhymes and talks to the star. Both tell about a bright streak. The article informs, and the poem entertains." },
    { id: "SK-TC1a-S10", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C11"],
      stem: ["Text 1, a sign by the gym door: Walking Club, line up here! Pick up your card, then walk three laps around the track.", "Text 2, in the school newsletter: Every Tuesday, Mr. Lyle leads the Walking Club before school. Ask your child how many laps they walked this week!"],
      prompt: "Read both texts in the box. Then choose the best answer for each blank.",
      text: "Text 1 is mostly for {0}. Text 2 is mostly for {1}.",
      slots: [
        { options: ["students in the Walking Club", "families who read the newsletter", "Mr. Lyle, who leads the club", "the school principal"], answer: 0 },
        { options: ["families who read the newsletter", "students in the Walking Club", "Mr. Lyle, who leads the club", "the school principal"], answer: 0 }
      ],
      clue: "The same topic can be written for different readers. For each text, ask who it talks to.",
      hints: [
        "The same topic can be written for different readers. For each text, ask who it talks to.",
        "Read Text 1, then Text 2.",
        "Neither text talks to the principal, so that choice fits neither blank. Test the other choices in each blank."
      ],
      how: [
        "Text 1 says \"Walking Club, line up here!\" and tells walkers what to do. It talks to the students in the club.",
        "Text 2 is in the newsletter and says \"Ask your child.\" It talks to families.",
        "So the first blank is \"students in the Walking Club\" and the second blank is \"families who read the newsletter.\"",
        "Mr. Lyle is in Text 2, but only as the person who leads the club. Neither text talks to him."
      ],
      misconception: "A common mix-up is thinking the people a text tells about are its audience. Ask who the text talks to.",
      why: "The answers are \"students in the Walking Club\" and \"families who read the newsletter.\" Text 1 tells walkers where to line up, and Text 2 tells families to ask their child. Mr. Lyle is only the leader, and neither text talks to the principal." },
    { id: "SK-TC1a-S11", type: "cr", dok: 3, std: ["3.T.C.1.a"], passages: [], rows: 4,
      like: ["SK-TC1a-C14"],
      stem: ["Riddle Corner", "Why did the cookie go to the doctor? It was feeling crumby!", "What do you call a sleeping dinosaur? A dino-snore!", "Send us your best riddle, and we may print it next week!"],
      prompt: "Read the riddle page from a kids' magazine. What is its main purpose, and who is it written for? Write two or three sentences. Use one detail for each answer.",
      sample: "The main purpose is to entertain, because the riddles have silly answers like \"dino-snore.\" It is written for kids who read the magazine, because it asks readers to send in their own riddles.",
      criteria: [
        "I named the main purpose: to inform, to persuade or to entertain.",
        "I gave a detail that shows the purpose.",
        "I told who the page is written for.",
        "I gave a detail that shows who it is for."
      ],
      clue: "Ask why the page was written: to teach, to persuade or to give readers something to enjoy. Then ask who would read it.",
      hints: [
        "Ask why the page was written: to teach, to persuade or to give readers something to enjoy. Then ask who would read it.",
        "Find a joke answer, and find the line that talks to the readers.",
        "You can start like this: The main purpose is to ___ because ___. It is written for ___ because ___."
      ],
      how: [
        "Find what most of the page does. Two silly riddles with joke answers are there to make readers laugh.",
        "So the main purpose is to entertain. The last line asks for riddles, but it is one line.",
        "Find the audience. It is a kids' magazine page that asks readers to send riddles, so it is for kids.",
        "Put it together, with one detail for each answer. One good answer follows. Other answers can also be right."
      ],
      why: "Many answers can be right. A good answer says the page entertains, with a detail like a joke answer, and says it is for kids who read the magazine, with a detail like the request for riddles." },
    { id: "SK-TC1a-S12", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C15"],
      stem: ["Mr. Abel wants shoppers to bring their carts back to the cart rack in the parking lot. He made two signs.", "Sign A: Carts left in the parking lot can roll into cars. A loose cart can dent a car door.", "Sign B: Please bring your cart back here! It takes ten seconds, and it keeps everyone's car safe."],
      prompt: "Read the two signs in the box. Which sign will work better for Mr. Abel's purpose, and why?",
      choices: [
        { text: "Sign B, because it asks shoppers to bring carts back and says where", correct: true },
        { text: "Sign A, because it gives more facts about what loose carts can do" },
        { text: "Sign A, because it tells shoppers that carts can dent car doors" },
        { text: "Sign B, because it tells a story about a cart that rolled away" }
      ],
      clue: "First decide the purpose: what does Mr. Abel want shoppers to do? Then ask which sign does that job.",
      hints: [
        "First decide the purpose: what does Mr. Abel want shoppers to do? Then ask which sign does that job.",
        "Read Sign A, then Sign B, one sentence at a time.",
        "Neither sign tells a story about one cart, so that choice does not fit. Check the other choices against Mr. Abel's purpose."
      ],
      how: [
        "Mr. Abel's purpose is to persuade shoppers to bring their carts back.",
        "Sign A gives true facts, but it never asks shoppers to do anything.",
        "Sign B asks them to bring the cart back here and gives a reason. The answer is \"Sign B, because it asks shoppers to bring carts back and says where.\"",
        "Facts about dents can be interesting, but a sign that never asks will not get carts returned."
      ],
      misconception: "A common mix-up is thinking that more facts always persuade. To persuade, a text has to ask the reader to act.",
      why: "The answer is \"Sign B, because it asks shoppers to bring carts back and says where.\" Mr. Abel wants carts returned. Sign A only informs, and neither sign tells a story about one cart." },
    /* Coordinator follow-up (author b3a): S13-S15 are second similar items for C06, C07 and C13, whose first
       similar item (S02, S01, S03) is used up earlier in the same sitting by P5, C04 and C03. */
    { id: "SK-TC1a-S13", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C06"],
      stem: ["The black dot in the middle of your eye is called the pupil.", "It is really a small opening that lets light in.", "In bright sun, your pupils get smaller.", "In a dark room, they get bigger to let in more light.", "Try it: look in a mirror right after you turn on a light!"],
      prompt: "Read the text in the box. What is the author's main purpose?",
      choices: [
        { text: "to teach readers how the pupils in their eyes work", correct: true },
        { text: "to get readers to buy a mirror for their room" },
        { text: "to tell a story about a child who looks in a mirror" },
        { text: "to show readers how to keep their eyes healthy" }
      ],
      clue: "Check what the whole text mostly does. Does it give information, ask the reader to act, or tell a story?",
      hints: [
        "Check what the whole text mostly does. Does it give information, ask the reader to act, or tell a story?",
        "Read the first four sentences, then the last one.",
        "No one in the text has a name or a problem, so it is not a story. Check the other choices."
      ],
      how: [
        "The first four sentences give facts: what the pupil is and how it changes in bright and dark light.",
        "The last line asks you to try something, but it is one line, and it helps you see the facts for yourself.",
        "The answer is \"to teach readers how the pupils in their eyes work.\"",
        "Nothing tries to sell a mirror, no character has a problem, and the text does not give tips for healthy eyes."
      ],
      misconception: "A common mix-up is naming the purpose of the last line instead of the whole text.",
      why: "The answer is \"to teach readers how the pupils in their eyes work.\" Most sentences give facts about the pupil. The mirror line is one line, there is no story, and nothing sells a mirror or gives eye-health tips." },
    { id: "SK-TC1a-S14", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C07"],
      stem: ["Have you ever wiggled a loose tooth with your tongue?", "Baby teeth fall out to make room for grown-up teeth.", "Most kids lose their first tooth when they are about six years old.", "Adults have 32 teeth in all."],
      prompt: "Read the text in the box. Which sentence best shows that it is written mostly for children?",
      choices: [
        { text: "\"Have you ever wiggled a loose tooth with your tongue?\"", correct: true },
        { text: "\"Baby teeth fall out to make room for grown-up teeth.\"" },
        { text: "\"Most kids lose their first tooth when they are about six years old.\"" },
        { text: "\"Adults have 32 teeth in all.\"" }
      ],
      clue: "To find the audience, look at how the author talks to the reader, and ask what kind of reader that is.",
      hints: [
        "To find the audience, look at how the author talks to the reader, and ask what kind of reader that is.",
        "Read each sentence. Ask whether it talks to you or only gives a fact.",
        "\"Adults have 32 teeth\" is a fact about grown-ups, so it does not show who the reader is. Check the other choices."
      ],
      how: [
        "Three sentences give facts about teeth. A fact about kids is still just a fact, and anyone could read it.",
        "The first sentence talks to the reader and asks about wiggling a loose tooth, which is something a child does.",
        "The answer is \"Have you ever wiggled a loose tooth with your tongue?\""
      ],
      misconception: "A common mix-up is choosing a fact about children instead of a sentence that talks to a child.",
      why: "The answer is \"Have you ever wiggled a loose tooth with your tongue?\" It speaks to a reader who has a loose tooth, which is a child. The other sentences are facts, even the one about kids." },
    { id: "SK-TC1a-S15", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.a"], passages: [],
      like: ["SK-TC1a-C13"],
      stem: ["A sign in the art museum says:", "Please do not touch the paintings, because the oils on your skin can harm them."],
      prompt: "The museum wants to make the same sign for kindergarten classes on a field trip. Which sentence is the best way to rewrite it for them?",
      choices: [
        { text: "Look with your eyes, and keep your hands behind your back!", correct: true },
        { text: "Paintings in this room are more than one hundred years old." },
        { text: "Everyone should visit museums, because art is the best!" },
        { text: "Please refrain from touching the paintings, since skin oils damage them." }
      ],
      clue: "Purpose and audience shape a writer's words. Ask who the new reader is and what the sign should still help them do.",
      hints: [
        "Purpose and audience shape a writer's words. Ask who the new reader is and what the sign should still help them do.",
        "Reread the sign. What job does it give the reader?",
        "\"Art is the best\" tries to change the reader's mind, but the sign's job is to tell visitors what to do. Check the other choices."
      ],
      how: [
        "The sign tells visitors not to touch the paintings.",
        "Kindergartners need the same job in simple words, with a way to remember it.",
        "The answer is \"Look with your eyes, and keep your hands behind your back!\"",
        "The fact about old paintings is not a step, \"refrain\" and \"damage\" are hard words, and the art line persuades."
      ],
      misconception: "A common mix-up is keeping the same hard words for a new reader. The job stays the same, but the words change.",
      why: "The answer is \"Look with your eyes, and keep your hands behind your back!\" It gives kindergartners the same job in words they know. The age of the paintings is a fact, the formal sentence keeps hard words, and the art line persuades." }
  ],
  /* Hints and Show me how for items kept in practice: refs P4 and P5 (core set 1) and Together P1-P3. */
  addons: {
    "SK-TC1a-P1": {
      hints: [
        "Ask what Rosa wants the reader to do. Writers who persuade ask for something.",
        "Read paragraph 2 and paragraph 5 of the letter.",
        "The letter mentions bean plants only as one idea; it does not teach how they grow. Check the other choices."
      ],
      how: [
        "In paragraph 2, Rosa writes that she is asking the principal to let the school start a garden.",
        "At the end of the letter, she asks the principal again to say yes.",
        "The answer is \"to get the principal to agree to a school garden.\" Bean plants and vegetables are parts of her letter, not its main purpose, and it is not a funny story."
      ] },
    "SK-TC1a-P2": {
      hints: [
        "A letter names the person it is written to. Look for who the writer is talking to.",
        "Check how the letter begins, and who Rosa asks to say yes.",
        "Rosa is a student in Ms. Hart's class, but she is not writing to her class. Check the other choices."
      ],
      how: [
        "The letter begins \"Dear Principal Okafor,\" so it is written to the principal.",
        "Rosa also asks the principal to say yes and to visit her class.",
        "The answer is \"the school principal.\" The students, families and kids are only talked about in the letter."
      ] },
    "SK-TC1a-P3": {
      hints: [
        "A writer who persuades asks for what she wants. Look for sentences where Rosa asks the principal for something.",
        "Look near the start of the letter and near the end. Choose two.",
        "\"My name is Rosa Delgado\" tells about Rosa herself, so it does not ask for anything. Check the other sentences."
      ],
      how: [
        "Near the start, Rosa asks: \"I am writing to ask you to let our school start a garden.\"",
        "Near the end, she asks again: \"Please say yes to a school garden.\"",
        "The answers are those two sentences. The others tell about Rosa or explain her ideas."
      ] },
    "SK-TC1a-P4": {
      hints: [
        "Think about what a persuasive writer does to change a reader's mind. Then check which choice Rosa really does in her letter.",
        "Reread paragraphs 2 to 5.",
        "Rosa never tells a story about a garden she visited, so that Part A choice has no support. For Part B, choose the sentence that matches your Part A answer."
      ],
      how: [
        "Rosa wants the principal to agree, so she explains how a garden would help students.",
        "Paragraph 3 begins \"A garden would help us learn.\" The sentences after it tell how.",
        "Part A: She gives reasons a garden would help students. Part B: \"A garden would help us learn.\"",
        "Rosa does not tell a story or list how vegetables grow, and she never warns that kids will get sick. The other Part B sentences tell about Rosa, give a detail or invite the principal."
      ],
      misconception: "A common mix-up is choosing a detail that explains a reason instead of the sentence that states the reason." },
    "SK-TC1a-P5": {
      hints: [
        "Ask of each text: does it teach a fact, ask me to do something, or give me something fun to enjoy?",
        "Read each short text one at a time, and say in your own words what it does.",
        "The bat sentence tells something true about how bats find food, so it teaches a fact. Sort the other texts the same way."
      ],
      how: [
        "The bat sentence teaches a fact, so it informs.",
        "\"Vote for Jamal\" and \"You should wear a helmet\" ask the reader to do something, so they persuade.",
        "The silly goose in rain boots is a made-up funny story, so it entertains."
      ],
      misconception: "A common mix-up is calling every text that says you persuasive. Ask whether the text asks you to do something." }
  },
  test: [
    { id: "SK-TC1a-T1", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "What is the main purpose of this page?",
      choices: [
        { text: "to help new players get ready for practice", correct: true },
        { text: "to get kids to sign up for a soccer team" },
        { text: "to tell a story about an exciting game" },
        { text: "to explain the rules of how soccer is played" }
      ],
      clue: "Look at the headings. What kind of information does each part give?",
      why: "The answer is to help new players get ready for practice. The page gives facts about when, where, what to bring and what happens if it rains. The players have already joined, so the page is not trying to get them to sign up." },
    { id: "SK-TC1a-T2", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Who is the audience for this page?",
        choices: [
          { text: "players who are new to the team", correct: true },
          { text: "coaches who teach soccer" },
          { text: "players on other teams in town" },
          { text: "people who take care of the park" }
        ] },
      partB: { prompt: "Which sentence from the page best supports the answer to Part A?",
        choices: [
          { text: "\"This page tells you what you need to know before your first practice.\"", correct: true },
          { text: "\"Practice is every Tuesday and Thursday from 5:00 to 6:00.\"" },
          { text: "\"If there is thunder or lightning, practice is canceled.\"" },
          { text: "\"Bring a full water bottle with your name on it.\"" }
        ] },
      clue: "The page speaks to \"you.\" Find the sentence that tells who \"you\" is.",
      why: "Part A: players who are new to the team. Part B: \"This page tells you what you need to know before your first practice.\" Only a new player is getting ready for a first practice." },
    { id: "SK-TC1a-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Read each short text. Match it to its most likely audience.",
      cols: ["Kindergarten students", "Parents", "Players on a baseball team"],
      rows: [
        { text: "Hop like a bunny to the rug for story time!", answer: 0 },
        { text: "Please sign the field trip form and send it back by Monday.", answer: 1 },
        { text: "Remember to run hard to first base after every hit.", answer: 2 }
      ],
      clue: "Ask who would be asked to do each thing. Who goes to story time? Who signs forms? Who runs the bases?",
      why: "Hopping to story time fits kindergarten students. Signing a field trip form is a job for parents. Running to first base after a hit is advice for baseball players." },
    { id: "SK-TC1a-T4", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "Coach Abebe wants to add one more sentence at the end of the page. Which sentence best fits the page's purpose and audience?",
      choices: [
        { text: "Call Coach Abebe if you have questions before practice.", correct: true },
        { text: "Soccer is played by people in many countries." },
        { text: "Once upon a time, a tiger learned to kick a ball." },
        { text: "Everyone in town should vote for a new playground." }
      ],
      clue: "The page helps new players get ready. Pick the sentence that gives them useful information.",
      why: "The answer is \"Call Coach Abebe if you have questions before practice.\" It helps new players get ready, like the rest of the page. The other sentences tell a fact, a story or an opinion that does not help new players." },
    { id: "SK-TC1a-T5", type: "mc", points: 1, dok: 2, passages: [],
      stem: "Come to the Book Fair in the library this Friday! Every book is just one dollar. You will find comics, animal books and mysteries. Don't miss it!",
      prompt: "What is the author's purpose, and who is the audience?",
      choices: [
        { text: "to persuade students to come to the book fair", correct: true },
        { text: "to inform teachers about how to sell books" },
        { text: "to entertain students with a story about a fair" },
        { text: "to persuade parents to give books to the library" }
      ],
      clue: "Find what the author wants the reader to do, and think about who would want comics and animal books.",
      why: "The answer is to persuade students to come to the book fair. \"Come to\" and \"Don't miss it!\" ask the reader to act, and comics and animal books are things students would want." }
  ]
});

PP.addLesson({
  code: "3.T.C.1.b",
  title: "Text features: headings, bold words, text boxes and diagrams",
  teach: {
    big: "Text features are the helpers around the paragraphs. They show you where to look and what is important.",
    points: [
      "A heading is a small title over a section. It tells what that section is about. A heading with a fun or surprising word can also make you curious to read on.",
      "A bold word is printed in dark letters. Bold tells you, \"This is a key word. Learn it.\" A bold word often names the big idea of its section, and the sentences around it tell what it means. You can also check its meaning in a glossary at the back.",
      "A text box is set apart from the paragraphs. It often gives an extra fact, like a \"Did You Know?\" box.",
      "A picture or photo shows what the words describe. The caption under it tells what the picture shows. A caption can also tell something the picture cannot show, like where or when.",
      "A diagram is a drawing with labels. Each label has a line that points to one part and names it. A figure number, like Figure 1, helps you match a picture to the words about it. Labels can point out parts that a photo might hide, and numbers or arrows on a diagram can show an order.",
      "Features are not only on paper. A web page has its own features. Menu tabs take you to other parts of the site. A search box finds pages when you type a word. A play button starts a video or a sound. A pop-up box tells what a word means without leaving the page. A link opens a new page with more facts.",
      "Sound has features too. A caption line under a video shows in words what you would hear. Words in [brackets] name a sound, like [frog croaks]. A name and a colon, like NARRATOR:, shows who is talking. In a talk or a read-aloud, the speaker's voice does the job of bold print: a speaker may slow down, stop for a moment, or say \"Listen closely\" right before an important part. To start a new part, a speaker can say what the next part is about, the way a heading does. Words like first, next and last help listeners follow along. In a video or a podcast, sounds and music can signal a change, or make listeners feel excited or calm."
    ],
    words: [
      { term: "heading", means: "a small title that tells what a section is about" },
      { term: "glossary", means: "a list of important words and their meanings at the back of a book" },
      { term: "caption", means: "words under a picture that tell what it shows" },
      { term: "diagram", means: "a drawing with labels that shows the parts of something" }
    ],
    examples: [{
      label: "Text features in an article about frogs",
      lines: [
        "Heading: What Frogs Eat",
        "Bold word: Frogs catch insects with a sticky **tongue**.",
        "Text box: Did You Know? Frogs can jump far for their size.",
        "A picture with a caption:"
      ],
      figure: { src: "assets/figures/tc1b-frog.svg", label: "Figure 1", caption: "A green frog waits on a lily pad in a Georgia pond at night.",
        alt: "A drawing of a frog sitting on a round lily pad in a pond." },
      note: "The heading tells what the section is about. The word tongue is in bold because it is a key word: it names what a frog uses to catch its food. The text box adds a fun extra fact. The picture shows the frog and the lily pad. The caption adds two things the picture cannot show: where (a Georgia pond) and when (at night)."
    }, {
      label: "Text features on a web page about frogs",
      lines: [
        "The same article is on a website. Each number points to a feature."
      ],
      figure: { src: "assets/figures/tc1b-frog-webpage.svg", label: "Figure 2", caption: "A web page about frogs",
        alt: "A web page about frogs with numbered parts. 1: three tabs at the top that say Home, Frogs and Toads. The Frogs tab has a thick border. 2: a box with a magnifying glass and the word Search. Then the heading What Frogs Eat. 3: a video box showing a frog, with a round play button. 4: a dark bar under the video with two lines: [frog croaks] and NARRATOR: Listen! Then the words Frogs catch insects with a sticky tongue, with a dotted line under tongue. 5: a box pointing to tongue that says tongue: the soft part inside the mouth that can move. 6: underlined words at the bottom that say See what toads eat." },
      note: "1. The menu tabs take you to other parts of the site, like the page about toads. 2. The search box finds pages when you type a word. 3. The play button starts the video, so you can see and hear the frog. 4. The caption line shows the sound in [brackets] and the words the narrator says, so you can follow the video even with the sound off. 5. The pop-up box tells what tongue means without leaving the page. 6. The link opens a new page with more facts."
    }],
    tip: "On the test, you may be asked which heading to read to find a fact, which caption fits a picture, or how a text box, bold word, caption, diagram or web page feature helps the reader. Think about the job each feature does."
  },
  learn: [
    {
      show: ["Heading: How Owls Hunt at Night", "Owls have big eyes that help them see when there is little light. Their soft feathers let them fly without making a sound."],
      ask: "What does the heading tell you before you read the section?",
      steps: [
        "Read the heading first. It names the topic: how owls hunt at night.",
        "Guess what you will learn. You will learn what helps owls catch food in the dark.",
        "Check the section. Big eyes and quiet flying both help owls hunt at night."
      ],
      answer: "The heading tells you the section explains how owls hunt at night."
    },
    {
      show: ["From a book about deserts:", "A cactus can live where it does not rain for months. It stores water in its thick **stem**. After a rain, the stem swells up like a sponge. On dry days, the cactus uses the water it saved.", "From the glossary: stem: the main part of a plant that holds up the leaves or flowers"],
      ask: "Why is stem in bold, and what does it help you understand about the cactus?",
      steps: [
        "Bold print says: stop, this is a key word. The author wants you to learn it.",
        "Read the sentences around the bold word. They tell what this stem does: it stores water and swells up after a rain.",
        "Check the glossary at the back. It tells what a stem is on any plant.",
        "Put it together. The bold word points to the big idea: a cactus can live through dry months because its stem stores water."
      ],
      answer: "Stem is in bold because it is the key word of the section. It helps you understand the big idea: a cactus lives through dry months because its thick stem stores water."
    },
    {
      show: ["From a book about plants: The **roots** grow under the ground and take in water for the plant."],
      figure: { src: "assets/figures/tc1b-plant-parts.svg", label: "Figure 1", caption: "The parts of a plant",
        alt: "Diagram of a plant. A flower is at the top, two leaves grow from the stem, and roots spread out under the ground. Four labels with lines name the flower, leaf, stem and roots." },
      ask: "How do the caption and the labels in Figure 1 help the reader?",
      steps: [
        "Read the caption first. It tells what the whole diagram shows: the parts of a plant.",
        "Follow each label's line. The labels name the flower, a leaf, the stem and the roots.",
        "Put the diagram with the words. The sentence says roots are under the ground. The roots label points below the ground line, so you can see what roots look like and where they are."
      ],
      answer: "The caption tells what the whole diagram shows. The labels name each part, so the reader can see the roots the sentence tells about."
    }
  ],
  parent: "Pick up a nonfiction book or a kids' magazine. Before reading, flip through it together and ask: What do the headings tell us? Which words are in bold? What does this picture or box add?",
  passages: [
    { id: "p1", title: "Life in a Beaver Pond", genre: "Informational text",
      paragraphs: [
        ["Beavers are some of the best builders in nature.", "They cut wood, carry it through the water and build their own homes."],
        ["## Busy Builders"],
        ["Beavers cut down small trees with their strong front teeth.", "They eat the soft bark and leaves.", "Then they drag the branches into the water to use for building."],
        ["## A Home with a Secret Door"],
        ["In the pond, beavers build a home called a **lodge**.", "A lodge is a dome made of sticks and mud.", "Its doors are under the water.", "The room inside stays dry above the water."],
        ["## Did You Know?"],
        ["Box: A beaver's front teeth never stop growing.", "Chewing on wood keeps them from getting too long."],
        ["## Tail Talk"],
        ["A beaver has a wide, flat tail.", "When a beaver senses danger, it slaps its tail on the water.", "The loud smack warns other beavers to dive and hide."]
      ],
      figures: [
        { after: 5, src: "assets/figures/tc1b-beaver-lodge.svg", label: "Figure 1", caption: "Inside a beaver lodge",
          alt: "Diagram of a beaver lodge cut in half so you can see inside. The lodge is a dome of sticks and mud in a pond. Inside the lodge, above the top of the water, is a room labeled dry room. A tunnel goes down from the room to an opening below the top of the water, labeled door under water." }
      ] },
    { id: "p2", title: "The Monarch's Long Trip", genre: "Informational text",
      paragraphs: [
        ["Monarch butterflies are easy to spot.", "Their wings are bright orange with black lines and white dots."],
        ["## From Egg to Wing"],
        ["A monarch starts life as a tiny egg on a milkweed leaf.", "A caterpillar hatches and eats the milkweed leaves.", "Milkweed is the only plant a monarch caterpillar eats.", "Then the caterpillar sheds its skin and becomes a chrysalis with a hard shell.", "Inside, its body changes.", "At last, an adult butterfly comes out."],
        ["## Bright Colors Send a Message"],
        ["Many birds will not eat monarchs.", "The milkweed the caterpillars eat makes monarchs taste bad.", "Their bright orange color warns birds to stay away."],
        ["## A Long Trip South"],
        ["Each fall, many monarchs **migrate**.", "They fly south to a warmer place for the winter.", "Some fly all the way to Mexico.", "On the way, they stop to rest and to drink nectar from flowers.", "Some of them pass through Georgia."],
        ["## Did You Know?"],
        ["Box: A monarch can taste with its feet.", "When it lands on a leaf, its feet can tell if the plant is milkweed."]
      ],
      figures: [
        { after: 3, src: "assets/figures/tc1b-monarch-cycle.svg", label: "Figure 1", caption: "The life cycle of a monarch",
          alt: "Diagram of the life cycle of a monarch. Four drawings sit in a circle, with an arrow from each one to the next: 1 egg on a leaf, 2 caterpillar, 3 chrysalis hanging from a twig, 4 butterfly. An arrow goes from the butterfly back to the egg." },
        { after: 7, src: "assets/figures/tc1b-monarch-flower.svg", label: "Figure 2", caption: "A monarch rests in a Georgia garden on its long trip south.",
          alt: "A drawing of a monarch butterfly with its wings open, sitting on top of a flower." }
      ] },
    /* B2 (expansion 2026-10-22, author b2d): p3 is used only by core set 2 and p4 only by core set 3.
       Never used by test. NEEDS INDEPENDENT RE-REVIEW (B2 fixes). p3's Figure 1 has no caption on purpose (core C07 asks for one). */
    { id: "p3", title: "How a Water Tower Works", genre: "Informational text",
      paragraphs: [
        ["Many towns in Georgia have a tall water tower.", "It may look like a giant ball on stilts, but it has an important job."],
        ["## Water Up High"],
        ["At night, when most people are asleep, a pump pushes water up a pipe into the tower's tank.", "The tank holds the water high above the town until people need it."],
        ["## Down to Your Faucet"],
        ["In the morning, people turn on faucets and showers.", "Then gravity pulls the water down from the tank.", "Gravity is the force that pulls things toward the ground.", "The water rushes down a pipe under the street and into each home."],
        ["## Did You Know?"],
        ["Box: Some water towers hold more than one million gallons of water."]
      ],
      figures: [
        { after: 5, src: "assets/figures/tc1b-c-water-tower.svg", label: "Figure 1",
          alt: "Diagram of a water tower and a home, with three numbered arrows. On the ground at the left is a small building labeled pump. A pipe goes from the pump up into a big tank at the top of the tower, labeled tank, and arrow 1 on that pipe points up. A second pipe goes from the tank down the tower and under the ground, and arrow 2 on it points down. Arrow 3 points along the pipe under the ground toward a house labeled home. Another label, pipe, points to the first pipe." }
      ] },
    { id: "p4", title: "Reading a Swimming Pool", genre: "Informational text",
      paragraphs: [
        ["Before a race, swimmers stand on raised platforms called starting blocks.", "Once they dive in, the pool itself is full of helpers.", "Each one tells swimmers something without saying a word."],
        ["## Lines and Ropes"],
        ["Ropes with floats, called lane lines, divide the pool into lanes.", "They keep each swimmer in a lane and make the waves smaller.", "A dark line on the bottom of each lane helps swimmers swim straight.", "Near each wall, the dark line ends in a T, which warns swimmers that the wall is close."],
        ["## Flags Overhead"],
        ["Swimmers doing the backstroke float on their backs, so they cannot see the wall coming.", "A row of small flags hangs over the pool, about five yards from each wall.", "When backstrokers pass under the flags, they count their strokes so they do not bump their heads."]
      ],
      figures: [
        { after: 5, src: "assets/figures/tc1b-c-pool-lanes.svg", label: "Figure 1", caption: "Helpers in a pool for swim races",
          alt: "Diagram of a swimming pool seen from above, split into three lanes. Two ropes with floats, labeled lane line, run the length of the pool between the lanes. A dark line labeled line on the bottom runs down the middle of each lane and ends in a T shape near each wall. Near each end of the pool, a row of small triangle flags, labeled backstroke flags, hangs across all the lanes." }
      ] }
  ],
  practice: [
    { id: "SK-TC1b-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "Under which heading should you look to learn how beavers warn each other?",
      choices: [
        { text: "Tail Talk", correct: true },
        { text: "Busy Builders" },
        { text: "A Home with a Secret Door" },
        { text: "Did You Know?" }
      ],
      clue: "Think about how one animal could tell others about danger. Read each heading and ask which section would explain that.",
      why: "The answer is Tail Talk. That section tells how a beaver slaps its tail on the water to warn other beavers. \"Talk\" in the heading is a clue that the section is about how beavers share a message." },
    { id: "SK-TC1b-P8", type: "mc", points: 1, dok: 2, passages: ["p1"],
      stem: ["The author wants to add this picture to the section \"Busy Builders.\""],
      figure: { src: "assets/figures/tc1b-beaver-tree.svg",
        alt: "A drawing of a beaver sitting up next to a small tree. The beaver's front teeth are on a deep notch it has chewed into the tree trunk. Labels point to the beaver, the tree and the wood chips on the ground." },
      prompt: "Which caption best fits the picture?",
      choices: [
        { text: "A beaver chews through a small tree with its strong front teeth.", correct: true },
        { text: "A beaver slaps its wide, flat tail on the water to warn others." },
        { text: "A beaver swims into its lodge through a door under the water." },
        { text: "A beaver floats on its back in the pond." }
      ],
      clue: "A caption tells what the picture shows. Look at the picture first: what is the beaver doing, and where is it? Cross out captions about things you cannot see.",
      why: "The answer is \"A beaver chews through a small tree with its strong front teeth.\" The picture shows the beaver's teeth on a deep notch in a tree, with wood chips on the ground. There is no water in the picture, so the captions about the tail, the lodge and floating in the pond do not fit it." },
    { id: "SK-TC1b-P9", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["A park ranger gives a talk about beavers at a Georgia state park. Here is part of what she says:", "\"Beavers have very strong front teeth. Now, listen closely. This next part is important. A beaver's front teeth have iron in them, and that makes them extra strong!\""],
      prompt: "Why does the ranger say, \"Listen closely. This next part is important\"?",
      choices: [
        { text: "to tell listeners that the next fact matters a lot", correct: true },
        { text: "to tell listeners that her talk is almost over" },
        { text: "to ask listeners a question about beavers" },
        { text: "to tell listeners where the beavers live" }
      ],
      clue: "People who listen to a talk cannot see bold print. What can a speaker say to do the same job?",
      why: "The answer is \"to tell listeners that the next fact matters a lot.\" Listeners cannot see bold print or headings, so a speaker uses spoken signals, like \"Listen closely,\" to point out an important part. She keeps talking after it, so her talk is not over. She does not ask a question, and those words do not name a place." },
    { id: "SK-TC1b-P10", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      stem: ["This article is also on a website. The picture shows part of the web page for the section \"Busy Builders.\""],
      figure: { src: "assets/figures/tc1b-beaver-webpage.svg",
        alt: "A web page. At the top are three tabs: Home, Beavers and Otters. The Beavers tab has a thick border. Under them is the heading Busy Builders. Next is a video box with a round play button. It shows a pile of branches in the water. Under the video is a dark bar with two caption lines: [water rushing], then NARRATOR: Beavers carry branches in their mouths. Below that is the sentence Beavers cut and carry wood. At the bottom are underlined words: Next page: Beaver lodges." },
      prompt: "Choose the words that best complete the sentences.",
      text: "In the caption line, the words [water rushing] tell the reader {0}. The underlined words at the bottom will {1}.",
      slots: [
        { options: ["what sound plays in the video", "what words the narrator says", "what the beaver is building"], answer: 0 },
        { options: ["open a page about beaver lodges", "play the video about branches", "tell what the word branch means"], answer: 0 }
      ],
      clue: "Look at how each line in the caption starts. Then read the underlined words and think about what tapping them would do.",
      why: "The answers are \"what sound plays in the video\" and \"open a page about beaver lodges.\" Words in [brackets] name a sound, so a reader with the sound off still knows the water is rushing. The narrator's words come after NARRATOR:, and [water rushing] does not name anything the beaver builds. The underlined words are a link. Its words say Next page: Beaver lodges, so it opens a new page. The play button starts the video, and no word on the page has a pop-up meaning." },
    { id: "SK-TC1b-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      stem: ["In the section \"A Home with a Secret Door,\" the word **lodge** is printed in dark, bold letters.", "The glossary at the back of the book says: lodge: a beaver's home made of sticks and mud"],
      prompt: "How does the bold print help the reader?",
      choices: [
        { text: "It shows the word is important and is explained in the glossary.", correct: true },
        { text: "It shows the word is a fact set apart in a text box." },
        { text: "It shows the word is the heading of a new section." },
        { text: "It shows the word names the topic of the whole article." }
      ],
      clue: "Think about why an author makes a word stand out, and where else the word shows up.",
      why: "The answer is \"It shows the word is important and is explained in the glossary.\" Bold print tells the reader the word matters, and the glossary tells what it means. Lodge sits inside a sentence, not in a box or on a heading line, and the whole article is about life in a beaver pond, not only the lodge." },
    { id: "SK-TC1b-P5", type: "hottext", points: 2, dok: 2, passages: ["p1"],
      prompt: "Look at Figure 1. Which two sentences in the article tell about the parts that its labels point to? Choose two sentences.",
      targets: ["p1:3:1", "p1:3:3", "p1:5:3", "p1:5:4", "p1:9:2"],
      answer: ["p1:5:3", "p1:5:4"], pick: 2,
      clue: "Read the two labels in Figure 1 and follow their lines. Then find the sentences that tell about those same two parts of the lodge.",
      why: "The answers are \"Its doors are under the water.\" and \"The room inside stays dry above the water.\" The labels in Figure 1 point to a door under the water and a dry room. The diagram helps readers see where those two parts are inside the lodge." },
    { id: "SK-TC1b-P6", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each feature to the job it does. Three are in a printed book, and one is in a talk you listen to.",
      cols: ["Heading", "Text box", "Bold word", "Speaker's voice"],
      rows: [
        { text: "tells what a section will be about", answer: 0 },
        { text: "gives an extra fact set apart from the paragraphs", answer: 1 },
        { text: "makes one printed word stand out from the words around it", answer: 2 },
        { text: "slows down and stops for a moment right before an important fact", answer: 3 }
      ],
      clue: "Think about where each feature sits on the page and what it helps you do. Then think about what a listener, who cannot see the page, hears instead.",
      why: "A heading tells what a section is about. A text box gives an extra fact set apart. A bold word stands out from the printed words around it. In a talk, the speaker's voice does that job: slowing down and stopping for a moment tells listeners an important fact is coming." }
  ],
  /* ---------- B2 (expansion 2026-10-22, author b2d; 01-architecture.md §2.2-2.3) ----------
     core: fifteen independent items in three sets of five. { ref } reuses the practice items P5 and P4
     (they stay in practice). P4 was flagged weak: its distractors were revised in place, and it is used in core
     set 1 in place of P6, whose prompt gives away its own speaking row. Practice Together is P1, P8, P9, P10 and P6. New ids are numbered by their place in the fifteen.
     BROAD CODE: this lesson still covers all five modes (print, visual, digital, auditory, spoken). The author
     log names which items would move to the planned digital/auditory/spoken lesson.
     Author log: docs/expansion-2026-10-22/batches/B2-b2d-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TC1b-P5" },
      { ref: "SK-TC1b-P4" },
      { id: "SK-TC1b-C03", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p1"],
        prompt: "Here are four facts about beavers. Which one would fit best in the \"Did You Know?\" box instead of in a section?",
        choices: [
          { text: "A beaver can stay underwater for up to fifteen minutes.", correct: true },
          { text: "A beaver drags branches into the water to build with." },
          { text: "A beaver lodge has a dry room above the water." },
          { text: "A beaver slaps its tail on the water to warn others." }
        ],
        clue: "A text box is set apart from the sections. Think about what kind of fact an author puts there.",
        hints: [
          "A text box is set apart from the sections. Think about what kind of fact an author puts there.",
          "Read the box that is already in the article. What kind of fact is in it?",
          "The tail slap is the whole idea of \"Tail Talk,\" so taking it out of that section would hurt it. Check the other facts the same way."
        ],
        how: [
          "\"Busy Builders\" needs the branches, the lodge section needs the dry room, and \"Tail Talk\" needs the tail slap. Each of those facts is part of its section's big idea.",
          "Staying underwater for up to fifteen minutes is fun to know, but no section needs it to make sense.",
          "The answer is \"A beaver can stay underwater for up to fifteen minutes.\""
        ],
        misconception: "A common mix-up is putting an important fact in the box. The box is for extra facts; the big ideas stay in the sections.",
        why: "The answer is \"A beaver can stay underwater for up to fifteen minutes.\" It is a fun extra fact that no section needs. The branches, the dry room and the tail slap are each part of a section's big idea, so they belong in their sections." },
      { id: "SK-TC1b-C04", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: ["p1"], pick: 2,
        prompt: "How does the heading \"A Home with a Secret Door\" help the reader? Choose TWO answers.",
        choices: [
          { text: "It tells that the section is about the beavers' home.", correct: true },
          { text: "It makes the reader want to find out the secret.", correct: true },
          { text: "It tells what the bold word lodge means." },
          { text: "It names the animals that share the pond with beavers." },
          { text: "It tells the order of the steps in the section." }
        ],
        clue: "A heading is a small title over a section. Think about the jobs a heading can do for a reader.",
        hints: [
          "A heading is a small title over a section. Think about the jobs a heading can do for a reader.",
          "Read the heading, then read the sentences under it. Choose two.",
          "The heading's words name a home and a door, and no other animal, so it does not name the animals in the pond. Test the other choices against the heading's own words."
        ],
        how: [
          "The sentences under the heading tell about the lodge, which is where beavers live.",
          "The word Secret makes you wonder, so you want to read on and find out.",
          "The answers are \"It tells that the section is about the beavers' home.\" and \"It makes the reader want to find out the secret.\"",
          "The heading does not explain lodge, names no other animals, and tells no order of steps."
        ],
        misconception: "A common mix-up is mixing up the jobs of features: a heading names the topic, but a box or a glossary gives the facts.",
        why: "The answers are \"It tells that the section is about the beavers' home.\" and \"It makes the reader want to find out the secret.\" The section is about the lodge, the beavers' home, and the word Secret makes readers want to read on. The heading does not define lodge, names no other animals, and tells no order." },
      { id: "SK-TC1b-C05", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: ["p1"],
        stem: ["Andre is reading \"Life in a Beaver Pond\" aloud to his class. He has just finished the part about the lodge. Next comes the section \"Tail Talk.\""],
        prompt: "His classmates cannot see the headings. What could Andre do to help them know that a new part is starting?",
        choices: [
          { text: "Say, \"Now let's find out how beavers use their tails.\"", correct: true },
          { text: "Say, \"A lodge is a beaver's home,\" one more time." },
          { text: "Point to the bold word lodge in his own copy of the book." },
          { text: "Skip the heading and go right on to the next sentence." }
        ],
        clue: "Think about the difference between reading a page and listening to someone read it.",
        hints: [
          "Think about the difference between reading a page and listening to someone read it.",
          "Read each choice and picture what the classmates would hear.",
          "Pointing to a word in his own book does not help, because his classmates cannot see his page. Test the other choices."
        ],
        how: [
          "On the page, the heading \"Tail Talk\" tells readers that a new part about tails is starting.",
          "Listeners cannot see it, so Andre can say out loud what the next part is about.",
          "The answer is to say, \"Now let's find out how beavers use their tails.\"",
          "Saying the lodge line again repeats the old part, skipping the heading hides the change, and pointing at his own book does not reach his classmates."
        ],
        misconception: "A common mix-up is using a print feature, like bold, in a talk. Listeners can only hear the speaker.",
        why: "The answer is to say, \"Now let's find out how beavers use their tails.\" A heading tells readers a new part is starting. Listeners cannot see it, so Andre says what the next part is about. Repeating the lodge line goes back to the old part, skipping the heading hides the change, and his own book is not something the listeners can see." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TC1b-C06", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p3"],
        stem: ["The author wants to print one word in the section \"Down to Your Faucet\" in bold, so readers know it is the key word of that section."],
        prompt: "Which word should the author print in bold?",
        choices: [
          { text: "gravity", correct: true },
          { text: "faucets" },
          { text: "showers" },
          { text: "pipe" }
        ],
        clue: "A bold word is a key word. It often names the big idea of its section.",
        hints: [
          "A bold word is a key word. It often names the big idea of its section.",
          "Read all four sentences under \"Down to Your Faucet.\" Every choice comes from that section.",
          "Pipe comes up only once, in the last sentence, as the path the water takes. Check the other words."
        ],
        how: [
          "The section tells how water gets from the tank down to a home.",
          "One sentence explains a word: it tells that gravity is the force that pulls things toward the ground. Gravity is what makes the water move down, so it is the big idea of the section.",
          "The answer is gravity.",
          "Faucets, showers and pipes are words readers already know, and the section does not explain them."
        ],
        misconception: "A common mix-up is choosing a word from the heading. The bold word is the key word that the section explains.",
        why: "The answer is gravity. The section explains it (\"the force that pulls things toward the ground\"), and it is the big idea: gravity pulls the water down to each home. Faucets, showers and pipes are everyday words the section does not explain." },
      { id: "SK-TC1b-C07", type: "dropdown", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p3"],
        stem: ["Figure 1 has no caption yet. The author wants a caption that tells what the whole diagram shows."],
        prompt: "Choose the words that best complete the sentence.",
        text: "Figure 1 should have the caption {0}.",
        slots: [{ options: ["How a water tower gets water to a home", "A pump at the bottom of a water tower", "Some towers hold a million gallons"], answer: 0 }],
        clue: "A caption tells what a picture shows.",
        hints: [
          "A caption tells what a picture shows.",
          "Look at every labeled part of Figure 1, not just one of them.",
          "Figure 1 does show a pump, but the pump is only one part of the diagram. Check whether each other caption fits the whole diagram."
        ],
        how: [
          "Figure 1 shows a pump, a tank, pipes, a home and three numbered arrows between them.",
          "A caption for the whole diagram has to cover all of those parts and the arrows.",
          "The answer is \"How a water tower gets water to a home.\"",
          "The pump is only one part, and the diagram shows no gallons; that fact is in the box."
        ],
        misconception: "A common mix-up is choosing a caption for one part of a diagram, or a true fact that the diagram does not show.",
        why: "The answer is \"How a water tower gets water to a home.\" The diagram shows the pump, the tank, the pipes, the home and arrows between them, so the caption must tell about the whole trip. The pump is only one part, and the gallons fact is in the box, not in the diagram." },
      { id: "SK-TC1b-C08", type: "order", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: ["p3"],
        prompt: "Use Figure 1 and the article. Put the steps of the water's trip in order.",
        steps: [
          "A pump pushes water up a pipe into the tank.",
          "The water waits in the tank high above the town.",
          "The water rushes down a pipe under the street.",
          "The water flows into a home."
        ],
        clue: "Numbers and arrows on a diagram can show an order. Follow them from the smallest number to the largest.",
        hints: [
          "Numbers and arrows on a diagram can show an order. Follow them from the smallest number to the largest.",
          "Find all three numbered arrows in Figure 1. Match each arrow to one of the steps. One step has no arrow of its own.",
          "The water cannot flow into a home first: arrow 3, the last arrow, points toward the home, so that step goes last. Put the other three steps in order."
        ],
        how: [
          "Arrow 1 goes from the pump up into the tank: a pump pushes water up a pipe into the tank.",
          "The tank sits high above the town, and the article says it holds the water until people need it.",
          "Arrow 2 goes down from the tank: the water rushes down a pipe under the street.",
          "Arrow 3 goes toward the home: the water flows into a home."
        ],
        why: "The order is: a pump pushes water up a pipe into the tank, the water waits in the tank high above the town, the water rushes down a pipe under the street, and the water flows into a home. Arrows 1, 2 and 3 in Figure 1 show the trip in that order." },
      { id: "SK-TC1b-C09", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
        stem: ["The article \"How a Water Tower Works\" is also on a website. The picture shows part of the web page."],
        figure: { src: "assets/figures/tc1b-c-water-webpage.svg",
          alt: "A web page. At the top are three tabs: Home, Water and Weather. The Water tab has a thick border. Under the tabs is a box with a magnifying glass and the word Search. Next is the heading Down to Your Faucet. Then there is a video box that shows a water tower, with a round play button. Under the video is a dark bar with two caption lines: [water splashing], then NARRATOR: The tank fills up at night. Below that is the sentence Water rushes to each home. At the bottom are underlined words: Next page: Using less water." },
        prompt: "Which TWO things can the video on this web page do that the printed article cannot?",
        choices: [
          { text: "show the tank filling up as it happens", correct: true },
          { text: "let the reader hear the water splashing", correct: true },
          { text: "tell what the section \"Down to Your Faucet\" is about" },
          { text: "name each part of the tower with a label" },
          { text: "set apart a surprising fact about water towers" }
        ],
        clue: "Features are not only on paper. Ask what a video can do that words and pictures on a page cannot.",
        hints: [
          "Features are not only on paper. Ask what a video can do that words and pictures on a page cannot.",
          "Look at the video box and the lines under it. Then ask, for each choice, whether a printed page could do it too. Choose two.",
          "A printed article can have a heading that tells what a section is about, so that is not something only the video can do. Test the others."
        ],
        how: [
          "A printed page can have a heading, a diagram with labels, and a box with a surprising fact.",
          "A video moves and has sound. It can show the tank filling as it happens, and the caption line shows a splashing sound to hear.",
          "The answers are \"show the tank filling up as it happens\" and \"let the reader hear the water splashing.\""
        ],
        misconception: "A common mix-up is thinking a web page feature does something new when a printed page can do it too, like a heading.",
        why: "The answers are \"show the tank filling up as it happens\" and \"let the reader hear the water splashing.\" A video moves and has sound. A heading, a labeled diagram and a fact box can all be printed on paper." },
      { id: "SK-TC1b-C10", type: "dropdown", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
        stem: ["Look at the caption line under the video on this web page. Later in the same video, the pump turns on with a loud hum, and nobody is talking."],
        figure: { src: "assets/figures/tc1b-c-water-webpage.svg",
          alt: "A web page. At the top are three tabs: Home, Water and Weather. The Water tab has a thick border. Under the tabs is a box with a magnifying glass and the word Search. Next is the heading Down to Your Faucet. Then there is a video box that shows a water tower, with a round play button. Under the video is a dark bar with two caption lines: [water splashing], then NARRATOR: The tank fills up at night. Below that is the sentence Water rushes to each home. At the bottom are underlined words: Next page: Using less water." },
        prompt: "Choose the words that best complete the sentence.",
        text: "The caption line should show the line {0}.",
        slots: [{ options: ["[pump humming]", "NARRATOR: The pump hums.", "PUMP: Hummm!"], answer: 0 }],
        clue: "A caption line has its own way to show sounds and its own way to show talking. Think about what the Teach page said about each one.",
        hints: [
          "A caption line has its own way to show sounds and its own way to show talking. Think about what the Teach page said about each one.",
          "Read the stem again, then read each of the three lines.",
          "Nobody is talking in this part of the video, so the narrator has nothing to say here. Check the other two lines."
        ],
        how: [
          "The stem says the pump hums and nobody is talking, so the new line must show a sound.",
          "Words in [brackets] name a sound, so the line is [pump humming].",
          "A name and a colon show someone talking. Nobody is talking, and a pump cannot talk, so the other two lines do not fit."
        ],
        misconception: "A common mix-up is writing a sound as if someone said it. Brackets name a sound.",
        why: "The answer is [pump humming]. Words in [brackets] name a sound, and nobody is talking. A name with a colon, like NARRATOR: or PUMP:, would show someone talking." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TC1b-C11", type: "hottext", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p4"],
        prompt: "Which sentence from the article names a part of the pool that Figure 1 does NOT show? Choose the sentence in the passage.",
        targets: ["p4:1:1", "p4:3:1", "p4:3:3", "p4:3:4", "p4:5:2"],
        answer: ["p4:1:1"], pick: 1,
        clue: "Put the diagram with the words. Read each label, then check which parts in the article have a label.",
        hints: [
          "Put the diagram with the words. Read each label, then check which parts in the article have a label.",
          "List the three labels in Figure 1. Then read every sentence in the article that names a part of the pool.",
          "The sentence about the T near each wall matches the line on the bottom, which Figure 1 shows ending in a T. Check the other sentences the same way."
        ],
        how: [
          "Figure 1 labels the backstroke flags, the lane lines and the line on the bottom, which ends in a T.",
          "The sentences about lane lines, the dark line, the T and the row of flags all name parts that Figure 1 shows.",
          "The answer is \"Before a race, swimmers stand on raised platforms called starting blocks.\" Figure 1 has no starting blocks."
        ],
        why: "The answer is \"Before a race, swimmers stand on raised platforms called starting blocks.\" Figure 1 labels the lane lines, the line on the bottom with its T, and the backstroke flags, but it does not show any starting blocks." },
      { id: "SK-TC1b-C12", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: ["p4"],
        prompt: "The author could have used a photo of swimmers in a race instead of Figure 1. Why is Figure 1 a better choice for this article?",
        choices: [
          { text: "Its labels name each helper in the water, so readers can see where it is.", correct: true },
          { text: "It shows readers which swimmer is in the lead and winning." },
          { text: "It shows readers how fast each of the swimmers is moving." },
          { text: "Its labels tell readers what the word backstroke means." }
        ],
        clue: "A diagram is a drawing with labels. Each label points to one part and names it.",
        hints: [
          "A diagram is a drawing with labels. Each label points to one part and names it.",
          "Look at what Figure 1 shows and what it labels. Then think about what a photo of a busy race would show instead.",
          "Figure 1 has no swimmers in it at all, so it cannot show who is winning. Test the other choices against what the diagram shows."
        ],
        how: [
          "Figure 1 shows the pool from above, with labels for the backstroke flags, the lane lines and the line on the bottom.",
          "The article is about those helpers. The labels show where each one is, which a photo of a busy race might hide.",
          "The answer is \"Its labels name each helper in the water, so readers can see where it is.\"",
          "There are no swimmers in the diagram, and no label tells what backstroke means."
        ],
        misconception: "A common mix-up is thinking a photo is always better. A labeled diagram can point out parts that a photo might hide.",
        why: "The answer is \"Its labels name each helper in the water, so readers can see where it is.\" The article is about the lane lines, the line on the bottom and the flags, and the diagram labels each one. It has no swimmers, so it shows no winner or speed, and no label explains backstroke." },
      { id: "SK-TC1b-C13", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
        stem: ["The Oak Street School News comes two ways: as a printed paper that goes home in backpacks, and as a web page."],
        prompt: "Which TWO features could be on the web page but NOT in the printed paper?",
        choices: [
          { text: "a play button for a video of the spring concert", correct: true },
          { text: "underlined words that open the lunch menu page", correct: true },
          { text: "a heading over each news story" },
          { text: "a photo of the art show with a caption" },
          { text: "a \"Did You Know?\" box with a fun fact" }
        ],
        clue: "Features are not only on paper. Some features look the same on paper and on a screen.",
        hints: [
          "Features are not only on paper. Some features look the same on paper and on a screen.",
          "Picture each feature on the printed paper. Then picture it on the web page. Choose two.",
          "A heading can be printed over a story on paper, so it is in both. Test each of the other features."
        ],
        how: [
          "Headings, photos with captions, and text boxes can all be printed on paper.",
          "A play button starts a video, and underlined link words open another page. Both need a screen.",
          "The answers are \"a play button for a video of the spring concert\" and \"underlined words that open the lunch menu page.\""
        ],
        misconception: "A common mix-up is thinking a photo or a box is only for web pages. Many features work on paper and on a screen.",
        why: "The answers are \"a play button for a video of the spring concert\" and \"underlined words that open the lunch menu page.\" A video and a link need a screen. Headings, photos with captions and text boxes can be printed on paper." },
      { id: "SK-TC1b-C14", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
        stem: ["Kiara is giving a talk to her class about staying safe on the playground. She has three rules. She wants her listeners to keep track of which rule she is on."],
        prompt: "Which TWO things should Kiara do?",
        choices: [
          { text: "Say at the start, \"I have three rules to share.\"", correct: true },
          { text: "Say \"first,\" \"next\" and \"last\" before the rules.", correct: true },
          { text: "Number the three rules on her own note card." },
          { text: "Put a box around each rule on her note card." },
          { text: "Say all three rules in one long sentence." }
        ],
        clue: "Think about what Kiara's listeners can and cannot take in.",
        hints: [
          "Think about what Kiara's listeners can and cannot take in.",
          "For each choice, ask: will the listeners hear it? Choose two.",
          "Numbers on her own note card are only for her, so they do not reach her listeners. Test the other choices the same way."
        ],
        how: [
          "Her listeners only hear Kiara, so anything on her own note card cannot help them.",
          "Saying at the start that there are three rules tells listeners what is coming, the way headings show the parts of a page.",
          "Saying first, next and last tells listeners which rule she is on.",
          "The answers are \"Say at the start, \"I have three rules to share.\"\" and \"Say \"first,\" \"next\" and \"last\" before the rules.\" One long sentence runs the rules together."
        ],
        misconception: "A common mix-up is using a print feature, like numbers or a box on paper, to help listeners. They cannot see it.",
        why: "The answers are \"Say at the start, \"I have three rules to share.\"\" and \"Say \"first,\" \"next\" and \"last\" before the rules.\" Listeners hear only her words, so spoken signals help them keep track. Numbers and boxes on her own card do not reach them, and one long sentence runs the rules together." },
      { id: "SK-TC1b-C15", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
        stem: ["Here is part of the script for a school podcast about the Tigers basketball team. Words in [brackets] name sounds, and a name with a colon shows who is talking.", "[cheering crowd]", "DEV: Welcome back to Tiger Talk! Last night, our team played the Eagles.", "MAYA: It was close all game. [drumroll]", "DEV: And the final score was 40 to 38. The Tigers won!"],
        prompt: "Why does the podcast play a drumroll right before Dev tells the score?",
        choices: [
          { text: "to make listeners excited and ready for the big news", correct: true },
          { text: "to show that the crowd at the game is still cheering" },
          { text: "to tell listeners that Maya is the next one to talk" },
          { text: "to show listeners that the podcast is about to end" }
        ],
        clue: "Sounds in a video or a podcast can do a job, too. Ask what a sound tells listeners or makes them feel.",
        hints: [
          "Sounds in a video or a podcast can do a job, too. Ask what a sound tells listeners or makes them feel.",
          "Read the whole script in order. Notice what comes just before the drumroll and just after it.",
          "The crowd has its own sound, [cheering crowd], at the very start, so the drumroll is not the crowd. Test the other choices."
        ],
        how: [
          "The drumroll comes right after Maya says the game was close, and right before Dev tells the score.",
          "The score is the big news. A drumroll makes listeners wait for it and feel excited.",
          "The answer is \"to make listeners excited and ready for the big news.\"",
          "The crowd sound is at the start, Dev talks next, not Maya, and the podcast goes on after the score."
        ],
        misconception: "A common mix-up is thinking every sound in a script is just a noise from the place. Some sounds are added to make listeners feel something.",
        why: "The answer is \"to make listeners excited and ready for the big news.\" The drumroll comes after Maya says the game was close and just before Dev tells the score, so it builds excitement. The crowd sound comes earlier, Dev speaks next, and the podcast does not end there." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short text. Each `like` lists only the
     core items it really practises, so some core items have no extra question. */
  similar: [
    { id: "SK-TC1b-S01", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C03"],
      stem: ["An article called \"Riding the Train\" has three sections: \"Buying a Ticket,\" \"Finding Your Seat\" and \"Getting Off at Your Stop.\" It also has a \"Did You Know?\" box."],
      prompt: "Which fact would fit best in the box?",
      choices: [
        { text: "The fastest trains in the world can go over 200 miles an hour.", correct: true },
        { text: "Buy your ticket at the window or a machine before you get on." },
        { text: "Look at the number on your ticket to find your seat." },
        { text: "Listen for the name of your stop, then walk to the door." }
      ],
      clue: "A text box is set apart from the sections. Think about what kind of fact an author puts there.",
      hints: [
        "A text box is set apart from the sections. Think about what kind of fact an author puts there.",
        "Read the stem again and say what the whole article is about.",
        "Where to buy a ticket is part of buying a ticket, so that fact belongs in \"Buying a Ticket.\" Check the others."
      ],
      how: [
        "The ticket fact belongs in \"Buying a Ticket,\" the seat number in \"Finding Your Seat,\" and listening for your stop in \"Getting Off at Your Stop.\"",
        "The speed fact is surprising, but no section needs it to explain how to ride.",
        "The answer is \"The fastest trains in the world can go over 200 miles an hour.\""
      ],
      why: "The answer is \"The fastest trains in the world can go over 200 miles an hour.\" It is a fun extra fact that no section needs. The ticket, the seat number and listening for your stop each belong in one of the three sections." },
    { id: "SK-TC1b-S02", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C09"],
      stem: ["A web page about the Riverside Zoo has three tabs at the top: Home, Animals and Visit. It also has a search box, a video of the lions with a play button, and underlined words at the bottom that say Next page: Zoo map."],
      prompt: "Ty wants to hear the lions roar. What should he do?",
      choices: [
        { text: "tap the play button on the video", correct: true },
        { text: "type lions in the search box" },
        { text: "tap the underlined words at the bottom" },
        { text: "tap the Visit tab at the top" }
      ],
      clue: "Each web page feature has its own job. Ask what Ty wants to do.",
      hints: [
        "Each web page feature has its own job. Ask what Ty wants to do.",
        "Read Ty's goal again. Then read each choice and picture what would happen.",
        "The underlined words open a page about the zoo map, and a map makes no sound. Test the other choices."
      ],
      how: [
        "Ty wants to hear the lions, and the page has a video of the lions.",
        "A play button starts a video, with its sounds.",
        "The answer is \"tap the play button on the video.\""
      ],
      why: "The answer is \"tap the play button on the video.\" The video shows the lions, and the play button starts it with its sound. The search box finds pages, the link opens the zoo map, and the Visit tab goes to another part of the site." },
    { id: "SK-TC1b-S03", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C05", "SK-TC1b-C14"],
      stem: ["Omar is reading his report about spiders aloud to his class. In the written report, each part has a heading."],
      prompt: "What could Omar do so his listeners know when he starts a new part?",
      choices: [
        { text: "say, \"Next, I will tell you how spiders spin webs.\"", correct: true },
        { text: "make the headings even darker on his own paper" },
        { text: "read the headings faster than the other words" },
        { text: "skip the headings so his report is shorter" }
      ],
      clue: "Think about how Omar's classmates will take in his report.",
      hints: [
        "Think about how Omar's classmates will take in his report.",
        "For each choice, ask: will the listeners notice it?",
        "Making the headings darker on his paper does not help, because only Omar sees his paper. Test the other choices."
      ],
      how: [
        "Only Omar can see the headings on his paper.",
        "Saying what the next part is about lets listeners hear that a new part is starting, the way a heading does on a page.",
        "The answer is to say, \"Next, I will tell you how spiders spin webs.\""
      ],
      why: "The answer is to say, \"Next, I will tell you how spiders spin webs.\" Listeners hear his voice, not his paper. Darker headings are on his own paper, and reading the headings faster or skipping them makes the change easy to miss." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting.
       Each like names one core item only, because the engine uses an extra question once.
       Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TC1b-S04", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-P5"],
      stem: ["An article called \"A Doctor's Listening Tool\" has a diagram of a stethoscope. Labels point to the ear tips, the tube and the chest piece. Here are four sentences from the article.", "(1) Doctors have used stethoscopes for over two hundred years.", "(2) The chest piece is placed on the patient, and sound travels up the tube to the ear tips.", "(3) Some doctors wear a white coat to their work.", "(4) A child can ask to listen to his or her own heartbeat."],
      prompt: "Which sentence tells about the parts that the labels in the diagram point to?",
      choices: [
        { text: "Sentence 2", correct: true },
        { text: "Sentence 1" },
        { text: "Sentence 3" },
        { text: "Sentence 4" }
      ],
      clue: "A diagram's labels name parts. Find the sentence that uses the same names.",
      hints: [
        "A diagram's labels name parts. Find the sentence that uses the same names.",
        "Read the three labels. Then look for a sentence that says what those parts do.",
        "Sentence 3 is about a coat, and no label points to a coat. Check the other sentences for the labeled parts."
      ],
      how: [
        "The labels are ear tips, tube and chest piece.",
        "Sentence 2 names the chest piece, the tube and the ear tips, and tells how sound moves through them.",
        "The answer is Sentence 2.",
        "The other sentences are about how long doctors have used the tool, a white coat, and a child's heartbeat."
      ],
      why: "The answer is Sentence 2. It names the chest piece, the tube and the ear tips, which are the parts the labels point to. The other sentences tell about the past, a coat and a child's heartbeat." },
    { id: "SK-TC1b-S05", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-P4"],
      stem: ["In the part called \"Baking the Clay,\" the word **kiln** is printed in dark, bold letters. At the back of the book is a glossary. It says: kiln: a very hot oven that bakes clay until it is hard. The part says, \"Potters put their bowls in a kiln for a whole day.\" A student asks why the word looks so different from the words next to it."],
      prompt: "How does the bold print help the reader?",
      choices: [
        { text: "It shows an important word that the glossary explains.", correct: true },
        { text: "It shows the word is hard to say out loud." },
        { text: "It shows that the section is ending." },
        { text: "It shows the word is the name of a person." }
      ],
      clue: "Authors make a word look different on purpose. Think about what a reader can do with a bold word.",
      hints: [
        "Authors make a word look different on purpose. Think about what a reader can do with a bold word.",
        "Look for the place where the stem tells more about the word kiln.",
        "Nothing in the stem says the word is hard to say, so that job does not fit. Test the other choices."
      ],
      how: [
        "The word kiln is in bold, and the glossary at the back tells what it means.",
        "So the bold print points the reader to a word that matters and is explained.",
        "The answer is \"It shows an important word that the glossary explains.\"",
        "Bold print does not show how to say a word, where a section ends, or that a word is a name."
      ],
      misconception: "A common mix-up is thinking bold print is only decoration. It tells the reader to notice an important word.",
      why: "The answer is \"It shows an important word that the glossary explains.\" The glossary tells what kiln means. Bold print does not show how to say a word, where a section ends, or that a word is a name." },
    { id: "SK-TC1b-S06", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
      like: ["SK-TC1b-C04"],
      stem: ["A park magazine has an article about a zip line. One section has the heading \"Flying Through the Trees.\" Under the heading, the author tells about a ride across a forest. A rider hangs from a cable and glides high above the ground. The ride is fast and quiet. The section ends with the rider landing on a wooden platform."],
      prompt: "How does the heading \"Flying Through the Trees\" help the reader? Choose TWO answers.",
      choices: [
        { text: "It tells that the section is about riding above a forest.", correct: true },
        { text: "It makes the reader want to find out what the ride is like.", correct: true },
        { text: "It tells how to build a zip line." },
        { text: "It lists all the safety rules for riders." },
        { text: "It tells the reader the name of the park." }
      ],
      clue: "A heading gives a small preview of the section. Think about what the reader learns and feels.",
      hints: [
        "A heading gives a small preview of the section. Think about what the reader learns and feels.",
        "Compare the heading with the sentences under it. Choose two jobs the heading does.",
        "The heading names no park, so that job does not fit. Check each choice against the heading and the section."
      ],
      how: [
        "The heading says \"Flying Through the Trees,\" and the section tells about a ride high above a forest.",
        "So the heading tells what the section is about, and \"flying\" makes the reader curious about the ride.",
        "The answers are \"It tells that the section is about riding above a forest.\" and \"It makes the reader want to find out what the ride is like.\"",
        "The section does not tell how to build a zip line, list safety rules, or name the park."
      ],
      misconception: "A common mix-up is choosing a job the section never does. A heading only gives a preview of what the section tells.",
      why: "The answers are \"It tells that the section is about riding above a forest.\" and \"It makes the reader want to find out what the ride is like.\" The heading names the topic and its word \"flying\" makes the reader curious. The section does not tell how to build a zip line, list safety rules or name the park." },
    { id: "SK-TC1b-S07", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C06"],
      stem: ["The author is writing a section called \"A Wheel That Helps You Lift.\" It tells how a pulley works. A pulley is a wheel with a groove, and a rope runs over it. When you pull down on one end of the rope, the other end goes up. This makes it easier to raise a heavy bucket from a well. The author wants to print one word in bold, so readers know it is the key word of the section."],
      prompt: "Which word should the author print in bold?",
      choices: [
        { text: "pulley", correct: true },
        { text: "rope" },
        { text: "bucket" },
        { text: "heavy" }
      ],
      clue: "The bold word should be the one the whole section is about. Ask which word the section would not make sense without.",
      hints: [
        "The bold word should be the one the whole section is about. Ask which word the section would not make sense without.",
        "Read the section title again. Then see which choice names the thing the section teaches.",
        "The word heavy only describes the bucket, so it is not the main idea. Test the other choices against the title."
      ],
      how: [
        "The section title is \"A Wheel That Helps You Lift,\" and the text explains how a pulley works.",
        "A reader needs to know this one word to understand the whole section.",
        "The answer is \"pulley.\"",
        "A rope and a bucket are only parts of the story, and heavy only describes the bucket."
      ],
      misconception: "A common mix-up is choosing a word that is easy to see in a picture. The bold word should name what the whole section teaches.",
      why: "The answer is \"pulley.\" The section is about how a pulley works, so that is the key word for readers to notice. A rope and a bucket are only parts of the story, and heavy only describes the bucket." },
    { id: "SK-TC1b-S08", type: "dropdown", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C07"],
      stem: ["An article explains how a ramp helps a person in a wheelchair get into a building. The article has a diagram. It shows a short set of steps next to a long, gentle slope. An arrow runs up the slope to a door at the top. Labels point to the slope, the handrail and the door. The author wants a caption that tells what the whole diagram shows."],
      prompt: "The diagram has no caption yet. Choose the words that best complete the sentence.",
      text: "The diagram should have the caption {0}.",
      slots: [
        { options: ["How a ramp helps a wheelchair reach a door", "The handrail on the left side", "A short set of steps"], answer: 0 }
      ],
      clue: "A caption for a whole diagram should name the big idea, not one small part.",
      hints: [
        "A caption for a whole diagram should name the big idea, not one small part.",
        "Look at what all the labels and the arrow show together.",
        "A handrail is only one label, so that caption is about one part. Compare the other captions with the whole diagram."
      ],
      how: [
        "The diagram shows a slope, a handrail and a door, with an arrow going up the slope.",
        "A caption should tell what all of that shows together.",
        "The answer is \"How a ramp helps a wheelchair reach a door.\"",
        "The handrail and the steps are each only one small part of the diagram."
      ],
      why: "The answer is \"How a ramp helps a wheelchair reach a door.\" It names what the whole diagram shows. The handrail and the steps are each only one small part." },
    { id: "SK-TC1b-S09", type: "order", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C08"],
      stem: ["A diagram in a book shows how a drawbridge lets a tall boat pass. Arrow 1 points from a bell to a worker in a small tower. Arrow 2 points from the worker to a lever, and the road lifts. Arrow 3 points to the boat sailing through the gap. Each arrow has a number next to it, so a reader can follow the trip."],
      prompt: "Use the diagram. Put the steps of the drawbridge's job in order.",
      steps: [
        "A bell rings to tell the worker a boat is coming.",
        "The worker pulls the lever.",
        "The road lifts up like two doors.",
        "The boat sails through the gap."
      ],
      clue: "Numbers and arrows on a diagram can show an order. Follow them from the smallest number to the largest.",
      hints: [
        "Numbers and arrows on a diagram can show an order. Follow them from the smallest number to the largest.",
        "Find the three numbered arrows. Match each one to a step. One step has no arrow of its own.",
        "The boat cannot sail through before the road lifts, because arrow 3 comes last. Put the other three steps in order."
      ],
      how: [
        "Arrow 1 goes from the bell to the worker: a bell rings to tell the worker a boat is coming.",
        "Arrow 2 goes from the worker to the lever, and the road lifts. So the worker pulls the lever, and then the road lifts up.",
        "Arrow 3 points to the boat sailing through the gap."
      ],
      why: "The order is: a bell rings to tell the worker a boat is coming, the worker pulls the lever, the road lifts up like two doors, and the boat sails through the gap. Arrows 1, 2 and 3 show those steps in that order." },
    { id: "SK-TC1b-S10", type: "dropdown", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C10"],
      stem: ["A web page about a playground has a video of two children on a seesaw. Words appear under the video as it plays. These are called captions. They tell what people say, and they also name important sounds. Later in the video, the wooden seesaw hits the ground with a loud thump, and nobody is talking."],
      prompt: "Choose the words that best complete the sentence.",
      text: "The caption line should show the line {0}.",
      slots: [
        { options: ["[seesaw thumps]", "[children are playing]", "[the video ends]"], answer: 0 }
      ],
      clue: "A caption can name a sound so that a reader who cannot hear still knows what is happening.",
      hints: [
        "A caption can name a sound so that a reader who cannot hear still knows what is happening.",
        "Find the sound in the stem. Then look for the line that names that sound.",
        "Nothing in the stem says the video ends at that moment, so one line does not fit. Compare the other lines with the sound."
      ],
      how: [
        "Nobody is talking, but the seesaw makes a loud thump.",
        "A caption in brackets can name that sound so the reader knows it happened.",
        "The answer is \"[seesaw thumps].\"",
        "The line about children playing does not name the sound, and the video does not end then."
      ],
      why: "The answer is \"[seesaw thumps].\" The only sound at that moment is the seesaw hitting the ground, and a caption in brackets names it. The other lines do not name the sound, and the video does not end then." },
    { id: "SK-TC1b-S11", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C11"],
      stem: ["An article called \"Reading a Tree Trunk\" has a diagram of a tree trunk cut across. Labels point to the bark, the rings and the center. Here are four sentences from the article.", "(1) The bark is the thin outside layer that protects the tree.", "(2) Each ring shows one year of growth.", "(3) The roots hold the tree in the ground and take in water.", "(4) The center of the trunk is the oldest part."],
      prompt: "Which sentence names a part of the tree that the diagram does NOT show?",
      choices: [
        { text: "Sentence 3", correct: true },
        { text: "Sentence 1" },
        { text: "Sentence 2" },
        { text: "Sentence 4" }
      ],
      clue: "Compare each sentence with the labels. Look for a part the labels do not name.",
      hints: [
        "Compare each sentence with the labels. Look for a part the labels do not name.",
        "Write the three labels. Then find the part named in each sentence.",
        "The rings are a labeled part, so the sentence about them is shown in the diagram. Check the other sentences the same way."
      ],
      how: [
        "The labels name the bark, the rings and the center.",
        "Sentences 1, 2 and 4 each tell about one of those parts.",
        "Sentence 3 tells about the roots, and no label points to the roots.",
        "The answer is Sentence 3."
      ],
      misconception: "A common mix-up is choosing a sentence that is hard to picture. Check which parts the labels name.",
      why: "The answer is Sentence 3. It names the roots, and no label points to the roots. The other sentences tell about the bark, the rings and the center, which the labels name." },
    { id: "SK-TC1b-S12", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C12"],
      stem: ["An article explains how a toaster makes bread brown. The author could have used a photo of a toaster on a kitchen counter. Instead, the author drew a diagram of the inside. Labels point to the red wires, the spring and the lever that pushes the bread down. A photo would show only the shiny outside of the toaster."],
      prompt: "Why is the diagram a better choice for this article than the photo?",
      choices: [
        { text: "Its labels name the hidden parts inside.", correct: true },
        { text: "It shows the exact color of a real toaster." },
        { text: "It makes the toaster look larger on the page." },
        { text: "It shows what a kitchen counter looks like." }
      ],
      clue: "Match the picture to the job of the article. Ask what a reader needs to see to learn about a toaster.",
      hints: [
        "Match the picture to the job of the article. Ask what a reader needs to see to learn about a toaster.",
        "Read what the photo would show and what the diagram shows. Which one shows what is inside?",
        "The stem says the photo shows a shiny outside, so a color is the photo's strength, not the diagram's. Test the other choices."
      ],
      how: [
        "The article is about how a toaster works, so a reader needs to see what is inside.",
        "A photo would show only the outside. The diagram shows the wires, spring and lever, with labels.",
        "The answer is \"Its labels name the hidden parts inside.\"",
        "The diagram is not about color, size or the kitchen."
      ],
      misconception: "A common mix-up is thinking a photo is always better because it looks real. The better picture is the one that shows what the article teaches.",
      why: "The answer is \"Its labels name the hidden parts inside.\" The article is about how a toaster works, and the photo would show only the outside. The diagram is not about color, size or the kitchen." },
    { id: "SK-TC1b-S13", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
      like: ["SK-TC1b-C13"],
      stem: ["The Greenway Park Newsletter comes two ways. One way is a printed paper that people pick up at the park gate. The other way is a web page. Both have headlines, photos with captions and a calendar box of upcoming days. The web page can also do some things that paper cannot do. A reader can use it on a phone or on a computer."],
      prompt: "Which TWO features could be on the web page but NOT in the printed paper?",
      choices: [
        { text: "a play button for a video of the new playground opening", correct: true },
        { text: "a Sign Up button that opens a form for the soccer league", correct: true },
        { text: "a headline above each story" },
        { text: "a photo with a caption underneath" },
        { text: "a calendar box that lists the upcoming days" }
      ],
      clue: "Ask which features need a screen to work. A feature that can move or open something needs one.",
      hints: [
        "Ask which features need a screen to work. A feature that can move or open something needs one.",
        "The stem says both ways already have some features. Cross those out first, then choose two.",
        "A calendar box is named in the stem as being in both ways, so it is not web-only. Check the other choices the same way."
      ],
      how: [
        "The stem says both ways have headlines, photos with captions and a calendar box.",
        "A video with a play button and a Sign Up button that opens a form need a screen to work.",
        "The answers are \"a play button for a video of the new playground opening\" and \"a Sign Up button that opens a form for the soccer league.\"",
        "Headlines, captions and calendar boxes can be printed on paper."
      ],
      misconception: "A common mix-up is choosing a feature the text says is in both. Cross out the shared features first.",
      why: "The answers are \"a play button for a video of the new playground opening\" and \"a Sign Up button that opens a form for the soccer league.\" Both need a screen to work. Headlines, captions and calendar boxes are in both the paper and the web page." },
    { id: "SK-TC1b-S14", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
      like: ["SK-TC1b-C14"],
      stem: ["Theo is giving a talk to his class about keeping a garden healthy. He has three tips. He wants his listeners to keep track of which tip he is on. They will only hear his voice, and nothing will be written on the board. Theo has practiced his talk at home, and he plans to speak in a clear, calm voice."],
      prompt: "Which TWO things should Theo do?",
      choices: [
        { text: "Say at the start, \"I have three tips to share.\"", correct: true },
        { text: "Say \"second\" and \"finally\" before the later tips.", correct: true },
        { text: "Hold up a page with the word Tip in bold print." },
        { text: "Talk very fast so the talk is over soon." },
        { text: "Whisper each tip so listeners lean in." }
      ],
      clue: "Listeners cannot see headings or bold print. Think about words that tell where a talk is going.",
      hints: [
        "Listeners cannot see headings or bold print. Think about words that tell where a talk is going.",
        "For each choice, ask: will the words help a listener keep track of the tips? Choose two.",
        "The stem says nothing will be written, so a page with bold print is not something listeners can use. Check the other choices."
      ],
      how: [
        "Listeners only hear Theo, so he needs to say words that show the parts of his talk.",
        "Saying how many tips he has tells listeners what to expect. Words like second and finally tell which tip is next.",
        "The answers are \"Say at the start, \"I have three tips to share.\"\" and \"Say \"second\" and \"finally\" before the later tips.\"",
        "Talking fast or whispering does not help listeners keep track of the tips."
      ],
      misconception: "A common mix-up is choosing a way to look different, like bold print. Listeners need words they can hear.",
      why: "The answers are \"Say at the start, \"I have three tips to share.\"\" and \"Say \"second\" and \"finally\" before the later tips.\" Listeners hear the words, so counting the tips and saying which tip is next helps them keep track. Bold print cannot be heard, and talking fast or whispering does not show the parts." },
    { id: "SK-TC1b-S15", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C15"],
      stem: ["Here is part of the script for a school podcast about a student named Nia. The podcast is about her day. Words in [brackets] name sounds, and a name with a colon shows who is talking.", "[alarm clock ringing]", "HOST: Good morning! Today, Nia tells how she gets ready for school.", "NIA: I always jump out of bed when I hear that ringing."],
      prompt: "Why does the podcast play an alarm clock sound right before the host starts to speak?",
      choices: [
        { text: "to tell listeners the story begins in the morning", correct: true },
        { text: "to tell listeners that the story is over" },
        { text: "to show that the host is angry" },
        { text: "to tell listeners to stop listening" }
      ],
      clue: "A sound in a podcast is added for a reason. Ask what the sound helps listeners know or feel.",
      hints: [
        "A sound in a podcast is added for a reason. Ask what the sound helps listeners know or feel.",
        "Read the lines right after the sound. What time of day do they tell about?",
        "The host says good morning in a happy voice, so a choice about anger does not fit. Test the other choices against the lines after the sound."
      ],
      how: [
        "The alarm clock rings at the very start of the script.",
        "The next lines say good morning and tell how Nia gets ready for school.",
        "The answer is \"to tell listeners the story begins in the morning.\"",
        "The sound comes at the start, so it does not mean the story is over or tell listeners to stop."
      ],
      misconception: "A common mix-up is thinking a sound is only noise. A sound can tell listeners where, when or how to feel.",
      why: "The answer is \"to tell listeners the story begins in the morning.\" The alarm clock rings at the start, and the host then says good morning. The sound comes at the start, so it does not mean the story is over, show anger or tell listeners to stop." }
  ],
  /* Hints and Show me how for items kept in practice: refs P5, P4 (core set 1) and Together P1, P8, P9, P10, P6. */
  addons: {
    "SK-TC1b-P1": {
      hints: [
        "Headings tell what each section is about. Read each heading and ask which section would explain the question.",
        "Read all four headings before you choose. Then skim the sentences under the one you pick to check it.",
        "\"Busy Builders\" is about cutting trees and gathering branches, not about warning other beavers. Check the other headings."
      ],
      how: [
        "The question is about how beavers warn each other.",
        "Under \"Tail Talk,\" a beaver slaps its tail on the water, and the loud smack warns other beavers.",
        "The answer is Tail Talk.",
        "\"Busy Builders\" is about cutting trees, \"A Home with a Secret Door\" is about the lodge, and the box is about teeth."
      ] },
    "SK-TC1b-P8": {
      hints: [
        "A caption tells what the picture shows. Look at the picture before you read the captions.",
        "Say in your own words what the picture shows. Then read each caption.",
        "The beaver in the picture is not swimming, so the caption about swimming into the lodge does not fit. Check the others."
      ],
      how: [
        "The picture shows a beaver with its teeth on a deep notch in a small tree, and wood chips on the ground.",
        "There is no water in the picture.",
        "The answer is \"A beaver chews through a small tree with its strong front teeth.\"",
        "The tail, the lodge and the floating captions all need water, which the picture does not show."
      ] },
    "SK-TC1b-P9": {
      hints: [
        "People who listen cannot see bold print. Think about what a speaker can say to do the same job.",
        "Read everything the ranger says, from her first sentence to her last.",
        "She keeps talking after those words, so her talk is not over. Check the other choices."
      ],
      how: [
        "Listeners cannot see bold print, so a speaker uses words to point out an important part.",
        "Right after \"Listen closely,\" the ranger tells a big fact: a beaver's front teeth have iron in them, which makes them extra strong.",
        "The answer is \"to tell listeners that the next fact matters a lot.\"",
        "She keeps talking, she does not ask a question, and the words do not name a place."
      ] },
    "SK-TC1b-P10": {
      hints: [
        "Look at how each line in the caption line starts. Then think about what tapping the underlined words would do.",
        "Find the line in [brackets] and the line that starts with a name. Then read the underlined words at the bottom.",
        "The narrator's words come after NARRATOR:, so the line in brackets is not what the narrator says. For the second blank, the play button is what starts the video."
      ],
      how: [
        "Words in [brackets] name a sound, so [water rushing] tells what sound plays in the video.",
        "The underlined words are a link, and they say Next page: Beaver lodges.",
        "The answers are \"what sound plays in the video\" and \"open a page about beaver lodges.\""
      ] },
    "SK-TC1b-P4": {
      hints: [
        "Bold print says: stop, this is a key word. Think about why an author makes a word stand out.",
        "Read both lines of the stem. Then find the sentence with lodge in the article.",
        "Lodge sits inside a sentence, not on a line by itself above a section, so it is not a heading. Check the other choices."
      ],
      how: [
        "Lodge is printed in bold inside a sentence in \"A Home with a Secret Door.\"",
        "The glossary at the back tells what lodge means: a beaver's home made of sticks and mud.",
        "The answer is \"It shows the word is important and is explained in the glossary.\"",
        "Lodge is not in a box or a heading, and the whole article is about life in a beaver pond, not only the lodge."
      ] },
    "SK-TC1b-P5": {
      hints: [
        "A diagram's labels point to parts and name them. Find the sentences that tell about those same parts.",
        "Read the two labels in Figure 1. Then look through the whole article for sentences that name the same parts. Choose two.",
        "Beavers cutting down trees is told in \"Busy Builders,\" and Figure 1 shows no trees. Check the other sentences."
      ],
      how: [
        "Figure 1 has two labels: dry room and door under water.",
        "\"Its doors are under the water.\" tells about the door.",
        "\"The room inside stays dry above the water.\" tells about the dry room.",
        "The other sentences tell about trees, branches and the tail, which Figure 1 does not label."
      ] },
    "SK-TC1b-P6": {
      hints: [
        "Think about where each feature sits and what it helps you do. A listener cannot see the page, so think about what a listener hears.",
        "Read each row and picture where you would find that job: on a page, or in a talk.",
        "A heading sits on top of a section, so it fits the row about telling what a section will be about. Decide where the other three go."
      ],
      how: [
        "A heading tells what a section will be about.",
        "A text box gives an extra fact set apart from the paragraphs.",
        "A bold word makes one printed word stand out from the words around it.",
        "In a talk, the speaker's voice slows down and stops before an important fact. That does the job of bold for listeners."
      ] }
  },
  test: [
    { id: "SK-TC1b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "How does the text box add to the article?",
      choices: [
        { text: "It gives a surprising fact about how monarchs find milkweed.", correct: true },
        { text: "It tells the steps a monarch goes through as it grows." },
        { text: "It explains why monarchs fly south in the fall." },
        { text: "It names the colors on a monarch's wings." }
      ],
      clue: "Read only the words in the box. What does it tell you that the paragraphs do not?",
      why: "The answer is \"It gives a surprising fact about how monarchs find milkweed.\" The box says a monarch can taste with its feet to tell if a plant is milkweed. That fact is not in the paragraphs." },
    { id: "SK-TC1b-T3", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "Look at Figure 1 next to the section \"From Egg to Wing.\" This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does the diagram in Figure 1 help the reader understand?",
        choices: [
          { text: "the order of the stages in a monarch's life", correct: true },
          { text: "the path monarchs take to fly to Mexico" },
          { text: "the reason birds do not eat monarchs" },
          { text: "the kinds of flowers monarchs drink from" }
        ] },
      partB: { prompt: "Which sentence from the article does the diagram help explain?",
        choices: [
          { text: "\"Then the caterpillar sheds its skin and becomes a chrysalis with a hard shell.\"", correct: true },
          { text: "\"Some fly all the way to Mexico.\"" },
          { text: "\"Many birds will not eat monarchs.\"" },
          { text: "\"On the way, they stop to rest and to drink nectar from flowers.\"" }
        ] },
      clue: "Follow the arrows and the numbers from one drawing to the next. Then find the section of the article that tells about the same four things.",
      why: "Part A: the order of the stages in a monarch's life. Part B: \"Then the caterpillar sheds its skin and becomes a chrysalis with a hard shell.\" Figure 1 shows 1 egg, 2 caterpillar, 3 chrysalis and 4 butterfly, with arrows from each one to the next. That matches the steps in \"From Egg to Wing.\"" },
    { id: "SK-TC1b-T8", type: "dropdown", points: 2, dok: 2, passages: ["p2"],
      stem: ["This article is also on a website. The picture shows part of the web page for the section \"From Egg to Wing.\""],
      figure: { src: "assets/figures/tc1b-monarch-webpage.svg",
        alt: "A web page. At the top are three tabs: Home, Butterflies and Bees. The Butterflies tab has a thick border. Under them is a box with a magnifying glass and the word Search. Next is the heading From Egg to Wing. The page says A tiny caterpillar hatches from its egg, with a dotted line under the word hatches. An open box points to hatches and says hatches: comes out of an egg. It has a small x in the corner. Then the page says Then it eats and eats. At the bottom are underlined words: Next page: Monarch gardens." },
      prompt: "Choose the words that best complete the sentences.",
      text: "To learn what hatches means, a reader should {0}. To find out which flowers people can plant for monarchs, a reader should {1}.",
      slots: [
        { options: ["read the open box next to the word", "tap the Butterflies tab at the top", "tap the underlined words at the bottom"], answer: 0 },
        { options: ["tap the underlined words at the bottom", "tap the Bees tab at the top", "read the open box next to the word"], answer: 0 }
      ],
      clue: "Find each feature in the picture. Ask what it does: does it keep you on this page, or take you to another page? Where does it take you?",
      why: "The answers are \"read the open box next to the word\" and \"tap the underlined words at the bottom.\" The open box is a pop-up. It tells what hatches means, and the reader stays on the same page. The underlined words are a link that says Next page: Monarch gardens, so it opens a page about gardens for monarchs, where a reader can learn which flowers to plant. The Butterflies tab is the page the reader is already on, and the Bees tab goes to a page about bees, not monarchs." },
    { id: "SK-TC1b-T9", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["The picture shows a video about monarchs on a website. The sound is turned off, so the viewer reads the caption line under the video."],
      figure: { src: "assets/figures/tc1b-monarch-video.svg",
        alt: "A video screen. It shows a monarch butterfly hanging under a leaf on a branch while rain falls. Under the video is a dark bar with two caption lines: [rain tapping], then NARRATOR: They wait for the rain to stop." },
      prompt: "What does the caption line tell the viewer?",
      choices: [
        { text: "A rain sound plays, and the narrator says the monarchs wait for it to stop.", correct: true },
        { text: "The narrator says the words \"rain tapping\" before the other words." },
        { text: "The monarchs are tapping their wings on the leaves to talk." },
        { text: "The words are a link that opens a new page about rain." }
      ],
      clue: "Look at how each caption line starts. What do words in [brackets] name? What does a name with a colon show?",
      why: "The answer is \"A rain sound plays, and the narrator says the monarchs wait for it to stop.\" Words in [brackets] name a sound, so [rain tapping] is the sound of the rain, not words that someone says. NARRATOR: shows who is talking, and the words after it are what the narrator says. Nothing says the monarchs are tapping, and the caption line is not underlined like a link." },
    { id: "SK-TC1b-T7", type: "mc", points: 1, dok: 2, passages: ["p2"],
      stem: ["In the section \"A Long Trip South,\" the author printed one word in bold: **migrate**.", "The book has a glossary at the back."],
      prompt: "What would the glossary most likely say about the bold word?",
      choices: [
        { text: "migrate: to move to a far-away place when the season changes", correct: true },
        { text: "migrate: to change from a caterpillar into a butterfly" },
        { text: "migrate: to stop on the way and drink nectar from flowers" },
        { text: "migrate: to stay in one warm place all through the year" }
      ],
      clue: "A bold word is a key word for its own section. Read the sentences right after it to learn what it means.",
      why: "The answer is \"migrate: to move to a far-away place when the season changes.\" The author made migrate bold because it is the big idea of \"A Long Trip South.\" The next sentences tell what it means: each fall, monarchs fly south to a warmer place, and some go all the way to Mexico. Changing into a butterfly is told in a different section. Drinking nectar is only something monarchs do on the way. Staying in one place is the opposite of the long trip." },
    { id: "SK-TC1b-T6", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Look at Figure 2 and read its caption. What does the caption tell the reader that the picture alone does not show?",
      choices: [
        { text: "where the monarch is and where it is going", correct: true },
        { text: "that the monarch is sitting on top of a flower" },
        { text: "that the monarch has four wings with spots" },
        { text: "why birds stay away from the bright monarch" }
      ],
      clue: "First, say what you can see in the picture by itself. Then read the caption and find the words that tell something you cannot see.",
      why: "The answer is \"where the monarch is and where it is going.\" The caption says the monarch is in a Georgia garden on its long trip south. You cannot tell the place or the trip just by looking at the picture. The picture already shows the flower and the wings, and the caption says nothing about birds." }
  ]
});

PP.addLesson({
  code: "3.T.C.1.c",
  title: "Making posters and slides with words, pictures and sound",
  teach: {
    big: "When you make a poster or a slide, choose words, pictures and sounds that work together to help your reader.",
    points: [
      "First decide your purpose and your audience. Who will look at it, and what should they learn or do?",
      "Pick a picture that matches your words. A picture that is about something else will confuse the reader.",
      "Write a caption that tells what the picture shows. Keep it short and clear.",
      "Add labels to point out the parts a reader should notice.",
      "A sound can help, like an animal call on a slide about that animal. Use it only if it fits the topic."
    ],
    words: [
      { term: "caption", means: "a short sentence that tells what a picture shows" },
      { term: "label", means: "a word or two with a line that names part of a picture" },
      { term: "multimodal", means: "using more than one way to share, like words with pictures or sound" }
    ],
    example: {
      label: "A slide that works",
      lines: [
        "Title: Hummingbirds Hover",
        "Picture: a hummingbird staying still in the air beside a red flower",
        "Caption: A hummingbird hovers while it drinks.",
        "Sound: the hum of its fast-beating wings"
      ],
      note: "The title, picture, caption and sound all point to the same idea: hummingbirds can stay still in the air. Nothing on the slide is off topic."
    },
    tip: "On the test, you may be asked which picture, caption, label or sound fits a student's poster or slide best. Pick the one that matches the words and helps that audience."
  },
  learn: [
    {
      show: ["Lena is making a poster to get kids to join the school recycling club.", "Her poster says: Join the Green Team! We meet on Wednesdays in Room 5."],
      ask: "Which picture fits Lena's poster best: a bin full of cans and paper, a bowl of fruit, or a beach at sunset?",
      steps: [
        "Find the purpose. Lena wants kids to join a recycling club.",
        "A good picture matches the words and the purpose.",
        "A recycling bin shows what the club does. Fruit and a beach do not."
      ],
      answer: "A bin full of cans and paper fits best, because it shows what the recycling club does."
    },
    {
      show: ["Malik is making a slide called \"My Dog, Pepper.\"", "He has a photo of Pepper asleep on a pile of clean towels."],
      ask: "What is a good caption for Malik's photo?",
      steps: [
        "A caption tells what the picture shows.",
        "Name who is in the picture and what is happening: Pepper is sleeping on towels.",
        "Keep it short so the reader can read it fast."
      ],
      answer: "A good caption is \"Pepper takes a nap on the clean towels.\""
    }
  ],
  write: {
    prompt: "Make a poster that teaches younger kids about an animal you like. On paper, draw one picture and add one label to it. Here, write your title, a caption for your picture, and one or two fact sentences. Then add one sound idea, or show your poster to a younger reader and tell them about it.",
    checklist: [
      "I wrote a title that tells what my poster is about.",
      "I drew a picture on paper that matches my words, with one label.",
      "I wrote a caption that tells what the picture shows.",
      "I used words that younger kids can understand.",
      "I added a label or a sound that helps my reader."
    ],
    rows: 8
  },
  parent: "Make a simple poster or a card together for a family event. Ask your child which picture fits best, what the caption should say, and who will read it.",
  passages: [
    { id: "p1", title: "Kenji's Slide Show Plan", genre: "Student draft (slide show)",
      paragraphs: [
        ["Kenji is making a slide show about peanuts.", "His audience is the other students in his third-grade class.", "Here are the words he plans to put on his slides."],
        ["## Slide 1: Georgia Peanuts"],
        ["Georgia grows more peanuts than any other state.", "Many peanut farms are in the southern part of the state."],
        ["## Slide 2: Flowers Above, Peanuts Below"],
        ["A peanut plant has small yellow flowers.", "After a flower fades, a stalk called a peg grows down into the soil.", "The peanut grows at the end of that peg, under the ground."],
        ["## Slide 3: Harvest Time"],
        ["In the fall, farmers use a machine to dig up the plants.", "The plants are turned upside down so the peanuts can dry in the sun.", "After a few days, another machine picks the peanuts off the plants."],
        ["## Slide 4: Not Really a Nut"],
        ["Peanuts are not true nuts.", "They are in the same plant family as beans and peas."]
      ] },
    { id: "p2", title: "Amara's Poster Plan", genre: "Student draft (poster)",
      paragraphs: [
        ["Amara is making a poster about spring peepers for the first graders at her school.", "The poster will hang in the hall near the school's nature trail.", "Here is what she plans to write."],
        ["## Listen for Spring Peepers!"],
        ["Spring peepers are tiny frogs.", "One could sit on your thumb."],
        ["## Look for the X"],
        ["A spring peeper is brown or tan.", "It has a dark mark shaped like an X on its back."],
        ["## Hear Them Sing"],
        ["In late winter and early spring, peepers sing at night near ponds.", "Each male puffs up a bubble of skin under his chin to make a loud peep.", "When many peepers sing together, it sounds like sleigh bells."],
        ["Box: Quiet, please!", "Peepers stop singing when they hear someone coming."]
      ] }
  ],
  practice: [
    { id: "SK-TC1c-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Kenji's audience is his classmates, and they have never heard the word peg. Which change to Slide 2 would help THESE readers most?",
      choices: [
        { text: "a drawing of the stalk going into the soil, with a label on it", correct: true },
        { text: "a photo of a jar of peanut butter on a kitchen table" },
        { text: "a chart that shows how many peanuts each state grows" },
        { text: "a sentence telling that peanuts are in the same family as peas" }
      ],
      clue: "Think about what Kenji's audience does not know yet. Which choice would help a reader understand a brand-new word?",
      why: "The answer is \"a drawing of the stalk going into the soil, with a label on it.\" The label would say peg. Kenji's classmates do not know what a peg is, so a labeled drawing shows them exactly what the word names. The peanut butter photo and the chart are about peanuts, but they do not help these readers understand the peg. The sentence about peas belongs on Slide 4." },
    { id: "SK-TC1c-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Kenji has a photo of peanut plants lying upside down in a field. Which caption should he put under it on Slide 3?",
      choices: [
        { text: "Peanut plants dry in the sun after they are dug up.", correct: true },
        { text: "Peanut plants grow small yellow flowers in summer." },
        { text: "Georgia grows more peanuts than any other state." },
        { text: "A peanut is in the same family as beans and peas." }
      ],
      clue: "A caption tells what the picture shows. Why would plants be upside down? Look at Slide 3.",
      why: "The answer is \"Peanut plants dry in the sun after they are dug up.\" Slide 3 says the plants are turned upside down so the peanuts can dry. The caption matches the photo and the slide." },
    { id: "SK-TC1c-P3", type: "ms", points: 2, dok: 2, passages: ["p1"], pick: 2,
      prompt: "Kenji will put a diagram of a peanut plant on Slide 2. Which two labels should he add? Pick two.",
      choices: [
        { text: "yellow flower", correct: true },
        { text: "peanut under the soil", correct: true },
        { text: "bean pod" },
        { text: "digging machine" },
        { text: "cotton boll" }
      ],
      clue: "Labels name parts of the thing in the diagram. Which choices are parts of a growing peanut plant that Slide 2 tells about?",
      why: "The answers are \"yellow flower\" and \"peanut under the soil.\" Both are parts of the growing plant that Slide 2 describes. A bean pod belongs on Slide 4, a digging machine on Slide 3, and a cotton boll grows on a cotton plant, not a peanut plant." },
    { id: "SK-TC1c-P4", type: "mc", points: 1, dok: 3, passages: ["p1"],
      prompt: "Which picture would fit Slide 4 best?",
      choices: [
        { text: "a peanut, a bean pod and a pea pod side by side", correct: true },
        { text: "a field of peanut plants at harvest time" },
        { text: "a map that shows where peanuts grow" },
        { text: "a close-up of a small peanut flower" }
      ],
      clue: "Read the words on Slide 4. What does Kenji want the class to compare?",
      why: "The answer is a peanut, a bean pod and a pea pod side by side. Slide 4 says peanuts are in the same family as beans and peas, so showing them together helps the class see how alike they are." },
    { id: "SK-TC1c-P5", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Kenji wants to play a short sound with one slide. Choose the sound that best fits Slide 3.",
      text: "On Slide 3, Kenji should play {0}.",
      slots: [
        { options: ["the rumble of a farm machine digging", "bees buzzing around yellow flowers", "rain falling on a peanut field"], answer: 0 }
      ],
      clue: "A sound should match what the slide is about. What is happening on Slide 3?",
      why: "The answer is the rumble of a farm machine digging. Slide 3 tells how machines dig up and pick the peanuts, so that sound matches the words." }
  ],
  test: [
    { id: "SK-TC1c-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Amara wants one big picture in the middle of her poster. Which picture would fit best?",
      choices: [
        { text: "a tiny brown frog with a dark X on its back", correct: true },
        { text: "a big green frog sitting on a lily pad" },
        { text: "a pond covered in snow and thin ice" },
        { text: "a child picking flowers on a sunny day" }
      ],
      clue: "The picture should match the facts on the poster. What does a spring peeper look like?",
      why: "The answer is a tiny brown frog with a dark X on its back. The poster says peepers are tiny, brown or tan, and have an X on their backs. A big green frog would teach the wrong thing." },
    { id: "SK-TC1c-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Amara has a photo of a peeper with a puffed-up bubble under its chin. Which caption fits the photo best?",
      choices: [
        { text: "A male peeper puffs up to make a loud peep.", correct: true },
        { text: "Peepers are brown or tan with a dark X." },
        { text: "Peepers stop singing when you come near." },
        { text: "The nature trail starts behind the school." }
      ],
      clue: "A caption tells what is happening in the photo. Find the part of the poster that explains the bubble.",
      why: "The answer is \"A male peeper puffs up to make a loud peep.\" The section \"Hear Them Sing\" says the bubble of skin under the chin is how a male makes his peep." },
    { id: "SK-TC1c-T3", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "Amara wants to add a button that plays a sound. Which sound would help the first graders most?",
      choices: [
        { text: "a recording of peepers singing at a pond", correct: true },
        { text: "a recording of crickets chirping at night" },
        { text: "a recording of rain falling on a pond" },
        { text: "a recording of frogs splashing into water" }
      ],
      clue: "The poster's title tells readers to listen for something. What would they need to hear to know it?",
      why: "The answer is a recording of peepers singing at a pond. The poster's title says \"Listen for Spring Peepers!\" so hearing the real sound helps first graders know what to listen for on the trail." },
    { id: "SK-TC1c-T4", type: "ms", points: 2, dok: 3, passages: ["p2"], pick: 2,
      prompt: "Amara's audience is first graders. Which two changes would make her poster easier for them to use? Pick two.",
      choices: [
        { text: "Make the title big so it is easy to see from far away.", correct: true },
        { text: "Add a drawing of the X mark with an arrow and the label \"Look for this!\"", correct: true },
        { text: "Add a fact about how many kinds of frogs live in Georgia." },
        { text: "Change the title to the frog's science name." },
        { text: "Take out the heading \"Look for the X.\"" }
      ],
      clue: "Young children read slowly and learn a lot from pictures. Which changes make the poster easier to see and use?",
      why: "The answers are making the title big and adding a drawing of the X mark with a label. A big title is easy to spot, and a labeled drawing shows first graders exactly what to look for. Extra facts, a hard science name or a missing heading would not make the poster easier for young readers." },
    { id: "SK-TC1c-T5", type: "dropdown", points: 2, dok: 2, passages: ["p2"],
      prompt: "Amara draws a peeper with two arrows. Choose the best label for each arrow.",
      text: "The arrow pointing to the frog's back should say {0}. The arrow pointing under the frog's chin should say {1}.",
      slots: [
        { options: ["dark X mark", "loud peep", "pond water"], answer: 0 },
        { options: ["bubble of skin for singing", "dark X mark", "tiny toes"], answer: 0 }
      ],
      clue: "A label names the exact part the arrow points to. Find what the poster says is on the back and under the chin.",
      why: "The answers are \"dark X mark\" for the back and \"bubble of skin for singing\" for under the chin. The poster says the X is on its back and the bubble under its chin makes the peep." }
  ]
});

PP.addLesson({
  code: "3.T.C.2.a",
  title: "Point of view: the narrator's view and yours",
  teach: {
    big: "The narrator is the voice telling the story. The narrator has a point of view, and I can have a different one.",
    points: [
      "A narrator's point of view is how the narrator thinks and feels about what happens. In a poem, the voice is called the speaker, and the speaker has a point of view too.",
      "Find the narrator's feeling words, like boring, ruined or the best. They tell you the narrator's view. Comparisons count, too: \"My knees shook like leaves\" shows the narrator is scared.",
      "You, the reader, may see things differently. Look at what actually happens, not only at what the narrator says. A narrator's view may change by the end, or it may stay the same even when a reader sees things another way.",
      "Different characters or speakers can see the same thing in different ways. One may love the rain while another hates it. Notice each one's view.",
      "To find the narrator, ask: Who is telling this? If the teller says I or we about themself, outside of quotation marks, the narrator is a character in the story. If not, the narrator is an outsider who tells about the characters by name or with he, she and they. Sometimes you need clues, like wings or a beak, to tell who the I is. A story can also have two parts, each told by a different narrator."
    ],
    words: [
      { term: "narrator", means: "the voice that tells the story" },
      { term: "point of view", means: "how someone sees and feels about something" },
      { term: "speaker", means: "the voice that tells a poem" },
      { term: "perspective", means: "another word for point of view: how someone sees and feels about something" }
    ],
    example: {
      label: "The narrator's view and what really happens",
      lines: ["I had to sit next to the new kid at lunch. Great. He gave me half of his cookie and told a joke about a talking sandwich. Still, I did not want to sit there."],
      note: "The narrator says \"Great\" in a grumpy way and did not want to sit there. But the new kid shares a cookie and tells a joke. A reader might think the new kid is kind and it was a good lunch, even though the narrator does not say so."
    },
    tip: "On the test, you may be asked how the narrator feels, which detail might make a reader feel differently, or who is telling the story. Find the narrator's feeling words, then check what really happens."
  },
  learn: [
    {
      show: ["My dog, Rex, is the best dog in the whole world. He brings me sticks and licks my face every morning."],
      ask: "Who is telling this, and how does the narrator feel about Rex?",
      steps: [
        "Look for I, me and my. This text uses my and me.",
        "That means the narrator is a character in the story. It is Rex's owner.",
        "Find the feeling words: the best dog in the whole world. The narrator loves Rex."
      ],
      answer: "Rex's owner is telling it, and the narrator thinks Rex is the best dog in the world."
    },
    {
      show: ["Tasha hated rainy Saturdays. She said rain ruined everything. But her little brother ran outside to stomp in every puddle, laughing the whole time."],
      ask: "How does Tasha see the rain? Could a reader see it another way?",
      steps: [
        "Find Tasha's feeling words: hated and ruined everything.",
        "Notice another view in the story. Her brother has fun in the rain.",
        "Think about your own view. You might agree with Tasha, or you might think rain can be fun."
      ],
      answer: "Tasha thinks rain ruins Saturdays. A reader might think, like her brother, that rain can be fun."
    },
    /* B1 (expansion 2026-10-22): models two narrators, what a second narrator adds, and the reader's own view. */
    {
      show: ["Part 1: I made breakfast in bed for Mom! The toast got a little black on one side, but I covered it with jam. I think it was the best surprise ever.", "Part 2: My son woke me at six o'clock with burned toast and a giant smile. Jam was dripping onto my blanket. Still, I ate every bite. It was the sweetest morning I've had all year."],
      ask: "Who tells each part? How do their views of the breakfast differ, and what do you think?",
      steps: [
        "Find the I in each part. In Part 1, the I makes breakfast for Mom, so a child is telling it. In Part 2, the I says \"my son,\" so Mom is telling it.",
        "Find each view. The child thinks it was the best surprise ever. Mom sees burned toast and dripping jam, but she still calls it the sweetest morning.",
        "Notice what Part 2 adds. Mom tells things the child left out, like the jam on the blanket.",
        "Decide your own view, and use a detail. You might think the toast was not great, but the surprise was kind."
      ],
      answer: "A child tells Part 1, and Mom tells Part 2. The child thinks the breakfast was perfect. Mom knows it was messy, but she loved it anyway. A reader might think the food was not great, but the kindness made it special."
    }
  ],
  parent: "While you read together, stop and ask: Who is telling this story? How do they feel? Do you agree? Try telling a family event from someone else's point of view, like the dog's.",
  passages: [
    { id: "p1", title: "The Yard Sale", genre: "Literary text",
      paragraphs: [
        ["Mom said my little brother, Dev, could help at our yard sale on Saturday.", "I knew right away that he would ruin everything."],
        ["Dev is six, and he talks to everybody.", "When the first family walked up our driveway, he ran over and told them all about his favorite toy truck.", "I rolled my eyes.", "Who wants to hear about a truck?"],
        ["But the family laughed and bought the truck.", "Then Dev showed an older woman our box of puzzles.", "He told her which ones had all their pieces.", "She bought three."],
        ["By noon, my table of books had sold only two books.", "Dev's blanket was almost empty.", "I told myself that he was just lucky."],
        ["When we counted the money, Dev had sold more than me.", "\"I guess talking to people helps,\" I said, very quietly.", "Dev grinned and said, \"Thanks for letting me help, Sis.\""]
      ] },
    { id: "p2", title: "The Slowest Morning", genre: "Literary text",
      paragraphs: [
        ["Grandpa woke me up before the sun on Saturday.", "\"The fish are waiting,\" he said.", "I did not care about fish.", "I cared about sleeping."],
        ["We sat in his little boat in the middle of the lake behind his house.", "Fog floated over the water like a soft blanket.", "Grandpa handed me a pole and a worm.", "Then we waited.", "And waited."],
        ["A heron stood on one leg near the shore.", "Grandpa pointed at it and smiled, but I only yawned.", "To me, it was just a bird standing still, which was exactly what we were doing."],
        ["Grandpa poured warm cocoa into two cups and told me about fishing with his own father when he was my age.", "I thought it was the most boring morning of my whole life."],
        ["Then my pole jerked so hard I almost dropped it.", "I pulled and pulled, and a shiny fish flopped into the boat.", "Grandpa cheered.", "Okay, maybe the morning was a little bit fun."]
      ] },
    /* B1 (expansion 2026-10-22): p3-p5 are used only by core (p3 set 1, p4 set 2, p5 set 3).
       Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "Ms. Pruitt's Corner", genre: "Literary text",
      paragraphs: [
        ["Ms. Pruitt is the crossing guard at the corner by our school, and she is the grumpiest person in town.", "Every morning, she stands in her orange vest and watches us ride our bikes."],
        ["\"Walk your bikes across!\" she calls whenever we zoom up to the corner.", "My friend Lamar says she just likes to boss kids around.", "I think so, too."],
        ["Last Tuesday, my bike chain popped off right in the middle of the crosswalk.", "Ms. Pruitt held up her stop sign until every car stopped.", "Then she pushed my bike to the curb and put the chain back on.", "She even wiped the grease off my hands with a tissue."],
        ["\"Cars come around that corner fast,\" she said.", "\"I don't want to see any of you get hurt.\""],
        ["Then she went back to her spot on the corner.", "She didn't smile at me once.", "See? Grumpy."]
      ] },
    { id: "p4", title: "The Big Red Chair", genre: "Literary text",
      paragraphs: [
        ["## Part 1"],
        ["I do not like haircuts.", "The clippers buzz like angry bees, and little hairs tickle my neck.", "On Saturday, Mom walked me into Mr. Odom's barbershop anyway."],
        ["I climbed into the big red chair and held on to the arms.", "In the mirror, my face looked like I was about to get a shot.", "I was sure I would come out looking silly."],
        ["## Part 2"],
        ["The boy in my chair that morning held on so tight that his arms shook.", "I have cut hair on this street for thirty years, and I know a nervous customer when I see one."],
        ["So I told him about the time a sparrow flew into my shop and landed on a man's head.", "He laughed so hard that he forgot to hold on.", "After that, he sat as still as a statue.", "That's a brave boy, I thought."],
        ["When I turned the chair toward the mirror, he touched his new haircut and grinned.", "\"Same time next month, Darius?\" I asked.", "\"Maybe,\" he said.", "He was still grinning when his mom paid."]
      ] },
    { id: "p5", title: "Bath Day", genre: "Poem", lexile: "not measured (poem)",
      paragraphs: null,
      lines: [
        ["They say the word. I know that word.", "I've heard it all before.", "I tuck my tail and slink away", "to hide behind the door."],
        ["They find me there and lift me up.", "My paws kick at the air.", "The water's warm, the soap is pink,", "and bubbles everywhere!"],
        ["They scrub behind my floppy ears", "and giggle when I shake.", "Why smell like flowers? Mud is best!", "This bath is a mistake."],
        ["Now I am wrapped up in a towel.", "They say, \"You smell so sweet!\"", "As soon as they let go of me,", "I'll find some mud. A treat!"]
      ] },
    /* Expansion 2026-10-22 (batch SIM-1): p6 to p9 are used only by similar items. NEEDS INDEPENDENT REVIEW. */
    { id: "p6", title: "The Orange Sweater", genre: "Literary text",
      paragraphs: [
        ["For my birthday, Grandma gave me a sweater she knitted herself.", "It was bright orange with a green stripe, and it itched my neck like a bunch of ants."],
        ["\"Try it on!\" Grandma said.", "She hummed a tune and clapped her hands.", "I pulled it over my head, and everyone in the room smiled at me.", "I wanted to disappear."],
        ["\"You look wonderful,\" Grandma beamed.", "I thought I looked like a traffic cone."],
        ["On Monday, the wind howled, and the air turned freezing.", "At recess, everyone else shivered by the fence.", "I was the only one still warm.", "\"Nice sweater,\" my friend Teo said, and he stood close to me out of the wind."],
        ["That night, I called Grandma.", "\"Thanks for the sweater,\" I said.", "\"It's the warmest thing I own.\"", "I could hear her grin through the phone."]
      ] },
    { id: "p7", title: "The Substitute", genre: "Literary text",
      paragraphs: [
        ["Our teacher, Ms. Hale, was out sick, and a substitute walked in.", "Mr. Gage stood tall and stern like a statue.", "\"No talking,\" he said.", "I decided right then that he was the strictest teacher alive."],
        ["At recess, my pencil snapped.", "Mr. Gage sharpened it for me and set it on my desk.", "Then he told the class a joke about a goat that wore a hat, and everybody laughed."],
        ["At the end of the day, he gave each of us a sticker.", "Mine said, \"Great job.\"", "I put it in my pocket and shrugged.", "A sticker doesn't change a thing.", "Mr. Gage is still the strictest teacher alive."]
      ] },
    { id: "p8", title: "The Dentist's Chair", genre: "Literary text",
      paragraphs: [
        ["## Part 1"],
        ["I do not like going to the dentist.", "The big chair tips back like a spaceship seat, and the bright light shines right in my eyes."],
        ["On Tuesday, Mom walked me into Dr. Amoah's office anyway.", "I gripped the arms of the chair and stared at the ceiling.", "I was sure it was going to hurt."],
        ["## Part 2"],
        ["I have cleaned children's teeth for thirty years, and I know a worried patient when I see one.", "The girl in my chair gripped the arms so tight that her knuckles turned pale."],
        ["So I told her about the parrot at my cousin's house that shouted, \"Open wide!\" whenever I visited.", "She listened with wide eyes and let go of the arms."],
        ["When I handed her the mirror, she smiled at her sparkling teeth.", "\"See you in six months, Zadie?\" I asked.", "\"Okay,\" she said."]
      ] },
    { id: "p9", title: "Puddle Day", genre: "Poem", lexile: "not measured (poem)",
      paragraphs: null,
      lines: [
        ["The morning's wet, the worms are near.", "I tilt my head. I use my ear.", "I poke my beak into the ground", "and pull one up without a sound."],
        ["A puddle! Splash! I flap my wings", "and sprinkle drops on all the things.", "My nest is wet. My feathers, too!", "What a perfect day! Cheep, cheep! Woo-hoo!"],
        ["The clouds pull back. The sun comes through.", "I fluff my feathers, bright and new.", "Tomorrow I will hunt once more", "for worms along the garden floor."]
      ] }
  ],
  practice: [
    { id: "SK-TC2a-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "Who is telling this story?",
      choices: [
        { text: "Dev's big sister", correct: true },
        { text: "Dev" },
        { text: "Mom" },
        { text: "someone outside the story" }
      ],
      clue: "Look for I and my in paragraph 1. Then look at what Dev calls the narrator at the end.",
      why: "The answer is Dev's big sister. The narrator says \"my little brother, Dev,\" and Dev calls her \"Sis\" at the end. She uses I and my, so the narrator is a character in the story, not an outsider." },
    { id: "SK-TC2a-P2", type: "hottext", points: 2, dok: 2, passages: ["p1"],
      prompt: "Which two sentences show how the narrator feels about Dev at the start of the story? Choose two sentences.",
      targets: ["p1:1:1", "p1:1:2", "p1:2:1", "p1:2:3", "p1:3:1"],
      answer: ["p1:1:2", "p1:2:3"], pick: 2,
      clue: "Look for what the narrator thinks or does, not just facts about Dev.",
      why: "The answers are \"I knew right away that he would ruin everything.\" and \"I rolled my eyes.\" Both show the narrator is annoyed with Dev and expects him to cause trouble." },
    { id: "SK-TC2a-P3", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "The narrator says Dev is just lucky. What can a reader tell that the narrator does not say?",
        choices: [
          { text: "Dev sells a lot because he is friendly and helpful.", correct: true },
          { text: "Dev sells a lot because his toys are brand new." },
          { text: "Dev sells a lot because Mom tells people to buy." },
          { text: "Dev sells a lot because he gives things away free." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"He told her which ones had all their pieces.\"", correct: true },
          { text: "\"Mom said my little brother, Dev, could help at our yard sale on Saturday.\"" },
          { text: "\"By noon, my table of books had sold only two books.\"" },
          { text: "\"I told myself that he was just lucky.\"" }
        ] },
      clue: "Look at what Dev actually does with each buyer in paragraphs 2 and 3. Is that luck?",
      why: "Part A: Dev sells a lot because he is friendly and helpful. Part B: \"He told her which ones had all their pieces.\" Dev talks to buyers and gives helpful information. The narrator calls it luck, but the reader can see it is more than that." },
    { id: "SK-TC2a-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the poem. How is the speaker's view of the snow different from the sister's view?",
      stem: ["The snow fell softly all night long,", "and school is closed today.", "My sister frowns out at the yard,", "but I can't wait to play!"],
      choices: [
        { text: "The speaker is excited about the snow, but the sister is unhappy about it.", correct: true },
        { text: "The speaker and the sister are both excited to go out and play." },
        { text: "The speaker is sad that school is closed, but the sister is glad." },
        { text: "The speaker and the sister are both upset about the snow." }
      ],
      clue: "In a poem, the voice is called the speaker. Find what the sister's face does. Then find what the speaker says about playing.",
      why: "The answer is \"The speaker is excited about the snow, but the sister is unhappy about it.\" The sister frowns, which shows she is not happy. The speaker says \"I can't wait to play!\" which shows excitement. The two people see the same snow in different ways, so the choices that say they feel the same are wrong, and nothing shows the speaker is sad." },
    { id: "SK-TC2a-P5", type: "mc", points: 1, dok: 3, passages: ["p1"],
      prompt: "How does the narrator's view change by the end of the story?",
      choices: [
        { text: "She starts to see that Dev's talking helped.", correct: true },
        { text: "She decides Dev should never help again." },
        { text: "She thinks the yard sale was a waste of time." },
        { text: "She still thinks Dev ruined everything." }
      ],
      clue: "Compare paragraph 1 with paragraph 5. What does the narrator admit at the end?",
      why: "The answer is \"She starts to see that Dev's talking helped.\" At the start, she thinks he will ruin everything. At the end, she quietly says, \"I guess talking to people helps.\"" }
  ],
  /* ---------- B1 core (expansion 2026-10-22, author b1b; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five. { ref } reuses Try item P5 by id. Try item P4 (the snow poem)
     is NOT in core: form A item T6 uses the same frame, so P4 now sits in Practice Together with
     P1-P3 (the engine shows practice minus refs there). Hints and Show me how for P1-P5 are in addons.
     C12 is a constructed response (type "cr", never scored; 01 §2.2.2).
     Author log: docs/expansion-2026-10-22/batches/B1-b1b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { id: "SK-TC2a-C01", type: "ms", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: ["p1"], pick: 2,
        prompt: "Dev and the narrator see the yard sale in different ways. Which TWO details show how Dev himself feels about the yard sale?",
        choices: [
          { text: "He runs over to tell the first family about his truck.", correct: true },
          { text: "He grins and thanks his sister for letting him help.", correct: true },
          { text: "His sister tells herself that he was just lucky." },
          { text: "His sister rolls her eyes when he talks about the truck." },
          { text: "His blanket is almost empty by the middle of the day." }
        ],
        clue: "A character's point of view is how that character thinks and feels. Look at what Dev himself does and says, not at what his sister thinks about him.",
        hints: [
          "A character's point of view is how that character thinks and feels. Look at what Dev himself does and says, not at what his sister thinks about him.",
          "Skim the story for each time Dev acts or speaks. Choose two.",
          "Calling Dev lucky is the sister's thought about him, not Dev's own feeling. Check the other choices: does each one show how Dev feels, or is it a fact about the sale or about his sister?"
        ],
        how: [
          "Dev runs over to tell the first family about his truck. That shows he is eager and happy to be there.",
          "At the end, Dev grins and says, \"Thanks for letting me help, Sis.\" He enjoyed helping.",
          "The answers are \"He runs over to tell the first family about his truck.\" and \"He grins and thanks his sister for letting him help.\"",
          "Calling him lucky and rolling her eyes show the sister's view. An almost empty blanket is a fact about the sale, not a feeling."
        ],
        misconception: "A common mix-up is choosing what the narrator thinks about a character. A character's own view comes from what that character says and does.",
        why: "The answers are \"He runs over to tell the first family about his truck.\" and \"He grins and thanks his sister for letting him help.\" Both show Dev is eager and glad to help. Calling him lucky and rolling her eyes are his sister's view, and the empty blanket is a fact about the sale." },
      { ref: "SK-TC2a-P5" },
      { id: "SK-TC2a-C03", type: "mc", points: 1, dok: 1, std: ["3.T.C.2.a"], passages: [],
        stem: ["The bus bumped along the road to the state park.", "\"I hope we see a deer!\" Rico said.", "His friend Ava pressed her nose to the window and smiled.", "Ms. Hart counted heads one more time."],
        prompt: "Read the part of a story in the box. Who is telling it?",
        choices: [
          { text: "someone outside the story", correct: true },
          { text: "Rico, a boy on the bus" },
          { text: "Ava, Rico's friend" },
          { text: "Ms. Hart, the teacher" }
        ],
        clue: "To find who is telling it, look for I or we. Those words show the teller is a character only when they are not inside quotation marks.",
        hints: [
          "To find who is telling it, look for I or we. Those words show the teller is a character only when they are not inside quotation marks.",
          "Look at each I in the box. Is it inside quotation marks or not?",
          "Rico says I, but only inside quotation marks, where he is talking. Check how the other sentences talk about the people on the bus."
        ],
        how: [
          "The only I is inside quotation marks. That is Rico talking, not the narrator telling the story.",
          "The other sentences call everyone by name or by his and her: Rico said, his friend Ava, Ms. Hart counted.",
          "The teller never says I or we outside quotation marks. The answer is \"someone outside the story.\""
        ],
        misconception: "A common mix-up is choosing a character who says I inside quotation marks. Words inside quotation marks are a character talking, not the narrator.",
        why: "The answer is \"someone outside the story.\" The only I is inside quotation marks, where Rico is talking. Everything else tells about Rico, Ava and Ms. Hart by name or with his and her, so the teller is outside the story." },
      { id: "SK-TC2a-C04", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: [],
        stem: ["My big sister, Renee, is the bossiest person I know.", "Every night, she makes me pack my backpack before bed.", "\"Put your library book in first,\" she says.", "This morning, my library book was right where I needed it.", "I was the only one in my class who remembered to bring back a library book.", "Still, I think Renee just likes giving orders."],
        prompt: "Read the part of a story in the box. Then choose the best answer for each blank.",
        text: "The narrator thinks Renee gives the backpack orders because she {0}. A reader might think she gives them because she {1}.",
        slots: [
          { options: ["likes giving orders", "wants the narrator to be ready for school", "wants to borrow the library book"], answer: 0 },
          { options: ["wants the narrator to be ready for school", "likes giving orders", "wants to borrow the library book"], answer: 0 }
        ],
        clue: "The teller's view is what the teller says and thinks. A reader's view comes from what actually happens, even when the teller does not say it.",
        hints: [
          "The teller's view is what the teller says and thinks. A reader's view comes from what actually happens, even when the teller does not say it.",
          "For each blank, ask whose idea it is: is it what the narrator says, or what the story shows?",
          "Nothing in the story shows Renee wanting the library book for herself, so that idea fits neither blank. Test the other two ideas against the narrator's words and against what happens in the morning."
        ],
        how: [
          "The narrator calls Renee bossy and ends with \"I think Renee just likes giving orders.\" That is the narrator's view.",
          "But because Renee makes the narrator pack each night, the library book is ready, and the narrator is the only one in class who brings one back.",
          "So the first blank is \"likes giving orders\" and the second blank is \"wants the narrator to be ready for school.\"",
          "Nothing shows that Renee wants the book for herself."
        ],
        misconception: "A common mix-up is putting the reader's view in the narrator's blank. The narrator tells only what the narrator thinks; a reader also sees what happens.",
        why: "The answers are \"likes giving orders\" and \"wants the narrator to be ready for school.\" The narrator says Renee just likes giving orders. But her nightly orders mean the library book is ready in the morning, so a reader might think she wants the narrator to be ready. Nothing shows she wants the book." },
      { id: "SK-TC2a-C05", type: "ebsr", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: ["p3"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "At the end of the story, how does the narrator see Ms. Pruitt?",
          choices: [
            { text: "Ms. Pruitt is still a grump.", correct: true },
            { text: "Ms. Pruitt is kind and cares about kids." },
            { text: "Ms. Pruitt is the best guard in town." },
            { text: "Ms. Pruitt is too busy to help anyone." }
          ] },
        partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
          choices: [
            { text: "\"See? Grumpy.\"", correct: true },
            { text: "\"She even wiped the grease off my hands with a tissue.\"" },
            { text: "\"Then she went back to her spot on the corner.\"" },
            { text: "\"Then she pushed my bike to the curb and put the chain back on.\"" }
          ] },
        clue: "The narrator's view is what the narrator says or thinks, even when the story shows something else. Look at the narrator's own words, not only at what Ms. Pruitt does.",
        hints: [
          "The narrator's view is what the narrator says or thinks, even when the story shows something else. Look at the narrator's own words, not only at what Ms. Pruitt does.",
          "Reread the last paragraph.",
          "Wiping the grease off the narrator's hands is something Ms. Pruitt does. It may change how a reader sees her, but Part A asks about the narrator. Test the other choices against the narrator's own words."
        ],
        how: [
          "In paragraphs 3 and 4, Ms. Pruitt stops the cars and fixes the chain. These actions might make a reader see her another way.",
          "But the narrator ends with \"See? Grumpy.\" The narrator still sees her the way paragraph 1 does.",
          "Part A: Ms. Pruitt is still a grump. Part B: \"See? Grumpy.\"",
          "Her helpful actions can shape a reader's view, not the narrator's. Going back to her spot is only what she does. Nothing calls her the best guard or too busy to help."
        ],
        misconception: "A common mix-up is thinking the narrator must change when the reader's view changes. Here the narrator's view stays the same.",
        why: "Part A: Ms. Pruitt is still a grump. Part B: \"See? Grumpy.\" Even after she stops the cars and fixes the chain, the narrator ends by calling her grumpy. Her helpful actions might change a reader's view, but they do not change the narrator's." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TC2a-C06", type: "ms", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: ["p4"], pick: 2,
        prompt: "Part 2 of the story has a new narrator. Which TWO clues show this?",
        choices: [
          { text: "In Part 2, the boy getting the haircut is called he.", correct: true },
          { text: "The I in Part 2 has cut hair on this street for thirty years.", correct: true },
          { text: "The narrator in Part 2 uses the word I." },
          { text: "Part 2 tells a funny story about a sparrow." },
          { text: "Part 2 happens on the same Saturday morning." }
        ],
        clue: "Each part of a story can have its own narrator. To check, ask who the I is in each part, and what that I does.",
        hints: [
          "Each part of a story can have its own narrator. To check, ask who the I is in each part, and what that I does.",
          "Read the first paragraph of Part 1 and the first paragraph of Part 2. Compare how each one talks about the boy.",
          "Both parts use the word I, so using I does not show that the narrator has changed. Check the other clues: which ones could be true only if someone new is telling Part 2?"
        ],
        how: [
          "In Part 1, the boy says I: \"I do not like haircuts.\"",
          "In Part 2, the boy is called he: \"He laughed so hard that he forgot to hold on.\" And the I has cut hair on this street for thirty years, so the I is the barber, Mr. Odom.",
          "The answers are \"In Part 2, the boy getting the haircut is called he.\" and \"The I in Part 2 has cut hair on this street for thirty years.\"",
          "Both parts use I, and the sparrow story and the day do not tell who is talking."
        ],
        misconception: "A common mix-up is thinking the I is the same person all the way through. In a story with two parts, check who the I is in each part.",
        why: "The answers are \"In Part 2, the boy getting the haircut is called he.\" and \"The I in Part 2 has cut hair on this street for thirty years.\" In Part 1 the boy is the I; in Part 2 he is called he, and the I is the barber. Both parts use I, and the sparrow and the day do not show who is telling." },
      { id: "SK-TC2a-C07", type: "match", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: ["p4"],
        prompt: "Darius and Mr. Odom see the haircut in different ways. Match each idea to the person who thinks it.",
        cols: ["Darius, in Part 1", "Mr. Odom"],
        rows: [
          { text: "The clippers sound like angry bees.", answer: 0 },
          { text: "A nervous customer needs something to laugh about.", answer: 1 },
          { text: "This haircut will make me look silly.", answer: 0 },
          { text: "The boy in the chair is brave.", answer: 1 }
        ],
        clue: "Characters can see the same thing in different ways. To match each idea, ask who in the story would think it.",
        hints: [
          "Characters can see the same thing in different ways. To match each idea, ask who in the story would think it.",
          "Part 1 tells what Darius thinks before the haircut. Part 2 tells what the barber notices and thinks.",
          "Mr. Odom never says the clippers bother him, so the idea about the clippers' sound is not his. Sort the other ideas the same way: whose words or thoughts in the story match each one?"
        ],
        how: [
          "Part 1: Darius says the clippers buzz like angry bees and the hairs tickle, and he is sure he will come out looking silly. Those two ideas are his.",
          "Part 2: Mr. Odom knows a nervous customer when he sees one, so he tells a funny story to help. The idea about something to laugh about is his.",
          "He also thinks, \"That's a brave boy.\" That idea is his, too.",
          "The two see the same haircut in different ways: Darius thinks about how it feels and how he will look, and Mr. Odom sees a nervous boy who needs help to relax."
        ],
        misconception: "A common mix-up is giving every idea to the narrator you met first. Check whose words or thoughts each idea matches.",
        why: "Darius thinks the clippers sound like angry bees and that this haircut will make him look silly. Mr. Odom thinks a nervous customer needs something to laugh about, which is why he tells the sparrow story, and he thinks the boy is brave." },
      { id: "SK-TC2a-C08", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.a"], passages: ["p4"],
        prompt: "In Part 1, Darius says, \"In the mirror, my face looked like I was about to get a shot.\" What does this tell you about how he sees the haircut?",
        choices: [
          { text: "He expects it to be scary and unpleasant.", correct: true },
          { text: "He thinks the clippers will poke him like a needle." },
          { text: "He thinks Mr. Odom will give him a shot." },
          { text: "He is excited to see how he will look." }
        ],
        clue: "Narrators often show their view with a comparison. Ask how a person usually feels at the moment being compared.",
        hints: [
          "Narrators often show their view with a comparison. Ask how a person usually feels at the moment being compared.",
          "Reread the sentences just before and after this one in Part 1.",
          "Darius is in a barbershop, so nobody is really going to give him a shot. Ask what the comparison tells about his feelings, then test the choices that are left."
        ],
        how: [
          "Most kids feel nervous or scared right before a shot.",
          "Darius says his face looked like that, and the next sentence says he was sure he would come out looking silly.",
          "So he expects the haircut to be scary and unpleasant. The answer is \"He expects it to be scary and unpleasant.\"",
          "Nobody is giving him a shot, nothing says the clippers poke, and nothing in Part 1 shows he is excited."
        ],
        misconception: "A common mix-up is reading a comparison as if it really happened. A comparison shows how the narrator feels.",
        why: "The answer is \"He expects it to be scary and unpleasant.\" Darius compares his face to a kid about to get a shot, which shows he dreads the haircut. He is in a barbershop, so no one is giving him a shot, nothing says the clippers poke, and nothing in Part 1 shows he is excited." },
      { id: "SK-TC2a-C09", type: "hottext", points: 1, dok: 2, std: ["3.T.C.2.a"], passages: ["p4"],
        prompt: "In Part 1, Darius is sure he will come out looking silly. Which sentence in Part 2 shows that he is pleased with how he looks after all? Choose the sentence in the passage.",
        targets: ["p4:5:1", "p4:6:2", "p4:6:3", "p4:6:4", "p4:7:1", "p4:7:2", "p4:7:3"],
        answer: ["p4:7:1"], pick: 1,
        clue: "A character's view can change. Look for what the character does once he can see how things came out.",
        hints: [
          "A character's view can change. Look for what the character does once he can see how things came out.",
          "Look at the end of Part 2, after the barber is done.",
          "Laughing at the sparrow story shows Darius is less nervous during the haircut, but it is not about how he looks. Check each sentence that is left against the question."
        ],
        how: [
          "In Part 1, Darius is sure he will come out looking silly.",
          "At the mirror, he touches his new haircut and grins. A grin at the mirror shows he likes what he sees.",
          "The answer is \"When I turned the chair toward the mirror, he touched his new haircut and grinned.\"",
          "\"Maybe\" does not tell how he feels about the haircut, and \"Same time next month?\" is Mr. Odom's question. Laughing and sitting still happen before he sees it, and the brave thought is about how he sits, not how his hair looks."
        ],
        misconception: "A common mix-up is choosing a sentence from the middle of the haircut. The question asks how Darius feels about the finished haircut.",
        why: "The answer is \"When I turned the chair toward the mirror, he touched his new haircut and grinned.\" He grins at his new look, so he no longer thinks he looks silly. Laughing and sitting still happen before he sees the haircut, \"Maybe\" does not tell how he feels about it, and the brave thought is about how he sits, not how his hair looks." },
      { id: "SK-TC2a-C10", type: "mc", points: 1, dok: 3, std: ["3.T.C.2.a"], passages: ["p4"],
        prompt: "Why does the author have Mr. Odom tell Part 2 instead of Darius?",
        choices: [
          { text: "so readers can see how Darius looked to someone else, not only how he felt", correct: true },
          { text: "so readers can learn the steps for giving someone a haircut at home" },
          { text: "so readers can find out what Darius was thinking during the haircut" },
          { text: "so readers can tell that Darius was never really nervous" }
        ],
        clue: "When an author switches narrators, the new narrator can tell things the first one cannot. Ask what Part 2 shows that Part 1 does not.",
        hints: [
          "When an author switches narrators, the new narrator can tell things the first one cannot. Ask what Part 2 shows that Part 1 does not.",
          "Compare what Part 1 can tell the reader with what Part 2 can tell.",
          "Mr. Odom never tells how to cut hair step by step, so the story is not teaching that. Test the other choices against what Part 2 adds."
        ],
        how: [
          "Part 1 shows only what Darius himself thinks and feels before the haircut.",
          "Part 2 shows Darius from the outside: his arms shake, he laughs at the sparrow story, and he sits as still as a statue.",
          "The answer is \"so readers can see how Darius looked to someone else, not only how he felt.\"",
          "Part 2 gives no haircut steps. Mr. Odom cannot see inside Darius's head, so Part 2 does not tell his thoughts, and his shaking arms show he really was nervous."
        ],
        misconception: "A common mix-up is thinking a second narrator only repeats the story. A new narrator lets readers see things the first narrator could not.",
        why: "The answer is \"so readers can see how Darius looked to someone else, not only how he felt.\" Part 1 gives only Darius's own thoughts. Part 2 shows him from the outside, through the barber's eyes. It gives no haircut steps, it cannot show Darius's thoughts, and his shaking arms show he really was nervous." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TC2a-C11", type: "ms", points: 2, dok: 3, std: ["3.T.C.2.a"], passages: ["p5"], pick: 2,
        prompt: "The poem never says who the speaker is. Which TWO clues show that the speaker is an animal, not a child?",
        choices: [
          { text: "The speaker tucks a tail and slinks away.", correct: true },
          { text: "The speaker's paws kick at the air.", correct: true },
          { text: "The speaker hides behind the door." },
          { text: "The speaker does not want to smell like flowers." },
          { text: "The speaker is wrapped up in a towel." }
        ],
        clue: "When a poem does not name its speaker, use clues. Ask what the speaker has and does that only some creatures have or do.",
        hints: [
          "When a poem does not name its speaker, use clues. Ask what the speaker has and does that only some creatures have or do.",
          "Find each choice in the poem. For each one, ask: could a child in a bathtub do or have this, too? Choose two.",
          "Hiding behind the door is something a child could do, so it does not prove the speaker is an animal. Check the other choices the same way."
        ],
        how: [
          "Many lines could fit a child: hiding behind a door, not wanting to smell like flowers, being wrapped in a towel.",
          "Only an animal has a tail to tuck and paws to kick.",
          "The answers are \"The speaker tucks a tail and slinks away.\" and \"The speaker's paws kick at the air.\"",
          "So the speaker is an animal, most likely the family's dog: it also has floppy ears and loves mud. They are the people giving the bath."
        ],
        misconception: "A common mix-up is choosing a clue that fits more than one kind of speaker. The best clues fit only one.",
        why: "The answers are \"The speaker tucks a tail and slinks away.\" and \"The speaker's paws kick at the air.\" A child could hide behind a door, dislike smelling like flowers or be wrapped in a towel, but only an animal like a dog has a tail and paws." },
      { id: "SK-TC2a-C12", type: "cr", dok: 3, std: ["3.T.C.2.a"], passages: ["p5"], rows: 4,
        prompt: "How does the speaker feel about the bath? What do YOU think about it? Write two or three sentences. Use one detail from the poem to explain each view.",
        sample: "The speaker thinks the bath is a mistake, because the speaker hides behind the door and says mud is best. I think the bath is a good idea for the family. They say, \"You smell so sweet!\" and they giggle when the dog shakes, so they like the clean dog and have fun at bath time.",
        criteria: [
          "I told the speaker's view and a detail that shows it.",
          "I told my own view in my own words. I may agree or disagree.",
          "I used a detail from the poem to explain my view.",
          "I made clear which view is the speaker's and which view is mine."
        ],
        clue: "Your view can be different from the speaker's. First say what the speaker thinks, then say what you think.",
        hints: [
          "Your view can be different from the speaker's. First say what the speaker thinks, then say what you think.",
          "Find one detail in any stanza that shows the speaker's view, and one that helps explain what you think.",
          "You can start like this: The speaker thinks the bath is ___ because ___. I think ___ because in the poem ___."
        ],
        how: [
          "Find the speaker's view and a detail that shows it, such as hiding behind the door or saying mud is best.",
          "Decide your own view. You may agree or disagree, but say it in your own words.",
          "Pick one detail from the poem that supports your view. It can come from any stanza.",
          "Put it together: the speaker's view and its detail, then your view and its detail. One good answer follows. Other answers can also be right."
        ],
        why: "Many answers can be right. A good answer tells the speaker's view with a detail (hiding, kicking, \"Mud is best!\"), gives the writer's own view, and backs it up with a detail from the poem." },
      { id: "SK-TC2a-C13", type: "match", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: [],
        prompt: "Read each short part of a story. Does the teller show how they feel about what happens, or only tell what happens? Match each part.",
        cols: ["shows how the teller feels", "only tells what happens"],
        rows: [
          { text: "We finally reached the top of the hill, and the view was the best thing I have ever seen.", answer: 0 },
          { text: "The bus left the school at eight o'clock and got to the museum at nine.", answer: 1 },
          { text: "Mom's new soup smelled so awful that I held my nose the whole time.", answer: 0 },
          { text: "The puppy wagged its tail as Lena opened the gate.", answer: 1 }
        ],
        clue: "A narrator's view shows in feeling words, like best or awful, and in what the narrator does because of a feeling.",
        hints: [
          "A narrator's view shows in feeling words, like best or awful, and in what the narrator does because of a feeling.",
          "In each part, look for a word or an action that shows how the teller feels.",
          "The bus part tells only times and places, so it only tells what happens. Sort the other three parts the same way."
        ],
        how: [
          "The hill: \"the best thing I have ever seen\" shows the teller loves the view.",
          "The bus: only times and places, with no feeling, so it only tells what happens.",
          "The soup: \"so awful\" and holding a nose show the teller dislikes the smell.",
          "The puppy and Lena: it tells what happens, but no feeling of the teller's."
        ],
        misconception: "A common mix-up is thinking every story part shows the teller's view. Some parts only report what happens; look for feeling words.",
        why: "The hill (\"the best thing I have ever seen\") and the soup (\"so awful\", holding a nose) show how the teller feels. The bus times and the puppy at the gate only tell what happens." },
      { id: "SK-TC2a-C14", type: "mc", points: 1, dok: 3, std: ["3.T.C.2.a"], passages: [],
        stem: ["I am the best player on the Hawks.", "Today I scored zero goals, but that is only because nobody passed to me.", "Well, Tia passed to me two times, but the ball came too fast.", "Coach says I should practice stopping the ball with my foot.", "Coach does not know what she is talking about."],
        prompt: "Read the part of a story in the box. What might a reader think that the narrator does not?",
        choices: [
          { text: "The narrator could get better by practicing, as the coach says.", correct: true },
          { text: "The narrator really is the best player on the Hawks team." },
          { text: "Tia never passes the ball to the narrator during games." },
          { text: "The ball came too fast for anyone on the team to stop." }
        ],
        clue: "A reader can see things the narrator misses. Compare what the narrator says with what really happens.",
        hints: [
          "A reader can see things the narrator misses. Compare what the narrator says with what really happens.",
          "Look at what the narrator admits after the word Well.",
          "Being the best player is what the narrator says, not what a reader can see in the scene. Check the other choices against what really happens."
        ],
        how: [
          "The narrator says nobody passed, but then admits Tia passed two times.",
          "The narrator could not stop the fast ball, and the coach says to practice stopping the ball.",
          "A reader might think the narrator could get better by practicing. The answer is \"The narrator could get better by practicing, as the coach says.\"",
          "Being the best is only the narrator's view, and Tia did pass. \"The ball came too fast\" is the narrator's excuse; the coach's advice shows the narrator could learn to stop it."
        ],
        misconception: "A common mix-up is believing everything the narrator says. A reader checks the narrator's words against what really happens.",
        why: "The answer is \"The narrator could get better by practicing, as the coach says.\" The narrator blames others, but Tia did pass twice, and the narrator could not stop the ball. Being the best and the ball being too fast for anyone are only the narrator's claims, not what a reader sees: the coach says the narrator can practice stopping the ball." },
      { id: "SK-TC2a-C15", type: "ms", points: 2, dok: 3, std: ["3.T.C.2.a"], passages: [], pick: 2,
        stem: ["Keisha's journal: Today we made clay pots in art class. My hands got cold and sticky, and my pot leaned to one side like it was about to tip over. I can't wait to wash this clay off.", "Marco's journal: Today we made clay pots in art class! I loved squishing the cool clay between my fingers. My pot leans a little, but Mr. Diaz says that gives it character."],
        prompt: "Read the two journal entries in the box. Keisha and Marco write about the same art class. Which TWO sentences tell how their views are different?",
        choices: [
          { text: "Keisha dislikes how the clay feels, but Marco enjoys it.", correct: true },
          { text: "Keisha is unhappy that her pot leans, but Marco does not mind.", correct: true },
          { text: "Both of them made clay pots that lean to one side." },
          { text: "Marco wants to wash the clay off as fast as he can." },
          { text: "Keisha thinks Mr. Diaz likes her pot the best." }
        ],
        clue: "To compare two views, look at what each writer thinks about the same things.",
        hints: [
          "To compare two views, look at what each writer thinks about the same things.",
          "Read the two journals side by side, one sentence at a time. Choose two.",
          "Both pots lean, so that sentence tells how the two pots are alike, not how the views differ. Check the other sentences against both journals."
        ],
        how: [
          "Keisha's hands are cold and sticky, and she can't wait to wash the clay off. Marco loved squishing the cool clay.",
          "Keisha's pot leans like it is about to tip over. Marco's leans too, but he likes that it gives the pot character.",
          "The answers are \"Keisha dislikes how the clay feels, but Marco enjoys it.\" and \"Keisha is unhappy that her pot leans, but Marco does not mind.\"",
          "Both pots leaning is a way they are alike. Keisha, not Marco, wants to wash the clay off, and nothing says Mr. Diaz likes Keisha's pot best."
        ],
        misconception: "A common mix-up is choosing something true about both writers. A difference has to be true for one and not the other.",
        why: "The answers are \"Keisha dislikes how the clay feels, but Marco enjoys it.\" and \"Keisha is unhappy that her pot leans, but Marco does not mind.\" Both pots lean, which is a way they are alike. Keisha is the one who wants to wash the clay off, and Mr. Diaz talks only about Marco's pot." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. `like` lists only the core
     items each one really practises. */
  similar: [
    { id: "SK-TC2a-S01", type: "mc", points: 1, dok: 3, std: ["3.T.C.2.a"], passages: [],
      like: ["SK-TC2a-C04", "SK-TC2a-C14"],
      stem: ["Dear Aunt Rae,", "Mom made me go to the chess club at the library on Saturday. Chess is the most boring game ever invented. A girl named Grace showed me how the horse piece jumps over the others. Then I beat a fifth grader in my very first game, and everyone clapped. Anyway, I am probably not going back.", "Love, Jordan"],
      prompt: "Read the letter in the box. What might a reader think about the chess club that Jordan does not say?",
      choices: [
        { text: "Jordan had a good time and did well at chess.", correct: true },
        { text: "Chess club was boring for everyone who went." },
        { text: "Jordan wants Aunt Rae to take him back to chess club." },
        { text: "Jordan lost every game he played on Saturday." }
      ],
      clue: "A letter writer is a narrator, too. Compare what Jordan says about chess with what really happens at the club.",
      hints: [
        "A letter writer is a narrator, too. Compare what Jordan says about chess with what really happens at the club.",
        "Read the middle of the letter, between the first and the last sentences.",
        "Jordan calls chess boring, but that is Jordan's view, and the question asks what a reader might think. Check the other choices against what happens."
      ],
      how: [
        "Jordan says chess is boring and he is probably not going back.",
        "But Grace teaches him a move, he beats a fifth grader in his first game, and everyone claps.",
        "A reader might think Jordan had fun and did well. The answer is \"Jordan had a good time and did well at chess.\"",
        "Nothing shows others were bored, Jordan says he is probably not going back, and he won his first game."
      ],
      misconception: "A common mix-up is choosing the narrator's own view instead of what the details show a reader.",
      why: "The answer is \"Jordan had a good time and did well at chess.\" Jordan calls chess boring, but Grace helps him, he wins his first game and everyone claps. Nothing shows others were bored, Jordan says he is not going back, and he did not lose every game." },
    { id: "SK-TC2a-S02", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.a"], passages: [],
      like: ["SK-TC2a-C11", "SK-TC2a-C03"],
      stem: ["My roots dig deep beneath the yard.", "My branches reach up high.", "The children climb me after school", "and swing up toward the sky."],
      prompt: "Read the poem in the box. Who is the speaker?",
      choices: [
        { text: "a tree in the yard", correct: true },
        { text: "a child who climbs after school" },
        { text: "a bird that lives in the branches" },
        { text: "a narrator who is not in the poem" }
      ],
      clue: "When a poem does not name its speaker, use clues about what the speaker has and does.",
      hints: [
        "When a poem does not name its speaker, use clues about what the speaker has and does.",
        "Find what the speaker has and what the children do to it.",
        "The speaker says my and me, so the speaker is in the poem, not outside it. Check the other choices against the clues."
      ],
      how: [
        "The speaker says my roots dig deep and my branches reach up high.",
        "The children climb me, so the speaker is not one of the children.",
        "Only a tree has roots and branches. The answer is \"a tree in the yard.\"",
        "A bird might live in branches, but it does not have roots."
      ],
      misconception: "A common mix-up is choosing someone who appears in the poem, like the children, instead of the I who is speaking.",
      why: "The answer is \"a tree in the yard.\" The speaker has roots and branches, and the children climb it. The speaker says my and me, so it is not an outside narrator, and a bird has no roots." },
    { id: "SK-TC2a-S03", type: "ms", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: [], pick: 2,
      like: ["SK-TC2a-C15", "SK-TC2a-C07"],
      stem: ["Desmond and his grandma looked at the new mural on the library wall.", "\"It's so loud and bright that it hurts my eyes,\" Grandma said.", "Desmond grinned. \"It looks like a party! I could stare at it all day.\""],
      prompt: "Read the story in the box. Which TWO sentences tell how Desmond and Grandma see the mural differently?",
      choices: [
        { text: "Grandma thinks the colors are too bright, but Desmond loves them.", correct: true },
        { text: "Desmond wants to keep looking, but Grandma wants to look away.", correct: true },
        { text: "Both of them think the mural is very bright." },
        { text: "Desmond thinks the mural should be painted over." },
        { text: "Grandma thinks the mural looks like a party." }
      ],
      clue: "To compare two views, find what each person says about the same thing.",
      hints: [
        "To compare two views, find what each person says about the same thing.",
        "Read what Grandma says, then what Desmond says. Choose two.",
        "Both of them notice that the mural is bright, so that sentence tells how they are alike. Check the other sentences against each person's words."
      ],
      how: [
        "Grandma says the mural is so bright it hurts her eyes.",
        "Desmond says it looks like a party, and he could stare at it all day.",
        "The answers are \"Grandma thinks the colors are too bright, but Desmond loves them.\" and \"Desmond wants to keep looking, but Grandma wants to look away.\"",
        "Both noticing the brightness is a way they are alike, and Desmond, not Grandma, says it looks like a party."
      ],
      why: "The answers are \"Grandma thinks the colors are too bright, but Desmond loves them.\" and \"Desmond wants to keep looking, but Grandma wants to look away.\" Both notice the brightness, which is how they are alike. Desmond says it looks like a party, and he never says to paint it over." },
    /* Batch SIM-1 (ENG-07): one extra question for each core item that had none left when a child works the
       fifteen in order. Each new `like` names the one core item it practises. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TC2a-S04", type: "ms", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: ["p6"], pick: 2,
      like: ["SK-TC2a-C01"],
      prompt: "Grandma and the narrator see the sweater in different ways. Which TWO details show how Grandma herself feels about the sweater?",
      choices: [
        { text: "She hums a tune and claps her hands when he opens it.", correct: true },
        { text: "She beams and tells him that he looks wonderful.", correct: true },
        { text: "He says that it itches his neck like a bunch of ants." },
        { text: "He thinks that he looks like a traffic cone." },
        { text: "He tells her that it is the warmest thing he owns." }
      ],
      clue: "A narrator tells the story, but other characters have their own feelings. Look for what Grandma says and does.",
      hints: [
        "A narrator tells the story, but other characters have their own feelings. Look for what Grandma says and does.",
        "Find the sentences about Grandma. Ask whether each one tells what she does or says, or what the narrator thinks.",
        "The itch is the narrator's own feeling, so it does not show how Grandma feels. Check each choice that is left."
      ],
      how: [
        "The narrator hates the sweater at first, so his thoughts show his own view.",
        "Grandma's feelings show in what she does and says. She hums a tune and claps her hands, and she beams and says he looks wonderful.",
        "The answers are \"She hums a tune and claps her hands when he opens it.\" and \"She beams and tells him that he looks wonderful.\"",
        "The itch, the traffic cone and \"the warmest thing I own\" are all the narrator's own thoughts or words."
      ],
      misconception: "A common mix-up is choosing what the narrator thinks. The question asks about Grandma's own feelings.",
      why: "The answers are \"She hums a tune and claps her hands when he opens it.\" and \"She beams and tells him that he looks wonderful.\" Both show Grandma's own happiness. The itch, the traffic cone and the warm sweater are all what the narrator thinks or says." },
    { id: "SK-TC2a-S05", type: "mc", points: 1, dok: 3, std: ["3.T.C.2.a"], passages: ["p6"],
      like: ["SK-TC2a-P5"],
      prompt: "How does the narrator's view of the sweater change by the end of the story?",
      choices: [
        { text: "He sees that the sweater keeps him warm and was made with care.", correct: true },
        { text: "He decides that Grandma should never knit again." },
        { text: "He still thinks that he looks like a traffic cone." },
        { text: "He wants to give the sweater back to Grandma." }
      ],
      clue: "A narrator's view can change. Compare what the narrator says at the start with what he says at the end.",
      hints: [
        "A narrator's view can change. Compare what the narrator says at the start with what he says at the end.",
        "Find the narrator's first view of the sweater. Then find what he tells Grandma at the end.",
        "He thanks Grandma on the phone, so he does not want to give it back. Test each choice that is left against his last words."
      ],
      how: [
        "At the start, the sweater itches, and the narrator thinks he looks like a traffic cone.",
        "On a freezing day, he is the only one who is warm, and a friend says, \"Nice sweater.\"",
        "At the end, he calls Grandma and says it is the warmest thing he owns. The answer is \"He sees that the sweater keeps him warm and was made with care.\"",
        "He thanks her instead of wanting to give it back, and nothing says she should stop knitting."
      ],
      misconception: "A common mix-up is thinking the narrator's view stays the same. Compare his words at the start and at the end.",
      why: "The answer is \"He sees that the sweater keeps him warm and was made with care.\" He first dislikes it, but in the cold he is the only one still warm, and he thanks Grandma. He does not want to give it back, and nothing says she should stop knitting." },
    { id: "SK-TC2a-S06", type: "ebsr", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: ["p7"],
      like: ["SK-TC2a-C05"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "At the end of the story, how does the narrator see Mr. Gage?",
        choices: [
          { text: "Mr. Gage is still the strictest teacher alive.", correct: true },
          { text: "Mr. Gage is kind and funny." },
          { text: "Mr. Gage is the best teacher in the school." },
          { text: "Mr. Gage is too busy to help anyone." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Mr. Gage is still the strictest teacher alive.\"", correct: true },
          { text: "\"Mr. Gage sharpened it for me and set it on my desk.\"" },
          { text: "\"Then he told the class a joke about a goat that wore a hat, and everybody laughed.\"" },
          { text: "\"Mine said, 'Great job.'\"" }
        ] },
      clue: "A narrator's view can stay the same even when the story shows something else. Look for the narrator's own words at the end.",
      hints: [
        "A narrator's view can stay the same even when the story shows something else. Look for the narrator's own words at the end.",
        "Read the end of the story. Ask what the narrator thinks about Mr. Gage, not what Mr. Gage does.",
        "Mr. Gage's kind actions show what a reader might think, but the question asks about the narrator. For Part B, the sentence must match your Part A answer."
      ],
      how: [
        "Mr. Gage sharpens a pencil, tells a joke and hands out stickers. Those are things he does.",
        "But the narrator shrugs at the sticker and says that it does not change a thing.",
        "Part A: Mr. Gage is still the strictest teacher alive. Part B: \"Mr. Gage is still the strictest teacher alive.\"",
        "The narrator does not say Mr. Gage is kind, funny or the best teacher, and nothing says he is too busy to help."
      ],
      misconception: "A common mix-up is choosing what Mr. Gage does. The question asks how the narrator sees him.",
      why: "Part A: Mr. Gage is still the strictest teacher alive. Part B: \"Mr. Gage is still the strictest teacher alive.\" The narrator's view does not change, even though Mr. Gage does kind things. The narrator never calls him kind, funny or the best teacher." },
    { id: "SK-TC2a-S07", type: "ms", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: ["p8"], pick: 2,
      like: ["SK-TC2a-C06"],
      prompt: "Part 2 of the story has a new narrator. Which TWO clues show this?",
      choices: [
        { text: "In Part 2, the girl in the chair is called she.", correct: true },
        { text: "The I in Part 2 has cleaned children's teeth for thirty years.", correct: true },
        { text: "The narrator in Part 2 uses the word I." },
        { text: "Part 2 tells a funny story about a parrot." },
        { text: "Part 2 happens in the same office." }
      ],
      clue: "When a new narrator tells part of a story, the person named I changes. Look at who is I and who is named she or he.",
      hints: [
        "When a new narrator tells part of a story, the person named I changes. Look at who is I and who is named she or he.",
        "Compare who the I is in Part 1 with who the I is in Part 2.",
        "Both parts use the word I, so that choice does not show a new narrator. Check each choice that is left."
      ],
      how: [
        "In Part 1, the I is a girl who is afraid of the dentist.",
        "In Part 2, the girl in the chair is called she, and the I says he has cleaned children's teeth for thirty years. The I is someone else.",
        "The answers are \"In Part 2, the girl in the chair is called she.\" and \"The I in Part 2 has cleaned children's teeth for thirty years.\"",
        "Both parts use I, the parrot story does not tell who the narrator is, and the office is the same in both parts."
      ],
      misconception: "A common mix-up is thinking that the word I shows a new narrator. Both parts use I; ask who it is.",
      why: "The answers are \"In Part 2, the girl in the chair is called she.\" and \"The I in Part 2 has cleaned children's teeth for thirty years.\" Together they show that the I in Part 2 is the dentist. Both parts use I, the parrot story does not name the narrator, and the office is the same." },
    { id: "SK-TC2a-S08", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.a"], passages: ["p7"],
      like: ["SK-TC2a-C08"],
      prompt: "In paragraph 1, the narrator says that Mr. Gage \"stood tall and stern like a statue.\" What does this tell you about how the narrator sees him?",
      choices: [
        { text: "He sees Mr. Gage as stiff and unfriendly.", correct: true },
        { text: "He thinks Mr. Gage is made of stone." },
        { text: "He thinks Mr. Gage makes statues for a job." },
        { text: "He wants to take a picture of Mr. Gage." }
      ],
      clue: "A comparison can show how a narrator feels. Ask what a statue is like, and why the narrator picked it.",
      hints: [
        "A comparison can show how a narrator feels. Ask what a statue is like, and why the narrator picked it.",
        "Read the sentence around the comparison. What else does the narrator say about Mr. Gage?",
        "The narrator is comparing, not saying that Mr. Gage is really stone. Test each choice that is left against the words around it."
      ],
      how: [
        "A statue stands still and stiff and does not smile.",
        "The narrator says Mr. Gage stood \"tall and stern\" like one, and then decides that he is the strictest teacher alive.",
        "The answer is \"He sees Mr. Gage as stiff and unfriendly.\"",
        "Nothing says Mr. Gage is made of stone or makes statues, and nothing says the narrator wants a picture."
      ],
      misconception: "A common mix-up is reading a comparison word for word. A comparison shows how the narrator feels.",
      why: "The answer is \"He sees Mr. Gage as stiff and unfriendly.\" The narrator compares him to a statue, which stands stiff and does not smile. Mr. Gage is not made of stone, nothing says he makes statues, and no one wants a picture." },
    { id: "SK-TC2a-S09", type: "hottext", points: 1, dok: 2, std: ["3.T.C.2.a"], passages: ["p8"],
      like: ["SK-TC2a-C09"],
      prompt: "In Part 1, Zadie is sure it is going to hurt. Which sentence in Part 2 shows that she feels better by the end? Choose the sentence in the passage.",
      targets: ["p8:5:2", "p8:6:1", "p8:6:2", "p8:7:1", "p8:7:2", "p8:7:3"],
      answer: ["p8:7:1"], pick: 1,
      clue: "A narrator can show how another person feels by what that person does. Look for something Zadie does that shows she is no longer afraid.",
      hints: [
        "A narrator can show how another person feels by what that person does. Look for something Zadie does that shows she is no longer afraid.",
        "Read the sentences that tell what Zadie does, from when she grips the arms to the end of the visit.",
        "Gripping the arms shows how afraid she is, so it does not show she feels better. Check each sentence that is left."
      ],
      how: [
        "At the start of Part 2, Zadie grips the arms so tight that her knuckles turn pale. She is still scared.",
        "Then she listens to a story and lets go of the arms. She is calming down, but she is still in the chair.",
        "At the end, when the dentist hands her the mirror, she smiles at her sparkling teeth. That shows she feels good about the visit.",
        "The answer is \"When I handed her the mirror, she smiled at her sparkling teeth.\""
      ],
      misconception: "A common mix-up is choosing a sentence from earlier in Part 2, when she is still afraid.",
      why: "The answer is \"When I handed her the mirror, she smiled at her sparkling teeth.\" A smile at the end shows she feels better. Gripping the arms shows fear, and listening to the story and letting go show she is calming down, but not yet pleased." },
    { id: "SK-TC2a-S10", type: "mc", points: 1, dok: 3, std: ["3.T.C.2.a"], passages: ["p8"],
      like: ["SK-TC2a-C10"],
      prompt: "Why does the author have Dr. Amoah tell Part 2 instead of Zadie?",
      choices: [
        { text: "so readers can see how Zadie looked to someone else and what he did to help", correct: true },
        { text: "so readers can learn the steps for cleaning teeth at home" },
        { text: "so readers can find out what Zadie was thinking in the chair" },
        { text: "so readers can tell that Zadie was never really worried" }
      ],
      clue: "An author can switch narrators to show something the first narrator cannot. Ask what Dr. Amoah can see that Zadie cannot say.",
      hints: [
        "An author can switch narrators to show something the first narrator cannot. Ask what Dr. Amoah can see that Zadie cannot say.",
        "Compare what Part 1 tells about Zadie with what Part 2 tells about her.",
        "Part 1 already told what Zadie was thinking. Test each choice that is left against what Part 2 adds."
      ],
      how: [
        "Part 1 is told by Zadie, so readers learn she is afraid and what she thinks.",
        "In Part 2, Dr. Amoah describes how Zadie's knuckles look and how he helps her calm down.",
        "The answer is \"so readers can see how Zadie looked to someone else and what he did to help.\"",
        "Part 2 does not teach tooth cleaning at home, Zadie's thoughts were already told in Part 1, and she was worried."
      ],
      misconception: "A common mix-up is thinking a new narrator repeats what the first one said. A new narrator adds what the first one could not see.",
      why: "The answer is \"so readers can see how Zadie looked to someone else and what he did to help.\" Part 1 told what Zadie felt. Part 2 adds how she looked and how the dentist helped. It does not teach tooth cleaning, and it does not say she was never worried." },
    { id: "SK-TC2a-S11", type: "ms", points: 2, dok: 3, std: ["3.T.C.2.a"], passages: ["p9"], pick: 2,
      like: ["SK-TC2a-C11"],
      prompt: "The poem never says who the speaker is. Which TWO clues show that the speaker is an animal, not a child?",
      choices: [
        { text: "The speaker pokes a beak into the ground.", correct: true },
        { text: "The speaker flaps wings in the puddle.", correct: true },
        { text: "The speaker pulls a worm up from the ground." },
        { text: "The speaker listens by tilting a head." },
        { text: "The speaker is happy about the wet morning." }
      ],
      clue: "A poem can tell who the speaker is through clues. Look for body parts or actions that only an animal would have.",
      hints: [
        "A poem can tell who the speaker is through clues. Look for body parts or actions that only an animal would have.",
        "Read each stanza and ask what the speaker has or does. Could a child have or do it?",
        "A child can be happy about rain, so that choice cannot show the speaker is an animal. Check each choice that is left."
      ],
      how: [
        "A child has a nose and mouth, not a beak, and does not have wings.",
        "The speaker pokes a beak into the ground and flaps wings in a puddle. Only a bird has those.",
        "The answers are \"The speaker pokes a beak into the ground.\" and \"The speaker flaps wings in the puddle.\"",
        "A child could pull a worm up, tilt a head to listen, or feel happy in the rain."
      ],
      misconception: "A common mix-up is choosing an action a child could do, like pulling up a worm. Look for a body part only an animal has.",
      why: "The answers are \"The speaker pokes a beak into the ground.\" and \"The speaker flaps wings in the puddle.\" Only a bird has a beak and wings. A child could pull up a worm, tilt a head to listen or be happy about the rain." },
    { id: "SK-TC2a-S12", type: "cr", dok: 3, std: ["3.T.C.2.a"], passages: ["p9"], rows: 4,
      like: ["SK-TC2a-C12"],
      prompt: "How does the speaker feel about the wet morning? What do YOU think about it? Write two or three sentences. Use one detail from the poem to explain each view.",
      sample: "The speaker loves the wet morning, because the speaker says it is a perfect day and shouts, \"Woo-hoo!\" I think a wet morning would be fun for a bird, but I would not like it for a walk to school, because in the poem the nest and the feathers get wet.",
      criteria: [
        "I told the speaker's view and a detail that shows it.",
        "I told my own view in my own words. I may agree or disagree.",
        "I used a detail from the poem to explain my view.",
        "I made clear which view is the speaker's and which view is mine."
      ],
      clue: "Your view can be different from the speaker's. First say what the speaker thinks, then say what you think.",
      hints: [
        "Your view can be different from the speaker's. First say what the speaker thinks, then say what you think.",
        "Find one detail in the poem that shows the speaker's view, and one that helps explain what you think.",
        "You can start like this: The speaker thinks the morning is ___ because ___. I think ___ because in the poem ___."
      ],
      how: [
        "Find the speaker's view and a detail that shows it, such as shouting \"Woo-hoo!\" or calling it a perfect day.",
        "Decide your own view. You may agree or disagree, but say it in your own words.",
        "Pick one detail from the poem that supports your view. It can come from either stanza.",
        "Put it together: the speaker's view and its detail, then your view and its detail. One good answer follows. Other answers can also be right."
      ],
      why: "Many answers can be right. A good answer tells the speaker's view with a detail (a perfect day, \"Woo-hoo!\"), gives the writer's own view, and backs it up with a detail from the poem." },
    { id: "SK-TC2a-S13", type: "match", points: 2, dok: 2, std: ["3.T.C.2.a"], passages: [],
      like: ["SK-TC2a-C13"],
      prompt: "Read each short part of a story. Does the teller show how they feel about what happens, or only tell what happens? Match each part.",
      cols: ["shows how the teller feels", "only tells what happens"],
      rows: [
        { text: "The soup was so delicious that I asked for a third bowl.", answer: 0 },
        { text: "The train left the station at nine and reached the city at noon.", answer: 1 },
        { text: "Our dog barked at the mail carrier, and then he ran in a circle.", answer: 1 },
        { text: "I could not stand the loud, screechy music in the store.", answer: 0 }
      ],
      clue: "Words such as delicious or could not stand show a feeling. Telling only what happens does not.",
      hints: [
        "Words such as delicious or could not stand show a feeling. Telling only what happens does not.",
        "For each part, look for words that show what the teller thinks or feels, not just what happens.",
        "The train sentence only gives times and places, with no feeling at all. Sort the other three the same way."
      ],
      how: [
        "\"So delicious that I asked for a third bowl\" shows how the teller feels about the soup.",
        "The train and the barking dog are told as events, with no feeling words.",
        "\"Could not stand the loud, screechy music\" shows the teller dislikes it.",
        "So: shows, only tells, only tells, shows."
      ],
      misconception: "A common mix-up is thinking that a lively action shows a feeling. The dog running in a circle is just what happens.",
      why: "The soup sentence and the music sentence show how the teller feels. The train sentence and the dog sentence only tell what happens." },
    { id: "SK-TC2a-S14", type: "mc", points: 1, dok: 3, std: ["3.T.C.2.a"], passages: [],
      like: ["SK-TC2a-C14"],
      stem: ["I am the best block builder in the class.", "Today my tower fell over, but only because the table shook.", "Mia says my base was too narrow.", "Mia just wants to copy my idea."],
      prompt: "Read the part of a story in the box. What might a reader think that the narrator does not?",
      choices: [
        { text: "A wider base would have made the tower stronger.", correct: true },
        { text: "The narrator really is the best builder in the class." },
        { text: "Mia wants to copy the narrator's idea." },
        { text: "Nobody in the class can build a tower." }
      ],
      clue: "A reader can notice things the narrator leaves out. Ask what the narrator says and what the other character says.",
      hints: [
        "A reader can notice things the narrator leaves out. Ask what the narrator says and what the other character says.",
        "Compare what the narrator blames with what Mia says about the base.",
        "The narrator is the one who says Mia wants to copy the idea, so that is the narrator's view, not the reader's. Test each choice that is left."
      ],
      how: [
        "The narrator blames the shaking table and says Mia just wants to copy the idea.",
        "Mia says the base was too narrow, which could be the real reason the tower fell.",
        "A reader can see that advice may be helpful. The answer is \"A wider base would have made the tower stronger.\"",
        "Bragging and blaming Mia are the narrator's views, and nothing says nobody can build a tower."
      ],
      misconception: "A common mix-up is choosing something the narrator already says. The question asks what the reader might think instead.",
      why: "The answer is \"A wider base would have made the tower stronger.\" Mia's advice could explain the fall, though the narrator ignores it. Being the best builder and Mia copying are the narrator's own claims, and nothing says nobody can build a tower." },
    { id: "SK-TC2a-S15", type: "ms", points: 2, dok: 3, std: ["3.T.C.2.a"], passages: [], pick: 2,
      like: ["SK-TC2a-C15"],
      stem: ["Ivy's postcard: We went to the farm today. The barn smelled terrible, and a goat chewed my sleeve. I can't wait to go home.", "Jorge's postcard: We went to the farm today! The barn smelled strong, but I loved feeding the goat. I wish we could stay all week."],
      prompt: "Read the two postcards in the box. Ivy and Jorge write about the same trip. Which TWO sentences tell how their views are different?",
      choices: [
        { text: "Ivy dislikes the barn and the goat, but Jorge enjoys the animals.", correct: true },
        { text: "Ivy wants to go home, but Jorge wants to stay longer." , correct: true },
        { text: "Both of them visited a farm with a goat." },
        { text: "Jorge says a goat chewed his sleeve." },
        { text: "Ivy says she loved feeding the goat." }
      ],
      clue: "Two people can see the same event in different ways. Look for sentences that tell what each one thinks, and are different.",
      hints: [
        "Two people can see the same event in different ways. Look for sentences that tell what each one thinks, and are different.",
        "Read each postcard and find what the writer says about the barn, the goat and going home. Compare them.",
        "A sentence that is true for both children tells what is the same, not what is different. Check each choice that is left."
      ],
      how: [
        "Ivy says the barn smelled terrible, a goat chewed her sleeve, and she can't wait to go home.",
        "Jorge says he loved feeding the goat and wishes they could stay all week.",
        "The answers are \"Ivy dislikes the barn and the goat, but Jorge enjoys the animals.\" and \"Ivy wants to go home, but Jorge wants to stay longer.\"",
        "Visiting a farm with a goat is the same for both, and the sleeve and feeding details are mixed up between the writers."
      ],
      misconception: "A common mix-up is choosing what is the same, or swapping the writers. Check who says what.",
      why: "The answers are \"Ivy dislikes the barn and the goat, but Jorge enjoys the animals.\" and \"Ivy wants to go home, but Jorge wants to stay longer.\" Both sentences tell how their views differ. Visiting the farm is the same for both, and the sleeve and feeding details belong to different writers." }
  ],
  /* Hints and Show me how for items kept in practice: ref P5 (core set 1) and Together P1-P4. */
  addons: {
    "SK-TC2a-P1": {
      hints: [
        "To find the narrator, ask who is telling the story. Look for I, me and my outside quotation marks.",
        "Read paragraph 1 for how the narrator talks about Dev. Then read what Dev calls the narrator at the end.",
        "The narrator says I and my, so the teller is a character, not someone outside the story. Decide which character fits both clues."
      ],
      how: [
        "The narrator says \"my little brother, Dev,\" so the narrator is in the story and is older than Dev.",
        "At the end, Dev says, \"Thanks for letting me help, Sis.\"",
        "The answer is Dev's big sister. She is a character, so the teller is not someone outside the story, and she is not Dev or Mom."
      ] },
    "SK-TC2a-P2": {
      hints: [
        "A narrator's view shows in what the narrator thinks or does, not in plain facts.",
        "Look at paragraphs 1 and 2, before anyone buys anything. Choose two.",
        "\"Dev is six, and he talks to everybody\" is a fact about Dev. It does not show how the narrator feels about him. Check the other sentences."
      ],
      how: [
        "\"I knew right away that he would ruin everything\" shows the narrator expects trouble from Dev.",
        "\"I rolled my eyes\" shows the narrator is annoyed.",
        "The answers are those two sentences. The others tell facts: Mom's plan, Dev's age and the family laughing."
      ] },
    "SK-TC2a-P3": {
      hints: [
        "A reader can see things the narrator does not say. Look at what Dev actually does, not at what the narrator calls it.",
        "Reread paragraphs 2 to 4. What does Dev actually do with the buyers?",
        "Nothing in the story says Mom tells people to buy, so that choice does not fit Part A. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "The narrator says Dev was just lucky.",
        "But Dev shows the older woman the puzzles and tells her which ones have all their pieces. He is friendly and helpful.",
        "Part A: Dev sells a lot because he is friendly and helpful. Part B: \"He told her which ones had all their pieces.\"",
        "His toys are not called new, Mom does not tell people to buy, and nothing is given away free."
      ],
      misconception: "A common mix-up is trusting the narrator's word (lucky) instead of what the story shows." },
    "SK-TC2a-P4": {
      hints: [
        "In a poem, the voice is called the speaker. Find what the speaker says, then find what the other person does.",
        "Read line 3 for the sister and line 4 for the speaker.",
        "The two people do not feel the same way, so the choices that say they both feel the same do not fit. Decide which of the other two matches the frown and the words in line 4."
      ],
      how: [
        "Line 3: the sister frowns out at the yard. A frown shows she is unhappy.",
        "Line 4: the speaker says, \"I can't wait to play!\" That shows excitement.",
        "The answer is \"The speaker is excited about the snow, but the sister is unhappy about it.\""
      ] },
    "SK-TC2a-P5": {
      hints: [
        "A narrator's view can change. Compare what the narrator thinks at the beginning with what she says at the end.",
        "Reread paragraph 1, then paragraph 5.",
        "At the end she does not say Dev ruined anything, so the choice that says she still thinks so does not fit. Test the choices that are left against her words in paragraph 5."
      ],
      how: [
        "Paragraph 1: she knew right away that Dev would ruin everything.",
        "Paragraph 5: after Dev sells more, she says very quietly, \"I guess talking to people helps.\"",
        "The answer is \"She starts to see that Dev's talking helped.\"",
        "Nothing says Dev should never help again or that the sale was a waste, and she no longer says he ruined it."
      ],
      misconception: "A common mix-up is choosing the narrator's view from the beginning. The question asks how her view changes by the end." }
  },
  test: [
    { id: "SK-TC2a-T6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the poem. How is the speaker's view of the wind different from Dad's view?",
      stem: ["Dad says this wind is much too cold.", "He zips his jacket tight.", "I laugh and lift my paper kite:", "the wind is just right!"],
      choices: [
        { text: "The speaker likes the wind for a kite, but Dad thinks it is too cold.", correct: true },
        { text: "The speaker and Dad both think the wind is much too cold today." },
        { text: "The speaker thinks the wind is too cold, but Dad likes the wind." },
        { text: "The speaker and Dad both want to go outside and fly the kite." }
      ],
      clue: "In a poem, the voice is called the speaker. Find what Dad says and does. Then find what the speaker says and does.",
      why: "The answer is \"The speaker likes the wind for a kite, but Dad thinks it is too cold.\" Dad says the wind is much too cold and zips his jacket. The speaker laughs, lifts a kite and says the wind is just right. They see the same wind in different ways, and nothing shows that Dad wants to fly the kite." },
    { id: "SK-TC2a-T2", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does the narrator feel about the morning for most of the story?",
        choices: [
          { text: "bored", correct: true },
          { text: "scared" },
          { text: "excited" },
          { text: "proud" }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Grandpa pointed at it and smiled, but I only yawned.\"", correct: true },
          { text: "\"Grandpa woke me up before the sun on Saturday.\"" },
          { text: "\"Fog floated over the water like a soft blanket.\"" },
          { text: "\"Grandpa cheered.\"" }
        ] },
      clue: "Look for what the narrator does while waiting. What does that action show about how the narrator feels?",
      why: "Part A: bored. Part B: \"Grandpa pointed at it and smiled, but I only yawned.\" Yawning while Grandpa smiles shows the narrator is bored, not interested." },
    { id: "SK-TC2a-T3", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "Which detail might make a reader see the morning differently from the narrator?",
      choices: [
        { text: "Grandpa shares cocoa and stories about his own father.", correct: true },
        { text: "The narrator yawns and wishes to be back in bed." },
        { text: "The narrator does not care about catching fish." },
        { text: "The boat sits still while they wait for fish." }
      ],
      clue: "The narrator says the morning is boring. Look for a detail that a reader might think is special or kind.",
      why: "The answer is \"Grandpa shares cocoa and stories about his own father.\" A reader might see this as a warm, special time with Grandpa, even though the narrator calls it boring." },
    { id: "SK-TC2a-T4", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence shows that the narrator's view of the morning changes? Choose the sentence in the story.",
      targets: ["p2:4:2", "p2:5:1", "p2:5:2", "p2:5:3", "p2:5:4"],
      answer: ["p2:5:4"], pick: 1,
      clue: "Look for a sentence where the narrator tells a new feeling, not just what happens.",
      why: "The answer is \"Okay, maybe the morning was a little bit fun.\" Before this, the narrator calls it the most boring morning ever. Now the narrator admits it was a little fun." },
    { id: "SK-TC2a-T5", type: "ms", points: 2, dok: 3, passages: [], pick: 2,
      stem: "Our class hike was ruined. It rained the whole time, and mud splashed up to my knees. Then Jada and I found a tiny orange salamander under a log. Everyone crowded around to see it. On the way back, we raced to the bus, laughing and dripping.",
      prompt: "The narrator says the hike was ruined. Which two details might make a reader think the hike was fun? Pick two.",
      choices: [
        { text: "Jada and the narrator find a tiny salamander under a log.", correct: true },
        { text: "The class races to the bus, laughing and dripping.", correct: true },
        { text: "It rains during the whole hike." },
        { text: "Mud splashes up to the narrator's knees." },
        { text: "The narrator calls the hike ruined." }
      ],
      clue: "Skip what the narrator says about the hike. Look at what the children actually do and how they act.",
      why: "The answers are finding the salamander and racing to the bus while laughing. Everyone crowds around the salamander, and the children laugh on the way back. A reader might think the hike was fun, even though the narrator calls it ruined. Rain and mud are the reasons the narrator feels that way." }
  ]
});

PP.addLesson({
  code: "3.T.C.2.c",
  title: "When, where and why a text was written",
  teach: {
    big: "Knowing when, where, who and why a text was written helps me understand what the writer says.",
    points: [
      "Look for clues about context: a date, a place, the writer's name, or a note in a box. Then ask: How does knowing this help me understand the text?",
      "Time period: when was it written? Long ago, many things were different, like lights, travel and how people got news.",
      "Individual context: who is the writer? Think about the writer's background, job and experiences. A firefighter, a scientist and a child know different things, so each one writes in a different way.",
      "Situational context: what was happening when or where the writer wrote? A storm, a holiday or a big change can be the reason a text was written, and it can explain what the writer says.",
      "A real letter or diary was written at the time it shows. Historical fiction is written today but pretends to be written long ago. Use the date and any note in a box to learn its pretend time and place."
    ],
    words: [
      { term: "context", means: "the time, place and situation in which something was written" },
      { term: "time period", means: "a stretch of time in history, like the 1920s" },
      { term: "individual context", means: "who the writer is: the writer's background, job and experiences" },
      { term: "situational context", means: "what was happening when or where the text was written" },
      { term: "historical fiction", means: "a made-up story set in a real time in the past" }
    ],
    example: {
      label: "A note with situational context",
      lines: [
        "January 29, 2014, Atlanta, Georgia",
        "Dear Grandpa, School is closed today! Snow and ice cover the roads, and almost nobody can drive. We built a tiny snowman."
      ],
      note: "The date and place tell the situation: a snow and ice storm in Atlanta. Snow is rare in Atlanta, so a storm like this is big news there. The situation explains why the writer is so excited and why the roads are a problem."
    },
    tip: "On the test, look for a date, a place, the writer's job or a note in a box. Questions may ask why a detail matters at that time or place, or how the writer's job or life helps explain what the writer says."
  },
  learn: [
    {
      show: ["July 4, 1976", "Dear Diary, Today our whole town had a big party for America's 200th birthday. There were fireworks over the lake!"],
      ask: "When was this written, and why does that matter?",
      steps: [
        "Find the date at the top: July 4, 1976.",
        "Think about what July 4 means. It is America's birthday.",
        "The date explains the party. In 1976, America was 200 years old, so towns had extra big parties."
      ],
      answer: "It was written on July 4, 1976. Knowing the date explains why the town had such a big party."
    },
    {
      show: ["Box: A park ranger wrote this sign during a very dry summer. It had not rained for weeks.", "Sign: No campfires today. Please help keep the forest safe."],
      ask: "What was the situation, and why did the ranger write this sign?",
      steps: [
        "Read the text box first. It tells the situation: a dry summer with no rain for weeks.",
        "Think about what that means. Dry leaves and grass can catch fire easily.",
        "Now the sign makes sense. The sign alone does not say why. The situation does: the ranger wants to stop a forest fire."
      ],
      answer: "The situation was a very dry summer. The forest could catch fire easily, so the ranger wrote the sign to stop fires from starting."
    },
    {
      show: ["Box: Mr. Banks has been a firefighter for 20 years. He wrote this for a school newsletter.", "Please test your smoke alarm every month. I have seen how fast a fire can spread through a home. A smoke alarm that works gives your family time to get out."],
      ask: "Who is the writer, and how does knowing that help you understand what he wrote?",
      steps: [
        "Read the text box. It tells who the writer is: a firefighter for 20 years. That is his individual context.",
        "Think about what his job has shown him. Firefighters go into real fires and see how fast they move.",
        "Reread his words. \"I have seen how fast a fire can spread\" comes from his own work. That is why his warning is so strong, and why readers can trust it."
      ],
      answer: "Mr. Banks is a firefighter who has seen real fires. His job explains why he cares so much about smoke alarms and why readers can trust his warning."
    }
  ],
  parent: "Look at old family photos, letters, cards or signs together. Ask: When was this made? Who made it? What was going on at the time? How can you tell?",
  passages: [
    { id: "p1", title: "A Letter from the Farm", genre: "Historical fiction (letter)",
      paragraphs: [
        ["Box: This letter is historical fiction.", "Imagine that a girl on a Georgia farm wrote it long ago, on the date at the top.", "Back then, most farm families did not have electricity."],
        ["## March 3, 1928"],
        ["Dear Cousin Hattie,"],
        ["Thank you for the book you sent for my birthday.", "I read it every night by the light of our oil lamp.", "Papa says I will hurt my eyes, but I cannot stop reading."],
        ["Spring is coming to our farm.", "Papa and my brother Walter are getting the mule ready to plow the cotton field.", "I help Mama carry water from the well and feed the chickens."],
        ["You are so lucky to live in Atlanta.", "You wrote that your house has electric lights and that you can ride a streetcar downtown.", "I hope I can visit you this summer and see it all."],
        ["Please write back soon.", "Your cousin,", "Ella"]
      ] },
    { id: "p2", title: "Our First Television", genre: "Historical fiction (diary)",
      paragraphs: [
        ["Box: This diary entry is historical fiction.", "Imagine that a child wrote it in the 1950s, on the date at the top.", "Back then, television was new, and many families did not have one yet."],
        ["## Saturday, October 9, 1954"],
        ["Dear Diary,"],
        ["Today was the best day ever!", "Daddy came home with our very first television set.", "It is a big wooden box with a small screen."],
        ["Daddy turned a knob, and a gray picture of a cowboy show popped up.", "There is no color, only gray, black and white.", "We can watch only a few channels."],
        ["All the kids on our street came over to watch.", "Mrs. Lee from next door brought popcorn.", "We sat on the floor of our living room in Macon until supper."],
        ["Tomorrow I am going to write a letter to Grandma about it.", "She does not have a television yet."]
      ] },
    /* PP-004 gapfix: the short texts for the individual and situational items. Each one has a
       real text box ("Box: ", SPEC §5) that tells who wrote it and what was happening, so the
       Learn It point "look for a note in a box" matches what the child sees. p3 is for practice
       and p4 is for the check. */
    { id: "p3", title: "Three Short Texts", genre: "Short texts (field notes, newsletter, sign)",
      paragraphs: [
        ["## Dr. Ruiz's Field Notebook"],
        ["Box: Dr. Ruiz is a scientist who studies frogs.", "She wrote this in her field notebook."],
        ["June 12. Pond 3.", "Counted 14 green frogs and 2 bullfrogs.", "Water is low.", "Frogs stay near the deep end."],
        ["## A Note from the Bus Driver"],
        ["Box: Ms. Greene has driven a school bus in Georgia for 15 years.", "She wrote this for the school newsletter."],
        ["Please stay in your seat until the bus stops.", "I have had to stop fast many times, and a rider who is standing up can fall."],
        ["## A Sign for Field Day"],
        ["Box: Leo wrote this sign on the morning of field day at his school.", "It had rained hard all night."],
        ["FIELD DAY CHANGE!", "Meet in the gym, not on the field.", "Wear your sneakers!"]
      ] },
    { id: "p4", title: "Two Short Texts", genre: "Short texts (magazine piece, note)",
      paragraphs: [
        ["## Keeping Turtle Nests Safe"],
        ["Box: Grace Mills wrote this for a kids' magazine.", "She grew up on an island near the Georgia coast.", "For 30 years, her job has been to keep sea turtle nests safe."],
        ["On summer nights, I walk the beach with a red flashlight, never a bright white one.", "Baby turtles find the sea by following the soft glow over the water.", "A bright light can lead them the wrong way.", "When I was a girl, I did not know that.", "Now I teach every beach visitor I meet."],
        ["## A Note to a Neighbor"],
        ["Box: Imani wrote this note to her neighbor in September.", "A hurricane was heading for the Georgia coast, and families near the beach were told to leave right away.", "Her neighbor lived farther from the beach and could stay."],
        ["Dear Mr. Ortiz,", "We have to leave tonight.", "Please feed my fish, Goldie, until we get back!"]
      ] },
    /* B3 (expansion 2026-10-22, author b3a): p5 and p6 are used only by core (p5 set 2, p6 set 3).
       Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p5", title: "Washday", genre: "Historical fiction (school report)",
      paragraphs: [
        ["Box: This report is historical fiction.", "Imagine that a girl named Pearl wrote it for school in 1908, in a small town in Georgia.", "Back then, most homes had no washing machine."],
        ["## Washday, by Pearl Tate, Age 9"],
        ["In our house, Monday is washday, and it lasts from sunup to supper."],
        ["First, Mama boils water in a huge pot over a fire in the yard.", "Then she rubs each shirt with soap on a bumpy washboard until it is clean.", "By noon, her knuckles are red and sore."],
        ["My job is to hang everything on the line with wooden pins.", "Today the wind kept blowing the wet sheets into my face!"],
        ["Last Monday it rained, so wet clothes hung all over our kitchen for three days.", "Papa said it was like walking through a jungle."],
        ["Tomorrow is Tuesday, our ironing day.", "Mama will heat heavy irons on the stove, one after another."],
        ["Our neighbor Mrs. Dow says that someday a machine will do the washing for us.", "I think she is joking."]
      ] },
    { id: "p6", title: "Two More Short Texts", genre: "Short texts (journal, note)",
      paragraphs: [
        ["## Imara's Journal"],
        ["Box: Imara has lived in a house beside the train tracks her whole life.", "Her cousin Jabari came to stay for the weekend.", "She wrote this in her journal."],
        ["Saturday.", "Jabari jumped out of bed three times last night.", "He said the big train shook the whole house.", "I did not even wake up.", "Jabari just stared at me and said, \"How do you sleep with that noise?\""],
        ["## A Note from Coach Petty"],
        ["Box: Coach Petty wrote this note to families in early April.", "A killdeer, a bird that lays its eggs right on the ground, had made a nest of pebbles near home plate on the ball field.", "Killdeer eggs take about four weeks to hatch."],
        ["Dear Families,", "Starting today, recess will be on the blacktop, not on the ball field.", "Please remind your child to stay behind the orange cones.", "We should be back on the field by the first week of May.", "Thank you!", "Coach Petty"]
      ] }
  ],
  practice: [
    { id: "SK-TC2c-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "When did Ella write this letter?",
      choices: [
        { text: "in March 1928", correct: true },
        { text: "in the summer of 1928" },
        { text: "in March 2028" },
        { text: "in the fall of 1938" }
      ],
      clue: "Letters often have a date at the top. Find it before \"Dear Cousin Hattie.\"",
      why: "The answer is in March 1928. The date above the greeting says March 3, 1928. Ella only hopes to visit in the summer." },
    { id: "SK-TC2c-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does Ella read by the light of an oil lamp?",
      choices: [
        { text: "Her farm did not have electric lights.", correct: true },
        { text: "She likes the smell of the lamp oil." },
        { text: "The lamp was a gift from her cousin." },
        { text: "Electric lights would hurt her eyes." }
      ],
      clue: "Read the text box before the letter. It tells what life was like back then.",
      why: "The answer is \"Her farm did not have electric lights.\" The letter is dated 1928, and the text box says most farm families did not have electricity back then, so they used oil lamps for light." },
    { id: "SK-TC2c-P7", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What was happening in Ella's life that led her to write this letter?",
      choices: [
        { text: "Hattie had sent her a book for her birthday, and Ella wanted to thank her.", correct: true },
        { text: "Ella's family was moving to Atlanta, and she wanted Hattie to know." },
        { text: "Papa needed help to plow the cotton field, and he asked Hattie to come." },
        { text: "Ella had hurt her eyes from reading, and she could not read anymore." }
      ],
      clue: "Letters often say early on why the writer is writing. Ask what happened before Ella picked up her pen.",
      why: "The answer is \"Hattie had sent her a book for her birthday, and Ella wanted to thank her.\" That is the situation: Ella starts with \"Thank you for the book you sent for my birthday.\" Nothing in the letter says her family is moving. Papa and Walter plow the field themselves. Papa only says she will hurt her eyes, and she says she cannot stop reading."},
    { id: "SK-TC2c-P6", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Read \"Dr. Ruiz's Field Notebook.\" Why are Dr. Ruiz's notes full of numbers and short facts?",
      choices: [
        { text: "She is a scientist, so she writes exact counts to keep track of the frogs.", correct: true },
        { text: "She was writing to a friend, so she kept her note short and fun." },
        { text: "She was in a hurry because a big storm was coming." },
        { text: "She wanted to tell her friends a funny story about frogs." }
      ],
      clue: "Read the note in the box. Who is the writer? Think about how her background shapes what she does.",
      why: "The answer is \"She is a scientist, so she writes exact counts to keep track of the frogs.\" The box tells you who the writer is. Scientists count and record facts so they can compare them later. The notes are not written to a friend, they give no clue about a storm, and they are not a funny story." },
    { id: "SK-TC2c-P4", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Ella lives on a farm in 1928. Why does she think Hattie is lucky?",
        choices: [
          { text: "Hattie lives in a city with electric lights and streetcars.", correct: true },
          { text: "Hattie got a new book for her birthday this year." },
          { text: "Hattie has a mule and a big cotton field to plow." },
          { text: "Hattie is going to visit the farm this summer." }
        ] },
      partB: { prompt: "Which sentence from the letter best supports the answer to Part A?",
        choices: [
          { text: "\"You wrote that your house has electric lights and that you can ride a streetcar downtown.\"", correct: true },
          { text: "\"Thank you for the book you sent for my birthday.\"" },
          { text: "\"Papa and my brother Walter are getting the mule ready to plow the cotton field.\"" },
          { text: "\"Please write back soon.\"" }
        ] },
      clue: "Think about what Ella does not have on her farm. Then look for what Hattie has that Ella wishes for.",
      why: "Part A: Hattie lives in a city with electric lights and streetcars. Part B: \"You wrote that your house has electric lights and that you can ride a streetcar downtown.\" In 1928, Ella's farm had no electricity, so city lights seemed special to her." },
    { id: "SK-TC2c-P8", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Read \"A Note from the Bus Driver.\" Why can Ms. Greene be so sure that a standing rider can fall?",
      choices: [
        { text: "She has driven a bus for years and has had to stop fast many times.", correct: true },
        { text: "She read a story in the newsletter about a bus that stopped fast." },
        { text: "She once saw a news video of a bus that stopped fast, and a rider fell." },
        { text: "She has fallen herself while standing on a bus as a rider." }
      ],
      clue: "Read the note in the box. What is Ms. Greene's job, and how long has she done it? Then find what she says she has seen.",
      why: "The answer is \"She has driven a bus for years and has had to stop fast many times.\" The box tells her individual context: she has been a bus driver for 15 years. Her own experience is why she can be sure. She wrote for the newsletter, she did not read about it there. Her note says she herself has had to stop fast many times, and the box says she is the driver, not a rider who fell. She did not learn it from a news video."},
    { id: "SK-TC2c-P9", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Read \"A Sign for Field Day.\" Why did Leo tell everyone to meet in the gym?",
      choices: [
        { text: "The rain had made the field too wet and muddy to use.", correct: true },
        { text: "Field day had been moved to a different day next week." },
        { text: "The gym is closer to the classrooms than the field is." },
        { text: "The coach wanted a quiet place to hand out the prizes." }
      ],
      clue: "The sign does not say why. Read the note in the box. What happened the night before field day?",
      why: "The answer is \"The rain had made the field too wet and muddy to use.\" The sign alone does not give a reason. The box tells the situation: it rained hard all night, so the field was too wet. Field day still happens today, just in the gym. Nothing in the sign or the box is about how close the gym is or about prizes."}
  ],
  /* ---------- B3 core (expansion 2026-10-22, author b3a; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five. { ref } reuses Try items P4, P8 and P9 by id, so Practice
     Together is P1, P2, P7 and P6 (practice minus refs). Hints and Show me how for those seven are in addons.
     C10 is a constructed response (type "cr", never scored; 01 §2.2.2). "With adult support" stays in the
     parent note; it is not turned into a scored item.
     Author log: docs/expansion-2026-10-22/batches/B3-b3a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TC2c-P4" },
      { id: "SK-TC2c-C02", type: "match", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: [],
        prompt: "Each clue tells something about a text's context. Match each clue to the kind of context it gives.",
        cols: ["time period", "individual", "situational"],
        rows: [
          { text: "The letter is dated June 5, 1890.", answer: 0 },
          { text: "The writer has trained horses for thirty years.", answer: 1 },
          { text: "The note was written the day the town's only bridge closed for repairs.", answer: 2 },
          { text: "The writer grew up on a sailboat with her family.", answer: 1 },
          { text: "The story is set in 1850, when people traveled by horse and wagon.", answer: 0 }
        ],
        clue: "Ask what each clue tells: when the text was written, who the writer is, or what was happening at the time.",
        hints: [
          "Ask what each clue tells: when the text was written, who the writer is, or what was happening at the time.",
          "In each clue, find the most important words: a date, a fact about the writer's own life, or an event.",
          "Training horses for thirty years is the writer's own job, so that clue is individual context. Sort the other clues the same way."
        ],
        how: [
          "Dates in history, like 1890 and 1850, tell the time period.",
          "A writer's job and how she grew up, like training horses or living on a sailboat, tell individual context.",
          "An event happening at the time, like a bridge closing, tells situational context."
        ],
        misconception: "A common mix-up is sorting by one word, like horses. Ask whether the clue is about a time, a person's own life, or an event.",
        why: "The dates 1890 and 1850 tell the time period. Training horses and growing up on a sailboat tell about the writer, so they are individual context. The bridge closing is an event at the time, so it is situational context." },
      { ref: "SK-TC2c-P8" },
      { id: "SK-TC2c-C04", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: ["p3"],
        prompt: "Read \"Dr. Ruiz's Field Notebook.\" She writes, \"Water is low.\" How does this detail help explain her next note?",
        choices: [
          { text: "With less water in the pond, the frogs crowd into the deepest part.", correct: true },
          { text: "With less water in the pond, Dr. Ruiz can count the frogs faster." },
          { text: "The frogs drank so much of the water that the pond is now low." },
          { text: "Dr. Ruiz is a scientist, so she writes her notes short and exact." }
        ],
        clue: "Situational context is what was happening when the writer wrote. One note can help explain another.",
        hints: [
          "Situational context is what was happening when the writer wrote. One note can help explain another.",
          "Read the notes after the box in order: the date and place, the count, the water and the frogs.",
          "Frogs do not drink up a pond, so the frogs did not make the water low. Check the other choices."
        ],
        how: [
          "Dr. Ruiz writes that the water in Pond 3 is low.",
          "Her next note says the frogs stay near the deep end. When a pond gets low, the deep end is where the most water is left.",
          "So the low water helps explain where the frogs are. The answer is \"With less water in the pond, the frogs crowd into the deepest part.\"",
          "Her job explains why her notes are short, but not where the frogs are, and nothing says the count went faster."
        ],
        misconception: "A common mix-up is choosing a true fact about the writer that does not explain the detail in the question.",
        why: "The answer is \"With less water in the pond, the frogs crowd into the deepest part.\" Low water leaves the most water in the deep end, so that is where the frogs stay. Her job explains her short notes, not where the frogs are, frogs do not drink up a pond, and nothing says the count went faster." },
      { ref: "SK-TC2c-P9" }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TC2c-C06", type: "ms", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: ["p5"], pick: 2,
        prompt: "Which TWO things in Pearl's report are different from how most families wash clothes today?",
        choices: [
          { text: "Each shirt is scrubbed clean on a washboard by hand.", correct: true },
          { text: "The wash water is boiled in a pot over a fire.", correct: true },
          { text: "A child in the family helps with the washing." },
          { text: "Some clothes are ironed after they are washed." },
          { text: "Soap is used to get the clothes clean." }
        ],
        clue: "A time-period clue shows how people did something back then. Ask: do most families still do it this way today?",
        hints: [
          "A time-period clue shows how people did something back then. Ask: do most families still do it this way today?",
          "Reread paragraphs 2, 3 and 5 of the report. Choose two.",
          "Children today still help with chores like the wash, so that detail is not a difference. Check the other choices."
        ],
        how: [
          "Today, most families wash clothes in a machine that heats the water and does the scrubbing.",
          "In 1908, the water was boiled over a fire, and each shirt was scrubbed on a washboard by hand. Those are different.",
          "The answers are \"Each shirt is scrubbed clean on a washboard by hand.\" and \"The wash water is boiled in a pot over a fire.\"",
          "Children still help, people still use soap, and some clothes still get ironed today."
        ],
        misconception: "A common mix-up is choosing something that sounds old but is still done today. Check each detail against today.",
        why: "The answers are \"Each shirt is scrubbed clean on a washboard by hand.\" and \"The wash water is boiled in a pot over a fire.\" Today a machine heats the water and does the scrubbing. Children still help, people still use soap, and some clothes still get ironed." },
      { id: "SK-TC2c-C07", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: ["p5"],
        prompt: "In paragraph 4, Papa says the kitchen was like walking through a jungle. Which context best explains why the kitchen looked that way?",
        choices: [
          { text: "Rain kept the wash from drying outside, and homes had no dryers, so it hung in the kitchen.", correct: true },
          { text: "Mama had filled the kitchen with tall green plants that she brought in from the yard." },
          { text: "The hot irons on the stove had made the whole kitchen steamy and warm for days." },
          { text: "The wind had blown the kitchen door open and scattered wet leaves all over the room." }
        ],
        clue: "Situational context is what was happening at the time, and what people had back then. Both can explain why someone says something.",
        hints: [
          "Situational context is what was happening at the time, and what people had back then. Both can explain why someone says something.",
          "Reread paragraphs 3 to 5.",
          "Nothing in the report says Mama brought plants inside, so that choice has no support. Check the other choices."
        ],
        how: [
          "Paragraph 4 says it rained last Monday, so the wet clothes hung all over the kitchen for three days.",
          "Today a dryer could finish the job in an hour. In 1908, homes had no dryers, so wet clothes had to dry on a line, and rain kept them from drying outside.",
          "Walking through rows of hanging clothes is like pushing through vines and leaves in a jungle. The answer is \"Rain kept the wash from drying outside, and homes had no dryers, so it hung in the kitchen.\"",
          "The irons are for Tuesday, the wind blew the sheets on washday, and nothing says plants were brought in."
        ],
        misconception: "A common mix-up is reading a comparison as if it really happened. Find the situation that explains what was said.",
        why: "The answer is \"Rain kept the wash from drying outside, and homes had no dryers, so it hung in the kitchen.\" Because it rained, the clothes hung inside for three days, and walking through them felt like a jungle. The irons are for Tuesday, the wind blew the sheets outside, and no plants were brought in." },
      { id: "SK-TC2c-C08", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: ["p5"],
        prompt: "Read the box above the report again. Then choose the best answer for each blank.",
        text: "The report was written {0}. It tells about {1}.",
        slots: [
          { options: ["by an author today, who imagined Pearl", "by a real girl named Pearl in 1908", "by Pearl's teacher, after she read it", "by Mrs. Dow, Pearl's neighbor"], answer: 0 },
          { options: ["what washday was like in 1908", "how washing machines were invented", "what washday is like for families today", "how to wash clothes in a machine"], answer: 0 }
        ],
        clue: "Read the box before the text. It tells what kind of text this is and when it is set.",
        hints: [
          "Read the box before the text. It tells what kind of text this is and when it is set.",
          "In the box, find the words historical fiction and imagine. What do they tell you about who wrote the report?",
          "Nothing in the box or the report says Mrs. Dow wrote it, so that choice does not fit the first blank. Test the other choices for each blank."
        ],
        how: [
          "The box says the report is historical fiction and asks you to imagine that Pearl wrote it in 1908.",
          "Historical fiction is written by an author today but set in the past. So an author today imagined Pearl.",
          "The report shows washday in 1908. The first blank is \"by an author today, who imagined Pearl\" and the second blank is \"what washday was like in 1908.\"",
          "Pearl is a made-up girl, and the report is about washing by hand, not about machines or today."
        ],
        misconception: "A common mix-up is thinking historical fiction is a real old paper. The box tells you it was made up and set long ago.",
        why: "The answers are \"by an author today, who imagined Pearl\" and \"what washday was like in 1908.\" The box says it is historical fiction, so an author imagined Pearl's report. It shows washing by hand in 1908, not machines or today." },
      { id: "SK-TC2c-C09", type: "ms", points: 2, dok: 3, std: ["3.T.C.2.c"], passages: ["p5"], pick: 2,
        prompt: "Suppose Mama wrote about washday instead of Pearl. Which TWO details would Mama most likely write about?",
        choices: [
          { text: "how sore her knuckles get from the washboard", correct: true },
          { text: "how hot the fire is under the big pot of water", correct: true },
          { text: "how the wind blows the wet sheets into her face" },
          { text: "how tired her arms get from hanging up the clothes" },
          { text: "what Mrs. Dow said about a washing machine" }
        ],
        clue: "Individual context is who the writer is. People write most about the jobs they do and what they go through themselves.",
        hints: [
          "Individual context is who the writer is. People write most about the jobs they do and what they go through themselves.",
          "Reread paragraphs 2 to 5 of the report. Choose two.",
          "Anyone in the family could tell what Mrs. Dow said, so that detail does not depend on who the writer is. Check the other choices."
        ],
        how: [
          "Paragraph 2 tells Mama's jobs: she boils the water over a fire and scrubs on the washboard until her knuckles are sore.",
          "Paragraph 3 tells Pearl's job: hanging the clothes, with the sheets blowing in her face.",
          "A writer tells most about her own work. The answers are \"how sore her knuckles get from the washboard\" and \"how hot the fire is under the big pot of water.\"",
          "The sheets and hanging up the clothes are Pearl's job, and anyone could tell what Mrs. Dow said."
        ],
        misconception: "A common mix-up is mixing up who does each job. A writer's own life and work shape what she writes.",
        why: "The answers are \"how sore her knuckles get from the washboard\" and \"how hot the fire is under the big pot of water.\" Boiling the water and scrubbing are Mama's jobs. Hanging the clothes and the blowing sheets are Pearl's job, and anyone could tell what Mrs. Dow said." },
      { id: "SK-TC2c-C10", type: "cr", dok: 3, std: ["3.T.C.2.c"], passages: ["p5"], rows: 4,
        prompt: "How does knowing when Pearl's report is set help you understand it? Write two or three sentences. Use one detail from the box and one detail from the report.",
        sample: "The box says the report is set in 1908, when most homes had no washing machine. That helps me understand why washday lasted from sunup to supper. Mama had to boil the water over a fire and scrub every shirt on a washboard by hand.",
        criteria: [
          "I told when the report is set, using the box.",
          "I gave a detail from the report.",
          "I explained how the time period helps the detail make sense."
        ],
        clue: "Context can explain a detail. First find when the report is set. Then find a detail that makes more sense once you know the time.",
        hints: [
          "Context can explain a detail. First find when the report is set. Then find a detail that makes more sense once you know the time.",
          "Use the box for the time. Then look for a part of the report that would be different today.",
          "You can start like this: The box says ___. That helps me understand ___ because ___."
        ],
        how: [
          "Read the box: the report is set in 1908, when most homes had no washing machine.",
          "Pick a detail from the report, such as washday lasting from sunup to supper.",
          "Explain the link: without a machine, all the boiling and scrubbing was done by hand, so it took all day.",
          "One good answer follows. Other answers can also be right."
        ],
        why: "Many answers can be right. A good answer tells the time from the box, gives a detail from the report, and explains how the time period helps that detail make sense." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TC2c-C11", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: ["p6"],
        prompt: "Read \"Imara's Journal.\" Why does the train wake Jabari but not Imara?",
        choices: [
          { text: "Imara has lived by the tracks all her life, so she is used to it.", correct: true },
          { text: "Imara went to sleep much later than Jabari did that night." },
          { text: "The train that night was much quieter than the other trains." },
          { text: "Jabari had never seen a train before he came to visit her." }
        ],
        clue: "Individual context is who the writer is: her background and her experiences. Ask what in the writer's past could explain her reaction.",
        hints: [
          "Individual context is who the writer is: her background and her experiences. Ask what in the writer's past could explain her reaction.",
          "Read the text box and the whole journal entry.",
          "Jabari says the big train shook the whole house, so it was not a quiet train. Check the other choices."
        ],
        how: [
          "The box says Imara has lived beside the train tracks her whole life. A sound you hear every day starts to feel normal.",
          "Jabari is not used to the noise, so the train woke him again and again. Imara slept through it.",
          "The answer is \"Imara has lived by the tracks all her life, so she is used to it.\"",
          "Nothing says Imara went to bed late or that Jabari had never seen a train, and Jabari says the big train shook the whole house, so it was not a quiet train."
        ],
        misconception: "A common mix-up is looking only at what happened that night. Who the writer is, and what her life has been like, can explain how she reacts.",
        why: "The answer is \"Imara has lived by the tracks all her life, so she is used to it.\" The box tells her individual context. Nothing says she went to bed late or that Jabari had never seen a train, and the big train shook the whole house, so it was not quiet." },
      { id: "SK-TC2c-C12", type: "ebsr", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: ["p6"],
        prompt: "Read \"A Note from Coach Petty.\" This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why does Coach Petty think the class should be back on the field by the first week of May?",
          choices: [
            { text: "By then, the killdeer eggs will have hatched.", correct: true },
            { text: "By then, the rainy spring weather will be over." },
            { text: "By then, the baby birds will be able to fly." },
            { text: "By then, workers will have fixed home plate." }
          ] },
        partB: { prompt: "Which sentence best supports the answer to Part A?",
          choices: [
            { text: "\"Killdeer eggs take about four weeks to hatch.\"", correct: true },
            { text: "\"A killdeer, a bird that lays its eggs right on the ground, had made a nest of pebbles near home plate on the ball field.\"" },
            { text: "\"Starting today, recess will be on the blacktop, not on the ball field.\"" },
            { text: "\"Please remind your child to stay behind the orange cones.\"" }
          ] },
        clue: "Situational context is what was happening when a text was written. Use it to explain words that the text alone does not explain.",
        hints: [
          "Situational context is what was happening when a text was written. Use it to explain words that the text alone does not explain.",
          "Read the text box above the note, then the note. Find what was happening on the ball field.",
          "The box and the note say nothing about workers or a broken home plate, so that Part A choice has no support. For Part B, choose the sentence that explains your Part A answer."
        ],
        how: [
          "The box tells the situation: a killdeer made a nest near home plate, and its eggs take about four weeks to hatch.",
          "Coach Petty wrote in early April. About four weeks later is the first week of May, when the chicks should be out of the nest.",
          "Part A: By then, the killdeer eggs will have hatched. Part B: \"Killdeer eggs take about four weeks to hatch.\"",
          "The nest sentence tells why the field is closed, not when it opens again. Nothing says rain or a broken home plate is the problem, and nothing says the birds must be able to fly."
        ],
        misconception: "A common mix-up is guessing a usual reason, like the weather, instead of reading the situation in the box.",
        why: "Part A: By then, the killdeer eggs will have hatched. Part B: \"Killdeer eggs take about four weeks to hatch.\" Coach Petty wrote in early April, so the eggs should hatch around the first week of May. The nest sentence tells why the field is closed, not when it opens, and nothing is said about rain or workers." },
      { id: "SK-TC2c-C13", type: "hottext", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
        stem: ["Box: This postcard is historical fiction. Imagine that a boy wrote it in 1935, while he was visiting his aunt in Savannah, Georgia."],
        prompt: "Read the box. Which sentence could the boy NOT have written on his postcard in 1935?",
        options: [
          "We rode a streetcar down to the river.",
          "Aunt Lou listened to the news on her radio.",
          "I bought this postcard at the corner store.",
          "We took pictures with Aunt Lou's camera.",
          "We looked up the movie times on Aunt Lou's computer."
        ],
        answer: [4], pick: 1,
        clue: "Time-period clues help you check what people could do back then. Ask whether each thing was around in 1935.",
        hints: [
          "Time-period clues help you check what people could do back then. Ask whether each thing was around in 1935.",
          "Read each sentence, and picture the thing it names: a streetcar, a radio, a store, a camera and a computer.",
          "Postcards were sold in stores long before 1935, so the boy could have written that sentence. Check the other sentences."
        ],
        how: [
          "Streetcars, radios, cameras and corner stores were all around in 1935.",
          "Home computers did not exist until the 1970s, about forty years later.",
          "The answer is \"We looked up the movie times on Aunt Lou's computer.\"",
          "Radios and cameras may seem new, but many families had them in the 1930s."
        ],
        misconception: "A common mix-up is thinking every machine is new. Radios and cameras are older than many people think.",
        why: "The answer is \"We looked up the movie times on Aunt Lou's computer.\" There were no home computers in 1935. Streetcars, radios, cameras and corner stores were all around then." },
      { id: "SK-TC2c-C14", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: [],
        stem: ["Box: Mr. Gill grows corn and tomatoes on his farm. It has not rained for almost a month.", "Mr. Gill's notebook: Another hot, sunny day. The corn leaves are curling up. I hope a storm comes soon.", "Box: Zuri is nine. Her family just got summer passes to the town pool.", "Zuri's diary: Another hot, sunny day! Pool again! I hope it never rains."],
        prompt: "Read the two texts in the box. Mr. Gill and Zuri write about the same weather. Choose the best answer for each blank.",
        text: "Mr. Gill hopes for a storm because {0}. Zuri hopes it never rains because {1}.",
        slots: [
          { options: ["his plants need water to grow", "he wants a day off from work", "he wants to cool off in the rain", "he likes the sound of thunder"], answer: 0 },
          { options: ["she wants to keep going to the pool", "she is afraid of thunder", "she does not like to get wet", "her family is going on a trip"], answer: 0 }
        ],
        clue: "Individual context is who each writer is. The same weather can mean different things to different people.",
        hints: [
          "Individual context is who each writer is. The same weather can mean different things to different people.",
          "Read each text box, then each writer's own words.",
          "Zuri swims at the pool, so she does not mind getting wet; that choice does not fit the second blank. Test the other choices for each blank."
        ],
        how: [
          "Mr. Gill is a farmer. His corn leaves are curling because it has not rained, so he needs rain for his plants.",
          "Zuri just got a pool pass, so sunny days mean more swimming.",
          "The first blank is \"his plants need water to grow\" and the second blank is \"she wants to keep going to the pool.\"",
          "Nothing says Mr. Gill wants a day off or likes thunder, or that Zuri is afraid of thunder or going on a trip."
        ],
        misconception: "A common mix-up is thinking two people must feel the same about the same weather. Each writer's life explains the view.",
        why: "The answers are \"his plants need water to grow\" and \"she wants to keep going to the pool.\" Mr. Gill's corn is drying up, and Zuri just got pool passes. Nothing says he wants a day off or likes thunder, or that she fears thunder or is taking a trip." },
      { id: "SK-TC2c-C15", type: "mc", points: 1, dok: 3, std: ["3.T.C.2.c"], passages: [],
        stem: ["Dear Neighbors,", "Please do not mow your lawns this Saturday morning.", "Thank you!", "The Okoye Family"],
        prompt: "Read the note in the box. Which piece of context would best help a reader understand why the Okoye family wrote it?",
        choices: [
          { text: "They are having a quiet outdoor wedding in their yard that morning.", correct: true },
          { text: "They have lived on the street for more than ten years." },
          { text: "They wrote the note on a warm, sunny day in May." },
          { text: "Their own lawn mower broke down last week." }
        ],
        clue: "Context helps most when it explains what a text says. Ask which fact would make the note make sense.",
        hints: [
          "Context helps most when it explains what a text says. Ask which fact would make the note make sense.",
          "Reread the note. What does the family ask its neighbors for?",
          "How long the family has lived on the street does not explain this one Saturday, so that choice does not fit. Check the other choices."
        ],
        how: [
          "The note asks neighbors not to mow on one morning only: this Saturday.",
          "A loud mower would spoil something special happening outside that morning.",
          "A wedding in their yard explains it. The answer is \"They are having a quiet outdoor wedding in their yard that morning.\"",
          "Their own broken mower would not make them ask others to stop, and the weather does not explain this one Saturday."
        ],
        misconception: "A common mix-up is choosing a true-sounding fact that does not explain the text. The best context makes the words make sense.",
        why: "The answer is \"They are having a quiet outdoor wedding in their yard that morning.\" Mowers are loud, and the family asks for quiet on just that morning. How long they have lived there, the weather and their own broken mower do not explain the note." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. `like` lists only the core
     items each one really practises. */
  similar: [
    { id: "SK-TC2c-S01", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-P8", "SK-TC2c-C11"],
      stem: ["Box: Mr. Bates has carried the mail on Elm Street for 22 years. He wrote this for the town newsletter.", "Please keep your dog inside when I bring the mail. Even a friendly dog can jump up and knock over a mail carrier. It has happened to me more times than I can count."],
      prompt: "Read the text in the box. What helps explain why Mr. Bates is so sure about dogs and mail carriers?",
      choices: [
        { text: "He has brought mail to many homes with dogs for years.", correct: true },
        { text: "He read about dogs in the town newsletter last year." },
        { text: "He owns a large dog that jumps on everyone he meets." },
        { text: "He is new to Elm Street and has never met a dog." }
      ],
      clue: "Individual context is who the writer is: his job, his background and what has happened to him.",
      hints: [
        "Individual context is who the writer is: his job, his background and what has happened to him.",
        "Read the text box, then his whole note.",
        "He writes for the newsletter; he did not learn about dogs from it. Check the other choices."
      ],
      how: [
        "The box says Mr. Bates has carried the mail on Elm Street for 22 years.",
        "His note says a dog has knocked him over more times than he can count. His own job has shown him this.",
        "The answer is \"He has brought mail to many homes with dogs for years.\"",
        "Nothing says he owns a dog, and 22 years on Elm Street means he is not new."
      ],
      misconception: "A common mix-up is choosing where a text was printed instead of who wrote it and what his life has taught him.",
      why: "The answer is \"He has brought mail to many homes with dogs for years.\" The box tells his job and how long he has done it, and his note says it has happened to him many times. He writes for the newsletter, nothing says he owns a dog, and he is not new." },
    { id: "SK-TC2c-S02", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-P4", "SK-TC2c-C13"],
      stem: ["Box: This story is historical fiction. It is set in 1925, in a small town. Back then, many homes in small towns had no telephone. A town might have only a few, like the one at the general store.", "Ma held baby Ruthie close. \"Her fever is so high,\" she said. \"Run to Mr. Hill's store, quick! Ask him to call Dr. Bell.\""],
      prompt: "Read the story in the box. Why does Ma send someone to the store to call the doctor?",
      choices: [
        { text: "Their home had no telephone, so they had to use the store's.", correct: true },
        { text: "Dr. Bell worked at Mr. Hill's store on most days." },
        { text: "Ma wanted to buy medicine at the store first." },
        { text: "Mr. Hill was the only person who knew Dr. Bell." }
      ],
      clue: "Time-period context explains how people did things back then. Read the box before the story.",
      hints: [
        "Time-period context explains how people did things back then. Read the box before the story.",
        "Read the box, then Ma's words.",
        "Nothing in the story says the doctor works at the store, so that choice has no support. Check the other choices."
      ],
      how: [
        "The box says the story is set in 1925, when many homes in small towns had no telephone.",
        "The store had one, so the family had to go there to call.",
        "The answer is \"Their home had no telephone, so they had to use the store's.\"",
        "Ma asks Mr. Hill to call, not to sell medicine, and nothing says only he knows Dr. Bell."
      ],
      misconception: "A common mix-up is thinking people long ago could do things the way we do today. The box tells you what was different.",
      why: "The answer is \"Their home had no telephone, so they had to use the store's.\" The box says many homes in small towns had no phone in 1925. Ma asks Mr. Hill to call, not to sell medicine, and nothing says the doctor works there or that only Mr. Hill knows him." },
    { id: "SK-TC2c-S03", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-P9", "SK-TC2c-C12", "SK-TC2c-C15"],
      stem: ["Box: Mr. Price wrote this note on a morning when a skunk was found sleeping under the school's front steps. Workers were on their way to move it to the woods.", "Dear Families, Please drop off your children at the side door today. Do not use the front steps until lunch. Thank you!"],
      prompt: "Read the text in the box. Why did Mr. Price ask families to use the side door?",
      choices: [
        { text: "A skunk was sleeping under the front steps until workers could move it.", correct: true },
        { text: "The front steps were being painted before the school day began." },
        { text: "Lunch was going to be served out on the front steps that day." },
        { text: "The side door is closer to the classrooms than the front door is." }
      ],
      clue: "Situational context is what was happening when the text was written. The note alone may not say why.",
      hints: [
        "Situational context is what was happening when the text was written. The note alone may not say why.",
        "Read the text box, then each sentence of the note.",
        "Nothing says anything was being painted, so that choice has no support. Check the other choices."
      ],
      how: [
        "The note does not say why families should use the side door.",
        "The box tells the situation: a skunk was sleeping under the front steps, and workers were coming to move it.",
        "The answer is \"A skunk was sleeping under the front steps until workers could move it.\"",
        "\"Until lunch\" tells when the steps can be used again, not that lunch is served there, and nothing compares the two doors."
      ],
      misconception: "A common mix-up is guessing a reason from one word in the note, like lunch, instead of reading the box.",
      why: "The answer is \"A skunk was sleeping under the front steps until workers could move it.\" The box tells the situation that the note leaves out. Nothing says the steps were painted, lunch tells when the steps open again, and nothing compares the doors." },
    /* ENG-07 (author b3a): S04-S11 give every core item at least one similar item. Each `like` names only
       core items that practise the same component with the same task. */
    { id: "SK-TC2c-S04", type: "match", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C02"],
      prompt: "Each clue tells something about a text's context. Match each clue to the kind of context it gives.",
      cols: ["time period", "individual", "situational"],
      rows: [
        { text: "The diary is dated March 2, 1875.", answer: 0 },
        { text: "The writer has worked as a nurse for twenty years.", answer: 1 },
        { text: "The note was written the morning the school bus broke down.", answer: 2 },
        { text: "The writer grew up speaking two languages at home.", answer: 1 },
        { text: "The story is set long ago, when children studied by candlelight.", answer: 0 }
      ],
      clue: "Ask what each clue tells: when the text was written, who the writer is, or what was happening at the time.",
      hints: [
        "Ask what each clue tells: when the text was written, who the writer is, or what was happening at the time.",
        "In each clue, find the most important words: a date, a fact about the writer's own life, or an event.",
        "Working as a nurse for twenty years is the writer's own job, so that clue is individual context. Sort the other clues the same way."
      ],
      how: [
        "A date in history, like 1875, or a time long ago, like studying by candlelight, tells the time period.",
        "A writer's job and how she grew up, like nursing or speaking two languages, tell individual context.",
        "An event happening at the time, like a bus breaking down, tells situational context."
      ],
      misconception: "A common mix-up is calling a person's background situational. Situational context is an event happening at the time.",
      why: "The 1875 date and studying by candlelight tell the time period. Nursing for twenty years and growing up with two languages tell about the writer. The bus breaking down is an event at the time, so it is situational." },
    { id: "SK-TC2c-S05", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C07"],
      stem: ["Box: Ms. Kemp wrote this note to her class on a Monday. The night before, the custodian had put a fresh, shiny coat of wax on the hall floors.", "Class, please walk slowly in the hall today. It is like a skating rink out there!"],
      prompt: "Read the text in the box. Why does Ms. Kemp say the hall is like a skating rink?",
      choices: [
        { text: "The new wax had made the hall floor very slippery.", correct: true },
        { text: "The school had turned the hall into a place to skate." },
        { text: "The hall was very cold because the heat was off." },
        { text: "The class was going ice skating after lunch." }
      ],
      clue: "Situational context is what was happening at the time. It can explain why someone says something.",
      hints: [
        "Situational context is what was happening at the time. It can explain why someone says something.",
        "Read the text box, then the note.",
        "Nothing in the box or the note is about a skating trip, so that choice has no support. Check the other choices."
      ],
      how: [
        "The box says the hall floors had just been waxed.",
        "A fresh coat of wax makes a floor shiny and slippery, like ice.",
        "The answer is \"The new wax had made the hall floor very slippery.\"",
        "The hall is not really a rink, and nothing says it was cold."
      ],
      misconception: "A common mix-up is reading a comparison as if it really happened. Find the situation that explains it.",
      why: "The answer is \"The new wax had made the hall floor very slippery.\" The box tells the situation, and a waxed floor can be as slippery as ice. The hall is not really a rink, nothing says it was cold, and there is no skating trip." },
    { id: "SK-TC2c-S06", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C04"],
      stem: ["Box: Mr. Lin studies birds. He wrote these notes in his bird notebook.", "Oct. 3. Feeder 2.", "Counted 30 goldfinches at once.", "Seed tray empty by noon."],
      prompt: "Read the notes in the box. How does the goldfinch count help explain Mr. Lin's last note?",
      choices: [
        { text: "With so many birds eating, the seed ran out quickly.", correct: true },
        { text: "The goldfinches knocked the tray off the feeder." },
        { text: "Mr. Lin forgot to fill the seed tray that morning." },
        { text: "Mr. Lin studies birds, so he writes short notes." }
      ],
      clue: "Situational context is what was happening when the writer wrote. One note can help explain another.",
      hints: [
        "Situational context is what was happening when the writer wrote. One note can help explain another.",
        "Read the notes after the box in order: the date and place, the count and the seed tray.",
        "Nothing says the tray fell off the feeder, so that choice has no support. Check the other choices."
      ],
      how: [
        "Mr. Lin counted 30 goldfinches at the feeder at once.",
        "That many birds eat a lot of seed, so the tray was empty by noon.",
        "The answer is \"With so many birds eating, the seed ran out quickly.\"",
        "His job explains why his notes are short, not why the seed ran out, and nothing says he forgot to fill it."
      ],
      misconception: "A common mix-up is choosing a true fact about the writer that does not explain the detail in the question.",
      why: "The answer is \"With so many birds eating, the seed ran out quickly.\" Thirty goldfinches eat a lot. His job explains his short notes, and nothing says the tray fell or that he forgot to fill it." },
    { id: "SK-TC2c-S07", type: "ms", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: [], pick: 2,
      like: ["SK-TC2c-C06"],
      stem: ["Box: This story is historical fiction. It is set in 1922, in a small town in Georgia. Back then, most homes had no refrigerator.", "Every other day, the iceman carried a big block of ice into our kitchen and set it in the icebox. Mama cooked supper on a wood stove. I set the table with our blue plates, and we all ate together. After supper, Papa read the newspaper out loud."],
      prompt: "Read the story in the box. Which TWO things in the story are different from how most families live today?",
      choices: [
        { text: "A block of ice keeps the food cold in an icebox.", correct: true },
        { text: "Supper is cooked on a wood stove.", correct: true },
        { text: "A child helps set the table for supper." },
        { text: "The family eats supper together." },
        { text: "A parent reads the news out loud." }
      ],
      clue: "A time-period clue shows how people did something back then. Ask: do most families still do it this way today?",
      hints: [
        "A time-period clue shows how people did something back then. Ask: do most families still do it this way today?",
        "Read the box, then each sentence of the story. Choose two.",
        "Many families today still eat supper together, so that detail is not a difference. Check the other choices."
      ],
      how: [
        "Today, most families keep food cold in a refrigerator and cook on a gas or electric stove.",
        "In 1922, ice was carried in for the icebox, and supper was cooked on a wood stove. Those are different.",
        "The answers are \"A block of ice keeps the food cold in an icebox.\" and \"Supper is cooked on a wood stove.\"",
        "Children still set the table, families still eat together, and some parents still read the news aloud."
      ],
      misconception: "A common mix-up is choosing something that sounds old but is still done today. Check each detail against today.",
      why: "The answers are \"A block of ice keeps the food cold in an icebox.\" and \"Supper is cooked on a wood stove.\" Today most homes have refrigerators and gas or electric stoves. Setting the table, eating together and reading the news still happen." },
    { id: "SK-TC2c-S08", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C08"],
      stem: ["Box: This diary is historical fiction. Imagine that a boy named Emmett wrote it in 1895. His uncle's job was to light the town's gas street lamps by hand each evening.", "Tonight I walked with Uncle Ray on his rounds. He carried a long pole with a tiny flame on the end. At each lamp he reached up and pulled a small chain, and the street began to glow."],
      prompt: "Read the box and the diary. Then choose the best answer for each blank.",
      text: "The diary was written {0}. It tells about {1}.",
      slots: [
        { options: ["by an author today, who imagined Emmett", "by a real boy named Emmett in 1895", "by Emmett's uncle, who lit the lamps", "by a newspaper writer in 1895"], answer: 0 },
        { options: ["a night with a lamp lighter in 1895", "how street lamps are made today", "how electric lights work", "a boy who got lost in the dark"], answer: 0 }
      ],
      clue: "Read the box before the text. It tells what kind of text this is and when it is set.",
      hints: [
        "Read the box before the text. It tells what kind of text this is and when it is set.",
        "In the box, find the words historical fiction and imagine. What do they tell you about who wrote the diary?",
        "Nothing says a newspaper writer wrote it, so that choice does not fit the first blank. Test the other choices for each blank."
      ],
      how: [
        "The box says the diary is historical fiction and asks you to imagine that Emmett wrote it in 1895.",
        "Historical fiction is written by an author today but set in the past. So an author today imagined Emmett.",
        "The first blank is \"by an author today, who imagined Emmett\" and the second blank is \"a night with a lamp lighter in 1895.\"",
        "Emmett is made up, and the diary is about lighting street lamps by hand, not making lamps, electric lights or a boy lost in the dark."
      ],
      misconception: "A common mix-up is thinking historical fiction is a real old paper. The box tells you it was made up and set long ago.",
      why: "The answers are \"by an author today, who imagined Emmett\" and \"a night with a lamp lighter in 1895.\" The box says it is historical fiction, so an author imagined Emmett. The diary shows a man lighting street lamps by hand, not making lamps, electric lights or a boy lost in the dark." },
    { id: "SK-TC2c-S09", type: "dropdown", points: 2, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C14"],
      stem: ["Box: Ms. Rowe sells umbrellas and raincoats at her shop downtown.", "Ms. Rowe's notebook: Rain again today! The shop was full all morning.", "Box: Theo is eight. His first baseball game was planned for today.", "Theo's diary: Rain again. No game. I stared out the window all day."],
      prompt: "Read the two texts in the box. Ms. Rowe and Theo write about the same rainy day. Choose the best answer for each blank.",
      text: "Ms. Rowe is glad about the rain because {0}. Theo is sad because {1}.",
      slots: [
        { options: ["more shoppers come in to buy umbrellas", "she likes to walk in puddles", "her plants need water", "she does not have to work"], answer: 0 },
        { options: ["his baseball game cannot be played", "he is afraid of thunder", "he lost his umbrella", "he wanted to wash the car"], answer: 0 }
      ],
      clue: "Individual context is who each writer is. The same weather can mean different things to different people.",
      hints: [
        "Individual context is who each writer is. The same weather can mean different things to different people.",
        "Read each text box, then each writer's own words.",
        "Nothing says Ms. Rowe has plants, so that choice does not fit the first blank. Test the other choices for each blank."
      ],
      how: [
        "Ms. Rowe sells umbrellas and raincoats, and her shop was full all morning. Rain brings her customers.",
        "Theo's first baseball game was planned for today, and the rain means no game.",
        "The first blank is \"more shoppers come in to buy umbrellas\" and the second blank is \"his baseball game cannot be played.\"",
        "Ms. Rowe works all morning, and nothing says Theo fears thunder, lost an umbrella or wanted to wash a car."
      ],
      misconception: "A common mix-up is thinking two people must feel the same about the same weather. Each writer's life explains the view.",
      why: "The answers are \"more shoppers come in to buy umbrellas\" and \"his baseball game cannot be played.\" Rain fills Ms. Rowe's shop and cancels Theo's game. Nothing says she has plants or a day off, or that he fears thunder." },
    { id: "SK-TC2c-S10", type: "ms", points: 2, dok: 3, std: ["3.T.C.2.c"], passages: [], pick: 2,
      like: ["SK-TC2c-C09"],
      stem: ["Nia's diary: Today we moved to our new house. Dad drove the big rental truck. He had to back it up our narrow driveway three times. Then he and Uncle Jay carried the heavy couch up the stairs. My job was to pack my books and tape the boxes shut."],
      prompt: "Read Nia's diary in the box. Suppose Dad wrote about moving day instead. Which TWO details would he most likely write about?",
      choices: [
        { text: "backing the big truck up the narrow driveway", correct: true },
        { text: "carrying the heavy couch up the stairs", correct: true },
        { text: "packing the books into boxes" },
        { text: "taping the boxes shut" },
        { text: "moving into a new house" }
      ],
      clue: "Individual context is who the writer is. People write most about the jobs they do and what they go through themselves.",
      hints: [
        "Individual context is who the writer is. People write most about the jobs they do and what they go through themselves.",
        "Reread the diary one sentence at a time. Choose two.",
        "Everyone in the family moved into the new house, so that detail does not depend on who the writer is. Check the other choices."
      ],
      how: [
        "Dad's jobs were driving the truck, backing it up the driveway three times and carrying the couch.",
        "Nia's jobs were packing her books and taping the boxes.",
        "A writer tells most about his own work. The answers are \"backing the big truck up the narrow driveway\" and \"carrying the heavy couch up the stairs.\"",
        "Packing and taping are Nia's jobs, and anyone in the family could write about the new house."
      ],
      misconception: "A common mix-up is mixing up who does each job. A writer's own work shapes what he writes.",
      why: "The answers are \"backing the big truck up the narrow driveway\" and \"carrying the heavy couch up the stairs.\" Those are Dad's jobs. Packing and taping are Nia's jobs, and anyone could write about the new house." },
    { id: "SK-TC2c-S11", type: "cr", dok: 3, std: ["3.T.C.2.c"], passages: [], rows: 4,
      like: ["SK-TC2c-C10"],
      stem: ["Box: This telegram is historical fiction. Imagine that it was sent in 1910. Back then, few homes had a telephone. For fast news, people sent a telegram, a short message sent over wires. They paid for every word.", "ARRIVED SAFE. BABY GIRL BORN TUESDAY. NAMED ROSE. LOVE, JAMES"],
      prompt: "How does knowing when the telegram was sent help you understand why it is so short? Write two or three sentences. Use one detail from the box and one detail from the telegram.",
      sample: "The box says it was sent in 1910, when people paid for every word of a telegram. That helps me understand why James wrote \"BABY GIRL BORN TUESDAY\" instead of a long sentence. He left out the little words to save money.",
      criteria: [
        "I told when the telegram was sent, using the box.",
        "I gave a detail from the telegram.",
        "I explained how the time period helps the detail make sense."
      ],
      clue: "Context can explain a detail. First find when the telegram was sent. Then ask what was true about telegrams back then.",
      hints: [
        "Context can explain a detail. First find when the telegram was sent. Then ask what was true about telegrams back then.",
        "Use the box for the time. Then look at how James wrote his news.",
        "You can start like this: The box says ___. That helps me understand ___ because ___."
      ],
      how: [
        "Read the box: the telegram is set in 1910, and people paid for every word.",
        "Pick a detail from the telegram, such as \"BABY GIRL BORN TUESDAY.\"",
        "Explain the link: every word cost money, so James left out little words like a, was and on.",
        "One good answer follows. Other answers can also be right."
      ],
      why: "Many answers can be right. A good answer tells the time from the box, gives a detail from the telegram, and explains how paying for every word made the message short." },
    /* Coordinator follow-up (author b3a): S12-S15 are second similar items for C11, C12, C13 and C15, whose
       first similar item (S01, S03, S02, S03) is used up earlier in the same sitting by P8, P9 and P4. */
    { id: "SK-TC2c-S12", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C11"],
      stem: ["Box: Tova grew up in Alaska, where winters are long and very cold. This year, her family moved to Florida.", "Tova's journal: It is January, and I am wearing shorts! My new friends say it feels chilly today. I keep laughing."],
      prompt: "Read the text in the box. Why does Tova think the January day is warm, when her friends think it is chilly?",
      choices: [
        { text: "She grew up in Alaska, where winters are far colder.", correct: true },
        { text: "She was wearing a heavy coat that morning." },
        { text: "It was the hottest January day ever in Florida." },
        { text: "Her friends had been playing in the snow." }
      ],
      clue: "Individual context is who the writer is: her background and her experiences. Ask how the two people's experiences are different.",
      hints: [
        "Individual context is who the writer is: her background and her experiences. Ask how the two people's experiences are different.",
        "Read the text box and the whole journal entry.",
        "Florida in January has no snow to play in, and nothing in the journal says there was, so that choice has no support. Check the other choices."
      ],
      how: [
        "The box says Tova grew up in Alaska, where winters are long and very cold.",
        "Her friends grew up in Florida, so a cool day feels chilly to them. To Tova, it feels warm.",
        "The answer is \"She grew up in Alaska, where winters are far colder.\"",
        "She is wearing shorts, not a coat, and her friends call it chilly, so it was not the hottest day ever."
      ],
      misconception: "A common mix-up is looking only at the weather that day. Who the writer is, and where she comes from, can explain her view.",
      why: "The answer is \"She grew up in Alaska, where winters are far colder.\" Her background makes a Florida January feel warm. She wears shorts, her friends find it chilly, and there is no snow." },
    { id: "SK-TC2c-S13", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C12"],
      stem: ["Box: Mrs. Bell wrote this note to families on a Monday in October. That week, workers were putting a new roof over the school's front entrance. The work would last until Friday.", "Dear Families, Please use the back gate for drop-off and pickup until Friday. Thank you!"],
      prompt: "Read the text in the box. Which detail from the box best explains why Mrs. Bell says \"until Friday\"?",
      choices: [
        { text: "The roof work would last until Friday.", correct: true },
        { text: "She wrote the note on a Monday." },
        { text: "Workers were putting on a new roof." },
        { text: "The note was written in October." }
      ],
      clue: "Situational context is what was happening when a text was written. Use it to explain words that the text alone does not explain.",
      hints: [
        "Situational context is what was happening when a text was written. Use it to explain words that the text alone does not explain.",
        "Read the text box one sentence at a time, then the note.",
        "The month does not tell when the back gate will stop being used, so that choice does not fit. Check the other choices."
      ],
      how: [
        "The note asks families to use the back gate until Friday.",
        "The box says the roof work would last until Friday, so the front entrance will be open again after that.",
        "The answer is \"The roof work would last until Friday.\"",
        "The new roof explains why the front entrance is closed, but not until when, and Monday is only when she wrote."
      ],
      misconception: "A common mix-up is choosing the detail that explains why something changed instead of the detail that explains how long.",
      why: "The answer is \"The roof work would last until Friday.\" That is why the back gate is used until then. The new roof explains why the front is closed, not for how long, and Monday and October tell only when she wrote." },
    { id: "SK-TC2c-S14", type: "hottext", points: 1, dok: 2, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C13"],
      stem: ["Box: This letter is historical fiction. Imagine that a boy wrote it in 1950, while he rode a train to visit his uncle."],
      prompt: "Read the box. Which sentence could the boy NOT have written in his letter in 1950?",
      options: [
        "The train has a dining car with white tablecloths.",
        "I watched the cotton fields go by from my window.",
        "The conductor punched a hole in my ticket.",
        "I will mail this letter at the next station.",
        "I checked when we would arrive on my phone."
      ],
      answer: [4], pick: 1,
      clue: "Time-period clues help you check what people could do back then. Ask whether each thing was around in 1950.",
      hints: [
        "Time-period clues help you check what people could do back then. Ask whether each thing was around in 1950.",
        "Read each sentence, and picture what it names: a dining car, a window, a ticket, a station and a phone.",
        "People were looking out of train windows long before 1950, so the boy could have written that sentence. Check the other sentences."
      ],
      how: [
        "Dining cars, ticket punches and mailing letters at stations were all part of train trips in 1950.",
        "Phones you can carry did not exist until many years later. In 1950, phones were attached to walls by a cord.",
        "The answer is \"I checked when we would arrive on my phone.\"",
        "A punched ticket may seem odd today, but it was normal on trains back then."
      ],
      misconception: "A common mix-up is thinking that anything unusual today could not have happened long ago. Check what was new and what was old.",
      why: "The answer is \"I checked when we would arrive on my phone.\" No one carried a phone in 1950. Dining cars, punched tickets and mailing a letter at the station were all part of train trips then." },
    { id: "SK-TC2c-S15", type: "mc", points: 1, dok: 3, std: ["3.T.C.2.c"], passages: [],
      like: ["SK-TC2c-C15"],
      stem: ["Dear Mr. Sims,", "Please do not ring the doorbell this week. Knock softly instead.", "Thank you!", "The Mensah Family"],
      prompt: "Read the note in the box. Which piece of context would best help a reader understand why the Mensah family wrote it?",
      choices: [
        { text: "Their new baby sleeps most of the day and wakes easily.", correct: true },
        { text: "They have lived next door to Mr. Sims for five years." },
        { text: "They wrote the note on a rainy Tuesday morning." },
        { text: "Their doorbell was painted a bright new color." }
      ],
      clue: "Context helps most when it explains what a text says. Ask which fact would make the note make sense.",
      hints: [
        "Context helps most when it explains what a text says. Ask which fact would make the note make sense.",
        "Reread the note. What does the family ask Mr. Sims to do instead?",
        "How long they have lived next door does not explain this one week, so that choice does not fit. Check the other choices."
      ],
      how: [
        "The note asks for a soft knock instead of the doorbell, only this week.",
        "A loud bell could wake someone who is sleeping.",
        "A new baby who wakes easily explains it. The answer is \"Their new baby sleeps most of the day and wakes easily.\"",
        "A painted doorbell still rings, and a rainy morning does not explain a whole week of soft knocks."
      ],
      misconception: "A common mix-up is choosing a true-sounding fact that does not explain the text. The best context makes the words make sense.",
      why: "The answer is \"Their new baby sleeps most of the day and wakes easily.\" A doorbell could wake the baby, so the family asks for a soft knock. How long they have lived there, the weather and the paint do not explain the note." }
  ],
  /* Hints and Show me how for items kept in practice: refs P4, P8 and P9 (core set 1) and Together P1, P2, P7 and P6. */
  addons: {
    "SK-TC2c-P1": {
      hints: [
        "Letters often have a date at the top. Find it before the greeting.",
        "Look at the heading above \"Dear Cousin Hattie.\"",
        "Ella only hopes to visit in the summer, so summer is not when she wrote. Check the other choices."
      ],
      how: [
        "The heading above the greeting says March 3, 1928.",
        "The answer is \"in March 1928.\" Summer is when Ella hopes to visit, and 2028 and 1938 do not match the date."
      ] },
    "SK-TC2c-P2": {
      hints: [
        "Read the text box before the letter. It tells what life was like back then.",
        "Compare what the box says about life in 1928 with how Ella reads at night.",
        "The lamp is not a gift from Hattie; Hattie sent a book. Check the other choices."
      ],
      how: [
        "The box says most farm families did not have electricity back then.",
        "So Ella's farm had no electric lights, and she reads by an oil lamp instead.",
        "The answer is \"Her farm did not have electric lights.\" Papa worries about her eyes, but the lamp is not there because electric lights would hurt them."
      ] },
    "SK-TC2c-P7": {
      hints: [
        "Letters often say early on why the writer is writing.",
        "Read the first paragraph after \"Dear Cousin Hattie.\"",
        "Ella's family is not moving; she only hopes to visit Hattie. Check the other choices."
      ],
      how: [
        "The first thing Ella writes is \"Thank you for the book you sent for my birthday.\"",
        "That is the situation that led her to write: a gift arrived, and she wants to thank Hattie.",
        "The answer is \"Hattie had sent her a book for her birthday, and Ella wanted to thank her.\" Papa and Walter plow the field themselves, and Ella says she cannot stop reading."
      ] },
    "SK-TC2c-P6": {
      hints: [
        "Read the note in the box. Who is the writer, and what is her job?",
        "Think about what a person with that job needs to write down about the frogs she studies.",
        "The notes are not written to a friend, so they are not a short, fun note for a friend. Check the other choices."
      ],
      how: [
        "The box says Dr. Ruiz is a scientist who studies frogs.",
        "Scientists count and write down exact facts so they can compare them later.",
        "The answer is \"She is a scientist, so she writes exact counts to keep track of the frogs.\" Nothing tells of a storm or a funny story."
      ] },
    "SK-TC2c-P4": {
      hints: [
        "Think about what Ella does not have on her farm. Then look for what Hattie has that Ella wishes for.",
        "Reread paragraphs 2 to 4 of the letter.",
        "Hattie does not have a mule or a cotton field; those are on Ella's farm. Check the other Part A choices, then find the sentence that matches your answer."
      ],
      how: [
        "The box says most farm families had no electricity in 1928.",
        "In paragraph 4, Ella says Hattie wrote that her house has electric lights and that she can ride a streetcar downtown.",
        "Part A: Hattie lives in a city with electric lights and streetcars. Part B: \"You wrote that your house has electric lights and that you can ride a streetcar downtown.\"",
        "The book was Hattie's gift to Ella, the mule is on Ella's farm, and Ella is the one who hopes to visit."
      ],
      misconception: "A common mix-up is choosing something about Ella's own life. The question asks what Hattie has that Ella wishes for." },
    "SK-TC2c-P8": {
      hints: [
        "Read the note in the box. What is Ms. Greene's job, and how long has she done it?",
        "Read the box, then both sentences of her note.",
        "The box says she wrote for the newsletter; she did not read about it there. Check the other choices."
      ],
      how: [
        "The box says Ms. Greene has driven a school bus in Georgia for 15 years.",
        "Her note says she has had to stop fast many times, and a rider who is standing can fall.",
        "The answer is \"She has driven a bus for years and has had to stop fast many times.\"",
        "She wrote the newsletter piece, not read it. Her own note says she has had to stop fast many times, so she did not learn it from a news video or from falling as a rider. Nothing in the box says she has ever been a rider who fell."
      ],
      misconception: "A common mix-up is choosing where a text was printed instead of what the writer has lived through." },
    "SK-TC2c-P9": {
      hints: [
        "The sign does not say why. Read the note in the box.",
        "Read the box, then the sign.",
        "Field day is still happening today, only in the gym, so it was not moved to next week. Check the other choices."
      ],
      how: [
        "The box says it had rained hard all night.",
        "After a hard rain, a grass field is too wet and muddy for races.",
        "The answer is \"The rain had made the field too wet and muddy to use.\"",
        "The sign says to meet in the gym, not to come back another day, and nothing is said about how close the gym is or about prizes."
      ],
      misconception: "A common mix-up is guessing a reason that sounds likely instead of reading the box that tells what happened." }
  },
  test: [
    { id: "SK-TC2c-T1", type: "dropdown", points: 2, dok: 1, passages: ["p2"],
      prompt: "Choose the words that best complete the sentence.",
      text: "The writer wrote this diary entry in {0}, in the city of {1}.",
      slots: [
        { options: ["1954", "1928", "2024"], answer: 0 },
        { options: ["Macon", "Atlanta", "Savannah"], answer: 0 }
      ],
      clue: "Look at the date above \"Dear Diary.\" Then look for the name of a place in the diary.",
      why: "The answers are 1954 and Macon. The heading says Saturday, October 9, 1954, and paragraph 4 says the living room is in Macon." },
    { id: "SK-TC2c-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why do all the kids on the street come over to watch?",
      choices: [
        { text: "Televisions were new, and many families did not have one.", correct: true },
        { text: "The kids wanted to eat the popcorn Mrs. Lee made." },
        { text: "The cowboy show was in bright and colorful pictures." },
        { text: "The writer's family was having a birthday party." }
      ],
      clue: "Read the text box. What was true about television in the 1950s?",
      why: "The answer is \"Televisions were new, and many families did not have one.\" The text box says TV was new then, so a family's first TV was exciting for the whole street." },
    { id: "SK-TC2c-T3", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does the diary show about TV back then compared with TV today?",
        choices: [
          { text: "The pictures were black and white, not color.", correct: true },
          { text: "Shows were on all day and all night long." },
          { text: "Every family already had more than one TV." },
          { text: "People could watch shows on their phones." }
        ] },
      partB: { prompt: "Which sentence from the diary best supports the answer to Part A?",
        choices: [
          { text: "\"There is no color, only gray, black and white.\"", correct: true },
          { text: "\"Daddy came home with our very first television set.\"" },
          { text: "\"Mrs. Lee from next door brought popcorn.\"" },
          { text: "\"Tomorrow I am going to write a letter to Grandma about it.\"" }
        ] },
      clue: "Look in paragraph 3, where the writer describes the picture on the screen.",
      why: "Part A: The pictures were black and white, not color. Part B: \"There is no color, only gray, black and white.\" Most TVs today show color, so this detail shows how TV was different in 1954." },
    { id: "SK-TC2c-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why does the writer want to tell Grandma about the TV?",
      choices: [
        { text: "Grandma does not have a TV, so it will be big news.", correct: true },
        { text: "Grandma asks for a letter every Saturday night." },
        { text: "Grandma wants to come and watch the cowboy show." },
        { text: "Grandma gave the family the TV as a present." }
      ],
      clue: "Read the last paragraph. What does it say about Grandma?",
      why: "The answer is \"Grandma does not have a TV, so it will be big news.\" The diary says Grandma does not have a television yet. At that time, a new TV was exciting news to share." },
    { id: "SK-TC2c-T7", type: "ebsr", points: 2, dok: 2, passages: ["p4"],
      prompt: "Read \"Keeping Turtle Nests Safe.\" This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why does Grace know so much about what baby sea turtles need?",
        choices: [
          { text: "She has spent many years taking care of turtle nests by the sea.", correct: true },
          { text: "She learned all about sea turtles by reading a kids' magazine." },
          { text: "She is a visitor who walks on the beach on warm summer nights." },
          { text: "She studied turtles as a young girl, so she has always known." }
        ] },
      partB: { prompt: "Which detail best supports the answer to Part A?",
        choices: [
          { text: "The box says that her job for 30 years has been keeping turtle nests safe.", correct: true },
          { text: "The box says that she wrote this piece for a kids' magazine." },
          { text: "Grace says that she always uses a red flashlight, never a white one." },
          { text: "Grace says that she now teaches every beach visitor she meets." }
        ] },
      clue: "Read the note in the box first. What has Grace done for most of her life? Then check what she says about when she was a girl.",
      why: "Part A: She has spent many years taking care of turtle nests by the sea. Part B: The box says that her job for 30 years has been keeping turtle nests safe. That is her individual context: her job and her life by the sea. She writes for the magazine, she did not learn from it. She teaches visitors, so she is not one. She says that as a girl she did not know about the lights. The red flashlight shows what she knows, but not how she learned it."},
    { id: "SK-TC2c-T6", type: "mc", points: 1, dok: 2, passages: ["p4"],
      prompt: "Read \"A Note to a Neighbor.\" How does knowing Imani's situation help you understand her note?",
      choices: [
        { text: "A storm was coming, so her family had to leave fast and could not stay to feed Goldie.", correct: true },
        { text: "Her family was going on a fun trip, so she planned ahead and asked for help with Goldie." },
        { text: "Her family was moving to a new town, so she was giving Goldie to Mr. Ortiz to keep." },
        { text: "Goldie was sick, so Imani wanted Mr. Ortiz to take her fish to a doctor for animals." }
      ],
      clue: "Read the note in the box first. What was happening in Imani's town? Then reread her note with that in mind.",
      why: "The answer is \"A storm was coming, so her family had to leave fast and could not stay to feed Goldie.\" The note alone could sound like a trip. The box tells the real reason: a hurricane was coming, and families near the beach had to leave right away. That is why Imani writes \"tonight\" and asks for help so suddenly. She says \"until we get back,\" so she is not giving Goldie away, and nothing says Goldie is sick." }
  ]
});
