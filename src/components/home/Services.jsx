'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Smartphone, ArrowRight, CheckCircle2, Globe, ShoppingCart, Layout, Layers } from 'lucide-react';

const services = [
  {
    icon: Code2,
    tag: 'Web Development',
    title: 'Websites & Web Apps Built to Perform',
    description:
      'We craft fast, responsive, and visually stunning websites and web applications tailored to your business goals. Every project is built with modern tech, clean architecture, and SEO in mind.',
    features: [
      'Custom websites & landing pages',
      'Full-stack web applications',
      'E-commerce stores (Shopify/Custom)',
      'CMS integration (WordPress/Sanity)',
      'Progressive Web Apps (PWA)',
      'API development & integration',
    ],
    subicons: [Globe, ShoppingCart, Layout],
    href: '/services/web-development',
    border: 'border-primary/15 hover:border-primary/30',
    iconBg: 'bg-primary/12',
    iconColor: 'text-primary',
  },
  {
    icon: Smartphone,
    tag: 'App Development',
    title: 'Mobile Apps for iOS, Android & Beyond',
    description:
      'We build cross-platform and native mobile apps that users love. From MVP to full-scale products — our apps are fast, secure, and designed to retain users and grow your business.',
    features: [
      'Cross-platform apps (Flutter/React Native)',
      'Native iOS & Android development',
      'App Store & Play Store publishing',
      'Backend & cloud infrastructure',
      'Push notifications & analytics',
      'App maintenance & updates',
    ],
    subicons: [Smartphone, Layers, Globe],
    href: '/services/app-development',
    border: 'border-primary/15 hover:border-primary/30',
    iconBg: 'bg-primary/12',
    iconColor: 'text-primary',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mx-auto mb-4"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            Two Services,{' '}
            <span className="gradient-text">Infinite Possibilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Whether you need a web presence or a mobile product, we cover every stage
            from design to deployment.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`glass-card p-8 border ${s.border} transition-all duration-300 group hover:-translate-y-1`}
              >
                {/* Top */}
                <div className={`w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={s.iconColor} />
                </div>

                <div className="section-label mb-4" style={{ fontSize: '0.65rem' }}>
                  {s.tag}
                </div>

                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground leading-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-7">
                  {s.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-8">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className={`${s.iconColor} mt-0.5 shrink-0`} />
                      <span className="text-xs text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={s.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${s.iconColor} hover:gap-3 transition-all duration-200`}
                >
                  Explore Service
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
