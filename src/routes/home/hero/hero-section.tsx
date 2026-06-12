import { ArrowRightIcon } from '@/data/icons.tsx'
import './hero-section.css'

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

        <div className="hero-visual fade-in-up delay-2">
          <div className="hero-camera-glow"/>

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
          <div className="hero-instagram-photo">
          <div className="hero-instagram-photo-header">
              <div className="hero-instagram-avatar" />
              <span>@photu</span>
            </div>

            <div className="hero-instagram-photo-image">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>

            <div className="hero-instagram-photo-footer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-pink)">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>

              <span>1.2k</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}