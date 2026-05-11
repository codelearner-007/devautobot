import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import StatsSection from '@/components/home/StatsSection';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import { IndustriesMarquee, Testimonials } from '@/components/home/SocialProof';
import CTABanner from '@/components/home/CTABanner';
import FeaturedServices from '@/components/home/FeaturedServices';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <StatsSection />
      <ServicesGrid />
      <ProcessTimeline />
      {/* <FeaturedServices /> */}
      <IndustriesMarquee />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
