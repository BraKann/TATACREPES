import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto" style={{ backgroundColor: 'var(--cream-deep)', borderTop: '1px solid var(--border-soft)' }}>
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 pt-14 pb-8">
        {/* Bloc marque */}
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold" style={{ color: 'var(--ink)' }}>Tata Crêpes</span>
          <p className="italic text-sm" style={{ color: 'var(--terracotta)' }}>Le culottage dans les règles de l'art</p>
          <p className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>Zones d'intervention : 44 · 56</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2" aria-label="Navigation pied de page">
          <span
            className="text-xs font-semibold uppercase tracking-[0.12em] pb-2 mb-1"
            style={{ color: 'var(--ink)', borderBottom: '1px solid var(--border-soft)' }}
          >
            Le site
          </span>
          {[
            ['/', 'Accueil'],
            ['/le-culottage', 'Le culottage'],
            ['/a-propos', 'À propos'],
            ['/realisations', 'Réalisations'],
            ['/contact', 'Contact'],
          ].map(([to, label]) => (
            <Link key={to} to={to} className="text-sm hover:opacity-70" style={{ color: 'var(--ink-soft)' }}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact rapide */}
        <div className="flex flex-col gap-2">
          <span
            className="text-xs font-semibold uppercase tracking-[0.12em] pb-2 mb-1"
            style={{ color: 'var(--ink)', borderBottom: '1px solid var(--border-soft)' }}
          >
            Contact
          </span>
          <a href="tel:+33XXXXXXXXX" className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>📞 Nous appeler</a>
          <Link to="/contact" className="btn-primary mt-2 self-start">
            Demander un devis
          </Link>
        </div>
      </div>

      <div
        className="max-w-[1100px] mx-auto px-6 flex flex-wrap justify-between gap-2 py-4"
        style={{ borderTop: '1px solid var(--border-soft)' }}
      >
        <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>© {new Date().getFullYear()} Tata Crêpes — Tous droits réservés</p>
        <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>Site réalisé avec ♥ en Bretagne</p>
      </div>
    </footer>
  )
}