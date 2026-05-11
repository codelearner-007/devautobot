'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, PhoneOff, Brain, Phone, Mic } from 'lucide-react';
import Container from '@/components/ui/Container';
import { DEMO_GREETING, DEMO_CLOSING, DEMO_QA } from '@/data/demo/voice-ai';

const waveHeights = [3, 6, 11, 18, 26, 32, 26, 18, 11, 6, 3, 8, 16, 24, 30, 24, 16, 8, 5, 10, 20, 28, 20, 10, 5];
const MAX_SILENCE_RETRIES = 6;

const DemoCard = () => {
  const [callState, setCallState] = useState('idle');
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [name, setName] = useState('');
  const [aiCaption, setAiCaption] = useState('');
  const [attempted, setAttempted] = useState(false);
  const [conversation, setConversation] = useState([]);

  const timerRef = useRef(null);
  const autoListenTimerRef = useRef(null);
  const cancelledRef = useRef(false);
  const recognitionRef = useRef(null);

   const fmt = (s) =>
     `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

   const aiSpeak = useCallback((text) => {
     return new Promise(resolve => {
       if (typeof window === 'undefined') { resolve(); return; }
       window.speechSynthesis?.cancel();
       const utt = new SpeechSynthesisUtterance(text);
       utt.rate = 1.05;
       utt.pitch = 1.05;
       setIsAiSpeaking(true);
       setAiCaption(text);
       const done = () => { setIsAiSpeaking(false); resolve(); };
       utt.onend = done;
       utt.onerror = done;
       window.speechSynthesis.speak(utt);
     });
   }, []);

   const stopEverything = useCallback(() => {
     window.speechSynthesis?.cancel();
     recognitionRef.current?.abort();
     if (timerRef.current) clearInterval(timerRef.current);
     if (autoListenTimerRef.current) clearTimeout(autoListenTimerRef.current);
     cancelledRef.current = true;
     setIsAiSpeaking(false);
     setIsListening(false);
   }, []);

   const endCall = useCallback(() => {
     stopEverything();
     setCallState('ended');
   }, [stopEverything]);

   /* Start recognition for question at idx, with retry on silence */
   const startRecognition = useCallback((idx, retries = 0) => {
     if (cancelledRef.current || idx >= DEMO_QA.length) return;

     const SR = (window).SpeechRecognition || (window).webkitSpeechRecognition;
     if (!SR) return; // no SR support

     const rec = new SR();
     rec.continuous = false;
     rec.interimResults = false;
     rec.lang = 'en-US';
     recognitionRef.current = rec;

     let captured = '';

     rec.onstart = () => setIsListening(true);
     rec.onresult = (e) => { captured = e.results[0][0].transcript; };
     rec.onend = () => {
       setIsListening(false);
       if (cancelledRef.current) return;
       if (!captured && retries < MAX_SILENCE_RETRIES) {
         // User paused — restart silently to keep listening
         setTimeout(() => startRecognition(idx, retries + 1), 300);
       }
     };
     rec.onerror = () => { setIsListening(false); };

     try { rec.start(); } catch { /* already running */ }
   }, []);

   /* Schedule auto-listen 1 second after AI finishes */
   const scheduleAutoListen = useCallback((idx) => {
     if (cancelledRef.current || idx >= DEMO_QA.length) return;
     if (autoListenTimerRef.current) clearTimeout(autoListenTimerRef.current);
     autoListenTimerRef.current = setTimeout(() => {
       if (!cancelledRef.current) startRecognition(idx);
     }, 1000);
   }, [startRecognition]);

   /* After user speech captured → AI responds → schedule next listen */
   const handleUserSpoke = useCallback(async (idx) => {
     if (cancelledRef.current) return;
     setQuestionIndex(idx + 1);
     setConversation(prev => [
       ...prev,
       { role: 'user', text: DEMO_QA[idx].question },
       { role: 'ai', text: DEMO_QA[idx].answer },
     ]);

     await new Promise<void>(r => setTimeout(r, 700));
     if (cancelledRef.current) return;

     await aiSpeak(DEMO_QA[idx].answer);
     if (cancelledRef.current) return;

     if (idx + 1 >= DEMO_QA.length) {
       await new Promise<void>(r => setTimeout(r, 700));
       if (cancelledRef.current) return;
       await aiSpeak(DEMO_CLOSING);
       if (cancelledRef.current) return;
       await new Promise<void>(r => setTimeout(r, 800));
       if (cancelledRef.current) return;
       stopEverything();
       setCallState('ended');
     } else {
       scheduleAutoListen(idx + 1);
     }
   }, [aiSpeak, scheduleAutoListen, stopEverything]);

   /* Wire recognition result → handleUserSpoke */
   useEffect(() => {
     if (!isListening) return;
     const rec = recognitionRef.current;
     if (!rec) return;
     const idx = questionIndex;
     rec.onresult = (e) => {
       const captured = e.results[0][0].transcript;
       if (captured) {
         rec.onend = () => {
           setIsListening(false);
           handleUserSpoke(idx);
         };
       }
     };
   }, [isListening, questionIndex, handleUserSpoke]);

   /* Mic button: start immediately, cancelling AI if needed */
   const handleMicClick = useCallback(() => {
     if (isListening || questionIndex >= DEMO_QA.length) return;
     // Cancel AI speech if it's talking — user wants to speak now
     if (isAiSpeaking) {
       window.speechSynthesis?.cancel();
       setIsAiSpeaking(false);
     }
     if (autoListenTimerRef.current) clearTimeout(autoListenTimerRef.current);
     startRecognition(questionIndex);
   }, [isAiSpeaking, isListening, questionIndex, startRecognition]);

   const startCall = useCallback(async () => {
     setCallState('connecting');
     setQuestionIndex(0);
     setDuration(0);
     setAiCaption('');
     setConversation([]);
     cancelledRef.current = false;

     try { await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { /* mic optional */ }

     const firstName = name.trim().split(' ')[0];
     const greeting = firstName
       ? `Hey ${firstName}! Thank you for filling out the form. ${DEMO_GREETING}`
       : DEMO_GREETING;

     setTimeout(async () => {
       setCallState('active');
       await new Promise<void>(r => setTimeout(r, 400));
       await aiSpeak(greeting);
       if (!cancelledRef.current) scheduleAutoListen(0);
     }, 1400);
   }, [aiSpeak, name, scheduleAutoListen]);

  /* ── IDLE ── */
  if (callState === 'idle') {
    return (
      <div className="relative w-full max-w-[400px]">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-400/20 via-violet-500/10 to-transparent blur-sm" />
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-violet-50/90 via-white/80 to-card/95 dark:from-violet-950/60 dark:via-[#0d0718]/80 dark:to-background/95 border border-violet-400/20 dark:border-violet-400/15 shadow-[0_40px_100px_rgba(139,92,246,0.12)]">
          <div className="flex flex-col py-10 px-6 gap-5">
            <div className="text-center">
              <div className="font-heading font-semibold text-foreground text-lg">Get an instant callback from our AI</div>
              <p className="text-xs text-muted-foreground mt-1.5">Fill in your details — the AI agent calls you within seconds.</p>
            </div>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-muted-foreground font-heading tracking-wide">Your Name <span className="text-red-400">*</span></label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Sarah Johnson"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-foreground/4 border text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-violet-400/40 focus:bg-violet-500/5 transition-colors ${attempted && !name.trim() ? 'border-red-400/40' : 'border-foreground/10'}`}
                />
                {attempted && !name.trim() && <p className="text-[10px] text-red-400/70 mt-1">Please enter your name to continue</p>}
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] text-muted-foreground font-heading tracking-wide">Phone Number</label>
                <input type="tel" placeholder="e.g. +1 555 000 0000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-foreground/4 border border-foreground/10 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-violet-400/40 focus:bg-violet-500/5 transition-colors"
                />
              </div>
            </div>
            <motion.button whileHover={{ scale: name.trim() ? 1.02 : 1 }} whileTap={{ scale: name.trim() ? 0.97 : 1 }}
              onClick={() => { setAttempted(true); if (name.trim()) startCall(); }}
              className={`w-full flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl font-heading font-medium text-sm transition-all ${name.trim() ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] cursor-pointer' : 'bg-foreground/8 text-muted-foreground/40 cursor-not-allowed'}`}
            >
              <Phone size={14} />Submit — Call Me Now
            </motion.button>
            <p className="text-[10px] text-muted-foreground/40 text-center">Demo only · browser TTS · no data stored</p>
          </div>
        </div>
      </div>
    );
  }

  /* ── ENDED ── */
  if (callState === 'ended') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col lg:flex-row gap-5 w-full max-w-[860px] items-center"
      >
        {/* Left: form card */}
        <div className="relative w-full lg:w-[380px] flex-shrink-0">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-400/20 via-violet-500/10 to-transparent blur-sm" />
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-violet-50/90 via-white/80 to-card/95 dark:from-violet-950/60 dark:via-[#0d0718]/80 dark:to-background/95 border border-violet-400/20 dark:border-violet-400/15 shadow-[0_40px_100px_rgba(139,92,246,0.12)]">
            <div className="flex flex-col py-10 px-6 gap-5">
              <div className="text-center">
                <div className="text-xs text-muted-foreground/60 font-heading tracking-wide mb-3">Call ended · {fmt(duration)}</div>
                <div className="font-heading font-semibold text-foreground text-lg">Submit again to get called back</div>
                <p className="text-xs text-muted-foreground mt-1.5">Fill in your details — the AI agent calls you within seconds.</p>
              </div>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-muted-foreground font-heading tracking-wide">Your Name <span className="text-red-400">*</span></label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Sarah Johnson"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-foreground/4 border text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-violet-400/40 focus:bg-violet-500/5 transition-colors ${attempted && !name.trim() ? 'border-red-400/40' : 'border-foreground/10'}`}
                  />
                  {attempted && !name.trim() && <p className="text-[10px] text-red-400/70 mt-1">Please enter your name to continue</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-muted-foreground font-heading tracking-wide">Phone Number</label>
                  <input type="tel" placeholder="e.g. +1 555 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-foreground/4 border border-foreground/10 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-violet-400/40 focus:bg-violet-500/5 transition-colors"
                  />
                </div>
              </div>
              <motion.button whileHover={{ scale: name.trim() ? 1.02 : 1 }} whileTap={{ scale: name.trim() ? 0.97 : 1 }}
                onClick={() => { setAttempted(true); if (name.trim()) startCall(); }}
                className={`w-full flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl font-heading font-medium text-sm transition-all ${name.trim() ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] cursor-pointer' : 'bg-foreground/8 text-muted-foreground/40 cursor-not-allowed'}`}
              >
                <Phone size={14} />Submit Again
              </motion.button>
              <p className="text-[10px] text-muted-foreground/40 text-center">Demo only · browser TTS · no data stored</p>
            </div>
          </div>
        </div>

        {/* Right: chat transcript */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex-1 w-full rounded-2xl bg-card border border-foreground/6 dark:border-white/[0.04] overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-foreground/6 dark:border-white/[0.04] flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="font-heading font-semibold text-sm text-foreground">Call Transcript</span>
            <span className="ml-auto text-[10px] text-muted-foreground/50 font-heading tracking-wide">{fmt(duration)}</span>
          </div>
          <div className="p-5 space-y-4 max-h-[340px] overflow-y-auto">
            {conversation.length === 0 ? (
              <p className="text-xs text-muted-foreground/40 text-center py-6">No questions answered during this call.</p>
            ) : (
              conversation.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-400/20 dark:border-violet-400/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Brain size={10} className="text-violet-400" />
                    </div>
                  )}
                  <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'ai'
                    ? 'bg-violet-500/8 border border-violet-400/12 dark:border-violet-400/[0.06] text-foreground/80 rounded-tl-sm'
                    : 'bg-foreground/6 border border-foreground/8 dark:border-white/[0.05] text-foreground/70 rounded-tr-sm'
                    }`}>
                    {msg.text}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-foreground/8 border border-foreground/10 dark:border-white/[0.05] flex items-center justify-center ml-2 mt-0.5 flex-shrink-0">
                      <Mic size={10} className="text-muted-foreground/60" />
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  /* ── CONNECTING ── */
  if (callState === 'connecting') {
    return (
      <div className="relative w-full max-w-[400px]">
        <div className="absolute -inset-px rounded-3xl bg-violet-500/20 blur-md" />
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1a0a2e] via-[#110718] to-[#0d0618] border border-violet-400/20 shadow-[0_40px_100px_rgba(139,92,246,0.25)]">
          <div className="flex flex-col items-center justify-center py-16 gap-5">
            <div className="relative flex items-center justify-center w-28 h-28">
              {[1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-violet-400/30"
                  animate={{ scale: [1, 1 + i * 0.28], opacity: [0.5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4, ease: 'easeOut' }}
                />
              ))}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-violet-900 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                <PhoneCall size={28} className="text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading font-semibold text-white text-lg">Calling you back…</div>
              <div className="text-sm text-white/40 mt-1">Devmanar AI Agent</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── ACTIVE CALL ── */
  const currentQuestion = DEMO_QA[questionIndex];

  return (
    <div className="relative w-full max-w-[400px]">
      <div className="absolute -inset-px rounded-3xl bg-violet-500/20 blur-md" />
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1a0a2e] via-[#110718] to-[#0d0618] border border-violet-400/20 shadow-[0_40px_100px_rgba(139,92,246,0.25)]">

        {/* Top bar */}
        <div className="px-6 pt-5 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-heading tracking-widest text-emerald-400/80 uppercase">Active Call</span>
          </div>
          <span className="text-sm font-heading tabular-nums text-white/50">{fmt(duration)}</span>
        </div>

        {/* Avatar + rings */}
        <div className="flex flex-col items-center pt-6 pb-4">
          <div className="relative flex items-center justify-center w-32 h-32">
            <AnimatePresence>
              {isAiSpeaking && [1, 2, 3].map(i => (
                <motion.div
                  key={`ai-${i}`}
                  className="absolute inset-0 rounded-full"
                  style={{ background: `rgba(139,92,246,${0.12 - i * 0.03})` }}
                  animate={{ scale: [1, 1 + i * 0.32], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.35, ease: 'easeOut' }}
                />
              ))}
              {isListening && [1, 2].map(i => (
                <motion.div
                  key={`usr-${i}`}
                  className="absolute inset-0 rounded-full"
                  style={{ background: `rgba(52,211,153,${0.15 - i * 0.04})` }}
                  animate={{ scale: [1, 1 + i * 0.4], opacity: [0.6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4, ease: 'easeOut' }}
                />
              ))}
            </AnimatePresence>
            <div className={`w-24 h-24 rounded-full flex items-center justify-center relative transition-all duration-500 ${isListening
              ? 'bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-[0_0_50px_rgba(52,211,153,0.5)]'
              : 'bg-gradient-to-br from-violet-500 to-violet-900 shadow-[0_0_50px_rgba(139,92,246,0.5)]'
              }`}>
              <Brain size={36} className="text-white" />
            </div>
          </div>

          {/* Name + status */}
          <div className="mt-4 text-center">
            <div className="font-heading font-semibold text-white text-xl tracking-tight">Devmanar AI Agent</div>
            <div className="text-sm mt-1.5 h-5">
              {isAiSpeaking
                ? <span className="text-violet-400">Speaking…</span>
                : isListening
                  ? <span className="text-emerald-400">Listening…</span>
                  : <span className="text-white/35">On call</span>}
            </div>
          </div>

          {/* Waveform */}
          <div className="mt-4 h-8 flex items-center justify-center gap-[3px]">
            {waveHeights.map((h, i) => (
              <motion.div
                key={i}
                className={`w-[3px] rounded-full transition-colors duration-300 ${isAiSpeaking ? 'bg-violet-400' : isListening ? 'bg-emerald-400' : 'bg-white/10'
                  }`}
                animate={
                  isAiSpeaking || isListening
                    ? { scaleY: [1, 1.9, 0.4, 1.6, 1] }
                    : { scaleY: [1, 1.04, 1] }
                }
                transition={{
                  duration: isAiSpeaking || isListening ? 1.0 : 3,
                  repeat: Infinity,
                  delay: i * 0.04,
                  ease: 'easeInOut',
                }}
                style={{ height: `${h * 0.6}px`, transformOrigin: 'center' }}
              />
            ))}
          </div>

          {/* AI caption */}
          <AnimatePresence mode="wait">
            {aiCaption && (
              <motion.div
                key={aiCaption.slice(0, 20)}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-5 px-6 text-center max-w-xs"
              >
                <p className="text-[12px] text-white/45 italic leading-relaxed line-clamp-3">
                  &ldquo;{aiCaption}&rdquo;
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 mx-5" />

        {/* Script prompt */}
        <div className="px-6 py-4 min-h-[72px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {currentQuestion ? (
              <motion.div
                key={questionIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-[9px] font-heading tracking-widest uppercase mb-2 text-white/25">
                  {isListening ? 'Speak now — take your time' : 'Read this aloud'}
                </div>
                <p className="text-[13px] leading-snug font-medium text-white/75">
                  &ldquo;{currentQuestion.question}&rdquo;
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[11px] text-white/25 text-center"
              >
                {isAiSpeaking ? 'AI is wrapping up…' : 'All questions covered'}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="px-6 pb-8 pt-2 flex items-center justify-center gap-8">
          {/* Mic — always tappable, interrupts AI if needed */}
          <button
            onClick={handleMicClick}
            disabled={isListening || !currentQuestion}
            title={isAiSpeaking ? 'Tap to interrupt and speak' : 'Tap to speak'}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 ${isListening
              ? 'bg-emerald-500 shadow-[0_0_28px_rgba(52,211,153,0.6)] cursor-not-allowed'
              : !currentQuestion
                ? 'bg-white/6 cursor-not-allowed'
                : 'bg-violet-600 shadow-[0_0_28px_rgba(139,92,246,0.5)] hover:bg-violet-500 hover:shadow-[0_0_36px_rgba(139,92,246,0.7)] cursor-pointer'
              }`}
          >
            {isListening
              ? <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 0.7, repeat: Infinity }}>
                <Mic size={22} className="text-white" />
              </motion.div>
              : <Mic size={22} className="text-white" />}
          </button>

          {/* End call */}
          <button
            onClick={endCall}
            className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_28px_rgba(239,68,68,0.4)] hover:bg-red-400 hover:shadow-[0_0_36px_rgba(239,68,68,0.6)] transition-all cursor-pointer"
          >
            <PhoneOff size={22} className="text-white" />
          </button>
        </div>

      </div>
    </div>
  );
};

/* ── Section ── */
export default function DemoAiVoiceCalling() {
  return (
    <section id="live-demo" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-400/8 rounded-full blur-3xl" />
      </div>

      <Container size="xl">
        <div className="text-center mb-14">
          <span className="section-label">
            <PhoneCall size={12} />
            Live Demo
          </span>
          <h2 className="section-heading mt-4">
            Hear the AI in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Submit the form — the AI calls back instantly. Read each question aloud and hear the AI respond in real time.
          </p>
        </div>

        <div className="flex justify-center">
          <DemoCard />
        </div>
      </Container>
    </section>
  );
}
