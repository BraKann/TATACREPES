import { Link } from 'react-router-dom'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : cartes "savoir-faire"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SAVOIR_FAIRE = [
  { icon: '🔥', titre: 'Culottage artisanal', texte: "Chaque billig est traitée individuellement, avec les techniques traditionnelles du culottage breton." },
  { icon: '✅', titre: 'Garantie de résultat', texte: "Votre crêpière ressort prête à l'usage, avec une surface parfaitement culottée et homogène." },
  { icon: '🚚', titre: 'Zones 44 et 56', texte: "Intervention en Loire-Atlantique et dans le Morbihan. Devis gratuit sur demande." },
]

export default function Accueil() {
  return (
    <>
      {/* ── DEVANTURE ── auvent + vitrine + rideau qui s'ouvre */}
      <section className="relative bg-white">

        {/* Auvent */}
        <div className="relative h-[90px] border-b-[3px] border-black flex items-start justify-center bg-[repeating-linear-gradient(100deg,#111_0_28px,#fff_28px_56px)]">
          <span className="mt-[18px] bg-white border-2 border-black px-6 py-1.5 font-semibold text-lg">
            Tata Crêpes
          </span>
        </div>
        {/* Bord festonné */}
        <div
          className="h-[15px] bg-black bg-[radial-gradient(circle_at_18px_0,#fff_17px,transparent_18px)]"
          style={{ backgroundSize: '36px 15px', backgroundRepeat: 'repeat-x' }}
          aria-hidden="true"
        />

        {/* Vitrine */}
        <div className="bg-black px-5 pt-10 pb-14">
          <div className="relative max-w-[1100px] mx-auto min-h-[480px] bg-zinc-100 border-[5px] border-white outline outline-2 outline-black -outline-offset-8 overflow-hidden flex items-center justify-center shadow-2xl">

            {/* Tringle */}
            <div className="absolute top-0 inset-x-0 h-2 bg-black z-30" />

            {/* Pancarte "Ouvert" */}
            <span className="absolute top-6 right-6 z-40 bg-white border-2 border-black px-3.5 py-1 text-xs font-bold uppercase tracking-widest -rotate-3">
              Ouvert
            </span>

            {/* Rideaux */}
            <div
              className="absolute top-0 bottom-0 left-0 w-[27%] z-20 rounded-[0_0_65%_8%/0_0_45%_6%] bg-[repeating-linear-gradient(90deg,#18181b_0_16px,#000_16px_32px)] shadow-[inset_-16px_0_26px_rgba(0,0,0,0.4)]"
              aria-hidden="true"
            >
              <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
            </div>
            <div
              className="absolute top-0 bottom-0 right-0 w-[27%] z-20 -scale-x-100 rounded-[0_0_65%_8%/0_0_45%_6%] bg-[repeating-linear-gradient(90deg,#18181b_0_16px,#000_16px_32px)] shadow-[inset_-16px_0_26px_rgba(0,0,0,0.4)]"
              aria-hidden="true"
            >
              <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
            </div>

            {/* Contenu révélé */}
            <div className="relative z-10 max-w-[620px] text-center px-8 py-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
                Spécialiste depuis X ans
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Redonnez vie<br />à votre billig
              </h1>
              <p className="max-w-[480px] mx-auto mb-7 text-zinc-700">
                Tata Crêpes remet en état et culotte vos crêpières professionnelles
                et particulières — biligs restaurées, prêtes à reprendre du service.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="px-8 py-3 font-semibold text-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
                  Demander un devis
                </Link>
                <Link to="/le-culottage" className="px-8 py-3 font-semibold text-sm border-2 border-black text-black hover:bg-black hover:text-white transition-colors">
                  Comprendre le culottage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAVOIR-FAIRE ── bandes douces */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Notre savoir-faire
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Pourquoi choisir Tata Crêpes ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {SAVOIR_FAIRE.map(({ icon, titre, texte }) => (
              <div key={titre} className="bg-white border border-black p-8 text-center">
                <span className="block text-3xl mb-3">{icon}</span>
                <h3 className="font-semibold text-lg mb-2">{titre}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVANT/APRÈS ── section blanche */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
            Nos réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Des transformations parlent d'elles-mêmes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[700px] mx-auto">
            {['Avant', 'Après'].map((label) => (
              <div key={label}>
                <div className="aspect-[4/3] bg-zinc-100 border border-black flex items-center justify-center text-zinc-400 font-semibold uppercase tracking-wide text-sm mb-3" aria-hidden="true">
                  {label}
                </div>
                <p className="font-semibold">{label}</p>
              </div>
            ))}
          </div>
          <Link to="/realisations" className="inline-block mt-10 px-8 py-3 font-semibold text-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
            Voir toutes les réalisations
          </Link>
        </div>
      </section>

      {/* ── CTA ── bandes charbon + panneau blanc */}
      <section className="stripes-charcoal py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="bg-white border border-black p-10 max-w-[700px] mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-3 text-zinc-700">
              Prêt à commencer ?
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Votre billig mérite le meilleur traitement</h2>
            <p className="text-zinc-600 mb-6">Parce qu'une bonne crêpe commence par une bonne billig.</p>
            <Link to="/contact" className="inline-block px-8 py-3 font-semibold text-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}