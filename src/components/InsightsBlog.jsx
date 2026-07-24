import React from 'react';
import { BookOpen, ArrowUpRight, Clock, Tag } from 'lucide-react';

export default function InsightsBlog() {
  const articles = [
    {
      id: 1,
      title: 'Why 90% of Small Business Websites Fail (And How to Fix It)',
      excerpt: 'Most local business sites suffer from bloated templates, slow mobile loads, and weak CTA placement. Learn the 3 design changes that double conversions.',
      date: 'JUL 18, 2026',
      readTime: '4 min read',
      tag: 'GROWTH STRATEGY'
    },
    {
      id: 2,
      title: 'Monospace Aesthetics & Modern UX: The Power of Retro-Tech',
      excerpt: 'Why high-contrast cyberpunk and retro-hacker aesthetics are winning user attention in an ocean of bland corporate sans-serif websites.',
      date: 'JUL 10, 2026',
      readTime: '6 min read',
      tag: 'UI/UX DESIGN'
    },
    {
      id: 3,
      title: 'Lighthouse 100: How We Achieve Sub-Second Mobile Load Times',
      excerpt: 'A deep dive into Next.js server components, web font subsetting, CSS containment, and zero-javascript hydration optimization.',
      date: 'JUN 28, 2026',
      readTime: '5 min read',
      tag: 'ENGINEERING'
    }
  ];

  return (
    <section className="py-24 bg-black/30 relative border-b border-matrix-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TECHNICAL INSIGHTS & ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industry <span className="text-matrix-green underline decoration-matrix-green/40">Knowledge Base</span>
          </h2>
          <p className="text-matrix-muted text-base sm:text-lg">
            Actionable insights on web development, conversion rate optimization, and digital strategy for small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="matrix-card-border bg-matrix-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-matrix-muted mb-4">
                  <span className="text-matrix-green font-bold bg-matrix-green/10 px-2.5 py-1 rounded border border-matrix-green/30">
                    {article.tag}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-matrix-green transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-matrix-muted text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-matrix-border/50 flex items-center justify-between text-xs font-mono text-matrix-green font-semibold">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
