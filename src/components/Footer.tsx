import React from 'react';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        
        {/* Left: Brand with square bullet */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-slate-900 inline-block shrink-0" />
          <span className="font-bold text-slate-900">Akash Jaiswal</span>
        </div>

        {/* Center: Direct profile logo icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Akashjai12"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
            title="GitHub (Akashjai12)"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/aakash-jaiswal-531262308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
            title="LinkedIn (Aakash Jaiswal)"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:aakashjaiswal1190@gmail.com"
            className="w-8 h-8 rounded-lg bg-[#EA4335] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
            title="Gmail (aakashjaiswal1190@gmail.com)"
            aria-label="Gmail Direct"
          >
            <GmailIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="font-mono text-[11px] text-slate-500">
          © 2026 Akash Jaiswal. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
