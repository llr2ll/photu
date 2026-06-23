import { EventTypes, Includes } from '@/data/service/storymaker-service'
import { WhatsappLink } from '@/data/footer-links'
import './storymaker-packages.css'
import { useState } from 'react'

export function StorymakersPackages() {
  const [active, setActive] = useState('aniversarios')
  const current = EventTypes.find(e => e.id === active)!

  return (
    <section id="pacotes" className="sm-packages">
      <div className="sm-packages-container">
        <div className="sm-packages-header">
          <div className="section-label">PACOTES</div>
          <h2 className="sm-packages-title">
            Escolha o pacote
            <span className="gradient-text"> ideal para seu evento</span>
          </h2>
          <p className="sm-packages-description">
            Todos os pacotes incluem 2 profissionais fixos, vídeos em 4K
            e entrega em até 48h. Hora adicional: R$ 200.
          </p>
        </div>

        <div className="sm-event-tabs">
          {EventTypes.map(event => (
            <button
              key={event.id}
              className={`sm-event-tab ${active === event.id ? 'sm-event-tab-active' : ''}`}
              onClick={() => setActive(event.id)}
            >
              {event.label}
            </button>
          ))}
        </div>

        <div className="sm-packages-grid">
          {current.packages.map(pkg => (
            <div
              key={pkg.hours}
              className={`sm-package-card ${pkg.featured ? 'sm-package-card-featured' : ''}`}
            >
              {pkg.tag && (
                <div className="sm-package-tag">{pkg.tag}</div>
              )}

              <div className="sm-package-hours">{pkg.hours} - {current.label}</div>

              <div className="sm-package-price">{pkg.price}</div>

              <div className="sm-package-reels">
                <span className="sm-package-reels-count">⭐ {pkg.reels} Vídeos Reels</span>
                <span className="sm-package-reels-note">tratados e editados • entregue em até 48h</span>
              </div>

              <div className="sm-package-includes">
                {Includes.map(item => (
                  <div key={item} className="sm-package-include">
                    <span className="sm-package-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href={WhatsappLink} target="_blank" rel="noopener noreferrer"
                className={pkg.featured ? 'btn-primary sm-package-btn' : 'btn-outline sm-package-btn'}
              >
                Quero esse pacote
              </a>
            </div>
          ))}
        </div>

        <p className="sm-packages-note">
          🕐 Hora adicional de storymaker = R$ 200 • Orçamento válido por 7 dias
        </p>
      </div>
    </section>
  )
}
