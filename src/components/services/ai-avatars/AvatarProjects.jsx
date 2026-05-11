import { avatarProjects } from '@/data/projects/ai-avatars';
import ServiceProjects from '@/components/services/common/ServiceProjects';

export default function AvatarProjects() {
  return <ServiceProjects projects={avatarProjects} />;
}
