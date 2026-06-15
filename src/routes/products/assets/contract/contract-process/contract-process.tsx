import './contract-process.css'

const Steps = [
  {
    number: '01',
    title: 'Compre',
    description:
      'Finalize sua compra de forma rápida e segura.',
  },
  {
    number: '02',
    title: 'Receba',
    description:
      'O contrato é liberado imediatamente após a confirmação.',
  },
  {
    number: '03',
    title: 'Personalize',
    description:
      'Adapte os dados para o seu negócio e seus clientes.',
  },
  {
    number: '04',
    title: 'Utilize',
    description:
      'Envie para assinatura e trabalhe com muito mais segurança.',
  },
]

export function ContractProcess() {
  return (
    <section className="contract-process">
      <div className="contract-process-container">
        <div className="contract-process-header">
          <div className="section-label">
            COMO FUNCIONA
          </div>

          <h2 className="contract-process-title">
            Em poucos minutos você estará
            <span className="gradient-text">
              {' '}protegido
            </span>
          </h2>

          <p className="contract-process-description">
            Um processo simples para começar a utilizar seu contrato
            profissional imediatamente.
          </p>
        </div>

        <div className="contract-process-timeline">
          {Steps.map((step, index) => (
            <div
              key={step.number}
              className="contract-process-step"
            >
              <div className="contract-process-number">
                {step.number}
              </div>

              <h3 className="contract-process-step-title">
                {step.title}
              </h3>

              <p className="contract-process-step-description">
                {step.description}
              </p>

              {index < Steps.length - 1 && (
                <div className="contract-process-line" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}