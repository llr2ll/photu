import './hero-section.css'
import { ArrowRightIcon } from '@/data/icons.tsx'

export function Hero() {
  return (
    <section id="início" className="hero">
      <div className="hero-glow hero-glow-top" />
      <div className="hero-glow hero-glow-bottom" />

      <div className="hero-container">
        <div className="fade-in-up">
          <div className="section-label">Suas Histórias, Nossas Fotos</div>

          <h1 className="hero-title">
            Transforme momentos em lembranças{' '}
            <span className="gradient-text">para sempre</span>
          </h1>

          <p className="hero-description">
            Cursos, produtos e serviços para Fotógrafos e para quem ama
            reviver memórias.
          </p>

          <div className="hero-actions">
            <a href="#nossos-produtos" className="btn-primary">Ver Produtos<ArrowRightIcon /></a>
            <a href="#nossos-serviços" className="btn-outline">Contratar Serviços</a>
          </div>

          <div className="hero-stats">
            {[
              { num: '500 +', label: 'Clientes Atendidos' },
              { num: '98%', label: 'Satisfação' },
              { num: '2 +', label: 'Anos de experiência' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="hero-stat-number">{stat.num}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── VISUAL COLUMN ── */}
        <div className="hero-visual fade-in-up delay-2">

          {/* Central camera glow orb */}
          <div className="hero-camera-glow" />

          {/* ── LENS / CAMERA RING ── */}
          <div className="hero-lens-ring">
            <div className="hero-lens-inner">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="38" stroke="rgba(233,30,140,0.3)" strokeWidth="1.5" strokeDasharray="6 4" />
                <circle cx="40" cy="40" r="28" stroke="rgba(233,30,140,0.15)" strokeWidth="1" />
                <circle cx="40" cy="40" r="18" fill="rgba(233,30,140,0.08)" stroke="rgba(233,30,140,0.4)" strokeWidth="1.5" />
                <circle cx="40" cy="40" r="8" fill="rgba(233,30,140,0.25)" />
                <circle cx="35" cy="35" r="3" fill="rgba(255,255,255,0.15)" />
              </svg>
            </div>
          </div>

          {/* ── FILM STRIP (left side) ── */}
          <div className="hero-film-strip">
            <div className="hero-film-holes">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="hero-film-hole" />
              ))}
            </div>
            <div className="hero-film-frames">
              {[
                'linear-gradient(135deg, #1a0a14, #2d0e22)',
                'linear-gradient(135deg, #0a1a1a, #0d2626)',
                'linear-gradient(135deg, #1a1000, #2d1c00)',
                'linear-gradient(135deg, #0d0a1a, #1a1040)',
              ].map((bg, i) => (
                <div key={i} className="hero-film-frame" style={{ background: bg }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="hero-film-holes">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="hero-film-hole" />
              ))}
            </div>
          </div>

          {/* ── PHOTO STRIP (top right, original) ── */}
          <div className="hero-photo-strip">
            {[
              'linear-gradient(135deg, #1a1a2e, #16213e)',
              'linear-gradient(135deg, #0d0d0d, #1a1a1a)',
              'linear-gradient(135deg, #111, #222)',
            ].map((bg, i) => (
              <div key={i} className="hero-photo-item" style={{ background: bg }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            ))}
            <div className="hero-photo-heart">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-pink)">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
          </div>

          {/* ── INSTAGRAM CARD (original) ── */}
          <div className="hero-instagram-photo">
            <div className="hero-instagram-photo-header">
              <div className="hero-instagram-avatar" />
              <span>@photu</span>
            </div>
            <div className="hero-instagram-photo-image">
              <img width="120" height="120" src="/home/storymaker-edit.png" alt="Instagram Photo" />
            </div>
            <div className="hero-instagram-photo-footer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-pink)">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <span>1.2k</span>
            </div>
          </div>

          {/* ── LIVE BADGE (top center) ── */}
          <div className="hero-live-badge">
            <span className="hero-live-dot" />
            GRAVANDO
          </div>

          {/* ── SHUTTER COUNTER ── */}
          <div className="hero-shutter-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <div>
              <span className="hero-shutter-label">Fotos capturadas</span>
              <strong className="hero-shutter-count">12.847</strong>
            </div>
          </div>

          {/* ── WAVEFORM / STORY BAR ── */}
          <div className="hero-story-bar">
            <div className="hero-story-avatar">
              <div className="hero-story-ring" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="hero-story-info">
              <span className="hero-story-name">Story • Ao vivo</span>
              <div className="hero-story-wave">
                {[4, 8, 6, 12, 7, 10, 5, 9, 6, 11, 4, 8].map((h, i) => (
                  <div key={i} className="hero-story-bar-seg" style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>

          {/* ── FLOATING SPARKLES ── */}
          <div className="hero-sparkle hero-sparkle-1">✦</div>
          <div className="hero-sparkle hero-sparkle-2">✦</div>
          <div className="hero-sparkle hero-sparkle-3">✧</div>

        </div>
      </div>
    </section>
  )
}