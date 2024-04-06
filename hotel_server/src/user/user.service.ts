import { Injectable } from '@nestjs/common';
import { Users, UserDocument } from './model/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDtos } from './dtos/updateUserDto';
import * as cloudinary from 'cloudinary';

@Injectable()
export class UserService {
   constructor(@InjectModel(Users.name)
   private readonly usersModel: Model<UserDocument>) { }

   async getUsersAll(): Promise<Users[]> {
      return await this.usersModel.find()
   }

   async getUser(id: string): Promise<Users> {
      return await this.usersModel.findById(id)
   }

   async updateUser(
      id: string,
      body: UpdateUserDtos,
      photo: Express.Multer.File,
   ) {
      // Obtener el usuario antes de actualizarlo
      const userToUpdate = await this.usersModel.findById(id);


      if (photo) {
         // Si el usuario ya tiene una imagen, eliminarla de Cloudinary
         if (userToUpdate.photo) {
            console.log(userToUpdate.photo)
            // Obtener el nombre de archivo de la URL de la imagen actual
            const currentImageName = userToUpdate.photo.split('/').pop(); // Obtener el nombre de archivo
            const fileNameWithoutExtension = currentImageName.split('.')[0]; // Eliminar la extensión

            // El `publicId` es el nombre de archivo sin la extensión
            const publicId = `reservation/${fileNameWithoutExtension}`;
            console.log(publicId)

            // Eliminar la imagen anterior de Cloudinary
            const array = await cloudinary.v2.uploader.destroy(publicId);
            console.log(array)
         }

         // Subir la imagen a Cloudinary
         const cloudinaryResponse = await cloudinary.v2.uploader.upload(
            photo.path,
            {
               folder: 'reservation', // Nombre de la carpeta en Cloudinary donde se guardarán las imágenes
            },
         );

         //GUARDAR LAS IMAGENES
         const newData = {
            ...body,
            photo: cloudinaryResponse.secure_url,
         };

         // Actualizar el usuario con la nueva información
         const updatedUser = await this.usersModel.updateOne(
            { _id: id },
            { $set: newData },
         );
         if (!updatedUser) {
            throw new Error('Usuario no encontrado');
         }
         return updatedUser;
      } else {
         // Si no se proporcionó una foto, simplemente actualiza los datos del usuario sin la imagen
         const updatedUser = await this.usersModel.updateOne(
            { _id: id },
            { $set: body },
         );
         if (!updatedUser) {
            throw new Error('Usuario no encontrado');
         }
         return updatedUser;
      }
   }


   async deleteUser(id: string) {
      const userToDelete = await this.usersModel.findById(id);

      if (userToDelete.photo) {
         // Obtener el nombre de archivo de la URL de la imagen actual
         const currentImageName = userToDelete.photo.split('/').pop();
         // Eliminar la extensión
         const fileNameWithoutExtension = currentImageName.split('.')[0];

         // El publicId es el nombre de archivo sin la extensión
         const publicId = `reservation/${fileNameWithoutExtension}`;

         // Eliminar la imagen anterior de Cloudinary
         await cloudinary.v2.uploader.destroy(publicId);
      }

      const deleteUser = this.usersModel.findByIdAndDelete(id);
      return deleteUser;
   }


}
