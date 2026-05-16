function CTA() {
  return (
    <section style={{
      maxWidth: 1200, margin: '0 auto',
      padding: '120px 32px',
      display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, alignItems: 'end',
    }}>
      <div>
        <div className="label" style={{ marginBottom: 24 }}>05 — Begin</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 56, lineHeight: 1.08, letterSpacing: '-0.02em',
          fontWeight: 600, margin: 0, color: 'var(--fg)',
          maxWidth: 720,
        }}>
          Start with a <span style={{ fontStyle: 'italic' }}>quieter</span> week.
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
        <button className="btn btn-primary">Get started</button>
        <div className="small subtle">Free for 30 days · No credit card</div>
      </div>
    </section>
  );
}

window.CTA = CTA;
