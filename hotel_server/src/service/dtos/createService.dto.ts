import { IsOptional, IsString } from "class-validator";

export class CreateServiceDto {
   @IsString()
   title: string;
   @IsString()
   description: string;

   @IsOptional()
   image: string;

}