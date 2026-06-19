import { motion } from 'framer-motion'

export default function TimelineItem({ date, title, subtitle, description, tags = [], last = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', gap: '1.5rem' }}>
      {/* spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 12, height: 12, borderRadius: '50%',
          background: 'var(--gold)',
          border: '2px solid var(--bg)',
          boxShadow: '0 0 0 3px var(--gold-dim)',
          marginTop: 4,
        }} />
        {!last && (
          <div style={{ width: 1, flex: 1, background: 'var(--border)', marginTop: 8 }} />
        )}
      </div>

      {/* content */}
      <div style={{ paddingBottom: last ? 0 : '2.5rem' }}>
        <span style={{
          fontSize: '0.78rem', color: 'var(--gold)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          fontWeight: 600,
        }}>{date}</span>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem', color: 'var(--warm-white)',
          margin: '0.3rem 0 0.15rem',
        }}>{title}</h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
          {subtitle}
        </p>

        {description && Array.isArray(description) ? (
          <ul style={{
            listStyle: 'none', padding: 0, margin: '0 0 0.75rem',
            display: 'flex', flexDirection: 'column', gap: '0.3rem',
          }}>
            {description.map((item, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 1 }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        ) : description ? (
          <p style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            {description}
          </p>
        ) : null}

        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {tags.map(t => (
              <span key={t} style={{
                padding: '0.18rem 0.65rem',
                background: 'rgba(162,62,22,0.1)',
                border: '1px solid var(--border)',
                borderRadius: 999, fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
