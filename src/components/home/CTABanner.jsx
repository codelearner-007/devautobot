'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';

export default function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(6,182,212,0.08),transparent)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-[0.65rem] font-bold uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Let&apos;s Work Together
          </div>

          <h2 className="section-heading text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Ready to Build
            <br />
            <span className="gradient-text">Something Exceptional?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a stunning website, a powerful web app, or a cross-platform mobile app —
            we have the skills, the process, and the drive to deliver it right.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary shimmer-btn text-base px-8 py-4">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground/60">
            Free consultation · No commitment · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
