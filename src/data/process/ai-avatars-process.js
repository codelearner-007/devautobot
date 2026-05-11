import type { ProcessStep as Step } from '@/components/services/common/ServiceProcess';

export const steps: Step[] = [
  {
    number: '01',
    title: 'Choose or Create Your Avatar',
    description:
      'Select from our library of diverse, professional avatars — or we create a custom digital twin of your spokesperson in HD.',
    icon: 'UserCircle',
    accent: {
      text:   'text-pink-400',
      bg:     'bg-pink-500/10',
      border: 'border-pink-400/25',
      glow:   'rgba(244,114,182,0.22)',
      dot:    '#f472b6',
      bar:    'rgba(244,114,182,0.5)',
    },
    details: ['Library selection', 'Custom digital twin', 'HD quality', 'Likeness approval'],
  },
  {
    number: '02',
    title: 'Write or Upload Your Script',
    description:
      'Provide a script, upload a document, or give us a topic brief. Our copywriters can script the content for you.',
    icon: 'FileText',
    accent: {
      text:   'text-violet-400',
      bg:     'bg-violet-500/10',
      border: 'border-violet-400/25',
      glow:   'rgba(167,139,250,0.22)',
      dot:    '#a78bfa',
      bar:    'rgba(167,139,250,0.5)',
    },
    details: ['Script upload', 'Brief accepted', 'Copywriting option', 'Content review'],
  },
  {
    number: '03',
    title: 'Customise & Configure',
    description:
      'Choose language, voice tone, background, lower-thirds, and any brand overlays. Every detail is adjustable.',
    icon: 'Settings2',
    accent: {
      text:   'text-blue-400',
      bg:     'bg-blue-500/10',
      border: 'border-blue-400/25',
      glow:   'rgba(96,165,250,0.22)',
      dot:    '#60a5fa',
      bar:    'rgba(96,165,250,0.5)',
    },
    details: ['Language & voice', 'Background set', 'Brand overlays', 'Lower-thirds'],
  },
  {
    number: '04',
    title: 'Generate & Review',
    description:
      'The AI renders your video in minutes. Review it, request any tweaks, and approve.',
    icon: 'Sparkles',
    accent: {
      text:   'text-emerald-400',
      bg:     'bg-emerald-500/10',
      border: 'border-emerald-400/25',
      glow:   'rgba(52,211,153,0.22)',
      dot:    '#34d399',
      bar:    'rgba(52,211,153,0.5)',
    },
    details: ['Rendered in minutes', 'Review link sent', 'Revision rounds', 'Final approval'],
  },
  {
    number: '05',
    title: 'Deploy Anywhere',
    description:
      'Download the MP4, get an embed code, or connect to your platform via API for fully automated content generation.',
    icon: 'Globe',
    accent: {
      text:   'text-cyan-400',
      bg:     'bg-cyan-400/10',
      border: 'border-cyan-400/25',
      glow:   'rgba(34,211,238,0.22)',
      dot:    '#22d3ee',
      bar:    'rgba(34,211,238,0.5)',
    },
    details: ['MP4 download', 'Embed code', 'API access', 'Auto-generation ready'],
  },
];
