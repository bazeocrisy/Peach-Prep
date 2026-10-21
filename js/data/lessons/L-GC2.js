/* Lessons: 3-5.L.GC.2 Syntax (sentence structure). Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.L.GC.2.a",
  title: "Complete sentences: simple, compound and complex",
  teach: {
    big: "A sentence needs a who, a does-what and a whole thought. You can build one three ways: simple, compound or complex.",
    points: [
      "A complete sentence tells who or what it is about (the subject) and what they do or are (the verb). It makes sense all by itself.",
      "A fragment is only a piece of a sentence. It is missing a who or a does-what, or it leaves you waiting for more, like \"When the bell rang.\"",
      "A run-on is two sentences crammed together with nothing between them, or with only a comma between them.",
      "A simple sentence has one whole thought. A compound sentence joins two whole thoughts with a comma and a joining word: and, but, or, so.",
      "A complex sentence has one whole thought plus a part that cannot stand alone. That part has its own who and does-what, and it starts with a word like because, when, after, before or if."
    ],
    words: [
      { term: "subject", means: "who or what the sentence is about" },
      { term: "verb", means: "what the subject does or is" },
      { term: "fragment", means: "a piece of a sentence that is not complete" },
      { term: "run-on", means: "two sentences run together without the right joining" }
    ],
    example: {
      label: "Example",
      lines: [
        "Simple: The frogs croaked all night.",
        "Compound: The frogs croaked all night, so I did not sleep.",
        "Complex: Because the frogs croaked all night, I did not sleep.",
        "Fragment: Because the frogs croaked all night.",
        "Run-on: The frogs croaked all night I did not sleep."
      ],
      note: "The first three are correct sentences. The fragment starts like the complex sentence but stops before the whole thought. The run-on has two whole thoughts with nothing to join them."
    },
    tip: "On the test, you may be asked which sentence is complete or which one is written correctly. You may also read a student's draft and find the fragment or run-on, choose the best way to fix it, or find a sentence of one kind. Read each sentence by itself and ask: Does it have a who, a does-what and a whole thought?"
  },
  learn: [
    {
      show: ["After the storm passed over Columbus."],
      ask: "Is this a complete sentence or a fragment?",
      steps: [
        "Find the who or what: the storm.",
        "Find the does-what: passed. So it has a subject and a verb.",
        "Now check for a whole thought. The word After makes you wait. After the storm passed, what happened?",
        "It leaves you waiting, so it is not complete."
      ],
      answer: "It is a fragment. You could fix it like this: After the storm passed over Columbus, the sky turned pink."
    },
    {
      show: ["From a student's draft:", "(1) Kofi and his cousin fished in the creek. (2) Kofi caught a small fish, but his cousin caught nothing. (3) When the sun went down, they walked home."],
      ask: "Which sentence is simple, which is compound, and which is complex?",
      steps: [
        "Sentence 1: and joins two people, Kofi and his cousin. There is only one does-what, fished, and one whole thought. So sentence 1 is simple.",
        "Sentence 2: \"Kofi caught a small fish\" can stand alone. \"His cousin caught nothing\" can stand alone too. Two whole thoughts joined by a comma and but make it compound.",
        "Sentence 3: \"They walked home\" can stand alone. \"When the sun went down\" has a who and a does-what, but it cannot stand alone, because When leaves you waiting.",
        "One whole thought plus a part that cannot stand alone makes sentence 3 complex."
      ],
      answer: "Sentence 1 is simple, sentence 2 is compound, and sentence 3 is complex."
    },
    {
      show: ["The library was closed we went to the park instead."],
      ask: "Is this sentence written correctly? If not, how can you fix it?",
      steps: [
        "Look for where one thought ends. \"The library was closed\" is a whole thought.",
        "\"We went to the park instead\" is another whole thought.",
        "Two whole thoughts with nothing between them make a run-on.",
        "Fix it with an end mark, or with a comma and a joining word that makes sense, like so."
      ],
      answer: "It is a run-on. One way to fix it: The library was closed, so we went to the park instead."
    }
  ],
  parent: "When your child tells you about the day, pick one sentence and play \"sentence builder\": say it as a simple sentence, add and, but or so to make it compound, then start it with because or when to make it complex. You can also read a few sentences from a book out loud and ask, \"Was that one simple, compound or complex?\"",
  passages: [
    /* PP-004: two short student drafts so the skill is practiced inside a text, not only on single
       sentences. p1 is for practice and p2 for the check. Each draft has exactly one fragment and
       one run-on; every other sentence is correct. Sentence types (for reviewers):
       p1: (1) simple (2) simple (3) compound (4) simple (5) FRAGMENT (6) simple (7) RUN-ON
           (8) complex (9) simple (10) complex (11) simple
       p2: (1) simple (2) simple (3) simple (4) compound (5) FRAGMENT (6) simple (7) simple
           (8) RUN-ON (9) simple (10) simple (11) complex */
    { id: "p1", title: "Our Class Garden", byline: "Maya's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) This spring, our class planted a garden behind the school.", "(2) First, we dug up the hard dirt with small shovels.", "(3) Mr. Hall brought a bag of rich soil, and we mixed it into the dirt.", "(4) Next, we planted rows of beans and carrots."],
        ["(5) Because the weather was dry.", "(6) We watered the rows every morning.", "(7) The beans grew fast the carrots took much longer."],
        ["(8) When the beans were ready, we picked them for a class snack.", "(9) The carrots should be ready in a few more weeks.", "(10) We will cook them in a soup after we pull them up.", "(11) I can hardly wait!"]
      ] },
    { id: "p2", title: "The Old Lighthouse", byline: "Jordan's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) Last summer, my family visited an old lighthouse on the Georgia coast.", "(2) The tall white tower stood on a sandy point near the ocean."],
        ["(3) We climbed the long, winding stairs to the top.", "(4) My legs ached, but I kept going.", "(5) When we reached the top.", "(6) We could see boats far out on the water."],
        ["(7) A guide told us about the keepers from long ago.", "(8) Each night, a keeper climbed the stairs he lit the big lamp.", "(9) The bright light warned ships about the rocks.", "(10) Today, the lamp turns on by itself."],
        ["(11) Before we left, I bought a postcard of the lighthouse."]
      ] }
  ],
  practice: [
    { id: "SK-GC2a-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which of these is a complete sentence?",
      choices: [
        { text: "The baby goat jumped onto the hay bale.", correct: true },
        { text: "The baby goat on top of the hay bale." },
        { text: "Jumped onto the hay bale after lunch." },
        { text: "When the baby goat jumped onto the hay." }
      ],
      clue: "Check each choice for three things: a who, a does-what, and a thought that does not leave you waiting.",
      why: "The answer is \"The baby goat jumped onto the hay bale.\" It has a who (the baby goat), a does-what (jumped) and a whole thought. \"The baby goat on top of the hay bale\" has no verb. \"Jumped onto the hay bale after lunch\" has no subject. The one that starts with When leaves you waiting." },
    { id: "SK-GC2a-P2", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each one a complete sentence, a fragment or a run-on? Match each one to its kind.",
      cols: ["Complete sentence", "Fragment", "Run-on"],
      rows: [
        { text: "The bus was late, so we walked to school.", answer: 0 },
        { text: "Before the sun came up over the hills.", answer: 1 },
        { text: "Our team won the game we got a trophy.", answer: 2 },
        { text: "Under the porch near the garden hose.", answer: 1 }
      ],
      clue: "Read each one by itself. Is a who or a does-what missing? Does it leave you waiting? Or are two whole thoughts crammed together?",
      why: "\"The bus was late, so we walked to school.\" is complete: two whole thoughts joined with a comma and so. \"Before the sun came up over the hills.\" is a fragment because it leaves you waiting. \"Under the porch near the garden hose.\" is a fragment because it has no who and no does-what. \"Our team won the game we got a trophy.\" is a run-on: two whole thoughts with nothing between them." },
    { id: "SK-GC2a-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is a compound sentence?",
      choices: [
        { text: "The wind blew hard, and the leaves fell from the trees.", correct: true },
        { text: "The wind and the rain shook the windows all night long." },
        { text: "When the wind blew hard, the leaves fell from the trees." },
        { text: "The leaves fell from the trees and landed in the yard." }
      ],
      clue: "A compound sentence joins two whole thoughts with a comma and a joining word. Check whether the words on each side of the joining word could stand alone as a sentence.",
      why: "The answer is \"The wind blew hard, and the leaves fell from the trees.\" \"The wind blew hard\" and \"the leaves fell from the trees\" are both whole thoughts. In the windows sentence, and only joins two nouns. In the yard sentence, and joins two verbs that share one subject, so it is simple. The sentence that starts with When is complex." },
    { id: "SK-GC2a-P4", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that makes this a correct complex sentence.",
      text: "{0} we finished our chores, Mom took us to the pool.",
      slots: [{ options: ["After", "And", "So"], answer: 0 }],
      clue: "A complex sentence has a part that cannot stand alone. Which word makes the first part tell when something happened?",
      why: "The answer is After: \"After we finished our chores, Mom took us to the pool.\" After makes the first part tell when, and that part cannot stand alone. And and so join two whole sentences in the middle, so they do not belong at the start here." },
    { id: "SK-GC2a-P7", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "One sentence in Maya's draft is a run-on. Select that sentence.",
      targets: ["p1:1:3", "p1:2:1", "p1:2:2", "p1:2:3", "p1:3:1"],
      answer: ["p1:2:3"], pick: 1,
      clue: "A run-on has two whole thoughts with nothing to join them. Read each sentence slowly. Is there a spot where one thought ends and a new one starts, with no end mark and no comma and joining word?",
      why: "The answer is sentence 7, \"The beans grew fast the carrots took much longer.\" \"The beans grew fast\" is one whole thought, and \"the carrots took much longer\" is another, with nothing between them. Maya could write: The beans grew fast, but the carrots took much longer. None of the other sentences has two whole thoughts crammed together with nothing between them." },
    { id: "SK-GC2a-P9", type: "ms", points: 2, dok: 2, passages: ["p1"],
      prompt: "Which TWO sentences in Maya's draft are complex sentences?",
      pick: 2,
      choices: [
        { text: "(8) When the beans were ready, we picked them for a class snack.", correct: true },
        { text: "(10) We will cook them in a soup after we pull them up.", correct: true },
        { text: "(3) Mr. Hall brought a bag of rich soil, and we mixed it into the dirt." },
        { text: "(4) Next, we planted rows of beans and carrots." },
        { text: "(5) Because the weather was dry." }
      ],
      clue: "A complex sentence has a whole thought plus a part that cannot stand alone. That part can come at the start or at the end. A part all by itself, with no whole thought, is not a sentence at all.",
      why: "The answers are sentence 8, \"When the beans were ready, we picked them for a class snack.\" and sentence 10, \"We will cook them in a soup after we pull them up.\" Each has a whole thought plus a part that starts with when or after. Sentence 3 is compound: two whole thoughts joined with a comma and and. Sentence 4 is simple. Sentence 5 has no whole thought, so it is a fragment." },
    { id: "SK-GC2a-P8", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Sentence 5 in Maya's draft is a fragment. Which is the best way to join sentences 5 and 6 to fix it?",
      choices: [
        { text: "Because the weather was dry, we watered the rows every morning.", correct: true },
        { text: "Because the weather was dry, and we watered the rows every morning." },
        { text: "The weather was dry, we watered the rows every morning." },
        { text: "Because the weather was dry every morning." }
      ],
      clue: "A good fix keeps both ideas and leaves you with a whole thought. Check each choice: Does it leave you waiting? Are two whole thoughts held together by only a comma?",
      why: "The answer is \"Because the weather was dry, we watered the rows every morning.\" The because part now has a whole thought to go with it, so it no longer leaves you waiting. In the choice with and, both parts hang on Because, so it still leaves you waiting. The choice that starts with The weather has two whole thoughts with only a comma, so it is a run-on. \"Because the weather was dry every morning.\" is still a fragment." }
  ],
  test: [
    { id: "SK-GC2a-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "The museum opens at nine, but the gift shop opens at ten.", correct: true },
        { text: "The museum opens at nine the gift shop opens at ten." },
        { text: "The museum opens at nine, the gift shop opens at ten." },
        { text: "Opens at nine, but the gift shop opens at ten." }
      ],
      clue: "Check how the two thoughts are joined. Two whole thoughts need a comma and a joining word. Also make sure each part has a who.",
      why: "The answer is \"The museum opens at nine, but the gift shop opens at ten.\" It joins two whole thoughts with a comma and but. One choice has nothing between the thoughts, and one has only a comma, so both are run-ons. \"Opens at nine, but the gift shop opens at ten.\" has no who for opens at nine." },
    { id: "SK-GC2a-T2", type: "ebsr", points: 2, dok: 2, passages: [],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: "When the whistle blew, the swimmers dove into the pool.",
      partA: { prompt: "What kind of sentence is this?",
        choices: [
          { text: "a complex sentence", correct: true },
          { text: "a compound sentence" },
          { text: "a simple sentence" },
          { text: "a fragment" }
        ] },
      partB: { prompt: "Which reason best supports the answer to Part A?",
        choices: [
          { text: "It has a whole thought and a part that starts with When.", correct: true },
          { text: "It has two whole thoughts joined by a comma and and." },
          { text: "It has only one whole thought and nothing added to it." },
          { text: "It is missing a who or a does-what, so it is not whole." }
        ] },
      clue: "Cover the first part, up to the comma. Can it stand alone? Then read the rest. Can that part stand alone?",
      why: "Part A: a complex sentence. Part B: It has a whole thought and a part that starts with When. \"The swimmers dove into the pool\" can stand alone. \"When the whistle blew\" cannot, because it leaves you waiting. One whole thought plus a when part makes a complex sentence." },
    { id: "SK-GC2a-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each sentence to the kind of sentence it is.",
      cols: ["Simple", "Compound", "Complex"],
      rows: [
        { text: "My brother and I built a fort out of boxes.", answer: 0 },
        { text: "We built a fort, and Dad helped us tape the roof.", answer: 1 },
        { text: "Because the fort had no door, we crawled in through a window.", answer: 2 },
        { text: "The fort fell down after the dog ran into it.", answer: 2 },
        { text: "We fixed the fort the next morning.", answer: 0 }
      ],
      clue: "Count the whole thoughts. One whole thought is simple. Two whole thoughts joined with and, but, or, so is compound. A whole thought plus a part that starts with a word like because or after is complex.",
      why: "\"My brother and I built a fort out of boxes.\" and \"We fixed the fort the next morning.\" are simple; the and in the first one only joins two people. \"We built a fort, and Dad helped us tape the roof.\" is compound. \"Because the fort had no door, we crawled in through a window.\" and \"The fort fell down after the dog ran into it.\" are complex." },
    { id: "SK-GC2a-T6", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "One sentence in Jordan's draft is a fragment. Select that sentence.",
      targets: ["p2:2:2", "p2:2:3", "p2:2:4", "p2:3:1", "p2:4:1"],
      answer: ["p2:2:3"], pick: 1,
      clue: "Read each sentence by itself. Does one of them leave you waiting to find out what happened?",
      why: "The answer is sentence 5, \"When we reached the top.\" It has a who and a does-what, but the word When leaves you waiting. Jordan could join it to sentence 6: When we reached the top, we could see boats far out on the water. Each of the other sentences has a whole thought." },
    { id: "SK-GC2a-T7", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Sentence 8 in Jordan's draft is a run-on. Which is the best way to fix it?",
      choices: [
        { text: "Each night, a keeper climbed the stairs, and he lit the big lamp.", correct: true },
        { text: "Each night, a keeper climbed the stairs, he lit the big lamp." },
        { text: "Each night, a keeper climbed the stairs and, he lit the big lamp." },
        { text: "Each night, when a keeper climbed the stairs." }
      ],
      clue: "Read each fix. Does it still have both whole thoughts? Are they joined in a way you learned?",
      why: "The answer is \"Each night, a keeper climbed the stairs, and he lit the big lamp.\" The comma goes before and, and and joins the two whole thoughts. A comma alone still makes a run-on, the comma after and is in the wrong place, and the when choice is a fragment." },
    { id: "SK-GC2a-T8", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Select the sentence in Jordan's draft that is a complex sentence.",
      targets: ["p2:1:1", "p2:2:2", "p2:2:3", "p2:3:3", "p2:4:1"],
      answer: ["p2:4:1"], pick: 1,
      clue: "Look for a sentence with a whole thought plus a part that cannot stand alone. Make sure the sentence really has a whole thought too.",
      why: "The answer is sentence 11, \"Before we left, I bought a postcard of the lighthouse.\" \"I bought a postcard of the lighthouse\" can stand alone, and \"Before we left\" cannot. Sentence 1 starts with Last summer, but that part has no who or does-what, so sentence 1 is simple. Sentence 4 is compound and sentence 9 is simple. Sentence 5 starts with When, but it has no whole thought, so it is not a complex sentence." }
  ]
});

PP.addLesson({
  code: "3.L.GC.2.b",
  title: "Mix your sentences and keep verbs in the same time",
  teach: {
    big: "Good writers mix short and long sentences, and they keep their verbs in the same time, past or present, unless the time really changes.",
    points: [
      "Too many short sentences in a row sound choppy. Join two short sentences that go together with a comma and one of these words: and, but, or, so.",
      "You can also join them with a word like because, when, after or if. Pick the joining word that shows how the two ideas go together.",
      "Verb tense tells when something happens. Past tense tells what already happened: jumped, ran. Present tense tells what happens now or always: jumps, runs, I jump, they run.",
      "Once you start telling about something in the past, keep your verbs in the past. Do not slip into the present by accident.",
      "Change the tense only when the time really changes: \"Yesterday I lost my hat, but today I have a new one.\""
    ],
    words: [
      { term: "verb tense", means: "the form of a verb that shows when something happens" },
      { term: "past tense", means: "already happened (walked, sang)" },
      { term: "present tense", means: "happens now or always (walks, we walk)" },
      { term: "combine", means: "to join two sentences into one" }
    ],
    example: {
      label: "Before and after",
      lines: [
        "Before: We went to the lake. The water was cold. We swim anyway. We had a great time.",
        "After: When we went to the lake, the water was cold. We swam anyway, and we had a great time."
      ],
      note: "Swim changed to swam, so every verb tells about the past. The short sentences were joined with when and with a comma and and, so the writing sounds smooth."
    },
    tip: "On the test, you may choose the verb that matches the rest of a paragraph, or the best way to join two sentences. Look at the other verbs nearby to find the time."
  },
  learn: [
    {
      show: ["Last summer, Aunt Rosa took us to Tybee Island. We build a sandcastle near the water."],
      ask: "Which verb does not match the time of the rest of the writing?",
      steps: [
        "Find a time clue: Last summer. This already happened, so the verbs should be past tense.",
        "Check each verb. Took is past. Build is present.",
        "Change build to the past tense: built."
      ],
      answer: "Build does not match. It should say: We built a sandcastle near the water."
    },
    {
      show: ["Mia wanted to ride her bike.", "Her tire was flat."],
      ask: "Which joining word fits best: and, but or so?",
      steps: [
        "Ask how the two ideas go together. Does the second idea add on, get in the way, or happen because of the first?",
        "Mia wants something, and the flat tire stops her. The second idea gets in the way.",
        "But shows that something goes against what came before."
      ],
      answer: "Mia wanted to ride her bike, but her tire was flat."
    },
    {
      show: ["The power went out.", "We lit candles."],
      ask: "How can you join these two short sentences?",
      steps: [
        "Ask how the ideas connect. The power went out first, and that is why we lit candles.",
        "So and because show that one thing caused another. When tells the time something happened.",
        "Keep both verbs in the past: went and lit."
      ],
      answer: "The power went out, so we lit candles. (When the power went out, we lit candles. works too.)"
    }
  ],
  write: {
    prompt: "Write 5 or 6 sentences about something fun you did last weekend. Tell it in the past tense, and mix short and long sentences.",
    checklist: [
      "I told what happened with past-tense verbs, like played and went.",
      "I checked every verb to make sure it stays in the past.",
      "I wrote at least one sentence that joins two ideas with and, but or so.",
      "I wrote at least one sentence that uses because, when, after or if.",
      "I read my sentences out loud to make sure they do not sound choppy."
    ],
    rows: 8
  },
  parent: "At dinner, ask your child to tell you about something that happened earlier today. Listen for verbs that slip into the present (\"Then he says...\"), and help them say it in the past. Then try joining two of their short sentences with but, so or because.",
  passages: [
    { id: "p1", title: "Our Trip to the Aquarium", byline: "Tasha's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) Last Friday, my class rode a bus to the aquarium in Atlanta.", "(2) The ride took most of the morning."],
        ["(3) First, we visited a huge tank with sharks and rays.", "(4) A big ray glided right over our heads.", "(5) It looked like a giant kite."],
        ["(6) Next, we walk through a long tunnel under the water.", "(7) Fish swam all around us.", "(8) The tunnel was dark.", "(9) It felt a little scary."],
        ["(10) At the end of the day, I bought a postcard for my grandma.", "(11) My feet hurt from all the walking.", "(12) I still wanted to go back again soon."]
      ] },
    { id: "p2", title: "Saturday at the Market", byline: "Diego's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) Every Saturday morning, my family goes to the farmers market.", "(2) Mom brings a big cloth bag for the food.", "(3) My little sister and I carry the baskets."],
        ["(4) First, we stop at the peach stand.", "(5) The farmer gives each of us a slice to taste.", "(6) The peaches are sweet.", "(7) They are juicy."],
        ["(8) Next, Dad bought a jar of honey from a beekeeper.", "(9) The beekeeper shows us a picture of her hives."],
        ["(10) Sometimes it rains on Saturday.", "(11) We go to the market anyway.", "(12) We always come home with something good to eat."]
      ] },
    /* PP-004 fixture: used only by testB (form B of the skill check). Needs independent review. */
    { id: "p3", title: "Our Class Garden", byline: "Mateo's draft", genre: "Student draft (narrative)", draft: true,
      paragraphs: [
        ["(1) Last spring, our class planted a garden behind the school.", "(2) Ms. Lee gave each of us a small shovel."],
        ["(3) First, we dug long rows in the soft dirt.", "(4) Then we drop the seeds into the rows.", "(5) We covered them with dirt and patted it down."],
        ["(6) The seeds needed water.", "(7) We filled a watering can every day.", "(8) After two weeks, tiny green sprouts poked up out of the ground."],
        ["(9) One morning, a rabbit got into the garden.", "(10) It ate some of the lettuce.", "(11) We built a little fence around the beds.", "(12) By June, we picked beans, carrots and tomatoes to share with our families."]
      ] }
  ],
  practice: [
    { id: "SK-GC2b-P1", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "One sentence in Tasha's draft has a verb that does not match the time of the rest of the story. Select that sentence.",
      targets: ["p1:2:1", "p1:2:2", "p1:3:1", "p1:3:2", "p1:4:1"],
      answer: ["p1:3:1"], pick: 1,
      clue: "Find a time clue at the start of the draft. Then check the verb in each sentence. Does each one tell about the past?",
      why: "The answer is sentence 6, \"Next, we walk through a long tunnel under the water.\" The trip happened last Friday, so the verbs should be past tense, like visited, glided and swam. Walk should be walked." },
    { id: "SK-GC2b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What is the best way to combine sentences 8 and 9?",
      choices: [
        { text: "The tunnel was dark, so it felt a little scary.", correct: true },
        { text: "The tunnel was dark, but it felt a little scary." },
        { text: "The tunnel was dark it felt a little scary." },
        { text: "The tunnel was dark, so it feels a little scary." }
      ],
      clue: "Ask how the two ideas go together. Then check the punctuation and make sure both verbs tell about the past.",
      why: "The answer is \"The tunnel was dark, so it felt a little scary.\" The dark is the reason it felt scary, so the word so fits. But would mean the second idea is a surprise. One choice has no comma and joining word, so it is a run-on. The feels choice switches to the present tense." },
    { id: "SK-GC2b-P3", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Tasha wants to join sentences 11 and 12. Choose the word that best completes the new sentence.",
      text: "My feet hurt from all the walking, {0} I still wanted to go back again soon.",
      slots: [{ options: ["so", "but", "or"], answer: 1 }],
      clue: "Sore feet might make someone want to go home. Does the second idea agree with that, or go against it?",
      why: "The answer is but. Sore feet might make Tasha want to stop, yet she still wants to go back. But shows that the second idea goes against what you might expect. So would mean the sore feet made her want to go back." },
    { id: "SK-GC2b-P4", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that keep the verb tense the same.",
      choices: [
        { text: "Yesterday, Ana lost her mitten, and she looked for it everywhere.", correct: true },
        { text: "Every day after school, Marcus walks his dog and feeds the cat.", correct: true },
        { text: "Last night, we watched the stars, and Dad points to the Big Dipper." },
        { text: "The baby laughs every time the puppy licked her toes." },
        { text: "On Saturday, Jun planted beans and waters them with a hose." }
      ],
      pick: 2,
      clue: "Find every verb in each sentence. Are they all past, or all present? Time words can help you decide.",
      why: "The answers are \"Yesterday, Ana lost her mitten, and she looked for it everywhere.\" (lost and looked are both past) and \"Every day after school, Marcus walks his dog and feeds the cat.\" (walks and feeds are both present). The other three mix tenses: watched and points, laughs and licked, planted and waters." },
    { id: "SK-GC2b-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "What is the best way to combine these two sentences?",
      stem: ["Kayla finished her homework.", "She played outside."],
      choices: [
        { text: "After Kayla finished her homework, she played outside.", correct: true },
        { text: "Kayla finished her homework, but she played outside." },
        { text: "Kayla finished her homework she played outside." },
        { text: "After Kayla finishes her homework, she played outside." }
      ],
      clue: "Think about the order things happened. Then check the punctuation and make sure both verbs tell the same time.",
      why: "The answer is \"After Kayla finished her homework, she played outside.\" After shows the order: homework first, then play. But does not fit because playing is not a surprise. One choice is a run-on, and the finishes choice mixes present and past." },
    { id: "SK-GC2b-P6", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the verb that keeps the tense the same.",
      text: "Every morning, Grandpa feeds the chickens, and then he {0} the eggs.",
      slots: [{ options: ["gathered", "gathers", "gather"], answer: 1 }],
      clue: "Every morning tells you this happens again and again. What tense is the verb feeds? Make the new verb match it, and make sure it fits with he.",
      why: "The answer is gathers. Every morning and feeds tell you the sentence is in the present tense, so the second verb is present too. Gathered is past, and gather does not go with he." }
  ],
  test: [
    { id: "SK-GC2b-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "One sentence in Diego's draft has a verb that does not match the time of the rest of the draft. Select that sentence.",
      targets: ["p2:1:2", "p2:2:2", "p2:3:1", "p2:3:2", "p2:4:3"],
      answer: ["p2:3:1"], pick: 1,
      clue: "Diego tells about something his family does again and again. Which tense is most of the draft in? Find the one verb that is different.",
      why: "The answer is sentence 8, \"Next, Dad bought a jar of honey from a beekeeper.\" Diego writes about what happens every Saturday, so the draft is in the present tense: goes, brings, stop, shows. Bought should be buys." },
    { id: "SK-GC2b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What is the best way to combine sentences 6 and 7?",
      choices: [
        { text: "The peaches are sweet and juicy.", correct: true },
        { text: "The peaches are sweet, but they are juicy." },
        { text: "The peaches are sweet they are juicy." },
        { text: "The peaches were sweet and juicy." }
      ],
      clue: "Both sentences tell about the peaches. Look for a way to join them that keeps the meaning, has no run-on and stays in the same tense as the draft.",
      why: "The answer is \"The peaches are sweet and juicy.\" Both words describe the peaches, so and can join them in one smooth sentence. But would mean juicy is a surprise. One choice is a run-on, and were switches to the past tense." },
    { id: "SK-GC2b-T3", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Diego wants to join sentences 10 and 11. Choose the words that best complete the new sentence.",
      text: "{0} it rains on Saturday, we go to the market.",
      slots: [{ options: ["Even if", "Only because", "So that"], answer: 0 }],
      clue: "Does the rain make the family go to the market, or do they go in spite of the rain?",
      why: "The answer is Even if: \"Even if it rains on Saturday, we go to the market.\" The family goes in spite of the rain. Only because would mean the rain is the reason they go, and So that would mean they go to make it rain." },
    { id: "SK-GC2b-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does the verb tense stay the same in each sentence, or does it shift? Match each sentence.",
      cols: ["Tense stays the same", "Tense shifts"],
      rows: [
        { text: "The bell rang, and the students hurried inside.", answer: 0 },
        { text: "Owen opens the door and waved to his friend.", answer: 1 },
        { text: "Every night, Grandma reads to me before I fall asleep.", answer: 0 },
        { text: "Last week, our class plants seeds and watered them.", answer: 1 }
      ],
      clue: "Find every verb in the sentence. Are they all past or all present?",
      why: "\"The bell rang, and the students hurried inside.\" stays in the past. \"Every night, Grandma reads to me before I fall asleep.\" stays in the present. \"Owen opens the door and waved to his friend.\" shifts from present to past. \"Last week, our class plants seeds and watered them.\" shifts too; plants should be planted." },
    { id: "SK-GC2b-T5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that keep the tense the same.",
      text: "Yesterday, Priya {0} a kite at the park, and the wind {1} it high into the sky.",
      slots: [
        { options: ["flies", "flew", "fly"], answer: 1 },
        { options: ["carried", "carries", "carry"], answer: 0 }
      ],
      clue: "Find the time word at the start of the sentence. Then pick verbs that both tell about that time.",
      why: "The answers are flew and carried. Yesterday tells you this already happened, so both verbs must be past tense. Flies and carries are present tense. Fly and carry are present-tense forms too, and they do not go with Priya or the wind." }
  ],
  /* PP-004 FIXTURE: form B of the skill check, written by the "forms" agent so the
     two-form architecture can be tested (verification/guard.py section 14). It parallels
     form A item by item (same types, points, DOK and code) on a new passage, p3.
     NEEDS INDEPENDENT REVIEW (two reviews, SPEC manifest rule) before it is relied on;
     see docs/audits/work/pp004-forms.md. */
  testB: [
    { id: "SK-GC2b-TB1", type: "hottext", points: 1, dok: 2, passages: ["p3"],
      prompt: "One sentence in Mateo's draft uses a verb that does not fit the time of the rest of the draft. Select that sentence.",
      targets: ["p3:1:2", "p3:2:1", "p3:2:2", "p3:3:2", "p3:4:3"],
      answer: ["p3:2:2"], pick: 1,
      clue: "Find a time clue at the start of the draft. Then check the verb in each sentence. Which one tells a different time?",
      why: "The answer is sentence 4, \"Then we drop the seeds into the rows.\" The garden was planted last spring, so the draft is in the past tense: planted, gave, dug, covered. Drop should be dropped." },
    { id: "SK-GC2b-TB2", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "What is the best way to combine sentences 6 and 7?",
      choices: [
        { text: "The seeds needed water, so we filled a watering can every day.", correct: true },
        { text: "The seeds needed water, but we filled a watering can every day." },
        { text: "The seeds needed water we filled a watering can every day." },
        { text: "The seeds needed water, so we fill a watering can every day." }
      ],
      clue: "Ask how the two ideas go together. Then check the punctuation and make sure both verbs stay in the same time as the draft.",
      why: "The answer is \"The seeds needed water, so we filled a watering can every day.\" The seeds needing water is the reason the class filled the can, so the word so fits. But would mean the second idea is a surprise. One choice has no comma and joining word, so it is a run-on. The fill choice switches to the present tense." },
    { id: "SK-GC2b-TB3", type: "dropdown", points: 1, dok: 2, passages: ["p3"],
      prompt: "Mateo wants to join sentences 10 and 11. Choose the word that best completes the new sentence.",
      text: "{0} the rabbit ate some of the lettuce, we built a little fence around the beds.",
      slots: [{ options: ["After", "Before", "Unless"], answer: 0 }],
      clue: "Which happened first: the rabbit eating the lettuce, or the class building the fence?",
      why: "The answer is After: \"After the rabbit ate some of the lettuce, we built a little fence around the beds.\" The rabbit ate first, and then the class built the fence. Before would put the fence first, and Unless would mean the fence was built only if the rabbit did not eat." },
    { id: "SK-GC2b-TB4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does the verb tense stay the same in each sentence, or does it shift? Match each sentence.",
      cols: ["Tense stays the same", "Tense shifts"],
      rows: [
        { text: "The puppy barked, and the cat ran under the bed.", answer: 0 },
        { text: "Jada picks up her pencil and wrote her name.", answer: 1 },
        { text: "Every Sunday, Mom bakes bread, and we eat it warm.", answer: 0 },
        { text: "Yesterday, the wind blows hard and knocked over our trash can.", answer: 1 }
      ],
      clue: "Find every verb in the sentence. Do they all tell about the past, or all about now?",
      why: "\"The puppy barked, and the cat ran under the bed.\" stays in the past. \"Every Sunday, Mom bakes bread, and we eat it warm.\" stays in the present. \"Jada picks up her pencil and wrote her name.\" shifts from present to past. \"Yesterday, the wind blows hard and knocked over our trash can.\" shifts too; blows should be blew." },
    { id: "SK-GC2b-TB5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that keep the tense the same.",
      text: "Last night, Ben {0} his teeth, and then he {1} into bed.",
      slots: [
        { options: ["brushes", "brushed", "brush"], answer: 1 },
        { options: ["climbed", "climbs", "climb"], answer: 0 }
      ],
      clue: "Find the time words at the start of the sentence. Then pick verbs that both tell about that time.",
      why: "The answers are brushed and climbed. Last night tells you this already happened, so both verbs must be past tense. Brushes and climbs are present tense. Brush and climb are present-tense forms too, and they do not go with Ben or he." }
  ]
});

PP.addLesson({
  code: "3.L.GC.2.c",
  title: "Make the subject and verb agree",
  teach: {
    big: "The verb has to match its subject: one dog barks, but two dogs bark.",
    points: [
      "The subject is who or what the sentence is about. The verb tells what the subject does or is.",
      "In the present tense, a verb for one person or thing usually ends in s: The bird sings. A verb for more than one does not: The birds sing.",
      "Some verbs change in other ways. For one person or thing (he, she, it, Dad, the dog), use is, was, has and does. For more than one, use are, were, have and do.",
      "Two subjects joined by and count as more than one: Ella and Sam are friends. With I and you, use the verb with no s: I run, you run. Be is special: I am, I was, you are, you were.",
      "Words can come between the subject and the verb. Skip over them and match the verb to the real subject: The box of crayons is on the table. A long sentence can have two parts, joined by a word like when or because. Each part has its own subject and verb, and each pair must agree: When the bell rings, the students line up."
    ],
    words: [
      { term: "subject", means: "who or what the sentence is about" },
      { term: "verb", means: "what the subject does or is" },
      { term: "agree", means: "match: one goes with one, more than one goes with more than one" }
    ],
    example: {
      label: "Example",
      lines: ["The puppy chews the rope.", "The puppies chew the rope.", "The bag of apples is heavy."],
      note: "One puppy chews, with an s on the verb. Two or more puppies chew, with no s. In the last sentence, the real subject is bag, not apples, so the verb is is."
    },
    tip: "On the test, you might fix a verb in a student's writing or pick the verb that matches. Find the real subject first, then ask: one or more than one?"
  },
  learn: [
    {
      show: ["The children in the choir (sing / sings) every Sunday."],
      ask: "Which verb matches the subject?",
      steps: [
        "Ask who is doing the singing. The sentence is about the children. \"In the choir\" only tells which children.",
        "Children means more than one child.",
        "More than one takes the verb with no s."
      ],
      answer: "The children in the choir sing every Sunday."
    },
    {
      show: ["My cousin and her friend (was / were) at the zoo."],
      ask: "Which verb matches the subject?",
      steps: [
        "Find the subject: my cousin and her friend.",
        "Two people joined by and count as more than one.",
        "Use were for more than one when you tell about the past."
      ],
      answer: "My cousin and her friend were at the zoo."
    },
    {
      show: ["She (don't / doesn't) like spicy food."],
      ask: "Which verb matches the subject?",
      steps: [
        "The subject is she. She is one person.",
        "For one person, use does, not do.",
        "Does not is shortened to doesn't."
      ],
      answer: "She doesn't like spicy food."
    }
  ],
  write: {
    prompt: "Write 5 sentences about animals at a farm or a zoo. Write some sentences about one animal and some about a group of animals. Tell what they do now, in the present tense.",
    checklist: [
      "I wrote at least two sentences about one animal.",
      "I wrote at least two sentences about more than one animal.",
      "I found the subject of each sentence and asked: one or more than one?",
      "I used a verb with s for one (the goat eats) and with no s for more than one (the goats eat)."
    ],
    rows: 7
  },
  parent: "Play \"one or many\" in the car: say a sentence like \"The bird sings,\" and have your child change it to many birds (\"The birds sing\"). Then switch roles and let your child try to catch you.",
  passages: [],
  practice: [
    { id: "SK-GC2c-P1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the verb that agrees with the subject.",
      text: "The ducks on the pond {0} hungry.",
      slots: [{ options: ["is", "are", "was"], answer: 1 }],
      clue: "Who is hungry: the pond, or the ducks? Skip the words in between and ask whether the real subject is one or more than one.",
      why: "The answer is are: \"The ducks on the pond are hungry.\" The subject is ducks, which means more than one, so the verb is are. \"On the pond\" only tells where the ducks are. Is and was go with one." },
    { id: "SK-GC2c-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the correct verb?",
      choices: [
        { text: "My grandpa and I fish at the lake.", correct: true },
        { text: "My grandpa and I fishes at the lake." },
        { text: "Our neighbor have a boat on the lake." },
        { text: "The boats on the lake rocks in the wind." }
      ],
      clue: "Find the subject of each sentence. Is it one or more than one? Then check if the verb matches.",
      why: "The answer is \"My grandpa and I fish at the lake.\" Grandpa and I are two people, so the verb has no s. Fishes should be fish, neighbor needs has, and boats needs rock." },
    { id: "SK-GC2c-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which verb goes with each subject? Match each subject to runs or run.",
      cols: ["runs", "run"],
      rows: [
        { text: "The horse", answer: 0 },
        { text: "The horses", answer: 1 },
        { text: "Mia and Leo", answer: 1 },
        { text: "My brother", answer: 0 },
        { text: "They", answer: 1 }
      ],
      clue: "Ask: one or more than one? One gets runs. More than one gets run. Two names joined by and count as more than one.",
      why: "The horse and My brother are one, so they go with runs. The horses, Mia and Leo, and They are more than one, so they go with run." },
    { id: "SK-GC2c-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a subject-verb agreement error.",
      options: [
        "The leaves on the maple tree turn red in the fall.",
        "A basket of oranges sit on the kitchen counter.",
        "Our dogs sleep on a rug by the door.",
        "My aunt drives a truck to work.",
        "The stars shine brightly tonight."
      ],
      answer: [1], pick: 1,
      clue: "In each sentence, find the real subject. Watch out for words that come between the subject and the verb.",
      why: "The answer is \"A basket of oranges sit on the kitchen counter.\" The subject is basket, which is one thing, so the verb should be sits. \"Of oranges\" only tells what is in the basket." },
    { id: "SK-GC2c-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that agree with their subjects.",
      text: "Every morning, Dad {0} breakfast, and my sisters {1} the table.",
      slots: [
        { options: ["make", "makes", "making"], answer: 1 },
        { options: ["set", "sets", "setting"], answer: 0 }
      ],
      clue: "This sentence has two subjects. Check each one. Is it one person or more than one?",
      why: "The answers are makes and set. Dad is one person, so the verb ends in s: makes. Sisters means more than one, so the verb has no s: set." },
    { id: "SK-GC2c-P6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "The bike doesn't have a bell.", correct: true },
        { text: "The bikes doesn't have bells." },
        { text: "That bike don't have a bell." },
        { text: "These bikes has no bells." }
      ],
      clue: "Doesn't and has go with one. Don't and have go with more than one. Check each subject.",
      why: "The answer is \"The bike doesn't have a bell.\" Bike is one, so doesn't is correct. Bikes needs don't, that bike needs doesn't, and these bikes needs have." },
    { id: "SK-GC2c-P7", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that agree with their subjects.",
      text: "When the twins {0} home from school, their dog {1} to the door.",
      slots: [
        { options: ["get", "gets", "getting"], answer: 0 },
        { options: ["run", "runs", "running"], answer: 1 }
      ],
      clue: "This sentence has two parts, and each part has its own subject. Find each subject and ask: one or more than one?",
      why: "The answers are get and runs. In the first part, the subject is twins, which is more than one, so get has no s. In the second part, the subject is dog, which is one, so runs ends in s. The word when joins the two parts, but each part still needs a subject and verb that agree." }
  ],
  test: [
    { id: "SK-GC2c-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the correct verb?",
      choices: [
        { text: "The girls in my class play tag at recess.", correct: true },
        { text: "The girl in my class play tag at recess." },
        { text: "The girls in my class plays tag at recess." },
        { text: "The girls in my class is good at tag." }
      ],
      clue: "Find the subject. Is it one girl or more than one? Then check the verb.",
      why: "The answer is \"The girls in my class play tag at recess.\" Girls is more than one, so the verb is play, with no s. One girl would need plays, and girls would need are, not is." },
    { id: "SK-GC2c-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the verb that agrees with the subject.",
      text: "The cookies in the jar {0} still warm.",
      slots: [{ options: ["was", "were", "is"], answer: 1 }],
      clue: "What is warm, the jar or the cookies? Is that one thing or more than one?",
      why: "The answer is were: \"The cookies in the jar were still warm.\" The subject is cookies, which is more than one. Was and is go with one thing." },
    { id: "SK-GC2c-T3", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences with correct subject-verb agreement.",
      choices: [
        { text: "Jamal and his dad build birdhouses.", correct: true },
        { text: "The book on the shelf belongs to Rosa.", correct: true },
        { text: "My friends likes to swim in the lake." },
        { text: "The cat and the dog sleeps by the fire." },
        { text: "She have a new pair of boots." }
      ],
      pick: 2,
      clue: "For each sentence, find the subject and decide: one or more than one? Remember that two subjects joined by and count as more than one.",
      why: "The answers are \"Jamal and his dad build birdhouses.\" and \"The book on the shelf belongs to Rosa.\" Jamal and his dad are two people, so build has no s. Book is one thing, so belongs has an s. Friends needs like, the cat and the dog need sleep, and she needs has." },
    { id: "SK-GC2c-T4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that needs a different verb.",
      options: [
        "Our school has a garden behind the gym.",
        "Every class grows something different.",
        "The third graders plant beans and squash.",
        "The pumpkins in the corner gets very big.",
        "Everyone helps pull weeds on Fridays."
      ],
      answer: [3], pick: 1,
      clue: "Find the real subject of each sentence. Skip any words between the subject and the verb.",
      why: "The answer is \"The pumpkins in the corner gets very big.\" The subject is pumpkins, which is more than one, so the verb should be get. \"In the corner\" only tells where they grow. Every class and everyone each count as one, so grows and helps are correct." },
    { id: "SK-GC2c-T5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each subject to the verb that agrees with it.",
      cols: ["is", "are"],
      rows: [
        { text: "The kittens", answer: 1 },
        { text: "My shoe", answer: 0 },
        { text: "Grace and Amir", answer: 1 },
        { text: "The jar of buttons", answer: 0 },
        { text: "It", answer: 0 }
      ],
      clue: "Use is for one and are for more than one. For a group of words, find the main word that the subject is about.",
      why: "My shoe, The jar of buttons and It are each one, so they go with is. The jar is the subject, not the buttons. The kittens and Grace and Amir are more than one, so they go with are." }
  ]
});

PP.addLesson({
  code: "3.L.GC.2.d",
  title: "Add details with exact describing words",
  teach: {
    big: "When you elaborate, you add details that tell more about an idea. Exact adjectives and adverbs make those details clear, so your reader can picture what you mean.",
    points: [
      "An adjective describes a noun. It tells what kind, how many or which one: a shaggy dog, three apples.",
      "An adverb describes a verb. It tells how, when or where something happens: whispered softly, left early, played outside.",
      "Some describing words are too plain to help, like nice, good, bad and fun. Swap them for exact words, like crunchy, gentle or muddy.",
      "Choose the word that fits what really happens. A cat that sneaks up on a toy moves quietly, not loudly.",
      "Do not pile on describing words. One or two exact words work better than a long list."
    ],
    words: [
      { term: "adjective", means: "a word that describes a noun" },
      { term: "adverb", means: "a word that tells how, when or where about a verb" },
      { term: "exact", means: "just right; telling exactly what you mean" }
    ],
    example: {
      label: "Plain and exact",
      lines: ["Plain: The dog ate its food.", "Exact: The hungry dog ate its food quickly."],
      note: "Hungry is an adjective that tells what kind of dog. Quickly is an adverb that tells how it ate. Now you can picture it."
    },
    tip: "On the test, you may pick the word that makes a sentence clearer, or the word that best fits a detail. Read the whole sentence, because the other words give clues about which describing word fits."
  },
  learn: [
    {
      show: ["Grandma put lots of hot peppers in the soup. The soup tasted ____."],
      ask: "Which adjective tells exactly how the soup tasted: nice, spicy or okay?",
      steps: [
        "Look for a clue in the sentences: lots of hot peppers.",
        "Nice and okay do not tell how it tasted. They could describe almost anything.",
        "Spicy matches the clue about peppers, so the reader can almost taste it."
      ],
      answer: "Spicy: The soup tasted spicy."
    },
    {
      show: ["The test had started, so Ava tiptoed into the room and sat down ____."],
      ask: "Which adverb fits best: quietly, loudly or happily?",
      steps: [
        "The missing word tells how Ava sat down, so it is an adverb.",
        "Look for clues: the test had started, and Ava tiptoed.",
        "Someone who tiptoes during a test is trying not to make noise."
      ],
      answer: "Quietly: Ava sat down quietly."
    },
    {
      show: ["A bird sat on the fence."],
      ask: "How can you elaborate on this idea, adding details with adjectives and adverbs?",
      steps: [
        "Ask: what kind of bird? Add adjectives before bird, like tiny and red.",
        "Ask: how did it sit? Add an adverb after sat, like calmly.",
        "Ask: what else could the reader learn? Add a detail that tells more, like what the bird was doing: singing a cheerful song.",
        "Read it back. Can you picture it now?"
      ],
      answer: "A tiny red bird sat calmly on the fence, singing a cheerful song."
    }
  ],
  write: {
    prompt: "Write 4 or 5 sentences about a place you like, such as a park, a kitchen or a beach. Help your reader see, hear and feel what it is like there.",
    checklist: [
      "I used at least three adjectives that tell exactly what kind, like squishy or golden.",
      "I used at least two adverbs that tell how, when or where, like slowly or outside.",
      "I swapped out plain words like nice, good and fun.",
      "I checked that each describing word fits what really happens."
    ],
    rows: 6
  },
  parent: "Pick an object at home, like an apple or a sock, and take turns describing it with one exact word at a time (\"shiny,\" \"bumpy,\" \"cold\"). Whoever runs out of exact words first picks the next object.",
  passages: [],
  practice: [
    { id: "SK-GC2d-P1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the adjective that best fits the sentence.",
      text: "After digging in the garden, the puppy's paws were {0}, so Mom wiped them with a towel.",
      slots: [{ options: ["muddy", "nice", "fluffy"], answer: 0 }],
      clue: "What happens to paws when a puppy digs in a garden? Look at what Mom does next.",
      why: "The answer is muddy. Digging in a garden gets paws dirty, and Mom wipes them with a towel. Nice does not tell anything exact, and fluffy does not explain why Mom needs a towel." },
    { id: "SK-GC2d-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which adverb best completes the sentence?",
      stem: "The turtle crawled ____ across the road, so it took a long time to reach the other side.",
      choices: [
        { text: "slowly", correct: true },
        { text: "quickly" },
        { text: "sadly" },
        { text: "loudly" }
      ],
      clue: "The end of the sentence gives a clue. Why did it take the turtle a long time?",
      why: "The answer is slowly. The sentence says it took a long time to cross, which happens when you move slowly. Quickly means the opposite, and sadly and loudly do not explain the long time." },
    { id: "SK-GC2d-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is the describing word an adjective or an adverb? Match each one.",
      cols: ["Adjective (describes a noun)", "Adverb (describes a verb)"],
      rows: [
        { text: "gently, in \"She patted the horse gently.\"", answer: 1 },
        { text: "striped, in \"We saw a striped snake.\"", answer: 0 },
        { text: "outside, in \"The kids played outside.\"", answer: 1 },
        { text: "sticky, in \"My hands were sticky.\"", answer: 0 },
        { text: "early, in \"The bus came early.\"", answer: 1 }
      ],
      clue: "Ask what the word describes. If it tells what kind of thing, it is an adjective. If it tells how, when or where something happens, it is an adverb.",
      why: "Striped tells what kind of snake, and sticky tells what the hands were like, so they are adjectives. Gently tells how she patted, outside tells where they played, and early tells when the bus came, so they are adverbs." },
    { id: "SK-GC2d-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Ben wrote, \"We went to the beach.\" He wants to elaborate by adding details that tell more about his idea. Which revision does that best?",
      choices: [
        { text: "We went to the sandy beach early and splashed happily in the cool waves.", correct: true },
        { text: "We went to the beach, and the beach was really nice and fun." },
        { text: "We went to the beach on a day, and then we went back home." },
        { text: "We went to the beach with some stuff, and it was a good time." }
      ],
      clue: "Elaborate means to tell more. Which revision adds new details that help you picture the trip?",
      why: "The answer is \"We went to the sandy beach early and splashed happily in the cool waves.\" It adds details that tell more: sandy tells what kind of beach, early tells when, happily tells how they splashed, and cool tells what the waves were like. The other revisions add plain words like nice, fun, stuff and good, or add words that tell nothing new, so the reader still cannot picture the trip." },
    { id: "SK-GC2d-P5", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Sam wrote, \"We ate good pancakes.\" Choose the TWO words that could replace good to tell exactly what the pancakes were like.",
      choices: [
        { text: "fluffy", correct: true },
        { text: "buttery", correct: true },
        { text: "fine" },
        { text: "okay" },
        { text: "nice" }
      ],
      pick: 2,
      clue: "An exact word helps you see, taste or feel the pancakes. A plain word could describe almost anything.",
      why: "The answers are fluffy and buttery. Fluffy tells how the pancakes looked and felt, and buttery tells how they tasted. Fine, okay and nice are plain words that do not tell anything exact." },
    { id: "SK-GC2d-P6", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "In one sentence, the describing word does NOT fit what happens. Select that sentence.",
      options: [
        "The lemon tasted sour, so I made a face.",
        "The heavy box was easy to lift with one finger.",
        "The cold wind made us zip our coats.",
        "Rain fell steadily all afternoon.",
        "The bright sun made us squint."
      ],
      answer: [1], pick: 1,
      clue: "Read each sentence and check that the describing word matches the rest of the sentence.",
      why: "The answer is \"The heavy box was easy to lift with one finger.\" A heavy box is hard to lift, so heavy does not fit. A word like light or empty would match. In the other sentences, the describing word fits what happens." }
  ],
  test: [
    { id: "SK-GC2d-T1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the adjective that best fits the sentence.",
      text: "The ice on the sidewalk was {0}, so Grandpa held the rail as he walked.",
      slots: [{ options: ["slippery", "pretty", "cold"], answer: 0 }],
      clue: "Why would Grandpa need to hold the rail? Pick the word that explains it.",
      why: "The answer is slippery. Ice that is slippery is easy to fall on, so Grandpa holds the rail. Pretty does not explain why he holds on, and cold does not either, because all ice is cold." },
    { id: "SK-GC2d-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which adverb best completes the sentence?",
      stem: ["The fire alarm rang, and the firefighters ____ climbed onto the truck.", "In less than a minute, the truck roared out of the station."],
      choices: [
        { text: "quickly", correct: true },
        { text: "proudly" },
        { text: "quietly" },
        { text: "slowly" }
      ],
      clue: "Read both sentences. How much time passed before the truck left? What does that tell you about how the firefighters climbed on?",
      why: "The answer is quickly. The truck left in less than a minute, so the firefighters must have climbed on quickly. Proudly and quietly do not explain how they got going so soon, and slowly means the opposite." },
    { id: "SK-GC2d-T3", type: "ebsr", points: 2, dok: 3, passages: [],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: "Lily wrote: \"My grandma has a nice garden.\"",
      partA: { prompt: "Which revision makes Lily's sentence more exact?",
        choices: [
          { text: "My grandma has a sunny garden full of tall sunflowers.", correct: true },
          { text: "My grandma has a really, really nice garden." },
          { text: "My grandma has a good garden that is fun." },
          { text: "My grandma has a nice garden that I like a lot." }
        ] },
      partB: { prompt: "Why is that revision better?",
        choices: [
          { text: "It uses exact words that help the reader picture the garden.", correct: true },
          { text: "It repeats a word to show how much Lily likes the garden." },
          { text: "It uses plain words, like nice and good, that anyone knows." },
          { text: "It makes the sentence shorter so it is easier to read." }
        ] },
      clue: "Read each revision and try to picture the garden. Which one lets you see it?",
      why: "Part A: \"My grandma has a sunny garden full of tall sunflowers.\" Part B: It uses exact words that help the reader picture the garden. Sunny and tall are exact adjectives. The other revisions still use plain words like nice, good and fun, so you cannot picture the garden." },
    { id: "SK-GC2d-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each sentence to the describing word that fits it best.",
      cols: ["sharp", "crunchy", "gently", "loudly"],
      rows: [
        { text: "The cat's claws were very ____.", answer: 0 },
        { text: "The fresh carrots were ____.", answer: 1 },
        { text: "Dad rocked the baby ____ in his arms.", answer: 2 },
        { text: "The thunder crashed ____ and shook the windows.", answer: 3 }
      ],
      clue: "Picture each sentence. Which word matches what you see, hear or feel?",
      why: "Claws can be sharp. Fresh carrots are crunchy when you bite them. Dad rocks a baby gently so the baby stays calm. Thunder that shakes the windows crashes loudly." },
    { id: "SK-GC2d-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence with the most exact describing words.",
      options: [
        "A huge elephant did something nice by the muddy pond.",
        "The zoo had some nice animals that were fun to see.",
        "An enormous gray elephant sprayed cool water on its back.",
        "We saw a big animal do a good thing at the zoo today.",
        "The animals at the zoo were great, and we had fun."
      ],
      answer: [2], pick: 1,
      clue: "Try to picture each sentence. Which one lets you see exactly what happened?",
      why: "The answer is \"An enormous gray elephant sprayed cool water on its back.\" Enormous, gray and cool are exact adjectives that help you picture the elephant and the water. Each of the others uses at least one plain word, like nice, good, great or fun, or says \"did something\" instead of telling what happened." }
  ]
});
