import './contract-details.css'

export function ContractDetails() {
  return (
    <section className="contract-details">
      <div className="container">
        <h2>O que este contrato cobre</h2>

        <div className="grid">
          <div className="card">
            <h3>📸 Serviço de Storymaker</h3>
            <p>Cobertura de eventos, festas e produção de conteúdo social.</p>
          </div>

          <div className="card">
            <h3>📱 Entrega digital</h3>
            <p>Reels, stories e materiais prontos para redes sociais.</p>
          </div>

          <div className="card">
            <h3>⏱ Prazo de entrega</h3>
            <p>Definição clara de tempo para edição e entrega do material.</p>
          </div>

          <div className="card">
            <h3>🔒 Segurança jurídica</h3>
            <p>Proteção para ambas as partes com termos simples e diretos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}