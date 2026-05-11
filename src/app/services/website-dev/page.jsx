import { Metadata } from 'next';

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
