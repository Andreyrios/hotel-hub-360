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

export interface ItemRoom {
  image: string
  number: number
  type: string
  description: string
  created_at: string
  available: boolean
  base_price: string
  tax: string
  address: string
  city: string
  id: number
  hotel_id: number
}

export interface ItemUser {
  first_name: string
  last_name: string
  phone: string
  email: string
  document_type: string
  dni: number,
  birth_date: string
  gender: string
  created_at: string
  id: number
}

export interface ItemBooking {
  user_id: number
  room_id: number
  quantity_room: number
  number_guests: number
  price: string
  checkIn: string
  checkOut: string
  comment: string
  created_at: string
  id: number
  user_name: string
}

export interface QuerySearch {
  city: string
  checkOut: string
  checkIn: string,
  guestsQuantity: number
}