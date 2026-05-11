import ServiceProcess from '@/components/services/common/ServiceProcess';
import { steps } from '@/data/process/ai-automation-process';

export default function AutomationProcess() {
  return (
    <ServiceProcess
      steps={steps}
      description="From audit to live automation — a structured rollout that eliminates risk and maximises ROI."
      footerNote="Typical delivery: 2–4 weeks"
      completionText="Automations live — your team focuses on what matters"
    />
  );
}
