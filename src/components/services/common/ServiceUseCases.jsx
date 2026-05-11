'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCw, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';



const COUNT = 6;
const ORBIT_R = 165;
const BOX = ORBIT_R * 2 + 140;

function getCardPos(i) {
  const angle = ((i * 360) / COUNT - 90) * (Math.PI / 180);
  return {
    x: BOX / 2 + ORBIT_R * Math.cos(angle),
    y: BOX / 2 + ORBIT_R * Math.sin(angle),
  };
}

export default function ServiceUseCases({ useCases, config, description }) {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [paused, setPaused] = useState(false);
  const manuallyPaused = useRef(false);

  useEffect(() => {
    setRotation(-90 - active * (360 / COUNT));
  }, [active]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((p) => (p + 1) % COUNT), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const pick = useCallback((i) => {
    setActive(i);
    manuallyPaused.current = true;
    setPaused(true);
  }, []);

  const hoverEnter = useCallback(() => setPaused(true), []);
  const hoverLeave = useCallback(() => {
    if (!manuallyPaused.current) setPaused(false);
  }, []);

  const spin = () => {
    setSpinning(true);
    manuallyPaused.current = true;
    setPaused(true);
    setActive((p) => (p + 1) % COUNT);
    setTimeout(() => setSpinning(false), 600);
  };

  const cfg = config[active];
  const ActiveIcon = cfg.icon;
  const activeCase = useCases[active];

  return (
    <section className="relative py-20 lg:py-28 bg-card overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Ambient glow */}
      <motion.div
        key={`glow-${active}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${cfg.glow} 0%, transparent 70%)` }}
      />

      <Container size="full" className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="section-label mb-4 inline-block">Use Cases</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Who This Is <span className="gradient-text">Built For</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl xl:max-w-none mx-auto xl:whitespace-nowrap">{description}</p>
        </motion.div>

        {/* MOBILE LAYOUT */}
        <div className="lg:hidden">
          <div className="grid grid-cols-6 gap-2 mb-6">
            {useCases.map((uc, i) => {
              const c = config[i];
              const Icon = c.icon;
              const isActive = i === active;
              return (
                <button
                  key={uc.title}
                  onClick={() => pick(i)}
                  aria-label={uc.industry}
                  className="flex flex-col items-center gap-1.5 cursor-pointer group"
                >
                  <motion.div
                    animate={isActive ? { scale: 1.08 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full aspect-square rounded-xl border flex items-center justify-center transition-all duration-200 ${
                      isActive ? c.iconBg : 'bg-secondary/60 border-foreground/8'
                    }`}
                    style={isActive ? { boxShadow: `0 0 16px ${c.glow}` } : {}}
                  >
                    <Icon size={18} className={isActive ? c.iconColor : 'text-muted-foreground'} />
                  </motion.div>
                  <div
                    className="h-1 w-4 rounded-full transition-all duration-300"
                    style={{ backgroundColor: isActive ? c.ring : 'transparent' }}
                  />
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 relative overflow-hidden"
              style={{ borderColor: `${cfg.ring}25` }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${cfg.ring}80, transparent)` }}
              />

              <span className={`inline-flex items-center gap-2 text-xs font-heading font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border mb-4 ${cfg.tagBg}`}>
                <ActiveIcon size={11} />
                {activeCase.industry}
              </span>

              <h3 className="font-heading font-bold text-xl text-foreground mb-3 leading-snug">
                {activeCase.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {activeCase.description}
              </p>

              <div className="flex items-center gap-2 mb-5">
                {useCases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => pick(i)}
                    aria-label={`Go to ${useCases[i].industry}`}
                    className="rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: i === active ? 24 : 6,
                      height: 6,
                      backgroundColor: i === active ? cfg.ring : 'hsl(var(--foreground) / 0.12)',
                    }}
                  />
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold cursor-pointer group/cta"
                style={{ color: cfg.ring }}
              >
                Start your {activeCase.industry.toLowerCase()} project
                <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-1/2 pr-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={`inline-flex items-center gap-2 text-xs font-heading font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border mb-6 ${cfg.tagBg}`}>
                  <ActiveIcon size={11} />
                  {activeCase.industry}
                </span>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4 leading-tight">
                  {activeCase.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                  {activeCase.description}
                </p>

                <div className="flex items-center gap-2.5 mb-8">
                  {useCases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => pick(i)}
                      aria-label={`Select ${useCases[i].industry}`}
                      className="rounded-full transition-all duration-300 cursor-pointer"
                      style={{
                        width: i === active ? 28 : 8,
                        height: 8,
                        backgroundColor: i === active ? cfg.ring : 'hsl(var(--foreground) / 0.12)',
                      }}
                    />
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold cursor-pointer group/cta transition-colors duration-200"
                  style={{ color: cfg.ring }}
                >
                  Start your {activeCase.industry.toLowerCase()} project
                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: orbital ring */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-1/2 flex items-center justify-center"
          >
            <div className="relative select-none" style={{ width: BOX, height: BOX }}>
              <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${BOX} ${BOX}`}>
                <circle
                  cx={BOX / 2} cy={BOX / 2} r={ORBIT_R}
                  fill="none"
                  stroke="hsl(var(--foreground) / 0.06)"
                  strokeWidth="1.5"
                  strokeDasharray="5 9"
                />
              </svg>

              <motion.div
                className="absolute inset-0"
                animate={{ rotate: rotation }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {useCases.map((uc, i) => {
                  const c = config[i];
                  const Icon = c.icon;
                  const { x, y } = getCardPos(i);
                  const isActive = i === active;

                  return (
                    <motion.button
                      key={uc.title}
                      onClick={() => pick(i)}
                      aria-label={uc.industry}
                      className="absolute cursor-pointer"
                      style={{ left: x, top: y, x: '-50%', y: '-50%' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.93 }}
                      onMouseEnter={hoverEnter}
                      onMouseLeave={hoverLeave}
                    >
                      <motion.div
                        animate={{ rotate: -rotation }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative flex flex-col items-center justify-center rounded-2xl border ${
                          isActive ? c.iconBg : 'bg-secondary/70 border-foreground/8 hover:border-foreground/20'
                        }`}
                        style={{
                          width: isActive ? 106 : 82,
                          height: isActive ? 106 : 82,
                          boxShadow: isActive ? `0 0 28px ${c.glow}, 0 0 0 1.5px ${c.ring}50` : undefined,
                          borderColor: isActive ? `${c.ring}40` : undefined,
                          transition: 'width 0.3s ease, height 0.3s ease, box-shadow 0.3s ease',
                        }}
                      >
                        <Icon size={isActive ? 26 : 20} className={isActive ? c.iconColor : 'text-muted-foreground'} />
                        <span className={`font-heading font-semibold text-center leading-tight mt-1.5 px-1 ${isActive ? `text-[10px] ${c.iconColor}` : 'text-[9px] text-muted-foreground/60'}`}>
                          {uc.industry}
                        </span>
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{ border: `1.5px solid ${c.ring}` }}
                            animate={{ scale: [1, 1.22, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        )}
                      </motion.div>
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Centre hub */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`hub-${active}`}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.28 }}
                    className={`w-[72px] h-[72px] rounded-2xl border flex items-center justify-center ${cfg.iconBg}`}
                    style={{ boxShadow: `0 0 36px ${cfg.glow}` }}
                  >
                    <ActiveIcon size={30} className={cfg.iconColor} />
                  </motion.div>
                </AnimatePresence>
                <span className="text-[10px] font-heading text-muted-foreground/60 tracking-wide uppercase">
                  {COUNT} industries
                </span>
              </div>

              {/* Spin button */}
              <button
                onClick={spin}
                aria-label="Rotate to next industry"
                className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[11px] font-heading text-muted-foreground/60 hover:text-foreground transition-colors duration-200 cursor-pointer group"
              >
                <RotateCw
                  size={11}
                  className={`transition-transform duration-500 group-hover:rotate-45 ${spinning ? 'rotate-180' : ''}`}
                />
                rotate
              </button>
            </div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
