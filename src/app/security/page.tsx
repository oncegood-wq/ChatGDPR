import Link from 'next/link';

const securityPoints = [
  {
    title: 'Säker överföring',
    text: 'Dokumentöverföring sker via avtalad säker kanal. E-post med känsliga bilagor undviks när uppdragets art kräver högre skyddsnivå.',
  },
  {
    title: 'Dokument används inte för AI-träning',
    text: 'Kundens dokument används endast för det avtalade granskningsuppdraget och inte för träning eller finjustering av AI-modeller.',
  },
  {
    title: 'Möjlighet till PUB-avtal och NDA',
    text: 'Personuppgiftsbiträdesavtal, sekretessförbindelser och särskilda instruktioner kan hanteras innan material delas.',
  },
  {
    title: 'EU-baserad drift kan avtalas',
    text: 'För uppdrag med särskilda krav kan drift, lagring och underbiträden begränsas till EU-baserade alternativ.',
  },
  {
    title: 'Åtkomst efter behov',
    text: 'Åtkomst till kundmaterial begränsas till personer som behöver underlaget för att utföra granskningen.',
  },
  {
    title: 'Radering enligt uppdrag',
    text: 'Bevarandeperiod, återlämning och radering regleras i uppdraget så att handlingar inte sparas längre än nödvändigt.',
  },
];

export default function Security() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-primary to-blue-950 text-white section-padding">
        <div className="container-max">
          <p className="eyebrow text-green-300">Säkerhet & sekretess</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Trygg dokumenthantering med tydliga avtal och avgränsningar.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Redaktionsstöd.se är utformat för uppdrag där dokument kan innehålla personuppgifter,
            känsliga uppgifter eller sekretessreglerad information.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="eyebrow">Skyddsåtgärder</p>
            <h2 className="section-title mt-3">Säkerheten anpassas efter uppdragets risknivå.</h2>
            <p className="section-lead">
              Varje uppdrag bör starta med en kort avstämning om materialets karaktär, önskad kanal,
              behörigheter, avtal och raderingsrutin.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {securityPoints.map((point) => (
              <article key={point.title} className="card border-l-4 border-l-accent">
                <h3 className="text-xl font-bold text-primary">{point.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Regelefterlevnad</p>
            <h2 className="section-title mt-3">Stöd för GDPR, OSL och intern styrning.</h2>
            <p className="section-lead">
              Tjänsten hjälper er att strukturera riskbedömningar. Den ersätter inte juridisk rådgivning,
              dataskyddsombudets roll eller myndighetens egen sekretessprövning.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['GDPR', 'Personuppgifter, känsliga uppgifter, dataminimering och dokumenterad hantering.'],
              ['OSL', 'Riskindikatorer som stöd inför sekretessbedömning och maskning.'],
              ['PUB-avtal', 'Möjlighet att reglera instruktioner, radering och underbiträden.'],
              ['NDA', 'Sekretessförbindelser kan tecknas inför granskning av känsligt material.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white section-padding">
        <div className="container-max grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Behöver ni särskilda säkerhetsvillkor?</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">Beskriv kraven i offertförfrågan så föreslår vi ett lämpligt upplägg.</p>
          </div>
          <Link href="/contact" className="btn-secondary">Begär offert</Link>
        </div>
      </section>
    </div>
  );
}
