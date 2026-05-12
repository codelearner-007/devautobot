'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Code2, HeadphonesIcon, TrendingUp, Palette } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We move fast without cutting corners. Most projects ship within 2–4 weeks thanks to our streamlined process and experienced team.',
    highlight: '2–4 weeks',
    span: 1,
  },
  {
    icon: Code2,
    title: 'Clean, Scalable Code',
    description: 'Every line of code is written to last. Our codebases are clean, well-documented, and easy to scale as your business grows.',
    highlight: 'Production-ready',
    span: 2,
  },
  {
    icon: Palette,
    title: 'Design-First Approach',
    description: "Beautiful design isn't optional — it's core to what we do. Every project starts with UX strategy and pixel-perfect UI design.",
    highlight: 'User-centered',
    span: 2,
  },
  {
    icon: TrendingUp,
    title: 'Built to Convert',
    description: "We don't just build pretty products. We optimise for performance, SEO, and conversion rates to grow your business.",
    highlight: 'ROI focused',
    span: 1,
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    description: 'Security is built in from day one. We follow best practices for authentication, data protection, and infrastructure hardening.',
    highlight: 'Enterprise-grade',
    span: 1,
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description: "We don't disappear after launch. Our team is available for maintenance, updates, and continuous improvements post-delivery.",
    highlight: 'Always available',
    span: 2,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-[0.65rem] font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Why DevAutobot
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            The Agency That{' '}
            <span className="gradient-text">Actually Delivers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We've heard the horror stories of delayed projects, poor code, and agencies that vanish.
            We built DevAutobot to be different.
          </motion.p>
        </div>

        {/* Bento grid — Z-pattern: 1+2 / 2+1 / 1+2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const isWide = r.span === 2;

            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative rounded-2xl border border-white/8 bg-white/[0.025] overflow-hidden transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_45px_rgba(6,182,212,0.08)] cursor-default ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className={`p-6 lg:p-7 h-full flex ${isWide ? 'flex-col sm:flex-row items-start gap-5' : 'flex-col'}`}>

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200 ${isWide ? '' : 'mb-5'}`}>
                    <Icon size={19} className="text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                      <h3 className="font-heading font-bold text-base text-foreground">{r.title}</h3>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15 leading-none">
                        {r.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
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
