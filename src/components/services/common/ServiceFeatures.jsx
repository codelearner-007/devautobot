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
