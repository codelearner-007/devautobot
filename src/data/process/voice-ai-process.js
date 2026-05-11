export const steps = [
  {
    number: '01',
    title: 'Form Submitted',
    description:
      'A visitor fills out your website contact, quote, or service enquiry form. Their name, number, and answers are captured and sent to the AI agent in real time.',
    icon: 'ClipboardList',
    accent: {
      text:   'text-violet-400',
      bg:     'bg-violet-500/10',
      border: 'border-violet-400/25',
      glow:   'rgba(167,139,250,0.22)',
      dot:    '#a78bfa',
      bar:    'rgba(167,139,250,0.5)',
    },
    details: ['Name & number captured', 'Form answers stored', 'Agent briefed instantly', 'Trigger fired'],
  },
  {
    number: '02',
    title: 'AI Agent Calls — Within 60 Seconds',
    description:
      'The agent dials the lead immediately. It already knows their name, what service they asked about, and what they wrote in the form — so the call starts in context.',
    icon: 'PhoneCall',
    accent: {
      text:   'text-purple-400',
      bg:     'bg-purple-500/10',
      border: 'border-purple-400/25',
      glow:   'rgba(192,132,252,0.22)',
      dot:    '#c084fc',
      bar:    'rgba(192,132,252,0.5)',
    },
    details: ['Sub-60s response time', 'Context-aware intro', 'Natural voice tone', 'No rigid scripts'],
  },
  {
    number: '03',
    title: 'Qualifying Questions Asked',
    description:
      'The agent runs through your pre-defined qualification criteria — budget, timeline, specific requirements — in a natural back-and-forth conversation, not a rigid script.',
    icon: 'MessageSquare',
    accent: {
      text:   'text-blue-400',
      bg:     'bg-blue-500/10',
      border: 'border-blue-400/25',
      glow:   'rgba(96,165,250,0.22)',
      dot:    '#60a5fa',
      bar:    'rgba(96,165,250,0.5)',
    },
    details: ['Budget & timeline', 'Service requirements', 'Pain-point discovery', 'Live lead scoring'],
  },
  {
    number: '04',
    title: 'Action Taken On the Call',
    description:
      "Depending on the outcome: a meeting is booked in your calendar, a hot lead is transferred to your sales team, or a follow-up sequence is triggered if there's no answer.",
    icon: 'CalendarCheck',
    accent: {
      text:   'text-emerald-400',
      bg:     'bg-emerald-500/10',
      border: 'border-emerald-400/25',
      glow:   'rgba(52,211,153,0.22)',
      dot:    '#34d399',
      bar:    'rgba(52,211,153,0.5)',
    },
    details: ['Meeting auto-booked', 'Hot leads transferred', 'Follow-up triggered', 'No manual steps'],
  },
  {
    number: '05',
    title: 'Results Synced & Reported',
    description:
      'The full call transcript, lead score, form data, and next step are pushed to your CRM. You see every result in a single dashboard — no manual data entry needed.',
    icon: 'BarChart2',
    accent: {
      text:   'text-indigo-400',
      bg:     'bg-indigo-500/10',
      border: 'border-indigo-400/25',
      glow:   'rgba(129,140,248,0.22)',
      dot:    '#818cf8',
      bar:    'rgba(129,140,248,0.5)',
    },
    details: ['Full transcript saved', 'Lead score logged', 'CRM synced', 'Dashboard updated'],
  },
];
