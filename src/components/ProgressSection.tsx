import React from 'react';
import { LEARNING_TAGS } from '../data/portfolioData';

export const ProgressSection: React.FC = () => {
  return (
    <section id="progress" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
              <span className="text-xs font-mono tracking-widest text-indigo-700 font-semibold uppercase block">
                05 / EVOLUTION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              My Progress
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-4 max-w-xs">
              A real chronological timeline of my degree and active technical learning interests.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Timeline */}
            <div className="space-y-8 pl-1">
              
              {/* 2025 Node */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <span className="w-3 h-3 rounded-full border-2 border-indigo-300 bg-white inline-block shrink-0 shadow-2xs" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 font-semibold block uppercase">
                    2025
                  </span>
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 mt-0.5">
                    Started BE in Information Technology
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mt-1">
                    Enrolled at Thakur shree dps college of engineering and management (Mumbai University).
                  </p>
                </div>
              </div>

              {/* 2026 Node (Current) */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-indigo-600 to-sky-500 ring-4 ring-indigo-100 inline-block shrink-0 shadow-xs" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-indigo-800 font-bold block uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse inline-block" />
                    2026 · CURRENT STATUS
                  </span>
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 mt-0.5">
                    Currently in 2nd Year
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mt-1">
                    Deepening core engineering concepts, algorithmic foundations, and modern AI/web technology stacks.
                  </p>
                </div>
              </div>

            </div>

            {/* Currently Learning / Exploring Box */}
            <div className="border border-indigo-100/90 bg-white/95 backdrop-blur-xs p-6 sm:p-7 shadow-md shadow-indigo-100/20 rounded-sm">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-[2px] bg-gradient-to-r from-indigo-500 to-sky-500 inline-block shrink-0 shadow-xs" />
                <h4 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  CURRENTLY LEARNING / EXPLORING
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {LEARNING_TAGS.map((tag, idx) => {
                  const tagColors = [
                    'bg-indigo-50/80 text-indigo-900 border-indigo-200/80 hover:bg-indigo-100/80 hover:border-indigo-300',
                    'bg-sky-50/80 text-sky-900 border-sky-200/80 hover:bg-sky-100/80 hover:border-sky-300',
                    'bg-teal-50/80 text-teal-900 border-teal-200/80 hover:bg-teal-100/80 hover:border-teal-300',
                    'bg-violet-50/80 text-violet-900 border-violet-200/80 hover:bg-violet-100/80 hover:border-violet-300',
                    'bg-amber-50/80 text-amber-900 border-amber-200/80 hover:bg-amber-100/80 hover:border-amber-300',
                  ];
                  const colorClass = tagColors[idx % tagColors.length];

                  return (
                    <div
                      key={tag}
                      className={`flex items-center gap-2 px-3 py-1.5 border rounded-full text-xs font-medium transition-all shadow-2xs hover:scale-105 ${colorClass}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0" />
                      <span>{tag}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
//jffjgj
