"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { DictationPassage } from "../../data/shorthand/types";
import { dictationPassages } from "../../data/shorthand/dictations";
import Link from "next/link";

interface DictationPlayerProps {
  initialPassage?: DictationPassage;
  onFinished?: (stats: { wpm: number; totalWords: number; durationSeconds: number }) => void;
  showTranscribeLink?: boolean;
}

export function DictationPlayer({
  initialPassage,
  onFinished,
  showTranscribeLink = true,
}: DictationPlayerProps) {
  const [selectedPassage, setSelectedPassage] = useState<DictationPassage>(
    initialPassage || dictationPassages[0]
  );
  const [selectedWpm, setSelectedWpm] = useState<number>(selectedPassage.recommendedWpm || 80);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [showPassageText, setShowPassageText] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Speed options as requested: 40 to 120 WPM
  const speedOptions = [40, 50, 60, 70, 80, 90, 100, 110, 120];

  // Calculate estimated duration based on selected WPM and word count
  const totalSecondsEstimated = Math.ceil((selectedPassage.wordCount / selectedWpm) * 60);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      if (timerRef.current) clearInterval(timerRef.current);
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
    };
  }, []);

  // Update selected WPM when passage changes
  useEffect(() => {
    setSelectedWpm(selectedPassage.recommendedWpm);
    handleRestart();
  }, [selectedPassage]);

  const handleStartCountdown = () => {
    if (isPlaying) return;
    setCountdown(3);
    countdownTimerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
          startDictationAudio();
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startDictationAudio = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Web Speech Synthesis is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    // Map WPM to speech synthesis rate (standard baseline ~130 WPM at rate=1.0)
    // 60 WPM ~ 0.55 rate, 80 WPM ~ 0.72 rate, 100 WPM ~ 0.88 rate, 110 WPM ~ 0.95 rate, 120 WPM ~ 1.05 rate
    const calculatedRate = Math.max(0.4, Math.min(1.4, (selectedWpm / 120) * 0.95 + 0.15));

    const utterance = new SpeechSynthesisUtterance(selectedPassage.text);
    utterance.rate = calculatedRate;
    utterance.pitch = 1.0;
    utterance.lang = "en-US";

    utterance.onend = () => {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
      if (onFinished) {
        onFinished({
          wpm: selectedWpm,
          totalWords: selectedPassage.wordCount,
          durationSeconds: elapsedSeconds,
        });
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);

    // Elapsed timer
    timerRef.current = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
  }, [selectedPassage, selectedWpm, elapsedSeconds, onFinished]);

  const handlePause = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (isPlaying) {
        window.speechSynthesis.pause();
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        window.speechSynthesis.resume();
        setIsPlaying(true);
        timerRef.current = setInterval(() => {
          setElapsedSeconds((prev) => prev + 1);
        }, 1000);
      }
    }
  };

  const handleRestart = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (timerRef.current) clearInterval(timerRef.current);
    if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
    setIsPlaying(false);
    setCountdown(null);
    setElapsedSeconds(0);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? "0" : ""}${s}`;
  };

  const remainingSeconds = Math.max(0, totalSecondsEstimated - elapsedSeconds);

  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
      {/* Top Header */}
      <div className="p-5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">
            Audio Dictation System • {selectedPassage.category}
          </span>
          <h3 className="text-lg font-bold text-slate-100 mt-0.5">{selectedPassage.title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {selectedPassage.wordCount} words • Recommended: {selectedPassage.recommendedWpm} WPM
          </p>
        </div>

        {/* Passage Selector Dropdown */}
        <div className="flex items-center gap-2">
          <select
            value={selectedPassage.id}
            onChange={(e) => {
              const found = dictationPassages.find((p) => p.id === e.target.value);
              if (found) setSelectedPassage(found);
            }}
            disabled={isPlaying}
            className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
          >
            {dictationPassages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.wordCount}w)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Controls & Speed Settings */}
      <div className="p-6 space-y-6">
        {/* Speed Selector (40 to 120 WPM) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-slate-300">Dictation Speed (WPM):</label>
            <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
              {selectedWpm} WPM
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5">
            {speedOptions.map((speed) => (
              <button
                key={speed}
                type="button"
                disabled={isPlaying}
                onClick={() => setSelectedWpm(speed)}
                className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedWpm === speed
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                    : "bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/50"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {speed}
              </button>
            ))}
          </div>
        </div>

        {/* Timers & Countdown Display */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Total Words</span>
            <div className="text-lg font-bold text-slate-100 mt-0.5">{selectedPassage.wordCount}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Est. Duration</span>
            <div className="text-lg font-bold text-slate-100 mt-0.5">{formatTime(totalSecondsEstimated)}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Elapsed Time</span>
            <div className="text-lg font-bold text-purple-400 mt-0.5">{formatTime(elapsedSeconds)}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Time Remaining</span>
            <div className="text-lg font-bold text-sky-400 mt-0.5">{formatTime(remainingSeconds)}</div>
          </div>
        </div>

        {/* Big Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {countdown !== null ? (
            <div className="px-8 py-3.5 rounded-xl bg-purple-600 text-white font-extrabold text-lg animate-pulse flex items-center gap-2">
              <span>Ready in</span>
              <span className="text-2xl">{countdown}</span>
            </div>
          ) : !isPlaying ? (
            <button
              type="button"
              onClick={handleStartCountdown}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-purple-900/30 transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start Dictation ({selectedWpm} WPM)
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePause}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pause Dictation
            </button>
          )}

          <button
            type="button"
            onClick={handleRestart}
            className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
          >
            Restart
          </button>
        </div>

        {/* Hidden Passage Area / Reveal Toggle */}
        <div className="border border-slate-800 rounded-xl bg-slate-950/60 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
              </svg>
              <span>Keep passage hidden while writing shorthand notes in your notebook.</span>
            </div>

            <button
              type="button"
              onClick={() => setShowPassageText((prev) => !prev)}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300"
            >
              {showPassageText ? "Hide Passage ▲" : "Reveal Passage ▼"}
            </button>
          </div>

          {showPassageText && (
            <div className="pt-3 border-t border-slate-800 text-xs leading-relaxed text-slate-300 font-mono bg-slate-950 p-4 rounded-lg select-text">
              {selectedPassage.text}
            </div>
          )}
        </div>

        {/* Direct CTA to Transcription */}
        {showTranscribeLink && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
            <div>
              <h4 className="text-xs font-bold text-purple-200">Finished writing shorthand notes?</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Now open the transcription evaluator to type your notes on computer and get full word-accuracy scoring!
              </p>
            </div>
            <Link
              href={`/shorthand/tests?passage=${selectedPassage.id}&wpm=${selectedWpm}`}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shrink-0 transition-colors"
            >
              Transcribe on Computer →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
