import Link from 'next/link';

const findings = [
  ['Anna Svensson', 'Namn på enskild', 'Bör bedömas för maskning'],
  ['19751202-1234', 'Personnummer', 'Bör bedömas för maskning'],
  ['Storgatan 42, 171 00 Solna', 'Adressuppgift', 'Bör bedömas för maskning'],
  ['Fibromyalgi', 'Hälsouppgift', 'Bör bedömas för maskning'],
  ['Erik, född 2018-03-15', 'Uppgift om barn', 'Bör bedömas för maskning'],
  ['Bankgiro 5125-7890', 'Betalningsuppgift', 'Behöver särskild bedömning'],
];

export default function Example() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-primary to-blue-950 text-white section-padding">
        <div className="container-max">
          <p className="eyebrow text-green-300">Exempelgranskning</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Fiktiv demo av riskmarkeringar i ett beslutsunderlag.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Exemplet visar hur personuppgifter och andra uppgifter kan markeras som underlag för fortsatt
            intern bedömning. Texten är fiktiv och ska inte ses som juridisk rådgivning.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Fiktivt dokument</p>
                <h2 className="mt-1 text-2xl font-bold text-primary">Beslut om ekonomiskt stöd</h2>
              </div>
              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">Demo</span>
            </div>

            <div className="space-y-5 rounded-xl bg-white p-6 text-sm leading-7 text-slate-800 shadow-inner md:text-base">
              <p><strong>Ärendenummer:</strong> 2026-1234</p>
              <p>
                Sökande: <span className="risk-mark">Anna Svensson</span>, personnummer{' '}
                <span className="risk-mark">19751202-1234</span>. Postadress:{' '}
                <span className="risk-mark">Storgatan 42, 171 00 Solna</span>.
              </p>
              <p>
                Ärendet avser ansökan om ekonomiskt stöd. Sökande har uppgett månadsinkomst om
                18 500 kr och att hon är sjukskriven på grund av <span className="risk-mark">fibromyalgi</span>.
              </p>
              <p>
                I hushållet finns barnet <span className="risk-mark">Erik, född 2018-03-15</span>, inskriven
                i kommunal skola. Utbetalning föreslås till <span className="risk-mark">bankgiro 5125-7890</span>.
              </p>
              <p>
                Handläggaren föreslår bifall enligt gällande riktlinjer. Beslutet kan överklagas inom tre veckor.
              </p>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              Markerade delar betyder inte automatiskt att uppgiften ska maskas. De bör bedömas av ansvarig organisation utifrån ärendets sammanhang, OSL och GDPR.
            </p>
          </article>

          <aside className="space-y-5">
            <div className="card">
              <p className="eyebrow">Riskmarkeringar</p>
              <h2 className="mt-3 text-2xl font-bold text-primary">Bör bedömas för maskning</h2>
              <div className="mt-6 space-y-3">
                {findings.map(([text, type, recommendation]) => (
                  <div key={text} className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <p className="font-bold text-slate-900">{text}</p>
                    <p className="mt-1 text-sm text-slate-700">{type}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-900">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
            <p className="eyebrow">Exempel på rapporttext</p>
            <h2 className="section-title mt-3">Rekommendationer för intern bedömning.</h2>
            <div className="mt-6 space-y-4 leading-7 text-slate-700">
              <p>
                Personnummer, hälsouppgift och uppgifter om barn bör särskilt bedömas inför utlämnande.
                Adress- och betalningsuppgifter kan kräva maskning beroende på ärendets sammanhang och mottagare.
              </p>
              <p className="rounded-xl border-l-4 border-l-primary bg-blue-50 p-5 text-sm">
                Redaktionsstöd.se lämnar riskmarkeringar och rekommendationer. Slutlig rättslig bedömning,
                sekretessprövning och beslut om maskning görs alltid av ansvarig organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Vill ni granska ett verkligt dokumentflöde?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">Boka en genomgång så går vi igenom hur uppdraget kan avgränsas.</p>
          <Link href="/contact#booking" className="btn-secondary mt-8">Boka genomgång</Link>
        </div>
      </section>
    </div>
  );
}
