import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AppCta() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(6,182,212,0.07),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading text-4xl sm:text-5xl mb-5">
          Ready to Build Your <span className="gradient-text">App?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Tell us about your app idea. We&apos;ll advise on the best tech stack, give you a timeline, and quote — all for free.
        </p>
        <Link href="/contact" className="btn-primary shimmer-btn text-base px-8 py-4">
          Get a Free Quote
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
