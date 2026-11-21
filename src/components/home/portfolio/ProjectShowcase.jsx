'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Lock } from 'lucide-react';
import ScreenSlider from '@/components/home/portfolio/ScreenSlider';

/* iPhone Pro Max style: thin bezel, titanium edge; screens carry their own status bar and Dynamic Island */
function PhoneFrame({ project }) {
  return (
    <div className="relative">
      <span aria-hidden className="absolute -left-[1.6%] top-[17%] h-[3.5%] w-[1.6%] rounded-l-sm bg-zinc-500" />
      <span aria-hidden className="absolute -left-[1.6%] top-[23%] h-[7%] w-[1.6%] rounded-l-sm bg-zinc-500" />
      <span aria-hidden className="absolute -left-[1.6%] top-[31.5%] h-[7%] w-[1.6%] rounded-l-sm bg-zinc-500" />
      <span aria-hidden className="absolute -right-[1.6%] top-[25%] h-[10%] w-[1.6%] rounded-r-sm bg-zinc-500" />
      <div className="rounded-[19%/9.5%] bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-400 p-[1.4%] shadow-2xl shadow-black/40">
        <div className="rounded-[18%/9%] bg-black p-[2%]">
          <div className="relative aspect-[664/1334] overflow-hidden rounded-[16%/8%] bg-black">
            <ScreenSlider slides={project.appSlides} label={`${project.title} app screens`} sizes="(min-width: 1024px) 200px, 25vw" interval={3000} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* iPad Pro style tablet: slim even bezel, rounded aluminium edge, top button, front camera */
function TabletFrame({ project }) {
  return (
    <div className="relative">
      <span aria-hidden className="absolute -top-[0.7%] right-[14%] h-[0.7%] w-[9%] rounded-t-sm bg-zinc-500" />
      <div className="rounded-[7.5%/4.7%] bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-400 p-[0.9%] shadow-2xl shadow-black/40">
        <div className="relative rounded-[7%/4.4%] bg-black p-[3%]">
          <span aria-hidden className="absolute left-1/2 top-[1.1%] h-[0.9%] w-[1.5%] -translate-x-1/2 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
          <div className="relative aspect-[10/16] overflow-hidden rounded-[4.5%/2.8%] bg-black">
            <ScreenSlider slides={project.appSlides} label={`${project.title} app screens`} sizes="(min-width: 1024px) 300px, 42vw" interval={3000} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({ project }) {
  return (
    <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-foreground/10 bg-card shadow-2xl shadow-black/20">
      <div className="flex h-7 sm:h-10 items-center gap-3 border-b border-foreground/10 bg-foreground/[0.03] px-3 sm:px-4">
        <div className="hidden sm:flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-xs flex-1 items-center justify-center gap-1.5 rounded-md bg-foreground/[0.05] px-3 py-1 text-[10px] sm:text-xs text-muted-foreground">
          <Lock size={10} className="shrink-0" />
          <span className="truncate">{project.domain}</span>
        </div>
        <div className="hidden sm:block w-[42px]" />
      </div>
      <div className="relative aspect-video">
        <ScreenSlider slides={project.webSlides} label={`${project.title} website screens`} sizes="(min-width: 1024px) 820px, 92vw" dots />
      </div>
    </div>
  );
}

/* Browser and device stand side by side; the device only overlaps the browser's edge */
function ProjectVisual({ project, reverse, variant }) {
  const hasApp = variant !== 'web' && project.appSlides.length > 0;
  const tablet = project.device === 'tablet';

  // App pages show the device on its own, larger
  if (variant === 'app') {
    return (
      <div className="relative isolate flex justify-center py-4 sm:py-8">
        <div className="absolute inset-10 -z-10 rounded-full bg-[var(--brand)] opacity-20 blur-3xl" />
        <div className={tablet ? 'w-[70%] max-w-[380px]' : 'w-[48%] max-w-[270px]'}>
          {tablet ? <TabletFrame project={project} /> : <PhoneFrame project={project} />}
        </div>
      </div>
    );
  }

  const deviceWidth = tablet ? 'w-[38%]' : 'w-[25%]';
  const overlap = tablet ? (reverse ? '-me-[10%]' : '-ms-[10%]') : (reverse ? '-me-[7%]' : '-ms-[7%]');
  return (
    <div className={`relative isolate flex items-center ${hasApp ? 'py-6 sm:py-10' : ''}`}>
      <div className="absolute inset-6 -z-10 rounded-full bg-[var(--brand)] opacity-15 blur-3xl" />
      <div className="min-w-0 flex-1">
        <BrowserFrame project={project} />
      </div>
      {hasApp && (
        <div className={`relative z-10 shrink-0 ${deviceWidth} ${overlap} ${reverse ? 'order-first' : ''}`}>
          {tablet ? <TabletFrame project={project} /> : <PhoneFrame project={project} />}
        </div>
      )}
    </div>
  );
}

/* Google Play badge; until the app is published it is dimmed, not a link, and says so */
function GooglePlayBadge({ playStore }) {
  const body = (
    <>
      <svg aria-hidden viewBox="0 0 24 26" className="h-6 w-6 shrink-0">
        <path fill="#34A853" d="M1 1.2 13.4 13 1 24.8a1.6 1.6 0 0 1-.6-1.3V2.5c0-.5.2-1 .6-1.3Z" />
        <path fill="#FBBC04" d="m17.6 8.8-4.2 4.2 4.2 4.2 4.8-2.7c1.4-.8 1.4-2.2 0-3l-4.8-2.7Z" />
        <path fill="#EA4335" d="M13.4 13 1 24.8c.5.5 1.2.5 2 .1l14.6-7.7-4.2-4.2Z" />
        <path fill="#4285F4" d="M13.4 13 17.6 8.8 3 1.1c-.8-.4-1.5-.4-2 .1L13.4 13Z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] uppercase tracking-wider opacity-80">{playStore.live ? 'Get it on' : 'Coming to'}</span>
        <span className="text-sm font-semibold">Google Play</span>
      </span>
    </>
  );
  const base = 'inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black px-3.5 py-2 text-white';
  if (playStore.live && playStore.href) {
    return (
      <a href={playStore.href} target="_blank" rel="noopener noreferrer" className={`${base} transition-transform hover:-translate-y-0.5`}>
        {body}
      </a>
    );
  }
  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <span aria-disabled="true" className={`${base} cursor-not-allowed opacity-60 grayscale-[30%]`}>{body}</span>
      <span className="rounded-full border border-dashed border-foreground/25 px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
        Not live yet
      </span>
    </span>
  );
}

/**
 * One project as a case-study row.
 * variant 'full' (home): browser + device, every platform, Play badge and links.
 * variant 'web': browser only, web platforms, web links.
 * variant 'app': device only, app platforms, Play badge.
 */
export default function ProjectShowcase({ project, index, variant = 'full' }) {
  const reverse = index % 2 === 1;
  const platforms = variant === 'full' ? project.platforms : project.platforms.filter((p) => p.kind === variant);
  const links = variant === 'app' ? [] : project.links;
  const tech = variant === 'full' ? [...new Set([...(project.stack.web || []), ...(project.stack.app || [])])] : project.stack[variant] || [];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`brand-${project.slug} grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12`}
    >
      <div className={`lg:col-span-8 ${reverse ? 'lg:order-2' : ''}`}>
        <ProjectVisual project={project} reverse={reverse} variant={variant} />
      </div>

      <div className="lg:col-span-4">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="font-heading text-sm font-bold text-[var(--brand-text)]">0{index + 1}</span>
          <span className="me-1 h-px w-8 bg-[var(--brand)]" />
          {platforms.map((p) =>
            p.live ? (
              <span key={p.name} className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--brand-ink)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-ink)]" />
                {p.name} · Live
              </span>
            ) : (
              <span key={p.name} className="rounded-full border border-dashed border-foreground/25 px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                {p.name} · Coming soon
              </span>
            ),
          )}
        </div>

        <h3 className="section-heading mb-2 text-3xl sm:text-4xl">{project.title}</h3>
        <p className="mb-4 font-medium text-[var(--brand-text)]">{project.tagline}</p>
        <p className="mb-6 leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mb-6 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
              <Check size={16} className="mt-0.5 shrink-0 text-[var(--brand-text)]" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mb-8 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="rounded-full border border-foreground/10 bg-foreground/[0.05] px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        {project.playStore && variant !== 'web' && (
          <div className="mb-5">
            <GooglePlayBadge playStore={project.playStore} />
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-brand">
              {l.label}
              <ArrowUpRight size={15} />
            </a>
          ))}
          <Link href="/contact" className="btn-secondary px-5">
            Build Something Similar
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

