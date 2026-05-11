import ServiceFeatures from '@/components/services/common/ServiceFeatures';
import { aiAutomationFeatures } from '@/data/features/ai-automation';

export default function AutomationFeatures() {
  return (
    <ServiceFeatures
      features={aiAutomationFeatures}
      sectionLabel="Key Features"
      heading={<>Automation Built to <span className="gradient-text">Work While You Sleep</span></>}
      description="Every feature is designed to eliminate repetitive work, reduce errors, and free your team to focus on what only humans can do."
      ctaHref="/contact"
      ctaLabel="Learn more"
    />
  );
}
