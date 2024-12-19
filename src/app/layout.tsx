import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agen - Plataforma de Agendamento",
  description: "Agende horários, avalie serviços e gerencie sua empresa com a Agen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-white text-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

