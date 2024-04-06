import { IsOptional, IsString } from "class-validator";


export class CreateReservationDto {
   @IsOptional()
   userId: string
   nRoom: string
   checkIn: string
   checkOut: string
}