'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Globe, Phone, Bot, Zap, Play, Star,
  TrendingUp, Clock, Shield, MessageSquare, Activity, Sparkles,
} from 'lucide-react';
import { site } from '@/lib/site';

const services = [
  { icon: Globe, label: 'Website Dev',  metric: '3× more traffic',     gradient: 'from-cyan-500   to-cyan-700',   dot: 'bg-cyan-400',   delay: 0    },
  { icon: Phone, label: 'Voice AI',     metric: '24/7 call handling',  gradient: 'from-violet-500 to-violet-700', dot: 'bg-violet-400', delay: 0.1  },
  { icon: Bot,   label: 'AI Avatars',   metric: '40+ languages',       gradient: 'from-pink-500   to-pink-700',   dot: 'bg-pink-400',   delay: 0.2  },
  { icon: Zap,   label: 'Automation',   metric: '70% less manual work', gradient: 'from-amber-500  to-orange-600', dot: 'bg-amber-400',  delay: 0.3  },
];

const usps = [
  { icon: TrendingUp, text: 'AI-first approach that drives measurable, real-world growth' },
  { icon: Clock,      text: 'Launch-ready in weeks — not months'                          },
  { icon: Shield,     text: 'Enterprise-grade quality at startup-friendly prices'          },
];

const stats = [
  { value: '50+', label: 'Projects Delivered', sub: 'across 8 industries'   },
  { value: '3×',  label: 'Average ROI',        sub: 'reported by clients'   },
  { value: '98%', label: 'Satisfaction Rate',  sub: '5-star rated service'  },
];

const activityBars = [4, 7, 5, 9, 6, 11, 8, 12, 9, 14, 10, 13];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/4 -left-40 w-[520px] h-[520px] bg-cyan-400/8  rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 -right-40 w-[520px] h-[520px] bg-violet-500/8 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/3 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ══════════════════════
              LEFT — Copy
          ══════════════════════ */}
          <div>

            {/* Badge + stars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-7"
            >
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" />
                Trusted by 50+ Businesses
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="text-xs text-muted-foreground ml-1.5">5.0 rated</span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.04] tracking-tight text-foreground mb-6"
            >
              Your Business,{' '}
              <span className="gradient-text">Supercharged</span>
              <br />
              by AI &amp; Design
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-7"
            >
              We build AI-powered digital systems — custom websites, voice agents, lifelike
              avatars, and intelligent automation — that work around the clock to grow your
              business.
            </motion.p>

            {/* USPs */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col gap-3 mb-9"
            >
              {usps.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={11} className="text-cyan-400" />
                    </span>
                    {item.text}
                  </li>
                );
              })}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link href="/contact" className="btn-primary shimmer-btn text-base px-7 py-3.5 cursor-pointer">
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <button className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
                <span className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 transition-all">
                  <Play size={14} className="ml-0.5" />
                </span>
                Watch Demo
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-7 border-t border-foreground/5 grid grid-cols-3 gap-2"
            >
              {stats.map((stat, i) => (
                <div key={i} className={i > 0 ? 'pl-4 border-l border-foreground/5' : ''}>
                  <div className="font-heading font-bold text-xl sm:text-2xl text-foreground">{stat.value}</div>
                  <div className="text-xs font-medium text-foreground/70 leading-snug mt-0.5">{stat.label}</div>
                  <div className="hidden sm:block text-[11px] text-muted-foreground/50 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* Mobile: service pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex lg:hidden flex-wrap gap-2 mt-6"
            >
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/[0.08] text-xs text-muted-foreground">
                    <Icon size={11} />
                    {s.label}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ══════════════════════
              RIGHT — Dashboard card
          ══════════════════════ */}
          <div className="relative hidden lg:block">

            {/* Background glow */}
            <div className="absolute -inset-10 pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl" />
                <div className="absolute w-56 h-56 bg-violet-500/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Outer glow border */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/25 via-violet-400/10 to-transparent blur-sm pointer-events-none" />

              {/* Card body */}
              <div className="relative rounded-2xl bg-card border border-foreground/[0.07] shadow-[0_32px_80px_rgba(0,212,255,0.07)] overflow-hidden">

                {/* Top accent line */}
                <div className="h-px bg-gradient-to-r from-cyan-400/60 via-violet-400/40 to-transparent" />

                <div className="p-6">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-glow-primary">
                        <Sparkles size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-heading font-semibold text-foreground">AI Operations</div>
                        <div className="text-[10px] text-muted-foreground">{site.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-medium text-emerald-400">Live</span>
                    </div>
                  </div>

                  {/* Service rows */}
                  <div className="space-y-2 mb-5">
                    {services.map((service, i) => {
                      const Icon = service.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.45, delay: 0.55 + i * 0.08 }}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-foreground/[0.025] border border-foreground/[0.05] hover:border-foreground/10 transition-colors"
                        >
                          <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                            <Icon size={13} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-heading font-semibold text-foreground/85 truncate">{service.label}</div>
                          </div>
                          <div className="text-[10px] text-muted-foreground whitespace-nowrap">{service.metric}</div>
                          <div className={`w-1.5 h-1.5 rounded-full ${service.dot} flex-shrink-0`} />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-foreground/[0.06] mb-4" />

                  {/* Activity + call count */}
                  <div className="flex items-end justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="text-[10px] text-muted-foreground mb-2">Activity (30d)</div>
                      <div className="flex items-end gap-[3px] h-10">
                        {activityBars.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.35, delay: 0.75 + i * 0.04 }}
                            className="flex-1 rounded-[3px] bg-cyan-400/35 origin-bottom hover:bg-cyan-400/60 transition-colors cursor-default"
                            style={{ height: `${(h / 14) * 100}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-heading font-bold text-2xl text-foreground leading-none">47</div>
                      <div className="text-[10px] text-muted-foreground mt-1">AI calls today</div>
                    </div>
                  </div>

                  {/* Footer stats */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-foreground/[0.06]">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <TrendingUp size={12} />
                      +12% traffic this week
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Activity size={9} className="text-cyan-400" />
                      All systems active
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Floating badge — New Lead */}
            <motion.div
              initial={{ opacity: 0, x: 16, y: -8, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 1.1 }}
              className="absolute -top-5 -right-5 glass-card px-3.5 py-2.5 flex items-center gap-2.5 z-20 shadow-glow-primary"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-400/15 border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare size={12} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-heading font-semibold text-foreground leading-none">New Lead</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">via AI chatbot · 2m ago</div>
              </div>
            </motion.div>

            {/* Floating badge — Conversion */}
            <motion.div
              initial={{ opacity: 0, x: -16, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 1.4 }}
              className="absolute -bottom-5 -left-5 glass-card px-3.5 py-2.5 flex items-center gap-2.5 z-20 shadow-glow-violet"
            >
              <div className="w-7 h-7 rounded-lg bg-violet-400/15 border border-violet-400/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={12} className="text-violet-400" />
              </div>
              <div>
                <div className="text-xs font-heading font-semibold text-foreground leading-none">+34% Conversion</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">this month vs last</div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
