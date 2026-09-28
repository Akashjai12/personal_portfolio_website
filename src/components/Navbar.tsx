import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './SocialIcons';

interface NavbarProps {
  onConnectClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick }) => {
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
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-2 h-2 bg-slate-900 transition-transform group-hover:scale-110" />
          <span className="text-sm font-bold tracking-tight text-slate-900 font-sans">
            Akash Jaiswal
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-slate-950 font-semibold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 border-r border-slate-200/80 pr-3 mr-1">
            <a
              href="https://github.com/Akashjai12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all hover:scale-110 active:scale-95"
              title="GitHub Profile (Akashjai12)"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aakash-jaiswal-531262308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#0A66C2] hover:bg-blue-50 transition-all hover:scale-110 active:scale-95"
              title="LinkedIn Profile (Aakash Jaiswal)"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:aakashjaiswal1190@gmail.com"
              className="p-1.5 rounded-lg text-[#EA4335] hover:bg-red-50 transition-all hover:scale-110 active:scale-95"
              title="Gmail (aakashjaiswal1190@gmail.com)"
              aria-label="Gmail Direct"
            >
              <GmailIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onConnectClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#122452] hover:bg-[#0c1836] text-white text-[11px] font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
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
              <a
                href="https://github.com/Akashjai12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aakash-jaiswal-531262308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:aakashjaiswal1190@gmail.com"
                className="w-8 h-8 rounded-lg bg-[#EA4335] text-white flex items-center justify-center"
                title="Gmail"
              >
                <GmailIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onConnectClick();
              }}
              className="py-2 px-3 bg-[#122452] hover:bg-[#0c1836] text-white text-[11px] font-bold tracking-wider uppercase transition-colors text-center"
            >
              LET'S CONNECT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
