import { Link } from 'react-router-dom'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : valeurs et communes desservies
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const VALEURS = [
  { icon: '🤝', titre: 'Proximité', texte: "Un artisan qui se déplace chez vous, discute avec vous de votre matériel et de vos habitudes de cuisson." },
  { icon: '🌿', titre: 'Naturel', texte: "Uniquement de l'huile de lin et de la chaleur : aucun produit chimique n'entre dans le culottage." },
  { icon: '🎯', titre: 'Exigence', texte: "Une billig n'est rendue que lorsqu'elle passe le test de la crêpe qui se décolle parfaitement." },
]

const COMMUNES = [
  'Nantes', 'Saint-Nazaire', 'Vertou', 'Rezé', 'Vannes', 'Lorient',
  'Pontivy', 'Ancenis', 'La Baule', 'Auray',
]

export default function APropos() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Qui sommes-nous
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de Tata Crêpes</h1>
          <p className="max-w-[620px] mx-auto text-lg text-zinc-600">
            Une passion transmise, un geste précis, et une seule mission :
            redonner à chaque billig la surface qu'elle mérite.
          </p>
        </div>
      </section>

      {/* ── HISTOIRE ── bandes douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-white border border-black p-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
              Notre histoire
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Un savoir-faire breton, transmis avec exigence</h2>
            <p className="text-zinc-700 mb-4">
              Tata Crêpes est né d'un constat simple : trop de biligs, professionnelles
              comme familiales, sont mal culottées ou abandonnées faute d'un artisan
              capable de leur redonner vie. Fort d'une pratique quotidienne du culottage
              traditionnel à l'huile de lin, nous parcourons la Loire-Atlantique et le
              Morbihan pour intervenir directement chez les crêperies, restaurants et
              particuliers qui nous font confiance.
            </p>
            <p className="text-zinc-700">
              Chaque billig est différente — son métal, son âge, son usage. C'est pour
              cela que le culottage ne se fait jamais à la chaîne : il se fait à la main,
              au geste, à l'écoute de la matière.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Nos valeurs
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Ce qui guide notre travail</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {VALEURS.map(({ icon, titre, texte }) => (
              <div key={titre} className="bg-white border border-black p-8 text-center">
                <span className="block text-3xl mb-3">{icon}</span>
                <h3 className="font-semibold text-lg mb-2">{titre}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONE D'INTERVENTION ── bandes charbon */}
      <section className="stripes-charcoal py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="bg-white border border-black p-10 max-w-[760px] mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
              Où nous intervenons
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Loire-Atlantique (44) et Morbihan (56)</h2>
            <p className="text-zinc-600 mb-6 max-w-[560px] mx-auto">
              Quelques communes où nous nous déplaçons régulièrement — et bien d'autres sur demande.
            </p>
            <ul className="flex flex-wrap gap-2 justify-center list-none">
              {COMMUNES.map((c) => (
                <li key={c} className="bg-white border border-black px-3.5 py-1.5 text-sm font-semibold">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Envie de nous confier votre billig ?</h2>
          <Link to="/contact" className="inline-block px-8 py-3 font-semibold text-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  )
}