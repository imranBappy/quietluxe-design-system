function StatCard({ n, label, value, delta, deltaPositive = true, sparkPath }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 24,
      boxShadow: 'var(--shadow-card)',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div className="label">{label}</div>
        <div className="numeral">{n}</div>
      </div>
      <div style={{
        fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 600,
        letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--fg)',
      }}>{value}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontSize: 12, fontWeight: 500,
          color: deltaPositive ? 'var(--accent-sage)' : 'var(--accent-terracotta)',
        }}>{delta}</span>
        <span className="small subtle">vs last week</span>
      </div>
      <svg viewBox="0 0 200 50" preserveAspectRatio="none" style={{ width: '100%', height: 40, marginTop: 4 }}>
        <path d={sparkPath || 'M0 40 C 30 38, 60 28, 100 22 S 160 14, 200 10'}
              stroke="var(--fg)" strokeWidth="1.25" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

window.StatCard = StatCard;
