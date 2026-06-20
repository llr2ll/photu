import "./results-section.css"

const Results = [
  {
    title: 'Cobrir eventos profissionalmente',
    description: 'Aprenda exatamente o que gravar em cada momento importante.',
  },
  {
    title: 'Criar Stories que engajam',
    description: 'Produza conteúdo que os clientes terão orgulho de compartilhar.',
  },
  {
    title: 'Editar Reels rapidamente',
    description: 'Fluxo simples para entregar conteúdo sem perder horas editando.',
  },
  {
    title: 'Conseguir clientes pelo Instagram',
    description: 'Transforme seu perfil em uma máquina de vendas.',
  },
  {
    title: 'Definir seus próprios preços',
    description: 'Aprenda a precificar sem copiar concorrentes.',
  },
  {
    title: 'Trabalhar usando apenas o celular',
    description: 'Comece com o equipamento que você já possui.',
  },
]

export function ResultsSection() {
  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-header">
          <div className="section-label">
            SUA TRANSFORMAÇÃO
          </div>

          <h2 className="results-title">
            O que você será capaz de fazer
            <span className="gradient-text"> após concluir o curso</span>
          </h2>
        </div>

        <div className="results-grid">
          {Results.map(result => (
            <div key={result.title} className="result-card">
              <div className="result-check">✓</div>

              <div>
                <h3 className="result-title">
                  {result.title}
                </h3>

                <p className="result-description">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}