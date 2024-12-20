'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Home, Book, Phone, ArrowRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Custom404() {
  const [searchQuery, setSearchQuery] = useState('')
  const [glitchText, setGlitchText] = useState('404')

  useEffect(() => {
    const interval = setInterval(() => {
      const glitchChars = '!<>-_\\/[]{}—=+*^?#________'
      let newText = ''
      for (let i = 0; i < 3; i++) {
        newText += glitchChars[Math.floor(Math.random() * glitchChars.length)]
      }
      setGlitchText(newText)
      setTimeout(() => setGlitchText('404'), 100)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex flex-col items-center justify-center text-white p-4">
      <motion.h1 
        className="text-9xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {glitchText}
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Oops! Parece que você se perdeu no mundo digital da agen.
      </motion.p>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="text"
            placeholder="Buscar no site..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 bg-white/10 border-white/20 text-white placeholder-white/50"
          />
          <Button type="submit" variant="outline">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
        </form>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Link href="/" className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
          <Home className="w-6 h-6 mr-2" />
          <span>Página Inicial</span>
        </Link>
        <Link href="/servicos" className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
          <Book className="w-6 h-6 mr-2" />
          <span>Nossos Serviços</span>
        </Link>
        <Link href="/contato" className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
          <Phone className="w-6 h-6 mr-2" />
          <span>Entre em Contato</span>
        </Link>
      </motion.div>
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Link href="/" className="flex items-center text-lg hover:underline">
          <span>Voltar para a página inicial</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </div>
  )
}

