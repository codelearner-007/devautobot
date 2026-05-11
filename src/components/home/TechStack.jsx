'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'Vercel', category: 'Deploy' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Figma', category: 'Design' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'GraphQL', category: 'API' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Stripe', category: 'Payments' },
];

export default function TechStack() {
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
            Our Tech Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-4xl sm:text-5xl mb-4"
          >
            Built With{' '}
            <span className="gradient-text">Modern Technology</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            We use the latest, battle-tested tools to ensure your product is fast, scalable, and maintainable.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-foreground/[0.03] text-sm font-medium text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
            >
              <span>{tech.name}</span>
              <span className="text-[10px] opacity-50">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          Don't see your preferred stack? We're flexible — we can work with your existing technology.
        </motion.p>
      </div>
    </section>
  );
}
