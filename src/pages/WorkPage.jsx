import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Globe, Sparkles } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import { CASE_STUDIES } from '../data/siteData';

export default function WorkPage() {
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', 'Web Platform', 'Brand Experience', 'AI Assistant', 'Cloud & Data'];

  const filteredStudies =
    selectedTag === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) =>
          cs.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase()))
        );

  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
            Selected Work
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Projects built for real business impact.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            See how we help brands launch better websites, streamline operations, and delight their customers.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const active = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`rounded-xl border px-4 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? 'border-spark-500 bg-spark-600 text-white'
                    : 'border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Case Studies List */}
        <div className="mt-12 space-y-10">
          {filteredStudies.map((study) => (
            <SpotlightCard
              key={study.id}
              id={study.id}
              className="p-6 sm:p-10 scroll-mt-24"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Narrative */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-spark-600/10 dark:bg-spark-500/15 px-2.5 py-1 font-mono text-xs font-semibold text-spark-600 dark:text-spark-400">
                      {study.slug}
                    </span>
                    <span className="text-xs font-medium text-zinc-500">
                      {study.category} • {study.year}
                    </span>
                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
                      >
                        <Globe className="h-3 w-3" />
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">
                    {study.client}
                  </h2>

                  <p className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                    {study.headline}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-50/80 dark:bg-zinc-950/50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        The Goal
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-50/80 dark:bg-zinc-950/50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-spark-600 dark:text-spark-400">
                        What We Built
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Highlights & Results */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/90 dark:bg-zinc-900/60 p-5 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-white/10 pb-3">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-spark-600 dark:text-spark-400">
                        <Sparkles className="h-3.5 w-3.5" />
                        Key Features Delivered
                      </span>
                      <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        ● Live
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {study.highlights.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 px-3.5 py-2.5"
                        >
                          <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                            {item.label}
                          </span>
                          <span className="rounded-full bg-spark-500/10 px-2.5 py-0.5 text-[11px] font-medium text-spark-600 dark:text-spark-400">
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Results */}
                  <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-white/10">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                      Key Outcomes
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {study.impact.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 p-3"
                        >
                          <div className="font-display text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
                            {item.value}
                          </div>
                          <div className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-spark-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-spark-600/20 hover:bg-spark-500 transition-all"
          >
            <span>Start Your Project With Us</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
