import { DetailsIncludes } from '@/data/products/contract'
import './contract-details.css'

export function ContractDetails() {
  return (
    <section id="detalhes" className="contract-details">
      <div className="contract-details-container">
        <div className="contract-details-visual">
          <div className="contract-details-document">
            <div className="contract-details-document-header">
              O QUE VOCÊ RECEBE
            </div>

            {DetailsIncludes.map(item => (
              <div
                key={item}
                className="contract-details-item"
              >
                <span className="contract-details-check">
                  ✓
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contract-details-content">
          <div className="section-label">
            CONTEÚDO INCLUSO
          </div>

          <h2 className="contract-details-title">
            Tudo que você precisa para
            <span className="gradient-text">
              {' '}trabalhar com segurança
            </span>
          </h2>

          <p className="contract-details-description">
            Desenvolvido para fotógrafos que desejam profissionalizar
            seus atendimentos, proteger seus serviços e formalizar
            acordos com clientes de maneira simples e prática.
          </p>

          <div className="contract-details-list">
            {DetailsIncludes.map(item => (
              <div
                key={item}
                className="contract-details-list-item"
              >
                <span className="contract-details-check">
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}