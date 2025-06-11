import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vigsa Health - Decisões clínicas mais rápidas, seguras e inteligentes",
  description:
    "Transformamos raciocínio em condutas práticas. A Vigsa é o copiloto clínico do médico moderno, integrando IA, diretrizes e sua expertise em um só lugar.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
