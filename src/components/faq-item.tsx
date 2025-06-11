"use client"

import { useState } from "react"

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item card">
      <button className="faq-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-question">{question}</span>
        <svg
          className={`faq-icon ${isOpen ? "rotated" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className={`faq-answer ${isOpen ? "show" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}
