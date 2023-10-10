export interface ItemHotel {
  nit: number
  phone: string
  email: string
  address: string
  star: number
  available: boolean
  created_at: string
  name: string
  image: string
  id: number
}

export interface CreateItemHotel {
  nit: number
  phone: string
  email: string
  address: string
  star: number
  available: boolean
  name: string
  image: string
  id: number
}