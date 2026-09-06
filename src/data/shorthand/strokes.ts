import { ShorthandStroke } from './types';

export const pitmanStrokes: ShorthandStroke[] = [
  // Straight Consonants Downward
  {
    id: 'stroke-p',
    name: 'P',
    sound: '/p/ as in Pay, Post, Pen',
    category: 'consonant-straight',
    direction: 'downward',
    angleDescription: 'Slanting 60° from perpendicular (top-left to bottom-right)',
    weight: 'light',
    svgPath: 'M 35 25 L 65 75',
    startPoint: { x: 35, y: 25 },
    endPoint: { x: 65, y: 75 },
    targetAngle: 120, // 120° from horizontal baseline
    description: 'A light straight stroke drawn downward from left to right at an angle of 120° from the base line.',
    pitmanRule: 'Consonants are written in pairs of light (voiceless) and heavy (voiced). P is written with a light touch.',
    examples: [
      { word: 'Pay', transcription: 'P + 2nd place dot (a)' },
      { word: 'Pen', transcription: 'P + 2nd place light dot (e) + N' },
      { word: 'Hope', transcription: 'Hay + 2nd place heavy dash (o) + P' }
    ],
    wordBuilding: [
      {
        word: 'Pay',
        formula: 'P + 2nd place heavy dot (a) → PAY',
        explanation: 'Stroke P rests on the baseline. The heavy dot for AY is placed on the right (after) in the 2nd position (middle).'
      },
      {
        word: 'Pen',
        formula: 'P + short E + N → PEN',
        explanation: 'P is drawn downward to the line, and without lifting the pen, N is drawn horizontally. Light dot placed in 2nd position.'
      },
      {
        word: 'Hope',
        formula: 'Hay + long OH + P → HOPE',
        explanation: 'Upward Hay starting on line, followed by heavy dash OH, joined with downward P.'
      }
    ]
  },
  {
    id: 'stroke-b',
    name: 'B',
    sound: '/b/ as in Bay, Book, Boy',
    category: 'consonant-straight',
    direction: 'downward',
    angleDescription: 'Slanting 60° from perpendicular (top-left to bottom-right)',
    weight: 'heavy',
    svgPath: 'M 35 25 L 65 75',
    startPoint: { x: 35, y: 25 },
    endPoint: { x: 65, y: 75 },
    targetAngle: 120,
    description: 'A heavy straight stroke written downward in the exact same direction and angle as P.',
    pitmanRule: 'Voiced consonants require a firm, heavier stroke without distorting the straight angle.',
    examples: [
      { word: 'Bay', transcription: 'B + 2nd place dot (a)' },
      { word: 'Book', transcription: 'B + 3rd place dash (oo) + K' },
      { word: 'Boy', transcription: 'B + 1st place diphthong (oi)' }
    ],
    wordBuilding: [
      {
        word: 'Bay',
        formula: 'B + 2nd place heavy dot (a) → BAY',
        explanation: 'Heavy B drawn downward to the baseline with 2nd place heavy dot on the right side.'
      },
      {
        word: 'Book',
        formula: 'B + short OO + K → BOOK',
        explanation: 'B cuts through the line (3rd position), joined continuously with horizontal K to the right.'
      },
      {
        word: 'Boy',
        formula: 'B + diphthong OI → BOY',
        explanation: 'B is written above the line (1st position) followed by acute angle diphthong sign at the first place.'
      }
    ]
  },
  {
    id: 'stroke-t',
    name: 'T',
    sound: '/t/ as in Tea, Top, Tie',
    category: 'consonant-straight',
    direction: 'downward',
    angleDescription: 'Vertical 90° straight downward',
    weight: 'light',
    svgPath: 'M 50 20 L 50 80',
    startPoint: { x: 50, y: 20 },
    endPoint: { x: 50, y: 80 },
    targetAngle: 90,
    description: 'A light, perfectly perpendicular downward stroke.',
    pitmanRule: 'Always written strictly downwards from top to bottom at 90 degrees to the line.',
    examples: [
      { word: 'Tea', transcription: 'T + 3rd place heavy dot (ee)' },
      { word: 'Tie', transcription: 'T + 1st place diphthong (i)' },
      { word: 'Take', transcription: 'T + 2nd place heavy dot (a) + K' }
    ],
    wordBuilding: [
      {
        word: 'Tea',
        formula: 'T + 3rd place heavy dot (ee) → TEA',
        explanation: 'T cuts through the baseline (3rd position). Heavy dot for EE placed at the bottom right.'
      },
      {
        word: 'Tie',
        formula: 'T + diphthong I → TIE',
        explanation: 'T written above the line (1st position). Upward angle sign (^) placed at 1st place.'
      },
      {
        word: 'Take',
        formula: 'T + long AY + K → TAKE',
        explanation: 'T drawn vertically to baseline, immediately joined with horizontal K to the right.'
      }
    ]
  },
  {
    id: 'stroke-d',
    name: 'D',
    sound: '/d/ as in Day, Do, Door',
    category: 'consonant-straight',
    direction: 'downward',
    angleDescription: 'Vertical 90° straight downward',
    weight: 'heavy',
    svgPath: 'M 50 20 L 50 80',
    startPoint: { x: 50, y: 20 },
    endPoint: { x: 50, y: 80 },
    targetAngle: 90,
    description: 'A heavy perpendicular downward stroke, the voiced counterpart of T.',
    pitmanRule: 'D must be perpendicular to the line, identical to T in direction but drawn with deliberate thickness.',
    examples: [
      { word: 'Day', transcription: 'D + 2nd place heavy dot (a)' },
      { word: 'Do', transcription: 'D + 3rd place heavy dash (oo)' },
      { word: 'Date', transcription: 'D + 2nd place heavy dot (a) + T' }
    ],
    wordBuilding: [
      {
        word: 'Day',
        formula: 'D + 2nd place heavy dot (a) → DAY',
        explanation: 'Heavy vertical D resting on the line with heavy dot on the right in 2nd position.'
      },
      {
        word: 'Do',
        formula: 'D + 3rd place heavy dash (oo) → DO',
        explanation: 'Grammalogue / standard outline: Heavy D cutting through baseline with 3rd position dash.'
      },
      {
        word: 'Date',
        formula: 'D + long AY + T → DATE',
        explanation: 'Heavy D downward to line, joined seamlessly with light vertical T downward.'
      }
    ]
  },
  {
    id: 'stroke-ch',
    name: 'CH (Chay)',
    sound: '/tʃ/ as in Chair, Chest, Check',
    category: 'consonant-straight',
    direction: 'downward',
    angleDescription: 'Oblique 30° from perpendicular (top-right to bottom-left)',
    weight: 'light',
    svgPath: 'M 65 25 L 35 75',
    startPoint: { x: 65, y: 25 },
    endPoint: { x: 35, y: 75 },
    targetAngle: 60,
    description: 'A light downward stroke inclined at 30° to the vertical (60° to horizontal).',
    pitmanRule: 'Chay is always written downward. Never confuse Chay with the upward Ray stroke.',
    examples: [
      { word: 'Chair', transcription: 'Chay + 2nd place dot + Ar' },
      { word: 'Check', transcription: 'Chay + 2nd place light dot (e) + K' }
    ],
    wordBuilding: [
      {
        word: 'Check',
        formula: 'CH + short E + K → CHECK',
        explanation: 'Chay drawn downward at 60° to the line, then K horizontal without lifting pen.'
      }
    ]
  },
  {
    id: 'stroke-j',
    name: 'J (Jay)',
    sound: '/dʒ/ as in Joy, Judge, Age',
    category: 'consonant-straight',
    direction: 'downward',
    angleDescription: 'Oblique 30° from perpendicular (top-right to bottom-left)',
    weight: 'heavy',
    svgPath: 'M 65 25 L 35 75',
    startPoint: { x: 65, y: 25 },
    endPoint: { x: 35, y: 75 },
    targetAngle: 60,
    description: 'A heavy downward stroke matching the angle of Chay, representing voiced /dʒ/.',
    pitmanRule: 'Written downward with heavy pressure.',
    examples: [
      { word: 'Joy', transcription: 'Jay + 1st place diphthong (oi)' },
      { word: 'Age', transcription: '2nd place dot + Jay' }
    ],
    wordBuilding: [
      {
        word: 'Joy',
        formula: 'J + diphthong OI → JOY',
        explanation: 'Heavy Jay written above the line (1st position) with left-facing angle sign at 1st place.'
      }
    ]
  },
  {
    id: 'stroke-k',
    name: 'K (Kay)',
    sound: '/k/ as in Key, Cook, King',
    category: 'consonant-straight',
    direction: 'horizontal',
    angleDescription: 'Horizontal 0° left-to-right on the baseline',
    weight: 'light',
    svgPath: 'M 20 50 L 80 50',
    startPoint: { x: 20, y: 50 },
    endPoint: { x: 80, y: 50 },
    targetAngle: 0,
    description: 'A light horizontal stroke written from left to right directly on the line of writing.',
    pitmanRule: 'Horizontal strokes are always written from left to right.',
    examples: [
      { word: 'Key', transcription: 'Kay + 3rd place dot (ee)' },
      { word: 'Cake', transcription: 'Kay + 2nd place dot (a) + Kay' }
    ],
    wordBuilding: [
      {
        word: 'Key',
        formula: 'K + 3rd place heavy dot (ee) → KEY',
        explanation: 'K on the line with heavy dot below (after) at the 3rd place.'
      },
      {
        word: 'Cake',
        formula: 'K + long AY + K → CAKE',
        explanation: 'Two consecutive K strokes drawn left to right with heavy dot in the middle.'
      }
    ]
  },
  {
    id: 'stroke-g',
    name: 'G (Gay)',
    sound: '/ɡ/ as in Go, Give, Game',
    category: 'consonant-straight',
    direction: 'horizontal',
    angleDescription: 'Horizontal 0° left-to-right on the baseline',
    weight: 'heavy',
    svgPath: 'M 20 50 L 80 50',
    startPoint: { x: 20, y: 50 },
    endPoint: { x: 80, y: 50 },
    targetAngle: 0,
    description: 'A heavy horizontal stroke written from left to right, voiced counterpart to Kay.',
    pitmanRule: 'Drawn heavy from left to right.',
    examples: [
      { word: 'Go', transcription: 'Gay + 2nd place dash (o)' },
      { word: 'Game', transcription: 'Gay + 2nd place dot (a) + M' }
    ],
    wordBuilding: [
      {
        word: 'Go',
        formula: 'G + 2nd place heavy dash (o) → GO',
        explanation: 'Heavy Gay on line with heavy dash below in 2nd position.'
      }
    ]
  },

  // Curved Consonants
  {
    id: 'stroke-f',
    name: 'F (Ef)',
    sound: '/f/ as in Fee, For, Off',
    category: 'consonant-curved',
    direction: 'downward',
    angleDescription: 'Downward shallow curve (left segment of circle)',
    weight: 'light',
    svgPath: 'M 35 25 C 60 40 60 70 35 85',
    startPoint: { x: 35, y: 25 },
    endPoint: { x: 35, y: 85 },
    targetAngle: 90,
    description: 'A light downward curve representing the left quarter segment of a circle.',
    pitmanRule: 'Curves are quarter segments of circles written downwards.',
    examples: [
      { word: 'Fee', transcription: 'Ef + 3rd place dot (ee)' },
      { word: 'For', transcription: 'Grammalogue: Ef on the line' }
    ],
    wordBuilding: [
      {
        word: 'Fee',
        formula: 'F + 3rd place heavy dot (ee) → FEE',
        explanation: 'F cuts through the line with heavy dot at the end.'
      }
    ]
  },
  {
    id: 'stroke-v',
    name: 'V (Vee)',
    sound: '/v/ as in View, Voice, Have',
    category: 'consonant-curved',
    direction: 'downward',
    angleDescription: 'Downward shallow curve (left segment of circle)',
    weight: 'heavy',
    svgPath: 'M 35 25 C 60 40 60 70 35 85',
    startPoint: { x: 35, y: 25 },
    endPoint: { x: 35, y: 85 },
    targetAngle: 90,
    description: 'A heavy downward curve, the voiced counterpart of Ef.',
    pitmanRule: 'Drawn heavy downwards.',
    examples: [
      { word: 'Have', transcription: 'Grammalogue: Vee on the line' },
      { word: 'View', transcription: 'Vee + 3rd place diphthong (ew)' }
    ],
    wordBuilding: [
      {
        word: 'Have',
        formula: 'V on the line → HAVE',
        explanation: 'Standard grammalogue: heavy curved Vee resting on the line.'
      }
    ]
  },
  {
    id: 'stroke-th',
    name: 'TH (Ith)',
    sound: '/θ/ as in Thin, Think, Path',
    category: 'consonant-curved',
    direction: 'downward',
    angleDescription: 'Downward shallow curve facing right',
    weight: 'light',
    svgPath: 'M 60 25 C 40 40 40 70 60 85',
    startPoint: { x: 60, y: 25 },
    endPoint: { x: 60, y: 85 },
    targetAngle: 90,
    description: 'A light downward curve forming a vertical shallow arc facing right.',
    pitmanRule: 'Written downward with light touch.',
    examples: [
      { word: 'Think', transcription: 'Grammalogue: Ith on line' },
      { word: 'Path', transcription: 'P + 1st place dot (a) + Ith' }
    ],
    wordBuilding: [
      {
        word: 'Path',
        formula: 'P + short A + Ith → PATH',
        explanation: 'Light P above line connected directly to curved Ith.'
      }
    ]
  },
  {
    id: 'stroke-m',
    name: 'M (Em)',
    sound: '/m/ as in Me, Man, Make',
    category: 'consonant-curved',
    direction: 'horizontal',
    angleDescription: 'Horizontal shallow arch',
    weight: 'light',
    svgPath: 'M 20 60 C 35 35 65 35 80 60',
    startPoint: { x: 20, y: 60 },
    endPoint: { x: 80, y: 60 },
    targetAngle: 0,
    description: 'A light horizontal curve convexed upwards, written left to right.',
    pitmanRule: 'Written from left to right along the line.',
    examples: [
      { word: 'May', transcription: 'Em + 2nd place heavy dot (a)' },
      { word: 'Me', transcription: 'Em + 3rd place heavy dot (ee)' }
    ],
    wordBuilding: [
      {
        word: 'May',
        formula: 'M + 2nd place heavy dot (a) → MAY',
        explanation: 'M on the line with heavy dot below in the middle position.'
      }
    ]
  },
  {
    id: 'stroke-n',
    name: 'N (En)',
    sound: '/n/ as in No, Name, New',
    category: 'consonant-curved',
    direction: 'horizontal',
    angleDescription: 'Horizontal shallow cup (concave upward)',
    weight: 'light',
    svgPath: 'M 20 40 C 35 65 65 65 80 40',
    startPoint: { x: 20, y: 40 },
    endPoint: { x: 80, y: 40 },
    targetAngle: 0,
    description: 'A light horizontal curve concaved upwards, written left to right.',
    pitmanRule: 'The opposite curve to Em. Written horizontally from left to right.',
    examples: [
      { word: 'No', transcription: 'En + 2nd place heavy dash (o)' },
      { word: 'Name', transcription: 'En + 2nd place dot (a) + Em' }
    ],
    wordBuilding: [
      {
        word: 'No',
        formula: 'N + 2nd place heavy dash (o) → NO',
        explanation: 'N on the line with heavy dash below in 2nd position.'
      }
    ]
  },
  {
    id: 'stroke-l',
    name: 'L (El)',
    sound: '/l/ as in Look, Late, Life',
    category: 'consonant-upward',
    direction: 'upward',
    angleDescription: 'Upward curve starting bottom-left to top-right',
    weight: 'light',
    svgPath: 'M 25 75 C 30 50 45 35 75 25',
    startPoint: { x: 25, y: 75 },
    endPoint: { x: 75, y: 25 },
    targetAngle: 45,
    description: 'A light upward curve starting from the line and curving upwards.',
    pitmanRule: 'El is normally written upwards. When standing alone after a vowel it can be written downwards.',
    examples: [
      { word: 'Late', transcription: 'El + 2nd place dot (a) + T' },
      { word: 'Life', transcription: 'El + 1st place diphthong (i) + Ef' }
    ],
    wordBuilding: [
      {
        word: 'Late',
        formula: 'L + long AY + T → LATE',
        explanation: 'Upward L from baseline joined with downward vertical T.'
      }
    ]
  },
  {
    id: 'stroke-r-up',
    name: 'R (Ray - Upward)',
    sound: '/r/ as in Red, Right, Room',
    category: 'consonant-upward',
    direction: 'upward',
    angleDescription: 'Straight upward at 30° from baseline',
    weight: 'light',
    svgPath: 'M 30 80 L 70 30',
    startPoint: { x: 30, y: 80 },
    endPoint: { x: 70, y: 30 },
    targetAngle: 30,
    description: 'A straight light stroke written upwards at 30°.',
    pitmanRule: 'Ray is written upwards. An initial R followed by a vowel is almost always written with upward Ray.',
    examples: [
      { word: 'Ray', transcription: 'Ray + 2nd place dot (a)' },
      { word: 'Right', transcription: 'Ray + 1st place diphthong (i) + T' }
    ],
    wordBuilding: [
      {
        word: 'Ray',
        formula: 'R (upward) + 2nd place dot (a) → RAY',
        explanation: 'Drawn upward from line at 30° with heavy dot on the right in 2nd place.'
      }
    ]
  }
];
