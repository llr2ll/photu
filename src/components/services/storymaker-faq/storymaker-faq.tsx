import { FAQS } from '@/data/service/storymaker-service'
import './storymaker-faq.css'

export function StorymakersFrequentlyAskedQuestions() {
  return (
    <section className="sm-faq">
      <div className="sm-faq-container">
        <div className="sm-faq-header">
          <div className="section-label">DÚVIDAS FREQUENTES</div>
          <h2 className="sm-faq-title">Perguntas que você pode ter</h2>
          <p className="sm-faq-description">
            Tudo o que você precisa saber antes de contratar o Studio Yastrees.
          </p>
        </div>
        <div className="sm-faq-list">
          {FAQS.map(item => (
            <details key={item.question} className="sm-faq-item">
              <summary className="sm-faq-question">{item.question}</summary>
              <p className="sm-faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}