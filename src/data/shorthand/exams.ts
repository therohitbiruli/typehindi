import { ExamConfig } from './types';

export const officialExamPresets: ExamConfig[] = [
  {
    id: 'dhc-spa-2026',
    name: 'Delhi High Court Senior Personal Assistant (SPA)',
    organization: 'High Court of Delhi, New Delhi',
    dictationSpeedWpm: 110,
    dictationDurationMinutes: 5,
    totalWords: 550,
    transcriptionTimeMinutes: 45,
    allowedErrorPercentage: 5, // max 5% allowable errors
    description: 'English Shorthand Test at 110 WPM (550 words dictated in 5 minutes) with 45 minutes transcription on computer. Maximum permitted mistakes is 5%.',
    eligibilityNotes: 'Bachelor degree from a recognized university with minimum 110 WPM in English Shorthand and 40 WPM in English Typing on computer.',
    skillTestDetails: 'Candidates who pass the English Typing Test (40 WPM) are called for the English Shorthand Test (110 WPM). 5 minutes dictation followed by 45 minutes transcription.',
    isOfficialPreset: true
  },
  {
    id: 'dhc-pa-2026',
    name: 'Delhi High Court Personal Assistant (PA)',
    organization: 'High Court of Delhi, New Delhi',
    dictationSpeedWpm: 100,
    dictationDurationMinutes: 5,
    totalWords: 500,
    transcriptionTimeMinutes: 45,
    allowedErrorPercentage: 5,
    description: 'English Shorthand Test at 100 WPM (500 words dictated in 5 minutes) with 45 minutes transcription on computer. Maximum permitted mistakes is 5%.',
    eligibilityNotes: 'Graduate degree with minimum 100 WPM in English Shorthand and 40 WPM in English Typing on computer.',
    skillTestDetails: 'Dictation passage of 500 words given at 100 WPM for 5 minutes. Transcription must be typed within 45 minutes on computer.',
    isOfficialPreset: true
  },
  {
    id: 'ssc-steno-c',
    name: 'SSC Stenographer Grade C',
    organization: 'Staff Selection Commission (SSC)',
    dictationSpeedWpm: 100,
    dictationDurationMinutes: 10,
    totalWords: 1000,
    transcriptionTimeMinutes: 40,
    allowedErrorPercentage: 5,
    description: 'Dictation for 10 minutes in English at 100 WPM (1000 words). Transcription time: 40 minutes on computer.',
    eligibilityNotes: 'Class 12 pass from a recognized board. Selected through Computer Based Examination followed by Skill Test.',
    skillTestDetails: '10 minutes dictation given at 100 WPM. Transcription evaluated on computer with strict deduction for spelling and punctuation errors.',
    isOfficialPreset: true
  },
  {
    id: 'ssc-steno-d',
    name: 'SSC Stenographer Grade D',
    organization: 'Staff Selection Commission (SSC)',
    dictationSpeedWpm: 80,
    dictationDurationMinutes: 10,
    totalWords: 800,
    transcriptionTimeMinutes: 50,
    allowedErrorPercentage: 7,
    description: 'Dictation for 10 minutes in English at 80 WPM (800 words). Transcription time: 50 minutes on computer.',
    eligibilityNotes: 'Class 12 pass. Ideal benchmark for intermediate stenography aspirants aiming for central ministries.',
    skillTestDetails: '800 words passage at 80 WPM. Strict adherence to grammar, spelling, and paragraph breaks required.',
    isOfficialPreset: true
  }
];
