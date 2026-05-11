'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { site } from '@/lib/site';

export default function CTABanner() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5 dark:opacity-8"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, var(--color-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mx-auto mb-6">
            <Sparkles size={11} />
            Let's Work Together
          </div>

          <h2 className="section-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
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

          <p className="mt-6 text-sm text-muted-foreground">
            Free consultation · No commitment · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
