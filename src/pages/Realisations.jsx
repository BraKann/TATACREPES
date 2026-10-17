import { Link } from 'react-router-dom'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : réalisations et témoignages
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const REALISATIONS = [
  { titre: 'Crêperie Ar Bilig — Vannes', desc: 'Billig fonte 1980, culottage complet après 15 ans sans entretien.' },
  { titre: 'Restaurant Le Korrigan — Nantes', desc: 'Crêpière électrique professionnelle, remise à niveau avant réouverture.' },
  { titre: 'Particulier — Saint-Nazaire', desc: 'Billig familiale héritée, culottage de remise en service.' },
  { titre: 'Crêperie du Port — La Baule', desc: 'Deux billigs gaz, entretien annuel sous contrat.' },
]

export default function Realisations() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="kicker justify-center flex">mes réalisations</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--ink)' }}>Des biligs qui reprennent du service</h1>
          <p className="max-w-[600px] mx-auto text-lg" style={{ color: 'var(--ink-soft)' }}>
            Quelques exemples d'interventions récentes en Loire-Atlantique et dans le Morbihan.
          </p>
        </div>
      </section>

      <div className="wave-cream" />

      {/* ── GALERIE AVANT/APRÈS ── rayures douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="kicker">avant /</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--ink)' }}>après</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REALISATIONS.map(({ titre, desc }) => (
              <div key={titre} className="card-soft p-6">
                <div className="grid grid-cols-2 gap-3">
                  {['Avant', 'Après'].map((label) => (
                    <div
                      key={label}
                      className="aspect-square rounded-xl flex items-center justify-center font-semibold uppercase tracking-wide text-xs"
                      style={{ backgroundColor: 'var(--cream-deep)', color: 'var(--ink-soft)' }}
                      aria-hidden="true"
                    >
                      {label}
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-lg mt-5 mb-1" style={{ color: 'var(--ink)' }}>{titre}</h3>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}