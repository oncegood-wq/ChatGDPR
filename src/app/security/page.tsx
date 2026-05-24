'use client';

export default function Security() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Säkerhet & sekretess
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Din säkerhet är vår högsta prioritet. Vi följer svenska lagkrav och EU-standarder för dataskydd.
          </p>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-12">Våra säkerhetsåtgärder</h2>

            <div className="space-y-8">
              {[
                {
                  title: 'Kryptering under överföring',
                  desc: 'All kommunikation mellan dig och oss är krypterad med moderna TLS-protokoll. Dokument skickas aldrig i klartext.',
                },
                {
                  title: 'EU-baserad infrastruktur',
                  desc: 'Servrar och lagring befinner sig inom EU. Vi följer GDPR och lagring av data på servers außerhalb EU är inte tillåtet.',
                },
                {
                  title: 'Inget dokument-träning av AI',
                  desc: 'Vi använder aldrig dina dokument för att träna eller finjustera våra AI-modeller. Dina data är endast för granskning.',
                },
                {
                  title: 'Automatisk radering',
                  desc: 'Dokument raderas automatiskt enligt din avtalade bevarandeperiod. Standard är 90 dagar efter leverans.',
                },
                {
                  title: 'Åtkomststyrning',
                  desc: 'Endast säkerhetsprövad personal med behörigheter kan komma åt dina dokument. Vi loggar all åtkomst.',
                },
                {
                  title: 'Säkerhetscertifiering',
                  desc: 'Vi följer ISO 27001 för informationssäkerhet och har genomgått säkerhetskontroller enligt OSL.',
                },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-accent bg-gray-50 p-6 rounded">
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">Regelefterlevnad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'GDPR', desc: 'Dataombudsmannens krav för EU' },
              { title: 'OSL', desc: 'Offentlighets- och sekretesslagen' },
              { title: 'ISO 27001', desc: 'Informationssäkerhetscertifiering' },
              { title: 'EU-avtal', desc: 'PUB-avtal och NDA tillgängliga' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-gray-200 text-center">
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Processing */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">Personuppgiftsbehandling</h2>
            <div className="bg-gray-50 p-8 rounded border border-gray-200">
              <h3 className="font-bold text-primary mb-4 text-lg">Hur vi hanterar personuppgifter:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <div>
                    <strong>Laglig grund:</strong> Vi behandlar personuppgifter baserat på ditt samtycke och motsvarigheterna i GDPR artikel 6.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <div>
                    <strong>Ändamål:</strong> Endast för att utföra den granskningstjänst du beställt – aldrig för marknadsföring eller AI-träning.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <div>
                    <strong>Retention:</strong> Vi raderar data när granskningen är slutförd, normalt inom 90 dagar.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">4.</span>
                  <div>
                    <strong>Rättigheter:</strong> Du har rätt att begära tillgång, rättelse, radering och dataöverförbarhet.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Har du frågor om säkerhet?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Kontakta oss för mer information om vår säkerhetspolicy eller för att begära ett säkerhetsdokument.
          </p>
          <a href="/contact" className="btn-secondary">
            Kontakta oss
          </a>
        </div>
      </section>
    </div>
  );
}
