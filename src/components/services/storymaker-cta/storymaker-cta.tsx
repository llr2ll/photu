import { InstagramLink, WhatsappLink } from '@/data/footer-links'
import './storymaker-cta.css'

export function StorymakersCtaSection() {
  return (
    <section id="contratar" className="sm-cta">
      <div className="sm-cta-glow" />

      <div className="sm-cta-container">
        <div className="sm-cta-card">
          <div className="sm-cta-badge">RESERVE SUA DATA</div>

          <h2 className="sm-cta-title">
            Pronto para tornar seu
            <span className="gradient-text"> evento inesquecível?</span>
          </h2>

          <p className="sm-cta-description">
            Fale com a gente pelo WhatsApp, escolha seu pacote e garanta
            a data na nossa agenda. Atendemos toda a Baixada Santista.
          </p>

          <div className="sm-cta-numbers">
            <div className="sm-cta-stat">
              <strong>500+</strong>
              <span>Famílias atendidas</span>
            </div>
            <div className="sm-cta-stat">
              <strong>100%</strong>
              <span>Feedbacks positivos</span>
            </div>
            <div className="sm-cta-stat">
              <strong>48h</strong>
              <span>Entrega dos Reels</span>
            </div>
          </div>

          <a className="btn-primary sm-cta-button"
             rel="noopener noreferrer" 
             href={WhatsappLink} 
             target="_blank">
            Quero reservar minha data
          </a>

          <div className="sm-cta-social">
            <span>Veja nosso trabalho no</span>
            <a className="sm-cta-instagram"
              rel="noopener noreferrer"
              href={InstagramLink}
              target="_blank">
              @studioyastrees
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
