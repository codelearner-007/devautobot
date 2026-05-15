import './globals.css';
import { site } from '@/lib/site';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.phone,
        contactType: 'customer service',
      },
      sameAs: [
        site.social.instagram,
        site.social.facebook,
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { '@id': `${site.url}/#organization` },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(site.url),
  alternates: {
    canonical: '/',
  },
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'web development agency',
    'app development company',
    'mobile app development',
    'custom website design',
    'Next.js development',
    'React development',
    'Flutter app development',
    'web design Pakistan',
    'software development Lahore',
    'full stack development',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    title: `${site.name} — Web & App Development`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Web & App Development`,
    description: site.description,
    creator: site.social.twitter,
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '48x48', type: 'image/png' },
      { url: '/logo.png', sizes: '72x72', type: 'image/png' },
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/logo.png', sizes: '144x144', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
  },
  verification: {
    google: 'ZDQOMOH-jhq-wfkacKC--15OiRJ6oPPgmvAE1osPzsE',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
