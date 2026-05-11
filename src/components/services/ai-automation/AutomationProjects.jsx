import { automationProjects } from '@/data/projects/ai-automation';
import ServiceProjects from '@/components/services/common/ServiceProjects';

export default function AutomationProjects() {
  return <ServiceProjects projects={automationProjects} />;
}
