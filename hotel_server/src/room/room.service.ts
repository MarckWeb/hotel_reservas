import { Injectable } from '@nestjs/common';
import { RoomsDocument, Rooms } from './model/room.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRoomDto } from './dto/createRoomDto';
import * as cloudinary from 'cloudinary';

@Injectable()
export class RoomService {
   constructor(
      @InjectModel(Rooms.name)
      private readonly roomModel: Model<RoomsDocument>
   ) { }

   async getAllRoom(): Promise<Rooms[]> {

      const findRooms = await this.roomModel.find();
      return findRooms
   }

   async getRoom(id: string): Promise<Rooms> {
      const findRoom = await this.roomModel.findById(id);
      return findRoom

   }

   async createRoom(
      body: CreateRoomDto,
      images: Express.Multer.File[],
      image: Express.Multer.File
   ) {
      try {
         //Subir todas las imágenes al mismo tiempo
         const uploadesImages = await Promise.all(

            images.map(async (image) => {

               const cloudinaryResponse = await this.uploadToCloudinary(image);

               return cloudinaryResponse.secure_url;
            })
         );

         const uploadUniqueFile = await this.uploadToCloudinary(image[0]);

         // Crear la habitación con las URLs de las imágenes
         const newData = {
            ...body,
            image: uploadUniqueFile.secure_url,
            images: uploadesImages
         };

         const createRoom = this.roomModel.create(newData)
         return await createRoom;
      } catch (error) {

         console.error('Error al crear la habitación:', error);
         throw error;
      }
   }

   private async uploadToCloudinary(image: Express.Multer.File) {
      return await cloudinary.v2.uploader.upload(image.path, { folder: 'room' });
   }

   async updateRoom(
      id: string,
      body: CreateRoomDto,
      image: Express.Multer.File,
   ) {
      const roomToUpdate = await this.roomModel.findById(id);
      console.log(roomToUpdate)


      if (image) {

         if (roomToUpdate.image) {

            const currentImageName = roomToUpdate.image.split('/').pop();
            const imageNameWithoutExtension = currentImageName.split('.')[0];
            const publicId = `room/${imageNameWithoutExtension}`;

            await cloudinary.v2.uploader.destroy(publicId);
         }

         const cloudinaryResponse = await cloudinary.v2.uploader.upload(
            image.path,
            {
               folder: 'room',
            },
         );

         const newData = {
            ...body,
            image: cloudinaryResponse.secure_url,
         };

         const updatedRoom = await this.roomModel.updateOne(
            { _id: id },
            { $set: newData },
         );
         if (!updatedRoom) {
            throw new Error('Usuario no encontrado');
         }
         return updatedRoom;
      } else {
         // Si no se proporcionó una foto, simplemente actualiza los datos del usuario sin la imagen
         const updatedroom = await this.roomModel.updateOne(
            { _id: id },
            { $set: body },
         );
         if (!updatedroom) {
            throw new Error('Usuario no encontrado');
         }
         return updatedroom;
      }
   }

   async deleteRoom(id: number) {
      const roomToDelete = await this.roomModel.findById(id);

      if (roomToDelete.image) {
         const currentImageName = roomToDelete.image.split('/').pop();
         const fileNameWithoutExtension = currentImageName.split('.')[0];
         const publicId = `room/${fileNameWithoutExtension}`;
         await cloudinary.v2.uploader.destroy(publicId);
      }

      const deleteUser = this.roomModel.findByIdAndDelete(id);
      return deleteUser;
   }

}
