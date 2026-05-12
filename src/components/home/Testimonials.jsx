'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder, GreenLeaf Organics',
    avatar: 'SM',
    rating: 5,
    text: 'DevAutobot delivered our e-commerce website in just 3 weeks. The design is stunning, the site is fast, and our conversion rate doubled in the first month. Absolutely exceptional work.',
    tag: 'E-Commerce Website',
  },
  {
    name: 'James Okonkwo',
    role: 'CEO, FitTrack Health',
    avatar: 'JO',
    rating: 5,
    text: 'They built our fitness app from scratch — iOS and Android — in under 5 weeks. The code quality is top-notch and they were incredibly communicative throughout the entire project.',
    tag: 'Mobile App',
  },
  {
    name: 'Aisha Rahman',
    role: 'Product Manager, PropVision',
    avatar: 'AR',
    rating: 5,
    text: 'We had a complex real estate platform with maps, filters, and a full CRM. DevAutobot nailed it. The performance improvements alone saved us thousands in infrastructure costs.',
    tag: 'Web Application',
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-[0.65rem] font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Client Love
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            What Our Clients{' '}
            <span className="gradient-text">Actually Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Don&apos;t take our word for it. Here&apos;s what the people we&apos;ve built for have to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.025] overflow-hidden transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_40px_rgba(6,182,212,0.07)] cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="p-6 h-full flex flex-col">

                {/* Quote mark */}
                <div className="text-primary/20 font-serif text-5xl leading-none select-none mb-1">&ldquo;</div>

                <div className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {t.text}
                  </p>

                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-primary/80 border border-primary/20 bg-primary/8 px-3 py-1 rounded-full self-start mb-5">
                    {t.tag}
                  </span>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {t.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate blur-[4px] select-none">{t.name}</p>
                      <p className="text-xs text-muted-foreground truncate blur-[4px] select-none">{t.role}</p>
                    </div>
                    <Stars count={t.rating} />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
