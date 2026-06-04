"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface Tank {
  id: number;
  text: string;
  x: number;
  y: number;
  speed: number;
  color: string;
  angle: number;
  exploded: boolean;
  explosionFrame: number;
}

const TANK_COLORS = [
  "#ef4444", // red
  "#3b82f6", // blue
  "#10b981", // green
  "#f59e0b", // yellow
  "#8b5cf6", // purple
];

const ALPHABETS: Record<string, string[]> = {
  English: "abcdefghijklmnopqrstuvwxyz".split(""),
  Hindi: "अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह".split(""),
  Tamil: "அஆஇஈஉஊஎஏஐஒஓஔகஙசஞடணதநபமயரலவழளறன".split(""),
  Marathi: "अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह".split(""),
  Bengali: "অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলবশষসহ".split(""),
};

export function TankGameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [language, setLanguage] = useState("Hindi");
  const [lives, setLives] = useState(3);

  const tanksRef = useRef<Tank[]>([]);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);
  const nextIdRef = useRef(0);
  const isPausedRef = useRef(false);

  const turretAngleRef = useRef(0);
  const languageRef = useRef("Hindi");

  useEffect(() => {
    languageRef.current = language;
  }, [language]);

  const togglePause = () => {
    isPausedRef.current = !isPausedRef.current;
    setIsPaused(isPausedRef.current);
  };

  const spawnTank = useCallback((canvasWidth: number, canvasHeight: number) => {
    const edge = Math.floor(Math.random() * 4);
    let x = 0;
    let y = 0;
    
    if (edge === 0) { x = Math.random() * canvasWidth; y = -50; }
    else if (edge === 1) { x = canvasWidth + 50; y = Math.random() * canvasHeight; }
    else if (edge === 2) { x = Math.random() * canvasWidth; y = canvasHeight + 50; }
    else if (edge === 3) { x = -50; y = Math.random() * canvasHeight; }

    const letters = ALPHABETS[languageRef.current];
    const text = letters[Math.floor(Math.random() * letters.length)];
    const color = TANK_COLORS[Math.floor(Math.random() * TANK_COLORS.length)];
    
    const speed = 0.5 + Math.min(scoreRef.current * 0.02, 2.0);
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const angle = Math.atan2(centerY - y, centerX - x);

    tanksRef.current.push({
      id: nextIdRef.current++,
      text,
      x,
      y,
      speed,
      color,
      angle,
      exploded: false,
      explosionFrame: 0,
    });
  }, []);

  const startGame = useCallback(() => {
    tanksRef.current = [];
    scoreRef.current = 0;
    livesRef.current = 3;
    lastSpawnRef.current = 0;
    nextIdRef.current = 0;
    isPausedRef.current = false;
    setScore(0);
    setLives(3);
    setGameOver(false);
    setIsPlaying(true);
    setIsPaused(false);
    
    // Auto-focus window so typing works immediately without clicking
    window.focus();
  }, []);

  const stopGame = useCallback(() => {
    setIsPlaying(false);
    setGameOver(true);
  }, []);

  const drawTank = (ctx: CanvasRenderingContext2D, tank: Tank) => {
    ctx.save();
    ctx.translate(tank.x, tank.y);
    ctx.rotate(tank.angle);

    ctx.fillStyle = "#374151"; 
    ctx.fillRect(-20, -18, 40, 8);
    ctx.fillRect(-20, 10, 40, 8);

    ctx.fillStyle = tank.color;
    ctx.fillRect(-15, -12, 30, 24);

    ctx.fillStyle = "#1f2937";
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(0, -4, 25, 8);

    ctx.restore();
  };

  const drawExplosion = (ctx: CanvasRenderingContext2D, x: number, y: number, frame: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = Math.max(1 - frame / 30, 0);
    
    ctx.fillStyle = "#f97316";
    ctx.beginPath();
    ctx.arc(0, 0, frame * 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#fbbf24";
    ctx.beginPath();
    ctx.arc(0, 0, frame, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  };

  const drawBase = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.save();
    ctx.translate(x, y);

    ctx.fillStyle = "#1e293b";
    ctx.beginPath();
    ctx.arc(0, 0, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.rotate(turretAngleRef.current);
    ctx.fillStyle = "#94a3b8";
    ctx.fillRect(0, -6, 35, 12);

    ctx.restore();
  };

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    const gameLoop = (timestamp: number) => {
      if (!isPlaying) return;

      const delta = timestamp - lastTime;
      lastTime = timestamp;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw Grass background & Roads
      ctx.fillStyle = "#4ade80";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#94a3b8";
      ctx.fillRect(0, centerY - 40, canvas.width, 80);
      ctx.fillRect(centerX - 40, 0, 80, canvas.height);
      
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 2;
      ctx.setLineDash([20, 20]);
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(canvas.width, centerY);
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, canvas.height);
      ctx.stroke();
      ctx.setLineDash([]);

      if (!isPausedRef.current) {
        if (timestamp - lastSpawnRef.current > Math.max(2000 - scoreRef.current * 40, 600)) {
          spawnTank(canvas.width, canvas.height);
          lastSpawnRef.current = timestamp;
        }

        tanksRef.current = tanksRef.current.filter((tank) => {
          if (tank.exploded) {
            tank.explosionFrame += delta / 16;
            drawExplosion(ctx, tank.x, tank.y, tank.explosionFrame);
            return tank.explosionFrame < 30;
          }

          tank.x += Math.cos(tank.angle) * tank.speed * (delta / 16);
          tank.y += Math.sin(tank.angle) * tank.speed * (delta / 16);

          const dist = Math.hypot(centerX - tank.x, centerY - tank.y);
          if (dist < 40) {
            livesRef.current--;
            setLives(livesRef.current);
            if (livesRef.current <= 0) stopGame();
            return false;
          }

          drawTank(ctx, tank);

          ctx.fillStyle = "#111827";
          ctx.beginPath();
          ctx.roundRect(tank.x - 12, tank.y - 35, 24, 24, 4);
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 16px 'Noto Sans Devanagari', 'Inter', sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(tank.text, tank.x, tank.y - 18);

          return true;
        });
      } else {
        // Paused state: just draw tanks at current positions
        tanksRef.current.forEach(tank => {
          if (tank.exploded) {
            drawExplosion(ctx, tank.x, tank.y, tank.explosionFrame);
          } else {
            drawTank(ctx, tank);
            ctx.fillStyle = "#111827";
            ctx.beginPath();
            ctx.roundRect(tank.x - 12, tank.y - 35, 24, 24, 4);
            ctx.fill();
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 16px 'Noto Sans Devanagari', 'Inter', sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(tank.text, tank.x, tank.y - 18);
          }
        });
        
        // Draw PAUSED overlay text
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 32px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("PAUSED", centerX, centerY - 80);
      }

      drawBase(ctx, centerX, centerY);

      ctx.fillStyle = "#111827";
      ctx.font = "bold 18px 'Inter', sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`Score: ${scoreRef.current}`, 20, 30);
      ctx.textAlign = "right";
      ctx.fillText(`❤️ ${livesRef.current}`, canvas.width - 20, 30);

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, spawnTank, stopGame]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isPlaying || isPausedRef.current) return;
    
    // Ignore special keys
    if (e.key.length > 1 && e.key !== "Backspace") return;
    
    const key = e.key;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let closestTank: Tank | null = null;
    let minDistance = Infinity;

    tanksRef.current.forEach(tank => {
      if (!tank.exploded && tank.text === key) {
        const dist = Math.hypot(centerX - tank.x, centerY - tank.y);
        if (dist < minDistance) {
          minDistance = dist;
          closestTank = tank;
        }
      }
    });

    if (closestTank) {
      turretAngleRef.current = Math.atan2((closestTank as Tank).y - centerY, (closestTank as Tank).x - centerX);
      (closestTank as Tank).exploded = true;
      scoreRef.current++;
      setScore(scoreRef.current);
    }
  }, [isPlaying]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = 500;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="space-y-4">
      {/* Settings Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-3 rounded-lg shadow-sm gap-4">
        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Target Language:</label>
          <select 
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              // Restart game automatically when changing language
              if (isPlaying) startGame();
            }}
            className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 font-medium"
          >
            {Object.keys(ALPHABETS).map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        
        <div className="flex gap-2">
          {isPlaying && !gameOver && (
            <button onClick={togglePause} className="btn-secondary px-4 py-1.5 text-sm">
              {isPaused ? "▶️ Resume" : "⏸️ Pause"}
            </button>
          )}
          {(isPlaying || gameOver) && (
            <button onClick={startGame} className="btn-secondary px-4 py-1.5 text-sm text-red-600 dark:text-red-400">
              🔄 Restart
            </button>
          )}
        </div>
      </div>

      <div className="card overflow-hidden p-0 relative">
        <canvas
          ref={canvasRef}
          className="w-full rounded-lg"
          style={{ height: "500px", cursor: "crosshair" }}
          id="tank-game-canvas"
        />
        
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg">
            <button onClick={startGame} className="btn-primary text-lg px-8 py-3 shadow-lg transform transition hover:scale-105">
              🎮 Start Tank Defender
            </button>
            <p className="text-white mt-4 font-medium text-center px-4">
              Type the letters on the tanks to destroy them!<br/>
              <span className="text-sm text-gray-300">Selected Language: {language}</span>
            </p>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white rounded-lg">
            <h3 className="text-3xl font-bold mb-2">Base Destroyed!</h3>
            <p className="mb-6 text-xl">
              Final Score: <span className="font-bold text-blue-400">{score}</span>
            </p>
            <button onClick={startGame} className="btn-primary transform transition hover:scale-105">
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
