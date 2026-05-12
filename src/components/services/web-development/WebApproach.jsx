import { webApproachFeatures } from '@/data/services/web-development/webApproach';
import { pillLabel, card, cardTop } from '@/lib/serviceStyles';

export default function WebApproach() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_50%,rgba(6,182,212,0.05),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="text-center lg:text-left">
            <div className={`${pillLabel} mb-7 mx-auto lg:mx-0`}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Approach
            </div>
            <h2 className="section-heading text-4xl sm:text-5xl mb-6">
              We Don&apos;t Just Build Sites —<br />
              <span className="gradient-text">We Build Businesses</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              A website is only valuable if it does something for your business. That&apos;s why every
              decision we make — from layout to loading speed — is guided by one question: will
              this help our client grow?
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine strong visual design with technical excellence. Our sites are built on
              modern frameworks, fully SEO-optimised, and structured for long-term scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:pt-2">
            {webApproachFeatures.map((item) => (
              <div key={item} className={`${card} px-4 py-3.5 flex items-center gap-3 cursor-default`}>
                <div className={cardTop} />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
