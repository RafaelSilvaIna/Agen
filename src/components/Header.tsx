import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-2xl font-bold">
          AGEN
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/servicos" className="hover:text-gray-300">Serviços</Link>
          <Link href="/empresas" className="hover:text-gray-300">Empresas</Link>
          <Link href="/avaliacoes" className="hover:text-gray-300">Avaliações</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Buscar serviços..."
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" />
        </div>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          Login
        </Button>
        <Button className="bg-white text-black hover:bg-gray-200">
          Cadastre-se
        </Button>
      </div>
    </header>
  )
}

