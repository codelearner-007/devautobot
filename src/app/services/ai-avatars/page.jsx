import { Metadata } from 'next';

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
