import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Zap, Code2, Rocket } from 'lucide-react';

export default function Hero({ onOpenEstimator }) {
  const [typedText, setTypedText] = useState('');
  const fullText = "We are RANT. We build bold, high-performing websites that turn your visitors into loyal customers. Stand out from the noise and make a lasting impact.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-matrix-bg border-b border-matrix-border/50">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-matrix-green/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-matrix-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Call To Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-matrix-dark border border-matrix-green/40 shadow-neon-green">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matrix-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-matrix-green"></span>
              </span>
              <span className="text-xs font-mono text-matrix-green uppercase tracking-wider font-semibold">
                ACCEPTING NEW PROJECTS FOR Q3/Q4
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Digital Influence for{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-matrix-green via-emerald-300 to-matrix-cyan underline decoration-matrix-green/40 decoration-wavy">
                Small Businesses.
              </span>
            </h1>

            {/* Sub-headline / Terminal Typing Effect */}
            <div className="p-4 rounded-xl bg-matrix-card border border-matrix-border relative font-mono text-sm sm:text-base text-matrix-muted leading-relaxed min-h-[90px]">
              <div className="flex items-center justify-between text-xs text-matrix-green/70 mb-2 font-bold border-b border-matrix-border/50 pb-1.5">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-matrix-green" />
                  <span>RANT_MANIFESTO.sh</span>
                </span>
                <span className="text-[10px] text-matrix-muted">READY</span>
              </div>
              <p className="text-matrix-text font-mono">
                {typedText}
                <span className="inline-block w-2 h-4 ml-1 bg-matrix-green animate-terminal-cursor align-middle" />
              </p>
            </div>

            {/* Key Differentiator Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-matrix-dark/80 border border-matrix-border text-center">
                <div className="text-xl sm:text-2xl font-mono font-bold text-matrix-green">100/100</div>
                <div className="text-[11px] font-mono text-matrix-muted uppercase mt-0.5">Lighthouse Score</div>
              </div>
              <div className="p-3 rounded-lg bg-matrix-dark/80 border border-matrix-border text-center">
                <div className="text-xl sm:text-2xl font-mono font-bold text-matrix-cyan">0 Generic</div>
                <div className="text-[11px] font-mono text-matrix-muted uppercase mt-0.5">Templates</div>
              </div>
              <div className="p-3 rounded-lg bg-matrix-dark/80 border border-matrix-border text-center">
                <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">3x ROI</div>
                <div className="text-[11px] font-mono text-matrix-muted uppercase mt-0.5">Conversion Uplift</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenEstimator}
                className="px-7 py-4 text-sm font-mono font-bold uppercase tracking-wider text-black bg-matrix-green rounded-xl shadow-neon-green hover:bg-matrix-green-light hover:shadow-neon-green-strong hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center min-h-[48px] min-w-[48px] gap-2"
              >
                <Zap className="w-5 h-5 fill-black" />
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#portfolio"
                className="px-7 py-4 text-sm font-mono font-bold uppercase tracking-wider text-white bg-matrix-card border border-matrix-border hover:border-matrix-green/60 hover:text-matrix-green rounded-xl transition-all duration-200 flex items-center justify-center min-h-[48px] min-w-[48px] gap-2"
              >
                <span>View Our Work</span>
              </a>
            </div>

          </div>

          {/* Right Column: Retro Hacker / Cyber Console Demo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-matrix-card border border-matrix-green/40 shadow-neon-green overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-black/90 px-4 py-3 border-b border-matrix-border flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-matrix-green" />
                </div>
                <div className="text-xs font-mono text-matrix-green/80 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>rant-core-system v2.6</span>
                </div>
                <div className="text-[10px] font-mono text-matrix-muted">SSL 256-BIT</div>
              </div>

              {/* Console Output Body */}
              <div className="p-6 font-mono text-xs space-y-4 bg-black/95">
                
                {/* System Diagnostics */}
                <div className="space-y-1 text-matrix-muted">
                  <p className="text-matrix-green">$ systemctl status rant-agency</p>
                  <p className="text-emerald-400">● Active: running (high-performance mode)</p>
                  <p className="pl-4">Target: Small Businesses Seeking Expansion</p>
                  <p className="pl-4">Stack: Next.js + React + Tailwind + WebGL</p>
                </div>

                {/* Simulated Performance Benchmark */}
                <div className="p-3.5 rounded-lg bg-matrix-dark border border-matrix-border space-y-2">
                  <div className="flex justify-between items-center text-matrix-text font-bold">
                    <span>PERFORMANCE BENCHMARK</span>
                    <span className="text-matrix-green font-mono">100 / 100</span>
                  </div>
                  
                  {/* Progress bars */}
                  <div className="space-y-1.5 pt-1">
                    <div>
                      <div className="flex justify-between text-[10px] text-matrix-muted mb-0.5">
                        <span>Speed Index</span>
                        <span className="text-matrix-green">0.3s</span>
                      </div>
                      <div className="h-1.5 w-full bg-matrix-border rounded-full overflow-hidden">
                        <div className="h-full bg-matrix-green w-[98%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-matrix-muted mb-0.5">
                        <span>Mobile Accessibility</span>
                        <span className="text-matrix-cyan">100%</span>
                      </div>
                      <div className="h-1.5 w-full bg-matrix-border rounded-full overflow-hidden">
                        <div className="h-full bg-matrix-cyan w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Founders Tag */}
                <div className="p-3 rounded-lg bg-matrix-green/10 border border-matrix-green/30 text-matrix-green flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-matrix-green animate-bounce" />
                    <span className="font-bold">Led by Founders: Nishank & Prince</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold bg-matrix-green text-black px-2 py-0.5 rounded">
                    VERIFIED
                  </span>
                </div>

              </div>

              {/* Bottom Glowing Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-matrix-green via-emerald-400 to-matrix-cyan" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
