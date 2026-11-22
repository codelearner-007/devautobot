/**
 * Real projects shown in the home page Portfolio section.
 * webSlides: 16:9 website screenshots shown in a browser frame (`srcDark` is used in dark mode).
 * appSlides: app screens in a device frame; empty hides the device.
 *   device 'phone' (default): 664x1334 screens with their own status bar. device 'tablet': 800x1280 (10:16) Android screens.
 * platforms: { name, kind: 'web' | 'app', live } - not-live platforms show as 'Coming soon'.
 * stack: { web, app } - what each part is built and hosted on; the home row shows both merged.
 * links: public website links (never labelled as an app); leave empty when there is no public URL.
 * playStore: { live, href } - shows a Google Play badge; 'Not live yet' until live.
 */
export const projects = [
  {
    slug: 'bookvault',
    title: 'BookVault',
    tagline: 'Online bookkeeping SaaS for small businesses',
    platforms: [{ name: 'SaaS Web App', kind: 'web', live: true }, { name: 'Android App', kind: 'app', live: false }],
    domain: 'bookvaultapp.com',
    description:
      'A hosted, multi-tenant accounting platform with proper double-entry books. Owners run several businesses from one account, switch modules on per business and give each team member exactly the access they need. An Android app on the same backend and permissions is in development.',
    features: [
      'Invoices, receipts & payments',
      'Bank, inventory & payroll',
      'Balance sheet and P&L reports',
      'Per-module staff permissions',
      'Two-step sign-in & encrypted backups',
      'Light and dark themes',
    ],
    stack: {
      web: ['Next.js', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Supabase Auth', 'Cloudflare Workers', 'Render'],
      app: ['React Native (Expo)', 'FastAPI', 'PostgreSQL', 'Supabase Auth', 'Render', 'Expo EAS'],
    },
    webSlides: [
      { src: '/portfolio/bookvault-site-light.webp', srcDark: '/portfolio/bookvault-site-dark.webp', alt: 'BookVault landing page' },
      { src: '/portfolio/bookvault-dashboard-light.webp', srcDark: '/portfolio/bookvault-dashboard-dark.webp', alt: 'BookVault business Summary with Balance Sheet and Profit and Loss' },
    ],
    device: 'tablet',
    appSlides: [
      { src: '/portfolio/bookvault-tab-summary.webp', alt: 'BookVault on a tablet: business Summary with Balance Sheet' },
      { src: '/portfolio/bookvault-tab-new-invoice.webp', alt: 'BookVault on a tablet: new sales invoice' },
      { src: '/portfolio/bookvault-tab-reports.webp', alt: 'BookVault on a tablet: reports library' },
      { src: '/portfolio/bookvault-tab-add-user.webp', alt: 'BookVault on a tablet: adding a user with per-tab access' },
      { src: '/portfolio/bookvault-tab-create-business.webp', alt: 'BookVault Android app: creating a business with a ready chart of accounts' },
    ],
    links: [{ label: 'Visit Website', href: 'https://bookvaultapp.com' }],
    playStore: { live: false },
  },
  {
    slug: 'ultimate-cashbook',
    title: 'Ultimate CashBook',
    tagline: 'Daily cash book & expense tracker',
    platforms: [{ name: 'Website', kind: 'web', live: true }, { name: 'Android App', kind: 'app', live: false }],
    domain: 'ultimatecashbook.com',
    description:
      'An offline-first mobile app for tracking daily income and expenses. Users keep several cash books, log cash in and cash out in seconds, manage customers and suppliers, and share PDF or Excel reports. Its marketing website is live, and the Android app is getting ready for Google Play.',
    features: [
      'Multiple cash books',
      'Cash in / cash out in seconds',
      'Customers, suppliers & categories',
      'PDF and Excel reports',
      'Works fully offline',
      'Local backup & restore',
    ],
    stack: {
      web: ['Next.js', 'Tailwind CSS', 'Vercel'],
      app: ['React Native (Expo)', 'FastAPI', 'Supabase', 'Render', 'Expo EAS', 'Expo Push'],
    },
    webSlides: [
      { src: '/portfolio/cashbook-site.webp', alt: 'Ultimate CashBook marketing website' },
    ],
    appSlides: [
      { src: '/portfolio/cashbook-app-books.webp', alt: 'Ultimate CashBook: list of cash books with total balance' },
      { src: '/portfolio/cashbook-app-cash-in.webp', alt: 'Ultimate CashBook: adding a cash in entry' },
      { src: '/portfolio/cashbook-app-reports.webp', alt: 'Ultimate CashBook: reports with PDF and Excel export' },
    ],
    links: [{ label: 'Visit Website', href: 'https://ultimatecashbook.com' }],
    playStore: { live: false },
  },
  {
    slug: 'thrift-by-sheri',
    title: 'Thrift by Sheri',
    tagline: 'Online store for a preloved-fashion brand',
    platforms: [{ name: 'E-commerce Website', kind: 'web', live: true }, { name: 'Admin Dashboard', kind: 'web', live: true }],
    domain: 'shop.thriftbysheri.workers.dev',
    description:
      'A mobile-first shop for an Instagram thrift brand. Customers browse hand-picked pieces, pay by bank or wallet transfer and upload the receipt. The owner verifies receipts, tracks every cart and order, and manages products from her own dashboard.',
    features: [
      'Hand-picked catalogue with live stock',
      'Bank / wallet transfer with receipt upload',
      'Receipt verification by the owner',
      'Order tracking from cart to delivery',
      'Verified-buyer reviews and likes',
      'Owner-editable brand colours, light & dark',
    ],
    stack: {
      web: ['Next.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL (RLS)', 'Cloudflare Workers', 'Cloudflare R2'],
    },
    webSlides: [
      { src: '/portfolio/thrift-site-light.webp', srcDark: '/portfolio/thrift-site-dark.webp', alt: 'Thrift by Sheri storefront home page' },
      { src: '/portfolio/thrift-shop-light.webp', srcDark: '/portfolio/thrift-shop-dark.webp', alt: 'Thrift by Sheri: all pieces with search and filters' },
      { src: '/portfolio/thrift-product-light.webp', srcDark: '/portfolio/thrift-product-dark.webp', alt: 'Thrift by Sheri: product page with size, condition and stock' },
      { src: '/portfolio/thrift-admin-light.webp', srcDark: '/portfolio/thrift-admin-dark.webp', alt: 'Thrift by Sheri owner dashboard with sales and orders' },
      { src: '/portfolio/thrift-orders-light.webp', srcDark: '/portfolio/thrift-orders-dark.webp', alt: 'Thrift by Sheri: orders and carts with status filters' },
    ],
    appSlides: [],
    links: [{ label: 'Visit Shop', href: 'https://shop.thriftbysheri.workers.dev' }],
  },
];
