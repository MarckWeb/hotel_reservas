export interface ServiceParms {
   title: string;
   description: string;
   price: string;
}


export interface RoomParams {
   title: string;
   description: string;
   price?: string;
   image: string;
}



export interface Room extends RoomParams {
   _id: string;
   nRoom: number;
   state: string;
   tv: boolean;
   wifi: boolean;
   roomService: boolean;
   shortDescription: string;
   images: string[];
   updatedAt: string;
   createdAt: string;
   __v: number;
}