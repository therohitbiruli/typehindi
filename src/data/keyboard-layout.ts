// InScript Keyboard Layout - Complete mapping
// Normal state and Shift state for each key

export interface KeyMapping {
  code: string;
  normal: string;
  shift: string;
  label?: string;
  width?: number; // relative width multiplier
}

export const keyboardRows: KeyMapping[][] = [
  // Row 1 - Number row
  [
    { code: "Backquote", normal: "ॊ", shift: "॒ ", label: "`" },
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
  // Row 2 - QWERTY row
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
  // Row 3 - Home row (ASDF)
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
  // Row 4 - Bottom row (ZXCV)
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
  // Row 5 - Space bar
  [
    { code: "Space", normal: " ", shift: " ", label: "Space", width: 6 },
  ],
];

// Flat map for quick lookup: keyCode -> { normal, shift }
export const keyMap: Record<string, { normal: string; shift: string }> = {};
keyboardRows.forEach((row) => {
  row.forEach((key) => {
    keyMap[key.code] = { normal: key.normal, shift: key.shift };
  });
});

// Physical key labels for display
export const physicalKeyLabels: Record<string, string> = {
  Backquote: "`",
  Digit1: "1", Digit2: "2", Digit3: "3", Digit4: "4", Digit5: "5",
  Digit6: "6", Digit7: "7", Digit8: "8", Digit9: "9", Digit0: "0",
  Minus: "-", Equal: "=",
  KeyQ: "Q", KeyW: "W", KeyE: "E", KeyR: "R", KeyT: "T",
  KeyY: "Y", KeyU: "U", KeyI: "I", KeyO: "O", KeyP: "P",
  BracketLeft: "[", BracketRight: "]", Backslash: "\\",
  KeyA: "A", KeyS: "S", KeyD: "D", KeyF: "F", KeyG: "G",
  KeyH: "H", KeyJ: "J", KeyK: "K", KeyL: "L",
  Semicolon: ";", Quote: "'",
  KeyZ: "Z", KeyX: "X", KeyC: "C", KeyV: "V", KeyB: "B",
  KeyN: "N", KeyM: "M",
  Comma: ",", Period: ".", Slash: "/",
  Space: "Space",
};
