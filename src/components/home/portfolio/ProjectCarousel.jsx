'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import BookVaultSummaryMock from './BookVaultSummaryMock';

const AUTOPLAY_MS = 4000;
const SWIPE_DISTANCE = 50;

function Slide({ slide }) {
  if (slide.kind === 'bookvault-summary') {
    return <BookVaultSummaryMock />;
  }

  if (slide.kind === 'logo') {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={slide.src}
          alt={slide.alt}
          width={512}
          height={512}
          sizes="128px"
          draggable={false}
          className="w-24 sm:w-28 md:w-32 rounded-3xl shadow-2xl"
        />
      </div>
    );
  }

  return (
    <Image
      src={slide.src}
      alt={slide.alt}
      width={1086}
      height={1448}
      sizes="(min-width: 768px) 220px, 180px"
      draggable={false}
      className="absolute left-1/2 top-10 w-40 sm:w-48 md:w-52 -translate-x-1/2 rounded-2xl border border-foreground/10 shadow-2xl"
    />
  );
}

/**
 * Preview carousel for a portfolio card. Advances by itself every few seconds,
 * pauses while hovered or focused, and can be swiped or dragged.
 */
export default function ProjectCarousel({ slides, title }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = slides.length;

  const go = (next, dir) => {
    setDirection(dir);
    setIndex((next + count) % count);
  };

  useEffect(() => {
    if (count < 2 || paused || reduceMotion) return undefined;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [count, paused, reduceMotion]);

  const handleDragEnd = (_event, info) => {
    if (info.offset.x < -SWIPE_DISTANCE) go(index + 1, 1);
    else if (info.offset.x > SWIPE_DISTANCE) go(index - 1, -1);
  };

  const offset = reduceMotion ? 0 : 60;

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} previews`}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction * offset }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -offset }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          drag={count > 1 ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab active:cursor-grabbing touch-pan-y"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${count}`}
        >
          <Slide slide={slides[index]} />
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full bg-background/70 backdrop-blur px-1">
          {slides.map((s, i) => (
            <button
              key={s.alt}
              type="button"
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Show slide ${i + 1}: ${s.alt}`}
              aria-current={i === index}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-primary' : 'w-1.5 bg-foreground/30'}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
