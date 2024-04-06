import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserDtos {
   @IsOptional()
   name: string;

   photo: string;

   bio: string;
   phone: string;


   email: string;
}