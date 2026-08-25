import { useState } from 'react'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : communes desservies
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const COMMUNES = ['Nantes', 'Saint-Nazaire', 'Vertou', 'Vannes', 'Lorient', 'La Baule']

const inputClass =
  "font-sans text-base px-3.5 py-2.5 rounded-xl bg-white focus:outline focus:outline-2"

const inputStyle = { border: '1px solid var(--border-soft)', color: 'var(--ink)' }

export default function Contact() {
  const [envoye, setEnvoye] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: brancher l'envoi réel (API / service mail)
    setEnvoye(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="kicker justify-center flex">un devis, une question</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--ink)' }}>Contactez-nous</h1>
          <p className="max-w-[560px] mx-auto text-lg" style={{ color: 'var(--ink-soft)' }}>
            Décrivez-nous votre billig, nous revenons vers vous sous 48h avec un devis gratuit.
          </p>
        </div>
      </section>

      <div className="wave-cream" />

      {/* ── FORMULAIRE + INFOS ── rayures douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 items-start">

            {/* Infos pratiques */}
            <div className="card-soft p-10">
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--ink)' }}>Nos coordonnées</h2>
              <p className="mb-4" style={{ color: 'var(--ink)' }}>
                <strong>Téléphone</strong><br />
                <a href="tel:+33XXXXXXXXX" className="font-semibold hover:underline" style={{ color: 'var(--terracotta)' }}>📞 06 XX XX XX XX</a>
              </p>
              <p className="mb-4" style={{ color: 'var(--ink)' }}>
                <strong>Email</strong><br />
                <a href="mailto:contact@tatacrepes.fr" className="font-semibold hover:underline" style={{ color: 'var(--terracotta)' }}>✉️ contact@tatacrepes.fr</a>
              </p>
              <p className="mb-2" style={{ color: 'var(--ink)' }}><strong>Zones d'intervention</strong></p>
              <ul className="flex flex-wrap gap-2 list-none mb-3">
                {COMMUNES.map((c) => (
                  <li key={c} className="badge-soft">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>Loire-Atlantique (44) et Morbihan (56) — et alentours sur demande.</p>
            </div>

            {/* Formulaire */}
            <div className="card-soft p-10">
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--ink)' }}>Demander un devis</h2>

              {envoye ? (
                <p className="p-5 rounded-xl font-semibold" style={{ backgroundColor: 'var(--terracotta-pale)', color: 'var(--ink)' }}>
                  Merci ! Votre demande a bien été envoyée, nous revenons vers vous rapidement.
                </p>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nom" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Nom</label>
                    <input id="nom" name="nom" type="text" required className={inputClass} style={inputStyle} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Email</label>
                    <input id="email" name="email" type="email" required className={inputClass} style={inputStyle} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telephone" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Téléphone</label>
                    <input id="telephone" name="telephone" type="tel" className={inputClass} style={inputStyle} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="typeBillig" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Type de billig / crêpière</label>
                    <select id="typeBillig" name="typeBillig" defaultValue="" className={inputClass} style={inputStyle}>
                      <option value="" disabled>Choisissez une option</option>
                      <option value="fonte">Fonte traditionnelle</option>
                      <option value="electrique">Électrique professionnelle</option>
                      <option value="gaz">Gaz</option>
                      <option value="autre">Autre / je ne sais pas</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Votre message</label>
                    <textarea id="message" name="message" rows="4" required className={inputClass} style={inputStyle} />
                  </div>

                  <button type="submit" className="btn-primary self-start mt-1">
                    Envoyer ma demande
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}