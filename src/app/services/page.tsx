'use client';

export default function Services() {
  const services = [
    {
      title: 'Dokumentgranskning inför utlämnande',
      icon: '📄',
      description: 'Identifiering av personuppgifter, sekretessrisker och maskningsbehov innan offentlig utlämnande.',
      features: [
        'AI-assisterad identifiering av personuppgifter',
        'Sekretessriskanalys enligt svensk lag',
        'Rekommendation om maskningsbehov',
        'Markerad dokumentversion',
        'Kort riskrapport',
      ],
      price: 'Från 5 000 kr',
      timeline: 'Leverans inom 5-10 arbetsdagar',
    },
    {
      title: 'GDPR-riskanalys',
      icon: '🔍',
      description: 'Genomgripande granskning av rutiner, dokument och personuppgiftsbehandlingar.',
      features: [
        'Kartläggning av personuppgiftsbehandlingar',
        'Riskanalys enligt GDPR-krav',
        'Granskning av sekretessrutiner',
        'Dokumentsammanfattning',
        'Rekommendationer för förbättring',
      ],
      price: 'Från 15 000 kr',
      timeline: 'Leverans inom 2-3 veckor',
    },
    {
      title: 'Expressgranskning',
      icon: '⚡',
      description: 'Snabb bedömning av tidskritiska dokument när tiden är knapp.',
      features: [
        'Prioriterad handläggning',
        'Samma dag-leverans möjlig',
        'Fokuserad riskanalys',
        'Telefonisk genomgång',
        'Rekommendationer för maskning',
      ],
      price: 'Från 3 000 kr',
      timeline: 'Leverans samma dag eller nästa dag',
    },
    {
      title: 'Utbildning och mallar',
      icon: '📚',
      description: 'Praktiskt stöd för handläggare och jurister – långsiktig säkerhet.',
      features: [
        'Skräddarsydd utbildning',
        'Praktiska mallar för dokumentgranskning',
        'Checklistor för GDPR-kontroll',
        'Löpande stöd och rådgivning',
        'Uppdateringar vid lagändringar',
      ],
      price: 'Från 20 000 kr/år',
      timeline: 'Löpande stöd',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Våra tjänster
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Välj den tjänst som passar dina behov. Alla tjänster inkluderar säker dokumenthantering och kvalitetssäkring.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3">Inkluderar:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-accent mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4 mb-4">
                  <p className="text-lg font-bold text-primary mb-1">{service.price}</p>
                  <p className="text-sm text-gray-600">{service.timeline}</p>
                </div>

                <a href="/contact" className="btn-primary w-full text-center">
                  Begär offert
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">Våra principer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Inget AI-träning', desc: 'Dina dokument används aldrig för att träna AI-modeller.' },
              { title: 'Du fattar besluten', desc: 'Vi ger rekommendationer. Du gör den slutliga juridiska bedömningen.' },
              { title: 'Säker miljö', desc: 'EU-baserad infrastruktur med säkerhetscertifiering.' },
              { title: 'Transparent prissättning', desc: 'Inga dolda kostnader. Fast pris för definierad tjänst.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-gray-200">
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
