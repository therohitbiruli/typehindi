import { keyboardRows, physicalKeyLabels } from "../data/keyboard-layout";

export interface Keystroke {
  key: string;
  isShift?: boolean;
  charProduced?: string;
}

// Reverse mapping for InScript
const inscriptMap: Record<string, { key: string; isShift: boolean }> = {};

keyboardRows.forEach((row) => {
  row.forEach((key) => {
    const keyLabel = physicalKeyLabels[key.code] || key.label || key.code.replace("Key", "").replace("Digit", "");
    
    // Normal character
    if (key.normal && !inscriptMap[key.normal]) {
      inscriptMap[key.normal] = { key: keyLabel, isShift: false };
    }
    // Shift character
    if (key.shift && !inscriptMap[key.shift]) {
      inscriptMap[key.shift] = { key: keyLabel, isShift: true };
    }
  });
});

// Add standard InScript fallbacks / special combos if any
inscriptMap["श्र"] = { key: "Period (.)", isShift: true };

// Remington GAIL character to keys map
const remingtonMap: Record<string, { key: string; isShift: boolean; charProduced?: string }[]> = {
  // Vowels and Matras
  "अ": [{ key: "V", isShift: true }],
  "आ": [{ key: "V", isShift: true }, { key: "K", isShift: false }],
  "इ": [{ key: "B", isShift: false }],
  "ई": [{ key: "B", isShift: false }, { key: "Z", isShift: false }],
  "उ": [{ key: "M", isShift: false }],
  "ऊ": [{ key: "M", isShift: true }],
  "ऋ": [{ key: "-", isShift: true }],
  "ए": [{ key: "Comma (,)", isShift: false }],
  "ऐ": [{ key: "Comma (,)", isShift: true }],
  "ओ": [{ key: "V", isShift: true }, { key: "K", isShift: false }, { key: "S", isShift: false }],
  "औ": [{ key: "V", isShift: true }, { key: "K", isShift: false }, { key: "A", isShift: false }],
  "ा": [{ key: "K", isShift: false }],
  "ि": [{ key: "F", isShift: false }],
  "ी": [{ key: "H", isShift: false }],
  "ु": [{ key: "Q", isShift: false }],
  "ू": [{ key: "W", isShift: false }],
  "े": [{ key: "S", isShift: false }],
  "ै": [{ key: "A", isShift: false }],
  "ो": [{ key: "K", isShift: false }, { key: "S", isShift: false }],
  "ौ": [{ key: "K", isShift: false }, { key: "A", isShift: false }],
  "ृ": [{ key: "-", isShift: true }],
  "ं": [{ key: "A", isShift: false }],
  "ः": [{ key: "%", isShift: true }],
  "्": [{ key: "D", isShift: false }],
  "़": [{ key: "[", isShift: true }],
  
  // Consonants
  "क": [{ key: "D", isShift: false }],
  "ख": [{ key: "]", isShift: true }, { key: "K", isShift: false }],
  "ग": [{ key: "X", isShift: false }],
  "घ": [{ key: "/", isShift: true }, { key: "K", isShift: false }],
  "ङ": [{ key: "U", isShift: true }],
  "च": [{ key: "P", isShift: false }],
  "छ": [{ key: "N", isShift: true }],
  "ज": [{ key: "T", isShift: false }],
  "झ": [{ key: "E", isShift: true }, { key: "K", isShift: false }],
  "ञ": [{ key: "'", isShift: true }],
  "ट": [{ key: "V", isShift: true }],
  "ठ": [{ key: "B", isShift: true }],
  "ड": [{ key: "[", isShift: false }],
  "ढ": [{ key: "]", isShift: false }],
  "ण": [{ key: ".", isShift: true }, { key: "K", isShift: false }],
  "त": [{ key: "R", isShift: false }],
  "थ": [{ key: "F", isShift: true }, { key: "K", isShift: false }],
  "द": [{ key: "N", isShift: false }],
  "ध": [{ key: "T", isShift: true }, { key: "K", isShift: false }],
  "न": [{ key: "V", isShift: false }],
  "प": [{ key: "I", isShift: false }],
  "फ": [{ key: "Q", isShift: true }],
  "ब": [{ key: "Y", isShift: false }],
  "भ": [{ key: "G", isShift: true }, { key: "K", isShift: false }],
  "म": [{ key: "E", isShift: false }],
  "य": [{ key: ";", isShift: false }],
  "र": [{ key: "J", isShift: false }],
  "ल": [{ key: "U", isShift: false }],
  "व": [{ key: "O", isShift: false }],
  "श": [{ key: "'", isShift: false }, { key: "K", isShift: false }],
  "ष": [{ key: "Comma (,)", isShift: true }, { key: "K", isShift: false }],
  "स": [{ key: "L", isShift: false }],
  "ह": [{ key: "G", isShift: false }],
  "क्ष": [{ key: "D", isShift: false }, { key: "D", isShift: false }, { key: "Comma (,)", isShift: true }, { key: "K", isShift: false }],
  "त्र": [{ key: "R", isShift: false }, { key: "D", isShift: false }, { key: "J", isShift: false }],
  "ज्ञ": [{ key: "K", isShift: true }],
  "श्र": [{ key: "Z", isShift: true }]
};

// Halves for Remington (since typing half letter is direct or with D)
const remingtonHalves: Record<string, string> = {
  "क्": "D",
  "ख्": "]",
  "ग्": "X",
  "घ्": "/",
  "च्": "P",
  "ज्": "T",
  "ण्": ".",
  "त्": "R",
  "थ्": "F",
  "ध्": "T",
  "न्": "V",
  "प्": "I",
  "ब्": "Y",
  "भ्": "G",
  "म्": "E",
  "ल्": "U",
  "व्": "O",
  "श्": "'",
  "ष्": "Comma (,)",
  "स्": "L"
};

// Map popular English phonetic matches to Hindi words (simple lookup for user comfort)
export const phoneticTransliterationMap: Record<string, string> = {
  "namaste": "नमस्ते",
  "shree": "श्री",
  "shri": "श्री",
  "gyaan": "ज्ञान",
  "gyan": "ज्ञान",
  "krishna": "कृष्णा",
  "sanskriti": "संस्कृति",
  "rashtra": "राष्ट्र",
  "karma": "कर्म",
  "dwar": "द्वार",
  "prithvi": "पृथ्वी",
  "bharat": "भारत",
  "hindi": "हिंदी",
  "type": "टाइप",
  "computer": "कंप्यूटर",
  "pariksha": "परीक्षा"
};

export function getInscriptKeysForWord(word: string): Keystroke[] {
  const result: Keystroke[] = [];
  // Normalize string
  const cleanWord = word.trim();
  
  for (let i = 0; i < cleanWord.length; i++) {
    const char = cleanWord[i];
    
    // Check if next character is a halant and can form conjuncts like क्ष, त्र, ज्ञ, श्र
    if (char === "क" && cleanWord[i+1] === "्" && cleanWord[i+2] === "ष") {
      result.push({ key: "K", charProduced: "क" });
      result.push({ key: "D", charProduced: "्" });
      result.push({ key: "Comma (,)", isShift: true, charProduced: "ष" });
      i += 2;
      continue;
    }
    
    const mapping = inscriptMap[char];
    if (mapping) {
      result.push({
        key: mapping.key,
        isShift: mapping.isShift,
        charProduced: char
      });
    } else {
      // Fallback
      result.push({ key: char, charProduced: char });
    }
  }
  return result;
}

export function getRemingtonKeysForWord(word: string): Keystroke[] {
  const result: Keystroke[] = [];
  const cleanWord = word.trim();
  
  for (let i = 0; i < cleanWord.length; i++) {
    const char = cleanWord[i];
    
    // Check if next char is halant to check half letters
    if (cleanWord[i+1] === "्" && remingtonHalves[char + "्"]) {
      result.push({
        key: remingtonHalves[char + "्"],
        isShift: remingtonHalves[char + "्"].includes("Shift") || false,
        charProduced: char + "्"
      });
      i++; // skip halant
      continue;
    }
    
    // Check special conjuncts
    if (char === "श" && cleanWord[i+1] === "्" && cleanWord[i+2] === "र") {
      result.push({ key: "Z", isShift: true, charProduced: "श्र" });
      i += 2;
      continue;
    }
    if (char === "ज" && cleanWord[i+1] === "्" && cleanWord[i+2] === "ञ") {
      result.push({ key: "K", isShift: true, charProduced: "ज्ञ" });
      i += 2;
      continue;
    }
    
    // Reph r (like in कर्म)
    if (char === "्" && cleanWord[i+1] === "र" && i > 0) {
      result.push({ key: "Shift + 3", charProduced: "र् (Reph)" });
      i++;
      continue;
    }

    const mapping = remingtonMap[char];
    if (mapping) {
      mapping.forEach(stroke => {
        result.push({
          key: stroke.key,
          isShift: stroke.isShift,
          charProduced: stroke.charProduced || char
        });
      });
    } else {
      result.push({ key: char, charProduced: char });
    }
  }
  return result;
}

export function getInscriptKeyInfoForChar(char: string): { code: string; isShift: boolean } | null {
  if (!char) return null;
  for (const row of keyboardRows) {
    for (const key of row) {
      if (key.normal === char) {
        return { code: key.code, isShift: false };
      }
      if (key.shift === char) {
        return { code: key.code, isShift: true };
      }
    }
  }
  return null;
}
