export interface TransliterationExample {
  roman: string;
  native: string;
  meaning: string;
}

export interface WordPhraseItem {
  english: string;
  roman: string;
  native: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IndianLanguageTypingConfig {
  id: string;
  name: string;
  nativeName: string;
  nativeChar: string;
  script: string;
  itcCode: string;
  supported: boolean;
  route: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  introParagraphs: string[];
  howItWorks: string[];
  verifiedExamples: TransliterationExample[];
  typingInstructions: string[];
  commonWordsAndPhrases: { category: string; items: WordPhraseItem[] }[];
  commonIssues: string[];
  characterInfo: {
    vowels: string;
    consonants: string;
    matras: string;
    specialSigns: string;
  };
  faqs: FAQItem[];
}

export const INDIAN_LANGUAGES_TYPING: IndianLanguageTypingConfig[] = [
  {
    id: "kannada",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
    nativeChar: "ಅ",
    script: "Kannada Script",
    itcCode: "kn-t-i0-und",
    supported: true,
    route: "/english-to-kannada-typing",
    seoTitle: "English to Kannada Typing Online – Type Kannada Using English Keyboard | TypeHindi",
    metaDescription: "Type Kannada online using your English keyboard. Convert Roman letters into Kannada script, copy your text and practise Kannada typing free on TypeHindi.",
    h1: "English to Kannada Typing Online",
    tagline: "Type in Kannada using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Kannada (ಕನ್ನಡ) is one of the classical Dravidian languages of India, spoken predominantly by over 45 million people in Karnataka and neighboring regions. The Kannada script is an abugida of the Brahmic family, known for its elegant, rounded letterforms and intricate conjunct consonant structures (ottuakshara).",
      "While official government examinations and administrative typing tests typically require mastery of the standardised InScript or Remington layouts, many everyday computer users, students, content creators, and professionals find it challenging to memorize complex native keyboard mappings. This is where English to Kannada phonetic transliteration becomes invaluable.",
      "Our English to Kannada typing tool enables you to type naturally using regular Roman/English letters exactly as they sound. As you type, the engine phonetically converts each keystroke into authentic, beautiful Kannada script in real time."
    ],
    howItWorks: [
      "Phonetic typing operates on natural acoustic mapping rather than fixed key positions. You simply spell out Kannada words using English letters.",
      "For example, typing 'namaskara' produces 'ನಮಸ್ಕಾರ', while typing 'dhanyavada' produces 'ಧನ್ಯವಾದ'.",
      "Each word is processed as you type or upon pressing the spacebar. The engine handles vowel matras, halant bindings, and conjunct letters automatically.",
      "Once generated, you can directly edit, copy, or use your Kannada text in Microsoft Word, WhatsApp, emails, social media, or government portal forms."
    ],
    verifiedExamples: [
      { roman: "namaskara", native: "ನಮಸ್ಕಾರ", meaning: "Hello / Greetings" },
      { roman: "dhanyavada", native: "ಧನ್ಯವಾದ", meaning: "Thank you" },
      { roman: "hegiddira", native: "ಹೇಗಿದ್ದೀರ", meaning: "How are you?" },
      { roman: "kannada", native: "ಕನ್ನಡ", meaning: "Kannada" },
      { roman: "shubhadina", native: "ಶುಭದಿನ", meaning: "Good day" },
      { roman: "bengaluru", native: "ಬೆಂಗಳೂರು", meaning: "Bengaluru" },
      { roman: "nanna hesaru", native: "ನನ್ನ ಹೆಸರು", meaning: "My name is" },
      { roman: "shubhodayam", native: "ಶುಭೋದಯಂ", meaning: "Good morning" }
    ],
    typingInstructions: [
      "For short vowels, use single letters: 'a' for ಅ, 'i' for ಇ, 'u' for ಉ, 'e' for ಎ, 'o' for ಒ.",
      "For long vowels, use double letters or capitals: 'aa' or 'A' for ಆ, 'ee' or 'ii' for ಈ, 'oo' or 'uu' for ಊ, 'E' for ಏ, 'O' for ಓ.",
      "For aspirated consonants, add an 'h': 'k' for ಕ, 'kh' for ಖ, 'g' for ಗ, 'gh' for ಘ, 'ch' for ಚ, 'chh' for ಛ.",
      "For doubled consonants (ottuakshara), type the consonant twice: 'nanna' produces 'ನನ್ನ', 'kannada' produces 'ಕನ್ನಡ'.",
      "For anusvara (ಂ), type 'm' or 'n' at the end of a syllable: 'bengaluru' → 'ಬೆಂಗಳೂರು'."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Politeness",
        items: [
          { english: "Hello / Welcome", roman: "namaskara", native: "ನಮಸ್ಕಾರ" },
          { english: "Thank you", roman: "dhanyavada", native: "ಧನ್ಯವಾದ" },
          { english: "Good morning", roman: "shubhodayam", native: "ಶುಭೋದಯಂ" },
          { english: "Please", roman: "dayavittu", native: "ದಯವಿಟ್ಟು" }
        ]
      },
      {
        category: "Daily Questions & Conversation",
        items: [
          { english: "How are you?", roman: "hegiddira", native: "ಹೇಗಿದ್ದೀರ" },
          { english: "I am fine", roman: "naanu chennagiddene", native: "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ" },
          { english: "What is your name?", roman: "nimma hesarenu", native: "ನಿಮ್ಮ ಹೆಸರೇನು" },
          { english: "Come here", roman: "illi banni", native: "ಇಲ್ಲಿ ಬನ್ನಿ" }
        ]
      }
    ],
    commonIssues: [
      "Short vs Long Vowels: Typing 'e' produces 'ಎ' while 'E' or 'ee' produces 'ಏ'. Pay attention to length to maintain correct spelling.",
      "Retroflex consonants (ಟ, ಠ, ಡ, ಢ, ಣ) typically require capital letters ('T', 'Th', 'D', 'Dh', 'N') in phonetic mapping.",
      "Halant / Virama: If a conjunct does not form automatically, typing an extra consonant letter binds the half-letter smoothly."
    ],
    characterInfo: {
      vowels: "ಅ, ಆ, ಇ, ಈ, ಉ, ಊ, ಋ, ಎ, ಏ, ಐ, ಒ, ಓ, ಔ",
      consonants: "ಕ, ಖ, ಗ, ಘ, ಙ, ಚ, ಛ, ಜ, ಝ, ಞ, ಟ, ಠ, ಡ, ಢ, ಣ, ತ, ಥ, ದ, ಧ, ನ, ಪ, ಫ, ಬ, ಭ, ಮ, ಯ, ರ, ಲ, ವ, ಶ, ಷ, ಸ, ಹ, ಳ",
      matras: "ಾ, ಿ, ೀ, ು, ೂ, ೃ, ೆ, ೇ, ೈ, ೊ, ೋ, ೌ",
      specialSigns: "ಂ (Anusvara), ಃ (Visarga), ್ (Virama / Halant)"
    },
    faqs: [
      {
        question: "How does English to Kannada typing work on TypeHindi?",
        answer: "Our tool uses Google's phonetic transliteration technology. You type Kannada words using normal English alphabet spelling (e.g., 'namaskara'), and it automatically renders the text into authentic Kannada script (ನಮಸ್ಕಾರ)."
      },
      {
        question: "Can I copy the typed Kannada text to WhatsApp or MS Word?",
        answer: "Yes! All output is generated in universal Unicode Kannada format. You can click 'Copy Text' and paste it seamlessly into WhatsApp, Word, Google Docs, emails, or government applications."
      },
      {
        question: "Is this a Kannada translator or a transliteration tool?",
        answer: "This is a phonetic transliteration tool. It converts sound-based Roman characters into Kannada letters (e.g., 'kannada' → 'ಕನ್ನಡ'). It does not translate English meanings into Kannada (e.g., typing 'book' will not produce 'ಪುಸ್ತಕ')."
      },
      {
        question: "Do I need to install Kannada fonts on my computer?",
        answer: "No. The text uses standard Unicode Kannada, which is built into modern Windows, macOS, Android, and iOS systems. It displays crisply on all devices without external font downloads."
      },
      {
        question: "Is this typing tool completely free?",
        answer: "Yes, our English to Kannada typing tool is 100% free with unlimited character capacity, instant copying, and zero registration requirements."
      }
    ]
  },
  {
    id: "gujarati",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
    nativeChar: "અ",
    script: "Gujarati Script",
    itcCode: "gu-t-i0-und",
    supported: true,
    route: "/english-to-gujarati-typing",
    seoTitle: "English to Gujarati Typing Online – Type Gujarati Using English Keyboard | TypeHindi",
    metaDescription: "Type Gujarati online using your English keyboard. Convert Roman letters into Gujarati script, copy your text and practise Gujarati typing free on TypeHindi.",
    h1: "English to Gujarati Typing Online",
    tagline: "Type in Gujarati using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Gujarati (ગુજરાતી) is an Indo-Aryan language spoken by more than 55 million people worldwide, primarily in the Indian state of Gujarat. The Gujarati script is derived from Devanagari but is visually distinct because it omits the traditional top horizontal headline (shirorekha), giving it an open, airy appearance.",
      "Gujarati literature, commerce, and administrative correspondence have a rich heritage. However, learning the traditional Gujarati InScript keyboard can take weeks of daily practice. English to Gujarati phonetic typing provides a fast, intuitive alternative.",
      "Our tool lets you type Gujarati phonetically in Roman letters on any standard QWERTY keyboard, instantly generating high-accuracy Unicode Gujarati text."
    ],
    howItWorks: [
      "Phonetic typing maps English phonetic sounds directly to Gujarati characters.",
      "Typing 'namaste' converts to 'નમસ્તે', 'kem chho' converts to 'કેમ છો', and 'aabhar' converts to 'આભાર'.",
      "The tool operates in real time. Simply press space or click 'Transliterate' to convert words, sentences, or complete paragraphs.",
      "The output text is standard Unicode and ready to copy into WhatsApp, Facebook, documents, or government portals."
    ],
    verifiedExamples: [
      { roman: "namaste", native: "નમસ્તે", meaning: "Hello / Greetings" },
      { roman: "kem chho", native: "કેમ છો", meaning: "How are you?" },
      { roman: "aabhar", native: "આભાર", meaning: "Thank you" },
      { roman: "gujarat", native: "ગુજરાત", meaning: "Gujarat" },
      { roman: "shubh prabhat", native: "શુભ પ્રભાત", meaning: "Good morning" },
      { roman: "maru naam", native: "મારું નામ", meaning: "My name" },
      { roman: "saradhe", native: "શારદે", meaning: "Saraswati invocation" }
    ],
    typingInstructions: [
      "Type 'a' for અ, 'aa' or 'A' for આ, 'i' for ઇ, 'ee' or 'I' for ઈ, 'u' for ઉ, 'oo' or 'U' for ઊ.",
      "Type 'e' for એ, 'ai' for ઐ, 'o' for ઓ, 'au' for ઔ.",
      "For aspirated consonants, add 'h': 'k' → ક, 'kh' → ખ, 'g' → ગ, 'gh' → ઘ.",
      "For conjuncts, type consonants in sequence: 'namaste' → 'નમસ્તે', 'swagat' → 'સ્વાગત'.",
      "For anusvara (ં), type 'n' or 'm': 'sunder' → 'સુંદર', 'ganga' → 'ગંગા'."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Courtesy",
        items: [
          { english: "Hello / Greetings", roman: "namaste", native: "નમસ્તે" },
          { english: "How are you?", roman: "kem chho", native: "કેમ છો" },
          { english: "I am fine", roman: "hu majama chhu", native: "હું મજામાં છું" },
          { english: "Thank you", roman: "aabhar", native: "આભાર" }
        ]
      },
      {
        category: "Common Expressions",
        items: [
          { english: "Good morning", roman: "shubh prabhat", native: "શુભ પ્રભાત" },
          { english: "Goodbye", roman: "avjo", native: "આવજો" },
          { english: "Yes", roman: "haa", native: "હા" },
          { english: "No", roman: "na", native: "ના" }
        ]
      }
    ],
    commonIssues: [
      "Make sure to use 'sh' for શ and 'Sh' or 'shh' for ષ depending on the Sanskrit-derived word.",
      "Double vowels create long matras: 'i' produces 'િ' while 'ee' produces 'ી'.",
      "Retroflex consonants like 'ટ', 'ઠ', 'ડ', 'ઢ', 'ણ' are best mapped using capital letters ('T', 'Th', 'D', 'Dh', 'N')."
    ],
    characterInfo: {
      vowels: "અ, આ, ઇ, ઈ, ઉ, ઊ, ઋ, એ, ઐ, ઓ, ઔ",
      consonants: "ક, ખ, ગ, ઘ, ઙ, ચ, છ, જ, ઝ, ઞ, ટ, ઠ, ડ, ઢ, ણ, ત, થ, દ, ધ, ન, પ, ફ, બ, ભ, મ, ય, ર, લ, વ, શ, ષ, સ, હ, ળ",
      matras: "ા, િ, ી, ુ, ૂ, ૃ, ે, ૈ, ો, ૌ",
      specialSigns: "ં (Anusvara), ઃ (Visarga), ્ (Virama)"
    },
    faqs: [
      {
        question: "How do I type in Gujarati using my English keyboard?",
        answer: "Type English letters phonetically matching the Gujarati sounds (e.g., 'kem chho'). The tool automatically converts them into proper Gujarati script (કેમ છો)."
      },
      {
        question: "Does the converted Gujarati text work on social media?",
        answer: "Yes, it generates standard Unicode Gujarati characters that render perfectly on WhatsApp, Instagram, Twitter/X, Facebook, and Gmail."
      },
      {
        question: "Can I edit the Gujarati text after transliteration?",
        answer: "Absolutely. The Gujarati output box is fully editable, allowing you to backspace, delete, or type additional characters directly."
      },
      {
        question: "Is there any word limit for conversion?",
        answer: "No. You can type single words, multi-line paragraphs, or complete essays with unlimited conversions."
      },
      {
        question: "What is the difference between InScript and phonetic Gujarati typing?",
        answer: "InScript uses dedicated key-to-character bindings that require special keyboard stickers or memorization. Phonetic typing lets you spell words as they sound using your standard English keyboard."
      }
    ]
  },
  {
    id: "malayalam",
    name: "Malayalam",
    nativeName: "മലയാളം",
    nativeChar: "അ",
    script: "Malayalam Script",
    itcCode: "ml-t-i0-und",
    supported: true,
    route: "/english-to-malayalam-typing",
    seoTitle: "English to Malayalam Typing Online – Type Malayalam Using English Keyboard | TypeHindi",
    metaDescription: "Type Malayalam online using your English keyboard. Convert Roman letters into Malayalam script, copy your text and practise Malayalam typing free on TypeHindi.",
    h1: "English to Malayalam Typing Online",
    tagline: "Type in Malayalam using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Malayalam (മലയാളം) is a classical Dravidian language spoken predominantly by over 38 million people in Kerala and the Lakshadweep islands. The Malayalam script is renowned for its graceful circular ligatures, extensive phonetic inventory, and chillu letters.",
      "Because Malayalam has 15 vowels, 36 consonants, and complex conjunct forms, typing Malayalam on a physical keyboard using traditional layouts like InScript requires substantial practice. English to Malayalam phonetic transliteration solves this difficulty effortlessly.",
      "With TypeHindi's free online tool, you can type Malayalam words phonetically using Roman English letters and immediately receive accurate, beautifully rendered Malayalam script."
    ],
    howItWorks: [
      "Type Malayalam words in Roman English letters according to their pronunciation.",
      "The tool phonetically maps your input: 'namaskaram' becomes 'നമസ്കാരം', 'nanni' becomes 'നന്ദി', and 'keralam' becomes 'കേരളം'.",
      "Special Malayalam forms like chillu letters (ൻ, ർ, ൽ, ൾ, ൺ) and anusvara (ം) are resolved automatically.",
      "The output is 100% standard Unicode Malayalam that can be copied with one click."
    ],
    verifiedExamples: [
      { roman: "namaskaram", native: "നമസ്കാരം", meaning: "Hello / Greetings" },
      { roman: "nanni", native: "നന്ദി", meaning: "Thank you" },
      { roman: "sukhamano", native: "സുഖമാണോ", meaning: "Are you fine?" },
      { roman: "keralam", native: "കേരളം", meaning: "Kerala" },
      { roman: "sneham", native: "സ്നേഹം", meaning: "Love / Affection" },
      { roman: "ente peru", native: "എന്റെ പേര്", meaning: "My name" },
      { roman: "shubhadinam", native: "ശുഭദിനം", meaning: "Good day" }
    ],
    typingInstructions: [
      "Use 'a' for അ, 'aa' or 'A' for ആ, 'i' for ഇ, 'ee' or 'I' for ഈ, 'u' for ഉ, 'oo' or 'U' for ഊ.",
      "Use 'e' for എ, 'E' for ഏ, 'ai' for ഐ, 'o' for ഒ, 'O' for ഓ, 'au' for ഔ.",
      "For chillu letters, type consonant followed by special end bounds or common endings: 'ente' → 'എന്റെ'.",
      "For anusvara (ം), type 'm': 'namaskaram' → 'നമസ്കാരം'.",
      "Double consonants form natural conjuncts: 'nanni' → 'നന്ദി', 'sukham' → 'സുഖം'."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Polite Phrases",
        items: [
          { english: "Hello / Greetings", roman: "namaskaram", native: "നമസ്കാരം" },
          { english: "Thank you", roman: "nanni", native: "നന്ദി" },
          { english: "How are you?", roman: "sukhamano", native: "സുഖമാണോ" },
          { english: "I am fine", roman: "sukhamanu", native: "സുഖമാണ്" }
        ]
      },
      {
        category: "Daily Life Expressions",
        items: [
          { english: "What is your name?", roman: "enthano peru", native: "എന്താണ് പേര്" },
          { english: "Good morning", roman: "shubhodayam", native: "ശുഭോദയം" },
          { english: "See you again", roman: "veendum kaanam", native: "വീണ്ടും കാണാം" },
          { english: "Welcome", roman: "swagatham", native: "സ്വാഗതം" }
        ]
      }
    ],
    commonIssues: [
      "Distinction between short 'e' (എ) and long 'E' (ഏ), short 'o' (ഒ) and long 'O' (ഓ) is vital in Malayalam.",
      "Chillu letters like ർ, ൽ, ൾ require accurate spelling patterns to prevent unintended full consonant renders.",
      "The retroflex liquid 'ഴ' (zha) is typed as 'zha' or 'zha' in words like 'Kozhikode' (കോഴിക്കോട്)."
    ],
    characterInfo: {
      vowels: "അ, ആ, ഇ, ഈ, ഉ,  ഊ, ഋ, എ, ഏ, ഐ, ഒ, ഓ, ഔ",
      consonants: "ക, ഖ, ഗ, ഘ, ങ, ച, ഛ, ജ, ഝ, ഞ, ട, ഠ, ഡ, ഢ, ണ, ത, ഥ, ദ, ധ, ന, പ, ഫ, ബ, ഭ, മ, യ, ര, ല, വ, ശ, ഷ, സ, ഹ, ള, ഴ, റ",
      matras: "ാ, ി, ീ, ു, ൂ, ൃ, െ, േ, ൈ, ൊ, ോ, ൌ",
      specialSigns: "ം (Anusvara), ഃ (Visarga), ് (Chandrakkala / Virama)"
    },
    faqs: [
      {
        question: "How do I type in Malayalam using Roman English letters?",
        answer: "Just type words as they sound in English (e.g., 'namaskaram'). Our tool instantly converts them into native Malayalam characters (നമസ്കാരം)."
      },
      {
        question: "Does it support Malayalam chillu letters properly?",
        answer: "Yes, our transliteration engine accurately handles chillu letters (ൻ, ർ, ൽ, ൾ, ൺ) in accordance with modern Unicode standards."
      },
      {
        question: "Can I paste this Malayalam text on Android and iPhone?",
        answer: "Yes, the generated Unicode Malayalam text works natively on all smartphones, tablets, computers, and web browsers."
      },
      {
        question: "Is there any software installation required?",
        answer: "No software or font installation is needed. The tool runs directly in your browser."
      },
      {
        question: "Can I practice Malayalam typing speed on TypeHindi?",
        answer: "Yes, TypeHindi also offers interactive Malayalam typing practice and test simulators in our dedicated Multilingual section."
      }
    ]
  },
  {
    id: "tamil",
    name: "Tamil",
    nativeName: "தமிழ்",
    nativeChar: "அ",
    script: "Tamil Script",
    itcCode: "ta-t-i0-und",
    supported: true,
    route: "/english-to-tamil-typing",
    seoTitle: "English to Tamil Typing Online – Type Tamil Using English Keyboard | TypeHindi",
    metaDescription: "Type Tamil online using your English keyboard. Convert Roman letters into Tamil script, copy your text and practise Tamil typing free on TypeHindi.",
    h1: "English to Tamil Typing Online",
    tagline: "Type in Tamil using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Tamil (தமிழ்) is one of the world's longest-surviving classical languages, spoken by more than 75 million people in Tamil Nadu, Puducherry, Sri Lanka, Singapore, and Malaysia. The Tamil script is noted for its distinctive geometric curves, pure consonants (meyyezhuthukkal), and unique letters like 'ழ' (zha).",
      "Tamil has an elegant syllabic writing system. However, typing Tamil using traditional 99-key Tamil layouts or InScript can be intimidating for beginners who are accustomed to standard English QWERTY keyboards.",
      "Our English to Tamil typing engine offers a fast, frictionless experience. You simply spell out words in English phonetically (Tanglish), and the tool immediately renders them in pristine Unicode Tamil script."
    ],
    howItWorks: [
      "Type Tamil words phonetically using ordinary English letters (Tanglish style).",
      "For example, typing 'vanakkam' yields 'வணக்கம்', 'nandri' yields 'நன்றி', and 'thamizh' yields 'தமிழ்'.",
      "Press the spacebar to convert each word instantly or click the 'Transliterate' button for pasted blocks of text.",
      "Easily copy or edit the resulting Tamil script for social posts, emails, official letters, or personal notes."
    ],
    verifiedExamples: [
      { roman: "vanakkam", native: "வணக்கம்", meaning: "Hello / Greetings" },
      { roman: "nandri", native: "நன்றி", meaning: "Thank you" },
      { roman: "eppadi irukkinga", native: "எப்படி இருக்கீங்க", meaning: "How are you?" },
      { roman: "thamizh", native: "தமிழ்", meaning: "Tamil" },
      { roman: "kaalai vanakkam", native: "காலை வணக்கம்", meaning: "Good morning" },
      { roman: "enna seigireergal", native: "என்ன செய்கிறீர்கள்", meaning: "What are you doing?" },
      { roman: "anbudan", native: "அன்புடன்", meaning: "With love / regards" }
    ],
    typingInstructions: [
      "Type 'a' for அ, 'aa' or 'A' for ஆ, 'i' for இ, 'ee' or 'I' for ஈ, 'u' for உ, 'oo' or 'U' for ஊ.",
      "Type 'e' for எ, 'E' for ஏ, 'ai' for ஐ, 'o' for ஒ, 'O' for ஓ, 'au' for ஔ.",
      "For the unique Tamil consonant 'ழ', type 'zha' or 'zha': 'thamizh' → 'தமிழ்'.",
      "For pure consonants with pulli (dot on top), type consonant without vowel: 'k' → 'க்', 't' → 'த்'.",
      "For alveolar 'ற', use 'R' or 'rr', and for alveolar 'ன', use 'n' or 'nn'."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Polite Phrases",
        items: [
          { english: "Hello / Greetings", roman: "vanakkam", native: "வணக்கம்" },
          { english: "Thank you", roman: "nandri", native: "நன்றி" },
          { english: "Good morning", roman: "kaalai vanakkam", native: "காலை வணக்கம்" },
          { english: "Welcome", roman: "nalvaravu", native: "நல்வரவு" }
        ]
      },
      {
        category: "Conversational Tamil",
        items: [
          { english: "How are you?", roman: "eppadi irukkinga", native: "எப்படி இருக்கீங்க" },
          { english: "I am fine", roman: "naan nalam", native: "நான் நலம்" },
          { english: "What is your name?", roman: "unga peyar enna", native: "உங்க பெயர் என்ன" },
          { english: "My name is...", roman: "en peyar", native: "என் பெயர்" }
        ]
      }
    ],
    commonIssues: [
      "Distinction between dental 'ந' (na) and alveolar 'ன' (na) requires careful spelling.",
      "Using 'zha' for 'ழ' ensures you don't inadvertently get retroflex 'ள' (la) or alveolar 'ல' (la).",
      "Short 'e' (எ) versus long 'E' (ஏ), and short 'o' (ஒ) versus long 'O' (ஓ) are critical vowel distinctions."
    ],
    characterInfo: {
      vowels: "அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ",
      consonants: "க, ங, ச, ஞ, ட, ண, த, ந, ப, ம, ய, ர, ல, வ, ழ, ள, ற, ன",
      matras: "ா, ி, ீ, ு, ூ, ெ, ே, ை, ொ, ோ, ௌ",
      specialSigns: "ஃ (Aytham), ் (Pulli / Virama)"
    },
    faqs: [
      {
        question: "How do I type in Tamil using English letters?",
        answer: "Type words in Roman letters according to how you say them (Tanglish). For example, typing 'vanakkam' instantly generates 'வணக்கம்'."
      },
      {
        question: "How do I type the Tamil letter 'ழ' (zha)?",
        answer: "Simply type 'zha' (e.g., 'thamizh' gives 'தமிழ்', 'vazhaipazham' gives 'வாழைப்பழம்')."
      },
      {
        question: "Can I copy the converted Tamil text into WhatsApp?",
        answer: "Yes, click the 'Copy' button and paste directly into WhatsApp, Facebook, Word, or any website."
      },
      {
        question: "Is Tamil typing safe and private on this site?",
        answer: "Yes, our tool transliterates on the fly with no text retention or tracking, guaranteeing complete confidentiality."
      },
      {
        question: "Can I use this on my mobile phone?",
        answer: "Yes, the tool is fully responsive and works smoothly on mobile browsers without requiring additional keyboard apps."
      }
    ]
  },
  {
    id: "telugu",
    name: "Telugu",
    nativeName: "తెలుగు",
    nativeChar: "అ",
    script: "Telugu Script",
    itcCode: "te-t-i0-und",
    supported: true,
    route: "/english-to-telugu-typing",
    seoTitle: "English to Telugu Typing Online – Type Telugu Using English Keyboard | TypeHindi",
    metaDescription: "Type Telugu online using your English keyboard. Convert Roman letters into Telugu script, copy your text and practise Telugu typing free on TypeHindi.",
    h1: "English to Telugu Typing Online",
    tagline: "Type in Telugu using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Telugu (తెలుగు) is a classical Dravidian language spoken by more than 85 million people across Andhra Pradesh, Telangana, and the global Telugu diaspora. Famous as the 'Italian of the East' because almost all of its words end in vowel sounds, Telugu features an ornate, circular, and aesthetic script.",
      "Due to its intricate combination of hallulu (consonants), achchulu (vowels), guninthalu (vowel signs), and vatthulu (sub-consonant signs), mastering a physical Telugu keyboard layout can be time-consuming.",
      "TypeHindi's English to Telugu typing tool eliminates that barrier. It empowers anyone to type Telugu effortlessly using standard English letters with high phonetic precision."
    ],
    howItWorks: [
      "Type words in natural Roman English based on Telugu pronunciation.",
      "The phonetic engine transforms 'namaskaram' into 'నమస్కారం', 'dhanyavadalu' into 'ధన్యవాదాలు', and 'telugu' into 'తెలుగు'.",
      "Guninthalu (మాత్రలు) and sub-consonant vatthulu are formed automatically as you type consonants in succession.",
      "Easily copy the generated Unicode Telugu text to clipboard or edit it directly inside the browser."
    ],
    verifiedExamples: [
      { roman: "namaskaram", native: "నమస్కారం", meaning: "Hello / Greetings" },
      { roman: "dhanyavadalu", native: "ధన్యవాదాలు", meaning: "Thank you" },
      { roman: "ela unnaru", native: "ఎలా ఉన్నారు", meaning: "How are you?" },
      { roman: "telugu", native: "తెలుగు", meaning: "Telugu" },
      { roman: "shubhodayam", native: "శుభోదయం", meaning: "Good morning" },
      { roman: "naa peru", native: "నా పేరు", meaning: "My name is" },
      { roman: "meeru ela unnaru", native: "మీరు ఎలా ఉన్నారు", meaning: "How are you doing?" }
    ],
    typingInstructions: [
      "Use 'a' for అ, 'aa' or 'A' for ఆ, 'i' for ఇ, 'ee' or 'I' for ఈ, 'u' for ఉ, 'oo' or 'U' for ఊ.",
      "Use 'e' for ఎ, 'E' for ఏ, 'ai' for ఐ, 'o' for ఒ, 'O' for ఓ, 'au' for ఔ.",
      "For aspirated consonants, add 'h': 'k' → క, 'kh' → ఖ, 'g' → గ, 'gh' → ఘ.",
      "For vatthulu (conjunct consonants), type the consonants consecutively: 'amma' → 'అమ్మ', 'telugu' → 'తెలుగు'.",
      "For sunna (ం), type 'm': 'namaskaram' → 'నమస్కారం'."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Polite Phrases",
        items: [
          { english: "Hello / Greetings", roman: "namaskaram", native: "నమస్కారం" },
          { english: "Thank you", roman: "dhanyavadalu", native: "ధన్యవాదాలు" },
          { english: "Good morning", roman: "shubhodayam", native: "శుభోదయం" },
          { english: "Please", roman: "dayachesi", native: "దయచేసి" }
        ]
      },
      {
        category: "Daily Questions & Conversation",
        items: [
          { english: "How are you?", roman: "ela unnaru", native: "ఎలా ఉన్నారు" },
          { english: "I am fine", roman: "nenu baagunnanu", native: "నేను బాగున్నాను" },
          { english: "What is your name?", roman: "mee peru enti", native: "మీ పేరు ఏంటి" },
          { english: "See you again", roman: "malli kaluddam", native: "మళ్ళీ కలుద్దాం" }
        ]
      }
    ],
    commonIssues: [
      "Distinguish short 'e' (ఎ) from long 'E' (ఏ), and short 'o' (ఒ) from long 'O' (ఓ).",
      "Sunna (ం) vs Arasunna (ఁ): 'm' at syllable end produces normal sunna 'ం'.",
      "Retroflex consonants (ట, ఠ, డ, ఢ, ణ) use uppercase letters ('T', 'Th', 'D', 'Dh', 'N')."
    ],
    characterInfo: {
      vowels: "అ, ఆ, ఇ, ఈ, ఉ, ఊ, ఋ, ౠ, ఎ, ఏ, ఐ, ఒ, ఓ, ఔ",
      consonants: "క, ఖ, గ, ఘ, ఙ, చ, ఛ, జ, ఝ, ఞ, ట, ఠ, డ, ఢ, ణ, త, థ, ద, ధ, న, ప, ఫ, బ, భ, మ, య, ర, ల, వ, శ, ష, స, హ, ళ, క్ష, ఱ",
      matras: "ా, ి, ీ, ు, ూ, ృ, ౄ, ె, ే, ై, ొ, ో, ౌ",
      specialSigns: "ం (Sunna / Anusvara), ః (Visarga), ్ (Virama)"
    },
    faqs: [
      {
        question: "How do I type Telugu words in English?",
        answer: "Type words phonetically as they sound (e.g., 'namaskaram'). The tool converts your English input into Telugu characters (నమస్కారం)."
      },
      {
        question: "Does the output support Telugu vatthulu (consonant conjuncts)?",
        answer: "Yes, when you type consecutive consonants such as 'mm' in 'amma', the tool automatically creates the proper sub-consonant vatthu (అమ్మ)."
      },
      {
        question: "Can I use the text on WhatsApp and Facebook?",
        answer: "Yes, all output is generated in standard Unicode Telugu, which displays correctly on all operating systems and social media platforms."
      },
      {
        question: "Do I need to download Anu Script or special Telugu fonts?",
        answer: "No. Unlike legacy Anu Script, our output is standard Unicode, which works out of the box on all modern devices without font downloads."
      },
      {
        question: "Is this Telugu typing tool free?",
        answer: "Yes, it is 100% free with unlimited usage, zero ads in the editor, and one-click copying."
      }
    ]
  },
  {
    id: "bengali",
    name: "Bengali",
    nativeName: "বাংলা",
    nativeChar: "অ",
    script: "Bengali Script",
    itcCode: "bn-t-i0-und",
    supported: true,
    route: "/english-to-bengali-typing",
    seoTitle: "English to Bengali Typing Online – Type Bengali Using English Keyboard | TypeHindi",
    metaDescription: "Type Bengali online using your English keyboard. Convert Roman letters into Bengali script, copy your text and practise Bengali typing free on TypeHindi.",
    h1: "English to Bengali Typing Online",
    tagline: "Type in Bengali using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Bengali (বাংলা) is the official language of West Bengal, Tripura, and Bangladesh, spoken by more than 230 million people worldwide, making it one of the most spoken languages on Earth. Recognized for its literary beauty and Nobel-laureate heritage, Bengali utilizes an abugida script with horizontal headlines (matra).",
      "Typing Bengali using traditional layouts like InScript, Bijoy, or National can require memorizing intricate character mappings that differ significantly from standard QWERTY keyboards.",
      "Our English to Bengali typing tool lets you type naturally in English (Banglish style), converting your phonetic keystrokes into clean, precise Unicode Bengali text in real time."
    ],
    howItWorks: [
      "Type Bengali words in English letters according to their pronunciation.",
      "Words like 'nomoshkar' become 'নমস্কার', 'dhonnobad' becomes 'ধন্যবাদ', and 'bangla' becomes 'বাংলা'.",
      "Vowel kar signs, hasant bindings, and juktakshar (যুক্তাক্ষর) conjuncts are created automatically.",
      "Copy your converted text with a single click and use it across documents, messaging apps, and websites."
    ],
    verifiedExamples: [
      { roman: "nomoshkar", native: "নমস্কার", meaning: "Hello / Greetings" },
      { roman: "dhonnobad", native: "ধন্যবাদ", meaning: "Thank you" },
      { roman: "kemon achhen", native: "কেমন আছেন", meaning: "How are you?" },
      { roman: "bangla", native: "বাংলা", meaning: "Bengali" },
      { roman: "shubho sokal", native: "শুভ সকাল", meaning: "Good morning" },
      { roman: "amar naam", native: "আমার নাম", meaning: "My name is" },
      { roman: "bhalo achhi", native: "ভালো আছি", meaning: "I am fine" }
    ],
    typingInstructions: [
      "Type 'o' or 'a' for অ, 'aa' or 'A' for আ, 'i' for ই, 'ee' or 'I' for ঈ, 'u' for উ, 'oo' or 'U' for ঊ.",
      "Type 'e' for এ, 'oi' or 'ai' for ঐ, 'o' for ও, 'ou' or 'au' for ঔ.",
      "For aspirated consonants, add 'h': 'k' → ক, 'kh' → খ, 'g' → গ, 'gh' → ঘ.",
      "For juktakshar (conjuncts), type consonants in succession: 'shukro' → 'শুক্র', 'shanto' → 'শান্ত'.",
      "For anusvara (ং), type 'ng' or 'n': 'bangla' → 'বাংলা'."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Polite Phrases",
        items: [
          { english: "Hello / Greetings", roman: "nomoshkar", native: "নমস্কার" },
          { english: "Thank you", roman: "dhonnobad", native: "ধন্যবাদ" },
          { english: "Good morning", roman: "shubho sokal", native: "শুভ সকাল" },
          { english: "Welcome", roman: "shagotom", native: "স্বাগতম" }
        ]
      },
      {
        category: "Daily Conversations",
        items: [
          { english: "How are you?", roman: "kemon achhen", native: "কেমন আছেন" },
          { english: "I am fine", roman: "ami bhalo achhi", native: "আমি ভালো আছি" },
          { english: "What is your name?", roman: "apnar naam ki", native: "আপনার নাম কি" },
          { english: "See you again", roman: "aabar dekha hobe", native: "আবার দেখা হবে" }
        ]
      }
    ],
    commonIssues: [
      "Distinction between three sibilants: 'sh' for তালব্য শ, 'Sh' for মূর্ধন্য ষ, and 's' for দন্ত্য স.",
      "Khanda-Ta (ৎ) versus normal Ta (ত): type 't\`' or use proper word context (e.g. 'hothat' → 'হঠাৎ').",
      "Chondrobindu (ঁ) is typed as 'n' with special sign or '\^' in phonetic mapping."
    ],
    characterInfo: {
      vowels: "অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, ঔ",
      consonants: "ক, খ, গ, ঘ, ঙ, চ, ছ, ஜ, ঝ, ঞ, ট, ঠ, ড, ঢ, ণ, ত, থ, দ, ধ, ন, প, ফ, ব, ভ, ম, য, র, ল, শ, ষ, স, হ, ড়, ঢ়, য়, ৎ",
      matras: "া, ি, ী, ু, ূ, ৃ, ে, ৈ, ো, ৌ",
      specialSigns: "ং (Anusvara), ঃ (Visarga), ঁ (Chandrabindu), ্ (Hasanta)"
    },
    faqs: [
      {
        question: "How do I type in Bengali using my English keyboard?",
        answer: "Type Bengali words phonetically in English (e.g., 'nomoshkar'). The engine automatically transforms them into Bengali script (নমস্কার)."
      },
      {
        question: "Does it support Bengali juktakshar (conjuncts)?",
        answer: "Yes, typing consecutive consonants automatically binds them into proper juktakshar (e.g., 'bondo' → 'বন্ধ', 'shanto' → 'শান্ত')."
      },
      {
        question: "Can I convert legacy Bijoy text into Unicode here?",
        answer: "This is a phonetic typing tool. For typing, you enter Roman text to get Unicode Bengali directly without needing font converters."
      },
      {
        question: "Can I use this Bengali text on Facebook and WhatsApp?",
        answer: "Yes, the text is pure Unicode and works on all web, desktop, and mobile platforms."
      },
      {
        question: "Is there any cost or subscription?",
        answer: "No, TypeHindi's English to Bengali typing tool is 100% free with unlimited usage."
      }
    ]
  },
  {
    id: "punjabi",
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    nativeChar: "ਅ",
    script: "Gurmukhi Script",
    itcCode: "pa-t-i0-und",
    supported: true,
    route: "/english-to-punjabi-typing",
    seoTitle: "English to Punjabi Typing Online – Type Punjabi Using English Keyboard | TypeHindi",
    metaDescription: "Type Punjabi online using your English keyboard. Convert Roman letters into Gurmukhi script, copy your text and practise Punjabi typing free on TypeHindi.",
    h1: "English to Punjabi Typing Online",
    tagline: "Type in Punjabi using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Punjabi (ਪੰਜਾਬੀ) is spoken by more than 130 million people worldwide, predominantly in Punjab (India), Punjab (Pakistan), and large diaspora communities in Canada, the UK, and the USA. In India, Punjabi is written in the sacred Gurmukhi script (ਗੁਰਮੁਖੀ), standardized by Guru Angad Dev Ji in the 16th century.",
      "Gurmukhi typing on traditional layouts (such as Raavi InScript or Asees) requires dedicated training and memorization of vowel signs (lagamatra) and auxiliary marks (tippi, bindi, addak).",
      "Our English to Punjabi phonetic typing tool lets you type words naturally in Roman English, producing instant, error-free Gurmukhi script for official work, social media, and daily messages."
    ],
    howItWorks: [
      "Type Punjabi words in English letters based on their sound.",
      "For example, 'satshriakal' becomes 'ਸਤਸ਼੍ਰੀਅਕਾਲ', 'dhanwaad' becomes 'ਧੰਨਵਾਦ', and 'punjab' becomes 'ਪੰਜਾਬ'.",
      "Special Gurmukhi signs such as tippi (ੰ), bindi (ਂ), and addak (ੱ) are generated naturally based on word context.",
      "Copy your Punjabi text to the clipboard with one click and paste it anywhere."
    ],
    verifiedExamples: [
      { roman: "satshriakal", native: "ਸਤਸ਼੍ਰੀਅਕਾਲ", meaning: "Greetings / Respectful Hello" },
      { roman: "dhanwaad", native: "ਧੰਨਵਾਦ", meaning: "Thank you" },
      { roman: "ki haal hai", native: "ਕੀ ਹਾਲ ਹੈ", meaning: "How are you?" },
      { roman: "punjab", native: "ਪੰਜਾਬ", meaning: "Punjab" },
      { roman: "shubh savera", native: "ਸ਼ੁਭ ਸਵੇਰ", meaning: "Good morning" },
      { roman: "mera naam", native: "ਮੇਰਾ ਨਾਮ", meaning: "My name is" },
      { roman: "tuhada swagat hai", native: "ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ", meaning: "You are welcome" }
    ],
    typingInstructions: [
      "Type 'a' for ਅ, 'aa' or 'A' for ਆ, 'i' for ਇ, 'ee' or 'I' for ਈ, 'u' for ਉ, 'oo' or 'U' for ਊ.",
      "Type 'e' for ਏ, 'ai' for ਐ, 'o' for ਓ, 'au' for ਔ.",
      "For addak (ੱ - consonant doubling), type the consonant twice: 'kutta' → 'ਕੁੱਤਾ', 'pata' → 'ਪਤਾ'.",
      "For tippi (ੰ) / bindi (ਂ), type 'n' or 'm': 'punjab' → 'ਪੰਜਾਬ', 'maa' → 'ਮਾਂ'.",
      "For pairin letters (letters at the foot like pairin bindi), proper phonetic spellings map automatically."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Polite Expressions",
        items: [
          { english: "Greetings", roman: "satshriakal", native: "ਸਤਸ਼੍ਰੀਅਕਾਲ" },
          { english: "Thank you", roman: "dhanwaad", native: "ਧੰਨਵਾਦ" },
          { english: "Good morning", roman: "shubh savera", native: "ਸ਼ੁਭ ਸਵੇਰ" },
          { english: "Welcome", roman: "ji aaya nu", native: "ਜੀ ਆਇਆਂ ਨੂੰ" }
        ]
      },
      {
        category: "Everyday Conversation",
        items: [
          { english: "How are you?", roman: "ki haal hai", native: "ਕੀ ਹਾਲ ਹੈ" },
          { english: "I am fine", roman: "main theek haan", native: "ਮੈਂ ਠੀਕ ਹਾਂ" },
          { english: "What is your name?", roman: "tuhada naam ki hai", native: "ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ" },
          { english: "Very good", roman: "bahut vadiya", native: "ਬਹੁਤ ਵਧੀਆ" }
        ]
      }
    ],
    commonIssues: [
      "Addak (ੱ) indicates a doubled sound; typing 'kutta' produces the addak automatically.",
      "Bindi (ਂ) vs Tippi (ੰ): Nasalization rule is handled by the phonetic engine based on preceding vowel sign.",
      "Distinguish between 'ਵ' (va) and 'ਬ' (ba) in common Punjabi words like 'vadiya' (ਵਧੀਆ)."
    ],
    characterInfo: {
      vowels: "ੳ, ਅ, ੲ (Vowel Bearers with signs: ਅ, ਆ, ਇ, ਈ, ਉ, ਊ, ਏ, ਐ, ਓ, ਔ)",
      consonants: "ਸ, ਹ, ਕ, ਖ, ਗ, ਘ, ਙ, ਚ, ਛ, ਜ, ਝ, ਞ, ਟ, ਠ, ਡ, ਢ, ਣ, ਤ, ਥ, ਦ, ਧ, ਨ, ਪ, ਫ, ਬ, ਭ, ਮ, ਯ, ਰ, ਲ, ਵ, ੜ",
      matras: "ਾ, ਿ, ੀ, ੁ, ੂ, ੇ, ै, ੋ, ੌ",
      specialSigns: "ਂ (Bindi), ੰ (Tippi), ੱ (Addak), ੍ (Halant)"
    },
    faqs: [
      {
        question: "How do I type Gurmukhi Punjabi using an English keyboard?",
        answer: "Type words in Roman letters as you pronounce them (e.g., 'satshriakal'). The tool converts your typing into Gurmukhi Punjabi (ਸਤਸ਼੍ਰੀਅਕਾਲ)."
      },
      {
        question: "Does this replace Raavi or Asees font?",
        answer: "This tool generates modern Unicode Gurmukhi text. Unlike legacy non-Unicode fonts like Asees, Unicode text can be searched on Google, sent on WhatsApp, and read on any device without downloading fonts."
      },
      {
        question: "Does it support addak and tippi correctly?",
        answer: "Yes, typing doubled consonants (like 'chitta' or 'kutta') and nasal vowels produces proper addak and tippi symbols automatically."
      },
      {
        question: "Can I use this for Punjab government job preparation?",
        answer: "While official typing tests in Punjab require Raavi font InScript typing, this tool is ideal for fast drafting, study notes, and content generation."
      },
      {
        question: "Is the Punjabi typing tool free?",
        answer: "Yes, it is completely free to use with unlimited conversions and instant clipboard copying."
      }
    ]
  },
  {
    id: "marathi",
    name: "Marathi",
    nativeName: "मराठी",
    nativeChar: "अ",
    script: "Devanagari Script",
    itcCode: "mr-t-i0-und",
    supported: true,
    route: "/english-to-marathi-typing",
    seoTitle: "English to Marathi Typing Online – Type Marathi Using English Keyboard | TypeHindi",
    metaDescription: "Type Marathi online using your English keyboard. Convert Roman letters into Marathi script, copy your text and practise Marathi typing free on TypeHindi.",
    h1: "English to Marathi Typing Online",
    tagline: "Type in Marathi using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Marathi (मराठी) is an Indo-Aryan language spoken by more than 83 million people, predominantly in Maharashtra and Goa. Written in the Devanagari script (Balbodh style), Marathi is rich in historical literature, saint poetry, and modern administrative usage.",
      "While Marathi uses the Devanagari script, it has unique characters and pronunciations, such as the retroflex lateral flap 'ळ' (la) and specific schwa-deletion patterns.",
      "TypeHindi's English to Marathi typing tool allows anyone to type Marathi quickly and accurately using simple English letters, without memorizing complex Marathi keyboard layouts."
    ],
    howItWorks: [
      "Type Marathi words in English letters matching the spoken sound.",
      "For example, 'namaskar' becomes 'नमस्कार', 'dhanyavad' becomes 'धन्यवाद', and 'kase aahat' becomes 'कसे आहात'.",
      "The tool resolves Devanagari matras, halant, and jodnikshar (जोडाक्षरे) conjunct letters in real time.",
      "Copy your generated Marathi text with one click for WhatsApp, blogs, social media, or official documents."
    ],
    verifiedExamples: [
      { roman: "namaskar", native: "नमस्कार", meaning: "Hello / Greetings" },
      { roman: "dhanyavad", native: "धन्यवाद", meaning: "Thank you" },
      { roman: "kase aahat", native: "कसे आहात", meaning: "How are you?" },
      { roman: "maharashtra", native: "महाराष्ट्र", meaning: "Maharashtra" },
      { roman: "shubh sakal", native: "शुभ सकाळ", meaning: "Good morning" },
      { roman: "maze naav", native: "माझे नाव", meaning: "My name is" },
      { roman: "aapan kase aahat", native: "आपण कसे आहात", meaning: "How are you? (respectful)" }
    ],
    typingInstructions: [
      "Type 'a' for अ, 'aa' or 'A' for आ, 'i' for इ, 'ee' or 'I' for ई, 'u' for उ, 'oo' or 'U' for ऊ.",
      "Type 'e' for ए, 'ai' for ऐ, 'o' for ओ, 'au' for औ.",
      "For the unique Marathi consonant 'ळ', type 'L' or 'La': 'sakal' → 'सकाळ', 'baal' → 'बाळ'.",
      "For jodnikshar (conjuncts), type consonants consecutively: 'namaskar' → 'नमस्कार', 'shreshta' → 'श्रेष्ठ'.",
      "For anusvara (ं), type 'n' or 'm': 'mumbai' → 'मुंबई', 'sundar' → 'सुंदर'."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Polite Phrases",
        items: [
          { english: "Hello / Greetings", roman: "namaskar", native: "नमस्कार" },
          { english: "Thank you", roman: "dhanyavad", native: "धन्यवाद" },
          { english: "Good morning", roman: "shubh sakal", native: "शुभ सकाळ" },
          { english: "Welcome", roman: "swagat ahe", native: "स्वागत आहे" }
        ]
      },
      {
        category: "Everyday Conversation",
        items: [
          { english: "How are you?", roman: "kase aahat", native: "कसे आहात" },
          { english: "I am fine", roman: "mee majet ahe", native: "मी मजेत आहे" },
          { english: "What is your name?", roman: "tumche naav kay", native: "तुमचे नाव काय" },
          { english: "See you again", roman: "punha bhetu", native: "पुन्हा भेटू" }
        ]
      }
    ],
    commonIssues: [
      "Make sure to use 'L' or proper phonetic spelling for 'ळ' to distinguish it from 'ल'.",
      "Eyelash Ra (ऱ्या / ऱ्हा) can be typed with special slash or combination where supported.",
      "Double vowels create long matras (ी, ू) for correct grammatical spelling."
    ],
    characterInfo: {
      vowels: "अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ, अं, अः",
      consonants: "क, ख, ग, घ, ङ, च, छ, ज, झ, ञ, ट, ठ, ड, ढ, ण, त, थ, द, ध, न, प, फ, ब, भ, म, य, र, ल, व, श, ष, स, ह, ळ, क्ष, ज्ञ",
      matras: "ा, ि, ी, ु, ू, ृ, े, ै, ो, ौ",
      specialSigns: "ं (Anusvara), ः (Visarga), ् (Halant)"
    },
    faqs: [
      {
        question: "How does English to Marathi typing work?",
        answer: "Type words using normal English letters (e.g., 'namaskar'). The tool instantly converts them into authentic Marathi Devanagari script (नमस्कार)."
      },
      {
        question: "How do I type the letter 'ळ' in Marathi?",
        answer: "Simply type capital 'L' or words like 'sakal' or 'baal', and the engine automatically provides 'ळ' (सकाळ / बाळ)."
      },
      {
        question: "Can I use this Marathi text for official government work?",
        answer: "Yes, our tool generates standard Unicode text which is fully compatible with MS Word, official government portals, and web browsers."
      },
      {
        question: "Is this tool free on mobile phones?",
        answer: "Yes, it is 100% free on desktop, laptop, tablets, and mobile phones with responsive design and one-click copy."
      },
      {
        question: "What is the difference between Kruti Dev and this tool?",
        answer: "Kruti Dev is an obsolete non-Unicode font. This tool generates modern Unicode text that works everywhere on the internet without needing font installation."
      }
    ]
  },
  {
    id: "odia",
    name: "Odia",
    nativeName: "ଓଡ଼ିଆ",
    nativeChar: "ଅ",
    script: "Odia Script",
    itcCode: "or-t-i0-und",
    supported: true,
    route: "/english-to-odia-typing",
    seoTitle: "English to Odia Typing Online – Type Odia Using English Keyboard | TypeHindi",
    metaDescription: "Type Odia online using your English keyboard. Convert Roman letters into Odia script, copy your text and practise Odia typing free on TypeHindi.",
    h1: "English to Odia Typing Online",
    tagline: "Type in Odia using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Odia (ଓଡ଼ିଆ) is a classical Indo-Aryan language spoken by over 40 million people, primarily in the state of Odisha and neighboring regions. The Odia script is distinguished by its curved top loops (chula), developed historically because writing on palm leaves with an iron stylus would tear straight fibers.",
      "Because of the circular letterforms and complex yuktakshara (ଯୁକ୍ତାକ୍ଷର) combinations, learning traditional Odia keyboard layouts like InScript or Akruti can be challenging for beginners.",
      "TypeHindi's English to Odia typing tool offers an effortless phonetic typing solution. You type in simple English letters, and the engine transforms them into authentic Unicode Odia text in real time."
    ],
    howItWorks: [
      "Type Odia words phonetically in English letters based on their sound.",
      "Typing 'namaskar' yields 'ନମସ୍କାର', 'dhanyabad' yields 'ଧନ୍ୟବାଦ', and 'odisha' yields 'ଓଡିଶା'.",
      "Vowel matras, halanta, and conjunct consonants are resolved automatically as you type.",
      "Copy your converted text with one click and use it across WhatsApp, MS Word, and government forms."
    ],
    verifiedExamples: [
      { roman: "namaskar", native: "ନମସ୍କାର", meaning: "Hello / Greetings" },
      { roman: "dhanyabad", native: "ଧନ୍ୟବାଦ", meaning: "Thank you" },
      { roman: "kemiti achhanti", native: "କେମିତି ଅଛନ୍ତି", meaning: "How are you?" },
      { roman: "odisha", native: "ଓଡିଶା", meaning: "Odisha" },
      { roman: "shubha sakala", native: "ଶୁଭ ସକାଳ", meaning: "Good morning" },
      { roman: "mora nama", native: "ମୋର ନାମ", meaning: "My name is" },
      { roman: "jagannatha", native: "ଜଗନ୍ନାଥ", meaning: "Lord Jagannath" }
    ],
    typingInstructions: [
      "Type 'a' for ଅ, 'aa' or 'A' for ଆ, 'i' for ଇ, 'ee' or 'I' for ଈ, 'u' for ଉ, 'oo' or 'U' for ଊ.",
      "Type 'e' for ଏ, 'ai' for ଐ, 'o' for ଓ, 'au' for ଔ.",
      "For aspirated consonants, add 'h': 'k' → କ, 'kh' → ଖ, 'g' → ଗ, 'gh' → ଘ.",
      "For Odia yuktakshara (conjuncts), type consonants consecutively: 'namaskar' → 'ନମସ୍କାର'.",
      "For anusvara (ଂ), type 'm' or 'ng': 'singha' → 'ସିଂହ'."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Polite Phrases",
        items: [
          { english: "Hello / Greetings", roman: "namaskar", native: "ନମସ୍କାର" },
          { english: "Thank you", roman: "dhanyabad", native: "ଧନ୍ୟବାଦ" },
          { english: "Good morning", roman: "shubha sakala", native: "ଶୁଭ ସକାଳ" },
          { english: "Welcome", roman: "swagata", native: "ସ୍ୱାଗତ" }
        ]
      },
      {
        category: "Daily Life Expressions",
        items: [
          { english: "How are you?", roman: "kemiti achhanti", native: "କେମିତି ଅଛନ୍ତି" },
          { english: "I am fine", roman: "mu bhala achhi", native: "ମୁଁ ଭଲ ଅଛି" },
          { english: "What is your name?", roman: "apananka nama kana", native: "ଆପଣଙ୍କ ନାମ କଣ" },
          { english: "Good night", roman: "shubha ratri", native: "ଶୁଭ ରାତ୍ରି" }
        ]
      }
    ],
    commonIssues: [
      "Differentiate between 'ଡ' (da) and 'ଡ଼' (dda) with dot underneath using proper spelling context.",
      "Short 'i' (ି) and long 'ee' (ୀ) change the pronunciation and meaning of words.",
      "Retroflex consonants (ଟ, ଠ, ଡ, ଢ, ଣ) use capital letters ('T', 'Th', 'D', 'Dh', 'N')."
    ],
    characterInfo: {
      vowels: "ଅ, ଆ, ଇ, ଈ, ଉ, ଊ, ଋ, ଏ, ଐ, ଓ, ଔ",
      consonants: "କ, ଖ, ଗ, ଘ, ଙ, ଚ, ଛ, ଜ, ଝ, ଞ, ଟ, ଠ, ଡ, ଢ, ଣ, ତ, ଥ, ଦ, ଧ, ନ, ପ, ଫ, ବ, ଭ, ମ, ଯ, ର, ଲ, ଳ, ଶ, ଷ, ସ, ହ, କ୍ଷ, ୟ",
      matras: "ା, ି, ୀ, ୁ, ୂ, ୃ, େ, ୈ, ୋ, ୌ",
      specialSigns: "ଂ (Anusvara), ଃ (Visarga), ୍ (Virama / Halanta)"
    },
    faqs: [
      {
        question: "How do I type Odia using an English keyboard?",
        answer: "Type words in Roman letters as you pronounce them (e.g., 'namaskar'). The tool converts your text into proper Odia script (ନମସ୍କାର)."
      },
      {
        question: "Does this replace Akruti font for Odia typing?",
        answer: "Yes, this tool produces modern Unicode Odia text. Unlike legacy Akruti or Shreelipi fonts, Unicode text displays everywhere without needing special font installations."
      },
      {
        question: "Can I copy the typed Odia text to WhatsApp?",
        answer: "Yes, click 'Copy' and paste directly into WhatsApp, Facebook, Word, or any website."
      },
      {
        question: "Is this Odia typing tool free of cost?",
        answer: "Yes, it is 100% free with unlimited character conversions."
      },
      {
        question: "Does it work on mobile phones?",
        answer: "Yes, the tool is fully mobile-friendly and functions seamlessly on Android and iOS web browsers."
      }
    ]
  },
  {
    id: "urdu",
    name: "Urdu",
    nativeName: "اردو",
    nativeChar: "ا",
    script: "Perso-Arabic (Nastaliq)",
    itcCode: "ur-t-i0-und",
    supported: true,
    route: "/english-to-urdu-typing",
    seoTitle: "English to Urdu Typing Online – Type Urdu Using English Keyboard | TypeHindi",
    metaDescription: "Type Urdu online using your English keyboard. Convert Roman letters into Urdu script, copy your text and practise Urdu typing free on TypeHindi.",
    h1: "English to Urdu Typing Online",
    tagline: "Type in Urdu using your English keyboard with instant, accurate phonetic transliteration.",
    introParagraphs: [
      "Urdu (اردو) is a major Indo-Aryan language spoken by over 170 million people worldwide, celebrated globally for its rich poetic tradition, ghazals, and courtly elegance. Written right-to-left in an extended Perso-Arabic script (predominantly the Nastaliq style), Urdu features a specialized alphabet of 36 letters.",
      "Typing Urdu on standard physical keyboards requires specialized Arabic/Urdu keyboard layouts that differ drastically from the Latin QWERTY layout.",
      "TypeHindi's English to Urdu typing tool makes writing Urdu effortless. You type Roman Urdu in English letters, and our engine automatically renders fluent, authentic Urdu text with full right-to-left (RTL) formatting."
    ],
    howItWorks: [
      "Type words in Roman Urdu using standard English letters.",
      "For example, 'aadab' becomes 'آداب', 'shukriya' becomes 'شکریہ', and 'aap kaise hain' becomes 'آپ کیسے ہیں'.",
      "The tool automatically applies right-to-left (RTL) orientation, letter shaping, and ligatures.",
      "Copy your generated Urdu text with a single click and use it across WhatsApp, Word, or social media."
    ],
    verifiedExamples: [
      { roman: "aadab", native: "آداب", meaning: "Greetings / Respectful Hello" },
      { roman: "shukriya", native: "شکریہ", meaning: "Thank you" },
      { roman: "aap kaise hain", native: "آپ کیسے ہیں", meaning: "How are you?" },
      { roman: "urdu", native: "اردو", meaning: "Urdu" },
      { roman: "khuda hafiz", native: "خدا حافظ", meaning: "Goodbye" },
      { roman: "mera naam", native: "میرا نام", meaning: "My name is" },
      { roman: "khush aamdeed", native: "خوش آمدید", meaning: "Welcome" }
    ],
    typingInstructions: [
      "Type 'a' for ا (Alif), 'aa' for آ (Alif Madda), 'b' for ب, 'p' for پ, 't' for ت, 'T' for ٹ.",
      "Type 's' for س, 'sh' for ش, 'j' for ج, 'ch' for چ, 'h' for ح or ہ, 'kh' for خ.",
      "Type 'd' for د, 'D' for ڈ, 'z' for ز, 'zh' for ژ, 'r' for ر, 'R' for ڑ.",
      "For aspirates (do-chashmi he), type 'h': 'bh' → بھ, 'ph' → پھ, 'th' → تھ, 'chh' → چھ.",
      "The tool operates natively in right-to-left (RTL) mode."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings & Polite Phrases",
        items: [
          { english: "Greetings", roman: "aadab", native: "آداب" },
          { english: "Thank you", roman: "shukriya", native: "شکریہ" },
          { english: "Welcome", roman: "khush aamdeed", native: "خوش آمدید" },
          { english: "Goodbye", roman: "khuda hafiz", native: "خدا حافظ" }
        ]
      },
      {
        category: "Daily Conversation",
        items: [
          { english: "How are you?", roman: "aap kaise hain", native: "آپ کیسے ہیں" },
          { english: "I am fine", roman: "main theek hoon", native: "میں ٹھیک ہوں" },
          { english: "What is your name?", roman: "aapka naam kya hai", native: "آپ کا نام کیا ہے" },
          { english: "Very good", roman: "bahut achha", native: "بہت اچھا" }
        ]
      }
    ],
    commonIssues: [
      "Distinguish between Alif (ا) and Alif Madda (آ) by using 'a' versus 'aa'.",
      "Retroflex consonants (ٹ, ڈ, ڑ) use capital letters ('T', 'D', 'R').",
      "Different 's' letters (س, ص, ث) and 'z' letters (ز, ذ, ض, ظ) are mapped accurately via context."
    ],
    characterInfo: {
      vowels: "ا, و, ی, ے, آ",
      consonants: "ب, پ, ت, ٹ, ث, ج, چ, ح, خ, د, ڈ, ذ, ر, ڑ, ز, ژ, س, ش, ص, ض, ط, ظ, ع, غ, ف, ق, ک, گ, ل, م, ن, ں, و, ہ, ھ, ی, ے",
      matras: "َ (Zabar), ِ (Zer), ُ (Pesh)",
      specialSigns: "ء (Hamza), ّ (Tashdeed), ً (Do Zabar)"
    },
    faqs: [
      {
        question: "How do I type in Urdu using English letters?",
        answer: "Type words in Roman Urdu (e.g., 'shukriya'). The tool automatically converts your input into authentic Urdu script (شکریہ) with proper right-to-left layout."
      },
      {
        question: "Does the editor support Right-to-Left (RTL) orientation?",
        answer: "Yes, the Urdu text box automatically formats text in right-to-left alignment, ensuring seamless reading and editing."
      },
      {
        question: "Can I paste the converted Urdu text into WhatsApp or InPage?",
        answer: "Yes, our tool generates standard Unicode Urdu that can be pasted directly into WhatsApp, Word, InPage Unicode, and social media."
      },
      {
        question: "Is there any software required to type Urdu?",
        answer: "No. You don't need any software or Urdu keyboard packs. The tool works 100% online in your browser."
      },
      {
        question: "Is this typing tool free to use?",
        answer: "Yes, TypeHindi's English to Urdu typing tool is completely free with unlimited word conversion."
      }
    ]
  },
  {
    id: "santhali",
    name: "Santhali",
    nativeName: "ᱥᱟᱱᱛᱟᱲᱤ",
    nativeChar: "ᱚ",
    script: "Ol Chiki Script",
    itcCode: "sat-t-i0-und",
    supported: true,
    route: "/english-to-santhali-typing",
    seoTitle: "English to Santhali Typing Online – Ol Chiki Typing | TypeHindi",
    metaDescription: "Type in Santhali Ol Chiki script online using your English keyboard. Fast, instant phonetic transliteration, character reference, copy/export and practice on TypeHindi.",
    h1: "English to Santhali Typing (Ol Chiki)",
    tagline: "Type in Santhali using your English keyboard with instant phonetic Ol Chiki transliteration.",
    introParagraphs: [
      "Santhali (ᱥᱟᱱᱛᱟᱲᱤ) is an Austroasiatic language spoken by over 7 million people, primarily across Jharkhand, Odisha, West Bengal, Bihar, and Assam. In 1925, Pandit Raghunath Murmu invented the Ol Chiki script (ᱚᱞ ᱪᱤᱠᱤ) specifically to write the Santhali language accurately without phonetic compromises.",
      "Ol Chiki was recognized as an official script and incorporated into the Eighth Schedule of the Indian Constitution in 2003. Unlike many Brahmic scripts, Ol Chiki is an alphabet where vowels and consonants are written as separate full letters rather than abugida matra ligatures."
    ],
    howItWorks: [
      "Type Santhali words using phonetic English spelling in the input box (for example, type 'johar' to get 'ᱡᱚᱦᱟᱨ').",
      "The phonetic engine converts Roman letters directly into authentic Ol Chiki (ᱚᱞ ᱪᱤᱠᱤ) script.",
      "Press space or click copy to copy your Santhali text or use it across any device or application."
    ],
    verifiedExamples: [
      { roman: "johar", native: "ᱡᱚᱦᱟᱨ", meaning: "Greetings / Hello" },
      { roman: "ol chiki", native: "ᱚᱞ ᱪᱤᱠᱤ", meaning: "Ol Chiki Script" },
      { roman: "santhali", native: "ᱥᱟᱱᱛᱟᱲᱤ", meaning: "Santhali Language" }
    ],
    typingInstructions: [
      "Santhali Ol Chiki consists of 30 basic letters (6 rows of 5 letters each).",
      "Each row contains one vowel and four consonants.",
      "Special diacritic modifiers include Mu TTT (ᱸ), Gahla TTT (ᱹ), Relha (ᱺ), Pharka (ᱻ), and Ahod (ᱼ)."
    ],
    commonWordsAndPhrases: [
      {
        category: "Greetings",
        items: [
          { english: "Hello / Greetings", roman: "johar", native: "ᱡᱚᱦᱟᱨ" },
          { english: "Santhali", roman: "santali", native: "ᱥᱟᱱᱛᱟᱲᱤ" }
        ]
      }
    ],
    commonIssues: [
      "Ensure you type standard phonetic combinations such as 'johar' for ᱡᱚᱦᱟᱨ or 'ch' for ᱪ.",
      "Modern operating systems including Windows 10/11 and Android feature full native Unicode support for Ol Chiki."
    ],
    characterInfo: {
      vowels: "ᱚ, ᱟ, ᱤ, ᱩ, ᱮ, ᱳ",
      consonants: "ᱛ, ᱜ, ᱝ, ᱞ, ᱠ, ᱡ, ᱢ, ᱣ, ᱥ, ᱦ, ᱧ, ᱨ, ᱪ, ᱫ, ᱬ, ᱭ, ᱯ, ᱰ, ᱱ, ᱲ, ᱴ, ᱵ, ᱶ, ᱷ",
      matras: "Independent letters are used rather than matras",
      specialSigns: "ᱸ (Mu TTT), ᱹ (Gahla TTT), ᱺ (Relha), ᱻ (Pharka), ᱼ (Ahod)"
    },
    faqs: [
      {
        question: "How does English to Santhali typing work on TypeHindi?",
        answer: "TypeHindi provides an instant phonetic transliteration engine for Santhali. When you type in Roman English characters (e.g., 'johar' or 'ol chiki'), the engine automatically converts them into the authentic Ol Chiki script (ᱡᱚᱦᱟᱨ, ᱚᱞ ᱪᱤᱠᱤ)."
      },
      {
        question: "How can I type Ol Chiki on Windows?",
        answer: "Windows 10 and Windows 11 include native support for the Ol Chiki script. You can add the Santhali language in Windows Language Settings to type using the standard Ol Chiki keyboard layout, or use TypeHindi's online typing tool directly in any browser."
      }
    ]
  }
];

export const SUPPORTED_TYPING_LANGUAGES = INDIAN_LANGUAGES_TYPING.filter(l => l.supported);
