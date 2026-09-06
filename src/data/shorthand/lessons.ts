import { ShorthandLesson } from './types';
import { pitmanStrokes } from './strokes';

export const shorthandLessons: ShorthandLesson[] = [
  {
    id: 1,
    slug: 'introduction',
    level: 1,
    title: 'Introduction to Shorthand & Phonetic Principles',
    subtitle: 'Understand how shorthand works by sound rather than conventional spelling.',
    estimatedMinutes: 15,
    difficulty: 'Beginner',
    summary: 'Discover the phonetic foundation of Pitman English Shorthand: we write what we hear, not what we spell.',
    learnContent: {
      overview: 'Pitman shorthand was invented by Sir Isaac Pitman in 1837. Unlike longhand English which is plagued by silent letters (like "k" in knife or "b" in doubt), Pitman shorthand is strictly PHONETIC. If a sound is heard, it is written; if it is silent, it is omitted.',
      keyPoints: [
        'Shorthand is strictly based on the sound of spoken words.',
        'Silent letters are completely ignored (e.g. "debt" is written as "d-e-t").',
        'Consonants provide the skeletal outline; vowels are inserted around the consonants.',
        'Light sounds are written with light lines; heavy sounds with thick lines.'
      ],
      rules: [
        {
          title: 'The Phonetic Principle',
          detail: 'Write words strictly by their constituent sounds. For example, "laugh" is written as L + short A + F, because the "gh" sounds like "f".'
        },
        {
          title: 'The Light and Heavy System',
          detail: 'Pitman pairs sounds: light sounds (P, T, CH, K, F, TH, S, SH) are drawn thin, while their voiced pairs (B, D, J, G, V, DH, Z, ZH) are drawn thick.',
          tip: 'Use a flexible fountain pen or a steno pencil (grade HB or 2B) to easily produce distinct light and heavy strokes.'
        }
      ]
    },
    demonstrationStrokes: pitmanStrokes.slice(0, 4),
    exercises: [
      {
        id: 'ex-1-1',
        prompt: 'Identify the silent letter in the word "KNIGHT" that should NOT be written in shorthand.',
        hint: 'Say the word out loud: "nite".',
        explanation: 'The initial "K" and the "GH" are silent. Only the sounds N, diphthong I, and T are written.'
      },
      {
        id: 'ex-1-2',
        prompt: 'How is the word "PHARMACY" represented phonetically at the start?',
        hint: 'What consonant sound does "PH" make?',
        explanation: '"PH" makes the sound of /f/, so it is written with the consonant stroke Ef.'
      }
    ],
    miniQuiz: [
      {
        id: 'q-1-1',
        question: 'Why is Pitman shorthand called a phonetic system?',
        options: [
          'Because it uses letters from the Greek alphabet',
          'Because words are written according to their sounds, ignoring silent letters',
          'Because it can only be typed on electronic keyboards',
          'Because every word must have 5 vowels'
        ],
        correctIndex: 1,
        explanation: 'Pitman shorthand records the phonetic sounds of speech rather than arbitrary English spelling rules.',
        category: 'rules'
      },
      {
        id: 'q-1-2',
        question: 'How are voiced consonants (like B, D, J, G) distinguished from voiceless consonants (P, T, CH, K)?',
        options: [
          'Voiced consonants are written double the length',
          'Voiced consonants are drawn with a heavy (thick) stroke',
          'Voiced consonants are always written upwards',
          'Voiced consonants use a zigzag line'
        ],
        correctIndex: 1,
        explanation: 'Voiced consonants are drawn heavy (thick), while voiceless consonants are drawn light (thin).',
        category: 'rules'
      }
    ],
    nextLessonSlug: 'basic-strokes'
  },
  {
    id: 2,
    slug: 'basic-strokes',
    level: 2,
    title: 'Basic Straight & Curved Strokes',
    subtitle: 'Master the core 8 straight consonant strokes and introductory curves.',
    estimatedMinutes: 20,
    difficulty: 'Beginner',
    summary: 'Learn P, B, T, D, CH, J, K, G and understand stroke direction, angles, and line weight.',
    learnContent: {
      overview: 'Consonants are the foundation of Pitman Shorthand. The first eight consonants consist of straight strokes written in four distinct directions: 120° downward (P, B), 90° downward (T, D), 60° downward (CH, J), and 0° horizontal (K, G).',
      keyPoints: [
        'Every straight stroke has a standard uniform length (about one-sixth of an inch or 4 mm).',
        'P and B slant from top-left to bottom-right (120°).',
        'T and D are strictly perpendicular (90°).',
        'CH (Chay) and J (Jay) slant downward from top-right to bottom-left (60°).',
        'K and G are horizontal strokes written from left to right.'
      ],
      rules: [
        {
          title: 'Stroke Direction',
          detail: 'Never reverse stroke direction! P, B, T, D, CH, and J are strictly downward strokes. K and G are strictly left-to-right.'
        },
        {
          title: 'Uniform Stroke Length',
          detail: 'All standard strokes must be drawn to the same uniform length. Do not make some strokes twice as long as others.',
          tip: 'Practice drawing rows of T and D on ruled paper, ensuring each stroke terminates precisely on the baseline.'
        }
      ]
    },
    demonstrationStrokes: pitmanStrokes.filter(s => ['stroke-p', 'stroke-b', 'stroke-t', 'stroke-d', 'stroke-ch', 'stroke-j', 'stroke-k', 'stroke-g'].includes(s.id)),
    exercises: [
      {
        id: 'ex-2-1',
        prompt: 'Practice drawing stroke P: a light straight line downward at 120 degrees.',
        targetStrokeId: 'stroke-p',
        hint: 'Start top-left and pull down to bottom-right with a light touch.',
        explanation: 'P is light and inclined at 120 degrees to the baseline.'
      },
      {
        id: 'ex-2-2',
        prompt: 'Practice drawing stroke T: a light vertical line downward at 90 degrees.',
        targetStrokeId: 'stroke-t',
        hint: 'Pull straight down from top to bottom perpendicular to the line.',
        explanation: 'T is a 90° vertical line ending on the line.'
      }
    ],
    miniQuiz: [
      {
        id: 'q-2-1',
        question: 'Which direction is stroke T written in Pitman shorthand?',
        options: [
          'Upward from the baseline to the top',
          'Downward from top to the baseline',
          'Horizontally from left to right',
          'Horizontally from right to left'
        ],
        correctIndex: 1,
        explanation: 'T is written downwards perpendicular to the baseline.',
        category: 'strokes'
      },
      {
        id: 'q-2-2',
        question: 'What is the key visual difference between P and B?',
        options: [
          'P is twice as long as B',
          'P is light (thin) while B is heavy (thick)',
          'P is curved while B is straight',
          'P is written upward while B is written downward'
        ],
        correctIndex: 1,
        explanation: 'P and B have identical slope and length; P is light and B is heavy.',
        category: 'strokes'
      }
    ],
    prevLessonSlug: 'introduction',
    nextLessonSlug: 'vowels'
  },
  {
    id: 3,
    slug: 'vowels',
    level: 3,
    title: 'The Pitman Vowel Scheme',
    subtitle: 'Learn the 12 vowels, dot/dash signs, and 1st, 2nd, and 3rd place vowel positions.',
    estimatedMinutes: 25,
    difficulty: 'Intermediate',
    summary: 'Understand the classic mnemonic: "Pa may we all go too, that pen is not much good" and place vowels accurately.',
    learnContent: {
      overview: 'Vowels in Pitman shorthand are represented by dots and dashes placed beside consonant strokes. There are 6 long vowels (heavy signs) and 6 short vowels (light signs). The position of the vowel indicator relative to the stroke dictates the vowel sound.',
      keyPoints: [
        'Vowel positions: 1st Place = Beginning of stroke, 2nd Place = Middle of stroke, 3rd Place = End of stroke.',
        'Heavy Dots: 1st place = AH (Pa), 2nd place = AY (May), 3rd place = EE (We).',
        'Heavy Dashes: 1st place = AW (All), 2nd place = OH (Go), 3rd place = OO (Too).',
        'Light Dots: 1st place = A (That), 2nd place = E (Pen), 3rd place = I (Is).',
        'Light Dashes: 1st place = O (Not), 2nd place = U (Much), 3rd place = OO (Good).'
      ],
      rules: [
        {
          title: 'Vowel Placement Before and After Consonants',
          detail: 'When a vowel is heard BEFORE a downward consonant, place the vowel sign on the LEFT. When heard AFTER, place it on the RIGHT.'
        },
        {
          title: 'Horizontal Consonant Vowel Placement',
          detail: 'For horizontal strokes (K, G, M, N), vowels heard BEFORE are placed ABOVE; vowels heard AFTER are placed BELOW.'
        }
      ]
    },
    demonstrationStrokes: pitmanStrokes.filter(s => s.category.startsWith('vowel')),
    exercises: [
      {
        id: 'ex-3-1',
        prompt: 'In the word "PAY", where is the vowel dot placed relative to stroke P?',
        hint: 'P is downward; vowel AY is heard after P in the middle.',
        explanation: 'The heavy dot for AY is placed on the RIGHT (after) in the 2nd position (middle) of P.'
      },
      {
        id: 'ex-3-2',
        prompt: 'In the word "APE", where is the vowel dot placed relative to stroke P?',
        hint: 'Vowel is heard before P.',
        explanation: 'The heavy dot is placed on the LEFT (before) in the 2nd position of P.'
      }
    ],
    miniQuiz: [
      {
        id: 'q-3-1',
        question: 'Which vowel sound is represented by a 1st place heavy dot?',
        options: [
          'AH as in "Pa"',
          'AY as in "May"',
          'EE as in "We"',
          'OH as in "Go"'
        ],
        correctIndex: 0,
        explanation: '1st place heavy dot represents AH as in "Pa" or "Palm".',
        category: 'vowels'
      },
      {
        id: 'q-3-2',
        question: 'Where is a 3rd place vowel written on a downward consonant stroke?',
        options: [
          'At the very top (beginning)',
          'In the exact center',
          'At the bottom (end) of the stroke',
          'Above the horizontal line'
        ],
        correctIndex: 2,
        explanation: '3rd place is always at the end of the stroke (the bottom for downward strokes).',
        category: 'vowels'
      }
    ],
    prevLessonSlug: 'basic-strokes',
    nextLessonSlug: 'consonants'
  },
  {
    id: 4,
    slug: 'consonants',
    level: 4,
    title: 'Complete Consonants & Position Writing',
    subtitle: 'Explore curves, upward strokes, and the 3 writing positions (Above, On, Through the line).',
    estimatedMinutes: 25,
    difficulty: 'Intermediate',
    summary: 'Master F, V, TH, S, Z, SH, M, N, L, R, W, Y, H and outline positioning based on the first vowel sound.',
    learnContent: {
      overview: 'Beyond straight strokes, Pitman shorthand uses curves derived from circles (F, V, TH, S, Z, SH, M, N, NG, L, Ar) and upward strokes (Ray, Way, Yay, Hay). Position writing determines whether an outline sits above the line, on the line, or cuts through the line.',
      keyPoints: [
        'Position 1 (Above the line): First vowel sound is a 1st-place vowel (e.g. "Talk", "Path").',
        'Position 2 (On the line): First vowel sound is a 2nd-place vowel (e.g. "Take", "Paid").',
        'Position 3 (Through the line): First vowel sound is a 3rd-place vowel (e.g. "Tea", "Feel").'
      ],
      rules: [
        {
          title: 'Position Writing Rule',
          detail: 'The position of the outline on ruled paper is determined by the FIRST VOWEL in the word.'
        },
        {
          title: 'Two Forms of R',
          detail: 'Pitman has two R strokes: Downward Ar (used when preceded by a vowel, e.g. "air", "arm") and Upward Ray (used when followed by a vowel, e.g. "ray", "red").'
        }
      ]
    },
    demonstrationStrokes: pitmanStrokes.filter(s => ['stroke-f', 'stroke-v', 'stroke-th', 'stroke-s', 'stroke-m', 'stroke-n', 'stroke-l', 'stroke-r-up', 'stroke-w', 'stroke-h-up'].includes(s.id)),
    exercises: [
      {
        id: 'ex-4-1',
        prompt: 'Which position does the word "DAY" occupy on the ruled line?',
        hint: 'The vowel AY is a 2nd place vowel.',
        explanation: '"Day" is in 2nd position, so stroke D rests ON the line.'
      }
    ],
    miniQuiz: [
      {
        id: 'q-4-1',
        question: 'When a word has a 1st-place vowel as its first vowel, where is the outline written?',
        options: [
          'Through the line',
          'On the line',
          'Above the line',
          'Below the bottom margin'
        ],
        correctIndex: 2,
        explanation: 'First-position words are written ABOVE the line.',
        category: 'rules'
      }
    ],
    prevLessonSlug: 'vowels',
    nextLessonSlug: 'joining'
  },
  {
    id: 5,
    slug: 'joining',
    level: 5,
    title: 'Joining Strokes Without Lifting the Pen',
    subtitle: 'Learn the cardinal rule of stenography: continuous outlines written in one fluid stroke.',
    estimatedMinutes: 20,
    difficulty: 'Intermediate',
    summary: 'Discover how consonant strokes connect sequentially, maintaining exact angles and line weights without lifting the pen.',
    learnContent: {
      overview: 'In shorthand, speed comes from writing consecutive consonant strokes without lifting the pencil from the paper. Vowels are inserted AFTER the complete consonant skeleton has been drafted.',
      keyPoints: [
        'Never lift the pen when writing the consonants of a single word.',
        'The second stroke begins precisely where the first stroke terminates.',
        'Each stroke retains its original angle and slant regardless of where it connects.',
        'Vowels are inserted only after the full consonant outline is completed.'
      ],
      rules: [
        {
          title: 'Continuous Outline Execution',
          detail: 'Draw the entire sequence of consonants without pause. Do not stop halfway to add a vowel.'
        }
      ]
    },
    demonstrationStrokes: pitmanStrokes.slice(0, 6),
    exercises: [
      {
        id: 'ex-5-1',
        prompt: 'How is the word "PACK" drafted before adding vowels?',
        hint: 'P is downward; K is horizontal.',
        explanation: 'Draw P downward to the line, and without lifting the pen, immediately draw K to the right.'
      }
    ],
    miniQuiz: [
      {
        id: 'q-5-1',
        question: 'When should vowels be inserted into a shorthand outline?',
        options: [
          'After each consonant stroke is drawn',
          'Before beginning to write any consonant',
          'After the complete consonant outline has been written without lifting the pen',
          'Only at the end of the entire dictation passage'
        ],
        correctIndex: 2,
        explanation: 'Draft the entire consonant skeleton first without lifting the pen; then insert vowels if necessary.',
        category: 'rules'
      }
    ],
    prevLessonSlug: 'consonants',
    nextLessonSlug: 'word-formation'
  },
  {
    id: 6,
    slug: 'word-formation',
    level: 6,
    title: 'Word Formation & Intervening Vowels',
    subtitle: 'Master rules for reading and writing vowels between joined consonant strokes.',
    estimatedMinutes: 25,
    difficulty: 'Intermediate',
    summary: 'Understand the rule of intervening vowels: why third-place vowels are placed before the following stroke.',
    learnContent: {
      overview: 'When two consonants are joined, placing a third-place vowel at the end of the first stroke can create confusion with the beginning of the second stroke. Pitman solves this with the Third-Place Intervening Vowel Rule.',
      keyPoints: [
        'First-place vowels after the first stroke are placed after that stroke.',
        'Second-place vowels after the first stroke are placed after that stroke.',
        'Third-place vowels are written BEFORE the SECOND stroke in the 3rd position.'
      ],
      rules: [
        {
          title: 'The Intervening Third-Place Vowel Rule',
          detail: 'To avoid ambiguous angles in corner joints, all third-place vowels between two strokes are transferred to the preceding side of the following stroke at the 3rd place.'
        }
      ]
    },
    demonstrationStrokes: pitmanStrokes.filter(s => ['stroke-t', 'stroke-d', 'stroke-p', 'stroke-k'].includes(s.id)),
    exercises: [
      {
        id: 'ex-6-1',
        prompt: 'In the word "TEACH" (T + EE + CH), where is the vowel EE placed?',
        hint: 'EE is a 3rd-place vowel between T and CH.',
        explanation: 'EE is placed on the left (before) of stroke CH at the 3rd position.'
      }
    ],
    miniQuiz: [
      {
        id: 'q-6-1',
        question: 'Where is an intervening third-place vowel written between two joined strokes?',
        options: [
          'At the beginning of the first stroke',
          'In the middle of the second stroke',
          'Before the second stroke at the third position',
          'Directly on the junction point'
        ],
        correctIndex: 2,
        explanation: 'Third-place intervening vowels are placed before the second stroke at the 3rd place to prevent ambiguity at joints.',
        category: 'rules'
      }
    ],
    prevLessonSlug: 'joining',
    nextLessonSlug: 'phrasing'
  },
  {
    id: 7,
    slug: 'phrasing',
    level: 7,
    title: 'Phrase Writing (Phraseography)',
    subtitle: 'Combine frequent words into single fluid outlines to double your writing speed.',
    estimatedMinutes: 25,
    difficulty: 'Advanced',
    summary: 'Phraseography is writing two or more words together without lifting the pen (e.g. "I thank you", "as well as", "of the").',
    learnContent: {
      overview: 'High speed in stenography (80 to 120+ WPM) is impossible if every single word is written separately. Pitman phraseography joins frequent collocations together smoothly.',
      keyPoints: [
        'Phrases must be easy to write, easy to read, and naturally associated.',
        'The first word in a phrase determines the position of the entire outline.',
        'Common phrases: "I am", "you may", "to be", "it will be", "as well as".'
      ],
      rules: [
        {
          title: 'Position in Phrasing',
          detail: 'The first stroke of a phrase takes the natural position of its first word (e.g. "I thank you" starts in the first position above the line).'
        }
      ]
    },
    demonstrationStrokes: pitmanStrokes.filter(s => ['gram-the', 'gram-of', 'gram-to', 'gram-and'].includes(s.id)),
    exercises: [
      {
        id: 'ex-7-1',
        prompt: 'What are the three criteria for a good shorthand phrase?',
        hint: 'Think about ease of writing and clarity.',
        explanation: 'A good phrase must be facile (easy to write), legible (easy to read), and linear (flowing smoothly along the line).'
      }
    ],
    miniQuiz: [
      {
        id: 'q-7-1',
        question: 'Which word dictates the position of a joined shorthand phrase on ruled paper?',
        options: [
          'The longest word in the phrase',
          'The first word in the phrase',
          'The last word in the phrase',
          'The phrase is always written through the line'
        ],
        correctIndex: 1,
        explanation: 'The first word of the phrase determines whether the entire phrase outline is placed above, on, or through the line.',
        category: 'phrasing'
      }
    ],
    prevLessonSlug: 'word-formation'
  }
];
