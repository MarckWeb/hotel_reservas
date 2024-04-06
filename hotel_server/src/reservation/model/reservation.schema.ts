import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, Types } from 'mongoose'

export type ReservationDocument = Reservations & Document

@Schema({ versionKey: false })
export class Reservations {
   @Prop()
   userId: string

   @Prop()
   nRoom: string

   @Prop()
   checkIn: string

   @Prop()
   checkOut: string


   @Prop({ default: Date.now() })
   updatedAt: Date;

   @Prop({ default: Date.now() })
   createdAt: Date;


};
const reservationSchema = SchemaFactory.createForClass(Reservations)

export { reservationSchema };
