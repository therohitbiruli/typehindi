export interface PYQQuestion {
  id: string;
  exam: string;       // e.g., "SSC CGL"
  year: string;       // e.g., "2024"
  tier: string;       // e.g., "Tier 1"
  date: string;       // e.g., "9 Sept 2024"
  shift: number;      // e.g., 1
  subject: string;    // e.g., "Reasoning", "Quantitative Aptitude", "English", "General Awareness"
  topic?: string;     // e.g., "Percentage"
  
  // Content
  questionEn: string;
  questionHi?: string;
  
  optionsEn: string[];
  optionsHi?: string[];
  
  correctOptionIndex: number; // 0, 1, 2, or 3
  
  explanationEn?: string;
  explanationHi?: string;
  
  difficulty?: "Easy" | "Medium" | "Hard";
  tags?: string[];
}

export interface PYQShift {
  date: string;
  shift: number;
  slug: string; // e.g., "9-september-shift-1"
  totalQuestions: number;
  durationMinutes: number;
  englishPdfUrl?: string;
  hindiPdfUrl?: string;
  subjectsCovered: string[];
}

export interface PYQExam {
  id: string; // e.g., "ssc-cgl"
  name: string; // e.g., "SSC CGL"
  shortDescription: string;
}

export interface PYQPaper {
  slug: string; // e.g., "ssc-cgl-previous-year-question-paper-2024"
  examId: string; // "ssc-cgl"
  year: string;
  tier: string;
  title: string;
  description: string;
  shifts: PYQShift[];
}
