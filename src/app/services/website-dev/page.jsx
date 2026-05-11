import { Metadata } from 'next';
import WebsiteHero from '@/components/services/website-dev/WebsiteHero';
import WebsiteFeatures from '@/components/services/website-dev/WebsiteFeatures';
import WebsiteProcess from '@/components/services/website-dev/WebsiteProcess';
import WebsiteProjects from '@/components/services/website-dev/WebsiteProjects';
import WebsiteUseCases from '@/components/services/website-dev/WebsiteUseCases';
import WebsitePricing from '@/components/services/website-dev/WebsitePricing';
import WebsiteCTA from '@/components/services/website-dev/WebsiteCTA';

export const metadata = {
  title: 'Website Development',
  description: 'High-performance, conversion-optimized websites built with cutting-edge tech. From e-commerce to SaaS — we build digital experiences that drive real results.',
};

export default function WebsiteDevPage() {
  return (
    <main>
      <WebsiteHero />
      <WebsiteFeatures />
      <WebsiteProcess />
      <div id="projects">
        <WebsiteProjects />
      </div>
      <WebsiteUseCases />
      <WebsitePricing />
      <WebsiteCTA />
    </main>
  );
}
