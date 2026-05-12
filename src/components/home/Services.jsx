'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Smartphone, ArrowRight } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Code2,
    tag: 'Web Development',
    title: 'Websites & Web Apps That Deliver',
    description:
      'We build clean, fast websites and web applications that are easy to use and built to grow. Every project ships with solid structure, good performance, and SEO taken care of.',
    features: [
      'Custom websites & landing pages',
      'Full-stack web applications',
      'E-commerce stores (Shopify/Custom)',
      'CMS integration (WordPress/Sanity)',
      'Progressive Web Apps (PWA)',
      'API development & integration',
    ],
    href: '/services/web-development',
  },
  {
    number: '02',
    icon: Smartphone,
    tag: 'App Development',
    title: 'Mobile Apps Built to Last',
    description:
      'We build iOS and Android apps that are simple, fast, and reliable. From first version to full product — we handle the build so you can focus on your users.',
    features: [
      'Cross-platform apps (Flutter/React Native)',
      'Native iOS & Android development',
      'App Store & Play Store publishing',
      'Backend & cloud infrastructure',
      'Push notifications & analytics',
      'App maintenance & updates',
    ],
    href: '/services/app-development',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(6,182,212,0.07),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-[0.65rem] font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight"
          >
            We Build for{' '}
            <span className="gradient-text">Web & Mobile</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
          >
            From landing pages to full-scale mobile apps — we ship clean, fast, and reliable products.
          </motion.p>
        </div>

        {/* Cards — full-width horizontal rows */}
        <div className="flex flex-col gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.tag}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col md:flex-row rounded-2xl border border-white/8 bg-white/[0.025] overflow-hidden transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_60px_rgba(6,182,212,0.08)]"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/55 to-transparent" />

                {/* Left panel */}
                <div className="relative flex flex-row md:flex-col justify-between md:justify-start md:w-52 lg:w-60 shrink-0 p-7 md:p-8 gap-4 md:border-r border-b md:border-b-0 border-white/6 bg-white/[0.015]">

                  {/* Ghost number */}
                  <span className="absolute bottom-2 right-3 text-[5.5rem] font-black leading-none text-white/[0.04] select-none pointer-events-none">
                    {s.number}
                  </span>

                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-primary/80 border border-primary/20 bg-primary/8 px-3 py-1 rounded-full self-start">
                      {s.tag}
                    </span>
                  </div>

                  <Link
                    href={s.href}
                    className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-auto group-hover:gap-2.5 transition-all duration-200 relative z-10"
                  >
                    Explore
                    <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Right panel */}
                <div className="relative flex-1 p-7 md:p-8 lg:p-10">

                  {/* Ghost number — large, right side */}
                  <span className="absolute top-0 right-6 text-[7rem] font-black leading-none text-white/[0.025] select-none pointer-events-none">
                    {s.number}
                  </span>

                  <div className="relative">
                    <h3 className="font-heading font-bold text-2xl lg:text-[1.7rem] text-foreground leading-snug mb-3">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-2xl">
                      {s.description}
                    </p>

                    {/* Features — 3 cols on desktop */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 mb-8 md:mb-0">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/55 shrink-0" />
                          <span className="text-xs text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mobile CTA */}
                    <Link
                      href={s.href}
                      className="md:hidden inline-flex items-center gap-2 text-sm font-semibold text-primary mt-6 group-hover:gap-3 transition-all duration-200"
                    >
                      Explore Service
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
