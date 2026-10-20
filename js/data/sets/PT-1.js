/*
 * PT-1 — Practice Test 1. A blueprint-shaped form (SPEC §2, §5d): all-new passages and items.
 *   p1  literary story   "The Blue Pitcher"          (honesty; a pottery shop in a small Georgia town)
 *   p2  informational    "Why Leaves Change Color"   (science; three section headings, no caption or box)
 *   p3  revising draft   "Hunters of the Night"      (a student's informational draft about owls)
 *   then six standalone language items (passages: []).
 * Genres covered: literary, informational, revising draft. Not covered here (rotate into PT-2/PT-3):
 *   opinion text, poem, paired texts, 3.L.V.3.b/d, Constructing vocabulary.
 * Totals: 24 items, 31 points; 7 two-point items = 14 points (45%).
 * DOK by points: DOK 1 = 3 (10%), DOK 2 = 18 (58%), DOK 3 = 10 (32%).
 *   DOK 3 justification: PT-1-10 asks the child to combine details from two paragraphs into one
 *   explanation; PT-1-17 asks the child to judge which researched facts support a claim. If either
 *   is ever re-tagged DOK 2, DOK 3 falls to 8 (26%); both, 6 (19%), below the blueprint floor.
 *   PT-1-20 and PT-1-21 (choose the correct sentence) are kept at DOK 2; as DOK 1 they would push
 *   DOK 1 to 5 points (16%), above the 5-10% band.
 * Domain split: the 3.L.GC.1 items (PT-1-19, -20, -21) count as Constructing, giving
 *   Interpreting 21 / Constructing 10 (68% / 32%), close to the blueprint's 34:18 without the essay.
 *
 * REFERENCE NOTE for p2: sentence references count EVERY entry in the paragraphs array,
 * 1-based, INCLUDING headings ("## ..."). Prompts that say "paragraph N" use the
 * child-visible number. Map:
 *   array 1 = para 1   | array 2 = heading | array 3 = para 2  | array 4 = para 3
 *   array 5 = heading  | array 6 = para 4  | array 7 = para 5
 *   array 8 = heading  | array 9 = para 6  | array 10 = para 7 | array 11 = para 8
 * p1 and p3 have no headings, so array number = paragraph number.
 * p3 is numbered by sentence: each sentence string starts with "(n) ".
 * The people, the shop and Mill Street are invented.
 */
PP.addSet({
  id: "PT-1",
  section: "test",
  kind: "form",
  title: "Practice Test 1",
  blurb: "A shorter practice test shaped like the real one: reading, revising and language questions. (It does not include the essay. Practice that in Writing.)",
  passages: [
    {
      id: "p1",
      title: "The Blue Pitcher",
      byline: "",
      genre: "Literary text",
      lexile: "about 600L (estimate)",
      paragraphs: [
        [
          "Every Saturday, I helped my Aunt Bea in her pottery shop on Mill Street.",
          "She made bowls, mugs, and plates on a potter's wheel in the back room.",
          "My job was to dust the shelves out front, and I was proud that she trusted me with it."
        ],
        [
          "That morning, Aunt Bea pointed to a tall blue pitcher on the top shelf.",
          "\"That one is for Mrs. Greene,\" she said.",
          "\"She is picking it up at noon as a wedding gift for her daughter, so please be extra careful around it, Malik.\""
        ],
        [
          "\"I will,\" I promised."
        ],
        [
          "I dusted the low shelves first.",
          "Then I climbed onto the step stool to reach the top.",
          "I was in a hurry to finish so I could watch Aunt Bea at the wheel.",
          "As I swung the feather duster toward the corner, its wooden handle bumped the pitcher.",
          "The pitcher wobbled and knocked against the wall with a sharp clink."
        ],
        [
          "I grabbed it with both hands before it could fall.",
          "My heart was pounding like a drum.",
          "I turned the pitcher slowly, and that was when I saw it.",
          "There was a tiny chip on the rim, no bigger than my fingernail."
        ],
        [
          "I hesitated, holding the pitcher in the air.",
          "In the back room, Aunt Bea was humming while the wheel whirred.",
          "She had not heard a thing.",
          "If I told her, maybe she would never let me help in the shop again.",
          "So I set the pitcher back on the shelf with the chip facing the wall."
        ],
        [
          "For the rest of the morning, I swept the floor and lined up the mugs.",
          "I even tried to whistle a song.",
          "But every time I glanced at the top shelf, a heavy feeling sat in my stomach, as if I had swallowed a stone."
        ],
        [
          "At noon, the bell over the door jingled, and Mrs. Greene walked in.",
          "Aunt Bea lifted the blue pitcher from the shelf.",
          "\"Here it is,\" she said with a smile.",
          "\"It is the best piece I have made all year.\""
        ],
        [
          "The words got stuck in my throat.",
          "Then I took a deep breath.",
          "\"Wait,\" I said, and my voice shook.",
          "I told them how I had bumped the pitcher and how I had turned the chip toward the wall so nobody would see it."
        ],
        [
          "The shop went quiet.",
          "Aunt Bea turned the pitcher around and studied the chip for a long moment.",
          "I waited for her to frown."
        ],
        [
          "Instead, she put a hand on my shoulder.",
          "\"Thank you for telling me, Malik,\" she said.",
          "\"A chipped pitcher is a small problem, but broken trust is a much bigger one.\""
        ],
        [
          "Mrs. Greene nodded.",
          "\"I would rather wait for a new pitcher than give my daughter a chipped one,\" she said kindly.",
          "\"Could you make another one before the wedding next month?\""
        ],
        [
          "\"I can,\" said Aunt Bea.",
          "Then she winked at me.",
          "\"And I could use a helper at the wheel.\""
        ],
        [
          "The next Saturday, I sat beside Aunt Bea while the wet clay spun between her hands.",
          "Before the clay dried, I pressed my thumbprint into the bottom of the new pitcher.",
          "It was a small mark, but it would always remind me of the day I told the truth."
        ]
      ],
      lines: null
    },
    {
      id: "p2",
      title: "Why Leaves Change Color",
      byline: "",
      genre: "Informational text",
      lexile: "about 680L (estimate)",
      paragraphs: [
        [
          "In the fall, many trees in Georgia put on a colorful show.",
          "Leaves that were green all summer turn yellow, orange, red, and even purple.",
          "Then, one by one, they flutter to the ground.",
          "Why does this happen?",
          "The answer begins with the way leaves make food."
        ],
        ["## Little Food Makers"],
        [
          "Leaves have an important job.",
          "During spring and summer, they use sunlight, water, and air to make food for the tree.",
          "A green material inside each leaf, called chlorophyll, helps them do this job.",
          "Chlorophyll is also what makes leaves look green."
        ],
        [
          "Leaves have yellow and orange colors inside them, too.",
          "In summer, though, there is so much green chlorophyll that it covers up these other colors.",
          "They are there the whole time, but they stay hidden."
        ],
        ["## Shorter Days, Brighter Colors"],
        [
          "In the fall, the days keep getting shorter.",
          "With less sunlight each day, a tree slows down its food making.",
          "The chlorophyll in its leaves breaks down, and the tree stops making more.",
          "As the green fades away, the yellow and orange colors that were hidden can finally be seen."
        ],
        [
          "Red and purple colors are different.",
          "They are not hiding in the leaf all summer.",
          "Instead, the leaves of some trees, such as many maples and sweetgums, make these colors in the fall.",
          "Scientists have found that sunny fall days and cool nights help make the reds especially bright."
        ],
        ["## Letting Go"],
        [
          "Before winter, many trees, such as maples and sweetgums, get ready to drop their leaves.",
          "A thin layer of cells grows where each leaf's stem joins the branch.",
          "This layer slowly cuts the leaf off from the tree.",
          "Soon, even a gentle breeze can knock the leaf loose."
        ],
        [
          "Losing its leaves helps the tree save water during the cold winter months.",
          "The fallen leaves turn brown and slowly break down on the ground.",
          "As they do, they add nutrients, or helpful materials, to the soil.",
          "New plants can use these nutrients to grow in the spring."
        ],
        [
          "So the next time you see a bright red or golden leaf, remember that the tree is getting ready for winter."
        ]
      ],
      lines: null
    },
    {
      id: "p3",
      draft: true,
      title: "Hunters of the Night",
      byline: "Ava's first draft",
      genre: "Student draft (informational)",
      lexile: "about 560L (estimate)",
      paragraphs: [
        [
          "(1) Owls are birds with special body parts that help them hunt in the dark.",
          "(2) Many owls sleep during the day and look for food at night."
        ],
        [
          "(3) An owl's large eyes help it see when there is very little light.",
          "(4) An owl can also turn its head much farther than a person can, so it can look around without moving its body.",
          "(5) My little brother is afraid of the dark."
        ],
        [
          "(6) Owls have excellent hearing.",
          "(7) Some owls can find a mouse hiding under leaves or snow just by listening."
        ],
        [
          "(8) An owl's wings have special soft feathers, so it can fly almost without a sound."
        ],
        [
          "(9) That is what I know."
        ]
      ],
      lines: null
    }
  ],
  items: [
    /* ---------------- p1: "The Blue Pitcher" ---------------- */
    {
      id: "PT-1-1",
      type: "mc",
      points: 1,
      passages: ["p1"],
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "Read this sentence from paragraph 6. What does hesitated mean?",
      stem: "\"I hesitated, holding the pitcher in the air.\"",
      choices: [
        { text: "stopped for a moment because he was not sure what to do", correct: true },
        { text: "moved quickly so he could finish what he was doing" },
        { text: "called out loudly so that someone would come and help" },
        { text: "held something up high so that other people could see it" }
      ],
      clue: "Use context clues. Read the sentences after this one. What goes on in Malik's mind before he puts the pitcher down?",
      why: "Hesitated means \"stopped for a moment because he was not sure what to do.\" Right after this sentence, Malik thinks about whether to tell Aunt Bea, and only then does he set the pitcher down. He is not rushing, and he does not call out. He is holding the pitcher in the air, but that tells where the pitcher is, not what hesitated means."
    },
    {
      id: "PT-1-2",
      type: "mc",
      points: 1,
      passages: ["p1"],
      std: ["3.T.T.1.a", "3.T.T.1.b"],
      dok: 3,
      prompt: "Read this sentence from paragraph 4. Why does the author include this sentence in the story?",
      stem: "\"I was in a hurry to finish so I could watch Aunt Bea at the wheel.\"",
      choices: [
        { text: "It helps explain why Malik bumps the pitcher by accident.", correct: true },
        { text: "It shows that Malik does not like his job in the shop." },
        { text: "It tells why Aunt Bea needs Malik's help at the wheel." },
        { text: "It shows that Malik has used the wheel many times." }
      ],
      clue: "Authors add details for a reason. Read the sentences around this one. What does this detail help the reader understand?",
      why: "The answer is \"It helps explain why Malik bumps the pitcher by accident.\" Malik is rushing, and in the next sentences he swings the duster and its handle bumps the pitcher. He does like his job: paragraph 1 says he was proud to be trusted with it. Nothing in the story says he has used the wheel before, and Aunt Bea asks for a helper only at the end."
    },
    {
      id: "PT-1-3",
      type: "hottext",
      points: 1,
      passages: ["p1"],
      std: ["3.T.T.1.c", "3.T.RA.2.a"],
      dok: 2,
      prompt: "Select the sentence that best shows that Malik feels guilty after he hides the chip.",
      source: "p1",
      targets: ["p1:5:2", "p1:6:5", "p1:7:1", "p1:7:2", "p1:7:3", "p1:8:1", "p1:8:2"],
      answer: ["p1:7:3"],
      pick: 1,
      clue: "Look for a sentence that shows what is going on inside Malik, not only what he or someone else does.",
      why: "The answer is \"But every time I glanced at the top shelf, a heavy feeling sat in my stomach, as if I had swallowed a stone.\" Every time Malik looks at the hidden chip, he feels sick inside, which shows he feels guilty about hiding it. \"My heart was pounding like a drum\" shows that Malik is scared, but that happens when he first catches the pitcher, before he hides the chip. The other sentences tell only what happens, like setting down the pitcher, sweeping, whistling, or Mrs. Greene walking in."
    },
    {
      id: "PT-1-4",
      type: "mc",
      points: 1,
      passages: ["p1"],
      std: ["3.T.SS.2.a"],
      dok: 2,
      prompt: "Read this sentence from paragraph 9. What does this sentence mean?",
      stem: "\"The words got stuck in my throat.\"",
      choices: [
        { text: "Malik found it hard to make himself speak.", correct: true },
        { text: "Malik had a sore throat and could not talk." },
        { text: "Malik could not remember what had happened." },
        { text: "Malik spoke too softly for anyone to hear." }
      ],
      clue: "This is an idiom: the words do not mean exactly what they say. Think about what Malik is about to admit, and read what he does next.",
      why: "The answer is \"Malik found it hard to make himself speak.\" Words cannot really get stuck in a throat. The idiom shows that Malik is scared to tell the truth, so he has to take a deep breath before he can say \"Wait.\" He is not sick, he remembers exactly what happened, and the others do hear him."
    },
    {
      id: "PT-1-5",
      type: "order",
      points: 2,
      passages: ["p1"],
      std: ["3.T.T.1.b"],
      dok: 2,
      prompt: "Put these events from the story in the order they happen.",
      steps: [
        "Aunt Bea asks Malik to be extra careful around the blue pitcher.",
        "The handle of the feather duster bumps the pitcher.",
        "Malik sets the pitcher on the shelf with the chip facing the wall.",
        "Malik tells Aunt Bea and Mrs. Greene what happened.",
        "Malik presses his thumbprint into the bottom of a new pitcher."
      ],
      clue: "Find the problem in the story first. What has to happen before the problem, and what happens because of it?",
      why: "First, Aunt Bea asks Malik to be careful with the pitcher. Next, the duster handle bumps it and chips it. Then Malik hides the chip by turning it toward the wall. At noon, Malik tells Aunt Bea and Mrs. Greene what happened. Last, the next Saturday, he presses his thumbprint into the new pitcher before the clay dries."
    },
    {
      id: "PT-1-6",
      type: "mc",
      points: 1,
      passages: ["p1"],
      std: ["3.T.C.2.a", "3.T.T.1.c"],
      dok: 3,
      prompt: "In paragraph 6, Malik tells the reader what he is thinking. How is Malik's view of the chip different from Aunt Bea's view later in the story?",
      choices: [
        { text: "Malik thinks the chip is a big problem he must hide, but Aunt Bea thinks it matters less than the truth.", correct: true },
        { text: "Malik thinks the chip is too small to matter at all, but Aunt Bea thinks the chip ruins the pitcher." },
        { text: "Malik hopes he can keep helping in the shop, but Aunt Bea decides that he cannot help her anymore." },
        { text: "Malik thinks Mrs. Greene will be angry about the chip, but Aunt Bea knows she will not care." }
      ],
      clue: "Find what Malik is afraid of in paragraph 6. Then read what Aunt Bea says and does after Malik tells her what happened. Compare the two.",
      why: "The answer is \"Malik thinks the chip is a big problem he must hide, but Aunt Bea thinks it matters less than the truth.\" In paragraph 6, Malik worries that Aunt Bea will never let him help in the shop again, so he hides the chip. In paragraph 11, Aunt Bea thanks him for telling her and says, \"A chipped pitcher is a small problem, but broken trust is a much bigger one.\" Malik does think the chip matters, or he would not hide it, and Aunt Bea calls the chip a small problem. Aunt Bea does not stop Malik from helping: she asks him to help at the wheel. Malik never says that Mrs. Greene will be angry."
    },
    {
      id: "PT-1-7",
      type: "ebsr",
      points: 2,
      passages: ["p1"],
      std: ["3.T.T.1.c", "3.T.RA.2.a"],
      dok: 3,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "Part A: What is the central message of the story?",
        choices: [
          { text: "Telling the truth is important, even when it is hard to do.", correct: true },
          { text: "Finishing chores quickly leaves more time for fun things." },
          { text: "Small mistakes do not matter if nobody can see them." },
          { text: "Working hard is the best way to earn a special reward." }
        ]
      },
      partB: {
        prompt: "Part B: Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"A chipped pitcher is a small problem, but broken trust is a much bigger one.\"", correct: true },
          { text: "I was in a hurry to finish so I could watch Aunt Bea at the wheel." },
          { text: "\"Could you make another one before the wedding next month?\"" },
          { text: "Before the clay dried, I pressed my thumbprint into the bottom of the new pitcher." }
        ]
      },
      clue: "The central message is the big lesson of the whole story. What does the main character learn by the end?",
      why: "Part A: The central message is \"Telling the truth is important, even when it is hard to do.\" Malik is scared, but he tells the truth, and Aunt Bea thanks him. Part B: Aunt Bea says, \"A chipped pitcher is a small problem, but broken trust is a much bigger one.\" That means honesty matters more than the pitcher. Rushing is what caused the accident, so the story does not teach that hurrying is good. Malik hides the chip so nobody will see it, but he feels terrible until he tells the truth, so the story does not teach that hidden mistakes do not matter. Malik does not earn a reward by working hard, and the thumbprint is one event, not the lesson of the whole story."
    },

    /* ---------------- p2: "Why Leaves Change Color" ---------------- */
    {
      id: "PT-1-8",
      type: "mc",
      points: 1,
      passages: ["p2"],
      std: ["3.T.T.2.a"],
      dok: 2,
      prompt: "Which sentence best states the main idea of the whole article?",
      choices: [
        { text: "Leaves change color and fall because of changes inside them as trees get ready for winter.", correct: true },
        { text: "Chlorophyll is a green material inside leaves that helps them make food for the tree." },
        { text: "Sunny fall days and cool nights help make the red colors in some leaves very bright." },
        { text: "Fallen leaves break down on the ground and add nutrients that new plants can use." }
      ],
      clue: "A main idea is about the WHOLE article, not just one section. Read the three headings. What big idea ties them all together?",
      why: "The answer is \"Leaves change color and fall because of changes inside them as trees get ready for winter.\" Every section helps explain this: how leaves make food, why colors appear in fall, and how the tree lets its leaves go. The last paragraph says the tree is getting ready for winter. The other choices are true details, but each one comes from only one part of the article."
    },
    {
      id: "PT-1-9",
      type: "dropdown",
      points: 1,
      passages: ["p2"],
      std: ["3.L.V.2.a"],
      dok: 1,
      prompt: "Read this sentence from paragraph 1. Then choose the answer that completes the sentence below it.",
      stem: "\"In the fall, many trees in Georgia put on a colorful show.\"",
      text: "The suffix -ful tells you that colorful means {0}.",
      slots: [
        { options: ["without any color", "full of color", "having only one color", "losing its color"], answer: 1 }
      ],
      clue: "Cover up the suffix and read the base word. Then think of other words that end in -ful, like hopeful or cheerful. What does -ful add to a word?",
      why: "Colorful means \"full of color.\" The suffix -ful means full of, the way cheerful means full of cheer. The next sentence lists many colors, so the show is full of color. Without any color would need the suffix -less, as in colorless."
    },
    {
      id: "PT-1-10",
      type: "ms",
      points: 2,
      pick: 2,
      passages: ["p2"],
      std: ["3.T.T.2.a", "3.T.RA.2.a"],
      dok: 3,
      prompt: "Which TWO details from the article together explain why leaves turn yellow and orange in the fall? Choose two answers.",
      choices: [
        { text: "Yellow and orange colors are inside the leaves the whole summer.", correct: true },
        { text: "In the fall, the green chlorophyll breaks down and is not replaced.", correct: true },
        { text: "The leaves of some trees make new red and purple colors in the fall." },
        { text: "Red and purple colors are not hiding in the leaf all summer." },
        { text: "A thin layer of cells grows where each leaf's stem joins the branch." },
        { text: "Fallen leaves add helpful materials to the soil as they break down." }
      ],
      clue: "Find the part of the article that tells why the yellow and orange appear. Which details work together to explain it?",
      why: "The answers are \"Yellow and orange colors are inside the leaves the whole summer.\" and \"In the fall, the green chlorophyll breaks down and is not replaced.\" Paragraph 3 says the yellow and orange are there all along but hidden by the green. Paragraph 4 says the green breaks down in fall, so the hidden colors can be seen. The details about red and purple colors do not explain yellow and orange. The layer of cells and the fallen leaves are about how leaves drop and what happens after."
    },
    {
      id: "PT-1-11",
      type: "mc",
      points: 1,
      passages: ["p2"],
      std: ["3.T.SS.1.a"],
      dok: 2,
      prompt: "How is the section \"Shorter Days, Brighter Colors\" mostly organized?",
      choices: [
        { text: "It explains what happens in leaves because the days get shorter in the fall.", correct: true },
        { text: "It tells the events of one tree's whole life in time order, from a seed to a tall tree." },
        { text: "It asks a question about fall leaves and then gives several possible answers." },
        { text: "It describes the parts of a leaf in order, from the stem to the tip." }
      ],
      clue: "Read the first sentence of the section. How are the other sentences connected to it?",
      why: "The answer is \"It explains what happens in leaves because the days get shorter in the fall.\" The section is organized by cause and effect: shorter days mean less sunlight, so the tree slows down its food making, the chlorophyll breaks down, and then the hidden colors show. The section tells about leaves in the fall only, not a tree's whole life from a seed. The question \"Why does this happen?\" is in paragraph 1, not in this section. The section never names the parts of a leaf from stem to tip."
    },
    {
      id: "PT-1-12",
      type: "mc",
      points: 1,
      passages: ["p2"],
      std: ["3.T.C.1.b"],
      dok: 2,
      prompt: "Read the heading \"Letting Go\" and the section under it. How does this heading help the reader?",
      choices: [
        { text: "It tells the reader that the section is about how a tree drops its leaves.", correct: true },
        { text: "It tells the reader that the section is about how leaves lose their green color." },
        { text: "It tells the reader that the section is about how a tree stops making food." },
        { text: "It tells the reader that the section is about why people rake up fallen leaves." }
      ],
      clue: "A heading names the big idea of the section under it. Read the whole section. What is it mostly about?",
      why: "The answer is \"It tells the reader that the section is about how a tree drops its leaves.\" The section under \"Letting Go\" tells how a thin layer of cells cuts each leaf off, how a breeze knocks it loose, and why losing leaves helps the tree. Letting go means the tree lets its leaves fall.How leaves lose their green color and how a tree stops making food are explained in the section before, \"Shorter Days, Brighter Colors.\" The article never talks about people raking leaves."
    },
    {
      id: "PT-1-13",
      type: "match",
      points: 2,
      passages: ["p2"],
      std: ["3.T.T.2.b"],
      dok: 2,
      prompt: "Read each cause from the article. Choose the effect that goes with it. Use each effect once.",
      cols: [
        "Hidden yellow and orange colors can be seen.",
        "The soil gets nutrients for new plants.",
        "The leaf looks green.",
        "A gentle breeze can knock the leaf loose."
      ],
      rows: [
        { text: "A leaf has a lot of green chlorophyll inside it.", answer: 2 },
        { text: "The green chlorophyll in a leaf breaks down.", answer: 0 },
        { text: "A thin layer of cells grows where the stem joins the branch.", answer: 3 },
        { text: "Fallen leaves slowly break down on the ground.", answer: 1 }
      ],
      clue: "A cause makes something happen. Find each cause in the article. Then read on to find what it makes happen.",
      why: "Chlorophyll is green, so a leaf full of it looks green. When the green chlorophyll breaks down, the hidden yellow and orange colors can be seen. The thin layer of cells cuts the leaf off from the tree, so a gentle breeze can knock it loose. Fallen leaves break down and add nutrients to the soil for new plants."
    },
    {
      id: "PT-1-14",
      type: "ebsr",
      points: 2,
      passages: ["p2"],
      std: ["3.T.T.2.b", "3.T.RA.2.a"],
      dok: 3,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "Part A: Imagine a fall with many cloudy days and very few sunny ones. Based on the article, what would most likely happen to the red leaves on a maple tree?",
        choices: [
          { text: "Their red color would likely be less bright than usual.", correct: true },
          { text: "They would likely stay green all through the winter." },
          { text: "Their red color would likely be brighter than usual." },
          { text: "They would likely fall off the tree before they change." }
        ]
      },
      partB: {
        prompt: "Part B: Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "Scientists have found that sunny fall days and cool nights help make the reds especially bright.", correct: true },
          { text: "During spring and summer, they use sunlight, water, and air to make food for the tree." },
          { text: "Instead, the leaves of some trees, such as many maples and sweetgums, make these colors in the fall." },
          { text: "The chlorophyll in its leaves breaks down, and the tree stops making more." }
        ]
      },
      clue: "Find the part of the article that tells what helps make red leaves bright. Then think: what would happen if that thing were missing?",
      why: "Part A: The answer is \"Their red color would likely be less bright than usual.\" Part B: The article says, \"Scientists have found that sunny fall days and cool nights help make the reds especially bright.\" If there are only a few sunny days, one thing that helps the reds is missing, so the reds would likely be duller. Fewer sunny days would not make the reds brighter, because sunny days are what help them. The article never says cloudy days keep leaves green or make them fall early."
    },

    /* ---------------- p3: revising, "Hunters of the Night" ---------------- */
    {
      id: "PT-1-15",
      type: "dropdown",
      points: 1,
      passages: ["p3"],
      std: ["3.T.SS.1.c"],
      dok: 2,
      prompt: "Ava wants to add a transition to the beginning of sentence 6 to link it to the paragraph before it. Choose the best transition.",
      text: "(6) {0} owls have excellent hearing.",
      slots: [
        { options: ["For example,", "Besides seeing well,", "Instead,", "As a result,"], answer: 1 }
      ],
      clue: "Think about what the sentences just before sentence 6 tell, and what sentence 6 starts to tell. Which words show that a new idea is being added?",
      why: "The best transition is \"Besides seeing well,\" because it connects the paragraph about owls' eyes to the new idea about owls' ears. For example would mean owls' hearing is an example of what paragraph 2 said, and it is not. Instead would mean hearing takes the place of seeing. As a result would mean owls hear well because of their eyes or how they turn their heads, and that is not true."
    },
    {
      id: "PT-1-16",
      type: "hottext",
      points: 1,
      passages: ["p3"],
      std: ["3.T.SS.1.d"],
      dok: 2,
      prompt: "Read sentences 1 through 8 of Ava's draft. One of these sentences does not belong because it is not about owls. Select that sentence.",
      source: "p3",
      targets: ["p3:1:1", "p3:1:2", "p3:2:1", "p3:2:2", "p3:2:3", "p3:3:1", "p3:3:2", "p3:4:1"],
      answer: ["p3:2:3"],
      pick: 1,
      clue: "Read sentence 1 to find what the whole draft is about. Then check each sentence from 1 to 8: does it tell about that topic?",
      why: "The answer is sentence 5, \"My little brother is afraid of the dark.\" Ava's draft is about the body parts that help owls hunt in the dark, and sentences 1 through 8 should all tell about owls. Sentence 5 uses the word dark, but it is about Ava's brother, not about owls, so it does not belong."
    },
    {
      id: "PT-1-17",
      type: "ms",
      points: 2,
      pick: 2,
      passages: ["p3"],
      std: ["3.T.T.2.d", "3.T.RA.1.b"],
      dok: 3,
      prompt: "Ava found these facts in two library books about owls. Which TWO facts best support sentence 6? Choose two answers.",
      choices: [
        { text: "Many owls have a ring of stiff feathers around the face that helps gather sounds toward their ears.", correct: true },
        { text: "In some owls, one ear opening is a little higher than the other, which helps the owl tell where a sound comes from.", correct: true },
        { text: "An owl's eyes are shaped like tubes and cannot move in their sockets, so the owl must turn its whole head to look to the side." },
        { text: "Owls often swallow small animals whole, and later they spit up the bones and fur in a small bundle called a pellet." },
        { text: "Some owls make their nests in holes inside old trees instead of building nests of their own." }
      ],
      clue: "First, read sentence 6 to find the idea that needs support. Then keep only the facts that are about that same body part.",
      why: "The answers are \"Many owls have a ring of stiff feathers around the face that helps gather sounds toward their ears.\" and \"In some owls, one ear opening is a little higher than the other, which helps the owl tell where a sound comes from.\" Sentence 6 says owls have excellent hearing, and both facts tell how owls hear so well. The fact about tube-shaped eyes would support paragraph 2 instead, because it is about seeing. The facts about pellets and nests are true, but they are not about hearing."
    },
    {
      id: "PT-1-18",
      type: "mc",
      points: 1,
      passages: ["p3"],
      std: ["3.T.T.2.d"],
      dok: 2,
      prompt: "Sentence 9 is a weak conclusion. Which sentence should replace sentence 9 to give the draft a strong conclusion?",
      choices: [
        { text: "Sharp eyes, sharp ears, and quiet wings help owls find food in the dark.", correct: true },
        { text: "Some owls even live in deserts and nest in holes in tall cactus plants." },
        { text: "First, owls have large eyes that help them see in very dim light." },
        { text: "I think owls are the most beautiful birds in the whole wide world." }
      ],
      clue: "A strong conclusion wraps up the main idea of the WHOLE draft. Reread sentence 1 and each paragraph, then choose the sentence that sums them up.",
      why: "The answer is \"Sharp eyes, sharp ears, and quiet wings help owls find food in the dark.\" It sums up all three body parts from the draft and connects back to sentence 1. The desert sentence adds a new fact, the First sentence starts the details over again, and the beautiful birds sentence gives an opinion that is not about hunting."
    },

    /* ---------------- Language (standalone) ---------------- */
    {
      id: "PT-1-19",
      type: "dropdown",
      points: 2,
      passages: [],
      std: ["3.L.GC.1:M:form-and-use-irregular-plural-nouns", "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"],
      dok: 1,
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Twelve {0} grazed in the meadow while {1} puppy barked at them from the gate.",
      slots: [
        { options: ["sheeps", "sheep", "sheep's", "sheepes"], answer: 1 },
        { options: ["Kendras", "Kendra's", "Kendras'", "Kendra"], answer: 1 }
      ],
      clue: "For the first blank, remember that some nouns name more than one in an unusual way. Say the sentence aloud with each choice. Which one sounds right after \"Twelve\"? For the second blank, ask: who owns the puppy, and how do we show that one person owns something?",
      why: "The first blank is \"sheep.\" Sheep is the same word for one or for more than one, so there is no -s or -es. The second blank is \"Kendra's.\" The puppy belongs to one person, Kendra, so we add an apostrophe and s. Kendras with no apostrophe means more than one Kendra. Kendras' would mean a puppy that belongs to more than one Kendra, and Kendra with no ending does not show that the puppy is hers."
    },
    {
      id: "PT-1-20",
      type: "mc",
      points: 1,
      passages: [],
      std: ["3.L.GC.1:R:capitalize-proper-nouns"],
      dok: 2,
      prompt: "Which sentence uses capital letters correctly?",
      choices: [
        { text: "My cousin Andre moved to Augusta in October.", correct: true },
        { text: "Our neighbor, mrs. Wilson, grows tall sunflowers." },
        { text: "Last summer, my family swam in lake Lanier." },
        { text: "The county fair starts on a friday this year." }
      ],
      clue: "Look for proper nouns: the names of people, titles like Mr. and Mrs., places, months, and days of the week. Each one needs a capital letter.",
      why: "The answer is \"My cousin Andre moved to Augusta in October.\" The name Andre, the city Augusta, and the month October are all capitalized. In the other sentences, Mrs. needs a capital M, Lake Lanier needs a capital L on Lake because it is part of the name, and Friday needs a capital F because it is a day of the week."
    },
    {
      id: "PT-1-21",
      type: "hottext",
      points: 1,
      passages: [],
      std: ["3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"],
      dok: 2,
      prompt: "Select the sentence that uses commas correctly.",
      options: [
        "Grandpa planted our oak tree on March 3 1961.",
        "My aunt mailed me a postcard from Athens Georgia.",
        "Our school art show will be on May 8, 2027.",
        "Our family moved to, Dalton, Georgia."
      ],
      answer: [2],
      pick: 1,
      clue: "In a date, a comma goes between the day and the year. In a place, a comma goes between the city and the state. Check where each comma is, and where one is missing.",
      why: "The answer is \"Our school art show will be on May 8, 2027.\" The comma is between the day and the year. The oak tree sentence needs a comma after 3, the postcard sentence needs a comma between Athens and Georgia, and the moving sentence has an extra comma after the word to."
    },
    {
      id: "PT-1-22",
      type: "dropdown",
      points: 1,
      passages: [],
      std: ["3.L.GC.2.c"],
      dok: 2,
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The stack of library books {0} on the corner of my desk.",
      slots: [
        { options: ["sit", "sits", "sitting"], answer: 1 }
      ],
      clue: "Find the subject: what is on the desk? Do not let the words right before the blank fool you. Is the subject one thing or more than one?",
      why: "The answer is \"sits.\" The subject is stack, which is one thing, so the verb is sits. The words of library books tell what is in the stack, but they are not the subject. Sitting cannot be the verb by itself."
    },
    {
      id: "PT-1-23",
      type: "mc",
      points: 1,
      passages: [],
      std: ["3.L.V.3.c"],
      dok: 2,
      prompt: "Read the sentence. Which word BEST completes the sentence?",
      stem: "\"After the long relay race, Leo ____ his whole bottle of water in just a few seconds.\"",
      choices: [
        { text: "gulped", correct: true },
        { text: "sipped" },
        { text: "drank" },
        { text: "tasted" }
      ],
      clue: "All of these words are about drinking, but they are not the same. Which one fits a whole bottle in just a few seconds?",
      why: "The answer is \"gulped.\" To gulp means to drink fast in big swallows, which matches a whole bottle in a few seconds. Sipped means to drink in tiny amounts, and tasted means to try only a little. Drank fits the sentence, but it does not show HOW Leo drank, so gulped is the best word."
    },
    {
      id: "PT-1-24",
      type: "mc",
      points: 1,
      passages: [],
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "Read the paragraph. The word trunk has more than one meaning. What does trunk mean in this paragraph?",
      stem: "When we got to the campground, Dad parked the car and opened the trunk. He lifted out our tent and sleeping bags. Then we set up camp under a tall pine tree.",
      choices: [
        { text: "the part of a car used for carrying things", correct: true },
        { text: "the thick main stem that holds up a tree" },
        { text: "the long nose of an elephant" },
        { text: "the middle part of a person's body" }
      ],
      clue: "Read the words right before and after trunk. What did Dad just do, and what did he take out of the trunk?",
      why: "The answer is \"the part of a car used for carrying things.\" Dad parked the car and opened the trunk, then lifted out the tent and sleeping bags, so the trunk is where things are carried in a car. The paragraph does mention a pine tree, but that comes later and is about where they camped."
    }
  ]
});
