import type { PricingTier } from '@/components/services/common/ServicePricing';

export const pricingTiers = [
  {
    name: 'Starter',
    price: '$1,499',
    period: 'one-time',
    description: 'Perfect for small businesses and personal brands needing a professional presence.',
    features: ['Up to 5 pages', 'Mobile responsive design', 'Basic SEO setup', 'Contact form', 'CMS integration', '1 revision round', '30-day support'],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$3,499',
    period: 'one-time',
    description: 'For growing businesses that need a feature-rich, scalable website.',
    features: ['Up to 15 pages', 'Custom UI/UX design', 'Full SEO package', 'Analytics setup', 'E-commerce ready', 'CMS + admin training', '3 revision rounds', '90-day support', 'Performance audit'],
    cta: 'Start Your Project',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale platforms with complex requirements and ongoing development needs.',
    features: ['Unlimited pages', 'Full custom design system', 'Advanced integrations', 'Multi-language (i18n)', 'Custom CMS', 'Dedicated developer', 'Ongoing retainer', 'SLA support', 'Monthly reporting'],
    cta: "Let's Talk",
  },
];
