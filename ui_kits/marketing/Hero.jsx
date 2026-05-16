function Hero() {
  return (
    <section style={{
      maxWidth: 1200, margin: '0 auto',
      padding: '120px 32px 96px',
      display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'center',
    }}>
      <div>
        <div className="label" style={{ marginBottom: 24 }}>01 — A new perspective</div>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(44px, 5.6vw, 68px)', lineHeight: 1.08, letterSpacing: '-0.03em',
          fontWeight: 600, margin: 0, color: 'var(--fg)',
          textWrap: 'balance',
        }}>
          A new way to read <span style={{ fontStyle: 'italic' }}>your</span> numbers.
        </h1>
        <p style={{
          fontSize: 18, lineHeight: 1.6, color: 'var(--fg-muted)',
          marginTop: 32, maxWidth: 480,
        }}>
          Quietluxe strips the dashboard down to what matters this week.
          Calm, considered, effortlessly clear.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, alignItems: 'center' }}>
          <button className="btn btn-primary">Get started</button>
          <button className="btn btn-ghost">
            See it in motion <i data-lucide="arrow-up-right" style={{ width: 16, height: 16 }}></i>
          </button>
        </div>
        <div className="small subtle" style={{ marginTop: 20 }}>
          No credit card · Cancel any time
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 28,
      boxShadow: 'var(--shadow-card)',
      aspectRatio: '4 / 5',
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div className="label">Revenue · May</div>
        <div className="numeral">01</div>
      </div>
      <div style={{
        fontFamily: 'var(--font-serif)', fontSize: 56, fontWeight: 600,
        letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--fg)',
      }}>
        $84,210
      </div>
      <div className="small muted">Up 12% from April</div>
      <div style={{ flex: 1, position: 'relative', marginTop: 8 }}>
        <svg viewBox="0 0 320 140" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          {[20, 50, 80, 110].map(y => (
            <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#E8E6E0" strokeWidth="1" />
          ))}
          <path d="M0 110 C 40 100, 80 90, 120 80 S 200 50, 240 40 S 300 25, 320 20"
                stroke="#87A96B" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="320" cy="20" r="4" fill="#87A96B" />
        </svg>
      </div>
      <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: 0 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
        <span className="muted">Mar</span>
        <span className="muted">Apr</span>
        <span style={{ color: 'var(--fg)', fontWeight: 500 }}>May</span>
      </div>
    </div>
  );
}

window.Hero = Hero;
