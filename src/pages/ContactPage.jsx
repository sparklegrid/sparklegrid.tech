import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import { COMPANY, SERVICES } from '../data/siteData';

const TIMELINES = [
  'Quick Launch (4–8 Weeks)',
  'Full Product Build (2–4 Months)',
  'Ongoing Partnership',
  'Design or Strategy Refresh',
];

const BUDGET_TIERS = [
  'Starter / MVP',
  'Growth Product',
  'Full-Scale Platform',
  'Not sure yet — let’s discuss',
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service');

  const [selectedServices, setSelectedServices] = useState(() =>
    initialService ? [initialService] : ['Web & Mobile Apps', 'Design & Branding']
  );
  const [timeline, setTimeline] = useState(TIMELINES[0]);
  const [budget, setBudget] = useState(BUDGET_TIERS[1]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [notes, setNotes] = useState('');
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  useEffect(() => {
    if (initialService && !selectedServices.includes(initialService)) {
      setSelectedServices((prev) => [...prev, initialService]);
    }
  }, [initialService]);

  const toggleService = (shortTitle) => {
    setSelectedServices((prev) =>
      prev.includes(shortTitle)
        ? prev.length > 1
          ? prev.filter((s) => s !== shortTitle)
          : prev
        : [...prev, shortTitle]
    );
  };

  const compiledBrief = useMemo(() => {
    return [
      `Project Inquiry — Sparklegrid`,
      `Name: ${name || '[Your Name]'}${organization ? ` (${organization})` : ''}`,
      `Email: ${email || '[Your Email]'}`,
      `Interested In: ${selectedServices.join(', ')}`,
      `Timeline: ${timeline}`,
      `Project Scale: ${budget}`,
      `---`,
      `Project Details:`,
      notes || '[Tell us a bit about your idea or goals...]',
    ].join('\n');
  }, [name, organization, email, selectedServices, timeline, budget, notes]);

  const handleCopyBrief = () => {
    navigator.clipboard?.writeText(compiledBrief);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry: ${organization || name || 'New Project'} — ${selectedServices.join(' + ')}`
    );
    const body = encodeURIComponent(compiledBrief);
    setDispatched(true);
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark-600 dark:text-spark-400">
            Get in Touch
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Let’s plan your project.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Choose what you need help with below and send us a note, or email us directly at{' '}
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-medium text-spark-600 dark:text-spark-400 underline"
            >
              {COMPANY.email}
            </a>
            .
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Left: Interactive Planner Form */}
          <SpotlightCard className="lg:col-span-7 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Step 1: Services */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                  1. What can we help you with?
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const selected = selectedServices.includes(s.shortTitle);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleService(s.shortTitle)}
                        className={`rounded-xl border px-4 py-2 text-xs font-medium transition-all ${
                          selected
                            ? 'border-spark-500 bg-spark-600 text-white shadow-sm'
                            : 'border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-spark-500/40'
                        }`}
                      >
                        {s.shortTitle}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Timeline */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                  2. Ideal Timeline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TIMELINES.map((item) => {
                    const active = timeline === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTimeline(item)}
                        className={`rounded-xl border px-3.5 py-2.5 text-left text-xs font-medium transition-all ${
                          active
                            ? 'border-spark-500 bg-spark-600/10 dark:bg-spark-500/20 text-spark-700 dark:text-spark-300 font-semibold'
                            : 'border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Project Scale */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                  3. Project Scale
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BUDGET_TIERS.map((tier) => {
                    const active = budget === tier;
                    return (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setBudget(tier)}
                        className={`rounded-xl border px-3.5 py-2.5 text-left text-xs transition-all ${
                          active
                            ? 'border-spark-500 bg-spark-600/10 dark:bg-spark-500/20 text-spark-700 dark:text-spark-300 font-semibold'
                            : 'border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400'
                        }`}
                      >
                        {tier}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Details */}
              <div className="space-y-4 pt-2 border-t border-zinc-200/70 dark:border-white/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  4. Your Details
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="scoper-name" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="scoper-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-950 dark:text-white focus:border-spark-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="scoper-email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="scoper-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-950 dark:text-white focus:border-spark-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="scoper-org" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Company (Optional)
                    </label>
                    <input
                      id="scoper-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Your Company"
                      className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-950 dark:text-white focus:border-spark-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="scoper-notes" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Tell us about your project
                  </label>
                  <textarea
                    id="scoper-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share your goals, ideas, or anything you'd like to build..."
                    className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-950 dark:text-white focus:border-spark-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-spark-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-spark-600/20 hover:bg-spark-500 transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-white/15 bg-white dark:bg-zinc-900 px-4 py-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-spark-500/40 transition-colors"
                >
                  {copiedBrief ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied Summary!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Summary</span>
                    </>
                  )}
                </button>
              </div>

              {dispatched && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>
                    Opening your email app addressed to <strong>{COMPANY.email}</strong>.
                  </span>
                </div>
              )}
            </form>
          </SpotlightCard>

          {/* Right Column: Project Summary & Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Summary Card */}
            <SpotlightCard className="p-6">
              <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-white/10 pb-3">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-spark-600 dark:text-spark-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Your Project Summary
                </span>
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="text-xs font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1"
                >
                  {copiedBrief ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedBrief ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="mt-3 whitespace-pre-wrap font-sans text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {compiledBrief}
              </pre>
            </SpotlightCard>

            {/* Direct Contact Channels Card */}
            <SpotlightCard className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-spark-600 dark:text-spark-400">
                  Direct Channels
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Quick Response
                </span>
              </div>

              <div className="mt-4 space-y-2.5 text-sm">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center justify-between rounded-xl border border-zinc-200/80 dark:border-white/[0.07] bg-zinc-50/70 dark:bg-zinc-900/50 px-4 py-3 hover:border-spark-500/40 transition-colors"
                >
                  <span className="flex items-center gap-2.5 text-zinc-600 dark:text-zinc-400">
                    <Mail className="h-4 w-4 text-spark-600 dark:text-spark-400" />
                    <span>Email Us</span>
                  </span>
                  <span className="text-xs font-semibold text-zinc-950 dark:text-white">
                    {COMPANY.email}
                  </span>
                </a>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center justify-between rounded-xl border border-zinc-200/80 dark:border-white/[0.07] bg-zinc-50/70 dark:bg-zinc-900/50 px-4 py-3 hover:border-spark-500/40 transition-colors"
                >
                  <span className="flex items-center gap-2.5 text-zinc-600 dark:text-zinc-400">
                    <Phone className="h-4 w-4 text-spark-600 dark:text-spark-400" />
                    <span>Call Us</span>
                  </span>
                  <span className="text-xs font-semibold text-zinc-950 dark:text-white">
                    {COMPANY.phone}
                  </span>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-200/70 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-500">Connect on social</span>
                <div className="flex items-center gap-2">
                  {COMPANY.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:border-spark-500/40 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >
                      <span>{s.label}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
}
