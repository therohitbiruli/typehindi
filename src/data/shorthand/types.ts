export type StrokeCategory = 
  | 'consonant-straight'
  | 'consonant-curved'
  | 'consonant-upward'
  | 'vowel-first'
  | 'vowel-second'
  | 'vowel-third'
  | 'diphthong'
  | 'grammalogue'
  | 'phrase';

export interface WordBuildingItem {
  word: string;
  formula: string;
  explanation: string;
  outlineSvg?: string;
}

export interface ShorthandStroke {
  id: string;
  name: string;
  sound: string;
  category: StrokeCategory;
  direction: 'downward' | 'upward' | 'horizontal';
  angleDescription: string;
  weight: 'light' | 'heavy';
  svgPath: string; // SVG path data (d attribute) inside 100x100 viewBox
  description: string;
  pitmanRule: string;
  examples: Array<{
    word: string;
    transcription: string;
    note?: string;
  }>;
  startPoint?: { x: number; y: number };
  endPoint?: { x: number; y: number };
  targetAngle?: number; // expected angle in degrees (e.g. 120 for P/B, 90 for T/D, 60 for CH/J, 0 for K/G, 30 for Ray)
  animationPoints?: Array<{ x: number; y: number }>;
  wordBuilding?: WordBuildingItem[];
}

export interface StrokeAnalysisResult {
  directionStatus: 'good' | 'reversed' | 'inconclusive';
  directionMessage: string;
  angleStatus: 'good' | 'too-shallow' | 'too-steep' | 'inconclusive';
  angleMessage: string;
  measuredAngle: number;
  expectedAngle: number;
  lengthStatus: 'good' | 'too-short' | 'too-long';
  lengthMessage: string;
  weightStatus: 'good' | 'too-light' | 'too-heavy';
  weightMessage: string;
  continuityStatus: 'good' | 'multiple-strokes';
  continuityMessage: string;
  overallScore: number; // 0 to 100
  feedbackSummary: string;
  ruleToRemember: string;
}

export interface StrokeMasteryRecord {
  strokeId: string;
  attemptsCount: number;
  bestScore: number;
  lastPracticed: string;
}

export interface ShorthandExercise {
  id: string;
  prompt: string;
  targetStrokeId?: string;
  hint: string;
  explanation: string;
}

export interface ShorthandQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  strokeSvg?: string;
  category: 'strokes' | 'vowels' | 'rules' | 'diphthongs' | 'grammalogues' | 'phrasing';
}

export interface ShorthandLesson {
  id: number;
  slug: string;
  level: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  learnContent: {
    overview: string;
    keyPoints: string[];
    rules: Array<{ title: string; detail: string; tip?: string }>;
  };
  demonstrationStrokes: ShorthandStroke[];
  exercises: ShorthandExercise[];
  miniQuiz: ShorthandQuizQuestion[];
  nextLessonSlug?: string;
  prevLessonSlug?: string;
}

export interface DictationPassage {
  id: string;
  title: string;
  category: 'Legal' | 'Editorial' | 'General' | 'Parliamentary' | 'Administrative';
  wordCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  recommendedWpm: number;
  text: string;
  sourceNote?: string;
}

export interface ExamConfig {
  id: string;
  name: string;
  organization: string;
  dictationSpeedWpm: number;
  dictationDurationMinutes: number;
  totalWords: number;
  transcriptionTimeMinutes: number;
  allowedErrorPercentage: number;
  description: string;
  eligibilityNotes: string;
  skillTestDetails: string;
  isOfficialPreset: boolean;
}

export interface UserShorthandProgress {
  completedLessons: string[];
  bestDictationWpm: number;
  bestTranscriptionWpm: number;
  bestAccuracy: number;
  totalWordsDictated: number;
  totalWordsTranscribed: number;
  totalPracticeMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
  testHistory: Array<{
    id: string;
    date: string;
    examId: string;
    examName: string;
    dictationWpm: number;
    transcriptionWpm: number;
    accuracyPercentage: number;
    errorsCount: number;
    passed: boolean;
  }>;
}

export interface ShorthandNote {
  id: string;
  title: string;
  category: 'Word' | 'Phrase' | 'Rule' | 'Difficult Form' | 'Mistake' | 'General';
  content: string;
  strokeId?: string;
  createdAt: string;
  updatedAt: string;
}
