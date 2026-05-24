import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'Redaktionsstöd.se | GDPR- och dokumentgranskning för offentlig sektor',
    template: '%s | Redaktionsstöd.se',
  },
  description:
    'AI-stött granskningsstöd för säker maskning och dokumenthantering enligt GDPR och OSL för kommuner, myndigheter, regioner och offentligt finansierade organisationer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
