import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Index & Heading */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
              <span className="text-xs font-mono tracking-widest text-indigo-700 font-semibold uppercase block">
                01 / PROFILE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              About Me
            </h2>
          </div>

          {/* Right Column: Bio & Academic Record Card */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              I am a 19-year-old developer and engineering student currently in my 2nd year of Bachelor of Engineering in Information Technology at Thakur shree dps college of engineering and management (Mumbai University).
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              My work and current focus center on building purposeful web interfaces, crafting thoughtful UI/UX designs, and diving deep into modern artificial intelligence workflows — from Generative AI and autonomous AI agents to practical AI automations. I value simplicity, robust architecture, and software built with care.
            </p>

            {/* Academic & Personal Record Container */}
            <div className="border border-indigo-100/90 mt-8 bg-white/95 rounded-sm shadow-md shadow-indigo-100/20 overflow-hidden">
              {/* Header Bar with light elegant tint */}
              <div className="px-5 py-3 border-b border-indigo-100/80 bg-gradient-to-r from-indigo-50/70 via-sky-50/50 to-blue-50/30 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-950 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
                  PERSONAL INFORMATION & ACADEMIC RECORD
                </span>
                <span className="text-[10px] font-mono text-indigo-700 bg-white/90 px-2.5 py-0.5 rounded border border-indigo-200/60 font-semibold shadow-2xs">
                  MUMBAI UNIVERSITY
                </span>
              </div>

              {/* Two Column Technical Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 p-5 gap-6 md:gap-8">
                
                {/* Left Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">
                      FULL NAME
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block">
                      {PERSONAL_INFO.name}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">
                      AGE
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block font-mono">
                      {PERSONAL_INFO.age}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">
                      CURRENT STANDING
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block">
                      {PERSONAL_INFO.standing}
                    </span>
                  </div>
                </div>

                {/* Right Details */}
                <div className="space-y-4 md:pl-8">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">
                      DEGREE COURSE
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block leading-snug">
                      {PERSONAL_INFO.degreeCourse}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">
                      INSTITUTION
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block leading-snug">
                      {PERSONAL_INFO.college}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">
                      ACADEMIC DURATION
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block font-mono">
                      {PERSONAL_INFO.timeline}
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
