'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Star, Building2 } from 'lucide-react';

const allPlans = {
  web: [
    {
      icon: Zap,
      name: 'Starter',
      tagline: 'Ideal for small businesses & personal brands',
      description: 'A clean, professional website to establish your online presence and start converting visitors.',
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Basic SEO setup',
        'Contact form integration',
        'Google Analytics setup',
        'Deployment included',
        '1 month post-launch support',
      ],
      href: '/contact?plan=web-starter',
      highlighted: false,
      badge: null,
    },
    {
      icon: Star,
      name: 'Professional',
      tagline: 'Best for growing businesses',
      description: 'A dynamic website or web app packed with everything you need to grow and scale online.',
      features: [
        '6–15 pages',
        'User authentication & accounts',
        'CMS / Admin dashboard',
        'Database & API integration',
        'Advanced SEO & performance',
        'E-Commerce / payment integration',
        '3 months post-launch support',
      ],
      href: '/contact?plan=web-professional',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      icon: Building2,
      name: 'Enterprise',
      tagline: 'For large-scale platforms',
      description: 'Complex platforms with custom infrastructure, multiple integrations, and dedicated support.',
      features: [
        'Unlimited pages',
        'Complex integrations (ERP, CRM)',
        'Multi-role user systems',
        'Real-time features (WebSockets)',
        'Custom DevOps & infrastructure',
        'Dedicated project manager',
        '6 months support & maintenance',
      ],
      href: '/contact?plan=web-enterprise',
      highlighted: false,
      badge: null,
    },
  ],
  app: [
    {
      icon: Zap,
      name: 'MVP',
      tagline: 'Launch your idea fast',
      description: 'A focused mobile app with core features to validate your product and get to market quickly.',
      features: [
        'Up to 5 screens',
        'Cross-platform (iOS & Android)',
        'User authentication',
        'Basic backend & REST API',
        'Play Store & App Store submission',
        '1 month post-launch support',
      ],
      href: '/contact?plan=app-mvp',
      highlighted: false,
      badge: null,
    },
    {
      icon: Star,
      name: 'Professional',
      tagline: 'Full-featured product',
      description: 'A complete app with rich features, integrations, admin tooling, and a scalable backend.',
      features: [
        '6–20 screens',
        'Real-time data & push notifications',
        'Payment gateway integration',
        'Admin dashboard & analytics',
        'Crash reporting & monitoring',
        '3 months post-launch support',
      ],
      href: '/contact?plan=app-professional',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      icon: Building2,
      name: 'Enterprise',
      tagline: 'Complex, large-scale apps',
      description: 'End-to-end app ecosystems with custom infrastructure, team management, and dedicated support.',
      features: [
        'Unlimited screens & modules',
        'Custom backend & microservices',
        'Multi-role & team accounts',
        'GDPR / HIPAA compliant builds',
        'Dedicated project manager',
        '6 months support & maintenance',
      ],
      href: '/contact?plan=app-enterprise',
      highlighted: false,
      badge: null,
    },
  ],
};

const defaultHeadings = {
  web: <> Web Dev Plans,{' '}<span className="gradient-text">Your Budget</span></>,
  app: <>App Plans,{' '}<span className="gradient-text">Your Scope</span></>,
};

const defaultSubheadings = {
  web: 'Pricing adapts to your project — number of pages, design requirements, functionality, and integrations all factor in. Request a free quote with no obligations.',
  app: 'Pricing is based on the number of screens, complexity of features, backend requirements, and integrations. Every quote is free with no obligations.',
};

export default function ServicePricing({ serviceType }) {
  const plans = allPlans[serviceType];
  const heading = defaultHeadings[serviceType];
  const subheading = defaultSubheadings[serviceType];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(6,182,212,0.06),transparent)]" />

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
            Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {subheading}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 pt-5 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl border transition-all duration-300 flex flex-col ${plan.highlighted
                  ? 'border-primary/35 bg-white/[0.04] shadow-[0_0_55px_rgba(6,182,212,0.12)]'
                  : 'border-white/8 bg-white/[0.025] hover:border-primary/25 hover:shadow-[0_0_40px_rgba(6,182,212,0.07)]'
                  }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${plan.highlighted ? 'via-primary/70' : 'via-primary/40'} to-transparent`} />

                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${plan.highlighted ? 'bg-primary/15 border-primary/30' : 'bg-white/[0.04] border-white/10'}`}>
                    <Icon size={19} className={plan.highlighted ? 'text-primary' : 'text-muted-foreground'} />
                  </div>

                  <h3 className="font-heading font-bold text-xl mb-1 text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mb-5">{plan.tagline}</p>

                  <p className="text-sm text-muted-foreground mb-7 leading-relaxed">{plan.description}</p>

                  <div className="w-full h-px bg-white/6 mb-6" />

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={plan.highlighted ? 'btn-primary shimmer-btn w-full justify-center' : 'btn-secondary w-full justify-center'}
                  >
                    Get a Quote
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Final price is based on your specific requirements — pages, design, complexity & integrations.{' '}
          <Link href="/contact" className="text-primary hover:underline">Talk to us for a free estimate →</Link>
        </motion.p>

      </div>
    </section>
  );
}
