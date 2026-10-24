import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import { SERVICES } from '../data/siteData';

export default function ServicesPage() {
  const [activePillar, setActivePillar] = useState(SERVICES[0].id);

  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
            Our Services
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Solutions designed around your goals.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Whether you’re launching a brand-new product, refreshing your company website, or automating everyday operations with AI, we handle design, build, and launch under one roof.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const active = activePillar === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActivePillar(s.id)}
                className={`rounded-xl border px-4 py-2 text-xs font-medium transition-all ${
                  active
                    ? 'border-spark-500 bg-spark-600 text-white shadow-sm'
                    : 'border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-spark-500/40'
                }`}
              >
                {s.shortTitle}
              </a>
            );
          })}
        </div>

        {/* Detailed Service Cards */}
        <div className="mt-12 space-y-8">
          {SERVICES.map((service) => (
            <SpotlightCard
              key={service.id}
              id={service.id}
              className="p-6 sm:p-10 scroll-mt-24"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Left Column: Overview & Process */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-spark-600/10 dark:bg-spark-500/15 px-2.5 py-1 font-mono text-xs font-semibold text-spark-600 dark:text-spark-400">
                      {service.code}
                    </span>
                    <span className="text-xs font-medium text-zinc-500">
                      {service.metrics}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Simple 4-Step Flow */}
                  <div className="pt-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                      How It Works
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {service.steps.map((step, i) => (
                        <React.Fragment key={step}>
                          <span className="rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-900 dark:text-zinc-200">
                            {step}
                          </span>
                          {i < service.steps.length - 1 && (
                            <span className="text-xs text-spark-500">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: What's Included */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-200/80 dark:border-white/[0.07] bg-zinc-50/80 dark:bg-zinc-900/60 p-5 sm:p-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                      What’s Included
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                        >
                          <CheckCircle2 className="h-4 w-4 text-spark-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-2.5 py-0.5 text-xs text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.shortTitle)}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-spark-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-spark-500 transition-colors"
                    >
                      <span>Start a {service.shortTitle} Project</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}
