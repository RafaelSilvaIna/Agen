'use client'

import { useState } from 'react'
import { useAuth } from '@/providers/auth-provider'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ref, set } from 'firebase/database'
import { database } from '@/lib/firebase'
import { encryptAES, imageToBase64 } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from 'react-hot-toast'
import type { UserData, BusinessSchedule } from '@/types/onboarding'

export default function OnboardingPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [currentPhase, setCurrentPhase] = useState(1)
  const [userType, setUserType] = useState<'client' | 'business' | null>(null)
  const [formData, setFormData] = useState<Partial<UserData>>({})
  const [loading, setLoading] = useState(false)

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>, field: 'profileImage' | 'bannerImage') {
    const file = e.target.files?.[0]
    if (file) {
      try {
        const base64 = await imageToBase64(file)
        setFormData(prev => ({ ...prev, [field]: base64 }))
      } catch (error) {
        toast.error('Erro ao processar imagem')
      }
    }
  }

  async function handleSubmit() {
    if (!user) return

    setLoading(true)
    const toastId = toast.loading('Salvando informações...')

    try {
      // Se for cliente, criptografa o nome dos pais
      if (formData.type === 'client' && formData.parentName) {
        formData.parentName = encryptAES(formData.parentName)
      }

      // Salva no Realtime Database
      await set(ref(database, `users/${user.uid}`), formData)
      
      toast.success('Perfil criado com sucesso!', { id: toastId })
      
      // Redireciona para o dashboard apropriado
      router.push(formData.type === 'business' ? '/business/dashboard' : '/client/dashboard')
    } catch (error) {
      toast.error('Erro ao salvar informações', { id: toastId })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const phases = {
    client: [
      // Fase 1 - Tipo de usuário
      <motion.div
        key="phase1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold">Bem-vindo ao Agen!</h2>
        <p className="text-gray-600">Como você deseja usar nossa plataforma?</p>
        <div className="grid gap-4">
          <Button
            variant="outline"
            className="h-24"
            onClick={() => {
              setUserType('client')
              setFormData({ type: 'client' })
              setCurrentPhase(2)
            }}
          >
            Sou Cliente
          </Button>
          <Button
            variant="outline"
            className="h-24"
            onClick={() => {
              setUserType('business')
              setFormData({ type: 'business' })
              setCurrentPhase(2)
            }}
          >
            Sou Empresa
          </Button>
        </div>
      </motion.div>,

      // Fase 2 - Informações básicas (Cliente)
      <motion.div
        key="phase2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold">Informações Pessoais</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              value={formData.fullName || ''}
              onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="parentName">Nome da Mãe/Pai</Label>
            <Input
              id="parentName"
              value={(formData as any).parentName || ''}
              onChange={e => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
            />
          </div>
          <Button onClick={() => setCurrentPhase(3)}>Próximo</Button>
        </div>
      </motion.div>,

      // ... Adicione as outras fases do cliente aqui
    ],
    business: [
      // Fase 1 - Informações da Empresa
      <motion.div
        key="phase1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold">Informações da Empresa</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="businessName">Nome da Empresa</Label>
            <Input
              id="businessName"
              value={(formData as any).businessName || ''}
              onChange={e => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="cnpj">CNPJ (opcional)</Label>
            <Input
              id="cnpj"
              value={(formData as any).cnpj || ''}
              onChange={e => setFormData(prev => ({ ...prev, cnpj: e.target.value }))}
            />
          </div>
          <Button onClick={() => setCurrentPhase(2)}>Próximo</Button>
        </div>
      </motion.div>,

      // ... Adicione as outras fases da empresa aqui
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Configuração do Perfil</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {userType ? phases[userType][currentPhase - 1] : phases.client[0]}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

