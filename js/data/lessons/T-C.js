/* Lessons: 3.T.C Context (purpose and audience; authors and speakers). Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.T.C.1.a",
  title: "Author's purpose and audience",
  teach: {
    big: "Every author writes for a reason and for someone: to inform, to persuade or to entertain, and for a certain reader.",
    points: [
      "To inform means to teach facts. The text tells you true things about a topic.",
      "To persuade means to get you to do something or to agree. Look for words like should, please and let's.",
      "To entertain means to give you a fun story, a joke or a poem to enjoy.",
      "The audience is who the text is for. Look for names, the word you, and what the reader is asked to know or do.",
      "Ask two questions: Why did the author write this? Who did the author write it for?"
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
        "Look for who is being asked. The text says everyone in Room 9."
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
      why: "The answer is to get the principal to agree to a school garden. Rosa asks for a garden, gives reasons, and ends with \"Please say yes to a school garden.\" That is persuading." },
    { id: "SK-TC1a-P2", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "Who is the audience for this letter?",
      choices: [
        { text: "the school principal", correct: true },
        { text: "the students in Ms. Hart's class" },
        { text: "families who give seeds and tools" },
        { text: "kids who do not like vegetables" }
      ],
      clue: "A letter names the person it is written to. Look at the very top.",
      why: "The answer is the school principal. The letter begins \"Dear Principal Okafor,\" and asks the principal to say yes. The other people are only talked about in the letter." },
    { id: "SK-TC1a-P3", type: "hottext", points: 2, dok: 2, passages: ["p1"],
      prompt: "Rosa asks the principal for a garden in two places. Choose the two sentences in the letter.",
      targets: ["p1:2:1", "p1:2:2", "p1:3:1", "p1:4:3", "p1:5:3"],
      answer: ["p1:2:2", "p1:5:3"], pick: 2,
      clue: "Look for sentences where Rosa asks for something, not sentences that give a reason or tell about herself.",
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
      clue: "A persuasive writer gives reasons. Look at how paragraphs 3 and 4 begin.",
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
  test: [
    { id: "SK-TC1a-T1", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "What is the main purpose of this page?",
      choices: [
        { text: "to tell new players what they need to know", correct: true },
        { text: "to get kids to sign up for a soccer team" },
        { text: "to tell a story about an exciting game" },
        { text: "to explain the rules of how soccer is played" }
      ],
      clue: "Look at the headings. What kind of information does each part give?",
      why: "The answer is to tell new players what they need to know. The page gives facts about when, where, what to bring and what happens if it rains. The players have already joined, so the page is not trying to get them to sign up." },
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
      "A heading is a small title over a section. It tells what that section is about.",
      "A bold word is printed in dark letters because it is important. You can often find what it means in a glossary at the back.",
      "A text box is set apart from the paragraphs. It often gives an extra fact, like a \"Did You Know?\" box.",
      "A picture, a caption or a diagram with labels shows what the words describe. A caption tells what a picture shows. Labels name the parts.",
      "Use the features to find facts fast. Read the headings first to decide where to look."
    ],
    words: [
      { term: "heading", means: "a small title that tells what a section is about" },
      { term: "glossary", means: "a list of important words and their meanings at the back of a book" },
      { term: "caption", means: "words under a picture that tell what it shows" },
      { term: "diagram", means: "a drawing with labels that shows the parts of something" }
    ],
    example: {
      label: "Text features in an article about frogs",
      lines: [
        "Heading: What Frogs Eat",
        "Bold word: Frogs catch insects with a sticky tongue. (The word tongue is in bold.)",
        "Caption under a picture: A green frog waits on a lily pad.",
        "Text box: Did You Know? Frogs can jump far for their size."
      ],
      note: "The heading tells what the section is about. The bold word is important. The caption explains the picture. The text box adds a fun extra fact."
    },
    tip: "On the test, you may be asked which heading to read to find a fact, or how a text box, bold word or diagram helps the reader. Think about the job each feature does."
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
      show: ["From a book: A cactus stores water in its thick stem. (The word stem is in bold.)", "From the glossary: stem: the main part of a plant that holds up the leaves or flowers"],
      ask: "Why is stem in bold, and where can you find what it means?",
      steps: [
        "Bold print tells you the word is important to the topic.",
        "A bold word is often in the glossary at the back of the book.",
        "Read the glossary meaning, then read the sentence again. Now it makes sense."
      ],
      answer: "Stem is in bold because it is an important word. You can find its meaning in the glossary."
    }
  ],
  parent: "Pick up a nonfiction book or a kids' magazine. Before reading, flip through it together and ask: What do the headings tell us? Which words are in bold? What does this picture or box add?",
  passages: [
    { id: "p1", title: "Life in a Beaver Pond", genre: "Informational text",
      paragraphs: [
        ["Beavers are some of the best builders in nature.", "They turn streams into ponds, and they build their own homes."],
        ["## Busy Builders"],
        ["Beavers cut down small trees with their strong front teeth.", "They push sticks, rocks and mud into a stream to build a wall called a dam.", "The dam slows the water and makes a pond."],
        ["## A Home with a Secret Door"],
        ["In the pond, beavers build a home called a lodge.", "A lodge is a dome made of sticks and mud.", "Its doors are under the water, so foxes and other hunters cannot easily get inside.", "The room inside stays dry above the water."],
        ["## Did You Know?"],
        ["Box: A beaver's front teeth never stop growing.", "Chewing on wood keeps them from getting too long."],
        ["## Tail Talk"],
        ["A beaver has a wide, flat tail.", "When a beaver senses danger, it slaps its tail on the water.", "The loud smack warns other beavers to dive and hide."]
      ] },
    { id: "p2", title: "The Monarch's Long Trip", genre: "Informational text",
      paragraphs: [
        ["Monarch butterflies are easy to spot.", "Their wings are bright orange with black lines and white dots."],
        ["## From Egg to Wing"],
        ["A monarch starts life as a tiny egg on a milkweed leaf.", "A caterpillar hatches and eats the milkweed leaves.", "Milkweed is the only plant a monarch caterpillar eats.", "Then the caterpillar makes a hard case called a chrysalis.", "Inside, its body changes.", "At last, an adult butterfly comes out."],
        ["## Bright Colors Send a Message"],
        ["Many birds will not eat monarchs.", "The milkweed the caterpillars eat makes monarchs taste bad.", "Their bright orange color warns birds to stay away."],
        ["## A Long Trip South"],
        ["In the fall, many monarchs fly south to stay warm.", "Some fly all the way to Mexico.", "On the way, they stop to rest and to drink nectar from flowers.", "Some of them pass through Georgia."],
        ["## Did You Know?"],
        ["Box: A monarch can taste with its feet.", "When it lands on a leaf, its feet can tell if the plant is milkweed."]
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
      clue: "A warning is a kind of message. Read each heading and ask which one is about a beaver sending a message.",
      why: "The answer is Tail Talk. That section tells how a beaver slaps its tail on the water to warn other beavers. \"Talk\" in the heading is a clue that the section is about sending a message." },
    { id: "SK-TC1b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What does the heading \"A Home with a Secret Door\" tell the reader?",
      choices: [
        { text: "The section is about a beaver home with a hidden way in.", correct: true },
        { text: "The section is about how beavers cut down trees." },
        { text: "The section is about a door that people built for beavers." },
        { text: "The section is about the sounds beavers make in danger." }
      ],
      clue: "Think about what \"home\" and \"secret door\" mean. Then check the section under that heading.",
      why: "The answer is \"The section is about a beaver home with a hidden way in.\" The section tells about the lodge, and its doors are under the water where hunters cannot easily get in." },
    { id: "SK-TC1b-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why did the author put the facts about teeth in a text box?",
      choices: [
        { text: "to share an extra fact that is fun to know", correct: true },
        { text: "to tell the main idea of the whole article" },
        { text: "to explain the steps for building a dam" },
        { text: "to warn readers to stay away from beavers" }
      ],
      clue: "A text box sits apart from the paragraphs. Is the fact in it the main idea, or something added?",
      why: "The answer is to share an extra fact that is fun to know. The box sits under \"Did You Know?\" and adds a surprising fact. The main idea is that beavers are great builders." },
    { id: "SK-TC1b-P4", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["In a book about beavers, the word lodge is printed in dark, bold letters.", "The glossary at the back says: lodge: a beaver's home made of sticks and mud"],
      prompt: "How does the bold print help the reader?",
      choices: [
        { text: "It shows the word is important and is explained in the glossary.", correct: true },
        { text: "It shows the word is the title of the whole book." },
        { text: "It shows the word is spelled in a new or unusual way." },
        { text: "It shows the word should be read in a loud voice." }
      ],
      clue: "Think about why an author makes a word stand out, and where else the word shows up.",
      why: "The answer is \"It shows the word is important and is explained in the glossary.\" Bold print points out key words, and the glossary tells what they mean." },
    { id: "SK-TC1b-P5", type: "hottext", points: 2, dok: 3, passages: ["p1"],
      stem: ["Imagine a diagram next to the article.", "It shows a lodge cut in half so you can see inside.", "One label points to a tunnel under the water.", "Another label points to a dry room above the water."],
      prompt: "Which two sentences in the article tell about the parts the diagram's labels point to? Choose two sentences.",
      targets: ["p1:3:2", "p1:5:1", "p1:5:3", "p1:5:4", "p1:9:2"],
      answer: ["p1:5:3", "p1:5:4"], pick: 2,
      clue: "Read the two labels again. Find the sentences that describe those same two parts of the lodge.",
      why: "The answers are \"Its doors are under the water, so foxes and other hunters cannot easily get inside.\" and \"The room inside stays dry above the water.\" The diagram's labels show the underwater tunnel and the dry room, so it helps readers picture those sentences." },
    { id: "SK-TC1b-P6", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each text feature to the job it does.",
      cols: ["Heading", "Text box", "Bold word", "Diagram"],
      rows: [
        { text: "tells what a section will be about", answer: 0 },
        { text: "gives an extra fact set apart from the paragraphs", answer: 1 },
        { text: "marks an important word that is in the glossary", answer: 2 },
        { text: "shows the parts of something with labels", answer: 3 }
      ],
      clue: "Think about where each feature sits on the page and what it helps you do.",
      why: "A heading tells what a section is about. A text box gives an extra fact set apart. A bold word marks an important glossary word. A diagram uses labels to show parts." }
  ],
  test: [
    { id: "SK-TC1b-T1", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "Which heading would help a reader find out why birds stay away from monarchs?",
      choices: [
        { text: "Bright Colors Send a Message", correct: true },
        { text: "From Egg to Wing" },
        { text: "A Long Trip South" },
        { text: "Did You Know?" }
      ],
      clue: "Birds staying away is about what the birds see. Which heading is about something a bird could see?",
      why: "The answer is Bright Colors Send a Message. That section says monarchs taste bad and their bright orange color warns birds to stay away." },
    { id: "SK-TC1b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "How does the text box add to the article?",
      choices: [
        { text: "It gives a surprising fact about how monarchs find milkweed.", correct: true },
        { text: "It tells the steps a monarch goes through as it grows." },
        { text: "It explains why monarchs fly south in the fall." },
        { text: "It names the colors on a monarch's wings." }
      ],
      clue: "Read only the words in the box. What new fact does it give that the paragraphs do not?",
      why: "The answer is \"It gives a surprising fact about how monarchs find milkweed.\" The box says a monarch can taste with its feet to tell if a plant is milkweed. That fact is not in the paragraphs." },
    { id: "SK-TC1b-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      stem: ["Imagine a diagram next to the section \"From Egg to Wing.\"", "It shows four pictures in a circle with arrows from one to the next.", "The pictures show an egg, a caterpillar, a chrysalis and a butterfly."],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does the diagram help the reader understand?",
        choices: [
          { text: "the order of the stages in a monarch's life", correct: true },
          { text: "the path monarchs take to fly to Mexico" },
          { text: "the reason birds do not eat monarchs" },
          { text: "the kinds of flowers monarchs drink from" }
        ] },
      partB: { prompt: "Which sentence from the article does the diagram help explain?",
        choices: [
          { text: "\"Then the caterpillar makes a hard case called a chrysalis.\"", correct: true },
          { text: "\"Some fly all the way to Mexico.\"" },
          { text: "\"Many birds will not eat monarchs.\"" },
          { text: "\"On the way, they stop to rest and to drink nectar from flowers.\"" }
        ] },
      clue: "Arrows from one picture to the next show what comes after what. Which section tells things in that order?",
      why: "Part A: the order of the stages in a monarch's life. Part B: \"Then the caterpillar makes a hard case called a chrysalis.\" The diagram shows egg, caterpillar, chrysalis and butterfly in order, which matches the steps in \"From Egg to Wing.\"" },
    { id: "SK-TC1b-T4", type: "dropdown", points: 2, dok: 2, passages: ["p2"],
      stem: ["Suppose the word chrysalis is printed in bold in the article.", "The glossary says: chrysalis: the hard case a caterpillar makes before it becomes a butterfly"],
      prompt: "Choose the words that best complete the sentences.",
      text: "The bold print tells the reader that chrysalis is {0}. The reader can check what it means by {1}.",
      slots: [
        { options: ["an important word", "the name of the author", "a heading for a section"], answer: 0 },
        { options: ["looking it up in the glossary", "reading the title again", "counting the paragraphs"], answer: 0 }
      ],
      clue: "Think about why an author makes a word dark and where a reader can find word meanings in a book.",
      why: "The answers are \"an important word\" and \"looking it up in the glossary.\" Bold print marks key words, and the glossary gives their meanings." },
    { id: "SK-TC1b-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author wants to add a heading above the first paragraph. Which heading fits that paragraph best?",
      choices: [
        { text: "Meet the Monarch", correct: true },
        { text: "Tasting with Feet" },
        { text: "Flying to Mexico" },
        { text: "How Milkweed Grows" }
      ],
      clue: "A heading tells what its own section is about. Read only the first paragraph.",
      why: "The answer is Meet the Monarch. The first paragraph introduces monarchs and tells what they look like. The other headings fit other parts of the article or none of it." }
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
    prompt: "Plan a poster that teaches younger kids about an animal you like. Write a title. Describe one picture you would draw. Write a caption for the picture and one or two fact sentences. Add one label or one sound idea.",
    checklist: [
      "I wrote a title that tells what my poster is about.",
      "I described a picture that matches my words.",
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
        ["A peanut plant has small yellow flowers.", "After a flower fades, a stem grows down into the soil.", "The peanut grows at the end of that stem, under the ground."],
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
      prompt: "Kenji wants to add one picture to Slide 2. Which picture would best help his audience understand that slide?",
      choices: [
        { text: "a drawing of a peanut plant with peanuts under the soil", correct: true },
        { text: "a photo of a jar of peanut butter on a table" },
        { text: "a map of Georgia with the state capital marked" },
        { text: "a photo of a farmer driving a big red tractor" }
      ],
      clue: "Read the heading and the words for Slide 2. What would be hard to picture without help?",
      why: "The answer is a drawing of a peanut plant with peanuts under the soil. Slide 2 says the flowers are above the ground and the peanuts grow below. A drawing shows both parts at once." },
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
        { text: "jar of peanut butter" },
        { text: "state of Georgia" },
        { text: "farm machine" }
      ],
      clue: "Labels name parts of the thing in the diagram. Which choices are parts of a peanut plant?",
      why: "The answers are \"yellow flower\" and \"peanut under the soil.\" Both are parts of the plant that Slide 2 describes. The others are not parts of a peanut plant." },
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
        { options: ["the rumble of a farm machine digging", "birds singing in a forest", "a crowd cheering at a ball game"], answer: 0 }
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
        { text: "a recording of a dog barking at night" },
        { text: "a recording of rain falling on a roof" },
        { text: "a recording of a school bell ringing" }
      ],
      clue: "The title tells readers to listen for something. What would they need to hear to know it?",
      why: "The answer is a recording of peepers singing at a pond. The title says \"Listen for Spring Peepers!\" so hearing the real sound helps first graders know what to listen for on the trail." },
    { id: "SK-TC1c-T4", type: "ms", points: 2, dok: 3, passages: ["p2"], pick: 2,
      prompt: "Amara's audience is first graders. Which two changes would make her poster easier for them to use? Pick two.",
      choices: [
        { text: "Make the title big so it is easy to see from far away.", correct: true },
        { text: "Add a drawing of the X mark with an arrow and the label \"Look for this!\"", correct: true },
        { text: "Add a long list of science words with no pictures." },
        { text: "Write all the words in very small letters." },
        { text: "Take out the picture so there is more room for words." }
      ],
      clue: "Young children read slowly and learn a lot from pictures. Which changes make the poster easier to see and use?",
      why: "The answers are making the title big and adding a drawing of the X mark with a label. A big title is easy to spot, and a labeled drawing shows first graders exactly what to look for. Long lists, tiny letters and no pictures make a poster harder for young readers." },
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
      "In first person, the narrator is a character in the story. Look for I, me, my and we.",
      "In third person, the narrator is outside the story. Look for he, she, they and the characters' names.",
      "A narrator's point of view is how the narrator thinks and feels about what happens.",
      "You, the reader, may see things differently. Look at what actually happens, not only at what the narrator says.",
      "Ask: How does the narrator feel? How do I feel? Why might they be different?"
    ],
    words: [
      { term: "narrator", means: "the voice that tells the story" },
      { term: "point of view", means: "how someone sees and feels about something" },
      { term: "first person", means: "told by a character, using I and me" },
      { term: "third person", means: "told by someone outside the story, using he, she and they" }
    ],
    example: {
      label: "Same event, two points of view",
      lines: [
        "First person: I spilled the paint, and my face turned red.",
        "Third person: Ana spilled the paint, and her face turned red."
      ],
      note: "In the first sentence, the narrator is the one who spilled the paint, so the words I and my are used. In the second, someone outside the story tells about Ana."
    },
    tip: "On the test, you may be asked who is telling the story, how the narrator feels, or which detail might make a reader feel differently. Find the narrator's feeling words, then check what really happens."
  },
  learn: [
    {
      show: ["My dog, Rex, is the best dog in the whole world. He brings me sticks and licks my face every morning."],
      ask: "Who is telling this, and is it first person or third person?",
      steps: [
        "Look for I, me and my. This text uses my and me.",
        "That means the narrator is a character. It is Rex's owner.",
        "A character telling the story is first person. The narrator thinks Rex is the best dog."
      ],
      answer: "Rex's owner is telling it, in first person."
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
      clue: "Look for I and my in paragraph 1. Who says \"my little brother, Dev\"?",
      why: "The answer is Dev's big sister. The narrator says \"my little brother, Dev,\" and Dev calls her \"Sis\" at the end. She uses I and my, so the narrator is a character in the story. It is told in first person." },
    { id: "SK-TC2a-P2", type: "hottext", points: 2, dok: 2, passages: ["p1"],
      prompt: "Which two sentences show how the narrator feels about Dev at the start of the story? Choose two sentences.",
      targets: ["p1:1:1", "p1:1:2", "p1:2:1", "p1:2:3", "p1:3:1"],
      answer: ["p1:1:2", "p1:2:3"], pick: 2,
      clue: "Look for what the narrator thinks or does, not just facts about Dev.",
      why: "The answers are \"I knew right away that he would ruin everything.\" and \"I rolled my eyes.\" Both show the narrator is annoyed with Dev and expects him to cause trouble." },
    { id: "SK-TC2a-P3", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "The narrator says Dev is just lucky. What can a reader tell that the narrator does not say at first?",
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
    { id: "SK-TC2a-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Read each sentence. Is it told in first person or third person?",
      cols: ["First person", "Third person"],
      rows: [
        { text: "I packed my bag for the trip.", answer: 0 },
        { text: "Carlos packed his bag for the trip.", answer: 1 },
        { text: "We sang all the way to Savannah.", answer: 0 },
        { text: "They sang all the way to Savannah.", answer: 1 }
      ],
      clue: "I, my and we mean the teller is in the story. Names, he, his and they mean someone outside is telling about others.",
      why: "\"I packed my bag\" and \"We sang\" are first person because the teller is part of the action. \"Carlos packed his bag\" and \"They sang\" are third person because someone outside is telling about others." },
    { id: "SK-TC2a-P5", type: "mc", points: 1, dok: 3, passages: ["p1"],
      prompt: "How does the narrator's view change by the end of the story?",
      choices: [
        { text: "She starts to see that Dev's talking helped.", correct: true },
        { text: "She decides Dev should never help again." },
        { text: "She thinks the yard sale was a waste of time." },
        { text: "She still thinks Dev ruined everything." }
      ],
      clue: "Compare paragraph 1 with the last sentence. What does the narrator admit at the end?",
      why: "The answer is \"She starts to see that Dev's talking helped.\" At the start, she thinks he will ruin everything. At the end, she quietly says, \"I guess talking to people helps.\"" }
  ],
  test: [
    { id: "SK-TC2a-T1", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "From which point of view is this story told?",
      choices: [
        { text: "first person, by Grandpa's grandchild", correct: true },
        { text: "first person, by Grandpa" },
        { text: "third person, by a narrator outside the story" },
        { text: "first person, by Grandpa's father" }
      ],
      clue: "Find who says I and me. Then find who that person calls \"Grandpa.\"",
      why: "The answer is first person, by Grandpa's grandchild. The narrator uses I and me and talks about Grandpa, so the narrator is Grandpa's grandchild, a character in the story." },
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
        { text: "The narrator yawns while Grandpa smiles at a bird." },
        { text: "The narrator would rather be home sleeping." },
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
    { id: "SK-TC2a-T5", type: "dropdown", points: 2, dok: 2, passages: [],
      stem: "She opened the gate and stepped into the garden.",
      prompt: "Read the sentence. Choose the words that best complete the sentences below.",
      text: "This sentence is told in {0}. If the girl were telling it herself, it would begin {1}.",
      slots: [
        { options: ["third person", "first person", "a poem"], answer: 0 },
        { options: ["\"I opened the gate\"", "\"He opened the gate\"", "\"They opened the gate\""], answer: 0 }
      ],
      clue: "Look at the first word. Does it show the teller is in the story or outside it? What word does a teller use for herself?",
      why: "The answers are \"third person\" and \"I opened the gate.\" The word She shows someone outside is telling about the girl. If the girl told it herself, she would use I." }
  ]
});

PP.addLesson({
  code: "3.T.C.2.c",
  title: "When, where and why a text was written",
  teach: {
    big: "Knowing when, where and why a text was written helps me understand what the writer says.",
    points: [
      "Look for clues about context: a date, a place, the writer's name, or a note in a box.",
      "The time period matters. Long ago, many things were different, like lights, travel and how people got news.",
      "Who wrote it matters. A child, a scientist and a park ranger see things in different ways.",
      "The situation matters. What was happening when the writer wrote it?",
      "Ask: How does knowing this help me understand the text?"
    ],
    words: [
      { term: "context", means: "the time, place and situation in which something was written" },
      { term: "time period", means: "a stretch of time in history, like the 1920s" },
      { term: "historical fiction", means: "a made-up story set in a real time in the past" }
    ],
    example: {
      label: "A note with context",
      lines: [
        "January 29, 2014, Atlanta, Georgia",
        "Dear Grandpa, School is closed again! Snow and ice cover the roads, and almost nobody can drive. We built a tiny snowman."
      ],
      note: "Snow is rare in Atlanta, so a storm like this is big news there. The date and place explain why the writer is so excited and why the roads are a problem."
    },
    tip: "On the test, look for a date, a place or a note in a box. Questions may ask why a detail matters at that time or place."
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
      show: ["Note in a box: A park ranger wrote this sign during a very dry summer. It had not rained for weeks.", "Sign: No campfires today. Please help keep the forest safe."],
      ask: "Why did the ranger write this sign?",
      steps: [
        "Read the context first. It was a dry summer with no rain for weeks.",
        "Think about what that means. Dry leaves and grass can catch fire easily.",
        "Now the sign makes sense. The ranger wants to stop a forest fire."
      ],
      answer: "The forest was very dry, so the ranger wrote the sign to stop fires from starting."
    }
  ],
  parent: "Look at old family photos, letters or cards together. Ask: When was this made? Where? How was life different then, and how can you tell?",
  passages: [
    { id: "p1", title: "A Letter from the Farm", genre: "Historical fiction (letter)",
      paragraphs: [
        ["Box: This letter is historical fiction.", "It is made up, but it shows what life was like on many Georgia farms in 1928.", "Back then, most farm families did not have electricity."],
        ["## March 3, 1928"],
        ["Dear Cousin Hattie,"],
        ["Thank you for the book you sent for my birthday.", "I read it every night by the light of our oil lamp.", "Papa says I will hurt my eyes, but I cannot stop reading."],
        ["Spring is coming to our farm.", "Papa and my brother Walter are getting the mule ready to plow the cotton field.", "I help Mama carry water from the well and feed the chickens."],
        ["You are so lucky to live in Atlanta.", "You wrote that your house has electric lights and that you can ride a streetcar downtown.", "I hope I can visit you this summer and see it all."],
        ["Please write back soon.", "Your cousin,", "Ella"]
      ] },
    { id: "p2", title: "Our First Television", genre: "Historical fiction (diary)",
      paragraphs: [
        ["Box: This diary entry is historical fiction.", "It shows what life was like for many families in the 1950s.", "Back then, television was new, and many families did not have one yet."],
        ["## Saturday, October 9, 1954"],
        ["Dear Diary,"],
        ["Today was the best day ever!", "Daddy came home with our very first television set.", "It is a big wooden box with a small screen."],
        ["Daddy turned a knob, and a gray picture of a cowboy show popped up.", "There is no color, only gray, black and white.", "We can watch only a few channels."],
        ["All the kids on our street came over to watch.", "Mrs. Lee from next door brought popcorn.", "We sat on the floor of our living room in Macon until supper."],
        ["Tomorrow I am going to write a letter to Grandma about it.", "She does not have a television yet."]
      ] }
  ],
  practice: [
    { id: "SK-TC2c-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "When was this letter written?",
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
      clue: "Read the text box before the letter. What did most farms not have in 1928?",
      why: "The answer is \"Her farm did not have electric lights.\" The text box says most farm families in 1928 did not have electricity, so they used oil lamps for light." },
    { id: "SK-TC2c-P3", type: "ms", points: 2, dok: 2, passages: ["p1"], pick: 2,
      prompt: "Which two details show that this letter tells about life long ago? Pick two.",
      choices: [
        { text: "A mule is used to plow the field.", correct: true },
        { text: "Water is carried in from a well.", correct: true },
        { text: "Ella got a book for her birthday." },
        { text: "Ella wants to visit her cousin." },
        { text: "Spring is coming to the farm." }
      ],
      clue: "Look for things that most families do differently today. Skip things that still happen all the time.",
      why: "The answers are \"A mule is used to plow the field.\" and \"Water is carried in from a well.\" Most farms today use machines, and most homes have water from a faucet. Birthday books, visits and spring still happen today." },
    { id: "SK-TC2c-P4", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
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
      clue: "Think about what Ella does not have on her farm. Then find what Hattie has in the city.",
      why: "Part A: Hattie lives in a city with electric lights and streetcars. Part B: \"You wrote that your house has electric lights and that you can ride a streetcar downtown.\" In 1928, Ella's farm had no electricity, so city lights seemed special to her." },
    { id: "SK-TC2c-P5", type: "mc", points: 1, dok: 3, passages: ["p1"],
      prompt: "Why does it help to know this letter is set in 1928?",
      choices: [
        { text: "It explains why things that seem normal today were special to Ella.", correct: true },
        { text: "It tells the reader exactly how old Cousin Hattie is." },
        { text: "It shows that Ella did not like living on her farm." },
        { text: "It proves that Ella read a new book every single night." }
      ],
      clue: "Think about electric lights. Are they special to you? Why are they special to Ella?",
      why: "The answer is \"It explains why things that seem normal today were special to Ella.\" Most homes today have electric lights, but in 1928 many farms did not. Knowing the year helps you understand why Ella thinks Hattie is lucky." }
  ],
  test: [
    { id: "SK-TC2c-T1", type: "dropdown", points: 2, dok: 1, passages: ["p2"],
      prompt: "Choose the words that best complete the sentence.",
      text: "This diary entry is set in {0}, in the city of {1}.",
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
    { id: "SK-TC2c-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does the diary show about TV in 1954 compared with TV today?",
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
    { id: "SK-TC2c-T4", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "Why does the writer want to tell Grandma about the TV?",
      choices: [
        { text: "Grandma does not have a TV, so it will be big news.", correct: true },
        { text: "Grandma asks for a letter every Saturday night." },
        { text: "Grandma wants to come and watch the cowboy show." },
        { text: "Grandma gave the family the TV as a present." }
      ],
      clue: "Read the last paragraph. What does it say about Grandma?",
      why: "The answer is \"Grandma does not have a TV, so it will be big news.\" The diary says Grandma does not have a television yet. At that time, a new TV was exciting news to share." },
    { id: "SK-TC2c-T5", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Sort each detail. Does it fit the diary in 1954, or does it fit life today?",
      cols: ["The diary in 1954", "Life today"],
      rows: [
        { text: "A new TV is so special that neighbors come to watch.", answer: 0 },
        { text: "The TV picture is only gray, black and white.", answer: 0 },
        { text: "Most TVs show pictures in full color.", answer: 1 },
        { text: "Many people watch shows on phones and tablets.", answer: 1 }
      ],
      clue: "Ask of each detail: Is it in the diary? If not, is it something you see now?",
      why: "Neighbors coming to see a new TV and a gray, black and white picture are details from the 1954 diary. Full-color TVs and watching shows on phones and tablets are part of life today." }
  ]
});
