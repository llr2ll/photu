import './contract-hero.css'

export function ContractHero() {
  return (
    <section className="contract-hero">
      <div className="contract-hero-glow contract-hero-glow-top" />
      <div className="contract-hero-glow contract-hero-glow-bottom" />

      <div className="contract-hero-container">
        <div className="contract-hero-content fade-in-up">
          <div className="contract-badge">
            DOCUMENTO PROFISSIONAL
          </div>

          <h1 className="contract-title">
            Contrato Profissional para
            <span className="gradient-text">
              {' '}Fotógrafos
            </span>
          </h1>

          <p className="contract-description">
            Proteja seus eventos, organize suas entregas e trabalhe com mais
            segurança utilizando um contrato pronto para personalização.
          </p>

          <div className="contract-actions">
            <a href="#comprar" className="btn-primary">
              Quero meu contrato
            </a>

            <a href="#detalhes" className="btn-outline">
              Ver detalhes
            </a>
          </div>

          <div className="contract-stats">
            <div>
              <strong>100%</strong>
              <span>Editável</span>
            </div>

            <div>
              <strong>Pronto</strong>
              <span>Para usar</span>
            </div>

            <div>
              <strong>Instantâneo</strong>
              <span>Download imediato</span>
            </div>
          </div>
        </div>

        <div className="contract-visual fade-in-up delay-2">
          <div className="contract-document">
            <div className="contract-document-header">
              CONTRATO DE PRESTAÇÃO
              DE SERVIÇOS FOTOGRÁFICOS
            </div>

            <div className="contract-document-lines">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="contract-document-line"
                />
              ))}
            </div>

            <div className="contract-signature">
              Assinatura
            </div>
          </div>

          <div className="contract-floating-card contract-card-security">
            <span>Proteção</span>
            <strong>Mais segurança jurídica</strong>
          </div>

          <div className="contract-floating-card contract-card-payment">
            <span>Pagamentos</span>
            <strong>Defina prazos e multas</strong>
          </div>

          <div className="contract-floating-card contract-card-rights">
            <span>Direitos</span>
            <strong>Uso das imagens protegido</strong>
          </div>
        </div>
      </div>
    </section>
  )
}