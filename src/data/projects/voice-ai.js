import { SampleProject } from '@/lib/types';

export const voiceAiProjects: SampleProject[] = [
  {
    id: 'propconnect',
    title: 'PropConnect Realty',
    client: 'PropConnect Real Estate',
    industry: 'Real Estate',
    description:
      'AI calling agent handles inbound property inquiries, qualifies buyers based on budget/timeline/location criteria, books viewings directly into agent calendars, and sends instant follow-up summaries.',
    result: '300%',
    resultLabel: 'More Qualified Leads',
    tags: ['Lead Qualification', 'CRM Sync', 'Calendar API'],
    gradient: 'from-cyan-500/20 to-blue-600/10',
    icon: '🏠',
  },
  {
    id: 'medcare',
    title: 'MedCare Clinics',
    client: 'MedCare Health Group',
    industry: 'Healthcare',
    description:
      'Outbound AI agent calls patients 48 hours before appointments to confirm, reschedule if needed, and collect pre-visit intake information — fully HIPAA-aware conversation flows.',
    result: '40%',
    resultLabel: 'Reduction in No-shows',
    tags: ['Appointment Booking', 'HIPAA Flows', 'EHR Integration'],
    gradient: 'from-rose-500/20 to-red-600/10',
    icon: '🏥',
  },
  {
    id: 'insurefirst',
    title: 'InsureFirst Policies',
    client: 'InsureFirst Ltd.',
    industry: 'Insurance',
    description:
      'Renewal outreach agent proactively calls policyholders 30 days before expiry, answers FAQs, upsells add-ons, and routes complex queries to human agents — processing 5,000 calls/day.',
    result: '85%',
    resultLabel: 'Contact Rate',
    tags: ['Outbound Calling', 'Upsell Flows', 'Escalation Logic'],
    gradient: 'from-indigo-500/20 to-blue-700/10',
    icon: '📋',
  },
  {
    id: 'autoleads',
    title: 'AutoLeads Dealership',
    client: 'AutoLeads Group',
    industry: 'Automotive',
    description:
      'AI voice agent fields inbound dealership inquiries, qualifies leads on vehicle preferences and financing readiness, schedules test drives, and follows up with undecided prospects — running 24/7 across 12 showrooms.',
    result: '2.4x',
    resultLabel: 'Test Drives Booked',
    tags: ['Lead Nurturing', 'Multi-location', 'SMS Follow-up'],
    gradient: 'from-amber-500/20 to-orange-600/10',
    icon: '🚗',
  },
  {
    id: 'edureach',
    title: 'EduReach Academy',
    client: 'EduReach Online',
    industry: 'Education',
    description:
      'Outbound enrollment agent calls prospective students who submitted interest forms, answers course questions, handles objections, and transfers hot leads directly to admissions counselors — all in under 5 minutes of inquiry.',
    result: '68%',
    resultLabel: 'Enrollment Conversion',
    tags: ['Enrollment Flows', 'Objection Handling', 'Live Transfer'],
    gradient: 'from-violet-500/20 to-purple-600/10',
    icon: '🎓',
  },
];
