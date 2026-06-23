import { Problems } from '@/data/products/contract'
import './contract-problems.css'

export function ContractProblems() {
  return (
    <section className="contract-problems">
      <div className="contract-problems-container">
        <div className="contract-problems-header">
          <div className="section-label">
            EVITE DOR DE CABEÇA
          </div>

          <h2 className="contract-problems-title">
            O contrato ajuda a evitar
            <span className="gradient-text">
              {' '}situações como estas
            </span>
          </h2>

          <p className="contract-problems-description">
            Trabalhar sem contrato pode gerar prejuízos financeiros,
            conflitos com clientes e insegurança durante o evento.
          </p>
        </div>

        <div className="contract-problems-grid">
          {Problems.map(problem => (
            <div
              key={problem.title}
              className="contract-problem-card"
            >
              <div className="contract-problem-icon">
                ⚠
              </div>

              <h3 className="contract-problem-title">
                {problem.title}
              </h3>

              <p className="contract-problem-description">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}