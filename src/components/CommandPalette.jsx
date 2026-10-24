import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  Layers,
  Briefcase,
  Sparkles,
  Mail,
  SunMoon,
  Copy,
  Check,
  Home,
} from 'lucide-react';
import { COMPANY, SERVICES, CASE_STUDIES } from '../data/siteData';

export default function CommandPalette({ isOpen, onClose, onToggleTheme }) {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const titleId = useId();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync open state with native <dialog>.showModal() per modern-web-guidance light-dismiss-a-dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setQuery('');
      setSelectedIndex(0);
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Fallback for browsers without native <dialog closedby="any"> support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCloseEvent = () => {
      onClose();
    };
    dialog.addEventListener('close', handleCloseEvent);

    let handleBackdropClick;
    if (typeof HTMLDialogElement !== 'undefined' && !('closedBy' in HTMLDialogElement.prototype)) {
      handleBackdropClick = (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      };
      dialog.addEventListener('click', handleBackdropClick);
    }

    return () => {
      dialog.removeEventListener('close', handleCloseEvent);
      if (handleBackdropClick) {
        dialog.removeEventListener('click', handleBackdropClick);
      }
    };
  }, [onClose]);

  const actions = useMemo(() => {
    const navActions = [
      {
        id: 'nav-home',
        group: 'Pages',
        label: 'Home',
        sub: 'Overview, services & featured work',
        icon: Home,
        run: () => navigate('/'),
      },
      {
        id: 'nav-services',
        group: 'Pages',
        label: 'Services',
        sub: 'Web & Mobile Apps, AI Automation, Design, Cloud & Consulting',
        icon: Layers,
        run: () => navigate('/services'),
      },
      {
        id: 'nav-work',
        group: 'Pages',
        label: 'Selected Work',
        sub: 'Explore client projects & results',
        icon: Briefcase,
        run: () => navigate('/work'),
      },
      {
        id: 'nav-about',
        group: 'Pages',
        label: 'About Sparklegrid',
        sub: 'Our values, story & how we partner',
        icon: Sparkles,
        run: () => navigate('/about'),
      },
      {
        id: 'nav-contact',
        group: 'Pages',
        label: 'Start a Project',
        sub: `Plan your project or email ${COMPANY.email}`,
        icon: Mail,
        run: () => navigate('/contact'),
      },
    ];

    const serviceActions = SERVICES.map((s) => ({
      id: `srv-${s.id}`,
      group: 'Services',
      label: s.title,
      sub: s.summary,
      icon: Layers,
      run: () => navigate(`/services#${s.id}`),
    }));

    const workActions = CASE_STUDIES.map((cs) => ({
      id: `work-${cs.id}`,
      group: 'Projects',
      label: `${cs.client} — ${cs.category}`,
      sub: cs.headline,
      icon: Briefcase,
      run: () => navigate(`/work#${cs.id}`),
    }));

    const utilityActions = [
      {
        id: 'util-copy-email',
        group: 'Quick Actions',
        label: copiedEmail ? `Copied ${COMPANY.email}!` : `Copy Email (${COMPANY.email})`,
        sub: 'Direct project & partnership inquiries',
        icon: copiedEmail ? Check : Copy,
        keepOpen: true,
        run: () => {
          navigator.clipboard?.writeText(COMPANY.email);
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 1800);
        },
      },
      {
        id: 'util-theme',
        group: 'Quick Actions',
        label: 'Switch Light / Dark Theme',
        sub: 'Toggle appearance mode',
        icon: SunMoon,
        run: () => onToggleTheme(),
      },
    ];

    return [...navActions, ...utilityActions, ...serviceActions, ...workActions];
  }, [navigate, onToggleTheme, copiedEmail]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.sub.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q)
    );
  }, [actions, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0
      );
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      const chosen = filtered[selectedIndex];
      chosen.run();
      if (!chosen.keepOpen) {
        onClose();
      }
    }
  };

  return (
    <dialog
      ref={dialogRef}
      {...{ closedby: 'any' }}
      aria-labelledby={titleId}
      onKeyDown={handleKeyDown}
      className="command-dialog m-auto w-[92vw] max-w-xl rounded-2xl border border-zinc-200 dark:border-white/15 bg-white dark:bg-[#0b0b10] p-0 text-zinc-950 dark:text-zinc-100 shadow-2xl"
    >
      <div className="flex flex-col overflow-hidden">
        <h2 id={titleId} className="sr-only">
          Quick Search
        </h2>

        {/* Search Input Header */}
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-white/10 px-4 py-3.5">
          <Search className="h-4 w-4 text-spark-600 dark:text-spark-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to any page, service, or project..."
            className="w-full bg-transparent text-sm text-zinc-950 dark:text-white placeholder-zinc-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-zinc-200 dark:border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-xs text-zinc-500">
              No results found for "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const active = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => {
                    item.run();
                    if (!item.keepOpen) {
                      onClose();
                    }
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                    active
                      ? 'bg-spark-600/10 dark:bg-spark-500/15 text-zinc-950 dark:text-white'
                      : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                        active
                          ? 'border-spark-500/40 bg-spark-600 text-white'
                          : 'border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 text-zinc-500'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-xs font-semibold">{item.label}</span>
                        <span className="rounded bg-zinc-100 dark:bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-zinc-500 dark:text-zinc-400">
                          {item.group}
                        </span>
                      </div>
                      <p className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                      active ? 'translate-x-0.5 text-spark-500' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hints */}
        <div className="flex items-center justify-between border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950/60 px-4 py-2 text-[11px] text-zinc-500">
          <span>↑↓ Navigate • ↵ Select • ESC to close</span>
          <span className="font-medium text-spark-600 dark:text-spark-400">{COMPANY.email}</span>
        </div>
      </div>
    </dialog>
  );
}
