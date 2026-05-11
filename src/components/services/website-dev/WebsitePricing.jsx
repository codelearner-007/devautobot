import { ServicePricing } from '@/components/services/common/ServicePricing';
import { pricingTiers } from '@/data/pricing/website-dev-pricing';

export default function WebsitePricing() {
  return <ServicePricing tiers={pricingTiers} />;
}
