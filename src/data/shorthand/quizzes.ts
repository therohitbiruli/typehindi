import { ShorthandQuizQuestion } from './types';

export const shorthandQuizBank: ShorthandQuizQuestion[] = [
  {
    id: 'qz-1',
    question: 'How are voiced consonants (B, D, J, G, V, DH, Z) visually differentiated from voiceless consonants (P, T, CH, K, F, TH, S) in Pitman Shorthand?',
    options: [
      'Voiced consonants are drawn with a heavy (thick) line weight',
      'Voiced consonants are drawn twice the length',
      'Voiced consonants are written horizontally',
      'Voiced consonants have a small hook at both ends'
    ],
    correctIndex: 0,
    explanation: 'Pitman pairs consonants phonetically: voiceless sounds are drawn light, while voiced sounds are drawn thick/heavy.',
    category: 'strokes'
  },
  {
    id: 'qz-2',
    question: 'What is the correct angle and direction of consonant stroke P?',
    options: [
      'Vertical 90° drawn upwards',
      'Slanting at 120° (60° from perpendicular) drawn downwards from left to right',
      'Slanting at 60° drawn downwards from right to left',
      'Horizontal drawn from right to left'
    ],
    correctIndex: 1,
    explanation: 'Stroke P is a light straight line written downwards from top-left to bottom-right at 120° from the horizontal line.',
    category: 'strokes'
  },
  {
    id: 'qz-3',
    question: 'Which vowel mnemonic phrase contains all 12 standard Pitman vowels in order?',
    options: [
      '"Quick brown fox jumps over the lazy dog"',
      '"Pa may we all go too, that pen is not much good"',
      '"A stitch in time saves nine and brings good cheer"',
      '"Every good boy does fine in school and college"'
    ],
    correctIndex: 1,
    explanation: '"Pa may we all go too, that pen is not much good" provides the 6 long vowels (heavy signs) followed by the 6 short vowels (light signs).',
    category: 'vowels'
  },
  {
    id: 'qz-4',
    question: 'Where is a 2nd-place vowel sign placed relative to a consonant stroke?',
    options: [
      'At the beginning of the stroke',
      'In the exact center / middle of the stroke',
      'At the termination / end of the stroke',
      'Above the margin of the notebook'
    ],
    correctIndex: 1,
    explanation: 'First place is at the start, Second place is at the middle, and Third place is at the end of the stroke.',
    category: 'vowels'
  },
  {
    id: 'qz-5',
    question: 'Where is the outline for a word whose first vowel is in the 1st position written on ruled paper?',
    options: [
      'Through the line (cutting the line)',
      'Directly on the baseline',
      'Above the baseline',
      'At the top margin'
    ],
    correctIndex: 2,
    explanation: 'Position writing rules dictate that 1st position words are written ABOVE the line, 2nd position ON the line, and 3rd position THROUGH the line.',
    category: 'rules'
  },
  {
    id: 'qz-6',
    question: 'What is the "Rule of Intervening Third-Place Vowels" between two joined strokes?',
    options: [
      'The vowel is completely deleted',
      'The vowel is placed before the second stroke at the third position',
      'The vowel is placed after the first stroke at the first position',
      'The vowel is drawn as a circle in the center'
    ],
    correctIndex: 1,
    explanation: 'To avoid ambiguous cramped corners, 3rd-place vowels between two joined strokes are transferred before the second stroke at the 3rd place.',
    category: 'rules'
  },
  {
    id: 'qz-7',
    question: 'In Pitman Shorthand, what is a "Grammalogue"?',
    options: [
      'A typographical error made during transcription',
      'A frequently occurring word represented by a single shorthand sign or stroke',
      'A specialized fountain pen used in examinations',
      'A legal court decree written in longhand'
    ],
    correctIndex: 1,
    explanation: 'A grammalogue (or word-sign) is a standard shorthand character representing a frequently recurring word, such as "the", "of", "to", or "and".',
    category: 'grammalogues'
  },
  {
    id: 'qz-8',
    question: 'Which direction is consonant stroke T drawn in Pitman shorthand?',
    options: [
      'Upward from the line to the ceiling',
      'Strictly downward at 90° to the line',
      'Horizontal from right to left',
      'Curved upward like an arc'
    ],
    correctIndex: 1,
    explanation: 'T is a light perpendicular stroke drawn strictly downwards from top to bottom.',
    category: 'strokes'
  },
  {
    id: 'qz-9',
    question: 'How is the Diphthong "I" (as in "Tie" or "Time") represented?',
    options: [
      'A small acute angle pointing upwards (^) placed in the 1st position',
      'A small circle on the line',
      'A heavy wavy horizontal dash',
      'A double dot placed in the 3rd position'
    ],
    correctIndex: 0,
    explanation: 'Diphthong I is a small angular sign pointing upwards (^) placed at the 1st position.',
    category: 'diphthongs'
  },
  {
    id: 'qz-10',
    question: 'Why is phrase writing (Phraseography) crucial in stenography?',
    options: [
      'It eliminates the need to learn spelling',
      'It allows writing multiple words together without lifting the pen, dramatically boosting speed',
      'It allows typing with only one hand',
      'It makes shorthand look like cursive English'
    ],
    correctIndex: 1,
    explanation: 'Phraseography allows frequent collocations to be written continuously without lifting the pen, enabling speeds of 80 to 120+ WPM.',
    category: 'phrasing'
  },
  {
    id: 'qz-11',
    question: 'What determines the position of a whole shorthand phrase on ruled paper?',
    options: [
      'The length of the final word',
      'The first word in the phrase',
      'The number of vowels in the phrase',
      'The time limit of the dictation'
    ],
    correctIndex: 1,
    explanation: 'The first word of a phrase governs whether the entire phrase is placed above, on, or through the line.',
    category: 'phrasing'
  },
  {
    id: 'qz-12',
    question: 'When should vowels generally be inserted when taking fast dictation in shorthand?',
    options: [
      'After every consonant stroke',
      'Only after drafting the complete consonant outline without lifting the pen',
      'Vowels must always be drawn before any consonant',
      'At the start of every sentence'
    ],
    correctIndex: 1,
    explanation: 'Stenographers first draw the complete skeletal consonant outline; vowels are vocalized only when necessary for disambiguation.',
    category: 'rules'
  }
];
