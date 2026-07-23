import React, { useEffect, useRef } from 'react';

export default function MatrixBackground({ enabled = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters: katakana + hex + numbers + :3
    const chars = '0123456789ABCDEF:3RANT';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      // Translucent black overlay for trailing effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#39FF14';
      ctx.font = `${fontSize}px "Space Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [enabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Permanent subtle cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Toggleable Digital Matrix Rain Canvas */}
      {enabled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-25"
        />
      )}
    </div>
  );
}
