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
        "Turn that wondering into a new question that starts with a question word.",
        "Check the text again. Does it already answer your new question? If it does, ask a different one. Lin's question about the nuts nobody digs up is still open."
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
        ["Horseshoe crabs help people, too.", "Their blood is blue!", "People who make medicines use something in it to check that medicines and shots are safe from germs."]
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
          { options: ["choose which flowers to visit", "build their wax cells", "make the sweetest honey of all"], answer: 0 }
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
          "Choosing which flowers to visit is part of finding food. Making the sweetest honey of all asks for an opinion about whose honey is best, and building wax cells is a different topic.",
          "The answers are How do and choose which flowers to visit: \"How do worker bees choose which flowers to visit?\""
        ],
        misconception: "A common mix-up is choosing a yes-or-no start. \"Do worker bees ...\" can be answered with one word, so Maya would learn very little.",
        why: "The answers are How do and choose which flowers to visit. \"How do worker bees choose which flowers to visit?\" is on Maya's topic and needs a fact answer. Do and Is it true that lead to yes or no, wax cells are a different topic, and the sweetest honey of all is an opinion." },
      { ref: "SK-RA1a-P4" },
      { id: "SK-RA1a-C04", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.a"], passages: ["p1"],
        stem: ["Ana read this sentence in \"Busy Honeybees\": \"As they move from flower to flower, they carry pollen.\"", "She did not understand the one science word in that sentence. But the question she wrote down was \"Why do bees like flowers?\""],
        prompt: "Which question should Ana ask instead, to clear up what she did not understand?",
        choices: [
          { text: "What is pollen, and what does it look like?", correct: true },
          { text: "How do bees carry pollen on their bodies from flower to flower?" },
          { text: "Why do plants need pollen to make fruit and seeds?" },
          { text: "What does it mean that bees move from flower to flower?" }
        ],
        clue: "A clarifying question clears up a word or idea you read but did not understand.",
        hints: [
          "A clarifying question clears up a word or idea you read but did not understand.",
          "Reread the sentence Ana read, and find the science word in it.",
          "The question about plants making fruit asks something new to learn more, so it digs deeper instead of clearing up the word. Check each choice that is left."
        ],
        how: [
          "The one science word in the sentence is pollen, so that is the word Ana did not understand. A clarifying question asks about exactly that.",
          "The answer is \"What is pollen, and what does it look like?\"",
          "Moving from flower to flower is a clarifying question too, but about everyday words she already understood. How bees carry pollen skips over the word she did not know. Why plants need pollen digs deeper, which is better once she knows the word."
        ],
        misconception: "A common mix-up is asking a dig-deeper question before clearing up the confusing word. First make sure you understand what you read.",
        why: "The answer is \"What is pollen, and what does it look like?\" It asks about the word Ana did not know. The question about moving from flower to flower clears up everyday words, not the science word. The other two use the word pollen as if she already understood it." },
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
      { id: "SK-RA1a-C06", type: "ms", points: 2, dok: 3, std: ["3.T.RA.1.a"], passages: ["p3"], pick: 2,
        prompt: "Jamal read the whole article. Now he wants questions to research next. Which TWO questions about hiccups would still be worth researching after reading this article?",
        choices: [
          { text: "What ideas do scientists have about why we hiccup?", correct: true },
          { text: "How well does holding your breath work to stop hiccups?", correct: true },
          { text: "What muscle under your lungs starts a hiccup?" },
          { text: "What makes the hic sound when you hiccup?" },
          { text: "Why do people sneeze when they smell pepper?" }
        ],
        clue: "A question is worth researching next when it fits your topic and the text you read has not answered it yet.",
        hints: [
          "A question is worth researching next when it fits your topic and the text you read has not answered it yet.",
          "Check each question against the article. Choose two.",
          "The sneezing question is not answered in the article, but it is about sneezing, not hiccups. Check each question that is left."
        ],
        how: [
          "The article already tells which muscle starts a hiccup and what makes the hic sound, so those questions would not teach Jamal anything new.",
          "The article says scientists are still not sure why we hiccup. It also says some people hold their breath to try to stop hiccups, but not whether that works. Those questions are still open.",
          "The answers are \"What ideas do scientists have about why we hiccup?\" and \"How well does holding your breath work to stop hiccups?\"",
          "The sneezing question is open too, but it leaves Jamal's topic."
        ],
        misconception: "A common mix-up is choosing a question just because it is about the topic. Check whether the text already answers it.",
        why: "The answers are \"What ideas do scientists have about why we hiccup?\" and \"How well does holding your breath work to stop hiccups?\" The article leaves both open. It already answers the muscle and sound questions, and sneezing is a different topic." },
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
        sample: "My topic: why cats purr. My research question: How does a cat make its purring sound? My next question: What part of a cat's throat moves when it purrs?",
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
          "\"Is a quilt nicer to sleep under than a plain blanket?\" asks what people like, so people would give different answers. Check each question that is left."
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
      stem: ["Mila read this at a museum: \"This fossil shows a fish that lived in a sea that once covered part of Georgia.\"", "She stopped at the one science word that she did not understand."],
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
        "Find the science word in what Mila read. Then read each choice.",
        "Which museum is the most fun asks for an opinion, so it cannot clear anything up. Check each choice that is left."
      ],
      how: [
        "The one science word in what Mila read is fossil, so that is the word she did not understand.",
        "A clarifying question asks about exactly that part.",
        "The answer is \"What exactly is a fossil, and how does one form?\" The age of the fossil and fish in the sea today are questions that dig deeper or go to a new idea."
      ],
      why: "The answer is \"What exactly is a fossil, and how does one form?\" It asks about the word she did not know. The age of the fossil and fish living today are new questions, and the most fun museum is an opinion." },
    { id: "SK-RA1a-S02", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-P4", "SK-RA1a-C08"],
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
      why: "The answer is \"What makes a submarine sink down and then rise back up?\" It fits her topic and asks for facts. Scarier is an opinion, the yes-or-no question teaches her nothing new, and whales are a different topic." },
    /* ENG-07 (author b3b): S04-S10 give every core item a similar item that really practises it. */
    { id: "SK-RA1a-S04", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [], pick: 2,
      like: ["SK-RA1a-P5"],
      stem: ["A pufferfish can puff up into a round, spiky ball. It does this by gulping lots of water very fast. A puffed-up pufferfish is too big and prickly for most bigger fish to swallow. Many kinds of pufferfish are also poisonous."],
      prompt: "Which TWO questions does this text answer?",
      choices: [
        { text: "How does a pufferfish puff itself up?", correct: true },
        { text: "Why does puffing up help a pufferfish stay safe?", correct: true },
        { text: "How long can a pufferfish stay puffed up?" },
        { text: "Where in the ocean do most pufferfish live?" },
        { text: "How many eggs does a pufferfish lay?" }
      ],
      clue: "A text answers a question only if you can point to a sentence that gives the answer.",
      hints: [
        "A text answers a question only if you can point to a sentence that gives the answer.",
        "Take one question at a time, and look for a sentence that answers it. Choose two.",
        "The text never tells how many eggs a pufferfish lays. Check each question that is left."
      ],
      how: [
        "The second sentence says it puffs up by gulping lots of water very fast.",
        "The third sentence says a puffed-up pufferfish is too big and prickly for most bigger fish to swallow. That is how puffing up keeps it safe.",
        "The answers are \"How does a pufferfish puff itself up?\" and \"Why does puffing up help a pufferfish stay safe?\"",
        "The text never tells how long it stays puffed up, where most pufferfish live or how many eggs it lays."
      ],
      why: "The answers are \"How does a pufferfish puff itself up?\" and \"Why does puffing up help a pufferfish stay safe?\" Gulping water and being too prickly to swallow answer them. The text says nothing about how long, where or how many eggs." },
    { id: "SK-RA1a-S05", type: "ms", points: 2, dok: 3, std: ["3.T.RA.1.a"], passages: [], pick: 2,
      like: ["SK-RA1a-C06"],
      stem: ["Ty read this short text:", "Meerkats live in groups called mobs. While the group digs for food, one meerkat stands on a high spot as a guard. If the guard sees a hawk, it gives a loud bark. Then the others run into their burrows."],
      prompt: "Ty wants questions to research next. Which TWO questions about meerkats would still be worth researching after reading this text?",
      choices: [
        { text: "How do meerkats decide which one will be the guard?", correct: true },
        { text: "How do the other meerkats know what each kind of bark means?", correct: true },
        { text: "What does the guard do when it sees a hawk?" },
        { text: "Where do the other meerkats go when the guard barks?" },
        { text: "How do prairie dogs dig their long tunnels?" }
      ],
      clue: "A question is worth researching next when it fits your topic and the text you read has not answered it yet.",
      hints: [
        "A question is worth researching next when it fits your topic and the text you read has not answered it yet.",
        "Check each question against the text. Choose two.",
        "The prairie dog question is not answered in the text, but it is about prairie dogs, not meerkats. Check each question that is left."
      ],
      how: [
        "The text already tells what the guard does when it sees a hawk and where the others go.",
        "It does not tell how the guard is chosen or how the others understand the barks. Those questions are still open.",
        "The answers are \"How do meerkats decide which one will be the guard?\" and \"How do the other meerkats know what each kind of bark means?\"",
        "The prairie dog question is open too, but it leaves Ty's topic."
      ],
      why: "The answers are \"How do meerkats decide which one will be the guard?\" and \"How do the other meerkats know what each kind of bark means?\" The text leaves both open. It already answers the hawk and burrow questions, and prairie dogs are a different topic." },
    { id: "SK-RA1a-S06", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C02"],
      stem: ["Leo wants to research how snakes use their tongues."],
      prompt: "Build a research question for Leo. Choose the best answer for each blank.",
      text: "{0} snakes {1}?",
      slots: [
        { options: ["Why do", "Do", "Is it true that"], answer: 0 },
        { options: ["flick their tongues in and out", "have scales on their skin", "shed their old skin"], answer: 0 }
      ],
      clue: "A research question asks about your topic and leads to an answer you can look up.",
      hints: [
        "A research question asks about your topic and leads to an answer you can look up.",
        "Say Leo's topic in your own words. Then try each choice in each blank and read the whole question out loud.",
        "\"Have scales on their skin\" is a fact about snakes, but it is not about their tongues. Check the other choices in each blank."
      ],
      how: [
        "Leo's topic is how snakes use their tongues.",
        "\"Do\" and \"Is it true that\" start yes-or-no questions. \"Why do\" leads to a bigger answer with facts.",
        "Scales and shedding old skin are good things to research, but they are not about tongues.",
        "The answers are Why do and flick their tongues in and out: \"Why do snakes flick their tongues in and out?\""
      ],
      why: "The answers are Why do and flick their tongues in and out. The question is on Leo's topic and needs a fact answer. Do and Is it true that lead to yes or no, and scales and shedding skin are different topics." },
    { id: "SK-RA1a-S07", type: "hottext", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C05"],
      stem: ["Nadia chose her own topic: how a thermos keeps soup hot.", "She wrote five questions."],
      prompt: "Which TWO questions fit Nadia's topic? Choose two questions.",
      options: [
        "What inside a thermos keeps the heat from getting out?",
        "Why does soup in a thermos stay hot for hours?",
        "How tall is a typical soup thermos?",
        "How do ovens get so hot?",
        "How much does a thermos cost at the store?"
      ],
      answer: [0, 1], pick: 2,
      clue: "A question fits your topic when its answer would help you learn about that exact topic.",
      hints: [
        "A question fits your topic when its answer would help you learn about that exact topic.",
        "Say Nadia's topic in your own words. Then read each question. Choose two.",
        "The oven question is about how an oven gets hot, not about keeping soup hot. Check each question that is left."
      ],
      how: [
        "Nadia's topic is not just a thermos. It is how a thermos keeps soup hot.",
        "What keeps the heat in and why the soup stays hot for hours are both about keeping soup hot.",
        "The answers are \"What inside a thermos keeps the heat from getting out?\" and \"Why does soup in a thermos stay hot for hours?\"",
        "How tall a thermos is and the price are about a thermos, but not about keeping soup hot."
      ],
      why: "The answers are \"What inside a thermos keeps the heat from getting out?\" and \"Why does soup in a thermos stay hot for hours?\" Both are about keeping soup hot. How tall a thermos is and the price are about a thermos but not that topic, and ovens are a different topic." },
    { id: "SK-RA1a-S08", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C12"],
      stem: ["Ella read this: \"Koalas live in Australia. They eat the leaves of eucalyptus trees, and they sleep 18 to 22 hours a day.\"", "Her question is \"How big is a baby koala when it is born?\""],
      prompt: "Complete the sentence about Ella's research. Choose the best answer for each blank.",
      text: "Ella will need {0}, because the text {1}.",
      slots: [
        { options: ["another source", "to read the text again", "to ask a friend what they think"], answer: 0 },
        { options: ["never tells about baby koalas", "tells it in the second sentence", "is too short to trust"], answer: 0 }
      ],
      clue: "Before you research, check whether the text you have already answers your question.",
      hints: [
        "Before you research, check whether the text you have already answers your question.",
        "Read each sentence, and look for anything about baby koalas.",
        "Asking a friend what they think gives an opinion, not a fact. Check the other choices in each blank."
      ],
      how: [
        "The text tells where koalas live, what they eat and how long they sleep.",
        "It says nothing about baby koalas, so it cannot answer Ella's question.",
        "The answers are another source and never tells about baby koalas.",
        "The second sentence is about food and sleep, and a short text can still be true. It just does not cover her question."
      ],
      why: "The answers are another source and never tells about baby koalas. The text covers home, food and sleep only. Reading it again will not help, a friend's opinion is not a fact, and being short does not make a text untrue." },
    { id: "SK-RA1a-S09", type: "match", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C13"],
      stem: ["Pia read this sign at an old mill:", "\"This grist mill was built in 1880. Its water wheel turned a huge stone that ground corn into meal.\""],
      prompt: "Pia wrote four questions. Is each one a clarifying question or a dig-deeper question? Match each question.",
      cols: ["clears up something I did not understand", "digs deeper to learn more"],
      rows: [
        { text: "What is a grist mill?", answer: 0 },
        { text: "What does the word meal mean on this sign?", answer: 0 },
        { text: "How many families brought their corn to this mill?", answer: 1 },
        { text: "Why did people stop using water mills like this one?", answer: 1 }
      ],
      clue: "A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new to learn more.",
      hints: [
        "A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new to learn more.",
        "Reread the sign, and find any words that a reader might not understand.",
        "The question about what a grist mill is asks about words on the sign that the sign never explains. Decide the other three the same way."
      ],
      how: [
        "Grist mill and meal are words on the sign that a reader may not know. Questions about them clear them up.",
        "How many families came and why people stopped using water mills are not on the sign at all. Those questions ask something new.",
        "Clarifying: \"What is a grist mill?\" and \"What does the word meal mean on this sign?\" Dig deeper: the families question and the water mills question."
      ],
      why: "The grist mill and meal questions clear up words on the sign. The questions about families and about why people stopped using water mills dig deeper, because the sign does not talk about those things." },
    { id: "SK-RA1a-S10", type: "cr", dok: 3, std: ["3.T.RA.1.a"], passages: [], rows: 5,
      like: ["SK-RA1a-C14"],
      stem: ["Think of something you saw this week that made you wonder, like a bug, a machine or a game."],
      prompt: "Write it as your topic. Write one research question about it. Then write a clarifying question about a word you might meet when you read about it.",
      sample: "My topic: how zippers work. My research question: How do the teeth of a zipper lock together? My clarifying question: I read that a zipper has a slider. What is the slider?",
      criteria: [
        "I wrote a topic that I chose myself.",
        "My research question asks about facts I could look up.",
        "My research question needs more than a yes or no answer.",
        "My last question asks about a word or idea I might not understand."
      ],
      clue: "Think back over your week. What did you see that made you ask how or why?",
      hints: [
        "Think back over your week. What did you see that made you ask how or why?",
        "Turn your wondering into a question that starts with how, why or what. Check that a book or an expert could answer it.",
        "For the clarifying question, think of a word a book about your topic might use that you do not know yet. You can start like this: What is ___?"
      ],
      how: [
        "Choose something you wondered about this week. It is your choice, so there is no wrong topic.",
        "Write a question about it that a book, a video or an expert could answer with facts.",
        "Think of a word you might meet when you read about it, and ask what it means.",
        "Check your work with the list. One good answer follows, and other answers can also be right."
      ],
      why: "Many answers can be right. A good answer names a topic the writer chose, asks a fact question that needs more than yes or no, and adds a clarifying question about a word or idea. A grown-up can look at it with you; it is never scored." },
    { id: "SK-RA1a-S11", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [], pick: 2,
      like: ["SK-RA1a-C07"],
      stem: ["Bo read this: \"A geyser is a hot spring that sometimes shoots water high into the air. Deep underground, hot rock heats the water until some of it turns to steam. The steam pushes the water up through a narrow opening.\""],
      prompt: "Which TWO questions are clarifying questions about something in this text?",
      choices: [
        { text: "What is a hot spring?", correct: true },
        { text: "What does the text mean by a narrow opening?", correct: true },
        { text: "How often does the most famous geyser shoot water?" },
        { text: "Are there any geysers in Georgia?" },
        { text: "Is a geyser more exciting than a waterfall?" }
      ],
      clue: "A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new to learn more.",
      hints: [
        "A clarifying question clears up a word or idea you read but did not understand. A dig-deeper question asks something new to learn more.",
        "For each question, find the part of the text it is about, if there is one. Choose two.",
        "The question about being more exciting than a waterfall asks for an opinion, so it is not a clarifying question. Check each question that is left."
      ],
      how: [
        "The text uses the words hot spring but never says what one is. A question about it clears that up.",
        "It also says the steam pushes water through a narrow opening, which may be hard to picture. Asking what that means clears it up.",
        "The answers are \"What is a hot spring?\" and \"What does the text mean by a narrow opening?\"",
        "The questions about the most famous geyser and about geysers in Georgia ask something new that the text does not cover, so they dig deeper."
      ],
      why: "The answers are \"What is a hot spring?\" and \"What does the text mean by a narrow opening?\" Both are about parts of the text that may not be clear. The famous geyser and Georgia questions dig deeper, and more exciting is an opinion." },
    { id: "SK-RA1a-S12", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C08"],
      stem: ["Ari read: \"Some frogs can freeze solid in winter. In spring, they thaw out and hop away.\"", "Then he wrote this dig-deeper question: \"Can some frogs freeze in the winter?\" But the text already answers it."],
      prompt: "Which question would be a better dig-deeper question for Ari?",
      choices: [
        { text: "How does a frog's body stay alive while it is frozen?", correct: true },
        { text: "Do some frogs freeze solid when it gets cold?" },
        { text: "How do bears find food before their long winter sleep?" },
        { text: "Are frogs much cuter than toads are?" }
      ],
      clue: "A dig-deeper question stays on the idea you just learned and asks something the text does not tell you yet.",
      hints: [
        "A dig-deeper question stays on the idea you just learned and asks something the text does not tell you yet.",
        "Say what Ari just learned in your own words.",
        "The text already says that some frogs freeze solid, so asking that again would not teach Ari anything new. Check each choice that is left."
      ],
      how: [
        "Ari learned that some frogs freeze in winter and thaw out in spring. The text does not say how they survive.",
        "A good dig-deeper question stays on that idea and asks what the text leaves out.",
        "The answer is \"How does a frog's body stay alive while it is frozen?\"",
        "Bears are a new question, but they leave the idea Ari just learned. Cuter is an opinion."
      ],
      why: "The answer is \"How does a frog's body stay alive while it is frozen?\" It stays on what Ari learned and asks what the text does not explain. The freezing question is already answered, bears are a different idea, and cuter is an opinion." },
    { id: "SK-RA1a-S13", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C10"],
      stem: ["June and Max are researching how school buses are kept safe.", "June asked: \"How do mechanics check that a school bus is safe to drive?\"", "Max asked: \"Is our school bus painted yellow?\""],
      prompt: "Whose question would help them more with their research, and why?",
      choices: [
        { text: "June's, because its answer would be full of facts that they do not know yet.", correct: true },
        { text: "Max's, because a yes-or-no answer is quick and easy to find." },
        { text: "Max's, because it is about their own bus, so it fits the topic better." },
        { text: "June's, because it is the longer question, so it must ask for a fact." }
      ],
      clue: "A good research question leads to an answer that teaches you something new.",
      hints: [
        "A good research question leads to an answer that teaches you something new.",
        "Read both questions again. Then read the reason in each choice, not only the name.",
        "Being longer does not make a question better. Check each choice that is left."
      ],
      how: [
        "Max's question can be answered with one word, and they can already see the answer.",
        "June's question needs a long answer about what mechanics check. That teaches them something new.",
        "The answer is \"June's, because its answer would be full of facts that they do not know yet.\"",
        "Max's question is not more on the topic, and a quick answer is not the goal of research."
      ],
      why: "The answer is \"June's, because its answer would be full of facts that they do not know yet.\" Max's yes-or-no question would teach them nothing new. Being about their own bus does not make it fit better, and length does not make a question better." },
    { id: "SK-RA1a-S14", type: "order", points: 2, dok: 3, std: ["3.T.RA.1.a"], passages: [],
      like: ["SK-RA1a-C11"],
      stem: ["Rina read this: \"Arctic terns are small seabirds. They nest in the far north in summer. Their chicks hatch after about three weeks. Later, the terns fly all the way to the far south.\""],
      prompt: "Rina asked four questions. Each new question grew out of the answer to the one before it. Put her questions in order, from first to last.",
      steps: [
        "Where do arctic terns build their nests?",
        "How long do tern eggs take to hatch?",
        "What do the terns do after the chicks hatch?",
        "How do young terns know the way to the far south?"
      ],
      clue: "In a chain of dig-deeper questions, each new question grows out of the answer to the one before it.",
      hints: [
        "In a chain of dig-deeper questions, each new question grows out of the answer to the one before it.",
        "Find the question that could start the chain. Then use the text to find its answer, and look for the question that grows out of that answer.",
        "The question about how young terns know the way could only come after Rina learned that the terns fly south. Use the text to order the other three."
      ],
      how: [
        "First, Rina asks where terns nest. The text answers: in the far north in summer.",
        "Nests lead to eggs: how long do they take to hatch? About three weeks.",
        "Hatching leads to what the terns do next: they fly to the far south. Then she wonders how the young birds know the way, which the text does not tell.",
        "The order is: where they nest, how long the eggs take, what the terns do next, how young terns know the way."
      ],
      why: "The order is: where terns nest, how long the eggs take to hatch, what the terns do after the chicks hatch, and how young terns know the way south. Each answer in the text leads to the next question, and the last one goes past the text." },
    { id: "SK-RA1a-S15", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.a"], passages: [], pick: 2,
      like: ["SK-RA1a-C15"],
      stem: ["Marco's grandpa showed him a doll made from dried corn husks.", "Marco chose his own topic: how children long ago made their own toys."],
      prompt: "Which TWO questions would be good research questions for Marco's topic?",
      choices: [
        { text: "How did children long ago turn corn husks into dolls?", correct: true },
        { text: "What other things did children long ago use to make toys?", correct: true },
        { text: "Did children long ago play with toys?" },
        { text: "Is a wooden toy more fun than a plastic toy?" },
        { text: "Who made the best toys in all of Georgia?" }
      ],
      clue: "A good research question asks about facts you can look up, and its answer teaches you something new about your topic.",
      hints: [
        "A good research question asks about facts you can look up, and its answer teaches you something new about your topic.",
        "Say Marco's topic in your own words. Then read each question. Choose two.",
        "\"Is a wooden toy more fun than a plastic toy?\" asks what people like, so people would give different answers. Check each question that is left."
      ],
      how: [
        "Marco's topic is how children long ago made their own toys.",
        "Turning corn husks into dolls and finding other things to make toys from are both about making toys, and a book or an expert could answer them with facts.",
        "The answers are \"How did children long ago turn corn husks into dolls?\" and \"What other things did children long ago use to make toys?\"",
        "More fun and best tell what people think, so people would give different answers. Those are opinion questions, even the one that starts with who."
      ],
      why: "The answers are \"How did children long ago turn corn husks into dolls?\" and \"What other things did children long ago use to make toys?\" Both ask for facts about making toys long ago. Playing with toys is a yes-or-no question he knows, and more fun and best are opinions." }
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
        ["Right whales are in danger.", "Only a few hundred of them are left in the world.", "Ships and fishing ropes are their biggest dangers.", "People are working on fishing ropes that break more easily, so a whale caught in one can pull free."]
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
          "The sentence that says only a few hundred right whales are left only counts the whales. Counting them does not keep them safe. Decide about the other sentences in those two paragraphs."
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
          { text: "Copy the number from a post that does not say who wrote it, because it names a number of years." },
          { text: "Use the length of a new calf, because it is a number about right whales." },
          { text: "Use how long a blue whale lives, because all whales are alike." }
        ],
        clue: "When your sources do not answer a question, you need more facts, not a guess. Ask where Kai could find facts he can trust.",
        hints: [
          "When your sources do not answer a question, you need more facts, not a guess. Ask where Kai could find facts he can trust.",
          "Reread Kai's question. For each answer, ask two things: would it really tell him how long right whales live, and could he trust it?",
          "The length of a new calf is a true number from Source 2, but it tells how long a calf is, not how long a whale lives. Use both questions on the other three answers."
        ],
        how: [
          "Kai's two sources do not tell how long right whales live, so he needs another source.",
          "A post that does not say who wrote it gives a number, but Kai cannot tell if the writer knows whales. A blue whale is a different whale, so its facts may not fit right whales.",
          "The length of a calf is a fact, but it does not answer his question.",
          "The answer is \"Look for another credible source, such as a whale research center's web page.\""
        ],
        misconception: "A common mix-up is filling a gap with a fact that does not fit or a source nobody can check. Good researchers look for another source they can trust.",
        why: "The answer is \"Look for another credible source, such as a whale research center's web page.\" When sources leave a question unanswered, a researcher finds another source made by people who know the facts. A post with no writer is not a source Kai can trust, a blue whale is a different animal, and the calf's length does not tell how long whales live." }
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
      why: "Opening a clam and pushing out its stomach are about eating, so they go on \"How a sea star eats.\" Creeping on tube feet and climbing a rock are about moving, so they go on \"How a sea star moves.\"" },
    { id: "SK-RA1b-S04", type: "match", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C01"],
      prompt: "Leah is finding out how violins are made. Match each source to the kind of source it is.",
      cols: ["Print (on paper)", "Digital (on a screen)", "Personal communication (from a person)"],
      rows: [
        { text: "a music magazine from the school library", answer: 0 },
        { text: "a video of a violin maker on a music school's website", answer: 1 },
        { text: "what a violin maker told Leah when she visited his shop", answer: 2 },
        { text: "a library book about instruments from around the world", answer: 0 }
      ],
      clue: "Ask how the facts reach Leah. Are they printed on paper, shown on a screen, or told to her by a person?",
      hints: [
        "Ask how the facts reach Leah. Are they printed on paper, shown on a screen, or told to her by a person?",
        "Two sources have a violin maker in them. For those two, look at how Leah gets the facts, not at who gives them.",
        "A magazine is printed on paper, even though it is not a book. Sort the other three the same way."
      ],
      how: [
        "Paper: the music magazine and the library book are print.",
        "Screen: the video on the music school's website is digital, even though a violin maker is in it.",
        "A person: what the violin maker told Leah in his shop is personal communication."
      ],
      why: "The magazine and the library book are print. The video on a website is digital. What the violin maker told Leah in person is personal communication." },
    { id: "SK-RA1b-S05", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C04"],
      stem: ["**Source 1, a library book:** Puffins dive underwater to catch small fish. A puffin can hold many fish in its beak at once.",
        "**Source 2, notes from a talk with a bird scientist:** Puffins dig burrows in the ground to lay their eggs. A puffin chick is called a puffling.",
        "**Kim's notes table**",
        "**Row 1.** Puffins dive to catch small fish. (Source 1)",
        "**Row 2.** Puffins lay their eggs in burrows. (Source 1)",
        "**Row 3.** A puffin chick is called a puffling. (Source 2)"],
      prompt: "Which row of Kim's notes table names the wrong source?",
      choices: [
        { text: "Row 2, because the burrows are in Source 2", correct: true },
        { text: "Row 1, because the fish are in Source 2" },
        { text: "Row 3, because the puffling is in Source 1" },
        { text: "None of the rows, because all three are right" }
      ],
      clue: "Check each fact against the source its row names. Find the exact sentence before you decide.",
      hints: [
        "Check each fact against the source its row names. Find the exact sentence before you decide.",
        "Read Source 1 and Source 2 again. For each row, put your finger on the sentence it came from.",
        "The fish facts are in Source 1, so row 1 is right. Check rows 2 and 3 the same way."
      ],
      how: [
        "Row 1: diving to catch fish is in Source 1. It is right.",
        "Row 2: digging burrows to lay eggs is in Source 2, the talk with the bird scientist, not Source 1.",
        "Row 3: the puffling is in Source 2. It is right.",
        "The answer is \"Row 2, because the burrows are in Source 2\"."
      ],
      why: "The answer is \"Row 2, because the burrows are in Source 2\". The bird scientist told about the burrows, so the row should name Source 2. Rows 1 and 3 name the right sources." },
    { id: "SK-RA1b-S06", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C08", "SK-RA1b-P7"],
      stem: ["**The source says:** \"A walrus hooks its long tusks onto the ice and uses them to pull its heavy body out of the water.\"",
        "**Sam's question:** How does a walrus get out of the water?"],
      prompt: "Which note BEST tells the answer in a few of Sam's own words?",
      choices: [
        { text: "It pulls itself out by hooking its tusks on the ice.", correct: true },
        { text: "It swims up onto the ice by kicking its back flippers." },
        { text: "It uses its long tusks to dig for clams on the sea floor." },
        { text: "A walrus has two long tusks and a heavy body." }
      ],
      clue: "A good note says the same thing as the source, in fewer words, and it answers the question.",
      hints: [
        "A good note says the same thing as the source, in fewer words, and it answers the question.",
        "Read the source sentence again. Then check whether each note says what the source says.",
        "\"A walrus has two long tusks and a heavy body\" is true, but it does not tell how the walrus gets out of the water. Check the other three notes against the source."
      ],
      how: [
        "The source says the walrus hooks its tusks onto the ice and pulls its body out.",
        "The note \"It pulls itself out by hooking its tusks on the ice.\" says the same thing in Sam's own words.",
        "The source never talks about flippers or clams, and the tusk-and-body note does not answer the question.",
        "The answer is \"It pulls itself out by hooking its tusks on the ice.\""
      ],
      why: "The answer is \"It pulls itself out by hooking its tusks on the ice.\" It says what the source says in fewer words. Flippers and clams are not in the source, and the last note does not answer the question." },
    { id: "SK-RA1b-S07", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [], pick: 2,
      like: ["SK-RA1b-C11"],
      stem: ["**Source 1, a science book:** Jellyfish have no bones and no brain. Many jellyfish sting with their long tentacles.",
        "**Source 2, notes from an aquarium talk:** The guide said that jellyfish have no brain. She said that their tentacles can sting small fish."],
      prompt: "Which TWO facts are in BOTH sources? Choose two answers.",
      choices: [
        { text: "Jellyfish have no brain.", correct: true },
        { text: "Jellyfish tentacles can sting.", correct: true },
        { text: "Jellyfish have no bones." },
        { text: "The guide works at an aquarium." },
        { text: "Jellyfish are a kind of fish." }
      ],
      clue: "A fact belongs to both sources only if you can find it in each one.",
      hints: [
        "A fact belongs to both sources only if you can find it in each one.",
        "Check each fact in Source 1, and then check it again in Source 2. Choose two.",
        "The guide working at an aquarium is only in Source 2. Check the other four facts in both sources."
      ],
      how: [
        "Both sources say jellyfish have no brain.",
        "Both sources say jellyfish tentacles sting.",
        "Having no bones is only in Source 1, the guide is only in Source 2, and neither source says jellyfish are fish.",
        "The answers are \"Jellyfish have no brain.\" and \"Jellyfish tentacles can sting.\""
      ],
      why: "The answers are \"Jellyfish have no brain.\" and \"Jellyfish tentacles can sting.\" Each one is in both sources. No bones is only in Source 1, the guide is only in Source 2, and neither source says jellyfish are fish." },
    { id: "SK-RA1b-S08", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-P5"],
      stem: ["**Source 1, a library book page:** It tells how a chameleon changes the color of its skin.",
        "**Source 2, notes from a visit to a reptile zoo:** The keeper told the class what the zoo's chameleons eat each day."],
      prompt: "Gia wants to know what chameleons eat. Which source would help her MORE, and why?",
      choices: [
        { text: "Source 2, because the keeper tells what the chameleons eat.", correct: true },
        { text: "Source 1, because it tells how chameleons change color." },
        { text: "Source 1, because a library book has every fact there is." },
        { text: "Source 2, because a zoo is a fun place to visit." }
      ],
      clue: "Think about Gia's question first. Then check that the reason in your choice really answers it.",
      hints: [
        "Think about Gia's question first. Then check that the reason in your choice really answers it.",
        "Read what each source is about. Then read the reason in each answer.",
        "No book has every fact there is, so that reason is not true. Compare the other reasons with Gia's question."
      ],
      how: [
        "Gia's question is about what chameleons eat.",
        "Source 2 tells what the zoo's chameleons eat each day.",
        "Changing color is a different topic, no book has every fact, and a fun visit is not a reason.",
        "The answer is \"Source 2, because the keeper tells what the chameleons eat.\""
      ],
      why: "The answer is \"Source 2, because the keeper tells what the chameleons eat.\" Source 1 is about changing color, not food. No book has every fact, and a fun visit does not answer the question." },
    { id: "SK-RA1b-S09", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C10"],
      prompt: "Dev's two sources tell what hockey pucks are made of. Neither one tells why pucks are frozen before a game. What should Dev do next?",
      choices: [
        { text: "Look for another credible source, such as a book by a hockey coach.", correct: true },
        { text: "Write his own best guess in the notes, so the table is complete." },
        { text: "Use the fact that pucks are made of rubber, since it is about pucks." },
        { text: "Ask his little brother, because a person can be a source." }
      ],
      clue: "When your sources do not answer a question, you need more facts, not a guess.",
      hints: [
        "When your sources do not answer a question, you need more facts, not a guess.",
        "For each answer, ask two things: would it tell Dev why pucks are frozen, and could he trust it?",
        "Pucks being made of rubber is true, but it does not tell why they are frozen. Use the trust question on the other three."
      ],
      how: [
        "Dev's sources leave his question unanswered, so he needs another source.",
        "A guess is not a checked fact, and his little brother is a person but not one who knows about hockey pucks.",
        "The rubber fact does not answer the question.",
        "The answer is \"Look for another credible source, such as a book by a hockey coach.\""
      ],
      why: "The answer is \"Look for another credible source, such as a book by a hockey coach.\" A guess is not a fact, the rubber fact does not answer the question, and his little brother is not someone who knows about pucks." },
    { id: "SK-RA1b-S10", type: "order", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C06"],
      stem: ["**Source 1, a science book:** A newborn kangaroo is tiny, about the size of a jelly bean. Right after it is born, it crawls into its mother's pouch.",
        "**Source 2, notes from a zoo talk:** The keeper said the baby, called a joey, stays in the pouch drinking milk for about six months. After that, it starts to hop out to eat grass."],
      prompt: "Ben used both sources to make a note card called \"A joey grows up.\" Put his notes in order.",
      steps: [
        "A tiny joey is born.",
        "It crawls into its mother's pouch.",
        "It drinks milk in the pouch for about six months.",
        "It starts to hop out to eat grass."
      ],
      clue: "Follow the joey from the very beginning. Time words like right after, for about six months and after that help.",
      hints: [
        "Follow the joey from the very beginning. Time words like right after, for about six months and after that help.",
        "Source 1 tells about the joey's first moments. Source 2 tells about the months that follow.",
        "The joey must be born before it can do anything else, so that note comes first. Use the time words to place the rest."
      ],
      how: [
        "Source 1: the joey is born tiny, and right after that it crawls into the pouch.",
        "Source 2: it drinks milk in the pouch for about six months, and after that it hops out to eat grass.",
        "So the order is: born, crawls into the pouch, drinks milk for six months, hops out to eat grass."
      ],
      why: "The order is: the joey is born, crawls into the pouch, drinks milk there for about six months, then hops out to eat grass. The first two notes come from Source 1 and the last two from Source 2." },
    { id: "SK-RA1b-S11", type: "cr", dok: 3, std: ["3.T.RA.1.b"], passages: [], rows: 5,
      like: ["SK-RA1b-C15"],
      stem: ["Think of another topic you wonder about. It can be very different from your first one."],
      prompt: "Write one research question about it. Name one source you could read and one person you could ask, and tell why you could trust each one.",
      sample: "My question: How do chameleons change color? I could read a book by a scientist who studies lizards, because she knows the facts. I could ask a keeper at the reptile zoo, because he takes care of chameleons every day.",
      criteria: ["I wrote a research question about a topic I chose.", "I named one source to read and one person to ask.", "I told why I can trust each one."],
      clue: "Start with something you wonder about. Turn it into a question that starts with how, why or what.",
      hints: [
        "Start with something you wonder about. Turn it into a question that starts with how, why or what.",
        "Think of a book or web page about your topic, and a person whose job is about your topic.",
        "To tell why you can trust each one, say who made it or who the person is, and how they know the facts."
      ],
      how: [
        "Write one question about a topic you wonder about.",
        "Name one source to read and one person to ask.",
        "For each, write who made it or who the person is, and how they know the facts.",
        "Compare with the sample and the checklist. Your topic can be very different."
      ],
      why: "Many plans can be right. A strong plan has one question, one source to read, one person to ask and a reason to trust each one." },
    { id: "SK-RA1b-S12", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C08"],
      stem: ["**Source 1, a library book:** A toucan's huge bill helps it reach fruit at the ends of thin branches.",
        "**Source 2, notes from a zoo talk:** The keeper said a toucan's bill lets extra heat leave its body on hot days.",
        "**Rosa's question:** How does a toucan stay cool?"],
      prompt: "Complete Rosa's notes table with a note in her own words and where she found it.",
      text: "Fact: {0} Where I found it: {1}",
      slots: [
        { options: ["Its big bill lets off heat when the day is hot.", "Its big bill helps it reach fruit on thin branches.", "It stays in the shade of thin branches all day."], answer: 0 },
        { options: ["Source 1, the library book", "Source 2, the zoo talk", "both sources"], answer: 1 }
      ],
      clue: "A good note says the same thing as the source in a few of your own words, and it answers the question. Then it tells where the fact came from.",
      hints: [
        "A good note says the same thing as the source in a few of your own words, and it answers the question. Then it tells where the fact came from.",
        "Read both sources. Find the part that tells about staying cool, then check which source it is in.",
        "Neither source says the toucan stays in the shade, so that note does not match. Decide between the other two notes, then fill in the source."
      ],
      how: [
        "Source 2 says the bill lets extra heat leave the toucan's body on hot days.",
        "So the note is \"Its big bill lets off heat when the day is hot.\" It came from Source 2, the zoo talk.",
        "Reaching fruit is true, but it does not tell how the toucan stays cool, and the shade is not in either source."
      ],
      why: "The answers are \"Its big bill lets off heat when the day is hot.\" and \"Source 2, the zoo talk.\" Only the keeper tells about the bill and heat. Reaching fruit does not answer the question, and the shade is not in either source." },
    { id: "SK-RA1b-S13", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [], pick: 2,
      like: ["SK-RA1b-C12"],
      prompt: "Jada wants facts about how karate students earn new belts. Which TWO sources can she trust? Choose two answers.",
      choices: [
        { text: "a book by a woman who has taught karate for many years", correct: true },
        { text: "an email answer from the head teacher at a karate school", correct: true },
        { text: "a post by \"KickKing,\" who writes, \"My friend told me you just buy the belts\"" },
        { text: "an ad that says, \"Buy our black belt today, no practice needed!\"" },
        { text: "a cartoon about a karate cat who wins every match" }
      ],
      clue: "Ask who made each source. Does the person know about karate, or are they guessing, selling something or telling a made-up story?",
      hints: [
        "Ask who made each source. Does the person know about karate, or are they guessing, selling something or telling a made-up story?",
        "In each answer, find the words that tell who made the source and what that person does. Choose two.",
        "The cartoon is a made-up story, so it is not a fact source. Check who made each of the other four."
      ],
      how: [
        "A woman who has taught karate for many years knows how belts are earned, so her book is credible.",
        "The head teacher at a karate school knows too. An email is personal communication, and it counts when the writer knows the topic.",
        "\"KickKing\" repeats what a friend said, the ad is selling a belt, and the cartoon is made up.",
        "The answers are \"a book by a woman who has taught karate for many years\" and \"an email answer from the head teacher at a karate school.\""
      ],
      why: "The answers are \"a book by a woman who has taught karate for many years\" and \"an email answer from the head teacher at a karate school.\" Both come from people who teach karate. The post repeats a friend's words, the ad is selling, and the cartoon is made up." },
    { id: "SK-RA1b-S14", type: "match", points: 2, dok: 2, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C13"],
      stem: ["Max is writing about hedgehogs. He has two note cards: \"What a hedgehog eats\" and \"How a hedgehog stays safe.\""],
      prompt: "Match each fact to the note card where it belongs.",
      cols: ["What a hedgehog eats", "How a hedgehog stays safe"],
      rows: [
        { text: "It hunts for beetles and worms at night.", answer: 0 },
        { text: "It rolls into a tight, spiky ball.", answer: 1 },
        { text: "It snacks on slugs in gardens.", answer: 0 },
        { text: "Its spines stand up when it is scared.", answer: 1 }
      ],
      clue: "Read the two headings. For each fact, ask: is this about food, or about keeping away from danger?",
      hints: [
        "Read the two headings. For each fact, ask: is this about food, or about keeping away from danger?",
        "Picture what the hedgehog is doing in each fact before you choose a card.",
        "Rolling into a spiky ball keeps a hedgehog away from danger, so it goes on the card about staying safe. Sort the other three."
      ],
      how: [
        "Hunting beetles and worms and snacking on slugs are about food. They go on \"What a hedgehog eats.\"",
        "Rolling into a spiky ball and spines standing up are about staying safe. They go on \"How a hedgehog stays safe.\""
      ],
      why: "Beetles, worms and slugs are food, so those facts go on \"What a hedgehog eats.\" Rolling into a ball and raising its spines keep it safe, so those go on \"How a hedgehog stays safe.\"" },
    { id: "SK-RA1b-S15", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.b"], passages: [],
      like: ["SK-RA1b-C14"],
      stem: ["**Ivy's notes table**", "**Question:** How do rock climbers stay safe?",
        "**Note 1.** They wear helmets to protect their heads. (Where I found it: the climbing gym's web page)",
        "**Note 2.** A partner holds a rope tied to the climber. (Where I found it: Coach Lin)",
        "**Note 3.** Coach Lin's favorite color is green. (Where I found it: Coach Lin)",
        "**Note 4.** Climbers check their knots before every climb. (Where I found it: Coach Lin)"],
      prompt: "Ivy wants to take one note out of her table. Which note should she remove, and why?",
      choices: [
        { text: "Note 3, because it is true but does not tell how climbers stay safe.", correct: true },
        { text: "Note 2, because it came from a person and not from a book." },
        { text: "Note 1, because a gym's web page can never be trusted." },
        { text: "Note 4, because Coach Lin is a coach and not a scientist." }
      ],
      clue: "Check each note two ways. Does it help answer the question? Can Ivy trust where it came from?",
      hints: [
        "Check each note two ways. Does it help answer the question? Can Ivy trust where it came from?",
        "Three notes come from Coach Lin. Read those three and ask what each one is about.",
        "The climbing gym runs climbs every day, so its web page can be trusted. Test the reasons in the other answers."
      ],
      how: [
        "Ivy's question asks how climbers stay safe.",
        "Helmets, a partner on the rope and checking knots all keep climbers safe, and each comes from someone who knows climbing.",
        "Coach Lin's favorite color is true, but it does not keep anyone safe.",
        "The answer is \"Note 3, because it is true but does not tell how climbers stay safe.\""
      ],
      why: "The answer is \"Note 3, because it is true but does not tell how climbers stay safe.\" A coach is a good source about climbing, a gym's web page can be trusted, and a person you talk to can be a source." }
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
      "Choose sources you can trust, like a library book, a museum or a science website.",
      "Use your own words. Do not copy whole sentences.",
      "A summary tells only what the sources say. Leave out your opinions and facts that are not in your sources.",
      "Use linking words like also and in addition, or time words like in the fall, to join ideas from both sources."
    ],
    words: [
      { term: "summary", means: "a short telling of the most important ideas" },
      { term: "big idea", means: "what a source is mostly about" },
      { term: "own words", means: "saying an idea your way instead of copying it" },
      { term: "credible source", means: "a source you can trust because the writer knows the topic and shares facts" }
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
    },
    {
      show: [
        "Noah wants to learn about red pandas. He finds two sources.",
        "Source A: a page on a zoo's website, written by a red panda keeper, with the date it was updated.",
        "Source B: a video by a stranger who says, \"I heard red pandas can talk.\""
      ],
      ask: "Which source should Noah use for facts, and why?",
      steps: [
        "Ask who made each source. The keeper works with red pandas every day.",
        "Ask what each one wants to do. The zoo page shares facts, and the video repeats something the stranger heard.",
        "Choose the source whose writer knows the topic."
      ],
      answer: "Noah should use the zoo page. The keeper knows red pandas and shares facts, so it is a source he can trust."
    }
  ],
  write: {
    prompt: "Reread the two monarch butterfly sources from Practice, \"A Monarch Grows Up\" and \"Monarchs Fly to Mexico.\" Write a summary of 3 to 5 sentences that tells the most important facts from both sources. Or choose your own topic, find two sources that you can trust with a grown-up, and summarize those.",
    checklist: [
      "I used sources that I can trust.",
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
      ] },
    { id: "p5", title: "A Dragonfly's Two Lives", byline: "Source 1", genre: "Informational text",
      paragraphs: [
        ["A dragonfly lives two different lives.", "It lives first underwater and then in the air."],
        ["A female dragonfly lays her eggs in or near a pond.", "When an egg hatches, a young dragonfly called a nymph comes out.", "The nymph has no wings.", "It hunts tiny fish and other small water animals.", "A pond gives the nymph plenty of food."],
        ["A nymph may grow underwater for months or even years.", "Then it climbs up a plant stem into the air.", "Its skin splits open, and the adult dragonfly pulls itself out."],
        ["The new adult rests while its wings dry.", "Soon it takes to the air."]
      ] },
    { id: "p6", title: "Hunters of the Air", byline: "Source 2", genre: "Informational text",
      paragraphs: [
        ["An adult dragonfly is a skilled flier.", "It has four wings, and it can move each wing by itself.", "So it can fly forward, hover and even fly backward."],
        ["A dragonfly catches mosquitoes, flies and other small insects in the air.", "It is quick enough to grab them as they zoom past.", "Its two large eyes help it spot a tiny insect from far away."],
        ["Most dragonflies stay near ponds and streams.", "A dragonfly cannot sting people.", "It helps people, too, because it eats insects that bite.", "Dragonflies live in many parts of the world.", "When it rests, it holds its wings out flat."]
      ] },
    { id: "p7", title: "Why Athletes Warm Up", byline: "Source 1", genre: "Informational text",
      paragraphs: [
        ["Before a game, many athletes do a warm-up.", "A warm-up gets the body ready for hard work."],
        ["Easy movement makes your heart beat faster, and your breathing speeds up.", "More blood and oxygen reach your muscles."],
        ["Warm muscles can stretch and move more easily than cold ones.", "That is why a warm-up starts slowly and then picks up speed.", "Some players like to listen to music while they warm up."],
        ["Most teams warm up together before practice, and also before a game.", "A warm-up should feel easy, not tiring.", "It does not need to be hard or fancy.", "Then the body is ready to run, jump and throw."]
      ] },
    { id: "p8", title: "How to Warm Up and Cool Down", byline: "Source 2", genre: "Informational text",
      paragraphs: [
        ["A good warm-up for kids takes about five to ten minutes.", "Try an easy jog or a brisk walk.", "Then swing your arms in big circles.", "Start slowly, and then go a little faster.", "You should be warm, but not tired, when the game begins.", "Take your time with each move."],
        ["After you play, do a cool-down.", "Walk or move gently for five to ten minutes.", "A cool-down helps your heart and breathing slow down, so you do not feel dizzy.", "A cool-down is just as easy as a warm-up.", "Keep moving until your breathing feels calm again.", "Then you can sit and rest."]
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
  /* ---------- B4 core (expansion 2026-10-22, author b4c; 01-architecture.md §2.2-2.3) ----------
     Fifteen items in three sets of five, all selected response (the write task stays outside the fifteen).
     { ref } reuses the Try items P4 and P5 by id, so Practice Together is P1-P3. Set 2 uses the new pair
     p5 + p6 and set 3 the new pair p7 + p8 (plus short stems). Hints and Show me how for P1-P5 are in
     addons below. Author log: docs/expansion-2026-10-22/batches/B4-b4c-author-log.md.
     NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-RA1c-P4" },
      { ref: "SK-RA1c-P5" },
      { id: "SK-RA1c-C03", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: ["p2"],
        stem: ["Source 2 says: \"So many butterflies cover the branches that the trees look orange.\""],
        prompt: "Leah wants to write this idea in her own words. Which sentence for her summary keeps the meaning and does NOT copy Source 2?",
        choices: [
          { text: "Huge numbers of monarchs rest on the tree branches, so the trees seem to turn orange.", correct: true },
          { text: "So many butterflies cover the branches that the trees look orange." },
          { text: "A few monarchs rest in each tree, so the trees look a little orange." },
          { text: "The orange trees in Mexico are the prettiest sight in the world." }
        ],
        clue: "Own words means saying an idea your way instead of copying it. The meaning must stay the same.",
        hints: [
          "Own words means saying an idea your way instead of copying it. The meaning must stay the same.",
          "Compare each choice with the sentence in the box. Ask two questions: does it use the same words, and does it tell the same idea?",
          "The sentence about a few monarchs changes how many butterflies there are. Check the other choices the same way."
        ],
        how: [
          "The sentence in the box says so many butterflies cover the branches that the trees look orange.",
          "A summary should say that idea in new words and keep the meaning. \"Huge numbers of monarchs rest on the tree branches, so the trees seem to turn orange\" does both.",
          "The answer is \"Huge numbers of monarchs rest on the tree branches, so the trees seem to turn orange.\"",
          "One choice copies the source word for word, one changes how many butterflies there are, and one is an opinion."
        ],
        misconception: "A common mix-up is thinking that copying keeps the meaning safest. A summary says the idea in your own words.",
        why: "The answer is \"Huge numbers of monarchs rest on the tree branches, so the trees seem to turn orange.\" It keeps the meaning and uses new words. One choice copies the source, one changes the number of butterflies, and one is an opinion." },
      { id: "SK-RA1c-C04", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.c"], passages: [], pick: 2,
        stem: ["Leah wants two more sources for her summary about how monarch butterflies live. She finds five."],
        prompt: "Which TWO sources can Leah trust for facts about monarchs? Choose two answers.",
        choices: [
          { text: "a web page from a wildlife agency, written by a scientist who studies butterflies", correct: true },
          { text: "a library book by a butterfly expert, with the author's name and a list of sources", correct: true },
          { text: "a video by a stranger who says, \"I heard monarchs live for ten years\"" },
          { text: "an ad for a butterfly garden kit that says it is the best on Earth" },
          { text: "a story about a talking butterfly named Max who tells about his trip" }
        ],
        clue: "A source you can trust gives facts, and it comes from someone who knows the topic. Ask who made it and why.",
        hints: [
          "A source you can trust gives facts, and it comes from someone who knows the topic. Ask who made it and why.",
          "For each choice, find who made it and what it wants to do: teach, sell or entertain.",
          "A talking butterfly is made up, so it cannot be a source of facts. Check the other four choices."
        ],
        how: [
          "A source Leah can trust is made by someone who knows monarchs and wants to share facts.",
          "The wildlife agency page is written by a scientist, and the library book names its expert author and its sources. The answers are \"a web page from a wildlife agency, written by a scientist who studies butterflies\" and \"a library book by a butterfly expert, with the author's name and a list of sources.\"",
          "The stranger's video repeats something he heard, the ad wants to sell a kit, and the talking butterfly story is made up."
        ],
        misconception: "A common mix-up is trusting a source because it is exciting or easy to find. Trust a source because the writer knows the topic and shares facts.",
        why: "The answers are \"a web page from a wildlife agency, written by a scientist who studies butterflies\" and \"a library book by a butterfly expert, with the author's name and a list of sources.\" Both come from people who know monarchs. The video repeats a rumor, the ad tries to sell, and the talking butterfly story is made up." },
      { id: "SK-RA1c-C05", type: "hottext", points: 1, dok: 3, std: ["3.T.RA.1.c"], passages: ["p1", "p2"],
        stem: ["Leah's teacher says a summary may use only facts from the two sources. Here is Leah's draft.", "(1) Monarch butterflies begin life as tiny eggs on milkweed plants. (2) The caterpillars eat milkweed leaves and grow for about two weeks. (3) Then each caterpillar makes a green case, and a butterfly comes out. (4) A monarch has four wings, two on each side. (5) In the fall, many monarchs fly south to the mountains of Mexico. (6) In spring, they fly north again and lay eggs on milkweed along the way."],
        prompt: "Which sentence should Leah take out of her summary?",
        options: [
          "(1) Monarch butterflies begin life as tiny eggs on milkweed plants.",
          "(2) The caterpillars eat milkweed leaves and grow for about two weeks.",
          "(3) Then each caterpillar makes a green case, and a butterfly comes out.",
          "(4) A monarch has four wings, two on each side.",
          "(5) In the fall, many monarchs fly south to the mountains of Mexico.",
          "(6) In spring, they fly north again and lay eggs on milkweed along the way."
        ],
        answer: [3], pick: 1,
        clue: "A summary tells only what the sources say, even when an extra fact is true.",
        hints: [
          "A summary tells only what the sources say, even when an extra fact is true.",
          "Check each numbered sentence against Source 1 and Source 2. Ask whether you can find it in one of them.",
          "Sentence 5 comes from Source 2. Check the other sentences the same way."
        ],
        how: [
          "A summary may use only facts that the two sources give.",
          "Sentences 1, 2, 3, 5 and 6 are all in Source 1 or Source 2.",
          "Neither source says anything about a monarch's wings. Sentence 4 may be true, but it does not come from the sources.",
          "The answer is sentence 4: \"A monarch has four wings, two on each side.\""
        ],
        misconception: "A common mix-up is keeping a sentence because it is true. A summary also leaves out true facts that are not in the sources.",
        why: "The answer is sentence 4, \"A monarch has four wings, two on each side.\" It is a true fact, but neither source tells it. Every other sentence sums up something in Source 1 or Source 2." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-RA1c-C06", type: "ms", points: 2, dok: 3, std: ["3.T.RA.1.c"], passages: ["p5", "p6"], pick: 2,
        prompt: "Dev is making a note card for each source. Which TWO sentences give the big idea of a whole source? Choose two answers.",
        choices: [
          { text: "Source 1: A dragonfly lives first underwater and then in the air.", correct: true },
          { text: "Source 2: An adult dragonfly is a skilled flier that hunts in the air.", correct: true },
          { text: "Source 1: A nymph may grow underwater for months or even years." },
          { text: "Source 2: Most dragonflies stay near ponds and streams." },
          { text: "Source 2: A resting dragonfly holds its wings out flat." }
        ],
        clue: "The big idea of a source is what the whole source is mostly about. Details only help explain it.",
        hints: [
          "The big idea of a source is what the whole source is mostly about. Details only help explain it.",
          "Read each whole source. Ask which sentences tell about the whole source and which tell about only one paragraph.",
          "\"Most dragonflies stay near ponds and streams\" comes from only the last part of Source 2. Check the other four sentences."
        ],
        how: [
          "Source 1 is about how a dragonfly lives two lives: first underwater, then in the air.",
          "Source 2 is about how the adult flies and hunts in the air.",
          "The answers are \"Source 1: A dragonfly lives first underwater and then in the air.\" and \"Source 2: An adult dragonfly is a skilled flier that hunts in the air.\"",
          "The other sentences are true details: how long a nymph grows, where dragonflies stay, and how a resting dragonfly holds its wings."
        ],
        misconception: "A common mix-up is picking a true detail. The big idea sums up the whole source.",
        why: "The answers are \"Source 1: A dragonfly lives first underwater and then in the air.\" and \"Source 2: An adult dragonfly is a skilled flier that hunts in the air.\" Each one sums up a whole source. The other sentences are details from one paragraph." },
      { id: "SK-RA1c-C07", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.c"], passages: ["p6"], pick: 2,
        stem: ["Dev's summary will explain why adult dragonflies are such good fliers."],
        prompt: "Which TWO facts from Source 2 should Dev include? Choose two answers.",
        choices: [
          { text: "It has four wings, and it can move each wing by itself.", correct: true },
          { text: "It can fly forward, hover and even fly backward.", correct: true },
          { text: "Most dragonflies stay near ponds and streams." },
          { text: "A resting dragonfly holds its wings out flat." },
          { text: "A dragonfly cannot sting people." }
        ],
        clue: "Important facts answer the question your summary is asking. Facts about other topics can be left out.",
        hints: [
          "Important facts answer the question your summary is asking. Facts about other topics can be left out.",
          "Reread the sentence in the box. Then look in Source 2 for facts about flying.",
          "A fact about how a dragonfly rests does not explain how it flies. Check the other four choices."
        ],
        how: [
          "Dev's summary is about why dragonflies fly so well, so each fact must help explain that.",
          "A dragonfly can move each of its four wings by itself, and that lets it fly forward, hover and fly backward. The answers are \"It has four wings, and it can move each wing by itself.\" and \"It can fly forward, hover and even fly backward.\"",
          "Where dragonflies stay, how they rest and whether they sting are true, but they do not explain how well they fly."
        ],
        misconception: "A common mix-up is including every fact about the animal. Include the facts that answer the question the summary asks.",
        why: "The answers are \"It has four wings, and it can move each wing by itself.\" and \"It can fly forward, hover and even fly backward.\" Both explain why dragonflies fly so well. Where they stay, how they rest and that they cannot sting are about other topics." },
      { id: "SK-RA1c-C08", type: "hottext", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: ["p5", "p6"],
        stem: ["Dev's teacher says a summary must be in the writer's own words. Here is Dev's draft.", "(1) A dragonfly spends the first part of its life underwater and later flies in the air. (2) A young dragonfly, called a nymph, lives in the water and eats tiny fish. (3) An adult dragonfly can steer each of its four wings on its own. (4) A dragonfly catches mosquitoes, flies and other small insects in the air. (5) Dragonflies usually live close to ponds, because that is where they find mates."],
        prompt: "Which sentence in Dev's draft is copied word for word from a source?",
        options: [
          "(1) A dragonfly spends the first part of its life underwater and later flies in the air.",
          "(2) A young dragonfly, called a nymph, lives in the water and eats tiny fish.",
          "(3) An adult dragonfly can steer each of its four wings on its own.",
          "(4) A dragonfly catches mosquitoes, flies and other small insects in the air.",
          "(5) Dragonflies usually live close to ponds, because that is where they find mates."
        ],
        answer: [3], pick: 1,
        clue: "Own words means saying an idea your way instead of copying it. A copied sentence matches a source word for word.",
        hints: [
          "Own words means saying an idea your way instead of copying it. A copied sentence matches a source word for word.",
          "Look for a sentence that you can find, exactly as written, in Source 1 or Source 2. Check the sentences one at a time.",
          "Sentence 2 uses the word nymph, but it says the idea in a new way. Check the other sentences."
        ],
        how: [
          "Own words means a sentence should not match a source word for word.",
          "Compare each sentence with the sources. Sentences 1, 2, 3 and 5 change the words.",
          "Sentence 4 matches Source 2 exactly: \"A dragonfly catches mosquitoes, flies and other small insects in the air.\"",
          "The answer is sentence 4. Dev should say the same idea a new way."
        ],
        misconception: "A common mix-up is thinking a sentence is in your own words because you changed one word. Check whether most of the words are the same.",
        why: "The answer is sentence 4, \"A dragonfly catches mosquitoes, flies and other small insects in the air.\" It matches Source 2 word for word. The other four sentences tell the ideas in new words." },
      { id: "SK-RA1c-C09", type: "order", points: 2, dok: 2, std: ["3.T.RA.1.c"], passages: ["p5", "p6"],
        prompt: "Put Dev's four summary sentences in the best order. Use the time words to help.",
        steps: [
          "A dragonfly begins life underwater as a nymph.",
          "Later, it climbs out of the water and becomes an adult.",
          "Then the adult takes to the air and can hover and fly backward.",
          "At last, it hunts mosquitoes and flies in the air."
        ],
        clue: "Time words, like later, then and at last, show the order of ideas. Look for them in each sentence.",
        hints: [
          "Time words, like later, then and at last, show the order of ideas. Look for them in each sentence.",
          "Think about what happens first in a dragonfly's life, and what must happen before it can hunt in the air.",
          "The sentence that starts with Later tells about leaving the water, so it comes right after the sentence about the nymph. Place the other two."
        ],
        how: [
          "Start with the sentence that has no time word and tells how life begins: \"A dragonfly begins life underwater as a nymph.\"",
          "Later, the nymph climbs out of the water and becomes an adult.",
          "Then the adult takes to the air. At last, it hunts in the air.",
          "The order is: begins as a nymph; Later, climbs out; Then takes to the air; At last, hunts."
        ],
        misconception: "A common mix-up is putting the exciting part first. A summary follows the order the ideas happen in.",
        why: "The order is: \"A dragonfly begins life underwater as a nymph.\", then \"Later, it climbs out of the water and becomes an adult.\", then \"Then the adult takes to the air and can hover and fly backward.\", then \"At last, it hunts mosquitoes and flies in the air.\" The time words show the order." },
      { id: "SK-RA1c-C10", type: "hottext", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: ["p5", "p6"],
        stem: ["Here is another draft summary by Dev.", "(1) A dragonfly spends the first part of its life underwater as a nymph. (2) The nymph hunts tiny fish and other small water animals. (3) After months or years, it climbs out of the water as an adult. (4) Hovering is the most amazing thing a dragonfly can do. (5) An adult can move each wing by itself, so it can even fly backward. (6) It catches mosquitoes, flies and other small insects in the air."],
        prompt: "Which sentence should Dev take out because it is an opinion, not a fact from the sources?",
        options: [
          "(1) A dragonfly spends the first part of its life underwater as a nymph.",
          "(2) The nymph hunts tiny fish and other small water animals.",
          "(3) After months or years, it climbs out of the water as an adult.",
          "(4) Hovering is the most amazing thing a dragonfly can do.",
          "(5) An adult can move each wing by itself, so it can even fly backward.",
          "(6) It catches mosquitoes, flies and other small insects in the air."
        ],
        answer: [3], pick: 1,
        clue: "A summary tells what the sources say. A sentence that tells how the writer feels is an opinion.",
        hints: [
          "A summary tells what the sources say. A sentence that tells how the writer feels is an opinion.",
          "Read each numbered sentence in order, and compare it with the sources.",
          "Sentence 5 may sound surprising, but a source tells it as a fact. Check the other sentences."
        ],
        how: [
          "A summary tells facts from the sources, not how the writer feels.",
          "Sentences 1, 2, 3, 5 and 6 tell facts that you can find in Source 1 or Source 2.",
          "Sentence 4 says hovering is the most amazing thing. That is a feeling, so it is an opinion, and the sources never say it.",
          "The answer is sentence 4: \"Hovering is the most amazing thing a dragonfly can do.\""
        ],
        misconception: "A common mix-up is taking out a surprising fact. A surprising fact is still a fact, but a feeling word like amazing shows an opinion.",
        why: "The answer is sentence 4, \"Hovering is the most amazing thing a dragonfly can do.\" The word amazing shows how the writer feels, so it is an opinion. Sentence 5 sounds surprising, but Source 2 gives it as a fact." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-RA1c-C11", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.c"], passages: ["p7", "p8"],
        prompt: "Kayla is writing a summary of both sources. Which opening sentence best sums up the big ideas of BOTH?",
        choices: [
          { text: "A warm-up gets the body ready for sports, and kids can do a short, easy one before they play.", correct: true },
          { text: "Warm muscles can stretch and move more easily than cold muscles do, as Source 1 says." },
          { text: "After a game, kids should walk slowly for five to ten minutes to cool down." },
          { text: "Every player should always warm up before every game of every sport and never skip it." }
        ],
        clue: "A summary of two sources needs a big idea from each one. Look for a sentence that covers both and sticks to what the sources say.",
        hints: [
          "A summary of two sources needs a big idea from each one. Look for a sentence that covers both and sticks to what the sources say.",
          "Ask what Source 1 is mostly about and what Source 2 is mostly about. Then read each choice.",
          "\"Every player should always warm up before every game of every sport\" says more than the sources do. Check the other choices."
        ],
        how: [
          "Source 1 is mostly about why a warm-up helps the body, and Source 2 is mostly about how to do a short warm-up and a cool-down.",
          "A good opening sentence covers both ideas. The answer is \"A warm-up gets the body ready for sports, and kids can do a short, easy one before they play.\"",
          "The sentence about warm muscles uses only Source 1, and the sentence about walking after a game uses only Source 2.",
          "The sentence that says every player must always warm up goes beyond what the sources say."
        ],
        misconception: "A common mix-up is choosing a sentence from only one source. An opening sentence for a two-source summary covers both.",
        why: "The answer is \"A warm-up gets the body ready for sports, and kids can do a short, easy one before they play.\" It joins the big idea of Source 1 with the big idea of Source 2. The warm muscles sentence uses only Source 1, the walking sentence uses only Source 2, and the \"every player\" sentence says more than the sources do." },
      { id: "SK-RA1c-C12", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: ["p7"],
        prompt: "Kayla is making notes for a summary of Source 1. Which detail is the LEAST important, so she can leave it out?",
        choices: [
          { text: "Some players like to listen to music while they warm up.", correct: true },
          { text: "Easy movement makes your heart beat faster." },
          { text: "More blood and oxygen reach your muscles." },
          { text: "Warm muscles can stretch and move more easily than cold ones." }
        ],
        clue: "Important facts help explain the big idea. Tiny details can be left out.",
        hints: [
          "Important facts help explain the big idea. Tiny details can be left out.",
          "First decide the big idea of Source 1. Then ask whether each fact helps explain it.",
          "The fact about warm muscles explains what a warm-up does for the body. Check the other three the same way."
        ],
        how: [
          "The big idea of Source 1 is that a warm-up gets the body ready to work hard.",
          "A fast heartbeat, more blood and oxygen, and muscles that stretch easily all explain how the body gets ready.",
          "Listening to music is a tiny detail about what some players like. The answer is \"Some players like to listen to music while they warm up.\""
        ],
        misconception: "A common mix-up is keeping every fact. A summary keeps the facts that explain the big idea and leaves out tiny details.",
        why: "The answer is \"Some players like to listen to music while they warm up.\" It is a small detail about what some players like. The other three facts explain how a warm-up gets the body ready." },
      { id: "SK-RA1c-C13", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: [],
        stem: ["Mr. Ruiz's class is writing about where their town gets its drinking water. Kayla already has one source, a page from the town's water department."],
        prompt: "Which second source should Kayla use?",
        choices: [
          { text: "a page from a state agency that tells how drinking water is cleaned, with the date it was updated", correct: true },
          { text: "an ad for bottled water that says tap water is bad and that you should buy it" },
          { text: "a post by a stranger who writes, \"I think the water comes from a big lake somewhere\"" },
          { text: "a funny cartoon about a talking water drop who goes on a long trip" }
        ],
        clue: "A source you can trust shares facts from someone who knows the topic. Ask who made it and what it wants.",
        hints: [
          "A source you can trust shares facts from someone who knows the topic. Ask who made it and what it wants.",
          "For each choice, ask three questions. Who made it? Do they know about drinking water? Do they want to teach, sell or joke?",
          "A cartoon about a talking water drop is made up for fun. Check the other three choices."
        ],
        how: [
          "Kayla needs a source with facts from people who know about drinking water.",
          "A state agency knows how drinking water is cleaned, and its page shows when it was updated. The answer is \"a page from a state agency that tells how drinking water is cleaned, with the date it was updated.\"",
          "The ad wants to sell bottled water, the stranger is only guessing, and the cartoon is made up."
        ],
        misconception: "A common mix-up is trusting a source because it is fun or because it says what you already think. Trust a source whose writer knows the topic.",
        why: "The answer is \"a page from a state agency that tells how drinking water is cleaned, with the date it was updated.\" An agency that works with drinking water shares facts. The ad tries to sell, the stranger guesses, and the cartoon is made up." },
      { id: "SK-RA1c-C14", type: "dropdown", points: 2, dok: 3, std: ["3.T.RA.1.c"], passages: [],
        stem: ["Source 1 (school newsletter): Room 7 counted forty plastic bottles in the trash each day. A bottle that can be filled again keeps bottles out of the trash.", "Source 2 (nurse's page): Students who carry a water bottle drink more water during the day. Students who drink enough water often pay better attention."],
        prompt: "Noah is joining ideas from both sources in his summary. Choose the best words for each blank.",
        text: "A bottle that can be filled again keeps trash out of the bin. {0}, students who carry one drink more water. {1} students drink enough water, they often pay better attention.",
        slots: [
          { options: ["In addition", "Instead", "Last year", "Because"], answer: 0 },
          { options: ["When", "Although", "Unless", "Before"], answer: 0 }
        ],
        clue: "Linking words show how two ideas fit together. Ask whether the next idea adds to the first, happens later or is different.",
        hints: [
          "Linking words show how two ideas fit together. Ask whether the next idea adds to the first, happens later or is different.",
          "Say each sentence with the missing words. Ask which choice makes the ideas from the two sources fit together.",
          "\"Last year\" would put the idea in the wrong time, because both sources talk about now. Test the other choices in both blanks."
        ],
        how: [
          "The newsletter idea is about less trash. The nurse's idea is a second benefit, so it adds to the first.",
          "The first blank is \"In addition,\" because the second sentence adds one more good thing.",
          "The second blank is \"When,\" because the attention comes whenever students drink enough water.",
          "\"Instead\" and \"Although\" would show a difference, \"Unless\" and \"Before\" change the meaning, and \"Because\" does not fit the first blank."
        ],
        misconception: "A common mix-up is choosing a linking word that sounds fancy. Pick the one that shows how the two ideas really fit together.",
        why: "The answers are \"In addition\" and \"When.\" The nurse's page gives a second benefit, so In addition joins it to the newsletter idea. The attention comes when students drink enough water. The other words change the meaning." },
      { id: "SK-RA1c-C15", type: "ms", points: 2, dok: 3, std: ["3.T.RA.1.c"], passages: ["p7", "p8"], pick: 2,
        stem: ["Here is Kayla's draft summary.", "(1) A warm-up gets the body ready for hard work. (2) It makes the heart beat faster and sends more blood to the muscles. (3) Cool-downs are the best part of any practice. (4) The first Olympic Games took place in ancient Greece. (5) A good warm-up for kids takes about five to ten minutes. (6) After play, gentle walking helps the heart and breathing slow down."],
        prompt: "Kayla's summary should use only facts from the two sources, with no opinions. Which TWO sentences should she take out? Choose two answers.",
        choices: [
          { text: "(1) A warm-up gets the body ready for hard work." },
          { text: "(2) It makes the heart beat faster and sends more blood to the muscles." },
          { text: "(3) Cool-downs are the best part of any practice.", correct: true },
          { text: "(4) The first Olympic Games took place in ancient Greece.", correct: true },
          { text: "(5) A good warm-up for kids takes about five to ten minutes." },
          { text: "(6) After play, gentle walking helps the heart and breathing slow down." }
        ],
        clue: "A summary leaves out opinions, and it also leaves out facts that are not in the sources.",
        hints: [
          "A summary leaves out opinions, and it also leaves out facts that are not in the sources.",
          "Check each numbered sentence. Is it a fact or a feeling? If it is a fact, can you find it in Source 1 or Source 2?",
          "Sentence 6 comes from Source 2. Check the other sentences the same two ways."
        ],
        how: [
          "Sentences 1, 2, 5 and 6 are facts, and each one is in Source 1 or Source 2.",
          "Sentence 3 says cool-downs are the best part. That is a feeling, so it is an opinion.",
          "Sentence 4 may be true, but neither source tells it, so it is a fact from outside the sources.",
          "The answers are \"(3) Cool-downs are the best part of any practice.\" and \"(4) The first Olympic Games took place in ancient Greece.\""
        ],
        misconception: "A common mix-up is removing only the opinion. A summary also leaves out true facts that are not in the sources.",
        why: "The answers are \"(3) Cool-downs are the best part of any practice.\" and \"(4) The first Olympic Games took place in ancient Greece.\" The first is an opinion, and the second is a fact that neither source gives. The other four sentences sum up facts from the sources." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short text. One extra question for each core
     item, so "Try a similar question" is still unused when the child reaches that item. `like` lists only
     the core item each one really practises. */
  similar: [
    { id: "SK-RA1c-S01", type: "dropdown", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-P4"],
      stem: ["Source A: A new termite colony starts with one king and one queen.", "Source B: Over the years, the queen lays thousands of eggs, and the colony grows."],
      prompt: "Mia wants to join an idea from Source A to an idea from Source B. Choose the words that best begin the second sentence.",
      text: "A new termite colony starts with a king and a queen. {0} the queen lays thousands of eggs, and the colony grows.",
      slots: [
        { options: ["Over the years,", "For example,", "Instead,", "At first,"], answer: 0 }
      ],
      clue: "Time words show when things happen. Ask when the second sentence happens compared with the first.",
      hints: [
        "Time words show when things happen. Ask when the second sentence happens compared with the first.",
        "Read the first sentence and the second sentence. Notice which one tells how the colony begins.",
        "\"For example\" would mean the second sentence is one case of the first. Test the other choices."
      ],
      how: [
        "The first sentence tells how a colony starts, and the second tells what happens after that.",
        "Source B says the queen lays thousands of eggs over the years. The time words are \"Over the years,\"",
        "\"For example\" gives an example, \"Instead\" changes the idea, and \"At first\" would put the egg laying at the start."
      ],
      misconception: "A common mix-up is choosing a time word for the wrong moment. Ask when the second idea happens.",
      why: "The answer is \"Over the years,\" because Source B says the queen lays thousands of eggs over the years, after the colony starts. For example would give an example, instead would change the idea, and at first would put the idea at the start." },
    { id: "SK-RA1c-S02", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-P5"],
      stem: ["Source A: A platypus is a mammal that lays eggs. Very few mammals do that.", "Source B: A platypus has a flat bill and webbed feet. It hunts for food in streams in Australia."],
      prompt: "Which sentence would be the best ending for a summary of both sources?",
      choices: [
        { text: "Both sources show that the platypus is an unusual mammal built for life in water.", correct: true },
        { text: "A platypus has webbed feet, and it uses them to push through the water." },
        { text: "Many other animals live in Australia too, such as kangaroos and koalas." },
        { text: "That is everything that I know about the platypus, so this is the end." }
      ],
      clue: "A good ending wraps up the big ideas of both sources. It does not add a new fact or a tiny detail.",
      hints: [
        "A good ending wraps up the big ideas of both sources. It does not add a new fact or a tiny detail.",
        "Ask what Source A is mostly about and what Source B is mostly about. Then read the endings.",
        "\"That is everything I know\" tells the reader nothing about the platypus. Check the other three endings."
      ],
      how: [
        "Source A is about a mammal that lays eggs. Source B is about the bill and feet that help it live in water.",
        "A good ending joins both ideas: \"Both sources show that the platypus is an unusual mammal built for life in water.\"",
        "The webbed feet sentence is one small detail, the sentence about other animals adds a new idea, and \"That is everything that I know about the platypus, so this is the end\" says nothing about the platypus."
      ],
      misconception: "A common mix-up is ending with one small detail. An ending wraps up the big ideas of both sources.",
      why: "The answer is \"Both sources show that the platypus is an unusual mammal built for life in water.\" It wraps up the egg laying from Source A and the bill and feet from Source B. The other choices are a detail, a new idea or nothing." },
    { id: "SK-RA1c-S03", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C03"],
      stem: ["Source B says: \"Termites eat wood. Their tunnels can weaken the beams of a house.\""],
      prompt: "Jo wants to write this idea in her own words. Which sentence keeps the meaning and does NOT copy the source?",
      choices: [
        { text: "Termites chew through wood, and the holes they make can make a house weaker.", correct: true },
        { text: "Termites eat wood. Their tunnels can weaken the beams of a house." },
        { text: "Termites make a house stronger by eating the wood in its beams." },
        { text: "Termites are the worst bugs, and nobody should let them in." }
      ],
      clue: "Own words means saying an idea your way instead of copying it. The meaning must stay the same.",
      hints: [
        "Own words means saying an idea your way instead of copying it. The meaning must stay the same.",
        "Compare each choice with the sentences in the box. Ask two questions: does it use the same words, and does it tell the same idea?",
        "The sentence about making a house stronger changes what termites do to a house. Check the other choices the same way."
      ],
      how: [
        "The source says termites eat wood and that their tunnels can make the beams of a house weaker.",
        "The answer says the same thing with new words: \"Termites chew through wood, and the holes they make can make a house weaker.\"",
        "One choice copies the source word for word, one says the opposite, and one is an opinion."
      ],
      misconception: "A common mix-up is thinking that a changed sentence is in your own words even when the meaning changed.",
      why: "The answer is \"Termites chew through wood, and the holes they make can make a house weaker.\" It keeps the meaning and uses new words. One choice copies, one says the opposite, and one is an opinion." },
    { id: "SK-RA1c-S04", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.c"], passages: [], pick: 2,
      like: ["SK-RA1c-C04"],
      stem: ["Dina is writing a summary about weather satellites. She finds five sources."],
      prompt: "Which TWO sources can Dina trust for facts about weather satellites? Choose two answers.",
      choices: [
        { text: "a page from a national weather agency that explains how satellites track storms", correct: true },
        { text: "a kids' encyclopedia article by a space scientist, with the date it was written", correct: true },
        { text: "a post by someone who writes, \"I think satellites control the weather\"" },
        { text: "an ad for a phone that says its camera is better than any satellite" },
        { text: "a comic strip about a satellite that tells jokes" }
      ],
      clue: "A source you can trust gives facts, and it comes from someone who knows the topic. Ask who made it and why.",
      hints: [
        "A source you can trust gives facts, and it comes from someone who knows the topic. Ask who made it and why.",
        "For each choice, find who made it and what it wants to do: teach, sell or entertain.",
        "A comic strip with a joking satellite is made up for fun. Check the other four choices."
      ],
      how: [
        "A source Dina can trust is made by someone who knows weather satellites and wants to share facts.",
        "A national weather agency and a space scientist both know the topic. The answers are \"a page from a national weather agency that explains how satellites track storms\" and \"a kids' encyclopedia article by a space scientist, with the date it was written.\"",
        "The post is only a guess, the ad wants to sell a phone, and the comic is made up."
      ],
      misconception: "A common mix-up is trusting a source that is funny or sounds sure. Trust a source whose writer knows the topic.",
      why: "The answers are \"a page from a national weather agency that explains how satellites track storms\" and \"a kids' encyclopedia article by a space scientist, with the date it was written.\" Both come from people who know the topic. The post guesses, the ad sells, and the comic is made up." },
    { id: "SK-RA1c-S05", type: "hottext", points: 1, dok: 3, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C05"],
      stem: ["Source A: A comet is a ball of ice and dust that travels around the Sun.", "Source B: When a comet gets near the Sun, its ice turns to gas. The gas forms a long tail that points away from the Sun.", "Here is Dina's draft summary. Her teacher says it may use only facts from the two sources.", "(1) A comet is a ball of ice and dust. (2) It travels around the Sun. (3) The planet Mars has two small moons. (4) Near the Sun, a comet's ice turns to gas. (5) The gas forms a long tail that points away from the Sun."],
      prompt: "Which sentence should Dina take out of her summary?",
      options: [
        "(1) A comet is a ball of ice and dust.",
        "(2) It travels around the Sun.",
        "(3) The planet Mars has two small moons.",
        "(4) Near the Sun, a comet's ice turns to gas.",
        "(5) The gas forms a long tail that points away from the Sun."
      ],
      answer: [2], pick: 1,
      clue: "A summary tells only what the sources say, even when an extra fact is true.",
      hints: [
        "A summary tells only what the sources say, even when an extra fact is true.",
        "Check each numbered sentence against Source A and Source B. Ask whether you can find it in one of them.",
        "Sentence 4 comes from Source B. Check the other sentences the same way."
      ],
      how: [
        "A summary may use only facts that the two sources give.",
        "Sentences 1, 2, 4 and 5 are all in Source A or Source B.",
        "Neither source says anything about Mars. Sentence 3 may be true, but it does not come from the sources.",
        "The answer is sentence 3: \"The planet Mars has two small moons.\""
      ],
      misconception: "A common mix-up is keeping a sentence because it is true. A summary also leaves out true facts that are not in the sources.",
      why: "The answer is sentence 3, \"The planet Mars has two small moons.\" It is true, but neither source tells it. Every other sentence sums up something in Source A or Source B." },
    { id: "SK-RA1c-S06", type: "ms", points: 2, dok: 3, std: ["3.T.RA.1.c"], passages: [], pick: 2,
      like: ["SK-RA1c-C06"],
      stem: ["Source A: A tree adds a new ring to its trunk every year. The rings are circles inside the trunk. You can see them when a tree is cut down.", "Source B: The width of a ring shows what the weather was like that year. Wide rings mean plenty of rain. Narrow rings mean a dry year."],
      prompt: "Sam is making a note card for each source. Which TWO sentences give the big idea of a whole source? Choose two answers.",
      choices: [
        { text: "Source A: A tree adds one new ring every year.", correct: true },
        { text: "Source B: The width of a ring shows what the weather was like.", correct: true },
        { text: "Source A: You can see the rings when a tree is cut down." },
        { text: "Source B: Wide rings mean plenty of rain." },
        { text: "Source B: Narrow rings mean a dry year." }
      ],
      clue: "The big idea of a source is what the whole source is mostly about. Details only help explain it.",
      hints: [
        "The big idea of a source is what the whole source is mostly about. Details only help explain it.",
        "Read each source again. Ask which sentence sums up the whole source and which sentences give examples or small facts.",
        "\"Narrow rings mean a dry year\" is one example from Source B. Check the other four sentences."
      ],
      how: [
        "Source A is mostly about the way a tree adds one ring every year.",
        "Source B is mostly about how the width of a ring shows the weather that year.",
        "The answers are \"Source A: A tree adds one new ring every year.\" and \"Source B: The width of a ring shows what the weather was like.\"",
        "The other sentences are details or examples, such as when you can see the rings and what wide or narrow rings mean."
      ],
      misconception: "A common mix-up is picking a true detail. The big idea sums up the whole source.",
      why: "The answers are \"Source A: A tree adds one new ring every year.\" and \"Source B: The width of a ring shows what the weather was like.\" Each one sums up a whole source. The other sentences are details or examples." },
    { id: "SK-RA1c-S07", type: "ms", points: 2, dok: 2, std: ["3.T.RA.1.c"], passages: [], pick: 2,
      like: ["SK-RA1c-C07"],
      stem: ["Source B: A platypus has webbed feet and thick fur that keeps water out. It hunts for food in streams in Australia. A male platypus has a sharp spur on each back foot.", "Anil's summary will explain why a platypus is such a good swimmer."],
      prompt: "Which TWO facts from Source B should Anil include? Choose two answers.",
      choices: [
        { text: "It has webbed feet.", correct: true },
        { text: "Its thick fur keeps water out.", correct: true },
        { text: "It hunts for food in streams in Australia." },
        { text: "A male platypus has a sharp spur on each back foot." },
        { text: "It lays eggs instead of giving birth." }
      ],
      clue: "Important facts answer the question your summary is asking. Facts about other topics can be left out.",
      hints: [
        "Important facts answer the question your summary is asking. Facts about other topics can be left out.",
        "Reread the last sentence in the box. Then look in Source B for facts about swimming.",
        "A fact about a spur on the back foot does not explain swimming. Check the other four choices."
      ],
      how: [
        "Anil's summary is about why a platypus swims well, so each fact must help explain that.",
        "Webbed feet push against the water, and thick fur that keeps water out helps the platypus stay dry. The answers are \"It has webbed feet.\" and \"Its thick fur keeps water out.\"",
        "Where it hunts, the spur on a male's foot and laying eggs are true, but they do not explain why it swims well."
      ],
      misconception: "A common mix-up is including every fact about the animal. Include the facts that answer the question the summary asks.",
      why: "The answers are \"It has webbed feet.\" and \"Its thick fur keeps water out.\" Both help explain why a platypus swims well. Where it hunts, the spur and laying eggs are about other topics." },
    { id: "SK-RA1c-S08", type: "hottext", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C08"],
      stem: ["Source B: Weather satellites take pictures of clouds. The pictures help forecasters tell when storms are coming.", "Dina's teacher says a summary must be in the writer's own words. Here is Dina's draft.", "(1) A satellite is an object that goes around Earth. (2) Some satellites are built by people and sent into space. (3) Weather satellites photograph clouds from far above. (4) The pictures help forecasters tell when storms are coming. (5) That helps people get ready for bad weather."],
      prompt: "Which sentence in Dina's draft is copied word for word from Source B?",
      options: [
        "(1) A satellite is an object that goes around Earth.",
        "(2) Some satellites are built by people and sent into space.",
        "(3) Weather satellites photograph clouds from far above.",
        "(4) The pictures help forecasters tell when storms are coming.",
        "(5) That helps people get ready for bad weather."
      ],
      answer: [3], pick: 1,
      clue: "Own words means saying an idea your way instead of copying it. A copied sentence matches the source word for word.",
      hints: [
        "Own words means saying an idea your way instead of copying it. A copied sentence matches the source word for word.",
        "Look for a sentence that you can find, exactly as written, in Source B. Check the sentences one at a time.",
        "Sentence 3 is about the same idea as the source, but it uses new words. Check the other sentences."
      ],
      how: [
        "Own words means a sentence should not match the source word for word.",
        "Compare each sentence with Source B. Sentences 1, 2, 3 and 5 change the words.",
        "Sentence 4 matches Source B exactly: \"The pictures help forecasters tell when storms are coming.\"",
        "The answer is sentence 4. Dina should say that idea a new way."
      ],
      misconception: "A common mix-up is thinking a sentence is in your own words because you changed one word. Check whether most of the words are the same.",
      why: "The answer is sentence 4, \"The pictures help forecasters tell when storms are coming.\" It matches Source B word for word. The other sentences say the ideas in new words." },
    { id: "SK-RA1c-S09", type: "order", points: 2, dok: 2, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C09"],
      stem: ["Source A: A tree starts as a tiny seed. The seed sprouts into a small tree.", "Source B: Each year, the tree adds one new ring to its trunk. The rings can be counted to find out how old the tree is."],
      prompt: "Put Sam's four summary sentences in the best order. Use the time words to help.",
      steps: [
        "A tree begins as a tiny seed.",
        "Next, the seed sprouts into a small tree.",
        "Then, each year, the tree adds one new ring to its trunk.",
        "At last, the rings can be counted to find out how old the tree is."
      ],
      clue: "Time words, like next, then and at last, show the order of ideas. Look for them in each sentence.",
      hints: [
        "Time words, like next, then and at last, show the order of ideas. Look for them in each sentence.",
        "Think about what has to happen first before a tree can grow, and what can only happen after the tree has many years of rings.",
        "The sentence that starts with Next tells about the sprout, so it comes right after the seed sentence. Place the other two."
      ],
      how: [
        "Start with the sentence that has no time word and tells how a tree begins: \"A tree begins as a tiny seed.\"",
        "Next, the seed sprouts. Then the tree adds a ring each year. At last, the rings can be counted.",
        "The order is: begins as a seed; Next, sprouts; Then, adds a ring each year; At last, rings are counted."
      ],
      misconception: "A common mix-up is putting the last idea first because it sounds important. A summary follows the order the ideas happen in.",
      why: "The order is: \"A tree begins as a tiny seed.\", then \"Next, the seed sprouts into a small tree.\", then \"Then, each year, the tree adds one new ring to its trunk.\", then \"At last, the rings can be counted to find out how old the tree is.\" The time words show the order." },
    { id: "SK-RA1c-S10", type: "hottext", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C10"],
      stem: ["Source A: Termites live in large groups called colonies. Each colony has a queen who lays eggs.", "Source B: Termites eat wood. Their tunnels can weaken the beams of a house.", "Here is Jo's draft summary.", "(1) Termites live in large groups called colonies. (2) Each colony has a queen who lays eggs. (3) Termites are the scariest bugs in the whole world. (4) Termites eat wood. (5) Their tunnels can weaken the beams of a house."],
      prompt: "Which sentence should Jo take out because it is an opinion, not a fact from the sources?",
      options: [
        "(1) Termites live in large groups called colonies.",
        "(2) Each colony has a queen who lays eggs.",
        "(3) Termites are the scariest bugs in the whole world.",
        "(4) Termites eat wood.",
        "(5) Their tunnels can weaken the beams of a house."
      ],
      answer: [2], pick: 1,
      clue: "A summary tells what the sources say. A sentence that tells how the writer feels is an opinion.",
      hints: [
        "A summary tells what the sources say. A sentence that tells how the writer feels is an opinion.",
        "Read each numbered sentence in order, and compare it with the sources.",
        "Sentence 2 tells a fact that Source A gives. Check the other sentences."
      ],
      how: [
        "A summary tells facts from the sources, not how the writer feels.",
        "Sentences 1, 2, 4 and 5 tell facts that you can find in Source A or Source B.",
        "Sentence 3 says termites are the scariest bugs. That is a feeling, so it is an opinion.",
        "The answer is sentence 3: \"Termites are the scariest bugs in the whole world.\""
      ],
      misconception: "A common mix-up is leaving in a sentence that sounds like a fact. Words like scariest show an opinion.",
      why: "The answer is sentence 3, \"Termites are the scariest bugs in the whole world.\" The word scariest shows how the writer feels, so it is an opinion. The other four sentences are facts from the sources." },
    { id: "SK-RA1c-S11", type: "mc", points: 1, dok: 3, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C11"],
      stem: ["Source A: A satellite is an object that circles Earth. Some satellites are built by people and sent into space.", "Source B: Weather satellites take pictures of clouds. The pictures help forecasters tell when storms are coming."],
      prompt: "Dina is writing a summary of both sources. Which opening sentence best sums up the big ideas of BOTH?",
      choices: [
        { text: "Satellites circle Earth, and weather ones help forecasters see storms.", correct: true },
        { text: "Some satellites are built by people." },
        { text: "Weather satellites take pictures of clouds." },
        { text: "Every house in the world should have a weather satellite." }
      ],
      clue: "A summary of two sources needs a big idea from each one. Look for a sentence that covers both and sticks to what the sources say.",
      hints: [
        "A summary of two sources needs a big idea from each one. Look for a sentence that covers both and sticks to what the sources say.",
        "Ask what Source A is mostly about and what Source B is mostly about. Then read each choice.",
        "\"Every house should have a weather satellite\" says more than the sources do. Check the other choices."
      ],
      how: [
        "Source A is mostly about what a satellite is, and Source B is mostly about how weather satellites help forecasters.",
        "A good opening sentence covers both ideas: \"Satellites circle Earth, and weather ones help forecasters see storms.\"",
        "The sentence about people building satellites uses only Source A, the sentence about pictures of clouds uses only Source B, and the sentence about every house goes beyond the sources."
      ],
      misconception: "A common mix-up is choosing a sentence from only one source. An opening sentence for a two-source summary covers both.",
      why: "The answer is \"Satellites circle Earth, and weather ones help forecasters see storms.\" It joins the big idea of Source A with the big idea of Source B. The other choices use one source or go beyond them." },
    { id: "SK-RA1c-S12", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C12"],
      stem: ["Source A: A comet is a ball of ice and dust that travels around the Sun. When a comet gets near the Sun, its ice turns to gas. Some comets are named after the people who found them."],
      prompt: "Mina is making notes for a summary of Source A. Which detail is the LEAST important, so she can leave it out?",
      choices: [
        { text: "Some comets are named after the people who found them.", correct: true },
        { text: "A comet is a ball of ice and dust in space." },
        { text: "A comet travels around the Sun on a long path." },
        { text: "When it gets near the Sun, a comet's ice turns to gas." }
      ],
      clue: "Important facts help explain the big idea. Tiny details can be left out.",
      hints: [
        "Important facts help explain the big idea. Tiny details can be left out.",
        "First decide the big idea of Source A. Then ask whether each fact helps explain it.",
        "The fact about the ice turning to gas tells what happens to a comet near the Sun. Check the other three the same way."
      ],
      how: [
        "The big idea of Source A is what a comet is and what it does near the Sun.",
        "A ball of ice and dust, a trip around the Sun and ice turning to gas all explain that idea.",
        "How some comets get their names is a small detail. The answer is \"Some comets are named after the people who found them.\""
      ],
      misconception: "A common mix-up is keeping every fact. A summary keeps the facts that explain the big idea and leaves out small details.",
      why: "The answer is \"Some comets are named after the people who found them.\" It is a small detail about names. The other three facts explain what a comet is and what it does." },
    { id: "SK-RA1c-S13", type: "mc", points: 1, dok: 2, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C13"],
      stem: ["Sam's class is writing about how scientists can tell how old a tree is. Sam already has one source, a page from a forest science department."],
      prompt: "Which second source should Sam use?",
      choices: [
        { text: "a library book by a tree scientist, with a list of sources at the back", correct: true },
        { text: "an ad for a garden shop that says its trees live forever" },
        { text: "a comment by a stranger who writes, \"I guess you cut the tree and count\"" },
        { text: "a silly song about a tree that dances" }
      ],
      clue: "A source you can trust shares facts from someone who knows the topic. Ask who made it and what it wants.",
      hints: [
        "A source you can trust shares facts from someone who knows the topic. Ask who made it and what it wants.",
        "For each choice, ask three questions. Who made it? Do they know about trees? Do they want to teach, sell or joke?",
        "A song about a dancing tree is made up for fun. Check the other three choices."
      ],
      how: [
        "Sam needs a source with facts from someone who knows about trees.",
        "A tree scientist knows how trees grow, and the book lists its sources. The answer is \"a library book by a tree scientist, with a list of sources at the back.\"",
        "The ad wants to sell trees, the stranger is only guessing, and the song is made up."
      ],
      misconception: "A common mix-up is trusting a source that says what you already think. Trust a source whose writer knows the topic.",
      why: "The answer is \"a library book by a tree scientist, with a list of sources at the back.\" A scientist who studies trees shares facts. The ad tries to sell, the stranger guesses, and the song is made up." },
    { id: "SK-RA1c-S14", type: "dropdown", points: 2, dok: 3, std: ["3.T.RA.1.c"], passages: [],
      like: ["SK-RA1c-C14"],
      stem: ["Source 1 (school newsletter): Our school planted twelve trees this spring. Trees give shade on hot days.", "Source 2 (city page): Trees also give homes to birds and squirrels. New trees grow strong when they are watered every week."],
      prompt: "Ravi is joining ideas from both sources in his summary. Choose the best words for each blank.",
      text: "The new trees give shade on hot days. {0}, they give homes to birds and squirrels. {1} the trees are watered every week, they grow strong.",
      slots: [
        { options: ["Also", "Instead", "Yesterday", "For example"], answer: 0 },
        { options: ["When", "Although", "Unless", "Before"], answer: 0 }
      ],
      clue: "Linking words show how two ideas fit together. Ask whether the next idea adds to the first, happens later or is different.",
      hints: [
        "Linking words show how two ideas fit together. Ask whether the next idea adds to the first, happens later or is different.",
        "Say each sentence with the missing words. Ask which choice makes the ideas from the two sources fit together.",
        "\"Yesterday\" would put the idea in the wrong time, because neither source says it happened yesterday. Test the other choices in both blanks."
      ],
      how: [
        "The newsletter idea is about shade. The city page idea is a second good thing about trees, so it adds to the first.",
        "The first blank is \"Also,\" because the second sentence adds one more good thing.",
        "The second blank is \"When,\" because the trees grow strong whenever they are watered every week.",
        "\"Instead\" and \"Although\" would show a difference, \"For example\" does not fit, and \"Unless\" and \"Before\" change the meaning."
      ],
      misconception: "A common mix-up is choosing a linking word that sounds fancy. Pick the one that shows how the two ideas really fit together.",
      why: "The answers are \"Also\" and \"When.\" The city page gives a second good thing about trees, so Also joins it to the newsletter idea. The trees grow strong when they are watered every week. The other words change the meaning." },
    { id: "SK-RA1c-S15", type: "ms", points: 2, dok: 3, std: ["3.T.RA.1.c"], passages: [], pick: 2,
      like: ["SK-RA1c-C15"],
      stem: ["Source A: A platypus is a mammal that lays eggs. Very few mammals do that.", "Source B: A platypus has a flat bill and webbed feet. It hunts for food in streams in Australia.", "Here is Anil's draft summary.", "(1) The platypus is a mammal that lays eggs. (2) It has a flat bill and webbed feet. (3) The platypus is the funniest-looking animal on Earth. (4) Kangaroos also live in Australia. (5) It hunts for food in streams."],
      prompt: "Anil's summary should use only facts from the two sources, with no opinions. Which TWO sentences should he take out? Choose two answers.",
      choices: [
        { text: "(1) The platypus is a mammal that lays eggs." },
        { text: "(2) It has a flat bill and webbed feet." },
        { text: "(3) The platypus is the funniest-looking animal on Earth.", correct: true },
        { text: "(4) Kangaroos also live in Australia.", correct: true },
        { text: "(5) It hunts for food in streams." }
      ],
      clue: "A summary leaves out opinions, and it also leaves out facts that are not in the sources.",
      hints: [
        "A summary leaves out opinions, and it also leaves out facts that are not in the sources.",
        "Check each numbered sentence. Is it a fact or a feeling? If it is a fact, can you find it in Source A or Source B?",
        "Sentence 5 comes from Source B. Check the other sentences the same two ways."
      ],
      how: [
        "Sentences 1, 2 and 5 are facts, and each one is in Source A or Source B.",
        "Sentence 3 says the platypus is the funniest-looking animal. That is a feeling, so it is an opinion.",
        "Sentence 4 may be true, but neither source tells it, so it is a fact from outside the sources.",
        "The answers are \"(3) The platypus is the funniest-looking animal on Earth.\" and \"(4) Kangaroos also live in Australia.\""
      ],
      misconception: "A common mix-up is removing only the opinion. A summary also leaves out true facts that are not in the sources.",
      why: "The answers are \"(3) The platypus is the funniest-looking animal on Earth.\" and \"(4) Kangaroos also live in Australia.\" The first is an opinion, and the second is a fact that neither source gives. The other three sentences sum up facts from the sources." }
  ],
  /* Hints and Show me how for the items kept in practice: refs P4 and P5 (core set 1) and Together P1-P3. */
  addons: {
    "SK-RA1c-P1": {
      hints: [
        "A summary of two sources needs a big idea from each one. Ask which sentence uses both sources and tells facts.",
        "Count the sources each choice uses. Then check whether it tells facts or a feeling.",
        "The sentence that starts with I think tells a feeling, not a fact from the sources. Check the other three choices."
      ],
      how: [
        "A summary of two sources needs a big idea from each one.",
        "Source 1 is mostly about how a monarch grows up on milkweed. Source 2 is mostly about the long trip south.",
        "The answer is \"Monarchs grow up eating milkweed, and many fly south to Mexico each fall.\" It uses both big ideas.",
        "The chrysalis sentence is one small detail, the resting-in-trees sentence uses only Source 2, and I think is an opinion."
      ],
      misconception: "A common mix-up is choosing a sentence from only one source. A summary of two sources uses both." },
    "SK-RA1c-P2": {
      hints: [
        "A good fact comes from the right source, fits the topic of the notes, and tells something new.",
        "Look in Source 2 for facts about the topic of Leah's notes. Notice which facts she already has.",
        "The fact about milkweed juice is already in Leah's notes, and it comes from Source 1. Check the other three choices."
      ],
      how: [
        "Leah's notes are about milkweed, and she needs a new fact from Source 2.",
        "Source 2 says that in spring monarchs lay eggs on milkweed as they fly north. Leah does not have that fact yet.",
        "The answer is \"In spring, monarchs lay eggs on milkweed as they fly north.\"",
        "The milkweed juice fact is from Source 1, and the facts about Mexico's trees and the first trip are not about milkweed."
      ],
      misconception: "A common mix-up is adding a fact from the wrong source or one Leah already has." },
    "SK-RA1c-P3": {
      hints: [
        "A summary tells only what the sources say. Look for a sentence that tells about the writer instead.",
        "Check each sentence. Does it tell a fact from Source 1 or Source 2, or does it tell about Leah?",
        "The sentence about the fall tells a fact from Source 2. Check the other three the same way."
      ],
      how: [
        "A summary tells facts from the sources, not what the writer wishes.",
        "Three of the sentences tell facts from Source 1 or Source 2.",
        "The answer is \"I wish I could hold a monarch in my hand someday.\" It tells Leah's wish."
      ],
      misconception: "A common mix-up is thinking every sentence about monarchs belongs. A summary leaves out the writer's wishes and opinions." },
    "SK-RA1c-P4": {
      hints: [
        "Time words show when things happen. Ask when the second sentence happens in a monarch's year.",
        "Read Source 2 and notice the words that tell when the long trip begins.",
        "The second sentence is not an example of the first, so \"For example\" does not fit. Test the other choices."
      ],
      how: [
        "The first sentence tells about a monarch's early life, and the second tells about the trip to Mexico.",
        "Source 2 says each fall many monarchs begin a long trip south. The time words are \"In the fall,\"",
        "\"For example\" gives an example, \"Instead\" changes the idea, and \"Before that\" puts the trip too early."
      ],
      misconception: "A common mix-up is choosing a time word for the wrong moment. Ask when the second idea happens." },
    "SK-RA1c-P5": {
      hints: [
        "A good ending wraps up the big ideas. It does not add a new fact or a tiny detail.",
        "Ask what Source 1 is mostly about and what Source 2 is mostly about. Then read the endings.",
        "\"That is all I have to say\" tells the reader nothing about monarchs. Check the other three endings."
      ],
      how: [
        "Source 1 is about how a monarch changes from egg to butterfly. Source 2 is about the long trip south and back.",
        "A good ending wraps up both ideas: \"Both sources show that a monarch's life is full of changes and travel.\"",
        "The milkweed sentence adds a new fact, the orange and black sentence is one small detail, and \"That is all I have to say\" says nothing about monarchs."
      ],
      misconception: "A common mix-up is ending with one small detail. An ending wraps up the big ideas of both sources." }
  },
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
      /* B3 fix (coordinator): revised in place, keeping the id, into the lesson's compare task. Was a two-slot dropdown. */
      { id: "SK-RA2a-C12", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.a"], passages: ["p6"],
        stem: ["Two students answered the question \"What does Simone want after the game?\"",
          "**Kai:** She wants to get better at playing goalie. Proof: \"The Falcons lost the game, 2 to 1.\"",
          "**Lena:** She wants to get better at playing goalie. Proof: \"Can you help me practice goalie next week?\""],
        prompt: "Kai and Lena give the same answer but different proof. Compare their proof. Whose proof BETTER supports the answer, and why?",
        choices: [
          { text: "Lena's, because Simone's own question shows she wants more practice.", correct: true },
          { text: "Kai's, because the score tells exactly how the game ended." },
          { text: "Kai's, because losing a game always makes players want to practice." },
          { text: "Lena's, because her proof is a longer sentence than Kai's." }
        ],
        clue: "Both students give the same answer, so compare their proof. Ask which sentence proves what Simone wants, not just something true from the end of the story.",
        hints: [
          "Both students give the same answer, so compare their proof. Ask which sentence proves what Simone wants, not just something true from the end of the story.",
          "Reread paragraph 5. Find Kai's proof sentence and Lena's proof sentence in it.",
          "A longer sentence is not better proof just because it is longer. Compare the reasons in the other three answers."
        ],
        how: [
          "The answer both students give is that Simone wants to get better at playing goalie.",
          "Kai's proof, the score, is true, but it tells how the game ended for the team. It does not show what Simone wants.",
          "Lena's proof is Simone asking Dani for help practicing goalie next week. Asking for practice shows she wants to get better.",
          "The answer is \"Lena's, because Simone's own question shows she wants more practice.\""
        ],
        misconception: "A common mix-up is choosing proof because it is a true fact from the right part of the story. Proof has to show the answer, not just be true.",
        why: "The answer is \"Lena's, because Simone's own question shows she wants more practice.\" The score is true, but it is about the team's game, not what Simone wants, and losing does not always make players want to practice. Length does not make proof better." },
      { id: "SK-RA2a-C13", type: "hottext", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: ["p6"],
        prompt: "Simone's dad says, \"Simone is good at learning from advice.\" Which sentence BEST supports his opinion? Choose the sentence in the passage.",
        targets: ["p6:3:1", "p6:3:3", "p6:4:1", "p6:4:2", "p6:4:4", "p6:5:3"],
        answer: ["p6:4:2"], pick: 1,
        clue: "Learning from advice means hearing a tip and then changing what you do. The opinion is about Simone, so the proof must show something Simone does.",
        hints: [
          "Learning from advice means hearing a tip and then changing what you do. The opinion is about Simone, so the proof must show something Simone does.",
          "Reread paragraphs 3 and 4, the tip and what comes after it.",
          "Dani's words are the tip itself, not Simone learning from it. For each sentence about Simone, ask: does it show her doing what the tip said?"
        ],
        how: [
          "Learning from advice means hearing a tip and then doing something about it.",
          "Dani's tip is to watch the ball, not the kicker's feet. Dani's words are the advice, not Simone learning.",
          "Simone nodding shows she heard it, and diving shows her skill. But only one sentence shows her doing what the tip said: after that, every time the ball came near, she kept her eyes on it.",
          "The answer is \"After that, every time the ball came near, she kept her eyes on it.\""
        ],
        misconception: "A common mix-up is choosing the sentence where Simone nods or says thanks. Hearing a tip, or being polite about it, is not the same as using it.",
        why: "The answer is \"After that, every time the ball came near, she kept her eyes on it.\" It shows Simone doing what Dani's tip said. Dani's tip is the advice itself, nodding only shows she listened, the dive shows her skill, and thanking Dani shows she is polite." },
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
      stem: ["Mrs. Ito's opinion: \"The new bike trail is a great place for families.\""],
      prompt: "Which TWO facts BEST support Mrs. Ito's opinion? Choose two answers.",
      choices: [
        { text: "The trail is wide enough for a parent and a child to ride side by side.", correct: true },
        { text: "There are benches and water fountains along the trail every mile.", correct: true },
        { text: "The trail opened on a sunny Saturday in June." },
        { text: "The trail was paid for with money from the town." },
        { text: "The town also built a new library last year." }
      ],
      clue: "An opinion is supported by facts that show it. Ask of each fact: does this make the trail better for families?",
      hints: [
        "An opinion is supported by facts that show it. Ask of each fact: does this make the trail better for families?",
        "Read each fact and picture a family riding on the trail. Choose two.",
        "The new library is about the town, not the bike trail. Check the other four facts."
      ],
      how: [
        "Mrs. Ito's opinion is that the trail is great for families.",
        "A trail wide enough for a parent and child to ride together, with benches and water along the way, is good for families.",
        "The opening day and who paid for it are true, but they do not make the trail better for families. The library is not about the trail.",
        "The answers are \"The trail is wide enough for a parent and a child to ride side by side.\" and \"There are benches and water fountains along the trail every mile.\""
      ],
      why: "The answers are \"The trail is wide enough for a parent and a child to ride side by side.\" and \"There are benches and water fountains along the trail every mile.\" Both show the trail is good for families. The opening day and who paid for it do not, and the library is about the town." },
    { id: "SK-RA2a-S04", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: [], pick: 2,
      like: ["SK-RA2a-C03", "SK-RA2a-C14"],
      stem: ["**Idea:** Parrots are good at copying sounds.", "(1) Some parrots can copy words that people say.", "(2) Parrots have strong, curved beaks.", "(3) A parrot at a zoo copied the sound of a ringing phone.", "(4) Many parrots have bright green, red or blue feathers.", "(5) Some parrots can even copy a dog's bark."],
      prompt: "Which TWO sentences are true but do NOT support the idea? Choose two answers.",
      choices: [
        { text: "Parrots have strong, curved beaks.", correct: true },
        { text: "Many parrots have bright green, red or blue feathers.", correct: true },
        { text: "Some parrots can copy words that people say." },
        { text: "A parrot at a zoo copied the sound of a ringing phone." },
        { text: "Some parrots can even copy a dog's bark." }
      ],
      clue: "A sentence supports an idea only if it shows the idea. Ask of each sentence: does it show a parrot copying a sound?",
      hints: [
        "A sentence supports an idea only if it shows the idea. Ask of each sentence: does it show a parrot copying a sound?",
        "Read each sentence and say in your own words what it is about. Choose two.",
        "The parrot that copied a ringing phone is copying a sound, so that sentence does support the idea. Check the other four."
      ],
      how: [
        "The idea is that parrots are good at copying sounds.",
        "Copying words, a ringing phone and a dog's bark all show parrots copying sounds.",
        "Beaks and feathers are true, but they tell how parrots look, not what they can copy.",
        "The answers are \"Parrots have strong, curved beaks.\" and \"Many parrots have bright green, red or blue feathers.\""
      ],
      why: "The answers are \"Parrots have strong, curved beaks.\" and \"Many parrots have bright green, red or blue feathers.\" They tell how parrots look, not that they copy sounds. The other three sentences show parrots copying words, a phone and a bark." },
    { id: "SK-RA2a-S05", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C07"],
      stem: ["(1) Lions live on the grassy plains of Africa.", "(2) They hunt large animals in groups.", "(3) Hunting uses up a lot of energy.", "(4) So lions rest for up to 20 hours a day.", "(5) A male lion has a thick mane.",
        "**Ari's answer:** Lions rest most of the day. The text says, \"Lions live on the grassy plains of Africa.\""],
      prompt: "Ari's quote is true, but it does not prove his answer. Which sentence should he quote instead?",
      choices: [
        { text: "\"So lions rest for up to 20 hours a day.\"", correct: true },
        { text: "\"Hunting uses up a lot of energy.\"" },
        { text: "\"They hunt large animals in groups.\"" },
        { text: "\"A male lion has a thick mane.\"" }
      ],
      clue: "A quote proves an answer only if it shows the answer. Ari's answer is that lions rest most of the day.",
      hints: [
        "A quote proves an answer only if it shows the answer. Ari's answer is that lions rest most of the day.",
        "Find each choice in the text, and read the sentences next to it.",
        "A thick mane tells how a male lion looks, not how much lions rest. Decide among the other three."
      ],
      how: [
        "Ari's answer is that lions rest most of the day.",
        "Sentence 4 says lions rest for up to 20 hours a day. That is most of a day.",
        "Using up energy explains why they rest, but it does not show how much they rest. Hunting in groups and the mane do not show it either.",
        "The answer is \"So lions rest for up to 20 hours a day.\""
      ],
      why: "The answer is \"So lions rest for up to 20 hours a day.\" Twenty hours is most of a day. The energy sentence gives a reason, but it does not show the resting, and hunting in groups and the mane are about other things." },
    { id: "SK-RA2a-S06", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C10"],
      stem: ["(1) Lila's puppet show was on Friday.", "(2) Every day after school, she practiced her lines in front of a mirror.", "(3) Her puppet had purple yarn hair.", "(4) On Friday, she said every line without a mistake."],
      prompt: "Complete the answer. Choose the best answer for each blank.",
      text: "Lila does well on Friday because she {0}. The best proof is sentence {1}.",
      slots: [
        { options: ["practiced every day", "had a puppet with purple hair", "did the show for the first time"], answer: 0 },
        { options: ["2", "3", "4"], answer: 0 }
      ],
      clue: "First decide why Lila does well. Then find the sentence that shows that reason, not just any true sentence.",
      hints: [
        "First decide why Lila does well. Then find the sentence that shows that reason, not just any true sentence.",
        "Read all four sentences, and say what each one tells about Lila or her show.",
        "Sentence 4 tells how well she did, not why, so it is not the proof. Decide the reason, then choose between the other two sentences."
      ],
      how: [
        "Lila does well because she got ready: she practiced every day.",
        "Sentence 2 says she practiced her lines every day after school.",
        "Purple hair is about the puppet, and sentence 4 tells what happened, not why.",
        "The answers: she practiced every day, and sentence 2 proves it."
      ],
      why: "The answers are \"practiced every day\" and sentence 2. Sentence 2 shows her practicing every day after school. The puppet's hair does not explain why she did well, and sentence 4 only tells that she did well." },
    { id: "SK-RA2a-S07", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: [], pick: 2,
      like: ["SK-RA2a-P3"],
      stem: ["**Idea:** Elephant seals can stay underwater for a long time.", "(1) Elephant seals live along cold ocean coasts.", "(2) They can hold their breath for more than an hour.", "(3) The males have big noses that look like a short trunk.", "(4) They dive deep to find fish and squid, sometimes for two hours at a time.", "(5) On land, they move by scooting on their bellies."],
      prompt: "Which TWO sentences support the idea? Choose two answers.",
      choices: [
        { text: "They can hold their breath for more than an hour.", correct: true },
        { text: "They dive deep to find fish and squid, sometimes for two hours at a time.", correct: true },
        { text: "Elephant seals live along cold ocean coasts." },
        { text: "The males have big noses that look like a short trunk." },
        { text: "On land, they move by scooting on their bellies." }
      ],
      clue: "Look for sentences that show how long the seals can stay under the water, not just facts about seals.",
      hints: [
        "Look for sentences that show how long the seals can stay under the water, not just facts about seals.",
        "Read each sentence and say in your own words what it tells about the seals. Choose two.",
        "The big noses tell how the males look, not about staying underwater. Check the other four."
      ],
      how: [
        "The idea is that elephant seals can stay underwater a long time.",
        "Holding their breath for more than an hour shows it.",
        "Diving for up to two hours at a time shows it, too.",
        "Where they live, their noses and how they move on land do not tell about time underwater."
      ],
      why: "The answers are \"They can hold their breath for more than an hour.\" and \"They dive deep to find fish and squid, sometimes for two hours at a time.\" Both tell how long the seals stay under. The other sentences are about where they live, how they look and how they move on land." },
    { id: "SK-RA2a-S08", type: "cr", dok: 3, std: ["3.T.RA.2.a"], passages: [], rows: 4,
      like: ["SK-RA2a-C15"],
      stem: ["(1) Tasha fell down four times during her first ice skating lesson.", "(2) Each time, she got back up and laughed.", "(3) By the end of the hour, she could skate all the way around the rink.", "(4) \"Can we come back next week?\" she asked her mom."],
      prompt: "Is Tasha a good learner? Write your opinion. Then copy one sentence that supports it, and tell how it supports it.",
      sample: "I think Tasha is a good learner. The text says, \"Each time, she got back up and laughed.\" That shows she does not give up when something is hard.",
      criteria: ["I wrote my opinion.", "I copied one sentence, using its exact words inside quotation marks.", "I told how the sentence supports my opinion."],
      clue: "Decide yes or no first. Then look for a sentence that shows why you think so.",
      hints: [
        "Decide yes or no first. Then look for a sentence that shows why you think so.",
        "Look at what Tasha does after she falls, and what she can do at the end.",
        "Copy the sentence exactly, inside quotation marks. Then add a sentence that starts \"That shows\" and connects it to your opinion."
      ],
      how: [
        "Write your opinion in one sentence.",
        "Copy a sentence that backs it up, with its exact words inside quotation marks.",
        "Tell how that sentence supports your opinion.",
        "Compare with the sample and the checklist. Other sentences can also support a good answer."
      ],
      why: "There is more than one good answer. A strong answer gives an opinion, quotes one sentence exactly and explains how it supports the opinion." },
    { id: "SK-RA2a-S09", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C06"],
      stem: ["(1) A narwhal is a whale that lives in icy Arctic water.", "(2) Its long tusk is really a tooth that grows out through its lip.", "(3) Scientists think the tusk can pick up changes in the water.", "(4) Most male narwhals have a tusk, but most females do not."],
      prompt: "Which sentence BEST supports the idea that a narwhal's tusk helps it find out what is happening around it?",
      choices: [
        { text: "Scientists think the tusk can pick up changes in the water.", correct: true },
        { text: "Its long tusk is really a tooth that grows out through its lip." },
        { text: "A narwhal is a whale that lives in icy Arctic water." },
        { text: "Most male narwhals have a tusk, but most females do not." }
      ],
      clue: "A sentence supports an idea when it gives a fact that fits what the idea says. Read the idea, then test each sentence against it.",
      hints: [
        "A sentence supports an idea when it gives a fact that fits what the idea says. Read the idea, then test each sentence against it.",
        "Three sentences are about the tusk. Read those three closely.",
        "Which narwhals have tusks tells who has one, not what it does. For each of the other two sentences about the tusk, ask: does it tell what the tusk is, or what job it does for the narwhal?"
      ],
      how: [
        "The idea is that the tusk helps the narwhal find out what is happening around it.",
        "Sentence 3 says scientists think the tusk can pick up changes in the water. Picking up changes is a way to find out what is happening.",
        "Sentence 2 tells what the tusk is, sentence 4 tells which narwhals have one, and sentence 1 tells where they live.",
        "The answer is \"Scientists think the tusk can pick up changes in the water.\""
      ],
      why: "The answer is \"Scientists think the tusk can pick up changes in the water.\" Picking up changes in the water is a way to find out what is happening around it. The other sentences tell what the tusk is, who has one and where narwhals live." },
    { id: "SK-RA2a-S10", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C08"],
      stem: ["(1) Coral reefs grow in warm, shallow, clear ocean water near land.", "(2) When a big fish swims near, small fish dart into cracks in the reef.", "(3) Corals are tiny animals, even though they look like plants.", "(4) Some coral reefs have been growing for thousands of years."],
      prompt: "Answer: A coral reef gives small fish a place to hide. Which sentence BEST supports this answer?",
      choices: [
        { text: "When a big fish swims near, small fish dart into cracks in the reef.", correct: true },
        { text: "Coral reefs grow in warm, shallow, clear ocean water near land." },
        { text: "Corals are tiny animals, even though they look like plants." },
        { text: "Some coral reefs have been growing for thousands of years." }
      ],
      clue: "Proof for an answer shows the answer happening. Look for a sentence that shows small fish hiding.",
      hints: [
        "Proof for an answer shows the answer happening. Look for a sentence that shows small fish hiding.",
        "Read each sentence and ask who or what it is about.",
        "How old some reefs are is true, but it does not show fish hiding. Check the other three sentences."
      ],
      how: [
        "The answer to prove is that small fish hide in the reef.",
        "Sentence 2 says small fish dart into cracks when a big fish comes near. That is hiding.",
        "Where reefs grow and what corals are do not show fish hiding.",
        "The answer is \"When a big fish swims near, small fish dart into cracks in the reef.\""
      ],
      why: "The answer is \"When a big fish swims near, small fish dart into cracks in the reef.\" It shows small fish hiding. The other sentences tell where reefs grow, what corals are and how old reefs can be." },
    { id: "SK-RA2a-S11", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.a"], passages: [], pick: 2,
      like: ["SK-RA2a-C09"],
      stem: ["Ty's opinion: \"Ring-tailed lemurs are good at living in groups.\""],
      prompt: "Which TWO facts BEST support Ty's opinion? Choose two answers.",
      choices: [
        { text: "Lemurs in a group huddle close together to stay warm.", correct: true },
        { text: "Lemurs in a group clean each other's fur.", correct: true },
        { text: "Ring-tailed lemurs have black-and-white striped tails." },
        { text: "Ring-tailed lemurs live on the island of Madagascar." },
        { text: "Ring-tailed lemurs eat fruit, leaves and flowers." }
      ],
      clue: "An opinion needs facts that show it. Look for facts about how lemurs treat each other, not just facts about lemurs.",
      hints: [
        "An opinion needs facts that show it. Look for facts about how lemurs treat each other, not just facts about lemurs.",
        "Read each fact and picture the lemurs it tells about. Choose two.",
        "Striped tails tell how lemurs look, not how they live together. Check the other four facts."
      ],
      how: [
        "Ty's opinion is that lemurs are good at living in groups.",
        "Huddling together to stay warm and cleaning each other's fur show lemurs helping one another in a group.",
        "Tails, where they live and what they eat are true, but they do not show group life.",
        "The answers are \"Lemurs in a group huddle close together to stay warm.\" and \"Lemurs in a group clean each other's fur.\""
      ],
      why: "The answers are \"Lemurs in a group huddle close together to stay warm.\" and \"Lemurs in a group clean each other's fur.\" Both show lemurs helping each other. The other facts tell how they look, where they live and what they eat." },
    { id: "SK-RA2a-S12", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C11"],
      stem: ["(1) Mia kept wobbling when she tried to spin in ballet class.", "(2) Her teacher said, \"Pick one spot on the wall, and look at it each time you turn.\"", "(3) On her next try, Mia kept her eyes on the clock each time she turned.", "(4) Her spin was smooth and steady.", "(5) Mia's ballet shoes were pink."],
      prompt: "Answer: Mia spins smoothly because she uses her teacher's tip. Which sentence BEST shows Mia using the tip?",
      choices: [
        { text: "On her next try, Mia kept her eyes on the clock each time she turned.", correct: true },
        { text: "Her teacher said, \"Pick one spot on the wall, and look at it each time you turn.\"" },
        { text: "Her spin was smooth and steady." },
        { text: "Mia kept wobbling when she tried to spin in ballet class." }
      ],
      clue: "The answer is about Mia using the tip. The proof must show Mia doing what her teacher said.",
      hints: [
        "The answer is about Mia using the tip. The proof must show Mia doing what her teacher said.",
        "Read sentences 2, 3 and 4.",
        "Sentence 4 tells how the spin turned out, not what Mia did. For the other sentences, ask whether each one gives the tip or shows someone following it."
      ],
      how: [
        "The teacher's tip is in sentence 2: look at one spot each time you turn.",
        "Sentence 3 shows Mia doing it: she keeps her eyes on the clock each time she turns.",
        "Sentence 2 is the tip, not Mia using it, and sentence 4 is the result.",
        "The answer is \"On her next try, Mia kept her eyes on the clock each time she turned.\""
      ],
      why: "The answer is \"On her next try, Mia kept her eyes on the clock each time she turned.\" It shows Mia doing what her teacher said. Sentence 2 only gives the tip, sentence 4 tells the result, and sentence 1 is before the tip." },
    { id: "SK-RA2a-S13", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C12"],
      stem: ["(1) Ana's volleyball team lost its first game of the season.", "(2) Afterward, Ana asked the coach to help her practice serving.", "(3) Her sneakers squeaked on the gym floor.", "(4) The team ate oranges after the game.",
        "**Jo:** Ana wants to get better at serving. Proof: sentence 4.",
        "**Sam:** Ana wants to get better at serving. Proof: sentence 2."],
      prompt: "Jo and Sam give the same answer but different proof. Whose proof BETTER supports the answer, and why?",
      choices: [
        { text: "Sam's, because sentence 2 shows Ana asking for help with serving.", correct: true },
        { text: "Jo's, because sentence 4 tells what happened after the game." },
        { text: "Jo's, because eating oranges shows Ana is ready to play more." },
        { text: "Sam's, because sentence 2 comes before sentence 4." }
      ],
      clue: "Both give the same answer, so compare the proof. Ask which sentence shows what Ana wants.",
      hints: [
        "Both give the same answer, so compare the proof. Ask which sentence shows what Ana wants.",
        "Read sentence 2 and sentence 4 again, and say what each one tells.",
        "Coming earlier in the text does not make a sentence better proof. Compare the reasons in the other three answers."
      ],
      how: [
        "The answer is that Ana wants to get better at serving.",
        "Sentence 4 tells that the team ate oranges. It does not show what Ana wants.",
        "Sentence 2 shows Ana asking the coach to help her practice serving. That shows she wants to get better.",
        "The answer is \"Sam's, because sentence 2 shows Ana asking for help with serving.\""
      ],
      why: "The answer is \"Sam's, because sentence 2 shows Ana asking for help with serving.\" The oranges are a team snack and do not show what Ana wants, and the order of the sentences does not make one better proof." },
    { id: "SK-RA2a-S14", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.a"], passages: [],
      like: ["SK-RA2a-C13"],
      stem: ["(1) Rosa's brother Cam showed her how to ride a bike without training wheels.", "(2) On her first try, Rosa wobbled and fell.", "(3) \"It's okay, we'll go slower,\" Cam said, and he walked beside her, holding the seat.", "(4) Cam had learned to ride when he was five."],
      prompt: "Opinion: \"Cam is patient with his sister.\" Which sentence BEST supports this opinion?",
      choices: [
        { text: "\"It's okay, we'll go slower,\" Cam said, and he walked beside her, holding the seat.", correct: true },
        { text: "Rosa's brother Cam showed her how to ride a bike without training wheels." },
        { text: "On her first try, Rosa wobbled and fell." },
        { text: "Cam had learned to ride when he was five." }
      ],
      clue: "The opinion is about Cam, so the proof must show something Cam says or does that fits the opinion.",
      hints: [
        "The opinion is about Cam, so the proof must show something Cam says or does that fits the opinion.",
        "Read all four sentences and ask who each one is about.",
        "Sentence 2 is about Rosa, not Cam. For the other three, ask what each one shows Cam doing or saying."
      ],
      how: [
        "The opinion is that Cam is patient.",
        "Sentence 3 shows Cam staying calm after Rosa falls: he slows down and walks beside her. That is patient.",
        "Sentence 1 shows Cam teaching, but not how he acts when it is hard. Sentence 2 is about Rosa, and sentence 4 is about Cam's own past.",
        "The answer is: \"It's okay, we'll go slower,\" Cam said, and he walked beside her, holding the seat."
      ],
      why: "The answer is: \"It's okay, we'll go slower,\" Cam said, and he walked beside her, holding the seat. It shows him staying calm when Rosa has trouble. Teaching, falling and learning at age five do not show patience." },
    { id: "SK-RA2a-S15", type: "ms", points: 2, dok: 3, std: ["3.T.RA.2.a"], passages: [], pick: 2,
      like: ["SK-RA2a-C14"],
      stem: ["**Idea:** Solar panels help our school save money.", "(1) Last year, our school put solar panels on its roof.", "(2) The panels have cut the school's electric bill in half.", "(3) The panels are dark blue and shaped like rectangles.", "(4) The money the school saves now pays for new library books.", "(5) The principal says the school will save even more next year."],
      prompt: "Which TWO sentences are true but do NOT support the idea? Choose two answers.",
      choices: [
        { text: "Last year, our school put solar panels on its roof.", correct: true },
        { text: "The panels are dark blue and shaped like rectangles.", correct: true },
        { text: "The panels have cut the school's electric bill in half." },
        { text: "The money the school saves now pays for new library books." },
        { text: "The principal says the school will save even more next year." }
      ],
      clue: "A sentence supports an idea only if it shows the idea. Ask of each sentence: does it show the school saving money?",
      hints: [
        "A sentence supports an idea only if it shows the idea. Ask of each sentence: does it show the school saving money?",
        "Read each sentence and say in your own words what it is about. Choose two.",
        "A smaller electric bill means the school pays less, so sentence 2 does support the idea. Check the other four."
      ],
      how: [
        "The idea is that the panels help the school save money.",
        "A smaller bill, money for library books and saving more next year all show saving money.",
        "When the panels were put up and how they look are true, but they do not show any money saved.",
        "The answers are \"Last year, our school put solar panels on its roof.\" and \"The panels are dark blue and shaped like rectangles.\""
      ],
      why: "The answers are \"Last year, our school put solar panels on its roof.\" and \"The panels are dark blue and shaped like rectangles.\" They tell when and how the panels look, not that money is saved. The other three show the school saving money." }
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
      "Read the words, too. Words like everyone knows, or numbers that sound impossible, are warning signs. A good source gives facts that make sense and may tell how people found them out, for example by testing an idea that many people believe.",
      "A source must also be on your topic. A great book about frogs will not help a report about snakes."
    ],
    words: [
      { term: "trustworthy", means: "made by people who know the facts, so you can believe it" },
      { term: "on topic", means: "about the same thing you are learning about" },
      { term: "ad", means: "words or pictures made to get people to buy something" },
      { term: "credible", means: "trustworthy: made by people who know the facts, with words that make sense" },
      { term: "relevant", means: "on topic: it helps answer your question" }
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
      ] },
    /* B3 (expansion 2026-10-22, author b3c): excerpt pair p3-p4 is used only by core set 2, and p5 only by
       core set 3. Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "Goldfish Facts!", byline: "Source 1: a page on a fun-facts website. No writer's name is given.", genre: "Informational text (web page)",
      paragraphs: [
        ["Goldfish are a kind of carp.", "They can be orange, white, black or even spotted.", "Some goldfish have long tails that flow like ribbons."],
        ["Everyone knows that a goldfish can remember things for only three seconds!", "Goldfish swim with fins on their sides, back and tail."],
        ["A goldfish can live for 100 years if you feed it Sparkle Flakes, the fish food we sell.", "Goldfish like to eat small bits of food more than once a day."]
      ] },
    { id: "p4", title: "What Can a Goldfish Remember?", byline: "Source 2: an article in a science magazine for kids, written by a scientist who studies fish", genre: "Informational text",
      paragraphs: [
        ["Many people say that goldfish forget things in a few seconds.", "Scientists wanted to find out if that is true, so they tested it."],
        ["In one test, scientists played a sound each time they fed a group of goldfish.", "After a while, the fish swam to the feeding spot as soon as they heard the sound.", "Months later, the fish still swam to the spot when the sound played."],
        ["So goldfish can remember things for months, not seconds.", "Pet goldfish often learn to swim to the front of the tank when the person who feeds them walks in."],
        ["Goldfish can live for ten years or more when their water is kept clean."]
      ] },
    { id: "p5", title: "Bulls and the Color Red", byline: "A page from a book about farm animals, written by Dr. Ray Holt, a scientist who studies cattle", genre: "Informational text",
      paragraphs: [
        ["In some old cartoons, a bull gets angry when it sees a red cape.", "Many people believe that the color red makes bulls charge."],
        ["But bulls cannot see red the way people do.", "Scientists have found that cattle can see blue and yellow, but red does not stand out to them the way it does to people."],
        ["To test the idea, a TV show put a red flag, a blue flag and a white flag near bulls.", "The bulls charged all three flags, and they did not pick the red one.", "The show also saw that bulls went after people who moved around."],
        ["So it is the movement, not the color, that gets a bull's attention.", "Bulls are also very strong.", "A grown bull can weigh as much as a small car."]
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
        { text: "The ad is about bug kits, so it does not fit a report on insects." },
        { text: "The ad is short, so it cannot tell any facts at all." },
        { text: "The ad is for kids, so its words are too easy to be true." }
      ],
      /* B3 (b3c): weak item (implausible distractors) revised in place; the key, clue and id are unchanged. */
      clue: "Think about why an ad is made. What does the company want readers to do?",
      why: "The answer is \"The ad is trying to sell something, so it may stretch the truth.\" No kit could hold every bug in the world. The ad is about bugs, which are insects, so it is on her topic. A short source can still have facts, and easy words do not make something false." }
  ],
  /* ---------- B3 (expansion 2026-10-22, author b3c; docs/expansion-2026-10-22/01-architecture.md §2.2-2.3) ----------
     core: fifteen independent items in three sets of five. { ref } reuses the Try item P4 by id (it stays in
     practice; Practice Together shows P1, P2, P3 and P5). New ids are numbered by their place in the fifteen.
     Credibility from the wording of an excerpt (the coverage gap) is practised in every set: C02, C04, C05,
     C06, C07, C08, C12 and C14. The unscored cr item C15 asks the child to name and justify a source.
     Author log: docs/expansion-2026-10-22/batches/B3-b3c-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-RA2b-P4" },
      { id: "SK-RA2b-C02", type: "match", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [],
        prompt: "Jamal copied these sentences from different sources about peach trees. Does each one sound like a checked fact, or is it a warning sign? Match each one.",
        cols: ["Sounds like a checked fact", "Warning sign"],
        rows: [
          { text: "Peach trees bloom in early spring, before their leaves come out.", answer: 0 },
          { text: "Our peach jam is the best in the whole world, so buy some today!", answer: 1 },
          { text: "Farm scientists counted the peaches on 50 trees for three summers.", answer: 0 },
          { text: "Peach trees never get sick, no matter what.", answer: 1 },
          { text: "My uncle says one peach tree can grow a million peaches.", answer: 1 }
        ],
        clue: "Read the words closely. Warning signs include selling words, words like never or always, and numbers that sound impossible. A checked fact makes sense or tells how people found it out.",
        hints: [
          "Read the words closely. Warning signs include selling words, words like never or always, and numbers that sound impossible. A checked fact makes sense or tells how people found it out.",
          "For each sentence, ask two questions. Could this really be true? Does it tell who found it out, or is it trying to sell something?",
          "\"Never get sick, no matter what\" promises too much, because every living thing can get sick. That one is a warning sign. Sort the other four sentences."
        ],
        how: [
          "Blooming in early spring makes sense and can be checked, so it sounds like a checked fact.",
          "Counting the peaches on 50 trees for three summers tells how scientists found out, so it sounds like a checked fact.",
          "\"The best in the whole world, so buy some today!\" uses selling words. \"Never get sick, no matter what\" promises too much. A million peaches on one tree is an impossible number, and an uncle saying so is not a check. These are warning signs."
        ],
        misconception: "A common mix-up is trusting a sentence because it has a big, exact number. Ask whether the number could really be true.",
        why: "Blooming in early spring and counting peaches on 50 trees for three summers sound like checked facts: they make sense, and one tells how scientists found out. The jam sentence uses selling words, \"never get sick, no matter what\" promises too much, and a million peaches on one tree is an impossible number, so those three are warning signs." },
      { id: "SK-RA2b-C03", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.b"], passages: [],
        prompt: "Jamal's new question is \"How do farmers protect peach trees from a late frost?\" All four excerpts come from a Georgia college's farm guide. Which excerpt is relevant to his question?",
        choices: [
          { text: "\"Before a frost, some farmers turn on giant fans to mix warmer air around the trees.\"", correct: true },
          { text: "\"Peach trees grow best in sandy soil that lets extra water drain away.\"" },
          { text: "\"A frost happens when the air gets so cold that ice forms on the plants.\"" },
          { text: "\"Georgia farmers ship their peaches to many other states each summer.\"" }
        ],
        clue: "All four excerpts come from a source Jamal can trust, so check the topic. Read his question word by word: it asks HOW farmers protect the trees.",
        hints: [
          "All four excerpts come from a source Jamal can trust, so check the topic. Read his question word by word: it asks HOW farmers protect the trees.",
          "Two excerpts talk about frost or cold air. Read those two closely.",
          "Sandy soil is about where peach trees grow best, not about frost. Compare the excerpts that are left with Jamal's question."
        ],
        how: [
          "Jamal's question asks how farmers protect peach trees from a late frost.",
          "The fan excerpt tells what some farmers do before a frost: they mix warmer air around the trees. That answers his question.",
          "The other frost excerpt only tells what a frost is. The soil and shipping excerpts are about other topics.",
          "The answer is \"Before a frost, some farmers turn on giant fans to mix warmer air around the trees.\""
        ],
        misconception: "A common mix-up is choosing an excerpt that uses the same word, like frost, but does not answer the question.",
        why: "The answer is \"Before a frost, some farmers turn on giant fans to mix warmer air around the trees.\" It tells what farmers do to protect the trees. The other frost excerpt only tells what a frost is, and the soil and shipping excerpts are about other topics." },
      { id: "SK-RA2b-C04", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.b"], passages: [],
        stem: ["Both excerpts come from posts that do not give the writer's name.",
          "**Excerpt A:** \"Peaches are picked when the skin under the red blush turns from green to yellow. Workers twist each peach gently, so the skin does not bruise.\"",
          "**Excerpt B:** \"Every peach in Georgia is picked at exactly 3:00 in the morning, all on the very same day!\""],
        prompt: "Jamal can judge these excerpts only by their words. Which excerpt is more believable, and why?",
        choices: [
          { text: "Excerpt A, because its details are careful and make sense.", correct: true },
          { text: "Excerpt B, because it gives an exact time, so it must be right." },
          { text: "Excerpt B, because it says every peach, so it tells more facts." },
          { text: "Excerpt A, because it does not use any numbers at all." }
        ],
        clue: "When you cannot tell who wrote something, read its words. Could the facts happen in real life? Do they promise too much?",
        hints: [
          "When you cannot tell who wrote something, read its words. Could the facts happen in real life? Do they promise too much?",
          "Read both excerpts slowly. Picture each one happening on a real farm. Which parts would you expect to see, and which would be hard to believe?",
          "Having no numbers does not make an excerpt better or worse. A number can be fine if it makes sense. Compare the reasons that are left."
        ],
        how: [
          "Neither excerpt tells who wrote it, so Jamal has to judge the words.",
          "Excerpt B says every peach in Georgia is picked at 3:00 in the morning on the same day. That could not really happen. It promises too much.",
          "Excerpt A gives careful details that make sense: how a ripe peach looks and how workers pick it.",
          "The answer is \"Excerpt A, because its details are careful and make sense.\" An exact time does not make a fact true."
        ],
        misconception: "A common mix-up is trusting a sentence because it sounds exact, like 3:00 in the morning. Ask whether it could really be true.",
        why: "The answer is \"Excerpt A, because its details are careful and make sense.\" Excerpt A tells how a ripe peach looks and how workers pick it, which makes sense. Excerpt B says every peach in a whole state is picked at the same hour on the same day, which could not happen. An exact time or the word every does not make a fact true, and numbers are fine when they make sense." },
      { id: "SK-RA2b-C05", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [],
        stem: ["A post on a fruit fans' web page says: \"Peach trees grow ten feet taller every year! Trust me, I just know trees.\" The post is signed \"PeachFan.\""],
        prompt: "Jamal decides not to use this post. Complete his reason.",
        text: "I should not use this post because the writer {0}, and the post gives {1}.",
        slots: [
          { options: ["does not tell who they are or how they know", "is trying to sell the reader a product", "is paid to say nice things about peaches"], answer: 0 },
          { options: ["a number that cannot be true", "a date that is out of date", "a picture that is blurry"], answer: 0 }
        ],
        clue: "A reason not to trust a source can be about who made it or about its words. Check both parts of the post.",
        hints: [
          "A reason not to trust a source can be about who made it or about its words. Check both parts of the post.",
          "Look at how the post is signed and at what it claims.",
          "For the first blank, read the signature again. It is only \"PeachFan.\" Is it a name you could look up, or only a screen name? The second blank is still yours to decide."
        ],
        how: [
          "The post is signed only \"PeachFan,\" and the writer says, \"Trust me, I just know trees.\" That does not tell who they are or how they know.",
          "Ten feet taller every year is a number that cannot be true. A tree that grew that fast would be taller than a house in a few years.",
          "The answers: the writer does not tell who they are or how they know, and the post gives a number that cannot be true."
        ],
        misconception: "A common mix-up is trusting a writer who sounds sure. \"Trust me\" is not the same as telling how you know.",
        why: "The answers are \"does not tell who they are or how they know\" and \"a number that cannot be true.\" The post is signed only \"PeachFan,\" and \"Trust me\" does not say how the writer knows. A peach tree cannot grow ten feet taller every year." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-RA2b-C06", type: "hottext", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: ["p3"],
        prompt: "Ama is reading Source 1. Which TWO sentences are the clearest warning signs that Source 1 may not be credible? Choose two sentences.",
        targets: ["p3:1:1", "p3:1:2", "p3:1:3", "p3:2:1", "p3:2:2", "p3:3:1", "p3:3:2"],
        answer: ["p3:2:1", "p3:3:1"], pick: 2,
        clue: "Read each sentence and ask: Does it make sense? Does it tell how anyone found it out? Is it trying to sell something?",
        hints: [
          "Read each sentence and ask: Does it make sense? Does it tell how anyone found it out? Is it trying to sell something?",
          "Reread paragraphs 2 and 3.",
          "\"Goldfish swim with fins on their sides, back and tail\" is a plain fact that makes sense. Look closely at the other sentences in paragraphs 2 and 3."
        ],
        how: [
          "\"Everyone knows\" does not tell who checked the fact, so that sentence is a warning sign.",
          "A goldfish living 100 years, and only if you buy the food the page sells, is an impossible number and a sales pitch. That is a warning sign, too.",
          "The sentences about colors, tails, fins and eating small bits of food are plain facts that make sense.",
          "The answers are \"Everyone knows that a goldfish can remember things for only three seconds!\" and \"A goldfish can live for 100 years if you feed it Sparkle Flakes, the fish food we sell.\""
        ],
        misconception: "A common mix-up is thinking every sentence on a weak page sounds wrong. A page with warning signs can still have some plain facts, but you cannot tell which ones to trust.",
        why: "The answers are \"Everyone knows that a goldfish can remember things for only three seconds!\" and \"A goldfish can live for 100 years if you feed it Sparkle Flakes, the fish food we sell.\" \"Everyone knows\" does not tell who checked, and 100 years is impossible and is tied to selling fish food. The other sentences are plain facts that make sense." },
      { id: "SK-RA2b-C07", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.b"], passages: ["p4"],
        prompt: "Source 2 begins, \"Many people say that goldfish forget things in a few seconds.\" Why does the writer begin this way?",
        choices: [
          { text: "to name the idea that the scientists set out to test", correct: true },
          { text: "to show that the writer agrees that goldfish forget fast" },
          { text: "to prove that many people keep goldfish as pets" },
          { text: "to show that Source 1 was written by a scientist" }
        ],
        clue: "Ask what the rest of Source 2 does with its first sentence. Does the writer agree with it, or do something else with it?",
        hints: [
          "Ask what the rest of Source 2 does with its first sentence. Does the writer agree with it, or do something else with it?",
          "Read the rest of paragraph 1, and then read paragraph 3.",
          "Source 2 never tells how many people keep goldfish as pets, so that answer does not fit. Check the other answers against paragraphs 1 and 3."
        ],
        how: [
          "The first sentence tells something many people believe about goldfish.",
          "The next sentence says scientists wanted to find out if that is true, so they tested it.",
          "Paragraph 3 tells what they found: goldfish remember for months, not seconds. So the writer does not agree with the first sentence.",
          "The answer is \"to name the idea that the scientists set out to test.\""
        ],
        misconception: "A common mix-up is thinking a writer believes every idea in the article. Writers sometimes name an idea so they can show whether it is true.",
        why: "The answer is \"to name the idea that the scientists set out to test.\" The next sentence says scientists tested whether it is true, and paragraph 3 says goldfish remember for months, not seconds. The writer does not agree with the first sentence, never counts goldfish owners and never talks about Source 1." },
      { id: "SK-RA2b-C08", type: "hottext", points: 1, dok: 2, std: ["3.T.RA.2.b"], passages: ["p4"],
        prompt: "A credible source often tells how people found out its facts. Which sentence tells what the scientists SAW that shows goldfish can remember for months? Choose the sentence in the passage.",
        targets: ["p4:1:2", "p4:2:1", "p4:2:2", "p4:2:3", "p4:3:1", "p4:3:2"],
        answer: ["p4:2:3"], pick: 1,
        clue: "What scientists saw is what happened in the test. Proof that a memory lasts for months must show time passing.",
        hints: [
          "What scientists saw is what happened in the test. Proof that a memory lasts for months must show time passing.",
          "Reread paragraph 2, where the test is told step by step.",
          "\"In one test, scientists played a sound each time they fed a group of goldfish\" tells how the test started, not what happened later. Decide about the other sentences in paragraph 2."
        ],
        how: [
          "The test is in paragraph 2. First, the scientists played a sound at feeding time.",
          "After a while, the fish swam to the spot when they heard the sound. That shows they learned.",
          "Months later, they still did it. That is what the scientists saw that shows the fish remembered for months.",
          "The answer is \"Months later, the fish still swam to the spot when the sound played.\" Paragraph 3 says what the writer decides from the test, not what the scientists saw."
        ],
        misconception: "A common mix-up is choosing the writer's conclusion, \"So goldfish can remember things for months.\" The question asks for what the scientists saw.",
        why: "The answer is \"Months later, the fish still swam to the spot when the sound played.\" It is what the scientists saw after months had passed. The other sentences in paragraph 2 tell how the test started and what the fish learned first, and paragraph 3 tells what the writer decides from the test." },
      { id: "SK-RA2b-C09", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.b"], passages: ["p4"],
        prompt: "Ama's sister has a different question: \"How can I keep my pet goldfish healthy?\" Which sentence from Source 2 is MOST relevant to her question?",
        choices: [
          { text: "\"Goldfish can live for ten years or more when their water is kept clean.\"", correct: true },
          { text: "\"In one test, scientists played a sound each time they fed a group of goldfish.\"" },
          { text: "\"Pet goldfish often learn to swim to the front of the tank when the person who feeds them walks in.\"" },
          { text: "\"Many people say that goldfish forget things in a few seconds.\"" }
        ],
        clue: "A source can be credible and still not fit every question. Read the sister's question word by word, then find the sentence that helps answer it.",
        hints: [
          "A source can be credible and still not fit every question. Read the sister's question word by word, then find the sentence that helps answer it.",
          "Find each sentence in Source 2 and ask what question it helps answer.",
          "The sentence about the scientists' sound test tells how they studied one thing, not how to care for a fish. Check the other three."
        ],
        how: [
          "The sister's question is about keeping a pet goldfish healthy.",
          "Paragraph 4 says goldfish can live ten years or more when their water is kept clean. Clean water is something she can do to keep her fish healthy.",
          "The other sentences are about memory: the test, what people say, and fish swimming to the front of the tank.",
          "The answer is \"Goldfish can live for ten years or more when their water is kept clean.\""
        ],
        misconception: "A common mix-up is choosing a sentence because it has the word pet in it. A sentence is relevant only if it helps answer the question.",
        why: "The answer is \"Goldfish can live for ten years or more when their water is kept clean.\" Clean water helps a goldfish stay healthy and live a long time. The other sentences are about memory: the sound test, what people say, and pet fish learning when they will be fed." },
      { id: "SK-RA2b-C10", type: "match", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [],
        prompt: "Ama finds more sources about goldfish. Match each source to the best description of it.",
        cols: ["Can trust: people who know fish made it", "Do not trust: it is trying to sell something", "Do not trust: it does not say who wrote it or how they know"],
        rows: [
          { text: "a book by a scientist who studies how fish learn", answer: 0 },
          { text: "a pet store sign: \"Our goldfish are the smartest in town! Two for $5!\"", answer: 1 },
          { text: "a post signed \"FishFan9\" that says goldfish forget everything", answer: 2 },
          { text: "an aquarium web page by the workers who care for its fish", answer: 0 },
          { text: "a fish-food box that says, \"Our flakes make fish twice as smart!\"", answer: 1 }
        ],
        clue: "For each source, ask who made it and why. Do they know about fish, are they selling something, or can you not tell who they are?",
        hints: [
          "For each source, ask who made it and why. Do they know about fish, are they selling something, or can you not tell who they are?",
          "In each row, find the words that tell who made the source. Then look for words that sell, like prices or big promises.",
          "A post signed only \"FishFan9\" does not tell who the writer is or how they know, so it goes in the last group. Sort the other four."
        ],
        how: [
          "The scientist's book and the aquarium web page come from people who know fish, so you can trust them.",
          "The pet store sign has a price, and the fish-food box makes a big promise. Both are trying to sell something.",
          "\"FishFan9\" does not say who wrote the post or how they know."
        ],
        misconception: "A common mix-up is trusting a source because it sounds sure. A store sign or a box with big promises is trying to sell, not to teach.",
        why: "The scientist's book and the aquarium web page can be trusted, because people who know fish made them. The pet store sign and the fish-food box are trying to sell something. The \"FishFan9\" post does not say who wrote it or how they know." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-RA2b-C11", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: ["p5"], pick: 2,
        prompt: "Kofi has five research questions. Which TWO could he answer using \"Bulls and the Color Red\"? Choose two answers.",
        choices: [
          { text: "What colors can cattle see?", correct: true },
          { text: "How heavy can a grown bull get?", correct: true },
          { text: "What do bulls eat each day?" },
          { text: "How long do cattle live?" },
          { text: "Why do farmers keep bulls behind strong fences?" }
        ],
        clue: "A source is relevant to a question only if it gives facts that answer it. Check each question against the page.",
        hints: [
          "A source is relevant to a question only if it gives facts that answer it. Check each question against the page.",
          "For each question, try to put your finger on a sentence in the page that answers it. If you cannot find one, the page does not answer that question.",
          "The page never tells what bulls eat, so it cannot answer that question. Check the other four questions."
        ],
        how: [
          "Paragraph 2 says cattle can see blue and yellow. That answers \"What colors can cattle see?\"",
          "Paragraph 4 says a grown bull can weigh as much as a small car. That answers \"How heavy can a grown bull get?\"",
          "The page never tells what bulls eat, how long cattle live or why farmers use fences. Saying bulls are strong is not the same as telling about fences."
        ],
        misconception: "A common mix-up is choosing a question because one of its words, like strong, is on the page. The page must answer the whole question.",
        why: "The answers are \"What colors can cattle see?\" and \"How heavy can a grown bull get?\" Paragraph 2 tells which colors cattle can see, and paragraph 4 tells how much a grown bull can weigh. The page never tells what bulls eat, how long cattle live or why farmers keep bulls behind fences." },
      { id: "SK-RA2b-C12", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.b"], passages: ["p5"],
        prompt: "A game website says, \"Bulls go wild when they see red!\" Which sentence from \"Bulls and the Color Red\" gives the BEST reason to doubt it?",
        choices: [
          { text: "\"The bulls charged all three flags, and they did not pick the red one.\"", correct: true },
          { text: "\"To test the idea, a TV show put a red flag, a blue flag and a white flag near bulls.\"" },
          { text: "\"Many people believe that the color red makes bulls charge.\"" },
          { text: "\"A grown bull can weigh as much as a small car.\"" }
        ],
        clue: "To doubt a claim, look for a sentence that shows a reason it may not be true.",
        hints: [
          "To doubt a claim, look for a sentence that shows a reason it may not be true.",
          "Read paragraph 1, and then read about the test in paragraph 3.",
          "A sentence gives a reason to doubt a claim only if it tells what happened when someone checked the claim. Ask this of each answer."
        ],
        how: [
          "A reason to doubt a claim shows that the claim may not be true.",
          "In paragraph 3, the bulls charged all three flags and did not pick the red one. If red made bulls go wild, they would have gone after the red flag first.",
          "Putting out the three flags only tells how the test was set up, not what happened. The sentence about people who moved tells what else bulls go after, not whether red makes them charge. The belief in paragraph 1 agrees with the website, and a bull's weight is about something else.",
          "The answer is \"The bulls charged all three flags, and they did not pick the red one.\""
        ],
        misconception: "A common mix-up is choosing the sentence that tells how a test was set up. What happened in the test is what gives a reason to doubt.",
        why: "The answer is \"The bulls charged all three flags, and they did not pick the red one.\" If red made bulls go wild, they would have gone after the red flag first, but they did not. The sentence about the three flags only tells how the test was set up, the sentence about moving people does not test red, the belief agrees with the website, and a bull's weight is off topic." },
      { id: "SK-RA2b-C13", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [], pick: 2,
        stem: ["**Keeping Ladybugs in Your Garden**", "A web page from the Cedar Hill Nature Center",
          "Written by Ms. Rena Vance, who has studied garden insects for twelve years",
          "\"We counted the tiny bugs called aphids on our rose bushes every week for two summers. Bushes with ladybugs on them had far fewer aphids.\"",
          "At the top of the page is a bright cartoon of a ladybug wearing sunglasses."],
        prompt: "Which TWO details make this web page credible? Choose two answers.",
        choices: [
          { text: "It was written by someone who has studied garden insects for twelve years.", correct: true },
          { text: "It tells how the facts were found: by counting aphids every week for two summers.", correct: true },
          { text: "It has a bright cartoon of a ladybug wearing sunglasses." },
          { text: "It is about ladybugs, which are fun to learn about." },
          { text: "It is a web page, so it is newer than a book." }
        ],
        clue: "Credible means you can trust it. Ask what would make you believe a page, and what only makes it nice to look at.",
        hints: [
          "Credible means you can trust it. Ask what would make you believe a page, and what only makes it nice to look at.",
          "Read every line of the source, from the title down to the picture. Choose two.",
          "A bright cartoon can make a page fun, but it does not make the facts true. Check the other four details."
        ],
        how: [
          "Ms. Vance has studied garden insects for twelve years, so she knows about them.",
          "The page tells how the facts were found: the aphids were counted every week for two summers.",
          "A fun cartoon, a fun topic and being a web page do not make a source credible.",
          "The answers are \"It was written by someone who has studied garden insects for twelve years.\" and \"It tells how the facts were found: by counting aphids every week for two summers.\""
        ],
        misconception: "A common mix-up is trusting a page because it looks nice or because its topic is fun.",
        why: "The answers are \"It was written by someone who has studied garden insects for twelve years.\" and \"It tells how the facts were found: by counting aphids every week for two summers.\" Who wrote it and how the facts were found make the page credible. A cartoon, a fun topic and being a web page do not." },
      { id: "SK-RA2b-C14", type: "dropdown", points: 2, dok: 3, std: ["3.T.RA.2.b"], passages: [],
        stem: ["Bree's question: \"Why do tennis balls have fuzz?\"",
          "**Excerpt X,** from a tennis coach's guide: \"Drink water during every break in a long match.\"",
          "**Excerpt Y,** from a post signed \"AceKid\": \"The fuzz makes a tennis ball fly 1,000 miles an hour, every single time!\""],
        prompt: "Complete Bree's notes about the two excerpts.",
        text: "Excerpt X is {0}. Excerpt Y is {1}.",
        slots: [
          { options: ["credible and relevant", "credible but not relevant", "relevant but not credible"], answer: 1 },
          { options: ["credible and relevant", "credible but not relevant", "relevant but not credible"], answer: 2 }
        ],
        clue: "Check each excerpt two ways. Credible: can you trust who wrote it and its words? Relevant: does it help answer Bree's question?",
        hints: [
          "Check each excerpt two ways. Credible: can you trust who wrote it and its words? Relevant: does it help answer Bree's question?",
          "For Excerpt X, read Bree's question again and ask what the excerpt is about. For Excerpt Y, look at who wrote it and at the words \"1,000 miles an hour\" and \"every single time.\"",
          "A tennis coach knows about the sport, so Excerpt X can be trusted. Now decide whether it fits Bree's question, and then judge Excerpt Y."
        ],
        how: [
          "Excerpt X comes from a tennis coach, so it is credible. But it is about drinking water, not fuzz, so it is not relevant.",
          "Excerpt Y is about fuzz, so it is relevant. But the writer gives no real name, and \"1,000 miles an hour, every single time\" is impossible, so it is not credible.",
          "The answers: X is credible but not relevant, and Y is relevant but not credible."
        ],
        misconception: "A common mix-up is checking only one thing. A good source must be credible AND relevant.",
        why: "The answers are \"credible but not relevant\" and \"relevant but not credible.\" A coach's tip about drinking water can be trusted, but it does not tell why tennis balls have fuzz. The post is about fuzz, but its writer gives no name and its number is impossible." },
      /* Constructed response: never scored. */
      { id: "SK-RA2b-C15", type: "cr", dok: 3, std: ["3.T.RA.2.b"], passages: [], rows: 4,
        stem: ["Pick a topic you would like to learn more about."],
        prompt: "Name ONE source you think would be credible and relevant for your topic. Then give TWO reasons: one that shows it is credible and one that shows it is relevant.",
        sample: "My topic is how glaciers move. I would use a book from a science museum, written by scientists who study ice. It is credible because the writers study glaciers for their job. It is relevant because it has a chapter about how glaciers slide downhill.",
        criteria: ["I named a topic and one source.", "I gave a reason the source is credible, such as who made it or how they found out.", "I gave a reason the source is relevant to my topic."],
        clue: "Start with a topic you wonder about. Then think of a place where people who know that topic share facts.",
        hints: [
          "Start with a topic you wonder about. Then think of a place where people who know that topic share facts.",
          "For the credible reason, tell who made the source and how they know. For the relevant reason, tell what part of the source is about your topic.",
          "Check your two reasons: one should be about who made the source, and the other should be about what the source covers."
        ],
        how: [
          "Pick a topic and name one source, such as a book, a web page or a person.",
          "Write one reason it is credible: who made it and how they know.",
          "Write one reason it is relevant: what part of it is about your topic.",
          "Compare with the sample and the checklist. Other topics and sources can also be right."
        ],
        why: "Many answers can be right. A strong answer names one source and gives one reason it is credible and one reason it is relevant." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short text. */
  similar: [
    { id: "SK-RA2b-S01", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C02", "SK-RA2b-C06"],
      prompt: "Keisha found these sentences about tomato plants. Which sentence is a warning sign that its source may not be credible?",
      choices: [
        { text: "\"This plant food makes any tomato grow as big as a beach ball overnight!\"", correct: true },
        { text: "\"Tomato plants need plenty of water when the weather is hot.\"" },
        { text: "\"Our garden club measured our tomato plants every Friday in June.\"" },
        { text: "\"Tomatoes can be red, yellow, orange or even purple.\"" }
      ],
      clue: "Warning signs are words that sell, words that promise too much and numbers or sizes that sound impossible.",
      hints: [
        "Warning signs are words that sell, words that promise too much and numbers or sizes that sound impossible.",
        "For each sentence, picture it really happening. Could it be true?",
        "Measuring plants every Friday tells how the club found out, so that is a good sign, not a warning sign. Check the other three."
      ],
      how: [
        "A warning sign makes you doubt a source.",
        "No plant food can make a tomato as big as a beach ball overnight. It promises too much, and it is selling plant food.",
        "Needing water and coming in many colors make sense, and measuring every Friday tells how facts were found.",
        "The answer is \"This plant food makes any tomato grow as big as a beach ball overnight!\""
      ],
      why: "The answer is \"This plant food makes any tomato grow as big as a beach ball overnight!\" It promises something impossible to sell plant food. The other sentences make sense, and one tells how the facts were found." },
    { id: "SK-RA2b-S02", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C03", "SK-RA2b-C09", "SK-RA2b-C11"],
      prompt: "Theo's question is \"Why do dogs pant?\" All four excerpts come from a book by an animal doctor. Which excerpt is relevant to his question?",
      choices: [
        { text: "\"Dogs pant to cool off, because panting lets heat leave the body.\"", correct: true },
        { text: "\"A dog's wet nose helps it pick up all kinds of smells.\"" },
        { text: "\"Wolves howl to call one another, but most pet dogs seldom howl.\"" },
        { text: "\"Most pet dogs sleep for twelve hours or more each day.\"" }
      ],
      clue: "The book can be trusted, so check the topic. Theo's question asks WHY dogs pant.",
      hints: [
        "The book can be trusted, so check the topic. Theo's question asks WHY dogs pant.",
        "Two excerpts are about breathing or making sounds. Read those two closely.",
        "Sleep and a wet nose are not about breathing or sounds. Compare the other two excerpts with Theo's question, word by word."
      ],
      how: [
        "Theo's question asks why dogs pant.",
        "The excerpt about cooling off gives the reason dogs pant.",
        "Howling is a different thing dogs and wolves do, and smells and sleep are other topics.",
        "The answer is \"Dogs pant to cool off, because panting lets heat leave the body.\""
      ],
      why: "The answer is \"Dogs pant to cool off, because panting lets heat leave the body.\" It gives the reason dogs pant. Howling is something different, and smells and sleep are other topics." },
    { id: "SK-RA2b-S03", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [], pick: 2,
      like: ["SK-RA2b-C13", "SK-RA2b-C10", "SK-RA2b-P4"],
      prompt: "Lena is writing a report on how to care for a pet rabbit. Which TWO sources would be credible? Choose two answers.",
      choices: [
        { text: "a guide written by an animal doctor who treats rabbits", correct: true },
        { text: "a book by a shelter worker who has cared for rabbits for ten years", correct: true },
        { text: "an ad that says its rabbit food makes rabbits live forever" },
        { text: "a post signed \"BunnyLove\" that gives no other name" },
        { text: "a cartoon about a rabbit who flies to the moon" }
      ],
      clue: "Ask who made each source. Do they know about caring for rabbits, or are they selling, hiding who they are, or telling a made-up story?",
      hints: [
        "Ask who made each source. Do they know about caring for rabbits, or are they selling, hiding who they are, or telling a made-up story?",
        "In each answer, find the words that tell who made the source. Choose two.",
        "The cartoon is a made-up story, so it is not a fact source. Check who made each of the other four."
      ],
      how: [
        "An animal doctor who treats rabbits and a shelter worker who has cared for rabbits for ten years both know the facts.",
        "The ad promises something impossible to sell food, \"BunnyLove\" does not say who they are, and the cartoon is made up.",
        "The answers are \"a guide written by an animal doctor who treats rabbits\" and \"a book by a shelter worker who has cared for rabbits for ten years.\""
      ],
      why: "The answers are \"a guide written by an animal doctor who treats rabbits\" and \"a book by a shelter worker who has cared for rabbits for ten years.\" Both are made by people who know how to care for rabbits. The ad is selling, the post hides who wrote it, and the cartoon is made up." },
    { id: "SK-RA2b-S04", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C04"],
      stem: ["Neither excerpt gives the writer's name.",
        "**Excerpt A:** \"Some wild mushrooms are safe to eat, but others can make people very sick. Only an expert should decide which wild mushrooms are safe.\"",
        "**Excerpt B:** \"Every mushroom in the woods is safe to eat, and all of them taste just like candy!\""],
      prompt: "Which excerpt is more believable, and why?",
      choices: [
        { text: "Excerpt A, because it is careful and makes sense.", correct: true },
        { text: "Excerpt B, because it says every mushroom, so it covers more." },
        { text: "Excerpt B, because it sounds happy and very sure." },
        { text: "Excerpt A, because it uses more words than Excerpt B." }
      ],
      clue: "When you cannot tell who wrote something, read its words. Could the facts happen in real life? Do they promise too much?",
      hints: [
        "When you cannot tell who wrote something, read its words. Could the facts happen in real life? Do they promise too much?",
        "Read Excerpt B again. Picture every mushroom in every woods.",
        "More words do not make an excerpt more believable. Compare the reasons that are left."
      ],
      how: [
        "Neither excerpt tells who wrote it, so judge the words.",
        "Excerpt B says every mushroom is safe and tastes like candy. That promises too much and could not be true.",
        "Excerpt A is careful: it says some are safe, some are not, and an expert should decide.",
        "The answer is \"Excerpt A, because it is careful and makes sense.\""
      ],
      why: "The answer is \"Excerpt A, because it is careful and makes sense.\" Excerpt B promises that every mushroom is safe, which cannot be true. Sounding sure, covering more and using more words do not make a source believable." },
    { id: "SK-RA2b-S05", type: "dropdown", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C05"],
      stem: ["A post says: \"Bamboo grows all the way to the moon in one week! I know because I saw some once.\" The post is signed \"PlantGuy.\""],
      prompt: "Complete the reason this post is not a good source.",
      text: "I should not use this post because the writer {0}, and the post makes {1}.",
      slots: [
        { options: ["gives no real name and only saw bamboo once", "is a scientist who studies plants", "works at a big garden center"], answer: 0 },
        { options: ["a claim that cannot be true", "a claim that scientists measured", "a claim from a science museum"], answer: 0 }
      ],
      clue: "A reason not to trust a source can be about who made it or about its words. Check both.",
      hints: [
        "A reason not to trust a source can be about who made it or about its words. Check both.",
        "Look at how the post is signed and how the writer says they know. Then read the claim again.",
        "The post never says the writer is a scientist or works at a garden center, so neither can go in the first blank. Now judge the claim."
      ],
      how: [
        "The post is signed only \"PlantGuy,\" and the writer only saw bamboo once.",
        "Growing to the moon in a week cannot be true.",
        "The answers: the writer gives no real name and only saw bamboo once, and the post makes a claim that cannot be true."
      ],
      why: "The answers are \"gives no real name and only saw bamboo once\" and \"a claim that cannot be true.\" Seeing bamboo once does not make someone an expert, and no plant grows to the moon." },
    { id: "SK-RA2b-S06", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C07"],
      stem: ["\"Some people think a porcupine can shoot its quills at an enemy. Scientists who study porcupines watched them closely. They found that the quills come loose only when something touches them.\""],
      prompt: "Why does the writer begin with \"Some people think a porcupine can shoot its quills at an enemy\"?",
      choices: [
        { text: "to name an idea that the scientists then checked", correct: true },
        { text: "to show that the writer thinks porcupines shoot quills" },
        { text: "to tell how many people keep porcupines as pets" },
        { text: "to show that porcupine quills are soft and safe" }
      ],
      clue: "Ask what the rest of the excerpt does with its first sentence. Does the writer agree with it?",
      hints: [
        "Ask what the rest of the excerpt does with its first sentence. Does the writer agree with it?",
        "Read the second and third sentences.",
        "Nothing in the excerpt counts how many people keep porcupines, so that answer does not fit. Check the other three."
      ],
      how: [
        "The first sentence tells what some people believe.",
        "Next, scientists watched porcupines and found the quills come loose only when touched, so they do not shoot.",
        "So the writer names the idea in order to show what the scientists found.",
        "The answer is \"to name an idea that the scientists then checked\"."
      ],
      why: "The answer is \"to name an idea that the scientists then checked\". The scientists found the quills come loose only when touched, so the writer does not agree with the first sentence. Pets and soft quills are not in the excerpt." },
    { id: "SK-RA2b-S07", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C12", "SK-RA2b-C08"],
      stem: ["(1) Many people think that llamas spit at people all the time.", "(2) Scientists who study llamas watched a herd on a farm for six months.", "(3) The llamas spat at each other when they fought over food.", "(4) They almost never spat at people."],
      prompt: "A sign says, \"Llamas spit at every person they meet!\" Which sentence gives the BEST reason to doubt the sign?",
      choices: [
        { text: "They almost never spat at people.", correct: true },
        { text: "The llamas spat at each other when they fought over food." },
        { text: "Scientists who study llamas watched a herd on a farm for six months." },
        { text: "Many people think that llamas spit at people all the time." }
      ],
      clue: "To doubt a claim, look for what the scientists saw that shows the claim may not be true.",
      hints: [
        "To doubt a claim, look for what the scientists saw that shows the claim may not be true.",
        "Read sentences 3 and 4, which tell what the scientists saw.",
        "Sentence 1 tells what many people think, and it agrees with the sign. Look closely at sentences 3 and 4."
      ],
      how: [
        "The sign says llamas spit at every person.",
        "Sentence 4 says the llamas almost never spat at people. That is what the scientists saw, and it shows the sign is wrong.",
        "Sentence 3 shows llamas spitting, but at each other. Sentence 2 tells how the scientists studied them, not what they saw.",
        "The answer is \"They almost never spat at people.\""
      ],
      why: "The answer is \"They almost never spat at people.\" If llamas spat at every person, the scientists would have seen it. Spitting at each other is not spitting at people, and watching for six months tells how they studied, not what they found." },
    { id: "SK-RA2b-S08", type: "dropdown", points: 2, dok: 3, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C14"],
      stem: ["Omar's question: \"What do manatees eat?\"",
        "**Excerpt X,** from a sea scientist's article: \"A manatee can stay underwater for as long as 20 minutes when it is resting before it comes up for air.\"",
        "**Excerpt Y,** from a post signed \"SeaCowFan\": \"Manatees eat a million pounds of sea grass every single hour!\""],
      prompt: "Complete Omar's notes about the two excerpts.",
      text: "Excerpt X is {0}. Excerpt Y is {1}.",
      slots: [
        { options: ["credible and relevant", "credible but not relevant", "relevant but not credible"], answer: 1 },
        { options: ["credible and relevant", "credible but not relevant", "relevant but not credible"], answer: 2 }
      ],
      clue: "Check each excerpt two ways. Credible: can you trust who wrote it and its words? Relevant: does it help answer Omar's question?",
      hints: [
        "Check each excerpt two ways. Credible: can you trust who wrote it and its words? Relevant: does it help answer Omar's question?",
        "For Excerpt X, ask what it is about. For Excerpt Y, look at who wrote it and at its number.",
        "A sea scientist knows about manatees, so Excerpt X can be trusted. Decide whether it fits Omar's question, then judge Excerpt Y."
      ],
      how: [
        "Excerpt X comes from a sea scientist, so it is credible, but it is about resting underwater, not food.",
        "Excerpt Y is about food, so it is relevant, but it gives no real name and a number that cannot be true.",
        "The answers: X is credible but not relevant, and Y is relevant but not credible."
      ],
      why: "The answers are \"credible but not relevant\" and \"relevant but not credible.\" The scientist's fact is about resting, not eating. The post is about food, but its writer gives no name and its number is impossible." },
    { id: "SK-RA2b-S09", type: "cr", dok: 3, std: ["3.T.RA.2.b"], passages: [], rows: 4,
      like: ["SK-RA2b-C15"],
      stem: ["Pick a different topic from the one you used before."],
      prompt: "Name ONE source you think would NOT be credible or NOT be relevant for that topic. Tell which problem it has and how you can tell.",
      sample: "My topic is how gymnasts learn flips. A post signed \"FlipQueen\" that says \"Anyone can learn a back flip in one minute!\" would not be credible. It gives no real name, and one minute is too fast to be true.",
      criteria: ["I named a topic and one source.", "I said whether the source is not credible or not relevant.", "I told what in the source shows the problem."],
      clue: "Think of a source you should not use, such as an ad, a post with no name or a book about a different topic.",
      hints: [
        "Think of a source you should not use, such as an ad, a post with no name or a book about a different topic.",
        "Decide which problem it has. Is it about who made it and its words, or about the topic?",
        "Tell exactly what shows the problem, such as no real name, a number that cannot be true or a topic that does not match."
      ],
      how: [
        "Pick a topic and name one source you should not use.",
        "Say whether it is not credible or not relevant.",
        "Tell what shows the problem.",
        "Compare with the sample and the checklist. Other answers can also be right."
      ],
      why: "Many answers can be right. A strong answer names a source, says which problem it has and tells what shows the problem." },
    { id: "SK-RA2b-S10", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [], pick: 2,
      like: ["SK-RA2b-C06"],
      stem: ["A page from a ski shop's website:", "(1) Skiers wear goggles to protect their eyes from snow and sun.", "(2) Everyone knows our ski wax makes you the fastest skier on any mountain!", "(3) Skis are long and flat, so they slide over the snow.", "(4) Our ski school teaches every kid to ski perfectly in just ten minutes.", "(5) Many ski hills open in December."],
      prompt: "Which TWO sentences are the clearest warning signs that this page may not be credible? Choose two answers.",
      choices: [
        { text: "Everyone knows our ski wax makes you the fastest skier on any mountain!", correct: true },
        { text: "Our ski school teaches every kid to ski perfectly in just ten minutes.", correct: true },
        { text: "Skiers wear goggles to protect their eyes from snow and sun." },
        { text: "Skis are long and flat, so they slide over the snow." },
        { text: "Many ski hills open in December." }
      ],
      clue: "Read each sentence and ask: Does it make sense? Does it promise too much? Is it trying to sell something?",
      hints: [
        "Read each sentence and ask: Does it make sense? Does it promise too much? Is it trying to sell something?",
        "Read every sentence on the page before you choose. Choose two.",
        "Goggles that protect eyes from snow and sun make sense, so that sentence is a plain fact. Check the other four."
      ],
      how: [
        "\"Everyone knows\" and \"the fastest skier on any mountain\" are selling words that promise too much.",
        "Teaching every kid to ski perfectly in ten minutes cannot be true.",
        "Goggles, flat skis and hills opening in December are plain facts that make sense.",
        "The answers are \"Everyone knows our ski wax makes you the fastest skier on any mountain!\" and \"Our ski school teaches every kid to ski perfectly in just ten minutes.\""
      ],
      why: "The answers are \"Everyone knows our ski wax makes you the fastest skier on any mountain!\" and \"Our ski school teaches every kid to ski perfectly in just ten minutes.\" Both promise too much to sell something. The other sentences make sense." },
    { id: "SK-RA2b-S11", type: "mc", points: 1, dok: 2, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C09"],
      prompt: "June's question is \"Why does a cello sound so low?\" All four excerpts come from a book by a music teacher. Which excerpt is MOST relevant to her question?",
      choices: [
        { text: "\"A cello's long, thick strings shake slowly, and slow shaking makes low sounds.\"", correct: true },
        { text: "\"Cellos are made of wood, such as spruce and maple, and then varnished.\"" },
        { text: "\"A cello player sits on a chair and holds the cello between the knees.\"" },
        { text: "\"The first cellos were made in Italy about 500 years ago, long before radios.\"" }
      ],
      clue: "The book can be trusted, so check the topic. June's question asks WHY the notes of a cello are so low.",
      hints: [
        "The book can be trusted, so check the topic. June's question asks WHY the notes of a cello are so low.",
        "Read each excerpt and say what it is about: the sound, the wood, the player or the history.",
        "Where the first cellos were made is history, not sound. Check the other three excerpts."
      ],
      how: [
        "June's question asks why a cello sounds low.",
        "The excerpt about long, thick strings shaking slowly explains the low sound.",
        "The wood, how the player sits and the history are true, but they do not explain the low sound.",
        "The answer is \"A cello's long, thick strings shake slowly, and slow shaking makes low sounds.\""
      ],
      why: "The answer is \"A cello's long, thick strings shake slowly, and slow shaking makes low sounds.\" It explains the low sound. The other excerpts are about wood, how to sit and history." },
    { id: "SK-RA2b-S12", type: "match", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C10"],
      prompt: "Nico finds sources about snowboarding. Match each source to the best description of it.",
      cols: ["Can trust: people who know snowboarding made it", "Do not trust: it is trying to sell something", "Do not trust: it does not say who wrote it or how they know"],
      rows: [
        { text: "a book by a snowboard coach who has taught for 20 years", answer: 0 },
        { text: "a store sign: \"Our boards make you a champion overnight! Sale today!\"", answer: 1 },
        { text: "a post signed \"ShredDude\" with no other name", answer: 2 },
        { text: "a safety page by the ski patrol team at a mountain", answer: 0 },
        { text: "a sticker on a board box that says, \"Never fall again!\"", answer: 1 }
      ],
      clue: "For each source, ask who made it and why. Do they know snowboarding, are they selling, or can you not tell who they are?",
      hints: [
        "For each source, ask who made it and why. Do they know snowboarding, are they selling, or can you not tell who they are?",
        "In each row, find the words that tell who made the source. Then look for words that sell, like sales or big promises.",
        "A post signed only \"ShredDude\" does not say who wrote it or how they know, so it goes in the last group. Sort the other four."
      ],
      how: [
        "The coach's book and the ski patrol's safety page come from people who know snowboarding.",
        "The store sign and the box sticker make big promises to sell boards.",
        "\"ShredDude\" does not say who wrote the post or how they know."
      ],
      why: "The coach's book and the ski patrol page can be trusted. The store sign and the box sticker are trying to sell. The \"ShredDude\" post does not say who wrote it or how they know." },
    { id: "SK-RA2b-S13", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [], pick: 2,
      like: ["SK-RA2b-C11"],
      stem: ["**A page from a running club's guide:** A marathon is a race that is about 26 miles long. Runners grab cups of water at stations along the way. Many runners train for months before a marathon."],
      prompt: "Which TWO questions could this page help answer? Choose two answers.",
      choices: [
        { text: "How long is a marathon?", correct: true },
        { text: "How do runners get water during a marathon?", correct: true },
        { text: "Who won the very first marathon?" },
        { text: "What kind of shoes are best for a marathon?" },
        { text: "Why do runners' legs feel sore after a race?" }
      ],
      clue: "A source is relevant to a question only if it gives facts that answer it. Check each question against the page.",
      hints: [
        "A source is relevant to a question only if it gives facts that answer it. Check each question against the page.",
        "For each question, try to find a sentence in the page that answers it. Choose two.",
        "The page never names a winner, so it cannot answer the question about the first marathon. Check the other four."
      ],
      how: [
        "The page says a marathon is about 26 miles long. That answers \"How long is a marathon?\"",
        "It says runners grab cups of water at stations. That answers \"How do runners get water during a marathon?\"",
        "The page does not tell about winners, shoes or sore legs."
      ],
      why: "The answers are \"How long is a marathon?\" and \"How do runners get water during a marathon?\" The page tells the length and the water stations. It says nothing about winners, shoes or sore legs." },
    { id: "SK-RA2b-S14", type: "mc", points: 1, dok: 3, std: ["3.T.RA.2.b"], passages: [],
      like: ["SK-RA2b-C12"],
      stem: ["(1) Many people say that cracking your knuckles will hurt your hands when you grow up.", "(2) One doctor cracked the knuckles on only his left hand for 60 years.", "(3) He never cracked the knuckles on his right hand.", "(4) When he was old, both of his hands were just as healthy."],
      prompt: "A post says, \"Cracking your knuckles ruins your hands!\" Which sentence gives the BEST reason to doubt the post?",
      choices: [
        { text: "When he was old, both of his hands were just as healthy.", correct: true },
        { text: "One doctor cracked the knuckles on only his left hand for 60 years." },
        { text: "He never cracked the knuckles on his right hand." },
        { text: "Many people say that cracking your knuckles will hurt your hands when you grow up." }
      ],
      clue: "A good reason to doubt a claim comes from someone testing it, not from what people say about it.",
      hints: [
        "A good reason to doubt a claim comes from someone testing it, not from what people say about it.",
        "Read sentences 2, 3 and 4, about the doctor.",
        "Sentence 1 tells what many people say, and it agrees with the post. For each of the doctor's sentences, ask: does it tell how he checked the idea, or what he found?"
      ],
      how: [
        "The post says cracking your knuckles ruins your hands.",
        "The doctor cracked one hand's knuckles for 60 years and not the other's.",
        "Sentence 4 tells what happened: both hands were just as healthy. That gives a reason to doubt the post.",
        "Sentences 2 and 3 tell how he tested it, not what he found. The answer is \"When he was old, both of his hands were just as healthy.\""
      ],
      why: "The answer is \"When he was old, both of his hands were just as healthy.\" If cracking ruined hands, his left hand would be worse. Sentences 2 and 3 tell how he tested it, and sentence 1 agrees with the post." },
    { id: "SK-RA2b-S15", type: "ms", points: 2, dok: 2, std: ["3.T.RA.2.b"], passages: [], pick: 2,
      like: ["SK-RA2b-C13"],
      stem: ["**How to Make Sushi Rice**", "A web page from the Bayside Cooking School",
        "Written by Chef Kenji Mori, who has made sushi for 25 years",
        "\"We cooked rice for different amounts of time and tasted each batch. Rice cooked for 20 minutes held together best.\"",
        "At the top of the page is a cartoon fish with a big smile."],
      prompt: "Which TWO details make this web page credible? Choose two answers.",
      choices: [
        { text: "It was written by a chef who has made sushi for 25 years.", correct: true },
        { text: "It tells how the facts were found: by cooking and tasting batches of rice.", correct: true },
        { text: "It has a cartoon fish with a big smile at the top." },
        { text: "It is about sushi, which is fun to eat." },
        { text: "It is a web page, so it is newer than a book." }
      ],
      clue: "Credible means you can trust it. Ask what would make you believe a page, and what only makes it nice to look at.",
      hints: [
        "Credible means you can trust it. Ask what would make you believe a page, and what only makes it nice to look at.",
        "Read every line of the source, from the title down to the picture. Choose two.",
        "A smiling cartoon makes a page fun, but it does not make the facts true. Check the other four details."
      ],
      how: [
        "Chef Mori has made sushi for 25 years, so he knows about it.",
        "The page tells how the facts were found: the school cooked and tasted batches of rice.",
        "A cartoon, a fun topic and being a web page do not make a source credible.",
        "The answers are \"It was written by a chef who has made sushi for 25 years.\" and \"It tells how the facts were found: by cooking and tasting batches of rice.\""
      ],
      why: "The answers are \"It was written by a chef who has made sushi for 25 years.\" and \"It tells how the facts were found: by cooking and tasting batches of rice.\" Who wrote it and how the facts were found make it credible; a cartoon, a fun topic and being new do not." }
  ],
  /* Hints and Show me how for items kept in practice: ref P4 (core set 1) and Together P1, P2, P3, P5. */
  addons: {
    "SK-RA2b-P1": {
      hints: [
        "Ask who made each source. Do they know about real alligators, or are they selling something, telling a made-up story or guessing?",
        "In each answer, find the words that tell who made the source and why.",
        "The stuffed alligator ad is trying to sell a toy, so it is not a fact source. Check who made each of the other three."
      ],
      how: [
        "People at a wildlife center study real animals, so their web page about alligator nests is trustworthy.",
        "The ad wants to sell a toy, the comic book is made up, and the friend's idea is only a guess.",
        "The answer is \"a wildlife center web page about alligator nests.\""
      ] },
    "SK-RA2b-P2": {
      hints: [
        "All of these may be trustworthy. Read Priya's topic again, word by word, and find the source that matches all of it.",
        "Say Priya's topic in your own words. Then read each source slowly and say what it is about.",
        "Snowflakes are a different kind of weather, so that article is off topic. Check the other three against every word of her topic."
      ],
      how: [
        "Priya's topic is how hurricanes form.",
        "The weather scientist's article about how hurricanes form matches all of it: hurricanes, and how they form.",
        "Snowflakes and volcanoes are different topics, and the news story tells what happened after a hurricane, not how it formed.",
        "The answer is \"a weather scientist's article about how hurricanes form.\""
      ] },
    "SK-RA2b-P3": {
      hints: [
        "For each source, ask: Does an expert stand behind it? Or is it trying to sell, or only a guess?",
        "In each row, find the words that tell who made the source.",
        "A classmate's guess is not a checked fact, so it is not trustworthy. Sort the other three."
      ],
      how: [
        "The scientist's library book and the museum web page come from experts, so they are trustworthy.",
        "The ad is trying to sell a bat house and makes a big promise: \"a hundred bats overnight!\"",
        "The classmate's idea is only a guess. The ad and the guess are not trustworthy."
      ] },
    "SK-RA2b-P5": {
      hints: [
        "Think about why an ad is made. What does the company want readers to do?",
        "Read the ad's words again: \"every bug in the world.\" Could that really be true?",
        "Bugs are insects, so the ad is on Ella's topic. That is not the problem. Check the other reasons."
      ],
      how: [
        "An ad is made to get people to buy something.",
        "\"Every bug in the world\" cannot be true, so the ad stretches the truth to sell the kit.",
        "The ad is on her topic, a short source can still have facts, and easy words do not make something false.",
        "The answer is \"The ad is trying to sell something, so it may stretch the truth.\""
      ] },
    "SK-RA2b-P4": {
      hints: [
        "Check two things for every source. First, can you trust who made it? Second, is it about growing peach trees?",
        "Look closely at the two library books by a Georgia fruit farmer. Read what each one is about.",
        "The smoothie ad is trying to sell a drink, so it is not a source Jamal can trust for facts. Check the other sources for both things."
      ],
      how: [
        "The Georgia college's farming guide is made by people who study farming, and it is about growing peach trees.",
        "The fruit farmer's book about caring for peach trees is trustworthy and on topic, too.",
        "The farmer's apple tree book is trustworthy, but it is about a different tree. The smoothie ad is selling something, and the poem is not a fact source.",
        "The answers are \"a Georgia college's farming guide about growing peach trees\" and \"a library book by a Georgia fruit farmer about caring for peach trees.\""
      ],
      misconception: "A common mix-up is choosing a source that is trustworthy but off topic, like the apple tree book." }
  },
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
