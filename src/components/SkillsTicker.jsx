const ROW1 = [
  'Power BI', 'Excel Advanced', 'Vendor Management', 'Demand Forecasting',
  'SKU Management', 'DEA Compliance', 'PrimeRX', 'Market Research',
  'CRM Strategy', 'Consumer Analytics', 'Cost Reduction', 'McKesson Connect',
]
const ROW2 = [
  'Statistical Analysis', 'Chi-Square Testing', 'Financial Ratio Analysis',
  'Procurement Strategy', 'Trend Analysis', 'Data Visualization',
  'Research Design', 'Index Analysis', 'Competitive Benchmarking',
  'ERP Systems', 'NDC Standardization', 'Supplier Negotiation',
]

function TickerRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', padding: '0.4rem 0' }}>
      <div className={reverse ? 'ticker-right' : 'ticker-left'}
        style={{ display: 'flex', gap: '0.85rem', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            padding: '0.32rem 1rem',
            border: '1px solid rgba(58,38,8,0.22)',
            borderRadius: 999,
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            background: 'rgba(58,38,8,0.06)',
            letterSpacing: '0.03em',
            fontWeight: 500,
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
        .ticker-left  { animation: tick-left  40s linear infinite; }
        .ticker-right { animation: tick-right 40s linear infinite; }
        @keyframes tick-left  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes tick-right { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
      `}</style>
    </div>
  )
}
