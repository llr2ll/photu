import { CREDIT_PACKS } from "@/data/products/image-editor"
import { useState } from "react"

export function CreditsSection() {
  const [selected, setSelected] = useState('popular')

  return (
    <section id="creditos" className="ie-credits">
      <div className="ie-credits-glow" />
      <div className="ie-section-header">
        <div className="section-label">CRÉDITOS</div>
        <h2 className="ie-section-title">Escolha seu pacote</h2>
        <p className="ie-section-sub">
          Créditos não expiram. Use no seu ritmo.
        </p>
      </div>

      <div className="ie-packs-grid">
        {CREDIT_PACKS.map(pack => (
          <button
            key={pack.id}
            className={`ie-pack-card ${pack.highlight ? 'ie-pack-card--highlight' : ''} ${selected === pack.id ? 'ie-pack-card--selected' : ''}`}
            onClick={() => setSelected(pack.id)}
          >
            {pack.highlight && <div className="ie-pack-popular">Mais popular</div>}
            <div className="ie-pack-credits">{pack.credits} <span>créditos</span></div>
            <div className="ie-pack-price">{pack.price}</div>
            <div className="ie-pack-per">{pack.perUnit}</div>

            <div className="ie-pack-uses">
              <div>🔍 {Math.floor(pack.credits / 1)}× upscaling</div>
              <div>🎨 {Math.floor(pack.credits / 2)}× colorização</div>
              <div>✨ {Math.floor(pack.credits / 5)}× animação</div>
            </div>

            <div className="ie-pack-cta">
              {selected === pack.id ? 'Comprar agora' : 'Selecionar'}
            </div>
          </button>
        ))}
      </div>

      <div className="ie-payment-note">
        🔒 Pagamento via Mercado Pago · Pix, Cartão ou Boleto · Seus dados ficam com o Mercado Pago
      </div>
    </section>
  )
}