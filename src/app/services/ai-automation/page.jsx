import AutomationHero from '@/components/services/ai-automation/AutomationHero';
import AutomationFeatures from '@/components/services/ai-automation/AutomationFeatures';
import AutomationProcess from '@/components/services/ai-automation/AutomationProcess';
import AutomationProjects from '@/components/services/ai-automation/AutomationProjects';
import AutomationUseCases from '@/components/services/ai-automation/AutomationUseCases';
import AutomationPricing from '@/components/services/ai-automation/AutomationPricing';
import AutomationCTA from '@/components/services/ai-automation/AutomationCTA';

export const metadata = {
  title: 'AI Agents & Automation',
  description: 'Eliminate repetitive work with intelligent AI automation. We build multi-step agent pipelines that handle emails, data processing, scheduling, and decisions — while you focus on growth.',
};

export default function AiAutomationPage() {
  return (
    <main>
      <AutomationHero />
      <AutomationFeatures />
      <AutomationProcess />
      <div id="projects">
        <AutomationProjects />
      </div>
      <AutomationUseCases />
      <AutomationPricing />
      <AutomationCTA />
    </main>
  );
}
