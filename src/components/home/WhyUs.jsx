'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Code2, HeadphonesIcon, TrendingUp, Palette } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'We move fast without cutting corners. Most projects ship within 2–4 weeks thanks to our streamlined process and experienced team.',
    highlight: '2–4 weeks',
  },
  {
    icon: Code2,
    title: 'Clean, Scalable Code',
    description:
      'Every line of code is written to last. Our codebases are clean, well-documented, and easy to scale as your business grows.',
    highlight: 'Production-ready',
  },
  {
    icon: Palette,
    title: 'Design-First Approach',
    description:
      "Beautiful design isn't optional — it's core to what we do. Every project starts with UX strategy and pixel-perfect UI design.",
    highlight: 'User-centered',
  },
  {
    icon: TrendingUp,
    title: 'Built to Convert',
    description:
      "We don't just build pretty products. We optimise for performance, SEO, and conversion rates to grow your business.",
    highlight: 'ROI focused',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    description:
      'Security is built in from day one. We follow best practices for authentication, data protection, and infrastructure hardening.',
    highlight: 'Enterprise-grade',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description:
      "We don't disappear after launch. Our team is available for maintenance, updates, and continuous improvements post-delivery.",
    highlight: 'Always available',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mx-auto mb-4"
          >
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card-hover p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon size={19} className="text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-bold text-base">{r.title}</h3>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15">
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
