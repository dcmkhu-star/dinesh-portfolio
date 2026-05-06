import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(5,13,24,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <NavLink to="/" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem', color: 'var(--gold)',
          }}>D.</NavLink>

          <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'}
                  style={({ isActive }) => ({
                    fontSize: '0.875rem', fontWeight: 500,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    color: isActive ? 'var(--gold)' : 'var(--text)',
                    transition: 'color 0.2s',
                  })}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="nav-burger" onClick={() => setOpen(o => !o)}
            style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', fontSize: '1.4rem' }}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
              <ul style={{ listStyle: 'none', padding: '1rem 2rem 1.5rem' }}>
                {LINKS.map(({ to, label }) => (
                  <li key={to} style={{ padding: '0.6rem 0' }}>
                    <NavLink to={to} end={to === '/'} onClick={() => setOpen(false)}
                      style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : 'var(--text)', fontWeight: isActive ? 600 : 400 })}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-burger { display: block !important; }
        }
        .nav-links a:hover { color: var(--gold) !important; }
      `}</style>
    </>
  )
}
