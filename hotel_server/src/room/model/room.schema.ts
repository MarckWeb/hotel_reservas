import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RoomsDocument = Rooms & Document

@Schema()
export class Rooms {
   @Prop()
   title: string;

   @Prop()
   description: string;

   @Prop()
   price: string;

   @Prop()
   type: string

   @Prop()
   nRoom: number

   @Prop()
   state: string;

   @Prop()
   tv: boolean;

   @Prop()
   wifi: boolean;

   @Prop()
   roomService: boolean;

   @Prop()
   shortDescription: string;

   @Prop()
   images: Array<string>;

   @Prop()
   image: string;

   @Prop({ default: Date.now() })
   updatedAt: Date;

   @Prop({ default: Date.now() })
   createdAt: Date;

}

const roomSchema = SchemaFactory.createForClass(Rooms)
export { roomSchema }