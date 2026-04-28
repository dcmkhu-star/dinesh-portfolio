import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import OpenToWorkBadge from '../components/OpenToWorkBadge'
import StatCounter from '../components/StatCounter'
import SkillsTicker from '../components/SkillsTicker'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }

const STATS = [
  { end: 15, label: 'Projects Built', suffix: '+' },
  { end: 2,  label: 'Years Experience', suffix: '+' },
  { end: 20, label: 'Technologies', suffix: '+' },
  { end: 100, label: 'Passion', suffix: '%' },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* ambient glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,45,82,0.6) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          style={{ position: 'relative', maxWidth: 760, zIndex: 1 }}>

          <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
            <OpenToWorkBadge />
          </motion.div>

          <motion.p variants={fadeUp} style={{
            color: 'var(--gold)', fontSize: '1rem',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            fontWeight: 600, marginBottom: '0.75rem',
          }}>
            Hi, I'm
          </motion.p>

          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: 'var(--warm-white)', lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Dinesh Kumar
          </motion.h1>

          <motion.div variants={fadeUp} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', marginBottom: '1.5rem',
          }}>
            <div style={{ height: 1, width: 48, background: 'var(--gold-dim)' }} />
            <p style={{
              color: 'var(--gold)', fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            }}>Full Stack Developer</p>
            <div style={{ height: 1, width: 48, background: 'var(--gold-dim)' }} />
          </motion.div>

          <motion.p variants={fadeUp} style={{
            color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2.5rem',
          }}>
            I craft clean, performant web applications — from pixel-perfect UIs
            to scalable backend APIs. Let's build something great together.
          </motion.p>

          <motion.div variants={fadeUp}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.75rem',
                background: 'var(--gold)', color: 'var(--navy-dark)',
                borderRadius: 8, fontWeight: 700, fontSize: '0.9rem',
                letterSpacing: '0.04em', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              View My Work <FiArrowRight />
            </Link>

            <Link to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.75rem',
                border: '1px solid var(--border)',
                color: 'var(--text)', borderRadius: 8, fontWeight: 500,
                fontSize: '0.9rem', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}>
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '2rem', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          ↓ scroll
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2.5rem',
        }}>
          {STATS.map(s => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── Skills Ticker ── */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center', color: 'var(--text-muted)',
              fontSize: '0.8rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '2rem',
            }}>
            Technologies I Work With
          </motion.p>
          <SkillsTicker />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: 700, margin: '0 auto', textAlign: 'center',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)', borderRadius: 20,
            padding: '3.5rem 2rem',
          }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            color: 'var(--warm-white)', marginBottom: '1rem',
          }}>
            Have a project in mind?
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            I'm always open to discussing new opportunities and interesting projects.
            Let's create something remarkable together.
          </p>
          <Link to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.8rem 2rem',
              background: 'var(--gold)', color: 'var(--navy-dark)',
              borderRadius: 8, fontWeight: 700, fontSize: '0.9rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Let's Talk <FiArrowRight />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
