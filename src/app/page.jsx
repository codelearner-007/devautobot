import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyUs from '@/components/home/WhyUs';
import Process from '@/components/home/Process';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTABanner />
    </main>
  );
}
