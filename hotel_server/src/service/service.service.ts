import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Services, ServicesDocument } from './models/service.schema';
import { Model } from 'mongoose';
import * as cloudinary from 'cloudinary';
import { CreateServiceDto } from './dtos/createService.dto';

@Injectable()
export class ServiceService {
   constructor(
      @InjectModel(Services.name)
      private readonly serviceModel: Model<ServicesDocument>
   ) { }

   async getAllServices(): Promise<Services[]> {

      const findServices = await this.serviceModel.find();
      return findServices
   }

   async createService(
      body: CreateServiceDto,
      image: Express.Multer.File
   ) {
      try {
         if (image) {
            const uploadUniqueFile = await cloudinary.v2.uploader.upload(image.path, { folder: 'room' });

            const newData = {
               ...body,
               image: uploadUniqueFile.secure_url,

            };

            const createService = this.serviceModel.create(newData)
            return await createService;
         }

      } catch (error) {

         console.error('Error al los servicios:', error);
         throw error;
      }
   }

}
