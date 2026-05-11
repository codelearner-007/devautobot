import ServiceProcess from '@/components/services/common/ServiceProcess';
import { steps } from '@/data/process/ai-avatars-process';

export default function AvatarProcess() {
  return (
    <ServiceProcess
      steps={steps}
      description="From avatar selection to publish-ready video — in minutes, not days."
      footerNote="First video ready in minutes"
      completionText="Video live — publish or automate at scale"
    />
  );
}
