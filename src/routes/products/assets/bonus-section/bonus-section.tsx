import './bonus-section.css'

const Bonuses = [
  {
    title: 'Meu Kit de Storymaker',
    description:
      'Os equipamentos, acessórios e ferramentas que utilizo para cobrir eventos.',
  },
  {
    title: 'Checklist de Evento',
    description:
      'Um guia prático para não esquecer nenhuma etapa durante a cobertura.',
  },
  {
    title: 'Fluxo de Trabalho',
    description:
      'Processo completo desde o primeiro contato até a entrega final.',
  },
  {
    title: 'Modelo de Atendimento',
    description:
      'Estrutura pronta para conversar com clientes e fechar mais contratos.',
  },
]

export function BonusSection() {
  return (
    <section className="bonus-section">
      <div className="bonus-container">
        <div className="bonus-header">
          <div className="section-label">
            BÔNUS EXCLUSIVOS
          </div>

          <h2 className="bonus-title">
            Além do curso você recebe
            <span className="gradient-text"> materiais extras</span>
          </h2>

          <p className="bonus-description">
            Recursos que vão acelerar seus resultados e facilitar sua rotina
            como Storymaker.
          </p>
        </div>

        <div className="bonus-grid">
          {Bonuses.map(bonus => (
            <div key={bonus.title} className="bonus-card">
              <div className="bonus-icon">
                🎁
              </div>

              <h3 className="bonus-card-title">
                {bonus.title}
              </h3>

              <p className="bonus-card-description">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}