import React, { useEffect, useRef } from 'react';
import { X, Calendar, Building2, ShieldCheck, ExternalLink } from 'lucide-react';
import { CertificateItem } from '../data/certificatesData';
import { CertificateThumbnail } from './CertificateThumbnail';

interface CertificateModalProps {
  item: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ item, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!item) return;

    // Save previous active element to restore focus on close
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

    // Find first focusable element or default to close button
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modalElement = modalRef.current;
    
    if (modalElement) {
      const focusableElements = modalElement.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Keyboard Navigation: Close on Escape key
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // 2. Focus Trapping: Cycle focus within modal on Tab and Shift+Tab
      if (e.key === 'Tab') {
        if (!modalElement) return;
        const focusableElements = Array.from(
          modalElement.querySelectorAll<HTMLElement>(focusableSelector)
        ).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Backward tab: if on first element, wrap around to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Forward tab: if on last element, wrap around to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      if (previouslyFocusedElementRef.current && typeof previouslyFocusedElementRef.current.focus === 'function') {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white border border-slate-200 shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden text-slate-900 animate-in zoom-in-95 duration-150 focus:outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-slate-900 inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-semibold">
              {item.type === 'certificate' ? 'Verified Certificate' : 'Achievement & Opportunity Record'}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-white border border-slate-200 text-slate-700">
              {item.docCode}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-colors cursor-pointer rounded-xs"
            aria-label="Close modal (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Render Full Certificate View */}
          <div className="border border-slate-200 shadow-sm">
            <CertificateThumbnail item={item} isEnlarged={true} />
          </div>

          {/* Metadata Block */}
          <div className="border border-slate-200 bg-slate-50/60 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Title
                </span>
                <h3 id="certificate-modal-title" className="text-sm sm:text-base font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 bg-white border border-slate-200 text-slate-700 font-semibold">
                {item.badgeLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  <strong className="font-semibold text-slate-900">Issued by:</strong> {item.issuer}
                </span>
              </div>

              {item.completionDate && (
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      {item.type === 'certificate' ? 'Completed:' : 'Date:'}
                    </strong>{' '}
                    {item.completionDate}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-200/80">
              {item.summary}
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/80">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wide bg-slate-100 text-slate-600 border border-slate-200/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            {item.type === 'certificate' ? 'Official Course Completion Document' : 'Official Program Opportunity Record'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
