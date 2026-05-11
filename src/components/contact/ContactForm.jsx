'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { site } from '@/lib/site';

const services = [
  'Website Development',
  'Voice AI Calling Agents',
  'AI Avatars',
  'AI Agents & Automation',
  'Full Package (All Services)',
  'Not Sure Yet',
];

const inputClass =
  'w-full bg-foreground/[0.04] border border-foreground/8 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:bg-foreground/[0.06] transition-all';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen bg-background pt-28 pb-20">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-400/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-violet-500/6 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-block">Get in Touch</span>
          <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl mb-4">
            Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Book a free 30-minute strategy call or drop us a message. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail,   label: 'Email Us',          value: site.email,    href: `mailto:${site.email}`,  color: 'bg-cyan-400/10 border-cyan-400/15 text-cyan-400' },
              { icon: Phone,  label: 'Call or WhatsApp',  value: site.whatsapp, href: site.whatsappHref,        color: 'bg-violet-500/10 border-violet-500/15 text-violet-400' },
              { icon: MapPin, label: 'Based In',          value: `${site.location}\n(${site.locationSub})`, href: '#', color: 'bg-pink-500/10 border-pink-500/15 text-pink-400' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 glass-card p-5 hover:border-foreground/12 transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-xl border ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground/60 font-heading uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-sm text-foreground/80 whitespace-pre-line group-hover:text-foreground transition-colors">{value}</div>
                </div>
              </a>
            ))}

            {/* What happens next */}
            <div className="glass-card p-5 space-y-3">
              <h4 className="font-heading font-semibold text-sm text-foreground">What happens next?</h4>
              {[
                'We review your message within 24 hours',
                'We schedule a free 30-min strategy call',
                'You receive a detailed proposal within 48hrs',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/20 text-primary flex items-center justify-center text-xs font-heading font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass-card p-10 text-center h-full flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2 size={56} className="text-primary mx-auto mb-5" />
                </motion.div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Message Received!</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="btn-secondary text-sm px-6 py-2.5"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-7 lg:p-9 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ahmad Khan"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="hello@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+92 300 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Service Interested In *
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} cursor-pointer appearance-none`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary shimmer-btn w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message & Book a Call
                    </>
                  )}
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
