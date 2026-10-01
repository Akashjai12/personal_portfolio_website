/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ProgressSection } from './components/ProgressSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans selection:bg-indigo-900 selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Luminous, elegant ambient aura mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft elegant periwinkle / lavender glow top right */}
        <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-gradient-to-br from-indigo-200/40 via-violet-100/35 to-sky-100/20 rounded-full blur-[100px] opacity-75" />
        
        {/* Luminous soft warm champagne/amber tint at upper middle */}
        <div className="absolute top-[18%] -left-32 w-[520px] h-[520px] bg-gradient-to-br from-amber-100/30 via-orange-50/25 to-transparent rounded-full blur-[90px] opacity-60" />

        {/* Soft crystalline azure & seafoam mint near projects */}
        <div className="absolute top-[45%] right-0 w-[580px] h-[580px] bg-gradient-to-tl from-cyan-100/35 via-teal-100/25 to-blue-50/20 rounded-full blur-[100px] opacity-65" />

        {/* Gentle rose-violet & sky mist near certificates and contact */}
        <div className="absolute bottom-20 left-[-10%] w-[620px] h-[620px] bg-gradient-to-tr from-purple-100/30 via-sky-100/30 to-indigo-50/20 rounded-full blur-[110px] opacity-70" />

        {/* Delicate subtle mesh grid overlay for architectural crispness */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Navigation Top Bar */}
      <Navbar 
        onConnectClick={scrollToContact} 
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero 
          onViewProjects={scrollToProjects} 
          onConnectClick={scrollToContact} 
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* 01 / PROFILE - About Me */}
        <AboutSection />

        {/* 02 / CAPABILITIES - Skills & Focus */}
        <SkillsSection />

        {/* 03 / SELECTED WORKS - Projects */}
        <ProjectsSection />

        {/* 04 / VERIFICATION - Certificates */}
        <CertificatesSection />

        {/* 05 / EVOLUTION - My Progress */}
        <ProgressSection />

        {/* 06 / COMMUNICATION - Let's Connect */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Interactive Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
