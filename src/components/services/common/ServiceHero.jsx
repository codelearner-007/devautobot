'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';
import Container from '@/components/ui/Container';

interface TrustStat {
  label: string;
  sub: string;
}

interface ServiceHeroProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  description: string;
  cta1: string;
  cta2: string;
  cta2Href?: string;
  tags: string[];
  glowColor: string;
  visual: React.ReactNode;
  trustStats?: TrustStat[];
}

export default function ServiceHero({
  badge,
  badgeIcon,
  title,
  description,
  cta1,
  cta2,
  cta2Href = '/#services',
  tags,
  glowColor,
  visual,
  trustStats = [],
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-background pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className={`absolute top-1/3 -left-40 w-[600px] h-[600px] ${glowColor} rounded-full blur-[160px] opacity-30`} />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/4 to-transparent" />

      <Container size="full" className="relative z-10 py-16 lg:py-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="section-label">
                {badgeIcon}
                {badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.04] tracking-tight text-foreground mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
            >
              {description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground font-heading tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/contact" className="btn-primary shimmer-btn text-base px-7 py-3.5 cursor-pointer">
                {cta1}
                <ArrowRight size={16} />
              </Link>
              <Link href={cta2Href} className="btn-secondary text-base px-7 py-3.5 cursor-pointer">
                {cta2}
              </Link>
            </motion.div>

            {/* Trust indicators */}
            {trustStats && trustStats.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-5 mt-10 pt-8 border-t border-border"
              >
                {trustStats.map((stat) => (
                  <div key={stat.label} className="flex-1 text-center">
                    <div className="font-heading font-bold text-sm text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground/60 mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: visual with TiltCard */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <TiltCard>
              {visual}
            </TiltCard>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
