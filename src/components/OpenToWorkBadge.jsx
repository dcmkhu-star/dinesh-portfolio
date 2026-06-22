import { motion } from 'framer-motion'

export default function OpenToWorkBadge() {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      padding: '0.35rem 0.9rem',
      border: '1px solid rgba(162,62,22,0.5)',
      borderRadius: 999,
      background: 'rgba(162,62,22,0.12)',
      fontSize: '0.8rem', color: '#7A2D0A',
      letterSpacing: '0.04em',
      fontWeight: 600,
    }}>
      <motion.span
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        style={{ width: 8, height: 8, borderRadius: '50%', background: '#A23E16', display: 'inline-block' }} />
      Open to Work
    </div>
  )
}
