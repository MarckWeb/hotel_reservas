import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationDocument, Reservations } from './model/reservation.schema';
import { Model } from 'mongoose';
import { CreateReservationDto } from './dtos/cresteReservationDto';

@Injectable()
export class ReservationService {

   constructor(
      @InjectModel(Reservations.name)
      private readonly reservaModel: Model<ReservationDocument>) { }

   async getReservationsAll(): Promise<Reservations[]> {
      return await this.reservaModel.find();
   }

   async getReservation(userId: string): Promise<Reservations[]> {
      const findReservation = await this.reservaModel.find({ userId });
      return findReservation

   }

   async createReservation(
      body: CreateReservationDto,
   ) {
      try {
         const createReservation = this.reservaModel.create(body)
         return await createReservation;
      } catch (error) {

         console.error('Error al crear la habitación:', error);
         throw error;
      }
   }

   async updateReservation(
      id: string,
      body: CreateReservationDto,
   ) {
      const roomToUpdate = await this.reservaModel.findById(id);
      const updatedroom = await this.reservaModel.updateOne(
         { _id: id },
         { $set: body },
      );
      if (!updatedroom) {
         throw new Error('Room no encontrado');
      }
      return updatedroom;

   }

   async deleteReserva(id: number) {
      const deleteRoom = this.reservaModel.findByIdAndDelete(id);
      return deleteRoom;
   }


}
