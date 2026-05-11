'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Phone, Bot, Zap, ArrowRight, CircleCheck } from 'lucide-react';

const services = [
  {
    icon: Globe,
    label: 'Website Dev',
    title: 'Website Development',
    description:
      'High-performance, conversion-optimized websites built with Next.js, React & FastAPI. Pixel-perfect UI, SEO built-in, and blazing speed that turns visitors into customers.',
    href: '/services/website-dev',
    features: [
      'Custom UI/UX Design — no templates',
      'Mobile-First & SEO Built-In',
      '95+ PageSpeed Performance',
      'CMS, E-commerce & Analytics',
    ],
    accentHex: '#22d3ee',
    accentText: 'text-cyan-400',
    accentGradient: 'from-cyan-400 to-cyan-600',
    accentBorder: 'border-cyan-400/20',
  },
  {
    icon: Phone,
    label: 'Voice AI',
    title: 'Voice AI Calling',
    description:
      'Form submitted → AI calls back in 60 seconds, already briefed on their answers. Qualifies leads, books appointments, and syncs to your CRM — zero humans needed.',
    href: '/services/voice-ai',
    features: [
      'Form-Triggered in < 60 Seconds',
      'Context-Aware Lead Qualification',
      'Auto Appointment Booking',
      'CRM Sync & Full Transcripts',
    ],
    accentHex: '#8b5cf6',
    accentText: 'text-violet-400',
    accentGradient: 'from-violet-500 to-violet-700',
    accentBorder: 'border-violet-400/20',
  },
  {
    icon: Bot,
    label: 'AI Avatars',
    title: 'AI Avatars',
    description:
      'Photorealistic AI spokespersons in any language, in minutes. No camera, no crew, no reshoots — edit the script and regenerate instantly.',
    href: '/services/ai-avatars',
    features: [
      'Voice Cloning & Lip Sync',
      '50+ Languages Instantly',
      'Script-to-Video in 5 Minutes',
      'Custom Brand Overlays & 4K',
    ],
    accentHex: '#ec4899',
    accentText: 'text-pink-400',
    accentGradient: 'from-pink-500 to-pink-700',
    accentBorder: 'border-pink-400/20',
  },
  {
    icon: Zap,
    label: 'AI Automation',
    title: 'AI Agents & Automation',
    description:
      'Intelligent pipelines that handle emails, data, workflows, and decisions — saving your team 40+ hours per week with zero manual steps end-to-end.',
    href: '/services/ai-automation',
    features: [
      'Multi-Step AI Agent Pipelines',
      'Instant Workflow Triggers',
      '500+ App Integrations',
      '40+ Hours Saved Per Week',
    ],
    accentHex: '#fbbf24',
    accentText: 'text-amber-400',
    accentGradient: 'from-amber-400 to-orange-600',
    accentBorder: 'border-amber-400/20',
  },
];

// Stack positions: 0 = furthest back, 3 = front
const STACK = [
  { transform: 'translateY(-7%) scale(0.76) rotate(1.5deg)',  zIndex: 0, opacity: 0.5  },
  { transform: 'translateY(-5%) scale(0.84) rotate(-1.8deg)', zIndex: 1, opacity: 0.72 },
  { transform: 'translateY(-3%) scale(0.93) rotate(1.2deg)',  zIndex: 2, opacity: 0.88 },
  { transform: 'translateY(-1%) scale(0.99) rotate(-0.8deg)', zIndex: 3, opacity: 1    },
];

const THROTTLE_MS = 650; // min ms between card changes

export default function ServicesGrid() {
  const sectionRef    = useRef(null);
  const activeRef     = useRef(0);           // shadow of `active` for use inside event handler
  const lastScrollRef = useRef(0);
  const touchStartY   = useRef(0);
  const [active, setActive] = useState(0);
  const n = services.length;

  // Keep ref in sync
  useEffect(() => { activeRef.current = active; }, [active]);

   // ── Wheel / desktop scroll interception ────────────────────────────────
   useEffect(() => {
     const handleWheel = (e) => {
       if (!sectionRef.current) return;

       const rect      = sectionRef.current.getBoundingClientRect();
       const midpoint  = window.innerHeight / 2;
       // Only intercept while the section centre covers the viewport midpoint
       const inView    = rect.top < midpoint && rect.bottom > midpoint;
       if (!inView) return;

       const cur = activeRef.current;
       const now = Date.now();

       if (e.deltaY > 0) {
         // Scrolling down — advance card, or let scroll through on last card
         if (cur < n - 1) {
           e.preventDefault();
           if (now - lastScrollRef.current >= THROTTLE_MS) {
             const next = cur + 1;
             activeRef.current = next;
             setActive(next);
             lastScrollRef.current = now;
           }
         }
       } else if (e.deltaY < 0) {
         // Scrolling up — regress card, or let scroll through on first card
         if (cur > 0) {
           e.preventDefault();
           if (now - lastScrollRef.current >= THROTTLE_MS) {
             const prev = cur - 1;
             activeRef.current = prev;
             setActive(prev);
             lastScrollRef.current = now;
           }
         }
       }
     };

     window.addEventListener('wheel', handleWheel, { passive: false });
     return () => window.removeEventListener('wheel', handleWheel);
   }, [n]);

   // ── Touch / swipe support ───────────────────────────────────────────────
   useEffect(() => {
     const onTouchStart = (e) => {
       touchStartY.current = e.touches[0].clientY;
     };
     const onTouchEnd = (e) => {
       if (!sectionRef.current) return;
       const rect     = sectionRef.current.getBoundingClientRect();
       const midpoint = window.innerHeight / 2;
       if (rect.top >= midpoint || rect.bottom <= midpoint) return;

       const delta = touchStartY.current - e.changedTouches[0].clientY;
       if (Math.abs(delta) < 50) return;

       const cur = activeRef.current;
       const now = Date.now();
       if (now - lastScrollRef.current < THROTTLE_MS) return;

       if (delta > 0 && cur < n - 1) {
         const next = cur + 1;
         activeRef.current = next;
         setActive(next);
         lastScrollRef.current = now;
       } else if (delta < 0 && cur > 0) {
         const prev = cur - 1;
         activeRef.current = prev;
         setActive(prev);
         lastScrollRef.current = now;
       }
     };

     window.addEventListener('touchstart', onTouchStart, { passive: true });
     window.addEventListener('touchend',   onTouchEnd,   { passive: true });
     return () => {
       window.removeEventListener('touchstart', onTouchStart);
       window.removeEventListener('touchend',   onTouchEnd);
     };
   }, [n]);

  // Returns stack position (0 = back, n-1 = front) for card i
  const stackPos = (i) => (i - active - 1 + n) % n;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-background overflow-x-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="section-label mb-4 inline-block">Our Services</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
            Four AI-powered services. One goal — give your business an unfair competitive advantage.
          </p>
        </motion.div>

        {/* Card stack + side nav */}
        <div className="relative mx-auto max-w-4xl">
          {/* Left navigation dots */}
          <div className="hidden lg:flex absolute -left-14 xl:-left-16 top-1/2 -translate-y-1/2 flex-col gap-5 z-20">
            {services.map((svc, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View ${svc.label}`}
                className="group focus:outline-none"
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    active !== i
                      ? 'border border-foreground/25 bg-transparent group-hover:border-foreground/60'
                      : ''
                  }`}
                  style={
                    active === i
                      ? { backgroundColor: svc.accentHex, transform: 'scale(1.3)' }
                      : {}
                  }
                />
              </button>
            ))}
          </div>

          {/* Card stack */}
          <div className="relative h-[460px] md:h-[500px]">
            {services.map((svc, i) => {
              const pos     = stackPos(i);
              const t       = STACK[pos];
              const Icon    = svc.icon;
              const isFront = pos === n - 1;

              return (
                <div
                  key={svc.title}
                  className="absolute inset-0"
                  style={{
                    zIndex:          t.zIndex,
                    opacity:         t.opacity,
                    transform:       t.transform,
                    transformOrigin: 'top center',
                    transition:      'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
                  }}
                >
                  <div
                    className={`w-full h-full rounded-[2rem] border dark:bg-card/90 bg-card backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden relative ${
                      isFront
                        ? svc.accentBorder
                        : 'border-foreground/[0.1] dark:border-foreground/[0.08]'
                    }`}
                  >
                    {/* Shine overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent pointer-events-none" />

                    {/* Content grid */}
                    <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10 relative z-10">
                      {/* Left column */}
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.accentGradient} p-0.5 mb-6 shadow-lg shadow-black/20`}
                          >
                            <div className="w-full h-full bg-card rounded-[14px] flex items-center justify-center">
                              <Icon size={28} className="text-foreground" />
                            </div>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight font-heading">
                            {svc.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {svc.description}
                          </p>
                        </div>

                        <Link
                          href={svc.href}
                          className={`flex items-center gap-2 ${svc.accentText} font-heading font-semibold hover:gap-3 transition-all duration-200 mt-6 lg:mt-0 w-fit group/link`}
                        >
                          <span>View Service</span>
                          <ArrowRight
                            size={18}
                            className="group-hover/link:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>

                      {/* Right column — key features */}
                      <div className="hidden lg:flex flex-col justify-center bg-foreground/[0.05] dark:bg-foreground/[0.04] rounded-2xl p-6 border border-foreground/[0.1] dark:border-foreground/[0.06]">
                        <h4 className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest mb-5 font-heading">
                          Key Features
                        </h4>
                        <ul className="space-y-3.5">
                          {svc.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-foreground/80"
                            >
                              <CircleCheck
                                size={18}
                                className={`${svc.accentText} shrink-0 mt-0.5`}
                              />
                              <span className="text-sm leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom ambient glow */}
                    <div
                      className={`absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br ${svc.accentGradient} opacity-[0.08] blur-[100px] rounded-full pointer-events-none`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile dots */}
          <div className="flex lg:hidden justify-center gap-3 mt-8">
            {services.map((svc, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View ${svc.label}`}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width:           active === i ? '1.5rem' : '0.625rem',
                  backgroundColor: active === i
                    ? svc.accentHex
                    : 'hsl(var(--foreground) / 0.18)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
