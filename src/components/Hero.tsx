import React from 'react';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './SocialIcons';

interface HeroProps {
  onViewProjects: () => void;
  onConnectClick: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onConnectClick, onOpenResume }) => {
  return (
    <section id="home" className="pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-[2px] bg-gradient-to-r from-indigo-500 to-sky-500 inline-block shrink-0 shadow-xs" />
              <p className="text-[11px] font-mono tracking-widest text-indigo-900/80 font-semibold uppercase">
                {PERSONAL_INFO.kicker}
              </p>
            </div>

            {/* Giant Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.03]">
              Akash<br />
              <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
                Jaiswal
              </span>
            </h1>

            {/* Summary */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-lg mt-6">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTA Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-3.5 mt-8">
              <button
                onClick={onViewProjects}
                className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:from-indigo-900 hover:to-indigo-950 text-white text-xs font-semibold px-5 py-3 inline-flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer rounded-xs"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="border border-indigo-200/90 hover:border-indigo-500 bg-white/90 hover:bg-indigo-50/50 text-indigo-950 text-xs font-semibold px-4.5 py-3 inline-flex items-center gap-2 transition-all cursor-pointer rounded-xs shadow-xs"
                  title="View technical credentials & resume dossier"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Resume Dossier</span>
                </button>
              )}

              <button
                onClick={onConnectClick}
                className="border border-slate-300 hover:border-slate-800 bg-white/80 hover:bg-slate-50 text-slate-800 text-xs font-medium px-4.5 py-3 transition-all cursor-pointer rounded-xs shadow-xs"
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
            <div className="mt-14 pt-8 border-t border-slate-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-50 to-sky-100/70 border border-indigo-200/70 text-indigo-900 font-bold text-xs flex items-center justify-center font-mono shrink-0 shadow-xs">
                BE
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-700/80 font-semibold block">
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
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-indigo-600" />
              {/* Bottom-right corner mark */}
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-indigo-600" />

              {/* Card Container */}
              <div className="border border-slate-200/90 bg-white/90 backdrop-blur-md shadow-lg shadow-indigo-100/30">
                {/* Photograph Visual Box with luminous gentle gradient */}
                <div className="bg-gradient-to-br from-[#f0f4ff] via-[#f5f8ff] to-[#eaf2fd] border-b border-indigo-100/80 py-16 px-6 flex flex-col items-center justify-center text-center relative group overflow-hidden">
                  {/* Subtle decorative color light beam */}
                  <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-sky-200/50 to-indigo-200/40 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-gradient-to-tr from-amber-100/40 via-violet-200/30 to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* Subtle technical crosshair lines in background */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-indigo-300" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-indigo-300" />
                  </div>

                  {/* AJ Badge with soft light ring */}
                  <div className="w-16 h-16 rounded-xl bg-white/95 border border-indigo-200 shadow-[0_8px_24px_rgba(99,102,241,0.12)] flex items-center justify-center mb-3 relative z-10 transition-transform duration-300 group-hover:scale-105">
                    <span className="text-lg font-bold bg-gradient-to-br from-indigo-700 to-sky-600 bg-clip-text text-transparent tracking-wider font-mono">
                      AJ
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-indigo-800/80 relative z-10">
                    PROFILE IDENTIFICATION
                  </span>
                  <span className="text-xs text-slate-600 mt-1 font-medium relative z-10">
                    Akash Jaiswal · Mumbai, India
                  </span>
                </div>

                {/* Technical Specifications Table */}
                <div className="p-4 sm:p-5 space-y-2.5 bg-white/90 text-xs">
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
                    <span className="font-semibold text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded text-[11px]">
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
                    <span className="font-semibold font-mono text-slate-800">
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
