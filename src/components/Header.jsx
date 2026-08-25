import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎛️ MODIFIE : liens de navigation
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const NAV_LINKS = [
  { to: '/',             label: 'Accueil' },
  { to: '/le-culottage', label: 'Le culottage' },
  { to: '/a-propos',     label: 'À propos' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/contact',      label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between gap-4 py-4">
        <Link to="/" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
          Tata Crêpes
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium pb-0.5 border-b-2 transition-colors ${
                  isActive ? 'border-black font-semibold' : 'border-transparent hover:border-zinc-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 text-sm font-semibold border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
          >
            Demander un devis
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 border border-black bg-white"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-[2px] bg-black transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] bg-black transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 py-4 bg-white border-t border-black" aria-label="Menu mobile">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `py-2.5 border-b border-zinc-100 font-medium ${isActive ? 'font-bold' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 text-center px-5 py-2.5 text-sm font-semibold border-2 border-black bg-black text-white"
            onClick={() => setMenuOpen(false)}
          >
            Demander un devis
          </Link>
        </nav>
      )}
    </header>
  )
}