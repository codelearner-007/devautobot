'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio/projects';
import ProjectShowcase from '@/components/home/portfolio/ProjectShowcase';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_30%,rgba(6,182,212,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Our Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading mb-4 text-3xl sm:text-4xl md:text-5xl"
          >
            Products We&apos;ve <span className="gradient-text">Shipped</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            Web platforms and mobile apps we designed and built end to end, from the database
            and API to the screens people use every day.
          </motion.p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {projects.map((p, i) => (
            <ProjectShowcase key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
