import { FooterLinks, SocialLinks, PaymentMethodLinks } from "@/data/footer-links";
import { UserLogin } from "@/components/login/user-login";
import { useNavigate } from "@tanstack/react-router";
import { Scripts } from "@tanstack/react-router";
import { PhotuLogo } from "@/data/icons.tsx";

export function DefaultBody({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div style={{background: "var(--bg-dark)", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <nav className="navbar">
        <div className="navbar-container">
          <PhotuLogo navigate={navigate} />
          <UserLogin />
        </div>
      </nav>

      <div style={{ flex: "1" }}>
        {children}
        <Scripts />
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <PhotuLogo navigate={navigate} />

              <p className="footer-description">
                Transformando momentos em lembranças eternas. Cursos,
                produtos e serviços para fotógrafos de todos os níveis.
              </p>

              <div className="footer-socials">
                {SocialLinks.map((social) => (
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
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a target={link.target ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="footer-link"
                          href={link.url}>
                          {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {index === 2 && (
                  <div className="footer-payments">
                    {PaymentMethodLinks.map((paymentMethod) => (
                      <img key={paymentMethod.name}
                           className="footer-payment-icon"
                           alt={paymentMethod.name}
                           src={paymentMethod.img}
                           loading="lazy"/>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2026 PHOTU. Todos os direitos reservados.
            </div>

            <div className="footer-bottom-links">
              {["Privacidade", "Termos", "Cookies"].map((item) => (
                <a key={item} href="#" className="footer-bottom-link" target="_blank" rel="noopener noreferrer">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}