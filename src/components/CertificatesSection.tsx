import React, { useState } from 'react';
import { ArrowRight, Calendar, Building2, ShieldCheck, Award } from 'lucide-react';
import { CERTIFICATES_DATA, ACHIEVEMENTS_DATA, CertificateItem } from '../data/certificatesData';
import { CertificateThumbnail } from './CertificateThumbnail';
import { CertificateModal } from './CertificateModal';

export const CertificatesSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column (Main Section Header) */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block mb-1.5">
              04 / VERIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Certificates
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-4 max-w-xs">
              Official document registry, verified technical certifications, and formal course completions.
            </p>
          </div>

          {/* Right Column (Certificates Grid & Achievements) */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* 1. CERTIFICATES GRID */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-slate-900 inline-block shrink-0" />
                <h3 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  TECHNICAL CERTIFICATIONS & COURSES
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {CERTIFICATES_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="border border-slate-200 bg-white flex flex-col justify-between hover:border-slate-400 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div>
                      {/* Certificate Image Thumbnail */}
                      <div 
                        onClick={() => setSelectedItem(cert)}
                        className="cursor-pointer border-b border-slate-100 overflow-hidden bg-slate-50"
                        title="Click to enlarge certificate"
                      >
                        <CertificateThumbnail 
                          item={cert} 
                          className="transition-transform duration-300 group-hover:scale-[1.01]" 
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        {/* Header metadata */}
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-2">
                          <span className="uppercase tracking-wider font-semibold text-slate-600">
                            {cert.issuer}
                          </span>
                          {cert.completionDate && (
                            <span>{cert.completionDate}</span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                          {cert.title}
                        </h4>

                        {/* Concise 1-2 line summary */}
                        <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                          {cert.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Action */}
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">
                        {cert.docCode}
                      </span>

                      <button
                        onClick={() => setSelectedItem(cert)}
                        className="text-xs font-mono font-bold text-slate-900 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                      >
                        <span>View Certificate</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. ACHIEVEMENTS & PARTICIPATION SUBSECTION */}
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-slate-900 inline-block shrink-0" />
                <h3 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  ACHIEVEMENTS & PARTICIPATION
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ACHIEVEMENTS_DATA.map((ach) => (
                  <div
                    key={ach.id}
                    className="border border-slate-200 bg-white flex flex-col justify-between hover:border-slate-400 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div>
                      {/* Document / Badge Thumbnail */}
                      <div 
                        onClick={() => setSelectedItem(ach)}
                        className="cursor-pointer border-b border-slate-100 overflow-hidden bg-slate-50"
                        title="Click to enlarge document"
                      >
                        <CertificateThumbnail 
                          item={ach} 
                          className="transition-transform duration-300 group-hover:scale-[1.01]" 
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        {/* Header metadata */}
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-2">
                          <span className="uppercase tracking-wider font-semibold text-slate-600">
                            {ach.badgeLabel}
                          </span>
                          {ach.completionDate && (
                            <span>{ach.completionDate}</span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                          {ach.title}
                        </h4>

                        {/* Issuer / Team */}
                        <div className="text-[11px] font-mono text-slate-500 mt-1">
                          {ach.issuer}
                        </div>

                        {/* Concise summary */}
                        <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                          {ach.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Action */}
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">
                        {ach.docCode}
                      </span>

                      <button
                        onClick={() => setSelectedItem(ach)}
                        className="text-xs font-mono font-bold text-slate-900 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                      >
                        <span>View Document</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Enlarged Certificate Lightbox / Modal */}
      <CertificateModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </section>
  );
};
