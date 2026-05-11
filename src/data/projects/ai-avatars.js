import { SampleProject } from '@/lib/types';

export const avatarProjects: SampleProject[] = [
  {
    id: 'techedu',
    title: 'TechEdu Academy',
    client: 'TechEdu Online',
    industry: 'E-learning',
    description:
      'A complete 50-course curriculum delivered by a custom AI instructor avatar — eliminating re-shoot costs, adding multilingual narration in 8 languages, and cutting production time from weeks to hours.',
    result: '90%',
    resultLabel: 'Production Cost Saved',
    tags: ['E-learning', 'Multi-language', '50 Courses'],
    gradient: 'from-blue-500/20 to-indigo-600/10',
    icon: '🎓',
  },
  {
    id: 'globalbank',
    title: 'GlobalBank Onboarding',
    client: 'GlobalBank FSG',
    industry: 'Finance',
    description:
      "AI brand spokesperson delivers personalized onboarding videos in 12 languages for new customers. Each video dynamically references the customer's name, account type, and region — generated in real time.",
    result: '12',
    resultLabel: 'Languages, Zero Reshoot',
    tags: ['Personalization', 'API-driven', '12 Languages'],
    gradient: 'from-emerald-500/20 to-green-700/10',
    icon: '🏦',
  },
  {
    id: 'fitpro',
    title: 'FitPro Workouts',
    client: 'FitPro App',
    industry: 'Health & Fitness',
    description:
      '500+ personalized workout instruction videos produced in under a week using AI trainer avatars. The app dynamically assembles workouts from individual exercise clips into custom routines per user.',
    result: '500+',
    resultLabel: 'Videos in 1 Week',
    tags: ['Dynamic Assembly', 'App Integration', 'Fitness'],
    gradient: 'from-orange-500/20 to-red-600/10',
    icon: '💪',
  },
];
