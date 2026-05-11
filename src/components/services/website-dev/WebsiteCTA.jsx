'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, Shield, Zap, MessageSquare } from 'lucide-react';
import Container from '@/components/ui/Container';

const trustPoints = [
  { icon: CalendarCheck, label: 'Free Strategy Call', sub: 'No commitment required' },
  { icon: Shield,        label: 'Fixed-Price Projects', sub: 'No scope surprises' },
  { icon: Zap,           label: '3–6 Week Delivery', sub: 'Fast, without shortcuts' },
  { icon: MessageSquare, label: 'Dedicated PM', sub: "You're never in the dark" },
];

export default function WebsiteCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-violet-500/5 to-pink-500/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-foreground/8 to-transparent" />

      <Container size="md" className="relative z-10">
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-block">
            <CalendarCheck size={12} />
            Free Strategy Call
          </span>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5 leading-tight">
            Ready to Build a Website<br className="hidden sm:block" />
            <span className="gradient-text"> That Actually Works?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s start with a free strategy call. We&apos;ll review your current site, identify conversion leaks, and scope out exactly what your new site needs to succeed.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="btn-primary shimmer-btn text-base px-8 py-4 cursor-pointer"
            >
              Book Your Free Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#projects"
              className="btn-secondary text-base px-8 py-4 cursor-pointer"
            >
              See Our Work First
            </Link>
          </div>
        </motion.div>

        {/* Trust grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="glass-card p-5 text-center group hover:border-foreground/[0.1] transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/8 flex items-center justify-center mx-auto mb-3 group-hover:border-primary/20 group-hover:bg-primary/8 transition-all duration-300">
                  <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="font-heading font-bold text-sm text-foreground mb-0.5">{point.label}</div>
                <div className="text-xs text-muted-foreground/60">{point.sub}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
