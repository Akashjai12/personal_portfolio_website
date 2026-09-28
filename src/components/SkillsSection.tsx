import React from 'react';
import { Code, Layout, Sparkles, Bot, RefreshCw } from 'lucide-react';
import { SKILLS_WHAT_I_DO, PROGRAMMING_LANGUAGES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-4 h-4 text-indigo-600" />;
      case 'layout':
        return <Layout className="w-4 h-4 text-blue-600" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-sky-600" />;
      case 'agent':
        return <Bot className="w-4 h-4 text-teal-600" />;
      case 'sync':
        return <RefreshCw className="w-4 h-4 text-cyan-600" />;
      default:
        return <Code className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block mb-1.5">
              02 / CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Skills & Focus
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-4 max-w-xs">
              No artificial percentages or subjective proficiency bars — purely the domains I practice and the core languages I program in.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* WHAT I DO */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-slate-900 inline-block shrink-0" />
                <h3 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  WHAT I DO
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {SKILLS_WHAT_I_DO.map((skill, index) => {
                  const lightAccents = [
                    'bg-indigo-50/70 text-indigo-700 border-indigo-100',
                    'bg-blue-50/70 text-blue-700 border-blue-100',
                    'bg-sky-50/70 text-sky-700 border-sky-100',
                    'bg-teal-50/70 text-teal-700 border-teal-100',
                    'bg-emerald-50/70 text-emerald-700 border-emerald-100',
                  ];
                  const accent = lightAccents[index % lightAccents.length];

                  return (
                    <div
                      key={skill.title}
                      className="border border-slate-200 bg-white/90 p-4 sm:p-4.5 hover:border-slate-400 hover:shadow-sm transition-all"
                    >
                      <div className={`w-8 h-8 rounded-md ${accent} border flex items-center justify-center mb-3 shadow-xs`}>
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">
                        {skill.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PROGRAMMING LANGUAGES */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-slate-900 inline-block shrink-0" />
                <h3 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  PROGRAMMING LANGUAGES
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {PROGRAMMING_LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="border border-slate-200 bg-white p-4 hover:border-slate-400 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-slate-400 block mb-2">
                      {lang.number}
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">
                      {lang.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {lang.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
