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
    question: "Synonym Of Citadel Is _________?",
    answer: "fortress",
    options: [
      "conduit",
      "mountain",
      "fortress",
      "palace"
    ]
  },
  {
    numb: 52,
    question: "It Was He Who Put A “Spoke In My Wheel”.",
    answer: "thwarted in the execution of the plan",
    options: [
      "helped in the execution of the plan",
      "tried to cause an accident",
      "thwarted in the execution of the plan",
      "destroyed the plan"
    ]
  },
  {
    numb: 53,
    question: "A Speed Limit Is The __ Legal Speed That You Can Travel On The Road.",
    answer: "maximum",
    options: [
      "highest",
      "longest",
      "maximum",
      "minimum"
    ]
  },
  {
    numb: 54,
    question: "Synonym Of Advert Is _________?",
    answer: "refer",
    options: [
      "chance",
      "turn against",
      "refer",
      "circumvent"
    ]
  },
  {
    numb: 55,
    question: "Words: Poetry ::",
    answer: "Notes: Music",
    options: [
      "Notes: Music",
      "Dictionary Letters",
      "Planet: Sun",
      "Wheat: Food"
    ]
  },
  {
    numb: 56,
    question: "Synonym Of Iota Is _________?",
    answer: "small amount",
    options: [
      "ancient coin",
      "something owed",
      "punctuation mark",
      "small amount"
    ]
  },
  {
    numb: 57,
    question: "Antonym Of Peaked Is _________?",
    answer: "ruddy",
    options: [
      "arrogant",
      "tired",
      "ruddy",
      "pointy"
    ]
  },
  {
    numb: 58,
    question: "The Sparrows Took No __the Bread.",
    answer: "notice of",
    options: [
      "notice about",
      "notice of",
      "notice from",
      "notice to"
    ]
  },
  {
    numb: 59,
    question: "He Has Many Friends, But __are Good Ones.",
    answer: "few",
    options: [
      "few",
      "a few",
      "the few",
      "the some"
    ]
  },
  {
    numb: 60,
    question: "The Powers Of The Party Are_in Several Places In The Constitution.",
    answer: "enumerated",
    options: [
      "named",
      "numbered",
      "enumerated",
      "counted"
    ]
  },
  {
    numb: 61,
    question: "Synonym Of YOB Is__________?",
    answer: "Aggressive",
    options: [
      "Intelligent",
      "Annoyed",
      "Aggressive",
      "Humble"
    ]
  },
  {
    numb: 62,
    question: "Synonym Of Mano A Mano",
    answer: "Hand to hand",
    options: [
      "Street to street",
      "Hand to hand",
      "City to city",
      "District to district"
    ]
  },
  {
    numb: 63,
    question: "NUMISMATIST : COINS ::",
    answer: "Philatelist : Stamps",
    options: [
      "Jeweller : Jewels",
      "Philatelist : Stamps",
      "Geneticist : Chromosome",
      "Cartographer : Maps"
    ]
  },
  {
    numb: 64,
    question: "Synonym Of Exemplify Is _____________?",
    answer: "Illustrate",
    options: [
      "Illustrate",
      "Reprehensible",
      "Finish",
      "Empty"
    ]
  },
  {
    numb: 65,
    question: "She Is Totally Obedient _ Him.",
    answer: "to",
    options: [
      "to",
      "of",
      "both A & B",
      "None"
    ]
  },
  {
    numb: 66,
    question: "Synonym Of Ascribe Is _________?",
    answer: "attribute",
    options: [
      "attribute",
      "engrave",
      "write",
      "sign"
    ]
  },
  {
    numb: 67,
    question: "Synonym Of Retrospect Is _________?",
    answer: "review of the past",
    options: [
      "microscope",
      "special kind of telescope",
      "review of the past",
      "prism"
    ]
  },
  {
    numb: 68,
    question: "Antonym Of EXPAND Is _____________?",
    answer: "Condense",
    options: [
      "Conclude",
      "Congest",
      "Condense",
      "Convert"
    ]
  },
  {
    numb: 69,
    question: "The Department Head Insisted That He __absolute Authority To Regulate Office Work.",
    answer: "would be given",
    options: [
      "is given",
      "gives",
      "would give",
      "would be given"
    ]
  },
  {
    numb: 70,
    question: "Synonym Of Victory Is __________?",
    answer: "success",
    options: [
      "success",
      "progress",
      "fortune",
      "defeat"
    ]
  },
  {
    numb: 71,
    question: "Synonym Of Lurch Is________?",
    answer: "Stagger",
    options: [
      "Tiptoe",
      "Stagger",
      "None of the above",
      "Steady"
    ]
  },
  {
    numb: 72,
    question: "Synonym Of Penury Is _________?",
    answer: "poverty",
    options: [
      "poverty",
      "custom",
      "affluence",
      "numismatics"
    ]
  },
  {
    numb: 73,
    question: "She Is Scared _ Snake.",
    answer: "of",
    options: [
      "with",
      "from",
      "of",
      "by"
    ]
  },
  {
    numb: 74,
    question: "PORK: PIG ::",
    answer: "mutton: sheep",
    options: [
      "mutton: sheep",
      "rooster: chicken",
      "lobster: crustacea",
      "steer: beef"
    ]
  },
  {
    numb: 75,
    question: "Synonym Of Quorum Is _________?",
    answer: "necessary number of members",
    options: [
      "all the participants",
      "public meeting",
      "document",
      "necessary number of members"
    ]
  },
  {
    numb: 76,
    question: "_ Stood __ The Burning House.",
    answer: "The girl   on",
    options: [
      "The girl   on",
      "A girl          on",
      "A girl  in",
      "Girl             in"
    ]
  },
  {
    numb: 77,
    question: "_weight Gain Or Weight Loss Is Not Good For Your Body.",
    answer: "Excessive",
    options: [
      "Excessive",
      "Explosive",
      "Expressive",
      "Extensive"
    ]
  },
  {
    numb: 78,
    question: "Antonym Of Dearth Is ________?",
    answer: "abundance",
    options: [
      "poverty",
      "lack",
      "foreign",
      "abundance"
    ]
  },
  {
    numb: 79,
    question: "Synonym Of Fastidious Is _________?",
    answer: "squeamish",
    options: [
      "precise",
      "speedy",
      "hungry",
      "squeamish"
    ]
  },
  {
    numb: 80,
    question: "Synonym Of Dicker Is _________?",
    answer: "bargain",
    options: [
      "argue",
      "complain",
      "waste time",
      "bargain"
    ]
  },
  {
    numb: 81,
    question: "Synonym Of Furlong Is _________?",
    answer: "eighth of a mile",
    options: [
      "eighth of a mile",
      "lengthy stay",
      "loneliness",
      "quarter of a mile"
    ]
  },
  {
    numb: 82,
    question: "INDUSTRIOUSNESS : ACTIVITY ::",
    answer: "fastidiousness : selectivity",
    options: [
      "anxiousness : apathy",
      "kindliness : animosity",
      "purposefulness : enthusiasm",
      "fastidiousness : selectivity"
    ]
  },
  {
    numb: 83,
    question: "Synonym Of Trail_________?",
    answer: "To chase",
    options: [
      "To fix",
      "To chase",
      "To disturb",
      "To divert"
    ]
  },
  {
    numb: 84,
    question: "Synonym Of Kidnap Is _____________?",
    answer: "Abduct",
    options: [
      "Abduct",
      "Appaling",
      "All the above",
      "Renounce"
    ]
  },
  {
    numb: 85,
    question: "The Man __ You Met Is An Anchorperson.",
    answer: "whom",
    options: [
      "whose",
      "who",
      "whom",
      "which"
    ]
  },
  {
    numb: 86,
    question: "Synonym Of Onerous Is _________?",
    answer: "burdensome",
    options: [
      "proud",
      "possessive",
      "burdensome",
      "droll"
    ]
  },
  {
    numb: 87,
    question: "Antonym Of SINGULAR Is _____________?",
    answer: "Common",
    options: [
      "Social",
      "Common",
      "Ancient",
      "Dull"
    ]
  },
  {
    numb: 88,
    question: "Synonym Of Confiscated Is________?",
    answer: "Seize",
    options: [
      "Return",
      "Seize",
      "Free",
      "Allow"
    ]
  },
  {
    numb: 89,
    question: "Synonym Of Frenetic Is _________?",
    answer: "frantic",
    options: [
      "idol",
      "frantic",
      "relaxed",
      "continental"
    ]
  },
  {
    numb: 90,
    question: "Synonym Of Daft Is _________?",
    answer: "silly",
    options: [
      "awkward",
      "breezy",
      "nimble",
      "silly"
    ]
  },
  {
    numb: 91,
    question: "Antonym Of NEBULOUS Is _____________?",
    answer: "Apparent",
    options: [
      "Apparent",
      "Misty",
      "Shadowy",
      "Murky"
    ]
  },
  {
    numb: 92,
    question: "Synonym Of  Pledge  Is _____________?",
    answer: "Vow",
    options: [
      "Vow",
      "Outclass",
      "Compensate",
      "Plunder"
    ]
  },
  {
    numb: 93,
    question: "WAN: COLOUR ::",
    answer: "insipid: flavour",
    options: [
      "insipid: flavour",
      "corpulent: weight",
      "enigmatic: puzzle",
      "pallid: complexion"
    ]
  },
  {
    numb: 94,
    question: "Antonym Of Accelerate Is _______?",
    answer: "delay",
    options: [
      "risk",
      "delay",
      "deny",
      "monitor"
    ]
  },
  {
    numb: 95,
    question: "Synonym Of  Perpetual Is ________?",
    answer: "Everlasting",
    options: [
      "Sneak",
      "Garrulous",
      "Liberal",
      "Everlasting"
    ]
  },
  {
    numb: 96,
    question: "Synonym Of BONHAMIE Is__________?",
    answer: "friendliness",
    options: [
      "curriculum",
      "friendliness",
      "Insolent",
      "Meticulous"
    ]
  },
  {
    numb: 97,
    question: "Synonym Of Benchmark Is _________?",
    answer: "reference point",
    options: [
      "reference point",
      "exhibition",
      "repute",
      "label"
    ]
  },
  {
    numb: 98,
    question: "Cobbler: Leather ::",
    answer: "Mason: Stone",
    options: [
      "Television: Engineer",
      "Shirt: Boutique",
      "Mason: Stone",
      "Woodcutter: Furniture"
    ]
  },
  {
    numb: 99,
    question: "Synonym Of Civil Is __________?",
    answer: "public",
    options: [
      "trite",
      "unkind",
      "questionable",
      "public"
    ]
  },
  {
    numb: 100,
    question: "Synonym Of PREVARICATE Is _____________?",
    answer: "Lie",
    options: [
      "Early",
      "Truth",
      "Delay",
      "Lie"
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