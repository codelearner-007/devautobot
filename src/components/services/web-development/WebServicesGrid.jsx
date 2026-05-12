import { webServices } from '@/data/services/web-development/webServices';
import { pillLabel, card, cardTop } from '@/lib/serviceStyles';

export default function WebServicesGrid() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(6,182,212,0.05),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className={`${pillLabel} mb-6 mx-auto`}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            What&apos;s Included
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl mb-4">
            Everything Your Web Presence <span className="gradient-text">Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From simple informational sites to complex platforms — we&apos;ve done it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {webServices.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={`${card} p-6 cursor-default`}>
                <div className={cardTop} />
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
