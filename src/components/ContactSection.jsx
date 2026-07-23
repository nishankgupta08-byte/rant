import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Instagram } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ prefilledBrief }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    projectScope: prefilledBrief || '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  React.useEffect(() => {
    if (prefilledBrief) {
      setFormData(prev => ({
        ...prev,
        projectScope: prefilledBrief
      }));
    }
  }, [prefilledBrief]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or project name.';
    if (!formData.projectScope.trim()) errs.projectScope = 'Please tell us briefly about your project goals.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#39FF14', '#00e5ff', '#ffffff']
        });
      } catch (err) {}
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-matrix-dark relative border-b border-matrix-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline & Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A PROJECT</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Ready to Make <span className="text-matrix-green underline decoration-matrix-green/40">Some Noise?</span>
              </h2>
              <p className="text-matrix-muted text-base leading-relaxed">
                Let's build a website that your customers will love. Reach out today for a free consultation with Nishank & Prince.
              </p>
            </div>

            {/* Direct Contact Info List */}
            <div className="space-y-4 pt-4 font-mono text-xs">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-matrix-card border border-matrix-border">
                <div className="p-3 rounded-lg bg-black border border-matrix-green/40">
                  <Mail className="w-5 h-5 text-matrix-green" />
                </div>
                <div>
                  <span className="text-matrix-muted text-[10px] uppercase">DIRECT EMAIL</span>
                  <p className="text-white font-bold text-sm">hello@rant.dev</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/not_vishu_.anymore/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-matrix-card border border-matrix-border hover:border-matrix-green transition-all"
              >
                <div className="p-3 rounded-lg bg-black border border-matrix-green/40">
                  <Instagram className="w-5 h-5 text-matrix-green" />
                </div>
                <div>
                  <span className="text-matrix-muted text-[10px] uppercase">NISHANK'S INSTAGRAM</span>
                  <p className="text-white font-bold text-sm">@not_vishu_.anymore</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-matrix-card border border-matrix-border">
                <div className="p-3 rounded-lg bg-black border border-matrix-cyan/40">
                  <Phone className="w-5 h-5 text-matrix-cyan" />
                </div>
                <div>
                  <span className="text-matrix-muted text-[10px] uppercase">PROJECT LINE</span>
                  <p className="text-white font-bold text-sm">+1 (800) 555-RANT</p>
                </div>
              </div>
            </div>

            {/* SLA Response Guarantee Box */}
            <div className="p-5 rounded-xl bg-matrix-green/10 border border-matrix-green/30 text-matrix-green font-mono text-xs space-y-1">
              <div className="font-bold uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>24-Hour Response SLA</span>
              </div>
              <p className="text-matrix-muted text-[11px]">
                We review every project request within 24 hours with a preliminary scope & proposal.
              </p>
            </div>

          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-matrix-card rounded-2xl p-6 sm:p-10 border-2 border-matrix-border shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-matrix-green/20 border-2 border-matrix-green text-matrix-green flex items-center justify-center mx-auto shadow-neon-green">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-white">Message Transmitted!</h3>
                  <p className="text-matrix-muted text-sm max-w-md mx-auto">
                    Thank you! Nishank & Prince have received your project details. We will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', businessName: '', projectScope: '' });
                    }}
                    className="mt-4 px-6 py-2.5 font-mono text-xs font-bold uppercase text-matrix-green border border-matrix-green/40 rounded-lg hover:bg-matrix-green/10 min-h-[44px]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  <div className="border-b border-matrix-border pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white font-mono">Project Intake Form</h3>
                    <p className="text-xs text-matrix-muted font-mono mt-1">
                      Fields marked with <span className="text-matrix-green">*</span> are required.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-bold text-matrix-text uppercase mb-2">
                      Your Name <span className="text-matrix-green">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-4 py-3 bg-black border rounded-xl font-mono text-sm text-white placeholder-matrix-muted/50 focus:outline-none min-h-[44px] ${
                        errors.name ? 'border-red-500' : 'border-matrix-border focus:border-matrix-green'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-xs font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-bold text-matrix-text uppercase mb-2">
                      Email Address <span className="text-matrix-green">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@yourcompany.com"
                      className={`w-full px-4 py-3 bg-black border rounded-xl font-mono text-sm text-white placeholder-matrix-muted/50 focus:outline-none min-h-[44px] ${
                        errors.email ? 'border-red-500' : 'border-matrix-border focus:border-matrix-green'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-xs font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Business Name Field */}
                  <div>
                    <label htmlFor="contact-business" className="block text-xs font-mono font-bold text-matrix-text uppercase mb-2">
                      Business Name <span className="text-matrix-green">*</span>
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Artisanal Coffee Co."
                      className={`w-full px-4 py-3 bg-black border rounded-xl font-mono text-sm text-white placeholder-matrix-muted/50 focus:outline-none min-h-[44px] ${
                        errors.businessName ? 'border-red-500' : 'border-matrix-border focus:border-matrix-green'
                      }`}
                      aria-invalid={!!errors.businessName}
                      aria-describedby={errors.businessName ? "business-error" : undefined}
                    />
                    {errors.businessName && (
                      <p id="business-error" className="text-red-400 text-xs font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.businessName}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Details Field */}
                  <div>
                    <label htmlFor="contact-scope" className="block text-xs font-mono font-bold text-matrix-text uppercase mb-2">
                      Tell Us About Your Project <span className="text-matrix-green">*</span>
                    </label>
                    <textarea
                      id="contact-scope"
                      rows={4}
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      placeholder="Describe your project goals, target audience, timeline, or paste your estimated scope brief..."
                      className={`w-full px-4 py-3 bg-black border rounded-xl font-mono text-sm text-white placeholder-matrix-muted/50 focus:outline-none ${
                        errors.projectScope ? 'border-red-500' : 'border-matrix-border focus:border-matrix-green'
                      }`}
                      aria-invalid={!!errors.projectScope}
                      aria-describedby={errors.projectScope ? "scope-error" : undefined}
                    />
                    {errors.projectScope && (
                      <p id="scope-error" className="text-red-400 text-xs font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectScope}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 font-mono text-xs font-bold uppercase tracking-wider text-black bg-matrix-green rounded-xl shadow-neon-green hover:bg-matrix-green-light hover:shadow-neon-green-strong transition-all flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-black" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
