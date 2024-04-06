import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, userSchema } from './model/user.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: Users.name,
            schema: userSchema
         }
      ]),
      //hacer el envio de cloudinary
      MulterModule.registerAsync({
         useFactory: () => ({
            storage: diskStorage({}), // Usa el almacenamiento en disco para Multer
         }),
      }),
   ],
   //El controlador maneja las solicitudes HTTP relacionadas con los usuarios,
   controllers: [UserController],
   //mientras que el servicio se encarga de la lógica de negocio relacionada con los usuarios.
   providers: [UserService],
   exports: [UserService]
})
export class UserModule { }
