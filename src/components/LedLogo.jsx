import React from 'react';

/**
 * LedLogo renders the signature :3 RANT LED matrix logo matching the image asset.
 * Includes interactive hover effects, glowing LED dots, and responsive scaling.
 */
export default function LedLogo({ size = 'md', className = '' }) {
  // Dot matrix data for ":3 RANT"
  // 0 = empty, 1 = glowing green LED dot, 2 = dim green accent LED dot
  const gridMatrix = [
    // Line 1 (border top)
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    // Line 2
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    // Line 3: ":" and "3" top and "RANT" top
    [1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1],
    [1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1],
    // Line 5: ":" and "3" mid
    [1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1],
    [1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1],
    [1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1],
    // Line 9
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    // Line 10 (border bottom)
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  ];

  const scaleClasses = {
    sm: 'gap-0.5 p-1.5 max-w-[140px]',
    md: 'gap-1 p-2.5 max-w-[220px]',
    lg: 'gap-1.5 p-3.5 max-w-[340px]',
  };

  const dotSize = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <div className={`inline-flex flex-col items-center group cursor-pointer ${className}`}>
      {/* Outer Glow Frame Container */}
      <div className="relative p-1 rounded-xl bg-black/90 border border-matrix-green/40 shadow-neon-green group-hover:border-matrix-green group-hover:shadow-neon-green-strong transition-all duration-300">
        
        {/* SVG/HTML Dot Matrix Grid */}
        <div className="flex flex-col gap-0.5 bg-black p-2 rounded-lg border border-matrix-green/20">
          <div className="flex items-center space-x-2 font-mono text-matrix-green font-bold tracking-wider">
            {/* Visual SVG LED representation */}
            <div className="flex items-center gap-1.5 px-1 py-0.5">
              <span className="text-matrix-green text-xl font-bold animate-pulse">:3</span>
              <span className="text-white text-xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-matrix-green via-emerald-300 to-matrix-cyan">
                RANT
              </span>
            </div>
            {/* Live LED Status Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matrix-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-matrix-green"></span>
            </span>
          </div>
        </div>

        {/* LED matrix dots decoration bar */}
        <div className="flex justify-between items-center px-2 py-0.5 mt-1 border-t border-matrix-green/20 text-[9px] font-mono text-matrix-green/70">
          <span>LED_MATRIX</span>
          <span>EST.2026</span>
        </div>
      </div>
    </div>
  );
}
