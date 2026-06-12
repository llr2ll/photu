import './modules-section.css'

const Modules = [
  { number: '01', title: 'Entendimento' },
  { number: '02', title: 'Posicionamento' },
  { number: '03', title: 'Equipamentos' },
  { number: '04', title: 'Aplicativos Essenciais' },
  { number: '05', title: 'Técnicas de Captação' },
  { number: '06', title: 'Edição Rápida' },
  { number: '07', title: 'Instagram de Vendas' },
  { number: '08', title: 'Atendimento que Fecha Contratos' },
  { number: '09', title: 'Quanto Cobrar Como Storymaker' },
  { number: '10', title: 'Pagamentos, Contratos e Entrega' },
  { number: '11', title: 'O Dia do Evento' },
  { number: '12', title: 'Pós-Evento e Encantamento' },
]

export function ModulesSection() {
  return (
    <section id="modulos" className="modules-section">
      <div className="modules-container">
        <div className="modules-header">
          <div className="section-label">
            CONTEÚDO COMPLETO
          </div>

          <h2 className="modules-title">
            Um método completo do
            <span className="gradient-text"> zero ao primeiro evento</span>
          </h2>

          <p className="modules-description">
            Aprenda desde posicionamento profissional,
            gravação e edição até vendas,
            precificação e entrega para clientes.
          </p>
        </div>

        <div className="modules-grid">
          {Modules.map(module => (
            <div key={module.number} className="module-card">
              <div className="module-number">
                {module.number}
              </div>

              <h3 className="module-title">
                {module.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}