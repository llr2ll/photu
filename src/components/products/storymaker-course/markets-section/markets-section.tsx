import { Markets } from '@/data/products/storymaker-course'
import './markets-section.css'

export function MarketsSection() {
  return (
    <section className="markets-section">
      <div className="markets-container">
        <div className="markets-header">
          <div className="section-label">
            OPORTUNIDADES
          </div>

          <h2 className="markets-title">
            Onde um
            <span className="gradient-text"> Storymaker </span>
            pode atuar
          </h2>

          <p className="markets-description">
            Aprenda um serviço que pode ser oferecido em diversos tipos de
            eventos e nichos.
          </p>
        </div>

        <div className="markets-grid">
          {Markets.map(market => (
            <div key={market.title} className="market-card">
              <div className="market-icon">
                {market.emoji}
              </div>

              <h3 className="market-title">
                {market.title}
              </h3>

              <p className="market-description">
                {market.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}