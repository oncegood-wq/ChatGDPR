import Link from 'next/link';

const services = [
  {
    title: 'Dokumentgranskning inför utlämnande',
    icon: '📄',
    description: 'Identifiering av personuppgifter, sekretessrisker och maskningsbehov innan offentlig utlämning eller publicering.',
    includes: [
      'AI-stödd identifiering av personuppgifter och känsliga uppgifter',
      'Manuell kvalitetssäkring av markerade risker',
      'Rekommendationer om möjliga maskningsbehov',
      'Markerad dokumentversion',
      'Kort riskrapport för intern hantering',
    ],
  },
  {
    title: 'GDPR-riskanalys',
    icon: '🔎',
    description: 'Granskning av dokument, rutiner och personuppgiftsbehandlingar med fokus på dataminimering och riskkontroll.',
    includes: [
      'Kartläggning av personuppgifter i underlaget',
      'Riskbild kopplad till GDPR-principer',
      'Genomgång av befintliga rutiner och mallar',
      'Prioriterade förbättringsförslag',
      'Underlag för fortsatt intern bedömning',
    ],
  },
  {
    title: 'Expressgranskning',
    icon: '⏱',
    description: 'Snabb bedömning av tidskritiska dokument där handläggningen behöver komma vidare med tydligt beslutsunderlag.',
    includes: [
      'Prioriterad genomgång av avgränsat underlag',
      'Fokuserade riskmarkeringar',
      'Kortfattade rekommendationer',
      'Möjlighet till muntlig genomgång',
      'Tydliga avgränsningar för fortsatt prövning',
    ],
  },
  {
    title: 'Utbildning och mallar',
    icon: '📚',
    description: 'Praktiskt stöd för handläggare, registratorer och jurister som vill stärka återkommande dokumentprocesser.',
    includes: [
      'Utbildningspass anpassade till verksamheten',
      'Checklistor för GDPR- och OSL-kontroll',
      'Mallar för intern dokumentgranskning',
      'Stöd vid införande av arbetsrutiner',
      'Uppföljning efter genomförd utbildning',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-primary to-blue-950 text-white section-padding">
        <div className="container-max">
          <p className="eyebrow text-green-300">Tjänster</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Specialiserat granskningsstöd för offentlig dokumenthantering.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Våra uppdrag avgränsas efter ärendetyp, sidmängd, risknivå och önskad leveransform.
            Resultatet är ett tydligt beslutsunderlag för organisationens egen sekretessprövning.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="card">
              <div className="text-4xl" aria-hidden="true">{service.icon}</div>
              <h2 className="mt-5 text-2xl font-bold text-primary">{service.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
              <div className="mt-6">
                <h3 className="font-bold text-primary">Kan omfatta:</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-accent">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn-primary mt-8 w-full">Begär offert</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="eyebrow">Viktiga avgränsningar</p>
            <h2 className="section-title mt-3">Tydligt beslutsstöd utan att ersätta myndighetens prövning.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['AI:n fattar inte beslut', 'AI används för att hitta möjliga risker snabbare, inte för att avgöra vad som ska lämnas ut.'],
              ['Rekommendationer, inte förelägganden', 'Leveransen beskriver risker och möjliga åtgärder som stöd för intern hantering.'],
              ['Ansvarig organisation avgör', 'Slutlig rättslig bedömning och sekretessprövning görs alltid av beställaren.'],
            ].map(([title, text]) => (
              <div key={title} className="card">
                <h3 className="font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
