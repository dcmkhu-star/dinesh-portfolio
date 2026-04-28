import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ title, description, tags = [], github, live, gradient }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
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
          marginBottom: '0.6rem',
        }}>{title}</h3>

        <p style={{
          color: 'var(--text-muted)', fontSize: '0.9rem',
          lineHeight: 1.65, flex: 1, marginBottom: '1.25rem',
        }}>{description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              padding: '0.2rem 0.7rem',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 999, fontSize: '0.75rem',
              color: 'var(--gold)', letterSpacing: '0.03em',
            }}>{tag}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer"
              className="card-link"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                color: 'var(--text-muted)', fontSize: '0.85rem',
                transition: 'color 0.2s',
              }}>
              <FiGithub /> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer"
              className="card-link"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                color: 'var(--text-muted)', fontSize: '0.85rem',
                transition: 'color 0.2s',
              }}>
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </div>

      <style>{`.card-link:hover { color: var(--gold) !important; }`}</style>
    </motion.div>
  )
}
