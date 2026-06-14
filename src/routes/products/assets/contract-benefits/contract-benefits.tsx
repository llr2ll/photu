import './contract-benefits.css'

const Benefits = [
  {
    title: 'Proteção Jurídica',
    description:
      'Formalize acordos e tenha tudo documentado para evitar interpretações equivocadas.',
    icon: '🛡️',
  },
  {
    title: 'Mais Profissionalismo',
    description:
      'Transmita mais confiança e credibilidade desde o primeiro contato com o cliente.',
    icon: '📄',
  },
  {
    title: 'Segurança Financeira',
    description:
      'Defina valores, prazos, sinal e condições de pagamento com clareza.',
    icon: '💰',
  },
  {
    title: 'Menos Conflitos',
    description:
      'Evite discussões sobre entregas, alterações e responsabilidades durante o serviço.',
    icon: '🤝',
  },
]

export function ContractBenefits() {
  return (
    <section className="contract-benefits">
      <div className="contract-benefits-container">
        <div className="contract-benefits-header">
          <div className="section-label">
            VANTAGENS
          </div>

          <h2 className="contract-benefits-title">
            Por que utilizar um
            <span className="gradient-text">
              {' '}contrato profissional
            </span>
          </h2>

          <p className="contract-benefits-description">
            Mais do que um documento, o contrato é uma ferramenta para
            proteger seu trabalho e fortalecer sua relação com os clientes.
          </p>
        </div>

        <div className="contract-benefits-grid">
          {Benefits.map(benefit => (
            <div
              key={benefit.title}
              className="contract-benefit-card"
            >
              <div className="contract-benefit-icon">
                {benefit.icon}
              </div>

              <h3 className="contract-benefit-title">
                {benefit.title}
              </h3>

              <p className="contract-benefit-description">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}