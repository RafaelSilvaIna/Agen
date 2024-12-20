'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, CheckCircle, Shield, Users, Calendar, Clock, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">Agen</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-800">Sobre</Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-800">Funcionalidades</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-800">Preços</Link>
            <Link href="/support" className="text-gray-600 hover:text-gray-800">Suporte</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Cadastrar</Link>
            </Button>
          </div>
          <button className="md:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-6">
          <button onClick={toggleSidebar} className="absolute top-4 right-4">
            <X className="h-6 w-6 text-gray-600" />
          </button>
          <nav className="mt-8 space-y-4">
            <Link href="/about" className="block text-gray-600 hover:text-gray-800">Sobre</Link>
            <Link href="/features" className="block text-gray-600 hover:text-gray-800">Funcionalidades</Link>
            <Link href="/pricing" className="block text-gray-600 hover:text-gray-800">Preços</Link>
            <Link href="/support" className="block text-gray-600 hover:text-gray-800">Suporte</Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Agende seus compromissos de forma fácil e rápida
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nossa plataforma simplifica o agendamento de reuniões, consultas, serviços e mais, com segurança e eficiência.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/register">Experimente Grátis</Link>
            </Button>
            <Button size="lg" variant="outline">Saiba Mais</Button>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefícios Principais</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Calendar, title: "Agendamento Simplificado", description: "Interface intuitiva para marcar compromissos em segundos." },
                { icon: Clock, title: "Economia de Tempo", description: "Automatize processos e reduza tarefas administrativas." },
                { icon: Shield, title: "Segurança Garantida", description: "Proteção de dados e conformidade com LGPD e GDPR." },
                { icon: Users, title: "Gestão de Clientes", description: "Mantenha um registro organizado de todos os seus clientes." },
                { icon: BarChart, title: "Análises Detalhadas", description: "Relatórios e insights para otimizar seu negócio." },
                { icon: CheckCircle, title: "Integração Fácil", description: "Conecte-se com outras ferramentas que você já usa." },
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <benefit.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para simplificar seus agendamentos?</h2>
            <p className="text-xl mb-8">Experimente o Agen gratuitamente por 14 dias e descubra como podemos transformar seu negócio.</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button size="lg" variant="secondary" className="mr-4" asChild>
                <Link href="/register">Iniciar Teste Grátis</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Agendar Demonstração
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Segurança e Confiança</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <motion.div 
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Dados Criptografados</h3>
                  <p className="text-sm text-gray-600">Sua informação está sempre protegida</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Conformidade LGPD/GDPR</h3>
                  <p className="text-sm text-gray-600">Atendemos às regulamentações de privacidade</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Agen</h3>
              <p className="text-sm text-gray-400">Simplificando agendamentos e potencializando negócios desde 2023.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
                <li><Link href="/features" className="text-gray-400 hover:text-white">Funcionalidades</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Preços</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white">Suporte</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Termos de Serviço</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Política de Privacidade</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-sm text-gray-400">contato@agen.com</p>
              <p className="text-sm text-gray-400">+55 (11) 1234-5678</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; 2023 Agen. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

