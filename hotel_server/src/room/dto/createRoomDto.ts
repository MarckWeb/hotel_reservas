import { IsOptional, IsString } from "class-validator";


export class CreateRoomDto {
   @IsOptional()
   title: string;
   description: string;
   price: string;
   type: string;
   nRoom: number;
   state: string;
   shortDescription: string;
   image: string;
   tv: boolean;
   wifi: boolean;
   roomService: boolean;
   images: string[];
}