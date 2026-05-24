import Link from 'next/link';

const audiences = ['Kommuner', 'Myndigheter', 'Regioner', 'Universitet', 'Offentligt finansierade organisationer'];

const servicePackages = [
  {
    title: 'Dokumentgranskning inför utlämnande',
    text: 'Identifiering av personuppgifter, sekretessrisker och möjliga maskningsbehov inför offentlig utlämning.',
  },
  {
    title: 'GDPR-riskanalys',
    text: 'Granskning av dokument, rutiner och personuppgiftsbehandlingar med tydliga rekommendationer.',
  },
  {
    title: 'Expressgranskning',
    text: 'Snabb bedömning av tidskritiska dokument när ärenden behöver drivas vidare utan onödigt dröjsmål.',
  },
  {
    title: 'Utbildning och mallar',
    text: 'Praktiskt stöd för handläggare, registratorer och jurister som vill stärka återkommande rutiner.',
  },
];

const principles = [
  'AI:n fattar inte beslut.',
  'Tjänsten lämnar riskmarkeringar och rekommendationer.',
  'Slutlig rättslig bedömning görs alltid av ansvarig organisation.',
  'Dokument används inte för AI-träning.',
];

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 text-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(74,155,111,0.26),_transparent_38%)] lg:block" />
        <div className="container-max relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow text-green-300">Redaktionsstöd för offentlig sektor</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              AI-stött granskningsstöd för säker maskning och dokumenthantering enligt GDPR och OSL.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Redaktionsstöd.se hjälper offentliga verksamheter att identifiera personuppgifter,
              sekretessrisker och maskningsbehov före utlämnande eller publicering av dokument.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-secondary">
                Begär offert
              </Link>
              <Link href="/contact#booking" className="inline-flex items-center justify-center rounded-md border border-white/35 px-5 py-3 font-bold text-white transition hover:bg-white/10">
                Boka genomgång
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-xl bg-white p-6 text-slate-900 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Granskningsrapport</p>
              <h2 className="mt-3 text-2xl font-bold text-primary">Riskmarkeringar, inte beslut</h2>
              <div className="mt-6 space-y-4">
                {principles.map((principle) => (
                  <div key={principle} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                    <p className="text-sm leading-6 text-slate-700">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Målgrupp</p>
              <h2 className="section-title mt-3">För organisationer med ansvar för offentlighet, sekretess och dataskydd.</h2>
              <p className="section-lead">
                Tjänsten är utformad för saklig handläggning där spårbarhet, kvalitetssäkring och
                tydliga rekommendationer är viktigare än automatiserade beslut.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience} className="card flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">✓</span>
                  <span className="font-bold text-primary">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="eyebrow">Tjänstepaket</p>
            <h2 className="section-title mt-3">Granskningsstöd anpassat för ärendets omfattning.</h2>
            <p className="section-lead">
              Välj ett av våra paket eller kombinera dokumentgranskning, riskanalys och utbildning
              i ett uppdrag med tydlig leveransbeskrivning.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {servicePackages.map((service) => (
              <article key={service.title} className="card">
                <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{service.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="btn-outline">
              Läs mer om tjänsterna
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Process</p>
              <h2 className="section-title mt-3">Från säker överföring till användbar riskrapport.</h2>
              <p className="section-lead">
                Arbetet är enkelt för beställaren och tydligt avgränsat: vi levererar markerat underlag
                och rekommendationer, ni fattar beslut om eventuell maskning eller annan åtgärd.
              </p>
            </div>
            <ol className="grid gap-4">
              {[
                'Kunden skickar dokument via säker kanal.',
                'Vi gör AI-stödd och manuell granskning.',
                'Kunden får markerad version och kort riskrapport.',
                'Kunden fattar själv beslut om eventuell maskning eller åtgärd.',
              ].map((step, index) => (
                <li key={step} className="card flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-2 font-semibold text-slate-800">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white section-padding">
        <div className="container-max grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow text-green-300">Nästa steg</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Behöver ni granska dokument inför utlämnande?</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">
              Beskriv ärendet, sidmängden och önskad svarstid så återkommer vi med ett avgränsat upplägg.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-secondary">Begär offert</Link>
            <Link href="/example" className="inline-flex items-center justify-center rounded-md border border-white/35 px-5 py-3 font-bold text-white transition hover:bg-white/10">
              Se exempel
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
