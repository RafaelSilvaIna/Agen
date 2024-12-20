import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agen",
  description: "Agende seus compromissos de forma fácil e rápida com a Agen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
