import { SampleProject } from '@/lib/types';

export const automationProjects: SampleProject[] = [
  {
    id: 'retailx',
    title: 'RetailX Operations',
    client: 'RetailX Group',
    industry: 'Retail',
    description:
      'End-to-end automation of inventory management, purchase order generation, supplier communication, and weekly reporting — removing 40+ hours of manual work per week across 6 store locations.',
    result: '40hrs',
    resultLabel: 'Saved Weekly',
    tags: ['n8n', 'ERP Integration', 'Email Automation'],
    gradient: 'from-violet-500/20 to-purple-700/10',
    icon: '🏪',
  },
  {
    id: 'agencypro',
    title: 'AgencyPro CRM',
    client: 'AgencyPro Marketing',
    industry: 'Marketing Agency',
    description:
      'AI agent monitors new leads from all channels (ads, forms, social), enriches data, scores leads with GPT-4, triggers personalized email sequences, and updates HubSpot — zero manual input.',
    result: '3x',
    resultLabel: 'Lead Conversion Rate',
    tags: ['HubSpot', 'OpenAI', 'Multi-channel', 'Make'],
    gradient: 'from-cyan-500/20 to-teal-600/10',
    icon: '📈',
  },
  {
    id: 'fintrack',
    title: 'FinTrack Accounting',
    client: 'FinTrack SMB',
    industry: 'Finance',
    description:
      'Automated invoice processing pipeline: extracts data from PDF invoices via AI vision, matches to POs, flags discrepancies, posts to QuickBooks, and generates daily financial summaries — 99.2% accuracy.',
    result: '99.2%',
    resultLabel: 'Processing Accuracy',
    tags: ['AI Vision', 'QuickBooks', 'PDF Processing', 'Zapier'],
    gradient: 'from-amber-500/20 to-yellow-600/10',
    icon: '💰',
  },
];
