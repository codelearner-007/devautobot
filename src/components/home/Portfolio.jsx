'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Smartphone, ShoppingCart, LayoutDashboard } from 'lucide-react';

const projects = [
  {
    title: 'EcoStore — E-Commerce Platform',
    category: 'Web Development',
    type: 'E-Commerce',
    icon: ShoppingCart,
    description:
      'A full-featured online store with product catalog, cart, Stripe payments, order tracking, and an admin dashboard. Built with Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'Sanity CMS', 'PostgreSQL'],
    metric: '+180% conversion rate',
  },
  {
    title: 'FitTrack — Fitness Mobile App',
    category: 'App Development',
    type: 'Mobile App',
    icon: Smartphone,
    description:
      'A cross-platform fitness app for iOS & Android. Features workout logging, progress charts, push notifications, and social sharing. Built with Flutter.',
    tech: ['Flutter', 'Firebase', 'Node.js', 'Push Notifications', 'Charts'],
    metric: '10k+ downloads',
  },
  {
    title: 'PropVision — Real Estate Platform',
    category: 'Web Development',
    type: 'Web App',
    icon: LayoutDashboard,
    description:
      'A property listing and management platform with map integration, advanced filters, virtual tours, and a CRM dashboard for real estate agents.',
    tech: ['React', 'Node.js', 'Google Maps', 'MongoDB', 'Cloudinary'],
    metric: '5x faster search',
  },
  {
    title: 'MealBox — Food Delivery App',
    category: 'App Development',
    type: 'Mobile App',
    icon: Globe,
    description:
      'A React Native food delivery app with real-time order tracking, restaurant management portal, and integrated payment gateway. Fully cross-platform.',
    tech: ['React Native', 'Express.js', 'Socket.io', 'Stripe', 'PostgreSQL'],
    metric: '30min avg delivery',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mx-auto mb-4"
          >
            Recent Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            Projects We're{' '}
            <span className="gradient-text">Proud Of</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A selection of websites and apps we've built for clients across industries.
            Each project is crafted with care and delivered with measurable results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass-card p-6 border border-border hover:border-primary/25 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon size={17} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary">{p.category}</span>
                      <p className="text-[10px] text-muted-foreground">{p.type}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                    {p.metric}
                  </span>
                </div>

                {/* Preview */}
                <div
                  className="h-32 rounded-xl border border-primary/10 mb-5 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, color-mix(in oklch, var(--color-primary) 10%, transparent), color-mix(in oklch, var(--color-primary) 4%, transparent))' }}
                >
                  <Icon size={40} className="text-primary opacity-15" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-foreground/5 border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study
                  <ArrowUpRight size={13} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link href="/contact" className="btn-secondary">
            Discuss Your Project
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
