import './contract-problems.css'

const Problems = [
  {
    title: 'Cancelamentos de última hora',
    description:
      'Defina regras claras para cancelamentos e remarcações.',
  },
  {
    title: 'Pagamentos atrasados',
    description:
      'Estabeleça prazos, condições e multas em caso de inadimplência.',
  },
  {
    title: 'Pedidos fora do combinado',
    description:
      'Documente exatamente o que está incluso no serviço.',
  },
  {
    title: 'Uso indevido das imagens',
    description:
      'Proteja seus direitos e deixe a utilização das fotos claramente definida.',
  },
  {
    title: 'Conflitos na entrega',
    description:
      'Formalize prazos e responsabilidades de ambas as partes.',
  },
  {
    title: 'Acordos apenas por WhatsApp',
    description:
      'Tenha um documento profissional que transmite confiança e segurança.',
  },
]

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