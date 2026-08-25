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

const TYPES_BILIG = [
  { titre: 'Billig fonte traditionnelle', texte: "La billig d'origine bretonne, en fonte brute. Demande un culottage patient mais offre la meilleure tenue dans le temps." },
  { titre: 'Crêpière électrique pro', texte: "Répandue en restauration et crêperie. Le culottage doit composer avec une montée en température homogène." },
  { titre: 'Billig gaz', texte: "Chauffe rapide, zones de chaleur parfois inégales : le culottage doit être adapté point par point." },
]

const SIGNES = [
  "Les crêpes accrochent ou se déchirent au décollage",
  "La surface présente des taches, des zones ternes ou rugueuses",
  "Un goût métallique apparaît en cuisson",
  "Votre billig est neuve et n'a jamais été culottée",
]

const FAQ = [
  { q: "Ma billig neuve a-t-elle besoin d'être culottée ?", r: "Oui, presque toujours. Une billig neuve sort brute d'usine : sans culottage, les crêpes accrochent et la surface s'oxyde plus vite." },
  { q: "Combien de temps dure un culottage ?", r: "Selon l'état de départ, entre 2 et 5 heures de travail, réparties sur une intervention à votre adresse." },
  { q: "Faut-il culotter régulièrement ?", r: "Un entretien courant (nettoyage doux, léger film d'huile) suffit au quotidien. Un culottage complet se justifie tous les quelques années, ou après un nettoyage trop agressif." },
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

      <div className="wave-cream" />

      {/* ── QUAND CULOTTER ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="kicker">signes qui ne trompent pas</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--ink)' }}>Quand faire appel à Tata Crêpes ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SIGNES.map((texte) => (
              <div key={texte} className="card-soft p-6">
                <p style={{ color: 'var(--ink)' }}>{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-sage" />

      {/* ── TYPES DE BILIG ── rayures sauge */}
      <section className="stripes-sage py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="kicker">tous types de</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--ink)' }}>crêpières</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {TYPES_BILIG.map(({ titre, texte }) => (
              <div key={titre} className="card-soft p-8">
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--ink)' }}>{titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-cream" />

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[780px] mx-auto px-6">
          <span className="kicker">questions fréquentes</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--ink)' }}>Vous vous demandez peut-être...</h2>
          {FAQ.map(({ q, r }, i) => (
            <div key={q} className={`py-5 ${i === 0 ? 'pt-0' : ''}`} style={{ borderBottom: '1px solid var(--border-soft)' }}>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--ink)' }}>{q}</h3>
              <p style={{ color: 'var(--ink-soft)' }}>{r}</p>
            </div>
          ))}
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