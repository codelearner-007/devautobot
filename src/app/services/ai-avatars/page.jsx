import { Metadata } from 'next';
import AvatarHero from '@/components/services/ai-avatars/AvatarHero';
import AvatarFeatures from '@/components/services/ai-avatars/AvatarFeatures';
import AvatarProcess from '@/components/services/ai-avatars/AvatarProcess';
import AvatarProjects from '@/components/services/ai-avatars/AvatarProjects';
import AvatarUseCases from '@/components/services/ai-avatars/AvatarUseCases';
import AvatarPricing from '@/components/services/ai-avatars/AvatarPricing';
import AvatarCTA from '@/components/services/ai-avatars/AvatarCTA';
import AvatarDemoWidget from '@/components/services/ai-avatars/AvatarDemoWidget';

export const metadata = {
  title: 'AI Avatars',
  description: 'Create photorealistic AI video avatars for your brand. Produce multilingual video content in minutes — no camera, no crew, no re-shoots.',
};

export default function AiAvatarsPage() {
  return (
    <main>
      <AvatarHero />
      <AvatarFeatures />
      <AvatarProcess />
      <div id="projects">
        <AvatarProjects />
      </div>
      <AvatarUseCases />
      <AvatarPricing />
      <AvatarCTA />
      <AvatarDemoWidget />
    </main>
  );
}
