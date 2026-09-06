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
    description: 'A light straight stroke drawn downward from left to right at an angle of 120° from the base line.',
    pitmanRule: 'Consonants are written in pairs of light (voiceless) and heavy (voiced). P is written with a light touch.',
    examples: [
      { word: 'Pay', transcription: 'P + 2nd place dot (a)' },
      { word: 'Pen', transcription: 'P + 2nd place light dot (e) + N' },
      { word: 'Hope', transcription: 'Hay + 2nd place heavy dash (o) + P' }
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
    description: 'A heavy straight stroke written downward in the exact same direction and angle as P.',
    pitmanRule: 'Voiced consonants require a firm, heavier stroke without distorting the straight angle.',
    examples: [
      { word: 'Bay', transcription: 'B + 2nd place dot (a)' },
      { word: 'Be', transcription: 'B + 3rd place dot (ee)' },
      { word: 'Boat', transcription: 'B + 2nd place dash (o) + T' }
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
    description: 'A light, perfectly perpendicular downward stroke.',
    pitmanRule: 'Always written strictly downwards from top to bottom at 90 degrees to the line.',
    examples: [
      { word: 'Tea', transcription: 'T + 3rd place heavy dot (ee)' },
      { word: 'Tie', transcription: 'T + 1st place diphthong (i)' },
      { word: 'Take', transcription: 'T + 2nd place heavy dot (a) + K' }
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
    description: 'A heavy perpendicular downward stroke, the voiced counterpart of T.',
    pitmanRule: 'D must be perpendicular to the line, identical to T in direction but drawn with deliberate thickness.',
    examples: [
      { word: 'Day', transcription: 'D + 2nd place heavy dot (a)' },
      { word: 'Do', transcription: 'D + 3rd place heavy dash (oo)' },
      { word: 'Date', transcription: 'D + 2nd place heavy dot (a) + T' }
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
    description: 'A light downward stroke inclined at 30° to the vertical (60° to horizontal).',
    pitmanRule: 'Chay is always written downward. Never confuse Chay with the upward Ray stroke.',
    examples: [
      { word: 'Chair', transcription: 'Chay + 2nd place dot + Ar' },
      { word: 'Check', transcription: 'Chay + 2nd place light dot (e) + K' }
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
    description: 'A heavy downward stroke matching the angle of Chay, representing voiced /dʒ/.',
    pitmanRule: 'Written downward with heavy pressure.',
    examples: [
      { word: 'Joy', transcription: 'Jay + 1st place diphthong (oi)' },
      { word: 'Age', transcription: '2nd place dot + Jay' }
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
    description: 'A light horizontal stroke written from left to right directly on the line of writing.',
    pitmanRule: 'Horizontal strokes are always written from left to right.',
    examples: [
      { word: 'Key', transcription: 'Kay + 3rd place dot (ee)' },
      { word: 'Cake', transcription: 'Kay + 2nd place dot (a) + Kay' }
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
    description: 'A heavy horizontal stroke written from left to right, voiced counterpart to Kay.',
    pitmanRule: 'Drawn heavy from left to right.',
    examples: [
      { word: 'Go', transcription: 'Gay + 2nd place dash (o)' },
      { word: 'Game', transcription: 'Gay + 2nd place dot (a) + M' }
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
    description: 'A light downward curve representing the left quarter segment of a circle.',
    pitmanRule: 'Curves are quarter segments of circles written downwards.',
    examples: [
      { word: 'Fee', transcription: 'Ef + 3rd place dot (ee)' },
      { word: 'For', transcription: 'Grammalogue: Ef on the line' }
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
    description: 'A heavy downward curve, the voiced counterpart of Ef.',
    pitmanRule: 'Drawn heavy downwards.',
    examples: [
      { word: 'Have', transcription: 'Grammalogue: Vee on the line' },
      { word: 'View', transcription: 'Vee + 3rd place diphthong (ew)' }
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
    description: 'A light downward curve forming a vertical shallow arc facing right.',
    pitmanRule: 'Written downward with light touch.',
    examples: [
      { word: 'Think', transcription: 'Grammalogue: Ith on line' },
      { word: 'Path', transcription: 'P + 1st place dot (a) + Ith' }
    ]
  },
  {
    id: 'stroke-dh',
    name: 'TH (Thee)',
    sound: '/ð/ as in This, That, Then',
    category: 'consonant-curved',
    direction: 'downward',
    angleDescription: 'Downward shallow curve facing right',
    weight: 'heavy',
    svgPath: 'M 60 25 C 40 40 40 70 60 85',
    description: 'A heavy downward curve, voiced counterpart to Ith.',
    pitmanRule: 'Drawn heavy downwards.',
    examples: [
      { word: 'Them', transcription: 'Grammalogue: Thee on line' },
      { word: 'They', transcription: 'Thee + 2nd place dot (a)' }
    ]
  },
  {
    id: 'stroke-s',
    name: 'S (Es)',
    sound: '/s/ as in See, Say, So',
    category: 'consonant-curved',
    direction: 'downward',
    angleDescription: 'Downward shallow curve facing left',
    weight: 'light',
    svgPath: 'M 40 25 C 60 40 60 70 40 85',
    description: 'A light downward curve representing /s/.',
    pitmanRule: 'Es is drawn downward. In words it can also be represented by a small circle.',
    examples: [
      { word: 'See', transcription: 'Es + 3rd place dot (ee)' },
      { word: 'So', transcription: 'Es + 2nd place dash (o)' }
    ]
  },
  {
    id: 'stroke-z',
    name: 'Z (Zee)',
    sound: '/z/ as in Zero, Zeal, Zone',
    category: 'consonant-curved',
    direction: 'downward',
    angleDescription: 'Downward shallow curve facing left',
    weight: 'heavy',
    svgPath: 'M 40 25 C 60 40 60 70 40 85',
    description: 'A heavy downward curve, voiced counterpart to Es.',
    pitmanRule: 'Zee is drawn heavy downwards.',
    examples: [
      { word: 'Zero', transcription: 'Zee + 2nd place dot + Ray + 2nd place dash' }
    ]
  },
  {
    id: 'stroke-sh',
    name: 'SH (Ish)',
    sound: '/ʃ/ as in She, Ship, Show',
    category: 'consonant-curved',
    direction: 'downward',
    angleDescription: 'Downward curve from top-right to bottom-left',
    weight: 'light',
    svgPath: 'M 70 25 C 45 40 35 65 30 80',
    description: 'A light downward curved stroke.',
    pitmanRule: 'Normally written downward, but written upward before or after certain strokes for joining convenience.',
    examples: [
      { word: 'She', transcription: 'Ish + 3rd place dot (ee)' },
      { word: 'Wish', transcription: 'Way + 3rd place dot + Ish' }
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
    description: 'A light horizontal curve convexed upwards, written left to right.',
    pitmanRule: 'Written from left to right along the line.',
    examples: [
      { word: 'May', transcription: 'Em + 2nd place heavy dot (a)' },
      { word: 'Me', transcription: 'Em + 3rd place heavy dot (ee)' }
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
    description: 'A light horizontal curve concaved upwards, written left to right.',
    pitmanRule: 'The opposite curve to Em. Written horizontally from left to right.',
    examples: [
      { word: 'No', transcription: 'En + 2nd place heavy dash (o)' },
      { word: 'Name', transcription: 'En + 2nd place dot (a) + Em' }
    ]
  },
  {
    id: 'stroke-ng',
    name: 'NG (Ing)',
    sound: '/ŋ/ as in Ring, Sing, Long',
    category: 'consonant-curved',
    direction: 'horizontal',
    angleDescription: 'Heavy horizontal shallow cup',
    weight: 'heavy',
    svgPath: 'M 20 40 C 35 65 65 65 80 40',
    description: 'A heavy horizontal curve, identical to En in form but thickened.',
    pitmanRule: 'Used for the nasal sound /ng/ as in king, song.',
    examples: [
      { word: 'Sing', transcription: 'Circle s + 3rd place dot + Ing' },
      { word: 'Long', transcription: 'El + 1st place dash (o) + Ing' }
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
    description: 'A light upward curve starting from the line and curving upwards.',
    pitmanRule: 'El is normally written upwards. When standing alone after a vowel it can be written downwards.',
    examples: [
      { word: 'Late', transcription: 'El + 2nd place dot (a) + T' },
      { word: 'Life', transcription: 'El + 1st place diphthong (i) + Ef' }
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
    description: 'A straight light stroke written upwards at 30°.',
    pitmanRule: 'Ray is written upwards. An initial R followed by a vowel is almost always written with upward Ray.',
    examples: [
      { word: 'Ray', transcription: 'Ray + 2nd place dot (a)' },
      { word: 'Right', transcription: 'Ray + 1st place diphthong (i) + T' }
    ]
  },
  {
    id: 'stroke-w',
    name: 'W (Way)',
    sound: '/w/ as in We, Way, Win',
    category: 'consonant-upward',
    direction: 'upward',
    angleDescription: 'Upward with initial right hook',
    weight: 'light',
    svgPath: 'M 35 80 C 30 75 35 68 45 72 L 75 30',
    description: 'A small right hook leading into an upward straight stroke at 30°.',
    pitmanRule: 'Hook must be small and round, moving smoothly into the upward stroke.',
    examples: [
      { word: 'Way', transcription: 'Way + 2nd place dot (a)' },
      { word: 'Wait', transcription: 'Way + 2nd place dot (a) + T' }
    ]
  },
  {
    id: 'stroke-y',
    name: 'Y (Yay)',
    sound: '/j/ as in You, Yes, Year',
    category: 'consonant-upward',
    direction: 'upward',
    angleDescription: 'Upward with initial left hook',
    weight: 'light',
    svgPath: 'M 45 80 C 50 75 45 68 35 72 L 65 30',
    description: 'A small left hook leading into an upward straight stroke at 30°.',
    pitmanRule: 'Inverse hook to Way, written smoothly upwards.',
    examples: [
      { word: 'Youth', transcription: 'Yay + 3rd place diphthong (u) + Ith' }
    ]
  },
  {
    id: 'stroke-h-up',
    name: 'H (Hay - Upward)',
    sound: '/h/ as in He, Hope, Hat',
    category: 'consonant-upward',
    direction: 'upward',
    angleDescription: 'Upward with initial closed circle',
    weight: 'light',
    svgPath: 'M 36 76 A 6 6 0 1 1 42 70 L 75 25',
    description: 'A small circle followed by an upward straight stroke at 30°.',
    pitmanRule: 'Upward Hay is the most common form of H in Pitman Shorthand.',
    examples: [
      { word: 'Hope', transcription: 'Hay + 2nd place dash (o) + P' },
      { word: 'Head', transcription: 'Hay + 2nd place light dot (e) + D' }
    ]
  },

  // Pitman Vowels - The Standard 12 Scheme
  {
    id: 'vowel-ah',
    name: 'Long AH (1st Place Heavy Dot)',
    sound: '/ɑː/ as in Pa, Palm, Calm',
    category: 'vowel-first',
    direction: 'downward',
    angleDescription: 'Point mark at stroke beginning (1st place)',
    weight: 'heavy',
    svgPath: 'M 50 25 A 4 4 0 1 1 50 24.9',
    description: 'A heavy dot placed at the beginning of a stroke (1st position).',
    pitmanRule: 'Mnemonic: "Pa". Written in 1st position; the outline is written ABOVE the line.',
    examples: [
      { word: 'Pa', transcription: 'P above line + 1st place heavy dot after' },
      { word: 'Palm', transcription: 'P + heavy dot + Em' }
    ]
  },
  {
    id: 'vowel-ay',
    name: 'Long AY (2nd Place Heavy Dot)',
    sound: '/eɪ/ as in May, Day, Say',
    category: 'vowel-second',
    direction: 'downward',
    angleDescription: 'Point mark at stroke middle (2nd place)',
    weight: 'heavy',
    svgPath: 'M 50 50 A 4 4 0 1 1 50 49.9',
    description: 'A heavy dot placed at the middle of a stroke (2nd position).',
    pitmanRule: 'Mnemonic: "May". Written in 2nd position; the outline rests ON the line.',
    examples: [
      { word: 'May', transcription: 'Em on line + 2nd place heavy dot after' },
      { word: 'Day', transcription: 'D on line + 2nd place heavy dot after' }
    ]
  },
  {
    id: 'vowel-ee',
    name: 'Long EE (3rd Place Heavy Dot)',
    sound: '/iː/ as in We, See, Tea',
    category: 'vowel-third',
    direction: 'downward',
    angleDescription: 'Point mark at stroke end (3rd place)',
    weight: 'heavy',
    svgPath: 'M 50 75 A 4 4 0 1 1 50 74.9',
    description: 'A heavy dot placed at the end of a stroke (3rd position).',
    pitmanRule: 'Mnemonic: "We". Written in 3rd position; the outline cuts THROUGH the line.',
    examples: [
      { word: 'Tea', transcription: 'T through line + 3rd place heavy dot after' },
      { word: 'See', transcription: 'Es through line + 3rd place heavy dot after' }
    ]
  },
  {
    id: 'vowel-aw',
    name: 'Long AW (1st Place Heavy Dash)',
    sound: '/ɔː/ as in All, Saw, Law',
    category: 'vowel-first',
    direction: 'downward',
    angleDescription: 'Short heavy tick perpendicular to stroke at 1st place',
    weight: 'heavy',
    svgPath: 'M 40 25 L 60 25',
    description: 'A short heavy dash written perpendicular to the stroke in the 1st position.',
    pitmanRule: 'Mnemonic: "All". First position vowel, outline written ABOVE the line.',
    examples: [
      { word: 'Saw', transcription: 'Es above line + 1st place heavy dash after' },
      { word: 'Law', transcription: 'El above line + 1st place heavy dash after' }
    ]
  },
  {
    id: 'vowel-oh',
    name: 'Long OH (2nd Place Heavy Dash)',
    sound: '/oʊ/ as in Go, Boat, Show',
    category: 'vowel-second',
    direction: 'downward',
    angleDescription: 'Short heavy tick perpendicular to stroke at 2nd place',
    weight: 'heavy',
    svgPath: 'M 40 50 L 60 50',
    description: 'A short heavy dash placed at the middle of the stroke (2nd position).',
    pitmanRule: 'Mnemonic: "Go". Second position vowel, outline rests ON the line.',
    examples: [
      { word: 'Go', transcription: 'Gay on line + 2nd place heavy dash after' },
      { word: 'Show', transcription: 'Ish on line + 2nd place heavy dash after' }
    ]
  },
  {
    id: 'vowel-oo-long',
    name: 'Long OO (3rd Place Heavy Dash)',
    sound: '/uː/ as in Too, Food, Shoe',
    category: 'vowel-third',
    direction: 'downward',
    angleDescription: 'Short heavy tick perpendicular to stroke at 3rd place',
    weight: 'heavy',
    svgPath: 'M 40 75 L 60 75',
    description: 'A short heavy dash placed at the end of the stroke (3rd position).',
    pitmanRule: 'Mnemonic: "Too". Third position vowel, outline cuts THROUGH the line.',
    examples: [
      { word: 'Shoe', transcription: 'Ish through line + 3rd place heavy dash after' }
    ]
  },

  // Short Vowels (Light)
  {
    id: 'vowel-short-a',
    name: 'Short A (1st Place Light Dot)',
    sound: '/æ/ as in That, At, Pack',
    category: 'vowel-first',
    direction: 'downward',
    angleDescription: 'Light dot at stroke beginning (1st place)',
    weight: 'light',
    svgPath: 'M 50 25 A 2.5 2.5 0 1 1 50 24.9',
    description: 'A light dot placed in the 1st position.',
    pitmanRule: 'Mnemonic: "That". Outline written ABOVE the line.',
    examples: [
      { word: 'At', transcription: 'Light dot before T above line' },
      { word: 'Pack', transcription: 'P above line + light dot + Kay' }
    ]
  },
  {
    id: 'vowel-short-e',
    name: 'Short E (2nd Place Light Dot)',
    sound: '/ɛ/ as in Pen, Red, Get',
    category: 'vowel-second',
    direction: 'downward',
    angleDescription: 'Light dot at stroke middle (2nd place)',
    weight: 'light',
    svgPath: 'M 50 50 A 2.5 2.5 0 1 1 50 49.9',
    description: 'A light dot placed in the 2nd position.',
    pitmanRule: 'Mnemonic: "Pen". Outline written ON the line.',
    examples: [
      { word: 'Pen', transcription: 'P on line + 2nd place light dot + En' },
      { word: 'Red', transcription: 'Ray on line + 2nd place light dot + D' }
    ]
  },
  {
    id: 'vowel-short-i',
    name: 'Short I (3rd Place Light Dot)',
    sound: '/ɪ/ as in Is, Sit, Win',
    category: 'vowel-third',
    direction: 'downward',
    angleDescription: 'Light dot at stroke end (3rd place)',
    weight: 'light',
    svgPath: 'M 50 75 A 2.5 2.5 0 1 1 50 74.9',
    description: 'A light dot placed in the 3rd position.',
    pitmanRule: 'Mnemonic: "Is". Outline written THROUGH the line.',
    examples: [
      { word: 'Sit', transcription: 'Es through line + 3rd place light dot + T' },
      { word: 'Big', transcription: 'B through line + 3rd place light dot + Gay' }
    ]
  },

  // Diphthongs
  {
    id: 'diphthong-i',
    name: 'Diphthong I',
    sound: '/aɪ/ as in Tie, Time, Buy',
    category: 'diphthong',
    direction: 'downward',
    angleDescription: 'Small upward-pointing angular sign (^) at 1st place',
    weight: 'light',
    svgPath: 'M 40 30 L 50 20 L 60 30',
    description: 'A small acute angle pointing upwards, written in 1st position.',
    pitmanRule: 'Represents the combined sound of AH and EE. Always 1st place.',
    examples: [
      { word: 'Tie', transcription: 'T above line + 1st place acute angle after' },
      { word: 'Time', transcription: 'T + I + Em' }
    ]
  },
  {
    id: 'diphthong-ow',
    name: 'Diphthong OW',
    sound: '/aʊ/ as in Cow, Now, Out',
    category: 'diphthong',
    direction: 'downward',
    angleDescription: 'Small downward-pointing angular sign (v) at 3rd place',
    weight: 'light',
    svgPath: 'M 40 70 L 50 80 L 60 70',
    description: 'A small acute angle pointing downwards, written in 3rd position.',
    pitmanRule: 'Represents the sound of AH and OO. Always 3rd place.',
    examples: [
      { word: 'Cow', transcription: 'Kay through line + 3rd place angle after' },
      { word: 'Out', transcription: '3rd place angle before T through line' }
    ]
  },
  {
    id: 'diphthong-oi',
    name: 'Diphthong OI',
    sound: '/ɔɪ/ as in Boy, Toy, Oil',
    category: 'diphthong',
    direction: 'downward',
    angleDescription: 'Small angle pointing left (<) at 1st place',
    weight: 'light',
    svgPath: 'M 58 20 L 46 28 L 58 36',
    description: 'A small angle pointing left, placed at 1st position.',
    pitmanRule: 'Represents AW and EE sounds combined. Always 1st place.',
    examples: [
      { word: 'Boy', transcription: 'B above line + 1st place angle after' },
      { word: 'Oil', transcription: '1st place angle before El above line' }
    ]
  },
  {
    id: 'diphthong-u',
    name: 'Diphthong U (Ew)',
    sound: '/juː/ as in Duty, Few, New',
    category: 'diphthong',
    direction: 'downward',
    angleDescription: 'Small semicircular curve opening downwards at 3rd place',
    weight: 'light',
    svgPath: 'M 42 75 C 42 67 58 67 58 75',
    description: 'A small semicircle curve opening downward, written in 3rd position.',
    pitmanRule: 'Represents the sound of I and OO. Written in 3rd position.',
    examples: [
      { word: 'Few', transcription: 'Ef through line + 3rd place curve' },
      { word: 'Duty', transcription: 'D through line + U + T' }
    ]
  },

  // Grammalogues (Word-Signs)
  {
    id: 'gram-the',
    name: 'the',
    sound: 'Word-sign: the',
    category: 'grammalogue',
    direction: 'horizontal',
    angleDescription: 'Light dot directly ON the line',
    weight: 'light',
    svgPath: 'M 50 65 A 3 3 0 1 1 50 64.9',
    description: 'A light dot on the baseline.',
    pitmanRule: 'Written on the line. Can also be written as a small tick joined to previous words.',
    examples: [
      { word: 'the book', transcription: 'dot + B + Kay' },
      { word: 'of the', transcription: 'Of tick joined with The tick' }
    ]
  },
  {
    id: 'gram-of',
    name: 'of',
    sound: 'Word-sign: of',
    category: 'grammalogue',
    direction: 'downward',
    angleDescription: 'Light short slant ABOVE the line at 60°',
    weight: 'light',
    svgPath: 'M 45 35 L 55 50',
    description: 'A short light stroke written downwards above the line in the direction of P.',
    pitmanRule: 'Written in the 1st position above the line.',
    examples: [
      { word: 'of the', transcription: 'of + the tick' }
    ]
  },
  {
    id: 'gram-to',
    name: 'to',
    sound: 'Word-sign: to',
    category: 'grammalogue',
    direction: 'downward',
    angleDescription: 'Light short slant ON the line at 60°',
    weight: 'light',
    svgPath: 'M 45 50 L 55 65',
    description: 'A short light stroke resting on the line in the direction of P.',
    pitmanRule: 'Written in the 2nd position resting on the baseline.',
    examples: [
      { word: 'to do', transcription: 'to + D' }
    ]
  },
  {
    id: 'gram-all',
    name: 'all',
    sound: 'Word-sign: all',
    category: 'grammalogue',
    direction: 'downward',
    angleDescription: 'Heavy short slant ABOVE the line at 60°',
    weight: 'heavy',
    svgPath: 'M 45 35 L 55 50',
    description: 'A short heavy stroke above the line in the direction of B.',
    pitmanRule: 'Voiced counterpart of "of", written in 1st position.',
    examples: [
      { word: 'all the', transcription: 'all + tick' }
    ]
  },
  {
    id: 'gram-and',
    name: 'and',
    sound: 'Word-sign: and',
    category: 'grammalogue',
    direction: 'upward',
    angleDescription: 'Light upward tick at 60°',
    weight: 'light',
    svgPath: 'M 45 55 L 55 40',
    description: 'A light upward tick written at an angle of 60°.',
    pitmanRule: 'Written upwards in the direction of Ray.',
    examples: [
      { word: 'and the', transcription: 'and + the tick' }
    ]
  }
];
