import { motion } from 'framer-motion'

const SKILLS = [
  { category: 'Research & Analysis',
    items: ['Independent Research', 'Statistical Modeling', 'Chi-Square Testing', 'Trend Analysis', 'Data Mining', 'Data Visualization', 'Research Design', 'Synthesis'] },
  { category: 'Operations & Procurement',
    items: ['Procurement Strategy', 'Vendor Management', 'SKU Management', 'Demand Forecasting', 'Cost Reduction', 'Compliance', 'Process Design', 'FMCG Buying'] },
  { category: 'Data & Tools',
    items: ['Power BI', 'Excel Advanced', 'Tableau', 'Dashboards', 'Index Analysis', 'PrimeRX', 'McKesson Connect', 'Google Workspace'] },
  { category: 'Strategy & Business',
    items: ['Financial Ratio Analysis', 'Market Research', 'Competitive Benchmarking', 'Consumer Analytics', 'Business Evaluation', 'Venture Development', 'CRM Strategy', 'ERP Systems'] },
]

const CERTIFICATIONS = [
  { icon: '🏆', text: 'Project Management: Procurement — LinkedIn Learning' },
  { icon: '🏆', text: 'Supply Chain Foundations: Inventory Management — CSCMP' },
  { icon: '📊', text: 'Statistics for Business — PSG College' },
  { icon: '📊', text: 'Probability & Statistics — PSG College' },
  { icon: '🧠', text: 'Positive Psychology — UNC Chapel Hill · Coursera' },
  { icon: '💬', text: 'Enhancing Soft Skills & Personality — IIT · NPTEL' },
]

const LEADERSHIP = [
  { icon: '⭐', text: 'Orientation Leader — LIM College · 100+ students, 9+ events' },
  { icon: '⭐', text: 'Student Head Representative — PSG College · 60–100 interviewees, 200+ peers' },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <main>

      {/* ═══ HEADER — Charcoal ═══ */}
      <section style={{ paddingTop: 96, paddingBottom: '4rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ textAlign: 'center', paddingTop: '2rem' }}>
            <motion.p variants={fadeUp} style={{
              color: 'var(--gold)', letterSpacing: '0.12em',
              textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem',
            }}>Get to know me</motion.p>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--warm-white)', marginBottom: '1rem',
            }}>About Me</motion.h1>
            <motion.div variants={fadeUp} style={{
              width: 60, height: 2,
              background: 'linear-gradient(90deg, var(--gold), transparent)',
              margin: '0 auto',
            }} />
          </motion.div>
        </div>
      </section>

      {/* ═══ BIO + PHOTO — Warm cream (light section) ═══ */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg-cream)' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          {/* Text — dark overrides for cream bg */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem', color: '#33312F', marginBottom: '1.25rem',
            }}>
              Rigorous analyst.<br />Resourceful builder.
            </h2>
            <p style={{ color: '#4A4744', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              I've spent 2+ years inside regulated operations — pharmacy purchasing, compliance, vendor management.
              The kind of environment where errors cost real money and data keeps systems honest.
            </p>
            <p style={{ color: '#4A4744', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              Alongside the operations work, I've run independent research projects across finance, consumer behavior,
              and pharmaceuticals — building a habit of finding patterns that aren't obvious and turning them into
              something useful.
            </p>
            <p style={{ color: '#4A4744', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I'm currently open to roles, ventures, and collaborations where I can do both: dig into problems
              analytically and build solutions that actually work.
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 280, height: 280 }}>
              <div style={{
                width: 280, height: 280, borderRadius: 16, overflow: 'hidden',
                border: '2px solid rgba(51,49,47,0.18)',
                boxShadow: '0 12px 40px rgba(51,49,47,0.18)',
              }}>
                <img src="/dinesh.jpg" alt="Dinesh Kumar Ammaiappan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 12%' }} />
              </div>
              <div style={{
                position: 'absolute', inset: -10, borderRadius: 24,
                border: '1px dashed rgba(51,49,47,0.2)', pointerEvents: 'none',
              }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SKILLS — Charcoal ═══ */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem', color: 'var(--warm-white)',
              marginBottom: '2.5rem', textAlign: 'center',
            }}>Skills &amp; Capabilities</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {SKILLS.map((group, i) => (
                <motion.div key={group.category}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(232,184,92,0.14)' }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem' }}>
                  <p style={{
                    color: 'var(--gold)', fontSize: '0.78rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem',
                  }}>{group.category}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {group.items.map(skill => (
                      <span key={skill} style={{
                        padding: '0.3rem 0.75rem',
                        background: 'rgba(232,184,92,0.1)',
                        border: '1px solid rgba(232,184,92,0.2)',
                        borderRadius: 6, fontSize: '0.82rem', color: 'var(--text)',
                      }}>{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS — Deepest dark ═══ */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg-dark)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem', color: 'var(--warm-white)',
              marginBottom: '2rem', textAlign: 'center',
            }}>Certifications</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.85rem' }}>
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3, boxShadow: '0 6px 24px rgba(232,184,92,0.12)' }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.85rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(251,248,241,0.12)',
                    borderRadius: 10, padding: '0.9rem 1.25rem',
                  }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{cert.icon}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.45 }}>{cert.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ LEADERSHIP — Clay ═══ */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg-mid)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem', color: 'var(--warm-white)',
              marginBottom: '2rem', textAlign: 'center',
            }}>Leadership</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {LEADERSHIP.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3, boxShadow: '0 6px 24px rgba(51,49,47,0.25)' }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.85rem',
                    background: 'rgba(251,248,241,0.12)',
                    border: '1px solid rgba(251,248,241,0.2)',
                    borderRadius: 10, padding: '0.9rem 1.25rem',
                  }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: 'var(--warm-white)', fontSize: '0.88rem', lineHeight: 1.45 }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
