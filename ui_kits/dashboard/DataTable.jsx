function DataTable() {
  const rows = [
    { name: 'Atelier Co.',     plan: 'Annual',  mrr: '$1,240', status: 'Paused',  tone: 'warn' },
    { name: 'Studio Mira',     plan: 'Annual',  mrr: '$2,400', status: 'Active',  tone: 'ok'   },
    { name: 'Field Notes Ltd', plan: 'Monthly', mrr: '$320',   status: 'Active',  tone: 'ok'   },
    { name: 'Folio & Co.',     plan: 'Monthly', mrr: '$180',   status: 'Trial',   tone: 'neutral' },
    { name: 'Reverie Studio',  plan: 'Annual',  mrr: '$3,600', status: 'Active',  tone: 'ok'   },
  ];
  const tone = {
    ok:      { color: 'var(--accent-sage)',       border: 'var(--accent-sage)' },
    warn:    { color: 'var(--accent-terracotta)', border: 'var(--accent-terracotta)' },
    neutral: { color: 'var(--fg-muted)',          border: 'var(--border-strong)' },
  };
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 24px', borderBottom: '1px solid var(--border)',
      }}>
        <div>
          <div className="label" style={{ marginBottom: 4 }}>06 — Customers</div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, margin: 0, color: 'var(--fg)' }}>
            Recent activity
          </h3>
        </div>
        <button className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: 13 }}>
          View all
        </button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {['Name', 'Plan', 'MRR', 'Status'].map(h => (
              <th key={h} style={{
                textAlign: 'left', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
                fontWeight: 500, color: 'var(--fg-muted)',
                padding: '14px 24px', borderBottom: '1px solid var(--border)',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.name} style={{ borderBottom: i === rows.length - 1 ? 0 : '1px solid var(--border)' }}>
              <td style={{ padding: '16px 24px', fontSize: 14, color: 'var(--fg)', fontWeight: 500 }}>{r.name}</td>
              <td style={{ padding: '16px 24px', fontSize: 14, color: 'var(--fg-muted)' }}>{r.plan}</td>
              <td style={{ padding: '16px 24px', fontSize: 14, color: 'var(--fg)', fontFamily: 'var(--font-mono)' }}>{r.mrr}</td>
              <td style={{ padding: '16px 24px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 12, fontWeight: 500,
                  padding: '4px 10px', borderRadius: 999,
                  border: `1px solid ${tone[r.tone].border}`,
                  color: tone[r.tone].color,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: 999, background: tone[r.tone].color }}></span>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

window.DataTable = DataTable;
