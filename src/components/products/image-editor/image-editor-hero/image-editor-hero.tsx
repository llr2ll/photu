export function HeroSection() {
  return (
    <section className="ie-hero">
      <div className="ie-hero-glow" />
      <div className="ie-hero-container">
        <div className="ie-hero-badge">RESTAURAÇÃO COM IA</div>
        <h1 className="ie-hero-title">
          Reviva suas fotos com
          <span className="gradient-text"> inteligência artificial</span>
        </h1>
        <p className="ie-hero-desc">
          Upscaling, colorização e animação — tudo em segundos,
          sem precisar instalar nada.
        </p>
        <div className="ie-hero-stats">
          <div><strong>4×</strong><span>resolução</span></div>
          <div><strong>Segundos</strong><span>por imagem</span></div>
          <div><strong>100%</strong><span>online</span></div>
        </div>
      </div>
    </section>
  )
}