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

const TEMOIGNAGES = [
  { texte: "Nos crêpes ne collaient plus depuis des mois. Après le passage de Tata Crêpes, la billig est comme neuve.", auteur: 'Crêperie Ar Bilig, Vannes' },
  { texte: "Un vrai savoir-faire, et une explication claire de chaque étape. On sait enfin entretenir notre matériel.", auteur: 'Restaurant Le Korrigan, Nantes' },
  { texte: "La billig de ma grand-mère fonctionne à nouveau parfaitement. Un moment presque émouvant.", auteur: 'Particulier, Saint-Nazaire' },
]

export default function Realisations() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Nos réalisations
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Des biligs qui reprennent du service</h1>
          <p className="max-w-[600px] mx-auto text-lg text-zinc-600">
            Quelques exemples d'interventions récentes en Loire-Atlantique et dans le Morbihan.
          </p>
        </div>
      </section>

      {/* ── GALERIE AVANT/APRÈS ── bandes douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Avant / Après
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">La différence en un coup d'œil</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REALISATIONS.map(({ titre, desc }) => (
              <div key={titre} className="bg-white border border-black p-6">
                <div className="grid grid-cols-2 gap-3">
                  {['Avant', 'Après'].map((label) => (
                    <div key={label} className="aspect-square bg-zinc-100 border border-black flex items-center justify-center text-zinc-400 font-semibold uppercase tracking-wide text-xs" aria-hidden="true">
                      {label}
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-lg mt-5 mb-1">{titre}</h3>
                <p className="text-zinc-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Témoignages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {TEMOIGNAGES.map(({ texte, auteur }) => (
              <div key={auteur} className="bg-white border border-black p-7">
                <p className="italic mb-4 text-zinc-700">« {texte} »</p>
                <p className="text-sm font-semibold text-zinc-600">— {auteur}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── bandes charbon */}
      <section className="stripes-charcoal py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="bg-white border border-black p-10 max-w-[700px] mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
              À votre tour
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Votre billig mérite le même traitement</h2>
            <p className="text-zinc-600 mb-6">Devis gratuit, sous 48h, sans engagement.</p>
            <Link to="/contact" className="inline-block px-8 py-3 font-semibold text-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}