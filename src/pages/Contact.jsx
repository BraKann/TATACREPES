import { useState } from 'react'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : communes desservies
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const COMMUNES = ['Nantes', 'Saint-Nazaire', 'Vertou', 'Vannes', 'Lorient', 'La Baule']

const inputClass =
  "font-sans text-base px-3 py-2.5 border border-black bg-white text-black focus:outline focus:outline-2 focus:outline-black focus:outline-offset-1"

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
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Un devis, une question
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="max-w-[560px] mx-auto text-lg text-zinc-600">
            Décrivez-nous votre billig, nous revenons vers vous sous 48h avec un devis gratuit.
          </p>
        </div>
      </section>

      {/* ── FORMULAIRE + INFOS ── bandes douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 items-start">

            {/* Infos pratiques */}
            <div className="bg-white border border-black p-10">
              <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
              <p className="mb-4">
                <strong>Téléphone</strong><br />
                <a href="tel:+33XXXXXXXXX" className="font-semibold hover:underline">📞 06 XX XX XX XX</a>
              </p>
              <p className="mb-4">
                <strong>Email</strong><br />
                <a href="mailto:contact@tatacrepes.fr" className="font-semibold hover:underline">✉️ contact@tatacrepes.fr</a>
              </p>
              <p className="mb-2"><strong>Zones d'intervention</strong></p>
              <ul className="flex flex-wrap gap-2 list-none mb-3">
                {COMMUNES.map((c) => (
                  <li key={c} className="bg-white border border-black px-3.5 py-1.5 text-sm font-semibold">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-zinc-500">Loire-Atlantique (44) et Morbihan (56) — et alentours sur demande.</p>
            </div>

            {/* Formulaire */}
            <div className="bg-white border border-black p-10">
              <h2 className="text-2xl font-semibold mb-6">Demander un devis</h2>

              {envoye ? (
                <p className="bg-zinc-100 border border-black p-5 font-semibold">
                  Merci ! Votre demande a bien été envoyée, nous revenons vers vous rapidement.
                </p>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nom" className="font-semibold text-sm">Nom</label>
                    <input id="nom" name="nom" type="text" required className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-semibold text-sm">Email</label>
                    <input id="email" name="email" type="email" required className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telephone" className="font-semibold text-sm">Téléphone</label>
                    <input id="telephone" name="telephone" type="tel" className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="typeBillig" className="font-semibold text-sm">Type de billig / crêpière</label>
                    <select id="typeBillig" name="typeBillig" defaultValue="" className={inputClass}>
                      <option value="" disabled>Choisissez une option</option>
                      <option value="fonte">Fonte traditionnelle</option>
                      <option value="electrique">Électrique professionnelle</option>
                      <option value="gaz">Gaz</option>
                      <option value="autre">Autre / je ne sais pas</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-semibold text-sm">Votre message</label>
                    <textarea id="message" name="message" rows="4" required className={inputClass} />
                  </div>

                  <button
                    type="submit"
                    className="self-start mt-1 px-8 py-3 font-semibold text-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
                  >
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