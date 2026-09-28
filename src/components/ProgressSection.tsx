import React from 'react';
import { LEARNING_TAGS } from '../data/portfolioData';

export const ProgressSection: React.FC = () => {
  return (
    <section id="progress" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block mb-1.5">
              05 / EVOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
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
                  <span className="w-2.5 h-2.5 border-2 border-slate-700 bg-white inline-block shrink-0" />
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
                  <span className="w-2.5 h-2.5 bg-blue-600 ring-4 ring-blue-100 inline-block shrink-0" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-blue-700 font-bold block uppercase">
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
            <div className="border border-slate-200 bg-white/90 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-blue-600 inline-block shrink-0" />
                <h4 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  CURRENTLY LEARNING / EXPLORING
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {LEARNING_TAGS.map((tag, idx) => {
                  const tagColors = [
                    'bg-indigo-50/80 text-indigo-800 border-indigo-200/80 hover:bg-indigo-100/70',
                    'bg-blue-50/80 text-blue-800 border-blue-200/80 hover:bg-blue-100/70',
                    'bg-teal-50/80 text-teal-800 border-teal-200/80 hover:bg-teal-100/70',
                    'bg-sky-50/80 text-sky-800 border-sky-200/80 hover:bg-sky-100/70',
                    'bg-emerald-50/80 text-emerald-800 border-emerald-200/80 hover:bg-emerald-100/70',
                  ];
                  const colorClass = tagColors[idx % tagColors.length];

                  return (
                    <div
                      key={tag}
                      className={`flex items-center gap-2 px-3 py-1.5 border rounded-sm text-xs font-medium transition-colors ${colorClass}`}
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
