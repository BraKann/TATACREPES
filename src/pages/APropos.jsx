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
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="kicker justify-center flex">qui sommes-nous</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--ink)' }}>À propos de Tata Crêpes</h1>
          <p className="max-w-[620px] mx-auto text-lg" style={{ color: 'var(--ink-soft)' }}>
            Une passion transmise, un geste précis, et une seule mission :
            redonner à chaque billig la surface qu'elle mérite.
          </p>
        </div>
      </section>

      <div className="wave-cream" />

      {/* ── HISTOIRE ── rayures douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="card-soft p-10">
            <span className="kicker">notre</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--ink)' }}>Un savoir-faire breton, transmis avec exigence</h2>
            <p className="mb-4" style={{ color: 'var(--ink)' }}>
              Tata Crêpes est né d'un constat simple : trop de biligs, professionnelles
              comme familiales, sont mal culottées ou abandonnées faute d'un artisan
              capable de leur redonner vie. Fort d'une pratique quotidienne du culottage
              traditionnel à l'huile de lin, nous parcourons la Loire-Atlantique et le
              Morbihan pour intervenir directement chez les crêperies, restaurants et
              particuliers qui nous font confiance.
            </p>
            <p style={{ color: 'var(--ink)' }}>
              Chaque billig est différente — son métal, son âge, son usage. C'est pour
              cela que le culottage ne se fait jamais à la chaîne : il se fait à la main,
              au geste, à l'écoute de la matière.
            </p>
          </div>
        </div>
      </section>

      <div className="wave-cream" />

      {/* ── VALEURS ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="kicker">nos</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--ink)' }}>valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {VALEURS.map(({ icon, titre, texte }) => (
              <div key={titre} className="card-soft p-8 text-center">
                <span className="block text-3xl mb-3">{icon}</span>
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--ink)' }}>{titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-sage" />

      {/* ── ZONE D'INTERVENTION ── rayures sauge */}
      <section className="stripes-sage py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="card-soft p-10 max-w-[760px] mx-auto">
            <span className="kicker justify-center flex">où nous intervenons</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--ink)' }}>Loire-Atlantique (44) et Morbihan (56)</h2>
            <p className="mb-6 max-w-[560px] mx-auto" style={{ color: 'var(--ink-soft)' }}>
              Quelques communes où nous nous déplaçons régulièrement — et bien d'autres sur demande.
            </p>
            <ul className="flex flex-wrap gap-2 justify-center list-none">
              {COMMUNES.map((c) => (
                <li key={c} className="badge-soft">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--ink)' }}>Envie de nous confier votre billig ?</h2>
          <Link to="/contact" className="btn-primary">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  )
}