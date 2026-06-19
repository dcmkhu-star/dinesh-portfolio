import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ end, label, suffix = '+', prefix = '', numColor, labelColor }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let current = 0
    const step = end / (1500 / 16)
    const timer = setInterval(() => {
      current = Math.min(current + step, end)
      setCount(Math.floor(current))
      if (current >= end) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
        color: numColor || 'var(--gold)', lineHeight: 1, marginBottom: '0.4rem',
      }}>
        {prefix}{count}{suffix}
      </p>
      <p style={{ color: labelColor || 'var(--text-muted)', fontSize: '0.875rem', letterSpacing: '0.04em' }}>
        {label}
      </p>
    </div>
  )
}
