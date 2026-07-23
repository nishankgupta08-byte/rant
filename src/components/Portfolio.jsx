import React, { useState } from 'react';
import { ExternalLink, Sparkles, Trophy, ArrowUpRight, X, Gauge, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'cyber-bite',
      title: 'CyberBite Artisanal Roastery',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      imageDesc: 'Dark mode cyber-aesthetic storefront with custom subscription engine',
      roi: '+280% Subscription Sales',
      lighthouse: '100 / 100',
      speed: '0.28s',
      stack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
      description: 'A high-converting direct-to-consumer artisanal coffee subscription platform built with custom dark mode retro UI tokens.',
      problem: 'The client was losing 65% of mobile traffic on a bloated WordPress site taking 5.2 seconds to load.',
      solution: 'We engineered a headless Next.js e-commerce app with instant edge routing, sub-second checkout, and bold cyberpunk aesthetic.',
      results: [
        'Mobile page load dropped from 5.2s to 0.28s',
        'Direct monthly recurring subscriptions increased by 280%',
        'Lighthouse performance and accessibility score of 100/100'
      ]
    },
    {
      id: 'apex-fitness',
      title: 'Apex Athletic Performance',
      category: 'local',
      categoryLabel: 'Local Business',
      imageDesc: 'High energy bold landing page with live class scheduling & booking',
      roi: '+310% Class Bookings',
      lighthouse: '99 / 100',
      speed: '0.35s',
      stack: ['Vite', 'React', 'Tailwind', 'Cal.com API'],
      description: 'Bespoke web application for a premier fitness facility featuring instant class scheduling and automated trial booking.',
      problem: 'Generic Squarespace site provided no lead capture or online booking integration for local prospects.',
      solution: 'Designed a high-impact mobile-first landing experience with 1-click trial registration and local Google SEO schema.',
      results: [
        'Over 310% increase in weekly free trial registrations',
        'Ranked #1 on Google Local Map Pack for target city queries',
        'Zero drop-offs during 44px touch-optimized mobile booking flow'
      ]
    },
    {
      id: 'vanguard-law',
      title: 'Vanguard Legal Partners',
      category: 'saas',
      categoryLabel: 'B2B Services',
      imageDesc: 'Sleek dark executive UI for corporate legal consultation',
      roi: '+190% High-Value Retainers',
      lighthouse: '100 / 100',
      speed: '0.31s',
      stack: ['React 18', 'Tailwind', 'Formspree', 'SEO Schema'],
      description: 'A modern, trustworthy digital presence for a boutique legal firm serving tech startups and small business founders.',
      problem: 'Outdated 2018 corporate site failed to communicate technical expertise and premium value proposition.',
      solution: 'Engineered a lightning-fast, accessible website with interactive legal service scope calculator and direct booking funnel.',
      results: [
        'Qualified corporate inquiry leads increased by 190%',
        'Average consultation retainer size doubled',
        'Fully accessible WCAG 2.1 AA compliant across all components'
      ]
    },
    {
      id: 'pixel-craft',
      title: 'PixelCraft Game Studio',
      category: 'creative',
      categoryLabel: 'Cyberpunk/Creative',
      imageDesc: 'Interactive retro game studio showcase with canvas animations',
      roi: '500,000+ Wishlist Hits',
      lighthouse: '98 / 100',
      speed: '0.40s',
      stack: ['React', 'WebGL', 'Three.js', 'Tailwind'],
      description: 'An immersive retro-tech studio portfolio for an indie game development studio featuring interactive canvas effects.',
      problem: 'Standard portfolio sites failed to capture the unique 8-bit / retro hacker aesthetic of their game titles.',
      solution: 'Crafted a matrix-infused landing page with embedded canvas mini-demos, LED dot matrix logos, and Steam wishlist integrations.',
      results: [
        'Generated over 500,000 Steam wishlists in the first 30 days',
        'Featured on top web design inspiration showcases',
        '60fps smooth animations even on low-tier mobile devices'
      ]
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-matrix-dark relative border-b border-matrix-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Work <span className="text-matrix-green underline decoration-matrix-green/40">Speaks Volumes</span>
          </h2>
          <p className="text-matrix-muted text-base sm:text-lg">
            Explore recent projects engineered for small business partners that delivered measurable ROI and sub-second performance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ecommerce', label: 'E-Commerce' },
            { id: 'local', label: 'Local Business' },
            { id: 'saas', label: 'B2B Services' },
            { id: 'creative', label: 'Creative & Cyberpunk' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all min-h-[44px] ${
                filter === tab.id
                  ? 'bg-matrix-green text-black shadow-neon-green'
                  : 'bg-matrix-card text-matrix-muted border border-matrix-border hover:border-matrix-green/50 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="matrix-card-border bg-matrix-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between shadow-xl transition-all duration-300"
            >
              <div>
                {/* Visual Header Banner */}
                <div className="h-48 bg-black/90 p-6 relative flex flex-col justify-between border-b border-matrix-border overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-matrix-green/10 via-transparent to-matrix-cyan/10 pointer-events-none" />
                  
                  {/* Top tags */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded bg-black/80 text-matrix-green border border-matrix-green/40">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-black/90 px-3 py-1 rounded border border-emerald-500/30 flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5" />
                      <span>{project.lighthouse}</span>
                    </span>
                  </div>

                  {/* ROI Tag */}
                  <div className="relative z-10">
                    <div className="text-2xl font-mono font-bold text-white group-hover:text-matrix-green transition-colors">
                      {project.title}
                    </div>
                    <div className="text-xs font-mono text-matrix-green font-bold mt-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-matrix-green" />
                      <span>{project.roi}</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className="text-matrix-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-matrix-dark border border-matrix-border text-matrix-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-4 border-t border-matrix-border/50 bg-black/40 flex items-center justify-between">
                <span className="text-xs font-mono text-matrix-green font-semibold">Click to view full case study</span>
                <ArrowUpRight className="w-4 h-4 text-matrix-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-matrix-card border border-matrix-green/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-matrix-dark text-matrix-muted hover:text-white border border-matrix-border min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Case Study Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <span className="text-xs font-mono text-matrix-green font-bold uppercase tracking-wider">
                CASE STUDY // {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedProject.title}
              </h3>
            </div>

            {/* Key Metrics Pill Row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black border border-matrix-border font-mono">
              <div>
                <div className="text-[10px] text-matrix-muted">IMPACT ROI</div>
                <div className="text-sm font-bold text-matrix-green">{selectedProject.roi}</div>
              </div>
              <div>
                <div className="text-[10px] text-matrix-muted">LIGHTHOUSE</div>
                <div className="text-sm font-bold text-white">{selectedProject.lighthouse}</div>
              </div>
              <div>
                <div className="text-[10px] text-matrix-muted">LOAD TIME</div>
                <div className="text-sm font-bold text-matrix-cyan">{selectedProject.speed}</div>
              </div>
            </div>

            {/* Content: Problem & Solution */}
            <div className="space-y-4 text-sm text-matrix-text">
              <div>
                <h4 className="font-mono font-bold text-matrix-green text-xs uppercase mb-1">The Challenge:</h4>
                <p className="text-matrix-muted">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="font-mono font-bold text-matrix-green text-xs uppercase mb-1">RANT Solution:</h4>
                <p className="text-matrix-muted">{selectedProject.solution}</p>
              </div>

              <div>
                <h4 className="font-mono font-bold text-matrix-green text-xs uppercase mb-2">Verified Results:</h4>
                <ul className="space-y-2">
                  {selectedProject.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-mono text-matrix-text">
                      <CheckCircle className="w-4 h-4 text-matrix-green shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Used */}
            <div className="pt-4 border-t border-matrix-border flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((t, idx) => (
                  <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-matrix-dark text-matrix-muted border border-matrix-border">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 bg-matrix-green text-black font-mono text-xs font-bold rounded-lg hover:bg-matrix-green-light min-h-[44px]"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
