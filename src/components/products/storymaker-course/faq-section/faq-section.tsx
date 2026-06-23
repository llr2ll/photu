import { FAQS } from '@/data/products/storymaker-course'
import './faq-section.css'

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