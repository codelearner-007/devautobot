/**
 * Real projects shown in the home page Portfolio section.
 * `href` is the public link; leave it null when the product has no public URL.
 * Each project has `slides` for the preview carousel:
 *   { kind: 'phone', src, alt }  - a portrait phone screenshot (1086x1448)
 *   { kind: 'logo', src, alt }   - a square app logo
 *   { kind: 'bookvault-summary', alt } - coded mock of the BookVault Summary screen
 */
export const projects = [
  {
    slug: 'ultimate-cashbook',
    title: 'Ultimate CashBook',
    subtitle: 'Cash Book & Expense Tracker',
    category: 'App Dev',
    type: 'Mobile App + Website',
    slides: [
      { kind: 'phone', src: '/portfolio/cashbook-books.png', alt: 'Ultimate CashBook: list of cash books with balances' },
      { kind: 'phone', src: '/portfolio/cashbook-cash-in.png', alt: 'Ultimate CashBook: adding a cash in entry' },
      { kind: 'phone', src: '/portfolio/cashbook-reports.png', alt: 'Ultimate CashBook: PDF and Excel reports' },
    ],
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
    slides: [
      { kind: 'bookvault-summary', alt: 'BookVault Summary screen with Balance Sheet and Profit and Loss' },
      { kind: 'logo', src: '/portfolio/bookvault-icon.png', alt: 'BookVault logo' },
    ],
    description:
      'Hosted double-entry accounting for small and medium businesses. Owners run several businesses, turn modules on per business (sales, purchases, banking, inventory, payroll, assets) and give staff per-tab View, Create, Edit and Delete access.',
    highlights: ['Double-entry ledger', 'Per-tab permissions', 'Invoices & reports', 'Multi-business'],
    tech: ['Next.js', 'React 19', 'FastAPI', 'PostgreSQL', 'Supabase'],
    href: 'https://app.bookvaultpk.workers.dev',
    linkLabel: 'Open App',
  },
];
