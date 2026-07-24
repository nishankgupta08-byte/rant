import React, { useState } from 'react';
import { Calculator, Check, Zap, Sparkles, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectEstimator({ onSelectEstimate }) {
  const [projectType, setProjectType] = useState('full-web');
  const [selectedFeatures, setSelectedFeatures] = useState(['mobile-opt', 'seo-package']);
  const [speed, setSpeed] = useState('fast');

  const projectTypes = [
    {
      id: 'starter',
      name: 'Starter Web Presence',
      baseDays: 10,
      complexity: 'Core Scope',
      desc: 'Ideal for local businesses needing a clean 3-5 page high-converting site.'
    },
    {
      id: 'full-web',
      name: 'Full Brand & Web Overhaul',
      baseDays: 18,
      complexity: 'Full Custom Scope',
      desc: 'Complete custom website with retro-tech UI design tokens & micro-animations.'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Growth Store',
      baseDays: 25,
      complexity: 'E-Com Custom Scope',
      desc: 'Stripe/Shopify powered custom storefront engineered for high conversion.'
    },
    {
      id: 'custom-app',
      name: 'Custom Web Application',
      baseDays: 35,
      complexity: 'Enterprise App Scope',
      desc: 'Complex dashboard, client portal, or custom SaaS web application.'
    }
  ];

  const featureOptions = [
    { id: 'mobile-opt', name: 'Mobile-First Touch Optimization', days: 2 },
    { id: 'seo-package', name: 'Local SEO & Schema Markup', days: 3 },
    { id: 'cms-admin', name: 'Easy CMS Content Management', days: 4 },
    { id: 'matrix-fx', name: 'Custom Retro-Tech & Matrix FX', days: 3 },
    { id: 'conversion-funnel', name: 'A/B Tested Lead Conversion Funnel', days: 4 },
    { id: 'analytics-setup', name: 'Custom Telemetry & Heatmaps', days: 2 },
  ];

  const speedOptions = [
    { id: 'standard', name: 'Standard Delivery', daysAdjustment: 0 },
    { id: 'fast', name: 'Fast-Track (2-3 Weeks)', daysAdjustment: -4 },
    { id: 'rush', name: 'Priority Sprint (7-10 Days)', daysAdjustment: -8 },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Scope & Timeline Calculations
  const selectedTypeObj = projectTypes.find(t => t.id === projectType) || projectTypes[1];
  const selectedSpeedObj = speedOptions.find(s => s.id === speed) || speedOptions[0];

  const totalDays = Math.max(5, selectedTypeObj.baseDays + selectedFeatures.length * 1.5 + selectedSpeedObj.daysAdjustment);

  const handleApplyEstimate = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#39FF14', '#00e5ff', '#ffffff']
      });
    } catch (e) {}

    const summaryText = `Project Type: ${selectedTypeObj.name}\nScope Tier: ${selectedTypeObj.complexity}\nEstimated Delivery: ~${Math.round(totalDays)} business days\nSelected Features: ${selectedFeatures.map(f => featureOptions.find(opt => opt.id === f)?.name).join(', ')}`;
    
    if (onSelectEstimate) {
      onSelectEstimate(summaryText);
    }

    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-transparent relative border-b border-matrix-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE SCOPE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Build Your <span className="text-matrix-green underline decoration-matrix-green/40">RANT Project</span> Scope
          </h2>
          <p className="text-matrix-muted text-base sm:text-lg">
            Configure your exact project requirements below to see a transparent delivery timeline and scope proposal.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Select Project Type */}
            <div className="bg-matrix-card rounded-2xl p-6 sm:p-8 border border-matrix-border">
              <h3 className="text-lg font-mono font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-matrix-green text-black flex items-center justify-center text-xs">1</span>
                <span>SELECT PROJECT TYPE</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-5 rounded-xl text-left border transition-all min-h-[44px] ${
                      projectType === type.id
                        ? 'border-matrix-green bg-matrix-green/10 shadow-neon-green text-white'
                        : 'border-matrix-border bg-matrix-dark/80 hover:border-matrix-green/40 text-matrix-muted'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-white text-base">{type.name}</span>
                      <span className="font-mono text-xs text-matrix-green font-bold bg-black px-2 py-0.5 rounded border border-matrix-green/30">
                        {type.complexity}
                      </span>
                    </div>
                    <p className="text-xs text-matrix-muted leading-relaxed">{type.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Add-on Features */}
            <div className="bg-matrix-card rounded-2xl p-6 sm:p-8 border border-matrix-border">
              <h3 className="text-lg font-mono font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-matrix-green text-black flex items-center justify-center text-xs">2</span>
                <span>SELECT DESIRED FEATURES</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-4 rounded-xl border flex items-center justify-between text-left transition-all min-h-[44px] ${
                        isChecked
                          ? 'border-matrix-green bg-matrix-green/10 text-white'
                          : 'border-matrix-border bg-matrix-dark/60 text-matrix-muted hover:border-matrix-border/80'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-matrix-green border-matrix-green text-black' : 'border-matrix-border bg-black'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-mono font-semibold text-white">{feature.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-matrix-green font-bold">INCLUDED</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Speed */}
            <div className="bg-matrix-card rounded-2xl p-6 sm:p-8 border border-matrix-border">
              <h3 className="text-lg font-mono font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-matrix-green text-black flex items-center justify-center text-xs">3</span>
                <span>DELIVERY SPEED</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {speedOptions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSpeed(s.id)}
                    className={`p-4 rounded-xl border text-center transition-all min-h-[44px] ${
                      speed === s.id
                        ? 'border-matrix-green bg-matrix-green/10 text-white shadow-neon-green'
                        : 'border-matrix-border bg-matrix-dark/60 text-matrix-muted hover:border-matrix-green/40'
                    }`}
                  >
                    <span className="block font-mono text-xs font-bold text-white">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary Box (4 cols sticky) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-matrix-card rounded-2xl p-6 border-2 border-matrix-green/50 shadow-neon-green space-y-6">
              
              <div className="flex items-center justify-between border-b border-matrix-border pb-4">
                <h4 className="font-mono text-sm font-bold text-matrix-green uppercase">SCOPE SUMMARY</h4>
                <Sparkles className="w-4 h-4 text-matrix-green" />
              </div>

              {/* Scope Tier Header */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-matrix-muted">PROJECT CLASSIFICATION</span>
                <div className="text-2xl font-extrabold text-white font-mono flex items-baseline gap-1">
                  <span className="text-matrix-green">{selectedTypeObj.complexity}</span>
                </div>
                <p className="text-[11px] text-matrix-muted font-mono pt-1">
                  * Custom engineered by Nishank & Prince.
                </p>
              </div>

              {/* Timeline Calculation */}
              <div className="p-4 rounded-xl bg-matrix-dark border border-matrix-border space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-matrix-muted flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-matrix-green" />
                    <span>Estimated Delivery:</span>
                  </span>
                  <span className="font-bold text-white">{Math.round(totalDays)} Business Days</span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <span className="text-matrix-muted flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-matrix-cyan" />
                    <span>Quality Guarantee:</span>
                  </span>
                  <span className="text-matrix-cyan font-bold">100/100 Lighthouse</span>
                </div>
              </div>

              {/* Feature summary list */}
              <div className="space-y-2 text-xs font-mono text-matrix-muted border-t border-matrix-border/60 pt-4">
                <div className="text-[11px] font-bold text-matrix-text uppercase">SELECTED SCOPE MODULES:</div>
                <div className="text-white font-bold">• {selectedTypeObj.name}</div>
                {selectedFeatures.map((fId) => (
                  <div key={fId} className="pl-2">
                    + {featureOptions.find(opt => opt.id === fId)?.name}
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={handleApplyEstimate}
                className="w-full py-4 px-6 font-mono text-xs font-bold uppercase tracking-wider text-black bg-matrix-green rounded-xl shadow-neon-green hover:bg-matrix-green-light hover:shadow-neon-green-strong transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>Send This Brief To RANT</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
