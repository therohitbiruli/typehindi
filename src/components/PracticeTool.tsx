"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import { TypingBox } from "./TypingBox";
import { Stats } from "./Stats";
import { Keyboard } from "./Keyboard";
import { useTypingEngine } from "../hooks/useTypingEngine";
import { useKeyPress } from "../hooks/useKeyPress";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getRandomParagraph, getParagraphsByDifficulty } from "../data/paragraphs";
import type { Paragraph } from "../data/paragraphs";
import { getInscriptKeysForWord, getInscriptKeyInfoForChar } from "../utils/keyboardMapper";

const DIFFICULTY_OPTIONS: Array<{ label: string; value: "easy" | "medium" | "hard" }> = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

// Helper to extract the word at the current cursor index
function getCurrentWord(targetText: string, cursorIndex: number): string {
  if (!targetText) return "";
  
  let start = cursorIndex;
  while (start > 0 && targetText[start - 1] !== " " && targetText[start - 1] !== "\n") {
    start--;
  }
  
  let end = cursorIndex;
  while (end < targetText.length && targetText[end] !== " " && targetText[end] !== "\n") {
    end++;
  }
  
  const word = targetText.slice(start, end);
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()।?"':]/g, "").trim();
}

export function PracticeTool({ showSEO = false }: { showSEO?: boolean }) {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [paragraph, setParagraph] = useState<Paragraph>(() => getParagraphsByDifficulty(difficulty)[0]);
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [enableHighlights, setEnableHighlights] = useState(true);
  const [bestWpm, setBestWpm] = useLocalStorage<number>("bestWpm", 0);
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Custom text pasting states
  const [showPencilModal, setShowPencilModal] = useState(false);
  const [pencilInputText, setPencilInputText] = useState("");
  const [showTranslationPrompt, setShowTranslationPrompt] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  // Ads popup modal state
  const [showAdsModal, setShowAdsModal] = useState(false);

  const { typedText, isStarted, isFinished, stats, handleInput, reset } =
    useTypingEngine(paragraph.text);

  const { activeKey, isShift } = useKeyPress();

  // Listen to custom event from the floating translator
  useEffect(() => {
    const handleCustomText = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setParagraph({
          id: 9999,
          text: customEvent.detail,
          difficulty: "medium",
          category: "Translated",
          wordCount: customEvent.detail.split(/\s+/).length
        });
        reset();
      }
    };
    window.addEventListener("load-custom-text", handleCustomText);
    return () => window.removeEventListener("load-custom-text", handleCustomText);
  }, [reset]);

  const handleFinish = useCallback(() => {
    if (stats.wpm > bestWpm) {
      setBestWpm(stats.wpm);
    }
  }, [stats.wpm, bestWpm, setBestWpm]);

  useMemo(() => {
    if (isFinished && stats.wpm > 0) {
      handleFinish();
    }
  }, [isFinished, stats.wpm, handleFinish]);

  const handleTypingInput = useCallback(
    (text: string, insertedAtIndex?: number) => {
      handleInput(text, insertedAtIndex);
    },
    [handleInput]
  );

  const changeParagraph = useCallback(() => {
    const newP = getRandomParagraph(difficulty);
    setParagraph(newP);
    reset();
  }, [difficulty, reset]);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  const handleDifficultyChange = useCallback(
    (d: "easy" | "medium" | "hard") => {
      setDifficulty(d);
      const newP = getRandomParagraph(d);
      setParagraph(newP);
      reset();
    },
    [reset]
  );

  // Keyboard show/hide toggle with Ad verification
  const handleKeyboardToggle = useCallback(() => {
    if (!showKeyboard) {
      // User clicked "Show Keyboard". Trigger Ads modal first.
      setShowAdsModal(true);
    } else {
      // User clicked "Hide Keyboard". Close directly.
      setShowKeyboard(false);
    }
  }, [showKeyboard]);

  const handleCloseAds = useCallback(() => {
    setShowAdsModal(false);
    setShowKeyboard(true);
  }, []);

  // Custom text modal save handler
  const handleSaveCustomText = () => {
    const trimmed = pencilInputText.trim();
    if (!trimmed) return;

    // Check if text contains English characters
    const hasEnglish = /[a-zA-Z]/.test(trimmed);
    if (hasEnglish) {
      setShowPencilModal(false);
      setShowTranslationPrompt(true);
    } else {
      setParagraph({
        id: 8888,
        text: trimmed,
        difficulty: "medium",
        category: "Custom",
        wordCount: trimmed.split(/\s+/).length
      });
      reset();
      setShowPencilModal(false);
      setPencilInputText("");
    }
  };

  // Perform custom text translation
  const handleTranslateCustomText = async (shouldTranslate: boolean) => {
    if (!shouldTranslate) {
      // Keep raw English text
      setParagraph({
        id: 8888,
        text: pencilInputText.trim(),
        difficulty: "medium",
        category: "Custom",
        wordCount: pencilInputText.trim().split(/\s+/).length
      });
      reset();
      setShowTranslationPrompt(false);
      setPencilInputText("");
      return;
    }

    setIsTranslating(true);
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=hi&dt=t&q=${encodeURIComponent(pencilInputText)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Translation failed");
      const data = await res.json();
      const translated = data[0].map((item: any) => item[0]).join("");
      
      setParagraph({
        id: 9999,
        text: translated,
        difficulty: "medium",
        category: "Translated",
        wordCount: translated.split(/\s+/).length
      });
      reset();
      setShowTranslationPrompt(false);
      setPencilInputText("");
    } catch (err) {
      console.error(err);
      alert("Translation failed. Loaded original text.");
      setParagraph({
        id: 8888,
        text: pencilInputText.trim(),
        difficulty: "medium",
        category: "Custom",
        wordCount: pencilInputText.trim().split(/\s+/).length
      });
      reset();
      setShowTranslationPrompt(false);
      setPencilInputText("");
    } finally {
      setIsTranslating(false);
    }
  };

  // Calculate current active word and its keys
  const activeWord = useMemo(() => {
    return getCurrentWord(paragraph.text, typedText.length);
  }, [paragraph.text, typedText.length]);

  const activeWordKeys = useMemo(() => {
    if (!activeWord) return [];
    return getInscriptKeysForWord(activeWord);
  }, [activeWord]);

  // Calculate the next character to highlight on the virtual keyboard
  const nextKeyInfo = useMemo(() => {
    if (isFinished) return null;
    const nextChar = paragraph.text[typedText.length];
    return getInscriptKeyInfoForChar(nextChar);
  }, [paragraph.text, typedText.length, isFinished]);

  return (
    <div className="w-full">
      {/* 🧘 Focus Mode Fixed Fullscreen Container */}
      {isFocusMode && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-950 overflow-y-auto flex flex-col items-center py-12 px-4 sm:px-6 md:px-8 animate-fade-in">
          <div className="max-w-4xl w-full space-y-6">
            {/* Topbar inside focus mode */}
            <div className="flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-800 pb-4">
              <div className="flex items-center gap-4">
                <span className="text-xl">🧘</span>
                <h3 className="font-bold text-gray-800 dark:text-white text-base">
                  Focus Mode
                </h3>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={enableHighlights}
                    onChange={(e) => setEnableHighlights(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <span>Guide Highlight</span>
                </label>
              </div>
              <button
                onClick={() => setIsFocusMode(false)}
                className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-bold border border-gray-300 dark:border-gray-800 transition-all shadow-sm"
              >
                Exit Focus Mode ✕
              </button>
            </div>

            {/* Stats during focus mode */}
            <Stats stats={stats} bestWpm={bestWpm} />

            {/* Focus Mode Typing Box with Pencil Icon */}
            <div className="relative group">
              <button
                onClick={() => setShowPencilModal(true)}
                className="absolute top-4 right-4 z-10 h-8 w-8 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-500 hover:text-gray-855 dark:text-gray-400 dark:hover:text-white flex items-center justify-center border border-gray-300 dark:border-gray-700 shadow-sm transition-all"
                title="Add Custom Text"
              >
                ✏️
              </button>
              <TypingBox
                targetText={paragraph.text}
                typedText={typedText}
                onInput={handleTypingInput}
                isFinished={isFinished}
                isStarted={isStarted}
              />
            </div>

            {/* Keyboard hint in Focus Mode */}
            {activeWord && !isFinished && (
              <div className="bg-amber-50 dark:bg-gray-900/60 border border-amber-300 dark:border-amber-900/50 rounded-2xl p-3.5 flex justify-between items-center shadow-sm">
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Word <strong className="font-hindi text-gray-950 dark:text-white">{activeWord}</strong> keystroke clue:{" "}
                  <span className="inline-flex gap-1.5 ml-2">
                    {activeWordKeys.map((stroke, i) => (
                      <kbd key={i} className="px-1.5 py-0.5 text-xs bg-white dark:bg-gray-850 border border-gray-300 dark:border-gray-700 rounded shadow-sm text-gray-800 dark:text-gray-200">
                        {stroke.isShift && "Shift+"}
                        {stroke.key}
                      </kbd>
                    ))}
                  </span>
                </p>
              </div>
            )}

            {/* Focus Mode Action Buttons */}
            <div className="flex justify-center gap-3">
              <button onClick={handleReset} className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-755 shadow-sm">
                ↻ Reset
              </button>
              <button onClick={changeParagraph} className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-755 shadow-sm">
                ⟳ Change Paragraph
              </button>
              <button
                onClick={handleKeyboardToggle}
                className={`btn-secondary rounded-xl px-6 py-2.5 border shadow-sm ${showKeyboard ? "!bg-primary-50 !text-primary-700 dark:!bg-primary-900/30 dark:!text-primary-300 border-primary-300" : "border-gray-300 dark:border-gray-755"}`}
              >
                ⌨ {showKeyboard ? "Hide" : "Show"} Keyboard
              </button>
            </div>

            {/* Guided Virtual Keyboard */}
            <Keyboard
              activeKey={activeKey}
              isShift={isShift}
              visible={showKeyboard}
              highlightKey={enableHighlights ? nextKeyInfo?.code : undefined}
              highlightShift={enableHighlights ? nextKeyInfo?.isShift : undefined}
            />
          </div>
        </div>
      )}

      {/* Normal Mode */}
      {!isFocusMode && (
        <>
          {/* Controls */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-gray-855 p-3.5 rounded-2xl border border-gray-300 dark:border-gray-800 shadow-md">
            <div className="flex gap-1">
              {DIFFICULTY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleDifficultyChange(opt.value)}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    difficulty === opt.value
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Guided Highlight toggles */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={enableHighlights}
                  onChange={(e) => setEnableHighlights(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span>Guide Highlight</span>
              </label>

              {/* Focus mode CTA button */}
              <button
                onClick={() => setIsFocusMode(true)}
                className="px-3.5 py-1.5 rounded bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition-all border border-indigo-200 dark:border-indigo-900/40 flex items-center gap-1.5 shadow-sm"
              >
                🧘 Focus Mode
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-6">
            <Stats stats={stats} bestWpm={bestWpm} />
          </div>

          {/* Typing area with absolute Pencil Icon overlay */}
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              {/* Pencil Icon Button */}
              <button
                onClick={() => setShowPencilModal(true)}
                className="absolute top-4 right-4 z-10 h-8 w-8 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-500 hover:text-gray-855 dark:text-gray-400 dark:hover:text-white flex items-center justify-center border border-gray-300 dark:border-gray-700 shadow-sm transition-all"
                title="Add Custom Text"
              >
                ✏️
              </button>
              <TypingBox
                targetText={paragraph.text}
                typedText={typedText}
                onInput={handleTypingInput}
                isFinished={isFinished}
                isStarted={isStarted}
              />
            </div>
          </div>

          {/* Keystroke Clue Banner */}
          {activeWord && !isFinished && (
            <div className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-orange-950/20 border border-amber-300 dark:border-amber-800/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in shadow-md">
              <div className="flex items-start sm:items-center gap-3">
                <span className="text-2xl mt-0.5 sm:mt-0">💡</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                    Keystroke Hint
                  </span>
                  <p className="text-sm text-gray-855 dark:text-gray-300">
                    Press to type word <strong className="font-hindi text-base text-gray-950 dark:text-white">{activeWord}</strong>:
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    {activeWordKeys.map((stroke, i) => (
                      <div key={i} className="flex items-center">
                        {i > 0 && <span className="text-gray-400 text-xs mx-0.5">→</span>}
                        <kbd className={`px-1.5 py-0.5 text-xs rounded border-2 ${
                          stroke.isShift
                            ? "bg-indigo-50 border-indigo-300 dark:bg-indigo-950/50 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold"
                            : "bg-white border-gray-350 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold"
                        }`}>
                          {stroke.isShift && "Shift+"}
                          {stroke.key}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Link
                  href={`/learn?word=${encodeURIComponent(activeWord)}&layout=inscript`}
                  className="text-xs font-bold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 px-3 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1 hover:shadow"
                >
                  Remington / Full Guide ➔
                </Link>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button onClick={handleReset} className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm">
              ↻ Reset
            </button>
            <button onClick={changeParagraph} className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm">
              ⟳ Change Paragraph
            </button>
            <button
              onClick={handleKeyboardToggle}
              className={`btn-secondary rounded-xl px-6 py-2.5 border shadow-sm ${showKeyboard ? "!bg-primary-50 !text-primary-700 dark:!bg-primary-900/30 dark:!text-primary-300 border-primary-300" : "border-gray-300 dark:border-gray-700"}`}
            >
              ⌨ {showKeyboard ? "Hide" : "Show"} Keyboard
            </button>
          </div>

          {/* Guided Virtual Keyboard */}
          <div className="mt-8">
            <Keyboard
              activeKey={activeKey}
              isShift={isShift}
              visible={showKeyboard}
              highlightKey={enableHighlights ? nextKeyInfo?.code : undefined}
              highlightShift={enableHighlights ? nextKeyInfo?.isShift : undefined}
            />
          </div>

          {/* Paragraph info */}
          <div className="mt-6 text-center text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            Difficulty: {paragraph.difficulty} | Category: {paragraph.category} | Words: {paragraph.wordCount}
          </div>
        </>
      )}

      {/* ✏️ Paste Custom Text Modal */}
      {showPencilModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-950 border-2 border-gray-300 dark:border-gray-800 rounded-3xl w-full max-w-lg p-6 shadow-2xl flex flex-col space-y-4">
            <div className="flex justify-between items-center border-b-2 border-gray-155 dark:border-gray-900 pb-3">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">
                ✍️ Add Custom Text
              </h4>
              <button
                onClick={() => {
                  setShowPencilModal(false);
                  setPencilInputText("");
                }}
                className="h-8 w-8 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-gray-855 dark:hover:text-white flex items-center justify-center text-xs"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
                Paste your text here
              </label>
              <textarea
                value={pencilInputText}
                onChange={(e) => setPencilInputText(e.target.value)}
                placeholder="Paste your Hindi or English practice text here..."
                rows={6}
                className="w-full p-3 rounded-xl border-2 border-gray-350 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-855 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none font-sans shadow-inner"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t-2 border-gray-155 dark:border-gray-900">
              <button
                onClick={() => {
                  setShowPencilModal(false);
                  setPencilInputText("");
                }}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl text-xs font-semibold border border-gray-300 dark:border-gray-700 shadow-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCustomText}
                disabled={!pencilInputText.trim()}
                className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold disabled:opacity-50 shadow-md"
              >
                Save Text
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🌐 English to Hindi Translation Option Modal */}
      {showTranslationPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-950 border-2 border-gray-300 dark:border-gray-800 rounded-3xl w-full max-w-md p-6 shadow-2xl flex flex-col space-y-4 text-center">
            <div className="text-4xl animate-bounce">🌐</div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base">
              Translation Option
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              You pasted English/non-Hindi text. Would you like to translate it into Hindi (Devanagari) for typing practice?
            </p>

            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={() => handleTranslateCustomText(true)}
                disabled={isTranslating}
                className="w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
              >
                {isTranslating ? "Translating..." : "Yes, Translate to Hindi"}
              </button>
              
              <button
                onClick={() => handleTranslateCustomText(false)}
                disabled={isTranslating}
                className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-bold transition-all border border-gray-350 dark:border-gray-700 shadow-sm"
              >
                No, Practice as English
              </button>
              
              <button
                onClick={() => {
                  setShowTranslationPrompt(false);
                  setPencilInputText("");
                }}
                disabled={isTranslating}
                className="w-full py-2 bg-transparent text-gray-400 hover:text-gray-650 text-xs font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 📺 Premium Ads Pop-up Modal */}
      {showAdsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-905 border-2 border-gray-400 dark:border-gray-750 rounded-3xl w-full max-w-lg p-6 shadow-2xl flex flex-col space-y-4 relative">
            <button
              onClick={handleCloseAds}
              className="absolute top-4 right-4 h-8 w-8 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-705 text-gray-500 hover:text-gray-855 dark:text-gray-400 dark:hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
              title="Close Ad"
            >
              ✕
            </button>

            <div className="text-center pb-2 border-b border-gray-155 dark:border-gray-850">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-gray-400 dark:text-gray-500">
                Sponsored Advertisement
              </span>
            </div>

            {/* Ad Body Mockup */}
            <div className="bg-gray-50 dark:bg-gray-955 border-2 border-dashed border-gray-300 dark:border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 min-h-[220px]">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-primary-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary-500/10">
                TH
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                  TypeHindi Premium Keyboard Master
                </h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
                  Unlock ad-free learning, advanced analytics, custom keystroke soundboards, and certified mock exams.
                </p>
              </div>
              <button
                onClick={handleCloseAds}
                className="px-6 py-2 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all"
              >
                Learn More
              </button>
            </div>

            {/* Close CTA */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={handleCloseAds}
                className="w-full py-2.5 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-950 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                Close Ad & Show Keyboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
