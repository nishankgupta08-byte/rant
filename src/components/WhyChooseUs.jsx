import React from 'react';
import { Target, Smile, Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function WhyChooseUs({ onOpenEstimator }) {
  const points = [
    {
      icon: Target,
      number: '01',
      title: 'Small Business Focus',
      highlight: 'No massive corporate fluff',
      description: "We don't chase massive corporate contracts. We exist to give small businesses the enterprise-level digital presence they deserve.",
      badge: 'DEDICATED PARTNER'
    },
    {
      icon: Smile,
      number: '02',
      title: 'The ":3" Philosophy',
      highlight: 'Technical mastery + playful edge',
      description: 'We combine serious technical expertise with a creative, approachable, and slightly playful edge. We make the web development process fun and stress-free.',
      badge: 'STRESS-FREE DEV'
    },
    {
      icon: Award,
      number: '03',
      title: 'Results-Driven',
      highlight: 'Your growth is our metric',
      description: "We measure our success by your success. If your website isn't bringing you more influence and customers, our job isn't done.",
      badge: 'MEASURABLE ROI'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-transparent relative border-b border-matrix-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>WHY CHOOSE RANT?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why We're <span className="text-matrix-green underline decoration-matrix-green/40">Different</span>
          </h2>
          <p className="text-matrix-muted text-base sm:text-lg">
            Most agencies ship generic, slow templates. Nishank & Prince engineer high-performing digital engines custom-built for small business growth.
          </p>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const IconComp = point.icon;
            return (
              <div
                key={index}
                className="matrix-card-border bg-matrix-card rounded-2xl p-8 relative flex flex-col justify-between group shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-extrabold text-matrix-green/40 group-hover:text-matrix-green transition-colors">
                      {point.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-matrix-green/10 text-matrix-green border border-matrix-green/30">
                      {point.badge}
                    </span>
                  </div>

                  <div className="p-3.5 w-fit rounded-xl bg-black border border-matrix-border mb-6 group-hover:border-matrix-green group-hover:shadow-neon-green transition-all">
                    <IconComp className="w-7 h-7 text-matrix-green" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-matrix-green transition-colors">
                    {point.title}
                  </h3>

                  {/* Sub highlight */}
                  <div className="text-xs font-mono text-matrix-cyan mb-4 font-semibold">
                    {point.highlight}
                  </div>

                  {/* Description */}
                  <p className="text-matrix-muted text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Accent Bottom line */}
                <div className="mt-8 pt-4 border-t border-matrix-border/50 flex items-center text-xs font-mono text-matrix-green">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  <span>Verified RANT Promise</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA Box */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-matrix-card via-matrix-dark to-black border border-matrix-green/40 shadow-neon-green flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white font-mono">
              Ready to Upgrade Your Small Business Website?
            </h3>
            <p className="text-sm text-matrix-muted">
              Get a customized project scope with zero sales pressure or hidden bloat.
            </p>
          </div>
          <button
            onClick={onOpenEstimator}
            className="px-6 py-3.5 font-mono text-xs font-bold uppercase text-black bg-matrix-green rounded-xl shadow-neon-green hover:bg-matrix-green-light transition-all shrink-0 flex items-center gap-2 min-h-[48px]"
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>Calculate Project Scope</span>
          </button>
        </div>

      </div>
    </section>
  );
}
