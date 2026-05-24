'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

const initialFormData = {
  name: '',
  organization: '',
  email: '',
  caseType: '',
  pages: '',
  timeline: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-primary to-blue-950 text-white section-padding">
        <div className="container-max">
          <p className="eyebrow text-green-300">Kontakt</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Begär offert eller boka en genomgång.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Beskriv ärendet på en övergripande nivå. Skicka inte känsliga dokument via formuläret;
            vi kommer överens om säker kanal innan material delas.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-8">
            {submitted && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900" role="status">
                <p className="font-bold">Tack. Din förfrågan är registrerad i formuläret.</p>
                <p className="mt-1 text-sm">I en skarp version kopplas formuläret till ett säkert ärendeflöde.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-primary">Namn *</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Ditt namn" />
                </div>
                <div>
                  <label htmlFor="organization" className="mb-2 block text-sm font-bold text-primary">Organisation *</label>
                  <input id="organization" name="organization" type="text" value={formData.organization} onChange={handleChange} required className="input-field" placeholder="Kommun, myndighet eller region" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-primary">E-post *</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="namn@organisation.se" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="caseType" className="mb-2 block text-sm font-bold text-primary">Typ av ärende *</label>
                  <select id="caseType" name="caseType" value={formData.caseType} onChange={handleChange} required className="input-field">
                    <option value="">Välj typ</option>
                    <option value="dokumentgranskning">Dokumentgranskning inför utlämnande</option>
                    <option value="gdpr-riskanalys">GDPR-riskanalys</option>
                    <option value="expressgranskning">Expressgranskning</option>
                    <option value="utbildning">Utbildning och mallar</option>
                    <option value="annat">Annat</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pages" className="mb-2 block text-sm font-bold text-primary">Ungefärlig sidmängd</label>
                  <select id="pages" name="pages" value={formData.pages} onChange={handleChange} className="input-field">
                    <option value="">Välj intervall</option>
                    <option value="under-20">Under 20 sidor</option>
                    <option value="20-50">20-50 sidor</option>
                    <option value="50-100">50-100 sidor</option>
                    <option value="over-100">Över 100 sidor</option>
                    <option value="unknown">Ej fastställt</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="mb-2 block text-sm font-bold text-primary">Önskad svarstid</label>
                <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="input-field">
                  <option value="">Välj tidsram</option>
                  <option value="same-day">Samma dag om möjligt</option>
                  <option value="2-3-days">2-3 arbetsdagar</option>
                  <option value="one-week">Inom en vecka</option>
                  <option value="flexible">Flexibel tidsram</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-primary">Meddelande</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className="input-field resize-none" placeholder="Beskriv ärendet, önskad leverans och eventuella krav på avtal eller säker kanal." />
              </div>

              <button type="submit" className="btn-primary w-full">Skicka offertförfrågan</button>
              <p className="text-center text-xs leading-5 text-slate-600">
                Formuläret är avsett för övergripande uppgifter. Dela inte känsliga personuppgifter eller sekretessbelagda dokument här.
              </p>
            </form>
          </div>

          <aside className="space-y-6">
            <div id="booking" className="card p-8">
              <p className="eyebrow">Boka genomgång</p>
              <h2 className="mt-3 text-2xl font-bold text-primary">Kort avstämning inför uppdrag</h2>
              <p className="mt-4 leading-7 text-slate-700">
                Vi kan gå igenom dokumenttyp, omfattning, säkerhetskrav och lämplig leveransform innan ni skickar material.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p><strong>E-post:</strong> info@redaktionsstod.se</p>
                <p><strong>Telefon:</strong> +46 (0)70 123 45 67</p>
                <p><strong>Svar:</strong> normalt inom 24 timmar på vardagar</p>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary">Inför offert</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li className="flex gap-2"><span className="text-accent">✓</span>Beskriv ärendetyp och ungefärlig sidmängd.</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Ange önskad svarstid och om expresshantering krävs.</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Nämn behov av PUB-avtal, NDA eller EU-baserad drift.</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Skicka dokument först när säker kanal är överenskommen.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
