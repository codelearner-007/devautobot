'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, PenTool, Code2, Rocket, Settings, Settings2,
  ClipboardList, ClipboardCheck, PhoneCall, MessageSquare,
  CalendarCheck, BarChart2, GitBranch, UserCircle, FileText,
  Sparkles, Globe, CheckCircle2, Clock, ArrowRight, Lightbulb,
  LucideIcon,
} from 'lucide-react';
import Container from '@/components/ui/Container';



const iconMap = {
  Search, PenTool, Code2, Rocket, Settings, Settings2,
  ClipboardList, ClipboardCheck, PhoneCall, MessageSquare,
  CalendarCheck, BarChart2, GitBranch, UserCircle, FileText,
  Sparkles, Globe, Lightbulb,
};

export default function ServiceProcess({
  steps,
  description = 'A clear, proven path from first conversation to full deployment.',
  footerNote,
  completionText = 'Complete — ready to go live',
}) {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = iconMap[step.icon];
  const { accent } = step;

  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-60"
          style={{ background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)` }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <Container size="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-block">The Process</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{description}</p>
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
                <div
                  className="absolute left-6 top-6 bottom-6 w-px hidden sm:block"
                  style={{ background: 'linear-gradient(180deg, rgba(34,211,238,0.4), rgba(244,114,182,0.3), rgba(251,191,36,0.3))' }}
                />

                <div className="space-y-2">
                  {steps.map((s, i) => {
                    const StepIcon = iconMap[s.icon];
                    const isActive = i === active;
                    return (
                      <button
                        key={s.number}
                        onClick={() => setActive(i)}
                        className={`w-full text-left group relative transition-all duration-300 rounded-2xl p-4 pr-5 border ${
                          isActive
                            ? `${s.accent.bg} cursor-default`
                            : 'border-transparent hover:border-foreground/8 hover:bg-foreground/3'
                        }`}
                        style={isActive ? {
                          borderColor: `${s.accent.dot}60`,
                          boxShadow: `0 0 30px ${s.accent.glow}`,
                        } : undefined}
                      >
                        <div className="flex items-center gap-4">
                          {/* Icon dot */}
                          <div
                            className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                              isActive ? s.accent.bg : 'bg-card border-border'
                            }`}
                            style={isActive ? { borderColor: `${s.accent.dot}60` } : undefined}
                          >
                            {StepIcon && (
                              <StepIcon
                                size={18}
                                className={isActive ? s.accent.text : 'text-muted-foreground'}
                              />
                            )}
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
                            <div className="flex items-center gap-1 mt-1">
                              <span
                                className="text-[10px] font-heading font-bold tracking-widest uppercase"
                                style={{ color: `${s.accent.dot}90` }}
                              >
                                Step {s.number}
                              </span>
                            </div>
                          </div>

                          {/* Active arrow */}
                          <ArrowRight
                            size={14}
                            className={`ml-auto flex-shrink-0 transition-all duration-300 ${s.accent.text} ${
                              isActive ? 'opacity-100' : 'opacity-0'
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
                className="glass-card relative overflow-hidden rounded-2xl p-8"
                style={{
                  borderColor: `${accent.dot}40`,
                  boxShadow: `0 0 40px ${accent.glow}`,
                }}
              >
                {/* Colored top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(to right, ${accent.dot}, transparent)` }}
                />

                {/* Background gradient tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${accent.dot}12 0%, ${accent.dot}04 100%)` }}
                />

                {/* Step number watermark */}
                <span className="absolute top-4 right-6 font-heading font-bold text-8xl text-foreground/4 leading-none select-none">
                  {step.number}
                </span>

                <div className="relative">
                  {/* Icon + title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl ${accent.bg} flex items-center justify-center border`}
                      style={{ borderColor: `${accent.dot}40` }}
                    >
                      {Icon && <Icon size={26} className={accent.text} />}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-foreground leading-tight">
                        {step.title}
                      </h3>
                      <span
                        className="text-[10px] font-heading font-bold tracking-widest uppercase mt-1 inline-block"
                        style={{ color: accent.dot }}
                      >
                        Step {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <h4
                      className="font-heading font-semibold text-sm text-foreground mb-4 flex items-center gap-2"
                    >
                      <CheckCircle2 size={15} className={accent.text} />
                      Key Deliverables
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((d) => (
                        <div
                          key={d}
                          className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${accent.bg}`}
                          style={{ borderColor: `${accent.dot}20` }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: accent.dot }}
                          />
                          <span className="text-sm font-medium text-foreground/80">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="mt-8 pt-6 border-t flex items-center gap-6"
                    style={{ borderColor: `${accent.dot}20` }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className={accent.text} />
                      <div>
                        <p className="text-xs text-muted-foreground/60">Deliverables</p>
                        <p className="text-sm font-semibold text-foreground">{step.details.length} items</p>
                      </div>
                    </div>

                    {/* Next step hint */}
                    {active < steps.length - 1 && (
                      <div className="flex items-center gap-2">
                        <ArrowRight size={14} className="text-muted-foreground/40" />
                        <div>
                          <p className="text-xs text-muted-foreground/60">Next</p>
                          <p
                            className="text-sm font-semibold"
                            style={{ color: steps[active + 1].accent.dot }}
                          >
                            {steps[active + 1].title}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Completion badge */}
                    {active === steps.length - 1 && (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} style={{ color: accent.dot }} />
                        <p className="text-sm font-semibold" style={{ color: accent.dot }}>
                          {completionText}
                        </p>
                      </div>
                    )}

                    {/* Step dots */}
                    <div className="ml-auto flex items-center gap-1.5">
                      {steps.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className="rounded-full transition-all duration-300"
                          style={i === active
                            ? { background: accent.dot, width: 20, height: 6 }
                            : { background: 'hsl(var(--foreground) / 0.15)', width: 6, height: 6 }
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer note */}
            {footerNote && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center gap-3 mt-6"
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-foreground/10" />
                <span className="text-xs text-muted-foreground/50 font-heading tracking-wider uppercase flex items-center gap-1.5">
                  <Clock size={10} />
                  {footerNote}
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-foreground/10" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
