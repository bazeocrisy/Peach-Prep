/*
 * R-INF-02 — Paired informational texts (Georgia social studies): the Okefenokee Swamp.
 *   p1 "People of the Okefenokee"     — history angle (how people lived in and used the swamp)
 *   p2 "The Land of Trembling Earth"  — place angle (what the swamp is like)
 *
 * REFERENCE NOTE: sentence references ("p1:<paragraph>:<sentence>") count EVERY entry in the
 * paragraphs array, 1-based, including any headings ("## ...") or captions ("Caption: ...").
 * Neither passage in this set has headings or captions, so array numbers and the
 * child-visible paragraph numbers are the same.
 */
PP.addSet({
  id: "R-INF-02",
  section: "reading",
  kind: "paired",
  title: "The Okefenokee Swamp",
  blurb: "Two short articles about Georgia's Okefenokee Swamp: its history, and what it is like today.",
  passages: [
    {
      id: "p1",
      title: "People of the Okefenokee",
      byline: "",
      genre: "Informational text",
      lexile: "about 640L (estimate)",
      paragraphs: [
        [
          "The Okefenokee Swamp covers a huge area of southeast Georgia and stretches into northern Florida.",
          "It is one of the largest swamps in North America.",
          "Over thousands of years, many different groups of people have lived in the swamp or used it."
        ],
        [
          "Long ago, Native American people lived on the swamp's islands and along its edges.",
          "They fished, hunted, and gathered plants for food.",
          "Much later, in the 1800s, settler families moved onto some of the islands.",
          "These families were known as swampers.",
          "They grew vegetables, raised animals, and traveled through the swamp in small boats."
        ],
        [
          "In the late 1800s, a company tried to drain the water out of the swamp by digging a long canal.",
          "The company wanted to cut the trees and turn the swamp into farmland.",
          "The plan was unsuccessful, and the company gave up after a few years."
        ],
        [
          "In the early 1900s, loggers built railroad tracks into the swamp.",
          "They cut down many of the swamp's giant old cypress trees and sold the wood."
        ],
        [
          "People began to worry that the swamp and its animals could be lost.",
          "In 1937, the United States government made most of the swamp a national wildlife refuge, a place where plants and animals are protected.",
          "Since then, young cypress trees have slowly begun to regrow."
        ]
      ],
      lines: null
    },
    {
      id: "p2",
      title: "The Land of Trembling Earth",
      byline: "",
      genre: "Informational text",
      lexile: "about 620L (estimate)",
      paragraphs: [
        [
          "The name Okefenokee comes from a Native American word.",
          "It is often said to mean \"land of trembling earth.\"",
          "Visitors who explore the swamp soon learn how it got this name."
        ],
        [
          "Much of the swamp is covered by peat, a thick layer of old, wet plant matter.",
          "In some places, the peat floats on top of the water.",
          "Plants and even small trees grow on these floating islands.",
          "When a person steps on one, the ground and the trees around it shake."
        ],
        [
          "The swamp's water is another surprise.",
          "It looks dark brown, almost like a cup of tea.",
          "This happens because fallen leaves and plants soak in the water and color it, the way a tea bag colors hot water.",
          "On a calm day, the dark water reflects the trees and clouds like a mirror."
        ],
        [
          "The Okefenokee is home to many animals.",
          "Alligators rest on logs in the sun, and turtles swim in the quiet water.",
          "More than two hundred kinds of birds, including tall sandhill cranes, can be seen there."
        ],
        [
          "Today, the swamp is a national wildlife refuge, so its plants and animals are protected.",
          "Visitors can paddle canoes along water trails or walk on long wooden boardwalks.",
          "In these ways, people can see the swamp up close without harming it."
        ]
      ],
      lines: null
    }
  ],
  items: [
    {
      id: "R-INF-02-1",
      type: "mc",
      points: 1,
      std: ["3.T.T.2.a"],
      dok: 2,
      prompt: "What is the main idea of \"People of the Okefenokee\"?",
      choices: [
        { text: "People have lived in and used the Okefenokee Swamp in different ways over time.", correct: true },
        { text: "Swamper families grew vegetables and traveled through the swamp in small boats." },
        { text: "A company tried to turn the swamp into farmland, but its plan did not work." },
        { text: "Loggers built railroad tracks into the swamp to reach the giant cypress trees." }
      ],
      clue: "Which choice fits EVERY paragraph of the passage, not just one of them?",
      why: "The main idea is \"People have lived in and used the Okefenokee Swamp in different ways over time.\" Each paragraph tells about a different group: Native Americans, swampers, a company, loggers, and finally the government. The other choices each tell about only one paragraph."
    },
    {
      id: "R-INF-02-2",
      type: "order",
      points: 2,
      std: ["3.T.T.2.b"],
      dok: 2,
      prompt: "Put these events from \"People of the Okefenokee\" in the order they happened. Drag the earliest event to the top.",
      steps: [
        "Native American people fish and hunt in the swamp.",
        "A company digs a canal to try to drain the swamp.",
        "Loggers cut down many giant cypress trees.",
        "The swamp becomes a national wildlife refuge."
      ],
      clue: "Look for time words in each paragraph, such as Long ago, the late 1800s, the early 1900s, and 1937.",
      why: "\"Long ago\" Native Americans fished and hunted. In \"the late 1800s\" a company dug a canal. In \"the early 1900s\" loggers cut the cypress trees. In 1937 the swamp became a refuge."
    },
    {
      id: "R-INF-02-3",
      type: "dropdown",
      points: 1,
      std: ["3.L.V.2.a"],
      dok: 1,
      prompt: "Read this sentence from paragraph 5 of \"People of the Okefenokee.\"\n\n\"Since then, young cypress trees have slowly begun to regrow.\"\n\nChoose the answer that completes the sentence.",
      text: "The prefix re- tells you that the word regrow means to grow {0}.",
      slots: [
        { options: ["again", "too fast", "for the first time", "before"], answer: 0 }
      ],
      clue: "Think of other words that start with re-, such as reread and refill. What does re- add to each word?",
      why: "Regrow means to grow again. The prefix re- means \"again,\" just like reread means to read again. The trees were cut down, and now new ones are growing again."
    },
    {
      id: "R-INF-02-4",
      type: "hottext",
      points: 1,
      std: ["3.T.RA.2.a", "3.T.T.2.b"],
      dok: 2,
      prompt: "Read paragraphs 4 and 5 of \"People of the Okefenokee.\" Select the sentence that best explains WHY the swamp was made a wildlife refuge.",
      source: "p1",
      targets: ["p1:4:1", "p1:4:2", "p1:5:1", "p1:5:2", "p1:5:3"],
      answer: ["p1:5:1"],
      pick: 1,
      clue: "One sentence tells WHAT happened in 1937. Look for the sentence that tells the reason it happened.",
      why: "The answer is \"People began to worry that the swamp and its animals could be lost.\" That worry is the reason. The sentence about 1937 tells what the government did, but not why."
    },
    {
      id: "R-INF-02-5",
      type: "ebsr",
      points: 2,
      std: ["3.T.T.2.b", "3.T.RA.2.a"],
      dok: 2,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "Part A: In \"The Land of Trembling Earth,\" why does the ground shake when a person steps on it in some parts of the swamp?",
        choices: [
          { text: "The ground there is peat that floats on top of the water.", correct: true },
          { text: "The roots of tall cypress trees push up through the soil." },
          { text: "Water from a long canal makes the ground soft and muddy." },
          { text: "Fallen leaves soak in the water and turn it dark brown." }
        ]
      },
      partB: {
        prompt: "Part B: Which sentence from \"The Land of Trembling Earth\" best supports the answer to Part A?",
        choices: [
          { text: "It is often said to mean \"land of trembling earth.\"" },
          { text: "In some places, the peat floats on top of the water.", correct: true },
          { text: "This happens because fallen leaves and plants soak in the water and color it, the way a tea bag colors hot water." },
          { text: "Visitors can paddle canoes along water trails or walk on long wooden boardwalks." }
        ]
      },
      clue: "Find the paragraph that tells about the shaking ground. Read the sentences just before the one about stepping.",
      why: "Part A: The answer is \"The ground there is peat that floats on top of the water.\" Part B: \"In some places, the peat floats on top of the water\" shows this. The canal is from the other passage, and the fallen leaves explain the dark water, not the shaking."
    },
    {
      id: "R-INF-02-6",
      type: "ms",
      points: 2,
      pick: 2,
      std: ["3.T.T.2.c"],
      dok: 3,
      prompt: "Which TWO ideas are found in BOTH passages? Choose two answers.",
      choices: [
        { text: "The swamp is now a wildlife refuge where plants and animals are protected.", correct: true },
        { text: "Native American people are part of the swamp's history.", correct: true },
        { text: "A company once tried to drain the swamp by digging a long canal." },
        { text: "The swamp's water looks dark brown, almost like a cup of tea." },
        { text: "Loggers cut down many of the swamp's giant old cypress trees." },
        { text: "Visitors can paddle canoes along water trails through the swamp." }
      ],
      clue: "For each choice, check BOTH passages. Keep a choice only if you can find it in passage 1 AND in passage 2.",
      why: "The answers are \"The swamp is now a wildlife refuge where plants and animals are protected\" and \"Native American people are part of the swamp's history.\" Both passages tell about the refuge. Both also include Native American people: passage 1 tells that they lived in the swamp, and passage 2 tells that the name Okefenokee comes from a Native American word. The canal and the loggers are only in passage 1. The tea-colored water and the canoes are only in passage 2."
    },
    {
      id: "R-INF-02-7",
      type: "match",
      points: 2,
      std: ["3.T.T.2.c"],
      dok: 2,
      prompt: "Where can you find each piece of information? Match each row to Passage 1 only, Passage 2 only, or Both passages.",
      cols: ["Passage 1 only", "Passage 2 only", "Both passages"],
      rows: [
        { text: "how the swamp got its name", answer: 1 },
        { text: "what happened when a company dug a canal", answer: 0 },
        { text: "that the swamp became a wildlife refuge", answer: 2 },
        { text: "why the ground shakes in some places", answer: 1 },
        { text: "how settler families lived on the islands", answer: 0 }
      ],
      clue: "Passage 1 tells about people and events over time. Passage 2 describes the swamp itself. Check both before you choose Both passages.",
      why: "Passage 2 only: how the swamp got its name, and why the ground shakes. Passage 1 only: the canal, and the swamper families. Both passages: the swamp became a wildlife refuge."
    },
    {
      id: "R-INF-02-8",
      type: "mc",
      points: 1,
      std: ["3.T.RA.2.b", "3.T.T.2.c"],
      dok: 3,
      prompt: "Lena is writing a report about how the Okefenokee Swamp has changed over time. Which passage would be MORE useful for her report, and why?",
      choices: [
        { text: "Passage 1, because it tells what people did in the swamp from long ago to 1937.", correct: true },
        { text: "Passage 2, because it explains how the swamp got its name from a Native American word." },
        { text: "Passage 1, because it describes the birds and other animals that live in the swamp." },
        { text: "Passage 2, because it tells how visitors can explore the swamp on boardwalks today." }
      ],
      clue: "First think about Lena's topic: change over time. Then check that the reason in your choice is really true about that passage.",
      why: "The answer is \"Passage 1, because it tells what people did in the swamp from long ago to 1937.\" That is how the swamp changed over time. Passage 2 mostly describes the swamp as it is, and passage 1 does not describe the animals."
    }
  ]
});
