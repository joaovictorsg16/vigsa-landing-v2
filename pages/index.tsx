"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SolicitarAcesso() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    comment: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log("Form submitted:", formData)

    setSubmitted(true)

    setFormData({
      name: "",
      email: "",
      phone: "",
      specialty: "",
      comment: "",
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <>
      <Header showNavLinks={false} />

      <section className="form-section">
        <div className="form-container">
          <h2 className="form-title">Solicitar Acesso Antecipado</h2>
          <p className="form-description">
            Preencha o formulário abaixo para solicitar acesso antecipado à plataforma Vigsa. Nossa equipe entrará em
            contato assim que uma vaga estiver disponível.
          </p>

          <div className="card" style={{ padding: submitted ? "0" : "32px" }}>
            {submitted ? (
              <div style={{ padding: "32px", textAlign: "center" }}>
                <h3 style={{ color: "#059669", fontSize: "1.5rem", marginBottom: "16px" }}>
                  Solicitação enviada com sucesso!
                </h3>
                <p>Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="label">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="label">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="label">WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="input"
                    placeholder="(00) 00000-0000"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="specialty" className="label">Especialidade</label>
                  <select
                    id="specialty"
                    name="specialty"
                    className="select"
                    required
                    value={formData.specialty}
                    onChange={handleChange}
                  >
                    <option value="">Selecione sua especialidade</option>
                    <option value="clinica-medica">Clínica Médica</option>
                    <option value="neurologia">Neurologia</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="emergencia">Emergência</option>
                    <option value="outra">Outra</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="comment" className="label">Comentário (opcional)</label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="textarea"
                    value={formData.comment}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Solicitar acesso antecipado
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer showLinks={false} />
    </>
  )
}

