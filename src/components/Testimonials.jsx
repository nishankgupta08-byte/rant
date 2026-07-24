import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "RANT completely transformed our digital storefront. We went from 2-3 inquiries per week to 15+ qualified leads every single week. Best investment our business made this year.",
      author: "Marcus Vance",
      title: "Owner, CyberBite Roastery",
      rating: 5,
      impact: "+280% Subscriptions"
    },
    {
      quote: "The speed is mind-blowing. Our mobile page scores 100/100 on Google Lighthouse. Working with Nishank and Prince was seamless, straightforward, and actually fun.",
      author: "Elena Rostova",
      title: "Founder, Apex Athletic Studio",
      rating: 5,
      impact: "0.28s Load Speed"
    },
    {
      quote: "No generic templates or fake promises. RANT delivered our legal partner portal 4 days ahead of schedule, with zero bugs and flawless mobile responsiveness.",
      author: "David Sterling",
      title: "Managing Partner, Sterling Legal",
      rating: 5,
      impact: "+190% Lead Retainers"
    }
  ];

  return (
    <section className="py-20 bg-transparent relative border-b border-matrix-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
            <Quote className="w-3.5 h-3.5" />
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Ambitious <span className="text-matrix-green underline decoration-matrix-green/40">Small Businesses</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="matrix-card-border bg-matrix-card rounded-2xl p-8 flex flex-col justify-between shadow-xl relative"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center space-x-1 text-matrix-green">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-matrix-green" />
                  ))}
                </div>

                <p className="text-matrix-text text-sm leading-relaxed font-sans italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-matrix-border/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                  <p className="text-xs text-matrix-muted font-mono">{rev.title}</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-matrix-green bg-matrix-green/10 px-2.5 py-1 rounded border border-matrix-green/30">
                  {rev.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
