'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

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
  {
    name: 'David Chen',
    role: 'Co-founder, MealBox',
    avatar: 'DC',
    rating: 5,
    text: 'Our food delivery app needed real-time tracking and multiple user roles. DevAutobot architected the whole system beautifully. We launched on time and the app has zero downtime so far.',
    tag: 'React Native App',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, Luxe Interiors',
    avatar: 'PS',
    rating: 5,
    text: 'From the very first call, the team understood our brand and vision. The website they created is a masterpiece — our clients constantly compliment it. Worth every penny.',
    tag: 'Corporate Website',
  },
  {
    name: 'Tom Eriksson',
    role: 'CTO, DataSync Solutions',
    avatar: 'TE',
    rating: 5,
    text: 'We needed a scalable dashboard with complex data visualisations. DevAutobot delivered clean, well-documented code that our team can easily maintain and extend. Excellent engineers.',
    tag: 'SaaS Dashboard',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={12} className="text-primary fill-primary" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mx-auto mb-4"
          >
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
            Don't take our word for it. Here's what the people we've built for have to say.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card-hover p-6"
            >
              <Quote size={20} className="text-primary/30 mb-4" />

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                "{t.text}"
              </p>

              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15 mb-4 inline-block">
                {t.tag}
              </span>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <StarRating count={t.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
