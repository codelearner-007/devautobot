import AppDevHero from '@/components/services/AppDevHero';
import ServicePricing from '@/components/services/ServicePricing';
import AppCapabilitiesGrid from '@/components/services/app-development/AppCapabilitiesGrid';
import AppCommitment from '@/components/services/app-development/AppCommitment';
import AppTechStack from '@/components/services/app-development/AppTechStack';
import AppFaq from '@/components/services/app-development/AppFaq';
import AppCta from '@/components/services/app-development/AppCta';

export const metadata = {
  title: 'App Development Services',
  description: 'Cross-platform and native mobile app development for iOS and Android. Flutter, React Native, and more. From MVP to full-scale product.',
};

export default function AppDevelopmentPage() {
  return (
    <main className="overflow-x-hidden">
      <AppDevHero />
      <AppCapabilitiesGrid />
      <AppCommitment />
      <AppTechStack />
      <AppFaq />
      <ServicePricing serviceType="app" />
      <AppCta />
    </main>
  );
}
