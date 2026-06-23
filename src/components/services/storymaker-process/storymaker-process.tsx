import { Steps } from '@/data/service/storymaker-service'
import './storymaker-process.css'

export function StorymakersProcess() {
  return (
    <section id="como-funciona" className="sm-process">
      <div className="sm-process-container">
        <div className="sm-process-header">
          <div className="section-label">COMO FUNCIONA</div>
          <h2 className="sm-process-title">
            Do contato à entrega,
            <span className="gradient-text"> do início ao fim</span>
          </h2>
          <p className="sm-process-description">
            Um processo simples e descomplicado para que você foque
            apenas em aproveitar o seu evento.
          </p>
        </div>

        <div className="sm-process-timeline">
          {Steps.map((step, index) => (
            <div key={step.number} className="sm-process-step">
              <div className="sm-process-number">{step.number}</div>
              <h3 className="sm-process-step-title">{step.title}</h3>
              <p className="sm-process-step-description">{step.description}</p>
              {index < Steps.length - 1 && (
                <div className="sm-process-line" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
