const ROW1 = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Next.js', 'TailwindCSS', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL']
const ROW2 = ['Framer Motion', 'Express', 'FastAPI', 'Redux', 'Prisma', 'Git', 'Figma', 'REST APIs', 'Linux', 'Redis', 'Firebase', 'Vite']

function TickerRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', padding: '0.4rem 0' }}>
      <div className={reverse ? 'ticker-right' : 'ticker-left'}
        style={{ display: 'flex', gap: '1rem', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            padding: '0.35rem 1.1rem',
            border: '1px solid var(--border)',
            borderRadius: 999,
            color: 'var(--text-muted)',
            fontSize: '0.82rem',
            whiteSpace: 'nowrap',
            background: 'var(--bg-card)',
            letterSpacing: '0.02em',
          }}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function SkillsTicker() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
      <TickerRow items={ROW1} />
      <TickerRow items={ROW2} reverse />
      <style>{`
        .ticker-left  { animation: tick-left  35s linear infinite; }
        .ticker-right { animation: tick-right 35s linear infinite; }
        @keyframes tick-left  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes tick-right { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
      `}</style>
    </div>
  )
}
