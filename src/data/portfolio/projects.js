/**
 * Real projects shown in the home page Portfolio section.
 * `href` is the public link; leave it null when the product has no public URL.
 */
export const projects = [
  {
    slug: 'ultimate-cashbook',
    title: 'Ultimate CashBook',
    subtitle: 'Cash Book & Expense Tracker',
    category: 'App Dev',
    type: 'Mobile App + Website',
    image: '/portfolio/cashbook-books.png',
    imageAlt: 'Ultimate CashBook app showing the list of cash books',
    imageKind: 'screenshot',
    description:
      'Offline-first mobile app for tracking daily income and expenses. Users create multiple cash books, log cash in and cash out, manage customers, suppliers, categories and payment modes, and export PDF/Excel reports. Shipped with a marketing website.',
    highlights: ['Multiple cash books', 'PDF & Excel reports', 'Local backup', 'Light & dark mode'],
    tech: ['React Native', 'Expo', 'FastAPI', 'Supabase', 'Next.js'],
    href: 'https://ultimatecashbook.app',
    linkLabel: 'Visit Website',
  },
  {
    slug: 'bookvault',
    title: 'BookVault',
    subtitle: 'Multi-Tenant Accounting SaaS',
    category: 'Web Dev',
    type: 'SaaS Web App',
    image: '/portfolio/bookvault-icon.png',
    imageAlt: 'BookVault logo',
    imageKind: 'logo',
    description:
      'Hosted double-entry accounting for small and medium businesses. Owners run several businesses, turn modules on per business (sales, purchases, banking, inventory, payroll, assets) and give staff per-tab View, Create, Edit and Delete access.',
    highlights: ['Double-entry ledger', 'Per-tab permissions', 'Invoices & reports', 'Multi-business'],
    tech: ['Next.js', 'React 19', 'FastAPI', 'PostgreSQL', 'Supabase'],
    href: null,
    linkLabel: 'Request a Demo',
  },
];
