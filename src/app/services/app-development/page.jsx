import Link from 'next/link';
import { ArrowRight, CheckCircle2, Smartphone, Globe, Bell, BarChart3, Shield, Layers, RefreshCw, Star } from 'lucide-react';

export const metadata = {
  title: 'App Development Services',
  description:
    'Cross-platform and native mobile app development for iOS and Android. Flutter, React Native, and more. From MVP to full-scale product.',
};

const services = [
  {
    icon: Smartphone,
    title: 'Flutter Apps',
    description: 'Beautiful cross-platform apps for iOS and Android from a single codebase. Natively compiled for maximum performance.',
  },
  {
    icon: Layers,
    title: 'React Native Apps',
    description: 'JavaScript-based cross-platform development. Great for teams with existing React expertise.',
  },
  {
    icon: Globe,
    title: 'Progressive Web Apps',
    description: 'App-like experiences in the browser. Offline-capable, installable, and fast — no App Store required.',
  },
  {
    icon: BarChart3,
    title: 'Backend & APIs',
    description: 'Scalable Node.js or Firebase backends powering your app with real-time data, authentication, and cloud storage.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Engage users with targeted push notifications, in-app messaging, and re-engagement campaigns.',
  },
  {
    icon: RefreshCw,
    title: 'App Maintenance',
    description: 'OS update compatibility, performance monitoring, bug fixes, and feature additions after launch.',
  },
];

const techItems = ['Flutter', 'React Native', 'Dart', 'Firebase', 'Supabase', 'Node.js', 'Socket.io', 'Expo', 'Google Play', 'App Store'];

const faqs = [
  {
    q: 'What platform should I build for first?',
    a: 'For most startups, we recommend a cross-platform approach (Flutter/React Native) to reach iOS and Android simultaneously at lower cost. We can advise based on your specific audience.',
  },
  {
    q: 'How long does a mobile app take to build?',
    a: 'An MVP typically takes 4–8 weeks. A full-featured app with complex backend integration can take 8–16 weeks.',
  },
  {
    q: 'Do you handle App Store and Play Store submission?',
    a: 'Yes, we manage the entire submission process including app store listings, screenshots, descriptions, and compliance reviews.',
  },
  {
    q: 'Can you build the backend as well?',
    a: 'Absolutely. We build full-stack — from the mobile app to the server, database, and admin dashboard.',
  },
  {
    q: 'What if I already have a design?',
    a: "We can work with existing Figma files or design systems. If you don't have a design, our team will create one as part of the project.",
  },
];

export default function AppDevelopmentPage() {
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
              <Smartphone size={11} />
              App Development
            </div>
            <h1 className="section-heading text-5xl sm:text-6xl lg:text-7xl mb-6">
              Mobile Apps That
              <br />
              <span className="gradient-text">Users Love</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We build cross-platform and native mobile apps for iOS and Android that are fast,
              intuitive, and designed to retain users and grow your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary shimmer-btn">
                Start Your App Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/#portfolio" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-24 bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mx-auto mb-4">Capabilities</div>
            <h2 className="section-heading text-4xl sm:text-5xl mb-4">
              Full-Cycle App <span className="gradient-text">Development</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From architecture to App Store listing — we cover every stage of mobile product development.
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

      {/* Why native-quality matters */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-6">Our Commitment</div>
              <h2 className="section-heading text-4xl sm:text-5xl mb-6">
                Apps That Perform Like
                <br />
                <span className="gradient-text">Native, Cost Like Cross-Platform</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Using Flutter and React Native, we deliver apps with smooth 60fps animations,
                native device integrations, and platform-specific UI — at a fraction of the cost
                of building two separate native apps.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We build the whole stack: mobile frontend, REST or GraphQL API, cloud infrastructure,
                push notifications, analytics, and admin tools. One team, end to end.
              </p>
              <div className="space-y-3">
                {[
                  'Single codebase → iOS & Android',
                  '60fps smooth animations',
                  'Offline-first capabilities',
                  'Biometric authentication support',
                  'App Store & Play Store ready',
                  'GDPR & HIPAA compliant builds',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '4–8', unit: ' weeks', label: 'MVP delivery' },
                { val: '60', unit: 'fps', label: 'Smooth animations' },
                { val: '2-in-1', unit: '', label: 'iOS & Android' },
                { val: '5★', unit: '', label: 'App store rating' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-6 text-center">
                  <p className="font-heading font-extrabold text-3xl gradient-text-violet">
                    {stat.val}<span className="text-xl">{stat.unit}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
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
            <h2 className="section-heading text-3xl mb-3">Our Mobile Tech Stack</h2>
            <p className="text-muted-foreground">Battle-tested tools for production-grade mobile apps.</p>
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
            Ready to Build Your <span className="gradient-text">App?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tell us about your app idea. We'll advise on the best tech stack, give you a timeline, and quote — all for free.
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
