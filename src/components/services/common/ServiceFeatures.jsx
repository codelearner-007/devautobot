'use client';

import { motion } from 'framer-motion';
import {
  Palette, Smartphone, Search, Zap, Database, BarChart3, BarChart2,
  ShoppingCart, Globe, Settings, ArrowRight, FileText, MessageSquare,
  CalendarCheck, RefreshCw, Headphones, Bot, Cpu, Brain, Layers,
  TrendingUp, Mail, Users, Star, Clock, Shield, Sparkles, Wand2,
  Mic, Video, Share2, GitBranch, Webhook, Bell, Code2, LayoutDashboard,
} from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Container from '@/components/ui/Container';

const iconMap = {
  Palette, Smartphone, Search, Zap, Database, BarChart3, BarChart2,
  ShoppingCart, Globe, Settings, FileText, MessageSquare,
  CalendarCheck, RefreshCw, Headphones, Bot, Cpu, Brain, Layers,
  TrendingUp, Mail, Users, Star, Clock, Shield, Sparkles, Wand2,
  Mic, Video, Share2, GitBranch, Webhook, Bell, Code2, LayoutDashboard,
};

const featureAccents = [
  { icon: 'text-primary',     bg: 'bg-primary/10',     border: 'border-primary/20'     },
  { icon: 'text-violet-400',  bg: 'bg-violet-400/10',  border: 'border-violet-400/20'  },
  { icon: 'text-cyan-400',    bg: 'bg-cyan-400/10',    border: 'border-cyan-400/20'    },
  { icon: 'text-pink-400',    bg: 'bg-pink-400/10',    border: 'border-pink-400/20'    },
  { icon: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  { icon: 'text-amber-400',   bg: 'bg-amber-400/10',   border: 'border-amber-400/20'   },
];

function FeatureCard({ feature, index, large = false, full = false, extra }) {
  const Icon = iconMap[feature.icon];
  const accent = featureAccents[index % featureAccents.length];

  return (
    <motion.div
      variants={staggerItem}
      className={`glass-card group hover:border-foreground/[0.12] transition-all duration-300 relative overflow-hidden ${
        full ? 'p-7 flex items-center justify-between gap-8' : large ? 'p-7' : 'p-6'
      }`}
    >
      <div className={full ? 'flex-1' : 'h-full flex flex-col'}>
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-xl border ${accent.bg} ${accent.border} flex items-center justify-center flex-shrink-0`}>
            {Icon && <Icon size={18} className={accent.icon} />}
          </div>
          {feature.stat && (large || full) && (
            <div className="text-right">
              <div className={`font-heading font-bold text-2xl leading-none ${accent.icon}`}>{feature.stat}</div>
              <div className="text-xs text-muted-foreground/70 mt-0.5">{feature.statLabel}</div>
            </div>
          )}
        </div>
        <h3 className={`font-heading font-bold text-foreground mb-2 leading-snug ${large || full ? 'text-lg' : 'text-base'}`}>
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
        {feature.stat && !large && !full && (
          <div className="mt-4 pt-4 border-t border-foreground/[0.06] flex items-center gap-2">
            <span className={`font-heading font-bold text-base ${accent.icon}`}>{feature.stat}</span>
            <span className="text-xs text-muted-foreground/70">{feature.statLabel}</span>
          </div>
        )}
      </div>
      {extra}
    </motion.div>
  );
}

export default function ServiceFeatures({ features, sectionLabel = 'Key Features', heading, description = 'Built from the ground up to handle real-world complexity, at any scale.', ctaHref = '/contact', ctaLabel = 'Learn more' }) {
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
