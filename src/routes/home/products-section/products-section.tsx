import { CartIcon, StarRatingIcon } from '@/data/icons.tsx'
import { useNavigate } from '@tanstack/react-router'
import { Products } from '@/data/products.tsx'
import './products-section.css';

export function ProductsSection() {
  const navigate = useNavigate()
  
  return <section id="nossos-produtos" className="products-section">
    <div className="products-container">
      <div className="products-header">
        <div className="section-label">Catálogo</div>
        <h2 className="products-title">Nossos Produtos</h2>
      </div>

      {/* Featured products row */}
      <div className="products-grid">
        {Products.map((product) => (
          <div key={product.title} onClick={() => product.route && navigate({ to: product.route })} className="product-card product-card-clickable">
            {/* Card image area */}
            <div className="product-image" style={{ background: product.gradient }}>
              <div className="product-icon">{product.icon}</div>

              {product.badge && (
                <div className="product-badge" style={{ background: product.badgeColor }}>{product.badge}</div>
              )}
            </div>

            {/* Card content */}
            <div className="product-content">
              <StarRatingIcon rating={product.rating} />

              <div className="product-students">{product.students} alunos</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.desc}</p>

              <div className="product-footer">
                <div>
                  <div className="product-price">{product.price}</div>
                  {product.oldPrice && (<div className="product-old-price">{product.oldPrice}</div>)}
                </div>

                { product.route && <button className="btn-pink product-cart-button"><CartIcon /></button> }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>;
}

{/* PRICING PLANS 
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
</div> */}