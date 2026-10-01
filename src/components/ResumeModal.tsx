import React, { useEffect, useRef } from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Building, GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { CERTIFICATES_DATA, ACHIEVEMENTS_DATA } from '../data/certificatesData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[94vh] flex flex-col overflow-hidden text-slate-900 animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dossier Header Toolbar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-indigo-100 bg-gradient-to-r from-slate-50 via-indigo-50/40 to-white">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                TECHNICAL RESUME DOSSIER
              </span>
              <span className="text-[10px] font-mono text-slate-400 block sm:inline sm:ml-2">
                VERIFIED STUDENT RECORD · MUMBAI UNIVERSITY
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-white border border-indigo-200 hover:border-indigo-400 text-indigo-900 text-xs font-mono font-semibold rounded-xs shadow-2xs hover:bg-indigo-50/50 inline-flex items-center gap-1.5 transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xs transition-colors cursor-pointer"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 bg-white">
          
          {/* Header Card */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono tracking-widest text-indigo-700 font-bold uppercase">
                  BACHELOR OF ENGINEERING IN INFORMATION TECHNOLOGY
                </span>
                <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-indigo-50 text-indigo-800 border border-indigo-100 font-semibold">
                  2ND YEAR
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Akash Jaiswal
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Engineering student passionate about responsive frontend architectures, intuitive UI/UX design, autonomous AI agents, and practical automation systems.
              </p>
            </div>

            <div className="text-xs font-mono text-slate-600 space-y-1 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-indigo-600 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <a href="https://github.com/Akashjai12" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-indigo-600 hover:underline">
                  github.com/Akashjai12
                </a>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-4">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900">
                01. EDUCATION
              </h2>
            </div>
            
            <div className="bg-slate-50/70 border border-slate-200/80 p-4 rounded-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900">
                  Bachelor of Engineering (BE) in Information Technology
                </h3>
                <span className="text-xs font-mono font-semibold text-indigo-700 bg-white px-2 py-0.5 border border-indigo-100 rounded">
                  2025 — 2029 (Currently in 2nd Year)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Thakur shree dps college of engineering and management (Mumbai University)
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Core coursework in algorithms, data structures, object-oriented software engineering, database architectures, and digital systems.
              </p>
            </div>
          </div>

          {/* Core Technical Capabilities */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900">
                02. TECHNICAL SKILLS & PROFICIENCIES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="border border-slate-200/80 p-3.5 bg-white">
                <span className="font-mono text-[10px] uppercase font-bold text-indigo-700 block mb-1">
                  Programming Languages
                </span>
                <p className="text-slate-800 font-medium">
                  Python, C, Java, JavaScript/TypeScript, SQL basics
                </p>
              </div>

              <div className="border border-slate-200/80 p-3.5 bg-white">
                <span className="font-mono text-[10px] uppercase font-bold text-indigo-700 block mb-1">
                  Frontend & Design Systems
                </span>
                <p className="text-slate-800 font-medium">
                  React, HTML5, CSS3, Tailwind CSS, Responsive Design, Typography, Component Architecture
                </p>
              </div>

              <div className="border border-slate-200/80 p-3.5 bg-white">
                <span className="font-mono text-[10px] uppercase font-bold text-indigo-700 block mb-1">
                  AI & Automation Workflows
                </span>
                <p className="text-slate-800 font-medium">
                  Generative AI, Prompt Engineering, Model Context Protocol (MCP), Autonomous AI Agents, Pipeline Automation
                </p>
              </div>

              <div className="border border-slate-200/80 p-3.5 bg-white">
                <span className="font-mono text-[10px] uppercase font-bold text-indigo-700 block mb-1">
                  Tools & Environments
                </span>
                <p className="text-slate-800 font-medium">
                  Git & GitHub, Vite, VS Code, Linux shell commands, Node.js tooling
                </p>
              </div>
            </div>
          </div>

          {/* Selected Technical Projects */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-4">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900">
                03. SELECTED ENGINEERING WORKS
              </h2>
            </div>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="border border-slate-200/80 p-4 rounded-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-700">
                        {proj.projectNumber}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        {proj.title} {proj.subtitle && <span className="font-normal text-slate-500">— {proj.subtitle}</span>}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 self-start sm:self-auto">
                      {proj.statusBadge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-indigo-900 bg-indigo-50/60 px-2.5 py-1 rounded inline-block">
                    <strong>Scope:</strong> {proj.domainOrScopeValue}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Leadership */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-4">
              <Award className="w-4 h-4 text-indigo-600" />
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900">
                04. CERTIFICATIONS & ACHIEVEMENTS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATES_DATA.map((c) => (
                <div key={c.id} className="border border-slate-200/80 p-3 bg-slate-50/40 rounded-xs">
                  <div className="font-bold text-slate-900">{c.title}</div>
                  <div className="text-[11px] font-mono text-indigo-700">{c.issuer}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">{c.docCode}</div>
                </div>
              ))}
              {ACHIEVEMENTS_DATA.map((a) => (
                <div key={a.id} className="border border-slate-200/80 p-3 bg-slate-50/40 rounded-xs">
                  <div className="font-bold text-slate-900">{a.title}</div>
                  <div className="text-[11px] font-mono text-teal-700">{a.issuer}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">{a.docCode}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            Akash Jaiswal · Mumbai University (2025–2029)
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white border border-slate-300 hover:border-slate-800 text-slate-900 text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Print / Save
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-indigo-950 hover:bg-indigo-900 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
