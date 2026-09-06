"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { DictationPlayer } from "../../../components/shorthand/DictationPlayer";
import { TranscriptionEvaluator } from "../../../components/shorthand/TranscriptionEvaluator";
import { officialExamPresets } from "../../../data/shorthand/exams";
import { dictationPassages } from "../../../data/shorthand/dictations";
import { ExamConfig, DictationPassage } from "../../../data/shorthand/types";

function TestsContent() {
  const searchParams = useSearchParams();
  const examParam = searchParams.get("exam");
  const passageParam = searchParams.get("passage");
  const wpmParam = searchParams.get("wpm");

  const [selectedExam, setSelectedExam] = useState<ExamConfig>(
    officialExamPresets.find((e) => e.id === examParam) || officialExamPresets[0]
  );

  const [activeStep, setActiveStep] = useState<"dictation" | "transcription">(
    passageParam ? "transcription" : "dictation"
  );

  // Match passage or default
  const [selectedPassage, setSelectedPassage] = useState<DictationPassage>(
    dictationPassages.find((p) => p.id === passageParam) || dictationPassages[3]
  );

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-sky-950/30 border border-purple-500/30 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
          Stenographer Skill Test Simulator
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
          {selectedExam.name}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
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
                  : "bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"
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
              : "bg-slate-900 border-slate-800 text-slate-400"
          }`}
        >
          <span className="text-[10px] uppercase font-bold tracking-wider">Step 1</span>
          <h4 className="font-bold text-sm text-slate-100 mt-0.5">
            🎙️ Audio Dictation ({selectedExam.dictationSpeedWpm} WPM)
          </h4>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Take notes in your shorthand notebook during dictation.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setActiveStep("transcription")}
          className={`p-4 rounded-xl border text-left transition-all ${
            activeStep === "transcription"
              ? "bg-purple-950/40 border-purple-500 text-purple-200"
              : "bg-slate-900 border-slate-800 text-slate-400"
          }`}
        >
          <span className="text-[10px] uppercase font-bold tracking-wider">Step 2</span>
          <h4 className="font-bold text-sm text-slate-100 mt-0.5">
            💻 Computer Transcription ({selectedExam.transcriptionTimeMinutes} Mins)
          </h4>
          <p className="text-[11px] text-slate-400 mt-0.5">
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
    </div>
  );
}

export default function ShorthandTestsPage() {
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <ShorthandNav />
      <main className="container-main py-10">
        <Suspense fallback={<div className="text-center py-12 text-slate-400">Loading exam simulator...</div>}>
          <TestsContent />
        </Suspense>
      </main>
    </div>
  );
}
