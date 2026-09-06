import { UserShorthandProgress, ShorthandNote } from './types';

const PROGRESS_KEY = 'typehindi_shorthand_progress';
const NOTES_KEY = 'typehindi_shorthand_notes';

const defaultProgress: UserShorthandProgress = {
  completedLessons: [],
  bestDictationWpm: 0,
  bestTranscriptionWpm: 0,
  bestAccuracy: 0,
  totalWordsDictated: 0,
  totalWordsTranscribed: 0,
  totalPracticeMinutes: 0,
  currentStreak: 1,
  longestStreak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  testHistory: []
};

export function getShorthandProgress(): UserShorthandProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return defaultProgress;
  }
}

export function saveShorthandProgress(progress: Partial<UserShorthandProgress>): UserShorthandProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const current = getShorthandProgress();
    const today = new Date().toISOString().split('T')[0];

    // Calculate streak
    let currentStreak = current.currentStreak;
    let longestStreak = current.longestStreak;
    if (current.lastActiveDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (current.lastActiveDate === yesterday) {
        currentStreak += 1;
      } else if (current.lastActiveDate < yesterday) {
        currentStreak = 1;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }

    const updated: UserShorthandProgress = {
      ...current,
      ...progress,
      currentStreak,
      longestStreak,
      lastActiveDate: today
    };

    localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return defaultProgress;
  }
}

export function markLessonComplete(lessonSlug: string): UserShorthandProgress {
  const current = getShorthandProgress();
  if (current.completedLessons.includes(lessonSlug)) return current;
  const updatedLessons = [...current.completedLessons, lessonSlug];
  return saveShorthandProgress({ completedLessons: updatedLessons });
}

export function recordTestAttempt(attempt: {
  examId: string;
  examName: string;
  dictationWpm: number;
  transcriptionWpm: number;
  accuracyPercentage: number;
  errorsCount: number;
  wordsCount: number;
  passed: boolean;
}): UserShorthandProgress {
  const current = getShorthandProgress();
  const newHistory = [
    {
      id: 'test-' + Date.now(),
      date: new Date().toISOString(),
      ...attempt
    },
    ...current.testHistory
  ].slice(0, 30); // keep last 30 tests

  return saveShorthandProgress({
    testHistory: newHistory,
    bestDictationWpm: Math.max(current.bestDictationWpm, attempt.dictationWpm),
    bestTranscriptionWpm: Math.max(current.bestTranscriptionWpm, attempt.transcriptionWpm),
    bestAccuracy: Math.max(current.bestAccuracy, attempt.accuracyPercentage),
    totalWordsDictated: current.totalWordsDictated + attempt.wordsCount,
    totalWordsTranscribed: current.totalWordsTranscribed + attempt.wordsCount
  });
}

// Personal Shorthand Notebook Storage
export function getShorthandNotes(): ShorthandNote[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveShorthandNote(note: Omit<ShorthandNote, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }): ShorthandNote[] {
  if (typeof window === 'undefined') return [];
  try {
    const notes = getShorthandNotes();
    const now = new Date().toISOString();
    let updated: ShorthandNote[];
    if (note.id) {
      updated = notes.map(n => n.id === note.id ? { ...n, ...note, updatedAt: now } : n);
    } else {
      const newNote: ShorthandNote = {
        id: 'note-' + Date.now(),
        ...note,
        createdAt: now,
        updatedAt: now
      };
      updated = [newNote, ...notes];
    }
    localStorage.setItem(NOTES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function deleteShorthandNote(noteId: string): ShorthandNote[] {
  if (typeof window === 'undefined') return [];
  try {
    const notes = getShorthandNotes().filter(n => n.id !== noteId);
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    return notes;
  } catch {
    return [];
  }
}
