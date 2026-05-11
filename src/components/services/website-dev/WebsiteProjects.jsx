import { websiteProjects } from '@/data/projects/website-dev';
import ServiceProjects from '@/components/services/common/ServiceProjects';

export default function WebsiteProjects() {
  return <ServiceProjects projects={websiteProjects} />;
}
