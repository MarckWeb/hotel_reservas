import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type AttendaceDocument = Attendances & Document

@Schema({ versionKey: false })
export class Attendances {
   @Prop()
   userId: string

   @Prop()
   comandaId: string

   @Prop({ default: Date.now() })
   updatedAt: Date;

   @Prop({ default: Date.now() })
   createdAt: Date;


};
const attendanceSchema = SchemaFactory.createForClass(Attendances)

export { attendanceSchema };
