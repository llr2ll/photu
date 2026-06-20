import './markets-section.css'

const Markets = [
  {
    emoji: '🎂',
    title: 'Festas Infantis',
    description:
      'Cobertura em tempo real com stories, reels e bastidores para pais e convidados.',
  },
  {
    emoji: '💍',
    title: 'Casamentos',
    description:
      'Conteúdo instantâneo enquanto a equipe principal produz as fotos e vídeos.',
  },
  {
    emoji: '🎓',
    title: 'Formaturas',
    description:
      'Registre os melhores momentos e entregue conteúdo durante o evento.',
  },
  {
    emoji: '🎤',
    title: 'Eventos Corporativos',
    description:
      'Stories, reels e bastidores para fortalecer a presença digital das empresas.',
  },
  {
    emoji: '🛍️',
    title: 'Lançamentos',
    description:
      'Crie conteúdo para marcas, lojas e empreendedores durante eventos especiais.',
  },
  {
    emoji: '📸',
    title: 'Bastidores',
    description:
      'Trabalhe ao lado de fotógrafos e videomakers agregando um novo serviço.',
  },
]

export function MarketsSection() {
  return (
    <section className="markets-section">
      <div className="markets-container">
        <div className="markets-header">
          <div className="section-label">
            OPORTUNIDADES
          </div>

          <h2 className="markets-title">
            Onde um
            <span className="gradient-text"> Storymaker </span>
            pode atuar
          </h2>

          <p className="markets-description">
            Aprenda um serviço que pode ser oferecido em diversos tipos de
            eventos e nichos.
          </p>
        </div>

        <div className="markets-grid">
          {Markets.map(market => (
            <div key={market.title} className="market-card">
              <div className="market-icon">
                {market.emoji}
              </div>

              <h3 className="market-title">
                {market.title}
              </h3>

              <p className="market-description">
                {market.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}