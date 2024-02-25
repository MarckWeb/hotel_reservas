export interface ActiveReservation {
   setIsReserving: (value: boolean) => void
   isReserving: boolean
   price?: string
   nameRoom?: string
}