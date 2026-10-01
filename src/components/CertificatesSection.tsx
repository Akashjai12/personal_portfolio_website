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
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
              <span className="text-xs font-mono tracking-widest text-indigo-700 font-semibold uppercase block">
                04 / VERIFICATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
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
                <span className="w-2 h-2 rounded-[2px] bg-gradient-to-r from-indigo-500 to-sky-500 inline-block shrink-0 shadow-xs" />
                <h3 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  TECHNICAL CERTIFICATIONS & COURSES
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {CERTIFICATES_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="border border-slate-200/90 bg-white/95 backdrop-blur-xs flex flex-col justify-between hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out group rounded-xs transform-gpu will-change-transform"
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

                        {/* Scannable Pill Tags */}
                        {cert.tags && cert.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {cert.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wide bg-slate-100 text-slate-600 border border-slate-200/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Concise 1-2 line summary */}
                        <p className="text-xs text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
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

            {/* Subtle Divider between Certificates and Achievements */}
            <hr className="border-t border-slate-200/80 my-8 sm:my-10" />

            {/* 2. ACHIEVEMENTS & PARTICIPATION SUBSECTION */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-[2px] bg-gradient-to-r from-teal-500 to-sky-500 inline-block shrink-0 shadow-xs" />
                <h3 className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-900">
                  ACHIEVEMENTS & PARTICIPATION
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ACHIEVEMENTS_DATA.map((ach) => (
                  <div
                    key={ach.id}
                    className="border border-slate-200/90 bg-white/95 backdrop-blur-xs flex flex-col justify-between hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-500/10 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out group rounded-xs transform-gpu will-change-transform"
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

                        {/* Scannable Pill Tags */}
                        {ach.tags && ach.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {ach.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wide bg-slate-100 text-slate-600 border border-slate-200/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Concise summary */}
                        <p className="text-xs text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
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
