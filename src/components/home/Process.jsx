'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code2, TestTube2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We start by deeply understanding your business, goals, and users. This stage includes requirements gathering, competitor research, and defining the project scope and timeline.',
    duration: '1–3 days',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Design',
    description: 'Our designers craft wireframes and high-fidelity UI mockups that align with your brand. You get to review and approve every screen before we write a single line of code.',
    duration: '3–7 days',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Development',
    description: 'We build your product with clean, scalable code. You receive weekly progress updates and have access to a staging environment throughout the entire development phase.',
    duration: '1–4 weeks',
  },
  {
    num: '04',
    icon: TestTube2,
    title: 'Testing & QA',
    description: 'Thorough quality assurance across devices, browsers, and user scenarios. We test for performance, accessibility, security vulnerabilities, and edge cases before launch.',
    duration: '2–4 days',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We handle the full deployment — domain setup, SSL, app store submissions, and go-live. Post-launch, we stay available for bug fixes, updates, and ongoing improvements.',
    duration: 'Ongoing',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(6,182,212,0.05),transparent)]" />

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
            How We Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            A Process Built for{' '}
            <span className="gradient-text">Predictable Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            No surprises, no scope creep. Our five-step process keeps every project
            on time, on budget, and exactly what you envisioned.
          </motion.p>
        </div>

        {/* Desktop: 5-col horizontal with connector */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[2.6rem] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="group relative rounded-2xl border border-white/8 bg-white/[0.025] overflow-hidden p-5 flex flex-col hover:border-primary/25 hover:shadow-[0_0_40px_rgba(6,182,212,0.07)] transition-all duration-300 cursor-default"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <span className="absolute bottom-4 right-4 text-[3.5rem] font-black leading-none text-white/[0.03] select-none pointer-events-none">
                    {step.num}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 relative z-10">
                    <Icon size={16} className="text-primary" />
                  </div>

                  <span className="text-[0.58rem] font-bold uppercase tracking-[0.15em] text-primary/70 border border-primary/20 bg-primary/8 px-2.5 py-0.5 rounded-full self-start mb-3">
                    Step {step.num}
                  </span>

                  <h3 className="font-heading font-bold text-sm text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{step.description}</p>

                  <span className="text-[9px] font-semibold px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15 self-start">
                    {step.duration}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-5 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent pointer-events-none" />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  {/* Icon circle — sits ON the line */}
                  <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-background border-2 border-primary/35 flex items-center justify-center shadow-[0_0_14px_rgba(6,182,212,0.18)]">
                    <Icon size={15} className="text-primary" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 relative rounded-2xl border border-foreground/10 bg-foreground/[0.025] overflow-hidden p-4 hover:border-primary/25 hover:shadow-[0_0_32px_rgba(6,182,212,0.07)] transition-all duration-300 cursor-default">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                    {/* Ghost step number */}
                    <span className="absolute bottom-1 right-3 text-[3.5rem] font-black leading-none text-foreground/[0.04] select-none pointer-events-none">
                      {step.num}
                    </span>

                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[0.58rem] font-bold uppercase tracking-[0.15em] text-primary/70 border border-primary/20 bg-primary/8 px-2.5 py-0.5 rounded-full">
                        Step {step.num}
                      </span>
                      <span className="text-[9px] font-semibold px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
