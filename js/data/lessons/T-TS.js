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
      { term: "step", means: "one thing you do, in order, to finish a job" },
      { term: "time words", means: "clue words like first, next, then and finally that show order" }
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
      show: ["First, Sam got a bowl. Next, he poured in the cereal. Then he added milk. Finally, he ate it all up!"],
      ask: "What did Sam do first? What did he do last?",
      steps: [
        "Find the clue words: First, Next, Then, Finally.",
        "Ask: What happened first? Next? Last?",
        "First points to the start. Finally points to the end."
      ],
      answer: "First, Sam got a bowl. Last, he ate the cereal."
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
      why: "The answer is \"Let the cream sit out so it is not ice cold.\" Paragraph 2 starts that step with the clue word First. Pouring the cream comes next, then the lid, and shaking comes after that." },
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
        "Spread the butter on toast."
      ],
      clue: "Use the time clue words in the passage. Ask: Which one has to happen first? What comes after it?",
      why: "The order is: pour the cream into the jar, shake until it turns into whipped cream, hear a thump when the lump forms, pour off the buttermilk, and spread the butter on toast. The time clue words in the passage show this order." },
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
        { text: "Later", correct: true },
        { text: "After that", correct: true },
        { text: "A yellow lump" },
        { text: "The liquid" },
        { text: "Rinse the butter" }
      ],
      clue: "Time clue words tell WHEN something happens. Look at the words that start each sentence.",
      why: "The answers are Later and After that. They tell when each step happens. \"A yellow lump\" and \"The liquid\" name things, and \"Rinse the butter\" is a step, not a time word." }
  ],
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
    { id: "p4", title: "The Town at the End of the Line", genre: "Informational text",
      paragraphs: [
        ["In the 1830s, Georgia leaders wanted a faster way to carry cotton and other goods to states in the north.", "Wagons on bumpy dirt roads were slow, and they could carry only small loads.", "So the state decided to build a railroad."],
        ["Workers chose a spot in the forest where the new tracks would end.", "In 1837, they marked the spot with a post."],
        ["Many workers came to build the railroad, and they needed places to sleep and eat.", "As a result, people built cabins and small stores near the post.", "The little town was called Terminus, a word that means \"the end of the line.\""],
        ["Soon, other railroads were built to meet the first one there.", "Because trains now came from many directions, the town became a busy place to buy and sell goods.", "The stores and the train station needed more workers, so more families moved to town."],
        ["As the town grew, its name changed, too.", "By 1847, it was called Atlanta.", "Today, Atlanta is the biggest city in Georgia, and trains still rumble through it."]
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
        ["Every summer, families swim and fish in Clear Lake.", "But one August, the water turned bright green, and it smelled bad."],
        ["Scientists tested the water.", "They found that fertilizer from nearby lawns and farms had washed into the lake during heavy rains.", "Fertilizer helps plants grow, and it helped tiny green living things called algae grow, too."],
        ["Soon there was so much algae that the water looked like pea soup.", "As the algae died and rotted, it used up much of the air in the water, so some fish could not breathe."],
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
      clue: "Read paragraph 2. Find the clue words \"as a result\" and read the effect that comes after them.",
      why: "The answer is \"They tighten and relax very fast.\" Paragraph 2 says that as a result of the cold message, your brain tells your muscles to tighten and relax very fast, over and over." },
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
    { id: "SK-TSCE-P5", type: "mc", points: 1, dok: 2, passages: ["p1"],
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
      prompt: "Read paragraphs 2 and 3. Which THREE words or phrases are clue words that show a cause and an effect?",
      pick: 3,
      choices: [
        { text: "As a result", correct: true },
        { text: "That is why", correct: true },
        { text: "Since", correct: true },
        { text: "over and over" },
        { text: "very fast" },
        { text: "too" }
      ],
      clue: "Cause-and-effect clue words link WHY something happens to WHAT happens. Try each choice: does it join a cause to an effect?",
      why: "The answers are As a result, That is why and Since. Each one links a cause to an effect. \"Over and over\" and \"very fast\" tell how the muscles move, and \"too\" just adds on." }
  ],
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
      "The problem is what is wrong. Look for the word problem or for something that keeps going wrong.",
      "The tries are what someone does to fix it. Some tries do not work. The word but often comes right after a try. It tells you the try did not work. But can also show a difference, so check what comes just before it.",
      "Failed tries matter. They help show what the REAL problem was.",
      "The solution is what finally fixes it. Clue words like decided, solved and finally point to it.",
      "You see this in stories and in true texts, too. A town with too much litter might add recycling bins."
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
      ask: "Why didn't more signs work? Who helped find the real problem? Would a bigger sign have worked?",
      steps: [
        "Find the problem and the try. The shelves run out of peanut butter. The workers hang more signs, but people still bring soup.",
        "Ask why the try failed. The signs never said which foods were needed. That was the real problem, and the volunteer is the one who found it.",
        "Test a new plan against the real problem. A bigger sign would help only if it said which foods were needed.",
        "Notice the order. This true text goes problem, try, the real problem, solution and result, just like a story."
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
       item, p5 set 3); p6 and p7 only by the similar bank. Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "The Wobbly Table", genre: "Literary text",
      paragraphs: [
        ["Every night at dinner, Grandma's kitchen table wobbled.", "When anyone leaned on it, soup sloshed out of the bowls."],
        ["First, Niko tried folding a napkin and pushing it under one leg.", "But the next night, the table wobbled again, and the napkin lay flat on the floor."],
        ["Then Grandma tried pulling the table closer to the wall, where the floor was smooth.", "But it wobbled there, too."],
        ["After dinner, Niko lay on his back and looked up under the table.", "He gave each leg a little shake.", "Three legs stayed still, but the fourth leg wiggled back and forth.", "A screw at the top of that leg was loose."],
        ["Grandma found her screwdriver, and Niko turned the screw until it was tight."],
        ["The next night, Niko leaned both elbows on the table.", "Nothing moved, and not one drop of soup spilled."]
      ] },
    { id: "p4", title: "The Tangled Ropes", genre: "Literary text",
      paragraphs: [
        ["The Maple Street Jumpers had a big problem.", "In two weeks, they would jump Double Dutch at the town fair.", "But every time Amari jumped in, the two ropes tangled and slapped her ankles."],
        ["First, the team tried a brand-new pair of ropes.", "But the new ropes tangled just like the old ones."],
        ["Next, the two turners, Imani and Kiara, tried standing farther apart.", "That gave Amari more room, but the ropes still crossed and caught her feet."],
        ["Coach Bell sat on the bench and watched the turners closely.", "Imani's hands swung fast, but Kiara's swung slowly.", "\"Your jumping is fine, Amari,\" Coach Bell said.", "\"The ropes are not keeping the same beat.\""],
        ["The girls decided to chant a jump-rope rhyme while they turned.", "Each word of the rhyme told the turners when to swing, so their hands kept the same beat."],
        ["At the fair, the ropes spun in a smooth, even pattern.", "Amari hopped in and jumped fifty times without one tangle.", "The problem was finally solved!"]
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
        ["Next, she packed it in a hard plastic box.", "The bread was still mushy."],
        ["Her big brother, Jonah, watched her make lunch the next morning.", "\"You put the tomato slices right on the bread,\" he said.", "\"Tomatoes are juicy, and the juice soaks in all morning.\""],
        ["So Kayla packed the tomatoes in a little cup and added them at lunch.", "That day, her sandwich was soft but not soggy, and she ate every bite."]
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
    { id: "SK-TSPS-P5", type: "mc", points: 1, dok: 3, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.1.b"],
      prompt: "Why didn't moving the bowl solve the problem?",
      choices: [
        { text: "The ants followed the smell of the food.", correct: true },
        { text: "Pepper pushed the bowl back to its spot." },
        { text: "The bowl was too heavy for Jamal to lift." },
        { text: "Grandma wanted the bowl to stay in place." }
      ],
      clue: "Read the sentence that starts with But in paragraph 4. It tells what happened after this try and how it happened.",
      why: "The answer is \"The ants followed the smell of the food.\" Paragraph 4 says the ants followed the smell and found the bowl again. Moving the bowl did not stop the smell, so the ants kept coming." },
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
     Fifteen items in three sets of five. { ref } reuses Try items P4, P5 and P6 by id (they stay in
     practice; the engine leaves them out of Together, so Together shows P1-P3). New ids are numbered
     by their place in the fifteen. Hints and Show me how for refs and Together items are in addons.
     Author log: docs/expansion-2026-10-22/batches/B1-b1b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TSPS-P4" },
      { ref: "SK-TSPS-P5" },
      { id: "SK-TSPS-C03", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p1"],
        prompt: "How is the pan of water different from Jamal's first two tries?",
        choices: [
          { text: "It stops the ants from reaching the food at all.", correct: true },
          { text: "It gets rid of the ants that are already on the floor." },
          { text: "It puts the food bowl in a new spot in the kitchen." },
          { text: "It is a plan that Jamal thinks of all by himself." }
        ],
        clue: "To compare tries, ask what each one changes. A solution works when it keeps the problem from coming back.",
        hints: [
          "To compare tries, ask what each one changes. A solution works when it keeps the problem from coming back.",
          "Reread paragraphs 3 and 4 for what each try does and what happens next. Then read paragraph 7 to see what the ants do at the pan.",
          "Grandma gives the idea for the moat in paragraph 5, so it is not a plan Jamal thinks of alone. Test each choice that is left against all three tries."
        ],
        how: [
          "Wiping took away the ants on the floor. A new line of ants came back the next morning.",
          "Moving the bowl put the food in a new spot. The ants found it again.",
          "The pan of water is different: the ants march up to it and cannot get across. The answer is \"It stops the ants from reaching the food at all.\"",
          "Getting rid of the ants on the floor and moving the bowl are what the failed tries did, and the moat was Grandma's idea."
        ],
        misconception: "A common mix-up is choosing what one of the failed tries did. A solution is different because it stops the problem from coming back.",
        why: "The answer is \"It stops the ants from reaching the food at all.\" Wiping the ants away and moving the bowl did not keep new ants from getting to the food, but the ants cannot get across the water. Grandma, not Jamal alone, thought of the moat." },
      { ref: "SK-TSPS-P6" },
      { id: "SK-TSPS-C05", type: "hottext", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p3"],
        prompt: "Which sentence tells the real reason the table wobbles? Choose the sentence in the passage.",
        targets: ["p3:1:2", "p3:2:2", "p3:3:1", "p3:4:2", "p3:4:4", "p3:5:1"],
        answer: ["p3:4:4"], pick: 1,
        clue: "Failed tries help show the real problem. The real reason is what makes something go wrong, not what happens because of it.",
        hints: [
          "Failed tries help show the real problem. The real reason is what makes something go wrong, not what happens because of it.",
          "Each try in paragraphs 2 and 3 fixes something that turns out not to be the trouble. Read on to find out what Niko learns about the table itself.",
          "The napkin lying flat tells why the first try failed. It is not why the table wobbles. Test each other sentence: if that were changed, would the wobble stop?"
        ],
        how: [
          "The tries in paragraphs 2 and 3 do not work. A napkin under one leg and a smooth floor do not stop the wobble, so a short leg or a bumpy floor is not the real trouble.",
          "In paragraph 4, Niko shakes each leg. One leg wiggles, and he finds out why.",
          "The answer is \"A screw at the top of that leg was loose.\" That is what makes the table wobble.",
          "Soup sloshing is what the wobble causes. Shaking the legs is how Niko finds the cause, and tightening the screw is the solution."
        ],
        misconception: "A common mix-up is choosing the sentence about why a try failed (the napkin lay flat) instead of the sentence that tells the real cause of the problem.",
        why: "The answer is \"A screw at the top of that leg was loose.\" The napkin and the move to the wall did not stop the wobble, because the trouble was a loose leg. Soup sloshing is what the wobble causes, shaking the legs is how Niko finds the cause, and tightening the screw is the solution." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TSPS-C06", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "Why does the author tell readers that the fair is only two weeks away?",
        choices: [
          { text: "to show that the team must solve the problem soon", correct: true },
          { text: "to show that the team has lots of time to practice" },
          { text: "to explain why the ropes keep slapping Amari's ankles" },
          { text: "to tell readers what else will happen at the fair" }
        ],
        clue: "A detail about time can make a story's trouble feel bigger. Ask what this detail adds.",
        hints: [
          "A detail about time can make a story's trouble feel bigger. Ask what this detail adds.",
          "Reread paragraph 1. Think about what the team has to do at the fair, and what keeps going wrong.",
          "The ropes slap Amari's ankles because they tangle, not because of the fair, so that choice does not explain this detail. Ask what the fair being close means for the team."
        ],
        how: [
          "Paragraph 1 says the team will jump Double Dutch at the town fair in two weeks.",
          "Every time Amari jumps in, the ropes tangle. If the team cannot fix that soon, it will happen at the fair, too.",
          "The answer is \"to show that the team must solve the problem soon.\" The date makes the problem matter.",
          "Two weeks is not lots of time, the fair does not cause the tangles, and the story never tells what else happens at the fair."
        ],
        misconception: "A common mix-up is treating a time or place detail as background only. Here it tells why the problem must be solved.",
        why: "The answer is \"to show that the team must solve the problem soon.\" The team will jump at the fair in two weeks, and the ropes tangle every time, so the problem has to be fixed fast. Two weeks is not lots of time, the fair does not cause the tangles, and the story never tells what else happens there." },
      { id: "SK-TSPS-C07", type: "match", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "Sort the story's events into the parts of a problem-and-solution map. Match each event to its part.",
        cols: ["the problem", "a try that did not work", "the solution"],
        rows: [
          { text: "The ropes tangle every time Amari jumps in.", answer: 0 },
          { text: "The team gets a brand-new pair of ropes.", answer: 1 },
          { text: "Imani and Kiara stand farther apart.", answer: 1 },
          { text: "The turners chant a rhyme as they swing.", answer: 2 }
        ],
        clue: "A problem-and-solution map has three parts: what is wrong, the tries, and what finally fixes it.",
        hints: [
          "A problem-and-solution map has three parts: what is wrong, the tries, and what finally fixes it.",
          "For each event, find where it happens in the story. Then read the sentence right after it to see how things turned out.",
          "The ropes tangling is what goes wrong in paragraph 1, so it is the problem. Sort the other three events by asking: did the ropes still tangle after it?"
        ],
        how: [
          "The problem: the ropes tangle every time Amari jumps in (paragraph 1).",
          "Tries that did not work: new ropes (paragraph 2) and standing farther apart (paragraph 3). After each one, the clue word but shows the ropes still tangled.",
          "The solution: the turners chant a rhyme as they swing (paragraph 5). After that, the ropes stop tangling."
        ],
        misconception: "A common mix-up is calling every try a solution. A try is the solution only if it fixes the problem.",
        why: "The problem is that the ropes tangle every time Amari jumps in. New ropes and standing farther apart are tries that did not work, because the ropes still tangled. The solution is chanting a rhyme while they swing, because after that the ropes stop tangling." },
      { id: "SK-TSPS-C08", type: "ebsr", points: 2, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "What is really causing the ropes to tangle?",
          choices: [
            { text: "The turners swing their hands at different speeds.", correct: true },
            { text: "The old ropes are too worn out to turn smoothly." },
            { text: "The turners stand too close to each other." },
            { text: "Amari jumps in at the wrong moment." }
          ] },
        partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
          choices: [
            { text: "\"Imani's hands swung fast, but Kiara's swung slowly.\"", correct: true },
            { text: "\"But the new ropes tangled just like the old ones.\"" },
            { text: "\"That gave Amari more room, but the ropes still crossed and caught her feet.\"" },
            { text: "\"Your jumping is fine, Amari,\" Coach Bell said." }
          ] },
        clue: "Failed tries help show the real problem. When a try does not work, the thing it changed was not the real trouble.",
        hints: [
          "Failed tries help show the real problem. When a try does not work, the thing it changed was not the real trouble.",
          "Look at what each try in paragraphs 2 and 3 changes and how it turns out. Then read what Coach Bell notices in paragraph 4.",
          "The new ropes tangled just like the old ones, so worn-out ropes are not the cause. For Part B, choose the sentence that shows the cause, not one that shows a try failing."
        ],
        how: [
          "New ropes still tangle, so the ropes are not the trouble. Standing farther apart does not help either, so space is not the trouble.",
          "Coach Bell says Amari's jumping is fine. Then she points out what she has been watching: Imani's hands swing fast, and Kiara's swing slowly.",
          "Part A: The turners swing their hands at different speeds. Part B: \"Imani's hands swung fast, but Kiara's swung slowly.\"",
          "\"Your jumping is fine\" rules out Amari, but it does not show the cause. The other two sentences show tries that failed."
        ],
        misconception: "A common mix-up is picking a sentence that shows a try failing. A failed try tells you what the problem is not; look for the sentence that tells what it is.",
        why: "Part A: The turners swing their hands at different speeds. Part B: \"Imani's hands swung fast, but Kiara's swung slowly.\" New ropes and more space did not help, and Coach Bell says Amari's jumping is fine. What she watches shows the turners swinging at different speeds, so the ropes do not keep the same beat." },
      { id: "SK-TSPS-C09", type: "hottext", points: 2, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "Which TWO sentences show that the chant solved the problem? Choose two sentences in the passage.",
        targets: ["p4:1:2", "p4:3:2", "p4:4:3", "p4:5:1", "p4:6:1", "p4:6:2"],
        answer: ["p4:6:1", "p4:6:2"], pick: 2,
        clue: "To show a solution worked, look for what happens after it. The problem should stop happening.",
        hints: [
          "To show a solution worked, look for what happens after it. The problem should stop happening.",
          "Look at the part of the story after the girls decide what to do.",
          "More room in paragraph 3 helped a little, but the ropes still crossed, so that sentence does not show a solution working. Check each other sentence against the question."
        ],
        how: [
          "The girls decide to chant a rhyme in paragraph 5. That is the solution, not proof that it worked.",
          "At the fair, the ropes spin in a smooth, even pattern, and Amari jumps fifty times without a tangle.",
          "The answers are \"At the fair, the ropes spun in a smooth, even pattern.\" and \"Amari hopped in and jumped fifty times without one tangle.\"",
          "More room in paragraph 3 did not stop the tangles, and the fair date and Coach Bell's words come before the solution."
        ],
        misconception: "A common mix-up is choosing the sentence that tells the solution. Proof that it worked comes after, when the problem stops.",
        why: "The answers are \"At the fair, the ropes spun in a smooth, even pattern.\" and \"Amari hopped in and jumped fifty times without one tangle.\" Both happen after the chant and show the tangles have stopped. Deciding to chant is the plan itself, more room did not stop the tangles, and the other sentences come before the solution." },
      { id: "SK-TSPS-C10", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p4"],
        prompt: "How does Coach Bell help the team solve the problem?",
        choices: [
          { text: "She figures out what is really going wrong before anyone tries again.", correct: true },
          { text: "She buys the team a brand-new pair of ropes to use at the fair." },
          { text: "She tells Imani and Kiara to stand much farther apart." },
          { text: "She shows Amari a better way to jump into the ropes." }
        ],
        clue: "Characters help solve a problem in different ways. Ask what this character does that changes what happens next.",
        hints: [
          "Characters help solve a problem in different ways. Ask what this character does that changes what happens next.",
          "Reread paragraph 4. What does Coach Bell do while she sits on the bench, and what does she tell the team?",
          "The team tried the new ropes in paragraph 2, on its own. Test the other choices against paragraph 4."
        ],
        how: [
          "In paragraph 4, Coach Bell sits and watches the turners closely before anyone changes anything else.",
          "She tells Amari her jumping is fine, and she tells the team what is really wrong with the ropes.",
          "The answer is \"She figures out what is really going wrong before anyone tries again.\" After she speaks, the girls decide on a new plan.",
          "The team tried the new ropes and more space on its own, and Coach Bell says Amari's jumping is fine."
        ],
        misconception: "A common mix-up is thinking the helper must do the fixing. Here the helper finds the real problem, and the team fixes it.",
        why: "The answer is \"She figures out what is really going wrong before anyone tries again.\" Coach Bell watches and then tells the team what is really wrong, which leads to the chant. The team tried the new ropes and more space on its own, and she says Amari's jumping is fine." }
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
          "Reread what the scientist explains in paragraph 3. Choose two.",
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
      { id: "SK-TSPS-C12", type: "order", points: 1, dok: 2, std: ["3.T.SS.1.a"], passages: ["p5"],
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
          { text: "Two different tries fail before the solution.", answer: 0 },
          { text: "The first try does not fix the real cause.", answer: 2 },
          { text: "Someone who watches or knows more finds the real cause.", answer: 2 },
          { text: "The problem happens at a school.", answer: 1 }
        ],
        clue: "To compare two texts, check each sentence against one text, then the other. It is true for both only if it fits both.",
        hints: [
          "To compare two texts, check each sentence against one text, then the other. It is true for both only if it fits both.",
          "In each text, reread the tries and the part that explains what is really wrong.",
          "In \"Dots on the Glass,\" the students make only one try before the solution, so the sentence about two tries does not fit both. Sort the other sentences the same way."
        ],
        how: [
          "The Tangled Ropes has two tries that fail, new ropes and more space. Dots on the Glass has only one, the hawk sticker. So two tries fit only The Tangled Ropes.",
          "In both texts, the first try changes something, but the problem keeps happening, so it does not fix the real cause.",
          "Coach Bell watches the turners, and a scientist explains what birds see. In both texts, someone who watches or knows more finds the real cause.",
          "Only Dots on the Glass happens at a school, in the library at Hillcrest Elementary. The jump-rope team is getting ready for a town fair."
        ],
        misconception: "A common mix-up is calling a sentence true for both when it fits only one text. Check it against each text on its own.",
        why: "Two tries fail only in The Tangled Ropes. In both texts, the first try does not fix the real cause, and someone who watches or knows more finds it: Coach Bell and the scientist. Only Dots on the Glass happens at a school." },
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
          "Read the last two sentences. Who is making the mess, and how? Choose two.",
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
          { text: "The custodian chose blue paint because it was the class's favorite color." },
          { text: "The squeaking was loudest at recess, when many children played." },
          { text: "Some children said that they liked the bright new color very much." }
        ],
        clue: "In a problem-and-solution paragraph, each sentence has a job. After a try fails, the writer often explains why, so the solution makes sense.",
        hints: [
          "In a problem-and-solution paragraph, each sentence has a job. After a try fails, the writer often explains why, so the solution makes sense.",
          "Read sentences 3 and 5. What does a reader need to know to understand why the custodian changed the plan?",
          "The sentence about when the squeaking is loudest stays on the topic, but it does not explain the change of plan. Ask what sentence 5 needs to come just before it."
        ],
        how: [
          "Sentence 3 says the paint did not stop the squeaking. Sentence 5 says the custodian oiled the chains.",
          "The missing sentence should explain why the first try failed and point to the real problem, the chains.",
          "The answer is \"The paint made the swings look new, but the noise came from the dry chains.\"",
          "The other sentences tell about paint colors or when the noise is loudest, but none explains why the custodian turned to the chains."
        ],
        misconception: "A common mix-up is choosing a sentence that stays on the topic but does not do the job the paragraph needs.",
        why: "The answer is \"The paint made the swings look new, but the noise came from the dry chains.\" It explains why painting failed and leads to the solution, oiling the chains. The other sentences are about paint colors or when the noise is loudest, so they do not connect the failed try to the new plan." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new text. `like` lists only the core items
     each one really practises (same component and task). */
  similar: [
    { id: "SK-TSPS-S01", type: "mc", points: 1, dok: 2, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: ["p6"],
      like: ["SK-TSPS-P5", "SK-TSPS-C05", "SK-TSPS-C11"],
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
        "Reread paragraphs 1 and 3. Where were the plants, and what does Mr. Hale notice about the stems?",
        "Nothing in the story says the cups were too small. Test the other choices against what Mr. Hale notices."
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
      like: ["SK-TSPS-C08", "SK-TSPS-C05"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What was really making Kayla's sandwich soggy?",
        choices: [
          { text: "Juice from the tomatoes soaked into the bread.", correct: true },
          { text: "The plastic wrap was not tight enough." },
          { text: "The lunch box was not hard enough." },
          { text: "Kayla waited too long to eat her lunch." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Tomatoes are juicy, and the juice soaks in all morning.\"", correct: true },
          { text: "\"But at lunch, it was soggy again.\"" },
          { text: "\"The bread was still mushy.\"" },
          { text: "\"Her big brother, Jonah, watched her make lunch the next morning.\"" }
        ] },
      clue: "Failed tries help show the real problem. If a try does not work, the thing it changed was not the cause.",
      hints: [
        "Failed tries help show the real problem. If a try does not work, the thing it changed was not the cause.",
        "Look at what Kayla changes in paragraphs 2 and 3. Then read what Jonah notices in paragraph 4.",
        "Wrapping the sandwich tighter did not help, so loose plastic is not the cause. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "Tighter plastic and a hard box did not stop the soggy bread, so the wrapping was not the trouble.",
        "Jonah sees the tomato slices sitting right on the bread and says the juice soaks in all morning.",
        "Part A: Juice from the tomatoes soaked into the bread. Part B: \"Tomatoes are juicy, and the juice soaks in all morning.\"",
        "The other sentences show the tries failing or tell when Jonah watched, but they do not tell the cause."
      ],
      why: "Part A: Juice from the tomatoes soaked into the bread. Part B: \"Tomatoes are juicy, and the juice soaks in all morning.\" Tighter wrap and a hard box did not help. Jonah sees that the tomatoes sit on the bread, and once they are packed apart, the sandwich is not soggy." },
    { id: "SK-TSPS-S03", type: "mc", points: 1, dok: 3, std: ["3.T.SS.1.a", "3.T.T.1.b"], passages: [],
      like: ["SK-TSPS-C14", "SK-TSPS-C15"],
      stem: ["Every time it rained, a puddle formed on the floor just inside the school's front door.", "First, the custodian put down a bigger mat, but the puddle still spread across the floor.", "Next, she mopped every hour, but the puddle came back each time.", "Then she looked up.", "Rain was dripping through a small crack in the ceiling, right above the door."],
      prompt: "Read the story in the box. Which plan would most likely solve the real problem?",
      choices: [
        { text: "Fix the crack in the ceiling above the door.", correct: true },
        { text: "Put down two big mats instead of one." },
        { text: "Mop the floor every few minutes." },
        { text: "Hang a sign that says, \"Watch your step!\"" }
      ],
      clue: "A good plan fixes the real problem, not only what the problem causes.",
      hints: [
        "A good plan fixes the real problem, not only what the problem causes.",
        "Read the last sentence. Where is the water coming from?",
        "A sign could warn people, but it would not stop any water. Test the other plans: would each one stop the puddle from forming?"
      ],
      how: [
        "A bigger mat and more mopping did not stop the puddle. They only dealt with the water after it fell.",
        "The custodian finds rain dripping through a crack in the ceiling. That is the real problem.",
        "The answer is \"Fix the crack in the ceiling above the door.\"",
        "More mats and more mopping repeat tries that failed, and a sign does not stop the water."
      ],
      misconception: "A common mix-up is choosing a bigger version of a try that already failed.",
      why: "The answer is \"Fix the crack in the ceiling above the door.\" The rain drips through the crack, so fixing it stops the puddle. More mats and more mopping already failed, and a sign does not stop the water." }
  ],
  /* Hints and Show me how for items kept in practice: refs P4-P6 (core set 1) and Together P1-P3. */
  addons: {
    "SK-TSPS-P1": {
      hints: [
        "The problem is what is wrong. Look for the word problem, or for something that keeps going wrong.",
        "Read paragraph 1. What happens every morning?",
        "Grandma helps Jamal later, in paragraph 5, so that choice is not the problem. Test each choice that is left against paragraph 1."
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
        "Read paragraphs 6 and 7.",
        "Wiping the ants away was the first try, and the ants came back. Test each other choice: did it keep the ants away for good?"
      ],
      how: [
        "In paragraph 6, Jamal and Grandma decided to set the bowl in a wide, shallow pan with water all around it.",
        "In paragraph 7, the ants could not get across, and the problem was finally solved.",
        "The answer is \"a pan of water all around the food bowl.\"",
        "Moving the bowl and wiping the ants were tries that did not work, and Pepper never chases the ants."
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
        "To find why a try failed, look at what happens right after the try.",
        "Reread paragraph 4. Read the sentence that comes right after the try.",
        "Pepper only sits and stares at the ants in paragraph 2, so she does not move the bowl. Test each choice that is left against the sentence right after the try."
      ],
      how: [
        "Jamal's try in paragraph 4 is moving the bowl to the other side of the kitchen.",
        "The next sentence says the ants followed the smell of the food and found it again.",
        "The answer is \"The ants followed the smell of the food.\" Moving the bowl did not take away the smell, so the ants kept coming.",
        "Nothing in the story says Pepper moved the bowl, that it was too heavy, or that Grandma wanted it to stay."
      ],
      misconception: "A common mix-up is picking a reason that sounds possible but is not in the story. The reason a try fails is told right after the try." },
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
      "The author picks two things, often things people mix up, and goes back and forth between them.",
      "Clue words like both, alike and same tell you the things are alike.",
      "Clue words like but, however, unlike, different and while tell you the things are different.",
      "Watch for a clue word that switches from alike to different, like however.",
      "Authors often compare to help you tell two things apart."
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
      show: ["Cats and dogs are both pets. Both have fur. But a cat says meow, and a dog says woof."],
      ask: "How are cats and dogs the same? How are they different?",
      steps: [
        "Find the clue word both. It tells how they are the same.",
        "Find the clue word but. Here it tells how they are different.",
        "Read what comes after each clue word."
      ],
      answer: "They are the same because both are pets and both have fur. They are different because a cat says meow and a dog says woof."
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
      ] }
  ],
  practice: [
    { id: "SK-TSCC-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "How are frogs and toads alike?",
      choices: [
        { text: "Both hatch as tadpoles.", correct: true },
        { text: "Both have dry, bumpy skin." },
        { text: "Both have long back legs." },
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
        { text: "has long back legs for big jumps", answer: 0 }
      ],
      clue: "Use the clue words. Both and alike point to the middle column. Unlike and but point to a difference.",
      why: "Smooth, wet skin and long back legs for big jumps are frog facts. Dry, bumpy skin is a toad fact. Laying eggs is true of both animals." },
    { id: "SK-TSCC-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read the sentence from paragraph 3 in the box. What does the word \"but\" show here?",
      stem: ["Most frogs have long back legs for big jumps, but toads have shorter legs."],
      choices: [
        { text: "how frogs and toads are different", correct: true },
        { text: "a try that did not work out" },
        { text: "what happened first and next" },
        { text: "an example of a kind of insect" }
      ],
      clue: "The word but has more than one job. Read the words on each side of it. Are they about two animals, or about a plan that failed?",
      why: "The answer is \"how frogs and toads are different.\" The sentence tells about frogs' legs, then but, then toads' legs. In compare and contrast, but shows a difference. In problem and solution, but shows a try that failed." },
    { id: "SK-TSCC-P5", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Choose the clue word that best completes the sentence.",
      text: "{0} most frogs, many toads live far from ponds.",
      slots: [
        { options: ["Unlike", "Because", "Finally"], answer: 0 }
      ],
      clue: "This sentence tells how two animals live in different places. Pick the clue word that shows a difference.",
      why: "The answer is Unlike. Unlike most frogs, many toads live far from ponds. Unlike is a contrast clue word. Because tells why, and finally tells order." },
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
      "Science and social studies books use this structure a lot."
    ],
    words: [
      { term: "topic", means: "who or what the text is about" },
      { term: "detail", means: "one fact that tells more about the topic" },
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
      show: ["A zebra looks like a horse with stripes. It has black and white stripes all over. It also has a short mane that sticks straight up. Zebras eat grass."],
      ask: "What is this mostly about?",
      steps: [
        "Find the clue words: looks like, has, also.",
        "List the details: stripes, a short mane, eats grass.",
        "Ask: What do all the details tell about? They all tell about zebras."
      ],
      answer: "It is mostly about what zebras are like."
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
      ] }
  ],
  practice: [
    { id: "SK-TSDESC-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "What does a pelican's pouch look like?",
      choices: [
        { text: "a big bag", correct: true },
        { text: "a sharp beak" },
        { text: "a tiny feather" },
        { text: "a thick shell" }
      ],
      clue: "Find the clue words \"looks like\" in paragraph 2. Read what comes right after them.",
      why: "The answer is \"a big bag.\" Paragraph 2 says the pouch looks like a big bag. Looks like is a describing clue word." },
    { id: "SK-TSDESC-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence uses a clue word to give an EXAMPLE? Choose the sentence in the passage.",
      targets: ["p1:2:3", "p1:3:1", "p1:5:1", "p1:5:2", "p1:5:3"],
      answer: ["p1:5:3"], pick: 1,
      clue: "Describing clue words have different jobs. Some add a detail, and some show what something is like. Look for the clue word whose job is to give an example.",
      why: "The answer is \"For example, a pelican can paddle across the water just like a duck.\" The clue words For example show an example of how the pelican uses its feet. Also and In addition add details, and looks like tells what something is like." },
    { id: "SK-TSDESC-P3", type: "mc", points: 1, dok: 2, passages: ["p1"], std: ["3.T.SS.1.a", "3.T.T.2.a"],
      prompt: "What is this passage mostly about?",
      choices: [
        { text: "how a brown pelican's body helps it catch fish", correct: true },
        { text: "how a pelican's feet work like paddles" },
        { text: "why Georgia's coast is a fun place to visit" },
        { text: "how pelicans build nests for their eggs" }
      ],
      clue: "Ask: What is this mostly about? Pick the answer that fits every paragraph, not just one sentence.",
      why: "The answer is \"how a brown pelican's body helps it catch fish.\" Paragraph 1 says its whole body is built for catching fish, and the bill, the pouch and the sharp eyes tell more about this. The feet are only one detail, and the passage never talks about nests." },
    { id: "SK-TSDESC-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does a pelican tip its bill down after it scoops up a fish?",
      choices: [
        { text: "to drain out the water before it swallows", correct: true },
        { text: "to dive deeper into the sea for more" },
        { text: "to show other pelicans where to look" },
        { text: "to dry its feathers in the warm sun" }
      ],
      clue: "Read paragraph 4. Find the sentence that tells what the pelican does with its bill and what that is for.",
      why: "The answer is \"to drain out the water before it swallows.\" Paragraph 4 says the pelican tips its bill down to drain out the water before it swallows the fish." },
    { id: "SK-TSDESC-P5", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
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
        { text: "You can see it on Georgia's coast." },
        { text: "Its feet work like paddles." },
        { text: "The brown pelican is a large bird." }
      ],
      clue: "Each choice is a detail. Ask about each one: Does this tell how the bird gets its food, or something else about it?",
      why: "The answers are \"It folds its wings and dives headfirst into the sea.\" and \"It scoops up water and fish at the same time.\" Diving and scooping are how the pelican gets fish. The other details tell where it lives, how it swims and how big it is." }
  ],
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
