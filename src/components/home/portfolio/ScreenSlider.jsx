'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const SWIPE_DISTANCE = 40;

function SlideImage({ slide, sizes, priority }) {
  if (!slide.srcDark) {
    return <Image src={slide.src} alt={slide.alt} fill sizes={sizes} priority={priority} draggable={false} className="object-cover object-top" />;
  }
  return (
    <>
      <Image src={slide.src} alt={slide.alt} fill sizes={sizes} priority={priority} draggable={false} className="object-cover object-top dark:hidden" />
      <Image src={slide.srcDark} alt={slide.alt} fill sizes={sizes} priority={priority} draggable={false} className="hidden object-cover object-top dark:block" />
    </>
  );
}

/**
 * Fills its (relative, sized) parent with screenshots that cross-fade by themselves,
 * pause on hover or focus, and can be swiped. Shows dots when `dots` is set.
 */
export default function ScreenSlider({ slides, sizes, label, interval = 4500, dots = false }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = slides.length;

  useEffect(() => {
    if (count < 2 || paused || reduceMotion) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [count, paused, reduceMotion, interval]);

  const go = (next) => setIndex((next + count) % count);

  const swipeStart = useRef(null);
  const handlePointerUp = (e) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (dx < -SWIPE_DISTANCE) go(index + 1);
    else if (dx > SWIPE_DISTANCE) go(index - 1);
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      {/* Every slide stays mounted and cross-fades, so nothing piles up mid-transition */}
      <div
        onPointerDown={(e) => { if (count > 1) swipeStart.current = e.clientX; }}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { swipeStart.current = null; }}
        className={`absolute inset-0 select-none ${count > 1 ? 'cursor-grab active:cursor-grabbing touch-pan-y' : ''}`}
      >
        {slides.map((slide, i) => (
          <motion.div
            key={slide.src}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0, scale: i === index || reduceMotion ? 1 : 1.02 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute inset-0 ${i === index ? 'z-[1]' : 'pointer-events-none'}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${slide.alt}`}
            aria-hidden={i !== index}
          >
            <SlideImage slide={slide} sizes={sizes} priority={i === 0} />
          </motion.div>
        ))}
      </div>

      {dots && count > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center rounded-full border border-foreground/10 bg-background/80 px-1 backdrop-blur">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${s.alt}`}
              aria-current={i === index}
              className="flex h-7 w-7 items-center justify-center"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-primary' : 'w-1.5 bg-foreground/30'}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
