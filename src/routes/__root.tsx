import { FooterLinks, SocialLinks, PaymentMethodLinks } from '@/data/footer-links'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { CartIcon, PhotuLogo, UserIcon } from '@/data/icons.tsx'
import { useNavigate } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Photu' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <nav className="navbar">
            <div className="navbar-container">
              <PhotuLogo navigate={navigate}/>

              {/* <div className="navbar-actions">
                <button className="navbar-icon-button"><UserIcon /></button>
                <button className="navbar-icon-button navbar-cart-button">
                  <CartIcon />
                  <span className="navbar-cart-badge">3</span>
                </button>
              </div> */}
            </div>
          </nav>

          <div style={{flex: '1'}}>
            {children}
            <Scripts />
          </div>
          
          <footer className="footer">
            <div className="footer-container">
              <div className="footer-grid">
                <div>
                  <PhotuLogo navigate={navigate}/>

                  <p className="footer-description">
                    Transformando momentos em lembranças eternas. Cursos, produtos e
                    serviços para fotógrafos de todos os níveis.
                  </p>

                  <div className="footer-socials">
                    {SocialLinks.map(social => (
                      <a key={social.name} href={social.url} target="_blank" className="footer-social-link">
                        {social.name[0].toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>

                {FooterLinks.map((col, index) => (
                  <div key={col.title}>
                    <div className="footer-column-title">{col.title}</div>

                    <ul className="footer-links-list">
                      {col.links.map(link => (
                        <li key={link.label}>
                          <a href={link.url} className="footer-link" target={link.target ? "_blank" : undefined} rel="noopener noreferrer">{link.label}</a>
                        </li>
                      ))}
                    </ul>

                    {index === 2 && (
  <div className="footer-payments">
    {PaymentMethodLinks.map((paymentMethod) => (
      <img
        key={paymentMethod.name}
        className="footer-payment-icon"
        src={paymentMethod.img}
        alt={paymentMethod.name}
        loading="lazy"
      />
    ))}
  </div>
)}
                  </div>
                ))}
              </div>

              <div className="footer-bottom">
                <div className="footer-copyright">© 2026 PHOTU. Todos os direitos reservados.</div>

                <div className="footer-bottom-links">
                  {['Privacidade', 'Termos', 'Cookies'].map(item => (
                    <a key={item} href="#" className="footer-bottom-link" target="_blank" rel="noopener noreferrer">{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
        <script src="node_modules/eruda/eruda.js"></script>
        <script>eruda.init();</script>
      </body>
    </html>
  )
}