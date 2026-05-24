import Link from 'next/link';

const steps = [
  {
    title: 'Kunden skickar dokument via säker kanal',
    text: 'Vi kommer överens om omfattning, leveransform och säker överföring innan materialet skickas. PUB-avtal och NDA kan hanteras vid behov.',
  },
  {
    title: 'AI-stödd och manuell granskning',
    text: 'AI används för att hitta möjliga personuppgifter, känsliga uppgifter och sekretessrisker. En mänsklig granskare kvalitetssäkrar markeringarna.',
  },
  {
    title: 'Markerad version och kort riskrapport',
    text: 'Ni får tillbaka ett tydligt underlag med markeringar, risknivåer och rekommendationer för fortsatt intern hantering.',
  },
  {
    title: 'Organisationen fattar beslut',
    text: 'Beställaren gör själv den slutliga rättsliga bedömningen och beslutar om maskning, komplettering eller annan åtgärd.',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-primary to-blue-950 text-white section-padding">
        <div className="container-max">
          <p className="eyebrow text-green-300">Så fungerar det</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">En kontrollerad process från dokument till beslutsunderlag.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Processen är utformad för offentlig sektor: säker hantering, tydliga avgränsningar och mänsklig kvalitetssäkring.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <ol className="mx-auto max-w-4xl space-y-6">
            {steps.map((step, index) => (
              <li key={step.title} className="card flex flex-col gap-5 sm:flex-row">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-lg font-bold text-white">{index + 1}</span>
                <div>
                  <h2 className="text-2xl font-bold text-primary">{step.title}</h2>
                  <p className="mt-3 leading-7 text-slate-700">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="eyebrow">Kvalitetssäkring</p>
            <h2 className="section-title mt-3">AI-stödet används för effektivare granskning, inte för automatiserade beslut.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ['Riskmarkeringar', 'Möjliga uppgifter som bör bedömas inför utlämnande markeras tydligt.'],
                ['Rekommendationer', 'Rapporten anger varför en uppgift kan kräva särskild bedömning.'],
                ['Spårbarhet', 'Leveransen är strukturerad så att organisationen kan följa upp sina egna beslut.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Vill ni se hur en leverans kan se ut?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">Titta på vår fiktiva exempelgranskning eller boka en kort genomgång.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/example" className="btn-secondary">Se exempel</Link>
            <Link href="/contact#booking" className="inline-flex items-center justify-center rounded-md border border-white/35 px-5 py-3 font-bold text-white transition hover:bg-white/10">Boka genomgång</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
