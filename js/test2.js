// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Water lily is symbol of?",
    answer: "Canada",
    options: [
      "Canada",
      "China",
      "Iran",
      "India"
    ]
  },
  {
    numb: 2,
    question: "What is Obama's number as President?",
    answer: "44",
    options: [
      "44",
      "45",
      "46",
      "47"
    ]
  },
  {
    numb: 3,
    question: "Panama canal connects two oceans?",
    answer: "Pacific and Atlantic",
    options: [
      "Atlantic and Indian",
      "Indian and Pacific",
      "Indian and Arabian Sea",
      "Pacific and Atlantic"
    ]
  },
  {
    numb: 4,
    question: "Equator passes through?",
    answer: "Kenya",
    options: [
      "Brazil",
      "Canada",
      "Kenya",
      "None of above"
    ]
  },
  {
    numb: 5,
    question: "Which is the biggest Agency in FATA?",
    answer: "South Waziristan",
    options: [
      "North Waziristan",
      "Malakand",
      "South Waziristan",
      "None of above"
    ]
  },
  {
    numb: 6,
    question: "What was the first living creature to travel in space?",
    answer: "a bitch",
    options: [
      "a bitch",
      "frog",
      "eagle",
      "cow"
    ]
  },
  {
    numb: 7,
    question: "What does term mantra means?",
    answer: "a word with spritual power",
    options: [
      "a word with spritual power",
      "term in stock exchange",
      "science of lower species",
      "None of above"
    ]
  },
  {
    numb: 8,
    question: "Somnam bulsim means?",
    answer: "walk in sleep",
    options: [
      "walk in rain",
      "walk in sleep",
      "science of rock reading",
      "None of above"
    ]
  },
  {
    numb: 9,
    question: "Macro economics means?",
    answer: "branch of economics that studies changes",
    options: [
      "branch of economics that studies changes",
      "fundamental system of mathematics",
      "financial system of provincial leve",
      "changes in prices"
    ]
  },
  {
    numb: 10,
    question: "Chauvinism means?",
    answer: "strong belief that your country is important",
    options: [
      "strong belief that your country is important",
      "male dominancy in society",
      "politics of non-issues",
      "none of above"
    ]
  },
  {
    numb: 11,
    question: "Bonanza means?",
    answer: "situation where large profits are made",
    options: [
      "situation where large profits are made",
      "poor performance",
      "boneiss are made meat",
      "None of the above"
    ]
  },
  {
    numb: 12,
    question: "Amicus curiae means?",
    answer: "A friend of court",
    options: [
      "An American",
      "An Australian",
      "A friend of court",
      "None of above"
    ]
  },
  {
    numb: 13,
    question: "Pormanteau means?",
    answer: "large box",
    options: [
      "large box",
      "a wide range of things considred single",
      "both a & b",
      "None of above"
    ]
  },
  {
    numb: 14,
    question: "Non-de Plume means?",
    answer: "anonymous",
    options: [
      "without teather",
      "anonymous",
      "both a & b",
      "None of these"
    ]
  },
  {
    numb: 15,
    question: "Sir creek channel is disputed area between Pakistan and India is located",
    answer: "Sindh and Indian Gujrat",
    options: [
      "Punjab and Indian Punjab",
      "Punjab and Himachal Pardesh",
      "Sindh and Indian Gujrat",
      "None of above"
    ]
  },
  {
    numb: 16,
    question: "Banana Republic means?",
    answer: "Govt. of corrupt elite",
    options: [
      "Govt. by easy going",
      "Where banana are cheap",
      "Govt. of corrupt elite",
      "None of above"
    ]
  },
  {
    numb: 17,
    question: "Hegemony means?",
    answer: "Supermacy of Power",
    options: [
      "Controlled democracy",
      "Autocracy",
      "Supermacy of Power",
      "Power to control others"
    ]
  },
  {
    numb: 18,
    question: "An anarchist is?",
    answer: "A person who does not like any system",
    options: [
      "A person who loves peace",
      "A person who does not like any system",
      "Love of peace",
      "Hates peace"
    ]
  },
  {
    numb: 19,
    question: "Suo moto means?",
    answer: "An action iniciated by court itself",
    options: [
      "An action iniciated by court itself",
      "An action by civil judge",
      "Both a & b",
      "None of above"
    ]
  },
  {
    numb: 20,
    question: "Opposite of Democracy is?",
    answer: "Dictatorship",
    options: [
      "Aristocracy",
      "Theocracy",
      "Dictatorship",
      "Monarchy"
    ]
  },
  {
    numb: 21,
    question: "How many Round Table Conferences were held in London between Indian Political Leaders & the British Government?",
    answer: "3",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 22,
    question: "Fiscal year is from?",
    answer: "July 1 to June 30",
    options: [
      "June 1 to June 30",
      "Jun 15 to July 15",
      "July 1 to June 30",
      "July 1 to August 1"
    ]
  },
  {
    numb: 23,
    question: "Peoples Republic of China was founded in?",
    answer: "1949",
    options: [
      "1947",
      "1948",
      "1949",
      "None of these"
    ]
  },
  {
    numb: 24,
    question: "The number of Federally Administrated area in Pakistan are",
    answer: "Four",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ]
  },
  {
    numb: 25,
    question: "Most of the Electricity in Pakistan is produced by?",
    answer: "Thermal Power",
    options: [
      "Hydral Power",
      "Nuclear Power",
      "Solar Power",
      "Thermal Power"
    ]
  },
  {
    numb: 26,
    question: "Insuline is secreted by?",
    answer: "Pencreas",
    options: [
      "Liver",
      "Pencreas",
      "Kidneys",
      "Small Intestine"
    ]
  },
  {
    numb: 27,
    question: "'Kyoto Protocol' is an International Treaty for?",
    answer: "Enviroment Problems",
    options: [
      "Refugees",
      "Human Rights",
      "Child Labour",
      "Enviroment Problems"
    ]
  },
  {
    numb: 28,
    question: "Insomnia is related to?",
    answer: "Sleeplessness",
    options: [
      "Sleeplessness",
      "Hypertension",
      "Fear of Water",
      "Rear of Closed Places"
    ]
  },
  {
    numb: 29,
    question: "The substance used in match sticks is?",
    answer: "Phosphorous",
    options: [
      "Sulpher",
      "Acid",
      "Zinc",
      "Phosphorous"
    ]
  },
  {
    numb: 30,
    question: "The atmosphere has the highest percentage of?",
    answer: "Nitrogen",
    options: [
      "Nitrogen",
      "Oxygen",
      "Hydrogen",
      "Carbon dioxide"
    ]
  },
  {
    numb: 31,
    question: "Pakistan recognised People's Republic of China on 21 may?",
    answer: "1950",
    options: [
      "1951",
      "1949",
      "1950",
      "1948"
    ]
  },
  {
    numb: 32,
    question: "'Tilla Jogian' is?",
    answer: "Finds mention in the epic love poem Heer Ranjha of Waris Shah",
    options: [
      "Is a peak in the Sulaiman Range",
      "Finds mention in the epic love poem Heer Ranjha of Waris Shah",
      "Is the place where Budhha is said to have spent 40 days in quiet seclusion",
      "All of These"
    ]
  },
  {
    numb: 33,
    question: "Doaba Rachna is located between the River Chenab and River?",
    answer: "Ravi",
    options: [
      "Ravi",
      "Jhelum",
      "Indus",
      "Beas"
    ]
  },
  {
    numb: 34,
    question: "The name of delta formed by the Indus River is?",
    answer: "Sapta Sindhu",
    options: [
      "Sapta Sindhu",
      "Panjnad",
      "Sunderban Delta",
      "Brahnaputra"
    ]
  },
  {
    numb: 35,
    question: "The pass which connects Pakistan with China is known as?",
    answer: "Khunjrab Pass",
    options: [
      "Khojak Pass",
      "Khunjrab Pass",
      "Shandur Pass",
      "Peiwas Kotal Pass"
    ]
  },
  {
    numb: 36,
    question: "Immediately before the formation of 'One Unit' in West Pakistan, Bahawalpur enjoyed the status of a?",
    answer: "Province",
    options: [
      "Province",
      "Division",
      "Tehsil",
      "District"
    ]
  },
  {
    numb: 37,
    question: "Multan is also affectionately known as?",
    answer: "City of Saints",
    options: [
      "City of Dust",
      "City of Sohan Halwa",
      "City of Mosques",
      "City of Saints"
    ]
  },
  {
    numb: 38,
    question: "Which Bank gave a RS. 80 million loan to the Government of Pakistan on the request of Quid-e-Azam when the Reserve Bank of India failed to deliver Pakistan's share?",
    answer: "Habib Bank Limited",
    options: [
      "National Bank of Pakistan",
      "Habib Bank Limited",
      "United Bank Limited",
      "Muslim Commercial Bank"
    ]
  },
  {
    numb: 39,
    question: "The first Chief Minister of Punjab after creation of Pakistan was?",
    answer: "Nawab Iftikhar Hussain Mamdot",
    options: [
      "Sir Sikandar Hayat Khan",
      "Nawab Iftikhar Hussain Mamdot",
      "Mian Mumtaz Khan Daultana",
      "Nawab Sir Khizar Hayat Tiwana"
    ]
  },
  {
    numb: 40,
    question: "The tune for the National Anthem of Pakistan was composed by?",
    answer: "Ahmed G. Chagla",
    options: [
      "Khuwaja Khurshid Anwar",
      "Naushad Ali",
      "Sohail Rana",
      "Ahmed G. Chagla"
    ]
  },
  {
    numb: 41,
    question: "Hazara Division of Khyber - Pakhtunkhwa Province comprises five districts including Abbotabad, Battagram, Kohistan, Mansehra and?",
    answer: "Haripur",
    options: [
      "Mardan",
      "Mingora",
      "Haripur",
      "Khanpur"
    ]
  },
  {
    numb: 42,
    question: "28th May is celebrated each year as 'Yaum-e-Takbeer' because of which incident?",
    answer: "Nuclear tests were conducted by Pakistan",
    options: [
      "Kargil conflict between India and Pakistan commenced",
      "Nuclear tests were conducted by Pakistan",
      "Ojhri camp incident took place at Rawalpindi",
      "Uprising errupted in Kashmir against indian occupation"
    ]
  },
  {
    numb: 43,
    question: "The first Pakistan to Host the Pakistan flag at the North and South Pole is?",
    answer: "Namira Salim",
    options: [
      "Nazir Sabir",
      "Salma Salim",
      "Namira Salim",
      "Ashraf Aman"
    ]
  },
  {
    numb: 44,
    question: "The first climber from Pakistan to have called Mt. Everest on May 17, 2000 was?",
    answer: "Nazir Sabir",
    options: [
      "Nazir Sabir",
      "Salma Salim",
      "Namira Salim",
      "Ashraf Aman"
    ]
  },
  {
    numb: 45,
    question: "Who take oath from Governer?",
    answer: "Chief Justice of High Court",
    options: [
      "Chief Minister",
      "President",
      "Chief Justice",
      "Chief Justice of High Court"
    ]
  },
  {
    numb: 46,
    question: "Another name of Vitamin C is?",
    answer: "Ascorbic Acid",
    options: [
      "Ascorbic Acid",
      "Acetic Acid",
      "Citric Acid",
      "Lysozyme"
    ]
  },
  {
    numb: 47,
    question: "Gun Powder is?",
    answer: "Mixture",
    options: [
      "Element",
      "Compound",
      "Mixture",
      "Amalgam"
    ]
  },
  {
    numb: 48,
    question: "The main constituent of Sui Gas is?",
    answer: "Methane",
    options: [
      "Methane",
      "Sui",
      "Both a & b",
      "None of above"
    ]
  },
  {
    numb: 49,
    question: "Brass is an alloy of coper and?",
    answer: "Zinc",
    options: [
      "Iron",
      "Steel",
      "Zinc",
      "Silver"
    ]
  },
  {
    numb: 50,
    question: "The most famous genetic disease that is associated with Queen Victoria and circulated European royalty was?",
    answer: "Haemophilia",
    options: [
      "Color Blindness",
      "Haemophilia",
      "Austrian lip",
      "Down's Syndrome"
    ]
  },
  {
    numb: 51,
    question: "Whooping cough is caused by?",
    answer: "Bacteria",
    options: [
      "Fungus",
      "Virus",
      "Bacteria",
      "Protozoa"
    ]
  },
  {
    numb: 52,
    question: "Fear if enclosed spaces is known as?",
    answer: "Claustrophobia",
    options: [
      "Hydrophobia",
      "Claustrophobia",
      "Kieptophobia",
      "Heliophobia"
    ]
  },
  {
    numb: 53,
    question: "When common salt is mixed with ice, the freezing point?",
    answer: "is lowered",
    options: [
      "is lowered",
      "is raised",
      "remains unaffected",
      "is first lowered and then raised"
    ]
  },
  {
    numb: 54,
    question: "What was the age of Quid-e-Azam when he joined All India Muslim League?",
    answer: "37 years",
    options: [
      "27 years",
      "30 years",
      "37 years",
      "35 years"
    ]
  },
  {
    numb: 55,
    question: "Which PM of Pakistan had the shortest tenture?",
    answer: "Gen-Muhammad Ayub Khan",
    options: [
      "Gen-Muhammad Ayub Khan",
      "I.I. Chundrigar",
      "Malik Feroza Khan Noon",
      "M. Ali Bogra"
    ]
  },
  {
    numb: 56,
    question: "On 11 August 2011 Pak Sat- IR launched from?",
    answer: "Xichang China",
    options: [
      "Xichang China",
      "Peking China",
      "New York USA",
      "None of above"
    ]
  },
  {
    numb: 57,
    question: "'Sir Creek' issue between Pakistan and India is related to",
    answer: "delimitation of maritime boundary",
    options: [
      "distribution of pre-partition assets",
      "delimitation of the Siachin Glacier",
      "delimitation of maritime boundary",
      "Implementation of Indus Basin Treaty 1960"
    ]
  },
  {
    numb: 58,
    question: "Which country's parliament has the largest membership?",
    answer: "China",
    options: [
      "India",
      "China",
      "Russia",
      "Canada"
    ]
  },
  {
    numb: 59,
    question: "Which of the following International Institutions was created through 'Rome Statute July 1, 2002'?",
    answer: "International Criminal Court",
    options: [
      "Freedom House",
      "International Criminal Court",
      "Amnesty International",
      "None of above"
    ]
  },
  {
    numb: 60,
    question: "'M15' is the securtiy intelligence agency of?",
    answer: "UK",
    options: [
      "USA",
      "UK",
      "Russia",
      "India"
    ]
  },
  {
    numb: 61,
    question: "J. K. Rowing's famous character 'Harry Potter' is associated with?",
    answer: "Wizardy",
    options: [
      "Space fiction",
      "Spying",
      "Computer genius",
      "Wizardy"
    ]
  },
  {
    numb: 62,
    question: "'Maria Montessori's name is associated with'?",
    answer: "Child Education",
    options: [
      "Social Work",
      "Women's rights champion",
      "Child Education",
      "Sports"
    ]
  },
  {
    numb: 63,
    question: "'Last Judgement' is the famous painting of?",
    answer: "Michel Angelo",
    options: [
      "Michel Angelo",
      "Rembrandt",
      "Pablo Picasso",
      "Leonardo da Vinci"
    ]
  },
  {
    numb: 64,
    question: "What is the effect of deficit financing on economy?",
    answer: "Depression",
    options: [
      "Inflation",
      "Deflation",
      "Depression",
      "Recession"
    ]
  },
  {
    numb: 65,
    question: "The world's first women Prime Minister of a country was?",
    answer: "Srimavo Bandarnaike (Siri Lanka)",
    options: [
      "Margaret Thatcher (England)",
      "Srimavo Bandarnaike (Siri Lanka)",
      "Golda Meir (Aribanka)",
      "Indra Gandhi (India)"
    ]
  },
  {
    numb: 66,
    question: "Which of the following statement is correct?",
    answer: "Plato was a disciple of Socrates",
    options: [
      "Socrates was a disciple of Plato",
      "Plato was a disciple of Aristotle",
      "Plato was a disciple of Socrates",
      "Socrates and Plato were disciples of Aristotle"
    ]
  },
  {
    numb: 67,
    question: "The playground for playing 'Baseball' is called?",
    answer: "Diamond",
    options: [
      "Diamond",
      "Court",
      "Ring",
      "Rink"
    ]
  },
  {
    numb: 68,
    question: "Three islands in the Persian Gulf, Greater Tub, Lesser Tub and Abu Musa are disputed between?",
    answer: "Iran and United Arab Emirates",
    options: [
      "Iran and United Arab Emirates",
      "Bahrain and Qatar",
      "Iran and Iraq",
      "Iran and Saudi Arabia"
    ]
  },
  {
    numb: 69,
    question: "The highest average age (Male) is in?",
    answer: "Japan",
    options: [
      "Japan",
      "Germany",
      "Iceland",
      "None of above"
    ]
  },
  {
    numb: 70,
    question: "Which of the following is the oldest Barrage?",
    answer: "Sukkur",
    options: [
      "Kotri",
      "Guddu",
      "Taunsa",
      "Sukkur"
    ]
  },
  {
    numb: 71,
    question: "Money paid by a government to reduce the costs of producing goods so that their prices can kept low termed as?",
    answer: "Subsidy",
    options: [
      "Value added services",
      "Grant",
      "Subsidy",
      "Soft Money"
    ]
  },
  {
    numb: 72,
    question: "Pakistan's largest gas fired power plant is?",
    answer: "Uch power plant",
    options: [
      "Uch power plant",
      "Malakand-Dargai power plant",
      "Gomal power plant",
      "Faisalabad Gas Turbine power plant"
    ]
  },
  {
    numb: 73,
    question: "'Hyde Park' London is famous for?",
    answer: "None of above",
    options: [
      "Beautiful rare tulips",
      "Unique Fountains",
      "Resident of Lord Chancellor",
      "None of above"
    ]
  },
  {
    numb: 74,
    question: "'Bala Hissar' (The elevated Fort) is situated at?",
    answer: "Peshawar",
    options: [
      "Quetta",
      "Peshawar",
      "Swat",
      "Hyderabad"
    ]
  },
  {
    numb: 75,
    question: "The most abudant mineral in the human body is?",
    answer: "Calcium",
    options: [
      "Calcium",
      "Megnesium",
      "Iron",
      "None of above"
    ]
  },
  {
    numb: 76,
    question: "The world's largest computer software industrial center is?",
    answer: "Bangalore",
    options: [
      "Beijing",
      "Bangalore",
      "Bankok",
      "None of above"
    ]
  },
  {
    numb: 77,
    question: "'Miran Shah' is the main town of?",
    answer: "North Waziristan",
    options: [
      "South Waziristan",
      "North Waziristan",
      "Kurrum Agency",
      "Khyber Agency"
    ]
  },
  {
    numb: 78,
    question: "Who is know as the 'Father of Modern Astronomy'?",
    answer: "Nicolas Copernicus",
    options: [
      "Nicolas Copernicus",
      "Albert Einstein",
      "Strait of Babel Mandeb",
      "Malacca Strait"
    ]
  },
  {
    numb: 79,
    question: "Which of the following straits is called 'The Gate of Tears'?",
    answer: "Strait of Babel Mandeb",
    options: [
      "Strait of Gibraltar",
      "Strait of Hormuz",
      "Strait of Babel Mandeb",
      "Malacca Strait"
    ]
  },
  {
    numb: 80,
    question: "Which of the following places is called 'Land of Thunderbolt'?",
    answer: "Nepal",
    options: [
      "China",
      "Nepal",
      "Iran",
      "None of above"
    ]
  },
  {
    numb:81,
    question: "The world's largest salt water lake is?",
    answer: "Caspian sea",
    options: [
      "Baikal",
      "Superior",
      "Caspian sea",
      "None of above"
    ]
  },
  {
    numb: 82,
    question: "Pakistan has recently been given observer status in?",
    answer: "Shanghai Cooperation Organization (SCO)",
    options: [
      "Gulf Cooperation Council (GCC)",
      "Shanghai Cooperation Organization (SCO)",
      "Organization for Economic Cooperation and Developement (OECD)",
      "None of above"
    ]
  },
  {
    numb: 83,
    question: "'Dragon' is the National Symbol of",
    answer: "China",
    options: [
      "China",
      "Japan",
      "Russia",
      "None of above"
    ]
  },
  {
    numb: 84,
    question: "Which of the following parts of the human body is effected by the disease of 'Malaria'?",
    answer: "Spleen",
    options: [
      "Liver",
      "Lungs",
      "Intestine",
      "Spleen"
    ]
  },
  {
    numb: 85,
    question: "'Ornithology' is the scientific study of",
    answer: "Birds",
    options: [
      "Animals",
      "Reptiles",
      "Sea Plants",
      "Birds"
    ]
  },
  {
    numb: 86,
    question: "'West Indies' consists of almost?",
    answer: "2000 islands",
    options: [
      "500 islands",
      "700 islands",
      "1200 islands",
      "2000 islands"
    ]
  },
  {
    numb: 87,
    question: "'The Light House of Alexandria' is among the seven wonders of the world, located in?",
    answer: "Greece",
    options: [
      "Turkey",
      "Egypt",
      "Greece",
      "Italy"
    ]
  },
  {
    numb: 88,
    question: "Red Cross Organization was founded by?",
    answer: "J H Durant",
    options: [
      "J H Durant",
      "Baden Powell",
      "Donald Ross",
      "None of above"
    ]
  },
  {
    numb: 89,
    question: "The Prime Meridian passes through?",
    answer: "Britain",
    options: [
      "Britain",
      "America",
      "Switzerland",
      "Finland"
    ]
  },
  {
    numb: 90,
    question: "The largest share of revenue reciepts of the Federal Government comes from?",
    answer: "General Sales Tax",
    options: [
      "General Sales Tax",
      "Income Tax",
      "Wealth Tax",
      "Central Excise Duty"
    ]
  },
  {
    numb: 91,
    question: "The first space shuttle launched by United States on April 12,1981 was?",
    answer: "Columbia",
    options: [
      "Discovery",
      "Endeavor",
      "Columbia",
      "Atlantis"
    ]
  },
  {
    numb: 92,
    question: "Which of the following towns of Balochistan is located nearest to Iran's Border?",
    answer: "Nushki",
    options: [
      "Dalbandin",
      "Nok Kundi",
      "Mastung",
      "Nushki"
    ]
  },
  {
    numb: 93,
    question: "The Equator, the Tropic of Cancer, the Tropic of Capricon, all run through the continent of?",
    answer: "Africa",
    options: [
      "Africa",
      "Asia",
      "South America",
      "None of above"
    ]
  },
  {
    numb: 94,
    question: "Which of the following countries has recently been given observer status in Organization of Islamic Conference?",
    answer: "Russia",
    options: [
      "China",
      "Russia",
      "India",
      "None of above"
    ]
  },
  {
    numb: 95,
    question: "Which of the following discoveries in 1928 has brought great revolution in medical history?",
    answer: "Penicillin",
    options: [
      "Vitamin C",
      "Aspirin",
      "Penicillin",
      "None of above"
    ]
  },
  {
    numb: 96,
    question: "Which country's flag never flies at half-mast?",
    answer: "Iran",
    options: [
      "Jordan",
      "Syria",
      "Iran",
      "Saudi Arabia"
    ]
  },
  {
    numb: 97,
    question: "Africa's largest island 'Madagascar' is located in the?",
    answer: "Indian Ocean",
    options: [
      "Indian Ocean",
      "South Atlantic Ocean",
      "North Atlantic Ocean",
      "North Pacific Ocean"
    ]
  },
  {
    numb: 98,
    question: "Which of the following sufi saints belong to 'Christia order'?",
    answer: "Hazrat Farid-ud-Din Ganj Shakar",
    options: [
      "Hazrat Baha-ud-Din Zakriya",
      "Hazrat Shah Rukn-i-Alam",
      "Hazrat Farid-ud-Din Ganj Shakar",
      "None of above"
    ]
  },
  {
    numb: 99,
    question: "'Bay of Biscay' is situated between?",
    answer: "France and Spain",
    options: [
      "France and Spain",
      "Sweden and Finland",
      "Italy and Greece",
      "Estonia and Latvia"
    ]
  },
  {
    numb: 100,
    question: "Which of the following region is Peninsula?",
    answer: "All of above",
    options: [
      "Arabia",
      "Scandinavia",
      "Alaska",
      "All of above"
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