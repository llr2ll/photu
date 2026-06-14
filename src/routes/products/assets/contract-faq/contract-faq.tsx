import './contract-faq.css'

const FAQS = [
  {
    question: 'Posso editar o contrato?',
    answer:
      'Sim. O documento foi desenvolvido para ser totalmente personalizável, permitindo adaptar informações, cláusulas e condições ao seu negócio.',
  },
  {
    question: 'Recebo imediatamente após a compra?',
    answer:
      'Sim. Após a confirmação do pagamento você recebe acesso imediato ao arquivo.',
  },
  {
    question: 'Serve para ensaios fotográficos?',
    answer:
      'Sim. O modelo pode ser utilizado tanto para ensaios quanto para eventos, bastando ajustar as informações necessárias.',
  },
  {
    question: 'Serve para casamentos e eventos?',
    answer:
      'Sim. O contrato foi pensado para fotógrafos que atuam em diversos segmentos e pode ser adaptado para diferentes tipos de trabalho.',
  },
  {
    question: 'Preciso ter conhecimento jurídico?',
    answer:
      'Não. O documento já possui uma estrutura pronta para uso e foi criado para facilitar sua rotina profissional.',
  },
  {
    question: 'Posso utilizar quantas vezes quiser?',
    answer:
      'Sim. Após a compra você poderá utilizar o contrato em todos os seus atendimentos futuros.',
  },
]

export function ContractFaq() {
  return (
    <section className="contract-faq">
      <div className="contract-faq-container">
        <div className="contract-faq-header">
          <div className="section-label">
            DÚVIDAS FREQUENTES
          </div>

          <h2 className="contract-faq-title">
            Perguntas que você pode ter
          </h2>

          <p className="contract-faq-description">
            Tudo o que você precisa saber antes de adquirir seu contrato.
          </p>
        </div>

        <div className="contract-faq-list">
          {FAQS.map(item => (
            <details
              key={item.question}
              className="contract-faq-item"
            >
              <summary className="contract-faq-question">
                {item.question}
              </summary>

              <p className="contract-faq-answer">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}