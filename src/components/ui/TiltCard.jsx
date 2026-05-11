'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className }) {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springCfg = { stiffness: 180, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), springCfg);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-12, 12]), springCfg);
  const glowX   = useSpring(useTransform(rawX, [-0.5, 0.5], [0, 100]), springCfg);
  const glowY   = useSpring(useTransform(rawY, [-0.5, 0.5], [0, 100]), springCfg);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top)  / height - 0.5);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 900 }}
      className={className ?? 'w-full max-w-[520px]'}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative">
        {/* Dynamic specular highlight that follows cursor */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`
            ),
          }}
        />
        {children}
      </motion.div>
    </div>
  );
}
