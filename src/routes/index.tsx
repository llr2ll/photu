import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: PhotuHome,
})

function PhotuLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const textClass = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-4xl' : 'text-2xl'
  return (
    <div className="flex items-center gap-2">
      <svg width={size === 'sm' ? 28 : size === 'lg' ? 48 : 36} height={size === 'sm' ? 28 : size === 'lg' ? 48 : 36} viewBox="0 0 48 48" fill="none">
        <rect x="4" y="14" width="36" height="26" rx="4" fill="none" stroke="white" strokeWidth="2.5"/>
        <circle cx="22" cy="27" r="8" fill="none" stroke="white" strokeWidth="2.5"/>
        <circle cx="22" cy="27" r="4" fill="none" stroke="white" strokeWidth="2"/>
        <rect x="12" y="8" width="10" height="6" rx="2" fill="none" stroke="white" strokeWidth="2"/>
        <rect x="34" y="10" width="9" height="26" rx="2" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(12 38 22)"/>
        <rect x="35.5" y="13" width="5" height="6" fill="none" stroke="white" strokeWidth="1"/>
        <rect x="35.5" y="21" width="5" height="6" fill="none" stroke="white" strokeWidth="1"/>
        <rect x="35.5" y="29" width="5" height="4" fill="none" stroke="white" strokeWidth="1"/>
      </svg>
      <span className={`font-black tracking-wider ${textClass}`} style={{fontFamily: 'Montserrat, sans-serif'}}>
        <span className="logo-p">P</span>
        <span className="logo-h">H</span>
        <span className="logo-o">O</span>
        <span className="logo-t">T</span>
        <span className="logo-u">U</span>
      </span>
    </div>
  )
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < rating ? '#ffd700' : '#333'}>
          <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5"/>
        </svg>
      ))}
    </div>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="M21 21l-4.35-4.35"/>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function CameraIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    </svg>
  )
}

function PhotoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  )
}

function PhotuHome() {
  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
      {/* NAVBAR */}
      <nav style={{ padding: '0 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <PhotuLogo />
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {['Início', 'Produtos', 'Nossos Serviços', 'Galeria', 'Extra'].map((item, i) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{
                  color: i === 0 ? 'var(--accent-pink)' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = i === 0 ? 'var(--accent-pink)' : 'rgba(255,255,255,0.7)')}
              >
                {item}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'rgba(255,255,255,0.7)' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: '4px' }}><SearchIcon /></button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: '4px' }}><UserIcon /></button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: '4px', position: 'relative' }}>
              <CartIcon />
              <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--accent-pink)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>3</span>
            </button>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ padding: '8px 40px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
          <span>PHOTU</span> <span style={{ margin: '0 6px' }}>›</span> <span style={{ color: 'var(--accent-pink)' }}>Início</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="início" style={{ padding: '60px 40px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '-100px', right: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(233,30,140,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left content */}
          <div className="fade-in-up">
            <div className="section-label">Fotografia Profissional</div>
            <h1 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: '900', lineHeight: '1.15', margin: '0 0 24px' }}>
              Transforme momentos em lembranças{' '}
              <span className="gradient-text">para sempre</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: '1.7', marginBottom: '36px', maxWidth: '480px' }}>
              Cursos, produtos e serviços para Fotógrafos
              e para quem quer usar suas fotos imortais.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#nossos-produtos" className="btn-primary">
                Ver Produtos <ArrowRightIcon />
              </a>
              <a href="#nossos-serviços" className="btn-outline">
                Contratar Serviços
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '40px', marginTop: '48px' }}>
              {[
                { num: '2.4k+', label: 'Alunos formados' },
                { num: '98%', label: 'Satisfação' },
                { num: '12+', label: 'Anos de experiência' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '28px', fontWeight: '900', fontFamily: 'Montserrat, sans-serif', background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — camera visual */}
          <div className="fade-in-up delay-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: '420px' }}>
            {/* Glow behind camera */}
            <div style={{ position: 'absolute', width: '380px', height: '380px', background: 'radial-gradient(circle, rgba(233,30,140,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />

            {/* Camera SVG large */}
            <div className="camera-float" style={{ position: 'relative', zIndex: 2 }}>
              <svg width="340" height="260" viewBox="0 0 340 260" fill="none">
                {/* Camera body */}
                <rect x="30" y="70" width="250" height="170" rx="20" fill="#1a1a1a" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
                <rect x="30" y="70" width="250" height="170" rx="20" fill="url(#cameraGrad)"/>
                {/* Viewfinder hump */}
                <rect x="90" y="40" width="90" height="35" rx="8" fill="#1a1a1a" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
                {/* Lens outer ring */}
                <circle cx="155" cy="155" r="75" fill="#111" stroke="rgba(255,255,255,0.12)" strokeWidth="3"/>
                <circle cx="155" cy="155" r="62" fill="#0d0d0d" stroke="rgba(255,255,255,0.08)" strokeWidth="2"/>
                <circle cx="155" cy="155" r="48" fill="#080808" stroke="rgba(233,30,140,0.3)" strokeWidth="2"/>
                <circle cx="155" cy="155" r="34" fill="#050505"/>
                <circle cx="155" cy="155" r="22" fill="#111" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                {/* Lens reflection */}
                <ellipse cx="145" cy="145" rx="8" ry="6" fill="rgba(255,255,255,0.06)" transform="rotate(-30 145 145)"/>
                <circle cx="148" cy="142" r="3" fill="rgba(255,255,255,0.15)"/>
                {/* Shutter button */}
                <circle cx="255" cy="58" r="10" fill="#333" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <circle cx="255" cy="58" r="6" fill="var(--accent-pink)" opacity="0.8"/>
                {/* Flash hotshoe */}
                <rect x="135" y="36" width="40" height="6" rx="2" fill="#333"/>
                {/* Detail lines */}
                <rect x="40" y="80" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.05)"/>
                <rect x="40" y="88" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.05)"/>
                <defs>
                  <linearGradient id="cameraGrad" x1="30" y1="70" x2="280" y2="240" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.04)"/>
                    <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Photo strip */}
            <div style={{ position: 'absolute', right: '30px', top: '20px', zIndex: 3, transform: 'rotate(12deg)', background: '#111', border: '3px solid #222', borderRadius: '6px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              {[
                'linear-gradient(135deg, #1a1a2e, #16213e)',
                'linear-gradient(135deg, #0d0d0d, #1a1a1a)',
                'linear-gradient(135deg, #111, #222)',
              ].map((bg, i) => (
                <div key={i} style={{ width: '70px', height: '56px', background: bg, marginBottom: i < 2 ? '4px' : '0', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              ))}
              <div style={{ textAlign: 'center', marginTop: '6px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-pink)">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="nossos-produtos" style={{ padding: '80px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label">Catálogo</div>
            <h2 style={{ fontSize: '36px', fontWeight: '800', margin: '0' }}>Nossos Produtos</h2>
          </div>

          {/* Featured products row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
            {[
              {
                title: 'Curso Storymaker de Foto ao Profissional',
                desc: 'Aprenda a criar histórias incríveis com suas fotos.',
                price: 'R$497,00',
                oldPrice: 'R$697,00',
                badge: 'Mais Vendido',
                badgeColor: 'var(--accent-pink)',
                rating: 5,
                students: '1.2k',
                icon: <CameraIcon size={32} />,
                gradient: 'linear-gradient(135deg, #1a0a14, #2d0e22)',
              },
              {
                title: 'Contratos Jurídicos para Fotógrafos',
                desc: 'Proteja seu trabalho com contratos profissionais.',
                price: 'R$97,00',
                badge: 'Novo',
                badgeColor: 'var(--accent-cyan)',
                rating: 5,
                students: '834',
                icon: <BookIcon />,
                gradient: 'linear-gradient(135deg, #0a1a1a, #0d2626)',
              },
              {
                title: 'Reviva Suas Fotos',
                desc: 'Restauração e edição profissional de fotografias antigas.',
                price: 'Saiba Mais',
                badge: 'Em Alta',
                badgeColor: 'var(--accent-orange)',
                rating: 4,
                students: '567',
                icon: <PhotoIcon />,
                gradient: 'linear-gradient(135deg, #1a1000, #2d1c00)',
              },
            ].map((product) => (
              <div key={product.title} className="product-card" style={{ cursor: 'pointer' }}>
                {/* Card image area */}
                <div style={{ height: '180px', background: product.gradient, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ color: 'rgba(255,255,255,0.3)', transform: 'scale(2.5)' }}>{product.icon}</div>
                  {product.badge && (
                    <div style={{ position: 'absolute', top: '12px', left: '12px', background: product.badgeColor, color: 'white', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700' }}>
                      {product.badge}
                    </div>
                  )}
                </div>
                {/* Card content */}
                <div style={{ padding: '20px' }}>
                  <StarRating rating={product.rating} />
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{product.students} alunos</div>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '10px 0 8px', lineHeight: '1.4' }}>{product.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', margin: '0 0 16px', lineHeight: '1.5' }}>{product.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '800', fontFamily: 'Montserrat, sans-serif', color: 'var(--accent-pink)' }}>{product.price}</div>
                      {product.oldPrice && <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through' }}>{product.oldPrice}</div>}
                    </div>
                    <button className="btn-pink" style={{ padding: '8px 16px', fontSize: '12px' }}>
                      <CartIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PRICING PLANS */}
          <div style={{ marginTop: '64px' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <div className="section-label">Planos</div>
              <h3 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>Reviva Suas Fotos</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: '0' }}>Escolha o plano ideal para você</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '32px' }}>
              {[
                { price: 'R$150,00', plan: 'Básico', features: ['5 fotos restauradas', 'Entrega em 7 dias', 'Correção de cor', 'Formato digital'], color: '#444' },
                { price: 'R$300,00', plan: 'Padrão', features: ['15 fotos restauradas', 'Entrega em 5 dias', 'Correção avançada', 'Impressão digital', 'Suporte prioritário'], color: 'var(--accent-cyan)', featured: true },
                { price: 'R$250,00', plan: 'Plus', features: ['10 fotos restauradas', 'Entrega em 6 dias', 'Colorização', 'Alta resolução', 'Álbum digital'], color: 'var(--accent-orange)' },
                { price: 'R$450,00', plan: 'Premium', features: ['30 fotos restauradas', 'Entrega em 3 dias', 'Restauração completa', 'Impressão física', 'Álbum premium', 'Suporte VIP'], color: 'var(--accent-pink)', featured: true },
              ].map((tier) => (
                <div key={tier.plan} className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
                  {tier.featured && (
                    <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: tier.color, color: 'white', padding: '3px 14px', borderRadius: '0 0 8px 8px', fontSize: '11px', fontWeight: '700' }}>
                      Popular
                    </div>
                  )}
                  <div style={{ marginTop: tier.featured ? '12px' : '0' }}>
                    <div style={{ fontSize: '12px', color: tier.color, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{tier.plan}</div>
                    <div style={{ fontSize: '28px', fontWeight: '900', fontFamily: 'Montserrat, sans-serif', color: 'white', marginBottom: '20px' }}>{tier.price}</div>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {tier.features.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
                          <span style={{ color: tier.color, flexShrink: 0 }}><CheckIcon /></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button style={{ width: '100%', padding: '10px', background: tier.featured ? tier.color : 'transparent', border: `2px solid ${tier.featured ? tier.color : 'rgba(255,255,255,0.15)'}`, color: 'white', borderRadius: '8px', fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = tier.color; e.currentTarget.style.borderColor = tier.color; }}
                      onMouseLeave={e => { e.currentTarget.style.background = tier.featured ? tier.color : 'transparent'; e.currentTarget.style.borderColor = tier.featured ? tier.color : 'rgba(255,255,255,0.15)'; }}
                    >
                      Assinar agora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="nossos-serviços" style={{ padding: '80px 40px', background: 'linear-gradient(180deg, transparent, rgba(233,30,140,0.04), transparent)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label">Ofertas</div>
            <h2 style={{ fontSize: '36px', fontWeight: '800', margin: '0' }}>Nossos Serviços</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Storymaker card */}
            <div className="service-card" style={{ background: 'linear-gradient(135deg, #1a0a14 0%, #0d0d0d 100%)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '0', top: '0', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(233,30,140,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ width: '52px', height: '52px', background: 'rgba(233,30,140,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1px solid rgba(233,30,140,0.2)' }}>
                <CameraIcon size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 12px' }}>Storymaker</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 28px', maxWidth: '360px' }}>
                Aprenda a criar narrativas visuais poderosas. Do conceito à execução, domine a arte de contar histórias através da fotografia.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
                {['Narrativa Visual', 'Composição', 'Edição', 'Portfólio'].map(tag => (
                  <span key={tag} style={{ background: 'rgba(233,30,140,0.1)', border: '1px solid rgba(233,30,140,0.2)', color: 'var(--accent-pink)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{tag}</span>
                ))}
              </div>
              <a href="#" className="btn-primary">Saiba mais <ArrowRightIcon /></a>
            </div>

            {/* Fotografia card */}
            <div className="service-card" style={{ background: 'linear-gradient(135deg, #0a1014 0%, #0d0d0d 100%)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '0', top: '0', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ width: '52px', height: '52px', background: 'rgba(0,212,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1px solid rgba(0,212,255,0.15)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 12px' }}>Fotografia</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 28px', maxWidth: '360px' }}>
                Sessões fotográficas profissionais para todos os momentos especiais. Capturamos sua história com qualidade e sensibilidade únicas.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
                {['Retratos', 'Eventos', 'Casamentos', 'Produto'].map(tag => (
                  <span key={tag} style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', color: 'var(--accent-cyan)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{tag}</span>
                ))}
              </div>
              <a href="#" className="btn-outline">Agendar sessão <ArrowRightIcon /></a>
            </div>
          </div>

          {/* Features row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
            {[
              { icon: '⚡', label: 'Atendimento Personalizado', desc: 'Foco total nas suas necessidades' },
              { icon: '💳', label: 'Pagamento Facilitado', desc: 'Parcele em até 12x sem juros' },
              { icon: '🔄', label: 'Entrega Rápida', desc: 'Prazo garantido em contrato' },
              { icon: '✅', label: 'Satisfação Garantida', desc: '100% de garantia ou reembolso' },
            ].map(feat => (
              <div key={feat.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{feat.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>{feat.label}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '60px 40px 40px', background: '#080808' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
            {/* Brand */}
            <div>
              <PhotuLogo size="md" />
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.7', marginTop: '16px', maxWidth: '280px' }}>
                Transformando momentos em lembranças eternas. Cursos, produtos e serviços para fotógrafos de todos os níveis.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                {['instagram', 'youtube', 'tiktok', 'facebook'].map(social => (
                  <a key={social} href="#" style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-subtle)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.2s', fontSize: '12px', fontWeight: '700' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,30,140,0.15)'; e.currentTarget.style.borderColor = 'rgba(233,30,140,0.3)'; e.currentTarget.style.color = 'var(--accent-pink)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    {social[0].toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: 'Produtos', links: ['Curso Storymaker', 'Contratos Jurídicos', 'Reviva Suas Fotos', 'Todos os Produtos'] },
              { title: 'Serviços', links: ['Storymaker', 'Fotografia', 'Edição de Fotos', 'Consultoria'] },
              { title: 'Empresa', links: ['Sobre Nós', 'Galeria', 'Blog', 'Contato'] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'Montserrat, sans-serif', marginBottom: '16px', color: 'white' }}>{col.title}</div>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                      >{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>© 2024 PHOTU. Todos os direitos reservados.</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Privacidade', 'Termos', 'Cookies'].map(item => (
                <a key={item} href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                >{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
