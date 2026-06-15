import './faq-section.css'

const FAQS = [
  {
    question: 'Preciso ter uma câmera profissional?',
    answer:
      'Não. O curso foi desenvolvido para quem deseja trabalhar utilizando apenas o celular.',
  },
  {
    question: 'O curso é indicado para iniciantes?',
    answer:
      'Sim. O conteúdo começa do zero e mostra todo o processo até a cobertura completa de um evento.',
  },
  {
    question: 'Quanto posso cobrar como Storymaker?',
    answer:
      'Você aprenderá métodos de precificação e poderá definir seus valores de acordo com seu mercado e experiência.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer:
      'O acesso é liberado imediatamente após a compra e permanece disponível conforme as condições da plataforma.',
  },
  {
    question: 'Vou aprender edição também?',
    answer:
      'Sim. O curso aborda os aplicativos essenciais, fluxo de edição e entrega de conteúdo.',
  },
  {
    question: 'Como consigo meus primeiros clientes?',
    answer:
      'Você aprenderá posicionamento, Instagram de vendas e técnicas para atrair e converter clientes.',
  },
]

export function FaqSection() {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="section-label">
            DÚVIDAS FREQUENTES
          </div>

          <h2 className="faq-title">
            Perguntas que você pode ter
          </h2>
        </div>

        <div className="faq-list">
          {FAQS.map(item => (
            <details
              key={item.question}
              className="faq-item"
            >
              <summary className="faq-question">
                {item.question}
              </summary>

              <p className="faq-answer">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}