import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderSchematic = (project: Project) => {
    switch (project.schematicType) {
      case 'hash-chain':
        return (
          <div className="bg-gradient-to-r from-slate-50 via-indigo-50/40 to-blue-50/30 border border-slate-200/90 p-6 sm:p-7 flex flex-col items-center justify-center text-center my-5 rounded-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="bg-white border border-slate-300 text-slate-800 px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                Entry #01 [Hash A]
              </span>
              <span className="text-indigo-400 font-sans font-bold">→</span>
              <span className="bg-white border border-slate-300 text-slate-800 px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                Entry #02 [Hash B]
              </span>
              <span className="text-indigo-400 font-sans font-bold">→</span>
              <span className="bg-white border border-indigo-500 text-indigo-700 font-semibold px-3 py-1.5 shadow-[0_1px_2px_rgba(99,102,241,0.08)]">
                Cryptographic Chain
              </span>
            </div>
            <div className="mt-3.5 text-[10px] font-mono tracking-widest uppercase text-slate-500 font-medium">
              SCHEMA: IMMUTABLE AUDIT LOGGING
            </div>
          </div>
        );

      case 'context-studio':
        return (
          <div className="bg-gradient-to-r from-sky-50/40 via-blue-50/40 to-indigo-50/30 border border-slate-200/90 p-6 sm:p-7 flex flex-col items-center justify-center text-center my-5 rounded-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                GPT
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                Claude
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                Gemini
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                Llama
              </span>
            </div>
            <div className="mt-3.5 text-[10px] font-mono tracking-wider font-bold text-blue-900 flex items-center gap-1.5">
              <span>▲ UNIFIED SHARED CONTEXT & MEMORY LAYER ▲</span>
            </div>
          </div>
        );

      case 'carbon-tractor':
        return (
          <div className="bg-gradient-to-r from-emerald-50/40 via-teal-50/30 to-sky-50/30 border border-slate-200/90 p-6 sm:p-7 flex flex-col items-center justify-center text-center my-5 rounded-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="bg-white border border-slate-200 text-slate-800 px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                Transportation Distance (km)
              </span>
              <span className="text-teal-400 font-sans font-bold">×</span>
              <span className="bg-white border border-slate-200 text-slate-800 px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                Emission Coefficient
              </span>
              <span className="text-teal-400 font-sans font-bold">=</span>
              <span className="bg-white border border-teal-600 text-teal-800 font-bold px-3 py-1.5 shadow-[0_1px_2px_rgba(13,148,136,0.08)]">
                CO₂ Impact
              </span>
            </div>
            <div className="mt-3.5 text-[10px] font-mono tracking-widest uppercase text-slate-500 font-medium">
              STATUS: ACTIVE DEVELOPMENT
            </div>
          </div>
        );

      case 'agent-workflow':
        return (
          <div className="bg-gradient-to-r from-indigo-50/50 via-violet-50/40 to-sky-50/30 border border-slate-200/90 p-6 sm:p-7 flex flex-col items-center justify-center text-center my-5 rounded-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="bg-white border border-slate-200 text-slate-800 px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                User Goal
              </span>
              <span className="text-indigo-400 font-sans font-bold">→</span>
              <span className="bg-white border border-indigo-300 text-indigo-900 px-3 py-1.5 shadow-[0_1px_2px_rgba(99,102,241,0.06)]">
                Task Decomposer
              </span>
              <span className="text-indigo-400 font-sans font-bold">→</span>
              <span className="bg-white border border-indigo-400 text-indigo-900 px-3 py-1.5 shadow-[0_1px_2px_rgba(99,102,241,0.08)]">
                MCP Tool Discovery
              </span>
              <span className="text-indigo-400 font-sans font-bold">→</span>
              <span className="bg-white border border-emerald-500 text-emerald-800 font-semibold px-3 py-1.5 shadow-[0_1px_2px_rgba(16,185,129,0.08)]">
                Self-Reflecting Loop
              </span>
            </div>
            <div className="mt-3.5 text-[10px] font-mono tracking-widest uppercase text-indigo-800 font-semibold">
              ARCHITECTURE: AUTONOMOUS AGENTIC REASONING
            </div>
          </div>
        );

      case 'pipeline-automation':
        return (
          <div className="bg-gradient-to-r from-teal-50/40 via-sky-50/30 to-indigo-50/30 border border-slate-200/90 p-6 sm:p-7 flex flex-col items-center justify-center text-center my-5 rounded-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="bg-white border border-slate-200 text-slate-800 px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                Unstructured Inputs (PDF/Email)
              </span>
              <span className="text-teal-400 font-sans font-bold">→</span>
              <span className="bg-white border border-teal-300 text-teal-900 px-3 py-1.5 shadow-[0_1px_2px_rgba(20,184,166,0.06)]">
                Multimodal LLM Parser
              </span>
              <span className="text-teal-400 font-sans font-bold">→</span>
              <span className="bg-white border border-teal-500 text-teal-900 font-semibold px-3 py-1.5 shadow-[0_1px_2px_rgba(20,184,166,0.08)]">
                Pydantic Schema Validation
              </span>
              <span className="text-teal-400 font-sans font-bold">→</span>
              <span className="bg-white border border-indigo-500 text-indigo-800 font-semibold px-3 py-1.5 shadow-[0_1px_2px_rgba(99,102,241,0.08)]">
                Webhook Event
              </span>
            </div>
            <div className="mt-3.5 text-[10px] font-mono tracking-widest uppercase text-teal-800 font-semibold">
              PIPELINE: MULTIMODAL EXTRACTION & AUTOMATION
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
              <span className="text-xs font-mono tracking-widest text-indigo-700 font-semibold uppercase block">
                03 / SELECTED WORKS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Projects
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-4 max-w-xs">
              Curated technical work exploring cryptographic data integrity, multi-LLM workflow context, and carbon measurement.
            </p>
          </div>

          {/* Right Column: Project Cards */}
          <div className="lg:col-span-8 space-y-10">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="border border-slate-200/90 bg-white/95 backdrop-blur-xs p-6 sm:p-7 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300 rounded-sm"
              >
                {/* Project Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-800/80 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                    {project.projectNumber} / {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-700 border border-indigo-200/70 px-2.5 py-0.5 bg-indigo-50/60 rounded font-semibold">
                    {project.statusBadge}
                  </span>
                </div>

                {/* Technical Architecture Schematic */}
                {renderSchematic(project)}

                {/* Project Title & Subtitle */}
                <div className="mt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {project.title}{' '}
                    {project.subtitle && (
                      <span className="text-xs sm:text-sm font-normal text-slate-500 ml-1">
                        {project.subtitle}
                      </span>
                    )}
                  </h3>

                  {/* Description Prose */}
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mt-3 whitespace-pre-line">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Domain / Scope Bar & View Project CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500 text-[11px] sm:text-xs">
                    <strong className="text-slate-700 font-medium">{project.domainOrScopeLabel}:</strong>{' '}
                    {project.domainOrScopeValue}
                  </span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-mono text-[11px] sm:text-xs font-bold text-indigo-900 hover:text-indigo-600 uppercase tracking-wider inline-flex items-center gap-1.5 group cursor-pointer transition-colors"
                  >
                    <span>VIEW PROJECT</span>
                    <span className="transition-transform group-hover:translate-x-1 font-bold text-indigo-600">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
