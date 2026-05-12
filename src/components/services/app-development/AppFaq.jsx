import { appFaqs } from '@/data/services/app-development/appFaqs';
import { pillLabel, card, cardTop } from '@/lib/serviceStyles';

export default function AppFaq() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`${pillLabel} mb-6 mx-auto`}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            FAQ
          </div>
          <h2 className="section-heading text-4xl">Common <span className="gradient-text">Questions</span></h2>
        </div>
        <div className="space-y-4">
          {appFaqs.map((faq) => (
            <div key={faq.q} className={`${card} p-6 cursor-default`}>
              <div className={cardTop} />
              <h3 className="font-heading font-bold text-sm text-foreground mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
