// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Pakistan and Afghanistan have 'Transit Trade Agreement' Signed in?",
    answer: "1965",
    options: [
      "1955",
      "1959",
      "1962",
      "1965"
    ]
  },
  {
    numb: 2,
    question: "What do you understand by disease 'Insomnia'",
    answer: "Inability to sleep",
    options: [
      "Inability to sleep",
      "Colour blindness",
      "Depression",
      "None of these"
    ]
  },
  {
    numb: 3,
    question: "The World's famous Madame Tussaud's meseum is situated in?",
    answer: "London",
    options: [
      "Paris",
      "London",
      "Rome",
      "Newyork"
    ]
  },
  {
    numb: 4,
    question: "The World's oldest parliament founded in the year 930AD is?",
    answer: "Althing of Iceland",
    options: [
      "British Parliament",
      "Diet of Japan",
      "Althing of Iceland",
      "Cortes of Spain"
    ]
  },
  {
    numb: 5,
    question: "'Ornithology is the study of?'",
    answer: "Birds",
    options: [
      "Birds",
      "Insects",
      "Sea Animals",
      "Sea Plants"
    ]
  },
  {
    numb: 6,
    question: "'Order of Cloud and Banner' is the most prestigious military award of?",
    answer: "China",
    options: [
      "Japan",
      "China",
      "India",
      "South Korea"
    ]
  },
  {
    numb: 7,
    question: "What is meant by 'Petticoat Government'?",
    answer: "A government runs by a women",
    options: [
      "A government in exile",
      "A government runs by a women",
      "A government without actual power",
      "A government run by some feudal lord"
    ]
  },
  {
    numb: 8,
    question: "Light Travels from sun to earth in?",
    answer: "499.0 seconds",
    options: [
      "499.0 seconds",
      "599.0 seconds",
      "699.0 seconds",
      "799.0 seconds"
    ]
  },
  {
    numb: 9,
    question: "What do you understand by the term 'Intifada'?",
    answer: "Uprising",
    options: [
      "Reconciliation",
      "Uprising",
      "Offence",
      "Negotiation"
    ]
  },
  {
    numb: 10,
    question: "'Pearl Harbour' is located in American state",
    answer: "Hawaii",
    options: [
      "Alaska",
      "Hawaii",
      "Virginia",
      "New York"
    ]
  },
  {
    numb: 11,
    question: "Which one is Hypertext Language?",
    answer: "HTML",
    options: [
      "XML",
      "HTML",
      "WML",
      "HTTP"
    ]
  },
  {
    numb: 12,
    question: "Indonesia and Malaysia are separated by?",
    answer: "Malacca Strait",
    options: [
      "Inaccessible mountain",
      "Malacca Strait",
      "Guff of Malaysia",
      "None of above"
    ]
  },
  {
    numb: 13,
    question: "Moracco and Spain are separated by? ",
    answer: "Strait of Gibraltar",
    options: [
      "Pyreneos Hills",
      "Strait of Gibraltar",
      "Alps",
      "River Rhine"
    ]
  },
  {
    numb: 14,
    question: "Pulitzer is an American Award in the field of?",
    answer: "Letters and Journalism",
    options: [
      "Letters and Journalism",
      "Scuba",
      "Sports",
      "Music"
    ]
  },
  {
    numb: 15,
    question: "Asian Drama was written by?",
    answer: "Gunnar Myrdal",
    options: [
      "Joseph Conrad",
      "Gunnar Myrdal",
      "Thomas Pain",
      "Jawahar Lal Nehru"
    ]
  },
  {
    numb: 16,
    question: "Tolstoy was the author of famous novel?",
    answer: "War and Peace",
    options: [
      "Idiot",
      "Dark continent",
      "For whom the Bell Tolls",
      "War and Peace"
    ]
  },
  {
    numb: 17,
    question: "Circumference of earth is around?",
    answer: "40000KM",
    options: [
      "20000KM",
      "30000KM",
      "40000KM",
      "50000KM"
    ]
  },
  {
    numb: 18,
    question: "Suez Canal links the following seas?",
    answer: "Red Sea with Mediterranean Sea",
    options: [
      "Red Sea with Mediterranean Sea",
      "Mediterranean Sea with Adriatic Sea",
      "Black Sea and Aegean Sea",
      "Persian Gulf with Arabian Sea"
    ]
  },
  {
    numb: 19,
    question: "The book 'Al Qanun Fi Tibb' is written by?",
    answer: "Abu-al-Sina",
    options: [
      "Al Batuni",
      "Ibn-e-Rushd",
      "Al Biruni",
      "Abu-al-Sina"
    ]
  },
  {
    numb: 20,
    question: "Chile has a longest shore along?",
    answer: "Pacific Sea",
    options: [
      "Atlantic Sea",
      "Black Sea",
      "Pecific Sea",
      "Mediterranean Sea"
    ]
  },
  {
    numb: 21,
    question: "The Earth is more closer to Sun is?",
    answer: "January",
    options: [
      "January",
      "June",
      "July",
      "September"
    ]
  },
  {
    numb: 22,
    question: "Mixture of two metals is called?",
    answer: "Alloy",
    options: [
      "Mouse",
      "Dispersion",
      "Alloy",
      "Hard Drive"
    ]
  },
  {
    numb: 23,
    question: "The area inside a computer frame and auxiliary storage where date and instructions are stored is call?",
    answer: "Memory",
    options: [
      "Memory",
      "Recorder",
      "Hopper",
      "Interpreter"
    ]
  },
  {
    numb: 24,
    question: "An extremely small piece of silicon on which integrated circuits are implicated is called?",
    answer: "Chip",
    options: [
      "Feed",
      "Hotlerith Code",
      "Chip",
      "Card reader"
    ]
  },
  {
    numb: 25,
    question: "The time taken by light to reach Earth from Sun is?",
    answer: "8 minutes 15 seconds",
    options: [
      "10 minutes 20 seconds",
      "12 minutes 30 seconds",
      "4 minutes 30 seconds",
      "8 minutes 15 seconds"
    ]
  },
  {
    numb: 26,
    question: "38th Parallel line is a boundary lies between?",
    answer: "South and North Korea",
    options: [
      "Myanmar and Thailand",
      "Thailand and Malaysia",
      "South and North Korea",
      "India and China"
    ]
  },
  {
    numb: 27,
    question: "The planet with shortest day time is?",
    answer: "Jupiter",
    options: [
      "Earth",
      "Jupiter",
      "Venus",
      "Pluto"
    ]
  },
  {
    numb: 28,
    question: "Insulin in human body is produced in?",
    answer: "Pencreas",
    options: [
      "Pencreas",
      "Liver",
      "Kidney",
      "None of above?"
    ]
  },
  {
    numb: 29,
    question: "Dynamite was discovered by?",
    answer: "Alfred Nobel",
    options: [
      "Daimler",
      "Alfred Nobel",
      "Freud",
      "Mosely"
    ]
  },
  {
    numb: 30,
    question: "How far is Dead Sea below Medeterian?",
    answer: "400 meters",
    options: [
      "200 meters",
      "300 meters",
      "400 meters",
      "500 meters"
    ]
  },
  {
    numb: 31,
    question: "Laws of Heredity were discoved by?",
    answer: "Mendel",
    options: [
      "Darwin",
      "Borpamin Franklin",
      "Mendel",
      "None"
    ]
  },
  {
    numb: 32,
    question: "The highest mountains peak Mount Everest has been named after Col. George Everest who was?",
    answer: "Surveyor General of India",
    options: [
      "Commandant of 1st Mountain Infantry Unit",
      "Surveyor General of India",
      "A commander of Goslcha Brigade",
      "A Political Agent in NWFP"
    ]
  },
  {
    numb: 33,
    question: "Christopher Columbus who discovered America was?",
    answer: "Italian",
    options: [
      "Spanish",
      "Italian",
      "French",
      "Dutch"
    ]
  },
  {
    numb: 34,
    question: "The single biggest Hydel Power Generating site is situated in?",
    answer: "China",
    options: [
      "Brazil",
      "United States",
      "India",
      "China"
    ]
  },
  {
    numb: 35,
    question: "The 1st Olympic Gold medal for Pakistan was in Summer Olymic Games of?",
    answer: "1960",
    options: [
      "1955",
      "1960",
      "1965",
      "1970"
    ]
  },
  {
    numb: 36,
    question: "When Ayub Khan took over power in 1958, the Prime Minister of Pakistan was?",
    answer: "Malik Feroze Khan Noon",
    options: [
      "Malik Feroze Khan Noon",
      "Muhammad Ali Bogra",
      "Hussain Shaheed Suharwardy",
      "None of Above"
    ]
  },
  {
    numb: 37,
    question: "The first internation flight identation by PIA was on?",
    answer: "7th June 1954",
    options: [
      "7th June 1954",
      "1st Feb 1966",
      "17th June 1961",
      "25 May 1951"
    ]
  },
  {
    numb: 38,
    question: "The Poetry first written by Allama Iqbal in Persian and then translated in Urdu ?",
    answer: "Bang e Dara",
    options: [
      "Bang e Dara",
      "Zarb-e-Kanoon",
      "Armaghan-e-Hijaz",
      "Bal-e-Jibraeel"
    ]
  },
  {
    numb: 39,
    question: "The book 'Indian Musalmans' published in 1871 was written by?",
    answer: "William Wisoce Hunter",
    options: [
      "Rudyard Kipling",
      "Justice Ameer Ali",
      "Sir Syed Ahmed Khan",
      "William Wisoce Hunter"
    ]
  },
  {
    numb: 40,
    question: "River Nile Originates from?",
    answer: "Lake Victoria",
    options: [
      "Lake Victoria",
      "Springs in Kenya",
      "Lake Nyasa",
      "Cherangany Mountains"
    ]
  },
  {
    numb: 41,
    question: "The sunlight is composed of?",
    answer: "Seven Coloures",
    options: [
      "Three Coloures",
      "Five Coloures",
      "Seven Coloures",
      "Nine Coloures"
    ]
  },
  {
    numb: 42,
    question: "Which is the least conductor of electricity among the following?",
    answer: "Wood",
    options: [
      "Silver",
      "Iron",
      "Copper",
      "Wood"
    ]
  },
  {
    numb: 43,
    question: "Which vitamin cannot be stored in the human body",
    answer: "Vitamin C",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E"
    ]
  },
  {
    numb: 44,
    question: "The most part of Gobi Dessert is situated in?",
    answer: "Mongolia",
    options: [
      "South Africa",
      "Russia",
      "North Africa",
      "Mongolia"
    ]
  },
  {
    numb: 45,
    question: "Identify the smallest state area by?",
    answer: "San Marino",
    options: [
      "San Marino",
      "Maldieves",
      "Malta",
      "Bahrain"
    ]
  },
  {
    numb: 46,
    question: "Baghalchur area of Dera Ghazi Khan contains mineral reserves of?",
    answer: "Uranium",
    options: [
      "Rock Phosphate",
      "Limestone",
      "Chromites",
      "Uranium"
    ]
  },
  {
    numb: 47,
    question: "In the total area of Pakistan, the share of punjab is?",
    answer: "25%",
    options: [
      "20%",
      "25%",
      "35%",
      "42%"
    ]
  },
  {
    numb: 48,
    question: "Pakistan is situated at?",
    answer: "Tropic of Cancer",
    options: [
      "Tropic of Cancer",
      "Tropic of Capricorn",
      "Equator",
      "None of above"
    ]
  },
  {
    numb: 49,
    question: "The largest islamic country by area is?",
    answer: "Kazakhstan",
    options: [
      "Indonesia",
      "Sudan",
      "Kazkhstan",
      "Algeria"
    ]
  },
  {
    numb: 50,
    question: "In 1962, which organization of the Muslim world was formed?",
    answer: "Rabitah-e-Alama-Islami",
    options: [
      "Rabitah-e-Alama-Islami",
      "Organization of Islami Conference",
      "Mumtar-e-Alama-Islami",
      "Arab League"
    ]
  },
  {
    numb: 51,
    question: "Which of the following Vitamin maintains normal clotting of blood?",
    answer: "Vitamin K",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin K"
    ]
  },
  {
    numb: 52,
    question: "Which of the following country has th elongest coastline (48798 KM) in the world?",
    answer: "Canada",
    options: [
      "America",
      "Canada",
      "China",
      "Russia"
    ]
  },
  {
    numb: 53,
    question: "Dasman Palace is the official residence of?",
    answer: "Amir-e-Kuwait",
    options: [
      "President of Sri Lanka",
      "Amir-e-Qatar",
      "President of Indonesia",
      "Amir-e-Kuwait"
    ]
  },
  {
    numb: 54,
    question: "Why 'Wall Street' is so famous?",
    answer: "Stock exchange market of New York",
    options: [
      "Leading british newspaper offices in London",
      "Stock exchange market of New York",
      "London's world famous shopping center for tailoring and jwellery shops",
      "None of Above"
    ]
  },
  {
    numb: 55,
    question: "Who is the founder of Scout Movement?",
    answer: "Robert Baden Powell",
    options: [
      "Robert Baden Powell",
      "Lord Colon Powell",
      "Maccollins",
      "Nicoba Tesla"
    ]
  },
  {
    numb: 56,
    question: "Who is called 'Man of destiny in European History?'",
    answer: "Napoleon",
    options: [
      "Napoleon",
      "Bismarck",
      "Hitler",
      "de Guelle"
    ]
  },
  {
    numb: 57,
    question: "Who is called as 'The father of the French Revolution'?",
    answer: "Rousseau",
    options: [
      "Thomas Hobbes",
      "Rousseau",
      "Francis Bacon",
      "Montesquieu"
    ]
  },
  {
    numb: 58,
    question: "The red color of the blood is due to the presence of a pigment known as?",
    answer: "Hemoglobin",
    options: [
      "Chlorophyll",
      "Insuline",
      "Bite",
      "Hemoglobin"
    ]
  },
  {
    numb: 59,
    question: "Caspian sea is believed to have 16% of the earth's potential oil reseves. The five countries that share border with it are?",
    answer: "Russia, Iran, Kazakhstan, Turkmenistan, Azarbaijan",
    options: [
      "Russia, Iran, Kazakhstan, Turkmenistan, Azarbaijan",
      "Russia, Uzbekistan, Iran, Azerbaijan, Turkmenistan",
      "Russia, Turkey, Iran, Azerbaijan, Kirgizstan",
      "None of these"
    ]
  },
  {
    numb: 60,
    question: "The 'Statue of Liberty' was a gift to the United States on the ocassion of its independance. Which country presented it?",
    answer: "France",
    options: [
      "Britain",
      "France",
      "Canada",
      "Japan"
    ]
  },
  {
    numb: 61,
    question: "Velocity of sound in air is?",
    answer: "331 m/s",
    options: [
      "250 m/s",
      "331 m/s",
      "434 m/s",
      "561 m/s"
    ]
  },
  {
    numb: 62,
    question: "'Elysee Palace' is the official residence of?",
    answer: "President of France",
    options: [
      "King of Denmark",
      "German Chancellor",
      "President of France",
      "Pope of Vatican"
    ]
  },
  {
    numb: 63,
    question: "Which part of human body is more prone to damage from the Hepatitis Virus?",
    answer: "Liver",
    options: [
      "Kidneys",
      "Lungs",
      "Spleen",
      "Liver"
    ]
  },
  {
    numb: 64,
    question: "The name of All India Muslim League was proposed in 1906 by?",
    answer: "None of above",
    options: [
      "Quid-e-Azam",
      "Nawab Saleem Ullah Khan",
      "Sir Muhammad Shafi",
      "None of above"
    ]
  },
  {
    numb: 65,
    question: "The year of 1905 is considered very important in the histrory of",
    answer: "Partition of Bengal",
    options: [
      "Foundation of Muslim League",
      "Partition of Bengal",
      "George-V's visit to india",
      "Military Reforms"
    ]
  },
  {
    numb: 66,
    question: "Elysee Palace is the official residence of?",
    answer: "President of France",
    options: [
      "King of Denmark",
      "Chancellor of Germany",
      "President of France",
      "Pope of Vatican"
    ]
  },
  {
    numb: 67,
    question: "'Pride and Prejudice' was written by?",
    answer: "Jane Austan",
    options: [
      "Jane Austan",
      "Thomas Hardy",
      "Agatha Krusti",
      "George Orwell"
    ]
  },
  {
    numb: 68,
    question: "Singapore was previously part of?",
    answer: "Malaysia",
    options: [
      "Indonesia",
      "China",
      "Korea",
      "Malaysia"
    ]
  },
  {
    numb: 69,
    question: "The largest Islan in the world is?",
    answer: "GreenLand",
    options: [
      "Australia",
      "Japan",
      "GreenLand",
      "Indonesia"
    ]
  },
  {
    numb: 70,
    question: "The ability to knowing thoughts of others, is called?",
    answer: "Telepathy",
    options: [
      "Telepathy",
      "Psychology",
      "Telecommunication",
      "Physiology"
    ]
  },
  // {
  //   numb: 71,
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