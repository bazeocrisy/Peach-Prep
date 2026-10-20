/* Lessons: 3.T.T.2 Expository techniques. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.T.T.2.a",
  title: "Main idea and key details",
  clues: {
    words: ["for example", "such as", "also", "in addition", "has", "looks like"],
    ask: "What is this mostly about?",
    draw: "A web: the topic in a circle in the middle, with a line out to each detail."
  },
  coach: {
    mixup: "Main idea versus detail. A detail is one fact. The main idea is what all the details have in common. Test it: \"Does every paragraph tell more about this?\"",
    strong: "\"It's mostly about how a camel's body helps it live in the desert: its wide feet, its long eyelashes and going a long time without water.\"",
    notyet: "Picking one fun fact as the main idea: \"Camels have long eyelashes.\" Ask: \"Is the WHOLE thing about that, or just one sentence?\"",
    ido: "Describe your home with three details, then say: \"My main idea is our home is small but cozy. Every detail I gave tells more about that.\"",
    wedo: "Read a short nonfiction paragraph together. Underline each detail and its clue word, like also or for example, and ask, \"What do all these tell us about the topic?\"",
    youdo: "Your child picks a topic they know well, like a favorite animal or game, and gives you the main idea plus three details.",
    everyday: "Play \"Main Idea\": your child describes something with three clues and you guess what it is. Then switch."
  },
  teach: {
    big: "The main idea is what a whole text is mostly about, and the key details are the facts that prove it.",
    points: [
      "The topic is what the text is about in a word or two, like \"sharks.\" The main idea tells something important about the topic, like \"Sharks have lived on Earth for a very long time.\"",
      "Look at the title, the first paragraph and the last paragraph. Authors often put the main idea there on purpose, so readers can find it.",
      "Key details are facts that explain or prove the main idea. Clue words like for example, such as, also, in addition, has and looks like often point to a detail. Ask, \"Does this fact help show the main idea?\"",
      "Some details are fun to read but are not key details. If a fact does not tell more about the main idea, it is not a key detail.",
      "Check your main idea. It should fit the whole text, not just one paragraph.",
      "Authors also design an article to help you find and understand the facts. A heading names a section. A text box sets apart an extra fact. A photo or drawing has a caption that tells what it shows. A diagram uses labels to name the parts. Ask, \"What does this part of the page help me understand?\""
    ],
    words: [
      { term: "topic", means: "what a text is about, in a word or two" },
      { term: "main idea", means: "the most important point the author makes about the topic" },
      { term: "key detail", means: "a fact that helps prove or explain the main idea" },
      { term: "diagram", means: "a drawing with labels that name its parts" }
    ],
    examples: [
      {
        label: "Example: main idea and key details",
        lines: ["A camel's body is built for life in the desert. Its wide, flat feet help it walk on soft sand without sinking. Long eyelashes help keep blowing sand out of its eyes. A camel can also go a long time without drinking water."],
        note: "Topic: camels. Main idea: a camel's body helps it live in the desert. Key details: wide feet for soft sand, long eyelashes against blowing sand, and going a long time without water. Each detail shows one way the body helps."
      },
      {
        label: "Example: a detail that is not a key detail",
        lines: ["Earthworms help gardens grow. As they tunnel through the dirt, they make spaces where air and water can reach plant roots. Worms also eat bits of dead leaves. What they leave behind makes the soil richer. Earthworms do not have any eyes."],
        note: "Main idea: earthworms help gardens grow. Tunnels for air and water and richer soil are key details, because they show how worms help. Having no eyes is a fun fact, but it does not show how worms help a garden, so it is not a key detail."
      }
    ],
    tip: "On the test, a main idea question may ask what a text is \"mostly about.\" A second part may ask which detail supports it. Pick a detail that proves the main idea, not just any true fact from the text. You may also be asked how a heading, caption or diagram helps the reader."
  },
  learn: [
    {
      show: ["Penguins cannot fly, but they are excellent swimmers. Their wings are shaped like flat flippers, and they use them to push through the water. Their smooth bodies slide easily through the waves. Their webbed feet help them steer."],
      ask: "What is the main idea, and what are two key details?",
      steps: [
        "Find the topic. Every sentence is about penguins.",
        "Ask what the author keeps saying about penguins. Most sentences tell how they move in the water.",
        "Find facts that prove it. The flipper wings push them, and their smooth bodies slide through the waves."
      ],
      answer: "The main idea is that penguins are excellent swimmers. Two key details are that their flipper wings push them through the water and their smooth bodies slide easily."
    },
    {
      show: ["Heading: Built for the Desert", "A camel's body is built for life in the desert. Its wide, flat feet help it walk on soft sand without sinking. Long eyelashes help keep blowing sand out of its eyes.", "Text box: Did You Know? A camel's hump stores fat, not water. Its body can use the fat when food is hard to find."],
      figure: { src: "assets/figures/tt2a-camel.svg", label: "Figure 1", caption: "Body parts that help a camel live in the desert",
        alt: "Diagram of a camel standing on sand. Labels point to its hump, its long eyelashes, and its wide, flat feet." },
      ask: "How do the heading, the diagram and the text box help the reader?",
      steps: [
        "Read the heading. It names what the section is about: how a camel is built for the desert.",
        "Read the caption under Figure 1. It tells what the whole diagram shows. Then follow each label's line. The feet and eyelashes labels point to the same key details the paragraph tells about, so now I can see them.",
        "Read the text box. It sets apart an extra fact about the hump. It is interesting, but the paragraph does not need it to make its point."
      ],
      answer: "The heading names the section. The caption tells what the diagram shows, and its labels let me see the key details from the paragraph. The text box adds an extra fact."
    },
    {
      show: ["A spider makes silk inside its body. Some spiders spin sticky webs to catch insects. Others use silk to wrap up their eggs and keep them safe. Baby spiders may even let out a long silk thread and float away on the wind."],
      ask: "No single sentence tells the main idea. What is it?",
      steps: [
        "List what each sentence is about: catching insects, wrapping eggs, floating on the wind.",
        "Find what all of them have in common. Each one is a way spiders use silk.",
        "Say the main idea in one sentence that covers every detail."
      ],
      answer: "Spiders use their silk in many different ways."
    }
  ],
  parent: "When you read a sign, a recipe card or a short news story together, ask, \"What is this mostly about?\" Then ask your child to point to two facts that prove it.",
  passages: [
    { id: "p1", title: "Teamwork in a Beehive", genre: "Informational text",
      paragraphs: [
        ["A honeybee hive can be home to thousands of bees.", "Inside, the bees are always busy.", "Each bee has a job, and by working together, the bees keep the whole hive alive."],
        ["Every hive has one queen.", "She is bigger than the other bees.", "Her job is to lay eggs, and she can lay hundreds of them in one day."],
        ["Most of the bees in a hive are worker bees.", "Worker bees are all female, and they do almost all of the work.", "Young workers stay inside the hive.", "They clean it, feed the baby bees, and build little wax rooms called cells."],
        ["Older workers fly outside to look for flowers.", "The workers gather a sweet liquid called nectar and a yellow powder called pollen.", "Back at the hive, the bees turn the nectar into honey.", "They store the honey in the wax cells so the hive has food in winter.", "A honeybee has five eyes."],
        ["Some workers guard the door of the hive.", "They keep out bees from other hives.", "On hot days, other workers stand near the door and fan their wings to cool the hive down."],
        ["No bee could keep a hive going alone.", "Together, the queen and the workers make the hive a busy, healthy home."]
      ],
      figures: [
        { after: 4, src: "assets/figures/tt2a-honeycomb.svg", label: "Figure 1", caption: "Wax cells in a honeycomb",
          alt: "Diagram of wax cells in a honeycomb. Each cell has six sides. Labels point to a cell with an egg, a cell full of honey and a cell with pollen." }
      ] },
    { id: "p2", title: "The Armored Digger", genre: "Informational text",
      paragraphs: [
        ["In Georgia, you might see an armadillo in a field or by a road.", "It is about the size of a house cat.", "An armadillo's body is made for digging and for staying safe."],
        ["An armadillo has short, strong legs with sharp claws.", "It uses its claws to dig in the dirt for beetles, ants, and worms.", "Its nose is good at smelling food in the ground.", "Then it grabs the bugs with its long, sticky tongue."],
        ["An armadillo also has a hard shell made of bony plates.", "The shell covers its back, its sides, and the top of its head.", "It keeps the armadillo safe from thorny bushes and from some animals that want to eat it.", "Only three-banded armadillos can roll up into a ball.", "They do not live in Georgia."],
        ["When an armadillo is scared, it may jump straight up into the air.", "This can surprise an enemy and give the armadillo time to run away.", "It hurries to its burrow, a hole it has dug in the ground."],
        ["A mother armadillo usually has four babies at a time.", "All four babies look exactly alike."],
        ["Strong claws, a good nose, and a tough shell all help the armadillo find food and stay safe."]
      ],
      figures: [
        { after: 3, src: "assets/figures/tt2a-armadillo.svg", label: "Figure 1", caption: "The parts of an armadillo",
          alt: "Diagram of an armadillo seen from the side. Labels point to its long nose, its sharp claws, the bony plates of its shell, and the bands across the middle of its shell. The bands label says: bands that let the shell bend." }
      ] }
  ],
  practice: [
    { id: "SK-TT2a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What is the main idea of this article?",
      choices: [
        { text: "Honeybees in a hive each have a job, and they work together.", correct: true },
        { text: "The queen bee can lay hundreds of eggs in just one day." },
        { text: "Worker bees turn the nectar from flowers into sweet honey." },
        { text: "Some worker bees guard the hive from bees of other hives." }
      ],
      clue: "The main idea fits the whole article, not just one paragraph. Read the first and last paragraphs, then ask which choice covers every part.",
      why: "The answer is \"Honeybees in a hive each have a job, and they work together.\" Paragraphs 2 to 5 each tell about a different job, and the first and last paragraphs tie the jobs together. The other choices are true, but each one is a detail from only one paragraph." },
    { id: "SK-TT2a-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Choose the sentence that best states the main idea of the whole article.",
      targets: ["p1:1:1", "p1:1:2", "p1:1:3", "p1:2:1", "p1:3:1"],
      answer: ["p1:1:3"], pick: 1,
      clue: "Look for a sentence that is big enough to cover the queen, the young workers, the older workers and the guards.",
      why: "The answer is \"Each bee has a job, and by working together, the bees keep the whole hive alive.\" It covers every paragraph. The sentences about the queen and about worker bees each tell about only one part of the hive." },
    { id: "SK-TT2a-P3", type: "ms", points: 2, dok: 2, passages: ["p1"], pick: 2,
      prompt: "Which two details best support the idea that worker bees do many different jobs? Choose two answers.",
      choices: [
        { text: "Young workers clean the hive and feed the baby bees.", correct: true },
        { text: "Older workers gather nectar and pollen from flowers.", correct: true },
        { text: "The queen is bigger than the other bees in the hive." },
        { text: "The queen lays hundreds of eggs in one day." },
        { text: "A hive can be home to thousands of bees." }
      ],
      clue: "The idea is about the jobs of worker bees. Cross out any detail about the queen, or any detail that does not name a job.",
      why: "The answers are \"Young workers clean the hive and feed the baby bees\" and \"Older workers gather nectar and pollen from flowers.\" Both name jobs that workers do. The queen details are not about workers, and thousands of bees is not a job." },
    { id: "SK-TT2a-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Look at Figure 1. How does the diagram help the reader understand paragraphs 3 and 4?",
      choices: [
        { text: "It shows the six-sided shape of the wax cells that the workers build.", correct: true },
        { text: "It shows how older worker bees find their way to the flowers." },
        { text: "It shows how the guard bees keep other bees out of the hive." },
        { text: "It shows how much bigger the queen is than the worker bees." }
      ],
      clue: "Read the caption. Then find the paragraph that talks about the same thing.",
      why: "The answer is \"It shows the six-sided shape of the wax cells that the workers build.\" Paragraph 3 says young workers build little wax rooms called cells, but the words do not say what the cells look like. Figure 1 lets you see them. The diagram does not show flowers, guards or the queen." },
    { id: "SK-TT2a-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "The main idea is that honeybees each have a job and work together. Decide whether each detail is a key detail or not a key detail.",
      cols: ["Key detail", "Not a key detail"],
      rows: [
        { text: "Workers fan their wings to cool the hive.", answer: 0 },
        { text: "Young workers build wax cells.", answer: 0 },
        { text: "A honeybee has five eyes.", answer: 1 },
        { text: "Guards keep out bees from other hives.", answer: 0 }
      ],
      clue: "For each detail, ask, \"Does this show a bee doing a job for the hive?\"",
      why: "Fanning wings, building wax cells and guarding the door are all jobs, so they are key details. \"A honeybee has five eyes\" is a fun fact, but it does not show a job or teamwork, so it is not a key detail." },
    { id: "SK-TT2a-P5", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the main idea of paragraph 4?",
        choices: [
          { text: "Older worker bees gather food from flowers and make honey for the hive.", correct: true },
          { text: "Honeybees need all five of their eyes to find flowers to visit." },
          { text: "Honeybees eat all of the honey in the hive during the summer." },
          { text: "Young worker bees stay inside the hive and feed the baby bees." }
        ] },
      partB: { prompt: "Which two sentences from the article best support the answer to Part A?", pick: 2,
        choices: [
          { text: "\"The workers gather a sweet liquid called nectar and a yellow powder called pollen.\"", correct: true },
          { text: "\"Back at the hive, the bees turn the nectar into honey.\"", correct: true },
          { text: "\"A honeybee has five eyes.\"" },
          { text: "\"Young workers stay inside the hive.\"" },
          { text: "\"Every hive has one queen.\"" }
        ] },
      clue: "Read only paragraph 4. Ask what most of its sentences are about. Then find the sentences that prove it.",
      why: "Part A: Older worker bees gather food from flowers and make honey for the hive. Part B: \"The workers gather a sweet liquid called nectar and a yellow powder called pollen\" and \"Back at the hive, the bees turn the nectar into honey.\" Paragraph 4 does say a honeybee has five eyes, but that one fact is not about gathering food or making honey, so it does not support the main idea. Paragraph 4 also says the honey is saved for winter, not eaten in summer. Young workers are in paragraph 3." },
    { id: "SK-TT2a-P7", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      prompt: "Look at Figure 1 again. Choose the words that best complete the sentences.",
      text: "The caption tells {0}. The labels tell {1}.",
      slots: [
        { options: ["what the whole diagram shows", "who wrote the article", "the main idea of paragraph 2"], answer: 0 },
        { options: ["how many bees live in one hive", "when the queen lays her eggs", "what is inside some of the cells"], answer: 2 }
      ],
      clue: "Read the words under Figure 1. Then read each word that has a line pointing into the picture. Ask what job each kind of words does.",
      why: "The answers are \"what the whole diagram shows\" and \"what is inside some of the cells.\" The caption, \"Wax cells in a honeycomb,\" names the whole picture. The labels \"cell with an egg,\" \"honey\" and \"pollen\" each point to what is inside some of the cells." },
  ],
  test: [
    { id: "SK-TT2a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What is this article mostly about?",
      choices: [
        { text: "how an armadillo's body helps it find food and stay safe", correct: true },
        { text: "where armadillos can be found in the state of Georgia" },
        { text: "how a mother armadillo takes care of her four babies" },
        { text: "why most armadillos cannot roll up into a tight ball" }
      ],
      clue: "Find the idea that the first and last paragraphs share. Then check that it fits the middle paragraphs too.",
      why: "The answer is \"how an armadillo's body helps it find food and stay safe.\" Paragraph 1 says the body is made for digging and staying safe, and the last paragraph says the same thing. Georgia, the babies and rolling into a ball are each only a small part of the article, not what the whole article is about." },
    { id: "SK-TT2a-T2", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the main idea of paragraph 4?",
        choices: [
          { text: "An armadillo has quick ways to get away from danger.", correct: true },
          { text: "An armadillo digs in the dirt to find bugs to eat." },
          { text: "An armadillo's hard shell covers its back and head." },
          { text: "An armadillo rolls into a ball to fool its enemies." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"This can surprise an enemy and give the armadillo time to run away.\"", correct: true },
          { text: "\"It uses its claws to dig in the dirt for beetles, ants, and worms.\"" },
          { text: "\"The shell covers its back, its sides, and the top of its head.\"" },
          { text: "\"Only three-banded armadillos can roll up into a ball.\"" }
        ] },
      clue: "Read paragraph 4 by itself. What do the jump and the burrow have in common? Then find the sentence that proves it.",
      why: "Part A: An armadillo has quick ways to get away from danger. Part B: \"This can surprise an enemy and give the armadillo time to run away.\" Jumping and hurrying to the burrow are both ways to escape. Digging and the shell are in other paragraphs, and the article says the armadillos in Georgia cannot roll into a ball." },
    { id: "SK-TT2a-T3", type: "ms", points: 2, dok: 2, passages: ["p2"], pick: 2,
      prompt: "Which two details support the idea that an armadillo's body helps it find food? Choose two answers.",
      choices: [
        { text: "It has sharp claws for digging in the dirt.", correct: true },
        { text: "Its nose can smell food under the ground.", correct: true },
        { text: "Its shell is made of hard, bony plates." },
        { text: "It may jump straight up when it is scared." },
        { text: "A mother usually has four babies at a time." }
      ],
      clue: "This question is only about finding food. Cross out details about staying safe and details about babies.",
      why: "The answers are \"It has sharp claws for digging in the dirt\" and \"Its nose can smell food under the ground.\" Paragraph 2 says the claws dig for bugs and the nose smells food underground. The shell and the jump help the armadillo stay safe, not find food." },
    { id: "SK-TT2a-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which detail from the article does NOT support the main idea?",
      choices: [
        { text: "A mother armadillo usually has four babies at a time.", correct: true },
        { text: "An armadillo grabs bugs with its long, sticky tongue." },
        { text: "An armadillo's shell covers its back and its sides." },
        { text: "An armadillo hurries to a burrow it has dug." }
      ],
      clue: "First say the main idea to yourself. Then test each detail: does it show how the body helps the armadillo eat or stay safe?",
      why: "The answer is \"A mother armadillo usually has four babies at a time.\" It is an interesting fact, but it does not show how the body helps with food or safety. The tongue helps it eat, and the shell and the burrow are part of how it stays safe." },
    { id: "SK-TT2a-T5", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "The last paragraph says a tough shell helps the armadillo. Choose the sentence that best shows how.",
      targets: ["p2:1:2", "p2:3:1", "p2:3:2", "p2:3:3", "p2:4:1"],
      answer: ["p2:3:3"], pick: 1,
      clue: "Some sentences only describe the shell. Find the one that tells what the shell does for the armadillo.",
      why: "The answer is \"It keeps the armadillo safe from thorny bushes and from some animals that want to eat it.\" It tells what the shell does for the armadillo. The other shell sentences only describe what the shell is made of and what it covers. The jump and the size sentences are not about the shell." },
    { id: "SK-TT2a-T6", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Look at Figure 1. Which fact does the reader learn ONLY from the diagram, not from the paragraphs?",
      choices: [
        { text: "Bands across the middle of the shell let it bend.", correct: true },
        { text: "The shell is made of hard, bony plates." },
        { text: "The shell covers the top of the head." },
        { text: "An armadillo has short, strong legs." }
      ],
      clue: "Read every label in Figure 1. Then check each choice: can you also find it in the paragraphs?",
      why: "The answer is \"Bands across the middle of the shell let it bend.\" Only the label in Figure 1 tells what the bands do. The bony plates, the shell on the head and the short, strong legs are all told about in paragraphs 2 and 3." }
  ]
});

PP.addLesson({
  code: "3.T.T.2.b",
  title: "How ideas connect: order of steps and cause and effect",
  clues: {
    words: ["first", "next", "then", "after that", "later", "finally", "because", "so", "since", "as a result", "that is why", "this caused"],
    ask: "What happened first? What happened because of it?",
    draw: "For steps, a row of boxes connected by arrows: First, Next, Then, Last. For cause and effect, boxes with arrows between them: Cause, then Effect. For a chain, keep adding boxes."
  },
  coach: {
    mixup: "Children often flip the cause and the effect, especially when the sentence puts the effect first: \"The game was canceled because it rained.\" Ask: \"Which one happened FIRST? The cause always happens first in time, even if the sentence says it second.\"",
    strong: "Steps in the right order with time words: \"First you fill the cup with soil, next you push the seed in, then you water it.\" Or a cause tied to its effect: \"Because the sawdust kept warm air away, the ice lasted for months.\"",
    notyet: "Steps out of order, or a fact with no cause: \"The ice was cold.\" Ask: \"Which one has to happen first? What made this happen?\"",
    ido: "Drop a ball. Say, \"I let go. That's the cause. The ball fell. That's the effect. The cause happens first.\" Then tell how to make a sandwich out of order on purpose (\"I eat it, then I get the bread\") and fix it together.",
    wedo: "Read a short how-to or science paragraph together. Your child finds each time word and each because or so. At each one, ask, \"What happened first? What happened because of it?\"",
    youdo: "Your child tells you how to do something they know well, using first, next, then and finally. Then they fill in a cause-and-effect chain for something that happened today.",
    everyday: "Ask your child to tell you how to do something step by step, like brushing teeth, and listen for time words. Use why talk all day: \"Why do you think the street is wet?\" Ask for an answer with because or so."
  },
  teach: {
    big: "Facts in a text are connected: some happen in order, one after another, and some happen because of something else.",
    points: [
      "Sequence is the order in which things happen. Words like first, next, then, after that, later and finally help you follow the order.",
      "A cause is why something happens. An effect is what happens because of it.",
      "Words like because, so, since, as a result, that is why and this caused often point to a cause and an effect.",
      "One effect can cause the next thing to happen, like a chain.",
      "Not every text uses signal words. Ask yourself, \"What happened first?\" and \"What made this happen?\""
    ],
    words: [
      { term: "sequence", means: "the order things happen in" },
      { term: "cause", means: "why something happens" },
      { term: "effect", means: "what happens because of a cause" },
      { term: "signal words", means: "words like first, then, because and so that show how ideas connect" }
    ],
    example: {
      label: "Example",
      lines: ["At night, the grass cools down. Because the grass is cool, water from the air turns into tiny drops on the blades. As a result, the grass is wet with dew in the morning."],
      note: "This is a chain. Cause: the grass cools. Effect: tiny drops of water form. That effect causes the next one: wet grass in the morning. The signal words are Because and As a result."
    },
    tip: "On the test, you may put steps in order, or answer \"What happens because...?\" Go back to that part of the text and look for signal words nearby."
  },
  learn: [
    {
      show: ["How to plant a bean seed: First, fill a cup with soil. Next, push a bean seed into the soil. Then, water the soil until it is damp but not soggy. Finally, set the cup in a sunny window and check on it each day."],
      ask: "What should you do right after you push the seed into the soil?",
      steps: [
        "This text gives steps, so the order matters.",
        "Find the step about pushing the seed. It starts with the signal word Next.",
        "Look at the step that comes after it. It starts with Then."
      ],
      answer: "Right after you push the seed into the soil, you water the soil until it is damp but not soggy."
    },
    {
      show: ["Long ago, before people had refrigerators, it was hard to keep food cold in summer. So in winter, workers cut big blocks of ice from frozen lakes and ponds. They packed the ice in sawdust inside buildings called icehouses. Because the sawdust kept warm air away from the ice, the ice could last for months."],
      ask: "Why could the ice last for months?",
      steps: [
        "Find the words from the question in the text: last for months. They are in the last sentence.",
        "Look for a signal word near them. The word Because points to the cause.",
        "Read what comes after Because. That is the cause."
      ],
      answer: "The ice could last for months because the sawdust kept warm air away from it."
    }
  ],
  parent: "When you cook or do a chore together, talk through the steps with first, next, then and finally. When something changes, like ice melting in a glass, ask, \"What caused that?\"",
  passages: [
    { id: "p1", title: "From Egg to Butterfly", genre: "Informational text",
      paragraphs: [
        ["Every monarch butterfly starts its life as a tiny egg.", "A mother monarch lays her eggs on milkweed plants, one egg at a time.", "She chooses milkweed because it is the only kind of plant her babies can eat."],
        ["After a few days, a small caterpillar hatches from the egg.", "First, it eats its own eggshell.", "Then it begins to munch on milkweed leaves."],
        ["The caterpillar eats and eats, so it grows very fast.", "But its skin does not grow with it.", "When the skin gets too tight, the caterpillar wiggles out of it.", "A new, bigger skin is already underneath.", "This happens several times."],
        ["Milkweed leaves have a kind of poison in them.", "The poison does not hurt the caterpillar.", "Instead, it stays in the caterpillar's body and makes it taste bad.", "As a result, many birds learn to leave monarchs alone."],
        ["When the caterpillar is full grown, it hangs upside down from a leaf or a stem.", "Its skin splits open one last time.", "Under it, the new skin hardens into a green case called a chrysalis.", "Inside the chrysalis, the caterpillar's body slowly changes."],
        ["After one or two weeks, the chrysalis cracks open, and a butterfly climbs out.", "At first, its wings are wet and crumpled.", "The butterfly waits for its wings to dry.", "Then it flies off to find flowers."]
      ] },
    { id: "p2", title: "Where Does Rain Come From?", genre: "Informational text",
      paragraphs: [
        ["The rain that falls on your house has been on a long trip.", "It may once have been part of an ocean, a lake, or even a puddle.", "Water moves around and around between the ground and the sky.", "This trip is called the water cycle."],
        ["The trip begins when the sun warms the water on Earth.", "The sun's heat makes some of the water change into a gas called water vapor.", "That is why a puddle dries up on a sunny afternoon.", "Water vapor is invisible, so you cannot see it rise into the air."],
        ["High in the sky, the air is cooler.", "When water vapor cools, it turns back into tiny drops of water.", "The drops are so small and light that they float in the air.", "Millions of these drops together make a cloud."],
        ["Inside a cloud, the tiny drops bump into each other and join together.", "Little by little, the drops grow bigger and heavier.", "When they become too heavy to float, they fall to the ground as rain.", "If the air is very cold, the water may fall as snow instead."],
        ["Some of the rain soaks into the ground.", "The rest runs into streams, rivers, lakes, and oceans.", "Then the sun warms the water again, and the trip starts over."]
      ] }
  ],
  practice: [
    { id: "SK-TT2b-P1", type: "order", points: 2, dok: 2, passages: ["p1"],
      prompt: "Put the stages of a monarch's life in order.",
      steps: [
        "A mother monarch lays an egg on milkweed.",
        "A caterpillar hatches and eats its eggshell.",
        "The caterpillar sheds its tight skin several times.",
        "The caterpillar's new skin hardens into a chrysalis.",
        "A butterfly climbs out and waits for its wings to dry."
      ],
      clue: "Use the signal words and the paragraph order. The article starts at the very beginning of a monarch's life and ends when it can fly.",
      why: "The order is: the mother lays an egg on milkweed, a caterpillar hatches and eats its eggshell, it sheds its tight skin several times, its new skin hardens into a chrysalis, and a butterfly climbs out and waits for its wings to dry." },
    { id: "SK-TT2b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does the mother monarch lay her eggs on milkweed?",
      choices: [
        { text: "Milkweed is the only kind of plant her caterpillars can eat.", correct: true },
        { text: "Milkweed leaves keep her eggs warm during the cold nights." },
        { text: "Birds cannot find eggs that are hidden on milkweed leaves." },
        { text: "Milkweed has more flowers than any other plant in the field." }
      ],
      clue: "The question asks why. Look for a signal word that points to a cause.",
      why: "The answer is \"Milkweed is the only kind of plant her caterpillars can eat.\" Paragraph 1 says she chooses milkweed because it is the only kind of plant her babies can eat. The article does not say milkweed keeps eggs warm or hides them." },
    { id: "SK-TT2b-P3", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is one effect of the caterpillar eating milkweed leaves?",
        choices: [
          { text: "Many birds will not eat monarchs.", correct: true },
          { text: "The caterpillar gets sick from the poison." },
          { text: "The caterpillar's new skin stops growing." },
          { text: "The chrysalis turns a bright green color." }
        ] },
      partB: { prompt: "Which sentence from the article best explains why the answer to Part A happens?",
        choices: [
          { text: "\"Instead, it stays in the caterpillar's body and makes it taste bad.\"", correct: true },
          { text: "\"Then it flies off to find flowers.\"" },
          { text: "\"But its skin does not grow with it.\"" },
          { text: "\"Inside the chrysalis, the caterpillar's body slowly changes.\"" }
        ] },
      clue: "Read paragraph 4. Follow the chain one link at a time: the leaves, the poison, the caterpillar, and then what happens next.",
      why: "Part A: Many birds will not eat monarchs. Part B: \"Instead, it stays in the caterpillar's body and makes it taste bad.\" The milkweed poison stays in the caterpillar and makes it taste bad. As a result, many birds learn to leave monarchs alone. The article says the poison does not hurt the caterpillar." },
    { id: "SK-TT2b-P4", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      prompt: "Use the article. Choose the signal word that best completes each sentence.",
      text: "The caterpillar eats a lot, {0} it grows very fast. Its skin gets too tight {1} the skin does not grow with it.",
      slots: [
        { options: ["so", "although", "before"], answer: 0 },
        { options: ["because", "so", "until"], answer: 0 }
      ],
      clue: "In each sentence, decide which part is the cause and which part is the effect. So comes before an effect. Because comes before a cause.",
      why: "The first blank is \"so\": eating a lot is the cause, and growing fast is the effect. The second blank is \"because\": the skin not growing is the cause of the skin getting too tight." },
    { id: "SK-TT2b-P5", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each cause with its effect.",
      cols: ["It wiggles out of the old skin.", "Many birds leave it alone.", "It waits before flying."],
      rows: [
        { text: "The caterpillar's skin gets too tight.", answer: 0 },
        { text: "The monarch tastes bad.", answer: 1 },
        { text: "The new butterfly's wings are wet.", answer: 2 }
      ],
      clue: "For each cause, ask, \"So what happens next?\" Find that part of the article.",
      why: "When the skin gets too tight, the caterpillar wiggles out of the old skin (paragraph 3). Because the monarch tastes bad, many birds leave it alone (paragraph 4). Because its wings are wet, the butterfly waits before flying (paragraph 6)." },
    { id: "SK-TT2b-P6", type: "hottext", points: 1, dok: 1, passages: ["p1"],
      prompt: "Choose the sentence that tells what the caterpillar does first after it hatches.",
      targets: ["p1:1:2", "p1:2:1", "p1:2:2", "p1:2:3", "p1:3:1"],
      answer: ["p1:2:2"], pick: 1,
      clue: "Find the paragraph where the caterpillar hatches. Read its sentences in order.",
      why: "The answer is \"First, it eats its own eggshell.\" The signal word First shows this happens before it starts eating milkweed leaves." }
  ],
  test: [
    { id: "SK-TT2b-T1", type: "order", points: 2, dok: 2, passages: ["p2"],
      prompt: "Put the steps of the water cycle in order.",
      steps: [
        "Water from a lake rises into the air as water vapor.",
        "A cloud forms high in the sky.",
        "The drops in the cloud grow bigger.",
        "Rain falls to the ground.",
        "Rain runs into streams and rivers."
      ],
      clue: "Each step has to happen before the next one can. Follow the water from the ground, up to the sky, and back down again.",
      why: "The order is: water from a lake rises into the air as water vapor, a cloud forms high in the sky, the drops in the cloud grow bigger, rain falls to the ground, and rain runs into streams and rivers. Paragraphs 2 to 5 tell these steps in this order." },
    { id: "SK-TT2b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What causes water vapor to turn back into tiny drops of water?",
      choices: [
        { text: "The air high in the sky is cooler.", correct: true },
        { text: "The sun heats the water in a lake." },
        { text: "The drops bump into one another." },
        { text: "Some of the rain soaks into the ground." }
      ],
      clue: "Find where the article tells about water vapor turning into drops. What change happens to the vapor there?",
      why: "The answer is \"The air high in the sky is cooler.\" Paragraph 3 says the air high in the sky is cooler, and when water vapor cools, it turns back into tiny drops. The sun's heat does the opposite: it turns water into vapor." },
    { id: "SK-TT2b-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why do drops of water fall out of a cloud?",
        choices: [
          { text: "They join together until they are too heavy to float.", correct: true },
          { text: "The sun warms them until they turn into a gas again." },
          { text: "The air around them becomes warmer and lighter." },
          { text: "The water vapor in the cloud pushes them downward." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"When they become too heavy to float, they fall to the ground as rain.\"", correct: true },
          { text: "\"The drops are so small and light that they float in the air.\"" },
          { text: "\"High in the sky, the air is cooler.\"" },
          { text: "\"Some of the rain soaks into the ground.\"" }
        ] },
      clue: "Read paragraph 4. Follow what happens to the drops, one change at a time, until they fall.",
      why: "Part A: They join together until they are too heavy to float. Part B: \"When they become too heavy to float, they fall to the ground as rain.\" The drops float while they are small and light. Joining together makes them heavy, and that causes them to fall." },
    { id: "SK-TT2b-T4", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Choose the word that best completes the sentence.",
      text: "A puddle dries up on a sunny day {0} the sun's heat changes some of the water into water vapor.",
      slots: [
        { options: ["because", "before", "but"], answer: 0 }
      ],
      clue: "Which part of the sentence is the cause, and which is the effect? Choose the word that joins an effect to its cause.",
      why: "The answer is \"because.\" The sun's heat changing water into vapor is the cause, and the puddle drying up is the effect. Paragraph 2 says this is why a puddle dries up on a sunny afternoon." },
    { id: "SK-TT2b-T5", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "How does the last paragraph connect to paragraph 2?",
      choices: [
        { text: "It shows the cycle starts over when the sun warms the water again.", correct: true },
        { text: "It shows that water vapor is invisible, so you cannot see it rise." },
        { text: "It shows that clouds are made of millions of tiny drops of water." },
        { text: "It shows that cold air can make water fall as snow instead of rain." }
      ],
      clue: "Paragraph 2 tells how the trip begins. Read the last sentence of the article. What does it say happens next?",
      why: "The answer is \"It shows the cycle starts over when the sun warms the water again.\" Paragraph 2 says the trip begins when the sun warms the water. The last paragraph brings the water back to that same step, so the trip goes around and around." }
  ]
});

PP.addLesson({
  code: "3.T.T.2.c",
  title: "Putting together information from two texts",
  clues: {
    words: ["both", "alike", "same", "but", "however", "unlike", "different", "while"],
    ask: "How are they the same? How are they different?",
    draw: "Three columns: Text 1 only | Both | Text 2 only. Or a Venn diagram, two overlapping circles."
  },
  coach: {
    mixup: "Children often use facts from only one text, or forget which text a fact came from. Ask: \"Which text told us that? What did the other one add?\"",
    strong: "\"Both texts are about beavers. Text 1 tells how they cut wood with their teeth, and Text 2 tells what they build with it.\" One way alike, one way different, with a clue word.",
    notyet: "Facts about only one text, or only differences. Ask: \"What do they BOTH tell us?\"",
    ido: "Hold up two things, like a fork and a spoon. Say, \"Both are for eating. But a fork has points and a spoon is round.\"",
    wedo: "Read two short articles on the same topic together. Sort each fact into Text 1 only, Both, or Text 2 only.",
    youdo: "Your child answers a question that needs facts from both texts and says which text each fact came from. Check it afterward, not while they work.",
    everyday: "Read two short things about the same subject, like a library book and a kids' magazine article. Ask for one thing both tell and one thing only one tells."
  },
  teach: {
    big: "When two texts are about the same topic, each one teaches you something, and putting them together teaches you even more.",
    points: [
      "First, read each text and find what it is mostly about.",
      "Next, look for information that both texts give. That is how they are alike. Clue words like both, alike and same show this.",
      "Then look for information that only one text gives. That is how they are different, and it adds to what you know. Clue words like but, however, unlike, different and while show a difference.",
      "Last, put the facts from both texts together to answer a question that one text alone cannot answer.",
      "Always check which text a fact came from. Test questions often ask about one text or the other."
    ],
    words: [
      { term: "alike", means: "the same in some way" },
      { term: "different", means: "not the same" },
      { term: "combine", means: "to put things together" }
    ],
    example: {
      label: "Example",
      lines: [
        "Text 1: Beavers have large front teeth that never stop growing. They use their teeth to chew through trees and cut branches.",
        "Text 2: Beavers pile sticks and mud across a stream to build a dam. The dam makes a pond, where beavers build a home called a lodge."
      ],
      note: "Both texts are about beavers. Text 1 tells how beavers get wood. Text 2 tells what they build with wood. Together they teach more: beavers cut wood with their strong teeth and use it to build dams and homes."
    },
    tip: "On the test, you may read two passages and then answer \"What information is in both passages?\" or \"How does Passage 2 add to Passage 1?\" Make a quick list of what each passage teaches."
  },
  learn: [
    {
      show: [
        "Text 1: The moon does not make its own light. The light we see is sunlight bouncing off the moon.",
        "Text 2: The moon seems to change shape during the month. As the moon travels around Earth, we see different amounts of its sunny side."
      ],
      ask: "How do both texts help you know that the moon's light comes from the sun?",
      steps: [
        "Find what Text 1 says about light. It says the light is sunlight bouncing off the moon.",
        "Find what Text 2 says about light. It talks about the moon's sunny side, the side the sun shines on.",
        "Put the matching parts together."
      ],
      answer: "Text 1 says the moon's light is sunlight, and Text 2 agrees when it says we see the moon's sunny side."
    },
    {
      show: [
        "Text 1: In early spring, peach trees are covered with pink flowers. Each flower can grow into a peach.",
        "Text 2: Peaches are picked in summer, when they are ripe and sweet. Georgia is famous for its peaches and is called the Peach State."
      ],
      ask: "Using both texts, what happens to a peach tree from spring to summer?",
      steps: [
        "Find the part about spring. Only Text 1 tells about it: pink flowers that can grow into peaches.",
        "Find the part about summer. Only Text 2 tells about it: the ripe peaches are picked.",
        "Put the two parts in order to answer the question."
      ],
      answer: "In spring, the tree blooms with pink flowers, and in summer, the ripe peaches that grew from those flowers are picked."
    }
  ],
  parent: "Read two short things about the same subject, like a library book and a kids' magazine article about sharks. Ask, \"What did both of them tell us? What did only one tell us?\"",
  passages: [
    { id: "p1", title: "Tiny Flyers", genre: "Informational text",
      paragraphs: [
        ["The ruby-throated hummingbird is the hummingbird that people see most often in Georgia.", "It is a very small bird.", "It weighs less than a nickel!"],
        ["Hummingbirds are amazing flyers.", "Their wings beat so fast that they look like a blur.", "The fast wings make a humming sound, which is how the bird got its name.", "A hummingbird can hover, or stay in one place in the air.", "It can even fly backward."],
        ["Hovering helps a hummingbird eat.", "It stays still in front of a flower and puts its long beak inside.", "Then it uses its long tongue to lap up the sweet nectar.", "Hummingbirds also eat tiny insects and spiders."],
        ["Flying so fast uses a lot of energy.", "That is why a hummingbird must eat many times every day."]
      ] },
    { id: "p2", title: "The Long Trip South", genre: "Informational text",
      paragraphs: [
        ["In spring and summer, hummingbirds zip around gardens all over Georgia.", "But when fall comes, they get ready for a long trip."],
        ["Before they leave, the birds eat and eat.", "They drink extra nectar and catch extra insects.", "Their bodies store the extra food as fat.", "The fat gives them energy for the journey."],
        ["Then they fly south to Mexico and Central America.", "It stays warm there all winter.", "Many of them fly across the Gulf of Mexico without stopping.", "That is a long way for such a tiny bird!"],
        ["In spring, the hummingbirds fly back north.", "Many people hang feeders filled with sugar water to welcome them back.", "The feeders must be cleaned often so the sugar water stays fresh."]
      ] },
    { id: "p3", title: "Built for the Water", genre: "Informational text",
      paragraphs: [
        ["The American alligator lives in many swamps, rivers, and lakes in south Georgia.", "It is a reptile, like snakes and turtles.", "An alligator spends much of its time in the water.", "Its body is built for that life."],
        ["An alligator's eyes and nostrils are on top of its head.", "Because of this, it can float with most of its body hidden underwater.", "It can still see and breathe while it waits for a fish or a turtle to swim by."],
        ["A long, strong tail pushes the alligator through the water.", "It swings its tail from side to side to swim fast."],
        ["Alligators cannot make their own body heat.", "On cool days, they crawl onto the bank and rest in the sun to warm up."]
      ] },
    { id: "p4", title: "Alligator Moms", genre: "Informational text",
      paragraphs: [
        ["Many reptiles lay their eggs and leave.", "But an alligator mother takes care of her babies."],
        ["In early summer, the mother builds a nest near the water.", "She piles up mud, sticks, and leaves into a big mound.", "Then she lays her eggs inside and covers them up."],
        ["As the leaves in the nest rot, they give off heat.", "This heat keeps the eggs warm.", "The mother stays close by and guards the nest from raccoons and other animals that eat eggs."],
        ["After about two months, the babies are ready to hatch.", "They make high squeaking sounds from inside their eggs.", "When the mother hears them, she digs open the nest.", "She may even carry the babies to the water in her mouth, very gently."],
        ["Baby alligators have bright yellow stripes.", "They stay near their mother for many months while they grow."]
      ] }
  ],
  practice: [
    { id: "SK-TT2c-P1", type: "mc", points: 1, dok: 2, passages: ["p1", "p2"],
      prompt: "What information is in BOTH passages?",
      choices: [
        { text: "Hummingbirds need a lot of food for energy.", correct: true },
        { text: "Hummingbirds can fly backward in the air." },
        { text: "Hummingbirds fly across the Gulf of Mexico." },
        { text: "Hummingbirds weigh less than a nickel." }
      ],
      clue: "For each choice, ask, \"Is this in Tiny Flyers? Is it also in The Long Trip South?\" Only one choice is in both.",
      why: "The answer is \"Hummingbirds need a lot of food for energy.\" Tiny Flyers says flying fast uses a lot of energy, so the bird must eat many times a day. The Long Trip South says the birds eat extra food and store it as fat for energy. Flying backward and the nickel are only in Tiny Flyers, and the Gulf of Mexico is only in The Long Trip South." },
    { id: "SK-TT2c-P2", type: "match", points: 2, dok: 2, passages: ["p1", "p2"],
      prompt: "Where can you find each piece of information? Match each one to the passage that tells it, or to Both.",
      cols: ["Tiny Flyers", "The Long Trip South", "Both"],
      rows: [
        { text: "that a hummingbird can hover", answer: 0 },
        { text: "where hummingbirds go for the winter", answer: 1 },
        { text: "that hummingbirds drink nectar", answer: 2 },
        { text: "how people help hummingbirds in spring", answer: 1 },
        { text: "how the hummingbird got its name", answer: 0 }
      ],
      clue: "Check each piece of information in one passage, then in the other. Mark Both only if you find it in each passage.",
      why: "That a hummingbird can hover and how the bird got its name are in Tiny Flyers. Where the birds go for the winter and the feeders in spring are in The Long Trip South. Drinking nectar is in both: Tiny Flyers says they lap up nectar, and The Long Trip South says they drink extra nectar before the trip." },
    { id: "SK-TT2c-P3", type: "ebsr", points: 2, dok: 3, passages: ["p1", "p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Tiny Flyers tells that flying uses a lot of energy. How does The Long Trip South add to this idea?",
        choices: [
          { text: "It explains that the birds store extra food as fat to use on their trip.", correct: true },
          { text: "It explains that fast-beating wings make a loud humming sound." },
          { text: "It explains that hovering helps the birds drink from flowers." },
          { text: "It explains that sugar water keeps the birds warm all winter." }
        ] },
      partB: { prompt: "Which sentence from The Long Trip South best supports the answer to Part A?",
        choices: [
          { text: "\"Their bodies store the extra food as fat.\"", correct: true },
          { text: "\"In spring, the hummingbirds fly back north.\"" },
          { text: "\"That is a long way for such a tiny bird!\"" },
          { text: "\"But when fall comes, they get ready for a long trip.\"" }
        ] },
      clue: "Find what the second passage says about energy. It must be new information that the first passage does not give.",
      why: "Part A: It explains that the birds store extra food as fat to use on their trip. Part B: \"Their bodies store the extra food as fat.\" Tiny Flyers says flying uses energy. The Long Trip South adds how the birds save up energy for a long flight. The humming sound and hovering come from Tiny Flyers, and neither passage says sugar water keeps the birds warm." },
    { id: "SK-TT2c-P4", type: "ms", points: 2, dok: 3, passages: ["p1", "p2"], pick: 2,
      prompt: "A student is writing a report on why hummingbirds need so much food. Which two sentences from the passages belong in the report? Choose two answers.",
      choices: [
        { text: "Flying so fast uses a lot of energy.", correct: true },
        { text: "The fat gives them energy for the journey.", correct: true },
        { text: "Hovering helps a hummingbird eat." },
        { text: "Hummingbirds also eat tiny insects and spiders." },
        { text: "In spring, the hummingbirds fly back north." }
      ],
      clue: "The report is about why, not what or how. Look in both passages for sentences that tell what food does for a hummingbird.",
      why: "The answers are \"Flying so fast uses a lot of energy\" from Tiny Flyers and \"The fat gives them energy for the journey\" from The Long Trip South. Together they explain why: food gives hummingbirds the energy for fast flying and for their long trip. The hovering sentence tells how they eat, the insect sentence tells what they eat, and the spring sentence is about the trip home." },
    { id: "SK-TT2c-P5", type: "mc", points: 1, dok: 3, passages: ["p1", "p2"],
      prompt: "Which sentence best combines information from both passages?",
      choices: [
        { text: "Hummingbirds are tiny, fast flyers that travel far south each fall.", correct: true },
        { text: "Hummingbirds are tiny birds that can hover in front of flowers." },
        { text: "Hummingbirds fly south in the fall and come back north in spring." },
        { text: "Hummingbirds catch spiders on their trip across the Gulf of Mexico." }
      ],
      clue: "A sentence that combines both passages needs one idea from each passage.",
      why: "The answer is \"Hummingbirds are tiny, fast flyers that travel far south each fall.\" Fast flying comes from Tiny Flyers, and the trip south comes from The Long Trip South. Hovering is only from Tiny Flyers, the trip and return are only from The Long Trip South, and neither passage says they catch spiders on the trip." }
  ],
  test: [
    { id: "SK-TT2c-T1", type: "mc", points: 1, dok: 3, passages: ["p3", "p4"],
      prompt: "Which statement uses information from BOTH passages?",
      choices: [
        { text: "An alligator can float with its eyes above water, and its babies squeak inside their eggs.", correct: true },
        { text: "Adult alligators warm up in the sun, and they swim by swinging their tails." },
        { text: "Mother alligators build nests, and they carry their babies to the water." },
        { text: "Baby alligators have stripes, and their nest is made of mud and sticks." }
      ],
      clue: "For each choice, find where each half of the sentence comes from. The answer needs one half from each passage.",
      why: "The answer is \"An alligator can float with its eyes above water, and its babies squeak inside their eggs.\" Only Built for the Water tells that the eyes are on top of the head so it can float and still see. Only Alligator Moms tells that the babies make squeaking sounds inside their eggs. Each of the other choices uses only one passage." },
    { id: "SK-TT2c-T2", type: "match", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Where can you find each piece of information? Match each one to the passage that tells it, or to Both.",
      cols: ["Built for the Water", "Alligator Moms", "Both"],
      rows: [
        { text: "how an alligator swims", answer: 0 },
        { text: "how alligator eggs are kept warm", answer: 1 },
        { text: "that alligators live near water", answer: 2 },
        { text: "what baby alligators look like", answer: 1 }
      ],
      clue: "Check each piece of information in one passage, then in the other. Mark Both only if you find it in each passage.",
      why: "How an alligator swims is in Built for the Water. How the eggs are kept warm and what the babies look like are in Alligator Moms. Both passages show that alligators live near water: Built for the Water names swamps, rivers and lakes, and Alligator Moms says the nest is near the water." },
    { id: "SK-TT2c-T3", type: "ebsr", points: 2, dok: 3, passages: ["p3", "p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Built for the Water tells how an alligator's body helps it in the water. How does Alligator Moms add to what you learn about alligators?",
        choices: [
          { text: "It tells how a mother alligator cares for her eggs and babies.", correct: true },
          { text: "It tells how an alligator waits to catch a fish or a turtle." },
          { text: "It tells why an alligator rests in the sun on cool days." },
          { text: "It tells how an alligator's tail pushes it through water." }
        ] },
      partB: { prompt: "Which sentence from the passages best supports the answer to Part A?",
        choices: [
          { text: "\"But an alligator mother takes care of her babies.\"", correct: true },
          { text: "\"It swings its tail from side to side to swim fast.\"" },
          { text: "\"Alligators cannot make their own body heat.\"" },
          { text: "\"Baby alligators have bright yellow stripes.\"" }
        ] },
      clue: "First decide what Alligator Moms is mostly about. Then cross out any choice that Built for the Water already tells.",
      why: "Part A: It tells how a mother alligator cares for her eggs and babies. Part B: \"But an alligator mother takes care of her babies.\" Catching food, resting in the sun and swimming with the tail are all in Built for the Water. The stripes are in Alligator Moms, but they do not show how the mother cares for her babies." },
    { id: "SK-TT2c-T4", type: "hottext", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "Built for the Water says adult alligators rest in the sun to warm up. Choose the sentence from Alligator Moms that tells a different way alligators get warmth.",
      targets: ["p3:4:1", "p3:4:2", "p4:2:3", "p4:3:1", "p4:3:3"],
      answer: ["p4:3:1"], pick: 1,
      clue: "The sentence must come from Alligator Moms, and it must name a source of heat that is not the sun.",
      why: "The answer is \"As the leaves in the nest rot, they give off heat.\" Adult alligators get warmth from the sun, but the eggs get warmth from rotting leaves. The two sentences from Built for the Water are about body heat and the sun, and the other sentences from Alligator Moms tell how the eggs are covered and guarded." }
  ]
});

PP.addLesson({
  code: "3.T.T.2.d",
  title: "Writing to inform: introduction, facts and conclusion",
  teach: {
    big: "A good informational piece names the topic at the start, teaches facts in the middle, and wraps up at the end.",
    points: [
      "The introduction tells the reader what the topic is. It can start with something interesting, but it must make the topic clear.",
      "The middle gives facts, details and definitions. A picture or diagram with a caption can also help explain a fact. Choose one that shows the facts in that part of your writing. Every sentence should be about the topic.",
      "A definition tells what a word means, like \"A burrow is a hole an animal digs for its home.\"",
      "If a sentence is about something else, like your own pet or your lunch, it does not belong. Take it out.",
      "The conclusion wraps up. It reminds the reader of the topic or the most important idea. It does not start a new topic."
    ],
    words: [
      { term: "introduction", means: "the beginning, which tells the topic" },
      { term: "fact", means: "something true that can be checked" },
      { term: "definition", means: "a sentence that tells what a word means" },
      { term: "conclusion", means: "the ending, which wraps up the topic" }
    ],
    example: {
      label: "Example",
      lines: [
        "Frogs are amazing animals that change as they grow.",
        "A frog starts life as a tadpole that swims with a tail and breathes with gills.",
        "As it grows, it loses its tail and grows legs and lungs.",
        "From tadpole to frog, these animals go through surprising changes."
      ],
      note: "The first sentence names the topic: frogs change as they grow. The middle sentences give facts. The last sentence wraps up the same idea without starting anything new."
    },
    tip: "On the Milestones, you will read a student's draft and choose the best introduction, the best fact to add, the best conclusion, or the sentence that does not belong. Reread the sentences around that spot before you choose."
  },
  learn: [
    {
      show: ["(1) Cheetahs are the fastest animals on land. (2) They use their speed to chase down food. (3) My grandma has a cat named Pepper. (4) A cheetah's long tail helps it turn quickly while it runs."],
      ask: "Which sentence does not belong?",
      steps: [
        "Find the topic. Sentence 1 tells it: cheetahs.",
        "Test each sentence. Ask, \"Is this about cheetahs?\"",
        "Sentences 2 and 4 are about cheetahs. Sentence 3 is about Grandma's cat, which is a different topic."
      ],
      answer: "Sentence 3 does not belong, because it is about a pet cat, not about cheetahs."
    },
    {
      show: [
        "(1) Rainbows are colorful arcs that appear in the sky. (2) A rainbow forms when sunlight shines through drops of rain. (3) The raindrops split the light into many colors. (4) To see a rainbow, you need the sun behind you and rain in front of you.",
        "Which sentence would make the best conclusion? \"Next, I will tell you about clouds.\" \"Sunlight and rain work together to paint a rainbow in the sky.\" \"What is your favorite color?\""
      ],
      ask: "Which sentence is the best conclusion?",
      steps: [
        "A conclusion wraps up the topic. The topic is rainbows.",
        "Cross out a sentence that starts a new topic. \"Next, I will tell you about clouds\" does that.",
        "Cross out a sentence that is not about the topic at all. The favorite color question is not about rainbows.",
        "The one left sums up the main idea: sun and rain make rainbows."
      ],
      answer: "\"Sunlight and rain work together to paint a rainbow in the sky\" is the best conclusion, because it wraps up how rainbows form."
    },
    {
      show: [
        "(1) Lighthouses help keep ships safe. (2) A lighthouse is a tall tower with a bright light at the top. (3) At night, the light shines out over the water.",
        "Which fact should be added after sentence 3? \"The light warns ships that rocks or land are close by.\" \"My family likes to swim at the beach.\""
      ],
      ask: "Which fact fits best after sentence 3?",
      steps: [
        "Find the topic. Sentence 1 says lighthouses keep ships safe.",
        "Read sentence 3 again. The light shines over the water. A good next fact tells more about the light.",
        "Swimming at the beach is about the writer's family, not lighthouses."
      ],
      answer: "\"The light warns ships that rocks or land are close by\" fits best, because it tells how the light keeps ships safe."
    }
  ],
  write: {
    prompt: "Write an informational paragraph about an animal, a plant or a place you know a lot about. Start with an introduction that names your topic. Give at least three facts or details. Explain what one word means. End with a conclusion that wraps up your topic.",
    checklist: [
      "I named my topic in my first sentence.",
      "I gave at least three true facts or details.",
      "I explained what one word means.",
      "If a picture would help explain a fact, I drew it and labeled it.",
      "Every sentence is about my topic.",
      "My last sentence wraps up my topic."
    ],
    rows: 8
  },
  parent: "Ask your child to teach you about something they know well, like a favorite animal or a game. Then help them write it with a first sentence that names the topic, three facts and an ending that wraps it up.",
  passages: [
    { id: "p1", draft: true, title: "Peanuts", byline: "Rosa's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) I am going to tell you about some stuff."],
        ["(2) Peanuts grow in a surprising way.", "(3) First, a peanut plant grows small yellow flowers above the ground.", "(4) After a flower fades, a stem called a peg grows down and pushes into the soil.", "(5) Under the ground, the tip of the peg grows into a shell with seeds inside.", "(6) In the fall, farmers dig up the plants and let them dry in the sun."],
        ["(7) Peanuts are not really nuts.", "(8) My best friend likes to eat apples with her lunch.", "(9) Georgia farmers grow more peanuts than the farmers in any other state."],
        ["(10) That is all."]
      ] },
    { id: "p2", draft: true, title: "Bats", byline: "Kenji's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) Bats are mammals, just like dogs, horses, and people.", "(2) Mother bats feed their babies milk.", "(3) Bats are the only mammals that can really fly."],
        ["(4) Most bats sleep during the day.", "(5) They hang upside down in caves, trees, or old buildings.", "(6) At night, they wake up and fly out to find food.", "(7) Many bats eat insects such as moths and beetles.", "(8) My sister wants to get a pet hamster."],
        ["(9) Bats have a special way to find food in the dark.", "(10) A bat makes high squeaks as it flies.", "(11) The sounds bounce off a moth and come back to the bat as echoes.", "(12) By listening to the echoes, the bat can tell where the moth is."],
        ["(13) Bats are cool, and that is the end."]
      ] }
  ],
  practice: [
    { id: "SK-TT2d-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Sentence 1 does not tell the reader the topic. Which sentence would be the best introduction to replace sentence 1?",
      choices: [
        { text: "Peanuts are a popular food, and there is a lot to learn about them.", correct: true },
        { text: "My family eats peanut butter sandwiches every single week." },
        { text: "Farmers in Georgia work very hard on their farms all year." },
        { text: "In the end, peanuts are a very useful plant for farmers." }
      ],
      clue: "An introduction names the topic of the whole draft. Read the rest of the draft and ask what every paragraph is about.",
      why: "The answer is \"Peanuts are a popular food, and there is a lot to learn about them.\" The whole draft is about peanuts, and this sentence tells the reader that. The sandwich sentence is about the writer's family, the farmer sentence is about farmers, and \"In the end\" sounds like a conclusion." },
    { id: "SK-TT2d-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Rosa wants to add a sentence after sentence 7 to explain what peanuts really are. Which sentence fits best?",
      choices: [
        { text: "They are legumes, which are plants that grow seeds in pods, like peas.", correct: true },
        { text: "They can be roasted, boiled, or crushed to make smooth peanut butter." },
        { text: "Some people cannot eat them, so they need to choose other snacks." },
        { text: "Pecans are real nuts that grow on very tall trees in Georgia." }
      ],
      clue: "Sentence 7 says what peanuts are not. The next sentence should tell the reader what they are.",
      why: "The answer is \"They are legumes, which are plants that grow seeds in pods, like peas.\" It tells what peanuts really are and defines the word legumes. The other sentences are about cooking peanuts, about people who cannot eat them, or about pecans." },
    { id: "SK-TT2d-P3", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence does not belong in Rosa's draft? Choose the sentence.",
      targets: ["p1:2:1", "p1:2:4", "p1:3:1", "p1:3:2", "p1:3:3"],
      answer: ["p1:3:2"], pick: 1,
      clue: "The topic is peanuts. Test each sentence by asking, \"Does this teach the reader about peanuts?\"",
      why: "The answer is \"(8) My best friend likes to eat apples with her lunch.\" It is about apples and the writer's friend, not peanuts. Every other sentence gives a fact about peanuts." },
    { id: "SK-TT2d-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence would be the best conclusion to replace sentence 10?",
      choices: [
        { text: "From a yellow flower to a shell underground, peanuts are amazing plants.", correct: true },
        { text: "Next, I will tell you how to make a peanut butter and jelly sandwich." },
        { text: "Peanut plants need warm weather for many months to grow well." },
        { text: "I think that apples are a much better snack than peanuts will ever be." }
      ],
      clue: "A conclusion wraps up the whole topic. Cross out any choice that starts something new, adds a new fact, or is about a different food.",
      why: "The answer is \"From a yellow flower to a shell underground, peanuts are amazing plants.\" It sums up how peanuts grow and ends the topic. The sandwich sentence starts a new topic, the warm weather sentence adds a new fact instead of wrapping up, and the apple sentence is an opinion about a different food." },
    { id: "SK-TT2d-P5", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Rosa might add these sentences to a new version of her draft. Match each sentence to the part of the draft where it belongs.",
      cols: ["Introduction", "Middle (fact or detail)", "Conclusion"],
      rows: [
        { text: "Have you ever wondered how peanuts grow? Read on to find out.", answer: 0 },
        { text: "Peanut plants grow best in warm weather and sandy soil.", answer: 1 },
        { text: "Peanuts can be roasted, boiled, or made into peanut butter.", answer: 1 },
        { text: "Now you know why peanuts are such a special plant.", answer: 2 }
      ],
      clue: "Ask what job each sentence does. Does it open the topic, teach a fact, or wrap up what the reader learned?",
      why: "\"Have you ever wondered how peanuts grow? Read on to find out\" opens the topic, so it is the introduction. The sentences about warm weather and sandy soil and about roasting and boiling are facts for the middle. \"Now you know why peanuts are such a special plant\" wraps up, so it is the conclusion." },
    { id: "SK-TT2d-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Rosa wants to add a picture with a caption next to sentences 4 and 5. Which one would best help readers understand those sentences?",
      choices: [
        { text: "a diagram of a peanut plant above and below the ground, labeled flower, peg and shell, with the caption \"How a peanut grows\"", correct: true },
        { text: "a photo of a jar of peanut butter on a kitchen table, with the caption \"Peanut butter is made from peanuts\"" },
        { text: "a drawing of a farmer on a tractor in a peanut field, with the caption \"Farmers dig up peanuts in the fall\"" },
        { text: "a drawing of a bowl of popcorn next to a movie ticket, with the caption \"My favorite movie snack\"" }
      ],
      clue: "Reread sentences 4 and 5. What happens there that is hard to picture? Which picture would let the reader see it?",
      why: "The answer is a diagram of a peanut plant above and below the ground, labeled flower, peg and shell, with the caption \"How a peanut grows\". Sentences 4 and 5 tell how a peg pushes into the soil and grows a shell under the ground, and the diagram lets readers see that. The peanut butter photo is about peanuts but not about how they grow. The farmer drawing goes with sentence 6, not 4 and 5. The popcorn drawing is not about peanuts at all." }
  ],
  test: [
    { id: "SK-TT2d-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Kenji wants to add an opening sentence that tells the reader what his whole draft will be about. Which sentence should he add before sentence 1?",
      choices: [
        { text: "Bats may look strange, but they are amazing animals with special skills.", correct: true },
        { text: "Mice and rats are small animals that some people are afraid of." },
        { text: "I saw a movie last summer that had a scary bat in it." },
        { text: "In conclusion, bats are special in many different ways." }
      ],
      clue: "An introduction names the topic of the whole draft and makes the reader want to learn more. It does not sound like an ending.",
      why: "The answer is \"Bats may look strange, but they are amazing animals with special skills.\" It names the topic, bats, and leads into the facts. Mice and rats are a different topic, the movie sentence is about Kenji, and \"In conclusion\" belongs at the end." },
    { id: "SK-TT2d-T2", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence does not belong in Kenji's draft? Choose the sentence.",
      targets: ["p2:2:2", "p2:2:4", "p2:2:5", "p2:3:1", "p2:3:3"],
      answer: ["p2:2:5"], pick: 1,
      clue: "Every sentence in an informational piece should teach about the topic. Find the sentence that is about something else.",
      why: "The answer is \"(8) My sister wants to get a pet hamster.\" It is about Kenji's sister and a hamster, not bats. The other sentences all give facts about bats." },
    { id: "SK-TT2d-T3", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Kenji wants to add a sentence after sentence 7 to tell more about what bats eat. Which sentence fits best?",
      choices: [
        { text: "Some kinds of bats eat fruit or drink nectar from flowers instead.", correct: true },
        { text: "Bats have wings made of thin skin stretched over long fingers." },
        { text: "Moths are insects that have soft wings covered in tiny scales." },
        { text: "I think that bats are much more interesting than birds are." }
      ],
      clue: "The new sentence must stay on the same idea as sentence 7: what bats eat.",
      why: "The answer is \"Some kinds of bats eat fruit or drink nectar from flowers instead.\" It tells more about what bats eat. The wing sentence is about bats but not about food, the moth sentence is about moths, and the last sentence is an opinion." },
    { id: "SK-TT2d-T4", type: "ms", points: 2, dok: 2, passages: ["p2"], pick: 3,
      prompt: "Sentence 9 says bats have a special way to find food in the dark. Which three sentences give details that support sentence 9? Choose three answers.",
      choices: [
        { text: "(10) A bat makes high squeaks as it flies.", correct: true },
        { text: "(11) The sounds bounce off a moth and come back to the bat as echoes.", correct: true },
        { text: "(12) By listening to the echoes, the bat can tell where the moth is.", correct: true },
        { text: "(4) Most bats sleep during the day." },
        { text: "(5) They hang upside down in caves, trees, or old buildings." },
        { text: "(7) Many bats eat insects such as moths and beetles." }
      ],
      clue: "Sentence 9 promises to explain a special way of finding food. Choose the sentences that explain how that way works.",
      why: "The answers are \"(10) A bat makes high squeaks as it flies,\" \"(11) The sounds bounce off a moth and come back to the bat as echoes,\" and \"(12) By listening to the echoes, the bat can tell where the moth is.\" Together they explain how a bat finds food in the dark. Sentences 4, 5 and 7 are facts about bats, but they do not explain the special way." },
    { id: "SK-TT2d-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence would be the best conclusion to replace sentence 13?",
      choices: [
        { text: "Bats are amazing flyers with a special way to find food.", correct: true },
        { text: "Some bats live in caves, and some bats live in trees." },
        { text: "Next, let's find out about animals in the deep ocean." },
        { text: "My favorite animal at the zoo is the tall giraffe." }
      ],
      clue: "A conclusion wraps up the most important ideas of the whole draft. It does not add one small fact or start a new topic.",
      why: "The answer is \"Bats are amazing flyers with a special way to find food.\" It reminds the reader of the big ideas: bats fly, and they find food with echoes. The cave and tree sentence is one small fact, the ocean sentence starts a new topic, and the giraffe sentence is off topic." },
    { id: "SK-TT2d-T6", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "Kenji can add only ONE more sentence to his draft. Which choice would best develop his topic, and why?",
      choices: [
        { text: "Add \"A mammal is an animal that has hair and feeds its babies milk\" after sentence 1, because it tells what a key word means.", correct: true },
        { text: "Add \"Bats come in many sizes and colors\" after sentence 12, because any new fact about bats makes a draft better." },
        { text: "Add \"Owls also hunt for food at night\" after sentence 6, because it tells about another animal that is awake at night." },
        { text: "Add \"I think bats are the best animals ever\" after sentence 3, because a strong feeling makes the reader care." }
      ],
      clue: "Check two things in each choice. Does the sentence teach about bats and fit the sentences around it? Is the reason a good reason for adding it?",
      why: "The answer is to add \"A mammal is an animal that has hair and feeds its babies milk\" after sentence 1, because it tells what a key word means. Sentence 1 uses the word mammals, and the definition helps the reader understand why bats belong with dogs, horses and people. The sizes fact is about bats, but sentences 9 to 12 explain how bats find food, so it does not fit there, and not every fact makes a draft better. The owl sentence is about owls, not bats. The last sentence is an opinion, not a fact." }
  ]
});
