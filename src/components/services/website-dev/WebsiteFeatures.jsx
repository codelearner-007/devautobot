import ServiceFeatures from '@/components/services/common/ServiceFeatures';
import { webDevelopmentFeatures } from '@/data/features/web-development';

export default function WebsiteFeatures() {
  return (
    <ServiceFeatures
      features={webDevelopmentFeatures}
      sectionLabel="Key Features"
      heading={<>Everything You <span className="gradient-text">Need & More</span></>}
      description="Built from the ground up to handle real-world complexity, at any scale."
      ctaHref="/contact"
      ctaLabel="Learn more"
    />
  );
}
