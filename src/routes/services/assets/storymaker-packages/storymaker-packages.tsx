import { useState } from 'react'
import './storymaker-packages.css'

const EventTypes = [
  {
    id: 'aniversarios',
    label: '🎂 Aniversários',
    packages: [
      {
        hours: '4 Horas',
        tag: 'MAIS VENDIDO',
        reels: 4,
        price: 'R$ 600',
        featured: true,
      },
      {
        hours: '6 Horas',
        tag: null,
        reels: 6,
        price: 'R$ 900',
        featured: false,
      },
    ],
  },
  {
    id: 'quinze',
    label: '👑 15 Anos',
    packages: [
      {
        hours: '4 Horas',
        tag: 'MAIS VENDIDO',
        reels: 4,
        price: 'R$ 800',
        featured: true,
      },
      {
        hours: '6 Horas',
        tag: null,
        reels: 6,
        price: 'R$ 1.200',
        featured: false,
      },
    ],
  },
  {
    id: 'casamentos',
    label: '💍 Casamentos',
    packages: [
      {
        hours: '4 Horas',
        tag: 'MAIS VENDIDO',
        reels: 4,
        price: 'R$ 800',
        featured: true,
      },
      {
        hours: '8 Horas',
        tag: null,
        reels: 8,
        price: 'R$ 1.600',
        featured: false,
      },
    ],
  },
]

const Includes = [
  '📲 Stories ilimitados durante todo o período',
  '🎬 Resolução em qualidade alta 4K',
  '🤩 Captação em ângulos diferentes',
  '👥 2 profissionais Storymakers / editores fixos',
  '📍 Marcamos até 10 @ nos stories do perfil',
]

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

              <a href="https://api.whatsapp.com/send/?phone=13996545872&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
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
