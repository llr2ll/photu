import './hero.css'

export function StorymakerHero() {
  return (
    <section className="storymaker-hero">
      <div className="storymaker-hero-glow storymaker-hero-glow-top" />
      <div className="storymaker-hero-glow storymaker-hero-glow-bottom" />

      <div className="storymaker-hero-container">
        <div className="storymaker-hero-content fade-in-up">
          <div className="storymaker-badge">
            CURSO COMPLETO • STORYMAKER PROFISSIONAL
          </div>

          <h1 className="storymaker-hero-title">
            Aprenda a cobrir eventos com o seu celular e ganhe de{' '}
            <span className="gradient-text">
              R$ 2.000 a R$ 5.000 por mês
            </span>
          </h1>

          <p className="storymaker-hero-description">
            Um treinamento completo para quem deseja trabalhar com Stories,
            Reels e cobertura de eventos utilizando apenas o celular.
          </p>

          <div className="storymaker-hero-actions">
            <a href="#comprar" className="btn-primary">
              Quero me tornar Storymaker
            </a>

            <a href="#modulos" className="btn-outline">
              Ver conteúdo do curso
            </a>
          </div>

          <div className="storymaker-hero-stats">
            <div>
              <strong>12</strong>
              <span>Módulos</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Prático</span>
            </div>

            <div>
              <strong>Celular</strong>
              <span>Como ferramenta</span>
            </div>
          </div>
        </div>

        <div className="storymaker-hero-visual fade-in-up delay-2">
          <div className="storymaker-phone">
            <img src="/cage.png" alt="Curso Storymaker" style={{ height: '450px', zIndex: 1}}/>
          </div>

          <div className="storymaker-floating-card card-income">
            <span>Potencial mensal</span>
            <strong>R$ 2.000 - R$ 5.000</strong>
          </div>

          <div className="storymaker-floating-card card-events">
            <span>Mercados</span>
            <strong>Festas • Casamentos • Eventos</strong>
          </div>

          <div className="storymaker-floating-card card-reels">
            <span>Stories & Reels</span>
            <strong>Conteúdo em tempo real</strong>
          </div>
        </div>
      </div>
    </section>
  )
}