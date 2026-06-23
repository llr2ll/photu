import { Items } from '@/data/service/storymaker-service'
import './storymaker-includes.css'

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
