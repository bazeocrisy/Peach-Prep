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
        ["The field becomes a sky of stars,",
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
      genre: "Literary text", lexile: "about 600L (estimate)",
      paragraphs: [
        ["On a warm summer evening, Marcus raced across the backyard with a glass jar.",
         "\"Got one!\" he shouted, twisting the lid shut.",
         "Inside, a firefly crawled up the glass and flashed its yellow light.",
         "Marcus set the jar on the porch step and waited for it to glow again.",
         "He waited and waited, but the firefly only sat in the corner of the jar.",
         "Marcus looked out at the yard, where hundreds of tiny lights were flickering over the grass.",
         "Then he looked back at the single firefly in his jar, all alone.",
         "He unscrewed the lid and tipped the jar toward the lawn.",
         "The firefly climbed to the rim, opened its wings, and drifted off to join the others.",
         "\"That's better,\" Marcus whispered."]
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
        { text: "It sets the scene by showing the quiet, dark evening before the fireflies come out.", correct: true },
        { text: "It explains why the speaker does not want to catch the fireflies in a jar." },
        { text: "It describes what the fireflies look like when they come close to the speaker." },
        { text: "It shows that the speaker is afraid of the yard when the sun goes down." }
      ],
      clue: "Notice what stanza 1 talks about and what it does not talk about yet. Is anything glowing in stanza 1?",
      why: "Stanza 1 sets the scene. It shows the sun going down and the dark, still yard, so the fireflies' glow in stanza 2 stands out. The fireflies and the jar do not appear until later stanzas."
    },
    {
      id: "R-POE-01-q3", type: "match", points: 2, std: ["3.T.SS.2.a"], dok: 2,
      prompt: "The poet uses figurative language to describe the fireflies. Match each line from the poem to what it means. Use each meaning once.",
      cols: [
        "The fireflies shine with a soft, gentle light.",
        "The fireflies seem to flash their lights at the speaker in a playful way.",
        "The field is so full of lights that it looks like the night sky.",
        "One firefly's light floats slowly past the speaker."
      ],
      rows: [
        { text: "\"Like tiny lanterns, soft and low.\"", answer: 0 },
        { text: "\"And wink at me each time they pass.\"", answer: 1 },
        { text: "\"The field becomes a sky of stars,\"", answer: 2 },
        { text: "\"Each little spark that drifts by me.\"", answer: 3 }
      ],
      clue: "For each line, ask: what real thing is the poet comparing the fireflies to? Then think about what the fireflies and that thing have in common.",
      why: "Tiny lanterns that are soft and low give a gentle light. Winking is a playful flash. A sky of stars means the field is full of lights. A little spark that drifts is one light floating slowly by."
    },
    {
      id: "R-POE-01-q4", type: "hottext", points: 1, std: ["3.T.SS.2.a"], dok: 2,
      prompt: "Select the line in stanzas 2 and 3 that uses a metaphor to describe the field. A metaphor compares two things without using like or as.",
      source: "p1",
      targets: ["p1:2:1", "p1:2:2", "p1:2:3", "p1:2:4", "p1:3:1", "p1:3:2", "p1:3:3", "p1:3:4"],
      answer: ["p1:3:1"],
      pick: 1,
      clue: "First find the line that talks about the field. Then check: does it say the field IS or BECOMES something else, without like or as?",
      why: "The answer is \"The field becomes a sky of stars.\" It says the field becomes a sky without using like or as. \"Like tiny lanterns\" uses like, so it is a simile, and it describes the fireflies, not the field."
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
          { text: "The yard grows dark, the air is still," },
          { text: "And crickets sing from hill to hill." },
          { text: "Not far away like moon or Mars," }
        ]
      },
      clue: "The speaker is the I in the poem. Read stanza 4 closely. What does the speaker choose to do, and why?",
      why: "Part A: The speaker enjoys watching the fireflies and wants them to stay free. Part B: The line \"I'd rather watch them, free and bright\" shows the speaker would rather watch them than catch them."
    },
    {
      id: "R-POE-01-q6", type: "dropdown", points: 1, std: ["3.L.V.3.a"], dok: 2,
      prompt: "Read this sentence from \"The Firefly Jar\": \"Marcus looked out at the yard, where hundreds of tiny lights were flickering over the grass.\" Choose the meaning of flickering.",
      text: "In \"The Firefly Jar,\" the word flickering means {0}.",
      slots: [
        { options: ["flashing on and off", "falling to the ground", "hiding in the grass", "making a buzzing sound"], answer: 0 }
      ],
      clue: "The tiny lights are fireflies. Think about what a firefly's light does. The poem gives a hint too: look at stanza 2.",
      why: "Flickering means flashing on and off. The lights are fireflies, and fireflies blink, just like the poem says: \"They blink their lights above the grass.\""
    },
    {
      id: "R-POE-01-q7", type: "mc", points: 1, std: ["3.T.T.1.d", "3.T.C.2.a"], dok: 3,
      prompt: "How is Marcus in \"The Firefly Jar\" different from the speaker in \"Fireflies\"?",
      choices: [
        { text: "Marcus catches a firefly before he lets it go, but the speaker never catches one.", correct: true },
        { text: "Marcus wants to keep his firefly forever, but the speaker wants to let them go." },
        { text: "Marcus sits still on the porch, but the speaker runs across the yard with a jar." },
        { text: "Marcus is afraid of fireflies, but the speaker loves to watch them glow at night." }
      ],
      clue: "Check each part of each choice against BOTH texts. A choice is right only if every part of it is true.",
      why: "Marcus catches a firefly in a jar and then lets it go. The speaker says, \"I do not need a jar tonight,\" so the speaker never catches one. Marcus does not keep his firefly, and he is the one who runs with a jar."
    },
    {
      id: "R-POE-01-q8", type: "ms", points: 1, std: ["3.T.T.1.d"], dok: 3,
      prompt: "Which TWO ideas are found in BOTH the poem and the story? Choose two answers.",
      pick: 2,
      choices: [
        { text: "The fireflies glow outside on a summer evening.", correct: true },
        { text: "Fireflies are best when they are free.", correct: true },
        { text: "Fireflies are compared to tiny lanterns." },
        { text: "A child runs across the yard to catch a firefly." },
        { text: "A firefly is kept in a jar all night long." },
        { text: "Crickets sing while the fireflies glow." }
      ],
      clue: "For each choice, find it in the poem, then find it in the story. Keep only the choices you can find in both.",
      why: "Both texts take place on a summer evening when fireflies glow, and both show that fireflies are best when they are free. The lanterns and the crickets are only in the poem, and the running child is only in the story."
    }
  ]
});
