import { ServicePricing } from '@/components/services/common/ServicePricing';
import { pricingTiers } from '@/data/pricing/voice-ai-pricing';

export default function VoicePricing() {
  return <ServicePricing tiers={pricingTiers} />;
}
