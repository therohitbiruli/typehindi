// Central Multilingual Typing Architecture for TypeHindi
// Supported Languages: English, Hindi, Marathi, Punjabi, Tamil, Bengali

export type LanguageId = "english" | "hindi" | "marathi" | "punjabi" | "tamil" | "bengali";

export interface KeyMapping {
  code: string;
  normal: string;
  shift: string;
  label?: string;
  width?: number;
}

export interface LanguagePassage {
  id: number;
  text: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  wordCount: number;
}

export interface LanguageExamRequirement {
  examName: string;
  targetWpm: number;
  durationMinutes: number;
  maxErrorPercent: number;
  fontOrLayout: string;
  notes: string;
}

export interface LanguageLearningModule {
  introduction: string;
  inputSetup: {
    windows: string;
    mac: string;
    linux: string;
  };
  homeRowGuide: string;
  fingerPlacement: {
    leftHand: string;
    rightHand: string;
  };
  commonCharacters: Array<{
    char: string;
    keyCombo: string;
    type: "vowel" | "consonant" | "matra" | "special";
  }>;
  commonWords: string[];
  sampleSentences: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface LanguageConfig {
  id: LanguageId;
  slug: string; // e.g. "bengali-typing"
  keyboardSlug: string; // e.g. "bengali"
  name: string; // "Bengali"
  nativeName: string; // "বাংলা"
  symbol: string; // "ব"
  script: string; // "Bengali"
  layoutName: string; // "Bengali InScript"
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keyboardRows: KeyMapping[][];
  passages: LanguagePassage[];
  commonWords: string[];
  sentences: string[];
  exams: LanguageExamRequirement[];
  learning: LanguageLearningModule;
}

// ==========================================
// 1. ENGLISH QWERTY KEYBOARD
// ==========================================
const englishKeyboardRows: KeyMapping[][] = [
  [
    { code: "Backquote", normal: "`", shift: "~", label: "`" },
    { code: "Digit1", normal: "1", shift: "!", label: "1" },
    { code: "Digit2", normal: "2", shift: "@", label: "2" },
    { code: "Digit3", normal: "3", shift: "#", label: "3" },
    { code: "Digit4", normal: "4", shift: "$", label: "4" },
    { code: "Digit5", normal: "5", shift: "%", label: "5" },
    { code: "Digit6", normal: "6", shift: "^", label: "6" },
    { code: "Digit7", normal: "7", shift: "&", label: "7" },
    { code: "Digit8", normal: "8", shift: "*", label: "8" },
    { code: "Digit9", normal: "9", shift: "(", label: "9" },
    { code: "Digit0", normal: "0", shift: ")", label: "0" },
    { code: "Minus", normal: "-", shift: "_", label: "-" },
    { code: "Equal", normal: "=", shift: "+", label: "=" },
  ],
  [
    { code: "KeyQ", normal: "q", shift: "Q" },
    { code: "KeyW", normal: "w", shift: "W" },
    { code: "KeyE", normal: "e", shift: "E" },
    { code: "KeyR", normal: "r", shift: "R" },
    { code: "KeyT", normal: "t", shift: "T" },
    { code: "KeyY", normal: "y", shift: "Y" },
    { code: "KeyU", normal: "u", shift: "U" },
    { code: "KeyI", normal: "i", shift: "I" },
    { code: "KeyO", normal: "o", shift: "O" },
    { code: "KeyP", normal: "p", shift: "P" },
    { code: "BracketLeft", normal: "[", shift: "{" },
    { code: "BracketRight", normal: "]", shift: "}" },
    { code: "Backslash", normal: "\\", shift: "|" },
  ],
  [
    { code: "KeyA", normal: "a", shift: "A" },
    { code: "KeyS", normal: "s", shift: "S" },
    { code: "KeyD", normal: "d", shift: "D" },
    { code: "KeyF", normal: "f", shift: "F" },
    { code: "KeyG", normal: "g", shift: "G" },
    { code: "KeyH", normal: "h", shift: "H" },
    { code: "KeyJ", normal: "j", shift: "J" },
    { code: "KeyK", normal: "k", shift: "K" },
    { code: "KeyL", normal: "l", shift: "L" },
    { code: "Semicolon", normal: ";", shift: ":" },
    { code: "Quote", normal: "'", shift: "\"" },
  ],
  [
    { code: "KeyZ", normal: "z", shift: "Z" },
    { code: "KeyX", normal: "x", shift: "X" },
    { code: "KeyC", normal: "c", shift: "C" },
    { code: "KeyV", normal: "v", shift: "V" },
    { code: "KeyB", normal: "b", shift: "B" },
    { code: "KeyN", normal: "n", shift: "N" },
    { code: "KeyM", normal: "m", shift: "M" },
    { code: "Comma", normal: ",", shift: "<" },
    { code: "Period", normal: ".", shift: ">" },
    { code: "Slash", normal: "/", shift: "?" },
  ],
  [{ code: "Space", normal: " ", shift: " ", label: "Space", width: 6 }],
];

// ==========================================
// 2. HINDI DEVANAGARI INSCRIPT KEYBOARD
// ==========================================
const hindiKeyboardRows: KeyMapping[][] = [
  [
    { code: "Backquote", normal: "ॊ", shift: "॒", label: "`" },
    { code: "Digit1", normal: "१", shift: "!", label: "1" },
    { code: "Digit2", normal: "२", shift: "@", label: "2" },
    { code: "Digit3", normal: "३", shift: "#", label: "3" },
    { code: "Digit4", normal: "४", shift: "$", label: "4" },
    { code: "Digit5", normal: "५", shift: "%", label: "5" },
    { code: "Digit6", normal: "६", shift: "^", label: "6" },
    { code: "Digit7", normal: "७", shift: "&", label: "7" },
    { code: "Digit8", normal: "८", shift: "*", label: "8" },
    { code: "Digit9", normal: "९", shift: "(", label: "9" },
    { code: "Digit0", normal: "०", shift: ")", label: "0" },
    { code: "Minus", normal: "-", shift: "ः", label: "-" },
    { code: "Equal", normal: "ृ", shift: "ऋ", label: "=" },
  ],
  [
    { code: "KeyQ", normal: "ौ", shift: "औ" },
    { code: "KeyW", normal: "ै", shift: "ऐ" },
    { code: "KeyE", normal: "ा", shift: "आ" },
    { code: "KeyR", normal: "ी", shift: "ई" },
    { code: "KeyT", normal: "ू", shift: "ऊ" },
    { code: "KeyY", normal: "ब", shift: "भ" },
    { code: "KeyU", normal: "ह", shift: "ङ" },
    { code: "KeyI", normal: "ग", shift: "घ" },
    { code: "KeyO", normal: "द", shift: "ध" },
    { code: "KeyP", normal: "ज", shift: "झ" },
    { code: "BracketLeft", normal: "ड", shift: "ढ" },
    { code: "BracketRight", normal: "़", shift: "ञ" },
    { code: "Backslash", normal: "ॉ", shift: "ऑ" },
  ],
  [
    { code: "KeyA", normal: "ो", shift: "ओ" },
    { code: "KeyS", normal: "े", shift: "ए" },
    { code: "KeyD", normal: "्", shift: "अ" },
    { code: "KeyF", normal: "ि", shift: "इ" },
    { code: "KeyG", normal: "ु", shift: "उ" },
    { code: "KeyH", normal: "प", shift: "फ" },
    { code: "KeyJ", normal: "र", shift: "ऱ" },
    { code: "KeyK", normal: "क", shift: "ख" },
    { code: "KeyL", normal: "त", shift: "थ" },
    { code: "Semicolon", normal: "च", shift: "छ" },
    { code: "Quote", normal: "ट", shift: "ठ" },
  ],
  [
    { code: "KeyZ", normal: "ॆ", shift: "ॎ" },
    { code: "KeyX", normal: "ं", shift: "ँ" },
    { code: "KeyC", normal: "म", shift: "ण" },
    { code: "KeyV", normal: "न", shift: "ऩ" },
    { code: "KeyB", normal: "व", shift: "ऴ" },
    { code: "KeyN", normal: "ल", shift: "ळ" },
    { code: "KeyM", normal: "स", shift: "श" },
    { code: "Comma", normal: ",", shift: "ष" },
    { code: "Period", normal: "।", shift: "श्र" },
    { code: "Slash", normal: "य", shift: "य़" },
  ],
  [{ code: "Space", normal: " ", shift: " ", label: "Space", width: 6 }],
];

// ==========================================
// 3. MARATHI DEVANAGARI INSCRIPT KEYBOARD
// ==========================================
const marathiKeyboardRows: KeyMapping[][] = [
  [
    { code: "Backquote", normal: "`", shift: "~", label: "`" },
    { code: "Digit1", normal: "१", shift: "!", label: "1" },
    { code: "Digit2", normal: "२", shift: "@", label: "2" },
    { code: "Digit3", normal: "३", shift: "#", label: "3" },
    { code: "Digit4", normal: "४", shift: "$", label: "4" },
    { code: "Digit5", normal: "५", shift: "%", label: "5" },
    { code: "Digit6", normal: "६", shift: "^", label: "6" },
    { code: "Digit7", normal: "७", shift: "&", label: "7" },
    { code: "Digit8", normal: "८", shift: "*", label: "8" },
    { code: "Digit9", normal: "९", shift: "(", label: "9" },
    { code: "Digit0", normal: "०", shift: ")", label: "0" },
    { code: "Minus", normal: "-", shift: "ः", label: "-" },
    { code: "Equal", normal: "ृ", shift: "ऋ", label: "=" },
  ],
  [
    { code: "KeyQ", normal: "ौ", shift: "औ" },
    { code: "KeyW", normal: "ै", shift: "ऐ" },
    { code: "KeyE", normal: "ा", shift: "आ" },
    { code: "KeyR", normal: "ी", shift: "ई" },
    { code: "KeyT", normal: "ू", shift: "ऊ" },
    { code: "KeyY", normal: "ब", shift: "भ" },
    { code: "KeyU", normal: "ह", shift: "ङ" },
    { code: "KeyI", normal: "ग", shift: "घ" },
    { code: "KeyO", normal: "द", shift: "ध" },
    { code: "KeyP", normal: "ज", shift: "झ" },
    { code: "BracketLeft", normal: "ड", shift: "ढ" },
    { code: "BracketRight", normal: "़", shift: "ञ" },
    { code: "Backslash", normal: "ॉ", shift: "ऑ" },
  ],
  [
    { code: "KeyA", normal: "ो", shift: "ओ" },
    { code: "KeyS", normal: "े", shift: "ए" },
    { code: "KeyD", normal: "्", shift: "अ" },
    { code: "KeyF", normal: "ि", shift: "इ" },
    { code: "KeyG", normal: "ु", shift: "उ" },
    { code: "KeyH", normal: "प", shift: "फ" },
    { code: "KeyJ", normal: "र", shift: "ऱ" },
    { code: "KeyK", normal: "क", shift: "ख" },
    { code: "KeyL", normal: "त", shift: "थ" },
    { code: "Semicolon", normal: "च", shift: "छ" },
    { code: "Quote", normal: "ट", shift: "ठ" },
  ],
  [
    { code: "KeyZ", normal: "ॆ", shift: "ॎ" },
    { code: "KeyX", normal: "ं", shift: "ँ" },
    { code: "KeyC", normal: "म", shift: "ण" },
    { code: "KeyV", normal: "न", shift: "ऩ" },
    { code: "KeyB", normal: "व", shift: "ऴ" },
    { code: "KeyN", normal: "ल", shift: "ळ" }, // Shift+N produces Marathi 'ळ'
    { code: "KeyM", normal: "स", shift: "श" },
    { code: "Comma", normal: ",", shift: "ष" },
    { code: "Period", normal: ".", shift: "श्र" },
    { code: "Slash", normal: "य", shift: "य़" },
  ],
  [{ code: "Space", normal: " ", shift: " ", label: "Space", width: 6 }],
];

// ==========================================
// 4. PUNJABI GURMUKHI INSCRIPT KEYBOARD
// ==========================================
const punjabiKeyboardRows: KeyMapping[][] = [
  [
    { code: "Backquote", normal: "`", shift: "~", label: "`" },
    { code: "Digit1", normal: "੧", shift: "!", label: "1" },
    { code: "Digit2", normal: "੨", shift: "@", label: "2" },
    { code: "Digit3", normal: "੩", shift: "#", label: "3" },
    { code: "Digit4", normal: "੪", shift: "$", label: "4" },
    { code: "Digit5", normal: "੫", shift: "%", label: "5" },
    { code: "Digit6", normal: "੬", shift: "^", label: "6" },
    { code: "Digit7", normal: "੭", shift: "&", label: "7" },
    { code: "Digit8", normal: "੮", shift: "*", label: "8" },
    { code: "Digit9", normal: "੯", shift: "(", label: "9" },
    { code: "Digit0", normal: "੦", shift: ")", label: "0" },
    { code: "Minus", normal: "-", shift: "ਃ", label: "-" },
    { code: "Equal", normal: "੍ਰ", shift: "ੴ", label: "=" },
  ],
  [
    { code: "KeyQ", normal: "ੌ", shift: "ਔ" },
    { code: "KeyW", normal: "ੈ", shift: "ਐ" },
    { code: "KeyE", normal: "ਾ", shift: "ਆ" },
    { code: "KeyR", normal: "ੀ", shift: "ਈ" },
    { code: "KeyT", normal: "ੂ", shift: "ਊ" },
    { code: "KeyY", normal: "ਬ", shift: "ਭ" },
    { code: "KeyU", normal: "ਹ", shift: "ਙ" },
    { code: "KeyI", normal: "ਗ", shift: "ਘ" },
    { code: "KeyO", normal: "ਦ", shift: "ਧ" },
    { code: "KeyP", normal: "ਜ", shift: "ਝ" },
    { code: "BracketLeft", normal: "ਡ", shift: "ਢ" },
    { code: "BracketRight", normal: "਼", shift: "ਞ" },
    { code: "Backslash", normal: "\\", shift: "|" },
  ],
  [
    { code: "KeyA", normal: "ੋ", shift: "ਓ" },
    { code: "KeyS", normal: "ੇ", shift: "ਏ" },
    { code: "KeyD", normal: "੍", shift: "ਅ" },
    { code: "KeyF", normal: "ਿ", shift: "ਇ" },
    { code: "KeyG", normal: "ੁ", shift: "ਉ" },
    { code: "KeyH", normal: "ਪ", shift: "ਫ" },
    { code: "KeyJ", normal: "ਰ", shift: "ੜ" },
    { code: "KeyK", normal: "ਕ", shift: "ਖ" },
    { code: "KeyL", normal: "ਤ", shift: "ਥ" },
    { code: "Semicolon", normal: "ਚ", shift: "ਛ" },
    { code: "Quote", normal: "ਟ", shift: "ਠ" },
  ],
  [
    { code: "KeyZ", normal: "ੑ", shift: "ੱ" }, // Adhak
    { code: "KeyX", normal: "ੰ", shift: "ਂ" }, // Tippi & Bindi
    { code: "KeyC", normal: "ਮ", shift: "ਣ" },
    { code: "KeyV", normal: "ਨ", shift: "ਞ" },
    { code: "KeyB", normal: "ਵ", shift: "ਲ਼" },
    { code: "KeyN", normal: "ਲ", shift: "ਲ਼" },
    { code: "KeyM", normal: "ਸ", shift: "ਸ਼" },
    { code: "Comma", normal: ",", shift: "ਗ਼" },
    { code: "Period", normal: "।", shift: "ਖ਼" },
    { code: "Slash", normal: "ਯ", shift: "ਫ਼" },
  ],
  [{ code: "Space", normal: " ", shift: " ", label: "Space", width: 6 }],
];

// ==========================================
// 5. TAMIL INSCRIPT KEYBOARD
// ==========================================
const tamilKeyboardRows: KeyMapping[][] = [
  [
    { code: "Backquote", normal: "`", shift: "~", label: "`" },
    { code: "Digit1", normal: "1", shift: "!", label: "1" },
    { code: "Digit2", normal: "2", shift: "@", label: "2" },
    { code: "Digit3", normal: "3", shift: "#", label: "3" },
    { code: "Digit4", normal: "4", shift: "$", label: "4" },
    { code: "Digit5", normal: "5", shift: "%", label: "5" },
    { code: "Digit6", normal: "6", shift: "^", label: "6" },
    { code: "Digit7", normal: "7", shift: "&", label: "7" },
    { code: "Digit8", normal: "8", shift: "*", label: "8" },
    { code: "Digit9", normal: "9", shift: "(", label: "9" },
    { code: "Digit0", normal: "0", shift: ")", label: "0" },
    { code: "Minus", normal: "-", shift: "ஃ", label: "-" }, // Aytham
    { code: "Equal", normal: "=", shift: "+", label: "=" },
  ],
  [
    { code: "KeyQ", normal: "ௌ", shift: "ஔ" },
    { code: "KeyW", normal: "ை", shift: "ஐ" },
    { code: "KeyE", normal: "ா", shift: "ஆ" },
    { code: "KeyR", normal: "ீ", shift: "ஈ" },
    { code: "KeyT", normal: "ூ", shift: "ஊ" },
    { code: "KeyY", normal: "ப", shift: "ப" },
    { code: "KeyU", normal: "ஹ", shift: "ங" },
    { code: "KeyI", normal: "க", shift: "க" },
    { code: "KeyO", normal: "த", shift: "த" },
    { code: "KeyP", normal: "ஜ", shift: "ஜ" },
    { code: "BracketLeft", normal: "ட", shift: "ட" },
    { code: "BracketRight", normal: "ஞ", shift: "ஞ" },
    { code: "Backslash", normal: "\\", shift: "|" },
  ],
  [
    { code: "KeyA", normal: "ோ", shift: "ஓ" },
    { code: "KeyS", normal: "ே", shift: "ஏ" },
    { code: "KeyD", normal: "்", shift: "அ" }, // Pulli
    { code: "KeyF", normal: "ி", shift: "இ" },
    { code: "KeyG", normal: "ு", shift: "உ" },
    { code: "KeyH", normal: "ப", shift: "ப" },
    { code: "KeyJ", normal: "ர", shift: "ற" },
    { code: "KeyK", normal: "க", shift: "க" },
    { code: "KeyL", normal: "த", shift: "த" },
    { code: "Semicolon", normal: "ச", shift: "ச" },
    { code: "Quote", normal: "ட", shift: "ட" },
  ],
  [
    { code: "KeyZ", normal: "ெ", shift: "எ" },
    { code: "KeyX", normal: "ஂ", shift: "ௐ" },
    { code: "KeyC", normal: "ம", shift: "ண" },
    { code: "KeyV", normal: "ந", shift: "ன" },
    { code: "KeyB", normal: "வ", shift: "ழ" },
    { code: "KeyN", normal: "ல", shift: "ள" },
    { code: "KeyM", normal: "ஸ", shift: "ஷ" },
    { code: "Comma", normal: ",", shift: "ஸ" },
    { code: "Period", normal: ".", shift: "ஸ்ரீ" },
    { code: "Slash", normal: "ய", shift: "ய" },
  ],
  [{ code: "Space", normal: " ", shift: " ", label: "Space", width: 6 }],
];

// ==========================================
// 6. BENGALI INSCRIPT KEYBOARD
// ==========================================
const bengaliKeyboardRows: KeyMapping[][] = [
  [
    { code: "Backquote", normal: "`", shift: "~", label: "`" },
    { code: "Digit1", normal: "১", shift: "!", label: "1" },
    { code: "Digit2", normal: "২", shift: "@", label: "2" },
    { code: "Digit3", normal: "৩", shift: "#", label: "3" },
    { code: "Digit4", normal: "৪", shift: "$", label: "4" },
    { code: "Digit5", normal: "৫", shift: "%", label: "5" },
    { code: "Digit6", normal: "৬", shift: "^", label: "6" },
    { code: "Digit7", normal: "৭", shift: "&", label: "7" },
    { code: "Digit8", normal: "৮", shift: "*", label: "8" },
    { code: "Digit9", normal: "৯", shift: "(", label: "9" },
    { code: "Digit0", normal: "০", shift: ")", label: "0" },
    { code: "Minus", normal: "-", shift: "ঃ", label: "-" },
    { code: "Equal", normal: "ৃ", shift: "ঋ", label: "=" },
  ],
  [
    { code: "KeyQ", normal: "ৌ", shift: "ঔ" },
    { code: "KeyW", normal: "ৈ", shift: "ঐ" },
    { code: "KeyE", normal: "া", shift: "আ" },
    { code: "KeyR", normal: "ী", shift: "ঈ" },
    { code: "KeyT", normal: "ূ", shift: "ঊ" },
    { code: "KeyY", normal: "ব", shift: "ভ" },
    { code: "KeyU", normal: "হ", shift: "ঙ" },
    { code: "KeyI", normal: "গ", shift: "ঘ" },
    { code: "KeyO", normal: "দ", shift: "ध" },
    { code: "KeyP", normal: "জ", shift: "ঝ" },
    { code: "BracketLeft", normal: "ড", shift: "ঢ" },
    { code: "BracketRight", normal: "়", shift: "ঞ" },
    { code: "Backslash", normal: "ৎ", shift: "ৠ" },
  ],
  [
    { code: "KeyA", normal: "ো", shift: "ও" },
    { code: "KeyS", normal: "ে", shift: "এ" },
    { code: "KeyD", normal: "্", shift: "অ" }, // Hasant / Virama
    { code: "KeyF", normal: "ি", shift: "ই" },
    { code: "KeyG", normal: "ু", shift: "উ" },
    { code: "KeyH", normal: "প", shift: "ফ" },
    { code: "KeyJ", normal: "র", shift: "ড়" },
    { code: "KeyK", normal: "ক", shift: "খ" },
    { code: "KeyL", normal: "ত", shift: "থ" },
    { code: "Semicolon", normal: "চ", shift: "ছ" },
    { code: "Quote", normal: "ট", shift: "ঠ" },
  ],
  [
    { code: "KeyZ", normal: "৆", shift: "ৡ" },
    { code: "KeyX", normal: "ং", shift: "ঁ" }, // Anusvara & Chandrabindu
    { code: "KeyC", normal: "ম", shift: "ণ" },
    { code: "KeyV", normal: "ন", shift: "ঢ়" },
    { code: "KeyB", normal: "ব", shift: "য়" },
    { code: "KeyN", normal: "ল", shift: "঳" },
    { code: "KeyM", normal: "স", shift: "শ" },
    { code: "Comma", normal: ",", shift: "ষ" },
    { code: "Period", normal: "।", shift: "শ্র" }, // Daari
    { code: "Slash", normal: "য", shift: "য়" },
  ],
  [{ code: "Space", normal: " ", shift: " ", label: "Space", width: 6 }],
];

// ==========================================
// MASTER CONFIGURATION MAP
// ==========================================
export const LANGUAGES_CONFIG: Record<LanguageId, LanguageConfig> = {
  // ----------------------------------------------------
  // ENGLISH
  // ----------------------------------------------------
  english: {
    id: "english",
    slug: "english-typing",
    keyboardSlug: "english",
    name: "English",
    nativeName: "English",
    symbol: "En",
    script: "Latin",
    layoutName: "Standard QWERTY",
    description: "Practice English touch typing, master the home row, improve WPM speed, and prepare for SSC, RRB, and clerical typing exams.",
    metaTitle: "English Typing Practice Online – Improve Speed & Accuracy | TypeHindi",
    metaDescription: "Practice English typing online with easy, medium and hard exercises. Improve English typing speed, accuracy, and prepare for government typing tests with TypeHindi.",
    h1: "English Typing Practice",
    keyboardRows: englishKeyboardRows,
    commonWords: [
      "the", "and", "that", "have", "with", "this", "from", "they", "will", "would",
      "there", "their", "about", "which", "people", "government", "examination", "computer",
      "practice", "accuracy", "keyboard", "language", "important", "candidate", "development"
    ],
    sentences: [
      "The quick brown fox jumps over the lazy dog.",
      "Practice typing regularly to build touch typing muscle memory.",
      "Accuracy is more important than speed in competitive typing exams.",
      "Keep your eyes on the screen and your fingers on the home row keys."
    ],
    passages: [
      {
        id: 1,
        difficulty: "easy",
        category: "Basics",
        wordCount: 44,
        text: "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet. Typing it repeatedly helps build finger dexterity and muscle memory. Always keep your hands resting naturally over the home row keys A, S, D, and F."
      },
      {
        id: 2,
        difficulty: "easy",
        category: "Learning",
        wordCount: 45,
        text: "Touch typing is an essential skill in modern education and workplace communication. When you learn to type without looking at the keyboard, your typing speed increases naturally while mental fatigue decreases. Regular daily practice of twenty minutes will produce dramatic improvements."
      },
      {
        id: 3,
        difficulty: "medium",
        category: "Government Exams",
        wordCount: 65,
        text: "Staff Selection Commission conducts the Combined Higher Secondary Level examination for recruitment to Lower Division Clerk and Data Entry Operator positions. Candidates who qualify Tier-I must appear for the mandatory Skill Test in Tier-II. The English typing test requires a qualifying speed of thirty-five words per minute within a strict ten-minute testing window."
      },
      {
        id: 4,
        difficulty: "medium",
        category: "Technology",
        wordCount: 60,
        text: "Modern computers and digital communications rely extensively on fast keyboard input. Whether writing software documentation, responding to professional emails, or entering administrative data, fluent touch typing saves hundreds of productive hours each year. Consistency, ergonomic posture, and controlled rhythm are the foundational secrets of every professional typist."
      },
      {
        id: 5,
        difficulty: "hard",
        category: "High Court & Clerical",
        wordCount: 82,
        text: "In judicial and high court recruitment examinations, typing speed standards often demand fifty to sixty words per minute with exceptional accuracy thresholds. Candidates are evaluated on passage transcription containing legal terminology, complex punctuation marks, capitalization rules, and numerical citations. Practicing full ten-minute passages without relying on backspaces builds the psychological resilience and physical stamina required to pass under authentic examination conditions."
      }
    ],
    exams: [
      {
        examName: "SSC CHSL / CGL (LDC & JSA)",
        targetWpm: 35,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Standard QWERTY",
        notes: "Qualifying in nature; equivalent to approximately 10,500 key depressions per hour."
      },
      {
        examName: "Delhi High Court (SPA & PA)",
        targetWpm: 40,
        durationMinutes: 10,
        maxErrorPercent: 3,
        fontOrLayout: "Standard QWERTY",
        notes: "Computer typing test followed by English shorthand dictation and transcription."
      },
      {
        examName: "RRB NTPC (Junior Clerk / Typist)",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Standard QWERTY",
        notes: "Administered on standard desktop keyboards with editing tools restricted."
      }
    ],
    learning: {
      introduction: "English typing is the global standard for computer interaction. Utilizing the QWERTY keyboard layout, touch typing allows you to type effortlessly at high speeds by training your fingers to locate every key by muscle memory rather than visual search.",
      inputSetup: {
        windows: "QWERTY is the default input method on all Windows installations. Ensure English (United States or India) is selected from the language bar (Win + Space).",
        mac: "Default keyboard input is ABC / US English. Switch languages using Control + Space or Globe key.",
        linux: "Default layout is US / UK English via xkb keyboard controls."
      },
      homeRowGuide: "Place your left hand fingers on A, S, D, F and your right hand fingers on J, K, L, and Semicolon (;). The F and J keys have small raised tactile bumps to help you position your index fingers without looking down.",
      fingerPlacement: {
        leftHand: "Pinky: A, Ring: S, Middle: D, Index: F (also reaches G, R, T, V, B), Thumb: Left side of Spacebar.",
        rightHand: "Index: J (also reaches H, U, Y, N, M), Middle: K, Ring: L, Pinky: Semicolon ; (also reaches P, Quote, Enter), Thumb: Right side of Spacebar."
      },
      commonCharacters: [
        { char: "E", keyCombo: "E (Left Middle)", type: "vowel" },
        { char: "T", keyCombo: "T (Left Index)", type: "consonant" },
        { char: "A", keyCombo: "A (Left Pinky)", type: "vowel" },
        { char: "O", keyCombo: "O (Right Ring)", type: "vowel" },
        { char: "I", keyCombo: "I (Right Middle)", type: "vowel" },
        { char: "N", keyCombo: "N (Right Index)", type: "consonant" }
      ],
      commonWords: ["the", "be", "to", "of", "and", "a", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at"],
      sampleSentences: [
        "Consistent daily practice creates permanent muscle memory.",
        "Maintain an upright posture and keep wrists floating above the desk.",
        "Do not stop to correct every small typo while building initial rhythm."
      ],
      faqs: [
        {
          question: "What is a good English typing speed for government jobs?",
          answer: "Most central and state government clerical exams (such as SSC CHSL, RRB NTPC, and Banking) mandate a minimum speed of 30 to 35 WPM. High Court positions often require 40 to 50 WPM."
        },
        {
          question: "How can I improve my English typing accuracy?",
          answer: "Slow down your typing cadence until you achieve 98% accuracy on home row keys. Speed follows accuracy naturally; rushing too early creates bad finger habits."
        }
      ]
    }
  },

  // ----------------------------------------------------
  // HINDI
  // ----------------------------------------------------
  hindi: {
    id: "hindi",
    slug: "hindi-typing",
    keyboardSlug: "hindi",
    name: "Hindi",
    nativeName: "हिंदी",
    symbol: "अ",
    script: "Devanagari",
    layoutName: "Hindi InScript / Mangal Unicode",
    description: "Practice Hindi InScript typing on Mangal Unicode font with accurate WPM calculation, keystroke guidance, and official SSC/CPCT exam passages.",
    metaTitle: "Hindi Typing Practice Online – Improve Speed & Accuracy | TypeHindi",
    metaDescription: "Practice Hindi typing online with easy, medium and hard exercises. Master Mangal font InScript keyboard layout, build speed and qualify government typing exams with TypeHindi.",
    h1: "Hindi Typing Practice",
    keyboardRows: hindiKeyboardRows,
    commonWords: [
      "भारत", "सरकार", "परीक्षा", "कंप्यूटर", "कार्यालय", "अधिकारी", "अभ्यास", "महत्वपूर्ण",
      "विकास", "योजना", "अधिकार", "संविधान", "शिक्षा", "विद्यार्थी", "सफलता", "कर्मचारी"
    ],
    sentences: [
      "भारत एक महान देश है और हिंदी हमारी राजभाषा है।",
      "नियमित अभ्यास से आप अपनी हिंदी टाइपिंग गति को दोगुना कर सकते हैं।",
      "सरकारी परीक्षाओं में मंगल फॉन्ट और इनस्क्रिप्ट कीबोर्ड अनिवार्य होता है।",
      "बिना कीबोर्ड देखे टच टाइपिंग तकनीक से टाइप करना सीखें।"
    ],
    passages: [
      {
        id: 1,
        difficulty: "easy",
        category: "सामान्य",
        wordCount: 44,
        text: "भारत एक महान देश है। यहाँ अनेक भाषाएँ बोली जाती हैं। हिंदी हमारी राष्ट्रभाषा है। हमें अपनी भाषा पर गर्व होना चाहिए। भारत की संस्कृति बहुत पुरानी है। यहाँ के लोग मिलजुल कर रहते हैं। हम सबको अपने देश से प्रेम करना चाहिए। शिक्षा हर बच्चे का अधिकार है।"
      },
      {
        id: 2,
        difficulty: "easy",
        category: "पर्यावरण",
        wordCount: 47,
        text: "पर्यावरण की रक्षा करना हम सबका कर्तव्य है। पेड़ हमें ऑक्सीजन देते हैं। हमें अधिक से अधिक पेड़ लगाने चाहिए। जल ही जीवन है इसलिए हमें पानी बचाना चाहिए। प्रदूषण को कम करने के लिए हमें मिलकर प्रयास करने होंगे। स्वच्छ भारत अभियान में सबको भाग लेना चाहिए।"
      },
      {
        id: 3,
        difficulty: "medium",
        category: "सरकारी परीक्षा",
        wordCount: 62,
        text: "भारत सरकार ने डिजिटल इंडिया अभियान के तहत सभी सरकारी कार्यालयों में हिंदी टाइपिंग को अनिवार्य कर दिया है। कर्मचारी चयन आयोग की परीक्षाओं में हिंदी टाइपिंग की गति कम से कम तीस शब्द प्रति मिनट होनी चाहिए। इसके लिए नियमित अभ्यास आवश्यक है। इंस्क्रिप्ट कीबोर्ड लेआउट का उपयोग करने से टाइपिंग की गति में उल्लेखनीय सुधार होता है।"
      },
      {
        id: 4,
        difficulty: "medium",
        category: "संविधान",
        wordCount: 73,
        text: "लोकतंत्र में नागरिकों के अधिकार और कर्तव्य दोनों महत्वपूर्ण हैं। भारतीय संविधान ने प्रत्येक नागरिक को मौलिक अधिकार प्रदान किए हैं जिनमें समानता का अधिकार, स्वतंत्रता का अधिकार, शोषण के विरुद्ध अधिकार, धार्मिक स्वतंत्रता का अधिकार, संस्कृति और शिक्षा संबंधी अधिकार तथा संवैधानिक उपचारों का अधिकार शामिल है। हर नागरिक का कर्तव्य है कि वह राष्ट्रगान और तिरंगे का सम्मान करे।"
      },
      {
        id: 5,
        difficulty: "hard",
        category: "अर्थव्यवस्था",
        wordCount: 83,
        text: "भारतीय अर्थव्यवस्था विश्व की प्रमुख अर्थव्यवस्थाओं में से एक है। सकल घरेलू उत्पाद के मामले में भारत ने उल्लेखनीय प्रगति की है। कृषि क्षेत्र भारतीय अर्थव्यवस्था की रीढ़ है जिसमें देश की एक बड़ी जनसंख्या संलग्न है। औद्योगिक और सेवा क्षेत्र में भी तीव्र विकास हो रहा है। विदेशी प्रत्यक्ष निवेश को आकर्षित करने के लिए सरकार ने मेक इन इंडिया, स्टार्टअप इंडिया और आत्मनिर्भर भारत जैसे अनेक महत्वपूर्ण कार्यक्रम शुरू किए हैं।"
      }
    ],
    exams: [
      {
        examName: "SSC CHSL / CGL (LDC / JSA)",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Mangal Font (InScript / Remington)",
        notes: "Official 10-minute computer-based qualifying typing test; 9,000 key depressions per hour."
      },
      {
        examName: "CPCT Madhya Pradesh",
        targetWpm: 20,
        durationMinutes: 15,
        maxErrorPercent: 5,
        fontOrLayout: "Unicode Mangal",
        notes: "Mandatory certification for MP Patwari, High Court, and clerical appointments."
      },
      {
        examName: "UPSSSC Junior Assistant",
        targetWpm: 25,
        durationMinutes: 5,
        maxErrorPercent: 5,
        fontOrLayout: "Mangal InScript / KrutiDev",
        notes: "Qualifying speed test on desktop computers."
      }
    ],
    learning: {
      introduction: "हिंदी टाइपिंग भारत की सभी प्रमुख सरकारी नौकरियों जैसे SSC, रेलवे, राज्य लोक सेवा आयोग और न्यायालयों में अनिवार्य है। भारत सरकार द्वारा स्वीकृत मानकीकृत इनस्क्रिप्ट (InScript) कीबोर्ड लेआउट वैज्ञानिक और ध्वन्यात्मक सिद्धांतों पर आधारित है।",
      inputSetup: {
        windows: "Windows Settings > Time & Language > Language > Add Hindi > Options > Keyboards > Add InScript (या Hindi Phonetic). Alt + Shift दबाकर भाषा बदलें।",
        mac: "System Settings > Keyboard > Text Input > Input Sources > Add Devanagari InScript.",
        linux: "Settings > Region & Language > Input Sources > Add Hindi (Inscript)."
      },
      homeRowGuide: "होम रो पर बायाँ हाथ A(ो), S(े), D(्/अ), F(ि/इ), G(ु/उ) पर और दायाँ हाथ H(प), J(र), K(क), L(त), ;(च), '(ट) पर रखें। बायीं तरफ स्वर व मात्राएं और दायीं तरफ व्यंजन स्थित होते हैं।",
      fingerPlacement: {
        leftHand: "कनिष्ठिका: ो (A), अनामिका: े (S), मध्यमा: ्/अ (D), तर्जनी: ि/इ (F) व ु/उ (G), अँगूठा: स्पेसबार।",
        rightHand: "तर्जनी: प (H) व र (J), मध्यमा: क (K), अनामिका: त (L), कनिष्ठिका: च (;) व ट ('), अँगूठा: स्पेसबार।"
      },
      commonCharacters: [
        { char: "क", keyCombo: "K (Normal)", type: "consonant" },
        { char: "ख", keyCombo: "Shift + K", type: "consonant" },
        { char: "ा (आ मात्रा)", keyCombo: "E (Normal)", type: "matra" },
        { char: "ि (इ मात्रा)", keyCombo: "F (Normal)", type: "matra" },
        { char: "् (हलंत)", keyCombo: "D (Normal)", type: "special" },
        { char: "ं (अनुस्वार)", keyCombo: "X (Normal)", type: "special" }
      ],
      commonWords: ["भारत", "सरकार", "समय", "काम", "लोग", "देश", "शिक्षा", "विकास", "अधिकार", "पुस्तक"],
      sampleSentences: [
        "प्रतिदिन बीस मिनट हिंदी इनस्क्रिप्ट का अभ्यास करें।",
        "हलंत (D की) का प्रयोग आधे अक्षर बनाने के लिए किया जाता है।",
        "सरकारी परीक्षाओं में मंगल फॉन्ट पर ही टेस्ट लिया जाता है।"
      ],
      faqs: [
        {
          question: "SSC CHSL में हिंदी टाइपिंग के लिए कौन सा फॉन्ट चाहिए?",
          answer: "SSC की आधिकारिक अधिसूचना के अनुसार LDC/JSA के लिए केवल मंगल (Mangal) फॉन्ट मान्य है। अन्य फॉन्ट में टाइप करने पर अयोग्य घोषित कर दिया जाता है।"
        },
        {
          question: "कुर्तीदेव और इनस्क्रिप्ट में कौन सा बेहतर है?",
          answer: "इनस्क्रिप्ट भारत सरकार का आधिकारिक मानकीकृत लेआउट है जो सीधे यूनिकोड मंगल में टाइप करता है। आधुनिक सरकारी परीक्षाओं और ऑनलाइन पोर्टलों पर इनस्क्रिप्ट को प्राथमिकता दी जाती है।"
        }
      ]
    }
  },

  // ----------------------------------------------------
  // MARATHI
  // ----------------------------------------------------
  marathi: {
    id: "marathi",
    slug: "marathi-typing",
    keyboardSlug: "marathi",
    name: "Marathi",
    nativeName: "मराठी",
    symbol: "म",
    script: "Devanagari",
    layoutName: "Marathi InScript (Devanagari)",
    description: "Practice Marathi typing online with InScript keyboard, master Marathi characters like 'ळ', improve WPM speed, and prepare for MPSC and court clerk exams.",
    metaTitle: "Marathi Typing Practice Online – Improve Speed & Accuracy | TypeHindi",
    metaDescription: "Practice Marathi typing online with easy, medium and hard exercises. Master Marathi InScript keyboard layout, build speed and pass MPSC & High Court clerk typing tests with TypeHindi.",
    h1: "Marathi Typing Practice",
    keyboardRows: marathiKeyboardRows,
    commonWords: [
      "महाराष्ट्र", "शासकीय", "कार्यालय", "मराठी", "टायपिंग", "विद्यार्थी", "परीक्षेची", "अधिकारी",
      "संस्कृती", "भाषा", "अभ्यास", "महत्वाचे", "कौशल्य", "विकास", "रोजगार", "संगणक"
    ],
    sentences: [
      "महाराष्ट्र ही संतांची आणि शूरवीरांची पवित्र भूमी आहे.",
      "मराठी टायपिंगचा नियमित सराव केल्याने टायपिंग गती झपाट्याने वाढते.",
      "शासकीय लिपिक पदासाठी तीस शब्द प्रति मिनिट गती अनिवार्य आहे.",
      "इनस्क्रिप्ट कीबोर्डवर Shift + N दाबून 'ळ' अक्षर सहज टाईप करता येते."
    ],
    passages: [
      {
        id: 1,
        difficulty: "easy",
        category: "सामान्य",
        wordCount: 42,
        text: "महाराष्ट्र हे भारताचे एक पुरोगामी व समृद्ध राज्य आहे. मुंबई ही महाराष्ट्राची आर्थिक राजधानी आहे. मराठी ही आमची मातृभाषा असून ती अत्यंत समृद्ध आहे. संतांची भूमी म्हणून महाराष्ट्राची ओळख जगभर आहे. छत्रपती शिवाजी महाराजांचा आदर्श आम्ही सदैव जपतो."
      },
      {
        id: 2,
        difficulty: "easy",
        category: "शिक्षण",
        wordCount: 45,
        text: "संगणकावर मराठीत काम करणे आजच्या काळात अत्यंत आवश्यक बनले आहे. शाळा आणि महाविद्यालयांमध्ये मराठी टायपिंगचे प्रशिक्षण दिले जाते. नियमित सरावाने विद्यार्थी कमी वेळेत जास्त शब्द टाईप करू शकतात. शुद्धलेखनाकडे लक्ष दिल्यास परीक्षेत जास्त गुण मिळतात."
      },
      {
        id: 3,
        difficulty: "medium",
        category: "शासकीय नोकरी",
        wordCount: 65,
        text: "महाराष्ट्र लोकसेवा आयोग (MPSC) आणि विविध जिल्हा निवड समित्यांच्या लिपिक-टंकलेखक भरतीसाठी मराठी टायपिंग परीक्षा अनिवार्य असते. परीक्षेत उत्तीर्ण होण्यासाठी किमान तीस शब्द प्रति मिनिट (30 WPM) गती आणि नव्वद टक्क्यांहून अधिक अचूकता असणे आवश्यक मानले जाते. इनस्क्रिप्ट कीबोर्डच्या योग्य वापरामुळे बोटांची हालचाल गतिमान होते."
      },
      {
        id: 4,
        difficulty: "medium",
        category: "संस्कृती व समाज",
        wordCount: 68,
        text: "महाराष्ट्राला समृद्ध सांस्कृतिक आणि ऐतिहासिक वारसा लाभला आहे. संत ज्ञानेश्वर, संत तुकाराम आणि समर्थ रामदास स्वामी यांनी आपल्या साहित्यातून समाजाला समता आणि बंधुभावाची शिकवण दिली. आजच्या डिजिटल युगातही हा विचार इंटरनेट आणि सोशल मीडियाच्या माध्यमातून मराठी भाषेत जिवंत ठेवणे ही आपल्या सर्वांची सामूहिक जबाबदारी आहे."
      },
      {
        id: 5,
        difficulty: "hard",
        category: "प्रशासन व ई-गव्हर्नन्स",
        wordCount: 80,
        text: "महाराष्ट्र शासनाने सर्व शासकीय आणि निमशासकीय कार्यालयांमध्ये कामकाजासाठी मराठी भाषेचा वापर १०० टक्के सक्तीचा केला आहे. ई-गव्हर्नन्स आणि डिजिटल सेवा प्रणालीमध्ये युनिकोड मराठी फॉन्टचा वापर अनिवार्य करण्यात आला आहे. न्यायालयीन कामकाज आणि प्रशासकीय पत्रव्यवहारात अचूक शब्दांकन व वेगवान टंकलेखन कौशल्य असणाऱ्या कर्मचाऱ्यांना मोठी मागणी आहे. यासाठी दररोज दहा मिनिटांचा प्रत्यक्ष सराव करणे आवश्यक आहे."
      }
    ],
    exams: [
      {
        examName: "MPSC Clerk-Typist Exam",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Unicode Marathi InScript",
        notes: "Mandatory qualification for Group C clerk posts across Maharashtra government departments."
      },
      {
        examName: "Bombay High Court Clerk / Stenographer",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Devanagari InScript",
        notes: "Passage transcription test evaluating typing speed and legal Marathi orthography."
      },
      {
        examName: "GCC-TBC (Maharashtra State Typing Certificate)",
        targetWpm: 30,
        durationMinutes: 7,
        maxErrorPercent: 5,
        fontOrLayout: "InScript / ISM",
        notes: "Official state board typing certification required for clerical government recruitments."
      }
    ],
    learning: {
      introduction: "मराठी टायपिंग शिकणे आज शासकीय व निमशासकीय नोकऱ्या मिळवण्यासाठी अत्यंत गरजेचे आहे. मराठी भाषा देवनागरी लिपीत लिहिली जाते. भारत सरकारचे इनस्क्रिप्ट (InScript) कीबोर्ड लेआउट मराठी टायपिंगसाठी सर्वाधिक शास्त्रोक्त व वेगवान माध्यम आहे.",
      inputSetup: {
        windows: "Windows Settings > Time & Language > Language > Add Marathi > InScript Keyboard निवडा. Alt + Shift दाबून मराठी मोड चालू करा.",
        mac: "System Preferences > Keyboard > Input Sources > Add Marathi InScript.",
        linux: "Settings > Region & Language > Input Sources > Marathi (Inscript)."
      },
      homeRowGuide: "डावा हात A(ो), S(े), D(्/अ), F(ि/इ), G(ु/उ) वर आणि उजवा हात H(प), J(र), K(क), L(त), ;(च), '(ट) वर ठेवा. होम रोवरील बोटांची नैसर्गिक पकड जलद टायपिंगचा पाया आहे.",
      fingerPlacement: {
        leftHand: "कनिष्ठिका: ो (A), अनामिका: े (S), मधले बोट: ्/अ (D), तर्जनी: ि/इ (F) व ु/उ (G), अंगठा: स्पेसबार.",
        rightHand: "तर्जनी: प (H) व र (J), मधले बोट: क (K), अनामिका: त (L), कनिष्ठिका: च (;) व ट ('), अंगठा: स्पेसबार."
      },
      commonCharacters: [
        { char: "ळ", keyCombo: "Shift + N (Marathi Special)", type: "consonant" },
        { char: "क", keyCombo: "K (Normal)", type: "consonant" },
        { char: "् (हलंत)", keyCombo: "D (Normal)", type: "special" },
        { char: "ा (आ मात्रा)", keyCombo: "E (Normal)", type: "matra" },
        { char: "ी (ई मात्रा)", keyCombo: "R (Normal)", type: "matra" },
        { char: "ं (अनुस्वार)", keyCombo: "X (Normal)", type: "special" }
      ],
      commonWords: ["महाराष्ट्र", "आहे", "होते", "शासकीय", "कार्यालय", "लोक", "काम", "पुणे", "मुंबई", "मराठी"],
      sampleSentences: [
        "मराठीतील 'ळ' हे अक्षर Shift + N दाबल्याने टाईप होते.",
        "जोडाक्षर टाईप करण्यासाठी दोन व्यंजनांच्या मध्ये 'D' (हलंत) दाबा.",
        "दररोज TypeHindi वर 10 मिनिटे सराव करून आपली गती तपासा."
      ],
      faqs: [
        {
          question: "मराठीत 'ळ' अक्षर कसे टाईप करावे?",
          answer: "इनस्क्रिप्ट कीबोर्डवर Shift की दाबून ठेवून 'N' की दाबा (Shift + N). यामुळे 'ळ' हे अक्षर टाईप होते."
        },
        {
          question: "MPSC लिपिक परीक्षेसाठी मराठी टायपिंगची गती किती लागते?",
          answer: "MPSC क्लर्क-टायपिस्ट परीक्षेसाठी किमान ३० शब्द प्रति मिनिट (30 WPM) गती आवश्यक असते. सोबतच GCC-TBC प्रमाणपत्र ग्राह्य धरले जाते."
        }
      ]
    }
  },

  // ----------------------------------------------------
  // PUNJABI
  // ----------------------------------------------------
  punjabi: {
    id: "punjabi",
    slug: "punjabi-typing",
    keyboardSlug: "punjabi",
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    symbol: "ਪ",
    script: "Gurmukhi",
    layoutName: "Punjabi Gurmukhi InScript",
    description: "Practice Punjabi Gurmukhi typing online with official InScript keyboard, prepare for PSSSB clerk exams, and master Gurmukhi vowels, tippi, and adhak.",
    metaTitle: "Punjabi Typing Practice Online – Improve Speed & Accuracy | TypeHindi",
    metaDescription: "Practice Punjabi Gurmukhi typing online with easy, medium and hard exercises. Master Gurmukhi InScript keyboard, build speed and pass PSSSB clerk exams with TypeHindi.",
    h1: "Punjabi Typing Practice",
    keyboardRows: punjabiKeyboardRows,
    commonWords: [
      "ਪੰਜਾਬ", "ਸਰਕਾਰ", "ਪ੍ਰੀਖਿਆ", "ਕੰਪਿਊਟਰ", "ਵਿਦਿਆਰਥੀ", "ਅਭਿਆਸ", "ਕਲਰਕ", "ਮਿਹਨਤ",
      "ਸਫਲਤਾ", "ਅਧਿਕਾਰੀ", "ਕੰਮ", "ਸਿੱਖਿਆ", "ਭਾਰਤ", "ਕੀਬੋਰਡ", "ਗੁਰਮੁਖੀ", "ਰਫਤਾਰ"
    ],
    sentences: [
      "ਪੰਜਾਬੀ ਸਾਡੀ ਮਾਂ ਬੋਲੀ ਹੈ ਅਤੇ ਸਾਨੂੰ ਇਸ ਉੱਤੇ ਮਾਣ ਹੈ।",
      "ਪੀ.ਐਸ.ਐਸ.ਐਸ.ਬੀ ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਲਈ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਲਾਜ਼ਮੀ ਹੈ।",
      "ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ ਕਰਨ ਨਾਲ ਗੁਰਮੁਖੀ ਟਾਈਪਿੰਗ ਦੀ ਰਫਤਾਰ ਤੇਜ਼ ਹੁੰਦੀ ਹੈ।",
      "ਟਿੱਪੀ ਅਤੇ ਅੱਧਕ ਦੀ ਸਹੀ ਵਰਤੋਂ ਨਾਲ ਸ਼ੁੱਧ ਪੰਜਾਬੀ ਲਿਖੀ ਜਾ ਸਕਦੀ ਹੈ।"
    ],
    passages: [
      {
        id: 1,
        difficulty: "easy",
        category: "ਆਮ ਜਾਣਕਾਰੀ",
        wordCount: 42,
        text: "ਪੰਜਾਬ ਭਾਰਤ ਦਾ ਇੱਕ ਬਹੁਤ ਹੀ ਖੂਬਸੂਰਤ ਅਤੇ ਉਪਜਾਊ ਸੂਬਾ ਹੈ। ਪੰਜਾਬੀ ਸਾਡੀ ਮਿੱਠੀ ਮਾਂ ਬੋਲੀ ਹੈ। ਪੰਜਾਬ ਦੀ ਧਰਤੀ ਗੁਰੂਆਂ, ਪੀਰਾਂ ਅਤੇ ਯੋਧਿਆਂ ਦੀ ਪਵਿੱਤਰ ਧਰਤੀ ਮੰਨੀ ਜਾਂਦੀ ਹੈ। ਇੱਥੋਂ ਦੇ ਕਿਸਾਨ ਬਹੁਤ ਮਿਹਨਤੀ ਹਨ ਅਤੇ ਪੂਰੇ ਦੇਸ਼ ਦਾ ਢਿੱਡ ਭਰਦੇ ਹਨ।"
      },
      {
        id: 2,
        difficulty: "easy",
        category: "ਸਿੱਖਿਆ",
        wordCount: 44,
        text: "ਅੱਜ ਦੇ ਕੰਪਿਊਟਰ ਯੁੱਗ ਵਿੱਚ ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਟਾਈਪਿੰਗ ਸਿੱਖਣਾ ਹਰ ਵਿਦਿਆਰਥੀ ਲਈ ਲਾਹੇਵੰਦ ਹੈ। ਸਰਕਾਰੀ ਦਫ਼ਤਰਾਂ ਵਿੱਚ ਸਾਰਾ ਕੰਮਕਾਜ ਪੰਜਾਬੀ ਵਿੱਚ ਹੁੰਦਾ ਹੈ। ਨਿਰੰਤਰ ਅਭਿਆਸ ਨਾਲ ਅਸੀਂ ਆਪਣੀ ਉਂਗਲਾਂ ਦੀ ਗਤੀ ਵਧਾ ਸਕਦੇ ਹਾਂ ਅਤੇ ਗਲਤੀਆਂ ਨੂੰ ਘਟਾ ਸਕਦੇ ਹਾਂ।"
      },
      {
        id: 3,
        difficulty: "medium",
        category: "ਸਰਕਾਰੀ ਪ੍ਰੀਖਿਆਵਾਂ",
        wordCount: 65,
        text: "ਪੰਜਾਬ ਅਧੀਨ ਸੇਵਾਵਾਂ ਚੋਣ ਬੋਰਡ (PSSSB) ਵੱਲੋਂ ਕਲਰਕ, ਡਾਟਾ ਐਂਟਰੀ ਆਪਰੇਟਰ ਅਤੇ ਹੋਰ ਅਸਾਮੀਆਂ ਲਈ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਟੈਸਟ ਲਿਆ ਜਾਂਦਾ ਹੈ। ਇਸ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਉਮੀਦਵਾਰਾਂ ਨੂੰ ਤੀਹ ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ (30 WPM) ਦੀ ਰਫਤਾਰ ਨਾਲ ਟਾਈਪ ਕਰਨਾ ਹੁੰਦਾ ਹੈ। ਗੁਰਮੁਖੀ ਇਨਸਕ੍ਰਿਪਟ ਅਤੇ ਰਾਵੀ ਫੌਂਟ ਦੀ ਵਰਤੋਂ ਨਾਲ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਆਸਾਨੀ ਨਾਲ ਸਿੱਖੀ ਜਾ ਸਕਦੀ ਹੈ।"
      },
      {
        id: 4,
        difficulty: "medium",
        category: "ਸੱਭਿਆਚਾਰ",
        wordCount: 66,
        text: "ਪੰਜਾਬ ਦਾ ਅਮੀਰ ਵਿਰਸਾ ਅਤੇ ਸੱਭਿਆਚਾਰ ਪੂਰੀ ਦੁਨੀਆ ਵਿੱਚ ਮਸ਼ਹੂਰ ਹੈ। ਭੰਗੜਾ ਅਤੇ ਗਿੱਧਾ ਪੰਜਾਬ ਦੇ ਲੋਕ ਨਾਚ ਹਨ ਜੋ ਖੁਸ਼ੀ ਦੇ ਮੌਕਿਆਂ ਉੱਤੇ ਪਾਏ ਜਾਂਦੇ ਹਨ। ਗੁਰਮੁਖੀ ਅੱਖਰਾਂ ਵਿੱਚ ਲਿਖਿਆ ਸਾਹਿਤ ਸਾਡੇ ਇਤਿਹਾਸ ਨੂੰ ਸੰਭਾਲ ਕੇ ਰੱਖਦਾ ਹੈ। ਨੌਜਵਾਨ ਪੀੜ੍ਹੀ ਨੂੰ ਇੰਟਰਨੈੱਟ ਉੱਤੇ ਪੰਜਾਬੀ ਲਿਖਣ ਅਤੇ ਪੜ੍ਹਨ ਦੀ ਆਦਤ ਪਾਉਣੀ ਚਾਹੀਦੀ ਹੈ।"
      },
      {
        id: 5,
        difficulty: "hard",
        category: "ਪ੍ਰਸ਼ਾਸਨ ਅਤੇ ਵਿਕਾਸ",
        wordCount: 78,
        text: "ਪੰਜਾਬ ਸਰਕਾਰ ਨੇ ਰਾਜ ਭਾਸ਼ਾ ਐਕਟ ਦੇ ਅਧੀਨ ਸਾਰੇ ਪ੍ਰਸ਼ਾਸਨਿਕ ਕੰਮਾਂ ਅਤੇ ਨੋਟੀਫਿਕੇਸ਼ਨਾਂ ਵਿੱਚ ਪੰਜਾਬੀ ਨੂੰ ਲਾਜ਼ਮੀ ਕੀਤਾ ਹੈ। ਈ-ਗਵਰਨੈਂਸ ਪੋਰਟਲਾਂ ਰਾਹੀਂ ਨਾਗਰਿਕਾਂ ਨੂੰ ਮਿਲਣ ਵਾਲੀਆਂ ਸੇਵਾਵਾਂ ਹੁਣ ਪੰਜਾਬੀ ਵਿੱਚ ਉਪਲਬਧ ਹਨ। ਨਿਆਂਇਕ ਕੰਪਲੈਕਸਾਂ ਅਤੇ ਸਕੱਤਰੇਤਾਂ ਵਿੱਚ ਤੇਜ਼ ਟਾਈਪਿਸਟਾਂ ਦੀ ਮੰਗ ਲਗਾਤਾਰ ਵਧ ਰਹੀ ਹੈ। ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਕਾਮਯਾਬੀ ਹਾਸਲ ਕਰਨ ਲਈ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਰੋਜ਼ਾਨਾ ਦਸ ਮਿੰਟ ਦੇ ਸਿਮੂਲੇਟਰ ਟੈਸਟ ਦੇਣੇ ਚਾਹੀਦੇ ਹਨ।"
      }
    ],
    exams: [
      {
        examName: "PSSSB Clerk & DEO Exam",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 8,
        fontOrLayout: "Raavi Font (InScript Layout)",
        notes: "Mandatory qualification test in Gurmukhi Unicode font for all Punjab state government clerk recruitments."
      },
      {
        examName: "Punjab & Haryana High Court Clerk",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Gurmukhi InScript",
        notes: "Qualifying speed test evaluating paragraph accuracy and error limit compliance."
      }
    ],
    learning: {
      introduction: "ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਸਿੱਖਣਾ ਪੰਜਾਬ ਵਿੱਚ ਸਰਕਾਰੀ ਨੌਕਰੀਆਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਇੱਕ ਜ਼ਰੂਰੀ ਸ਼ਰਤ ਹੈ। ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਲਿਖੀ ਜਾਂਦੀ ਹੈ। ਭਾਰਤ ਸਰਕਾਰ ਵੱਲੋਂ ਪ੍ਰਮਾਣਿਤ ਇਨਸਕ੍ਰਿਪਟ (InScript) ਕੀਬੋਰਡ ਲੇਆਉਟ ਰਾਵੀ (Raavi) ਫੌਂਟ ਵਿੱਚ ਟਾਈਪ ਕਰਨ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਅਤੇ ਸਰਕਾਰੀ ਤੌਰ 'ਤੇ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਤਰੀਕਾ ਹੈ।",
      inputSetup: {
        windows: "Windows Settings > Time & Language > Language > Add Punjabi (India) > Keyboard ਵਿੱਚ Punjabi InScript ਚੁਣੋ। Windows + Space ਦਬਾ ਕੇ ਭਾਸ਼ਾ ਬਦਲੋ।",
        mac: "System Settings > Keyboard > Input Sources > Add Punjabi Gurmukhi.",
        linux: "Settings > Region & Language > Input Sources > Punjabi (Inscript)."
      },
      homeRowGuide: "ਖੱਬਾ ਹੱਥ A(ੋ), S(ੇ), D(੍/ਅ), F(ਿ/ਇ), G(ੁ/ਉ) ਉੱਤੇ ਰੱਖੋ ਅਤੇ ਸੱਜਾ ਹੱਥ H(ਪ), J(ਰ), K(ਕ), L(ਤ), ;(ਚ), '(ਟ) ਉੱਤੇ ਰੱਖੋ। ਉਂਗਲਾਂ ਨੂੰ ਹੋਮ ਰੋ ਉੱਤੇ ਸਥਿਰ ਰੱਖਣਾ ਤੇਜ਼ ਟਾਈਪਿੰਗ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਰਾਜ਼ ਹੈ।",
      fingerPlacement: {
        leftHand: "ਚੀਚੀ: ੋ (A), ਅਨਾਮਿਕਾ: ੇ (S), ਵਿਚਕਾਰਲੀ: ੍/ਅ (D), ਤਰਜਨੀ: ਿ/ਇ (F) ਅਤੇ ੁ/ਉ (G), ਅੰਗੂਠਾ: ਸਪੇਸਬਾਰ।",
        rightHand: "ਤਰਜਨੀ: ਪ (H) ਅਤੇ ਰ (J), ਵਿਚਕਾਰਲੀ: ਕ (K), ਅਨਾਮਿਕਾ: ਤ (L), ਚੀਚੀ: ਚ (;) ਅਤੇ ਟ ('), ਅੰਗੂਠਾ: ਸਪੇਸਬਾਰ।"
      },
      commonCharacters: [
        { char: "ਕ", keyCombo: "K (Normal)", type: "consonant" },
        { char: "ਖ", keyCombo: "Shift + K", type: "consonant" },
        { char: "ਾ (ਕੰਨਾ)", keyCombo: "E (Normal)", type: "matra" },
        { char: "ਿ (ਸਿਹਾਰੀ)", keyCombo: "F (Normal)", type: "matra" },
        { char: "ੀ (ਬਿਹਾਰੀ)", keyCombo: "R (Normal)", type: "matra" },
        { char: "ੱ (ਅੱਧਕ)", keyCombo: "Shift + Z", type: "special" },
        { char: "ੰ (ਟਿੱਪੀ)", keyCombo: "X (Normal)", type: "special" },
        { char: "ਂ (ਬਿੰਦੀ)", keyCombo: "Shift + X", type: "special" }
      ],
      commonWords: ["ਪੰਜਾਬ", "ਸਰਕਾਰ", "ਹੈ", "ਹਨ", "ਨੂੰ", "ਵਿੱਚ", "ਕੰਮ", "ਲੋਕ", "ਅਤੇ", "ਦੀ"],
      sampleSentences: [
        "ਅੱਧਕ ਟਾਈਪ ਕਰਨ ਲਈ Shift + Z ਦਬਾਓ।",
        "ਟਿੱਪੀ ਲਈ X ਕੀ ਅਤੇ ਬਿੰਦੀ ਲਈ Shift + X ਦਬਾਓ।",
        "ਪੀ.ਐਸ.ਐਸ.ਐਸ.ਬੀ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਰਾਵੀ ਫੌਂਟ ਇਨਸਕ੍ਰਿਪਟ ਹੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
      ],
      faqs: [
        {
          question: "PSSSB ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਲਈ ਕਿਹੜਾ ਕੀਬੋਰਡ ਲੇਆਉਟ ਚਾਹੀਦਾ ਹੈ?",
          answer: "ਪੰਜਾਬ ਸਰਕਾਰ ਵੱਲੋਂ PSSSB ਅਤੇ ਹਾਈ ਕੋਰਟ ਕਲਰਕ ਪ੍ਰੀਖਿਆਵਾਂ ਲਈ ਰਾਵੀ (Raavi) ਫੌਂਟ ਨਾਲ ਗੁਰਮੁਖੀ ਇਨਸਕ੍ਰਿਪਟ (InScript) ਲੇਆਉਟ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।"
        },
        {
          question: "ਪੰਜਾਬੀ ਵਿੱਚ ਅੱਧਕ ਅਤੇ ਟਿੱਪੀ ਕਿਵੇਂ ਪਾਈਦੀ ਹੈ?",
          answer: "ਅੱਧਕ (ੱ) ਪਾਉਣ ਲਈ 'Shift + Z' ਦਬਾਓ। ਟਿੱਪੀ (ੰ) ਪਾਉਣ ਲਈ 'X' ਕੀ ਦਬਾਓ ਅਤੇ ਬਿੰਦੀ (ਂ) ਪਾਉਣ ਲਈ 'Shift + X' ਦਬਾਓ।"
        }
      ]
    }
  },

  // ----------------------------------------------------
  // TAMIL
  // ----------------------------------------------------
  tamil: {
    id: "tamil",
    slug: "tamil-typing",
    keyboardSlug: "tamil",
    name: "Tamil",
    nativeName: "தமிழ்",
    symbol: "த",
    script: "Tamil",
    layoutName: "Tamil InScript / Unicode",
    description: "Practice Tamil typing online with verified Tamil InScript keyboard, prepare for TNPSC typist exams, and improve Tamil WPM speed and accuracy.",
    metaTitle: "Tamil Typing Practice Online – Improve Speed & Accuracy | TypeHindi",
    metaDescription: "Practice Tamil typing online with easy, medium and hard exercises. Master Tamil InScript keyboard, build typing speed and qualify TNPSC clerk & typist tests with TypeHindi.",
    h1: "Tamil Typing Practice",
    keyboardRows: tamilKeyboardRows,
    commonWords: [
      "தமிழ்நாடு", "அரசு", "தேர்வு", "கணினி", "மாணவர்கள்", "பயிற்சி", "தட்டச்சு", "வேகம்",
      "வெற்றி", "அலுவலகம்", "கல்வி", "இந்தியா", "முக்கியம்", "மொழி", "வளர்ச்சி", "வேலைவாய்ப்பு"
    ],
    sentences: [
      "தமிழ் உலகிலேயே மிகத் தொன்மையான செம்மொழியாகும்.",
      "டி.என்.பி.எஸ்.சி தேர்வில் தமிழ் தட்டச்சு மிக முக்கியமான பகுதியாகும்.",
      "தினசரி பத்து நிமிடம் தட்டச்சு பயிற்சி செய்தால் வேகம் அதிகரிக்கும்.",
      "இன்ஸ்கிரிப்ட் விசைப்பலகை மூலம் துல்லியமாக தட்டச்சு செய்ய முடியும்."
    ],
    passages: [
      {
        id: 1,
        difficulty: "easy",
        category: "பொது",
        wordCount: 40,
        text: "தமிழ் மொழி உலகிலேயே மிகவும் பழமையான மற்றும் இனிமையான செம்மொழியாகும். தமிழ்நாடு இந்தியாவின் தென்பகுதியில் அமைந்துள்ள வரலாற்று சிறப்புமிக்க மாநிலமாகும். தாய்மொழியைப் பிழையின்றி பேசுவதும் எழுதுவதும் நம் ஒவ்வொருவரின் கடமையாகும். கல்வி மனிதனின் அறியாமையை நீக்கி அவனுக்கு நல்வழிகாட்டுகிறது."
      },
      {
        id: 2,
        difficulty: "easy",
        category: "கல்வி",
        wordCount: 42,
        text: "கணினியில் தமிழில் தட்டச்சு செய்வது இன்றைய நவீன காலத்தில் மிகவும் அவசியமான திறமையாகும். மாணவர்கள் சிறுவயதிலேயே விரல்களைச் சரியான முறையில் வைத்துப் பழக வேண்டும். தினமும் சிறிது நேரம் ஒதுக்கிப் பயிற்சி செய்தால் மிக விரைவாகத் தட்டச்சு வேகத்தை அதிகரிக்க முடியும்."
      },
      {
        id: 3,
        difficulty: "medium",
        category: "அரசுத் தேர்வுகள்",
        wordCount: 65,
        text: "தமிழ்நாடு அரசுப் பணியாளர் தேர்வாணையம் (TNPSC) நடத்தும் குரூப்-4 தட்டச்சர் மற்றும் சுருக்கெழுத்தாளர் தேர்வுகளில் தமிழ் தட்டச்சுத் தேர்வு கட்டாயமாகும். இதில் தேர்ச்சி பெற நிமிடத்திற்கு முப்பது சொற்கள் (30 WPM) தட்டச்சு செய்யும் வேகம் தேவைப்படுகிறது. தமிழ்நாடு அரசின் தொழில்நுட்பக் கல்வி இயக்ககம் நடத்தும் தட்டச்சுத் தேர்வில் இளநிலை அல்லது முதுநிலை சான்றிதழ் பெற்றிருப்பது வேலைவாய்ப்பிற்கு மிகவும் பயனுள்ளதாக இருக்கும்."
      },
      {
        id: 4,
        difficulty: "medium",
        category: "வரலாறு மற்றும் பண்பாடு",
        wordCount: 66,
        text: "திருவள்ளுவர் அருளிய திருக்குறள் உலக மக்கள் அனைவருக்கும் பொதுவான நன்னெறிகளைப் போதிக்கிறது. சங்க இலக்கியங்கள் தமிழர்களின் பண்பாட்டு உயர்வையும் வீரத்தையும் பறைசாற்றுகின்றன. தற்கால இணைய உலகில் தமிழ் மொழியைப் பரப்பவும் ஆவணப்படுத்தவும் கணினித் தமிழ் தட்டச்சுப் பயிற்சி பெரும் பங்காற்றுகிறது. இளைஞர்கள் தங்கள் திறனை வளர்த்துக் கொள்ள வேண்டும்."
      },
      {
        id: 5,
        difficulty: "hard",
        category: "மின்னாளுமை மற்றும் நிர்வாகம்",
        wordCount: 78,
        text: "தமிழக அரசு தனது அனைத்து நிர்வாகத் துறைகளிலும் தமிழ் பயன்பாட்டை முழுமையாக நடைமுறைப்படுத்தி வருகிறது. மின்னாளுமை சேவைகள், அரசு இணையதளங்கள் மற்றும் கோப்புகள் அனைத்தும் யுனிகோட் முறையில் தமிழில் பராமரிக்கப்படுகின்றன. இதனால் அரசு அலுவலகங்களில் விரைவாகவும் துல்லியமாகவும் தட்டச்சு செய்யக்கூடிய திறமையான பணியாளர்களுக்கு எப்போதுமே அதிக தேவை உள்ளது. தேர்வர்கள் மாதிரித் தேர்வுகளைத் தவறாமல் எழுதிப் பழக வேண்டும்."
      }
    ],
    exams: [
      {
        examName: "TNPSC Group 4 (Typist & Steno-Typist)",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Tamil InScript / Tamil 99",
        notes: "Qualifying examination conducted for secretarial and clerical postings in Tamil Nadu administration."
      },
      {
        examName: "DOTE Tamil Technical Examination (Junior & Senior)",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 4,
        fontOrLayout: "Tamil Typewriting Machine / Computer",
        notes: "Official board certificate by Directorate of Technical Education, Tamil Nadu."
      }
    ],
    learning: {
      introduction: "தமிழ் தட்டச்சு தமிழகத்தில் அரசு மற்றும் தனியார் வேலைவாய்ப்புகளைப் பெறுவதற்கு மிக முக்கியமான திறனாகும். கணினியில் தமிழ் தட்டச்சு செய்ய மத்திய மற்றும் மாநில அரசுகளால் அங்கீகரிக்கப்பட்ட தமிழ் இன்ஸ்கிரிப்ட் (InScript) விசைப்பலகை முறை மிகவும் துல்லியமானது மற்றும் விரைவானது.",
      inputSetup: {
        windows: "Windows Settings > Time & Language > Language > Add Tamil (India) > Keyboards > Tamil InScript சேர்க்கவும். விண்டோஸ் + ஸ்பேஸ் மூலம் மாற்றவும்.",
        mac: "System Settings > Keyboard > Input Sources > Add Tamil InScript.",
        linux: "Settings > Region & Language > Input Sources > Tamil (Inscript)."
      },
      homeRowGuide: "இடது கை விரல்களை A(ோ), S(ே), D(்/அ), F(ி/இ), G(ு/உ) மீதும், வலது கை விரல்களை H(ப), J(ர), K(க), L(த), ;(ச), '(ட) மீதும் வைக்கவும். விரல்களைப் பார்க்காமல் தட்டச்சு செய்யப் பழகவும்.",
      fingerPlacement: {
        leftHand: "சுண்டு விரல்: ோ (A), மோதிர விரல்: ே (S), நடு விரல்: ்/அ (D), ஆள்காட்டி விரல்: ி/இ (F) மற்றும் ு/உ (G), பெருவிரல்: ஸ்பேஸ்பார்.",
        rightHand: "ஆள்காட்டி விரல்: ப (H) மற்றும் ர (J), நடு விரல்: க (K), மோதிர விரல்: த (L), சுண்டு விரல்: ச (;) மற்றும் ட ('), பெருவிரல்: ஸ்பேஸ்பார்."
      },
      commonCharacters: [
        { char: "க", keyCombo: "K (Normal)", type: "consonant" },
        { char: "த", keyCombo: "L (Normal)", type: "consonant" },
        { char: "் (புள்ளி / மெய்)", keyCombo: "D (Normal)", type: "special" },
        { char: "ா (நெடில் மாத்திரை)", keyCombo: "E (Normal)", type: "matra" },
        { char: "ி (இ மாத்திரை)", keyCombo: "F (Normal)", type: "matra" },
        { char: "ீ (ஈ மாத்திரை)", keyCombo: "R (Normal)", type: "matra" },
        { char: "ழ", keyCombo: "Shift + B", type: "consonant" }
      ],
      commonWords: ["தமிழ்நாடு", "அரசு", "மற்றும்", "என்று", "இந்த", "அவர்", "பணி", "தேர்வு", "கல்வி", "நாடு"],
      sampleSentences: [
        "மெய்யெழுத்து தட்டச்சு செய்ய எழுத்துக்குப் பின் 'D' (புள்ளி) அழுத்தவும்.",
        "சிறப்பு 'ழ' எழுத்தை தட்டச்சு செய்ய Shift + B அழுத்தவும்.",
        "TNPSC தேர்வில் வெற்றி பெற தினமும் TypeHindi-யில் பயிற்சி செய்யுங்கள்."
      ],
      faqs: [
        {
          question: "தமிழ் தட்டச்சில் 'ழ' எழுத்து எப்படி அடிப்பது?",
          answer: "தமிழ் இன்ஸ்கிரிப்ட் விசைப்பலகையில் Shift கீயை அழுத்திக்கொண்டு 'B' விதியை அழுத்தினால் 'ழ' எழுத்து வரும் (Shift + B)."
        },
        {
          question: "TNPSC தட்டச்சர் பணிக்குத் தேவையான வேகம் என்ன?",
          answer: "TNPSC குரூப்-4 தட்டச்சர் பணிக்குத் தமிழில் குறைந்தபட்சம் 30 WPM (இளநிலை தட்டச்சு சான்றிதழ்) வேகம் பெற்றிருக்க வேண்டும்."
        }
      ]
    }
  },

  // ----------------------------------------------------
  // BENGALI
  // ----------------------------------------------------
  bengali: {
    id: "bengali",
    slug: "bengali-typing",
    keyboardSlug: "bengali",
    name: "Bengali",
    nativeName: "বাংলা",
    symbol: "ব",
    script: "Bengali",
    layoutName: "Bengali InScript / Unicode",
    description: "Practice Bengali typing online with official Bengali InScript keyboard, prepare for WBPSC clerkship exams, and build speed with Bengali passages.",
    metaTitle: "Bengali Typing Practice Online – Improve Speed & Accuracy | TypeHindi",
    metaDescription: "Practice Bengali typing online with easy, medium and hard exercises. Master Bengali InScript keyboard layout, build typing speed and pass WBPSC clerkship typing tests with TypeHindi.",
    h1: "Bengali Typing Practice",
    keyboardRows: bengaliKeyboardRows,
    commonWords: [
      "পশ্চিমবঙ্গ", "সরকার", "পরীক্ষা", "কম্পিউটার", "শিক্ষার্থী", "অনুশীলন", "টাইপিং", "গতি",
      "সাফল্য", "অফিস", "শিক্ষা", "ভারত", "গুরুত্বপূর্ণ", "ভাষা", "উন্নয়ন", "কর্মসংস্থান"
    ],
    sentences: [
      "বাংলা আমাদের অত্যন্ত প্রিয় ও মিষ্টি মাতৃভাষা।",
      "ডব্লিউবিপিএসসি ক্লার্কশিপ পরীক্ষার জন্য বাংলা টাইপিং অত্যন্ত গুরুত্বপূর্ণ।",
      "প্রতিদিন নিয়মিত অনুশীলন করলে টাইপিং স্পিড খুব দ্রুত বৃদ্ধি পায়।",
      "ইনস্ক্রিপ্ট কিবোর্ডে যুক্তাক্ষর টাইপ করার জন্য হসন্ত (D কী) ব্যবহার করা হয়।"
    ],
    passages: [
      {
        id: 1,
        difficulty: "easy",
        category: "সাধারণ",
        wordCount: 40,
        text: "ভারত একটি বৈচিত্র্যময় ও মহান দেশ। বাংলা আমাদের অত্যন্ত মিষ্টি ও প্রিয় মাতৃভাষা। পশ্চিমবঙ্গ ও বাংলাদেশে কোটি কোটি মানুষ বাংলায় কথা বলেন। শিক্ষার আলো প্রতিটি মানুষের জীবনকে সুন্দর ও অর্থপূর্ণ করে তোলে। নিয়মিত বই পড়ার অভ্যাস জ্ঞান বৃদ্ধি করে।"
      },
      {
        id: 2,
        difficulty: "easy",
        category: "শিক্ষা",
        wordCount: 42,
        text: "কম্পিউটারে বাংলা টাইপিং শেখা বর্তমান যুগের শিক্ষার্থীদের জন্য অত্যন্ত জরুরি একটি দক্ষতা। সঠিক আঙুল বসিয়ে অনুশীলন করলে খুব সহজেই দ্রুত গতিতে টাইপ করা সম্ভব হয়। প্রতিদিন দশ মিনিট সময় দিলে টাইপিং নির্ভুল ও দ্রুত হয়ে ওঠে।"
      },
      {
        id: 3,
        difficulty: "medium",
        category: "সরকারি পরীক্ষা",
        wordCount: 65,
        text: "পশ্চিমবঙ্গ পাবলিক সার্ভিস কমিশন (WBPSC) পরিচালিত ক্লার্কশিপ ও অন্যান্য সরকারি পদের জন্য বাংলা টাইপিং টেস্ট বাধ্যতামূলক থাকে। এই পরীক্ষায় উত্তীর্ণ হতে হলে প্রার্থীদের সাধারণত মিনিটে কুড়ি বা তার বেশি শব্দ (20+ WPM) সঠিকভাবে টাইপ করতে হয়। ইনস্ক্রিপ্ট কিবোর্ড লেআউট ব্যবহার করে নিয়মিত অনুশীলন করলে নির্ভুলতা ও গতি দুটোই বজায় থাকে।"
      },
      {
        id: 4,
        difficulty: "medium",
        category: "সংস্কৃতি ও সাহিত্য",
        wordCount: 66,
        text: "রবীন্দ্রনাথ ঠাকুর ও কাজী নজরুল ইসলামের রচনা বাংলা সাহিত্যকে বিশ্বমঞ্চে মর্যাদার আসনে প্রতিষ্ঠিত করেছে। আমাদের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য ডিজিটাল মাধ্যমে সংরক্ষণ করতে বাংলা টাইপিংয়ের ভূমিকা অপরিসীম। সরকারি ও বেসরকারি প্রতিটি দপ্তরে এখন বাংলায় যোগাযোগের প্রসার ঘটছে। নতুন প্রজন্মকে সঠিক পদ্ধতিতে বাংলা টাইপিংয়ে দক্ষ হতে হবে।"
      },
      {
        id: 5,
        difficulty: "hard",
        category: "প্রশাসন ও তথ্যপ্রযুক্তি",
        wordCount: 78,
        text: "পশ্চিমবঙ্গ সরকারের বিভিন্ন দপ্তরে ই-গভর্ন্যান্সের অধীনে যাবতীয় প্রশাসনিক কাজকর্ম এখন ডিজিটাল মাধ্যমে বাংলায় নিষ্পন্ন হচ্ছে। আদালতের নির্দেশনামা থেকে শুরু করে সাধারণ নাগরিক পরিষেবা পোর্টাল পর্যন্ত ইউনিকোড ফন্টের ব্যবহার বাধ্যতামূলক হয়েছে। এর ফলে দ্রুত ও নিখুঁত বাংলা টাইপিস্টদের চাহিদা বাজারে ক্রমবর্ধমান। বাস্তব পরীক্ষার পরিবেশের সাথে অভ্যস্ত হতে পরীক্ষার্থীদের নিয়মিত সময় মেপে মক টেস্ট দেওয়া উচিত।"
      }
    ],
    exams: [
      {
        examName: "WBPSC Clerkship Typing Test",
        targetWpm: 20,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Bengali InScript / Unicode",
        notes: "Qualifying computer typing test for West Bengal Secretariat and directorate postings."
      },
      {
        examName: "Calcutta High Court Clerk / Typist",
        targetWpm: 30,
        durationMinutes: 10,
        maxErrorPercent: 5,
        fontOrLayout: "Bengali Unicode",
        notes: "Transcription test assessing typing speed and Bengali legal orthography."
      }
    ],
    learning: {
      introduction: "বাংলা টাইপিং শেখা পশ্চিমবঙ্গে সরকারি চাকরি (যেমন WBPSC ক্লার্কশিপ, কোর্ট টাইপিস্ট) এবং বিভিন্ন সংস্থায় কাজের জন্য অত্যন্ত গুরুত্বপূর্ণ। ভারত সরকার দ্বারা প্রমিত ইনস্ক্রিপ্ট (InScript) কিবোর্ড লেআউট ধ্বনিতত্ত্বের ভিত্তিতে তৈরি এবং এটি ইউনিকোডে টাইপ করার সবচেয়ে বিজ্ঞানসম্মত পদ্ধতি।",
      inputSetup: {
        windows: "Windows Settings > Time & Language > Language > Add Bengali (India) > Keyboards > Bengali InScript নির্বাচন করুন। Alt + Shift টিপে ভাষা পরিবর্তন করুন।",
        mac: "System Settings > Keyboard > Input Sources > Add Bengali InScript.",
        linux: "Settings > Region & Language > Input Sources > Bengali (Inscript)."
      },
      homeRowGuide: "বাম হাত A(ো), S(ে), D(্/অ), F(ি/ই), G(ু/উ) এবং ডান হাত H(প), J(র), K(ক), L(ত), ;(চ), '(ট) এর ওপর রাখুন। কিবোর্ডের দিকে না তাকিয়ে স্পর্শের মাধ্যমে টাইপ করার অভ্যাস করুন।",
      fingerPlacement: {
        leftHand: "কনিষ্ঠা: ো (A), অনামিকা: ে (S), মধ্যমা: ্/অ (D), তর্জনী: ি/ই (F) ও ু/উ (G), বুড়ো আঙুল: স্পেসবার।",
        rightHand: "তর্জনী: প (H) ও র (J), মধ্যমা: ক (K), অনামিকা: ত (L), কনিষ্ঠা: চ (;) ও ট ('), বুড়ো আঙুল: স্পেসবার।"
      },
      commonCharacters: [
        { char: "ক", keyCombo: "K (Normal)", type: "consonant" },
        { char: "খ", keyCombo: "Shift + K", type: "consonant" },
        { char: "্ (হসন্ত)", keyCombo: "D (Normal)", type: "special" },
        { char: "া (আ কার)", keyCombo: "E (Normal)", type: "matra" },
        { char: "ি (হ্রস্ব ই কার)", keyCombo: "F (Normal)", type: "matra" },
        { char: "ী (দীর্ঘ ঈ কার)", keyCombo: "R (Normal)", type: "matra" },
        { char: "ং (অনুস্বার)", keyCombo: "X (Normal)", type: "special" },
        { char: "ঁ (চন্দ্রবিন্দু)", keyCombo: "Shift + X", type: "special" }
      ],
      commonWords: ["পশ্চিমবঙ্গ", "সরকার", "এবং", "হবে", "করে", "এই", "কাজ", "কলকাতা", "মানুষ", "বাংলা"],
      sampleSentences: [
        "যুক্তাক্ষর যেমন 'ক্ষ' লিখতে K + D + Shift + Comma (ক + ্ + ষ) টাইপ করুন।",
        "হসন্ত দেওয়ার জন্য 'D' কী ব্যবহার করা হয়।",
        "WBPSC ক্লার্কশিপের জন্য TypeHindi টেস্ট সিমুলেটরে টাইপ করে প্রস্তুতি নিন।"
      ],
      faqs: [
        {
          question: "বাংলায় যুক্তাক্ষর (যেমন ক্ষ, জ্ঞ, ত্ত) কীভাবে টাইপ করবেন?",
          answer: "ইনস্ক্রিপ্ট পদ্ধতিতে দুটি ব্যঞ্জনের মাঝে 'D' (হসন্ত) কী চাপলে যুক্তাক্ষর তৈরি হয়। উদাহরণ: ক + D + ষ = ক্ষ; জ + D + ঞ = জ্ঞ।"
        },
        {
          question: "WBPSC ক্লার্কশিপ পরীক্ষায় বাংলায় কত স্পিড লাগে?",
          answer: "WBPSC ক্লার্কশিপ পার্ট-২ পরীক্ষার কম্পিউটার টাইপিং টেস্টে বাংলায় প্রতি মিনিটে অন্তত ২০টি শব্দ (20 WPM) টাইপ করতে হয়।"
        }
      ]
    }
  }
};

// Helper lookup functions
export const ALL_LANGUAGES: LanguageConfig[] = Object.values(LANGUAGES_CONFIG);

export function getLanguageConfig(idOrSlug: string): LanguageConfig {
  const clean = idOrSlug.toLowerCase().trim();
  const found = ALL_LANGUAGES.find(
    (l) => l.id === clean || l.slug === clean || l.keyboardSlug === clean
  );
  return found || LANGUAGES_CONFIG.hindi;
}

export function getPassagesByDifficulty(
  languageId: LanguageId,
  difficulty: "easy" | "medium" | "hard"
): LanguagePassage[] {
  const config = LANGUAGES_CONFIG[languageId] || LANGUAGES_CONFIG.hindi;
  return config.passages.filter((p) => p.difficulty === difficulty);
}

export function getRandomPassage(
  languageId: LanguageId,
  difficulty?: "easy" | "medium" | "hard"
): LanguagePassage {
  const config = LANGUAGES_CONFIG[languageId] || LANGUAGES_CONFIG.hindi;
  const filtered = difficulty ? config.passages.filter((p) => p.difficulty === difficulty) : config.passages;
  const pool = filtered.length > 0 ? filtered : config.passages;
  return pool[Math.floor(Math.random() * pool.length)];
}
