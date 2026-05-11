'use client';

import { motion } from 'framer-motion';
import { PhoneCall, Brain } from 'lucide-react';
import ServiceHero from '@/components/services/common/ServiceHero';
import { heroData } from '@/data/hero/voice-ai-hero';

const waveHeights = [4, 8, 14, 20, 28, 34, 28, 20, 14, 8, 4, 10, 18, 26, 32, 26, 18, 10, 6, 12, 22, 30, 22, 12, 6];

const StaticVoiceVisual = () => (
  <div className="relative w-full max-w-[480px]">
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-400/20 via-violet-500/10 to-transparent blur-sm" />
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-violet-50/90 via-white/80 to-card/95 dark:from-violet-950/60 dark:via-[#0d0718]/80 dark:to-background/95 border border-violet-400/20 dark:border-violet-400/15 shadow-[0_40px_100px_rgba(139,92,246,0.12)]">
      <div className="flex flex-col items-center justify-center py-14 px-6 gap-5">
        {/* AI avatar */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-violet-500/20 scale-[2] blur-2xl" />
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-violet-800 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)] relative">
            <Brain size={30} className="text-white" />
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <div className="font-heading font-semibold text-foreground text-lg">AI Voice Agent</div>
          <div className="text-xs text-muted-foreground mt-1">Always on · Always ready</div>
        </div>

        {/* Animated waveform */}
        <div className="flex items-end justify-center gap-[3px] h-10 w-full px-6">
          {waveHeights.map((h, i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full bg-violet-400/50"
              animate={{ scaleY: [1, 1.8, 0.5, 1.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
              style={{ height: `${h * 0.65}px`, transformOrigin: 'center' }}
            />
          ))}
        </div>

        {/* CTA hint */}
        <motion.a
          href="#live-demo"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600/80 to-violet-500/80 border border-violet-400/50 shadow-[0_0_20px_rgba(139,92,246,0.45)] hover:shadow-[0_0_32px_rgba(139,92,246,0.7)] hover:border-violet-400/80 transition-all cursor-pointer overflow-hidden group"
        >
          {/* shimmer sweep */}
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
          <span className="relative flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="text-xs font-heading tracking-wide text-white font-semibold">Try Live Demo</span>
          </span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/80 text-sm leading-none"
          >
            ↓
          </motion.span>
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
      <div className="font-heading font-bold text-lg text-violet-400 leading-none">{heroData.metrics.responseTime}</div>
      <div className="text-xs text-muted-foreground mt-1">Response Time</div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="absolute -top-5 -right-6 glass-card px-4 py-3 shadow-sm"
    >
      <div className="font-heading font-bold text-lg text-emerald-400 leading-none">{heroData.metrics.contactRate}</div>
      <div className="text-xs text-muted-foreground mt-1">Contact Rate</div>
    </motion.div>
  </div>
);

export default function VoiceHero() {
  return (
    <ServiceHero
      badge={heroData.badge}
      badgeIcon={<PhoneCall size={12} />}
      title={heroData.title}
      description={heroData.description}
      cta1={heroData.cta1}
      cta2={heroData.cta2}
      cta2Href={heroData.cta2Href}
      tags={heroData.tags}
      glowColor="bg-violet-500/10"
      visual={<StaticVoiceVisual />}
      trustStats={heroData.trustStats}
    />
  );
}
