function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'rgba(250,250,247,0.92)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '20px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em',
            color: 'var(--fg)',
          }}>
            Quiet<span style={{ fontStyle: 'italic' }}>luxe</span>
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexShrink: 0 }}>
          {['Product', 'Pricing', 'Journal', 'About'].map(l => (
            <a key={l} href="#" style={{
              fontSize: 14, color: 'var(--fg-muted)',
              textDecoration: 'none', fontWeight: 500, whiteSpace: 'nowrap',
            }}>{l}</a>
          ))}
          <a href="#" style={{
            fontSize: 14, color: 'var(--fg)',
            textDecoration: 'none', fontWeight: 500, whiteSpace: 'nowrap',
          }}>Sign in</a>
          <button className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 14, whiteSpace: 'nowrap' }}>
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
