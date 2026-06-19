import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ProjectCard({ title, subtitle, intro, description, findings, fullReport, tags = [], github, live, gradient, contactBtn }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(162,62,22,0.2)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>
      {/* colour band */}
      <div style={{
        height: 6,
        background: gradient || 'linear-gradient(90deg, var(--navy-mid), var(--gold))',
      }} />

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem', color: 'var(--warm-white)',
          marginBottom: subtitle ? '0.2rem' : '0.6rem',
        }}>{title}</h3>

        {subtitle && (
          <p style={{ color: 'var(--gold)', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>
            {subtitle}
          </p>
        )}

        {intro && (
          <p style={{ color: 'var(--text)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.6rem', lineHeight: 1.5 }}>
            {intro}
          </p>
        )}

        {/* description */}
        {description && Array.isArray(description) ? (
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: findings ? 0 : 1 }}>
            {description.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>•</span>{item}
              </li>
            ))}
          </ul>
        ) : description ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65, flex: 1, marginBottom: '1.25rem' }}>
            {description}
          </p>
        ) : null}

        {/* findings */}
        {findings && findings.length > 0 && (
          <div style={{ marginBottom: '0.75rem' }}>
            <p style={{ color: 'var(--gold)', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.4rem' }}>
              Findings
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {findings.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0 }}>•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {fullReport && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            Full report on request.
          </p>
        )}

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              padding: '0.2rem 0.7rem',
              background: 'rgba(162,62,22,0.08)',
              border: '1px solid rgba(162,62,22,0.3)',
              borderRadius: 999, fontSize: '0.75rem',
              color: 'var(--gold)', letterSpacing: '0.03em',
            }}>{tag}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer"
              className="card-link"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}>
              <FiGithub /> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer"
              className="card-link"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}>
              <FiExternalLink /> Live
            </a>
          )}
          {contactBtn && (
            <Link to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.45rem 1rem',
                background: 'var(--gold)', color: 'var(--navy-dark)',
                borderRadius: 8, fontWeight: 700, fontSize: '0.82rem',
                letterSpacing: '0.03em', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              <FiMail /> {contactBtn}
            </Link>
          )}
        </div>
      </div>

      <style>{`.card-link:hover { color: var(--gold) !important; }`}</style>
    </motion.div>
  )
}
