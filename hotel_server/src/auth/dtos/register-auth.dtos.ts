import { IsEmail, MaxLength, MinLength, IsString, IsNotEmpty } from 'class-validator';

export class RegisterAuthDto {

   @MinLength(3)
   @MaxLength(20)
   @IsString()
   name: string;

   @MinLength(3)
   @MaxLength(20)
   @IsString()
   username: string;

   @IsString()
   @IsNotEmpty()

   @MaxLength(20)
   password: string;
}