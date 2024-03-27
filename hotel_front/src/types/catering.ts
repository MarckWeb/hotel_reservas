export interface CreateCateringData {
   userId: string,
   comandaId: string
}


export interface Catering extends CreateCateringData {
   _id: string,
   updatedAt: string,
   createdAt: string
}