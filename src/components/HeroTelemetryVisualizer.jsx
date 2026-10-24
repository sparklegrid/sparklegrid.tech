import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Palette, CheckCircle2 } from 'lucide-react';

const MODES = [
  {
    id: 'apps',
    label: 'Web & Mobile Apps',
    icon: Layers,
    stat1Label: 'Experience',
    stat1Value: 'Fast & Intuitive',
    stat2Label: 'Platforms',
    stat2Value: 'Web, iOS & Android',
    stat3Label: 'Reliability',
    stat3Value: '99.9% Uptime',
    nodes: [
      {
        id: 'discover',
        step: '01',
        title: 'Product Strategy',
        badge: 'Clarity First',
        summary: 'We map out user journeys and core features so you build only what truly matters.',
      },
      {
        id: 'ui',
        step: '02',
        title: 'Interactive Design',
        badge: 'Modern UI',
        summary: 'Clean, responsive interfaces designed to feel effortless on every screen size.',
      },
      {
        id: 'build',
        step: '03',
        title: 'Seamless Engineering',
        badge: 'Built to Scale',
        summary: 'Fast, dependable web and mobile apps built with modern, future-proof technology.',
      },
      {
        id: 'launch',
        step: '04',
        title: 'Launch & Growth',
        badge: 'Ongoing Care',
        summary: 'Smooth rollout, continuous improvements, and dedicated support as your audience grows.',
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Sparkles,
    stat1Label: 'Time Saved',
    stat1Value: 'Up to 70%',
    stat2Label: 'Availability',
    stat2Value: '24/7 Smart Assist',
    stat3Label: 'Setup',
    stat3Value: 'Fits Your Tools',
    nodes: [
      {
        id: 'assistants',
        step: '01',
        title: 'Custom AI Assistants',
        badge: 'Always On',
        summary: 'Smart chat and support assistants trained on your business knowledge to help customers instantly.',
      },
      {
        id: 'workflows',
        step: '02',
        title: 'Automated Workflows',
        badge: 'Zero Busywork',
        summary: 'Connect your everyday apps so routine tasks, follow-ups, and reports happen automatically.',
      },
      {
        id: 'docs',
        step: '03',
        title: 'Document Intelligence',
        badge: 'Instant Answers',
        summary: 'Extract key details from invoices, forms, and files in seconds instead of hours.',
      },
      {
        id: 'insights',
        step: '04',
        title: 'Smart Insights',
        badge: 'Clear Decisions',
        summary: 'Turn scattered business data into clear, easy-to-read summaries for your team.',
      },
    ],
  },
  {
    id: 'brand',
    label: 'Design & Branding',
    icon: Palette,
    stat1Label: 'Aesthetic',
    stat1Value: 'Bold & Modern',
    stat2Label: 'Consistency',
    stat2Value: 'Unified Brand Kit',
    stat3Label: 'Impact',
    stat3Value: 'Higher Conversion',
    nodes: [
      {
        id: 'identity',
        step: '01',
        title: 'Visual Identity',
        badge: 'Stand Out',
        summary: 'Memorable logos, color systems, and typography that capture your company’s energy.',
      },
      {
        id: 'web',
        step: '02',
        title: 'Flagship Websites',
        badge: 'High Impact',
        summary: 'Engaging websites with smooth motion and clear storytelling that convert visitors.',
      },
      {
        id: 'system',
        step: '03',
        title: 'Design Systems',
        badge: 'Reusable Kit',
        summary: 'A complete library of buttons, cards, and layouts so your brand stays consistent everywhere.',
      },
      {
        id: 'polish',
        step: '04',
        title: 'Interactive Polish',
        badge: 'Delightful UX',
        summary: 'Thoughtful micro-interactions and transitions that make your digital presence unforgettable.',
      },
    ],
  },
];

export default function HeroTelemetryVisualizer() {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const activeMode = MODES[activeModeIndex];
  const selectedNode = activeMode.nodes[selectedNodeIndex] || activeMode.nodes[0];

  return (
    <div className="relative rounded-3xl border border-zinc-200/90 dark:border-white/[0.09] bg-white/95 dark:bg-[#08080c]/90 p-5 sm:p-7 shadow-xl shadow-spark-600/[0.05] backdrop-blur-xl">
      {/* Top Laser Accent */}
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-spark-500 to-transparent" />

      {/* Header & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200/80 dark:border-white/[0.07] pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-spark-600" />
          <span className="text-xs font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
            Interactive Capabilities
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-zinc-900/80 p-1">
          {MODES.map((m, idx) => {
            const Icon = m.icon;
            const isSelected = idx === activeModeIndex;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setActiveModeIndex(idx);
                  setSelectedNodeIndex(0);
                }}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-zinc-800 text-spark-600 dark:text-spark-400 shadow-sm font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-50/90 dark:bg-zinc-900/60 p-3.5">
        <div>
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{activeMode.stat1Label}</div>
          <div className="mt-0.5 text-xs sm:text-sm font-semibold text-zinc-950 dark:text-white flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {activeMode.stat1Value}
          </div>
        </div>
        <div>
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{activeMode.stat2Label}</div>
          <div className="mt-0.5 text-xs sm:text-sm font-semibold text-spark-600 dark:text-spark-400">
            {activeMode.stat2Value}
          </div>
        </div>
        <div>
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{activeMode.stat3Label}</div>
          <div className="mt-0.5 text-xs sm:text-sm font-semibold text-zinc-950 dark:text-white">
            {activeMode.stat3Value}
          </div>
        </div>
      </div>

      {/* Interactive Cards */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Select a stage to see how we work:
          </span>
          <span className="text-xs font-medium text-spark-600 dark:text-spark-400">
            Step {selectedNode.step} of 04
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {activeMode.nodes.map((node, idx) => {
            const isActive = idx === selectedNodeIndex;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedNodeIndex(idx)}
                className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? 'border-spark-500 bg-spark-50/70 dark:bg-spark-500/[0.12] shadow-sm'
                    : 'border-zinc-200/80 dark:border-white/[0.07] bg-white dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-spark-600 dark:text-spark-400">
                    {node.step}
                  </span>
                  <span className="rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                    {node.badge}
                  </span>
                </div>
                <div className="mt-2 font-display text-sm font-semibold text-zinc-950 dark:text-white">
                  {node.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Summary */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeMode.id}-${selectedNode.id}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="mt-4 rounded-2xl border border-spark-500/20 bg-spark-50/50 dark:bg-zinc-900/90 p-4"
        >
          <div className="flex items-center justify-between text-xs font-semibold text-spark-600 dark:text-spark-400 pb-1.5">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              {selectedNode.title}
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">{selectedNode.badge}</span>
          </div>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">
            {selectedNode.summary}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
