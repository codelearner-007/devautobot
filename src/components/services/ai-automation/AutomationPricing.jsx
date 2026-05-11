import { ServicePricing } from '@/components/services/common/ServicePricing';
import { pricingTiers } from '@/data/pricing/ai-automation-pricing';

export default function AutomationPricing() {
  return <ServicePricing tiers={pricingTiers} />;
}
