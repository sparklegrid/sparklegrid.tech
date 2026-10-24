import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme, onOpenCommand }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/70 dark:border-white/[0.07] bg-white/80 dark:bg-[#050507]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <Link
          to="/"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Sparklegrid Home"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo.svg"
              alt="Sparklegrid geometric mark"
              className="h-5 w-5"
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spark-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-spark-500" />
            </span>
          </div>
          <span className="font-display text-base font-bold tracking-tight text-zinc-950 dark:text-white">
            Sparklegrid
          </span>
        </Link>

        {/* Desktop Spatial Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-100/70 dark:bg-zinc-900/60 p-1 backdrop-blur-md"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-zinc-950 dark:text-white'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="spatial-nav-pill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-white/[0.1] shadow-sm border border-zinc-200/80 dark:border-white/[0.12]"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions: Command Palette, Theme Toggle, Primary CTA */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/70 px-2.5 py-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:border-spark-500/40 hover:text-zinc-950 dark:hover:text-white transition-colors"
            title="Quick Search (⌘K / Ctrl+K)"
          >
            <Command className="h-3.5 w-3.5 text-spark-600 dark:text-spark-400" />
            <span className="font-mono text-[11px]">⌘K</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 hover:border-spark-500/40 hover:text-zinc-950 dark:hover:text-white transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-spark-600" />
            )}
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-spark-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-spark-500 transition-all"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-[#050507]/95 backdrop-blur-xl"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive
                        ? 'bg-spark-600/10 text-spark-600 dark:text-spark-400'
                        : 'text-zinc-700 dark:text-zinc-300'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </NavLink>
              ))}
              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenCommand();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-white/15 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <Command className="h-3.5 w-3.5" /> Quick Jump
                </button>
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-spark-600 py-2 text-xs font-semibold text-white"
                >
                  Start a Project <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
