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
      lexile: "about 700L (estimate)",
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
          "The plan did not work, and the company gave up after a few years."
        ],
        [
          "In the early 1900s, loggers built railroad tracks into the swamp.",
          "They cut down many of the swamp's giant old cypress trees and sold the wood."
        ],
        [
          "As the giant trees disappeared, people began to worry that the swamp and its animals could be lost.",
          "In 1937, the United States government made most of the swamp a national wildlife refuge.",
          "A refuge is a place where plants and animals are protected."
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
          "Some language experts think the word may have meant \"bubbling water\" instead.",
          "Either way, visitors who explore the swamp soon see why \"trembling earth\" is a good fit."
        ],
        [
          "Much of the swamp is covered by peat, a thick layer of old, wet plant matter.",
          "In some places, the peat floats on top of the water.",
          "Plants and even small trees grow on these floating islands.",
          "When a person steps on one, the unsteady ground and the trees around it shake."
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
          "Today, most of the swamp is a national wildlife refuge, so its plants and animals are protected.",
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
      why: "The main idea is \"People have lived in and used the Okefenokee Swamp in different ways over time.\" After the introduction, the paragraphs tell about different people in time order: Native Americans and swampers, a company, loggers, and finally the government. Each of the other choices tells about only one paragraph."
    },
    {
      id: "R-INF-02-2",
      type: "order",
      points: 2,
      std: ["3.T.T.2.b"],
      dok: 2,
      prompt: "Put these events from \"People of the Okefenokee\" in the order they happened, earliest to latest.",
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
      prompt: "Read this sentence from paragraph 2 of \"The Land of Trembling Earth.\" Choose the answer that completes the sentence.",
      stem: "\"When a person steps on one, the unsteady ground and the trees around it shake.\"",
      text: "The prefix un- tells you that the word unsteady means {0}.",
      slots: [
        { options: ["not steady", "very steady", "steady again", "steady before"], answer: 0 }
      ],
      clue: "Think of other words that start with un-, such as unhappy and unkind. What does un- do to the word that follows it?",
      why: "Unsteady means not steady. The prefix un- means \"not,\" just like unhappy means not happy. Ground that shakes when you step on it is not steady."
    },
    {
      id: "R-INF-02-4",
      type: "hottext",
      points: 1,
      std: ["3.T.RA.2.a", "3.T.T.2.b"],
      dok: 2,
      prompt: "Read paragraphs 3, 4 and 5 of \"People of the Okefenokee.\" Select the sentence that best explains WHY the swamp was made a wildlife refuge.",
      source: "p1",
      targets: ["p1:3:3", "p1:4:1", "p1:5:1", "p1:5:2"],
      answer: ["p1:5:1"],
      pick: 1,
      clue: "One sentence tells WHAT happened in 1937. Look for the sentence that tells the reason it happened.",
      why: "The answer is \"As the giant trees disappeared, people began to worry that the swamp and its animals could be lost.\" It tells what was happening and the worry it caused, and that worry is the reason. The sentence about 1937 tells what the government did, but not why. The sentences about the canal and the railroad tracks tell earlier events, not the reason for the refuge."
    },
    {
      id: "R-INF-02-5",
      type: "ebsr",
      points: 2,
      std: ["3.T.T.2.b", "3.T.RA.2.a"],
      dok: 2,
      prompt: "This question has two parts. Answer Part A, then answer Part B.",
      partA: {
        prompt: "In \"The Land of Trembling Earth,\" why does the ground shake when a person steps on it in some parts of the swamp?",
        choices: [
          { text: "The ground there is peat that floats on top of the water.", correct: true },
          { text: "The roots of tall cypress trees push up through the soil." },
          { text: "Water from a long canal makes the ground soft and muddy." },
          { text: "Fallen leaves soak in the water and turn it dark brown." }
        ]
      },
      partB: {
        prompt: "Which sentence from \"The Land of Trembling Earth\" best supports the answer to Part A?",
        choices: [
          { text: "It is often said to mean \"land of trembling earth.\"" },
          { text: "In some places, the peat floats on top of the water.", correct: true },
          { text: "This happens because fallen leaves and plants soak in the water and color it, the way a tea bag colors hot water." },
          { text: "Visitors can paddle canoes along water trails or walk on long wooden boardwalks." }
        ]
      },
      clue: "Find the paragraph that tells about the shaking ground and read all of it. Then ask which choice tells the cause, not just what happens.",
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
        { text: "Most of the swamp is now a wildlife refuge where plants and animals are protected.", correct: true },
        { text: "The swamp has a connection to Native American people.", correct: true },
        { text: "A company once tried to drain the swamp by digging a long canal." },
        { text: "The swamp's water looks dark brown, almost like a cup of tea." },
        { text: "Loggers cut down many of the swamp's giant old cypress trees." },
        { text: "Visitors can paddle canoes along water trails through the swamp." }
      ],
      clue: "For each choice, check BOTH passages. Keep a choice only if you can find it in passage 1 AND in passage 2.",
      why: "The answers are \"Most of the swamp is now a wildlife refuge where plants and animals are protected\" and \"The swamp has a connection to Native American people.\" Both passages tell about the refuge. Both also include Native American people: passage 1 tells that they lived in the swamp, and passage 2 tells that the name Okefenokee comes from a Native American word. The canal and the loggers are only in passage 1. The tea-colored water and the canoes are only in passage 2."
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
        { text: "what the swamp's name is often said to mean", answer: 1 },
        { text: "what happened when a company dug a canal", answer: 0 },
        { text: "that the swamp has islands", answer: 2 },
        { text: "why the ground shakes in some places", answer: 1 },
        { text: "how settler families lived on the islands", answer: 0 }
      ],
      clue: "Passage 1 tells about people and events over time. Passage 2 describes the swamp itself. Check both before you choose Both passages.",
      why: "Passage 2 only: what the swamp's name is often said to mean, and why the ground shakes. Passage 1 only: the canal, and the swamper families. Both passages: the swamp has islands. Passage 1 tells about people living on the swamp's islands, and passage 2 tells about floating islands of peat."
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
