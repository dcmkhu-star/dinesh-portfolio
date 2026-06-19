import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled ? 'rgba(51,49,47,0.97)' : 'transparent'
  const borderB = scrolled ? '1px solid var(--border)' : 'none'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: navBg,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: borderB,
        transition: 'all 0.3s',
      }}>
        {/* Row 1 — Brand */}
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0.65rem 2rem 0.45rem',
        }}>
          <NavLink to="/" className="brand-link" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem', color: 'var(--gold)',
            position: 'relative',
          }}>DKA.</NavLink>
        </div>

        {/* Row 2 — Nav links */}
        <div style={{ borderTop: '2px solid rgba(58,38,8,0.45)' }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto', padding: '0.4rem 2rem',
            display: 'flex', alignItems: 'center', gap: '1.75rem',
            flexWrap: 'wrap', overflowX: 'auto',
          }}>
            {LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'}
                className="nav-item"
                style={({ isActive }) => ({
                  fontSize: '0.8rem', fontWeight: 500,
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                  color: isActive ? 'var(--gold)' : 'var(--text)',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                })}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        .nav-item:hover { color: var(--gold) !important; }

        .brand-link::after {
          content: 'DINESH KUMAR AMMAIAPPAN';
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          background: var(--bg-card);
          color: var(--text);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          border: 1px solid var(--border);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          font-family: var(--font-body);
          font-weight: 600;
        }
        .brand-link:hover::after { opacity: 1; }
      `}</style>
    </>
  )
}
