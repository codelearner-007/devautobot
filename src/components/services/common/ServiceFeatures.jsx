'use client';

import { motion } from 'framer-motion';
import {
  Palette, Smartphone, Search, Zap, Database, BarChart3, BarChart2,
  ShoppingCart, Globe, Settings, ArrowRight, FileText, MessageSquare,
  CalendarCheck, RefreshCw, Headphones, Bot, Cpu, Brain, Layers,
  TrendingUp, Mail, Users, Star, Clock, Shield, Sparkles, Wand2,
  Mic, Video, Share2, GitBranch, Webhook, Bell, Code2, LayoutDashboard,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Container from '@/components/ui/Container';

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
  sectionLabel?: string;
  heading: React.ReactNode;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Palette, Smartphone, Search, Zap, Database, BarChart3, BarChart2,
  ShoppingCart, Globe, Settings, FileText, MessageSquare,
  CalendarCheck, RefreshCw, Headphones, Bot, Cpu, Brain, Layers,
  TrendingUp, Mail, Users, Star, Clock, Shield, Sparkles, Wand2,
  Mic, Video, Share2, GitBranch, Webhook, Bell, Code2, LayoutDashboard,
};

// Decorative accent tokens — colour-rotates across all 9 features
const featureAccents = [
  { icon: 'text-primary',     iconBg: 'bg-primary/10 border-primary/20',       bar: 'from-primary/40',     glow: 'hsl(var(--primary) / 0.12)' },
  { icon: 'text-violet-400',  iconBg: 'bg-violet-400/10 border-violet-400/20', bar: 'from-violet-400/40',  glow: 'rgba(167,139,250,0.12)' },
  { icon: 'text-emerald-400', iconBg: 'bg-emerald-400/10 border-emerald-400/20', bar: 'from-emerald-400/40', glow: 'rgba(52,211,153,0.12)' },
  { icon: 'text-amber-400',   iconBg: 'bg-amber-400/10 border-amber-400/20',   bar: 'from-amber-400/40',   glow: 'rgba(251,191,36,0.12)' },
  { icon: 'text-blue-400',    iconBg: 'bg-blue-400/10 border-blue-400/20',     bar: 'from-blue-400/40',    glow: 'rgba(96,165,250,0.12)' },
  { icon: 'text-pink-400',    iconBg: 'bg-pink-400/10 border-pink-400/20',     bar: 'from-pink-400/40',    glow: 'rgba(244,114,182,0.12)' },
  { icon: 'text-orange-400',  iconBg: 'bg-orange-400/10 border-orange-400/20', bar: 'from-orange-400/40',  glow: 'rgba(251,146,60,0.12)' },
  { icon: 'text-teal-400',    iconBg: 'bg-teal-400/10 border-teal-400/20',     bar: 'from-teal-400/40',    glow: 'rgba(45,212,191,0.12)' },
  { icon: 'text-indigo-400',  iconBg: 'bg-indigo-400/10 border-indigo-400/20', bar: 'from-indigo-400/40',  glow: 'rgba(129,140,248,0.12)' },
];

function FeatureCard({
  feature,
  index,
  large = false,
  full = false,
  extra,
}: {
  feature: ServiceFeature;
  index: number;
  large?: boolean;
  full?: boolean;
  extra?: React.ReactNode;
}) {
  const Icon = iconMap[feature.icon];
  const acc  = featureAccents[index % featureAccents.length];
  if (!Icon) return null;

  return (
    <motion.div
      variants={staggerItem}
      className="relative group glass-card overflow-hidden cursor-default transition-all duration-300 hover:border-foreground/[0.1]"
    >
      {/* Top colour bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${acc.bar} to-transparent`} />

      {/* Corner ambient glow */}
      <div
        className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${acc.glow} 0%, transparent 70%)` }}
      />

      {/* Index watermark */}
      <div className="absolute top-4 right-5 font-heading font-bold text-5xl text-foreground/[0.03] leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className={full ? 'p-7 flex flex-col sm:flex-row sm:items-center gap-6' : large ? 'p-7' : 'p-6'}>
        {large ? (
          <>
            <div className="flex items-start gap-5 mb-5">
              <div className={`flex-shrink-0 w-13 h-13 p-3 rounded-xl border ${acc.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} className={acc.icon} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-lg text-foreground mb-1.5 leading-snug">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              <div className="flex-shrink-0 text-right hidden sm:block">
                <div className={`font-heading font-bold text-xl ${acc.icon}`}>{feature.stat}</div>
                <div className="text-xs text-muted-foreground/60 mt-0.5 whitespace-nowrap">{feature.statLabel}</div>
              </div>
            </div>
            <div className={`h-px bg-gradient-to-r ${acc.bar} to-transparent`} />
          </>
        ) : full ? (
          <>
            <div className="flex items-start gap-5 flex-1">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl border ${acc.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className={acc.icon} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1.5">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{feature.description}</p>
              </div>
            </div>
            {extra}
          </>
        ) : (
          <>
            <div className={`flex-shrink-0 w-11 h-11 rounded-xl border ${acc.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={20} className={acc.icon} />
            </div>
            <h3 className="font-heading font-bold text-base text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
            <div className={`inline-flex items-center gap-1.5 text-xs font-heading font-semibold px-2.5 py-1 rounded-full border ${acc.iconBg} ${acc.icon}`}>
              <span>{feature.stat}</span>
              <span className="text-muted-foreground/60 font-normal">{feature.statLabel}</span>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function ServiceFeatures({
  features,
  sectionLabel = 'Key Features',
  heading,
  description = 'Built from the ground up to handle real-world complexity, at any scale.',
  ctaHref = '/contact',
  ctaLabel = 'Learn more',
}: ServiceFeaturesProps) {
  const heroFeatures = features.slice(0, Math.min(2, features.length));
  const remaining    = features.slice(heroFeatures.length);
  // If remaining count mod 3 === 1, the last card would sit alone in a row — promote it to full-width instead
  const showLastFull = remaining.length > 0 && remaining.length % 3 === 1;
  const gridFeatures = showLastFull ? remaining.slice(0, -1) : remaining;
  const lastFeature  = showLastFull ? remaining[remaining.length - 1] : undefined;
  const lastIndex    = features.length - 1;
  const lastAccent   = featureAccents[lastIndex % featureAccents.length];

  return (
    <section className="relative py-20 lg:py-28 bg-card">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-60" />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-block">{sectionLabel}</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">{heading}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-4"
        >
          {/* Row 1 — 2 large hero cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {heroFeatures.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} large />
            ))}
          </div>

          {/* Medium cards — auto-fills rows of 3 */}
          {gridFeatures.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {gridFeatures.map((f, i) => (
                <FeatureCard key={f.title} feature={f} index={i + heroFeatures.length} />
              ))}
            </div>
          )}

          {/* Full-width closing card */}
          {lastFeature && (
            <FeatureCard
              feature={lastFeature}
              index={lastIndex}
              full
              extra={
                <Link
                  href={ctaHref}
                  className={`flex-shrink-0 flex items-center gap-2 text-sm font-heading font-semibold ${lastAccent.icon} hover:text-foreground transition-colors duration-200 group/cta cursor-pointer`}
                >
                  {ctaLabel}
                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-200" />
                </Link>
              }
            />
          )}
        </motion.div>
      </Container>
    </section>
  );
}
