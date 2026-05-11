import ServiceProcess from '@/components/services/common/ServiceProcess';
import { steps } from '@/data/process/voice-ai-process';

export default function VoiceProcess() {
  return (
    <ServiceProcess
      steps={steps}
      description="From form submission to booked meeting — fully automated, no human required."
      footerNote="Typical setup: 3–5 business days"
      completionText="Lead followed up — your calendar fills itself"
    />
  );
}
