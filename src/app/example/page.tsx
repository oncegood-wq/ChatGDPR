'use client';

export default function Example() {
  const exampleText = `BESLUT OM BIDRAG
Datum: 2026-05-15
Ärendenummer: 2026-1234

Sökande: Anna Svensson, personnummer 197512021234
Postadress: Storgatan 42, 171 00 Solna

Beslut: Beviljade bidrag enligt Socialstyrelsens riktlinjer för ekonomiskt stöd.

Ärendet avser ansökan om stöd enligt Socialstyrelsens anvisningar. Efter granskning av förelagda handlingar och personlig intervju den 2026-05-10 med sökande vid Stadshuset sal 302 framgår följande:

Sökande har uppgett sin månadsinkomst till 18 500 kr brutto samt att hon bor tillsammans med sin make Jan Svensson, personnummer 196811051567, som har månadsinkomst på 22 000 kr. Maken arbetar som systemadministratör på TechCorp AB, org.nr 556677123456. Sökande själv är sjukskriven sedan januari 2026 på grund av fibromyalgi.

Familjen har två barn: Erik Svensson född 2018-03-15 och Sofia Svensson född 2020-07-22. Barnen är inskrivna på Solna grundskola resp. förskola Äppelkärnor.

Efter prövning enligt GDPR artikel 5-8 och OSL 1 kap 1§ beviljas bidraget med 8 500 kr för perioden juni-december 2026.

Utbetalning sker till bankgiro 5125-7890 inom 5 arbetsdagar.

Beslutet kan överklagas inom 3 veckor.

Med vänlig hälsning,
Lars Blomqvist
Handläggare, Socialbyrån`;

  const highlights = [
    { text: 'Anna Svensson', type: 'Namn', risk: 'Högrisk' },
    { text: '197512021234', type: 'Personnummer', risk: 'Högrisk' },
    { text: 'Storgatan 42, 171 00 Solna', type: 'Adress', risk: 'Mediumrisk' },
    { text: 'Jan Svensson', type: 'Namn (make)', risk: 'Högrisk' },
    { text: '196811051567', type: 'Personnummer (make)', risk: 'Högrisk' },
    { text: 'TechCorp AB, org.nr 556677123456', type: 'Arbetsgivare', risk: 'Lågrisk' },
    { text: 'fibromyalgi', type: 'Hälsouppgift', risk: 'Högrisk' },
    { text: 'Erik Svensson', type: 'Barnets namn', risk: 'Högrisk' },
    { text: '2018-03-15', type: 'Barnets födelsedag', risk: 'Högrisk' },
    { text: '5125-7890', type: 'Bankgiro', risk: 'Mediumrisk' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Exempelgranskning
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Här ser du ett verkligt exempel på hur vår granskning fungerar. Namn och personnummer är ändrade för sekretess.
          </p>
        </div>
      </section>

      {/* Example */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Document */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">Granskad dokument</h2>
              <div className="bg-gray-50 p-8 rounded border-2 border-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto">
                {exampleText}
              </div>
              <p className="text-xs text-gray-600 mt-4">
                * Dokumentet är fiktivt men följer samma struktur som verkliga socialstyrelsebeslut.
              </p>
            </div>

            {/* Findings */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Markerad information</h2>
              <div className="space-y-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded text-xs ${
                      item.risk === 'Högrisk'
                        ? 'bg-red-50 border-l-4 border-red-500'
                        : item.risk === 'Mediumrisk'
                          ? 'bg-yellow-50 border-l-4 border-yellow-500'
                          : 'bg-green-50 border-l-4 border-green-500'
                    }`}
                  >
                    <div className="font-bold text-gray-900">{item.text}</div>
                    <div className="text-gray-700 mt-1">{item.type}</div>
                    <div
                      className={`mt-1 font-semibold ${
                        item.risk === 'Högrisk'
                          ? 'text-red-700'
                          : item.risk === 'Mediumrisk'
                            ? 'text-yellow-700'
                            : 'text-green-700'
                      }`}
                    >
                      {item.risk}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">Rekommendationer från granskning</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Bör maskeras innan utlämnande:</h3>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  <li>Personnummer (båda parter)</li>
                  <li>Namn på sökande och make</li>
                  <li>Namn på barn</li>
                  <li>Födelsedata för barn</li>
                  <li>Hälsouppgifter (fibromyalgi)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Kan lämnas utan maskning:</h3>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  <li>Arbetsgivarens namn och org.nr (offentlig information)</li>
                  <li>Beslutsdatum och ärendenummer</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded border-l-4 border-primary">
                <p className="text-sm text-gray-800">
                  <strong>Juridisk notering:</strong> Denna granskning är ett beslutsstöd. Den slutliga bedömningen om maskning görs av ansvarig organisation enligt OSL 2 kap 14§ och GDPR. Redaktionsstöd.se fattar ingen juridisk bedömning, utan presenterar risker som behöver hanteras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">Vad detta exempel visar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Automatisk identifiering',
                desc: 'AI identifierar personuppgifter, hälsodata och kontaktinformation automatiskt.',
              },
              {
                title: 'Risknivåer',
                desc: 'Olika typer av data får olika risknivåer baserat på sekretesslagstiftning.',
              },
              {
                title: 'Mänsklig kontroll',
                desc: 'En jurist granskar resultaten för att säkerställa korrekthet enligt svenska lagar.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded border border-gray-200">
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo att granska dina dokument?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Skicka dina dokument för granskning. Vi granskar och levererar en rapport inom några dagar.
          </p>
          <a href="/contact" className="btn-secondary">
            Begär offert
          </a>
        </div>
      </section>
    </div>
  );
}
