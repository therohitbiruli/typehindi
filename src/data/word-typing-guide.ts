export interface Keystroke {
  key: string;
  isShift?: boolean;
  charProduced: string;
}

export interface WordGuide {
  word: string;
  meaning: string;
  inscript: Keystroke[];
  remington: Keystroke[];
}

export const wordTypingGuides: WordGuide[] = [
  {
    word: "नमस्ते",
    meaning: "Hello / Salutation",
    inscript: [
      { key: "V", charProduced: "न" },
      { key: "C", charProduced: "म" },
      { key: "M", charProduced: "स" },
      { key: "D", charProduced: "्" },
      { key: "L", charProduced: "त" },
      { key: "S", charProduced: "े" }
    ],
    remington: [
      { key: "V", charProduced: "न" },
      { key: "E", charProduced: "म" },
      { key: "L", charProduced: "स" },
      { key: "D", charProduced: "्" },
      { key: "R", charProduced: "त" },
      { key: "S", charProduced: "े" }
    ]
  },
  {
    word: "श्री",
    meaning: "Respectful Title / Wealth",
    inscript: [
      { key: "Period (.)", isShift: true, charProduced: "श्र" },
      { key: "R", charProduced: "ी" }
    ],
    remington: [
      { key: "Z", isShift: true, charProduced: "श्र" },
      { key: "H", charProduced: "ी" }
    ]
  },
  {
    word: "ज्ञान",
    meaning: "Knowledge",
    inscript: [
      { key: "P", charProduced: "ज" },
      { key: "D", charProduced: "्" },
      { key: "BracketRight (])", isShift: true, charProduced: "ञ" },
      { key: "E", charProduced: "ा" },
      { key: "V", charProduced: "न" }
    ],
    remington: [
      { key: "K", isShift: true, charProduced: "ज्ञ" },
      { key: "K", charProduced: "ा" },
      { key: "V", charProduced: "न" }
    ]
  },
  {
    word: "कृष्णा",
    meaning: "Lord Krishna / Dark",
    inscript: [
      { key: "K", charProduced: "क" },
      { key: "Equal (=)", charProduced: "ृ" },
      { key: "Comma (,)", isShift: true, charProduced: "ष" },
      { key: "D", charProduced: "्" },
      { key: "C", isShift: true, charProduced: "ण" },
      { key: "E", charProduced: "ा" }
    ],
    remington: [
      { key: "D", charProduced: "क" },
      { key: "Minus (-)", isShift: true, charProduced: "ृ" },
      { key: "Comma (,)", isShift: true, charProduced: "ष" },
      { key: "D", charProduced: "्" },
      { key: "Period (.)", isShift: true, charProduced: "ण" },
      { key: "K", charProduced: "ा" }
    ]
  },
  {
    word: "संस्कृति",
    meaning: "Culture",
    inscript: [
      { key: "M", charProduced: "स" },
      { key: "X", charProduced: "ं" },
      { key: "M", charProduced: "स" },
      { key: "D", charProduced: "्" },
      { key: "K", charProduced: "क" },
      { key: "Equal (=)", charProduced: "ृ" },
      { key: "L", charProduced: "त" },
      { key: "F", charProduced: "ि" }
    ],
    remington: [
      { key: "L", charProduced: "स" },
      { key: "A", charProduced: "ं" },
      { key: "L", charProduced: "स" },
      { key: "D", charProduced: "्" },
      { key: "D", charProduced: "क" },
      { key: "Minus (-)", isShift: true, charProduced: "ृ" },
      { key: "F", charProduced: "ि" },
      { key: "R", charProduced: "त" }
    ]
  },
  {
    word: "राष्ट्र",
    meaning: "Nation",
    inscript: [
      { key: "J", charProduced: "र" },
      { key: "E", charProduced: "ा" },
      { key: "Comma (,)", isShift: true, charProduced: "ष" },
      { key: "D", charProduced: "्" },
      { key: "Quote (')", charProduced: "ट" },
      { key: "D", charProduced: "्" },
      { key: "J", charProduced: "र" }
    ],
    remington: [
      { key: "J", charProduced: "र" },
      { key: "K", charProduced: "ा" },
      { key: "Comma (,)", isShift: true, charProduced: "ष" },
      { key: "D", charProduced: "्" },
      { key: "V", isShift: true, charProduced: "ट" },
      { key: "Z", charProduced: "्र" }
    ]
  },
  {
    word: "कर्म",
    meaning: "Action / Deed",
    inscript: [
      { key: "K", charProduced: "क" },
      { key: "C", charProduced: "म" },
      { key: "D", charProduced: "्" },
      { key: "J", charProduced: "र" }
    ],
    remington: [
      { key: "D", charProduced: "क" },
      { key: "E", charProduced: "म" },
      { key: "Shift + 3", charProduced: "र् (Reph)" }
    ]
  },
  {
    word: "द्वार",
    meaning: "Door / Entrance",
    inscript: [
      { key: "O", charProduced: "द" },
      { key: "D", charProduced: "्" },
      { key: "B", charProduced: "व" },
      { key: "E", charProduced: "ा" },
      { key: "J", charProduced: "र" }
    ],
    remington: [
      { key: "N", isShift: true, charProduced: "द्व" },
      { key: "K", charProduced: "ा" },
      { key: "J", charProduced: "र" }
    ]
  }
];
