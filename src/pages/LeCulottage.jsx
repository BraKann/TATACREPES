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
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Le savoir-faire
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Le culottage, qu'est-ce que c'est ?</h1>
          <p className="max-w-[680px] mx-auto text-lg text-zinc-600">
            Le culottage est le procédé qui rend une billig ou une crêpière antiadhésive
            sans aucun produit chimique : une fine pellicule d'huile de lin polymérisée,
            appliquée par couches successives à la chaleur, vient protéger et lisser le métal.
            C'est un geste traditionnel breton, et c'est notre spécialité.
          </p>
        </div>
      </section>

      {/* ── ÉTAPES ── bandes douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Notre méthode
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Les étapes du culottage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ETAPES.map(({ num, titre, texte }) => (
              <div key={num} className="relative bg-white border border-black p-8 pt-9">
                <span className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  {num}
                </span>
                <h3 className="font-semibold text-lg mb-2">{titre}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUAND CULOTTER ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Signes qui ne trompent pas
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Quand faire appel à Tata Crêpes ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SIGNES.map((texte) => (
              <div key={texte} className="bg-white border border-black p-6">
                <p className="text-zinc-700">{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPES DE BILIG ── bandes charbon */}
      <section className="stripes-charcoal py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Tous types de crêpières
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Quelle que soit votre billig</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {TYPES_BILIG.map(({ titre, texte }) => (
              <div key={titre} className="bg-white border border-black p-8">
                <h3 className="font-semibold text-lg mb-2">{titre}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[780px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Vous vous demandez peut-être...</h2>
          {FAQ.map(({ q, r }, i) => (
            <div key={q} className={`border-b border-black py-5 ${i === 0 ? 'pt-0' : ''}`}>
              <h3 className="font-semibold text-lg mb-2">{q}</h3>
              <p className="text-zinc-600">{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── bandes noires */}
      <section className="stripes-black py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="bg-white border border-black p-10 max-w-[700px] mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
              Une billig à faire culotter ?
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Parlons de votre crêpière</h2>
            <p className="text-zinc-600 mb-6">Diagnostic et devis gratuits, sous 48h.</p>
            <Link to="/contact" className="inline-block px-8 py-3 font-semibold text-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}