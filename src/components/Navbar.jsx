import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ChevronRight, Zap, Shield, PhoneCall } from 'lucide-react';
import LedLogo from './LedLogo';

export default function Navbar({ onOpenEstimator, matrixMode, setMatrixMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Why RANT', href: '#why-us' },
    { name: 'Team', href: '#team' },
    { name: 'Console', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-matrix-bg/90 backdrop-blur-md border-b border-matrix-border/80 shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-matrix-green"
            aria-label="RANT Web Agency Homepage"
          >
            <LedLogo size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-matrix-border" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-matrix-muted hover:text-matrix-green hover:bg-matrix-green/10 rounded-full transition-all duration-200 min-h-[44px] inline-flex items-center"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Matrix Rain Toggle */}
            <button
              onClick={() => setMatrixMode(!matrixMode)}
              className={`p-2.5 rounded-lg border text-xs font-mono flex items-center gap-2 min-h-[44px] min-w-[44px] transition-all ${
                matrixMode
                  ? 'border-matrix-green text-matrix-green bg-matrix-green/10 shadow-neon-green'
                  : 'border-matrix-border text-matrix-muted hover:text-white hover:border-matrix-green/50'
              }`}
              title="Toggle Matrix FX"
              aria-label="Toggle Matrix FX background effect"
            >
              <Terminal className="w-4 h-4" />
              <span>{matrixMode ? 'FX: ON' : 'FX: OFF'}</span>
            </button>

            {/* Quick Estimator CTA */}
            <button
              onClick={onOpenEstimator}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-black bg-matrix-green rounded-lg shadow-neon-green hover:bg-matrix-green-light hover:shadow-neon-green-strong transition-all duration-200 min-h-[44px] min-w-[44px]"
            >
              <Zap className="w-4 h-4 mr-1.5 fill-black" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMatrixMode(!matrixMode)}
              className="p-2.5 rounded-lg border border-matrix-border text-matrix-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Matrix mode"
            >
              <Terminal className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-matrix-border text-matrix-text hover:text-matrix-green min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-matrix-dark/95 backdrop-blur-xl border-b border-matrix-border px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-mono text-matrix-text hover:text-matrix-green hover:bg-matrix-green/10 rounded-lg transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-matrix-green" />
              </a>
            ))}

            <div className="pt-4 border-t border-matrix-border flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full py-3.5 px-4 text-center font-mono font-bold uppercase text-black bg-matrix-green rounded-lg shadow-neon-green flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>Start Project Quote</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
