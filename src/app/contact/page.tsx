'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    caseType: '',
    pages: '',
    timeline: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        organization: '',
        email: '',
        caseType: '',
        pages: '',
        timeline: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kontakta oss
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Fyll i formuläret nedan och vi återkommer inom 24 timmar med en offert eller svar på dina frågor.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-800">
                <p className="font-bold">Tack! Ditt meddelande skickades.</p>
                <p className="text-sm">Vi återkommer inom 24 timmar.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                    placeholder="Din namn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Organisation *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                    placeholder="Din kommun/myndighet"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="din@epost.se"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Typ av ärende *
                  </label>
                  <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  >
                    <option value="">Välj typ</option>
                    <option value="dokumentgranskning">Dokumentgranskning</option>
                    <option value="gdpr-riskanalys">GDPR-riskanalys</option>
                    <option value="expressgranskning">Expressgranskning</option>
                    <option value="utbildning">Utbildning & mallar</option>
                    <option value="annat">Annat</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Ungefärlig sidmängd
                  </label>
                  <select
                    name="pages"
                    value={formData.pages}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  >
                    <option value="">Välj intervall</option>
                    <option value="under-20">Under 20 sidor</option>
                    <option value="20-50">20-50 sidor</option>
                    <option value="50-100">50-100 sidor</option>
                    <option value="over-100">Över 100 sidor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Önskad svarstid
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                >
                  <option value="">Välj tidsram</option>
                  <option value="samma-dag">Samma dag</option>
                  <option value="2-3-dagar">2-3 dagar</option>
                  <option value="1-vecka">1 vecka</option>
                  <option value="flexibel">Flexibel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Meddelande / Beskrivning av ärende
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary resize-none"
                  placeholder="Beskriv dina behov här..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Skicka offertförfrågan
              </button>

              <p className="text-xs text-gray-600 text-center">
                Vi behandlar dina personuppgifter enligt vår integritetspolicy. Du kan när som helst begära radering av dina uppgifter.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">Andra sätt att kontakta oss</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-primary mb-2">E-post</h3>
              <a href="mailto:info@redaktionsstod.se" className="text-accent hover:underline">
                info@redaktionsstod.se
              </a>
              <p className="text-sm text-gray-600 mt-2">Svar inom 24 timmar</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-primary mb-2">Telefon</h3>
              <a href="tel:+46701234567" className="text-accent hover:underline">
                +46 (0)70 123 45 67
              </a>
              <p className="text-sm text-gray-600 mt-2">Vardagar 08-17</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-primary mb-2">Säker överföring</h3>
              <p className="text-sm text-gray-700">
                Dokument kan skickas via en säker krypterad kanal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">Ofta ställda frågor</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Hur snabbt kan ni svara?',
                a: 'Vi strävar efter att svara inom 24 timmar på alla offertförfrågor. För Express-granskning kan leverans ske samma dag.',
              },
              {
                q: 'Är informationen i formuläret säker?',
                a: 'Ja, all kommunikation är krypterad med SSL. Du kan också skicka dokument via säker kanal.',
              },
              {
                q: 'Kan ni diskutera sekretess under granskningsprocessen?',
                a: 'Ja, vi kan teckna NDA och PUB-avtal enligt dina behov. Kontakta oss för detaljer.',
              },
              {
                q: 'Vad händer med mina dokument efter granskningen?',
                a: 'Dokument raderas automatiskt enligt avtalet, normalt inom 90 dagar. Vi sparar aldrig dokument för AI-träning.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded border border-gray-200">
                <h3 className="font-bold text-primary mb-2">{item.q}</h3>
                <p className="text-sm text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
