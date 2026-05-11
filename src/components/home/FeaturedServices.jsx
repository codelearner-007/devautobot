'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Phone, Bot, Zap, Check } from 'lucide-react';

const services = [
  {
    icon: Globe,
    tag: 'Website Development',
    title: 'Websites Built to Convert, Not Just Impress',
    description: 'Your website is your 24/7 salesperson. We build custom sites that load fast, rank high, and turn visitors into paying customers — with every pixel designed intentionally.',
    bullets: ['Custom UI/UX design, zero templates', 'SEO + Core Web Vitals built-in', 'E-commerce, SaaS, corporate, and more', '98+ PageSpeed scores as standard'],
    href: '/services/website-dev',
    color: 'text-cyan-400',
    iconBg: 'from-cyan-400 to-cyan-600',
    Visual: () => (
      <div className="glass-card p-5 shadow-[0_20px_60px_rgba(0,212,255,0.06)]">
        <div className="bg-card rounded-lg px-3 py-2 flex items-center gap-2 mb-3 border border-foreground/5">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 h-4 bg-foreground/5 rounded text-[10px] text-muted-foreground flex items-center px-2 font-mono">yoursite.com</div>
        </div>
        <div className="space-y-2">
          <div className="h-8 bg-gradient-to-r from-cyan-400/20 to-violet-400/10 rounded-lg" />
          <div className="grid grid-cols-3 gap-1.5">
            {[...Array(6)].map((_, i) => <div key={i} className="h-14 bg-foreground/3 rounded border border-foreground/5" />)}
          </div>
          <div className="h-5 bg-foreground/4 rounded w-3/4" />
          <div className="h-7 w-24 bg-cyan-400/20 rounded border border-cyan-400/20" />
        </div>
      </div>
    ),
  },
  {
    icon: Phone,
    tag: 'Voice AI Agents',
    title: 'AI That Calls, Qualifies, and Books — Automatically',
    description: 'Never miss a lead again. Our AI calling agents handle your inbound enquiries and outbound follow-ups 24/7, qualifying leads and filling your calendar while you sleep.',
    bullets: ['Handle 1,000+ concurrent calls', 'CRM auto-update after every call', 'GPT-4 powered natural conversation', 'Full call recordings & transcripts'],
    href: '/services/voice-ai',
    color: 'text-violet-400',
    iconBg: 'from-violet-500 to-violet-700',
    reverse: true,
    Visual: () => (
      <div className="glass-card p-5 shadow-[0_20px_60px_rgba(139,92,246,0.06)]">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-foreground/5">
          <div className="w-8 h-8 rounded-full bg-violet-600/60 flex items-center justify-center">
            <Phone size={13} className="text-white" />
          </div>
          <div>
            <div className="font-heading text-xs text-foreground font-semibold">AI Agent Call</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Live · 2:14
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-0.5 h-8 mb-4">
          {[3,6,9,14,18,22,16,10,6,3,7,12,18,24,17,12,8,4,9,15,19,14,9,5].map((h, i) => (
            <div key={i} className="w-1 rounded-full bg-violet-400/50" style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center text-muted-foreground flex-shrink-0 text-[10px]">C</div>
            <div className="bg-foreground/5 rounded-lg px-2.5 py-1.5 text-muted-foreground">What&apos;s the price for the 2BR unit?</div>
          </div>
          <div className="flex gap-2 flex-row-reverse">
            <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white flex-shrink-0 text-[10px]">AI</div>
            <div className="bg-violet-500/15 border border-violet-400/15 rounded-lg px-2.5 py-1.5 text-foreground/75 max-w-[80%]">The 2BR starts at $1,200/mo. Would you like to schedule a viewing?</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Bot,
    tag: 'AI Avatars',
    title: 'Your Brand Spokesperson, Without the Camera',
    description: 'Create professional video content in 50+ languages using a photorealistic AI avatar of your brand. Produce months of content in hours — no studio, no crew, no re-shoots.',
    bullets: ['Hyper-realistic lip sync & expression', 'Script to video in under 10 minutes', '50+ language support natively', 'Custom branded avatar creation'],
    href: '/services/ai-avatars',
    color: 'text-pink-400',
    iconBg: 'from-pink-500 to-pink-700',
    Visual: () => (
      <div className="glass-card p-5 shadow-[0_20px_60px_rgba(236,72,153,0.06)]">
        <div className="relative bg-card rounded-xl aspect-video mb-3 overflow-hidden flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400/60 to-violet-600/60 flex items-center justify-center">
            <Bot size={26} className="text-white" />
          </div>
          <div className="absolute bottom-2 left-3 right-3 flex items-center gap-0.5 h-4">
            {[2,4,6,9,11,14,10,7,4,2,5,8,12,15,11,8,5,3,6,10,13,10,6,3].map((h, i) => (
              <div key={i} className="flex-1 rounded-full bg-pink-400/40" style={{ height: `${h}px` }} />
            ))}
          </div>
          <div className="absolute top-2 right-2 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] text-foreground/50 font-mono">REC</span>
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {['🇺🇸 EN', '🇵🇰 UR', '🇸🇦 AR', '🇪🇸 ES', '+46'].map((l, i) => (
            <span key={l} className={`text-[10px] px-2 py-0.5 rounded-full border font-heading ${i === 0 ? 'bg-pink-400/15 border-pink-400/30 text-pink-300' : 'bg-foreground/4 border-foreground/8 text-muted-foreground'}`}>
              {l}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    tag: 'AI Automation',
    title: 'Let AI Handle the Work That Drains Your Team',
    description: 'We map your manual processes and build intelligent pipelines that eliminate repetitive work — from email handling and data entry to lead nurturing and report generation.',
    bullets: ['Save 20–40 hours per week, guaranteed', 'AI-powered decision making (GPT-4)', 'Connects to 500+ apps', 'Staged rollout, zero business disruption'],
    href: '/services/ai-automation',
    color: 'text-amber-400',
    iconBg: 'from-amber-400 to-orange-600',
    reverse: true,
    Visual: () => (
      <div className="glass-card p-5 shadow-[0_20px_60px_rgba(251,191,36,0.04)]">
        <div className="space-y-1.5">
          {[
            { label: 'Trigger: Lead Form Submitted',   c: 'bg-amber-400/15 border-amber-400/25 text-amber-300' },
            { label: 'Enrich: LinkedIn + Company Data', c: 'bg-foreground/4 border-foreground/8 text-muted-foreground' },
            { label: 'AI Score: GPT-4 Intent Analysis', c: 'bg-violet-500/15 border-violet-400/20 text-violet-300' },
            { label: 'Route: Hot Lead → Notify Sales',  c: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-300' },
          ].map((n, i) => (
            <div key={i}>
              <div className={`px-3 py-2 rounded-lg border text-xs font-heading ${n.c}`}>{n.label}</div>
              {i < 3 && <div className="flex justify-center py-0.5"><div className="w-px h-3 bg-foreground/8" /></div>}
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-foreground/5 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-muted-foreground/60">247 executions today</span>
        </div>
      </div>
    ),
  },
];

export default function FeaturedServices() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4 inline-block">Deep Dives</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Four Services. One Mission: <span className="gradient-text">Your Growth.</span>
          </h2>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((service) => {
            const Icon = service.icon;
            const Visual = service.Visual;
            return (
              <motion.div
                key={service.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${'reverse' in service && service.reverse ? 'lg:[&>*:first-child]:order-last' : ''}`}
              >
                {/* Text */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className={`text-xs font-heading font-bold tracking-widest uppercase ${service.color}`}>
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2rem] text-foreground leading-tight mb-5">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-7">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check size={14} className={`${service.color} mt-0.5 flex-shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className={`inline-flex items-center gap-2 text-sm font-heading font-semibold ${service.color} hover:opacity-70 transition-opacity group`}>
                    Explore {service.tag}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual */}
                <div>
                  <Visual />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
