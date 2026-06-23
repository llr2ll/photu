import { Link } from '@tanstack/react-router'
import './default-not-found.css'

export function DefaultNotFound() {
  return (
    <section className="not-found">
      <div className="not-found-glow not-found-glow-top" />
      <div className="not-found-glow not-found-glow-bottom" />

      <div className="not-found-container fade-in-up">
        <div className="not-found-badge">
          ERRO 404
        </div>

        <div className="not-found-code">
          404
        </div>

        <h1 className="not-found-title">
          Essa página saiu de
          <span className="gradient-text"> quadro</span>
        </h1>

        <p className="not-found-description">
          Não encontramos o que você está procurando. A página pode ter
          sido movida, renomeada ou nunca existiu.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn-primary">
            Voltar para o início
          </Link>

          <a href="#nossos-produtos" className="btn-outline">
            Ver produtos
          </a>
        </div>

        <div className="not-found-links">
          <Link to="/storymaker-course" className="not-found-link">
            Curso Storymaker
          </Link>

          <Link to="/contract" className="not-found-link">
            Contratos Jurídicos
          </Link>

          <Link to="/image-editor" className="not-found-link">
            Reviva Suas Fotos
          </Link>
        </div>
      </div>
    </section>
  )
}