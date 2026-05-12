import { appTechItems } from '@/data/services/app-development/appTech';

export default function AppTechStack() {
  return (
    <section id="tech" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(6,182,212,0.05),transparent)]" />
      <div className="relative">
        <div className="text-center mb-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-3xl mb-3">Our Mobile <span className="gradient-text">Tech Stack</span></h2>
          <p className="text-muted-foreground">Battle-tested tools for production-grade mobile apps.</p>
        </div>
        <div className="max-w-5xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track gap-4 py-2" style={{ animationDuration: '22s' }}>
            {[...appTechItems, ...appTechItems].map((t, i) => (
              <span key={i} className="shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full bg-foreground/[0.04] border border-foreground/10 text-sm font-medium text-muted-foreground cursor-default transition-colors duration-200 hover:bg-primary/10 hover:border-primary/30 hover:text-primary">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
