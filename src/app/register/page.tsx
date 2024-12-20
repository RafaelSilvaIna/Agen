'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from '@/components/ui/icons'

const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
})

type RegisterFormData = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  })

  async function onSubmit(data: RegisterFormData) {
    setIsLoading(true)
    const toastId = toast.loading('Criando conta...')

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      toast.success('Conta criada com sucesso!', { id: toastId })
      router.push('/onboarding')
    } catch (error) {
      toast.error('Erro ao criar conta.', { id: toastId })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGoogleRegister() {
    setIsLoading(true)
    const toastId = toast.loading('Conectando com Google...')

    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      toast.success('Conta criada com sucesso!', { id: toastId })
      router.push('/onboarding')
    } catch (error) {
      toast.error('Erro ao criar conta com Google.', { id: toastId })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-b-[100px] z-0" />
      <Card className="w-full max-w-md z-10 shadow-2xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
          </div>
          <CardTitle className="text-3xl font-bold text-center">Criar conta</CardTitle>
          <CardDescription className="text-center text-gray-500">
            Registre-se para começar a usar a plataforma
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register('email')}
                  disabled={isLoading}
                  className="pl-10"
                />
               
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                  disabled={isLoading}
                  className="pl-10"
                />
              
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirmar Senha</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword')}
                  disabled={isLoading}
                  className="pl-10"
                />
              
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                'Criar conta'
              )}
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Ou continue com
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            type="button"
            className="w-full"
            onClick={handleGoogleRegister}
            disabled={isLoading}
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.google className="mr-2 h-4 w-4" />
            )}
            Google
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Faça login
            </Link>
          </p>
          <p className="text-xs text-gray-500">
            Ao criar uma conta, você concorda com nossos{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Termos de Serviço
            </Link>{' '}
            e{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

