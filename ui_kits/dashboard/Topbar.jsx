function Topbar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '20px 32px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
      position: 'sticky', top: 0, zIndex: 5,
    }}>
      <div style={{
        flex: 1, maxWidth: 420,
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'var(--surface-elevated)',
        borderRadius: 8,
        padding: '8px 12px',
      }}>
        <i data-lucide="search" style={{ width: 16, height: 16, color: 'var(--fg-muted)' }}></i>
        <input placeholder="Search numbers, customers, notes…" style={{
          flex: 1, border: 0, background: 'transparent', outline: 'none',
          fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)',
        }} />
        <span className="small subtle" style={{ fontFamily: 'var(--font-mono)' }}>⌘K</span>
      </div>
      <div style={{ flex: 1 }}></div>
      <button style={{
        width: 36, height: 36, border: '1px solid var(--border)', background: 'var(--surface)',
        borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <i data-lucide="bell" style={{ width: 16, height: 16, color: 'var(--fg-muted)' }}></i>
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 999,
          background: 'var(--accent)', color: 'var(--accent-fg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 13,
        }}>MO</div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>Mira Okafor</span>
          <span style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Atelier Co.</span>
        </div>
      </div>
    </div>
  );
}

window.Topbar = Topbar;
