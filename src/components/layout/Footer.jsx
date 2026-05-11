import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, Share2, Hash, AtSign, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'UI/UX Design', href: '/services/web-development#design' },
    { name: 'E-Commerce', href: '/services/web-development#ecommerce' },
    { name: 'PWA Development', href: '/services/app-development#pwa' },
  ],
  company: [
    { name: 'Home', href: '/' },
    { name: 'Our Work', href: '/#portfolio' },
    { name: 'Process', href: '/#process' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact Us', href: '/contact' },
  ],
};

const socials = [
  { name: 'Twitter / X', icon: Hash, href: site.social.twitterHref },
  { name: 'LinkedIn', icon: Globe, href: site.social.linkedin },
  { name: 'GitHub', icon: Share2, href: site.social.github },
  { name: 'Instagram', icon: AtSign, href: site.social.instagram },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt={site.name} width={130} height={36} className="h-8 w-auto object-contain" />
              <span className="font-heading font-bold text-base">{site.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We build high-performance websites and apps that help businesses scale. From concept to launch — done right.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} className="shrink-0" />
                {site.email}
              </a>
              <a href={site.phoneHref} className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} className="shrink-0" />
                {site.phone}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin size={14} className="shrink-0" />
                {site.location}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group">
                    {link.name}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group">
                    {link.name}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-5">Start a Project</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Ready to build something great? Let's talk about your project.
            </p>
            <Link href="/contact" className="btn-primary shimmer-btn text-sm mb-4 inline-flex">
              Get a Free Quote
            </Link>
            <div>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm inline-flex">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
