import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { COMPANY } from '../data/siteData';

export default function Footer({ onOpenCommand }) {
  return (
    <footer className="relative border-t border-zinc-200/80 dark:border-white/[0.07] bg-white/80 dark:bg-[#050507] backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm">
                <img src="/logo.svg" alt="Sparklegrid" className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                Sparklegrid
              </span>
            </Link>

            <p className="max-w-sm text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We design and build modern web & mobile apps, smart AI workflows, and standout digital brands for ambitious teams.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Explore
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Start a Project
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCommand}
                  className="text-xs font-medium text-spark-600 dark:text-spark-400 hover:underline"
                >
                  Quick Search (⌘K) →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Get in Touch
            </div>
            <div className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-spark-600 dark:text-spark-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-zinc-900 dark:text-zinc-200 hover:text-spark-600 dark:hover:text-spark-400 transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-spark-600 dark:text-spark-400 shrink-0" />
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-zinc-900 dark:text-zinc-200 hover:text-spark-600 dark:hover:text-spark-400 transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              {COMPANY.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:border-spark-500/40 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200/70 dark:border-white/[0.06] pt-6 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {COMPANY.legalName} All rights reserved.</p>
          <p>Crafted with precision & energy.</p>
        </div>
      </div>
    </footer>
  );
}
