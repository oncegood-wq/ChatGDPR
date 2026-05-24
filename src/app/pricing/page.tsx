import Link from 'next/link';

const priceItems = [
  {
    title: 'Dokumentgranskning',
    price: 'Offert efter sidmängd',
    description: 'För enskilda dokumentpaket inför utlämnande, publicering eller intern kvalitetssäkring.',
    bullets: ['Markerad version', 'Kort riskrapport', 'Rekommendationer för intern bedömning'],
  },
  {
    title: 'Expressgranskning',
    price: 'Prioriterad offert',
    description: 'För avgränsade och tidskritiska ärenden där snabb återkoppling behövs.',
    bullets: ['Prioriterad hantering', 'Avgränsat underlag', 'Möjlighet till muntlig genomgång'],
  },
  {
    title: 'Löpande stöd',
    price: 'Månads- eller ramavtal',
    description: 'För organisationer med återkommande behov av granskning, utbildning och mallstöd.',
    bullets: ['Överenskommen svarsnivå', 'Checklistor och mallar', 'Uppföljning och förbättringsförslag'],
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-primary to-blue-950 text-white section-padding">
        <div className="container-max">
          <p className="eyebrow text-green-300">Priser/offert</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Tydlig offert baserad på omfattning, risknivå och leveranskrav.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Priset påverkas av sidmängd, dokumenttyp, känslighetsgrad, svarstid och eventuella krav på avtal,
            säker överföring eller muntlig genomgång.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-6 lg:grid-cols-3">
          {priceItems.map((item) => (
            <article key={item.title} className="card flex flex-col">
              <h2 className="text-2xl font-bold text-primary">{item.title}</h2>
              <p className="mt-3 text-xl font-bold text-accent">{item.price}</p>
              <p className="mt-4 leading-7 text-slate-700">{item.description}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm leading-6 text-slate-700">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2"><span className="text-accent">✓</span>{bullet}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary mt-8">Begär offert</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Offertunderlag</p>
            <h2 className="section-title mt-3">Det här hjälper oss att ge en träffsäker offert.</h2>
            <p className="section-lead">
              Skicka inte känsliga dokument via kontaktformuläret. Beskriv ärendet på en övergripande nivå så kommer vi överens om säker kanal vid behov.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Typ av ärende och syfte med granskningen',
              'Ungefärlig sidmängd och dokumentformat',
              'Önskad svarstid och eventuell expresshantering',
              'Behov av PUB-avtal, NDA eller EU-baserad drift',
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white p-5 font-semibold text-primary shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
