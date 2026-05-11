'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Globe, Smartphone, CheckCircle2, Zap, Users, Award } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: Award },
  { value: '40+', label: 'Happy Clients', icon: Users },
  { value: '3x', label: 'Avg. ROI', icon: Zap },
  { value: '5★', label: 'Client Rating', icon: Star },
];

const badges = [
  'React & Next.js',
  'Flutter & React Native',
  'Node.js APIs',
  'Tailwind CSS',
  'PostgreSQL',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background bg-grid">

      {/* Radial glow — uses CSS vars, no hardcoded colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-15 dark:opacity-10"
          style={{ background: 'radial-gradient(ellipse, var(--color-primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-8 dark:opacity-5"
          style={{ background: 'radial-gradient(ellipse, var(--color-primary-light) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-6"
            >
              <Zap size={11} />
              Web &amp; App Development Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading text-5xl sm:text-6xl lg:text-[4.5rem] mb-6"
            >
              We Build
              <br />
              <span className="gradient-text">Digital Products</span>
              <br />
              That Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              From pixel-perfect websites to powerful mobile apps — we design and develop
              digital experiences that drive real business results. Fast delivery, clean code,
              ongoing support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link href="/contact" className="btn-primary shimmer-btn">
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/#portfolio" className="btn-secondary">
                See Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/5 border border-border text-muted-foreground"
                >
                  <CheckCircle2 size={10} className="text-primary" />
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Browser mockup */}
            <div className="glass-card p-6 rounded-2xl relative z-10">
              {/* Browser bar — neutral dots, no hardcoded colors */}
              <div className="flex items-center gap-1.5 mb-5 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-foreground/15" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-primary/30" />
                <div className="flex-1 ml-3 h-6 bg-foreground/5 rounded-lg flex items-center px-3">
                  <span className="text-xs text-muted-foreground">yourproject.com</span>
                </div>
              </div>
              <div className="space-y-3">
                <div
                  className="h-36 rounded-xl border border-border flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, color-mix(in oklch, var(--color-primary) 15%, transparent), color-mix(in oklch, var(--color-primary) 5%, transparent))' }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-2">
                      <Globe size={22} className="text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Your Website, Live & Fast</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-16 rounded-xl bg-foreground/5 border border-border" />
                  ))}
                </div>
                <div className="h-3 rounded-full bg-foreground/5 w-4/5" />
                <div className="h-3 rounded-full bg-primary/10 w-3/5" />
              </div>
            </div>

            {/* Float: mobile card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-12 glass-card p-4 rounded-2xl w-48 border border-primary/15 shadow-2xl z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Smartphone size={14} className="text-primary" />
                </div>
                <span className="text-xs font-bold">Mobile App</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 rounded-full bg-foreground/10 w-full" />
                <div className="h-2 rounded-full bg-primary/20 w-4/5" />
                <div className="h-2 rounded-full bg-foreground/10 w-3/5" />
              </div>
              <div className="mt-3 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-[10px] text-primary font-semibold">Live on App Store</span>
              </div>
            </motion.div>

            {/* Float: delivery badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -top-6 -right-8 glass-card p-3.5 rounded-xl border border-primary/20 shadow-2xl z-20"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Zap size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold">Delivered in 3 wks</p>
                  <p className="text-[10px] text-muted-foreground">Last project</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="glass-card p-5 text-center hover:border-primary/20 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon size={16} className="text-primary" />
              </div>
              <p className="font-heading font-extrabold text-3xl gradient-text mb-1">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
