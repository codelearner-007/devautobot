'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Zap, TrendingUp } from 'lucide-react';

const stats = [
  { value: '5', label: 'Projects Delivered' },
  { value: '5', label: 'Happy Clients' },
  { value: '100%', label: 'On-Time Delivery' },
  { value: '5★', label: 'Client Rating' },
];

export default function Hero() {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 dark:opacity-12"
          style={{ background: 'var(--color-primary)' }}
        />
        <div
          className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full blur-3xl opacity-10 dark:opacity-8"
          style={{ background: 'var(--color-primary-light)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-primary">
                Web &amp; App Development
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[5rem] mb-6 leading-[1.1]"
            >
              We Build
              <br />
              <span className="gradient-text">Digital Products</span>
              <br />
              That Scale
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md"
            >
              From pixel-perfect websites to powerful mobile apps — we design and develop
              digital experiences that drive real business results. Fast delivery, clean code,
              ongoing support.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <Link href="/contact" className="btn-primary shimmer-btn">
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/#portfolio" className="btn-secondary">
                See Our Work
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ perspective: 900 }}
          >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            className="relative w-full flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-4 rounded-3xl opacity-20 blur-2xl"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))' }}
            />

            {/* Browser mockup */}
            <div className="relative w-full glass-card rounded-3xl overflow-hidden border border-primary/10 shadow-2xl z-10">
              {/* Chrome bar */}
              <div
                className="flex items-center gap-2 px-5 py-3.5 border-b border-border"
                style={{ background: 'color-mix(in oklch, var(--color-foreground) 3%, transparent)' }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-foreground/15" />
                  <div className="w-3 h-3 rounded-full bg-foreground/10" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                </div>
                <div className="flex-1 mx-3 h-6 bg-foreground/5 rounded-lg flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/30 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">yourproject.com</span>
                </div>
                <div className="w-6 h-4 rounded bg-foreground/8" />
              </div>

              {/* Fake site hero area */}
              <div
                className="relative p-5"
                style={{ background: 'color-mix(in oklch, var(--color-primary) 4%, var(--color-background))' }}
              >
                {/* Fake nav */}
                <div className="flex items-center justify-between mb-4">
                  <div className="h-3 w-20 rounded-full bg-foreground/15" />
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-3 w-10 rounded-full bg-foreground/10" />
                    ))}
                    <div className="h-6 w-16 rounded-lg bg-primary/30" />
                  </div>
                </div>

                {/* Fake hero */}
                <div
                  className="rounded-2xl p-6 mb-4 border border-primary/10"
                  style={{ background: 'color-mix(in oklch, var(--color-primary) 6%, transparent)' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Globe size={18} className="text-primary" />
                    <div className="h-3 w-32 rounded-full bg-primary/30" />
                  </div>
                  <div className="h-4 w-3/4 rounded-full bg-foreground/15 mb-2" />
                  <div className="h-4 w-1/2 rounded-full bg-foreground/10 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-7 w-20 rounded-lg bg-primary/40" />
                    <div className="h-7 w-16 rounded-lg bg-foreground/10 border border-border" />
                  </div>
                </div>

                {/* Fake cards row */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="rounded-xl p-3 bg-foreground/4 border border-border">
                      <div className="w-6 h-6 rounded-lg bg-primary/20 mb-2" />
                      <div className="h-2 w-full rounded-full bg-foreground/12 mb-1.5" />
                      <div className="h-2 w-2/3 rounded-full bg-foreground/8" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance bar */}
              <div className="flex items-center gap-3 px-5 py-2.5 border-t border-border bg-foreground/[0.02]">
                <TrendingUp size={11} className="text-primary" />
                <div className="flex items-center gap-1.5 flex-1">
                  <div className="h-1.5 flex-1 rounded-full bg-foreground/8 overflow-hidden">
                    <div className="h-full w-[92%] rounded-full bg-primary/50" />
                  </div>
                </div>
                <span className="text-[10px] text-primary font-semibold">98 / 100</span>
                <span className="text-[10px] text-muted-foreground">Performance</span>
              </div>
            </div>

            {/* Float: mobile card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-12 glass-card p-5 rounded-3xl w-64 border border-primary/25 shadow-2xl z-20"
              style={{ background: 'color-mix(in oklch, var(--color-primary) 5%, var(--color-background))' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shadow-inner">
                  <Smartphone size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold leading-none">Mobile App</p>
                  <p className="text-[11px] text-muted-foreground mt-1">iOS & Android</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>

              {/* Divider */}
              <div className="h-px bg-primary/10 mb-4" />

              {/* Tech stacks */}
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] font-medium text-foreground/70">Flutter</span>
                    <span className="text-[10px] text-primary font-semibold">85%</span>
                  </div>
                  <div className="h-2 rounded-full bg-foreground/8 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] font-medium text-foreground/70">Firebase</span>
                    <span className="text-[10px] text-primary font-semibold">70%</span>
                  </div>
                  <div className="h-2 rounded-full bg-foreground/8 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
                      className="h-full rounded-full bg-primary/40"
                    />
                  </div>
                </div>
              </div>

              {/* Live badge */}
              <div className="h-9 rounded-xl border border-primary/25 flex items-center justify-center gap-2"
                style={{ background: 'color-mix(in oklch, var(--color-primary) 10%, transparent)' }}
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] text-primary font-bold tracking-wide">Live on App Store</span>
              </div>
            </motion.div>

            {/* Float: delivery badge */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-5 -right-6 glass-card px-4 py-3 rounded-2xl border border-primary/20 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                  <Zap size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">Delivered in 3 wks</p>
                  <p className="text-[10px] text-primary mt-0.5">Last project ✓</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 w-full"
        >
          {stats.map(({ value, label }, i) => (
            <div key={label} className="relative flex flex-col items-center text-center py-2 sm:py-0 sm:px-8 xl:px-12">
              <p className="font-heading font-extrabold text-3xl gradient-text leading-none">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
              {i < stats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-border" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
