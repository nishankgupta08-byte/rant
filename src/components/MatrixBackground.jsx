import React, { useEffect, useRef, useState } from 'react';

const MATRIX_GREEN = '#39FF14';
const MATRIX_CYAN = '#00e5ff';
const MATRIX_PURPLE = '#b55fe6';

const CHARS = '0123456789ABCDEF:3RANT';
const FONT_SIZE = 16;
const TRAIL_LENGTH = 18;

function pickColumnPalette() {
  const roll = Math.random();
  if (roll < 0.075) {
    return { glow: MATRIX_CYAN, rgb: [0, 229, 255] };
  }
  if (roll < 0.15) {
    return { glow: MATRIX_PURPLE, rgb: [181, 95, 230] };
  }
  return { glow: MATRIX_GREEN, rgb: [57, 255, 20] };
}

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function MatrixBackground() {
  const canvasRef = useRef(null);
  const [canvasVisible, setCanvasVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const fadeFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setCanvasVisible(true));
    });

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let running = !document.hidden;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let columns = 0;
    /** @type {{ y: number, speed: number, glow: string, rgb: number[], trail: string[] }[]} */
    let drops = [];

    const initColumns = () => {
      columns = Math.floor(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () => ({
        y: Math.random() * -height,
        speed: 0.55 + Math.random() * 1.6,
        ...pickColumnPalette(),
        trail: Array.from({ length: TRAIL_LENGTH }, randomChar),
      }));
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initColumns();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleVisibility = () => {
      running = !document.hidden;
      if (running) draw();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const draw = () => {
      if (!running) return;

      ctx.fillStyle = 'rgba(5, 5, 5, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${FONT_SIZE}px "Space Mono", monospace`;
      ctx.textBaseline = 'top';

      for (let i = 0; i < columns; i++) {
        const drop = drops[i];
        const prevRow = Math.floor(drop.y / FONT_SIZE);
        drop.y += drop.speed;
        const row = Math.floor(drop.y / FONT_SIZE);

        if (row !== prevRow) {
          drop.trail.pop();
          drop.trail.unshift(randomChar());
        }

        const x = i * FONT_SIZE;
        const [r, g, b] = drop.rgb;

        for (let t = 0; t < drop.trail.length; t++) {
          const charY = drop.y - t * FONT_SIZE;
          if (charY < -FONT_SIZE || charY > height) continue;

          if (t === 0) {
            ctx.shadowBlur = 16;
            ctx.shadowColor = drop.glow;
            ctx.fillStyle = '#f5fff5';
            ctx.fillText(drop.trail[t], x, charY);
            ctx.shadowBlur = 0;
          } else {
            const fade = 1 - t / drop.trail.length;
            const alpha = Math.max(0.12, fade * 0.85);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.fillText(drop.trail[t], x, charY);
          }
        }

        if (drop.y - TRAIL_LENGTH * FONT_SIZE > height && Math.random() > 0.975) {
          drop.y = Math.random() * -120;
          Object.assign(drop, pickColumnPalette());
          drop.trail = Array.from({ length: TRAIL_LENGTH }, randomChar);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(fadeFrame);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibility);
      setCanvasVisible(false);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 mix-blend-screen transition-opacity duration-1000 ease-out ${
          canvasVisible ? 'opacity-80' : 'opacity-0'
        }`}
      />
    </div>
  );
}
