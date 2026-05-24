import Link from 'next/link';

const footerLinks = [
  { href: '/services', label: 'Tjänster' },
  { href: '/how-it-works', label: 'Process' },
  { href: '/security', label: 'Säkerhet' },
  { href: '/pricing', label: 'Priser/offert' },
  { href: '/contact', label: 'Kontakt' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container-max grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-base font-bold text-primary">
              R
            </span>
            <span className="text-lg font-bold">Redaktionsstöd.se</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            AI-stött granskningsstöd för säker maskning och dokumenthantering enligt GDPR och OSL.
            Tjänsten är ett beslutsstöd och ersätter inte ansvarig organisations egen prövning.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Sidor</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Kontakt</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>info@redaktionsstod.se</p>
            <p>+46 (0)70 123 45 67</p>
            <p>Säker överföring av dokument avtalas inför uppdrag.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-max text-xs text-slate-400">
          © 2026 Redaktionsstöd.se. Fiktiv MVP för konsulttjänst inom dokumentgranskning.
        </div>
      </div>
    </footer>
  );
}
