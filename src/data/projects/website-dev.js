import { SampleProject } from '@/lib/types';

export const websiteProjects: SampleProject[] = [
  {
    id: 'luxestay',
    title: 'LuxeStay Hotels',
    client: 'LuxeStay Group',
    industry: 'Hospitality',
    description:
      'Complete hotel chain website with custom booking engine, room configurator, multi-language support, and headless CMS. Integrated live availability from the property management system.',
    result: '+340%',
    resultLabel: 'Direct Bookings',
    tags: ['Next.js', 'Sanity CMS', 'Stripe', 'i18n'],
    gradient: 'from-amber-500/20 to-orange-600/10',
    icon: '🏨',
  },
  {
    id: 'greenmart',
    title: 'GreenMart E-commerce',
    client: 'GreenMart Organics',
    industry: 'E-commerce',
    description:
      'Full-stack e-commerce platform for 2,400+ organic products with AI-powered recommendations, subscription box builder, vendor marketplace, and real-time inventory tracking.',
    result: '$1.2M',
    resultLabel: 'Revenue in Year 1',
    tags: ['Shopify Plus', 'React', 'Tailwind', 'Algolia'],
    gradient: 'from-emerald-500/20 to-teal-600/10',
    icon: '🛒',
  },
  {
    id: 'techpulse',
    title: 'TechPulse SaaS',
    client: 'TechPulse Inc.',
    industry: 'SaaS',
    description:
      'High-converting SaaS marketing site with interactive product demo, animated feature showcase, ROI calculator, and seamless Stripe checkout — all in a blazing-fast 98 PageSpeed score.',
    result: '98/100',
    resultLabel: 'PageSpeed Score',
    tags: ['Next.js', 'Framer', 'Vercel', 'Analytics'],
    gradient: 'from-violet-500/20 to-purple-600/10',
    icon: '🚀',
  },
  {
    id: 'novalaw',
    title: 'NovaLaw Firm',
    client: 'NovaLaw Associates',
    industry: 'Legal',
    description:
      'Premium law firm website with practice area microsites, attorney profile system, secure client portal, and automated intake forms. Includes live chat integration and GDPR-compliant data handling.',
    result: '+220%',
    resultLabel: 'Client Inquiries',
    tags: ['Next.js', 'Prisma', 'Clerk Auth', 'Resend'],
    gradient: 'from-blue-500/20 to-indigo-600/10',
    icon: '⚖️',
  },
  {
    id: 'pulsefit',
    title: 'PulseFit Studio',
    client: 'PulseFit Wellness',
    industry: 'Health & Fitness',
    description:
      'Full gym & wellness platform with class scheduling, membership management, trainer booking, and a live-streamed workout library. PWA-enabled for seamless mobile access.',
    result: '4.9★',
    resultLabel: 'App Store Rating',
    tags: ['Next.js', 'Supabase', 'Stripe', 'PWA'],
    gradient: 'from-pink-500/20 to-rose-600/10',
    icon: '💪',
  },
];
