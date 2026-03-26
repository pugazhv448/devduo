import type { Metadata } from 'next';
import '../styles/globals.css';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';

import NoiseOverlay from '@/components/ui/NoiseOverlay';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Devduo — Crafted for Growth',
  description: 'Devduo builds premium websites for local businesses in Chennai. Modern, fast, conversion-focused web design.',
  keywords: 'web design Chennai, website development, local business website, Devduo, gym website Chennai, landing page',
  openGraph: {
    title: 'Devduo — Crafted for Growth',
    description: 'Premium websites for local businesses.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <NoiseOverlay />

        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
