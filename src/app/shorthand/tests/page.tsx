"use client";

import { Suspense, useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { DictationPlayer } from "../../../components/shorthand/DictationPlayer";
import { TranscriptionEvaluator } from "../../../components/shorthand/TranscriptionEvaluator";
import { officialExamPresets } from "../../../data/shorthand/exams";
import { dictationPassages } from "../../../data/shorthand/dictations";
import { ExamConfig, DictationPassage } from "../../../data/shorthand/types";

function UrlParamReader({
  onParams,
}: {
  onParams: (examId: string | null, passageId: string | null) => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    onParams(searchParams.get("exam"), searchParams.get("passage"));
  }, [searchParams, onParams]);
  return null;
}

export default function ShorthandTestsPage() {
  const [selectedExam, setSelectedExam] = useState<ExamConfig>(officialExamPresets[0]);
  const [activeStep, setActiveStep] = useState<"dictation" | "transcription">("dictation");
  const [selectedPassage, setSelectedPassage] = useState<DictationPassage>(dictationPassages[3]);

  const handleParams = useCallback((examParam: string | null, passageParam: string | null) => {
    if (examParam) {
      const match = officialExamPresets.find((e) => e.id === examParam);
      if (match) setSelectedExam(match);
    }
    if (passageParam) {
      const pMatch = dictationPassages.find((p) => p.id === passageParam);
      if (pMatch) {
        setSelectedPassage(pMatch);
        setActiveStep("transcription");
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#070B14] text-gray-900 dark:text-slate-100">
      <Suspense fallback={null}>
        <UrlParamReader onParams={handleParams} />
      </Suspense>

      <ShorthandNav />

      <main className="container-main py-10 space-y-8">
        {/* Header Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-white to-sky-50 dark:from-purple-950/40 dark:via-slate-900 dark:to-sky-950/30 border border-purple-200 dark:border-purple-500/30 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Stenographer Skill Test Simulator
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-slate-100">
            {selectedExam.name}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {selectedExam.description}
          </p>

          {/* Exam Select Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 no-scrollbar">
            {officialExamPresets.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => {
                  setSelectedExam(e);
                  setActiveStep("dictation");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedExam.id === e.id
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                    : "bg-white dark:bg-slate-950 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-400 border border-gray-200 dark:border-slate-800"
                }`}
              >
                {e.name}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Step Workflow Indicator */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setActiveStep("dictation")}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeStep === "dictation"
                ? "bg-purple-950/40 border-purple-500 text-purple-200"
                : "bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-800 text-gray-500 dark:text-slate-400"
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-wider">Step 1</span>
            <h4 className="font-bold text-sm text-gray-900 dark:text-slate-100 mt-0.5">
              🎙️ Audio Dictation ({selectedExam.dictationSpeedWpm} WPM)
            </h4>
            <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">
              Take notes in your shorthand notebook during dictation.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveStep("transcription")}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeStep === "transcription"
                ? "bg-purple-950/40 border-purple-500 text-purple-200"
                : "bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-800 text-gray-500 dark:text-slate-400"
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-wider">Step 2</span>
            <h4 className="font-bold text-sm text-gray-900 dark:text-slate-100 mt-0.5">
              💻 Computer Transcription ({selectedExam.transcriptionTimeMinutes} Mins)
            </h4>
            <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">
              Type your notes on keyboard with full error evaluation.
            </p>
          </button>
        </div>

        {/* Step Content */}
        {activeStep === "dictation" ? (
          <div className="space-y-4">
            <DictationPlayer
              initialPassage={selectedPassage}
              onFinished={() => setActiveStep("transcription")}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <TranscriptionEvaluator
              passage={selectedPassage}
              examConfig={selectedExam}
              dictationSpeedWpm={selectedExam.dictationSpeedWpm}
            />
          </div>
        )}
      </main>
    </div>
  );
}
