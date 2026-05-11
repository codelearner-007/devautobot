import ServiceProcess from '@/components/services/common/ServiceProcess';
import { steps } from '@/data/process/website-dev-process';

export default function WebsiteProcess() {
  return (
    <ServiceProcess
      steps={steps}
      description="A clear, proven path from first conversation to full deployment."
      footerNote="Typical delivery: 3–6 weeks"
      completionText="Project complete — you own everything"
    />
  );
}
