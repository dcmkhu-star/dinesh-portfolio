import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import OpenToWorkBadge from '../components/OpenToWorkBadge'
import StatCounter from '../components/StatCounter'
import SkillsTicker from '../components/SkillsTicker'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }

const STATS = [
  { end: 1000, label: 'Medication SKUs managed daily', suffix: '+' },
  { end: 98,   label: 'Stock accuracy maintained',     suffix: '%' },
  { end: 12,   label: 'Cost reduction achieved',       suffix: '%' },
  { end: 25,   label: 'Annual savings identified',     suffix: 'K+', prefix: '$' },
]

const HERO_BULLETS = [
  '2+ years regulated operations',
  'Independent research across domains',
  'MS Consumer Analytics, NYC',
  'Open to talk — roles, ventures & collaboration',
]

const WHAT_I_DO = [
  { icon: '🔍', title: 'Research & Analysis',
    items: ['Deep independent research', 'Statistical analysis', 'Trend & time-series analysis', 'Turning complex data into clear insight'] },
  { icon: '📦', title: 'Operations & Procurement',
    items: ['End-to-end purchasing', 'Vendor negotiation', 'Inventory & cost control', 'Running high-stakes operations clean'] },
  { icon: '💹', title: 'Financial & Business Research',
    items: ['5-year financial analysis', 'Market & competitive research', 'Consumer behavior studies', 'Evaluating any business with rigor'] },
  { icon: '🚀', title: 'Strategy & Building',
    items: ['Finding problems worth solving', 'Building & shipping solutions', 'Self-directed venture work', 'From idea to working product'] },
]

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) {
        setHasScrolled(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>

      {/* ═══ HERO — Charcoal ═══ */}
      <section style={{
        minHeight: '92vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '6rem 2rem 5rem',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'var(--bg)',
      }}>
        {/* gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(232,184,92,0.1), transparent 30%), linear-gradient(225deg, rgba(201,116,63,0.1), transparent 36%)',
          pointerEvents: 'none',
        }} />
        {/* floating blobs */}
        <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,184,92,0.12) 0%, transparent 68%)',
          top: '-120px', right: '-100px',
          animation: 'float-blob 9s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,116,63,0.1) 0%, transparent 70%)',
          bottom: '-60px', left: '-90px',
          animation: 'float-blob-slow 11s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,184,92,0.08) 0%, transparent 70%)',
          top: '30%', left: '5%',
          animation: 'float-blob 14s ease-in-out infinite reverse', pointerEvents: 'none' }} />
        {/* bottom fade into dark stats */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 110,
          background: 'linear-gradient(to bottom, transparent, #201E1C)',
          pointerEvents: 'none',
        }} />

        <motion.div variants={stagger} initial="hidden" animate="visible"
          style={{ position: 'relative', maxWidth: 760, zIndex: 1 }}>

          <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <OpenToWorkBadge />
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.35rem 0.9rem', border: '1px solid var(--border)',
              borderRadius: 999, background: 'rgba(251,248,241,0.06)',
              fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.04em',
            }}>
              <FiMapPin size={12} /> New York, NY
            </div>
          </motion.div>

          <motion.p variants={fadeUp} style={{
            color: 'var(--gold)', fontSize: '1rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem',
          }}>Hi, I'm</motion.p>

          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: 'var(--warm-white)', lineHeight: 1.1, marginBottom: '1rem',
          }}>Dinesh Kumar Ammaiappan</motion.h1>

          <motion.div variants={fadeUp} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap',
          }}>
            <motion.div animate={{ scaleX: [0, 1] }} transition={{ duration: 0.8, delay: 0.8 }}
              style={{ height: 1, width: 48, background: 'var(--gold-dim)', transformOrigin: 'left' }} />
            <p style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
              Analyst &amp; Builder · Operations · Strategy
            </p>
            <motion.div animate={{ scaleX: [0, 1] }} transition={{ duration: 0.8, delay: 0.8 }}
              style={{ height: 1, width: 48, background: 'var(--gold-dim)', transformOrigin: 'right' }} />
          </motion.div>

          <motion.p variants={fadeUp} style={{
            color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            lineHeight: 1.75, maxWidth: 560, margin: '0 auto 1.25rem',
          }}>
            I dig into complex problems, find the patterns, and build from them.
          </motion.p>

          <motion.ul variants={fadeUp} style={{
            listStyle: 'none', padding: 0, margin: '0 auto 2.5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem',
          }}>
            {HERO_BULLETS.map((item, i) => (
              <motion.li key={item}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--text-muted)', fontSize: 'clamp(0.82rem, 1.8vw, 0.92rem)' }}>
                <span style={{ color: 'var(--gold)' }}>•</span> {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.75rem', background: 'var(--gold)', color: '#201E1C',
              borderRadius: 8, fontWeight: 700, fontSize: '0.9rem',
              letterSpacing: '0.04em', transition: 'opacity 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,184,92,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.boxShadow = 'none' }}>
              View My Work <FiArrowRight />
            </Link>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.75rem', border: '1px solid var(--border)',
              color: 'var(--text)', borderRadius: 8, fontWeight: 500, fontSize: '0.9rem',
              transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,184,92,0.18)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.boxShadow = 'none' }}>
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {!hasScrolled && (
            <motion.div
              key="scroll-hint"
              animate={{ y: [0, 8, 0] }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', bottom: '2rem', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em', zIndex: 2 }}>
              scroll
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ═══ STATS — Deepest dark ═══ */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg-dark)' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2.5rem',
        }}>
          {STATS.map(s => (
            <StatCounter key={s.label} {...s}
              numColor="#E8B85C"
              labelColor="rgba(251,248,241,0.62)"
            />
          ))}
        </div>
      </section>

      {/* ═══ SKILLS TICKER — Clay ═══ */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-mid)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              textAlign: 'center', color: 'rgba(251,248,241,0.75)',
              fontSize: '0.75rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: '1.75rem', fontWeight: 600,
            }}>
            Skills &amp; Tools
          </motion.p>
          <SkillsTicker />
        </div>
      </section>

      {/* ═══ WHAT I DO — Slightly lighter dark ═══ */}
      <section style={{ padding: '5rem 2rem', background: '#3A3735' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              What I Do
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--warm-white)' }}>
              Capabilities
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {WHAT_I_DO.map((card, i) => (
              <motion.div key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, boxShadow: '0 12px 36px rgba(232,184,92,0.14)' }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.75rem', cursor: 'default' }}>
                <motion.div
                  whileHover={{ scale: 1.25, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ fontSize: '1.75rem', marginBottom: '0.75rem', display: 'inline-block' }}>
                  {card.icon}
                </motion.div>
                <p style={{ color: 'var(--gold)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.9rem' }}>
                  {card.title}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {card.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — Deepest dark ═══ */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg-dark)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{
            maxWidth: 700, margin: '0 auto', textAlign: 'center',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            padding: '3.5rem 2rem',
          }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            color: 'var(--warm-white)', marginBottom: '1rem',
          }}>
            Let's build something worth talking about.
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Roles · Ventures · AndyBot — I'm open. Let's talk.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.8rem 2rem', background: 'var(--gold)', color: '#201E1C',
            borderRadius: 8, fontWeight: 700, fontSize: '0.9rem',
            transition: 'opacity 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,184,92,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.boxShadow = 'none' }}>
            Let's Talk <FiArrowRight />
          </Link>
        </motion.div>
      </section>

    </main>
  )
}
