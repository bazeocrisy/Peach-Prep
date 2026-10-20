/* Lessons: 3.T.SS Organization and Craft (3-5.T.SS.1, 3-5.T.SS.2). Schema: docs/SPEC.md §8. */

/* ---------- 3.T.SS.1.a Text structure and text features ----------
   p1 and p2 have headings ("## ...") and p1 has a "Did You Know?" text box. Sentence refs count
   every array entry, headings included. p1: array 7 = section "Why Peanuts Help the Soil".
   p2: array 3 = "A Home for Many Animals", array 5 = "A Big Problem", array 7 = "Working Together".
   Prompts name sections by heading, never by paragraph number. */
PP.addLesson({
  code: "3.T.SS.1.a",
  title: "How a text is put together: sections, patterns and features",
  teach: {
    big: "Authors build a text with a plan: headings split it into sections, a pattern links the ideas, and features like captions and maps help you understand.",
    points: [
      "Sequence tells steps or events in order. Look for clue words like first, next, then and finally.",
      "Cause and effect tells what happened and why. Look for because, so and as a result.",
      "Compare tells how things are alike and different. Look for both, alike, but and while.",
      "Problem and solution tells about a trouble and how it gets fixed. Look for problem, trouble, solve and fix.",
      "Features help you understand. Headings split a text into sections and tell what each one is about. Captions tell what a picture shows, maps show where places are, and a text box sets apart an extra fact."
    ],
    words: [
      { term: "section", means: "one part of a text, often with its own heading" },
      { term: "heading", means: "a title above a section that tells what it is about" },
      { term: "cause", means: "why something happens" },
      { term: "effect", means: "what happens because of the cause" },
      { term: "caption", means: "words next to a picture that tell what it shows" }
    ],
    example: {
      label: "Example",
      lines: ["Why Puddles Dry Up", "After a rain, the sun comes out and warms the puddles. Because of the heat, the water slowly turns into a gas called water vapor. The gas rises into the air. As a result, the puddle gets smaller and smaller until it is gone."],
      note: "The clue words because and as a result show cause and effect. The sun's heat is the cause. The puddle drying up is the effect. The heading tells you the section will explain why."
    },
    tip: "On the test, you may be asked how a section is organized, why the author used a heading, or what a map or caption would help you understand. Look for clue words first."
  },
  learn: [
    {
      show: ["First, a butterfly lays a tiny egg on a leaf. Next, a caterpillar hatches from the egg and eats lots of leaves. Then the caterpillar makes a hard case called a chrysalis. Finally, a grown butterfly comes out."],
      ask: "How is this text organized?",
      steps: [
        "Look for clue words. This text uses first, next, then and finally.",
        "Those words show things happening in order, one after another.",
        "Ask: could the steps be mixed up? No. A butterfly cannot come out before the egg is laid. So the order matters."
      ],
      answer: "It is organized in sequence. It tells the steps of a butterfly's life in order."
    },
    {
      show: ["Alligators and crocodiles are both reptiles. Both have long tails and sharp teeth. But an alligator's snout is wide and rounded, while a crocodile's snout is long and pointed."],
      ask: "How is this text organized?",
      steps: [
        "Count the subjects. The text is about two animals, alligators and crocodiles.",
        "Look for clue words. Both tells how they are alike. But and while tell how they are different.",
        "A text that tells how two things are alike and different is a compare text."
      ],
      answer: "It is organized to compare. It tells how alligators and crocodiles are alike and different."
    },
    {
      show: ["An article says the Chattahoochee River starts in the mountains of north Georgia. It flows past the city of Atlanta and then runs along part of the border between Georgia and Alabama. Next to the article is a map of Georgia with the river drawn in blue."],
      ask: "How does the map help the reader?",
      steps: [
        "Think about what the words tell. They name places the river passes.",
        "Think about what a map does. A map shows where places are.",
        "Put them together. The map lets you see the river's path and where those places are."
      ],
      answer: "The map shows the path of the river, so the reader can see where it starts, where Atlanta is, and where it runs along the Alabama border."
    }
  ],
  parent: "When you read a cereal box, a recipe or a kids' magazine together, point to a heading or a picture caption and ask, \"What does this part help you know?\" Then hunt for clue words like first, because and both.",
  passages: [
    { id: "p1", title: "Peanuts: From Flower to Farm", genre: "Informational text",
      paragraphs: [
        ["Peanuts are a favorite snack for many people.", "But did you know that peanuts grow under the ground?", "Many farmers in Georgia grow peanuts.", "Here is how a peanut plant grows and why farmers like it."],
        ["## From Flower to Peanut"],
        ["First, farmers plant peanut seeds in warm soil in the spring.", "Next, the plants grow green leaves and small yellow flowers.", "Then something surprising happens.", "After a flower fades, a thin stem called a peg grows down and pushes into the soil.", "Finally, a peanut grows at the end of each peg, under the ground."],
        ["## Harvest Time"],
        ["In the fall, farmers use a machine that digs up the plants.", "The machine turns them upside down so the peanuts face the sky.", "The peanuts dry in the sun for a few days.", "Then another machine picks the peanuts off the plants."],
        ["## Why Peanuts Help the Soil"],
        ["Peanut plants are good for the soil.", "Their roots work with tiny living things to add plant food to the soil.", "Because the soil has more plant food, crops such as cotton and corn often grow better in that field the next year."],
        ["## Did You Know?"],
        ["Box: Georgia grows more peanuts than any other state."]
      ] },
    { id: "p2", title: "Saving the Gopher Tortoise", genre: "Informational text",
      paragraphs: [
        ["The gopher tortoise is Georgia's state reptile.", "It is a slow, gentle animal that lives in dry, sandy places.", "It eats grasses and other low plants."],
        ["## A Home for Many Animals"],
        ["A gopher tortoise uses its strong front legs to dig a long tunnel in the sand.", "This tunnel is called a burrow.", "A burrow stays cool on hot days and warmer on cold nights.", "Because of this, many other animals, such as snakes, frogs and mice, hide in tortoise burrows too."],
        ["## A Big Problem"],
        ["Long ago, large pine forests covered much of south Georgia, and many gopher tortoises lived there.", "Over many years, people cut down many of these forests to build towns, roads and farms.", "As a result, the tortoises lost much of their home."],
        ["## Working Together"],
        ["Today, people are working to solve this problem.", "Some land is now kept safe so tortoises can live there.", "Workers also set small, careful fires in these pine forests.", "The fires burn away thick bushes.", "Then sunlight can reach the ground, and the low plants that tortoises eat can grow."]
      ] }
  ],
  practice: [
    { id: "SK-SS1a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "How is the section \"From Flower to Peanut\" organized?",
      choices: [
        { text: "It tells the steps in the order they happen.", correct: true },
        { text: "It tells how two kinds of plants are alike." },
        { text: "It tells about a problem and how farmers fix it." },
        { text: "It tells why peanut plants are good for the soil." }
      ],
      clue: "Read the first word of each sentence in that section. What do those words tell you about time?",
      why: "The answer is \"It tells the steps in the order they happen.\" The clue words first, next, then and finally show sequence. The section follows the peanut from seed, to flower, to peg, to peanut." },
    { id: "SK-SS1a-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read the section \"Why Peanuts Help the Soil.\" Select the sentence that tells how peanut plants affect the crops planted in that field the next year.",
      targets: ["p1:7:1", "p1:7:2", "p1:7:3"],
      answer: ["p1:7:3"], pick: 1,
      clue: "First find the cause the section talks about. Then find the sentence that tells what happens later because of it.",
      why: "The answer is \"Because the soil has more plant food, crops such as cotton and corn often grow better in that field the next year.\" More plant food is the cause. Crops growing better is the effect." },
    { id: "SK-SS1a-P3", type: "dropdown", points: 1, dok: 1, passages: ["p1"],
      prompt: "Choose the words that best complete the sentence.",
      text: "The heading \"Harvest Time\" tells the reader that this section is about {0}.",
      slots: [{ options: ["how farmers gather the peanuts", "how peanuts help the soil", "how a peanut flower grows"], answer: 0 }],
      clue: "A heading names what a section is mostly about. Read the sentences under that heading and ask what they all describe.",
      why: "The answer is how farmers gather the peanuts. Under \"Harvest Time,\" the sentences tell how machines dig up the plants, dry the peanuts and pick them off. Harvest means gathering a crop." },
    { id: "SK-SS1a-P4", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Match each set of clue words to the pattern it usually shows.",
      cols: ["Sequence", "Cause and effect", "Compare", "Problem and solution"],
      rows: [
        { text: "first, next, finally", answer: 0 },
        { text: "because, so, as a result", answer: 1 },
        { text: "both, alike, but", answer: 2 },
        { text: "the trouble was, to fix it", answer: 3 }
      ],
      clue: "Ask what each set of words helps you do: tell order, tell why, tell how things are alike and different, or tell how a trouble gets fixed.",
      why: "First, next and finally show sequence. Because, so and as a result show cause and effect. Both, alike and but compare. The trouble was and to fix it show a problem and a solution." },
    { id: "SK-SS1a-P5", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does the author include the \"Did You Know?\" box?",
      choices: [
        { text: "to add an interesting fact about peanuts in Georgia", correct: true },
        { text: "to tell the steps for planting a peanut seed" },
        { text: "to explain why peanuts grow under the ground" },
        { text: "to show how peanut plants are like cotton plants" }
      ],
      clue: "A text box is set apart from the main sections. Read it and ask whether it tells steps, reasons, or one extra fact.",
      why: "The answer is to add an interesting fact about peanuts in Georgia. The box gives one extra fact: Georgia grows more peanuts than any other state. It does not tell steps or reasons." },
    { id: "SK-SS1a-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The author wants to add a map of Georgia that shows where most of the peanut farms are. How would the map help readers?",
      choices: [
        { text: "It would show which parts of the state have peanut farms.", correct: true },
        { text: "It would show the steps for growing a peanut plant." },
        { text: "It would explain why peanut roots help the soil." },
        { text: "It would tell how many days the peanuts dry in the sun." }
      ],
      clue: "Think about what a map is good at showing. Is it steps, reasons, or places?",
      why: "The answer is \"It would show which parts of the state have peanut farms.\" A map shows where places are. Steps and reasons are told by the words in the sections, not by a map." }
  ],
  test: [
    { id: "SK-SS1a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "How are the sections \"A Big Problem\" and \"Working Together\" connected?",
      choices: [
        { text: "The first tells a trouble, and the second tells how people help.", correct: true },
        { text: "The first tells steps, and the second tells what happens last." },
        { text: "The first compares two animals, and the second tells about one." },
        { text: "The first gives a fact, and the second tells the author's feelings." }
      ],
      clue: "Read both headings, then read the first sentence under \"Working Together.\" What does that sentence say people are doing?",
      why: "The answer is \"The first tells a trouble, and the second tells how people help.\" \"A Big Problem\" tells how tortoises lost their home. \"Working Together\" begins, \"Today, people are working to solve this problem.\" That is problem and solution." },
    { id: "SK-SS1a-T2", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Which pattern does the author mainly use in the section \"A Home for Many Animals\"?",
        choices: [
          { text: "It tells a cause and the effect it has.", correct: true },
          { text: "It tells steps in the order they happen." },
          { text: "It tells how two animals are alike and different." },
          { text: "It tells a problem and how people solve it." }
        ] },
      partB: { prompt: "Which sentence from that section best shows this pattern?",
        choices: [
          { text: "\"Because of this, many other animals, such as snakes, frogs and mice, hide in tortoise burrows too.\"", correct: true },
          { text: "\"A burrow stays cool on hot days and warmer on cold nights.\"" },
          { text: "\"A gopher tortoise uses its strong front legs to dig a long tunnel in the sand.\"" },
          { text: "\"This tunnel is called a burrow.\"" }
        ] },
      clue: "Look for a clue word in the section. Does it point to order, to a reason, or to how things are alike? Then find the sentence with that clue word.",
      why: "Part A: It tells a cause and the effect it has. Part B: \"Because of this, many other animals, such as snakes, frogs and mice, hide in tortoise burrows too.\" The burrow stays cool and warm (cause), so other animals hide there (effect). The clue words because of this join the cause to the effect. The sentence about the burrow staying cool tells only the cause." },
    { id: "SK-SS1a-T3", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read the section \"A Big Problem.\" Select the sentence that tells the effect of people cutting down the forests.",
      targets: ["p2:5:1", "p2:5:2", "p2:5:3"],
      answer: ["p2:5:3"], pick: 1,
      clue: "Find the sentence that tells what happened because people cut down the forests.",
      why: "The answer is \"As a result, the tortoises lost much of their home.\" Cutting down the forests is the cause. The tortoises losing their home is the effect, and the clue words are as a result." },
    { id: "SK-SS1a-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author wants to add a photo of a gopher tortoise sitting at the opening of its tunnel. Which caption would best fit the photo?",
      choices: [
        { text: "A gopher tortoise rests at the door of the burrow it dug.", correct: true },
        { text: "Workers set a small fire to clear away thick bushes." },
        { text: "Pine forests once covered much of south Georgia." },
        { text: "Many towns and roads were built over the years." }
      ],
      clue: "A caption tells what the picture shows. Picture the photo in your mind, then find the words that describe it.",
      why: "The answer is \"A gopher tortoise rests at the door of the burrow it dug.\" The photo shows a tortoise at its tunnel, so the caption must tell about that. The other captions tell about things that are not in the photo." },
    { id: "SK-SS1a-T5", type: "dropdown", points: 1, dok: 1, passages: ["p2"],
      prompt: "Choose the words that best complete the sentence.",
      text: "Another good heading for the section \"A Home for Many Animals\" would be {0}.",
      slots: [{ options: ["Sharing a Cool Tunnel", "How People Help Tortoises", "When the Forests Were Cut"], answer: 0 }],
      clue: "A new heading must tell what the whole section is mostly about. Reread that section, then check each heading against it.",
      why: "The answer is Sharing a Cool Tunnel. That section tells how the tortoise digs a burrow that stays cool, and how other animals hide in it too. Helping tortoises and cutting forests are told in other sections." }
  ]
});

/* ---------- 3.T.SS.1.b Organize writing to fit the purpose and reader ----------
   Scope: choosing a structure that fits the job (steps in order, sections with headings,
   compare, cause and effect), plus an opening, a closing and helpful features (headings,
   captions, numbered lists). Drafts are marked draft: true and number their own sentences. */
PP.addLesson({
  code: "3.T.SS.1.b",
  title: "Organize your writing to fit your reader",
  teach: {
    big: "Before you write, pick a plan that fits your job and your reader: steps in order for how-to, sections with headings for a topic, and features that help the reader.",
    points: [
      "First think about your job. Are you teaching how to do something, or telling facts about a topic? Then think about who will read it.",
      "How-to writing tells steps in the order the reader should do them. Order words like first, next and last help.",
      "Writing about a topic can be split into sections. Each section tells about one part, and a heading names that part.",
      "Features help your reader. A heading names a section, a caption tells what a picture shows, and a numbered list makes steps easy to follow.",
      "Start by telling your topic, and end with a closing that wraps it up."
    ],
    words: [
      { term: "purpose", means: "the job your writing does, like teaching or telling facts" },
      { term: "reader", means: "the person you are writing for" },
      { term: "feature", means: "a helper like a heading, caption or numbered list" }
    ],
    example: {
      label: "A writer's plan",
      lines: ["Topic: Caring for a pet hamster", "Heading 1: A Good Home", "Heading 2: Food and Water", "Heading 3: Play Time"],
      note: "The writer split the topic into three parts. Each heading tells the reader exactly what that section is about, so the reader can find the facts quickly."
    },
    tip: "On the test, you may read a student's draft and choose the best heading, the best order for steps, the best place for a sentence, or the best closing."
  },
  learn: [
    {
      show: ["How to Plant a Bean Seed", "Water the soil.", "Fill a cup with soil.", "Push a bean seed into the soil."],
      ask: "These steps are out of order. What order makes sense for the reader?",
      steps: [
        "Name the job. This is how-to writing, so the steps must go in the order a reader does them.",
        "Find what must happen first. You cannot push a seed into soil until the cup has soil in it.",
        "Find what comes next and last. The seed goes in, and then you water it."
      ],
      answer: "Fill a cup with soil, push a bean seed into the soil, and then water the soil."
    },
    {
      show: ["Squirrels eat nuts, seeds and fruit. In the fall, they bury acorns in the ground. In the winter, they dig the acorns up again to eat."],
      ask: "A student wants a heading for this section. Which heading fits best: \"Where Squirrels Sleep,\" \"What Squirrels Eat\" or \"How Squirrels Climb\"?",
      steps: [
        "Read every sentence and ask what they all tell about.",
        "Nuts, seeds, fruit and acorns are all food. Burying and digging up acorns is about saving food.",
        "Pick the heading that names that shared idea, not just one detail."
      ],
      answer: "\"What Squirrels Eat\" fits best, because every sentence tells about the food squirrels eat."
    },
    {
      show: ["Ana is writing directions for first graders on how to wash their hands. She has five steps."],
      ask: "Which feature would help her readers most: a numbered list, a map, or a chart of germ names?",
      steps: [
        "Think about the reader. First graders need directions that are easy to follow.",
        "Think about the job. Directions are steps, so the order matters.",
        "A numbered list shows each step and its order clearly."
      ],
      answer: "A numbered list, because it shows young readers each step in the right order."
    }
  ],
  write: {
    prompt: "Write a short how-to piece that teaches a younger child to do something you know well, like making a sandwich or packing a backpack. Give it a title, put the steps in order, and end with a closing sentence.",
    checklist: [
      "I told my topic in a title or a first sentence.",
      "I put my steps in the order a reader should do them.",
      "I used order words like first, next and last.",
      "I ended with a closing sentence that wraps it up.",
      "I thought about what a younger child would need to know."
    ],
    rows: 8
  },
  parent: "When you cook or build something together, ask your child to tell the steps in order, then decide together what title and headings a how-to page about it would need.",
  passages: [
    { id: "p1", draft: true, title: "Make a Pinecone Bird Feeder", byline: "Marcus's first draft", genre: "Student draft (how-to)",
      paragraphs: [
        ["(1) A pinecone bird feeder is an easy way to help birds when it is cold.", "(2) You will need a big pinecone, some string, a spoon, peanut butter and a plate of birdseed."],
        ["(3) First, tie the string around the top of the pinecone.", "(4) Then roll the pinecone in the birdseed until it is covered.", "(5) Next, use the spoon to spread peanut butter all over it.", "(6) Finally, hang your feeder on a branch near a window so you can see it."],
        ["(7) Soon, red cardinals and other birds may stop by for a snack.", "(8) You can watch them eat from inside your warm house."]
      ] },
    { id: "p2", draft: true, title: "The Pine Hill Library", byline: "Priya's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) The Pine Hill Library is a great place for kids in our town.", "(2) It is open six days a week, and it is free to visit."],
        ["(3) You can borrow much more than books at the library.", "(4) Kids can check out movies, puzzles and even board games.", "(5) You can keep most things for two weeks."],
        ["(6) The library also plans special activities for kids.", "(7) On Saturday mornings, a librarian reads stories out loud.", "(8) Kids can also borrow audiobooks to listen to in the car.", "(9) In the summer, there is a reading contest with prizes."],
        ["(10) Next time you need something fun to do, visit the Pine Hill Library!"]
      ] }
  ],
  practice: [
    { id: "SK-SS1b-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which change would make Marcus's steps easier for a reader to follow?",
      choices: [
        { text: "Switch sentences 4 and 5 so the peanut butter goes on first.", correct: true },
        { text: "Switch sentences 3 and 6 so the feeder is hung up first." },
        { text: "Move sentence 2 so it comes after sentence 6 instead." },
        { text: "Move sentence 7 so it comes before sentence 3 instead." }
      ],
      clue: "Picture yourself doing each step. Would the birdseed stick to a bare pinecone?",
      why: "The answer is \"Switch sentences 4 and 5 so the peanut butter goes on first.\" The seeds stick only if the peanut butter is already on the pinecone. How-to steps must be in the order the reader does them." },
    { id: "SK-SS1b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Marcus wants to add a heading above sentences 3 through 6. Which heading fits best?",
      choices: [
        { text: "Making the Feeder Step by Step", correct: true },
        { text: "Things You Will Need" },
        { text: "Birds That Visit in Winter" },
        { text: "Why Birds Need Our Help" }
      ],
      clue: "Read only sentences 3 through 6. What do all four sentences tell the reader to do?",
      why: "The answer is \"Making the Feeder Step by Step.\" Sentences 3 to 6 are the steps for making and hanging the feeder. The list of things you need is in sentence 2, not in sentences 3 to 6." },
    { id: "SK-SS1b-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Some of Marcus's readers have never seen a pinecone feeder. Which feature would best help them know what the finished feeder looks like?",
      choices: [
        { text: "a photo of a finished feeder with a caption", correct: true },
        { text: "a numbered list of the four steps" },
        { text: "a heading above the list of supplies" },
        { text: "a bold title at the top of the page" }
      ],
      clue: "The reader's problem is not knowing what the feeder looks like. Which feature lets a reader see something?",
      why: "The answer is a photo of a finished feeder with a caption. A photo shows what the feeder looks like, and the caption tells what it is. A numbered list helps with the order of steps, and a heading or title names a part, but none of them shows the feeder." },
    { id: "SK-SS1b-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Marcus wants to add a closing sentence after sentence 8. Which sentence would be the best closing?",
      choices: [
        { text: "A pinecone feeder is a simple way to help hungry birds all winter.", correct: true },
        { text: "Cardinals are bright red, and they sing loud, clear songs." },
        { text: "Next, find another pinecone that is even bigger than the first." },
        { text: "My sister likes to fold paper into the shape of a bird." }
      ],
      clue: "A closing wraps up the whole piece. Reread sentence 1 to remember the main idea.",
      why: "The answer is \"A pinecone feeder is a simple way to help hungry birds all winter.\" It goes back to the main idea in sentence 1 and wraps up the piece. The other sentences add a new step or a new detail instead of closing." },
    { id: "SK-SS1b-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each writing job to the plan that fits it best.",
      cols: ["Steps in order", "Compare", "Cause and effect"],
      rows: [
        { text: "telling how to fold a paper boat", answer: 0 },
        { text: "telling how frogs and toads are alike and different", answer: 1 },
        { text: "telling why a pond dried up last summer", answer: 2 }
      ],
      clue: "For each job, ask: Is the writer teaching steps, showing alike and different, or telling why something happened?",
      why: "Folding a boat is a how-to, so it needs steps in order. Frogs and toads are two things side by side, so that is compare. Why a pond dried up asks for a reason, so that is cause and effect." }
  ],
  test: [
    { id: "SK-SS1b-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read the paragraph that begins with sentence 6. It is about events at the library. Select the sentence that belongs in the paragraph about things kids can borrow instead.",
      targets: ["p2:3:1", "p2:3:2", "p2:3:3", "p2:3:4"],
      answer: ["p2:3:3"], pick: 1,
      clue: "Ask of each sentence: Is this an event, something that happens at the library on a certain day? Or is it something you take home?",
      why: "The answer is sentence 8, \"Kids can also borrow audiobooks to listen to in the car.\" Audiobooks are something kids borrow, so it belongs with sentences 3 to 5. The other sentences tell about events." },
    { id: "SK-SS1b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Priya wants to add a heading above sentences 6 through 9. Which heading fits best?",
      choices: [
        { text: "Fun Events for Kids", correct: true },
        { text: "Things You Can Borrow" },
        { text: "How to Get a Library Card" },
        { text: "When the Library Is Open" }
      ],
      clue: "Look at the first sentence of that part. It tells what the whole part is mostly about.",
      why: "The answer is \"Fun Events for Kids.\" Sentence 6 says the library plans special activities, and sentences 7 and 9 tell about two of them: story time and the summer contest. Borrowing is the topic of sentences 3 to 5." },
    { id: "SK-SS1b-T3", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Priya wants to add a photo of the Saturday story time. Which caption would best help her reader?",
      choices: [
        { text: "A librarian reads a story to kids on a Saturday morning.", correct: true },
        { text: "Kids can check out puzzles and board games here." },
        { text: "The summer reading contest gives out fun prizes." },
        { text: "The Pine Hill Library is open six days a week." }
      ],
      clue: "A caption tells what is happening in the picture. Picture the photo, then find the words that match it.",
      why: "The answer is \"A librarian reads a story to kids on a Saturday morning.\" It tells exactly what the photo of story time shows. The other captions are true about the library but do not match this picture." },
    { id: "SK-SS1b-T4", type: "order", points: 2, dok: 2, passages: ["p2"],
      prompt: "Priya is writing a new paragraph that tells how to get a library card. Put her sentences in the best order.",
      steps: [
        "Getting your own library card is easy.",
        "Just bring a grown-up with you to the front desk.",
        "The librarian will give you a short form to fill out.",
        "When the form is done, the librarian hands you your card.",
        "Then you are ready to borrow your very first book!"
      ],
      clue: "Start with the sentence that tells what the paragraph is about. Then picture yourself at the library. What has to happen before each next step can happen?",
      why: "The order is: the card is easy to get, bring a grown-up to the desk, get a short form, receive your card when the form is done, and then borrow your first book. The topic sentence comes first, and each step must happen before the next one can." },
    { id: "SK-SS1b-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why did Priya put her ideas into separate paragraphs?",
      choices: [
        { text: "so each paragraph tells about one part of the library", correct: true },
        { text: "so the steps are in the order the reader does them" },
        { text: "so she could compare two different town libraries" },
        { text: "so every paragraph would be the very same length" }
      ],
      clue: "Look at the middle of the draft. What is each paragraph mostly about?",
      why: "The answer is so each paragraph tells about one part of the library. One paragraph tells what kids can borrow, and another tells about events. That makes the draft easy for a reader to follow." }
  ]
});

/* ---------- 3.T.SS.1.c Linking words ----------
   Words taught: because, since (reason); also (adds an idea); although (shows a difference);
   for example (gives an example). */
PP.addLesson({
  code: "3.T.SS.1.c",
  title: "Linking words: because, also, although, since and for example",
  teach: {
    big: "Linking words join ideas and show how they connect: because and since give a reason, also adds more, although shows a surprise, and for example gives an example.",
    points: [
      "Because and since tell why. \"We stayed inside since it was raining.\"",
      "Also adds another idea of the same kind. \"Dogs are friendly. They are also loyal.\"",
      "Although joins two ideas that do not seem to go together. \"Although it was cold, we went swimming.\"",
      "For example comes before an example of the idea you just told. \"Some animals sleep all winter. For example, many bats sleep in caves.\"",
      "To choose a linking word, read both ideas and ask how they connect. Then try the word and see if the sentence makes sense."
    ],
    words: [
      { term: "linking word", means: "a word that joins ideas and shows how they connect" },
      { term: "reason", means: "why something happens or why you think something" }
    ],
    example: {
      label: "Before and after",
      lines: ["Before: Hens make good pets. They lay eggs. They eat bugs in the garden.", "After: Hens make good pets because they lay eggs. They also eat bugs in the garden."],
      note: "Because shows that laying eggs is a reason hens make good pets. Also shows that eating bugs is one more reason. The ideas now connect."
    },
    tip: "On the test, you may choose the best word to join two sentences or to begin a sentence in a student's draft. Try each choice in the sentence and ask: does it show the right connection?"
  },
  learn: [
    {
      show: ["Mia stayed inside ____ it was raining hard."],
      ask: "Which word fits best: because, although or for example?",
      steps: [
        "Read both ideas: Mia stayed inside. It was raining hard.",
        "Ask how they connect. The rain is why Mia stayed inside. That is a reason.",
        "A reason needs because or since. Try it: Mia stayed inside because it was raining hard. It makes sense."
      ],
      answer: "Because fits best: \"Mia stayed inside because it was raining hard.\""
    },
    {
      show: ["____ the hill was very steep, Ben rode his bike all the way to the top."],
      ask: "Which word fits best: Because, Although or Also?",
      steps: [
        "Read both ideas: The hill was very steep. Ben rode all the way to the top.",
        "A steep hill is hard to ride up, so you might expect Ben to stop. But he did not. The ideas do not seem to go together.",
        "When the second idea is a surprise, use although."
      ],
      answer: "Although fits best: \"Although the hill was very steep, Ben rode his bike all the way to the top.\""
    },
    {
      show: ["Many animals sleep through the cold winter. ____, some bats sleep for months in caves."],
      ask: "Which words fit best: Since, For example or Although?",
      steps: [
        "Read the first sentence. It tells a big idea: many animals sleep through winter.",
        "Read the second sentence. Bats are one of those animals. It is an example of the big idea.",
        "Use for example to show that a sentence gives an example."
      ],
      answer: "For example fits best: \"For example, some bats sleep for months in caves.\""
    }
  ],
  write: {
    prompt: "Write 4 to 6 sentences about your favorite season. Use at least three of these linking words: because, since, also, although, for example.",
    checklist: [
      "I used because or since to give a reason.",
      "I used also to add another idea.",
      "I used although to show a surprise or a difference.",
      "I used for example to give an example.",
      "I read each sentence to check that the linking word makes sense."
    ],
    rows: 6
  },
  parent: "Play \"finish my sentence\": say \"I like pancakes because…\", \"Although it is late…\" or \"I like many fruits. For example…\" and let your child finish it. Then switch roles.",
  passages: [
    { id: "p1", draft: true, title: "Why I Love Riding My Bike", byline: "Sofia's first draft", genre: "Student draft (opinion)",
      paragraphs: [
        ["(1) Riding my bike is my favorite thing to do after school.", "(2) I like riding my bike so much.", "(3) It makes me feel free, like a bird in the sky."],
        ["(4) Biking is good exercise for my whole body.", "(5) My legs get a little stronger every single week."],
        ["(6) Biking is fun to do with my friends.", "(7) On weekends, we ride our bikes to Willow Park together and race around the pond."],
        ["(8) It rained hard last Saturday morning.", "(9) We still rode to the park in our raincoats and splashed through the puddles."],
        ["(10) Biking is a great way to have fun and stay healthy at the same time."]
      ] },
    { id: "p2", draft: true, title: "Busy Bees", byline: "Daniel's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) Bees are small insects, but they do a very big job."],
        ["(2) Bees help many plants make fruit.", "(3) They carry pollen from one flower to another."],
        ["(4) Many foods we eat need help from bees.", "(5) Apples, blueberries and peaches grow from flowers that bees visit."],
        ["(6) Bees also make honey.", "(7) People like to spread the sweet honey on toast or stir it into hot tea."],
        ["(8) Although many people are afraid of bees, most bees will not sting unless they feel scared or in danger."],
        ["(9) The next time you see a bee buzzing by, remember how much it helps us."]
      ] }
  ],
  practice: [
    { id: "SK-SS1c-P1", type: "dropdown", points: 1, dok: 1, passages: ["p1"],
      prompt: "Sofia wants to join sentences 2 and 3. Choose the word that best completes the new sentence.",
      text: "I like riding my bike so much {0} it makes me feel free, like a bird in the sky.",
      slots: [{ options: ["because", "although", "for example"], answer: 0 }],
      clue: "Ask how the two ideas connect. Does feeling free tell why Sofia likes riding, show a surprise, or give an example?",
      why: "The answer is because. Feeling free is the reason Sofia likes riding her bike, and because tells a reason." },
    { id: "SK-SS1c-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which is the best way to join sentences 8 and 9?",
      choices: [
        { text: "Although it rained hard last Saturday, we still rode to the park.", correct: true },
        { text: "Because it rained hard last Saturday, we still rode to the park." },
        { text: "Since it rained hard last Saturday, we still rode to the park." },
        { text: "For example, it rained hard last Saturday, so we rode to the park." }
      ],
      clue: "Would most people go for a bike ride in hard rain? If the second idea is a surprise, which linking word shows that?",
      why: "The answer is \"Although it rained hard last Saturday, we still rode to the park.\" Riding in hard rain is a surprise, and although joins two ideas that do not seem to go together. The rain was not the reason they rode, so because and since do not fit." },
    { id: "SK-SS1c-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Sofia wants to add a sentence after sentence 5 that gives an example. Which sentence is best?",
      choices: [
        { text: "For example, I can now pedal all the way up Oak Street hill.", correct: true },
        { text: "Although my legs are strong, I can pedal up Oak Street hill." },
        { text: "Since it was sunny, I rode my bike to school today." },
        { text: "Also, my sister has a bike with a bright green bell." }
      ],
      clue: "Reread sentence 5. The new sentence must show one example of that idea, and its linking word must do the right job.",
      why: "The answer is \"For example, I can now pedal all the way up Oak Street hill.\" Pedaling up a hill is one example of Sofia's legs getting stronger. Although does not fit, because strong legs climbing a hill is no surprise. The sunny day and the sister's bell are not about getting stronger." },
    { id: "SK-SS1c-P4", type: "dropdown", points: 1, dok: 1, passages: ["p1"],
      prompt: "Sofia wants sentence 6 to show that it adds one more reason she likes biking. Choose the word that best begins the sentence.",
      text: "{0}, biking is fun to do with my friends.",
      slots: [{ options: ["Also", "Although", "Because"], answer: 0 }],
      clue: "Sentence 4 gave one reason. Sentence 6 gives another. Which word adds one more idea of the same kind?",
      why: "The answer is Also. Also adds another reason: biking is good exercise, and it is also fun with friends. Although would need a surprise, and Because would need a reason for something, but sentence 6 just adds an idea." },
    { id: "SK-SS1c-P5", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Match each linking word to the job it does.",
      cols: ["Gives a reason", "Adds another idea", "Shows a surprise", "Gives an example"],
      rows: [
        { text: "because", answer: 0 },
        { text: "since", answer: 0 },
        { text: "also", answer: 1 },
        { text: "although", answer: 2 },
        { text: "for example", answer: 3 }
      ],
      clue: "Put each word in a sentence you make up. Then ask what the word is doing in your sentence.",
      why: "Because and since give a reason. Also adds another idea. Although shows a surprise, two ideas that do not seem to go together. For example gives an example." },
    { id: "SK-SS1c-P6", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words could fill the blank so the sentence makes sense?",
      stem: "We wore our warm coats ____ it was cold outside.",
      choices: [
        { text: "because", correct: true },
        { text: "since", correct: true },
        { text: "although" },
        { text: "also" },
        { text: "for example" }
      ],
      clue: "Is the cold weather the reason for the coats, a surprise, or an example? Find every word that does that job.",
      why: "The answers are because and since. The cold is the reason for wearing coats, and both words tell a reason. Although would mean the coats were a surprise, which does not make sense." }
  ],
  test: [
    { id: "SK-SS1c-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Daniel wants to begin one sentence with the words For example. Select the sentence where For example fits best.",
      targets: ["p2:2:2", "p2:3:2", "p2:4:1", "p2:6:1"],
      answer: ["p2:3:2"], pick: 1,
      clue: "For example must come right after a big idea, and the new sentence must name some examples of it. Read the sentence before each choice.",
      why: "The answer is sentence 5, \"Apples, blueberries and peaches grow from flowers that bees visit.\" Sentence 4 says many foods need bees, and sentence 5 names some of those foods, so it is an example. Sentence 3 tells how bees help, not an example, and sentence 6 already has the linking word also." },
    { id: "SK-SS1c-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "In sentence 8, why does Daniel use the word although?",
      choices: [
        { text: "to show that the two ideas do not seem to go together", correct: true },
        { text: "to give the reason that people are afraid of bees" },
        { text: "to add one more way that bees help people" },
        { text: "to give an example of a time a bee stung" }
      ],
      clue: "Read the two ideas in sentence 8. If people are afraid of bees, what might you expect bees to do? What does the sentence say instead?",
      why: "The answer is to show that the two ideas do not seem to go together. You might expect bees to sting often, since people fear them, but most bees will not sting. Although joins those two ideas. It does not give a reason, add a way bees help, or give an example." },
    { id: "SK-SS1c-T3", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the linking word that best completes each sentence.",
      text: "Lena packed an umbrella {0} the sky looked gray. {1} the rain never came, she was glad to be ready.",
      slots: [
        { options: ["because", "although", "for example"], answer: 0 },
        { options: ["Although", "Because", "Also"], answer: 0 }
      ],
      clue: "For each blank, ask: Is this a reason, or is it a surprise?",
      why: "The first answer is because: the gray sky is the reason Lena packed an umbrella. The second answer is Although: she was glad to be ready even though the rain never came, which is a surprise." },
    { id: "SK-SS1c-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO sentences use a linking word correctly?",
      choices: [
        { text: "Bees help flowers make fruit, and they also make honey.", correct: true },
        { text: "Although bees are small, they do very important work.", correct: true },
        { text: "Bees visit many flowers, for example they are busy." },
        { text: "Since bees are scary, they make sweet honey." },
        { text: "Bees help plants grow because peaches are sweet." }
      ],
      clue: "Read each sentence and ask what job its linking word is doing. Does that job make sense with the ideas it joins?",
      why: "The answers are \"Bees help flowers make fruit, and they also make honey\" and \"Although bees are small, they do very important work.\" Also adds a second job bees do, and although shows a surprise: small bees do a big job. In the others, the reason or example does not match the idea." },
    { id: "SK-SS1c-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Daniel wants to join sentences 2 and 3 to show which idea is the reason. Which new sentence is best?",
      choices: [
        { text: "Bees help many plants make fruit since they carry pollen from flower to flower.", correct: true },
        { text: "Bees help many plants make fruit, so they carry pollen from flower to flower." },
        { text: "Although bees help many plants make fruit, they carry pollen from flower to flower." },
        { text: "Bees help many plants make fruit, for example they carry pollen from flower to flower." }
      ],
      clue: "Ask which idea causes the other. Does helping plants make bees carry pollen, or does carrying pollen help the plants?",
      why: "The answer is \"Bees help many plants make fruit since they carry pollen from flower to flower.\" Carrying pollen is the reason plants can make fruit, and since points to the reason. The so sentence turns it around, as if helping plants were the reason bees carry pollen." }
  ]
});

/* ---------- 3.T.SS.1.d Paragraphs that stay on one idea ---------- */
PP.addLesson({
  code: "3.T.SS.1.d",
  title: "Paragraphs that stay on one idea",
  teach: {
    big: "A good paragraph is about one main idea: the topic sentence tells the idea, and every other sentence tells more about it.",
    points: [
      "The topic sentence tells what the paragraph is about. It is often the first sentence.",
      "Detail sentences give facts, examples or reasons about that one idea.",
      "A sentence about something else does not belong, even if it uses some of the same words.",
      "When you move to a new idea, start a new paragraph.",
      "A closing sentence can wrap up the idea at the end."
    ],
    words: [
      { term: "paragraph", means: "a group of sentences about one main idea" },
      { term: "topic sentence", means: "the sentence that tells what the paragraph is about" },
      { term: "detail", means: "a sentence that tells more about the main idea" }
    ],
    example: {
      label: "Example",
      lines: ["Our town's fall festival has something for everyone. Little kids can ride ponies and paint pumpkins. Older kids can get lost in the corn maze. Grown-ups enjoy the music and the pie contest."],
      note: "The first sentence is the topic sentence: the festival has something for everyone. Every other sentence names a group of people and what they enjoy. Nothing is off topic."
    },
    tip: "On the test, you may choose the sentence that does not belong, the best topic sentence, or the best detail to add to a paragraph in a student's draft."
  },
  learn: [
    {
      show: ["Cats make great pets. They are quiet and clean. They can stay home alone during the day. My uncle has a red truck. Cats also like to curl up on your lap."],
      ask: "Which sentence does not belong?",
      steps: [
        "Find the topic sentence. \"Cats make great pets\" tells the main idea.",
        "Check each sentence. Does it tell why cats make great pets?",
        "Quiet, clean, staying alone and curling up on your lap all fit. A red truck is not about cats at all."
      ],
      answer: "\"My uncle has a red truck\" does not belong, because it is not about why cats make great pets."
    },
    {
      show: ["____ We built a snowman in the yard. Then we had a snowball fight. Later, we drank hot cocoa by the fire."],
      ask: "Which topic sentence fits best: \"Snow is made of tiny ice crystals,\" \"Our snow day was full of fun\" or \"We built a snowman\"?",
      steps: [
        "Read the details. They tell three fun things done on a snowy day.",
        "A topic sentence must cover all of the details, not just one.",
        "\"We built a snowman\" is only one detail. The ice crystal fact is not about the day at all."
      ],
      answer: "\"Our snow day was full of fun\" fits best, because it covers every detail in the paragraph."
    },
    {
      show: ["Topic sentence: Soccer practice helps our team get better."],
      ask: "Which detail belongs in this paragraph: \"We run drills to make our passes sharper\" or \"My favorite color is green\"?",
      steps: [
        "Read the topic sentence and name the idea: practice helps the team improve.",
        "Ask of each detail: Does it show how practice helps the team?",
        "Running drills to pass better shows the team getting better. A favorite color does not."
      ],
      answer: "\"We run drills to make our passes sharper\" belongs, because it shows how practice helps the team get better."
    }
  ],
  write: {
    prompt: "Write one paragraph about a place you like to visit. Start with a topic sentence, add at least three details, and end with a closing sentence.",
    checklist: [
      "I started with a topic sentence that tells my main idea.",
      "I wrote at least three details about that idea.",
      "I checked that every sentence is about my main idea.",
      "I ended with a closing sentence."
    ],
    rows: 7
  },
  parent: "At dinner, name a topic like \"our kitchen\" or \"weekends\" and take turns saying one sentence about it. If someone drifts off topic, the others call \"Off topic!\" and that person tries again.",
  passages: [
    { id: "p1", draft: true, title: "Amazing Hummingbirds", byline: "Aaliyah's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) Hummingbirds are tiny birds that can do amazing things.", "(2) In Georgia, you can see ruby-throated hummingbirds in the spring and summer."],
        ["(3) Hummingbirds can fly in ways that most birds cannot.", "(4) They can hover in one spot like a tiny helicopter.", "(5) They can even fly backward.", "(6) My grandma has a pretty red bird feeder on her porch."],
        ["(7) Hummingbirds sip sweet nectar from flowers.", "(8) They also catch and eat tiny insects.", "(9) They need to eat many times each day to stay strong."],
        ["(10) These tiny birds are so much fun to watch in the spring and summer."]
      ] },
    { id: "p2", draft: true, title: "Field Day", byline: "Carlos's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) Field Day at Maple Creek Elementary was the best day of the whole school year."],
        ["(2) The morning was full of races.", "(3) First, we hopped across the grass in the sack race.", "(4) Then we raced while carrying eggs on spoons.", "(5) My big brother is learning how to drive a car.", "(6) The last race was a relay, and my team won."],
        ["(7) After lunch, we cooled off with water games.", "(8) We tossed water balloons back and forth with partners.", "(9) The teachers sprayed us with garden hoses.", "(10) Everyone was soaked and laughing."],
        ["(11) I can't wait for next year's Field Day!"]
      ] }
  ],
  practice: [
    { id: "SK-SS1d-P1", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read the paragraph that begins with sentence 3. Select the sentence that does not belong in that paragraph.",
      targets: ["p1:2:1", "p1:2:2", "p1:2:3", "p1:2:4"],
      answer: ["p1:2:4"], pick: 1,
      clue: "Sentence 3 is the topic sentence. Check each other sentence: does it tell about how hummingbirds fly?",
      why: "The answer is sentence 6, \"My grandma has a pretty red bird feeder on her porch.\" The paragraph is about the special ways hummingbirds fly. A feeder on a porch is not about flying." },
    { id: "SK-SS1d-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The paragraph that begins with sentence 7 needs a topic sentence. Which sentence should Aaliyah add before sentence 7?",
      choices: [
        { text: "Hummingbirds spend a lot of their time eating.", correct: true },
        { text: "Hummingbirds have long, thin beaks and tongues." },
        { text: "Some birds fly south when the weather gets cold." },
        { text: "Hummingbirds can hover and even fly backward." }
      ],
      clue: "Read sentences 7, 8 and 9. What do all three tell about? The topic sentence must cover all of them.",
      why: "The answer is \"Hummingbirds spend a lot of their time eating.\" Sentences 7 to 9 tell what hummingbirds eat and how often. Beaks are only one body part, and hovering belongs in the paragraph about flying." },
    { id: "SK-SS1d-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which detail would best fit in the paragraph that begins with sentence 3?",
      choices: [
        { text: "Their wings beat so fast that they make a humming sound.", correct: true },
        { text: "They build nests out of soft plant fluff and spider silk." },
        { text: "Some people hang feeders filled with sugar water." },
        { text: "Female hummingbirds usually lay two tiny white eggs." }
      ],
      clue: "Name the main idea of that paragraph first. Then pick the detail that tells more about that idea, not just about hummingbirds in general.",
      why: "The answer is \"Their wings beat so fast that they make a humming sound.\" That paragraph is about how hummingbirds fly, and fast wings are part of flying. Nests, feeders and eggs are true but are not about flying." },
    { id: "SK-SS1d-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each sentence from the paragraph that begins with sentence 3 to the job it does.",
      cols: ["Topic sentence", "Detail", "Does not belong"],
      rows: [
        { text: "(3) Hummingbirds can fly in ways that most birds cannot.", answer: 0 },
        { text: "(4) They can hover in one spot like a tiny helicopter.", answer: 1 },
        { text: "(5) They can even fly backward.", answer: 1 },
        { text: "(6) My grandma has a pretty red bird feeder on her porch.", answer: 2 }
      ],
      clue: "One sentence tells the main idea. Some sentences tell more about it. Ask which sentence is about something else.",
      why: "Sentence 3 is the topic sentence: hummingbirds fly in special ways. Sentences 4 and 5 are details that show those ways. Sentence 6 does not belong because it is about a feeder, not flying." },
    { id: "SK-SS1d-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Read the paragraph. Which TWO sentences do not belong?",
      stem: "Our class garden is busy in the spring. We plant bean and squash seeds in long rows. My favorite food is spaghetti with meatballs. Every morning, two students water the plants. The new swings on the playground are fast. By May, the first green beans are ready to pick.",
      choices: [
        { text: "My favorite food is spaghetti with meatballs.", correct: true },
        { text: "The new swings on the playground are fast.", correct: true },
        { text: "We plant bean and squash seeds in long rows." },
        { text: "Every morning, two students water the plants." },
        { text: "By May, the first green beans are ready to pick." }
      ],
      clue: "The first sentence is the topic sentence. Test each other sentence: is it about the class garden in spring?",
      why: "The answers are \"My favorite food is spaghetti with meatballs\" and \"The new swings on the playground are fast.\" Neither one is about the class garden. Planting, watering and picking beans all tell about the busy garden." }
  ],
  test: [
    { id: "SK-SS1d-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read the paragraph that begins with sentence 2. Select the sentence that does not belong in that paragraph.",
      targets: ["p2:2:1", "p2:2:2", "p2:2:3", "p2:2:4", "p2:2:5"],
      answer: ["p2:2:4"], pick: 1,
      clue: "Find the topic sentence of that paragraph. Then test each sentence: is it about that idea?",
      why: "The answer is sentence 5, \"My big brother is learning how to drive a car.\" The paragraph is about the races on Field Day morning. A brother learning to drive is not about the races." },
    { id: "SK-SS1d-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Carlos wants to add a detail to the paragraph that begins with sentence 7. Which sentence fits best?",
      choices: [
        { text: "Some kids ran through a sprinkler set up by the gym.", correct: true },
        { text: "The sack race was much harder than it looked." },
        { text: "Our class ate pizza in the cafeteria for lunch." },
        { text: "My teacher says next year will be even better." }
      ],
      clue: "Name the main idea of that paragraph first. The new detail must tell more about that idea.",
      why: "The answer is \"Some kids ran through a sprinkler set up by the gym.\" That paragraph is about water games after lunch, and a sprinkler is a water game. The sack race belongs with the races, and lunch is not a water game." },
    { id: "SK-SS1d-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the paragraph that begins with sentence 7 mostly about?",
        choices: [
          { text: "the water games after lunch", correct: true },
          { text: "the races in the morning" },
          { text: "what the class ate for lunch" },
          { text: "how the teachers planned the day" }
        ] },
      partB: { prompt: "Which sentence from that paragraph is its topic sentence?",
        choices: [
          { text: "\"After lunch, we cooled off with water games.\"", correct: true },
          { text: "\"We tossed water balloons back and forth with partners.\"" },
          { text: "\"The teachers sprayed us with garden hoses.\"" },
          { text: "\"Everyone was soaked and laughing.\"" }
        ] },
      clue: "Read all four sentences of that paragraph. What do they share? Then find the sentence that names that shared idea, not one detail.",
      why: "Part A: the water games after lunch. Part B: \"After lunch, we cooled off with water games.\" That sentence names the main idea. The balloons, the hoses and everyone being soaked are details about it." },
    { id: "SK-SS1d-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the paragraph. It is missing a topic sentence. Which sentence would be the best topic sentence?",
      stem: "____ Some of them eat seeds from our feeder. Others peck at bugs on the old oak tree. A few even splash in the birdbath.",
      choices: [
        { text: "Many kinds of birds visit our backyard.", correct: true },
        { text: "Birds have feathers to keep them warm." },
        { text: "My dog likes to chase the squirrels." },
        { text: "Our backyard has a tall oak tree." }
      ],
      clue: "Who is \"them\" in the paragraph? The topic sentence must cover every detail, not just one place in the yard.",
      why: "The answer is \"Many kinds of birds visit our backyard.\" Every detail tells something birds do in the backyard. The oak tree is only one detail, and feathers and the dog are not what the paragraph is about." },
    { id: "SK-SS1d-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Carlos wants to add a new paragraph about the awards at the end of the day. Which sentence would be the best topic sentence for it?",
      choices: [
        { text: "At the end of the day, everyone met in the gym for awards.", correct: true },
        { text: "We were all tired from running in the hot sun all day." },
        { text: "The water balloons were red, blue, green and yellow." },
        { text: "My best friend Eli forgot to bring his water bottle." }
      ],
      clue: "A topic sentence for a new paragraph names the new idea. Which sentence tells what the whole new paragraph will be about?",
      why: "The answer is \"At the end of the day, everyone met in the gym for awards.\" It tells the reader the new paragraph is about the awards. The other sentences are small details that do not name the awards at all." }
  ]
});

/* ---------- 3.T.SS.2.a Similes, metaphors and idioms (reading) ---------- */
PP.addLesson({
  code: "3.T.SS.2.a",
  title: "Similes, metaphors and idioms",
  teach: {
    big: "Authors use special language to help you picture things: a simile compares with like or as, a metaphor says one thing is another, and an idiom is a saying that means something different from its words.",
    points: [
      "A simile compares two different things using like or as. \"The lake was as smooth as glass\" means the lake was very smooth and flat.",
      "A metaphor compares without like or as. It says one thing is another. \"The classroom was a zoo\" means the room was loud and wild.",
      "An idiom is a saying you cannot read word for word. \"It's raining cats and dogs\" means it is raining very hard.",
      "To find the meaning, ask: How are the two things alike? Then use the sentences around it as clues.",
      "Not every like is a simile. \"I like pizza\" does not compare anything."
    ],
    words: [
      { term: "simile", means: "a comparison that uses like or as" },
      { term: "metaphor", means: "a comparison that says one thing is another" },
      { term: "idiom", means: "a saying that means something different from its words" }
    ],
    example: {
      label: "Example",
      lines: ["When the bell rang, Kenji was as quick as a rabbit. He was out the door before anyone else."],
      note: "\"As quick as a rabbit\" is a simile. It uses as to compare Kenji to a rabbit. Rabbits are fast, so it means Kenji moved very fast. The next sentence proves it."
    },
    tip: "On the test, you may be asked what a phrase means, or to find the sentence with a simile or a metaphor. Look for like or as, then check the clues around the words."
  },
  learn: [
    {
      show: ["The old dog's fur was as soft as a cloud."],
      ask: "What kind of figurative language is this, and what does it mean?",
      steps: [
        "Look for like or as. The sentence says as soft as a cloud, so it is a simile.",
        "Name the two things being compared: the dog's fur and a cloud.",
        "Ask how they are alike. Clouds look very soft and fluffy."
      ],
      answer: "It is a simile. It means the dog's fur was very soft."
    },
    {
      show: ["After the long hike up the mountain, my legs were noodles."],
      ask: "What kind of figurative language is this, and what does it mean?",
      steps: [
        "Look for like or as. There are none. The sentence says the legs were noodles, so it is a metaphor.",
        "Legs cannot really turn into noodles. Think about how cooked noodles are: floppy and wobbly.",
        "Use the clue: the hike was long, so the legs were tired."
      ],
      answer: "It is a metaphor. It means the speaker's legs felt tired and wobbly after the hike."
    },
    {
      show: ["\"Hold your horses!\" Grandpa said. \"The cookies are still too hot to eat.\""],
      ask: "What does \"hold your horses\" mean here?",
      steps: [
        "There are no horses in this kitchen, so the words do not mean what they say. It is an idiom.",
        "Read the clue: the cookies are still too hot to eat.",
        "Grandpa wants someone to wait before grabbing a cookie."
      ],
      answer: "\"Hold your horses\" is an idiom that means wait and be patient."
    }
  ],
  parent: "Collect sayings you hear this week, like \"a piece of cake\" or \"as busy as a bee.\" Ask your child what each one really means, then draw a silly picture of what the words say if you took them word for word.",
  passages: [
    { id: "p1", title: "The First Swim Meet", genre: "Literary text",
      paragraphs: [
        ["Rosa stood at the edge of the pool with her heart pounding like a drum.", "It was her very first swim meet.", "The water below her looked as cold as ice."],
        ["Her coach, Ms. Ellis, saw Rosa's worried face.", "\"You have butterflies in your stomach,\" Ms. Ellis said with a smile.", "\"That's okay. Everyone does before a race.\""],
        ["The whistle blew, and Rosa dove in.", "She kicked hard.", "Her arms were windmills, spinning round and round.", "She did not look at the other swimmers."],
        ["When Rosa touched the wall, she pulled off her goggles.", "She had come in third place!", "Up in the stands, her little brother was jumping up and down like a bouncing ball."],
        ["On the way home, Rosa held her ribbon tight.", "She was already counting the days until the next meet."]
      ] },
    { id: "p2", title: "Moving Day", genre: "Literary text",
      paragraphs: [
        ["The moving truck rumbled away, and Jamal stood in his new, empty bedroom.", "The bare walls were as white as fresh snow.", "Everything felt strange."],
        ["\"Why the long face?\" asked Dad from the doorway.", "Jamal shrugged.", "\"I don't know anyone here,\" he said quietly."],
        ["That evening, Jamal sat alone on the front steps.", "The sun was a hot orange ball sinking behind the pine trees.", "Then a girl rolled up the sidewalk on a scooter."],
        ["\"I'm Noor,\" she said.", "\"I live next door.\"", "\"Want to ride to the park?\""],
        ["Jamal grabbed his scooter, and the two of them zoomed down the sidewalk like rockets.", "By dinnertime, Jamal was smiling from ear to ear.", "Maybe this new town would not be so bad after all."]
      ] }
  ],
  practice: [
    { id: "SK-SS2a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "In paragraph 1, the author says Rosa's heart was \"pounding like a drum.\" What does this mean?",
      choices: [
        { text: "Her heart was beating hard and fast.", correct: true },
        { text: "Her heart was beating slow and soft." },
        { text: "She heard a drum playing at the pool." },
        { text: "She was tapping her hands on a drum." }
      ],
      clue: "Think about how a drum sounds when someone hits it. Then think about how Rosa feels at her very first meet.",
      why: "The answer is \"Her heart was beating hard and fast.\" A pounding drum is loud and strong. Rosa is nervous at her first meet, so her heart is beating hard. There is no real drum in the story." },
    { id: "SK-SS2a-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Select the sentence that uses a metaphor.",
      targets: ["p1:1:1", "p1:1:3", "p1:3:3", "p1:4:3"],
      answer: ["p1:3:3"], pick: 1,
      clue: "A metaphor compares without like or as. First rule out every sentence that uses like or as.",
      why: "The answer is \"Her arms were windmills, spinning round and round.\" It says her arms were windmills without using like or as. The other sentences use like or as, so they are similes." },
    { id: "SK-SS2a-P3", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "In paragraph 2, Ms. Ellis says Rosa has \"butterflies in your stomach.\" What does this idiom mean?",
        choices: [
          { text: "Rosa feels nervous about the race.", correct: true },
          { text: "Rosa feels sick from eating lunch." },
          { text: "Rosa is excited to see butterflies." },
          { text: "Rosa feels too tired to swim fast." }
        ] },
      partB: { prompt: "Which sentence from the story best helps you know what the idiom means?",
        choices: [
          { text: "\"Her coach, Ms. Ellis, saw Rosa's worried face.\"", correct: true },
          { text: "\"The whistle blew, and Rosa dove in.\"" },
          { text: "\"She had come in third place!\"" },
          { text: "\"She did not look at the other swimmers.\"" }
        ] },
      clue: "There are no real butterflies at the pool. Look for a clue that tells how Rosa feels just before Ms. Ellis speaks.",
      why: "Part A: Rosa feels nervous about the race. Part B: \"Her coach, Ms. Ellis, saw Rosa's worried face.\" Ms. Ellis says this right after she sees Rosa looking worried, and she adds that everyone feels that way before a race." },
    { id: "SK-SS2a-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each phrase from the story to the kind of figurative language it is.",
      cols: ["Simile", "Metaphor", "Idiom"],
      rows: [
        { text: "as cold as ice", answer: 0 },
        { text: "Her arms were windmills", answer: 1 },
        { text: "butterflies in your stomach", answer: 2 },
        { text: "jumping up and down like a bouncing ball", answer: 0 }
      ],
      clue: "Check each phrase for like or as. Then ask: does it say one thing is another, or is it a saying you cannot read word for word?",
      why: "\"As cold as ice\" and \"like a bouncing ball\" are similes because they use as or like. \"Her arms were windmills\" is a metaphor. \"Butterflies in your stomach\" is an idiom that means feeling nervous." },
    { id: "SK-SS2a-P5", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The author writes that Rosa's arms \"were windmills, spinning round and round.\" What does this show about how Rosa swims?",
      choices: [
        { text: "Her arms move around quickly and strongly.", correct: true },
        { text: "Her arms are stiff and will not bend." },
        { text: "She swims slowly near the side of the pool." },
        { text: "Her arms get tired and stop moving." }
      ],
      clue: "Picture the blades of a windmill turning in the wind. Which choice moves the same way?",
      why: "The answer is \"Her arms move around quickly and strongly.\" Windmill blades turn in big, fast circles. The metaphor shows Rosa's arms circling hard through the water." }
  ],
  test: [
    { id: "SK-SS2a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "In paragraph 2, Dad asks, \"Why the long face?\" What does he mean?",
      choices: [
        { text: "Why do you look so sad?", correct: true },
        { text: "Why are you so tired?" },
        { text: "Why is your face dirty?" },
        { text: "Why are you standing so tall?" }
      ],
      clue: "This is an idiom. Read what Jamal says next. How does Jamal feel about the move?",
      why: "The answer is \"Why do you look so sad?\" A long face is an idiom for a sad look. Jamal answers that he doesn't know anyone here, which shows he is unhappy." },
    { id: "SK-SS2a-T2", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Select the sentence that uses a simile to describe how Jamal and Noor move.",
      targets: ["p2:1:2", "p2:3:2", "p2:5:1", "p2:5:2"],
      answer: ["p2:5:1"], pick: 1,
      clue: "Two things must be true: the sentence uses like or as, and it tells how the two friends move.",
      why: "The answer is \"Jamal grabbed his scooter, and the two of them zoomed down the sidewalk like rockets.\" It uses like to compare the friends to rockets, which shows they move very fast. The snow simile is about the walls, not about moving." },
    { id: "SK-SS2a-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "In paragraph 5, Jamal is \"smiling from ear to ear.\" What does this idiom mean?",
        choices: [
          { text: "He is smiling a big, happy smile.", correct: true },
          { text: "He is covering his ears with his hands." },
          { text: "He is trying hard not to smile." },
          { text: "He is listening to a funny joke." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Maybe this new town would not be so bad after all.\"", correct: true },
          { text: "\"Everything felt strange.\"" },
          { text: "\"The bare walls were as white as fresh snow.\"" },
          { text: "\"Then a girl rolled up the sidewalk on a scooter.\"" }
        ] },
      clue: "Think about how wide a smile would be if it stretched toward both ears. Then find a sentence that shows how Jamal feels at the end.",
      why: "Part A: He is smiling a big, happy smile. Part B: \"Maybe this new town would not be so bad after all.\" By the end, Jamal has a new friend and feels better about the move, so his smile is wide and happy." },
    { id: "SK-SS2a-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author writes, \"The sun was a hot orange ball sinking behind the pine trees.\" What kind of figurative language is this?",
      choices: [
        { text: "a metaphor, because it says the sun was a ball", correct: true },
        { text: "a simile, because it uses as to compare two things" },
        { text: "an idiom, because it is a common saying" },
        { text: "a simile, because it uses like to compare" }
      ],
      clue: "Look closely at the words. Does the sentence use like or as? Does it say one thing is another?",
      why: "The answer is a metaphor, because it says the sun was a ball. The sentence does not use like or as. It says the sun was a hot orange ball, which helps you picture a round, glowing sunset." },
    { id: "SK-SS2a-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The author writes, \"The bare walls were as white as fresh snow.\" What does this help the reader picture?",
      choices: [
        { text: "very white walls with nothing on them", correct: true },
        { text: "cold, wet walls in a snowy room" },
        { text: "walls painted with many bright colors" },
        { text: "walls covered with pictures of snow" }
      ],
      clue: "Bare means nothing is on them. Then think about the color of fresh snow.",
      why: "The answer is very white walls with nothing on them. Fresh snow is bright white, so the simile shows the walls are very white. There is no real snow in the room." }
  ]
});

/* ---------- 3.T.SS.2.b Use similes, metaphors and idioms in writing ---------- */
PP.addLesson({
  code: "3.T.SS.2.b",
  title: "Use similes, metaphors and idioms in your writing",
  teach: {
    big: "You can make your writing come alive with comparisons: a simile with like or as, a metaphor that says one thing is another, or an idiom, as long as it fits what you mean.",
    points: [
      "First decide what you want your reader to picture or feel. Is it fast, loud, quiet, happy or scared?",
      "Think of something that is very fast, loud or quiet. Then compare: \"as quiet as a mouse.\"",
      "Make sure the comparison fits. A slow bus is \"as slow as a turtle,\" not \"as fast as a jet.\"",
      "Use an idiom only when its meaning matches. \"A piece of cake\" means easy, so it fits an easy test, not a hard one.",
      "One or two strong comparisons are plenty. Too many can make writing confusing."
    ],
    words: [
      { term: "simile", means: "a comparison that uses like or as" },
      { term: "metaphor", means: "a comparison that says one thing is another" },
      { term: "idiom", means: "a saying that means something different from its words" }
    ],
    example: {
      label: "Before and after",
      lines: ["Before: The hallway was quiet.", "After: The hallway was as quiet as a library at night."],
      note: "The writer wanted the reader to feel how quiet it was. A library at night is about as quiet as a place can be, so the simile fits."
    },
    tip: "On the test, you may choose the best simile or idiom to add to a student's draft, or the best place to add one. Check that the comparison matches what the writer means."
  },
  learn: [
    {
      show: ["Our new puppy runs very fast."],
      ask: "Which simile fits best: \"like a rocket\" or \"like a snail\"?",
      steps: [
        "Name what the writer wants to show: the puppy is very fast.",
        "Think about each thing. A rocket is very fast. A snail is very slow.",
        "Pick the one that matches the meaning."
      ],
      answer: "\"Like a rocket\" fits: \"Our new puppy runs like a rocket.\" A snail would show the opposite."
    },
    {
      show: ["The thick fog covered the whole town."],
      ask: "How could you change this into a metaphor?",
      steps: [
        "Ask what fog is like. It is soft and gray, and it covers everything.",
        "Think of something else that is soft and covers things, like a blanket.",
        "A metaphor says the fog is that thing, without like or as."
      ],
      answer: "\"The fog was a soft gray blanket over the whole town.\""
    },
    {
      show: ["Jada thought the math quiz was very easy."],
      ask: "Which idiom fits best: \"a piece of cake\" or \"in hot water\"?",
      steps: [
        "Name the meaning the writer wants: very easy.",
        "\"A piece of cake\" means easy. \"In hot water\" means in trouble.",
        "Only one idiom matches the meaning."
      ],
      answer: "\"A piece of cake\" fits: \"For Jada, the math quiz was a piece of cake.\""
    }
  ],
  write: {
    prompt: "Write 4 to 6 sentences about a storm, a busy place or an animal you know. Use at least one simile, one metaphor and one idiom. Circle each one.",
    checklist: [
      "I used a simile with like or as.",
      "I used a metaphor that says one thing is another.",
      "I used an idiom that fits what I mean.",
      "Each comparison helps my reader picture or understand my idea."
    ],
    rows: 6
  },
  parent: "On a walk or a car ride, take turns finishing \"as ___ as a ___\" about what you see, like \"as tall as a giraffe\" or \"as loud as a fire truck.\" Talk about whether each comparison really fits.",
  passages: [
    { id: "p1", draft: true, title: "The Big Storm", byline: "Mei's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) Last night, a big storm rolled into our town.", "(2) The sky turned dark.", "(3) The wind pushed hard against our windows and shook the tall trees in our yard."],
        ["(4) Then the rain began.", "(5) Soon the thunder started, and it was very loud.", "(6) My little cat, Pepper, ran and hid under my bed until it was over."],
        ["(7) By the next morning, the storm was gone.", "(8) Our whole yard was full of muddy brown puddles.", "(9) I pulled on my rain boots and jumped in every single one.", "(10) Splashing in the puddles, I was very happy."]
      ] },
    { id: "p2", draft: true, title: "My Talent Show", byline: "Andre's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) Last Friday, our school had a talent show in the gym.", "(2) I signed up to play the drums.", "(3) Before the show, I was very nervous.", "(4) My hands would not stop shaking."],
        ["(5) When it was my turn, I walked out onto the stage.", "(6) I could hardly see the people in the crowd.", "(7) I counted to four and started to play.", "(8) My drumsticks moved very fast."],
        ["(9) When I finished, everyone clapped and cheered.", "(10) The sound of all that clapping was loud.", "(11) I felt proud."],
        ["(12) Next year, I want to play an even harder song."]
      ] }
  ],
  practice: [
    { id: "SK-SS2b-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Mei wants to add a simile to sentence 2 to help the reader picture the sky. Which revision is best?",
      choices: [
        { text: "The sky turned as dark as a cave.", correct: true },
        { text: "The sky turned dark as the storm came." },
        { text: "The sky turned as white as fresh milk." },
        { text: "The sky turned very, very, very dark." }
      ],
      clue: "A simile compares two different things. Check that the sentence really compares, and that the comparison shows a dark sky.",
      why: "The answer is \"The sky turned as dark as a cave.\" It compares the sky to a cave using as, and a cave is very dark. \"Dark as the storm came\" uses as to tell when, not to compare. White milk shows the opposite of dark." },
    { id: "SK-SS2b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Mei wants to replace sentence 5 with a metaphor that shows how loud the thunder was. Which sentence is best?",
      choices: [
        { text: "Soon the thunder was a giant drum shaking the house.", correct: true },
        { text: "Soon the thunder was like a soft whisper in my ear." },
        { text: "Soon the thunder was a tiny bell ringing far away." },
        { text: "Soon the thunder started, and Pepper got scared." }
      ],
      clue: "Two things must be true. The sentence must say the thunder is something else without like or as, and that something must be loud.",
      why: "The answer is \"Soon the thunder was a giant drum shaking the house.\" It says the thunder was a drum, which is a metaphor, and a giant drum is loud. The whisper uses like and is quiet, and a tiny far-off bell is quiet too." },
    { id: "SK-SS2b-P3", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Mei wants to revise sentence 10 with an idiom that shows she was very happy. Choose the idiom that fits best.",
      text: "Splashing in the puddles, I was {0}.",
      slots: [{ options: ["on cloud nine", "under the weather", "in hot water"], answer: 0 }],
      clue: "Think about what each saying really means. Which one means very happy?",
      why: "The answer is on cloud nine. That idiom means very happy. Under the weather means sick, and in hot water means in trouble." },
    { id: "SK-SS2b-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Mei wrote some new sentences for her story. Match each one to the kind of figurative language it uses.",
      cols: ["Simile", "Metaphor", "Idiom"],
      rows: [
        { text: "The wind howled like a hungry wolf.", answer: 0 },
        { text: "The puddles were shiny mirrors on the grass.", answer: 1 },
        { text: "It was raining cats and dogs.", answer: 2 },
        { text: "The thunder was as loud as a marching band.", answer: 0 }
      ],
      clue: "Look for like or as first. Then ask: does the sentence say one thing is another, or is it a saying you cannot read word for word?",
      why: "The wolf and the marching band sentences are similes because they use like or as. \"The puddles were shiny mirrors\" is a metaphor. \"Raining cats and dogs\" is an idiom that means raining very hard." },
    { id: "SK-SS2b-P5", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Mei wants to add this sentence: \"The raindrops tapped on the roof like tiny fingers.\" Where is the best place to add it?",
      choices: [
        { text: "after sentence 4", correct: true },
        { text: "after sentence 1" },
        { text: "after sentence 7" },
        { text: "after sentence 9" }
      ],
      clue: "The new sentence is about rain falling. Find the sentence where the rain starts.",
      why: "The answer is after sentence 4. Sentence 4 says, \"Then the rain began,\" so the tapping raindrops come right after it. By sentence 7 the storm is gone, and in sentence 1 the rain has not started." }
  ],
  test: [
    { id: "SK-SS2b-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Andre wants to revise sentence 8 with a simile that shows how fast his drumsticks moved. Which revision is best?",
      choices: [
        { text: "My drumsticks moved as fast as a hummingbird's wings.", correct: true },
        { text: "My drumsticks moved as slowly as a sleepy snail." },
        { text: "My drumsticks moved fast, and the crowd watched." },
        { text: "My drumsticks were made of smooth brown wood." }
      ],
      clue: "The sentence must use like or as to compare, and the thing it compares to must be fast.",
      why: "The answer is \"My drumsticks moved as fast as a hummingbird's wings.\" It uses as to compare, and hummingbird wings move very fast. A snail shows slow, and the other two do not compare anything." },
    { id: "SK-SS2b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Andre wants to revise sentence 3 with an idiom that shows how nervous he was. Which revision is best?",
      choices: [
        { text: "Before the show, I was a bundle of nerves.", correct: true },
        { text: "Before the show, I was as cool as a cucumber." },
        { text: "Before the show, I was on top of the world." },
        { text: "Before the show, I was under the weather." }
      ],
      clue: "Read sentence 4 to see how Andre felt. Then think about what each saying really means.",
      why: "The answer is \"Before the show, I was a bundle of nerves.\" That idiom means very nervous, which matches his shaking hands. Cool as a cucumber means calm, on top of the world means very happy, and under the weather means sick." },
    { id: "SK-SS2b-T3", type: "ms", points: 2, dok: 2, passages: ["p2"], pick: 2,
      prompt: "Andre wants to replace sentence 10 with a comparison that shows how loud the clapping was. Which TWO sentences would work?",
      choices: [
        { text: "The clapping was a roaring thunderstorm.", correct: true },
        { text: "The clapping was as loud as fireworks.", correct: true },
        { text: "The clapping was as quiet as a feather." },
        { text: "The clapping was like a soft spring breeze." },
        { text: "The clapping went on for a long time." }
      ],
      clue: "Each answer must compare the clapping to something else, and that something must be loud.",
      why: "The answers are \"The clapping was a roaring thunderstorm\" and \"The clapping was as loud as fireworks.\" Both compare the clapping to something loud. A feather and a soft breeze are quiet, and \"went on for a long time\" does not compare anything." },
    { id: "SK-SS2b-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Andre wants to add this sentence: \"The stage lights were as bright as the summer sun.\" Where is the best place to add it?",
      choices: [
        { text: "after sentence 5", correct: true },
        { text: "after sentence 2" },
        { text: "after sentence 9" },
        { text: "after sentence 12" }
      ],
      clue: "The new sentence is about the stage lights. Find where Andre is on the stage, and look for a sentence that the bright lights would help explain.",
      why: "The answer is after sentence 5. Andre walks onto the stage in sentence 5, and in sentence 6 he can hardly see the crowd. Bright lights explain why. In sentences 2, 9 and 12 he is not walking onto the stage." },
    { id: "SK-SS2b-T5", type: "dropdown", points: 1, dok: 1, passages: ["p2"],
      prompt: "Andre wants to revise sentence 11 with a simile that shows how proud he felt. Choose the simile that fits best.",
      text: "I felt {0}.",
      slots: [{ options: ["as proud as a peacock", "as busy as a bee", "as quiet as a mouse"], answer: 0 }],
      clue: "Andre wants to show one feeling. Which simile names that feeling?",
      why: "The answer is as proud as a peacock. A peacock spreads its bright feathers as if it is showing off, so this simile means very proud. Busy and quiet do not match how Andre felt." }
  ]
});
