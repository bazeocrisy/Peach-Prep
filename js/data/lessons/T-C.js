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
      "A heading is a small title over a section. It tells what that section is about.",
      "A bold word is printed in dark letters. Bold tells you, \"This is a key word. Learn it.\" A bold word often names the big idea of its section, and the sentences around it tell what it means. You can also check its meaning in a glossary at the back.",
      "A text box is set apart from the paragraphs. It often gives an extra fact, like a \"Did You Know?\" box.",
      "A picture or photo shows what the words describe. The caption under it tells what the picture shows. A caption can also tell something the picture cannot show, like where or when.",
      "A diagram is a drawing with labels. Each label has a line that points to one part and names it. A figure number, like Figure 1, helps you match a picture to the words about it.",
      "Features are not only on paper. A web page has its own features. Menu tabs take you to other parts of the site. A search box finds pages when you type a word. A play button starts a video or a sound. A pop-up box tells what a word means without leaving the page. A link opens a new page with more facts.",
      "Sound has features too. A caption line under a video shows in words what you would hear. Words in [brackets] name a sound, like [frog croaks]. A name and a colon, like NARRATOR:, shows who is talking. In a talk or a read-aloud, the speaker's voice does the job of bold print: a speaker may slow down, stop for a moment, or say \"Listen closely\" right before an important part."
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
        ["Beavers are some of the best builders in nature.", "They turn streams into ponds, and they build their own homes."],
        ["## Busy Builders"],
        ["Beavers cut down small trees with their strong front teeth.", "They push sticks, rocks and mud into a stream to build a wall called a dam.", "The dam slows the water and makes a pond."],
        ["## A Home with a Secret Door"],
        ["In the pond, beavers build a home called a **lodge**.", "A lodge is a dome made of sticks and mud.", "Its doors are under the water, so foxes and other hunters cannot easily get inside.", "The room inside stays dry above the water."],
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
        { text: "A beaver pushes sticks and mud into a stream to build a dam." }
      ],
      clue: "A caption tells what the picture shows. Look at the picture first: what is the beaver doing, and where is it? Cross out captions about things you cannot see.",
      why: "The answer is \"A beaver chews through a small tree with its strong front teeth.\" The picture shows the beaver's teeth on a deep notch in a tree, with wood chips on the ground. There is no water in the picture, so the captions about the tail, the lodge and the dam do not fit it." },
    { id: "SK-TC1b-P9", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["A park ranger gives a talk about beavers at a Georgia state park. Here is part of what she says:", "\"Beavers build dams with sticks and mud. Now, listen closely. This next part is important. A beaver's dam can make a whole new pond!\""],
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
        alt: "A web page. At the top are three tabs: Home, Beavers and Otters. The Beavers tab has a thick border. Under them is the heading Busy Builders. Next is a video box with a round play button. It shows a pile of sticks in the water. Under the video is a dark bar with two caption lines: [water rushing], then NARRATOR: The water rushes past the lodge. Below that is the sentence Beavers use sticks and mud. At the bottom are underlined words: Next page: Beaver lodges." },
      prompt: "Choose the words that best complete the sentences.",
      text: "In the caption line, the words [water rushing] tell the reader {0}. The underlined words at the bottom will {1}.",
      slots: [
        { options: ["what sound plays in the video", "what words the narrator says", "what the beaver is building"], answer: 0 },
        { options: ["open a page about beaver lodges", "play the video about the dam", "tell what the word dam means"], answer: 0 }
      ],
      clue: "Look at how each line in the caption starts. Then read the underlined words and think about what tapping them would do.",
      why: "The answers are \"what sound plays in the video\" and \"open a page about beaver lodges.\" Words in [brackets] name a sound, so a reader with the sound off still knows the water is rushing. The narrator's words come after NARRATOR:, and [water rushing] does not name anything the beaver builds. The underlined words are a link. Its words say Next page: Beaver lodges, so it opens a new page. The play button starts the video, and no word on the page has a pop-up meaning." },
    { id: "SK-TC1b-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      stem: ["In the section \"A Home with a Secret Door,\" the word **lodge** is printed in dark, bold letters.", "The glossary at the back of the book says: lodge: a beaver's home made of sticks and mud"],
      prompt: "How does the bold print help the reader?",
      choices: [
        { text: "It shows the word is important and is explained in the glossary.", correct: true },
        { text: "It shows the word is the title of the whole book." },
        { text: "It shows the word is spelled in a new or unusual way." },
        { text: "It shows the word should be read in a loud voice." }
      ],
      clue: "Think about why an author makes a word stand out, and where else the word shows up.",
      why: "The answer is \"It shows the word is important and is explained in the glossary.\" Bold print tells the reader the word matters, and the glossary tells what it means. Bold does not mark a book title, a new spelling or a loud voice." },
    { id: "SK-TC1b-P5", type: "hottext", points: 2, dok: 2, passages: ["p1"],
      prompt: "Look at Figure 1. Which two sentences in the article tell about the parts that its labels point to? Choose two sentences.",
      targets: ["p1:3:1", "p1:3:2", "p1:5:3", "p1:5:4", "p1:9:2"],
      answer: ["p1:5:3", "p1:5:4"], pick: 2,
      clue: "Read the two labels in Figure 1 and follow their lines. Then find the sentences that tell about those same two parts of the lodge.",
      why: "The answers are \"Its doors are under the water, so foxes and other hunters cannot easily get inside.\" and \"The room inside stays dry above the water.\" The labels in Figure 1 point to a door under the water and a dry room. The diagram helps readers see where those two parts are inside the lodge." },
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
      "Find the narrator's feeling words, like boring, ruined or the best. They tell you the narrator's view.",
      "You, the reader, may see things differently. Look at what actually happens, not only at what the narrator says.",
      "Different characters or speakers can see the same thing in different ways. One may love the rain while another hates it. Notice each one's view.",
      "To find the narrator, ask: Who is telling this? If the teller says I or we about themself, outside of quotation marks, the narrator is a character in the story. If not, the narrator is an outsider who tells about the characters by name or with he, she and they."
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
      "Look for clues about context: a date, a place, the writer's name, or a note in a box.",
      "Time period: when was it written? Long ago, many things were different, like lights, travel and how people got news.",
      "Individual context: who is the writer? Think about the writer's background, job and experiences. A firefighter, a scientist and a child know different things, so each one writes in a different way.",
      "Situational context: what was happening when or where the writer wrote? A storm, a holiday or a big change can be the reason a text was written, and it can explain what the writer says.",
      "A real letter or diary was written at the time it shows. Historical fiction is written today but pretends to be written long ago. Use the date and any note in a box to learn its pretend time and place.",
      "Ask: How does knowing this help me understand the text?"
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
      clue: "Read the text box before the letter. What did most farms not have in 1928?",
      why: "The answer is \"Her farm did not have electric lights.\" The letter is dated 1928, and the text box says most farm families did not have electricity back then, so they used oil lamps for light." },
    { id: "SK-TC2c-P7", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What was happening in Ella's life that led her to write this letter?",
      choices: [
        { text: "Hattie had sent her a book for her birthday, and Ella wanted to thank her.", correct: true },
        { text: "Ella's family was moving to Atlanta, and she wanted Hattie to know." },
        { text: "Papa needed help to plow the cotton field, and he asked Hattie to come." },
        { text: "Ella had hurt her eyes from reading, and she could not read anymore." }
      ],
      clue: "Letters often say early on why the writer is writing. Read the first paragraph after \"Dear Cousin Hattie.\"",
      why: "The answer is \"Hattie had sent her a book for her birthday, and Ella wanted to thank her.\" That is the situation: Ella starts with \"Thank you for the book you sent for my birthday.\" Nothing in the letter says her family is moving. Papa and Walter plow the field themselves. Papa only says she will hurt her eyes, and she says she cannot stop reading."},
    { id: "SK-TC2c-P6", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Read \"Dr. Ruiz's Field Notebook.\" Why are Dr. Ruiz's notes full of numbers and short facts?",
      choices: [
        { text: "She is a scientist, so she writes exact counts to keep track of the frogs.", correct: true },
        { text: "She was writing to a friend, so she kept her note short and fun." },
        { text: "She was in a hurry because a big storm was coming." },
        { text: "She wanted to tell her friends a funny story about frogs." }
      ],
      clue: "Read the note in the box. Who is the writer, and what is her job? How would a person with that job write?",
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
        { text: "She is a student who rides the bus to school every morning." },
        { text: "She is a school nurse who helps riders after they get hurt." }
      ],
      clue: "Read the note in the box. What is Ms. Greene's job, and how long has she done it? Then find what she says she has seen.",
      why: "The answer is \"She has driven a bus for years and has had to stop fast many times.\" The box tells her individual context: she has been a bus driver for 15 years. Her own experience is why she can be sure. She wrote for the newsletter, she did not read about it there. The box says she drives the bus, so she is not a student rider or a nurse."},
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
