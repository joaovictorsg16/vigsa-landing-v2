"use client"

import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  showNavLinks?: boolean
}

export default function Header({ showNavLinks = true }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="nav">
            <div>
              <Link href="/">
                <Image
                  src="/vigsa-logo-clean.png"
                  alt="Vigsa Health"
                  width={120}
                  height={48}
                  style={{ height: "48px", width: "auto" }}
                />
              </Link>
            </div>
            {showNavLinks && (
              <nav className="nav-links">
                <button className="nav-link" onClick={() => scrollToSection("features")}>
                  Funcionalidades
                </button>
                <button className="nav-link" onClick={() => scrollToSection("about")}>
                  Sobre
                </button>
                <button className="nav-link" onClick={() => scrollToSection("faq")}>
                  FAQ
                </button>
              </nav>
            )}
          </div>
          {showNavLinks ? (
            <Link href="/solicitar-acesso" className="btn btn-primary">
              Solicitar Acesso
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link href="/" className="btn btn-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 19-7-7 7-7M19 12H5" />
              </svg>
              Voltar
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
