import { motion } from 'framer-motion'

export default function OpenToWorkBadge() {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      padding: '0.35rem 0.9rem',
      border: '1px solid rgba(232,184,92,0.45)',
      borderRadius: 999,
      background: 'rgba(232,184,92,0.1)',
      fontSize: '0.8rem', color: '#E8B85C',
      letterSpacing: '0.04em', fontWeight: 600,
    }}>
      <motion.span
        animate={{ opacity: [1, 0.25, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        style={{ width: 8, height: 8, borderRadius: '50%', background: '#E8B85C', display: 'inline-block' }} />
      Open to Work
    </div>
  )
}
