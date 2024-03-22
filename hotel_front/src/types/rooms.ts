export interface ServiceParms {
   title: string;
   description: string;
   price: string;
}


export interface RoomParams {
   id: string;
   title: string;
   description: string;
   price?: string;
   image: string;
   onClick: (type: string) => void
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