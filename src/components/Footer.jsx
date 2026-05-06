import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const SOCIAL = [
  { icon: <FiGithub />, href: 'https://github.com/dineshkumar', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/dineshkumar', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: 'https://twitter.com/dineshkumar', label: 'Twitter' },
  { icon: <FiMail />, href: 'mailto:dcmkhu@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 2rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem', color: 'var(--gold)',
          marginBottom: '1.25rem',
        }}>D.</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
          {SOCIAL.map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="footer-social"
              style={{
                width: 40, height: 40, borderRadius: '50%',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', fontSize: '1rem',
                transition: 'color 0.2s, border-color 0.2s',
              }}>
              {icon}
            </a>
          ))}
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Dinesh Kumar · Built with React + Vite
        </p>
      </div>

      <style>{`
        .footer-social:hover { color: var(--gold) !important; border-color: var(--gold) !important; }
      `}</style>
    </footer>
  )
}
