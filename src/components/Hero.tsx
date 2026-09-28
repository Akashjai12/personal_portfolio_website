import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './SocialIcons';

interface HeroProps {
  onViewProjects: () => void;
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onConnectClick }) => {
  return (
    <section id="home" className="pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-slate-900 inline-block shrink-0" />
              <p className="text-[11px] font-mono tracking-widest text-slate-600 font-semibold uppercase">
                {PERSONAL_INFO.kicker}
              </p>
            </div>

            {/* Giant Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.03]">
              Akash<br />Jaiswal
            </h1>

            {/* Summary */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-lg mt-6">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTA Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-3.5 mt-8">
              <button
                onClick={onViewProjects}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 inline-flex items-center gap-2 transition-all hover:shadow-md cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onConnectClick}
                className="border border-slate-300 hover:border-slate-800 text-slate-800 hover:bg-slate-50 text-xs font-medium px-5 py-3 transition-colors cursor-pointer"
              >
                Let's Connect
              </button>

              {/* Direct Profile Logos */}
              <div className="flex items-center gap-2 sm:ml-2 pl-2 sm:border-l border-slate-200">
                <a
                  href="https://github.com/Akashjai12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
                  title="Visit GitHub Profile (Akashjai12)"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/aakash-jaiswal-531262308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
                  title="Visit LinkedIn Profile (Aakash Jaiswal)"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:aakashjaiswal1190@gmail.com"
                  className="w-10 h-10 rounded-lg bg-[#EA4335] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
                  title="Email aakashjaiswal1190@gmail.com"
                  aria-label="Email via Gmail"
                >
                  <GmailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Academic Affiliation Box */}
            <div className="mt-14 pt-8 border-t border-slate-100 flex items-start gap-4">
              <div className="w-9 h-9 bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center font-mono shrink-0">
                BE
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold block">
                  ACADEMIC AFFILIATION
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                  BE in Information Technology
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-normal">
                  {PERSONAL_INFO.college} · {PERSONAL_INFO.timeline}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Technical Profile Card with Architectural Brackets) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Architectural corner crop marks */}
            <div className="relative p-2">
              {/* Top-left corner mark */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-slate-900" />
              {/* Bottom-right corner mark */}
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-slate-900" />

              {/* Card Container */}
              <div className="border border-slate-200 bg-white">
                {/* Photograph Visual Box */}
                <div className="bg-gradient-to-b from-[#eef4fb] via-[#f1f6fd] to-[#e9f1fa] border-b border-slate-200 py-16 px-6 flex flex-col items-center justify-center text-center relative group overflow-hidden">
                  {/* Subtle decorative color light beam */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-sky-200/40 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-200/30 rounded-full blur-2xl pointer-events-none" />

                  {/* Subtle technical crosshair lines in background */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-400" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-400" />
                  </div>

                  {/* AJ Badge with soft light ring */}
                  <div className="w-14 h-14 bg-white border border-slate-200 shadow-[0_4px_16px_rgba(59,130,246,0.08)] flex items-center justify-center mb-3 relative z-10 transition-transform duration-300 group-hover:scale-105">
                    <span className="text-base font-bold text-slate-800 tracking-wider font-mono">
                      AJ
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-slate-400 relative z-10">
                    PROFILE PHOTOGRAPH
                  </span>
                  <span className="text-xs text-slate-600 mt-1 font-medium relative z-10">
                    Akash Jaiswal · Mumbai, India
                  </span>
                </div>

                {/* Technical Specifications Table */}
                <div className="p-4 sm:p-5 space-y-2.5 bg-white text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      NAME
                    </span>
                    <span className="font-semibold text-slate-900">
                      Akash Jaiswal
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      STATUS
                    </span>
                    <span className="font-semibold text-slate-900">
                      2nd Year Student
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      PROGRAM
                    </span>
                    <span className="font-semibold text-slate-900 text-right">
                      BE Information Technology
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      TIMELINE
                    </span>
                    <span className="font-semibold font-mono text-slate-900">
                      2025 — 2029
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
