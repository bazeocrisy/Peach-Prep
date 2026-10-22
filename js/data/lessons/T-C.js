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
      "A heading is a small title over a section. It tells what that section is about. A heading with a fun or surprising word can also make you curious to read on.",
      "A bold word is printed in dark letters. Bold tells you, \"This is a key word. Learn it.\" A bold word often names the big idea of its section, and the sentences around it tell what it means. You can also check its meaning in a glossary at the back.",
      "A text box is set apart from the paragraphs. It often gives an extra fact, like a \"Did You Know?\" box.",
      "A picture or photo shows what the words describe. The caption under it tells what the picture shows. A caption can also tell something the picture cannot show, like where or when.",
      "A diagram is a drawing with labels. Each label has a line that points to one part and names it. A figure number, like Figure 1, helps you match a picture to the words about it. Labels can point out parts that a photo might hide, and numbers or arrows on a diagram can show an order.",
      "Features are not only on paper. A web page has its own features. Menu tabs take you to other parts of the site. A search box finds pages when you type a word. A play button starts a video or a sound. A pop-up box tells what a word means without leaving the page. A link opens a new page with more facts.",
      "Sound has features too. A caption line under a video shows in words what you would hear. Words in [brackets] name a sound, like [frog croaks]. A name and a colon, like NARRATOR:, shows who is talking. In a talk or a read-aloud, the speaker's voice does the job of bold print: a speaker may slow down, stop for a moment, or say \"Listen closely\" right before an important part. To start a new part, a speaker can say what the next part is about, the way a heading does. In a video or a podcast, sounds and music can signal a change, too."
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
      ] },
    /* B2 (expansion 2026-10-22, author b2d): p3 is used only by core set 2 and p4 only by core set 3.
       Never used by test. NEEDS INDEPENDENT REVIEW. p3's Figure 1 has no caption on purpose (core C07 asks for one). */
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
        ["A pool for swim races is full of helpers.", "Each one tells swimmers something without saying a word.", "Races begin when swimmers dive from raised platforms called starting blocks."],
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
        alt: "A web page. At the top are three tabs: Home, Beavers and Otters. The Beavers tab has a thick border. Under them is the heading Busy Builders. Next is a video box with a round play button. It shows a pile of sticks in the water. Under the video is a dark bar with two caption lines: [water rushing], then NARRATOR: The dam slows the rushing water. Below that is the sentence Beavers use sticks and mud. At the bottom are underlined words: Next page: Beaver lodges." },
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
        { text: "It shows the word is a fact set apart in a text box." },
        { text: "It shows the word is the heading of a new section." },
        { text: "It shows the word names the topic of the whole article." }
      ],
      clue: "Think about why an author makes a word stand out, and where else the word shows up.",
      why: "The answer is \"It shows the word is important and is explained in the glossary.\" Bold print tells the reader the word matters, and the glossary tells what it means. Lodge sits inside a sentence, not in a box or on a heading line, and the whole article is about life in a beaver pond, not only the lodge." },
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
  /* ---------- B2 (expansion 2026-10-22, author b2d; 01-architecture.md §2.2-2.3) ----------
     core: fifteen independent items in three sets of five. { ref } reuses the Try items P5 and P6
     (they stay in practice). P4 was flagged weak: its distractors were revised in place and it stays in
     Practice Together, which is now P1, P8, P9, P10 and P4. New ids are numbered by their place in the fifteen.
     BROAD CODE: this lesson still covers all five modes (print, visual, digital, auditory, spoken). The author
     log names which items would move to the planned digital/auditory/spoken lesson.
     Author log: docs/expansion-2026-10-22/batches/B2-b2d-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TC1b-P5" },
      { ref: "SK-TC1b-P6" },
      { id: "SK-TC1b-C03", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: ["p1"],
        prompt: "Why does the author put the fact about a beaver's teeth in a \"Did You Know?\" box instead of in the section \"Busy Builders\"?",
        choices: [
          { text: "It is an extra fact, and the section makes sense without it.", correct: true },
          { text: "It is the most important idea in the whole article." },
          { text: "It tells the steps beavers follow to build a dam." },
          { text: "It explains the bold word that is in the glossary." }
        ],
        clue: "A text box is set apart from the paragraphs. Ask what kind of fact an author puts in a box.",
        hints: [
          "A text box is set apart from the paragraphs. Ask what kind of fact an author puts in a box.",
          "Read the box. Then read \"Busy Builders.\" What is that section mostly about?",
          "The steps for building a dam are told in \"Busy Builders\" itself, not in the box. Test the other choices against the box."
        ],
        how: [
          "\"Busy Builders\" is about how beavers cut trees and build dams that make ponds.",
          "The box tells that a beaver's teeth never stop growing. It is interesting, but the section about building makes sense without it.",
          "The answer is \"It is an extra fact, and the section makes sense without it.\"",
          "The whole article is about how beavers live and build, the box tells no steps, and the box does not explain any bold word."
        ],
        misconception: "A common mix-up is thinking a box holds the most important idea. A box usually adds an extra fact.",
        why: "The answer is \"It is an extra fact, and the section makes sense without it.\" \"Busy Builders\" tells how beavers build dams. The fact that their teeth keep growing is fun to know, but the section does not need it, so the author sets it apart. It is not the main idea, it tells no steps, and it explains no bold word." },
      { id: "SK-TC1b-C04", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: ["p1"], pick: 2,
        prompt: "How does the heading \"A Home with a Secret Door\" help the reader? Choose TWO answers.",
        choices: [
          { text: "It tells that the section is about the beavers' home.", correct: true },
          { text: "It makes the reader curious about the hidden door.", correct: true },
          { text: "It tells what the bold word lodge means." },
          { text: "It gives an extra fact set apart from the section." },
          { text: "It tells the order in which beavers build things." }
        ],
        clue: "A heading is a small title over a section. Ask what it tells you before you read, and how it makes you feel about reading on.",
        hints: [
          "A heading is a small title over a section. Ask what it tells you before you read, and how it makes you feel about reading on.",
          "Read the heading, then read the sentences under it. Choose two.",
          "The bold word lodge is explained by the sentences and the glossary, not by the heading. Test the other choices against the heading's own words."
        ],
        how: [
          "The sentences under the heading tell about the lodge, which is where beavers live.",
          "The words Secret Door make you wonder what the secret is, so you want to read on and find out.",
          "The answers are \"It tells that the section is about the beavers' home.\" and \"It makes the reader curious about the hidden door.\"",
          "The heading does not explain lodge, it is not a box, and it says nothing about an order of building."
        ],
        misconception: "A common mix-up is mixing up the jobs of features: a heading names the topic, but a box or a glossary gives the facts.",
        why: "The answers are \"It tells that the section is about the beavers' home.\" and \"It makes the reader curious about the hidden door.\" The section is about the lodge, the beavers' home, and the word Secret makes readers want to find out more. The heading does not define lodge, is not a box, and tells no order." },
      { id: "SK-TC1b-C05", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: ["p1"],
        stem: ["A park ranger is reading \"Life in a Beaver Pond\" aloud to a group of visitors. She has just finished the part about the lodge. Next comes the section \"Tail Talk.\""],
        prompt: "Her listeners cannot see the headings. What could the ranger do to help them know that a new part is starting?",
        choices: [
          { text: "Say, \"Now let's find out how beavers use their tails.\"", correct: true },
          { text: "Read the next sentences faster so the talk ends sooner." },
          { text: "Point to the bold word lodge in her own copy of the book." },
          { text: "Skip the heading and go right on to the next sentence." }
        ],
        clue: "In a talk, listeners cannot see headings. A speaker's words and voice have to do the heading's job.",
        hints: [
          "In a talk, listeners cannot see headings. A speaker's words and voice have to do the heading's job.",
          "Read the heading \"Tail Talk\" and the sentences under it.",
          "Pointing to a word in her own book does not help, because the listeners cannot see her page. Test the other choices."
        ],
        how: [
          "On the page, the heading \"Tail Talk\" tells readers that a new part about tails is starting.",
          "Listeners cannot see it, so the ranger can say out loud what the next part is about.",
          "The answer is to say, \"Now let's find out how beavers use their tails.\"",
          "Reading faster, skipping the heading, or pointing at her own book does not tell listeners a new part is starting."
        ],
        misconception: "A common mix-up is using a print feature, like bold, in a talk. Listeners can only hear the speaker.",
        why: "The answer is to say, \"Now let's find out how beavers use their tails.\" A heading tells readers a new part is starting. Listeners cannot see it, so the ranger says what the next part is about. Reading faster or skipping the heading hides the change, and her own book is not something the listeners can see." }
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
        clue: "A bold word is a key word. It often names the big idea of its section, and the sentences around it tell what it means.",
        hints: [
          "A bold word is a key word. It often names the big idea of its section, and the sentences around it tell what it means.",
          "Read all four sentences under \"Down to Your Faucet.\" Every choice comes from that section.",
          "Faucet is in the heading, but no sentence in the section explains what a faucet is, because readers already know. Test the other words the same way."
        ],
        how: [
          "The section tells how water gets from the tank down to a home.",
          "One sentence explains a word: it tells that gravity is the force that pulls things toward the ground. Gravity is what makes the water move down, so it is the big idea of the section.",
          "The answer is gravity.",
          "Faucets, showers and pipes are words readers already know, and the section does not explain them."
        ],
        misconception: "A common mix-up is choosing a word from the heading. The bold word is the key word that the section explains.",
        why: "The answer is gravity. The section explains it (\"the force that pulls things toward the ground\"), and it is the big idea: gravity pulls the water down to each home. Faucets, showers and pipes are everyday words the section does not explain." },
      { id: "SK-TC1b-C07", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p3"],
        stem: ["Figure 1 has no caption yet. The author wants a caption that tells what the whole diagram shows."],
        prompt: "Which caption should the author add to Figure 1?",
        choices: [
          { text: "How water gets from a tower to a home", correct: true },
          { text: "A pump at the bottom of a water tower" },
          { text: "Some towers hold a million gallons" },
          { text: "A family turns on the shower at dawn" }
        ],
        clue: "A caption tells what a picture shows. A caption for a diagram tells what the whole drawing is about.",
        hints: [
          "A caption tells what a picture shows. A caption for a diagram tells what the whole drawing is about.",
          "Look at every labeled part of Figure 1, not just one of them.",
          "Figure 1 does show a pump, but the pump is only one part of the diagram. Check whether each other caption fits the whole diagram."
        ],
        how: [
          "Figure 1 shows a pump, a tank, pipes, a home and three numbered arrows between them.",
          "A caption for the whole diagram has to cover all of those parts and the arrows.",
          "The answer is \"How water gets from a tower to a home.\"",
          "The pump is only one part, the diagram shows no gallons, and no one in the diagram is taking a shower."
        ],
        misconception: "A common mix-up is choosing a caption for one part of a diagram, or a true fact that the diagram does not show.",
        why: "The answer is \"How water gets from a tower to a home.\" The diagram shows the pump, the tank, the pipes, the home and arrows between them, so the caption must tell about the whole trip. The pump is only one part, the gallons fact is in the box, and the diagram shows no shower." },
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
      { id: "SK-TC1b-C09", type: "match", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [],
        stem: ["The article \"How a Water Tower Works\" is also on a website. The picture shows part of the web page."],
        figure: { src: "assets/figures/tc1b-c-water-webpage.svg",
          alt: "A web page. At the top are three tabs: Home, Water and Weather. The Water tab has a thick border. Under the tabs is a box with a magnifying glass and the word Search. Next is the heading Down to Your Faucet. Then there is a video box that shows a water tower, with a round play button. Under the video is a dark bar with two caption lines: [water splashing], then NARRATOR: The tank fills up at night. Below that is the sentence Water rushes to each home. At the bottom are underlined words: Next page: Using less water." },
        prompt: "Match each thing a reader wants to do with the feature to use. Use each feature once.",
        cols: ["Play button", "Weather tab", "Search box", "Underlined words"],
        rows: [
          { text: "watch the water tower's tank fill up", answer: 0 },
          { text: "go to the part of the site about rain and storms", answer: 1 },
          { text: "find every page on the site that talks about pipes", answer: 2 },
          { text: "read the next page, about using less water", answer: 3 }
        ],
        clue: "Each web page feature has its own job. Ask: does it start something on this page, or take you somewhere else?",
        hints: [
          "Each web page feature has its own job. Ask: does it start something on this page, or take you somewhere else?",
          "Find each of the four features on the web page. Read the words on or next to each one.",
          "The play button starts the video on this page, and the video shows the water tower. Decide where the other three features take a reader."
        ],
        how: [
          "The play button starts the video, which shows the tank, so it is for watching the tank fill.",
          "The Weather tab takes the reader to the part of the site about weather, like rain and storms.",
          "The search box finds every page with a word you type, such as pipes.",
          "The underlined words are a link that says Next page: Using less water, so they open that page."
        ],
        why: "Use the play button to watch the tank fill. Use the Weather tab to go to the part of the site about rain and storms. Use the search box to find every page that talks about pipes. Use the underlined words, a link, to open the next page about using less water." },
      { id: "SK-TC1b-C10", type: "ms", points: 2, dok: 2, std: ["3.T.C.1.b"], passages: [], pick: 2,
        stem: ["Look at the caption line under the video on this web page."],
        figure: { src: "assets/figures/tc1b-c-water-webpage.svg",
          alt: "A web page. At the top are three tabs: Home, Water and Weather. The Water tab has a thick border. Under the tabs is a box with a magnifying glass and the word Search. Next is the heading Down to Your Faucet. Then there is a video box that shows a water tower, with a round play button. Under the video is a dark bar with two caption lines: [water splashing], then NARRATOR: The tank fills up at night. Below that is the sentence Water rushes to each home. At the bottom are underlined words: Next page: Using less water." },
        prompt: "Which TWO sentences about the caption line are true?",
        choices: [
          { text: "The words after NARRATOR: are spoken by someone in the video.", correct: true },
          { text: "A viewer with the sound off can still follow the video.", correct: true },
          { text: "The words [water splashing] are said out loud by the narrator." },
          { text: "The caption line opens a new page about the water tank." },
          { text: "The caption line lists the tabs at the top of the page." }
        ],
        clue: "A caption line shows in words what you would hear. Words in [brackets] name a noise, and a name with a colon shows who is talking.",
        hints: [
          "A caption line shows in words what you would hear. Words in [brackets] name a noise, and a name with a colon shows who is talking.",
          "Read each line in the dark bar, one at a time. Ask what kind of line it is. Choose two.",
          "The caption line is not underlined like a link, so it does not open a new page. Test the other sentences against the two lines."
        ],
        how: [
          "The first line, [water splashing], is in brackets, so it names a noise in the video. Nobody says those words.",
          "The second line starts with NARRATOR:, so the words after it are what the narrator says.",
          "The answers are \"The words after NARRATOR: are spoken by someone in the video.\" and \"A viewer with the sound off can still follow the video.\" The caption line shows both the noise and the words in writing.",
          "It is not a link, and it does not list the tabs."
        ],
        misconception: "A common mix-up is reading the words in [brackets] as words someone says. Brackets name a noise.",
        why: "The answers are \"The words after NARRATOR: are spoken by someone in the video.\" and \"A viewer with the sound off can still follow the video.\" [water splashing] names a noise, and NARRATOR: shows who is talking, so a viewer can follow along without sound. The caption line is not a link and does not list the tabs." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TC1b-C11", type: "mc", points: 1, dok: 3, std: ["3.T.C.1.b"], passages: ["p4"],
        prompt: "The author could have used a photo of swimmers in a race instead of Figure 1. Why is Figure 1 a better choice for this article?",
        choices: [
          { text: "Its labels point to each helper, so readers can see where it is.", correct: true },
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
          "The answer is \"Its labels point to each helper, so readers can see where it is.\"",
          "There are no swimmers in the diagram, and no label tells what backstroke means."
        ],
        misconception: "A common mix-up is thinking a photo is always better. A labeled diagram can point out parts that a photo might hide.",
        why: "The answer is \"Its labels point to each helper, so readers can see where it is.\" The article is about the lane lines, the line on the bottom and the flags, and the diagram labels each one. It has no swimmers, so it shows no winner or speed, and no label explains backstroke." },
      { id: "SK-TC1b-C12", type: "hottext", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: ["p4"],
        prompt: "Which sentence from the article names a part of the pool that Figure 1 does NOT show? Choose the sentence in the passage.",
        targets: ["p4:1:3", "p4:3:1", "p4:3:3", "p4:3:4", "p4:5:2"],
        answer: ["p4:1:3"], pick: 1,
        clue: "Put the diagram with the words. Read each label, then check which parts in the article have a label.",
        hints: [
          "Put the diagram with the words. Read each label, then check which parts in the article have a label.",
          "List the three labels in Figure 1. Then read every sentence in the article that names a part of the pool.",
          "The sentence about the T near each wall matches the line on the bottom, which Figure 1 shows ending in a T. Check the other sentences the same way."
        ],
        how: [
          "Figure 1 labels the backstroke flags, the lane lines and the line on the bottom, which ends in a T.",
          "The sentences about lane lines, the dark line, the T and the row of flags all name parts that Figure 1 shows.",
          "The answer is \"Races begin when swimmers dive from raised platforms called starting blocks.\" Figure 1 has no starting blocks."
        ],
        why: "The answer is \"Races begin when swimmers dive from raised platforms called starting blocks.\" Figure 1 labels the lane lines, the line on the bottom with its T, and the backstroke flags, but it does not show any starting blocks." },
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
        clue: "Features are not only on paper. Some features work only on a screen, because they make something happen when you tap them.",
        hints: [
          "Features are not only on paper. Some features work only on a screen, because they make something happen when you tap them.",
          "For each feature, ask: could this be printed on paper, or does it need a screen? Choose two.",
          "A heading can be printed over a story on paper, so it is in both. Test each of the other features."
        ],
        how: [
          "Headings, photos with captions, and text boxes can all be printed on paper.",
          "A play button starts a video, and underlined link words open another page. Both need a screen.",
          "The answers are \"a play button for a video of the spring concert\" and \"underlined words that open the lunch menu page.\""
        ],
        misconception: "A common mix-up is thinking a photo or a box is only for web pages. Many features work on paper and on a screen.",
        why: "The answers are \"a play button for a video of the spring concert\" and \"underlined words that open the lunch menu page.\" A video and a link need a screen. Headings, photos with captions and text boxes can be printed on paper." },
      { id: "SK-TC1b-C14", type: "ms", points: 2, dok: 3, std: ["3.T.C.1.b"], passages: [], pick: 2,
        stem: ["Kiara is giving a talk to her class about staying safe on the playground. She has three rules. She wants her listeners to know that the third rule is the most important one."],
        prompt: "Which TWO things should Kiara do?",
        choices: [
          { text: "Pause just before the third rule and say it slowly.", correct: true },
          { text: "Say, \"This next rule is the one to remember,\" before it.", correct: true },
          { text: "Print the third rule in bold on her own note card." },
          { text: "Underline the third rule twice on her own note card." },
          { text: "Read all three rules fast, in the very same voice." }
        ],
        clue: "Listeners cannot see the page. In a talk, the speaker's voice and words do the job that bold print does on paper.",
        hints: [
          "Listeners cannot see the page. In a talk, the speaker's voice and words do the job that bold print does on paper.",
          "For each choice, ask: will the listeners hear it? Choose two.",
          "Kiara's note card is only for her, so bold letters on it do not reach her listeners. Test the other choices the same way."
        ],
        how: [
          "Her listeners only hear Kiara. Anything on her own note card cannot help them.",
          "Pausing before the rule and saying it slowly makes it stand out, the way bold print does.",
          "Telling listeners that the next rule is the one to remember points to it before she says it.",
          "The answers are \"Pause just before the third rule and say it slowly.\" and \"Say, \"This next rule is the one to remember,\" before it.\" Reading fast in the same voice makes every rule sound alike."
        ],
        misconception: "A common mix-up is using a print feature, like bold or underlining, to help listeners. They cannot see it.",
        why: "The answers are \"Pause just before the third rule and say it slowly.\" and \"Say, \"This next rule is the one to remember,\" before it.\" Listeners hear only her voice and words. Bold and underlining on her own card do not reach them, and reading fast in one voice makes every rule sound the same." },
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
      stem: ["An article called \"Our School Recycles\" tells how each class sorts cans and paper. Next to the paragraphs, a \"Did You Know?\" box says: Recycling one can saves enough energy to run a TV for three hours."],
      prompt: "Why did the author put this fact in a box?",
      choices: [
        { text: "It is a fun extra fact that the paragraphs do not need.", correct: true },
        { text: "It tells the steps each class follows to sort cans." },
        { text: "It is the main idea of the whole article." },
        { text: "It tells what a bold word in the article means." }
      ],
      clue: "A text box is set apart from the paragraphs. Ask what kind of fact goes in a box.",
      hints: [
        "A text box is set apart from the paragraphs. Ask what kind of fact goes in a box.",
        "Compare what the article is about with what the box says.",
        "The steps for sorting are in the article's paragraphs, not in the box. Test the other choices."
      ],
      how: [
        "The article tells how each class sorts cans and paper.",
        "The box tells a surprising fact about energy. The article makes sense without it.",
        "The answer is \"It is a fun extra fact that the paragraphs do not need.\""
      ],
      why: "The answer is \"It is a fun extra fact that the paragraphs do not need.\" The article is about how classes sort cans and paper. The energy fact is interesting, but the paragraphs do not need it, so it is set apart. It tells no steps, is not the main idea, and explains no bold word." },
    { id: "SK-TC1b-S02", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C09", "SK-TC1b-C13"],
      stem: ["A web page about the Riverside Zoo has three tabs at the top: Home, Animals and Visit. It also has a search box, a video of the lions with a play button, and underlined words at the bottom that say Next page: Zoo map."],
      prompt: "Ty wants to hear the lions roar. What should he do?",
      choices: [
        { text: "tap the play button on the video", correct: true },
        { text: "type lions in the search box" },
        { text: "tap the underlined words at the bottom" },
        { text: "tap the Visit tab at the top" }
      ],
      clue: "Each web page feature has its own job. Ask which feature starts a sound or a video on the page.",
      hints: [
        "Each web page feature has its own job. Ask which feature starts a sound or a video on the page.",
        "Ty wants to hear something. Which feature on the page has the lions in it?",
        "The underlined words open a page about the zoo map, and a map makes no sound. Test the other choices."
      ],
      how: [
        "Ty wants to hear the lions, and the page has a video of the lions.",
        "A play button starts a video, with its sounds.",
        "The answer is \"tap the play button on the video.\""
      ],
      why: "The answer is \"tap the play button on the video.\" The video shows the lions, and the play button starts it with its sound. The search box finds pages, the link opens the zoo map, and the Visit tab goes to another part of the site." },
    { id: "SK-TC1b-S03", type: "mc", points: 1, dok: 2, std: ["3.T.C.1.b"], passages: [],
      like: ["SK-TC1b-C14", "SK-TC1b-C05"],
      stem: ["Omar is reading his report about spiders aloud to his class. In the written report, the word silk is in bold because it is the key word."],
      prompt: "What could Omar do so his listeners know that silk is a key word?",
      choices: [
        { text: "slow down and say, \"Here is an important word: silk.\"", correct: true },
        { text: "make the word silk even darker on his own paper" },
        { text: "read the word silk faster than the other words" },
        { text: "skip the word silk so his report is shorter" }
      ],
      clue: "Listeners cannot see bold print. In a talk, a speaker's voice and words do the job of bold.",
      hints: [
        "Listeners cannot see bold print. In a talk, a speaker's voice and words do the job of bold.",
        "For each choice, ask: will the listeners hear it?",
        "Making the word darker on his paper does not help, because only Omar sees his paper. Test the other choices."
      ],
      how: [
        "Only Omar can see the bold word on his paper.",
        "Slowing down and naming the word as important lets listeners hear that it matters.",
        "The answer is to slow down and say, \"Here is an important word: silk.\""
      ],
      why: "The answer is to slow down and say, \"Here is an important word: silk.\" Listeners hear his voice, not his paper. Darker letters are on his own paper, and reading the word faster or skipping it makes it easy to miss." }
  ],
  /* Hints and Show me how for items kept in practice: refs P5, P6 (core set 1) and Together P1, P8, P9, P10, P4. */
  addons: {
    "SK-TC1b-P1": {
      hints: [
        "Headings tell what each section is about. Read each heading and ask which section would explain the question.",
        "Read all four headings before you choose. Then skim the sentences under the one you pick to check it.",
        "\"Busy Builders\" is about cutting trees and building dams, not about warning other beavers. Check the other headings."
      ],
      how: [
        "The question is about how beavers warn each other.",
        "Under \"Tail Talk,\" a beaver slaps its tail on the water, and the loud smack warns other beavers.",
        "The answer is Tail Talk.",
        "\"Busy Builders\" is about dams, \"A Home with a Secret Door\" is about the lodge, and the box is about teeth."
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
        "The tail, the lodge and the dam captions all need water, which the picture does not show."
      ] },
    "SK-TC1b-P9": {
      hints: [
        "People who listen cannot see bold print. Think about what a speaker can say to do the same job.",
        "Read everything the ranger says, from her first sentence to her last.",
        "She keeps talking after those words, so her talk is not over. Check the other choices."
      ],
      how: [
        "Listeners cannot see bold print, so a speaker uses words to point out an important part.",
        "Right after \"Listen closely,\" the ranger tells a big fact: a dam can make a whole new pond.",
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
        "\"Its doors are under the water, so foxes and other hunters cannot easily get inside.\" tells about the door.",
        "\"The room inside stays dry above the water.\" tells about the dry room.",
        "The other sentences tell about trees, the dam and the tail, which Figure 1 does not label."
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
      { id: "SK-TC2a-C03", type: "mc", points: 1, dok: 2, std: ["3.T.C.2.a"], passages: [],
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
          "Read the first paragraph of Part 2 slowly. Ask: who is sitting in the chair, and who is talking?",
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
        sample: "The speaker thinks the bath is a mistake, because the speaker hides behind the door and says mud is best. I think the bath is a good idea. The people say, \"You smell so sweet!\" and they giggle while they scrub, so the bath is good for the dog and fun for the family.",
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
          { text: "The coach does not want the narrator on the team at all." }
        ],
        clue: "A reader can see things the narrator misses. Compare what the narrator says with what really happens.",
        hints: [
          "A reader can see things the narrator misses. Compare what the narrator says with what really happens.",
          "Look at what the narrator admits after the word Well.",
          "Being the best player is what the narrator says, not what a reader can see in the scene. Check the other choices against what really happens."
        ],
        how: [
          "The narrator says nobody passed, but then admits Tia passed two times.",
          "The ball came too fast to stop, and the coach says to practice stopping the ball.",
          "A reader might think the narrator could get better by practicing. The answer is \"The narrator could get better by practicing, as the coach says.\"",
          "Being the best is only the narrator's view, Tia did pass, and nothing says the coach wants the narrator off the team."
        ],
        misconception: "A common mix-up is believing everything the narrator says. A reader checks the narrator's words against what really happens.",
        why: "The answer is \"The narrator could get better by practicing, as the coach says.\" The narrator blames others, but Tia did pass twice and the ball was too fast to stop. Being the best is only the narrator's view, and nothing says the coach wants the narrator off the team." },
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
      why: "The answers are \"Grandma thinks the colors are too bright, but Desmond loves them.\" and \"Desmond wants to keep looking, but Grandma wants to look away.\" Both notice the brightness, which is how they are alike. Desmond says it looks like a party, and he never says to paint it over." }
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
