import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

export function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-matrix-card border border-matrix-green/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto relative shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-matrix-dark text-matrix-muted hover:text-white border border-matrix-border min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close Privacy Policy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <ShieldCheck className="w-7 h-7 text-matrix-green" />
          <h3 className="text-2xl font-bold font-mono text-white">Privacy Policy</h3>
        </div>

        <div className="space-y-4 text-xs font-mono text-matrix-text leading-relaxed">
          <p className="text-matrix-muted">Last Updated: July 2026</p>

          <h4 className="text-sm font-bold text-matrix-green uppercase">1. Data Ownership Guarantee</h4>
          <p>
            At RANT, founders Nishank & Prince respect your confidentiality. All code assets, designs, domain settings, and business telemetry gathered during project consultation remain 100% your property.
          </p>

          <h4 className="text-sm font-bold text-matrix-green uppercase">2. Information Collection</h4>
          <p>
            We only collect information voluntarily transmitted through our contact intake form or interactive project scope estimator (such as name, email address, business name, and project goals).
          </p>

          <h4 className="text-sm font-bold text-matrix-green uppercase">3. Zero Third-Party Monetization</h4>
          <p>
            We do not sell, rent, or trade your personal or business information to third-party data brokers.
          </p>
        </div>

        <div className="pt-4 border-t border-matrix-border flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-matrix-green text-black font-mono text-xs font-bold rounded-lg hover:bg-matrix-green-light min-h-[44px]"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
}

export function TermsModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-matrix-card border border-matrix-green/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto relative shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-matrix-dark text-matrix-muted hover:text-white border border-matrix-border min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close Terms of Service"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <FileText className="w-7 h-7 text-matrix-green" />
          <h3 className="text-2xl font-bold font-mono text-white">Terms of Service</h3>
        </div>

        <div className="space-y-4 text-xs font-mono text-matrix-text leading-relaxed">
          <p className="text-matrix-muted">Last Updated: July 2026</p>

          <h4 className="text-sm font-bold text-matrix-green uppercase">1. Fixed Scope & Deliverable Transparency</h4>
          <p>
            All custom web development projects executed by RANT are bound by a mutually agreed proposal specifying scope, deliverables, and timeline with zero hidden bloat.
          </p>

          <h4 className="text-sm font-bold text-matrix-green uppercase">2. Performance SLA</h4>
          <p>
            We guarantee 90+ Lighthouse Mobile Performance scores on production launch for custom web builds under standard content configurations.
          </p>

          <h4 className="text-sm font-bold text-matrix-green uppercase">3. IP Handover</h4>
          <p>
            Upon project completion, all intellectual property rights for custom code written for your site are transferred directly to your organization.
          </p>
        </div>

        <div className="pt-4 border-t border-matrix-border flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-matrix-green text-black font-mono text-xs font-bold rounded-lg hover:bg-matrix-green-light min-h-[44px]"
          >
            Accept Terms
          </button>
        </div>

      </div>
    </div>
  );
}
