import { motion } from 'framer-motion'
import TimelineItem from '../components/TimelineItem'

const WORK = [
  {
    date: 'Jan 2024 – Present',
    title: 'Inventory & Procurement Operations Analyst',
    subtitle: 'Andy Pharmacy · NYC',
    description: [
      'Own purchasing for 1,000+ SKUs — 98% accuracy',
      'Cut spend 12% — $25K+ saved',
      'Built Power BI & Excel dashboards',
      'Regulated compliance — zero violations',
      'Self-initiated 10-year data study — patterns beyond job scope',
    ],
    tags: ['Power BI', 'Excel', 'DEA Compliance', 'PrimeRX', 'Demand Forecasting', 'Vendor Management'],
  },
  {
    date: 'Sep 2023 – Dec 2023',
    title: 'Inventory & Procurement Analyst — Intern',
    subtitle: 'Thriftcare Pharmacy · NYC',
    description: [
      '65% waste reduction in one quarter',
      '10+ vendors managed',
      'PO-to-invoice reconciliation',
      'Excel inventory trackers',
    ],
    tags: ['Excel', 'SKU Management', 'Invoice Reconciliation', 'Supplier Management'],
  },
  {
    date: '2022',
    title: 'Business Operations & Procurement Lead',
    subtitle: 'Guru Traders · India',
    description: [
      'Ran procurement & inventory for a family trading business',
      'FMCG buying & stock replenishment',
      'Supplier negotiation across categories',
      'First-hand: how a business actually runs',
    ],
    tags: ['FMCG Procurement', 'Inventory Management', 'Supplier Negotiation', 'Business Operations'],
  },
  {
    date: '2022',
    title: 'Finance Intern',
    subtitle: 'Sravn Financial Services · India',
    description: [
      'Live stock market operations',
      'Risk management',
      'Real investments, real returns',
    ],
    tags: ['Stock Market', 'Risk Management', 'Investment Analysis'],
  },
  {
    date: 'Jun 2021 – Jan 2022',
    title: 'Marketing & Finance Intern',
    subtitle: 'Metal Shapes · India',
    description: [
      '50+ B2B client financial analyses',
      'Competitive benchmarking',
      'Director-level business reviews',
    ],
    tags: ['B2B Finance', 'Financial Reporting', 'Competitive Analysis', 'Operations'],
  },
]

const EDUCATION = [
  {
    date: 'Jan 2023 – Dec 2023',
    title: 'MS · Consumer Analytics',
    subtitle: 'LIM College · New York City',
    description: '',
    tags: [],
  },
  {
    date: 'Jul 2019 – Jun 2022',
    title: 'BCom Computer Applications',
    subtitle: 'PSG College of Arts & Science · India',
    description: '',
    tags: [],
  },
]

export default function Experience() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: '5rem' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '3rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              color: 'var(--gold)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              marginBottom: '0.75rem',
            }}>
            My journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--warm-white)',
              marginBottom: '1rem',
            }}>
            Experience
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              width: 60,
              height: 2,
              background: 'linear-gradient(90deg, var(--gold), transparent)',
              margin: '0 auto',
            }}
          />
        </div>

        <section style={{ marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              color: 'var(--gold)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
            <span>Work Experience</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </motion.h2>

          {WORK.map((item, i) => (
            <TimelineItem key={item.title} {...item} last={i === WORK.length - 1} />
          ))}
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              color: 'var(--gold)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
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
