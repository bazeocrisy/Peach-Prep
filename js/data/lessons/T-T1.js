/* Lessons: 3.T.T.1 Narrative techniques. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.T.T.1.a",
  title: "Story clues: dialogue, description and actions",
  teach: {
    big: "Writers show me what characters are like, where a story happens and what is going on through what characters say, what they do, and the describing words.",
    points: [
      "Dialogue is the words a character says. It goes inside quotation marks. What a character says can show how they feel or what they want.",
      "Actions are what characters do. An action can show how a character feels without the writer telling you. \"He slammed the door\" shows that he is angry. \"He was angry\" only tells it.",
      "Description is the describing words that help you picture a place or a person: how it looks, sounds or feels. Description often shows the setting, and a describing detail can tell you something about a character, too.",
      "Dialogue and actions also move the plot. They can start a problem, change it or help solve it. Ask: What is different after this happens?",
      "When you read a detail, ask: What does this show me? Is it about a character, the setting or what happens next? Then ask why the author put it there. A detail can be a clue that moves the plot. You can compare two stories the same way: look at how each one begins, how its characters talk and act, and how it ends."
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
      show: [
        "Story 1: Owen looked all over the house for his lost puppy. On the kitchen floor, he noticed a trail of muddy paw prints leading to the laundry basket.",
        "Story 2: Tia could not find her brother's red mitten. Then she noticed the dog's bed by the door, with a bit of red yarn poking out from under the blanket."
      ],
      ask: "Why does each author describe these details? How are the two stories alike?",
      steps: [
        "Find the describing detail in Story 1: muddy paw prints leading to the basket. Ask what job it does. It tells Owen where to look next, so it is a clue that moves the plot.",
        "Do the same for Story 2. The red yarn under the blanket tells Tia where the mitten is, so it is a clue, too.",
        "To compare, write one sentence and check it against each story. \"The author describes a detail that shows where the lost thing is\" is true for Story 1 and true for Story 2."
      ],
      answer: "In both stories, the author describes a small detail because it is a clue: it shows the character where the lost thing is and moves the plot along."
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
      ] },
    /* PP-004 form B passage: used only by testB. Needs independent review. */
    { id: "p3", title: "The Open Gate", genre: "Literary text",
      paragraphs: [
        ["Fog lay over Pop-Pop's farm like a thick gray blanket.", "The grass was wet and cold, and the old red barn creaked in the wind."],
        ["Imani yawned as she carried the feed bucket to the goat pen.", "The pen smelled like wet hay.", "Then she stopped.", "The gate was wide open, and the pen was empty."],
        ["\"Pop-Pop!\" she shouted.", "\"The goats got out!\"", "Imani bit her lip and stared at the empty pen."],
        ["Pop-Pop came running from the porch, still in his slippers.", "\"Don't worry,\" he said.", "\"Goats never go far from breakfast.\"", "He took the bucket from Imani and shook it hard, and the feed rattled inside."],
        ["Imani heard a bell jingle behind the barn, and then another.", "One by one, three goats trotted around the corner.", "They bleated and pushed their noses toward the bucket."],
        ["Imani laughed and latched the gate tight.", "\"Next time,\" she said, \"I'm checking that gate first.\""],
        ["By then, the sun had burned away the fog, and the whole farm sparkled."]
      ] },
    /* Expansion 2026-10-22 (batch B1, author b1a): p4 is used only by core set 2 and one set 3
       compare item (C14); p5 only by core set 3. Never used by test or testB. NEEDS INDEPENDENT REVIEW. */
    { id: "p4", title: "The Note in the Book", genre: "Literary text",
      paragraphs: [
        ["The school library was Nadia's favorite room.", "Sunlight poured through the wide windows and made bright squares on the carpet.", "The only sound was the soft hum of the fish tank in the corner."],
        ["Nadia pulled a book about sharks off the shelf.", "A folded yellow note slid out and landed by her shoe."],
        ["She unfolded it.", "It said, \"Look under the dictionary for your next clue.\""],
        ["Nadia's eyes lit up.", "She tiptoed past the reading table and lifted the heavy dictionary.", "Underneath was another yellow note.", "\"Ask the person who loves sharks the most,\" it said."],
        ["Nadia looked around the room.", "Her friend Caleb only read books about trains.", "Then she noticed Mr. Webb, the librarian.", "His tie was covered with tiny gray sharks."],
        ["\"Did you write these notes?\" Nadia asked.", "Mr. Webb grinned.", "\"Every week, I hide a puzzle for one lucky reader,\" he said.", "\"This week, the lucky reader was you.\""],
        ["He handed her a brand-new book about sharks with a yellow bookmark inside.", "Nadia hugged it to her chest all the way back to class."]
      ] },
    { id: "p5", title: "Tide Pool Morning", genre: "Literary text",
      paragraphs: [
        ["The beach on Tybee Island was gray and still at low tide.", "Wet sand stretched far out, and the air smelled like salt and seaweed.", "Gulls cried overhead."],
        ["Lily knelt beside a tide pool on the sandbar, no bigger than a bathtub.", "She leaned so close that the ends of her braids dipped into the water."],
        ["\"Dad, look!\" she whispered.", "\"Something moved!\""],
        ["Dad crouched beside her.", "A tiny green crab scuttled sideways and tucked itself under a clump of oyster shells."],
        ["Lily reached for the shells.", "\"Wait,\" Dad said gently.", "\"Those shells are the crab's house. How would you feel if a giant lifted off your roof?\""],
        ["Lily pulled her hand back.", "She lay on her stomach and watched instead.", "After a while, the crab crept out and waved one claw, as if it were saying hello."],
        ["Far out, the waves began to roll back in.", "\"Time to go,\" Dad said.", "\"The ocean wants its pool back.\"", "Lily waved goodbye to the crab and raced the water up the beach, laughing."]
      ] },
    /* Expansion 2026-10-22, batch SIM-1: p6 and p7 are used only by similar items (never core, test or testB).
       NEEDS INDEPENDENT REVIEW. */
    { id: "p6", title: "The Fire Tower", genre: "Literary text",
      paragraphs: [
        ["The old fire tower stood at the top of the mountain, high above the trees.", "Its wooden stairs zigzagged up and up, and the wind whistled through the rails."],
        ["Amos stopped on the fourth step and grabbed the rail with both hands.", "\"How much farther is it?\" he asked in a small, shaky voice."],
        ["At every turn of the stairs, a little wooden sign was nailed to a post.", "Each sign had a number painted on it in bright yellow."],
        ["\"The ranger said there are six signs,\" his sister Naomi said.", "\"When we find number 6, we will be at the top.\""],
        ["They climbed.", "Two.", "Three.", "Four.", "Amos read each number out loud, and his voice got a little louder every time."],
        ["At sign number 6, a door opened into a small glass room.", "Sunlight poured in, and green mountains rolled away in every direction like waves."],
        ["Amos let go of the rail and pressed his nose to the glass.", "Then he turned to Naomi with a big grin.", "\"Can we climb it again tomorrow?\" he asked."]
      ] },
    { id: "p7", title: "The Night Walk", genre: "Literary text",
      paragraphs: [
        ["The path behind Grandma Rose's cabin was dark and still.", "Only the crickets chirped, and the trees stood like tall black shadows."],
        ["Selah held her flashlight tight.", "She swept its beam back and forth across the path."],
        ["\"Turn it off for a minute,\" Grandma Rose said softly.", "\"Give your eyes time to get used to the dark.\""],
        ["Selah clicked the flashlight off.", "At first, she could see nothing at all.", "Then, little by little, the sky filled with more stars than she had ever seen."],
        ["They spread a blanket on the grass and lay on their backs.", "Grandma Rose pointed out the brightest star, and Selah made a wish on it."],
        ["Far away, a church bell rang nine times.", "Grandma Rose sat up and began to fold the blanket.", "Selah took one last long look at the sky and turned her flashlight back on."]
      ] }
  ],
  practice: [
    { id: "SK-TT1a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What do the details in paragraph 1 help the reader understand?",
      choices: [
        { text: "A strong storm is going on outside.", correct: true },
        { text: "Mateo is bored with his favorite show." },
        { text: "Abuela is busy cooking in the kitchen." },
        { text: "The TV in the apartment is broken." }
      ],
      clue: "Ask what the describing words in paragraph 1 help you picture.",
      why: "The answer is \"A strong storm is going on outside.\" Thunder booms and rain beats against the windows, and then the power goes out. Mateo is watching his favorite show, so he is not bored. The screen goes black because the whole room loses power, not because the TV is broken." },
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
      clue: "The writer does not say how Mateo feels. Look for sentences that show a feeling without naming it.",
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
      clue: "Dialogue is the words a character says. First check who is speaking in each line.",
      why: "The answer is the sentence where Mateo asks, \"Can we keep them off a little longer?\" Mateo wants the lights to stay off so the music can go on. That shows he had fun. The lines in paragraph 3 are Abuela's words, and \"Abuela!\" is Mateo calling for help when he is scared." }
  ],
  /* ---------- Expansion 2026-10-22, batch B1 (author b1a). Pattern: 3.T.T.1.c (B0 reference). ----------
     core: fifteen independent items in three sets of five. { ref } reuses an existing Try item (P4, P5);
     they stay in practice, and the engine leaves them out of Practice Together, so Together shows P1-P3.
     New ids are numbered by their place in the fifteen. Hints and Show me how for refs and Together
     items are in addons. Author log: docs/expansion-2026-10-22/batches/B1-b1a-author-log.md.
     NEEDS INDEPENDENT REVIEW (blind solve). */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT1a-P4" },
      { ref: "SK-TT1a-P5" },
      { id: "SK-TT1a-C03", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: ["p1"],
        prompt: "What does the last sentence of paragraph 4 tell the reader about Abuela?",
        choices: [
          { text: "She is sharing a special song from her own childhood with Mateo.", correct: true },
          { text: "She is homesick and wishes she were back in Puerto Rico." },
          { text: "She misses the TV show that the storm took away from them." },
          { text: "She wants to play her guitar louder than the thunder outside." }
        ],
        clue: "A describing detail can tell you about a character, not only about a place. Ask what this detail tells you about who Abuela is.",
        hints: [
          "A describing detail can tell you about a character, not only about a place. Ask what this detail tells you about who Abuela is.",
          "Look closely at the words after \"used to sing\" in that sentence.",
          "It is Mateo, not Abuela, who sings louder than the thunder, so that choice does not fit. Test each choice that is left against paragraph 4."
        ],
        how: [
          "Paragraph 4 says Abuela plays a song she used to sing as a girl in Puerto Rico. \"As a girl\" means when she was a child.",
          "Now she plays that song for Mateo on a dark, stormy night. So she is sharing something from her own childhood with him.",
          "The answer is \"She is sharing a special song from her own childhood with Mateo.\"",
          "Check the others: nothing says she is sad or wants to leave, she winks about the TV instead of missing it, and the thunder is only mentioned when Mateo sings."
        ],
        misconception: "A common mix-up is reading a detail about a faraway place as a wish to be there. Ask what the detail tells you about the character right now.",
        why: "The answer is \"She is sharing a special song from her own childhood with Mateo.\" She learned the song as a girl, and now she plays it for Mateo. Nothing says she is homesick, she winks about the lost TV show, and it is Mateo, not Abuela, who is louder than the thunder." },
      { id: "SK-TT1a-C04", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: ["p1"],
        prompt: "The author wants to add one more describing sentence at the end of paragraph 4. It should help the reader picture the room once the flashlight is set up. Which sentence fits best?",
        choices: [
          { text: "Soft yellow light glowed on the ceiling like a tiny moon.", correct: true },
          { text: "Abuela's old guitar had a long scratch across the front." },
          { text: "\"Where did you get that old guitar?\" Mateo asked." },
          { text: "Mateo pulled his blanket up over his head." }
        ],
        clue: "Description helps the reader picture a place: how it looks, sounds or feels. Ask which sentence paints a picture of the room.",
        hints: [
          "Description helps the reader picture a place: how it looks, sounds or feels. Ask which sentence paints a picture of the room.",
          "Reread paragraph 4. The new sentence has to fit right after its last sentence.",
          "The line in quotation marks is dialogue, so it does not describe the room. Check each sentence that is left: does it help you picture the room itself?"
        ],
        how: [
          "The job is to describe the room, so the new sentence must tell how the room looks, sounds or feels.",
          "In paragraph 4, Abuela stands the flashlight up so that its light shines on the ceiling. A sentence about that light fits right after it.",
          "The answer is \"Soft yellow light glowed on the ceiling like a tiny moon.\" It helps the reader see the dark room glowing.",
          "Check the others: the scratch describes the guitar, not the room, the question is dialogue, and pulling the blanket over his head is an action, not a picture of the room."
        ],
        misconception: "A common mix-up is choosing a sentence about a character when the job is to describe the place.",
        why: "The answer is \"Soft yellow light glowed on the ceiling like a tiny moon.\" It describes how the room looks once the flashlight shines on the ceiling. The scratch describes the guitar, not the room, the question is dialogue, and pulling up the blanket is an action." },
      { id: "SK-TT1a-C05", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: [],
        stem: ["The score was tied with one minute left in the game. Jamal ran up and kicked the ball as hard as he could. It sailed over the goal, over the fence and into Mrs. Green's pond. Every player on the field froze."],
        prompt: "Read the story. How does Jamal's kick move the plot forward?",
        choices: [
          { text: "It starts a new problem, because the ball lands in Mrs. Green's pond.", correct: true },
          { text: "It shows that Jamal is the strongest kicker on his whole team." },
          { text: "It solves the problem, because the kick wins the game for the team." },
          { text: "It helps the reader picture the weather on the day of the game." }
        ],
        clue: "An action can move the plot by starting a problem, changing it or solving it. Ask what is different after the character acts.",
        hints: [
          "An action can move the plot by starting a problem, changing it or solving it. Ask what is different after the character acts.",
          "Read the last two sentences. Where does the ball end up, and how do the players react?",
          "How hard Jamal kicks tells about Jamal, not about the plot. Test the choices that are left against what happens after the kick."
        ],
        how: [
          "Before the kick, the game is tied and everyone is playing.",
          "After the kick, the ball is in Mrs. Green's pond and every player freezes. Now there is something new to fix.",
          "The answer is \"It starts a new problem, because the ball lands in Mrs. Green's pond.\"",
          "Check the others: the ball misses the goal, so nobody wins yet; a strong kick tells about Jamal, not about the plot; and nothing describes the weather."
        ],
        misconception: "A common mix-up is choosing what an action shows about a character when the question asks how it moves the plot.",
        why: "The answer is \"It starts a new problem, because the ball lands in Mrs. Green's pond.\" The kick misses the goal and lands in the pond, and every player freezes, so now there is a new problem. It does not win the game, it is about the plot rather than how strong Jamal is, and nothing describes the weather." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT1a-C06", type: "hottext", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: ["p4"],
        prompt: "Which sentence uses description to help the reader picture how quiet the library is? Choose the sentence in the passage.",
        targets: ["p4:1:1", "p4:1:2", "p4:1:3", "p4:4:2", "p4:5:4"],
        answer: ["p4:1:3"], pick: 1,
        clue: "Description uses words about what you can see, hear or feel in a place. Ask what each sentence helps you picture.",
        hints: [
          "Description uses words about what you can see, hear or feel in a place. Ask what each sentence helps you picture.",
          "Paragraph 1 is about the library itself. Read each of its sentences and ask what it tells you about the room.",
          "\"Nadia's favorite room\" tells how Nadia feels about the library, not how it looks or sounds. Check each other sentence: does it describe the room, and does it tell you how quiet the room is?"
        ],
        how: [
          "Description tells how a place looks, sounds or feels. Paragraph 1 describes the library.",
          "The sunlight sentence helps you see the room, but bright light does not tell you how quiet it is. \"Nadia's favorite room\" tells how she feels about the library.",
          "The answer is \"The only sound was the soft hum of the fish tank in the corner.\" If a soft hum is the only sound, the room must be very quiet.",
          "Tiptoeing is an action, and the sentence about the tie describes Mr. Webb, not the room."
        ],
        misconception: "A common mix-up is choosing an action that is quiet, like tiptoeing. Description tells about the place itself.",
        why: "The answer is \"The only sound was the soft hum of the fish tank in the corner.\" If a soft hum is the only sound, the library is very quiet. The sunlight sentence is about how the room looks, tiptoeing is an action, and the tie describes Mr. Webb." },
      { id: "SK-TT1a-C07", type: "ebsr", points: 2, dok: 2, std: ["3.T.T.1.a"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How does Nadia feel right after she reads the first note?",
          choices: [
            { text: "She is curious and excited.", correct: true },
            { text: "She is worried that she will get in trouble." },
            { text: "She is annoyed that someone wrote in a book." },
            { text: "She is bored with the book about sharks." }
          ] },
        partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
          choices: [
            { text: "\"Nadia's eyes lit up.\"", correct: true },
            { text: "\"She unfolded it.\"" },
            { text: "\"Nadia looked around the room.\"" },
            { text: "\"A folded yellow note slid out and landed by her shoe.\"" }
          ] },
        clue: "The writer does not name Nadia's feeling. Look for a clue about what her face or body does, and use what has just happened to decide what it means.",
        hints: [
          "The writer does not name Nadia's feeling. Look for a clue about what her face or body does, and use what has just happened to decide what it means.",
          "Read paragraphs 3 and 4. What does the note ask Nadia to do, and what does she do next?",
          "Nothing in the story says Nadia could get in trouble, so worry does not fit. For Part B, the sentence you choose must match your Part A answer."
        ],
        how: [
          "In paragraph 3, the note tells Nadia where to find her next clue. It is the start of a puzzle.",
          "Then her eyes light up. When someone's eyes light up, they are excited about something, and she goes straight off to find the next clue.",
          "Part A: She is curious and excited. Part B: \"Nadia's eyes lit up.\"",
          "Nothing says she could get in trouble, and she is too busy following clues to be bored or annoyed. The other sentences tell what Nadia does or what happens, not how she feels."
        ],
        misconception: "A common mix-up is choosing a sentence that only tells what a character does, like unfolding the note. Look for the clue that shows a feeling.",
        why: "Part A: She is curious and excited. Part B: \"Nadia's eyes lit up.\" Eyes that light up show excitement, and she goes straight off to look for the next clue. Nothing says she could get in trouble, and the other sentences tell what she does or what happens, not how she feels." },
      { id: "SK-TT1a-C08", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: ["p4"],
        prompt: "What do Mr. Webb's words in paragraph 6 show about him?",
        choices: [
          { text: "He likes to turn reading into a game for his students.", correct: true },
          { text: "He is upset that Nadia found all of his notes so fast." },
          { text: "He wants Nadia to stop reading books about sharks." },
          { text: "He forgot where he had hidden the notes in the library." }
        ],
        clue: "Dialogue can show what a character is like. Ask what kind of person would say these words.",
        hints: [
          "Dialogue can show what a character is like. Ask what kind of person would say these words.",
          "Reread what Mr. Webb says in paragraph 6.",
          "In paragraph 7 he hands Nadia another book about sharks, so he does not want her to stop reading them. Test each choice that is left against his words."
        ],
        how: [
          "Mr. Webb grins and says, \"Every week, I hide a puzzle for one lucky reader.\"",
          "Someone who hides a puzzle every week, and calls the reader who finds it lucky, enjoys making reading fun, like a game.",
          "The answer is \"He likes to turn reading into a game for his students.\"",
          "Check the others: he grins, so he is not upset; he gives her a new shark book; and he knew just where his notes were."
        ],
        misconception: "A common mix-up is judging a character by the topic of a scene instead of by what the character's own words show.",
        why: "The answer is \"He likes to turn reading into a game for his students.\" He grins and says he hides a puzzle for one lucky reader every week. He is not upset, he gives Nadia another shark book, and he knew where every note was." },
      { id: "SK-TT1a-C09", type: "match", points: 2, dok: 2, std: ["3.T.T.1.a"], passages: ["p4"],
        prompt: "How does each detail move the plot? Match each detail to what it does in the story.",
        cols: ["Starts the mystery", "Gives Nadia her next step", "Solves the mystery"],
        rows: [
          { text: "A folded yellow note slides out of the shark book.", answer: 0 },
          { text: "\"Look under the dictionary for your next clue.\"", answer: 1 },
          { text: "\"Ask the person who loves sharks the most.\"", answer: 1 },
          { text: "\"Every week, I hide a puzzle for one lucky reader.\"", answer: 2 }
        ],
        clue: "Events and words can move a plot. Ask: does this start the puzzle, keep it going, or end it?",
        hints: [
          "Events and words can move a plot. Ask: does this start the puzzle, keep it going, or end it?",
          "For each detail, ask what Nadia knows, or what she does, right after it.",
          "The note slides out before Nadia knows there is any puzzle at all. Work out the other three the same way: what does Nadia know or do after each one?"
        ],
        how: [
          "The note sliding out of the book comes first. Before it, nothing strange has happened, so it starts the mystery.",
          "The words in each of the two notes tell Nadia where to look or whom to ask next, so each one gives her the next step.",
          "Mr. Webb's words explain who has been hiding the notes and why, so they solve the mystery.",
          "So the note sliding out starts the mystery, both notes give her the next step, and Mr. Webb's words solve it."
        ],
        misconception: "A common mix-up is thinking the first clue starts the mystery. The mystery starts when the note appears; the words inside it tell Nadia what to do next.",
        why: "The note sliding out of the shark book starts the mystery. The words in the two notes each give Nadia her next step: look under the dictionary, then find the person who loves sharks. Mr. Webb's words solve the mystery, because they tell who hid the notes and why." },
      { id: "SK-TT1a-C10", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.a"], passages: ["p4"],
        prompt: "Why does the author describe Mr. Webb's tie in paragraph 5?",
        choices: [
          { text: "It is the clue Nadia uses to figure out who wrote the notes.", correct: true },
          { text: "It shows what Mr. Webb wears to work every single day." },
          { text: "It shows that Mr. Webb is trying to hide from Nadia." },
          { text: "It is the clue that tells Nadia where the next note is hidden." }
        ],
        clue: "Authors put a describing detail in a story for a reason. Ask how the detail helps the story move along.",
        hints: [
          "Authors put a describing detail in a story for a reason. Ask how the detail helps the story move along.",
          "Reread paragraphs 4 to 6.",
          "Mr. Webb grins and answers Nadia's question, so he is not hiding from her. Test each choice that is left against the story."
        ],
        how: [
          "The second note says, \"Ask the person who loves sharks the most.\"",
          "Nadia looks around. Caleb only reads about trains. Then she notices that Mr. Webb's tie is covered with tiny gray sharks.",
          "Right after that, she asks Mr. Webb whether he wrote the notes. The tie points her to a person, not to another hiding place.",
          "The answer is \"It is the clue Nadia uses to figure out who wrote the notes.\" The tie does not lead to another note: no third note is ever found. The story never says what he wears on other days, and he is not hiding."
        ],
        misconception: "A common mix-up is thinking a describing detail is there only to tell what something looks like. Here it is a clue that moves the plot.",
        why: "The answer is \"It is the clue Nadia uses to figure out who wrote the notes.\" The note says to ask the person who loves sharks the most, and the shark tie points Nadia to Mr. Webb. No third note is ever found, the story never says what he wears on other days, and he is not hiding." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT1a-C11", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.a"], passages: [],
        stem: ["At the school bake sale, one lumpy muffin sat alone on the table. Desmond frowned at it. \"Nobody wants the ugly one,\" he mumbled.", "Mrs. Ruffin from next door picked it up. \"Lumpy ones always taste the best,\" she said, and she paid for it with a smile.", "Desmond grinned and set the SOLD OUT sign on the empty table."],
        prompt: "Read the story. Then complete the sentences. Choose the best answer for each blank.",
        text: "Mrs. Ruffin's words show that she is {0}. Her words move the plot forward because {1}.",
        slots: [
          { options: ["kind", "picky", "impatient"], answer: 0 },
          { options: ["the last muffin gets sold", "the bake sale has to close early", "Desmond decides to bake new muffins"], answer: 0 }
        ],
        clue: "Dialogue can show what a character is like, and it can change what happens next. Ask what these words show about her, and what changes after she says them.",
        hints: [
          "Dialogue can show what a character is like, and it can change what happens next. Ask what these words show about her, and what changes after she says them.",
          "Compare how Desmond feels before Mrs. Ruffin speaks with how he feels after she speaks.",
          "Mrs. Ruffin picks the lumpy muffin on purpose, so she is not being picky about how muffins look. For the second blank, ask what changes after she pays."
        ],
        how: [
          "Desmond thinks nobody wants the lumpy muffin. Mrs. Ruffin says lumpy ones taste the best and buys it with a smile.",
          "Saying something nice that makes Desmond feel better shows that she is kind.",
          "Because she buys it, the last muffin is sold, the table is empty, and Desmond grins.",
          "The answers are kind and the last muffin gets sold. She chooses the lumpy one on purpose, so she is not picky, and nothing says the sale closes early or that Desmond bakes more."
        ],
        misconception: "A common mix-up is judging a character by one word, like \"lumpy,\" instead of by what the whole line does for the other character.",
        why: "The answers are kind and the last muffin gets sold. Mrs. Ruffin says something nice about the lumpy muffin and buys it with a smile, so Desmond goes from frowning to grinning. Her words lead to the last muffin being sold and the table being empty." },
      { id: "SK-TT1a-C12", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.a"], passages: ["p5"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How do Dad's words in paragraph 5 change what happens next?",
          choices: [
            { text: "Lily leaves the shells alone, so she gets to see the crab come out.", correct: true },
            { text: "Lily lifts the shells, and the crab runs off into the ocean." },
            { text: "Lily gets scared of the crab and runs back up the beach." },
            { text: "Lily asks Dad to take a picture of the crab under the shells." }
          ] },
        partB: { prompt: "Which sentence from the story best shows the result of Dad's words?",
          choices: [
            { text: "\"After a while, the crab crept out and waved one claw, as if it were saying hello.\"", correct: true },
            { text: "\"A tiny green crab scuttled sideways and tucked itself under a clump of oyster shells.\"" },
            { text: "\"Lily reached for the shells.\"" },
            { text: "\"Lily waved goodbye to the crab and raced the water up the beach, laughing.\"" }
          ] },
        clue: "Dialogue can change what a character does next. Find the words, then ask what the character does after hearing them.",
        hints: [
          "Dialogue can change what a character does next. Find the words, then ask what the character does after hearing them.",
          "Find Dad's words. Ask what he wants Lily to think about when he asks his question.",
          "Lily never lifts the shells, so that choice does not fit Part A. In Part B, \"Lily reached for the shells\" happens before Dad speaks, so it cannot be a result of his words."
        ],
        how: [
          "In paragraph 5, Lily reaches for the shells, and Dad tells her that they are the crab's house.",
          "In paragraph 6, she pulls her hand back and watches. After a while, the crab comes out and waves a claw.",
          "Part A: Lily leaves the shells alone, so she gets to see the crab come out. Part B: \"After a while, the crab crept out and waved one claw, as if it were saying hello.\"",
          "Check the others: she never lifts the shells, she is not scared, and nobody takes a picture. The crab hiding and Lily reaching happen before Dad speaks."
        ],
        misconception: "A common mix-up is choosing an event that happens before the words. A result has to come after them.",
        why: "Part A: Lily leaves the shells alone, so she gets to see the crab come out. Part B: \"After a while, the crab crept out and waved one claw, as if it were saying hello.\" Dad's words make Lily pull her hand back and watch, and because she waits, the crab comes out. The crab hiding and Lily reaching come before Dad speaks." },
      { id: "SK-TT1a-C13", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.a"], passages: ["p5"],
        prompt: "Read this sentence from paragraph 7: \"Far out, the waves began to roll back in.\" How does this description help the story?",
        choices: [
          { text: "It shows the visit is ending, because water will soon cover the pool.", correct: true },
          { text: "It warns that a big storm is about to hit the beach." },
          { text: "It shows that Lily is afraid of the big ocean waves." },
          { text: "It shows that the crab is about to come out of its home again." }
        ],
        clue: "Description can do more than help you picture a place. It can also show that something in the plot is about to change.",
        hints: [
          "Description can do more than help you picture a place. It can also show that something in the plot is about to change.",
          "Compare the beach in paragraph 1 with the beach in paragraph 7. What has changed?",
          "Nothing in the story tells about a storm, so that choice has no support. What does the tide coming back mean for the beach?"
        ],
        how: [
          "In paragraph 1, the beach is at low tide, so the water is far out and the tide pools are uncovered.",
          "In paragraph 7, the waves roll back in. The tide is coming up, and soon the tide pool will be under water.",
          "Right after, Dad says it is time to go, and Lily races the water up the beach.",
          "The answer is \"It shows the visit is ending, because water will soon cover the pool.\" There is no storm, Lily is having fun rather than feeling afraid, and the crab already came out in paragraph 6."
        ],
        misconception: "A common mix-up is thinking description only tells what a place looks like. Here it signals that the story is about to end.",
        why: "The answer is \"It shows the visit is ending, because water will soon cover the pool.\" The story starts at low tide, and now the water is coming back, so Dad says it is time to go. There is no storm, Lily races the water for fun, and the crab already came out before this." },
      /* Compares how two texts are built (p4 from set 2 and p5); the item carries both passages, so set 3 stands alone. */
      { id: "SK-TT1a-C14", type: "ms", points: 2, dok: 3, std: ["3.T.T.1.a"], passages: ["p4", "p5"], pick: 2,
        prompt: "Think about how \"The Note in the Book\" and \"Tide Pool Morning\" are written. Which TWO sentences are true about BOTH stories?",
        choices: [
          { text: "Each story begins by describing the place where it happens.", correct: true },
          { text: "Each story ends with an action that shows how the main character feels.", correct: true },
          { text: "In each story, a grown-up hides something for the child to find." },
          { text: "In each story, a grown-up tells the child not to touch something." },
          { text: "Each story ends with a brand-new problem for the main character." }
        ],
        clue: "To compare how two stories are written, look at the same part in each one. A sentence must be true for both.",
        hints: [
          "To compare how two stories are written, look at the same part in each one. A sentence must be true for both.",
          "Take one sentence at a time. Check it against \"The Note in the Book,\" then against \"Tide Pool Morning.\" Choose two.",
          "Nadia gets a new book at the end, not a new problem, so the sentence about a brand-new problem does not fit. Check each other sentence against both stories."
        ],
        how: [
          "Beginnings: \"The Note in the Book\" opens with the sunny, quiet library, and \"Tide Pool Morning\" opens with the gray beach at low tide. Each one begins by describing the place.",
          "Endings: Nadia hugs her new book to her chest, and Lily waves to the crab and races the water. Each story ends with an action that shows how the child feels.",
          "The answers are \"Each story begins by describing the place where it happens.\" and \"Each story ends with an action that shows how the main character feels.\"",
          "Only Mr. Webb hides something, and only Dad tells the child not to touch something. Neither story ends with a new problem."
        ],
        misconception: "A common mix-up is choosing a sentence that is true for only one of the two stories.",
        why: "The answers are \"Each story begins by describing the place where it happens.\" and \"Each story ends with an action that shows how the main character feels.\" Both open with a description of the place, and both end with the child doing something that shows a feeling. Only Mr. Webb hides notes, only Dad says not to touch, and neither story ends with a new problem." },
      { id: "SK-TT1a-C15", type: "ms", points: 2, dok: 2, std: ["3.T.T.1.a"], passages: [], pick: 2,
        stem: ["A writer is working on a story about Talia. Talia sewed a square for her neighborhood's new quilt, and she is proud of it. The writer wants to show Talia's feeling instead of just telling it."],
        prompt: "Which TWO sentences would best show that Talia is proud?",
        choices: [
          { text: "Talia held up her square so everyone in the room could see it.", correct: true },
          { text: "Talia grinned from ear to ear as she pinned her square to the quilt.", correct: true },
          { text: "Talia felt very proud of the square that she had sewn." },
          { text: "Talia's square had stripes of red, yellow and bright green." },
          { text: "\"Where should I put my square?\" Talia asked the others." }
        ],
        clue: "Writers show a feeling with what a character does, instead of naming the feeling. Look for sentences where you can see the feeling without being told.",
        hints: [
          "Writers show a feeling with what a character does, instead of naming the feeling. Look for sentences where you can see the feeling without being told.",
          "Picture each sentence. Can you see what Talia does, or are you only told about her? Choose two.",
          "The stripes help you picture the square, but they do not show anything about Talia's feelings. Check each other sentence the same way."
        ],
        how: [
          "Showing means the reader sees what a character does and can tell the feeling without being told.",
          "Holding her square up for everyone to see, and grinning from ear to ear, are actions that show pride.",
          "The answers are \"Talia held up her square so everyone in the room could see it.\" and \"Talia grinned from ear to ear as she pinned her square to the quilt.\"",
          "\"Talia felt very proud\" tells the feeling instead of showing it. The stripes describe the square, and her question does not show a feeling."
        ],
        misconception: "A common mix-up is choosing the sentence that names the feeling. Naming a feeling tells it; an action shows it.",
        why: "The answers are \"Talia held up her square so everyone in the room could see it.\" and \"Talia grinned from ear to ear as she pinned her square to the quilt.\" Both are actions that show pride. \"Talia felt very proud\" only tells the feeling, the stripes describe the square, and her question does not show a feeling." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short new scene. `like` lists only the
     core items each one really practises. */
  similar: [
    { id: "SK-TT1a-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-C06", "SK-TT1a-P4"],
      stem: ["Rain dripped from the roof of the bus stop. Brianna hugged her backpack and stamped her cold feet. \"The bus is late again,\" she groaned. Then a yellow bus splashed around the corner."],
      prompt: "Which sentence from the story is description that helps you picture the setting?",
      choices: [
        { text: "Rain dripped from the roof of the bus stop.", correct: true },
        { text: "Brianna hugged her backpack and stamped her cold feet." },
        { text: "\"The bus is late again,\" she groaned." },
        { text: "Then a yellow bus splashed around the corner." }
      ],
      clue: "Description helps you picture a place. Dialogue is in quotation marks, and an action is something a character does.",
      hints: [
        "Description helps you picture a place. Dialogue is in quotation marks, and an action is something a character does.",
        "For each sentence, ask: is it about the place, about what Brianna does or says, or about something that happens next?",
        "The line in quotation marks is dialogue, so it is not description. Check each sentence that is left the same way."
      ],
      how: [
        "Brianna hugging her backpack and stamping her feet are actions. The line in quotation marks is dialogue.",
        "The bus splashing around the corner is an event that moves the story along.",
        "The answer is \"Rain dripped from the roof of the bus stop.\" It helps you see and hear the rainy bus stop, which is the setting."
      ],
      misconception: "A common mix-up is choosing an action that has a describing word in it, like cold feet. Ask whether the sentence is mostly about the place or about what a character does.",
      why: "The answer is \"Rain dripped from the roof of the bus stop.\" It helps you picture the wet bus stop where the story happens. Hugging her backpack is an action, the line in quotation marks is dialogue, and the bus coming is an event." },
    { id: "SK-TT1a-S02", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-C08", "SK-TT1a-C11"],
      stem: ["Rico missed his third shot in a row. He kicked at the gym floor. Coach Pam jogged over and tossed him the ball. \"Even great players miss,\" she said. \"Keep your eyes on the hoop, not on your feet.\""],
      prompt: "What do Coach Pam's words show about her?",
      choices: [
        { text: "She helps her players get better instead of scolding them.", correct: true },
        { text: "She is angry that Rico keeps missing his shots." },
        { text: "She thinks Rico should quit the team for good." },
        { text: "She wants to take all the shots for the team herself." }
      ],
      clue: "Dialogue can show what a character is like. Ask what kind of person would say these words to someone who is upset.",
      hints: [
        "Dialogue can show what a character is like. Ask what kind of person would say these words to someone who is upset.",
        "Read both things Coach Pam says. What does each one do for Rico?",
        "She tosses Rico the ball, so she does not want him to quit. Test each choice that is left against her words."
      ],
      how: [
        "Rico is upset after missing three shots.",
        "Coach Pam tells him that even great players miss, and then she gives him a tip.",
        "The answer is \"She helps her players get better instead of scolding them.\" Her words calm him and help him improve.",
        "She is not angry, she gives him the ball to keep trying, and she never takes a shot herself."
      ],
      why: "The answer is \"She helps her players get better instead of scolding them.\" She tells Rico that even great players miss, and she gives him a tip. She is not angry, she tosses him the ball, and she never shoots herself." },
    { id: "SK-TT1a-S03", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-C12", "SK-TT1a-C05", "SK-TT1a-C09"],
      stem: ["Ms. Tran's class was painting a mural on the wall by the playground. Halfway through, the blue paint ran out. \"I guess we have to stop,\" Ms. Tran sighed. Then Marco raised his hand. \"My aunt has extra paint at her shop down the street,\" he said. That afternoon, his aunt carried in two big cans of blue."],
      prompt: "How do Marco's words move the plot forward?",
      choices: [
        { text: "They give the class a way to get more paint and keep going.", correct: true },
        { text: "They start the problem, because the class runs out of paint." },
        { text: "They show that Marco does not want to paint the mural." },
        { text: "They tell the reader where the playground is at the school." }
      ],
      clue: "Dialogue can start a problem, change it or help solve it. Ask what changes after a character speaks.",
      hints: [
        "Dialogue can start a problem, change it or help solve it. Ask what changes after a character speaks.",
        "Find the problem first. Then ask what changes because of Marco's words.",
        "Marco talks about paint, not about where the playground is, so that choice does not fit. Test each choice that is left."
      ],
      how: [
        "The problem: the blue paint runs out, and Ms. Tran thinks they must stop.",
        "Marco says his aunt has extra paint. That afternoon, she brings two cans.",
        "The answer is \"They give the class a way to get more paint and keep going.\"",
        "The paint ran out before he spoke, he wants to help, and his words say nothing about where the playground is."
      ],
      misconception: "A common mix-up is choosing the event that starts a problem when the words come later and help fix it.",
      why: "The answer is \"They give the class a way to get more paint and keep going.\" After Marco speaks, his aunt brings two cans of paint. The paint ran out before he spoke, he wants to help, and he says nothing about the playground." },
    /* Batch SIM-1 (ENG-07): one extra question for each core item that had none left when a child works the
       fifteen in order. Each `like` names the one core item it practises, so the in-order pick never runs out.
       Passages p6 and p7, and every stem, are new. Author log: batches/SIM-1-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TT1a-S04", type: "hottext", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: ["p6"],
      like: ["SK-TT1a-P5"],
      prompt: "Which line of dialogue shows that Amos enjoyed the climb? Choose the sentence in the passage.",
      targets: ["p6:2:2", "p6:4:1", "p6:4:2", "p6:7:3"],
      answer: ["p6:7:3"], pick: 1,
      clue: "Dialogue is the words a character says. First check who is speaking in each line, then ask how that person feels.",
      hints: [
        "Dialogue is the words a character says. First check who is speaking in each line, then ask how that person feels.",
        "Read each line in quotation marks. For each one, ask who says it and when in the climb it comes.",
        "\"How much farther is it?\" comes before Amos has seen the top, so it cannot show that he enjoyed the climb. Check each line that is left."
      ],
      how: [
        "The two lines about the signs are spoken by Naomi, so they cannot show how Amos feels.",
        "\"How much farther is it?\" comes at the start, before Amos has seen the top.",
        "At the top, Amos grins and asks, \"Can we climb it again tomorrow?\" Wanting to do it again shows he enjoyed it.",
        "The answer is that last line."
      ],
      misconception: "A common mix-up is choosing a line that someone else says. Check who is speaking first.",
      why: "The answer is the line where Amos asks, \"Can we climb it again tomorrow?\" Wanting to climb again shows he enjoyed it. The lines about the signs are Naomi's words, and Amos's first question comes before he reaches the top." },
    { id: "SK-TT1a-S05", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-C03"],
      stem: ["Ms. Haley's classroom had a long shelf of plants by the window. Every pot wore a paper name tag with a funny name, like Sir Spike and Big Leafy. Next to each pot, a small card showed the day it was last watered, written in Ms. Haley's neat handwriting."],
      prompt: "Read the story. What do these details tell the reader about Ms. Haley?",
      choices: [
        { text: "She takes careful care of her plants and has fun doing it.", correct: true },
        { text: "She wishes she could stop teaching and work in a garden." },
        { text: "She forgets to water the plants unless a student reminds her." },
        { text: "She does not let any students go near the plants on the shelf." }
      ],
      clue: "A describing detail can tell you about a character, not only about a place. Ask what kind of person would set up a shelf like this.",
      hints: [
        "A describing detail can tell you about a character, not only about a place. Ask what kind of person would set up a shelf like this.",
        "Look at the two things that go with every pot. What does each one show?",
        "The cards show the day each pot was watered, so she does not forget. Test each choice that is left against the details."
      ],
      how: [
        "Every pot has a funny name tag, like Sir Spike. Giving plants silly names shows she has fun with them.",
        "A card by each pot shows when it was last watered, in neat handwriting. That shows she is careful.",
        "The answer is \"She takes careful care of her plants and has fun doing it.\"",
        "Nothing says she wants to stop teaching, the cards show she remembers to water, and nothing says students must stay away."
      ],
      misconception: "A common mix-up is reading a detail about plants as a wish to be somewhere else. Ask what the detail shows about the character right now.",
      why: "The answer is \"She takes careful care of her plants and has fun doing it.\" The funny name tags show she has fun, and the neat watering cards show she is careful. Nothing says she wants to stop teaching, she does not forget to water, and nothing keeps students away." },
    { id: "SK-TT1a-S06", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-C04"],
      stem: ["(1) At dawn, Joaquin and his uncle opened their tortilla shop. (2) Uncle Beto turned on the lights and the big grill. (3) ______ (4) Joaquin put on his apron. (5) He stacked paper bags by the door."],
      prompt: "Read the story. The author wants to add a sentence at (3) that helps the reader picture the shop. Which sentence fits best?",
      choices: [
        { text: "Warm, toasty smells filled the shop, and the grill began to hiss.", correct: true },
        { text: "\"Did the bags of corn flour come yet?\" Joaquin asked with a yawn." },
        { text: "Uncle Beto had owned the shop since before Joaquin was born." },
        { text: "Joaquin rubbed his sleepy eyes and leaned against the wall." }
      ],
      clue: "Description helps the reader picture a place: how it looks, sounds or feels. Ask which sentence paints a picture of the shop.",
      hints: [
        "Description helps the reader picture a place: how it looks, sounds or feels. Ask which sentence paints a picture of the shop.",
        "Read sentences 2 and 4, on each side of the blank. The new sentence has to fit between them.",
        "The line in quotation marks is dialogue, so it does not describe the shop. Check each sentence that is left against the job in the question."
      ],
      how: [
        "The job is to describe the shop, so the new sentence must tell how the shop looks, sounds, smells or feels.",
        "In sentence 2, Uncle Beto turns on the grill. A sentence about the warm smells and the hissing grill fits right after it.",
        "The answer is \"Warm, toasty smells filled the shop, and the grill began to hiss.\"",
        "Check the others: the question is dialogue, owning the shop is a fact about Uncle Beto, and rubbing his eyes is an action."
      ],
      misconception: "A common mix-up is choosing a sentence about a character when the job is to describe the place.",
      why: "The answer is \"Warm, toasty smells filled the shop, and the grill began to hiss.\" It helps the reader smell and hear the shop. The question is dialogue, owning the shop is a fact about Uncle Beto, and rubbing his eyes is an action." },
    { id: "SK-TT1a-S07", type: "hottext", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-C06"],
      stem: ["Here are five sentences from a story about Mr. Diaz, the school custodian, at the end of the day."],
      prompt: "Which sentence uses description to help the reader picture how quiet the school is? Choose the sentence.",
      options: [
        "The last school bus pulled away at four o'clock.",
        "Mr. Diaz locked the front doors and picked up his mop.",
        "His footsteps echoed down the long hall, and nothing else made a sound.",
        "Mr. Diaz had cleaned these floors for twelve years.",
        "\"Good night, Room 4,\" he whispered."
      ],
      answer: [2], pick: 1,
      clue: "Description uses words about what you can see, hear or feel in a place. Ask what each sentence helps you picture.",
      hints: [
        "Description uses words about what you can see, hear or feel in a place. Ask what each sentence helps you picture.",
        "Picture each sentence. Does it help you see or hear the school, or does it tell about something else?",
        "Whispering is something Mr. Diaz does, so it is not a description of the school. Check each sentence that is left."
      ],
      how: [
        "Locking the doors and whispering are things Mr. Diaz does. The bus leaving is an event, and his twelve years is a fact about him.",
        "One sentence tells what you would hear in the hall: footsteps that echo, and nothing else.",
        "The answer is \"His footsteps echoed down the long hall, and nothing else made a sound.\" If footsteps echo and nothing else makes a sound, the school is very quiet."
      ],
      misconception: "A common mix-up is choosing a quiet action, like whispering. Description tells about the place itself.",
      why: "The answer is \"His footsteps echoed down the long hall, and nothing else made a sound.\" Echoing footsteps and no other sound show how quiet the empty school is. Whispering and locking doors are actions, the bus leaving is an event, and his twelve years is a fact." },
    { id: "SK-TT1a-S08", type: "ebsr", points: 2, dok: 2, std: ["3.T.T.1.a"], passages: ["p6"],
      like: ["SK-TT1a-C07"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does Amos feel when he starts up the stairs?",
        choices: [
          { text: "He feels scared.", correct: true },
          { text: "He feels excited." },
          { text: "He feels bored." },
          { text: "He feels angry." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Amos stopped on the fourth step and grabbed the rail with both hands.\"", correct: true },
          { text: "\"Amos read each number out loud, and his voice got a little louder every time.\"" },
          { text: "\"Amos let go of the rail and pressed his nose to the glass.\"" },
          { text: "\"Its wooden stairs zigzagged up and up, and the wind whistled through the rails.\"" }
        ] },
      clue: "The writer does not name Amos's feeling. Look for what his body does, and notice when in the climb it happens.",
      hints: [
        "The writer does not name Amos's feeling. Look for what his body does, and notice when in the climb it happens.",
        "Read the start of the climb and the end of it. What does Amos's body do at the start, and what does it do at the end?",
        "Amos's louder voice does not happen at the start of the climb, so it cannot show how he feels there. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "Near the bottom, Amos stops and grabs the rail with both hands. Holding on that tight shows he is scared.",
        "Later, his voice gets louder, and at the top he lets go of the rail. Those show he is getting braver.",
        "Part A: He feels scared. Part B: \"Amos stopped on the fourth step and grabbed the rail with both hands.\"",
        "The sentence about the stairs describes the tower, and the louder voice comes later, after he has begun to feel braver."
      ],
      misconception: "A common mix-up is choosing a sentence from later in the story, when the question asks how he feels at the start.",
      why: "Part A: He feels scared. Part B: \"Amos stopped on the fourth step and grabbed the rail with both hands.\" Grabbing the rail shows fear at the start. His louder voice and letting go come later, and the zigzag stairs describe the tower." },
    { id: "SK-TT1a-S09", type: "match", points: 2, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-C09"],
      stem: ["Grandpa could not find his reading glasses, so he could not read Kemi her bedtime story. \"I had them when I watered the tomatoes,\" he said. \"I may have knelt down by the plants.\" Kemi ran out to the garden with a flashlight. A shiny glint was poking out from under the tomato leaves. Kemi held up the glasses. \"Found them!\" she said, and Grandpa opened the book."],
      prompt: "Read the story. How does each detail move the plot? Match each detail to what it does in the story.",
      cols: ["Starts the problem", "Helps Kemi know where to look", "Solves the problem"],
      rows: [
        { text: "Grandpa cannot find his reading glasses.", answer: 0 },
        { text: "\"I had them when I watered the tomatoes.\"", answer: 1 },
        { text: "\"I may have knelt down by the plants.\"", answer: 1 },
        { text: "Kemi holds up the glasses and says, \"Found them!\"", answer: 2 }
      ],
      clue: "Events and words can move a plot. Ask: does this start the problem, keep the search going, or end it?",
      hints: [
        "Events and words can move a plot. Ask: does this start the problem, keep the search going, or end it?",
        "For each detail, ask what Kemi knows, or what she does, right after it.",
        "The glasses go missing before anyone starts to search, so that detail starts the problem. Work out the other three the same way."
      ],
      how: [
        "Grandpa cannot find his glasses, so he cannot read the story. That starts the problem.",
        "Grandpa's two comments send Kemi to the garden and tell her to look low, near the plants. Both help her know where to look.",
        "Kemi holding up the glasses ends the search, so it solves the problem.",
        "So: starts the problem, helps her know where to look, helps her know where to look, solves the problem."
      ],
      misconception: "A common mix-up is thinking a clue solves the problem. A clue points the way; the problem is solved when the glasses are found.",
      why: "The missing glasses start the problem. Grandpa's two comments each help Kemi know where to look. Holding up the glasses solves the problem." },
    { id: "SK-TT1a-S10", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.a"], passages: ["p6"],
      like: ["SK-TT1a-C10"],
      prompt: "Why does the author describe the numbered signs on the stairs?",
      choices: [
        { text: "They help Amos tell how close he is to the top.", correct: true },
        { text: "They show that the fire tower is old and falling apart." },
        { text: "They show that Naomi does not want to climb any higher." },
        { text: "They show that the ranger is waiting for them at the top." }
      ],
      clue: "Authors put a describing detail in a story for a reason. Ask what the detail does for the characters and for what happens next.",
      hints: [
        "Authors put a describing detail in a story for a reason. Ask what the detail does for the characters and for what happens next.",
        "Find the signs, and read what Naomi says about them. Then follow the numbers as the children climb.",
        "Nothing in the story says the tower is falling apart, so that choice has no support. Test each choice that is left against the story."
      ],
      how: [
        "Naomi says the ranger told them there are six signs, and number 6 means the top.",
        "As they climb, Amos reads each number out loud, so he always knows how many signs are left.",
        "The answer is \"They help Amos tell how close he is to the top.\" The signs are a clue that keeps the climb going.",
        "Nothing says the tower is falling apart, Naomi keeps climbing, and the story never says the ranger is at the top."
      ],
      misconception: "A common mix-up is thinking a describing detail is there only to show what a place looks like. Here it helps move the story along.",
      why: "The answer is \"They help Amos tell how close he is to the top.\" Naomi says number 6 means the top, and Amos reads each number out loud as he climbs. Nothing says the tower is falling apart, Naomi keeps climbing, and the ranger is never at the top." },
    { id: "SK-TT1a-S11", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-C11"],
      stem: ["At the town pool, the kids' swim race was about to begin. Little Dani stood frozen at the edge. \"I can't do it,\" she whispered.", "Her big sister, Rue, slid into the water at the far end of the lane. \"You don't have to win,\" Rue said gently. \"Just swim to me.\"", "Dani took a deep breath, jumped in and paddled all the way to Rue's arms."],
      prompt: "Read the story. Then complete the sentences. Choose the best answer for each blank.",
      text: "Rue's words show that she is {0}. Her words move the plot forward because {1}.",
      slots: [
        { options: ["caring", "bossy", "bored"], answer: 0 },
        { options: ["Dani finds the courage to swim", "the race is called off for the day", "Rue decides to swim the race herself"], answer: 0 }
      ],
      clue: "Dialogue can show what a character is like, and it can change what happens next. Ask what these words show about her, and what changes after she says them.",
      hints: [
        "Dialogue can show what a character is like, and it can change what happens next. Ask what these words show about her, and what changes after she says them.",
        "Compare what Dani does before Rue speaks with what she does after.",
        "Rue speaks gently and tells Dani she does not have to win, so she is not giving orders. For the second blank, ask what Dani does next."
      ],
      how: [
        "Dani is frozen at the edge and says she can't do it.",
        "Rue gets in the water, speaks gently, and tells Dani to just swim to her. That shows she is caring.",
        "After Rue speaks, Dani jumps in and swims all the way to her. Rue's words help Dani find her courage.",
        "The answers are caring and Dani finds the courage to swim. Nothing says the race is called off, and Rue waits at the end instead of racing."
      ],
      misconception: "A common mix-up is calling a character bossy because she tells someone what to do. Listen to how she says it and why.",
      why: "The answers are caring and Dani finds the courage to swim. Rue speaks gently and waits at the end of the lane, and after her words, frozen Dani jumps in and swims to her." },
    { id: "SK-TT1a-S12", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.a"], passages: ["p6"],
      like: ["SK-TT1a-C12"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does Amos do because of what Naomi says in paragraph 4?",
        choices: [
          { text: "He counts the signs out loud as he climbs, so he keeps going.", correct: true },
          { text: "He turns around and walks back down the stairs." },
          { text: "He waits on the fourth step until Naomi comes back." },
          { text: "He races ahead of Naomi and reaches the top first." }
        ] },
      partB: { prompt: "Which sentence from the story shows what Amos did because of her words?",
        choices: [
          { text: "\"Amos read each number out loud, and his voice got a little louder every time.\"", correct: true },
          { text: "\"Amos stopped on the fourth step and grabbed the rail with both hands.\"" },
          { text: "\"Each sign had a number painted on it in bright yellow.\"" },
          { text: "\"Sunlight poured in, and green mountains rolled away in every direction like waves.\"" }
        ] },
      clue: "A character's words can give another character a reason to act. Find the words, then look for what happens after them.",
      hints: [
        "A character's words can give another character a reason to act. Find the words, then look for what happens after them.",
        "Find what Naomi tells Amos. Then look at what Amos does after he hears her.",
        "Amos never turns back down the stairs, so that choice does not fit Part A. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "In paragraph 4, Naomi says there are six signs and that number 6 means the top.",
        "After that, Amos counts the signs out loud, and his voice gets louder. He keeps climbing.",
        "Part A: He counts the signs out loud as he climbs, so he keeps going. Part B: \"Amos read each number out loud, and his voice got a little louder every time.\"",
        "He never turns back, waits for Naomi or races ahead. Grabbing the rail and the painted signs come before Naomi speaks, and the sunlight comes at the top."
      ],
      misconception: "A common mix-up is choosing a sentence that comes before the words. What happens because of them has to come after.",
      why: "Part A: He counts the signs out loud as he climbs, so he keeps going. Part B: \"Amos read each number out loud, and his voice got a little louder every time.\" Naomi tells Amos that sign 6 is the top, and he answers by counting each sign as he climbs. Grabbing the rail and the painted signs come before her words, and the sunlight comes later." },
    { id: "SK-TT1a-S13", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.a"], passages: ["p7"],
      like: ["SK-TT1a-C13"],
      prompt: "Read this sentence from paragraph 1: \"Only the crickets chirped, and the trees stood like tall black shadows.\" How does this description help the story?",
      choices: [
        { text: "It shows how dark the path is before the stars appear.", correct: true },
        { text: "It shows that Selah is lost and cannot find the cabin." },
        { text: "It warns that wild animals are coming down the path." },
        { text: "It shows that Grandma Rose is angry about the dark." }
      ],
      clue: "Description can do more than help you picture a place. It can also set up something that comes next in the story.",
      hints: [
        "Description can do more than help you picture a place. It can also set up something that comes next in the story.",
        "Compare the path at the start of the story with the sky once the flashlight is off.",
        "Nothing in the story says Selah is lost, so that choice has no support. Test each choice that is left against what happens after the flashlight goes off."
      ],
      how: [
        "The first paragraph shows a path that is dark and still, with only crickets making a sound.",
        "Later, Selah turns off her flashlight, and the sky fills with more stars than she has ever seen.",
        "The answer is \"It shows how dark the path is before the stars appear.\"",
        "Selah is not lost, no animals come, and Grandma Rose speaks softly and is not angry."
      ],
      misconception: "A common mix-up is thinking a dark scene must mean danger. Here the darkness sets up the bright stars.",
      why: "The answer is \"It shows how dark the path is before the stars appear.\" The dark, quiet path comes first, and the stars shine against it after Selah turns off her flashlight. Selah is not lost, no animals come, and Grandma Rose is calm." },
    { id: "SK-TT1a-S14", type: "ms", points: 2, dok: 3, std: ["3.T.T.1.a"], passages: [], pick: 2,
      like: ["SK-TT1a-C14"],
      stem: ["Story 1: Crunch! Crunch! Corbin's sneakers crushed dry leaves on the school path. His class was making a leaf chart for science, and he had found only brown leaves. Then he looked up. A small tree by the fence was bright red. Corbin added three red leaves to the chart. \"Now our chart has every color,\" he said.", "Story 2: Ding! The bell over the door rang as Wren carried her torn backpack into Mr. Bello's sewing shop. Mr. Bello showed her how to sew a strong stitch along the rip. Wren sewed the last few stitches herself. \"My backpack is as good as new,\" she said."],
      prompt: "Read the two stories. Think about how they are written. Which TWO sentences are true about BOTH stories?",
      choices: [
        { text: "Each story begins with a word that copies a sound.", correct: true },
        { text: "Each story ends with the main character's own words.", correct: true },
        { text: "In each story, a grown-up shows the child how to fix something." },
        { text: "Each story begins with a character asking a question." },
        { text: "Each story takes place at the child's school." }
      ],
      clue: "To compare how two stories are written, look at the same part in each one. A sentence must be true for both.",
      hints: [
        "To compare how two stories are written, look at the same part in each one. A sentence must be true for both.",
        "Look at the first words, the middle and the last lines of each story. Choose two.",
        "Only Wren's story has a grown-up who shows how to fix something, so that sentence does not fit. Check each sentence that is left against both stories."
      ],
      how: [
        "Beginnings: Story 1 starts with \"Crunch! Crunch!\" and Story 2 starts with \"Ding!\" Each one begins with a word that copies a sound.",
        "Endings: Corbin says the chart has every color, and Wren says her backpack is as good as new. Each story ends with the main character's own words.",
        "The answers are \"Each story begins with a word that copies a sound.\" and \"Each story ends with the main character's own words.\"",
        "Only Mr. Bello shows a child how to fix something, neither story begins with a question, and only Corbin's story happens at school."
      ],
      misconception: "A common mix-up is choosing a sentence that is true for only one of the two stories.",
      why: "The answers are \"Each story begins with a word that copies a sound.\" and \"Each story ends with the main character's own words.\" Both open with a sound word, and both end with the child speaking. Only Wren gets help fixing something, neither begins with a question, and only Corbin is at school." },
    { id: "SK-TT1a-S15", type: "ms", points: 2, dok: 2, std: ["3.T.T.1.a"], passages: [], pick: 2,
      like: ["SK-TT1a-C15"],
      stem: ["Jonah wrote a story about a train station on a busy morning. His teacher says, \"I cannot picture the crowd yet.\" Jonah wants to add two sentences with details a reader can picture."],
      prompt: "Which TWO sentences would help the reader picture the crowd?",
      choices: [
        { text: "People pressed together on the platform, and Jonah had to turn sideways to squeeze past.", correct: true },
        { text: "A line of travelers reached from the ticket window all the way to the front doors.", correct: true },
        { text: "The station was very crowded that morning." },
        { text: "The big clock on the wall showed ten past eight." },
        { text: "Jonah's grandmother was waiting by the ticket window." }
      ],
      clue: "Details you can picture help a reader see a place. Look for sentences with something a reader could see happening in the crowd.",
      hints: [
        "Details you can picture help a reader see a place. Look for sentences with something a reader could see happening in the crowd.",
        "Picture each sentence. Does it show something happening in the station, or does it only say how the station is? Choose two.",
        "The clock tells the time, but it shows nothing about the crowd. Check each other sentence the same way."
      ],
      how: [
        "Showing means the reader sees what is happening and can tell what the place is like without being told.",
        "People pressed together, Jonah squeezing past, and a long line of travelers are details that show a crowd.",
        "The answers are \"People pressed together on the platform, and Jonah had to turn sideways to squeeze past.\" and \"A line of travelers reached from the ticket window all the way to the front doors.\"",
        "\"The station was very crowded\" names the idea instead of showing it. The clock and his grandmother's spot do not show a crowd."
      ],
      misconception: "A common mix-up is choosing the sentence that names the idea. Naming it tells; a picture of what happens shows it.",
      why: "The answers are \"People pressed together on the platform, and Jonah had to turn sideways to squeeze past.\" and \"A line of travelers reached from the ticket window all the way to the front doors.\" Both let the reader see the crowd. \"The station was very crowded\" only tells it, and the clock and the grandmother's spot show nothing about a crowd." }
  ],
  /* Hints and Show me how for the items kept in practice: refs P4 and P5 (core set 1) and Together P1-P3. */
  addons: {
    "SK-TT1a-P1": {
      hints: [
        "Ask what the describing words in paragraph 1 help you picture.",
        "Read paragraph 1 again, and list everything that happens there.",
        "Mateo is in the middle of his favorite show when the screen goes black, so he is not bored. Test each choice that is left against paragraph 1."
      ],
      how: [
        "Paragraph 1 says thunder booms over Atlanta and rain beats against the windows.",
        "Then the screen goes black and the whole room goes dark, which can happen in a big storm.",
        "The answer is \"A strong storm is going on outside.\"",
        "Mateo is enjoying his show, and Abuela is not in paragraph 1. The screen goes black at the same moment the whole room goes dark, so the power is out; the TV is not broken."
      ],
      misconception: "A common mix-up is choosing a detail about a character when the question asks what the details about the place show." },
    "SK-TT1a-P2": {
      hints: [
        "The writer does not say how Mateo feels. Look for sentences that show a feeling without naming it.",
        "Read paragraphs 1, 2 and 5. Choose two sentences for Part B.",
        "\"The whole room went dark\" tells about the room, not about Mateo. For Part B, both sentences must match your Part A answer."
      ],
      how: [
        "Right after the lights go out, Mateo's voice comes out high and squeaky.",
        "He pulls his blanket up to his chin. A squeaky voice and hiding under a blanket show fear.",
        "Part A: He feels scared. Part B: \"His voice came out high and squeaky.\" and \"He pulled his blanket up to his chin.\"",
        "The room going dark is the setting, not his feeling, and tapping and singing come later."
      ],
      misconception: "A common mix-up is choosing a sentence about the setting, like the room going dark, as proof of a feeling." },
    "SK-TT1a-P3": {
      hints: [
        "Dialogue can show what a character is like. Read what Abuela says and how she says it.",
        "Read paragraph 3. Notice what she does as she speaks, and then what she does next in paragraph 4.",
        "Abuela never tells Mateo to go to bed, so that choice has no support. Test each choice that is left against her words."
      ],
      how: [
        "Abuela says the storm took their show, and she says it with a wink.",
        "Then she says they will just make their own, and soon she is playing her guitar.",
        "The answer is \"She stays calm and turns the problem into fun.\"",
        "Someone who winks is not upset or worried, and she never mentions bed."
      ] },
    "SK-TT1a-P4": {
      hints: [
        "Dialogue is what a character says, inside quotation marks. An action is something a character does. Description helps you picture the place.",
        "For each sentence, look for quotation marks first. Then ask: is someone doing something, or is it a picture of the place?",
        "\"So we will just make our own\" is in quotation marks, so it is dialogue. Sort the other three sentences the same way."
      ],
      how: [
        "\"So we will just make our own\" is in quotation marks. Abuela says it, so it is dialogue.",
        "Tapping his feet and pulling up his blanket are things Mateo does, so they are actions.",
        "Thunder booming and rain beating on the windows help you picture the stormy night, so that sentence is description.",
        "So: dialogue, action, description, action."
      ],
      misconception: "A common mix-up is calling any sentence about a character dialogue. Dialogue must be the character's own words in quotation marks." },
    "SK-TT1a-P5": {
      hints: [
        "Dialogue is the words a character says. First check who is speaking in each line.",
        "Read the lines in paragraphs 2, 3 and 6. For each one, ask who says it and how that person feels.",
        "\"Well, the storm took our show\" is Abuela talking, so it tells how she feels, not Mateo. Check each line that is left."
      ],
      how: [
        "The two lines in paragraph 3 are spoken by Abuela.",
        "\"Abuela!\" is Mateo calling out when the lights first go out and he is scared.",
        "When the lights come back on, Mateo asks, \"Can we keep them off a little longer?\" He wants the music night to keep going.",
        "The answer is that last line: it shows Mateo enjoyed the night with Abuela."
      ],
      misconception: "A common mix-up is choosing a line that someone else says. Check who is speaking first." }
  },
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
  ],
  /* PP-004 form B of the skill check (agent formB-lit). Same code, points (8) and DOK mix
     (2,2,3,2,3,2) as form A, on a new passage p3. NEEDS INDEPENDENT REVIEW.
     See docs/audits/work/pp004-formB-formB-lit.md. */
  testB: [
    { id: "SK-TT1a-TB1", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "When does the story most likely take place?",
      choices: [
        { text: "early in the morning", correct: true },
        { text: "around lunchtime" },
        { text: "late in the evening" },
        { text: "in the middle of the night" }
      ],
      clue: "The writer never names the time. Look at the weather, at how Imani feels, and at what Pop-Pop says the goats want.",
      why: "The answer is early in the morning. Fog covers the farm, Imani yawns while she does her chores, and Pop-Pop says goats never go far from breakfast. Breakfast is a morning meal, so the details of the setting point to early morning, not lunchtime, evening or night." },
    { id: "SK-TT1a-TB2", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "In paragraph 4, Pop-Pop shakes the feed bucket hard. What does this action show about him?",
      choices: [
        { text: "He knows a smart way to get the goats to come back.", correct: true },
        { text: "He is angry that the goats ran off." },
        { text: "He is trying to scare the goats away from the farm." },
        { text: "He wants Imani to go inside and eat her breakfast." }
      ],
      clue: "Think about what hungry goats would hear when the feed rattles. Then look at what happens right after.",
      why: "The answer is \"He knows a smart way to get the goats to come back.\" The rattling feed tells the hungry goats that food is ready, and soon three goats trot back. He just told Imani not to worry, so he is not angry, and he wants the goats to come closer, not run away." },
    { id: "SK-TT1a-TB3", type: "ebsr", points: 2, dok: 3, passages: ["p3"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How do Imani's words in paragraph 3 move the plot forward?",
        choices: [
          { text: "They tell Pop-Pop about the problem, so he rushes out to help.", correct: true },
          { text: "They solve the problem by calling the goats back to the pen." },
          { text: "They explain how the goats were able to open the gate." },
          { text: "They show that Imani is glad the goats are gone." }
        ] },
      partB: { prompt: "Which sentence shows what happens because of Imani's words?",
        choices: [
          { text: "Pop-Pop came running from the porch, still in his slippers.", correct: true },
          { text: "The pen smelled like wet hay." },
          { text: "Imani heard a bell jingle behind the barn, and then another." },
          { text: "Imani laughed and latched the gate tight." }
        ] },
      clue: "Read what Imani shouts. Then read the very next paragraph. Who hears her, and what does that person do?",
      why: "Part A: They tell Pop-Pop about the problem, so he rushes out to help. Part B: \"Pop-Pop came running from the porch, still in his slippers.\" Imani's shout lets Pop-Pop know the goats are gone, and he comes so fast he does not change his slippers. Her words do not bring the goats back; the rattling feed does that later. The bell and the latched gate come later, too." },
    { id: "SK-TT1a-TB4", type: "hottext", points: 1, dok: 2, passages: ["p3"],
      prompt: "Which sentence uses description to show how the setting has changed by the end of the story? Choose the sentence in the passage.",
      targets: ["p3:1:1", "p3:1:2", "p3:2:2", "p3:5:1", "p3:7:1"],
      answer: ["p3:7:1"], pick: 1,
      clue: "Think about what the farm looked like at the very start. Find the sentence that shows the farm looking different.",
      why: "The answer is \"By then, the sun had burned away the fog, and the whole farm sparkled.\" At the start, fog lay over the farm like a gray blanket. At the end, the fog is gone and the farm sparkles. The other sentences describe the farm, the pen or a sound, but they do not show a change." },
    { id: "SK-TT1a-TB5", type: "mc", points: 1, dok: 3, passages: ["p3"],
      prompt: "How does the dialogue in paragraph 6 help end the story?",
      choices: [
        { text: "It shows the trouble is over and Imani has learned something.", correct: true },
        { text: "It starts a new problem that the story never solves." },
        { text: "It shows that Imani is still upset with the goats." },
        { text: "It tells the reader who left the gate open." }
      ],
      clue: "Look at what Imani does just before she speaks. Then think about what \"Next time\" tells you she will do differently.",
      why: "The answer is \"It shows the trouble is over and Imani has learned something.\" The goats are back, Imani laughs and latches the gate, and her words show she has a plan for next time. She laughs, so she is not upset, and the story never says who left the gate open." },
    { id: "SK-TT1a-TB6", type: "match", points: 2, dok: 2, passages: ["p3"],
      prompt: "What does each detail mostly help you understand? Match each detail from the story.",
      cols: ["A character", "The setting", "An event in the plot"],
      rows: [
        { text: "The grass was wet and cold, and the old red barn creaked in the wind.", answer: 1 },
        { text: "Imani bit her lip and stared at the empty pen.", answer: 0 },
        { text: "One by one, three goats trotted around the corner.", answer: 2 },
        { text: "The pen smelled like wet hay.", answer: 1 }
      ],
      clue: "Ask: Does this detail tell how someone feels or what they are like? Does it help me picture the place? Or does it tell something that happens?",
      why: "The wet grass, the creaking barn and the smell of wet hay help you picture the setting. Imani biting her lip shows a character's feeling: she is worried. The goats trotting back is an event in the plot, because it solves the problem of the missing goats." }
  ]
});
PP.addLesson({
  code: "3.T.T.1.b",
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
      "Characters are the people or animals in the story. The main character is the one the story is mostly about. Other characters have jobs in the plot, too: one might cause the trouble, and some characters help fix it.",
      "The setting is where and when the story happens, like a farm on a rainy morning.",
      "The problem is what goes wrong or what a character wants but cannot get yet. The solution is how the problem is fixed by the end. Near the end, look for proof that the fix worked, and check that the whole problem is fixed, not just part of it.",
      "Clue words help you follow a story. One day often starts the action. But often shows the problem. Then and so show what the character tries. Finally and in the end lead you to the solution. To sum up any story, say: Somebody (the main character) Wanted something, But (the problem), So (what the character does), Then (how it ends).",
      "Story parts work together to make things happen. Ask: How does the place or the time change what happens? How does the problem make the character act? A rainy night, a faraway place or not having enough time can cause the trouble or make it harder to fix. When a first try does not work, ask what is really causing the problem. To tell whether two fixes work for the same reason, say what each fix changes, not what it looks like."
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
      show: ["Every morning, the sprinkler soaked the Pham family's newspaper on the front walk. Dad moved the sprinkler to the back of the yard. The next morning, Mai picked up the paper, and it was dry. By the end of the week, every paper had been dry, and Dad read the news at breakfast again."],
      ask: "How do you know the problem is fully fixed?",
      steps: [
        "Say the problem: the newspaper gets soaked every morning.",
        "Find the first sign that the fix works: the next morning, the paper is dry.",
        "Ask whether the whole problem is fixed. One dry morning could be luck. A dry paper every day for a week, and Dad reading at breakfast again, shows it is really fixed."
      ],
      answer: "The paper stays dry every morning for a whole week, and Dad reads the news at breakfast again. That proves the fix worked, not just once."
    },
    {
      show: ["The Ruiz family set up their tent at a lake deep in the woods. The nearest store was an hour away. At supper, Ben opened the cooler and groaned. He had forgotten the hot dog buns! So Ben looked in the food box and found a pack of tortillas. The family wrapped their hot dogs in tortillas, and everyone said it was the best supper of the trip."],
      ask: "How do the setting and the problem change what happens in this story?",
      steps: [
        "Find the setting: a campsite at a lake deep in the woods, an hour from a store.",
        "Ask how the setting changes things. If a store were next door, Ben could just buy buns. Because the store is far away, he cannot.",
        "Ask how the problem makes the character act. With no buns and no store, Ben has to find another way, so he looks in the food box.",
        "Put it together. The faraway setting makes the problem harder, and that leads Ben to the tortillas, which solve it."
      ],
      answer: "The campsite is far from any store, so Ben cannot buy new buns. That makes him look for another way, and the tortillas solve the problem."
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
      ] },
    /* Expansion 2026-10-22 (batch B1, author b1a): p3 is used only by core set 2 and one set 3
       compare item (C14); p4 (\"The Back Row\", reworked after B1 review) only by core set 3. Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "The Ice Cube Challenge", genre: "Literary text",
      paragraphs: [
        ["The air conditioner at Pine Street School broke on the hottest day of August, and Room 6 felt like an oven."],
        ["\"Keep your ice cube from melting until the lunch bell rings,\" said Ms. Banks.", "Each team got two ice cubes, some foil and an old wool sock."],
        ["Bryce set their first cube in a paper cup on the sunny windowsill.", "\"It can sit in the fresh air,\" he said.", "But the sun beat down on the glass, and in ten minutes the cube was a puddle."],
        ["Now there was only one cube left.", "Ana thought hard.", "\"Wool keeps my feet warm in winter, so maybe it can keep the heat out, too,\" she said."],
        ["She wrapped the last cube in foil and tucked it inside the sock.", "Bryce set the sock in a shady corner under his desk."],
        ["At the lunch bell, the other teams had cups of water.", "Ana unrolled the sock.", "Inside sat a small ice cube, still cold and shiny."],
        ["\"You were right about the sock,\" Bryce said.", "Ms. Banks gave their team a gold star."]
      ] },
    { id: "p4", title: "The Back Row", genre: "Literary text",
      paragraphs: [
        ["The third graders at Oak Ridge School were putting on a play.", "They would perform it in the old gym, where two giant fans roared at the back to keep the room cool."],
        ["At the last practice, the first graders watched from the back rows.", "Halfway through the first scene, a girl in the last row raised her hand.", "\"We can't hear anything!\" she called."],
        ["The play was that same night.", "So the actors shouted their lines until their throats hurt.", "The first graders still shook their heads."],
        ["Malia climbed down from the stage and sat in the last row.", "From there, the actors' voices were lost under the roar of the fans.", "\"It's not our voices,\" she said. \"It's the fans.\""],
        ["Mr. Oduya, the custodian, could not turn the fans off, because the gym would get too hot.", "Instead, he helped the class carry every row of chairs to the front half of the gym, far from the fans."],
        ["That night, the gym was packed.", "Even the families in the very back row laughed at every joke."]
      ] },
    /* Expansion 2026-10-22 (batch SIM-1): p5 and p6 are used only by similar items. NEEDS INDEPENDENT REVIEW. */
    { id: "p5", title: "The Midnight Cricket", genre: "Literary text",
      paragraphs: [
        ["Tomorrow was the class trip to the aquarium, and Emre had to wake up at six.", "He climbed into bed early and turned off the lamp."],
        ["Chirp! Chirp! Chirp!", "The sound filled the dark room.", "Emre pulled his pillow over his head, but the chirping went right through it."],
        ["Emre tiptoed down the hall.", "\"Grandpa, something is singing in my room, and I cannot sleep,\" he whispered."],
        ["Grandpa came in and listened.", "\"It's a cricket,\" he said.", "\"It goes quiet when we move close, so we must wait for it to sing again.\"", "They waited, and soon the chirping started up under the dresser."],
        ["Emre held a cup upside down over the spot while Grandpa slid a card underneath.", "Together they carried the cricket to the porch and set it free."],
        ["The room was quiet at last.", "Emre was asleep in minutes."]
      ] },
    { id: "p6", title: "The Stuck Zipper", genre: "Literary text",
      paragraphs: [
        ["It was a freezing morning, and the school bus would leave in five minutes.", "Idris pulled on his puffy blue jacket and tugged the zipper.", "It stuck halfway up."],
        ["First, Idris yanked the zipper harder.", "The little tab bent, but the zipper did not move."],
        ["Next, he wiggled it up and down.", "A piece of cloth stayed caught in its teeth."],
        ["\"Let me see,\" said his big sister, Dara.", "She looked closely at the teeth.", "\"Rub a pencil along them first,\" she said.", "\"The pencil makes them slippery.\""],
        ["Idris rubbed a pencil along the teeth and pulled the cloth free.", "The zipper glided all the way up to his chin."],
        ["Idris grinned and grabbed his backpack.", "He raced out to the bus, and his neck stayed warm all the way to school."]
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
    { id: "SK-TT1b-P7", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The rabbits come into the garden at night. How does that part of the setting affect what Jada does?",
      choices: [
        { text: "No one is awake to chase the rabbits, so Jada needs a fix that works while everyone sleeps.", correct: true },
        { text: "The garden is too dark to see in, so Jada has to water the tomatoes at night." },
        { text: "The rabbits are easy to catch in the dark, so Jada waits by the gate to grab them." },
        { text: "Grandma Bea is asleep, so Jada has to take care of the whole garden alone." }
      ],
      clue: "Read paragraph 3 again. When do the rabbits come? Then look at the kind of fix Jada makes in paragraph 4. Why would that kind of fix be a good idea at that time?",
      why: "The answer is \"No one is awake to chase the rabbits, so Jada needs a fix that works while everyone sleeps.\" The rabbits come at night, when no one is in the garden to stop them. That is why Jada makes something that blocks the gate all night long instead of trying to chase them. Jada waters the garden in the morning, she never waits by the gate, and Grandma Bea helps her." },
    { id: "SK-TT1b-P4", type: "order", points: 2, dok: 2, passages: ["p1"],
      prompt: "Put the events of the story in order.",
      steps: [
        "Jada finds half of the tomatoes gone.",
        "Grandma Bea says rabbits come under the gate.",
        "Jada puts wire along the bottom of the gate.",
        "Every tomato is still on its vine."
      ],
      clue: "Think about how the story's events are linked. One thing leads to the next.",
      why: "The order is: Jada finds half the tomatoes gone, Grandma Bea says rabbits come under the gate, Jada puts wire along the gate, and then every tomato is still on its vine." },
    { id: "SK-TT1b-P5", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each detail from the story to the story part it shows.",
      cols: ["Character", "Setting", "Problem", "Solution"],
      rows: [
        { text: "Grandma Bea", answer: 0 },
        { text: "behind a house in Macon in summer", answer: 1 },
        { text: "Rabbits get into the garden and eat the tomatoes.", answer: 2 },
        { text: "Jada blocks the space under the gate.", answer: 3 }
      ],
      clue: "Ask four questions: Who? Where and when? What goes wrong? How is it fixed?",
      why: "Grandma Bea is a character. Behind a house in Macon in summer tells where and when, so it is the setting. Rabbits getting in and eating the tomatoes is the trouble the rest of the story is about fixing, so it is the problem. Blocking the space under the gate fixes it, so it is the solution." }
  ],
  /* ---------- Expansion 2026-10-22, batch B1 (author b1a). Pattern: 3.T.T.1.c (B0 reference). ----------
     core: fifteen independent items in three sets of five. { ref } reuses the Try items P7 and P4;
     they stay in practice, and the engine leaves them out of Practice Together, so Together shows
     P1, P2, P6, P3 and P5 (P5 left core after the B1 re-review; C03 replaces it). Hints and Show me how for refs and Together items are in addons.
     This code is shared with TS-PS; these items weight how each story part works in the plot.
     Author log: docs/expansion-2026-10-22/batches/B1-b1a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT1b-P7" },
      { ref: "SK-TT1b-P4" },
      { id: "SK-TT1b-C03", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.1.b"], passages: ["p1"],
        prompt: "Read paragraph 1 again. Then complete the sentences. Choose the best answer for each blank.",
        text: "In this story, Jada is {0}. The author says that every summer Grandma Bea grew tomatoes behind her house, so the reader can tell that {1}.",
        slots: [
          { options: ["the main character", "a helper who comes in near the end", "the one who causes the problem"], answer: 0 },
          { options: ["the garden matters to her, so losing the tomatoes is a real problem", "her tomatoes always grow well, so nothing can go wrong this year", "Grandma Bea sells her tomatoes at a market every summer"], answer: 0 }
        ],
        clue: "Details at the start of a story set things up. Ask who the story follows, and what the first paragraph tells you about the people in it.",
        hints: [
          "Details at the start of a story set things up. Ask who the story follows, and what the first paragraph tells you about the people in it.",
          "Read paragraph 1 again. Ask who the rest of the story follows.",
          "Half of the tomatoes are gone in paragraph 2, so something does go wrong this year. Test each choice that is left for the second blank against the whole story."
        ],
        how: [
          "The rest of the story follows Jada: she finds the trouble, thinks about it all day and checks the garden the next morning. So she is the main character.",
          "Paragraph 1 says Grandma Bea grows tomatoes every summer. Something she does year after year is something she cares about.",
          "So when half the tomatoes disappear, it is a real problem worth fixing. The answers are the main character and the garden matters to her, so losing the tomatoes is a real problem.",
          "Half the tomatoes do go missing, so things can go wrong this year. The story never says Grandma Bea sells her tomatoes; it only says she grows them behind her house."
        ],
        misconception: "A common mix-up is thinking a detail at the start is only background. Ask what it tells you about why the problem matters.",
        why: "The answers are the main character and the garden matters to her, so losing the tomatoes is a real problem. The story follows Jada from start to end. Growing tomatoes every summer shows the garden means a lot to Grandma Bea, so losing them matters. Half the tomatoes do go missing, and the story never says Grandma Bea sells them." },
      { id: "SK-TT1b-C04", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: [],
        stem: ["On Saturday morning, Ms. Lin wanted to read the new dragon book at the library's story hour. But when she opened it, only a whisper came out, because she had lost her voice. The children on the rug grew restless, and a few got up to leave.", "Then Amir, a fourth grader, offered to read the book aloud while Ms. Lin turned the pages and showed the pictures. Soon every child on the rug was listening."],
        prompt: "Read the story. What part does Amir play in the plot?",
        choices: [
          { text: "He is a helper whose actions make the solution possible.", correct: true },
          { text: "He is the main character, because he is the one who fixes the problem." },
          { text: "He causes the problem by making the children restless." },
          { text: "He has the problem, because he wants to read to the children." }
        ],
        clue: "Characters do different jobs in a plot. Ask who has the problem, and what each person does about it.",
        hints: [
          "Characters do different jobs in a plot. Ask who has the problem, and what each person does about it.",
          "Find the problem first. Then find what Amir does and what happens after that.",
          "The children were restless before Amir spoke up, so he did not cause the problem. Test each choice that is left."
        ],
        how: [
          "The problem: Ms. Lin has lost her voice, so the children get restless and some start to leave.",
          "Amir offers to read aloud while Ms. Lin shows the pictures. After that, every child is listening.",
          "The answer is \"He is a helper whose actions make the solution possible.\"",
          "Ms. Lin is the one with the goal and the problem, so the story is about her. Helping fix a problem does not make someone the main character, and the children were restless before Amir spoke."
        ],
        misconception: "A common mix-up is thinking that whoever fixes the problem must be the main character. A helper matters to the plot because of what he helps fix.",
        why: "The answer is \"He is a helper whose actions make the solution possible.\" The goal and the problem are Ms. Lin's: she wants to read the dragon book, but she has lost her voice and the children are restless. Amir reads aloud so the story hour can go on. Helping does not make him the main character, and he did not cause the restlessness." },
      { id: "SK-TT1b-C05", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.b"], passages: ["p1"],
        prompt: "In paragraph 5, the author writes, \"The footprints stopped right at the wire.\" Why does the author include this sentence?",
        choices: [
          { text: "It proves that the wire kept the rabbits out of the garden.", correct: true },
          { text: "It shows that the rabbits found a new way into the garden." },
          { text: "It shows that Jada left her own footprints near the gate." },
          { text: "It shows that the dirt was wet because it rained that night." }
        ],
        clue: "Ask what this sentence tells you, and compare it with what the footprints showed before.",
        hints: [
          "Ask what this sentence tells you, and compare it with what the footprints showed before.",
          "Find the footprints in paragraph 2. Where were they, and what was missing there?",
          "The story never says it rained, so that choice has no support. Test each choice that is left."
        ],
        how: [
          "In paragraph 2, tiny footprints cross the dirt where tomatoes are missing. The footprints show where the rabbits went.",
          "In paragraph 5, the footprints stop right at the wire, and every tomato is still there.",
          "So the rabbits came to the gate but could not get past the wire. The answer is \"It proves that the wire kept the rabbits out of the garden.\"",
          "The tomatoes are safe, so the rabbits found no new way in; the footprints are tiny, not Jada's; and the story never mentions rain."
        ],
        misconception: "A common mix-up is reading a detail near the end as a new problem. Near the end, a detail is often proof that the solution worked.",
        why: "The answer is \"It proves that the wire kept the rabbits out of the garden.\" The rabbits' tiny footprints come up to the wire and stop, and every tomato is safe. They did not find a new way in, the footprints are not Jada's, and the story never mentions rain." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT1b-C06", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: ["p3"],
        prompt: "How does the setting make the challenge harder for the class?",
        choices: [
          { text: "The room is so hot that ice will melt very fast.", correct: true },
          { text: "The sun is so bright on the windowsill that no one can see the cube." },
          { text: "The teams get only one ice cube each, so they have no extra." },
          { text: "The teams have only foil and a sock, so they have nothing cold to use." }
        ],
        clue: "The setting is where and when a story happens. Ask how the place or the time makes the problem easier or harder.",
        hints: [
          "The setting is where and when a story happens. Ask how the place or the time makes the problem easier or harder.",
          "Find the details that tell where and when the story happens.",
          "Each team gets two cubes, not one, so that choice misreads the story. Test each choice that is left."
        ],
        how: [
          "Paragraph 1 says the air conditioner broke on the hottest day of August, and Room 6 felt like an oven.",
          "Ice melts faster when it is hot, so the setting makes keeping an ice cube frozen much harder.",
          "The answer is \"The room is so hot that ice will melt very fast.\"",
          "The bright windowsill is where Bryce puts one cube, not the trouble the whole class has; each team gets two cubes; and the foil and sock are supplies, not the setting."
        ],
        misconception: "A common mix-up is treating the setting as just a place. Ask how the place and the time change the problem.",
        why: "The answer is \"The room is so hot that ice will melt very fast.\" The air conditioner broke on the hottest day of August, and the room felt like an oven. The windowsill is only where one cube was put, each team gets two cubes, and the foil and sock are supplies, not the setting." },
      { id: "SK-TT1b-C07", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.b"], passages: ["p3"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why does Ana need a new plan in paragraph 4?",
          choices: [
            { text: "The first cube melted, so the team has only one chance left.", correct: true },
            { text: "Ms. Banks says that paper cups are against the rules." },
            { text: "Bryce asks Ana to think of a better plan for him." },
            { text: "The other teams have already finished the challenge." }
          ] },
        partB: { prompt: "Which TWO sentences from the story best support the answer to Part A?", pick: 2,
          choices: [
            { text: "\"But the sun beat down on the glass, and in ten minutes the cube was a puddle.\"", correct: true },
            { text: "\"Now there was only one cube left.\"", correct: true },
            { text: "\"Ana thought hard.\"" },
            { text: "\"It can sit in the fresh air,\" he said." },
            { text: "\"At the lunch bell, the other teams had cups of water.\"" }
          ] },
        clue: "A problem makes a character act. When a try does not work, ask what has changed and what the character has to do now.",
        hints: [
          "A problem makes a character act. When a try does not work, ask what has changed and what the character has to do now.",
          "Read paragraph 3 to see how Bryce's try turns out. Then read paragraph 4.",
          "Ms. Banks never talks about rules for cups, so that choice does not fit Part A. For Part B, choose two sentences that match your Part A answer."
        ],
        how: [
          "In paragraph 3, Bryce's cube sits in the sun and turns into a puddle in ten minutes.",
          "Paragraph 4 says there is only one cube left. If that one melts too, the team loses the challenge.",
          "Part A: The first cube melted, so the team has only one chance left. Part B: \"But the sun beat down on the glass, and in ten minutes the cube was a puddle.\" and \"Now there was only one cube left.\"",
          "\"Ana thought hard\" tells what she does, not why. Bryce's fresh-air line is his reason for the first try, and the lunch bell comes at the very end."
        ],
        misconception: "A common mix-up is choosing a sentence about thinking. The question asks why a new plan is needed, so look for what went wrong.",
        why: "Part A: The first cube melted, so the team has only one chance left. Part B: \"But the sun beat down on the glass, and in ten minutes the cube was a puddle.\" and \"Now there was only one cube left.\" The first try failed, so Ana needs a plan that saves the last cube. Nobody talks about rules for cups, Bryce never asks her for a plan, and the other teams are still working." },
      { id: "SK-TT1b-C08", type: "hottext", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: ["p3"],
        prompt: "Which sentence tells the idea that will solve the problem? Choose the sentence in the passage.",
        targets: ["p3:3:2", "p3:4:2", "p3:4:3", "p3:5:1", "p3:7:1"],
        answer: ["p3:4:3"], pick: 1,
        clue: "An idea is a plan a character thinks of before acting on it. Look for words that explain a plan, not words that carry it out.",
        hints: [
          "An idea is a plan a character thinks of before acting on it. Look for words that explain a plan, not words that carry it out.",
          "Look at the part of the story after the first try fails.",
          "Wrapping the cube is something Ana does with her hands after she has the idea. Check each other sentence: does it tell what the idea is?"
        ],
        how: [
          "The idea that solves the problem has to come before the last cube is wrapped.",
          "In paragraph 4, Ana explains a plan: wool keeps her feet warm in winter, so it might keep the heat away from the ice.",
          "The answer is that sentence in paragraph 4, where Ana says what wool might do.",
          "\"Ana thought hard\" shows she is thinking but not what she thinks. Bryce's fresh-air line is the first try, which fails. Wrapping the cube carries out the idea, and \"You were right about the sock\" comes at the end of the story, after the cube is unwrapped, so it is not the idea itself."
        ],
        misconception: "A common mix-up is choosing the action that carries out the plan. The question asks for the idea itself.",
        why: "The answer is Ana's sentence in paragraph 4 about wool keeping her feet warm in winter, so maybe it can keep the heat out, too. That idea leads to the sock that saves the last cube. \"Ana thought hard\" does not say what she thinks, Bryce's fresh-air line is the first try, wrapping the cube carries out the idea, and \"You were right about the sock\" comes at the end of the story, so it is not the idea itself." },
      { id: "SK-TT1b-C09", type: "ms", points: 2, dok: 2, std: ["3.T.T.1.b"], passages: ["p3"], pick: 2,
        prompt: "Which TWO details show that the problem has been solved?",
        choices: [
          { text: "The team's cube is still frozen when the lunch bell rings.", correct: true },
          { text: "Bryce tells Ana that she was right about the sock.", correct: true },
          { text: "Ana wraps the last cube in foil and tucks it in a sock." },
          { text: "Bryce sets the first cube in a cup on the windowsill." },
          { text: "At the lunch bell, the other teams have only cups of water." }
        ],
        clue: "A solution fixes the problem. To prove a problem is solved, look for what shows the plan worked, not for the plan itself.",
        hints: [
          "A solution fixes the problem. To prove a problem is solved, look for what shows the plan worked, not for the plan itself.",
          "Read from the moment the cube is wrapped to the end of the story. Choose two.",
          "Wrapping the cube is part of the plan, but it happens before anyone knows whether the plan works. Check each other detail: does it prove the plan worked?"
        ],
        how: [
          "The problem is keeping a cube from melting until the lunch bell.",
          "When the bell rings, Ana unrolls the sock and finds the cube still cold and shiny. Then Bryce says she was right about the sock.",
          "The answers are \"The team's cube is still frozen when the lunch bell rings.\" and \"Bryce tells Ana that she was right about the sock.\"",
          "Wrapping the cube is the plan, not proof that it worked. The windowsill cube comes earlier, and the other teams' water shows only that their cubes melted, not that this team's plan worked."
        ],
        misconception: "A common mix-up is choosing the action that solves the problem instead of a detail that proves it worked.",
        why: "The answers are \"The team's cube is still frozen when the lunch bell rings.\" and \"Bryce tells Ana that she was right about the sock.\" Both show that the plan worked. Wrapping the cube is the plan itself, the windowsill comes earlier, and the other teams' water tells about them, not this team." },
      { id: "SK-TT1b-C10", type: "order", points: 2, dok: 2, std: ["3.T.T.1.b"], passages: ["p3"],
        prompt: "Put these events in the order they happen in the story.",
        steps: [
          "Bryce sets the first cube in a cup on the windowsill.",
          "Ana wraps the last cube in foil and tucks it in a sock.",
          "Bryce sets the sock in a shady corner under his desk.",
          "Ana unrolls the sock when the lunch bell rings.",
          "Ms. Banks gives the team a gold star."
        ],
        clue: "A plot moves from the problem, to the tries, to the solution and how it turns out. Use that pattern to put events in order.",
        hints: [
          "A plot moves from the problem, to the tries, to the solution and how it turns out. Use that pattern to put events in order.",
          "Ask which event is the try that fails, which ones carry out the new plan, and which ones show how it turned out.",
          "The windowsill cube is the try that fails, so it comes before the new plan. Use the same kind of thinking to place the other events."
        ],
        how: [
          "The try that fails comes first: Bryce sets a cube in a cup on the windowsill.",
          "Next comes the new plan. Ana wraps the last cube and tucks it in the sock, and only then can Bryce set the sock in the shady corner.",
          "Then the lunch bell rings, and Ana unrolls the sock.",
          "Last, Ms. Banks gives the team a gold star."
        ],
        misconception: "A common mix-up is putting the steps of the new plan in the wrong order. Ask what has to happen before each step can happen.",
        why: "The order is: Bryce sets the first cube on the windowsill, Ana wraps the last cube in foil and a sock, Bryce sets the sock in a shady corner, Ana unrolls the sock when the lunch bell rings, and Ms. Banks gives the team a gold star. That is the try that fails, the new plan, and how it turns out." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT1b-C11", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.b"], passages: ["p4"],
        prompt: "Complete the sentences about the problem in the story. Choose the best answer for each blank.",
        text: "Shouting does not fix the problem because {0}. The class has to fix the problem quickly because {1}.",
        slots: [
          { options: ["the fans drown out the actors' voices in the back", "the actors do not know their lines yet", "the actors are not shouting loudly enough"], answer: 0 },
          { options: ["the play is that same night", "the last practice is almost over", "the first graders have to go home soon"], answer: 0 }
        ],
        clue: "A setting can cause a problem. A problem can also have a reason it must be fixed soon. Think about both as you read.",
        hints: [
          "A setting can cause a problem. A problem can also have a reason it must be fixed soon. Think about both as you read.",
          "For the first blank, read what happens after the actors shout. For the second blank, look for a time clue in the story. There is more than one.",
          "The actors shout every line, so they do know their lines. Check each choice that is left for the first blank against what Malia hears from the last row."
        ],
        how: [
          "When Malia sits in the last row, the actors' voices are lost under the roar of the fans. Shouting cannot fix that, because the fans are louder.",
          "So the first answer is the fans drown out the actors' voices in the back.",
          "The play is that same night, so the class must fix the problem quickly.",
          "The actors know their lines. They already shouted until their throats hurt, and Malia says, \"It's not our voices,\" so louder shouting is not the answer. The last practice ending is not why the class must hurry, and no one has to go home."
        ],
        misconception: "A common mix-up is blaming the actors. Their voices were fine; the setting kept the back rows from hearing.",
        why: "The answers are the fans drown out the actors' voices in the back and the play is that same night. From the last row, Malia hears only the roar of the fans, and the play is that night. The actors know their lines and already shout as loudly as they can, the end of practice is not the reason to hurry, and no one has to go home." },
      { id: "SK-TT1b-C12", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.b"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "What is Mr. Oduya's job in the plot?",
          choices: [
            { text: "He helps carry out the fix once Malia finds the cause.", correct: true },
            { text: "He finds out what is really causing the problem." },
            { text: "He causes the problem by keeping the fans running." },
            { text: "He is the main character, because he moves the chairs." }
          ] },
        partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
          choices: [
            { text: "\"Instead, he helped the class carry every row of chairs to the front half of the gym, far from the fans.\"", correct: true },
            { text: "\"Mr. Oduya, the custodian, could not turn the fans off, because the gym would get too hot.\"" },
            { text: "\"Halfway through the first scene, a girl in the last row raised her hand.\"" },
            { text: "\"So the actors shouted their lines until their throats hurt.\"" }
          ] },
        clue: "Characters do different jobs in a plot. One may find out what is wrong, and another may do the work to set it right.",
        hints: [
          "Characters do different jobs in a plot. One may find out what is wrong, and another may do the work to set it right.",
          "Find the paragraph where Mr. Oduya appears, and read every sentence in it.",
          "Mr. Oduya never sits in the last row, so he is not the one who finds the cause. For Part B, the sentence must match your Part A answer."
        ],
        how: [
          "Malia sits in the last row and finds out what is causing the problem.",
          "Mr. Oduya cannot turn the fans off, so instead he helps the class carry the chairs to the front of the gym.",
          "Part A: He helps carry out the fix once Malia finds the cause. Part B: \"Instead, he helped the class carry every row of chairs to the front half of the gym, far from the fans.\"",
          "He does not find the cause, the fans were running before he came, and the story is mostly about Malia and her class, so he is not the main character. The sentence about turning the fans off tells what he cannot do, not how he helps."
        ],
        misconception: "A common mix-up is thinking that the character who does the most work is the main character. A helper matters because of what he helps fix.",
        why: "Part A: He helps carry out the fix once Malia finds the cause. Part B: \"Instead, he helped the class carry every row of chairs to the front half of the gym, far from the fans.\" Malia finds the cause, and Mr. Oduya helps move the chairs. He did not cause the problem, and he is a helper, not the main character." },
      { id: "SK-TT1b-C13", type: "match", points: 2, dok: 2, std: ["3.T.T.1.b"], passages: [],
        prompt: "Each sentence is the start of a new story. Match each setting to the problem it would most likely cause. Use each problem once.",
        cols: ["Getting somewhere on time", "Not having enough water", "Carrying something heavy"],
        rows: [
          { text: "Keoni lives on a boat far out in a quiet bay, and the school bus picks kids up on land at 7:30.", answer: 0 },
          { text: "Lupe wants to grow a garden in her desert town, where it has not rained for months.", answer: 1 },
          { text: "Dion's family has to bring a new couch home, and the elevator in their tall building is broken.", answer: 2 }
        ],
        clue: "A setting can cause a problem. Picture each place, and ask what would be hard for someone living there.",
        hints: [
          "A setting can cause a problem. Picture each place, and ask what would be hard for someone living there.",
          "Look for the most important detail in each setting: where the person is, and what is missing or broken.",
          "A desert where it has not rained for months is a place where something is missing. Work out the other two settings the same way."
        ],
        how: [
          "Keoni's home is on the water, but the bus picks kids up on land at a set time, so getting there on time is the hard part.",
          "Lupe's town is a desert with no rain for months, so a garden would not have enough water.",
          "Dion's family must move a couch up a tall building with no elevator, so carrying something heavy is the problem.",
          "Each setting causes a different problem because of where the story happens and what is missing or broken there."
        ],
        misconception: "A common mix-up is matching by one word instead of picturing what living in that setting would be like.",
        why: "Keoni lives on a boat, but the bus picks kids up on land at a set time, so getting somewhere on time is the problem. Lupe's desert town has had no rain for months, so her garden would not have enough water. Dion's family must bring a couch home with no elevator, so carrying something heavy is the problem." },
      /* Compares solutions across p3 (set 2) and p4; the item carries both passages, so set 3 stands alone. */
      { id: "SK-TT1b-C14", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.b"], passages: ["p3", "p4"],
        prompt: "How are the solutions in \"The Ice Cube Challenge\" and \"The Back Row\" alike?",
        choices: [
          { text: "In both, a child works out why the first try failed and picks a fix for that reason.", correct: true },
          { text: "In both, the children fix the problem by making something louder or bigger." },
          { text: "In both, the very first try works, so the children never need a new plan." },
          { text: "In both, the children give up and ask a teacher to fix the problem for them." }
        ],
        clue: "To compare two solutions, ask how each problem gets fixed. Then check that your answer is true for both stories.",
        hints: [
          "To compare two solutions, ask how each problem gets fixed. Then check that your answer is true for both stories.",
          "In each story, find the try that does not work and then the plan that does.",
          "In both stories the first try fails, so the choice about the first try working does not fit. Test the other choices against both stories."
        ],
        how: [
          "In \"The Ice Cube Challenge,\" the first cube melts in the sun. Ana works out that heat is the trouble and uses foil, wool and shade to keep heat away.",
          "In \"The Back Row,\" shouting does not help. Malia sits in the last row to find out why, and then the class fixes that.",
          "The answer is \"In both, a child works out why the first try failed and picks a fix for that reason.\"",
          "Shouting louder is the try that fails in the play story, the first try fails in both stories, and no teacher fixes either problem."
        ],
        misconception: "A common mix-up is choosing a sentence that is true for only one story. Check each choice against both stories.",
        why: "The answer is \"In both, a child works out why the first try failed and picks a fix for that reason.\" Ana works out that heat melts the ice, and Malia finds out why shouting does not help. Making things louder is the try that fails, the first try fails in both stories, and no teacher fixes either problem." },
      { id: "SK-TT1b-C15", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.b"], passages: ["p4"],
        prompt: "Which new story has a solution that works for the same reason the class's solution works?",
        choices: [
          { text: "Omari can't hear his piano teacher over the washing machine, so they move the lesson to a room far from it.", correct: true },
          { text: "Omari's piano sounds out of tune, so his teacher calls someone to come and fix the strings." },
          { text: "Omari can't hear his teacher, so he asks her to say each direction again, more slowly." },
          { text: "Omari's family can't see him on the stage, so he stands on a box while he sings." }
        ],
        clue: "First say in your own words why the class's plan works. Then find the new story whose plan works for the same reason, even if the people and things are different.",
        hints: [
          "First say in your own words why the class's plan works. Then find the new story whose plan works for the same reason, even if the people and things are different.",
          "Reread how the class fixes the problem. Then read each new story and ask what was wrong and what the fix changes.",
          "Omari's stage story has a stage, like the play, but sharing a place does not make the reason the same. Ask why each fix works, and test the stories that are left."
        ],
        how: [
          "The class's plan works because it moves the listeners away from what was making it hard to hear.",
          "Omari's lesson moves to a room far from the washing machine, so its noise can no longer cover his teacher's voice. That works for the same reason.",
          "The answer is \"Omari can't hear his piano teacher over the washing machine, so they move the lesson to a room far from it.\"",
          "Asking his teacher to repeat herself does not move him away from the noise. The out-of-tune piano is a different problem, and the box helps people see, not hear."
        ],
        misconception: "A common mix-up is matching a story by a shared thing, like a stage or not hearing, instead of by why the fix works.",
        why: "The answer is \"Omari can't hear his piano teacher over the washing machine, so they move the lesson to a room far from it.\" Like the chairs moved away from the fans, the lesson moves away from the noise. Repeating the directions does not get away from the noise, the piano problem is different, and the box helps people see." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short new scene. */
  similar: [
    { id: "SK-TT1b-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: [],
      like: ["SK-TT1b-C04", "SK-TT1b-C12"],
      stem: ["At the park cleanup, Ms. Reyes tried to lift a bag of leaves into the truck, but it was too heavy for her. Her neighbor, Mr. Cole, grabbed the other side. Together, they swung the bag into the truck."],
      prompt: "Why does the author include Mr. Cole in the story?",
      choices: [
        { text: "Without him, Ms. Reyes could not finish the job.", correct: true },
        { text: "He shows the reader how messy the park is." },
        { text: "He is the main character, because the bag gets into the truck when he helps." },
        { text: "He is the one who filled the bag too full." }
      ],
      clue: "Authors add a character for a reason. Ask what job this character does in the story.",
      hints: [
        "Authors add a character for a reason. Ask what job this character does in the story.",
        "Find the problem in the first sentence. Then read what Mr. Cole does.",
        "The story never says the park is messy, so that choice has no support. Test each choice that is left."
      ],
      how: [
        "The problem: the bag of leaves is too heavy for Ms. Reyes to lift.",
        "Mr. Cole grabs the other side, and together they get the bag into the truck.",
        "If he were not there, the bag would still be on the ground. The answer is \"Without him, Ms. Reyes could not finish the job.\"",
        "The story never says the park is messy, nothing says he filled the bag, and the story is about Ms. Reyes and her job, so he is a helper, not the main character."
      ],
      misconception: "A common mix-up is thinking that whoever finishes the job is the main character.",
      why: "The answer is \"Without him, Ms. Reyes could not finish the job.\" She cannot lift the bag alone, and he grabs the other side so they can lift it together. Nothing says the park is messy or that he filled the bag, and helping does not make him the main character." },
    { id: "SK-TT1b-S02", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: [],
      like: ["SK-TT1b-C07"],
      stem: ["After a big rain, the creek behind Mia's house ran fast and high. Mia set her paper boat on the water, and it tipped right over. First she folded a new boat with a wider bottom, but the fast water tipped that one, too. Then she found a calm pool near the bank. Her boat floated there for a long time."],
      prompt: "Why does Mia move her boat to the calm pool?",
      choices: [
        { text: "The fast water kept tipping her boat, even after her first fix.", correct: true },
        { text: "Her mom said the creek was too deep for her to play in." },
        { text: "She wanted to race her boat against a friend's boat." },
        { text: "Her first boat floated away and never came back." }
      ],
      clue: "A problem makes a character act. When a try does not work, the character looks for another way.",
      hints: [
        "A problem makes a character act. When a try does not work, the character looks for another way.",
        "Find the problem and each try.",
        "Mia's mom is not in the story, so that choice has no support. Test each choice that is left."
      ],
      how: [
        "The fast creek after the rain tips Mia's boat over.",
        "Her first fix, a wider bottom, does not work: the fast water tips that boat, too.",
        "So she looks for calmer water. The answer is \"The fast water kept tipping her boat, even after her first fix.\"",
        "Her mom and a friend are not in the story, and the boat tips over instead of floating away."
      ],
      why: "The answer is \"The fast water kept tipping her boat, even after her first fix.\" The rain made the creek run fast, and even the wider boat tipped, so Mia looks for calm water. Her mom and a friend are not in the story, and the boat tips rather than floating away." },
    { id: "SK-TT1b-S03", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: [],
      like: ["SK-TT1b-C13", "SK-TT1b-C11"],
      stem: ["Nora's family moved to an apartment in a busy part of the city. The building has no yard, and the nearest park is across a wide, busy highway."],
      prompt: "Which problem is this setting most likely to cause for Nora?",
      choices: [
        { text: "She may have trouble finding a safe place to play outside.", correct: true },
        { text: "She may not have enough water to drink each day." },
        { text: "She may get lost in a deep, dark forest near her home." },
        { text: "She may miss the friends from her old neighborhood." }
      ],
      clue: "A setting can cause a problem. Picture the setting, and ask what would be hard because of the details given.",
      hints: [
        "A setting can cause a problem. Picture the setting, and ask what would be hard because of the details given.",
        "Look at the two details in the second sentence: what the building does not have, and what is between Nora and the park.",
        "There is no forest in a busy part of the city, so that choice does not fit. Test each choice that is left against the details in the setting."
      ],
      how: [
        "The building has no yard, so there is no place to play right outside.",
        "The park is across a wide, busy highway, which is hard and unsafe to cross.",
        "The answer is \"She may have trouble finding a safe place to play outside.\"",
        "Missing old friends could happen after any move, but these setting details do not cause it. Nothing is said about water, and there is no forest."
      ],
      misconception: "A common mix-up is choosing a problem that could happen anywhere instead of one caused by the setting's details.",
      why: "The answer is \"She may have trouble finding a safe place to play outside.\" The building has no yard, and the park is across a busy highway. Missing friends could happen after any move, but the setting does not cause it, and nothing is said about water or a forest." },
    /* Batch SIM-1 (ENG-07): one extra question for each core item that had none left when a child works the
       fifteen in order. Each new `like` names the one core item it practises. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TT1b-S04", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: [],
      like: ["SK-TT1b-P7"],
      stem: ["Tavi's family lives in a cabin at the end of a long dirt road, many miles from town. One morning, the family ran out of bread. The only store was far away down the road. Tavi's mom stirred flour, water and salt in a bowl and cooked flat bread on a hot pan."],
      prompt: "Read the story. The cabin is many miles from the store. How does that part of the setting affect what Tavi's family does?",
      choices: [
        { text: "No store is close by, so they make bread from what is in the cabin.", correct: true },
        { text: "The store is far away, so Tavi walks to town to buy a loaf." },
        { text: "The cabin is quiet, so Tavi's family does not need any bread." },
        { text: "The road is long, so Tavi's friends bring them bread." }
      ],
      clue: "A setting can change what characters do. Ask how the place makes the problem harder and what plan fits.",
      hints: [
        "A setting can change what characters do. Ask how the place makes the problem harder and what plan fits.",
        "Reread the sentences about the store and the road. Then read what Tavi's mom does.",
        "Nothing in the story says anyone leaves the cabin. Test each choice that is left against what Tavi's mom does."
      ],
      how: [
        "The family is out of bread, and the only store is many miles away.",
        "Tavi's mom does not go to the store. She mixes flour, water and salt and cooks flat bread at home.",
        "The answer is \"No store is close by, so they make bread from what is in the cabin.\"",
        "Nobody walks to town, the family does need bread, and no friends come."
      ],
      misconception: "A common mix-up is choosing a plan that would be easy in a town but does not fit a faraway place.",
      why: "The answer is \"No store is close by, so they make bread from what is in the cabin.\" The store is far away, so Tavi's mom cooks flat bread at home. Nobody walks to town, the family is out of bread, and no friends bring any." },
    { id: "SK-TT1b-S05", type: "order", points: 2, dok: 2, std: ["3.T.T.1.b"], passages: ["p5"],
      like: ["SK-TT1b-P4"],
      prompt: "Put the events of the story in order.",
      steps: [
        "Emre hears chirping that keeps him awake.",
        "Emre puts his pillow over his head, but he still hears the chirping.",
        "Emre and Grandpa wait for the chirping to start again.",
        "Emre and Grandpa carry the cricket out to the porch."
      ],
      clue: "Look for time words and think about what has to happen before each event.",
      hints: [
        "Look for time words and think about what has to happen before each event.",
        "Follow the paragraphs from the start to the end. Each event leads to the next one.",
        "Emre tries the pillow before he goes to find Grandpa. Place the other events one at a time."
      ],
      how: [
        "The story starts when the chirping begins in Emre's dark room, so that comes first.",
        "Next, Emre covers his head with a pillow. It does not help, so he goes to find Grandpa.",
        "Grandpa tells him to wait for the cricket to sing again, and they wait.",
        "Last, once they find the cricket, they carry it out to the porch."
      ],
      misconception: "A common mix-up is putting the ending first because it solves the problem. The solution comes last.",
      why: "The order is: Emre hears chirping that keeps him awake; he puts his pillow over his head but still hears it; he and Grandpa wait for the chirping to start again; they carry the cricket out to the porch." },
    { id: "SK-TT1b-S06", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.1.b"], passages: ["p5"],
      like: ["SK-TT1b-C03"],
      prompt: "Read paragraphs 1 and 2 again. Then complete the sentences. Choose the best answer for each blank.",
      text: "In this story, the chirping cricket is {0}. The author says Emre must wake up at six, so the reader can tell that the cricket {1}.",
      slots: [
        { options: ["the cause of the problem", "the person the story follows", "someone who rescues Emre at the end"], answer: 0 },
        { options: ["stops Emre from getting enough sleep", "helps Emre get ready faster", "wakes Emre up right on time"], answer: 0 }
      ],
      clue: "Think about who or what makes the trouble in the story. A detail near the start can show what a person needs.",
      hints: [
        "Think about who or what makes the trouble in the story. A detail near the start can show what a person needs.",
        "Reread paragraph 1. What does Emre need to do the next morning?",
        "The cricket is there from the first chirp, so it is not someone who rescues Emre at the end. For the second blank, think about what a person who must wake up at six needs."
      ],
      how: [
        "The trouble starts with the first chirp, and the cricket makes it. The story follows Emre, not the cricket.",
        "Paragraph 1 says that Emre must wake up at six. He needs to sleep.",
        "So the noisy cricket keeps him from getting enough sleep.",
        "The answers are the cause of the problem and stops Emre from getting enough sleep. The cricket does not help him get ready or wake him on time."
      ],
      misconception: "A common mix-up is thinking a detail at the start is only background. Here it shows why the cricket is a problem.",
      why: "The answers are the cause of the problem and stops Emre from getting enough sleep. The chirping begins the trouble, and Emre must wake up at six for the trip. The cricket is not the main character or a helper, and it does not help Emre get ready or wake him on time." },
    { id: "SK-TT1b-S07", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.b"], passages: ["p5"],
      like: ["SK-TT1b-C05"],
      prompt: "At the end of the story, the author writes, \"The room was quiet at last.\" Why does the author include this sentence?",
      choices: [
        { text: "It shows that moving the cricket fixed the problem.", correct: true },
        { text: "It shows that the cricket will come back to the room." },
        { text: "It shows that Emre is afraid of the quiet." },
        { text: "It shows that Grandpa was angry about the noise." }
      ],
      clue: "Authors choose the last sentence on purpose. Ask why this sentence is the one that ends the story.",
      hints: [
        "Authors choose the last sentence on purpose. Ask why this sentence is the one that ends the story.",
        "Compare the room in paragraph 2 with the room in the last paragraph.",
        "Nothing says Grandpa was angry, so that choice has no support. Test each choice that is left against how the story ends."
      ],
      how: [
        "At the start, the room is filled with loud chirping that keeps Emre awake.",
        "At the end, the cricket is out on the porch, the room is quiet, and Emre falls asleep in minutes.",
        "The answer is \"It shows that moving the cricket fixed the problem.\"",
        "The cricket is set free outside, Emre falls asleep, and Grandpa is calm and helpful."
      ],
      misconception: "A common mix-up is reading a quiet ending as something scary. Compare it with how the problem began.",
      why: "The answer is \"It shows that moving the cricket fixed the problem.\" The room was loud with chirping, and now it is quiet and Emre sleeps. The cricket was set free outside, Emre is not afraid, and Grandpa helps calmly." },
    { id: "SK-TT1b-S08", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: [],
      like: ["SK-TT1b-C06"],
      stem: ["On Friday, Ms. Vega's class played a bean bag game. Each team stood ten steps from a bucket and tried to toss as many bean bags into it as they could. Ms. Vega set up the game on the hilltop behind the school, where a strong wind blew all afternoon."],
      prompt: "Read the story. How does the setting make the game harder for the teams?",
      choices: [
        { text: "The strong wind keeps pushing the bean bags away from the bucket.", correct: true },
        { text: "The hilltop is so far away that the teams cannot walk there." },
        { text: "The teams get so few bean bags that they cannot practice." },
        { text: "The bucket is so small that no bean bag can fit inside." }
      ],
      clue: "A setting can make a challenge harder. Picture the place, and ask what in it gets in the way.",
      hints: [
        "A setting can make a challenge harder. Picture the place, and ask what in it gets in the way.",
        "Reread the story and list what is special about the place where they play.",
        "The story does not say the bucket is small, so that choice has no support. Test each choice that is left against the details in the story."
      ],
      how: [
        "The game is to toss bean bags into a bucket from ten steps away.",
        "Ms. Vega sets it up on the hilltop, where a strong wind blows all afternoon.",
        "A strong wind would push a light bean bag off its path, so the answer is \"The strong wind keeps pushing the bean bags away from the bucket.\"",
        "The story never says the hill is too far, that bean bags are few, or that the bucket is tiny."
      ],
      misconception: "A common mix-up is choosing a problem the story never mentions. The setting details have to cause it.",
      why: "The answer is \"The strong wind keeps pushing the bean bags away from the bucket.\" The game is on a hilltop where a strong wind blows all afternoon. The story never says the hill is too far to walk to, that bean bags are few, or that the bucket is tiny." },
    { id: "SK-TT1b-S09", type: "hottext", points: 1, dok: 2, std: ["3.T.T.1.b"], passages: ["p6"],
      like: ["SK-TT1b-C08"],
      prompt: "Which sentence tells the idea that will solve the problem? Choose the sentence in the passage.",
      targets: ["p6:2:1", "p6:3:1", "p6:4:2", "p6:4:3", "p6:5:2"],
      answer: ["p6:4:3"], pick: 1,
      clue: "In a problem-and-solution story, the idea that solves the problem is different from the tries that fail. Look for the new idea.",
      hints: [
        "In a problem-and-solution story, the idea that solves the problem is different from the tries that fail. Look for the new idea.",
        "Read paragraphs 2 to 4. In each one, ask what Idris or Dara does or says.",
        "An idea that solves the problem has to work, and the story shows it working. Check which sentence is followed by the trouble going away."
      ],
      how: [
        "Pulling harder and wiggling the zipper are tries that did not fix it.",
        "Dara looking closely is how she studies the problem, but it is not yet an idea.",
        "Then Dara says to rub a pencil along the teeth, and after that the zipper glides up. The answer is \"Rub a pencil along them first,\" she said.",
        "The zipper gliding up is the result of the idea, not the idea itself."
      ],
      misconception: "A common mix-up is choosing the sentence that shows the problem solved. The idea comes before the result.",
      why: "The answer is the sentence where Dara says, \"Rub a pencil along them first.\" That new idea is what lets the zipper move. Yanking and wiggling were tries that failed, looking closely is only studying the problem, and the zipper gliding up is the result." },
    { id: "SK-TT1b-S10", type: "ms", points: 2, dok: 2, std: ["3.T.T.1.b"], passages: ["p6"], pick: 2,
      like: ["SK-TT1b-C09"],
      prompt: "Which TWO details show that the problem has been solved?",
      choices: [
        { text: "The zipper glides all the way up to Idris's chin.", correct: true },
        { text: "Idris's neck stays warm all the way to school.", correct: true },
        { text: "Idris yanks the zipper, and the little tab bends." },
        { text: "A piece of cloth stays caught in the teeth of the zipper." },
        { text: "Dara tells Idris to rub a pencil along the teeth." }
      ],
      clue: "A problem is solved when the trouble is gone. Look for details that show the result, not the tries or the plan.",
      hints: [
        "A problem is solved when the trouble is gone. Look for details that show the result, not the tries or the plan.",
        "Read the last two paragraphs. Ask what Idris can do now that he could not do before.",
        "The cloth stuck in the teeth is part of the problem, not a sign it is gone. Check each other detail: does it happen before or after the zipper is fixed?"
      ],
      how: [
        "The problem is that the zipper is stuck and Idris cannot close his jacket on a freezing morning.",
        "After the pencil, the zipper glides all the way up to his chin, and his neck stays warm all the way to school.",
        "The answers are \"The zipper glides all the way up to Idris's chin.\" and \"Idris's neck stays warm all the way to school.\"",
        "The bent tab, the stuck cloth and Dara's idea all come before the zipper works."
      ],
      misconception: "A common mix-up is choosing the plan or a try. Those come before the problem is solved.",
      why: "The answers are \"The zipper glides all the way up to Idris's chin.\" and \"Idris's neck stays warm all the way to school.\" Both show the jacket working. The bent tab, the stuck cloth and Dara's idea all come before the fix." },
    { id: "SK-TT1b-S11", type: "order", points: 2, dok: 2, std: ["3.T.T.1.b"], passages: ["p6"],
      like: ["SK-TT1b-C10"],
      prompt: "Put these events in the order they happen in the story.",
      steps: [
        "Idris tugs the zipper, and it sticks halfway up.",
        "Idris yanks the zipper harder, and the tab bends.",
        "Idris wiggles the zipper up and down.",
        "Dara tells Idris to rub a pencil along the teeth.",
        "The zipper glides up to Idris's chin."
      ],
      clue: "Look for time words like first, next and then. Think about what must happen before each event.",
      hints: [
        "Look for time words like first, next and then. Think about what must happen before each event.",
        "Follow the paragraphs from the beginning to the end. Each try comes right after the one before it.",
        "The zipper cannot glide up until after Dara's idea is used. Place the other events one at a time."
      ],
      how: [
        "The story starts when the zipper sticks halfway up.",
        "Then come the tries: first Idris yanks it harder (\"First\"), and next he wiggles it (\"Next\").",
        "Dara steps in with her idea to rub a pencil along the teeth.",
        "Only after that does the zipper glide up to his chin."
      ],
      misconception: "A common mix-up is putting Dara's idea before the tries. She speaks only after Idris's tries fail.",
      why: "The order is: the zipper sticks halfway; Idris yanks it harder; he wiggles it up and down; Dara tells him to rub a pencil along the teeth; the zipper glides up to his chin." },
    { id: "SK-TT1b-S12", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.b"], passages: ["p5"],
      like: ["SK-TT1b-C12"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is Grandpa's job in the plot?",
        choices: [
          { text: "He is a helper who works with Emre to free the cricket.", correct: true },
          { text: "He is the main character, because the story is about his night." },
          { text: "He causes the problem by letting the cricket into the room." },
          { text: "He has the problem, because the chirping keeps him awake." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"Emre held a cup upside down over the spot while Grandpa slid a card underneath.\"", correct: true },
          { text: "\"Emre pulled his pillow over his head, but the chirping went right through it.\"" },
          { text: "\"Tomorrow was the class trip to the aquarium, and Emre had to wake up at six.\"" },
          { text: "\"Grandpa came in and listened.\"" }
        ] },
      clue: "A character's job in the plot is what the character does to move the story toward a solution. Ask whether this character has the problem, causes it or helps fix it.",
      hints: [
        "A character's job in the plot is what the character does to move the story toward a solution. Ask whether this character has the problem, causes it or helps fix it.",
        "Find where Grandpa appears in the story. List what he says and does.",
        "Emre, not Grandpa, is the one who cannot sleep, so Grandpa does not have the problem. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "Emre is the one whose sleep is ruined and whom the story follows, so Emre is the main character.",
        "Grandpa listens, explains how crickets act, waits with Emre, and helps trap the cricket with a cup and a card.",
        "Part A: He is a helper who works with Emre to free the cricket. Part B: \"Emre held a cup upside down over the spot while Grandpa slid a card underneath.\"",
        "Nothing says Grandpa lets the cricket in, and he is not the one kept awake."
      ],
      misconception: "A common mix-up is calling the helper the main character because he does something important. The main character is the one with the problem.",
      why: "Part A: He is a helper who works with Emre to free the cricket. Part B: \"Emre held a cup upside down over the spot while Grandpa slid a card underneath.\" Grandpa helps with the fix. Emre has the problem, and nothing says Grandpa let the cricket in." },
    { id: "SK-TT1b-S13", type: "match", points: 2, dok: 2, std: ["3.T.T.1.b"], passages: [],
      like: ["SK-TT1b-C13"],
      prompt: "Each sentence starts a new story. Match each setting to the problem it would likely cause.",
      cols: ["Staying warm", "Sending a message", "Finding the way"],
      rows: [
        { text: "Dina's family is camping on a snowy mountain, and the night will be far below freezing.", answer: 0 },
        { text: "Jonas lives in a cabin deep in the woods where no phone works, and tomorrow is his cousin's birthday in another state.", answer: 1 },
        { text: "Lia must walk home across a wide, empty field at dusk, and there are no street lights.", answer: 2 }
      ],
      clue: "A setting can make a problem likely. Ask what the place or time makes hard.",
      hints: [
        "A setting can make a problem likely. Ask what the place or time makes hard.",
        "For each sentence, find the words about weather, distance or light. Ask what a person there would need.",
        "Snow and a freezing night would make a person cold. Match the other two the same way."
      ],
      how: [
        "Snow and a night far below freezing make it hard to stay warm.",
        "A cabin where no phone works, with a cousin far away, makes it hard to send a birthday message.",
        "An empty field at dusk with no street lights makes it hard to find the way home.",
        "So: staying warm, sending a message, finding the way."
      ],
      misconception: "A common mix-up is matching on one word, like \"home\" or \"night\". Look at what the whole setting makes hard.",
      why: "The snowy, freezing night causes the problem of staying warm. The cabin with no working phone causes the problem of sending a message. The dark, empty field causes the problem of finding the way." },
    { id: "SK-TT1b-S14", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.b"], passages: ["p5", "p6"],
      like: ["SK-TT1b-C14"],
      prompt: "How are the solutions in \"The Midnight Cricket\" and \"The Stuck Zipper\" alike?",
      choices: [
        { text: "In both, a first try fails, and a family member's idea fixes it.", correct: true },
        { text: "In both, the child fixes the problem alone, without any help." },
        { text: "In both, the problem goes away by itself while the child waits." },
        { text: "In both, the child gives up and asks a teacher to fix it." }
      ],
      clue: "To compare two solutions, ask for each story what the child tried and who gave the plan that worked.",
      hints: [
        "To compare two solutions, ask for each story what the child tried and who gave the plan that worked.",
        "Compare what the child tries at the start with how each problem is finally solved.",
        "Nobody goes to a teacher in either story. Test each choice that is left against both stories."
      ],
      how: [
        "In \"The Midnight Cricket,\" Emre covers his head with a pillow, and it does not work. Then Grandpa explains how to find the cricket.",
        "In \"The Stuck Zipper,\" Idris yanks and wiggles the zipper, and neither works. Then Dara tells him to use a pencil.",
        "The answer is \"In both, a first try fails, and a family member's idea fixes it.\"",
        "Neither child fixes it alone, the problems do not go away by themselves, and no teacher is asked."
      ],
      misconception: "A common mix-up is choosing a sentence that is true for only one of the two stories.",
      why: "The answer is \"In both, a first try fails, and a family member's idea fixes it.\" Emre's pillow fails and Grandpa's idea works, and Idris's tries fail and Dara's idea works. Neither child fixes it alone, neither problem goes away by itself, and no teacher is asked." },
    { id: "SK-TT1b-S15", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.b"], passages: ["p5"],
      like: ["SK-TT1b-C15"],
      prompt: "Which new story has a fix that works for the same reason as Grandpa's idea in \"The Midnight Cricket\"?",
      choices: [
        { text: "Remy's bike clicks, so he finds the loose spoke by listening, then tightens it.", correct: true },
        { text: "Remy's bike clicks, so he turns up his music until he cannot hear the clicking." },
        { text: "Remy's bike clicks, so he buys a new bell for the handlebars." },
        { text: "Remy's bike clicks, so he rides on the grass where the sound is softer." }
      ],
      clue: "First say why the solution works in the story. Then look for a new story that works for that reason.",
      hints: [
        "First say why the solution works in the story. Then look for a new story that works for that reason.",
        "Look at what Grandpa and Emre do from paragraph 4 to the end. Ask which step came first and why it mattered.",
        "Turning up music covers a sound but does not change what is making it. Test each choice that is left against why the cricket plan worked."
      ],
      how: [
        "Grandpa and Emre listen and wait until they know exactly where the chirping comes from. Then they fix it at its source.",
        "So the plan works because they find the real cause first and then deal with it.",
        "In the new stories, Remy listens until he finds the loose spoke that is causing the click, then tightens it. The answer is \"Remy's bike clicks, so he finds the loose spoke by listening, then tightens it.\"",
        "Covering the sound, adding a bell, or riding on the grass leaves the cause alone."
      ],
      misconception: "A common mix-up is picking a solution that only hides the problem. A good fix deals with its cause.",
      why: "The answer is \"Remy's bike clicks, so he finds the loose spoke by listening, then tightens it.\" Like Grandpa and Emre, he finds the real cause and then fixes it. Turning up music, adding a bell and riding on grass leave the cause alone." }
  ],
  /* Hints and Show me how for the items kept in practice: refs P7, P4 and P5 (core set 1) and Together P1, P2, P6, P3. */
  addons: {
    "SK-TT1b-P1": {
      hints: [
        "The setting is where the story happens. Look for place words.",
        "Read paragraph 1, and notice where Jada goes each morning.",
        "The shed is a place Jada visits for only a moment, so it is not where the story mostly happens. Test each choice that is left."
      ],
      how: [
        "Paragraph 1 says Grandma Bea grows tomatoes behind her house in Macon.",
        "Each morning, Jada goes out to that garden.",
        "The answer is \"in a garden behind Grandma Bea's house.\"",
        "The shed is only a quick stop, and there is no farm stand or classroom in the story."
      ] },
    "SK-TT1b-P2": {
      hints: [
        "The problem is what goes wrong. Find the part where Jada stops and looks surprised.",
        "Read paragraphs 2 and 3. What is missing, and what does Grandma Bea say about it?",
        "This year Jada is old enough to help, so being too young is not the problem. Test each choice that is left."
      ],
      how: [
        "In paragraph 2, half the tomatoes are gone, and tiny footprints cross the dirt.",
        "In paragraph 3, Grandma Bea says rabbits squeeze under the gate at night.",
        "The answer is \"Rabbits are eating the tomatoes at night.\"",
        "Jada is old enough to help, nothing happens to the watering can, and the gate is right where it should be."
      ],
      misconception: "A common mix-up is naming the first thing that happens. The problem is what the rest of the story is about fixing." },
    "SK-TT1b-P6": {
      hints: [
        "Clue words like then move a story to the next event. Read what comes right before and right after the clue word.",
        "Read the end of paragraph 3 and all of paragraph 4.",
        "Half the tomatoes are already gone before this sentence, so the problem is not just starting. Test each choice that is left."
      ],
      how: [
        "Before \"Then she had an idea,\" the rabbits have already eaten half the tomatoes, so the problem has started.",
        "Right after it, Jada acts on her idea. That is her try to fix the problem.",
        "The answer is \"Jada is about to try a way to fix the problem.\"",
        "The problem is not fixed yet, and no new character joins the story."
      ] },
    "SK-TT1b-P3": {
      hints: [
        "The solution is the action that fixes the problem. Find what Jada does, not what she thinks or sees.",
        "Look at paragraphs 4 and 5.",
        "\"Jada thought about it all day\" tells what she thinks, not what she does. Check each sentence that is left: is it an action that fixes the problem?"
      ],
      how: [
        "Paragraph 4 starts with Jada thinking and then having an idea. Thinking is not the fix.",
        "Next, she finds wire in the shed and asks Grandma to help bend it along the bottom of the gate. The wire blocks the rabbits.",
        "In paragraph 5, she checks the garden. Those sentences tell what she sees after the fix.",
        "The answer is the sentence about the wire fence bent along the bottom of the gate."
      ],
      misconception: "A common mix-up is choosing what a character thinks or sees. The solution is the action that fixes the problem." },
    "SK-TT1b-P7": {
      hints: [
        "A setting includes when a story happens. Ask how the time of day changes what a character has to do.",
        "Read paragraph 3. When do the rabbits come? Then look at the kind of fix Jada makes in paragraph 4.",
        "Jada waters the garden in the morning, not at night, so the choice about watering in the dark does not fit. Test each choice that is left."
      ],
      how: [
        "Paragraph 3 says the rabbits squeeze under the gate at night.",
        "At night everyone is asleep, so no one is in the garden to chase the rabbits away.",
        "So Jada needs a fix that keeps working all night by itself.",
        "The answer is \"No one is awake to chase the rabbits, so Jada needs a fix that works while everyone sleeps.\""
      ],
      misconception: "A common mix-up is thinking the setting is only a place. The time, like night, can change what a character has to do." },
    "SK-TT1b-P4": {
      hints: [
        "Think about how the story's events are linked. One thing leads to the next.",
        "For each event, ask what has to happen before it can happen.",
        "The last event is the one that shows how everything turned out. Use the question in hint 2 to place the other three."
      ],
      how: [
        "First, Jada finds half the tomatoes gone (paragraph 2).",
        "Next, Grandma Bea says rabbits come under the gate (paragraph 3).",
        "Then Jada puts wire along the bottom of the gate (paragraph 4).",
        "Last, every tomato is still on its vine (paragraph 5)."
      ],
      misconception: "A common mix-up is putting the explanation of the problem before the problem itself. A character has to find the trouble before anyone can explain it." },
    "SK-TT1b-P5": {
      hints: [
        "Ask four questions: Who? Where and when? What goes wrong? How is it fixed?",
        "For each detail, find it in the story. Is it a person, a place and time, a trouble or a fix?",
        "Grandma Bea is a person in the story, so she is a character. Sort the other three details the same way."
      ],
      how: [
        "Grandma Bea is a person in the story, so she is a character.",
        "Behind a house in Macon in summer tells where and when, so it is the setting.",
        "Rabbits getting in and eating the tomatoes is the trouble the rest of the story is about fixing, so it is the problem.",
        "Blocking the space under the gate keeps the rabbits out, so it is the solution."
      ],
      misconception: "A common mix-up is naming the first thing that happens as the problem. The problem is what the rest of the story is about fixing." }
  },
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
      prompt: "The story begins on a Thursday afternoon. Why does this time matter to the plot?",
      choices: [
        { text: "The book is due on Friday, so Omar has very little time to find it.", correct: true },
        { text: "It rains every Thursday, so Omar has to stay inside and read." },
        { text: "The library is closed on Thursdays, so Omar cannot go there." },
        { text: "Omar's dad gets home early on Thursdays, so he can help search." }
      ],
      clue: "Read the first sentence again. What else does it tell you besides the day? Think about why Omar searches so hard.",
      why: "The answer is \"The book is due on Friday, so Omar has very little time to find it.\" Paragraph 1 says it is Thursday afternoon and the book is due the next day. That short time is what makes Omar hurry to look everywhere. The story says it rained on Tuesday, not every Thursday, and it never says when the library is closed or when Dad gets home." },
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
      prompt: "In paragraph 4, Omar sets the book on top of his shoes. How does this event affect the end of the story?",
      choices: [
        { text: "He cannot leave without seeing it, so he returns the book on time.", correct: true },
        { text: "It keeps the book dry, so the rain does not ruin it." },
        { text: "It shows Lina where the book is, so she can read it next." },
        { text: "It makes him late, so Ms. Park has to wait for the book." }
      ],
      clue: "Think about what Omar does every morning before he leaves the house. Then read the last sentence of the story.",
      why: "The answer is \"He cannot leave without seeing it, so he returns the book on time.\" Omar puts the book on his shoes so he will not forget it. The last sentence shows it worked: on Friday morning he hands the book to Ms. Park right on time. He dries the book with a towel, not with his shoes, and the story never says Lina reads it or that Omar is late." },
    { id: "SK-TT1b-T5", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Match each detail to the story part it shows.",
      cols: ["Character", "Setting", "Problem", "Solution"],
      rows: [
        { text: "Lina, who has not seen the book", answer: 0 },
        { text: "Thursday afternoon at Omar's house", answer: 1 },
        { text: "The book is not anywhere.", answer: 2 },
        { text: "Omar finds the book.", answer: 3 }
      ],
      clue: "Ask four questions: Who is in the story? When and where does it happen? What goes wrong? How is it fixed?",
      why: "Lina is a character. She is in the story even though she does not have the problem. Thursday afternoon at Omar's house tells when and where, so it is the setting. The book not being anywhere is the problem. Finding the book is the solution, because it fixes the problem." }
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
      "A trait is what a character is like on the inside, such as kind, bossy, brave or honest. A feeling can change from moment to moment, but a trait shows up again and again in what a character does.",
      "Actions are what a character does. Words are what a character says, and thoughts happen inside the character's head. Writers often show a feeling with a clue, like a big grin or hands balled into fists. Use what just happened to decide what the clue means.",
      "A motive is the reason a character does something. Ask: Why did they do that? What do they want? The clue word so often links a reason to a choice. Then ask: What happened because of that choice?",
      "Other characters help, too. When someone reacts to the main character, ask what their words tell you about the main character's choice.",
      "The lesson, or central message, is what the character learns and what the story teaches you. It works for anyone, like \"Telling the truth is better than hiding a mistake,\" and it is not just what happened. Once you know a character and a lesson, you can predict what the character would do somewhere new, compare two characters, and spot the same lesson in a different story."
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
      show: ["Every morning, Rosa saved half of her toast for the ducks at the pond. When one little duck could not push past the big ones, she tossed a piece right in front of it. Then a goose honked at her, and Rosa jumped back, scared."],
      ask: "What trait does Rosa show? What would she most likely do if she found a lost puppy?",
      steps: [
        "List what Rosa does again and again. She saves her toast for the ducks, and she makes sure the little duck gets some.",
        "Jumping back from the goose shows a feeling for one moment: scared. A feeling is not what she is like inside.",
        "Ask what kind of person acts like Rosa does every day. Check that the trait fits both of her actions.",
        "To predict, ask what that kind of person would do somewhere new."
      ],
      answer: "Rosa is kind and caring. She would most likely help the puppy, maybe by giving it water or looking for its owner."
    },
    {
      show: ["At recess, Tasha found a little boy crying by the swings. \"I can't find my class,\" he sobbed. Tasha thought, \"If I help him, I'll miss my turn at tetherball.\" She took his hand and walked him to the office. Because she did, his teacher found him right away. Later, the principal told Tasha, \"You made a scared boy feel safe today.\""],
      ask: "Which sentence shows Tasha's action? What happened because of it, and why does the author include the principal's words?",
      steps: [
        "Sort the sentences. \"I can't find my class\" is what the boy says. \"If I help him\" is Tasha's thought. Taking his hand is an action, something she does.",
        "Her thought shows she wants her turn at tetherball, but she helps anyway because the boy is lost and scared. That is her motive.",
        "Find the result. Because she walks him to the office, his teacher finds him right away.",
        "Ask why the principal speaks. Her words tell us how much Tasha's choice mattered."
      ],
      answer: "Her action is \"She took his hand and walked him to the office.\" Because of it, the boy got back to his class. The principal's words show that Tasha's kind choice made a real difference."
    },
    {
      show: ["Lena wanted to win the art contest, so she copied a drawing from a book. Her friend Kwame drew his own dog, even though the lines were wobbly. The judge picked Kwame's picture because it was full of his own ideas. On the way home, Lena decided her next picture would be all hers."],
      ask: "What lesson does this story teach? How are Lena and Kwame different, and what new situation would teach the same lesson?",
      steps: [
        "Find what Lena wants and what choice she makes. She wants to win, so she copies.",
        "Find what happens because of that choice, and how Lena changes at the end. Then say the lesson in a way that works for anyone.",
        "Compare the two characters. Lena copies to win, but Kwame uses his own ideas. A comparison has to fit what each one really does.",
        "Test a new situation against the lesson, not the topic. A girl who makes up her own song instead of copying one shows the same lesson, even with no drawing in it."
      ],
      answer: "Your own ideas are worth more than copying someone else's. Lena copies and Kwame does not, and Lena changes at the end. A girl who writes her own song instead of copying one shows the same lesson."
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
      ] },
    /* PP-004 form B passage: used only by testB. Needs independent review. */
    { id: "p3", title: "Ji-ho's Mandu", genre: "Literary text",
      paragraphs: [
        ["On Sunday, Ji-ho helped Halmoni, his grandmother, make mandu for the family dinner.", "Mandu are Korean dumplings, often filled with meat and vegetables."],
        ["Halmoni's fingers moved fast.", "She put a spoonful of filling on a round wrapper, folded it in half and pinched the edge shut in tiny folds.", "Each one looked like a neat little moon."],
        ["Ji-ho wanted his mandu to look just like hers, so he tried to work as fast as she did.", "He stuffed in a big pile of filling.", "Rip!", "The wrapper tore open."],
        ["He grabbed another wrapper and tried again, even faster.", "Rip!", "Ji-ho threw the torn wrapper down and crossed his arms.", "\"I'm no good at this,\" he grumbled.", "\"You do it.\""],
        ["Halmoni did not take over.", "Instead, she wiped her hands and took an old photo out of a drawer.", "It showed a young girl holding a plate of lumpy, lopsided dumplings."],
        ["\"That girl is me,\" Halmoni said.", "\"My first mandu looked just like that.", "My mother told me to slow down and try one more.\""],
        ["Ji-ho looked at the photo for a long time.", "He thought, \"If Halmoni's first mandu were lumpy, maybe mine can get better, too.\""],
        ["He picked up a new wrapper.", "This time, he used a small spoonful and pinched the edge slowly, one fold at a time.", "His mandu was a little crooked, but it held together."],
        ["By dinnertime, Ji-ho had made twelve mandu.", "Some were lumpy, and some were almost as neat as Halmoni's.", "His family ate every single one, and Ji-ho smiled the whole time."]
      ] },
    /* B0 (expansion 2026-10-22): passages p4-p9 are used only by core set 1 (p9, one item),
       core set 2 (p4), core set 3 (p5, plus p4 for one compare item) and the similar bank (p6-p8).
       Never used by test or testB. NEEDS INDEPENDENT RE-REVIEW after the review fixes. */
    { id: "p4", title: "The Fun Run", genre: "Literary text",
      paragraphs: [
        ["Kendra had come in second at the Riverside Fun Run two years in a row.", "This year, she wanted the blue ribbon.", "Every evening, she ran laps around her backyard."],
        ["On race day, the whistle blew, and Kendra shot forward.", "By the oak tree, she was in the lead."],
        ["Then she heard a thud behind her.", "Eli, the youngest runner, had tripped on a root.", "He sat in the dirt, holding his knee.", "His lip was shaking."],
        ["Kendra's legs wanted to keep going.", "\"If I stop, I'll never get the blue ribbon,\" she thought.", "Then she remembered how her own knee had stung when she fell off her bike last spring."],
        ["Kendra jogged back and held out her hand.", "\"Come on,\" she said.", "\"We can finish together.\""],
        ["Kendra and Eli crossed the finish line last, side by side.", "When Kendra saw the blue ribbon on another girl's shirt, her shoulders sank."],
        ["Everyone in the crowd was clapping for the two of them.", "Eli's grandmother hurried over and hugged them both.", "Kendra had no ribbon, but her heart felt full."]
      ] },
    { id: "p5", title: "The Frogs of Willow Creek", genre: "Literary text",
      paragraphs: [
        ["Every Saturday, Tariq walked his dog along Willow Creek.", "Lately, the creek looked sad.", "Plastic bags hung from the branches, and old cans floated by the rocks."],
        ["Grandpa said that frogs used to sing there every spring night.", "Now the creek was quiet.", "Tariq wanted to hear those frogs, too."],
        ["But the trash stretched as far as he could see.", "\"One kid can't clean up a whole creek,\" he thought."],
        ["Still, the next morning, Tariq pulled on garden gloves and grabbed a trash bag.", "He picked up one can, then another.", "By lunch, the bag was full."],
        ["Ms. Patel watched from her porch next door.", "The next Saturday, she came down to the creek with gloves of her own.", "The Saturday after that, she brought the Lee twins and their dad."],
        ["Soon, a whole crew met at the creek every weekend.", "They hauled out bottles, bags and even an old bike tire."],
        ["One warm night in April, Tariq heard a sound by the water.", "Croak.", "Croak-croak.", "He grinned in the dark."]
      ] },
    { id: "p6", title: "Biscuit's Breakfast", genre: "Literary text",
      paragraphs: [
        ["Jaylen had promised Mrs. Brooks next door that he would feed her cat, Biscuit, while she was away.", "She left him a note that said, \"One scoop of food and fresh water every morning.\""],
        ["On Saturday morning, his cousins called.", "\"We're going to the pool right now!\" they said.", "\"Come with us!\""],
        ["Jaylen looked at the clock.", "Biscuit always ate breakfast at nine.", "\"Can you wait ten minutes?\" he asked."],
        ["He ran next door, filled Biscuit's bowl and gave her fresh water.", "Biscuit purred and rubbed against his leg.", "He even checked that the back door was locked.", "Then he grabbed his towel and raced to his cousins' car."]
      ] },
    { id: "p7", title: "The Tricky Puzzle", genre: "Literary text",
      paragraphs: [
        ["Ms. Grant gave the class a tricky math puzzle.", "Dante stared at it for a long time.", "All around him, pencils were moving."],
        ["He kept his hand down.", "\"If I ask for help, they'll think I'm slow,\" he thought."],
        ["When the timer showed two minutes left, his page was still empty.", "Dante took a deep breath and turned to his partner, Ruby.", "\"Can you show me how you started?\" he asked."],
        ["Ruby drew a quick picture with boxes and dots.", "Suddenly, the puzzle made sense.", "Dante finished just as the timer beeped.", "\"Thanks,\" he whispered to Ruby.", "\"Asking was easier than I thought.\""]
      ] },
    { id: "p8", title: "The Rainy Picnic", genre: "Literary text",
      paragraphs: [
        ["For weeks, Kiana had helped plan the Juniper Street picnic.", "She painted the signs and helped bake the corn bread.", "Everyone on the street was coming."],
        ["On Saturday morning, rain poured down.", "\"Now it's ruined,\" her brother groaned."],
        ["Kiana stared out the window at the soggy tables in the park.", "Then she remembered the big covered porch at the community center.", "She called Mr. Ford, who kept the key to the community center."],
        ["By noon, neighbors were sharing food and playing cards on the porch.", "Mr. Ford even brought out his old radio.", "The rain drummed on the roof above them, and nobody minded one bit."]
      ] },
    { id: "p9", title: "The Last Seat", genre: "Literary text",
      paragraphs: [
        ["After soccer practice, Malik climbed onto the city bus and dropped into the last empty seat.", "His legs ached, and his cleats felt as heavy as bricks."],
        ["At the next stop, an older woman stepped on with two full grocery bags.", "She looked up and down the bus.", "Every seat was taken."],
        ["Malik turned toward the window.", "\"I played hard all afternoon,\" he told himself.", "\"I earned this seat.\""],
        ["Then the bus lurched, and the woman grabbed a pole to keep from falling.", "An orange tumbled out of her bag and rolled down the aisle."],
        ["Malik stood up and waved her toward his seat.", "\"Please, take it,\" he said."],
        ["The woman sank into the seat with a sigh.", "\"Thank you, young man,\" she said.", "Malik held on to the pole for the rest of the ride, and somehow his legs did not feel so tired anymore."]
      ] },
    /* Expansion 2026-10-22 (batch SIM-1): p10 to p14 are used only by similar items. NEEDS INDEPENDENT REVIEW. */
    { id: "p10", title: "The Borrowed Boots", genre: "Literary text",
      paragraphs: [
        ["Tobias's cousin Cedric let him borrow his brand-new soccer boots for the big game.", "The boots were shiny black with bright orange stripes.", "\"Take good care of them,\" Cedric said.", "Tobias could hardly wait to lace them up."],
        ["In the first half, Tobias slid across the grass to stop a goal.", "When he stood up, he saw a long, ugly scuff on the toe.", "His stomach dropped.", "He barely kicked the ball for the rest of the game."],
        ["After the game, Tobias held out the boots with both hands.", "His voice came out small.", "\"I scuffed them,\" he said.", "\"I'm sorry.\""],
        ["Cedric looked at the toe and laughed.", "\"Boots are made for playing in,\" he said.", "\"That scuff means you saved a goal.\""],
        ["Tobias felt the knot in his chest let go.", "He grinned all the way home."]
      ] },
    { id: "p11", title: "Teaching Grandpa", genre: "Literary text",
      paragraphs: [
        ["Grandpa Lou wanted to call his sister, who lived far away in Jamaica.", "Rafa set the tablet on the kitchen table and showed him the green call button."],
        ["Grandpa tapped the red button by mistake.", "The screen went black.", "He tapped it again, and then a third time."],
        ["Rafa's jaw tightened.", "\"Not that one, Grandpa!\" he said.", "He reached for the tablet to do it himself."],
        ["Then Rafa remembered the summer Grandpa taught him to ride a bike, letting go of the seat again and again.", "\"If he can wait for me, I can wait for him,\" Rafa thought.", "The kitchen clock ticked loudly."],
        ["Rafa pulled his hand back and folded it in his lap.", "\"Try the green one,\" he said.", "Grandpa pressed it slowly, and his sister's smiling face popped onto the screen."],
        ["\"I did it myself!\" Grandpa cheered."]
      ] },
    { id: "p12", title: "The Marble Run", genre: "Literary text",
      paragraphs: [
        ["For the class science fair, Dalia and Kiran built a marble run out of cardboard tubes and tape.", "Kiran bent the tubes into loops and curves.", "Dalia figured out how steep each ramp should be."],
        ["On the day of the fair, the judge, Mr. Hill, watched a marble roll through every loop and drop into the cup at the end.", "\"Wonderful!\" he said.", "\"Which of you built it?\""],
        ["Dalia opened her mouth to say, \"I did the hard part.\"", "Then she thought of Kiran bending each tube while she watched.", "She closed her mouth and then smiled."],
        ["\"We both did,\" she said.", "\"Kiran made the loops, and I tested the ramps.\"", "Kiran looked up in surprise."],
        ["Mr. Hill pinned a blue ribbon to the front of their marble run.", "\"Great teams share the work,\" he said.", "Kiran and Dalia held the ribbon between them for a photo."]
      ] },
    { id: "p13", title: "The Little Library", genre: "Literary text",
      paragraphs: [
        ["Amira loved to read, but the nearest library was a long bus ride away.", "Her street had lots of kids and almost no books."],
        ["\"Nobody will care about a box of books,\" Amira thought.", "Still, on Saturday she nailed a wooden box to her fence.", "She filled it with ten of her old books and painted FREE BOOKS on the lid."],
        ["Mr. Alder walked his dog past the fence every day, and he stopped to look.", "The next morning, the box held a new book from him, with a note that said, \"Thank you.\"", "Soon the Brown twins added three more, and Mrs. Cole left a stack of picture books."],
        ["By summer, the box was too full to close.", "A neighbor built a second box so there was room for every book."],
        ["Amira smiled when she saw a line of kids at the fence.", "She had only started with one little box."]
      ] },
    { id: "p14", title: "The Card Trick", genre: "Literary text",
      paragraphs: [
        ["Beni had practiced his card trick for two weeks.", "Now he stood behind the curtain at the Friday assembly, and his knees felt like jelly."],
        ["\"And now, Beni!\" the teacher called.", "Beni walked out and held up a card.", "The first trick worked perfectly, and the crowd gasped."],
        ["For the last trick, he fanned the whole deck.", "Whoosh! The cards slipped out of his hands and scattered across the stage.", "His face turned hot and red."],
        ["Somebody giggled.", "Then Beni giggled too, and soon the whole room was laughing along with him."],
        ["He scooped up the cards and took a big bow.", "In the front row, his mom jumped up and cheered.", "Beni stood tall, with the biggest smile on his face."]
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
  /* ---------- B0 reference lesson (expansion 2026-10-22, docs/expansion-2026-10-22/01-architecture.md §2.2-2.3) ----------
     core: fifteen independent items in three sets of five. { ref } reuses an existing Try item by id
     (P4, P5, P6 stay in practice unchanged; the engine leaves any practice item that core references
     out of Practice Together, so Together shows P1-P3 only).
     New ids are numbered by their place in the fifteen (C03 is question 3), so C01, C02 and C05 are refs.
     Hints and Show me how steps for refs and for the Together items are in addons below.
     Author log: docs/expansion-2026-10-22/batches/B0-author-log.md (see "Fixes after review").
     NEEDS INDEPENDENT RE-REVIEW of the changed items listed there. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT1c-P4" },
      { ref: "SK-TT1c-P5" },
      { id: "SK-TT1c-C03", type: "hottext", points: 1, dok: 2, std: ["3.T.T.1.c"], passages: ["p9"],
        prompt: "Which sentence shows something Malik does, not something he says or thinks, that proves he has decided to give up his seat? Choose the sentence in the passage.",
        targets: ["p9:1:1", "p9:3:1", "p9:3:2", "p9:5:1", "p9:5:2", "p9:6:1"],
        answer: ["p9:5:1"], pick: 1,
        clue: "An action is something a character does with his body. What a character says or thinks is not an action, even when it tells you about a choice.",
        hints: [
          "An action is something a character does with his body. What a character says or thinks is not an action, even when it tells you about a choice.",
          "First find the moment in the story that could change Malik's mind. Then look for a sentence where Malik himself does something because of it.",
          "Dropping into the seat is something Malik does, but it happens before the woman even gets on the bus, so it cannot prove this choice. Use the same test on the other sentences: when does it happen, and who is doing it?"
        ],
        how: [
          "The moment that could change his mind comes in paragraph 4, when the woman almost falls.",
          "Sort Malik's sentences. \"I played hard all afternoon\" is a thought, and \"Please, take it\" is speech. Dropping into the seat and turning toward the window are actions, but they come before his choice and point the other way.",
          "The woman sinking into the seat is her action, and it happens because of his choice.",
          "The answer is \"Malik stood up and waved her toward his seat.\" Standing up is something Malik does, and it proves he has decided to give up his seat."
        ],
        misconception: "A common mix-up is choosing his words, \"Please, take it.\" Words can tell you about a choice, but this question asks for an action.",
        why: "The answer is \"Malik stood up and waved her toward his seat.\" Standing up is something Malik does, and it proves he has decided to give the woman his seat. His words are speech, \"I played hard all afternoon\" is a thought, dropping into the seat and turning to the window come before his choice, and the woman sinking into the seat is her action." },
      { id: "SK-TT1c-C04", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p1"],
        prompt: "Mr. Okafor says, \"Not many people would come back.\" Why does the author include these words?",
        choices: [
          { text: "to show that what Marisol did was special, because many people would keep the money", correct: true },
          { text: "to show that Mr. Okafor is upset that Marisol bothered him while he was busy" },
          { text: "to show that Mr. Okafor had given Marisol the extra money on purpose" },
          { text: "to show that Mr. Okafor plans to give Marisol a free pie as a reward" }
        ],
        clue: "Authors give a character words for a reason. Ask what the words tell you about the main character's choice and the story's lesson.",
        hints: [
          "Authors give a character words for a reason. Ask what the words tell you about the main character's choice and the story's lesson.",
          "Reread paragraph 7. Think about what most people might do if they were handed extra money by mistake.",
          "Mr. Okafor smiles and thanks her, so he is not upset with her. Now think about what the words \"not many people\" tell you, and test each choice that is left against the story."
        ],
        how: [
          "Find his words in paragraph 7: he smiles and says not many people would come back.",
          "That means most people would keep the extra money. Marisol did not.",
          "The answer is \"to show that what Marisol did was special, because many people would keep the money.\" His words point to the story's lesson.",
          "Check the others: he is smiling, not upset; he gave the change without looking; and he never offers a free pie."
        ],
        misconception: "A common mix-up is reading his words as a fact about Mr. Okafor. The author uses them to tell us about Marisol's choice.",
        why: "The answer is \"to show that what Marisol did was special, because many people would keep the money.\" Mr. Okafor means that most people would not return the extra change. His words make Marisol's choice stand out. He is smiling, not upset, he gave the change without looking, and he never offers a free pie." },
      { ref: "SK-TT1c-P6" }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT1c-C06", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.c"], passages: ["p4"],
        prompt: "Kendra runs laps around her backyard every evening. What does this action show about her?",
        choices: [
          { text: "She works hard for something she wants.", correct: true },
          { text: "She wants to get stronger for soccer season." },
          { text: "She runs whenever she feels bored at home." },
          { text: "She is worried that Eli will beat her." }
        ],
        clue: "An action can show a trait. Ask why a character would do the same thing again and again.",
        hints: [
          "An action can show a trait. Ask why a character would do the same thing again and again.",
          "Read paragraph 1. Find Kendra's goal for this year, and connect it to the running.",
          "Eli does not appear in the story until race day, so the running cannot be about him. Reread the sentence just before the one about laps, then test each choice that is left."
        ],
        how: [
          "Paragraph 1 says Kendra came in second two years in a row, and this year she wants the blue ribbon.",
          "She runs laps every evening to get ready. Doing that again and again shows she works hard for her goal.",
          "The answer is \"She works hard for something she wants.\"",
          "Check the others: Eli is not in the story until the race, and nothing in the story mentions soccer or says she is bored."
        ],
        misconception: "A common mix-up is picking a reason that sounds possible but is not in the story. Tie the action to what the character wants.",
        why: "The answer is \"She works hard for something she wants.\" Kendra came in second two years in a row and wants the blue ribbon, so she practices every evening. Eli is not in the story until the race, and the story never mentions soccer or says she is bored." },
      { id: "SK-TT1c-C07", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.c"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why does Kendra go back to help Eli?",
          choices: [
            { text: "She sees that he is hurt and upset.", correct: true },
            { text: "She is too tired to stay in the lead." },
            { text: "A grown-up calls to her to go and help." },
            { text: "She thinks she can still win the ribbon." }
          ] },
        partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
          choices: [
            { text: "\"His lip was shaking.\"", correct: true },
            { text: "\"By the oak tree, she was in the lead.\"" },
            { text: "\"Kendra's legs wanted to keep going.\"" },
            { text: "\"This year, she wanted the blue ribbon.\"" }
          ] },
        clue: "A motive is the reason a character does something. Ask what made Kendra turn back, then find the sentence that proves it.",
        hints: [
          "A motive is the reason a character does something. Ask what made Kendra turn back, then find the sentence that proves it.",
          "Reread paragraph 3. What happens to Eli, and what do you notice about him?",
          "Paragraph 4 says her legs wanted to keep going, so being too tired is not her reason. For Part B, the sentence you choose must match your Part A answer."
        ],
        how: [
          "In paragraph 3, Eli trips, holds his knee, and his lip shakes. He is hurt and upset.",
          "Part A: She sees that he is hurt and upset.",
          "Part B: \"His lip was shaking.\" That detail shows Eli is upset. It is what Kendra sees just before she decides what to do.",
          "The others do not fit: her legs wanted to keep going, no grown-up calls to her, and paragraph 4 shows she still wants to win, so she is not going back to win."
        ],
        misconception: "A common mix-up is choosing a sentence about what Kendra wants for herself. The question asks why she goes back for Eli.",
        why: "Part A: She sees that he is hurt and upset. Part B: \"His lip was shaking.\" Eli has tripped, is holding his knee, and his lip shakes, so Kendra goes back. She is not tired, because her legs wanted to keep going. No grown-up calls to her, and paragraph 4 shows she still wants to win, so winning is not why she goes back." },
      { id: "SK-TT1c-C08", type: "match", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: ["p4"],
        prompt: "How does Kendra feel at each moment? Match each moment to the feeling it shows. Use each feeling once.",
        cols: ["eager", "unsure what to do", "disappointed", "proud"],
        rows: [
          { text: "when the whistle blows and she shoots ahead", answer: 0 },
          { text: "when she sees Eli sitting in the dirt", answer: 1 },
          { text: "when she sees the ribbon on another girl's shirt", answer: 2 },
          { text: "when the crowd claps and Eli's grandmother hugs her", answer: 3 }
        ],
        clue: "Writers often show a feeling with clues instead of naming it. Look at what a character's body does and what has just happened at each moment.",
        hints: [
          "Writers often show a feeling with clues instead of naming it. Look at what a character's body does and what has just happened at each moment.",
          "Use paragraph 2 for the start, paragraphs 3 and 4 for the middle, paragraph 6 for her shoulders and paragraph 7 for her heart.",
          "In the middle, part of Kendra wants to keep running, but Eli is hurt behind her. Two wishes are pulling at her at once. Work out the other three moments the same way."
        ],
        how: [
          "Start: she shoots forward and takes the lead, so she is eager.",
          "Middle: her legs want to keep going, but Eli is hurt, so she is unsure what to do.",
          "After the race: the ribbon she wanted for two years is on another girl, and her shoulders sink, so she is disappointed.",
          "End: the crowd claps, she is hugged, and her heart feels full, so she is proud."
        ],
        misconception: "A common mix-up is reading a body clue by itself. Use what has just happened in the story to decide what the clue means.",
        why: "When the whistle blows, Kendra is eager: she shoots forward. When she sees Eli in the dirt, she is unsure what to do: her legs want to run, but he is hurt. When she sees the ribbon she wanted on another girl, she is disappointed: her shoulders sink. When the crowd claps, she is proud: her heart feels full." },
      { id: "SK-TT1c-C09", type: "hottext", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: ["p4"],
        prompt: "Which TWO sentences show what is going on in Kendra's mind before she goes back for Eli? Choose two sentences in the passage.",
        targets: ["p4:2:2", "p4:3:1", "p4:3:4", "p4:4:1", "p4:4:2", "p4:4:3", "p4:6:2"],
        answer: ["p4:4:2", "p4:4:3"], pick: 2,
        clue: "A thought happens inside a character's head. Something she sees, or something her body does, is not a thought.",
        hints: [
          "A thought happens inside a character's head. Something she sees, or something her body does, is not a thought.",
          "Look at the part of the story between Eli's fall and the moment Kendra jogs back.",
          "The thud is something that happens, not something Kendra thinks. Check each sentence that is left: is it in her mind, or is it something she sees or something her body does?"
        ],
        how: [
          "Paragraphs 3 and 4 come between Eli's fall and Kendra going back.",
          "\"If I stop, I'll never get the blue ribbon,\" she thought. These are words in her head.",
          "\"Then she remembered how her own knee had stung when she fell off her bike last spring.\" A memory is in her mind, too.",
          "Her legs wanting to keep going is her body, and Eli's shaking lip is something she sees. Being in the lead and the thud are events, and her shoulders sink after the race."
        ],
        misconception: "A common mix-up is choosing a sentence about her body or about what she sees. A thought is what goes on in her mind.",
        why: "The answers are \"If I stop, I'll never get the blue ribbon,\" she thought, and \"Then she remembered how her own knee had stung when she fell off her bike last spring.\" The first is her thought, and the second is a memory. Her legs wanting to keep going is her body, Eli's lip is something she sees, and the other sentences are events." },
      { id: "SK-TT1c-C10", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p4"],
        prompt: "Which lesson do Kendra's choices teach the reader?",
        choices: [
          { text: "Helping someone in need matters more than winning a prize.", correct: true },
          { text: "Kendra stops running to help a boy who fell down." },
          { text: "Kendra and Eli cross the finish line in last place." },
          { text: "It is better to finish first than to finish together." }
        ],
        clue: "A lesson is something anyone could learn, not just what happened. Think about what Kendra gives up, what she chooses and how she feels at the end.",
        hints: [
          "A lesson is something anyone could learn, not just what happened. Think about what Kendra gives up, what she chooses and how she feels at the end.",
          "Compare paragraph 6 with paragraph 7. She loses the ribbon, but how does she feel when the race is over?",
          "Two choices only retell events from the story, so they are not lessons. A lesson has to work for anyone. Check which lesson-sounding choice matches how the story really ends."
        ],
        how: [
          "Kendra wants the blue ribbon, but she goes back to help Eli and finishes last.",
          "At the end she has no ribbon, but everyone claps and her heart feels full.",
          "The answer is \"Helping someone in need matters more than winning a prize.\"",
          "Two choices are true events, not lessons. Finishing together, not finishing first, is what fills Kendra's heart, so the lesson about finishing first does not fit."
        ],
        misconception: "A common mix-up is picking a true event from the story. An event tells what happened; a lesson tells what anyone can learn from it.",
        why: "The answer is \"Helping someone in need matters more than winning a prize.\" Kendra gives up the ribbon to help Eli, and in the end her heart feels full. Stopping to help and finishing last are events, not lessons, and the story shows that finishing together mattered more to her than finishing first." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT1c-C11", type: "ms", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: ["p5"], pick: 2,
        prompt: "Which TWO events happen because Tariq starts cleaning the creek?",
        choices: [
          { text: "Ms. Patel comes down with gloves of her own.", correct: true },
          { text: "A crew meets at the creek every weekend.", correct: true },
          { text: "Plastic bags and old cans fill the creek." },
          { text: "Grandpa tells Tariq that frogs used to sing there." },
          { text: "Tariq walks his dog along the creek every Saturday." }
        ],
        clue: "A character's action can cause other things to happen. For each event, ask: did this happen before Tariq started, or because he did?",
        hints: [
          "A character's action can cause other things to happen. For each event, ask: did this happen before Tariq started, or because he did?",
          "Find Tariq's action. Then ask what other people do after they see it. Choose two.",
          "Grandpa's story about the frogs happens before Tariq starts, so it is a reason for his cleaning, not a result. Ask the same before-or-after question about each of the other events."
        ],
        how: [
          "Find Tariq's action: in paragraph 4 he pulls on gloves and starts picking up trash.",
          "After that, Ms. Patel watches and comes with gloves of her own. Then more neighbors join, until a crew meets every weekend.",
          "The answers are \"Ms. Patel comes down with gloves of her own\" and \"A crew meets at the creek every weekend.\"",
          "The trash, Grandpa's story and the dog walks all come before he starts, so they are not results of his cleaning."
        ],
        misconception: "A common mix-up is choosing something that happened before the action. A result has to come after it.",
        why: "The answers are \"Ms. Patel comes down with gloves of her own\" and \"A crew meets at the creek every weekend.\" Both happen after Tariq starts cleaning, because people see what he is doing and join him. The trash, Grandpa's story and the dog walks all come first." },
      { id: "SK-TT1c-C12", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: ["p5"],
        prompt: "Complete the sentences about Tariq. Choose the best answer for each blank.",
        text: "Tariq's actions in paragraph 4 show that he is {0}. He starts cleaning because he wants {1}.",
        slots: [
          { options: ["determined", "discouraged", "careless"], answer: 0 },
          { options: ["to hear the frogs Grandpa remembers", "to fill more bags than his neighbors", "to show Ms. Patel that he is strong"], answer: 0 }
        ],
        clue: "A trait comes from what a character does, and a motive is the reason he does it. Read his actions, then ask why he does them.",
        hints: [
          "A trait comes from what a character does, and a motive is the reason he does it. Read his actions, then ask why he does them.",
          "Paragraph 4 begins with the word Still. It tells what Tariq does right after a gloomy thought. For his reason, look back at paragraph 2.",
          "His thought in paragraph 3 is gloomy, but the first blank asks about his actions in paragraph 4, not his thought. For the second blank, Ms. Patel does not come until after he starts, so he is not doing it for her."
        ],
        how: [
          "In paragraph 3 he thinks one kid can't clean a whole creek. Still, in paragraph 4 he pulls on gloves and fills a whole bag.",
          "Keeping on when a job looks too big shows he is determined.",
          "Paragraph 2 says Tariq wanted to hear those frogs, too, so he wants to hear the frogs Grandpa remembers.",
          "Discouraged fits his thought, not his actions. He never races his neighbors or tries to impress Ms. Patel."
        ],
        misconception: "A common mix-up is naming a feeling from one moment (discouraged) instead of the trait his actions show.",
        why: "The answers are determined and to hear the frogs Grandpa remembers. Tariq thinks the job is too big, but he starts anyway and fills a whole bag, which shows he is determined. Paragraph 2 says he wanted to hear the frogs Grandpa talked about. Ms. Patel joins only after he starts." },
      { id: "SK-TT1c-C13", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p5"],
        stem: ["Tariq's class library is a mess. Books are piled on the floor, and his classmates say it is too much work to fix."],
        prompt: "Based on what Tariq is like in \"The Frogs of Willow Creek,\" what would he most likely do?",
        choices: [
          { text: "start putting the books back on the shelves, a few at a time", correct: true },
          { text: "agree that the mess is too big for one kid to fix" },
          { text: "wait for the teacher to pick someone to clean it up" },
          { text: "ask the Lee twins to clean the library for him" }
        ],
        clue: "To predict what a character will do, think about what he is like and what he did in the story. People often act the same way in a new place.",
        hints: [
          "To predict what a character will do, think about what he is like and what he did in the story. People often act the same way in a new place.",
          "Look at what Tariq does in paragraph 4, when a job seems too big for him.",
          "One choice matches a thought Tariq has in paragraph 3, but he does not act on that thought. Pick the choice that matches what he actually does."
        ],
        how: [
          "In the story, the creek looks too dirty for one kid, but Tariq starts anyway, one can at a time.",
          "So in a new mess, he would most likely start putting the books back on the shelves, a few at a time.",
          "Agreeing that the mess is too big matches his gloomy thought, not his actions. He does not wait for others, and he does not ask others to do the job for him."
        ],
        misconception: "A common mix-up is choosing what a character thinks for a moment instead of what his actions show he is like.",
        why: "The answer is \"start putting the books back on the shelves, a few at a time.\" Tariq is determined: he thinks the creek is too much for one kid, but he starts anyway, one can at a time. He never waits for someone else or hands the job to others." },
      /* Also measures 3.T.T.1.d (compare two characters across texts). */
      { id: "SK-TT1c-C14", type: "ms", points: 2, dok: 3, std: ["3.T.T.1.c", "3.T.T.1.d"], passages: ["p4", "p5"], pick: 2,
        prompt: "Think about Kendra in \"The Fun Run\" and Tariq in \"The Frogs of Willow Creek.\" Which TWO sentences are true about both characters?",
        choices: [
          { text: "Each one has a thought that could have stopped them.", correct: true },
          { text: "Each one does something hard to help someone or something else.", correct: true },
          { text: "Each one practices every single evening to get ready." },
          { text: "Each one is joined by neighbors who come to help." },
          { text: "Each one works with a whole team from the very start." }
        ],
        clue: "To compare, find what is true for one character, then check whether it is also true for the other. A sentence must fit both.",
        hints: [
          "To compare, find what is true for one character, then check whether it is also true for the other. A sentence must fit both.",
          "Reread the middle of each story, where each character faces a tough moment. Then reread the ending of each story. Choose two.",
          "Some sentences are true for only one of them. For example, only one of the two trains every evening before the big day. Test each other sentence against both stories the same way."
        ],
        how: [
          "Kendra thinks she will never get the ribbon if she stops. Tariq thinks one kid can't clean a whole creek. Each one has a thought that could have stopped them.",
          "Kendra helps Eli, and Tariq helps the creek. Each one does something hard to help someone or something else.",
          "Only Kendra practices every evening, and only Tariq is joined by neighbors. Neither one works with a team from the start."
        ],
        misconception: "A common mix-up is choosing a sentence that is true for only one character.",
        why: "The answers are \"Each one has a thought that could have stopped them\" and \"Each one does something hard to help someone or something else.\" Both have a doubting thought, and both act anyway, Kendra for Eli and Tariq for the creek. Only Kendra practices every evening, only Tariq is joined by neighbors, and neither starts with a team." },
      { id: "SK-TT1c-C15", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p5"],
        prompt: "Which situation teaches the same lesson as \"The Frogs of Willow Creek\"?",
        choices: [
          { text: "Nia plants one sunflower by the bus stop. Her neighbors like it, and soon sunflowers line the street.", correct: true },
          { text: "Omar cleans his messy room all by himself, and at last he finds the shoe he lost." },
          { text: "Bea's class visits a pond, and everyone laughs at the frogs hopping in the mud." },
          { text: "Leo wants to build a fort, so he waits until his friends are free to help him." }
        ],
        clue: "First say the story's lesson in your own words so it fits anyone. Then find the situation with the same lesson, even if the people and places are different.",
        hints: [
          "First say the story's lesson in your own words so it fits anyone. Then find the situation with the same lesson, even if the people and places are different.",
          "Compare how the story starts with how it ends. Who is working at first, and who is working by the end?",
          "Two situations share things with the story, like cleaning or frogs, but sharing a topic does not make the lesson the same. Say the story's lesson aloud, then test the two situations that are left."
        ],
        how: [
          "The story's lesson: one person's small start can grow into a big change, because others join in.",
          "Nia plants one sunflower, her neighbors follow, and soon the whole street is full. That is the same lesson.",
          "The answer is \"Nia plants one sunflower by the bus stop. Her neighbors like it, and soon sunflowers line the street.\"",
          "Omar's cleaning and Bea's frogs only match the topic. Leo waits instead of starting."
        ],
        misconception: "A common mix-up is matching a situation by its topic, like cleaning or frogs, instead of by its lesson.",
        why: "The answer is \"Nia plants one sunflower by the bus stop. Her neighbors like it, and soon sunflowers line the street.\" Like Tariq, Nia starts alone with something small, and others join until there is a big change. Omar's room and Bea's frogs share only a topic, and Leo waits instead of starting." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. Each `like` lists only
     the core items it really practises (same component and task), so some core items have no extra question. */
  similar: [
    { id: "SK-TT1c-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.c"], passages: ["p6"],
      like: ["SK-TT1c-P4", "SK-TT1c-C06"],
      prompt: "What do Jaylen's actions show about him?",
      choices: [
        { text: "He keeps his promises, even when he wants to do something else.", correct: true },
        { text: "He would rather stay home than go swimming with his cousins." },
        { text: "He forgets about Biscuit until his cousins call him." },
        { text: "He takes care of Biscuit only because he is paid to." }
      ],
      clue: "A trait comes from what a character does. Look at what Jaylen does when two things pull at him at once.",
      hints: [
        "A trait comes from what a character does. Look at what Jaylen does when two things pull at him at once.",
        "Reread paragraphs 3 and 4. What does Jaylen do before he goes to the pool?",
        "Jaylen does go to the pool in the end, so he does not want to stay home. Now ask yourself why he made his cousins wait, and test each choice that is left."
      ],
      how: [
        "Jaylen told Mrs. Brooks he would feed Biscuit. When his cousins call, he asks them to wait.",
        "He feeds Biscuit, gives her water and checks the door, and only then goes to the pool.",
        "The answer is \"He keeps his promises, even when he wants to do something else.\"",
        "He does go swimming, he watches the clock so he does not forget, and nothing says he is paid."
      ],
      why: "The answer is \"He keeps his promises, even when he wants to do something else.\" Jaylen wants to go to the pool, but he feeds Biscuit first because he promised Mrs. Brooks. He does go swimming, he checks the clock so he does not forget, and the story never says he is paid." },
    { id: "SK-TT1c-S02", type: "ebsr", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: ["p7"],
      like: ["SK-TT1c-C07", "SK-TT1c-C12"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why does Dante keep his hand down at first?",
        choices: [
          { text: "He worries the class will think he is slow.", correct: true },
          { text: "He has already finished the math puzzle." },
          { text: "Ms. Grant has told the class not to talk." },
          { text: "He wants to solve it before Ruby does." }
        ] },
      partB: { prompt: "Which sentence from the story best supports the answer to Part A?",
        choices: [
          { text: "\"If I ask for help, they'll think I'm slow,\" he thought.", correct: true },
          { text: "Ms. Grant gave the class a tricky math puzzle." },
          { text: "When the timer showed two minutes left, his page was still empty." },
          { text: "Ruby drew a quick picture with boxes and dots." }
        ] },
      clue: "A motive is the reason a character does something. A character's thoughts often tell the reason.",
      hints: [
        "A motive is the reason a character does something. A character's thoughts often tell the reason.",
        "Reread paragraph 2. What goes through Dante's mind while his hand stays down?",
        "His page is still empty with two minutes left, so he has not finished. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "In paragraph 2, Dante keeps his hand down and thinks that the class will think he is slow if he asks.",
        "Part A: He worries the class will think he is slow.",
        "Part B: \"If I ask for help, they'll think I'm slow,\" he thought. His own thought gives the reason.",
        "His page is empty, so he is not finished. Nobody says not to talk, and he asks Ruby for help instead of racing her."
      ],
      why: "Part A: He worries the class will think he is slow. Part B: \"If I ask for help, they'll think I'm slow,\" he thought. His thought tells the reason he keeps his hand down. His page is still empty, nobody tells the class not to talk, and he asks Ruby for help instead of racing her." },
    { id: "SK-TT1c-S03", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p8"],
      like: ["SK-TT1c-C10", "SK-TT1c-P6"],
      prompt: "Which lesson do Kiana's actions teach?",
      choices: [
        { text: "When a plan goes wrong, a new idea can still save the day.", correct: true },
        { text: "Kiana and her neighbors eat lunch on the community center porch." },
        { text: "Rain on a Saturday will ruin any plan that you make." },
        { text: "Always check the weather before you plan a big party." }
      ],
      clue: "A lesson works for anyone. Think about the problem, what Kiana does about it and how things turn out.",
      hints: [
        "A lesson works for anyone. Think about the problem, what Kiana does about it and how things turn out.",
        "Paragraph 2 gives the problem. Paragraph 3 tells what Kiana thinks of and does. Paragraph 4 shows how it turns out.",
        "One choice is only something that happens in the story, so it is not a lesson. Another is what her brother thinks, but the ending shows the rain did not ruin anything. Decide between the two that are left."
      ],
      how: [
        "Problem: rain pours down on picnic day, and her brother says it is ruined.",
        "Kiana remembers the covered porch and calls Mr. Ford for the key. The picnic goes on, and nobody minds the rain.",
        "The answer is \"When a plan goes wrong, a new idea can still save the day.\"",
        "Eating on the porch is an event, not a lesson. The rain did not ruin the picnic, and nobody in the story checks the weather."
      ],
      misconception: "A common mix-up is choosing what a character says (\"Now it's ruined\") instead of what the whole story shows.",
      why: "The answer is \"When a plan goes wrong, a new idea can still save the day.\" Rain spoils the outdoor plan, but Kiana thinks of the covered porch, and the picnic goes on. Eating on the porch is an event, the rain does not ruin the day, and the story never says to check the weather." },
    /* Batch SIM-1 (ENG-07): one extra question for each core item that had none left when a child works the
       fifteen in order. Each new `like` names the one core item it practises. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TT1c-S04", type: "order", points: 1, dok: 2, std: ["3.T.T.1.c"], passages: ["p10"],
      like: ["SK-TT1c-P5"],
      prompt: "Put Tobias's feelings in the order they happen in the story.",
      steps: [
        "Tobias is excited to wear the boots.",
        "Tobias is upset about the scuff.",
        "Tobias feels relieved that Cedric is not angry."
      ],
      clue: "A character's feelings change as events happen. Ask what happens right before each feeling.",
      hints: [
        "A character's feelings change as events happen. Ask what happens right before each feeling.",
        "Find the clues to each feeling: what Tobias does, what happens to him, and what Cedric says.",
        "The knot in Tobias's chest lets go only after Cedric speaks, so that feeling comes last. Place the other two."
      ],
      how: [
        "At the start, Tobias \"could hardly wait\" to lace up the borrowed boots, so he is excited.",
        "After he sees the scuff, his stomach drops and he barely kicks the ball. He is upset.",
        "When Cedric laughs and says the scuff shows he saved a goal, the knot in Tobias's chest lets go. He is relieved.",
        "So the order is excited, upset, relieved."
      ],
      misconception: "A common mix-up is putting the happy feelings together at the start. Tobias's mood drops in the middle and lifts at the end.",
      why: "The order is: excited to wear the boots; upset about the scuff; relieved that Cedric is not angry. Each feeling comes right after the event that causes it." },
    { id: "SK-TT1c-S05", type: "hottext", points: 1, dok: 2, std: ["3.T.T.1.c"], passages: ["p11"],
      like: ["SK-TT1c-C03"],
      prompt: "Which sentence shows something Rafa does, not something he says or thinks, that proves he has decided to be patient? Choose the sentence in the passage.",
      targets: ["p11:1:2", "p11:3:1", "p11:3:3", "p11:4:2", "p11:5:1", "p11:5:2"],
      answer: ["p11:5:1"], pick: 1,
      clue: "An action is something a character does. It can prove a decision. Ask which sentences are actions, and then which action shows the decision.",
      hints: [
        "An action is something a character does. It can prove a decision. Ask which sentences are actions, and then which action shows the decision.",
        "Sort the sentences: which are said out loud, which are thought, and which are things Rafa does?",
        "Reaching for the tablet is an action, but it happens before Rafa changes his mind. Check each action that is left."
      ],
      how: [
        "Rafa's words (\"Try the green one\") and thoughts (\"If he can wait for me\") are not actions.",
        "Setting up the tablet, a tight jaw and reaching for the tablet are actions, but they come before Rafa decides to wait, or they show his frustration.",
        "After he remembers the bike rides, Rafa pulls his hand back and folds it in his lap. Keeping his hands still shows he has decided to let Grandpa try.",
        "The answer is \"Rafa pulled his hand back and folded it in his lap.\""
      ],
      misconception: "A common mix-up is choosing a thought. A thought tells what Rafa decides inside; an action proves it.",
      why: "The answer is \"Rafa pulled his hand back and folded it in his lap.\" Keeping his hands still shows he has decided to be patient. Setting up the tablet, the tight jaw and reaching for the tablet come before the decision, and the other sentences are words or thoughts." },
    { id: "SK-TT1c-S06", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p10"],
      like: ["SK-TT1c-C04"],
      prompt: "Cedric says, \"That scuff means you saved a goal.\" Why does the author include these words?",
      choices: [
        { text: "to show that Cedric is not angry and sees the scuff in a good way", correct: true },
        { text: "to show that Cedric wants his boots back right away" },
        { text: "to show that Cedric is upset that Tobias slid on the grass" },
        { text: "to show that Tobias plans to buy Cedric a new pair of boots" }
      ],
      clue: "Authors put a character's words in a story for a reason. Ask what the words show about the character and how they change what Tobias feels.",
      hints: [
        "Authors put a character's words in a story for a reason. Ask what the words show about the character and how they change what Tobias feels.",
        "Reread what Cedric says. Then notice what Tobias feels afterward.",
        "Tobias never says he will buy new boots, so that choice has no support. Test each choice that is left against how Cedric acts."
      ],
      how: [
        "Tobias comes to Cedric worried and says he is sorry for scuffing the boots.",
        "Cedric laughs and says boots are made for playing in. He turns the scuff into a sign that Tobias saved a goal.",
        "The answer is \"to show that Cedric is not angry and sees the scuff in a good way.\"",
        "Cedric laughs instead of asking for the boots, he does not blame Tobias for sliding, and no one talks about buying new boots."
      ],
      misconception: "A common mix-up is thinking a character who owns something must be upset when it gets damaged. Look at what he actually says.",
      why: "The answer is \"to show that Cedric is not angry and sees the scuff in a good way.\" He laughs, says boots are made for playing in, and links the scuff to a saved goal. He does not ask for the boots back, he does not blame Tobias for sliding, and nobody plans to buy new boots." },
    { id: "SK-TT1c-S07", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.c"], passages: [],
      like: ["SK-TT1c-C06"],
      stem: ["Every night, Yara packs her backpack. She puts her shoes by the door and sets her alarm. In the morning, she is ready ten minutes early. Her brother is still looking for his socks."],
      prompt: "Read the story. What does Yara's habit of getting ready each night show about her?",
      choices: [
        { text: "She plans ahead so she is ready for the next day.", correct: true },
        { text: "She is afraid that her brother will leave without her." },
        { text: "She wants to be the first person to arrive at school." },
        { text: "She does not like to talk to anyone in the morning." }
      ],
      clue: "An action that a character repeats shows what the character is like. Ask what Yara's habit says about her.",
      hints: [
        "An action that a character repeats shows what the character is like. Ask what Yara's habit says about her.",
        "List the things Yara does every night. What do they have in common?",
        "Nothing in the story says Yara is afraid of anything. Test each choice that is left against what she does."
      ],
      how: [
        "Each night, Yara packs, lays out her shoes and sets her alarm. All three get things ready ahead of time.",
        "The next morning she is ready early, so the plan works.",
        "The answer is \"She plans ahead so she is ready for the next day.\"",
        "The story never says she is afraid, wants to be first at school, or avoids talking."
      ],
      misconception: "A common mix-up is choosing a reason the story never gives. Stay with what the repeated actions show.",
      why: "The answer is \"She plans ahead so she is ready for the next day.\" Packing, laying out shoes and setting an alarm all get her ready ahead of time. The story never says she is afraid, wants to arrive first or avoids talking." },
    { id: "SK-TT1c-S08", type: "match", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: ["p14"],
      like: ["SK-TT1c-C08"],
      prompt: "How does Beni feel at each moment? Match each moment to the feeling it shows. Use each feeling once.",
      cols: ["nervous", "embarrassed", "relieved", "proud"],
      rows: [
        { text: "when he waits behind the curtain", answer: 0 },
        { text: "when the cards scatter across the stage", answer: 1 },
        { text: "when the whole room laughs along with him", answer: 2 },
        { text: "when his mom cheers during his bow", answer: 3 }
      ],
      clue: "A character's feeling shows in what happens and in what the character does. Ask how you would feel at each moment.",
      hints: [
        "A character's feeling shows in what happens and in what the character does. Ask how you would feel at each moment.",
        "For each moment, find the clue in the story: a body feeling, something that happens, or what other people do.",
        "Knees that feel like jelly are a sign of nervousness. Match the other three moments the same way."
      ],
      how: [
        "Behind the curtain, Beni's knees feel like jelly, so he is nervous.",
        "When the cards scatter, his face turns hot and red. That shows embarrassment.",
        "The crowd laughs along with him, not at him, so his worry melts away. He is relieved.",
        "When his mom jumps up and cheers, he stands tall with a big smile. He is proud."
      ],
      misconception: "A common mix-up is calling the laughing moment embarrassing. Beni laughs too, which shows relief.",
      why: "Waiting behind the curtain shows nervous. The scattered cards and red face show embarrassed. The room laughing along with him shows relieved. His mom cheering while he stands tall shows proud." },
    { id: "SK-TT1c-S09", type: "hottext", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: ["p11"], pick: 2,
      like: ["SK-TT1c-C09"],
      prompt: "Which TWO sentences show what is going on in Rafa's mind before he pulls his hand back? Choose two sentences in the passage.",
      targets: ["p11:3:1", "p11:3:3", "p11:4:1", "p11:4:2", "p11:4:3", "p11:5:1"],
      answer: ["p11:4:1", "p11:4:2"],
      clue: "Think about what is going on inside Rafa's head. Look for sentences about the inside, not the outside.",
      hints: [
        "Think about what is going on inside Rafa's head. Look for sentences about the inside, not the outside.",
        "Read the sentences between the moment Rafa gets upset and the moment he pulls his hand back.",
        "A tight jaw shows how Rafa looks on the outside, but it does not tell what he thinks or remembers. Check each sentence that is left."
      ],
      how: [
        "Rafa first gets upset: his jaw tightens and he reaches for the tablet. Those are things he does.",
        "Then the story says he remembered the summer Grandpa taught him to ride a bike. A memory is inside his mind.",
        "Next he thinks, \"If he can wait for me, I can wait for him.\" That is a thought.",
        "The ticking clock is the setting, and pulling his hand back is an action that comes after."
      ],
      misconception: "A common mix-up is choosing an action. Actions show what a character does; thoughts and memories show what is in his mind.",
      why: "The answers are the sentence about Rafa remembering the summer Grandpa taught him to ride a bike, and the sentence where Rafa thinks, \"If he can wait for me, I can wait for him.\" A memory and a thought are inside his mind. His tight jaw and reaching are actions, the clock is the setting, and pulling his hand back comes after." },
    { id: "SK-TT1c-S10", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p12"],
      like: ["SK-TT1c-C10"],
      prompt: "Which lesson do Dalia's choices teach the reader?",
      choices: [
        { text: "Sharing credit shows respect for the people who help you.", correct: true },
        { text: "Dalia and Kiran win a blue ribbon at the science fair." },
        { text: "It is better to work alone than to work with a partner." },
        { text: "Marble runs work best when the ramps are very steep." }
      ],
      clue: "A lesson is a big idea about how to act. Look at what the character chooses, not only at what happens.",
      hints: [
        "A lesson is a big idea about how to act. Look at what the character chooses, not only at what happens.",
        "Look at what Dalia almost says, and what she says instead.",
        "A fact about who wins tells what happens but not how to act. Check each choice that is left against Dalia's choice."
      ],
      how: [
        "Dalia almost says, \"I did the hard part,\" but she thinks of Kiran bending the tubes.",
        "Instead she says they both built it and names what Kiran did. She gives him credit.",
        "The answer is \"Sharing credit shows respect for the people who help you.\"",
        "Winning the ribbon is an event, Dalia works with Kiran instead of alone, and the ramps are only a detail."
      ],
      misconception: "A common mix-up is choosing what happens in the story. A lesson tells how people should act.",
      why: "The answer is \"Sharing credit shows respect for the people who help you.\" Dalia could have taken the credit, but she names what Kiran did. Winning a ribbon is an event, the partners work together, and the steep ramps are only a detail." },
    { id: "SK-TT1c-S11", type: "ms", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: ["p13"], pick: 2,
      like: ["SK-TT1c-C11"],
      prompt: "Which TWO events happen because Amira puts up the box of books?",
      choices: [
        { text: "Mr. Alder leaves a new book with a thank-you note.", correct: true },
        { text: "A neighbor builds a second box for the extra books.", correct: true },
        { text: "Amira loves to read." },
        { text: "Mr. Alder walks his dog past the fence every day." },
        { text: "Amira nails the box to her fence." }
      ],
      clue: "An effect happens because of a cause. Find the cause, and then look for events that come after it.",
      hints: [
        "An effect happens because of a cause. Find the cause, and then look for events that come after it.",
        "Find the moment Amira nails up the box. Then ask which events would not have happened without the box.",
        "Amira's love of reading is true before the box goes up, so it cannot be an effect. Check each other choice the same way."
      ],
      how: [
        "Amira nails up the box on Saturday. Everything that happens because of it must come after.",
        "Mr. Alder leaves a book with a note, and later a neighbor builds a second box because the first one is too full.",
        "The answers are \"Mr. Alder leaves a new book with a thank-you note.\" and \"A neighbor builds a second box for the extra books.\"",
        "Loving to read was true before she put up the box, Mr. Alder walked his dog past the fence every day anyway, and nailing up the box is the cause, not a result."
      ],
      misconception: "A common mix-up is choosing a fact from the start of the story. Those are reasons for the box, not results of it.",
      why: "The answers are \"Mr. Alder leaves a new book with a thank-you note.\" and \"A neighbor builds a second box for the extra books.\" Both happen after the box goes up. Amira's love of reading was true before, Mr. Alder walks his dog past the fence every day anyway, and nailing up the box is the cause, not an effect." },
    { id: "SK-TT1c-S12", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.c"], passages: [],
      like: ["SK-TT1c-C12"],
      stem: ["Odessa's neighbor, Mr. Pike, broke his arm. Every afternoon, Odessa took his trash can to the curb. She brought it back after the truck came. She never asked for anything. She did not tell her friends."],
      prompt: "Read the story. Then complete the sentences. Choose the best answer for each blank.",
      text: "Odessa's actions show that she is {0}. She helps Mr. Pike because she wants {1}.",
      slots: [
        { options: ["thoughtful", "selfish", "shy"], answer: 0 },
        { options: ["to make his hard days a little easier", "to get paid for the work", "to show her friends how helpful she is"], answer: 0 }
      ],
      clue: "What a character does again and again shows what the character is like. Ask why she keeps doing it and what she gets from it.",
      hints: [
        "What a character does again and again shows what the character is like. Ask why she keeps doing it and what she gets from it.",
        "Reread the story and notice each thing Odessa does.",
        "A selfish person does not give up a part of every afternoon for a neighbor. For the second blank, ask what Odessa gets in return."
      ],
      how: [
        "Odessa carries Mr. Pike's trash can out and back every afternoon while his arm is broken. She thinks about what he needs.",
        "She never asks for anything, so she is not doing it for pay, and she does not tell her friends, so she is not showing off.",
        "The answers are thoughtful and to make his hard days a little easier.",
        "Selfish does not fit, and nothing says she is shy."
      ],
      misconception: "A common mix-up is thinking a helper must want something back. Odessa gets nothing and tells no one.",
      why: "The answers are thoughtful and to make his hard days a little easier. Odessa helps every afternoon, asks for nothing and tells no one. That is not selfish, nothing says she is shy, and she is not helping for pay or to show off." },
    { id: "SK-TT1c-S13", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p13"],
      like: ["SK-TT1c-C13"],
      stem: ["Amira's school playground has no benches, and kids sit on the hot ground at recess. Her classmates say it is too big a job for kids to fix."],
      prompt: "Based on what Amira is like in \"The Little Library,\" what would she most likely do?",
      choices: [
        { text: "bring a crate from home for kids to sit on", correct: true },
        { text: "agree that kids cannot fix a playground" },
        { text: "wait for the principal to choose a helper" },
        { text: "tell her classmates to complain to the bus driver" }
      ],
      clue: "What a character does in one story can help you tell what she would do in a new one. Ask what Amira does when a job looks too big.",
      hints: [
        "What a character does in one story can help you tell what she would do in a new one. Ask what Amira does when a job looks too big.",
        "Reread what Amira thinks and then what she does when she puts up the box.",
        "Amira does not wait for someone else to act, so waiting for the principal does not fit her. Test each choice that is left."
      ],
      how: [
        "In the story, Amira thinks nobody will care about a box of books. She builds it anyway and starts small.",
        "So when a job looks too big, she begins with one small step.",
        "In the new situation, the same Amira would bring one crate and set it out. The answer is \"bring a crate from home for kids to sit on.\"",
        "Agreeing it cannot be fixed, waiting for a helper to be chosen, and complaining to the bus driver are not what she does."
      ],
      misconception: "A common mix-up is choosing what her classmates say. Choose what Amira's own actions in the story show.",
      why: "The answer is \"bring a crate from home for kids to sit on.\" In the story, Amira starts small even though she doubts it will matter. The other choices give up, wait for someone else, or blame someone else." },
    { id: "SK-TT1c-S14", type: "ms", points: 2, dok: 3, std: ["3.T.T.1.c"], passages: ["p10", "p13"], pick: 2,
      like: ["SK-TT1c-C14"],
      prompt: "Think about Tobias in \"The Borrowed Boots\" and Amira in \"The Little Library.\" Which TWO sentences are true about both characters?",
      choices: [
        { text: "Each one has a doubt before the story ends well.", correct: true },
        { text: "Each one feels better because of how other people act." , correct: true },
        { text: "Each one says sorry for something that went wrong." },
        { text: "Each one gets help from a cousin." },
        { text: "Each one does everything alone from start to finish." }
      ],
      clue: "To compare two characters, ask the same question about each one. A sentence must be true for both.",
      hints: [
        "To compare two characters, ask the same question about each one. A sentence must be true for both.",
        "Take one sentence at a time. Check it against Tobias, then against Amira. Choose two.",
        "Only Tobias says sorry in his story. Check each sentence that is left against both characters."
      ],
      how: [
        "Tobias worries about the scuff, and Amira thinks that nobody will care about a box of books. Each one has a doubt before the good ending.",
        "Tobias feels better when Cedric laughs, and Amira smiles when neighbors fill the box and kids come. Each feels better because of what others do.",
        "The answers are \"Each one has a doubt before the story ends well.\" and \"Each one feels better because of how other people act.\"",
        "Only Tobias says sorry or has a cousin, and Amira's neighbors help her."
      ],
      misconception: "A common mix-up is choosing a sentence that is true for only one of the two characters.",
      why: "The answers are \"Each one has a doubt before the story ends well.\" and \"Each one feels better because of how other people act.\" Both are true for Tobias and Amira. Only Tobias says sorry or has a cousin, and Amira gets help from neighbors." },
    { id: "SK-TT1c-S15", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.c"], passages: ["p12"],
      like: ["SK-TT1c-C15"],
      prompt: "Which situation teaches the same lesson as \"The Marble Run\"?",
      choices: [
        { text: "Mina wins a poster prize and tells the principal that Jo drew the flowers on it.", correct: true },
        { text: "Pablo practices juggling every day until he can toss three balls without dropping one." },
        { text: "Gus finds a lost glove in the hall and takes it to the front office." },
        { text: "Tia saves her allowance for months so she can buy a new bike." }
      ],
      clue: "First say the lesson of the story in your own words. Then look for a new situation where someone makes a choice that teaches the same lesson.",
      hints: [
        "First say the lesson of the story in your own words. Then look for a new situation where someone makes a choice that teaches the same lesson.",
        "Ask what Dalia does when the judge asks who built the marble run. Which new situation has a character facing a choice like that?",
        "Saving money for something is a choice about patience, not about the lesson of this story. Test each choice that is left."
      ],
      how: [
        "Dalia could take all the credit, but she names what Kiran did. The lesson is that sharing credit shows respect.",
        "Look for a new situation where a character shares credit for something good.",
        "The answer is \"Mina wins a poster prize and tells the principal that Jo drew the flowers on it.\"",
        "Practicing, returning a glove and saving money teach other lessons: hard work, honesty and patience."
      ],
      misconception: "A common mix-up is choosing a situation that is also about doing something good. The lesson has to be the same.",
      why: "The answer is \"Mina wins a poster prize and tells the principal that Jo drew the flowers on it.\" Like Dalia, she shares credit with the person who helped. Practicing juggling shows hard work, returning a glove shows honesty, and saving money shows patience." }
  ],
  /* Hints and Show me how for items kept in practice: refs P4-P6 (core set 1) and Together P1-P3. */
  addons: {
    "SK-TT1c-P1": {
      hints: [
        "A motive is the reason a character wants or does something. Ask: what would the extra money let Marisol do?",
        "Read paragraph 4. What does Marisol say the money would let her do?",
        "Mr. Okafor was not looking when he handed over the change, so he did not mean it as a gift."
      ],
      how: [
        "In paragraph 4, Marisol whispers that now she can buy the sketchbook.",
        "The next sentence says she had wanted it all summer.",
        "The answer is \"She wants to buy a sketchbook she has wanted all summer.\"",
        "Mr. Okafor gave too much by mistake, not as a gift, and nothing says she owes her dad or wants a second pie."
      ] },
    "SK-TT1c-P2": {
      hints: [
        "First Marisol is excited about the money. Look for the first sign that keeping it starts to feel wrong.",
        "She is excited in paragraph 4. Look at the sentences that come after that.",
        "A clue word like but often shows a feeling turning around. Her eyes growing wide in paragraph 3 shows surprise, not a bad feeling about keeping the money."
      ],
      how: [
        "In paragraph 4, Marisol is excited about the sketchbook.",
        "Paragraph 5 begins with But, and the money feels heavier, even though five dollars weighs almost nothing. That shows she feels bad about keeping it.",
        "The answer is \"But with every step, the money felt heavier in her pocket.\"",
        "Her eyes growing wide is surprise, and the whisper is still excitement. The sentences after paragraph 5 come once her feelings have already changed."
      ],
      misconception: "A common mix-up is picking a sentence from later in the story. The question asks for the first moment her feeling starts to change." },
    "SK-TT1c-P3": {
      hints: [
        "Thoughts can explain why a character makes a choice. Ask who Marisol is thinking about and what she cares about.",
        "Read paragraph 5. What will happen to Mr. Okafor at the end of the day if she keeps the money?",
        "Nothing in paragraph 5 is about being tired or about losing the money. Her thoughts are about another person."
      ],
      how: [
        "In paragraph 5, Marisol thinks about Mr. Okafor working hard in the hot sun.",
        "She knows his money will come up short at the end of the day.",
        "The answer is \"They show she cares that keeping the money hurts Mr. Okafor.\" Caring about him leads to her honest choice, which is the lesson.",
        "She is not tired or afraid of losing the money, and she never wishes for more."
      ] },
    "SK-TT1c-P4": {
      hints: [
        "A trait is what a character is like inside. Look at what Marisol thinks and what she chooses, not only how she feels or wishes for a moment.",
        "Reread paragraph 5. Who is Marisol thinking about, and why does it bother her?",
        "Greedy fits only her first wish, not the end of the story. Ask what kind of person her thoughts in paragraph 5 show, and what kind of person her choice by the end shows."
      ],
      how: [
        "In paragraph 5, Marisol thinks about Mr. Okafor working in the hot sun and coming up short. Caring how someone else will be affected shows she is thoughtful.",
        "By the end, she has not kept money that was not hers, and Mr. Okafor thanks her for being honest. That shows she is honest.",
        "Check the others: greedy fits only her first wish, and careless and shy have no evidence in the story.",
        "The answers are honest and thoughtful."
      ],
      misconception: "A common mix-up is picking a feeling or wish from one moment (wanting to keep the money) instead of a trait shown by her choices." },
    "SK-TT1c-P5": {
      hints: [
        "Feelings change as a story moves along. Find a feeling near the beginning, one in the middle and one at the end.",
        "Look at paragraph 4 for her first feeling, paragraph 5 for the middle and paragraph 8 for the end.",
        "Her proud feeling comes after she gives the money back, so it cannot come first. Decide which of the other two feelings comes before the other."
      ],
      how: [
        "Paragraph 4: she is excited that she can buy the sketchbook.",
        "Paragraph 5: the money feels heavier, so she feels uneasy about keeping it.",
        "Paragraph 8: she feels proud all the way home.",
        "So the order is excited, then uneasy, then proud."
      ] },
    "SK-TT1c-P6": {
      hints: [
        "The central message is a lesson for anyone. It comes from the character's big choice and how things turn out.",
        "Find Marisol's big choice in paragraph 6. Then read paragraph 8 to see what she gives up and how she feels.",
        "Saving money and shopping at a market happen in the story, but they are not what Marisol learns. For Part B, skip the sentences that only explain how the mistake happened, then pick the one that fits your Part A lesson."
      ],
      how: [
        "Her big choice: she returns the five dollars, even though it means no sketchbook.",
        "Part A: Being honest is right, even when it costs you.",
        "Part B: \"But as she carried the pie home, she felt proud all the way.\" Her pride shows honesty was worth what it cost.",
        "The other sentences tell about saving money or how the mistake happened."
      ],
      misconception: "A common mix-up is picking a topic from the story (saving money, the market) instead of what the character's choice teaches." }
  },
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
  ],
  /* PP-004 form B of the skill check (agent formB-lit). Same code, points (7) and DOK mix
     (2,2,2,3,2) as form A, on a new passage p3. NEEDS INDEPENDENT REVIEW.
     See docs/audits/work/pp004-formB-formB-lit.md. */
  testB: [
    { id: "SK-TT1c-TB1", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Why does Ji-ho rush and stuff in a big pile of filling at first?",
      choices: [
        { text: "He wants to make mandu as well as Halmoni does.", correct: true },
        { text: "He wants to finish fast so he can go outside and play." },
        { text: "Halmoni tells him to hurry before the family comes." },
        { text: "He wants to make more mandu than anyone else." }
      ],
      clue: "Find the clue word so in paragraph 3. It links what Ji-ho is hoping for to what he does.",
      why: "The answer is \"He wants to make mandu as well as Halmoni does.\" Paragraph 3 says he wanted his mandu to look just like hers, so he tried to work as fast as she did. The story never says he wants to play or to make the most, and Halmoni's advice is to slow down, not hurry." },
    { id: "SK-TT1c-TB2", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "What do Ji-ho's words and actions in paragraph 4 show about how he feels?",
      choices: [
        { text: "He is frustrated and ready to give up.", correct: true },
        { text: "He is sleepy and wants to take a nap." },
        { text: "He is angry at Halmoni for tearing his wrapper." },
        { text: "He is proud of how fast he is working." }
      ],
      clue: "The writer does not name the feeling. Look at what Ji-ho does with the torn wrapper and his arms, and listen to what he says.",
      why: "The answer is \"He is frustrated and ready to give up.\" He throws the wrapper down, crosses his arms and says, \"I'm no good at this. You do it.\" Ji-ho tore the wrapper himself, so he is not angry at Halmoni, and nothing he does shows pride." },
    { id: "SK-TT1c-TB3", type: "hottext", points: 1, dok: 2, passages: ["p3"],
      prompt: "Which sentence tells a thought that helps Ji-ho decide to try again? Choose the sentence in the passage.",
      targets: ["p3:5:1", "p3:6:3", "p3:7:1", "p3:7:2", "p3:8:1"],
      answer: ["p3:7:2"], pick: 1,
      clue: "A thought is what a character says inside his own head. Check who is talking or thinking in each sentence.",
      why: "The answer is \"He thought, 'If Halmoni's first mandu were lumpy, maybe mine can get better, too.'\" This is Ji-ho's own thought, and it gives him the reason to pick up a new wrapper. The sentence about slowing down is Halmoni's words, not Ji-ho's thought, and looking at the photo or picking up a wrapper is an action." },
    { id: "SK-TT1c-TB4", type: "ebsr", points: 2, dok: 3, passages: ["p3"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What lesson does Ji-ho learn by the end of the story?",
        choices: [
          { text: "Getting good at something hard takes time and practice.", correct: true },
          { text: "It is best to let someone else do a hard job." },
          { text: "Food has to look perfect to taste good." },
          { text: "Old photos help you remember your family." }
        ] },
      partB: { prompt: "Which sentence from the story best shows that Ji-ho has learned this lesson?",
        choices: [
          { text: "\"Some were lumpy, and some were almost as neat as Halmoni's.\"", correct: true },
          { text: "\"Halmoni's fingers moved fast.\"" },
          { text: "\"He stuffed in a big pile of filling.\"" },
          { text: "\"'I'm no good at this,' he grumbled.\"" }
        ] },
      clue: "Compare how Ji-ho acts in paragraph 4 with how he acts at the end. What does he do differently, and how do his mandu turn out?",
      why: "Part A: Getting good at something hard takes time and practice. Part B: \"Some were lumpy, and some were almost as neat as Halmoni's.\" Ji-ho stops giving up, slows down and keeps going, and his mandu get better. Letting someone else do it is what he wanted before he changed. His family eats even the lumpy ones, so food does not have to look perfect." },
    { id: "SK-TT1c-TB5", type: "ms", points: 2, dok: 2, passages: ["p3"], pick: 2,
      prompt: "Which TWO words best describe Halmoni in this story?",
      choices: [
        { text: "caring", correct: true },
        { text: "wise", correct: true },
        { text: "bossy" },
        { text: "impatient" },
        { text: "forgetful" }
      ],
      clue: "Look at what Halmoni does when Ji-ho says \"You do it,\" and think about why she shows him the old photo.",
      why: "The answers are caring and wise. She does not take over or scold Ji-ho; she stops to help him feel better, which is caring. She uses her own first lumpy mandu and her mother's advice to teach him, which is wise. Her fingers move fast, but she is not impatient with Ji-ho, and she remembers her first mandu, so she is not forgetful." }
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
      "Look at the same part in both stories. Who is the main character? Where and when does it happen, and how much time goes by? What events happen, and what is the problem? What is the lesson?",
      "Two stories can have very different characters and settings but teach the same lesson.",
      "You will often compare stories from different places and cultures, like a story from Ghana and a story from Vermont. Notice what is different about each place and way of life, and what the characters feel and learn that is the same. When a family does, eats or celebrates something special, ask what that custom means to them. Customs can look very different and still mean the same thing.",
      "Keep a chart in your head with two sides: same and different. When you compare three stories, check each sentence against every one of them."
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
        "Now find each setting. Kai is on a warm, sunny beach. Greta is in a snowy yard.",
        "A setting is also when. Kai's story happens on a warm summer day, but Greta's happens in the middle of a snowy winter."
      ],
      answer: "Kai and Greta both keep trying after their work gets knocked down. Kai is on a sunny beach in summer, but Greta is in a snowy yard in winter."
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
    },
    {
      show: [
        "Story 1: In India, Anaya draws a bright pattern of colored powder by her front door. Her family makes one every Diwali to welcome guests.",
        "Story 2: In Hawaii, Kaleo's family greets each visitor at the door with a lei, a necklace made of fresh flowers."
      ],
      ask: "How are the two customs different, and what do they both show?",
      steps: [
        "Find the custom in each story. Anaya's family draws a pattern with powder. Kaleo's family gives a flower necklace.",
        "Find what each custom is for. Both happen when guests or visitors come to the door.",
        "Compare. The families do different things, but the customs mean the same thing."
      ],
      answer: "The customs are different, a powder pattern and a flower necklace, but both show a family welcoming guests to their home."
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
    { id: "p3", title: "The Smallest Cousin", genre: "Literary text",
      paragraphs: [
        ["Mateo lived with his big family in a town in Oaxaca, Mexico.", "He was the youngest and smallest of all the cousins.", "His big cousins liked to tease him.", "\"You are too tiny to help with anything,\" they said."],
        ["One afternoon, Grandfather dropped his old silver ring in the courtyard.", "It was his favorite treasure.", "The ring rolled across the stones and slid into a narrow crack in the wall."],
        ["The big cousins pushed their fingers into the crack.", "They pushed and pulled, but their hands were too wide.", "\"It's gone for good,\" they groaned."],
        ["Mateo stepped forward.", "He slipped his thin little hand into the crack, wiggled it, and pulled out the ring."],
        ["Grandfather held the ring close.", "\"Being small is what saved my treasure,\" he said."],
        ["From that day on, Mateo's cousins never teased him again.", "Mateo felt proud of being just the size he was."]
      ] },
    { id: "p4", title: "Ravi and the Kingfisher", genre: "Literary text",
      paragraphs: [
        ["Ravi was the quietest boy in his class in Chennai, India.", "He did not shout on the playground or chatter at lunch.", "\"Why don't you ever talk?\" the other kids asked.", "Ravi just shrugged."],
        ["One morning, the class took a trip to a bird park by a lake.", "The children ran along the path, laughing and calling to each other.", "Every time they came close, the birds flew away."],
        ["\"I haven't seen a single bird up close,\" Arjun complained."],
        ["Ravi sat down on a bench by the water and stayed very still.", "After a few minutes, a little bird with bright blue wings landed on a branch right next to him.", "It was a kingfisher!"],
        ["Ravi pointed without a sound.", "One by one, his classmates tiptoed over and sat beside him.", "Nobody spoke.", "They watched the kingfisher dive into the lake and come up with a tiny fish."],
        ["\"Ravi, you are a great bird watcher,\" said his teacher, Ms. Devi.", "\"Your quiet way helped all of us see.\"", "Ravi smiled.", "For the first time, he was glad to be the quiet one."]
      ] },
    /* Expansion 2026-10-22 (batch B1, author b1a): two new pairs. p5 + p6 are used only by core set 2;
       p7 + p8 only by core set 3. Never used by test. NEEDS INDEPENDENT REVIEW, including the
       cultural details (Danish chair jump at midnight; Japanese New Year's Eve soba and temple bell;
       Mongolian ger moved to spring pasture; Norwegian autumn sheep gathering with bell sheep). */
    { id: "p5", title: "Leap into the New Year", genre: "Literary text",
      paragraphs: [
        ["In Copenhagen, Denmark, the last night of the year was cold and dark.", "Snow dusted the rooftops outside Freja's apartment window."],
        ["This year, Freja was finally old enough to stay up until midnight.", "She checked the clock on the wall again and again.", "\"Is it time yet?\" she asked.", "\"Not yet,\" said her mom with a laugh."],
        ["At five minutes to midnight, the whole family climbed up onto chairs in the living room.", "Grandpa wobbled on his, and everyone giggled."],
        ["\"Why do we do this?\" Freja asked.", "\"At midnight, we jump off our chairs,\" Mom said.", "\"We leave the old year behind and land in the new one, and we hope it will be a good year.\""],
        ["The family counted down together.", "\"Three, two, one!\"", "Freja leaped off her chair and landed with a thump."],
        ["Outside, fireworks burst over the harbor in red and gold.", "Freja hugged Grandpa tight.", "\"I jumped right into the new year,\" she said, \"and I'm so glad we did it together.\""]
      ] },
    { id: "p6", title: "Noodles on the Last Night", genre: "Literary text",
      paragraphs: [
        ["Haruto had never spent the last night of the year at his grandparents' house in Kyoto, Japan.", "Their wooden house was quiet and warm, and it smelled like soup."],
        ["That evening, Grandma set a bowl of hot soba in front of him.", "Soba are thin noodles made from buckwheat.", "Haruto lifted the long noodles with his chopsticks."],
        ["\"Why are the noodles so long?\" he asked.", "\"Long noodles stand for a long, healthy life,\" Grandma said.", "\"We eat them on the last night of the year and hope the new year will be good.\""],
        ["Near midnight, the family walked to the temple at the end of their street.", "A huge bronze bell hung there, and people took turns ringing it.", "The deep sound rolled through the cold air."],
        ["Grandpa lifted Haruto up so he could pull the thick rope.", "BONG!", "Haruto felt the sound hum in his chest."],
        ["On the walk home, Haruto held Grandma's hand.", "\"Next year, can I ring the bell again?\" he asked.", "Grandma nodded, and Haruto thought, \"Now it is my bell, too.\""]
      ] },
    { id: "p7", title: "Moving Day on the Grassland", genre: "Literary text",
      paragraphs: [
        ["Every spring, Bataa's family moved their home across the wide, grassy land of Mongolia.", "Their home was a ger, a round tent made of wooden poles and thick felt."],
        ["This year, the grass near their winter camp was almost gone, and the sheep were hungry.", "\"It is time to move,\" Father said."],
        ["The whole family took the ger apart.", "They rolled up the felt walls, tied the poles together and loaded everything onto an old truck."],
        ["Then Father handed Bataa the reins of a small gray horse.", "\"You are old enough to help herd the sheep,\" he said.", "Bataa sat up tall in the saddle."],
        ["All day, Bataa rode behind the flock.", "When a lamb wandered toward the river, he trotted after it and turned it back."],
        ["At sunset, they reached a valley green with new grass.", "The sheep spread out to eat.", "Bataa slid off his horse, tired but proud.", "He had not lost a single lamb."]
      ] },
    { id: "p8", title: "Bringing the Sheep Home", genre: "Literary text",
      paragraphs: [
        ["All summer, the sheep from Ingrid's family farm in Norway grazed high in the mountains.", "In September, the air turned cold, and the first snow dusted the peaks."],
        ["\"The sheep must come down before winter,\" Grandma said.", "\"Tomorrow, you will help us find them.\""],
        ["Early the next morning, Ingrid, Grandma and two neighbors hiked up a steep, rocky trail.", "Ingrid listened for bells.", "Some of the sheep wore bells, so people could find them among the rocks."],
        ["High on the mountain, Ingrid heard a clink.", "Behind a big rock stood a ewe, a mother sheep, with a bell around her neck.", "Four more sheep waited behind her."],
        ["\"The others follow the bell sheep,\" Grandma had told her.", "So Ingrid took hold of the ewe's collar and proudly led her down the trail.", "Clink, clink.", "One by one, the other sheep followed."],
        ["At the farm gate, Grandma counted the sheep.", "Every one was home.", "That night, Ingrid fell asleep still hearing the clink, clink of the bell."]
      ] },
    /* Expansion 2026-10-22 (batch SIM-1): p9 to p14 are used only by similar items. NEEDS INDEPENDENT REVIEW. */
    { id: "p9", title: "Twenty-One Days", genre: "Literary text",
      paragraphs: [
        ["Mr. Sims's class had a new project: hatching chicks.", "He set a dozen eggs in a warm box called an incubator and hung a calendar beside it."],
        ["Every morning, Lani crossed off one more square on the calendar.", "\"Twenty-one days,\" she told her friends.", "\"That is how long it takes.\""],
        ["The class turned the eggs three times a day.", "Lani drew a picture of the eggs each Friday.", "For a long time, nothing seemed to change."],
        ["On day twenty-one, a tiny crack ran across the biggest egg.", "Then came a peep!", "A damp, fuzzy chick tumbled out, and the whole class cheered."]
      ] },
    { id: "p10", title: "The Birthday Card Dash", genre: "Literary text",
      paragraphs: [
        ["At three o'clock, Cass remembered that Grandma's birthday card was still on her desk.", "The mail truck would stop at the corner mailbox at five."],
        ["Cass grabbed a pen and wrote fast.", "She sealed the envelope, stuck on a stamp and ran out the door.", "Her sneakers slapped the sidewalk."],
        ["The mailbox was six blocks away.", "A dog barked at a fence, and she nearly dropped the card, but she kept running."],
        ["At ten minutes to five, Cass slid the card into the mailbox.", "She leaned on the post to catch her breath.", "A minute later, the mail truck rumbled around the corner."]
      ] },
    { id: "p11", title: "The Lantern Walk", genre: "Literary text",
      paragraphs: [
        ["On the night of the Mid-Autumn Festival, Linh carried a paper lantern shaped like a star down the street in Hanoi.", "Candles glowed inside lanterns all around her."],
        ["\"Why do we carry lanterns?\" Linh asked her grandfather."],
        ["\"The lanterns are for the moon,\" Grandfather said.", "\"Tonight the moon is at its brightest, so we carry our small lights to walk beside it.\""],
        ["Linh looked up.", "A huge, glowing moon hung over the rooftops.", "She lifted her lantern high so it would shine as bright as the sky."],
        ["Back home, the family shared mooncakes on the balcony.", "\"Next year,\" Linh said, \"I will tell my little cousin why we carry lanterns.\""]
      ] },
    { id: "p12", title: "Eight Candles", genre: "Literary text",
      paragraphs: [
        ["On the first night of Hanukkah, Noa helped her father set the menorah in the front window.", "It had nine little holders for candles."],
        ["\"Do you know why we light one more candle each night?\" Father asked."],
        ["\"Long ago, a small jar of oil burned for eight days,\" Father said.", "\"We add a candle each night to remember that bright miracle.\""],
        ["Noa struck a match.", "A small flame leaped up on the first candle and glowed in the window glass."],
        ["Neighbors walking past slowed down to look at the warm light.", "\"Next year,\" Noa said, \"I will light the first candle by myself.\""]
      ] },
    { id: "p13", title: "House on the Lake", genre: "Literary text",
      paragraphs: [
        ["Sophea lived on Tonle Sap, a huge lake in Cambodia.", "Her house did not sit on the ground.", "It floated on the water, tied to long posts."],
        ["When the rains came, the lake rose, and her house rose with it.", "When the dry season came, the water sank, and the house sank too."],
        ["Sophea's school was a boat.", "Each morning, she paddled a small wooden canoe across the water to class.", "Her best friend waved from the next floating house."],
        ["Her mother kept a pot of herbs on the porch and hung fish to dry on a line.", "\"Our home moves with the lake,\" Sophea liked to say."]
      ] },
    { id: "p14", title: "Behind the Dike", genre: "Literary text",
      paragraphs: [
        ["Pieter lived in a small town in the Netherlands, where much of the land lies lower than the sea.", "A long, grassy wall called a dike kept the water out."],
        ["His house stood on solid ground, and it never moved.", "Behind the house, a canal ran between rows of green fields."],
        ["Each morning, Pieter rode his bike along a path by the canal to school.", "Windmills turned slowly in the distance.", "Sheep nibbled the grass along the way."],
        ["His father often checked the dike to be sure it was strong.", "\"Our home stays dry because we take care of the wall,\" Pieter liked to say."]
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
        { text: "A neighbor brings the main character a bowl of soup.", answer: 0 },
        { text: "Snow covers the hill.", answer: 1 },
        { text: "The main character decides to share.", answer: 2 },
        { text: "Someone asks the main character to share.", answer: 2 }
      ],
      clue: "For each detail, check the first story, then the second. If it happens in both, it goes in Both stories.",
      why: "Only Kofi's neighbor, Ama, brings a bowl of soup. Only Lucy's story has snow on a hill. In both stories, someone asks the main character to share (the children at the fence, and Sofia), and in both the main character decides to share." },
    { id: "SK-TT1d-P4", type: "ebsr", points: 2, dok: 3, passages: ["p1", "p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What lesson do BOTH stories teach?",
        choices: [
          { text: "Sharing with others can make life better.", correct: true },
          { text: "New things should be kept safe and clean." },
          { text: "Eating too much fruit can make you sick." },
          { text: "Keeping your things for yourself keeps you happy." }
        ] },
      partB: { prompt: "Which TWO sentences, one from each story, best support the answer to Part A?", pick: 2,
        choices: [
          { text: "\"Sharing his mangoes had filled his days with friends.\"", correct: true },
          { text: "\"It was the best ride of the day.\"", correct: true },
          { text: "\"Lucy pulled the sled over to her friends.\"" },
          { text: "\"Lucy held the rope tight.\"" },
          { text: "\"The next morning, he filled a basket and carried it down the road.\"" }
        ] },
      clue: "A lesson for both stories must fit Kofi AND Lucy. Ask what each main character learns, then check it against both stories.",
      why: "Part A: Sharing with others can make life better. Part B: \"Sharing his mangoes had filled his days with friends.\" and \"It was the best ride of the day.\" Both endings show that things got better after the character shared. Both characters start out keeping their things for themselves, and it makes them unhappy, so that lesson is backward. The other choices fit only one story, or neither." },
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
  /* ---------- Expansion 2026-10-22, batch B1 (author b1a). Pattern: 3.T.T.1.c (B0 reference). ----------
     core: fifteen independent items in three sets of five. { ref } reuses the Try items P4 and P5;
     they stay in practice, and the engine leaves them out of Practice Together, so Together shows P1-P3.
     Set 1 uses the practice pair (p1, p2); set 2 a new pair about New Year customs (p5, p6); set 3 a new
     pair about moving sheep with the seasons (p7, p8) plus a third short story (C13). Hints and Show me
     how for refs and Together items are in addons.
     Author log: docs/expansion-2026-10-22/batches/B1-b1a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT1d-P4" },
      { ref: "SK-TT1d-P5" },
      { id: "SK-TT1d-C03", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.d"], passages: ["p1", "p2"],
        prompt: "Both main characters decide to share, but they share in different ways. Complete the sentences. Choose the best answer for each blank.",
        text: "Kofi shares by {0}. Lucy shares by {1}.",
        slots: [
          { options: ["giving a mango to every child he meets", "letting one friend pick from his tree", "selling his mangoes at a market"], answer: 0 },
          { options: ["riding the sled together with her friends", "giving her sled to Sofia to keep", "letting Ben ride the sled by himself"], answer: 0 }
        ],
        clue: "Two characters can do the same kind of thing in different ways. Find exactly what each one does once they decide to share.",
        hints: [
          "Two characters can do the same kind of thing in different ways. Find exactly what each one does once they decide to share.",
          "Find the part of each story where the main character first shares.",
          "The story never says Kofi goes to a market, so that choice does not fit the first blank. For the second blank, check what happens to the sled after Lucy decides to share."
        ],
        how: [
          "Kofi gives a mango to every child he meets on the road.",
          "Lucy pulls the sled over to her friends, and the three of them squeeze on and ride down together.",
          "The answers are giving a mango to every child he meets and riding the sled together with her friends.",
          "Kofi gives his fruit away, but Lucy shares by doing something with her friends. Neither story has a market, a sled given away to keep, or anyone riding alone after Lucy shares."
        ],
        misconception: "A common mix-up is thinking that two characters who both share must share in the same way. Check what each one really does.",
        why: "The answers are giving a mango to every child he meets and riding the sled together with her friends. Kofi gives his fruit away to the children he meets, and Lucy squeezes onto the sled with Ben and Sofia. There is no market, Lucy does not give the sled away, and nobody rides alone after she shares." },
      { id: "SK-TT1d-C04", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.d"], passages: ["p1", "p2"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How is the time in the two stories different?",
          choices: [
            { text: "Kofi's story lasts more than one day, but Lucy's story happens in one day.", correct: true },
            { text: "Kofi's story happens in one day, but Lucy's story lasts a whole winter." },
            { text: "Both stories happen in a single morning, before lunch." },
            { text: "Kofi's story happens at night, but Lucy's happens in the morning." }
          ] },
        partB: { prompt: "Which sentence from \"Kofi's Mangoes\" best supports the answer to Part A?",
          choices: [
            { text: "\"The next morning, he filled a basket and carried it down the road.\"", correct: true },
            { text: "\"That afternoon, his neighbor Ama brought him a bowl of warm groundnut soup.\"" },
            { text: "\"Her brother gave Kofi a whistle he had carved.\"" },
            { text: "\"Kofi smiled.\"" }
          ] },
        clue: "A setting includes when a story happens. Look for words in each story that tell when things happen and how much time goes by.",
        hints: [
          "A setting includes when a story happens. Look for words in each story that tell when things happen and how much time goes by.",
          "In each story, find every word or phrase that tells when something happens.",
          "Lucy's story begins with the first big snow, and nothing in it says that weeks go by, so the choice about a whole winter does not fit. For Part B, the sentence must match your Part A answer."
        ],
        how: [
          "In \"Kofi's Mangoes,\" Kofi eats mangoes for breakfast, lunch and dinner. Then the story says \"the next morning\" and \"that afternoon.\" So it lasts more than one day.",
          "In \"The Red Sled,\" Lucy sleds after the first big snow, rides again and again, and then has \"the best ride of the day.\" It all happens in one day.",
          "Part A: Kofi's story lasts more than one day, but Lucy's story happens in one day. Part B: \"The next morning, he filled a basket and carried it down the road.\"",
          "\"That afternoon\" tells a time, but by itself it could be the same day. The whistle and Kofi's smile do not tell when anything happens."
        ],
        misconception: "A common mix-up is thinking a setting is only a place. When a story happens, and how long it lasts, is part of the setting too.",
        why: "Part A: Kofi's story lasts more than one day, but Lucy's story happens in one day. Part B: \"The next morning, he filled a basket and carried it down the road.\" Kofi's story moves on to the next morning and that afternoon, but Lucy's sledding all happens on one snowy day. \"That afternoon\" alone could be the same day, and the other sentences do not tell when anything happens." },
      { id: "SK-TT1d-C05", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.d"], passages: ["p1", "p2"],
        prompt: "Kofi will not share his mangoes, and Lucy will not share her sled. How is what Kofi keeps different from what Lucy keeps?",
        choices: [
          { text: "Kofi has more mangoes than he can use, but Lucy has just one sled.", correct: true },
          { text: "Kofi keeps food that will spoil, but Lucy keeps a sled that will break." },
          { text: "Kofi's mangoes are brand-new, but Lucy's sled is old and worn." },
          { text: "Both of them keep something that was given to them as a gift." }
        ],
        clue: "To contrast, look at the same part of both stories and tell how it is different. Here, look at the thing each character keeps.",
        hints: [
          "To contrast, look at the same part of both stories and tell how it is different. Here, look at the thing each character keeps.",
          "Look at what each story says about the mango tree and about Lucy's sled.",
          "Lucy's sled is brand-new, so the choice that calls it old mixes up the facts. Check each other choice against both stories."
        ],
        how: [
          "Kofi's tree grows more fruit than anyone could count. He eats mangoes at every meal, and there are still too many.",
          "Lucy has one brand-new red sled.",
          "The answer is \"Kofi has more mangoes than he can use, but Lucy has just one sled.\"",
          "Mangoes do spoil, but nothing says Lucy's sled will break. The sled is new, not old, and neither story says anything was a gift."
        ],
        misconception: "A common mix-up is mixing up which detail belongs to which story. Check each half of the choice against its own story.",
        why: "The answer is \"Kofi has more mangoes than he can use, but Lucy has just one sled.\" Kofi's tree grows more fruit than anyone could count, but Lucy has one brand-new sled. Nothing says the sled will break, the sled is new, not old, and neither story says anything was a gift." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT1d-C06", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.d"], passages: ["p5", "p6"],
        prompt: "How are the settings of \"Leap into the New Year\" and \"Noodles on the Last Night\" alike?",
        choices: [
          { text: "Both stories happen on the last night of the year.", correct: true },
          { text: "Both stories happen in a city beside a harbor." },
          { text: "Both stories happen in a grandparents' wooden house." },
          { text: "Both stories happen on the first night of a new year." }
        ],
        clue: "To compare settings, look at where and when each story happens. A choice must be true for both stories.",
        hints: [
          "To compare settings, look at where and when each story happens. A choice must be true for both stories.",
          "Find when each story happens, and check that your answer fits both stories.",
          "Only Freja's story has a harbor, so that choice is true for just one story. Check the other choices against both stories."
        ],
        how: [
          "\"Leap into the New Year\" happens in an apartment in Copenhagen, Denmark, on the last night of the year.",
          "\"Noodles on the Last Night\" happens at a grandparents' house in Kyoto, Japan, on the last night of the year.",
          "The answer is \"Both stories happen on the last night of the year.\"",
          "Only Freja's story has a harbor, and only Haruto's story has a wooden house. Both stories lead up to midnight, the end of the old year, so they happen on the last night, not on the first night of the new year."
        ],
        misconception: "A common mix-up is choosing a detail that is true for only one of the stories.",
        why: "The answer is \"Both stories happen on the last night of the year.\" Freja is in Denmark and Haruto is in Japan, but both stories take place on that same night. Only Freja's story has a harbor, only Haruto's has a wooden house, and both happen before the new year begins, not on its first night." },
      { id: "SK-TT1d-C07", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.d"], passages: ["p5", "p6"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How are Freja and Haruto alike?",
          choices: [
            { text: "Each one wants to know why the family follows a custom.", correct: true },
            { text: "Each one is staying up until midnight for the very first time." },
            { text: "Each one is visiting grandparents in another town." },
            { text: "Each one is afraid of the loud sounds at midnight." }
          ] },
        partB: { prompt: "Which TWO sentences, one from each story, best support the answer to Part A?", pick: 2,
          choices: [
            { text: "\"Why do we do this?\" Freja asked.", correct: true },
            { text: "\"Why are the noodles so long?\" he asked.", correct: true },
            { text: "\"Is it time yet?\" she asked." },
            { text: "\"Next year, can I ring the bell again?\" he asked." },
            { text: "She checked the clock on the wall again and again." }
          ] },
        clue: "To compare two characters, find something each one says or does. Then check that it is true for both.",
        hints: [
          "To compare two characters, find something each one says or does. Then check that it is true for both.",
          "Each child asks a grown-up more than one question. Find every question each child asks.",
          "Only Haruto is visiting his grandparents' house, so that choice fits just one story. For Part B, the two sentences must match your Part A answer, one from each story."
        ],
        how: [
          "In paragraph 4 of her story, Freja asks, \"Why do we do this?\"",
          "In paragraph 3 of his story, Haruto asks, \"Why are the noodles so long?\"",
          "Part A: Each one wants to know why the family follows a custom. Part B: those two questions, one from each story.",
          "Only Freja is said to be staying up until midnight for the first time, only Haruto is visiting grandparents, and neither one is afraid. The other questions ask about the time or about next year, not about why."
        ],
        misconception: "A common mix-up is choosing a sentence that is true for only one character. A comparison must fit both.",
        why: "Part A: Each one wants to know why the family follows a custom. Part B: \"Why do we do this?\" Freja asked, and \"Why are the noodles so long?\" he asked. Both children ask why. Only Freja is staying up for the first time, only Haruto is visiting grandparents, and neither one is afraid." },
      { id: "SK-TT1d-C08", type: "match", points: 2, dok: 2, std: ["3.T.T.1.d"], passages: ["p5", "p6"],
        prompt: "Match each detail to the story it is true for. Some details are true for both stories.",
        cols: ["Freja's story", "Haruto's story", "Both stories"],
        rows: [
          { text: "The family jumps off chairs at midnight.", answer: 0 },
          { text: "People take turns ringing a big bell.", answer: 1 },
          { text: "A grandparent is part of the celebration.", answer: 2 },
          { text: "Fireworks light up the sky.", answer: 0 }
        ],
        clue: "For each detail, check the first story, then the second. If it happens in both, it goes in Both stories.",
        hints: [
          "For each detail, check the first story, then the second. If it happens in both, it goes in Both stories.",
          "Look at what each family does near midnight.",
          "Freja's family does not go to a temple, so the bell belongs to only one story. Sort the other details the same way."
        ],
        how: [
          "Jumping off chairs at midnight happens only in Freja's story.",
          "Ringing a big bell happens only in Haruto's story, at a temple.",
          "Fireworks burst over the harbor only in Freja's story.",
          "A grandparent is part of both celebrations: Freja hugs Grandpa, and Haruto is with Grandma and Grandpa. So that detail goes in Both stories."
        ],
        misconception: "A common mix-up is putting a detail in Both stories because it sounds like a holiday. Check that it really happens in both.",
        why: "Jumping off chairs and fireworks happen only in Freja's story. Ringing a big temple bell happens only in Haruto's story. A grandparent is part of both celebrations: Freja's grandpa wobbles on his chair, and Haruto's grandma and grandpa share the night with him." },
      { id: "SK-TT1d-C09", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.d"], passages: ["p5", "p6"],
        prompt: "What message do the two stories share?",
        choices: [
          { text: "Taking part in a family tradition can help you feel you belong.", correct: true },
          { text: "Staying up until midnight is the best part of any holiday." },
          { text: "Food is the most important part of a celebration." },
          { text: "Families everywhere celebrate a holiday in the same way." }
        ],
        clue: "A shared message must fit both stories. Look at how each story ends and what each child feels about the family's custom.",
        hints: [
          "A shared message must fit both stories. Look at how each story ends and what each child feels about the family's custom.",
          "Read the last paragraph of each story. What does each child say or think?",
          "The two families do very different things, so a message saying every family celebrates the same way does not fit. Test the other choices against both endings."
        ],
        how: [
          "At the end of Freja's story, she says she is glad the family did it together.",
          "At the end of Haruto's story, he asks to ring the bell again next year, and he thinks, \"Now it is my bell, too.\"",
          "Both children feel part of the family because they joined in. The answer is \"Taking part in a family tradition can help you feel you belong.\"",
          "Staying up late fits only Freja's story, and food fits only Haruto's. The families do different things, so the message about every family celebrating the same way does not fit."
        ],
        misconception: "A common mix-up is choosing a message that fits only one story, like one about food.",
        why: "The answer is \"Taking part in a family tradition can help you feel you belong.\" Freja is glad her family jumped together, and Haruto thinks that the bell is now his bell, too. Staying up late fits only Freja's story, food fits only Haruto's, and the families celebrate in different ways." },
      { id: "SK-TT1d-C10", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.d"], passages: ["p5", "p6"],
        prompt: "Haruto's grandma says the long noodles \"stand for a long, healthy life.\" Which part of Freja's story is MOST like this?",
        choices: [
          { text: "Mom explains why they all jump off the chairs.", correct: true },
          { text: "Freja checks the clock on the wall again and again." },
          { text: "Grandpa wobbles on his chair, and everyone giggles." },
          { text: "Fireworks burst over the harbor in red and gold." }
        ],
        clue: "To compare customs from two cultures, look past what people do and ask what the custom means to the family.",
        hints: [
          "To compare customs from two cultures, look past what people do and ask what the custom means to the family.",
          "Reread paragraph 3 of Haruto's story. Then reread all of Freja's story.",
          "Freja checking the clock shows she can hardly wait, but it does not tell what a custom means. Test each choice that is left against Grandma's words."
        ],
        how: [
          "Grandma's words tell what the noodles mean: a long, healthy life, and a hope for a good new year.",
          "In Freja's story, Mom tells what jumping off the chairs means: leaving the old year behind and hoping the new one will be good.",
          "The answer is \"Mom explains why they all jump off the chairs.\" Both grown-ups explain the meaning of a custom.",
          "Watching the clock, Grandpa's wobble and the fireworks are things that happen, but they do not tell what a custom means."
        ],
        misconception: "A common mix-up is matching what people do instead of what the custom means. Customs can look different and mean the same thing.",
        why: "The answer is \"Mom explains why they all jump off the chairs.\" Like Grandma, Mom explains what a custom means: both are hopes for a good new year. Watching the clock, Grandpa's wobble and the fireworks happen, but they do not explain a custom." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT1d-C11", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.d"], passages: ["p7", "p8"],
        prompt: "Complete the sentences about the settings. Choose the best answer for each blank.",
        text: "\"Moving Day on the Grassland\" happens on {0}. \"Bringing the Sheep Home\" happens on {1}.",
        slots: [
          { options: ["open grassland in the spring", "steep mountains in early fall", "a busy city street in the summer"], answer: 0 },
          { options: ["steep mountains in early fall", "snowy mountains in the middle of winter", "flat, grassy land in the spring"], answer: 0 }
        ],
        clue: "A setting tells where and when. Find the place and the season in each story, and keep the two stories apart.",
        hints: [
          "A setting tells where and when. Find the place and the season in each story, and keep the two stories apart.",
          "Read the first paragraph of each story.",
          "Grandma says the sheep must come down before winter, so Ingrid's story does not happen in the middle of winter. Test the other choices for each blank against the first paragraphs."
        ],
        how: [
          "\"Moving Day on the Grassland\" begins in spring, on the wide, grassy land of Mongolia.",
          "\"Bringing the Sheep Home\" happens in September, high in the mountains of Norway. September is early fall, and the sheep must come down before winter.",
          "The answers are open grassland in the spring and steep mountains in early fall.",
          "The steep mountains belong to Ingrid's story, not Bataa's, and the first snow on the peaks does not mean it is the middle of winter."
        ],
        misconception: "A common mix-up is mixing up which setting belongs to which story, or reading the first snow as the middle of winter.",
        why: "The answers are open grassland in the spring and steep mountains in early fall. Bataa's family moves every spring across the grassland of Mongolia. Ingrid's sheep come down from the mountains of Norway in September, before winter starts." },
      { id: "SK-TT1d-C12", type: "hottext", points: 2, dok: 2, std: ["3.T.T.1.d"], passages: ["p7", "p8"],
        prompt: "Choose ONE sentence from each story that shows the main character guiding the sheep. Choose two sentences in the passages.",
        targets: ["p7:3:1", "p7:4:3", "p7:5:2", "p7:6:2", "p8:3:1", "p8:5:2", "p8:5:4", "p8:6:3"],
        answer: ["p7:5:2", "p8:5:2"], pick: 2,
        clue: "An action is something a character does. To compare two characters, find one action for each one that fits the question.",
        hints: [
          "An action is something a character does. To compare two characters, find one action for each one that fits the question.",
          "In each story, find the part where the child is with the sheep.",
          "Sitting up tall in the saddle shows how Bataa feels; no sheep move. Check each other sentence against the question."
        ],
        how: [
          "In paragraph 5 of Bataa's story, a lamb wanders toward the river, and he trots after it and turns it back.",
          "In paragraph 5 of Ingrid's story, she takes hold of the bell sheep's collar and leads her down the trail.",
          "The answers are those two sentences, one from each story.",
          "Sitting up tall happens before the sheep move. In \"The sheep spread out to eat\" and \"the other sheep followed,\" the sheep act, not the child. Taking the ger apart is a family job, hiking up comes before Ingrid finds the sheep, and falling asleep comes at the very end."
        ],
        misconception: "A common mix-up is choosing a sentence about how a character feels instead of what the character does.",
        why: "The answers are the sentence where Bataa trots after a lamb and turns it back, and the sentence where Ingrid takes hold of the ewe's collar and leads her down the trail. Both children guide the sheep. Sitting up tall, taking the ger apart, hiking up the trail and falling asleep do not show the child moving sheep, and in the sentences about the sheep spreading out and following, the sheep are the ones acting." },
      { id: "SK-TT1d-C13", type: "ms", points: 2, dok: 3, std: ["3.T.T.1.d"], passages: ["p7", "p8"], pick: 2,
        stem: ["Story 3: In a village in Kenya, the dry season has come, and the stream near Wanjiru's home has dried up. Every morning, Wanjiru and her older brother walk the family's goats to a water hole far away. Wanjiru keeps the smallest goat close to her side the whole way."],
        prompt: "Think about \"Moving Day on the Grassland,\" \"Bringing the Sheep Home\" and Story 3. Which TWO sentences are true about ALL THREE stories?",
        choices: [
          { text: "A child helps move animals to the place they need to be.", correct: true },
          { text: "A change in the season helps decide when the animals move.", correct: true },
          { text: "A child rides a horse to keep the animals together." },
          { text: "A child finds the animals by listening for a bell." },
          { text: "A child walks the animals to a water hole each day." }
        ],
        clue: "When you compare three stories, a sentence must be true for every one of them. Check each sentence against all three.",
        hints: [
          "When you compare three stories, a sentence must be true for every one of them. Check each sentence against all three.",
          "Read Story 3 again. Then think back to the start and the middle of the other two stories. Choose two.",
          "Only Ingrid listens for a bell, so that sentence does not fit all three stories. Test each other sentence the same way."
        ],
        how: [
          "Bataa helps move the sheep to new grass in spring, when the old grass is gone.",
          "Ingrid helps bring the sheep down in early fall, before winter. Wanjiru helps walk the goats to water in the dry season, when the stream has dried up.",
          "So in all three, a child helps move animals to the place they need to be, and a change in the season helps decide when.",
          "Riding a horse is only in Bataa's story, the bell is only in Ingrid's, and the water hole is only in Wanjiru's."
        ],
        misconception: "A common mix-up is choosing a sentence that is true for one or two of the stories but not all three.",
        why: "The answers are \"A child helps move animals to the place they need to be.\" and \"A change in the season helps decide when the animals move.\" Bataa moves sheep in spring, Ingrid brings them down before winter, and Wanjiru walks goats to water in the dry season. The horse, the bell and the water hole each belong to only one story." },
      { id: "SK-TT1d-C14", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.d"], passages: ["p7", "p8"],
        prompt: "Which new story teaches the same lesson as BOTH \"Moving Day on the Grassland\" and \"Bringing the Sheep Home\"?",
        choices: [
          { text: "Tomás's aunt lets him steer the family's fishing boat for the first time, and he beams when they reach the dock.", correct: true },
          { text: "Lena feeds the ducks at the park every Sunday morning with her mom and her baby brother." },
          { text: "Jalen's family packs up their apartment and moves to a new town across the state." },
          { text: "Kim's goat wins a blue ribbon at the county fair, and Kim takes a photo of it." }
        ],
        clue: "Start by saying the lesson both stories share, in words that fit anyone. Then find the new story with the same lesson, even if it has no sheep in it.",
        hints: [
          "Start by saying the lesson both stories share, in words that fit anyone. Then find the new story with the same lesson, even if it has no sheep in it.",
          "Reread the middle and the end of each story. What changes for each child?",
          "Kim's goat is the one that wins, so Kim's story is about the goat's prize. Say the lesson aloud, then test the stories that are left."
        ],
        how: [
          "In \"Moving Day on the Grassland,\" Father hands Bataa the reins and says he is old enough to help. At the end, Bataa is tired but proud.",
          "In \"Bringing the Sheep Home,\" Grandma tells Ingrid she will help find the sheep. Ingrid finds the bell sheep and proudly leads her down the trail.",
          "The shared lesson: being trusted with a real job can make you proud. Tomás steers the boat for the first time and beams, so his story teaches the same lesson.",
          "The ducks story and the fair story have animals, and Jalen's story has a move, but those only match a topic."
        ],
        misconception: "A common mix-up is matching a story by its topic, like animals or moving, instead of by its lesson.",
        why: "The answer is \"Tomás's aunt lets him steer the family's fishing boat for the first time, and he beams when they reach the dock.\" Like Bataa and Ingrid, Tomás is trusted with a real job and feels proud. The ducks, the move and the goat ribbon only share a topic with the sheep stories." },
      { id: "SK-TT1d-C15", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.d"], passages: ["p7", "p8"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How is the way of life of Bataa's family different from the way of life of Ingrid's family?",
          choices: [
            { text: "Bataa's family carries its home along when it moves, but Ingrid's family stays on one farm.", correct: true },
            { text: "Bataa's family lives in a big city, but Ingrid's family lives out in the country." },
            { text: "Bataa's family raises goats, but Ingrid's family raises horses on its farm." },
            { text: "Bataa's family never moves, but Ingrid's family moves to new land every spring." }
          ] },
        partB: { prompt: "Which sentence from \"Moving Day on the Grassland\" best supports the answer to Part A?",
          choices: [
            { text: "\"They rolled up the felt walls, tied the poles together and loaded everything onto an old truck.\"", correct: true },
            { text: "\"Bataa sat up tall in the saddle.\"" },
            { text: "\"The sheep spread out to eat.\"" },
            { text: "\"At sunset, they reached a valley green with new grass.\"" }
          ] },
        clue: "To compare two cultures, look at how each family lives, not just at what happens on one day.",
        hints: [
          "To compare two cultures, look at how each family lives, not just at what happens on one day.",
          "Read the first paragraph of each story. What does each one tell you about how the family lives?",
          "Both families keep sheep, so the choice about goats and horses does not fit. For Part B, the sentence must match your Part A answer."
        ],
        how: [
          "Bataa's family lives in a ger, a round tent. Every spring they take it apart and move it to new grass.",
          "Ingrid's family has a farm with a gate and a barn. The sheep go up the mountain and come back, but the farm stays in one place.",
          "Part A: Bataa's family carries its home along when it moves, but Ingrid's family stays on one farm. Part B: \"They rolled up the felt walls, tied the poles together and loaded everything onto an old truck.\"",
          "Both families keep sheep, neither lives in a city, and it is Bataa's family, not Ingrid's, that moves every spring."
        ],
        misconception: "A common mix-up is choosing a sentence about one day's events when the question asks about a family's whole way of life.",
        why: "Part A: Bataa's family carries its home along when it moves, but Ingrid's family stays on one farm. Part B: \"They rolled up the felt walls, tied the poles together and loaded everything onto an old truck.\" Bataa's family packs up its ger and moves it every spring, while Ingrid's sheep come home to a farm that stays put. Both families keep sheep, and neither lives in a city." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own pair of short new stories. */
  similar: [
    { id: "SK-TT1d-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-C03", "SK-TT1d-C05"],
      stem: ["Story 1: On a farm in Iowa, Sam finds a baby bird on the ground. He makes it a nest in a shoebox and feeds it until it is strong enough to fly away.", "Story 2: In a busy market in Morocco, Amina finds a lost kitten under a fruit cart. She carries it home, and her family keeps it as a pet."],
      prompt: "How is what Sam does different from what Amina does?",
      choices: [
        { text: "Sam cares for the bird until it can leave, but Amina keeps the kitten.", correct: true },
        { text: "Sam keeps the bird as a pet, but Amina lets the kitten go free." },
        { text: "Sam finds the bird at a market, but Amina finds the kitten on a farm." },
        { text: "Sam asks his family for help, but Amina takes care of it alone." }
      ],
      clue: "To contrast, look at the same part of both stories, here what each child does with the animal, and tell how it is different.",
      hints: [
        "To contrast, look at the same part of both stories, here what each child does with the animal, and tell how it is different.",
        "Find what each child does with the animal.",
        "Sam is on a farm and Amina is at a market, so the choice that swaps the places mixes up the stories. Test each choice that is left."
      ],
      how: [
        "Sam feeds the bird until it is strong enough to fly away.",
        "Amina takes the kitten home, and her family keeps it as a pet.",
        "The answer is \"Sam cares for the bird until it can leave, but Amina keeps the kitten.\"",
        "The places are swapped in one choice, Sam does not keep the bird, and neither story says who helps whom."
      ],
      why: "The answer is \"Sam cares for the bird until it can leave, but Amina keeps the kitten.\" Sam feeds the bird until it can fly away, and Amina's family keeps the kitten as a pet. One choice swaps the places, Sam does not keep the bird, and neither story says who helps." },
    { id: "SK-TT1d-S02", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-C06", "SK-TT1d-C11"],
      stem: ["Story 1: On a hot afternoon in Australia, Mia's family eats lunch on the beach under a big umbrella.", "Story 2: On a hot afternoon in Egypt, Karim's family eats lunch on a boat on the Nile River."],
      prompt: "How are the settings of the two stories alike?",
      choices: [
        { text: "Both happen on a hot afternoon near water.", correct: true },
        { text: "Both happen on a boat on a long river." },
        { text: "Both happen on a sandy beach by the sea." },
        { text: "Both happen on a cold morning in a city." }
      ],
      clue: "To compare settings, look at where and when each story happens. A choice must be true for both stories.",
      hints: [
        "To compare settings, look at where and when each story happens. A choice must be true for both stories.",
        "Read the beginning of each story for the time, and the end of each story for the place.",
        "Only Karim's family is on a boat, so that choice fits just one story. Test each choice that is left against both stories."
      ],
      how: [
        "Mia's story: a hot afternoon on a beach.",
        "Karim's story: a hot afternoon on a boat on the Nile River.",
        "The answer is \"Both happen on a hot afternoon near water.\"",
        "Only Karim is on a boat, only Mia is on a beach, and neither story is cold or in the morning."
      ],
      why: "The answer is \"Both happen on a hot afternoon near water.\" Mia is at a beach and Karim is on a river, and both stories are on a hot afternoon. The boat fits only Karim's story, the beach only Mia's, and neither is cold or in the morning." },
    { id: "SK-TT1d-S03", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-C09", "SK-TT1d-P4"],
      stem: ["Story 1: In a town in Brazil, Lucas and his friend argue over a soccer ball. Lucas feels bad all night. The next day, he says he is sorry, and they play together again.", "Story 2: In a small town in Ireland, Nora snaps at her little sister for messing up her drawing. Later, Nora tells her she is sorry, and the two sisters draw a new picture together."],
      prompt: "What lesson do BOTH stories teach?",
      choices: [
        { text: "Saying sorry can help fix a hurt friendship.", correct: true },
        { text: "Soccer is more fun when you play with friends." },
        { text: "Sharing your things keeps people from getting upset." },
        { text: "It is best to stay away from people who argue." }
      ],
      clue: "A lesson for both stories must fit both characters. Say the lesson in words that would fit anyone.",
      hints: [
        "A lesson for both stories must fit both characters. Say the lesson in words that would fit anyone.",
        "In each story, notice how the two people get along at the start and how they get along at the end.",
        "Soccer is only in Lucas's story, so a lesson about soccer fits just one story. Test each choice that is left against both stories."
      ],
      how: [
        "Lucas argues with his friend, says he is sorry the next day, and they play together again.",
        "Nora snaps at her sister, says she is sorry, and they draw a new picture together.",
        "The answer is \"Saying sorry can help fix a hurt friendship.\"",
        "Soccer fits only Lucas's story. Sharing is not what fixes either story: the trouble is fixed when each one says sorry. Both characters go back to the person instead of staying away."
      ],
      misconception: "A common mix-up is choosing a lesson about a topic in only one of the stories.",
      why: "The answer is \"Saying sorry can help fix a hurt friendship.\" Lucas and Nora each say sorry, and each one is close again with the other person. Soccer fits only Lucas's story, sharing is not what fixes either story, and neither character stays away." },
    /* Batch SIM-1 (ENG-07): one extra question for each core item that had none left when a child works the
       fifteen in order. Each new `like` names the one core item it practises. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TT1d-S04", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-P5"],
      stem: ["Story 1: Otis left the cap off his marker. The next day, the marker was dry, and he could not color his map. After that, he always snapped the cap on.", "Story 2: Sia's grandmother showed her how to snap the cap on a marker so it will not dry out. Sia always did, and her markers lasted all year."],
      prompt: "How is the way Otis learns to cap his marker different from the way Sia learns?",
      choices: [
        { text: "Otis learns after something goes wrong, but Sia learns from advice.", correct: true },
        { text: "Otis learns from a book at school, but Sia learns from a friend." },
        { text: "Otis learns from his sister, but Sia learns by losing a marker." },
        { text: "Both of them learn by watching a classmate snap on a cap." }
      ],
      clue: "To compare how two characters learn, ask in each story what happens right before the character changes.",
      hints: [
        "To compare how two characters learn, ask in each story what happens right before the character changes.",
        "In each story, find the event that comes before the character always snaps the cap on.",
        "Neither story mentions a book or a classmate. Test each choice that is left against what happens in both stories."
      ],
      how: [
        "In Story 1, Otis finds a dry marker and cannot color his map. After that, he always snaps the cap on.",
        "In Story 2, Sia's grandmother shows her how to snap the cap on. Sia does it, and her markers last.",
        "The answer is \"Otis learns after something goes wrong, but Sia learns from advice.\"",
        "Neither story has a book, a sister or a classmate teaching the lesson, and Sia never loses a marker."
      ],
      misconception: "A common mix-up is mixing up the two stories. Check each choice against Story 1 and then against Story 2.",
      why: "The answer is \"Otis learns after something goes wrong, but Sia learns from advice.\" Otis finds his marker dry, and Sia's grandmother shows her what to do. Neither story has a book or a classmate teaching the lesson, and Sia never loses a marker." },
    { id: "SK-TT1d-S05", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.d"], passages: ["p9", "p10"],
      like: ["SK-TT1d-C04"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How is the time in the two stories different?",
        choices: [
          { text: "Lani's story lasts three weeks, but Cass's story happens in one afternoon.", correct: true },
          { text: "Lani's story happens in one morning, but Cass's story lasts a week." },
          { text: "Both stories last for a few weeks." },
          { text: "Lani's story happens at night, but Cass's story happens in the morning." }
        ] },
      partB: { prompt: "Which TWO sentences from \"Twenty-One Days\" give the best support for the answer to Part A?", pick: 2,
        choices: [
          { text: "\"Twenty-one days,\" she told her friends.", correct: true },
          { text: "On day twenty-one, a tiny crack ran across the biggest egg.", correct: true },
          { text: "The class turned the eggs three times a day." },
          { text: "Then came a peep!" },
          { text: "Lani drew a picture of the eggs each Friday." }
        ] },
      clue: "To compare the time in two stories, look for clues about how long each one lasts. Compare the clues.",
      hints: [
        "To compare the time in two stories, look for clues about how long each one lasts. Compare the clues.",
        "Find the time words in each story. Then choose two sentences for Part B.",
        "Cass's story has clock times like three o'clock and five o'clock, so it cannot last a week. For Part B, your sentences must match your Part A answer."
      ],
      how: [
        "In \"The Birthday Card Dash,\" the story starts at three o'clock and ends a little before five. It happens in one afternoon.",
        "In \"Twenty-One Days,\" the class waits twenty-one days for the eggs to hatch. That is three weeks.",
        "Part A: Lani's story lasts three weeks, but Cass's story happens in one afternoon. Part B: \"Twenty-one days,\" she told her friends. and On day twenty-one, a tiny crack ran across the biggest egg.",
        "Turning the eggs, drawing pictures and the peep do not tell how much time passes."
      ],
      misconception: "A common mix-up is choosing a sentence about what happens instead of one that tells how long it takes.",
      why: "Part A: Lani's story lasts three weeks, but Cass's story happens in one afternoon. Part B: \"Twenty-one days,\" she told her friends. and \"On day twenty-one, a tiny crack ran across the biggest egg.\" Both sentences count days. Turning eggs, drawing pictures and the peep do not tell how much time passes." },
    { id: "SK-TT1d-S06", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-C05"],
      stem: ["Story 1: Alma got a new box of colored pencils. When her friend Jo asked to borrow one, Alma said no. \"They're all mine,\" she said.", "Story 2: Quinn had an old glove that his dad used as a boy. When his cousin asked to try it on, Quinn said no. \"It's too special,\" he said."],
      prompt: "Alma will not share her pencils, and Quinn will not share his glove. How is what Alma keeps different from what Quinn keeps?",
      choices: [
        { text: "Alma keeps something new, but Quinn keeps something old that is special.", correct: true },
        { text: "Alma keeps food that will spoil, but Quinn keeps a toy that will break." },
        { text: "Alma's pencils were a gift from Jo, but Quinn's glove was a gift from his cousin." },
        { text: "Both of them keep something that belongs to someone else." }
      ],
      clue: "To compare what two characters keep, look at what each thing is like and where it came from.",
      hints: [
        "To compare what two characters keep, look at what each thing is like and where it came from.",
        "Read each story again. What does the story say about the pencils, and what does it say about the glove?",
        "Neither story mentions food or a toy. Test each choice that is left against both stories."
      ],
      how: [
        "Alma's pencils came in a new box, so they are brand new.",
        "Quinn's glove is old. His dad used it as a boy, and Quinn calls it special.",
        "The answer is \"Alma keeps something new, but Quinn keeps something old that is special.\"",
        "Neither story has food or a toy, neither thing was a gift from Jo or the cousin, and each child keeps something of their own."
      ],
      misconception: "A common mix-up is choosing a detail that sounds true for one story but is not in either one. Check the story.",
      why: "The answer is \"Alma keeps something new, but Quinn keeps something old that is special.\" Alma's pencils are in a new box, and Quinn's glove is old and was his dad's. Neither story has food or a toy, neither was a gift from the one who asked, and each keeps something of their own." },
    { id: "SK-TT1d-S07", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.d"], passages: ["p11", "p12"],
      like: ["SK-TT1d-C07"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What do Linh and Noa have in common?",
        choices: [
          { text: "Both girls hope to take a bigger part in the holiday next year.", correct: true },
          { text: "Both girls learn about the holiday from their grandfathers." },
          { text: "Both girls share a special food with their families." },
          { text: "Both girls carry a light through the street." }
        ] },
      partB: { prompt: "Choose the TWO sentences, one from each story, that show the answer to Part A.", pick: 2,
        choices: [
          { text: "\"Next year,\" Linh said, \"I will tell my little cousin why we carry lanterns.\"", correct: true },
          { text: "\"Next year,\" Noa said, \"I will light the first candle by myself.\"", correct: true },
          { text: "Back home, the family shared mooncakes on the balcony." },
          { text: "Neighbors walking past slowed down to look at the warm light." },
          { text: "Candles glowed inside lanterns all around her." }
        ] },
      clue: "To find how two characters are alike, look for something that both of them do or feel. Then use the answer to find the sentences.",
      hints: [
        "To find how two characters are alike, look for something that both of them do or feel. Then use the answer to find the sentences.",
        "Read the last three sentences of each story. What do the two girls have in common?",
        "Only Linh learns about the holiday from her grandfather. For Part B, choose one sentence from each story that matches your Part A answer."
      ],
      how: [
        "Linh's story ends with her saying what she will do next year: tell her little cousin why people carry lanterns.",
        "Noa's story ends with her saying she will light the first candle by herself next year.",
        "Part A: Both girls hope to take a bigger part in the holiday next year. Part B: Linh's \"Next year\" sentence and Noa's \"Next year\" sentence.",
        "The mooncakes, the neighbors and the glowing candles are things that happen, not plans for next year."
      ],
      misconception: "A common mix-up is choosing a detail true for one story, like carrying a light. The answer must be true for both girls.",
      why: "Part A: Both girls hope to take a bigger part in the holiday next year. Part B: \"Next year,\" Linh said, \"I will tell my little cousin why we carry lanterns.\" and \"Next year,\" Noa said, \"I will light the first candle by myself.\" Only Linh learns about the holiday from her grandfather, only Linh shares a special food, and only Linh carries a light through the street." },
    { id: "SK-TT1d-S08", type: "match", points: 2, dok: 2, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-C08"],
      stem: ["Story 1: In Mexico, Dani and his grandpa made paper flowers. Dani cut the petals. His grandpa twisted the stems. They set the flowers by a photo of Dani's great-grandma.", "Story 2: In Sweden, Elsa and her grandma made straw stars. Elsa twisted the straw. Her grandma tied on red ribbon. They hung the stars on the tree."],
      prompt: "Match each detail to the story it is true for. Some details are true for both stories.",
      cols: ["Story 1", "Story 2", "Both stories"],
      rows: [
        { text: "A child and a grandparent make decorations together.", answer: 2 },
        { text: "The decorations are made of straw.", answer: 1 },
        { text: "A photo of a family member is part of the activity.", answer: 0 },
        { text: "The finished decorations end up in the family's home.", answer: 2 }
      ],
      clue: "To sort details, check each one against Story 1, then against Story 2. If it is true for both, choose both.",
      hints: [
        "To sort details, check each one against Story 1, then against Story 2. If it is true for both, choose both.",
        "For each detail, find the matching words in the stories. Ask whether you can find them in one story or in both.",
        "Elsa's ornaments are straw. Check the other three details against both stories the same way."
      ],
      how: [
        "A child and a grandparent make decorations in both stories, so that is true for both.",
        "Only Elsa and her grandmother braid straw, so that detail belongs to Story 2.",
        "Only Dani's story mentions a photo, so that belongs to Story 1.",
        "Dani sets the flowers beside a photo, and Elsa hangs the ornaments on the tree. Each family keeps the finished decorations in the home, so that is both."
      ],
      misconception: "A common mix-up is picking one story when the detail fits both. Check each detail against both stories.",
      why: "Making decorations with a grandparent is true for both stories. Straw ornaments belong to Story 2. The photo belongs to Story 1. Each family keeps the finished decorations in the home, so that is true for both." },
    { id: "SK-TT1d-S09", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-C09"],
      stem: ["Story 1: In a town in Japan, Sora planted a persimmon seed. For years, she watered it every week. At last, small orange fruit hung from the branches.", "Story 2: In a town in Italy, Luca set bread dough by the warm stove. He wanted to bake it right away, but he waited for it to rise. The loaf came out light and tall."],
      prompt: "What message do the two stories share?",
      choices: [
        { text: "Waiting patiently can lead to something good.", correct: true },
        { text: "Fruit and bread are the best foods to share." },
        { text: "It is best to do every job as fast as you can." },
        { text: "A plant grows better than bread dough." }
      ],
      clue: "To find a message two stories share, ask what each main character does and what happens because of it.",
      hints: [
        "To find a message two stories share, ask what each main character does and what happens because of it.",
        "Compare what Sora does for years with what Luca does by the stove. What do the two have in common?",
        "Neither story says that fruit or bread is the best food. Test each choice that is left against both stories."
      ],
      how: [
        "Sora waters her seed for years before the fruit appears.",
        "Luca wants to bake right away, but he waits, and the loaf is light and tall.",
        "Both children wait, and both get a good result. The answer is \"Waiting patiently can lead to something good.\"",
        "Neither story says fruit or bread is best, and neither child hurries."
      ],
      misconception: "A common mix-up is choosing a message about one detail, like food. A shared message fits what both characters do.",
      why: "The answer is \"Waiting patiently can lead to something good.\" Sora waits years for fruit, and Luca waits for his dough to rise. Neither story says fruit or bread is best, neither child rushes, and the stories do not compare plants with dough." },
    { id: "SK-TT1d-S10", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.d"], passages: ["p11", "p12"],
      like: ["SK-TT1d-C10"],
      prompt: "How is the light in Noa's story different from the light in Linh's story?",
      choices: [
        { text: "Noa's light stays in one window, but Linh's light moves down the street.", correct: true },
        { text: "Noa's light is made by electricity, but Linh's light is made by fire." },
        { text: "Noa's light lasts one night, but Linh's light lasts eight nights." },
        { text: "Noa's light is out on the street, but Linh's light is in a window." }
      ],
      clue: "To compare one detail in two stories, find what each story says about that detail. Then look for the way they differ.",
      hints: [
        "To compare one detail in two stories, find what each story says about that detail. Then look for the way they differ.",
        "Find where each girl's light is and what happens to it.",
        "Neither story has electric lights, so that choice has no support. Test each choice that is left against both stories."
      ],
      how: [
        "In Linh's story, she carries a lantern down the street, and other lanterns glow all around her.",
        "In Noa's story, the menorah is set in the front window, and neighbors see its light as they walk past.",
        "The answer is \"Noa's light stays in one window, but Linh's light moves down the street.\"",
        "Both lights come from candles, Noa's candles are added one at a time over eight nights while Linh's night is a single festival night, and Noa's light is in the window, not out on the street."
      ],
      misconception: "A common mix-up is switching the two stories. Check where each girl's light is.",
      why: "The answer is \"Noa's light stays in one window, but Linh's light moves down the street.\" Linh carries her lantern along the street, and Noa's menorah sits in the front window. Both lights come from candles, and the places are not reversed." },
    { id: "SK-TT1d-S11", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-C11"],
      stem: ["Story 1: Greta pulled her sled up the long hill. The ground was white, and her mittens were stiff with frost.", "Story 2: Paulo carried his kite across the sand. The sun was hot on his shoulders, and the waves were calm."],
      prompt: "Complete the sentences about the settings. Choose the best answer for each blank.",
      text: "Story 1 happens {0}. Story 2 happens {1}.",
      slots: [
        { options: ["in a cold, snowy place", "in a hot, sandy place", "in a busy city in the rain"], answer: 0 },
        { options: ["in a cold, snowy place", "in a hot, sandy place", "in a quiet forest in the fall"], answer: 1 }
      ],
      clue: "A setting is where and when a story happens. Use the details about the ground and the weather to work out the kind of place.",
      hints: [
        "A setting is where and when a story happens. Use the details about the ground and the weather to work out the kind of place.",
        "Find the words about the ground and the weather in each story.",
        "Neither story is set in a city or a forest. Match each story to the choices that are left."
      ],
      how: [
        "Story 1 has a white ground, a sled, and mittens stiff with frost. That is a cold, snowy place.",
        "Story 2 has sand, a hot sun, and calm waves. That is a hot, sandy place.",
        "The answers are in a cold, snowy place and in a hot, sandy place.",
        "There is no city or forest in either story."
      ],
      misconception: "A common mix-up is matching the settings to the wrong stories. Check the details in each story.",
      why: "The answers are in a cold, snowy place and in a hot, sandy place. Greta's story has a white ground, a sled and frosty mittens, and Paulo's story has sand, a hot sun and calm waves. Neither story is set in a city or a forest." },
    { id: "SK-TT1d-S12", type: "hottext", points: 2, dok: 2, std: ["3.T.T.1.d"], passages: [], pick: 2,
      like: ["SK-TT1d-C12"],
      stem: ["Here are sentences from two stories about children who mend things. Hoang is on a fishing boat in Vietnam. Ruth is on a farm in Nebraska."],
      prompt: "Choose ONE sentence from each story that shows the main character working carefully. Choose two sentences.",
      options: [
        "Hoang pulled the torn net onto his lap.",
        "Hoang wove each new knot slowly, one loop at a time.",
        "The boat rocked gently on the warm water.",
        "When Hoang finished, the net was strong.",
        "Ruth walked along the fence with a hammer and a bag of nails.",
        "Ruth checked each nail twice before she hit it with the hammer.",
        "The cows watched from the far side of the field.",
        "By sunset, the fence stood straight again."
      ],
      answer: [1, 5],
      clue: "Working carefully means going step by step and not rushing. Look for words that show how the character works.",
      hints: [
        "Working carefully means going step by step and not rushing. Look for words that show how the character works.",
        "Look for words that show how fast or how carefully each character works. Choose one sentence for Hoang and one for Ruth.",
        "The sentences about the boat and the cows tell about the setting, not about how the character works. Check each sentence that is left for each story."
      ],
      how: [
        "Hoang's story: pulling the net onto his lap only starts the job, and the net being strong tells the result. Weaving each knot slowly, one loop at a time, shows care.",
        "Ruth's story: walking with a hammer starts the job, and the fence standing straight is the result. Checking each nail twice shows care.",
        "The answers are \"Hoang wove each new knot slowly, one loop at a time.\" and \"Ruth checked each nail twice before she hit it with the hammer.\"",
        "The boat rocking and the cows watching are about the setting."
      ],
      misconception: "A common mix-up is choosing a sentence about the result. A finished job does not show how it was done.",
      why: "The answers are \"Hoang wove each new knot slowly, one loop at a time.\" and \"Ruth checked each nail twice before she hit it with the hammer.\" Both show care in how the work is done. Starting the job, the results and the setting sentences do not show careful work." },
    { id: "SK-TT1d-S13", type: "ms", points: 2, dok: 3, std: ["3.T.T.1.d"], passages: [], pick: 2,
      like: ["SK-TT1d-C13"],
      stem: ["Story 1: In Peru, Rosa helps her aunt sell potatoes at a market. She weighs each bag and calls out the price.", "Story 2: In Thailand, Noi helps her father sell fruit from a boat. She hands up the fruit to buyers on the bridge every morning.", "Story 3: In Poland, Piotr helps his grandmother sell honey at a stall. He stacks the jars and counts the coins."],
      prompt: "Think about all three stories. Which TWO sentences are true about ALL THREE stories?",
      choices: [
        { text: "A child helps a family member sell food.", correct: true },
        { text: "The selling happens at a place where people come to buy and sell.", correct: true },
        { text: "A child sells food from a boat." },
        { text: "The market is open only on the weekend." },
        { text: "A child counts coins." }
      ],
      clue: "To find what is true about three stories, check one sentence at a time against each story. It must be true for all three.",
      hints: [
        "To find what is true about three stories, check one sentence at a time against each story. It must be true for all three.",
        "Check each sentence against Story 1, then Story 2, then Story 3. Choose two.",
        "Only Noi is on a boat. Check each sentence that is left against all three stories."
      ],
      how: [
        "Rosa helps her aunt, Noi helps her father, and Piotr helps his grandmother. Each child helps a family member sell food.",
        "A market, a boat that sells to buyers on a bridge, and a stall are all places where people come to buy and sell.",
        "The answers are \"A child helps a family member sell food.\" and \"The selling happens at a place where people come to buy and sell.\"",
        "Only Noi is on a boat, Noi sells every morning, and only Piotr counts coins."
      ],
      misconception: "A common mix-up is choosing a sentence that is true for only one or two of the three stories.",
      why: "The answers are \"A child helps a family member sell food.\" and \"The selling happens at a place where people come to buy and sell.\" Both are true for all three stories. Only Noi is on a boat, Noi sells every morning, and only Piotr counts coins." },
    { id: "SK-TT1d-S14", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.d"], passages: [],
      like: ["SK-TT1d-C14"],
      stem: ["Story 1: In a town in Egypt, Salma's neighbor fixed her bike chain. The next day, she baked him a small cake to say thank you. He smiled all day.", "Story 2: In a city in Canada, Owen was late, and the bus driver waited for him. The next day, Owen brought her a drawing. She hung it by her mirror."],
      prompt: "Which new story teaches the same lesson as BOTH stories above?",
      choices: [
        { text: "A teacher helps Maya with math, and Maya leaves her a thank-you note.", correct: true },
        { text: "A neighbor helps Jay carry his bike, but Jay walks away without a word." },
        { text: "Lena thanks her friend for telling a funny joke at lunch." },
        { text: "Omar's dog learns a new trick and gets a treat for it." }
      ],
      clue: "To find a new story with the same lesson, first say the lesson of the two stories. Then look for a story where a character acts the same way.",
      hints: [
        "To find a new story with the same lesson, first say the lesson of the two stories. Then look for a story where a character acts the same way.",
        "In each story, ask what the child does the day after getting help. Then compare that action with the new stories.",
        "A joke is not help, so thanking someone for it is not the same lesson. Test each choice that is left."
      ],
      how: [
        "In both stories, a grown-up helps a child, and the child thanks the helper the next day with a gift. The lesson is that thanking people who help you matters.",
        "In the new stories, only one has someone helping a child and the child thanking the helper.",
        "The answer is \"A teacher helps Maya with math, and Maya leaves her a thank-you note.\"",
        "Jay does not thank his helper, Lena thanks a friend for a joke and not for help, and Omar's dog gets a treat but no child thanks a helper."
      ],
      misconception: "A common mix-up is choosing a story with a similar topic or a happy ending. The lesson has to match.",
      why: "The answer is \"A teacher helps Maya with math, and Maya leaves her a thank-you note.\" Like Salma and Owen, Maya thanks someone who helped her. Jay does not thank the neighbor who helped him, Lena thanks a friend for a joke and not for help, and a treat for a dog is not a child thanking a helper." },
    { id: "SK-TT1d-S15", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.d"], passages: ["p13", "p14"],
      like: ["SK-TT1d-C15"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the biggest difference between how Sophea's family lives and how Pieter's family lives?",
        choices: [
          { text: "Sophea's family lives on a house that floats, but Pieter's family lives on firm land.", correct: true },
          { text: "Sophea's family lives beside a wall that keeps water out, but Pieter's family lives beside the open lake." },
          { text: "Sophea's family moves to a new lake each year, but Pieter's family stays put." },
          { text: "Sophea's family has no school nearby, but Pieter's family has one." }
        ] },
      partB: { prompt: "Which sentence from \"House on the Lake\" best supports the answer to Part A?",
        choices: [
          { text: "\"When the rains came, the lake rose, and her house rose with it.\"", correct: true },
          { text: "\"Each morning, she paddled a small wooden canoe across the water to class.\"" },
          { text: "\"Sophea's school was a boat.\"" },
          { text: "\"Her mother kept a pot of herbs on the porch and hung fish to dry on a line.\"" }
        ] },
      clue: "To compare ways of life, ask where each family lives and how their home is different. Find the details in each story.",
      hints: [
        "To compare ways of life, ask where each family lives and how their home is different. Find the details in each story.",
        "Find the sentences in each story that tell about the family's home. Then pick a sentence for Part B that shows the difference.",
        "The wall belongs to Pieter's town, not to Sophea's lake, so one choice has the details swapped. For Part B, your sentence must show the difference in your Part A answer."
      ],
      how: [
        "In \"House on the Lake,\" Sophea's house floats on the water and rises and sinks with the lake.",
        "In \"Behind the Dike,\" Pieter's house stands on solid ground and never moves.",
        "Part A: Sophea's family lives on a house that floats, but Pieter's family lives on firm land. Part B: \"When the rains came, the lake rose, and her house rose with it.\"",
        "The wall belongs to Pieter's town, not to Sophea's, neither family moves each year, and both children get to school."
      ],
      misconception: "A common mix-up is choosing a detail about daily life, like school, instead of how the homes are different.",
      why: "Part A: Sophea's family lives on a house that floats, but Pieter's family lives on firm land. Part B: \"When the rains came, the lake rose, and her house rose with it.\" The floating house moves with the water, and Pieter's house never moves. The wall belongs to Pieter's town, not to Sophea's, neither family moves each year, and both children get to school." }
  ],
  /* Hints and Show me how for the items kept in practice: refs P4 and P5 (core set 1) and Together P1-P3. */
  addons: {
    "SK-TT1d-P1": {
      hints: [
        "To compare, find what each main character does at the start. Then check that your answer is true for both stories.",
        "Read what Kofi says in paragraph 2 of his story and what Lucy says in paragraph 2 of hers.",
        "Only Lucy's story has cold weather, so that choice is true for just one story. Test each choice that is left against both stories."
      ],
      how: [
        "When the children ask for a mango, Kofi says, \"They are all mine.\"",
        "When Sofia asks for a turn, Lucy says she wants the sled all to herself.",
        "The answer is \"They both refuse to share something they have.\"",
        "Only Lucy's story is cold, neither one is a new kid, and neither asks friends for help with a job."
      ] },
    "SK-TT1d-P2": {
      hints: [
        "A setting is where and when a story happens. Find the place and the weather or season in each story.",
        "Read the first paragraph of each story.",
        "Neither story happens in a big city, so the choice about a city does not fit. Test each choice that is left against both first paragraphs."
      ],
      how: [
        "Kofi's story happens in a village in Ghana in the hot season.",
        "Lucy's story happens on Pine Hill in Vermont after the first big snow.",
        "The answer is \"Kofi's story is in a hot village, and Lucy's is on a snowy hill.\"",
        "Neither story is in a big city, at a school, on a beach or in a pine forest."
      ] },
    "SK-TT1d-P3": {
      hints: [
        "For each detail, check the first story, then the second. If it happens in both, it goes in Both stories.",
        "Read the start and the end of each story. A detail may be true for both.",
        "Ama brings Kofi soup, but no one brings Lucy food, so that detail belongs to one story. Sort the other details the same way."
      ],
      how: [
        "Ama brings Kofi a bowl of warm groundnut soup, so the soup belongs to Kofi's story.",
        "Snow covers Pine Hill only in Lucy's story. Kofi's story is in the hot season.",
        "Children ask Kofi for a mango, and Sofia asks Lucy for a turn, so someone asks in both stories.",
        "Both main characters decide to share, so that detail goes in Both stories, too."
      ] },
    "SK-TT1d-P4": {
      hints: [
        "A lesson for both stories must fit Kofi AND Lucy. Ask what each main character learns, then check it against both stories.",
        "Find the moment each main character changes their mind. Choose one sentence from each story for Part B.",
        "Eating too much fruit never makes anyone sick in Kofi's story, so that choice does not fit Part A. In Part B, \"Lucy held the rope tight\" happens before Lucy changes, so it cannot show what her change taught."
      ],
      how: [
        "At the end of Kofi's story, sharing his mangoes fills his days with friends.",
        "At the end of Lucy's story, it is the best ride of the day.",
        "Part A: Sharing with others can make life better. Part B: \"Sharing his mangoes had filled his days with friends.\" and \"It was the best ride of the day.\"",
        "Keeping new things clean and getting sick fit only one story or neither. Two sentences come at the turning point, \"The next morning, he filled a basket and carried it down the road\" and \"Lucy pulled the sled over to her friends,\" but neither one tells how things turned out afterward. Both characters start out keeping their things for themselves, and that makes them unhappy, so that lesson is backward."
      ],
      misconception: "A common mix-up is choosing a lesson that fits only one story. Check it against both." },
    "SK-TT1d-P5": {
      hints: [
        "Find what goes wrong for each character just before they change their mind. Check each part of a choice against the story.",
        "Read paragraph 3 and the start of paragraph 4 of \"Kofi's Mangoes,\" and paragraph 3 of \"The Red Sled.\"",
        "Ben is Lucy's friend, not her brother, so that choice has a mistake in it. Test each choice that is left against both stories."
      ],
      how: [
        "Kofi has too many mangoes. They rot on the ground, and he frowns at the rotten fruit.",
        "Lucy rides alone again and again, with no one to cheer or race, and sledding stops being fun.",
        "The answer is \"Kofi sees his fruit go to waste, but Lucy finds that sledding alone is no fun.\"",
        "No parent explains a lesson, nobody reads a book, and no one gets sick or hurt."
      ],
      misconception: "A common mix-up is accepting a choice when only one half of it is true. Check both halves." }
  },
  test: [
    { id: "SK-TT1d-T1", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "How are Grandfather in \"The Smallest Cousin\" and Ms. Devi in \"Ravi and the Kingfisher\" alike?",
      choices: [
        { text: "Each one praises the main character near the end.", correct: true },
        { text: "Each one teases the main character at the start." },
        { text: "Each one loses a treasure that is hard to reach." },
        { text: "Each one takes a group of children on a trip." }
      ],
      clue: "Find the grown-up in each story. Read what each one says in the last part of the story, and check that your answer is true for BOTH grown-ups.",
      why: "The answer is \"Each one praises the main character near the end.\" Grandfather says Mateo's small size saved his treasure, and Ms. Devi tells Ravi he is a great bird watcher. The cousins and the other kids are the ones who tease or question, not the grown-ups. Only Grandfather loses a treasure, and only Ms. Devi takes the class on a trip." },
    { id: "SK-TT1d-T2", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "Which sentence tells how the place in \"The Smallest Cousin\" is different from the place in \"Ravi and the Kingfisher\"?",
      choices: [
        { text: "Mateo's story is at his family's home in Mexico, and Ravi's is at a bird park in India.", correct: true },
        { text: "Mateo's story is at a bird park in Mexico, and Ravi's is at his family's home in India." },
        { text: "Mateo's story is on a sandy beach in India, and Ravi's is at a school in Mexico." },
        { text: "Mateo's story is in a busy classroom, and Ravi's is in a family's courtyard." }
      ],
      clue: "Look at the first paragraph of each story to find the country. Then find where the most important part of each story happens.",
      why: "The answer is \"Mateo's story is at his family's home in Mexico, and Ravi's is at a bird park in India.\" Mateo lives in Oaxaca, Mexico, and the ring is lost in the family's courtyard. Ravi lives in Chennai, India, and his class takes a trip to a bird park by a lake, where the important part happens. The other choices mix up the places or name places that are not in the stories." },
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
          { text: "\"Mateo felt proud of being just the size he was.\"", correct: true },
          { text: "\"For the first time, he was glad to be the quiet one.\"", correct: true },
          { text: "\"His big cousins liked to tease him.\"" },
          { text: "\"They pushed and pulled, but their hands were too wide.\"" },
          { text: "\"Every time they came close, the birds flew away.\"" }
        ] },
      clue: "Look at how each main character feels about himself at the very end. A lesson for both stories must fit Mateo AND Ravi.",
      why: "Part A: What makes you different can also make you special. Part B: \"Mateo felt proud of being just the size he was.\" and \"For the first time, he was glad to be the quiet one.\" Both characters end up glad about the very thing that made them different. The teasing and the birds flying away happen before the characters learn the lesson." },
    { id: "SK-TT1d-T4", type: "match", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Match each detail to the story it is true for. Some details are true for both stories.",
      cols: ["Mateo's story", "Ravi's story", "Both stories"],
      rows: [
        { text: "The main character finds something that was lost.", answer: 0 },
        { text: "Staying still and silent helps the main character.", answer: 1 },
        { text: "Others point out how the main character is different.", answer: 2 },
        { text: "By the end, the main character feels good about himself.", answer: 2 }
      ],
      clue: "For each detail, check the first story, then the second. If it happens in both, it goes in Both stories.",
      why: "Only Mateo finds something that was lost: Grandfather's ring. Only Ravi is helped by staying still and silent. In both stories, others point out the difference (\"too tiny\" and \"Why don't you ever talk?\"), and both characters feel good about themselves at the end." },
    { id: "SK-TT1d-T5", type: "mc", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "How is the problem in Mateo's story different from the problem in Ravi's story?",
      choices: [
        { text: "In Mateo's story, a treasure is stuck, but in Ravi's, the birds keep flying away.", correct: true },
        { text: "In Mateo's story, Mateo gets lost, but in Ravi's, Ravi cannot find his teacher." },
        { text: "In Mateo's story, the cousins are hungry, but in Ravi's, the class misses the bus." },
        { text: "In Mateo's story, a storm is coming, but in Ravi's, Arjun falls into the lake." }
      ],
      clue: "Find what goes wrong in the middle of each story. Then check both halves of each choice against the stories.",
      why: "The answer is \"In Mateo's story, a treasure is stuck, but in Ravi's, the birds keep flying away.\" Grandfather's ring is stuck in a crack, and the noisy children scare the birds away. None of the other problems happen in either story." }
  ]
});
PP.addLesson({
  code: "3.T.T.1.e",
  title: "Write a story: beginnings, dialogue, details and endings",
  teach: {
    big: "A good story has characters, a problem, events told in order, details that help the reader picture it, and an ending that wraps it up.",
    points: [
      "Start strong. Tell who the story is about and where it happens, show what the problem is, and make the reader want to keep reading.",
      "Tell the events in order. Time words like first, then, after that and finally help the reader follow along. Every sentence should belong to the story, so take out a sentence that wanders off to another topic.",
      "Use dialogue to show what characters feel and want. Put the exact words a character says inside quotation marks.",
      "Add details about what characters see, hear and feel. Show what is happening instead of just telling it.",
      "End by showing how the problem gets solved and how the character feels or what they learned."
    ],
    words: [
      { term: "narrative", means: "a story, real or made up" },
      { term: "dialogue", means: "the words characters say out loud" },
      { term: "time words", means: "words like first, next and finally that show the order of events" },
      { term: "ending", means: "the part that wraps up the story's problem" },
      { term: "setting", means: "when and where the story happens" },
      { term: "problem", means: "what goes wrong in a story, or what a character needs to fix" }
    ],
    example: {
      label: "Telling vs. showing",
      lines: [
        "Telling: Nia was scared of the dog.",
        "Showing: Nia froze. The big dog barked, and her knees began to shake."
      ],
      note: "The showing version uses actions and sounds, so the reader can feel how scared Nia is without being told."
    },
    tip: "On the Milestones, you may read a student's story draft and choose the best sentence to add: a better beginning, a line of dialogue, a detail or an ending. You may also put sentences in order or take out a sentence that does not belong. Pick the one that fits the characters and the events already in the draft."
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
        "My uncle drives a blue truck.",
        "First, Mia cracked two eggs into a bowl.",
        "Finally, the pancakes sizzled in the hot pan."
      ],
      ask: "Which sentence does not belong, and what order should the rest go in?",
      steps: [
        "Read every sentence and ask if it helps tell about the pancakes. The sentence about the truck wanders off, so take it out.",
        "Look for time words in the rest: First, Then and Finally.",
        "First comes at the start and Finally comes at the end, so Then goes in the middle.",
        "Check that it makes sense: you crack eggs, then stir the batter, then cook it."
      ],
      answer: "Take out \"My uncle drives a blue truck.\" The rest go: First, Mia cracked two eggs into a bowl. Then she stirred the batter until it was smooth. Finally, the pancakes sizzled in the hot pan."
    },
    {
      show: ["Plain beginning: This story is about Carlos and his dog, Max, at the park."],
      ask: "What line of dialogue could begin the story and show how Carlos feels?",
      steps: [
        "A beginning should put the character in a moment. Picture Max slipping out of his collar and running off.",
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
      ] },
    /* B4-b4a passages begin */
    { id: "p3", draft: true, title: "The Recorder Concert", byline: "Imani's first draft", genre: "Student draft (story)",
      paragraphs: [
        ["(1) On Thursday night, our whole third-grade class played recorders at the school concert in the gym.", "(2) I had practiced my song every afternoon for two weeks, even on the weekend.", "(3) I was nervous."],
        ["(4) Ms. Ellis raised her hands, and all twenty of us began to play together.", "(5) Halfway through, my fingers slipped, and a loud squeak filled the gym.", "(6) My brother plays the drums in the school band.", "(7) A few kids in the front row giggled and covered their mouths."],
        ["(8) I took a deep breath and kept playing.", "(9) I finished the song with no more squeaks.", "(10) The end."]
      ] },
    { id: "p4", draft: true, title: "Scavenger Hunt at the Park", byline: "Darius's first draft", genre: "Student draft (story)",
      paragraphs: [
        ["(1) This story is about a scavenger hunt at the park."],
        ["(2) My team's list had four things to find: a pinecone, a red leaf, a smooth rock, and a feather.", "(3) We found the pinecone under a pine tree.", "(4) Red leaves drifted down from the maples like confetti, so the leaf was easy.", "(5) The rock felt cool and smooth, like a river stone."],
        ["(6) Soon only the feather was left on our list.", "(7) We searched the playground, the pond, and the picnic tables.", "(8) \"Where could a feather be?\" Maya groaned.", "(9) Then I saw a blue jay feather stuck on a branch, just out of reach."],
        ["(10) We checked off the last thing on our list and ran back to the starting line."]
      ] },
    { id: "p5", draft: true, title: "The Broken Shoelace", byline: "Leo's first draft", genre: "Student draft (story)",
      paragraphs: [
        ["(1) Leo tied his shoes tight before the relay race on Field Day.", "(2) His team had practiced passing the baton every afternoon for two whole weeks.", "(3) Just before the whistle, his left shoelace snapped in two."],
        ["(4) Leo frowned and looked down at his shoe.", "(5) The other runners were already stepping up to the starting line.", "(6) His coach, Ms. Bell, knelt down beside him.", "(7) \"Tie the pieces together in a tight knot,\" she said.", "(8) Leo tied the knot, pulled it snug, and hurried to the line.", "(9) The starter raised her flag, and Leo crouched with the baton in his hand."]
      ] }
    /* B4-b4a passages end */
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
  /* ---------- B4-b4a begin ---------- */
  /* ---------- B4 (expansion 2026-10-22, author b4a; docs/expansion-2026-10-22/01-architecture.md 2.2-2.3) ----------
     Selected-response core (the Milestones assesses this standard through revise/edit items). The write task stays
     OUTSIDE the fifteen: it is adult-scored and never awards a pass. Set 1 reuses P4, P5 and P6 by { ref } on Andre's
     draft (p1) plus two new items; set 2 uses p3 (school); set 3 uses p4 (community) plus a family stem and p5 (sports).
     Practice Together is P1-P3. Hints and Show me how for P1-P6 are in addons below.
     Author log: docs/expansion-2026-10-22/batches/B4-b4a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT1e-P5" },
      { ref: "SK-TT1e-P4" },
      { id: "SK-TT1e-C03", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: ["p1"],
        prompt: "Andre wants sentence 5 to show his exact words. Which version of sentence 5 does that best?",
        choices: [
          { text: "My heart pounded, and I yelled, \"Bree, come quick! Peanut is gone!\"", correct: true },
          { text: "My heart pounded, and I yelled for Bree to come quick because Peanut was gone." },
          { text: "My heart pounded, and I yelled, Bree, come quick! Peanut is gone!" },
          { text: "My heart pounded, and I yelled, \"I like my big sister a lot!\"" }
        ],
        clue: "Dialogue is the exact words a character says, set inside quotation marks. The words also have to fit what is happening.",
        hints: [
          "Dialogue is the exact words a character says, set inside quotation marks. The words also have to fit what is happening.",
          "Look at what has just happened in sentences 3 and 4, and think about who Andre is calling. Then check how each choice shows the words he says.",
          "Writing that only tells what someone said, without the exact words, is not dialogue. Look at the choices that are left."
        ],
        how: [
          "Sentence 5 is where Andre calls for help, so his exact words belong right there.",
          "Exact words go inside quotation marks, and they fit the moment: he has just found the empty cage and he needs his sister.",
          "The answer is: My heart pounded, and I yelled, \"Bree, come quick! Peanut is gone!\"",
          "Telling that he yelled for Bree does not show his exact words. The version with no quotation marks does not show where his words start and stop. \"I like my big sister a lot!\" does not fit the moment."
        ],
        misconception: "A common mix-up is thinking dialogue only needs the right words. The quotation marks show the reader exactly what was said.",
        why: "The answer is: My heart pounded, and I yelled, \"Bree, come quick! Peanut is gone!\" It shows Andre's exact words inside quotation marks, and they fit the moment. One version only tells what he said, one has no quotation marks, and one has words that do not fit the moment." },
      { id: "SK-TT1e-C04", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: [],
        stem: [
          "Zora is writing a story about the first time she rode the school bus alone. Her first sentence is: \"This story is about the first time I rode the school bus.\""
        ],
        prompt: "Which sentence should replace Zora's first sentence to make a better beginning?",
        choices: [
          { text: "The bus door squeaked open, and I climbed the steps alone for the very first time.", correct: true },
          { text: "A school bus is a big yellow vehicle that takes children to school each day." },
          { text: "Riding the bus was a lot of fun, and I liked it very much." },
          { text: "The ride from my house to school takes about twenty minutes in the morning." }
        ],
        clue: "A strong beginning tells who the story is about and where it happens, and it makes the reader want to keep reading.",
        hints: [
          "A strong beginning tells who the story is about and where it happens, and it makes the reader want to keep reading.",
          "Imagine you are a reader who has just opened this story. Which choice would make you ask a question or want to read on?",
          "A sentence that only tells what a school bus is could begin any story or report about buses. Look at the choices that are left."
        ],
        how: [
          "A good beginning puts a character in a place and starts the action.",
          "\"The bus door squeaked open, and I climbed the steps alone for the very first time\" has a character, a place, a sound and a first-time moment that makes the reader curious.",
          "The answer is: The bus door squeaked open, and I climbed the steps alone for the very first time.",
          "The sentence about what a bus is gives a fact, \"Riding the bus was a lot of fun\" gives away how it turns out, and the twenty-minute ride is a fact that does not start the story."
        ],
        misconception: "A common mix-up is choosing a sentence that explains the topic. In a story, the beginning starts the action.",
        why: "The answer is: The bus door squeaked open, and I climbed the steps alone for the very first time. It shows a character in a place at the start of the action. The other sentences give facts or tell how the story turns out, so they do not start the story." },
      { ref: "SK-TT1e-P6" }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT1e-C06", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: ["p3"],
        prompt: "Sentence 3 only tells how Imani feels. Which sentence should replace it to show that she is nervous?",
        choices: [
          { text: "My hands felt cold, and my knees shook as I walked to my chair.", correct: true },
          { text: "I walked to my chair with a big smile and waved to my mom." },
          { text: "I was extremely, totally, completely nervous about the concert." },
          { text: "The gym had bright lights and rows of folding chairs." }
        ],
        clue: "Showing a feeling means writing what the character does, feels in her body or notices, so the reader can figure out the feeling.",
        hints: [
          "Showing a feeling means writing what the character does, feels in her body or notices, so the reader can figure out the feeling.",
          "Reread sentences 1 to 3, and think about what Imani is about to do. Then ask what each choice shows about her.",
          "Adding stronger words, like extremely, still just tells the feeling. Look at the choices that are left."
        ],
        how: [
          "Telling names the feeling, like nervous. Showing uses an action or a body clue.",
          "Cold hands and shaking knees are body clues that someone is nervous, and the sentence fits the moment before the concert.",
          "The answer is: My hands felt cold, and my knees shook as I walked to my chair.",
          "A big smile and a wave show a happy feeling, \"extremely, totally, completely nervous\" still tells, and the lights and chairs describe the gym, not Imani."
        ],
        misconception: "A common mix-up is choosing the sentence with stronger feeling words. Stronger words still tell; actions and body clues show.",
        why: "The answer is: My hands felt cold, and my knees shook as I walked to my chair. Cold hands and shaking knees show that Imani is nervous without naming the feeling. A smile shows a different feeling, \"extremely, totally, completely nervous\" still tells, and the gym description is not about Imani." },
      { id: "SK-TT1e-C07", type: "hottext", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: ["p3"], pick: 1,
        prompt: "One sentence in Imani's draft does not belong in the story. Which sentence should she take out? Choose the sentence in the draft.",
        targets: ["p3:1:2", "p3:2:1", "p3:2:3", "p3:2:4", "p3:3:1"],
        answer: ["p3:2:3"],
        clue: "Every sentence in a story should help tell what happens. Ask of each one: is this part of Imani's story about the concert?",
        hints: [
          "Every sentence in a story should help tell what happens. Ask of each one: is this part of Imani's story about the concert?",
          "Read each sentence with the ones right before and after it. A sentence that belongs connects to its neighbors.",
          "Sentence 2 tells what Imani did before the concert, so it gives background for the story. Check the sentences that are left."
        ],
        how: [
          "Each sentence should connect to Imani, her song or what happens at the concert.",
          "Sentence 5 is the squeak, and sentence 7 tells how the kids reacted to it. Sentence 6 is about Imani's brother and the school band, and it connects to neither.",
          "The answer is sentence 6: \"My brother plays the drums in the school band.\"",
          "Sentences 2, 4 and 8 each tell something that happens in or leads up to the concert, so they belong."
        ],
        misconception: "A common mix-up is keeping a sentence because it is about music. A sentence belongs only if it helps tell this story's events.",
        why: "The answer is sentence 6, \"My brother plays the drums in the school band.\" It is not about Imani's concert or the squeak, so it pulls the reader away from the story. Sentences 2, 4 and 8 tell what led up to the concert or what happened during it." },
      { id: "SK-TT1e-C08", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: ["p3"],
        prompt: "Imani wants to add a line of dialogue after sentence 7 that moves the story forward. Which sentence fits best?",
        choices: [
          { text: "Terrell leaned over and whispered, \"Keep going. You can do it!\"", correct: true },
          { text: "Ms. Ellis called out, \"Please put your recorders away now.\"" },
          { text: "Terrell whispered, \"What are we having for dinner?\"" },
          { text: "\"The concert is over,\" said Ms. Ellis. \"You may all go home.\"" }
        ],
        clue: "Dialogue has to sound like something that character would really say at that exact moment, and it should help the story along.",
        hints: [
          "Dialogue has to sound like something that character would really say at that exact moment, and it should help the story along.",
          "Reread sentences 5 to 8. Think about what has just happened and what Imani does next.",
          "A whisper about dinner does not help the story along. Look at the choices that are left."
        ],
        how: [
          "After the squeak and the giggles, Imani takes a deep breath and keeps playing. The new line should lead to that.",
          "A friend whispering encouragement fits the moment and helps explain why she keeps playing.",
          "The answer is: Terrell leaned over and whispered, \"Keep going. You can do it!\"",
          "Ms. Ellis ending the concert does not fit, because Imani keeps playing and finishes the song. A whisper about dinner does not move the story."
        ],
        misconception: "A common mix-up is picking dialogue that sounds real but does not fit this moment in the story.",
        why: "The answer is: Terrell leaned over and whispered, \"Keep going. You can do it!\" It fits the moment after the squeak and leads to Imani taking a deep breath and playing on. Ms. Ellis ending the concert contradicts sentences 8 and 9, and the dinner question does not move the story." },
      { id: "SK-TT1e-C09", type: "match", points: 2, dok: 2, std: ["3.T.T.1.e"], passages: ["p3"],
        prompt: "What job does each sentence do in Imani's story? Match each sentence to its job. Use each job once.",
        cols: ["sets the scene", "shows the problem", "shows how the problem gets solved"],
        rows: [
          { text: "(8) I took a deep breath and kept playing.", answer: 2 },
          { text: "(1) On Thursday night, our whole third-grade class played recorders at the school concert in the gym.", answer: 0 },
          { text: "(5) Halfway through, my fingers slipped, and a loud squeak filled the gym.", answer: 1 }
        ],
        clue: "A story needs a setting (when and where), a problem (something goes wrong) and a way the problem gets solved. Ask what each sentence does for the story.",
        hints: [
          "A story needs a setting (when and where), a problem (something goes wrong) and a way the problem gets solved. Ask what each sentence does for the story.",
          "For each sentence, ask: is the story just starting, going wrong, or getting better?",
          "The sentence that names the day and the place tells when and where the story happens. Match that one first, then work out the other two."
        ],
        how: [
          "Setting means when and where. Sentence 1 names the night and the school concert.",
          "A problem is something that goes wrong. Sentence 5 is where the squeak happens.",
          "A solution is what the character does about it. In sentence 8, Imani takes a deep breath and keeps playing.",
          "So the matches are: sentence 1 sets the scene, sentence 5 shows the problem, and sentence 8 shows how the problem gets solved."
        ],
        misconception: "A common mix-up is calling the first sentence the problem because it starts the story. The problem is the moment something goes wrong.",
        why: "Sentence 1 sets the scene by telling when and where. Sentence 5 shows the problem, the squeak. Sentence 8 shows how the problem gets solved, because Imani takes a deep breath and keeps playing." },
      { id: "SK-TT1e-C10", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.1.e"], passages: ["p3"],
        prompt: "Imani wants a better ending for her story. Choose the best answer for each blank.",
        text: "(9) {0}, I finished the song with no more squeaks. (10) {1}",
        slots: [
          { options: ["After that", "Before that", "At first"], answer: 0 },
          { options: [
              "When the last note ended, everyone clapped, and I smiled because I had not given up.",
              "Then Terrell dropped his recorder, and it rolled off the stage.",
              "That is the whole story about my recorder concert."
            ],
            answer: 0 }
        ],
        clue: "An ending should wrap up the story's problem. Time words show when events happen.",
        hints: [
          "An ending should wrap up the story's problem. Time words show when events happen.",
          "Reread sentences 5 to 8 to remember the problem and what Imani did about it. Then check how each blank connects to the sentence before it.",
          "A new problem, like something dropping, starts a different story instead of wrapping up this one. Work out the first blank on your own."
        ],
        how: [
          "Blank 1: sentence 8 says Imani kept playing, so finishing the song happens next. \"After that\" shows that order.",
          "Blank 2 should wrap up the problem and show her feelings: everyone claps, and she smiles because she did not give up.",
          "The answers are After that and When the last note ended, everyone clapped, and I smiled because I had not given up.",
          "\"Before that\" and \"At first\" send the reader back in time. Terrell's recorder starts a new problem, and \"That is the whole story\" only announces the end."
        ],
        misconception: "A common mix-up is picking an ending that only says the story is over. A good ending shows how things turned out and how the character feels.",
        why: "Blank 1 needs \"After that\" because finishing the song comes after Imani keeps playing. Blank 2 needs the sentence about everyone clapping and Imani smiling, because it wraps up the problem and shows her feelings. Terrell's recorder starts a new problem, and \"That is the whole story\" only announces the end." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT1e-C11", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.e"], passages: ["p4"],
        prompt: "Darius wants a better first sentence. Which choice is the best new sentence 1, and why?",
        choices: [
          { text: "\"The whistle blew, and my team dashed into Maple Park.\" It puts the reader in the first moment and makes them curious.", correct: true },
          { text: "\"A scavenger hunt is a game where players look for things on a list.\" It teaches the reader what the game is." },
          { text: "\"I like scavenger hunts better than any other game.\" It tells the reader what the writer thinks." },
          { text: "\"Maple Park is the biggest park in our town.\" It tells the reader where the story happens." }
        ],
        clue: "A strong beginning introduces the character and the place, and it makes the reader want to read on. Compare what each choice does for a story.",
        hints: [
          "A strong beginning introduces the character and the place, and it makes the reader want to read on. Compare what each choice does for a story.",
          "Read the whole draft to see what kind of story it is. Then ask which choice would start the story best.",
          "An opinion about scavenger hunts could begin an essay, but a story needs a character in a moment. Look at the choices that are left."
        ],
        how: [
          "Ask what the beginning should do: put a character in a place and start the action.",
          "\"The whistle blew, and my team dashed into Maple Park\" starts the action, names the team and the place, and makes the reader curious about the hunt.",
          "The answer is \"The whistle blew, and my team dashed into Maple Park.\" It puts the reader in the first moment and makes them curious.",
          "The other choices explain the game, give an opinion or name the place, but none of them starts the story."
        ],
        misconception: "A common mix-up is picking a sentence with a good reason that fits a report better than a story. Ask what job a story's first sentence has.",
        why: "The answer is: \"The whistle blew, and my team dashed into Maple Park.\" It puts the reader in the first moment and makes them curious. It starts the action with a team in a place. The others explain the game, give an opinion or only name the park, so they do not start the story." },
      { id: "SK-TT1e-C12", type: "order", points: 2, dok: 2, std: ["3.T.T.1.e"], passages: ["p4"],
        prompt: "Darius wants to add these four sentences between sentence 9 and sentence 10. Put them in the order that makes the most sense.",
        steps: [
          "Maya found a long, thin stick under the bench.",
          "She lifted it as high as she could and nudged the feather.",
          "The feather wobbled, slipped off the branch and floated down.",
          "I held out my hands and caught it."
        ],
        clue: "Put the events in the order they would really happen. Ask what has to happen before each next step can happen.",
        hints: [
          "Put the events in the order they would really happen. Ask what has to happen before each next step can happen.",
          "Ask what each sentence needs to already be true before it can happen. Think about which sentences depend on another one.",
          "The catch is the last moment, because the feather has to fall before anyone can catch it. Use that to place that one sentence, then decide where the others go."
        ],
        how: [
          "Maya needs a tool before she can use it, so she finds the stick first.",
          "Next she lifts the stick and nudges the feather. The feather can slip off only after it is nudged.",
          "Last, the feather floats down, and Darius catches it. He can catch it only once it has fallen.",
          "The order is: found the stick, lifted it and nudged, feather floated down, caught it."
        ],
        misconception: "A common mix-up is putting the catch early because it is the exciting moment. Check what has to happen first.",
        why: "The order is: Maya found a long, thin stick; she lifted it and nudged the feather; the feather slipped off and floated down; I caught it. Each step needs the one before it." },
      { id: "SK-TT1e-C13", type: "hottext", points: 2, dok: 2, std: ["3.T.T.1.e"], passages: ["p4"], pick: 2,
        prompt: "Which TWO sentences use details about what Darius sees or feels to help the reader picture the park? Choose two sentences in the draft.",
        targets: ["p4:2:1", "p4:2:2", "p4:2:3", "p4:2:4", "p4:3:2"],
        answer: ["p4:2:3", "p4:2:4"],
        clue: "Details help the reader see, hear or feel what is happening. Ask whether a sentence only says what happened or helps you picture it.",
        hints: [
          "Details help the reader see, hear or feel what is happening. Ask whether a sentence only says what happened or helps you picture it.",
          "Read sentences 2 to 7 one at a time, and picture each one in your mind. Choose two.",
          "Sentence 2 is a list of things to find, so it names them but does not show how anything looks or feels. Check the sentences that are left."
        ],
        how: [
          "Look for words that make a picture: how something looks, moves or feels.",
          "Sentence 4 says red leaves drifted down like confetti, so you can see them falling. Sentence 5 says the rock felt cool and smooth, so you can feel it.",
          "The answers are sentences 4 and 5.",
          "Sentence 2 is a list, sentence 3 tells where the pinecone was, and sentence 7 lists where they searched. They say what happened but do not make a picture."
        ],
        misconception: "A common mix-up is choosing a sentence only because it names a place or an object. A detail has to help the reader see, hear or feel something.",
        why: "The answers are sentences 4 and 5. \"Red leaves drifted down from the maples like confetti\" and \"The rock felt cool and smooth, like a river stone\" help the reader see and feel the park. Sentences 2, 3 and 7 only say what the team found or where they looked." },
      { id: "SK-TT1e-C14", type: "ms", points: 2, dok: 3, std: ["3.T.T.1.e"], passages: [], pick: 2,
        stem: [
          "(1) I spent all morning making a birthday card for Grandpa.",
          "(2) I squeezed the glitter glue bottle too hard, and a big blob plopped onto the card."
        ],
        prompt: "Which TWO sentences could be added after sentence 2 to show how the writer feels, using words she says or things she does?",
        choices: [
          { text: "\"Oh no, Grandpa's card is ruined!\" I wailed.", correct: true },
          { text: "My shoulders dropped, and I stared at the sticky blob.", correct: true },
          { text: "I felt very upset about it." },
          { text: "Grandpa would probably laugh when he saw it." },
          { text: "I could make a new card tomorrow." }
        ],
        clue: "Words a character says and things she does can show a feeling without naming it.",
        hints: [
          "Words a character says and things she does can show a feeling without naming it.",
          "Read sentences 1 and 2 to find the problem. Then ask what each choice shows about the writer's reaction to it. Choose two.",
          "A sentence that names the feeling, like \"I felt very upset,\" tells instead of shows. Look at the choices that are left."
        ],
        how: [
          "The problem is that the glue blob lands on the card the writer worked on all morning.",
          "Words said out loud show a feeling: \"Oh no, Grandpa's card is ruined!\" An action shows a feeling too: shoulders dropping and staring at the blob.",
          "The answers are \"Oh no, Grandpa's card is ruined!\" I wailed, and My shoulders dropped, and I stared at the sticky blob.",
          "\"I felt very upset\" tells the feeling. Grandpa laughing is a guess about someone else, and making a new card is a plan, not a reaction we can see or hear."
        ],
        misconception: "A common mix-up is choosing a sentence that names the feeling. Naming it tells; words and actions show.",
        why: "The answers are \"Oh no, Grandpa's card is ruined!\" I wailed, and My shoulders dropped, and I stared at the sticky blob. One uses words she says and one uses something she does, so both show her feeling. \"I felt very upset\" tells the feeling, Grandpa's laugh is a guess about someone else, and a new card is a plan." },
      { id: "SK-TT1e-C15", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.1.e"], passages: ["p5"],
        prompt: "The draft stops after sentence 9. This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Which sentence would be the best ending for Leo's story?",
          choices: [
            { text: "Leo's team crossed the finish line, and he grinned because the knot had held all the way.", correct: true },
            { text: "Leo ran fast, but his team did not win the relay race." },
            { text: "Then the whistle blew again, and Ms. Bell called the next team to the line." },
            { text: "That is how I remember Field Day at my school." }
          ] },
        partB: { prompt: "Which sentence from the draft tells the problem that the best ending wraps up?",
          choices: [
            { text: "\"Just before the whistle, his left shoelace snapped in two.\"", correct: true },
            { text: "\"Leo tied his shoes tight before the relay race on Field Day.\"" },
            { text: "\"Leo frowned and looked down at his shoe.\"" },
            { text: "\"His coach, Ms. Bell, knelt down beside him.\"" }
          ] },
        clue: "A good ending wraps up the problem and shows how the character feels. Ask what went wrong and how it was fixed.",
        hints: [
          "A good ending wraps up the problem and shows how the character feels. Ask what went wrong and how it was fixed.",
          "For Part B, reread the start of the draft to find what went wrong. Your Part A ending should connect to it.",
          "Changing from \"he\" to \"I\" changes who is telling the story. Look at the choices that are left in Part A, and make your Part B choice match."
        ],
        how: [
          "The problem is in the first paragraph: the lace snaps. The fix comes in paragraph 2, when Ms. Bell tells Leo to tie a knot.",
          "A good ending shows the result of the fix and how Leo feels: the team finishes, and he grins because the knot held.",
          "Part A: Leo's team crossed the finish line, and he grinned because the knot had held all the way. Part B: \"Just before the whistle, his left shoelace snapped in two.\"",
          "Running fast but losing does not mention the lace, the next team moves on without wrapping up, and \"I remember\" changes the narrator."
        ],
        misconception: "A common mix-up is choosing an ending that sounds finished but ignores the problem. The ending should answer what went wrong.",
        why: "Part A: Leo's team crossed the finish line, and he grinned because the knot had held all the way. Part B: \"Just before the whistle, his left shoelace snapped in two.\" The ending shows the knot solving the lace problem and how Leo feels. The other endings ignore the lace, move on to a new team, or change the narrator." }
    ] }
  ] },
  similar: [
    { id: "SK-TT1e-S01", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-P5"],
      prompt: "Rosa is playing hide-and-seek. Pick the word that fits each blank so the search happens in order.",
      text: "(1) Rosa covered her eyes and counted to twenty. (2) {0} she checked behind the curtain. (3) Then she peeked inside the closet. (4) {1} she spotted her cousin Dev's sneakers poking out from under the bed.",
      slots: [
        { options: ["A moment later,", "To begin with,", "Long before that,"], answer: 0 },
        { options: ["In the end,", "At first,", "Earlier,"], answer: 0 }
      ],
      clue: "Time words show where an event fits in the order of the story. Ask what has already happened before each blank.",
      hints: [
        "Time words show where an event fits in the order of the story. Ask what has already happened before each blank.",
        "Read sentences 1 to 4 in order. Decide which blank is an early step and which one is near the end of the search.",
        "A word that sends the reader back in time does not fit a story that is moving forward. Check the other words for the first blank, and work out the second blank yourself."
      ],
      how: [
        "Sentence 1 is the start: Rosa counts. So the first search in sentence 2 comes after that, and it needs a word that moves forward in time.",
        "Blank 1 is \"A moment later,\". \"To begin with\" would make the search the start, but counting came first, and \"Long before that\" goes backward.",
        "Sentence 4 is where Rosa finds Dev, so it is the end of the search, and it needs \"In the end,\".",
        "\"At first\" is a start word, and \"Earlier\" goes backward."
      ],
      why: "Blank 1 needs \"A moment later,\" because the search comes after Rosa counts. Blank 2 needs \"In the end,\" because she finds Dev at the end of the search. \"To begin with\" and \"At first\" belong at the start, and \"Long before that\" and \"Earlier\" go backward." },
    { id: "SK-TT1e-S02", type: "order", points: 2, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-P4"],
      prompt: "Arrange the four picnic sentences from the first event to the last.",
      steps: [
        "Dad set the big watermelon on the picnic table.",
        "He sliced it into thick, juicy wedges.",
        "We each grabbed a wedge and took a big bite.",
        "Juice ran down my chin and dripped onto my shirt."
      ],
      clue: "Put the events in the order they would really happen. Ask what has to happen before the next thing can happen.",
      hints: [
        "Put the events in the order they would really happen. Ask what has to happen before the next thing can happen.",
        "Picture each moment. Which sentences depend on something that has to happen earlier?",
        "Juice cannot run down a chin until someone has taken a bite. Use that to place that one sentence, then decide where the others go."
      ],
      how: [
        "First the watermelon has to be on the table, because everything else is done with it.",
        "Then Dad slices it into wedges, because nobody can grab a wedge before it is cut.",
        "Then everyone grabs a wedge and bites, and the juice runs down only after the bite.",
        "The order is: set the watermelon on the table, slice it, grab and bite, juice runs down."
      ],
      why: "The order is: Dad set the watermelon on the table; he sliced it into wedges; we each grabbed a wedge and took a bite; juice ran down my chin. Each step needs the one before it." },
    { id: "SK-TT1e-S03", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C03"],
      stem: [
        "(1) Nia reached the top of the treehouse ladder.",
        "(2) She looked down and shouted for her dad to come see."
      ],
      prompt: "Which choice rewrites sentence 2 so the reader hears what Nia actually says?",
      choices: [
        { text: "She looked down and shouted, \"Dad, come see how high I am!\"", correct: true },
        { text: "She looked down and shouted that her dad should come see how high she was." },
        { text: "She looked down and shouted, Dad, come see how high I am!" },
        { text: "She looked down and shouted, \"A ladder has rungs and two long sides.\"" }
      ],
      clue: "Dialogue is the exact words a character says, set inside quotation marks. The words also have to fit the moment.",
      hints: [
        "Dialogue is the exact words a character says, set inside quotation marks. The words also have to fit the moment.",
        "Think about where Nia is and who she is calling. Then check how each choice shows what she says.",
        "A sentence that tells what Nia shouted, without her exact words, is not dialogue. Look at the choices that are left."
      ],
      how: [
        "Nia is at the top of the ladder and wants her dad to see how high she is.",
        "Her exact words go inside quotation marks, and they match the moment: \"Dad, come see how high I am!\"",
        "The answer is: She looked down and shouted, \"Dad, come see how high I am!\"",
        "Telling what she shouted has no exact words, the version with no quotation marks does not show where her words start and stop, and the ladder fact does not fit what she wants."
      ],
      why: "The answer is: She looked down and shouted, \"Dad, come see how high I am!\" It uses her exact words inside quotation marks, and they fit the moment. One version only tells what she said, one has no quotation marks, and one has words that do not fit." },
    { id: "SK-TT1e-S04", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C04"],
      stem: [
        "Marcus is writing a story about the day he got lost at the state fair. His first sentence is: \"This story is about the day I got lost.\""
      ],
      prompt: "Which opening line would pull a reader into Marcus's story better than his first sentence?",
      choices: [
        { text: "A band started up by the cotton candy stand, and my family was gone.", correct: true },
        { text: "The state fair has rides, games and lots of good food to eat." },
        { text: "Getting lost was scary, but everything turned out fine in the end." },
        { text: "I have been to the fair many times with my family and my cousins." }
      ],
      clue: "A strong beginning tells who the story is about and where it happens, and it makes the reader want to keep reading.",
      hints: [
        "A strong beginning tells who the story is about and where it happens, and it makes the reader want to keep reading.",
        "Imagine you are a reader who has just opened this story. Which choice makes you want to find out what happens next?",
        "A sentence that tells how the story ends takes away the reason to keep reading. Look at the choices that are left."
      ],
      how: [
        "The story is about getting lost, so a good beginning puts Marcus in the place and starts the problem.",
        "\"A band started up by the cotton candy stand, and my family was gone\" has a sound, a place and the start of the problem.",
        "The answer is: A band started up by the cotton candy stand, and my family was gone.",
        "The sentence about rides is a fact, \"everything turned out fine\" gives away the ending, and the sentence about many visits is background that does not start the story."
      ],
      why: "The answer is: A band started up by the cotton candy stand, and my family was gone. It puts Marcus in a place and starts the problem. The others give facts or background, or give away how the story ends." },
    { id: "SK-TT1e-S05", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-P6"],
      stem: [
        "(1) Leo and his sister Kai tried their new walkie-talkies in the backyard.",
        "(2) Kai pressed the button, but no sound came out.",
        "(3) Leo opened the back and saw that the battery was loose.",
        "(4) He pushed it in until it clicked."
      ],
      prompt: "The draft stops after sentence 4. Which sentence would be the best ending?",
      choices: [
        { text: "Kai's voice crackled, \"Can you hear me now?\" and they both laughed.", correct: true },
        { text: "Walkie-talkies send voices through the air from one radio to another." },
        { text: "The next day, Leo built a treehouse in the big oak tree." },
        { text: "That is the end of my story about the walkie-talkie." }
      ],
      clue: "A good ending wraps up the problem and shows how the characters feel. Think about what went wrong at the start.",
      hints: [
        "A good ending wraps up the problem and shows how the characters feel. Think about what went wrong at the start.",
        "Reread sentences 2 to 4 to find the problem and how it was fixed. What would the characters find out next?",
        "A new project, like building something the next day, starts a different story. Look at the choices that are left."
      ],
      how: [
        "The problem is that the walkie-talkie makes no sound. Leo fixes the loose battery.",
        "A good ending shows the result: it works, and the characters are happy.",
        "The answer is: Kai's voice crackled, \"Can you hear me now?\" and they both laughed.",
        "The radio fact is not part of the story's ending, building a treehouse starts something new, and \"That is the end\" only says the story is over."
      ],
      why: "The answer is: Kai's voice crackled, \"Can you hear me now?\" and they both laughed. It shows the problem is solved and how they feel. A radio fact, a new project and \"That is the end\" do not wrap up the problem." },
    { id: "SK-TT1e-S06", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C06"],
      stem: [
        "(1) Jamal waited backstage before the school play.",
        "(2) He was scared.",
        "(3) Then the music began."
      ],
      prompt: "Which sentence should replace sentence 2 to show that Jamal is scared?",
      choices: [
        { text: "His hands trembled, and he kept peeking at the crowd through the curtain.", correct: true },
        { text: "He smiled and waved at his grandmother in the front row." },
        { text: "Jamal was very, very scared about the play." },
        { text: "The curtain was thick and red, with gold stars sewn on it." }
      ],
      clue: "Showing a feeling means writing what the character does, feels in his body or notices, so the reader can figure out the feeling.",
      hints: [
        "Showing a feeling means writing what the character does, feels in his body or notices, so the reader can figure out the feeling.",
        "Reread sentences 1 to 3, and think about the moment right before the play starts. Then ask what each choice shows about Jamal.",
        "Adding more feeling words, like very, very, still just tells the feeling. Look at the choices that are left."
      ],
      how: [
        "Telling names the feeling, like scared. Showing uses a body clue or an action.",
        "Trembling hands and peeking at the crowd are clues that someone is scared before a play.",
        "The answer is: His hands trembled, and he kept peeking at the crowd through the curtain.",
        "Smiling and waving show a happy feeling, \"very, very scared\" still tells, and the curtain description is about the stage, not Jamal."
      ],
      why: "The answer is: His hands trembled, and he kept peeking at the crowd through the curtain. Trembling and peeking show that Jamal is scared without naming it. A smile shows a different feeling, \"very, very scared\" still tells, and the curtain is not about Jamal." },
    { id: "SK-TT1e-S07", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C07"],
      stem: [
        "(1) Tasha pushed her wagon of old toys to the corner for the yard sale.",
        "(2) She wrote the prices on a big sign with a purple marker.",
        "(3) My teacher drives a blue truck.",
        "(4) A neighbor stopped and bought a stuffed bear.",
        "(5) Tasha put the coins in a jar with a grin."
      ],
      prompt: "One sentence wanders away from this story. Which one should the writer cut?",
      choices: [
        { text: "(3) My teacher drives a blue truck.", correct: true },
        { text: "(2) She wrote the prices on a big sign with a purple marker." },
        { text: "(4) A neighbor stopped and bought a stuffed bear." },
        { text: "(5) Tasha put the coins in a jar with a grin." }
      ],
      clue: "Every sentence in a story should help tell what happens. Ask of each one: is this part of Tasha's yard sale?",
      hints: [
        "Every sentence in a story should help tell what happens. Ask of each one: is this part of Tasha's yard sale?",
        "Read each sentence with the ones right before and after it. A sentence that belongs connects to its neighbors.",
        "The price sign is something Tasha does to get ready for the sale, so it belongs. Check the sentences that are left."
      ],
      how: [
        "The story is about Tasha's yard sale, so every sentence should be about getting ready, selling or counting coins.",
        "Sentence 2 is the price sign, sentence 4 is a sale and sentence 5 is the coins. Sentence 3 is about a teacher's truck, which has nothing to do with the sale.",
        "The answer is (3) My teacher drives a blue truck."
      ],
      why: "The answer is (3) My teacher drives a blue truck. It is not about Tasha's yard sale. Sentences 2, 4 and 5 tell about the sign, a sale and the coins." },
    { id: "SK-TT1e-S08", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C08"],
      stem: [
        "(1) Kayla stood in line for the bumper cars at the carnival.",
        "(2) The ride stopped, and the gate swung open.",
        "(3) She raced to the red car first."
      ],
      prompt: "Which line of dialogue should be added after sentence 3 to fit the moment and move the story forward?",
      choices: [
        { text: "\"Hurry, Mia! Our car is the red one!\" Kayla called.", correct: true },
        { text: "\"The carnival closes at nine o'clock,\" said the ticket seller." },
        { text: "\"I love spaghetti,\" Mia said." },
        { text: "\"Please sit down. The ride is over,\" said a worker." }
      ],
      clue: "Dialogue has to sound like something that character would really say at that exact moment, and it should help the story along.",
      hints: [
        "Dialogue has to sound like something that character would really say at that exact moment, and it should help the story along.",
        "Reread sentences 1 to 3. What has just happened, and what is Kayla about to do?",
        "A comment about spaghetti has nothing to do with the ride. Look at the choices that are left."
      ],
      how: [
        "The gate just opened and Kayla ran to the red car. She would call to a friend to hurry.",
        "The answer is: \"Hurry, Mia! Our car is the red one!\" Kayla called.",
        "The closing time is something a ticket seller might say, but it does not fit this moment. The ride is just starting, so \"The ride is over\" is wrong, and the spaghetti line does not move the story."
      ],
      why: "The answer is: \"Hurry, Mia! Our car is the red one!\" Kayla called. It fits the moment, because the gate just opened, and it moves the story forward. The closing time and the spaghetti line do not fit, and the ride has not ended." },
    { id: "SK-TT1e-S09", type: "match", points: 2, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C09"],
      prompt: "Maya wrote about her magic show. Link each of her sentences to the job it does, and use every job one time.",
      cols: ["tells when and where", "shows what goes wrong", "shows the fix"],
      rows: [
        { text: "Halfway through the show, the card she needed slipped off the table.", answer: 1 },
        { text: "Maya picked up the card with a smile and kept the trick going.", answer: 2 },
        { text: "On Saturday, Maya set up a table for her magic show in the living room.", answer: 0 }
      ],
      clue: "A story needs a setting (when and where), a problem (something goes wrong) and a way the problem gets solved. Ask what each sentence does.",
      hints: [
        "A story needs a setting (when and where), a problem (something goes wrong) and a way the problem gets solved. Ask what each sentence does.",
        "For each sentence, ask: is the story just starting, going wrong, or getting better?",
        "The sentence that tells what the character does to fix things is the one that solves the problem. Match that one first, then work out the other two."
      ],
      how: [
        "Setting means when and where: Saturday, in the living room.",
        "A problem is something that goes wrong: the card slips off the table.",
        "A solution is what the character does about it: Maya picks up the card and keeps going.",
        "So the matches are: setting up the table is the setting, the card slipping is the problem, and picking it up is the solution."
      ],
      why: "Setting up the table on Saturday in the living room sets the scene. The card slipping off the table is the problem. Picking up the card and keeping the trick going is how the problem gets solved." },
    { id: "SK-TT1e-S10", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C10"],
      prompt: "Choose the best answer for each blank to finish Nia's story.",
      text: "(1) Nia was nervous about her first sleepover. (2) At bedtime, she heard a creak and hugged her pillow. (3) Her friend Amber switched on a night light, and the room felt cozy. (4) {0}, Nia fell asleep. (5) {1}",
      slots: [
        { options: ["A little later", "Earlier that day", "At the beginning"], answer: 0 },
        { options: [
            "By morning, Nia was giggling with her friends and could not wait for the next sleepover.",
            "The next day, Nia's mom took her to buy new shoes at the store.",
            "Sleepovers are when friends stay overnight at someone's house."
          ],
          answer: 0 }
      ],
      clue: "An ending should wrap up the story's problem. Time words show when events happen.",
      hints: [
        "An ending should wrap up the story's problem. Time words show when events happen.",
        "Think about Nia's problem in sentences 1 and 2, and how the night light changed things. Then check how each blank connects to the sentence before it.",
        "A sentence that gives a fact about sleepovers does not show how Nia feels. Work out the first blank on your own."
      ],
      how: [
        "Blank 1: Nia falls asleep after the night light is on, so it needs a word that moves the story forward in time: \"A little later\".",
        "Blank 2 should wrap up her worry and show how she feels: by morning she is giggling and wants another sleepover.",
        "\"Earlier that day\" and \"At the beginning\" go backward. A shopping trip starts something new, and the fact does not show Nia's feelings."
      ],
      why: "Blank 1 needs \"A little later\" because falling asleep comes after the night light. Blank 2 needs the sentence about Nia giggling, because it wraps up her worry and shows her feelings. The shoe trip starts something new, and the sleepover fact does not show her feelings." },
    { id: "SK-TT1e-S11", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C11"],
      stem: [
        "Kofi is writing about his first time on the climbing wall at the gym. His first sentence is: \"This is a story about climbing.\""
      ],
      prompt: "Which choice would make the best new first sentence for Kofi's story? Read the job each choice says it does.",
      choices: [
        { text: "\"I gripped the first purple hold and looked up at the very top.\" It starts the action with Kofi at the wall.", correct: true },
        { text: "\"A climbing wall has holds that climbers grab and step on.\" It explains how a wall is built." },
        { text: "\"Kofi was proud when he finally reached the top.\" It tells how the story ends." },
        { text: "\"Climbing is the best sport in the whole world.\" It gives the writer's opinion." }
      ],
      clue: "A strong beginning introduces the character and the place, and it makes the reader want to read on. Compare what each choice does for a story.",
      hints: [
        "A strong beginning introduces the character and the place, and it makes the reader want to read on. Compare what each choice does for a story.",
        "Think about what kind of story this is. Then ask which choice would make you want to read on.",
        "An opinion about a sport could begin an essay, but a story needs a character in a moment. Look at the choices that are left."
      ],
      how: [
        "A story's beginning should put a character in a place and start the action.",
        "\"I gripped the first purple hold and looked up at the very top\" shows Kofi at the start of his climb and makes the reader wonder what will happen.",
        "The answer is \"I gripped the first purple hold and looked up at the very top.\" It starts the action with Kofi at the wall.",
        "The others explain the wall, give away the ending or share an opinion. None of them starts the story."
      ],
      misconception: "A common mix-up is picking a sentence that sounds exciting but belongs at the end. A beginning starts the action; it does not tell how the story turns out.",
      why: "The answer is: \"I gripped the first purple hold and looked up at the very top.\" It starts the action with Kofi at the wall. The other choices explain how a wall is built, tell how the story ends or give an opinion, so they do not start the story." },
    { id: "SK-TT1e-S12", type: "order", points: 2, dok: 2, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C12"],
      prompt: "Kai is writing about his paper boat. Sort his sentences into the order the events would really happen.",
      steps: [
        "Kai folded a sheet of paper into a boat.",
        "He carried it to the creek and set it on the water.",
        "A gentle breeze pushed the boat across the ripples.",
        "It bumped into the far bank, and Kai cheered."
      ],
      clue: "Put the events in the order they would really happen. Ask what has to happen before each next step can happen.",
      hints: [
        "Put the events in the order they would really happen. Ask what has to happen before each next step can happen.",
        "Ask what each sentence needs to already be true before it can happen. Think about which sentences depend on another one.",
        "A boat has to exist before anything can happen to it. Use that to place that one sentence, then decide where the others go."
      ],
      how: [
        "Kai has to make the boat before anything else can happen to it.",
        "Then he carries it to the creek and sets it on the water, because the breeze can push it only when it floats.",
        "Then the breeze pushes it, and last it bumps the far bank, because it has to cross the creek first.",
        "The order is: folded the boat, set it on the water, breeze pushed it, it bumped the far bank."
      ],
      why: "The order is: Kai folded the paper boat; he set it on the water; a breeze pushed it across the ripples; it bumped the far bank and Kai cheered. Each step needs the one before it." },
    { id: "SK-TT1e-S13", type: "ms", points: 2, dok: 2, std: ["3.T.T.1.e"], passages: [], pick: 2, like: ["SK-TT1e-C13"],
      stem: ["Rosa is writing about a birthday party at the bowling alley."],
      prompt: "Which TWO sentences use details about what Rosa sees or hears to help the reader picture the bowling alley?",
      choices: [
        { text: "Pins crashed with a loud crack, and the whole alley smelled like popcorn.", correct: true },
        { text: "The shiny floor was so slick that my shoes squeaked with every step.", correct: true },
        { text: "We bowled on Saturday afternoon." },
        { text: "My team had six players on it." },
        { text: "Bowling is a game played with ten pins." }
      ],
      clue: "Details help the reader see, hear or feel what is happening. Ask whether a sentence only says what happened or helps you picture it.",
      hints: [
        "Details help the reader see, hear or feel what is happening. Ask whether a sentence only says what happened or helps you picture it.",
        "Read each sentence and picture it in your mind. Choose two.",
        "A sentence that explains how the game is played gives a fact, but it does not help the reader picture this alley. Look at the choices that are left."
      ],
      how: [
        "Look for words that make a picture or a sound: how things look, sound, smell or feel.",
        "\"Pins crashed with a loud crack\" and \"the whole alley smelled like popcorn\" use hearing and smell. \"The shiny floor was so slick that my shoes squeaked\" uses sight and sound.",
        "The answers are the pins-and-popcorn sentence and the slick-floor sentence.",
        "Saturday afternoon, six players and ten pins are plain facts. They do not help the reader picture the alley."
      ],
      why: "The answers are \"Pins crashed with a loud crack, and the whole alley smelled like popcorn\" and \"The shiny floor was so slick that my shoes squeaked with every step.\" They use sounds, smells and sights. The other sentences only give plain facts." },
    { id: "SK-TT1e-S14", type: "ms", points: 2, dok: 3, std: ["3.T.T.1.e"], passages: [], pick: 2, like: ["SK-TT1e-C14"],
      stem: [
        "(1) Malik worked all week on a model rocket for launch day.",
        "(2) At launch time, the rocket tipped over and fell in the grass."
      ],
      prompt: "Malik's rocket falls over. Choose TWO sentences that show his feelings through something he says or does.",
      choices: [
        { text: "\"Not again!\" Malik groaned.", correct: true },
        { text: "He knelt in the grass and slowly picked up the broken pieces.", correct: true },
        { text: "Malik felt really sad about it." },
        { text: "His friends would probably help him fix it." },
        { text: "He could build a better rocket next week." }
      ],
      clue: "Words a character says and things he does can show a feeling without naming it.",
      hints: [
        "Words a character says and things he does can show a feeling without naming it.",
        "Read sentences 1 and 2 to find the problem. Then ask what each choice shows about Malik's reaction to it. Choose two.",
        "A sentence that names the feeling, like \"felt really sad,\" tells instead of shows. Look at the choices that are left."
      ],
      how: [
        "The problem is that the rocket Malik worked on all week falls over.",
        "Words he says show a feeling: \"Not again!\" Malik groaned. An action shows a feeling too: kneeling and slowly picking up the broken pieces.",
        "The answers are \"Not again!\" Malik groaned, and He knelt in the grass and slowly picked up the broken pieces.",
        "\"Malik felt really sad\" tells the feeling. His friends helping is a guess about others, and building a better rocket is a plan, not a reaction we can see or hear."
      ],
      why: "The answers are \"Not again!\" Malik groaned, and He knelt in the grass and slowly picked up the broken pieces. One uses words he says and one uses something he does. \"Malik felt really sad\" tells the feeling, and the other two are guesses or plans." },
    { id: "SK-TT1e-S15", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.e"], passages: [], like: ["SK-TT1e-C15"],
      stem: [
        "(1) Tariq built a robot costume from boxes for the fall festival.",
        "(2) Just before the parade, the paper arm fell off.",
        "(3) A neighbor handed him a roll of tape.",
        "(4) Tariq taped the arm back on tight."
      ],
      prompt: "The draft stops after sentence 4. Which choice is the best ending, and why?",
      choices: [
        { text: "\"Tariq marched in the parade, and his arm stayed on the whole way.\" It wraps up the arm problem.", correct: true },
        { text: "\"Tariq likes robots more than any other costume.\" It tells what Tariq thinks." },
        { text: "\"The festival has games and food and a hay ride.\" It tells more about the festival." },
        { text: "\"Then a gust of wind knocked over the whole costume.\" It adds an exciting new problem." }
      ],
      clue: "A good ending settles the problem and shows how the character feels. Ask what went wrong and how it was fixed.",
      hints: [
        "A good ending settles the problem and shows how the character feels. Ask what went wrong and how it was fixed.",
        "Reread sentences 2 to 4 to find the problem and the fix. Then compare what each choice does for the story.",
        "A new problem starts a different story instead of finishing this one. Look at the choices that are left."
      ],
      how: [
        "The problem is the arm that falls off, and the fix is the tape.",
        "A good ending shows the result of the fix: Tariq marches and the arm stays on.",
        "The answer is \"Tariq marched in the parade, and his arm stayed on the whole way.\" It wraps up the arm problem.",
        "An opinion about robots and facts about the festival do not finish the arm problem, and a gust of wind starts a new problem."
      ],
      why: "The answer is: \"Tariq marched in the parade, and his arm stayed on the whole way.\" It wraps up the arm problem. It shows the problem is solved. The opinion and the festival facts do not finish the problem, and the gust of wind starts a new one." }
  ],
  addons: {
    "SK-TT1e-P1": {
      hints: [
        "A strong beginning fits the story and makes the reader curious. It does not just announce the story.",
        "Read the rest of the draft to see what the story is about. Then ask which choice would make a reader want to find out more.",
        "A fact about hamsters might be true, but it could begin any report about hamsters. Check the other choices against Andre's story."
      ],
      how: [
        "The draft is about Peanut getting loose. A good beginning hints at that without telling everything.",
        "\"I never knew one tiny hamster could cause so much trouble\" fits the story and makes the reader wonder what Peanut did.",
        "The hamster fact is not part of this story, \"This story is about my hamster\" only announces it, and Bree's books are off topic."
      ],
      misconception: "A common mix-up is choosing a true fact. A beginning should start the story, not teach a fact." },
    "SK-TT1e-P2": {
      hints: [
        "Dialogue has to sound like something that character would really say at that exact moment.",
        "Look at sentences 5 to 8. What do Andre and Bree know right after sentence 6, and what are they about to do?",
        "Peanut is not found until sentence 9, so a line that already knows where he is would be out of order. Check the other choices."
      ],
      how: [
        "After sentence 6, Bree has come to help and they have not yet found Peanut.",
        "\"Don't worry, Andre. We'll find him\" fits that moment and leads to the search in sentence 7.",
        "Saying Peanut is in the pantry gives away what they have not yet found. A snack or playing outside does not fit the problem."
      ],
      misconception: "A common mix-up is picking a line that sounds real but does not fit this moment in the story." },
    "SK-TT1e-P3": {
      hints: [
        "A good detail lets the reader see what is happening. Ask what the character looks like or does in this moment.",
        "Reread sentences 9 and 10 together. Which choice would help you picture Peanut in the bag of seeds?",
        "A fact about all hamsters is not about Peanut in this moment. Check the other choices to see which ones show Peanut."
      ],
      how: [
        "Sentence 10 only says Peanut looked nice, which does not help the reader see him.",
        "\"His cheeks were stuffed so full they looked like two balloons\" shows what Peanut looks like after eating the seeds.",
        "\"Very nice\" and \"the same as always\" show nothing, and the cheek-pouch fact is about all hamsters, not Peanut."
      ],
      misconception: "A common mix-up is choosing a true fact. A detail has to help the reader picture this moment." },
    "SK-TT1e-P4": {
      hints: [
        "Put the events in the order they would really happen. Ask what has to happen before each next thing can happen.",
        "Picture each moment. Which sentences depend on something that has to happen earlier?",
        "Pulling the door open all the way is the big action of this part. Think about where the big action belongs, then place the other two."
      ],
      how: [
        "The children have to get to the kitchen before anything else in this part can happen.",
        "Then Bree points at the door that is open a crack.",
        "Last, Andre pulls the door open all the way, because he can do that only after they notice it.",
        "The order is: tiptoed into the kitchen, Bree pointed at the door, pulled the door open."
      ],
      misconception: "A common mix-up is putting the biggest action first. The big action comes last, after the setup." },
    "SK-TT1e-P5": {
      hints: [
        "Time words tell where an event fits in the order of the story. Ask what has already happened by each blank.",
        "Read sentences 6 to 9 in order. For each blank, decide whether that moment is the start of the search or the end of it.",
        "\"Before that\" sends the reader back in time, but the story is moving forward. Check the other words for that blank, and work out the first blank yourself."
      ],
      how: [
        "Sentence 6 says Bree came to help. In sentence 7 they begin to search, so the first place they look needs a word for the start of the search.",
        "That word is \"First,\". Finally and In the end would put the end of the search at the start.",
        "In sentence 9 they find Peanut after searching in many places. \"At last,\" shows that the long search is over.",
        "The answers are First, and At last,. \"Before that,\" goes backward in time."
      ],
      misconception: "A common mix-up is picking a word that sounds like a story word. Pick the one that matches where the event falls in the order." },
    "SK-TT1e-P6": {
      hints: [
        "An ending wraps up the problem. Ask what problem started the story and what the ending should show about it.",
        "Look back at the first few sentences of Andre's draft to see how the problem began. Then think about how Andre feels at the end.",
        "Starting something new, like another phone call, does not wrap up the problem. Test the choices that are left against the way the story began."
      ],
      how: [
        "The problem began when Andre forgot to close the cage door and Peanut got out.",
        "A good ending shows the problem is over and how Andre feels. He found Peanut, so he can hug him and promise to fix what went wrong.",
        "The answer is: I hugged Peanut gently and promised to always close his door.",
        "The phone ringing again starts something new, the hamster fact is not part of the ending, and \"That is the story of what happened\" only says the story is over."
      ],
      misconception: "A common mix-up is choosing a sentence that only says the story is finished. An ending should show how things turned out." }
  },
  /* B4-b4a end ---------- */
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
