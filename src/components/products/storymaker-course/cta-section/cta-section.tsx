import { Includes } from '@/data/products/storymaker-course'
import './cta-section.css'

export function CtaSection() {
  return (
    <section id="comprar" className="cta-section">
      <div className="cta-glow" />

      <div className="cta-container">
        <div className="cta-card">
          <div className="cta-badge">
            OFERTA ESPECIAL
          </div>

          <h2 className="cta-title">
            Comece sua jornada como
            <span className="gradient-text">
              {' '}Storymaker Profissional
            </span>
          </h2>

          <p className="cta-description">
            Aprenda a captar, editar e vender coberturas para eventos
            utilizando apenas o seu celular.
          </p>

          <div className="cta-pricing">
            <span className="cta-price-old">
              De R$ 497,00
            </span>

            <div className="cta-price">
              R$ 197
            </div>

            <span className="cta-installments">
              ou 12x de R$ 19,70
            </span>
          </div>

          <div className="cta-includes">
            {Includes.map(item => (
              <div key={item} className="cta-include">
                <span className="cta-check">✓</span>
                {item}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="btn-primary cta-button"
          >
            QUERO ME TORNAR STORYMAKER
          </a>

          <div className="cta-payment">
            🔒 Pagamento Seguro • Pix • Cartão • Boleto
          </div>
        </div>
      </div>
    </section>
  )
}