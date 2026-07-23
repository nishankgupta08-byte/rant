import React from 'react';
import { Users, Code, Compass, Terminal, CheckCircle, Instagram } from 'lucide-react';

export default function AboutTeam() {
  return (
    <section id="team" className="py-24 bg-matrix-dark relative border-b border-matrix-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>ABOUT US & THE TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet the Minds <span className="text-matrix-green underline decoration-matrix-green/40">Behind RANT</span>
          </h2>
          <p className="text-matrix-muted text-base sm:text-lg leading-relaxed">
            We aren't just developers; we are digital growth partners for small businesses. We understand that as a small business owner, you need a website that actually works for you—building trust and driving sales.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Founder 1: Nishank (Founder & Head of Development) */}
          <div className="matrix-card-border bg-matrix-card rounded-2xl p-8 relative group flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-black border border-matrix-green/40 shadow-neon-green">
                  <Code className="w-8 h-8 text-matrix-green" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/not_vishu_.anymore/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-black border border-matrix-border text-matrix-muted hover:text-matrix-green hover:border-matrix-green transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title="Nishank on Instagram"
                    aria-label="Nishank Instagram Profile"
                  >
                    <Instagram className="w-4 h-4 text-matrix-green" />
                  </a>
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded bg-matrix-green/10 text-matrix-green border border-matrix-green/30">
                    FOUNDER & HEAD DEV
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-matrix-green transition-colors">
                Nishank
              </h3>
              <p className="text-xs font-mono text-matrix-cyan mb-4 font-semibold">
                FOUNDER & HEAD OF DEVELOPMENT
              </p>

              <p className="text-matrix-muted text-sm leading-relaxed mb-6">
                The visionary technical leader behind RANT, dedicated to crafting digital experiences that leave a lasting impression. Nishank leads system architecture, sub-second rendering, clean React development, and retro-tech UI engineering.
              </p>
            </div>

            <div className="pt-4 border-t border-matrix-border/60 flex items-center justify-between text-xs font-mono text-matrix-muted">
              <span>SPECIALTY: NEXT.JS & CORE WEB VITALS</span>
              <a
                href="https://www.instagram.com/not_vishu_.anymore/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noreferrer"
                className="text-matrix-green hover:underline flex items-center gap-1"
              >
                <span>@not_vishu_.anymore</span>
              </a>
            </div>
          </div>

          {/* Founder 2: Prince (Co-Owner & Strategist) */}
          <div className="matrix-card-border bg-matrix-card rounded-2xl p-8 relative group flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-black border border-matrix-cyan/40 shadow-neon-cyan">
                  <Compass className="w-8 h-8 text-matrix-cyan" />
                </div>
                <span className="text-[11px] font-mono font-bold px-3 py-1 rounded bg-matrix-cyan/10 text-matrix-cyan border border-matrix-cyan/30">
                  CO-OWNER & STRATEGIST
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-matrix-cyan transition-colors">
                Prince
              </h3>
              <p className="text-xs font-mono text-matrix-cyan mb-4 font-semibold">
                STRATEGY & OPERATIONS FORCE
              </p>

              <p className="text-matrix-muted text-sm leading-relaxed mb-6">
                The operational force ensuring every project is delivered on time, on brand, and engineered for success. Prince manages client growth strategy, conversion funnel architecture, and partner relations.
              </p>
            </div>

            <div className="pt-4 border-t border-matrix-border/60 flex items-center justify-between text-xs font-mono text-matrix-muted">
              <span>SPECIALTY: CLIENT ROI & CONVERSION FUNNELS</span>
              <span className="text-matrix-cyan">100% ON-TIME</span>
            </div>
          </div>

        </div>

        {/* Live Studio Values Terminal Stream */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-2xl bg-black border border-matrix-border font-mono text-xs text-matrix-muted">
          <div className="flex items-center justify-between border-b border-matrix-border pb-3 mb-4 text-matrix-green font-bold">
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>RANT_STUDIO_VALUES.log</span>
            </span>
            <span className="text-[10px] text-matrix-muted">ENV: PRODUCTION</span>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-2 text-matrix-text">
              <CheckCircle className="w-3.5 h-3.5 text-matrix-green shrink-0" />
              <span>1. Direct founder communication with Nishank & Prince — no account manager middlemen.</span>
            </p>
            <p className="flex items-center gap-2 text-matrix-text">
              <CheckCircle className="w-3.5 h-3.5 text-matrix-green shrink-0" />
              <span>2. 100% code ownership handed over to you upon project launch.</span>
            </p>
            <p className="flex items-center gap-2 text-matrix-text">
              <CheckCircle className="w-3.5 h-3.5 text-matrix-green shrink-0" />
              <span>3. Transparent project scopes with clear milestones and zero hidden bloat.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
