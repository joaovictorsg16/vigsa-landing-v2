"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FAQItem from "@/components/faq-item"

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Decisões clínicas mais rápidas, seguras e inteligentes.</h1>
          <p>
            Transformamos raciocínio em condutas práticas. A Vigsa é o copiloto clínico do médico moderno, integrando
            IA, diretrizes e sua expertise em um só lugar.
          </p>
          <div>
            <Link href="/solicitar-acesso" className="btn btn-primary btn-lg">
              Solicitar acesso antecipado
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="stars">
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="star" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ color: "#6b7280", fontWeight: 500 }}>Recomendado por médicos especialistas</span>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Centralize suas Fontes e Tome Decisões com Confiança</h2>
          <div className="grid grid-cols-1 grid-md-2 grid-lg-3">
            <div className="card">
              <div className="card-content">
                <div className="card-icon">🔗</div>
                <h3 className="card-title">Centralize suas Fontes</h3>
                <p className="card-description">
                  Acesse todas as informações médicas necessárias em um único lugar, eliminando a busca em múltiplas
                  fontes desconectadas.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-icon">⚡</div>
                <h3 className="card-title">Integração Inteligente</h3>
                <p className="card-description">
                  Nossa IA integra sinais, sintomas, exames e protocolos automaticamente, facilitando a chegada à
                  conduta adequada.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-icon">🛡️</div>
                <h3 className="card-title">Decisões com Confiança</h3>
                <p className="card-description">
                  Tenha segurança em decisões críticas com suporte baseado em evidências e diretrizes médicas validadas.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-icon">🎯</div>
                <h3 className="card-title">Foco no Raciocínio</h3>
                <p className="card-description">
                  Dedique mais tempo ao raciocínio clínico e menos tempo buscando informações, melhorando a qualidade do
                  atendimento.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-icon">📱</div>
                <h3 className="card-title">Tudo em Um Só App</h3>
                <p className="card-description">
                  Acesse condutas, CID, exames e doses em uma única plataforma, otimizando seu fluxo de trabalho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">De médicos para médicos, desenvolvido com experiência clínica real</h2>
            <p style={{ fontSize: "1.25rem", color: "#6b7280", maxWidth: "896px", margin: "0 auto" }}>
              Nossa plataforma é resultado da colaboração entre especialistas comprometidos em transformar a prática
              médica através da tecnologia.
            </p>
          </div>
          <div className="grid grid-cols-1 grid-md-2 grid-lg-4">
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Diretrizes médicas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Disponibilidade</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Condutas validadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfação médica</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Funcionalidades do produto</h2>
          <div className="features-grid">
            <div>
              <Image
                src="/vigsa-logo-clean.png"
                alt="Dashboard da Vigsa"
                width={600}
                height={400}
                className="feature-image"
              />
            </div>
            <div className="feature-cards">
              <div className="feature-card card">
                <h3>Condutas com IA</h3>
                <p>
                  Nossa IA é baseada em guidelines oficiais, garantindo que as condutas sugeridas estejam alinhadas com
                  as melhores práticas médicas.
                </p>
              </div>
              <div className="feature-card card">
                <h3>Calculadoras médicas integradas</h3>
                <p>
                  Acesse calculadoras médicas essenciais diretamente na plataforma, sem precisar recorrer a outras
                  ferramentas.
                </p>
              </div>
              <div className="feature-card card">
                <h3>Busca unificada</h3>
                <p>
                  Encontre rapidamente CID-10, bulas, exames e medicamentos em um único lugar, economizando tempo
                  valioso.
                </p>
              </div>
              <div className="feature-card card">
                <h3>IA que entende raciocínio clínico</h3>
                <p>
                  Nossa tecnologia compreende o raciocínio médico com base em sinais, sintomas e exames, oferecendo
                  suporte personalizado.
                </p>
              </div>
              <div className="feature-card card">
                <h3>Dashboard pessoal</h3>
                <p>
                  Acompanhe seus casos resolvidos e tenha insights sobre sua prática clínica através de um dashboard
                  intuitivo.
                </p>
              </div>
              <div className="feature-card card">
                <h3>Multiplataforma</h3>
                <p>Acesse a Vigsa pelo navegador ou pelo celular, garantindo flexibilidade no seu dia a dia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">O que dizem sobre nós</h2>
          <div className="grid grid-cols-1 grid-md-3">
            <div className="card">
              <div style={{ padding: "32px" }}>
                <p style={{ fontSize: "1.125rem", fontStyle: "italic", color: "#374151", marginBottom: "24px" }}>
                  "É a primeira vez que sinto que uma tecnologia realmente entende meu raciocínio clínico."
                </p>
                <div>
                  <p style={{ fontWeight: 600, color: "#111827" }}>Dra. Larissa Monteiro</p>
                  <p style={{ color: "#dc2626", fontSize: "0.875rem" }}>Clínica Médica</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div style={{ padding: "32px" }}>
                <p style={{ fontSize: "1.125rem", fontStyle: "italic", color: "#374151", marginBottom: "24px" }}>
                  "A Vigsa poupa tempo, reduz ruído e oferece segurança. É objetiva, como a medicina deve ser."
                </p>
                <div>
                  <p style={{ fontWeight: 600, color: "#111827" }}>Dr. Gustavo Ribeiro</p>
                  <p style={{ color: "#dc2626", fontSize: "0.875rem" }}>Emergencista</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div style={{ padding: "32px" }}>
                <p style={{ fontSize: "1.125rem", fontStyle: "italic", color: "#374151", marginBottom: "24px" }}>
                  "Uso diariamente. Torna o exercício clínico mais preciso, mais leve e mais confiável."
                </p>
                <div>
                  <p style={{ fontWeight: 600, color: "#111827" }}>Dra. Helena Tavares</p>
                  <p style={{ color: "#dc2626", fontSize: "0.875rem" }}>Neurologista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Sobre a Vigsa</h2>
          <div className="features-grid">
            <div>
              <Image
                src="/vigsa-logo-clean.png"
                alt="Equipe Vigsa"
                width={600}
                height={400}
                className="feature-image"
              />
            </div>
            <div>
              <p style={{ fontSize: "1.25rem", color: "#6b7280", marginBottom: "32px" }}>
                A Vigsa foi desenvolvida por uma equipe multidisciplinar de especialistas comprometidos em transformar a
                prática médica através da tecnologia. Nossa plataforma é resultado da colaboração entre:
              </p>
              <ul className="about-list">
                <li className="about-item">
                  <div className="check-icon">
                    <span>✓</span>
                  </div>
                  <span>Médicos da rede pública e privada</span>
                </li>
                <li className="about-item">
                  <div className="check-icon">
                    <span>✓</span>
                  </div>
                  <span>Professores e preceptores de universidades</span>
                </li>
                <li className="about-item">
                  <div className="check-icon">
                    <span>✓</span>
                  </div>
                  <span>Especialistas com experiência prática em emergências clínicas</span>
                </li>
                <li className="about-item">
                  <div className="check-icon">
                    <span>✓</span>
                  </div>
                  <span>Profissionais de medicina baseada em evidência</span>
                </li>
                <li className="about-item">
                  <div className="check-icon">
                    <span>✓</span>
                  </div>
                  <span>Especialistas em tecnologia médica</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div>
            <FAQItem
              question="O que é a Vigsa?"
              answer="A Vigsa é um copiloto clínico para médicos que utiliza inteligência artificial para transformar raciocínio em condutas práticas, integrando dados com evidências e entregando decisões clínicas personalizadas, em segundos e em um só lugar."
              index={0}
            />
            <FAQItem
              question="A IA substitui o raciocínio do médico?"
              answer="Não. A IA da Vigsa funciona como um copiloto, auxiliando o médico na tomada de decisões. O raciocínio clínico e a decisão final sempre serão do profissional de saúde. Nossa tecnologia apenas oferece suporte baseado em evidências para tornar o processo mais eficiente e seguro."
              index={1}
            />
            <FAQItem
              question="A IA da Vigsa é confiável?"
              answer="Sim. Nossa IA é treinada nas principais diretrizes nacionais e internacionais, garantindo que as recomendações estejam alinhadas com as melhores práticas médicas baseadas em evidências. Além disso, todo o conteúdo passa por revisão de especialistas antes de ser disponibilizado."
              index={2}
            />
            <FAQItem
              question="Quem desenvolve e valida os conteúdos?"
              answer="Os conteúdos da Vigsa são desenvolvidos e validados por uma equipe multidisciplinar composta por médicos da rede pública e privada, professores universitários e especialistas em medicina baseada em evidência, garantindo a qualidade e confiabilidade das informações."
              index={3}
            />
            <FAQItem
              question="Em quais dispositivos posso usar?"
              answer="A Vigsa é multiplataforma e pode ser acessada tanto pelo navegador em computadores quanto por dispositivos móveis como smartphones e tablets, oferecendo flexibilidade para se adaptar à sua rotina."
              index={4}
            />
            <FAQItem
              question="Como posso acessar?"
              answer="Atualmente, a Vigsa está em fase de acesso antecipado. Para solicitar acesso, preencha o formulário disponível nesta página e entraremos em contato assim que uma vaga estiver disponível."
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="purpose">
        <div className="container max-w-4xl">
          <h2>Nosso Propósito</h2>
          <p>
            Existimos para permitir que o cuidado à vida seja pleno, leve e digno — mesmo nos contextos mais críticos.
          </p>
          <div>
            <Link href="/solicitar-acesso" className="btn btn-white btn-lg">
              Solicitar acesso antecipado
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
