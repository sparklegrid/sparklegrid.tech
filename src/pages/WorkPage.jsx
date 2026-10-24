import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import InteractiveProductCard from '../components/InteractiveProductCard';
import { CASE_STUDIES } from '../data/siteData';

export default function WorkPage() {
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = [
    'All',
    'Fintech & Security',
    'E-Commerce',
    'Consumer App',
    'Brand Experience',
  ];

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
            Selected Work & Live Products
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Real products built for real impact.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Explore our live deployments across financial security infrastructure, beauty e-commerce, sports community apps, and digital hospitality.
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

        {/* Interactive Case Studies List */}
        <div className="mt-12 space-y-10">
          {filteredStudies.map((study) => (
            <InteractiveProductCard key={study.id} study={study} />
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
