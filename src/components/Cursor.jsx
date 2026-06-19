import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [active, setActive]   = useState(false)   // hovering a clickable
  const [visible, setVisible] = useState(false)   // mouse has entered page

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  // ring follows with spring lag
  const sx = useSpring(mx, { stiffness: 130, damping: 22, mass: 0.3 })
  const sy = useSpring(my, { stiffness: 130, damping: 22, mass: 0.3 })

  useEffect(() => {
    // skip on touch / coarse-pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = e => {
      mx.set(e.clientX)
      my.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onOver = e => {
      setActive(!!e.target.closest('a, button, [role="button"], input, textarea, select, label'))
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [mx, my, visible])

  if (!visible) return null

  return (
    <>
      {/* ── Dot — instant, gold ── */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99999,
          x: mx, y: my,
          translateX: '-50%', translateY: '-50%',
          width: active ? 6 : 8,
          height: active ? 6 : 8,
          borderRadius: '50%',
          background: '#E8B85C',
          pointerEvents: 'none',
          transition: 'width 0.15s, height 0.15s',
        }}
      />

      {/* ── Ring — spring lag, expands + tints clay on hover ── */}
      <motion.div
        animate={{
          width:  active ? 46 : 34,
          height: active ? 46 : 34,
          borderColor:     active ? 'rgba(201,116,63,0.75)' : 'rgba(232,184,92,0.45)',
          backgroundColor: active ? 'rgba(201,116,63,0.08)' : 'transparent',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99998,
          x: sx, y: sy,
          translateX: '-50%', translateY: '-50%',
          borderRadius: '50%',
          border: '1.5px solid rgba(232,184,92,0.45)',
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
