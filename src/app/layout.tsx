import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Redaktionsstöd.se – AI-assisterad dokumentgranskning',
  description:
    'Säker granskning av dokument inför utlämnande. AI-assisterad identifiering av personuppgifter och sekretessrisker för svenska myndigheter och kommuner.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <header className="bg-primary text-white">
          <div className="container-max flex items-center justify-between py-4">
            <a href="/" className="text-xl font-bold">
              Redaktionsstöd.se
            </a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/services" className="hover:text-blue-200 transition">
                Tjänster
              </a>
              <a href="/how-it-works" className="hover:text-blue-200 transition">
                Så fungerar det
              </a>
              <a href="/example" className="hover:text-blue-200 transition">
                Exempel
              </a>
              <a href="/security" className="hover:text-blue-200 transition">
                Säkerhet
              </a>
              <a href="/contact" className="hover:text-blue-200 transition">
                Kontakt
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-primary text-white py-8">
          <div className="container-max text-center text-sm text-blue-200">
            <p>&copy; 2026 Redaktionsstöd.se. Alla rättigheter förbehållna.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
