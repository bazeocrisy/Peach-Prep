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
      "After you learn something, ask a new question. A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new, to learn more."
    ],
    words: [
      { term: "topic", means: "what your research is about" },
      { term: "research", means: "looking for facts to learn about a topic" },
      { term: "dig-deeper question", means: "a new question that grows out of something you just learned" },
      { term: "clarifying question", means: "a question that clears up a word or idea you read but did not understand" }
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
    },
    /* B3 (author b3b): a clarifying-question example (coverage matrix: "clarify" was not modelled). */
    {
      show: ["In winter, an arctic fox has thick white fur. In spring, it sheds its winter coat and grows a thin brown one."],
      ask: "Mo read this and did not understand the word sheds. What clarifying question can he ask? Once he understands, what dig-deeper question could he ask?",
      steps: [
        "Find the part that is not clear. Mo knows what fur is, but not what sheds means.",
        "Ask a clarifying question about just that part: \"What does it mean when an animal sheds its coat?\"",
        "Once he learns that the old fur falls out, he can ask something new that the text does not tell. That is a dig-deeper question."
      ],
      answer: "Clarifying question: \"What does it mean when an animal sheds its coat?\" Dig-deeper question: \"Why does the fox grow a white coat for winter and a brown one for summer?\""
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
  parent: "When your child wonders about something, write the question down together. Look up the answer in a library book, then ask, \"What do we want to know next?\" Choosing a topic and writing questions about it is checked by you, with the writing checklist or the sample on the last practice set. The site never scores that writing.",
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
      ] },
    /* B3 (expansion 2026-10-22, author b3b): p3 is used only by core set 2, p4 only by core set 3.
       Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "Hic! Why We Hiccup", genre: "Informational text",
      paragraphs: [
        ["Have you ever had the hiccups?", "Babies get them, kids get them, and grown-ups get them, too.", "Even some animals, like dogs and cats, can hiccup."],
        ["A hiccup starts with your diaphragm.", "The diaphragm is a big muscle under your lungs.", "It helps you breathe in and out."],
        ["Sometimes the diaphragm suddenly squeezes on its own.", "You gulp in air very fast.", "Then the opening between your vocal cords snaps shut.", "That snap makes the hic sound."],
        ["Eating too fast can bring on hiccups.", "So can drinking a fizzy drink or getting very excited."],
        ["Most hiccups stop on their own after a few minutes.", "Some people hold their breath or sip cold water to try to stop them.", "Scientists are still not sure why our bodies hiccup at all."]
      ] },
    { id: "p4", title: "Older Than the Dinosaurs", genre: "Informational text",
      paragraphs: [
        ["On spring nights, horseshoe crabs crawl out of the ocean onto sandy beaches.", "They have lived on Earth for more than 400 million years.", "They were here long before the first dinosaurs."],
        ["A horseshoe crab is not really a crab.", "It is more closely related to spiders and scorpions.", "Its hard shell is shaped like a horseshoe, and that is how it got its name."],
        ["Each spring, a female digs nests in the wet sand.", "She lays thousands of tiny green eggs.", "Shorebirds called red knots stop at the beaches to eat the eggs.", "The birds need this food to finish their long trip north."],
        ["Horseshoe crabs help people, too.", "Their blood is blue!", "Doctors use something in it to check that medicines and shots are free of harmful germs."]
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
  /* ---------- B3 (expansion 2026-10-22, author b3b; docs/expansion-2026-10-22/01-architecture.md §2.2-2.3) ----------
     core: fifteen items in three sets of five. Set 1 reuses the Try items P5 and P4 by { ref } and adds C02 and
     C04 on "Busy Honeybees" and C05 on a short stem. Set 2 uses p3 ("Hic! Why We Hiccup", science) plus two
     short stems (sports, school). Set 3 uses p4 ("Older Than the Dinosaurs", nature) plus short stems
     (community, family) and one constructed response.
     The official wording asks for questions about a SELF-SELECTED topic. A selected-response item can only show
     that a child recognises a good question about a topic someone else chose, so that part is shown by C14 (cr,
     never scored; the child and a grown-up compare it with a sample and a checklist) and by the existing
     write task, which a grown-up checks. Nothing here scores open-ended work automatically.
     Practice Together is P1-P3. Hints and Show me how for P1-P5 are in addons below.
     Author log: docs/expansion-2026-10-22/batches/B3-b3b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-RA1a-P5" },
      { id: "SK-RA1a-C02", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: ["p1"],
        stem: ["After reading \"Busy Honeybees,\" Maya wants to research how worker bees find their food."],
        prompt: "Build a research question for Maya. Choose the best answer for each blank.",
        text: "{0} worker bees {1}?",
        slots: [
          { options: ["How do", "Do", "Is it true that"], answer: 0 },
          { options: ["choose which flowers to visit", "build their wax cells", "look the cutest of all bugs"], answer: 0 }
        ],
        clue: "A research question asks about your topic and leads to an answer you can look up.",
        hints: [
          "A research question asks about your topic and leads to an answer you can look up.",
          "Say Maya's topic in your own words. Then try each choice in each blank and read the whole question out loud.",
          "\"Build their wax cells\" is a fact about bees, but it is not about how worker bees find their food. Check the other choices in each blank."
        ],
        how: [
          "Maya's topic is how worker bees find their food.",
          "\"Do\" and \"Is it true that\" start questions that can be answered with yes or no. \"How do\" leads to a bigger answer with facts.",
          "Choosing which flowers to visit is part of finding food. Looking cute is an opinion, and building wax cells is a different topic.",
          "The answers are How do and choose which flowers to visit: \"How do worker bees choose which flowers to visit?\""
        ],
        misconception: "A common mix-up is choosing a yes-or-no start. \"Do worker bees ...\" can be answered with one word, so Maya would learn very little.",
        why: "The answers are How do and choose which flowers to visit. \"How do worker bees choose which flowers to visit?\" is on Maya's topic and needs a fact answer. Do and Is it true that lead to yes or no, wax cells are a different topic, and looking the cutest is an opinion." },
      { ref: "SK-RA1a-P4" },
      { id: "SK-RA1a-C04", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.a"], passages: ["p1"],
        stem: ["Ana read this sentence in \"Busy Honeybees\": \"As they move from flower to flower, they carry pollen.\"", "She did not know what pollen is. But the question she wrote down was \"Why do bees like flowers?\""],
        prompt: "Which question should Ana ask instead, to clear up what she did not understand?",
        choices: [
          { text: "What is pollen, and what does it look like?", correct: true },
          { text: "How do bees carry pollen on their bodies from flower to flower?" },
          { text: "Why do plants need pollen to make fruit and seeds?" },
          { text: "Do bees carry pollen to every flower in a garden?" }
        ],
        clue: "A clarifying question clears up a word or idea you read but did not understand.",
        hints: [
          "A clarifying question clears up a word or idea you read but did not understand.",
          "Reread the sentence Ana read, and find the word she did not know.",
          "The question about plants making fruit asks something new to learn more, so it digs deeper instead of clearing up the word. Check each choice that is left."
        ],
        how: [
          "Ana did not know what pollen is. A clarifying question asks about exactly that.",
          "The answer is \"What is pollen, and what does it look like?\"",
          "How bees carry pollen and whether they carry it to every flower both skip over the part she did not understand. Why plants need pollen digs deeper, which is better once she knows the word."
        ],
        misconception: "A common mix-up is asking a dig-deeper question before clearing up the confusing word. First make sure you understand what you read.",
        why: "The answer is \"What is pollen, and what does it look like?\" It asks about the word Ana did not know. The other questions use the word pollen as if she already understood it: how bees carry it, whether they carry it everywhere, and why plants need it." },
      { id: "SK-RA1a-C05", type: "hottext", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [],
        stem: ["Dion chose his own topic for a library project: how trains stay on their tracks.", "He wrote five questions."],
        prompt: "Which TWO questions fit Dion's topic? Choose two questions.",
        options: [
          "How do train wheels stay on the rails?",
          "What keeps a train from tipping over on a sharp curve?",
          "When was the first train built in Georgia?",
          "How do airplanes stay up in the sky?",
          "How much does a ticket for a long train ride cost?"
        ],
        answer: [0, 1], pick: 2,
        clue: "A question fits your topic when its answer would help you learn about that exact topic.",
        hints: [
          "A question fits your topic when its answer would help you learn about that exact topic.",
          "Say Dion's topic in your own words. Then read each question. Choose two.",
          "The airplane question asks how something stays up, but it is about airplanes, not trains. Check each question that is left."
        ],
        how: [
          "Dion's topic is not just trains. It is how trains stay on their tracks.",
          "Wheels staying on the rails and not tipping over on a curve are both about staying on the track.",
          "The answers are \"How do train wheels stay on the rails?\" and \"What keeps a train from tipping over on a sharp curve?\"",
          "The first train in Georgia and ticket prices are about trains, but not about staying on the tracks. Airplanes are a different topic."
        ],
        misconception: "A common mix-up is choosing any question with the right word in it, like train. Check that it fits the exact topic.",
        why: "The answers are \"How do train wheels stay on the rails?\" and \"What keeps a train from tipping over on a sharp curve?\" Both are about how trains stay on their tracks. The first train in Georgia and ticket prices are about trains but not that topic, and airplanes are a different topic." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-RA1a-C06", type: "hottext", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: ["p3"],
        prompt: "Jamal's research question is \"Which living things can get the hiccups?\" Which TWO sentences in the article answer his question? Choose two sentences.",
        targets: ["p3:1:1", "p3:1:2", "p3:1:3", "p3:2:1", "p3:5:1", "p3:5:2"],
        answer: ["p3:1:2", "p3:1:3"], pick: 2,
        clue: "To check whether a text answers your question, find the exact sentences that give the answer.",
        hints: [
          "To check whether a text answers your question, find the exact sentences that give the answer.",
          "Look through the article for each sentence that tells who or what gets hiccups. Choose two.",
          "The first sentence asks the reader a question. It does not tell who gets hiccups. Check the other sentences."
        ],
        how: [
          "Jamal wants to know which living things get hiccups, so the answer must name them.",
          "One sentence names babies, kids and grown-ups. The next one names animals like dogs and cats.",
          "The answers are \"Babies get them, kids get them, and grown-ups get them, too.\" and \"Even some animals, like dogs and cats, can hiccup.\"",
          "The sentence about people holding their breath tells what people do to stop hiccups, not who gets them."
        ],
        misconception: "A common mix-up is choosing a sentence that only uses a word from the question. Check that it really gives the answer.",
        why: "The answers are \"Babies get them, kids get them, and grown-ups get them, too.\" and \"Even some animals, like dogs and cats, can hiccup.\" Together they name the living things that get hiccups. The other sentences tell what a hiccup is, how long it lasts and what people try, not who gets them." },
      { id: "SK-RA1a-C07", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: ["p3"], pick: 2,
        prompt: "Kim read the whole article. Which TWO questions are clarifying questions about something in it?",
        choices: [
          { text: "What are vocal cords, and where are they in my body?", correct: true },
          { text: "What does the article mean when it says the diaphragm squeezes on its own?", correct: true },
          { text: "Do horses get the hiccups too, or only dogs and cats?" },
          { text: "Can a person get the hiccups while sleeping at night?" },
          { text: "Are hiccups the most annoying thing that can happen?" }
        ],
        clue: "A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new to learn more.",
        hints: [
          "A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new to learn more.",
          "For each question, find the part of the article it is about, if there is one. Choose two.",
          "The question about the most annoying thing asks for an opinion, so it is not a clarifying question. Check each question that is left."
        ],
        how: [
          "The article uses the words vocal cords but never tells what they are. A question about them clears that up.",
          "It also says the diaphragm squeezes \"on its own,\" which may be hard to picture. Asking what that means clears it up.",
          "The answers are \"What are vocal cords, and where are they in my body?\" and \"What does the article mean when it says the diaphragm squeezes on its own?\"",
          "The questions about horses and about sleeping ask something new that the article does not cover, so they dig deeper."
        ],
        misconception: "A common mix-up is thinking every question about the article clarifies it. A clarifying question is about a part you read but did not understand.",
        why: "The answers are \"What are vocal cords, and where are they in my body?\" and \"What does the article mean when it says the diaphragm squeezes on its own?\" Both are about parts of the article that may not be clear. The horse and sleeping questions dig deeper, and the most annoying thing is an opinion." },
      { id: "SK-RA1a-C08", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.a"], passages: ["p3"],
        stem: ["Jamal read paragraph 4. Then he wrote this dig-deeper question: \"Can eating too fast bring on hiccups?\"", "But the article already answers that question."],
        prompt: "Which question would be a better dig-deeper question for Jamal?",
        choices: [
          { text: "Why does eating too fast make the diaphragm squeeze?", correct: true },
          { text: "Can drinking a fizzy drink bring on hiccups, too?" },
          { text: "Why do people yawn when they get very sleepy?" },
          { text: "Is it rude to eat your food too fast at the table?" }
        ],
        clue: "A dig-deeper question stays on the idea you just learned and asks something the text does not tell you yet.",
        hints: [
          "A dig-deeper question stays on the idea you just learned and asks something the text does not tell you yet.",
          "Reread paragraph 4, and say what Jamal learned there.",
          "Paragraph 4 already says that fizzy drinks can bring on hiccups, so that question would not teach Jamal anything new. Check each choice that is left."
        ],
        how: [
          "Jamal learned that eating too fast can bring on hiccups. The article does not say why.",
          "A good dig-deeper question stays on that idea and asks what the article leaves out.",
          "The answer is \"Why does eating too fast make the diaphragm squeeze?\"",
          "Yawning is a new question, but it leaves the idea he just learned. Whether eating fast is rude asks for an opinion."
        ],
        misconception: "A common mix-up is choosing any new question. A dig-deeper question grows out of what you just learned.",
        why: "The answer is \"Why does eating too fast make the diaphragm squeeze?\" It stays on what Jamal learned and asks what the article does not explain. The fizzy drink question is already answered, yawning is a different idea, and being rude is an opinion." },
      { id: "SK-RA1a-C09", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.a"], passages: [],
        stem: ["Imani plays basketball. She chose her own research topic: why a basketball bounces.", "Her first question was \"Is basketball the best sport?\""],
        prompt: "Which question should Imani write instead, so that she can research her topic?",
        choices: [
          { text: "What makes a basketball bounce back up after it hits the floor?", correct: true },
          { text: "Who is the best basketball player of all time?" },
          { text: "Does a basketball bounce when you drop it on the floor?" },
          { text: "Do I like playing basketball more than playing soccer?" }
        ],
        clue: "A research question asks something you can find out by reading, watching or asking an expert.",
        hints: [
          "A research question asks something you can find out by reading, watching or asking an expert.",
          "Say Imani's topic in your own words. Then read each choice.",
          "\"Do I like playing basketball more than playing soccer?\" is about Imani's own feelings, so no book could answer it. Check each choice that is left."
        ],
        how: [
          "Imani's topic is why a basketball bounces. \"Is basketball the best sport?\" asks for an opinion, and it is not about bouncing.",
          "A better question is about bouncing and has a fact answer that she can look up.",
          "The answer is \"What makes a basketball bounce back up after it hits the floor?\"",
          "The best player of all time is an opinion, even though it starts with who. Whether a ball bounces is a yes-or-no question that she already knows."
        ],
        misconception: "A common mix-up is thinking a question that starts with who, what or how must ask for facts. \"Who is the best ...?\" still asks for an opinion.",
        why: "The answer is \"What makes a basketball bounce back up after it hits the floor?\" It is on her topic and asks for facts. The best player is an opinion, whether a ball bounces is a yes-or-no question she knows, and what she likes is about her feelings." },
      { id: "SK-RA1a-C10", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.a"], passages: [],
        stem: ["Nia and Leo are researching how lunch is made at their school.", "Nia asked: \"How do the cooks make lunch for 400 students in one morning?\"", "Leo asked: \"Do the cooks make our lunch at school?\""],
        prompt: "Whose question would help them more with their research, and why?",
        choices: [
          { text: "Nia's, because its answer would be full of facts that they do not know yet.", correct: true },
          { text: "Leo's, because a yes-or-no answer is quick and easy to find." },
          { text: "Leo's, because it is about their own school, so it fits the topic better." },
          { text: "Nia's, because it has a number in it, so it must ask for a fact." }
        ],
        clue: "A good research question leads to an answer that teaches you something new.",
        hints: [
          "A good research question leads to an answer that teaches you something new.",
          "Read both questions again. Then read the reason in each choice, not only the name.",
          "Having a number in it does not make a question better. Check each choice that is left."
        ],
        how: [
          "Leo's question can be answered with one word, yes or no, so they would learn very little.",
          "Nia's question needs a long answer about steps, tools and timing. That teaches them something new.",
          "The answer is \"Nia's, because its answer would be full of facts that they do not know yet.\"",
          "Both questions are about their own school, and a quick answer is not the goal of research."
        ],
        misconception: "A common mix-up is picking the question that is easiest to answer. Research questions should lead to answers that teach you more.",
        why: "The answer is \"Nia's, because its answer would be full of facts that they do not know yet.\" Leo's yes-or-no question would teach them very little. Both questions are about their school, and a number does not make a question better." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-RA1a-C11", type: "order", points: 2, dok: 3, std: ["3.T.RA.1.a"], passages: ["p4"],
        prompt: "Ava asked four questions about horseshoe crabs. Each new question grew out of the answer to the one before it. Put her questions in order, from first to last.",
        steps: [
          "When do horseshoe crabs come out of the ocean onto beaches?",
          "What do horseshoe crabs do on the beach in the spring?",
          "What animals eat horseshoe crab eggs?",
          "How far do red knots fly on their trip north?"
        ],
        clue: "In a chain of dig-deeper questions, each new question grows out of the answer to the one before it.",
        hints: [
          "In a chain of dig-deeper questions, each new question grows out of the answer to the one before it.",
          "Find the question that could start the chain. Then use the article to find its answer, and look for the question that grows out of that answer.",
          "The question about red knots flying north could only come after Ava learned about red knots. Use the article to put the other three in order."
        ],
        how: [
          "First, Ava asks when horseshoe crabs come onto beaches. The article answers: on spring nights.",
          "That answer leads to what they do on the beach in the spring. The article answers: the females dig nests and lay eggs.",
          "The eggs lead to what animals eat them: red knots. Then she asks how far red knots fly north, which the article does not tell.",
          "The order is: when they come onto beaches, what they do there in the spring, what eats the eggs, how far red knots fly."
        ],
        misconception: "A common mix-up is putting the biggest or most interesting question first. Each question must grow out of the answer before it.",
        why: "The order is: when horseshoe crabs come onto beaches, what they do there in the spring, what animals eat the eggs, and how far red knots fly north. Each answer in the article (spring nights, eggs, red knots) leads to the next question, and the last one goes past the article." },
      { id: "SK-RA1a-C12", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: ["p4"],
        stem: ["Ava's next question is \"How big can a horseshoe crab grow?\""],
        prompt: "Complete the sentence about Ava's research. Choose the best answer for each blank.",
        text: "Ava will need {0}, because the article {1}.",
        slots: [
          { options: ["another source", "to read paragraph 2 again", "to ask a friend what they think"], answer: 0 },
          { options: ["never tells how big they grow", "tells it in paragraph 2", "is too old to trust"], answer: 0 }
        ],
        clue: "Before you research, check whether the text you have already answers your question.",
        hints: [
          "Before you research, check whether the text you have already answers your question.",
          "Look through every paragraph of the article for anything about how big a horseshoe crab is.",
          "Asking a friend what they think gives an opinion, not a fact. Check the other choices in each blank."
        ],
        how: [
          "Paragraph 2 tells what the shell is shaped like, but not how big the crab is. No other paragraph tells its size either.",
          "When a text does not answer your question, you need another source, such as a science book or an expert.",
          "The answers are another source and never tells how big they grow.",
          "Nothing in the article says it is old or hard to trust. The problem is only that it does not cover size."
        ],
        misconception: "A common mix-up is thinking a paragraph about the shell must also tell its size. Check that the words really answer your question.",
        why: "The answers are another source and never tells how big they grow. The article tells about the shell's shape, but never the crab's size, so Ava must look somewhere else. Paragraph 2 does not answer it, a friend's opinion is not a fact, and nothing says the article cannot be trusted." },
      { id: "SK-RA1a-C13", type: "match", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [],
        stem: ["Omar read this sign at Stone Creek Park:", "\"This stone bridge was built in 1936 by young workers in the CCC. They cut the stone from the hill behind you.\""],
        prompt: "Omar wrote four questions. Is each one a clarifying question or a dig-deeper question? Match each question.",
        cols: ["clears up something I did not understand", "digs deeper to learn more"],
        rows: [
          { text: "What does CCC stand for?", answer: 0 },
          { text: "What other bridges did these workers build in Georgia?", answer: 1 },
          { text: "Which hill does the sign mean when it says \"the hill behind you\"?", answer: 0 },
          { text: "How did the workers move such heavy stones without big trucks?", answer: 1 }
        ],
        clue: "A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new to learn more.",
        hints: [
          "A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new to learn more.",
          "Reread the sign, and find any words or parts that a reader might not understand.",
          "The question about what CCC stands for is about letters on the sign that the sign never explains. Decide the other three the same way."
        ],
        how: [
          "The sign uses the letters CCC but never says what they mean, and \"the hill behind you\" may not be clear to someone standing there. Questions about those parts clear them up.",
          "Other bridges and how the stones were moved are not on the sign at all. Those questions ask something new.",
          "Clarifying: \"What does CCC stand for?\" and \"Which hill does the sign mean when it says 'the hill behind you'?\" Dig deeper: \"What other bridges did these workers build in Georgia?\" and \"How did the workers move such heavy stones without big trucks?\""
        ],
        misconception: "A common mix-up is calling any question about the sign a clarifying question. Clarifying questions are about parts you read but did not understand.",
        why: "\"What does CCC stand for?\" and the question about which hill clear up parts of the sign that are not clear. The questions about other bridges and moving the stones dig deeper, because the sign does not talk about those things at all." },
      { id: "SK-RA1a-C14", type: "cr", dok: 3, std: ["3.T.RA.1.a"], passages: [], rows: 5,
        prompt: "Choose a topic YOU want to learn about. Write your topic. Then write one research question about it. Last, write one more question that clears up something or digs deeper into your first question.",
        sample: "My topic: why cats purr. My research question: How does a cat make its purring sound? My next question: Do big cats, like lions, purr too?",
        criteria: [
          "I wrote a topic that I chose myself.",
          "My research question asks about facts I could look up, not about what people like best.",
          "My research question starts with a word like how, why or what, so the answer is more than yes or no.",
          "My last question clears up something or digs deeper into my first question."
        ],
        clue: "Pick something you really wonder about, like an animal, a place, a sport or how a thing works.",
        hints: [
          "Pick something you really wonder about, like an animal, a place, a sport or how a thing works.",
          "Turn your wondering into a question that starts with how, why or what. Check that a book or an expert could answer it.",
          "For your last question, pretend you found the answer to your first one. What would you still wonder about? You can start like this: Now I want to know ___."
        ],
        how: [
          "Choose a topic that you care about. It is your choice, so there is no wrong topic.",
          "Write a question about your topic that a book, a video or an expert could answer with facts.",
          "Think about what the answer might teach you, and write a new question that grows out of it, or one that clears up a word you might not know.",
          "Check your work with the list. One good answer follows, and other answers can also be right."
        ],
        why: "Many answers can be right. A good answer names a topic the writer chose, asks a fact question that needs more than yes or no, and adds a second question that clears up something or digs deeper into the first. A grown-up can look at it with you; it is never scored." },
      { id: "SK-RA1a-C15", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [], pick: 2,
        stem: ["Zuri's great-grandma made a quilt by hand long ago.", "Zuri chose her own topic: how people made quilts long ago."],
        prompt: "Which TWO questions would be good research questions for Zuri's topic?",
        choices: [
          { text: "How did people sew quilts by hand before there were sewing machines?", correct: true },
          { text: "Where did families long ago get the cloth for their quilts?", correct: true },
          { text: "Did people long ago sleep under quilts on cold nights?" },
          { text: "Is a quilt nicer to sleep under than a plain blanket?" },
          { text: "Who is the best quilt maker in all of Georgia?" }
        ],
        clue: "A good research question asks about facts you can look up, and its answer teaches you something new about your topic.",
        hints: [
          "A good research question asks about facts you can look up, and its answer teaches you something new about your topic.",
          "Say Zuri's topic in your own words. Then read each question. Choose two.",
          "\"Did people long ago sleep under quilts on cold nights?\" can be answered with yes, and Zuri already knows that from her great-grandma's quilt. Check each question that is left."
        ],
        how: [
          "Zuri's topic is how people made quilts long ago.",
          "Sewing by hand and getting cloth are both parts of making a quilt, and a book or an expert could answer them with facts.",
          "The answers are \"How did people sew quilts by hand before there were sewing machines?\" and \"Where did families long ago get the cloth for their quilts?\"",
          "Nicer and best tell what people think, so people would give different answers. Those are opinion questions, even the one that starts with who."
        ],
        misconception: "A common mix-up is choosing a question because it starts with who or what. \"Who is the best ...?\" still asks for an opinion.",
        why: "The answers are \"How did people sew quilts by hand before there were sewing machines?\" and \"Where did families long ago get the cloth for their quilts?\" Both ask for facts about making quilts long ago. Sleeping under quilts is a yes-or-no question she knows, and nicer and best are opinions." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. Each `like` lists only
     the core items it really practises (same component and task). */
  similar: [
    { id: "SK-RA1a-S01", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C04", "SK-RA1a-C07"],
      stem: ["Mila read this at a museum: \"This fossil shows a fish that lived in a sea that once covered part of Georgia.\"", "She stopped. She did not know what kind of thing a fossil is."],
      prompt: "Which question would clear up what Mila did not understand?",
      choices: [
        { text: "What exactly is a fossil, and how does one form?", correct: true },
        { text: "How old is the fish fossil in this museum?" },
        { text: "Which museum in Georgia is the most fun to visit?" },
        { text: "Do fish still live in the sea near Georgia today?" }
      ],
      clue: "A clarifying question clears up a word or idea you read but did not understand.",
      hints: [
        "A clarifying question clears up a word or idea you read but did not understand.",
        "Find the word Mila did not know. Then read each choice.",
        "Which museum is the most fun asks for an opinion, so it cannot clear anything up. Check each choice that is left."
      ],
      how: [
        "Mila did not know what a fossil is.",
        "A clarifying question asks about exactly that part.",
        "The answer is \"What exactly is a fossil, and how does one form?\" The age of the fossil and fish in the sea today are questions that dig deeper or go to a new idea."
      ],
      why: "The answer is \"What exactly is a fossil, and how does one form?\" It asks about the word she did not know. The age of the fossil and fish living today are new questions, and the most fun museum is an opinion." },
    { id: "SK-RA1a-S02", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-P4", "SK-RA1a-C08", "SK-RA1a-C11"],
      stem: ["Kai read that a baseball has 108 stitches.", "The stitches help a pitcher grip the ball."],
      prompt: "Which question would help Kai dig deeper into what he just learned?",
      choices: [
        { text: "How do the stitches change the way a thrown ball moves?", correct: true },
        { text: "How many stitches does a baseball have?" },
        { text: "Who is the best pitcher on Kai's team this year?" },
        { text: "How are soccer balls made in a factory?" }
      ],
      clue: "A dig-deeper question stays on the idea you just learned and asks something the text does not tell you yet.",
      hints: [
        "A dig-deeper question stays on the idea you just learned and asks something the text does not tell you yet.",
        "Say what Kai just learned in your own words.",
        "Kai already knows that a baseball has 108 stitches, so asking how many would not teach him anything new. Check each choice that is left."
      ],
      how: [
        "Kai learned that a baseball has 108 stitches that help a pitcher grip it.",
        "A dig-deeper question stays on the stitches and asks something new about them.",
        "The answer is \"How do the stitches change the way a thrown ball moves?\" The best pitcher is an opinion, and soccer balls are a different topic."
      ],
      why: "The answer is \"How do the stitches change the way a thrown ball moves?\" It stays on the stitches and asks something new. The number of stitches is already known, the best pitcher is an opinion, and soccer balls are a different topic." },
    { id: "SK-RA1a-S03", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C09", "SK-RA1a-C10", "SK-RA1a-C15"],
      stem: ["Rosa chose her own topic: how a submarine goes down under the water and comes back up."],
      prompt: "Which question would be the best research question for Rosa's topic?",
      choices: [
        { text: "What makes a submarine sink down and then rise back up?", correct: true },
        { text: "Is riding in a submarine scarier than riding in a plane?" },
        { text: "Do submarines go under the water?" },
        { text: "How do whales hold their breath for so long?" }
      ],
      clue: "A research question asks about your topic and leads to an answer you can look up.",
      hints: [
        "A research question asks about your topic and leads to an answer you can look up.",
        "Say Rosa's topic in your own words. Then read each choice.",
        "Whales holding their breath is a fact question, but it is about whales, not submarines. Check each choice that is left."
      ],
      how: [
        "Rosa's topic is how a submarine goes down and comes back up.",
        "The best question is on that topic and needs a fact answer.",
        "The answer is \"What makes a submarine sink down and then rise back up?\" Scarier is an opinion, and whether submarines go under water is a yes-or-no question she already knows."
      ],
      why: "The answer is \"What makes a submarine sink down and then rise back up?\" It fits her topic and asks for facts. Scarier is an opinion, the yes-or-no question teaches her nothing new, and whales are a different topic." }
  ],
  /* Hints and Show me how for the Practice Together items P1-P3 and the core refs P4 and P5. */
  addons: {
    "SK-RA1a-P1": {
      hints: [
        "A good research question is about your exact topic and needs a real answer, not just yes or no.",
        "Say Kenji's topic in your own words. Then read each choice.",
        "Everyone already knows that honey is sweet and sticky, so that question would not teach Kenji anything. Check each choice that is left."
      ],
      how: [
        "Kenji's topic is how honeybees make honey.",
        "\"Do honeybees make honey?\" is a yes-or-no question he already knows. Where bees build hives is a different topic.",
        "The answer is \"How do bees turn nectar into honey?\""
      ] },
    "SK-RA1a-P2": {
      hints: [
        "A text answers a question only if you can point to a sentence that gives the answer.",
        "Take one question at a time, and look through the article for a sentence that answers it.",
        "The article never tells how beekeepers keep from getting stung. Check each question that is left."
      ],
      how: [
        "Paragraph 4 says a worker does a special dance that shows the other bees which way to fly.",
        "The article never tells how long a queen lives or which flowers make the sweetest honey.",
        "The answer is \"How do bees show other bees where flowers are?\""
      ] },
    "SK-RA1a-P3": {
      hints: [
        "A research question asks for facts you can look up. If the answer is a feeling or depends on who you ask, it is not a research question.",
        "For each question, ask: could a book or an expert answer this with facts?",
        "\"Do I like the taste of honey?\" depends on who you ask, so it is not a research question. Sort the other three the same way."
      ],
      how: [
        "Books and experts can explain why bees visit flowers and how bees make wax.",
        "Scarier and do I like are about feelings, so people would give different answers.",
        "Good research questions: why bees visit flowers and how bees make wax. Not research questions: bees being scarier than wasps and liking the taste of honey."
      ] },
    "SK-RA1a-P4": {
      hints: [
        "A dig-deeper question stays on the idea you just learned and asks something new about it.",
        "Reread paragraph 4 to see what Rosa already knows about the dance.",
        "\"Would I be good at dancing like a bee?\" is about Rosa, not about bees. Check each choice that is left."
      ],
      how: [
        "Rosa learned that a worker does a special dance to show other bees where flowers are.",
        "The article says the dance shows how far to go, but not how it shows that.",
        "The answer is \"How does the dance show the bees how far to fly?\"",
        "She already knows that workers dance when they find flowers, and the queen is a different idea."
      ] },
    "SK-RA1a-P5": {
      hints: [
        "A text answers a question only if you can point to a sentence that gives the answer.",
        "Take one question at a time. Look through the article for a sentence that answers it. Choose two.",
        "The article never tells where bees go in the winter. Check each question that is left."
      ],
      how: [
        "Paragraph 2 says the queen's job is to lay eggs.",
        "Paragraph 3 says each wax cell has six sides.",
        "The answers are \"What is the queen bee's job?\" and \"What shape is each wax cell?\"",
        "The article never tells how big a queen is or how people build beehives."
      ] }
  },
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
      "Choose credible sources. A credible source is one you can trust because people who know the facts made it, like a library book, a museum or science center, a park ranger or a scientist. Check who made a web page. If anyone can post on it, if no name is given, or if it is mostly ads, it is not a strong source.",
      "Start with your research question. A fact is relevant only if it helps answer that question. A fact can be true and still not help.",
      "A web page often has a site name, a date, headings and boxes on the side. Ads, news and links in those boxes are usually about something else, so skip them.",
      "Take notes in a notes table: your question at the top, then each fact in a few of your own words and where you found it.",
      "Sort facts into groups with headings, such as \"What it eats\" and \"Where it lives.\" If the facts tell steps, put them in order from first to last."
    ],
    words: [
      { term: "source", means: "a place you get information" },
      { term: "credible", means: "can be trusted, because people who know the facts made it" },
      { term: "research question", means: "the question you want your research to answer" },
      { term: "relevant", means: "helps answer your research question" },
      { term: "notes", means: "short facts you write down to remember" },
      { term: "heading", means: "a title that tells what a group of facts is about" },
      { term: "personal communication", means: "facts you get by talking with, or writing to, a person who knows about the topic" }
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
    tip: "On the test, you may read two or three sources, such as a book page, a web page and notes from a talk. You may choose the source you can trust most, sort facts by source, choose the fact that belongs under a note heading, or choose the detail or note that best helps answer a research question."
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
        "Web page: Pine Hollow Nature Center, posted March 3, 2026",
        "Heading: Dinner Inside a Tree",
        "(1) Woodpeckers peck small holes in tree bark. (2) Beetle grubs and other insects hide under the bark. (3) A woodpecker pushes its long tongue into a hole and pulls the insects out.",
        "Heading: Drumming",
        "(4) In spring, woodpeckers drum fast on trees to tell other woodpeckers, \"This is my home.\"",
        "Side box: Gift shop sale: Bird feeders, two for the price of one!"
      ],
      ask: "Which parts of the web page help answer the research question, and which should you skip? Then write one note.",
      steps: [
        "Check who made the page: a nature center, where people who study birds and other animals work. That makes it a credible source. Then read the research question again. It asks how woodpeckers find food.",
        "Sentences 1, 2 and 3 tell how a woodpecker finds insects and gets them out, so they are relevant.",
        "Sentence 4 is true, but drumming is about a home, not food. The side box is an ad for the gift shop. Skip both.",
        "Write the fact in a few of your own words, and write where you found it."
      ],
      answer: "Use sentences 1, 2 and 3. The note: Question: How do woodpeckers find food? Fact: They peck holes in bark and pull out insects with their long tongues. Where I found it: Pine Hollow Nature Center web page, March 3, 2026."
    }
  ],
  write: {
    prompt: [
      "Do your own research with a grown-up. Pick a topic you wonder about, and write one research question.",
      "Find facts in two different places you can trust, such as a library book, a web page you look at with a grown-up, or a person who knows a lot about the topic.",
      "Make a notes table like the one in Learn It. Write your question at the top. For each fact, write the fact in a few of your own words and where you found it. Example: Fact: They peck holes in bark. Where I found it: Pine Hollow Nature Center web page."
    ],
    checklist: [
      "I wrote one research question.",
      "I used two different sources I can trust.",
      "I wrote only facts that help answer my question.",
      "I wrote each fact in a few of my own words.",
      "I wrote where I found each fact."
    ],
    rows: 8
  },
  parent: "When your child gets curious about something, look in two places together, such as a library book and a web page from a museum or nature center. Help your child keep a notes table with the question at the top, then each fact and where it came from. On a web page, point to the ads and side links and ask, \"Does this help answer our question?\" Also ask, \"Who made this page? Can we trust it?\" The skill \"Is this a good source?\" (3.T.RA.2.b) practices this more.",
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
    { id: "p3", title: "Our Moon", byline: "A page from a science book", genre: "Informational text",
      paragraphs: [
        ["The moon is Earth's closest neighbor in space.", "It is much smaller than Earth.", "It travels around Earth again and again."],
        ["The moon does not make its own light.", "The light we see is sunlight bouncing off the moon.", "That is why the moon can look so bright in the night sky."],
        ["The moon seems to change shape during the month.", "Sometimes we see a full, round moon.", "Other times we see a thin sliver, or no moon at all.", "These changes are called phases."],
        ["The moon has no air and no wind.", "There is no rain there either.", "Its ground is covered with gray dust and rocks.", "It also has many round holes called craters."]
      ] },
    { id: "p4", title: "A Talk at the Science Center", byline: "A student's notes from a talk", genre: "Informational text",
      paragraphs: [
        ["Last Saturday, Mr. Okafor, a scientist at the science center, talked to our class about the moon.", "We wrote down what he told us."],
        ["He said that astronauts first walked on the moon in 1969.", "They wore space suits because the moon has no air to breathe.", "Only a few people have ever walked on the moon."],
        ["The astronauts left footprints in the moon dust.", "Mr. Okafor said the footprints are probably still there.", "That is because the moon has no wind or rain to wipe them away."],
        ["The astronauts also brought moon rocks back to Earth.", "Scientists still study those rocks today.", "The rocks help them learn how the moon formed."]
      ] },
    /* PP-004: digital sources. Each web page has a site header figure (site name, menu, date),
       headings ("## ...", which count in refs but not in paragraph numbers), an article, and
       side boxes with off-topic news and an off-topic link. The sites are invented (gapfix: they now model
       credible sources, an extension office and a science museum, instead of clubs with ads). */
    { id: "p5", title: "What Pumpkin Plants Need", byline: "Another source: a web page from a county extension office, where plant scientists help people grow food", genre: "Informational text (web page)",
      figures: [{ after: 0, src: "assets/figures/ra1b-web-pumpkin.svg",
        alt: "The top of a web page. The site name is Maple County Extension Office. The menu says Home, Plants and Bugs. The page was posted on September 8, 2026.",
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
        ["Box: News: Fall Festival tickets are on sale now!", "Come to the county fairgrounds for hayrides, face painting and games."],
        ["Box: More on this site: How to Make a Bird Feeder"]
      ] },
    { id: "p6", title: "What Is It Like on the Moon?", byline: "Another source: a web page from a science museum, written by its space scientists", genre: "Informational text (web page)",
      figures: [{ after: 0, src: "assets/figures/ra1b-web-moon.svg",
        alt: "The top of a web page. The site name is Riverbend Science Museum. The menu says Home, Planets and Moon. The page was posted on April 14, 2026.",
        caption: "The top of the web page", width: 340 }],
      paragraphs: [
        ["## Light on Your Feet"],
        ["The moon's pull, called gravity, is much weaker than Earth's pull.", "A person who weighs 60 pounds on Earth would weigh only about 10 pounds on the moon.", "That is why astronauts could take big, bouncing hops when they walked there."],
        ["## Long Days and Long Nights"],
        ["Daytime on the moon lasts about two weeks.", "Then nighttime lasts about two weeks too.", "In the daytime, the ground gets hotter than boiling water.", "At night, it gets colder than any place on Earth."],
        ["## How Far Away?"],
        ["The moon is about 239,000 miles from Earth.", "A car driving day and night at highway speed, about 60 miles per hour, would need more than five months to get there."],
        ["Box: Museum news: Sign up for Summer Camp today!", "Build robots and make new friends."],
        ["Box: More on this site: Make Your Own Star Chart"]
      ] },
    /* B3 (expansion 2026-10-22, author b3c): passages p7-p10 are used only by core set 2 (p7, p8) and
       core set 3 (p9, p10). Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p7", title: "Right Whales of the Georgia Coast", byline: "Source 1: a page from a library book", genre: "Informational text",
      paragraphs: [
        ["The North Atlantic right whale is Georgia's state marine mammal.", "A grown right whale can be about 50 feet long.", "That is longer than a school bus."],
        ["Each fall, many mother right whales swim south from cold northern waters.", "They come to the warm, calm water near the coasts of Georgia and Florida.", "There, in the winter, each mother gives birth to one calf."],
        ["A right whale has no teeth.", "Instead, long plates called baleen hang down from its top jaw.", "The whale swims with its mouth open.", "The baleen catches tiny animals and lets the water flow back out."],
        ["Right whales are in danger.", "Fewer than 400 of them are left in the world.", "Ships and fishing ropes are their biggest dangers.", "People are working on fishing ropes that break more easily, so a whale caught in one can pull free."]
      ] },
    { id: "p8", title: "A Call with a Whale Scientist", byline: "Source 2: a student's notes from a phone call", genre: "Informational text",
      paragraphs: [
        ["Our class talked on the phone with Dr. Nadia Watts.", "She is a scientist who has studied right whales for twenty years."],
        ["Dr. Watts said that mothers and calves often rest near the top of the water.", "That makes them hard for ships to see.", "Each winter, pilots fly small planes over the ocean to look for them.", "When the pilots spot a mother and calf, they warn ships nearby to slow down."],
        ["She told us how scientists tell one right whale from another.", "Each whale has rough, white patches of skin on its head.", "The pattern of patches is different on every whale, like a fingerprint."],
        ["A new calf is about 14 feet long.", "It drinks its mother's milk and stays close beside her.", "In the spring, the mother and calf swim north together."],
        ["Dr. Watts said the best part of her job is seeing a brand-new calf.", "She hopes to see many more calves next winter."]
      ] },
    { id: "p9", title: "How a Puppy Becomes a Guide Dog", byline: "Source 1: a web page from the Red Clay Guide Dog School, where trainers teach dogs to help people who are blind", genre: "Informational text (web page)",
      paragraphs: [
        ["## Puppy Days"],
        ["A guide dog's training starts when it is a puppy.", "At about eight weeks old, the puppy moves in with a family of helpers called puppy raisers.", "For about a year, the family takes the puppy to stores, buses and parks.", "The puppy learns to stay calm around crowds and loud noises."],
        ["## Back to School"],
        ["Next, the dog comes back to the school for several months of training.", "A trainer teaches it to stop at every curb and step.", "The dog also learns to lead a person around things in the way, such as a low branch."],
        ["## A Smart \"No\""],
        ["Sometimes a guide dog must not do what it is told.", "If its person says \"Forward\" but a car is coming, the dog stays still.", "Trainers call this a smart \"no.\""],
        ["## Did You Know?"],
        ["Many guide dogs are Labrador retrievers or golden retrievers.", "A guide dog wears a harness with a stiff handle that its person holds."],
        ["Box: News: Our spring fun walk is on April 12. Bring your family!"],
        ["Box: More on this site: How to Bake Dog Treats at Home"]
      ] },
    { id: "p10", title: "A Visit from a Guide Dog Trainer", byline: "Source 2: a student's notes from a class visit", genre: "Informational text",
      paragraphs: [
        ["Mr. Osei trains guide dogs for his job.", "He came to our class with a guide dog named Juno."],
        ["Mr. Osei said that guide dogs work very hard.", "When Juno wears her harness, she is working.", "He asked us not to pet her or call her name, because that could pull her mind away from her job."],
        ["Mr. Osei showed us how Juno stops at the edge of a step.", "He said that a guide dog cannot read traffic lights.", "Its person listens to the traffic and decides when to cross."],
        ["Not every dog finishes training.", "Mr. Osei said that some dogs are too shy, or too excited around other animals.", "Those dogs may get a different job, or they go to live with a loving family."],
        ["At the end of the visit, Mr. Osei took off Juno's harness, and she chased a ball.", "Then we were allowed to pet her."]
      ] }
  ],
  practice: [
    { id: "SK-RA1b-P1", type: "match", points: 2, dok: 2, passages: ["p1", "p2"],
      prompt: "Where can you find each fact? Match each fact to the source it comes from.",
      cols: ["\"How Pumpkins Grow\" only", "\"A Visit with Farmer Ruiz\" only", "Both sources"],
      rows: [
        { text: "Pumpkin seeds are flat and white.", answer: 0 },
        { text: "A farmer keeps boxes of bees near the field.", answer: 1 },
        { text: "Bees carry pollen from flower to flower.", answer: 2 },
        { text: "Pumpkins are picked in the fall.", answer: 2 },
        { text: "A short piece of stem helps a pumpkin last longer.", answer: 1 }
      ],
      clue: "Check each fact in both sources before you choose. A fact belongs to both only if you can find it in each one.",
      why: "Flat, white seeds are only in \"How Pumpkins Grow.\" The boxes of bees and the short piece of stem are only in \"A Visit with Farmer Ruiz.\" Both sources say bees carry pollen from flower to flower, and both say pumpkins are picked in the fall." },
    { id: "SK-RA1b-P8", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Nia wants one more source about what pumpkin plants need. Which source can she trust the MOST?",
      choices: [
        { text: "a garden guide written by plant scientists who help farmers", correct: true },
        { text: "a post on a game website by someone who does not give a name" },
        { text: "an ad from a store that wants to sell her pumpkin seeds" },
        { text: "a cartoon about a talking pumpkin who wins a prize" }
      ],
      clue: "For each source, ask: Who made it? Do they know the facts, or are they selling something, hiding their name or telling a made-up story?",
      why: "The answer is \"a garden guide written by plant scientists who help farmers.\" Plant scientists study how plants grow, so their guide is a credible source. Nia cannot tell who wrote the game website post, the ad is trying to sell seeds, and the cartoon is a made-up story, not a fact source." },
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
      prompt: "Nia's research question is \"What do pumpkin plants need to grow well?\" Which TWO details from the web page help answer her question?",
      pick: 2,
      choices: [
        { text: "They grow best with at least six hours of sun each day.", correct: true },
        { text: "If it does not rain, give them about one inch of water each week.", correct: true },
        { text: "People have grown pumpkins for thousands of years." },
        { text: "Some giant pumpkins weigh more than 2,000 pounds." },
        { text: "Fall Festival tickets are on sale now!" }
      ],
      clue: "Read Nia's question again. A detail can be true and still not help. For each detail, ask: Does this tell something a pumpkin plant needs?",
      why: "The answers are \"They grow best with at least six hours of sun each day\" and \"If it does not rain, give them about one inch of water each week.\" Sun and water are things the plants need. How long people have grown pumpkins and how heavy contest pumpkins get are fun facts, but they do not tell what a plant needs. The Fall Festival box is news about an event, not about what a plant needs." },
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
      stem: ["**Nia's notes table**", "**Question:** What do pumpkin plants need to grow well?", "**Fact:** ________", "**Where I found it:** Maple County Extension Office web page, September 8, 2026"],
      choices: [
        { text: "The vines need lots of space so they do not crowd.", correct: true },
        { text: "The vines grow best when planted close together." },
        { text: "A pumpkin is really a fruit, because it holds seeds." },
        { text: "The site also tells how to make a bird feeder." }
      ],
      clue: "Ask two things about each note. Does it say the same thing as the web page? Does it help answer Nia's question?",
      why: "The answer is \"The vines need lots of space so they do not crowd.\" The Room to Grow section says to leave lots of space so the vines do not crowd each other, and space is something the plants need. The note about planting close together says the opposite of the web page. The fruit fact is true, but it does not tell what a plant needs. The bird feeder link is about something else." }
  ],
  /* ---------- B3 (expansion 2026-10-22, author b3c; docs/expansion-2026-10-22/01-architecture.md §2.2-2.3) ----------
     core: fifteen independent items in three sets of five. { ref } reuses the Try items P4, P7 and P5 by id
     (they stay in practice; Practice Together shows P1, P8, P3 and P6). New ids are numbered by their place
     in the fifteen. Hints and Show me how for refs and Together items are in addons below.
     The self-selected topic (official wording, p. 37) is shown only by the unscored cr item C15 and the
     adult-checked write task; it is never auto-scored.
     Author log: docs/expansion-2026-10-22/batches/B3-b3c-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { id: "SK-RA1b-C01", type: "match", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [],
        prompt: "Nia found facts in different ways. Match each source to the kind of source it is.",
        cols: ["Print (on paper)", "Digital (on a screen)", "Personal communication (from a person)"],
        rows: [
          { text: "what Ms. Ruiz told Nia's class during the farm visit", answer: 2 },
          { text: "the Room to Grow part of the extension office web page", answer: 1 },
          { text: "a newspaper story about a pumpkin contest at the county fair", answer: 0 },
          { text: "a plant scientist's answer when Nia calls the extension office on the phone", answer: 2 },
          { text: "a video about bees on a science museum's website", answer: 1 }
        ],
        clue: "Ask how the facts reach Nia. Are they printed on paper, shown on a screen, or told to her by a person?",
        hints: [
          "Ask how the facts reach Nia. Are they printed on paper, shown on a screen, or told to her by a person?",
          "Two of the sources come from the same extension office. For those two, look at how Nia gets the facts, not at who made them.",
          "A newspaper is printed on paper, even though it is not a book. Now sort the other four by asking the same question: paper, screen or a person?"
        ],
        how: [
          "For each source, ask how the facts reach Nia.",
          "Paper: the newspaper story is print.",
          "Screen: the Room to Grow web page and the museum's video are digital.",
          "A person: what Ms. Ruiz told the class and the plant scientist's answer on the phone are personal communication. The extension office made the web page, but a phone call with one of its scientists is a person telling Nia the facts."
        ],
        misconception: "A common mix-up is sorting by who made the source. The same office can give you a digital source (its web page) and personal communication (a phone call).",
        why: "The newspaper story is print. The Room to Grow web page and the museum's video are digital. What Ms. Ruiz told the class and the plant scientist's phone answer are personal communication, because a person tells Nia the facts." },
      { ref: "SK-RA1b-P4" },
      { ref: "SK-RA1b-P7" },
      { id: "SK-RA1b-C04", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: ["p1", "p2", "p5"],
        stem: ["**Nia's notes table**", "**Question:** What helps a pumpkin plant grow?",
          "**Row 1.** Fact: Big leaves shade the soil and keep it damp. Where I found it: \"A Visit with Farmer Ruiz\"",
          "**Row 2.** Fact: Without bees, there would be very few pumpkins. Where I found it: \"A Visit with Farmer Ruiz\"",
          "**Row 3.** Fact: Water the soil around the roots, not the leaves. Where I found it: the extension office web page",
          "**Row 4.** Fact: Only flowers that get pollen grow into pumpkins. Where I found it: \"How Pumpkins Grow\""],
        prompt: "One row in Nia's notes table names the wrong source. Find that row, and choose where its fact really comes from.",
        text: "Row {0} names the wrong source. That fact really comes from {1}.",
        slots: [
          { options: ["1", "2", "3", "4"], answer: 0 },
          { options: ["\"How Pumpkins Grow\"", "\"A Visit with Farmer Ruiz\"", "the extension office web page"], answer: 0 }
        ],
        clue: "A notes table is only useful if each fact really comes from the source it names. Check each fact against the source in its row.",
        hints: [
          "A notes table is only useful if each fact really comes from the source it names. Check each fact against the source in its row.",
          "Two rows name \"A Visit with Farmer Ruiz.\" Read that source closely and look for each of those two facts in it.",
          "Row 3's tip about watering the soil, not the leaves, is in the Water and Rich Soil part of the web page, so row 3 is right. Check the other rows the same way, then fill in the second blank."
        ],
        how: [
          "Check row 1. The sentence about big leaves shading the soil is in paragraph 2 of \"How Pumpkins Grow.\" Ms. Ruiz never talks about the leaves.",
          "Check the others. Ms. Ruiz says that without bees she would get very few pumpkins (row 2). The web page says to water the soil, not the leaves (row 3). \"How Pumpkins Grow\" says only flowers that get pollen can grow into pumpkins (row 4).",
          "The answers: row 1 names the wrong source, and that fact really comes from \"How Pumpkins Grow.\""
        ],
        misconception: "A common mix-up is trusting a row because the fact sounds like something a farmer would say. Find the exact sentence in the source.",
        why: "The answers are 1 and \"How Pumpkins Grow.\" The fact about big leaves shading the soil is in paragraph 2 of \"How Pumpkins Grow,\" not in Ms. Ruiz's notes. Rows 2, 3 and 4 each match the source they name." },
      { ref: "SK-RA1b-P5" }
    ] },
    { title: "Set 2", items: [
      { id: "SK-RA1b-C06", type: "order", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: ["p7", "p8"],
        prompt: "Kai used both sources to make a note card called \"A mother and calf's year.\" Put his notes in order.",
        steps: [
          "Mother whales swim south from cold northern waters.",
          "A mother gives birth to her calf in warm water near Georgia.",
          "The calf drinks milk and stays close beside its mother.",
          "The mother and calf swim north together."
        ],
        clue: "Follow the whales through one year. Time words like fall, winter and spring tell you what comes first and what comes later.",
        hints: [
          "Follow the whales through one year. Time words like fall, winter and spring tell you what comes first and what comes later.",
          "The notes about the mothers' trip and the birth are in Source 1, paragraph 2. The notes about the calf growing up are in Source 2, paragraph 4.",
          "The trip south happens each fall, before the mothers reach the warm water. Use the time words to place the other three notes."
        ],
        how: [
          "Source 1, paragraph 2: each fall, mother whales swim south. In the winter, in the warm water near Georgia, each mother gives birth.",
          "Source 2, paragraph 4: the new calf drinks milk and stays close to its mother. In the spring, they swim north together.",
          "So the order is: swim south, the calf is born, the calf drinks milk and stays close, then they swim north together."
        ],
        misconception: "A common mix-up is putting the notes from one source first without checking the time words.",
        why: "The order is: mother whales swim south, a mother gives birth near Georgia, the calf drinks milk and stays close, and the mother and calf swim north. The trip south is in the fall, the birth is in the winter, and the trip north is in the spring. The first two notes come from Source 1, and the last two come from Source 2." },
      { id: "SK-RA1b-C07", type: "hottext", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: ["p7", "p8"],
        prompt: "Kai's research question is \"How do people help keep right whales safe?\" Which TWO sentences help answer his question? Choose two sentences.",
        targets: ["p7:2:2", "p7:4:2", "p7:4:3", "p7:4:4", "p8:1:2", "p8:2:1", "p8:2:4", "p8:4:2"],
        answer: ["p7:4:4", "p8:2:4"], pick: 2,
        clue: "A sentence helps only if it answers the research question. A sentence can be true, and even be about danger, and still not tell how anyone helps.",
        hints: [
          "A sentence helps only if it answers the research question. A sentence can be true, and even be about danger, and still not tell how anyone helps.",
          "Each source has one sentence that answers the question. In Source 1, reread the paragraph about dangers. In Source 2, reread the paragraph about ships.",
          "The sentence that says fewer than 400 right whales are left only counts the whales. Counting them does not keep them safe. Decide about the other sentences in those two paragraphs."
        ],
        how: [
          "Kai's question asks what people do to keep the whales safe.",
          "Source 1, paragraph 4: people are working on fishing ropes that break more easily, so a caught whale can pull free.",
          "Source 2, paragraph 2: when pilots spot a mother and calf, they warn ships nearby to slow down.",
          "The other sentences are true, but they tell how many whales are left, what the dangers are, where the whales rest and swim, or who Dr. Watts is. None tells what people do to help."
        ],
        misconception: "A common mix-up is choosing the sentence about the dangers. Knowing the danger is not the same as knowing how people help.",
        why: "The answers are \"People are working on fishing ropes that break more easily, so a whale caught in one can pull free.\" and \"When the pilots spot a mother and calf, they warn ships nearby to slow down.\" Each tells something people do to keep whales safe. The other sentences tell about the dangers, the number of whales left, where whales swim and rest, or who Dr. Watts is." },
      { id: "SK-RA1b-C08", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: ["p7", "p8"],
        stem: ["**Kai's notes table**", "**Question:** How can scientists tell one right whale from another?"],
        prompt: "Kai wants a note that tells the answer in a few of his own words. Complete his notes table.",
        text: "Fact: {0} Where I found it: {1}",
        slots: [
          { options: ["Each whale has its own pattern of white patches on its head.", "Each whale has its own pattern of teeth in its top jaw.", "Each whale has baleen that catches tiny animals."], answer: 0 },
          { options: ["Source 1, the library book", "Source 2, the call with Dr. Watts", "both sources"], answer: 1 }
        ],
        clue: "A good note says the same thing as the source in a few of your own words, and it answers the question. Then it tells where you found the fact.",
        hints: [
          "A good note says the same thing as the source in a few of your own words, and it answers the question. Then it tells where you found the fact.",
          "First find the part of the sources that tells how scientists tell whales apart. Then check which source that part is in.",
          "A right whale has no teeth at all, so the note about teeth does not match the sources. Decide between the other two notes, and then fill in the source."
        ],
        how: [
          "Source 2, paragraph 3, says each whale has rough, white patches on its head, and the pattern is different on every whale.",
          "So the note is \"Each whale has its own pattern of white patches on its head.\"",
          "That fact is only in Source 2, the call with Dr. Watts. Source 1 never tells about the patches.",
          "Right whales have no teeth. Every right whale has baleen, so baleen cannot tell one whale from another."
        ],
        misconception: "A common mix-up is choosing a note that is true about whales, like the baleen note, but does not answer the question.",
        why: "The answers are \"Each whale has its own pattern of white patches on its head.\" and \"Source 2, the call with Dr. Watts.\" Dr. Watts told the class that the pattern of patches is different on every whale, like a fingerprint. Source 1 does not tell about the patches. Right whales have no teeth, and every right whale has baleen, so baleen cannot tell them apart." },
      { id: "SK-RA1b-C09", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.b"], passages: ["p8"],
        prompt: "Kai's friend says, \"Notes from a phone call are not a real source, because they are not in a book.\" Which answer BEST explains why Kai can use Dr. Watts's facts?",
        choices: [
          { text: "Dr. Watts studies right whales for her job, so she knows the facts.", correct: true },
          { text: "Kai wrote the notes himself, so everything in them must be true." },
          { text: "A phone call is newer than a book, so its facts are always better." },
          { text: "Dr. Watts loves seeing new calves, so she must be right about whales." }
        ],
        clue: "A source can be a book, a web page or a person. Ask who gave the facts and whether that person is an expert on the topic.",
        hints: [
          "A source can be a book, a web page or a person. Ask who gave the facts and whether that person is an expert on the topic.",
          "Reread the first and the last paragraphs of Source 2. What do they tell you about Dr. Watts?",
          "Kai writing the notes does not make them true, because a person can write down a mistake. Think about what makes the facts in the notes worth trusting, and test the other three answers."
        ],
        how: [
          "Personal communication, like a phone call, can be a credible source when the person knows the topic.",
          "Source 2 says Dr. Watts is a scientist who has studied right whales for twenty years.",
          "The answer is \"Dr. Watts studies right whales for her job, so she knows the facts.\"",
          "Writing notes does not make them true, newer is not always better, and loving calves does not show that she knows the facts."
        ],
        misconception: "A common mix-up is thinking only books and web pages count as sources. A person who knows the topic well is a source, too.",
        why: "The answer is \"Dr. Watts studies right whales for her job, so she knows the facts.\" Source 2 says she is a scientist who has studied right whales for twenty years, so her facts are credible even though she shared them on the phone. Writing the notes yourself does not make them true, newer is not always better, and enjoying her job does not prove her facts." },
      { id: "SK-RA1b-C10", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.b"], passages: ["p7", "p8"],
        prompt: "Kai also wants to know how long right whales live. Neither source tells him. What should Kai do next?",
        choices: [
          { text: "Look for another credible source, such as a whale research center's web page.", correct: true },
          { text: "Write his own best guess in the notes table, so that the table is not empty." },
          { text: "Use the length of a new calf, because it is a number about right whales." },
          { text: "Ask a classmate to guess, because a person can be a source of facts." }
        ],
        clue: "When your sources do not answer a question, you need more facts, not a guess. Ask where Kai could find facts he can trust.",
        hints: [
          "When your sources do not answer a question, you need more facts, not a guess. Ask where Kai could find facts he can trust.",
          "Reread Kai's question. For each answer, ask two things: would it really tell him how long right whales live, and could he trust it?",
          "The length of a new calf is a true number from Source 2, but it tells how long a calf is, not how long a whale lives. Use the trust question on the other three answers."
        ],
        how: [
          "Kai's two sources do not tell how long right whales live, so he needs another source.",
          "A guess, his own or a classmate's, is not a checked fact. A classmate is a person, but not a person who knows about whales.",
          "The length of a calf is a fact, but it does not answer his question.",
          "The answer is \"Look for another credible source, such as a whale research center's web page.\""
        ],
        misconception: "A common mix-up is filling a gap with a guess or with a fact that does not fit. Good researchers look for another source they can trust.",
        why: "The answer is \"Look for another credible source, such as a whale research center's web page.\" When sources leave a question unanswered, a researcher finds another source made by people who know the facts. A guess is not a checked fact, and the calf's length does not tell how long whales live." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-RA1b-C11", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: ["p9", "p10"], pick: 2,
        prompt: "Ayo read both sources about guide dogs. Which TWO facts can he find in BOTH sources? Choose two answers.",
        choices: [
          { text: "A guide dog learns to stop at steps.", correct: true },
          { text: "A guide dog wears a harness.", correct: true },
          { text: "A guide dog stays still if a car is coming." },
          { text: "Puppy raisers take the puppy to stores, buses and parks." },
          { text: "Some dogs do not finish training and get a different job." }
        ],
        clue: "A fact belongs to both sources only if you can find it in each one. Check every fact in Source 1 and in Source 2.",
        hints: [
          "A fact belongs to both sources only if you can find it in each one. Check every fact in Source 1 and in Source 2.",
          "A fact that is in only one source does not count, even if the other source talks about something close to it. Choose two.",
          "Puppy raisers are only in Source 1. Source 2 never tells about a guide dog's puppy year. Check each of the other facts in both sources."
        ],
        how: [
          "Look for each fact in both sources.",
          "Stopping at steps: Source 1 says a trainer teaches the dog to stop at every curb and step, and in Source 2, Mr. Osei shows how Juno stops at the edge of a step.",
          "A harness: Source 1 says a guide dog wears a harness that its person holds, and Source 2 tells about Juno's harness.",
          "Staying still for a car and the puppy raisers are only in Source 1. Dogs that do not finish training are only in Source 2."
        ],
        misconception: "A common mix-up is choosing a fact because the other source talks about something close to it, like traffic. Find the same fact in both.",
        why: "The answers are \"A guide dog learns to stop at steps.\" and \"A guide dog wears a harness.\" Both sources tell each of these facts. Staying still when a car is coming and the puppy raisers are only in Source 1. Source 2 talks about traffic, but it says the person decides when to cross; it never says the dog stays still. Dogs that do not finish training are only in Source 2." },
      { id: "SK-RA1b-C12", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [], pick: 2,
        prompt: "Ayo wants to add more sources to his research. Which TWO sources can he trust for facts about guide dogs? Choose two answers.",
        choices: [
          { text: "a library book by a woman who has trained guide dogs for many years", correct: true },
          { text: "an email answer from a trainer at a guide dog school", correct: true },
          { text: "a post by \"DogFan22,\" who writes, \"My cousin told me any dog can be a guide dog\"" },
          { text: "an ad that says, \"Our harness turns any dog into a guide dog!\"" },
          { text: "a funny story about a guide dog who saves a whole town" }
        ],
        clue: "Ask who made each source. Does the person know about guide dogs, or are they guessing, selling something or telling a made-up story?",
        hints: [
          "Ask who made each source. Does the person know about guide dogs, or are they guessing, selling something or telling a made-up story?",
          "In each answer, find the words that tell who made the source and what that person does. Choose two.",
          "The ad wants to sell a harness, so it may stretch the truth. Check each of the other sources: does the person who made it really know about guide dogs?"
        ],
        how: [
          "A woman who has trained guide dogs for many years knows the facts, so her library book is credible.",
          "A trainer at a guide dog school knows the facts, too. An email is personal communication, and it counts when the person who writes it knows the topic.",
          "\"DogFan22\" gives no real name and only repeats what a cousin said. The ad is selling a harness, and the funny story is made up.",
          "The answers are \"a library book by a woman who has trained guide dogs for many years\" and \"an email answer from a trainer at a guide dog school.\""
        ],
        misconception: "A common mix-up is thinking an email cannot be a source. What matters is whether the person who wrote it knows the topic.",
        why: "The answers are \"a library book by a woman who has trained guide dogs for many years\" and \"an email answer from a trainer at a guide dog school.\" Both come from people who train guide dogs. The post repeats what someone's cousin said, the ad is selling something, and the funny story is made up." },
      { id: "SK-RA1b-C13", type: "match", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: ["p9", "p10"],
        prompt: "Ayo has three note cards. Match each fact to the note card where it belongs.",
        cols: ["Growing up with puppy raisers", "Learning at the guide dog school", "Meeting a guide dog at work"],
        rows: [
          { text: "learns to stay calm around crowds and loud noises", answer: 0 },
          { text: "learns to lead a person around a low branch", answer: 1 },
          { text: "should not be petted or called by name", answer: 2 },
          { text: "comes back for several months of training", answer: 1 },
          { text: "lives with a family of helpers for about a year", answer: 0 }
        ],
        clue: "Read each note card heading. For each fact, ask when it happens in a guide dog's life, or who needs to know it.",
        hints: [
          "Read each note card heading. For each fact, ask when it happens in a guide dog's life, or who needs to know it.",
          "Find each fact in the sources first. The heading or paragraph it comes from tells you a lot about when it happens.",
          "Learning to lead a person around a low branch is taught by a trainer, so it belongs on the card about the guide dog school. Sort the other four facts."
        ],
        how: [
          "Under Puppy Days, Source 1 says the puppy lives with puppy raisers for about a year and learns to stay calm around crowds and loud noises.",
          "Under Back to School, the dog comes back for several months of training and learns to lead a person around a low branch.",
          "In Source 2, Mr. Osei asks the class not to pet a working guide dog or call its name. That is for people meeting a guide dog at work."
        ],
        misconception: "A common mix-up is sorting by one word in a fact instead of by when it happens in the dog's life.",
        why: "Staying calm around crowds and living with a family of helpers for a year go on \"Growing up with puppy raisers.\" Leading a person around a low branch and the months of training go on \"Learning at the guide dog school.\" Not petting a working dog or calling its name goes on \"Meeting a guide dog at work.\"" },
      { id: "SK-RA1b-C14", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.b"], passages: [],
        stem: ["**Marcus's notes table**", "**Question:** How do lifeguards keep swimmers safe?",
          "**Note 1.** They sit in tall chairs so they can see the whole pool. (Where I found it: the city pool's web page)",
          "**Note 2.** They blow a whistle when someone breaks a pool rule. (Where I found it: Coach Ames, my swim coach)",
          "**Note 3.** Our lifeguard, Ms. Abara, has a dog named Rex. (Where I found it: Ms. Abara)",
          "**Note 4.** They take a class to learn how to pull a swimmer out of deep water. (Where I found it: Ms. Abara)"],
        prompt: "Marcus wants to take one note out of his table. Which note should he remove, and why?",
        choices: [
          { text: "Note 3, because it is true but does not tell how lifeguards keep swimmers safe.", correct: true },
          { text: "Note 2, because it came from a person and not from a book." },
          { text: "Note 1, because facts from a web page can never be trusted." },
          { text: "Note 4, because Ms. Abara is a lifeguard and not a scientist." }
        ],
        clue: "Check each note two ways. Does it help answer the question? Can Marcus trust where it came from?",
        hints: [
          "Check each note two ways. Does it help answer the question? Can Marcus trust where it came from?",
          "Two notes come from Ms. Abara. Read those two notes and ask what each one is about.",
          "A city pool's web page is made by the people who run the pool, so note 1 can be trusted. Test the reasons in the other answers."
        ],
        how: [
          "Marcus's question asks how lifeguards keep swimmers safe.",
          "Notes 1, 2 and 4 each tell something lifeguards do to keep swimmers safe. Each comes from someone who knows: the pool's web page, a swim coach and a lifeguard.",
          "Note 3 is true, but a lifeguard's dog does not keep swimmers safe.",
          "The answer is \"Note 3, because it is true but does not tell how lifeguards keep swimmers safe.\""
        ],
        misconception: "A common mix-up is removing a note because of where it came from. A person you talk to can be a good source. Remove a note when it does not help answer the question.",
        why: "The answer is \"Note 3, because it is true but does not tell how lifeguards keep swimmers safe.\" Ms. Abara's dog has nothing to do with the question. A person can be a credible source, a city pool's web page can be trusted, and Ms. Abara knows about her own job even though she is not a scientist." },
      /* Constructed response: never scored. It is the only core place for the self-selected topic. */
      { id: "SK-RA1b-C15", type: "cr", dok: 3, std: ["3.T.RA.1.b"], passages: [], rows: 5,
        stem: ["Plan your own research. Pick a topic you wonder about, and write one research question about it."],
        prompt: "Then name two different kinds of sources you could use, such as a book, a web page or a person. Tell why you could trust each one.",
        sample: "My question: How do pandas spend their day? Source 1: a library book by a scientist who studies pandas. I can trust it because the scientist knows the facts. Source 2: I could ask a zookeeper who takes care of the pandas at a zoo. I can trust her because she works with pandas every day.",
        criteria: ["I wrote a research question about a topic I chose.", "I named two different kinds of sources, such as print, a web page or a person.", "I told why I can trust each source."],
        clue: "Start with something you wonder about, like an animal, a sport or a place. Turn it into a question that starts with how, why or what.",
        hints: [
          "Start with something you wonder about, like an animal, a sport or a place. Turn it into a question that starts with how, why or what.",
          "For your sources, think of one thing you could read and one person you could ask. A grown-up can help you find a web page you can trust.",
          "To tell why you can trust a source, say who made it and how that person knows the facts, for example because it is their job."
        ],
        how: [
          "Pick a topic you really wonder about, and write one question about it.",
          "Name two kinds of sources, for example a library book and a person who knows the topic.",
          "For each source, write who made it and how that person knows the facts.",
          "Compare your plan with the sample and the checklist. Your topic can be very different from the sample."
        ],
        why: "Many plans can be right. A strong plan has one research question about a topic you chose, two different kinds of sources and a reason to trust each one." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short text in the stem. Each `like` lists only
     the core items it really practises. */
  similar: [
    { id: "SK-RA1b-S01", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [], pick: 2,
      like: ["SK-RA1b-C07", "SK-RA1b-C14"],
      stem: ["Lucia's research question: \"How do sea horses move through the water?\""],
      prompt: "Lucia found these facts in a science book. Which TWO facts help answer her question? Choose two answers.",
      choices: [
        { text: "A sea horse swims by fanning a small fin on its back.", correct: true },
        { text: "It steers with two tiny fins on the sides of its head.", correct: true },
        { text: "It can wrap its curly tail around sea grass to stay still." },
        { text: "A sea horse dad carries the eggs in a pouch until they hatch." },
        { text: "Sea horses eat tiny shrimp that float by." }
      ],
      clue: "A fact can be true and still not help. For each fact, ask: does this tell how a sea horse moves through the water?",
      hints: [
        "A fact can be true and still not help. For each fact, ask: does this tell how a sea horse moves through the water?",
        "Read each fact and say in your own words what the sea horse is doing in it.",
        "The sea horse dad's pouch is a famous fact, but it is about babies, not about moving. Check the other facts against Lucia's question."
      ],
      how: [
        "Lucia's question asks how a sea horse moves through the water.",
        "Fanning a fin on its back is how it swims, and the fins on its head help it steer. Both tell how it moves.",
        "Wrapping its tail around sea grass is how it stays still, not how it moves. The pouch and the shrimp are about babies and food.",
        "The answers are \"A sea horse swims by fanning a small fin on its back.\" and \"It steers with two tiny fins on the sides of its head.\""
      ],
      why: "The answers are \"A sea horse swims by fanning a small fin on its back.\" and \"It steers with two tiny fins on the sides of its head.\" Both tell how it moves. Holding on with its tail keeps it still, and the pouch and the shrimp are about babies and food." },
    { id: "SK-RA1b-S02", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C09", "SK-RA1b-C12"],
      prompt: "Owen's research question is \"How do vets help a horse with a sore leg?\" He wants to ask a person. Which person would be the most credible to ask?",
      choices: [
        { text: "a vet who takes care of the horses at a horse farm", correct: true },
        { text: "a girl from his class who rode a pony at the fair once" },
        { text: "a store worker who is selling toy horses for the holidays" },
        { text: "someone online who signs every post \"PonyLuvr\"" }
      ],
      clue: "A person can be a source. Ask who knows the most about the question, and how they know it.",
      hints: [
        "A person can be a source. Ask who knows the most about the question, and how they know it.",
        "For each person, find the words that tell what they do or how they know about horses.",
        "Riding a pony once is fun, but it does not teach you how to help a hurt horse. Check the other three people."
      ],
      how: [
        "Owen's question is about how vets help horses.",
        "A vet who takes care of horses at a farm does this as a job, so she knows the facts.",
        "Riding a pony once, selling toy horses and an online name do not show that someone knows how to help a hurt horse.",
        "The answer is \"a vet who takes care of the horses at a horse farm.\""
      ],
      why: "The answer is \"a vet who takes care of the horses at a horse farm.\" A vet helps sick and hurt horses as a job. A girl who rode a pony once, a store worker selling toys and an online name do not show that the person knows how to help a hurt horse." },
    { id: "SK-RA1b-S03", type: "match", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C13", "SK-RA1b-P4"],
      stem: ["Dion is writing about sea stars. He has two note cards: \"How a sea star eats\" and \"How a sea star moves.\""],
      prompt: "Match each fact to the note card where it belongs.",
      cols: ["How a sea star eats", "How a sea star moves"],
      rows: [
        { text: "It pulls open a clam shell with its arms.", answer: 0 },
        { text: "It creeps along on hundreds of tiny tube feet.", answer: 1 },
        { text: "It pushes its stomach out of its body to eat the clam.", answer: 0 },
        { text: "It can slowly climb up the side of a rock.", answer: 1 }
      ],
      clue: "Read the two headings. For each fact, ask: is this about getting food, or about going from place to place?",
      hints: [
        "Read the two headings. For each fact, ask: is this about getting food, or about going from place to place?",
        "Picture what the sea star is doing in each fact before you choose a card.",
        "Creeping along on tube feet is going from place to place, so it goes on the card about moving. Sort the other three."
      ],
      how: [
        "Pulling open a clam shell and pushing out its stomach to eat the clam are both about food. They go on \"How a sea star eats.\"",
        "Creeping on tube feet and climbing a rock are both about going from place to place. They go on \"How a sea star moves.\""
      ],
      why: "Opening a clam and pushing out its stomach are about eating, so they go on \"How a sea star eats.\" Creeping on tube feet and climbing a rock are about moving, so they go on \"How a sea star moves.\"" }
  ],
  /* Hints and Show me how for items kept in practice: refs P4, P7, P5 (core set 1) and Together P1, P8, P3, P6. */
  addons: {
    "SK-RA1b-P1": {
      hints: [
        "Check each fact in both sources before you choose. A fact belongs to both only if you can find it in each one.",
        "Read paragraph 3 of Source 1 and paragraph 2 of Source 2. Then read the last paragraph of each source.",
        "Flat, white seeds are only in \"How Pumpkins Grow\"; the farm visit never talks about seeds. Check the other four facts in both sources."
      ],
      how: [
        "Seeds that are flat and white are only in \"How Pumpkins Grow.\"",
        "The boxes of bees and the short piece of stem are only in \"A Visit with Farmer Ruiz.\"",
        "Both sources say bees carry pollen from flower to flower, and both say pumpkins are picked in the fall."
      ],
      misconception: "A common mix-up is choosing the first source where you found a fact. Check the other source too before you decide." },
    "SK-RA1b-P8": {
      hints: [
        "For each source, ask: Who made it? Do they know the facts, or are they selling something, hiding their name or telling a made-up story?",
        "In each answer, find the words that tell who made the source.",
        "The cartoon is a made-up story, so it is not a fact source. Check who made each of the other three."
      ],
      how: [
        "Plant scientists study how plants grow and help farmers, so their garden guide is credible.",
        "The game website post gives no name, the ad wants to sell seeds, and the cartoon is made up.",
        "The answer is \"a garden guide written by plant scientists who help farmers.\""
      ] },
    "SK-RA1b-P3": {
      hints: [
        "Follow the pumpkin from the very beginning to the very end. Use facts from both sources.",
        "Source 1 tells the pumpkin's life in order, paragraph by paragraph. Source 2 tells what Ms. Ruiz does in the fall.",
        "The seed is planted first, because nothing can grow before that. Place the other four steps after it."
      ],
      how: [
        "Source 1 tells the order: the seed is planted, the sprout grows into a vine, bees carry pollen to the flowers, and a tiny green pumpkin grows and turns orange.",
        "Source 2, paragraph 4, tells the last step: in the fall, the farmer cuts the stem and picks the pumpkin.",
        "So the order is: seed, vine, bees at the flowers, a green pumpkin that turns orange, then picking."
      ] },
    "SK-RA1b-P6": {
      hints: [
        "Read Nia's question again. A detail can be true and still not help. For each detail, ask: does this tell something a pumpkin plant needs?",
        "Each section of the web page has a heading. Use the headings to find which sections are about what the plants need and which are about something else.",
        "The Fall Festival box is news about an event, not about plants. Check each of the other details against Nia's question."
      ],
      how: [
        "Nia's question asks what pumpkin plants need to grow well.",
        "The Plenty of Sun section says they grow best with at least six hours of sun each day. The Water and Rich Soil section says to give them about one inch of water each week if it does not rain.",
        "How long people have grown pumpkins and how heavy contest pumpkins get are fun facts, and the Fall Festival box is news. None of them tells what a plant needs.",
        "The answers are \"They grow best with at least six hours of sun each day.\" and \"If it does not rain, give them about one inch of water each week.\""
      ] },
    "SK-RA1b-P4": {
      hints: [
        "Read each note card heading. Then, for each fact, ask which heading it tells more about.",
        "Find each fact in the sources, and read the sentences around it to see which part of the pumpkin's story it comes from.",
        "The sprout growing into a vine is something the plant does by itself, so it goes under the heading about how a pumpkin grows. Sort Ms. Ruiz's three jobs next."
      ],
      how: [
        "The vine growing is something the plant does, so it goes under \"How a pumpkin grows.\"",
        "Watering the vines and pulling weeds are ways Ms. Ruiz helps the plants while they grow, so they go under \"Caring for the plants.\"",
        "Picking the hard, orange pumpkins goes under \"Picking the pumpkins.\""
      ],
      misconception: "A common mix-up is putting every fact about Ms. Ruiz on one card. Sort by what the fact is about, not by who is in it." },
    "SK-RA1b-P7": {
      hints: [
        "A good note says the same thing as the source, in a few of your own words, and it helps answer the question.",
        "Nia's question is about what the plants need. Reread the Room to Grow section and the Fun Pumpkin Facts section of the web page.",
        "The note about making a bird feeder comes from a link to another page, so it is not about pumpkin plants at all. Check whether each other note matches what the web page really says."
      ],
      how: [
        "Nia's question asks what pumpkin plants need to grow well.",
        "The Room to Grow section says to leave lots of space between the plants so the vines do not crowd each other. The note \"The vines need lots of space so they do not crowd.\" says the same thing in fewer words.",
        "Planting close together is the opposite of what the page says. The fruit fact is true, but it does not tell what a plant needs. The bird feeder link is about a different page."
      ],
      misconception: "A common mix-up is choosing a note that uses words from the page but changes what they mean, like close together instead of lots of space." },
    "SK-RA1b-P5": {
      hints: [
        "First say Nia's question in your own words. Then check two things in each answer: is the source right, and does the reason really answer her question?",
        "Nia wants to know what a farmer does to get pumpkins ready to sell. Reread the last paragraph of each source.",
        "The vine spreading across the ground is about how the plant grows, not about getting pumpkins ready to sell. Compare the reasons in the other three answers."
      ],
      how: [
        "Nia's question is how a farmer gets pumpkins ready to sell.",
        "Paragraph 4 of Source 2 tells how Ms. Ruiz picks hard, orange pumpkins, cuts the stems and sells them at her farm stand.",
        "Source 1 only says when pumpkins are ready to pick, and the bees are about growing pumpkins, not getting them ready to sell.",
        "The answer is \"Source 2, because Ms. Ruiz tells how she picks and sells pumpkins.\""
      ],
      misconception: "A common mix-up is choosing a true reason that does not answer the question, like the bees. Check the reason against the question." }
  },
  test: [
    { id: "SK-RA1b-T1", type: "match", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Where can you find each fact? Match each fact to the source it comes from.",
      cols: ["\"Our Moon\" only", "\"A Talk at the Science Center\" only", "Both sources"],
      rows: [
        { text: "The light from the moon is really sunlight.", answer: 0 },
        { text: "Only a few people have ever walked on the moon.", answer: 1 },
        { text: "There is dust on the moon's ground.", answer: 2 },
        { text: "The moon has round holes called craters.", answer: 0 },
        { text: "A scientist talked to a class about the moon.", answer: 1 }
      ],
      clue: "Look for each fact in both sources. Only choose Both sources when you can find the fact in each one.",
      why: "Sunlight bouncing off the moon and craters are only in \"Our Moon.\" The few people who walked on the moon and the scientist's talk are only in \"A Talk at the Science Center.\" Both sources tell about dust on the moon: \"Our Moon\" says the ground is covered with gray dust, and the talk notes say the astronauts left footprints in the moon dust." },
    { id: "SK-RA1b-T8", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["Kofi wants one more web page about the moon. He finds these two pages.", "**Page A:** \"The Moon,\" from the Lakeside Space Center. It was written by space scientists who work there.", "**Page B:** \"Moon Chat,\" a page where anyone can post. The person who wrote about the moon did not give a name. The page is full of ads for games."],
      prompt: "Which page should Kofi use for his research, and why?",
      choices: [
        { text: "Page A, because scientists who study space wrote it.", correct: true },
        { text: "Page B, because anyone can post, so it has more facts." },
        { text: "Page B, because it has fun games to play about the moon." },
        { text: "Page A, because Page B is not about the moon at all." }
      ],
      clue: "Ask who made each page. Do they know the facts? Then check that the reason in your choice is true and really matters.",
      why: "The answer is \"Page A, because scientists who study space wrote it.\" A credible source comes from people who know the facts, and space scientists study the moon. On Page B, anyone can post and the writer gave no name, so Kofi cannot tell if the facts are true. More posts do not make facts true, and games do not help answer a research question. Both pages are about the moon, so that is not the reason." },
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
    { id: "SK-RA1b-T5", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "Kofi's note from \"Our Moon\" says, \"There are rocks on the moon's ground.\" Which fact from \"A Talk at the Science Center\" adds the MOST to this note?",
      choices: [
        { text: "Astronauts brought moon rocks back for scientists to study.", correct: true },
        { text: "The moon is Earth's closest neighbor in space." },
        { text: "Only a few people have ever walked on the moon." },
        { text: "Mr. Okafor talked to the class at the science center." }
      ],
      clue: "Kofi's note is about what is on the moon's ground. The fact you add must come from the talk and tell more about the same thing.",
      why: "The answer is \"Astronauts brought moon rocks back for scientists to study.\" It tells more about the rocks in Kofi's note. The neighbor fact comes from \"Our Moon,\" not the talk, and the other facts are about how many people went to the moon or about the talk, not the moon's ground." },
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
      why: "Two parts help: how long daytime lasts and how cold it gets at night both tell what day and night are like on the moon. The distance to the moon is true, but it is not about day and night. The Summer Camp box is museum news about a camp, and the star chart box is a link to a different page." },
    { id: "SK-RA1b-T7", type: "mc", points: 1, dok: 2, passages: ["p6"],
      prompt: "Kofi is filling in his notes table from the web page. Which note is the BEST one to write in the Fact box?",
      stem: ["**Kofi's notes table**", "**Question:** Why could astronauts take big, bouncing hops on the moon?", "**Fact:** ________", "**Where I found it:** Riverbend Science Museum web page, April 14, 2026"],
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
    { id: "p3", title: "Meet the Brown Thrasher", byline: "Source 1", genre: "Informational text",
      paragraphs: [
        ["The brown thrasher is the state bird of Georgia.", "It has a reddish-brown back, a long tail and bright yellow eyes.", "Its white chest is covered with brown spots."],
        ["Brown thrashers are famous singers.", "One bird can sing more than one thousand different songs.", "It sings each part of a song two times before it moves on to the next part."],
        ["Look for thrashers in yards and woods that have lots of bushes.", "They find most of their food on the ground.", "A thrasher sweeps its long, curved bill from side to side through dead leaves.", "It finds beetles, worms and other small animals hiding there.", "It also eats berries, seeds and acorns."]
      ] },
    { id: "p4", title: "A Thrasher Family", byline: "Source 2", genre: "Informational text",
      paragraphs: [
        ["In spring, a pair of brown thrashers builds a nest together.", "They hide it in a thick bush or low in a small tree."],
        ["The nest is made of twigs.", "The birds line the inside with soft grass and leaves."],
        ["The mother lays three to five eggs.", "Each egg is pale blue with tiny brown spots.", "Both parents take turns keeping the eggs warm, and both bring food to the babies after they hatch."],
        ["Thrashers guard their nest.", "When a cat or a person comes too close, a parent may dive at them and even strike them.", "Many thrasher families raise two sets of babies in one summer."]
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
      prompt: "Kayla is writing a summary of both sources. Which sentence BEST sums up what the two sources say about brown thrashers?",
      choices: [
        { text: "Thrashers find their food on the ground, and thrasher parents work together to raise a family.", correct: true },
        { text: "Brown thrashers have reddish-brown backs, long tails, spotted chests and yellow eyes." },
        { text: "Each brown thrasher egg is pale blue and covered with tiny brown spots." },
        { text: "I think brown thrashers are the prettiest birds in the whole state of Georgia." }
      ],
      clue: "Look for a sentence that uses a big idea from each source, tells facts, and leaves out small details.",
      why: "The answer is \"Thrashers find their food on the ground, and thrasher parents work together to raise a family.\" It joins a big idea from Source 1 (how the bird finds food) with the big idea of Source 2 (a thrasher pair raising a family). The sentence about backs, tails, chests and eyes uses only Source 1, the egg sentence is one tiny detail, and the prettiest-birds sentence is an opinion." },
    { id: "SK-RA1c-T2", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      stem: ["Kayla's notes from Source 1, under the heading \"Where to look for a brown thrasher\":", "• in yards and woods with lots of bushes", "• on the ground, searching through dead leaves"],
      prompt: "Which fact from Source 2 adds the most to Kayla's notes?",
      choices: [
        { text: "In spring, they hide their nests in thick bushes or low in small trees.", correct: true },
        { text: "The mother thrasher lays three to five eggs in the nest." },
        { text: "Both parents bring food to the babies after they hatch." },
        { text: "Many thrasher families raise two sets of babies each summer." }
      ],
      clue: "Read the heading again. Find the fact from Source 2 that tells another place where you might find a thrasher.",
      why: "The answer is \"In spring, they hide their nests in thick bushes or low in small trees.\" It tells one more place to look for a thrasher, so it fits the heading. The facts about the eggs, feeding the babies and raising two sets of babies are true, but they do not tell where to look." },
    { id: "SK-RA1c-T3", type: "ms", points: 2, dok: 3, passages: ["p3", "p4"],
      prompt: "Kayla checks her summary sentences. Which TWO sentences are true to the sources, tell an important idea, and use her own words? Choose two answers.",
      pick: 2,
      choices: [
        { text: "A brown thrasher can sing a huge number of different songs.", correct: true },
        { text: "Thrasher parents protect their nest from cats and people.", correct: true },
        { text: "The birds line the inside with soft grass and leaves." },
        { text: "I think thrashers are the best singers in the world." },
        { text: "Brown thrashers live only in the far north, not in Georgia." },
        { text: "A thrasher sings each part of its song five times." }
      ],
      clue: "Check three things for each sentence. Is it a fact the sources really give? Is it a big idea, not a tiny detail? Is it said in a new way, not copied?",
      why: "The answers are \"A brown thrasher can sing a huge number of different songs\" and \"Thrasher parents protect their nest from cats and people.\" Each one sums up the main idea of a paragraph in new words. \"The birds line the inside with soft grass and leaves\" is true, but it is a small detail copied word for word from Source 2. The best-singers sentence is an opinion. Source 1 says the thrasher is Georgia's state bird and sings each part two times, so the last two sentences are wrong." },
    { id: "SK-RA1c-T4", type: "hottext", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "Here is Kayla's draft summary. Which sentence should she take out because it does not belong in a summary?",
      options: [
        "Georgia chose the brown thrasher as its state bird.",
        "A thrasher sweeps its bill through dead leaves to find bugs to eat.",
        "My grandpa hears a thrasher singing outside his window every morning.",
        "A thrasher pair builds its nest out of twigs and soft grass."
      ],
      answer: [2], pick: 1,
      clue: "A summary tells only what the sources say. Check whether each sentence comes from Source 1 or Source 2.",
      why: "The answer is \"My grandpa hears a thrasher singing outside his window every morning.\" Neither source tells about Kayla's grandpa, so it does not belong. Each of the other sentences tells an important idea from one of the sources in Kayla's own words." },
    { id: "SK-RA1c-T5", type: "dropdown", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Kayla wants to join ideas in her summary. Choose the best word or words for each blank.",
      text: "The mother thrasher lays three to five eggs. {0}, both parents take turns keeping them warm. {1} the babies hatch, both parents bring them food.",
      slots: [
        { options: ["Then", "For example", "Instead", "In conclusion"], answer: 0 },
        { options: ["After", "Before", "Unless", "Although"], answer: 0 }
      ],
      clue: "Both blanks need time words. Ask what happens first, next and last.",
      why: "The first blank is \"Then,\" because keeping the eggs warm comes after the mother lays them. The second blank is \"After,\" because the parents feed the babies once they have hatched. For example would mean an example comes next, instead would mean something different happens, and in conclusion would end the summary too soon. Before would put feeding ahead of hatching, and unless and although do not make sense here." }
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
      ] },
    /* PP-004 form B (testB) passage, used only by testB. Needs independent review. */
    { id: "p3", title: "Room for One More", genre: "Literary text",
      paragraphs: [
        ["On Monday, a new girl named Rosa joined Ms. Ortiz's third-grade class.", "At lunch, she sat at the end of a long table.", "She stared down at her tray and did not even open her milk."],
        ["Jada watched Rosa from across the room.", "Last year, Jada had been the new girl at this school.", "She still remembered eating lunch all by herself and wishing someone would say hello."],
        ["Jada picked up her tray and walked over.", "\"Do you want to sit with us?\" she asked.", "Rosa looked up in surprise.", "Then she gave a small nod and followed Jada."],
        ["At Jada's table, the girls talked about their favorite things.", "Rosa said that she loved to draw animals.", "Jada grinned, because she loved to draw animals, too.", "She tore a page out of her notebook and passed Rosa a pencil."],
        ["By the end of lunch, Rosa was giggling at Jada's drawing of a cat in a hat.", "When the bell rang, Rosa asked, \"Can I sit here again tomorrow?\"", "Jada smiled and said, \"There's always room for one more.\""]
      ] },
    /* B3 (expansion 2026-10-22, author b3c): passages p4-p6 are used only by core set 1 (p4), set 2 (p5)
       and set 3 (p6). Never used by test or testB. NEEDS INDEPENDENT REVIEW. */
    { id: "p4", title: "Two Loops", genre: "Literary text",
      paragraphs: [
        ["Nyla's little cousin Jojo was staying with her family for a week.", "On Monday, his class was going on a trip to the zoo.", "His teacher said that every child had to tie their own shoes."],
        ["On Sunday night, Jojo sat on the floor with his new sneakers.", "He pulled the laces into a big, tight knot.", "Then he threw one sneaker under the couch.", "\"I can't do it!\" he cried."],
        ["Nyla sat down next to him.", "\"When I was five, I couldn't tie my shoes either,\" she said.", "She showed him a trick: make two loops, like bunny ears, and cross them."],
        ["Jojo tried, but the loops flopped apart.", "\"Let's go slower this time,\" Nyla said, and she did each step with him.", "They tried six more times.", "Each time, Nyla waited quietly while Jojo worked."],
        ["On the seventh try, the bow held.", "Jojo jumped up and stomped around the living room.", "\"Look, Nyla! I did it all by myself!\" he shouted.", "Nyla laughed and gave him a high five."]
      ] },
    { id: "p5", title: "Sea Otters", genre: "Informational text",
      paragraphs: [
        ["Sea otters live in cold ocean water along the Pacific coast.", "Most sea animals that live in cold water have a thick layer of fat.", "Sea otters do not."],
        ["Instead, a sea otter stays warm with its fur.", "Its fur is thicker than the fur of any other animal.", "A sea otter spends hours each day cleaning and fluffing its fur.", "This traps a layer of air that keeps the cold water away from its skin."],
        ["Sea otters eat clams, crabs and sea urchins.", "A sea otter eats about one-fourth of its own weight in food each day.", "To open a hard shell, an otter floats on its back and sets a flat rock on its chest.", "Then it bangs the shell against the rock until the shell cracks.", "Some otters keep a favorite rock in a pocket of loose skin under one arm."],
        ["Sea otters even sleep in the water.", "Before a nap, an otter may wrap itself in long strands of seaweed called kelp.", "The kelp works like an anchor, so the otter does not drift away.", "Sometimes a group of otters floats together, holding paws."]
      ] },
    { id: "p6", title: "The New Goalie", genre: "Literary text",
      paragraphs: [
        ["Simone had never played goalie before.", "But on Saturday, the Falcons' goalie was sick, so Coach Hale handed Simone the big gloves."],
        ["In the first five minutes, a ball zipped past her into the net.", "Simone's face felt hot.", "She stared at the grass and wished she could hide."],
        ["Her teammate Dani jogged over.", "\"Everybody gets scored on,\" Dani said.", "\"Watch the ball, not the kicker's feet.\""],
        ["Simone nodded and bent her knees.", "After that, every time the ball came near, she kept her eyes on it.", "Near the end of the game, a girl kicked the ball hard toward the corner of the net.", "Simone dove and pushed it away with her fingertips."],
        ["The Falcons lost the game, 2 to 1.", "Still, after the game, Simone ran over to Dani.", "\"Thanks for your tip,\" she said.", "\"Can you help me practice goalie next week?\""]
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
  /* ---------- B3 (expansion 2026-10-22, author b3c; docs/expansion-2026-10-22/01-architecture.md §2.2-2.3) ----------
     core: fifteen independent items in three sets of five. { ref } reuses the Try items P3 and P4 by id
     (they stay in practice; Practice Together shows P1 and P2). New ids are numbered by their place in the
     fifteen. Writing a quote of your own to support an opinion is shown only by the unscored cr item C15.
     Author log: docs/expansion-2026-10-22/batches/B3-b3c-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-RA2a-P3" },
      { ref: "SK-RA2a-P4" },
      { id: "SK-RA2a-C03", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: ["p1"],
        prompt: "Dev says, \"Fireflies use their light to send messages.\" Which sentence from the passage is true but does NOT support Dev's idea?",
        choices: [
          { text: "\"This kind of light is sometimes called cold light.\"", correct: true },
          { text: "\"Each kind of firefly has its own blinking pattern.\"" },
          { text: "\"A male flashes his pattern as he flies.\"" },
          { text: "\"Their glow may warn other animals that they taste bad.\"" }
        ],
        clue: "Every sentence in the passage is true. A sentence supports an idea only if it shows the idea. Ask of each one: does this show the light telling someone something?",
        hints: [
          "Every sentence in the passage is true. A sentence supports an idea only if it shows the idea. Ask of each one: does this show the light telling someone something?",
          "Find each choice in the passage. Read the sentences around it to see what that part of the passage is about.",
          "A warning tells other animals something, so the sentence about the larvae's glow does show a message. Check the other three choices."
        ],
        how: [
          "Dev's idea is that the light sends messages.",
          "Blinking patterns and flashing are how fireflies talk to each other, and a warning tells other animals to stay away. Those sentences support Dev's idea.",
          "\"This kind of light is sometimes called cold light.\" is true, but it only gives the light a name. It does not show a message.",
          "The answer is \"This kind of light is sometimes called cold light.\""
        ],
        misconception: "A common mix-up is thinking every true sentence about the light supports the idea. A sentence supports an idea only if it shows the idea.",
        why: "The answer is \"This kind of light is sometimes called cold light.\" It names the kind of light, but it does not show the light sending a message. Blinking patterns and flashing show fireflies talking, and the warning sends a message to other animals." },
      { id: "SK-RA2a-C04", type: "ebsr", points: 2, dok: 3, std: ["3.T.RA.2.a"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How does Jojo change from the beginning of the story to the end?",
          choices: [
            { text: "He goes from giving up to feeling proud that he can do it himself.", correct: true },
            { text: "He goes from feeling excited about the zoo to feeling scared of it." },
            { text: "He goes from being angry at Nyla to being angry at his teacher." },
            { text: "He goes from tying his shoes by himself to needing Nyla's help." }
          ] },
        partB: { prompt: "Which TWO sentences from the story BEST support the answer to Part A?", pick: 2,
          choices: [
            { text: "\"I can't do it!\" he cried.", correct: true },
            { text: "\"Look, Nyla! I did it all by myself!\" he shouted.", correct: true },
            { text: "He pulled the laces into a big, tight knot." },
            { text: "Jojo tried, but the loops flopped apart." },
            { text: "Nyla laughed and gave him a high five." }
          ] },
        clue: "A change has a before and an after. Find how Jojo acts at the start and how he acts at the end. For Part B, you need proof of both.",
        hints: [
          "A change has a before and an after. Find how Jojo acts at the start and how he acts at the end. For Part B, you need proof of both.",
          "Reread paragraph 2 for the start and paragraph 5 for the end.",
          "Jojo never says he is upset with Nyla or with his teacher, so the answer about being angry does not fit. For Part B, choose one sentence for the start and one for the end."
        ],
        how: [
          "At the start, in paragraph 2, Jojo knots his laces, throws a sneaker and cries, \"I can't do it!\" He is giving up.",
          "At the end, in paragraph 5, he shouts, \"Look, Nyla! I did it all by myself!\" He is proud.",
          "Part A: He goes from giving up to feeling proud that he can do it himself. Part B: the sentence where he cries, \"I can't do it!\" and the sentence where he shouts, \"Look, Nyla! I did it all by myself!\"",
          "The knot and the floppy loops show trouble, not how he feels, and the high five is what Nyla does."
        ],
        misconception: "A common mix-up is choosing proof for only one end of a change. A change needs proof of the before and the after.",
        why: "Part A: He goes from giving up to feeling proud that he can do it himself. Part B: \"I can't do it!\" he cried. and \"Look, Nyla! I did it all by myself!\" he shouted. The first shows him giving up, and the second shows him proud. The story never says he is scared of the zoo or angry, and by the end he ties his shoes himself." },
      { id: "SK-RA2a-C05", type: "hottext", points: 2, dok: 3, std: ["3.T.RA.2.a"], passages: ["p4"],
        prompt: "Grandma says, \"Nyla knows how to make a hard job easier.\" Which TWO sentences BEST support Grandma's opinion? Choose two sentences.",
        targets: ["p4:3:1", "p4:3:2", "p4:3:3", "p4:4:2", "p4:4:4", "p4:5:4"],
        answer: ["p4:3:3", "p4:4:2"], pick: 2,
        clue: "To support an opinion, a sentence must show it. Nyla does many kind things. Ask of each sentence: does this make tying shoes easier for Jojo, or is it kind in some other way?",
        hints: [
          "To support an opinion, a sentence must show it. Nyla does many kind things. Ask of each sentence: does this make tying shoes easier for Jojo, or is it kind in some other way?",
          "Look at what Nyla says and does in paragraphs 3 and 4.",
          "Waiting quietly shows that Nyla is patient. That is a good thing, but waiting does not change how hard the job is. Decide about the other sentences in paragraphs 3 and 4."
        ],
        how: [
          "Grandma's opinion is that Nyla makes a hard job easier.",
          "In paragraph 3, Nyla shows Jojo a trick: two loops, like bunny ears. A trick makes the job easier.",
          "In paragraph 4, she says, \"Let's go slower this time,\" and does each step with him. Going slower and doing it together makes the job easier, too.",
          "Sitting next to him, telling him she once had trouble too, waiting quietly and the high five are kind, but they do not make the job easier."
        ],
        misconception: "A common mix-up is choosing any sentence that shows Nyla is nice. The proof has to fit this exact opinion.",
        why: "The answers are the sentence about the trick with two loops, like bunny ears, and the sentence where Nyla says, \"Let's go slower this time,\" and does each step with him. A trick, going slower and doing it together make tying shoes easier. Sitting with him, sharing that she once had trouble, waiting quietly and the high five are kind, but they do not make the job easier." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-RA2a-C06", type: "hottext", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: ["p5"],
        prompt: "Which sentence BEST supports the idea that a sea otter takes good care of its fur? Choose the sentence in the passage.",
        targets: ["p5:1:1", "p5:1:2", "p5:2:1", "p5:2:2", "p5:2:3", "p5:2:4"],
        answer: ["p5:2:3"], pick: 1,
        clue: "An idea about what an animal does needs proof of the animal doing it. A sentence that only describes the fur is not enough.",
        hints: [
          "An idea about what an animal does needs proof of the animal doing it. A sentence that only describes the fur is not enough.",
          "Reread paragraph 2, about the sea otter's fur.",
          "\"Its fur is thicker than the fur of any other animal\" describes the fur, but it does not show the otter doing anything for it. Decide about the other sentences in paragraph 2."
        ],
        how: [
          "To take care of something, you do things to keep it in good shape.",
          "Paragraph 2 says a sea otter spends hours each day cleaning and fluffing its fur. That is the otter caring for its fur.",
          "The other sentences tell where otters live, how other animals stay warm, or what the fur is like.",
          "The answer is \"A sea otter spends hours each day cleaning and fluffing its fur.\""
        ],
        misconception: "A common mix-up is choosing a sentence about the fur that does not show the idea. Being about the right topic is not enough.",
        why: "The answer is \"A sea otter spends hours each day cleaning and fluffing its fur.\" Cleaning and fluffing are things the otter does to care for its fur. The other sentences tell where otters live, how other sea animals stay warm, or what the fur is like." },
      { id: "SK-RA2a-C07", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: ["p5"],
        stem: ["**Ruby's answer:** Sea otters have a special way to stay warm. The passage says, \"Sea otters live in cold ocean water along the Pacific coast.\""],
        prompt: "Ruby's quote is true, but it does not prove her answer. Which sentence should she quote instead?",
        choices: [
          { text: "\"This traps a layer of air that keeps the cold water away from its skin.\"", correct: true },
          { text: "\"Most sea animals that live in cold water have a thick layer of fat.\"" },
          { text: "\"Before a nap, an otter may wrap itself in long strands of seaweed called kelp.\"" },
          { text: "\"Sea otters eat clams, crabs and sea urchins.\"" }
        ],
        clue: "A quote proves an answer only if it shows the answer. Ruby's answer is about HOW a sea otter stays warm.",
        hints: [
          "A quote proves an answer only if it shows the answer. Ruby's answer is about HOW a sea otter stays warm.",
          "Find each choice in the passage, and read the sentences around it.",
          "\"Sea otters eat clams, crabs and sea urchins\" is about food, not about staying warm. Decide among the other three."
        ],
        how: [
          "Ruby's answer is that sea otters have a special way to stay warm.",
          "Paragraph 2 says the otter cleans and fluffs its fur, and this traps a layer of air that keeps the cold water away from its skin. That is the special way.",
          "The sentence about fat tells how other sea animals stay warm, not otters. Wrapping in kelp is something otters do before a nap, and clams are food.",
          "The answer is \"This traps a layer of air that keeps the cold water away from its skin.\""
        ],
        misconception: "A common mix-up is choosing a quote that uses the right words, like cold water, but tells about something else.",
        why: "The answer is \"This traps a layer of air that keeps the cold water away from its skin.\" It shows how the otter's fur keeps it warm. The fat sentence is about other sea animals, the kelp is something otters do before a nap, and clams are food." },
      { id: "SK-RA2a-C08", type: "ebsr", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: ["p5"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Based on the passage, what problem could a sea otter have if it slept in open water with no kelp?",
          choices: [
            { text: "It could drift far away while it sleeps.", correct: true },
            { text: "It could get too cold while it sleeps." },
            { text: "It could lose the rock that it keeps." },
            { text: "It could wake up too hungry to swim." }
          ] },
        partB: { prompt: "Which sentence from the passage BEST supports the answer to Part A?",
          choices: [
            { text: "\"The kelp works like an anchor, so the otter does not drift away.\"", correct: true },
            { text: "\"Sometimes a group of otters floats together, holding paws.\"" },
            { text: "\"Sea otters even sleep in the water.\"" },
            { text: "\"This traps a layer of air that keeps the cold water away from its skin.\"" }
          ] },
        clue: "Answer Part A first. Then, for Part B, choose the sentence that proves your Part A answer, not just any true sentence about otters.",
        hints: [
          "Answer Part A first. Then, for Part B, choose the sentence that proves your Part A answer, not just any true sentence about otters.",
          "Reread paragraph 4, about how sea otters sleep.",
          "Sea otters stay warm with their fur, so the cold is not the problem the kelp solves. For Part B, make sure the sentence you pick matches your Part A answer."
        ],
        how: [
          "Paragraph 4 says an otter may wrap itself in kelp before a nap.",
          "The kelp works like an anchor, so the otter does not drift away. Without it, a sleeping otter could drift far away.",
          "Part A: It could drift far away while it sleeps. Part B: \"The kelp works like an anchor, so the otter does not drift away.\"",
          "Fur keeps the otter warm, so the cold is not the problem. Holding paws and sleeping in the water are true, but they do not tell what the kelp does."
        ],
        misconception: "A common mix-up is choosing a sentence that is about sleeping but does not prove the answer.",
        why: "Part A: It could drift far away while it sleeps. Part B: \"The kelp works like an anchor, so the otter does not drift away.\" An anchor keeps something from floating off, so without kelp a sleeping otter could drift away. Its fur keeps it warm, and the passage does not connect sleeping without kelp to the rock or to being hungry." },
      { id: "SK-RA2a-C09", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: ["p5"], pick: 2,
        prompt: "Jamal says, \"Sea otters are clever eaters.\" Which TWO details from the passage BEST support his opinion? Choose two answers.",
        choices: [
          { text: "An otter cracks hard shells open by banging them on a rock.", correct: true },
          { text: "Some otters keep a favorite rock in a pocket of skin under one arm.", correct: true },
          { text: "Sea otters eat clams, crabs and sea urchins." },
          { text: "A sea otter eats about one-fourth of its own weight in food each day." },
          { text: "A sea otter spends hours each day cleaning and fluffing its fur." }
        ],
        clue: "Clever means smart about how to do something. Look for details that show a smart way of getting food, not just facts about food.",
        hints: [
          "Clever means smart about how to do something. Look for details that show a smart way of getting food, not just facts about food.",
          "Reread paragraph 3, about what sea otters eat and how they eat it.",
          "\"Sea otters eat clams, crabs and sea urchins\" tells what they eat, but not how they get it, so it does not show anything clever. Decide about the other details from paragraph 3."
        ],
        how: [
          "Clever means smart about how to do something.",
          "Paragraph 3 says an otter floats on its back, sets a rock on its chest and bangs a shell on it until the shell cracks. Using a rock as a tool is clever.",
          "Some otters even keep a favorite rock in a pocket of skin. Saving a tool for later is clever, too.",
          "What otters eat and how much they eat are true, but they do not show a smart way of eating. Cleaning fur is not about eating."
        ],
        misconception: "A common mix-up is choosing a detail that is about food but does not show the opinion.",
        why: "The answers are \"An otter cracks hard shells open by banging them on a rock.\" and \"Some otters keep a favorite rock in a pocket of skin under one arm.\" Using a rock as a tool and saving it for later are smart ways to eat. What otters eat and how much they eat do not show anything clever, and cleaning fur is not about eating." },
      { id: "SK-RA2a-C10", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: [],
        stem: ["**Room 9's Rain Barrel**", "(1) In March, Room 9 put a rain barrel under a gutter on the school roof.", "(2) When it rains, water runs off the roof and into the barrel.", "(3) The class uses that water for the school garden.", "(4) The students painted the barrel blue with yellow fish."],
        prompt: "Complete Rafi's answer to the question \"Why did Room 9 put out a rain barrel?\" Choose the best answer and the sentence that proves it.",
        text: "Room 9 put out a rain barrel {0}. The sentence that proves it is sentence {1}.",
        slots: [
          { options: ["to save rainwater for the garden", "to make the school look more colorful", "to keep the roof from getting wet"], answer: 0 },
          { options: ["1", "3", "4"], answer: 1 }
        ],
        clue: "First decide the answer. Then find the sentence that shows that answer, not just any sentence about the barrel.",
        hints: [
          "First decide the answer. Then find the sentence that shows that answer, not just any sentence about the barrel.",
          "The question asks WHY. Look for the sentence that tells a reason, not just what happened or when.",
          "Sentence 1 tells when Room 9 put out the barrel, not why, so it is not the proof. Decide what the barrel is for, then choose between the other two sentences."
        ],
        how: [
          "The question asks why Room 9 put out the barrel.",
          "Sentence 3 says the class uses the water for the school garden. So the barrel saves rainwater for the garden.",
          "Sentence 1 tells when, sentence 2 tells how the water gets in, and sentence 4 tells how the barrel looks.",
          "The answers: Room 9 put out a rain barrel to save rainwater for the garden, and sentence 3 proves it."
        ],
        misconception: "A common mix-up is choosing a true sentence about the barrel, like its colors, as proof of why it is there.",
        why: "The answers are \"to save rainwater for the garden\" and sentence 3. Sentence 3 says the class uses the water for the school garden. Sentence 1 tells when the barrel was put out, and sentence 4 tells how it looks, not why it is there." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-RA2a-C11", type: "ebsr", points: 2, dok: 3, std: ["3.T.RA.2.a"], passages: ["p6"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "What helps Simone make the big save near the end of the game?",
          choices: [
            { text: "She uses Dani's tip and keeps her eyes on the ball.", correct: true },
            { text: "Coach Hale gives her a bigger pair of gloves." },
            { text: "The other team kicks the ball softly to her." },
            { text: "Her team cheers until she feels brave again." }
          ] },
        partB: { prompt: "Which sentence from the story BEST supports the answer to Part A?",
          choices: [
            { text: "\"After that, every time the ball came near, she kept her eyes on it.\"", correct: true },
            { text: "\"Simone nodded and bent her knees.\"" },
            { text: "\"Near the end of the game, a girl kicked the ball hard toward the corner of the net.\"" },
            { text: "\"But on Saturday, the Falcons' goalie was sick, so Coach Hale handed Simone the big gloves.\"" }
          ] },
        clue: "Look for what changes between the first goal and the big save. For Part B, choose the sentence that shows Simone doing what your Part A answer says.",
        hints: [
          "Look for what changes between the first goal and the big save. For Part B, choose the sentence that shows Simone doing what your Part A answer says.",
          "Reread paragraph 4, where Simone gets ready and makes the save. Then look back at what Dani told her.",
          "The girl kicks the ball hard toward the corner, so the answer about a soft kick does not fit. Check the other Part A answers against the story."
        ],
        how: [
          "In paragraph 3, Dani tells Simone, \"Watch the ball, not the kicker's feet.\"",
          "In paragraph 4, every time the ball comes near, Simone keeps her eyes on it. Then she dives and makes the save.",
          "Part A: She uses Dani's tip and keeps her eyes on the ball. Part B: \"After that, every time the ball came near, she kept her eyes on it.\"",
          "The coach gives her the gloves at the start, not for the save. The kick is hard, not soft, and the story never says the team cheers."
        ],
        misconception: "A common mix-up is choosing the sentence about the kick or the save itself. The question asks what helps her make the save.",
        why: "Part A: She uses Dani's tip and keeps her eyes on the ball. Part B: \"After that, every time the ball came near, she kept her eyes on it.\" Dani told her to watch the ball, and this sentence shows her doing it before the save. The gloves come at the start, the kick is hard, and the story does not tell about cheering." },
      { id: "SK-RA2a-C12", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: ["p6"],
        prompt: "Complete the sentences about the end of the story. Choose the best answer for each blank.",
        text: "After the game, Simone shows that she {0}. The best proof is the sentence {1}",
        slots: [
          { options: ["wants to get better at playing goalie", "never wants to play goalie again", "is angry that her team lost"], answer: 0 },
          { options: ["\"Can you help me practice goalie next week?\"", "\"The Falcons lost the game, 2 to 1.\"", "\"Simone dove and pushed it away with her fingertips.\""], answer: 0 }
        ],
        clue: "First decide what Simone wants after the game. Then pick the sentence that shows it, not just a true sentence from near the end.",
        hints: [
          "First decide what Simone wants after the game. Then pick the sentence that shows it, not just a true sentence from near the end.",
          "Reread paragraph 5, after the game.",
          "The Falcons losing is true, but it tells what happened to the team, not what Simone wants. Decide what she wants, then choose the proof."
        ],
        how: [
          "After the game, Simone runs over to Dani and asks for help practicing goalie next week.",
          "Asking for more practice shows she wants to get better at playing goalie.",
          "The score tells what happened to the team, and the dive is about the save during the game.",
          "The answers: she wants to get better at playing goalie, and the proof is \"Can you help me practice goalie next week?\""
        ],
        misconception: "A common mix-up is choosing a true sentence from the end of the story, like the score, that does not show what Simone wants.",
        why: "The answers are \"wants to get better at playing goalie\" and \"Can you help me practice goalie next week?\" Asking for more practice shows she wants to improve. She does not quit, the story never says she is angry, the score is about the team, and the dive happens during the game." },
      { id: "SK-RA2a-C13", type: "hottext", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: ["p6"],
        prompt: "Simone's dad says, \"Simone is a thankful teammate.\" Which sentence BEST supports his opinion? Choose the sentence in the passage.",
        targets: ["p6:3:1", "p6:4:1", "p6:4:4", "p6:5:2", "p6:5:3"],
        answer: ["p6:5:3"], pick: 1,
        clue: "Thankful means showing that you are glad someone helped you. The opinion is about Simone, so the proof must show something Simone does or says.",
        hints: [
          "Thankful means showing that you are glad someone helped you. The opinion is about Simone, so the proof must show something Simone does or says.",
          "Reread paragraph 5, after the game.",
          "Dani jogging over shows that Dani is kind, but it does not show anything about Simone. Look closely at what Simone does and says after the game."
        ],
        how: [
          "Thankful means showing you are glad someone helped you.",
          "After the game, Simone runs over to Dani. Running over by itself does not show thanks.",
          "Then Simone tells Dani that she is thankful for the tip. That is the proof.",
          "Dani jogging over shows Dani's kindness, nodding shows Simone listening, and the dive shows her skill."
        ],
        misconception: "A common mix-up is choosing a sentence about Dani's kindness. The opinion is about Simone, so the proof must show Simone.",
        why: "The answer is the sentence where Simone says, \"Thanks for your tip.\" Thanking Dani shows she is glad Dani helped her. Running over to Dani, nodding and diving do not show thanks, and Dani jogging over is about Dani." },
      { id: "SK-RA2a-C14", type: "ms", points: 2, dok: 3, std: ["3.T.RA.2.a"], passages: [], pick: 2,
        stem: ["**The Reading Dog**", "(1) Every Tuesday, a calm dog named Waffles visits the Oak Street Library.", "(2) Kids who used to be too shy to read out loud now read to Waffles in loud, clear voices.", "(3) Waffles has been a library dog for four years.", "(4) One boy said, \"Waffles never laughs when I mix up a word, so I'm not scared to try.\"", "(5) Teachers say that some of these kids now raise their hands to read in class, too."],
        prompt: "The librarian says, \"Reading to Waffles helps shy kids feel brave.\" Which TWO sentences are true but do NOT support her idea? Choose two answers.",
        choices: [
          { text: "Every Tuesday, a calm dog named Waffles visits the Oak Street Library.", correct: true },
          { text: "Waffles has been a library dog for four years.", correct: true },
          { text: "Kids who used to be too shy to read out loud now read to Waffles in loud, clear voices." },
          { text: "One boy said, \"Waffles never laughs when I mix up a word, so I'm not scared to try.\"" },
          { text: "Teachers say that some of these kids now raise their hands to read in class, too." }
        ],
        clue: "A sentence supports an idea only if it shows the idea. Here, ask of each sentence: does it show a shy kid becoming brave?",
        hints: [
          "A sentence supports an idea only if it shows the idea. Here, ask of each sentence: does it show a shy kid becoming brave?",
          "Read each sentence and say in your own words what it is about. Choose two.",
          "The boy's words show he is not scared to try anymore, so his sentence does support the idea. Check the other four."
        ],
        how: [
          "The librarian's idea is that reading to Waffles helps shy kids feel brave.",
          "Sentences 2, 4 and 5 show kids who were shy now reading out loud, trying without fear and raising their hands in class.",
          "Sentence 1 tells when Waffles visits, and sentence 3 tells how long he has been a library dog. They are true, but they do not show anyone becoming brave.",
          "The answers are \"Every Tuesday, a calm dog named Waffles visits the Oak Street Library.\" and \"Waffles has been a library dog for four years.\""
        ],
        misconception: "A common mix-up is thinking a sentence about the dog must support the idea because the idea is about the dog. It has to show the kids becoming brave.",
        why: "The answers are \"Every Tuesday, a calm dog named Waffles visits the Oak Street Library.\" and \"Waffles has been a library dog for four years.\" They are true, but they tell when he visits and how long he has worked, not that shy kids become brave. The other three sentences show kids reading loudly, trying without fear and raising their hands in class." },
      /* Constructed response: never scored. */
      { id: "SK-RA2a-C15", type: "cr", dok: 3, std: ["3.T.RA.2.a"], passages: ["p6"], rows: 4,
        prompt: "Do you think Simone should keep playing goalie? Write your opinion. Then copy one sentence from \"The New Goalie\" that supports it, and tell how it supports it.",
        sample: "I think Simone should keep playing goalie. The story says, \"Simone dove and pushed it away with her fingertips.\" That shows she can make a hard save, even in her very first game.",
        criteria: ["I wrote my opinion.", "I copied one sentence from the story, using its exact words inside quotation marks.", "I told how the sentence supports my opinion."],
        clue: "Decide yes or no first. Then look for a sentence that shows why you think so.",
        hints: [
          "Decide yes or no first. Then look for a sentence that shows why you think so.",
          "Look at what Simone does in paragraph 4 and what she asks for in paragraph 5.",
          "Copy the sentence exactly, inside quotation marks. Then add a sentence that starts \"That shows\" and connects it to your opinion."
        ],
        how: [
          "Write your opinion in one sentence, such as \"I think Simone should keep playing goalie.\"",
          "Find a sentence in the story that backs it up, and copy its exact words inside quotation marks.",
          "Tell how that sentence supports your opinion.",
          "Compare with the sample and the checklist. A different opinion can also be right if your sentence supports it."
        ],
        why: "There is more than one good answer. A strong answer gives an opinion, quotes one sentence exactly and explains how the sentence supports the opinion." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short text in the stem. */
  similar: [
    { id: "SK-RA2a-S01", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C06", "SK-RA2a-P4"],
      stem: ["(1) A fennec fox lives in the hot Sahara Desert.", "(2) It has huge ears for its small size.", "(3) Its big ears let extra heat leave its body.", "(4) During the hottest part of the day, it sleeps in a den under the sand.", "(5) It eats insects, mice and plants."],
      prompt: "Which sentence BEST supports the idea that a fennec fox's BODY helps it stay cool?",
      choices: [
        { text: "Its big ears let extra heat leave its body.", correct: true },
        { text: "During the hottest part of the day, it sleeps in a den under the sand." },
        { text: "A fennec fox lives in the hot Sahara Desert." },
        { text: "It eats insects, mice and plants." }
      ],
      clue: "Read the idea word by word. It is about the fox's body, not only about staying cool.",
      hints: [
        "Read the idea word by word. It is about the fox's body, not only about staying cool.",
        "Find the sentences that tell about heat or the desert.",
        "Where the fox lives is true, but it does not show how its body keeps it cool. Compare the other choices with the idea."
      ],
      how: [
        "The idea is that the fox's body helps it stay cool.",
        "Sentence 3 says its big ears let extra heat leave its body. Ears are part of its body.",
        "Sleeping in a den also keeps it cool, but a den is a place, not a part of its body. Where it lives and what it eats do not show the idea.",
        "The answer is \"Its big ears let extra heat leave its body.\""
      ],
      why: "The answer is \"Its big ears let extra heat leave its body.\" Ears are part of the fox's body, and they help it lose heat. The den is a place it sleeps, not part of its body, and where it lives and what it eats do not show the idea." },
    { id: "SK-RA2a-S02", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C11", "SK-RA2a-C08", "SK-RA2a-C04"],
      stem: ["(1) Rafi wrote his name in big letters on the wing of his paper airplane.", "(2) The class airplane contest in the gym would start in five minutes.", "(3) \"What if it nose-dives on the very first throw?\" he whispered to his friend Bo.", "(4) Bo handed him a sharp pencil and gave him a friendly smile."],
      prompt: "Answer: Rafi is worried about the contest. Which sentence BEST supports this answer?",
      choices: [
        { text: "\"What if it nose-dives on the very first throw?\" he whispered to his friend Bo.", correct: true },
        { text: "Rafi wrote his name in big letters on the wing of his paper airplane." },
        { text: "The class airplane contest in the gym would start in five minutes." },
        { text: "Bo handed him a sharp pencil and gave him a friendly smile." }
      ],
      clue: "Proof of a feeling often comes from what a character says or does. Ask which sentence shows Rafi worrying.",
      hints: [
        "Proof of a feeling often comes from what a character says or does. Ask which sentence shows Rafi worrying.",
        "Two sentences tell what Rafi does or says. Read them closely.",
        "Bo's smile tells about Bo, not about Rafi. Check the other three sentences."
      ],
      how: [
        "The answer to prove is that Rafi is worried.",
        "In sentence 3, he whispers, \"What if it nose-dives on the very first throw?\" A what-if question about something going wrong shows worry.",
        "Writing his name and the start time do not show a feeling, and the smile is Bo's.",
        "The answer is: \"What if it nose-dives on the very first throw?\" he whispered to his friend Bo."
      ],
      why: "The answer is: \"What if it nose-dives on the very first throw?\" he whispered to his friend Bo. Asking what will happen if something goes wrong shows he is worried. Writing his name and the start time do not show a feeling, and the smile is Bo's." },
    { id: "SK-RA2a-S03", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: [], pick: 2,
      like: ["SK-RA2a-C05", "SK-RA2a-C09", "SK-RA2a-C13"],
      stem: ["Mr. Park's opinion: \"The new dog park is a great place for dogs.\""],
      prompt: "Which TWO facts BEST support Mr. Park's opinion? Choose two answers.",
      choices: [
        { text: "It has a big fenced field where dogs can run without a leash.", correct: true },
        { text: "It has a water fountain made just for dogs.", correct: true },
        { text: "It opened on a sunny Saturday in June." },
        { text: "Its parking lot has spaces for twelve cars." },
        { text: "The town also built a new library last year." }
      ],
      clue: "An opinion is supported by facts that show it. Ask of each fact: does this make the park better for dogs?",
      hints: [
        "An opinion is supported by facts that show it. Ask of each fact: does this make the park better for dogs?",
        "Read each fact and picture a dog at the park. Choose two.",
        "The new library is about the town, not the dog park. Check the other four facts."
      ],
      how: [
        "Mr. Park's opinion is that the park is great for dogs.",
        "A big fenced field lets dogs run off the leash, and a fountain made for dogs gives them water. Both make the park good for dogs.",
        "The opening day and the parking lot are true, but they do not make the park better for dogs. The library is not about the park.",
        "The answers are \"It has a big fenced field where dogs can run without a leash.\" and \"It has a water fountain made just for dogs.\""
      ],
      why: "The answers are \"It has a big fenced field where dogs can run without a leash.\" and \"It has a water fountain made just for dogs.\" Both show the park is good for dogs. The opening day and the parking lot do not, and the library is about the town." }
  ],
  /* Hints and Show me how for items kept in practice: refs P3, P4 (core set 1) and Together P1, P2. */
  addons: {
    "SK-RA2a-P1": {
      hints: [
        "The question asks how the light would feel, not where it comes from or what it is used for.",
        "Reread paragraph 2, about how a firefly makes light.",
        "\"The light shines from the end of its belly\" tells where the light is, not how it would feel. Decide about the other sentences in paragraph 2."
      ],
      how: [
        "The question asks how the light would feel.",
        "Paragraph 2 says that even though the light is bright, it gives off almost no heat. Almost no heat means the light is not hot.",
        "The other sentences tell where the light comes from or what it is used for.",
        "The answer is \"Even though the light is bright, it gives off almost no heat.\""
      ] },
    "SK-RA2a-P2": {
      hints: [
        "Think about what fireflies do when they glow. For Part B, choose the sentence that shows your Part A answer actually happening.",
        "Answer Part A first. Then read each Part B sentence and ask: does it show fireflies finding each other, or does it tell something else about them?",
        "The glow gives off almost no heat, so following a warm glow cannot be how they find each other. For Part B, make sure the sentence you choose matches your Part A answer."
      ],
      how: [
        "Paragraph 3 says fireflies use their light to talk. A male flashes his pattern, and a female flashes back to answer him.",
        "Part A: They flash light patterns back and forth.",
        "Part B: \"A female on the ground flashes back to answer him.\" It shows one firefly answering another with light.",
        "The glow is not warm, the passage says nothing about buzzing, and the soil and leaves are where young fireflies live."
      ] },
    "SK-RA2a-P3": {
      hints: [
        "The name firefly has the word fly in it. Look for sentences that tell what kind of bug a firefly really is.",
        "Reread paragraph 1. Which sentences tell about the name, and which tell about the lights?",
        "\"These lights come from fireflies\" tells where the lights come from, not what kind of bug a firefly is. Decide about the other sentences in paragraph 1."
      ],
      how: [
        "Tyrone's idea is that a firefly is not the kind of bug its name says.",
        "\"Fireflies are not really flies at all.\" shows the name is wrong.",
        "\"They are a kind of beetle.\" tells what kind of bug a firefly really is.",
        "The other sentences tell about the lights, not what kind of bug fireflies are."
      ],
      misconception: "A common mix-up is choosing a sentence that uses the word fireflies but does not prove the idea." },
    "SK-RA2a-P4": {
      hints: [
        "Protect means keep safe. Look for a sentence that tells how something could keep a young firefly safe.",
        "Each choice comes from a different part of the passage. Find each one and read what that paragraph is about.",
        "\"Each kind of firefly has its own blinking pattern\" is about how grown fireflies talk to each other, not about keeping young ones safe. Check the other three choices."
      ],
      how: [
        "Protect means keep safe, so look for how the glow could keep young fireflies safe.",
        "Paragraph 4 says their glow may warn other animals that they taste bad. An animal that is warned will leave them alone.",
        "\"Young fireflies, called larvae, can glow too\" is true, but it does not tell how the glow helps.",
        "The answer is \"Their glow may warn other animals that they taste bad.\""
      ],
      misconception: "A common mix-up is choosing a sentence that is about the right topic, the larvae, but does not show the idea." }
  },
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
  ],
  /* PP-004 form B of the skill check (formB-info). Same code, points (6) and DOK mix as form A,
     on the new literary passage p3. NEEDS INDEPENDENT REVIEW; see docs/audits/work/pp004-formB-formB-info.md. */
  testB: [
    { id: "SK-RA2a-TB1", type: "hottext", points: 1, dok: 2, passages: ["p3"],
      prompt: "Which sentence shows that Rosa feels sad and alone on her first day? Choose the sentence in the passage.",
      targets: ["p3:1:1", "p3:1:3", "p3:2:1", "p3:3:3", "p3:4:2"],
      answer: ["p3:1:3"], pick: 1,
      clue: "Look for something Rosa does, or does not do, that shows how she feels inside.",
      why: "The answer is \"She stared down at her tray and did not even open her milk.\" Looking down and not eating show that Rosa feels sad and alone. The other sentences tell that she is new, that Jada is watching, that she is surprised, or what she likes to do." },
    { id: "SK-RA2a-TB2", type: "ebsr", points: 2, dok: 3, passages: ["p3"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why does Jada go over to Rosa's table?",
        choices: [
          { text: "She knows how it feels to eat lunch alone.", correct: true },
          { text: "She wants to see Rosa's animal drawings." },
          { text: "Ms. Ortiz asked her to sit with the new girl." },
          { text: "Her own table does not have any room left." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"She still remembered eating lunch all by herself and wishing someone would say hello.\"", correct: true },
          { text: "\"Jada watched Rosa from across the room.\"" },
          { text: "\"Then she gave a small nod and followed Jada.\"" },
          { text: "\"Rosa looked up in surprise.\"" }
        ] },
      clue: "Read what Jada thinks about right before she walks over. For Part B, choose the sentence that tells the reason, not just what Jada sees or does.",
      why: "Part A: She knows how it feels to eat lunch alone. Part B: \"She still remembered eating lunch all by herself and wishing someone would say hello.\" Jada was once the new girl, so she understands how Rosa feels. Jada does not learn that Rosa draws until later, the story never says Ms. Ortiz asked her, and Jada invites Rosa to sit at her own table, so it does have room. Watching Rosa tells what Jada does, not why." },
    { id: "SK-RA2a-TB3", type: "hottext", points: 2, dok: 3, passages: ["p3"],
      prompt: "Which TWO sentences show that Rosa feels happy and welcome by the end of the story? Choose two sentences.",
      targets: ["p3:1:3", "p3:3:3", "p3:5:1", "p3:5:2", "p3:5:3"],
      answer: ["p3:5:1", "p3:5:2"], pick: 2,
      clue: "Find sentences near the end. Look for what Rosa does and says, not what Jada does.",
      why: "The answers are \"By the end of lunch, Rosa was giggling at Jada's drawing of a cat in a hat.\" and \"When the bell rang, Rosa asked, 'Can I sit here again tomorrow?'\" Giggling shows she is happy, and wanting to come back shows she feels welcome. Staring at her tray happens at the start, looking up in surprise happens before she joins the table, and the last sentence tells what Jada does and says." },
    { id: "SK-RA2a-TB4", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Mr. Reed says, \"Jada and Rosa like the same thing.\" Which sentence from the story BEST supports his idea?",
      choices: [
        { text: "\"Jada grinned, because she loved to draw animals, too.\"", correct: true },
        { text: "\"Rosa said that she loved to draw animals.\"" },
        { text: "\"At Jada's table, the girls talked about their favorite things.\"" },
        { text: "\"Jada picked up her tray and walked over.\"" }
      ],
      clue: "Mr. Reed's idea is about both girls. Find the sentence that shows they both like one thing.",
      why: "The answer is \"Jada grinned, because she loved to draw animals, too.\" The word too shows that Jada loves the same thing Rosa loves. The sentence about Rosa tells only what Rosa likes. Talking about favorite things does not say the things are the same." }
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
      "A guess, an opinion or a made-up story is not the same as a fact that has been checked.",
      "Read the words, too. Words like everyone knows, or numbers that sound impossible, are warning signs. A good source gives facts that make sense and may tell how people found them out.",
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
  passages: [
    { id: "p1", title: "How Much Do Elephants Eat?", byline: "Source 1", genre: "Informational text (web page)",
      paragraphs: [
        ["Elephants are the largest animals that live on land.", "Because they are so big, they need a lot of food."],
        ["An adult elephant can eat about 300 pounds of plants in one day.", "Scientists who study elephants have watched them eat for as long as 16 hours a day.", "Elephants eat grass, leaves, bark and fruit."],
        ["An elephant uses its trunk to pull up grass and to pick fruit from trees.", "It uses its tusks to peel bark off tree trunks.", "Elephants also drink a lot of water, as much as 50 gallons in a day."],
        ["Plants do not give an elephant much energy in each bite.", "That is why elephants must eat so much and spend most of the day eating."]
      ] },
    { id: "p2", title: "All About Elephants", byline: "Source 2", genre: "Informational text (web page)",
      paragraphs: [
        ["Elephants live in Africa and Asia.", "Everyone knows elephants eat more than any other animal ever!"],
        ["They have long trunks.", "An elephant's trunk has no bones in it.", "Elephants flap their big ears to cool off on hot days."],
        ["An elephant can eat a million pounds of peanuts in one day.", "Elephants live together in family groups.", "A baby elephant is called a calf, and it stays close to its mother."],
        ["Some elephants have long tusks.", "Their gray skin is thick and wrinkly.", "Some elephants live to be 60 years old or even older.", "They can remember places where they found water long ago."]
      ] }
  ],
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
    { id: "SK-RA2b-T5", type: "ebsr", points: 2, dok: 3, passages: ["p1", "p2"],
      prompt: "Mia is writing about how much elephants eat. She found these two web pages. Read both, then answer Part A and Part B.",
      partA: { prompt: "Which source should Mia trust more?",
        choices: [
          { text: "Source 1, because its facts make sense and tell how people found them out.", correct: true },
          { text: "Source 2, because it uses exciting words that make the facts sound big." },
          { text: "Source 1, because it is the first one Mia happened to find." },
          { text: "Source 2, because it says that everyone already knows the facts." }
        ] },
      partB: { prompt: "Which TWO sentences from Source 2 best show that Mia should not trust it?", pick: 2,
        choices: [
          { text: "\"Elephants live in Africa and Asia.\"" },
          { text: "\"Everyone knows elephants eat more than any other animal ever!\"", correct: true },
          { text: "\"They have long trunks.\"" },
          { text: "\"An elephant can eat a million pounds of peanuts in one day.\"", correct: true },
          { text: "\"A baby elephant is called a calf, and it stays close to its mother.\"" }
        ] },
      clue: "Read each source's words closely. Does the writer tell how the facts were found out? Do the numbers seem possible, or do they sound made up?",
      why: "Part A: Source 1, because its facts make sense and tell how people found them out. Part B: \"Everyone knows elephants eat more than any other animal ever!\" and \"An elephant can eat a million pounds of peanuts in one day.\" Source 1 says scientists watched elephants eat, and its numbers can be checked. Source 2 says everyone knows, which does not tell who checked, and a million pounds in one day is far too much to be true. Exciting words and being found first do not make a source trustworthy. The sentences about where elephants live, their trunks and baby elephants are true, so they do not show a problem." }
  ]
});
