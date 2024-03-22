export interface CreateCateringData {
   userId?: string,
   entrance: string
   first: string,
   second: string,
   desserts: string,
   wines: string,
   drinks: string
}


export interface Catering extends CreateCateringData {
   _id: string,
   updatedAt: string,
   createdAt: string
}