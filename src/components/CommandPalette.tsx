import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, FolderGit2, Award, Sparkles, FileText, ArrowRight, X, Terminal, Code2, GraduationCap, Mail } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { CERTIFICATES_DATA, ACHIEVEMENTS_DATA } from '../data/certificatesData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject?: (id: string) => void;
  onSelectCert?: (id: string) => void;
}

interface CommandItem {
  id: string;
  category: 'Actions' | 'Projects' | 'Certificates' | 'Navigation';
  title: string;
  subtitle: string;
  badge?: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const navigateTo = (elementId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(elementId);
      if (el) {
        const topOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 50);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    onClose();
  };

  // Build searchable items
  const items: CommandItem[] = useMemo(() => {
    const list: CommandItem[] = [
      {
        id: 'action-resume',
        category: 'Actions',
        title: 'View Official Resume Dossier',
        subtitle: 'Read or download Akash Jaiswal\'s technical CV',
        badge: 'Interactive CV',
        icon: <FileText className="w-4 h-4 text-indigo-600" />,
        action: () => {
          onClose();
          onOpenResume();
        },
      },
      {
        id: 'action-contact',
        category: 'Actions',
        title: 'Send a Message / Let\'s Connect',
        subtitle: 'Jump to direct contact form',
        badge: 'Quick Contact',
        icon: <Mail className="w-4 h-4 text-emerald-600" />,
        action: () => navigateTo('contact'),
      },
      {
        id: 'action-copy-email',
        category: 'Actions',
        title: `Copy Email: ${PERSONAL_INFO.email}`,
        subtitle: 'Copy email address to clipboard',
        badge: 'Clipboard',
        icon: <Terminal className="w-4 h-4 text-sky-600" />,
        action: copyEmail,
      },
      {
        id: 'nav-home',
        category: 'Navigation',
        title: 'Home / Hero Introduction',
        subtitle: 'Akash Jaiswal · 2nd Year BE Information Technology',
        icon: <Code2 className="w-4 h-4 text-slate-500" />,
        action: () => navigateTo('home'),
      },
      {
        id: 'nav-about',
        category: 'Navigation',
        title: 'About Me & Academic Records',
        subtitle: 'Thakur shree dps college (Mumbai University)',
        icon: <GraduationCap className="w-4 h-4 text-slate-500" />,
        action: () => navigateTo('about'),
      },
      {
        id: 'nav-skills',
        category: 'Navigation',
        title: 'Skills & Capabilities',
        subtitle: 'Frontend, UI/UX, GenAI, AI Agents & Automation',
        icon: <Sparkles className="w-4 h-4 text-amber-500" />,
        action: () => navigateTo('skills'),
      },
      {
        id: 'nav-projects',
        category: 'Navigation',
        title: 'Projects Directory',
        subtitle: 'Alyuca, Context Studio, Carbon Tractor',
        icon: <FolderGit2 className="w-4 h-4 text-indigo-500" />,
        action: () => navigateTo('projects'),
      },
      {
        id: 'nav-certs',
        category: 'Navigation',
        title: 'Certifications & Achievements',
        subtitle: 'Ganitank, Anthropic MCP, Infosys, IIT Bombay CA',
        icon: <Award className="w-4 h-4 text-teal-500" />,
        action: () => navigateTo('certificates'),
      },
    ];

    // Add projects
    PROJECTS.forEach((p) => {
      list.push({
        id: `project-${p.id}`,
        category: 'Projects',
        title: p.title,
        subtitle: `${p.projectNumber} · ${p.category} · ${p.domainOrScopeValue}`,
        badge: p.statusBadge,
        icon: <FolderGit2 className="w-4 h-4 text-indigo-600" />,
        action: () => navigateTo('projects'),
      });
    });

    // Add certificates
    CERTIFICATES_DATA.forEach((c) => {
      list.push({
        id: `cert-${c.id}`,
        category: 'Certificates',
        title: c.title,
        subtitle: `${c.issuer} · ${c.docCode}`,
        badge: 'Verified',
        icon: <Award className="w-4 h-4 text-indigo-500" />,
        action: () => navigateTo('certificates'),
      });
    });

    ACHIEVEMENTS_DATA.forEach((a) => {
      list.push({
        id: `ach-${a.id}`,
        category: 'Certificates',
        title: a.title,
        subtitle: `${a.issuer} · ${a.docCode}`,
        badge: a.badgeLabel,
        icon: <Award className="w-4 h-4 text-teal-600" />,
        action: () => navigateTo('certificates'),
      });
    });

    return list;
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via parent
          const btn = document.getElementById('cmd-palette-trigger');
          btn?.click();
        }
        return;
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-indigo-100 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[75vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 bg-white">
          <Search className="w-4 h-4 text-indigo-600 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, certificate or section..."
            className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-2 divide-y divide-slate-50">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400 font-mono">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`px-3.5 py-2.5 flex items-center justify-between rounded-xs cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-indigo-50/70 border border-indigo-100 text-indigo-950'
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-1.5 rounded bg-white border border-slate-200/80 shrink-0 shadow-2xs">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="text-[9px] font-mono font-medium px-1.5 py-0.2 rounded bg-indigo-100/70 text-indigo-800">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[10px] font-mono text-slate-400 uppercase hidden sm:inline">
                      {item.category}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-0.5 text-indigo-600' : 'text-slate-300'}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-indigo-600 font-semibold">Akash Jaiswal Portfolio</span>
        </div>
      </div>
    </div>
  );
};
