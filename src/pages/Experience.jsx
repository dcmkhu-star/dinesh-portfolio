import { motion } from 'framer-motion'
import TimelineItem from '../components/TimelineItem'

const WORK = [
  {
    date: 'Jan 2023 – Present',
    title: 'Software Developer',
    subtitle: 'Tech Solutions Inc. · Full-time',
    description:
      'Develop and maintain multiple full-stack web applications serving thousands of users. Lead frontend architecture using React and TypeScript. Collaborate with cross-functional teams in an Agile environment.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    date: 'Jun 2022 – Dec 2022',
    title: 'Junior Web Developer',
    subtitle: 'StartupXYZ · Full-time',
    description:
      'Built responsive, accessible web interfaces from Figma designs. Integrated RESTful APIs and third-party services. Contributed to backend development with Node.js and Express.',
    tags: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    date: 'Jan 2022 – May 2022',
    title: 'Frontend Intern',
    subtitle: 'WebAgency Co. · Internship',
    description:
      'Worked on client websites, implemented UI components, and helped with bug fixes and performance improvements.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
]

const EDUCATION = [
  {
    date: '2019 – 2023',
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: 'JNTU Hyderabad · CGPA: 8.5 / 10',
    description:
      'Studied core CS fundamentals including Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks. Final year project: Smart Attendance System using facial recognition.',
    tags: ['Data Structures', 'Algorithms', 'DBMS', 'OS', 'Computer Networks'],
  },
  {
    date: '2017 – 2019',
    title: 'Intermediate (MPC)',
    subtitle: 'Narayana Junior College · 95.4%',
    description: 'Focused on Mathematics, Physics, and Chemistry.',
    tags: [],
  },
]

export default function Experience() {
  return (
    <main style={{ paddingTop: 88, paddingBottom: '5rem' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '3rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              color: 'var(--gold)', letterSpacing: '0.12em',
              textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem',
            }}>My journey</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--warm-white)', marginBottom: '1rem',
            }}>Experience</motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ width: 60, height: 2, background: 'linear-gradient(90deg, var(--gold), transparent)', margin: '0 auto' }} />
        </div>

        {/* Work */}
        <section style={{ marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem', color: 'var(--gold)',
              marginBottom: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
            <span>Work Experience</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </motion.h2>

          {WORK.map((item, i) => (
            <TimelineItem key={item.title} {...item} last={i === WORK.length - 1} />
          ))}
        </section>

        {/* Education */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem', color: 'var(--gold)',
              marginBottom: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
            <span>Education</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </motion.h2>

          {EDUCATION.map((item, i) => (
            <TimelineItem key={item.title} {...item} last={i === EDUCATION.length - 1} />
          ))}
        </section>
      </div>
    </main>
  )
}
