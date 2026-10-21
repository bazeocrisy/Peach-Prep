/* Lessons: 3.T.RA.1 Research & inquiry and 3.T.RA.2 Curating sources & evidence. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.T.RA.1.a",
  title: "Asking good research questions",
  teach: {
    big: "A good research question asks about a fact I really want to know, and each answer helps me think of a new question.",
    points: [
      "A research question asks something you can find out by reading, watching or asking an expert.",
      "Start with question words like who, what, where, when, why and how. They lead to bigger answers than yes-or-no questions.",
      "Stay on your topic. A question about cats will not help a report about bees.",
      "A question like \"Which pet is best?\" asks for an opinion, so it has no one right answer. Ask about facts instead.",
      "After you learn something, ask a new question to dig deeper into it."
    ],
    words: [
      { term: "topic", means: "what your research is about" },
      { term: "research", means: "looking for facts to learn about a topic" },
      { term: "dig-deeper question", means: "a new question that grows out of something you just learned" }
    ],
    example: {
      label: "Example: the topic is sharks",
      lines: [
        "Weak question: Are sharks cool?",
        "Better question: What do sharks eat?",
        "Dig-deeper question: How do sharks find their food?"
      ],
      note: "\"Are sharks cool?\" asks for an opinion. \"What do sharks eat?\" asks for facts you can look up. Once you learn what sharks eat, \"How do sharks find their food?\" helps you learn even more."
    },
    tip: "On the test, you may read an article and choose the question it answers. You may also choose the question that would help a student learn the most about a topic."
  },
  learn: [
    {
      show: [
        "Zoe wants to learn about volcanoes. She wrote three questions:",
        "1. Are volcanoes scary?",
        "2. What makes a volcano erupt?",
        "3. Do I like the volcano picture in my book?"
      ],
      ask: "Which question would help Zoe learn the most about volcanoes?",
      steps: [
        "Check each question for an opinion. \"Scary\" and \"do I like\" are about feelings, so books cannot answer them for Zoe.",
        "Look for a question word like what, why or how. Question 2 starts with what.",
        "Ask, \"Could an expert or a book answer this with facts?\" A science book can explain what makes a volcano erupt."
      ],
      answer: "Question 2, \"What makes a volcano erupt?\", would help Zoe learn the most."
    },
    {
      show: ["Gray squirrels bury nuts in the fall. In winter, they dig up many of the nuts and eat them. They use their memory and their strong sense of smell to find the nuts under the ground."],
      ask: "Lin asked, \"What do squirrels do with nuts?\" This text answered her. What is a good dig-deeper question for Lin to ask next?",
      steps: [
        "Find what Lin just learned: squirrels bury nuts and dig up many of them later.",
        "Look for a word that makes you wonder. The text says \"many\" of the nuts, not all of them.",
        "Turn that wondering into a new question that starts with a question word."
      ],
      answer: "A good dig-deeper question is \"What happens to the nuts that squirrels never dig up?\""
    }
  ],
  write: {
    prompt: "Choose a topic you want to learn about, such as an animal, a place or a sport. Write your topic on the first line. Then write three research questions about it. Make your third question a dig-deeper question about one of your first two.",
    checklist: [
      "I wrote my topic.",
      "I wrote three questions that start with question words like what, why or how.",
      "I asked about facts, not opinions.",
      "I made my last question dig deeper into one of my first two."
    ],
    rows: 5
  },
  parent: "When your child wonders about something, write the question down together. Look up the answer in a library book, then ask, \"What do we want to know next?\"",
  passages: [
    { id: "p1", title: "Busy Honeybees", genre: "Informational text",
      paragraphs: [
        ["A honeybee hive is a very busy place.", "Thousands of bees live and work together inside it."],
        ["Each hive has one queen bee.", "Her job is to lay eggs.", "Most of the other bees are worker bees.", "The workers are all female, and they do almost every job in the hive."],
        ["Some workers fly out to visit flowers.", "They drink a sweet liquid called nectar and carry it back to the hive.", "Inside, the bees turn the nectar into honey.", "They store the honey in little wax rooms called cells.", "Each cell has six sides."],
        ["When a worker finds a good patch of flowers, she flies home and does a special dance.", "The dance shows the other bees which way to fly and how far to go.", "Then they can find the flowers too."],
        ["Bees help people as well.", "As they move from flower to flower, they carry pollen.", "This helps many plants make fruit and seeds."]
      ] },
    { id: "p2", title: "Hunters of the Night", genre: "Informational text",
      paragraphs: [
        ["Most owls hunt at night.", "Their bodies have special parts that help them find food in the dark."],
        ["An owl's hearing is very sharp.", "Some owls can find a mouse moving under leaves or snow just by listening.", "The flat, heart-shaped face of a barn owl helps send sounds to its ears."],
        ["Owls have large eyes that help them see in dim light.", "But an owl cannot move its eyes the way you can.", "Instead, it turns its whole head to look around.", "An owl can turn its head much farther than a person can."],
        ["Many owls fly almost without a sound.", "Their feathers have soft edges that quiet the air as they flap.", "A mouse may not hear an owl coming."],
        ["Owls often swallow small animals whole.", "Later, they cough up a small ball of fur and bones called a pellet.", "Scientists study pellets to learn what owls eat."]
      ] }
  ],
  practice: [
    { id: "SK-RA1a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Kenji wants to learn how honeybees make honey. Which question would help him the most?",
      choices: [
        { text: "How do bees turn nectar into honey?", correct: true },
        { text: "Do honeybees make honey?" },
        { text: "Where do honeybees build their hives?" },
        { text: "Is honey sweet and sticky?" }
      ],
      clue: "Cross out yes-or-no questions you already know the answer to. Then check which question left is about Kenji's exact topic.",
      why: "The answer is \"How do bees turn nectar into honey?\" It asks about Kenji's exact topic and needs a real answer from a book. Everyone already knows bees make honey and that honey is sweet, so those yes-or-no questions teach him nothing new. Where bees build hives is a fine research question, but it is about a different topic." },
    { id: "SK-RA1a-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which question can the article \"Busy Honeybees\" answer?",
      choices: [
        { text: "How do bees show other bees where flowers are?", correct: true },
        { text: "How long does a queen bee live?" },
        { text: "Which flowers make the sweetest honey?" },
        { text: "How do beekeepers keep from getting stung?" }
      ],
      clue: "Check each question against the article. Can you put your finger on a sentence that answers it?",
      why: "The answer is \"How do bees show other bees where flowers are?\" Paragraph 4 says a worker does a special dance that shows the other bees which way to fly. The article does not tell how long a queen lives, which flowers make the sweetest honey, or how beekeepers stay safe." },
    { id: "SK-RA1a-P3", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Sort each question. Is it a good research question about bees, or not?",
      cols: ["Good research question", "Not a research question"],
      rows: [
        { text: "Why do bees visit flowers?", answer: 0 },
        { text: "Are bees scarier than wasps?", answer: 1 },
        { text: "How do bees make wax?", answer: 0 },
        { text: "Do I like the taste of honey?", answer: 1 }
      ],
      clue: "A research question asks for facts you can look up. If the answer is a feeling or depends on who you ask, it is not a research question.",
      why: "\"Why do bees visit flowers?\" and \"How do bees make wax?\" are good research questions because books and experts can answer them with facts. \"Are bees scarier than wasps?\" and \"Do I like the taste of honey?\" ask about feelings, so they are not research questions." },
    { id: "SK-RA1a-P4", type: "mc", points: 1, dok: 3, passages: ["p1"],
      prompt: "Rosa read that worker bees do a special dance. Which question would help her learn MORE about this idea?",
      choices: [
        { text: "How does the dance show the bees how far to fly?", correct: true },
        { text: "Does a hive have a queen bee?" },
        { text: "Would I be good at dancing like a bee?" },
        { text: "Do worker bees dance when they find flowers?" }
      ],
      clue: "A dig-deeper question stays on the idea Rosa just learned and asks something new about it.",
      why: "The answer is \"How does the dance show the bees how far to fly?\" It stays on the dance and asks something new about how it works. Rosa already knows worker bees dance when they find flowers, the queen is a different idea, and being good at dancing is about Rosa, not about bees." },
    { id: "SK-RA1a-P5", type: "ms", points: 2, dok: 2, passages: ["p1"],
      prompt: "Which TWO questions does the article answer? Choose two answers.",
      pick: 2,
      choices: [
        { text: "What is the queen bee's job?", correct: true },
        { text: "What shape is each wax cell?", correct: true },
        { text: "How big is a queen bee?" },
        { text: "Where do bees go in the winter?" },
        { text: "How do people build beehives?" }
      ],
      clue: "Read each question, then look for a sentence that answers it. If you cannot find one, it is not answered.",
      why: "The article answers \"What is the queen bee's job?\" (her job is to lay eggs) and \"What shape is each wax cell?\" (each cell has six sides). It never tells how big a queen is, where bees go in winter, or how people build hives." }
  ],
  test: [
    { id: "SK-RA1a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which question can the article \"Hunters of the Night\" answer?",
      choices: [
        { text: "How do owls find food in the dark?", correct: true },
        { text: "How do owl chicks learn to fly?" },
        { text: "How many eggs does an owl lay?" },
        { text: "Which owl is the largest in the world?" }
      ],
      clue: "Look for the question that the whole article keeps answering, paragraph after paragraph.",
      why: "The answer is \"How do owls find food in the dark?\" The article tells how owls use sharp hearing, large eyes and quiet feathers to hunt at night. It never tells about owl chicks, eggs or the largest owl." },
    { id: "SK-RA1a-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Lila wants to learn how owls catch their food. Which question would help her the most?",
      choices: [
        { text: "What body parts help owls catch food?", correct: true },
        { text: "Do owls have feathers on their wings?" },
        { text: "Would an owl make a good pet for me?" },
        { text: "What sound does an owl make at night?" }
      ],
      clue: "Lila's topic is catching food. Choose the question that stays on that topic and asks for facts.",
      why: "The answer is \"What body parts help owls catch food?\" It is on Lila's topic and asks for facts. The feathers question is a yes-or-no question, a good pet is an opinion, and an owl's sound is not about catching food." },
    { id: "SK-RA1a-T3", type: "ms", points: 2, dok: 3, passages: ["p2"],
      prompt: "Malik read the article. Which TWO questions would he need a different source to answer? Choose two answers.",
      pick: 2,
      choices: [
        { text: "Where do owls build their nests?", correct: true },
        { text: "How long do owls live in the wild?", correct: true },
        { text: "Why do owls turn their heads to look around?" },
        { text: "What is an owl pellet made of?" },
        { text: "How can owls fly so quietly?" }
      ],
      clue: "Check each question against the article. The ones you cannot answer from the article need another source.",
      why: "The article does not tell where owls build their nests or how long owls live, so Malik needs another source for those. Paragraph 3 explains why owls turn their heads, paragraph 5 says a pellet is fur and bones, and paragraph 4 explains how soft feather edges keep owls quiet." },
    { id: "SK-RA1a-T4", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Malik is researching owls. Sort each question. Is it a good research question for his topic, or not?",
      cols: ["Good research question", "Not a good research question"],
      rows: [
        { text: "How do owls hear so well?", answer: 0 },
        { text: "Do owls have wings?", answer: 1 },
        { text: "Where do snowy owls live?", answer: 0 },
        { text: "What do eagles eat?", answer: 1 },
        { text: "Should my family get a pet owl?", answer: 1 }
      ],
      clue: "A good research question stays on the topic, asks for facts, and teaches you something you do not already know.",
      why: "\"How do owls hear so well?\" and \"Where do snowy owls live?\" are good research questions: they are about owls and need fact answers. \"Do owls have wings?\" is a yes-or-no question everyone already knows, \"What do eagles eat?\" is off the topic, and \"Should my family get a pet owl?\" asks for an opinion." },
    { id: "SK-RA1a-T5", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "Malik learned that scientists study owl pellets. Which question would help him learn MORE about this idea?",
      choices: [
        { text: "How do scientists tell which animal a bone came from?", correct: true },
        { text: "Do most owls hunt for their food at night?" },
        { text: "Would it feel gross to touch an owl pellet?" },
        { text: "What color are the feathers of a barn owl?" }
      ],
      clue: "A dig-deeper question stays on the idea Malik just learned and asks something the article does not explain.",
      why: "The answer is \"How do scientists tell which animal a bone came from?\" The article says scientists study pellets to learn what owls eat, but not how they do it, so this question digs deeper. The article already says most owls hunt at night, touching a pellet is about feelings, and feather color is a different idea." }
  ]
});

PP.addLesson({
  code: "3.T.RA.1.b",
  title: "Finding, choosing and sorting facts from sources",
  teach: {
    big: "Good researchers gather facts from more than one source, keep only the facts that help answer their question, and sort those facts into notes.",
    points: [
      "A source is a place you get facts. It can be printed, like a book. It can be digital, like a web page. It can be a person who knows a lot.",
      "Use more than one source. One source may tell facts that the other one leaves out. When two sources tell the same fact, you can feel more sure it is true.",
      "Start with your research question. A fact is relevant only if it helps answer that question. A fact can be true and still not help.",
      "A web page often has a site name, a date, headings and boxes on the side. Ads and links in those boxes are usually about something else, so skip them.",
      "Take notes in a notes table: your question at the top, then each fact in a few of your own words and where you found it.",
      "Sort facts into groups with headings, such as \"What it eats\" and \"Where it lives.\" If the facts tell steps, put them in order from first to last."
    ],
    words: [
      { term: "source", means: "a place you get information" },
      { term: "research question", means: "the question you want your research to answer" },
      { term: "relevant", means: "helps answer your research question" },
      { term: "notes", means: "short facts you write down to remember" },
      { term: "heading", means: "a title that tells what a group of facts is about" }
    ],
    examples: [
      {
        label: "Example: notes on frogs",
        lines: [
          "Source 1: Frogs lay their eggs in water. Tadpoles hatch from the eggs.",
          "Source 2: A tadpole breathes with gills, like a fish. Later it grows legs and loses its tail.",
          "Note card \"How a frog grows\": eggs in water → tadpoles hatch → tadpole breathes with gills → grows legs, loses tail"
        ],
        note: "Neither source tells the whole story. Putting the facts from both sources in order on one card shows the whole life of a frog."
      },
      {
        label: "Example: a notes table",
        lines: ["The same frog facts, written in a notes table."],
        figure: { src: "assets/figures/ra1b-notes-table.svg",
          alt: "A notes table. At the top: Question: How does a frog grow? Below are two columns, Fact and Where I found it. Row 1: Eggs are laid in water, Source 1. Row 2: Tadpoles hatch from the eggs, Source 1. Row 3: A tadpole has gills, Source 2. Row 4: It grows legs and loses its tail, Source 2.",
          width: 300 },
        note: "Each row holds one fact in a few words, plus where it came from. If you need to check a fact later, the last column tells you where to look."
      }
    ],
    tip: "On the test, you may read two or three sources, such as a book page, a web page and notes from a talk. You may sort facts by source, choose the fact that belongs under a note heading, or choose the detail or note that best helps answer a research question."
  },
  learn: [
    {
      show: [
        "Source 1: Peanut plants grow yellow flowers above the ground. After a flower fades, a stem grows down into the soil, and a peanut forms underground.",
        "Source 2: Georgia grows more peanuts than any other state. Farmers dig up the plants and let the peanuts dry before they are sold."
      ],
      ask: "Lucas has two note cards: \"How peanuts grow\" and \"Peanut farming in Georgia.\" Which source gives facts for each card?",
      steps: [
        "Read each heading and think about what kind of fact it needs.",
        "Check Source 1. Flowers, stems and peanuts forming underground tell how a peanut grows.",
        "Check Source 2. Georgia growing the most peanuts and farmers digging up plants are about farming."
      ],
      answer: "Facts from Source 1 go on \"How peanuts grow,\" and facts from Source 2 go on \"Peanut farming in Georgia.\""
    },
    {
      show: [
        "Source 1: A hen sits on her eggs to keep them warm. She turns them with her beak.",
        "Source 2: After about three weeks, a chick pecks its way out of the shell. At first its feathers are wet, but soon they dry and become fluffy."
      ],
      ask: "Put these notes in order: chick pecks out, hen keeps eggs warm, feathers dry and get fluffy.",
      steps: [
        "Look for time words in both sources, such as \"after about three weeks,\" \"at first\" and \"soon.\"",
        "The hen must keep the eggs warm before anything can hatch, so that comes first.",
        "The chick pecks out after three weeks. Its feathers dry after that."
      ],
      answer: "First the hen keeps the eggs warm. Next the chick pecks out. Last its feathers dry and get fluffy."
    },
    {
      show: [
        "Research question: How do woodpeckers find food?",
        "Web page: Backyard Bird Club, posted March 3, 2026",
        "Heading: Dinner Inside a Tree",
        "(1) Woodpeckers peck small holes in tree bark. (2) Beetle grubs and other insects hide under the bark. (3) A woodpecker pushes its long tongue into a hole and pulls the insects out.",
        "Heading: Drumming",
        "(4) In spring, woodpeckers drum fast on trees to tell other woodpeckers, \"This is my home.\"",
        "Side box: Ad: Bird feeders, two for the price of one!"
      ],
      ask: "Which parts of the web page help answer the research question, and which should you skip? Then write one note.",
      steps: [
        "Read the research question again. It asks how woodpeckers find food.",
        "Sentences 1, 2 and 3 tell how a woodpecker finds insects and gets them out, so they are relevant.",
        "Sentence 4 is true, but drumming is about a home, not food. The side box is an ad. Skip both.",
        "Write the fact in a few of your own words, and write where you found it."
      ],
      answer: "Use sentences 1, 2 and 3. The note: Question: How do woodpeckers find food? Fact: They peck holes in bark and pull out insects with their long tongues. Where I found it: Backyard Bird Club web page, March 3, 2026."
    }
  ],
  write: {
    prompt: [
      "Do your own research with a grown-up. Pick a topic you wonder about, and write one research question.",
      "Find facts in two different places, such as a library book, a web page you look at with a grown-up, or a person who knows a lot about the topic.",
      "Make a notes table like the one in Learn It. Write your question at the top. For each fact, write the fact in a few of your own words and where you found it. Example: Fact: They peck holes in bark. Where I found it: Backyard Bird Club web page."
    ],
    checklist: [
      "I wrote one research question.",
      "I used two different sources.",
      "I wrote only facts that help answer my question.",
      "I wrote each fact in a few of my own words.",
      "I wrote where I found each fact."
    ],
    rows: 8
  },
  parent: "When your child gets curious about something, look in two places together, such as a library book and a web page from a museum or nature center. Help your child keep a notes table with the question at the top, then each fact and where it came from. On a web page, point to the ads and side links and ask, \"Does this help answer our question?\"",
  passages: [
    { id: "p1", title: "How Pumpkins Grow", byline: "Source 1: a page from a library book", genre: "Informational text",
      paragraphs: [
        ["A pumpkin starts as a flat, white seed.", "Farmers plant the seeds in late spring or early summer, after the ground is warm."],
        ["Soon a green sprout pokes out of the soil.", "The plant grows into a long vine that spreads across the ground.", "Its big leaves shade the soil and help keep it damp."],
        ["Next, yellow flowers open on the vine.", "Bees visit the flowers and carry pollen from one flower to another.", "Only flowers that get pollen can grow into pumpkins."],
        ["A tiny green pumpkin at the bottom of the flower starts to grow.", "Over the summer, it grows bigger and slowly turns orange.", "Most pumpkins are ready to pick in the fall."]
      ] },
    { id: "p2", title: "A Visit with Farmer Ruiz", byline: "Source 2: a student's notes from a class visit", genre: "Informational text",
      paragraphs: [
        ["Our class visited a pumpkin farm in north Georgia.", "We asked the farmer, Ms. Ruiz, about her work."],
        ["Ms. Ruiz told us that bees are her best helpers.", "She keeps boxes of honeybees at the edge of her field.", "The bees fly from flower to flower and spread pollen.", "Without bees, she said, she would get very few pumpkins."],
        ["When the summer is dry, Ms. Ruiz waters the vines.", "She also pulls weeds so the pumpkins get plenty of sunlight and water."],
        ["In the fall, she picks the pumpkins when they are hard and orange.", "She cuts each stem with clippers and leaves a short piece on top.", "She told us that a pumpkin with its stem lasts longer.", "Then she sells the pumpkins at her farm stand."]
      ] },
    { id: "p3", title: "Our Moon", byline: "Source 1: a page from a science book", genre: "Informational text",
      paragraphs: [
        ["The moon is Earth's closest neighbor in space.", "It is much smaller than Earth.", "It travels around Earth again and again."],
        ["The moon does not make its own light.", "The light we see is sunlight bouncing off the moon.", "That is why the moon can look so bright in the night sky."],
        ["The moon seems to change shape during the month.", "Sometimes we see a full, round moon.", "Other times we see a thin sliver, or no moon at all.", "These changes are called phases."],
        ["The moon has no air and no wind.", "There is no rain there either.", "Its ground is covered with gray dust and rocks.", "It also has many round holes called craters."]
      ] },
    { id: "p4", title: "A Talk at the Science Center", byline: "Source 2: a student's notes from a talk", genre: "Informational text",
      paragraphs: [
        ["Last Saturday, Mr. Okafor, a scientist at the science center, talked to our class about the moon.", "We wrote down what he told us."],
        ["He said that astronauts first walked on the moon in 1969.", "They wore space suits because the moon has no air to breathe.", "Only a few people have ever walked on the moon."],
        ["The astronauts left footprints in the moon dust.", "Mr. Okafor said the footprints are probably still there.", "That is because the moon has no wind or rain to wipe them away."],
        ["The astronauts also brought moon rocks back to Earth.", "Scientists still study those rocks today.", "The rocks help them learn how the moon formed."]
      ] },
    /* PP-004: digital sources. Each web page has a site header figure (site name, menu, date),
       headings ("## ...", which count in refs but not in paragraph numbers), an article, and
       side boxes with an off-topic ad and an off-topic link. The sites are invented. */
    { id: "p5", title: "What Pumpkin Plants Need", byline: "Source 3: a web page", genre: "Informational text (web page)",
      figures: [{ after: 0, src: "assets/figures/ra1b-web-pumpkin.svg",
        alt: "The top of a web page. The site name is Kids Garden Club. The menu says Home, Plants and Bugs. The page was posted on September 8, 2026.",
        caption: "The top of the web page", width: 340 }],
      paragraphs: [
        ["## Plenty of Sun"],
        ["Pumpkin plants need a lot of sunlight.", "They grow best in a spot that gets at least six hours of sun each day.", "In the shade, the vines grow slowly and make fewer flowers."],
        ["## Water and Rich Soil"],
        ["Pumpkin plants are thirsty.", "If it does not rain, give them about one inch of water each week.", "Pour the water on the soil around the roots, not on the leaves.", "Pumpkins also grow well in soil mixed with compost.", "Compost is a mix of old leaves and food scraps that have rotted."],
        ["## Room to Grow"],
        ["Pumpkin vines spread far across the ground.", "Leave lots of space between the plants so the vines do not crowd each other."],
        ["## Fun Pumpkin Facts"],
        ["People have grown pumpkins for thousands of years.", "A pumpkin is really a fruit, because it holds seeds.", "Some giant pumpkins grown for contests weigh more than 2,000 pounds."],
        ["Box: Ad: Fall Festival tickets are on sale now!", "Come for hayrides, face painting and games."],
        ["Box: More on this site: How to Make a Bird Feeder"]
      ] },
    { id: "p6", title: "What Is It Like on the Moon?", byline: "Source 3: a web page", genre: "Informational text (web page)",
      figures: [{ after: 0, src: "assets/figures/ra1b-web-moon.svg",
        alt: "The top of a web page. The site name is Sky Watchers Club. The menu says Home, Planets and Moon. The page was posted on April 14, 2026.",
        caption: "The top of the web page", width: 340 }],
      paragraphs: [
        ["## Light on Your Feet"],
        ["The moon's pull, called gravity, is much weaker than Earth's pull.", "A person who weighs 60 pounds on Earth would weigh only about 10 pounds on the moon.", "That is why astronauts could take big, bouncing hops when they walked there."],
        ["## Long Days and Long Nights"],
        ["Daytime on the moon lasts about two weeks.", "Then nighttime lasts about two weeks too.", "In the daytime, the ground gets hotter than boiling water.", "At night, it gets colder than any place on Earth."],
        ["## How Far Away?"],
        ["The moon is about 239,000 miles from Earth.", "A car driving day and night without stopping would need more than five months to get there."],
        ["Box: Ad: Sign up for Summer Camp today!", "Swim, hike and make crafts with friends."],
        ["Box: More on this site: Make Your Own Star Chart"]
      ] }
  ],
  practice: [
    { id: "SK-RA1b-P1", type: "match", points: 2, dok: 2, passages: ["p1", "p2"],
      prompt: "Where can you find each fact? Match each fact to the source it comes from.",
      cols: ["Source 1 only", "Source 2 only", "Both sources"],
      rows: [
        { text: "Pumpkin seeds are flat and white.", answer: 0 },
        { text: "A farmer keeps boxes of bees near the field.", answer: 1 },
        { text: "Bees carry pollen from flower to flower.", answer: 2 },
        { text: "Pumpkins are picked in the fall.", answer: 2 },
        { text: "A short piece of stem helps a pumpkin last longer.", answer: 1 }
      ],
      clue: "Check each fact in both sources before you choose. A fact belongs to both only if you can find it in each one.",
      why: "Flat, white seeds are only in Source 1. The boxes of bees and the short piece of stem are only in Source 2, from Ms. Ruiz. Both sources say bees carry pollen from flower to flower, and both say pumpkins are picked in the fall." },
    { id: "SK-RA1b-P2", type: "mc", points: 1, dok: 2, passages: ["p1", "p2"],
      prompt: "Nia is making a note card with the heading \"How bees help pumpkins.\" Which fact belongs on this card?",
      choices: [
        { text: "Only flowers that get pollen can grow into pumpkins.", correct: true },
        { text: "Big leaves shade the soil and help keep it damp." },
        { text: "A pumpkin with its stem on top lasts longer." },
        { text: "Farmers plant the seeds after the ground is warm." }
      ],
      clue: "Read the heading again. Which fact explains why the bees' work matters to a pumpkin?",
      why: "The answer is \"Only flowers that get pollen can grow into pumpkins.\" Bees carry the pollen, so this fact shows why bees matter. The other facts are true, but they are about leaves, stems and planting, not bees." },
    { id: "SK-RA1b-P3", type: "order", points: 2, dok: 2, passages: ["p1", "p2"],
      prompt: "Nia used both sources to make a note card called \"A pumpkin's life.\" Put her notes in order.",
      steps: [
        "A flat, white seed is planted in warm ground.",
        "The sprout grows into a long vine.",
        "Bees carry pollen to the yellow flowers.",
        "A tiny green pumpkin grows and turns orange.",
        "The farmer cuts the stem and picks the pumpkin."
      ],
      clue: "Follow the pumpkin from the very beginning to the very end. Use facts from both sources.",
      why: "The order is: the seed is planted, the sprout grows into a vine, bees carry pollen to the flowers, a tiny green pumpkin grows and turns orange, and the farmer cuts the stem and picks it. The first four steps come from Source 1 and the last from Source 2." },
    { id: "SK-RA1b-P6", type: "ms", points: 2, dok: 2, passages: ["p5"],
      prompt: "Nia's research question is \"What do pumpkin plants need to grow well?\" Which TWO details from the web page help answer her question? Choose two answers.",
      pick: 2,
      choices: [
        { text: "They grow best with at least six hours of sun each day.", correct: true },
        { text: "If it does not rain, give them about one inch of water each week.", correct: true },
        { text: "People have grown pumpkins for thousands of years." },
        { text: "Some giant pumpkins weigh more than 2,000 pounds." },
        { text: "Fall Festival tickets are on sale now!" }
      ],
      clue: "Read Nia's question again. A detail can be true and still not help. For each detail, ask: Does this tell something a pumpkin plant needs?",
      why: "The answers are \"They grow best with at least six hours of sun each day\" and \"If it does not rain, give them about one inch of water each week.\" Sun and water are things the plants need. How long people have grown pumpkins and how heavy contest pumpkins get are fun facts, but they do not tell what a plant needs. The Fall Festival box is an ad that is trying to sell tickets." },
    { id: "SK-RA1b-P4", type: "match", points: 2, dok: 2, passages: ["p1", "p2"],
      prompt: "Nia has three note cards. Match each fact to the note card where it belongs.",
      cols: ["How a pumpkin grows", "Caring for the plants", "Picking the pumpkins"],
      rows: [
        { text: "The sprout grows into a long vine.", answer: 0 },
        { text: "Ms. Ruiz waters the vines when summer is dry.", answer: 1 },
        { text: "Ms. Ruiz pulls weeds from the field.", answer: 1 },
        { text: "Ms. Ruiz picks pumpkins that are hard and orange.", answer: 2 }
      ],
      clue: "For each fact, ask: Is the plant doing something by itself? Is the farmer helping it grow? Or is the farmer taking the pumpkin off the vine?",
      why: "The vine growing is something the plant does, so it goes under \"How a pumpkin grows.\" Watering and pulling weeds are ways the farmer helps, so they go under \"Caring for the plants.\" Picking hard, orange pumpkins goes under \"Picking the pumpkins.\"" },
    { id: "SK-RA1b-P5", type: "mc", points: 1, dok: 3, passages: ["p1", "p2"],
      prompt: "Nia wants to know how a farmer gets pumpkins ready to sell. Which source would help her MORE, and why?",
      choices: [
        { text: "Source 2, because Ms. Ruiz tells how she picks and sells pumpkins.", correct: true },
        { text: "Source 1, because it tells that pumpkins are ready to pick in the fall." },
        { text: "Source 1, because it tells how the vine spreads across the ground." },
        { text: "Source 2, because Ms. Ruiz tells how her bees spread the pollen." }
      ],
      clue: "Think about Nia's question first. Then check that the reason in your choice really answers it.",
      why: "The answer is \"Source 2, because Ms. Ruiz tells how she picks and sells pumpkins.\" Paragraph 4 of Source 2 tells how she picks them, cuts the stems and sells them at her farm stand. Source 1 only says when pumpkins are ready, and the bees are not about getting pumpkins ready to sell." },
    { id: "SK-RA1b-P7", type: "mc", points: 1, dok: 2, passages: ["p5"],
      prompt: "Nia is filling in her notes table from the web page. Which note is the BEST one to write in the Fact box?",
      stem: ["Nia's notes table", "Question: What do pumpkin plants need to grow well?", "Fact: ________", "Where I found it: Kids Garden Club web page, September 8, 2026"],
      choices: [
        { text: "The vines need lots of space so they do not crowd.", correct: true },
        { text: "The vines grow best when planted close together." },
        { text: "A pumpkin is really a fruit, because it holds seeds." },
        { text: "The site also tells how to make a bird feeder." }
      ],
      clue: "Ask two things about each note. Does it say the same thing as the web page? Does it help answer Nia's question?",
      why: "The answer is \"The vines need lots of space so they do not crowd.\" The Room to Grow section says to leave lots of space so the vines do not crowd each other, and space is something the plants need. The note about planting close together says the opposite of the web page. The fruit fact is true, but it does not tell what a plant needs. The bird feeder link is about something else." }
  ],
  test: [
    { id: "SK-RA1b-T1", type: "match", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Where can you find each fact? Match each fact to the source it comes from.",
      cols: ["Source 1 only", "Source 2 only", "Both sources"],
      rows: [
        { text: "The light from the moon is really sunlight.", answer: 0 },
        { text: "Only a few people have ever walked on the moon.", answer: 1 },
        { text: "There is dust on the moon's ground.", answer: 2 },
        { text: "The moon has round holes called craters.", answer: 0 },
        { text: "A scientist talked to a class about the moon.", answer: 1 }
      ],
      clue: "Look for each fact in both sources. Only choose Both sources when you can find the fact in each one.",
      why: "Sunlight bouncing off the moon and craters are only in Source 1. The few people who walked on the moon and the scientist's talk are only in Source 2. Both sources tell about dust on the moon: Source 1 says the ground is covered with gray dust, and Source 2 says the astronauts left footprints in the moon dust." },
    { id: "SK-RA1b-T2", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "Kofi is making a note card with the heading \"Why footprints last on the moon.\" Which fact belongs on this card?",
      choices: [
        { text: "The moon has no wind or rain to wipe things away.", correct: true },
        { text: "The moon is much smaller than Earth is." },
        { text: "The moon seems to change shape during the month." },
        { text: "The moon travels around Earth again and again." }
      ],
      clue: "The heading asks why. Find the fact that explains what keeps the footprints safe.",
      why: "The answer is \"The moon has no wind or rain to wipe things away.\" Source 2 says this is why the footprints are probably still there. The other facts are about the moon's size, its phases and its path around Earth, not footprints." },
    { id: "SK-RA1b-T3", type: "ms", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Kofi has a note card with the heading \"People on the moon.\" Which TWO facts belong on this card? Choose two answers.",
      pick: 2,
      choices: [
        { text: "Astronauts first walked on the moon in 1969.", correct: true },
        { text: "Astronauts wore space suits on the moon.", correct: true },
        { text: "The moon travels around Earth again and again." },
        { text: "Moonlight is sunlight bouncing off the moon." },
        { text: "The moon has many round holes called craters." }
      ],
      clue: "Each fact on this card must be about people going to the moon. Facts about the moon by itself go on a different card.",
      why: "\"Astronauts first walked on the moon in 1969\" and \"Astronauts wore space suits on the moon\" are about people on the moon. The other three facts tell what the moon itself is like, so they belong on a different card." },
    { id: "SK-RA1b-T5", type: "mc", points: 1, dok: 3, passages: ["p3", "p4"],
      prompt: "Kofi's note from Source 1 says, \"There are rocks on the moon's ground.\" Which fact from Source 2 adds the MOST to this note?",
      choices: [
        { text: "Astronauts brought moon rocks back for scientists to study.", correct: true },
        { text: "The moon is Earth's closest neighbor in space." },
        { text: "Only a few people have ever walked on the moon." },
        { text: "Mr. Okafor talked to the class at the science center." }
      ],
      clue: "Kofi's note is about what is on the moon's ground. The fact you add must come from Source 2 and tell more about the same thing.",
      why: "The answer is \"Astronauts brought moon rocks back for scientists to study.\" It tells more about the rocks in Kofi's note. The neighbor fact comes from Source 1, not Source 2, and the other facts are about how many people went to the moon or about the talk, not the moon's ground." },
    { id: "SK-RA1b-T6", type: "match", points: 2, dok: 2, passages: ["p6"],
      prompt: "Kofi's next research question is \"What are day and night like on the moon?\" Does each part of the web page help answer his question? Match each one.",
      cols: ["Helps answer the question", "Does not help"],
      rows: [
        { text: "Daytime on the moon lasts about two weeks.", answer: 0 },
        { text: "The moon is about 239,000 miles from Earth.", answer: 1 },
        { text: "At night, the ground gets colder than any place on Earth.", answer: 0 },
        { text: "Sign up for Summer Camp today!", answer: 1 },
        { text: "More on this site: Make Your Own Star Chart", answer: 1 }
      ],
      clue: "Keep Kofi's question in mind. A part helps only if it tells about day or night on the moon. True facts about other things do not help.",
      why: "Two parts help: how long daytime lasts and how cold it gets at night both tell what day and night are like on the moon. The distance to the moon is true, but it is not about day and night. The Summer Camp box is an ad, and the star chart box is a link to a different page." },
    { id: "SK-RA1b-T7", type: "mc", points: 1, dok: 2, passages: ["p6"],
      prompt: "Kofi is filling in his notes table from the web page. Which note is the BEST one to write in the Fact box?",
      stem: ["Kofi's notes table", "Question: Why could astronauts take big, bouncing hops on the moon?", "Fact: ________", "Where I found it: Sky Watchers Club web page, April 14, 2026"],
      choices: [
        { text: "Gravity on the moon is weaker, so people weigh less there.", correct: true },
        { text: "Gravity on the moon is stronger, so people weigh more there." },
        { text: "The ground gets hotter than boiling water in the daytime." },
        { text: "A car would need more than five months to drive there." }
      ],
      clue: "Ask two things about each note. Does it say the same thing as the web page? Does it help answer Kofi's question?",
      why: "The answer is \"Gravity on the moon is weaker, so people weigh less there.\" The Light on Your Feet section says the moon's pull is much weaker, so a person weighs much less, and that is why astronauts could take big hops. The note that says stronger gets the fact wrong. The hot ground and the long car trip are true, but they do not explain the hops." }
  ]
});

PP.addLesson({
  code: "3.T.RA.1.c",
  title: "Summing up what you learned from two sources",
  teach: {
    big: "A summary tells the most important facts from my sources in a few sentences, using my own words.",
    points: [
      "Read both sources and find the big idea of each one.",
      "Pick the facts that matter most. Leave out tiny details.",
      "Use your own words. Do not copy whole sentences.",
      "A summary tells only what the sources say. Leave out your opinions and facts that are not in your sources.",
      "Use linking words like also and in addition, or time words like in the fall, to join ideas from both sources."
    ],
    words: [
      { term: "summary", means: "a short telling of the most important ideas" },
      { term: "big idea", means: "what a source is mostly about" },
      { term: "own words", means: "saying an idea your way instead of copying it" }
    ],
    example: {
      label: "Example: two sources about sloths",
      lines: [
        "Source 1: Sloths live high in rain forest trees. They move very slowly.",
        "Source 2: Tiny green living things called algae grow in a sloth's fur. The green color helps a sloth hide among the leaves.",
        "Summary: Sloths are slow animals that live in rain forest trees, and green algae in their fur help them hide."
      ],
      note: "The summary uses one big idea from each source and joins them in one sentence. It does not add opinions like \"Sloths are cute.\""
    },
    tip: "On the test, writing questions may ask you to choose the best summary sentence, pick a fact from a second source to add to notes, or find a sentence that does not belong."
  },
  learn: [
    {
      show: [
        "Source 1: Emperor penguins live in Antarctica, one of the coldest places on Earth. Thick feathers and a layer of fat help keep them warm.",
        "Source 2: In winter, emperor penguins huddle together in large groups. They take turns standing in the warm middle of the group."
      ],
      ask: "Write two sentences that sum up both sources.",
      steps: [
        "Find the big idea of Source 1: penguins live in a very cold place, and their bodies help keep them warm.",
        "Find the big idea of Source 2: penguins huddle together to stay warm.",
        "Look for what the two ideas share. Both are about staying warm in the cold.",
        "Write the ideas in your own words, and join them with a linking word like also."
      ],
      answer: "Emperor penguins live in a very cold place where thick feathers and fat keep them warm. They also huddle together in winter to stay warm."
    },
    {
      show: [
        "Dev's summary about penguins:",
        "(1) Emperor penguins live in icy Antarctica. (2) Their feathers and fat keep them warm. (3) In winter, they also huddle in big groups. (4) I think penguins are funny when they waddle."
      ],
      ask: "Which sentence should Dev take out of his summary?",
      steps: [
        "Check each sentence against the sources. Sentences 1, 2 and 3 all tell facts from the sources.",
        "Look for words like \"I think.\" They show an opinion.",
        "A summary tells what the sources say, not what the writer thinks."
      ],
      answer: "Dev should take out sentence 4, because it is his opinion and not a fact from the sources."
    }
  ],
  write: {
    prompt: "Reread the two monarch butterfly sources from Practice, \"A Monarch Grows Up\" and \"Monarchs Fly to Mexico.\" Write a summary of 3 to 5 sentences that tells the most important facts from both sources. Or choose your own topic, find two sources about it with a grown-up, and summarize those.",
    checklist: [
      "I told the big idea of both sources.",
      "I used my own words instead of copying sentences.",
      "I included only important facts from the sources.",
      "I left out my own opinions.",
      "I used a linking word to join ideas from the two sources."
    ],
    rows: 6
  },
  parent: "After you and your child watch a short nature video and read a library book on the same animal, ask them to tell you three sentences that sum up both. Listen for facts from each one and no opinions.",
  passages: [
    { id: "p1", title: "A Monarch Grows Up", byline: "Source 1", genre: "Informational text",
      paragraphs: [
        ["A monarch butterfly starts life as a tiny egg.", "The mother lays each egg on a milkweed plant."],
        ["When the caterpillar hatches, it eats milkweed leaves.", "In fact, milkweed is the only plant a monarch caterpillar eats.", "It eats and grows for about two weeks."],
        ["Then it hangs upside down and makes a green case called a chrysalis.", "Inside, its body changes.", "After a week or two, an orange and black butterfly comes out of the case."],
        ["Milkweed has a juice that tastes bad to birds.", "Monarchs keep some of it in their bodies, even as grown butterflies.", "So many birds learn to leave them alone."]
      ] },
    { id: "p2", title: "Monarchs Fly to Mexico", byline: "Source 2", genre: "Informational text",
      paragraphs: [
        ["Each fall, many monarchs in the eastern United States begin a long trip.", "They fly south to the mountains of Mexico."],
        ["None of these butterflies has made the trip before.", "Still, they find their way to the same forests year after year.", "Scientists think the monarchs use the sun to help them find the way."],
        ["In Mexico, the monarchs rest in tall trees for the winter.", "So many butterflies cover the branches that the trees look orange."],
        ["In spring, the monarchs fly north again.", "They stop to lay eggs on milkweed along the way.", "Their children and grandchildren finish the trip north."]
      ] },
    { id: "p3", title: "Hummingbirds Up Close", byline: "Source 1", genre: "Informational text",
      paragraphs: [
        ["Hummingbirds are some of the smallest birds in the world.", "Many weigh less than a nickel.", "They are named for the humming sound their wings make."],
        ["A hummingbird's wings beat so fast that they look like a blur.", "These birds can hover in one spot, like a helicopter.", "They can even fly backward."],
        ["Hummingbirds drink nectar from flowers.", "They reach deep inside each flower with a long bill and a long tongue.", "They also eat tiny insects and spiders."],
        ["Because they fly so much, hummingbirds use a lot of energy.", "They must eat many times a day, so they visit flower after flower."]
      ] },
    { id: "p4", title: "A Hummingbird's Year", byline: "Source 2", genre: "Informational text",
      paragraphs: [
        ["Each spring, ruby-throated hummingbirds come to Georgia.", "They stay all summer long."],
        ["The mother builds a nest about the size of a walnut shell.", "She makes it from soft bits of plants.", "She holds it together with spider silk.", "Then she lays two tiny white eggs."],
        ["In late summer, the birds eat and eat to get ready for a long trip.", "Then they fly far south for the winter.", "Many of them cross a wide sea without stopping to rest."],
        ["In spring, they fly north again.", "Many come back to the same places year after year.", "Many people hang feeders filled with sugar water to greet them."]
      ] }
  ],
  practice: [
    { id: "SK-RA1c-P1", type: "mc", points: 1, dok: 3, passages: ["p1", "p2"],
      prompt: "Leah is writing a summary of both sources. Which sentence BEST sums up what the two sources say about monarchs?",
      choices: [
        { text: "Monarchs grow up eating milkweed, and many fly south to Mexico each fall.", correct: true },
        { text: "Monarch caterpillars hang upside down to make a green chrysalis." },
        { text: "I think monarchs are the most beautiful butterflies in the world." },
        { text: "Monarchs fly south to Mexico, where they rest in tall trees all winter." }
      ],
      clue: "A summary of two sources needs a big idea from each one. Check whether each choice uses both sources, and whether it tells facts or feelings.",
      why: "The answer is \"Monarchs grow up eating milkweed, and many fly south to Mexico each fall.\" It joins the big idea of Source 1 (growing up on milkweed) with the big idea of Source 2 (the trip south). The chrysalis sentence is one small detail, the sentence about resting in tall trees uses only Source 2, and the sentence that starts with I think is an opinion." },
    { id: "SK-RA1c-P2", type: "mc", points: 1, dok: 2, passages: ["p1", "p2"],
      stem: ["Leah's notes from Source 1:", "• Monarchs lay eggs on milkweed.", "• Caterpillars eat only milkweed.", "• Milkweed juice tastes bad to birds."],
      prompt: "Leah's notes are all about milkweed. Which fact from Source 2 should she add to these notes?",
      choices: [
        { text: "In spring, monarchs lay eggs on milkweed as they fly north.", correct: true },
        { text: "In Mexico, monarchs rest in tall trees all winter long." },
        { text: "Milkweed juice tastes bad to the birds that eat monarchs." },
        { text: "None of the monarchs has made the trip south before." }
      ],
      clue: "The fact must come from Source 2, fit the topic of Leah's notes, and tell her something she does not already have.",
      why: "The answer is \"In spring, monarchs lay eggs on milkweed as they fly north.\" It is the only fact from Source 2 about milkweed that is not already in Leah's notes. The fact about milkweed juice comes from Source 1 and is already in her notes, and the other facts are about the trip, not milkweed." },
    { id: "SK-RA1c-P3", type: "hottext", points: 1, dok: 2, passages: ["p1", "p2"],
      prompt: "Here is Leah's draft summary. Which sentence should she take out because it does not belong in a summary?",
      options: [
        "Monarch butterflies begin life on milkweed plants.",
        "The caterpillars eat milkweed and then change inside a chrysalis.",
        "I wish I could hold a monarch in my hand someday.",
        "In the fall, many monarchs fly all the way to Mexico."
      ],
      answer: [2], pick: 1,
      clue: "Check each sentence. Does it tell a fact from one of the sources, or does it tell about the writer?",
      why: "The answer is \"I wish I could hold a monarch in my hand someday.\" It tells Leah's wish, not a fact from the sources. The other three sentences sum up facts from Source 1 and Source 2." },
    { id: "SK-RA1c-P4", type: "dropdown", points: 1, dok: 2, passages: ["p1", "p2"],
      prompt: "Leah wants to join an idea from Source 1 to an idea from Source 2. Choose the words that best begin the second sentence.",
      text: "Monarchs start life on milkweed and grow into butterflies. {0} many of them fly south to Mexico for the winter.",
      slots: [
        { options: ["In the fall,", "For example,", "Instead,", "Before that,"], answer: 0 }
      ],
      clue: "The second sentence tells what happens later in the year. Choose the words that show when.",
      why: "The answer is \"In the fall,\" because Source 2 says monarchs begin their trip south each fall. For example would mean the sentence gives an example, instead would mean something different happens, and before that puts the trip in the wrong order." },
    { id: "SK-RA1c-P5", type: "mc", points: 1, dok: 3, passages: ["p1", "p2"],
      prompt: "Which sentence would be the best ending for Leah's summary?",
      choices: [
        { text: "Both sources show that a monarch's life is full of changes and travel.", correct: true },
        { text: "Milkweed plants grow in many fields and along the sides of roads." },
        { text: "The butterfly that comes out of the chrysalis is orange and black." },
        { text: "That is all I have to say about monarch butterflies today." }
      ],
      clue: "A good ending wraps up the big ideas. It does not add a new fact or a small detail.",
      why: "The answer is \"Both sources show that a monarch's life is full of changes and travel.\" It wraps up both big ideas: changing from egg to butterfly, and the long trip. The milkweed sentence adds a fact that is not in the sources, the orange and black sentence is a small detail, and \"That is all I have to say\" does not tell the reader anything." }
  ],
  test: [
    { id: "SK-RA1c-T1", type: "mc", points: 1, dok: 3, passages: ["p3", "p4"],
      prompt: "Kayla is writing a summary of both sources. Which sentence BEST sums up what the two sources say about hummingbirds?",
      choices: [
        { text: "Hummingbirds are tiny, fast flyers that nest in Georgia in summer and go south in winter.", correct: true },
        { text: "Hummingbirds can hover in one spot, and they drink nectar from many flowers." },
        { text: "A hummingbird mother builds a nest about the size of a walnut shell." },
        { text: "Hummingbirds are the best birds to watch because they are so cute." }
      ],
      clue: "Look for a sentence that uses a big idea from each source, tells facts, and leaves out small details.",
      why: "The answer is \"Hummingbirds are tiny, fast flyers that nest in Georgia in summer and go south in winter.\" It joins the big idea of Source 1 (tiny, fast flyers) with the big idea of Source 2 (their year of nesting and travel). The hover sentence uses only Source 1, the nest sentence is one detail, and the cute sentence is an opinion." },
    { id: "SK-RA1c-T2", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      stem: ["Kayla's notes from Source 1, under the heading \"Why hummingbirds eat so much\":", "• They use a lot of energy.", "• They must eat many times a day."],
      prompt: "Which fact from Source 2 adds the most to Kayla's notes?",
      choices: [
        { text: "In late summer, they eat and eat to get ready for a long trip.", correct: true },
        { text: "The mother builds a nest about the size of a walnut shell." },
        { text: "People hang feeders filled with sugar water in the spring." },
        { text: "They come to Georgia in spring and stay all summer." }
      ],
      clue: "Read the heading again. Find the fact from Source 2 that gives another reason hummingbirds need so much food.",
      why: "The answer is \"In late summer, they eat and eat to get ready for a long trip.\" It gives one more reason hummingbirds eat so much. The feeders are about people, and the nest and summer home are not about why the birds eat so much." },
    { id: "SK-RA1c-T3", type: "ms", points: 2, dok: 3, passages: ["p3", "p4"],
      prompt: "Kayla checks her summary sentences. Which TWO sentences are true to the sources, tell an important idea, and use her own words? Choose two answers.",
      pick: 2,
      choices: [
        { text: "Hummingbirds are very small birds that fly in amazing ways, like hovering in place.", correct: true },
        { text: "A mother hummingbird builds a small, soft nest where she lays her eggs.", correct: true },
        { text: "Many weigh less than a nickel." },
        { text: "I think hummingbirds are the cutest birds of all." },
        { text: "Hummingbirds stay in Georgia all year long." },
        { text: "Hummingbirds eat only seeds that they find on the ground." }
      ],
      clue: "Check three things for each sentence. Is it a fact the sources really give? Is it a big idea, not a tiny detail? Is it said in a new way, not copied?",
      why: "The answers are \"Hummingbirds are very small birds that fly in amazing ways, like hovering in place\" and \"A mother hummingbird builds a small, soft nest where she lays her eggs.\" Each one sums up a big idea from one source in new words. \"Many weigh less than a nickel\" is true, but it is a tiny detail copied word for word from Source 1. The cutest-birds sentence is an opinion. Source 2 says the birds fly south for the winter, and Source 1 says they drink nectar and eat insects, so the last two sentences are wrong." },
    { id: "SK-RA1c-T4", type: "hottext", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "Here is Kayla's draft summary. Which sentence should she take out because it does not belong in a summary?",
      options: [
        "Hummingbirds reach into flowers with long bills and long tongues.",
        "Many people hang feeders with sugar water to greet them.",
        "My aunt has a red bird feeder on her back porch.",
        "Many hummingbirds come back to the same places each year."
      ],
      answer: [2], pick: 1,
      clue: "A summary tells only what the sources say. Check whether each sentence comes from Source 1 or Source 2.",
      why: "The answer is \"My aunt has a red bird feeder on her back porch.\" Neither source tells about Kayla's aunt, so it does not belong. The other sentences tell facts from the two sources." },
    { id: "SK-RA1c-T5", type: "dropdown", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Kayla wants to join ideas in her summary. Choose the best word or words for each blank.",
      text: "Hummingbirds use a lot of energy, {0} they must eat many times a day. {1}, they drink nectar and eat tiny insects.",
      slots: [
        { options: ["so", "but", "or", "until"], answer: 0 },
        { options: ["To get that energy", "In early spring", "In conclusion", "Instead"], answer: 0 }
      ],
      clue: "For the first blank, ask whether the second part is a result of the first part. For the second blank, ask how the second sentence connects to the first one.",
      why: "The first blank is \"so,\" because eating many times a day is a result of using a lot of energy. The second blank is \"To get that energy,\" because nectar and insects are how hummingbirds get the energy the first sentence talks about. In early spring adds a time the sources do not give for this, in conclusion would end the summary too soon, and instead would mean they do something different from eating." }
  ]
});

PP.addLesson({
  code: "3.T.RA.2.a",
  title: "Pointing to the sentence that proves it",
  teach: {
    big: "When I answer a question, I prove it by pointing to the exact sentence in the text that shows I am right.",
    points: [
      "First decide your answer. Then go back to the text to find the proof.",
      "The best proof says the same idea as your answer. It does not just use some of the same words.",
      "A sentence can be true and still not prove your answer. Ask, \"Does this sentence show my answer?\"",
      "When you quote the text, use its exact words.",
      "You can also use proof from the text to back up an opinion about a character or a topic."
    ],
    words: [
      { term: "evidence", means: "words from the text that prove an answer" },
      { term: "support", means: "to back up or prove an idea" },
      { term: "quote", means: "to use the exact words from a text" }
    ],
    example: {
      label: "Example",
      lines: [
        "Question: How does Ben feel about the storm?",
        "Text: Thunder boomed outside. Ben pulled the blanket over his head and squeezed his eyes shut."
      ],
      note: "Ben is scared. The proof is \"Ben pulled the blanket over his head and squeezed his eyes shut.\" The sentence about thunder is true, but it tells about the storm, not about how Ben feels."
    },
    tip: "On the test, many questions have two parts. Part B asks which sentence best supports your answer to Part A. Other questions ask you to choose the sentence in the passage that shows something."
  },
  learn: [
    {
      show: ["An octopus can change the color of its skin in less than a second. This helps it hide from enemies on the rocky sea floor. An octopus has eight arms, and each arm is covered with suckers."],
      ask: "Which sentence best supports the idea that an octopus is good at hiding?",
      steps: [
        "Say the idea in your own words: an octopus can hide well.",
        "Read each sentence and ask, \"Does this show hiding?\"",
        "The sentence about arms and suckers is true, but it is not about hiding. The color sentence is close, but only the second sentence says the color change helps it hide."
      ],
      answer: "\"This helps it hide from enemies on the rocky sea floor\" best supports the idea, because it tells that the color change is for hiding."
    },
    {
      show: [
        "Maria thinks the new park is a great place for kids.",
        "Text: The new park has a tall slide and four swings. It opened in May. There is also a sandbox with shovels and buckets."
      ],
      ask: "Which sentence would NOT help Maria back up her opinion?",
      steps: [
        "Think about what would make a park great for kids: fun things to do.",
        "Check each sentence. The slide, swings and sandbox are all fun things for kids.",
        "The opening month is true, but it does not show the park is great for kids."
      ],
      answer: "\"It opened in May\" would not help Maria, because it does not show why the park is good for kids."
    }
  ],
  parent: "When your child gives an opinion about a book, ask, \"Where does it say that? Show me.\" Have them put a finger on the exact sentence.",
  passages: [
    { id: "p1", title: "Little Lights of Summer", genre: "Informational text",
      paragraphs: [
        ["On warm summer evenings in Georgia, you might see tiny lights blinking in the grass.", "These lights come from fireflies.", "Fireflies are not really flies at all.", "They are a kind of beetle."],
        ["A firefly makes light inside its body.", "The light shines from the end of its belly.", "Even though the light is bright, it gives off almost no heat.", "This kind of light is sometimes called cold light."],
        ["Fireflies use their light to talk to each other.", "Each kind of firefly has its own blinking pattern.", "A male flashes his pattern as he flies.", "A female on the ground flashes back to answer him."],
        ["Young fireflies, called larvae, can glow too.", "They live in the soil and under leaves.", "Their glow may warn other animals that they taste bad."]
      ] },
    { id: "p2", title: "The Spring Song", genre: "Literary text",
      paragraphs: [
        ["Ana sat on the stage steps and held her music in both hands.", "Her fingers would not stop shaking.", "In ten minutes, she would play the piano in front of the whole school."],
        ["Her teacher, Mr. Bell, sat down beside her.", "\"Do you remember your first lesson?\" he asked.", "Ana nodded.", "Back then, she could not play even one easy song with both hands."],
        ["\"Now you can play the whole spring song without looking at the keys,\" Mr. Bell said.", "\"You practiced every day for two months.\""],
        ["Ana took a deep breath.", "She thought about all those afternoons at the piano in her grandmother's living room.", "Slowly, her hands grew still."],
        ["When her name was called, Ana walked to the piano and sat up tall.", "She played every note of the spring song.", "As the crowd clapped, she smiled so wide that her cheeks hurt."]
      ] }
  ],
  practice: [
    { id: "SK-RA2a-P1", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence shows that a firefly's light is not hot? Choose the sentence in the passage.",
      targets: ["p1:2:1", "p1:2:2", "p1:2:3", "p1:3:1", "p1:4:1"],
      answer: ["p1:2:3"], pick: 1,
      clue: "The question asks how the light would feel, not where it comes from or what it is used for. Which sentence tells that?",
      why: "The answer is \"Even though the light is bright, it gives off almost no heat.\" Almost no heat means the light is not hot. The other sentences tell where the light comes from or what it is used for." },
    { id: "SK-RA2a-P2", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Based on the passage, how do fireflies find each other?",
        choices: [
          { text: "They flash light patterns back and forth.", correct: true },
          { text: "They follow the warm glow of other fireflies." },
          { text: "They make buzzing sounds as they fly." },
          { text: "They meet under leaves on the ground." }
        ] },
      partB: { prompt: "Which sentence from the passage best supports the answer to Part A?",
        choices: [
          { text: "\"A female on the ground flashes back to answer him.\"", correct: true },
          { text: "\"The light shines from the end of its belly.\"" },
          { text: "\"They live in the soil and under leaves.\"" },
          { text: "\"On warm summer evenings in Georgia, you might see tiny lights blinking in the grass.\"" }
        ] },
      clue: "Think about what fireflies do when they glow. For Part B, choose the sentence that shows your Part A answer actually happening, not where fireflies live or where the glow starts.",
      why: "Part A: They flash light patterns back and forth. Part B: \"A female on the ground flashes back to answer him.\" The male flashes and the female flashes back, so they find each other with light. The glow is not warm, and living under leaves is about young fireflies." },
    { id: "SK-RA2a-P3", type: "hottext", points: 2, dok: 2, passages: ["p1"],
      prompt: "Tyrone says, \"Fireflies are not the kind of bug their name says they are.\" Which TWO sentences support Tyrone's idea? Choose two sentences.",
      targets: ["p1:1:1", "p1:1:2", "p1:1:3", "p1:1:4", "p1:2:1"],
      answer: ["p1:1:3", "p1:1:4"], pick: 2,
      clue: "The name firefly has the word fly in it. Look for sentences that tell what kind of bug a firefly really is.",
      why: "The answers are \"Fireflies are not really flies at all.\" and \"They are a kind of beetle.\" Together they show the name is wrong: fireflies are beetles, not flies. The other sentences tell about the lights, not what kind of bug fireflies are." },
    { id: "SK-RA2a-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence from the passage BEST supports the idea that young fireflies can protect themselves?",
      choices: [
        { text: "\"Their glow may warn other animals that they taste bad.\"", correct: true },
        { text: "\"Young fireflies, called larvae, can glow too.\"" },
        { text: "\"Each kind of firefly has its own blinking pattern.\"" },
        { text: "\"A firefly makes light inside its body.\"" }
      ],
      clue: "Protect means keep safe. Find the sentence that tells how the glow could keep a young firefly safe.",
      why: "The answer is \"Their glow may warn other animals that they taste bad.\" A warning helps keep the larvae from being eaten. The sentence that says larvae can glow is true, but it does not tell how the glow keeps them safe." }
  ],
  test: [
    { id: "SK-RA2a-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence shows that Ana feels nervous at the beginning of the story? Choose the sentence in the passage.",
      targets: ["p2:1:1", "p2:1:2", "p2:1:3", "p2:2:1", "p2:2:3"],
      answer: ["p2:1:2"], pick: 1,
      clue: "Look for something Ana's body does that shows how she feels inside.",
      why: "The answer is \"Her fingers would not stop shaking.\" Shaking fingers show that Ana is nervous. The other sentences tell where she is, what will happen, or who sits with her." },
    { id: "SK-RA2a-T2", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How has Ana changed since her first piano lesson?",
        choices: [
          { text: "She has become a much better piano player.", correct: true },
          { text: "She has stopped feeling nervous on stage." },
          { text: "She has learned to play songs by ear." },
          { text: "She has started taking lessons from her grandmother." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"'Now you can play the whole spring song without looking at the keys,' Mr. Bell said.\"", correct: true },
          { text: "\"Ana nodded.\"" },
          { text: "\"Ana took a deep breath.\"" },
          { text: "\"Her teacher, Mr. Bell, sat down beside her.\"" }
        ] },
      clue: "Compare what Ana could do at her first lesson with what she can do now. Then find the sentence that tells what she can do now.",
      why: "Part A: She has become a much better piano player. Part B: \"'Now you can play the whole spring song without looking at the keys,' Mr. Bell said.\" At first she could not play one easy song with both hands, and now she plays a whole song. She is still nervous at the start, and her grandmother's house is only where she practiced." },
    { id: "SK-RA2a-T3", type: "hottext", points: 2, dok: 3, passages: ["p2"],
      prompt: "Which TWO sentences show that Ana feels calm and sure of herself before she plays? Choose two sentences.",
      targets: ["p2:1:2", "p2:1:3", "p2:4:3", "p2:5:1", "p2:5:3"],
      answer: ["p2:4:3", "p2:5:1"], pick: 2,
      clue: "Find sentences from before she plays. Look for what her hands and body do once she feels better.",
      why: "The answers are \"Slowly, her hands grew still.\" and \"When her name was called, Ana walked to the piano and sat up tall.\" Still hands and sitting up tall show she is calm and sure. The shaking fingers show she is nervous, the sentence about playing in ten minutes only tells what will happen, and smiling as the crowd claps happens after she plays." },
    { id: "SK-RA2a-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Leo says, \"Ana's hard work helped her do well.\" Which sentence from the story BEST supports Leo's opinion?",
      choices: [
        { text: "\"'You practiced every day for two months.'\"", correct: true },
        { text: "\"In ten minutes, she would play the piano in front of the whole school.\"" },
        { text: "\"Her teacher, Mr. Bell, sat down beside her.\"" },
        { text: "\"As the crowd clapped, she smiled so wide that her cheeks hurt.\"" }
      ],
      clue: "Leo's opinion is about what Ana did to get ready. Which sentence shows that?",
      why: "The answer is \"'You practiced every day for two months.'\" Practicing every day is the hard work Leo is talking about. The clapping shows she did well, but it does not show hard work." }
  ]
});

PP.addLesson({
  code: "3.T.RA.2.b",
  title: "Is this a good source?",
  teach: {
    big: "A good source is one I can trust, and it is also about my topic.",
    points: [
      "A trustworthy source comes from people who know the topic well, such as scientists, museums, libraries or park rangers.",
      "Be careful with ads. An ad wants you to buy something, so it may only tell the good parts or make things sound bigger than they are.",
      "A guess or an opinion is not the same as a fact that has been checked.",
      "Made-up stories are fun to read, but they are not the place to find facts.",
      "A source must also be on your topic. A great book about frogs will not help a report about snakes."
    ],
    words: [
      { term: "trustworthy", means: "made by people who know the facts, so you can believe it" },
      { term: "on topic", means: "about the same thing you are learning about" },
      { term: "ad", means: "words or pictures made to get people to buy something" }
    ],
    example: {
      label: "Example: the topic is how bats find food at night",
      lines: [
        "Source 1: a nature center web page about how bats hunt",
        "Source 2: an ad for a bat-shaped kite",
        "Source 3: a nature center web page about how birds build nests"
      ],
      note: "Source 1 is trustworthy and on topic, so it is the best choice. Source 2 is trying to sell a kite. Source 3 is trustworthy, but it is about birds, not bats."
    },
    tip: "On the test, you may be asked which source would be the most trustworthy for a report, or which passage would be more useful for a student's topic."
  },
  learn: [
    {
      show: [
        "Carmen is writing about what alligators eat. She found three sources:",
        "1. a book by a scientist who studies alligators",
        "2. an ad for an alligator pool float",
        "3. her cousin's guess about what alligators like"
      ],
      ask: "Which source can Carmen trust the most?",
      steps: [
        "Ask, \"Who made this source? Do they know a lot about alligators?\" A scientist who studies alligators does.",
        "Ask, \"Is this source trying to sell something?\" The ad is, so it is not for facts.",
        "Ask, \"Is this a checked fact or just a guess?\" Her cousin's idea is only a guess."
      ],
      answer: "Carmen can trust the book by the scientist who studies alligators the most."
    },
    {
      show: [
        "Diego is writing about how tornadoes form. He found two sources:",
        "1. a weather scientist's article about how tornadoes form",
        "2. a weather scientist's article about how rainbows form"
      ],
      ask: "Both sources are trustworthy. Which one should Diego use?",
      steps: [
        "Both were written by a weather scientist, so both can be trusted.",
        "Now check the topic. Diego needs facts about tornadoes.",
        "Only the first article is about tornadoes. The rainbow article is off topic."
      ],
      answer: "Diego should use the article about how tornadoes form, because it is trustworthy and on his topic."
    }
  ],
  parent: "When you see an ad, a cereal box or a sign together, ask, \"Who made this? Do they want to sell us something? Would we trust it for a school report?\"",
  passages: [],
  practice: [
    { id: "SK-RA2b-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Carlos is writing a report about how alligators care for their babies. Which source would be the MOST trustworthy?",
      choices: [
        { text: "a wildlife center web page about alligator nests", correct: true },
        { text: "an ad that sells a stuffed alligator toy for kids" },
        { text: "a funny comic book about an alligator who can talk" },
        { text: "a guess that his friend made about alligators at lunch" }
      ],
      clue: "Ask who made each source. Do they know about real alligators? Are they selling something or just guessing?",
      why: "The answer is \"a wildlife center web page about alligator nests.\" People at a wildlife center study real animals. The ad wants to sell a toy, the comic book is made up, and the friend's idea is only a guess." },
    { id: "SK-RA2b-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Priya's report is about how hurricanes form. Which source is on her topic?",
      choices: [
        { text: "a weather scientist's article about how hurricanes form", correct: true },
        { text: "a weather scientist's article about how snowflakes form" },
        { text: "a news story about a town cleaning up after a hurricane" },
        { text: "a science book chapter about how volcanoes form" }
      ],
      clue: "All of these may be trustworthy. Read Priya's topic again, word by word, and find the source that matches all of it.",
      why: "The answer is \"a weather scientist's article about how hurricanes form.\" It is about exactly what Priya wants to know. Snowflakes and volcanoes are different topics, and the news story tells what happened after a hurricane, not how it formed." },
    { id: "SK-RA2b-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Jayden is writing a report about bats. Is each source trustworthy or not?",
      cols: ["Trustworthy", "Not trustworthy"],
      rows: [
        { text: "a library book by a scientist who studies bats", answer: 0 },
        { text: "an ad that says a bat house will bring \"a hundred bats overnight!\"", answer: 1 },
        { text: "a museum web page about how bats find food", answer: 0 },
        { text: "a classmate's guess about what bats eat", answer: 1 }
      ],
      clue: "For each source, ask: Does an expert stand behind it? Or is it trying to sell, or only a guess?",
      why: "The scientist's library book and the museum web page are trustworthy because experts made them. The ad is trying to sell a bat house and makes a big promise, and the classmate's idea is only a guess, so they are not trustworthy." },
    { id: "SK-RA2b-P4", type: "ms", points: 2, dok: 3, passages: [],
      prompt: "Jamal is writing a report about how peach trees are grown in Georgia. Which TWO sources are both trustworthy AND on his topic? Choose two answers.",
      pick: 2,
      choices: [
        { text: "a Georgia college's farming guide about growing peach trees", correct: true },
        { text: "a library book by a Georgia fruit farmer about caring for peach trees", correct: true },
        { text: "an ad for a peach smoothie at a snack shop" },
        { text: "a library book by a Georgia fruit farmer about growing apple trees" },
        { text: "a poem a student wrote about eating a sweet peach" }
      ],
      clue: "Check two things for every source. First, can you trust who made it? Second, is it about growing peach trees?",
      why: "The college farming guide and the farmer's book about peach trees are both trustworthy and on topic. The smoothie ad is selling something, the poem is not a fact source, and the apple tree book is trustworthy but off topic." },
    { id: "SK-RA2b-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Ella's report is about insects. She found a toy ad that says, \"Our bug kit has every bug in the world!\" Why is this NOT a good source?",
      choices: [
        { text: "The ad is trying to sell something, so it may stretch the truth.", correct: true },
        { text: "The ad is about bugs, and bugs are not part of her topic." },
        { text: "The ad is too new to have any true facts in it at all." },
        { text: "The ad was not written by a kid who is her own age." }
      ],
      clue: "Think about why an ad is made. What does the company want readers to do?",
      why: "The answer is \"The ad is trying to sell something, so it may stretch the truth.\" No kit could hold every bug in the world. The ad is on her topic, being new does not make something false, and kids her age are not experts." }
  ],
  test: [
    { id: "SK-RA2b-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Owen is writing about what sea turtles eat. Which source would be the MOST trustworthy?",
      choices: [
        { text: "an aquarium web page written by sea turtle experts", correct: true },
        { text: "a page where a person tells about seeing turtles on vacation" },
        { text: "an ad for a sea turtle beach towel at a gift shop" },
        { text: "a post where someone guesses what sea turtles eat" }
      ],
      clue: "Ask who made each source and why. Seeing something once is not the same as studying it.",
      why: "The answer is \"an aquarium web page written by sea turtle experts.\" Experts at an aquarium study real sea turtles. A person who saw turtles on vacation is not an expert and did not study what they eat, the towel ad is selling something, and the post is only a guess." },
    { id: "SK-RA2b-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Grace is writing a report about how honeybees make honey. Which source would be the MOST useful?",
      choices: [
        { text: "a beekeeper's book chapter about how bees make honey", correct: true },
        { text: "a scientist's article about how ants build their homes" },
        { text: "a cookbook page with recipes that use honey" },
        { text: "a museum page about how people made candles long ago" }
      ],
      clue: "Grace needs facts about how honey is made. Find the source about that exact topic.",
      why: "The answer is \"a beekeeper's book chapter about how bees make honey.\" It is trustworthy and on her topic. The ant article is about a different animal, the cookbook tells how people use honey, not how bees make it, and the candle page is off topic." },
    { id: "SK-RA2b-T3", type: "match", points: 2, dok: 3, passages: [],
      prompt: "Rosa is writing a report about how frogs grow. Match each source to the group it belongs in.",
      cols: ["Trustworthy and on topic", "Trustworthy but not on topic", "Not trustworthy"],
      rows: [
        { text: "a science center book about the life of a frog", answer: 0 },
        { text: "a science center book about how snakes shed their skin", answer: 1 },
        { text: "a toy ad that says its frog grows \"bigger than a dog!\"", answer: 2 },
        { text: "a nature magazine article about tadpoles turning into frogs", answer: 0 },
        { text: "a classmate's guess about how long frogs live", answer: 2 }
      ],
      clue: "Ask two questions about each source. Can I trust who made it? Is it about how frogs grow?",
      why: "The science center frog book and the nature magazine article about tadpoles are trustworthy and on topic. The science center snake book is trustworthy but not about frogs. The toy ad and the classmate's guess are not trustworthy." },
    { id: "SK-RA2b-T4", type: "ms", points: 2, dok: 3, passages: [],
      prompt: "Ben's report is about why leaves change color in the fall. Which TWO sources should he use? Choose two answers.",
      pick: 2,
      choices: [
        { text: "a science museum web page about why leaves change color", correct: true },
        { text: "a library book by a tree scientist about leaves in the fall", correct: true },
        { text: "a store ad for fall leaf decorations" },
        { text: "a science museum web page about how seeds sprout" },
        { text: "a page where a kid tells about jumping in a pile of fall leaves" }
      ],
      clue: "Each source Ben uses must pass two checks: it can be trusted, and it is about leaves changing color.",
      why: "The science museum page about leaves and the tree scientist's book are both trustworthy and on topic. The store ad is selling decorations, the kid's page tells about fun with leaves but not why they change color and is not from an expert, and the seed page is trustworthy but off topic." },
    { id: "SK-RA2b-T5", type: "mc", points: 1, dok: 3, passages: [],
      prompt: "Mia is writing about the moon. She found a web page that says, \"I think the moon might be made of rock, but I'm not sure.\" Why is this a weak source?",
      choices: [
        { text: "It is only a guess, and the writer says they are not sure.", correct: true },
        { text: "The moon is not made of rock, so the page is wrong." },
        { text: "Web pages are never trustworthy, so she cannot use it." },
        { text: "It is about the moon, which is not on Mia's topic." }
      ],
      clue: "Read the words on the page. Do they sound like a checked fact, or like someone who does not really know?",
      why: "The answer is \"It is only a guess, and the writer says they are not sure.\" Words like I think and I'm not sure show a guess, not a checked fact. The moon really is made of rock, many web pages from museums and scientists can be trusted, and the moon is Mia's topic." }
  ]
});
