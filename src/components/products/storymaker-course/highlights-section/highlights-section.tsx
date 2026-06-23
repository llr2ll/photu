import { Highlights } from '@/data/products/storymaker-course'
import './highlights-section.css'

export function HighlightsSection() {
  return (
    <section className="highlights-section">
      <div className="highlights-container">
        <div className="highlights-header">
          <div className="section-label">
            POR QUE ESCOLHER A PHOTU
          </div>

          <h2 className="highlights-title">
            Muito mais que conteúdo,
            <span className="gradient-text">
              {' '}memórias vivas
            </span>
          </h2>

          <p className="highlights-description">
            Cada evento tem uma história única. Nossa missão é registrar
            emoções, bastidores e momentos que merecem ser lembrados.
          </p>
        </div>

        <div className="highlights-grid">
          {Highlights.map(item => (
            <div
              key={item.title}
              className="highlight-card"
            >
              <div className="highlight-icon">
                {item.icon}
              </div>

              <h3 className="highlight-title">
                {item.title}
              </h3>

              <p className="highlight-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}