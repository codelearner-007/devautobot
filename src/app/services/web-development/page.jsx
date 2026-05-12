import WebDevHero from '@/components/services/WebDevHero';
import ServicePricing from '@/components/services/ServicePricing';
import WebServicesGrid from '@/components/services/web-development/WebServicesGrid';
import WebApproach from '@/components/services/web-development/WebApproach';
import WebTechStack from '@/components/services/web-development/WebTechStack';
import WebFaq from '@/components/services/web-development/WebFaq';
import WebCta from '@/components/services/web-development/WebCta';

export const metadata = {
  title: 'Web Development Services',
  description: 'Custom websites, landing pages, web apps, and e-commerce stores built with React, Next.js, and modern web technologies. Fast delivery, clean code.',
};

export default function WebDevelopmentPage() {
  return (
    <main className="overflow-x-hidden">
      <WebDevHero />
      <WebServicesGrid />
      <WebApproach />
      <WebTechStack />
      <WebFaq />
      <ServicePricing serviceType="web" />
      <WebCta />
    </main>
  );
}
