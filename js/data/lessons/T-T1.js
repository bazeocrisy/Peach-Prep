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
        ["Lily knelt beside a rocky pool no bigger than a bathtub.", "She leaned so close that the ends of her braids dipped into the water."],
        ["\"Dad, look!\" she whispered.", "\"Something moved!\""],
        ["Dad crouched beside her.", "A tiny green crab scuttled sideways and tucked itself under a rock."],
        ["Lily reached for the rock.", "\"Wait,\" Dad said gently.", "\"That rock is the crab's house. How would you feel if a giant lifted off your roof?\""],
        ["Lily pulled her hand back.", "She lay on her stomach and watched instead.", "After a while, the crab crept out and waved one claw, as if it were saying hello."],
        ["Far out, the waves began to roll back in.", "\"Time to go,\" Dad said.", "\"The ocean wants its pool back.\"", "Lily waved goodbye to the crab and raced the water up the beach."]
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
        prompt: "In paragraph 4, Abuela plays \"a song she used to sing as a girl in Puerto Rico.\" What does this detail tell the reader about Abuela?",
        choices: [
          { text: "She is sharing a song from her own childhood with Mateo.", correct: true },
          { text: "She has just come home from a long trip to Puerto Rico." },
          { text: "She learned the song from Mateo's favorite TV show." },
          { text: "She wants Mateo to start taking guitar lessons soon." }
        ],
        clue: "A describing detail can tell you about a character, not only about a place. Ask what this detail tells you about who Abuela is.",
        hints: [
          "A describing detail can tell you about a character, not only about a place. Ask what this detail tells you about who Abuela is.",
          "Reread the last sentence of paragraph 4. Think about when in her life Abuela first sang this song.",
          "The story never talks about a trip, so the choice about coming home from Puerto Rico has no support. Test each choice that is left against the words in the question."
        ],
        how: [
          "Paragraph 4 says Abuela plays a song she used to sing as a girl in Puerto Rico.",
          "\"As a girl\" means when she was a child. So the song comes from Abuela's own childhood, and now she is sharing it with Mateo.",
          "The answer is \"She is sharing a song from her own childhood with Mateo.\"",
          "Check the others: the story never mentions a trip, the TV is off because the power is out, and nobody talks about lessons."
        ],
        misconception: "A common mix-up is reading a detail about a place as news about a trip. Ask what the detail tells you about the character.",
        why: "The answer is \"She is sharing a song from her own childhood with Mateo.\" \"As a girl\" means Abuela sang this song when she was a child in Puerto Rico. The story never mentions a trip, the TV is off because the power is out, and no one talks about lessons." },
      { id: "SK-TT1a-C04", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: ["p1"],
        prompt: "The author wants to add one more describing sentence at the end of paragraph 4. It should help the reader picture the room once the flashlight is set up. Which sentence fits best?",
        choices: [
          { text: "Soft yellow light glowed on the ceiling like a tiny moon.", correct: true },
          { text: "Abuela had learned to play the guitar a long time ago." },
          { text: "\"Where did you get that old guitar?\" Mateo asked." },
          { text: "Mateo pulled his blanket up over his head." }
        ],
        clue: "Description helps the reader picture a place: how it looks, sounds or feels. Ask which sentence paints a picture of the room.",
        hints: [
          "Description helps the reader picture a place: how it looks, sounds or feels. Ask which sentence paints a picture of the room.",
          "Reread paragraph 4 to see what Abuela does with the flashlight. The new sentence has to fit right after that.",
          "The line in quotation marks is dialogue, so it does not describe the room. Check each sentence that is left: does it help you picture the room itself?"
        ],
        how: [
          "The job is to describe the room, so the new sentence must tell how the room looks, sounds or feels.",
          "In paragraph 4, Abuela stands the flashlight up so that its light shines on the ceiling. A sentence about that light fits right after it.",
          "The answer is \"Soft yellow light glowed on the ceiling like a tiny moon.\" It helps the reader see the dark room glowing.",
          "Check the others: the guitar sentence tells about Abuela, the question is dialogue, and pulling the blanket over his head is an action, not a picture of the room."
        ],
        misconception: "A common mix-up is choosing a sentence about a character when the job is to describe the place.",
        why: "The answer is \"Soft yellow light glowed on the ceiling like a tiny moon.\" It describes how the room looks once the flashlight shines on the ceiling. The guitar sentence tells about Abuela, the question is dialogue, and pulling up the blanket is an action." },
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
          "The ball goes over the goal, not into it, so the kick does not win the game. Test the choices that are left against what happens after the kick."
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
          "Tiptoeing is quiet, but it is something Nadia does, so it is an action, not description. Check each other sentence: does it describe the room, and does it tell you how quiet the room is?"
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
          "Reread what Mr. Webb says in paragraph 6. Notice what he does just before he speaks.",
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
          "Find where each detail comes in the story: near the start, in the middle or near the end.",
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
          { text: "It tells the reader that Caleb likes trains more than sharks." }
        ],
        clue: "Authors put a describing detail in a story for a reason. Ask how the detail helps the story move along.",
        hints: [
          "Authors put a describing detail in a story for a reason. Ask how the detail helps the story move along.",
          "Reread the second note in paragraph 4. Then reread paragraph 5.",
          "The story never says what Mr. Webb wears on other days, so that choice has no support. Test each choice that is left against what Nadia does right after she sees the tie."
        ],
        how: [
          "The second note says, \"Ask the person who loves sharks the most.\"",
          "Nadia looks around. Caleb only reads about trains. Then she notices that Mr. Webb's tie is covered with tiny gray sharks.",
          "Right after that, she asks Mr. Webb whether he wrote the notes. The tie is the clue that points her to him.",
          "The answer is \"It is the clue Nadia uses to figure out who wrote the notes.\" The story never says what he wears on other days, he is not hiding, and the train sentence is about Caleb, not the tie."
        ],
        misconception: "A common mix-up is thinking a describing detail is there only to tell what something looks like. Here it is a clue that moves the plot.",
        why: "The answer is \"It is the clue Nadia uses to figure out who wrote the notes.\" The note says to ask the person who loves sharks the most, and the shark tie points Nadia to Mr. Webb. The story never says what he wears on other days, he is not hiding, and the train sentence is about Caleb." }
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
          "Mrs. Ruffin picks the lumpy muffin on purpose, so she is not being picky about how muffins look. For the second blank, find what is on the table at the start and what is on it at the end."
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
            { text: "Lily leaves the rock alone, so she gets to see the crab come out.", correct: true },
            { text: "Lily lifts the rock, and the crab runs off into the ocean." },
            { text: "Lily gets scared of the crab and runs back up the beach." },
            { text: "Lily asks Dad to take a picture of the crab under the rock." }
          ] },
        partB: { prompt: "Which sentence from the story best shows the result of Dad's words?",
          choices: [
            { text: "\"After a while, the crab crept out and waved one claw, as if it were saying hello.\"", correct: true },
            { text: "\"A tiny green crab scuttled sideways and tucked itself under a rock.\"" },
            { text: "\"Lily reached for the rock.\"" },
            { text: "\"Lily waved goodbye to the crab and raced the water up the beach.\"" }
          ] },
        clue: "Dialogue can change what a character does next. Find the words, then ask what the character does after hearing them.",
        hints: [
          "Dialogue can change what a character does next. Find the words, then ask what the character does after hearing them.",
          "Read paragraph 5. Then read paragraph 6 to see what Lily does and what happens because of it.",
          "Lily never lifts the rock, so that choice does not fit Part A. For Part B, the sentence you choose must match your Part A answer."
        ],
        how: [
          "In paragraph 5, Lily reaches for the rock, and Dad tells her that it is the crab's house.",
          "In paragraph 6, she pulls her hand back and watches. After a while, the crab comes out and waves a claw.",
          "Part A: Lily leaves the rock alone, so she gets to see the crab come out. Part B: \"After a while, the crab crept out and waved one claw, as if it were saying hello.\"",
          "Check the others: she never lifts the rock, she is not scared, and nobody takes a picture. The crab hiding and Lily reaching happen before Dad speaks."
        ],
        misconception: "A common mix-up is choosing an event that happens before the words. A result has to come after them.",
        why: "Part A: Lily leaves the rock alone, so she gets to see the crab come out. Part B: \"After a while, the crab crept out and waved one claw, as if it were saying hello.\" Dad's words make Lily pull her hand back and watch, and because she waits, the crab comes out. The crab hiding and Lily reaching come before Dad speaks." },
      { id: "SK-TT1a-C13", type: "mc", points: 1, dok: 3, std: ["3.T.T.1.a"], passages: ["p5"],
        prompt: "Read this sentence from paragraph 7: \"Far out, the waves began to roll back in.\" How does this description help the story?",
        choices: [
          { text: "It shows the visit is ending, because water will soon cover the pool.", correct: true },
          { text: "It warns that a big storm is about to hit the beach." },
          { text: "It shows that Lily is afraid of the big ocean waves." },
          { text: "It explains how the crab built its home under the rock." }
        ],
        clue: "Description can do more than help you picture a place. It can also show that something in the plot is about to change.",
        hints: [
          "Description can do more than help you picture a place. It can also show that something in the plot is about to change.",
          "Compare the beach in paragraph 1 with the beach in paragraph 7. What has changed?",
          "Nothing in the story tells about a storm, so that choice has no support. Read what Dad and Lily do right after this sentence, and test the choices that are left."
        ],
        how: [
          "In paragraph 1, the beach is at low tide, so the water is far out and the rocky pools are uncovered.",
          "In paragraph 7, the waves roll back in. The tide is coming up, and soon the tide pool will be under water.",
          "Right after, Dad says it is time to go, and Lily races the water up the beach.",
          "The answer is \"It shows the visit is ending, because water will soon cover the pool.\" There is no storm, Lily is having fun rather than feeling afraid, and the sentence says nothing about how the crab's home was made."
        ],
        misconception: "A common mix-up is thinking description only tells what a place looks like. Here it signals that the story is about to end.",
        why: "The answer is \"It shows the visit is ending, because water will soon cover the pool.\" The story starts at low tide, and now the water is coming back, so Dad says it is time to go. There is no storm, Lily races the water for fun, and nothing explains how the crab's home was made." },
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
        clue: "To compare how two stories are written, look at the same part of each story, like the beginning or the ending. A sentence must be true for both.",
        hints: [
          "To compare how two stories are written, look at the same part of each story, like the beginning or the ending. A sentence must be true for both.",
          "Reread the first paragraph and the last paragraph of each story. Choose two.",
          "Only one story has a grown-up who hides notes, so that sentence fits just one story. Check each other sentence against both stories the same way."
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
        stem: ["A writer is working on a story about Jada. Jada sewed a square for her neighborhood's new quilt, and she is proud of it. The writer wants to show Jada's feeling instead of just telling it."],
        prompt: "Which TWO sentences would best show that Jada is proud?",
        choices: [
          { text: "Jada held up her square so everyone in the room could see it.", correct: true },
          { text: "Jada grinned from ear to ear as she pinned her square to the quilt.", correct: true },
          { text: "Jada felt very proud of the square that she had sewn." },
          { text: "Jada's square had stripes of red, yellow and bright green." },
          { text: "\"Where should I put my square?\" Jada asked the others." }
        ],
        clue: "Writers show a feeling with what a character does, instead of naming the feeling. Look for sentences where you can see the feeling without being told.",
        hints: [
          "Writers show a feeling with what a character does, instead of naming the feeling. Look for sentences where you can see the feeling without being told.",
          "Picture each sentence. Can you see what Jada does, or are you only told about her? Choose two.",
          "The stripes help you picture the square, but they do not show anything about Jada's feelings. Check each other sentence the same way."
        ],
        how: [
          "Showing means the reader sees what a character does and can tell the feeling without being told.",
          "Holding her square up for everyone to see, and grinning from ear to ear, are actions that show pride.",
          "The answers are \"Jada held up her square so everyone in the room could see it.\" and \"Jada grinned from ear to ear as she pinned her square to the quilt.\"",
          "\"Jada felt very proud\" tells the feeling instead of showing it. The stripes describe the square, and her question does not show a feeling."
        ],
        misconception: "A common mix-up is choosing the sentence that names the feeling. Naming a feeling tells it; an action shows it.",
        why: "The answers are \"Jada held up her square so everyone in the room could see it.\" and \"Jada grinned from ear to ear as she pinned her square to the quilt.\" Both are actions that show pride. \"Jada felt very proud\" only tells the feeling, the stripes describe the square, and her question does not show a feeling." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short new scene. `like` lists only the
     core items each one really practises. */
  similar: [
    { id: "SK-TT1a-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.1.a"], passages: [],
      like: ["SK-TT1a-P4", "SK-TT1a-C04"],
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
        "Find the problem first. Then read what happens after Marco speaks.",
        "The paint runs out before Marco says anything, so his words do not start the problem. Test each choice that is left."
      ],
      how: [
        "The problem: the blue paint runs out, and Ms. Tran thinks they must stop.",
        "Marco says his aunt has extra paint. That afternoon, she brings two cans.",
        "The answer is \"They give the class a way to get more paint and keep going.\"",
        "The paint ran out before he spoke, he wants to help, and his words say nothing about where the playground is."
      ],
      misconception: "A common mix-up is choosing the event that starts a problem when the words come later and help fix it.",
      why: "The answer is \"They give the class a way to get more paint and keep going.\" After Marco speaks, his aunt brings two cans of paint. The paint ran out before he spoke, he wants to help, and he says nothing about the playground." }
  ],
  /* Hints and Show me how for the items kept in practice: refs P4 and P5 (core set 1) and Together P1-P3. */
  addons: {
    "SK-TT1a-P1": {
      hints: [
        "Description helps you picture the setting. Ask what the sound words and the weather words help you picture.",
        "Read paragraph 1 again. What do you hear, and what is hitting the windows?",
        "Mateo is in the middle of his favorite show when the screen goes black, so he is not bored. Test each choice that is left against paragraph 1."
      ],
      how: [
        "Paragraph 1 says thunder booms over Atlanta and rain beats against the windows.",
        "Then the screen goes black and the whole room goes dark, which can happen in a big storm.",
        "The answer is \"A strong storm is going on outside.\"",
        "Mateo is enjoying his show, Abuela is not in paragraph 1, and the story says the apartment is in Atlanta, a city."
      ],
      misconception: "A common mix-up is choosing a detail about a character when the question asks what the description of the place shows." },
    "SK-TT1a-P2": {
      hints: [
        "The writer does not say how Mateo feels. Look at what his voice and his body do right after the room goes dark.",
        "Read paragraph 2. Choose two sentences for Part B.",
        "Tapping his feet happens later, once the music is playing, so it does not show how he first feels. For Part B, both sentences must match your Part A answer."
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
        "Think about how Mateo feels by the end of the night. Then find a line he says that matches that feeling.",
        "The two lines in paragraph 3 are Abuela's words, not Mateo's. Check each line that is left: does it show that Mateo had fun?"
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
      "Characters are the people or animals in the story. The main character is the one the story is mostly about. Other characters have jobs in the plot, too: one might cause the trouble, and a helper might make the solution possible.",
      "The setting is where and when the story happens, like a farm on a rainy morning.",
      "The problem is what goes wrong or what a character wants but cannot get yet. The solution is how the problem is fixed by the end. Near the end, look for proof that the fix worked, and check that the whole problem is fixed, not just part of it.",
      "Clue words help you follow a story. One day often starts the action. But often shows the problem. Then and so show what the character tries. Finally and in the end lead you to the solution. To sum up any story, say: Somebody (the main character) Wanted something, But (the problem), So (what the character does), Then (how it ends).",
      "Story parts work together to make things happen. Ask: How does the place or the time change what happens? How does the problem make the character act? A rainy night, a faraway place or not having enough time can cause the trouble or make it harder to fix. When a first try does not work, ask what is really causing the problem."
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
       compare item (C14); p4 only by core set 3. Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p3", title: "The Ice Cube Challenge", genre: "Literary text",
      paragraphs: [
        ["The air conditioner at Pine Street School broke on the hottest day of August.", "Room 6 felt like an oven, even with every window open."],
        ["\"Here is today's science challenge,\" said Ms. Banks.", "\"Keep your ice cube from melting until the lunch bell rings.\"", "Each team got two ice cubes and a box of supplies: paper cups, foil, tape and an old wool sock."],
        ["Bryce set his team's first cube in a paper cup on the sunny windowsill.", "\"It can sit in the fresh air,\" he said.", "But the sun beat down on the glass, and in ten minutes the cube was a puddle."],
        ["Now there was only one cube left.", "Ana thought hard.", "\"Wool keeps my feet warm in winter, so maybe it can keep the heat out, too,\" she said slowly."],
        ["She wrapped the last cube in foil and tucked it inside the sock.", "Then Bryce set the sock in a shady corner under his desk."],
        ["When the lunch bell rang, the other teams had cups of water.", "Ana unrolled the sock.", "Inside sat a small ice cube, still cold and shiny."],
        ["\"You were right about the sock,\" Bryce said.", "Ms. Banks smiled and gave their team the first gold star of the year."]
      ] },
    { id: "p4", title: "The Hidden Peach Stand", genre: "Literary text",
      paragraphs: [
        ["Grandpa Joe's peach stand sat at the end of a long dirt road outside Fort Valley, Georgia.", "Tall pine trees hid it from the highway."],
        ["One July morning, the stand was piled high with ripe peaches.", "But by noon, not one car had come down the road.", "\"If we don't sell these soon, they'll get soft and spoil,\" Grandpa sighed."],
        ["Malia and her cousin Dre wanted to help.", "First, Dre painted PEACHES in giant red letters on a sign and hung it on the front of the stand.", "They waited and waited.", "Still, no cars came."],
        ["Malia walked all the way out to the highway and looked back.", "All she could see were pine trees.", "\"Nobody can see our sign from here,\" she called."],
        ["So the cousins painted big arrows on three old boards.", "They pushed the boards into the ground beside the highway, right where the dirt road began."],
        ["Within an hour, a blue truck turned onto the dirt road.", "Then came a van, and then two more cars."],
        ["By sunset, every basket was empty.", "Grandpa Joe gave each cousin the last two peaches.", "\"Best helpers in Georgia,\" he said."]
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
      why: "The answer is \"When a plan goes wrong, a new idea can still save the day.\" Rain spoils the outdoor plan, but Kiana thinks of the covered porch, and the picnic goes on. Eating on the porch is an event, the rain does not ruin the day, and the story never says to check the weather." }
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
      "Look at the same part in both stories. Who is the main character? Where does it happen? What events happen, and what is the problem? What is the lesson?",
      "Two stories can have very different characters and settings but teach the same lesson.",
      "You will often compare stories from different places and cultures, like a story from Ghana and a story from Vermont. Notice what is different about each place and way of life, and what the characters feel and learn that is the same.",
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
