import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import { Reservations, reservationSchema } from 'src/reservation/model/reservation.schema'

export type UserDocument = Users & Document

@Schema({ versionKey: false })
export class Users {

   @Prop()
   name: string

   @Prop()
   photo: string;

   @Prop({ required: true, unique: true })
   username: string;

   @Prop()
   bio: string

   @Prop()
   phone: string

   @Prop()
   email: string

   @Prop()
   password: string

   @Prop({ default: Date.now() })
   updatedAt: Date;

   @Prop({ default: Date.now() })
   createdAt: Date;


};
const userSchema = SchemaFactory.createForClass(Users)

export { userSchema };
