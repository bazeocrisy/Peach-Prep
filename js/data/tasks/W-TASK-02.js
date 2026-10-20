/*
 * W-TASK-02 — Opinion writing task: should an empty town lot become a skate park?
 * The town, the street and the lot are invented. Two original informational sources.
 * Facts are general and hedged: the "about an hour a day" activity guideline is the
 * widely published public-health recommendation for school-age children; no invented
 * statistics, studies or people.
 * Sentence references ("p1:<paragraph>:<sentence>") are 1-based. The sources have no
 * headings or captions, so array numbers match the paragraph numbers the child sees.
 */
PP.addTask({
  id: "W-TASK-02",
  title: "Should our town turn an empty lot into a skate park?",
  sources: [
    {
      id: "p1",
      title: "What Is a Skate Park?",
      byline: "",
      genre: "Informational text",
      lexile: "about 620L (estimate)",
      paragraphs: [
        [
          "A skate park is an outdoor space that is built for riding.",
          "It has ramps, rails, steps, and curved bowls made of smooth concrete.",
          "Many skate parks are open to skateboards, scooters, and inline skates, and some allow bikes, too."
        ],
        [
          "One big reason towns build skate parks is safety.",
          "When kids ride in streets or parking lots, they have to watch out for cars.",
          "Sidewalks can also have cracks, bumps, and loose rocks that make a rider fall.",
          "Safety experts say it is smart to ride in a place that is made for riding and is away from traffic.",
          "Many skate parks post rules, such as \"Wear a helmet,\" and some have a small area just for beginners."
        ],
        [
          "Riding at a skate park is also a good workout.",
          "Pushing a skateboard or a scooter makes the leg muscles work hard.",
          "Staying balanced on a moving board uses the muscles in the middle of the body, too.",
          "Riders often practice the same trick again and again until they get it right, so they keep moving for a long time."
        ]
      ],
      lines: null
    },
    {
      id: "p2",
      title: "Kids on the Move",
      byline: "",
      genre: "Informational text",
      lexile: "about 640L (estimate)",
      paragraphs: [
        [
          "Health experts say that children should be active for about one hour every day.",
          "Running, jumping, and riding make the heart and muscles stronger.",
          "Being active can also help kids sleep well and feel calm.",
          "Many children do not get that much activity, especially when they spend a lot of time sitting."
        ],
        [
          "Kids are more likely to be active when there is a good place to play near home.",
          "When a town opens a new park, people often use it to walk, play, and exercise."
        ],
        [
          "A skate park is one kind of park that many kids enjoy.",
          "Learning to ride can be so much fun that it does not feel like exercise at all.",
          "Riders of different ages often cheer for each other when someone tries a new trick."
        ],
        [
          "Kids also need places where they can be active safely.",
          "A skate park gives riders a place to practice that is away from busy roads.",
          "Wearing a helmet and pads and learning new tricks slowly help riders stay safe while they have fun."
        ]
      ],
      lines: null
    }
  ],
  prompt: "For years, the lot on Maple Street in our town has been empty. Some people want to turn it into a community garden. Other people want to turn it into a skate park. The town council will decide soon. Write an opinion essay for the town council that tells why the empty lot should become a skate park. Use the two reasons below. Support each reason with information from both sources, written in your own words.",
  reasons: [
    "A skate park would give kids a safe place to ride.",
    "A skate park would help kids stay active and healthy."
  ],
  std: ["3.T.T.3.c", "3.T.RA.1.c", "3.T.SS.1.c", "3.T.SS.1.d", "3.L.GC.2.b", "3.L.GC.2.c"],
  planner: {
    opinion: "What do you want the town council to do with the empty lot? Write one sentence that tells your opinion.",
    reasonPrompts: [
      "Reason 1: Why would a skate park be a safe place to ride? Find a fact in each source. How can you say each fact in your own words? Why does it matter?",
      "Reason 2: How would a skate park help kids stay active and healthy? Find a fact in each source. How can you say each fact in your own words? Why does it matter?"
    ],
    conclusion: "How will you end? Tell your opinion again, sum up both reasons, and give the town council one last thought to remember."
  },
  evidence: [
    { reason: 0, source: "p1", ref: "p1:2:2", note: "Riding in streets or parking lots means watching out for cars." },
    { reason: 0, source: "p1", ref: "p1:2:3", note: "Sidewalk cracks, bumps and rocks can make riders fall; a skate park has smooth concrete (p1:1:2)." },
    { reason: 0, source: "p1", ref: "p1:2:4", note: "Safety experts say to ride in a place made for riding, away from traffic." },
    { reason: 0, source: "p1", ref: "p1:2:5", note: "Skate parks post rules such as wearing a helmet, and some have a beginner area." },
    { reason: 0, source: "p2", ref: "p2:4:2", note: "A skate park is a place to practice away from busy roads." },
    { reason: 0, source: "p2", ref: "p2:4:3", note: "Helmets, pads and learning tricks slowly help riders stay safe." },
    { reason: 1, source: "p1", ref: "p1:3:2", note: "Pushing a board or scooter works the leg muscles." },
    { reason: 1, source: "p1", ref: "p1:3:3", note: "Balancing works the muscles in the middle of the body." },
    { reason: 1, source: "p1", ref: "p1:3:4", note: "Practicing a trick again and again keeps riders moving for a long time." },
    { reason: 1, source: "p2", ref: "p2:1:1", note: "Health experts say children should be active about one hour every day." },
    { reason: 1, source: "p2", ref: "p2:1:2", note: "Activity makes the heart and muscles stronger." },
    { reason: 1, source: "p2", ref: "p2:1:4", note: "Many children do not get enough activity." },
    { reason: 1, source: "p2", ref: "p2:2:1", note: "Kids are more active when there is a good place to play near home." },
    { reason: 1, source: "p2", ref: "p2:3:2", note: "Riding is so much fun that it does not feel like exercise." }
  ],
  model: {
    paragraphs: [
      "Picture the empty lot on Maple Street full of kids rolling down ramps and cheering for each other. Some people want a garden there, but I believe the town should build a skate park. A skate park would keep kids safe, and it would help them stay healthy.",
      "First, a skate park would give kids a safe place to ride. The first source explains that kids who ride in streets have to watch for cars. Sidewalks are risky too, because a crack or a rock can make a rider crash. A skate park is made of smooth concrete and is far from traffic. The second source adds that helmets, pads, and learning tricks one step at a time keep riders safe. Many skate parks even post helmet rules.",
      "Second, a skate park would help kids stay active and healthy. According to the second source, kids need to move for about an hour each day, but many of them do not. Riding is a great way to fix that. The first source says that pushing a scooter works a rider's legs, and balancing works the muscles around a rider's middle. Since riding feels like play, kids would want to keep practicing tricks instead of sitting inside.",
      "For these reasons, the town council should turn the empty lot into a skate park. It would be a safe, healthy place where kids from all over town could have fun together for years."
    ],
    notes: [
      "Purpose and Organization (3 of 3): The introduction paints a picture to hook the town council, names the other side (a garden) in one phrase, and then states the opinion clearly (\"I believe the town should build a skate park\") and previews both reasons. Each body paragraph covers one provided reason, in order. Transitions (First, Second, According to, For these reasons) and conjunctions (but, because, and, Since) link the facts to the reasons and the reasons to the opinion. The conclusion restates the opinion, speaks directly to the council and leaves a final thought.",
      "Evidence and Elaboration (3 of 3): Both provided reasons are developed with information from BOTH sources. Safety: watching for cars in streets, cracks and rocks on sidewalks, smooth concrete away from traffic, helmets, pads and helmet rules. Health: the one-hour guideline, many kids not getting it, leg and balance muscles. All of it is in the writer's own words, and the writer tells which source each fact came from. Elaboration explains why facts matter: \"Riding is a great way to fix that\" and \"Since riding feels like play, kids would want to keep practicing tricks instead of sitting inside.\"",
      "Language Usage and Conventions (2 of 2): The response is long enough to show command. Sentences are complete and varied: simple, compound (joined with but and and) and complex (with because, who, where and since). Verb tense is consistent: present tense for facts and would for what the skate park would do. Subjects and verbs agree (\"kids who ride in streets have\", \"a crack or a rock can\", \"a skate park is\"). There are no spelling, capitalization or punctuation errors."
    ]
  },
  lookFors: {
    purpose: [
      "The opinion is stated near the beginning: the lot should become a skate park. Mentioning the garden is fine, but the response must not argue for the garden, because the provided reasons support the skate park.",
      "Safety facts and health facts are grouped in separate paragraphs, or at least in separate groups of sentences.",
      "Linking words connect ideas: First, Second, Also, For example, because, since, so. They are used correctly (not \"For example\" in front of a new reason).",
      "The conclusion restates the opinion, or sums up the reasons, or asks the town council to act. \"That is all\" or \"The end\" is not a conclusion."
    ],
    evidence: [
      "Reason 1 (safe place to ride) is backed by source facts such as: streets have cars, sidewalks have cracks and rocks, skate parks are smooth and away from traffic, helmet rules, beginner areas, helmets and pads, learning tricks slowly.",
      "Reason 2 (active and healthy) is backed by source facts such as: about one hour of activity a day, many kids do not get enough, riding works leg and balance muscles, practicing tricks keeps riders moving, riding feels like play, kids are more active with a place to play nearby.",
      "For a 3, both reasons are developed and both sources are used. Developing only one reason, or using only one source, usually keeps the score at 2 or below.",
      "Facts are in the child's own words. Copied sentences do not count as elaboration.",
      "Elaboration explains why the fact helps the opinion (\"so kids would not have to dodge cars\"). A list of facts with no explaining is weaker. Garden facts or reasons that the sources do not support (\"skate parks make money\") do not add credit."
    ],
    conventions: [
      "Most sentences are complete. Watch for long run-ons joined by \"and\" over and over.",
      "Verb tense is consistent. Would is the natural verb for what the park would do (\"A skate park would keep kids safe\"); watch for switching to will and back again in the same paragraph.",
      "Subjects and verbs agree: \"kids need\", \"a skate park gives\", \"riders practice\", \"a crack or a rock makes\".",
      "Sentences vary in length and in how they begin, and some join ideas with because, since, so or but.",
      "A few small errors are fine for a 2 if they do not get in the way of meaning. A very short response cannot earn a 2 even with no errors."
    ]
  }
});
