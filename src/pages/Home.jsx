import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import HeroTelemetryVisualizer from '../components/HeroTelemetryVisualizer';
import SpotlightCard from '../components/SpotlightCard';
import InteractiveProductCard from '../components/InteractiveProductCard';
import { COMPANY, SERVICES, CASE_STUDIES, PRINCIPLES } from '../data/siteData';

export default function Home() {
  return (
    <div className="relative">
      {/* Spatial Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-spark-500/25 bg-spark-500/[0.07] px-3.5 py-1.5 text-xs font-medium text-spark-600 dark:text-spark-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen Digital Studio</span>
              </div>

              <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl leading-[1.06]">
                Bringing{' '}
                <span className="bg-gradient-to-r from-spark-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  futuristic energy
                </span>{' '}
                to your digital products.
              </h1>

              <p className="max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We help ambitious brands design and launch modern web & mobile apps, time-saving AI workflows, and unforgettable digital experiences.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-spark-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-spark-600/20 hover:bg-spark-500 transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-white/15 bg-white dark:bg-zinc-900/70 px-5 py-3 text-sm font-medium text-zinc-900 dark:text-zinc-200 hover:border-spark-500/40 transition-colors"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                </Link>
              </div>
            </motion.div>

            {/* Interactive Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <HeroTelemetryVisualizer />
            </motion.div>
          </div>

          {/* Metrics Strip */}
          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {COMPANY.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-zinc-200/80 dark:border-white/[0.07] bg-white/80 dark:bg-zinc-900/40 p-4 sm:p-5 shadow-sm backdrop-blur-md"
              >
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{m.label}</span>
                  <span className="font-medium text-spark-600 dark:text-spark-400">{m.delta}</span>
                </div>
                <div className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Section */}
      <section className="py-20 border-t border-zinc-200/70 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
                What We Do
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Everything you need to launch and grow.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-spark-600 dark:text-spark-400 hover:underline"
            >
              <span>Explore all services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
            {SERVICES.map((service, index) => {
              const spanClass = index < 2 ? 'md:col-span-3' : 'md:col-span-2';
              return (
                <SpotlightCard key={service.id} className={`${spanClass} p-6 sm:p-7 flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-spark-600 dark:text-spark-400">
                        {service.code}
                      </span>
                      <span className="rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                        {service.shortTitle}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold text-zinc-950 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-200/70 dark:border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {service.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {service.metrics}
                      </span>
                      <Link
                        to={`/services#${service.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-spark-600 dark:text-spark-400 hover:translate-x-0.5 transition-transform"
                      >
                        <span>Learn more</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Interactive Products Section */}
      <section className="py-20 border-t border-zinc-200/70 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
                Featured Case Studies
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Explore what we’ve built and shipped
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-spark-600 dark:text-spark-400 hover:underline"
            >
              <span>View all 4 live products</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-8">
            {CASE_STUDIES.slice(0, 3).map((study) => (
              <InteractiveProductCard key={study.id} study={study} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section className="py-20 border-t border-zinc-200/70 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
              Why Sparklegrid
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Designed for clarity, speed, and impact
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div
                key={p.code}
                className="rounded-2xl border border-zinc-200/80 dark:border-white/[0.07] bg-white/80 dark:bg-zinc-900/30 p-6 shadow-sm"
              >
                <span className="font-mono text-xs font-semibold text-spark-600 dark:text-spark-400">
                  {p.code}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-zinc-950 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-zinc-200/70 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SpotlightCard className="p-8 sm:p-12 lg:p-16 text-center">
            <div className="mx-auto max-w-2xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/30 bg-spark-500/10 px-3.5 py-1 text-xs font-semibold text-spark-600 dark:text-spark-400">
                Let’s Build Together
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Ready to bring your next big idea to life?
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Tell us what you’re planning with our interactive project planner, or reach out directly at{' '}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-medium text-spark-600 dark:text-spark-400 underline"
                >
                  {COMPANY.email}
                </a>
                .
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-spark-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-spark-600/20 hover:bg-spark-500 transition-all"
                >
                  <span>Plan Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-white/15 bg-white dark:bg-zinc-900 px-6 py-3.5 text-xs font-semibold text-zinc-900 dark:text-white hover:border-spark-500/40 transition-colors"
                >
                  <span>{COMPANY.email}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
