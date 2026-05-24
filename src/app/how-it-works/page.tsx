'use client';

export default function HowItWorks() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Så fungerar tjänsten
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            En enkel fyra-stegsprocess från dokumentöverföring till slutlig bedömning.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {[
              {
                step: 1,
                title: 'Kunden skickar dokument',
                desc: 'Dina dokument skickas via en säker kryppterad kanal. Vi tar emot PDF:er och Word-dokument.',
                details: '• Enkelt att ladda upp flera dokument åt gången\n• Automatisk kryptering under överföring\n• Vi sparar inte duplikat',
              },
              {
                step: 2,
                title: 'Vi granskar – AI-stödd och manuell',
                desc: 'Vår AI-modell identifierar potentiella personuppgifter. En jurist kontrollerar resultaten.',
                details: '• AI markerar möjliga risker\n• Juridisk kontroll för ökning av säkerhet\n• Sekretessanalys enligt OSL och GDPR',
              },
              {
                step: 3,
                title: 'Du får markerad version och rapport',
                desc: 'Du får samma dokument tillbaka med riskmarkeringar och en kort sammanfattning.',
                details: '• Dokument med visuella markeringar av risker\n• Kort riskrapport med rekommendationer\n• Telefonisk genomgång om du önskar',
              },
              {
                step: 4,
                title: 'Du fattar det slutliga beslutet',
                desc: 'Du utvärderar riskerna och beslutar om maskning, sparande eller publicering.',
                details: '• Vi fattar ingen juridisk bedömning\n• Du har full kontroll över dina dokument\n• Vi rekommenderar åtgärder, inte tvångsåtgärder',
              },
            ].map((item) => (
              <div key={item.step} className="mb-12 pb-12 border-b border-gray-200 last:border-b-0">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-lg font-bold">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.desc}</p>
                    <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 whitespace-pre-wrap font-mono">
                      {item.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">Det viktiga att veta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI fattar inte juridiska beslut',
                desc: 'Vår AI är ett verktyg för att identifiera möjliga risker. En jurist granskar alltid resultaten före leverans.',
              },
              {
                title: 'Dina dokument är säkra',
                desc: 'Dokument lagras krypterat och raderas enligt avtal. Vi tränar aldrig vår AI på dina dokument.',
              },
              {
                title: 'Du har alltid sista ordet',
                desc: 'Du beslutar själv om vilka markeringar som ska åtgärdas. Vi ger rekommendationer, inte tvångsåtgärder.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo att komma igång?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Kontakta oss för en kostnadsfri konsultation. Vi svarar inom 24 timmar.
          </p>
          <a href="/contact" className="btn-secondary">
            Begär offert
          </a>
        </div>
      </section>
    </div>
  );
}
