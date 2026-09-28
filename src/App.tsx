/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ProgressSection } from './components/ProgressSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
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
    <div className="min-h-screen bg-slate-50/30 text-slate-900 font-sans selection:bg-indigo-900 selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Subtle light aesthetic background gradients / ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft light indigo/sky orb at top right */}
        <div className="absolute -top-40 -right-40 w-[550px] h-[550px] bg-gradient-to-br from-indigo-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl opacity-70" />
        {/* Soft light emerald/cyan orb near middle left */}
        <div className="absolute top-[35%] -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/30 via-teal-100/20 to-transparent rounded-full blur-3xl opacity-60" />
        {/* Soft light violet orb near footer */}
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-blue-100/35 via-indigo-100/25 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      {/* Navigation Top Bar */}
      <Navbar onConnectClick={scrollToContact} />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero 
          onViewProjects={scrollToProjects} 
          onConnectClick={scrollToContact} 
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
    </div>
  );
}
