import type { ServiceFeature } from '@/components/services/common/ServiceFeatures';

export const aiAutomationFeatures: ServiceFeature[] = [
  {
    icon: 'Bot',
    title: 'Multi-Step Agent Pipelines',
    description:
      'Build AI agents that chain multiple tasks together — reading emails, extracting data, making decisions, and triggering actions without any human in the loop.',
    stat: '∞',
    statLabel: 'Steps automated',
  },
  {
    icon: 'Zap',
    title: 'Instant Workflow Triggers',
    description:
      'Kick off automation the moment something happens — form submission, CRM update, email received, or API webhook — with zero manual intervention.',
    stat: '< 1s',
    statLabel: 'Trigger time',
  },
  {
    icon: 'Brain',
    title: 'Intelligent Decision Making',
    description:
      'Agents analyse context, apply rules, and choose the right action dynamically — qualifying leads, routing tickets, or escalating issues with human-level judgement.',
    stat: 'AI',
    statLabel: 'Driven logic',
  },
  {
    icon: 'Mail',
    title: 'Automated Email & Outreach',
    description:
      'Draft, personalise, and send emails automatically based on triggers — follow-ups, confirmations, nurture sequences — with the right tone for every recipient.',
    stat: '100%',
    statLabel: 'Personalised',
  },
  {
    icon: 'Database',
    title: 'Data Extraction & Enrichment',
    description:
      'Pull structured data from unstructured sources — PDFs, emails, web pages — and enrich it with third-party data before writing it to your CRM or database.',
    stat: 'Auto',
    statLabel: 'Data pipeline',
  },
  {
    icon: 'Webhook',
    title: 'Deep System Integration',
    description:
      'Connect to any tool via REST API, Zapier, Make, or native integrations — HubSpot, Salesforce, Notion, Slack, Google Workspace, and hundreds more.',
    stat: '500+',
    statLabel: 'Integrations',
  },
  {
    icon: 'Clock',
    title: 'Scheduled & Recurring Tasks',
    description:
      'Run automations on a schedule — daily reports, weekly digests, monthly data syncs — or set time-based triggers so nothing slips through the cracks.',
    stat: '24/7',
    statLabel: 'Always running',
  },
  {
    icon: 'BarChart2',
    title: 'Automation Analytics & Logs',
    description:
      'Monitor every run with detailed logs, success rates, and error traces. Spot bottlenecks, track time saved, and prove ROI with a real-time dashboard.',
    stat: 'Real-time',
    statLabel: 'Monitoring',
  },
  {
    icon: 'Shield',
    title: 'Secure & Compliant Execution',
    description:
      'Automations run in isolated, audited environments with role-based access, encrypted credentials, and full execution logs to meet enterprise compliance requirements.',
    stat: 'SOC 2',
    statLabel: 'Compliant',
  },
];
