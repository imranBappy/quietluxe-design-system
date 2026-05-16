function FeatureGrid() {
  const features = [
    {
      n: '02', label: 'Built for focus', icon: 'compass',
      title: <>Only what <em style={{ fontStyle: 'italic' }}>matters</em> this week.</>,
      body: 'A weekly digest replaces the firehose. Your numbers, the change since last week, and one thing to look at next.',
    },
    {
      n: '03', label: 'Calm by default', icon: 'feather',
      title: <>No alerts. No badges. No <em style={{ fontStyle: 'italic' }}>noise</em>.</>,
      body: 'Notifications are off by default. Choose three things to be told about. Everything else stays in the digest.',
    },
    {
      n: '04', label: 'Made to last', icon: 'gem',
      title: <>An interface you can <em style={{ fontStyle: 'italic' }}>live</em> with.</>,
      body: 'Built on a typographic system, not a trend. The same design will look right in five years, and in ten.',
    },
  ];

  return (
    <section style={{
      maxWidth: 1200, margin: '0 auto',
      padding: '96px 32px',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="label" style={{ marginBottom: 56 }}>Principles</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
        {features.map(f => (
          <div key={f.n}>
            <div style={{
              width: 40, height: 40, borderRadius: 8,
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 28,
            }}>
              <i data-lucide={f.icon} style={{ width: 20, height: 20, color: 'var(--fg)' }}></i>
            </div>
            <div className="numeral" style={{ marginBottom: 10 }}>{f.n} —</div>
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontSize: 26, lineHeight: 1.25,
              fontWeight: 600, margin: 0, letterSpacing: '-0.01em', color: 'var(--fg)',
            }}>{f.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fg-muted)', marginTop: 16 }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

window.FeatureGrid = FeatureGrid;
