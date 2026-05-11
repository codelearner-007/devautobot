'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { SampleProject } from '@/lib/types';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Container from '@/components/ui/Container';
import TiltCard from '@/components/ui/TiltCard';

const COLORS = [
  { accent: 'text-pink-400', glow: 'from-pink-400/15', border: 'border-pink-400/20', badge: 'bg-pink-400/10 text-pink-400 border-pink-400/20' },
  { accent: 'text-blue-400', glow: 'from-blue-400/15', border: 'border-blue-400/20', badge: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
  { accent: 'text-violet-400', glow: 'from-violet-400/15', border: 'border-violet-400/20', badge: 'bg-violet-400/10 text-violet-400 border-violet-400/20' },
  { accent: 'text-emerald-400', glow: 'from-emerald-400/15', border: 'border-emerald-400/20', badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
  { accent: 'text-primary', glow: 'from-primary/15', border: 'border-primary/20', badge: 'bg-primary/10 text-primary border-primary/20' },
];

const PER_PAGE = 3;

interface ServiceProjectsProps {
  projects: SampleProject[];
}

export default function ServiceProjects({ projects }: ServiceProjectsProps) {
  const reversed = [...projects].reverse();
  const totalPages = Math.ceil(reversed.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  };

  const visibleProjects = reversed.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-background">
      <Container size="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex items-center gap-1.5">
            <Layers size={12} />
            <span>Sample Projects</span>
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Real Work, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A look at projects that demonstrate the quality and impact we deliver across industries.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 60 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -60 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {visibleProjects.map((project, i) => {
                  const globalIndex = page * PER_PAGE + i;
                  const color = COLORS[globalIndex % COLORS.length];
                  return (
                    <motion.div key={project.id} variants={staggerItem}>
                      <TiltCard className="w-full h-full">
                        <div className="group glass-card overflow-hidden hover:border-foreground/[0.1] transition-all duration-300 cursor-default flex flex-col h-full">
                          {/* Visual banner */}
                          <div className={`relative h-48 bg-gradient-to-br ${project.gradient} bg-secondary overflow-hidden flex-shrink-0`}>
                            {/* Browser chrome strip */}
                            <div className="absolute top-0 left-0 right-0 h-8 bg-secondary/80 border-b border-foreground/5 flex items-center px-3 gap-2">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                              </div>
                              <div className="flex-1 mx-2 h-4 bg-secondary/80 rounded px-2 flex items-center">
                                <div className="h-1.5 bg-foreground/15 rounded-full w-1/2" />
                              </div>
                            </div>

                            {/* Page content stub */}
                            <div className="absolute top-8 inset-x-0 bottom-0 p-3 space-y-2">
                              <div className={`h-8 rounded bg-gradient-to-r ${color.glow} to-transparent border ${color.border} flex items-center px-2 gap-2`}>
                                <span className="text-sm leading-none">{project.icon}</span>
                                <div className="h-1.5 bg-foreground/20 rounded-full w-2/3" />
                              </div>
                              <div className="grid grid-cols-4 gap-1.5">
                                {[...Array(8)].map((_, j) => (
                                  <div key={j} className="h-10 rounded bg-foreground/4 border border-foreground/5" />
                                ))}
                              </div>
                              <div className="space-y-1">
                                <div className="h-1.5 bg-foreground/8 rounded-full w-full" />
                                <div className="h-1.5 bg-foreground/5 rounded-full w-4/5" />
                              </div>
                            </div>

                            <div className="absolute inset-0 bg-grid opacity-40" />

                            <div className="absolute bottom-3 left-3 font-heading font-bold text-xs text-foreground/20 tracking-widest">
                              {String(globalIndex + 1).padStart(2, '0')}
                            </div>

                            <div className={`absolute top-10 right-3 px-2.5 py-1 rounded-full border text-xs font-heading ${color.badge}`}>
                              {project.industry}
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-background/70 to-transparent">
                              <div className={`font-heading font-bold text-2xl ${color.accent} leading-none`}>
                                {project.result}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">{project.resultLabel}</div>
                            </div>
                          </div>

                          {/* Card body */}
                          <div className="p-6 flex flex-col flex-1">
                            <div className="mb-3">
                              <h3 className={`font-heading font-bold text-lg text-foreground mb-0.5 group-hover:${color.accent} transition-colors duration-200`}>
                                {project.title}
                              </h3>
                              <p className="text-xs text-muted-foreground font-heading">{project.client}</p>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2.5 py-1 rounded-full bg-foreground/4 border border-foreground/7 text-muted-foreground font-heading"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className={`flex items-center gap-1.5 text-sm font-heading font-semibold ${color.accent} group/btn`}>
                              View Case Study
                              <ArrowUpRight
                                size={14}
                                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                              />
                            </div>
                          </div>
                        </div>
                      </TiltCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => go(page - 1)}
                disabled={page === 0}
                className="w-9 h-9 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                aria-label="Previous projects"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Page ${i + 1}`}
                    className="rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: i === page ? 24 : 6,
                      height: 6,
                      backgroundColor: i === page ? 'hsl(var(--primary))' : 'hsl(var(--foreground) / 0.15)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => go(page + 1)}
                disabled={page === totalPages - 1}
                className="w-9 h-9 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                aria-label="Next projects"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          <p className="text-center text-xs text-muted-foreground/60 font-heading mt-4">
            Showing {page * PER_PAGE + 1}–{Math.min((page + 1) * PER_PAGE, reversed.length)} of {reversed.length} projects
          </p>
        </div>
      </Container>
    </section>
  );
}
