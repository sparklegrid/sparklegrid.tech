import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);

  // Default to light mode unless explicitly set to dark in localStorage
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('color-scheme');
      if (stored === 'dark' || stored === 'light') return stored;
    } catch (_) {}
    return 'light';
  });

  const applySchemeToDom = useCallback((resolvedScheme, storedValue) => {
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.content = storedValue ?? 'light dark';
    }
    document.documentElement.classList.toggle('dark', resolvedScheme === 'dark');
    setTheme(resolvedScheme);
  }, []);

  // Two-state toggle logic per modern-web-guidance (dark-mode-toggle)
  const handleToggleTheme = useCallback(() => {
    const target = theme === 'dark' ? 'light' : 'dark';
    const systemPrefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const systemScheme = systemPrefersDark ? 'dark' : 'light';

    try {
      if (target === systemScheme) {
        localStorage.removeItem('color-scheme');
        applySchemeToDom(target, null);
      } else {
        localStorage.setItem('color-scheme', target);
        applySchemeToDom(target, target);
      }
    } catch (_) {
      applySchemeToDom(target, target);
    }
  }, [theme, applySchemeToDom]);

  // Keep tabs in sync via window storage event
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'color-scheme') {
        const val = e.newValue;
        const resolved = val === 'dark' ? 'dark' : 'light';
        applySchemeToDom(resolved, val);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [applySchemeToDom]);

  // Global Cmd+K / Ctrl+K shortcut for Command Palette
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-spark-600 selection:text-white">
      <ScrollManager />

      {/* Spatial Laser Grid Background Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-spatial-grid-light dark:bg-spatial-grid-dark bg-[size:48px_48px] mask-radial-faded"
      />
      {/* Top Ambient Electric Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-spark-600/10 dark:bg-spark-600/15 blur-[130px]"
      />

      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenCommand={() => setCommandOpen(true)}
      />

      <main className="relative z-10 flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenCommand={() => setCommandOpen(true)} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer onOpenCommand={() => setCommandOpen(true)} />

      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onToggleTheme={handleToggleTheme}
      />
    </div>
  );
}
