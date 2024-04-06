import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AttendaceDocument, Attendances } from './model/attendance.schema';
import { Model } from 'mongoose';
import { CreateAttendacesDto } from './dtos/createAttendaceStos';

@Injectable()
export class AttendanceService {
   constructor(
      @InjectModel(Attendances.name)
      private readonly attendanceModel: Model<AttendaceDocument>
   ) { }

   async getCateringAll(): Promise<Attendances[]> {
      return await this.attendanceModel.find();
   }

   async getCatering(userId: string): Promise<Attendances[]> {
      const findReservation = await this.attendanceModel.find({ userId });
      return findReservation

   }

   async createCatering(
      body: CreateAttendacesDto,
   ) {
      try {
         const createCatering = this.attendanceModel.create(body)
         return await createCatering;
      } catch (error) {
         console.error('Error al crear el dato catering:', error);
         throw error;
      }
   }

   async updateCatering(
      id: string,
      body: CreateAttendacesDto,
   ) {
      const cateringToUpdate = await this.attendanceModel.findById(id);
      const updatedCatering = await this.attendanceModel.updateOne(
         { _id: id },
         { $set: body },
      );
      if (!updatedCatering) {
         throw new Error('Dato no encontrado');
      }
      return updatedCatering;

   }

   async deleteCatering(id: number) {
      const deleteCatering = this.attendanceModel.findByIdAndDelete(id);
      return deleteCatering;
   }

}
