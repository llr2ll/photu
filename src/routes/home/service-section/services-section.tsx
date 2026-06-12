
import { WhatsappLink } from '@/data/footer-links';
import { ArrowRightIcon } from '@/data/icons';
import './services-section.css';

export function ServiceSection() {
  return <section id="nossos-serviços" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <div className="section-label">Ofertas</div>
            <h2 className="services-title">Nossos Serviços</h2>
          </div>

          <div className="services-grid">
            <div className="service-card service-card-storymaker">
              <div className="service-glow service-glow-pink" />

              <div className="service-card-header">
                <div className="service-icon service-icon-pink">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <line x1="11" y1="18" x2="13" y2="18" />
                  </svg>
                </div>

                <h3 className="service-card-title">Storymaker</h3>
              </div>

              <p className="service-description">
                Transformamos momentos especiais em conteúdo autêntico para que cada emoção possa ser revivida e compartilhada.
              </p>

              <div className="service-tags">
                {['Em Tempo Real', 'Festas', 'Eventos'].map(tag => (
                  <span key={tag} className="service-tag service-tag-pink">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={WhatsappLink} className="btn-primary" target="_blank" rel="noopener noreferrer">
                Contratar
                <ArrowRightIcon />
              </a>

              <img src="/cage.png" alt="Reviva Seus Vídeos" style={{ position: 'absolute', bottom: '10px', right:'10%', height: '250px'}}/>
            </div>

            <div className="service-card service-card-photo">
              <div className="service-glow service-glow-cyan" />

              <div className="service-card-header">
                <div className="service-icon service-icon-cyan">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>

                <h3 className="service-card-title">Fotografia</h3>
              </div>

              <p className="service-description">
                Transformamos momentos especiais em lembranças inesquecíveis. Eventos e ensaios registrados com sensibilidade e qualidade profissional.
              </p>

              <div className="service-tags">
                {['Ensaios', 'Casamentos', 'Aniversários', 'Eventos'].map(tag => (
                  <span key={tag} className="service-tag service-tag-cyan">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="btn-outline service-disabled-button" disabled>
                Indisponível No Momento

                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>

              <img src="/dslr.png" height='200px' alt="Reviva Suas Fotos" style={{ position: 'absolute', bottom: '10px', right:'10%', height: '250px'}}/>
            </div>
          </div>

          {/* Features row */}
          <div className="features-grid">
            {[
              { icon: '⚡', label: 'Atendimento Personalizado', desc: 'Foco total nas suas necessidades' },
              { icon: '💳', label: 'Pagamento Facilitado', desc: 'Parcele em até 12x sem juros' },
              { icon: '🔄', label: 'Entrega Rápida', desc: 'Todos os Serviços entregues em até 48 horas' },
              { icon: '✅', label: 'Satisfação Garantida', desc: '100% de garantia ou reembolso' },
            ].map(feat => (
              <div key={feat.label} className="feature-card">
                <div className="feature-icon">{feat.icon}</div>
                <div className="feature-label">{feat.label}</div>
                <div className="feature-description">{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>;
}