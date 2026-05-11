import type { PricingTier } from '@/components/services/common/ServicePricing';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Creator',
    price: '$299',
    period: '/month',
    description: 'For content creators and small businesses producing regular video.',
    features: ['50 video minutes/month', 'Access to avatar library', '1080p output', '10 languages', 'Basic brand overlays', 'MP4 downloads', 'Email support'],
    cta: 'Start Creating',
  },
  {
    name: 'Business',
    price: '$799',
    period: '/month',
    description: 'For teams producing video content at scale across multiple campaigns.',
    features: ['200 video minutes/month', 'Custom avatar creation (1)', '4K output', '25 languages', 'Full brand kit & overlays', 'API access (1,000 calls)', 'Priority support', 'Script writing assistance'],
    cta: 'Get Business Plan',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Unlimited content generation with a dedicated avatar and API for dynamic personalisation.',
    features: ['Unlimited video minutes', 'Unlimited custom avatars', '4K + custom resolution', '50+ languages', 'Full API integration', 'Dynamic personalisation engine', 'Dedicated account manager', 'SLA support'],
    cta: "Let's Talk",
  },
];
