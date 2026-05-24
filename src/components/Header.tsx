import Link from 'next/link';

const navigation = [
  { href: '/services', label: 'Tjänster' },
  { href: '/how-it-works', label: 'Så fungerar det' },
  { href: '/security', label: 'Säkerhet & sekretess' },
  { href: '/example', label: 'Exempelgranskning' },
  { href: '/pricing', label: 'Priser/offert' },
  { href: '/contact', label: 'Kontakt' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-max flex min-h-20 flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="Redaktionsstöd.se startsida">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-lg font-bold text-white shadow-sm">
            R
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight text-primary">Redaktionsstöd.se</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              GDPR & OSL
            </span>
          </span>
        </Link>

        <nav aria-label="Huvudnavigation" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-slate-700">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary text-sm">
            Begär offert
          </Link>
          <Link href="/contact#booking" className="btn-outline text-sm">
            Boka genomgång
          </Link>
        </div>
      </div>
    </header>
  );
}
