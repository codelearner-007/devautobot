'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-violet-500/5 to-pink-500/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      {/* Animated beam */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-6 inline-block">Ready to Start?</span>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-tight">
            Ready to Build Your<br />
            <span className="gradient-text">AI-Powered Future?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll audit your current setup, identify AI opportunities, and map out exactly how we can help your business grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary shimmer-btn text-base px-8 py-4">
              <Calendar size={18} />
              Book a Free Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link href="#services" className="btn-secondary text-base px-8 py-4">
              View All Services
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              No commitment required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              Free 30-minute call
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              Response within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
