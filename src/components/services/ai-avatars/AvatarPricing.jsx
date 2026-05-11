import { ServicePricing } from '@/components/services/common/ServicePricing';
import { pricingTiers } from '@/data/pricing/ai-avatars-pricing';

export default function AvatarPricing() {
  return <ServicePricing tiers={pricingTiers} />;
}
