import React, { useState } from 'react';
import {
  Globe,
  ArrowUpRight,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  Scissors,
  Trophy,
  Utensils,
  Monitor,
  Smartphone,
  RotateCcw,
  Play,
  ExternalLink,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

/* 1. NIBSS Interactive Incident Coordinator Mini-App */
function NibssInteractiveDemo() {
  const [cases, setCases] = useState([
    {
      id: 'INC-9042',
      channel: 'NIP Instant Transfer',
      bank: 'Tier-1 Bank → Receiving PSP',
      status: 'Flagged',
      action: 'PND Hold Requested',
    },
    {
      id: 'INC-9038',
      channel: 'Mobile USSD Session',
      bank: 'Commercial Bank Desk',
      status: 'In Review',
      action: 'KYC Trace Active',
    },
    {
      id: 'INC-9031',
      channel: 'POS Terminal Settlement',
      bank: 'Acquiring Switch',
      status: 'Resolved',
      action: 'Reversal Completed',
    },
  ]);
  const [selectedId, setSelectedId] = useState('INC-9042');

  const cycleStatus = (id) => {
    const order = ['Flagged', 'In Review', 'Resolved'];
    setCases((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        const nextStatus = order[(order.indexOf(c.status) + 1) % order.length];
        const nextAction =
          nextStatus === 'Flagged'
            ? 'PND Hold Requested'
            : nextStatus === 'In Review'
            ? 'Inter-Bank Trace Active'
            : 'Case Closed & Logged';
        return { ...c, status: nextStatus, action: nextAction };
      })
    );
  };

  const activeCase = cases.find((c) => c.id === selectedId) || cases[0];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
          <ShieldAlert className="h-4 w-4 text-spark-600 dark:text-spark-400" />
          Interactive Incident Workflow
        </span>
        <span className="text-[11px] text-zinc-500">Click status badge to advance</span>
      </div>

      <div className="space-y-2">
        {cases.map((item) => {
          const isSelected = item.id === selectedId;
          const badgeColor =
            item.status === 'Resolved'
              ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
              : item.status === 'In Review'
              ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
              : 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30';

          return (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`cursor-pointer flex items-center justify-between rounded-xl border p-3 transition-all ${
                isSelected
                  ? 'border-spark-500 bg-spark-50/60 dark:bg-spark-500/10'
                  : 'border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-zinc-900 dark:text-white">
                    {item.id}
                  </span>
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {item.channel}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  {item.bank} • {item.action}
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  cycleStatus(item.id);
                }}
                className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold transition-transform active:scale-95 ${badgeColor}`}
              >
                {item.status} ↻
              </button>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 px-3.5 py-2.5 flex items-center justify-between text-xs">
        <span className="text-zinc-600 dark:text-zinc-400">
          Selected: <strong className="text-zinc-900 dark:text-white">{activeCase.id}</strong> ({activeCase.action})
        </span>
        <a
          href="https://fraudportal.nibss-plc.com.ng/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-spark-600 dark:text-spark-400 hover:underline inline-flex items-center gap-1"
        >
          Open Portal <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

/* 2. Hairitage by Rokah Interactive Style & Booking Selector */
function HairitageInteractiveDemo() {
  const styles = [
    {
      name: 'Knotless Boho Braids',
      duration: '4–5 hrs',
      care: 'Hydrating Mist + Silk Bonnet Kit',
      tag: 'Most Popular',
    },
    {
      name: 'Fulani Tribal Braids',
      duration: '3.5 hrs',
      care: 'Scalp Soothing Oil Elixir',
      tag: 'Signature Style',
    },
    {
      name: 'Natural Hair Treatment & Twist',
      duration: '2.5 hrs',
      care: 'Deep Moisture Botanical Mask',
      tag: 'Healthy Crown',
    },
  ];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [length, setLength] = useState('Mid-Back');
  const current = styles[selectedIdx];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
          <Scissors className="h-4 w-4 text-spark-600 dark:text-spark-400" />
          Interactive Style & Care Selector
        </span>
        <div className="flex gap-1">
          {['Shoulder', 'Mid-Back', 'Waist'].map((len) => (
            <button
              key={len}
              type="button"
              onClick={() => setLength(len)}
              className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-colors ${
                length === len
                  ? 'bg-spark-600 text-white'
                  : 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {len}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {styles.map((st, idx) => {
          const active = idx === selectedIdx;
          return (
            <button
              key={st.name}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                active
                  ? 'border-spark-500 bg-spark-50/60 dark:bg-spark-500/10'
                  : 'border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900'
              }`}
            >
              <div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-white">
                  {st.name}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  Recommended Care: {st.care}
                </div>
              </div>
              <span className="rounded-full bg-spark-500/10 px-2.5 py-0.5 text-[11px] font-medium text-spark-600 dark:text-spark-400">
                {st.duration}
              </span>
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 px-3.5 py-2.5 flex items-center justify-between text-xs">
        <span className="text-zinc-600 dark:text-zinc-400">
          Selected: <strong className="text-zinc-900 dark:text-white">{current.name}</strong> ({length})
        </span>
        <a
          href="https://hairitagebyrokah.co.uk"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-spark-600 dark:text-spark-400 hover:underline inline-flex items-center gap-1"
        >
          Book on Site <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

/* 3. PicklePal Interactive Courtside Scorekeeper */
function PicklePalInteractiveDemo() {
  const [scoreA, setScoreA] = useState(8);
  const [scoreB, setScoreB] = useState(6);
  const [server, setServer] = useState(1);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
          <Trophy className="h-4 w-4 text-spark-600 dark:text-spark-400" />
          Interactive Courtside Scorekeeper
        </span>
        <button
          type="button"
          onClick={() => {
            setScoreA(0);
            setScoreB(0);
            setServer(1);
          }}
          className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
        >
          <RotateCcw className="h-3 w-3" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 p-3.5 text-center">
          <div className="text-[11px] font-medium text-zinc-500">COURT DUO A</div>
          <div className="my-1 font-display text-3xl font-bold text-zinc-950 dark:text-white">
            {scoreA}
          </div>
          <button
            type="button"
            onClick={() => setScoreA((s) => s + 1)}
            className="w-full rounded-lg bg-spark-600 py-1.5 text-xs font-semibold text-white hover:bg-spark-500 active:scale-95 transition-all"
          >
            +1 Rally Point
          </button>
        </div>

        <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 p-3.5 text-center">
          <div className="text-[11px] font-medium text-zinc-500">COURT DUO B</div>
          <div className="my-1 font-display text-3xl font-bold text-zinc-950 dark:text-white">
            {scoreB}
          </div>
          <button
            type="button"
            onClick={() => setScoreB((s) => s + 1)}
            className="w-full rounded-lg bg-zinc-900 dark:bg-white py-1.5 text-xs font-semibold text-white dark:text-zinc-950 hover:opacity-90 active:scale-95 transition-all"
          >
            +1 Rally Point
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 px-3.5 py-2.5 flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={() => setServer((s) => (s === 1 ? 2 : 1))}
          className="font-mono text-xs text-zinc-700 dark:text-zinc-300"
        >
          Call: <strong className="text-spark-600 dark:text-spark-400">{scoreA} - {scoreB} - {server}</strong> (Tap to switch server)
        </button>
        <a
          href="https://pickle-pal.base44.app/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-spark-600 dark:text-spark-400 hover:underline inline-flex items-center gap-1"
        >
          Launch App <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

/* 4. Janespices Interactive Catering Planner */
function JanespicesInteractiveDemo() {
  const [guests, setGuests] = useState(60);
  const [tier, setTier] = useState('Afro-Fusion Grill & Jollof');

  const trays = Math.max(2, Math.ceil(guests / 15));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
          <Utensils className="h-4 w-4 text-spark-600 dark:text-spark-400" />
          Interactive Event Catering Estimator
        </span>
        <span className="font-mono text-xs font-bold text-spark-600 dark:text-spark-400">
          {guests} Guests
        </span>
      </div>

      <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 p-3.5 space-y-3">
        <div>
          <input
            type="range"
            min={20}
            max={250}
            step={10}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            aria-label="Number of catering guests"
            className="w-full accent-spark-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-zinc-400 mt-0.5">
            <span>20 Guests</span>
            <span>120 Guests</span>
            <span>250 Guests</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {[
            'Afro-Fusion Grill & Jollof',
            'Small Chops & Cocktail Platter',
            'Full VIP Banquet',
          ].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setTier(option)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors ${
                tier === option
                  ? 'bg-spark-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 px-3.5 py-2.5 flex items-center justify-between text-xs">
        <span className="text-zinc-600 dark:text-zinc-400">
          Recommended: <strong className="text-zinc-900 dark:text-white">{trays} Large Catering Trays</strong>
        </span>
        <a
          href="https://janespicesafrokitchen.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-spark-600 dark:text-spark-400 hover:underline inline-flex items-center gap-1"
        >
          Order Online <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function InteractiveProductCard({ study, compact = false }) {
  // 'demo' = interactive widget, 'live' = embedded live iframe preview
  const [viewMode, setViewMode] = useState('demo');
  const [viewport, setViewport] = useState('desktop');

  const renderInteractiveWidget = () => {
    switch (study.id) {
      case 'nibss-fraud-portal':
        return <NibssInteractiveDemo />;
      case 'hairitage-by-rokah':
        return <HairitageInteractiveDemo />;
      case 'pickle-pal':
        return <PicklePalInteractiveDemo />;
      case 'janespices-commerce':
      default:
        return <JanespicesInteractiveDemo />;
    }
  };

  return (
    <SpotlightCard id={study.id} className="p-6 sm:p-8 lg:p-10 scroll-mt-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
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
                <span>Visit Live Product</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Experience + Live Site Embed */}
        <div className="lg:col-span-6 rounded-2xl border border-zinc-200/90 dark:border-white/[0.08] bg-zinc-50/90 dark:bg-zinc-900/60 p-4 sm:p-5">
          {/* Mode Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 dark:border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-1 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 p-1">
              <button
                type="button"
                onClick={() => setViewMode('demo')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                  viewMode === 'demo'
                    ? 'bg-spark-600 text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Interactive Demo</span>
              </button>

              {study.allowIframe && (
                <button
                  type="button"
                  onClick={() => setViewMode('live')}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                    viewMode === 'live'
                      ? 'bg-spark-600 text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  <Play className="h-3.5 w-3.5" />
                  <span>Live Site Preview</span>
                </button>
              )}
            </div>

            {viewMode === 'live' && study.allowIframe && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setViewport('desktop')}
                  className={`rounded-lg p-1.5 text-xs ${
                    viewport === 'desktop'
                      ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white'
                      : 'text-zinc-400'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewport('mobile')}
                  className={`rounded-lg p-1.5 text-xs ${
                    viewport === 'mobile'
                      ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white'
                      : 'text-zinc-400'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Interactive Content */}
          {viewMode === 'demo' ? (
            renderInteractiveWidget()
          ) : (
            <div className="space-y-3">
              <div
                className={`mx-auto overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 bg-white shadow-inner transition-all ${
                  viewport === 'mobile' ? 'max-w-[340px]' : 'w-full'
                }`}
              >
                <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100 px-3 py-1.5 text-[11px] text-zinc-500">
                  <span className="truncate font-mono">{study.liveUrl}</span>
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-spark-600 font-semibold hover:underline shrink-0 ml-2"
                  >
                    Expand ↗
                  </a>
                </div>
                <iframe
                  src={study.liveUrl}
                  title={`${study.client} Live Preview`}
                  className="h-[340px] w-full border-0 bg-white"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
