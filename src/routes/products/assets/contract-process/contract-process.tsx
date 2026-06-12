import './contract-process.css'

export function ContractProcess() {
  return (
    <section className="contract-process">
      <div className="container">
        <h2>Como funciona</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Você solicita o contrato</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Preenche os dados do evento</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Assina digitalmente</p>
          </div>

          <div className="step">
            <span>4</span>
            <p>Serviço liberado</p>
          </div>
        </div>
      </div>
    </section>
  )
}