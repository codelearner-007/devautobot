'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Star, Building2 } from 'lucide-react';

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    tagline: 'Perfect for launching fast',
    price: '$999',
    period: 'one-time',
    description: 'Great for startups and small businesses that need a professional web presence fast.',
    features: [
      'Custom 5-page website',
      'Mobile-responsive design',
      'Basic SEO setup',
      'Contact form integration',
      'Google Analytics setup',
      '1 month post-launch support',
      'Deployment included',
    ],
    cta: 'Get Started',
    href: '/contact?plan=starter',
    highlighted: false,
    badge: null,
  },
  {
    icon: Star,
    name: 'Professional',
    tagline: 'Most popular for growing businesses',
    price: '$2,499',
    period: 'one-time',
    description: 'Full-featured web application or mobile app with everything you need to scale your business online.',
    features: [
      'Custom web app or mobile app',
      'Up to 15 pages / screens',
      'User authentication & accounts',
      'Database & API integration',
      'Admin dashboard / CMS',
      'Advanced SEO & performance',
      'App Store submission (if mobile)',
      '3 months post-launch support',
    ],
    cta: 'Get Started',
    href: '/contact?plan=professional',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    icon: Building2,
    name: 'Enterprise',
    tagline: 'For complex, large-scale products',
    price: 'Custom',
    period: 'quote',
    description: 'Tailored solutions for businesses with complex requirements, multiple integrations, or large teams.',
    features: [
      'Everything in Professional',
      'Unlimited pages / screens',
      'Complex integrations (ERP, CRM)',
      'Multi-role user systems',
      'Real-time features (Socket.io)',
      'Custom infrastructure & DevOps',
      'Dedicated project manager',
      '12 months support & maintenance',
    ],
    cta: 'Contact Us',
    href: '/contact?plan=enterprise',
    highlighted: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mx-auto mb-4"
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            Transparent Pricing,{' '}
            <span className="gradient-text">Zero Surprises</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Fixed-price projects with clear deliverables. No hourly billing, no hidden costs.
            Get a free quote tailored to your specific requirements.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-7 relative ${
                  plan.highlighted ? 'border-primary/30 scale-[1.02]' : 'border-border'
                }`}
                style={plan.highlighted ? { boxShadow: '0 0 50px color-mix(in oklch, var(--color-primary) 12%, transparent)' } : {}}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {plan.badge}
                  </div>
                )}

                <div className={`w-11 h-11 rounded-2xl ${plan.highlighted ? 'bg-primary/15' : 'bg-foreground/5'} flex items-center justify-center mb-4`}>
                  <Icon size={19} className={plan.highlighted ? 'text-primary' : 'text-muted-foreground'} />
                </div>

                <h3 className="font-heading font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{plan.tagline}</p>

                <div className="flex items-end gap-2 mb-2">
                  <span className="font-heading font-extrabold text-4xl">{plan.price}</span>
                  {plan.period !== 'quote' && (
                    <span className="text-xs text-muted-foreground mb-1.5">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>

                <ul className="space-y-2.5 mb-8">
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
                  {plan.cta}
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Prices are starting points. Final quote depends on your specific requirements.{' '}
          <Link href="/contact" className="text-primary hover:underline">Get a custom quote →</Link>
        </motion.p>
      </div>
    </section>
  );
}
