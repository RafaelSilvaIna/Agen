import CryptoJS from 'crypto-js'

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'default-key'

export function encryptAES(text: string): string {
  return CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString()
}

export function decryptAES(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}

export async function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}

export function formatCNPJ(cnpj: string): string {
  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
}

export function validateCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]/g, '')
  
  if (cnpj.length !== 14) return false
  
  // Validação do CNPJ aqui...
  return true
}


export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
