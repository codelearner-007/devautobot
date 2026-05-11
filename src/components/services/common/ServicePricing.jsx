'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Star } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

/* ─── USE CASES ─── */
export function UseCases({ useCases, accentColorClass = 'text-primary' }) {
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


/* ─── SERVICE CTA ─── */


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
