'use client';

import { motion } from 'framer-motion';
import { Zap, Bot } from 'lucide-react';
import ServiceHero from '@/components/services/common/ServiceHero';
import { heroData } from '@/data/hero/ai-automation-hero';

const workflows = [
  { name: 'Lead Qualifier',    runs: '1,247 runs', active: true },
  { name: 'Invoice Processor', runs: '893 runs',   active: true },
  { name: 'Report Builder',    runs: '421 runs',   active: false },
];

const AutomationVisual = () => (
  <div className="relative w-full max-w-[480px]">
    {/* Outer glow ring */}
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-400/20 via-emerald-400/10 to-transparent blur-sm" />

    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-amber-900/20 via-[#120d00]/30 to-background/80 border border-amber-400/20 shadow-[0_40px_100px_rgba(251,191,36,0.12)]">
      <div className="flex flex-col items-center py-10 px-6 gap-6">

        {/* Hub icon with pulse rings */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-amber-500/25 scale-[2.5] blur-2xl" />
          <motion.div
            className="absolute -inset-3 rounded-2xl border border-amber-400/30"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -inset-5 rounded-2xl border border-amber-400/15"
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.05, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.5)] relative">
            <Bot size={28} className="text-white" />
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <div className="font-heading font-semibold text-foreground text-lg">AI Automation Engine</div>
          <div className="text-xs text-muted-foreground mt-1">3 workflows active · running 24/7</div>
        </div>

        {/* Pipeline flow: Trigger → AI → Action */}
        <div className="w-full flex items-center gap-1.5">
          <div className="flex-1 px-2 py-2.5 rounded-lg border bg-amber-400/10 border-amber-400/20 text-center">
            <div className="text-[10px] font-heading font-bold text-amber-300">Trigger</div>
            <div className="text-[9px] text-muted-foreground mt-0.5">Form Submit</div>
          </div>
          <motion.div
            className="flex-shrink-0 text-white/30 text-sm font-bold"
            animate={{ opacity: [0.3, 1, 0.3], x: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >→</motion.div>
          <div className="flex-1 px-2 py-2.5 rounded-lg border bg-violet-500/10 border-violet-400/20 text-center">
            <div className="text-[10px] font-heading font-bold text-violet-300">AI Brain</div>
            <div className="text-[9px] text-muted-foreground mt-0.5">Score + Route</div>
          </div>
          <motion.div
            className="flex-shrink-0 text-white/30 text-sm font-bold"
            animate={{ opacity: [0.3, 1, 0.3], x: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >→</motion.div>
          <div className="flex-1 px-2 py-2.5 rounded-lg border bg-emerald-400/10 border-emerald-400/20 text-center">
            <div className="text-[10px] font-heading font-bold text-emerald-300">Action</div>
            <div className="text-[9px] text-muted-foreground mt-0.5">CRM + Slack</div>
          </div>
        </div>

        {/* Active workflows list */}
        <div className="w-full space-y-1.5">
          {workflows.map((wf, i) => (
            <motion.div
              key={wf.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/3 border border-white/6"
            >
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${wf.active ? 'bg-emerald-400 animate-pulse' : 'bg-white/20'}`} />
                <span className="text-xs text-foreground/80 font-heading">{wf.name}</span>
              </div>
              <span className="text-[10px] text-muted-foreground">{wf.runs}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#projects"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600/80 to-emerald-600/80 border border-amber-400/50 shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_32px_rgba(251,191,36,0.6)] hover:border-amber-400/80 transition-all cursor-pointer overflow-hidden group"
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
          <span className="relative flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="text-xs font-heading tracking-wide text-white font-semibold">See Live Workflows</span>
          </span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/80 text-sm leading-none"
          >↓</motion.span>
        </motion.a>
      </div>
    </div>

    {/* Floating metrics */}
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="absolute -bottom-5 -left-6 glass-card px-4 py-3 shadow-sm"
    >
      <div className="font-heading font-bold text-lg text-amber-400 leading-none">{heroData.metrics.timeSaved}</div>
      <div className="text-xs text-muted-foreground mt-1">Saved/week</div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="absolute -top-5 -right-6 glass-card px-4 py-3 shadow-sm"
    >
      <div className="font-heading font-bold text-lg text-emerald-400 leading-none">{heroData.metrics.accuracy}</div>
      <div className="text-xs text-muted-foreground mt-1">Accuracy</div>
    </motion.div>
  </div>
);

export default function AutomationHero() {
  return (
    <ServiceHero
      badge={heroData.badge}
      badgeIcon={<Zap size={12} />}
      title={heroData.title}
      description={heroData.description}
      cta1={heroData.cta1}
      cta2={heroData.cta2}
      cta2Href={heroData.cta2Href}
      tags={heroData.tags}
      glowColor="bg-amber-400/8"
      visual={<AutomationVisual />}
      trustStats={heroData.trustStats}
    />
  );
}
