'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCircle2, Mic } from 'lucide-react';
import ServiceHero from '@/components/services/common/ServiceHero';
import { heroData } from '@/data/hero/ai-avatars-hero';

const waveHeights = [3, 6, 10, 15, 20, 24, 20, 15, 10, 6, 3, 7, 13, 18, 22, 18, 13, 7, 4, 9, 16, 21, 16, 9, 4];

const AvatarVisual = () => (
  <div className="relative w-full max-w-[480px]">
    {/* Outer glow */}
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-pink-400/20 via-violet-500/10 to-transparent blur-sm" />

    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-pink-50/90 via-white/80 to-card/95 dark:from-pink-950/60 dark:via-[#14051a]/80 dark:to-background/95 border border-pink-400/20 dark:border-pink-400/15 shadow-[0_40px_100px_rgba(236,72,153,0.12)]">
      <div className="flex flex-col items-center justify-center py-14 px-6 gap-5">

        {/* Avatar image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-pink-500/20 scale-[2] blur-2xl" />
          {/* Pulse rings */}
          <motion.div
            className="absolute -inset-3 rounded-full border border-pink-400/30"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -inset-5 rounded-full border border-pink-400/15"
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.05, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-pink-400/40 shadow-[0_0_30px_rgba(236,72,153,0.45)]">
            <Image
              src="/ai-avatar.png"
              alt="Maya — AI Avatar Guide"
              fill
              sizes="96px"
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Live badge */}
          <div className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-background/90 backdrop-blur-sm border border-emerald-400/30 rounded-full px-2 py-0.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-heading font-semibold text-emerald-400">LIVE</span>
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <div className="font-heading font-semibold text-foreground text-lg">Maya — AI Brand Guide</div>
          <div className="text-xs text-muted-foreground mt-1">Always on · Available 24/7</div>
        </div>

        {/* Animated waveform */}
        <div className="flex items-end justify-center gap-[3px] h-10 w-full px-6">
          {waveHeights.map((h, i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full bg-pink-400/50"
              animate={{ scaleY: [1, 1.8, 0.5, 1.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
              style={{ height: `${h * 0.65}px`, transformOrigin: 'center' }}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.button
          onClick={() => window.dispatchEvent(new CustomEvent('open-avatar-demo'))}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600/80 to-violet-600/80 border border-pink-400/50 shadow-[0_0_20px_rgba(236,72,153,0.45)] hover:shadow-[0_0_32px_rgba(236,72,153,0.7)] hover:border-pink-400/80 transition-all cursor-pointer overflow-hidden group"
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
          <span className="relative flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="text-xs font-heading tracking-wide text-white font-semibold">Start Conversation</span>
          </span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/80 text-sm leading-none"
          >
            ↓
          </motion.span>
        </motion.button>

        {/* Mic hint */}
        <div className="flex items-center gap-1 text-muted-foreground/40 -mt-2">
          <Mic size={10} />
          <span className="text-[10px]">Microphone access required</span>
        </div>
      </div>
    </div>

    {/* Floating metrics */}
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="absolute -bottom-5 -left-6 glass-card px-4 py-3 shadow-sm"
    >
      <div className="font-heading font-bold text-lg text-pink-400 leading-none">{heroData.metrics.languages}</div>
      <div className="text-xs text-muted-foreground mt-1">Languages</div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="absolute -top-5 -right-6 glass-card px-4 py-3 shadow-sm"
    >
      <div className="font-heading font-bold text-lg text-violet-400 leading-none">{heroData.metrics.costSaved}</div>
      <div className="text-xs text-muted-foreground mt-1">Cost Saved</div>
    </motion.div>
  </div>
);

export default function AvatarHero() {
  return (
    <ServiceHero
      badge={heroData.badge}
      badgeIcon={<UserCircle2 size={12} />}
      title={heroData.title}
      description={heroData.description}
      cta1={heroData.cta1}
      cta2={heroData.cta2}
      cta2Href={heroData.cta2Href}
      tags={heroData.tags}
      glowColor="bg-pink-500/10"
      visual={<AvatarVisual />}
      trustStats={heroData.trustStats}
    />
  );
}
