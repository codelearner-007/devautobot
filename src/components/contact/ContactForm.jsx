'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, Phone, MessageCircle, MapPin, ChevronDown, Check } from 'lucide-react';

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import { site } from '@/lib/site';

const services = [
  'Web Development (Website / Landing Page)',
  'Web Development (Full-Stack Web App)',
  'Web Development (E-Commerce Store)',
  'App Development (Flutter / React Native)',
  'App Development (PWA)',
  'Both Web & App Development',
  'Not Sure Yet',
];

const contactItems = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: site.whatsapp, href: site.whatsappHref },
  { icon: MapPin, label: 'Location', value: site.location, sub: site.locationSub, href: null },
];

const steps = [
  'We review your message within 24 hours',
  'We schedule a free 30-min strategy call',
  'You receive a detailed proposal within 48hrs',
];

function ServiceSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={[
          'w-full flex items-center justify-between gap-2',
          'bg-input border rounded-xl px-4 py-3',
          'text-sm transition-all duration-200 cursor-pointer text-left',
          open
            ? 'border-primary/50 shadow-[0_0_22px_rgba(6,182,212,0.13)]'
            : 'border-border hover:border-primary/40',
          value ? 'text-foreground' : 'text-muted-foreground/40',
        ].join(' ')}
      >
        <span className="truncate">{value || 'Select a service...'}</span>
        <ChevronDown
          size={14}
          className={`shrink-0 text-muted-foreground/50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={[
              'absolute z-50 mt-2 w-full rounded-xl overflow-hidden',
              'bg-card border border-border',
              'shadow-[0_16px_48px_rgba(0,0,0,0.15)]',
            ].join(' ')}
          >
            {services.map((s) => (
              <li
                key={s}
                role="option"
                aria-selected={value === s}
                onClick={() => { onChange(s); setOpen(false); }}
                className={[
                  'flex items-center justify-between gap-3 px-4 py-2.5 text-sm cursor-pointer',
                  'transition-colors duration-150',
                  value === s
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/75 hover:text-foreground hover:bg-foreground/5',
                ].join(' ')}
              >
                <span>{s}</span>
                {value === s && <Check size={13} className="shrink-0 text-primary" />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase = [
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3',
  'text-sm text-foreground placeholder:text-muted-foreground/40',
  'focus:outline-none focus:border-primary/50 focus:bg-white/[0.07]',
  'focus:shadow-[0_0_22px_rgba(6,182,212,0.13)]',
  'transition-all duration-200',
].join(' ');

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.service) return;

    const text = [
      `*New Project Inquiry — DevAutobot*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : null,
      `*Service:* ${form.service}`,
      ``,
      `*Message:*`,
      form.message,
    ].filter(Boolean).join('\n');

    window.open(
      `https://wa.me/923071996482?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.07),transparent)]" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-[0.65rem] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get in Touch
          </div>
          <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl mb-4">
            Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Book a free 30-minute strategy call or drop us a message. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* ── Left sidebar ── */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >

            {/* Contact info card */}
            <div className="relative rounded-2xl border border-white/8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/[0.03] to-transparent pointer-events-none" />

              <div className="relative p-6">
                {/* Status pill */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-9 h-9 rounded-xl bg-primary/12 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary leading-none mb-1">Available Now</p>
                    <p className="text-[0.7rem] text-muted-foreground/60">Ready to start your project</p>
                  </div>
                </div>

                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground/50 mb-4">Contact Directly</p>

                <div className="space-y-4">
                  {contactItems.map(({ icon: Icon, label, value, sub, href }) => (
                    <div key={label} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center shrink-0 group-hover:border-primary/30 group-hover:bg-primary/8 transition-all duration-200">
                        <Icon size={14} className="text-primary/60 group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.6rem] font-bold uppercase tracking-widest text-muted-foreground/50 mb-0.5">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-sm text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer truncate block"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground/80 truncate">{value}</p>
                        )}
                        {sub && <p className="text-[0.65rem] text-muted-foreground/45 mt-0.5">{sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground/50 mb-5">What Happens Next?</p>
              <div className="space-y-0">
                {steps.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 text-primary flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      {i < steps.length - 1 && (
                        <div className="w-px h-5 bg-gradient-to-b from-primary/20 to-transparent mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-snug pt-0.5 pb-5 last:pb-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <p className="text-[0.6rem] font-bold uppercase tracking-widest text-muted-foreground/40 whitespace-nowrap">Follow us</p>
              <div className="flex-1 h-px bg-white/6" />
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg border border-white/8 bg-white/[0.03] flex items-center justify-center text-muted-foreground/50 hover:border-primary/30 hover:bg-primary/8 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                <IconInstagram />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg border border-white/8 bg-white/[0.03] flex items-center justify-center text-muted-foreground/50 hover:border-primary/30 hover:bg-primary/8 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                <IconFacebook />
              </a>
            </div>

          </motion.aside>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="relative rounded-2xl border border-white/8 bg-white/[0.025] p-10 text-center flex flex-col items-center justify-center min-h-[520px] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_25%,rgba(6,182,212,0.06),transparent)] pointer-events-none" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={36} className="text-primary" />
                </motion.div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Message Received!</h3>
                <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
                  Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                </p>
                <button onClick={resetForm} className="btn-secondary text-sm px-6 py-2.5 cursor-pointer">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative rounded-2xl border border-white/8 bg-white/[0.025] p-7 lg:p-9 space-y-6 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_25%_at_50%_0%,rgba(6,182,212,0.04),transparent)] pointer-events-none" />

                {/* Name + Email */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="cf-name" className="block text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Your Name *
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ahmad Khan"
                      className={inputBase}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cf-email" className="block text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Email Address *
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="hello@company.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="cf-phone" className="block text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+92 300 000 0000"
                      className={inputBase}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Service Interested In *
                    </label>
                    <ServiceSelect
                      value={form.service}
                      onChange={(s) => setForm({ ...form, service: s })}
                    />
                  </div>
                </div>

                {/* Project details */}
                <div className="relative space-y-2">
                  <label htmlFor="cf-message" className="block text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground/60">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="cf-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary shimmer-btn w-full justify-center text-base py-4"
                >
                  <Send size={16} /> Send Message &amp; Book a Call
                </button>
                <p className="text-center text-xs text-muted-foreground/40">
                  By submitting, you agree to our Privacy Policy. No spam — ever.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
