import ServiceFeatures from '@/components/services/common/ServiceFeatures';
import { aiAvatarFeatures } from '@/data/features/ai-avatars';

export default function AvatarFeatures() {
  return (
    <ServiceFeatures
      features={aiAvatarFeatures}
      sectionLabel="Key Features"
      heading={<>Avatar Intelligence That <span className="gradient-text">Scales Your Brand</span></>}
      description="Every feature is built to produce, personalise, and publish high-converting video content — automatically and at any scale."
      ctaHref="/contact"
      ctaLabel="Learn more"
    />
  );
}
