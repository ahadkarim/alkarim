// creating an array and passing the number, questions, options, and answers
let questions = [

  {
    numb: 1,
    question: "COWARD : CRAVEN ::",
    answer: "dupe : gullible",
    options: [
      "dupe : gullible",
      "liar : facetious",
      "judge : impartial",
      "commentator : caustic"
    ]
  },
  {
    numb: 2,
    question: "Drugs Addicts In Pakistan Are__ In Special Centers Set Up By The Government.",
    answer: "Consulted",
    options: [
      "Consulted",
      "Consolidated",
      "Inhabited",
      "Indoctrinated"
    ]
  },
  {
    numb: 3,
    question: "Joke: Laughter ::",
    answer: "Miracle: Surprise",
    options: [
      "Disease: Medicine",
      "Cry: Sorrow",
      "Miracle: Surprise",
      "Death: Life"
    ]
  },
  {
    numb: 4,
    question: "CURTAIN : DRAPERY : :",
    answer: "Cockroach : Insect",
    options: [
      "Bedsheet : Bed",
      "Cockroach : Insect",
      "Mat : Floo",
      "Pillow : Cushion"
    ]
  },
  {
    numb: 5,
    question: "Always Try To Be Polite __ Others.",
    answer: "to",
    options: [
      "to",
      "with",
      "for",
      "on"
    ]
  },
  {
    numb: 6,
    question: "Amna Was Engaged __ Asim.",
    answer: "to",
    options: [
      "from",
      "with",
      "to",
      "None"
    ]
  },
  {
    numb: 7,
    question: "Reptile Is To Lizard As Flower Is To________?",
    answer: "Daisy",
    options: [
      "Stem",
      "Petal",
      "Alligato",
      "Daisy"
    ]
  },
  {
    numb: 8,
    question: "The Lion Sprang__the Buffaloes.",
    answer: "upon",
    options: [
      "in",
      "at",
      "upon",
      "on"
    ]
  },
  {
    numb: 9,
    question: "The Players Agreed To Abide __ The Referee’s Decision.",
    answer: "By",
    options: [
      "By",
      "With",
      "In",
      "Into"
    ]
  },
  {
    numb: 10,
    question: "COMPLAIN : CARP ::",
    answer: "drink : guzzle",
    options: [
      "argue : debate",
      "supply : donate",
      "drink : guzzle",
      "grumble : accuse"
    ]
  },
  {
    numb: 11,
    question: "Can They Go Shopping With Us ? Sorry, They Are Busy; I Wish They _ With You Now?",
    answer: "Could go",
    options: [
      "Are going",
      "Can go",
      "Could go",
      "Would go"
    ]
  },
  {
    numb: 12,
    question: "The Housewife ___the Cakes Burning, And Ran To Switch Off The Oven.",
    answer: "smelt",
    options: [
      "smells",
      "smell",
      "smelt",
      "smelling"
    ]
  },
  {
    numb: 13,
    question: "COHABIT : RESIDE ::",
    answer: "conspire : plot",
    options: [
      "coincide : contradict",
      "conspire : plot",
      "infiltrate : influence",
      "secrete : conceal"
    ]
  },
  {
    numb: 14,
    question: "SOLILOQUY : PLAY ::",
    answer: "aria : opera",
    options: [
      "overture : musical",
      "violin : concerto",
      "lyric : poem",
      "aria : opera"
    ]
  },
  {
    numb: 15,
    question: "Antonym Of DOCILE Is _____________?",
    answer: "Unyielding",
    options: [
      "Pliant",
      "Pliable",
      "Unyielding",
      "Quiet"
    ]
  },
  {
    numb: 16,
    question: "Synonym Of Viva Voce Is _________?",
    answer: "orally",
    options: [
      "lively",
      "thematically",
      "belligerently",
      "orally"
    ]
  },
  {
    numb: 17,
    question: "Synonym Of Acerbity?",
    answer: "All of these",
    options: [
      "Astringency",
      "Tartness",
      "Sourness",
      "All of these"
    ]
  },
  {
    numb: 18,
    question: "HOST : PARASITE ::",
    answer: "medium : bacterium",
    options: [
      "egg : bird",
      "meadow : soil",
      "lair : predator",
      "medium : bacterium"
    ]
  },
  {
    numb: 19,
    question: "Synonym Of  Affinity  Is _________?",
    answer: "Sympathy",
    options: [
      "Aversion",
      "Loathe",
      "Sympathy",
      "Antipathy"
    ]
  },
  {
    numb: 20,
    question: "Synonym Of Pecuniary Is _________?",
    answer: "money",
    options: [
      "architecture",
      "money",
      "indolence",
      "warfare"
    ]
  },
  {
    numb: 21,
    question: "Synonym Of Saturnine Is _________?",
    answer: "gloomy",
    options: [
      "gloomy",
      "planetary",
      "hopeful",
      "astronomic"
    ]
  },
  {
    numb: 22,
    question: "Synonyms Of Catastrophe Is__________?",
    answer: "Destruction",
    options: [
      "Implement",
      "Built",
      "Fresh",
      "Destruction"
    ]
  },
  {
    numb: 23,
    question: "Antonym Of DEXTEROUS Is _____________?",
    answer: "Inexpert",
    options: [
      "Acute",
      "Inexpert",
      "Able",
      "Active"
    ]
  },
  {
    numb: 24,
    question: "CLOTH : TEXTURE : :",
    answer: "Wood : Grains",
    options: [
      "Silk : Cloth",
      "Body : Weigh",
      "Ornaments : Gol",
      "Wood : Grains"
    ]
  },
  {
    numb: 25,
    question: "Synonym Of Abandon Is _____________?",
    answer: "Leave",
    options: [
      "Abstract",
      "Leave",
      "Abduct",
      "None of these"
    ]
  },
  {
    numb: 26,
    question: "Synonym Of Accessible?",
    answer: "All of these",
    options: [
      "Susceptible",
      "Available",
      "Unrestricted",
      "All of these"
    ]
  },
  {
    numb: 27,
    question: "Synonym Of Homogenous Is _________?",
    answer: "similar",
    options: [
      "motley",
      "heterogeneous",
      "different",
      "similar"
    ]
  },
  {
    numb: 28,
    question: "Synonym Of Peer Is __________?",
    answer: "fellow",
    options: [
      "connote",
      "foe",
      "recluse",
      "fellow"
    ]
  },
  {
    numb: 29,
    question: "Antonym Of NIGGARDLY Is _____________?",
    answer: "Generous",
    options: [
      "Chintzy",
      "Generous",
      "Skimpy",
      "Closefisted"
    ]
  },
  {
    numb: 30,
    question: "FOX : CUNNING : :",
    answer: "Ant : Industrious",
    options: [
      "Horse : Runner",
      "Cat : Playful",
      "Ant : Industrious",
      "Vixen : Cute"
    ]
  },
  {
    numb: 31,
    question: "Synonym Of Addendum?",
    answer: "Both a&b",
    options: [
      "Codicil",
      "Augmentation",
      "Detriment",
      "Both a&b"
    ]
  },
  {
    numb: 32,
    question: "Water Is Made Up Of Two ___ , Namely Oxygen And Hydrogen.",
    answer: "elements",
    options: [
      "aspects",
      "section",
      "solutions",
      "elements"
    ]
  },
  {
    numb: 33,
    question: "Antonym Of ENORMOUS Is_____________?",
    answer: "Tiny",
    options: [
      "Weak",
      "Fragile",
      "Soft",
      "Tiny"
    ]
  },
  {
    numb: 34,
    question: "FERTILIZE : GROW ::",
    answer: "immunize : resist",
    options: [
      "nourish : enrich",
      "immunize : resist",
      "graft : multiply",
      "heat : burn"
    ]
  },
  {
    numb: 35,
    question: "Antonym Of FOREMOST Is _____________?",
    answer: "Unimportant",
    options: [
      "Hindmost",
      "Unimportant",
      "Mature",
      "Disposed"
    ]
  },
  {
    numb: 36,
    question: "Everyone At The Party ___ Amazed By His Performance.",
    answer: "was",
    options: [
      "are",
      "is",
      "were",
      "was"
    ]
  },
  {
    numb: 37,
    question: "PERFUNCTORILY : INSPIRATION ::",
    answer: "insolently : veneration",
    options: [
      "ardently : passion",
      "insolently : veneration",
      "surreptitiously : obsession",
      "phlegmatically : composure"
    ]
  },
  {
    numb: 38,
    question: "RACE : FATIGUE ::",
    answer: "Fasting : Hunger",
    options: [
      "Round : Boxing",
      "Fasting : Hunger",
      "Hiking : Gangren",
      "Flower : Color"
    ]
  },
  {
    numb: 39,
    question: "AFTER: BEFORE ::",
    answer: "successor: predecessor",
    options: [
      "present: past",
      "first: second",
      "successor: predecessor",
      "contemporary: historic"
    ]
  },
  {
    numb: 40,
    question: "Synonym Of Accost?",
    answer: "Both a&b",
    options: [
      "Confront",
      "Solicit",
      "Scorn",
      "Both a&b"
    ]
  },
  {
    numb: 41,
    question: "Synonym Of BEMOAN Is ___________ ?",
    answer: "Lament",
    options: [
      "Lament",
      "Denounce",
      "Loathe",
      "Soothe"
    ]
  },
  {
    numb: 42,
    question: "Synonym Of ZEST Is _____________?",
    answer: "Enthusiasm",
    options: [
      "Enthusiasm",
      "Passive",
      "Various",
      "Disgust"
    ]
  },
  {
    numb: 43,
    question: "Synonym Of AFICIONADO Is____________?",
    answer: "Enthusiast",
    options: [
      "Critic",
      "Enthusiast",
      "Rival",
      "indifferent"
    ]
  },
  {
    numb: 44,
    question: "Synonym Of Endeavor Is _________?",
    answer: "attempt earnestly",
    options: [
      "intend",
      "to ignore",
      "bring about",
      "attempt earnestly"
    ]
  },
  {
    numb: 45,
    question: "Synonym Of Crucifixion Is _________?",
    answer: "execution",
    options: [
      "happiness",
      "contentment",
      "gassing",
      "execution"
    ]
  },
  {
    numb: 46,
    question: "She Took Lessons ___ How To Swim.",
    answer: "to learn",
    options: [
      "for learning",
      "learn",
      "to learn",
      "learning"
    ]
  },
  {
    numb: 47,
    question: "Antonym Of MITE Is _____________?",
    answer: "Whole",
    options: [
      "Bug",
      "Bit",
      "Whole",
      "Insect"
    ]
  },
  {
    numb: 48,
    question: "Synonym Of Cynosure Is _________?",
    answer: "center of attention",
    options: [
      "center of attention",
      "obscurity",
      "clown",
      "certainty"
    ]
  },
  {
    numb: 49,
    question: "Day: Night ::",
    answer: "Kind: Cruel",
    options: [
      "Good: Rough",
      "Dark: Black",
      "Shining: Brigh",
      "Kind: Cruel"
    ]
  },
  {
    numb: 50,
    question: "I Am Looking For Admission ___ In A Government Or Private University.",
    answer: "either",
    options: [
      "until",
      "both",
      "either",
      "neither"
    ]
  },
  {
    numb: 51,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 52,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 53,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 54,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 55,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 56,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 57,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 58,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 59,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 60,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 61,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 62,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 63,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 64,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 65,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 66,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 67,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 68,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 69,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 70,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 71,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 72,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 73,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 74,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 75,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 76,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 77,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 78,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 79,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 80,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 81,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 82,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 83,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 84,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 85,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 86,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 87,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 88,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 89,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 90,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 91,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 92,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 93,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 94,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 95,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 96,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 97,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 98,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 99,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 100,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },

  
 
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   numb: ,
  //   question: "",
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
 
];