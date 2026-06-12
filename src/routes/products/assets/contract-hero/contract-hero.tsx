import './contract-hero.css'

export function ContractHero() {
  return (
    <section className="contract-hero">
      <div className="contract-container">
        <span className="badge">Contrato digital seguro</span>

        <h1>
          Formalize seu projeto com segurança e clareza
        </h1>

        <p>
          Um contrato simples, direto e transparente para garantir o alinhamento entre você e nosso serviço de Storymaker.
        </p>

        <div className="hero-actions">
          <button className="primary">Gerar contrato</button>
          <button className="secondary">Ver detalhes</button>
        </div>
      </div>
    </section>
  )
}