function Quote() {
  return (
    <section style={{
      background: 'var(--surface-elevated)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 900, margin: '0 auto',
        padding: '120px 32px',
        textAlign: 'center',
      }}>
        <div className="label" style={{ marginBottom: 32 }}>Field journal</div>
        <blockquote style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 44, lineHeight: 1.25, letterSpacing: '-0.015em',
          fontStyle: 'italic', fontWeight: 400, color: 'var(--fg)',
          margin: 0,
        }}>
          "The dashboard I open in the morning and don't dread.
          Quiet, considered, effortlessly clear."
        </blockquote>
        <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 1, background: 'var(--border-strong)' }}></div>
          <div className="small" style={{ color: 'var(--fg-muted)' }}>Mira Okafor, founder · Atelier Co.</div>
        </div>
      </div>
    </section>
  );
}

window.Quote = Quote;
