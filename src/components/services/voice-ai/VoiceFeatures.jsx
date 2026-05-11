import ServiceFeatures from '@/components/services/common/ServiceFeatures';
import { voiceAiCallingFeatures } from '@/data/features/voice-ai-calling';

export default function VoiceFeatures() {
  return (
    <ServiceFeatures
      features={voiceAiCallingFeatures}
      sectionLabel="Key Features"
      heading={<>Calling Intelligence That <span className="gradient-text">Closes More Deals</span></>}
      description="Every feature is built to engage, qualify, and convert leads automatically — before they go cold."
      ctaHref="/contact"
      ctaLabel="Learn more"
    />
  );
}
