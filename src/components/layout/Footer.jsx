import Link from 'next/link';
import { Mail, Phone, MapPin, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { site } from '@/lib/site';

const services = [
  { name: 'Website Development', href: '/services/website-dev' },
  { name: 'Voice AI Calling Agents', href: '/services/voice-ai' },
  { name: 'AI Avatars', href: '/services/ai-avatars' },
  { name: 'AI Agents & Automation', href: '/services/ai-automation' },
];

const company = [
  { name: 'About Us', href: '/#about' },
  { name: 'Case Studies', href: '/#projects' },
  { name: 'Process', href: '/#process' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-foreground/5 bg-background overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-cyan-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt={site.name}
                width={320}
                height={100}
                className="h-28 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We build AI-powered digital solutions that help businesses grow, automate, and lead in any industry.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: X, href: site.social.twitterHref },
                // { icon: Linkedin, href: site.social.linkedin },
                // { icon: Github, href: site.social.github },
                // { icon: Instagram, href: site.social.instagram },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-xs text-foreground uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-px" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-xs text-foreground uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-px" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-xs text-foreground uppercase tracking-widest mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={14} className="flex-shrink-0" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>
                  {site.location}
                  <br />
                  <span className="text-xs text-muted-foreground/60">{site.locationSub}</span>
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-xs px-5 py-2.5 shimmer-btn">
                Book a Free Call →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
