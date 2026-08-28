import { Link } from 'react-router-dom'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : étapes, types de billig, FAQ
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ETAPES = [
  { num: 1, titre: 'Diagnostic', texte: "Examen complet de votre billig : état de la surface, type de métal, usure, dépôts de graisse carbonisée." },
  { num: 2, titre: 'Décapage', texte: "Élimination des anciennes couches encrassées ou mal culottées jusqu'à retrouver un métal sain." },
  { num: 3, titre: 'Culottage', texte: "Application progressive d'huile de lin en fines couches chauffées, pour créer un film protecteur naturel." },
  { num: 4, titre: 'Test de cuisson', texte: "Vérification que la crêpe se décolle nettement, sans accroche ni goût de métal." },
]

export default function LeCulottage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="kicker justify-center flex">le savoir-faire</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--ink)' }}>Le culottage, qu'est-ce que c'est ?</h1>
          <p className="max-w-[680px] mx-auto text-lg" style={{ color: 'var(--ink-soft)' }}>
            Le culottage est le procédé qui rend une billig ou une crêpière antiadhésive
            sans aucun produit chimique : une fine pellicule d'huile de lin polymérisée,
            appliquée par couches successives à la chaleur, vient protéger et lisser le métal.
            C'est un geste traditionnel breton, et c'est notre spécialité.
          </p>
        </div>
      </section>

      <div className="wave-cream" />

      {/* ── ÉTAPES ── rayures douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="kicker">notre</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--ink)' }}>méthode</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ETAPES.map(({ num, titre, texte }) => (
              <div key={num} className="card-soft relative p-8 pt-9">
                <span
                  className="absolute -top-4 left-6 w-9 h-9 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}
                >
                  {num}
                </span>
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--ink)' }}>{titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-terracotta" />

      {/* ── CTA ── rayures terracotta */}
      <section className="stripes-terracotta py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="card-soft p-10 max-w-[700px] mx-auto">
            <span className="kicker justify-center flex">une billig à faire culotter ?</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--ink)' }}>Parlons de votre crêpière</h2>
            <p className="mb-6" style={{ color: 'var(--ink-soft)' }}>Diagnostic et devis gratuits, sous 48h.</p>
            <Link to="/contact" className="btn-primary">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}