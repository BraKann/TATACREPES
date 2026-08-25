import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-black mt-auto bg-white">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 pt-14 pb-8">
        {/* Bloc marque */}
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Tata Crêpes</span>
          <p className="italic text-sm text-zinc-500">Le culottage dans les règles de l'art</p>
          <p className="text-sm font-semibold text-zinc-700">Zones d'intervention : 44 · 56</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2" aria-label="Navigation pied de page">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] border-b border-black pb-2 mb-1">Le site</span>
          <Link to="/" className="text-sm text-zinc-600 hover:text-black">Accueil</Link>
          <Link to="/le-culottage" className="text-sm text-zinc-600 hover:text-black">Le culottage</Link>
          <Link to="/a-propos" className="text-sm text-zinc-600 hover:text-black">À propos</Link>
          <Link to="/realisations" className="text-sm text-zinc-600 hover:text-black">Réalisations</Link>
          <Link to="/contact" className="text-sm text-zinc-600 hover:text-black">Contact</Link>
        </nav>

        {/* Contact rapide */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] border-b border-black pb-2 mb-1">Contact</span>
          <a href="tel:+33XXXXXXXXX" className="text-sm font-semibold">📞 Nous appeler</a>
          <Link
            to="/contact"
            className="mt-2 self-start px-4 py-2 text-sm font-semibold border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 border-t border-zinc-200 flex flex-wrap justify-between gap-2 py-4">
        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Tata Crêpes — Tous droits réservés</p>
        <p className="text-xs text-zinc-500">Site réalisé avec ♥ en Bretagne</p>
      </div>
    </footer>
  )
}