'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Shield, Star } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Agende seus compromissos de forma fácil e rápida
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          Nossa plataforma simplifica o agendamento de reuniões, consultas, serviços e mais, com segurança e eficiência.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src="/novoero.png" alt="Floresta" width={800} height={400} className="rounded-lg shadow-lg" />
        </motion.div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Benefícios Chave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Calendar, title: "Agendamento Fácil", description: "Interface intuitiva para marcar compromissos" },
            { icon: Clock, title: "Economia de Tempo", description: "Automatize processos e ganhe produtividade" },
            { icon: Shield, title: "Segurança de Dados", description: "Proteção avançada para suas informações" },
            { icon: Star, title: "Experiência Premium", description: "Suporte dedicado e recursos exclusivos" },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <benefit.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Maria Silva", company: "Salão Beleza Total", quote: "O Agen revolucionou a forma como gerenciamos nossos agendamentos. Não consigo imaginar trabalhar sem ele!" },
            { name: "João Santos", company: "Clínica Saúde Plena", quote: "A facilidade de uso e a eficiência do Agen nos ajudaram a aumentar significativamente nossa produtividade." },
            { name: "Ana Oliveira", company: "Studio Fitness", quote: "Desde que começamos a usar o Agen, nossas taxas de não comparecimento diminuíram drasticamente. É uma ferramenta incrível!" },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Comece agora mesmo</h2>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Experimente Grátis
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold border border-blue-500"
          >
            Saiba Mais
          </motion.button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Segurança e Confiança</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Na Agen, levamos a segurança dos seus dados muito a sério. Nosso sistema utiliza criptografia de ponta a ponta e está em conformidade com as principais leis de proteção de dados, incluindo LGPD e GDPR.
          </p>
          <div className="flex justify-center space-x-4">
            <img src="/ssl-seal.png" alt="SSL Secure" className="h-16" />
            <img src="/gdpr-compliant.png" alt="GDPR Compliant" className="h-16" />
            <img src="/lgpd-compliant.png" alt="LGPD Compliant" className="h-16" />
          </div>
        </div>
      </section>
    </div>
  )
}

