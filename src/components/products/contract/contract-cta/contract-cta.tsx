import { Includes } from '@/data/products/contract'
import './contract-cta.css'

export function ContractCTA() {
  return (
    <section id="comprar" className="contract-cta">
      <div className="contract-cta-glow" />

      <div className="contract-cta-container">
        <div className="contract-cta-card">
          <div className="contract-cta-badge">
            OFERTA ESPECIAL
          </div>

          <h2 className="contract-cta-title">
            Proteja seu negócio
            <span className="gradient-text">
              {' '}hoje mesmo
            </span>
          </h2>

          <p className="contract-cta-description">
            Tenha um contrato profissional pronto para utilização,
            evite dores de cabeça e trabalhe com mais segurança
            em todos os seus eventos.
          </p>

          <div className="contract-cta-pricing">
            <span className="contract-cta-old-price">
              De R$ 49,90
            </span>

            <div className="contract-cta-price">
              R$ 19,90
            </div>

            <span className="contract-cta-installments">
              ou 3x de R$ 6,63
            </span>
          </div>

          <div className="contract-cta-includes">
            {Includes.map(item => (
              <div
                key={item}
                className="contract-cta-include"
              >
                <span className="contract-cta-check">
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="btn-primary contract-cta-button"
          >
            QUERO MEU CONTRATO AGORA
          </a>

          <div className="contract-cta-security">
            🔒 Pagamento Seguro • Pix • Cartão • Boleto
          </div>
        </div>
      </div>
    </section>
  )
}