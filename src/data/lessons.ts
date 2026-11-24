export interface Lesson {
  id: number;
  title: string;
  description: string;
  characters: string[];
  practiceWords: string[];
  drillText?: string;
}

// 1. Hindi Lessons (Preserved as primary original curriculum)
export const hindiLessons: Lesson[] = [
  {
    id: 1,
    title: "Vowels (स्वर)",
    description: "Learn the primary Hindi vowels. These characters are located on the left side of the InScript keyboard.",
    characters: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
    practiceWords: ["आम", "इमली", "ऊँट", "एक", "ओस", "औरत", "अंगूर"],
    drillText: "आम इमली ऊँट एक ओस औरत अंगूर",
  },
  {
    id: 2,
    title: "Consonants - Part 1 (व्यंजन क से ण)",
    description: "Learn Hindi consonants from क to ण. These characters are located on the right side of the InScript keyboard.",
    characters: ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण"],
    practiceWords: ["कमल", "खरगोश", "गमला", "घर", "चमक", "जल", "टमाटर"],
    drillText: "कमल खरगोश गमला घर चमक जल टमाटर",
  },
  {
    id: 3,
    title: "Consonants - Part 2 (व्यंजन त से ह)",
    description: "Learn Hindi consonants from त to ह.",
    characters: ["त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"],
    practiceWords: ["तरबूज", "नमक", "पानी", "बादल", "महल", "रास्ता", "सपना", "हवा"],
    drillText: "तरबूज नमक पानी बादल महल रास्ता सपना हवा",
  },
  {
    id: 4,
    title: "Matras (मात्राएं)",
    description: "Practice vowel diacritics (matras) that attach to consonants to form words.",
    characters: ["ा", "ि", "ी", "ु", "ू", "े", "ै", "ो", "ौ", "ृ", "ं", "ँ", "ः"],
    practiceWords: ["काम", "किताब", "कीमत", "कुल", "कूद", "केला", "कैसा", "कोई", "कौन"],
    drillText: "काम किताब कीमत कुल कूद केला कैसा कोई कौन",
  },
  {
    id: 5,
    title: "Conjuncts & Halant (संयुक्त अक्षर व हलंत)",
    description: "Learn to form conjunct (half) letters by using the halant (्) key.",
    characters: ["क्", "त्", "प्", "स्", "न्", "म्"],
    practiceWords: ["प्रकाश", "स्वतंत्रता", "विद्यालय", "कर्मचारी", "संस्कृति", "अध्ययन", "परीक्षा"],
    drillText: "प्रकाश स्वतंत्रता विद्यालय कर्मचारी संस्कृति अध्ययन परीक्षा",
  },
  {
    id: 6,
    title: "Common Sentences (दैनिक वाक्य अभ्यास)",
    description: "Practice common daily sentences. This will help build your overall Hindi typing speed and sentence flow.",
    characters: [],
    practiceWords: [
      "मेरा नाम हिंदी है।",
      "भारत मेरा देश है।",
      "आज मौसम अच्छा है।",
      "कृपया यहाँ बैठिए।",
      "आपका धन्यवाद।",
    ],
    drillText: "मेरा नाम हिंदी है। भारत मेरा देश है। आज मौसम अच्छा है। कृपया यहाँ बैठिए। आपका धन्यवाद।",
  },
];

// Preserving legacy export for backward compatibility
export const lessons: Lesson[] = hindiLessons;

// 2. English Lessons (10 Comprehensive Modules matching Section 4)
export const englishLessons: Lesson[] = [
  {
    id: 1,
    title: "Keyboard Basics & QWERTY Home Row",
    description: "Learn the foundation of touch typing on the standard QWERTY layout. Rest your fingers naturally on the home row keys.",
    characters: ["a", "s", "d", "f", "j", "k", "l", ";"],
    practiceWords: ["as", "all", "ask", "fall", "flask", "lad", "lass", "fad"],
    drillText: "as all ask fall flask lad lass fad",
  },
  {
    id: 2,
    title: "Home Row Finger Placement & Tactile Bumps",
    description: "Use the tactile raised bumps on the F and J keys to anchor your index fingers. Reach G and H with your left and right index fingers.",
    characters: ["f", "j", "g", "h", "d", "k", "s", "l"],
    practiceWords: ["glad", "half", "flash", "hall", "flag", "dash", "gash"],
    drillText: "glad half flash hall flag dash gash",
  },
  {
    id: 3,
    title: "Upper Row Keys (Q W E R T Y U I O P)",
    description: "Reach upward from home row with specific fingers to master the top row letters without shifting your palms.",
    characters: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    practiceWords: ["tree", "port", "wire", "type", "quit", "route", "power", "write"],
    drillText: "tree port wire type quit route power write",
  },
  {
    id: 4,
    title: "Lower Row Keys (Z X C V B N M)",
    description: "Reach downward from home row with your fingers. Always return fingers immediately to home position after each keystroke.",
    characters: ["z", "x", "c", "v", "b", "n", "m", ",", "."],
    practiceWords: ["zone", "calm", "move", "next", "bank", "verb", "exam", "view"],
    drillText: "zone calm move next bank verb exam view",
  },
  {
    id: 5,
    title: "Shift Key & Capital Letters",
    description: "Master opposite-hand Shift technique: use your left pinky for right-hand capitals, and right pinky for left-hand capitals.",
    characters: ["A", "S", "D", "F", "J", "K", "L", "T", "I", "W"],
    practiceWords: ["India", "Delhi", "Mumbai", "London", "Tokyo", "Paris", "New York"],
    drillText: "India Delhi Mumbai London Tokyo Paris New York",
  },
  {
    id: 6,
    title: "Numbers & Common Punctuation",
    description: "Develop muscle memory for the number row (1-0) and frequently tested punctuation marks in government clerk tests.",
    characters: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "@", "#", "$", "%"],
    practiceWords: ["item 1", "page 25", "100%", "room 304", "order #45", "test 99"],
    drillText: "item 1 page 25 100% room 304 order #45 test 99",
  },
  {
    id: 7,
    title: "High-Frequency English Vocabulary",
    description: "Practice the most frequent English words that form over fifty percent of common clerical typing tests.",
    characters: [],
    practiceWords: ["the", "and", "that", "have", "with", "this", "from", "they", "word", "what"],
    drillText: "the and that have with this from they word what",
  },
  {
    id: 8,
    title: "Sentence Practice & Natural Grammar",
    description: "Train continuous cadence across capitalization, spacing, commas, and periods in complete grammatical sentences.",
    characters: [],
    practiceWords: [
      "Practice creates permanent muscle memory.",
      "Keep your wrists straight and relaxed.",
      "Touch typing saves hours of daily computer work."
    ],
    drillText: "Practice creates permanent muscle memory. Keep your wrists straight and relaxed. Touch typing saves hours of daily computer work.",
  },
  {
    id: 9,
    title: "Continuous Paragraph Practice",
    description: "Sustain steady typing rhythm without hesitations across multiple sentence boundaries.",
    characters: [],
    practiceWords: [
      "Touch typing is the ability to type without looking at the keyboard.",
      "Regular daily drills build confident muscle coordination and double your output."
    ],
    drillText: "Touch typing is the ability to type without looking at the keyboard. Regular daily drills build confident muscle coordination and double your output.",
  },
  {
    id: 10,
    title: "Speed & Accuracy Challenge (35+ WPM)",
    description: "Final exam-style sprint designed to test stamina, rhythm, and accuracy above government benchmark standards.",
    characters: [],
    practiceWords: [
      "Clerical recruitment examinations require high speed combined with ninety-five percent accuracy.",
      "Consistent practice guarantees your ultimate examination success."
    ],
    drillText: "Clerical recruitment examinations require high speed combined with ninety-five percent accuracy. Consistent practice guarantees your ultimate examination success.",
  },
];

// 3. Marathi Lessons (8 Modules with ळ, Anusvara & Conjuncts)
export const marathiLessons: Lesson[] = [
  {
    id: 1,
    title: "मराठी स्वर (Devanagari Vowels in Marathi)",
    description: "मराठी भाषेतील मूलभूत स्वरांचा सराव करा. हे स्वर इनस्क्रिप्ट कीबोर्डवर डाव्या बाजूला स्थित आहेत.",
    characters: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
    practiceWords: ["आई", "एक", "ऋषी", "ओढ", "औषध", "अंगण", "आकाश"],
    drillText: "आई एक ऋषी ओढ औषध अंगण आकाश",
  },
  {
    id: 2,
    title: "व्यंजन - भाग १ (Consonants क ते ण)",
    description: "क वर्ग, च वर्ग आणि ट वर्गातील व्यंजनांचा अचूक सराव करा. ही व्यंजने कीबोर्डच्या उजव्या बाजूला आहेत.",
    characters: ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण"],
    practiceWords: ["कमळ", "खडू", "गणपती", "घर", "चमचा", "झाड", "टोपी"],
    drillText: "कमळ खडू गणपती घर चमचा झाड टोपी",
  },
  {
    id: 3,
    title: "व्यंजन - भाग २ (Consonants त ते ह)",
    description: "त वर्ग, प वर्ग आणि अंतस्थ-उष्म व्यंजनांचा सराव करा.",
    characters: ["त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"],
    practiceWords: ["तलाव", "दगड", "नदी", "पाणी", "भारत", "मदत", "वजन", "ससा"],
    drillText: "तलाव दगड नदी पाणी भारत मदत वजन ससा",
  },
  {
    id: 4,
    title: "मराठी विशेष वर्ण 'ळ' आणि अनुस्वार (Retroflex ळ & Anusvara)",
    description: "मराठीतील स्वतंत्र वर्ण 'ळ' (L key in Marathi InScript) आणि अनुस्वाराचा सराव करा.",
    characters: ["ळ", "ं", "ँ", "ः"],
    practiceWords: ["बाळ", "कमळ", "गोडबोले", "सकाळ", "खेळ", "सुंदर", "आनंद", "संसार"],
    drillText: "बाळ कमळ गोडबोले सकाळ खेळ सुंदर आनंद संसार",
  },
  {
    id: 5,
    title: "मात्रा (Vowel Signs / Matras)",
    description: "व्यंजनांना जोडल्या जाणाऱ्या मराठी मात्रांचा वेगवान सराव करा.",
    characters: ["ा", "ि", "ी", "ु", "ू", "े", "ै", "ो", "ौ"],
    practiceWords: ["काम", "मित्र", "किंमत", "सुरू", "देव", "पैसा", "गोपाळ", "मौज"],
    drillText: "काम मित्र किंमत सुरू देव पैसा गोपाळ मौज",
  },
  {
    id: 6,
    title: "जोडाक्षरे व हलंत (Marathi Conjuncts & Halant)",
    description: "हलंत (् - D key) च्या सहाय्याने जोडाक्षरे तयार करण्याचे तंत्र शिका.",
    characters: ["क्", "त्", "प्र", "स्त", "ष्ट", "द्व", "त्र", "श्र"],
    practiceWords: ["महाराष्ट्र", "पुस्तकालय", "विद्यार्थी", "सत्य", "प्रगती", "कर्मचारी"],
    drillText: "महाराष्ट्र पुस्तकालय विद्यार्थी सत्य प्रगती कर्मचारी",
  },
  {
    id: 7,
    title: "दैनिक मराठी शब्द (Essential Vocabulary)",
    description: "कार्यालयीन व स्पर्धा परीक्षेत वारंवार विचारल्या जाणाऱ्या मराठी शब्दांचा सराव करा.",
    characters: [],
    practiceWords: ["नमस्कार", "महाराष्ट्र", "अभ्यास", "भाषा", "शिक्षण", "ज्ञान", "संस्कृती", "परिश्रम"],
    drillText: "नमस्कार महाराष्ट्र अभ्यास भाषा शिक्षण ज्ञान संस्कृती परिश्रम",
  },
  {
    id: 8,
    title: "वाक्य सराव (Marathi Sentence Practice)",
    description: "एमपीएससी लिपिक-टंकलेखक परीक्षेच्या धर्तीवर पूर्ण वाक्यांचा वेगवान सराव करा.",
    characters: [],
    practiceWords: [
      "मराठी माझी मातृभाषा आहे.",
      "दररोज टायपिंगचा सराव केल्याने गती वाढते.",
      "एमपीएससी लिपिक परीक्षेसाठी अचूकता अत्यंत महत्त्वाची आहे."
    ],
    drillText: "मराठी माझी मातृभाषा आहे. दररोज टायपिंगचा सराव केल्याने गती वाढते. एमपीएससी लिपिक परीक्षेसाठी अचूकता अत्यंत महत्त्वाची आहे.",
  },
];

// 4. Punjabi Lessons (8 Modules with Gurmukhi Vowels, Tippi, Bindi, Addak)
export const punjabiLessons: Lesson[] = [
  {
    id: 1,
    title: "ਸਵਰ ਅਤੇ ਸਵਰ ਵਾਹਕ (Gurmukhi Vowel Carriers & Vowels)",
    description: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੇ ਤਿੰਨ ਸਵਰ ਵਾਹਕ (ੳ, ਅ, ੲ) ਅਤੇ ਸੁਤੰਤਰ ਸਵਰਾਂ ਦੀ ਪਛਾਣ ਅਤੇ ਅਭਿਆਸ ਕਰੋ।",
    characters: ["ੳ", "ਅ", "ੲ", "ਆ", "ਇ", "ਈ", "ਉ", "ਊ", "ਏ", "ਐ", "ਓ", "ਔ"],
    practiceWords: ["ਆਮ", "ਇਕ", "ਉੱਠ", "ਓਟ", "ਔਰਤ", "ਅੰਬ"],
    drillText: "ਆਮ ਇਕ ਉੱਠ ਓਟ ਔਰਤ ਅੰਬ",
  },
  {
    id: 2,
    title: "ਵਿਅੰਜਨ - ਭਾਗ ੧ (Consonants ਕ ਤੋਂ ਞ)",
    description: "ਗੁਰਮੁਖੀ ਕੰਠੀ ਅਤੇ ਤਾਲਵੀ ਵਰਗ ਦੇ ਵਿਅੰਜਨਾਂ ਦਾ ਸਹੀ ਉਂਗਲਾਂ ਨਾਲ ਅਭਿਆਸ ਕਰੋ।",
    characters: ["ਕ", "ਖ", "ਗ", "ਘ", "ਙ", "ਚ", "ਛ", "ਜ", "ਝ", "ਞ"],
    practiceWords: ["ਕਲਮ", "ਖੇਤ", "ਗਾਣਾ", "ਘਰ", "ਚੰਗਾ", "ਜਲ"],
    drillText: "ਕਲਮ ਖੇਤ ਗਾਣਾ ਘਰ ਚੰਗਾ ਜਲ",
  },
  {
    id: 3,
    title: "ਵਿਅੰਜਨ - ਭਾਗ ੨ (Consonants ਟ ਤੋਂ ੜ)",
    description: "ਮੂਰਧਨੀ, ਦੰਤੀ ਅਤੇ ਹੋਠੀ ਵਿਅੰਜਨਾਂ ਦਾ ਕੀਬੋਰਡ 'ਤੇ ਅਭਿਆਸ ਕਰੋ।",
    characters: ["ਟ", "ਠ", "ਡ", "ਢ", "ਣ", "ਤ", "ਥ", "ਦ", "ਧ", "ਨ", "ਪ", "ਫ", "ਬ", "ਭ", "ਮ", "ਯ", "ਰ", "ਲ", "ਵ", "ੜ", "ਸ", "ਹ"],
    practiceWords: ["ਟਮਾਟਰ", "ਥਾਲੀ", "ਦਰਵਾਜ਼ਾ", "ਨਗਰ", "ਪਾਣੀ", "ਬਾਗ", "ਮੋਰ", "ਸੱਚ"],
    drillText: "ਟਮਾਟਰ ਥਾਲੀ ਦਰਵਾਜ਼ਾ ਨਗਰ ਪਾਣੀ ਬਾਗ ਮੋਰ ਸੱਚ",
  },
  {
    id: 4,
    title: "ਲਗਾਂ ਮਾਤਰਾਂ (Gurmukhi Laga Matra)",
    description: "ਕੰਨਾ, ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਅਤੇ ਕਨੌੜਾ ਦਾ ਅਭਿਆਸ।",
    characters: ["ਾ", "ਿ", "ੀ", "ੁ", "ੂ", "ੇ", "ੈ", "ੋ", "ੌ"],
    practiceWords: ["ਕੰਮ", "ਦਿਨ", "ਤੀਰ", "ਪੁਲ", "ਸੂਰਜ", "ਸੇਬ", "ਸੈਰ", "ਮੋਰ", "ਫੌਜ"],
    drillText: "ਕੰਮ ਦਿਨ ਤੀਰ ਪੁਲ ਸੂਰਜ ਸੇਬ ਸੈਰ ਮੋਰ ਫੌਜ",
  },
  {
    id: 5,
    title: "ਟਿੱਪੀ, ਬਿੰਦੀ ਅਤੇ ਅੱਧਕ (Tippi, Bindi & Addak)",
    description: "ਨੱਕ ਰਾਹੀਂ ਆਵਾਜ਼ ਲਈ ਟਿੱਪੀ/ਬਿੰਦੀ ਅਤੇ ਦੂਹਰੀ ਆਵਾਜ਼ ਲਈ ਅੱਧਕ (Shift+X) ਦਾ ਪ੍ਰਯੋਗ ਸਿੱਖੋ।",
    characters: ["ੰ", "ਂ", "ੱ"],
    practiceWords: ["ਪੰਜਾਬ", "ਗਾਂ", "ਮਾਂ", "ਸੱਜਣ", "ਹੱਥ", "ਬੱਚਾ", "ਕੁੱਤਾ"],
    drillText: "ਪੰਜਾਬ ਗਾਂ ਮਾਂ ਸੱਜਣ ਹੱਥ ਬੱਚਾ ਕੁੱਤਾ",
  },
  {
    id: 6,
    title: "ਪੈਰੀਂ ਅੱਖਰ (Subjoined Characters: ਰ, ਹ, ਵ)",
    description: "ਹਲੰਤ (D key) ਦੁਆਰਾ ਪੈਰ ਵਿਚ ਪੈਣ ਵਾਲੇ ਅੱਖਰਾਂ (ਪ੍ਰ, ਗ੍ਰ, ਪੜ੍ਹਾਈ) ਦਾ ਅਭਿਆਸ ਕਰੋ।",
    characters: ["੍ਹ", "੍ਰ", "੍ਵ"],
    practiceWords: ["ਪ੍ਰਕਾਸ਼", "ਗ੍ਰੰਥ", "ਪੜ੍ਹਾਈ", "ਸ੍ਵੈਮਾਨ", "ਪ੍ਰੇਮ", "ਜੜ੍ਹ"],
    drillText: "ਪ੍ਰਕਾਸ਼ ਗ੍ਰੰਥ ਪੜ੍ਹਾਈ ਸ੍ਵੈਮਾਨ ਪ੍ਰੇਮ ਜੜ੍ਹ",
  },
  {
    id: 7,
    title: "ਆਮ ਪੰਜਾਬੀ ਸ਼ਬਦ (Essential Vocabulary)",
    description: "ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਕਲਰਕ ਪਰੀਖਿਆਵਾਂ ਵਿਚ ਪੁੱਛੇ ਜਾਂਦੇ ਆਮ ਸ਼ਬਦ।",
    characters: [],
    practiceWords: ["ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", "ਪੰਜਾਬ", "ਕਿਤਾਬ", "ਮਿਹਨਤ", "ਤਰੱਕੀ", "ਦੋਸਤ", "ਸਕੂਲ"],
    drillText: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਪੰਜਾਬ ਕਿਤਾਬ ਮਿਹਨਤ ਤਰੱਕੀ ਦੋਸਤ ਸਕੂਲ",
  },
  {
    id: 8,
    title: "ਵਾਕ ਅਭਿਆਸ (Gurmukhi Sentence Practice)",
    description: "PSSSB ਕਲਰਕ ਅਤੇ ਸਟੈਨੋ ਟਾਈਪਿੰਗ ਪਰੀਖਿਆ ਲਈ ਪੂਰੇ ਵਾਕਾਂ ਦਾ ਗਤੀ ਅਭਿਆਸ।",
    characters: [],
    practiceWords: [
      "ਪੰਜਾਬੀ ਮੇਰੀ ਮਾਂ ਬੋਲੀ ਹੈ।",
      "ਰੋਜ਼ਾਨਾ ਟਾਈਪਿੰਗ ਅਭਿਆਸ ਨਾਲ ਗਤੀ ਵਧਦੀ ਹੈ।",
      "ਪੀਐਸਐਸਐਸਬੀ ਕਲਰਕ ਪਰੀਖਿਆ ਲਈ ਮਿਹਨਤ ਕਰੋ।"
    ],
    drillText: "ਪੰਜਾਬੀ ਮੇਰੀ ਮਾਂ ਬੋਲੀ ਹੈ। ਰੋਜ਼ਾਨਾ ਟਾਈਪਿੰਗ ਅਭਿਆਸ ਨਾਲ ਗਤੀ ਵਧਦੀ ਹੈ। ਪੀਐਸਐਸਐਸਬੀ ਕਲਰਕ ਪਰੀਖਿਆ ਲਈ ਮਿਹਨਤ ਕਰੋ।",
  },
];

// 5. Tamil Lessons (7 Modules with Vowels, Consonants, Pulli, Grantha)
export const tamilLessons: Lesson[] = [
  {
    id: 1,
    title: "உயிர் எழுத்துகள் (Tamil Vowels)",
    description: "தமிழ் மொழியின் 12 உயிர் எழுத்துகள் மற்றும் ஆய்த எழுத்தை இன்ஸ்கிரிப்ட் விசைப்பலகையில் பயிலுங்கள்.",
    characters: ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ", "ஃ"],
    practiceWords: ["அம்மா", "ஆடு", "இலை", "ஈட்டி", "உரல்", "ஊசி", "எலி", "ஏணி", "ஐந்து"],
    drillText: "அம்மா ஆடு இலை ஈட்டி உரல் ஊசி எலி ஏணி ஐந்து",
  },
  {
    id: 2,
    title: "மெய் எழுத்துகள் (Tamil Consonants)",
    description: "க முதல் ன வரையிலான 18 மெய் எழுத்துகளை சரியான விரல் அமைப்பில் தட்டச்சு செய்யுங்கள்.",
    characters: ["க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ப", "ம", "ய", "ர", "ல", "வ", "ழ", "ள", "ற", "ன"],
    practiceWords: ["கண்", "சட்டம்", "தண்ணீர்", "படம்", "மலர்", "வானம்", "தமிழ்"],
    drillText: "கண் சட்டம் தண்ணீர் படம் மலர் வானம் தமிழ்",
  },
  {
    id: 3,
    title: "புள்ளி மற்றும் மெய் வடிவம் (Pulli Sign ்)",
    description: "புள்ளி (் - D key) சேர்த்து தூய மெய் எழுத்துகளை உருவாக்கும் முறை.",
    characters: ["க்", "ச்", "ட்", "த்", "ப்", "ற்", "ண்", "ந்", "ம்"],
    practiceWords: ["பக்கம்", "அச்சம்", "பட்டம்", "முத்து", "கப்பல்", "வெற்றி", "அன்பு"],
    drillText: "பக்கம் அச்சம் பட்டம் முத்து கப்பல் வெற்றி அன்பு",
  },
  {
    id: 4,
    title: "உயிர்மெய் குறியீடுகள் (Tamil Vowel Signs)",
    description: "துணைக்கால், கொம்பு, சுழி போன்ற உயிர்மெய் குறியீடுகளின் தட்டச்சு பயிற்சி.",
    characters: ["ா", "ி", "ீ", "ு", "ூ", "ெ", "ே", "ை", "ொ", "ோ", "ௌ"],
    practiceWords: ["காடு", "கிளி", "கீரி", "குடை", "கூடு", "கெண்டை", "கேள்வி", "கை", "கொடி"],
    drillText: "காடு கிளி கீரி குடை கூடு கெண்டை கேள்வி கை கொடி",
  },
  {
    id: 5,
    title: "கிரந்த எழுத்துகள் (Grantha Letters)",
    description: "பிறமொழிச் சொற்களை எழுத பயன்படும் ஜ, ஷ, ஸ, ஹ, க்ஷ எழுத்துகள்.",
    characters: ["ஜ", "ஷ", "ஸ", "ஹ", "க்ஷ", "ஸ்ரீ"],
    practiceWords: ["ரோஜா", "வருஷம்", "புஸ்தகம்", "ஹிந்தி", "லக்ஷ்மி", "ஸ்ரீராம்"],
    drillText: "ரோஜா வருஷம் புஸ்தகம் ஹிந்தி லக்ஷ்மி ஸ்ரீராம்",
  },
  {
    id: 6,
    title: "பொதுவான தமிழ் சொற்கள் (Common Vocabulary)",
    description: "அரசு தேர்வுகளுக்கு தேவையான அடிக்கடி பயன்படும் தமிழ் சொற்கள்.",
    characters: [],
    practiceWords: ["வணக்கம்", "தமிழ்நாடு", "புத்தகம்", "நன்றி", "வெற்றி", "மகிழ்ச்சி", "கல்வி"],
    drillText: "வணக்கம் தமிழ்நாடு புத்தகம் நன்றி வெற்றி மகிழ்ச்சி கல்வி",
  },
  {
    id: 7,
    title: "வாக்கியப் பயிற்சி (Tamil Sentence Practice)",
    description: "TNPSC தட்டச்சு தேர்வில் அதிக வேகம் பெற முழு வாக்கியப் பயிற்சி.",
    characters: [],
    practiceWords: [
      "தமிழ் எங்கள் தாய்மொழி ஆகும்.",
      "தினமும் தட்டச்சு பயிற்சி செய்தால் வேகம் அதிகரிக்கும்.",
      "டிஎன்பிஎஸ்சி தேர்வில் வெற்றி பெற பயிற்சி அவசியம்."
    ],
    drillText: "தமிழ் எங்கள் தாய்மொழி ஆகும். தினமும் தட்டச்சு பயிற்சி செய்தால் வேகம் அதிகரிக்கும். டிஎன்பிஎஸ்சி தேர்வில் வெற்றி பெற பயிற்சி அவசியம்.",
  },
];

// 6. Bengali Lessons (8 Modules with Hasanta & Juktakkhara)
export const bengaliLessons: Lesson[] = [
  {
    id: 1,
    title: "স্বরবর্ণ (Bengali Vowels)",
    description: "বাংলা স্বরবর্ণগুলির সঠিক আঙুলের অবস্থান ও ইনস্ক্রিপ্ট কিবোর্ড ম্যাপিং শিখুন।",
    characters: ["অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "এ", "ঐ", "ও", "ঔ"],
    practiceWords: ["আম", "ইঁদুর", "উট", "ঋষি", "এক", "ঔষধ", "আকাশ"],
    drillText: "আম ইঁদুর উট ঋষি এক ঔষধ আকাশ",
  },
  {
    id: 2,
    title: "ব্যঞ্জনবর্ণ - পর্ব ১ (Consonants ক to ঞ)",
    description: "ক বর্গ ও চ বর্গের ব্যঞ্জনবর্ণগুলি ইনস্ক্রিপ্ট কিবোর্ডের ডান পাশে টাইপ করার অভ্যাস।",
    characters: ["ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ", "ঝ", "ঞ"],
    practiceWords: ["কলম", "খাতা", "গান", "ঘর", "চাঁদ", "জল", "ঝড়"],
    drillText: "কলম খাতা গান ঘর চাঁদ জল ঝড়",
  },
  {
    id: 3,
    title: "ব্যঞ্জনবর্ণ - পর্ব ২ (Consonants ট to হ, ড়, ঢ়, য়)",
    description: "ট বর্গ, ত বর্গ, প বর্গ এবং অন্তঃস্থ বর্ণের সঠিক টাইপিং ড্রিল।",
    characters: ["ট", "ঠ", "ড", "ঢ", "ণ", "ত", "থ", "দ", "ধ", "ন", "প", "ফ", "ব", "ভ", "ম", "য", "র", "ল", "শ", "ষ", "স", "হ", "ড়", "ঢ়", "য়"],
    practiceWords: ["টাকা", "থালা", "দেশ", "নদী", "পাখি", "ফুল", "বই", "মাটি", "সূর্য"],
    drillText: "টাকা থালা দেশ নদী পাখি ফুল বই মাটি সূর্য",
  },
  {
    id: 4,
    title: "স্বরচিহ্ন / কার (Bengali Vowel Signs)",
    description: "আ-কার, ই-কার, ঈ-কার সহ বিভিন্ন কার চিহ্নের নির্ভুল প্রয়োগ।",
    characters: ["া", "ি", "ী", "ু", "ূ", "ৃ", "ে", "ৈ", "ো", "ৌ"],
    practiceWords: ["কাজ", "দিন", "নদী", "ফুল", "দূর", "কৃষি", "দেশ", "সৈনিক", "লোক"],
    drillText: "কাজ দিন নদী ফুল দূর কৃষি দেশ সৈনিক লোক",
  },
  {
    id: 5,
    title: "হসন্ত ও যুক্তাক্ষর (Hasanta & Juktakkhara Conjuncts)",
    description: "হসন্ত (্ - D key) ব্যবহার করে যুক্তাক্ষর (ক্ত, ক্ষ, জ্ঞ, ত্র) টাইপ করার পদ্ধতি।",
    characters: ["্", "ক্ত", "ক্ষ", "জ্ঞ", "ত্র", "শ্র", "ন্ত", "ন্দ"],
    practiceWords: ["রক্ত", "শিক্ষা", "জ্ঞান", "ছাত্র", "শ্রবণ", "শান্তি", "আনন্দ"],
    drillText: "রক্ত শিক্ষা জ্ঞান ছাত্র শ্রবণ শান্তি আনন্দ",
  },
  {
    id: 6,
    title: "অনুস্বার, বিসর্গ ও চন্দ্রবিন্দু (Anusvara, Visarga, Chandrabindu)",
    description: "বাংলা নাসিক্য ধ্বনি ও বিশেষ চিহ্নের অনুশীলন।",
    characters: ["ং", "ঃ", "ঁ"],
    practiceWords: ["বাংলা", "রং", "দুঃখ", "চাঁদ", "বাঁশ", "হাঁস"],
    drillText: "বাংলা রং দুঃখ চাঁদ বাঁশ হাঁস",
  },
  {
    id: 7,
    title: "নিত্যপ্রয়োজনীয় বাংলা শব্দ (Essential Vocabulary)",
    description: "সরকারি ও প্রশাসনিক পরীক্ষায় সর্বাধিক ব্যবহৃত বাংলা শব্দভাণ্ডার।",
    characters: [],
    practiceWords: ["নমস্কার", "বাংলাদেশ", "কলকাতা", "বিদ্যালয়", "পরিশ্রম", "সাফল্য", "বন্ধু"],
    drillText: "নমস্কার বাংলাদেশ কলকাতা বিদ্যালয় পরিশ্রম সাফল্য বন্ধু",
  },
  {
    id: 8,
    title: "বাক্য অনুশীলন (Bengali Sentence Practice)",
    description: "WBPSC ক্লার্কশিপ ও স্টেনো পরীক্ষার জন্য সম্পূর্ণ বাক্যের টাইপিং ড্রিল।",
    characters: [],
    practiceWords: [
      "বাংলা আমাদের প্রিয় মাতৃভাষা।",
      "নিয়মিত টাইপিং অনুশীলন করলে গতি বৃদ্ধি পায়।",
      "সততা ও পরিশ্রম সাফল্যের চাবিকাঠি।"
    ],
    drillText: "বাংলা আমাদের প্রিয় মাতৃভাষা। নিয়মিত টাইপিং অনুশীলন করলে গতি বৃদ্ধি পায়। সততা ও পরিশ্রম সাফল্যের চাবিকাঠি।",
  },
];

// 7. Kannada Lessons (8 Modules with Gunitaakshara & Ottakshara)
export const kannadaLessons: Lesson[] = [
  {
    id: 1,
    title: "ಸ್ವರಗಳು (Kannada Vowels)",
    description: "ಕನ್ನಡ ಭಾಷೆಯ ಹದಿನೈದು ಸ್ವರಗಳ ಸರಿಯಾದ ಕೀಬೋರ್ಡ್ ಸ್ಥಾನ ಹಾಗೂ ಟೈಪಿಂಗ್ ಅಭ್ಯಾಸ.",
    characters: ["ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಋ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ", "ಅಂ", "ಅಃ"],
    practiceWords: ["ಅಮ್ಮ", "ಆನೆ", "ಇಲಿ", "ಈಜು", "ಊಟ", "ಋಷಿ", "ಎಲೆ", "ಏಣಿ", "ಒಂಟೆ", "ಔಷಧ"],
    drillText: "ಅಮ್ಮ ಆನೆ ಇಲಿ ಈಜು ಊಟ ಋಷಿ ಎಲೆ ಏಣಿ ಒಂಟೆ ಔಷಧ",
  },
  {
    id: 2,
    title: "ವ್ಯಂಜನಗಳು - ಭಾಗ ೧ (Consonants ಕ to ಞ)",
    description: "ಕ ವರ್ಗ ಹಾಗೂ ಚ ವರ್ಗದ ವ್ಯಂಜನಗಳನ್ನು ಸರಿಯಾದ ಬೆರಳುಗಳಿಂದ ಟೈಪ್ ಮಾಡುವ ವಿಧಾನ.",
    characters: ["ಕ", "ಖ", "ಗ", "ಘ", "ಙ", "ಚ", "ಛ", "ಜ", "ಝ", "ಞ"],
    practiceWords: ["ಕಮಲ", "ಖಡ್ಗ", "ಗಂಟೆ", "ಘಟ", "ಚಮಚ", "ಜೇನು", "ಝರಿ"],
    drillText: "ಕಮಲ ಖಡ್ಗ ಗಂಟೆ ಘಟ ಚಮಚ ಜೇನು ಝರಿ",
  },
  {
    id: 3,
    title: "ವ್ಯಂಜನಗಳು - ಭಾಗ ೨ (Consonants ಟ to ಳ)",
    description: "ಟ ವರ್ಗ, ತ ವರ್ಗ, ಪ ವರ್ಗ ಹಾಗೂ ಅವರ್ಗೀಯ ವ್ಯಂಜನಗಳ ಕೀಲಿಗಳ ನಿಖರ ಅಭ್ಯಾಸ.",
    characters: ["ಟ", "ಠ", "ಡ", "ಢ", "ಣ", "ತ", "ಥ", "ದ", "ಧ", "ನ", "ಪ", "ಫ", "ಬ", "ಭ", "ಮ", "ಯ", "ರ", "ಲ", "ವ", "ಶ", "ಷ", "ಸ", "ಹ", "ಳ"],
    practiceWords: ["ಟೊಪ್ಪಿಗೆ", "ದನ", "ನವಿಲು", "ಪಟ", "ಬಾಲ", "ಮರ", "ರೈತ", "ಸೂರ್ಯ", "ಹಾಲು"],
    drillText: "ಟೊಪ್ಪಿಗೆ ದನ ನವಿಲು ಪಟ ಬಾಲ ಮರ ರೈತ ಸೂರ್ಯ ಹಾಲು",
  },
  {
    id: 4,
    title: "ಗುಣಿತಾಕ್ಷರ ಚಿಹ್ನೆಗಳು (Vowel Signs / Matras)",
    description: "ದೀರ್ಘ, ಇ-ಕಾರ, ಉ-ಕಾರ ಸೇರಿದಂತೆ ಎಲ್ಲಾ ಗುಣಿತಾಕ್ಷರ ಮಾತ್ರಾ ಚಿಹ್ನೆಗಳ ಪ್ರಯೋಗ.",
    characters: ["ಾ", "ಿ", "ೀ", "ು", "ೂ", "ೃ", "ೆ", "ೇ", "ೈ", "ೊ", "ೋ", "ೌ"],
    practiceWords: ["ಕಾಡು", "ಕಿವಿ", "ಕೀಲಿ", "ಕುರಿ", "ಕೂದಲು", "ಕೆರೆ", "ಕೇರಳ", "ಕೈ", "ಕೋಳಿ"],
    drillText: "ಕಾಡು ಕಿವಿ ಕೀಲಿ ಕುರಿ ಕೂದಲು ಕೆರೆ ಕೇರಳ ಕೈ ಕೋಳಿ",
  },
  {
    id: 5,
    title: "ವಿರಾಮ ಹಾಗೂ ಒತ್ತಕ್ಷರಗಳು (Virama & Ottakshara Conjuncts)",
    description: "ಹಲಂತ್ (್) ಬಳಸಿ ಒತ್ತಕ್ಷರಗಳನ್ನು (ಕ್ಕ, ತ್ತ, ಷ್ಟ, ರ್ಮ, ಪ್ರ) ರೂಪಿಸುವ ಕೌಶಲ.",
    characters: ["್", "ಕ್ಕ", "ತ್ತ", "ಷ್ಟ", "ರ್ಮ", "ಪ್ರ", "ಸ್ವ", "ಜ್ಞ"],
    practiceWords: ["ಕರ್ನಾಟಕ", "ಪುಸ್ತಕ", "ಕಷ್ಟ", "ಧರ್ಮ", "ಪ್ರಕಾಶ", "ಸ್ವಾತಂತ್ರ್ಯ", "ವಿಜ್ಞಾನ"],
    drillText: "ಕರ್ನಾಟಕ ಪುಸ್ತಕ ಕಷ್ಟ ಧರ್ಮ ಪ್ರಕಾಶ ಸ್ವಾತಂತ್ರ್ಯ ವಿಜ್ಞಾನ",
  },
  {
    id: 6,
    title: "ಅನುಸ್ವಾರ ಹಾಗೂ ವಿಸರ್ಗ (Anusvara & Visarga)",
    description: "ಅನುಸ್ವಾರ (ಂ) ಮತ್ತು ವಿಸರ್ಗ (ಃ) ಚಿಹ್ನೆಗಳ ನಿಖರ ಟೈಪಿಂಗ್ ಕೌಶಲ್ಯ.",
    characters: ["ಂ", "ಃ"],
    practiceWords: ["ಬೆಂಗಳೂರು", "ಸಿಂಹ", "ದುಃಖ", "ಅಂತಃಕರಣ", "ಸಂಸ್ಕೃತಿ"],
    drillText: "ಬೆಂಗಳೂರು ಸಿಂಹ ದುಃಖ ಅಂತಃಕರಣ ಸಂಸ್ಕೃತಿ",
  },
  {
    id: 7,
    title: "ಪ್ರಮುಖ ಕನ್ನಡ ಪದಗಳು (Essential Vocabulary)",
    description: "ಕೆಪಿಎಸ್‌ಸಿ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಪುನರಾವರ್ತನೆಯಾಗುವ ಕನ್ನಡ ಪದಗಳು.",
    characters: [],
    practiceWords: ["ನಮಸ್ಕಾರ", "ಕನ್ನಡ", "ತಾಯಿ", "ಶಾಲೆ", "ಶಿಕ್ಷಣ", "ಗೆಳೆಯ", "ಸುಂದರ"],
    drillText: "ನಮಸ್ಕಾರ ಕನ್ನಡ ತಾಯಿ ಶಾಲೆ ಶಿಕ್ಷಣ ಗೆಳೆಯ ಸುಂದರ",
  },
  {
    id: 8,
    title: "ವಾಕ್ಯಾಭ್ಯಾಸ (Kannada Sentence Practice)",
    description: "ಕೆಪಿಎಸ್‌ಸಿ ಮತ್ತು ಹೈಕೋರ್ಟ್ ಶೀಘ್ರಲಿಪಿ/ಟೈಪಿಸ್ಟ್ ಪರೀಕ್ಷೆಗಾಗಿ ವಾಕ್ಯಗಳ ವೇಗ ಅಭ್ಯಾಸ.",
    characters: [],
    practiceWords: [
      "ಕನ್ನಡ ನಮ್ಮ ಹೆಮ್ಮೆಯ ತಾಯ್ನುಡಿ.",
      "ಪ್ರತಿದಿನ ಟೈಪಿಂಗ್ ಅಭ್ಯಾಸ ಮಾಡುವುದರಿಂದ ವೇಗ ಹೆಚ್ಚುತ್ತದೆ.",
      "ಕೆಪಿಎಸ್ಸಿ ಪರೀಕ್ಷೆಗೆ ನಿರಂತರ ಅಭ್ಯಾಸ ಅಗತ್ಯ."
    ],
    drillText: "ಕನ್ನಡ ನಮ್ಮ ಹೆಮ್ಮೆಯ ತಾಯ್ನುಡಿ. ಪ್ರತಿದಿನ ಟೈಪಿಂಗ್ ಅಭ್ಯಾಸ ಮಾಡುವುದರಿಂದ ವೇಗ ಹೆಚ್ಚುತ್ತದೆ. ಕೆಪಿಎಸ್ಸಿ ಪರೀಕ್ಷೆಗೆ ನಿರಂತರ ಅಭ್ಯಾಸ ಅಗತ್ಯ.",
  },
];

// 8. Gujarati Lessons (8 Modules with Matras, Halant & Sanyukt Akshar)
export const gujaratiLessons: Lesson[] = [
  {
    id: 1,
    title: "સ્વરો (Gujarati Vowels)",
    description: "ગુજરાતી ભાષાના સ્વરોની ઓળખ ಮತ್ತು ઇનસ્ક્રિપ્ટ કીબોર્ડ પર તેમની સ્થિતિનો અભ્યાસ.",
    characters: ["અ", "આ", "ઇ", "ઈ", "ઉ", "ઊ", "ઋ", "એ", "ઐ", "ઓ", "ઔ", "અં", "અઃ"],
    practiceWords: ["આંબા", "ઇનામ", "ઊંટ", "ઋષિ", "એકતા", "ઔષધ", "અંગૂઠો"],
    drillText: "આંબા ઇનામ ઊંટ ઋષિ એકતા ઔષધ અંગૂઠો",
  },
  {
    id: 2,
    title: "વ્યંજનો - ભાગ ૧ (Consonants ક to ઞ)",
    description: "ક વર્ગ અને ચ વર્ગના વ્યંજનોનો નિયમિત આંગળી સ્થિતિ સાથે ટાઇપિંગ અભ્યાસ.",
    characters: ["ક", "ખ", "ગ", "ઘ", "ઙ", "ચ", "છ", "જ", "ઝ", "ઞ"],
    practiceWords: ["કમળ", "ખજૂર", "ગણપતિ", "ઘર", "ચકલી", "જળ", "ઝાડ"],
    drillText: "કમળ ખજૂર ગણપતિ ઘર ચકલી જળ ઝાડ",
  },
  {
    id: 3,
    title: "વ્યંજનો - ભાગ ૨ (Consonants ટ to ળ)",
    description: "ટ વર્ગ, ત વર્ગ, પ વર્ગ અને અવર્ગીય વ્યંજનોની કીઓનો અભ્યાસ.",
    characters: ["ટ", "ઠ", "ડ", "ઢ", "ણ", "ત", "થ", "દ", "ધ", "ન", "પ", "ફ", "બ", "ભ", "મ", "ય", "ર", "લ", "વ", "શ", "ષ", "સ", "હ", "ળ"],
    practiceWords: ["ટપાલ", "થાંભલો", "દરિયો", "નદી", "પાણી", "બાગ", "મોર", "સિંહ"],
    drillText: "ટપાલ થાંભલો દરિયો નદી પાણી બાગ મોર સિંહ",
  },
  {
    id: 4,
    title: "માત્રાઓ (Gujarati Matras / Vowel Signs)",
    description: "કાનો, હ્રસ્વ-દીર્ઘ ઇ, હ્રસ્વ-દીર્ઘ ઉ, એકમાત્ર અને બેમાત્રનો સચોટ પ્રયોગ.",
    characters: ["ા", "િ", "ી", "ુ", "ૂ", "ૃ", "ે", "ૈ", "ો", "ૌ"],
    practiceWords: ["કામ", "દિવસ", "દીવો", "ગુલાબ", "દૂધ", "કૃપા", "દેશ", "પૈસા", "મોસમ"],
    drillText: "કામ દિવસ દીવો ગુલાબ દૂધ કૃપા દેશ પૈસા મોસમ",
  },
  {
    id: 5,
    title: "હલંત અને જોડાક્ષરો (Halant & Sanyukt Akshar)",
    description: "હલંત (્) કીનો ઉપયોગ કરીને અર્ધા અક્ષરો અને જોડાક્ષરો (ક્ષ, જ્ઞ, ત્ર, શ્ર) બનાવવાની રીત.",
    characters: ["્", "ક્ષ", "જ્ઞ", "ત્ર", "શ્ર", "પ્ર", "ધ્ય", "ત્ત"],
    practiceWords: ["ગુજરાત", "શિક્ષક", "જ્ઞાન", "મિત્ર", "પરિશ્રમ", "પ્રકાશ", "સત્ય"],
    drillText: "ગુજરાત શિક્ષક જ્ઞાન મિત્ર પરિશ્રમ પ્રકાશ સત્ય",
  },
  {
    id: 6,
    title: "અનુસ્વાર અને વિસર્ગ (Anusvara & Visarga)",
    description: "અનુસ્વાર (ં) અને વિસર્ગ (ઃ) ચિહ્નોનો સાચો ઉપયોગ.",
    characters: ["ં", "ઃ"],
    practiceWords: ["સુંદર", "ચંદન", "શાંતિ", "દુઃખ", "અંતઃકરણ"],
    drillText: "સુંદર ચંદન શાંતિ દુઃખ અંતઃકરણ",
  },
  {
    id: 7,
    title: "રોજિંદા ગુજરાતી શબ્દો (Common Vocabulary)",
    description: "જીએસએસએસબી બિન સચિવાલય ક્લાર્ક પરીક્ષામાં પુછાતા અગત્યના શબ્દો.",
    characters: [],
    practiceWords: ["નમસ્તે", "ગુજરાતી", "પુસ્તક", "મહેનત", "સફળતા", "વિદ્યાલય", "મિત્ર"],
    drillText: "નમસ્તે ગુજરાતી પુસ્તક મહેનત સફળતા વિદ્યાલય મિત્ર",
  },
  {
    id: 8,
    title: "વાક્ય અભ્યાસ (Gujarati Sentence Practice)",
    description: "સરકારી ક્લાર્ક ટાઇપિંગ ટેસ્ટ માટે સંપૂર્ણ વાક્યોનો સ્પીડ અભ્યાસ.",
    characters: [],
    practiceWords: [
      "ગુજરાતી આપણી માતૃભાષા છે.",
      "દરરોજ નિયમિત ટાઇપિંગ પ્રેક્ટિસ કરવાથી સ્પીડ વધે છે.",
      "જીએસએસએસબી ક્લાર્ક પરીક્ષા માટે ચોકસાઈ જરૂરી છે."
    ],
    drillText: "ગુજરાતી આપણી માતૃભાષા છે. દરરોજ નિયમિત ટાઇપિંગ પ્રેક્ટિસ કરવાથી સ્પીડ વધે છે. જીએસએસએસબી ક્લાર્ક પરીક્ષા માટે ચોકસાઈ જરૂરી છે.",
  },
];

// Lookup Map by Language ID
export const ALL_LANGUAGE_LESSONS: Record<string, Lesson[]> = {
  english: englishLessons,
  hindi: hindiLessons,
  marathi: marathiLessons,
  punjabi: punjabiLessons,
  tamil: tamilLessons,
  bengali: bengaliLessons,
  kannada: kannadaLessons,
  gujarati: gujaratiLessons,
};

export function getLessonsByLanguage(langId: string): Lesson[] {
  return ALL_LANGUAGE_LESSONS[langId.toLowerCase()] || hindiLessons;
}
