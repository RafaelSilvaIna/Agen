export interface BusinessSchedule {
    day: string
    openTime: string
    closeTime: string
    observations?: string
  }
  
  export interface ClientData {
    type: 'client'
    fullName: string
    parentName: string // Será criptografado
    profileImage: string // Base64
    contactEmail?: string
    phoneNumber?: string
    termsAccepted: boolean
  }
  
  export interface BusinessData {
    type: 'business'
    businessName: string
    cnpj?: string
    description: string
    profileImage: string // Base64
    bannerImage: string // Base64
    businessArea: string
    schedule: BusinessSchedule[]
    termsAccepted: boolean
  }
  
  export type UserData = ClientData | BusinessData
  
  