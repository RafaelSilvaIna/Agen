import Image from 'next/image'
import React from 'react'; 
import { Button } from "@/components/ui/button"
import { Calendar, Star, Clock, BarChart2 } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Agen</h1>
        <p className="text-xl text-gray-600 mb-8">A plataforma completa para agendamentos e gestão de negócios</p>
        <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3">
          Comece Agora
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <FeatureCard
          icon={<Calendar className="w-12 h-12" />}
          title="Agendamentos"
          description="Marque horários facilmente com empresas e profissionais"
        />
        <FeatureCard
          icon={<Star className="w-12 h-12" />}
          title="Avaliações"
          description="Compartilhe suas experiências e leia avaliações de outros clientes"
        />
        <FeatureCard
          icon={<Clock className="w-12 h-12" />}
          title="Gestão de Tempo"
          description="Otimize sua agenda e aumente a produtividade do seu negócio"
        />
        <FeatureCard
          icon={<BarChart2 className="w-12 h-12" />}
          title="Análises"
          description="Acompanhe o desempenho do seu negócio com relatórios detalhados"
        />
      </section>

      <section className="bg-gray-100 w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Como a Agen funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Cadastre-se"
              description="Crie sua conta gratuitamente como cliente ou empresa"
            />
            <StepCard
              number="2"
              title="Explore"
              description="Encontre serviços ou gerencie sua empresa na plataforma"
            />
            <StepCard
              number="3"
              title="Agende"
              description="Marque horários ou receba agendamentos facilmente"
            />
          </div>
        </div>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
        <p className="text-xl text-gray-600 mb-8">Junte-se a milhares de empresas e clientes que já estão usando a Agen</p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-black text-white hover:bg-gray-800">
            Cadastre sua Empresa
          </Button>
          <Button variant="outline" className="border-black text-black hover:bg-gray-100">
            Explorar Serviços
          </Button>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-black mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

