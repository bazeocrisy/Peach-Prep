/*
 * W-TASK-02 — Opinion writing task: should an empty town lot become a skate park?
 * The town, the street and the lot are invented. Two original informational sources.
 * Facts are general and hedged. The activity guideline is the CDC/HHS recommendation for
 * school-age children: at least one hour (60 minutes) of activity every day. Safety claims
 * stay comparative ("safer", "help riders stay safer"): pediatric guidance says most young
 * riders are hurt on streets, sidewalks and parking lots, that falls still happen at skate
 * parks, and that young children should ride with an adult watching closely. No invented statistics,
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
          "Kids are often more active when they have a good place to play nearby.",
          "When a town opens a new park, people often use it.",
          "They walk, play, and exercise there."
        ],
        [
          "A skate park is one kind of park that many kids enjoy.",
          "Riding can be so much fun that it does not feel like exercise.",
          "Riders of all ages often cheer when someone tries a new trick."
        ],
        [
          "Kids also need safer places to be active.",
          "A skate park gives riders a place to practice away from busy roads.",
          "Falls can still happen at a skate park.",
          "Riders stay safer when they wear a helmet and pads.",
          "Learning new tricks slowly helps, too.",
          "Experts say younger riders should have an adult watching them closely."
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
    { reason: 0, source: "p1", ref: "p1:2:3", note: "Sidewalks can have cracks, bumps and loose rocks that can make a rider fall (p1:2:4); skate parks are often smooth concrete (p1:1:4)." },
    { reason: 0, source: "p1", ref: "p1:2:5", note: "Safety experts say it is smart to ride away from traffic." },
    { reason: 0, source: "p1", ref: "p1:2:6", note: "Experts also say to ride in a place made for riding." },
    { reason: 0, source: "p1", ref: "p1:2:7", note: "Many skate parks post rules such as wearing a helmet." },
    { reason: 0, source: "p1", ref: "p1:2:8", note: "Some skate parks have a small area just for beginners." },
    { reason: 0, source: "p2", ref: "p2:4:2", note: "A skate park is a place to practice away from busy roads." },
    { reason: 0, source: "p2", ref: "p2:4:4", note: "Falls can still happen at a skate park (p2:4:3), but a helmet and pads help riders stay safer." },
    { reason: 0, source: "p2", ref: "p2:4:5", note: "Learning new tricks slowly also helps riders stay safer." },
    { reason: 0, source: "p2", ref: "p2:4:6", note: "Experts say younger riders should have an adult watching them closely." },
    { reason: 1, source: "p1", ref: "p1:3:2", note: "Pushing a board or scooter works the leg muscles." },
    { reason: 1, source: "p1", ref: "p1:3:3", note: "Balancing works the belly and back muscles." },
    { reason: 1, source: "p1", ref: "p1:3:4", note: "Trying a trick again and again keeps riders moving for a long time (p1:3:5)." },
    { reason: 1, source: "p2", ref: "p2:1:1", note: "Health experts say children need at least one hour (60 minutes) of activity every day." },
    { reason: 1, source: "p2", ref: "p2:1:2", note: "Activity makes the heart and muscles stronger." },
    { reason: 1, source: "p2", ref: "p2:1:4", note: "Many children do not get that much activity." },
    { reason: 1, source: "p2", ref: "p2:2:1", note: "Kids are often more active when they have a good place to play nearby." },
    { reason: 1, source: "p2", ref: "p2:3:2", note: "Riding can be so much fun that it does not feel like exercise." }
  ],
  model: {
    paragraphs: [
      "Picture the empty lot on Maple Street full of kids rolling down ramps. Some people want a garden there, but I believe the town should build a skate park. A skate park would give kids a safer place to ride, and it would help them stay healthy.",
      "First, a skate park would give kids a safer place to ride. The first source explains that riding in the street means looking out for cars. Bumpy sidewalks are risky, too, because one crack or rock can send a rider tumbling. Riders at a skate park have their own space away from traffic, so they would not have to dodge cars or bump over cracks. The second source, \"Kids on the Move,\" adds that helmets, pads, and slow practice on new tricks help riders stay safer. A skate park would give kids room to practice slowly, with no cars rushing by.",
      "Second, a skate park would help kids stay active and healthy. According to the second source, kids should move for at least an hour every day, but many do not. Riding is a great way to fix that. The first source explains that a rider's legs get a hard workout from pushing a board or scooter, and staying balanced makes the belly and back stronger. Since riding feels like play, kids would want to keep practicing tricks instead of sitting inside.",
      "For these reasons, the town council should turn the lot into a skate park. Please choose the skate park so kids can ride and cheer each other on for years."
    ],
    notes: [
      "Purpose and Organization (3 of 3): The introduction paints a picture to hook the reader, names the other side (a garden) in one phrase, and then states the opinion clearly (\"I believe the town should build a skate park\") and previews both reasons. Each body paragraph covers one provided reason, in order. Transitions (First, Second, According to, For these reasons) and conjunctions (but, because, so, and, Since) link the facts to the reasons and the reasons to the opinion. The conclusion restates the opinion, names the town council and asks it to act (\"Please choose the skate park\"), and leaves a final picture of kids riding together.",
      "Evidence and Elaboration (3 of 3): Both provided reasons are developed with information from BOTH sources. Safety: watching for cars in the street, cracks and rocks on sidewalks, a space of their own away from traffic, and helmets, pads and slow practice. Health: the guideline of at least an hour of activity every day, many kids not getting it, and the leg, belly and back muscles that riding works. The writer retells each fact in new words and new sentence patterns instead of copying or swapping a word or two, and names the source behind its facts. The safety claims stay as careful as the sources: the essay says a skate park is a safer place to ride, not a place where no one gets hurt. The writer explains why facts matter: \"so they would not have to dodge cars or bump over cracks\", \"A skate park would give kids room to practice slowly, with no cars rushing by\", \"Riding is a great way to fix that\" and \"Since riding feels like play, kids would want to keep practicing tricks instead of sitting inside.\"",
      "Language Usage and Conventions (2 of 2): The response is long enough to show command. Sentences are complete and varied: simple, compound (joined with but and and) and complex (with because, so and since). Verb tense is controlled: present tense for facts from the sources, would for what the skate park would do, and can in the conclusion for what kids will be able to do. There are no unneeded shifts. Subjects and verbs agree (\"riding in the street means\", \"staying balanced makes\", \"helmets, pads, and slow practice on new tricks help\"). There are no spelling, capitalization or punctuation errors."
    ]
  },
  /* PP-004: original example responses below the top score, written and scored by Peach Prep
     with the official rubric's trait descriptions (GaDOE Grade 3 Eight-Point, Three-Trait Writing
     Rubric, August 2026). They are NOT GaDOE anchor papers. Mistakes in them are on purpose.
     The trait patterns differ from W-TASK-01 on purpose, to show that the same total can come
     from different strengths. */
  examples: [
    {
      total: 2,
      scores: { purpose: 1, evidence: 0, conventions: 1 },
      paragraphs: [
        "I think it should be a skate park. Skate parks are so cool. My cousin has a skateboard, and he can do a kickflip. I want to learn how to do one too.",
        "A garden is boring. I hope we get a skate park."
      ],
      notes: [
        "Purpose and Organization (1 of 3): The first sentence gives an opinion, but the introduction is weak: it does not name the lot or speak to the town council. The essay jumps from cool parks to a cousin to the garden, so there is little sense of order, and there are almost no linking words. \"I hope we get a skate park\" is a weak concluding statement. This is the rubric's 1.",
        "Evidence and Elaboration (0 of 3): Neither provided reason (safety, or staying active and healthy) is used, and nothing comes from the sources. The cousin and the kickflip are personal ideas, and \"A garden is boring\" is not a reason the sources support. The rubric's 0 column says the response does not use reasons, relevant information from the sources or elaboration, which fits.",
        "Language Usage and Conventions (1 of 2): The sentences are complete and mostly correct, and one is joined with and. But the essay is very short and the sentences are almost all simple, so it shows only partial command. The rubric says a very brief response may not be enough to show adequate command, even with few errors."
      ],
      next: "Start with evidence: reread the two reasons with your child, then find one fact in the sources for each reason."
    },
    {
      total: 4,
      scores: { purpose: 1, evidence: 2, conventions: 1 },
      paragraphs: [
        "The lot on maple street should be a skate park because it is safer and kids need exercise. In the street you have to watch for cars and sidewalks have cracks and rocks that can make you fall but at a skate park you are away from traffic. The second source says kids need to be active for a hour every day and many kids dont get that much. Pushing a skateboard makes your leg muscles work hard. Also you can wear a helmet and pads to be safer. Kids would be outside moving instead of sitting. So the town should build it."
      ],
      notes: [
        "Purpose and Organization (1 of 3): The first sentence states the opinion and both reasons, which is a good start. But the whole essay is one paragraph, the safety and health ideas are mixed together (the helmet sentence sits in the middle of the health facts), and \"So the town should build it\" is a weak concluding statement. A weak structure and a weak conclusion fit the rubric's 1, even with a clear opinion.",
        "Evidence and Elaboration (2 of 3): Both reasons are supported with relevant facts from both sources: watching for cars, cracks and rocks, being away from traffic, an hour of activity every day, many kids not getting it, leg muscles, and helmets and pads. They are mostly in the child's own words. It is not a 3 because the facts are listed, with very little explaining; \"Kids would be outside moving instead of sitting\" is the only real elaboration. This is the rubric's 2: relevant information and adequate elaboration.",
        "Language Usage and Conventions (1 of 2): The second sentence is a long run-on that joins four ideas with and and but and no commas, which makes it hard to follow. There are capital errors (maple street), a missing apostrophe (dont), \"a hour\" instead of \"an hour\", and missing commas after In the street and Also. Verbs mostly agree. These errors sometimes get in the way of meaning, which fits the rubric's 1."
      ],
      next: "Work on organization: split the essay into an introduction, a safety paragraph, a health paragraph and an ending, and break the long sentence into shorter ones."
    },
    {
      total: 6,
      scores: { purpose: 3, evidence: 2, conventions: 1 },
      paragraphs: [
        "Imagine kids riding ramps instead of dodging cars. Town council members, I believe the empty lot on Maple Street should become a skate park, not a garden. A skate park would give kids a safer place to ride, and it would help them stay active and healthy.",
        "To begin with, a skate park would be safer than the street. The first source says that kids who ride in the street always have to look out for cars. Sidewalks has cracks and bumps that makes riders fall. At a skate park kids was away from traffic. The second source says a helmet and pads help riders stay safer too.",
        "Another reason is that kids need to stay active. The second source says kids need an hour of exercise every day but alot of kids dont get that. Riding works your legs and your belly muscles. Riding is fun so kids will want to keep doing it and they will be healthy.",
        "For these reasons, please vote for the skate park. It would keep kids safer and moving, and it would give them a fun place to be together."
      ],
      notes: [
        "Purpose and Organization (3 of 3): The introduction pulls the reader in, speaks to the town council, states the opinion clearly and previews both reasons. Each reason has its own paragraph, in order. Transitions (To begin with, Another reason, For these reasons) and conjunctions (and, but, so) connect the reasons to the opinion. The conclusion sums up both reasons and asks the council to act. This matches the rubric's 3.",
        "Evidence and Elaboration (2 of 3): Both reasons are supported with relevant facts from both sources: cars in the street, cracks and bumps, being away from traffic, a helmet and pads, an hour of activity a day, many kids not getting it, and the leg and belly muscles riding works. It is not a 3 because there is little explaining: most facts are listed one after another, and the health paragraph has only one short explanation (\"Riding is fun so kids will want to keep doing it\"). One sentence (\"kids who ride in the street always have to look out for cars\") stays very close to the source's wording; a stronger essay would say it in the child's own words.",
        "Language Usage and Conventions (1 of 2): There is good sentence variety, but there are several subject-verb errors (\"Sidewalks has\", \"bumps that makes\", \"kids was\"), a tense shift from would to was and then to will, and other errors (alot, dont, missing commas). Several of these make the reader stop and reread. This fits the rubric's 1: some correct verb tense and agreement, with errors that sometimes interfere. Strong organization does not raise this trait; each trait is scored on its own."
      ],
      next: "Work on conventions: read the essay aloud together and fix each verb so it matches its subject (sidewalks have, kids were). Then add a \"That means...\" sentence after each fact."
    }
  ],
  /* PP-004: step-by-step scoring for a grown-up, one block per rubric trait. "points" restates
     each rubric column in plain words; "say" gives coaching lines for the child. */
  scoring: {
    purpose: {
      steps: [
        "Read the whole essay once, the way a town council member would, without marking anything.",
        "Underline the opinion. It should be near the beginning and say that the lot should become a skate park.",
        "Put an S beside sentences about safety and an H beside sentences about health. Are the S sentences together and the H sentences together?",
        "Circle linking words such as First, Second, Also, because, so and For these reasons. Do they tie each reason back to the opinion?",
        "Read the ending. Does it restate the opinion, sum up the reasons or ask the town council to act?",
        "Choose the score that fits best overall. An essay can show parts of two levels; pick the one it matches most."
      ],
      points: {
        3: "A strong introduction makes the opinion clear. Each reason has its own clear group of sentences. Linking words connect the reasons to the opinion all the way through. A strong ending wraps it up.",
        2: "All the parts are there and the essay is easy enough to follow, but some parts are plain or thin, such as a one-line introduction, linking words used only here and there, or a reason not clearly tied to the opinion.",
        1: "The introduction or the ending is weak. Ideas are mixed together or hard to follow, and few linking words connect them.",
        0: "There is no introduction, no order you can find and no ending. On the real test, a blank, copied, off-topic or too-short essay gets a condition code instead of a score."
      },
      say: [
        "\"Show me the sentence that tells your opinion.\" If it is there, praise it: \"The town council knows what you think right away.\"",
        "\"Which sentences are about safety? Which are about health? Can you put each group in its own paragraph?\"",
        "\"How could your last sentence ask the town council to do something?\""
      ]
    },
    evidence: {
      steps: [
        "Open \"Where the support is in the sources\" below. It lists the facts that fit each reason.",
        "Under reason 1 (a safer place to ride), check each fact the child used from a source. Do the same for reason 2 (active and healthy).",
        "Check the wording. A sentence that matches the source word for word, or with only a word or two changed, is copied, not in the child's own words.",
        "After each fact, look for the child's own explaining, often with so, because or that means. A fact with no explaining counts for less.",
        "Check that safety claims stay careful. The sources say a skate park is safer than the street, and that falls can still happen there. \"No one ever gets hurt\" is not supported.",
        "Choose the score that fits best overall."
      ],
      points: {
        3: "Both reasons are supported with well-chosen facts from the sources, in the child's own words, and the child explains how each fact supports the reason.",
        2: "The reasons are supported with relevant facts from the sources and some explaining, but the support is thin or uneven, or the facts are listed more than explained.",
        1: "The support is minimal: few facts, facts that do not fit the reason, or facts with almost no explaining.",
        0: "There are no reasons and no information from the sources."
      },
      say: [
        "\"Show me one fact you found in Source 1 and one in Source 2.\"",
        "\"You told me a fact. Now tell me why it matters. Try starting with 'That means...'\"",
        "\"This sentence sounds just like the source. How would you say it to a friend?\""
      ]
    },
    conventions: {
      steps: [
        "Read the essay out loud exactly as it is written. Mark each spot where you stumble or have to reread.",
        "Check the sentences. Are they complete? Are some short and some joined with because, and, but or so?",
        "Check the verbs. Does the tense stay steady? Do subjects and verbs agree (kids need, a skate park gives)?",
        "Look back at your marks. Do the mistakes only look messy, or do they make the meaning hard to follow?",
        "Check the length. A very short essay may not show enough to earn a 2, even with few mistakes.",
        "Choose the score that fits best overall."
      ],
      points: {
        2: "Most sentences are complete and they vary. Verb tense and subject-verb agreement are mostly correct. There are few mistakes, and none make the meaning unclear. The essay is long enough to show this.",
        1: "Some sentences are complete, with little variety. Some verbs are in the wrong tense or do not agree, and some mistakes sometimes make the meaning unclear.",
        0: "There are few or no complete sentences, little correct tense or agreement, and frequent mistakes that often make the meaning unclear."
      },
      say: [
        "\"Read this sentence out loud to me. Does it sound right?\"",
        "\"Find two short sentences you could join with because or so.\"",
        "\"Check your verbs: did you stay in the same time all the way through?\""
      ]
    }
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
      "Reason 1 (a safer place to ride) is backed by source facts such as: streets have cars, sidewalks have cracks and rocks, skate parks are made for riding and away from traffic, helmet rules, beginner areas, helmets and pads, learning tricks slowly, and younger riders having an adult watching closely. Strong responses compare (safer than the street). A claim that kids cannot get hurt at a skate park is not supported: the sources say falls can still happen there.",
      "Reason 2 (active and healthy) is backed by source facts such as: at least one hour (60 minutes) of activity every day, many kids do not get that much, riding works the leg, belly and back muscles, practicing tricks keeps riders moving, riding feels like fun instead of exercise, kids are more active with a good place to play nearby.",
      "For a 3, both provided reasons are developed with relevant, well-chosen details from the sources, and the child explains how they support the reasons. The prompt asks for both sources, and using both makes the evidence stronger. The rubric scores relevant information from the source(s), so it sets no rule that one source limits the score; check whether each reason really has enough support. Developing only one of the two reasons usually keeps the score at 2 or below.",
      "Facts are in the child's own words. Copied sentences, or sentences with only a word or two changed, do not show the child's own words.",
      "Elaboration explains why the fact helps the opinion (\"so kids would not have to dodge cars\"). A list of facts with no explaining is weaker. Ideas from the child's own life are fine as extra elaboration but do not replace source information. Garden facts, or reasons the sources do not support (\"skate parks make money\"), do not add credit."
    ],
    conventions: [
      "Most sentences are complete. Watch for long run-ons joined by \"and\" over and over.",
      "Verb tense is consistent. Would is the natural verb for what the park would do (\"A skate park would give kids a safer place to ride\"); watch for switching to will and back again in the same paragraph.",
      "Subjects and verbs agree: \"kids need\", \"a skate park gives\", \"riders practice\", \"a crack or a rock makes\".",
      "Sentences vary in length and in how they begin, and some join ideas with because, since, so or but.",
      "A few small errors are fine for a 2 if they do not get in the way of meaning. A response must be long enough to show command; a very short response may not earn a 2 even with no errors."
    ]
  }
});
