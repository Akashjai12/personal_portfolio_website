import React from 'react';
import { CertificateItem } from '../data/certificatesData';

interface CertificateThumbnailProps {
  item: CertificateItem;
  className?: string;
  isEnlarged?: boolean;
}

export const CertificateThumbnail: React.FC<CertificateThumbnailProps> = ({ item, className = '', isEnlarged = false }) => {
  if (item.id === 'cert-ganitank') {
    return (
      <div className={`relative w-full overflow-hidden bg-[#fafafa] border border-slate-200 select-none ${isEnlarged ? 'p-8 sm:p-12 min-h-[460px]' : 'p-4 sm:p-5 h-48'} flex flex-col justify-between ${className}`}>
        {/* Subtle decorative geometric border */}
        <div className="absolute inset-1.5 border border-indigo-200/60 pointer-events-none" />
        <div className="absolute inset-2.5 border border-dashed border-slate-200 pointer-events-none" />
        
        {/* Top Header */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-indigo-900 text-white font-mono font-bold text-[10px] flex items-center justify-center">
              GT
            </div>
            <div>
              <div className="font-bold tracking-wider text-[11px] text-indigo-950 uppercase font-sans">
                GANITANK
              </div>
              <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                Technology Education & AI
              </div>
            </div>
          </div>
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-900 rounded-xs">
            CERTIFICATE OF COMPLETION
          </span>
        </div>

        {/* Certificate Body */}
        <div className="relative z-10 text-center my-auto py-2">
          <div className="text-[9px] font-mono tracking-widest text-slate-500 uppercase mb-1">
            This is proudly presented to
          </div>
          <div className={`${isEnlarged ? 'text-2xl sm:text-3xl' : 'text-base sm:text-lg'} font-bold text-slate-900 tracking-tight font-sans`}>
            Akash Jaiswal
          </div>
          <div className="w-16 h-0.5 bg-indigo-600 mx-auto my-1.5" />
          <div className="text-[10px] text-slate-600 max-w-xs mx-auto leading-tight">
            for successfully mastering
          </div>
          <div className={`${isEnlarged ? 'text-lg sm:text-xl' : 'text-xs sm:text-sm'} font-bold text-indigo-900 mt-1`}>
            Python & Generative AI Certification
          </div>
          <div className="text-[9px] text-slate-500 font-mono mt-1">
            Core Python · Prompt Engineering · Large Language Models (LLMs)
          </div>
        </div>

        {/* Certificate Footer */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-slate-100 text-[8px] font-mono text-slate-500">
          <div>
            <span className="block text-slate-400">ISSUING ENTITY</span>
            <span className="font-semibold text-slate-700">Ganitank Technical Education</span>
          </div>
          <div className="text-right">
            <span className="block text-slate-400">DOCUMENT ID</span>
            <span className="font-semibold text-slate-700">{item.docCode}</span>
          </div>
        </div>
      </div>
    );
  }

  if (item.id === 'cert-anthropic') {
    return (
      <div className={`relative w-full overflow-hidden bg-[#fdfcf9] border border-[#e8dfd5] select-none ${isEnlarged ? 'p-8 sm:p-12 min-h-[460px]' : 'p-4 sm:p-5 h-48'} flex flex-col justify-between ${className}`}>
        {/* Subtle warm accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#d97706]" />
        
        {/* Header */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#2a2620] text-[#f7efe6] font-mono font-bold text-[11px] flex items-center justify-center">
              A
            </div>
            <div>
              <div className="font-bold tracking-wider text-[11px] text-[#2a2620] uppercase font-sans">
                ANTHROPIC EDUCATION
              </div>
              <div className="text-[8px] font-mono text-stone-500 uppercase tracking-wider">
                Official Learning Track
              </div>
            </div>
          </div>
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 bg-[#fef3c7] border border-[#fde68a] text-[#92400e] rounded-xs">
            MCP CERTIFIED
          </span>
        </div>

        {/* Body */}
        <div className="relative z-10 text-center my-auto py-2">
          <div className="text-[9px] font-mono tracking-widest text-stone-500 uppercase mb-1">
            Certificate of Achievement awarded to
          </div>
          <div className={`${isEnlarged ? 'text-2xl sm:text-3xl' : 'text-base sm:text-lg'} font-bold text-[#1f1d1a] tracking-tight font-sans`}>
            Akash Jaiswal
          </div>
          <div className="w-12 h-0.5 bg-[#d97706] mx-auto my-1.5" />
          <div className="text-[9px] text-stone-600">
            for successfully completing
          </div>
          <div className={`${isEnlarged ? 'text-lg sm:text-xl' : 'text-xs sm:text-sm'} font-bold text-[#78350f] mt-1`}>
            Introduction to Model Context Protocol
          </div>
          <div className="text-[9px] text-stone-500 font-mono mt-1">
            AI Tool Integration · External Context Bridges · Protocol Standards
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-[#ede7df] text-[8px] font-mono text-stone-600">
          <div>
            <span className="block text-stone-400">COMPLETION DATE</span>
            <span className="font-semibold text-stone-800">{item.completionDate}</span>
          </div>
          <div className="text-right">
            <span className="block text-stone-400">PROTOCOL VERIFIER</span>
            <span className="font-semibold text-stone-800">{item.docCode}</span>
          </div>
        </div>
      </div>
    );
  }

  if (item.id === 'cert-infosys') {
    return (
      <div className={`relative w-full overflow-hidden bg-[#f7faff] border border-[#d6e4f7] select-none ${isEnlarged ? 'p-8 sm:p-12 min-h-[460px]' : 'p-4 sm:p-5 h-48'} flex flex-col justify-between ${className}`}>
        {/* Subtle brand blue top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#007cc3]" />

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#007cc3] text-white font-mono font-bold text-[10px] flex items-center justify-center">
              iS
            </div>
            <div>
              <div className="font-bold tracking-wider text-[11px] text-[#004870] uppercase font-sans">
                INFOSYS SPRINGBOARD
              </div>
              <div className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                Digital Skills Academy
              </div>
            </div>
          </div>
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 bg-sky-50 border border-sky-200 text-sky-900 rounded-xs">
            COURSE COMPLETION
          </span>
        </div>

        {/* Body */}
        <div className="relative z-10 text-center my-auto py-2">
          <div className="text-[9px] font-mono tracking-widest text-slate-500 uppercase mb-1">
            Course Completion Certificate
          </div>
          <div className={`${isEnlarged ? 'text-2xl sm:text-3xl' : 'text-base sm:text-lg'} font-bold text-slate-900 tracking-tight font-sans`}>
            Akash Jaiswal
          </div>
          <div className="w-12 h-0.5 bg-[#007cc3] mx-auto my-1.5" />
          <div className="text-[9px] text-slate-600">
            demonstrating foundational proficiency in
          </div>
          <div className={`${isEnlarged ? 'text-lg sm:text-xl' : 'text-xs sm:text-sm'} font-bold text-[#004870] mt-1`}>
            Basics of Python
          </div>
          <div className="text-[9px] text-slate-500 font-mono mt-1">
            Programming Logic · Syntax · Data Structures · Algorithmic Basics
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-[#e2edfa] text-[8px] font-mono text-slate-600">
          <div>
            <span className="block text-slate-400">ISSUANCE DATE</span>
            <span className="font-semibold text-slate-800">{item.completionDate}</span>
          </div>
          <div className="text-right">
            <span className="block text-slate-400">SPRINGBOARD ID</span>
            <span className="font-semibold text-slate-800">{item.docCode}</span>
          </div>
        </div>
      </div>
    );
  }

  if (item.id === 'ach-iitb') {
    return (
      <div className={`relative w-full overflow-hidden bg-[#fafcf9] border border-emerald-200/80 select-none ${isEnlarged ? 'p-8 sm:p-12 min-h-[460px]' : 'p-4 sm:p-5 h-48'} flex flex-col justify-between ${className}`}>
        {/* Subtle IITB red/gold accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#059669]" />

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#064e3b] text-white font-mono font-bold text-[9px] flex items-center justify-center">
              IITB
            </div>
            <div>
              <div className="font-bold tracking-wider text-[11px] text-[#064e3b] uppercase font-sans">
                E-CELL, IIT BOMBAY
              </div>
              <div className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                The Entrepreneurship Cell
              </div>
            </div>
          </div>
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xs">
            OPPORTUNITY OFFER
          </span>
        </div>

        {/* Body */}
        <div className="relative z-10 text-center my-auto py-2">
          <div className="text-[9px] font-mono tracking-widest text-slate-500 uppercase mb-1">
            Official Appointment Letter
          </div>
          <div className={`${isEnlarged ? 'text-2xl sm:text-3xl' : 'text-base sm:text-lg'} font-bold text-slate-900 tracking-tight font-sans`}>
            Akash Jaiswal
          </div>
          <div className="w-12 h-0.5 bg-emerald-600 mx-auto my-1.5" />
          <div className="text-[9px] text-slate-600">
            Selected & Appointed for
          </div>
          <div className={`${isEnlarged ? 'text-lg sm:text-xl' : 'text-xs sm:text-sm'} font-bold text-emerald-950 mt-1`}>
            Campus Ambassador Program
          </div>
          <div className="text-[9px] text-slate-500 font-mono mt-1">
            Remote Operations · Online Reporting to Mumbai Headquarters
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-emerald-100 text-[8px] font-mono text-slate-600">
          <div>
            <span className="block text-slate-400">OFFER DATE</span>
            <span className="font-semibold text-slate-800">{item.completionDate}</span>
          </div>
          <div className="text-right">
            <span className="block text-slate-400">OFFER ID</span>
            <span className="font-semibold text-slate-800">{item.docCode}</span>
          </div>
        </div>
      </div>
    );
  }

  // Hackathon Badge
  return (
    <div className={`relative w-full overflow-hidden bg-slate-900 border border-slate-700 text-white select-none ${isEnlarged ? 'p-8 sm:p-12 min-h-[460px]' : 'p-4 sm:p-5 h-48'} flex flex-col justify-between ${className}`}>
      {/* High-tech matrix background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-500 text-white font-mono font-bold text-[10px] flex items-center justify-center">
            24h
          </div>
          <div>
            <div className="font-bold tracking-wider text-[11px] text-white uppercase font-sans">
              24-HOUR HACKATHON
            </div>
            <div className="text-[8px] font-mono text-slate-400 uppercase tracking-wider">
              Participant Registry
            </div>
          </div>
        </div>
        <span className="text-[9px] font-mono font-semibold px-2 py-0.5 bg-slate-800 border border-slate-600 text-indigo-300 rounded-xs">
          PARTICIPANT BADGE
        </span>
      </div>

      {/* Body */}
      <div className="relative z-10 text-center my-auto py-2">
        <div className="text-[9px] font-mono tracking-widest text-slate-400 uppercase mb-1">
          Hacker Credential · Team NYX
        </div>
        <div className={`${isEnlarged ? 'text-2xl sm:text-3xl' : 'text-base sm:text-lg'} font-bold text-white tracking-tight font-sans`}>
          Akash Jaiswal
        </div>
        <div className="w-12 h-0.5 bg-indigo-500 mx-auto my-1.5" />
        <div className="text-[9px] text-slate-300">
          Track & Domain Focus
        </div>
        <div className={`${isEnlarged ? 'text-base sm:text-lg' : 'text-xs sm:text-[13px]'} font-bold text-indigo-300 mt-1`}>
          Cyber Defence & Digital Trust
        </div>
        <div className="text-[9px] text-slate-400 font-mono mt-1">
          Cryptographic Integrity · Threat Analysis · Rapid Prototyping
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-end justify-between pt-2 border-t border-slate-800 text-[8px] font-mono text-slate-400">
        <div>
          <span className="block text-slate-500">TEAM CODE</span>
          <span className="font-semibold text-slate-200">NYX / SECURITY LAB</span>
        </div>
        <div className="text-right">
          <span className="block text-slate-500">BADGE HASH</span>
          <span className="font-semibold text-slate-200">{item.docCode}</span>
        </div>
      </div>
    </div>
  );
};
