import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import { COMPANY, PRINCIPLES, TIMELINE } from '../data/siteData';

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro Story */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
              About Sparklegrid
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.08]">
              Blending creativity, product design, and modern technology.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We cultivate lasting partnerships with our clients to deliver thoughtful, reliable digital solutions. From bespoke web and mobile applications to brand identity and smart AI automation, our team brings together creative design and dependable execution under one roof.
            </p>
          </div>

          <SpotlightCard className="lg:col-span-5 p-6 sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-spark-600 dark:text-spark-400">
              At a Glance
            </div>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between border-b border-zinc-200/70 dark:border-white/10 pb-2.5">
                <dt className="text-xs text-zinc-500">Company</dt>
                <dd className="text-xs font-semibold text-zinc-950 dark:text-white">
                  {COMPANY.legalName}
                </dd>
              </div>
              <div className="flex justify-between border-b border-zinc-200/70 dark:border-white/10 pb-2.5">
                <dt className="text-xs text-zinc-500">Core Focus</dt>
                <dd className="text-xs font-medium text-zinc-900 dark:text-zinc-200">
                  Apps, AI Automation & Brand Design
                </dd>
              </div>
              <div className="flex justify-between border-b border-zinc-200/70 dark:border-white/10 pb-2.5">
                <dt className="text-xs text-zinc-500">Clients</dt>
                <dd className="text-xs font-medium text-zinc-900 dark:text-zinc-200">
                  Startups & Growing Businesses
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-xs text-zinc-500">Direct Email</dt>
                <dd className="text-xs font-medium text-spark-600 dark:text-spark-400">
                  {COMPANY.email}
                </dd>
              </div>
            </dl>
          </SpotlightCard>
        </div>

        {/* Operating Principles */}
        <div className="mt-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
            Our Values
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-zinc-950 dark:text-white">
            How We Work With You
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <SpotlightCard key={p.code} className="p-6 sm:p-8">
                <div className="font-mono text-xs font-semibold text-spark-600 dark:text-spark-400">
                  {p.code}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-zinc-950 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {p.body}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="mt-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
            Our Journey
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-zinc-950 dark:text-white">
            Growing alongside our clients
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className="relative rounded-2xl border border-zinc-200/80 dark:border-white/[0.07] bg-white/80 dark:bg-zinc-900/40 p-6 shadow-sm"
              >
                <div className="font-display text-2xl font-bold text-spark-600 dark:text-spark-400">
                  {item.year}
                </div>
                <h3 className="mt-2 font-display text-base font-bold text-zinc-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-8 shadow-sm">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-spark-600 dark:text-spark-400">
              Work With Us
            </div>
            <h3 className="mt-1 font-display text-2xl font-bold text-zinc-950 dark:text-white">
              Have a project in mind? Let’s talk.
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-spark-600 px-5 py-3 text-sm font-semibold text-white hover:bg-spark-500 transition-colors"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
