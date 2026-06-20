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