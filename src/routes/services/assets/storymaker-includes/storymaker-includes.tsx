import './storymaker-includes.css'

const Items = [
  {
    icon: '📲',
    title: 'Stories Ilimitados',
    description:
      'Postagens ao vivo durante todo o evento, sem limite de stories, para que ninguém perca nenhum momento.',
  },
  {
    icon: '⭐',
    title: 'Reels Tratados em 4K',
    description:
      'Vídeos editados profissionalmente e entregues em até 48h após o evento, prontos para publicar.',
  },
  {
    icon: '👥',
    title: '2 Profissionais Fixos',
    description:
      'Uma dupla exclusiva dedicada ao seu evento do início ao fim, captando em ângulos diferentes.',
  },
  {
    icon: '📍',
    title: 'Marcações nos Stories',
    description:
      'Marcamos até 10 perfis (@) nos stories, podendo ser familiares, convidados e fornecedores.',
  },
  {
    icon: '🎬',
    title: 'Alta Resolução',
    description:
      'Toda a captação em qualidade 4K, garantindo o melhor visual para o Instagram e para guardar.',
  },
  {
    icon: '🤩',
    title: 'Múltiplos Ângulos',
    description:
      'Captamos os melhores momentos de perspectivas variadas para conteúdo mais dinâmico e completo.',
  },
]

export function StorymakersIncludes() {
  return (
    <section className="sm-includes">
      <div className="sm-includes-container">
        <div className="sm-includes-header">
          <div className="section-label">O QUE ESTÁ INCLUSO</div>
          <h2 className="sm-includes-title">
            Tudo que você precisa para
            <span className="gradient-text"> um evento inesquecível</span>
          </h2>
          <p className="sm-includes-description">
            Cada pacote vem completo com tudo que precisa para registrar
            e compartilhar o seu evento em tempo real com qualidade profissional.
          </p>
        </div>

        <div className="sm-includes-grid">
          {Items.map(item => (
            <div key={item.title} className="sm-include-card">
              <div className="sm-include-icon">{item.icon}</div>
              <h3 className="sm-include-title">{item.title}</h3>
              <p className="sm-include-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
