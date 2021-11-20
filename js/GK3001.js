// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which Of The Following Have Extremely Limited Resources Of Water?",
    answer: "Deserts",
    options: [
      "Coastal Areas",
      "Deserts",
      "Plains",
      "Mountains"
    ]
  },
  {
    numb: 2,
    question: "Which Is The Most Populous Muslim Country?",
    answer: "Indonesia",
    options: [
      "Pakistan",
      "Indonesia",
      "Nigeria",
      "Bangladesh"
    ]
  },
  {
    numb: 3,
    question: "The First SAARC Summit Was Held In ________ Dacca, The Capital Of Bangladesh.",
    answer: "1985",
    options: [
      "1982",
      "1983",
      "1984",
      "1985"
    ]
  },
  {
    numb: 4,
    question: "The Biggest Ocean Of The World Is _____?",
    answer: "Pacific",
    options: [
      "Arctic",
      "Indian",
      "Mediterranean",
      "Pacific"
    ]
  },
  {
    numb: 5,
    question: "Maritime Is A Security Agency Of Which Country?",
    answer: "Pakistan",
    options: [
      "China",
      "France",
      "Germany",
      "Pakistan"
    ]
  },
  {
    numb: 6,
    question: "Napoleon Bonaparte Was The King Of___________?",
    answer: "France",
    options: [
      "France",
      "Italy",
      "Russia",
      "Spain"
    ]
  },
  {
    numb: 7,
    question: "Helsinki Is The Capital Of Which Country?",
    answer: "Finland",
    options: [
      "Poland",
      "North korea",
      "Finland",
      "Austria"
    ]
  },
  {
    numb: 8,
    question: "South Pole Was Discovered By__________?",
    answer: "Roald Amundsen",
    options: [
      "Cabot",
      "Robert Peary",
      "North America",
      "Roald Amundsen"
    ]
  },
  {
    numb: 9,
    question: "What Is Big Ben?",
    answer: "Clock at British parliament building",
    options: [
      "A galaxy of stars on the sky",
      "The worlds highest tower in Tokyo",
      "The Worlds first railway engine",
      "Clock at British parliament building"
    ]
  },
  {
    numb: 10,
    question: "World Press Freedom Prize Was Established In _______ By United Nations Cultural Body UNESCOs.",
    answer: "1997",
    options: [
      "1993",
      "1995",
      "1997",
      "1999"
    ]
  },
  {
    numb: 11,
    question: "Ghana Is The New Name Of_________?",
    answer: "Gold coast",
    options: [
      "Diamond coast",
      "Gold coast",
      "Silver coast",
      "Black coast"
    ]
  },
  {
    numb: 12,
    question: "Habsha Is The Old Name Of_________?",
    answer: "Ethiopia",
    options: [
      "Ethiopia",
      "Zaire",
      "Uganda",
      "Nigeria"
    ]
  },
  {
    numb: 13,
    question: "What Is A Basin?",
    answer: "Lower area of land",
    options: [
      "High area of land",
      "Deep area of River",
      "Lower area of land",
      "deep area of ocean"
    ]
  },
  {
    numb: 14,
    question: "The International Anti-Corruption Day (IACD) Is Observed Annually Across The World On_______?",
    answer: "9th December",
    options: [
      "1st January",
      "9th December",
      "9th January",
      "1st February"
    ]
  },
  {
    numb: 15,
    question: "ODI Stands For___________?",
    answer: "One Day International",
    options: [
      "One Day International",
      "Overseas Development Institute",
      "Oracle Data Integrator",
      "Office for Disability Issues"
    ]
  },
  {
    numb: 16,
    question: "Battery Was Invented By__________?",
    answer: "Alessandro Volta",
    options: [
      "Nicolas Léonard Sadi Carnot",
      "Alessandro Volta",
      "Michael Faraday",
      "Friedrich Bessel"
    ]
  },
  {
    numb: 17,
    question: "Who Was Known As The Ambassador To The Worlds Religion ?",
    answer: "Huston Smith",
    options: [
      "Mala YousafZaai",
      "Dalayi Lama",
      "Huston Smith",
      "None of these"
    ]
  },
  {
    numb: 18,
    question: "Panda Is Found In Which Country?",
    answer: "China",
    options: [
      "Nepal",
      "Bhutan",
      "India",
      "China"
    ]
  },
  {
    numb: 19,
    question: "The Worlds Oldest Lake Is___________?",
    answer: "Lake Baikal",
    options: [
      "Lake Baikal",
      "Lake Superior",
      "Lake Victoria",
      "Great Bear Lake"
    ]
  },
  {
    numb: 20,
    question: "Hegel Was A ___________ Philosopher?",
    answer: "German",
    options: [
      "French",
      "German",
      "Italian",
      "Swedish"
    ]
  },
  {
    numb: 21,
    question: "Black Pool Is A __________ In England?",
    answer: "Resort",
    options: [
      "Hotel",
      "Tower",
      "Resort",
      "Island"
    ]
  },
  {
    numb: 22,
    question: "Moseley Road Baths Are Located In ________?",
    answer: "UK",
    options: [
      "UK",
      "Iran",
      "Afghanistan",
      "India"
    ]
  },
  {
    numb: 23,
    question: "SAARC 1st Summit Was Held In__________?",
    answer: "Dhaka",
    options: [
      "Tehran",
      "Mumbai",
      "Kathmandu",
      "Dhaka"
    ]
  },
  {
    numb: 24,
    question: "World Happiness Index Was First Time Published In Year ___?",
    answer: "2012",
    options: [
      "2009",
      "2010",
      "2012",
      "2013"
    ]
  },
  {
    numb: 25,
    question: "Vatican City In Which The Pope Lives Is A City That Lies In _________?",
    answer: "Italy",
    options: [
      "Germany",
      "France",
      "Italy",
      "Belgium"
    ]
  },
  {
    numb: 26,
    question: "Term And Tenure Of Senate Membership Is ________ Years.",
    answer: "6 years",
    options: [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ]
  },
  {
    numb: 27,
    question: "How Many General Seats Each Province Have In The Senate?",
    answer: "14",
    options: [
      "14",
      "16",
      "18",
      "20"
    ]
  },
  {
    numb: 28,
    question: "Which Conutry Is Called Switzerland Of Africa?",
    answer: "Swaziland",
    options: [
      "Egypt",
      "Somalia",
      "Swaziland",
      "Algeria"
    ]
  },
  {
    numb: 29,
    question: "Which Country Is Called Land Of Milk And Honey?",
    answer: "Lebanon",
    options: [
      "Lebanon",
      "Iraq",
      "Syria",
      "India"
    ]
  },
  {
    numb: 30,
    question: "Which Conutry Is Called Land Of Protease?",
    answer: "South Africa",
    options: [
      "Australia",
      "NewZealand",
      "South Africa",
      "Zimbabwe"
    ]
  },
  {
    numb: 31,
    question: "Where Is The Official Residence Of Prime Minister Of Sri Lanka?",
    answer: "Temple Trees",
    options: [
      "Temple Trees",
      "Queens Land",
      "Blue House",
      "Elysee Palace"
    ]
  },
  {
    numb: 32,
    question: "Which Country Is Called Thunderbolt Of Asia?",
    answer: "Bhutan",
    options: [
      "Thailand",
      "Bhutan",
      "China",
      "Taiwan"
    ]
  },
  {
    numb: 33,
    question: "__________ Is The Branch Of Physical Geography Dealing With The Formation And Features Of Mountains.",
    answer: "Orography",
    options: [
      "Orography",
      "Cartography",
      "Palaeogeography",
      "Oceanography"
    ]
  },
  {
    numb: 34,
    question: "The Name Of Famous Clown At Food Chain McDonalds Name Is ____________?",
    answer: "Ronald McDonald",
    options: [
      "Asa Candler",
      "Col. Harland Sanders",
      "Ronald McDonald",
      "Ray Kroc"
    ]
  },
  {
    numb: 35,
    question: "Which Country Is Called Crossroads Of Western Europe?",
    answer: "Belgium",
    options: [
      "Belgium",
      "Norway",
      "England",
      "Switzerland"
    ]
  },
  {
    numb: 36,
    question: "Bagram Is An Airbase Of USA Situated In__________?",
    answer: "Afghanistan",
    options: [
      "Afghanistan",
      "Pakistan",
      "Somalia",
      "Kazakhstan"
    ]
  },
  {
    numb: 37,
    question: "Which Country Is Called Isle Of Pearls?",
    answer: "Bahrain",
    options: [
      "Iran",
      "Bahrain",
      "Iraq",
      "Syria"
    ]
  },
  {
    numb: 38,
    question: "___________is The Key To The Mediterranean Sea?",
    answer: "Gibraltar",
    options: [
      "Spain",
      "Egypt",
      "Bab-ul-Maneb",
      "Gibraltar"
    ]
  },
  {
    numb: 39,
    question: "Which City Is Called The Modern Babylon?",
    answer: "London",
    options: [
      "London",
      "Amsterdam",
      "Berlin",
      "Paris"
    ]
  },
  {
    numb: 40,
    question: "Which Country Is Called Land Of Fertile Fields?",
    answer: "Algeria",
    options: [
      "Algeria",
      "Luanda",
      "Nigeria",
      "Greenland"
    ]
  },
  {
    numb: 41,
    question: "Which Ocean Is Called Herring Pond?",
    answer: "Atlantic Ocean",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
      "Indian Ocean"
    ]
  },
  {
    numb: 42,
    question: "FATA Has _______ Seats For Women In National Assembly.",
    answer: "7",
    options: [
      "3",
      "5",
      "7",
      "9"
    ]
  },
  {
    numb: 43,
    question: "Which City Is Called City Of Eternal Springs?",
    answer: "Quito",
    options: [
      "Geneva",
      "Berlin",
      "London",
      "Quito"
    ]
  },
  {
    numb: 44,
    question: "Which Country Is Called Land Of Amber?",
    answer: "Lithuania",
    options: [
      "Lithuania",
      "Bolivia",
      "Canada",
      "India"
    ]
  },
  {
    numb: 45,
    question: "Which Country Is Called Great Britain Of Pacific?",
    answer: "Japan",
    options: [
      "Taiwan",
      "NewZealand",
      "Japan",
      "Brunai"
    ]
  },
  {
    numb: 46,
    question: "Worlds Most Valuable (Highest Ranked) Currency Is__________?",
    answer: "Kuwait Dinar",
    options: [
      "Kuwait Dinar",
      "Bahrain Dinar",
      "Oman Rial",
      "Jordan Dinar"
    ]
  },
  {
    numb: 47,
    question: "Which City Is Called Gateway Of India?",
    answer: "Mumbai",
    options: [
      "Mumbai",
      "Dehli",
      "Kalcutta",
      "Hyderabad Deccan"
    ]
  },
  {
    numb: 48,
    question: "Which Country Is Called Land Of Snow?",
    answer: "Canada",
    options: [
      "Switzerland",
      "Netherlands",
      "Canada",
      "Ireland"
    ]
  },
  {
    numb: 49,
    question: "Which City Is Called Golden City?",
    answer: "Johannesburg",
    options: [
      "London",
      "Mumbai",
      "Colombo",
      "Johannesburg"
    ]
  },
  {
    numb: 50,
    question: "Which City Is Called The City Of Conferences?",
    answer: "Geneva",
    options: [
      "Newyork",
      "Geneva",
      "Washington. DC",
      "London"
    ]
  },
  {
    numb: 51,
    question: "Which Country Is Called Land Of Lilies?",
    answer: "Canada",
    options: [
      "Canada",
      "USA",
      "Mexico",
      "UK"
    ]
  },
  {
    numb: 52,
    question: "The Highest Peak Of Africa Is __________?",
    answer: "Mt. Kilimanjaro",
    options: [
      "Mt. Elbrus",
      "Mt. Kilimanjaro",
      "Mt. Everest",
      "Mt. Blanc"
    ]
  },
  {
    numb: 53,
    question: "Which Of The Following Crops Is The Largest Consumer Of Water?",
    answer: "Sugarcane",
    options: [
      "Rice",
      "Sugarcane",
      "Wheat",
      "Pulses"
    ]
  },
  {
    numb: 54,
    question: "Which City Is Called The City Of Silent Thoroughfares?",
    answer: "Venice",
    options: [
      "Amsterdam",
      "Venice",
      "Paris",
      "Stockholm"
    ]
  },
  {
    numb: 55,
    question: "Which Country Is Called The Land Of Fire?",
    answer: "Azerbaijan",
    options: [
      "Azerbaijan",
      "Uzbekistan",
      "Tajikistan",
      "Tukemnestan"
    ]
  },
  {
    numb: 56,
    question: "Which Country Is Called Land Of Mighty Rivers?",
    answer: "Nigeria",
    options: [
      "Egypt",
      "India",
      "USA",
      "Nigeria"
    ]
  },
  {
    numb: 57,
    question: "Tim Paine Is The _______Test Captain Of Australia?",
    answer: "46",
    options: [
      "45",
      "46",
      "49",
      "51"
    ]
  },
  {
    numb: 58,
    question: "Commonwealth Secretary General Patricia Scotland Is ________ By Profession?",
    answer: "Barrister",
    options: [
      "Doctor",
      "Engineer",
      "Painter",
      "Barrister"
    ]
  },
  {
    numb: 59,
    question: "Which Among The Following Does Not Belong To Seven New Wonders Of The World?",
    answer: "The Eiffel Tower in Paris",
    options: [
      "Taj Mahal of Agra",
      "Pyramid at Chichen Itza",
      "Ruins of Petra",
      "The Eiffel Tower in Paris"
    ]
  },
  {
    numb: 60,
    question: "Who Designed Statue Of Christ The Redeemer?",
    answer: "Heitor de Silva Costa",
    options: [
      "Anna Levinson",
      "Apostolos Vellios",
      "Heitor de Silva Costa",
      "Olena Shurkhno"
    ]
  },
  {
    numb: 61,
    question: "Who Built Machu Picchu?",
    answer: "Pachacutec",
    options: [
      "Atahualpa",
      "Huayna Capac",
      "Pachacutec",
      "Viracocha Inca"
    ]
  },
  {
    numb: 62,
    question: "Who Built The Pharos Of Alexandria?",
    answer: "Sostratus of Cnidus",
    options: [
      "Dinocrates",
      "Eudoxus of Cnidus",
      "Mausolus",
      "Sostratus of Cnidus"
    ]
  },
  {
    numb: 63,
    question: "The Height Of Burj Khalifa Is___________?",
    answer: "828 metres",
    options: [
      "828 metres",
      "820 metres",
      "815 metres",
      "None of the above"
    ]
  },
  {
    numb: 64,
    question: "Which Is Called The First Wonder Of The World?",
    answer: "The Pyramids of Egypt",
    options: [
      "The Pyramids of Egypt",
      "The Hanging Gardens of Babylon",
      "The Tomb of Mausolus",
      "The Colossus of Rhodes"
    ]
  },
  {
    numb: 65,
    question: "The Worlds Highest Dam Nurek Is Located In?",
    answer: "Tajikistan",
    options: [
      "Azerbaijan",
      "Tajikistan",
      "Kazakhstan",
      "Uzbekistan"
    ]
  },
  {
    numb: 66,
    question: "_______ Member Of SAARC Has Largest Literacy Rate.",
    answer: "Maldives",
    options: [
      "Maldives",
      "Sri Lanka",
      "India",
      "Bangladesh"
    ]
  },
  {
    numb: 67,
    question: "Pakistan Is The _____ Largest Cotton Grower In The World.",
    answer: "5th",
    options: [
      "4th",
      "5th",
      "6th",
      "7th"
    ]
  },
  {
    numb: 68,
    question: "The Statue Of Liberty Was A Gift To USA From Which Of The Following Country?",
    answer: "France",
    options: [
      "Greece",
      "Great Britain",
      "France",
      "Italy"
    ]
  },
  {
    numb: 69,
    question: "First Pakistani To Hit Century In T20 International Cricket Was ______________.",
    answer: "Ahmad Shahzad",
    options: [
      "Imran Nazir",
      "Kamran Akmal",
      "Ahmad Shahzad",
      "Shahid Afridi"
    ]
  },
  {
    numb: 70,
    question: "The Earthquake Reconstruction And Rehabilitation Authority (ERRA) Was Established On October 24_____________?",
    answer: "2005",
    options: [
      "2004",
      "2005",
      "2006",
      "2007"
    ]
  },
  {
    numb: 71,
    question: "Ipoh Is A City In_________________?",
    answer: "Malaysia",
    options: [
      "Indonesia",
      "Malaysia",
      "China",
      "South Korea"
    ]
  },
  {
    numb: 72,
    question: "Taurus Mountains Are Located In?",
    answer: "Turkey",
    options: [
      "Pakistan",
      "Turkey",
      "Afghanistan",
      "Nepal"
    ]
  },
  {
    numb: 73,
    question: "Which Is The Second Largest Landlocked Country In The World?",
    answer: "Mangolia",
    options: [
      "Kazakhstan",
      "Azerbaijan",
      "Mangolia",
      "Uzbekistan"
    ]
  },
  {
    numb: 74,
    question: "Which Is Called The Valley Of Ten Thousand Smokes?",
    answer: "Alaska",
    options: [
      "Texas",
      "California",
      "Alaska",
      "Arizona"
    ]
  },
  {
    numb: 75,
    question: "The Worlds Longest Glacier Lambert Is Located In___________?",
    answer: "Antarctica",
    options: [
      "Asia",
      "Europe",
      "Africa",
      "Antarctica"
    ]
  },
  {
    numb: 76,
    question: "ICC Stands For ______________.",
    answer: "International cricket council",
    options: [
      "International cricket conference",
      "International cricket council",
      "International cricket club",
      "International cricket coalition"
    ]
  },
  {
    numb: 77,
    question: "How Many Points Are There In Badminton?",
    answer: "21",
    options: [
      "11",
      "21",
      "31",
      "41"
    ]
  },
  {
    numb: 78,
    question: "World Immunization Day Is Being Celebrated On____________?",
    answer: "10-Nov",
    options: [
      "10-Nov",
      "15-Nov",
      "20-Nov",
      "25-Nov"
    ]
  },
  {
    numb: 79,
    question: "Arab Spring Movement In The Middle East Countries Started From Which Country?",
    answer: "Tunis",
    options: [
      "Tunis",
      "Egypt",
      "Syria",
      "Sudan"
    ]
  },
  {
    numb: 80,
    question: "Brazuca Was The Official Match Ball Of FIFA World Cup 2014. Brazuca Means?",
    answer: "Our Fellow",
    options: [
      "Success with Unity",
      "Brazilian Culture",
      "Grave Culture",
      "Our Fellow"
    ]
  },
  {
    numb: 81,
    question: "Tehrir Square Also Known As Martyr Square Is Located In___________?",
    answer: "Egypt",
    options: [
      "Turkey",
      "Syria",
      "Egypt",
      "Tunis"
    ]
  },
  {
    numb: 82,
    question: "Silicon Valley Is A Nickname For The Southern Portion Of San Francisco Bay Area In The Northern Part Of U.S State Of____________?",
    answer: "California",
    options: [
      "Alaska",
      "Newyork",
      "California",
      "Michigan"
    ]
  },
  {
    numb: 83,
    question: "The Hanging Gardens Is Located In ___________?",
    answer: "Iraq (Babylon)",
    options: [
      "Egypt",
      "Iraq (Babylon)",
      "Iran",
      "Jordan"
    ]
  },
  {
    numb: 84,
    question: "What Is The Name Of Pakistans Research Station In Antarctica?",
    answer: "Jinnah Research Station",
    options: [
      "Maitri Research Station",
      "Jinnah Research Station",
      "Iqbal Research Station",
      "None of these"
    ]
  },
  {
    numb: 85,
    question: "Which City Became The First In The World To Have Its Own Microsoft Font?",
    answer: "Dubai",
    options: [
      "Dubai",
      "New York",
      "Shanghai",
      "Tokyo"
    ]
  },
  {
    numb: 86,
    question: "Who Is The Leader Of PTM?",
    answer: "Manzoor Pashteen",
    options: [
      "Amjad Pashteen",
      "Siraj Pashteen",
      "Manzoor Pashteen",
      "Mehsood Pashteen"
    ]
  },
  {
    numb: 87,
    question: "PTM Stands For?",
    answer: "Pashtun Tahaffuz Movement",
    options: [
      "Pashtun Tajir Movement",
      "Pashtun Tahaffuz Movement",
      "Pashtun Tehreek Movement",
      "Pashtun Tribe Movement"
    ]
  },
  {
    numb: 88,
    question: "HDI Stands For?",
    answer: "Human Development Index",
    options: [
      "Human Development Infrastructure",
      "Human Development Industry",
      "Human Development Index",
      "Human Development Institute"
    ]
  },
  {
    numb: 89,
    question: "Athens Is The New Name Of __________.",
    answer: "Athinai",
    options: [
      "Greece",
      "Athinai",
      "Cyprus",
      "Rome E. Germany"
    ]
  },
  {
    numb: 90,
    question: "Where Is Worlds First ATM Machine Located In ___________?",
    answer: "Enfield",
    options: [
      "Enfield",
      "North London",
      "B. Manchester",
      "East London"
    ]
  },
  {
    numb: 91,
    question: "Who Is The Worlds Longest Reigning Living Monarch?",
    answer: "Queen Elizabeth II",
    options: [
      "King Bhumibol Adulyadej",
      "Prince Charles",
      "Queen Elizabeth II",
      "None of these"
    ]
  },
  {
    numb: 92,
    question: "Elysee Palace Is The Official Residence Of The President Of___________?",
    answer: "France",
    options: [
      "USA",
      "Brazil",
      "Sweden",
      "France"
    ]
  },
  {
    numb: 93,
    question: "National Saint Of Pakistan Is ________________________.",
    answer: "Fariduddin Ganj shakar",
    options: [
      "Lal Shahbaz Qalandar",
      "Abdullah Shah Ghazi",
      "Moinuddin Chisti",
      "Fariduddin Ganj shakar"
    ]
  },
  {
    numb: 94,
    question: "Height Of Statue Of Liberty Is__________?",
    answer: "93 m",
    options: [
      "73 m",
      "93 m",
      "54 m",
      "97 m"
    ]
  },
  {
    numb: 95,
    question: "Third Battle Of Panipat Began On _________.",
    answer: "January 14, 1761",
    options: [
      "October 17, 1761",
      "June 17, 1762",
      "January 14, 1761",
      "December 21, 1961"
    ]
  },
  {
    numb: 96,
    question: "Second Battle Of Panipat Began On _________.",
    answer: "November 5, 1556",
    options: [
      "February 8, 1954",
      "January 7, 1955",
      "November 5, 1556",
      "December 8, 1957"
    ]
  },
  {
    numb: 97,
    question: "First Battle Of Panipat Began On _________.",
    answer: "April 21, 1526",
    options: [
      "January 11, 1521",
      "April 21, 1526",
      "December 12, 1527",
      "October 12, 1529"
    ]
  },
  {
    numb: 98,
    question: "The Official Residence Of President Of Kyrgyzstan Is __________.",
    answer: "White House",
    options: [
      "Blue House",
      "White House",
      "Chitralada Palace",
      "Temple Trees"
    ]
  },
  {
    numb: 99,
    question: "IED Stands For",
    answer: "Improvised Explosive Device",
    options: [
      "Installed Explosive Device",
      "Implanted Explosive Device",
      "Improvised Explosive Device",
      "Instantaneous Explosive Device"
    ]
  },
  {
    numb: 100,
    question: "Which Police Force Officially Inducted Worlds First Operational Robot Police Officer?",
    answer: "Dubai",
    options: [
      "Dubai",
      "Venice",
      "Newyork",
      "Shanghai"
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