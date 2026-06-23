import { InstagramLink } from '@/data/footer-links'
import './history-section.css'
import { Testimonials } from '@/data/home'

export function HistorySection() {
  return (
    <section id="our-history" className="history-section">
      <div className="history-bg-glow history-bg-glow-left" />
      <div className="history-bg-glow history-bg-glow-right" />

      <div className="history-container">
        <div className="history-header">
          <div className="section-label">Nossa História</div>

          <h2 className="history-title">
            Histórias que a gente
            <span className="gradient-text"> nunca esquece</span>
          </h2>

          <p className="history-subtitle">
            Cada evento tem uma história. Essas são algumas das que temos
            orgulho de ter feito parte.
          </p>
        </div>

        <div className="history-grid">
          {Testimonials.map((t) => (
            <div key={t.handle} className="history-card">
              <div className="history-card-top">
                <div className="history-avatar">
                  {t.avatar}
                </div>

                <div className="history-user-info">
                  <span className="history-name">{t.name}</span>
                  <span className="history-handle">{t.handle}</span>
                </div>

                <div className="history-ig-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </div>

              <div className="history-event-tag">
                {t.event} · {t.role}
              </div>

              <p className="history-text">
                "{t.text}"
              </p>

              <div className="history-card-footer">
                <div className="history-hearts">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-pink)">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                  <span>{t.hearts}</span>
                </div>

                <div className="history-verified">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-cyan)">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
                  </svg>
                  <span>Cliente verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="history-cta">
          <a className="history-ig-button"
             rel="noopener noreferrer"
             href={InstagramLink}
             target="_blank">
              
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}