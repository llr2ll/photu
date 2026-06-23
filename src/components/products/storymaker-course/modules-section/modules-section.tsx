import { Modules } from '@/data/products/storymaker-course'
import './modules-section.css'

export function ModulesSection() {
  return (
    <section id="modulos" className="modules-section">
      <div className="modules-container">
        <div className="modules-header">
          <div className="section-label">
            CONTEÚDO COMPLETO
          </div>

          <h2 className="modules-title">
            Um método completo do
            <span className="gradient-text"> zero ao primeiro evento</span>
          </h2>

          <p className="modules-description">
            Aprenda desde posicionamento profissional,
            gravação e edição até vendas,
            precificação e entrega para clientes.
          </p>
        </div>

        <div className="modules-grid">
          {Modules.map(module => (
            <div key={module.number} className="module-card">
              <div className="module-number">
                {module.number}
              </div>

              <h3 className="module-title">
                {module.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}