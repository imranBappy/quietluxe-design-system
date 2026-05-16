function Footer() {
  const cols = [
    { h: 'Product', items: ['Overview', 'Pricing', 'Changelog', 'Status'] },
    { h: 'Company', items: ['About', 'Journal', 'Press', 'Contact'] },
    { h: 'Resources', items: ['Docs', 'Templates', 'Privacy', 'Terms'] },
  ];
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '64px 32px 32px',
        display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 64,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600,
            letterSpacing: '-0.02em', color: 'var(--fg)',
          }}>
            Quiet<span style={{ fontStyle: 'italic' }}>luxe</span>
          </div>
          <p className="small muted" style={{ marginTop: 12, maxWidth: 280 }}>
            A calm dashboard for small teams who'd rather not be interrupted.
          </p>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <div className="label" style={{ marginBottom: 16 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.items.map(i => (
                <li key={i}>
                  <a href="#" style={{ fontSize: 14, color: 'var(--fg-muted)', textDecoration: 'none' }}>{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '24px 32px',
        borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between',
      }}>
        <div className="small subtle">© 2026 Quietluxe Studio · Made slowly</div>
        <div className="small subtle">v 2.4 · Last updated May 2026</div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
