import type { ServiceFeature } from '@/components/services/common/ServiceFeatures';

export const voiceAiCallingFeatures = [
  {
    icon: 'Zap',
    title: 'Instant Form Trigger',
    description: 'The moment a form is submitted on your website, the AI agent fires an outbound call — typically within 60 seconds, before the lead goes cold.',
    stat: '< 60s',
    statLabel: 'Response time',
  },
  {
    icon: 'FileText',
    title: 'Context-Aware Conversations',
    description: 'The agent reads the form data before dialling. It greets the caller by name and references their exact inquiry — making the call feel personal, not automated.',
    stat: '100%',
    statLabel: 'Personalised',
  },
  {
    icon: 'MessageSquare',
    title: 'Smart Qualifying Questions',
    description: 'Based on what the lead wrote in the form, the agent asks the right follow-up questions — budget, timeline, decision maker — in natural conversational language.',
    stat: '5+',
    statLabel: 'Auto questions',
  },
  {
    icon: 'CalendarCheck',
    title: 'Live Appointment Booking',
    description: 'Integrates with Google Calendar, Calendly, or your booking system to lock in a meeting during the call, while the lead is engaged and ready.',
    stat: '24/7',
    statLabel: 'Booking active',
  },
  {
    icon: 'BarChart2',
    title: 'Lead Scoring & Outcome Logging',
    description: 'Every call is scored automatically. Outcomes (qualified, not interested, booked, voicemail) are logged with a full transcript for your sales team to review.',
    stat: 'Auto',
    statLabel: 'Call scoring',
  },
  {
    icon: 'RefreshCw',
    title: 'Intelligent Follow-up Loop',
    description: 'No answer? The agent retries at optimal intervals, then switches to SMS or email follow-up — so no form submission ever falls through the cracks.',
    stat: '0',
    statLabel: 'Leads missed',
  },
  {
    icon: 'Database',
    title: 'CRM Auto-sync',
    description: 'Call notes, lead scores, form data, and next actions are automatically written to HubSpot, Salesforce, or any CRM the moment the call ends.',
    stat: 'Real-time',
    statLabel: 'Data sync',
  },
  {
    icon: 'Headphones',
    title: 'Hot-lead Human Escalation',
    description: 'When a caller is ready to buy or has a complex need, the agent transfers them to a live human agent instantly — with a full context handoff so nothing is repeated.',
    stat: 'Instant',
    statLabel: 'Live handoff',
  },
  {
    icon: 'Globe',
    title: 'Multi-language Support',
    description: "Automatically detects the caller's preferred language from their form input or voice, and switches to English, Urdu, Arabic, Spanish, French, and 40+ others.",
    stat: '40+',
    statLabel: 'Languages',
  },
];
