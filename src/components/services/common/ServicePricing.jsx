'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Star } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

/* ─── USE CASES ─── */
export interface UseCase {
  emoji: string;
  industry: string;
  title: string;
  description: string;
}

interface UseCasesProps {
  useCases: UseCase[];
  accentColorClass?: string;
}

export function UseCases({ useCases, accentColorClass = 'text-primary' }: UseCasesProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-card">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-block">Use Cases</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Who This Is <span className="gradient-text">Built For</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every industry has repetitive, costly processes. We identify them and eliminate them.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {useCases.map((uc) => (
            <motion.div
              key={uc.title}
              variants={staggerItem}
              className="glass-card p-6 group hover:border-foreground/[0.12] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{uc.emoji}</span>
                <span className={`text-xs font-heading font-semibold tracking-wider uppercase ${accentColorClass}`}>
                  {uc.industry}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2.5">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

const tierConfig = [
  {
    cardClass: 'glass-card hover:border-foreground/[0.1]',
    headerBg: 'bg-foreground/3',
    checkColor: 'text-muted-foreground/50',
    btnClass: 'btn-secondary hover:border-foreground/20',
    icon: null as React.ElementType | null,
  },
  {
    cardClass: 'bg-gradient-to-b from-primary/10 to-violet-500/5 border-2 border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.1)]',
    headerBg: 'bg-primary/5',
    checkColor: 'text-primary',
    btnClass: 'btn-primary shimmer-btn',
    icon: Sparkles as React.ElementType,
  },
  {
    cardClass: 'glass-card hover:border-foreground/[0.1]',
    headerBg: 'bg-foreground/3',
    checkColor: 'text-muted-foreground/50',
    btnClass: 'btn-secondary hover:border-foreground/20',
    icon: null as React.ElementType | null,
  },
];

interface ServicePricingProps {
  tiers: PricingTier[];
}

export function ServicePricing({ tiers }: ServicePricingProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-block">Pricing</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Pick the plan that fits your stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => {
            const config = tierConfig[i];
            const IconComp = config.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${config.cardClass}`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-violet-500 text-xs font-heading font-bold text-primary-foreground">
                    <Star size={10} fill="currentColor" />
                    {tier.badge}
                  </div>
                )}

                {/* Card header */}
                <div className={`px-7 pt-7 pb-5 ${config.headerBg} border-b border-foreground/5`}>
                  <div className="flex items-center gap-2 mb-1">
                    {IconComp && <IconComp size={14} className="text-primary" />}
                    <h3 className="font-heading font-bold text-lg text-foreground">{tier.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{tier.description}</p>

                  <div className="flex items-end gap-2">
                    <span className={`font-heading font-bold text-4xl ${tier.featured ? 'bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent' : 'text-foreground'}`}>
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-sm text-muted-foreground mb-1">{tier.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="px-7 py-6 flex-1">
                  <p className="text-xs text-muted-foreground/60 font-heading uppercase tracking-wider mb-4">Includes</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.featured ? 'bg-primary/15' : 'bg-foreground/5'}`}>
                          <Check size={10} className={config.checkColor} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-7 pb-7">
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-heading font-semibold text-sm transition-all duration-200 cursor-pointer ${config.btnClass}`}
                  >
                    {tier.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-sm text-muted-foreground/60">
            Need a custom solution?{' '}
            <Link href="/contact" className="text-primary hover:underline cursor-pointer">
              Let&apos;s talk →
            </Link>
          </p>
          <p className="text-xs text-muted-foreground/40">All prices are one-time project fees unless stated otherwise. Maintenance plans available separately.</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SERVICE CTA ─── */
interface ServiceCTAProps {
  headline: string;
  subtext: string;
  cta: string;
}

export function ServiceCTA({ headline, subtext, cta }: ServiceCTAProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-violet-500/5 to-pink-500/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5 leading-tight">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">{subtext}</p>
          <Link href="/contact" className="btn-primary shimmer-btn text-base px-8 py-4 mx-auto">
            {cta}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
