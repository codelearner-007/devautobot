import { Metadata } from 'next';
import VoiceHero from '@/components/services/voice-ai/VoiceHero';
import VoiceFeatures from '@/components/services/voice-ai/VoiceFeatures';
import VoiceProcess from '@/components/services/voice-ai/VoiceProcess';
import DemoAiVoiceCalling from '@/components/services/DemoAiVoiceCalling';
import VoiceProjects from '@/components/services/voice-ai/VoiceProjects';
import VoiceUseCases from '@/components/services/voice-ai/VoiceUseCases';
import VoicePricing from '@/components/services/voice-ai/VoicePricing';
import VoiceCTA from '@/components/services/voice-ai/VoiceCTA';

export const metadata = {
  title: 'Voice AI Calling Agents',
  description: 'AI phone agents that call your leads the moment they submit a form — qualifying, booking, and following up automatically so no lead ever goes cold.',
};

export default function VoiceAiPage() {
  return (
    <main>
      <VoiceHero />
      <VoiceFeatures />
      <VoiceProcess />
      <DemoAiVoiceCalling />
      <div id="projects">
        <VoiceProjects />
      </div>
      <VoiceUseCases />
      <VoicePricing />
      <VoiceCTA />
    </main>
  );
}
