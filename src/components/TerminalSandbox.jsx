import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';

export default function TerminalSandbox({ onOpenEstimator, onToggleMatrix }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'RANT Interactive Console v2.6. Type "help" to view available commands.' }
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', content: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: `Available Commands:
  • help       : Show this help menu
  • services   : List RANT core web agency offerings
  • founders   : Display team & founders information
  • quote      : Launch interactive project scope estimator
  • matrix     : Toggle retro matrix rain background effect
  • contact    : Jump directly to contact form
  • clear      : Clear console output screen`
        });
        break;

      case 'services':
        newHistory.push({
          type: 'output',
          content: `RANT OFFERINGS:
1. Custom Web Development (React / Next.js / Sub-second speeds)
2. Mobile-First Touch Design (44px+ touch targets, 60fps)
3. Conversion Optimization (A/B funnels, 3x lead growth)
4. Brand Systems & Retro-Tech UI Tokens
5. Local SEO & Schema Acceleration`
        });
        break;

      case 'founders':
      case 'team':
        newHistory.push({
          type: 'output',
          content: `FOUNDERS OF RANT:
  • Nishank (Founder & Head of Development): Visionary technical architect & lead developer.
  • Prince (Co-Owner & Strategist): Operational force & client growth strategist.`
        });
        break;

      case 'quote':
      case 'estimator':
        newHistory.push({
          type: 'output',
          content: `[SYSTEM]: Launching Project Scope Estimator...`
        });
        onOpenEstimator();
        break;

      case 'matrix':
        onToggleMatrix();
        newHistory.push({
          type: 'output',
          content: `[SYSTEM]: Matrix FX state toggled.`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `[SYSTEM]: Scrolling to contact form...`
        });
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          content: `Command not recognized: "${cmd}". Type "help" for valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-20 bg-matrix-bg relative border-b border-matrix-border/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVELOPER CONSOLE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
            Interactive RANT CLI
          </h2>
          <p className="text-matrix-muted text-xs sm:text-sm font-mono">
            Try typing <span className="text-matrix-green font-bold">help</span>, <span className="text-matrix-green font-bold">founders</span>, or <span className="text-matrix-green font-bold">quote</span> into the terminal console below.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="bg-black rounded-2xl border border-matrix-green/40 shadow-neon-green overflow-hidden font-mono text-xs">
          
          {/* Header Bar */}
          <div className="bg-matrix-dark px-4 py-2.5 border-b border-matrix-border flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-matrix-green" />
            </div>
            <span className="text-matrix-green/80 font-bold text-[11px]">
              guest@rant-cli:~#
            </span>
            <div className="text-[10px] text-matrix-muted">BASH / TTY1</div>
          </div>

          {/* Terminal History */}
          <div className="p-6 space-y-3 min-h-[220px] max-h-[320px] overflow-y-auto bg-black text-matrix-text">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'user' ? (
                  <div className="text-matrix-green font-bold">{item.content}</div>
                ) : item.type === 'system' ? (
                  <div className="text-matrix-cyan italic">{item.content}</div>
                ) : (
                  <pre className="text-matrix-muted whitespace-pre-wrap font-mono leading-relaxed pl-2 border-l border-matrix-green/30">
                    {item.content}
                  </pre>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Form Input Line */}
          <form onSubmit={handleCommand} className="border-t border-matrix-border bg-matrix-dark px-4 py-3 flex items-center gap-2">
            <span className="text-matrix-green font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help' or 'founders'..."
              className="flex-1 bg-transparent text-matrix-green font-mono focus:outline-none placeholder-matrix-muted/50 text-xs min-h-[44px]"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded bg-matrix-green text-black font-bold text-[11px] hover:bg-matrix-green-light min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
