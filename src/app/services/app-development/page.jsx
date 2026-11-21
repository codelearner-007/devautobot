import AppDevHero from '@/components/services/AppDevHero';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceProjects from '@/components/services/ServiceProjects';
import AppCapabilitiesGrid from '@/components/services/app-development/AppCapabilitiesGrid';
import AppCommitment from '@/components/services/app-development/AppCommitment';
import AppTechStack from '@/components/services/app-development/AppTechStack';
import AppFaq from '@/components/services/app-development/AppFaq';
import AppCta from '@/components/services/app-development/AppCta';

export const metadata = {
  title: 'App Development Services',
  description: 'Cross-platform mobile apps for Android and iOS built with React Native and Expo, backed by FastAPI and Supabase. From MVP to full-scale product.',
};

export default function AppDevelopmentPage() {
  return (
    <main className="overflow-x-hidden">
      <AppDevHero />
      <AppCapabilitiesGrid />
      <ServiceProjects kind="app" />
      <AppCommitment />
      <AppTechStack />
      <AppFaq />
      <ServicePricing serviceType="app" />
      <AppCta />
    </main>
  );
}
