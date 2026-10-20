/* Lessons: 3.T.T.1 Narrative techniques. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.T.T.1.a",
  title: "Story clues: dialogue, description and actions",
  teach: {
    big: "Writers show me what characters are like, where a story happens and what is going on through what characters say, what they do, and the describing words.",
    points: [
      "Dialogue is the words a character says. It goes inside quotation marks. What a character says can show how they feel or what they want.",
      "Actions are what characters do. An action can show how a character feels without the writer telling you.",
      "Description is the describing words that help you picture a place or a person: how it looks, sounds or feels. Description often shows the setting.",
      "Dialogue and actions also move the plot. They can start a problem, change it or help solve it.",
      "When you read a detail, ask: What does this show me? Is it about a character, the setting or what happens next?"
    ],
    words: [
      { term: "dialogue", means: "the words characters say out loud" },
      { term: "description", means: "words that help you picture what something looks, sounds or feels like" },
      { term: "action", means: "something a character does" },
      { term: "plot", means: "the events that happen in a story" }
    ],
    example: {
      label: "Example",
      lines: ["Ben slammed his lunch box on the table. \"Nobody saved me a seat,\" he muttered. Rain tapped against the cafeteria windows."],
      note: "The action (he slammed his lunch box) and the dialogue (\"Nobody saved me a seat\") show that Ben is upset. The description (rain tapping on the cafeteria windows) shows the setting: a school cafeteria on a rainy day."
    },
    tip: "On the test, a question may ask what a character's words or actions show, or which detail helps you picture the setting. Find the sentence first. Then ask yourself what it shows."
  },
  learn: [
    {
      show: ["Grandpa Luis's boat rocked gently on the gray lake. Fog hung over the water so thick that Nina could not see the shore. Somewhere far away, a bird called once and then went quiet."],
      ask: "Which words help you picture the setting, and what do they show?",
      steps: [
        "Look for describing words about the place: a gray lake, thick fog, a shore Nina cannot see.",
        "Look for sounds, too: one bird calling far away, and then quiet.",
        "Put the details together and ask what kind of place it is."
      ],
      answer: "Words like \"gray lake,\" \"fog hung over the water\" and \"a bird called once and then went quiet\" show a foggy, quiet lake."
    },
    {
      show: ["\"I can carry all the groceries by myself,\" Darius said. He stacked four bags in his arms. The top bag wobbled, but he kept walking with his chin up."],
      ask: "What do Darius's words and actions show about him?",
      steps: [
        "Read the dialogue. Darius says he can carry everything by himself.",
        "Look at the actions. He stacks four bags, and he keeps walking even when the top bag wobbles.",
        "Ask what kind of person talks and acts like that."
      ],
      answer: "They show that Darius is proud and determined. He wants to do the job all on his own."
    },
    {
      show: ["\"Grab the flashlight,\" Mom whispered. \"I hear something in the garage.\" Kiara tiptoed behind her, holding her breath."],
      ask: "How does the dialogue move the plot forward?",
      steps: [
        "Read what Mom says. She hears something in the garage.",
        "Ask what changes. Now there is a mystery, a new problem to solve.",
        "Think about what the reader wants to know next."
      ],
      answer: "Mom's words tell about a strange noise in the garage. This starts a new problem, so the reader wants to find out what made the noise."
    }
  ],
  parent: "While you read together, stop at a line of dialogue or an action and ask, \"What does that show us about the character?\" On a walk, take turns describing a place with sounds and colors so the other person can picture it.",
  passages: [
    { id: "p1", title: "The Night the Lights Went Out", genre: "Literary text",
      paragraphs: [
        ["Thunder boomed over Atlanta, and rain beat against the apartment windows.", "Mateo was halfway through his favorite show when the screen went black.", "The whole room went dark."],
        ["\"Abuela!\" Mateo called.", "His voice came out high and squeaky.", "He pulled his blanket up to his chin."],
        ["Abuela shuffled in from the kitchen with a flashlight in one hand and her old guitar in the other.", "\"Well, the storm took our show,\" she said with a wink.", "\"So we will just make our own.\""],
        ["She stood the flashlight on the table so its light shone on the ceiling.", "Then she began to strum a song she used to sing as a girl in Puerto Rico."],
        ["Mateo tapped his feet to the beat.", "Soon he sang along, even louder than the thunder."],
        ["When the lights blinked back on, Mateo frowned.", "\"Can we keep them off a little longer?\" he asked."]
      ] },
    { id: "p2", title: "The Tallest Slide", genre: "Literary text",
      paragraphs: [
        ["The water park was loud and bright.", "Kids shrieked and splashed, and the hot sun sparkled on the blue pools."],
        ["Priya stood at the bottom of the Tallest Slide and looked up.", "The ladder seemed to go all the way to the clouds.", "She twisted the strap of her goggles around and around her finger."],
        ["\"You don't have to go,\" her brother Dev said.", "\"We can ride the lazy river instead.\""],
        ["Priya took a deep breath.", "\"No,\" she said.", "\"I came here to ride this slide, and I'm going to do it.\""],
        ["She climbed the ladder one step at a time without looking down.", "At the top, she sat, pinched her nose, and pushed off."],
        ["Whoosh!", "Priya splashed into the pool at the bottom.", "She popped up with a huge grin.", "\"Again!\" she shouted, already running back to the ladder."]
      ] }
  ],
  practice: [
    { id: "SK-TT1a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What does the description in paragraph 1 help the reader understand?",
      choices: [
        { text: "A strong storm is going on outside.", correct: true },
        { text: "Mateo is bored with his favorite show." },
        { text: "Abuela is busy cooking in the kitchen." },
        { text: "The apartment is far away from the city." }
      ],
      clue: "Description helps you picture the setting. Look for sound words and weather words in paragraph 1.",
      why: "The answer is \"A strong storm is going on outside.\" Thunder booms and rain beats against the windows, and then the power goes out. Mateo is watching his favorite show, so he is not bored, and the story says the apartment is in Atlanta." },
    { id: "SK-TT1a-P2", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does Mateo feel when the lights first go out?",
        choices: [
          { text: "He feels scared.", correct: true },
          { text: "He feels excited." },
          { text: "He feels sleepy." },
          { text: "He feels angry." }
        ] },
      partB: { prompt: "Which TWO sentences from the story best support the answer to Part A?", pick: 2,
        choices: [
          { text: "\"His voice came out high and squeaky.\"", correct: true },
          { text: "\"He pulled his blanket up to his chin.\"", correct: true },
          { text: "\"The whole room went dark.\"" },
          { text: "\"Mateo tapped his feet to the beat.\"" },
          { text: "\"Soon he sang along, even louder than the thunder.\"" }
        ] },
      clue: "The writer does not say how Mateo feels. Look at paragraph 2 for what his voice and his body do right after the room goes dark.",
      why: "Part A: He feels scared. Part B: \"His voice came out high and squeaky.\" and \"He pulled his blanket up to his chin.\" A squeaky voice and pulling the blanket up to his chin show fear. The room going dark is the setting, not Mateo's feeling, and tapping and singing happen later, when he is having fun." },
    { id: "SK-TT1a-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What do Abuela's words in paragraph 3 show about her?",
      choices: [
        { text: "She stays calm and turns the problem into fun.", correct: true },
        { text: "She is upset that the storm ruined the show." },
        { text: "She wants Mateo to go to bed right away." },
        { text: "She is worried about the loud thunder outside." }
      ],
      clue: "Read what Abuela says and how she says it. Then look at what she does next in paragraph 4.",
      why: "The answer is \"She stays calm and turns the problem into fun.\" She says it with a wink and plans to \"make our own\" show. Then she plays her guitar. She is not upset or worried, and she never tells Mateo to go to bed." },
    { id: "SK-TT1a-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each sentence from the story to the kind of detail it is.",
      cols: ["Dialogue", "Action", "Description"],
      rows: [
        { text: "\"So we will just make our own.\"", answer: 0 },
        { text: "Mateo tapped his feet to the beat.", answer: 1 },
        { text: "Thunder boomed over Atlanta, and rain beat against the apartment windows.", answer: 2 },
        { text: "He pulled his blanket up to his chin.", answer: 1 }
      ],
      clue: "Dialogue is in quotation marks. An action is something a character does. Description helps you picture the place.",
      why: "\"So we will just make our own\" is dialogue because Abuela says it. Tapping his feet and pulling up the blanket are actions because Mateo does them. Thunder and rain against the windows is description of the setting." },
    { id: "SK-TT1a-P5", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which line of dialogue shows that Mateo enjoyed the night with Abuela? Choose the sentence in the passage.",
      targets: ["p1:2:1", "p1:3:2", "p1:3:3", "p1:6:2"],
      answer: ["p1:6:2"], pick: 1,
      clue: "First, check who is speaking in each line. Then think about how Mateo feels at the end, when the lights come back on.",
      why: "The answer is the sentence where Mateo asks, \"Can we keep them off a little longer?\" Mateo wants the lights to stay off so the music can go on. That shows he had fun. The lines in paragraph 3 are Abuela's words, and \"Abuela!\" is Mateo calling for help when he is scared." }
  ],
  test: [
    { id: "SK-TT1a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What does the description in paragraph 1 show about the setting?",
      choices: [
        { text: "The water park is busy and sunny.", correct: true },
        { text: "The water park is quiet and empty." },
        { text: "The water park is cold and windy." },
        { text: "The water park is closed for rain." }
      ],
      clue: "Look for the sound words and the weather words in paragraph 1. What do they help you picture?",
      why: "The answer is \"The water park is busy and sunny.\" The park is loud, kids shriek and splash, and the hot sun sparkles on the pools." },
    { id: "SK-TT1a-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read paragraph 2. What does Priya's action of twisting her goggle strap around and around her finger show?",
      choices: [
        { text: "She feels nervous about the slide.", correct: true },
        { text: "She feels bored and wants to leave." },
        { text: "She is angry with her brother Dev." },
        { text: "She is sure the slide will be easy." }
      ],
      clue: "Look at what Priya sees just before she does this. Think about how you might feel standing there.",
      why: "The answer is \"She feels nervous about the slide.\" She looks up at a ladder that seems to reach the clouds, and she keeps twisting the strap. Dev has not even spoken yet, so she is not angry with him." },
    { id: "SK-TT1a-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How do Priya's feelings change from the beginning to the end of the story?",
        choices: [
          { text: "She starts out nervous and ends up excited.", correct: true },
          { text: "She starts out excited and ends up scared." },
          { text: "She starts out bored and ends up tired." },
          { text: "She starts out angry and ends up sad." }
        ] },
      partB: { prompt: "Which sentence from the story best shows how Priya feels at the end?",
        choices: [
          { text: "\"Again!\" she shouted, already running back to the ladder.", correct: true },
          { text: "Priya splashed into the pool at the bottom." },
          { text: "At the top, she sat, pinched her nose, and pushed off." },
          { text: "She climbed the ladder one step at a time without looking down." }
        ] },
      clue: "Compare how Priya acts at the bottom of the slide with how she acts after her ride. Then find the sentence where her words and actions show the new feeling.",
      why: "Part A: She starts out nervous and ends up excited. Part B: \"Again!\" she shouted, already running back to the ladder. Shouting \"Again!\" and running back show she loved the ride. The other three sentences tell what Priya does on the slide, not how she feels about it." },
    { id: "SK-TT1a-T4", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence uses description to show how tall and scary the slide looks to Priya? Choose the sentence in the passage.",
      targets: ["p2:1:1", "p2:1:2", "p2:2:1", "p2:2:2", "p2:2:3"],
      answer: ["p2:2:2"], pick: 1,
      clue: "Description helps you picture something. Find the sentence that tells how something looks to Priya, not what she does.",
      why: "The answer is \"The ladder seemed to go all the way to the clouds.\" A ladder cannot really reach the clouds, but this description shows how high the slide feels to Priya." },
    { id: "SK-TT1a-T5", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "Why does the author include Dev's words in paragraph 3?",
      choices: [
        { text: "They give Priya an easy way out of riding the slide.", correct: true },
        { text: "They show that Dev is afraid of the tall slide." },
        { text: "They explain how to ride the lazy river safely." },
        { text: "They tell the reader that the park is closing." }
      ],
      clue: "Think about the choice Priya has to make after Dev speaks. How do his words set up what she says next?",
      why: "The answer is \"They give Priya an easy way out of riding the slide.\" Dev tells her she does not have to go, so Priya must choose. When she says \"No,\" the reader sees how determined she is. Dev never says he is afraid." },
    { id: "SK-TT1a-T6", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Match each sentence from the story to the kind of detail it is.",
      cols: ["Dialogue", "Action", "Description"],
      rows: [
        { text: "\"We can ride the lazy river instead.\"", answer: 0 },
        { text: "Priya stood at the bottom of the Tallest Slide and looked up.", answer: 1 },
        { text: "The water park was loud and bright.", answer: 2 },
        { text: "Priya took a deep breath.", answer: 1 }
      ],
      clue: "Dialogue is in quotation marks. An action is something a character does. Description helps you picture the place.",
      why: "\"We can ride the lazy river instead\" is dialogue because Dev says it. Standing at the bottom and looking up, and taking a deep breath, are actions because Priya does them. \"The water park was loud and bright\" is description of the setting." }
  ]
});
PP.addLesson({
  code: "3.T.T.1.b",
  codes: ["3.T.T.1.b", "3.T.SS.1.a"],
  title: "Story elements: characters, setting, problem and solution",
  clues: {
    words: ["one day", "but", "then", "so", "finally", "in the end"],
    ask: "Who is the story about, and where are they?",
    draw: "A story map: six boxes down the page for Character, Setting, Problem, Events, Solution and Lesson."
  },
  coach: {
    mixup: "Children often name the first thing that happens as the problem. The problem is what the rest of the story is about fixing. Test it: \"Is the whole story about fixing that?\"",
    strong: "\"Leo's kite is stuck in a tree, but he can't reach it, so his sister lifts him up and he pulls it free.\" The answer names the problem and how it gets fixed.",
    notyet: "\"Leo is at the park.\" That is the setting, not the problem. Ask: \"What goes wrong for Leo?\"",
    ido: "Read a short story aloud. When you reach the word but, stop and say: \"But is my clue. What comes after it is the problem. Now I know the rest of the story will be about fixing this.\"",
    wedo: "Read the next part together. Ask, \"What did the character try? Did that try work? How do you know?\" Your child points to the clue word that shows it, like but, so or finally.",
    youdo: "Your child fills in a story map on their own: Character, Setting, Problem, Events, Solution and Lesson. Check it afterward, not while they work.",
    everyday: "After any movie or TV show, ask: \"What was the problem? What did they try first? How did it end?\" Sports work too: a close game has a problem (losing) and a solution (the comeback)."
  },
  teach: {
    big: "Most stories have four parts: who it is about, where and when it happens, the problem, and how the problem gets solved.",
    points: [
      "Characters are the people or animals in the story. The main character is the one the story is mostly about.",
      "The setting is where and when the story happens, like a farm on a rainy morning.",
      "The problem is what goes wrong or what a character wants but cannot get yet.",
      "The solution is how the problem is fixed by the end. Look near the end of the story to find it.",
      "Clue words help you follow a story. One day often starts the action. But often shows the problem. Then and so show what the character tries. Finally and in the end lead you to the solution.",
      "Sum up any story with five words: Somebody, Wanted, But, So, Then. Somebody is the main character. Wanted is what that character wants. But is the problem. So is what the character does about it. Then is how it ends."
    ],
    words: [
      { term: "character", means: "a person or animal in a story" },
      { term: "setting", means: "where and when a story happens" },
      { term: "problem", means: "the trouble a character has to fix" },
      { term: "solution", means: "how the trouble gets fixed" }
    ],
    example: {
      label: "Example",
      lines: ["On Saturday morning at the park, Leo's kite got stuck high in an oak tree. Leo jumped, but he could not reach it. Then his sister held him up on her shoulders. In the end, Leo pulled the kite free."],
      note: "Character: Leo (and his sister). Setting: the park on Saturday morning. Problem: the kite is stuck in a tree, and the clue word but shows it. Solution: his sister lifts him up so he can reach it. The clue words then and in the end lead you to it."
    },
    tip: "On the test, a question about the problem often asks what a character wants or what goes wrong. Find the part of the story where things change."
  },
  learn: [
    {
      show: ["Maya wanted to win the school spelling bee, but she kept missing long words. So every night that week, she practiced ten hard words with her grandpa. Then on Friday, she spelled every word right. In the end, she won a blue ribbon."],
      ask: "Sum up the story with Somebody, Wanted, But, So, Then.",
      steps: [
        "Somebody: who is the story about? Maya. Wanted: what does she want? To win the spelling bee.",
        "But: find the clue word but. What comes after it is the problem. She keeps missing long words.",
        "So: what does Maya do about the problem? She practices ten hard words every night with her grandpa.",
        "Then: how does it end? Look for then and in the end. She spells every word right and wins a blue ribbon."
      ],
      answer: "Maya wanted to win the spelling bee, but she kept missing long words, so she practiced every night with her grandpa. Then she spelled every word right and won."
    },
    {
      show: ["The snow was so deep on the mountain road that the bus could not move. Inside, Mr. Diaz handed out crackers while the children sang songs. Two hours later, a snowplow cleared the road, and the bus rolled on to the ski lodge."],
      ask: "What is the setting of this story?",
      steps: [
        "The setting tells where. Look for place words: the mountain road, inside the bus.",
        "The setting also tells when. Look for clues about time or weather: deep snow, so it is winter.",
        "Put the where and the when together."
      ],
      answer: "A bus on a snowy mountain road in winter."
    }
  ],
  parent: "After any story you read together, ask four quick questions: Who is it about? Where and when does it happen? What goes wrong? How does it get fixed? Let your child point to the sentences that show each answer.",
  passages: [
    { id: "p1", title: "The Garden Gate", genre: "Literary text",
      paragraphs: [
        ["Every summer, Grandma Bea grew tomatoes behind her house in Macon.", "This year, Jada was old enough to help."],
        ["One morning, Jada ran outside with the watering can and stopped.", "Half of the little tomatoes were gone.", "Tiny footprints crossed the soft dirt."],
        ["\"Rabbits,\" Grandma Bea sighed.", "\"They squeeze under the gate at night.\""],
        ["Jada thought about it all day.", "Then she had an idea.", "She found an old piece of wire fence in the shed and asked Grandma to help her bend it along the bottom of the gate."],
        ["The next morning, Jada checked the garden first thing.", "Every tomato was still on its vine.", "The footprints stopped right at the wire."],
        ["\"You solved it,\" Grandma Bea said, and she handed Jada the first red tomato of the year."]
      ] },
    { id: "p2", title: "The Lost Library Book", genre: "Literary text",
      paragraphs: [
        ["It was Thursday afternoon, and Omar's library book was due the next day.", "He looked in his backpack.", "He looked under his bed.", "He asked his little sister, Lina, but she had not seen it.", "The book was not anywhere."],
        ["\"Where did you read it last?\" his dad asked.", "Omar closed his eyes and thought.", "He had read it on the porch swing while it rained on Tuesday."],
        ["Omar hurried outside.", "There, tucked under the swing's cushion, was the book.", "It was a little damp but not ruined."],
        ["Omar dried it with a towel and set it on top of his shoes so he would not forget it.", "On Friday morning, he handed it to Ms. Park at the library desk right on time."]
      ] }
  ],
  practice: [
    { id: "SK-TT1b-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "Where does this story take place?",
      choices: [
        { text: "in a garden behind Grandma Bea's house", correct: true },
        { text: "in a shed full of old tools" },
        { text: "at a farm stand in the city" },
        { text: "in Jada's classroom at school" }
      ],
      clue: "The setting is where the story happens. Look at the first paragraph and at where Jada goes each morning.",
      why: "The answer is in a garden behind Grandma Bea's house. Paragraph 1 says Grandma Bea grows tomatoes behind her house, and Jada goes out to that garden each morning. The shed is only where Jada finds the wire." },
    { id: "SK-TT1b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What is the main problem in the story?",
      choices: [
        { text: "Rabbits are eating the tomatoes at night.", correct: true },
        { text: "Jada is too young to help in the garden." },
        { text: "The watering can is missing from the shed." },
        { text: "Grandma Bea cannot find her garden gate." }
      ],
      clue: "The problem is what goes wrong. Find the part where Jada stops and looks surprised.",
      why: "The answer is \"Rabbits are eating the tomatoes at night.\" In paragraphs 2 and 3, half the tomatoes are gone and Grandma Bea says rabbits squeeze under the gate at night." },
    { id: "SK-TT1b-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read this sentence from paragraph 4. \"Then she had an idea.\" What does the clue word Then tell the reader?",
      choices: [
        { text: "Jada is about to try a way to fix the problem.", correct: true },
        { text: "The problem in the story is just starting now." },
        { text: "The problem has already been fixed for good." },
        { text: "A new character is about to join the story." }
      ],
      clue: "Read what comes right before this sentence and right after it. Has the trouble already started? What happens next?",
      why: "The answer is \"Jada is about to try a way to fix the problem.\" Then is a clue word that moves the story to the next event. Before it, the rabbits have already eaten half the tomatoes, so the problem has started. After it, Jada acts on her idea. That is her try to fix the problem." },
    { id: "SK-TT1b-P3", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence tells how Jada solves the problem? Choose the sentence in the passage.",
      targets: ["p1:4:1", "p1:4:2", "p1:4:3", "p1:5:1", "p1:5:2"],
      answer: ["p1:4:3"], pick: 1,
      clue: "The solution is the action that fixes the problem. Find what Jada does, not what she thinks or sees.",
      why: "The answer is \"She found an old piece of wire fence in the shed and asked Grandma to help her bend it along the bottom of the gate.\" The wire blocks the rabbits, so the tomatoes are safe." },
    { id: "SK-TT1b-P4", type: "order", points: 2, dok: 2, passages: ["p1"],
      prompt: "Put the events of the story in order.",
      steps: [
        "Jada finds half of the tomatoes gone.",
        "Grandma Bea says rabbits come under the gate.",
        "Jada puts wire along the bottom of the gate.",
        "Every tomato is still on its vine."
      ],
      clue: "A story moves from the problem to the solution. Start with what goes wrong, and end with how things turn out.",
      why: "The order is: Jada finds half the tomatoes gone, Grandma Bea says rabbits come under the gate, Jada puts wire along the gate, and then every tomato is still on its vine. That is problem, cause, solution, result." },
    { id: "SK-TT1b-P5", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each detail from the story to the story part it shows.",
      cols: ["Character", "Setting", "Problem", "Solution"],
      rows: [
        { text: "Grandma Bea", answer: 0 },
        { text: "behind a house in Macon in summer", answer: 1 },
        { text: "Rabbits squeeze under the gate at night.", answer: 2 },
        { text: "wire bent along the bottom of the gate", answer: 3 }
      ],
      clue: "Ask four questions: Who? Where and when? What goes wrong? How is it fixed?",
      why: "Grandma Bea is a character. Behind a house in Macon in summer is the setting. Rabbits squeezing under the gate is the problem. The wire along the gate is the solution." }
  ],
  test: [
    { id: "SK-TT1b-T1", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "Who is the main character in this story?",
      choices: [
        { text: "Omar", correct: true },
        { text: "Omar's dad" },
        { text: "Ms. Park" },
        { text: "Omar's sister, Lina" }
      ],
      clue: "The main character is the one the story is mostly about. Who has the problem?",
      why: "The answer is Omar. The story follows Omar as he looks for his book, finds it and returns it. His dad, his sister Lina and Ms. Park appear only for a moment." },
    { id: "SK-TT1b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What problem does Omar have?",
      choices: [
        { text: "He cannot find a library book that is due the next day.", correct: true },
        { text: "He does not want to finish reading his library book." },
        { text: "Rain on the porch has ruined his library book." },
        { text: "The library will be closed when the book is due." }
      ],
      clue: "Look at paragraph 1. What is wrong, and why does it matter now?",
      why: "The answer is \"He cannot find a library book that is due the next day.\" Paragraph 1 says the book is due the next day and is not anywhere. The book gets damp but is not ruined." },
    { id: "SK-TT1b-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does Omar solve his problem?",
        choices: [
          { text: "He remembers where he last read the book and looks there.", correct: true },
          { text: "He asks Ms. Park at the library to give him more time." },
          { text: "He buys a new copy of the same book at a store in town." },
          { text: "His dad helps him look for the book under his bed." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"He had read it on the porch swing while it rained on Tuesday.\"", correct: true },
          { text: "\"He looked under his bed.\"" },
          { text: "\"It was a little damp but not ruined.\"" },
          { text: "\"It was Thursday afternoon, and Omar's library book was due the next day.\"" }
        ] },
      clue: "Part A asks how the problem gets fixed. Find what Omar does that leads him to the book. Then choose the sentence that shows that step.",
      why: "Part A: He remembers where he last read the book and looks there. Part B: \"He had read it on the porch swing while it rained on Tuesday.\" Remembering the porch swing sends him outside, where he finds the book under the cushion." },
    { id: "SK-TT1b-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which words best describe the setting at the start of the story?",
      choices: [
        { text: "Omar's home on a Thursday afternoon", correct: true },
        { text: "the school library on a Friday morning" },
        { text: "a porch swing on a rainy Tuesday" },
        { text: "Ms. Park's desk after school" }
      ],
      clue: "The question says \"at the start.\" Read the first paragraph for when and where.",
      why: "The answer is Omar's home on a Thursday afternoon. Paragraph 1 says it is Thursday afternoon, and Omar searches his backpack and under his bed at home. The porch swing on Tuesday is only something he remembers." },
    { id: "SK-TT1b-T5", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Match each detail to the story part it shows.",
      cols: ["Character", "Problem", "Solution"],
      rows: [
        { text: "Omar's dad", answer: 0 },
        { text: "The book is not anywhere.", answer: 1 },
        { text: "Omar finds the book.", answer: 2 }
      ],
      clue: "Ask three questions: Who is in the story? What goes wrong? How is it fixed?",
      why: "Omar's dad is a character. The book not being anywhere is the problem. Finding the book is the solution, because it fixes the problem." }
  ]
});
PP.addLesson({
  code: "3.T.T.1.c",
  title: "Characters and the story's lesson",
  clues: {
    words: ["so", "but", "in the end"],
    ask: "Why did the character do that, and what did they learn in the end?",
    draw: "A story map: six boxes down the page for Character, Setting, Problem, Events, Solution and Lesson. Fill in the Lesson box last."
  },
  teach: {
    big: "What characters are like, what they want and how they change can teach me the lesson of the story.",
    points: [
      "A trait is what a character is like on the inside, such as kind, bossy, brave or honest. You figure it out from what the character says and does.",
      "Feelings and thoughts can change during a story. Look for clues like a red face or a big grin, and notice what a character thinks about. Thoughts can explain why a character makes a choice.",
      "A motive is the reason a character does something. Ask: Why did they do that? What do they want? The clue word so often links a reason to a choice, and but often shows a feeling or a plan starting to change.",
      "The lesson, or central message, is what the character learns and what the story teaches you. Look at how the character changes and what happens because of their choices. Words like in the end often lead you to it.",
      "A lesson works for anyone, like \"Telling the truth is better than hiding a mistake.\" It is not just what happened in the story."
    ],
    words: [
      { term: "trait", means: "what a character is like on the inside" },
      { term: "motive", means: "the reason a character does something" },
      { term: "central message", means: "the big lesson a story teaches" }
    ],
    example: {
      label: "Example",
      lines: ["Sam broke Mom's flower vase and hid the pieces. All day, his stomach hurt. At dinner, he told his mom the truth. She hugged him, and his stomach finally felt better."],
      note: "Sam's motive for hiding the vase: he did not want to get in trouble. His feeling: worried all day. His change: he tells the truth and feels better. The lesson: telling the truth is better than hiding a mistake."
    },
    tip: "The test often asks, \"What is the central message?\" or \"How do the character's actions help show the lesson?\" Pick a lesson that fits the whole story, not just one part."
  },
  learn: [
    {
      show: ["Every morning, Rosa saved half of her toast for the ducks at the pond. When one little duck could not push past the big ones, she tossed a piece right in front of it."],
      ask: "What trait does Rosa show?",
      steps: [
        "List what Rosa does. She saves her toast for the ducks, and she makes sure the little duck gets some.",
        "Ask what kind of person acts like that.",
        "Check that the trait fits both actions, not just one."
      ],
      answer: "Rosa is kind and caring. She shares her food and makes sure even the smallest duck gets a piece."
    },
    {
      show: ["Jamal practiced free throws in his driveway every night until dark. In the last game, he had missed two shots, and his team lost by one point."],
      ask: "Why does Jamal practice so hard?",
      steps: [
        "A motive is a reason. Look for what happened before Jamal started practicing.",
        "He missed two shots, and his team lost by just one point.",
        "Connect the two: what does Jamal want to happen next time?"
      ],
      answer: "He wants to make his shots next time, because his missed shots cost his team the last game."
    },
    {
      show: ["Lena wanted to win the art contest, so she copied a drawing from a book. Her friend Kwame drew his own dog, even though the lines were wobbly. The judge picked Kwame's picture because it was full of his own ideas. On the way home, Lena decided her next picture would be all hers."],
      ask: "What lesson does this story teach?",
      steps: [
        "Find what Lena wants and what choice she makes. She wants to win, so she copies.",
        "Find what happens because of that choice. Kwame's own drawing wins, not her copy.",
        "Find how Lena changes at the end. Then say the lesson in a way that works for anyone."
      ],
      answer: "Your own ideas are worth more than copying someone else's."
    }
  ],
  parent: "After a story or a show, ask, \"Why did that character do that?\" and \"What did they learn?\" Then ask your child to name one thing from the story that proves it.",
  passages: [
    { id: "p1", title: "The Extra Change", genre: "Literary text",
      paragraphs: [
        ["Marisol had saved her money for weeks.", "On Saturday, she and her dad walked to the farmers market in Athens to buy a peach pie for Grandma's birthday."],
        ["At the pie stand, Marisol handed Mr. Okafor a ten-dollar bill.", "He was busy talking to three customers at once.", "He dropped some coins and bills into her hand without looking."],
        ["As they walked away, Marisol counted the money.", "Her eyes grew wide.", "Mr. Okafor had given her five dollars too much!"],
        ["\"Now I can buy the sketchbook at the art table,\" she whispered.", "She had wanted that sketchbook all summer."],
        ["But with every step, the money felt heavier in her pocket.", "She thought about Mr. Okafor working hard in the hot sun.", "At the end of the day, his money would come up short."],
        ["Marisol turned around and walked back to the pie stand.", "\"You gave me too much change,\" she said, holding out the five dollars."],
        ["Mr. Okafor's face broke into a smile.", "\"Not many people would come back,\" he said.", "\"Thank you for being honest.\""],
        ["Marisol did not get the sketchbook that day.", "But as she carried the pie home, she felt proud all the way."]
      ] },
    { id: "p2", title: "The Bridge Contest", genre: "Literary text",
      paragraphs: [
        ["Theo and Amara were partners for the class bridge contest.", "Each team had to build a bridge out of craft sticks that could hold a cup of marbles."],
        ["\"I know exactly what to do,\" Theo said.", "He grabbed the glue before Amara could say a word.", "When she started to share her idea, he waved his hand.", "\"I've got this,\" he told her."],
        ["Theo built a long, flat bridge.", "Amara watched quietly and drew triangles in her notebook."],
        ["On test day, Ms. Ruiz set the cup of marbles on Theo's bridge.", "Crack!", "The middle snapped, and marbles rolled across the floor."],
        ["Theo's cheeks turned red.", "He stared at the broken sticks.", "Then he looked at Amara's notebook."],
        ["\"What were you going to tell me before?\" he asked.", "Amara showed him her drawing.", "\"Triangles make a bridge stronger,\" she said."],
        ["Ms. Ruiz gave them one more day.", "This time, Theo listened while Amara explained, and they built the bridge together."],
        ["The next afternoon, their new bridge held the cup of marbles, and then a second cup, too.", "Theo grinned at his partner.", "\"Your idea was the best part,\" he said."]
      ] }
  ],
  practice: [
    { id: "SK-TT1c-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does Marisol want to keep the extra money at first?",
      choices: [
        { text: "She wants to buy a sketchbook she has wanted all summer.", correct: true },
        { text: "She wants to buy a second pie for Grandma's birthday." },
        { text: "She thinks Mr. Okafor meant to give it to her as a gift." },
        { text: "She needs it to pay her dad back for the peach pie." }
      ],
      clue: "A motive is a reason. Read paragraph 4 to find what Marisol says she can do now.",
      why: "The answer is \"She wants to buy a sketchbook she has wanted all summer.\" In paragraph 4 she whispers that now she can buy the sketchbook, and the story says she wanted it all summer. Mr. Okafor gave too much by mistake, not as a gift." },
    { id: "SK-TT1c-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence shows the moment Marisol's feelings about the money begin to change? Choose the sentence in the passage.",
      targets: ["p1:3:2", "p1:4:1", "p1:5:1", "p1:6:1", "p1:8:2"],
      answer: ["p1:5:1"], pick: 1,
      clue: "First Marisol is excited about the money. Look for the first sentence where the money starts to feel like a bad thing to have.",
      why: "The answer is \"But with every step, the money felt heavier in her pocket.\" Five dollars is not really heavy. The money feels heavy because Marisol feels bad about keeping it. The word But shows that her feelings are turning around." },
    { id: "SK-TT1c-P3", type: "mc", points: 1, dok: 3, passages: ["p1"],
      prompt: "How do Marisol's thoughts in paragraph 5 help show the lesson of the story?",
      choices: [
        { text: "They show she cares that keeping the money hurts Mr. Okafor.", correct: true },
        { text: "They show she is tired from walking around the market." },
        { text: "They show she is afraid that she will lose the money." },
        { text: "They show she wishes Mr. Okafor would give her more." }
      ],
      clue: "Read what Marisol thinks about in paragraph 5. Who is she thinking about, and what would happen to him?",
      why: "The answer is \"They show she cares that keeping the money hurts Mr. Okafor.\" She thinks about Mr. Okafor working hard in the sun and coming up short at the end of the day. Thinking about him is what makes her choose to be honest." },
    { id: "SK-TT1c-P4", type: "ms", points: 2, dok: 2, passages: ["p1"], pick: 2,
      prompt: "Which TWO words best describe Marisol by the end of the story?",
      choices: [
        { text: "honest", correct: true },
        { text: "thoughtful", correct: true },
        { text: "greedy" },
        { text: "careless" },
        { text: "shy" }
      ],
      clue: "A trait comes from what a character does and thinks. Look at what Marisol thinks about and what she chooses to do in paragraphs 5 and 6.",
      why: "The answers are honest and thoughtful. She gives back money that was not hers, which is honest. She thinks about how Mr. Okafor would come up short, which is thoughtful. She wants to keep the money for a moment, but she does not, so greedy does not fit her by the end." },
    { id: "SK-TT1c-P5", type: "order", points: 1, dok: 2, passages: ["p1"],
      prompt: "Put Marisol's feelings in the order they happen in the story.",
      steps: [
        "Marisol is excited that she can buy the sketchbook.",
        "Marisol feels uneasy about keeping the money.",
        "Marisol feels proud of what she did."
      ],
      clue: "Feelings change as the story moves along. Find a feeling near the beginning, one in the middle and one at the end.",
      why: "The order is: Marisol is excited that she can buy the sketchbook, then she feels uneasy about keeping the money, then she feels proud of what she did. Her feelings change because of the choice she makes." },
    { id: "SK-TT1c-P6", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the central message of the story?",
        choices: [
          { text: "Being honest is right, even when it costs you.", correct: true },
          { text: "Saving up money for weeks takes hard work." },
          { text: "Farmers markets are a fun place to shop." },
          { text: "Buying gifts for family shows you care." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"But as she carried the pie home, she felt proud all the way.\"", correct: true },
          { text: "\"Marisol had saved her money for weeks.\"" },
          { text: "\"He was busy talking to three customers at once.\"" },
          { text: "\"He dropped some coins and bills into her hand without looking.\"" }
        ] },
      clue: "The central message comes from Marisol's big choice and how she feels after it. Pick a lesson about the whole story, then find the sentence that shows how her choice turned out.",
      why: "Part A: Being honest is right, even when it costs you. Part B: \"But as she carried the pie home, she felt proud all the way.\" Marisol gives up the sketchbook, but she feels proud, which shows honesty was worth it. The other sentences tell about saving money and how the mistake happened. They do not show how Marisol's honest choice turned out." }
  ],
  test: [
    { id: "SK-TT1c-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which word best describes Theo at the beginning of the story?",
      choices: [
        { text: "bossy", correct: true },
        { text: "shy" },
        { text: "patient" },
        { text: "careful" }
      ],
      clue: "Look at what Theo says and does in paragraph 2. How does he treat Amara when she tries to talk?",
      why: "The answer is bossy. Theo grabs the glue before Amara can speak, waves his hand when she tries to share, and says, \"I've got this.\" He takes over and does not let her help." },
    { id: "SK-TT1c-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "How does Theo feel when his bridge breaks?",
      choices: [
        { text: "embarrassed", correct: true },
        { text: "proud" },
        { text: "excited" },
        { text: "bored" }
      ],
      clue: "The writer does not name the feeling. Look at paragraph 5 for what happens to Theo's face and where he looks.",
      why: "The answer is embarrassed. Theo's cheeks turn red and he stares at the broken sticks after he told Amara, \"I've got this.\" His plan failed right after he told Amara he had it under control." },
    { id: "SK-TT1c-T3", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Why does Theo ask Amara, \"What were you going to tell me before?\"",
      choices: [
        { text: "He thinks her idea might help fix the bridge.", correct: true },
        { text: "He wants to blame her for the broken bridge." },
        { text: "He wants her to pick up the spilled marbles." },
        { text: "He forgot the rules of the bridge contest." }
      ],
      clue: "Look at what Theo looks at just before he asks. What does he hope to find out?",
      why: "The answer is \"He thinks her idea might help fix the bridge.\" After his bridge breaks, he looks at Amara's notebook and remembers she had an idea. Her idea about triangles is what helps them build a stronger bridge." },
    { id: "SK-TT1c-T4", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the central message of the story?",
        choices: [
          { text: "Listening to others can make your work better.", correct: true },
          { text: "Building a bridge is harder than it looks." },
          { text: "It is best to do every job all by yourself." },
          { text: "Winning a contest is the most important thing." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Your idea was the best part,\" he said.", correct: true },
          { text: "\"I know exactly what to do,\" Theo said." },
          { text: "Theo built a long, flat bridge." },
          { text: "The middle snapped, and marbles rolled across the floor." }
        ] },
      clue: "Think about how Theo changes. What does he do differently the second time, and how does it turn out?",
      why: "Part A: Listening to others can make your work better. Part B: \"Your idea was the best part,\" he said. When Theo listens to Amara, their bridge holds two cups of marbles, and he says her idea was the best part. Doing it all himself is what made the first bridge fail." },
    { id: "SK-TT1c-T5", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Match each action to when Theo does it in the story.",
      cols: ["Before the bridge breaks", "After the bridge breaks"],
      rows: [
        { text: "He waves his hand when Amara tries to share.", answer: 0 },
        { text: "He listens while Amara explains her idea.", answer: 1 },
        { text: "He grabs the glue before Amara can speak.", answer: 0 },
        { text: "He tells Amara her idea was the best part.", answer: 1 }
      ],
      clue: "Theo changes in the middle of the story. Ask: is this how the old Theo acts, or the new Theo?",
      why: "Before the bridge breaks, Theo waves his hand at Amara and grabs the glue before she can speak. After it breaks, he listens to her idea and tells her it was the best part. The change in Theo is what teaches the lesson." }
  ]
});
PP.addLesson({
  code: "3.T.T.1.d",
  title: "Compare two stories",
  clues: {
    words: ["both", "alike", "same", "but", "however", "unlike", "different", "while"],
    ask: "How are they the same? How are they different?",
    draw: "Three columns: Story 1 only | Both | Story 2 only. Or a Venn diagram, two overlapping circles."
  },
  coach: {
    mixup: "\"But\" is used for many things. When you compare two stories, it signals a difference between them. Inside one story, it often signals a try that didn't work. Ask: \"Is this 'but' showing something that's different, or something that didn't work?\"",
    strong: "\"Both Kai and Greta keep trying after their work gets knocked down, but Kai is on a sunny beach and Greta is in a snowy yard.\" One way alike, one way different, with a clue word.",
    notyet: "Facts about only one of the stories, or only differences. Ask: \"What do they BOTH have?\"",
    ido: "Hold up two things, like a fork and a spoon. Say, \"Both are for eating. But a fork has points and a spoon is round.\"",
    wedo: "Read two short stories together. Sort what you notice about the characters, settings and lessons into Alike or Different, and point to the clue words as you go.",
    youdo: "Your child fills in the three columns (Story 1 only, Both, Story 2 only) on their own. Check it afterward, not while they work.",
    everyday: "Compare anything: two teams, two games, two movies, two pets. Ask for one way they're alike and one way they're different."
  },
  teach: {
    big: "When I compare two stories, I look at the same parts in both, like the characters, settings and lessons, and tell how they are alike and how they are different.",
    points: [
      "Compare means tell how things are alike. Contrast means tell how they are different. Clue words like both, alike and same show how things are alike. Words like but, however, unlike, different and while show how they are different.",
      "Look at the same part in both stories. Who is the main character? Where does it happen? What events happen, and what is the problem? What is the lesson?",
      "Two stories can have very different characters and settings but teach the same lesson.",
      "Stories from different places and cultures can show people who feel and learn the same things.",
      "Keep a chart in your head with two sides: same and different."
    ],
    words: [
      { term: "compare", means: "tell how things are alike" },
      { term: "contrast", means: "tell how things are different" },
      { term: "central message", means: "the big lesson a story teaches" }
    ],
    example: {
      label: "Two tiny stories",
      lines: [
        "Story 1: On a busy city street, Ava shares her umbrella with a boy who forgot his.",
        "Story 2: On a cold farm, a goat moves over so a shivering lamb can share its warm spot in the hay."
      ],
      note: "Different: the characters (a girl and a goat) and the settings (a city street and a farm). Alike: both characters share with someone in need, so both stories teach that sharing helps others."
    },
    tip: "Paired passage questions often ask how two characters are alike or what lesson both stories teach. Before you choose, check that your answer is true for BOTH stories."
  },
  learn: [
    {
      show: [
        "Story 1: Kai built a sandcastle on a sunny beach in Hawaii. A wave knocked it down, so he built it again farther from the water.",
        "Story 2: Greta built a snow fort in her snowy yard in Minnesota. The wind blew one wall down, so she packed the snow tighter and built it again."
      ],
      ask: "How are Kai and Greta alike, and how are their settings different?",
      steps: [
        "Find what each character does when something goes wrong. Kai builds again. Greta builds again.",
        "That is how they are alike: neither one gives up.",
        "Now find each setting. Kai is on a warm, sunny beach. Greta is in a snowy yard."
      ],
      answer: "Kai and Greta both keep trying after their work gets knocked down. Kai is on a sunny beach, but Greta is in a snowy yard."
    },
    {
      show: [
        "Story 1: Two ants found a crumb too big for one ant to move. One pushed and one pulled, and they carried it home together.",
        "Story 2: Three brothers could not lift a heavy log. Then they counted to three and lifted at the same time, and up it came."
      ],
      ask: "What lesson do both stories teach?",
      steps: [
        "Find the lesson of Story 1. The ants move the crumb only when they work together.",
        "Find the lesson of Story 2. The brothers lift the log only when they all lift at once.",
        "Check that one lesson fits both stories."
      ],
      answer: "Both stories teach that working together lets you do things you cannot do alone."
    }
  ],
  parent: "After you read two stories or watch two shows, ask, \"How are the main characters alike? How are they different?\" Draw a quick two-column chart on paper and fill it in together.",
  passages: [
    { id: "p1", title: "Kofi's Mangoes", genre: "Literary text",
      paragraphs: [
        ["In Kofi's village in Ghana, the mango tree behind his house was the biggest one on the road.", "In the hot season, it grew more fruit than anyone could count."],
        ["Children often stopped by the fence.", "\"May we have a mango?\" they asked.", "\"No,\" Kofi said each time.", "\"They are all mine.\""],
        ["Kofi ate mangoes for breakfast, lunch and dinner.", "Still, there were too many.", "Soon the ripe fruit fell to the ground and turned brown and mushy.", "Flies buzzed around the tree."],
        ["Kofi frowned at the rotten fruit.", "The next morning, he filled a basket and carried it down the road.", "He gave a mango to every child he met."],
        ["That afternoon, his neighbor Ama brought him a bowl of warm groundnut soup.", "Her brother gave Kofi a whistle he had carved.", "Kofi smiled.", "Sharing his mangoes had filled his days with friends."]
      ] },
    { id: "p2", title: "The Red Sled", genre: "Literary text",
      paragraphs: [
        ["The first big snow of the year covered Pine Hill in Vermont.", "Lucy dragged her brand-new red sled to the top."],
        ["Her friends Ben and Sofia trudged up behind her.", "\"Can we take a turn?\" Sofia asked.", "Lucy held the rope tight.", "\"It's new,\" she said.", "\"I want it all to myself.\""],
        ["So Lucy rode down the hill alone.", "She rode again and again.", "At the bottom, there was no one to cheer, and at the top, there was no one to race.", "After a while, sledding did not feel fun at all."],
        ["Lucy pulled the sled over to her friends.", "\"Let's ride together,\" she said."],
        ["The three of them squeezed onto the red sled.", "They flew down the hill, laughing and shouting the whole way.", "It was the best ride of the day."]
      ] },
    { id: "p3", title: "The Smallest Fox", genre: "Literary text",
      paragraphs: [
        ["Long ago, in a snowy forest, there lived a fox named Pip.", "Pip was the smallest fox in his family.", "His big brothers liked to tease him.", "\"You are too tiny to help with anything,\" they said."],
        ["One day, Grandfather Fox dropped his smooth, shiny stone.", "It was his favorite treasure.", "The stone rolled down the hill and slid into a narrow crack between two rocks."],
        ["The big brothers pushed their paws into the crack.", "They pushed and pulled, but their paws were too wide.", "\"It's gone for good,\" they groaned."],
        ["Pip stepped forward.", "He slipped his thin little paw into the crack, wiggled it, and pulled out the stone."],
        ["Grandfather Fox held the stone close.", "\"Being small is what saved my treasure,\" he said."],
        ["From that day on, Pip's brothers never teased him again.", "Pip felt proud of being just the size he was."]
      ] },
    { id: "p4", title: "Ravi and the Kingfisher", genre: "Literary text",
      paragraphs: [
        ["Ravi was the quietest boy in his class in Chennai, India.", "He did not shout on the playground or chatter at lunch.", "\"Why don't you ever talk?\" the other kids asked.", "Ravi just shrugged."],
        ["One morning, the class took a trip to a bird park by a lake.", "The children ran along the path, laughing and calling to each other.", "Every time they came close, the birds flew away."],
        ["\"I haven't seen a single bird up close,\" Arjun complained."],
        ["Ravi sat down on a bench by the water and stayed very still.", "After a few minutes, a little bird with bright blue wings landed on a branch right next to him.", "It was a kingfisher!"],
        ["Ravi pointed without a sound.", "One by one, his classmates tiptoed over and sat beside him.", "Nobody spoke.", "They watched the kingfisher dive into the lake and come up with a tiny fish."],
        ["\"Ravi, you are a great bird watcher,\" said his teacher, Ms. Devi.", "\"Your quiet way helped all of us see.\"", "Ravi smiled.", "For the first time, he was glad to be the quiet one."]
      ] }
  ],
  practice: [
    { id: "SK-TT1d-P1", type: "mc", points: 1, dok: 2, passages: ["p1", "p2"],
      prompt: "How are Kofi and Lucy alike at the beginning of their stories?",
      choices: [
        { text: "They both refuse to share something they have.", correct: true },
        { text: "They both live in a place with cold weather." },
        { text: "They both are new kids in their neighborhood." },
        { text: "They both ask their friends for help with a job." }
      ],
      clue: "Read what each main character says when someone asks for something. Check that your answer is true for both Kofi and Lucy.",
      why: "The answer is \"They both refuse to share something they have.\" Kofi says the mangoes \"are all mine,\" and Lucy says she wants the sled \"all to myself.\" Only Lucy's story has cold weather. Kofi's is in the hot season." },
    { id: "SK-TT1d-P2", type: "mc", points: 1, dok: 2, passages: ["p1", "p2"],
      prompt: "How are the settings of the two stories different?",
      choices: [
        { text: "Kofi's story is in a hot village, and Lucy's is on a snowy hill.", correct: true },
        { text: "Kofi's story is in a big city, and Lucy's is on a quiet farm." },
        { text: "Kofi's story is at a school, and Lucy's is at a city park." },
        { text: "Kofi's story is on a beach, and Lucy's is in a pine forest." }
      ],
      clue: "Look at the first paragraph of each story. Find the place and the weather or season for each one.",
      why: "The answer is \"Kofi's story is in a hot village, and Lucy's is on a snowy hill.\" Kofi lives in a village in Ghana in the hot season. Lucy sleds on Pine Hill in Vermont after the first big snow." },
    { id: "SK-TT1d-P3", type: "match", points: 2, dok: 2, passages: ["p1", "p2"],
      prompt: "Match each detail to the story it is true for. Some details are true for both stories.",
      cols: ["Kofi's story", "Lucy's story", "Both stories"],
      rows: [
        { text: "Food goes to waste because it is not shared.", answer: 0 },
        { text: "Playing alone turns out to be no fun.", answer: 1 },
        { text: "The main character decides to share.", answer: 2 },
        { text: "Neighbors bring the main character gifts.", answer: 0 }
      ],
      clue: "For each detail, check the first story, then the second. If it happens in both, it goes in Both stories.",
      why: "Food going to waste and neighbors bringing gifts happen only in Kofi's story. Playing alone being no fun happens only in Lucy's story. In both stories, the main character decides to share." },
    { id: "SK-TT1d-P4", type: "ebsr", points: 2, dok: 3, passages: ["p1", "p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What lesson do BOTH stories teach?",
        choices: [
          { text: "Sharing with others can make life better.", correct: true },
          { text: "New things should be kept safe and clean." },
          { text: "Eating too much fruit can make you sick." },
          { text: "Playing outside is more fun in the winter." }
        ] },
      partB: { prompt: "Which TWO sentences, one from each story, best support the answer to Part A?", pick: 2,
        choices: [
          { text: "\"Sharing his mangoes had filled his days with friends.\"", correct: true },
          { text: "\"It was the best ride of the day.\"", correct: true },
          { text: "\"Flies buzzed around the tree.\"" },
          { text: "\"Lucy held the rope tight.\"" },
          { text: "\"The first big snow of the year covered Pine Hill in Vermont.\"" }
        ] },
      clue: "A lesson for both stories must fit Kofi AND Lucy. Look at how each story ends, after the main character changes.",
      why: "Part A: Sharing with others can make life better. Part B: \"Sharing his mangoes had filled his days with friends.\" and \"It was the best ride of the day.\" Both endings show that things got better after the character shared. The other choices fit only one story, or neither." },
    { id: "SK-TT1d-P5", type: "mc", points: 1, dok: 3, passages: ["p1", "p2"],
      prompt: "How is the way Kofi learns his lesson different from the way Lucy learns hers?",
      choices: [
        { text: "Kofi sees his fruit go to waste, but Lucy finds that sledding alone is no fun.", correct: true },
        { text: "Kofi's mother explains the lesson, but Lucy reads about it in a library book." },
        { text: "Kofi learns from his friend Ama, but Lucy learns it from her big brother Ben." },
        { text: "Kofi gets sick from eating mangoes, but Lucy gets hurt falling off her sled." }
      ],
      clue: "Find what goes wrong for each character just before they change their mind. Check each part of the choice against the story.",
      why: "The answer is \"Kofi sees his fruit go to waste, but Lucy finds that sledding alone is no fun.\" Kofi frowns at the rotten mangoes, and Lucy finds sledding is not fun with no one to cheer or race. Ama brings soup only after Kofi shares, and Ben is Lucy's friend, not her brother." }
  ],
  test: [
    { id: "SK-TT1d-T1", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "In what way are Pip and Ravi the same?",
      choices: [
        { text: "Each one uses what makes him different to help.", correct: true },
        { text: "Each one is the oldest child in his family." },
        { text: "Each one gets lost far away from his home." },
        { text: "Each one is the loudest one in his group." }
      ],
      clue: "Think about what makes each main character different from the others. Then look at how that difference helps in the story.",
      why: "The answer is \"Each one uses what makes him different to help.\" Pip's small paw gets the stone out of the crack. Ravi's quiet, still way lets the whole class see the kingfisher. Pip is the smallest, not the oldest, and Ravi is the quietest, not the loudest." },
    { id: "SK-TT1d-T2", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "Which sentence tells how the place in \"The Smallest Fox\" is different from the place in \"Ravi and the Kingfisher\"?",
      choices: [
        { text: "Pip's story is in a snowy forest, and Ravi's is at a bird park.", correct: true },
        { text: "Pip's story is in a busy city, and Ravi's is in a snowy forest." },
        { text: "Pip's story is on a sandy beach, and Ravi's is at a school." },
        { text: "Pip's story is in a fox's den, and Ravi's is in a classroom." }
      ],
      clue: "Look at the first sentence of \"The Smallest Fox\" and the first two paragraphs of \"Ravi and the Kingfisher.\" Where does the action happen?",
      why: "The answer is \"Pip's story is in a snowy forest, and Ravi's is at a bird park.\" Pip lives in a snowy forest, and the stone is lost among rocks there. Ravi's class takes a trip to a bird park by a lake, and the important part happens there, not in a classroom." },
    { id: "SK-TT1d-T3", type: "ebsr", points: 2, dok: 3, passages: ["p3", "p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What lesson do BOTH stories teach?",
        choices: [
          { text: "What makes you different can also make you special.", correct: true },
          { text: "Older family members always know the right answer." },
          { text: "It is important to be loud so others will listen." },
          { text: "Teasing others is a good way to help them grow." }
        ] },
      partB: { prompt: "Which TWO sentences, one from each story, best support the answer to Part A?", pick: 2,
        choices: [
          { text: "\"Pip felt proud of being just the size he was.\"", correct: true },
          { text: "\"For the first time, he was glad to be the quiet one.\"", correct: true },
          { text: "\"His big brothers liked to tease him.\"" },
          { text: "\"They pushed and pulled, but their paws were too wide.\"" },
          { text: "\"Every time they came close, the birds flew away.\"" }
        ] },
      clue: "Look at how each main character feels about himself at the very end. A lesson for both stories must fit Pip AND Ravi.",
      why: "Part A: What makes you different can also make you special. Part B: \"Pip felt proud of being just the size he was.\" and \"For the first time, he was glad to be the quiet one.\" Both characters end up glad about the very thing that made them different. The teasing and the birds flying away happen before the characters learn the lesson." },
    { id: "SK-TT1d-T4", type: "match", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Match each detail to the story it is true for. Some details are true for both stories.",
      cols: ["Pip's story", "Ravi's story", "Both stories"],
      rows: [
        { text: "The main character finds something that was lost.", answer: 0 },
        { text: "Staying still and silent helps the main character.", answer: 1 },
        { text: "Others point out how the main character is different.", answer: 2 },
        { text: "By the end, the main character feels good about himself.", answer: 2 }
      ],
      clue: "For each detail, check the first story, then the second. If it happens in both, it goes in Both stories.",
      why: "Only Pip finds something that was lost: Grandfather's stone. Only Ravi is helped by staying still and silent. In both stories, others point out the difference (\"too tiny\" and \"Why don't you ever talk?\"), and both characters feel good about themselves at the end." },
    { id: "SK-TT1d-T5", type: "mc", points: 1, dok: 3, passages: ["p3", "p4"],
      prompt: "How is the problem in Pip's story different from the problem in Ravi's story?",
      choices: [
        { text: "In Pip's story, a treasure is stuck, but in Ravi's, the birds keep flying away.", correct: true },
        { text: "In Pip's story, Pip gets lost, but in Ravi's, Ravi cannot find his teacher." },
        { text: "In Pip's story, the foxes are hungry, but in Ravi's, the class misses the bus." },
        { text: "In Pip's story, a storm is coming, but in Ravi's, Arjun falls into the lake." }
      ],
      clue: "Find what goes wrong in the middle of each story. Then check both halves of each choice against the stories.",
      why: "The answer is \"In Pip's story, a treasure is stuck, but in Ravi's, the birds keep flying away.\" Grandfather's stone is stuck in a crack, and the noisy children scare the birds away. None of the other problems happen in either story." }
  ]
});
PP.addLesson({
  code: "3.T.T.1.e",
  title: "Write a story: beginnings, dialogue, details and endings",
  teach: {
    big: "A good story has characters, a problem, events told in order, details that help the reader picture it, and an ending that wraps it up.",
    points: [
      "Start strong. Tell who the story is about and where it happens, and make the reader want to keep reading.",
      "Tell the events in order. Time words like first, then, after that and finally help the reader follow along.",
      "Use dialogue to show what characters feel and want. Put the exact words a character says inside quotation marks.",
      "Add details about what characters see, hear and feel. Show what is happening instead of just telling it.",
      "End by showing how the problem gets solved and how the character feels or what they learned."
    ],
    words: [
      { term: "narrative", means: "a story, real or made up" },
      { term: "dialogue", means: "the words characters say out loud" },
      { term: "time words", means: "words like first, next and finally that show the order of events" },
      { term: "ending", means: "the part that wraps up the story's problem" }
    ],
    example: {
      label: "Telling vs. showing",
      lines: [
        "Telling: Nia was scared of the dog.",
        "Showing: Nia froze. The big dog barked, and her knees began to shake."
      ],
      note: "The showing version uses actions and sounds, so the reader can feel how scared Nia is without being told."
    },
    tip: "On the Milestones, you may read a student's story draft and choose the best sentence to add: a better beginning, a line of dialogue, a detail or an ending. Pick the one that fits the characters and the events already in the draft."
  },
  learn: [
    {
      show: [
        "Draft: Jonah's kite got stuck high in a tree. His mom brought a ladder, and together they got it down.",
        "Ending 1: Kites can be made of paper or cloth.",
        "Ending 2: Jonah held the string tight and ran back to the field, grinning."
      ],
      ask: "Which ending wraps up the story better?",
      steps: [
        "Find the problem. The kite is stuck, and it gets fixed when Jonah and his mom get it down.",
        "A good ending stays with the character and shows how things turn out.",
        "Ending 1 is a fact about kites. It does not tell us anything about Jonah."
      ],
      answer: "Ending 2 is better. It shows Jonah happy and flying his kite again, so it wraps up the story."
    },
    {
      show: [
        "Then she stirred the batter until it was smooth.",
        "First, Mia cracked two eggs into a bowl.",
        "Finally, the pancakes sizzled in the hot pan."
      ],
      ask: "What order should these sentences go in?",
      steps: [
        "Look for time words: First, Then and Finally.",
        "First comes at the start and Finally comes at the end, so Then goes in the middle.",
        "Check that it makes sense: you crack eggs, then stir the batter, then cook it."
      ],
      answer: "First, Mia cracked two eggs into a bowl. Then she stirred the batter until it was smooth. Finally, the pancakes sizzled in the hot pan."
    },
    {
      show: ["Carlos and his dog, Max, were at the park. Max slipped out of his collar and ran off. Carlos looked everywhere."],
      ask: "What line of dialogue could you add to show how Carlos feels?",
      steps: [
        "Think about how Carlos feels. His dog is lost, so he is worried.",
        "Think about what a worried person would say or shout right then.",
        "Put his exact words in quotation marks, and tell who is speaking."
      ],
      answer: "\"Max! Where are you?\" Carlos called, his voice shaking."
    }
  ],
  write: {
    prompt: "Write a short story about a time something went wrong and a character found a way to fix it. It can be real or made up.",
    checklist: [
      "I started with a sentence that makes the reader want to keep reading.",
      "I told the events in order and used time words like first, then and finally.",
      "I used dialogue to show what a character said.",
      "I added details that help the reader see, hear or feel what happened.",
      "I ended by showing how the problem was solved and how the character felt."
    ],
    rows: 10
  },
  parent: "At dinner, take turns telling a short story about something that happened today: a beginning, a problem, what happened next and how it ended. Ask, \"What did someone say?\" to add dialogue.",
  passages: [
    { id: "p1", draft: true, title: "Peanut's Great Escape", byline: "Andre's first draft", genre: "Student draft (story)",
      paragraphs: [
        ["(1) This is a story about a hamster."],
        ["(2) On Friday afternoon, I opened the cage of our hamster, Peanut, to give him fresh water.", "(3) Just then, the phone rang, and I forgot to close the little door.", "(4) When I came back, the cage was empty.", "(5) My heart pounded, and I yelled for my big sister."],
        ["(6) Bree ran in from her room to help me.", "(7) We looked under the couch and behind the bookshelf.", "(8) Then we heard a crunching sound coming from the kitchen."],
        ["(9) We found Peanut sitting in an open bag of sunflower seeds on the bottom shelf of the pantry.", "(10) He looked nice."],
        ["(11) The end."]
      ] },
    { id: "p2", draft: true, title: "The Big Catch", byline: "Sofia's first draft", genre: "Student draft (story)",
      paragraphs: [
        ["(1) Early one Saturday, Aunt Rosa and I rowed a little green boat out onto Lake Lanier.", "(2) The water was calm and gray, and the air smelled like pine trees."],
        ["(3) I watched my red bobber float on the water, but for a whole hour, nothing bit my hook.", "(4) I was bored.", "(5) My cousin Luis plays soccer every Saturday at the park near his house."],
        ["(6) My bobber went under, and my fishing pole bent almost in half.", "(7) Aunt Rosa grabbed the net and yelled, \"Hold on tight, Sofia!\""],
        ["(8) I reeled and reeled until my arms burned and my hands felt sore.", "(9) At last, a fish as long as my arm splashed out of the water, its silver scales shining in the sun.", "(10) Aunt Rosa scooped it into the net, and we both cheered."]
      ] }
  ],
  practice: [
    { id: "SK-TT1e-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Andre wants a stronger beginning. Which sentence should replace sentence 1?",
      choices: [
        { text: "I never knew one tiny hamster could cause so much trouble.", correct: true },
        { text: "Hamsters are small animals that like to run on wheels." },
        { text: "This story is about my hamster and what he once did." },
        { text: "My sister Bree likes to read books up in her room." }
      ],
      clue: "A strong beginning fits the story and makes the reader curious about what will happen. Which choice makes you want to keep reading about Peanut?",
      why: "The answer is \"I never knew one tiny hamster could cause so much trouble.\" It hints at a problem and makes the reader wonder what Peanut did. The fact about hamsters is not part of the story, the sentence about \"what he once did\" is still flat, and Bree's books are off topic." },
    { id: "SK-TT1e-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Andre wants to add dialogue after sentence 6. Which sentence fits best?",
      choices: [
        { text: "\"Don't worry, Andre. We'll find him,\" Bree said.", correct: true },
        { text: "\"Look, Peanut is in the pantry!\" Bree said." },
        { text: "\"I'm going to make a snack now,\" Bree said." },
        { text: "\"Let's go play outside instead,\" Bree said." }
      ],
      clue: "The dialogue has to fit this exact moment. What do Andre and Bree know right after sentence 6, and what are they about to do?",
      why: "The answer is \"Don't worry, Andre. We'll find him,\" Bree said. Bree has just come to help, and they are about to search. Saying Peanut is in the pantry is out of order, because they do not find him until sentence 9. A snack or playing outside does not fit the problem." },
    { id: "SK-TT1e-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Sentence 10 does not help the reader picture Peanut. Which sentence should replace it?",
      choices: [
        { text: "His cheeks were stuffed so full they looked like two balloons.", correct: true },
        { text: "He was a very nice and very good little hamster that day." },
        { text: "Hamsters can carry extra food inside their cheek pouches." },
        { text: "He looked just the same as he always looked on other days." }
      ],
      clue: "A good detail shows exactly what the character looks like in this moment. Which sentence lets you see Peanut in the bag of seeds?",
      why: "The answer is \"His cheeks were stuffed so full they looked like two balloons.\" It shows Peanut has been eating the seeds, and the reader can picture it. \"Very nice\" and \"the same as always\" do not show anything. The cheek pouch fact is true, but it is about all hamsters, not about Peanut in this moment." },
    { id: "SK-TT1e-P4", type: "order", points: 2, dok: 2, passages: ["p1"],
      prompt: "Andre wants to add these sentences between sentence 8 and sentence 9. Put them in the order that makes the most sense.",
      steps: [
        "We tiptoed into the kitchen.",
        "Inside the kitchen, Bree pointed at the pantry door, which was open just a crack.",
        "I pulled the pantry door open all the way."
      ],
      clue: "Picture the children moving. Where do they have to be before they can see the door? What has to happen before the door can be opened?",
      why: "The order is: We tiptoed into the kitchen. Inside the kitchen, Bree pointed at the pantry door, which was open just a crack. I pulled the pantry door open all the way. They must reach the kitchen first, then spot the door, then open it and find Peanut." },
    { id: "SK-TT1e-P5", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      prompt: "Andre wants to add time words to sentences 7 and 9. Choose the best word or words for each blank.",
      text: "(7) {0} we looked under the couch and behind the bookshelf. (9) {1} we found Peanut sitting in an open bag of sunflower seeds.",
      slots: [
        { options: ["First,", "Finally,", "In the end,"], answer: 0 },
        { options: ["At last,", "Before that,", "First,"], answer: 0 }
      ],
      clue: "Read sentences 6 to 9 in order. For each blank, ask whether that sentence comes near the start of the search or after it is over. Then pick the time word that matches.",
      why: "Sentence 7 needs \"First,\" because it is the first place they search. Sentence 9 needs \"At last,\" because they finally find Peanut after a long search. Before that would put the events out of order." },
    { id: "SK-TT1e-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence should replace sentence 11 to give the story a better ending?",
      choices: [
        { text: "I hugged Peanut gently and promised to always close his door.", correct: true },
        { text: "Then the phone rang again, and I ran to answer it right away." },
        { text: "Hamsters like to sleep in the day and play during the night." },
        { text: "That is the story of what happened at my house on a Friday." }
      ],
      clue: "A good ending wraps up the problem. Think about how the problem started back in sentence 3.",
      why: "The answer is \"I hugged Peanut gently and promised to always close his door.\" It shows Andre is relieved, and it connects back to sentence 3, where he forgot to close the door. The phone ringing starts something new, the hamster fact is off topic, and \"That is the story of what happened\" still just says the story is over." }
  ],
  test: [
    { id: "SK-TT1e-T1", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "One sentence in Sofia's draft does not belong in the story. Which sentence should she take out? Choose the sentence in the draft.",
      targets: ["p2:1:2", "p2:2:1", "p2:2:3", "p2:3:2", "p2:4:1"],
      answer: ["p2:2:3"], pick: 1,
      clue: "Every sentence in a story should help tell what happened on this fishing trip. Read each one and ask: is this about Sofia's morning on the lake?",
      why: "The answer is sentence 5, \"My cousin Luis plays soccer every Saturday at the park near his house.\" Luis is not on the boat and soccer has nothing to do with the fishing trip, so the sentence pulls the reader away from the story." },
    { id: "SK-TT1e-T2", type: "ms", points: 2, dok: 2, passages: ["p2"], pick: 2,
      prompt: "Sentence 4 tells how Sofia feels instead of showing it. Which TWO sentences would best replace sentence 4 to show that she is bored?",
      choices: [
        { text: "I yawned and rested my chin on my hand.", correct: true },
        { text: "I sighed and tapped my fingers on the boat.", correct: true },
        { text: "I was very, very, very bored that day." },
        { text: "The little boat was painted bright green." },
        { text: "Aunt Rosa's fishing pole was brand new." }
      ],
      clue: "Showing means the reader can see what the character does, so they can tell how she feels without being told. Look for actions a bored person might do.",
      why: "The answers are \"I yawned and rested my chin on my hand.\" and \"I sighed and tapped my fingers on the boat.\" Yawning, sighing and tapping are actions that show boredom. \"Very, very, very bored\" still just tells. The green boat and the new pole are details, but they do not show how Sofia feels." },
    { id: "SK-TT1e-T3", type: "dropdown", points: 2, dok: 2, passages: ["p2"],
      prompt: "Sofia wants to add words to the beginning of sentences 6 and 10. Choose the best word for each blank.",
      text: "(6) {0} my bobber went under, and my fishing pole bent almost in half. (10) {1} Aunt Rosa scooped it into the net, and we both cheered.",
      slots: [
        { options: ["Suddenly,", "At first,", "In the end,"], answer: 0 },
        { options: ["Then", "Before that,", "At first,"], answer: 0 }
      ],
      clue: "Read sentences 3 to 10 in order. For each blank, ask how that sentence connects to the sentence just before it. Then pick the word that shows that connection.",
      why: "Sentence 6 needs \"Suddenly,\" because after a whole hour of nothing, the bite happens all at once. At first and In the end do not fit the middle of the story. Sentence 10 needs \"Then\" because Aunt Rosa scoops up the fish right after it comes out of the water in sentence 9. Before that and At first would put the events out of order." },
    { id: "SK-TT1e-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Sofia wants to add a beginning before sentence 1 that will hook the reader. Which sentence is best?",
      choices: [
        { text: "Have you ever waited so long for something that you almost gave up?", correct: true },
        { text: "This is a story about the day that Aunt Rosa and I went fishing." },
        { text: "We caught a really big fish that day, and it was so much fun." },
        { text: "My aunt Rosa has a blue car, a gray cat, and a little garden." }
      ],
      clue: "A hook makes the reader curious and fits what the story is about. It should not give away the ending or wander off topic.",
      why: "The answer is \"Have you ever waited so long for something that you almost gave up?\" It pulls the reader in with a question and fits the long, boring wait before the fish bites. \"This is a story about\" is flat, the big-fish sentence gives away the ending, and Aunt Rosa's car and cat are off topic." },
    { id: "SK-TT1e-T5", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "The draft stops after sentence 10. Which sentence would be the best ending to add after sentence 10?",
      choices: [
        { text: "As we rowed back, Aunt Rosa smiled and said, \"See? Waiting paid off.\"", correct: true },
        { text: "Then my line got tangled, and a frog jumped into our boat." },
        { text: "Early that morning, we rowed out onto the calm, gray lake." },
        { text: "The fish had shiny silver scales and was as long as my arm." }
      ],
      clue: "An ending finishes the story. It does not start something new, go back to the beginning or repeat a detail. Think about the problem Sofia had before the fish bit.",
      why: "The answer is: As we rowed back, Aunt Rosa smiled and said, \"See? Waiting paid off.\" It closes the trip and connects to the long wait in sentence 3. The tangled line starts a new problem, the early-morning sentence goes back to the beginning, and the silver scales repeat a detail from sentence 9." }
  ]
});
