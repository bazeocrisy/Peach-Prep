/* Lessons: 3.L.V.3 Vocabulary: word meanings and word relationships. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.L.V.3.a",
  title: "Context clues: using nearby words to find meaning",
  teach: {
    big: "When I meet a word I don't know, the words and sentences around it can tell me what it means.",
    points: [
      "A definition clue tells you the meaning right there. Look for words like \"which is,\" \"which means\" or \"or.\"",
      "An example clue gives examples of the word. Look for \"such as\" or \"like.\"",
      "A synonym clue is a nearby word that means the same thing. An antonym clue is a nearby word that means the opposite. Words like \"but\" and \"not\" often point to an antonym.",
      "Clues work for phrases too. A phrase is a small group of words, like \"make up your mind,\" that has its own meaning. Use the clues around it to figure out what the whole group of words means.",
      "Some words have more than one meaning, like bark or pitcher. Choose the meaning that fits. Then check: put your meaning in place of the word or phrase. If the sentence still makes sense, you are probably right.",
      "Pictures, captions, charts and graphs can show what a word means. Read the caption and the labels on a picture. On a chart or graph, read the title and the words on the side and bottom. Then check the meaning in the sentence."
    ],
    words: [
      { term: "context clue", means: "a hint in the words around a word that helps you know what it means" },
      { term: "synonym", means: "a word that means the same or almost the same as another word" },
      { term: "antonym", means: "a word that means the opposite of another word" },
      { term: "phrase", means: "a small group of words that go together" },
      { term: "multiple-meaning word", means: "a word that is spelled the same but has more than one meaning" }
    ],
    examples: [
      {
        label: "Example: a definition clue",
        lines: ["Our class garden needs compost, which is a mix of rotted leaves and food scraps that helps plants grow."],
        note: "The words \"which is\" are a signal. Everything after them tells you what compost means. This is a definition clue."
      },
      {
        label: "Example: an example clue",
        lines: ["Mom keeps utensils such as forks, spoons and ladles in the top kitchen drawer."],
        note: "The words \"such as\" are a signal that examples are coming. Forks, spoons and ladles are all tools for cooking and eating, so utensils are tools for cooking and eating."
      }
    ],
    tip: "On the test, a question may ask what a word means in a paragraph. Then Part B asks which sentence helps you know. The clue is often in the same sentence or the one right before or after it."
  },
  learn: [
    {
      show: ["Ben thought the old tree house was sturdy, but Mia said it was weak and might fall down."],
      ask: "What does sturdy mean?",
      steps: [
        "Look for a signal word. The word \"but\" tells you Mia thinks the opposite of Ben.",
        "Find what Mia says: the tree house is weak and might fall down.",
        "Sturdy must mean the opposite of weak. Try it: \"Ben thought the old tree house was strong and solid.\" It makes sense."
      ],
      answer: "Sturdy means strong and solid, not likely to break or fall."
    },
    {
      show: ["Our class kept a graph all spring. June had the most precipitation."],
      figure: { src: "assets/figures/v3a-rainfall-graph.svg", label: "Figure 1", caption: "Our class kept track of the rain.",
        alt: "Bar graph titled Rain in Our Garden. The side of the graph says inches of rain. The bars show March 4 inches, April 3 inches, May 2 inches and June 5 inches. June has the tallest bar." },
      ask: "What does precipitation mean? Use the graph.",
      steps: [
        "Read the title. It tells what the graph measures: Rain in Our Garden.",
        "Read the words on the side: inches of rain. Each bar shows how much rain came down in one month. June has the tallest bar, 5 inches.",
        "Check the sentence. It says June had the most precipitation, and the graph shows June had the most rain. So precipitation must mean rain, or other water that falls from the sky."
      ],
      answer: "Precipitation means rain, or other water like snow, that falls from the sky."
    },
    {
      show: ["At the picnic, Aunt Rosa poured cold lemonade from a glass pitcher into our cups."],
      ask: "Which meaning of pitcher is used here: a baseball player who throws the ball, or a container that holds and pours drinks?",
      steps: [
        "Pitcher is a multiple-meaning word. Name both meanings before you choose.",
        "Find the words around it: poured, lemonade, glass, cups.",
        "A baseball player cannot be made of glass or pour lemonade. Only one meaning fits."
      ],
      answer: "Here, pitcher means a container that holds and pours drinks."
    }
  ],
  parent: "When you read together, stop at a word your child does not know. Ask, \"What words nearby give us a hint?\" Then have your child try a meaning in place of the word to see if it makes sense. Pictures, charts and captions in books are clues too, so point to them when a word is new.",
  passages: [
    { id: "p1", title: "The Class Bake Sale", genre: "Literary text",
      paragraphs: [
        ["Every spring, Mr. Lee's third graders hold a bake sale to raise money for new library books."],
        ["This year, the class baked assorted treats, such as banana bread, oatmeal cookies and lemon bars.", "They set everything out on two long tables in the front hall."],
        ["At first, buyers were scarce.", "Only two people stopped by in the whole first hour.", "Leah sat at the table and sighed."],
        ["Then the lunch bell rang, and a crowd of hungry students rushed in.", "They devoured the cookies, gobbling up every last crumb in ten minutes."],
        ["After the sale, Mr. Lee counted the money.", "Then he helped the class write a budget, which is a plan for how to spend money.", "There was enough to buy twelve new books."],
        ["Leah grinned.", "\"Next year, let's bake twice as many cookies!\""]
      ] },
    { id: "p2", title: "A Trip to the Okefenokee Swamp", genre: "Informational text",
      paragraphs: [
        ["The Okefenokee Swamp is in the southeast corner of Georgia.", "A swamp is a kind of wetland, which is land that is covered by water for much of the year."],
        ["The water in the swamp looks dark brown, like a cup of tea.", "Leaves and other plant parts fall into the water and slowly break down.", "As they break down, they stain the water and change its color."],
        ["Many animals dwell in the swamp.", "They find food, build nests and raise their young there.", "Alligators, turtles, frogs and herons all make their homes in the Okefenokee."],
        ["Visitors can paddle canoes along the swamp's narrow waterways.", "Guides tell them to keep an eye out for alligators.", "Alligators often rest along the edges of the water, and they can be hard to see.", "In some spots, thick mats of plants float on top of the water.", "These mats look like land, but they are not firm.", "They are soft and can shake when something moves on them."],
        ["If you visit, be cautious.", "Stay in your boat, keep your hands out of the water and never feed the alligators."]
      ],
      figures: [
        { after: 3, src: "assets/figures/v3a-heron.svg", label: "Figure 1", caption: "A heron hunts for fish in the shallow water.",
          alt: "A drawing of a heron, a tall bird, standing in shallow water. Labels point to its long neck, its sharp beak and its long legs." }
      ] }
  ],
  practice: [
    { id: "SK-V3a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What does assorted mean in paragraph 2?",
      choices: [
        { text: "of many different kinds", correct: true },
        { text: "baked early in the day" },
        { text: "very sweet and sticky" },
        { text: "wrapped in paper bags" }
      ],
      clue: "Look for the words \"such as\" in the sentence. What do the examples after them tell you about the treats?",
      why: "The answer is \"of many different kinds.\" The words \"such as\" give examples: banana bread, oatmeal cookies and lemon bars. Those are all different kinds of treats, so assorted means of many different kinds." },
    { id: "SK-V3a-P2", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does scarce mean in paragraph 3?",
        choices: [
          { text: "very few; not many", correct: true },
          { text: "loud and rude" },
          { text: "tired and hungry" },
          { text: "far away" }
        ] },
      partB: { prompt: "Which sentence from the story BEST helps you know what scarce means?",
        choices: [
          { text: "\"Only two people stopped by in the whole first hour.\"", correct: true },
          { text: "\"They set everything out on two long tables in the front hall.\"" },
          { text: "\"Every spring, Mr. Lee's third graders hold a bake sale to raise money for new library books.\"" },
          { text: "\"Leah sat at the table and sighed.\"" }
        ] },
      clue: "Read the sentences around the word. Which one helps you picture what the first part of the sale was like?",
      why: "Part A: very few; not many. Part B: \"Only two people stopped by in the whole first hour.\" Only two buyers in a whole hour is very few, so scarce means very few. Leah's sigh shows she felt let down, but it does not tell you anything about how many buyers there were." },
    { id: "SK-V3a-P3", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 4. Choose the meaning of devoured.",
      text: "In paragraph 4, devoured means {0}.",
      slots: [
        { options: ["ate quickly and hungrily", "looked at carefully", "sold for a low price"], answer: 0 }
      ],
      clue: "Find another word or phrase in the same sentence that means almost the same thing. That is a synonym clue.",
      why: "The answer is \"ate quickly and hungrily.\" The same sentence says the students were gobbling up every last crumb in ten minutes. Gobbling up is a synonym clue for devoured." },
    { id: "SK-V3a-P4", type: "hottext", points: 1, dok: 1, passages: ["p1"],
      prompt: "Which sentence gives a definition clue that tells exactly what a word means? Choose the sentence in the story.",
      targets: ["p1:2:1", "p1:3:2", "p1:4:2", "p1:5:2"],
      answer: ["p1:5:2"], pick: 1,
      clue: "A definition clue often uses the signal words \"which is\" or \"which means.\" Look for them.",
      why: "The answer is \"Then he helped the class write a budget, which is a plan for how to spend money.\" The words \"which is\" lead right into the meaning of budget. The other sentences give an example clue, a sentence that is itself a clue for the word scarce, and a synonym clue." },
    { id: "SK-V3a-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each sentence to the kind of context clue it gives for the word in front of it.",
      cols: ["Definition clue", "Example clue", "Synonym clue", "Antonym clue"],
      rows: [
        { text: "arid: A cactus can grow in arid places, which are very dry places with little rain.", answer: 0 },
        { text: "legumes: Grandpa grows legumes, such as peas, beans and peanuts.", answer: 1 },
        { text: "drowsy: The puppy was drowsy. It was so sleepy it could hardly keep its eyes open.", answer: 2 },
        { text: "tidy: Sam's room was tidy, but his brother's room was a big mess.", answer: 3 }
      ],
      clue: "For each sentence, find the words that help you know the meaning. Do they tell the meaning, give examples, mean the same thing or mean the opposite?",
      why: "Arid has a definition clue (\"which are very dry places\"). Legumes has an example clue (\"such as peas, beans and peanuts\"). Drowsy has a synonym clue (sleepy). Tidy has an antonym clue (\"but ... a big mess\")." },
    { id: "SK-V3a-P6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Trunk has more than one meaning. Use the sentence and the picture. What does trunk mean here?",
      stem: ["Grandpa leaned the ladder against the trunk."],
      figure: { src: "assets/figures/v3a-tree-ladder.svg",
        alt: "A drawing of a ladder leaning against a tree. The top of the ladder touches the tree a little below its lowest branch. Labels point to a branch and the roots." },
      choices: [
        { text: "the thick main stem of a tree", correct: true },
        { text: "the back part of a car used for storage" },
        { text: "the long nose of an elephant" },
        { text: "a pair of shorts worn for swimming" }
      ],
      clue: "The sentence alone could fit more than one meaning. Look at the picture. What is the ladder leaning on? Which meaning matches that?",
      why: "The answer is \"the thick main stem of a tree.\" The sentence does not say what kind of trunk it is, but the picture does. The ladder leans on the thick wooden part of the tree, between the roots and the branches. That part is the trunk, and it holds the tree up. A car, an elephant and swim shorts are not in the picture." },
    { id: "SK-V3a-P7", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 2. Choose the meaning of the phrase set everything out.",
      text: "In paragraph 2, set everything out means {0}.",
      slots: [
        { options: ["left on a long trip", "put it where people could see it", "threw it all away"], answer: 1 }
      ],
      clue: "Read the whole sentence. Where did the treats go, and why would a bake sale need them there?",
      why: "The answer is \"put it where people could see it.\" The class put the treats on two long tables in the front hall so buyers could see them and pick some. Read together, the words set everything out mean to lay things out for people to see." }
  ],
  test: [
    { id: "SK-V3a-T8", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence and look at the graph. What does attendance mean?",
      stem: ["Attendance at the swamp's nature center was highest in spring."],
      figure: { src: "assets/figures/v3a-visitors-graph.svg",
        alt: "Bar graph titled People Who Came to the Nature Center. The words at the bottom say number of people. The bars show winter 20, spring 50, summer 40 and fall 30. Spring has the longest bar." },
      choices: [
        { text: "the number of people who come to a place", correct: true },
        { text: "the kind of weather a place has each season" },
        { text: "the price of a ticket to get into a place" },
        { text: "the number of animals that live in a place" }
      ],
      clue: "Read the title of the graph and the words at the bottom. What does the graph count?",
      why: "The answer is \"the number of people who come to a place.\" The title is People Who Came to the Nature Center, and the bottom says number of people. Spring has the longest bar, 50 people, and the sentence says attendance was highest in spring. So attendance is how many people come. The graph does not show weather, ticket prices or animals." },
    { id: "SK-V3a-T2", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does dwell mean in paragraph 3?",
        choices: [
          { text: "to live in a place", correct: true },
          { text: "to swim very fast" },
          { text: "to hide from danger" },
          { text: "to visit for a short time" }
        ] },
      partB: { prompt: "Which TWO sentences from the article BEST help you know what dwell means?", pick: 2,
        choices: [
          { text: "\"They find food, build nests and raise their young there.\"", correct: true },
          { text: "\"Alligators, turtles, frogs and herons all make their homes in the Okefenokee.\"", correct: true },
          { text: "\"Visitors can paddle canoes along the swamp's narrow waterways.\"" },
          { text: "\"The water in the swamp looks dark brown, like a cup of tea.\"" },
          { text: "\"Leaves and other plant parts fall into the water and slowly break down.\"" }
        ] },
      clue: "Read the sentences right after the word dwell. What do the animals do in the swamp, day after day?",
      why: "Part A: to live in a place. Part B: \"They find food, build nests and raise their young there.\" and \"Alligators, turtles, frogs and herons all make their homes in the Okefenokee.\" Animals that eat, nest, raise babies and make homes in a place live there." },
    { id: "SK-V3a-T7", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Paragraph 3 names herons, but the words do not tell what a heron is. Use Figure 1 to choose the meaning.",
      text: "In paragraph 3, a heron is {0}.",
      slots: [
        { options: ["a long fish that swims in dark water", "a tall bird that hunts in shallow water", "a plant that floats on top of the water"], answer: 1 }
      ],
      clue: "Look at the picture and read its labels and caption. What kind of living thing has those body parts?",
      why: "The answer is \"a tall bird that hunts in shallow water.\" Figure 1 shows a sharp beak, a long neck and two long legs standing in shallow water. Fish and plants do not have beaks or legs, so a heron is a tall bird. The caption tells what the bird does: it hunts for fish in the shallow water." },
    { id: "SK-V3a-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Pen has more than one meaning. What does pen mean in this sentence?",
      stem: ["The farmer opened the pen and let the pigs run out into the muddy field."],
      choices: [
        { text: "a small fenced area for animals", correct: true },
        { text: "a tool for writing with ink" },
        { text: "a big barn for storing hay" },
        { text: "a gate that leads into a yard" }
      ],
      clue: "What came out of the pen when the farmer opened it? Think of a meaning of pen that could hold them.",
      why: "The answer is \"a small fenced area for animals.\" The farmer opened the pen and the pigs ran out, so the pen held the pigs. A writing tool cannot hold pigs, and a barn or a gate is not a meaning of pen." },
    { id: "SK-V3a-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What does firm mean in paragraph 4?",
      choices: [
        { text: "solid and hard to push down", correct: true },
        { text: "wet and full of mud" },
        { text: "cold and dark" },
        { text: "flat and very wide" }
      ],
      clue: "Look for an antonym clue. The next sentence tells what the mats are like instead.",
      why: "The answer is \"solid and hard to push down.\" The mats are not firm. They are soft and can shake. Firm means the opposite of soft and shaky, so it means solid and hard to push down." },
    { id: "SK-V3a-T6", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What does the phrase keep an eye out for mean in paragraph 4?",
      choices: [
        { text: "watch carefully for", correct: true },
        { text: "stay far away from" },
        { text: "take a photo of" },
        { text: "listen for the sound of" }
      ],
      clue: "Read the sentence after the phrase. Why would guides warn visitors about animals that are hard to see? What would visitors need to do?",
      why: "The answer is \"watch carefully for.\" The next sentence says alligators rest along the edges of the water and can be hard to see. Something hard to see is something you must look for carefully, and the phrase uses the word eye. Staying away from alligators is smart, but it is not what the phrase means." }
  ]
});

PP.addLesson({
  code: "3.L.V.3.b",
  title: "Homophones, homographs, synonyms and antonyms",
  teach: {
    big: "Some words sound the same, some are spelled the same, and some mean the same or the opposite. Knowing how words are related helps me understand them.",
    points: [
      "Homophones sound the same but have different spellings and meanings, like pear (a fruit) and pair (two of something).",
      "Homographs are spelled the same but have different meanings. Some sound different too, like tear (a drop from your eye) and tear (to rip).",
      "Synonyms are words that mean the same or almost the same, like big and large.",
      "Antonyms are words that mean the opposite, like empty and full.",
      "If you don't know a word, look nearby for a synonym or an antonym. It can tell you what the word means."
    ],
    words: [
      { term: "homophone", means: "a word that sounds like another word but is spelled differently and means something different" },
      { term: "homograph", means: "a word that is spelled like another word but means something different" },
      { term: "synonym", means: "a word that means the same or almost the same as another word" },
      { term: "antonym", means: "a word that means the opposite of another word" }
    ],
    examples: [
      { label: "Homophones", lines: ["The knight rode his horse all night."], note: "Knight (a soldier on a horse long ago) and night (the dark part of the day) sound the same but are spelled differently." },
      { label: "Homographs", lines: ["Ty tied a bow on the gift. After the play, he took a bow."], note: "The first bow rhymes with go and means a knot of ribbon. The second bow rhymes with cow and means to bend at the waist. Same spelling, different meanings." }
    ],
    tip: "On the test, you may be asked which word means the same as or the opposite of a word in a passage, or which spelling of a sound-alike word fits a sentence."
  },
  learn: [
    {
      show: ["Lila ate a ripe ____ for her snack.", "Which word fits: pair or pear?"],
      ask: "Which homophone belongs in the sentence?",
      steps: [
        "Both words sound the same, so you have to think about meaning.",
        "Pair means two things that go together, like a pair of socks. Pear is a fruit.",
        "The sentence says Lila ate it for a snack and it was ripe. You eat fruit, not socks."
      ],
      answer: "Pear belongs in the sentence: \"Lila ate a ripe pear for her snack.\""
    },
    {
      show: ["Dad will record the game so we can watch it later.", "Mia set a new school record in the long jump."],
      ask: "Record is a homograph. How is it different in the two sentences?",
      steps: [
        "Notice that the spelling is the same in both sentences.",
        "Read the words around the first one: \"Dad will record.\" It is an action. It means to save sounds or pictures to watch later.",
        "Read the words around the second one: \"set a new school record.\" It is a thing. It means the best that anyone has done.",
        "Say both out loud. The first is re-CORD and the second is REC-ord, so they even sound different."
      ],
      answer: "In the first sentence, record means to save something to watch later. In the second, it means the best ever done."
    },
    {
      show: ["The first puzzle was simple, but the second puzzle was difficult."],
      ask: "Which word in the sentence is an antonym of simple?",
      steps: [
        "An antonym means the opposite.",
        "The word \"but\" shows that the two puzzles are not alike.",
        "Find the word that tells about the second puzzle. Check it: simple means easy, and difficult means hard."
      ],
      answer: "Difficult is the antonym of simple."
    }
  ],
  parent: "Play a quick word game in the car or at dinner: say a word and have your child give a synonym and an antonym (big: large, small). For homophones, say a word like \"sea\" and ask your child to spell both ways and use each in a sentence.",
  passages: [
    { id: "p1", title: "Kofi's Big Catch", genre: "Literary text",
      paragraphs: [
        ["Early on Saturday, Kofi and his grandpa carried their fishing poles down to the lake.", "The water was calm and still, without a single ripple."],
        ["Grandpa showed Kofi how to tie a hook onto the line.", "\"Make the knot tight,\" he said.", "\"A loose knot will let the fish get away.\""],
        ["They waited and waited, but nothing bit.", "At last, Kofi wound the line back onto the reel to try a new spot."],
        ["Suddenly, the line jerked.", "Kofi pulled hard, and a fish flipped out of the water.", "Its shiny scales flashed in the sun."],
        ["\"What a huge fish!\" Kofi shouted.", "\"It is enormous!\""],
        ["Grandpa snapped a picture.", "Then Kofi gently let the fish slip back into the lake."]
      ] },
    { id: "p2", title: "Nadia's Volcano", genre: "Literary text",
      paragraphs: [
        ["On the morning of the science fair, Nadia felt nervous.", "Her hands were shaky, and her stomach felt full of butterflies."],
        ["Her project was a model volcano made of clay.", "When vinegar is poured onto baking soda inside, foam bubbles up and spills over the top."],
        ["Nadia set the volcano on the table and took a deep breath.", "Then she poured in the vinegar.", "Nothing happened!"],
        ["Her friend Grace peeked inside.", "\"I think you forgot the baking soda,\" Grace whispered.", "Nadia quickly added two big spoonfuls.", "This time, foam rushed up and spilled down the sides."],
        ["The crowd clapped and cheered.", "By the end of the day, Nadia was not nervous anymore, and she felt calm and proud."]
      ] }
  ],
  practice: [
    { id: "SK-V3b-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the homophone that correctly completes the sentence.",
      text: "We need {0} more chairs so everyone can sit down.",
      slots: [
        { options: ["to", "too", "two"], answer: 2 }
      ],
      clue: "All three words sound the same. Read the sentence. Is the missing word telling where, telling \"also,\" or telling how many chairs? Then match that to a spelling.",
      why: "The answer is two. Two is the number 2, and the sentence tells how many more chairs are needed. To shows direction (go to school), and too means also or more than enough." },
    { id: "SK-V3b-P2", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does enormous mean in paragraph 5?",
        choices: [
          { text: "very big", correct: true },
          { text: "very fast" },
          { text: "very shiny" },
          { text: "very wet" }
        ] },
      partB: { prompt: "Which sentence from the story BEST helps you know what enormous means?",
        choices: [
          { text: "\"'What a huge fish!' Kofi shouted.\"", correct: true },
          { text: "\"Its shiny scales flashed in the sun.\"" },
          { text: "\"Suddenly, the line jerked.\"" },
          { text: "\"Grandpa snapped a picture.\"" }
        ] },
      clue: "Look at the words near enormous. Is there a word that means almost the same thing?",
      why: "Part A: very big. Part B: \"What a huge fish!\" Kofi shouted. Huge is a synonym of enormous. Both words mean very big." },
    { id: "SK-V3b-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Scales is a homograph. What does scales mean in paragraph 4?",
      choices: [
        { text: "small, thin plates that cover a fish", correct: true },
        { text: "tools used to find how heavy things are" },
        { text: "climbs up something steep, like a wall" },
        { text: "sets of music notes played up and down" }
      ],
      clue: "What has the scales in this sentence? Think about what would flash in the sun on that thing.",
      why: "The answer is \"small, thin plates that cover a fish.\" The sentence is about the fish that just flipped out of the water, and its shiny scales flash in the sun. That is the covering on a fish's body. All four meanings are spelled scales, so it is a homograph." },
    { id: "SK-V3b-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 3. Wound is a homograph. What does wound mean in this story?",
      choices: [
        { text: "wrapped around and around", correct: true },
        { text: "a cut or hurt on the body" },
        { text: "pulled hard and very fast" },
        { text: "tied in a tight knot" }
      ],
      clue: "Read the rest of the sentence. Where did Kofi put the line, and what does a reel do?",
      why: "The answer is \"wrapped around and around.\" Kofi wound the line back onto the reel. A reel holds fishing line by turning, so the line is wrapped around and around it. Here wound rhymes with sound. The word that means a cut on the body is spelled the same but sounds like \"woond.\"" },
    { id: "SK-V3b-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Are the two words in each pair synonyms or antonyms? Match each pair.",
      cols: ["Synonyms", "Antonyms"],
      rows: [
        { text: "calm / still", answer: 0 },
        { text: "tight / loose", answer: 1 },
        { text: "huge / enormous", answer: 0 },
        { text: "early / late", answer: 1 }
      ],
      clue: "For each pair, ask: Do these words mean the same thing, or the opposite?",
      why: "Calm and still both mean quiet and not moving, so they are synonyms. Huge and enormous both mean very big, so they are synonyms. Tight and loose are opposites, and so are early and late, so they are antonyms." },
    { id: "SK-V3b-P6", type: "ms", points: 2, dok: 1, passages: [],
      prompt: "Which TWO pairs of words are homophones?",
      pick: 2,
      choices: [
        { text: "knows / nose", correct: true },
        { text: "sea / see", correct: true },
        { text: "shell / shall" },
        { text: "cold / colt" },
        { text: "fast / quick" }
      ],
      clue: "Homophones sound exactly the same when you say them. Say each pair out loud slowly.",
      why: "The answers are knows / nose and sea / see. Each pair sounds exactly the same but has a different spelling and meaning. Shell and shall, and cold and colt, sound close but not the same. Fast and quick are synonyms, not homophones." }
  ],
  test: [
    { id: "SK-V3b-T1", type: "dropdown", points: 2, dok: 1, passages: [],
      prompt: "Choose the homophone that correctly completes each part of the sentence.",
      text: "Ava's red balloon got away, and the wind {0} it high into the {1} sky.",
      slots: [
        { options: ["blue", "blew", "blow"], answer: 1 },
        { options: ["blew", "blow", "blue"], answer: 2 }
      ],
      clue: "Blew and blue sound the same. One is an action the wind did. The other is a color.",
      why: "The answers are blew and blue. The wind blew the balloon, which is something the wind did in the past. The sky is blue, which is a color." },
    { id: "SK-V3b-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Tear is a homograph. In which sentence does tear mean \"a drop of water from your eye\"?",
      choices: [
        { text: "A tear rolled down Ben's cheek at the sad part.", correct: true },
        { text: "Be careful not to tear the page when you turn it." },
        { text: "Dad sewed up the tear in the knee of my jeans." },
        { text: "The puppy tried to tear the pillow into pieces." }
      ],
      clue: "Look for a sentence with clue words about eyes, faces or feeling sad.",
      why: "The answer is \"A tear rolled down Ben's cheek at the sad part.\" A drop of water rolls down your cheek when you feel sad. In the other sentences, tear means to rip or a rip, which sounds different." },
    { id: "SK-V3b-T3", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Which word from the story is an antonym of nervous?",
        choices: [
          { text: "calm", correct: true },
          { text: "proud" },
          { text: "shaky" },
          { text: "deep" }
        ] },
      partB: { prompt: "Which sentence from the story BEST helps you know the answer to Part A?",
        choices: [
          { text: "\"By the end of the day, Nadia was not nervous anymore, and she felt calm and proud.\"", correct: true },
          { text: "\"Her hands were shaky, and her stomach felt full of butterflies.\"" },
          { text: "\"Nadia set the volcano on the table and took a deep breath.\"" },
          { text: "\"The crowd clapped and cheered.\"" }
        ] },
      clue: "An antonym means the opposite. Find the part of the story where Nadia stops feeling nervous. What does she feel instead?",
      why: "Part A: calm. Part B: \"By the end of the day, Nadia was not nervous anymore, and she felt calm and proud.\" Nervous means worried and jumpy. Calm means quiet and not worried, which is the opposite. Proud is a different feeling, not the opposite of nervous." },
    { id: "SK-V3b-T4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes each sentence.",
      text: "A synonym of begin is {0}. An antonym of shiny is {1}.",
      slots: [
        { options: ["finish", "start", "stop"], answer: 1 },
        { options: ["bright", "glowing", "dull"], answer: 2 }
      ],
      clue: "A synonym means the same. An antonym means the opposite. Try each word in a sentence in place of begin or shiny.",
      why: "The answers are start and dull. Start means the same as begin, so it is a synonym. Dull means not shiny, so it is an antonym. Bright and glowing mean almost the same as shiny, and finish and stop are opposites of begin." },
    { id: "SK-V3b-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "One sentence uses the wrong homophone. Choose that sentence.",
      options: [
        "We ate a whole pizza after the game.",
        "The deer ran into the woods.",
        "I can hear the rain on the roof.",
        "Our team one the game on Friday."
      ],
      answer: [3], pick: 1,
      clue: "Read each sentence and check each sound-alike word. Does its spelling match its meaning in that sentence?",
      why: "The answer is \"Our team one the game on Friday.\" It should say won, which means came out ahead in a game. One is the number 1. Whole, deer and hear are all spelled correctly for their meanings." }
  ]
});

PP.addLesson({
  code: "3.L.V.3.c",
  title: "Shades of meaning: words that are close but not the same",
  teach: {
    big: "Some words mean almost the same thing, but one is a little stronger, bigger or faster than another. I pick the one that fits just right.",
    points: [
      "Close words can be different amounts of the same thing. Cool, warm, hot and boiling all tell about temperature, but each is a different amount of heat.",
      "You can line up close words like steps on a ladder, from weakest to strongest: tap, knock, pound.",
      "Verbs can show how an action is done. To stroll is to walk slowly and calmly. To march is to walk with strong, even steps, like in a parade.",
      "Adjectives can show how much. Glad and happy both mean pleased. Thrilled is much stronger.",
      "Look for clues in the sentence that tell how much, how fast or how strong. Then choose the word that matches."
    ],
    words: [
      { term: "shades of meaning", means: "small differences between words that mean almost the same thing" }
    ],
    example: {
      label: "Example",
      lines: ["cool → warm → hot → boiling"],
      note: "All four words tell about temperature. Each one is hotter than the one before it. Bath water should be warm. Water for cooking noodles is boiling."
    },
    tip: "On the test, you may put words in order from weakest to strongest, or choose the word that best fits a sentence. Look for clue words that tell how much or how fast."
  },
  learn: [
    {
      show: ["gobble   nibble   eat"],
      ask: "Put these words in order from the smallest, slowest way of eating to the biggest, fastest way.",
      steps: [
        "All three words mean to eat. Now think about how each one is done.",
        "To nibble is to take tiny bites. That is the smallest and slowest.",
        "Eat is the plain, middle word. To gobble is to eat fast in big bites, so it goes last."
      ],
      answer: "nibble, eat, gobble"
    },
    {
      show: ["Leo was ____ when he won first prize in the whole state art contest.", "glad   happy   thrilled"],
      ask: "Which word fits best?",
      steps: [
        "All three words mean pleased. Glad and happy are about the same. Thrilled is much stronger.",
        "Look for clues about how big the moment is: first prize, in the whole state.",
        "Winning in the whole state is a huge deal, so choose the strongest word."
      ],
      answer: "Thrilled fits best: \"Leo was thrilled when he won first prize in the whole state art contest.\""
    },
    {
      show: ["The band ____ down Main Street in the parade, stepping to the beat of the drum.", "strolled   marched   wandered"],
      ask: "Which word fits best?",
      steps: [
        "All three words describe walking. Think about how each kind of walk looks.",
        "Strolled is a slow, relaxed walk. Wandered is walking with no plan of where to go.",
        "The clues \"parade\" and \"stepping to the beat of the drum\" show strong, even steps."
      ],
      answer: "Marched fits best: \"The band marched down Main Street in the parade, stepping to the beat of the drum.\""
    }
  ],
  parent: "Make word ladders together: pick a plain word like cold or walk and line up three or four close words from weakest to strongest (cool, cold, freezing). During cooking or a walk, ask your child which word fits exactly right.",
  passages: [
    { id: "p1", title: "Up Stone Mountain", genre: "Literary text",
      paragraphs: [
        ["Dev and his mom started up the trail at Stone Mountain early on a fall morning.", "The air was chilly, so Dev zipped up his jacket."],
        ["At first, they strolled along the path and looked at the trees.", "The leaves were turning red and gold."],
        ["Soon the trail got steep.", "Dev's legs felt heavy, and he trudged up the rocky slope one slow step at a time."],
        ["Near the top, the wind picked up.", "Now the air felt freezing, and Dev pulled his hat down over his ears."],
        ["When they finally reached the top, Dev forgot all about his tired legs.", "Far away, he could see the tall buildings of Atlanta.", "He was not just happy.", "He was overjoyed."],
        ["On the way down, Dev raced ahead, and Mom called for him to slow down."]
      ] }
  ],
  practice: [
    { id: "SK-V3c-P1", type: "order", points: 2, dok: 2, passages: [],
      prompt: "These words all tell how cold something is. Put them in order from LEAST cold to MOST cold.",
      steps: ["cool", "cold", "freezing"],
      orderNote: "Tap the words in order, from least cold to most cold. Tap a placed word to take it back.",
      clue: "Picture a glass of water getting colder and colder. Which word comes first, and which comes last?",
      why: "The order is cool, cold, freezing. Cool is a little cold, like shade on a summer day. Cold is more. Freezing is the coldest, cold enough for water to turn to ice." },
    { id: "SK-V3c-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "In paragraph 3, the author says Dev trudged up the slope. What does trudged show about how Dev walked?",
      choices: [
        { text: "He walked slowly, as if his legs were tired.", correct: true },
        { text: "He walked quickly and happily up the hill." },
        { text: "He walked with even steps to a drum beat." },
        { text: "He walked quietly on the tips of his toes." }
      ],
      clue: "Look at the other words in the same sentence. What do they tell you about how Dev felt and how fast he moved?",
      why: "The answer is \"He walked slowly, as if his legs were tired.\" The sentence says Dev's legs felt heavy and he went one slow step at a time. To trudge is to walk slowly with heavy, tired steps." },
    { id: "SK-V3c-P3", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why does the author use the word overjoyed in paragraph 5?",
        choices: [
          { text: "to show Dev's feeling was much stronger than happy", correct: true },
          { text: "to show Dev was only a little bit happy at the top" },
          { text: "to show Dev was tired and ready to go back home" },
          { text: "to show Dev was surprised by the color of the trees" }
        ] },
      partB: { prompt: "Which sentence from the story BEST supports the answer to Part A?",
        choices: [
          { text: "\"He was not just happy.\"", correct: true },
          { text: "\"Soon the trail got steep.\"" },
          { text: "\"The leaves were turning red and gold.\"" },
          { text: "\"The air was chilly, so Dev zipped up his jacket.\"" }
        ] },
      clue: "Find the place where the author puts two words side by side. What does that tell you about Dev?",
      why: "Part A: to show Dev's feeling was much stronger than happy. Part B: \"He was not just happy.\" The author says Dev was not just happy, then picks overjoyed, a stronger word that means very, very happy." },
    { id: "SK-V3c-P4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the word that best completes each sentence.",
      text: "The bath water was too {0}, so Mia added just a little cold water. Now the water is {1}, just right for a bath.",
      slots: [
        { options: ["cool", "hot", "chilly"], answer: 1 },
        { options: ["cool", "warm", "hot"], answer: 1 }
      ],
      clue: "Mia added cold water to fix the first problem. What was wrong? Then pick the word for water that is comfortable to sit in.",
      why: "The answers are hot and warm. Mia added cold water because the water was too hot. A little cold water made it warm, a step down from hot on the ladder. It is not hot anymore, because it is just right, and only a little cold water was added, so it did not get all the way to cool." },
    { id: "SK-V3c-P5", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Which TWO words mean to run very fast?",
      pick: 2,
      choices: [
        { text: "sprint", correct: true },
        { text: "dash", correct: true },
        { text: "jog" },
        { text: "stroll" },
        { text: "tiptoe" }
      ],
      clue: "Picture each word. Which ones are running at all? Of those, which ones are as fast as you can go?",
      why: "The answers are sprint and dash. Both mean to run as fast as you can for a short way. To jog is to run slowly. Stroll and tiptoe are kinds of walking, not running." }
  ],
  test: [
    { id: "SK-V3c-T1", type: "order", points: 2, dok: 2, passages: [],
      prompt: "These words all tell about size. Put them in order from SMALLEST to BIGGEST.",
      steps: ["tiny", "small", "large", "huge"],
      orderNote: "Tap the words in order, from smallest to biggest. Tap a placed word to take it back.",
      clue: "Find the two words for little things and the two words for big things first. Then decide which is the more extreme in each pair.",
      why: "The order is tiny, small, large, huge. Tiny is smaller than small, like an ant compared to a mouse. Huge is bigger than large, like a whale compared to a horse." },
    { id: "SK-V3c-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that best completes the sentence.",
      text: "The baby was asleep in the next room, so Ari {0} to his sister, \"Let's play quietly.\"",
      slots: [
        { options: ["shouted", "whispered", "yelled"], answer: 1 }
      ],
      clue: "All three words are ways to speak. Think about how loudly you would talk if a baby were sleeping nearby.",
      why: "The answer is whispered. To whisper is to speak very softly. Ari did not want to wake the baby. Shouted and yelled both mean to speak very loudly." },
    { id: "SK-V3c-T3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "All of these words describe feeling mad. Which word shows the STRONGEST feeling?",
      choices: [
        { text: "furious", correct: true },
        { text: "annoyed" },
        { text: "grumpy" },
        { text: "irritated" }
      ],
      clue: "Line up the words from a little mad to very, very mad. Which one is at the top of the ladder?",
      why: "The answer is furious. Furious means very, very angry. Annoyed, grumpy and irritated are milder ways to feel mad." },
    { id: "SK-V3c-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentences. Which word BEST describes Kai?",
      stem: ["Kai got caught in the rain without an umbrella. Water dripped from his hair, his shirt and even his socks."],
      choices: [
        { text: "soaked", correct: true },
        { text: "damp" },
        { text: "dry" },
        { text: "sweaty" }
      ],
      clue: "How wet is Kai? Look at all the places the water is dripping from.",
      why: "The answer is soaked. Soaked means completely wet, all the way through. Water dripped from Kai's hair, shirt and even his socks. Damp means only a little wet, so it is not strong enough." },
    { id: "SK-V3c-T5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Tap and pound both mean to hit. Match each sentence to the word that fits the blank best.",
      cols: ["tap", "pound"],
      rows: [
        { text: "Ella will ____ her friend's shoulder gently to say hello.", answer: 0 },
        { text: "The angry giant began to ____ on the castle door with his fists.", answer: 1 },
        { text: "Leo will ____ lightly on the fish tank so he does not scare the fish.", answer: 0 },
        { text: "Workers ____ the tent stakes deep into the ground with a hammer.", answer: 1 }
      ],
      clue: "Tap is a soft, light hit. Pound is a hard, strong hit. Look for words in each sentence that tell how hard.",
      why: "Gently and lightly show soft hits, so Ella and Leo tap. An angry giant using his fists and workers using a hammer to drive stakes deep show hard hits, so they pound." }
  ]
});

PP.addLesson({
  code: "3.L.V.3.d",
  title: "Using a dictionary and a glossary",
  teach: {
    big: "A dictionary or glossary tells me how to spell a word and what it means. I use ABC order and guide words to find the word fast, then pick the meaning that fits.",
    points: [
      "Words in a dictionary are in ABC order. If two words start with the same letter, look at the second letter. If those match too, look at the third. If one word runs out of letters first, like plan and plane, the shorter word comes first.",
      "Guide words are the two words at the top of a dictionary page. The first guide word is the first word on the page, and the second is the last. Every word on the page comes between them in ABC order.",
      "An entry shows a word, its part of speech and its meanings. Many words have more than one meaning, and each one has a number.",
      "To choose the right meaning, read the sentence, then try each meaning in place of the word. Pick the one that makes sense.",
      "A glossary is like a small dictionary at the back of a book or article. It explains only the important words from that text. You can use a dictionary in a book or online, and you can use it to check how to spell a word."
    ],
    words: [
      { term: "guide words", means: "the two words at the top of a dictionary page that show the first and last words on it" },
      { term: "entry", means: "a word in a dictionary and all the information about it" },
      { term: "glossary", means: "a list of important words and their meanings at the back of a book or article" }
    ],
    example: {
      label: "A dictionary entry",
      lines: [
        "crane (noun) 1. a tall bird with long legs and a long neck 2. a large machine that lifts and moves heavy things",
        "Sentence: The crane lifted the steel beam to the top of the new building."
      ],
      note: "Crane has two meanings. A bird cannot lift a steel beam to the top of a building, so the sentence uses meaning 2."
    },
    tip: "On the test, you may see a dictionary entry next to a sentence. Read every numbered meaning before you choose, and try each one in the sentence."
  },
  learn: [
    {
      show: ["sneeze   snail   snack"],
      ask: "Put these words in ABC order.",
      steps: [
        "All three start with s-n. Look at the third letter: e in sneeze, a in snail, a in snack.",
        "Sneeze has e, which comes after a, so it goes last.",
        "Snail and snack both start with s-n-a, so look at the fourth letter: i in snail, c in snack. C comes before i."
      ],
      answer: "snack, snail, sneeze"
    },
    {
      show: ["Guide words: pebble – pickle", "Would the word pencil be on this page?"],
      ask: "Does pencil come between pebble and pickle?",
      steps: [
        "Compare pencil to the first guide word, pebble. Both start with p-e. Next letters: n in pencil, b in pebble. N comes after b, so pencil comes after pebble.",
        "Compare pencil to the second guide word, pickle. Second letters: e in pencil, i in pickle. E comes before i, so pencil comes before pickle.",
        "Pencil comes after the first guide word and before the second one."
      ],
      answer: "Yes. Pencil would be on the page with the guide words pebble and pickle."
    },
    {
      show: [
        "spring (noun) 1. the season between winter and summer 2. a metal coil that bounces back after it is pushed 3. a place where water comes up out of the ground",
        "Sentence: The hikers filled their bottles with cool water from a spring in the hills."
      ],
      ask: "Which meaning of spring is used in the sentence?",
      steps: [
        "Read all three meanings first.",
        "Find clue words in the sentence: filled their bottles, cool water, in the hills.",
        "Try each meaning. You cannot fill a bottle with water from a season or from a metal coil. You can fill it from a place where water comes out of the ground."
      ],
      answer: "Meaning 3: a place where water comes up out of the ground."
    }
  ],
  parent: "Grab any dictionary or the glossary in a school book. Call out a word and race to find it, then talk about the guide words on that page. When your child asks how to spell a word, look it up together instead of just telling them.",
  passages: [
    { id: "p1", title: "The Life of a Monarch Butterfly", genre: "Informational text",
      paragraphs: [
        ["A monarch butterfly starts life as a tiny egg on a milkweed leaf."],
        ["When the egg hatches, a larva crawls out.", "A monarch larva is also called a caterpillar.", "It eats milkweed leaves and grows bigger and bigger."],
        ["Next, the caterpillar hangs upside down and forms a chrysalis.", "Inside this hard case, its body slowly changes."],
        ["At last, an adult butterfly comes out.", "It spreads its orange and black wings to dry."],
        ["In the fall, many monarchs migrate.", "They fly south to Mexico.", "They spend the winter there in the forests."],
        ["## Glossary"],
        ["Box: chrysalis (noun): the hard outer shell a caterpillar's body forms while it turns into a butterfly.", "larva (noun): a young insect after it hatches from an egg.", "migrate (verb): to move to a new place when the seasons change."]
      ] },
    { id: "p2", title: "How Peanuts Grow", genre: "Informational text",
      paragraphs: [
        ["Georgia grows more peanuts than any other state.", "Peanuts are legumes, just like beans and peas."],
        ["A peanut plant starts as a seed planted in warm soil in the spring.", "Soon, small yellow flowers bloom above the ground."],
        ["After a flower fades, something surprising happens.", "A stem called a peg grows down and pushes into the soil.", "The tip of the peg swells, and a peanut pod forms underground."],
        ["In the fall, farmers use a machine to dig up the plants.", "The machine flips them over so the pods can dry in the sun.", "This is the start of the harvest."],
        ["## Glossary"],
        ["Box: harvest (noun): the gathering of crops when they are ready.", "legume (noun): a plant that grows its seeds in pods, such as beans, peas and peanuts.", "peg (noun): a stem on a peanut plant that grows down into the soil.", "pod (noun): the part of a plant that holds its seeds."]
      ] }
  ],
  practice: [
    { id: "SK-V3d-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "A dictionary page has these guide words at the top. Which word would you find on this page?",
      stem: ["Guide words: mitten – mouse"],
      choices: [
        { text: "money", correct: true },
        { text: "milk" },
        { text: "mouth" },
        { text: "mud" }
      ],
      clue: "Compare letter by letter. The word must come AFTER mitten and BEFORE mouse in ABC order. Some words match for three letters, so keep going.",
      why: "The answer is money. M-o comes after m-i, so money is after mitten. Money and mouse both start with m-o, and n comes before u, so money is before mouse. Milk comes before mitten (l is before t). Mouth comes after mouse (t is after s). Mud comes after mouse (u is after o)." },
    { id: "SK-V3d-P2", type: "order", points: 2, dok: 2, passages: [],
      prompt: "Put these words in ABC order.",
      steps: ["star", "stare", "start", "step"],
      orderNote: "Tap the words in ABC order, first to last. Tap a placed word to take it back.",
      clue: "All four words start with s-t. Look at the third letter first. If one word runs out of letters while the others keep going, the shorter word comes first.",
      why: "The order is star, stare, start, step. Star, stare and start begin with s-t-a, and step begins with s-t-e, so step is last. Star runs out of letters first, so it comes before stare and start. Then compare stare and start: the fifth letters are e and t, and e comes first." },
    { id: "SK-V3d-P3", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Read the dictionary entry and the sentence. Which meaning of match is used in the sentence?",
      stem: [
        "match 1. (noun) a short stick that makes a flame when it is rubbed on a rough surface 2. (noun) a game or contest between two players or teams 3. (verb) to go well with something or be the same as it",
        "Sentence: Tia's socks do not match, because one is red and the other is green."
      ],
      text: "In Tia's sentence, match is used with meaning {0}.",
      slots: [
        { options: ["1", "2", "3"], answer: 2 }
      ],
      clue: "Try each meaning in place of match. Which one makes sense when talking about a red sock and a green sock?",
      why: "The answer is 3. Tia's socks are different colors, so they do not go well together or look the same. That is meaning 3. Socks are not a stick that makes a flame or a game between teams." },
    { id: "SK-V3d-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The writer wants to add the word milkweed to the glossary. Where should it go so the glossary stays in ABC order?",
      choices: [
        { text: "after migrate", correct: true },
        { text: "before chrysalis" },
        { text: "between chrysalis and larva" },
        { text: "between larva and migrate" }
      ],
      clue: "Milkweed starts with m. Find the other m word in the glossary and compare them letter by letter.",
      why: "The answer is after migrate. Milkweed and migrate both start with m-i. The third letters are l in milkweed and g in migrate. G comes before l, so milkweed goes after migrate, at the end of the glossary." },
    { id: "SK-V3d-P5", type: "hottext", points: 1, dok: 1, passages: [],
      prompt: "Leo is not sure how to spell because. He turns to the dictionary page with the guide words beach – bell and finds the entry. Which spelling will he see?",
      options: ["becuase", "because", "becaus", "beacuse"],
      answer: [1], pick: 1,
      clue: "Say the word slowly: be-cause. Check each spelling letter by letter. Which one has every sound, with the letters in the right order?",
      why: "The answer is because, spelled b-e-c-a-u-s-e. Becuase and beacuse have letters in the wrong order, and becaus is missing the e at the end." }
  ],
  test: [
    { id: "SK-V3d-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "A dictionary page has these guide words at the top. Which word would you find on this page?",
      stem: ["Guide words: candle – cave"],
      choices: [
        { text: "carrot", correct: true },
        { text: "camel" },
        { text: "cabin" },
        { text: "celery" }
      ],
      clue: "All the words start with c. Look at the second letter, then the third, and check that the word is AFTER candle and BEFORE cave.",
      why: "The answer is carrot. Carrot and candle both start with c-a, and r comes after n, so carrot is after candle. Carrot and cave both start with c-a, and r comes before v, so carrot is before cave. Camel and cabin come before candle (m and b are before n). Celery comes after cave (e is after a)." },
    { id: "SK-V3d-T2", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Use the glossary. What is a peg on a peanut plant?",
        choices: [
          { text: "a stem that grows down into the soil", correct: true },
          { text: "a seed that is planted in warm soil" },
          { text: "a yellow flower that blooms in spring" },
          { text: "a machine that digs up the plants" }
        ] },
      partB: { prompt: "Which sentence from the article BEST matches the glossary meaning of peg?",
        choices: [
          { text: "\"A stem called a peg grows down and pushes into the soil.\"", correct: true },
          { text: "\"Soon, small yellow flowers bloom above the ground.\"" },
          { text: "\"In the fall, farmers use a machine to dig up the plants.\"" },
          { text: "\"The machine flips them over so the pods can dry in the sun.\"" }
        ] },
      clue: "Glossary words are in ABC order. Find peg between legume and pod. Then find the paragraph in the article that uses the same word.",
      why: "Part A: a stem that grows down into the soil. Part B: \"A stem called a peg grows down and pushes into the soil.\" The glossary and the article both say a peg is a stem that grows down into the soil." },
    { id: "SK-V3d-T3", type: "order", points: 2, dok: 2, passages: [],
      prompt: "Put these words in ABC order.",
      steps: ["plan", "plane", "planet", "plant"],
      orderNote: "Tap the words in ABC order, first to last. Tap a placed word to take it back.",
      clue: "All four words start with p-l-a-n. When one word runs out of letters, it comes first. Then compare the next letter of the others.",
      why: "The order is plan, plane, planet, plant. Plan is the shortest and runs out of letters first. Plane, planet and plant come next. Plane and planet both start with p-l-a-n-e, and plane runs out first. Planet has e as its fifth letter and plant has t, and e comes before t." },
    { id: "SK-V3d-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the dictionary entry and the sentence. Which meaning of pick is used in the sentence?",
      stem: [
        "pick 1. (verb) to choose 2. (verb) to pull a fruit or flower off a plant 3. (noun) a tool with a pointed metal end, used to break up hard ground 4. (noun) a small, flat piece used to play a guitar",
        "Sentence: Grandpa reached up and gave a gentle tug to pick a peach off the branch."
      ],
      choices: [
        { text: "to pull a fruit or flower off a plant", correct: true },
        { text: "to choose" },
        { text: "a tool with a pointed metal end" },
        { text: "a small, flat piece used to play a guitar" }
      ],
      clue: "Look at what Grandpa does with his hands, and where the peach is. Then try each meaning in place of pick.",
      why: "The answer is \"to pull a fruit or flower off a plant.\" Grandpa gave a gentle tug to get the peach off the branch. A peach is a fruit, and he pulled it off the tree. In this sentence pick is an action, so it cannot be a tool or a guitar piece." },
    { id: "SK-V3d-T5", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Pablo looks up finish in a dictionary to check how to spell finished. Choose the correct spelling.",
      text: "I {0} my homework before dinner.",
      slots: [
        { options: ["finnished", "finished", "finishd"], answer: 1 }
      ],
      clue: "Start with the base word finish. Then add the ending for something that already happened.",
      why: "The answer is finished. The base word finish has one n. To show it already happened, add -ed: f-i-n-i-s-h-e-d." }
  ]
});

PP.addLesson({
  code: "3.L.V.3.e",
  title: "Choosing the most exact word",
  teach: {
    big: "Good writers choose exact words so readers can see, hear and feel just what they mean.",
    points: [
      "Plain words like good, nice, big, went and said tell only a little. Exact words tell a lot.",
      "Change a plain verb to an exact one that shows how something was done: went could become hurried, tiptoed or raced.",
      "Change a plain describing word to an exact one: nice could become friendly, cozy or delicious.",
      "Use the details in your sentence to pick the word that fits. If the sentence says \"quietly,\" a word like shouted does not fit.",
      "Reread your sentence. Ask: Does this word show exactly what I mean?"
    ],
    words: [
      { term: "exact word", means: "a word that tells just what you mean, with more detail than a plain word" }
    ],
    example: {
      label: "Plain and exact",
      lines: ["Plain: The dog ate the food.", "Exact: The hungry beagle gulped down its dinner."],
      note: "Gulped shows how the dog ate. Beagle tells what kind of dog. Hungry and dinner add more detail, so the reader can picture it."
    },
    tip: "On the test, you may read a student's draft and choose the word that makes a sentence clearer or more exact. Pick the word that fits the details already in the draft."
  },
  learn: [
    {
      show: ["Mia said, \"Watch out for the ball!\" as it flew toward her brother's head."],
      ask: "Which word is more exact than said: shouted, whispered or asked?",
      steps: [
        "Find the details. A ball is flying at someone's head, and Mia is warning him.",
        "Think about how a person sounds when she warns someone fast. She would be loud.",
        "Whispered is too quiet, and asked is for a question. Shouted shows a loud, quick warning."
      ],
      answer: "Shouted is the most exact word: Mia shouted, \"Watch out for the ball!\""
    },
    {
      show: ["Grandma's peach cobbler was good."],
      ask: "Which word tells more exactly how the cobbler tasted: delicious, kind or tidy?",
      steps: [
        "Good is a plain word. Ask what about the cobbler you want to tell: how it tasted.",
        "Kind tells about people, and tidy tells about rooms. Neither tells about taste.",
        "Delicious means it tasted very good, so it fits a food."
      ],
      answer: "Delicious: \"Grandma's peach cobbler was delicious.\""
    }
  ],
  write: {
    prompt: "Write 3 or 4 sentences about a time you played outside or ate a food you love. Then find two plain words, like good, nice, big, went or said. Change each one to a more exact word.",
    checklist: [
      "I used at least one exact verb that shows how something moved or was done.",
      "I used at least one exact describing word that tells how something looked, sounded, felt or tasted.",
      "I changed two plain words into more exact words.",
      "I read my sentences again to check that each word fits the details."
    ],
    rows: 6
  },
  parent: "When your child tells you about their day, pick out one plain word (\"It was fun,\" \"We went outside\") and ask, \"Can you find a more exact word?\" Keep a short list of exact words on the fridge to borrow when writing.",
  passages: [
    { id: "p1", draft: true, title: "A Day at the Aquarium", byline: "Malik's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) Last Saturday, my family visited the aquarium in Atlanta.", "(2) The first tank we saw was big, and it went all the way up to the ceiling.", "(3) A whale shark moved slowly past the glass, gently waving its giant tail."],
        ["(4) Next, we walked through a tunnel with water all around us.", "(5) Small silver fish went by quickly in a group, all turning at the same time.", "(6) My little brother said, \"Look, a stingray!\" so loudly that people turned to stare."],
        ["(7) At the touch tank, I put two fingers on a stingray's back.", "(8) Its skin felt nice.", "(9) It was a fun day, and I can't wait to go back."]
      ] },
    { id: "p2", draft: true, title: "Our Backyard Garden", byline: "Sofia's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) This spring, my family planted a garden in our backyard.", "(2) We dug holes in the dirt and put in tomato and pepper plants.", "(3) Every morning, we gave the plants water."],
        ["(4) One night, a big storm came, and the wind was really bad.", "(5) Rain came down so hard that it made puddles all over the yard."],
        ["(6) The next morning, we went outside to check on our garden.", "(7) Some of the tomato plants were bent over, but none of them were broken.", "(8) Dad helped us tie them to sticks so they would stand up straight."],
        ["(9) By summer, we picked our first red tomatoes, and they tasted good."]
      ] }
  ],
  practice: [
    { id: "SK-V3e-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Malik wants a more exact verb in sentence 3. Which word should replace moved?",
      choices: [
        { text: "glided", correct: true },
        { text: "rushed" },
        { text: "stomped" },
        { text: "bounced" }
      ],
      clue: "Look for details in sentence 3 about how the whale shark moved. Is it fast or slow? Rough or smooth?",
      why: "The answer is glided. To glide is to move slowly and smoothly. Sentence 3 says the whale shark moved slowly and gently waved its tail. Rushed is too fast, and stomped and bounced do not fit a fish swimming smoothly." },
    { id: "SK-V3e-P2", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Choose the most exact verb to replace went in sentence 5.",
      text: "Small silver fish {0} by quickly in a group, all turning at the same time.",
      slots: [
        { options: ["crawled", "wandered", "darted"], answer: 2 }
      ],
      clue: "Sentence 5 tells how fast the fish moved. Which verb matches that speed?",
      why: "The answer is darted. To dart is to move suddenly and quickly. The fish went by quickly and all turned at once. Crawled and wandered are slow, so they do not fit." },
    { id: "SK-V3e-P3", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Malik wants to replace one plain describing word with thrilling, which means very exciting. Choose the sentence where thrilling fits best.",
      targets: ["p1:1:2", "p1:1:3", "p1:2:1", "p1:2:2", "p1:2:3", "p1:3:1", "p1:3:2", "p1:3:3"],
      answer: ["p1:3:3"], pick: 1,
      clue: "Find each plain describing word in the draft. Try thrilling in its place. Does the sentence still make sense and tell more exactly what Malik meant?",
      why: "The answer is \"(9) It was a fun day, and I can't wait to go back.\" Thrilling can replace fun to show how exciting the day was. In sentence 2, big is about size, and in sentence 8, nice is about how skin feels, so thrilling does not fit there." },
    { id: "SK-V3e-P4", type: "ms", points: 2, dok: 2, passages: ["p1"],
      prompt: "Malik wants to replace nice in sentence 8 with a word that tells exactly how the stingray's skin felt. Which TWO words could he use?",
      pick: 2,
      choices: [
        { text: "smooth", correct: true },
        { text: "slippery", correct: true },
        { text: "friendly" },
        { text: "pretty" },
        { text: "shiny" }
      ],
      clue: "The sentence is about touching. Which words tell how something feels under your fingers?",
      why: "The answers are smooth and slippery. Both tell how something feels when you touch it. Friendly tells about how someone acts. Pretty and shiny tell how something looks, not how it feels." },
    { id: "SK-V3e-P5", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Choose the most exact word to replace big in sentence 2.",
      text: "The first tank we saw was {0}, and it went all the way up to the ceiling.",
      slots: [
        { options: ["wide", "towering", "long"], answer: 1 }
      ],
      clue: "All three words can describe something big. Read the rest of sentence 2. Which way was the tank big?",
      why: "The answer is towering. Towering means very tall, and the detail in sentence 2 is about height: the tank went all the way up to the ceiling. Wide and long tell about size from side to side, not how tall something is." }
  ],
  test: [
    { id: "SK-V3e-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which word should replace bad in sentence 4 to describe the wind more exactly?",
      choices: [
        { text: "fierce", correct: true },
        { text: "steady" },
        { text: "sticky" },
        { text: "gentle" }
      ],
      clue: "Sentence 4 tells about a big storm. What kind of wind comes with a big storm?",
      why: "The answer is fierce. Fierce wind is very strong and wild, which matches a big storm and the word bad. Steady wind blows evenly, gentle wind is calm, and sticky tells how air feels on your skin, not how strong wind is." },
    { id: "SK-V3e-T2", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Choose the most exact verb to replace came down in sentence 5.",
      text: "Rain {0} down so hard that it made puddles all over the yard.",
      slots: [
        { options: ["dripped", "sprinkled", "poured"], answer: 2 }
      ],
      clue: "The rain fell so hard it made puddles all over. Which word shows a lot of rain falling fast?",
      why: "The answer is poured. When rain pours, a lot falls very hard and fast. That matches puddles all over the yard. Dripped and sprinkled describe only a little rain." },
    { id: "SK-V3e-T3", type: "ms", points: 2, dok: 2, passages: ["p2"],
      prompt: "Sofia wants to replace good in sentence 9 with words that tell exactly how the tomatoes tasted or felt to eat. Which TWO words could she use?",
      pick: 2,
      choices: [
        { text: "sweet", correct: true },
        { text: "juicy", correct: true },
        { text: "red" },
        { text: "round" },
        { text: "tall" }
      ],
      clue: "Sentence 9 is about taste. Which words tell what you notice when you bite into a tomato?",
      why: "The answers are sweet and juicy. Sweet tells how a tomato tastes, and juicy tells what it is like to bite into it. Red and round tell how it looks, and tall does not describe a tomato at all." },
    { id: "SK-V3e-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which revision of sentence 6 uses the most exact verb?",
      choices: [
        { text: "The next morning, we hurried outside to check on our garden.", correct: true },
        { text: "The next morning, we got outside to check on our garden." },
        { text: "The next morning, we came outside to check on our garden." },
        { text: "The next morning, we were outside to check on our garden." }
      ],
      clue: "After a big storm, the family would want to check the garden fast. Which verb shows HOW they went, not just that they went?",
      why: "The answer is \"The next morning, we hurried outside to check on our garden.\" Hurried shows they went quickly, which makes sense after a big storm. Got, came and were are plain words that do not show how they moved." },
    { id: "SK-V3e-T5", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "In one sentence, Sofia could use the exact verb watered to say the same thing in fewer words. Choose that sentence.",
      targets: ["p2:1:1", "p2:1:2", "p2:1:3", "p2:2:1", "p2:2:2", "p2:3:1", "p2:3:2", "p2:3:3"],
      answer: ["p2:1:3"], pick: 1,
      clue: "Watered means to give water to something. Look for a sentence that uses several words to say that.",
      why: "The answer is \"(3) Every morning, we gave the plants water.\" Sofia could write \"Every morning, we watered the plants.\" One exact verb says the same thing as \"gave ... water.\"" }
  ]
});
