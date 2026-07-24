import React, { useState } from 'react';
import { Code, Smartphone, TrendingUp, Palette, Search, Check, Sparkles, Monitor, Tablet } from 'lucide-react';

export default function Services({ onOpenEstimator }) {
  const [activeDeviceTab, setActiveDeviceTab] = useState('mobile');

  const servicesList = [
    {
      id: 'custom-web',
      icon: Code,
      title: 'Custom Web Development',
      badge: 'CORE OFFERING',
      description: "No generic templates. We build custom, lightning-fast websites tailored to your brand's unique voice and goals.",
      features: [
        'Clean React / Next.js architecture',
        'Sub-second load speeds & 100/100 Lighthouse score',
        'Zero bloat, zero heavy page builders',
        'Custom admin content controls'
      ],
      color: 'matrix-green',
      hexColor: '#39FF14'
    },
    {
      id: 'mobile-first',
      icon: Smartphone,
      title: 'Mobile-First Design',
      badge: '60%+ TRAFFIC',
      description: "Over half of web traffic comes from phones. We ensure your site looks flawless and functions perfectly on every device.",
      features: [
        'Touch-optimized 44px+ hit targets',
        'Fluid responsive layout breakpoints',
        'PWA & offline readiness capabilities',
        'Smooth 60fps micro-animations'
      ],
      color: 'matrix-cyan',
      hexColor: '#00e5ff'
    },
    {
      id: 'conversion-opt',
      icon: TrendingUp,
      title: 'Conversion Optimization',
      badge: 'HIGH ROI',
      description: "A pretty website isn't enough. We design user journeys that guide your customers straight to the checkout or contact form.",
      features: [
        'Frictionless lead funnel design',
        'Clear, high-converting CTAs',
        'A/B tested form flows',
        'Analytics & heatmap telemetry setup'
      ],
      color: 'purple-400',
      hexColor: '#c084fc'
    },
    {
      id: 'brand-system',
      icon: Palette,
      title: 'Brand Identity & Design System',
      badge: 'DISTINCTIVE',
      description: "Break away from cookie-cutter corporate designs with custom retro-tech visual aesthetics, glowing accents, and bespoke typography.",
      features: [
        'Custom LED matrix & vector logotypes',
        'Comprehensive UI design token guide',
        'Cohesive dark mode palette',
        'Reusable component library'
      ],
      color: 'emerald-400',
      hexColor: '#34d399'
    },
    {
      id: 'seo-growth',
      icon: Search,
      title: 'SEO & Growth Acceleration',
      badge: 'ORGANIC REACH',
      description: "Rank higher on Google search results with schema-structured data, meta-tag optimization, and instant TTFB response.",
      features: [
        'Structured JSON-LD schema',
        'Google Business Profile integration',
        'Dynamic sitemaps & robots optimization',
        'Local SEO domination strategy'
      ],
      color: 'matrix-green',
      hexColor: '#39FF14'
    }
  ];

  return (
    <section id="services" className="py-24 bg-black/30 relative border-b border-matrix-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Help You <span className="text-matrix-green underline decoration-matrix-green/40">Win</span>
          </h2>
          <p className="text-matrix-muted text-base sm:text-lg font-sans">
            We empower small business owners with high-performing, custom digital assets engineered to outshine competitors and capture market share.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="matrix-card-border bg-matrix-card rounded-2xl p-8 flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-black border border-matrix-border group-hover:border-matrix-green group-hover:shadow-neon-green transition-all">
                      <IconComponent className="w-7 h-7 text-matrix-green" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-matrix-green/10 text-matrix-green border border-matrix-green/30">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-matrix-green transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-matrix-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 border-t border-matrix-border/60 pt-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs font-mono text-matrix-text">
                        <Check className="w-4 h-4 text-matrix-green mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-8 mt-6 border-t border-matrix-border/40">
                  <button
                    onClick={onOpenEstimator}
                    className="w-full py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider text-matrix-text bg-matrix-dark border border-matrix-border rounded-xl hover:bg-matrix-green hover:text-black hover:border-matrix-green transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <span>Request Estimate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Device Viewport Switcher Preview */}
        <div className="mt-20 p-8 rounded-2xl bg-matrix-card border border-matrix-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Mobile-First Guarantee</h3>
              <p className="text-sm text-matrix-muted mt-1">
                Test how your site adapts across screen viewports with pixel-perfect responsiveness.
              </p>
            </div>
            
            {/* Device Tabs */}
            <div className="flex items-center space-x-2 bg-black p-1.5 rounded-xl border border-matrix-border">
              <button
                onClick={() => setActiveDeviceTab('mobile')}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all min-h-[44px] ${
                  activeDeviceTab === 'mobile'
                    ? 'bg-matrix-green text-black shadow-neon-green'
                    : 'text-matrix-muted hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile (375px)</span>
              </button>

              <button
                onClick={() => setActiveDeviceTab('tablet')}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all min-h-[44px] ${
                  activeDeviceTab === 'tablet'
                    ? 'bg-matrix-green text-black shadow-neon-green'
                    : 'text-matrix-muted hover:text-white'
                }`}
              >
                <Tablet className="w-4 h-4" />
                <span>Tablet (768px)</span>
              </button>

              <button
                onClick={() => setActiveDeviceTab('desktop')}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all min-h-[44px] ${
                  activeDeviceTab === 'desktop'
                    ? 'bg-matrix-green text-black shadow-neon-green'
                    : 'text-matrix-muted hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Desktop (1440px)</span>
              </button>
            </div>
          </div>

          {/* Interactive Responsive Viewport Canvas Mockup */}
          <div className="flex justify-center bg-black/90 p-6 rounded-xl border border-matrix-border overflow-hidden">
            <div
              className={`transition-all duration-500 bg-matrix-dark border border-matrix-green/30 rounded-xl p-4 shadow-2xl ${
                activeDeviceTab === 'mobile'
                  ? 'w-[340px]'
                  : activeDeviceTab === 'tablet'
                  ? 'w-[640px]'
                  : 'w-full max-w-4xl'
              }`}
            >
              {/* Mini Browser Bar */}
              <div className="flex items-center justify-between border-b border-matrix-border pb-3 mb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-matrix-green" />
                </div>
                <div className="text-[10px] font-mono text-matrix-muted bg-black px-3 py-1 rounded-full border border-matrix-border">
                  https://your-business.com
                </div>
                <div className="text-[10px] font-mono text-matrix-green">60 FPS</div>
              </div>

              {/* Mock Web Content inside Viewport */}
              <div className="space-y-3">
                <div className="h-6 bg-matrix-green/20 rounded-md w-3/4 animate-pulse" />
                <div className="h-3 bg-matrix-border rounded w-full" />
                <div className="h-3 bg-matrix-border rounded w-5/6" />
                <div className="pt-2 flex gap-2">
                  <div className="h-8 bg-matrix-green text-black rounded px-4 flex items-center text-[10px] font-mono font-bold">
                    CALL TO ACTION
                  </div>
                  <div className="h-8 border border-matrix-border rounded px-4 flex items-center text-[10px] font-mono text-matrix-muted">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
