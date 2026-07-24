import React from 'react';
import LedLogo from './LedLogo';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer({ onOpenPrivacy, onOpenTerms }) {
  return (
    <footer className="bg-black/50 border-t border-matrix-border text-matrix-muted font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-matrix-border/60">
          
          {/* Col 1: Brand Logo & Mission */}
          <div className="md:col-span-5 space-y-4">
            <LedLogo size="sm" />
            <p className="text-xs text-matrix-muted leading-relaxed max-w-sm font-mono pt-2">
              RANT (:3 RANT) — Digital influence engineered for small business growth by Nishank & Prince. High-performing custom web development, retro-tech UI design, and sub-second speed optimization.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/not_vishu_.anymore/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-matrix-dark border border-matrix-border text-matrix-muted hover:text-matrix-green hover:border-matrix-green/50 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all"
                title="Nishank on Instagram (@not_vishu_.anymore)"
                aria-label="Nishank Instagram Profile"
              >
                <Instagram className="w-4 h-4 text-matrix-green" />
              </a>
              <a
                href="https://github.com/nishankgupta08-byte"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-matrix-dark border border-matrix-border text-matrix-muted hover:text-matrix-green hover:border-matrix-green/50 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all"
                title="Nishank on GitHub (@nishankgupta08-byte)"
                aria-label="Nishank GitHub Profile"
              >
                <Github className="w-4 h-4 text-matrix-green" />
              </a>
              <a
                href="https://www.linkedin.com/in/nishank-gupta-7167a8377"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-matrix-dark border border-matrix-border text-matrix-muted hover:text-matrix-green hover:border-matrix-green/50 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all"
                title="Nishank on LinkedIn"
                aria-label="Nishank LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-matrix-green" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-matrix-border pb-1">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-matrix-green transition-colors inline-block py-1">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-matrix-green transition-colors inline-block py-1">Portfolio & Case Studies</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-matrix-green transition-colors inline-block py-1">Scope & Timeline Calculator</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-matrix-green transition-colors inline-block py-1">Why Choose RANT</a>
              </li>
              <li>
                <a href="#team" className="hover:text-matrix-green transition-colors inline-block py-1">Founders & Team</a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-matrix-green transition-colors inline-block py-1">Developer CLI</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & System Status */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-matrix-border pb-1">
              LEGAL & STATUS
            </h4>
            <div className="flex flex-col space-y-2">
              <button
                onClick={onOpenPrivacy}
                className="text-left text-matrix-muted hover:text-matrix-green transition-colors py-1 min-h-[44px] inline-flex items-center"
              >
                Privacy Policy & Data Security
              </button>
              <button
                onClick={onOpenTerms}
                className="text-left text-matrix-muted hover:text-matrix-green transition-colors py-1 min-h-[44px] inline-flex items-center"
              >
                Terms of Service & SLA
              </button>
            </div>

            <div className="pt-3">
              <div className="p-3 rounded-lg bg-matrix-card border border-matrix-border flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-2 text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span>SYSTEM STATUS: 100% OPERATIONAL</span>
                </span>
                <span className="text-matrix-muted">V2.6</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-matrix-muted gap-4">
          <p>© {new Date().getFullYear()} RANT Agency (:3 RANT). All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Crafted by Nishank & Prince with</span>
            <span className="text-matrix-green font-bold">#39FF14 Neon Matrix</span>.
          </p>
        </div>

      </div>
    </footer>
  );
}
