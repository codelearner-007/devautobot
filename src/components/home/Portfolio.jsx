'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { projects } from '@/data/portfolio/projects';
import ProjectCarousel from '@/components/home/portfolio/ProjectCarousel';

function ProjectLink({ project }) {
  const className =
    'inline-flex items-center gap-1.5 min-h-11 px-4 rounded-full text-sm font-semibold text-primary border border-primary/30 bg-primary/8 hover:bg-primary/15 transition-colors duration-200';

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
        {project.linkLabel}
        <ArrowUpRight size={15} />
      </a>
    );
  }

  return (
    <Link href="/contact" className={className}>
      {project.linkLabel}
      <ArrowUpRight size={15} />
    </Link>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
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
            className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4"
          >
            Projects We&apos;ve{' '}
            <span className="gradient-text">Built</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
          >
            A mobile app and a SaaS web platform, designed and built end to end —
            from database and API to the screens people use every day.
          </motion.p>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="group relative flex flex-col rounded-3xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.09)] hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent z-10" />

              {/* Preview */}
              <div className="relative h-72 md:h-80 overflow-hidden border-b border-foreground/6 bg-gradient-to-br from-primary/10 via-primary/4 to-transparent bg-[radial-gradient(rgba(6,182,212,0.18)_1px,transparent_1px)] bg-[length:18px_18px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_50%_60%,rgba(6,182,212,0.10),transparent)]" />
                <ProjectCarousel slides={p.slides} title={p.title} />

                <div className="pointer-events-none absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-background/80 backdrop-blur border border-primary/25 px-2.5 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-background/80 backdrop-blur text-muted-foreground border border-foreground/10">
                    {p.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground leading-tight mb-1">{p.title}</h3>
                <p className="text-xs sm:text-sm text-primary/75 font-medium mb-3">{p.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                      <Check size={14} className="text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-foreground/[0.05] border border-foreground/10 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <ProjectLink project={p} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 sm:mt-14"
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
