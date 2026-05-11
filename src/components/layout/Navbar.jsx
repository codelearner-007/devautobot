'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Code2, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { site } from '@/lib/site';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const services = [
  {
    name: 'Web Development',
    href: '/services/web-development',
    icon: Code2,
    desc: 'Websites, landing pages & web apps',
  },
  {
    name: 'App Development',
    href: '/services/app-development',
    icon: Smartphone,
    desc: 'iOS, Android & cross-platform apps',
  },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#', hasDropdown: true },
  { name: 'Work', href: '/#portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt={site.name}
              width={140}
              height={40}
              className="h-18 w-auto object-contain"
              loading="eager"
            />
            <span className="font-heading font-800 text-lg tracking-tight hidden sm:block">
              {site.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="relative">
                  <button
                    className={cn(
                      'flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                      pathname.startsWith('/services')
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown size={13} className={cn('transition-transform duration-200', servicesOpen && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={cn(
                                'flex items-start gap-3 px-3 py-3 rounded-xl transition-colors group/item',
                                pathname === s.href
                                  ? 'bg-primary/8 text-primary'
                                  : 'hover:bg-foreground/5'
                              )}
                            >
                              <div className="mt-0.5 p-1.5 rounded-lg bg-primary/8 text-primary shrink-0">
                                <Icon size={14} />
                              </div>
                              <div>
                                <p className={cn('text-sm font-semibold', pathname === s.href ? 'text-primary' : 'text-foreground')}>{s.name}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    pathname === link.href
                      ? 'text-foreground bg-foreground/5'
                      : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary shimmer-btn text-sm">
              Start a Project
            </Link>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors">Home</Link>
              <div className="px-4 py-2">
                <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mb-2">Services</p>
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={cn(
                        'flex items-center gap-3 px-2 py-3 text-sm rounded-xl transition-colors',
                        pathname === s.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <Icon size={15} />
                      {s.name}
                    </Link>
                  );
                })}
              </div>
              <Link href="/#portfolio" className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors">Work</Link>
              <Link href="/contact" className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors">Contact</Link>
              <div className="pt-2">
                <Link href="/contact" className="btn-primary w-full justify-center">Start a Project</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
