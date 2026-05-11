import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, ShoppingCart, Layout, Code2, Palette, Search, Zap, Shield, HeadphonesIcon } from 'lucide-react';

export const metadata = {
  title: 'Web Development Services',
  description:
    'Custom websites, landing pages, web apps, and e-commerce stores built with React, Next.js, and modern web technologies. Fast delivery, clean code.',
};

const services = [
  {
    icon: Globe,
    title: 'Custom Websites',
    description: 'Brand-aligned, fully custom websites that look stunning on every device. Built for speed, SEO, and conversions.',
  },
  {
    icon: Code2,
    title: 'Web Applications',
    description: 'Complex full-stack web apps with authentication, real-time features, dashboards, and integrations.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Stores',
    description: 'High-converting online stores with product management, payments, inventory, and order tracking.',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-performance landing pages designed to convert visitors into leads and customers.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Research-backed, user-centred UI/UX design with wireframes, prototypes, and polished final designs.',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description: 'Technical SEO, Core Web Vitals optimisation, and performance tuning to rank higher and load faster.',
  },
];

const techItems = ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Sanity CMS', 'Stripe', 'Vercel', 'Framer Motion'];

const faqs = [
  {
    q: 'How long does a website take to build?',
    a: 'A standard 5-page website takes 2–3 weeks. A full web application typically takes 4–8 weeks depending on complexity.',
  },
  {
    q: 'Do you provide website hosting?',
    a: 'Yes — we handle deployment on Vercel, Netlify, or your preferred host. We can also set up and manage your server if needed.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely. Every website we build is fully responsive and tested on all major devices and screen sizes.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes, we do full redesigns as well as new builds. We can migrate your content and improve both design and performance.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Yes. We offer monthly maintenance packages covering updates, security patches, content changes, and performance monitoring.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-background bg-grid overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-12 dark:opacity-8"
            style={{ background: 'radial-gradient(ellipse, var(--color-primary) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="section-label mb-6">
              <Globe size={11} />
              Web Development
            </div>
            <h1 className="section-heading text-5xl sm:text-6xl lg:text-7xl mb-6">
              Websites & Web Apps
              <br />
              <span className="gradient-text">Built to Win</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We build fast, beautiful, and conversion-optimised websites and web applications
              that help your business stand out, attract customers, and grow.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary shimmer-btn">
                Start Your Web Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/#portfolio" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="py-24 bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mx-auto mb-4">What's Included</div>
            <h2 className="section-heading text-4xl sm:text-5xl mb-4">
              Everything Your Web Presence <span className="gradient-text">Needs</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From simple informational sites to complex platforms — we've done it all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="glass-card-hover p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why we're great at this */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-6">Our Approach</div>
              <h2 className="section-heading text-4xl sm:text-5xl mb-6">
                We Don't Just Build Sites —<br />
                <span className="gradient-text">We Build Businesses</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A website is only valuable if it does something for your business. That's why every
                decision we make — from layout to loading speed — is guided by one question: will
                this help our client grow?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine strong visual design with technical excellence. Our sites are built on
                modern frameworks, fully SEO-optimised, and structured for long-term scalability.
              </p>
              <div className="space-y-3">
                {[
                  'Pixel-perfect design on all devices',
                  'Sub-2-second page load times',
                  'SEO-ready from day one',
                  'Accessible & WCAG compliant',
                  'Secure by default (HTTPS, headers)',
                  'Full source code ownership',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: '2–3', unit: 'weeks', label: 'Avg. delivery' },
                { val: '98', unit: '/100', label: 'Lighthouse score' },
                { val: '100%', unit: '', label: 'Mobile optimised' },
                { val: '5x', unit: '', label: 'Faster than avg.' },
                { val: '50+', unit: '', label: 'Sites delivered' },
                { val: '24/7', unit: '', label: 'Support access' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <p className="font-heading font-extrabold text-2xl gradient-text-violet">
                    {stat.val}<span className="text-lg">{stat.unit}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section id="tech" className="py-20 bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading text-3xl mb-3">Our Web Tech Stack</h2>
            <p className="text-muted-foreground">Modern, proven technologies that power great web products.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techItems.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-foreground/5 border border-border text-sm font-medium text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label mx-auto mb-4">FAQ</div>
            <h2 className="section-heading text-4xl">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-heading font-bold text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading text-4xl sm:text-5xl mb-5">
            Ready to Build Your <span className="gradient-text">Website?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get a free consultation and quote. We'll scope your project and give you a clear timeline and price — no obligations.
          </p>
          <Link href="/contact" className="btn-primary shimmer-btn text-base px-8 py-4">
            Get a Free Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
