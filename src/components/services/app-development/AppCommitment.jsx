import { appCommitmentFeatures } from '@/data/services/app-development/appCommitment';
import { pillLabel, card, cardTop } from '@/lib/serviceStyles';

export default function AppCommitment() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_50%,rgba(6,182,212,0.05),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className={`${pillLabel} mb-7`}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Commitment
            </div>
            <h2 className="section-heading text-4xl sm:text-5xl mb-6">
              Apps That Perform Like
              <br />
              <span className="gradient-text">Native, Cost Like Cross-Platform</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Using Flutter and React Native, we deliver apps with smooth 60fps animations,
              native device integrations, and platform-specific UI — at a fraction of the cost
              of building two separate native apps.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We build the whole stack: mobile frontend, REST or GraphQL API, cloud infrastructure,
              push notifications, analytics, and admin tools. One team, end to end.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:pt-2">
            {appCommitmentFeatures.map((item) => (
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
