/*
 * W-TASK-02 — Opinion writing task: should an empty town lot become a skate park?
 * The town, the street and the lot are invented. Two original informational sources.
 * Facts are general and hedged. The activity guideline is the CDC/HHS recommendation for
 * school-age children: at least one hour (60 minutes) of activity every day. Safety claims
 * stay comparative ("safer", "help riders stay safer"): pediatric guidance says most young
 * riders are hurt on streets, sidewalks and parking lots, that falls still happen at skate
 * parks, and that young children should ride with an adult nearby. No invented statistics,
 * studies or people.
 * Sources are written at about a grade 4 reading level (short sentences, common words).
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
          "A skate park is a place built for riding.",
          "Most skate parks are outdoors.",
          "Many have ramps, rails, steps, or curved bowls.",
          "These are often made of smooth concrete.",
          "Many skate parks are open to skateboards, scooters, and inline skates.",
          "Some allow bikes, too."
        ],
        [
          "One big reason towns build skate parks is safety.",
          "Kids who ride in streets or parking lots have to watch out for cars.",
          "Sidewalks can have cracks, bumps, and loose rocks.",
          "These can make a rider fall.",
          "Safety experts say it is smart to ride away from traffic.",
          "They also say to ride in a place that is made for riding.",
          "Many skate parks post rules, such as \"Wear a helmet.\"",
          "Some have a small area just for beginners."
        ],
        [
          "Riding at a skate park is also a good workout.",
          "Pushing a skateboard or a scooter makes the leg muscles work hard.",
          "Balancing on a moving board works the belly and back muscles, too.",
          "Riders often try the same trick again and again until they get it right.",
          "That keeps them moving for a long time."
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
          "Health experts say children need at least one hour (60 minutes) of activity every day.",
          "Running, jumping, and riding make the heart and muscles stronger.",
          "Being active can also help kids sleep well and feel calm.",
          "Many children do not get that much activity.",
          "This is most common when kids spend a lot of time sitting."
        ],
        [
          "Having a good place to play nearby makes kids more likely to be active.",
          "When a town opens a new park, people often use it.",
          "They walk, play, and exercise there."
        ],
        [
          "A skate park is one kind of park that many kids enjoy.",
          "Riding can be so much fun that it does not feel like exercise.",
          "Riders of different ages often cheer when someone tries a new trick."
        ],
        [
          "Kids also need safer places to be active.",
          "A skate park gives riders a place to practice away from busy roads.",
          "Riders can still fall at a skate park, so safety gear matters there, too.",
          "Riders stay safer when they wear a helmet and pads and learn new tricks slowly.",
          "Experts say younger riders should have an adult nearby."
        ]
      ],
      lines: null
    }
  ],
  prompt: "For years, the lot on Maple Street in our town has been empty. Some people want to turn it into a community garden. Other people want to turn it into a skate park. The town council (the group of leaders who make decisions for the town) will decide soon. Write an opinion essay for the town council that tells why the empty lot should become a skate park. Use the two reasons below. Support each reason with information from both sources, written in your own words.",
  reasons: [
    "A skate park would give kids a safer place to ride.",
    "A skate park would help kids stay active and healthy."
  ],
  std: ["3.T.T.3.c", "3.T.RA.1.c", "3.T.SS.1.c", "3.T.SS.1.d", "3.L.GC.2.b", "3.L.GC.2.c"],
  planner: {
    opinion: "Write a sentence that tells your opinion: the empty lot should become a skate park. How can you say it to the town council in your own words?",
    reasonPrompts: [
      "Reason 1: Why would a skate park be a safer place to ride than a street or sidewalk? Find a fact in each source. How can you say each fact in your own words? Why does it matter?",
      "Reason 2: How would a skate park help kids stay active and healthy? Find a fact in each source. How can you say each fact in your own words? Why does it matter?"
    ],
    conclusion: "How will you end? Tell your opinion again, sum up both reasons, and give the town council one last thought to remember."
  },
  evidence: [
    { reason: 0, source: "p1", ref: "p1:2:2", note: "Kids who ride in streets or parking lots have to watch out for cars." },
    { reason: 0, source: "p1", ref: "p1:2:3", note: "Sidewalks have cracks, bumps and loose rocks that can make a rider fall (p1:2:4); skate parks are often smooth concrete (p1:1:4)." },
    { reason: 0, source: "p1", ref: "p1:2:5", note: "Safety experts say it is smart to ride away from traffic." },
    { reason: 0, source: "p1", ref: "p1:2:6", note: "Experts also say to ride in a place made for riding." },
    { reason: 0, source: "p1", ref: "p1:2:7", note: "Many skate parks post rules such as wearing a helmet." },
    { reason: 0, source: "p1", ref: "p1:2:8", note: "Some skate parks have a small area just for beginners." },
    { reason: 0, source: "p2", ref: "p2:4:2", note: "A skate park is a place to practice away from busy roads." },
    { reason: 0, source: "p2", ref: "p2:4:4", note: "Helmets, pads and learning tricks slowly help riders stay safer (falls can still happen, p2:4:3)." },
    { reason: 0, source: "p2", ref: "p2:4:5", note: "Experts say younger riders should have an adult nearby." },
    { reason: 1, source: "p1", ref: "p1:3:2", note: "Pushing a board or scooter works the leg muscles." },
    { reason: 1, source: "p1", ref: "p1:3:3", note: "Balancing works the belly and back muscles." },
    { reason: 1, source: "p1", ref: "p1:3:4", note: "Trying a trick again and again keeps riders moving for a long time (p1:3:5)." },
    { reason: 1, source: "p2", ref: "p2:1:1", note: "Health experts say children need at least one hour (60 minutes) of activity every day." },
    { reason: 1, source: "p2", ref: "p2:1:2", note: "Activity makes the heart and muscles stronger." },
    { reason: 1, source: "p2", ref: "p2:1:4", note: "Many children do not get that much activity." },
    { reason: 1, source: "p2", ref: "p2:2:1", note: "Having a good place to play nearby makes kids more likely to be active." },
    { reason: 1, source: "p2", ref: "p2:3:2", note: "Riding can be so much fun that it does not feel like exercise." }
  ],
  model: {
    paragraphs: [
      "Picture the empty lot on Maple Street full of kids rolling down ramps and cheering for each other. Some people want a garden there, but I believe the town should build a skate park. A skate park would give kids a safer place to ride, and it would help them stay healthy.",
      "First, a skate park would give kids a safer place to ride. The first source explains that riding in the street means always looking out for cars. Bumpy sidewalks are risky, too, because hitting one crack or rock can send a rider tumbling. A skate park is built just for riding and sits away from traffic, so riders would not have to dodge cars or bump over cracks. The second source, \"Kids on the Move,\" adds that helmets, pads, and slow practice on new tricks help riders stay safer.",
      "Second, a skate park would help kids stay active and healthy. According to the second source, kids should move for at least an hour, or 60 minutes, every day, but many of them do not. Riding is a great way to fix that. The first source explains that a rider's legs get a hard workout from pushing a board or scooter, and staying balanced makes the belly and back stronger. Since riding feels like play, kids would want to keep practicing tricks instead of sitting inside.",
      "For these reasons, the town council should turn the empty lot into a skate park. Please choose the skate park so that kids from all over town can ride, play, and cheer each other on for years to come."
    ],
    notes: [
      "Purpose and Organization (3 of 3): The introduction paints a picture to hook the reader, names the other side (a garden) in one phrase, and then states the opinion clearly (\"I believe the town should build a skate park\") and previews both reasons. Each body paragraph covers one provided reason, in order. Transitions (First, Second, According to, For these reasons) and conjunctions (but, because, so, and, Since) link the facts to the reasons and the reasons to the opinion. The conclusion restates the opinion, names the town council and asks it to act (\"Please choose the skate park\"), and leaves a final picture of kids riding together.",
      "Evidence and Elaboration (3 of 3): Both provided reasons are developed with information from BOTH sources. Safety: watching for cars in the street, cracks and rocks on sidewalks, a place built for riding away from traffic, and helmets, pads and slow practice. Health: the guideline of at least an hour of activity every day, many kids not getting it, and the leg, belly and back muscles that riding works. The writer retells each fact in new words and new sentence patterns instead of copying or swapping a word or two, and tells which source each fact came from. The safety claims stay as careful as the sources: the essay says a skate park is a safer place to ride, not a place where no one gets hurt. The writer explains why facts matter: \"so riders would not have to dodge cars or bump over cracks\", \"Riding is a great way to fix that\" and \"Since riding feels like play, kids would want to keep practicing tricks instead of sitting inside.\"",
      "Language Usage and Conventions (2 of 2): The response is long enough to show command. Sentences are complete and varied: simple, compound (joined with but and and) and complex (with because, so, so that and since). Verb tense is controlled: present tense for facts from the sources, would for what the skate park would do, and can in the conclusion for what kids will be able to do. There are no unneeded shifts. Subjects and verbs agree (\"riding in the street means\", \"staying balanced makes\", \"helmets, pads, and slow practice on new tricks help\"). There are no spelling, capitalization or punctuation errors."
    ]
  },
  lookFors: {
    purpose: [
      "The opinion is stated near the beginning: the lot should become a skate park. Mentioning the garden is fine, but the response must not argue for the garden, because the provided reasons support the skate park.",
      "Safety facts and health facts are grouped in separate paragraphs, or at least in separate groups of sentences.",
      "Linking words connect ideas: First, Second, Also, For example, because, since, so. They are used correctly (not \"For example\" in front of a new reason).",
      "The essay is written for the town council: it may speak to the council directly or ask the council to act.",
      "The conclusion restates the opinion, or sums up the reasons, or asks the town council to act. \"That is all\" or \"The end\" is not a conclusion."
    ],
    evidence: [
      "Reason 1 (a safer place to ride) is backed by source facts such as: streets have cars, sidewalks have cracks and rocks, skate parks are made for riding and away from traffic, helmet rules, beginner areas, helmets and pads, learning tricks slowly, and younger riders having an adult nearby. Strong responses compare (safer than the street). A claim that kids cannot get hurt at a skate park is not supported: the sources say falls can still happen there.",
      "Reason 2 (active and healthy) is backed by source facts such as: at least one hour (60 minutes) of activity every day, many kids do not get that much, riding works the leg, belly and back muscles, practicing tricks keeps riders moving, riding feels like fun instead of exercise, kids are more active with a good place to play nearby.",
      "For a 3, both provided reasons are developed, and each has more than one well-chosen detail that the child explains. The prompt asks for both sources, and using both makes the evidence stronger. The rubric scores relevant information from the source(s), so it sets no rule that one source limits the score; check whether each reason really has enough support. Developing only one of the two reasons usually keeps the score at 2 or below.",
      "Facts are in the child's own words. Copied sentences, or sentences with only a word or two changed, do not show the child's own words.",
      "Elaboration explains why the fact helps the opinion (\"so kids would not have to dodge cars\"). A list of facts with no explaining is weaker. Ideas from the child's own life are fine as extra elaboration but do not replace source information. Garden facts, or reasons the sources do not support (\"skate parks make money\"), do not add credit."
    ],
    conventions: [
      "Most sentences are complete. Watch for long run-ons joined by \"and\" over and over.",
      "Verb tense is consistent. Would is the natural verb for what the park would do (\"A skate park would give kids a safer place to ride\"); watch for switching to will and back again in the same paragraph.",
      "Subjects and verbs agree: \"kids need\", \"a skate park gives\", \"riders practice\", \"a crack or a rock makes\".",
      "Sentences vary in length and in how they begin, and some join ideas with because, since, so or but.",
      "A few small errors are fine for a 2 if they do not get in the way of meaning. A very short response cannot earn a 2 even with no errors."
    ]
  }
});
