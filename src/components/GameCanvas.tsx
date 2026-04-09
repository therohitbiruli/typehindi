"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface FallingWord {
  text: string;
  x: number;
  y: number;
  speed: number;
  id: number;
}

const GAME_WORDS = [
  "भारत", "शिक्षा", "कंप्यूटर", "सरकार", "परीक्षा", "विद्यालय", "पुस्तक", "अध्ययन",
  "नमस्ते", "धन्यवाद", "स्वागत", "प्रगति", "विकास", "संस्कृति", "परिवार", "समाज",
  "देश", "जल", "नदी", "पर्वत", "आकाश", "सूरज", "चाँद", "तारा", "फूल", "पेड़",
  "कमल", "हवा", "रास्ता", "सपना", "किताब", "कलम", "गमला", "पानी", "रोटी",
];

const GAME_SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", "|", "\\", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?", "~", "`"];

const GAME_SENTENCES = [
  "भारत एक विशाल देश है।",
  "मुझे हिंदी टाइपिंग सीखना है।",
  "समय का सदुपयोग करना चाहिए।",
  "विद्या ददाति विनयं।",
  "परिश्रम सफलता की कुंजी है।",
  "आज का दिन बहुत शुभ है।",
  "सभी का सम्मान करो।"
];

type GameMode = "words" | "symbols" | "sentences";

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameMode, setGameMode] = useState<GameMode>("words");
  const [input, setInput] = useState("");
  const [lives, setLives] = useState(3);

  const wordsRef = useRef<FallingWord[]>([]);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);
  const nextIdRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const gameModeRef = useRef<GameMode>("words");

  useEffect(() => {
    gameModeRef.current = gameMode;
  }, [gameMode]);

  const spawnWord = useCallback((canvasWidth: number) => {
    let sourceArray = GAME_WORDS;
    if (gameModeRef.current === "symbols") sourceArray = GAME_SYMBOLS;
    else if (gameModeRef.current === "sentences") sourceArray = GAME_SENTENCES;

    const text = sourceArray[Math.floor(Math.random() * sourceArray.length)];
    const baseSpeed = gameModeRef.current === "sentences" ? 0.2 : 0.5;
    const speed = baseSpeed + Math.min(scoreRef.current * 0.05, 2);
    
    wordsRef.current.push({
      text,
      x: Math.random() * Math.max(20, canvasWidth - text.length * 12) + 20,
      y: -20,
      speed,
      id: nextIdRef.current++,
    });
  }, []);

  const startGame = useCallback(() => {
    wordsRef.current = [];
    scoreRef.current = 0;
    livesRef.current = 3;
    lastSpawnRef.current = 0;
    nextIdRef.current = 0;
    setScore(0);
    setLives(3);
    setGameOver(false);
    setIsPlaying(true);
    setInput("");
    inputRef.current?.focus();
  }, []);

  const stopGame = useCallback(() => {
    setIsPlaying(false);
    setGameOver(true);
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
  }, []);

  // Game loop
  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = 0;

    const gameLoop = (timestamp: number) => {
      if (!isPlaying) return;

      const delta = timestamp - lastTime;
      lastTime = timestamp;

      // Spawn words
      if (timestamp - lastSpawnRef.current > Math.max(2000 - scoreRef.current * 50, 800)) {
        spawnWord(canvas.width);
        lastSpawnRef.current = timestamp;
      }

      // Clear canvas
      const isDark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDark ? "#111827" : "#f9fafb";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground line
      ctx.strokeStyle = isDark ? "#374151" : "#e5e7eb";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 40);
      ctx.lineTo(canvas.width, canvas.height - 40);
      ctx.stroke();

      // Update and draw words
      ctx.font = "20px 'Noto Sans Devanagari', sans-serif";
      ctx.textAlign = "left";

      wordsRef.current = wordsRef.current.filter((word) => {
        word.y += word.speed * (delta / 16);

        // Word reached bottom
        if (word.y > canvas.height - 45) {
          livesRef.current--;
          setLives(livesRef.current);
          if (livesRef.current <= 0) {
            stopGame();
          }
          return false;
        }

        // Draw word background
        const metrics = ctx.measureText(word.text);
        const padding = 8;
        ctx.fillStyle = isDark ? "#1f2937" : "#ffffff";
        ctx.strokeStyle = isDark ? "#4b5563" : "#d1d5db";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(
          word.x - padding,
          word.y - 18,
          metrics.width + padding * 2,
          30,
          6
        );
        ctx.fill();
        ctx.stroke();

        // Draw word text
        ctx.fillStyle = isDark ? "#e5e7eb" : "#1f2937";
        ctx.fillText(word.text, word.x, word.y + 4);

        return true;
      });

      // Draw score and lives
      ctx.fillStyle = isDark ? "#9ca3af" : "#6b7280";
      ctx.font = "14px Inter, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`Score: ${scoreRef.current}`, 10, 25);
      ctx.textAlign = "right";
      ctx.fillText(`❤️ ${livesRef.current}`, canvas.width - 10, 25);

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, spawnWord, stopGame]);

  // Handle word matching
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) return;

      const matchIndex = wordsRef.current.findIndex((w) => w.text === input.trim());
      if (matchIndex !== -1) {
        wordsRef.current.splice(matchIndex, 1);
        scoreRef.current++;
        setScore(scoreRef.current);
      }
      setInput("");
    },
    [input]
  );

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = 400;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="space-y-4">
      <div className="card overflow-hidden p-0">
        <canvas
          ref={canvasRef}
          className="w-full rounded-lg"
          style={{ height: "400px" }}
          id="game-canvas"
        />
      </div>

      {!isPlaying && !gameOver && (
        <div className="flex flex-col items-center gap-6">
          <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {(["words", "symbols", "sentences"] as GameMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => setGameMode(mode)}
                className={`px-6 py-2 rounded-md font-medium capitalize transition-colors ${gameMode === mode ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                {mode}
              </button>
            ))}
          </div>
          <button onClick={startGame} className="btn-primary text-lg px-8 py-3">
            🎮 खेल शुरू करें (Start Game)
          </button>
        </div>
      )}

      {gameOver && (
        <div className="card text-center">
          <h3 className="heading-3 mb-2">खेल समाप्त! (Game Over)</h3>
          <p className="mb-4 text-lg">
            आपका स्कोर: <span className="font-bold text-primary-600">{score}</span>
          </p>
          <button onClick={startGame} className="btn-primary">
            फिर से खेलें (Play Again)
          </button>
        </div>
      )}

      {isPlaying && (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 font-hindi text-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-900"
            placeholder="शब्द टाइप करें..."
            spellCheck={false}
            autoComplete="off"
            id="game-input"
          />
          <button type="submit" className="btn-primary px-6">
            ⏎
          </button>
        </form>
      )}
    </div>
  );
}
