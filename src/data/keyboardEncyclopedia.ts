// InScript Keyboard Encyclopedia Data, Character Mappings, Categories & Quiz Questions

export interface InScriptKeyDetail {
  code: string;
  englishKey: string;
  normal: string;
  normalName: string;
  normalCategory: "vowel" | "consonant" | "matra" | "number" | "symbol" | "special";
  shift: string;
  shiftName: string;
  shiftCategory: "vowel" | "consonant" | "matra" | "number" | "symbol" | "special";
  examplesNormal: string[];
  examplesShift: string[];
  description?: string;
}

export const INSCRIPT_KEY_DETAILS: InScriptKeyDetail[] = [
  // Number Row
  {
    code: "Digit1",
    englishKey: "1",
    normal: "१",
    normalName: "देवनागरी अंक एक (1)",
    normalCategory: "number",
    shift: "!",
    shiftName: "विस्मयादिबोधक चिह्न (Exclamation)",
    shiftCategory: "symbol",
    examplesNormal: ["१", "१०", "१००", "२०२४"],
    examplesShift: ["अरे!", "वाह!", "सावधान!"]
  },
  {
    code: "Digit2",
    englishKey: "2",
    normal: "२",
    normalName: "देवनागरी अंक दो (2)",
    normalCategory: "number",
    shift: "@",
    shiftName: "एट चिह्न (@)",
    shiftCategory: "symbol",
    examplesNormal: ["२", "२५", "२००"],
    examplesShift: ["email@domain.com"]
  },
  {
    code: "Digit3",
    englishKey: "3",
    normal: "३",
    normalName: "देवनागरी अंक तीन (3)",
    normalCategory: "number",
    shift: "#",
    shiftName: "हैश चिह्न (#)",
    shiftCategory: "symbol",
    examplesNormal: ["३", "३०", "३५०"],
    examplesShift: ["#1", "#हिंदी"]
  },
  {
    code: "Digit4",
    englishKey: "4",
    normal: "४",
    normalName: "देवनागरी अंक चार (4)",
    normalCategory: "number",
    shift: "$",
    shiftName: "डॉलर चिह्न ($)",
    shiftCategory: "symbol",
    examplesNormal: ["४", "४०", "४००"],
    examplesShift: ["$100"]
  },
  {
    code: "Digit5",
    englishKey: "5",
    normal: "५",
    normalName: "देवनागरी अंक पाँच (5)",
    normalCategory: "number",
    shift: "%",
    shiftName: "प्रतिशत चिह्न (%)",
    shiftCategory: "symbol",
    examplesNormal: ["५", "५०", "५००"],
    examplesShift: ["100%"]
  },
  {
    code: "Digit6",
    englishKey: "6",
    normal: "६",
    normalName: "देवनागरी अंक छह (6)",
    normalCategory: "number",
    shift: "^",
    shiftName: "कैरट चिह्न (^)",
    shiftCategory: "symbol",
    examplesNormal: ["६", "६०", "६००"],
    examplesShift: ["2^3"]
  },
  {
    code: "Digit7",
    englishKey: "7",
    normal: "७",
    normalName: "देवनागरी अंक सात (7)",
    normalCategory: "number",
    shift: "&",
    shiftName: "एंड चिह्न (&)",
    shiftCategory: "symbol",
    examplesNormal: ["७", "७०", "७००"],
    examplesShift: ["A & B"]
  },
  {
    code: "Digit8",
    englishKey: "8",
    normal: "८",
    normalName: "देवनागरी अंक आठ (8)",
    normalCategory: "number",
    shift: "*",
    shiftName: "गुणा / तारा चिह्न (*)",
    shiftCategory: "symbol",
    examplesNormal: ["८", "८०", "८००"],
    examplesShift: ["*महत्वपूर्ण*"]
  },
  {
    code: "Digit9",
    englishKey: "9",
    normal: "९",
    normalName: "देवनागरी अंक नौ (9)",
    normalCategory: "number",
    shift: "(",
    shiftName: "बायाँ कोष्ठक (Open Bracket)",
    shiftCategory: "symbol",
    examplesNormal: ["९", "९०", "९००"],
    examplesShift: ["(उदाहरण)"]
  },
  {
    code: "Digit0",
    englishKey: "0",
    normal: "०",
    normalName: "देवनागरी अंक शून्य (0)",
    normalCategory: "number",
    shift: ")",
    shiftName: "दायाँ कोष्ठक (Close Bracket)",
    shiftCategory: "symbol",
    examplesNormal: ["०", "१०", "५०"],
    examplesShift: ["(पुस्तक)"]
  },
  {
    code: "Minus",
    englishKey: "-",
    normal: "-",
    normalName: "हाइफ़न / योजक चिह्न",
    normalCategory: "symbol",
    shift: "ः",
    shiftName: "विसर्ग (Visarga)",
    shiftCategory: "matra",
    examplesNormal: ["माता-पिता", "दिन-रात"],
    examplesShift: ["प्रातः", "अतः", "दुःख", "पुनः"]
  },
  {
    code: "Equal",
    englishKey: "=",
    normal: "ृ",
    normalName: "ऋ की मात्रा (Ri Matra)",
    normalCategory: "matra",
    shift: "ऋ",
    shiftName: "स्वर ऋ (Vowel Ri)",
    shiftCategory: "vowel",
    examplesNormal: ["गृह", "वृक्ष", "कृषि", "हृदय", "अमृत"],
    examplesShift: ["ऋषि", "ऋतु", "ऋण", "ऋग्वेद"]
  },

  // QWERTY Row
  {
    code: "KeyQ",
    englishKey: "Q",
    normal: "ौ",
    normalName: "औ की मात्रा (AU Matra)",
    normalCategory: "matra",
    shift: "औ",
    shiftName: "स्वर औ (Vowel AU)",
    shiftCategory: "vowel",
    examplesNormal: ["पौधा", "मौका", "नौका", "दौड़", "कौआ"],
    examplesShift: ["औरत", "औषधि", "औजार", "और"]
  },
  {
    code: "KeyW",
    englishKey: "W",
    normal: "ै",
    normalName: "ऐ की मात्रा (AI Matra)",
    normalCategory: "matra",
    shift: "ऐ",
    shiftName: "स्वर ऐ (Vowel AI)",
    shiftCategory: "vowel",
    examplesNormal: ["पैर", "सैर", "बैल", "थैला", "मैना", "पैसा"],
    examplesShift: ["ऐनक", "ऐतिहासिक", "ऐश्वर्य", "ऐसा"]
  },
  {
    code: "KeyE",
    englishKey: "E",
    normal: "ा",
    normalName: "आ की मात्रा (AA Matra)",
    normalCategory: "matra",
    shift: "आ",
    shiftName: "स्वर आ (Vowel AA)",
    shiftCategory: "vowel",
    examplesNormal: ["काम", "नाम", "दाम", "राम", "शाम", "गाना"],
    examplesShift: ["आज", "आम", "आकाश", "आदमी", "आग"]
  },
  {
    code: "KeyR",
    englishKey: "R",
    normal: "ी",
    normalName: "ई की मात्रा - बड़ी ई (Badi II Matra)",
    normalCategory: "matra",
    shift: "ई",
    shiftName: "स्वर ई - बड़ी ई (Vowel II)",
    shiftCategory: "vowel",
    examplesNormal: ["पानी", "नानी", "चाची", "तीर", "वीर", "खीर"],
    examplesShift: ["ईख", "ईश्वर", "ईमानदार", "ईंट"]
  },
  {
    code: "KeyT",
    englishKey: "T",
    normal: "ू",
    normalName: "ऊ की मात्रा - बड़ा ऊ (Bada UU Matra)",
    normalCategory: "matra",
    shift: "ऊ",
    shiftName: "स्वर ऊ - बड़ा ऊ (Vowel UU)",
    shiftCategory: "vowel",
    examplesNormal: ["फूल", "धूल", "मूल", "सूट", "बूट", "लूट"],
    examplesShift: ["ऊन", "ऊपर", "ऊँचा", "ऊर्जा"]
  },
  {
    code: "KeyY",
    englishKey: "Y",
    normal: "ब",
    normalName: "व्यंजन ब (Consonant Ba)",
    normalCategory: "consonant",
    shift: "भ",
    shiftName: "व्यंजन भ (Consonant Bha)",
    shiftCategory: "consonant",
    examplesNormal: ["बस", "बालक", "बगीचा", "बंदर", "बादल"],
    examplesShift: ["भारत", "भवन", "भाई", "भाषा", "भोजन"]
  },
  {
    code: "KeyU",
    englishKey: "U",
    normal: "ह",
    normalName: "व्यंजन ह (Consonant Ha)",
    normalCategory: "consonant",
    shift: "ङ",
    shiftName: "व्यंजन ङ (Consonant Nga)",
    shiftCategory: "consonant",
    examplesNormal: ["हवा", "हाथ", "हंस", "महल", "शहर"],
    examplesShift: ["वाङ्गमय", "अङ्ग"]
  },
  {
    code: "KeyI",
    englishKey: "I",
    normal: "ग",
    normalName: "व्यंजन ग (Consonant Ga)",
    normalCategory: "consonant",
    shift: "घ",
    shiftName: "व्यंजन घ (Consonant Gha)",
    shiftCategory: "consonant",
    examplesNormal: ["गमला", "गाना", "गाय", "गगन", "गुलाब"],
    examplesShift: ["घर", "घड़ी", "घोड़ा", "घास", "घना"]
  },
  {
    code: "KeyO",
    englishKey: "O",
    normal: "द",
    normalName: "व्यंजन द (Consonant Da)",
    normalCategory: "consonant",
    shift: "ध",
    shiftName: "व्यंजन ध (Consonant Dha)",
    shiftCategory: "consonant",
    examplesNormal: ["दीपक", "दिन", "दरवाजा", "दवा", "दाम"],
    examplesShift: ["धन", "धनुष", "धूप", "धरती", "धर्म"]
  },
  {
    code: "KeyP",
    englishKey: "P",
    normal: "ज",
    normalName: "व्यंजन ज (Consonant Ja)",
    normalCategory: "consonant",
    shift: "झ",
    shiftName: "व्यंजन झ (Consonant Jha)",
    shiftCategory: "consonant",
    examplesNormal: ["जल", "जीवन", "जहाज", "जंगल", "जादू"],
    examplesShift: ["झंडा", "झरना", "झूला", "झोपड़ी"]
  },
  {
    code: "BracketLeft",
    englishKey: "[",
    normal: "ड",
    normalName: "व्यंजन ड (Consonant Dda)",
    normalCategory: "consonant",
    shift: "ढ",
    shiftName: "व्यंजन ढ (Consonant Ddha)",
    shiftCategory: "consonant",
    examplesNormal: ["डमरू", "डाकघर", "डाल", "डर"],
    examplesShift: ["ढक्कन", "ढोलक", "ढाल"]
  },
  {
    code: "BracketRight",
    englishKey: "]",
    normal: "़",
    normalName: "नुक़्ता (Nukta Sign)",
    normalCategory: "special",
    shift: "ञ",
    shiftName: "व्यंजन ञ (Consonant Nya)",
    shiftCategory: "consonant",
    examplesNormal: ["क़लम", "फ़िल्म", "ज़िन्दगी", "पेड़", "पढ़ना"],
    examplesShift: ["चञ्चल", "पञ्च"]
  },

  // Home Row (ASDF)
  {
    code: "KeyA",
    englishKey: "A",
    normal: "ो",
    normalName: "ओ की मात्रा (O Matra)",
    normalCategory: "matra",
    shift: "ओ",
    shiftName: "स्वर ओ (Vowel O)",
    shiftCategory: "vowel",
    examplesNormal: ["मोर", "शोर", "चोर", "रोटी", "धोती", "कोयल"],
    examplesShift: ["ओस", "ओढ़नी", "ओर", "ओखली"]
  },
  {
    code: "KeyS",
    englishKey: "S",
    normal: "े",
    normalName: "ए की मात्रा (E Matra)",
    normalCategory: "matra",
    shift: "ए",
    shiftName: "स्वर ए (Vowel E)",
    shiftCategory: "vowel",
    examplesNormal: ["केला", "मेला", "रेल", "खेल", "तेल", "बेल"],
    examplesShift: ["एक", "एकता", "एशिया", "एड़ी"]
  },
  {
    code: "KeyD",
    englishKey: "D",
    normal: "्",
    normalName: "हलंत (Halant / Virama - Half Letter)",
    normalCategory: "special",
    shift: "अ",
    shiftName: "स्वर अ (Vowel A)",
    shiftCategory: "vowel",
    examplesNormal: ["विद्या", "पुस्तक", "सच्चा", "अध्यापक", "स्वागत"],
    examplesShift: ["अनार", "अमर", "अध्यापक", "अध्ययन", "अमृत"]
  },
  {
    code: "KeyF",
    englishKey: "F",
    normal: "ि",
    normalName: "इ की मात्रा - छोटी इ (Chhoti I Matra)",
    normalCategory: "matra",
    shift: "इ",
    shiftName: "स्वर इ - छोटी इ (Vowel I)",
    shiftCategory: "vowel",
    examplesNormal: ["दिन", "गिन", "पिन", "रवि", "कवि", "किला", "किताब"],
    examplesShift: ["इमली", "इनाम", "इमारत", "इलाका", "इतिहास"]
  },
  {
    code: "KeyG",
    englishKey: "G",
    normal: "ु",
    normalName: "उ की मात्रा - छोटा उ (Chhota U Matra)",
    normalCategory: "matra",
    shift: "उ",
    shiftName: "स्वर उ - छोटा उ (Vowel U)",
    shiftCategory: "vowel",
    examplesNormal: ["पुल", "कुल", "धुल", "मुख", "सुख", "गुलाब"],
    examplesShift: ["उल्लू", "उपहार", "उम्मीद", "उजाला"]
  },
  {
    code: "KeyH",
    englishKey: "H",
    normal: "प",
    normalName: "व्यंजन प (Consonant Pa)",
    normalCategory: "consonant",
    shift: "फ",
    shiftName: "व्यंजन फ (Consonant Pha)",
    shiftCategory: "consonant",
    examplesNormal: ["पानी", "पेड़", "पवन", "पतंग", "परिवार"],
    examplesShift: ["फूल", "फल", "फसल", "फौज", "फ़िल्म"]
  },
  {
    code: "KeyJ",
    englishKey: "J",
    normal: "र",
    normalName: "व्यंजन र (Consonant Ra)",
    normalCategory: "consonant",
    shift: "ऱ",
    shiftName: "व्यंजन ऱ (Nukta Ra)",
    shiftCategory: "consonant",
    examplesNormal: ["रात", "रास्ता", "रोटी", "राम", "राजा"],
    examplesShift: ["ऱ (द्रविड़/मराठी ध्वनि)"]
  },
  {
    code: "KeyK",
    englishKey: "K",
    normal: "क",
    normalName: "व्यंजन क (Consonant Ka)",
    normalCategory: "consonant",
    shift: "ख",
    shiftName: "व्यंजन ख (Consonant Kha)",
    shiftCategory: "consonant",
    examplesNormal: ["कमल", "कलम", "किताब", "कंप्यूटर", "काम"],
    examplesShift: ["खाना", "खेल", "खिलौना", "खेत", "खिड़की"]
  },
  {
    code: "KeyL",
    englishKey: "L",
    normal: "त",
    normalName: "व्यंजन त (Consonant Ta)",
    normalCategory: "consonant",
    shift: "थ",
    shiftName: "व्यंजन थ (Consonant Tha)",
    shiftCategory: "consonant",
    examplesNormal: ["तारा", "तालाब", "तितली", "तरबूज", "तीर"],
    examplesShift: ["थाली", "थैला", "थकावट", "थोड़ा", "स्थल"]
  },
  {
    code: "Semicolon",
    englishKey: ";",
    normal: "च",
    normalName: "व्यंजन च (Consonant Cha)",
    normalCategory: "consonant",
    shift: "छ",
    shiftName: "व्यंजन छ (Consonant Chha)",
    shiftCategory: "consonant",
    examplesNormal: ["चाँद", "चमक", "चाबी", "चम्मच", "चाचा"],
    examplesShift: ["छाता", "छत", "छोटा", "छात्रा", "छाया"]
  },
  {
    code: "Quote",
    englishKey: "'",
    normal: "ट",
    normalName: "व्यंजन ट (Consonant Tta)",
    normalCategory: "consonant",
    shift: "ठ",
    shiftName: "व्यंजन ठ (Consonant Ttha)",
    shiftCategory: "consonant",
    examplesNormal: ["टमाटर", "टोकरी", "टोपी", "टब", "ट्रेन"],
    examplesShift: ["ठंड", "ठठेरा", "ठोस", "ठहराव"]
  },

  // Bottom Row (ZXCV)
  {
    code: "KeyX",
    englishKey: "X",
    normal: "ं",
    normalName: "अनुस्वार (Anusvara Bindi)",
    normalCategory: "matra",
    shift: "ँ",
    shiftName: "चन्द्रबिन्दु (Chandrabindu)",
    shiftCategory: "matra",
    examplesNormal: ["हंस", "पंख", "रंग", "जंग", "गंगा", "अंगूर"],
    examplesShift: ["आँख", "चाँद", "गाँव", "पाँव", "दाँत", "माँ"]
  },
  {
    code: "KeyC",
    englishKey: "C",
    normal: "म",
    normalName: "व्यंजन म (Consonant Ma)",
    normalCategory: "consonant",
    shift: "ण",
    shiftName: "व्यंजन ण (Consonant Nna)",
    shiftCategory: "consonant",
    examplesNormal: ["माता", "मित्र", "महल", "मटर", "मौसम"],
    examplesShift: ["बाण", "चरण", "प्रणाम", "कारण", "गणित"]
  },
  {
    code: "KeyV",
    englishKey: "V",
    normal: "न",
    normalName: "व्यंजन न (Consonant Na)",
    normalCategory: "consonant",
    shift: "ऩ",
    shiftName: "व्यंजन ऩ (Nukta Na)",
    shiftCategory: "consonant",
    examplesNormal: ["नल", "नदी", "नगर", "नाम", "नमस्ते"],
    examplesShift: ["ऩ (विशिष्ट ध्वनि)"]
  },
  {
    code: "KeyB",
    englishKey: "B",
    normal: "व",
    normalName: "व्यंजन व (Consonant Va)",
    normalCategory: "consonant",
    shift: "ऴ",
    shiftName: "व्यंजन ऴ (Zha / Dravidian)",
    shiftCategory: "consonant",
    examplesNormal: ["वन", "विकास", "विद्यालय", "वर्षा", "वायु"],
    examplesShift: ["ऴ"]
  },
  {
    code: "KeyN",
    englishKey: "N",
    normal: "ल",
    normalName: "व्यंजन ल (Consonant La)",
    normalCategory: "consonant",
    shift: "ळ",
    shiftName: "व्यंजन ळ (Consonant Lla - Marathi/Sanskrit)",
    shiftCategory: "consonant",
    examplesNormal: ["लाल", "लड़की", "लोहा", "लोग", "लहर"],
    examplesShift: ["बाळ", "टिळक", "मेळा"]
  },
  {
    code: "KeyM",
    englishKey: "M",
    normal: "स",
    normalName: "व्यंजन स - दन्त्य स (Consonant Sa)",
    normalCategory: "consonant",
    shift: "श",
    shiftName: "व्यंजन श - तालव्य श (Consonant Sha)",
    shiftCategory: "consonant",
    examplesNormal: ["सूरज", "सपना", "सड़क", "सरकार", "समय"],
    examplesShift: ["शिक्षा", "शहर", "शांति", "शेर", "शाम"]
  },
  {
    code: "Comma",
    englishKey: ",",
    normal: ",",
    normalName: "अल्पविराम (Comma)",
    normalCategory: "symbol",
    shift: "ष",
    shiftName: "व्यंजन ष - मूर्धन्य ष (Consonant Ssha)",
    shiftCategory: "consonant",
    examplesNormal: ["आम, सेब, केला"],
    examplesShift: ["भाषा", "धनुष", "ऋषि", "विशेष", "पुरुष"]
  },
  {
    code: "Period",
    englishKey: ".",
    normal: "।",
    normalName: "पूर्णविराम (Hindi Full Stop Purna Viram)",
    normalCategory: "symbol",
    shift: "श्र",
    shiftName: "संयुक्त वर्ण श्र (Shr = श् + र)",
    shiftCategory: "consonant",
    examplesNormal: ["भारत हमारा देश है।", "शिक्षा जरूरी है।"],
    examplesShift: ["श्रीमान", "श्रीमती", "श्रम", "श्रद्धा", "आश्रम"]
  },
  {
    code: "Slash",
    englishKey: "/",
    normal: "य",
    normalName: "व्यंजन य (Consonant Ya)",
    normalCategory: "consonant",
    shift: "य़",
    shiftName: "व्यंजन य़ (Nukta Ya)",
    shiftCategory: "consonant",
    examplesNormal: ["यज्ञ", "यात्रा", "याद", "युवा", "योग"],
    examplesShift: ["य़"]
  }
];

export interface KeyboardQuizQuestion {
  id: number;
  question: string;
  charTarget: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  requiresShift: boolean;
}

export const KEYBOARD_QUIZ_QUESTIONS: KeyboardQuizQuestion[] = [
  {
    id: 1,
    question: "Which English key types the Hindi consonant 'क'?",
    charTarget: "क",
    options: ["K", "J", "L", "H"],
    correctAnswer: "K",
    explanation: "In Hindi InScript, pressing 'K' types 'क'. (Shift+K types 'ख')",
    requiresShift: false
  },
  {
    id: 2,
    question: "Which key combination types the aspirated consonant 'भ'?",
    charTarget: "भ",
    options: ["Shift + Y", "Y", "Shift + B", "B"],
    correctAnswer: "Shift + Y",
    explanation: "'Y' types 'ब', while 'Shift + Y' types 'भ'.",
    requiresShift: true
  },
  {
    id: 3,
    question: "Which key produces the Hindi Halant (्) to create half letters?",
    charTarget: "्",
    options: ["D", "F", "G", "S"],
    correctAnswer: "D",
    explanation: "'D' types the Halant (्). Example: क + ् + त = क्त.",
    requiresShift: false
  },
  {
    id: 4,
    question: "Which key types the 'आ' ki matra (ा)?",
    charTarget: "ा",
    options: ["E", "A", "S", "W"],
    correctAnswer: "E",
    explanation: "'E' types 'ा'. Example: क + E = का.",
    requiresShift: false
  },
  {
    id: 5,
    question: "Which key combination types the independent vowel 'आ'?",
    charTarget: "आ",
    options: ["Shift + E", "E", "Shift + A", "Shift + D"],
    correctAnswer: "Shift + E",
    explanation: "'E' produces the matra 'ा', while 'Shift + E' produces the independent vowel 'आ'.",
    requiresShift: true
  },
  {
    id: 6,
    question: "Which key types the Hindi full stop Purna Viram (।)?",
    charTarget: "।",
    options: [". (Period)", "Shift + .", ", (Comma)", "/ (Slash)"],
    correctAnswer: ". (Period)",
    explanation: "Pressing '.' (Period) types the Hindi Purna Viram (।).",
    requiresShift: false
  },
  {
    id: 7,
    question: "Which key types the talavya 'श' (Sha)?",
    charTarget: "श",
    options: ["Shift + M", "M", "Shift + ,", "Shift + S"],
    correctAnswer: "Shift + M",
    explanation: "'M' types 'स', while 'Shift + M' types 'श'.",
    requiresShift: true
  },
  {
    id: 8,
    question: "Which key produces the Anusvara bindi (ं)?",
    charTarget: "ं",
    options: ["X", "Shift + X", "Z", "C"],
    correctAnswer: "X",
    explanation: "'X' produces 'ं' (Anusvara), while 'Shift + X' produces 'ँ' (Chandrabindu).",
    requiresShift: false
  },
  {
    id: 9,
    question: "Which key combination produces 'ध' (Dha)?",
    charTarget: "ध",
    options: ["Shift + O", "O", "Shift + I", "Shift + P"],
    correctAnswer: "Shift + O",
    explanation: "'O' types 'द', while 'Shift + O' types 'ध'.",
    requiresShift: true
  },
  {
    id: 10,
    question: "Which key types the short vowel matra 'ि' (Chhoti I)?",
    charTarget: "ि",
    options: ["F", "R", "G", "S"],
    correctAnswer: "F",
    explanation: "'F' types 'ि' (Chhoti I Matra), while 'R' types 'ी' (Badi II Matra).",
    requiresShift: false
  }
];
