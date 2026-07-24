import React, { useEffect, useRef, useState } from 'react';

const MATRIX_GREEN = '#39FF14';
const MATRIX_CYAN = '#00e5ff';
const MATRIX_PURPLE = '#b55fe6';

const CHARS = '0123456789ABCDEF:3RANT';
const FONT_SIZE = 14;

function pickColumnPalette() {
  const roll = Math.random();
  if (roll < 0.075) {
    return {
      glow: MATRIX_CYAN,
      body: 'rgba(0, 229, 255, 0.35)',
      head: '#e0fbff',
    };
  }
  if (roll < 0.15) {
    return {
      glow: MATRIX_PURPLE,
      body: 'rgba(181, 95, 230, 0.35)',
      head: '#f0e0ff',
    };
  }
  return {
    glow: MATRIX_GREEN,
    body: 'rgba(57, 255, 20, 0.35)',
    head: '#e8ffe8',
  };
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
    let drops = [];
    let speeds = [];
    let palettes = [];
    let headChars = [];

    const initColumns = () => {
      columns = Math.floor(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.random() * height * -0.1);
      speeds = Array.from({ length: columns }, () => 0.35 + Math.random() * 1.25);
      palettes = Array.from({ length: columns }, pickColumnPalette);
      headChars = Array.from({ length: columns }, randomChar);
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
        const prevRow = Math.floor(drops[i] / FONT_SIZE);
        drops[i] += speeds[i];
        const row = Math.floor(drops[i] / FONT_SIZE);

        if (row !== prevRow) {
          headChars[i] = randomChar();
        }

        const x = i * FONT_SIZE;
        const y = drops[i];
        const { glow, body, head } = palettes[i];
        const char = headChars[i];

        ctx.shadowBlur = 0;
        ctx.fillStyle = body;
        ctx.fillText(char, x, y);

        ctx.fillStyle = head;
        ctx.shadowBlur = 16;
        ctx.shadowColor = glow;
        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        if (y > height && Math.random() > 0.975) {
          drops[i] = Math.random() * -80;
          palettes[i] = pickColumnPalette();
          headChars[i] = randomChar();
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
          canvasVisible ? 'opacity-25' : 'opacity-0'
        }`}
      />
    </div>
  );
}
