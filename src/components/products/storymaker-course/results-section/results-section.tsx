import { Results } from "@/data/products/storymaker-course"
import "./results-section.css"

export function ResultsSection() {
  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-header">
          <div className="section-label">
            SUA TRANSFORMAÇÃO
          </div>

          <h2 className="results-title">
            O que você será capaz de fazer
            <span className="gradient-text"> após concluir o curso</span>
          </h2>
        </div>

        <div className="results-grid">
          {Results.map(result => (
            <div key={result.title} className="result-card">
              <div className="result-check">✓</div>

              <div>
                <h3 className="result-title">
                  {result.title}
                </h3>

                <p className="result-description">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}