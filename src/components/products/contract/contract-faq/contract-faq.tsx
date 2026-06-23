import { FAQS } from '@/data/products/contract'
import './contract-faq.css'

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