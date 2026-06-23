import { Bonuses } from '@/data/products/storymaker-course'
import './bonus-section.css'

export function BonusSection() {
  return (
    <section className="bonus-section">
      <div className="bonus-container">
        <div className="bonus-header">
          <div className="section-label">
            BÔNUS EXCLUSIVOS
          </div>

          <h2 className="bonus-title">
            Além do curso você recebe
            <span className="gradient-text"> materiais extras</span>
          </h2>

          <p className="bonus-description">
            Recursos que vão acelerar seus resultados e facilitar sua rotina
            como Storymaker.
          </p>
        </div>

        <div className="bonus-grid">
          {Bonuses.map(bonus => (
            <div key={bonus.title} className="bonus-card">
              <div className="bonus-icon">
                🎁
              </div>

              <h3 className="bonus-card-title">
                {bonus.title}
              </h3>

              <p className="bonus-card-description">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}