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
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
              <span className="text-xs font-mono tracking-widest text-indigo-700 font-semibold uppercase block">
                02 / CAPABILITIES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
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
                <span className="w-2 h-2 rounded-[2px] bg-gradient-to-r from-indigo-500 to-sky-500 inline-block shrink-0 shadow-xs" />
                <h3 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  WHAT I DO
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {SKILLS_WHAT_I_DO.map((skill, index) => {
                  const lightAccents = [
                    'bg-indigo-50/80 text-indigo-700 border-indigo-200/70 group-hover:bg-indigo-100/90',
                    'bg-sky-50/80 text-sky-700 border-sky-200/70 group-hover:bg-sky-100/90',
                    'bg-violet-50/80 text-violet-700 border-violet-200/70 group-hover:bg-violet-100/90',
                    'bg-teal-50/80 text-teal-700 border-teal-200/70 group-hover:bg-teal-100/90',
                    'bg-amber-50/80 text-amber-700 border-amber-200/70 group-hover:bg-amber-100/90',
                  ];
                  const accent = lightAccents[index % lightAccents.length];

                  return (
                    <div
                      key={skill.title}
                      className="border border-slate-200/90 bg-white/90 backdrop-blur-xs p-4 sm:p-4.5 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-200 group rounded-xs"
                    >
                      <div className={`w-9 h-9 rounded-lg ${accent} border flex items-center justify-center mb-3 shadow-2xs transition-colors`}>
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-indigo-950 transition-colors">
                        {skill.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1">
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
                <span className="w-2 h-2 rounded-[2px] bg-gradient-to-r from-sky-500 to-teal-500 inline-block shrink-0 shadow-xs" />
                <h3 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  PROGRAMMING LANGUAGES
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {PROGRAMMING_LANGUAGES.map((lang, index) => {
                  const numAccents = [
                    'text-indigo-600 bg-indigo-50/70',
                    'text-sky-600 bg-sky-50/70',
                    'text-amber-600 bg-amber-50/70',
                    'text-teal-600 bg-teal-50/70',
                  ];
                  return (
                    <div
                      key={lang.name}
                      className="border border-slate-200/90 bg-white/90 backdrop-blur-xs p-4 hover:border-indigo-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 rounded-xs group"
                    >
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm inline-block mb-2.5 ${numAccents[index % numAccents.length]}`}>
                        {lang.number}
                      </span>
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                        {lang.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {lang.focus}
                      </p>
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
