'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, Calendar, Users, Settings, HelpCircle } from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Início', href: '/' },
  { icon: Calendar, label: 'Agendamentos', href: '/agendamentos' },
  { icon: Users, label: 'Clientes', href: '/clientes' },
  { icon: Settings, label: 'Configurações', href: '/configuracoes' },
  { icon: HelpCircle, label: 'Suporte', href: '/suporte' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="bg-white w-64 min-h-screen p-4 shadow-lg"
    >
      <div className="flex items-center justify-center mb-8">
        <img src="/logo.svg" alt="Agen Logo" className="h-12" />
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-4 p-2 rounded-lg mb-2 ${
                pathname === item.href ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </motion.div>
          </Link>
        ))}
      </nav>
    </motion.aside>
  )
}
