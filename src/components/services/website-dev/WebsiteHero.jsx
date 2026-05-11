'use client';

import { motion } from 'framer-motion';
import { Globe, ShieldCheck } from 'lucide-react';
import { heroData } from '@/data/hero/website-dev-hero';
import ServiceHero from '@/components/services/common/ServiceHero';

const BrowserMockup = () => (
  <div className="relative w-full max-w-[520px]">
    {/* Outer glow ring */}
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-transparent blur-sm" />

    {/* Browser window */}
    <div className="relative glass-card overflow-hidden shadow-[0_40px_100px_rgba(0,212,255,0.1)]">
      {/* Browser chrome */}
      <div className="bg-card/90 px-4 py-3 flex items-center gap-3 border-b border-border">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-muted/80 rounded-md px-3 py-1.5">
          <ShieldCheck size={10} className="text-emerald-400 flex-shrink-0" />
          <span className="text-xs text-muted-foreground font-mono truncate">yoursite.com</span>
        </div>
        <div className="flex gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-foreground/15" />
          ))}
        </div>
      </div>

      {/* Page content mock */}
      <div className="p-5 space-y-4 bg-background/60">
        {/* Hero banner */}
        <div className="relative h-[72px] rounded-xl bg-gradient-to-r from-cyan-400/15 via-violet-500/10 to-transparent border border-foreground/5 overflow-hidden flex items-center px-4 gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-400/20 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
            <Globe size={14} className="text-cyan-400" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="h-2.5 bg-foreground/25 rounded-full w-3/4" />
            <div className="h-2 bg-foreground/10 rounded-full w-1/2" />
          </div>
          <div className="h-7 w-20 rounded-lg bg-gradient-to-r from-cyan-400/50 to-violet-500/40 border border-cyan-400/25 flex-shrink-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />
        </div>

        {/* Nav links row */}
        <div className="flex items-center gap-3">
          {['Home', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((link, i) => (
            <div key={link} className={`h-2 rounded-full ${i === 1 ? 'bg-cyan-400/50 w-14' : 'bg-foreground/8 w-10'}`} />
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { color: 'from-cyan-400/10 to-cyan-400/5',     border: 'border-cyan-400/15' },
            { color: 'from-violet-500/10 to-violet-500/5', border: 'border-violet-400/15' },
            { color: 'from-foreground/5 to-transparent',   border: 'border-foreground/6' },
            { color: 'from-foreground/5 to-transparent',   border: 'border-foreground/6' },
            { color: 'from-pink-500/8 to-transparent',     border: 'border-pink-400/12' },
            { color: 'from-foreground/5 to-transparent',   border: 'border-foreground/6' },
          ].map((card, i) => (
            <div key={i} className={`h-16 rounded-lg bg-gradient-to-br ${card.color} border ${card.border} flex items-end p-2`}>
              <div className="w-full space-y-1">
                <div className="h-1.5 bg-foreground/10 rounded-full w-3/4" />
                <div className="h-1.5 bg-foreground/6 rounded-full w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Content lines */}
        <div className="space-y-2">
          <div className="h-2 bg-foreground/8 rounded-full w-full" />
          <div className="h-2 bg-foreground/6 rounded-full w-5/6" />
          <div className="h-2 bg-foreground/5 rounded-full w-4/6" />
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-3 pt-1">
          <div className="h-8 w-28 rounded-lg bg-gradient-to-r from-cyan-400/40 to-violet-500/30 border border-cyan-400/20" />
          <div className="h-8 w-24 rounded-lg bg-foreground/4 border border-foreground/8" />
        </div>
      </div>

      {/* PageSpeed bar */}
      <div className="px-5 py-3 border-t border-border bg-card/60 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-muted-foreground">PageSpeed</span>
        </div>
        <div className="flex-1 h-1.5 bg-foreground/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '98%' }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="text-xs font-heading font-bold text-emerald-400">98/100</span>
      </div>
    </div>

    {/* Floating metric — bottom left */}
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="absolute -bottom-5 -left-6 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl px-4 py-3 shadow-sm"
    >
      <div className="font-heading font-bold text-lg text-cyan-400 leading-none">{heroData.metrics.pagespeed}</div>
      <div className="text-xs text-muted-foreground mt-1">PageSpeed</div>
    </motion.div>

    {/* Floating metric — top right */}
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="absolute -top-5 -right-6 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl px-4 py-3 shadow-sm"
    >
      <div className="font-heading font-bold text-lg text-violet-400 leading-none">{heroData.metrics.conversions}</div>
      <div className="text-xs text-muted-foreground mt-1">Conversions</div>
    </motion.div>
  </div>
);

export default function WebsiteHero() {
  return (
    <ServiceHero
      badge={heroData.badge}
      badgeIcon={<Globe size={12} />}
      title={heroData.title}
      description={heroData.description}
      cta1={heroData.cta1}
      cta2={heroData.cta2}
      cta2Href={heroData.cta2Href}
      tags={heroData.tags}
      glowColor="bg-cyan-400/8"
      visual={<BrowserMockup />}
      trustStats={heroData.trustStats}
    />
  );
}
