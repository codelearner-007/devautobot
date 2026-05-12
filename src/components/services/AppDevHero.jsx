'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Smartphone, Zap, TrendingUp, Bell, BarChart3 } from 'lucide-react';

const stats = [
  { value: '4–8',  label: 'Weeks MVP Delivery' },
  { value: '60fps', label: 'Smooth Animations' },
  { value: '2-in-1', label: 'iOS & Android' },
  { value: '5★',   label: 'App Store Rating' },
];

export default function AppDevHero() {
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

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 dark:opacity-12 bg-primary" />
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full blur-3xl opacity-10 dark:opacity-8 bg-primary" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-center">

          {/* Left: Copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-primary">
                App Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[5rem] mb-6 leading-[1.1]"
            >
              Mobile Apps That
              <br />
              <span className="gradient-text">Users Love</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md"
            >
              We build cross-platform and native mobile apps for iOS and Android that are fast,
              intuitive, and designed to retain users and grow your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <Link href="/contact" className="btn-primary shimmer-btn">
                Start Your App Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/#portfolio" className="btn-secondary">
                See Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
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
              {/* Glow ring */}
              <div className="absolute inset-4 rounded-3xl opacity-20 blur-2xl bg-[linear-gradient(135deg,rgba(6,182,212,1),rgba(6,182,212,0.4))]" />

              {/* Phone shell */}
              <div className="relative mx-auto w-[260px] glass-card rounded-[2.5rem] overflow-hidden border border-primary/15 shadow-2xl z-10">

                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2 bg-foreground/[0.03]">
                  <span className="text-[10px] font-semibold text-foreground/50">9:41</span>
                  <div className="w-20 h-5 rounded-full bg-foreground/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2 rounded-sm bg-primary/40" />
                    <div className="w-1 h-1 rounded-full bg-foreground/30" />
                  </div>
                </div>

                {/* App UI */}
                <div className="px-4 pb-6 bg-[linear-gradient(180deg,rgba(6,182,212,0.04),transparent)]">

                  {/* App header */}
                  <div className="flex items-center justify-between mb-4 pt-2">
                    <div>
                      <div className="h-2.5 w-16 rounded-full bg-foreground/20 mb-1.5" />
                      <div className="h-2 w-24 rounded-full bg-foreground/10" />
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                      <Bell size={14} className="text-primary" />
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { label: 'Workouts', val: '124' },
                      { label: 'Calories', val: '8.4k' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl bg-foreground/[0.05] border border-primary/10 p-3 text-center">
                        <p className="font-heading font-extrabold text-lg text-primary leading-none">{s.val}</p>
                        <p className="text-[9px] text-muted-foreground mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="rounded-2xl bg-foreground/[0.04] border border-primary/10 p-3 mb-4">
                    <div className="flex items-center gap-1.5 mb-3">
                      <BarChart3 size={12} className="text-primary" />
                      <div className="h-2 w-20 rounded-full bg-foreground/15" />
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-primary/20" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* Activity list */}
                  <div className="space-y-2">
                    {['Morning Run', 'Strength', 'Cycling'].map((item, i) => (
                      <div key={item} className="flex items-center gap-2.5 rounded-xl bg-foreground/[0.04] border border-white/5 px-3 py-2">
                        <div className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary/60" />
                        </div>
                        <div className="h-2 flex-1 rounded-full bg-foreground/12" />
                        <div className="h-2 w-8 rounded-full bg-foreground/8" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home bar */}
                <div className="flex justify-center pb-3 pt-1 bg-foreground/[0.02]">
                  <div className="w-24 h-1 rounded-full bg-foreground/20" />
                </div>
              </div>

              {/* Float: delivery badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-10 glass-card px-4 py-3 rounded-2xl border border-primary/20 shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <Zap size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">Delivered in 5 wks</p>
                    <p className="text-[10px] text-primary mt-0.5">Last project ✓</p>
                  </div>
                </div>
              </motion.div>

              {/* Float: downloads badge */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-5 -right-6 glass-card px-4 py-3 rounded-2xl border border-primary/20 shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <TrendingUp size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">10k+ Downloads</p>
                    <p className="text-[10px] text-primary mt-0.5">App Store ✓</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>

        {/* Stats row */}
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
