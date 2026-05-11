'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Building2, Heart, Cpu } from 'lucide-react';

function Counter({ end = 0, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    icon: Layers,
    value: 50, suffix: '+',
    label: 'Projects Delivered',
    desc: 'Across multiple industries',
    color: 'cyan',
    accent: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10 border-cyan-400/20',
    topBar: 'from-cyan-400 to-cyan-400/0',
    hoverGlow: 'group-hover:border-cyan-400/25 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.07)]',
    hoverBg: 'group-hover:bg-cyan-400/[0.03]',
  },
  {
    icon: Building2,
    value: 8, suffix: '+',
    label: 'Industries Served',
    desc: 'From healthcare to SaaS',
    color: 'violet',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-400/10 border-violet-400/20',
    topBar: 'from-violet-400 to-violet-400/0',
    hoverGlow: 'group-hover:border-violet-400/25 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.07)]',
    hoverBg: 'group-hover:bg-violet-400/[0.03]',
  },
  {
    icon: Heart,
    value: 98, suffix: '%',
    label: 'Client Satisfaction',
    desc: 'Average project rating',
    color: 'emerald',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 border-emerald-400/20',
    topBar: 'from-emerald-400 to-emerald-400/0',
    hoverGlow: 'group-hover:border-emerald-400/25 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.07)]',
    hoverBg: 'group-hover:bg-emerald-400/[0.03]',
  },
  {
    icon: Cpu,
    value: 10, suffix: '+',
    label: 'AI Models Integrated',
    desc: 'GPT-4, Claude, Gemini & more',
    color: 'pink',
    accent: 'text-pink-400',
    iconBg: 'bg-pink-400/10 border-pink-400/20',
    topBar: 'from-pink-400 to-pink-400/0',
    hoverGlow: 'group-hover:border-pink-400/25 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.07)]',
    hoverBg: 'group-hover:bg-pink-400/[0.03]',
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-card border-y border-foreground/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/3 via-transparent to-violet-500/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative group rounded-2xl bg-background border border-foreground/[0.07] p-6 text-center overflow-hidden transition-all duration-300 ${stat.hoverGlow} ${stat.hoverBg}`}
              >
                {/* Colored top accent */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${stat.topBar}`} />

                {/* Hover bg fill */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl border ${stat.iconBg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={18} className={stat.accent} />
                </div>

                {/* Counter */}
                <div className={`font-heading font-bold text-4xl lg:text-5xl leading-none mb-2 ${stat.accent}`}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="font-heading font-semibold text-sm text-foreground mb-1.5">{stat.label}</div>

                {/* Description */}
                <div className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
