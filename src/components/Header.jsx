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
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border-soft)' }}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between gap-4 py-4">
        <Link
          to="/"
          className="text-xl font-bold"
          style={{ color: 'var(--ink)' }}
          onClick={() => setMenuOpen(false)}
        >
          Tata Crêpes
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `text-sm font-medium pb-0.5 border-b-2 transition-colors ${isActive ? 'font-semibold' : 'border-transparent'}`}
              style={({ isActive }) => ({
                color: 'var(--ink)',
                borderColor: isActive ? 'var(--bande1)' : 'transparent',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-2">
            Demander un devis
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 rounded-full"
          style={{ border: '1px solid var(--border-soft)', backgroundColor: 'var(--card)' }}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-[2px] mx-2.5 transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} style={{ backgroundColor: 'var(--ink)' }} />
          <span className={`block h-[2px] mx-2.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--ink)' }} />
          <span className={`block h-[2px] mx-2.5 transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} style={{ backgroundColor: 'var(--ink)' }} />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          className="md:hidden flex flex-col gap-1 px-6 py-4"
          style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border-soft)' }}
          aria-label="Menu mobile"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `py-2.5 font-medium ${isActive ? 'font-bold' : ''}`}
              style={{ color: 'var(--ink)', borderBottom: '1px solid var(--border-soft)' }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary mt-2 text-center" onClick={() => setMenuOpen(false)}>
            Demander un devis
          </Link>
        </nav>
      )}
    </header>
  )
}