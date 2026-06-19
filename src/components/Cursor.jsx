import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const orb = ref.current
    if (!orb) return

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const pos    = { x: pointer.x, y: pointer.y }
    let   raf

    const onMove = e => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      orb.style.opacity = '1'
    }

    const onOver = e => {
      const hit = !!e.target.closest('a, button, [role="button"], input, textarea, select, label')
      document.body.classList.toggle('cursor-hover', hit)
    }

    const animate = () => {
      pos.x += (pointer.x - pos.x) * 0.34
      pos.y += (pointer.y - pos.y) * 0.34
      orb.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(-45deg)`
      raf = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.body.classList.remove('cursor-hover')
    }
  }, [])

  return <div ref={ref} className="cursor-orb" style={{ opacity: 0 }} />
}
