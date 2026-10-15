import { useState } from 'react'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : communes desservies
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const COMMUNES = ['Nantes', 'Saint-Nazaire', 'Vertou', 'Vannes', 'Lorient', 'La Baule']

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : réglages de la photo
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const PHOTO_MAX_INPUT_MB = 15 // taille max du fichier choisi
const PHOTO_MAX_SIDE = 1600 // côté max après réduction (px)
const PHOTO_QUALITY = 0.8 // qualité JPEG

const inputClass =
  "font-sans text-base px-3.5 py-2.5 rounded-xl bg-white focus:outline focus:outline-2"

const inputStyle = { border: '1px solid var(--border-soft)', color: 'var(--ink)' }

// Réduit l'image et la renvoie en base64 JPEG
async function prepareImage(file) {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, PHOTO_MAX_SIDE / Math.max(bitmap.width, bitmap.height))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height)

  const blob = await new Promise((resolve) =>
    canvas.toBlob(resolve, 'image/jpeg', PHOTO_QUALITY)
  )
  const data = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result.split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
  return { type: 'image/jpeg', data }
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [photoError, setPhotoError] = useState('')
  const [contactError, setContactError] = useState('')

  function handlePhotoChange(e) {
    const file = e.target.files[0]
    setPhotoError('')
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setPhotoError('Merci de choisir une image (JPG, PNG…).')
      e.target.value = ''
    } else if (file.size > PHOTO_MAX_INPUT_MB * 1024 * 1024) {
      setPhotoError(`Photo trop lourde (max ${PHOTO_MAX_INPUT_MB} Mo).`)
      e.target.value = ''
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const endpoint = import.meta.env.VITE_APPS_SCRIPT_URL?.trim()
    if (!endpoint) {
      setStatus('configuration-error')
      return
    }

    const form = e.currentTarget
    const fd = new FormData(form)
    const email = String(fd.get('email') || '').trim()
    const telephone = String(fd.get('telephone') || '').trim()

    // Au moins un moyen de contact
    if (!email && !telephone) {
      setContactError('Indiquez au moins un email ou un numéro de téléphone.')
      form.elements.email.focus()
      return
    }
    if (telephone && telephone.replace(/\D/g, '').length < 8) {
      setContactError('Le numéro de téléphone semble incomplet.')
      form.elements.telephone.focus()
      return
    }
    setContactError('')

    const file = fd.get('photo')
    setStatus('sending')

    try {
      const payload = {
        nom: fd.get('nom'),
        email,
        telephone,
        message: fd.get('message'),
        _gotcha: fd.get('_gotcha'),
      }

      if (file && file.size > 0) {
        try {
          payload.photo = await prepareImage(file)
        } catch {
          setPhotoError("Cette photo n'a pas pu être lue. Essayez un fichier JPG ou PNG.")
          setStatus('idle')
          return
        }
      }

      // Apps Script ne permet pas de lire sa réponse depuis une autre origine.
      // no-cors autorise l'envoi simple, mais rend la réponse opaque au navigateur.
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      })

      form.reset()
      setPhotoError('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
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

              {status === 'success' ? (
                <p role="status" className="p-5 rounded-xl font-semibold" style={{ backgroundColor: 'var(--terracotta-pale)', color: 'var(--ink)' }}>
                  Merci ! Votre demande a été transmise. Nous revenons vers vous rapidement.
                </p>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nom" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Nom</label>
                    <input id="nom" name="nom" type="text" required className={inputClass} style={inputStyle} />
                  </div>

                  <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                    Indiquez au moins un email ou un téléphone.
                  </p>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onInput={() => setContactError('')}
                      aria-describedby={contactError ? 'contact-error' : undefined}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telephone" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Téléphone</label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      onInput={() => setContactError('')}
                      aria-describedby={contactError ? 'contact-error' : undefined}
                      className={inputClass}
                      style={inputStyle}
                    />
                    {contactError && (
                      <p id="contact-error" role="alert" className="text-sm" style={{ color: 'var(--terracotta)' }}>
                        {contactError}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Votre message</label>
                    <textarea id="message" name="message" rows="4" required className={inputClass} style={inputStyle} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="photo" className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>
                      Photo de votre billig <span className="font-normal" style={{ color: 'var(--ink-soft)' }}>(optionnel, une seule)</span>
                    </label>
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                    <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                      Une photo nous aide à estimer l'état de la plaque avant de vous faire un devis.
                    </p>
                    {photoError && (
                      <p role="alert" className="text-sm" style={{ color: 'var(--terracotta)' }}>{photoError}</p>
                    )}
                  </div>

                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  <button type="submit" disabled={status === 'sending'} className="btn-primary self-start mt-1 disabled:opacity-50">
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  </button>

                  {status === 'configuration-error' && (
                    <p role="alert" className="text-sm" style={{ color: 'var(--terracotta)' }}>
                      L’envoi n’est pas encore configuré. Merci de nous contacter par téléphone ou par email.
                    </p>
                  )}
                  {status === 'error' && (
                    <p role="alert" className="text-sm" style={{ color: 'var(--terracotta)' }}>
                      L’envoi a échoué. Veuillez réessayer ou nous contacter par téléphone ou par email.
                    </p>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}