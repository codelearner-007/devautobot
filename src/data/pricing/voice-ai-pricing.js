export const pricingTiers = [
  {
    name: 'Starter',
    price: '$799',
    period: '/month',
    description: 'Perfect for small businesses starting with form-triggered AI calling.',
    features: ['Up to 500 form-triggered calls/month', '1 form type / call flow', 'CRM webhook integration', 'Basic analytics dashboard', 'Email call summaries', '1 language', 'Voicemail + follow-up retry'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    price: '$1,999',
    period: '/month',
    description: 'For teams with multiple forms and high-volume lead follow-up.',
    features: ['Up to 5,000 form-triggered calls/month', '5 form types / call flows', 'Full CRM integration', 'Advanced analytics + A/B script testing', 'Call recordings & transcripts', '3 languages', 'Hot-lead human escalation', 'Monthly optimisation call'],
    cta: 'Get Growth Plan',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Unlimited forms, calls, and custom integrations for large operations.',
    features: ['Unlimited form-triggered calls', 'Unlimited form types & flows', 'Custom voice cloning', 'Full API + webhook access', 'Dedicated account manager', 'SLA support', 'HIPAA / GDPR compliance pack', 'Custom reporting & dashboards'],
    cta: "Let's Talk",
  },
];
