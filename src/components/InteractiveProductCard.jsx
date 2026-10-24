import React, { useState } from 'react';
import {
  Globe,
  ArrowUpRight,
  Lock,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function InteractiveProductCard({ study, compact = false }) {
  const fallbackScreenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    study.liveUrl
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  const [imgSrc, setImgSrc] = useState(study.screenshotUrl || fallbackScreenshotUrl);

  return (
    <SpotlightCard id={study.id} className="p-6 sm:p-8 lg:p-10 scroll-mt-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        {/* Left Column: Story & Outcomes */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-md bg-spark-600/10 dark:bg-spark-500/15 px-2.5 py-1 font-mono text-xs font-semibold text-spark-600 dark:text-spark-400">
              {study.slug}
            </span>
            <span className="text-xs font-medium text-zinc-500">
              {study.category}
            </span>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <Globe className="h-3 w-3" />
                <span>{study.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">
            {study.client}
          </h3>

          <p className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {study.headline}
          </p>

          {!compact && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
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
          )}

          {/* Impact Metrics */}
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            {study.impact.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50/70 dark:bg-zinc-900/60 p-3"
              >
                <div className="font-display text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                  {item.value}
                </div>
                <div className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags & Direct Link */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-950 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-zinc-950 hover:bg-spark-600 dark:hover:bg-spark-500 dark:hover:text-white transition-colors"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Clean Browser Mockup with Actual Website Screenshot */}
        <div className="lg:col-span-6 space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-xl">
            {/* Browser Top Chrome */}
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 bg-zinc-100/90 dark:bg-zinc-900 px-3.5 py-2.5 text-[11px] text-zinc-500">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 truncate rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-600 dark:text-zinc-300 hover:border-spark-500/40 max-w-[68%] transition-colors"
              >
                <Lock className="h-2.5 w-2.5 text-emerald-500 shrink-0" />
                <span className="truncate">{study.liveUrl}</span>
              </a>

              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-spark-600 dark:text-spark-400 hover:underline shrink-0"
              >
                <span>Open</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Live Website Screenshot */}
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900"
            >
              <img
                src={imgSrc}
                alt={`${study.client} website screenshot`}
                loading="lazy"
                onError={() => {
                  if (imgSrc !== fallbackScreenshotUrl) {
                    setImgSrc(fallbackScreenshotUrl);
                  }
                }}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-4">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-950/90 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                  <span>Open {study.client}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </div>

          {/* Key Highlights Strip */}
          {study.highlights && (
            <div className="grid grid-cols-3 gap-2">
              {study.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl border border-zinc-200/80 dark:border-white/[0.07] bg-zinc-50/80 dark:bg-zinc-900/50 px-3 py-2 flex items-center justify-between gap-1.5"
                >
                  <div className="min-w-0">
                    <div className="truncate text-[11px] font-semibold text-zinc-900 dark:text-white">
                      {h.label}
                    </div>
                    <div className="truncate text-[10px] text-zinc-500 dark:text-zinc-400">
                      {h.status}
                    </div>
                  </div>
                  <CheckCircle2 className="h-3.5 w-3.5 text-spark-500 shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}


