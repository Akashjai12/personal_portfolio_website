import React, { useState, useEffect } from 'react';
import { Menu, X, Search, FileText } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './SocialIcons';

interface NavbarProps {
  onConnectClick: () => void;
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick, onOpenCommandPalette, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'progress', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Progress', href: '#progress', id: 'progress' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-indigo-100/60 shadow-[0_4px_24px_rgba(79,70,229,0.04)]'
          : 'bg-white/60 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-[2px] bg-gradient-to-tr from-indigo-600 to-sky-500 transition-transform group-hover:scale-110 shadow-xs" />
          <span className="text-sm font-bold tracking-tight text-slate-900 font-sans group-hover:text-indigo-950 transition-colors">
            Akash Jaiswal
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-slate-100/60 border border-slate-200/50 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-indigo-950 font-semibold shadow-xs border border-indigo-100/60'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button, Search, Resume & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Quick Command Palette trigger */}
          <button
            id="cmd-palette-trigger"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100/80 hover:bg-indigo-50 border border-slate-200/70 text-slate-600 hover:text-indigo-950 text-xs font-mono transition-all cursor-pointer shadow-2xs"
            title="Search anything (Cmd+K or Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden xl:inline text-[11px] font-sans">Search</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-mono text-slate-500 bg-white border border-slate-200 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Resume Dossier button */}
          <button
            onClick={onOpenResume}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50/80 hover:bg-indigo-100/80 border border-indigo-200/80 text-indigo-900 text-xs font-medium transition-all cursor-pointer shadow-2xs"
            title="View technical CV dossier"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>Resume</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 border-r border-slate-200/70 pr-3 mr-1">
            <a
              href="https://github.com/Akashjai12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-indigo-50/60 transition-all hover:scale-110 active:scale-95"
              title="GitHub Profile (Akashjai12)"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aakash-jaiswal-531262308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#0A66C2] hover:bg-blue-50/80 transition-all hover:scale-110 active:scale-95"
              title="LinkedIn Profile (Aakash Jaiswal)"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:aakashjaiswal1190@gmail.com"
              className="p-1.5 rounded-lg text-[#EA4335] hover:bg-red-50/80 transition-all hover:scale-110 active:scale-95"
              title="Gmail (aakashjaiswal1190@gmail.com)"
              aria-label="Gmail Direct"
            >
              <GmailIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onConnectClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:from-indigo-900 hover:to-indigo-950 text-white text-[11px] font-bold tracking-wider uppercase transition-all duration-200 shadow-xs hover:shadow-indigo-500/10 cursor-pointer rounded-xs"
          >
            LET'S CONNECT
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-6 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-1.5 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-slate-950 font-semibold pl-2 border-l-2 border-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="px-2.5 py-1.5 rounded bg-slate-100 text-slate-700 text-xs font-mono flex items-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5 text-indigo-600" />
                <span>Search</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="px-2.5 py-1.5 rounded bg-indigo-50 text-indigo-800 text-xs font-mono flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                <span>Resume</span>
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onConnectClick();
              }}
              className="py-2 px-3 bg-gradient-to-r from-slate-900 to-indigo-950 text-white text-[11px] font-bold tracking-wider uppercase transition-colors text-center rounded-xs"
            >
              LET'S CONNECT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
