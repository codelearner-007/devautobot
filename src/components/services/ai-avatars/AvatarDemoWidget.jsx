'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X, Minus, ChevronUp, GripHorizontal } from 'lucide-react';

const SCRIPTS = [
  {
    text: "What you're looking at right now is an AI avatar — a perfect digital clone of a real person. Same face, same voice, same expressions. Completely indistinguishable from a real video.",
    feature: 'Real Person Clone',
  },
  {
    text: "We film you once — just 10 minutes of footage. From that, we build a photorealistic clone that can speak any script, any time, with your exact face and voice.",
    feature: '10-Min Recording',
  },
  {
    text: "The lip sync is frame-perfect. Every word, every pause, every facial expression matches naturally — just like you recorded it yourself in a studio.",
    feature: 'Perfect Lip Sync',
  },
  {
    text: "Your clone speaks 50 plus languages. Arabic, Spanish, French, Urdu — same face, native accent. One clone, every market, zero re-filming.",
    feature: '50+ Languages',
  },
  {
    text: "Use your clone for product demos, website explainers, ads, onboarding, or customer support videos. 4K output, API-ready, delivered in minutes. Ready to clone yourself?",
    feature: '4K · API Ready',
  },
];

const waveHeights = [4, 7, 12, 17, 22, 26, 22, 17, 12, 7, 4, 8, 14, 20, 24, 20, 14, 8, 5, 10, 18, 23, 18, 10, 5];

export default function AvatarDemoWidget() {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [scriptIndex, setScriptIndex] = useState(0);
  const [typing, setTyping] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const dragControls = useDragControls();
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stopSpeech = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.92;
    utter.pitch = 0.8;
    utter.volume = 1;
    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => { setIsSpeaking(false); };
    utter.onerror = () => setIsSpeaking(false);
    const applyVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // 1. Try known male voices by exact/partial name (cross-platform)
      const MALE_NAMES = [
        'Google UK English Male',
        'Google US English',
        'Daniel',
        'David',
        'Alex',
        'Fred',
        'Tom',
        'James',
        'Liam',
        'Aaron',
        'Arthur',
        'Oliver',
      ];
      const FEMALE_NAMES = /samantha|zira|google uk english female|female|karen|moira|tessa|fiona|victoria|allison|ava|susan|kate|claire/i;
      let voice =
        MALE_NAMES.reduce<SpeechSynthesisVoice | null>((found, name) => {
          if (found) return found;
          return voices.find(v => v.name.toLowerCase().includes(name.toLowerCase())) ?? null;
        }, null) ??
        voices.find(v => v.lang.startsWith('en') && !FEMALE_NAMES.test(v.name)) ??
        null;
      if (voice) utter.voice = voice;
      window.speechSynthesis.speak(utter);
    };
    if (window.speechSynthesis.getVoices().length > 0) {
      applyVoice();
    } else {
      window.speechSynthesis.onvoiceschanged = applyVoice;
    }
    utteranceRef.current = utter;
  };

  // Stop speech on unmount (page navigation) and tab close
  useEffect(() => {
    const onUnload = () => stopSpeech();
    window.addEventListener('beforeunload', onUnload);
    return () => {
      stopSpeech();
      window.removeEventListener('beforeunload', onUnload);
    };
  }, []);

  // Open when "Start Conversation" is clicked
  useEffect(() => {
    const handler = () => {
      setVisible(true);
      setMinimized(false);
      setDismissed(false);
    };
    window.addEventListener('open-avatar-demo', handler);
    return () => window.removeEventListener('open-avatar-demo', handler);
  }, []);

  // Typewriter — runs alongside speech, no stopSpeech in cleanup
  useEffect(() => {
    if (!visible || minimized) return;
    const fullText = SCRIPTS[scriptIndex].text;
    let i = 0;
    setTyping('');
    setIsTyping(true);
    speak(fullText);
    const typeInterval = setInterval(() => {
      i++;
      setTyping(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 28);
    return () => clearInterval(typeInterval);
  }, [scriptIndex, visible, minimized]);

  // Advance only after speech fully finishes
  useEffect(() => {
    if (!visible || minimized || isTyping || isSpeaking) return;
    const timer = setTimeout(() => {
      setScriptIndex((prev) => (prev + 1) % SCRIPTS.length);
    }, 1200);
    return () => clearTimeout(timer);
  }, [isTyping, isSpeaking, visible, minimized, scriptIndex]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="widget"
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          dragElastic={0}
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 touch-none"
        >
          {minimized ? (
            /* ── Minimized pill ── */
            <div className="relative flex items-center gap-3 pl-1 pr-2 py-1 rounded-full bg-background/95 backdrop-blur-md border border-pink-400/30 shadow-[0_8px_32px_rgba(236,72,153,0.25)]">
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-pink-400/30"
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-400/50 flex-shrink-0 relative">
                <Image src="/ai-avatar.png" alt="Maya" fill sizes="40px" className="object-cover object-top" />
              </div>
              {/* Label */}
              <button
                onClick={() => setMinimized(false)}
                className="text-left cursor-pointer"
              >
                <div className="text-xs font-heading font-semibold text-foreground">Maya is here</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-muted-foreground">Click to chat</span>
                </div>
              </button>
              <ChevronUp
                size={14}
                className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => setMinimized(false)}
              />
              {/* Drag handle */}
              <div
                onPointerDown={(e) => dragControls.start(e)}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-foreground/10 transition-colors cursor-grab active:cursor-grabbing text-muted-foreground"
              >
                <GripHorizontal size={12} />
              </div>
            </div>
          ) : (
            /* ── Expanded widget ── */
            <div className="w-[300px] rounded-2xl overflow-hidden bg-background/95 backdrop-blur-md border border-pink-400/20 shadow-[0_24px_64px_rgba(236,72,153,0.2)]">

              {/* Header — drag handle lives here */}
              <div className="flex items-center justify-between px-3 py-2.5 border-b border-foreground/[0.06] bg-foreground/[0.02]">
                {/* Grip */}
                <div
                  onPointerDown={(e) => dragControls.start(e)}
                  className="flex items-center gap-2 cursor-grab active:cursor-grabbing select-none flex-1"
                >
                  <GripHorizontal size={14} className="text-muted-foreground/50 flex-shrink-0" />
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-heading font-semibold text-foreground">Maya — AI Guide</span>
                  </div>
                </div>
                {/* Controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => { stopSpeech(); setMinimized(true); }}
                    className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <Minus size={12} />
                  </button>
                  <button
                    onClick={() => { stopSpeech(); setDismissed(true); }}
                    className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col items-center px-5 pt-5 pb-4 gap-4">

                {/* Avatar */}
                <div className="relative">
                  <motion.div
                    className="absolute -inset-2 rounded-full border border-pink-400/30"
                    animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute -inset-4 rounded-full border border-pink-400/15"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.05, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  />
                  <motion.div
                    animate={{ y: isTyping ? [0, -2, 0, -1, 0] : [0, -1.5, 0] }}
                    transition={{ duration: isTyping ? 0.6 : 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-pink-400/50 shadow-[0_0_24px_rgba(236,72,153,0.4)]"
                  >
                    <Image
                      src="/ai-avatar.png"
                      alt="Maya AI Avatar"
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                    {isTyping && (
                      <motion.div
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-pink-400/20 rounded-full blur-sm"
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 0.4, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Feature badge */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={scriptIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-1 -right-1 bg-pink-500/90 text-white text-[9px] font-heading font-bold px-2 py-0.5 rounded-full shadow-sm"
                    >
                      {SCRIPTS[scriptIndex].feature}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Waveform */}
                <div className="flex items-end justify-center gap-[2px] h-6 w-full px-4">
                  {waveHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-[2px] rounded-full bg-pink-400/50"
                      animate={isTyping ? { scaleY: [1, 2, 0.5, 1.8, 1] } : { scaleY: [1, 1.1, 1] }}
                      transition={{
                        duration: isTyping ? 1.8 : 4,
                        repeat: Infinity,
                        delay: isTyping ? i * 0.055 : i * 0.12,
                        ease: 'easeInOut',
                      }}
                      style={{ height: `${h * 0.5}px`, transformOrigin: 'center' }}
                    />
                  ))}
                </div>

                {/* Speech bubble */}
                <div className="w-full bg-foreground/[0.04] border border-foreground/[0.08] rounded-xl rounded-tl-sm px-3.5 py-2.5 min-h-[64px] flex items-start">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {typing}
                    {isTyping && (
                      <motion.span
                        className="inline-block w-0.5 h-3.5 bg-pink-400 ml-0.5 align-middle"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.7, repeat: Infinity }}
                      />
                    )}
                  </p>
                </div>

                {/* Script dots */}
                <div className="flex items-center gap-1.5">
                  {SCRIPTS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setScriptIndex(i)}
                      className={`rounded-full transition-all ${
                        i === scriptIndex
                          ? 'w-4 h-1.5 bg-pink-400'
                          : 'w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-4 pb-4">
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500/90 to-violet-600/90 text-white text-xs font-heading font-semibold tracking-wide hover:opacity-90 transition-opacity"
                >
                  Get Your AI Avatar
                </a>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
