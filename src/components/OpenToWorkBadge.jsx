import { motion } from 'framer-motion'

export default function OpenToWorkBadge() {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      padding: '0.35rem 0.9rem',
      border: '1px solid rgba(74,222,128,0.35)',
      borderRadius: 999,
      background: 'rgba(74,222,128,0.06)',
      fontSize: '0.8rem', color: '#4ade80',
      letterSpacing: '0.04em',
    }}>
      <motion.span
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
      Open to Work
    </div>
  )
}
