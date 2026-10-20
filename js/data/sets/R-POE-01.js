PP.addSet({
  id: "R-POE-01",
  section: "reading",
  kind: "poetry",
  title: "Fireflies",
  blurb: "A poem and a short story about fireflies on a summer evening.",
  passages: [
    { id: "p1", title: "Fireflies", byline: "",
      genre: "Poem", lexile: "not measured (poem)",
      paragraphs: null,
      lines: [
        ["When summer sun has slipped away",
         "And evening comes to end the day,",
         "The yard grows dark, the air is still,",
         "And crickets sing from hill to hill."],
        ["Then, one by one, the fireflies glow",
         "Like tiny lanterns, soft and low.",
         "They blink their lights above the grass",
         "And wink at me each time they pass."],
        ["The yard becomes a sky of stars,",
         "Not far away like moon or Mars,",
         "But close enough for me to see",
         "Each little spark that drifts by me."],
        ["I do not need a jar tonight.",
         "I'd rather watch them, free and bright.",
         "I'll sit right here upon the stair",
         "And count the stars that dance on air."]
      ]
    },
    { id: "p2", title: "The Firefly Jar", byline: "",
      genre: "Literary text", lexile: "about 550L (estimate)",
      paragraphs: [
        ["On a warm summer evening, Marcus sat on the back step with an empty glass jar.",
         "His little sister, Lila, was afraid of the dark.",
         "Every night she asked Mom to leave the hall light on, and every night she still lay awake for a long time.",
         "Marcus had a plan.",
         "He would fill the jar with fireflies and set it beside her bed as a night-light."],
        ["As the sky turned purple, the first firefly blinked near the fence.",
         "Soon there were more.",
         "Marcus looked out at the yard, where hundreds of tiny lights were flickering over the grass.",
         "He stood up and held the open jar toward a firefly that floated close to the step.",
         "Then he stopped.",
         "One firefly in a jar would make only one small light in a dark bedroom.",
         "Out here, the whole yard was shining, from the grass all the way up to the branches of the oak tree."],
        ["Marcus set the jar down and went inside.",
         "Lila was sitting on her bed with her blanket pulled up to her chin.",
         "\"Come see something,\" he said.",
         "\"I'll hold your hand the whole time.\"",
         "Lila took his hand and walked slowly to the back door.",
         "At the top of the step, she squeezed his fingers tight.",
         "Then she saw the yard."],
        ["\"It's not dark at all out here,\" Lila whispered.",
         "The two of them sat on the step and counted lights until they lost track.",
         "Lila giggled every time one blinked near her knees.",
         "That night, she fell asleep without asking for the hall light.",
         "The glass jar stayed on the back step, still empty, and Marcus did not mind one bit."]
      ],
      lines: null
    }
  ],
  items: [
    {
      id: "R-POE-01-q1", type: "mc", points: 1, std: ["3.T.T.4.a"], dok: 1,
      prompt: "Which sentence best describes the rhyme pattern in the poem \"Fireflies\"?",
      choices: [
        { text: "In each stanza, lines 1 and 2 rhyme, and lines 3 and 4 rhyme.", correct: true },
        { text: "In each stanza, only lines 2 and 4 rhyme with each other." },
        { text: "In each stanza, only the first and last lines rhyme." },
        { text: "None of the lines rhyme, but they all have the same beat." }
      ],
      clue: "Read the last word of each line in one stanza out loud. Then check that the same pattern works in the other stanzas.",
      why: "In each stanza, lines 1 and 2 rhyme, and lines 3 and 4 rhyme. For example, in stanza 1, away rhymes with day, and still rhymes with hill."
    },
    {
      id: "R-POE-01-q2", type: "mc", points: 1, std: ["3.T.T.4.a"], dok: 2,
      prompt: "How does stanza 1 help the poem?",
      choices: [
        { text: "It sets the scene: a quiet, dark evening before the fireflies come out.", correct: true },
        { text: "It explains why the speaker does not want to catch the fireflies in a jar." },
        { text: "It describes what the fireflies look like when they come close to the speaker." },
        { text: "It shows that the speaker is afraid of the yard when the sun goes down." }
      ],
      clue: "Notice what stanza 1 talks about and what it does not talk about yet. Is anything glowing in stanza 1?",
      why: "The answer is \"It sets the scene: a quiet, dark evening before the fireflies come out.\" Stanza 1 shows the sun going down and the dark, still yard, so the fireflies' glow in stanza 2 stands out. The fireflies and the jar do not appear until later stanzas."
    },
    {
      id: "R-POE-01-q3", type: "match", points: 2, std: ["3.T.SS.2.a"], dok: 2,
      prompt: "The poet uses figurative language to describe the fireflies. Match each line from the poem to what it means. Use each meaning once.",
      cols: [
        "The fireflies shine with a soft, gentle light.",
        "The fireflies seem to flash their lights at the speaker in a playful way.",
        "The fireflies' lights look like little stars bouncing through the air.",
        "Each firefly's light floats slowly past the speaker."
      ],
      rows: [
        { text: "\"Each little spark that drifts by me.\"", answer: 3 },
        { text: "\"Like tiny lanterns, soft and low.\"", answer: 0 },
        { text: "\"And count the stars that dance on air.\"", answer: 2 },
        { text: "\"And wink at me each time they pass.\"", answer: 1 }
      ],
      clue: "For each line, picture what the poet describes. What do the fireflies look like, or what are they doing? Then find the meaning that matches that picture.",
      why: "A little spark that drifts by is one light floating slowly past. Tiny lanterns that are soft and low give a gentle light. The stars that dance on air are the fireflies, bouncing like little stars. Winking is a playful flash."
    },
    {
      id: "R-POE-01-q4", type: "hottext", points: 1, std: ["3.T.SS.2.a"], dok: 2,
      prompt: "Select the line in stanzas 2 and 3 that uses a metaphor to show how the whole place looks when the fireflies glow. A metaphor compares two things without using like or as.",
      source: "p1",
      targets: ["p1:2:1", "p1:2:2", "p1:2:3", "p1:2:4", "p1:3:1", "p1:3:2", "p1:3:3", "p1:3:4"],
      answer: ["p1:3:1"],
      pick: 1,
      clue: "A metaphor says one thing IS or BECOMES something else, without like or as. Rule out lines that use like or as. Then ask which line is about the whole place, not one firefly.",
      why: "The answer is \"The yard becomes a sky of stars.\" It says the whole yard becomes a sky without using like or as. \"Like tiny lanterns\" uses like, so it is a simile. \"Each little spark that drifts by me\" is about one firefly at a time, not the whole place."
    },
    {
      id: "R-POE-01-q5", type: "ebsr", points: 2, std: ["3.T.C.2.a", "3.T.RA.2.a"], dok: 3,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "How does the speaker of the poem feel about the fireflies?",
        choices: [
          { text: "The speaker enjoys watching them and wants them to stay free.", correct: true },
          { text: "The speaker wants to catch them and keep them as pets." },
          { text: "The speaker is bothered by their blinking lights at night." },
          { text: "The speaker thinks they are not as pretty as the real stars." }
        ]
      },
      partB: {
        prompt: "Which line from the poem best supports the answer to Part A?",
        choices: [
          { text: "I'd rather watch them, free and bright.", correct: true },
          { text: "Then, one by one, the fireflies glow" },
          { text: "They blink their lights above the grass" },
          { text: "Not far away like moon or Mars," }
        ]
      },
      clue: "The speaker is the I in the poem. Look for lines that tell what the speaker chooses to do, not just what the fireflies do. For Part B, pick the line that shows how the speaker feels.",
      why: "Part A: The speaker enjoys watching the fireflies and wants them to stay free. Part B: The line \"I'd rather watch them, free and bright\" shows the speaker would rather watch them than catch them. The other lines describe the fireflies, not the speaker's feelings."
    },
    {
      id: "R-POE-01-q6", type: "dropdown", points: 1, std: ["3.L.V.3.a"], dok: 2,
      prompt: "Read this sentence from \"The Firefly Jar\": \"Marcus looked out at the yard, where hundreds of tiny lights were flickering over the grass.\" Choose the meaning of flickering.",
      text: "In \"The Firefly Jar,\" the word flickering means {0}.",
      slots: [
        { options: ["flashing on and off", "falling to the ground", "hiding in the grass", "making a buzzing sound"], answer: 0 }
      ],
      clue: "Use the clues around the word. The tiny lights are fireflies over the grass at night. Try each choice in the sentence and ask which one makes sense for a firefly's light.",
      why: "Flickering means flashing on and off. The lights are fireflies, and in paragraph 2 the first firefly \"blinked near the fence.\" The poem says the same thing: \"They blink their lights above the grass.\""
    },
    {
      id: "R-POE-01-q7", type: "mc", points: 1, std: ["3.T.T.1.d", "3.T.C.2.a"], dok: 3,
      prompt: "How is Marcus in \"The Firefly Jar\" different from the speaker in \"Fireflies\"?",
      choices: [
        { text: "Marcus first plans to catch fireflies in a jar, but the speaker would rather watch them.", correct: true },
        { text: "Marcus keeps a firefly in his jar all night, but the speaker lets the fireflies go free." },
        { text: "Marcus is afraid of the dark, but the speaker loves to sit outside and watch at night." },
        { text: "Marcus counts the fireflies all alone, but the speaker counts them with a little sister." }
      ],
      clue: "Check each part of each choice against BOTH texts. A choice is right only if every part of it is true.",
      why: "The answer is \"Marcus first plans to catch fireflies in a jar, but the speaker would rather watch them.\" Marcus plans to fill the jar to make a night-light for Lila, then changes his mind. The speaker says, \"I'd rather watch them, free and bright.\" Marcus never catches a firefly, Lila (not Marcus) is afraid of the dark, and Marcus counts the lights with Lila, not alone."
    },
    {
      id: "R-POE-01-q8", type: "ms", points: 1, std: ["3.T.T.1.d"], dok: 3,
      prompt: "Which TWO ideas are found in BOTH the poem and the story? Choose two answers.",
      pick: 2,
      choices: [
        { text: "The fireflies glow outside on a summer evening.", correct: true },
        { text: "Someone decides not to put fireflies in a jar.", correct: true },
        { text: "Fireflies are compared to tiny lanterns." },
        { text: "A little sister is afraid of the dark." },
        { text: "A firefly is kept in a jar all night long." },
        { text: "Crickets sing while the fireflies glow." }
      ],
      clue: "For each choice, find it in the poem, then find it in the story. Keep only the choices you can find in both.",
      why: "The answers are \"The fireflies glow outside on a summer evening\" and \"Someone decides not to put fireflies in a jar.\" Both texts take place on a summer evening when fireflies glow. The speaker says, \"I do not need a jar tonight,\" and Marcus sets his jar down and leaves it empty. The lanterns and the crickets are only in the poem, Lila's fear of the dark is only in the story, and no firefly is kept in a jar in either text."
    }
  ]
});
