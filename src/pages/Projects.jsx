import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  // ── Masters · LIM ──────────────────────────────
  {
    title: 'H&M Sales Prediction',
    description: 'ML forecasting · markdown reduction',
    tags: ['Machine Learning', 'Forecasting', 'Retail Analytics', 'Python'],
    gradient: 'linear-gradient(90deg, #0F2D52, #C9A84C)',
    category: 'Masters',
  },
  {
    title: 'Target Financial Performance',
    description: 'KPIs · margins · benchmarking',
    tags: ['Financial Analysis', 'KPIs', 'Retail', 'Benchmarking'],
    gradient: 'linear-gradient(90deg, #1A4A7A, #8a6f2e)',
    category: 'Masters',
  },
  {
    title: 'Crocs Market Analysis',
    description: 'Demand shifts · regional gaps',
    tags: ['Market Analysis', 'Consumer Research', 'Brand Strategy'],
    gradient: 'linear-gradient(90deg, #0a1628, #C9A84C)',
    category: 'Masters',
  },
  {
    title: "Macy's CRM Strategy",
    description: 'CLV · segmentation · retention',
    tags: ['CRM', 'Customer Analytics', 'CLV', 'Segmentation'],
    gradient: 'linear-gradient(90deg, #0F2D52, #4A5568)',
    category: 'Masters',
  },
  {
    title: "Macy's Media Plan",
    description: 'ROAS · multi-channel · audience',
    tags: ['Media Planning', 'ROAS', 'Digital Marketing', 'Multi-Channel'],
    gradient: 'linear-gradient(90deg, #1A4A7A, #0a1628)',
    category: 'Masters',
  },
  {
    title: 'Thanksgiving Consumer Analysis',
    description: 'Peak spend · channel shift',
    tags: ['Consumer Behavior', 'Seasonal Analysis', 'Retail'],
    gradient: 'linear-gradient(90deg, #8a6f2e, #0F2D52)',
    category: 'Masters',
  },
  {
    title: 'Ritu Kumar Consumer Experience',
    description: 'Journey mapping · loyalty',
    tags: ['Customer Experience', 'Journey Mapping', 'Luxury Retail'],
    gradient: 'linear-gradient(90deg, #0F2D52, #C9A84C)',
    category: 'Masters',
  },
  {
    title: "Levi's Research Proposal",
    description: 'Research design · survey methodology',
    tags: ['Research Design', 'Survey Methodology', 'Brand Research'],
    gradient: 'linear-gradient(90deg, #1A4A7A, #8a6f2e)',
    category: 'Masters',
  },

  // ── BCom Research ──────────────────────────────
  {
    title: 'Roots Industries',
    description: '5-year ratio analysis · cash-poor growth',
    tags: ['Financial Ratio Analysis', 'Corporate Finance', 'BCom Research'],
    gradient: 'linear-gradient(90deg, #0a1628, #C9A84C)',
    category: 'BCom',
  },
  {
    title: 'ING Vysya',
    description: '150 investors · chi-square · risk gap',
    tags: ['Statistical Analysis', 'Chi-Square', 'Investor Behavior'],
    gradient: 'linear-gradient(90deg, #0F2D52, #4A5568)',
    category: 'BCom',
  },
  {
    title: 'Big Bazaar',
    description: '214 stores · retention · RRR model',
    tags: ['Retail Analytics', 'Customer Retention', 'Operations'],
    gradient: 'linear-gradient(90deg, #1A4A7A, #0a1628)',
    category: 'BCom',
  },
  {
    title: 'Online vs Offline Learning',
    description: 'Comparative study · hybrid framework',
    tags: ['Education Research', 'Comparative Analysis', 'Survey'],
    gradient: 'linear-gradient(90deg, #8a6f2e, #0F2D52)',
    category: 'BCom',
  },

  // ── Featured ───────────────────────────────────
  {
    title: 'Antidepressant Utilization Analysis (10-Year Study)',
    subtitle: 'Independent Research · 2015–2024',
    description: [
      '200 drugs analyzed',
      '6 antidepressants · 5 dimensions',
      '10 years of NDC-level data',
    ],
    findings: [
      'Usage up sharply post-2018',
      'Pandemic acceleration post-2020',
      'SSRI index 100 → 145 by 2022',
      'Sertraline & Escitalopram gained · Citalopram declined',
      'Trazodone 100mg — 467 units/Rx',
      'Category growth ≠ individual drug growth',
    ],
    fullReport: true,
    tags: ['Excel', 'Data Cleaning', 'NDC Standardization', 'Index Analysis', 'Trend Analysis', 'Pharmaceutical Data'],
    gradient: 'linear-gradient(90deg, #0F2D52, #C9A84C)',
    category: 'Featured',
  },
  {
    title: 'AndyBot',
    subtitle: 'Personal Build · In Development',
    intro: 'A problem I saw, built into a product.',
    description: [
      'Medicine information platform',
      'FDA + NIH drug data',
      'For patients & professionals',
      'Full scope private until launch',
    ],
    tags: ['Drug Information', 'Interaction Checker', 'Pill Finder', 'Bilingual', 'AI Search', 'FDA + NIH Data'],
    gradient: 'linear-gradient(90deg, #1A4A7A, #8a6f2e)',
    category: 'Featured',
    contactBtn: 'Reach Out to Learn More',
  },
]

const FILTERS = ['All', 'Masters', 'BCom', 'Featured']

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <main style={{ paddingTop: 96, paddingBottom: '5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', paddingTop: '3rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              color: 'var(--gold)', letterSpacing: '0.12em',
              textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem',
            }}>Research &amp; Projects</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--warm-white)', marginBottom: '1rem',
            }}>Work &amp; Research</motion.h1>
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
