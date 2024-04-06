import { IsNotEmpty, IsString } from "class-validator";

export class CreateUsersDto {
   @IsString()
   name: string;

   @IsString()
   username: string;

   @IsString()
   @IsNotEmpty()
   password: string;
}