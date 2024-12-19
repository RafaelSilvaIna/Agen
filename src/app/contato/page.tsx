import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Contato() {
  return (
    <div className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">Entre em Contato</h1>
      <div className="max-w-xl mb-8">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Sua mensagem"
            />
          </div>
          <Button type="submit" className="w-full">Enviar Mensagem</Button>
        </form>
      </div>
      <Link href="/">
        <Button variant="outline">Voltar para Home</Button>
      </Link>
    </div>
  )
}

