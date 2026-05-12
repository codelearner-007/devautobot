'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, ShoppingCart, LayoutDashboard } from 'lucide-react';

const projects = [
  {
    title: 'EcoStore',
    subtitle: 'E-Commerce Platform',
    category: 'Web Dev',
    type: 'E-Commerce',
    icon: ShoppingCart,
    description: 'Full-featured online store with product catalog, Stripe payments, order tracking, and an admin dashboard. Built on Next.js with a headless CMS.',
    tech: ['Next.js', 'Stripe', 'Sanity CMS', 'PostgreSQL'],
    metric: '+180% conversion',
  },
  {
    title: 'FitTrack',
    subtitle: 'Fitness Mobile App',
    category: 'App Dev',
    type: 'Mobile App',
    icon: Smartphone,
    description: 'Cross-platform fitness app for iOS & Android with workout logging, progress charts, and social sharing.',
    tech: ['Flutter', 'Firebase', 'Node.js'],
    metric: '10k+ downloads',
  },
  {
    title: 'PropVision',
    subtitle: 'Real Estate Platform',
    category: 'Web Dev',
    type: 'Web App',
    icon: LayoutDashboard,
    description: 'Property listing platform with map integration, virtual tours, and a CRM dashboard for real estate agents.',
    tech: ['React', 'Google Maps', 'MongoDB'],
    metric: '5x faster search',
  },
];

const dotPattern = {
  backgroundImage: 'radial-gradient(rgba(6,182,212,0.18) 1px, transparent 1px)',
  backgroundSize: '18px 18px',
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(6,182,212,0.05),transparent)]" />

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
            Recent Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            Projects We&apos;re{' '}
            <span className="gradient-text">Proud Of</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A selection of websites and apps built for clients across industries —
            each delivered with care and measurable results.
          </motion.p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group relative rounded-3xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.09)] hover:-translate-y-1 cursor-default"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

                {/* Preview strip */}
                <div
                  className="relative h-44 overflow-hidden border-b border-foreground/6 bg-gradient-to-br from-primary/7 via-primary/3 to-transparent"
                  style={dotPattern}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_50%_60%,rgba(6,182,212,0.08),transparent)]" />
                  <Icon size={68} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/10 group-hover:text-primary/16 transition-colors duration-500" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/25 px-2.5 py-0.5 rounded-full">
                        {p.category}
                      </span>
                      <span className="text-[9px] text-muted-foreground">{p.type}</span>
                    </div>
                    <span className="text-[9px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/12 text-primary border border-primary/25">
                      {p.metric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col">
                  <h3 className="font-heading font-bold text-base text-foreground leading-tight mb-0.5">{p.title}</h3>
                  <p className="text-xs text-primary/65 font-medium mb-2.5">{p.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-foreground/[0.05] border border-foreground/10 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-[10px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View Case Study <ArrowUpRight size={11} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <Link href="/contact" className="btn-secondary">
            Discuss Your Project
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
