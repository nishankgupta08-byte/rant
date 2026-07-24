import React, { useState } from 'react';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectEstimator from './components/ProjectEstimator';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import AboutTeam from './components/AboutTeam';
import TerminalSandbox from './components/TerminalSandbox';
import InsightsBlog from './components/InsightsBlog';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { PrivacyModal, TermsModal } from './components/LegalModals';

export default function App() {
  const [prefilledBrief, setPrefilledBrief] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const handleOpenEstimator = () => {
    const estimatorElem = document.getElementById('estimator');
    if (estimatorElem) {
      estimatorElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEstimate = (briefText) => {
    setPrefilledBrief(briefText);
  };

  return (
    <div className="relative min-h-screen bg-matrix-bg text-matrix-text selection:bg-matrix-green selection:text-black">
      {/* Background Matrix FX */}
      <MatrixBackground />

      {/* Main Content Layer */}
      <div className="relative z-10">
        
        {/* Navigation Header */}
        <Navbar onOpenEstimator={handleOpenEstimator} />

        {/* Main Landing Page Sections */}
        <main id="main-content">
          <Hero onOpenEstimator={handleOpenEstimator} />
          <Services onOpenEstimator={handleOpenEstimator} />
          <Portfolio />
          <ProjectEstimator onSelectEstimate={handleSelectEstimate} />
          <WhyChooseUs onOpenEstimator={handleOpenEstimator} />
          <AboutTeam />
          <Testimonials />
          <TerminalSandbox onOpenEstimator={handleOpenEstimator} />
          <InsightsBlog />
          <ContactSection prefilledBrief={prefilledBrief} />
        </main>

        {/* Footer */}
        <Footer
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenTerms={() => setTermsOpen(true)}
        />

      </div>

      {/* Legal Dialog Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  );
}
