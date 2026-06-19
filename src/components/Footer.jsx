export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* DKA. + horizontal rule row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1.25rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            color: 'var(--gold)',
            flexShrink: 0,
          }}>DKA.</p>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Copyright lines */}
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
          DKA. · Dinesh Kumar Ammaiappan · New York · {new Date().getFullYear()}
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          Designed &amp; Built by Dinesh Kumar Ammaiappan
        </p>

      </div>
    </footer>
  )
}
