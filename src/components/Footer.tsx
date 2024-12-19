import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">AGEN</h3>
          <p className="text-gray-400">Simplificando agendamentos e gestão de negócios</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Plataforma</h4>
          <ul className="space-y-2">
            <li><Link href="/sobre" className="hover:text-gray-300">Sobre nós</Link></li>
            <li><Link href="/precos" className="hover:text-gray-300">Preços</Link></li>
            <li><Link href="/contato" className="hover:text-gray-300">Contato</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Suporte</h4>
          <ul className="space-y-2">
            <li><Link href="/ajuda" className="hover:text-gray-300">Central de Ajuda</Link></li>
            <li><Link href="/tutoriais" className="hover:text-gray-300">Tutoriais</Link></li>
            <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
            <li><Link href="/api" className="hover:text-gray-300">API</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Facebook /></a>
            <a href="#" className="hover:text-gray-300"><Twitter /></a>
            <a href="#" className="hover:text-gray-300"><Instagram /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Agen. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

