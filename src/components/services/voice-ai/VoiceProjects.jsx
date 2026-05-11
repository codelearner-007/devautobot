import { voiceAiProjects } from '@/data/projects/voice-ai';
import ServiceProjects from '@/components/services/common/ServiceProjects';

export default function VoiceProjects() {
  return <ServiceProjects projects={voiceAiProjects} />;
}
