'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery & Consultation',
    subtitle: 'Understanding Your Vision',
    description:
      'We deep-dive into your goals, audience, and competitors. Every decision starts with understanding what success looks like for you.',
    duration: '1–2 weeks',
    deliverables: ['Goal alignment', 'Audience analysis', 'Competitor audit', 'KPI mapping'],
    color: 'text-cyan-400',
    colorHex: '#22d3ee',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    activeBorder: 'border-cyan-400/60',
    glow: 'shadow-[0_0_40px_rgba(34,211,238,0.12)]',
    gradient: 'from-cyan-400/20 to-cyan-400/5',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy & Planning',
    subtitle: 'Crafting the Perfect Roadmap',
    description:
      'We map out the full architecture — workflows, integrations, KPIs, and a clear delivery plan before any design or code begins.',
    duration: '1–2 weeks',
    deliverables: ['Process mapping', 'Tech architecture', 'KPI framework', 'Delivery plan'],
    color: 'text-violet-400',
    colorHex: '#a78bfa',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    activeBorder: 'border-violet-400/60',
    glow: 'shadow-[0_0_40px_rgba(167,139,250,0.12)]',
    gradient: 'from-violet-400/20 to-violet-400/5',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Design & Prototyping',
    subtitle: 'Bringing Ideas to Life',
    description:
      'Wireframes, hi-fi mockups, and interactive prototypes. You see and approve the full experience before a single line of code is written.',
    duration: '2–3 weeks',
    deliverables: ['Figma wireframes', 'Hi-fi prototype', 'Design review', 'Client approval'],
    color: 'text-pink-400',
    colorHex: '#f472b6',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    activeBorder: 'border-pink-400/60',
    glow: 'shadow-[0_0_40px_rgba(244,114,182,0.12)]',
    gradient: 'from-pink-400/20 to-pink-400/5',
  },
  {
    icon: Code2,
    number: '04',
    title: 'Development & Testing',
    subtitle: 'Building with Precision',
    description:
      'Engineering excellence. We build, test, and iterate — integrating AI, APIs, and third-party systems with rigorous QA at every step.',
    duration: '4–8 weeks',
    deliverables: ['Full development', 'Quality testing', 'Performance optimisation', 'Cross-browser QA'],
    color: 'text-blue-400',
    colorHex: '#60a5fa',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    activeBorder: 'border-blue-400/60',
    glow: 'shadow-[0_0_40px_rgba(96,165,250,0.12)]',
    gradient: 'from-blue-400/20 to-blue-400/5',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Launch & Optimisation',
    subtitle: 'Going Live Successfully',
    description:
      'Deploy, monitor, and optimise. We stay with you post-launch to ensure peak performance and continued growth.',
    duration: '1 week',
    deliverables: ['DNS & deploy', 'Go-live QA', 'Monitoring setup', 'Growth tracking'],
    color: 'text-amber-400',
    colorHex: '#fbbf24',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    activeBorder: 'border-amber-400/60',
    glow: 'shadow-[0_0_40px_rgba(251,191,36,0.12)]',
    gradient: 'from-amber-400/20 to-amber-400/5',
  },
];

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;

  return (
    <section id="process" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-block">How We Work</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            From Idea to <span className="gradient-text">Launched Product</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A proven 5-step process that keeps projects on time, on budget, and above expectations.
          </p>
        </motion.div>

        {/* Body */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── Left: Step list ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-8">
              <div className="relative">
                {/* Vertical gradient line */}
                <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400/40 via-pink-400/40 to-amber-400/40" />

                <div className="space-y-3">
                  {steps.map((s, i) => {
                    const StepIcon = s.icon;
                    const isActive = i === active;
                    return (
                      <button
                        key={s.number}
                        onClick={() => setActive(i)}
                        className={`w-full text-left group relative transition-all duration-300 rounded-2xl p-4 pr-5 border ${
                          isActive
                            ? `${s.bg} ${s.activeBorder} ${s.glow}`
                            : 'border-transparent hover:border-foreground/8 hover:bg-foreground/3'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {/* Icon dot */}
                          <div
                            className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                              isActive
                                ? `${s.bg} ${s.activeBorder}`
                                : 'bg-card border-border'
                            }`}
                          >
                            <StepIcon
                              size={18}
                              className={isActive ? s.color : 'text-muted-foreground'}
                            />
                          </div>

                          {/* Text */}
                          <div className="min-w-0">
                            <p
                              className={`font-heading font-bold text-sm leading-snug transition-colors ${
                                isActive ? 'text-foreground' : 'text-muted-foreground'
                              }`}
                            >
                              {s.title}
                            </p>
                            <p className="text-xs text-muted-foreground/60 mt-0.5">
                              {s.subtitle}
                            </p>
                            <div className="flex items-center gap-1 mt-1.5">
                              <Clock size={10} className="text-muted-foreground/40" />
                              <span className="text-xs text-muted-foreground/50">{s.duration}</span>
                            </div>
                          </div>

                          {/* Active arrow */}
                          <ArrowRight
                            size={14}
                            className={`ml-auto flex-shrink-0 transition-all duration-300 ${
                              isActive ? `${s.color} opacity-100` : 'opacity-0'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Detail panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`glass-card relative overflow-hidden rounded-2xl border ${step.activeBorder} ${step.glow} p-8`}
              >
                {/* Colored top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(to right, ${step.colorHex}, transparent)`,
                  }}
                />

                {/* Background gradient watermark */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} pointer-events-none`}
                />

                {/* Step number watermark */}
                <span className="absolute top-4 right-6 font-heading font-bold text-8xl text-foreground/4 leading-none select-none">
                  {step.number}
                </span>

                <div className="relative">
                  {/* Icon + title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl ${step.bg} border ${step.activeBorder} flex items-center justify-center`}
                    >
                      <Icon size={26} className={step.color} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-foreground leading-tight">
                        {step.title}
                      </h3>
                      <p className={`text-sm font-medium mt-0.5 ${step.color}`}>{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 size={15} className={step.color} />
                      Key Deliverables
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.deliverables.map((d) => (
                        <div
                          key={d}
                          className={`flex items-center gap-3 rounded-xl ${step.bg} border ${step.border} px-4 py-3`}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: step.colorHex }}
                          />
                          <span className="text-sm font-medium text-foreground/80">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer meta */}
                  <div
                    className={`mt-8 pt-6 border-t ${step.border} flex items-center gap-6`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock size={14} className={step.color} />
                      <div>
                        <p className="text-xs text-muted-foreground/60">Duration</p>
                        <p className="text-sm font-semibold text-foreground">{step.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className={step.color} />
                      <div>
                        <p className="text-xs text-muted-foreground/60">Deliverables</p>
                        <p className="text-sm font-semibold text-foreground">{step.deliverables.length} items</p>
                      </div>
                    </div>
                    {/* Step dots */}
                    <div className="ml-auto flex items-center gap-1.5">
                      {steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`rounded-full transition-all duration-300 ${
                            i === active
                              ? `w-5 h-1.5`
                              : 'w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40'
                          }`}
                          style={i === active ? { background: step.colorHex } : undefined}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
