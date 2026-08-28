import { Link } from 'react-router-dom'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : cartes "savoir-faire"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SAVOIR_FAIRE = [
  { icon: '🔥', titre: 'Culottage artisanal', texte: "Chaque billig est traitée individuellement, avec les techniques traditionnelles du culottage breton." },
  { icon: '✅', titre: 'Garantie de résultat', texte: "Votre crêpière ressort prête à l'usage, avec une surface parfaitement culottée et homogène." },
  { icon: '🚚', titre: 'Zones 44 et 56', texte: "Intervention en Loire-Atlantique et dans le Morbihan. Devis gratuit sur demande." },
]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : trio de photos sous le hero (remplace les emojis par de vraies photos)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TRIO_PHOTOS = [
  { emoji: '🫓', label: 'Avant culottage' },
  { emoji: '🔥', label: 'En plein geste' },
  { emoji: '✨', label: 'Prête à l\u2019usage' },
]

export default function Accueil() {
  return (
    <>
      {/* ── DEVANTURE ── auvent + vitrine + rideau qui s'ouvre, version pastel */}
      <section className="relative" style={{ backgroundColor: 'var(--bg)' }}>

        {/* Auvent */}
        <div
          className="relative h-[90px] flex items-start justify-center"
          style={{
            borderBottom: '3px solid var(--border-soft)',
            backgroundImage: 'repeating-linear-gradient(100deg, var(--bande1) 0 28px, var(--bg) 28px 56px)',
          }}
        >
        </div>
        {/* Bord festonné */}
        <div
          className="h-[15px]"
          style={{
            backgroundColor: 'var(--bande3)',
            backgroundImage: 'radial-gradient(circle at 18px 0, var(--bg) 17px, transparent 18px)',
            backgroundSize: '36px 15px',
            backgroundRepeat: 'repeat-x',
          }}
          aria-hidden="true"
        />

        {/* Vitrine */}
        <div className="px-5 pt-10 pb-14" style={{ backgroundColor: 'var(--bg)' }}>
          <div
            className="relative max-w-[1100px] mx-auto min-h-[480px] overflow-hidden flex items-center justify-center rounded-3xl"
            style={{ backgroundColor: 'var(--card)', border: '5px solid var(--bg)', outline: '2px solid var(--border-soft)', outlineOffset: '-8px', boxShadow: '0 30px 60px -30px rgba(74,57,42,0.35)' }}
          >
            {/* Tringle */}
            <div className="absolute top-0 inset-x-0 h-2 z-30" style={{ backgroundColor: 'var(--terracotta)' }} />

            {/* Pancarte "Ouvert" */}
            <span
              className="absolute top-6 right-6 z-40 px-3.5 py-1 text-xs font-bold uppercase tracking-widest -rotate-3 rounded-full"
              style={{ backgroundColor: 'var(--card)', border: '2px solid var(--terracotta)', color: 'var(--terracotta)' }}
            >
              Ouvert
            </span>

            {/* Rideaux */}
            <div
              className="absolute top-0 bottom-0 left-0 w-[27%] z-20 rounded-[0_0_65%_8%/0_0_45%_6%]"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, var(--terracotta-dark) 0 16px, var(--terracotta) 16px 32px)',
                boxShadow: 'inset -16px 0 26px rgba(74,57,42,0.25)',
              }}
              aria-hidden="true"
            >
              <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full" style={{ backgroundColor: 'var(--cream)', border: '2px solid var(--terracotta-dark)' }} />
            </div>
            <div
              className="absolute top-0 bottom-0 right-0 w-[27%] z-20 -scale-x-100 rounded-[0_0_65%_8%/0_0_45%_6%]"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, var(--terracotta-dark) 0 16px, var(--terracotta) 16px 32px)',
                boxShadow: 'inset -16px 0 26px rgba(74,57,42,0.25)',
              }}
              aria-hidden="true"
            >
              <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full" style={{ backgroundColor: 'var(--cream)', border: '2px solid var(--terracotta-dark)' }} />
            </div>

            {/* Contenu révélé */}
            <div className="relative z-10 max-w-[620px] text-center px-8 py-12">
              <span className="kicker justify-center flex">spécialiste depuis X ans</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: 'var(--ink)' }}>
                Redonnez vie<br />à votre billig
              </h1>
              <p className="max-w-[480px] mx-auto mb-7" style={{ color: 'var(--ink-soft)' }}>
                Tata Crêpes remet en état et culotte vos crêpières professionnelles
                et particulières — biligs restaurées, prêtes à reprendre du service.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Demander un devis
                </Link>
                <Link to="/le-culottage" className="btn-secondary">
                  Comprendre le culottage
                </Link>
              </div>
            </div>
          </div>

          {/* Trio de photos façon polaroïd, à cheval sur la vitrine */}
          <div className="max-w-[600px] mx-auto -mt-10 relative z-20 grid grid-cols-3 gap-4 md:gap-6 px-4">
            {TRIO_PHOTOS.map(({ emoji, label }, i) => (
              <div
                key={label}
                className={`photo-trio-item ${i === 1 ? '-rotate-2 md:-mt-3' : i === 0 ? 'rotate-3' : '-rotate-3'}`}
              >
                <div className="aspect-square rounded-[0.65rem] flex items-center justify-center text-3xl md:text-4xl" style={{ backgroundColor: 'var(--cream-deep)' }}>
                  {emoji}
                </div>
                <p className="text-[11px] md:text-xs text-center mt-1.5 font-semibold" style={{ color: 'var(--ink-soft)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-cream" style={{ backgroundColor: 'var(--terracotta-pale)' }} />

      {/* ── SAVOIR-FAIRE ── rayures douces pastel */}
      <section className="stripes-soft py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="kicker">notre</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--ink)' }}>savoir-faire</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {SAVOIR_FAIRE.map(({ icon, titre, texte }) => (
              <div key={titre} className="card-soft p-8 text-center">
                <span className="block text-3xl mb-3">{icon}</span>
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--ink)' }}>{titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-cream" />

      {/* ── AVANT/APRÈS ── section claire */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="kicker justify-center flex">nos</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--ink)' }}>réalisations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[700px] mx-auto">
            {['Avant', 'Après'].map((label) => (
              <div key={label}>
                <div
                  className="aspect-[4/3] rounded-2xl flex items-center justify-center font-semibold uppercase tracking-wide text-sm mb-3"
                  style={{ backgroundColor: 'var(--cream-deep)', color: 'var(--ink-soft)', border: '1px solid var(--border-soft)' }}
                  aria-hidden="true"
                >
                  {label}
                </div>
                <p className="font-semibold" style={{ color: 'var(--ink)' }}>{label}</p>
              </div>
            ))}
          </div>
          <Link to="/realisations" className="btn-primary inline-block mt-10">
            Voir toutes les réalisations
          </Link>
        </div>
      </section>

      <div className="wave-sage" />

      {/* ── CTA ── rayures sauge + panneau clair */}
      <section className="stripes-sage py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="card-soft p-10 max-w-[700px] mx-auto">
            <span className="kicker justify-center flex">prêt à commencer ?</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--ink)' }}>Votre billig mérite le meilleur traitement</h2>
            <p className="mb-6" style={{ color: 'var(--ink-soft)' }}>Parce qu'une bonne crêpe commence par une bonne billig.</p>
            <Link to="/contact" className="btn-primary">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}