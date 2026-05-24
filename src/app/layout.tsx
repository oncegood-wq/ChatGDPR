import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Redaktionsstöd.se – AI-assisterad dokumentgranskning',
  description:
    'Säker granskning av dokument inför offentligt utlämnande. GDPR, OSL och sekretessanalys för svenska kommuner och myndigheter.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
