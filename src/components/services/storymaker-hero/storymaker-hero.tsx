import './storymaker-hero.css'

export function StorymakersHero() {
  return (
    <section className="sm-hero">
      <div className="sm-hero-glow sm-hero-glow-top" />
      <div className="sm-hero-glow sm-hero-glow-bottom" />

      <div className="sm-hero-container">
        <div className="sm-hero-content fade-in-up">
          <div className="sm-badge">
            STORYMAKER PROFISSIONAL • SANTOS - SP
          </div>

          <h1 className="sm-hero-title">
            Seu evento em
            <span className="gradient-text"> tempo real</span>,
            {' '}para o Instagram
          </h1>

          <p className="sm-hero-description">
            Stories ilimitados e Reels em 4K entregues em até 48h.
            2 profissionais dedicados ao seu evento do início ao fim.
          </p>

          <div className="sm-hero-actions">
            <a href="#pacotes" className="btn-primary">
              Ver pacotes
            </a>
            <a href="#como-funciona" className="btn-outline">
              Como funciona
            </a>
          </div>

          <div className="sm-hero-stats">
            <div>
              <strong>500+</strong>
              <span>Famílias atendidas</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Feedbacks positivos</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>Entrega dos vídeos</span>
            </div>
          </div>
        </div>

        <div className="sm-hero-visual fade-in-up delay-2">
          <div className="sm-phone-mockup">
            <div className="sm-phone-screen">
              <div className="sm-stories-bar">
                <div className="sm-story-seg sm-story-seg-done" />
                <div className="sm-story-seg sm-story-seg-active" />
                <div className="sm-story-seg" />
                <div className="sm-story-seg" />
              </div>
              <div className="sm-phone-content">
                <div className="sm-live-indicator">
                  <span className="sm-live-dot" />
                  AO VIVO
                </div>
                <div className="sm-phone-event-label">💍 Casamento • Santos</div>
              </div>
            </div>
          </div>

          <div className="sm-floating-card sm-card-reels">
            <span>Entregue em</span>
            <strong>48h após o evento</strong>
          </div>

          <div className="sm-floating-card sm-card-4k">
            <span>Qualidade</span>
            <strong>Vídeos em 4K</strong>
          </div>

          <div className="sm-floating-card sm-card-team">
            <span>Equipe</span>
            <strong>2 Storymakers fixos</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
