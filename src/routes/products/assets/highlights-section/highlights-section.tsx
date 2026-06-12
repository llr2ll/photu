import './highlights-section.css'

export function HighlightsSection() {
  return (
    <section className="highlights-section">
      <div className="highlights-container">
        <div className="highlights-header">
          <h2>
            Muito mais que conteúdo, <span>memórias vivas</span>
          </h2>
          <p>
            Transformamos momentos reais em histórias que as pessoas sentem
          </p>
        </div>

        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>📸 Cobertura em tempo real</h3>
            <p>Stories e registros durante o evento, sem perder nenhum momento importante.</p>
          </div>

          <div className="highlight-card">
            <h3>⚡ Conteúdo pronto pra postar</h3>
            <p>Reels e stories editados com qualidade profissional e entregues rápido.</p>
          </div>

          <div className="highlight-card">
            <h3>❤️ Narrativa emocional</h3>
            <p>Não é só filmar — é contar a história do evento com sentimento.</p>
          </div>

          <div className="highlight-card">
            <h3>📱 Foco em redes sociais</h3>
            <p>Conteúdo pensado para Instagram, TikTok e alta performance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}