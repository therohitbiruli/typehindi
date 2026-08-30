// Game Hub Data & Word Banks for TypeHindi.in

export interface GameInfo {
  id: "tank" | "target" | "classic" | "runner" | "builder" | "matra";
  slug: string;
  title: string;
  hindiTitle: string;
  category: "ACTION & REFLEX" | "SPEED GAMES" | "LEARNING GAMES";
  badge: string;
  badgeColor: string;
  description: string;
  skills: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  gradient: string;
  accentColor: string;
  icon: string;
  thumbImage?: string;
}

export const GAME_CATALOG: GameInfo[] = [
  {
    id: "tank",
    slug: "tank-defender",
    title: "Tank Defender",
    hindiTitle: "टैंक डिफेंडर",
    category: "ACTION & REFLEX",
    badge: "⚡ ACTION",
    badgeColor: "bg-emerald-500 text-white",
    description: "Defend your base by typing characters and words before enemy tanks breach your perimeter.",
    skills: ["Fast Typing", "Accuracy", "Reaction Time"],
    difficulty: "Intermediate",
    gradient: "from-emerald-950/60 via-slate-900 to-slate-950",
    accentColor: "border-emerald-500/50 hover:border-emerald-400 text-emerald-400",
    icon: "🛡️",
    thumbImage: "/images/game_thumb_tank.png"
  },
  {
    id: "target",
    slug: "typing-target",
    title: "Typing Target",
    hindiTitle: "टाइपिंग टार्गेट",
    category: "ACTION & REFLEX",
    badge: "🎯 ARCADE",
    badgeColor: "bg-amber-500 text-white",
    description: "Hit radar targets across the arena with lightning-fast Hindi typing before they vanish.",
    skills: ["Speed", "Precision", "Reflexes"],
    difficulty: "Beginner",
    gradient: "from-amber-950/60 via-slate-900 to-slate-950",
    accentColor: "border-amber-500/50 hover:border-amber-400 text-amber-400",
    icon: "🎯",
    thumbImage: "/images/game_thumb_target.jpg"
  },
  {
    id: "classic",
    slug: "falling-words",
    title: "Classic Falling Words",
    hindiTitle: "क्लासिक फॉलिंग वर्ड्स",
    category: "SPEED GAMES",
    badge: "🔥 POPULAR",
    badgeColor: "bg-rose-500 text-white",
    description: "Type cascading Hindi words and symbols before gravity pulls them to the ground.",
    skills: ["Typing Speed", "Accuracy", "Recognition"],
    difficulty: "Intermediate",
    gradient: "from-rose-950/60 via-slate-900 to-slate-950",
    accentColor: "border-rose-500/50 hover:border-rose-400 text-rose-400",
    icon: "🌧️",
    thumbImage: "/images/game_thumb_classic.png"
  },
  {
    id: "runner",
    slug: "word-runner",
    title: "Word Runner",
    hindiTitle: "वर्ड रनर",
    category: "SPEED GAMES",
    badge: "🏃 HIGH SPEED",
    badgeColor: "bg-cyan-500 text-white",
    description: "Sprint through obstacle tracks at top speed by typing continuous words to trigger speed boosts.",
    skills: ["Continuous Typing", "Speed", "Word Recognition"],
    difficulty: "Intermediate",
    gradient: "from-cyan-950/60 via-slate-900 to-slate-950",
    accentColor: "border-cyan-500/50 hover:border-cyan-400 text-cyan-400",
    icon: "⚡",
    thumbImage: "/images/game_thumb_runner.jpg"
  },
  {
    id: "builder",
    slug: "hindi-word-builder",
    title: "Hindi Word Builder",
    hindiTitle: "हिंदी वर्ड बिल्डर",
    category: "LEARNING GAMES",
    badge: "🧩 SPELLING",
    badgeColor: "bg-indigo-500 text-white",
    description: "Solve missing letters and matras to complete authentic Hindi words and master spelling.",
    skills: ["Hindi Spelling", "Matras", "Word Construction"],
    difficulty: "Beginner",
    gradient: "from-indigo-950/60 via-slate-900 to-slate-950",
    accentColor: "border-indigo-500/50 hover:border-indigo-400 text-indigo-400",
    icon: "🔤",
    thumbImage: "/images/game_thumb_builder.jpg"
  },
  {
    id: "matra",
    slug: "matra-challenge",
    title: "Matra Challenge",
    hindiTitle: "मात्रा चैलेंज",
    category: "LEARNING GAMES",
    badge: "✨ MASTERY",
    badgeColor: "bg-fuchsia-500 text-white",
    description: "Master all Hindi vowel signs (ा, ि, ी, ु, ू, े, ै, ो, ौ) through fast-paced interactive drills.",
    skills: ["Matra Mastery", "Hindi Vowels", "Typing Precision"],
    difficulty: "Beginner",
    gradient: "from-fuchsia-950/60 via-slate-900 to-slate-950",
    accentColor: "border-fuchsia-500/50 hover:border-fuchsia-400 text-fuchsia-400",
    icon: "🪄",
    thumbImage: "/images/game_thumb_matra.jpg"
  }
];

// Difficulty Word Banks
export const TARGET_WORDS = {
  beginner: [
    "कम", "कल", "मन", "घर", "जल", "नल", "पल", "फल", "रथ", "वन",
    "तन", "धन", "बस", "रस", "सर", "कर", "डर", "पर", "भर", "मर",
    "अ", "आ", "इ", "ई", "उ", "ऊ", "क", "ख", "ग", "घ", "च", "छ", "ज", "झ"
  ],
  intermediate: [
    "भारत", "शिक्षा", "पुस्तक", "कलम", "रास्ता", "सपना", "सूरज", "चाँद",
    "नदी", "पर्वत", "विकास", "प्रगति", "परिवार", "समाज", "किताब", "गमला",
    "रोटी", "पानी", "हवा", "फूल", "मित्र", "सड़क", "पेड़", "नगर", "महल"
  ],
  advanced: [
    "कंप्यूटर", "संस्कृति", "विश्वविद्यालय", "प्रौद्योगिकी", "अंतरिक्ष",
    "पर्यावरण", "प्रदूषण", "संविधान", "अध्यापक", "वैज्ञानिक", "प्रशासन",
    "लोकतंत्र", "अर्थव्यवस्था", "आत्मनिर्भर", "अनुसंधान", "कार्यालय"
  ]
};

export const RUNNER_WORDS = {
  beginner: [
    "कमल", "नहर", "शहर", "मटर", "भवन", "हवन", "चरण", "पवन", "नयन", "सड़क",
    "कलम", "गगन", "चमक", "दमक", "महल", "पहल", "सरल", "तरल", "गरम", "नरम"
  ],
  intermediate: [
    "सवेरा", "उजाला", "किसान", "दीपक", "गुलाब", "सूरज", "मेहनत", "सफलता",
    "किताब", "बगीचा", "चिड़िया", "बादल", "बरसात", "मौसम", "त्योहार", "आनंद",
    "सैनिक", "देशभक्ति", "सच्चाई", "ईमानदारी", "हौसला", "मंजिल", "उम्मीद"
  ],
  advanced: [
    "दृष्टिकोण", "प्रतिबद्धता", "आत्मविश्वास", "सहानुभूति", "पारदर्शिता",
    "उत्तरदायित्व", "उत्कृष्टता", "सशक्तिकरण", "पुनरुत्थान", "दूरदर्शिता",
    "प्रगतिशीलता", "कर्तव्यनिष्ठा", "सहानुभूतिपूर्ण", "अभूतपूर्व"
  ]
};

export interface WordBuilderPuzzle {
  id: number;
  word: string;
  display: string;
  missing: string;
  options: string[];
  hint: string;
  category: "basic" | "matra" | "common" | "difficult" | "conjunct";
}

export const WORD_BUILDER_PUZZLES: WordBuilderPuzzle[] = [
  // Basic Characters
  { id: 1, word: "कलम", display: "क _ म", missing: "ल", options: ["ल", "र", "म", "न"], hint: "लिखने की वस्तु (Pen)", category: "basic" },
  { id: 2, word: "कमल", display: "क _ ल", missing: "म", options: ["म", "न", "प", "स"], hint: "हमारा राष्ट्रीय फूल (Lotus)", category: "basic" },
  { id: 3, word: "सड़क", display: "स _ क", missing: "ड़", options: ["ड़", "ड", "ढ", "र"], hint: "रास्ता (Road)", category: "basic" },
  { id: 4, word: "भवन", display: "भ _ न", missing: "व", options: ["व", "ब", "म", "य"], hint: "इमारत या घर (Building)", category: "basic" },
  { id: 5, word: "महल", display: "म _ ल", missing: "ह", options: ["ह", "क", "र", "स"], hint: "राजा का निवास (Palace)", category: "basic" },

  // Matras
  { id: 6, word: "किताब", display: "क _ ताब", missing: "ि", options: ["ि", "ी", "ु", "े"], hint: "पढ़ने की पुस्तक (Book)", category: "matra" },
  { id: 7, word: "सूरज", display: "स _ रज", missing: "ू", options: ["ू", "ु", "ो", "ा"], hint: "दिन में चमकने वाला तारा (Sun)", category: "matra" },
  { id: 8, word: "दीपक", display: "द _ पक", missing: "ी", options: ["ी", "ि", "ै", "ा"], hint: "दीया या प्रकाश (Lamp)", category: "matra" },
  { id: 9, word: "गुलाब", display: "ग _ लाब", missing: "ु", options: ["ु", "ू", "ो", "ौ"], hint: "सुगंधित लाल फूल (Rose)", category: "matra" },
  { id: 10, word: "पेड़", display: "प _ ड़", missing: "े", options: ["े", "ै", "ो", "ी"], hint: "वृक्ष (Tree)", category: "matra" },
  { id: 11, word: "पौधा", display: "प _ धा", missing: "ौ", options: ["ौ", "ो", "ा", "ै"], hint: "छोटा वृक्ष (Plant)", category: "matra" },

  // Common Words
  { id: 12, word: "भारत", display: "भा _ त", missing: "र", options: ["र", "ल", "त", "न"], hint: "हमारा प्यारा देश (India)", category: "common" },
  { id: 13, word: "शिक्षा", display: "शि _ षा", missing: "क", options: ["क", "ख", "त", "प"], hint: "ज्ञान व तालीम (Education)", category: "common" },
  { id: 14, word: "सपना", display: "स _ ना", missing: "प", options: ["प", "म", "र", "ल"], hint: "ख्वाब (Dream)", category: "common" },
  { id: 15, word: "दोस्त", display: "दो _ त", missing: "स्", options: ["स्", "स्त", "श", "ष"], hint: "मित्र (Friend)", category: "common" },

  // Difficult Words & Conjuncts
  { id: 16, word: "पुस्तक", display: "पु _ तक", missing: "स्", options: ["स्", "स्त", "स", "श"], hint: "ग्रंथ या किताब (Book)", category: "conjunct" },
  { id: 17, word: "अध्यापक", display: "अ _ यापक", missing: "ध्", options: ["ध्", "ध", "थ्", "भ्"], hint: "शिक्षक (Teacher)", category: "conjunct" },
  { id: 18, word: "विद्या", display: "वि _ या", missing: "द्", options: ["द्", "द्य", "द", "ध"], hint: "ज्ञान (Knowledge)", category: "conjunct" },
  { id: 19, word: "स्वागत", display: " _ वागत", missing: "स्", options: ["स्", "स", "श्व", "ष"], hint: "सत्कार (Welcome)", category: "conjunct" },
  { id: 20, word: "प्रगति", display: " _ गति", missing: "प्र", options: ["प्र", "प", "पर", "पर्"], hint: "उन्नति या विकास (Progress)", category: "difficult" },
  { id: 21, word: "संस्कृति", display: "सं _ कृति", missing: "स्", options: ["स्", "स", "श", "ष"], hint: "सभ्यता (Culture)", category: "difficult" },
  { id: 22, word: "पर्यावरण", display: "प _ यावरण", missing: "र्", options: ["र्", "र", "ऋ", "री"], hint: "नेचुरल परिवेश (Environment)", category: "difficult" }
];

export interface MatraQuizItem {
  id: number;
  matraSymbol: string;
  matraName: string;
  exampleBase: string;
  exampleTarget: string;
  sampleWord: string;
  soundKey: string;
  inscriptKey: string;
  practiceWords: string[];
}

export const MATRA_CHALLENGE_LIST: MatraQuizItem[] = [
  { id: 1, matraSymbol: "ा", matraName: "आ की मात्रा (AA)", exampleBase: "क", exampleTarget: "का", sampleWord: "काम", soundKey: "aa", inscriptKey: "E", practiceWords: ["काम", "नाम", "दाम", "राम", "शाम", "गाना"] },
  { id: 2, matraSymbol: "ि", matraName: "इ की मात्रा (Chhoti I)", exampleBase: "क", exampleTarget: "कि", sampleWord: "किताब", soundKey: "i", inscriptKey: "F", practiceWords: ["दिन", "गिन", "पिन", "रवि", "कवि", "किला"] },
  { id: 3, matraSymbol: "ी", matraName: "ई की मात्रा (Badi II)", exampleBase: "क", exampleTarget: "की", sampleWord: "कील", soundKey: "ee", inscriptKey: "R", practiceWords: ["पानी", "नानी", "चाची", "तीर", "वीर", "खीर"] },
  { id: 4, matraSymbol: "ु", matraName: "उ की मात्रा (Chhota U)", exampleBase: "क", exampleTarget: "कु", sampleWord: "कुल", soundKey: "u", inscriptKey: "G", practiceWords: ["पुल", "कुल", "धुल", "मुख", "सुख", "दुख"] },
  { id: 5, matraSymbol: "ू", matraName: "ऊ की मात्रा (Bada UU)", exampleBase: "क", exampleTarget: "कू", sampleWord: "कूद", soundKey: "oo", inscriptKey: "T", practiceWords: ["फूल", "धूल", "मूल", "सूट", "बूट", "लूट"] },
  { id: 6, matraSymbol: "े", matraName: "ए की मात्रा (E)", exampleBase: "क", exampleTarget: "के", sampleWord: "केला", soundKey: "e", inscriptKey: "S", practiceWords: ["केला", "मेला", "रेल", "खेल", "तेल", "बेल"] },
  { id: 7, matraSymbol: "ै", matraName: "ऐ की मात्रा (AI)", exampleBase: "क", exampleTarget: "कै", sampleWord: "कैमरा", soundKey: "ai", inscriptKey: "W", practiceWords: ["पैर", "सैर", "बैल", "थैला", "मैना", "पैसा"] },
  { id: 8, matraSymbol: "ो", matraName: "ओ की मात्रा (O)", exampleBase: "क", exampleTarget: "को", sampleWord: "कोयल", soundKey: "o", inscriptKey: "A", practiceWords: ["मोर", "शोर", "चोर", "तोटा", "रोटी", "धोती"] },
  { id: 9, matraSymbol: "ौ", matraName: "औ की मात्रा (AU)", exampleBase: "क", exampleTarget: "कौ", sampleWord: "कौआ", soundKey: "au", inscriptKey: "Q", practiceWords: ["पौधा", "मौका", "नौका", "दौड़", "कौड़ी", "फौज"] },
  { id: 10, matraSymbol: "ं", matraName: "अनुस्वार बिंदी (AN)", exampleBase: "क", exampleTarget: "कं", sampleWord: "कंगना", soundKey: "am", inscriptKey: "X", practiceWords: ["हंस", "पंख", "रंग", "जंग", "गंगा", "अंगूर"] },
  { id: 11, matraSymbol: "ँ", matraName: "चन्द्रबिन्दु (Chandrabindu)", exampleBase: "क", exampleTarget: "कँ", sampleWord: "काँटा", soundKey: "an", inscriptKey: "Alt+X", practiceWords: ["आँख", "चाँद", "गाँव", "पाँव", "दाँत", "माँ"] },
  { id: 12, matraSymbol: "ृ", matraName: "ऋ की मात्रा (RI)", exampleBase: "क", exampleTarget: "कृ", sampleWord: "कृपा", soundKey: "ri", inscriptKey: "D", practiceWords: ["गृह", "वृक्ष", "मृग", "कृषक", "हृदय", "अमृत"] }
];
