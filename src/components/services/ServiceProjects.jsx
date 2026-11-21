import { projects } from '@/data/portfolio/projects';
import { pillLabel } from '@/lib/serviceStyles';
import ProjectShowcase from '@/components/home/portfolio/ProjectShowcase';

const copy = {
  web: {
    label: 'Websites We Built',
    title: 'Real Websites,',
    highlight: 'Live Today',
    sub: 'SaaS platforms, online stores and marketing sites we designed, built and launched.',
  },
  app: {
    label: 'Apps We Built',
    title: 'Mobile Apps',
    highlight: 'In the Making',
    sub: 'Android apps we built end to end. They are finishing testing and are not on Google Play yet.',
  },
};

/** Portfolio projects that have a website ('web') or an app ('app'), for the service pages. */
export default function ServiceProjects({ kind }) {
  const list = projects.filter((p) => p.platforms.some((pl) => pl.kind === kind));
  const c = copy[kind];
  return (
    <section id="work" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_40%,rgba(6,182,212,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className={`${pillLabel} mx-auto mb-6`}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {c.label}
          </div>
          <h2 className="section-heading mb-4 text-4xl sm:text-5xl">
            {c.title} <span className="gradient-text">{c.highlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{c.sub}</p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {list.map((p, i) => (
            <ProjectShowcase key={p.slug} project={p} index={i} variant={kind} />
          ))}
        </div>
      </div>
    </section>
  );
}
