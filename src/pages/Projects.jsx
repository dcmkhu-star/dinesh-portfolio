import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    title: 'ShopEase',
    description: 'A full-stack e-commerce platform with user authentication, product management, cart, and Stripe payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(90deg, #0F2D52, #C9A84C)',
    category: 'Full Stack',
  },
  {
    title: 'TaskFlow',
    description: 'A Kanban-style project management tool with drag-and-drop boards, real-time collaboration, and team workspaces.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Socket.io', 'DnD'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(90deg, #1A4A7A, #8a6f2e)',
    category: 'Full Stack',
  },
  {
    title: 'ChatterAI',
    description: 'An AI-powered chat interface built on top of OpenAI GPT, with conversation history, streaming responses, and Markdown rendering.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI API', 'WebSocket'],
    github: 'https://github.com',
    gradient: 'linear-gradient(90deg, #0a1628, #C9A84C)',
    category: 'AI / ML',
  },
  {
    title: 'DevBlog',
    description: 'A developer blog platform with Markdown support, syntax highlighting, tag filtering, and an admin CMS.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'MDX', 'TailwindCSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(90deg, #0F2D52, #4A5568)',
    category: 'Full Stack',
  },
  {
    title: 'WeatherWave',
    description: 'A real-time weather dashboard with animated transitions, 7-day forecasts, and geolocation support.',
    tags: ['React', 'OpenWeatherMap', 'Framer Motion', 'Recharts'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(90deg, #1A4A7A, #0a1628)',
    category: 'Frontend',
  },
  {
    title: 'CryptoTrack',
    description: 'A cryptocurrency portfolio tracker with live price updates, interactive charts, and profit/loss calculations.',
    tags: ['React', 'CoinGecko API', 'Recharts', 'Redux', 'LocalStorage'],
    github: 'https://github.com',
    gradient: 'linear-gradient(90deg, #8a6f2e, #0F2D52)',
    category: 'Frontend',
  },
]

const FILTERS = ['All', 'Full Stack', 'Frontend', 'AI / ML']

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <main style={{ paddingTop: 88, paddingBottom: '5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', paddingTop: '3rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              color: 'var(--gold)', letterSpacing: '0.12em',
              textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem',
            }}>What I've built</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--warm-white)', marginBottom: '1rem',
            }}>My Projects</motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ width: 60, height: 2, background: 'linear-gradient(90deg, var(--gold), transparent)', margin: '0 auto 2rem' }} />

          {/* Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)}
                style={{
                  padding: '0.4rem 1.1rem',
                  borderRadius: 999,
                  border: '1px solid',
                  borderColor: active === f ? 'var(--gold)' : 'var(--border)',
                  background: active === f ? 'rgba(201,168,76,0.12)' : 'transparent',
                  color: active === f ? 'var(--gold)' : 'var(--text-muted)',
                  fontSize: '0.82rem', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
          {filtered.map(p => (
            <motion.div key={p.title} layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
