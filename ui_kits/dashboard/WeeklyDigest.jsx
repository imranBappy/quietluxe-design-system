function WeeklyDigest() {
  return (
    <div style={{
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 40,
      display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start',
    }}>
      <div>
        <div className="label" style={{ marginBottom: 24 }}>Week of May 4 — May 10</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 38, lineHeight: 1.15,
          letterSpacing: '-0.02em', fontWeight: 600, margin: 0, color: 'var(--fg)',
        }}>
          A <span style={{ fontStyle: 'italic' }}>good</span> week. Revenue up, churn down, one customer to call.
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fg-muted)', marginTop: 20, maxWidth: 460 }}>
          Three new customers joined and two existing customers grew. One customer
          paused — they're worth a five-minute call this week.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28, alignItems: 'center' }}>
          <button className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 14 }}>Read the digest</button>
          <button className="btn btn-ghost" style={{ padding: '10px 12px', fontSize: 14 }}>
            Skip this week
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          { n: '01', t: 'Atelier Co. paused billing', s: 'Worth a call' },
          { n: '02', t: 'Studio Mira upgraded to Annual', s: 'No action' },
          { name: '03', n: '03', t: 'Three new signups from Journal', s: 'On track' },
        ].map(r => (
          <div key={r.n} style={{
            display: 'flex', alignItems: 'baseline', gap: 16,
            padding: '14px 18px', background: 'var(--surface)',
            border: '1px solid var(--border)', borderRadius: 8,
          }}>
            <span className="numeral" style={{ minWidth: 24 }}>{r.n}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: 'var(--fg)', fontWeight: 500 }}>{r.t}</div>
              <div className="small subtle" style={{ marginTop: 2 }}>{r.s}</div>
            </div>
            <i data-lucide="arrow-up-right" style={{ width: 14, height: 14, color: 'var(--fg-muted)' }}></i>
          </div>
        ))}
      </div>
    </div>
  );
}

window.WeeklyDigest = WeeklyDigest;
