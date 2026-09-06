import { WordPracticeItem } from './types';

export const wordPracticeData: WordPracticeItem[] = [
  // ==================== STROKE P WORDS ====================
  {
    id: 'wp-pay',
    strokeId: 'stroke-p',
    word: 'Pay',
    phonetic: '/peɪ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 38 25 L 58 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke P',
        label: 'Consonant /p/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light straight stroke written downward from left to right at 120°',
        sign: 'P'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot placed after (to the right of) stroke P',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke P (light, straight downward at 120°)',
      joining: 'Single stroke word; rests firmly on the steno baseline',
      vowelIndication: '2nd place vowel dot placed at the exact midpoint of P on the right (following) side',
      positionAndWeight: '2nd position (on the baseline) because the vowel is 2nd-place Long A (Pay)'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw the Consonant Stroke P',
        formula: 'P (downward at 120° to baseline)',
        explanation: 'Start at the upper left and draw a light straight line downward to rest on the baseline.',
        svgPartialPath: 'M 38 25 L 58 65'
      },
      {
        step: 2,
        title: 'Insert 2nd Place Heavy Dot Vowel',
        formula: 'P + Heavy Dot [ay] in 2nd position',
        explanation: 'Lift the pen and place a firm, dark dot right at the middle (2nd place) on the right side of P.',
        svgPartialPath: 'M 38 25 L 58 65'
      },
      {
        step: 3,
        title: 'Complete Pitman Outline',
        formula: 'P + /eɪ/ = PAY',
        explanation: 'The complete outline spells PAY. It is read: consonant P first, followed by the vowel on its right.'
      }
    ],
    explanation: 'PAY is a 2nd-position word because of the long "a" sound. Stroke P sits on the line, and the heavy dot vowel is placed in the second position on the right side.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke P',
        type: 'stroke',
        pathD: 'M 38 25 L 58 65',
        weight: 'light',
        startPoint: { x: 38, y: 25 },
        endPoint: { x: 58, y: 65 },
        directionText: 'Downward 120° from top-left to baseline'
      },
      {
        order: 2,
        label: '2nd Place Vowel Dot',
        type: 'vowel',
        pathD: 'M 65 45 A 2 2 0 1 1 65 44.9',
        weight: 'heavy',
        startPoint: { x: 65, y: 45 },
        endPoint: { x: 65, y: 45 },
        dotOrDash: 'dot',
        directionText: 'Place heavy dot at middle right'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wp-pen',
    strokeId: 'stroke-p',
    word: 'Pen',
    phonetic: '/pɛn/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 30 25 L 50 65 L 85 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke P',
        label: 'Consonant /p/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light straight stroke downward at 120°',
        sign: 'P'
      },
      {
        part: 'Stroke N',
        label: 'Consonant /n/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Horizontal shallow curved stroke drawn from left to right along the line',
        sign: 'N'
      },
      {
        part: 'Light Dot Vowel',
        label: 'Short /ɛ/ (Short E)',
        strokeType: 'vowel',
        weight: 'light',
        description: '2nd place light dot placed in the angle after P',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke P and Stroke N joined in sequence',
      joining: 'P joins N smoothly without lifting the pen; N continues horizontally along the baseline',
      vowelIndication: 'Light dot vowel in 2nd position placed after P before N is read',
      positionAndWeight: '2nd position: stroke P determines the position by resting on the line'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke P to Baseline',
        formula: 'P (downward to baseline)',
        explanation: 'Draw light stroke P downward until it touches the steno baseline.',
        svgPartialPath: 'M 30 25 L 50 65'
      },
      {
        step: 2,
        title: 'Join Stroke N Without Lifting',
        formula: 'P + N (continuous)',
        explanation: 'Without lifting the pen, immediately draw horizontal stroke N along the baseline.',
        svgPartialPath: 'M 30 25 L 50 65 L 85 65'
      },
      {
        step: 3,
        title: 'Add Short E Light Dot',
        formula: 'P + /ɛ/ + N = PEN',
        explanation: 'Place a light dot in the second place after P. The word is read: P -> short e -> N = PEN.'
      }
    ],
    explanation: 'In Pitman, joined strokes are written continuously without lifting the pen. P comes down to the line, and N continues horizontally to the right.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke P',
        type: 'stroke',
        pathD: 'M 30 25 L 50 65',
        weight: 'light',
        startPoint: { x: 30, y: 25 },
        endPoint: { x: 50, y: 65 },
        directionText: 'Downward 120° to baseline'
      },
      {
        order: 2,
        label: 'Stroke N Join',
        type: 'join',
        pathD: 'M 50 65 L 85 65',
        weight: 'light',
        startPoint: { x: 50, y: 65 },
        endPoint: { x: 85, y: 65 },
        directionText: 'Horizontal left-to-right without lifting pen'
      },
      {
        order: 3,
        label: 'Light Dot Vowel',
        type: 'vowel',
        pathD: 'M 57 45 A 1.5 1.5 0 1 1 57 44.9',
        weight: 'light',
        startPoint: { x: 57, y: 45 },
        endPoint: { x: 57, y: 45 },
        dotOrDash: 'dot',
        directionText: 'Place light dot in 2nd position'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wp-paid',
    strokeId: 'stroke-p',
    word: 'Paid',
    phonetic: '/peɪd/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 35 25 L 55 50 L 55 78',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke P',
        label: 'Consonant /p/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light slant downstroke at 120°',
        sign: 'P'
      },
      {
        part: 'Stroke D',
        label: 'Consonant /d/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy vertical downstroke at 90°',
        sign: 'D'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot on the right side of stroke P',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke P (light slant) followed by Stroke D (heavy vertical)',
      joining: 'Sharp angle join: the pen transitions sharply from 120° slant to 90° perpendicular downstroke',
      vowelIndication: 'Heavy dot in 2nd position on the right of P',
      positionAndWeight: '2nd position: stroke P begins above and D finishes at the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke P (Slanted)',
        formula: 'P (120° slant down)',
        explanation: 'Draw light stroke P downward halfway to the baseline.',
        svgPartialPath: 'M 35 25 L 55 50'
      },
      {
        step: 2,
        title: 'Join Heavy Stroke D',
        formula: 'P + Heavy D (perpendicular)',
        explanation: 'Without lifting the pen, press firmly to draw heavy vertical stroke D down to the line.',
        svgPartialPath: 'M 35 25 L 55 50 L 55 78'
      },
      {
        step: 3,
        title: 'Insert 2nd Place Dot',
        formula: 'P + /eɪ/ + D = PAID',
        explanation: 'Place the heavy dot in the middle of P. The word reads: P -> AY -> D = PAID.'
      }
    ],
    explanation: 'PAID illustrates a slant stroke joining a perpendicular stroke. The first stroke P starts above the line so that the second stroke D rests upon the baseline.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke P',
        type: 'stroke',
        pathD: 'M 35 25 L 55 50',
        weight: 'light',
        startPoint: { x: 35, y: 25 },
        endPoint: { x: 55, y: 50 },
        directionText: 'Downward 120° slant'
      },
      {
        order: 2,
        label: 'Stroke D Join',
        type: 'join',
        pathD: 'M 55 50 L 55 78',
        weight: 'heavy',
        startPoint: { x: 55, y: 50 },
        endPoint: { x: 55, y: 78 },
        directionText: 'Heavy vertical downstroke to baseline'
      },
      {
        order: 3,
        label: 'Heavy Dot Vowel',
        type: 'vowel',
        pathD: 'M 62 38 A 2 2 0 1 1 62 37.9',
        weight: 'heavy',
        startPoint: { x: 62, y: 38 },
        endPoint: { x: 62, y: 38 },
        dotOrDash: 'dot',
        directionText: '2nd place heavy dot on P'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE B WORDS ====================
  {
    id: 'wp-bay',
    strokeId: 'stroke-b',
    word: 'Bay',
    phonetic: '/beɪ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 38 25 L 58 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke B',
        label: 'Consonant /b/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy straight stroke downward at 120° resting on the baseline',
        sign: 'B'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot placed on the right side of B',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke B (heavy/thick straight downward at 120°)',
      joining: 'Single stroke outline resting on the line',
      vowelIndication: 'Heavy dot in 2nd place on the right of B',
      positionAndWeight: 'Firm pressure for voiced consonant B; 2nd place position on baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Heavy Stroke B',
        formula: 'Heavy B (downward at 120°)',
        explanation: 'Press firmly with the pen to draw a thick, straight line downward at 120° to the baseline.',
        svgPartialPath: 'M 38 25 L 58 65'
      },
      {
        step: 2,
        title: 'Add 2nd Place Heavy Dot',
        formula: 'B + Heavy Dot [ay]',
        explanation: 'Place the heavy dot at the midpoint on the right side of the stroke.',
        svgPartialPath: 'M 38 25 L 58 65'
      },
      {
        step: 3,
        title: 'Complete Outline BAY',
        formula: 'B + /eɪ/ = BAY',
        explanation: 'The outline represents the word BAY: voiced consonant B followed by long A.'
      }
    ],
    explanation: 'BAY is identical in direction and angle to PAY, but differs in thickness (heavy voiced stroke B) and sound.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy Stroke B',
        type: 'stroke',
        pathD: 'M 38 25 L 58 65',
        weight: 'heavy',
        startPoint: { x: 38, y: 25 },
        endPoint: { x: 58, y: 65 },
        directionText: 'Firm downward stroke at 120°'
      },
      {
        order: 2,
        label: 'Heavy Dot',
        type: 'vowel',
        pathD: 'M 65 45 A 2 2 0 1 1 65 44.9',
        weight: 'heavy',
        startPoint: { x: 65, y: 45 },
        endPoint: { x: 65, y: 45 },
        dotOrDash: 'dot',
        directionText: 'Place heavy dot at middle right'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wp-bee',
    strokeId: 'stroke-b',
    word: 'Bee',
    phonetic: '/biː/',
    position: '3rd (through line)',
    shorthandSvgPath: 'M 38 35 L 58 75',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke B',
        label: 'Consonant /b/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy straight stroke written through the baseline (3rd position)',
        sign: 'B'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Long /iː/ (Long E)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '3rd place heavy dot placed at the bottom end of stroke B',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke B cutting through the line',
      joining: 'Single stroke outline; cuts the baseline in half',
      vowelIndication: '3rd place heavy dot placed at the conclusion of B on the right',
      positionAndWeight: '3rd position: downstrokes with 3rd place vowels cut through the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw B Through Baseline',
        formula: 'Heavy B (3rd position cut)',
        explanation: 'Start just above the baseline and draw firmly down, crossing through the line.',
        svgPartialPath: 'M 38 35 L 58 75'
      },
      {
        step: 2,
        title: 'Add 3rd Place Heavy Dot',
        formula: 'B + Heavy Dot [ee] in 3rd place',
        explanation: 'Place the heavy dot near the bottom end on the right side of the stroke.',
        svgPartialPath: 'M 38 35 L 58 75'
      },
      {
        step: 3,
        title: 'Complete Outline BEE',
        formula: 'B + /iː/ = BEE',
        explanation: 'BEE is written in the 3rd position because of the long "e" vowel.'
      }
    ],
    explanation: 'Words with 3rd place vowels (such as "ee" in BEE) have downstrokes written through the line. The vowel is placed at the 3rd (bottom) position.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy Stroke B Through Line',
        type: 'stroke',
        pathD: 'M 38 35 L 58 75',
        weight: 'heavy',
        startPoint: { x: 38, y: 35 },
        endPoint: { x: 58, y: 75 },
        directionText: 'Firm downward stroke cutting through line'
      },
      {
        order: 2,
        label: '3rd Place Dot',
        type: 'vowel',
        pathD: 'M 65 70 A 2 2 0 1 1 65 69.9',
        weight: 'heavy',
        startPoint: { x: 65, y: 70 },
        endPoint: { x: 65, y: 70 },
        dotOrDash: 'dot',
        directionText: 'Place heavy dot at bottom right'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wp-book',
    strokeId: 'stroke-b',
    word: 'Book',
    phonetic: '/bʊk/',
    position: '3rd (through line)',
    shorthandSvgPath: 'M 28 35 L 48 75 L 85 75',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke B',
        label: 'Consonant /b/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy stroke B cutting through baseline',
        sign: 'B'
      },
      {
        part: 'Stroke K',
        label: 'Consonant /k/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal stroke drawn to the right',
        sign: 'K'
      },
      {
        part: 'Light Dash Vowel',
        label: 'Short /ʊ/ (Short OO)',
        strokeType: 'vowel',
        weight: 'light',
        description: '3rd place light dash placed before K',
        sign: '—'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Heavy B joined with light horizontal K',
      joining: 'B cuts through the line and joins K continuously at the bottom without lifting pen',
      vowelIndication: '3rd place light dash vowel transferred before stroke K',
      positionAndWeight: '3rd position through the line for short OO vowel'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke B Through Line',
        formula: 'Heavy B through line',
        explanation: 'Draw heavy stroke B down through the baseline.',
        svgPartialPath: 'M 28 35 L 48 75'
      },
      {
        step: 2,
        title: 'Continuous Join to Stroke K',
        formula: 'B + K (horizontal)',
        explanation: 'Without lifting the pen, draw light stroke K horizontally to the right.',
        svgPartialPath: 'M 28 35 L 48 75 L 85 75'
      },
      {
        step: 3,
        title: 'Add Short OO Vowel',
        formula: 'B + /ʊ/ + K = BOOK',
        explanation: 'Place the light dash in the 3rd place before stroke K.'
      }
    ],
    explanation: 'In BOOK, B cuts through the line and joins horizontal K. The vowel between two strokes is written before the second stroke in the 3rd position.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy B',
        type: 'stroke',
        pathD: 'M 28 35 L 48 75',
        weight: 'heavy',
        startPoint: { x: 28, y: 35 },
        endPoint: { x: 48, y: 75 },
        directionText: 'Heavy downstroke cutting baseline'
      },
      {
        order: 2,
        label: 'Horizontal K Join',
        type: 'join',
        pathD: 'M 48 75 L 85 75',
        weight: 'light',
        startPoint: { x: 48, y: 75 },
        endPoint: { x: 85, y: 75 },
        directionText: 'Light horizontal stroke left-to-right'
      },
      {
        order: 3,
        label: '3rd Place Dash',
        type: 'vowel',
        pathD: 'M 58 68 L 65 68',
        weight: 'light',
        startPoint: { x: 58, y: 68 },
        endPoint: { x: 65, y: 68 },
        dotOrDash: 'dash',
        directionText: 'Light short dash vowel before K'
      }
    ],
    difficulty: 'intermediate'
  },

  // ==================== STROKE T WORDS ====================
  {
    id: 'wp-tea',
    strokeId: 'stroke-t',
    word: 'Tea',
    phonetic: '/tiː/',
    position: '3rd (through line)',
    shorthandSvgPath: 'M 50 35 L 50 75',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke T',
        label: 'Consonant /t/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light perpendicular downstroke at 90° through the line',
        sign: 'T'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Long /iː/ (Long E)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '3rd place heavy dot placed at bottom right of T',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke T (light straight perpendicular downstroke)',
      joining: 'Single stroke cutting through line',
      vowelIndication: '3rd place heavy dot at the bottom of T',
      positionAndWeight: '3rd position through the baseline for Long E vowel'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw T Through Line',
        formula: 'Light vertical T through baseline',
        explanation: 'Draw a light straight vertical line downward, cutting evenly through the baseline.',
        svgPartialPath: 'M 50 35 L 50 75'
      },
      {
        step: 2,
        title: 'Add 3rd Place Heavy Dot',
        formula: 'T + Heavy Dot [ee]',
        explanation: 'Place a heavy dot in the 3rd place on the right side of the stroke.',
        svgPartialPath: 'M 50 35 L 50 75'
      },
      {
        step: 3,
        title: 'Complete Outline TEA',
        formula: 'T + /iː/ = TEA',
        explanation: 'Light vertical downstroke through line + 3rd place dot spells TEA.'
      }
    ],
    explanation: 'TEA is a pure 3rd-position single stroke word. The light vertical stroke T cuts through the line and takes a heavy dot in the 3rd place.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke T',
        type: 'stroke',
        pathD: 'M 50 35 L 50 75',
        weight: 'light',
        startPoint: { x: 50, y: 35 },
        endPoint: { x: 50, y: 75 },
        directionText: 'Perpendicular downstroke through baseline'
      },
      {
        order: 2,
        label: '3rd Place Dot',
        type: 'vowel',
        pathD: 'M 58 70 A 2 2 0 1 1 58 69.9',
        weight: 'heavy',
        startPoint: { x: 58, y: 70 },
        endPoint: { x: 58, y: 70 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot at bottom right'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wp-take',
    strokeId: 'stroke-t',
    word: 'Take',
    phonetic: '/teɪk/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 35 25 L 35 65 L 75 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke T',
        label: 'Consonant /t/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light vertical downstroke at 90° to baseline',
        sign: 'T'
      },
      {
        part: 'Stroke K',
        label: 'Consonant /k/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal stroke along the line',
        sign: 'K'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot on the right of T',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke T joined with Stroke K',
      joining: 'Vertical T meets horizontal K at a clean right angle (90°) without lifting pen',
      vowelIndication: '2nd place heavy dot placed after T',
      positionAndWeight: '2nd position: stroke T rests upon the line and K runs along it'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke T Down to Baseline',
        formula: 'T (downward 90°)',
        explanation: 'Draw light vertical stroke T downward to meet the baseline.',
        svgPartialPath: 'M 35 25 L 35 65'
      },
      {
        step: 2,
        title: 'Continuous Right Angle to Stroke K',
        formula: 'T + K (horizontal)',
        explanation: 'Without lifting the pen, turn sharply 90° right and draw horizontal stroke K.',
        svgPartialPath: 'M 35 25 L 35 65 L 75 65'
      },
      {
        step: 3,
        title: 'Insert 2nd Place Dot',
        formula: 'T + /eɪ/ + K = TAKE',
        explanation: 'Place the heavy dot at the middle of T. It reads: T -> AY -> K = TAKE.'
      }
    ],
    explanation: 'TAKE demonstrates a perpendicular downstroke joining a horizontal stroke. The sharp right-angle join must be clean without rounding.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke T',
        type: 'stroke',
        pathD: 'M 35 25 L 35 65',
        weight: 'light',
        startPoint: { x: 35, y: 25 },
        endPoint: { x: 35, y: 65 },
        directionText: 'Vertical downstroke to baseline'
      },
      {
        order: 2,
        label: 'Stroke K Join',
        type: 'join',
        pathD: 'M 35 65 L 75 65',
        weight: 'light',
        startPoint: { x: 35, y: 65 },
        endPoint: { x: 75, y: 65 },
        directionText: 'Sharp horizontal line to the right'
      },
      {
        order: 3,
        label: '2nd Place Dot',
        type: 'vowel',
        pathD: 'M 43 45 A 2 2 0 1 1 43 44.9',
        weight: 'heavy',
        startPoint: { x: 43, y: 45 },
        endPoint: { x: 43, y: 45 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot at middle right of T'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE D WORDS ====================
  {
    id: 'wp-day',
    strokeId: 'stroke-d',
    word: 'Day',
    phonetic: '/deɪ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 50 25 L 50 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke D',
        label: 'Consonant /d/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy vertical downstroke at 90° resting on the baseline',
        sign: 'D'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot on the right side of D',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke D (heavy vertical downstroke)',
      joining: 'Single stroke outline resting on the line',
      vowelIndication: '2nd place heavy dot at the midpoint of D',
      positionAndWeight: '2nd position: rests upon the baseline for 2nd place vowel'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Heavy Stroke D',
        formula: 'Heavy D (vertical to line)',
        explanation: 'Press firmly to draw a thick, straight vertical stroke downward to the baseline.',
        svgPartialPath: 'M 50 25 L 50 65'
      },
      {
        step: 2,
        title: 'Add 2nd Place Heavy Dot',
        formula: 'D + Heavy Dot [ay]',
        explanation: 'Place the heavy dot in the middle on the right side.',
        svgPartialPath: 'M 50 25 L 50 65'
      },
      {
        step: 3,
        title: 'Complete Outline DAY',
        formula: 'D + /eɪ/ = DAY',
        explanation: 'Heavy vertical downstroke on line + 2nd place dot spells DAY.'
      }
    ],
    explanation: 'DAY is the heavy equivalent of T with the 2nd place heavy vowel dot. It is written perpendicular to the line.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy Stroke D',
        type: 'stroke',
        pathD: 'M 50 25 L 50 65',
        weight: 'heavy',
        startPoint: { x: 50, y: 25 },
        endPoint: { x: 50, y: 65 },
        directionText: 'Firm vertical downstroke to baseline'
      },
      {
        order: 2,
        label: '2nd Place Dot',
        type: 'vowel',
        pathD: 'M 58 45 A 2 2 0 1 1 58 44.9',
        weight: 'heavy',
        startPoint: { x: 58, y: 45 },
        endPoint: { x: 58, y: 45 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot at middle right'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wp-date',
    strokeId: 'stroke-d',
    word: 'Date',
    phonetic: '/deɪt/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 50 15 L 50 45 L 50 75',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke D',
        label: 'Consonant /d/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy vertical downstroke at 90°',
        sign: 'D'
      },
      {
        part: 'Stroke T',
        label: 'Consonant /t/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light vertical downstroke at 90°',
        sign: 'T'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot on the right of D',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Heavy D followed by light T in the same direction',
      joining: 'Two strokes in the same direction form a continuous straight line of double length; first half heavy, second half light',
      vowelIndication: '2nd place heavy dot placed after D',
      positionAndWeight: '2nd position: D begins above line so T touches the line'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke D (Heavy Vertical)',
        formula: 'Heavy D downward',
        explanation: 'Draw a heavy vertical stroke from high above the baseline halfway down.',
        svgPartialPath: 'M 50 15 L 50 45'
      },
      {
        step: 2,
        title: 'Continue Light Stroke T',
        formula: 'Heavy D + Light T (straight line)',
        explanation: 'Ease pen pressure to continue a light vertical line straight down to the baseline.',
        svgPartialPath: 'M 50 15 L 50 45 L 50 75'
      },
      {
        step: 3,
        title: 'Add 2nd Place Dot',
        formula: 'D + /eɪ/ + T = DATE',
        explanation: 'Place the heavy dot at the middle of D. The word reads: D -> AY -> T = DATE.'
      }
    ],
    explanation: 'DATE illustrates two strokes in the same direction joined together. In Pitman, when two strokes of the same direction join, they form one straight line of double length, changing from heavy to light.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy D',
        type: 'stroke',
        pathD: 'M 50 15 L 50 45',
        weight: 'heavy',
        startPoint: { x: 50, y: 15 },
        endPoint: { x: 50, y: 45 },
        directionText: 'Heavy vertical downstroke'
      },
      {
        order: 2,
        label: 'Light T Join',
        type: 'join',
        pathD: 'M 50 45 L 50 75',
        weight: 'light',
        startPoint: { x: 50, y: 45 },
        endPoint: { x: 50, y: 75 },
        directionText: 'Light vertical downstroke to baseline'
      },
      {
        order: 3,
        label: '2nd Place Dot',
        type: 'vowel',
        pathD: 'M 58 30 A 2 2 0 1 1 58 29.9',
        weight: 'heavy',
        startPoint: { x: 58, y: 30 },
        endPoint: { x: 58, y: 30 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot beside upper D'
      }
    ],
    difficulty: 'intermediate'
  },

  // ==================== STROKE CH WORDS ====================
  {
    id: 'wp-check',
    strokeId: 'stroke-ch',
    word: 'Check',
    phonetic: '/tʃɛk/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 35 30 L 55 65 L 85 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke CH',
        label: 'Consonant /tʃ/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light straight stroke downward at 60° from horizontal',
        sign: 'CH'
      },
      {
        part: 'Stroke K',
        label: 'Consonant /k/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal straight stroke along the baseline',
        sign: 'K'
      },
      {
        part: 'Light Dot Vowel',
        label: 'Short /ɛ/ (Short E)',
        strokeType: 'vowel',
        weight: 'light',
        description: '2nd place light dot placed after CH',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke CH (60° slant) joined with horizontal K',
      joining: 'Smooth obtuse angle join: CH touches the line and K runs horizontally right',
      vowelIndication: 'Light dot in 2nd place after CH',
      positionAndWeight: '2nd position: CH rests upon the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke CH Downward at 60°',
        formula: 'CH (light downstroke to line)',
        explanation: 'Draw light stroke CH from top-left downward at 60° to touch the baseline.',
        svgPartialPath: 'M 35 30 L 55 65'
      },
      {
        step: 2,
        title: 'Join Horizontal K',
        formula: 'CH + K (horizontal)',
        explanation: 'Without lifting the pen, draw horizontal stroke K along the baseline.',
        svgPartialPath: 'M 35 30 L 55 65 L 85 65'
      },
      {
        step: 3,
        title: 'Add Short E Light Dot',
        formula: 'CH + /ɛ/ + K = CHECK',
        explanation: 'Place the light dot in the 2nd place after CH. Reads: CH -> short e -> K = CHECK.'
      }
    ],
    explanation: 'CHECK shows CH drawn downwards at 60° to the line, directly joined with horizontal K.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke CH',
        type: 'stroke',
        pathD: 'M 35 30 L 55 65',
        weight: 'light',
        startPoint: { x: 35, y: 30 },
        endPoint: { x: 55, y: 65 },
        directionText: 'Downward at 60° to baseline'
      },
      {
        order: 2,
        label: 'Stroke K Join',
        type: 'join',
        pathD: 'M 55 65 L 85 65',
        weight: 'light',
        startPoint: { x: 55, y: 65 },
        endPoint: { x: 85, y: 65 },
        directionText: 'Horizontal left-to-right'
      },
      {
        order: 3,
        label: 'Light Dot',
        type: 'vowel',
        pathD: 'M 62 48 A 1.5 1.5 0 1 1 62 47.9',
        weight: 'light',
        startPoint: { x: 62, y: 48 },
        endPoint: { x: 62, y: 48 },
        dotOrDash: 'dot',
        directionText: '2nd place light dot after CH'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE J WORDS ====================
  {
    id: 'wp-joy',
    strokeId: 'stroke-j',
    word: 'Joy',
    phonetic: '/dʒɔɪ/',
    position: '1st (above line)',
    shorthandSvgPath: 'M 45 20 L 65 55',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke J',
        label: 'Consonant /dʒ/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy straight stroke downward at 60° written above the line',
        sign: 'J'
      },
      {
        part: 'Diphthong Sign',
        label: 'Diphthong /ɔɪ/ (OI)',
        strokeType: 'diphthong',
        weight: 'light',
        description: '1st place acute angle sign pointing downward to the left',
        sign: 'v'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke J (heavy straight downstroke at 60°)',
      joining: 'Single stroke in 1st position (above the baseline)',
      vowelIndication: '1st place diphthong sign OI placed at the beginning of the stroke on the right',
      positionAndWeight: '1st position: written above the baseline because the sound is 1st-place OI'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Heavy Stroke J Above Line',
        formula: 'Heavy J in 1st position',
        explanation: 'Start high up and draw a firm heavy stroke at 60°, stopping before reaching the baseline.',
        svgPartialPath: 'M 45 20 L 65 55'
      },
      {
        step: 2,
        title: 'Add 1st Place Diphthong Sign',
        formula: 'J + Diphthong OI',
        explanation: 'Place the small open angle sign at the first position on the right of J.',
        svgPartialPath: 'M 45 20 L 65 55'
      },
      {
        step: 3,
        title: 'Complete Outline JOY',
        formula: 'J + /ɔɪ/ = JOY',
        explanation: 'The outline spells JOY: consonant J followed by the diphthong sound OI.'
      }
    ],
    explanation: 'JOY is written in the 1st position because the diphthong OI is a first-place sound. The stroke J remains clearly above the baseline.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy J',
        type: 'stroke',
        pathD: 'M 45 20 L 65 55',
        weight: 'heavy',
        startPoint: { x: 45, y: 20 },
        endPoint: { x: 65, y: 55 },
        directionText: 'Heavy downward stroke at 60° above baseline'
      },
      {
        order: 2,
        label: 'Diphthong OI',
        type: 'vowel',
        pathD: 'M 60 22 L 63 26 L 66 22',
        weight: 'light',
        startPoint: { x: 60, y: 22 },
        endPoint: { x: 66, y: 22 },
        dotOrDash: 'path',
        directionText: '1st place angle sign on right'
      }
    ],
    difficulty: 'intermediate'
  },

  // ==================== STROKE K WORDS ====================
  {
    id: 'wp-key',
    strokeId: 'stroke-k',
    word: 'Key',
    phonetic: '/kiː/',
    position: '3rd (through line)',
    shorthandSvgPath: 'M 25 65 L 75 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke K',
        label: 'Consonant /k/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal straight stroke along the baseline',
        sign: 'K'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Long /iː/ (Long E)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '3rd place heavy dot placed underneath stroke K',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke K (light horizontal)',
      joining: 'Single horizontal stroke',
      vowelIndication: '3rd place heavy dot underneath K (vowels following horizontal strokes are placed below)',
      positionAndWeight: 'Horizontal strokes for 3rd position vowels are written on or slightly below the line'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Horizontal Stroke K',
        formula: 'Light K (left to right)',
        explanation: 'Draw a light straight horizontal line left-to-right resting on the baseline.',
        svgPartialPath: 'M 25 65 L 75 65'
      },
      {
        step: 2,
        title: 'Add 3rd Place Dot Underneath',
        formula: 'K + Heavy Dot [ee] below',
        explanation: 'Place a heavy dot underneath the end (3rd position) of stroke K.',
        svgPartialPath: 'M 25 65 L 75 65'
      },
      {
        step: 3,
        title: 'Complete Outline KEY',
        formula: 'K + /iː/ = KEY',
        explanation: 'Horizontal K followed by underneath 3rd-place dot spells KEY.'
      }
    ],
    explanation: 'Horizontal strokes cannot cut through the baseline; when written alone with 3rd position vowels, they rest on the line and the vowel is placed underneath at the end.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke K',
        type: 'stroke',
        pathD: 'M 25 65 L 75 65',
        weight: 'light',
        startPoint: { x: 25, y: 65 },
        endPoint: { x: 75, y: 65 },
        directionText: 'Horizontal left-to-right'
      },
      {
        order: 2,
        label: '3rd Place Dot',
        type: 'vowel',
        pathD: 'M 65 73 A 2 2 0 1 1 65 72.9',
        weight: 'heavy',
        startPoint: { x: 65, y: 73 },
        endPoint: { x: 65, y: 73 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot underneath near the end'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wp-come',
    strokeId: 'stroke-k',
    word: 'Come',
    phonetic: '/kʌm/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 20 65 L 55 65 Q 70 55 85 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke K',
        label: 'Consonant /k/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal stroke',
        sign: 'K'
      },
      {
        part: 'Stroke M',
        label: 'Consonant /m/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal curve arching upward',
        sign: 'M'
      },
      {
        part: 'Light Dash Vowel',
        label: 'Short /ʌ/ (Short U)',
        strokeType: 'vowel',
        weight: 'light',
        description: '2nd place light dash vowel',
        sign: '—'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke K joined smoothly to Stroke M',
      joining: 'Two horizontal strokes joined in a flowing continuous line along the baseline',
      vowelIndication: 'Light dash vowel in 2nd place below K',
      positionAndWeight: '2nd position along the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke K (Horizontal)',
        formula: 'K left to right',
        explanation: 'Draw light horizontal line K.',
        svgPartialPath: 'M 20 65 L 55 65'
      },
      {
        step: 2,
        title: 'Join Curved M',
        formula: 'K + M curve',
        explanation: 'Without lifting the pen, arch upward smoothly into shallow curve M.',
        svgPartialPath: 'M 20 65 L 55 65 Q 70 55 85 65'
      },
      {
        step: 3,
        title: 'Insert Short U Dash',
        formula: 'K + /ʌ/ + M = COME',
        explanation: 'Place the light dash underneath in the 2nd position.'
      }
    ],
    explanation: 'COME is a classic Pitman grammalogue and word. When fully vocalized, K flows directly into M with the short U dash.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke K',
        type: 'stroke',
        pathD: 'M 20 65 L 55 65',
        weight: 'light',
        startPoint: { x: 20, y: 65 },
        endPoint: { x: 55, y: 65 },
        directionText: 'Straight horizontal line'
      },
      {
        order: 2,
        label: 'Stroke M Join',
        type: 'join',
        pathD: 'M 55 65 Q 70 55 85 65',
        weight: 'light',
        startPoint: { x: 55, y: 65 },
        endPoint: { x: 85, y: 65 },
        directionText: 'Continuous upward shallow arch'
      },
      {
        order: 3,
        label: 'Light Dash',
        type: 'vowel',
        pathD: 'M 35 73 L 42 73',
        weight: 'light',
        startPoint: { x: 35, y: 73 },
        endPoint: { x: 42, y: 73 },
        dotOrDash: 'dash',
        directionText: 'Light short dash underneath'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE G WORDS ====================
  {
    id: 'wp-go',
    strokeId: 'stroke-g',
    word: 'Go',
    phonetic: '/ɡoʊ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 25 65 L 75 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke G',
        label: 'Consonant /ɡ/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy straight horizontal stroke along the line',
        sign: 'G'
      },
      {
        part: 'Heavy Dash Vowel',
        label: 'Long /oʊ/ (Long O)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dash placed underneath G',
        sign: '—'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke G (heavy horizontal straight stroke)',
      joining: 'Single stroke outline on baseline',
      vowelIndication: '2nd place heavy dash placed underneath in the middle',
      positionAndWeight: 'Firm pressure for heavy voiced consonant G'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Heavy Horizontal G',
        formula: 'Heavy G (firm stroke)',
        explanation: 'Press firmly to draw a thick horizontal stroke along the baseline.',
        svgPartialPath: 'M 25 65 L 75 65'
      },
      {
        step: 2,
        title: 'Add 2nd Place Heavy Dash',
        formula: 'G + Heavy Dash [oh]',
        explanation: 'Place a heavy horizontal dash underneath in the middle (2nd place).',
        svgPartialPath: 'M 25 65 L 75 65'
      },
      {
        step: 3,
        title: 'Complete Outline GO',
        formula: 'G + /oʊ/ = GO',
        explanation: 'Heavy horizontal line + underneath middle dash spells GO.'
      }
    ],
    explanation: 'GO is written with heavy stroke G on the baseline. The heavy dash vowel for long O is written underneath at the 2nd position.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy G',
        type: 'stroke',
        pathD: 'M 25 65 L 75 65',
        weight: 'heavy',
        startPoint: { x: 25, y: 65 },
        endPoint: { x: 75, y: 65 },
        directionText: 'Firm horizontal stroke left-to-right'
      },
      {
        order: 2,
        label: 'Heavy Dash',
        type: 'vowel',
        pathD: 'M 46 74 L 54 74',
        weight: 'heavy',
        startPoint: { x: 46, y: 74 },
        endPoint: { x: 54, y: 74 },
        dotOrDash: 'dash',
        directionText: 'Heavy dash underneath at center'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE F WORDS ====================
  {
    id: 'wp-fee',
    strokeId: 'stroke-f',
    word: 'Fee',
    phonetic: '/fiː/',
    position: '3rd (through line)',
    shorthandSvgPath: 'M 45 35 C 40 45, 45 65, 55 75',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke F',
        label: 'Consonant /f/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light shallow curve downward cutting through the baseline',
        sign: 'F'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Long /iː/ (Long E)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '3rd place heavy dot placed inside the curve near the bottom',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke F (light curved downstroke)',
      joining: 'Single stroke cutting through line',
      vowelIndication: '3rd place heavy dot placed on the concave right side at the bottom',
      positionAndWeight: '3rd position through line for Long E'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Curved F Through Baseline',
        formula: 'Light curved F through line',
        explanation: 'Draw a gentle shallow curve downward from top to bottom, passing through the line.',
        svgPartialPath: 'M 45 35 C 40 45, 45 65, 55 75'
      },
      {
        step: 2,
        title: 'Add 3rd Place Dot',
        formula: 'F + Heavy Dot [ee]',
        explanation: 'Place a heavy dot inside the curve near the lower end.',
        svgPartialPath: 'M 45 35 C 40 45, 45 65, 55 75'
      },
      {
        step: 3,
        title: 'Complete Outline FEE',
        formula: 'F + /iː/ = FEE',
        explanation: 'Curved F cutting through line with 3rd-place dot spells FEE.'
      }
    ],
    explanation: 'FEE is a curved consonant with a 3rd place vowel. The stroke cuts through the baseline, and the vowel is placed in the concave side near the bottom.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke F',
        type: 'stroke',
        pathD: 'M 45 35 C 40 45, 45 65, 55 75',
        weight: 'light',
        startPoint: { x: 45, y: 35 },
        endPoint: { x: 55, y: 75 },
        directionText: 'Gentle downward curve through line'
      },
      {
        order: 2,
        label: '3rd Place Dot',
        type: 'vowel',
        pathD: 'M 58 70 A 2 2 0 1 1 58 69.9',
        weight: 'heavy',
        startPoint: { x: 58, y: 70 },
        endPoint: { x: 58, y: 70 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot at bottom right'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE V WORDS ====================
  {
    id: 'wp-vote',
    strokeId: 'stroke-v',
    word: 'Vote',
    phonetic: '/voʊt/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 40 25 C 36 35, 40 50, 48 65 L 48 95',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke V',
        label: 'Consonant /v/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy curved downstroke to the baseline',
        sign: 'V'
      },
      {
        part: 'Stroke T',
        label: 'Consonant /t/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light vertical downstroke',
        sign: 'T'
      },
      {
        part: 'Heavy Dash Vowel',
        label: 'Long /oʊ/ (Long O)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dash placed inside curve V',
        sign: '—'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Heavy curved V joined to light straight T',
      joining: 'Curved V touches the baseline, then straight T continues straight down without pen lifting',
      vowelIndication: '2nd place heavy dash placed after V',
      positionAndWeight: '2nd position on line for Long O sound'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke V to Line',
        formula: 'Heavy curved V downward',
        explanation: 'Draw a heavy curved stroke downward to rest on the baseline.',
        svgPartialPath: 'M 40 25 C 36 35, 40 50, 48 65'
      },
      {
        step: 2,
        title: 'Join Straight Stroke T',
        formula: 'V + T (vertical)',
        explanation: 'Without lifting the pen, draw light stroke T straight down.',
        svgPartialPath: 'M 40 25 C 36 35, 40 50, 48 65 L 48 95'
      },
      {
        step: 3,
        title: 'Add 2nd Place Dash',
        formula: 'V + /oʊ/ + T = VOTE',
        explanation: 'Place the heavy dash inside the curve in the 2nd position.'
      }
    ],
    explanation: 'VOTE illustrates a heavy curved stroke joining a light straight stroke. The change of curvature and pen pressure must be smooth.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy V',
        type: 'stroke',
        pathD: 'M 40 25 C 36 35, 40 50, 48 65',
        weight: 'heavy',
        startPoint: { x: 40, y: 25 },
        endPoint: { x: 48, y: 65 },
        directionText: 'Heavy downward curve to line'
      },
      {
        order: 2,
        label: 'Stroke T Join',
        type: 'join',
        pathD: 'M 48 65 L 48 95',
        weight: 'light',
        startPoint: { x: 48, y: 65 },
        endPoint: { x: 48, y: 95 },
        directionText: 'Light vertical downstroke'
      },
      {
        order: 3,
        label: 'Heavy Dash',
        type: 'vowel',
        pathD: 'M 54 45 L 62 45',
        weight: 'heavy',
        startPoint: { x: 54, y: 45 },
        endPoint: { x: 62, y: 45 },
        dotOrDash: 'dash',
        directionText: 'Heavy dash inside curve'
      }
    ],
    difficulty: 'intermediate'
  },

  // ==================== STROKE TH WORDS ====================
  {
    id: 'wp-they',
    strokeId: 'stroke-th',
    word: 'They',
    phonetic: '/ðeɪ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 45 25 C 50 35, 50 50, 45 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke Dhee (Heavy TH)',
        label: 'Consonant /ð/',
        strokeType: 'stroke',
        weight: 'heavy',
        description: 'Heavy shallow curve slanting downward to the line',
        sign: 'DH'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot on the right side',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke Dhee (voiced TH, heavy curve)',
      joining: 'Single stroke on baseline',
      vowelIndication: '2nd place heavy dot after the stroke',
      positionAndWeight: '2nd position on line for /eɪ/'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Heavy Curve Dhee',
        formula: 'Heavy Dhee downward',
        explanation: 'Draw a heavy curved stroke downward from top to baseline.',
        svgPartialPath: 'M 45 25 C 50 35, 50 50, 45 65'
      },
      {
        step: 2,
        title: 'Add 2nd Place Heavy Dot',
        formula: 'DH + Heavy Dot [ay]',
        explanation: 'Place the heavy dot at the middle on the right side.',
        svgPartialPath: 'M 45 25 C 50 35, 50 50, 45 65'
      },
      {
        step: 3,
        title: 'Complete Outline THEY',
        formula: 'DH + /eɪ/ = THEY',
        explanation: 'Heavy Dhee on line + 2nd place dot spells THEY.'
      }
    ],
    explanation: 'THEY uses the voiced TH stroke (Dhee), which is written heavy and sits on the line with the 2nd place dot.',
    animationSteps: [
      {
        order: 1,
        label: 'Heavy Dhee',
        type: 'stroke',
        pathD: 'M 45 25 C 50 35, 50 50, 45 65',
        weight: 'heavy',
        startPoint: { x: 45, y: 25 },
        endPoint: { x: 45, y: 65 },
        directionText: 'Heavy downward curve to baseline'
      },
      {
        order: 2,
        label: 'Heavy Dot',
        type: 'vowel',
        pathD: 'M 54 45 A 2 2 0 1 1 54 44.9',
        weight: 'heavy',
        startPoint: { x: 54, y: 45 },
        endPoint: { x: 54, y: 45 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot at middle right'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE M WORDS ====================
  {
    id: 'wp-may',
    strokeId: 'stroke-m',
    word: 'May',
    phonetic: '/meɪ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 25 65 Q 50 52 75 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke M',
        label: 'Consonant /m/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal curve arching upward along the line',
        sign: 'M'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot underneath stroke M',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke M (light upward shallow curve)',
      joining: 'Single horizontal curve resting on baseline',
      vowelIndication: '2nd place heavy dot placed underneath (following side)',
      positionAndWeight: '2nd position: stroke M rests upon the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Curved Stroke M',
        formula: 'Light M arching upward',
        explanation: 'Draw a shallow horizontal curve arching upward from left to right along the baseline.',
        svgPartialPath: 'M 25 65 Q 50 52 75 65'
      },
      {
        step: 2,
        title: 'Add 2nd Place Dot Underneath',
        formula: 'M + Heavy Dot [ay] below',
        explanation: 'Place the heavy dot underneath in the middle.',
        svgPartialPath: 'M 25 65 Q 50 52 75 65'
      },
      {
        step: 3,
        title: 'Complete Outline MAY',
        formula: 'M + /eɪ/ = MAY',
        explanation: 'Curved M on line + underneath middle dot spells MAY.'
      }
    ],
    explanation: 'MAY is a horizontal stroke word. Vowels that follow a horizontal stroke are always placed underneath it.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke M',
        type: 'stroke',
        pathD: 'M 25 65 Q 50 52 75 65',
        weight: 'light',
        startPoint: { x: 25, y: 65 },
        endPoint: { x: 75, y: 65 },
        directionText: 'Upward arching curve left-to-right'
      },
      {
        order: 2,
        label: 'Heavy Dot Underneath',
        type: 'vowel',
        pathD: 'M 50 74 A 2 2 0 1 1 50 73.9',
        weight: 'heavy',
        startPoint: { x: 50, y: 74 },
        endPoint: { x: 50, y: 74 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot underneath at center'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wp-make',
    strokeId: 'stroke-m',
    word: 'Make',
    phonetic: '/meɪk/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 20 65 Q 40 52 55 65 L 85 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke M',
        label: 'Consonant /m/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light upward shallow curve',
        sign: 'M'
      },
      {
        part: 'Stroke K',
        label: 'Consonant /k/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal straight stroke',
        sign: 'K'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot underneath M',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke M joined directly to Stroke K',
      joining: 'Smooth horizontal transition without lifting pen',
      vowelIndication: '2nd place heavy dot underneath M',
      positionAndWeight: '2nd position along the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Stroke M (Curve)',
        formula: 'M curve along line',
        explanation: 'Draw shallow curve M along the baseline.',
        svgPartialPath: 'M 20 65 Q 40 52 55 65'
      },
      {
        step: 2,
        title: 'Continuous Join to Stroke K',
        formula: 'M + K (horizontal)',
        explanation: 'Without lifting the pen, continue straight rightward into stroke K.',
        svgPartialPath: 'M 20 65 Q 40 52 55 65 L 85 65'
      },
      {
        step: 3,
        title: 'Add 2nd Place Dot',
        formula: 'M + /eɪ/ + K = MAKE',
        explanation: 'Place the heavy dot underneath M. The word reads: M -> AY -> K = MAKE.'
      }
    ],
    explanation: 'MAKE shows how two horizontal strokes (one curved, one straight) join together along the steno baseline.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke M',
        type: 'stroke',
        pathD: 'M 20 65 Q 40 52 55 65',
        weight: 'light',
        startPoint: { x: 20, y: 65 },
        endPoint: { x: 55, y: 65 },
        directionText: 'Upward arching curve'
      },
      {
        order: 2,
        label: 'Stroke K Join',
        type: 'join',
        pathD: 'M 55 65 L 85 65',
        weight: 'light',
        startPoint: { x: 55, y: 65 },
        endPoint: { x: 85, y: 65 },
        directionText: 'Straight horizontal line right'
      },
      {
        order: 3,
        label: 'Heavy Dot',
        type: 'vowel',
        pathD: 'M 38 74 A 2 2 0 1 1 38 73.9',
        weight: 'heavy',
        startPoint: { x: 38, y: 74 },
        endPoint: { x: 38, y: 74 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot underneath M'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE N WORDS ====================
  {
    id: 'wp-no',
    strokeId: 'stroke-n',
    word: 'No',
    phonetic: '/noʊ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 25 65 Q 50 78 75 65',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke N',
        label: 'Consonant /n/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light horizontal curve arching downward along the baseline',
        sign: 'N'
      },
      {
        part: 'Heavy Dash Vowel',
        label: 'Long /oʊ/ (Long O)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dash placed underneath N',
        sign: '—'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke N (horizontal curve arching downwards, opposite of M)',
      joining: 'Single horizontal curve resting on baseline',
      vowelIndication: '2nd place heavy dash underneath N',
      positionAndWeight: '2nd position: stroke N rests upon the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Curved Stroke N',
        formula: 'Light N arching downward',
        explanation: 'Draw a shallow horizontal curve arching downward from left to right along the baseline.',
        svgPartialPath: 'M 25 65 Q 50 78 75 65'
      },
      {
        step: 2,
        title: 'Add 2nd Place Heavy Dash',
        formula: 'N + Heavy Dash [oh]',
        explanation: 'Place the heavy dash underneath at the center.',
        svgPartialPath: 'M 25 65 Q 50 78 75 65'
      },
      {
        step: 3,
        title: 'Complete Outline NO',
        formula: 'N + /oʊ/ = NO',
        explanation: 'Down-curving N on line + underneath middle dash spells NO.'
      }
    ],
    explanation: 'NO uses stroke N, which curves downward like a shallow saucer, sitting on the baseline with the 2nd place dash vowel underneath.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke N',
        type: 'stroke',
        pathD: 'M 25 65 Q 50 78 75 65',
        weight: 'light',
        startPoint: { x: 25, y: 65 },
        endPoint: { x: 75, y: 65 },
        directionText: 'Downward arching curve left-to-right'
      },
      {
        order: 2,
        label: 'Heavy Dash',
        type: 'vowel',
        pathD: 'M 46 84 L 54 84',
        weight: 'heavy',
        startPoint: { x: 46, y: 84 },
        endPoint: { x: 54, y: 84 },
        dotOrDash: 'dash',
        directionText: 'Heavy dash underneath at center'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE L WORDS ====================
  {
    id: 'wp-lay',
    strokeId: 'stroke-l',
    word: 'Lay',
    phonetic: '/leɪ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 35 65 C 45 60, 55 45, 60 25',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke L',
        label: 'Consonant /l/',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light curved stroke drawn upward from the baseline',
        sign: 'L'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot on the right side',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke L (light upward curve)',
      joining: 'Single upward stroke starting from baseline',
      vowelIndication: '2nd place heavy dot placed at middle on the right side',
      positionAndWeight: '2nd position: stroke L begins on the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Upward Curve L',
        formula: 'Light L upward from line',
        explanation: 'Start on the baseline and sweep gently upward and rightward.',
        svgPartialPath: 'M 35 65 C 45 60, 55 45, 60 25'
      },
      {
        step: 2,
        title: 'Add 2nd Place Heavy Dot',
        formula: 'L + Heavy Dot [ay]',
        explanation: 'Place the heavy dot at the middle on the right (following) side.',
        svgPartialPath: 'M 35 65 C 45 60, 55 45, 60 25'
      },
      {
        step: 3,
        title: 'Complete Outline LAY',
        formula: 'L + /eɪ/ = LAY',
        explanation: 'Upward L from line + 2nd place dot spells LAY.'
      }
    ],
    explanation: 'LAY uses the upward curve L. Upward strokes start at the baseline and travel upwards. Vowels read after the stroke are placed on the right side.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke L',
        type: 'stroke',
        pathD: 'M 35 65 C 45 60, 55 45, 60 25',
        weight: 'light',
        startPoint: { x: 35, y: 65 },
        endPoint: { x: 60, y: 25 },
        directionText: 'Upward curve starting from baseline'
      },
      {
        order: 2,
        label: 'Heavy Dot',
        type: 'vowel',
        pathD: 'M 65 45 A 2 2 0 1 1 65 44.9',
        weight: 'heavy',
        startPoint: { x: 65, y: 45 },
        endPoint: { x: 65, y: 45 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot at middle right'
      }
    ],
    difficulty: 'beginner'
  },

  // ==================== STROKE RAY WORDS ====================
  {
    id: 'wp-ray',
    strokeId: 'stroke-ray',
    word: 'Ray',
    phonetic: '/reɪ/',
    position: '2nd (on line)',
    shorthandSvgPath: 'M 35 65 L 65 35',
    svgViewBox: '0 0 100 100',
    components: [
      {
        part: 'Stroke Ray',
        label: 'Consonant /r/ (Upward)',
        strokeType: 'stroke',
        weight: 'light',
        description: 'Light straight stroke drawn upward at 30° from baseline',
        sign: 'Ray'
      },
      {
        part: 'Heavy Dot Vowel',
        label: 'Vowel /eɪ/ (Long A)',
        strokeType: 'vowel',
        weight: 'heavy',
        description: '2nd place heavy dot on the right side',
        sign: '·'
      }
    ],
    rulesToNotice: {
      strokeUsed: 'Stroke Ray (light straight upward at 30° from baseline)',
      joining: 'Single upward stroke',
      vowelIndication: '2nd place heavy dot placed at middle on the right side',
      positionAndWeight: '2nd position: begins on the baseline'
    },
    progressiveSteps: [
      {
        step: 1,
        title: 'Draw Upward Straight Ray',
        formula: 'Light Ray upward at 30°',
        explanation: 'Start on the baseline and draw straight upward at a shallow 30° angle.',
        svgPartialPath: 'M 35 65 L 65 35'
      },
      {
        step: 2,
        title: 'Add 2nd Place Heavy Dot',
        formula: 'Ray + Heavy Dot [ay]',
        explanation: 'Place the heavy dot at the middle on the right side.',
        svgPartialPath: 'M 35 65 L 65 35'
      },
      {
        step: 3,
        title: 'Complete Outline RAY',
        formula: 'Ray + /eɪ/ = RAY',
        explanation: 'Upward straight Ray + 2nd place dot spells RAY.'
      }
    ],
    explanation: 'Ray is drawn upward from the baseline at an angle of 30°. It is distinguished from downward Ch (60° down) by both angle and upward direction.',
    animationSteps: [
      {
        order: 1,
        label: 'Stroke Ray',
        type: 'stroke',
        pathD: 'M 35 65 L 65 35',
        weight: 'light',
        startPoint: { x: 35, y: 65 },
        endPoint: { x: 65, y: 35 },
        directionText: 'Upward straight stroke at 30°'
      },
      {
        order: 2,
        label: 'Heavy Dot',
        type: 'vowel',
        pathD: 'M 65 52 A 2 2 0 1 1 65 51.9',
        weight: 'heavy',
        startPoint: { x: 65, y: 52 },
        endPoint: { x: 65, y: 52 },
        dotOrDash: 'dot',
        directionText: 'Heavy dot at middle right'
      }
    ],
    difficulty: 'beginner'
  }
];

export function getWordPracticeForStroke(strokeId: string): WordPracticeItem[] {
  return wordPracticeData.filter((item) => item.strokeId === strokeId);
}
