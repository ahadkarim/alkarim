// creating an array and passing the number, questions, options, and answers
let questions = [
      {
        numb: 1,
        question: "Which is the National Animal of Pakistan?",
        answer: "Markhor",
        options: [
          "Markhor",
          "Buffalo",
          "Peacock",
          "Lion"
        ]
      },
      {
        numb: 2,
        question: "The constellation of seven bright starts is known as?",
        answer: "The Great Bear",
        options: [
          "The Milky Way",
          "The Great Bear",
          "Asteroids",
          "Satellites"
        ]
      },
      {
        numb: 3,
        question: "World Trade Organization is the new name of?",
        answer: "GATT",
        options: [
          "World Bank",
          "I.M.F",
          "GATT",
          "I.F.C"
        ]
      },
      {
        numb: 4,
        question: "The city of Seven Hills is?",
        answer: "Rome",
        options: [
          "Milan",
          "Athens",
          "Rome",
          "Zurich"
        ]
      },
      {
        numb: 5,
        question: "Beijing is the new name of?",
        answer: "Peking",
        options: [
          "Hiroshima",
          "Yokohama",
          "Peking",
          "Seoul"
        ]
      },
      {
        numb: 6,
        question: "Which country is not a member of SAARC?",
        answer: "Myanmar",
        options: [
          "Maldieves",
          "Bhutan",
          "Myanmar",
          "Sri Lanka"
        ]
      },
      {
        numb: 7,
        question: "Which of the following is a military alliance?",
        answer: "NATO",
        options: [
          "ASEAN",
          "NAFTA",
          "NATO",
          "EEC"
        ]
      },
      {
        numb: 8,
        question: "Name the most polluted city out of the following?",
        answer: "Mexico",
        options: [
          "Mexico",
          "London",
          "Karachi",
          "Tokyo"
        ]
      },
      {
        numb: 9,
        question: "Who invented the printing press?",
        answer: "Johann Gutenberg",
        options: [
          "Graham Bell",
          "Marconi",
          "Johann Gutenberg",
          "Thomas Edison"
        ]
      },
      {
        numb: 10,
        question: "The largest desert of the world is?",
        answer: "Sahara Desert",
        options: [
          "Gobi Desert",
          "Libyan Desert",
          "Thar Desert",
          "Sahara Desert"
        ]
      },
      {
        numb: 11,
        question: "The term in Computer Science SSD stands for?",
        answer: "Solid State Drive",
        options: [
          "Simple Sequence Drive",
          "Short Storage Drive",
          "Solid State Drive",
          "Super Speed Drive"
        ]
      },
      {
        numb: 12,
        question: "If the Prime Minister intends to resign, he may address his resignation to?",
        answer: "The President",
        options: [
          "The Speaker, National Assembly",
          "The Chairman Senate",
          "The President",
          "None of above"
        ]
      },
      {
        numb: 13,
        question: "The Lower House of the Parliament is?",
        answer: "The National Assembly",
        options: [
          "The Senate",
          "The National Assembly",
          "A Provincial Assembly",
          "Combination of Provincial Assemblies"
        ]
      },
      {
        numb: 14,
        question: "The Governer is appointed by?",
        answer: "The President",
        options: [
          "The Prime Minister",
          "The Chief Minister",
          "The President",
          "The National Assembly"
        ]
      },
      {
        numb: 15,
        question: "The Session of Senate is presided over by?",
        answer: "The Chairman",
        options: [
          "The President",
          "The Speaker",
          "The Chairman",
          "None of above"
        ]
      },
      {
        numb: 16,
        question: "Chief Election Commissioner is appointed for a term of?",
        answer: "Five Years",
        options: [
          "Five Years",
          "As determined by the President",
          "Same term as it of the assemblies",
          "Three Years"
        ]
      },
      {
        numb: 17,
        question: "Since its promulgation the constitution of Islamic Republic of Pakistan 1973 has been amended?",
        answer: "24 times",
        options: [
          "24 times",
          "18 times",
          "16 times",
          "14 times"
        ]
      },
      {
        numb: 18,
        question: "The Objectives Resolution was made part of substantive provisions of the Constitution of 1973?",
        answer: "By Presidential Order 14 of 1985 (Revival of Constitution Order)",
        options: [
          "At the time of its promugation in 1973",
          "By Presidential Order 14 of 1985 (Revival of Constitution Order)",
          "Through amendments made in the Constitution in 1975",
          "Through a resolution of the Parliament (Majlis-e-Shoora)"
        ]
      },
      {
        numb: 19,
        question: "The construction of Wullar Barrage shall result in?",
        answer: "Scratching the canal irrigation in Pakistan",
        options: [
          "Scratching the canal irrigation in Pakistan",
          "Threat to defence measures",
          "Minimizing energy production",
          "All of these"
        ]
      },
      {
        numb: 20,
        question: "Sir Kreek denotes?",
        answer: "None of above",
        options: [
          "A mountain top in Northern area",
          "An ice berg of Siachen",
          "An islan in Indian Ocean",
          "None of above"
        ]
      },
      {
        numb: 21,
        question: "Census in Pakistan is held?",
        answer: "Once in ten year",
        options: [
          "Every year",
          "After every 3 years",
          "After every 5 years",
          "Once in ten year"
        ]
      },
      {
        numb: 22,
        question: "Hataf III Missile is also called?",
        answer: "Ghaznavi Missile",
        options: [
          "Abdali Missile",
          "A. Q. Missile",
          "Ghaznavi Missile",
          "Non of above"
        ]
      },
      {
        numb: 23,
        question: "Faiz Ahmed Faiz was?",
        answer: "All of above",
        options: [
          "A Poet",
          "A Journalist",
          "An Army Personnel",
          "All of above"
        ]
      },
      {
        numb: 24,
        question: "First natural gas reserve in Pakistan was discovered at?",
        answer: "Sui",
        options: [
          "Dhaka",
          "Attock",
          "Sui",
          "Dera Ghazi Khan"
        ]
      },
      {
        numb: 25,
        question: "The Province with the longest coast line?",
        answer: "Balochistan",
        options: [
          "Sindh",
          "Balochistan",
          "Punjab",
          "Khyber Pakhtunkhwa"
        ]
      },
      {
        numb: 26,
        question: "The largest artificial/grown forest of Pakistan?",
        answer: "Changa Manga",
        options: [
          "Chitral",
          "Changa Manga",
          "Gadoon",
          "Bannu"
        ]
      },
      {
        numb: 27,
        question: "Under the Constitution the employment of children is prohibited below the age of?",
        answer: "12 years",
        options: [
          "10 years",
          "12 years",
          "14 years",
          "16 years"
        ]
      },
      {
        numb: 28,
        question: "The juncture where two segments of the River Nile known as 'Nilain' join together is in?",
        answer: "Sudan",
        options: [
          "Egypt",
          "Sudan",
          "Palestine",
          "Jordan"
        ]
      },
      {
        numb: 29,
        question: "D.M.S (Document Management System) includes?",
        answer: "Desktop Publishing",
        options: [
          "Word Processing",
          "Desktop Publishing",
          "None of above",
          "Both (a) and (b)"
        ]
      },
      {
        numb: 30,
        question: "In the Nuclear field N.P.T stands for?",
        answer: "Non Proliferation Treaty",
        options: [
          "Non Polluting Test",
          "Net Particles Tube",
          "Non Proliferation Treaty",
          "Neuro Person Text"
        ]
      },
      {
        numb: 31,
        question: "Alumni denotes?",
        answer: "A former student",
        options: [
          "Plural of Aluminium substance",
          "A former student",
          "Celebration of Trade Unionism",
          "Renowned education instituion"
        ]
      },
      {
        numb: 32,
        question: "By the term 'Third World' we understand?",
        answer: "Under Developed Countries",
        options: [
          "Third Party Insurance Companies",
          "Non-Aligned Countries",
          "Under Developed Countries",
          "South Africa"
        ]
      },
      {
        numb: 33,
        question: "The author of the book 'Awaz-e-Dost' is?",
        answer: "Mukhtar Masud",
        options: [
          "Sir Sayyed Ahmed Khan",
          "Altaf Hussain Hali",
          "Josh Malih Abadi",
          "Mukhtar Masud"
        ]
      },
      {
        numb: 34,
        question: "Radio active waves were discovered by?",
        answer: "None of them",
        options: [
          "Al-Beruni",
          "Einstein",
          "Newton",
          "None of them"
        ]
      },
      {
        numb: 35,
        question: "Up hill journey makes the man bend forward to ensure?",
        answer: "Stability",
        options: [
          "High Speed",
          "Stability",
          "Avoiding fatigue",
          "Avoiding the beasts"
        ]
      },
      {
        numb: 36,
        question: "Angiography and Angioplasty mean?",
        answer: "Two different but inter related processes",
        options: [
          "One single process",
          "Plastic surgery",
          "Two different but inter related processes",
          "Diagnosis of diabetes"
        ]
      },
      {
        numb: 37,
        question: "Heat of sun-ray to earth is reduced by?",
        answer: "Ozone",
        options: [
          "Oxygen",
          "Nitrogen",
          "Ozone",
          "None of these"
        ]
      },
      {
        numb: 38,
        question: "A 'Drone' can be traced by?",
        answer: "Laser",
        options: [
          "Radar",
          "Laser",
          "Ultrasound Waves",
          "Laptop"
        ]
      },
      {
        numb: 39,
        question: "Pakistan is located in the tropic zone of?",
        answer: "North",
        options: [
          "South",
          "North",
          "East",
          "West"
        ]
      },
      {
        numb: 40,
        question: "The country situated in the east of Pakistan is?",
        answer: "India",
        options: [
          "Iran",
          "India",
          "China",
          "Afghanistan"
        ]
      },
      {
        numb: 41,
        question: "One of the main objectives of All - India Muslim League at the time of its creation was?",
        answer: "To be loyal to the Indian British Government",
        options: [
          "To be loyal to the Indian British Government",
          "To take active part in the politics of the country",
          "To be close to Hindu community;",
          "Not to take sides with any Indian community"
        ]
      },
      {
        numb: 42,
        question: "Indicate the highest civil award among the following?",
        answer: "Nishan-e-Pakistan",
        options: [
          "Sitara-e-Shujaat",
          "Hilal-e-Shujaat",
          "Nishan-e-Pakistan",
          "Tamgha-e-Shujaat"
        ]
      },
      {
        numb: 43,
        question: "Why Quid-e-Azam launched Direct Action day on August 16,1946?",
        answer: "To protest against breach of pledge by Viceroy FM Lord Wavell",
        options: [
          "To protest against breach of pledge by Viceroy FM Lord Wavell",
          "To oppose the Congress policies",
          "to get support from the masses for party membership",
          "to curb the upsrurge of the Nation Muslims"
        ]
      },
      {
        numb: 44,
        question: "Quid-e-Azam resigned from membership of Congress in?",
        answer: "1920",
        options: [
          "1913",
          "1916",
          "1920",
          "1922"
        ]
      },
      {
        numb: 45,
        question: "Who had the shortest tenure as Governor - General for Pakistan?",
        answer: "Muhammad Ali Jinnah",
        options: [
          "Iskendar Mirza",
          "Ghulam Muhammad",
          "Muhammad Ali Jinnah",
          "Kh. Nizammuddin"
        ]
      },
      {
        numb: 46,
        question: "Liaquat - Nehru pact was announced at Delhi in?",
        answer: "April 1950",
        options: [
          "January 1950",
          "February 1950",
          "March 1950",
          "April 1950"
        ]
      },
      {
        numb: 47,
        question: "One horse power is equal to?",
        answer: "746 watts",
        options: [
          "746 watts",
          "780 watts",
          "785 watts",
          "1000 watts"
        ]
      },
      {
        numb: 48,
        question: "Cusec is a unit of?",
        answer: "Water flow",
        options: [
          "Area",
          "Time",
          "Distance",
          "Water flow"
        ]
      },
      {
        numb: 49,
        question: "In which year did Barrack Hussain Obama receive the Nobel Prize for peace?",
        answer: "2009",
        options: [
          "2008",
          "2009",
          "2010",
          "2011"
        ]
      },
      {
        numb: 50,
        question: "The Old Man and the Sea is written by?",
        answer: "Ernest Hemingway",
        options: [
          "John Steinbeck",
          "Jane Austin",
          "Ernest Hemingway",
          "Agatha Christie"
        ]
      },
      {
        numb: 51,
        question: "Who wrote 'Hamlet'?",
        answer: "Shakespeare",
        options: [
          "Milton",
          "Wordsworth",
          "Shakespeare",
          "Marlowe"
        ]
      },
      {
        numb: 52,
        question: "Who wrote 'Paradise Lost'?",
        answer: "Milton",
        options: [
          "Keats",
          "Shelly",
          "Byron",
          "Milton"
        ]
      },
      {
        numb: 53,
        question: "Which city is located in two continents?",
        answer: "Istanbul",
        options: [
          "Istanbul",
          "Ankara",
          "Amsterdam",
          "London"
        ]
      },
      {
        numb: 54,
        question: "ATM means?",
        answer: "Automated Teller Machine",
        options: [
          "Announcement Time Machine",
          "Automated Teller Machine",
          "Automatic Time Machine",
          "Animated Time Machine"
        ]
      },
      {
        numb: 55,
        question: "Who presented the law of Falling Bodies?",
        answer: "Newton",
        options: [
          "Newton",
          "Einstien",
          "Galileo",
          "Russel"
        ]
      },
      {
        numb: 56,
        question: "The real name of great muslim reformer 'Hazrat Shah Wali Ullah' was?",
        answer: "Qutub-ud-Din",
        options: [
          "Shiekh Ahmed Sirhindi",
          "Qutub-ud-Din",
          "Haji Shariat Ullah",
          "Syed Ahmed Shaheed"
        ]
      },
      {
        numb: 57,
        question: "Sindh was separated from Bombay in?",
        answer: "1935",
        options: [
          "1919",
          "1925",
          "1935",
          "1937"
        ]
      },
      {
        numb: 58,
        question: "August Offer was made by?",
        answer: "Lord Linlithgow",
        options: [
          "Lord Mountbatten",
          "Lord Wavell",
          "Lord Irwin",
          "Lord Linlithgow"
        ]
      },
      {
        numb: 59,
        question: "How many tribal agencies are in federally administered tribal areas (FATA)?",
        answer: "7",
        options: [
          "4",
          "5",
          "6",
          "7"
        ]
      },
      {
        numb: 60,
        question: "The planet of our sloar system with maximum number of moons is?",
        answer: "Jupiter",
        options: [
          "Saturn",
          "Jupiter",
          "Venus",
          "Mercury"
        ]
      },
      {
        numb: 61,
        question: "What is the number of non-permanent members of United Nations Securtiy Council?",
        answer: "10",
        options: [
          "5",
          "7",
          "10",
          "15"
        ]
      },
      {
        numb: 62,
        question: "European Union consists of?",
        answer: "28 members",
        options: [
          "20 members",
          "25 members",
          "28 members",
          "30 members"
        ]
      },
      {
        numb: 63,
        question: "The book 'Essays on the life of Muhammad P.B.U.H' was written by?",
        answer: "Sir Syed Ahmed Khan",
        options: [
          "Sir Syed Ahmed Khan",
          "Syed Amir Ali",
          "Maulana Shibli Noumani",
          "None of above"
        ]
      },
      {
        numb: 64,
        question: "Who was the first president of All India Muslim League?",
        answer: "Sir Aga Khan",
        options: [
          "Sir Aga Khan",
          "Nawab Salim Ullah",
          "Mohammad Ali Jinnah",
          "Raja Sahib Mahmood"
        ]
      },
      {
        numb: 65,
        question: "When was UNO formed?",
        answer: "24th October 1945",
        options: [
          "24th October 1945",
          "7th November 1945",
          "26 November 1945",
          "5th December 1945"
        ]
      },
      {
        numb: 66,
        question: "Who wrote'The origin of species'?",
        answer: "Darwin",
        options: [
          "Karl Marx",
          "Darwin",
          "Einstien",
          "Bohr"
        ]
      },
      {
        numb: 67,
        question: "Who wrote the famous novel 'War and Peace'?",
        answer: "Lao Tolstoy",
        options: [
          "Lao Tolstoy",
          "Maxin Gorky",
          "Charles Dickens",
          "Bermad Shaw"
        ]
      },
      {
        numb: 68,
        question: "How many are the states of USA?",
        answer: "50",
        options: [
          "50",
          "48",
          "45",
          "42"
        ]
      },
      {
        numb: 69,
        question: "which are the two Seas that Suez Canal Connects?",
        answer: "Mediterranean and Red Sea",
        options: [
          "Mediterranean and Red Sea",
          "Red sea and Caspian Sea",
          "Caspian Sea and Arabian Sea",
          "Arabian Sea and Mediterranean"
        ]
      },
      {
        numb: 70,
        question: "Which state of USA Barack Obama comes from?",
        answer: "Illinois",
        options: [
          "New York",
          "California",
          "Illinois",
          "Florida"
        ]
      },
      {
        numb: 71,
        question: "Who is the Writer of Clash of Civilization and the Remaking of World Order?",
        answer: "Smuel P. Huntington",
        options: [
          "Francis Fokyuamaha",
          "Hansw J. Morganthau",
          "Noam Chomsky",
          "Smuel P. Huntington"
        ]
      },
      {
        numb: 72,
        question: "Who wrote 'A Brief History of Time'?",
        answer: "Stephen Fleming",
        options: [
          "Albert Einstein",
          "Stephen Fleming",
          "Stephen Hawking",
          "Max Plank"
        ]
      },
      {
        numb: 73,
        question: "What is the rotation period of the Earth",
        answer: "23 hours, 56 minutes and 4 seconds",
        options: [
          "23 hours, 56 minutes and 4 seconds",
          "23 hours, 52 minutes and 4 seconds",
          "23 hours, 58 minutes and 4 seconds",
          "23 hours, 58 minutes and 4 seconds"
        ]
      },
      {
        numb: 74,
        question: "How many colours a Spectrum has?",
        answer: "7",
        options: [
          "5",
          "7",
          "8",
          "9"
        ]
      },
      {
        numb: 75,
        question: "The famous Muslim Saint Baba Farid Ganj Shakr is burried at?",
        answer: "Pakpattan",
        options: [
          "Jhang",
          "Multan",
          "Pakpattan",
          "Kot Mithan"
        ]
      },
      {
        numb: 76,
        question: "The biggest barrage in Pakistan is?",
        answer: "Sukkur Barrage",
        options: [
          "Taunsa Barrage",
          "Kotri Barrage",
          "Guddu Barrage",
          "Sukkur Barrage"
        ]
      },
      {
        numb: 77,
        question: "What was the profession of Mohtrama Fatima Jinnah?",
        answer: "Dentist",
        options: [
          "Doctor",
          "Lawyer",
          "Dentist",
          "Economist"
        ]
      },
      {
        numb: 78,
        question: "The famous newspapers 'Comrade and Hamdard' were launched by?",
        answer: "Maulana Muhammad Ali Johar",
        options: [
          "Maulana Muhammad Ali Johar",
          "Sir Syed Ahmad Khan",
          "Ch. Rehmat Ali",
          "Allam Iqbal"
        ]
      },
      {
        numb: 79,
        question: "Indus Water Treaty was Signed during the regime of?",
        answer: "Ayub Khan",
        options: [
          "Ayub Khan",
          "Z. A. Bhutto",
          "Liaquat Ali Khan",
          "Parvez Musharaf"
        ]
      },
      {
        numb: 80,
        question: "Which country is located in the north of Pakistan?",
        answer: "China",
        options: [
          "Afghanistan",
          "Indian",
          "China",
          "Iran"
        ]
      },
      {
        numb: 81,
        question: "Pakistan has a coastline of?",
        answer: "1048 km",
        options: [
          "1048 km",
          "700 km",
          "600 km",
          "500 km"
        ]
      },
      {
        numb: 82,
        question: "Wimbledon Tennis Grounds is in?",
        answer: "England",
        options: [
          "Australia",
          "France",
          "England",
          "Germany"
        ]
      },
      {
        numb: 83,
        question: "The Muslim country with largest population is?",
        answer: "Indonesia",
        options: [
          "Bangladesh",
          "Pakistan",
          "Malaysia",
          "Indonesia"
        ]
      },
      {
        numb: 84,
        question: "Inflation means?",
        answer: "Increase in overall prices",
        options: [
          "Increase in overall prices",
          "Decrease in prices",
          "Increase in the family income",
          "Increase in the purchasing power"
        ]
      },
      {
        numb: 85,
        question: "Per Capita income means",
        answer: "Average income of a country",
        options: [
          "Income per person",
          "Income per family",
          "Average income of a country",
          "Average income of a city"
        ]
      },
      {
        numb: 86,
        question: "Which component of diet prevents constipation?",
        answer: "Fiber",
        options: [
          "Minerals",
          "Fiber",
          "Protien",
          "Vitamins"
        ]
      },
      {
        numb: 87,
        question: "Which one of the following has maximum calories?",
        answer: "Carbohydrates",
        options: [
          "Carbohydrates",
          "Protiens",
          "Fats",
          "Vitamins"
        ]
      },
      {
        numb: 88,
        question: "The whole developed in the Ozone layer is over?",
        answer: "Antarctica",
        options: [
          "Arctic",
          "Alaska",
          "Antarctica",
          "Amazon"
        ]
      },
      {
        numb: 89,
        question: "Programme written to make computer function in a desired way are called?",
        answer: "Software",
        options: [
          "Codes",
          "Facts",
          "Software",
          "Instructions"
        ]
      },
      {
        numb: 90,
        question: "Kargil is in?",
        answer: "Held Kashmir",
        options: [
          "Held Kashmir",
          "Azad Kashmir",
          "Gilgit",
          "Northern Areas"
        ]
      },
      {
        numb: 91,
        question: "In which district is the biggest salt mine located in Pakistan?",
        answer: "Jehlum",
        options: [
          "Mianwali",
          "Sargodha",
          "Jehlum",
          "Mingora"
        ]
      },
      {
        numb: 92,
        question: "In the South of Pakistan is?",
        answer: "Arabian Sea",
        options: [
          "Iran",
          "China",
          "Afghanistan",
          "Arabian Sea"
        ]
      },
      {
        numb: 93,
        question: "Gomel University is in?",
        answer: "Dera Ismail Khan",
        options: [
          "Quetta",
          "Peshawar",
          "Dera Ghazi Khan",
          "Dera Ismail Khan"
        ]
      },
      {
        numb: 94,
        question: "How many Nuclear Power Plants are there in Pakistan?",
        answer: "4",
        options: [
          "2",
          "3",
          "4",
          "5"
        ]
      },
      {
        numb: 95,
        question: "The major work force of Pakistan is in the sector of?",
        answer: "Agriculture",
        options: [
          "Agriculture",
          "Trade",
          "Services",
          "Manufacturing"
        ]
      },
      {
        numb: 96,
        question: "Which of the following can survive centuries?",
        answer: "Honey",
        options: [
          "Butter",
          "Cheese",
          "Yogurt",
          "Honey"
        ]
      },
      {
        numb: 97,
        question: "The main function of kidney is?",
        answer: "To remove waste products from body",
        options: [
          "To control blood pressure",
          "To control blood temperature",
          "To remove waste products from body",
          "To help in digestion of food"
        ]
      },
      {
        numb: 98,
        question: "It is dangerous to sleep under tees at nigh because plants give out?",
        answer: "Carbon dioxide",
        options: [
          "Carbon dioxide",
          "Oxygen",
          "Nitrogen",
          "Hydrogen"
        ]
      },
      {
        numb: 99,
        question: "Which of the following have maximum calories?",
        answer: "Carbohydrates",
        options: [
          "Carbohydrates",
          "Protiens",
          "Fats",
          "Vitamins"
        ]
      },
      {
        numb: 100,
        question: "Which of the following diseases is caused by virus?",
        answer: "Smallpox",
        options: [
          "Smallpox",
          "Preumania",
          "Malaria",
          "Cholera"
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
 
];