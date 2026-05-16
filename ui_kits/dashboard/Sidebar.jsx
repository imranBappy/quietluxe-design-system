function Sidebar({ active, onNav }) {
  const items = [
    { id: 'home',      label: 'This week',  icon: 'sun' },
    { id: 'numbers',   label: 'Numbers',    icon: 'bar-chart-3' },
    { id: 'customers', label: 'Customers',  icon: 'users-round' },
    { id: 'journal',   label: 'Journal',    icon: 'book-open' },
    { id: 'settings',  label: 'Settings',   icon: 'settings' },
  ];
  return (
    <aside style={{
      width: 248, flexShrink: 0,
      borderRight: '1px solid var(--border)',
      background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      padding: '20px 16px',
      height: '100vh', position: 'sticky', top: 0,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '6px 8px 16px',
      }}>
        <div style={{
          fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600,
          letterSpacing: '-0.02em', color: 'var(--fg)',
        }}>
          Quiet<span style={{ fontStyle: 'italic' }}>luxe</span>
        </div>
        <button style={{
          width: 28, height: 28, border: '1px solid var(--border)', background: 'var(--surface)',
          borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <i data-lucide="chevrons-up-down" style={{ width: 14, height: 14, color: 'var(--fg-muted)' }}></i>
        </button>
      </div>

      <div className="label" style={{ padding: '14px 8px 8px' }}>Workspace</div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => {
          const isActive = it.id === active;
          return (
            <button key={it.id} onClick={() => onNav?.(it.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 10px', borderRadius: 6,
              background: isActive ? 'var(--surface-elevated)' : 'transparent',
              border: 0, cursor: 'pointer', textAlign: 'left',
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
              color: isActive ? 'var(--fg)' : 'var(--fg-muted)',
              position: 'relative',
            }}>
              {isActive && (
                <span style={{
                  position: 'absolute', left: -16, top: 8, bottom: 8, width: 2,
                  background: 'var(--accent)', borderRadius: 2,
                }}></span>
              )}
              <i data-lucide={it.icon} style={{ width: 16, height: 16 }}></i>
              {it.label}
            </button>
          );
        })}
      </nav>

      <div style={{ flex: 1 }}></div>

      <div style={{
        padding: 14, border: '1px solid var(--border)', borderRadius: 12,
        background: 'var(--surface)',
      }}>
        <div className="label" style={{ marginBottom: 6 }}>Trial</div>
        <div className="small" style={{ color: 'var(--fg)' }}>22 days remaining</div>
        <div style={{ height: 4, background: 'var(--surface-elevated)', borderRadius: 999, marginTop: 10, overflow: 'hidden' }}>
          <div style={{ width: '73%', height: '100%', background: 'var(--accent)' }}></div>
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
