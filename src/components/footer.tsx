import Image from "next/image"
import Link from "next/link"

interface FooterProps {
  showLinks?: boolean
}

export default function Footer({ showLinks = true }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Image
                src="/vigsa-logo-clean.png"
                alt="Vigsa Health"
                width={140}
                height={56}
                style={{ height: "56px", width: "auto" }}
              />
            </div>
            <p className="footer-description">
              Unimos diagnósticos, tratamentos, exames e interações medicamentosas em um único ambiente — dinâmico,
              acessível e conectado.
            </p>
            <div className="footer-contact">
              <p>
                <strong>Contato:</strong> contato@vigsahealth.com
              </p>
              <p>
                <strong>Localização:</strong> Goiânia, GO - Brasil
              </p>
            </div>
          </div>
          {showLinks ? (
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li>
                  <Link href="#features">Funcionalidades</Link>
                </li>
                <li>
                  <Link href="#about">Sobre</Link>
                </li>
                <li>
                  <Link href="#faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/solicitar-acesso">Solicitar Acesso</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="footer-contact">
              <h3>Contato</h3>
              <div>
                <p>
                  <strong>E-mail:</strong> contato@vigsahealth.com
                </p>
                <p>
                  <strong>Localização:</strong> Goiânia, GO - Brasil
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="footer-bottom">
          <p>© 2025 Vigsa Health. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
