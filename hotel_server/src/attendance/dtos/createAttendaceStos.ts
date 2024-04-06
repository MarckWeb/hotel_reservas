import { IsOptional, IsString } from "class-validator";


export class CreateAttendacesDto {
   @IsOptional()
   userId: string
   comandaId: string

}