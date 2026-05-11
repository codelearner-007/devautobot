'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const industries = [
  '🏥 Healthcare', '🏠 Real Estate', '🛒 E-commerce', '💰 Finance', '🎓 Education',
  '⚡ SaaS', '⚖️ Legal', '🍽️ Restaurant', '🏪 Retail', '🏨 Hospitality',
  '🚗 Automotive', '🏗️ Construction', '💊 Pharmacy', '📱 Tech Startups', '🎯 Marketing',
];

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'CEO',
    company: 'PropConnect Real Estate',
    avatar: 'AR',
    quote: 'The Voice AI agent transformed our lead qualification process. We now handle 5x more inquiries without adding headcount. The ROI was visible in the first 30 days.',
    rating: 5,
    color: 'bg-cyan-500',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'GreenMart Organics',
    avatar: 'SM',
    quote: 'Our new e-commerce site drove $1.2M in revenue in the first year. The team understood our brand deeply and delivered a product that exceeded every expectation.',
    rating: 5,
    color: 'bg-violet-500',
  },
  {
    name: 'Dr. Fatima Khan',
    role: 'Practice Manager',
    company: 'MedCare Clinics',
    avatar: 'FK',
    quote: 'Our no-show rate dropped by 40% after deploying the AI appointment reminder system. The conversations feel completely natural — patients think they are talking to a real person.',
    rating: 5,
    color: 'bg-pink-500',
  },
];

function Marquee({ items, reverse = false }) {
  return (
    <div className={`flex gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="flex-shrink-0 text-sm px-5 py-2 rounded-full bg-foreground/[0.04] border border-foreground/[0.07] text-muted-foreground whitespace-nowrap hover:text-foreground hover:border-foreground/15 transition-colors cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function IndustriesMarquee() {
  return (
    <section className="py-16 bg-card border-y border-foreground/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="section-label mb-2 inline-block">Industries We Serve</span>
          <h2 className="font-heading font-bold text-2xl text-foreground">
            AI Solutions for Every Sector
          </h2>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        {/* Left/right fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-4 mb-4">
          <Marquee items={industries.slice(0, 10)} />
          <Marquee items={industries.slice(5)} reverse />
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-block">Client Results</span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real results from real businesses that chose to build with AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card p-7 relative group hover:border-foreground/12 transition-all duration-300"
            >
              <Quote size={28} className="text-foreground/5 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-foreground/75 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-foreground/5">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-heading font-bold text-sm text-white flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
