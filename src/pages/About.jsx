import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Redux', 'HTML5 / CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'Socket.io'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma ORM'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'AWS', 'Linux', 'Figma', 'GitHub Actions', 'VS Code'],
  },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <main style={{ paddingTop: 88, paddingBottom: '5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '3rem' }}>
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

        {/* Bio + Avatar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'center', marginBottom: '5rem',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem', color: 'var(--warm-white)',
              marginBottom: '1.25rem',
            }}>
              Passionate developer,<br />lifelong learner.
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              I'm a full-stack developer based in India with a love for building clean,
              performant web applications. I enjoy turning complex problems into elegant
              solutions that make a real difference.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              With experience across the entire development stack, I craft everything from
              pixel-perfect UIs to scalable backend APIs. I'm always exploring new technologies
              and pushing the boundaries of what's possible on the web.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              When I'm not coding, you'll find me contributing to open source, experimenting
              with design, or learning something new.
            </p>
            <a href="/resume.pdf" download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.5rem',
                border: '1px solid var(--gold)',
                color: 'var(--gold)', borderRadius: 8,
                fontSize: '0.875rem', fontWeight: 500,
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy-dark)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}>
              <FiDownload /> Download CV
            </a>
          </motion.div>

          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 280, height: 280, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--navy-mid), var(--navy-dark))',
              border: '2px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: '5rem',
              color: 'var(--gold)', position: 'relative',
            }}>
              DK
              <div style={{
                position: 'absolute', inset: -12, borderRadius: '50%',
                border: '1px dashed var(--border)',
              }} />
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem', color: 'var(--warm-white)',
            marginBottom: '2.5rem', textAlign: 'center',
          }}>Skills & Technologies</h2>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}>
            {SKILLS.map((group, i) => (
              <motion.div key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12, padding: '1.5rem',
                }}>
                <p style={{
                  color: 'var(--gold)', fontSize: '0.78rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontWeight: 600, marginBottom: '1rem',
                }}>{group.category}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.items.map(skill => (
                    <span key={skill} style={{
                      padding: '0.3rem 0.75rem',
                      background: 'rgba(26,74,122,0.3)',
                      border: '1px solid var(--border)',
                      borderRadius: 6, fontSize: '0.82rem',
                      color: 'var(--text)',
                    }}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
