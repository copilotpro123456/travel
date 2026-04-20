// Package Data - 30 Indian Tour Packages
const packages = [
    {
        id: 1,
        title: "Goa Beach Bliss",
        location: "Goa",
        state: "Goa",
        duration: 4,
        price: 12999,
        type: "Beach",
        rating: 4.8,
        image: "🏖️",
        description: "Experience the ultimate beach vacation with water sports, nightlife, and Portuguese heritage.",
        itinerary: [
            { day: 1, title: "Arrival & Baga Beach", activities: ["Airport pickup", "Check-in at hotel", "Evening at Baga Beach", "Night market visit"] },
            { day: 2, title: "North Goa Tour", activities: ["Calangute Beach", "Candolim Fort", "Anjuna Flea Market", "Sunset at Chapora Fort"] },
            { day: 3, title: "South Goa & Water Sports", activities: ["Colva Beach", "Water sports activities", "Old Goa churches", "Dinner cruise"] },
            { day: 4, title: "Departure", activities: ["Morning leisure", "Shopping at Mapusa", "Airport drop"] }
        ]
    },
    {
        id: 2,
        title: "Kerala Backwaters",
        location: "Kerala",
        state: "Kerala",
        duration: 5,
        price: 18999,
        type: "Heritage",
        rating: 4.9,
        image: "🛶",
        description: "Discover the serene backwaters, lush tea gardens, and Ayurvedic wellness of God's Own Country.",
        itinerary: [
            { day: 1, title: "Arrival in Kochi", activities: ["Airport pickup", "Fort Kochi walk", "Chinese Fishing Nets", "Kathakali show"] },
            { day: 2, title: "Kochi to Munnar", activities: ["Drive to Munnar", "Tea plantation visit", "Echo Point", "Evening leisure"] },
            { day: 3, title: "Munnar Exploration", activities: ["Eravikulam National Park", "Mattupetty Dam", "Spice garden", "Ayurvedic massage"] },
            { day: 4, title: "Alleppey Backwaters", activities: ["Drive to Alleppey", "Houseboat cruise", "Traditional Kerala lunch", "Village walk"] },
            { day: 5, title: "Departure", activities: ["Morning in Alleppey", "Shopping", "Airport transfer"] }
        ]
    },
    {
        id: 3,
        title: "Rajasthan Royal Tour",
        location: "Jaipur-Udaipur-Jodhpur",
        state: "Rajasthan",
        duration: 7,
        price: 24999,
        type: "Heritage",
        rating: 4.7,
        image: "🏰",
        description: "Experience the grandeur of Rajputana with palaces, forts, and desert adventures.",
        itinerary: [
            { day: 1, title: "Jaipur Arrival", activities: ["Airport pickup", "Hawa Mahal", "City Palace", "Jantar Mantar"] },
            { day: 2, title: "Amber Fort & Markets", activities: ["Amber Fort elephant ride", "Jal Mahal", "Bazaar shopping", "Folk dinner"] },
            { day: 3, title: "Jaipur to Jodhpur", activities: ["Train journey", "Mehrangarh Fort", "Clock Tower market", "Local cuisine"] },
            { day: 4, title: "Jodhpur to Udaipur", activities: ["Drive via Ranakpur", "Jain temples", "Lake Pichola boat ride", "City Palace"] },
            { day: 5, title: "Udaipur Heritage", activities: ["Jagdish Temple", "Bagore Ki Haveli", "Cultural show", "Romantic dinner"] },
            { day: 6, title: "Desert Safari", activities: ["Sam Sand Dunes", "Camel ride", "Desert camp", "Bonfire & stars"] },
            { day: 7, title: "Departure", activities: ["Morning leisure", "Shopping", "Airport transfer"] }
        ]
    },
    {
        id: 4,
        title: "Himachal Adventure",
        location: "Manali-Shimla",
        state: "Himachal Pradesh",
        duration: 6,
        price: 16999,
        type: "Mountain",
        rating: 4.6,
        image: "🏔️",
        description: "Mountain adventure with snow-capped peaks, valleys, and thrilling activities.",
        itinerary: [
            { day: 1, title: "Delhi to Shimla", activities: ["Overnight Volvo", "Arrival in Shimla", "Mall Road", "Jakhu Temple"] },
            { day: 2, title: "Shimla Sightseeing", activities: ["Kufri excursion", "Naldehra golf course", "Green Valley", "Local markets"] },
            { day: 3, title: "Shimla to Manali", activities: ["Scenic drive", "Pandoh Dam", "Kullu Valley", "Evening leisure"] },
            { day: 4, title: "Manali Local", activities: ["Hadimba Temple", "Vashisht Hot Springs", "Tibetan Market", "River rafting"] },
            { day: 5, title: "Solang Valley", activities: ["Solang Valley activities", "Paragliding", "Zorbing", "Rohtang Pass (if open)"] },
            { day: 6, title: "Return Journey", activities: ["Morning leisure", "Start return journey", "Memories to cherish"] }
        ]
    },
    {
        id: 5,
        title: "Golden Triangle",
        location: "Delhi-Agra-Jaipur",
        state: "Multiple",
        duration: 5,
        price: 14999,
        type: "Heritage",
        rating: 4.8,
        image: "🕌",
        description: "Classic India tour covering three iconic cities with magnificent monuments.",
        itinerary: [
            { day: 1, title: "Delhi Exploration", activities: ["Red Fort", "Jama Masjid", "Chandni Chowk", "India Gate"] },
            { day: 2, title: "Delhi to Agra", activities: ["Drive to Agra", "Agra Fort", "Mehtab Bagh", "Taj Mahal sunset"] },
            { day: 3, title: "Agra to Jaipur", activities: ["Sunrise at Taj Mahal", "Fatehpur Sikri", "Drive to Jaipur", "Check-in"] },
            { day: 4, title: "Jaipur Heritage", activities: ["Amber Fort", "Palace of Winds", "City Palace", "Sound & Light show"] },
            { day: 5, title: "Jaipur Departure", activities: ["Jantar Mantar", "Shopping", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 6,
        title: "Andaman Paradise",
        location: "Port Blair-Havelock-Neil",
        state: "Andaman & Nicobar",
        duration: 6,
        price: 28999,
        type: "Beach",
        rating: 4.9,
        image: "🏝️",
        description: "Pristine beaches, crystal clear waters, and underwater adventures await.",
        itinerary: [
            { day: 1, title: "Port Blair Arrival", activities: ["Airport pickup", "Cellular Jail light show", "Marina Park", "Local seafood"] },
            { day: 2, title: "Port Blair Sightseeing", activities: ["Anthropological Museum", "Chatham Saw Mill", "Corbyn's Cove", "Shopping"] },
            { day: 3, title: "Havelock Island", activities: ["Ferry to Havelock", "Radhanagar Beach", "Snorkeling", "Beach relaxation"] },
            { day: 4, title: "Havelock Adventures", activities: ["Elephant Beach", "Sea walking", "Glass bottom boat", "Sunset views"] },
            { day: 5, title: "Neil Island", activities: ["Ferry to Neil", "Natural Bridge", "Bharatpur Beach", "Laxmanpur Beach"] },
            { day: 6, title: "Departure", activities: ["Return to Port Blair", "Last minute shopping", "Airport transfer"] }
        ]
    },
    {
        id: 7,
        title: "Kashmir Wonderland",
        location: "Srinagar-Gulmarg-Pahalgam",
        state: "Jammu & Kashmir",
        duration: 6,
        price: 22999,
        type: "Mountain",
        rating: 4.9,
        image: "🌸",
        description: "Heaven on earth with stunning valleys, lakes, and snow-covered mountains.",
        itinerary: [
            { day: 1, title: "Srinagar Arrival", activities: ["Airport pickup", "Dal Lake shikara ride", "Mughal Gardens", "Houseboat stay"] },
            { day: 2, title: "Srinagar to Gulmarg", activities: ["Drive to Gulmarg", "Gondola ride", "Alpather Lake", "Snow activities"] },
            { day: 3, title: "Gulmarg to Pahalgam", activities: ["Scenic drive", "Betaab Valley", "Aru Valley", "Lidder River"] },
            { day: 4, title: "Pahalgam Exploration", activities: ["Baisaran Valley", "Pony ride", "Local markets", "Trout fishing"] },
            { day: 5, title: "Return to Srinagar", activities: ["Drive back", "Shankaracharya Temple", "Local crafts", "Farewell dinner"] },
            { day: 6, title: "Departure", activities: ["Morning leisure", "Shopping for souvenirs", "Airport transfer"] }
        ]
    },
    {
        id: 8,
        title: "Leh Ladakh Adventure",
        location: "Leh-Nubra-Pangong",
        state: "Ladakh",
        duration: 7,
        price: 32999,
        type: "Adventure",
        rating: 4.8,
        image: "🏍️",
        description: "High altitude adventure with breathtaking landscapes and Buddhist culture.",
        itinerary: [
            { day: 1, title: "Leh Arrival", activities: ["Airport arrival", "Rest for acclimatization", "Leh Palace", "Local market"] },
            { day: 2, title: "Leh Monasteries", activities: ["Thiksey Monastery", "Hemis Monastery", "Shey Palace", "Indus Valley view"] },
            { day: 3, title: "Nubra Valley", activities: ["Khardung La pass", "Diskit Monastery", "Sand dunes", "Double-humped camels"] },
            { day: 4, title: "Nubra to Pangong", activities: ["Shyok Valley", "Tangtse", "Pangong Lake arrival", "Lakeside camping"] },
            { day: 5, title: "Pangong to Leh", activities: ["Sunrise at lake", "Return via Chang La", "Magnetic Hill", "Sangam point"] },
            { day: 6, title: "Leh Leisure", activities: ["Local exploration", "Monastery visits", "Shopping", "Farewell dinner"] },
            { day: 7, title: "Departure", activities: ["Morning prayers", "Last shopping", "Airport transfer"] }
        ]
    },
    {
        id: 9,
        title: "Goa Carnival Special",
        location: "Goa",
        state: "Goa",
        duration: 5,
        price: 15999,
        type: "Beach",
        rating: 4.7,
        image: "🎭",
        description: "Experience Goa's famous carnival with parades, music, and beach parties.",
        itinerary: [
            { day: 1, title: "Arrival & Carnival Start", activities: ["Airport pickup", "Opening parade", "Beach check-in", "Welcome party"] },
            { day: 2, title: "Carnival Day 1", activities: ["Main parade", "Float competition", "Street performances", "Night carnival"] },
            { day: 3, title: "Carnival Day 2", activities: ["King Momo procession", "Dance competitions", "Food festival", "Beach bonfire"] },
            { day: 4, title: "Beach Relaxation", activities: ["Water sports", "Casino cruise", "Spa treatment", "Farewell dinner"] },
            { day: 5, title: "Departure", activities: ["Morning beach walk", "Shopping", "Airport drop"] }
        ]
    },
    {
        id: 10,
        title: "Uttarakhand Spiritual",
        location: "Haridwar-Rishikesh-Mussoorie",
        state: "Uttarakhand",
        duration: 5,
        price: 11999,
        type: "Heritage",
        rating: 4.6,
        image: "🕉️",
        description: "Spiritual journey through holy cities and Himalayan foothills.",
        itinerary: [
            { day: 1, title: "Haridwar Arrival", activities: ["Temple visits", "Ganga Aarti", "Ashram stay", "Yoga session"] },
            { day: 2, title: "Haridwar to Rishikesh", activities: ["Ram Jhula", "Laxman Jhula", "Beatles Ashram", "River rafting"] },
            { day: 3, title: "Rishikesh Activities", activities: ["White water rafting", "Bungee jumping", "Temple hopping", "Ganga beach"] },
            { day: 4, title: "Mussoorie Excursion", activities: ["Drive to Mussoorie", "Kempty Falls", "Gun Hill", "Mall Road"] },
            { day: 5, title: "Return Journey", activities: ["Morning views", "Shopping", "Start return", "Memorable experiences"] }
        ]
    },
    {
        id: 11,
        title: "Meghalaya Explorer",
        location: "Shillong-Cherrapunji",
        state: "Meghalaya",
        duration: 5,
        price: 17999,
        type: "Adventure",
        rating: 4.7,
        image: "🌧️",
        description: "Explore the abode of clouds with living root bridges and waterfalls.",
        itinerary: [
            { day: 1, title: "Guwahati to Shillong", activities: ["Airport pickup", "Drive to Shillong", "Ward's Lake", "Police Bazaar"] },
            { day: 2, title: "Shillong Sightseeing", activities: ["Elephant Falls", "Shillong Peak", "Don Bosco Museum", "Local cafes"] },
            { day: 3, title: "Cherrapunji Day Trip", activities: ["Seven Sisters Falls", "Nohkalikai Falls", "Mawsmai Cave", "Double Decker bridge trek"] },
            { day: 4, title: "Living Root Bridges", activities: ["Trek to root bridges", "Village experience", "Local cuisine", "Nature walk"] },
            { day: 5, title: "Departure", activities: ["Morning market", "Shopping", "Return to Guwahati", "Airport drop"] }
        ]
    },
    {
        id: 12,
        title: "Sikkim Serenity",
        location: "Gangtok-Pelling-Yumthang",
        state: "Sikkim",
        duration: 6,
        price: 19999,
        type: "Mountain",
        rating: 4.8,
        image: "🌄",
        description: "Peaceful Himalayan retreat with monasteries, lakes, and mountain views.",
        itinerary: [
            { day: 1, title: "Bagdogra to Gangtok", activities: ["Airport pickup", "Scenic drive", "MG Marg", "Local markets"] },
            { day: 2, title: "Gangtok Local", activities: ["Rumtek Monastery", "Enchey Monastery", "Do Drul Chorten", "Cable car ride"] },
            { day: 3, title: "Tsomgo Lake", activities: ["Tsomgo Lake visit", "Nathula Pass (permit)", "Baba Mandir", "Snow play"] },
            { day: 4, title: "Gangtok to Pelling", activities: ["Drive to Pelling", "Pemayangtse Monastery", "Skywalk", "Kanchenjunga view"] },
            { day: 5, title: "Pelling to Yumthang", activities: ["Drive to North Sikkim", "Yumthang Valley", "Hot springs", "Zero Point"] },
            { day: 6, title: "Departure", activities: ["Return journey", "Last views", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 13,
        title: "Tamil Nadu Temple Trail",
        location: "Chennai-Madurai-Rameswaram",
        state: "Tamil Nadu",
        duration: 6,
        price: 16999,
        type: "Heritage",
        rating: 4.6,
        image: "🛕",
        description: "Sacred temple circuit showcasing Dravidian architecture and spirituality.",
        itinerary: [
            { day: 1, title: "Chennai Arrival", activities: ["Kapaleeshwarar Temple", "Marina Beach", "Fort St. George", "Local cuisine"] },
            { day: 2, title: "Chennai to Mahabalipuram", activities: ["Shore Temple", "Arjuna's Ratha", "Tiger Cave", "Beach relaxation"] },
            { day: 3, title: "To Madurai", activities: ["Train/Flight to Madurai", "Meenakshi Temple", "Light show", "Local bazaars"] },
            { day: 4, title: "Madurai to Rameswaram", activities: ["Drive to Rameswaram", "Ramanathaswamy Temple", "Agni Theertham", "Pamban Bridge"] },
            { day: 5, title: "Rameswaram to Kanyakumari", activities: ["Vivekananda Rock", "Thiruvalluvar Statue", "Sunset point", "Triveni Sangam"] },
            { day: 6, title: "Departure", activities: ["Sunrise view", "Shopping", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 14,
        title: "Karnataka Heritage",
        location: "Bangalore-Mysore-Hampi",
        state: "Karnataka",
        duration: 6,
        price: 18999,
        type: "Heritage",
        rating: 4.7,
        image: "🏛️",
        description: "Ancient ruins, royal palaces, and modern city life blend perfectly.",
        itinerary: [
            { day: 1, title: "Bangalore Arrival", activities: ["Cubbon Park", "Bangalore Palace", "Lalbagh", "MG Road shopping"] },
            { day: 2, title: "Bangalore to Mysore", activities: ["Drive to Mysore", "Mysore Palace", "Brindavan Gardens", "Light show"] },
            { day: 3, title: "Mysore Exploration", activities: ["Chamundi Hill", "St. Philomena's Church", "Railway Museum", "Silk shopping"] },
            { day: 4, title: "To Hampi", activities: ["Drive to Hampi", "Virupaksha Temple", "Hemakuta Hill", "Sunset at Matanga Hill"] },
            { day: 5, title: "Hampi Ruins", activities: ["Vittala Temple", "Stone chariot", "Royal enclosure", "Coracle ride"] },
            { day: 6, title: "Departure", activities: ["Morning exploration", "Return journey", "Airport transfer"] }
        ]
    },
    {
        id: 15,
        title: "Maharashtra Express",
        location: "Mumbai-Pune-Ajanta-Ellora",
        state: "Maharashtra",
        duration: 5,
        price: 15999,
        type: "Heritage",
        rating: 4.5,
        image: "🚂",
        description: "From Bollywood city to ancient caves, experience Maharashtra's diversity.",
        itinerary: [
            { day: 1, title: "Mumbai Darshan", activities: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Colaba Causeway"] },
            { day: 2, title: "Mumbai to Pune", activities: ["Express train", "Shaniwar Wada", "Aga Khan Palace", "Osho Ashram"] },
            { day: 3, title: "Pune to Aurangabad", activities: ["Drive to Aurangabad", "Bibi Ka Maqbara", "Local markets", "Traditional dinner"] },
            { day: 4, title: "Ajanta Caves", activities: ["Ajanta cave exploration", "Buddhist paintings", "Photography", "Return to Aurangabad"] },
            { day: 5, title: "Ellora & Departure", activities: ["Ellora caves", "Kailash Temple", "Shopping", "Airport transfer"] }
        ]
    },
    {
        id: 16,
        title: "Assam Tea & Wildlife",
        location: "Guwahati-Kaziranga-Majuli",
        state: "Assam",
        duration: 5,
        price: 17999,
        type: "Adventure",
        rating: 4.7,
        image: "🦏",
        description: "One-horned rhinos, tea gardens, and river islands of Brahmaputra.",
        itinerary: [
            { day: 1, title: "Guwahati Arrival", activities: ["Kamakhya Temple", "Brahmaputra cruise", "Assam State Museum", "Local cuisine"] },
            { day: 2, title: "To Kaziranga", activities: ["Drive to Kaziranga", "Elephant safari", "Bird watching", "Tribal village visit"] },
            { day: 3, title: "Kaziranga Safari", activities: ["Jeep safari (Central range)", "Wildlife spotting", "Orang Sanctuary", "Tea garden visit"] },
            { day: 4, title: "Majuli Island", activities: ["Ferry to Majuli", "Satra monasteries", "Mask making", "Sunset on Brahmaputra"] },
            { day: 5, title: "Departure", activities: ["Morning cultural program", "Return to Guwahati", "Shopping", "Airport drop"] }
        ]
    },
    {
        id: 17,
        title: "Odisha Temple & Beaches",
        location: "Bhubaneswar-Puri-Konark",
        state: "Odisha",
        duration: 4,
        price: 12999,
        type: "Heritage",
        rating: 4.6,
        image: "🌅",
        description: "Sacred temples, golden beaches, and UNESCO World Heritage sites.",
        itinerary: [
            { day: 1, title: "Bhubaneswar Arrival", activities: ["Lingaraj Temple", "Udayagiri Caves", "Nandankanan Zoo", "Local markets"] },
            { day: 2, title: "To Puri", activities: ["Jagannath Temple", "Puri Beach", "Swargadwar", "Seafood dinner"] },
            { day: 3, title: "Konark Sun Temple", activities: ["Sun Temple visit", "Chandrabhaga Beach", "Archaeological Museum", "Light show"] },
            { day: 4, title: "Departure", activities: ["Morning puja", "Shopping for handicrafts", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 18,
        title: "West Bengal Cultural",
        location: "Kolkata-Darjeeling",
        state: "West Bengal",
        duration: 6,
        price: 19999,
        type: "Heritage",
        rating: 4.6,
        image: "🚂",
        description: "Cultural capital meets hill station charm with colonial heritage.",
        itinerary: [
            { day: 1, title: "Kolkata Arrival", activities: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali", "Park Street food"] },
            { day: 2, title: "Kolkata Heritage", activities: ["Indian Museum", "St. Paul's Cathedral", "College Street", "Kumartuli"] },
            { day: 3, title: "To Darjeeling", activities: ["Toy train/NJP drive", "Mall Road", "Observatory Hill", "Tibetan market"] },
            { day: 4, title: "Darjeeling Sunrise", activities: ["Tiger Hill sunrise", "Ghoom Monastery", "Tea estate visit", "Ropeway ride"] },
            { day: 5, title: "Darjeeling Local", activities: ["Padmaja Naidu Zoo", "Himalayan Institute", "Rock climbing", "Local cafes"] },
            { day: 6, title: "Departure", activities: ["Morning leisure", "Shopping for tea", "Return journey", "Airport drop"] }
        ]
    },
    {
        id: 19,
        title: "Madhya Pradesh Heart",
        location: "Bhopal-Khajuraho-Kanha",
        state: "Madhya Pradesh",
        duration: 6,
        price: 21999,
        type: "Adventure",
        rating: 4.7,
        image: "🐯",
        description: "Tiger reserves, ancient temples, and tribal culture of Central India.",
        itinerary: [
            { day: 1, title: "Bhopal Arrival", activities: ["Upper Lake", "Taj-ul-Masjid", "Bharat Bhavan", "Old Bazaar"] },
            { day: 2, title: "Sanchi to Khajuraho", activities: ["Sanchi Stupa", "Flight to Khajuraho", "Western group temples", "Light show"] },
            { day: 3, title: "Khajuraho to Kanha", activities: ["Eastern temples", "Drive to Kanha", "Jungle safari briefing", "Tribal dance"] },
            { day: 4, title: "Kanha Safari", activities: ["Morning jeep safari", "Wildlife spotting", "Barasingha sighting", "Nature walk"] },
            { day: 5, title: "Second Safari", activities: ["Another safari zone", "Photography", "Visit to Kanha museum", "Farewell dinner"] },
            { day: 6, title: "Departure", activities: ["Morning bird watching", "Return to Jabalpur/Bhopal", "Airport transfer"] }
        ]
    },
    {
        id: 20,
        title: "Gujarat Vibrant",
        location: "Ahmedabad-Rann of Kutch",
        state: "Gujarat",
        duration: 5,
        price: 16999,
        type: "Heritage",
        rating: 4.5,
        image: "🎪",
        description: "White desert, vibrant culture, and architectural marvels.",
        itinerary: [
            { day: 1, title: "Ahmedabad Arrival", activities: ["Sabarmati Ashram", "Akshardham Temple", "Law Garden", "Street food tour"] },
            { day: 2, title: "Rann of Kutch", activities: ["Drive to Dhordo", "White salt desert", "Craft villages", "Sunset viewing"] },
            { day: 3, title: "Rann Utsav", activities: ["Cultural programs", "Folk dances", "Handicraft shopping", "Desert camping"] },
            { day: 4, title: "Bhuj Exploration", activities: ["Prag Mahal", "Aina Mahal", "Local markets", "Traditional Gujarati thali"] },
            { day: 5, title: "Departure", activities: ["Morning leisure", "Last shopping", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 21,
        title: "Puducherry French Quarter",
        location: "Pondicherry-Auroville",
        state: "Puducherry",
        duration: 3,
        price: 9999,
        type: "Heritage",
        rating: 4.6,
        image: "🇫🇷",
        description: "French colonial charm meets spiritual awakening.",
        itinerary: [
            { day: 1, title: "Pondicherry Arrival", activities: ["Promenade Beach", "French Quarter walk", "Aurobindo Ashram", "Cafe hopping"] },
            { day: 2, title: "Auroville & Temples", activities: ["Matrimandir visit", "Auroville township", "Manakula Vinayagar", "Botanical Garden"] },
            { day: 3, title: "Departure", activities: ["Paradise Beach", "Shopping", "Local cuisine", "Departure"] }
        ]
    },
    {
        id: 22,
        title: "Arunachal Frontier",
        location: "Tawang-Bomdila",
        state: "Arunachal Pradesh",
        duration: 6,
        price: 24999,
        type: "Adventure",
        rating: 4.8,
        image: "🏔️",
        description: "Untouched beauty of the eastern frontier with monasteries and mountains.",
        itinerary: [
            { day: 1, title: "Tezpur to Bomdila", activities: ["Airport pickup", "Scenic drive", "Bomdila Monastery", "Ethnic museum"] },
            { day: 2, title: "Bomdila to Tawang", activities: ["Drive via Sela Pass", "Sela Lake", "Tawang Monastery", "War memorial"] },
            { day: 3, title: "Tawang Exploration", activities: ["Taktsang Monastery", "Tawang Chu valley", "Local markets", "Hot springs"] },
            { day: 4, title: "Bum La Pass", activities: ["Bum La excursion", "Indo-China border", "Snow activities", "Return to Tawang"] },
            { day: 5, title: "Return Journey", activities: ["Drive to Tezpur", "Nameri National Park", "River camping", "Fishing"] },
            { day: 6, title: "Departure", activities: ["Morning wildlife safari", "Return to airport", "Shopping", "Departure"] }
        ]
    },
    {
        id: 23,
        title: "Nagaland Hornbill",
        location: "Kohima-Mokokchung",
        state: "Nagaland",
        duration: 5,
        price: 19999,
        type: "Adventure",
        rating: 4.7,
        image: "🦅",
        description: "Land of festivals, warrior tribes, and unique culture.",
        itinerary: [
            { day: 1, title: "Kohima Arrival", activities: ["World War II Cemetery", "State Museum", "Kohima Village", "Local market"] },
            { day: 2, title: "Hornbill Festival", activities: ["Festival inauguration", "Tribal morungs", "Folk dances", "War games"] },
            { day: 3, title: "Festival Continues", activities: ["Craft bazaar", "Food stalls", "Music concerts", "Night carnival"] },
            { day: 4, title: "Mokokchung", activities: ["Drive to Mokokchung", "Ao tribe village", "Traditional feast", "Cultural program"] },
            { day: 5, title: "Departure", activities: ["Morning ceremony", "Shopping for handicrafts", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 24,
        title: "Manipur Valley",
        location: "Imphal-Loktak",
        state: "Manipur",
        duration: 4,
        price: 14999,
        type: "Adventure",
        rating: 4.6,
        image: "💃",
        description: "Jewel land with floating islands and classical dance heritage.",
        itinerary: [
            { day: 1, title: "Imphal Arrival", activities: ["Kangla Fort", "Ima Keithel", "Shree Govindajee Temple", "Polo ground"] },
            { day: 2, title: "Loktak Lake", activities: ["Boat to Sendra Island", "Floating phumdis", "Keibul Lamjao Park", "Sangai deer"] },
            { day: 3, title: "Moreh & Temples", activities: ["Indo-Myanmar border", "Bishnupur temples", "Manipuri dance show", "Local cuisine"] },
            { day: 4, title: "Departure", activities: ["Morning market", "Handicraft shopping", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 25,
        title: "Tripura Heritage",
        location: "Agartala-Unakoti",
        state: "Tripura",
        duration: 4,
        price: 13999,
        type: "Heritage",
        rating: 4.5,
        image: "🏯",
        description: "Royal palaces, ancient rock carvings, and bamboo crafts.",
        itinerary: [
            { day: 1, title: "Agartala Arrival", activities: ["Ujjayanta Palace", "State Museum", "Neermahal", "Heritage walk"] },
            { day: 2, title: "Unakoti Excursion", activities: ["Rock carvings", "Kal Bhairav statue", "Waterfalls", "Tribal village"] },
            { day: 3, title: "Pilgrimage Sites", activities: ["Tripureshwari Temple", "Fourteen Goddess Temple", "Bamboo market", "Local crafts"] },
            { day: 4, title: "Departure", activities: ["Morning leisure", "Shopping", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 26,
        title: "Mizoram Hills",
        location: "Aizawl-Champhai",
        state: "Mizoram",
        duration: 5,
        price: 18999,
        type: "Adventure",
        rating: 4.7,
        image: "🌿",
        description: "Evergreen hills, bamboo forests, and warm hospitality.",
        itinerary: [
            { day: 1, title: "Aizawl Arrival", activities: ["Solomon's Temple", "State Museum", "Bara Bazar", "Viewpoints"] },
            { day: 2, title: "Aizawl Local", activities: ["Reiek Tlang", "Durtlang Hills", "Crafts centre", "Traditional lunch"] },
            { day: 3, title: "To Champhai", activities: ["Scenic drive", "Mura Puk caves", "Rih Dil lake", "Myanmar border view"] },
            { day: 4, title: "Champhai Return", activities: ["Village体验", "Bamboo workshops", "Local festivals", "Farewell dinner"] },
            { day: 5, title: "Departure", activities: ["Morning market", "Handloom shopping", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 27,
        title: "Goa Yoga Retreat",
        location: "Arambol-Palom",
        state: "Goa",
        duration: 5,
        price: 17999,
        type: "Beach",
        rating: 4.8,
        image: "🧘",
        description: "Wellness retreat combining yoga, meditation, and beach relaxation.",
        itinerary: [
            { day: 1, title: "Arrival & Orientation", activities: ["Airport pickup", "Beach resort check-in", "Welcome ceremony", "Sunset meditation"] },
            { day: 2, title: "Yoga & Wellness", activities: ["Morning yoga", "Ayurvedic consultation", "Healthy meals", "Beach walk"] },
            { day: 3, title: "Deep Practice", activities: ["Advanced yoga sessions", "Pranayama", "Spa treatments", "Sound healing"] },
            { day: 4, title: "Integration", activities: ["Meditation retreat", "Organic farm visit", "Cooking class", "Bonfire circle"] },
            { day: 5, title: "Departure", activities: ["Final yoga session", "Certificate ceremony", "Shopping", "Airport drop"] }
        ]
    },
    {
        id: 28,
        title: "Kerala Ayurveda",
        location: "Kovalam-Varkala",
        state: "Kerala",
        duration: 7,
        price: 25999,
        type: "Heritage",
        rating: 4.9,
        image: "💆",
        description: "Complete Ayurvedic rejuvenation in a beach setting.",
        itinerary: [
            { day: 1, title: "Arrival & Consultation", activities: ["Airport pickup", "Resort check-in", "Ayurvedic doctor consultation", "Welcome rituals"] },
            { day: 2, title: "Panchakarma Start", activities: ["Abhyanga massage", "Shirodhara", "Yoga session", "Sattvic meals"] },
            { day: 3, title: "Detox Therapy", activities: ["Virechana therapy", "Herbal steam", "Meditation", "Beach relaxation"] },
            { day: 4, title: "Rejuvenation", activities: ["Pizhichil treatment", "Navarakizhi", "Pranayama", "Ayurvedic cooking demo"] },
            { day: 5, title: "Wellness Activities", activities: ["Yoga nidra", "Marma therapy", "Nature walk", "Cultural evening"] },
            { day: 6, title: "Integration", activities: ["Light therapies", "Lifestyle counseling", "Beach activities", "Farewell dinner"] },
            { day: 7, title: "Departure", activities: ["Final consultation", "Health plan", "Shopping", "Airport transfer"] }
        ]
    },
    {
        id: 29,
        title: "Rajasthan Desert Safari",
        location: "Jaisalmer-Bikaner",
        state: "Rajasthan",
        duration: 5,
        price: 18999,
        type: "Adventure",
        rating: 4.7,
        image: "🐪",
        description: "Golden city adventures with camel safaris and desert camping.",
        itinerary: [
            { day: 1, title: "Jaisalmer Arrival", activities: ["Airport pickup", "Jaisalmer Fort", "Patwon Ki Haveli", "Desert culture center"] },
            { day: 2, title: "Desert Safari", activities: ["Camel ride to Sam", "Desert camp check-in", "Sunset views", "Folk performances"] },
            { day: 3, title: "Camp to Bikaner", activities: ["Morning in desert", "Drive to Bikaner", "Junagarh Fort", "Local markets"] },
            { day: 4, title: "Bikaner Exploration", activities: ["Lalgarh Palace", "Ratangarh", "Camel breeding farm", "Bhujia factory"] },
            { day: 5, title: "Departure", activities: ["Morning leisure", "Shopping", "Airport transfer", "Departure"] }
        ]
    },
    {
        id: 30,
        title: "Himalayan Trekking",
        location: "Triund-Hampta",
        state: "Himachal Pradesh",
        duration: 6,
        price: 21999,
        type: "Adventure",
        rating: 4.8,
        image: "🥾",
        description: "Moderate treks with stunning Himalayan panoramas.",
        itinerary: [
            { day: 1, title: "Manali Arrival", activities: ["Airport pickup", "Gear check", "Trek briefing", "Acclimatization walk"] },
            { day: 2, title: "Triund Trek Start", activities: ["Drive to McLeodganj", "Trek to Triund", "Camp setup", "Sunset views"] },
            { day: 3, title: "Triund to Lahesh", activities: ["Early morning trek", "Lahesh Cave", "Alpine meadows", "Mountain views"] },
            { day: 4, title: "Hampta Valley", activities: ["Descend to Hampta", "Crossing pass", "Chatru village", "Vehicle pickup"] },
            { day: 5, title: "Chandratal", activities: ["Drive to Chandratal", "Lake exploration", "Stargazing", "Camping by lake"] },
            { day: 6, title: "Return", activities: ["Sunrise at lake", "Return to Manali", "Farewell dinner", "Memories"] }
        ]
    }
];

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Load packages on home page
    const packagesGrid = document.getElementById('packagesGrid');
    if (packagesGrid) {
        renderPackages(packages);
    }

    // Search and filter functionality
    const searchInput = document.getElementById('searchInput');
    const priceFilter = document.getElementById('priceFilter');
    const durationFilter = document.getElementById('durationFilter');
    const typeFilter = document.getElementById('typeFilter');
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');

    if (searchBtn) {
        searchBtn.addEventListener('click', filterPackages);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }

    // Enter key for search
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                filterPackages();
            }
        });
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Load package details if on detail page
    const packageId = window.location.search.split('id=')[1];
    if (packageId && document.getElementById('packageDetail')) {
        loadPackageDetails(parseInt(packageId));
    }
});

// Render packages grid
function renderPackages(packagesToRender) {
    const packagesGrid = document.getElementById('packagesGrid');
    if (!packagesGrid) return;

    if (packagesToRender.length === 0) {
        packagesGrid.innerHTML = '<div class="no-results">No packages found matching your criteria. Try adjusting your filters!</div>';
        return;
    }

    packagesGrid.innerHTML = packagesToRender.map(pkg => `
        <div class="package-card" onclick="viewPackageDetails(${pkg.id})">
            <div class="package-image">${pkg.image}</div>
            <div class="package-content">
                <h3 class="package-title">${pkg.title}</h3>
                <div class="package-location">📍 ${pkg.location}</div>
                <div class="package-info">
                    <div class="info-item">
                        <span class="info-label">Duration</span>
                        <span class="info-value">${pkg.duration} Days</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Type</span>
                        <span class="info-value">${pkg.type}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Rating</span>
                        <span class="info-value">⭐ ${pkg.rating}</span>
                    </div>
                </div>
                <div class="package-price">₹${pkg.price.toLocaleString()} <span>per person</span></div>
                <div class="package-buttons">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); viewPackageDetails(${pkg.id})">View Details</button>
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); bookNow(${pkg.id})">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter packages
function filterPackages() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const priceRange = document.getElementById('priceFilter')?.value || 'all';
    const durationRange = document.getElementById('durationFilter')?.value || 'all';
    const packageType = document.getElementById('typeFilter')?.value || 'all';

    let filtered = packages.filter(pkg => {
        // Search filter
        const matchesSearch = pkg.title.toLowerCase().includes(searchTerm) || 
                             pkg.location.toLowerCase().includes(searchTerm) ||
                             pkg.description.toLowerCase().includes(searchTerm);

        // Price filter
        let matchesPrice = true;
        if (priceRange === 'budget') matchesPrice = pkg.price <= 15000;
        else if (priceRange === 'mid') matchesPrice = pkg.price > 15000 && pkg.price <= 25000;
        else if (priceRange === 'premium') matchesPrice = pkg.price > 25000;

        // Duration filter
        let matchesDuration = true;
        if (durationRange === 'short') matchesDuration = pkg.duration <= 4;
        else if (durationRange === 'medium') matchesDuration = pkg.duration > 4 && pkg.duration <= 6;
        else if (durationRange === 'long') matchesDuration = pkg.duration > 6;

        // Type filter
        const matchesType = packageType === 'all' || pkg.type.toLowerCase() === packageType.toLowerCase();

        return matchesSearch && matchesPrice && matchesDuration && matchesType;
    });

    renderPackages(filtered);
}

// Reset filters
function resetFilters() {
    if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
    if (document.getElementById('priceFilter')) document.getElementById('priceFilter').value = 'all';
    if (document.getElementById('durationFilter')) document.getElementById('durationFilter').value = 'all';
    if (document.getElementById('typeFilter')) document.getElementById('typeFilter').value = 'all';
    renderPackages(packages);
}

// View package details
function viewPackageDetails(packageId) {
    window.location.href = `pages/package-detail.html?id=${packageId}`;
}

// Book now
function bookNow(packageId) {
    const pkg = packages.find(p => p.id === packageId);
    if (pkg) {
        localStorage.setItem('selectedPackage', JSON.stringify(pkg));
        window.location.href = 'pages/booking.html';
    }
}

// Load package details on detail page
function loadPackageDetails(packageId) {
    const pkg = packages.find(p => p.id === packageId);
    if (!pkg) return;

    document.getElementById('packageTitle').textContent = pkg.title;
    document.getElementById('packageLocation').textContent = `📍 ${pkg.location}`;
    document.getElementById('packageImage').textContent = pkg.image;
    document.getElementById('packageDescription').textContent = pkg.description;
    document.getElementById('packageDuration').textContent = `${pkg.duration} Days`;
    document.getElementById('packageType').textContent = pkg.type;
    document.getElementById('packageRating').textContent = `⭐ ${pkg.rating}`;
    document.getElementById('packagePrice').textContent = `₹${pkg.price.toLocaleString()}`;

    // Render itinerary
    const itineraryContainer = document.getElementById('itinerary');
    if (itineraryContainer && pkg.itinerary) {
        itineraryContainer.innerHTML = pkg.itinerary.map(day => `
            <div class="day-card">
                <div class="day-header">
                    <div class="day-number">Day ${day.day}</div>
                    <h3 class="day-title">${day.title}</h3>
                </div>
                <ul class="activities-list">
                    ${day.activities.map(activity => `<li>✓ ${activity}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Set up book button
    const bookBtn = document.getElementById('bookDetailBtn');
    if (bookBtn) {
        bookBtn.onclick = () => bookNow(pkg.id);
    }
}

// Booking form handling
function handleBooking(event) {
    event.preventDefault();
    
    const selectedPackage = JSON.parse(localStorage.getItem('selectedPackage'));
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;
    const travelDate = document.getElementById('travelDate')?.value;
    const travelers = document.getElementById('travelers')?.value;

    if (!selectedPackage || !name || !email || !phone || !travelDate || !travelers) {
        alert('Please fill in all required fields');
        return;
    }

    const booking = {
        id: 'INDIA' + Date.now(),
        package: selectedPackage,
        name,
        email,
        phone,
        travelDate,
        travelers,
        bookingDate: new Date().toISOString(),
        status: 'Confirmed'
    };

    // Save booking
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Show success
    document.getElementById('bookingSuccess').style.display = 'block';
    document.getElementById('bookingId').textContent = booking.id;
    document.getElementById('bookingPackage').textContent = selectedPackage.title;
    document.getElementById('bookingName').textContent = name;
    document.getElementById('bookingForm').style.display = 'none';

    // Scroll to success message
    document.getElementById('bookingSuccess').scrollIntoView({ behavior: 'smooth' });
}
