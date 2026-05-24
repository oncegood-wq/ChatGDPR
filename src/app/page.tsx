'use client';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-blue-900 text-white py-20 md:py-32">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Redaktionsstöd.se
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-8">
            AI-assisterad dokumentgranskning för svenska kommuner och
            myndigheter. Identifiera personuppgifter och sekretessrisker innan
            utlämnande.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/services" className="btn-primary">
              Våra tjänster
            </a>
            <a href="/contact" className="btn-secondary">
              Kontakta oss
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">Varför Redaktionsstöd?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'AI-driven granskning',
                desc: 'Vår AI identifierar personuppgifter, hälsodata och sekretessrisker automatiskt.',
              },
              {
                icon: '⚖️',
                title: 'Juridisk kvalitetssäkring',
                desc: 'Varje granskning kontrolleras av en jurist med kunskap om svensk sekretesslagstiftning.',
              },
              {
                icon: '🔒',
                title: 'Säker hantering',
                desc: 'EU-baserad infrastruktur. Dina dokument används aldrig för AI-träning.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded border border-gray-200 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
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
            Kontakta oss för en kostnadsfri konsultation. Vi svarar inom 24
            timmar.
          </p>
          <a href="/contact" className="btn-secondary">
            Begär offert
          </a>
        </div>
      </section>
    </div>
  );
}
