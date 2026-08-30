// learn-data.ts - Complete data for TypeHindi.in Learn Page expansion

export interface FingerInfo {
  id: "left-pinky" | "left-ring" | "left-middle" | "left-index" | "left-thumb" | "right-thumb" | "right-index" | "right-middle" | "right-ring" | "right-pinky";
  nameEn: string;
  nameHi: string;
  hand: "left" | "right";
  color: string;
}

export const fingerInfoList: Record<string, FingerInfo> = {
  "left-pinky": { id: "left-pinky", nameEn: "Left Pinky", nameHi: "बायां हाथ - कनिष्ठिका (छोटी उंगली)", hand: "left", color: "#f43f5e" },
  "left-ring": { id: "left-ring", nameEn: "Left Ring Finger", nameHi: "बायां हाथ - अनामिका", hand: "left", color: "#f97316" },
  "left-middle": { id: "left-middle", nameEn: "Left Middle Finger", nameHi: "बायां हाथ - मध्यमा (बीच की उंगली)", hand: "left", color: "#eab308" },
  "left-index": { id: "left-index", nameEn: "Left Index Finger", nameHi: "बायां हाथ - तर्जनी (पहली उंगली)", hand: "left", color: "#10b981" },
  "left-thumb": { id: "left-thumb", nameEn: "Left Thumb", nameHi: "बायां अंगूठा", hand: "left", color: "#6366f1" },
  "right-thumb": { id: "right-thumb", nameEn: "Right Thumb", nameHi: "दायां अंगूठा", hand: "right", color: "#6366f1" },
  "right-index": { id: "right-index", nameEn: "Right Index Finger", nameHi: "दायां हाथ - तर्जनी (पहली उंगली)", hand: "right", color: "#06b6d4" },
  "right-middle": { id: "right-middle", nameEn: "Right Middle Finger", nameHi: "दायां हाथ - मध्यमा (बीच की उंगली)", hand: "right", color: "#3b82f6" },
  "right-ring": { id: "right-ring", nameEn: "Right Ring Finger", nameHi: "दायां हाथ - अनामिका", hand: "right", color: "#8b5cf6" },
  "right-pinky": { id: "right-pinky", nameEn: "Right Pinky", nameHi: "दायां हाथ - कनिष्ठिका (छोटी उंगली)", hand: "right", color: "#ec4899" },
};

export interface InscriptKeyDetail {
  code: string;
  keyLabel: string;
  normal: string;
  shift: string;
  finger: FingerInfo["id"];
  row: "number" | "top" | "home" | "bottom" | "space";
}

export const inscriptKeyDetails: Record<string, InscriptKeyDetail> = {
  Backquote: { code: "Backquote", keyLabel: "`", normal: "ॊ", shift: "॒", finger: "left-pinky", row: "number" },
  Digit1: { code: "Digit1", keyLabel: "1", normal: "१", shift: "!", finger: "left-pinky", row: "number" },
  Digit2: { code: "Digit2", keyLabel: "2", normal: "२", shift: "@", finger: "left-ring", row: "number" },
  Digit3: { code: "Digit3", keyLabel: "3", normal: "३", shift: "#", finger: "left-middle", row: "number" },
  Digit4: { code: "Digit4", keyLabel: "4", normal: "४", shift: "$", finger: "left-index", row: "number" },
  Digit5: { code: "Digit5", keyLabel: "5", normal: "५", shift: "%", finger: "left-index", row: "number" },
  Digit6: { code: "Digit6", keyLabel: "6", normal: "६", shift: "^", finger: "right-index", row: "number" },
  Digit7: { code: "Digit7", keyLabel: "7", normal: "७", shift: "&", finger: "right-index", row: "number" },
  Digit8: { code: "Digit8", keyLabel: "8", normal: "८", shift: "*", finger: "right-middle", row: "number" },
  Digit9: { code: "Digit9", keyLabel: "9", normal: "९", shift: "(", finger: "right-ring", row: "number" },
  Digit0: { code: "Digit0", keyLabel: "0", normal: "०", shift: ")", finger: "right-pinky", row: "number" },
  Minus: { code: "Minus", keyLabel: "-", normal: "-", shift: "ः", finger: "right-pinky", row: "number" },
  Equal: { code: "Equal", keyLabel: "=", normal: "ृ", shift: "ऋ", finger: "right-pinky", row: "number" },
  KeyQ: { code: "KeyQ", keyLabel: "Q", normal: "ौ", shift: "औ", finger: "left-pinky", row: "top" },
  KeyW: { code: "KeyW", keyLabel: "W", normal: "ै", shift: "ऐ", finger: "left-ring", row: "top" },
  KeyE: { code: "KeyE", keyLabel: "E", normal: "ा", shift: "आ", finger: "left-middle", row: "top" },
  KeyR: { code: "KeyR", keyLabel: "R", normal: "ी", shift: "ई", finger: "left-index", row: "top" },
  KeyT: { code: "KeyT", keyLabel: "T", normal: "ू", shift: "ऊ", finger: "left-index", row: "top" },
  KeyY: { code: "KeyY", keyLabel: "Y", normal: "ब", shift: "भ", finger: "right-index", row: "top" },
  KeyU: { code: "KeyU", keyLabel: "U", normal: "ह", shift: "ङ", finger: "right-index", row: "top" },
  KeyI: { code: "KeyI", keyLabel: "I", normal: "ग", shift: "घ", finger: "right-middle", row: "top" },
  KeyO: { code: "KeyO", keyLabel: "O", normal: "द", shift: "ध", finger: "right-ring", row: "top" },
  KeyP: { code: "KeyP", keyLabel: "P", normal: "ज", shift: "झ", finger: "right-pinky", row: "top" },
  BracketLeft: { code: "BracketLeft", keyLabel: "[", normal: "ड", shift: "ढ", finger: "right-pinky", row: "top" },
  BracketRight: { code: "BracketRight", keyLabel: "]", normal: "़", shift: "ञ", finger: "right-pinky", row: "top" },
  Backslash: { code: "Backslash", keyLabel: "\\", normal: "ॉ", shift: "ऑ", finger: "right-pinky", row: "top" },
  KeyA: { code: "KeyA", keyLabel: "A", normal: "ो", shift: "ओ", finger: "left-pinky", row: "home" },
  KeyS: { code: "KeyS", keyLabel: "S", normal: "े", shift: "ए", finger: "left-ring", row: "home" },
  KeyD: { code: "KeyD", keyLabel: "D", normal: "्", shift: "अ", finger: "left-middle", row: "home" },
  KeyF: { code: "KeyF", keyLabel: "F", normal: "ि", shift: "इ", finger: "left-index", row: "home" },
  KeyG: { code: "KeyG", keyLabel: "G", normal: "ु", shift: "उ", finger: "left-index", row: "home" },
  KeyH: { code: "KeyH", keyLabel: "H", normal: "प", shift: "फ", finger: "right-index", row: "home" },
  KeyJ: { code: "KeyJ", keyLabel: "J", normal: "र", shift: "ऱ", finger: "right-index", row: "home" },
  KeyK: { code: "KeyK", keyLabel: "K", normal: "क", shift: "ख", finger: "right-middle", row: "home" },
  KeyL: { code: "KeyL", keyLabel: "L", normal: "त", shift: "थ", finger: "right-ring", row: "home" },
  Semicolon: { code: "Semicolon", keyLabel: ";", normal: "च", shift: "छ", finger: "right-pinky", row: "home" },
  Quote: { code: "Quote", keyLabel: "'", normal: "ट", shift: "ठ", finger: "right-pinky", row: "home" },
  KeyZ: { code: "KeyZ", keyLabel: "Z", normal: "ॆ", shift: "ॎ", finger: "left-pinky", row: "bottom" },
  KeyX: { code: "KeyX", keyLabel: "X", normal: "ं", shift: "ँ", finger: "left-ring", row: "bottom" },
  KeyC: { code: "KeyC", keyLabel: "C", normal: "म", shift: "ण", finger: "left-middle", row: "bottom" },
  KeyV: { code: "KeyV", keyLabel: "V", normal: "न", shift: "ऩ", finger: "left-index", row: "bottom" },
  KeyB: { code: "KeyB", keyLabel: "B", normal: "व", shift: "ऴ", finger: "left-index", row: "bottom" },
  KeyN: { code: "KeyN", keyLabel: "N", normal: "ल", shift: "ळ", finger: "right-index", row: "bottom" },
  KeyM: { code: "KeyM", keyLabel: "M", normal: "स", shift: "श", finger: "right-index", row: "bottom" },
  Comma: { code: "Comma", keyLabel: ",", normal: ",", shift: "ष", finger: "right-middle", row: "bottom" },
  Period: { code: "Period", keyLabel: ".", normal: "।", shift: "श्र", finger: "right-ring", row: "bottom" },
  Slash: { code: "Slash", keyLabel: "/", normal: "य", shift: "य़", finger: "right-pinky", row: "bottom" },
  Space: { code: "Space", keyLabel: "Space", normal: " ", shift: " ", finger: "right-thumb", row: "space" },
};

export interface KeyPracticeItem {
  id: string;
  char: string;
  keyLabel: string;
  code: string;
  isShift: boolean;
  finger: FingerInfo["id"];
  fingerLabel: string;
  group: "vowels" | "consonants-1" | "consonants-2" | "matras" | "special" | "shift";
  groupTitle: string;
  exampleWords: string[];
  drillSequence: string;
  description: string;
}

export const keyPracticeItems: KeyPracticeItem[] = [
  // 1. Basic Vowels
  {
    id: "vowel-a",
    char: "अ",
    keyLabel: "Shift + D",
    code: "KeyD",
    isShift: true,
    finger: "left-middle",
    fingerLabel: "Left Middle Finger (Shift + D)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["अमर", "अजय", "अटल", "अनार"],
    drillSequence: "अ अ अ अ अमर अटल",
    description: "स्वर 'अ' - बाएँ हाथ की मध्यमा उंगली से Shift + D दबाएं।"
  },
  {
    id: "vowel-aa",
    char: "आ",
    keyLabel: "Shift + E",
    code: "KeyE",
    isShift: true,
    finger: "left-middle",
    fingerLabel: "Left Middle Finger (Shift + E)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["आम", "आज", "आकाश", "आसन"],
    drillSequence: "आ आ आ आ आम आज",
    description: "स्वर 'आ' - बाएँ हाथ की मध्यमा उंगली से Shift + E दबाएं।"
  },
  {
    id: "vowel-i",
    char: "इ",
    keyLabel: "Shift + F",
    code: "KeyF",
    isShift: true,
    finger: "left-index",
    fingerLabel: "Left Index Finger (Shift + F)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["इमली", "इधर", "इनाम", "इशारा"],
    drillSequence: "इ इ इ इ इधर इनाम",
    description: "स्वर 'इ' - बाएँ हाथ की तर्जनी उंगली से Shift + F दबाएं।"
  },
  {
    id: "vowel-ee",
    char: "ई",
    keyLabel: "Shift + R",
    code: "KeyR",
    isShift: true,
    finger: "left-index",
    fingerLabel: "Left Index Finger (Shift + R)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["ईख", "ईंट", "ईमान", "ईश्वर"],
    drillSequence: "ई ई ई ई ईख ईमान",
    description: "स्वर 'ई' - बाएँ हाथ की तर्जनी उंगली से Shift + R दबाएं।"
  },
  {
    id: "vowel-u",
    char: "उ",
    keyLabel: "Shift + G",
    code: "KeyG",
    isShift: true,
    finger: "left-index",
    fingerLabel: "Left Index Finger (Shift + G)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["उठ", "उधर", "उमंग", "उपहार"],
    drillSequence: "उ उ उ उ उधर उठ",
    description: "स्वर 'उ' - बाएँ हाथ की तर्जनी उंगली से Shift + G दबाएं।"
  },
  {
    id: "vowel-uu",
    char: "ऊ",
    keyLabel: "Shift + T",
    code: "KeyT",
    isShift: true,
    finger: "left-index",
    fingerLabel: "Left Index Finger (Shift + T)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["ऊन", "ऊपर", "ऊँट", "ऊर्जा"],
    drillSequence: "ऊ ऊ ऊ ऊ ऊन ऊपर",
    description: "स्वर 'ऊ' - बाएँ हाथ की तर्जनी से Shift + T दबाएं।"
  },
  {
    id: "vowel-e",
    char: "ए",
    keyLabel: "Shift + S",
    code: "KeyS",
    isShift: true,
    finger: "left-ring",
    fingerLabel: "Left Ring Finger (Shift + S)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["एक", "एकता", "एशिया", "एहसास"],
    drillSequence: "ए ए ए ए एक एकता",
    description: "स्वर 'ए' - बाएँ हाथ की अनामिका उंगली से Shift + S दबाएं।"
  },
  {
    id: "vowel-ai",
    char: "ऐ",
    keyLabel: "Shift + W",
    code: "KeyW",
    isShift: true,
    finger: "left-ring",
    fingerLabel: "Left Ring Finger (Shift + W)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["ऐनक", "ऐतिहासिक", "ऐश्वर्य"],
    drillSequence: "ऐ ऐ ऐ ऐ ऐनक ऐसा",
    description: "स्वर 'ऐ' - बाएँ हाथ की अनामिका उंगली से Shift + W दबाएं।"
  },
  {
    id: "vowel-o",
    char: "ओ",
    keyLabel: "Shift + A",
    code: "KeyA",
    isShift: true,
    finger: "left-pinky",
    fingerLabel: "Left Pinky Finger (Shift + A)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["ओस", "ओठ", "ओर", "ओझल"],
    drillSequence: "ओ ओ ओ ओ ओस ओर",
    description: "स्वर 'ओ' - बाएँ हाथ की कनिष्ठिका उंगली से Shift + A दबाएं।"
  },
  {
    id: "vowel-au",
    char: "औ",
    keyLabel: "Shift + Q",
    code: "KeyQ",
    isShift: true,
    finger: "left-pinky",
    fingerLabel: "Left Pinky Finger (Shift + Q)",
    group: "vowels",
    groupTitle: "Basic Vowels (मूल स्वर)",
    exampleWords: ["औरत", "और", "औजार", "औषधि"],
    drillSequence: "औ औ औ औ और औरत",
    description: "स्वर 'औ' - बाएँ हाथ की कनिष्ठिका उंगली से Shift + Q दबाएं।"
  },

  // 2. Consonants - Part 1
  {
    id: "cons-ka",
    char: "क",
    keyLabel: "K",
    code: "KeyK",
    isShift: false,
    finger: "right-middle",
    fingerLabel: "Right Middle Finger (K Key)",
    group: "consonants-1",
    groupTitle: "Basic Consonants - Part 1 (क वर्ग एवं च वर्ग)",
    exampleWords: ["कमल", "कलम", "किताब", "कवि"],
    drillSequence: "क क क क कमल कलम",
    description: "व्यंजन 'क' - होम रो पर दाएँ हाथ की मध्यमा (K) उंगली से दबाएं।"
  },
  {
    id: "cons-kha",
    char: "ख",
    keyLabel: "Shift + K",
    code: "KeyK",
    isShift: true,
    finger: "right-middle",
    fingerLabel: "Right Middle Finger (Shift + K)",
    group: "consonants-1",
    groupTitle: "Basic Consonants - Part 1 (क वर्ग एवं च वर्ग)",
    exampleWords: ["खरगोश", "खत", "खाना", "खेल"],
    drillSequence: "ख ख ख ख खत खाना",
    description: "व्यंजन 'ख' - Shift दबाकर दाएँ हाथ की मध्यमा (K) दबाएं।"
  },
  {
    id: "cons-ga",
    char: "ग",
    keyLabel: "I",
    code: "KeyI",
    isShift: false,
    finger: "right-middle",
    fingerLabel: "Right Middle Finger (I Key)",
    group: "consonants-1",
    groupTitle: "Basic Consonants - Part 1 (क वर्ग एवं च वर्ग)",
    exampleWords: ["गमला", "गाय", "गीत", "गुलाब"],
    drillSequence: "ग ग ग ग गमला गाय",
    description: "व्यंजन 'ग' - ऊपरी पंक्ति पर दाएँ हाथ की मध्यमा (I) उंगली से दबाएं।"
  },
  {
    id: "cons-gha",
    char: "घ",
    keyLabel: "Shift + I",
    code: "KeyI",
    isShift: true,
    finger: "right-middle",
    fingerLabel: "Right Middle Finger (Shift + I)",
    group: "consonants-1",
    groupTitle: "Basic Consonants - Part 1 (क वर्ग एवं च वर्ग)",
    exampleWords: ["घर", "घड़ी", "घोड़ा", "घट"],
    drillSequence: "घ घ घ घ घर घड़ी",
    description: "व्यंजन 'घ' - Shift दबाकर दाएँ हाथ की मध्यमा (I) दबाएं।"
  },
  {
    id: "cons-cha",
    char: "च",
    keyLabel: "; (Semicolon)",
    code: "Semicolon",
    isShift: false,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (; Key)",
    group: "consonants-1",
    groupTitle: "Basic Consonants - Part 1 (क वर्ग एवं च वर्ग)",
    exampleWords: ["चमक", "चावल", "चाय", "चित्र"],
    drillSequence: "च च च च चमक चाय",
    description: "व्यंजन 'च' - होम रो पर दाएँ हाथ की सबसे छोटी उंगली (;) से दबाएं।"
  },
  {
    id: "cons-chha",
    char: "छ",
    keyLabel: "Shift + ;",
    code: "Semicolon",
    isShift: true,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (Shift + ;)",
    group: "consonants-1",
    groupTitle: "Basic Consonants - Part 1 (क वर्ग एवं च वर्ग)",
    exampleWords: ["छाता", "छत", "छवि", "छोटा"],
    drillSequence: "छ छ छ छ छाता छत",
    description: "व्यंजन 'छ' - Shift दबाकर दाएँ हाथ की कनिष्ठिका (;) दबाएं।"
  },
  {
    id: "cons-ja",
    char: "ज",
    keyLabel: "P",
    code: "KeyP",
    isShift: false,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (P Key)",
    group: "consonants-1",
    groupTitle: "Basic Consonants - Part 1 (क वर्ग एवं च वर्ग)",
    exampleWords: ["जल", "जगत", "जीवन", "जहाज"],
    drillSequence: "ज ज ज ज जल जगत",
    description: "व्यंजन 'ज' - ऊपरी पंक्ति पर दाएँ हाथ की कनिष्ठिका (P) से दबाएं।"
  },
  {
    id: "cons-jha",
    char: "झ",
    keyLabel: "Shift + P",
    code: "KeyP",
    isShift: true,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (Shift + P)",
    group: "consonants-1",
    groupTitle: "Basic Consonants - Part 1 (क वर्ग एवं च वर्ग)",
    exampleWords: ["झंडा", "झरना", "झील", "झूठ"],
    drillSequence: "झ झ झ झ झंडा झरना",
    description: "व्यंजन 'झ' - Shift दबाकर दाएँ हाथ की कनिष्ठिका (P) दबाएं।"
  },

  // 3. Consonants - Part 2
  {
    id: "cons-ta",
    char: "ट",
    keyLabel: "' (Quote)",
    code: "Quote",
    isShift: false,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (' Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["टमाटर", "टोपी", "टब", "टिकट"],
    drillSequence: "ट ट ट ट टमाटर टब",
    description: "व्यंजन 'ट' - होम रो पर दाएँ हाथ की कनिष्ठिका (') से दबाएं।"
  },
  {
    id: "cons-tha",
    char: "ठ",
    keyLabel: "Shift + '",
    code: "Quote",
    isShift: true,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (Shift + ')",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["ठग", "ठंड", "ठोकर", "ठिकाना"],
    drillSequence: "ठ ठ ठ ठ ठंड ठग",
    description: "व्यंजन 'ठ' - Shift दबाकर दाएँ हाथ की कनिष्ठिका (') दबाएं।"
  },
  {
    id: "cons-da",
    char: "ड",
    keyLabel: "[",
    code: "BracketLeft",
    isShift: false,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger ([ Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["डमरू", "डाक", "डर", "डाल"],
    drillSequence: "ड ड ड ड डर डाल",
    description: "व्यंजन 'ड' - दाएँ हाथ की कनिष्ठिका ([) से दबाएं।"
  },
  {
    id: "cons-dha",
    char: "ढ",
    keyLabel: "Shift + [",
    code: "BracketLeft",
    isShift: true,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (Shift + [)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["ढक्कन", "ढाल", "ढोलक"],
    drillSequence: "ढ ढ ढ ढ ढाल ढोल",
    description: "व्यंजन 'ढ' - Shift दबाकर दाएँ हाथ की कनिष्ठिका ([) दबाएं।"
  },
  {
    id: "cons-dental-ta",
    char: "त",
    keyLabel: "L",
    code: "KeyL",
    isShift: false,
    finger: "right-ring",
    fingerLabel: "Right Ring Finger (L Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["तरबूज", "तालाब", "तारा", "तीर"],
    drillSequence: "त त त त तरबूज तीर",
    description: "व्यंजन 'त' - होम रो पर दाएँ हाथ की अनामिका (L) उंगली से दबाएं।"
  },
  {
    id: "cons-dental-tha",
    char: "थ",
    keyLabel: "Shift + L",
    code: "KeyL",
    isShift: true,
    finger: "right-ring",
    fingerLabel: "Right Ring Finger (Shift + L)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["थाली", "थक", "थर्मस", "थोड़ा"],
    drillSequence: "थ थ थ थ थाली थक",
    description: "व्यंजन 'थ' - Shift दबाकर दाएँ हाथ की अनामिका (L) दबाएं।"
  },
  {
    id: "cons-dental-da",
    char: "द",
    keyLabel: "O",
    code: "KeyO",
    isShift: false,
    finger: "right-ring",
    fingerLabel: "Right Ring Finger (O Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["दवा", "दिन", "दूध", "दीपक"],
    drillSequence: "द द द द दवा दूध",
    description: "व्यंजन 'द' - ऊपरी पंक्ति पर दाएँ हाथ की अनामिका (O) से दबाएं।"
  },
  {
    id: "cons-dental-dha",
    char: "ध",
    keyLabel: "Shift + O",
    code: "KeyO",
    isShift: true,
    finger: "right-ring",
    fingerLabel: "Right Ring Finger (Shift + O)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["धनुष", "धन", "धूप", "धरती"],
    drillSequence: "ध ध ध ध धन धूप",
    description: "व्यंजन 'ध' - Shift दबाकर दाएँ हाथ की अनामिका (O) दबाएं।"
  },
  {
    id: "cons-na",
    char: "न",
    keyLabel: "V",
    code: "KeyV",
    isShift: false,
    finger: "left-index",
    fingerLabel: "Left Index Finger (V Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["नल", "नदी", "नाम", "नमक"],
    drillSequence: "न न न न नल नमक",
    description: "व्यंजन 'न' - निचली पंक्ति पर बाएँ हाथ की तर्जनी (V) से दबाएं।"
  },
  {
    id: "cons-pa",
    char: "प",
    keyLabel: "H",
    code: "KeyH",
    isShift: false,
    finger: "right-index",
    fingerLabel: "Right Index Finger (H Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["पतंग", "पानी", "पेड़", "पहाड़"],
    drillSequence: "प प प प पतंग पानी",
    description: "व्यंजन 'प' - होम रो पर दाएँ हाथ की तर्जनी (H) उंगली से दबाएं।"
  },
  {
    id: "cons-pha",
    char: "फ",
    keyLabel: "Shift + H",
    code: "KeyH",
    isShift: true,
    finger: "right-index",
    fingerLabel: "Right Index Finger (Shift + H)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["फल", "फूल", "फसल", "फाटक"],
    drillSequence: "फ फ फ फ फल फूल",
    description: "व्यंजन 'फ' - Shift दबाकर दाएँ हाथ की तर्जनी (H) दबाएं।"
  },
  {
    id: "cons-ba",
    char: "ब",
    keyLabel: "Y",
    code: "KeyY",
    isShift: false,
    finger: "right-index",
    fingerLabel: "Right Index Finger (Y Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["बस", "बकरी", "बादल", "बालक"],
    drillSequence: "ब ब ब ब बस बादल",
    description: "व्यंजन 'ब' - ऊपरी पंक्ति पर दाएँ हाथ की तर्जनी (Y) से दबाएं।"
  },
  {
    id: "cons-bha",
    char: "भ",
    keyLabel: "Shift + Y",
    code: "KeyY",
    isShift: true,
    finger: "right-index",
    fingerLabel: "Right Index Finger (Shift + Y)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["भालू", "भारत", "भवन", "भाई"],
    drillSequence: "भ भ भ भ भारत भवन",
    description: "व्यंजन 'भ' - Shift दबाकर दाएँ हाथ की तर्जनी (Y) दबाएं।"
  },
  {
    id: "cons-ma",
    char: "म",
    keyLabel: "C",
    code: "KeyC",
    isShift: false,
    finger: "left-middle",
    fingerLabel: "Left Middle Finger (C Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["मछली", "महल", "माता", "मित्र"],
    drillSequence: "म म म म महल माता",
    description: "व्यंजन 'म' - निचली पंक्ति पर बाएँ हाथ की मध्यमा (C) से दबाएं।"
  },
  {
    id: "cons-ya",
    char: "य",
    keyLabel: "/",
    code: "Slash",
    isShift: false,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (/ Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["यज्ञ", "यात्री", "योग", "युवा"],
    drillSequence: "य य य य यज्ञ युवा",
    description: "व्यंजन 'य' - निचली पंक्ति पर दाएँ हाथ की कनिष्ठिका (/) से दबाएं।"
  },
  {
    id: "cons-ra",
    char: "र",
    keyLabel: "J",
    code: "KeyJ",
    isShift: false,
    finger: "right-index",
    fingerLabel: "Right Index Finger (J Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["रथ", "रात", "रास्ता", "रोटी"],
    drillSequence: "र र र र रथ रास्ता",
    description: "व्यंजन 'र' - होम रो पर दाएँ हाथ की तर्जनी (J) उंगली से दबाएं।"
  },
  {
    id: "cons-la",
    char: "ल",
    keyLabel: "N",
    code: "KeyN",
    isShift: false,
    finger: "right-index",
    fingerLabel: "Right Index Finger (N Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["लड़का", "लाल", "लोग", "लहर"],
    drillSequence: "ल ल ल ल लड़का लाल",
    description: "व्यंजन 'ल' - निचली पंक्ति पर दाएँ हाथ की तर्जनी (N) से दबाएं।"
  },
  {
    id: "cons-va",
    char: "व",
    keyLabel: "B",
    code: "KeyB",
    isShift: false,
    finger: "left-index",
    fingerLabel: "Left Index Finger (B Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["वन", "वकील", "वायु", "विद्या"],
    drillSequence: "व व व व वन वायु",
    description: "व्यंजन 'व' - निचली पंक्ति पर बाएँ हाथ की तर्जनी (B) से दबाएं।"
  },
  {
    id: "cons-sa",
    char: "स",
    keyLabel: "M",
    code: "KeyM",
    isShift: false,
    finger: "right-index",
    fingerLabel: "Right Index Finger (M Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["सपना", "समय", "सूरज", "सड़क"],
    drillSequence: "स स स स समय सूरज",
    description: "व्यंजन 'स' - निचली पंक्ति पर दाएँ हाथ की तर्जनी (M) से दबाएं।"
  },
  {
    id: "cons-sha",
    char: "श",
    keyLabel: "Shift + M",
    code: "KeyM",
    isShift: true,
    finger: "right-index",
    fingerLabel: "Right Index Finger (Shift + M)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["शहर", "शांति", "शेर", "शिक्षक"],
    drillSequence: "श श श श शहर शेर",
    description: "व्यंजन 'श' - Shift दबाकर दाएँ हाथ की तर्जनी (M) दबाएं।"
  },
  {
    id: "cons-ha",
    char: "ह",
    keyLabel: "U",
    code: "KeyU",
    isShift: false,
    finger: "right-index",
    fingerLabel: "Right Index Finger (U Key)",
    group: "consonants-2",
    groupTitle: "Remaining Consonants (ट, त, प, य वर्ग)",
    exampleWords: ["हाथी", "हवा", "हाथ", "हिम्मत"],
    drillSequence: "ह ह ह ह हवा हाथ",
    description: "व्यंजन 'ह' - ऊपरी पंक्ति पर दाएँ हाथ की तर्जनी (U) से दबाएं।"
  },

  // 4. Matras
  {
    id: "matra-aa",
    char: "ा",
    keyLabel: "E",
    code: "KeyE",
    isShift: false,
    finger: "left-middle",
    fingerLabel: "Left Middle Finger (E Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["काम", "दाम", "नाम", "माता"],
    drillSequence: "का दा ना मा काम नाम",
    description: "आ की मात्रा (ा) - बाएँ हाथ की मध्यमा उंगली से E दबाएं।"
  },
  {
    id: "matra-i",
    char: "ि",
    keyLabel: "F",
    code: "KeyF",
    isShift: false,
    finger: "left-index",
    fingerLabel: "Left Index Finger (F Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["किताब", "दिन", "सिर", "मित्र"],
    drillSequence: "कि दि सि मि किताब दिन",
    description: "इ की मात्रा (ि) - InScript में व्यंजन के बाद F दबाएं (जैसे क + F = कि)।"
  },
  {
    id: "matra-ee",
    char: "ी",
    keyLabel: "R",
    code: "KeyR",
    isShift: false,
    finger: "left-index",
    fingerLabel: "Left Index Finger (R Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["कीमत", "पानी", "तीर", "गीत"],
    drillSequence: "की पी ती गी कीमत पानी",
    description: "ई की मात्रा (ी) - बाएँ हाथ की तर्जनी उंगली से R दबाएं।"
  },
  {
    id: "matra-u",
    char: "ु",
    keyLabel: "G",
    code: "KeyG",
    isShift: false,
    finger: "left-index",
    fingerLabel: "Left Index Finger (G Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["कुल", "गुलाब", "सुमन", "मधुर"],
    drillSequence: "कु गु सु मु कुल गुलाब",
    description: "उ की मात्रा (ु) - बाएँ हाथ की तर्जनी उंगली से G दबाएं।"
  },
  {
    id: "matra-uu",
    char: "ू",
    keyLabel: "T",
    code: "KeyT",
    isShift: false,
    finger: "left-index",
    fingerLabel: "Left Index Finger (T Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["कूद", "फूल", "धूप", "सूरज"],
    drillSequence: "कू फू धू सू कूद फूल",
    description: "ऊ की मात्रा (ू) - बाएँ हाथ की तर्जनी उंगली से T दबाएं।"
  },
  {
    id: "matra-e",
    char: "े",
    keyLabel: "S",
    code: "KeyS",
    isShift: false,
    finger: "left-ring",
    fingerLabel: "Left Ring Finger (S Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["केला", "रेल", "पेड़", "देश"],
    drillSequence: "के रे पे दे केला देश",
    description: "ए की मात्रा (े) - बाएँ हाथ की अनामिका उंगली से S दबाएं।"
  },
  {
    id: "matra-ai",
    char: "ै",
    keyLabel: "W",
    code: "KeyW",
    isShift: false,
    finger: "left-ring",
    fingerLabel: "Left Ring Finger (W Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["कैसा", "पैसा", "सैर", "मैदान"],
    drillSequence: "कै पै सै मै कैसा पैसा",
    description: "ऐ की मात्रा (ै) - बाएँ हाथ की अनामिका उंगली से W दबाएं।"
  },
  {
    id: "matra-o",
    char: "ो",
    keyLabel: "A",
    code: "KeyA",
    isShift: false,
    finger: "left-pinky",
    fingerLabel: "Left Pinky Finger (A Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["कोयल", "मोर", "सोना", "लोग"],
    drillSequence: "को मो सो लो कोयल मोर",
    description: "ओ की मात्रा (ो) - बाएँ हाथ की कनिष्ठिका उंगली से A दबाएं।"
  },
  {
    id: "matra-au",
    char: "ौ",
    keyLabel: "Q",
    code: "KeyQ",
    isShift: false,
    finger: "left-pinky",
    fingerLabel: "Left Pinky Finger (Q Key)",
    group: "matras",
    groupTitle: "Matras (मात्राएं)",
    exampleWords: ["कौआ", "दौड़", "पौधा", "मौका"],
    drillSequence: "कौ दौ पौ मौ मौका दौड़",
    description: "औ की मात्रा (ौ) - बाएँ हाथ की कनिष्ठिका उंगली से Q दबाएं।"
  },
  {
    id: "matra-halant",
    char: "्",
    keyLabel: "D",
    code: "KeyD",
    isShift: false,
    finger: "left-middle",
    fingerLabel: "Left Middle Finger (D Key)",
    group: "matras",
    groupTitle: "Matras & Modifiers (मात्राएं एवं हलन्त)",
    exampleWords: ["क्या", "पक्का", "सत्य", "स्थान"],
    drillSequence: "क् प् स् त् क्या सत्य",
    description: "हलन्त (्) - अक्षर को आधा करने के लिए D दबाएं।"
  },
  {
    id: "matra-anusvara",
    char: "ं",
    keyLabel: "X",
    code: "KeyX",
    isShift: false,
    finger: "left-ring",
    fingerLabel: "Left Ring Finger (X Key)",
    group: "matras",
    groupTitle: "Matras & Modifiers (मात्राएं एवं अनुस्वार)",
    exampleWords: ["गंगा", "पंत", "हंस", "रंग"],
    drillSequence: "कं पं हं रं गंगा रंग",
    description: "अनुस्वार बिंदु (ं) - बाएँ हाथ की अनामिका से X दबाएं।"
  },
  {
    id: "matra-visarga",
    char: "ः",
    keyLabel: "Shift + -",
    code: "Minus",
    isShift: true,
    finger: "right-pinky",
    fingerLabel: "Right Pinky Finger (Shift + -)",
    group: "matras",
    groupTitle: "Matras & Modifiers (मात्राएं एवं विसर्ग)",
    exampleWords: ["अतः", "पुनः", "प्रातः", "क्रमशः"],
    drillSequence: "अतः पुनः प्रातः क्रमशः",
    description: "विसर्ग (ः) - दाएँ हाथ की कनिष्ठिका से Shift + - दबाएं।"
  }
];

// Matra Mastery comprehensive data
export interface MatraDetail {
  id: string;
  char: string;
  name: string;
  englishKey: string;
  code: string;
  isShift: boolean;
  finger: string;
  sound: string;
  consonantCombos: { consonant: string; result: string }[];
  words: string[];
  explanation: string;
  fillBlanks: { question: string; missingChar: string; fullWord: string }[];
}

export const matraMasteryList: MatraDetail[] = [
  {
    id: "matra-aa",
    char: "ा",
    name: "आ की मात्रा (AA)",
    englishKey: "E",
    code: "KeyE",
    isShift: false,
    finger: "Left Middle Finger",
    sound: "Long 'aa' sound as in Car / Father",
    consonantCombos: [
      { consonant: "क", result: "का" },
      { consonant: "म", result: "मा" },
      { consonant: "त", result: "ता" },
      { consonant: "न", result: "ना" },
      { consonant: "र", result: "रा" },
    ],
    words: ["काम", "नाम", "माता", "भारत", "राजा", "साला"],
    explanation: "व्यंजन के तुरंत बाद E कुंजी दबाने से 'ा' की मात्रा जुड़ती है। उदाहरण: क + E = का।",
    fillBlanks: [
      { question: "क__म", missingChar: "ा", fullWord: "काम" },
      { question: "भ__रत", missingChar: "ा", fullWord: "भारत" },
      { question: "र__ज__", missingChar: "ा", fullWord: "राजा" },
    ]
  },
  {
    id: "matra-i",
    char: "ि",
    name: "इ की मात्रा (Chhoti I)",
    englishKey: "F",
    code: "KeyF",
    isShift: false,
    finger: "Left Index Finger",
    sound: "Short 'i' sound as in Sit / Pin",
    consonantCombos: [
      { consonant: "क", result: "कि" },
      { consonant: "द", result: "दि" },
      { consonant: "म", result: "मि" },
      { consonant: "स", result: "सि" },
      { consonant: "प", result: "पि" },
    ],
    words: ["किताब", "दिन", "सिर", "मित्र", "पिता", "किसान"],
    explanation: "ध्यान रहे: इनस्क्रिप्ट में पहले व्यंजन टाइप करें फिर F दबाएं! (क + F = कि)।",
    fillBlanks: [
      { question: "क__ताब", missingChar: "ि", fullWord: "किताब" },
      { question: "द__न", missingChar: "ि", fullWord: "दिन" },
      { question: "म__त्र", missingChar: "ि", fullWord: "मित्र" },
    ]
  },
  {
    id: "matra-ee",
    char: "ी",
    name: "ई की मात्रा (Badi II)",
    englishKey: "R",
    code: "KeyR",
    isShift: false,
    finger: "Left Index Finger",
    sound: "Long 'ee' sound as in See / Meet",
    consonantCombos: [
      { consonant: "क", result: "की" },
      { consonant: "प", result: "पी" },
      { consonant: "त", result: "ती" },
      { consonant: "ग", result: "गी" },
      { consonant: "न", result: "नी" },
    ],
    words: ["कीमत", "पानी", "तीर", "गीत", "नदी", "दीवार"],
    explanation: "व्यंजन के बाद R दबाने से दीर्घ 'ी' की मात्रा दाईं ओर लगती है।",
    fillBlanks: [
      { question: "प__नी", missingChar: "ी", fullWord: "पानी" },
      { question: "क__मत", missingChar: "ी", fullWord: "कीमत" },
      { question: "नद__", missingChar: "ी", fullWord: "नदी" },
    ]
  },
  {
    id: "matra-u",
    char: "ु",
    name: "उ की मात्रा (Chhota U)",
    englishKey: "G",
    code: "KeyG",
    isShift: false,
    finger: "Left Index Finger",
    sound: "Short 'u' sound as in Put / Book",
    consonantCombos: [
      { consonant: "क", result: "कु" },
      { consonant: "ग", result: "गु" },
      { consonant: "स", result: "सु" },
      { consonant: "प", result: "पु" },
      { consonant: "म", result: "मु" },
    ],
    words: ["कुल", "गुलाब", "सुमन", "मधुर", "पुत्र", "खुशी"],
    explanation: "व्यंजन के बाद G दबाने से नीचे की ओर बाईं मुड़ी 'ु' मात्रा लगती है।",
    fillBlanks: [
      { question: "क__ल", missingChar: "ु", fullWord: "कुल" },
      { question: "ग__लाब", missingChar: "ु", fullWord: "गुलाब" },
      { question: "प__त्र", missingChar: "ु", fullWord: "पुत्र" },
    ]
  },
  {
    id: "matra-uu",
    char: "ू",
    name: "ऊ की मात्रा (Bada UU)",
    englishKey: "T",
    code: "KeyT",
    isShift: false,
    finger: "Left Index Finger",
    sound: "Long 'oo' sound as in Moon / Tool",
    consonantCombos: [
      { consonant: "क", result: "कू" },
      { consonant: "फ", result: "फूल" },
      { consonant: "ध", result: "धू" },
      { consonant: "स", result: "सू" },
      { consonant: "द", result: "दू" },
    ],
    words: ["कूद", "फूल", "धूप", "सूरज", "दूध", "आलू"],
    explanation: "व्यंजन के बाद T दबाने से नीचे दाईं ओर मुड़ी 'ू' मात्रा लगती है।",
    fillBlanks: [
      { question: "फ__ल", missingChar: "ू", fullWord: "फूल" },
      { question: "स__रज", missingChar: "ू", fullWord: "सूरज" },
      { question: "द__ध", missingChar: "ू", fullWord: "दूध" },
    ]
  },
  {
    id: "matra-ri",
    char: "ृ",
    name: "ऋ की मात्रा (RI)",
    englishKey: "= (Equal)",
    code: "Equal",
    isShift: false,
    finger: "Right Pinky Finger",
    sound: "'ri' vocalic sound as in Sanskrit Ritu",
    consonantCombos: [
      { consonant: "क", result: "कृ" },
      { consonant: "ग", result: "गृह" },
      { consonant: "म", result: "मृ" },
      { consonant: "प", result: "पृ" },
      { consonant: "व", result: "वृ" },
    ],
    words: ["कृपा", "गृह", "मृग", "ऋषि", "पृष्ठ", "वृक्ष"],
    explanation: "व्यंजन के बाद Equal (=) कुंजी दबाने से नीचे 'ृ' मात्रा जुड़ती है।",
    fillBlanks: [
      { question: "क__पा", missingChar: "ृ", fullWord: "कृपा" },
      { question: "ग__ह", missingChar: "ृ", fullWord: "गृह" },
      { question: "व__क्ष", missingChar: "ृ", fullWord: "वृक्ष" },
    ]
  },
  {
    id: "matra-e",
    char: "े",
    name: "ए की मात्रा (E)",
    englishKey: "S",
    code: "KeyS",
    isShift: false,
    finger: "Left Ring Finger",
    sound: "Pure 'e' sound as in May / Hey",
    consonantCombos: [
      { consonant: "क", result: "के" },
      { consonant: "म", result: "मे" },
      { consonant: "स", result: "से" },
      { consonant: "र", result: "रे" },
      { consonant: "द", result: "दे" },
    ],
    words: ["केला", "रेल", "पेड़", "देश", "मेला", "सेवा"],
    explanation: "व्यंजन के बाद S दबाने से ऊपर एक मात्रा 'े' लगती है।",
    fillBlanks: [
      { question: "क__ला", missingChar: "े", fullWord: "केला" },
      { question: "द__श", missingChar: "े", fullWord: "देश" },
      { question: "प__ड़", missingChar: "े", fullWord: "पेड़" },
    ]
  },
  {
    id: "matra-ai",
    char: "ै",
    name: "ऐ की मात्रा (AI)",
    englishKey: "W",
    code: "KeyW",
    isShift: false,
    finger: "Left Ring Finger",
    sound: "Diphthong 'ai' sound as in Pair / Hat",
    consonantCombos: [
      { consonant: "क", result: "कै" },
      { consonant: "प", result: "पै" },
      { consonant: "स", result: "सै" },
      { consonant: "म", result: "मै" },
      { consonant: "ब", result: "बै" },
    ],
    words: ["कैसा", "पैसा", "सैर", "मैदान", "बैल", "सैनिक"],
    explanation: "व्यंजन के बाद W दबाने से ऊपर दो मात्राएं 'ै' लगती हैं।",
    fillBlanks: [
      { question: "क__सा", missingChar: "ै", fullWord: "कैसा" },
      { question: "प__सा", missingChar: "ै", fullWord: "पैसा" },
      { question: "म__दान", missingChar: "ै", fullWord: "मैदान" },
    ]
  },
  {
    id: "matra-o",
    char: "ो",
    name: "ओ की मात्रा (O)",
    englishKey: "A",
    code: "KeyA",
    isShift: false,
    finger: "Left Pinky Finger",
    sound: "Pure 'o' sound as in Go / Boat",
    consonantCombos: [
      { consonant: "क", result: "को" },
      { consonant: "म", result: "मो" },
      { consonant: "स", result: "सो" },
      { consonant: "ल", result: "लो" },
      { consonant: "र", result: "रो" },
    ],
    words: ["कोयल", "मोर", "सोना", "लोग", "रोटी", "घोड़ा"],
    explanation: "व्यंजन के बाद A दबाने से एक डंडा और ऊपर मात्रा 'ो' जुड़ती है।",
    fillBlanks: [
      { question: "क__यल", missingChar: "ो", fullWord: "कोयल" },
      { question: "म__र", missingChar: "ो", fullWord: "मोर" },
      { question: "स__ना", missingChar: "ो", fullWord: "सोना" },
    ]
  },
  {
    id: "matra-au",
    char: "ौ",
    name: "औ की मात्रा (AU)",
    englishKey: "Q",
    code: "KeyQ",
    isShift: false,
    finger: "Left Pinky Finger",
    sound: "Broad 'au' sound as in Caught / Law",
    consonantCombos: [
      { consonant: "क", result: "कौ" },
      { consonant: "द", result: "दौ" },
      { consonant: "प", result: "पौ" },
      { consonant: "म", result: "मौ" },
      { consonant: "न", result: "नौ" },
    ],
    words: ["कौआ", "दौड़", "पौधा", "मौका", "नौकर", "मौसम"],
    explanation: "व्यंजन के बाद Q दबाने से एक डंडा और ऊपर दो मात्राएं 'ौ' लगती हैं।",
    fillBlanks: [
      { question: "प__धा", missingChar: "ौ", fullWord: "पौधा" },
      { question: "म__सम", missingChar: "ौ", fullWord: "मौसम" },
      { question: "द__ड़", missingChar: "ौ", fullWord: "दौड़" },
    ]
  },
  {
    id: "matra-anusvara",
    char: "ं",
    name: "अनुस्वार (Anusvara)",
    englishKey: "X",
    code: "KeyX",
    isShift: false,
    finger: "Left Ring Finger",
    sound: "Nasal dot 'n/m' sound as in Punk / Song",
    consonantCombos: [
      { consonant: "क", result: "कं" },
      { consonant: "प", result: "पं" },
      { consonant: "ह", result: "हं" },
      { consonant: "र", result: "रं" },
      { consonant: "स", result: "सं" },
    ],
    words: ["गंगा", "पंत", "हंस", "रंग", "संसार", "मंगल"],
    explanation: "अक्षर के ऊपर बिंदी (ं) लगाने के लिए X दबाएं।",
    fillBlanks: [
      { question: "ग__गा", missingChar: "ं", fullWord: "गंगा" },
      { question: "र__ग", missingChar: "ं", fullWord: "रंग" },
      { question: "ह__स", missingChar: "ं", fullWord: "हंस" },
    ]
  },
  {
    id: "matra-chandrabindu",
    char: "ँ",
    name: "अनुनासिक / चन्द्रबिन्दु (Chandrabindu)",
    englishKey: "Shift + X",
    code: "KeyX",
    isShift: true,
    finger: "Left Ring Finger",
    sound: "Nasalized vowel sound as in French bon",
    consonantCombos: [
      { consonant: "गा", result: "गाँ" },
      { consonant: "चा", result: "चाँ" },
      { consonant: "आ", result: "आँ" },
      { consonant: "ह", result: "हँ" },
    ],
    words: ["गाँव", "चाँद", "आँख", "हँसना", "दाँत", "कहाँ"],
    explanation: "चन्द्रबिन्दु लगाने के लिए Shift + X दबाएं।",
    fillBlanks: [
      { question: "च__द", missingChar: "ाँ", fullWord: "चाँद" },
      { question: "ग__व", missingChar: "ाँ", fullWord: "गाँव" },
      { question: "द__त", missingChar: "ाँ", fullWord: "दाँत" },
    ]
  },
  {
    id: "matra-visarga",
    char: "ः",
    name: "विसर्ग (Visarga)",
    englishKey: "Shift + -",
    code: "Minus",
    isShift: true,
    finger: "Right Pinky Finger",
    sound: "Gentle breathy 'h' sound as in Aha",
    consonantCombos: [
      { consonant: "अत", result: "अतः" },
      { consonant: "पुन", result: "पुनः" },
      { consonant: "प्रात", result: "प्रातः" },
    ],
    words: ["अतः", "पुनः", "प्रातः", "क्रमशः", "मूलतः", "दुःख"],
    explanation: "विसर्ग के दो बिंदु (ः) लगाने के लिए Shift + Minus (-) दबाएं।",
    fillBlanks: [
      { question: "अत__", missingChar: "ः", fullWord: "अतः" },
      { question: "पुन__", missingChar: "ः", fullWord: "पुनः" },
      { question: "प्रात__", missingChar: "ः", fullWord: "प्रातः" },
    ]
  },
  {
    id: "matra-halant",
    char: "्",
    name: "हलन्त (Halant / Half letter virama)",
    englishKey: "D",
    code: "KeyD",
    isShift: false,
    finger: "Left Middle Finger",
    sound: "Stops inherent 'a' vowel to create half letter",
    consonantCombos: [
      { consonant: "क + ् + य", result: "क्या" },
      { consonant: "स + ् + त", result: "स्त" },
      { consonant: "प + ् + य", result: "प्या" },
    ],
    words: ["क्या", "पक्का", "सत्य", "स्थान", "ध्यान", "विद्या"],
    explanation: "हिंदी इनस्क्रिप्ट में किसी अक्षर को आधा करने के लिए उसके बाद D कुंजी दबाई जाती है।",
    fillBlanks: [
      { question: "क__या", missingChar: "्", fullWord: "क्या" },
      { question: "स__त्य", missingChar: "्", fullWord: "सत्य" },
      { question: "स__थान", missingChar: "्", fullWord: "स्थान" },
    ]
  }
];

// Difficult Hindi Words Categories
export interface DifficultWordCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  words: {
    word: string;
    meaning: string;
    keysSummary: string;
    difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  }[];
}

export const difficultWordCategories: DifficultWordCategory[] = [
  {
    id: "common-words",
    title: "Common Hindi Words",
    description: "Daily conversational and frequently used official Hindi vocabulary.",
    icon: "🗣️",
    words: [
      { word: "नमस्ते", meaning: "Greeting / Respectful Salutation", keysSummary: "न + म + स + ् + त + े", difficulty: "Easy" },
      { word: "धन्यवाद", meaning: "Thank you / Gratitude", keysSummary: "ध + न + ् + य + व + ा + द", difficulty: "Medium" },
      { word: "कृपया", meaning: "Please / Kindly", keysSummary: "क + ृ + प + य + ा", difficulty: "Medium" },
      { word: "भारत", meaning: "India", keysSummary: "भ + ा + र + त", difficulty: "Easy" },
      { word: "विद्यालय", meaning: "School / Institution of learning", keysSummary: "व + ि + द + ् + य + ा + ल + य", difficulty: "Hard" },
      { word: "महत्वपूर्ण", meaning: "Important / Significant", keysSummary: "म + ह + त + ् + व + प + ू + र + ् + ण", difficulty: "Expert" },
      { word: "परिवार", meaning: "Family", keysSummary: "प + र + ि + व + ा + र", difficulty: "Easy" },
      { word: "अनुभव", meaning: "Experience", keysSummary: "अ + न + ु + भ + व", difficulty: "Easy" },
    ]
  },
  {
    id: "govt-exam-words",
    title: "Government Exam Words",
    description: "High-frequency vocabulary used in SSC, High Court, DSSSB, and Banking typing tests.",
    icon: "🏛️",
    words: [
      { word: "प्रशासनिक", meaning: "Administrative", keysSummary: "प + ् + र + श + ा + स + न + ि + क", difficulty: "Hard" },
      { word: "सचिवालय", meaning: "Secretariat", keysSummary: "स + च + ि + व + ा + ल + य", difficulty: "Medium" },
      { word: "संविधान", meaning: "Constitution", keysSummary: "स + ं + व + ि + ध + ा + न", difficulty: "Medium" },
      { word: "उत्तरदायित्व", meaning: "Responsibility / Accountability", keysSummary: "उ + त + ् + त + र + द + ा + य + ि + त + ् + व", difficulty: "Expert" },
      { word: "अधिनियम", meaning: "Act / Enactment", keysSummary: "अ + ध + ि + न + ि + य + म", difficulty: "Medium" },
      { word: "कार्यालय", meaning: "Office", keysSummary: "क + ा + र + ् + य + ा + ल + य", difficulty: "Hard" },
      { word: "न्यायालय", meaning: "Court of Law", keysSummary: "न + ् + य + ा + य + ा + ल + य", difficulty: "Hard" },
      { word: "अधिसूचना", meaning: "Official Notification", keysSummary: "अ + ध + ि + स + ू + च + न + ा", difficulty: "Medium" },
    ]
  },
  {
    id: "difficult-matras",
    title: "Difficult Matra Words",
    description: "Words with complex, layered or uncommon vowel diacritics.",
    icon: "🎯",
    words: [
      { word: "कौतूहल", meaning: "Curiosity / Inquisitiveness", keysSummary: "क + ौ + त + ू + ह + ल", difficulty: "Hard" },
      { word: "पुनरुत्थान", meaning: "Resurgence / Revival", keysSummary: "प + ु + न + र + ु + त + ् + थ + ा + न", difficulty: "Expert" },
      { word: "गृहिणी", meaning: "Homemaker", keysSummary: "ग + ृ + ह + ि + ण + ी", difficulty: "Hard" },
      { word: "आशीर्वाद", meaning: "Blessing", keysSummary: "आ + श + ी + र + ् + व + ा + द", difficulty: "Expert" },
      { word: "ऐतिहासिक", meaning: "Historical", keysSummary: "ऐ + त + ि + ह + ा + स + ि + क", difficulty: "Hard" },
      { word: "प्रौद्योगिकी", meaning: "Technology", keysSummary: "प + ् + र + ौ + द + ् + य + ो + ग + ि + क + ी", difficulty: "Expert" },
      { word: "ऋतुराज", meaning: "King of seasons (Spring)", keysSummary: "ऋ + त + ु + र + ा + ज", difficulty: "Medium" },
    ]
  },
  {
    id: "sanyukt-akshar",
    title: "संयुक्त अक्षर (Conjuncts)",
    description: "Words containing half-letters, reph (र्), and complex ligatures.",
    icon: "🔗",
    words: [
      { word: "स्वास्थ्य", meaning: "Health", keysSummary: "स + ् + व + ा + स + ् + थ + ् + य", difficulty: "Expert" },
      { word: "दृष्टिकोण", meaning: "Perspective / Point of view", keysSummary: "द + ृ + ष + ् + ट + ि + क + ो + ण", difficulty: "Expert" },
      { word: "स्वतंत्रता", meaning: "Freedom / Independence", keysSummary: "स + ् + व + त + ं + त + ् + र + त + ा", difficulty: "Hard" },
      { word: "उज्ज्वल", meaning: "Bright / Radiant", keysSummary: "उ + ज + ् + ज + ् + व + ल", difficulty: "Expert" },
      { word: "क्षत्रिय", meaning: "Warrior class", keysSummary: "क + ् + ष + त + ् + र + ि + य", difficulty: "Hard" },
      { word: "दृढ़ता", meaning: "Determination / Firmness", keysSummary: "द + ृ + ढ़ + त + ा", difficulty: "Medium" },
      { word: "अंतर्राष्ट्रीय", meaning: "International", keysSummary: "अ + ं + त + र + ् + र + ा + ष + ् + ट + ् + र + ी + य", difficulty: "Expert" },
    ]
  },
  {
    id: "frequently-mistyped",
    title: "Frequently Mistyped Words",
    description: "Words where typists often make spelling or key placement errors.",
    icon: "⚠️",
    words: [
      { word: "श्रीमती", meaning: "Mrs. / Respected Lady", keysSummary: "श + ् + र + ी + म + त + ी", difficulty: "Medium" },
      { word: "त्योहार", meaning: "Festival", keysSummary: "त + ् + य + ो + ह + ा + र", difficulty: "Medium" },
      { word: "कवयित्री", meaning: "Poetess", keysSummary: "क + व + य + ि + त + ् + र + ी", difficulty: "Hard" },
      { word: "अन्त्याक्षरी", meaning: "Antakshari / Word game", keysSummary: "अ + न + ् + त + ् + य + ा + क + ् + ष + र + ी", difficulty: "Expert" },
      { word: "शृंगार", meaning: "Adornment / Beauty", keysSummary: "श + ृ + ं + ग + ा + र", difficulty: "Expert" },
      { word: "उज्ज्वल", meaning: "Luminous (Two half ज)", keysSummary: "उ + ज + ् + ज + ् + व + ल", difficulty: "Hard" },
    ]
  },
  {
    id: "long-words",
    title: "Long Hindi Words",
    description: "Multi-syllable extended Hindi words to test typing stamina and flow.",
    icon: "📏",
    words: [
      { word: "आत्मनिर्भरता", meaning: "Self-Reliance", keysSummary: "आ + त + ् + म + न + ि + र + ् + भ + र + त + ा", difficulty: "Hard" },
      { word: "विश्वविद्यालय", meaning: "University", keysSummary: "व + ि + श + ् + व + व + ि + द + ् + य + ा + ल + य", difficulty: "Hard" },
      { word: "सहानुभूतिपूर्वक", meaning: "Sympathetically", keysSummary: "स + ह + ा + न + ु + भ + ू + त + ि + प + ू + र + ् + व + क", difficulty: "Expert" },
      { word: "संवैधानिकता", meaning: "Constitutionality", keysSummary: "स + ं + व + ै + ध + ा + न + ि + क + त + ा", difficulty: "Hard" },
      { word: "पर्यावरणविद्", meaning: "Environmentalist", keysSummary: "प + र + ् + य + ा + व + र + ण + व + ि + द + ्", difficulty: "Expert" },
    ]
  }
];

// Common Hindi Typing Mistakes Trainer Lessons
export interface CommonMistakeLesson {
  id: string;
  title: string;
  topic: string;
  incorrectResult: string;
  correctResult: string;
  explanation: string;
  keySequence: string;
  virtualKeyHighlight: string;
  practiceDrill: string;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const commonMistakesLessons: CommonMistakeLesson[] = [
  {
    id: "mistake-1-matra-order",
    title: "1. Matra Placement Order (मात्रा क्रम की गलती)",
    topic: "Matra order in InScript",
    incorrectResult: "ि + क = गलत (कुछ नहीं बनेगा या भ्रम)",
    correctResult: "क + ि = कि (बिल्कुल सही)",
    explanation: "हस्तलिखित हिंदी में 'ि' पहले लगती है, परन्तु कंप्यूटर इनस्क्रिप्ट कीबोर्ड पर पहले व्यंजन टाइप किया जाता है और उसके बाद F कुंजी दबाई जाती है।",
    keySequence: "K कुंजी दबाएं (क), फिर F कुंजी दबाएं (ि) -> कि",
    virtualKeyHighlight: "KeyK, KeyF",
    practiceDrill: "कि कि कि किताब किताब दिन दिन",
    quiz: {
      question: "इनस्क्रिप्ट कीबोर्ड पर 'कि' टाइप करने का सही क्रम क्या है?",
      options: ["पहले F (ि) फिर K (क)", "पहले K (क) फिर F (ि)", "Shift + K फिर F", "Ctrl + K"],
      correctIndex: 1,
      explanation: "इनस्क्रिप्ट में हमेशा पहले व्यंजन (K) फिर मात्रा (F) दबाई जाती है।"
    }
  },
  {
    id: "mistake-2-halant-half-letter",
    title: "2. Halant & Half Letters (आधा अक्षर और हलन्त का उपयोग)",
    topic: "Halant Usage for Conjuncts",
    incorrectResult: "क् य = क ् य (बीच में स्पेस)",
    correctResult: "क्या (क + D + य)",
    explanation: "आधा अक्षर बनाने के लिए अक्षर के तुरंत बाद D दबाएं और बिना स्पेस दिए अगला अक्षर टाइप करें। कंप्यूटर दोनों को जोड़कर आधा अक्षर बना देगा।",
    keySequence: "K (क) + D (्) + / (य) = क्य",
    virtualKeyHighlight: "KeyK, KeyD, Slash",
    practiceDrill: "क्या क्या पक्का पक्का सत्य सत्य",
    quiz: {
      question: "'सत्य' शब्द में आधा 'त्' बनाने के लिए 'त' के बाद कौन सी कुंजी दबाई जाएगी?",
      options: ["Shift + L", "D (हलन्त)", "Backspace", "Space"],
      correctIndex: 1,
      explanation: "D कुंजी पर हलन्त (्) होता है, जो किसी भी पूर्ण व्यंजन को आधा बनाता है।"
    }
  },
  {
    id: "mistake-3-sanyukt-akshar",
    title: "3. संयुक्त अक्षर निर्माण (क्ष, त्र, ज्ञ, श्र)",
    topic: "Typing Conjuncts (क्ष, त्र, ज्ञ)",
    incorrectResult: "क्ष के लिए अलग सिंगल कुंजी तलाशना",
    correctResult: "क + ् + ष = क्ष  |  त + ् + र = त्र  |  ज + ् + ञ = ज्ञ",
    explanation: "इनस्क्रिप्ट में संयुक्त अक्षरों के लिए मानक नियम है: क (K) + हलन्त (D) + ष (Shift+,) = क्ष। इसी प्रकार त + ् + र = त्र। 'श्र' को सीधे Shift + Period (.) से भी टाइप किया जा सकता है।",
    keySequence: "K + D + Shift+, = क्ष  |  L + D + J = त्र  |  P + D + Shift+] = ज्ञ",
    virtualKeyHighlight: "KeyK, KeyD, Comma, Period",
    practiceDrill: "क्ष त्र ज्ञ श्र क्षत्रिय ज्ञान आश्रम",
    quiz: {
      question: "'त्र' अक्षर टाइप करने का सही संयोजन क्या है?",
      options: ["त + र", "त + ् + र", "Shift + T", "Alt + 0170"],
      correctIndex: 1,
      explanation: "त (L) + हलन्त (D) + र (J) मिलकर 'त्र' बनता है।"
    }
  },
  {
    id: "mistake-4-shift-confusion",
    title: "4. Shift वाले अक्षरों का भ्रम (द vs ध, ब vs भ, त vs थ)",
    topic: "Shift Key Confusion",
    incorrectResult: "द की जगह ध या ब की जगह भ टाइप हो जाना",
    correctResult: "O = द  |  Shift + O = ध  ||  Y = ब  |  Shift + Y = भ",
    explanation: "इनस्क्रिप्ट में प्रत्येक अल्पप्राण व्यंजन उसी कुंजी पर होता है और उसका महाप्राण व्यंजन उसी कुंजी के Shift पर होता है। जैसे K=क, Shift+K=ख।",
    keySequence: "O=द vs Shift+O=ध; Y=ब vs Shift+Y=भ; L=त vs Shift+L=थ",
    virtualKeyHighlight: "KeyO, KeyY, KeyL",
    practiceDrill: "द ध ब भ त थ दान धन बात भारत",
    quiz: {
      question: "'भारत' लिखने के लिए 'भ' किस कुंजी से बनेगा?",
      options: ["Y कुंजी सीधे", "Shift + Y", "Shift + B", "B कुंजी सीधे"],
      correctIndex: 1,
      explanation: "Y पर 'ब' होता है और Shift + Y पर 'भ' होता है।"
    }
  },
  {
    id: "mistake-5-confused-keys",
    title: "5. आपस में भ्रमित होने वाली कुंजियाँ (ब vs व, र vs ल)",
    topic: "Confusing Key Pairs",
    incorrectResult: "वकील के लिए ब (Y) दबा देना",
    correctResult: "Y = ब (Right Index)  |  B = व (Left Index)",
    explanation: "अंग्रेजी के 'B' पर हिंदी का 'व' होता है, जबकि हिंदी का 'ब' अंग्रेजी के 'Y' पर होता है। यह नए विद्यार्थियों की सबसे आम गलती है।",
    keySequence: "वकील = B (व) + K (क) + R (ी) + N (ल)",
    virtualKeyHighlight: "KeyY, KeyB, KeyJ, KeyN",
    practiceDrill: "ब व र ल बस वकील रात लाल",
    quiz: {
      question: "हिंदी अक्षर 'व' किस अंग्रेजी कुंजी पर होता है?",
      options: ["V", "W", "B", "Y"],
      correctIndex: 2,
      explanation: "अंग्रेजी 'B' कुंजी पर हिंदी का 'व' होता है, जबकि 'V' पर 'न' होता है।"
    }
  },
  {
    id: "mistake-6-nuqta-usage",
    title: "6. नुक्ता (़) का सही प्रयोग (ड़, ढ़, ज़, फ़)",
    topic: "Nuqta Placement",
    incorrectResult: "ड के बाद नुक्ता न लगाना या गलत कुंजी दबाना",
    correctResult: "ड ([) + ़ (]) = ड़  |  ढ (Shift+[) + ़ (]) = ढ़",
    explanation: "नुक्ता लगाने के लिए संबंधित अक्षर के बाद 'BracketRight (])' कुंजी दबाई जाती है। जैसे ड ([) + ] = ड़।",
    keySequence: "[ (ड) + ] (़) = ड़  |  P (ज) + ] (़) = ज़",
    virtualKeyHighlight: "BracketLeft, BracketRight",
    practiceDrill: "पेड़ बड़ा पढ़ना सड़क नज़र फ़िल्म",
    quiz: {
      question: "'पेड़' में 'ड़' बनाने के लिए 'ड' के बाद क्या दबाया जाता है?",
      options: ["D कुंजी", "] (BracketRight) कुंजी", "Dot (.) कुंजी", "Shift + D"],
      correctIndex: 1,
      explanation: "BracketRight (]) पर नुक्ता (़) होता है जो ड को ड़ बना देता है।"
    }
  },
  {
    id: "mistake-7-home-row-drift",
    title: "7. होम रो से उँगलियों का भटकना (Finger Drift)",
    topic: "Typing Posture & Home Row",
    incorrectResult: "एक उंगली से पूरा कीबोर्ड टाइप करना (हंट एंड पेक)",
    correctResult: "बाएं हाथ को ASDF और दाएं हाथ को JKL; पर स्थिर रखना",
    explanation: "तेज और सटीक टाइपिंग के लिए F और J की उभरी हुई गाइड लाइनों (bumps) पर दोनों तर्जनी उँगलियाँ हमेशा टिकी रहनी चाहिए।",
    keySequence: "Left: A S D F  <->  Right: J K L ;",
    virtualKeyHighlight: "KeyA, KeyS, KeyD, KeyF, KeyJ, KeyK, KeyL, Semicolon",
    practiceDrill: "ो े ् ि र क त च प म न व",
    quiz: {
      question: "टाइपिंग करते समय दाएँ हाथ की तर्जनी (Index finger) किस कुंजी पर विश्राम करती है?",
      options: ["H कुंजी पर", "J कुंजी पर", "K कुंजी पर", "L कुंजी पर"],
      correctIndex: 1,
      explanation: "J कुंजी पर एक छोटा बम्प (उभार) होता है, जहाँ दाएँ हाथ की तर्जनी स्थिर रहती है।"
    }
  }
];

// 14-Day Hindi Typing Journey Data
export interface DailyJourneyDay {
  day: number;
  title: string;
  subtitle: string;
  objective: string;
  charactersToLearn: string[];
  keysUsed: string[];
  practiceWords: string[];
  miniChallengeText: string;
  targetWpm: number;
  targetAccuracy: number;
  tips: string;
}

export const dailyJourneyDays: DailyJourneyDay[] = [
  {
    day: 1,
    title: "Day 1: Introduction to Hindi InScript",
    subtitle: "होम रो का परिचय एवं मूल अवधारणा",
    objective: "इनस्क्रिप्ट कीबोर्ड की मूल संरचना को समझें और होम रो (ASDF - JKL;) पर उँगलियाँ सेट करना सीखें।",
    charactersToLearn: ["ो", "े", "्", "ि", "ु", "प", "र", "क", "त", "च"],
    keysUsed: ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"],
    practiceWords: ["कर", "पर", "चल", "तक", "कम", "कल", "पल"],
    miniChallengeText: "कर पर चल तक कल कम",
    targetWpm: 12,
    targetAccuracy: 90,
    tips: "उँगलियों को हमेशा होम रो (A-S-D-F और J-K-L-;) पर रखें। स्पेस बार केवल अँगूठे से दबाएं।"
  },
  {
    day: 2,
    title: "Day 2: Primary Vowels (मूल स्वर)",
    subtitle: "अ, आ, इ, ई, उ, ऊ का अभ्यास",
    objective: "बाएँ हाथ से Shift दबाकर बनने वाले प्रमुख हिंदी स्वरों का अभ्यास करें।",
    charactersToLearn: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ"],
    keysUsed: ["Shift+D", "Shift+E", "Shift+F", "Shift+R", "Shift+G", "Shift+T", "Shift+S", "Shift+W"],
    practiceWords: ["आम", "आज", "इधर", "ईख", "उठ", "ऊन", "एक", "ऐसा"],
    miniChallengeText: "आज आम खा। इधर एक ऊन ला।",
    targetWpm: 14,
    targetAccuracy: 90,
    tips: "स्वर टाइप करते समय बायाँ Shift दाएँ हाथ से या दायाँ Shift बाएँ हाथ से सुविधानुसार दबाएं।"
  },
  {
    day: 3,
    title: "Day 3: Consonants Part 1 (व्यंजन - भाग 1)",
    subtitle: "होम रो व्यंजन (क, ख, प, फ, र, त, थ, च, छ)",
    objective: "होम रो पर स्थित मुख्य व्यंजनों और उनके Shift रूपों (महाप्राण) में निपुणता प्राप्त करें।",
    charactersToLearn: ["क", "ख", "प", "फ", "र", "त", "थ", "च", "छ", "ट", "ठ"],
    keysUsed: ["K", "Shift+K", "H", "Shift+H", "J", "L", "Shift+L", ";", "Shift+;", "'", "Shift+'"],
    practiceWords: ["कप", "खत", "पथ", "फल", "रथ", "चल", "छाता", "टब", "ठग"],
    miniChallengeText: "कमल खत पढ़। फल चख कर चल।",
    targetWpm: 16,
    targetAccuracy: 92,
    tips: "ध्यान रखें कि K पर 'क' है और Shift+K पर 'ख' है। दोनों एक ही उंगली से दबते हैं।"
  },
  {
    day: 4,
    title: "Day 4: Consonants Part 2 (व्यंजन - भाग 2)",
    subtitle: "ऊपरी एवं निचली पंक्ति के व्यंजन",
    objective: "ब, भ, ह, ग, घ, द, ध, ज, झ, म, न, व, ल, स, श का सटीक अभ्यास करें।",
    charactersToLearn: ["ब", "भ", "ह", "ग", "घ", "द", "ध", "ज", "झ", "म", "न", "व", "ल", "स", "श"],
    keysUsed: ["Y", "Shift+Y", "U", "I", "Shift+I", "O", "Shift+O", "P", "Shift+P", "C", "V", "B", "N", "M", "Shift+M"],
    practiceWords: ["भारत", "हवा", "गमला", "घर", "दिन", "धन", "जल", "महल", "नमक", "वन", "सपना", "शहर"],
    miniChallengeText: "भारत हमारा देश है। हम सब मिल कर रहेंगे।",
    targetWpm: 18,
    targetAccuracy: 92,
    tips: "B पर 'व' और Y पर 'ब' होता है। इसमें अक्सर गलती होती है, इसलिए सजग रहें।"
  },
  {
    day: 5,
    title: "Day 5: Matras Part 1 (मात्राएं - भाग 1)",
    subtitle: "ा, ि, ी, ु, ू मात्राओं का सुदृढ़ अभ्यास",
    objective: "सर्वाधिक प्रयोग होने वाली पांच मात्राओं को व्यंजनों के साथ तेजी से जोड़ना सीखें।",
    charactersToLearn: ["ा", "ि", "ी", "ु", "ू"],
    keysUsed: ["E", "F", "R", "G", "T"],
    practiceWords: ["काम", "किताब", "कीमत", "कुल", "कूद", "पानी", "गुलाब", "सूरज", "दीवार", "पुत्र"],
    miniChallengeText: "किताब पढ़ कर पानी पी। सूरज निकल आया।",
    targetWpm: 20,
    targetAccuracy: 93,
    tips: "इ की मात्रा (ि) हमेशा व्यंजन के बाद F दबाकर लगाएं।"
  },
  {
    day: 6,
    title: "Day 6: Matras Part 2 (मात्राएं - भाग 2)",
    subtitle: "े, ै, ो, ौ, ं, ः, ृ मात्राएं",
    objective: "जटिल मात्राओं, अनुस्वार (ं) और विसर्ग (ः) का व्यावहारिक उपयोग सीखें।",
    charactersToLearn: ["े", "ै", "ो", "ौ", "ं", "ः", "ृ"],
    keysUsed: ["S", "W", "A", "Q", "X", "Shift+-", "="],
    practiceWords: ["केला", "पैसा", "कोयल", "कौआ", "गंगा", "रंग", "अतः", "कृपा", "मैदान", "मौसम"],
    miniChallengeText: "कोयल मीठा गाती है। कौआ पेड़ पर बैठा है।",
    targetWpm: 20,
    targetAccuracy: 93,
    tips: "अनुस्वार के लिए X और ऐ की मात्रा के लिए W का प्रयोग करें।"
  },
  {
    day: 7,
    title: "Day 7: Common Everyday Words (दैनिक शब्द)",
    subtitle: "अति-प्रयुक्त 50 शब्दों का धाराप्रवाह अभ्यास",
    objective: "दैनिक बातचीत और आधिकारिक पत्राचार में आने वाले सामान्य शब्दों में गति बढ़ाएं।",
    charactersToLearn: ["नमस्ते", "धन्यवाद", "कृपया", "सरकार", "समय", "काम"],
    keysUsed: ["All Basic Keys"],
    practiceWords: ["नमस्ते", "धन्यवाद", "कृपया", "सरकार", "जनता", "विकास", "समाज", "अधिकार", "कर्तव्य"],
    miniChallengeText: "कृपया यहाँ बैठिए। आपका बहुत बहुत धन्यवाद।",
    targetWpm: 22,
    targetAccuracy: 94,
    tips: "शब्दों को अक्षरों के रूप में नहीं बल्कि एक पूरे प्रवाह में टाइप करने की आदत डालें।"
  },
  {
    day: 8,
    title: "Day 8: Half Letters & Conjuncts (संयुक्त अक्षर)",
    subtitle: "हलन्त (D) का प्रयोग एवं आधे अक्षरों का निर्माण",
    objective: "आधा क (क्या), आधा प (प्यार), आधा स (स्थान) और संयुक्त अक्षरों (क्ष, त्र, ज्ञ) पर महारत हासिल करें।",
    charactersToLearn: ["्", "क्य", "स्त", "प्र", "त्र", "क्ष", "ज्ञ", "श्र"],
    keysUsed: ["D (Halant)", "Key combos with D"],
    practiceWords: ["क्या", "सत्य", "स्थान", "प्रकाश", "मित्र", "क्षेत्र", "ज्ञान", "आश्रम", "विद्या"],
    miniChallengeText: "सत्यमेव जयते। ज्ञान ही सबसे बड़ा प्रकाश है।",
    targetWpm: 22,
    targetAccuracy: 93,
    tips: "हलन्त लगाने के बाद बिना रुके अगला अक्षर दबाने पर आधा अक्षर तुरंत जुड़ जाता है।"
  },
  {
    day: 9,
    title: "Day 9: Difficult & Exam Words (कठिन शब्द)",
    subtitle: "प्रतियोगी परीक्षाओं के मानक शब्द",
    objective: "एसएससी और हाईकोर्ट टाइपिंग टेस्ट के कठिन शब्दावली का आत्मविश्वास से अभ्यास करें।",
    charactersToLearn: ["प्रशासनिक", "सचिवालय", "संविधान", "उत्तरदायित्व", "न्यायालय"],
    keysUsed: ["Complex Sequences"],
    practiceWords: ["प्रशासनिक", "सचिवालय", "संविधान", "उत्तरदायित्व", "अधिसूचना", "न्यायालय", "कार्यपालिका"],
    miniChallengeText: "प्रशासनिक कार्यों में समयबद्धता और पारदर्शिता अनिवार्य है।",
    targetWpm: 24,
    targetAccuracy: 94,
    tips: "कठिन शब्दों को दो भागों में तोड़कर समझें, जैसे: उत्तर + दायित्व।"
  },
  {
    day: 10,
    title: "Day 10: Full Sentences & Punctuation (पूर्ण वाक्य)",
    subtitle: "विराम चिन्ह (।), कोमा और पूरे वाक्यों का प्रवाह",
    objective: "पूर्ण विराम (Period = ।) और अल्पविराम (Comma = ,) के साथ लंबे वाक्यों को टाइप करें।",
    charactersToLearn: ["।", ",", "-", "?", "(", ")"],
    keysUsed: ["Period", "Comma", "Minus", "Shift+Digits"],
    practiceWords: ["भारत हमारा महान देश है।", "शिक्षा से ही जीवन में सफलता मिलती है।"],
    miniChallengeText: "भारत विविधताओं का देश है। यहाँ अनेक भाषाएं बोली जाती हैं।",
    targetWpm: 25,
    targetAccuracy: 95,
    tips: "हिंदी का पूर्ण विराम (।) Period (.) कुंजी दबाने से टाइप होता है।"
  },
  {
    day: 11,
    title: "Day 11: Speed Building Practice (गति वर्धन)",
    subtitle: "रिदम और गति बढ़ाने के विशेष अभ्यास",
    objective: "बिना कीबोर्ड की ओर देखे केवल स्क्रीन पर ध्यान केंद्रित करके गति 28+ WPM तक ले जाएं।",
    charactersToLearn: ["Rhythm typing", "Touch typing"],
    keysUsed: ["Full Keyboard"],
    practiceWords: ["गति", "प्रगति", "ऊर्जा", "उत्साह", "निरंतर", "अभ्यास", "सफलता", "लक्ष्य"],
    miniChallengeText: "निरंतर अभ्यास से ही टाइपिंग में उच्च गति और शुद्धता प्राप्त होती है।",
    targetWpm: 28,
    targetAccuracy: 95,
    tips: "टाइपिंग कीबोर्ड देखे बिना करें (Touch Typing)। उँगलियों की मांसपेशियों की स्मृति (Muscle memory) पर भरोसा रखें।"
  },
  {
    day: 12,
    title: "Day 12: High-Accuracy Drills (शुद्धता अभ्यास)",
    subtitle: "गलतियों को शून्य करने का अनुशासित सत्र",
    objective: "बैकस्पेस के उपयोग को न्यूनतम करते हुए 98%+ शुद्धता का लक्ष्य साधें।",
    charactersToLearn: ["Zero backspace drill"],
    keysUsed: ["Full Keyboard"],
    practiceWords: ["शुद्धता", "एकाग्रता", "सटीकता", "धैर्य", "संतुलन", "साधना", "विश्वास"],
    miniChallengeText: "गति से अधिक महत्व शुद्धता का है। शांत मन से टाइप करें।",
    targetWpm: 28,
    targetAccuracy: 98,
    tips: "बैकस्पेस का कम से कम इस्तेमाल करें। एक बार में सही की दबाने की आदत डालें।"
  },
  {
    day: 13,
    title: "Day 13: Mixed Paragraph Practice (अनुच्छेद अभ्यास)",
    subtitle: "वास्तविक परीक्षा स्तर के गद्यांश",
    objective: "विभिन्न विषयों (इतिहास, विज्ञान, समाज) के 100 शब्दों के अनुच्छेदों पर अभ्यास करें।",
    charactersToLearn: ["Full Paragraph Flow"],
    keysUsed: ["Full Keyboard"],
    practiceWords: ["अनुच्छेद", "संस्कृति", "ऐतिहासिक", "परंपरा", "वैज्ञानिक", "दृष्टिकोण"],
    miniChallengeText: "भारतीय संस्कृति विश्व की प्राचीनतम संस्कृतियों में से एक है। इसकी सहिष्णुता और उदारता अनुकरणीय है।",
    targetWpm: 30,
    targetAccuracy: 95,
    tips: "पूरे वाक्य को पहले मन में पढ़ लें, फिर लयबद्ध तरीके से उँगलियों को चलने दें।"
  },
  {
    day: 14,
    title: "Day 14: Final Mastery Challenge (महा-चुनौती)",
    subtitle: "पूर्ण दक्षता परीक्षण एवं समापन",
    objective: "14 दिनों के संपूर्ण अध्ययन को परखें और 30+ WPM तथा 95%+ शुद्धता के साथ चुनौती उत्तीर्ण करें!",
    charactersToLearn: ["Complete InScript Mastery"],
    keysUsed: ["All Keys"],
    practiceWords: ["संपूर्ण", "दक्षता", "आत्मविश्वास", "सफलता", "शुभकामनाएं"],
    miniChallengeText: "कठिन परिश्रम और निरंतर लगन से कोई भी लक्ष्य असंभव नहीं रहता। आपकी हिंदी टाइपिंग यात्रा सफल रही।",
    targetWpm: 32,
    targetAccuracy: 95,
    tips: "बधाई! अब आप किसी भी सरकारी परीक्षा अथवा दैनिक कार्य के लिए हिंदी टाइपिंग में पूरी तरह सक्षम हैं।"
  }
];

// Final Challenges List
export interface FinalChallengeItem {
  id: string;
  title: string;
  category: "speed" | "endurance" | "accuracy" | "words" | "matras" | "mixed";
  durationSeconds: number;
  wordCount: number;
  targetAccuracy: number;
  targetWpm: number;
  description: string;
  badge: string;
  testText: string;
}

export const finalChallengesList: FinalChallengeItem[] = [
  {
    id: "challenge-1-min-speed",
    title: "One-Minute Challenge",
    category: "speed",
    durationSeconds: 60,
    wordCount: 35,
    targetAccuracy: 90,
    targetWpm: 30,
    description: "1 मिनट का तीव्र गति परीक्षण। समय समाप्त होने से पहले अधिकतम शब्द शुद्धता से टाइप करें।",
    badge: "⚡ Speed Sprint",
    testText: "भारत एक विशाल और सुंदर देश है। यहाँ विभिन्न धर्मों और संस्कृतियों के लोग प्रेम और सद्भाव के साथ रहते हैं। हमारे देश की संस्कृति पूरे विश्व में प्रसिद्ध है।"
  },
  {
    id: "challenge-3-min-exam",
    title: "Three-Minute Challenge",
    category: "endurance",
    durationSeconds: 180,
    wordCount: 95,
    targetAccuracy: 93,
    targetWpm: 30,
    description: "एसएससी और उच्च न्यायालय परीक्षा प्रारूप पर आधारित 3 मिनट का वास्तविक परीक्षा टेस्ट।",
    badge: "🏛️ Exam Simulation",
    testText: "प्रशासनिक व्यवस्था में पारदर्शिता और जवाबदेही का होना अत्यंत आवश्यक है। सरकारी कार्यालयों में समय पर कार्य निष्पादन से नागरिकों का विश्वास सुदृढ़ होता है। प्रत्येक कर्मचारी का कर्तव्य है कि वह अपने दायित्वों का निर्वहन पूरी निष्ठा और ईमानदारी से करे। आधुनिक युग में कंप्यूटर और सूचना प्रौद्योगिकी के प्रयोग से प्रशासनिक कार्यों में तीव्रता आई है।"
  },
  {
    id: "challenge-accuracy",
    title: "Accuracy Challenge",
    category: "accuracy",
    durationSeconds: 90,
    wordCount: 45,
    targetAccuracy: 96,
    targetWpm: 25,
    description: "शुद्धता की अग्निपरीक्षा! 95% से अधिक शुद्धता बनाए रखना अनिवार्य है।",
    badge: "🎯 Strict Accuracy",
    testText: "सफलता का मूल मंत्र एकाग्रता और धैर्य है। यदि मनुष्य अपने लक्ष्य के प्रति समर्पित रहे, तो कोई भी बाधा उसे आगे बढ़ने से रोक नहीं सकती। जीवन में अनुशासन ही सफलता की कुंजी है।"
  },
  {
    id: "challenge-difficult-words",
    title: "Difficult Words Challenge",
    category: "words",
    durationSeconds: 75,
    wordCount: 30,
    targetAccuracy: 92,
    targetWpm: 25,
    description: "संयुक्त अक्षर, रेफ और जटिल शब्दावली से भरपूर कठिन परीक्षा शब्दों की चुनौती।",
    badge: "🧩 Difficult Words",
    testText: "अंतर्राष्ट्रीय स्तर पर भारत की आत्मनिर्भरता और संप्रभुता सर्वोपरि है। विश्वविद्यालय के प्रशासनिक अधिकारियों का उत्तरदायित्व है कि वे दृष्टिकोण में स्पष्टता रखें।"
  },
  {
    id: "challenge-matra-master",
    title: "Matra Challenge",
    category: "matras",
    durationSeconds: 60,
    wordCount: 35,
    targetAccuracy: 94,
    targetWpm: 28,
    description: "ह्रस्व, दीर्घ, अनुस्वार और विसर्ग मात्राओं के उच्च-घनत्व वाले शब्दों का तीव्र परीक्षण।",
    badge: "✨ Matra Master",
    testText: "कौतूहल से भरी दुनिया में प्रकृति का सौंदर्य मन को मोह लेता है। प्रातःकाल सूरज की किरणें खिलती हैं और चारों ओर खुशबू फैल जाती है।"
  },
  {
    id: "challenge-mixed-master",
    title: "Mixed Hindi Typing Challenge",
    category: "mixed",
    durationSeconds: 120,
    wordCount: 65,
    targetAccuracy: 95,
    targetWpm: 32,
    description: "संख्याएं, विराम चिन्ह, संयुक्त अक्षर और पूर्ण वाक्यों का संपूर्ण महा-मुकाबला।",
    badge: "👑 Grand Master",
    testText: "वर्ष 2026 में डिजिटल क्रांति ने देश के विकास को नई दिशा दी है। क्या आप जानते हैं कि कंप्यूटर पर हिंदी टाइपिंग सीखना आज कितना सरल हो गया है? यदि हाँ, तो प्रतिदिन 15 मिनट का अभ्यास आपको एक कुशल टाइपिस्ट बना सकता है!"
  }
];
