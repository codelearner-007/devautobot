'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { site } from '@/lib/site';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const services = [
  { name: 'Website Development', href: '/services/web-development' },
  { name: 'App Development', href: '/services/app-development' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#', hasDropdown: true },
  { name: 'About', href: '/#about' },
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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile backdrop — blurs page and closes menu on outside click */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/50 backdrop-blur-xl border-b border-border shadow-[0_4px_32px_hsl(var(--background)/0.4)]'
          : 'bg-transparent'
      )}
    >
      <nav
        className={cn(
          'transition-all duration-500',
          isScrolled ? 'px-4 sm:px-6' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        )}
      >
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo.png" alt={site.name} width={200} height={100} className="h-12 xl:h-14 w-auto object-contain" />
            <span className="font-heading text-lg tracking-tight hidden sm:block bg-gradient-to-r from-[#4a5262] via-[#9ca3af] to-[#22d3ee] bg-clip-text text-transparent translate-y-1">
              {site.name}
            </span>
          </Link>

          {/* Desktop Nav — fades out on scroll */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                key="desktop-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, pointerEvents: 'none' }}
                transition={{ duration: 0.25 }}
                className="hidden lg:flex items-center gap-1"
              >
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.name} className="relative">
                      <button
                        className={cn(
                          'flex items-center gap-1 px-4 py-2 text-sm transition-colors rounded-lg hover:bg-foreground/5',
                          pathname.startsWith('/services')
                            ? 'text-primary'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={cn('transition-transform duration-200', servicesOpen && 'rotate-180')}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-0 mt-2 w-max bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-[0_16px_48px_hsl(var(--background)/0.5)] p-2"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                          >
                            {services.map((s) => {
                              const isActive = pathname === s.href;
                              return (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  className={cn(
                                    'block px-3 py-2.5 rounded-xl text-sm transition-colors',
                                    isActive
                                      ? 'text-primary bg-primary/8 font-medium'
                                      : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                                  )}
                                >
                                  {s.name}
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
                        'px-4 py-2 text-sm rounded-lg transition-colors',
                        pathname === link.href
                          ? 'text-foreground bg-foreground/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary shimmer-btn">
              Book a Free Call
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors">
                Home
              </Link>
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider mb-2">Services</p>
                {services.map((s) => {
                  const isActive = pathname === s.href;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={cn(
                        'block px-2 py-2.5 text-sm rounded-lg transition-colors',
                        isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {s.name}
                    </Link>
                  );
                })}
              </div>
              <Link href="/contact" className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors">
                Contact
              </Link>
              <div className="pt-2 pb-2">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Book a Free Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
