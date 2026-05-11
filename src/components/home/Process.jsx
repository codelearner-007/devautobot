'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code2, TestTube2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'We start by deeply understanding your business, goals, and users. This stage includes requirements gathering, competitor research, and defining the project scope and timeline.',
    duration: '1–3 days',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Design',
    description:
      'Our designers craft wireframes and high-fidelity UI mockups that align with your brand. You get to review and approve every screen before we write a single line of code.',
    duration: '3–7 days',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Development',
    description:
      'We build your product with clean, scalable code. You receive weekly progress updates and have access to a staging environment throughout the entire development phase.',
    duration: '1–4 weeks',
  },
  {
    num: '04',
    icon: TestTube2,
    title: 'Testing & QA',
    description:
      'Thorough quality assurance across devices, browsers, and user scenarios. We test for performance, accessibility, security vulnerabilities, and edge cases before launch.',
    duration: '2–4 days',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'We handle the full deployment — domain setup, SSL, app store submissions, and go-live. Post-launch, we stay available for bug fixes, updates, and ongoing improvements.',
    duration: 'Ongoing',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mx-auto mb-4"
          >
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

        {/* Desktop: horizontal connected steps */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-8">
          {/* Connector line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step circle */}
                <div className="w-20 h-20 rounded-2xl bg-card border border-border flex flex-col items-center justify-center mb-5 relative z-10 group-hover:border-primary/30 transition-colors">
                  <Icon size={22} className="text-primary mb-1" />
                  <span className="text-[9px] font-bold text-muted-foreground">{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{step.description}</p>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                  {step.duration}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-5 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-primary">{step.num}</span>
                    <h3 className="font-heading font-bold text-sm">{step.title}</h3>
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15 ml-auto">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
