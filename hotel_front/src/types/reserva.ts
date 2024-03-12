export interface ActiveReservation {
   setIsReserving: (value: boolean) => void
   isReserving: boolean
   price?: string
   nameRoom?: string
   roomNumber?: number
}

export interface CreateReserva {
   checkIn: string
   checkOut: string
   nRoom: number
   userId: string
}

export interface Reservation extends CreateReserva {
   _id: string,
   updatedAt: string,
   createdAt: string
}